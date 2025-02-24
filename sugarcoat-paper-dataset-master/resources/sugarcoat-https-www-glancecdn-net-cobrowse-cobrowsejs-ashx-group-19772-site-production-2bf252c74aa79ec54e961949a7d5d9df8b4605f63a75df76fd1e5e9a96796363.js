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
  (function () {
    (function () {
      const $___old_bf1ceee432f362ea = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_bf1ceee432f362ea)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_47c01efa79e9f191.userAgent
          ));
        return function () {
          var h;
          window.GLANCE = window.GLANCE || {};
          window.GLANCE.VERSION = '4.9.0.22';
          window.GLANCE.PATCH = '';
          var l = navigator.userAgent.toLowerCase(),
            q = l.match(/(edge)[\s\/:]([\w\d\.]+)?/) ||
              l.match(
                /(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/
              ) ||
              l.match(/(rv):([\w\d\.]+)/) || [null, 'unknown', 0];
          'rv' === q[1] && (q[1] = 'ie');
          void 0 === h &&
            (h = function (a) {
              return JSON.stringify(a);
            });
          function r (a, c, b) {
            window.addEventListener(a, c, b);
          }
          function t (a, c, b) {
            var d = {};
            d[c] = b;
            a.postMessage(d, '*');
          }
          function v (a, c) {
            window.addEventListener('message', function (b) {
              var d;
              if ('string' === typeof b.data)
                try {
                  d = JSON.parse(b.data);
                } catch (z) {
                  return !1;
                }
              else d = b.data;
              void 0 !== d[a] && c(b.source, d[a]);
            });
          }
          window.Sarissa && Sarissa._SARISSA_IS_IE && new window.XMLHttpRequest();
          function w (a, c) {
            this.name = a;
            var b;
            if (!(b = c)) {
              var d = new y(window);
              b = d.b.location.hostname;
              for (d = d.b; '' === b && d.parent !== d; )
                (b = d.parent.location.hostname), (d = d.parent);
              b = A(b);
            }
            this.domain = b;
          }
          w.prototype.g = function () {
            var a = this.get();
            return a ? JSON.parse(a) : null;
          };
          w.prototype.get = function () {
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
          w.prototype.f = function () {
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
          w.prototype.c = function () {
            return new RegExp(
              '(?:^|;\\s*)' + escape(this.name).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\='
            ).test(document.cookie);
          };
          function E (a) {
            this.name = a;
          }
          E.prototype.g = function () {
            if (!this.c()) return null;
            var a = localStorage.getItem(this.name);
            return JSON.parse(a);
          };
          E.prototype.get = function () {
            return this.c() ? localStorage.getItem(this.name) : null;
          };
          E.prototype.f = function () {
            localStorage.removeItem(this.name);
            localStorage.removeItem(this.name + '_exp');
          };
          E.prototype.c = function () {
            const $___old_3ab76f98b9627614 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_3ab76f98b9627614)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_b317e19f866a2da7.localStorage
                ));
              return function () {
                var a = localStorage.getItem(this.name + '_exp');
                if (!a) return !1;
                a = new Date(a);
                return a < new Date() ? (this.f(), !1) : !0;
              }.apply(this, arguments);
            } finally {
              if ($___old_3ab76f98b9627614)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_3ab76f98b9627614));
            }
          };
          function F (a, c) {
            this.a = [new w(a, c), new E(a)];
          }
          F.prototype.g = function () {
            return this.a[0].g() || this.a[1].g();
          };
          F.prototype.get = function () {
            return this.a[0].get() || this.a[1].get();
          };
          F.prototype.f = function () {
            this.a[0].f();
            this.a[1].f();
          };
          F.prototype.c = function () {
            return this.a[0].c() || this.a[1].c();
          };
          function y (a) {
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
          function A (a) {
            var c = new RegExp(/^(?:[a-z]{1,5}:\/\/|)([^\:\?\/]*)/),
              b = a.match(/^\d+\.\d+.\d+.\d+$/),
              c = c.exec(a);
            if (b) return a;
            if (null === c || 2 !== c.length)
              return 'about:' !== a && G('ERR_DOMAINPARSE: ' + a), null;
            b = c[1].split('.');
            return 1 === b.length
              ? (G('ERR_DOMAINPARSE: ' + a), null)
              : 2 === b.length
              ? b.join('.')
              : 3 === b.length
              ? b.slice(1).join('.')
              : 4 >= b[b.length - 2].length
              ? b.slice(b.length - 3).join('.')
              : b.slice(b.length - 2).join('.');
          }
          y.prototype.getElementsByTagName = function (a) {
            return this.a.getElementsByTagName(a);
          };
          function H (a, c, b) {
            var d = a.a.createElement('script');
            b && d.addEventListener('load', b);
            d.setAttribute('type', 'text/javascript');
            d.setAttribute('charset', 'UTF-8');
            for (b = 0; b < c.length; b++) d.setAttribute(c[b][0], c[b][1]);
            a.a.head.appendChild(d);
          }
          y.prototype.head = function () {
            return void 0 !== this.a.head ? this.a.head : this.getElementsByTagName('head')[0];
          };
          function I (a, c) {
            a.b.addEventListener &&
              (document.readyState.match(/complete/)
                ? c()
                : (a.b.addEventListener('load', c),
                  a.a.addEventListener('DOMContentLoaded', c, !1)));
          }
          y.prototype.addEventListener = function (a, c, b) {
            this.a.addEventListener(a, c, b);
          };
          y.prototype.removeEventListener = function (a, c, b) {
            this.a.removeEventListener(a, c, b);
          };
          function G (a) {
            window.console &&
              window.console.log &&
              (window.GLANCE_COBROWSE ? !window.GLANCE_COBROWSE.disableLogging : 1) &&
              window.console.log(a);
          }
          function J () {
            this.listeners = this.a = {};
          }
          function K (a, c) {
            var b;
            a &&
              ((b = b || Object.keys(a)),
              b.forEach(function (b) {
                void 0 !== a[b] && (c[b] = a[b]);
              }));
          }
          function O (a) {
            var c = {};
            if (!a) return c;
            var b = 0;
            for (a = a.attributes; b < a.length; b++) {
              var d = a[b].nodeName.match(/data-(.*)/);
              d && 2 === d.length && (c[d[1]] = a[b].nodeValue);
            }
            return c;
          }
          function P () {
            var a = window.GLANCE_COBROWSE ? window.GLANCE_COBROWSE : {},
              c = document.getElementById('glance-cobrowse'),
              b = O(document.getElementById('cobrowsescript')),
              c = O(c);
            K(b, a);
            K(c, a);
            return a;
          }
          var Q = ['4', '9', '0', '22'].slice(0, 3).join('.') + 'M';
          function R () {
            this.a =
              document.getElementById('cobrowsescript') ||
              document.getElementById('glance-cobrowse');
            if (null !== this.a) {
              var a = P();
              K(a, this);
              var c = /\/\/(.*)\//.exec(
                'string' === typeof this.a.src ? this.a.src : a.scriptserver + '/'
              );
              this.h = c && 2 === c.length ? c[1] : 'www.glancecdn.net/cobrowse';
              this.h = this.h.replace('/js', '');
              c = (a.oninit || '').split(':');
              this.j = a.groupid || this.a.getAttribute('groupid');
              this.A = a.ws || this.a.getAttribute('ws') || 'www.glance.net';
              this.A.match('\\.glance\\.net$');
              this.w = a.ui;
              this.b = { i: c[0], B: c[1] };
              this.v = a.site || this.a.getAttribute('site') || 'production';
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
          window.GLANCE = window.GLANCE || {};
          window.GLANCE.Cobrowse = window.GLANCE.Cobrowse || {};
          function S () {
            const $___old_b28ffc4fb641194b = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              ),
              $___old_7930bee4fc2e5144 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              );
            try {
              if ($___old_b28ffc4fb641194b)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_b317e19f866a2da7.localStorage
                ));
              if ($___old_7930bee4fc2e5144)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___stub_afd3abb015d4d981.XMLHttpRequest
                ));
              return function () {
                function a () {
                  if (f.b.i) {
                    var a = new F('glance_ssn_info');
                    a.g() &&
                      ('abandonsession' === f.b.i
                        ? a.f()
                        : 'continuesession' === f.b.i && f.b.B !== a.g().ssnid && a.f());
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
                        !L(e, c))
                      )
                        window.GLANCE.Cobrowse[e][c]();
                    };
                  }
                  for (var c in a)
                    if (a.hasOwnProperty(c)) {
                      var e = c.match(/(ctrl|alt|shift)-(\d*)/);
                      !e || 3 > e.length || r('keydown', b(e[1], parseInt(e[2]), a[c]), !0);
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
                      if (!L(c, a)) g[c][a]();
                    };
                  }
                  ['glance_button', 'data-glancebutton'].forEach(function (c) {
                    for (
                      var e = a.querySelectorAll('[' + c + ']'), d = 0;
                      e && d < e.length;
                      d++
                    ) {
                      var B = e[d].getAttribute(c);
                      'start' === B && (B = 'startSession');
                      e[d].addEventListener('click', b(B));
                    }
                  });
                }
                function d () {
                  return g.Visitor;
                }
                function z (a, b) {
                  g[b][a] = function (c) {
                    m(function () {
                      g[b][a](c);
                    }, b);
                  };
                }
                function L (a, b) {
                  if (!n) return !1;
                  t(window.top, 'forwardevent', { namespace: a, funcname: b });
                  return !0;
                }
                function m (a, b) {
                  b = b || 'Visitor';
                  if (p.a.getElementById(('glance_' + b).toLowerCase()))
                    g[b].loaded ? a && a() : a && G('SCRIPT_NOT_LOADED:' + b);
                  else if (
                    (a && (M._onload[b] = a),
                    n || 'Visitor' !== b || f.w || m(null, 'VisitorUI'),
                    H(p, [
                      ['id', ('glance_' + b).toLowerCase()],
                      ['src', C + '/GlanceCobrowse' + b + '_' + D + '.js'],
                    ]),
                    'Visitor' === b)
                  ) {
                    var c,
                      e = document.getElementsByTagName('iframe');
                    for (c = 0; c < e.length; c++)
                      e[c].contentWindow && t(e[c].contentWindow, 'glance_load', { m: !0 });
                  }
                }
                window.GLANCE.runDiagnostics = function () {
                  H(p, [['src', 'https://' + f.h + '/js/diagnostics.js']]);
                };
                if (window.localStorage && window.XMLHttpRequest && window.atob) {
                  if (!window.addEventListener) return null;
                  var n = window.parent !== window,
                    p = new y(window),
                    N = !1,
                    f = new R(),
                    D = Q,
                    g = window.GLANCE.Cobrowse,
                    C = '//' + f.h + '/js';
                  n || a();
                  var u = new J();
                  if (g.Loader) G('ERR_DUP_SCRIPTS');
                  else {
                    var M = {
                      load: function (a) {
                        m(a);
                      },
                      loadScript: function (a, b) {
                        H(p, [['src', C + '/' + a + '_' + D + '.js']], b);
                      },
                      _eventListeners: u,
                      _onload: {},
                      _origpath: window.location.pathname,
                    };
                    v('glance_load', function (a, b) {
                      a !== window.parent && a.parent !== window
                        ? G('UNTRUSTED_LOAD_MSG')
                        : (b.m && m(),
                          b.u &&
                            null !== p.a.getElementById('glance_visitor') &&
                            t(a, 'glance_load', { m: !0 }));
                    });
                    n && t(window.parent, 'glance_load', { u: !0 });
                    window.addEventListener('message', function (a) {
                      if ('string' !== typeof a.data) {
                        if (d().loaded) return !0;
                        a.data.glance_invoke &&
                          ((a.data.origin = a.origin),
                          m(function () {
                            window.postMessage(a.data, window.location.href);
                          }));
                      }
                    });
                    r('focus', function () {
                      if (d().loaded) return !0;
                      d().inSession() && m();
                    });
                    g.Visitor = {
                      loaded: !1,
                      inSession: function () {
                        return new F('glance_ssn_info').c();
                      },
                      addEventListener: function (a, b) {
                        u.a[a] = u.a[a] || [];
                        u.a[a].push(b);
                      },
                      removeEventListener: function (a, b) {
                        var c,
                          d = u.a[a];
                        void 0 !== d && ((c = d.indexOf(b)), 0 <= c && d.splice(c, 1));
                      },
                    };
                    var x = ['showButton', 'toggleButton', 'showTerms', 'setStyle'];
                    n ||
                      ((g.VisitorUI = {}),
                      x.forEach(function (a) {
                        z(a, 'VisitorUI');
                      }));
                    x = x.concat(['startSession', 'setStartParams']);
                    x.forEach(function (a) {
                      z(a, 'Visitor');
                    });
                    g.Loader = M;
                    n ||
                      !(
                        d().inSession() ||
                        0 < window.location.href.indexOf('GlanceSession=1') ||
                        'continuesession' === f.b.i
                      ) ||
                      m();
                    I(p, function () {
                      document.body &&
                        !N &&
                        ((N = !0),
                        b(),
                        c(f.o),
                        f.s && !n && H(p, [['src', C + '/GlancePresenceVisitor_' + D + '.js']]));
                    });
                    v('forwardevent', function (a, b) {
                      if (a.top !== window) G('UNTRUSTED_KEYEVT');
                      else window.GLANCE.Cobrowse[b.namespace][b.funcname]();
                    });
                  }
                } else
                  window.console &&
                    window.console.error &&
                    window.console.error('ERR_COBROWSE_NOT_SUPP');
              }.apply(this, arguments);
            } finally {
              if ($___old_b28ffc4fb641194b)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_b28ffc4fb641194b));
              if ($___old_7930bee4fc2e5144)
                ({}.constructor.defineProperty(
                  window,
                  'XMLHttpRequest',
                  $___old_7930bee4fc2e5144
                ));
            }
          }
          document.getElementById('cobrowsescript') || document.getElementById('glance-cobrowse')
            ? S()
            : (G('LOADER_PAGE_NOT_READY'), I(new y(window), S));
        }.apply(this, arguments);
      } finally {
        if ($___old_bf1ceee432f362ea)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_bf1ceee432f362ea
          ));
      }
    }.call(window));
  })();
}
