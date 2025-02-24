{
  const $___stub_9d7b4eb662ee43f5 = {};
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
  })($___stub_9d7b4eb662ee43f5);
  const $___stub_a011c28886b08277 = {};
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
  })($___stub_a011c28886b08277);
  const $___stub_8343e440b270d768 = {};
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
  })($___stub_8343e440b270d768);
  (function () {
    !(function (e) {
      function t (r) {
        if (n[r]) return n[r].exports;
        var i = (n[r] = { exports: {}, id: r, loaded: !1 });
        return e[r].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
      }
      var n = {};
      (t.m = e), (t.c = n), (t.p = ''), t(0);
    })([
      function (e, t, n) {
        n(1), n(2), (e.exports = n(5));
      },
      function (e, t) {
        'use strict';
        !(function (e) {
          e.console || (e.console = {});
          for (
            var t,
              n,
              r = e.console,
              i = function () {},
              o = ['memory'],
              a = 'assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn'.split(
                ','
              );
            (t = o.pop());

          )
            r[t] || (r[t] = {});
          for (; (n = a.pop()); ) r[n] || (r[n] = i);
        })('undefined' == typeof window ? undefined : window);
      },
      function (e, t, n) {
        'use strict';
        e.exports = n(3);
      },
      function (e, t, n) {
        var r, i, o;
        (function (e, n) {
          'use strict';
          var a =
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
          !(function (e, u) {
            'object' == a(t) && 'object' == a(n)
              ? (n.exports = u())
              : ((i = []),
                (r = u),
                (o = 'function' == typeof r ? r.apply(t, i) : r) !== undefined && (n.exports = o));
          })(undefined, function () {
            return (function (e) {
              function t (r) {
                if (n[r]) return n[r].exports;
                var i = (n[r] = { exports: {}, id: r, loaded: !1 });
                return e[r].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
              }
              var n = {};
              return (t.m = e), (t.c = n), (t.p = ''), t(0);
            })([
              function (t, n, r) {
                function i (e) {
                  (this.name = 'JackdawError'), (this.message = e);
                }
                function o (e, t) {
                  const $___old_d637cd8334b9e9c5 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'userAgent'
                  );
                  try {
                    if ($___old_d637cd8334b9e9c5)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___stub_9d7b4eb662ee43f5.userAgent
                      ));
                    return function () {
                      function n (e, t) {
                        t = t || {};
                        var n = g(e);
                        return (
                          (W = O(W, { project: n.projectId })),
                          (W = O(W, t || {})),
                          (W.maxBreadcrumbs = Math.max(0, Math.min(W.maxBreadcrumbs, 100))),
                          (q = n.endpoint),
                          (V = W.transport = t.transport || x),
                          this
                        );
                      }
                      function r (e) {
                        return '[object DOMError]' === Object.prototype.toString.call(e);
                      }
                      function a (e) {
                        return '[object DOMException]' === Object.prototype.toString.call(e);
                      }
                      function c (e, t) {
                        W.debug && console.log(t);
                      }
                      function f () {
                        (j = 0), (H = null);
                      }
                      function p () {
                        return j && D() - H < j;
                      }
                      function h (e) {
                        if (p()) return void c('warn', 'Should back off');
                        var t = e.status;
                        if (400 === t || 401 === t || 429 === t) {
                          var n;
                          try {
                            (n = e.getResponseHeader('Retry-After')), (n = 1000 * parseInt(n, 10));
                          } catch (i) {}
                          (j = n || 2 * j || 1000), (H = D());
                        }
                      }
                      function m (e) {
                        return (
                          !!P &&
                          (e.stacktrace || P.stacktrace
                            ? E(e.stacktrace, P.stacktrace)
                            : e.exception || P.exception
                            ? _(e.exception, P.exception)
                            : e.fingerprint || P.fingerprint
                            ? Boolean(e.fingerprint && P.fingerprint) &&
                              R(e.fingerprint) === R(P.fingerprint)
                            : k(e.message, P.message))
                        );
                      }
                      function v (e, t, n) {
                        if (p()) return void (t && t(new i('Should back off')));
                        if (m(e))
                          return (
                            c('warn', 'Jackdaw dropped repeat event: ', e),
                            void (t && t(new i('Dropped repeat event')))
                          );
                        (e = O(W, e)),
                          (e.tag = e.tag || {}),
                          (e.extra = e.extra || {}),
                          (e.extra['session:duration'] = D() - U),
                          I && I.length > 0 && (e.breadcrumbs = { values: [].slice.call(I, 0) }),
                          (F = e.event_id = L()),
                          (P = e),
                          c('debug', 'Jackdaw about to send:', e);
                        var r = (B = e.exception && e.exception.values[0]);
                        S.addBreadcrumb({
                          category: 'sentry',
                          message: r ? (r.type ? r.type + ': ' : '') + r.value : e.message,
                          event_id: F,
                          level: e.level || 'error',
                        });
                        try {
                          n({
                            url: q,
                            data: e,
                            onSuccess: function () {
                              f(), t && t();
                            },
                            onError: function (e) {
                              c('error', 'Jackdaw transport failed to send: ', e),
                                e.request && h(e.request),
                                t && t(e);
                            },
                          });
                        } catch (u) {
                          t && t(u);
                        }
                      }
                      function g (e) {
                        var t,
                          n = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
                          r = n.exec(e);
                        return r
                          ? ((t = {
                              protocol: r[1],
                              user: r[2],
                              pass: r[3] || '',
                              host: r[4],
                              port: r[5] || '',
                              projectId: r[6],
                            }),
                            (t.endpoint =
                              t.protocol +
                              '://' +
                              t.host +
                              (t.port ? ':' + t.port : '') +
                              '/api/' +
                              t.projectId +
                              '/store/?sentry_version=7&sentry_key=' +
                              t.user +
                              (t.pass ? '&sentry_secret=' + t.pass : '')),
                            t)
                          : '';
                      }
                      function y (e, t) {
                        function n () {
                          try {
                            return l.location.href;
                          } catch (e) {}
                          return '';
                        }
                        function r (e, t, n, r) {
                          var i = { url: t, line: n };
                          if (i.url && i.line) {
                            if (
                              ((e.incomplete = !1),
                              i.func || (i.func = '?'),
                              e.stack.length > 0 && e.stack[0].url === i.url)
                            ) {
                              if (e.stack[0].line === i.line) return !1;
                              if (!e.stack[0].line && e.stack[0].func === i.func)
                                return (e.stack[0].line = i.line), !1;
                            }
                            return e.stack.unshift(i), (e.partial = !0), !0;
                          }
                          return (e.incomplete = !0), !1;
                        }
                        function i (e, t) {
                          for (
                            var o,
                              a,
                              u = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
                              s = [],
                              l = {},
                              d = !1,
                              c = i.caller;
                            c && !d;
                            c = c.caller
                          )
                            if (c !== y) {
                              if (
                                ((a = { url: null, func: '?', line: null, column: null }),
                                c.name
                                  ? (a.func = c.name)
                                  : (o = u.exec(c.toString())) && (a.func = o[1]),
                                'undefined' == typeof a.func)
                              )
                                try {
                                  a.func = o.input.substring(0, o.input.indexOf('{'));
                                } catch (p) {}
                              l['' + c] ? (d = !0) : (l['' + c] = !0), s.push(a);
                            }
                          t && s.splice(0, t);
                          var f = { name: e.name, message: e.message, url: n(), stack: s };
                          return (
                            r(
                              f,
                              e.sourceURL || e.fileName,
                              e.line || e.lineNumber,
                              e.message || e.description
                            ),
                            f
                          );
                        }
                        var o = null;
                        t = null == t ? 0 : +t;
                        try {
                          if (
                            (o = (function (e) {
                              if ('undefined' != typeof e.stack && e.stack) {
                                for (
                                  var t,
                                    r,
                                    i,
                                    o,
                                    a = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                                    u = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                                    s = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                                    l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                                    d = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                                    c = e.stack.split('\n'),
                                    f = [],
                                    p = 0,
                                    h = c.length;
                                  p < h;
                                  ++p
                                ) {
                                  if ((r = a.exec(c[p]))) {
                                    var m = r[2] && 0 === r[2].indexOf('native');
                                    (o = r[2] && 0 === r[2].indexOf('eval')),
                                      o &&
                                        (t = d.exec(r[2])) &&
                                        ((r[2] = t[1]), (r[3] = t[2]), (r[4] = t[3])),
                                      (i = {
                                        url: m ? null : r[2],
                                        func: r[1] || '?',
                                        args: m ? [r[2]] : [],
                                        line: r[3] ? +r[3] : null,
                                        column: r[4] ? +r[4] : null,
                                      });
                                  } else if ((r = u.exec(c[p])))
                                    i = {
                                      url: r[2],
                                      func: r[1] || '?',
                                      args: [],
                                      line: +r[3],
                                      column: r[4] ? +r[4] : null,
                                    };
                                  else {
                                    if (!(r = s.exec(c[p]))) continue;
                                    (o = r[3] && r[3].indexOf(' > eval') > -1),
                                      o && (t = l.exec(r[3]))
                                        ? ((r[3] = t[1]), (r[4] = t[2]), (r[5] = null))
                                        : 0 !== p ||
                                          r[5] ||
                                          'undefined' == typeof e.columnNumber ||
                                          (f[0].column = e.columnNumber + 1),
                                      (i = {
                                        url: r[3],
                                        func: r[1] || '?',
                                        args: r[2] ? r[2].split(',') : [],
                                        line: r[4] ? +r[4] : null,
                                        column: r[5] ? +r[5] : null,
                                      });
                                  }
                                  !i.func && i.line && (i.func = '?'), f.push(i);
                                }
                                return f.length
                                  ? { name: e.name, message: e.message, url: n(), stack: f }
                                  : null;
                              }
                            })(e))
                          )
                            return o;
                        } catch (s) {}
                        try {
                          if ((o = i(e, t + 1))) return o;
                        } catch (s) {}
                        return { name: e.name, message: e.message, url: n() };
                      }
                      function b (e, t) {
                        function n (e, t) {
                          var n = {
                            filename: e.url,
                            lineno: e.line,
                            colno: e.column,
                            function: e.func || '?',
                          };
                          return e.url || (n.filename = t), n;
                        }
                        var r = [];
                        if (
                          e.stack &&
                          e.stack.length &&
                          (A(e.stack, function (t, i) {
                            var o = n(i, e.url);
                            o && r.push(o);
                          }),
                          t && t.trimHeadFrames)
                        )
                          for (var i = 0; i < t.trimHeadFrames && i < r.length; i++)
                            r[i].in_app = !1;
                        return (r = r.slice(0, 50));
                      }
                      function w (e, t, n, r, i, o) {
                        var a;
                        i && i.length
                          ? ((n = i[0].filename || n), i.reverse(), (a = { frames: i }))
                          : n && (a = { frames: [{ filename: n, lineno: r, in_app: !0 }] });
                        var u = O(
                            { exception: { values: [{ type: e, value: t, stacktrace: a }] } },
                            o
                          ),
                          s = u.exception.values[0];
                        return (
                          null == s.type &&
                            '' === s.value &&
                            (s.value = 'Unrecoverable error caught'),
                          u
                        );
                      }
                      function _ (e, t) {
                        return (
                          !T(e, t) &&
                          ((e = e.values[0]),
                          (t = t.values[0]),
                          e.type === t.type &&
                            e.value === t.value &&
                            !C(e.stacktrace, t.stacktrace) &&
                            E(e.stacktrace, t.stacktrace))
                        );
                      }
                      function E (e, t) {
                        if (T(e, t)) return !1;
                        var n = e.frames,
                          r = t.frames;
                        if (n === undefined || r === undefined) return !1;
                        if (n.length !== r.length) return !1;
                        for (var i, o, a = 0; a < n.length; a++)
                          if (
                            ((i = n[a]),
                            (o = r[a]),
                            i.filename !== o.filename ||
                              i.lineno !== o.lineno ||
                              i.colno !== o.colno ||
                              i['function'] !== o['function'])
                          )
                            return !1;
                        return !0;
                      }
                      function k (e, t) {
                        return !((!e && !t) || (e && !t) || (!e && t) || e !== t);
                      }
                      function x (e) {
                        var t = e.url,
                          n = s.XMLHttpRequest && new s.XMLHttpRequest();
                        if (!n) return !1;
                        var r = 'withCredentials' in n;
                        if (!r && 'undefined' == typeof s.XDomainRequest) return !1;
                        r
                          ? ((n.withCredentials = !0),
                            (n.onreadystatechange = function () {
                              if (4 !== n.readyState);
                              else if (200 === n.status) e.onSuccess && e.onSuccess();
                              else if (e.onError) {
                                var t = new i('Transport error code: ' + n.status);
                                (t.request = n), e.onError(t);
                              }
                            }))
                          : ((n = new s.XDomainRequest()),
                            (t = t.replace(/^https?:/, '')),
                            e.onSuccess && (n.onload = e.onSuccess),
                            e.onError &&
                              (n.onerror = function () {
                                var t = new i('Transport error code: XDomainRequest');
                                (t.request = n), e.onError(t);
                              })),
                          n.open('POST', t, !0),
                          n.send(R(e.data));
                      }
                      function T (e, t) {
                        return !!(!!e ^ !!t);
                      }
                      function C (e, t) {
                        return N(e) && N(t);
                      }
                      function N (e) {
                        return void 0 === e;
                      }
                      function L () {
                        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                          var t = (16 * Math.random()) | 0;
                          return ('x' === e ? t : (3 & t) | 8).toString(16);
                        });
                      }
                      function R (e) {
                        return (
                          JSON.stringify ||
                          function t (e) {
                            var n = void 0 === e ? 'undefined' : u(e);
                            if ('object' !== n || null === e)
                              return 'string' === n && (e = '"' + e + '"'), String(e);
                            var r,
                              i,
                              o = [],
                              a = e && e.constructor === Array;
                            for (r in e)
                              (i = e[r]),
                                (n = void 0 === i ? 'undefined' : u(i)),
                                'string' === n
                                  ? (i = '"' + i + '"')
                                  : 'object' === n && null !== i && (i = t(i)),
                                o.push((a ? '' : '"' + r + '":') + String(i));
                            return (a ? '[' : '{') + String(o) + (a ? ']' : '}');
                          }
                        )(e);
                      }
                      function O (e, t) {
                        return t
                          ? (A(t, function (t, n) {
                              e[t] = n;
                            }),
                            e)
                          : e;
                      }
                      function A (e, t) {
                        var n, r;
                        if ('function' == typeof t)
                          if (e.length) {
                            if ((r = e.length)) for (n = 0; n < r; n++) t.call(null, n, e[n]);
                          } else
                            for (n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && t.call(null, n, e[n]);
                      }
                      function D () {
                        return +new Date();
                      }
                      if (this instanceof o == 0) return new o(e, t);
                      if (!e) throw new i('All I want is a public DSN string');
                      var M = (o._instanceMap = o._instanceMap || {});
                      if (M[e]) return t && M[e].config(e, t), M[e];
                      M[e] = this;
                      var S = this,
                        U = D(),
                        I = [],
                        F = null,
                        P = null,
                        B = null,
                        j = 0,
                        H = null,
                        q = null,
                        W = {
                          logger: 'javascript',
                          platform: 'javascript',
                          request: {
                            headers: { 'User-Agent': d.userAgent },
                            url: l.location.href,
                            referrer: l.referrer,
                          },
                          sdk: { name: '@kakao/jackdaw-js', version: '1.0.4' },
                          level: 'error',
                          maxBreadcrumbs: 100,
                          debug: !1,
                        },
                        V = x;
                      (this.config = n),
                        (this.addBreadcrumb = function (e) {
                          var t = O({ timestamp: D() / 1000 }, e);
                          return (
                            I.push(t),
                            I.length > W.maxBreadcrumbs &&
                              I.splice(0, I.length - W.maxBreadcrumbs),
                            this
                          );
                        }),
                        (this.captureMessage = function (e, t, n) {
                          var r = V;
                          if (!e) throw new i('Need something to send message');
                          return (
                            t &&
                              'function' == typeof t.transport &&
                              ((r = t.transport), delete t.transport),
                            v(O({ message: e + '' }, t || {}), n, r),
                            this
                          );
                        }),
                        (this.captureException = function (e, t, n) {
                          var o = V;
                          if (!e) throw new i('Need something to send exception or error');
                          if (
                            (t &&
                              'function' == typeof t.transport &&
                              ((o = t.transport), delete t.transport),
                            e.error && (e = e.error),
                            r(e) || a(e))
                          ) {
                            var u = e.name || (r(e) ? 'DOMError' : 'DOMException'),
                              s = e.message ? u + ': ' + e.message : u;
                            return this.captureMessage(
                              s,
                              O(t, { stacktrace: !0, trimHeadFrames: t.trimHeadFrames + 1 })
                            );
                          }
                          (B = e),
                            (t = O({ trimHeadFrames: 0 }, t || {})),
                            (t.level = t.level || 'error');
                          var l = y(e),
                            d = b(l);
                          return v(w(l.name, l.message, l.url, l.lineno, d, t), n, o), this;
                        }),
                        (this.lastException = function () {
                          return B;
                        }),
                        (this.lastData = function () {
                          return P;
                        }),
                        (this.lastEventId = function () {
                          return F;
                        }),
                        n(e, t);
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_d637cd8334b9e9c5)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'userAgent',
                        $___old_d637cd8334b9e9c5
                      ));
                  }
                }
                var u =
                    'function' == typeof Symbol && 'symbol' == a(Symbol.iterator)
                      ? function (e) {
                          return void 0 === e ? 'undefined' : a(e);
                        }
                      : function (e) {
                          return e &&
                            'function' == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : void 0 === e
                            ? 'undefined'
                            : a(e);
                        },
                  s =
                    'undefined' != typeof window
                      ? window
                      : void 0 !== e
                      ? e
                      : 'undefined' != typeof self
                      ? self
                      : {},
                  l = s.document,
                  d = s.navigator;
                s.Jackdaw || (s.Jackdaw = o),
                  (i.prototype = new Error()),
                  (i.prototype.constructor = i),
                  (t.exports = o);
              },
            ]);
          });
        }.call(
          t,
          (function () {
            return this;
          })(),
          n(4)(e)
        ));
      },
      function (e, t) {
        'use strict';
        e.exports = function (e) {
          return (
            e.webpackPolyfill ||
              ((e.deprecate = function () {}),
              (e.paths = []),
              (e.children = []),
              (e.webpackPolyfill = 1)),
            e
          );
        };
      },
      function (e, t, n) {
        'use strict';
        n(6);
        var r = n(10),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
        !(function (e) {
          ('AdfitNativeAds' in e == !1 || e.AdfitNativeAds.usePendingRequests) &&
            ((e.AdfitNativeAds = n(30)['default']),
            (e.AdfitNativeAds.init = function () {
              (0, i['default'])(e.AdfitNativeAds);
            }),
            (e.AdfitPopUpBanner = n(137)['default'])),
            setTimeout(function () {
              return e.AdfitNativeAds.init;
            }, 1);
        })(window);
      },
      function (e, t, n) {
        var r = n(7);
        'string' == typeof r && (r = [[e.id, r, '']]);
        n(9)(r, { singleton: !0 });
        r.locals && (e.exports = r.locals);
      },
      function (e, t, n) {
        (t = e.exports = n(8)(!1)),
          t.push([
            e.id,
            '.kakao-video-ad{background-color:transparent;text-align:center;padding:0;margin:0;font-family:HelveticaNeue-Light,AppleSDGothicNeo-Light,Malgun Gothic,"\\B9D1\\C740   \\ACE0\\B515",sans-serif}.kakao-video-ad .header{position:absolute;left:0;top:0;width:100%;z-index:10;height:60px;background:-moz-linear-gradient(top,rgba(0,0,0,.3) 0,transparent 100%);background:-webkit-linear-gradient(top,rgba(0,0,0,.3),transparent);background:linear-gradient(180deg,rgba(0,0,0,.3) 0,transparent);transition:opacity 1s}.kakao-video-ad .header .link_ad{display:block;overflow:hidden;padding:12px 12px 12px 11px;font-size:15px;color:#fff;text-shadow:0 1px 1px rgba(0,0,0,.12);text-decoration:none}.kakao-video-ad .header .link_ad .txtdetail_ad{float:left;overflow:hidden;max-width:calc(100% - 98px);margin-top:6px;font-weight:600;letter-spacing:0;white-space:nowrap;text-rendering:auto;text-overflow:ellipsis;text-shadow:1px 1px 1px rgba(0,0,0,.24);text-align:left}.kakao-video-ad .header .link_ad .ico_ad{float:left;overflow:hidden;width:27px;height:16px;margin:-1px 5px 0 0;vertical-align:top;background:url(https://t1.daumcdn.net/biz/ui/adplayer/m320/ico_adplayer_171026_v2.png) no-repeat -70px 0;text-indent:-9999px}.kakao-video-ad .header .link_ad .txt_go{float:right;height:26px;border-radius:2px;font-weight:500;font-size:13px;line-height:27px;background-color:rgba(0,0,0,.6);text-align:center;padding-left:10px;padding-right:10px;letter-spacing:-1px}.kakao-video-ad .header .link_ad .txt_go:after{display:inline-block;width:7px;height:11px;margin:8px 0 0 4px;background:url(https://t1.daumcdn.net/biz/ui/adplayer/m320/ico_adplayer2_180308.png) no-repeat -150px -20px;vertical-align:top;content:""}.kakao-video-ad{display:block;overflow:hidden;max-height:319.5px;width:100%;height:0;padding-top:56.25%;vertical-align:top;box-sizing:border-box;color:#fff;background-color:#000;position:relative;font-size:10px;line-height:1;font-weight:400;font-style:normal;font-family:HelveticaNeue,Helvetica,roboto,sans-serif}.kakao-video-ad *{box-sizing:inherit}.kakao-video-ad video{position:absolute;top:0;left:0;width:100%;height:100%}.kakao-video-ad button{background:none;border:none;color:inherit;display:inline-block;overflow:visible;font-size:inherit;line-height:inherit;text-transform:none;text-decoration:none;transition:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.kakao-video-ad .loading-spinner{display:none;position:absolute;top:50%;left:50%;margin:-25px 0 0 -25px;opacity:.85;text-align:left;border:6px solid rgba(43,51,63,.7);box-sizing:border-box;background-clip:padding-box;width:50px;height:50px;border-radius:25px}.kakao-video-ad .loading-spinner:after,.kakao-video-ad .loading-spinner:before{content:"";position:absolute;margin:-6px;box-sizing:inherit;width:inherit;height:inherit;border-radius:inherit;opacity:1;border:inherit;border-color:transparent;border-top-color:#fff}.kakao-video-ad.loadstart .loading-spinner:after,.kakao-video-ad.loadstart .loading-spinner:before{-webkit-animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite;animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite}.kakao-video-ad.loadstart .loading-spinner{display:block}.kakao-video-ad.loadstart.error .loading-spinner{display:none}.kakao-video-ad .link-load{display:none;position:absolute;top:0;left:0;width:100%;height:100%;color:#fff;text-decoration:none;visibility:visible}.kakao-video-ad .link-load.vod_replay:after{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.3);content:""}.kakao-video-ad .load{position:absolute;left:50%;top:50%;z-index:1;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.kakao-video-ad.loaded-data .load .ico_load{display:block;overflow:hidden;width:40px;height:40px;margin:0 auto;background:url(https://t1.daumcdn.net/biz/ui/adplayer/m320/ico_adplayer2_180308.png) no-repeat 0 0;text-indent:-9999px;transition:opacity 1s}.kakao-video-ad.has-started.playing .load .ico_load{opacity:0;background-position:-40px 0}.kakao-video-ad.has-started.playing.show-buttons .load .ico_load{opacity:1;transition:opacity 1s;background-position:-40px 0}.kakao-video-ad.has-started.show-buttons.playing.paused.ended .link-load{display:inline-block}.kakao-video-ad.has-started.show-buttons.playing.paused.ended .load .ico_load{opacity:1;background-position:-80px 0}.kakao-video-ad.has-started.show-buttons.playing.paused .load .ico_load{opacity:1;background-position:0 0}.load .txt_time{overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px}.kakao-video-ad .poster{display:inline-block;vertical-align:middle;background-repeat:no-repeat;background-position:50% 50%;background-size:contain;background-color:#000;cursor:pointer;margin:0;padding:0;position:absolute;top:0;right:0;bottom:0;left:0;height:100%;opacity:0;transition:opacity 1s}.kakao-video-ad .poster img{display:block;vertical-align:middle;margin:0 auto;max-height:100%;padding:0;width:100%}.kakao-video-ad.has-started .poster{opacity:0}.kakao-video-ad .control-bar{position:absolute;width:100%;height:60px;left:0;right:0;bottom:0;font-size:0;visibility:visible;opacity:1;text-align:right;background:-moz-linear-gradient(top,transparent 10%,rgba(0,0,0,.3) 100%);background:-webkit-linear-gradient(top,transparent 10%,rgba(0,0,0,.3));background:linear-gradient(180deg,transparent 10%,rgba(0,0,0,.3));transition:opacity 1s}.kakao-video-ad .time-control{display:inline-block;width:auto;height:auto;margin:31px 12px 0 0;vertical-align:top;opacity:0;transition:opacity 1s;letter-spacing:0}.kakao-video-ad.has-started .time-control{opacity:1}.kakao-video-ad .control-text{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.kakao-video-ad .time-control em{font-size:12px;font-style:normal;color:#fff;font-weight:600;text-shadow:0 1px 1px rgba(0,0,0,.24)}.kakao-video-ad .control-bar a{background:none;border:none;color:inherit;display:inline-block;overflow:visible;font-size:inherit;line-height:inherit;text-transform:none;text-decoration:none;transition:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.kakao-video-ad .control-bar .btn_option{display:inline-block;position:relative;width:41px;height:41px;margin:19px 0 0 -12px;padding:0;cursor:pointer;-webkit-box-flex:unset;-moz-box-flex:unset;-webkit-flex:none;-ms-box-flex:none;flex:none;outline:none;opacity:1}.kakao-video-ad .control-bar .btn_option:before{position:absolute;left:8px;top:15px;width:22px;height:7px;background:url(https://t1.daumcdn.net/biz/ui/adplayer/m320/ico_adplayer2_180308.png) no-repeat -150px 0;content:""}.kakao-video-ad .link_sound{position:absolute;bottom:9px;left:7px;z-index:10;height:27px;padding:5px;font-size:12px;line-height:17px;text-decoration:none;opacity:0;transition:opacity 1s}.kakao-video-ad .link_sound .ico_sound{display:inline-block;overflow:hidden;width:22px;height:17px;font-size:1px;line-height:0;color:transparent;background:url(https://t1.daumcdn.net/biz/ui/adplayer/m320/ico_adplayer2_180308.png) no-repeat -120px 0;vertical-align:top}.kakao-video-ad .link_sound.sound_off .ico_sound{background-position:-120px -20px}.kakao-video-ad .link_sound .txt_nosound{padding-left:7px;color:#fff;text-shadow:1px 1px 1px rgba(0,0,0,.24)}.kakao-video-ad.loaded-data .link_sound{opacity:1}.kakao-video-ad .progress-control{position:absolute;width:100%;bottom:0;left:0;height:2px;-webkit-box-flex:initial;-moz-box-flex:initial;-webkit-flex:auto;-ms-flex:auto;flex:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.kakao-video-ad .progress-holder{-webkit-box-flex:initial;-moz-box-flex:initial;-webkit-flex:auto;-ms-flex:auto;flex:auto;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s;height:2px}.kakao-video-ad .progress-holder .load-progress,.kakao-video-ad .progress-holder .load-progress div,.kakao-video-ad .progress-holder .play-progress{position:absolute;display:block;height:100%;margin:0;padding:0;width:0;left:0;top:0}.kakao-video-ad .play-progress{background-color:#4dbefa}.kakao-video-ad .play-progress:before{position:absolute;top:-8px;right:-8px;width:16px;height:10px}.kakao-video-ad .progress-control:hover .play-progress:before{transform:scale(1)}.kakao-video-ad .slider{outline:0;position:relative;cursor:pointer;width:100%;padding:0;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:hsla(0,0%,100%,.4)}.kakao-video-ad .load-progress{background:#bfc7d3;background:rgba(115,133,159,.5)}.kakao-video-ad .load-progress div{background:hsla(0,0%,100%,.7)}.kakao-video-ad .option_layer{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);visibility:hidden;opacity:0;transition:opacity .5s}.kakao-video-ad.can-optout .option_layer{visibility:visible;z-index:400;opacity:1;transition:opacity .5s}.kakao-video-ad .option_layer .info_auto{display:table;width:100%;height:100%}.kakao-video-ad .option_layer .info_auto .inner_auto{display:table-cell;vertical-align:middle}.kakao-video-ad .option_layer .info_auto .desc_auto{position:relative;margin:0;padding:0 10px 57px;font-size:14px;line-height:20px;color:#fff;text-align:center;text-shadow:0 1px 1px rgba(0,0,0,.12);word-break:keep-all}.kakao-video-ad .option_layer .info_auto .btn_auto{position:absolute;left:50%;bottom:-2px;width:110px;height:40px;margin-left:-55px;border-radius:2px;font-size:14px;color:#fff;background-color:#9a9a9a;text-align:center;cursor:pointer;border:0;-webkit-box-flex:unset;-moz-box-flex:unset;-webkit-flex:none;-ms-box-flex:none;flex:none;outline:none}.kakao-video-ad .option_layer .info_auto .btn_on{background-color:#43bbfb}.kakao-video-ad .option_layer .desc_info{position:absolute;left:0;right:0;bottom:0;margin:0;padding-bottom:10px;font-size:9px;color:#bbb;letter-spacing:-.01em;text-align:center}.kakao-video-ad .option_layer .btn_close{position:absolute;right:10px;top:12px;width:30px;height:30px;padding:7px;cursor:pointer;border:0;background-color:transparent;-webkit-box-flex:unset;-moz-box-flex:unset;-webkit-flex:none;-ms-box-flex:none;flex:none;outline:none}.kakao-video-ad .option_layer .btn_close:before{position:absolute;left:7px;top:7px;width:16px;height:16px;background:url(https://t1.daumcdn.net/biz/ui/adplayer/m320/ico_adplayer2_180308.png) no-repeat -120px -40px;content:""}.kakao-video-ad .option_layer .active_on.btn_close:before{background-position:-120px -60px}.kakao-video-ad.can-optout .control-bar,.kakao-video-ad.can-optout .header,.kakao-video-ad.can-optout .link-load,.kakao-video-ad.can-optout .link_sound{opacity:0;transition:opacity .5s}.kakao-video-ad.show-buttons .link-load,.kakao-video-ad.show-poster .link-load,.kakao-video-ad.show-poster .poster{display:inline-block;opacity:1}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min-device-pixel-ratio:1.5),only screen and (min-resolution:1.5dppx){.kakao-video-ad .control-bar .btn_option:before,.kakao-video-ad .header .link_ad .txt_go:after,.kakao-video-ad .link_sound .ico_sound,.kakao-video-ad.loaded-data .load .ico_load,.kakao-video-ad .option_layer .btn_close:before{background-image:url(https://t1.daumcdn.net/biz/ui/adplayer/m640/ico_adplayer2_180308.png);background-size:180px 80px}}',
            '',
          ]);
      },
      function (e, t) {
        'use strict';
        function n (e, t) {
          var n = e[1] || '',
            i = e[3];
          if (!i) return n;
          if (t && 'function' == typeof btoa) {
            var o = r(i);
            return [n]
              .concat(
                i.sources.map(function (e) {
                  return '/*# sourceURL=' + i.sourceRoot + e + ' */';
                })
              )
              .concat([o])
              .join('\n');
          }
          return [n].join('\n');
        }
        function r (e) {
          return (
            '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
            ' */'
          );
        }
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = n(t, e);
                return t[2] ? '@media ' + t[2] + '{' + r + '}' : r;
              }).join('');
            }),
            (t.i = function (e, n) {
              'string' == typeof e && (e = [[null, e, '']]);
              for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                'number' == typeof o && (r[o] = !0);
              }
              for (i = 0; i < e.length; i++) {
                var a = e[i];
                ('number' == typeof a[0] && r[a[0]]) ||
                  (n && !a[2] ? (a[2] = n) : n && (a[2] = '(' + a[2] + ') and (' + n + ')'),
                  t.push(a));
              }
            }),
            t
          );
        };
      },
      function (e, t, n) {
        function r (e, t) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = f[r.id];
            if (i) {
              i.refs++;
              for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
              for (; o < r.parts.length; o++) i.parts.push(s(r.parts[o], t));
            } else {
              for (var a = [], o = 0; o < r.parts.length; o++) a.push(s(r.parts[o], t));
              f[r.id] = { id: r.id, refs: 1, parts: a };
            }
          }
        }
        function i (e) {
          for (var t = [], n = {}, r = 0; r < e.length; r++) {
            var i = e[r],
              o = i[0],
              a = i[1],
              u = i[2],
              s = i[3],
              l = { css: a, media: u, sourceMap: s };
            n[o] ? n[o].parts.push(l) : t.push((n[o] = { id: o, parts: [l] }));
          }
          return t;
        }
        function o (e, t) {
          var n = Array.prototype.slice.call(arguments, 2);
          return function () {
            var r = Array.prototype.slice.call(arguments);
            e.apply(t, n.concat(r));
          };
        }
        function a () {
          var e = document.createElement('style'),
            t = m();
          return (e.type = 'text/css'), t.appendChild(e), e;
        }
        function u () {
          var e = document.createElement('link'),
            t = m();
          return (e.rel = 'stylesheet'), t.appendChild(e), e;
        }
        function s (e, t) {
          var n, r, i;
          if (t.singleton) {
            var s = g++;
            (n = v || (v = a())), (r = o(l, null, n, s, !1)), (i = o(l, null, n, s, !0));
          } else
            e.sourceMap &&
            'function' == typeof URL &&
            'function' == typeof URL.createObjectURL &&
            'function' == typeof URL.revokeObjectURL &&
            'function' == typeof Blob &&
            'function' == typeof btoa
              ? ((n = u()),
                (r = o(c, null, n)),
                (i = function () {
                  n.parentNode.removeChild(n), n.href && URL.revokeObjectURL(n.href);
                }))
              : ((n = a()),
                (r = o(d, null, n)),
                (i = function () {
                  n.parentNode.removeChild(n);
                }));
          return (
            r(e),
            function (t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r((e = t));
              } else i();
            }
          );
        }
        function l (e, t, n, r) {
          var i = n ? '' : r.css;
          if (e.styleSheet) e.styleSheet.cssText = y(t, i);
          else {
            var o = document.createTextNode(i),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
          }
        }
        function d (e, t) {
          var n = t.css,
            r = t.media;
          t.sourceMap;
          if ((r && e.setAttribute('media', r), e.styleSheet)) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        }
        function c (e, t) {
          var n = t.css,
            r = (t.media, t.sourceMap);
          r &&
            (n +=
              '\n/*# sourceMappingURL=data:application/json;base64,' +
              btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
              ' */');
          var i = new Blob([n], { type: 'text/css' }),
            o = e.href;
          (e.href = URL.createObjectURL(i)), o && URL.revokeObjectURL(o);
        }
        var f = {},
          p = function (e) {
            var t;
            return function () {
              return void 0 === t && (t = e.apply(this, arguments)), t;
            };
          },
          h = p(function () {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
          }),
          m = p(function () {
            return document.head || document.getElementsByTagName('head')[0];
          }),
          v = null,
          g = 0;
        e.exports = function (e, t) {
          (t = t || {}), 'undefined' == typeof t.singleton && (t.singleton = h());
          var n = i(e);
          return (
            r(n, t),
            function (e) {
              for (var o = [], a = 0; a < n.length; a++) {
                var u = n[a],
                  s = f[u.id];
                s.refs--, o.push(s);
              }
              if (e) {
                r(i(e), t);
              }
              for (var a = 0; a < o.length; a++) {
                var s = o[a];
                if (0 === s.refs) {
                  for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                  delete f[s.id];
                }
              }
            }
          );
        };
        var y = (function () {
          var e = [];
          return function (t, n) {
            var r = [];
            e[t] = n;
            for (var i = 0; i < e.length; i++) e[i] && r.push(e[i]);
            return r.join('\n');
          };
        })();
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          (e.installedEventListener = e.installedEventListener || !1),
            (e.booted = e.booted || !1),
            e.installedEventListener ||
              ((e.installedEventListener = !0),
              'complete' === document.readyState
                ? o(e)
                : (T
                    ? b['default'].addEventListener(window, 'DOMContentLoaded', function () {
                        x('fire DOMContentLoaded'), !e.booted && o(e);
                      })
                    : b['default'].addEventListener(window, 'readystatechange', function () {
                        x('fire readystatechange'),
                          !e.booted && 'complete' === document.readyState && o(e);
                      }),
                  b['default'].addEventListener(window, 'load', function () {
                    x('fire load'), !e.booted && o(e);
                  })));
        }
        function o (e) {
          e.booted = !0;
          var t = (0, _['default'])(
            'querySelectorAll' in document
              ? document.querySelectorAll('[' + k['default'] + 'unit-id]')
              : []
          );
          (0, u['default'])(
            (0, c['default'])(function (t) {
              return setTimeout(function () {
                e({ unitId: t }).init();
              }, 100);
            }),
            (0, g['default'])(function () {
              return x('initialize ads');
            }),
            m['default'],
            (0, c['default'])(function (e) {
              return e.getAttribute(k['default'] + 'unit-id');
            }),
            (0, p['default'])(function (e) {
              return null === e.getAttribute(k['default'] + 'init');
            })
          )(t);
        }
        t.__esModule = !0;
        var a = n(11),
          u = r(a),
          s = n(15),
          l = r(s),
          d = n(19),
          c = r(d),
          f = n(20),
          p = r(f),
          h = n(21),
          m = r(h),
          v = n(25),
          g = r(v),
          y = n(26),
          b = r(y),
          w = n(28),
          _ = r(w),
          E = n(29),
          k = r(E),
          x = (0, l['default'])('boot'),
          T = 'addEventListener' in window;
        x('add DOMContentLoaded event listener'), (t['default'] = i);
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(12),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r),
          o = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return i['default'].apply(undefined, t.reverse());
          };
        t['default'] = o;
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(13),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r),
          o = function (e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
              n[r - 1] = arguments[r];
            return function () {
              return (0, i['default'])(
                function (e, t) {
                  return t(e);
                },
                e.apply(undefined, arguments),
                n
              );
            };
          };
        t['default'] = o;
      },
      function (e, t, n) {
        'use strict';
        function r (e, t, n) {
          for (var r = 0, i = n.length; r < i; ) (t = e(t, n[r])), (r += 1);
          return t;
        }
        t.__esModule = !0;
        var i = n(14),
          o = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(i);
        t['default'] = (0, o['default'])(r);
      },
      function (e, t) {
        'use strict';
        function n (e) {
          return function t () {
            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return r.length >= e.length
              ? e.apply(this, r)
              : function () {
                  for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
                    n[i] = arguments[i];
                  return t.apply(this, r.concat(n));
                };
          };
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return (0, o['default'])([a, e].join(':'));
        }
        t.__esModule = !0;
        var i = n(16),
          o = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(i),
          a = ['ad-native', '0.15.1-native'].join('_');
        t['default'] = r;
      },
      function (e, t, n) {
        'use strict';
        function r () {
          const $___old_20aef4d7f4143880 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_20aef4d7f4143880)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_9d7b4eb662ee43f5.userAgent
              ));
            return function () {
              return (
                !(
                  'undefined' == typeof window ||
                  !window.process ||
                  'renderer' !== window.process.type
                ) ||
                (('undefined' == typeof navigator ||
                  !navigator.userAgent ||
                  !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) &&
                  (('undefined' != typeof document &&
                    document.documentElement &&
                    document.documentElement.style &&
                    document.documentElement.style.WebkitAppearance) ||
                    ('undefined' != typeof window &&
                      window.console &&
                      (window.console.firebug ||
                        (window.console.exception && window.console.table))) ||
                    ('undefined' != typeof navigator &&
                      navigator.userAgent &&
                      navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                      parseInt(RegExp.$1, 10) >= 31) ||
                    ('undefined' != typeof navigator &&
                      navigator.userAgent &&
                      navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))))
              );
            }.apply(this, arguments);
          } finally {
            if ($___old_20aef4d7f4143880)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_20aef4d7f4143880
              ));
          }
        }
        function i (e) {
          var n = this.useColors;
          if (
            ((e[0] =
              (n ? '%c' : '') +
              this.namespace +
              (n ? ' %c' : ' ') +
              e[0] +
              (n ? '%c ' : ' ') +
              '+' +
              t.humanize(this.diff)),
            n)
          ) {
            var r = 'color: ' + this.color;
            e.splice(1, 0, r, 'color: inherit');
            var i = 0,
              o = 0;
            e[0].replace(/%[a-zA-Z%]/g, function (e) {
              '%%' !== e && (i++, '%c' === e && (o = i));
            }),
              e.splice(o, 0, r);
          }
        }
        function o () {
          return (
            'object' === ('undefined' == typeof console ? 'undefined' : s(console)) &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }
        function a (e) {
          try {
            null == e ? t.storage.removeItem('debug') : (t.storage.debug = e);
          } catch (n) {}
        }
        function u () {
          var e;
          try {
            e = t.storage.debug;
          } catch (n) {}
          return (
            !e && 'undefined' != typeof process && 'env' in process && (e = process.env.DEBUG), e
          );
        }
        var s =
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
        (t = e.exports = n(17)),
          (t.log = o),
          (t.formatArgs = i),
          (t.save = a),
          (t.load = u),
          (t.useColors = r),
          (t.storage =
            'undefined' != typeof chrome && 'undefined' != typeof chrome.storage
              ? chrome.storage.local
              : (function () {
                  const $___old_f31168c0cea310ce = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'localStorage'
                  );
                  try {
                    if ($___old_f31168c0cea310ce)
                      ({}.constructor.defineProperty(
                        window,
                        'localStorage',
                        $___stub_a011c28886b08277.localStorage
                      ));
                    return function () {
                      try {
                        return window.localStorage;
                      } catch (e) {}
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_f31168c0cea310ce)
                      ({}.constructor.defineProperty(
                        window,
                        'localStorage',
                        $___old_f31168c0cea310ce
                      ));
                  }
                })()),
          (t.colors = [
            '#0000CC',
            '#0000FF',
            '#0033CC',
            '#0033FF',
            '#0066CC',
            '#0066FF',
            '#0099CC',
            '#0099FF',
            '#00CC00',
            '#00CC33',
            '#00CC66',
            '#00CC99',
            '#00CCCC',
            '#00CCFF',
            '#3300CC',
            '#3300FF',
            '#3333CC',
            '#3333FF',
            '#3366CC',
            '#3366FF',
            '#3399CC',
            '#3399FF',
            '#33CC00',
            '#33CC33',
            '#33CC66',
            '#33CC99',
            '#33CCCC',
            '#33CCFF',
            '#6600CC',
            '#6600FF',
            '#6633CC',
            '#6633FF',
            '#66CC00',
            '#66CC33',
            '#9900CC',
            '#9900FF',
            '#9933CC',
            '#9933FF',
            '#99CC00',
            '#99CC33',
            '#CC0000',
            '#CC0033',
            '#CC0066',
            '#CC0099',
            '#CC00CC',
            '#CC00FF',
            '#CC3300',
            '#CC3333',
            '#CC3366',
            '#CC3399',
            '#CC33CC',
            '#CC33FF',
            '#CC6600',
            '#CC6633',
            '#CC9900',
            '#CC9933',
            '#CCCC00',
            '#CCCC33',
            '#FF0000',
            '#FF0033',
            '#FF0066',
            '#FF0099',
            '#FF00CC',
            '#FF00FF',
            '#FF3300',
            '#FF3333',
            '#FF3366',
            '#FF3399',
            '#FF33CC',
            '#FF33FF',
            '#FF6600',
            '#FF6633',
            '#FF9900',
            '#FF9933',
            '#FFCC00',
            '#FFCC33',
          ]),
          (t.formatters.j = function (e) {
            try {
              return JSON.stringify(e);
            } catch (t) {
              return '[UnexpectedJSONParseError]: ' + t.message;
            }
          }),
          t.enable(u());
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          var n,
            r = 0;
          for (n in e) (r = (r << 5) - r + e.charCodeAt(n)), (r |= 0);
          return t.colors[Math.abs(r) % t.colors.length];
        }
        function i (e) {
          function n () {
            if (n.enabled) {
              var e = n,
                r = +new Date(),
                o = r - (i || r);
              (e.diff = o), (e.prev = i), (e.curr = r), (i = r);
              for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
                a[u] = arguments[u];
              (a[0] = t.coerce(a[0])), 'string' != typeof a[0] && a.unshift('%O');
              var s = 0;
              (a[0] = a[0].replace(/%([a-zA-Z%])/g, function (n, r) {
                if ('%%' === n) return n;
                s++;
                var i = t.formatters[r];
                if ('function' == typeof i) {
                  var o = a[s];
                  (n = i.call(e, o)), a.splice(s, 1), s--;
                }
                return n;
              })),
                t.formatArgs.call(e, a);
              (n.log || t.log || console.log.bind(console)).apply(e, a);
            }
          }
          var i;
          return (
            (n.namespace = e),
            (n.enabled = t.enabled(e)),
            (n.useColors = t.useColors()),
            (n.color = r(e)),
            (n.destroy = o),
            'function' == typeof t.init && t.init(n),
            t.instances.push(n),
            n
          );
        }
        function o () {
          var e = t.instances.indexOf(this);
          return -1 !== e && (t.instances.splice(e, 1), !0);
        }
        function a (e) {
          t.save(e), (t.names = []), (t.skips = []);
          var n,
            r = ('string' == typeof e ? e : '').split(/[\s,]+/),
            i = r.length;
          for (n = 0; n < i; n++)
            r[n] &&
              ((e = r[n].replace(/\*/g, '.*?')),
              '-' === e[0]
                ? t.skips.push(new RegExp('^' + e.substr(1) + '$'))
                : t.names.push(new RegExp('^' + e + '$')));
          for (n = 0; n < t.instances.length; n++) {
            var o = t.instances[n];
            o.enabled = t.enabled(o.namespace);
          }
        }
        function u () {
          t.enable('');
        }
        function s (e) {
          if ('*' === e[e.length - 1]) return !0;
          var n, r;
          for (n = 0, r = t.skips.length; n < r; n++) if (t.skips[n].test(e)) return !1;
          for (n = 0, r = t.names.length; n < r; n++) if (t.names[n].test(e)) return !0;
          return !1;
        }
        function l (e) {
          return e instanceof Error ? e.stack || e.message : e;
        }
        (t = e.exports = i.debug = i['default'] = i),
          (t.coerce = l),
          (t.disable = u),
          (t.enable = a),
          (t.enabled = s),
          (t.humanize = n(18)),
          (t.instances = []),
          (t.names = []),
          (t.skips = []),
          (t.formatters = {});
      },
      function (e, t) {
        'use strict';
        function n (e) {
          if (((e = String(e)), !(e.length > 100))) {
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
              e
            );
            if (t) {
              var n = parseFloat(t[1]);
              switch ((t[2] || 'ms').toLowerCase()) {
                case 'years':
                case 'year':
                case 'yrs':
                case 'yr':
                case 'y':
                  return n * c;
                case 'days':
                case 'day':
                case 'd':
                  return n * d;
                case 'hours':
                case 'hour':
                case 'hrs':
                case 'hr':
                case 'h':
                  return n * l;
                case 'minutes':
                case 'minute':
                case 'mins':
                case 'min':
                case 'm':
                  return n * s;
                case 'seconds':
                case 'second':
                case 'secs':
                case 'sec':
                case 's':
                  return n * u;
                case 'milliseconds':
                case 'millisecond':
                case 'msecs':
                case 'msec':
                case 'ms':
                  return n;
                default:
                  return undefined;
              }
            }
          }
        }
        function r (e) {
          return e >= d
            ? Math.round(e / d) + 'd'
            : e >= l
            ? Math.round(e / l) + 'h'
            : e >= s
            ? Math.round(e / s) + 'm'
            : e >= u
            ? Math.round(e / u) + 's'
            : e + 'ms';
        }
        function i (e) {
          return (
            o(e, d, 'day') ||
            o(e, l, 'hour') ||
            o(e, s, 'minute') ||
            o(e, u, 'second') ||
            e + ' ms'
          );
        }
        function o (e, t, n) {
          if (!(e < t))
            return e < 1.5 * t ? Math.floor(e / t) + ' ' + n : Math.ceil(e / t) + ' ' + n + 's';
        }
        var a =
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
                },
          u = 1000,
          s = 60 * u,
          l = 60 * s,
          d = 24 * l,
          c = 365.25 * d;
        e.exports = function (e, t) {
          t = t || {};
          var o = void 0 === e ? 'undefined' : a(e);
          if ('string' === o && e.length > 0) return n(e);
          if ('number' === o && !1 === isNaN(e)) return t['long'] ? i(e) : r(e);
          throw new Error(
            'val is not a non-empty string or a valid number. val=' + JSON.stringify(e)
          );
        };
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(14),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
        t['default'] = (0, i['default'])(function (e, t) {
          for (var n = 0, r = t.length, i = Array(r); n < r; ) (i[n] = e(t[n])), (n += 1);
          return i;
        });
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(14),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
        t['default'] = (0, i['default'])(function (e, t) {
          for (var n = 0, r = t.length, i = []; n < r; ) e(t[n]) && (i[i.length] = t[n]), (n += 1);
          return i;
        });
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          var t = {};
          return (
            (0, c['default'])(function (e) {
              t[e + '::' + (void 0 === e ? 'undefined' : o(e))] = e;
            }, e),
            (0, l['default'])(function (e) {
              return t[e];
            }, (0, u['default'])(t))
          );
        }
        t.__esModule = !0;
        var o =
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
        t['default'] = i;
        var a = n(22),
          u = r(a),
          s = n(19),
          l = r(s),
          d = n(24),
          c = r(d);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var i = n(14),
          o = r(i),
          a = n(23),
          u = r(a);
        t['default'] = (0, o['default'])(u['default']);
      },
      function (e, t) {
        'use strict';
        t.__esModule = !0;
        var n =
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
                },
          r =
            Object.keys ||
            (function () {
              var e = Object.prototype.hasOwnProperty,
                t = !{ toString: null }.propertyIsEnumerable('toString'),
                r = [
                  'toString',
                  'toLocaleString',
                  'valueOf',
                  'hasOwnProperty',
                  'isPrototypeOf',
                  'propertyIsEnumerable',
                  'constructor',
                ],
                i = r.length;
              return function (o) {
                if (
                  'function' != typeof o &&
                  ('object' !== (void 0 === o ? 'undefined' : n(o)) || null === o)
                )
                  throw new TypeError('Object.keys called on non-object');
                var a = [],
                  u = void 0,
                  s = void 0;
                for (u in o) e.call(o, u) && a.push(u);
                if (t) for (s = 0; s < i; s++) e.call(o, r[s]) && a.push(r[s]);
                return a;
              };
            })();
        t['default'] = r;
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(14),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
        t['default'] = (0, i['default'])(function (e, t) {
          for (var n = t.length, r = 0; r < n; ) e(t[r], r, t), (r += 1);
          return t;
        });
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(14),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
        t['default'] = (0, i['default'])(function (e, t) {
          return e(t), t;
        });
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return (
            'stopPropagation' in e
              ? e.stopPropagation()
              : 'cancelBubble' in e && (e.cancelBubble = !0),
            ('boolean' != typeof e.cancelable || e.cancelable) &&
              'preventDefault' in e &&
              e.preventDefault(),
            'stopImmediatePropagation' in e && e.stopImmediatePropagation(),
            !1
          );
        }
        function i (e) {
          return e.target || e.srcElement;
        }
        var o = n(27),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(o),
          u = (function () {
            return (0, a['default'])(window, 'addEventListener')
              ? function (e, t, n, r) {
                  e.addEventListener(t, n, r);
                }
              : function (e, t, n) {
                  e.attachEvent('on' + t, n);
                };
          })(),
          s = (function () {
            return (0, a['default'])(window, 'removeEventListener')
              ? function (e, t, n, r) {
                  e.removeEventListener(t, n, r);
                }
              : function (e, t, n) {
                  e.detachEvent('on' + t, n);
                };
          })(),
          l = function (e, t) {
            e && e.dispatchEvent && e.dispatchEvent(t);
          };
        e.exports = {
          addEventListener: u,
          removeEventListener: s,
          dispatchEvent: l,
          stopEvent: r,
          getSourceElementFrom: i,
        };
      },
      function (e, t) {
        'use strict';
        function n (e, t) {
          var n = r(e[t]);
          return 'function' === n || !('object' !== n || !e[t]) || 'unknown' === n;
        }
        t.__esModule = !0;
        var r =
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
        t['default'] = n;
      },
      function (e, t) {
        'use strict';
        function n (e) {
          var t = null;
          try {
            t = Array.prototype.slice.call(e, 0);
          } catch (i) {
            t = [];
            for (var n = 0, r = e.length; n < r; n += 1) t.push(e[n]);
          }
          return t;
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        t.__esModule = !0;
        t['default'] = 'adfit-';
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.unitId,
            n = t === undefined ? (0, d['default'])('unitId') : t,
            r = e.requestUrl,
            i = r === undefined ? 'https://display.ad.daum.net/sdk/native' : r,
            o = e.testMode,
            u = o === undefined ? 'N' : o,
            l = e.baseNode,
            c = l === undefined ? document : l,
            p = (0, h['default'])(['native-ads', n].join(':')),
            m = {},
            g = new N(),
            b = function () {
              var e = E['default'] + 'unit-id';
              return 'getAttribute' in c && c.getAttribute(e) === n
                ? [c]
                : 'querySelectorAll' in c &&
                    (0, s['default'])(
                      c.querySelectorAll('[' + E['default'] + 'unit-id="' + n + '"]')
                    );
            },
            _ = function (e) {
              return (
                (e instanceof Element || e instanceof DocumentFragment) &&
                  (p('overrideRootNode: base node 변경 !!'), (c = e)),
                m
              );
            };
          return (
            g.on(x.ERROR, function (e) {
              try {
                (0, C['default'])(e);
              } finally {
                p(x.ERROR), p(e);
              }
            }),
            g.on(x.RENDER_FAIL, function (e) {
              p(x.RENDER_FAIL),
                e.message === x.RENDER_FAIL_WITH_NO_AD_PLACEHOLDER && p('광고 영역이 없습니다'),
                e.message === x.RENDER_FAIL_WITH_NO_AD_RESPONSE && p('광고가 없습니다'),
                e.message === x.RENDER_FAIL_WITH_NO_CONTENT && p('보여줄 컨텐츠가 없습니다');
            }),
            g.on(x.REQUEST, function (e) {
              p(x.REQUEST);
              var t = e.target;
              if (!t.length)
                return void g.emit(x.RENDER_FAIL, new Error(x.RENDER_FAIL_WITH_NO_AD_PLACEHOLDER));
              (0, a['default'])(function (e) {
                return e.setAttribute(E['default'] + 'init', 'true');
              }, t),
                g.emit(x.BEFORE_REQUEST, e),
                (0, y['default'])({ unitId: n, target: t, requestUrl: i, testMode: u, log: p })
                  .then(function (e) {
                    return g.emit(x.RESPONSE_SUCCESS, e);
                  })
                  ['catch'](function (e) {
                    return g.emit(x.RESPONSE_FAIL, e);
                  });
            }),
            g.on(x.RESPONSE_SUCCESS, function (e) {
              p(x.RESPONSE_SUCCESS),
                (0, w['default'])({ target: e.target, detail: e.detail, log: p })
                  .then(function (e) {
                    return g.emit(x.RENDER, e);
                  })
                  ['catch'](function (e) {
                    return g.emit(x.ERROR, e);
                  });
            }),
            g.on(x.RESPONSE_FAIL, function (e) {
              p(x.RESPONSE_FAIL),
                g.emit(x.RENDER, {
                  target: e.target,
                  detail: (0, a['default'])(f['default'], e.target),
                });
            }),
            g.on(x.RENDER, function (e) {
              p(x.RENDER),
                g.emit(x.BEFORE_RENDER, e),
                (0, v['default'])({ target: e.target, detail: e.detail, log: p })
                  .then(function (e) {
                    return g.emit(x.COMPLETE, e);
                  })
                  ['catch'](function (e) {
                    'message' in e && e.message.indexOf(x.RENDER_FAIL) > -1
                      ? g.emit(x.RENDER_FAIL, e)
                      : g.emit(x.ERROR, e);
                  });
            }),
            g.on(x.COMPLETE, function (e) {
              p(x.COMPLETE), g.emit(x.BEFORE_COMPLETE, e);
            }),
            (m.beforeRequest = function (e, t) {
              return (
                g.once(x.BEFORE_REQUEST, function () {
                  p(x.BEFORE_REQUEST);
                  try {
                    e.apply(t, arguments);
                  } catch (n) {}
                }) && m
              );
            }),
            (m.beforeRender = function (e, t) {
              return (
                g.once(x.BEFORE_RENDER, function () {
                  p(x.BEFORE_RENDER);
                  try {
                    e.apply(t, arguments);
                  } catch (n) {}
                }) && m
              );
            }),
            (m.beforeComplete = function (e, t) {
              return (
                g.once(x.BEFORE_COMPLETE, function () {
                  p(x.BEFORE_COMPLETE);
                  try {
                    e.apply(t, arguments);
                  } catch (n) {}
                }) && m
              );
            }),
            (m.error = function (e, t) {
              return (
                g.once(x.ERROR, function () {
                  p(x.ERROR);
                  try {
                    e.apply(t, arguments);
                  } catch (n) {}
                }) && m
              );
            }),
            (m.renderAs = function (e, t, n) {
              if ('function' != typeof t) throw new Error('올바르지 않은 callback 객체입니다');
              var r = void 0;
              if ('string' == typeof e) (r = document.createElement('div')), (r.innerHTML = e);
              else {
                if (!(e instanceof Element || e instanceof DocumentFragment))
                  throw new Error('렌더링 할 수 없는 Node 입니다');
                r = e;
              }
              if (!r) throw new Error('node가 존재하지 않습니다');
              return _(r).beforeComplete(t, n);
            }),
            (m.renderFail = function (e, t) {
              return (
                g.once(x.RENDER_FAIL, function () {
                  p(x.RENDER_FAIL);
                  try {
                    e.apply(t, arguments);
                  } catch (n) {}
                }) && m
              );
            }),
            (m.init = function () {
              return g.emit(x.REQUEST, { target: b() });
            }),
            m
          );
        }
        t.__esModule = !0;
        var o = n(19),
          a = r(o),
          u = n(28),
          s = r(u),
          l = n(31),
          d = r(l),
          c = n(32),
          f = r(c),
          p = n(15),
          h = r(p),
          m = n(44),
          v = r(m),
          g = n(114),
          y = r(g),
          b = n(132),
          w = r(b),
          _ = n(29),
          E = r(_),
          k = n(136),
          x = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t['default'] = e), t;
          })(k),
          T = n(64),
          C = r(T),
          N = n(90).EventEmitter;
        (i.renderAds = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [],
            n = { status: 'OK', ads: t },
            r = void 0;
          if ('string' == typeof e) (r = document.createElement('div')), (r.innerHTML = e);
          else {
            if (!(e instanceof Element || e instanceof DocumentFragment))
              throw new Error('렌더링 할 수 없는 Node 입니다');
            r = e;
          }
          if (!r) throw new Error('node가 존재하지 않습니다');
          return (0, w['default'])({
            target: (0, s['default'])(r.querySelectorAll('[' + E['default'] + 'native-ad]')),
            detail: n,
          }).then(v['default']);
        }),
          (t['default'] = i);
      },
      function (e, t) {
        'use strict';
        t.__esModule = !0;
        var n = function (e) {
          throw new TypeError(e + ': 필수 항목입니다');
        };
        t['default'] = n;
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          var t = l(e),
            n = {
              type: 'content',
              targetNode: e,
              title: t(a['default'] + 'title'),
              body: t(a['default'] + 'desc'),
              callToAction: t(a['default'] + 'action-button'),
              mainImage: {
                url: t(a['default'] + 'main-img-url'),
                width: t(a['default'] + 'image-width'),
                height: t(a['default'] + 'image-height'),
              },
              profileIcon: {
                url: t(a['default'] + 'profile-img-url'),
                width: t(a['default'] + 'icon-width'),
                height: t(a['default'] + 'icon-height'),
              },
              profileName: t(a['default'] + 'profile-name'),
              landingUrl: t(a['default'] + 'landing-url'),
              videoImage: {
                url: t(a['default'] + 'video-poster-url'),
                width: t(a['default'] + 'video-poster-width'),
                height: t(a['default'] + 'video-poster-height'),
              },
              adInfoIcon: {
                url: t(a['default'] + 'ad-info-icon'),
                width: t(a['default'] + 'ad-info-icon-width') || 14,
                height: t(a['default'] + 'ad-info-icon-height') || 14,
              },
            },
            r = n.title || n.body || n.callToAction || n.profileName,
            i = n.mainImage.url || n.profileIcon.url || n.videoImage.url;
          return (n.landingUrl && (r || i)) || (n.type = 'no_ad'), s['default'].of(n);
        }
        t.__esModule = !0;
        var o = n(29),
          a = r(o),
          u = n(33),
          s = r(u),
          l = function (e) {
            return function (t) {
              try {
                return e.querySelector('[' + t + ']').getAttribute(t);
              } catch (n) {
                return undefined;
              }
            };
          };
        t['default'] = i;
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var i = n(34),
          o = r(i),
          a = n(35),
          u = r(a),
          s = n(37),
          l = r(s),
          d = n(42),
          c = r(d),
          f = n(43),
          p = r(f),
          h = (0, c['default'])(u['default'].attr, {
            type: { key: 'type', defaultTo: 'native' },
            vastTag: 'vastTag',
            title: 'title',
            body: 'body',
            callToAction: 'callToAction',
            mainImage: {
              key: 'mainImage',
              defaultTo: {},
              transform: function (e) {
                return p['default'].of(e);
              },
            },
            videoImage: {
              key: 'videoImage',
              defaultTo: {},
              transform: function (e) {
                return p['default'].of(e);
              },
            },
            profileIcon: {
              key: 'profileIcon',
              defaultTo: {},
              transform: function (e) {
                return p['default'].of(e);
              },
            },
            profileName: 'profileName',
            adInfoIcon: {
              key: 'adInfoIcon',
              defaultTo: {},
              transform: function (e) {
                return p['default'].of(e);
              },
            },
            adInfoUrl: {
              key: 'adInfoUrl',
              defaultTo: 'https://info.ad.daum.net/optout.do',
              validate: o['default'].isWebUri,
            },
            landingUrl: 'landingUrl',
            targetNode: 'targetNode',
            altText: 'altText',
            useAdIcon: 'useAdIcon',
          }),
          m = function (e) {
            return (0, l['default'])(h, e);
          };
        (m.attr = h),
          (m.of = function (e) {
            return m(e);
          }),
          (t['default'] = m);
      },
      function (e, t, n) {
        (function (e) {
          'use strict';
          !(function (e) {
            function t (e) {
              if (
                e &&
                !/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e) &&
                !/%[^0-9a-f]/i.test(e) &&
                !/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)
              ) {
                var t = [],
                  n = '',
                  r = '',
                  i = '',
                  a = '',
                  u = '',
                  s = '';
                if (
                  ((t = o(e)),
                  (n = t[1]),
                  (r = t[2]),
                  (i = t[3]),
                  (a = t[4]),
                  (u = t[5]),
                  n && n.length && i.length >= 0)
                ) {
                  if (r && r.length) {
                    if (0 !== i.length && !/^\//.test(i)) return;
                  } else if (/^\/\//.test(i)) return;
                  if (/^[a-z][a-z0-9\+\-\.]*$/.test(n.toLowerCase()))
                    return (
                      (s += n + ':'),
                      r && r.length && (s += '//' + r),
                      (s += i),
                      a && a.length && (s += '?' + a),
                      u && u.length && (s += '#' + u),
                      s
                    );
                }
              }
            }
            function n (e, n) {
              if (t(e)) {
                var r = [],
                  i = '',
                  a = '',
                  u = '',
                  s = '',
                  l = '',
                  d = '',
                  c = '';
                if (((r = o(e)), (i = r[1]), (a = r[2]), (u = r[3]), (l = r[4]), (d = r[5]), i)) {
                  if (n) {
                    if ('https' != i.toLowerCase()) return;
                  } else if ('http' != i.toLowerCase()) return;
                  if (a)
                    return (
                      /:(\d+)$/.test(a) &&
                        ((s = a.match(/:(\d+)$/)[0]), (a = a.replace(/:\d+$/, ''))),
                      (c += i + ':'),
                      (c += '//' + a),
                      s && (c += s),
                      (c += u),
                      l && l.length && (c += '?' + l),
                      d && d.length && (c += '#' + d),
                      c
                    );
                }
              }
            }
            function r (e) {
              return n(e, !0);
            }
            function i (e) {
              return n(e) || r(e);
            }
            (e.exports.is_uri = t),
              (e.exports.is_http_uri = n),
              (e.exports.is_https_uri = r),
              (e.exports.is_web_uri = i),
              (e.exports.isUri = t),
              (e.exports.isHttpUri = n),
              (e.exports.isHttpsUri = r),
              (e.exports.isWebUri = i);
            var o = function (e) {
              return e.match(
                /(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/
              );
            };
          })(e);
        }.call(t, n(4)(e)));
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var i = n(36),
          o = r(i),
          a = n(37),
          u = r(a),
          s = n(19),
          l = r(s),
          d = {
            dspId: 'dspId',
            adUnitId: 'adUnitId',
            events: {
              key: 'events',
              defaultTo: [],
              transform: function (e) {
                return (0, l['default'])(o['default'].of, e);
              },
            },
          },
          c = function (e) {
            return (0, u['default'])(d, e);
          };
        (c.attr = d),
          (c.of = function (e) {
            return c(e);
          }),
          (t['default'] = c);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var i = n(34),
          o = r(i),
          a = n(37),
          u = r(a),
          s = function (e) {
            return /^viewable|rendered|click|downloaded|hide$/.test(e);
          },
          l = {
            type: { key: 'type', validate: s },
            url: { key: 'url', validate: o['default'].isWebUri },
          },
          d = function (e) {
            return (0, u['default'])(l, e);
          };
        (d.attr = l),
          (d.of = function (e) {
            return d(e);
          }),
          (t['default'] = d);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e, t) {
          return (0, l['default'])(e, t) && 'function' == typeof t[e];
        }
        t.__esModule = !0;
        var o =
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
        t['default'] = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return (
            (t = t || {}),
            (0, m['default'])(
              (0, p['default'])(function (n) {
                var r,
                  a = e[n],
                  s = 'object' === (void 0 === a ? 'undefined' : o(a)) ? a.key : a,
                  d = (0, l['default'])('defaultTo', a) ? a.defaultTo : undefined,
                  c = s in t ? t[s] : d,
                  f = i('transform', a)
                    ? a.transform
                    : function (e) {
                        return e;
                      },
                  p = i('validate', a)
                    ? a.validate
                    : function () {
                        return !0;
                      };
                return (
                  (r = {}),
                  (r[n] = p(f(c)) ? (0, u['default'])(f(c)) : u['default'].Nothing(f(c))),
                  r
                );
              }, (0, c['default'])(e))
            )
          );
        };
        var a = n(38),
          u = r(a),
          s = n(39),
          l = r(s),
          d = n(22),
          c = r(d),
          f = n(19),
          p = r(f),
          h = n(40),
          m = r(h);
      },
      function (e, t) {
        'use strict';
        function n (e) {
          return null == e ? o : new r(e);
        }
        function r (e) {
          this.value = e;
        }
        function i (e) {}
        (t.__esModule = !0),
          (r.prototype.of = function (e) {
            return new r(e);
          }),
          (r.prototype.isJust = !0),
          (r.prototype.isNothing = !1),
          (r.prototype.map = function (e) {
            return n.of(e(this.value));
          }),
          (r.prototype.getOrElse = function () {
            return this.value;
          }),
          (r.prototype.toString = function () {
            return 'Maybe.Just(' + this.value + ')';
          });
        var o = new i();
        (i.prototype.of = function () {
          return o;
        }),
          (i.prototype.isJust = !1),
          (i.prototype.isNothing = !0),
          (i.prototype.getOrElse = function (e) {
            return e;
          }),
          (i.prototype.map = function () {
            return this;
          }),
          (i.prototype.toString = function () {
            return 'Maybe.Nothing()';
          }),
          (n.Just = r),
          (n.Nothing = function () {
            return o;
          }),
          (n.of = function (e) {
            return n(e);
          }),
          (n.isJust = function (e) {
            return e.isJust;
          }),
          (n.isNothing = function (e) {
            return e.isNothing;
          }),
          (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        function n (e, t) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          return a['default'].apply(null, [{}].concat(e));
        }
        t.__esModule = !0;
        var o = n(41),
          a = r(o),
          u = n(14),
          s = r(u);
        t['default'] = (0, s['default'])(i);
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(39),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r),
          o =
            Object.assign ||
            function (e) {
              if (e === undefined || null === e)
                throw new TypeError('Cannot convert undefined or null to object');
              for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (r !== undefined && null !== r)
                  for (var o in r) (0, i['default'])(o, r) && (t[o] = r[o]);
              }
              return t;
            };
        t['default'] = o;
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e, t) {
          return (0, a['default'])({}, e, t);
        }
        t.__esModule = !0;
        var o = n(41),
          a = r(o),
          u = n(14),
          s = r(u);
        t['default'] = (0, s['default'])(i);
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(37),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r),
          o = { width: 'width', height: 'height', url: 'url' },
          a = function (e) {
            return (0, i['default'])(o, e);
          };
        (a.attr = o),
          (a.of = function (e) {
            return a(e);
          }),
          (t['default'] = a);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          var t = e.target,
            n = t === undefined ? (0, h['default'])('target') : t,
            r = e.detail,
            i = r === undefined ? (0, h['default'])('detail') : r,
            o = e.log,
            a = o === undefined ? f['default'] : o;
          return new d['default'](function (e, t) {
            try {
              var r = function (e) {
                  return 'adData' in e && 'events' in e.adData && O(e.adData.events, a);
                },
                o = function (e) {
                  return 'adData' in e && 'events' in e.adData && S(e, a);
                };
              (0, w['default'])(function (e, t) {
                return e.setAttribute(C['default'] + 'unit-idx', t);
              }, n);
              var u = (0, y['default'])(function (e) {
                return d['default']
                  .resolve({ adAreaNode: e, adData: i.shift() || {} })
                  .then(s['default'])
                  .then(function (e) {
                    return r(e), o(e), e;
                  });
              });
              d['default']
                .all(u(n))
                .then(function (t) {
                  e(
                    (0, x['default'])(
                      (0, E['default'])(function (e) {
                        return !!e;
                      }),
                      (0, y['default'])(function (e) {
                        return e.adAreaNode;
                      })
                    )(t)
                  );
                })
                ['catch'](function (e) {
                  t(e);
                });
            } catch (l) {
              t(l);
            }
          });
        }
        t.__esModule = !0;
        var o = n(45),
          a = r(o),
          u = n(59),
          s = r(u),
          l = n(60),
          d = r(l),
          c = n(112),
          f = r(c),
          p = n(31),
          h = r(p),
          m = n(63),
          v = r(m),
          g = n(19),
          y = r(g),
          b = n(24),
          w = r(b),
          _ = n(20),
          E = r(_),
          k = n(11),
          x = r(k),
          T = n(29),
          C = r(T),
          N = n(113),
          L = r(N),
          R = n(26),
          O = (0, v['default'])('rendered'),
          A = (0, v['default'])('viewable'),
          D = {},
          M = function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              n = t.VIEWABLE_THRESHOLD,
              r = n === undefined ? 50 : n,
              i = t.VIEWABLE_CONTINUOUS_TIME,
              o = i === undefined ? 1000 : i;
            return function () {
              var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : function () {},
                n =
                  'IntersectionObserver' in window &&
                  'IntersectionObserverEntry' in window &&
                  'intersectionRatio' in window.IntersectionObserverEntry.prototype,
                i = r / 100,
                u = { _instance: null };
              if (n) {
                var s = !1,
                  l = null,
                  d = function (e, t) {
                    return (t.width * t.height) / (e.width * e.height) >= i;
                  },
                  c = function (e, n) {
                    h(n.takeRecords(), n),
                      'isVisible' in e &&
                        e.isVisible &&
                        (delete e.isVisible, s || ((s = !0), t(e), f(e), p(e, n)));
                  },
                  f = function (e) {
                    'isVisible' in e && delete e.isVisible, l && (clearTimeout(l), (l = null));
                  },
                  p = function (e, t) {
                    t.unobserve(e), t.disconnect();
                  },
                  h = function (e, t) {
                    e.forEach(function (e) {
                      var n = e.target;
                      (n.isVisible = d(e.boundingClientRect, e.intersectionRect)),
                        'isVisible' in n && n.isVisible && !s
                          ? (l = setTimeout(c, o, n, t))
                          : f(n);
                    });
                  };
                (u._instance = new window.IntersectionObserver(
                  function (e, t) {
                    h(e, t);
                  },
                  {
                    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                    trackVisibility: !0,
                    delay: 100,
                  }
                )),
                  (u.start = function () {
                    u._instance.observe(e);
                  }),
                  (u.destroy = function () {
                    p(e, u._instance);
                  });
              } else {
                if ((0, L['default'])())
                  return (u = {
                    _instance: null,
                    start: function () {
                      function n (n) {
                        if (n && 'ad-fit-viewable-fired' === n.data && !1 === r)
                          try {
                            t(e), (r = !0);
                          } catch (n) {}
                      }
                      var r = !1;
                      (0, R.addEventListener)(window, 'message', function i (e) {
                        (0, R.removeEventListener)(window, 'message', i), n(e);
                      });
                    },
                    destroy: function () {},
                  });
                (u._instance = new a['default']({
                  target: e,
                  percentOfPixels: r,
                  minimumAmountOfTime: o,
                  successCallback: function () {
                    t(e);
                  },
                })),
                  (u.start = function () {
                    u._instance.measure();
                  }),
                  (u.destroy = function () {
                    u._instance.destroy();
                  });
              }
              return u;
            };
          },
          S = function (e) {
            var t =
                arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {},
              n = 'adAreaNode' in e,
              r = 'adData' in e && 'events' in e.adData,
              i = M(e.adAreaNode);
            if (n && r) {
              var o =
                e.adUnitId + '_' + (e.adAreaNode.getAttribute(C['default'] + 'unit-idx') || '0');
              D[o] && (D[o].destroy(), (D[o] = null)),
                (D[o] = i(function () {
                  return A(e.adData.events, t);
                })),
                setTimeout(function () {
                  D[o].start();
                }, 100);
            }
          };
        t['default'] = i;
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          function t (e) {
            p('destroy viewable instance'),
              l(),
              b && (p('clear watch check callback timer:' + b), T.clearInterval(b), (b = 0)),
              w && (p('clear element watch check callback timer'), T.clearInterval(w), (w = 0)),
              'function' == typeof e && (p('run callback function'), e(C, v));
          }
          function n (e) {
            if (
              ((e = e || y),
              !(
                e.offsetParent ||
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length > 0
              ))
            )
              return p('Element should have own area'), !1;
            if (!(0, f['default'])(e, x) || void 0 === e || null === e)
              return p('target element is not defined'), !1;
            return (
              e &&
              (function (e) {
                var t = void 0;
                try {
                  t = e.getBoundingClientRect();
                } catch (o) {}
                var n = t.right - t.left,
                  r = t.bottom - t.top,
                  i = document.elementFromPoint(
                    t.left + parseInt(0.5 * n, 10),
                    t.top + parseInt(0.5 * r, 10)
                  );
                return i && (e === i || (0, f['default'])(i, e) || (0, f['default'])(e, i));
              })(e) &&
              (0, h['default'])(e, R)
            );
          }
          function r (e) {
            (e = e || y), ((0, f['default'])(e, x) && void 0 !== e && null !== e) || t();
          }
          function i () {
            try {
              p('(TICK TOCK :' + v + ')'),
                n() && (v = m() - g) >= N && (p('Time is over(' + v >= N + ')'), t(L));
            } catch (e) {
              (e && e.message && e.stack) || p('Unidentified Error Occurs'),
                e.message && p('Error: ' + e.message),
                e.stack &&
                  p(
                    e.stack
                      .replace(/^[^\\(]+?[\n$]/gm, '')
                      .replace(/^\s+at\s+/gm, '')
                      .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
                      .split('\n')
                  ),
                t();
            }
          }
          function o () {
            try {
              if (n()) {
                if ((p('found target element on the screen'), !(N >= 100))) return t(L), 1;
                if (
                  (0 === v &&
                    -1 === g &&
                    (p('initialize elapsed time'),
                    (g = m()),
                    p('initialize time requirement checker'),
                    (b = T.setInterval(i, 89))),
                  (v = +m() - g) >= N)
                )
                  return p('Time is over(' + v >= N + ')'), t(L), 1;
              } else
                (v = 0),
                  (g = -1),
                  b && (p('clear watch check callback timer'), T.clearInterval(b), (b = 0));
            } catch (e) {
              return (
                (e && e.message && e.stack) || p('Unidentified Error Occurs'),
                e.message && p('Error: ' + e.message),
                e.stack &&
                  p(
                    e.stack
                      .replace(/^[^\\(]+?[\n$]/gm, '')
                      .replace(/^\s+at\s+/gm, '')
                      .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
                      .split('\n')
                  ),
                t(),
                -1
              );
            }
            return 0;
          }
          function u () {
            _ ||
              ((E = setInterval(function () {
                o();
              }, k)),
              (_ = !0));
          }
          function l () {
            _ && (clearInterval(E), (E = _ = !1));
          }
          e = e || {};
          var c = (0, a['default'])(),
            p = (0, d['default'])(['ViewableChecker', c].join(':')),
            v = 0,
            g = -1,
            y = e.target,
            b = 0,
            w = 0,
            _ = !1,
            E = 0,
            k = 100;
          y || (y = document.body),
            y &&
              'string' == typeof y &&
              (p('looking dom element by id...'), (y = document.getElementById(y))),
            y.setAttribute('data-viewable-checker-id', c);
          var x = y.ownerDocument,
            T = x.defaultView || x.parentWindow;
          try {
            T.document;
          } catch (O) {
            throw O;
          }
          var C = e.percentOfPixels || 50;
          if (C < 1 || C > 100) throw new Error('percent of pixels must be between 1 and 100');
          p('Pixel Requirement: Greater than or equal to ' + C + 'percent');
          var N = e.hasOwnProperty('minimumAmountOfTime') ? e.minimumAmountOfTime : 1000;
          p('Time Requirement :' + N + 'ms');
          var L = (0, s['default'])(e.successCallback)
              ? e.successCallback
              : function () {
                  return 0;
                },
            R = C / 100;
          (this.measure = function () {
            w || (w = T.setInterval(r, k)), _ || o() || u();
          }),
            (this.destroy = function () {
              t();
            });
        }
        var o = n(46),
          a = r(o),
          u = n(47),
          s = r(u),
          l = n(15),
          d = r(l),
          c = n(48),
          f = r(c),
          p = n(49),
          h = r(p),
          m = function () {
            return new Date().getTime();
          };
        e.exports = i;
      },
      function (e, t) {
        'use strict';
        function n (e) {
          e || (e = 6);
          for (var t = '', n = 0; n < e; ++n) t += r[Math.floor(Math.random() * r.length)];
          return t;
        }
        t.__esModule = !0;
        var r = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        (n.verify = function (e) {
          return 'string' == typeof e && /^[a-zA-Z0-9]+$/.test(e);
        }),
          (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        function n (e) {
          var t = Object.prototype.toString.call(e);
          return (
            '[object Function]' === t ||
            ('function' == typeof e && '[object RegExp]' !== t) ||
            ('undefined' != typeof window &&
              (e === window.setTimeout ||
                e === window.alert ||
                e === window.confirm ||
                e === window.prompt))
          );
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        e.exports = function (e, t) {
          if (!e) return !1;
          e.commonAncestorContainer
            ? (e = e.commonAncestorContainer)
            : e.endContainer && (e = e.endContainer);
          for (var n = e; (n = n.parentNode); ) if (n == t) return !0;
          return !1;
        };
      },
      function (e, t, n) {
        function r (e) {
          return 'object' === ('undefined' == typeof HTMLElement ? 'undefined' : u(HTMLElement))
            ? e instanceof HTMLElement
            : e &&
                'object' === (void 0 === e ? 'undefined' : u(e)) &&
                null !== e &&
                1 === e.nodeType &&
                'string' == typeof e.nodeName;
        }
        function i (e, t) {
          var n,
            i,
            o,
            a,
            u,
            p = e;
          if (((t = +t || 1), !e || !r(e))) throw new Error('Element is mandatory');
          var h = e.ownerDocument;
          if (t <= 0) throw new Error('Threshold value must be greater than 0');
          do {
            if (
              '0' === f(p, 'opacity') ||
              'none' === f(p, 'display') ||
              'hidden' === f(p, 'visibility')
            )
              return !1;
          } while ((p = p.parentNode) !== document);
          return (
            !!c(e, t) &&
            ((i = l(e)),
            (n = d(h.defaultView || h.parentWindow)),
            (a = s(i, n)),
            (o = i.width * i.height),
            (u = a.width * a.height),
            (+o ? u / o : 0) >= t)
          );
        }
        var o,
          a,
          u =
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
                },
          s = n(50),
          l = n(51),
          d = n(55),
          c = n(56),
          f = n(57);
        void 0 !== e && 'undefined' != typeof e.exports
          ? (e.exports = i)
          : ((o = []),
            (a = function () {
              return i;
            }.apply(t, o)) !== undefined && (e.exports = a));
      },
      function (e, t, n) {
        function r (e, t, n) {
          var r = -1,
            i = e.length;
          for (!n && i > 0 && (n = e[++r]); ++r < i; ) n = t(n, e[r], r, e);
          return n;
        }
        function i () {
          return r(Array.prototype.slice.call(arguments), function (e, t) {
            var n = {
              top: Math.max(e.top, t.top),
              left: Math.max(e.left, t.left),
              right: Math.min(e.right, t.right),
              bottom: Math.min(e.bottom, t.bottom),
            };
            return (n.width = n.right - n.left), (n.height = n.bottom - n.top), n;
          });
        }
        var o, a;
        void 0 !== e && 'undefined' != typeof e.exports
          ? (e.exports = i)
          : ((o = []),
            (a = function () {
              return i;
            }.apply(t, o)) !== undefined && (e.exports = a));
      },
      function (e, t, n) {
        function r (e) {
          var t = d(e),
            n = u(e),
            r = n.bottom - n.top;
          return {
            left: t.left,
            top: t.top,
            right: n.right,
            bottom: t.top + r,
            width: n.right - t.left,
            height: r,
          };
        }
        function i () {
          var e = 1;
          if (document.body.getBoundingClientRect) {
            var t = document.body.getBoundingClientRect(),
              n = t.right - t.left,
              r = document.body.offsetWidth;
            e = Math.round((n / r) * 100) / 100;
          }
          return e;
        }
        function o (e, t) {
          e &&
            ((t.x += e.scrollLeft),
            (t.y += e.scrollTop),
            'html' != e.tagName.toLowerCase() && o(e.parentNode, t));
        }
        function a (e, t) {
          e && ((t.x += e.offsetLeft), (t.y += e.offsetTop), a(e.offsetParent, t));
        }
        function u (e, t, n, r, u) {
          var s = c(e);
          if (e.getBoundingClientRect === undefined) {
            var l = { x: 0, y: 0 };
            a(e, l);
            var d = { x: 0, y: 0 };
            return (
              o(e.parentNode, d),
              (t = l.x - d.x),
              (n = l.y - d.y),
              (r = e.offsetWidth),
              (u = e.offsetHeight),
              { left: t, top: n, width: r, height: u, right: t + r, bottom: n + u }
            );
          }
          if (
            ((s = e.getBoundingClientRect()),
            (t = s.left),
            (n = s.top),
            (r = s.right - s.left),
            (u = s.bottom - s.top),
            'microsoft internet explorer' == navigator.appName.toLowerCase())
          ) {
            (t -= document.documentElement.clientLeft), (n -= document.documentElement.clientTop);
            var f = i();
            1 != f &&
              ((t = Math.round(t / f)),
              (n = Math.round(n / f)),
              (r = Math.round(r / f)),
              (u = Math.round(u / f))),
              (s = { left: t, top: n, width: r, height: u, right: t + r, bottom: n + u });
          }
          return s;
        }
        var s,
          l,
          d = n(52),
          c = n(54);
        void 0 !== e && 'undefined' != typeof e.exports
          ? (e.exports = r)
          : ((s = []),
            (l = function () {
              return r;
            }.apply(t, s)) !== undefined && (e.exports = l));
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          var t = e.offsetTop,
            n = e.offsetLeft;
          return (
            1 !== document.body.offsetTop &&
              ((t += parseFloat(e.style.marginTop || 0)),
              (n += parseFloat(e.style.marginLeft || 0))),
            { top: t, left: n }
          );
        }
        var i = n(53),
          o = n(48);
        e.exports = function (e) {
          var t = i(e);
          if (t && o(e, t)) {
            var n = t.body;
            if (n === e) return r(e);
            var a = { top: 0, left: 0 };
            if (
              'undefined' != typeof e.getBoundingClientRect &&
              ((a = e.getBoundingClientRect()), e.collapsed && 0 === a.left && 0 === a.top)
            ) {
              var u = t.createElement('span');
              u.appendChild(t.createTextNode('\u200B')),
                e.insertNode(u),
                (a = u.getBoundingClientRect());
              var s = u.parentNode;
              s.removeChild(u), s.normalize();
            }
            var l = t.documentElement,
              d = l.clientTop || n.clientTop || 0,
              c = l.clientLeft || n.clientLeft || 0,
              f = window.pageYOffset || l.scrollTop,
              p = window.pageXOffset || l.scrollLeft;
            return { top: a.top + f - d, left: a.left + p - c };
          }
        };
      },
      function (e, t) {
        'use strict';
        function n (e) {
          return e && e.nodeType === i;
        }
        function r (e) {
          return n(e)
            ? e
            : n(e.ownerDocument)
            ? e.ownerDocument
            : n(e.document)
            ? e.document
            : e.parentNode
            ? r(e.parentNode)
            : e.commonAncestorContainer
            ? r(e.commonAncestorContainer)
            : e.startContainer
            ? r(e.startContainer)
            : e.anchorNode
            ? r(e.anchorNode)
            : void 0;
        }
        e.exports = r;
        var i = 9;
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          var t = null,
            n = i(e);
          if (3 === e.nodeType) {
            var r = n.createRange();
            r.selectNodeContents(e), (e = r);
          }
          if (
            'function' == typeof e.getBoundingClientRect &&
            ((t = e.getBoundingClientRect()), e.startContainer && 0 === t.left && 0 === t.top)
          ) {
            var o = n.createElement('span');
            o.appendChild(n.createTextNode('\u200B')),
              e.insertNode(o),
              (t = o.getBoundingClientRect());
            var a = o.parentNode;
            a.removeChild(o), a.normalize();
          }
          return t;
        }
        var i = n(53);
        e.exports = r;
      },
      function (e, t) {
        'use strict';
        function n (e) {
          e = e || window;
          var t = e.document,
            n = t.documentElement || t.body.parentNode || t.body,
            r = n.clientWidth,
            i = n.clientHeight,
            o = e.pageXOffset !== undefined ? e.pageXOffset : n.scrollLeft,
            a = e.pageYOffset !== undefined ? e.pageYOffset : n.scrollTop;
          return { top: a, right: o + r, left: o, bottom: a + i, width: r, height: i };
        }
        e.exports = n;
      },
      function (e, t, n) {
        function r (e, t) {
          t = t || 1;
          var n = u(e),
            r = e.ownerDocument,
            i = Math.max(
              r.body.clientWidth,
              r.documentElement.offsetWidth,
              r.documentElement.scrollWidth
            ),
            o = Math.max(
              r.body.clientHeight,
              r.documentElement.offsetHeight,
              r.documentElement.scrollHeight
            ),
            s = { top: 0, left: 0, right: i, bottom: o, width: i, height: o },
            l = a(n, s),
            d = n.left >= 0 && n.right <= i && n.top >= 0 && n.bottom <= o,
            c =
              l.left >= 0 &&
              l.right <= i &&
              l.top >= 0 &&
              l.bottom <= o &&
              Math.abs(l.width) > 0 &&
              Math.abs(l.height) > 0,
            f = 0,
            p = 0,
            h = 0;
          return (
            c &&
              ((f = l.width * l.height),
              (p = n.width * n.height),
              (h = +p ? f / p : 0),
              (c = h >= t)),
            d || c
          );
        }
        var i,
          o,
          a = n(50),
          u = n(51);
        void 0 !== e && 'undefined' != typeof e.exports
          ? (e.exports = r)
          : ((i = []),
            (o = function () {
              return r;
            }.apply(t, i)) !== undefined && (e.exports = o));
      },
      function (e, t, n) {
        'use strict';
        function r (e, t, n) {
          if ('object' === (void 0 === t ? 'undefined' : i(t))) {
            var a = t;
            for (t in a) r(e, o(t), a[t]);
            return a;
          }
          var u = e.ownerDocument,
            s = u.defaultView || u.parentWindow;
          return (
            s.getComputedStyle ||
              (s.getComputedStyle = function (e, t) {
                return (
                  (this.el = e),
                  (this.getPropertyValue = function (t) {
                    var n = /(\-([a-z]){1})/g;
                    return (
                      'float' === t && (t = 'styleFloat'),
                      n.test(t) &&
                        (t = t.replace(n, function () {
                          return arguments[2].toUpperCase();
                        })),
                      e.currentStyle[t] ? e.currentStyle[t] : null
                    );
                  }),
                  this
                );
              }),
            3 === arguments.length
              ? ((e.style[o.reverse('float' === t ? 'cssFloat' : t)] = n || ''), n)
              : s.getComputedStyle(e, null).getPropertyValue(o('cssFloat' === t ? 'float' : t))
          );
        }
        var i =
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
                },
          o = n(58);
        e.exports = r;
      },
      function (e, t) {
        'use strict';
        var n = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,
          r = /-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;
        (e.exports = t = function (e) {
          return e.replace(n, function (e) {
            return '-' + e.toLowerCase();
          });
        }),
          (t.reverse = function (e) {
            return e.replace(r, function (e) {
              return e.slice(1).toUpperCase();
            });
          });
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.attrPrefix,
            n = t === undefined ? N['default'] : t,
            r = e.adAreaNode,
            i = r === undefined ? (0, k['default'])('adAreaNode') : r,
            o = e.adData,
            u = o === undefined ? (0, k['default'])('adData') : o,
            l = u.events || h['default'].of([]),
            c = i.getAttribute(n + 'request-id') || '',
            p = i.getAttribute(n + 'unit-id') || '',
            m = i.getAttribute(n + 'unit-idx') || '',
            y = (0, _['default'])('view-binder:' + p + (c ? ':' + c : '') + (m ? ':' + m : '')),
            w = i.querySelector('[' + n + 'target-self]') ? '_top' : '_blank',
            E = u.landingUrl.getOrElse('#'),
            x = i.querySelector('[' + n + 'custom-scheme-prefix]'),
            T = x ? x.getAttribute(n + 'custom-scheme-prefix') : '',
            C = ee(T),
            L = u.adInfoIcon.getOrElse(Y),
            O = C(u.adInfoUrl.getOrElse(z)),
            D = 'vastTag' in u && !!u.vastTag.getOrElse(0);
          return new v['default'](function (e, t) {
            try {
              if ('type' in u && 'no_ad' === u.type.getOrElse('no_ad'))
                return (
                  y('해당 영역에 보여줄 컨텐츠가 없습니다'), void e({ adData: u, adUnitId: p })
                );
              te({
                attrPrefix: n,
                adAreaNode: i,
                adInfoIcon: L,
                adInfoUrl: O,
                dspId: u.dspId.getOrElse(),
                landingUrl: C(E),
                landingTarget: w,
                adDataType: u.type.getOrElse('content'),
                log: y,
              }),
                (0, a['default'])(function (e) {
                  var t = '' + n + (0, b['default'])(X[e] || e),
                    r = i.querySelectorAll('[' + t + ']'),
                    o = i.hasAttribute(t) ? [i] : (0, I['default'])(r);
                  if (!(o.length < 1)) {
                    if (
                      (y(e + ': found ' + o.length + ' node(s) which has attribute "' + t + '"'),
                      'landingUrl' === e)
                    )
                      return void (0, a['default'])(function (e) {
                        J({
                          applyThisCustomSchemePrefixFn: C,
                          node: e,
                          landingUrl: E,
                          landingTarget: w,
                          events: l,
                        });
                      }, o);
                    if ('mainImage' === e && D) {
                      var c = o[0];
                      y('video tag 생성');
                      var f = g.Dom.create(
                          '<video playsinline webkit-playsinline muted preload="auto" tabindex="-1"><p>동영상 재생이 불가능합니다</p></video>'
                        ).firstChild,
                        p = !1 !== /probably|maybe/.test((0, A['default'])(f));
                      try {
                        if (!p) throw new Error('비디오 재생이 불가능합니다.');
                        y('node와 동일 level로 video tag 추가'),
                          c.parentNode.insertBefore(f, c),
                          y('video player 초기화'),
                          (0, R['default'])({
                            videoElement: f,
                            vastXml: u.vastTag.getOrElse(),
                            posterSrc: u.videoImage
                              .getOrElse({ url: h['default'].Nothing() })
                              .url.getOrElse(),
                            log: function (e) {
                              y('[kakaoAdPlayer] ' + e);
                            },
                          }),
                          (f.parentNode.style.pointerEvents = 'auto'),
                          (f.parentNode.style.cursor = 'pointer'),
                          (0, S.addEventListener)(f, 'click', function (e) {
                            return (0, S.stopEvent)(e);
                          }),
                          (c.style.display = 'none');
                      } catch (m) {
                        y('player를 사용할 수 없음: ' + (m.message || m)),
                          p &&
                            (g.Dom.hasClass(f.parentNode, 'kakao-video-ad')
                              ? c.parentNode.removeChild(f.parentNode)
                              : c.parentNode.removeChild(f)),
                          y(
                            'videoImage를 mainImage로 사용하고, 기존 이미지 처리 로직에서 나머지를 처리하도록 함'
                          ),
                          (u[e] = u.videoImage);
                      }
                    } else {
                      if (/image|icon/.test(e.toLowerCase()))
                        return void (0, d['default'])(
                          (0, s['default'])(function (e) {
                            return 'IMG' === e.tagName.toUpperCase();
                          }),
                          (0, a['default'])(function (t) {
                            var n = u[e].getOrElse(),
                              r = parseInt(t.getAttribute(N['default'] + 'image-width'), 10) || 0,
                              i = n.width.getOrElse() / M['default'];
                            0 === (parseInt(t.getAttribute('width') || t.style.width, 10) || 0) &&
                              (t.width = r || i),
                              n.url.getOrElse() && (t.src = n.url.getOrElse()),
                              t.setAttribute(
                                'alt',
                                u.altText.getOrElse(u.dspId.getOrElse('Kakao') + ' 광고 입니다.')
                              );
                          })
                        )(o);
                      (0, a['default'])(function (t) {
                        'img' !== t.tagName.toLowerCase() &&
                          (t.childNodes.length < 2
                            ? (t.innerText = u[e].getOrElse(''))
                            : t.insertBefore(
                                document.createTextNode(u[e].getOrElse('')),
                                t.firstChild
                              ));
                      }, o),
                        y('landingUrl, altText 이외의 속성에 클릭 이벤트 추가: '),
                        !1 === /landingUrl|altText|vastTag|adInfoUrl/.test(e) &&
                          (0, a['default'])(function (t) {
                            var r = t.parentNode;
                            for (
                              t.setAttribute(n + 'action-type', e);
                              r !== i && !r.hasAttribute('' + n + (0, b['default'])('landingUrl'));

                            )
                              r = r.parentNode;
                            r === i &&
                              !1 === r.hasAttribute('' + n + (0, b['default'])('landingUrl')) &&
                              J({
                                node: t,
                                events: l,
                                landingUrl: E,
                                landingTarget: w,
                                applyThisCustomSchemePrefixFn: C,
                                fieldTargetName: 'actionType',
                                fieldTargetValue: e,
                              });
                          }, o);
                    }
                  }
                }, (0, f['default'])(u)),
                e({ adAreaNode: i, adData: u, adUnitId: p });
            } catch (r) {
              t(r);
            }
          });
        }
        t.__esModule = !0;
        var o = n(24),
          a = r(o),
          u = n(20),
          s = r(u),
          l = n(12),
          d = r(l),
          c = n(22),
          f = r(c),
          p = n(38),
          h = r(p),
          m = n(60),
          v = r(m),
          g = n(61),
          y = n(62),
          b = r(y),
          w = n(15),
          _ = r(w),
          E = n(31),
          k = r(E),
          x = n(63),
          T = r(x),
          C = n(29),
          N = r(C),
          L = n(67),
          R = r(L),
          O = n(68),
          A = r(O),
          D = n(108),
          M = r(D),
          S = n(26),
          U = n(28),
          I = r(U),
          F = n(109),
          P = r(F),
          B = n(110),
          j = r(B),
          H = n(43),
          q = r(H),
          W = n(111),
          V = r(W),
          X = {
            body: 'desc',
            profileIcon: 'profileImgUrl',
            mainImage: 'mainImgUrl',
            callToAction: 'actionButton',
            videoImage: 'videoImgUrl',
          },
          z = 'https://info.ad.daum.net/optout.do',
          Y = q['default'].of({
            width: '24',
            height: '15',
            url: 'https://t1.daumcdn.net/adfit/static/icon/ad.png',
          }),
          K = (0, T['default'])('click'),
          G = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.node,
              n = e.attrPrefix,
              r = n === undefined ? N['default'] : n,
              i = e.fieldTargetName,
              o = i === undefined ? 'actionType' : i,
              a = '' + r + (0, b['default'])(o);
            return t && 'hasAttribute' in t && t.hasAttribute(a) ? t.getAttribute(a) : null;
          },
          $ = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.events,
              n = t === undefined ? h['default'].of([]) : t,
              r = e.landingUrl,
              i = r === undefined ? (0, k['default'])('landingUrl') : r,
              o = e.landingTarget,
              a = o === undefined ? '_blank' : o,
              u = e.applyThisCustomSchemePrefixFn,
              s =
                u === undefined
                  ? function (e) {
                      return e;
                    }
                  : u,
              l = e.attrPrefix,
              d = l === undefined ? N['default'] : l,
              c = e.fieldTargetName,
              f = c === undefined ? 'actionType' : c,
              p = e.fieldTargetValue,
              m = p === undefined ? '' : p;
            return function (e) {
              (0, S.stopEvent)(e), K(n);
              var t = e.target || e.srcElement,
                r = m;
              if (f && !r) {
                var o = '' + d + (0, b['default'])(f);
                r =
                  G({ node: t, fieldTargetName: f }) ||
                  G({ node: t.previousSibling, fieldTargetName: f }) ||
                  G({ node: t.nextSibling, fieldTargetName: f }) ||
                  G({ node: t.parent, fieldTargetName: f }) ||
                  G({ node: t.querySelector('[' + o + ']'), fieldTargetName: f });
              }
              var u = document.createElement('A');
              return (
                (u.href = f && r ? [i, f + '=' + r].join(i.indexOf('?') > -1 ? '&' : '?') : i),
                (u.target = a),
                (u.style.cssText = 'display:none;visibility:hidden;'),
                (u.href = s(u.href)),
                (u.onclick = function () {
                  document.body.removeChild(u);
                }),
                document.body.appendChild(u),
                u.click(),
                !1
              );
            };
          },
          J = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.node,
              n = t === undefined ? (0, k['default'])('node') : t,
              r = e.events,
              i = r === undefined ? h['default'].of([]) : r,
              o = e.landingUrl,
              a = o === undefined ? (0, k['default'])('landingUrl') : o,
              u = e.landingTarget,
              s = u === undefined ? '_blank' : u,
              l = e.applyThisCustomSchemePrefixFn,
              d =
                l === undefined
                  ? function (e) {
                      return e;
                    }
                  : l,
              c = e.fieldTargetName,
              f = e.fieldTargetValue;
            '_currentClickEventHandler' in n &&
              ((0, S.removeEventListener)(n, 'click', n._currentClickEventHandler),
              (n._currentClickEventHandler = null)),
              'A' === n.tagName.toUpperCase()
                ? ((n.target = s),
                  (n.href = a),
                  c && f && (n.href = [a, c + '=' + f].join(a.indexOf('?') > -1 ? '&' : '?')),
                  (n.href = d(n.href)))
                : ((n.style.pointerEvents = 'auto'), (n.style.cursor = 'pointer')),
              (n._currentClickEventHandler = $({
                events: i,
                landingUrl: a,
                landingTarget: s,
                applyThisCustomSchemePrefixFn: d,
                fieldTargetName: c,
                fieldTargetValue: f,
              })),
              (0, S.addEventListener)(n, 'click', n._currentClickEventHandler);
          },
          Q = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.adInfoUrl,
              n = t === undefined ? z : t,
              r = e.landingTarget,
              i = r === undefined ? '_blank' : r;
            return function (e) {
              (0, S.stopEvent)(e);
              var t = document.createElement('A');
              return (
                (t.href = n),
                (t.style.cssText = 'display:none;visibility:hidden;'),
                (t.target = i),
                document.body.appendChild(t),
                t.click(),
                document.body.removeChild(t),
                !1
              );
            };
          },
          Z = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.adInfoUrl,
              n = t === undefined ? z : t,
              r = e.adInfoIcon,
              i = r === undefined ? Y : r,
              o = e.landingTarget,
              a = o === undefined ? 'blank' : o,
              u = e.disableLink;
            return u !== undefined && u
              ? g.Dom.create(
                  '<span adfit-ad-info-icon style="position:absolute;top:0px;right:0px;display:inline-block;z-index:100;overflow:hidden;border:0px;line-height:0px" ><img src="' +
                    i +
                    '" width="24" height="15" border="0" alt="Kakao 맞춤형 광고 입니다."></span>'
                ).firstChild
              : g.Dom.create(
                  '<a adfit-ad-info style="position:absolute;top:0px;right:0px;display:inline-block;z-index:100;overflow:hidden;border:0px;line-height:0px;pointer-events:auto;" href="' +
                    n +
                    '" target="' +
                    a +
                    '"><img src="' +
                    i.url.getOrElse('https://t1.daumcdn.net/adfit/static/icon/ad.png') +
                    '" width="' +
                    i.width.getOrElse('24') +
                    '" height="' +
                    i.height.getOrElse('15') +
                    '" border="0" alt="Kakao 광고 안내 페이지 입니다."></span>'
                ).firstChild;
          },
          ee = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            return function () {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : (0, k['default'])('url');
              return e && -1 === t.indexOf(e) ? '' + e + encodeURIComponent(t) : t;
            };
          },
          te = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.adAreaNode,
              n = t === undefined ? (0, k['default'])('adAreaNode') : t,
              r = e.adDataType,
              i = r === undefined ? (0, k['default'])('adData.type') : r,
              o = e.log,
              a =
                o === undefined
                  ? function (e) {
                      console.log(e);
                    }
                  : o,
              u = e.dspId,
              s = u === undefined ? 'content' : u,
              l = e.adInfoIcon,
              d = l === undefined ? Y : l,
              c = e.adInfoUrl,
              f = c === undefined ? z : c,
              p = e.attrPrefix,
              h = p === undefined ? N['default'] : p,
              m = e.adInfoNode,
              v = m === undefined ? n.querySelector('[' + h + 'ad-info]') : m,
              g = e.adInfoIconNode,
              y = g === undefined ? n.querySelector('[' + h + 'ad-info-icon]') : g,
              b = e.landingUrl,
              w = e.landingTarget,
              _ = w === undefined ? '_blank' : w,
              E = (0, V['default'])(),
              x = !((0, P['default'])(E) && (0, j['default'])(s));
            if (
              (x ||
                (a('_applyAdInfoIcon > 광고 아이콘을 사용하지 않아도 되는 지면입니다.'),
                (f = b),
                a('_applyAdInfoIcon > adInfoUrl 대신 landingUrl 을 적용합니다.')),
              x && !v && !y)
            )
              return (
                a('_applyAdInfoIcon > 광고 아이콘이 없습니다. 기본 아이콘을 생성합니다.'),
                void n.appendChild(Z({ adInfoIcon: d, adInfoUrl: f, landingTarget: _ }))
              );
            y && !v && (v = y),
              y &&
                'IMG' === y.tagName.toUpperCase() &&
                ((y.src = d.url.getOrElse()),
                (y.width = d.width.getOrElse()),
                (y.height = d.height.getOrElse()),
                y.setAttribute('alt', s + ' 광고 안내 페이지 입니다.')),
              v &&
                'content' !== i &&
                (a('adInfoNode: ' + v.tagName),
                a('dspId: ' + s),
                a('referrer: ' + E),
                x &&
                  ('IMG' !== v.tagName.toUpperCase()
                    ? v.setAttribute('title', s + ' 광고 안내 페이지 입니다.')
                    : v.setAttribute('alt', s + ' 광고 안내 페이지 입니다.')),
                'A' !== v.tagName.toUpperCase()
                  ? ((v.style.cursor = 'pointer'),
                    (v.style.pointerEvents = 'auto'),
                    '_currentClickEventListener' in v &&
                      ((0, S.removeEventListener)(v, 'click', v._currentClickEventListener),
                      (v._currentClickEventListener = null)),
                    (v._currentClickEventListener = Q({ adInfoUrl: x ? f : b, landingTarget: _ })),
                    (0, S.addEventListener)(v, 'click', v._currentClickEventListener))
                  : ((v.href = x ? f : b), (v.target = _)),
                x && n.hasAttribute(N['default'] + 'native-ad') && (v.style.display = 'block'));
          };
        t['default'] = i;
      },
      function (e, t) {
        'use strict';
        t.__esModule = !0;
        var n =
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
                },
          r =
            r ||
            (function () {
              function e () {}
              function t (e, t) {
                return function () {
                  e.apply(t, arguments);
                };
              }
              function r (e, t) {
                for (; 3 === e._state; ) e = e._value;
                if (0 === e._state) return void e._deferreds.push(t);
                (e._handled = !0),
                  l._immediateFn(function () {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null === n) return void (1 === e._state ? i : o)(t.promise, e._value);
                    var r = void 0;
                    try {
                      r = n(e._value);
                    } catch (a) {
                      return void o(t.promise, a);
                    }
                    i(t.promise, r);
                  });
              }
              function i (e, r) {
                try {
                  if (r === e) throw new TypeError('A promise cannot be resolved with itself.');
                  if (
                    r &&
                    ('object' === (void 0 === r ? 'undefined' : n(r)) || 'function' == typeof r)
                  ) {
                    var i = r.then;
                    if (r instanceof l) return (e._state = 3), (e._value = r), void a(e);
                    if ('function' == typeof i) return void s(t(i, r), e);
                  }
                  (e._state = 1), (e._value = r), a(e);
                } catch (u) {
                  o(e, u);
                }
              }
              function o (e, t) {
                (e._state = 2), (e._value = t), a(e);
              }
              function a (e) {
                2 === e._state &&
                  0 === e._deferreds.length &&
                  l._immediateFn(function () {
                    e._handled || l._unhandledRejectionFn(e._value);
                  });
                for (var t = 0, n = e._deferreds.length; t < n; t++) r(e, e._deferreds[t]);
                e._deferreds = null;
              }
              function u (e, t, n) {
                (this.onFulfilled = 'function' == typeof e ? e : null),
                  (this.onRejected = 'function' == typeof t ? t : null),
                  (this.promise = n);
              }
              function s (e, t) {
                var n = !1;
                try {
                  e(
                    function (e) {
                      n || ((n = !0), i(t, e));
                    },
                    function (e) {
                      n || ((n = !0), o(t, e));
                    }
                  );
                } catch (r) {
                  if (n) return;
                  (n = !0), o(t, r);
                }
              }
              function l (e) {
                if (!(this instanceof l))
                  throw new TypeError('Promises must be constructed via new');
                if ('function' != typeof e) throw new TypeError('not a function');
                (this._state = 0),
                  (this._handled = !1),
                  (this._value = undefined),
                  (this._deferreds = []),
                  s(e, this);
              }
              var d = setTimeout,
                c = l.prototype;
              return (
                (c['catch'] = function (e) {
                  return this.then(null, e);
                }),
                (c.then = function (t, n) {
                  var i = new this.constructor(e);
                  return r(this, new u(t, n, i)), i;
                }),
                (l.all = function (e) {
                  return new l(function (t, r) {
                    function i (e, u) {
                      try {
                        if (
                          u &&
                          ('object' === (void 0 === u ? 'undefined' : n(u)) ||
                            'function' == typeof u)
                        ) {
                          var s = u.then;
                          if ('function' == typeof s)
                            return void s.call(
                              u,
                              function (t) {
                                i(e, t);
                              },
                              r
                            );
                        }
                        (o[e] = u), 0 == --a && t(o);
                      } catch (l) {
                        r(l);
                      }
                    }
                    if (!e || 'undefined' == typeof e.length)
                      throw new TypeError('Promise.all accepts an array');
                    var o = Array.prototype.slice.call(e);
                    if (0 === o.length) return t([]);
                    for (var a = o.length, u = 0; u < o.length; u++) i(u, o[u]);
                  });
                }),
                (l.resolve = function (e) {
                  return e &&
                    'object' === (void 0 === e ? 'undefined' : n(e)) &&
                    e.constructor === l
                    ? e
                    : new l(function (t) {
                        t(e);
                      });
                }),
                (l.reject = function (e) {
                  return new l(function (t, n) {
                    n(e);
                  });
                }),
                (l.race = function (e) {
                  return new l(function (t, n) {
                    for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n);
                  });
                }),
                (l._immediateFn =
                  ('function' == typeof setImmediate &&
                    function (e) {
                      setImmediate(e);
                    }) ||
                  function (e) {
                    d(e, 0);
                  }),
                (l._unhandledRejectionFn = function (e) {
                  'undefined' != typeof console &&
                    console &&
                    console.warn('Possible Unhandled Promise Rejection:', e);
                }),
                l
              );
            })();
        t['default'] = r;
      },
      function (e, t) {
        'use strict';
        var n =
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
        !(function (e, t, r) {
          function i (e, t) {
            if (Array.prototype.indexOf) return Array.prototype.indexOf.call(e, t);
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          }
          function o (e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          }
          function a (e) {
            return 'string' == typeof e;
          }
          function u (e) {
            return 'number' == typeof e && isFinite(e);
          }
          function s (e) {
            return 'function' == typeof e;
          }
          function l (e) {
            return (
              e &&
              'object' === (void 0 === e ? 'undefined' : n(e)) &&
              Object.getPrototypeOf(e) === Object.getPrototypeOf({})
            );
          }
          function d (t) {
            return (
              !m.isNode(t) &&
              !m.isElement(t) &&
              t !== e &&
              (l(t) ||
                o(t) ||
                ('object' === (void 0 === t ? 'undefined' : n(t)) && null !== t && t.length !== r))
            );
          }
          function c (i, o) {
            var a;
            return (
              (a =
                'function' == typeof e.getComputedStyle
                  ? e.getComputedStyle(i)
                  : n(t.currentStyle) !== r && 'currentStyle' in i
                  ? i.currentStyle
                  : i.style),
              o ? a[o] : a
            );
          }
          function f (e, t) {
            if (o(e) || ('object' === (void 0 === e ? 'undefined' : n(e)) && e.length !== r))
              for (var i = 0, a = e.length; i < a; i++) t.apply(e[i], [e[i], i]);
            else if (l(e)) for (var u in e) t.apply(e[u], [e[u], u]);
          }
          function p (e) {
            var t = new m.Event(e);
            (b = t),
              f(g, function (e) {
                e.call(null, t);
              });
          }
          var h,
            m = {},
            v = [],
            g = [],
            y = !1,
            b = !1,
            w = t.addEventListener ? 'addEventListener' : 'attachEvent',
            _ = t.removeEventListener ? 'removeEventListener' : 'detachEvent',
            E = t.addEventListener ? '' : 'on',
            k = (t.createEvent, t.dispatchEvent, ['-moz-', '-ms-', '-webkit-', '-o-', '']),
            x = function (e) {
              return e;
            },
            T = e.requestAnimationFrame,
            C = e.cancelAnimationFrame || e.cancelRequestAnimationFrame,
            N = t.createElement('div'),
            L =
              (c(N),
              (function () {
                for (
                  var e = 3, n = t.createElement('div'), r = n.getElementsByTagName('i');
                  (n.innerHTML = '<!--[if gt IE ' + ++e + ']><i></i><![endif]-->'), r[0];

                );
                return e > 4 ? e : void 0;
              })());
          L &&
            L < 9 &&
            (x = function (e) {
              for (var t = /-([a-z0-9])/; t.test(e); e = e.replace(t, RegExp.$1.toUpperCase()));
              return e;
            });
          var R = (function () {
            for (var e in k) c(N), k[e];
            return !1;
          })();
          if (!T || !C)
            for (var O = 0; O < k.length; O++) {
              var A = k[O];
              (T = T || e[A + 'RequestAnimationFrame']),
                (C = C || e[A + 'CancelAnimationFrame'] || e[A + 'CancelRequestAnimationFrame']);
            }
          (T && C) ||
            ((T = function (t) {
              var n = new Date().getTime(),
                r = Math.max(0, 16 - (n - h)),
                i = e.setTimeout(function () {
                  t(n + r);
                }, r);
              return (h = n + r), i;
            }),
            (C = function (t) {
              e.clearTimeout(t);
            }));
          var D = function (e, n) {
            function r (e) {
              function n (e) {
                var t = e.x - i.startX,
                  n = e.y - i.startY,
                  r = i.options.grid[0],
                  a = i.options.grid[1];
                r > 1 && (t = Math.round(t / r) * r), a > 1 && (n = Math.round(n / a) * a);
                var u = m.isElement(i.options.constrain),
                  s = o(i.options.constrain) && 4 === i.options.constrain.length;
                if (i.options.constrain && (u || s)) {
                  if (u)
                    var l = m.offset(i.options.constrain),
                      d = [l.left, l.top, l.width, l.height];
                  else var d = i.options.constrain;
                  var c = d[1] - i.offset.top,
                    f = d[1] + d[3] - (i.offset.top + i.offset.height);
                  n <= 0 && n < c && (n = c), n >= 0 && n > f && (n = f);
                  var p = d[0] - i.offset.left,
                    h = d[0] + d[2] - (i.offset.left + i.offset.width);
                  t <= 0 && t < p && (t = p), t >= 0 && t > h && (t = h);
                }
                switch (i.options.axis) {
                  case 'x':
                    i.deltaX = t;
                    break;
                  case 'y':
                    i.deltaY = n;
                    break;
                  default:
                    (i.deltaX = t), (i.deltaY = n);
                }
                (e.target = i.options.handler), i.options.onDragMove.call(i, e);
              }
              function r (e) {
                (i.isDragging = !1),
                  m.removeListener(t, m.Event.ON_MOUSEMOVE, n),
                  m.removeListener(t, m.Event.ON_TOUCHMOVE, n),
                  m.removeListener(t, m.Event.ON_MOUSEUP, r),
                  m.removeListener(t, m.Event.ON_TOUCHEND, r);
                var o = i.position.y + i.deltaY + 'px',
                  a = i.position.x + i.deltaX + 'px';
                if (((i.element.style.top = o), (i.element.style.left = a), R))
                  for (var u in k) {
                    var s = k[u] + 'transform';
                    i.element.style[s] = '';
                  }
                (i.options.handler.style.cursor = i._savedCursorState),
                  (e.target = i.options.handler),
                  i.options.onDragEnd.call(i, e);
              }
              if (e.button == m.Mouse.BUTTON_LEFT) {
                e.preventDefault();
                var i = this,
                  a = c(i.element);
                (i.isDragging = !0),
                  (i.deltaX = 0),
                  (i.deltaY = 0),
                  (i.position.x = parseInt(a.left)),
                  (i.position.y = parseInt(a.top)),
                  (i.startX = e.x),
                  (i.startY = e.y),
                  (i.offset = m.offset(i.element)),
                  i.options.onDragStart.call(i, e),
                  isNaN(i.position.x) && (i.position.x = 0),
                  isNaN(i.position.y) && (i.position.y = 0);
                var u = a.position;
                'relative' != u && 'absolute' != u && (u = 'relative'),
                  m.css(i.element, {
                    position: u,
                    top: i.position.y + 'px',
                    left: i.position.x + 'px',
                    '-moz-user-select': 'none',
                    '-webkit-user-select': 'none',
                    'user-select': 'none',
                    '::selection': 'none',
                  }),
                  m.css(i.options.handler, { cursor: i.options.cursor }),
                  (function s () {
                    if (i.isDragging) {
                      T(s);
                      var e = i.deltaY + 'px',
                        t = i.deltaX + 'px';
                      if (R)
                        for (var n in k) {
                          var r = k[n] + 'transform';
                          i.element.style[r] = 'translate(' + t + ',' + e + ')';
                        }
                      else
                        (i.element.style.top = i.position.y + i.deltaY + 'px'),
                          (i.element.style.left = i.position.x + i.deltaX + 'px');
                    }
                  })(),
                  m.onMouseMove(t, n),
                  m.onTouchMove(t, n),
                  m.onMouseUp(t, r),
                  m.onTouchEnd(t, r);
              }
            }
            var n = n || {};
            (this.element = e),
              (this.options = {
                onDragStart: n.onDragStart || function () {},
                onDragMove: n.onDragMove || function () {},
                onDragEnd: n.onDragEnd || function () {},
                handler: n.handler || e,
                cursor: n.cursor || 'move',
                axis: n.axis || !1,
                grid: n.grid || [1, 1],
                constrain: n.constrain || !1,
              }),
              (this.isDragging = !1),
              (this.position = { x: 'auto', y: 'auto' }),
              (this._savedCursorState = this.options.handler.style.cursor),
              m.onMouseDown(this.options.handler, r.bind(this)),
              m.onTouchStart(this.options.handler, r.bind(this));
          };
          (m.isElement = function (e) {
            return 'object' === ('undefined' == typeof HTMLElement ? 'undefined' : n(HTMLElement))
              ? e instanceof HTMLElement
              : e &&
                  'object' === (void 0 === e ? 'undefined' : n(e)) &&
                  1 === e.nodeType &&
                  'string' == typeof e.nodeName;
          }),
            (m.isNode = function (e) {
              return 'object' === ('undefined' == typeof Node ? 'undefined' : n(Node))
                ? e instanceof Node
                : e &&
                    'object' === (void 0 === e ? 'undefined' : n(e)) &&
                    'number' == typeof e.nodeType &&
                    'string' == typeof e.nodeName;
            }),
            (m.requestAnimationFrame = function () {
              return T;
            }),
            (m.cancelAnimationFrame = function () {
              return C;
            }),
            (m.draggable = function (e, t) {
              return new D(e, t);
            }),
            (m.Event = function (e) {
              (this._e = e),
                (m.Event.prototype.stopPropagation = function () {
                  this._e.stopPropagation
                    ? this._e.stopPropagation()
                    : (this._e.cancelBubble = !0);
                }),
                (m.Event.prototype.preventDefault = function () {
                  this._e.preventDefault ? this._e.preventDefault() : (this._e.returnValue = !1);
                }),
                (this.target = this._e.target || this._e.srcElement),
                (this.ctrlKey = this._e.ctrlKey),
                (this.shiftKey = this._e.shiftKey),
                (this.altKey = this._e.altKey),
                (this.layerY = this._e.layerY || this._e.offsetY),
                (this.layerX = this._e.layerX || this._e.offsetX),
                (this.x = this._e.x || this._e.clientX),
                (this.y = this._e.y || this._e.clientY),
                (this.keyCode = this._e.keyCode),
                (this.name = this.type = this._e.type),
                (this.path = this._e.path),
                (this.timeStamp = this._e.timeStamp),
                L & (L < 9)
                  ? (this.button =
                      1 == this._e.button
                        ? m.Mouse.BUTTON_LEFT
                        : 4 == this._e.button
                        ? m.Mouse.BUTTON_MIDDLE
                        : m.Mouse.BUTTON_RIGHT)
                  : this._e.hasOwnProperty('which')
                  ? (this.button =
                      1 == this._e.which
                        ? m.Mouse.BUTTON_LEFT
                        : 2 == this._e.which
                        ? m.Mouse.BUTTON_MIDDLE
                        : m.Mouse.BUTTON_RIGHT)
                  : (this.button = this._e.button);
            }),
            (m.Mouse = {}),
            (m.Mouse.BUTTON_LEFT = 0),
            (m.Mouse.BUTTON_MIDDLE = 1),
            (m.Mouse.BUTTON_RIGHT = 2),
            (m.Event.ON_CLICK = 'click'),
            (m.Event.ON_DBLCLICK = 'dblclick'),
            (m.Event.ON_CONTEXTMENU = 'contextmenu'),
            (m.Event.ON_MOUSEDOWN = 'mousedown'),
            (m.Event.ON_MOUSEENTER = 'mouseenter'),
            (m.Event.ON_MOUSELEAVE = 'mouseleave'),
            (m.Event.OM_MOUSEMOVE = 'mousemove'),
            (m.Event.ON_MOUSEOVER = 'mouseover'),
            (m.Event.ON_MOUSEOUT = 'mouseout'),
            (m.Event.ON_MOUSEUP = 'mouseup'),
            (m.Event.ON_MOUSEMOVE = 'mousemove'),
            (m.Event.ON_TOUCHSTART = 'touchstart'),
            (m.Event.ON_TOUCHEND = 'touchend'),
            (m.Event.ON_TOUCHMOVE = 'touchmove'),
            (m.Event.ON_TOUCHCANCEL = 'touchcancel'),
            (m.Event.ON_KEYDOWN = 'keydown'),
            (m.Event.ON_KEYUP = 'keyup'),
            (m.Event.ON_KEYPRESS = 'keypress'),
            (m.Event.ON_SELECT = 'select'),
            (m.Event.ON_RESET = 'reset'),
            (m.Event.ON_FOCUS = 'focus'),
            (m.Event.ON_BLUR = 'blur'),
            (m.Event.ON_SUBMIT = 'submit'),
            (m.Event.ON_CHANGE = 'change'),
            (m.Event.ON_LOAD = 'load'),
            (m.Event.ON_UNLOAD = 'unload'),
            (m.Event.ON_RESIZE = 'resize'),
            (m.Event.ON_UNLOAD = 'unload'),
            (m.Event.ON_ERROR = 'error'),
            (m.Event.ON_SCROLL = 'scroll'),
            (m.Event.ON_DRAG = 'drag'),
            (m.Event.ON_DRAGSTART = 'dragstart'),
            (m.Event.ON_DRAGEND = 'dragend'),
            (m.Event.ON_DRAGENTER = 'dragenter'),
            (m.Event.ON_DRAGLEAVE = 'dragleave'),
            (m.Event.ON_DRAGOVER = 'dragover'),
            (m.Event.ON_DROP = 'drop'),
            (m.Event.ON_DOM_DRAGSTART = 'onDomDragStart'),
            (m.Event.ON_DOM_DRAGEND = 'onDomDragEnd'),
            (m.Event.ON_DOM_DRAGMOVE = 'onDomDragMove'),
            (m.Event.ON_DOM_DROP = 'onDomDrop'),
            (m.Event.ON_DOM_DRAGENTER = 'onDomDragEnter'),
            (m.Event.ON_DOM_DRAGLEAVE = 'onDomDragLeave'),
            (m.addListener = function (t, n, o) {
              if (t === r) throw new Error('Parameter cannot be undefined');
              if (d(t))
                return (
                  f(t, function (e, t) {
                    m.addListener(e, n, o);
                  }),
                  m
                );
              if (!m.isNode(t) && t !== e) throw new Error(t + ' is not a DOMNode object');
              if (
                ((t._event = t._event || {}),
                (t._event[n] = t._event[n] || { keys: [], values: [] }),
                -1 != i(t._event[n].keys, o))
              )
                return m;
              t._event[n].keys.push(o);
              var a = function (e) {
                var n = new m.Event(e);
                !1 === o.call(t, n) && 'function' == typeof e.stop && e.stop();
              };
              return t._event[n].values.push(a), t[w](E + n, a), m;
            }),
            (m.dispatch = function (e, n, i) {
              if (e === r) throw new Error('Parameter cannot be undefined');
              if (d(e))
                return (
                  f(e, function (e, t) {
                    m.dispatch(e, n, i);
                  }),
                  m
                );
              if (!m.isNode(e)) throw new Error(e + ' is not a DOMNode object');
              i || (i = {});
              var o,
                a = {
                  type: n,
                  view: i.view || e.ownerDocument.defaultView,
                  detail: i.detail || 1,
                  screenX: i.screenX || 0,
                  screenY: i.screenY || 0,
                  clientX: i.clientX || 0,
                  clientY: i.clientY || 0,
                  button: i.button || 0,
                  ctrlKey: i.ctrlKey || !1,
                  altKey: i.altKey || !1,
                  shiftKey: i.shiftKey || !1,
                  metaKey: i.metaKey || !1,
                  bubbles: i.bubbles || !0,
                  cancelable: i.cancelable || !0,
                },
                u = {
                  HTMLEvents: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
                  MouseEvents: /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/,
                },
                s = 'Event';
              for (var l in u)
                if (u[l].test(n)) {
                  s = l;
                  break;
                }
              if (t.createEvent)
                return (
                  (o = e.ownerDocument.createEvent(s)),
                  'MouseEvents' == s
                    ? o.initMouseEvent(
                        a.type,
                        a.bubbles,
                        a.cancelable,
                        a.view,
                        a.detail,
                        a.screenX,
                        a.screenY,
                        a.clientX,
                        a.clientY,
                        a.ctrlKey,
                        a.altKey,
                        a.shiftKey,
                        a.metaKey,
                        0,
                        null
                      )
                    : o.initEvent(n, a.bubbles, a.cancelable),
                  e.dispatchEvent(o),
                  m
                );
              if (t.createEventObject) {
                (a.clientX = a.pointerX), (a.clientY = a.pointerY), (o = t.createEventObject());
                for (var c in a) o[c] = a[c];
                return e.fireEvent(E + n, o), m;
              }
            }),
            (m.removeListener = function (t, n, o) {
              if (t === r) throw new Error('Parameter cannot be undefined');
              if (d(t))
                return (
                  f(t, function (e, t) {
                    m.removeListener(e, n, o);
                  }),
                  m
                );
              if (!m.isNode(t) && t !== e) throw new Error(t + ' is not a DOMNode object');
              if (!t._event || !t._event[n]) return !1;
              var a = i(t._event[n].keys, o);
              if (-1 === a) return !1;
              var u = t._event[n].values[a];
              return t[_](E + n, u), delete t._event[n].values[a], delete t._event[n].keys[a], m;
            }),
            (m.hasListener = function (t, n, r) {
              if (!m.isNode(t) && t !== e) throw new Error(t + ' is not a DOMNode object');
              return !(!t._event || !t._event[n]) && -1 !== i(t._event[n].keys, r);
            }),
            (m.onClick = function (e, t) {
              return m.addListener(e, m.Event.ON_CLICK, t);
            }),
            (m.onDblClick = function (e, t) {
              return m.addListener(e, m.Event.ON_DBLCLICK, t);
            }),
            (m.onMouseOver = function (e, t) {
              return m.addListener(e, m.Event.ON_MOUSEOVER, t);
            }),
            (m.onMouseOut = function (e, t) {
              return m.addListener(e, m.Event.ON_MOUSEOUT, t);
            }),
            (m.onMouseDown = function (e, t) {
              return m.addListener(e, m.Event.ON_MOUSEDOWN, t);
            }),
            (m.onMouseUp = function (e, t) {
              return m.addListener(e, m.Event.ON_MOUSEUP, t);
            }),
            (m.onMouseEnter = function (e, t) {
              return m.addListener(e, m.Event.ON_MOUSEENTER, t);
            }),
            (m.onMouseLeave = function (e, t) {
              return m.addListener(e, m.Event.ON_MOUSELEAVE, t);
            }),
            (m.onMouseMove = function (e, t) {
              return m.addListener(e, m.Event.ON_MOUSEMOVE, t);
            }),
            (m.onTouchStart = function (e, t) {
              return m.addListener(e, m.Event.ON_TOUCHSTART, t);
            }),
            (m.onTouchEnd = function (e, t) {
              return m.addListener(e, m.Event.ON_TOUCHEND, t);
            }),
            (m.onTouchMove = function (e, t) {
              return m.addListener(e, m.Event.ON_TOUCHMOVE, t);
            }),
            (m.onTouchCancel = function (e, t) {
              return m.addListener(e, m.Event.ON_TOUCHCANCEL, t);
            }),
            (m.onDrag = function (e, t) {
              return m.addListener(e, m.Event.ON_DRAG, t);
            }),
            (m.onDragStart = function (e, t) {
              return m.addListener(e, m.Event.ON_DRAGSTART, t);
            }),
            (m.onDragEnd = function (e, t) {
              return m.addListener(e, m.Event.ON_DRAGEND, t);
            }),
            (m.onFocus = function (e, t) {
              return m.addListener(e, m.Event.ON_FOCUS, t);
            }),
            (m.onBlur = function (e, t) {
              return m.addListener(e, m.Event.ON_BLUR, t);
            }),
            (m.onSelect = function (e, t) {
              return m.addListener(e, m.Event.ON_SELECT, t);
            }),
            (m.onChange = function (e, t) {
              return m.addListener(e, m.Event.ON_CHANGE, t);
            }),
            (m.onSubmit = function (e, t) {
              return m.addListener(e, m.Event.ON_SUBMIT, t);
            }),
            (m.onReset = function (e, t) {
              return m.addListener(e, m.Event.ON_RESET, t);
            }),
            (m.onLoad = function (e, t) {
              return m.addListener(e, m.Event.ON_LOAD, t);
            }),
            (m.onScroll = function (e, t) {
              return m.addListener(e, m.Event.ON_SCROLL, t);
            }),
            (m.onUnload = function (e, t) {
              return m.addListener(e, m.Event.ON_UNLOAD, t);
            }),
            (m.onResize = function (e, t) {
              return m.addListener(e, m.Event.ON_RESIZE, t);
            }),
            (m.onKeyDown = function (e, t) {
              return m.addListener(e, m.Event.ON_KEYDOWN, t);
            }),
            (m.onKeyUp = function (e, t) {
              return m.addListener(e, m.Event.ON_KEYUP, t);
            }),
            (m.onKeyPress = function (e, t) {
              return m.addListener(e, m.Event.ON_KEYPRESS, t);
            }),
            (m.find = function (e, n) {
              return m.isNode(n) ? n.querySelectorAll(e) : t.querySelectorAll(e);
            }),
            (m.id = function (e) {
              return t.getElementById(e);
            }),
            (m.findByTagName = function (e) {
              return t.getElementsByTagName(e);
            }),
            (m.findByClass = function (e) {
              return (
                '.' == e.substring(0, 1) && (e = e.substring(1)),
                t.getElementsByClassName
                  ? t.getElementsByClassName(e)
                  : t.querySelector && t.querySelectorAll
                  ? t.querySelectorAll('.' + e)
                  : void 0
              );
            }),
            (m.offset = function (e) {
              if (!m.isElement(e)) return !1;
              var t = e.getBoundingClientRect(),
                n = {
                  top: Math.round(t.top),
                  right: Math.round(t.right),
                  bottom: Math.round(t.bottom),
                  left: Math.round(t.left),
                  width: t.width ? Math.round(t.width) : Math.round(e.offsetWidth),
                  height: t.height ? Math.round(t.height) : Math.round(e.offsetHeight),
                };
              return (
                n.width <= 0 && (n.width = parseFloat(c(e, 'width'))),
                n.height <= 0 && (n.height = parseFloat(c(e, 'height'))),
                n
              );
            }),
            (m.width = function (e) {
              return m.offset(e).width;
            }),
            (m.height = function (e) {
              return m.offset(e).height;
            }),
            (m.parent = function (e) {
              if (!m.isNode(e)) throw new Error(e + ' is not a DOMNode object');
              return e.parentNode;
            }),
            (m.children = function (e, t) {
              if ('boolean' == typeof t && t) return e.childNodes;
              var n = [];
              if (a(t)) {
                for (var r = 0, i = e.childNodes.length; r < i; r++)
                  e.childNodes[r].nodeName.toLowerCase() === t.toLowerCase() &&
                    n.push(e.childNodes[r]);
                return n;
              }
              for (var r in e.childNodes)
                1 === e.childNodes[r].nodeType && n.push(e.childNodes[r]);
              return n;
            }),
            (m.next = function (e) {
              if (!m.isNode(e)) throw new Error(e + ' is not a DOMNode object');
              var t = e.nextSibling;
              return 1 != t.nodeType ? m.next(t) : t;
            }),
            (m.previous = function (e) {
              if (!m.isNode(e)) throw new Error(e + ' is not a DOMNode object');
              var t = e.previousSibling;
              return 1 != t.nodeType ? m.previous(t) : t;
            }),
            (m.attribute = function (e, t) {
              if (!m.isNode(e)) throw new Error(e + ' is not a DOMNode object');
              if ('string' == typeof t) {
                var n;
                return (
                  (n =
                    'class' === t && e.className !== r
                      ? e.className
                      : 'for' === t && e.htmlFor !== r
                      ? e.htmlFor
                      : 'value' === t && e.value !== r
                      ? e.value
                      : e.getAttribute(t)),
                  '' === n && (n = null),
                  n
                );
              }
              if (o(t)) {
                var n = {};
                for (var i in t) n[t[i]] = m.attribute(e, t[i]);
                return n;
              }
              if (l(t)) {
                for (var i in t) null === t[i] ? e.removeAttribute(i) : e.setAttribute(i, t[i]);
                return t;
              }
              return !1;
            }),
            (m.css = function (e, t) {
              if (d(e) && l(t))
                return (
                  f(e, function (e) {
                    m.css(e, t);
                  }),
                  m
                );
              if (!m.isNode(e)) throw new Error(e + ' is not a DOMNode object');
              if ('string' == typeof t) return c(e, x(t));
              if (o(t)) {
                var n = {};
                for (var r in t) n[t[r]] = c(e, x(t[r]));
                return n;
              }
              if (l(t)) {
                for (var r in t) e.style[x(r)] = t[r];
                return t;
              }
              return !1;
            }),
            (m.getClass = function (e) {
              if (!m.isNode(e)) throw new Error(e + ' is not a DOMNode object');
              var t = m.attribute(e, 'class');
              if (!t) return [];
              t = t.split(' ');
              var n = [];
              for (var r in t) '' !== t[r] && 'string' == typeof t[r] && n.push(t[r]);
              return n;
            }),
            (m.hasClass = function (e, t) {
              if (!m.isNode(e)) throw new Error(e + ' is not a DOMNode object');
              if (a(t)) return i(m.getClass(e), t) > -1;
              if (o(t)) {
                var n = m.getClass(e);
                for (var r in t) if (-1 === i(t[r], n)) return !1;
                return !0;
              }
              return !1;
            }),
            (m.addClass = function (e, t) {
              if (e === r) throw new Error('Dom.addClass first parameter cannot be undefined');
              if (d(e))
                return (
                  f(e, function (e) {
                    m.addClass(e, t);
                  }),
                  m
                );
              if (!m.isNode(e)) throw new Error(e + ' is not a DOMNode object');
              if (o(t)) {
                for (var n in t) m.addClass(e, t[n]);
                return m;
              }
              var a = m.getClass(e);
              return -1 === i(a, t) && a.push(t), (a = a.join(' ')), m.attribute(e, { class: a });
            }),
            (m.removeClass = function (e, t) {
              if (e === r) throw new Error('Dom.removeClass first parameter cannot be undefined');
              if (d(e))
                return (
                  f(e, function (e) {
                    m.removeClass(e, t);
                  }),
                  m
                );
              if (!m.isNode(e))
                throw new Error('Dom.removeClass' + e + ' is not a DOMNode object');
              if (!t) return m.attribute(e, { class: null });
              var n = m.getClass(e),
                o = i(n, t);
              return -1 !== o ? (n.splice(o, 1), m.attribute(e, { class: n.join(' ') })) : void 0;
            }),
            (m.create = function (e) {
              var n = t.createElement('tbody'),
                r = t.createDocumentFragment();
              m.html(n, e);
              for (var i = m.children(n), o = 0, a = i.length; o < a; o++) m.append(r, i[o]);
              return r;
            }),
            (m.copy = function (e) {
              if (!m.isNode(e)) throw new Error('Dom.copy' + e + ' is not a DOMNode object');
              return e.cloneNode(!0);
            }),
            (m.html = function (e, t) {
              if (!m.isNode(e)) throw new Error('Dom.html' + e + ' is not a DOMNode object');
              return a(t) ? ((e.innerHTML = t), t) : e.innerHTML;
            }),
            (m.text = function (e, t) {
              if (!m.isNode(e)) throw new Error('Dom.text ' + e + ' is not a DOMNode object');
              return a(t)
                ? (e.innerText ? (e.innerText = t) : (e.textContent = t), t)
                : e.innerText
                ? e.innerText
                : e.textContent;
            }),
            (m.template = function (e, t) {
              var n = /\{\{.*?\}\}/gi;
              return e.replace(n, function (e, n, r) {
                var i = e.replace('{{', '').replace('}}', '').trim().split(' '),
                  o = i[0];
                return o && t.hasOwnProperty(o)
                  ? s(t[o])
                    ? t[o].apply(r, i)
                    : a(t[o]) || u(t[o])
                    ? t[o]
                    : ''
                  : '';
              });
            }),
            (m.append = function (e, t) {
              if (!m.isNode(e)) throw new Error('Dom.append ' + e + ' is not a DOMNode object');
              return a(t) && (t = m.create(t)), e.appendChild(t), t;
            }),
            (m.prepend = function (e, t) {
              if (!m.isNode(e)) throw new Error('Dom.prepend ' + e + ' is not a DOMNode object');
              return a(t) && (t = m.create(t)), e.insertBefore(t, e.firstChild), t;
            }),
            (m.after = function (e, t) {
              if (!m.isNode(e)) throw new Error('Dom.after ' + e + ' is not a DOMNode object');
              return a(t) && (t = m.create(t)), e.parentNode.insertBefore(t, e.nextSibling), t;
            }),
            (m.before = function (e, t) {
              if (!m.isNode(e)) throw new Error('Dom.before ' + e + ' is not a DOMNode object');
              return a(t) && (t = m.create(t)), e.insertBefore(t, e), t;
            }),
            (m.replace = function (e, t) {
              if (!m.isNode(e)) throw new Error('Dom.replace ' + e + ' is not a DOMNode object');
              return a(t) && (t = m.create(t)), e.parentNode.replaceChild(t, e), t;
            }),
            (m.remove = function (e) {
              if (!m.isNode(e)) throw new Error('Dom.remove ' + e + ' is not a DOMNode object');
              return e.parentNode.removeChild(e);
            }),
            (m.data = function (e, t) {
              if (!m.isNode(e)) throw new Error('Dom.data ' + e + ' is not a DOMNode object');
              if (t === r) {
                if (e.hasOwnProperty('dataset')) {
                  var n = {};
                  for (var i in e.dataset) n[i] = e.dataset[i];
                  return n;
                }
                for (var n = {}, i = 0, u = e.attributes, s = u.length; i < s; i++) {
                  var d = u.item(i);
                  'data-' === d.nodeName.substr(0, 5) && (n[d.nodeName.substr(5)] = d.nodeValue);
                }
                return n;
              }
              if (a(t)) return m.attribute(e, 'data-' + t);
              if (o(t)) {
                for (var n = {}, i = 0, s = t.length; i < s; i++) {
                  var c = t[i];
                  n[c] = m.attribute(e, 'data-' + c);
                }
                return n;
              }
              if (l(t)) {
                var f = {};
                for (var i in t) {
                  var p = t[i];
                  f['data-' + i] = p;
                }
                m.attribute(e, f);
              }
            }),
            (m.loaded = function (e) {
              return !1 !== b ? (e.call(null, b), m) : (g.push(e), m);
            }),
            (m.ready = function (e) {
              return !1 !== y ? (e.call(null, y), m) : (v.push(e), m);
            }),
            null !== e.onload && g.push(e.onload),
            (e.onload = p),
            (e.Dom = m);
        })(t, document);
      },
      function (e, t) {
        'use strict';
        function n () {
          return (arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '')
            .replace(/\W+/g, '-')
            .replace(/([a-z\d])([A-Z])/g, '$1-$2')
            .toLowerCase();
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          return function (t) {
            var n =
              arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
            return (0, s['default'])(
              function (t) {
                n(e + ': filtering beacon from Events'), n(e + ': getting urls from them');
                var r = t.url.getOrElse();
                n(e + ': sending beacon to ' + r),
                  (0, f['default'])(r)
                    .then(function (t) {
                      return n(e + ': beacon ' + t.src + ' is just sent');
                    })
                    ['catch'](d['default']);
              },
              (0, a['default'])(function (t) {
                return t.type.getOrElse() === e;
              }, t.getOrElse([]))
            );
          };
        }
        (t.__esModule = !0), (t['default'] = i);
        var o = n(20),
          a = r(o),
          u = n(24),
          s = r(u),
          l = n(64),
          d = r(l),
          c = n(66),
          f = r(c);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return d['default'].isBot
            ? (p('detect bot'), a['default'].resolve(!1))
            : ((t = (0, f['default'])(t, {})),
              e.detail && (t = (0, f['default'])(t, e.detail)),
              h && h.captureException && h.captureException(e, { extra: t }),
              a['default'].resolve(!0));
        }
        (t.__esModule = !0), (t['default'] = i);
        var o = n(60),
          a = r(o),
          u = n(15),
          s = r(u),
          l = n(65),
          d = r(l),
          c = n(41),
          f = r(c),
          p = (0, s['default'])('notifyError'),
          h =
            window.Jackdaw &&
            window.Jackdaw(
              'https://e94899cfb0554ee5ba092b35c146e7e5@aem-collector.daumkakao.io/429',
              { release: 'v0.15.1-native', environment: 'release' }
            );
      },
      function (e, t) {
        const $___old_5777d984f5192d5a = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_5777d984f5192d5a)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_9d7b4eb662ee43f5.userAgent
            ));
          return function () {
            'use strict';
            function n (e) {
              const $___old_3cc2f11bedd7790b = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              );
              try {
                if ($___old_3cc2f11bedd7790b)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_9d7b4eb662ee43f5.userAgent
                  ));
                return function () {
                  return (
                    '' +
                    (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(
                      navigator.userAgent
                    ) || [0, ''])[1]
                  )
                    .replace('undefined', '3_2')
                    .replace('_', '.')
                    .replace('_', '');
                }.apply(this, arguments);
              } finally {
                if ($___old_3cc2f11bedd7790b)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_3cc2f11bedd7790b
                  ));
              }
            }
            function r (e) {
              const $___old_5ae94a154c057422 = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              );
              try {
                if ($___old_5ae94a154c057422)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_9d7b4eb662ee43f5.userAgent
                  ));
                return function () {
                  e = (e || navigator.userAgent).toLowerCase();
                  var t = e.match(/android\s([0-9.]*)/);
                  return !!t && t[1];
                }.apply(this, arguments);
              } finally {
                if ($___old_5ae94a154c057422)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_5ae94a154c057422
                  ));
              }
            }
            t.__esModule = !0;
            var i = window.navigator.userAgent.toLowerCase(),
              o = /daumapps/.test(i),
              a = /kakaotalk/.test(i),
              u = -1 !== i.indexOf('iphone') || -1 !== i.indexOf('ipad'),
              s = n(),
              l = -1 !== i.indexOf('android'),
              d = r(),
              c = l && -1 !== i.indexOf('samsungbrowser'),
              f = -1 !== i.indexOf('edge'),
              p = -1 !== i.indexOf('chrome'),
              h = i.indexOf('crios'),
              m = (function () {
                var e = /chrome\/([0-9.]+)/.exec(i);
                return !(!e || !e.length) && e[1];
              })(),
              v = (function () {
                const $___old_a09831efe682fb4e = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'userAgent'
                );
                try {
                  if ($___old_a09831efe682fb4e)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___stub_9d7b4eb662ee43f5.userAgent
                    ));
                  return function () {
                    var e = window.navigator.userAgent,
                      t = e.indexOf('MSIE ');
                    if (t > -1) return parseInt(e.substring(t + 5, e.indexOf('.', t)), 10);
                    if (e.indexOf('Trident/') > 0) {
                      var n = e.indexOf('rv:');
                      return parseInt(e.substring(n + 3, e.indexOf('.', n)), 10);
                    }
                    var r = e.indexOf('Edge/');
                    return r > 0 && parseInt(e.substring(r + 5, e.indexOf('.', r)), 10);
                  }.apply(this, arguments);
                } finally {
                  if ($___old_a09831efe682fb4e)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'userAgent',
                      $___old_a09831efe682fb4e
                    ));
                }
              })(),
              g = /bot|googlebot|crawler|spider|robot|crawling/i.test(i),
              y = -1 !== i.indexOf('firefox'),
              b = (function () {
                return l ? r() < '4.3' && !p && !y : u ? n() < '10.3' : void 0;
              })();
            t['default'] = {
              isDaumApp: o,
              isKakaoTalkApp: a,
              isIOS: u,
              iosVersion: s,
              isAndroid: l,
              androidVersion: d,
              isSamsungBrowser: c,
              isChrome: p,
              isChromeMobile: h,
              chromeVersion: m,
              isFirefox: y,
              isLowVersion: b,
              isEdge: f,
              isIE: v,
              isBot: g,
            };
          }.apply(this, arguments);
        } finally {
          if ($___old_5777d984f5192d5a)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_5777d984f5192d5a
            ));
        }
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          if (!s['default'].isWebUri(e))
            return a['default'].reject(new TypeError('`url` is required'));
          var t = new Image();
          return (
            (t.onerror = function (e) {}),
            (t.onload = function (e) {}),
            (t.src = e),
            a['default'].resolve(t)
          );
        }
        (t.__esModule = !0), (t['default'] = i);
        var o = n(60),
          a = r(o),
          u = n(34),
          s = r(u);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.videoElement,
            n = e.landingUrl,
            r = e.title,
            i = e.actionLabel,
            s = e.videoSrc,
            d = e.vastXml,
            c = e.posterSrc,
            f = e.width,
            p = e.maxWidth,
            h = p === undefined ? 568 : p,
            m = e.height,
            v = e.maxHeight,
            g = v === undefined ? 319.5 : v,
            y = e.vimpUrl,
            b = e.log,
            w = b === undefined ? function () {} : b;
          if (((Z = w), !/video/.test(t.tagName.toLowerCase())))
            throw new Error('`videoElement` should be `video` element!');
          if (!1 === /probably|maybe/.test((0, R['default'])(t)))
            throw new Error('This machine cannot be play a video content');
          if (T.Dom.hasClass(t.parentNode, 'kakao-video-ad'))
            throw new Error('`videoElement` is already initialized!');
          (0, E['default'])(
            function (e) {
              return l({
                videoElement: e,
                width: f,
                maxWidth: h,
                height: m,
                maxHeight: g,
                vimpUrl: y,
              });
            },
            function (e) {
              return (
                x['default'].isUri(s) && (e.src = s),
                d && (0, U['default'])({ videoElement: e, vastXml: d }),
                e
              );
            },
            u,
            a,
            function (e) {
              return { videoElement: e };
            },
            o
          )({
            videoElement: t,
            landingUrl: n,
            title: r,
            actionLabel: i,
            posterSrc: c,
            maxWidth: h,
            maxHeight: g,
            videoSrc: s,
            vastXml: d,
          }),
            X['default'].isDaumApp
              ? (Z('다음 앱 환경에서의 재생 모드 기본 값은 "터치 재생"'),
                W['default'].set('isNotAdVideoAutoplay', 'Y', 120),
                window.addEventListener('daumapps:update_browser_info', function (e) {
                  try {
                    (t.isWifi = e.onWifi),
                      W['default'].set(
                        'isNotAdVideoAutoplay',
                        e.mediaAutoPlayEnabled ? 'N' : 'Y',
                        120
                      ),
                      (t.preload = e.mediaAutoPlayEnabled ? 'metadata' : 'none');
                  } catch (n) {
                    W['default'].set('isNotAdVideoAutoplay', 'Y', 120), (t.preload = 'metadata');
                  }
                }))
              : X['default'].isIOS
              ? (W['default'].set('isNotAdVideoAutoplay', 'Y', 120), (t.preload = 'none'))
              : (t.isWifi = !1),
            (0, A['default'])().then(function (e) {
              e ||
                (Z('자동 재생 모드 적용'),
                (0, F['default'])(t, 'metadata'),
                x['default'].isUri(s) &&
                  ((t.src = s),
                  setTimeout(function () {
                    return t.load();
                  }, 10)),
                d && (0, U['default'])({ videoElement: t, vastXml: d }));
            });
        }
        function o (e) {
          function t () {
            f.reflowElement(),
              p && p.reflowElement(),
              h && h.reflowElement(),
              m && m.reflowElement(),
              v && 'reflowElement' in v && v.reflowElement();
          }
          var n = e.videoElement,
            r = e.landingUrl,
            i = e.title,
            o = e.actionLabel,
            a = e.posterSrc,
            u = e.maxWidth,
            s = e.maxHeight,
            l = e.videoSrc,
            d = e.vastXml;
          Z('renderLayout');
          var c = T.Dom.parent(n),
            f = T.Dom.create('<div class="kakao-video-ad"></div>').firstChild;
          T.Dom.addListener(f, 'click', function (e) {
            'preventDefault' in e && e.preventDefault(),
              'stopImmediatePropagation' in e && e.stopImmediatePropagation(),
              'stopPropagation' in e && e.stopPropagation();
          }),
            (f.reflowElement = function () {
              var e = n.parentNode;
              parseInt(window.getComputedStyle(e).width, 10) > u
                ? ((e.style.height = s + 'px'), (e.style.paddingTop = 0))
                : ((e.style.height = 'auto'), (e.style.paddingTop = '56.25%'));
            }),
            c.insertBefore(f, n),
            f.appendChild(n.parentNode.removeChild(n));
          var p =
            r &&
            i &&
            o &&
            f.insertBefore(
              (0, Q.renderHeader)({
                landingUrl: r,
                title: i,
                actionLabel: o,
                videoElement: n,
                maxWidth: u,
              }),
              n
            );
          T.Dom.append(f, (0, Q.renderPoster)({ posterSrc: a, videoElement: n })),
            T.Dom.append(f, '<div class="loading-spinner"></div>'),
            T.Dom.append(
              f,
              (0, Q.renderPlayPauseRewindButton)({ videoElement: n, videoSrc: l, vastXml: d })
            );
          var h = T.Dom.append(f, (0, Q.renderSoundButton)({ videoElement: n, maxWidth: u })),
            m = T.Dom.append(f, (0, Q.renderControlBar)({ videoElement: n, maxWidth: u })),
            v = T.Dom.append(m, (0, Q.renderOptionLayer)({ videoElement: n, maxWidth: u }));
          return (
            f.reflowElement(),
            h.hide(),
            setTimeout(function () {
              t();
            }, 100),
            (0, J['default'])(
              function (e) {
                window.addEventListener(
                  e,
                  function () {
                    return t();
                  },
                  !1
                );
              },
              ['resize', 'orientationchange']
            ),
            n
          );
        }
        function a (e) {
          function t (e) {
            try {
              e.pause(), (e.src = ''), e.load();
            } catch (t) {}
          }
          function n () {
            T.Dom.hasClass(i, 'show-buttons') ||
              (T.Dom.addClass(i, 'show-buttons'),
              setTimeout(function () {
                r.paused || r.ended || T.Dom.removeClass(i, 'show-buttons');
              }, 3000));
          }
          var r = e.videoElement;
          Z('initializeVideoElement'),
            (0, F['default'])(r, 'none'),
            (0, B['default'])(r),
            (0, H['default'])(r);
          var i = T.Dom.parent(r);
          return (
            (0, J['default'])(
              function (e) {
                window.addEventListener(
                  e,
                  function () {
                    return t(r);
                  },
                  !1
                );
              },
              ['beforeunload', 'unload']
            ),
            (0, J['default'])(
              function (e) {
                T.Dom.addListener(e, 'click', function (e) {
                  e.preventDefault(), n();
                });
              },
              [r, i]
            ),
            r
          );
        }
        function u (e) {
          return (
            T.Dom.addListener(e, 'error', function (e) {
              var t = T.Dom.parent(e.target);
              T.Dom.addClass(t, 'error');
            }),
            T.Dom.addListener(e, 'loadstart', function (e) {
              var t = T.Dom.parent(e.target);
              T.Dom.addClass(t, 'loadstart');
            }),
            T.Dom.addListener(e, 'loadedmetadata', function (e) {
              var t = e.target,
                n = t.parentNode;
              parseInt(t.width, 10) > 0 &&
                parseInt(t.height, 10) > 0 &&
                (n.style.paddingTop = (t.height / t.width) * 100 + '%');
            }),
            T.Dom.addListener(e, 'loadeddata', function (e) {
              var t = T.Dom.parent(e.target);
              T.Dom.removeClass(t, 'loadstart'), T.Dom.addClass(t, 'loaded-data');
            }),
            T.Dom.addListener(e, 'playing', function (e) {
              var t = T.Dom.parent(e.target);
              T.Dom.removeClass(t, 'show-poster'),
                setTimeout(function () {
                  t.querySelector('.poster').style.display = 'none';
                }, 1000),
                0 === parseInt(e.target.currentTime, 10) && T.Dom.addClass(t, 'has-started'),
                T.Dom.removeClass(t, 'paused'),
                T.Dom.removeClass(t, 'ended'),
                T.Dom.addClass(t, 'playing');
            }),
            T.Dom.addListener(e, 'play', function (e) {
              var t = T.Dom.parent(e.target);
              T.Dom.removeClass(t, 'show-buttons');
            }),
            T.Dom.addListener(e, 'pause', function (e) {
              var t = T.Dom.parent(e.target);
              T.Dom.addClass(t, 'show-buttons'), T.Dom.addClass(t, 'paused');
            }),
            T.Dom.addListener(e, 'ended', function (e) {
              var t = T.Dom.parent(e.target);
              T.Dom.addClass(t, 'show-buttons'), T.Dom.addClass(t, 'ended');
            }),
            e
          );
        }
        function s () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.target,
            n = t === undefined ? (0, G['default'])('target') : t,
            r = n;
          if (
            !(function (e) {
              return 'object' === ('undefined' == typeof Element ? 'undefined' : d(Element))
                ? e instanceof Element
                : e &&
                    'object' === (void 0 === e ? 'undefined' : d(e)) &&
                    null !== e &&
                    1 === e.nodeType &&
                    'string' == typeof e.nodeName;
            })(n)
          )
            throw new Error('target must be instance of `Element`');
          var i = n.ownerDocument;
          do {
            if (
              '0' === (0, w['default'])(r, 'opacity') ||
              'none' === (0, w['default'])(r, 'display') ||
              'hidden' === (0, w['default'])(r, 'visibility')
            )
              return 0;
          } while ((r = r.parentNode) !== document && r);
          if ((0, y['default'])(n, 0.1)) {
            var o = void 0,
              a = void 0,
              u = void 0,
              s = void 0,
              l = void 0;
            return (
              (a = (0, h['default'])(n)),
              (o = (0, v['default'])(i.defaultView || i.parentWindow)),
              (s = (0, f['default'])(a, o)),
              (u = a.width * a.height),
              (l = s.width * s.height),
              100 * (+u ? l / u : 0)
            );
          }
          return 0;
        }
        function l () {
          function e () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.initialValue,
              n = t === undefined ? 'N' : t;
            return new N['default'](function (e, t) {
              W['default'].get('isNotAdVideoAutoplay') ||
                W['default'].set('isNotAdVideoAutoplay', n, 120),
                e(W['default'].get('isNotAdVideoAutoplay'));
            });
          }
          function t () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              n = e.videoElement,
              r = e.isTouchPlayPolicy;
            if (
              ((t._firstIn = t._firstIn === undefined || t._firstIn),
              (t._firstOut = t._firstOut === undefined || t._firstOut),
              !r &&
                t._firstIn &&
                s({ target: n.parentNode }) >= 50 &&
                'portrait' === (0, M['default'])() &&
                null !== n.src)
            ) {
              Z('최초 뷰어블 진입시 재생'), (window.firstViewableAutoPlay = !0);
              try {
                (0, Y['default'])(n.play());
              } catch (i) {}
              t._firstIn = !1;
            }
            if (s({ target: n }) < 50 && !1 === n.paused && null !== n.src) {
              try {
                n.pause();
              } catch (i) {}
              t._firstOut = !1;
            }
          }
          var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            r = n.videoElement,
            i = (n.width, n.height, n.vimpUrl),
            o = n.inViewPercentage,
            a = o === undefined ? 50 : o,
            u = n.duration,
            l = u === undefined ? 1000 : u,
            d = (function () {
              function e (e, t) {
                var n = new Image();
                (n.onerror = function () {}), (n.onload = t), (n.src = e);
              }
              function t (e) {
                var t = !1;
                try {
                  t = s({ target: l }) >= e;
                } catch (n) {
                  Z('Error occured: ' + n.toString());
                }
                return t;
              }
              function n () {
                return (m = 0), (v = !0);
              }
              function r () {
                return !v;
              }
              function i (e, t) {
                return 0 === m && (m = setTimeout(e, t));
              }
              function o () {
                return 0 !== m && clearTimeout(m);
              }
              function a (a, u, s) {
                return (
                  (r() &&
                    t(u) &&
                    i(function () {
                      r() && t(u) && e(a, n);
                    }, s)) ||
                  o()
                );
              }
              var u = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                l = u.videoElement,
                d = u.vimpUrl,
                c = u.inViewPercentage,
                f = c === undefined ? 50 : c,
                p = u.duration,
                h = p === undefined ? 1000 : p,
                m = 0,
                v = !1;
              return {
                measure: function () {
                  a(d, f, h);
                },
              };
            })({ videoElement: r, vimpUrl: i, inViewPercentage: a, duration: l }),
            c = function (n, i) {
              if (n) return n;
              e()
                .then(function (e) {
                  return (0, A['default'])({ isNotAdVideoAutoplay: e });
                })
                .then(function (e) {
                  try {
                    t({ videoElement: r, isTouchPlayPolicy: e });
                  } catch (n) {}
                }),
                d.measure();
            };
          return (
            T.Dom.addListener(r, 'loadeddata', function f () {
              T.Dom.removeListener(r, 'loadeddata', f),
                window.addEventListener('scroll', function () {
                  return c();
                }),
                c();
            }),
            r
          );
        }
        t.__esModule = !0;
        var d =
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
                },
          c = n(50),
          f = r(c),
          p = n(51),
          h = r(p),
          m = n(55),
          v = r(m),
          g = n(56),
          y = r(g),
          b = n(57),
          w = r(b),
          _ = n(11),
          E = r(_),
          k = n(34),
          x = r(k),
          T = n(61),
          C = n(60),
          N = r(C),
          L = n(68),
          R = r(L),
          O = n(69),
          A = r(O),
          D = n(72),
          M = r(D),
          S = n(73),
          U = r(S),
          I = n(94),
          F = r(I),
          P = n(95),
          B = r(P),
          j = n(96),
          H = r(j),
          q = n(71),
          W = r(q),
          V = n(70),
          X = r(V),
          z = n(97),
          Y = r(z),
          K = n(31),
          G = r(K),
          $ = n(24),
          J = r($),
          Q = n(98),
          Z = void 0;
        (i._storage = W['default']), (t['default'] = i);
      },
      function (e, t) {
        'use strict';
        function n (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'video/mp4';
          return e && 'canPlayType' in e && e.canPlayType(t).replace(/no/, '');
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.isNotAdVideoAutoplay;
          return new d['default'](function (e, n) {
            e(
              t
                ? p || 'Y' === (t || c)
                : f
                ? p
                : s['default'].get('isNotAdVideoAutoplay') || 'Y' === c
            );
          });
        }
        t.__esModule = !0;
        var o = n(70),
          a = r(o),
          u = n(71),
          s = r(u),
          l = n(60),
          d = r(l),
          c = a['default'].isDaumApp ? 'Y' : 'N',
          f = a['default'].isIOS && !a['default'].isDaumApp,
          p = f || a['default'].isLowVersion || a['default'].isSamsungBrowser;
        t['default'] = i;
      },
      function (e, t) {
        const $___old_024172a8586361c9 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_024172a8586361c9)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_9d7b4eb662ee43f5.userAgent
            ));
          return function () {
            'use strict';
            function n (e) {
              e = (e || navigator.userAgent).toLowerCase();
              var t = e.match(/android\s([0-9.]*)/);
              return !!t && t[1];
            }
            t.__esModule = !0;
            var r = window.navigator.userAgent.toLowerCase(),
              i = /daumapps/.test(r.toLowerCase()),
              o = -1 !== r.indexOf('iphone') || -1 !== r.indexOf('ipad'),
              a = -1 !== r.indexOf('android'),
              u = a && -1 !== r.indexOf('samsung'),
              s = -1 !== r.indexOf('chrome'),
              l = -1 !== r.indexOf('firefox'),
              d = (function () {
                return a
                  ? parseFloat(n(), 10) < 4.3 && !s && !l
                  : o
                  ? parseFloat(
                      (
                        '' +
                        (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(
                          navigator.userAgent
                        ) || [0, ''])[1]
                      )
                        .replace('undefined', '3_2')
                        .replace('_', '.')
                        .replace('_', '')
                    ) < 10.3
                  : void 0;
              })();
            t['default'] = {
              isDaumApp: i,
              isIOS: o,
              isAndroid: a,
              isSamsungBrowser: u,
              isChrome: s,
              isFirefox: l,
              isLowVersion: d,
            };
          }.apply(this, arguments);
        } finally {
          if ($___old_024172a8586361c9)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_024172a8586361c9
            ));
        }
      },
      function (e, t) {
        'use strict';
        t.__esModule = !0;
        var n = {
            set: function (e, t, n) {
              if (window.top === window.self) {
                var r = new Date();
                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1000);
                var i = 'expires=' + r.toUTCString();
                document.cookie = e + '=' + t + ';' + i + 'path=/';
              } else 'localStorage' in window && window.localStorage.setItem(e, t);
            },
            get: function (e) {
              if (window.top === window.self) {
                for (var t = e + '=', n = document.cookie.split(';'), r = 0; r < n.length; r++) {
                  for (var i = n[r]; ' ' === i.charAt(0); ) i = i.substring(1);
                  if (0 === i.indexOf(t)) return i.substring(t.length, i.length);
                }
                return '';
              }
              return 'localStorage' in window && window.localStorage.getItem(e);
            },
            remove: function (e) {
              window.top === window.self
                ? (document.cookie = e + '=')
                : 'localStorage' in window && window.localStorage.removeItem(e);
            },
          },
          r = {
            set: function (e, t, r) {
              try {
                n.set(e, t);
              } catch (i) {}
            },
            get: function (e, t) {
              try {
                return n.get(e);
              } catch (r) {}
            },
            remove: function (e) {
              try {
                n.remove(e);
              } catch (t) {}
            },
          };
        t['default'] = r;
      },
      function (e, t) {
        'use strict';
        function n () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
          try {
            var t = !1;
            return (
              (t =
                e.self === e.top
                  ? e.matchMedia('(orientation: portrait)').matches
                  : 0 === e.orientation || 180 === e.orientation || e.innerWidth < e.innerHeight),
              t ? 'portrait' : 'landscape'
            );
          } catch (n) {
            return 'any';
          }
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          function t (e) {
            s.load();
          }
          function n (e) {
            s.setProgress(e.target.currentTime, !1);
          }
          function r (e) {
            s.setPaused(!1);
          }
          function i (e) {
            s.setPaused(!0);
          }
          function o (e) {
            s.setMuted(!!e.target.muted);
          }
          function a (e) {
            if ((s.complete(), s.rewindEvents(), l)) {
              s.close(),
                _.Dom.removeListener(e.target, 'canplay', t),
                _.Dom.removeListener(e.target, 'volumechange', o),
                _.Dom.removeListener(e.target, 'timeupdate', n),
                _.Dom.removeListener(e.target, 'play', r),
                _.Dom.removeListener(e.target, 'pause', i),
                _.Dom.removeListener(e.target, 'ended', a),
                (e.target.src = l),
                e.target.load(),
                (e.target.currentTime = d);
              try {
                e.target.play();
              } catch (e) {}
            }
          }
          var u = e.videoElement,
            s = e.tracker,
            l = u.src,
            d = u.currentTime;
          _.Dom.addListener(u, 'canplay', t),
            _.Dom.addListener(u, 'volumechange', o),
            _.Dom.addListener(u, 'timeupdate', n),
            _.Dom.addListener(u, 'play', r),
            _.Dom.addListener(u, 'pause', i),
            _.Dom.addListener(u, 'ended', a);
        }
        function o (e) {
          var t = e.ads,
            n = e.videoElement,
            r = e.isWifi,
            i = r !== undefined && r;
          return {
            ad: t[0],
            creative: t[0].creatives[0],
            mediaFile: H({ mediaFiles: t[0].creatives[0].mediaFiles, videoElement: n, isWifi: i }),
          };
        }
        function a (e) {
          var t = e.videoElement,
            n = e.vastXml,
            r = e.skippable,
            a = r !== undefined && r,
            u = e.isWifi,
            s = u !== undefined && u;
          return new w['default'](function (e, r) {
            try {
              d['default'].client.get(null, { response: (0, y['default'])(n) }, function (n, u) {
                if (u) return r(u);
                if (I(n) || I(n.ads)) return r(new Error('empty response'));
                var l = o({ ads: n.ads, videoElement: t, isWifi: s }),
                  c = l.ad,
                  f = l.creative,
                  p = l.mediaFile,
                  h = new d['default'].tracker(c, f);
                p && p.fileURL
                  ? (i({ videoElement: t, tracker: h, skippable: a }),
                    (t.src = p.fileURL),
                    setTimeout(function () {
                      try {
                        t.load();
                      } catch (e) {}
                    }, 10),
                    e())
                  : (d['default'].util.track(c.errorURLTemplates, { ERRORCODE: 403 }),
                    r(new Error('Invalid Media URL')));
              });
            } catch (u) {
              r(u);
            }
          });
        }
        (t.__esModule = !0), (t['default'] = a);
        var u = n(34),
          s = r(u),
          l = n(74),
          d = r(l),
          c = n(11),
          f = r(c),
          p = n(20),
          h = r(p),
          m = n(13),
          v = r(m),
          g = n(92),
          y = r(g),
          b = n(60),
          w = r(b),
          _ = n(61),
          E = n(70),
          k = r(E),
          x = n(93),
          T = r(x),
          C = n(14),
          N = r(C),
          L = function (e) {
            return '[object String]' === Object.prototype.toString.call(e);
          },
          R = function (e, t) {
            var n = e < 0 ? t.length + e : e;
            return L(t) ? t.charAt(n) : t[n];
          },
          O = function (e) {
            return R(0, e);
          },
          A = (0, N['default'])(function (e, t, n) {
            var r = e(t),
              i = e(n);
            return r < i ? -1 : r > i ? 1 : 0;
          }),
          D = (0, N['default'])(function (e, t, n) {
            var r = e(t),
              i = e(n);
            return r > i ? -1 : r < i ? 1 : 0;
          }),
          M = (0, N['default'])(function (e, t) {
            return Array.prototype.slice.call(t, 0).sort(function (t, n) {
              for (var r = 0, i = 0; 0 === r && i < e.length; ) (r = e[i](t, n)), (i += 1);
              return r;
            });
          }),
          S = (0, N['default'])(function (e, t) {
            for (var n = t, r = 0; r < e.length; ) {
              if (null == n) return;
              (n = n[e[r]]), (r += 1);
            }
            return n;
          }),
          U = (0, N['default'])(function (e, t) {
            return S([e], t);
          }),
          I = (0, N['default'])(function (e) {
            return null === e || ('length' in e && 0 === e.length);
          }),
          F = (0, T['default'])(),
          P =
            (k['default'].isDaumApp && k['default'].isAndroid) ||
            (k['default'].isIOS && k['default'].isLowVersion)
              ? (0, h['default'])(function (e) {
                  return 'video/x-mp4-muted' === e.mimeType;
                })
              : (0, h['default'])(function (e) {
                  return 'video/mp4' === e.mimeType;
                }),
          B = function (e) {
            var t = O(e);
            return (0, f['default'])(
              (0, v['default'])(function (e, t) {
                return Math.abs(F.width - t.width) <= Math.abs(F.width - e.width) ? e : t;
              }, t),
              M([
                function (e, t) {
                  return Math.abs(F.width - e.width) <= Math.abs(F.width - t.width);
                },
                D(U('bitrate')),
              ])
            )(e);
          },
          j = function (e) {
            var t = O(e);
            return (0, f['default'])(
              (0, v['default'])(function (e, t) {
                return t.width * t.height <= e.width * e.height ? t : e;
              }, t),
              M([
                function (e, t) {
                  return t.width * t.height <= e.width * e.height;
                },
                A(U('bitrate')),
              ])
            )(e);
          },
          H = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.mediaFiles,
              n = (e.videoElement, e.isWifi),
              r = n !== undefined && n,
              i = (0, f['default'])(
                P,
                (0, h['default'])(function (e) {
                  return s['default'].isWebUri(e.fileURL);
                })
              )(t);
            return (r ? B : j)(i);
          };
        (d['default'].tracker.prototype.rewindEvents = function () {
          delete window.firstViewableAutoPlay;
          var e,
            t,
            n = this.creative.trackingEvents;
          this.emitAlwaysEvents = [
            'creativeView',
            'start',
            'firstQuartile',
            'midpoint',
            'thirdQuartile',
            'complete',
            'resume',
            'pause',
            'rewind',
            'skip',
            'closeLinear',
            'close',
          ];
          for (e in n) (t = n[e]), (this.trackingEvents[e] = t.slice(0));
        }),
          (d['default'].tracker.prototype.trackURLs = function (e, t) {
            var n;
            return (
              null == t && (t = {}),
              this.linear &&
                (null != (null != (n = this.creative.mediaFiles[0]) ? n.fileURL : void 0) &&
                  (t.ASSETURI = this.creative.mediaFiles[0].fileURL),
                (t.CONTENTPLAYHEAD = this.progressFormated()),
                /VX_START_TYPE/.test(e[0]) &&
                  (t.VX_START_TYPE =
                    !0 == !!window.firstViewableAutoPlay
                      ? 'VIDEO_AUTO_START'
                      : 'VIDEO_MANUAL_START')),
              d['default'].util.track(e, t)
            );
          });
      },
      function (e, t, n) {
        'use strict';
        (function () {
          e.exports = { client: n(75), tracker: n(91), parser: n(76), util: n(84) };
        }.call(undefined));
      },
      function (e, t, n) {
        'use strict';
        (function () {
          function r (e, t, n) {
            if (Object.defineProperty)
              try {
                return Object.defineProperty(e, t, n);
              } catch (r) {}
            if (e !== Object(e)) throw TypeError('Object.defineProperty called on non-object');
            return (
              Object.prototype.__defineGetter__ &&
                'get' in n &&
                Object.prototype.__defineGetter__.call(e, t, n.get),
              Object.prototype.__defineSetter__ &&
                'set' in n &&
                Object.prototype.__defineSetter__.call(e, t, n.set),
              'value' in n && (e[t] = n.value),
              e
            );
          }
          function i (e, t) {
            (t = t || []), (e = e || function () {});
            var n = t.length,
              r = 0;
            for (r = 0; r !== n; r++) 'function' == typeof e && e(t[r], r, t);
          }
          var o, a, u;
          (a = n(76)),
            (u = n(84)),
            (o = (function () {
              function e () {}
              return (
                (e.cappingFreeLunch = 0),
                (e.cappingMinimumTimeInterval = 0),
                (e.options = { withCredentials: !1, timeout: 0 }),
                (e.get = function (e, n, r) {
                  var i, o, u, s;
                  if (
                    ((o = +new Date()),
                    (i = t.extend = function (e, t) {
                      var n, r;
                      for (n in t) (r = t[n]), (e[n] = r);
                      return e;
                    }),
                    r || ('function' == typeof n && (r = n), (u = {})),
                    (u = i(this.options, n)),
                    this.totalCallsTimeout < o
                      ? ((this.totalCalls = 1), (this.totalCallsTimeout = o + 3600000))
                      : this.totalCalls++,
                    this.cappingFreeLunch >= this.totalCalls)
                  )
                    return void r(
                      null,
                      new Error(
                        'VAST call canceled \u2013 FreeLunch capping not reached yet ' +
                          this.totalCalls +
                          '/' +
                          this.cappingFreeLunch
                      )
                    );
                  if ((s = o - this.lastSuccessfullAd) < 0) this.lastSuccessfullAd = 0;
                  else if (s < this.cappingMinimumTimeInterval)
                    return void r(
                      null,
                      new Error(
                        'VAST call canceled \u2013 (' +
                          this.cappingMinimumTimeInterval +
                          ')ms minimum interval reached'
                      )
                    );
                  return a.parse(
                    e,
                    u,
                    (function (e) {
                      return function (e, t) {
                        return r(e, t);
                      };
                    })()
                  );
                }),
                (function () {
                  var t, n;
                  (n = u.storage),
                    (t = r),
                    i(
                      function (r) {
                        t(e, r, {
                          get: function () {
                            return n.getItem(r);
                          },
                          set: function (e) {
                            return n.setItem(r, e);
                          },
                          configurable: !1,
                          enumerable: !0,
                        });
                      },
                      ['lastSuccessfullAd', 'totalCalls', 'totalCallsTimeout']
                    ),
                    null == e.lastSuccessfullAd && (e.lastSuccessfullAd = 0),
                    null == e.totalCalls && (e.totalCalls = 0),
                    null == e.totalCallsTimeout && (e.totalCallsTimeout = 0);
                })(),
                e
              );
            })()),
            (e.exports = o);
        }.call(undefined));
      },
      function (e, t, n) {
        'use strict';
        (function () {
          var t,
            r,
            i,
            o,
            a,
            u,
            s,
            l,
            d,
            c,
            f,
            p,
            h,
            m,
            v,
            g =
              [].indexOf ||
              function (e) {
                for (var t = 0, n = this.length; t < n; t++)
                  if (t in this && this[t] === e) return t;
                return -1;
              };
          (r = n(77)),
            (m = n(80)),
            (i = n(81)),
            (o = n(82)),
            (a = n(83)),
            (v = n(84)),
            (l = n(85).VASTCreativeLinear),
            (s = n(85).VASTCreativeCompanion),
            (d = n(85).VASTCreativeNonLinear),
            (f = n(86)),
            (c = n(87)),
            (u = n(88)),
            (p = n(89)),
            (t = n(90).EventEmitter),
            (h = (function () {
              function e () {}
              var n;
              return (
                (n = []),
                (e.addURLTemplateFilter = function (e) {
                  'function' == typeof e && n.push(e);
                }),
                (e.removeURLTemplateFilter = function () {
                  return n.pop();
                }),
                (e.countURLTemplateFilters = function () {
                  return n.length;
                }),
                (e.clearUrlTemplateFilters = function () {
                  return (n = []);
                }),
                (e.parse = function (e, t, n) {
                  return (
                    n || ('function' == typeof t && (n = t), (t = {})),
                    this._parse(e, null, t, function (e, t) {
                      return n(t, e);
                    })
                  );
                }),
                (e.load = function (e, t, n) {
                  return (
                    n || ('function' == typeof t && (n = t), (t = {})),
                    this.parseXmlDocument(null, [], t, e, n)
                  );
                }),
                (e.vent = new t()),
                (e.track = function (e, t) {
                  return this.vent.emit('VAST-error', t), v.track(e, t);
                }),
                (e.on = function (e, t) {
                  return this.vent.on(e, t);
                }),
                (e.once = function (e, t) {
                  return this.vent.once(e, t);
                }),
                (e.off = function (e, t) {
                  return this.vent.removeListener(e, t);
                }),
                (e._parse = function (e, t, i, o) {
                  var a, u, s;
                  for (
                    o || ('function' == typeof i && (o = i), (i = {})), u = 0, s = n.length;
                    u < s;
                    u++
                  )
                    (a = n[u]), (e = a(e));
                  return (
                    null == t && (t = []),
                    t.push(e),
                    r.get(
                      e,
                      i,
                      (function (n) {
                        return function (r, a) {
                          return null != r ? o(r) : n.parseXmlDocument(e, t, i, a, o);
                        };
                      })(this)
                    )
                  );
                }),
                (e.parseXmlDocument = function (t, n, r, i, o) {
                  var a, u, s, l, d, c, f, p, h, v, y, b, w, _, E;
                  if (
                    ((E = new m()),
                    null == (null != i ? i.documentElement : void 0) ||
                      'VAST' !== i.documentElement.nodeName)
                  )
                    return o(new Error('Invalid VAST XMLDocument'));
                  for (w = i.documentElement.childNodes, d = 0, p = w.length; d < p; d++)
                    (b = w[d]),
                      'Error' === b.nodeName && E.errorURLTemplates.push(e.parseNodeText(b));
                  for (s = [], _ = i.documentElement.childNodes, c = 0, h = _.length; c < h; c++)
                    (b = _[c]), 'Ad' === b.nodeName && s.push(b);
                  for (f = 0, v = s.length; f < v; f++)
                    (u = s[f]),
                      (a = e.parseAdElement(u)),
                      null != a
                        ? (null != r.wrapperSequence &&
                            null == a.sequence &&
                            1 === s.length &&
                            ((a.sequence = r.wrapperSequence), (r.wrapperSequence = null)),
                          E.ads.push(a))
                        : e.track(E.errorURLTemplates, { ERRORCODE: 101 });
                  for (
                    l = function (t, n) {
                      var r, i, u, s;
                      if ((null == t && (t = null), null == n && (n = !1), E)) {
                        for (u = !0, s = E.ads, r = 0, i = s.length; r < i; r++) {
                          if (((a = s[r]), null != a.nextWrapperURL)) return;
                          a.creatives.length > 0 && (u = !1);
                        }
                        return (
                          u && (n || e.track(E.errorURLTemplates, { ERRORCODE: 303 })),
                          0 === E.ads.length &&
                            ((E = null),
                            (t = new Error('No ads: no valid <inline> has been found'))),
                          o(t, E)
                        );
                      }
                    },
                      y = E.ads.length;
                    y--;

                  )
                    (a = E.ads[y]),
                      null != a.nextWrapperURL &&
                        (function (i) {
                          var o;
                          n.length > (null !== r.wrapperLimit ? r.wrapperLimit : 9) ||
                          ((o = i.nextWrapperURL), g.call(n, o) >= 0)
                            ? (e.track(i.errorURLTemplates, { ERRORCODE: 302 }),
                              E.ads.splice(E.ads.indexOf(i), 1),
                              l(
                                new Error('Wrapper limit reached, as defined by the video player')
                              ))
                            : (null != t &&
                                (i.nextWrapperURL = e.resolveVastAdTagURI(i.nextWrapperURL, t)),
                              (r.wrapperSequence = i.sequence),
                              e._parse(i.nextWrapperURL, n, r, function (t, n) {
                                var r, o, a, u, s, d;
                                if (((r = !1), null != t))
                                  e.track(i.errorURLTemplates, { ERRORCODE: 301 }),
                                    E.ads.splice(E.ads.indexOf(i), 1),
                                    (r = !0);
                                else if (null == n)
                                  e.track(i.errorURLTemplates, { ERRORCODE: 303 }),
                                    E.ads.splice(E.ads.indexOf(i), 1),
                                    (r = !0);
                                else
                                  for (
                                    E.errorURLTemplates = E.errorURLTemplates.concat(
                                      n.errorURLTemplates
                                    ),
                                      o = E.ads.indexOf(i),
                                      E.ads.splice(o, 1),
                                      s = n.ads,
                                      a = 0,
                                      u = s.length;
                                    a < u;
                                    a++
                                  )
                                    (d = s[a]),
                                      e.mergeWrapperAdData(d, i),
                                      E.ads.splice(++o, 0, d);
                                return delete i.nextWrapperURL, l(t, r);
                              }));
                        })(a);
                  return l();
                }),
                (e.resolveVastAdTagURI = function (e, t) {
                  return 0 === e.indexOf('//')
                    ? '' + location.protocol + e
                    : -1 === e.indexOf('://')
                    ? t.slice(0, t.lastIndexOf('/')) + '/' + e
                    : e;
                }),
                (e.mergeWrapperAdData = function (e, t) {
                  var n, r, i, o, a, u, s, l, d, c, f, p, h, m, v, g, y, b, w, _, E;
                  for (
                    e.errorURLTemplates = t.errorURLTemplates.concat(e.errorURLTemplates),
                      e.impressionURLTemplates = t.impressionURLTemplates.concat(
                        e.impressionURLTemplates
                      ),
                      e.extensions = t.extensions.concat(e.extensions),
                      p = e.creatives,
                      o = 0,
                      l = p.length;
                    o < l;
                    o++
                  )
                    if (
                      ((r = p[o]), null != (null != (h = t.trackingEvents) ? h[r.type] : void 0))
                    ) {
                      m = t.trackingEvents[r.type];
                      for (i in m)
                        (E = m[i]),
                          (n = r.trackingEvents)[i] || (n[i] = []),
                          (r.trackingEvents[i] = r.trackingEvents[i].concat(E));
                    }
                  if (null != (v = t.videoClickTrackingURLTemplates) ? v.length : void 0)
                    for (g = e.creatives, a = 0, d = g.length; a < d; a++)
                      (r = g[a]),
                        'linear' === r.type &&
                          (r.videoClickTrackingURLTemplates = r.videoClickTrackingURLTemplates.concat(
                            t.videoClickTrackingURLTemplates
                          ));
                  if (null != (y = t.videoCustomClickURLTemplates) ? y.length : void 0)
                    for (b = e.creatives, u = 0, c = b.length; u < c; u++)
                      (r = b[u]),
                        'linear' === r.type &&
                          (r.videoCustomClickURLTemplates = r.videoCustomClickURLTemplates.concat(
                            t.videoCustomClickURLTemplates
                          ));
                  if (null != t.videoClickThroughURLTemplate) {
                    for (w = e.creatives, _ = [], s = 0, f = w.length; s < f; s++)
                      (r = w[s]),
                        'linear' === r.type && null == r.videoClickThroughURLTemplate
                          ? _.push(
                              (r.videoClickThroughURLTemplate = t.videoClickThroughURLTemplate)
                            )
                          : _.push(void 0);
                    return _;
                  }
                }),
                (e.childByName = function (e, t) {
                  var n, r, i, o;
                  for (o = e.childNodes, r = 0, i = o.length; r < i; r++)
                    if (((n = o[r]), n.nodeName === t)) return n;
                }),
                (e.childsByName = function (e, t) {
                  var n, r, i, o, a;
                  for (r = [], a = e.childNodes, i = 0, o = a.length; i < o; i++)
                    (n = a[i]), n.nodeName === t && r.push(n);
                  return r;
                }),
                (e.parseAdElement = function (e) {
                  var t, n, r, i, o;
                  for (i = e.childNodes, n = 0, r = i.length; n < r; n++)
                    if (((t = i[n]), 'Wrapper' === (o = t.nodeName) || 'InLine' === o)) {
                      if (
                        (this.copyNodeAttribute('id', e, t),
                        this.copyNodeAttribute('sequence', e, t),
                        'Wrapper' === t.nodeName)
                      )
                        return this.parseWrapperElement(t);
                      if ('InLine' === t.nodeName) return this.parseInLineElement(t);
                    }
                }),
                (e.parseWrapperElement = function (e) {
                  var t, n, r, i, o, a, u, s, l, d, c, f, p, h, m, v, g, y, b, w, _, E, k;
                  for (
                    t = this.parseInLineElement(e),
                      k = this.childByName(e, 'VASTAdTagURI'),
                      null != k
                        ? (t.nextWrapperURL = this.parseNodeText(k))
                        : null != (k = this.childByName(e, 'VASTAdTagURL')) &&
                          (t.nextWrapperURL = this.parseNodeText(this.childByName(k, 'URL'))),
                      m = t.creatives,
                      o = 0,
                      d = m.length;
                    o < d;
                    o++
                  )
                    if (((E = m[o]), 'linear' === (v = E.type) || 'nonlinear' === v)) {
                      if (null != E.trackingEvents) {
                        t.trackingEvents || (t.trackingEvents = {}),
                          (n = t.trackingEvents)[(h = E.type)] || (n[h] = {}),
                          (g = E.trackingEvents);
                        for (i in g)
                          for (
                            _ = g[i],
                              (r = t.trackingEvents[E.type])[i] || (r[i] = []),
                              u = 0,
                              c = _.length;
                            u < c;
                            u++
                          )
                            (w = _[u]), t.trackingEvents[E.type][i].push(w);
                      }
                      if (null != E.videoClickTrackingURLTemplates)
                        for (
                          t.videoClickTrackingURLTemplates ||
                            (t.videoClickTrackingURLTemplates = []),
                            y = E.videoClickTrackingURLTemplates,
                            s = 0,
                            f = y.length;
                          s < f;
                          s++
                        )
                          (a = y[s]), t.videoClickTrackingURLTemplates.push(a);
                      if (
                        (null != E.videoClickThroughURLTemplate &&
                          (t.videoClickThroughURLTemplate = E.videoClickThroughURLTemplate),
                        null != E.videoCustomClickURLTemplates)
                      )
                        for (
                          t.videoCustomClickURLTemplates || (t.videoCustomClickURLTemplates = []),
                            b = E.videoCustomClickURLTemplates,
                            l = 0,
                            p = b.length;
                          l < p;
                          l++
                        )
                          (a = b[l]), t.videoCustomClickURLTemplates.push(a);
                    }
                  if (null != t.nextWrapperURL) return t;
                }),
                (e.parseInLineElement = function (e) {
                  var t, n, r, o, a, u, s, l, d, c, f, p, h, m, v;
                  for (
                    t = new i(),
                      t.id = e.getAttribute('id') || null,
                      t.sequence = e.getAttribute('sequence') || null,
                      h = e.childNodes,
                      u = 0,
                      d = h.length;
                    u < d;
                    u++
                  )
                    switch (((p = h[u]), p.nodeName)) {
                      case 'Error':
                        t.errorURLTemplates.push(this.parseNodeText(p));
                        break;
                      case 'Impression':
                        t.impressionURLTemplates.push(this.parseNodeText(p));
                        break;
                      case 'Creatives':
                        for (m = this.childsByName(p, 'Creative'), s = 0, c = m.length; s < c; s++)
                          for (
                            o = m[s],
                              r = {
                                id: o.getAttribute('id') || null,
                                adId: this.parseCreativeAdIdAttribute(o),
                                sequence: o.getAttribute('sequence') || null,
                                apiFramework: o.getAttribute('apiFramework') || null,
                              },
                              v = o.childNodes,
                              l = 0,
                              f = v.length;
                            l < f;
                            l++
                          )
                            switch (((a = v[l]), a.nodeName)) {
                              case 'Linear':
                                (n = this.parseCreativeLinearElement(a, r)),
                                  n && t.creatives.push(n);
                                break;
                              case 'NonLinearAds':
                                (n = this.parseNonLinear(a, r)), n && t.creatives.push(n);
                                break;
                              case 'CompanionAds':
                                (n = this.parseCompanionAd(a, r)), n && t.creatives.push(n);
                            }
                        break;
                      case 'Extensions':
                        this.parseExtension(t.extensions, this.childsByName(p, 'Extension'));
                        break;
                      case 'AdSystem':
                        t.system = {
                          value: this.parseNodeText(p),
                          version: p.getAttribute('version') || null,
                        };
                        break;
                      case 'AdTitle':
                        t.title = this.parseNodeText(p);
                        break;
                      case 'Description':
                        t.description = this.parseNodeText(p);
                        break;
                      case 'Advertiser':
                        t.advertiser = this.parseNodeText(p);
                        break;
                      case 'Pricing':
                        t.pricing = {
                          value: this.parseNodeText(p),
                          model: p.getAttribute('model') || null,
                          currency: p.getAttribute('currency') || null,
                        };
                        break;
                      case 'Survey':
                        t.survey = this.parseNodeText(p);
                    }
                  return t;
                }),
                (e.parseExtension = function (e, t) {
                  var n, r, i, u, s, l, d, c, f, p, h, m, v, g, y, b, w, _, E;
                  for (_ = [], d = 0, h = t.length; d < h; d++) {
                    if (((s = t[d]), (r = new o()), s.attributes))
                      for (y = s.attributes, c = 0, m = y.length; c < m; c++)
                        (l = y[c]), (r.attributes[l.nodeName] = l.nodeValue);
                    for (b = s.childNodes, f = 0, v = b.length; f < v; f++)
                      if (
                        ((n = b[f]),
                        (E = this.parseNodeText(n)),
                        '#comment' !== n.nodeName && '' !== E)
                      ) {
                        if (((i = new a()), (i.name = n.nodeName), (i.value = E), n.attributes))
                          for (w = n.attributes, p = 0, g = w.length; p < g; p++)
                            (u = w[p]), (i.attributes[u.nodeName] = u.nodeValue);
                        r.children.push(i);
                      }
                    _.push(e.push(r));
                  }
                  return _;
                }),
                (e.parseCreativeLinearElement = function (e, t) {
                  var n,
                    r,
                    i,
                    o,
                    a,
                    u,
                    s,
                    d,
                    p,
                    h,
                    m,
                    v,
                    g,
                    y,
                    b,
                    w,
                    _,
                    E,
                    k,
                    x,
                    T,
                    C,
                    N,
                    L,
                    R,
                    O,
                    A,
                    D,
                    M,
                    S,
                    U,
                    I,
                    F,
                    P,
                    B,
                    j,
                    H,
                    q,
                    W,
                    V,
                    X,
                    z,
                    Y,
                    K,
                    G,
                    $,
                    J,
                    Q,
                    Z,
                    ee,
                    te,
                    ne,
                    re,
                    ie,
                    oe,
                    ae,
                    ue,
                    se,
                    le;
                  if (
                    ((o = new l(t)),
                    (o.duration = this.parseDuration(
                      this.parseNodeText(this.childByName(e, 'Duration'))
                    )),
                    -1 === o.duration && 'Wrapper' !== e.parentNode.parentNode.parentNode.nodeName)
                  )
                    return null;
                  if (
                    ((ie = e.getAttribute('skipoffset')),
                    null == ie
                      ? (o.skipDelay = null)
                      : '%' === ie.charAt(ie.length - 1)
                      ? ((q = parseInt(ie, 10)), (o.skipDelay = o.duration * (q / 100)))
                      : (o.skipDelay = this.parseDuration(ie)),
                    null != (le = this.childByName(e, 'VideoClicks')))
                  ) {
                    for (
                      o.videoClickThroughURLTemplate = this.parseNodeText(
                        this.childByName(le, 'ClickThrough')
                      ),
                        X = this.childsByName(le, 'ClickTracking'),
                        d = 0,
                        E = X.length;
                      d < E;
                      d++
                    )
                      (i = X[d]), o.videoClickTrackingURLTemplates.push(this.parseNodeText(i));
                    for (z = this.childsByName(le, 'CustomClick'), b = 0, k = z.length; b < k; b++)
                      (a = z[b]), o.videoCustomClickURLTemplates.push(this.parseNodeText(a));
                  }
                  for (
                    n = this.childByName(e, 'AdParameters'),
                      null != n && (o.adParameters = this.parseNodeText(n)),
                      K = this.childsByName(e, 'TrackingEvents'),
                      w = 0,
                      T = K.length;
                    w < T;
                    w++
                  )
                    for (
                      ue = K[w], G = this.childsByName(ue, 'Tracking'), _ = 0, C = G.length;
                      _ < C;
                      _++
                    )
                      if (
                        ((ae = G[_]),
                        (u = ae.getAttribute('event')),
                        (se = this.parseNodeText(ae)),
                        null != u && null != se)
                      ) {
                        if ('progress' === u) {
                          if (!(j = ae.getAttribute('offset'))) continue;
                          u =
                            '%' === j.charAt(j.length - 1)
                              ? 'progress-' + j
                              : 'progress-' + Math.round(this.parseDuration(j));
                        }
                        null == (r = o.trackingEvents)[u] && (r[u] = []),
                          o.trackingEvents[u].push(se);
                      }
                  for ($ = this.childsByName(e, 'MediaFiles'), M = 0, N = $.length; M < N; M++)
                    for (
                      F = $[M], J = this.childsByName(F, 'MediaFile'), P = 0, L = J.length;
                      P < L;
                      P++
                    )
                      (I = J[P]),
                        (U = new f()),
                        (U.id = I.getAttribute('id')),
                        (U.fileURL = this.parseNodeText(I)),
                        (U.deliveryType = I.getAttribute('delivery')),
                        (U.codec = I.getAttribute('codec')),
                        (U.mimeType = I.getAttribute('type')),
                        (U.apiFramework = I.getAttribute('apiFramework')),
                        (U.bitrate = parseInt(I.getAttribute('bitrate') || 0)),
                        (U.minBitrate = parseInt(I.getAttribute('minBitrate') || 0)),
                        (U.maxBitrate = parseInt(I.getAttribute('maxBitrate') || 0)),
                        (U.width = parseInt(I.getAttribute('width') || 0)),
                        (U.height = parseInt(I.getAttribute('height') || 0)),
                        (re = I.getAttribute('scalable')),
                        re &&
                          'string' == typeof re &&
                          ((re = re.toLowerCase()),
                          'true' === re ? (U.scalable = !0) : 'false' === re && (U.scalable = !1)),
                        (S = I.getAttribute('maintainAspectRatio')),
                        S &&
                          'string' == typeof S &&
                          ((S = S.toLowerCase()),
                          'true' === S
                            ? (U.maintainAspectRatio = !0)
                            : 'false' === S && (U.maintainAspectRatio = !1)),
                        o.mediaFiles.push(U);
                  if (null != (g = this.childByName(e, 'Icons')))
                    for (Q = this.childsByName(g, 'Icon'), B = 0, R = Q.length; B < R; B++) {
                      for (
                        v = Q[B],
                          p = new c(),
                          p.program = v.getAttribute('program'),
                          p.height = parseInt(v.getAttribute('height') || 0),
                          p.width = parseInt(v.getAttribute('width') || 0),
                          p.xPosition = this.parseXPosition(v.getAttribute('xPosition')),
                          p.yPosition = this.parseYPosition(v.getAttribute('yPosition')),
                          p.apiFramework = v.getAttribute('apiFramework'),
                          p.offset = this.parseDuration(v.getAttribute('offset')),
                          p.duration = this.parseDuration(v.getAttribute('duration')),
                          Z = this.childsByName(v, 'HTMLResource'),
                          H = 0,
                          O = Z.length;
                        H < O;
                        H++
                      )
                        (s = Z[H]),
                          (p.type = s.getAttribute('creativeType') || 'text/html'),
                          (p.htmlResource = this.parseNodeText(s));
                      for (
                        ee = this.childsByName(v, 'IFrameResource'), W = 0, A = ee.length;
                        W < A;
                        W++
                      )
                        (y = ee[W]),
                          (p.type = y.getAttribute('creativeType') || 0),
                          (p.iframeResource = this.parseNodeText(y));
                      for (
                        te = this.childsByName(v, 'StaticResource'), V = 0, D = te.length;
                        V < D;
                        V++
                      )
                        (oe = te[V]),
                          (p.type = oe.getAttribute('creativeType') || 0),
                          (p.staticResource = this.parseNodeText(oe));
                      if (null != (m = this.childByName(v, 'IconClicks')))
                        for (
                          p.iconClickThroughURLTemplate = this.parseNodeText(
                            this.childByName(m, 'IconClickThrough')
                          ),
                            Y = this.childsByName(m, 'IconClickTracking'),
                            ne = 0,
                            x = Y.length;
                          ne < x;
                          ne++
                        )
                          (h = Y[ne]), p.iconClickTrackingURLTemplates.push(this.parseNodeText(h));
                      (p.iconViewTrackingURLTemplate = this.parseNodeText(
                        this.childByName(v, 'IconViewTracking')
                      )),
                        o.icons.push(p);
                    }
                  return o;
                }),
                (e.parseNonLinear = function (e, t) {
                  var n,
                    r,
                    i,
                    o,
                    a,
                    u,
                    s,
                    l,
                    c,
                    f,
                    h,
                    m,
                    v,
                    g,
                    y,
                    b,
                    w,
                    _,
                    E,
                    k,
                    x,
                    T,
                    C,
                    N,
                    L,
                    R,
                    O,
                    A,
                    D,
                    M,
                    S,
                    U,
                    I,
                    F;
                  for (
                    o = new d(t), N = this.childsByName(e, 'TrackingEvents'), s = 0, m = N.length;
                    s < m;
                    s++
                  )
                    for (
                      I = N[s], L = this.childsByName(I, 'Tracking'), c = 0, v = L.length;
                      c < v;
                      c++
                    )
                      (U = L[c]),
                        (a = U.getAttribute('event')),
                        (F = this.parseNodeText(U)),
                        null != a &&
                          null != F &&
                          (null == (r = o.trackingEvents)[a] && (r[a] = []),
                          o.trackingEvents[a].push(F));
                  for (R = this.childsByName(e, 'NonLinear'), f = 0, g = R.length; f < g; f++) {
                    for (
                      T = R[f],
                        x = new p(),
                        x.id = T.getAttribute('id') || null,
                        x.width = T.getAttribute('width'),
                        x.height = T.getAttribute('height'),
                        x.expandedWidth = T.getAttribute('expandedWidth'),
                        x.expandedHeight = T.getAttribute('expandedHeight'),
                        x.scalable = this.parseBoolean(T.getAttribute('scalable')),
                        x.maintainAspectRatio = this.parseBoolean(
                          T.getAttribute('maintainAspectRatio')
                        ),
                        x.minSuggestedDuration = this.parseDuration(
                          T.getAttribute('minSuggestedDuration')
                        ),
                        x.apiFramework = T.getAttribute('apiFramework'),
                        O = this.childsByName(T, 'HTMLResource'),
                        h = 0,
                        y = O.length;
                      h < y;
                      h++
                    )
                      (u = O[h]),
                        (x.type = u.getAttribute('creativeType') || 'text/html'),
                        (x.htmlResource = this.parseNodeText(u));
                    for (
                      A = this.childsByName(T, 'IFrameResource'), E = 0, b = A.length;
                      E < b;
                      E++
                    )
                      (l = A[E]),
                        (x.type = l.getAttribute('creativeType') || 0),
                        (x.iframeResource = this.parseNodeText(l));
                    for (
                      D = this.childsByName(T, 'StaticResource'), k = 0, w = D.length;
                      k < w;
                      k++
                    )
                      (S = D[k]),
                        (x.type = S.getAttribute('creativeType') || 0),
                        (x.staticResource = this.parseNodeText(S));
                    for (
                      n = this.childByName(T, 'AdParameters'),
                        null != n && (x.adParameters = this.parseNodeText(n)),
                        x.nonlinearClickThroughURLTemplate = this.parseNodeText(
                          this.childByName(T, 'NonLinearClickThrough')
                        ),
                        M = this.childsByName(T, 'NonLinearClickTracking'),
                        C = 0,
                        _ = M.length;
                      C < _;
                      C++
                    )
                      (i = M[C]), x.nonlinearClickTrackingURLTemplates.push(this.parseNodeText(i));
                    o.variations.push(x);
                  }
                  return o;
                }),
                (e.parseCompanionAd = function (e, t) {
                  var n,
                    r,
                    i,
                    o,
                    a,
                    l,
                    d,
                    c,
                    f,
                    p,
                    h,
                    m,
                    v,
                    g,
                    y,
                    b,
                    w,
                    _,
                    E,
                    k,
                    x,
                    T,
                    C,
                    N,
                    L,
                    R,
                    O,
                    A,
                    D,
                    M,
                    S,
                    U,
                    I,
                    F,
                    P,
                    B,
                    j;
                  for (
                    l = new s(t), R = this.childsByName(e, 'Companion'), f = 0, g = R.length;
                    f < g;
                    f++
                  ) {
                    for (
                      a = R[f],
                        o = new u(),
                        o.id = a.getAttribute('id') || null,
                        o.width = a.getAttribute('width'),
                        o.height = a.getAttribute('height'),
                        o.companionClickTrackingURLTemplates = [],
                        O = this.childsByName(a, 'HTMLResource'),
                        h = 0,
                        y = O.length;
                      h < y;
                      h++
                    )
                      (c = O[h]),
                        (o.type = c.getAttribute('creativeType') || 'text/html'),
                        (o.htmlResource = this.parseNodeText(c));
                    for (
                      A = this.childsByName(a, 'IFrameResource'), m = 0, b = A.length;
                      m < b;
                      m++
                    )
                      (p = A[m]),
                        (o.type = p.getAttribute('creativeType') || 0),
                        (o.iframeResource = this.parseNodeText(p));
                    for (
                      D = this.childsByName(a, 'StaticResource'), v = 0, w = D.length;
                      v < w;
                      v++
                    ) {
                      for (
                        F = D[v],
                          o.type = F.getAttribute('creativeType') || 0,
                          M = this.childsByName(a, 'AltText'),
                          T = 0,
                          _ = M.length;
                        T < _;
                        T++
                      )
                        (r = M[T]), (o.altText = this.parseNodeText(r));
                      o.staticResource = this.parseNodeText(F);
                    }
                    for (
                      S = this.childsByName(a, 'TrackingEvents'), C = 0, E = S.length;
                      C < E;
                      C++
                    )
                      for (
                        B = S[C], U = this.childsByName(B, 'Tracking'), N = 0, k = U.length;
                        N < k;
                        N++
                      )
                        (P = U[N]),
                          (d = P.getAttribute('event')),
                          (j = this.parseNodeText(P)),
                          null != d &&
                            null != j &&
                            (null == (n = o.trackingEvents)[d] && (n[d] = []),
                            o.trackingEvents[d].push(j));
                    for (
                      I = this.childsByName(a, 'CompanionClickTracking'), L = 0, x = I.length;
                      L < x;
                      L++
                    )
                      (i = I[L]), o.companionClickTrackingURLTemplates.push(this.parseNodeText(i));
                    (o.companionClickThroughURLTemplate = this.parseNodeText(
                      this.childByName(a, 'CompanionClickThrough')
                    )),
                      (o.companionClickTrackingURLTemplate = this.parseNodeText(
                        this.childByName(a, 'CompanionClickTracking')
                      )),
                      l.variations.push(o);
                  }
                  return l;
                }),
                (e.parseDuration = function (e) {
                  var t, n, r, i, o;
                  return null == e
                    ? -1
                    : v.isNumeric(e)
                    ? parseInt(e)
                    : ((t = e.split(':')),
                      3 !== t.length
                        ? -1
                        : ((o = t[2].split('.')),
                          (i = parseInt(o[0])),
                          2 === o.length && (i += parseFloat('0.' + o[1])),
                          (r = parseInt(60 * t[1])),
                          (n = parseInt(60 * t[0] * 60)),
                          isNaN(n) || isNaN(r) || isNaN(i) || r > 3600 || i > 60
                            ? -1
                            : n + r + i));
                }),
                (e.parseXPosition = function (e) {
                  return 'left' === e || 'right' === e ? e : parseInt(e || 0);
                }),
                (e.parseYPosition = function (e) {
                  return 'top' === e || 'bottom' === e ? e : parseInt(e || 0);
                }),
                (e.parseBoolean = function (e) {
                  return 'true' === e || 'TRUE' === e || '1' === e;
                }),
                (e.parseNodeText = function (e) {
                  return e && (e.textContent || e.text || '').trim();
                }),
                (e.copyNodeAttribute = function (e, t, n) {
                  var r;
                  if ((r = t.getAttribute(e))) return n.setAttribute(e, r);
                }),
                (e.parseCreativeAdIdAttribute = function (e) {
                  return (
                    e.getAttribute('AdID') ||
                    e.getAttribute('adID') ||
                    e.getAttribute('adId') ||
                    null
                  );
                }),
                e
              );
            })()),
            (e.exports = h);
        }.call(undefined));
      },
      function (e, t, n) {
        'use strict';
        (function () {
          var t, r, i;
          (i = n(78)),
            (r = n(79)),
            (t = (function () {
              function e () {}
              return (
                (e.get = function (e, t, n) {
                  var o, a;
                  return (
                    n || ('function' == typeof t && (n = t), (t = {})),
                    null != t.response
                      ? ((a = t.response), delete t.response, n(null, a))
                      : (null != (o = t.urlhandler) ? o.supported() : void 0)
                      ? t.urlhandler.get(e, t, n)
                      : i.supported()
                      ? i.get(e, t, n)
                      : r.supported()
                      ? r.get(e, t, n)
                      : n(
                          new Error(
                            'Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler'
                          )
                        )
                  );
                }),
                e
              );
            })()),
            (e.exports = t);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          var t;
          (t = (function () {
            function e () {}
            return (
              (e.xhr = function () {
                var e;
                if ('withCredentials' in (e = new window.XMLHttpRequest())) return e;
              }),
              (e.supported = function () {
                return !!this.xhr();
              }),
              (e.get = function (e, t, n) {
                var r;
                if ('https:' === window.location.protocol && 0 === e.indexOf('http://'))
                  return n(new Error('XHRURLHandler: Cannot go from HTTPS to HTTP.'));
                try {
                  return (
                    (r = this.xhr()),
                    r.open('GET', e),
                    (r.timeout = t.timeout || 0),
                    (r.withCredentials = t.withCredentials || !1),
                    r.overrideMimeType && r.overrideMimeType('text/xml'),
                    (r.onreadystatechange = function () {
                      if (4 === r.readyState)
                        return 200 === r.status
                          ? n(null, r.responseXML)
                          : n(new Error('XHRURLHandler: ' + r.statusText));
                    }),
                    r.send()
                  );
                } catch (i) {
                  return n(new Error('XHRURLHandler: Unexpected error'));
                }
              }),
              e
            );
          })()),
            (e.exports = t);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          var t;
          (t = (function () {
            function e () {}
            return (
              (e.xdr = function () {
                var e;
                return window.XDomainRequest && (e = new XDomainRequest()), e;
              }),
              (e.supported = function () {
                return !!this.xdr();
              }),
              (e.get = function (e, t, n) {
                var r, i;
                return (i =
                  'function' == typeof window.ActiveXObject
                    ? new window.ActiveXObject('Microsoft.XMLDOM')
                    : void 0)
                  ? ((i.async = !1),
                    (r = this.xdr()),
                    r.open('GET', e),
                    (r.timeout = t.timeout || 0),
                    (r.withCredentials = t.withCredentials || !1),
                    r.send(),
                    (r.onprogress = function () {}),
                    (r.onload = function () {
                      return i.loadXML(r.responseText), n(null, i);
                    }))
                  : n(new Error('FlashURLHandler: Microsoft.XMLDOM format not supported'));
              }),
              e
            );
          })()),
            (e.exports = t);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          var t;
          (t = (function () {
            function e () {
              (this.ads = []), (this.errorURLTemplates = []);
            }
            return e;
          })()),
            (e.exports = t);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          var t;
          (t = (function () {
            function e () {
              (this.id = null),
                (this.sequence = null),
                (this.system = null),
                (this.title = null),
                (this.description = null),
                (this.advertiser = null),
                (this.pricing = null),
                (this.survey = null),
                (this.errorURLTemplates = []),
                (this.impressionURLTemplates = []),
                (this.creatives = []),
                (this.extensions = []);
            }
            return e;
          })()),
            (e.exports = t);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          var t;
          (t = (function () {
            function e () {
              (this.attributes = {}), (this.children = []);
            }
            return e;
          })()),
            (e.exports = t);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          var t;
          (t = (function () {
            function e () {
              (this.name = null), (this.value = null), (this.attributes = {});
            }
            return e;
          })()),
            (e.exports = t);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          function t (e) {
            if (e !== Object(e)) throw new TypeError('Object.keys called on a non-object');
            var t,
              n = [];
            for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
            return n;
          }
          var n;
          (n = (function () {
            function e () {}
            return (
              (e.track = function (e, t) {
                var n, r, i, o, a, u;
                for (r = this.resolveURLTemplates(e, t), u = [], o = 0, a = r.length; o < a; o++)
                  (n = r[o]),
                    'undefined' != typeof window &&
                      null !== window &&
                      ((i = new Image()), u.push((i.src = n)));
                return u;
              }),
              (e.resolveURLTemplates = function (e, t) {
                var n, r, i, o, a, u, s, l, d;
                for (
                  null == t && (t = {}),
                    r = [],
                    null != t.ASSETURI &&
                      (t.ASSETURI = this.encodeURIComponentRFC3986(t.ASSETURI)),
                    null != t.CONTENTPLAYHEAD &&
                      (t.CONTENTPLAYHEAD = this.encodeURIComponentRFC3986(t.CONTENTPLAYHEAD)),
                    null == t.ERRORCODE || /^[0-9]{3}$/.test(t.ERRORCODE) || (t.ERRORCODE = 900),
                    t.CACHEBUSTING = this.leftpad(
                      Math.round(100000000 * Math.random()).toString()
                    ),
                    t.TIMESTAMP = this.encodeURIComponentRFC3986(new Date().toISOString()),
                    t.RANDOM = t.random = t.CACHEBUSTING,
                    i = 0,
                    a = e.length;
                  i < a;
                  i++
                )
                  if (((n = e[i]), (l = n))) {
                    for (o in t)
                      (d = t[o]),
                        (u = '[' + o + ']'),
                        (s = '%%' + o + '%%'),
                        (l = l.replace(u, d)),
                        (l = l.replace(s, d));
                    r.push(l);
                  }
                return r;
              }),
              (e.encodeURIComponentRFC3986 = function (e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
                  return '%' + e.charCodeAt(0).toString(16);
                });
              }),
              (e.leftpad = function (e) {
                return e.length < 8
                  ? (function () {
                      var t, n, r;
                      for (
                        r = [], t = 0, n = 8 - e.length;
                        0 <= n ? t < n : t > n;
                        0 <= n ? t++ : t--
                      )
                        r.push('0');
                      return r;
                    })().join('') + e
                  : e;
              }),
              (e.storage = (function () {
                const $___old_a54ad915ed5b6b9a = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'localStorage'
                );
                try {
                  if ($___old_a54ad915ed5b6b9a)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___stub_a011c28886b08277.localStorage
                    ));
                  return function () {
                    var e, n, r;
                    try {
                      r =
                        'undefined' != typeof window && null !== window
                          ? window.localStorage || window.sessionStorage
                          : null;
                    } catch (i) {
                      i, (r = null);
                    }
                    return (
                      (n = function (e) {
                        var t;
                        try {
                          if (((t = '__VASTUtil__'), e.setItem(t, t), e.getItem(t) !== t))
                            return !0;
                        } catch (i) {
                          return i, !0;
                        }
                        return !1;
                      }),
                      (null == r || n(r)) &&
                        ((e = {}),
                        (r = {
                          length: 0,
                          getItem: function (t) {
                            return e[t];
                          },
                          setItem: function (n, r) {
                            (e[n] = r), (this.length = t(e).length);
                          },
                          removeItem: function (n) {
                            delete e[n], (this.length = t(e).length);
                          },
                          clear: function () {
                            (e = {}), (this.length = 0);
                          },
                        })),
                      r
                    );
                  }.apply(this, arguments);
                } finally {
                  if ($___old_a54ad915ed5b6b9a)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___old_a54ad915ed5b6b9a
                    ));
                }
              })()),
              (e.isNumeric = function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
              }),
              e
            );
          })()),
            (e.exports = n);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          var t,
            n,
            r,
            i,
            o = function (e, t) {
              function n () {
                this.constructor = e;
              }
              for (var r in t) a.call(t, r) && (e[r] = t[r]);
              return (
                (n.prototype = t.prototype),
                (e.prototype = new n()),
                (e.__super__ = t.prototype),
                e
              );
            },
            a = {}.hasOwnProperty;
          (t = (function () {
            function e (e) {
              null == e && (e = {}),
                (this.id = e.id || null),
                (this.adId = e.adId || null),
                (this.sequence = e.sequence || null),
                (this.apiFramework = e.apiFramework || null),
                (this.trackingEvents = {});
            }
            return e;
          })()),
            (r = (function (e) {
              function t () {
                t.__super__.constructor.apply(this, arguments),
                  (this.type = 'linear'),
                  (this.duration = 0),
                  (this.skipDelay = null),
                  (this.mediaFiles = []),
                  (this.videoClickThroughURLTemplate = null),
                  (this.videoClickTrackingURLTemplates = []),
                  (this.videoCustomClickURLTemplates = []),
                  (this.adParameters = null),
                  (this.icons = []);
              }
              return o(t, e), t;
            })(t)),
            (i = (function (e) {
              function t () {
                t.__super__.constructor.apply(this, arguments),
                  (this.type = 'nonlinear'),
                  (this.variations = []);
              }
              return o(t, e), t;
            })(t)),
            (n = (function (e) {
              function t () {
                t.__super__.constructor.apply(this, arguments),
                  (this.type = 'companion'),
                  (this.variations = []);
              }
              return o(t, e), t;
            })(t)),
            (e.exports = {
              VASTCreativeLinear: r,
              VASTCreativeNonLinear: i,
              VASTCreativeCompanion: n,
            });
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          var t;
          (t = (function () {
            function e () {
              (this.id = null),
                (this.fileURL = null),
                (this.deliveryType = 'progressive'),
                (this.mimeType = null),
                (this.codec = null),
                (this.bitrate = 0),
                (this.minBitrate = 0),
                (this.maxBitrate = 0),
                (this.width = 0),
                (this.height = 0),
                (this.apiFramework = null),
                (this.scalable = null),
                (this.maintainAspectRatio = null);
            }
            return e;
          })()),
            (e.exports = t);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          var t;
          (t = (function () {
            function e () {
              (this.program = null),
                (this.height = 0),
                (this.width = 0),
                (this.xPosition = 0),
                (this.yPosition = 0),
                (this.apiFramework = null),
                (this.offset = null),
                (this.duration = 0),
                (this.type = null),
                (this.staticResource = null),
                (this.htmlResource = null),
                (this.iframeResource = null),
                (this.iconClickThroughURLTemplate = null),
                (this.iconClickTrackingURLTemplates = []),
                (this.iconViewTrackingURLTemplate = null);
            }
            return e;
          })()),
            (e.exports = t);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          var t;
          (t = (function () {
            function e () {
              (this.id = null),
                (this.width = 0),
                (this.height = 0),
                (this.type = null),
                (this.staticResource = null),
                (this.htmlResource = null),
                (this.iframeResource = null),
                (this.altText = null),
                (this.companionClickThroughURLTemplate = null),
                (this.companionClickTrackingURLTemplates = []),
                (this.trackingEvents = {});
            }
            return e;
          })()),
            (e.exports = t);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (function () {
          var t;
          (t = (function () {
            function e () {
              (this.id = null),
                (this.width = 0),
                (this.height = 0),
                (this.expandedWidth = 0),
                (this.expandedHeight = 0),
                (this.scalable = !0),
                (this.maintainAspectRatio = !0),
                (this.minSuggestedDuration = 0),
                (this.apiFramework = 'static'),
                (this.type = null),
                (this.staticResource = null),
                (this.htmlResource = null),
                (this.iframeResource = null),
                (this.nonlinearClickThroughURLTemplate = null),
                (this.nonlinearClickTrackingURLTemplates = []),
                (this.adParameters = null);
            }
            return e;
          })()),
            (e.exports = t);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        function n () {
          (this._events = this._events || {}),
            (this._maxListeners = this._maxListeners || undefined);
        }
        function r (e) {
          return 'function' == typeof e;
        }
        function i (e) {
          return 'number' == typeof e;
        }
        function o (e) {
          return 'object' === (void 0 === e ? 'undefined' : u(e)) && null !== e;
        }
        function a (e) {
          return void 0 === e;
        }
        var u =
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
        (e.exports = n),
          (n.EventEmitter = n),
          (n.prototype._events = undefined),
          (n.prototype._maxListeners = undefined),
          (n.defaultMaxListeners = 10),
          (n.prototype.setMaxListeners = function (e) {
            if (!i(e) || e < 0 || isNaN(e)) throw TypeError('n must be a positive number');
            return (this._maxListeners = e), this;
          }),
          (n.prototype.emit = function (e) {
            var t, n, i, u, s, l;
            if (
              (this._events || (this._events = {}),
              'error' === e &&
                (!this._events.error || (o(this._events.error) && !this._events.error.length)))
            ) {
              if ((t = arguments[1]) instanceof Error) throw t;
              var d = new Error('Uncaught, unspecified "error" event. (' + t + ')');
              throw ((d.context = t), d);
            }
            if (((n = this._events[e]), a(n))) return !1;
            if (r(n))
              switch (arguments.length) {
                case 1:
                  n.call(this);
                  break;
                case 2:
                  n.call(this, arguments[1]);
                  break;
                case 3:
                  n.call(this, arguments[1], arguments[2]);
                  break;
                default:
                  (u = Array.prototype.slice.call(arguments, 1)), n.apply(this, u);
              }
            else if (o(n))
              for (
                u = Array.prototype.slice.call(arguments, 1), l = n.slice(), i = l.length, s = 0;
                s < i;
                s++
              )
                l[s].apply(this, u);
            return !0;
          }),
          (n.prototype.addListener = function (e, t) {
            var i;
            if (!r(t)) throw TypeError('listener must be a function');
            return (
              this._events || (this._events = {}),
              this._events.newListener &&
                this.emit('newListener', e, r(t.listener) ? t.listener : t),
              this._events[e]
                ? o(this._events[e])
                  ? this._events[e].push(t)
                  : (this._events[e] = [this._events[e], t])
                : (this._events[e] = t),
              o(this._events[e]) &&
                !this._events[e].warned &&
                (i = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) &&
                i > 0 &&
                this._events[e].length > i &&
                ((this._events[e].warned = !0),
                console.error(
                  '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                  this._events[e].length
                ),
                'function' == typeof console.trace && console.trace()),
              this
            );
          }),
          (n.prototype.on = n.prototype.addListener),
          (n.prototype.once = function (e, t) {
            function n () {
              this.removeListener(e, n), i || ((i = !0), t.apply(this, arguments));
            }
            if (!r(t)) throw TypeError('listener must be a function');
            var i = !1;
            return (n.listener = t), this.on(e, n), this;
          }),
          (n.prototype.removeListener = function (e, t) {
            var n, i, a, u;
            if (!r(t)) throw TypeError('listener must be a function');
            if (!this._events || !this._events[e]) return this;
            if (
              ((n = this._events[e]),
              (a = n.length),
              (i = -1),
              n === t || (r(n.listener) && n.listener === t))
            )
              delete this._events[e],
                this._events.removeListener && this.emit('removeListener', e, t);
            else if (o(n)) {
              for (u = a; u-- > 0; )
                if (n[u] === t || (n[u].listener && n[u].listener === t)) {
                  i = u;
                  break;
                }
              if (i < 0) return this;
              1 === n.length ? ((n.length = 0), delete this._events[e]) : n.splice(i, 1),
                this._events.removeListener && this.emit('removeListener', e, t);
            }
            return this;
          }),
          (n.prototype.removeAllListeners = function (e) {
            var t, n;
            if (!this._events) return this;
            if (!this._events.removeListener)
              return (
                0 === arguments.length
                  ? (this._events = {})
                  : this._events[e] && delete this._events[e],
                this
              );
            if (0 === arguments.length) {
              for (t in this._events) 'removeListener' !== t && this.removeAllListeners(t);
              return this.removeAllListeners('removeListener'), (this._events = {}), this;
            }
            if (((n = this._events[e]), r(n))) this.removeListener(e, n);
            else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1]);
            return delete this._events[e], this;
          }),
          (n.prototype.listeners = function (e) {
            return this._events && this._events[e]
              ? r(this._events[e])
                ? [this._events[e]]
                : this._events[e].slice()
              : [];
          }),
          (n.prototype.listenerCount = function (e) {
            if (this._events) {
              var t = this._events[e];
              if (r(t)) return 1;
              if (t) return t.length;
            }
            return 0;
          }),
          (n.listenerCount = function (e, t) {
            return e.listenerCount(t);
          });
      },
      function (e, t, n) {
        'use strict';
        (function () {
          var t,
            r,
            i,
            o,
            a,
            u,
            s,
            l = function (e, t) {
              function n () {
                this.constructor = e;
              }
              for (var r in t) d.call(t, r) && (e[r] = t[r]);
              return (
                (n.prototype = t.prototype),
                (e.prototype = new n()),
                (e.__super__ = t.prototype),
                e
              );
            },
            d = {}.hasOwnProperty;
          (r = n(75)),
            (s = n(84)),
            (o = n(85).VASTCreativeLinear),
            (a = n(89)),
            (i = n(88)),
            (t = n(90).EventEmitter),
            (u = (function (e) {
              function t (e, t, n) {
                var u, s, l;
                (this.ad = e),
                  (this.creative = t),
                  (this.variation = null != n ? n : null),
                  (this.muted = !1),
                  (this.impressed = !1),
                  (this.skipable = !1),
                  (this.skipDelayDefault = -1),
                  (this.trackingEvents = {}),
                  (this.emitAlwaysEvents = [
                    'creativeView',
                    'start',
                    'firstQuartile',
                    'midpoint',
                    'thirdQuartile',
                    'complete',
                    'resume',
                    'pause',
                    'rewind',
                    'skip',
                    'closeLinear',
                    'close',
                  ]),
                  (this._alreadyTriggeredQuartiles = {}),
                  (l = this.creative.trackingEvents);
                for (u in l) (s = l[u]), (this.trackingEvents[u] = s.slice(0));
                this.creative instanceof o
                  ? (this.setDuration(this.creative.duration),
                    (this.skipDelay = this.creative.skipDelay),
                    (this.linear = !0),
                    (this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate),
                    (this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates))
                  : ((this.skipDelay = -1),
                    (this.linear = !1),
                    this.variation &&
                      (this.variation instanceof a
                        ? ((this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate),
                          (this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates))
                        : this.variation instanceof i &&
                          ((this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate),
                          (this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates)))),
                  this.on('start', function () {
                    r.lastSuccessfullAd = +new Date();
                  });
              }
              return (
                l(t, e),
                (t.off = function (e, t) {
                  return this.removeListener(e, t);
                }),
                (t.prototype.setDuration = function (e) {
                  return (
                    (this.assetDuration = e),
                    (this.quartiles = {
                      firstQuartile: Math.round(25 * this.assetDuration) / 100,
                      midpoint: Math.round(50 * this.assetDuration) / 100,
                      thirdQuartile: Math.round(75 * this.assetDuration) / 100,
                    })
                  );
                }),
                (t.prototype.setProgress = function (e) {
                  var t, n, r, i, o, a, u, s, l;
                  if (
                    ((s = null === this.skipDelay ? this.skipDelayDefault : this.skipDelay),
                    -1 === s ||
                      this.skipable ||
                      (s > e
                        ? this.emit('skip-countdown', s - e)
                        : ((this.skipable = !0), this.emit('skip-countdown', 0))),
                    this.linear && this.assetDuration > 0)
                  ) {
                    if (((n = []), e > 0)) {
                      n.push('start'),
                        (o = Math.round((e / this.assetDuration) * 100)),
                        n.push('progress-' + o + '%'),
                        n.push('progress-' + Math.round(e)),
                        (u = this.quartiles);
                      for (a in u)
                        (l = u[a]),
                          this.isQuartileReached(a, l, e) &&
                            (n.push(a), (this._alreadyTriggeredQuartiles[a] = !0));
                    }
                    for (r = 0, i = n.length; r < i; r++) (t = n[r]), this.track(t, !0);
                    e < this.progress && this.track('rewind');
                  }
                  return (this.progress = e);
                }),
                (t.prototype.isQuartileReached = function (e, t, n) {
                  var r;
                  return (r = !1), t <= n && !this._alreadyTriggeredQuartiles[e] && (r = !0), r;
                }),
                (t.prototype.setMuted = function (e) {
                  return this.muted !== e && this.track(e ? 'mute' : 'unmute'), (this.muted = e);
                }),
                (t.prototype.setPaused = function (e) {
                  return (
                    this.paused !== e && this.track(e ? 'pause' : 'resume'), (this.paused = e)
                  );
                }),
                (t.prototype.setFullscreen = function (e) {
                  return (
                    this.fullscreen !== e && this.track(e ? 'fullscreen' : 'exitFullscreen'),
                    (this.fullscreen = e)
                  );
                }),
                (t.prototype.setExpand = function (e) {
                  return (
                    this.expanded !== e && this.track(e ? 'expand' : 'collapse'),
                    (this.expanded = e)
                  );
                }),
                (t.prototype.setSkipDelay = function (e) {
                  if ('number' == typeof e) return (this.skipDelay = e);
                }),
                (t.prototype.load = function () {
                  if (!this.impressed)
                    return (
                      (this.impressed = !0),
                      this.trackURLs(this.ad.impressionURLTemplates),
                      this.track('creativeView')
                    );
                }),
                (t.prototype.errorWithCode = function (e) {
                  return this.trackURLs(this.ad.errorURLTemplates, { ERRORCODE: e });
                }),
                (t.prototype.complete = function () {
                  return this.track('complete');
                }),
                (t.prototype.close = function () {
                  return this.track(this.linear ? 'closeLinear' : 'close');
                }),
                (t.prototype.stop = function () {}),
                (t.prototype.skip = function () {
                  return this.track('skip'), (this.trackingEvents = []);
                }),
                (t.prototype.click = function () {
                  var e, t, n;
                  if (
                    ((null != (t = this.clickTrackingURLTemplates) ? t.length : void 0) &&
                      this.trackURLs(this.clickTrackingURLTemplates),
                    null != this.clickThroughURLTemplate)
                  )
                    return (
                      this.linear && (n = { CONTENTPLAYHEAD: this.progressFormated() }),
                      (e = s.resolveURLTemplates([this.clickThroughURLTemplate], n)[0]),
                      this.emit('clickthrough', e)
                    );
                }),
                (t.prototype.track = function (e, t) {
                  var n, r;
                  null == t && (t = !1),
                    'closeLinear' === e &&
                      null == this.trackingEvents[e] &&
                      null != this.trackingEvents.close &&
                      (e = 'close'),
                    (r = this.trackingEvents[e]),
                    (n = this.emitAlwaysEvents.indexOf(e)),
                    null != r ? (this.emit(e), this.trackURLs(r)) : -1 !== n && this.emit(e),
                    !0 === t &&
                      (delete this.trackingEvents[e],
                      n > -1 && this.emitAlwaysEvents.splice(n, 1));
                }),
                (t.prototype.trackURLs = function (e, t) {
                  var n;
                  return (
                    null == t && (t = {}),
                    this.linear &&
                      (null != (null != (n = this.creative.mediaFiles[0]) ? n.fileURL : void 0) &&
                        (t.ASSETURI = this.creative.mediaFiles[0].fileURL),
                      (t.CONTENTPLAYHEAD = this.progressFormated())),
                    s.track(e, t)
                  );
                }),
                (t.prototype.progressFormated = function () {
                  var e, t, n, r, i;
                  return (
                    (i = parseInt(this.progress)),
                    (e = i / 3600),
                    e.length < 2 && (e = '0' + e),
                    (t = (i / 60) % 60),
                    t.length < 2 && (t = '0' + t),
                    (r = i % 60),
                    r.length < 2 && (r = '0' + t),
                    (n = parseInt(100 * (this.progress - i))),
                    e + ':' + t + ':' + r + '.' + n
                  );
                }),
                t
              );
            })(t)),
            (e.exports = u);
        }.call(undefined));
      },
      function (e, t) {
        'use strict';
        (t.__esModule = !0),
          (t['default'] = function (e) {
            var t = void 0,
              n = void 0;
            if (!e || 'string' != typeof e) return null;
            try {
              window.DOMParser
                ? ((n = new window.DOMParser()), (t = n.parseFromString(e, 'text/xml')))
                : ((t = new window.ActiveXObject('Microsoft.XMLDOM')),
                  (t.async = 'false'),
                  t.loadXML(e));
            } catch (r) {
              t = undefined;
            }
            if (!t || !t.documentElement || t.getElementsByTagName('parsererror').length)
              throw new Error('Invalid XML: ' + e);
            return t;
          });
      },
      function (e, t) {
        'use strict';
        function n (e) {
          var t = e && 1 === e.nodeType ? e.ownerDocument : document,
            n = t.defaultView || t.parentWindow,
            r = void 0,
            i = void 0;
          return (
            'undefined' != typeof n.innerWidth
              ? ((r = n.innerWidth), (i = n.innerHeight))
              : 'undefined' != typeof t.documentElement &&
                'undefined' != typeof t.documentElement.clientWidth &&
                0 !== t.documentElement.clientWidth
              ? ((r = t.documentElement.clientWidth), (i = t.documentElement.clientHeight))
              : ((r = t.documentElement.offsetWidth), (i = t.documentElement.offsetHeight)),
            { width: r, height: i }
          );
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        (t.__esModule = !0),
          (t['default'] = function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
            return (e.preload = t), e.setAttribute('preload', t), e;
          });
      },
      function (e, t) {
        'use strict';
        (t.__esModule = !0),
          (t['default'] = function (e) {
            return (e.defaultMuted = !0), (e.muted = !0), e;
          });
      },
      function (e, t) {
        'use strict';
        (t.__esModule = !0),
          (t['default'] = function (e) {
            return e.setAttribute('playsinline', ''), e.setAttribute('webkit-playsinline', ''), e;
          });
      },
      function (e, t) {
        'use strict';
        function n (e) {
          return e !== undefined && 'function' == typeof e.then;
        }
        function r (e) {
          n(e) && e.then(null, function (e) {});
        }
        (t.__esModule = !0), (t['default'] = r);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.__esModule = !0),
          (t.renderOptionLayer = t.renderControlBar = t.renderSoundButton = t.renderPlayPauseRewindButton = t.renderPoster = t.renderHeader = undefined);
        var i = n(99),
          o = r(i),
          a = n(100),
          u = r(a),
          s = n(101),
          l = r(s),
          d = n(103),
          c = r(d),
          f = n(105),
          p = r(f),
          h = n(107),
          m = r(h);
        (t.renderHeader = o['default']),
          (t.renderPoster = u['default']),
          (t.renderPlayPauseRewindButton = l['default']),
          (t.renderSoundButton = c['default']),
          (t.renderControlBar = p['default']),
          (t.renderOptionLayer = m['default']);
      },
      function (e, t, n) {
        'use strict';
        function r () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.landingUrl,
            n = e.title,
            r = e.actionLabel,
            a = e.videoElement,
            u = e.maxWidth,
            s =
              (e.maxHeight,
              i.Dom.create(
                i.Dom.template(
                  '\n<div class="header">\n  <a href="{{ landingUrl }}" class="link_ad" target="_top">\n    <span class="txtdetail_ad">{{ title }}</span> \n    <span class="txt_go">{{ actionLabel }}</span>\n  </a>\n</div>\n',
                  { landingUrl: t, title: n, actionLabel: r }
                )
              ).firstChild);
          i.Dom.addListener(s, 'click', function (e) {
            return (0, o.stopEvent)(e);
          });
          var l = s.querySelector('.link_ad');
          return (
            t
              ? i.Dom.addListener(l, 'click', function (e) {
                  a.played && a.pause();
                  var t = document.createElement('A');
                  return (t.href = l.href), (t.target = l.target), t.click(), (0, o.stopEvent)(e);
                })
              : (l.style.display = 'none'),
            (s.reflowElement = function () {
              var e = a.parentNode;
              parseInt(window.getComputedStyle(e).width, 10) > u
                ? ((l.style.paddingLeft =
                    'calc(50% - ' + (((319.5 * a.videoWidth) / a.videoHeight) * 0.5 - 12) + 'px)'),
                  (l.style.paddingRight =
                    'calc(50% - ' + (((319.5 * a.videoWidth) / a.videoHeight) * 0.5 - 12) + 'px)'))
                : ((l.style.paddingLeft = '12px'), (l.style.paddingRight = '12px'));
            }),
            window.addEventListener('resize', function () {
              return s.reflowElement();
            }),
            s
          );
        }
        (t.__esModule = !0), (t['default'] = r);
        var i = n(61),
          o = n(26);
      },
      function (e, t, n) {
        'use strict';
        function r () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.videoElement,
            n = e.posterSrc,
            r = i.Dom.parent(t),
            o = i.Dom.create('<div class="poster"></div>').firstChild;
          return (
            n && 0 === n.indexOf('//') && (n = '' + window.location.protocol + n),
            a['default'].isWebUri(n)
              ? ((t.poster = n),
                (o.style.cssText = 'background-image: url(' + n + ')'),
                i.Dom.addClass(r, 'show-poster'))
              : (o.style.display = 'none'),
            o
          );
        }
        (t.__esModule = !0), (t['default'] = r);
        var i = n(61),
          o = n(34),
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(o);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i () {
          function e () {
            !1 === Boolean(n.ended) && ((d = n.src), (n.src = ''), n.load());
          }
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            n = t.videoElement,
            r = t.videoSrc,
            i = t.vastXml,
            a = o.Dom.create(
              '\n    <a href="#none" class="link-load">\n      <span class="load">\n        <span class="ico_load"></span>\n      </span>\n    </a>\n  '
            ).firstChild,
            s = a.querySelector('.link-load .ico_load'),
            d = null;
          return (
            o.Dom.addListener(n, 'pause', function () {
              return e();
            }),
            (0, g['default'])(
              function (e) {
                window.addEventListener(
                  e,
                  function () {
                    n.pause();
                  },
                  !1
                );
              },
              ['orientationchange', 'resize']
            ),
            o.Dom.addListener(a, 'click', function (e) {
              'preventDefault' in e && e.preventDefault(),
                'stopImmediatePropagation' in e && e.stopImmediatePropagation(),
                'stopPropagation' in e && e.stopPropagation();
              var t = o.Dom.parent(n);
              d ||
                n.src ||
                (o.Dom.addClass(t, 'loadstart'),
                (0, l['default'])(n),
                (0, c['default'])(n),
                m['default'].isUri(r) &&
                  ((n.src = r),
                  setTimeout(function () {
                    return n.load();
                  }, 10)),
                i && (0, p['default'])({ videoElement: n, vastXml: i })),
                n.paused || n.ended
                  ? (d && ((n.src = d), n.load(), (d = null)),
                    (0, u['default'])(n.play()),
                    n.ended ? (s.innerText = '영상 다시보기') : (s.innerText = '영상 정지하기'))
                  : (n.pause(), (s.innerText = '영상 재생하기'));
            }),
            o.Dom.addListener(n, 'canplay', function (e) {
              n.paused || n.ended
                ? n.ended
                  ? (s.innerText = '영상 다시보기')
                  : (s.innerText = '영상 재생하기')
                : (s.innerText = '영상 정지하기');
            }),
            o.Dom.addListener(n, 'playing', function (e) {
              s.innerText = '영상 정지하기';
            }),
            o.Dom.addListener(n, 'pause', function (e) {
              s.innerText = '영상 재생하기';
            }),
            o.Dom.addListener(n, 'ended', function (e) {
              s.innerText = '영상 다시보기';
            }),
            a
          );
        }
        (t.__esModule = !0), (t['default'] = i);
        var o = n(61),
          a = n(97),
          u = r(a),
          s = n(102),
          l = r(s),
          d = n(95),
          c = r(d),
          f = n(73),
          p = r(f),
          h = n(34),
          m = r(h),
          v = n(24),
          g = r(v);
      },
      function (e, t) {
        'use strict';
        (t.__esModule = !0),
          (t['default'] = function (e) {
            return (e.autoplay = !0), e.setAttribute('autoplay', ''), e;
          });
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.videoElement,
            n = e.maxWidth,
            r =
              (e.maxHeight,
              o.Dom.create(
                '<a href="#none" class="link_sound"><span class="ico_sound"></span></a>'
              ).firstChild),
            i = o.Dom.create('<span class="txt_nosound">소리가 없는 동영상입니다</span>')
              .firstChild;
          return (
            (r.turnOn = function () {
              (r.querySelector('.ico_sound').innerText = '소리 켜짐'),
                o.Dom.removeClass(r, 'sound_off');
            }),
            (r.turnOff = function () {
              (r.querySelector('.ico_sound').innerText = '소리 꺼짐'),
                o.Dom.addClass(r, 'sound_off');
            }),
            (r.noSound = function () {
              return (
                o.Dom.addClass(r, 'sound_off'),
                (r.querySelector('.ico_sound').innerText = ''),
                o.Dom.append(r, i),
                r
              );
            }),
            (r.show = function () {
              return o.Dom.css(r, { visibility: 'visible' });
            }),
            (r.hide = function () {
              return o.Dom.css(r, { visibility: 'hidden' });
            }),
            o.Dom.addListener(r, 'click', function (e) {
              e.preventDefault(),
                (l['default'].isSamsungBrowser || (0, u['default'])(t)) &&
                  (t.muted ? ((t.muted = !1), r.turnOn()) : ((t.muted = 'muted'), r.turnOff()));
            }),
            o.Dom.addListener(t, 'timeupdate', function a (e) {
              e.target.currentTime > 0.1 &&
                (l['default'].isSamsungBrowser || (0, u['default'])(e.target)
                  ? (o.Dom.remove(i),
                    (e.target.muted = !0),
                    e.target.muted || (e.target.muted = 'muted'),
                    r.turnOff())
                  : r.noSound(),
                r.show(),
                o.Dom.removeListener(t, 'timeupdate', a));
            }),
            (r.reflowElement = function () {
              var e = t.parentNode;
              parseInt(window.getComputedStyle(e).width, 10) > n
                ? (r.style.left =
                    'calc(50% - ' + (((319.5 * t.videoWidth) / t.videoHeight) * 0.5 - 7) + 'px)')
                : (r.style.left = '');
            }),
            window.addEventListener('resize', function () {
              return r.reflowElement();
            }),
            r
          );
        }
        (t.__esModule = !0), (t['default'] = i);
        var o = n(61),
          a = n(104),
          u = r(a),
          s = n(70),
          l = r(s);
      },
      function (e, t) {
        'use strict';
        function n () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t =
              'undefined' != typeof e.webkitAudioDecodedByteCount &&
              e.webkitAudioDecodedByteCount > 0,
            n = 'undefined' != typeof e.mozHasAudio && e.mozHasAudio,
            r = 'undefined' != typeof e.audioTracks && e.audioTracks.length > 0;
          return t || n || r || !1;
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          var t = e.videoElement,
            n = e.maxWidth,
            r = o.Dom.create('<div class="control-bar"></div>').firstChild,
            i = o.Dom.create(
              '\n<div class="time-control">\n  <span class="control-text">남은 시간</span>\n  <em></em>\n</div>\n'
            ).firstChild;
          r.appendChild(i);
          var a = o.Dom.create(
              '\n<div class="progress-control control">\n  <div class="progress-holder slider">\n    <div class="load-progress">\n      <span class="control-text">\n        <span>로드됨</span>:0%\n      </span>\n      <div class="" style="left:0;width:100%;"></div>\n    </div>\n    <div class="play-progress slider-bar">\n      <span class="control-text">\n        <span>진행</span>:0%\n      </span>\n    </div>\n  </div>\n</div>\n'
            ),
            s = a.querySelector('div.load-progress'),
            c = a.querySelector('div.load-progress > .control-text'),
            f = a.querySelector('div.play-progress'),
            p = a.querySelector('div.play-progress > .control-text'),
            h = i.querySelector('em'),
            m = 0;
          return (
            o.Dom.addListener(t, 'ended', function () {
              m = 0;
            }),
            o.Dom.addListener(t, 'loadeddata', function (e) {
              (0, l['default'])(e.target) && m > 0 && (t.currentTime = m);
            }),
            o.Dom.addListener(t, 'timeupdate', function (e) {
              if ((0, l['default'])(e.target) && !1 === e.target.paused) {
                m = e.target.currentTime;
                var t = parseInt(e.target.duration - e.target.currentTime, 10);
                h.innerHTML = d(t);
                var n = 0;
                try {
                  n = parseInt(
                    (100 * Math.round(e.target.currentTime)) / Math.round(e.target.duration),
                    10
                  );
                } catch (e) {}
                (f.style.width = n + '%'), o.Dom.html(p, '<span>진행</span>:' + n + '%');
              }
            }),
            o.Dom.addListener(t, 'progress', function (e) {
              var t = 100;
              try {
                t = parseInt(100 * Math.round(e.target.buffered.end(0) / e.target.duration), 10);
              } catch (e) {}
              (s.style.width = t + '%'),
                (c.style.left = t + '%'),
                o.Dom.html(c, '<span>로드됨</span>:' + t + '%');
            }),
            r.appendChild(a),
            (r.reflowElement = function () {
              var e = t.parentNode;
              (u['default'].isDaumApp ||
                u['default'].isSamsungBrowser ||
                (u['default'].isAndroid && u['default'].isChrome)) &&
              parseInt(window.getComputedStyle(e).width, 10) > n
                ? (i.style.marginRight =
                    'calc(50% - ' + (((319.5 * t.videoWidth) / t.videoHeight) * 0.5 - 12) + 'px)')
                : (i.style.marginRight = '12px');
            }),
            r
          );
        }
        (t.__esModule = !0), (t['default'] = i);
        var o = n(61),
          a = n(70),
          u = r(a),
          s = n(106),
          l = r(s),
          d = function (e) {
            var t = parseInt(e, 10),
              n = parseInt(t / 60, 10);
            return (
              (t = t >= 60 ? t - 60 * n : t),
              (t = t < 10 ? '0' + t : t),
              isNaN(n) || isNaN(t) ? '' : n + ':' + t
            );
          };
      },
      function (e, t) {
        'use strict';
        function n (e) {
          return e && e.src.length > 0 && e.readyState >= r;
        }
        (t.__esModule = !0), (t['default'] = n);
        var r = 2;
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i () {
          function e (e) {
            var t = e.isTouchPlayPolicy,
              n = t === undefined ? u['default'].get('isNotAdVideoAutoplay') : t,
              i = e.cb;
            if (
              (o.Dom.removeClass(s, 'can-optout'),
              o.Dom.remove(o.Dom.find('div.option_layer')[0]),
              o.Dom.hasClass(s, 'paused') && !n)
            )
              try {
                r.play();
              } catch (a) {}
            'function' == typeof i && i(r);
          }
          function t (t) {
            var n = t.isTouchPlayPolicy,
              a = n === undefined ? 'Y' === u['default'].get('isNotAdVideoAutoplay') : n,
              l = t.cb;
            o.Dom.append(
              s,
              o.Dom.create(
                o.Dom.template(
                  '<div class="option_layer"> <strong class="control-text">자동재생 옵션안내</strong> <div class="info_auto"> <div class="inner_auto"> <p class="desc_auto"> 광고 영상 자동재생 옵션입니다. <br>아래 버튼을 누르면 광고 노출 시, 영상 자동재생이 {{currentStatus}}됩니다. <button type="button" class="btn_auto {{enableAutoPlay}}">자동재생 {{currentStatus}}</button> </p> </div> </div> <p class="desc_info">자동재생 옵션에 대한 자세한 내용은 카카오 광고 안내페이지에서 확인 가능합니다.</p> <button type="button" class="btn_close"> <span class="control-text">옵션 창 닫기</span></button></div>',
                  { currentStatus: a ? '활성화' : '차단', enableAutoPlay: a ? 'btn_on' : '' }
                )
              ).firstChild
            );
            var c = s.querySelector('button.btn_auto'),
              f = s.querySelector('button.btn_close');
            o.Dom.addListener(c, 'click', function p (t) {
              (0, d.stopEvent)(t);
              var n = a ? 'N' : 'Y';
              u['default'].set('isNotAdVideoAutoplay', n),
                o.Dom.removeListener(t.target, 'click', p),
                e({ isTouchPlayPolicy: 'Y' === n });
            }),
              o.Dom.addListener(f, 'click', function h (t) {
                (0, d.stopEvent)(t),
                  e({ isTouchPlayPolicy: a }),
                  o.Dom.removeListener(t.target, 'click', h);
              }),
              (f.reflowElement = function () {
                var e = r.parentNode;
                parseInt(window.getComputedStyle(e).width, 10) > i
                  ? (f.style.marginRight =
                      'calc(50% - ' +
                      (((319.5 * r.videoWidth) / r.videoHeight) * 0.5 - 12) +
                      'px)')
                  : (f.style.marginRight = '12px');
              }),
              f.reflowElement(),
              window.addEventListener('resize', function () {
                return f.reflowElement();
              }),
              'function' == typeof l && l(r);
          }
          var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            r = n.videoElement,
            i = n.maxWidth,
            a = !(
              l['default'].isDaumApp ||
              l['default'].isIOS ||
              l['default'].isSamsungBrowser ||
              (l['default'].isAndroid && l['default'].isChrome) ||
              l['default'].isLowVersion
            ),
            s = o.Dom.parent(r),
            c = o.Dom.create(
              a
                ? '<a href="#none" class="btn_option"><span class="control-text">옵션 더보기</span></a>'
                : '<span class="control-text">일부 환경에서는 재생 옵션을 제어할 수 없습니다</span>'
            ).firstChild;
          return (
            a &&
              (o.Dom.addListener(c, 'click', function (n) {
                (0, d.stopEvent)(n),
                  o.Dom.hasClass(s, 'can-optout')
                    ? e()
                    : t({
                        cb: function (e) {
                          if (!o.Dom.hasClass(s, 'paused'))
                            try {
                              e.pause();
                            } catch (n) {}
                          o.Dom.addClass(s, 'can-optout');
                        },
                      });
              }),
              (c.reflowElement = function () {
                var e = r.parentNode;
                parseInt(window.getComputedStyle(e).width, 10) > i
                  ? (c.style.marginRight =
                      'calc(50% - ' + ((319.5 * r.videoWidth) / r.videoHeight) * 0.5 + 'px)')
                  : (c.style.marginRight = '0');
              }),
              window.addEventListener('resize', function () {
                return c.reflowElement();
              })),
            c
          );
        }
        (t.__esModule = !0), (t['default'] = i);
        var o = n(61),
          a = n(71),
          u = r(a),
          s = n(70),
          l = r(s),
          d = n(26);
      },
      function (e, t) {
        'use strict';
        t.__esModule = !0;
        var n = 'devicePixelRatio' in window,
          r = window.devicePixelRatio > 2,
          i = n && r ? window.devicePixelRatio : 2;
        t['default'] = i;
      },
      function (e, t) {
        'use strict';
        function n (e) {
          return /kakao\.com|daum\.net/.test(e);
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        function n () {
          return /moment|clix|keywordad/.test(
            (arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '').toLowerCase()
          );
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        function n () {
          var e = window,
            t = !1;
          if (e.top === e.self) return e.location.href;
          try {
            for (; e.parent.document !== e.document; ) {
              if (!e.parent.document) {
                t = !0;
                break;
              }
              e = e.parent;
            }
          } catch (n) {
            t = !0;
          }
          return t ? e.document.referrer : e.location.href;
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        function n () {
          return 0;
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        function n () {
          return window.location !== window.parent.location;
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          var t,
            n,
            r,
            i = window.encodeURIComponent;
          t = [];
          for (n in e) (r = e[n]), t.push(i(n) + '=' + i(r));
          return t.join('&');
        }
        function o () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.unitId,
            n = t === undefined ? (0, g['default'])('unitId') : t,
            r = e.target,
            o = r === undefined ? (0, g['default'])('target') : r,
            a = e.log,
            s = a === undefined ? m['default'] : a,
            d = e.requestUrl,
            f = d === undefined ? 'https://display.ad.daum.net/sdk/native' : d,
            h = e.testMode,
            v = h === undefined ? 'N' : h,
            y = (0, u['default'])({ unitId: n, testMode: v, renderTarget: o });
          return (0, p['default'])().then(function (e) {
            return (
              (y.secretmode = !0 === e ? 'Y' : 'N'),
              new b['default'](function (e, t) {
                try {
                  x
                    ? (0, k['default'])(
                        {
                          method: 'get',
                          url: [f, i(y)].join('?'),
                          timeout: 5000,
                          sync: !1,
                          withCredentials: !0,
                        },
                        function (n, r, i) {
                          return n
                            ? (s('block XHR request by browser'), void t(n))
                            : 200 !== r.statusCode
                            ? (s('XHR request has failed'),
                              t(
                                new Error(
                                  'XHR request has failed. (statusCode=' + r.statusCode + ')'
                                )
                              ))
                            : (s('XHR request has done'),
                              void e({ target: o, detail: JSON.parse(i) }));
                        }
                      )
                    : (0, c['default'])({
                        requestId: (0, l['default'])(),
                        url: f,
                        data: y,
                        callbackName: 'cb',
                        timeout: 5000,
                        error: function (e) {
                          throw e;
                        },
                        success: function (t) {
                          e({ target: o, detail: t });
                        },
                        log: s,
                      });
                } catch (n) {
                  t(n);
                }
              })
            );
          });
        }
        t.__esModule = !0;
        var a = n(115),
          u = r(a),
          s = n(46),
          l = r(s),
          d = n(124),
          c = r(d),
          f = n(125),
          p = r(f),
          h = n(112),
          m = r(h),
          v = n(31),
          g = r(v),
          y = n(60),
          b = r(y),
          w = n(65),
          _ = r(w),
          E = n(126),
          k = r(E),
          x = !1 === _['default'].isIE || _['default'].isIE > 9;
        t['default'] = o;
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var i = n(19),
          o = r(i),
          a = n(14),
          u = r(a),
          s = n(22),
          l = r(s),
          d = n(40),
          c = r(d),
          f = n(116),
          p = r(f),
          h = n(117),
          m = r(h),
          v = n(118),
          g = r(v),
          y = n(20),
          b = r(y),
          w = n(11),
          _ = r(w),
          E = n(12),
          k = r(E),
          x = n(120),
          T = r(x),
          C = n(121),
          N = r(C),
          L = n(122),
          R = r(L),
          O = n(28),
          A = r(O),
          D = n(111),
          M = r(D),
          S = n(31),
          U = r(S),
          I = n(123),
          F = r(I),
          P = n(108),
          B = r(P),
          j = n(29),
          H = r(j),
          q = 'test-mode|image-width|image-height|icon-width|icon-height'.split('|'),
          W = (0, u['default'])(function (e, t) {
            return (0, k['default'])(
              m['default'],
              (0, o['default'])((0, g['default'])(e, 0)),
              p['default']
            )(t);
          }),
          V = function () {
            var e = 0,
              t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            try {
              if (t && 'effectiveType' in t)
                switch (t.effectiveType) {
                  case '4g':
                    e = 6;
                    break;
                  case '3g':
                    e = 5;
                    break;
                  case 'slow-2g':
                  case '2g':
                    e = 4;
                }
            } catch (n) {}
            try {
              t &&
                'type' in t &&
                (/cellular|wimax|mixed|other/.test(t.type) && 0 === e && (e = 3),
                /ethernet/.test(t.type) && (e = 1),
                /wifi|bluetooth/.test(t.type) && (e = 2));
            } catch (n) {}
            return e;
          },
          X = function (e) {
            var t = (0, _['default'])(
                p['default'],
                (0, b['default'])(function (e) {
                  return !!e[1];
                }),
                (0, o['default'])(
                  (0, g['default'])(function (t) {
                    var n =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : ('querySelector' in e && e.querySelector('[' + t + ']')) || e;
                    return 'getAttribute' in n && n.getAttribute(t);
                  }, 1)
                ),
                (0, o['default'])(function (e) {
                  return [(0, R['default'])(e), '' + H['default'] + e];
                })
              )(q),
              n = (0, _['default'])(
                (0, N['default'])('ctag'),
                W(function (e) {
                  return e.substr('param'.length).toLowerCase();
                }),
                c['default'],
                (0, o['default'])(function (e) {
                  return W(function (e) {
                    return e.substr(H['default'].length).replace(/-(.)/g, function (e, t) {
                      return t.toUpperCase();
                    });
                  }, e);
                }),
                (0, o['default'])(function (e) {
                  var t;
                  return (t = {}), (t[e.name] = e.value), t;
                }),
                (0, b['default'])(function (e) {
                  return !!e.value;
                }),
                (0, b['default'])(function (e) {
                  return new RegExp('^' + H['default'] + 'param-').test(e.name);
                }),
                A['default']
              )(e.attributes);
            return (0, c['default'])([t, n]);
          },
          z = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              t = e.unitId,
              n = t === undefined ? (0, U['default'])('unitId') : t,
              r = e.renderTarget,
              i = r === undefined ? (0, U['default'])('renderTarget') : r;
            'length' in i == !1 && (i = [i]);
            var a = (0, _['default'])(
              c['default'],
              (0, T['default'])({ network: V() }),
              (0, T['default'])({ surl: (0, M['default'])() }),
              (0, T['default'])({ cookiedisabled: (0, F['default'])() ? 'Y' : 'N' }),
              (0, T['default'])({ cnt: i.length }),
              (0, T['default'])({ sdkver: '0.15.1-native' }),
              (0, T['default'])({ sdktype: 'web' }),
              (0, T['default'])({ id: n }),
              (0, o['default'])(X)
            )(i);
            if (
              ('ctag' in a && (0, l['default'])(a.ctag).length > 0
                ? (a.ctag = JSON.stringify(a.ctag))
                : delete a.ctag,
              'testMode' in a && ((a.test = a.testMode), delete a.testMode),
              'imageWidth' in a)
            ) {
              var u = parseInt(parseInt(a.imageWidth, 10) * B['default'], 10);
              if ('imageHeight' in a) {
                var s = parseInt(parseInt(a.imageHeight, 10) * B['default'], 10);
                (a.img = u + 'x' + s), delete a.imageHeight;
              } else a.img = '' + u;
              delete a.imageWidth;
            }
            if ('iconWidth' in a) {
              var d = parseInt(parseInt(a.iconWidth, 10) * B['default'], 10);
              if ('iconHeight' in a) {
                var f = parseInt(parseInt(a.iconHeight, 10) * B['default'], 10);
                (a.icon = d + 'x' + f), delete a.iconHeight;
              } else a.icon = '' + d;
              delete a.iconWidth;
            }
            return (a.surl = (0, M['default'])()), a;
          };
        t['default'] = z;
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(14),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
        t['default'] = (0, i['default'])(function (e) {
          for (var t = {}, n = 0; n < e.length; ) e[n] && (t[e[n][0]] = e[n][1]), (n += 1);
          return t;
        });
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          var t = [];
          for (var n in e) (0, o['default'])(n, e) && (t[t.length] = [n, e[n]]);
          return t;
        }
        (t.__esModule = !0), (t['default'] = r);
        var i = n(39),
          o = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(i);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var i = n(14),
          o = r(i),
          a = n(119),
          u = r(a);
        t['default'] = (0, o['default'])(function (e, t, n) {
          if (t >= n.length || t < -n.length) return n;
          var r = t < 0 ? n.length : 0,
            i = r + t,
            o = (0, u['default'])(n);
          return (o[i] = e(n[i])), o;
        });
      },
      function (e, t) {
        'use strict';
        function n (e, t) {
          (e = e || []), (t = t || []);
          var n,
            r = e.length,
            i = t.length,
            o = [];
          for (n = 0; n < r; ) (o[o.length] = e[n]), (n += 1);
          for (n = 0; n < i; ) (o[o.length] = t[n]), (n += 1);
          return o;
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var i = n(14),
          o = r(i),
          a = n(119),
          u = r(a);
        t['default'] = (0, o['default'])(function (e, t) {
          return (0, u['default'])(t, [e]);
        });
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(14),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
        t['default'] = (0, i['default'])(function (e, t) {
          var n = {};
          return (n[e] = t), n;
        });
      },
      function (e, t) {
        'use strict';
        function n () {
          return (arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '').replace(
            /\W+(.)/g,
            function (e, t) {
              return t.toUpperCase();
            }
          );
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        function n () {
          return (
            !1 ===
            (arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window).navigator
              .cookieEnabled
          );
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        function n (e) {
          return document.createElement(e);
        }
        function r () {
          return 0;
        }
        function i (e) {
          var t;
          return (t = e.url), (t += e.url.indexOf('?') < 0 ? '?' : '&'), (t += a(e.data));
        }
        function o (e) {
          var t;
          for (t = ''; t.length < e; ) t += l().toString(36)[2];
          return t;
        }
        function a (e) {
          var t, n, r;
          t = [];
          for (n in e) (r = e[n]), t.push(s(n) + '=' + s(r));
          return t.join('&');
        }
        function u (e) {
          function t () {
            if (
              (p('abort loading script : ' + f.src),
              (window[a] = function () {
                return null === window[a];
              }),
              (l = !0),
              f && f.parentNode)
            )
              return (
                (f.onload = f.onreadystatechange = null),
                f && f.parentNode && f.parentNode.removeChild(f),
                null === f
              );
          }
          var a, u, s, l, d, c, f, p, h;
          if (
            ((e = e || {}),
            (c = {
              data: e.data || {},
              error: e.error || r,
              success: e.success || r,
              beforeSend: e.beforeSend || r,
              complete: e.complete || r,
              url: e.url || '',
              timeout: e.timeout || 1000,
              log: e.log || r,
            }),
            (c.computedUrl = i(c)),
            (s = e.callbackName || 'callback'),
            (u = e.callbackFunc || 'jsonp_' + o(15)),
            (p = c.log),
            0 === c.url.length)
          )
            throw (p('URL is missing'), new Error('MissingUrl'));
          return (
            (l = !1),
            !1 !== c.beforeSend({}, c) &&
              ((a = c.data[s] = u),
              a &&
                (window[a] = function (e) {
                  return (window[a] = null), c.success(e, c), c.complete(e, c);
                }),
              (f = n('script')),
              (f.onerror = function (e) {
                return c.error({ url: f.src, event: e }), c.complete({ url: f.src, event: e }, c);
              }),
              (f.onload = f.onreadystatechange = function () {
                if (
                  !(
                    l ||
                    (this.readyState &&
                      'loaded' !== this.readyState &&
                      'complete' !== this.readyState)
                  )
                )
                  return (
                    p('script onloaded : ' + f.src),
                    (l = !0),
                    (f.onload = f.onreadystatechange = null),
                    f &&
                      f.parentNode &&
                      (p('remove script node : ' + f.src), f.parentNode.removeChild(f)),
                    null === f
                  );
              }),
              (f.src = i(c)),
              (f.async = !0),
              p('append script node to the head: ' + f.src),
              (d = d || window.document.head || window.document.body),
              d.appendChild(f),
              (h =
                c.timeout > 0 &&
                setTimeout(function () {
                  l || (f.onerror(new Error('timeout')), t(), clearTimeout(h));
                }, c.timeout))),
            { abort: t }
          );
        }
        t.__esModule = !0;
        var s = window.encodeURIComponent,
          l = Math.random;
        t['default'] = u;
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.__esModule = !0),
          (t['default'] = function () {
            return c;
          });
        var i = n(60),
          o = r(i),
          a = n(15),
          u = r(a),
          s = n(65),
          l = r(s),
          d = (0, u['default'])('isPrivateMode');
        window.__adfit__ = window.__adfit__ || {};
        var c = new o['default'](function (e) {
          if ('__adfit__' in window && 'isPrivateMode' in window.__adfit__)
            return e(window.__adfit__.isPrivateMode);
          try {
            var t = function () {
                return (window.__adfit__.isPrivateMode = !0), e(!0);
              },
              n = function () {
                (window.__adfit__.isPrivateMode = !1), e(!1);
              };
            if (window.webkitRequestFileSystem)
              return (
                d('Chrome & Opera'),
                l['default'].androidVersion < '5.0'
                  ? n()
                  : void window.webkitRequestFileSystem(0, 0, n, t)
              );
            if ('MozAppearance' in document.documentElement.style) {
              if ((d('Firefox'), null === window.indexedDB)) return t();
              var r = window.indexedDB.open('test');
              return (r.onerror = t), void (r.onsuccess = n);
            }
            var i = navigator.userAgent.match(/Version\/([0-9._]+).*Safari/);
            if (i) {
              d('Safari');
              if (parseInt(i[1], 10) < 11)
                return (function () {
                  try {
                    window.localStorage.length
                      ? n()
                      : ((window.localStorage.x = 1), window.localStorage.removeItem('x'), n());
                  } catch (e) {
                    window.navigator.cookieEnabled ? t() : n();
                  }
                })();
              try {
                return window.openDatabase(null, null, null, null), n();
              } catch (o) {
                return t();
              }
            }
            return window.indexedDB || (!window.PointerEvent && !window.MSPointerEvent)
              ? (d('Bypass'), n())
              : (d('IE10+ & Edge InPrivate'), t());
          } catch (a) {
            (window.__adfit__ = !1), e(!1);
          }
        });
      },
      function (e, t, n) {
        const $___old_e6bbb8d1e9ebab19 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'XMLHttpRequest'
          ),
          $___old_b3a310ffe4407840 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'XMLHttpRequest'
          );
        try {
          if ($___old_e6bbb8d1e9ebab19)
            ({}.constructor.defineProperty(
              window,
              'XMLHttpRequest',
              $___stub_8343e440b270d768.XMLHttpRequest
            ));
          if ($___old_b3a310ffe4407840)
            ({}.constructor.defineProperty(
              window,
              'XMLHttpRequest',
              $___stub_8343e440b270d768.XMLHttpRequest
            ));
          return function () {
            'use strict';
            function r (e) {
              return e && e.__esModule ? e : { default: e };
            }
            function i (e, t) {
              return (0, m['default'])({}, e, t);
            }
            function o (e) {
              for (var t in e) if ((0, g['default'])(t, e)) return !1;
              return !0;
            }
            function a (e, t, n) {
              var r = e;
              return (
                (0, c['default'])(t)
                  ? ((n = t), 'string' == typeof e && (r = { uri: e }))
                  : (r = i(t, { uri: e })),
                (r.callback = n),
                r
              );
            }
            function u (e, t, n) {
              return (t = a(e, t, n)), s(t);
            }
            function s (e) {
              const $___old_106b2d28cabc6a30 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'XMLHttpRequest'
              );
              try {
                if ($___old_106b2d28cabc6a30)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___stub_8343e440b270d768.XMLHttpRequest
                  ));
                return function () {
                  if ('undefined' == typeof e.callback)
                    throw new Error('callback argument missing');
                  var t = !1,
                    n = function (n, r, i) {
                      t || ((t = !0), e.callback(n, r, i));
                    },
                    r = function () {
                      var e = void 0;
                      if (((e = s.response ? s.response : s.responseText || l(s)), b))
                        try {
                          e = JSON.parse(e);
                        } catch (t) {}
                      return e;
                    },
                    i = function (e) {
                      return (
                        clearTimeout(w),
                        e instanceof Error ||
                          (e =
                            e instanceof window.ProgressEvent
                              ? 0 === e.target.status
                                ? c
                                  ? new Error('XHR aborted network error')
                                  : new Error('XHR network error')
                                : new Error('XHR error status ' + e.target.status + ' occured')
                              : new Error('' + (e || 'Unknown XMLHttpRequest Error'))),
                        (e.statusCode = 0),
                        n(e, _)
                      );
                    },
                    a = function () {
                      if (!c) {
                        var t = void 0;
                        clearTimeout(w),
                          (t =
                            e.useXDR && s.status === undefined
                              ? 200
                              : 1223 === s.status
                              ? 204
                              : s.status);
                        var i = _,
                          o = null;
                        return (
                          0 !== t
                            ? ((i = {
                                body: r(),
                                statusCode: t,
                                method: h,
                                headers: {},
                                url: f,
                                rawRequest: s,
                              }),
                              s.getAllResponseHeaders &&
                                (i.headers = (0, p['default'])(s.getAllResponseHeaders())))
                            : (o = new Error('Internal XMLHttpRequest Error')),
                          n(o, i, i.body)
                        );
                      }
                    },
                    s = e.xhr || null;
                  s || (s = e.cors || e.useXDR ? new u.XDomainRequest() : new u.XMLHttpRequest());
                  var d = void 0,
                    c = void 0,
                    f = (s.url = e.uri || e.url),
                    h = (s.method = e.method || 'GET'),
                    m = e.body || e.data,
                    v = (s.headers = e.headers || {}),
                    y = !!e.sync,
                    b = !1,
                    w = void 0,
                    _ = {
                      body: undefined,
                      headers: {},
                      statusCode: 0,
                      method: h,
                      url: f,
                      rawRequest: s,
                    };
                  if (
                    ('json' in e &&
                      !1 !== e.json &&
                      ((b = !0),
                      v.accept || v.Accept || (v.Accept = 'application/json'),
                      'GET' !== h &&
                        'HEAD' !== h &&
                        (v['content-type'] ||
                          v['Content-Type'] ||
                          (v['Content-Type'] = 'application/json'),
                        (m = JSON.stringify(!0 === e.json ? m : e.json)))),
                    (s.onreadystatechange = function () {
                      4 === s.readyState && setTimeout(a, 0);
                    }),
                    (s.onload = a),
                    (s.onerror = i),
                    (s.onprogress = function () {}),
                    (s.onabort = function () {
                      c = !0;
                    }),
                    (s.ontimeout = i),
                    s.open(h, f, !y, e.username, e.password),
                    y || (s.withCredentials = !!e.withCredentials),
                    !y &&
                      e.timeout > 0 &&
                      (w = setTimeout(function () {
                        if (!c) {
                          (c = !0), s.abort('timeout');
                          var e = new Error('XMLHttpRequest timeout');
                          (e.code = 'ETIMEDOUT'), i(e);
                        }
                      }, e.timeout)),
                    s.setRequestHeader)
                  )
                    for (d in v) (0, g['default'])(d, v) && s.setRequestHeader(d, v[d]);
                  else if (e.headers && !o(e.headers))
                    throw new Error('Headers cannot be set on an XDomainRequest object');
                  return (
                    'responseType' in e && (s.responseType = e.responseType), s.send(m || null), s
                  );
                }.apply(this, arguments);
              } finally {
                if ($___old_106b2d28cabc6a30)
                  ({}.constructor.defineProperty(
                    window,
                    'XMLHttpRequest',
                    $___old_106b2d28cabc6a30
                  ));
              }
            }
            function l (e) {
              try {
                if ('document' === e.responseType) return e.responseXML;
                var t = e.responseXML && 'parsererror' === e.responseXML.documentElement.nodeName;
                if ('' === e.responseType && !t) return e.responseXML;
              } catch (n) {}
              return null;
            }
            var d = n(127),
              c = r(d),
              f = n(128),
              p = r(f),
              h = n(131),
              m = r(h),
              v = n(130),
              g = r(v);
            (e.exports = u),
              (u.XMLHttpRequest = window.XMLHttpRequest || function () {}),
              (u.XDomainRequest =
                'withCredentials' in new u.XMLHttpRequest()
                  ? u.XMLHttpRequest
                  : window.XDomainRequest);
            for (
              var y = ['get', 'put', 'post', 'patch', 'head', 'delete'], b = 0, w = y.length;
              b < w;
              b++
            )
              !(function (e, t) {
                u['delete' === y[e] ? 'del' : y[e]] = function (t, n, r) {
                  return (n = a(t, n, r)), (n.method = y[e].toUpperCase()), s(n);
                };
              })(b);
          }.apply(this, arguments);
        } finally {
          if ($___old_e6bbb8d1e9ebab19)
            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_e6bbb8d1e9ebab19));
          if ($___old_b3a310ffe4407840)
            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_b3a310ffe4407840));
        }
      },
      function (e, t) {
        'use strict';
        function n (e) {
          var t = Object.prototype.toString.call(e);
          return (
            '[object Function]' === t ||
            ('function' == typeof e && '[object RegExp]' !== t) ||
            ('undefined' != typeof window &&
              (e === window.setTimeout ||
                e === window.alert ||
                e === window.confirm ||
                e === window.prompt))
          );
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          if (!e) return {};
          for (
            var t = {},
              n = function (e) {
                var n = e.indexOf(':'),
                  r = (0, a['default'])(e.slice(0, n)).toLowerCase(),
                  i = (0, a['default'])(e.slice(n + 1));
                'undefined' == typeof t[r]
                  ? (t[r] = i)
                  : '[object Array]' === l.call(t[r])
                  ? t[r].push(i)
                  : (t[r] = [t[r], i]);
              },
              r = (0, a['default'])(e).split('\n'),
              i = 0,
              o = r.length;
            i < o;
            i++
          )
            (0, s['default'])(i, r) && n.call(this, r[i], i, r);
          return t;
        }
        (t.__esModule = !0), (t['default'] = i);
        var o = n(129),
          a = r(o),
          u = n(130),
          s = r(u),
          l = Object.prototype.toString;
      },
      function (e, t) {
        'use strict';
        function n (e) {
          return ('' + (e || '')).replace(/^\s*|\s*$/g, '');
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t) {
        'use strict';
        function n (e, t) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (t.__esModule = !0), (t['default'] = n);
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(130),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r),
          o =
            Object.assign ||
            function (e) {
              if (e === undefined || null === e)
                throw new TypeError('Cannot convert undefined or null to object');
              for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (r !== undefined && null !== r)
                  for (var o in r) (0, i['default'])(o, r) && (t[o] = r[o]);
              }
              return t;
            };
        t['default'] = o;
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            t = e.target,
            n = t === undefined ? (0, f['default'])('target') : t,
            r = e.detail,
            i = r === undefined ? (0, f['default'])('detail') : r,
            o = e.log,
            u = o === undefined ? h['default'] : o;
          return new v['default'](function (e, t) {
            try {
              var r = (0, s['default'])(a['default'], n),
                o = d['default'].of(i),
                l = o.ads.getOrElse(r);
              u('모자란 광고 개수 만큼, 대체 광고 객체를 채움');
              for (var c = 0, f = Math.max(n.length, l.length); c !== f; c++) l[c] = l[c] || r[c];
              if ('NO_AD' === o.status.getOrElse('') && 0 === l.length)
                throw new Error(g.RENDER_FAIL_WITH_NO_AD_RESPONSE);
              e({ target: n, detail: l });
            } catch (p) {
              t(p);
            }
          });
        }
        t.__esModule = !0;
        var o = n(32),
          a = r(o),
          u = n(19),
          s = r(u),
          l = n(133),
          d = r(l),
          c = n(31),
          f = r(c),
          p = n(112),
          h = r(p),
          m = n(60),
          v = r(m),
          g = n(136);
        t['default'] = i;
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.__esModule = !0), (t.attr = undefined);
        var i = n(134),
          o = r(i),
          a = n(33),
          u = r(a),
          s = n(36),
          l = r(s),
          d = n(37),
          c = r(d),
          f = n(19),
          p = r(f),
          h = n(135),
          m = r(h),
          v = { banner: o['default'].of, native: u['default'].of },
          g = {
            status: {
              key: 'status',
              defaultTo: 'ERROR',
              validate: function (e) {
                return e && /^(OK|NO_AD|ERROR)$/.test(e.toUpperCase());
              },
              transform: function (e) {
                return e && e.toUpperCase();
              },
            },
            requestId: 'id',
            events: {
              key: 'events',
              defaultTo: [],
              transform: function (e) {
                return (0, p['default'])(l['default'].of, e);
              },
            },
            ads: {
              key: 'ads',
              defaultTo: [],
              transform: function (e) {
                return (0, p['default'])(v[(0, m['default'])('native')(e.type)], e);
              },
            },
            options: { key: 'options', defaultTo: { viewable: { time: 1000, area: 50 } } },
          },
          y = function (e) {
            return (0, c['default'])(g, e);
          };
        (y.attr = g),
          (y.of = function (e) {
            return y(e);
          }),
          (t['default'] = y),
          (t.attr = g);
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.__esModule = !0;
        var i = n(35),
          o = r(i),
          a = n(42),
          u = r(a),
          s = (0, u['default'])(o['default'].attr, {
            type: { key: 'type', defaultTo: 'banner' },
            width: { key: 'width', defaultTo: 120 },
            height: { key: 'height', defaultTo: 50 },
            content: 'content',
            mimeType: 'mimeType',
            containerId: 'containerId',
          }),
          l = function (e) {
            return new Error('not supported in this project');
          };
        (l.attr = s),
          (l.of = function (e) {
            return l();
          }),
          (l.MIN_AD_WIDTH = 120),
          (l.MIN_AD_HEIGHT = 50),
          (t['default'] = l);
      },
      function (e, t, n) {
        'use strict';
        t.__esModule = !0;
        var r = n(14),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r);
        t['default'] = (0, i['default'])(function (e, t) {
          return null == t ? e : t;
        });
      },
      function (e, t) {
        'use strict';
        t.__esModule = !0;
        (t.BEFORE_REQUEST = 'eventBeforeRequest'),
          (t.REQUEST = 'eventRequest'),
          (t.RESPONSE_FAIL = 'eventResponseFail'),
          (t.RESPONSE_SUCCESS = 'eventResponseSuccess'),
          (t.BEFORE_RENDER = 'eventBeforeRender'),
          (t.RENDER = 'eventRender'),
          (t.RENDER_FAIL = 'eventRenderFail'),
          (t.RENDER_FAIL_WITH_NO_AD_PLACEHOLDER = 'eventRenderFailWithNoAd'),
          (t.RENDER_FAIL_WITH_NO_AD_RESPONSE = 'eventRenderFailWithNoAd'),
          (t.RENDER_FAIL_WITH_NO_CONTENT = 'eventRenderFailWithNoContent'),
          (t.BEFORE_COMPLETE = 'eventBeforeComplete'),
          (t.COMPLETE = 'eventComplete'),
          (t.ERROR = 'eventError');
      },
      function (e, t, n) {
        'use strict';
        function r (e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i (e) {
          var t = e.unitId;
          return -1 === document.cookie.indexOf('' + g + t);
        }
        function o (e) {
          var t = e.unitId,
            n = new Date(),
            r = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1);
          return (
            (document.cookie = '' + g + t + '=true; Expires=' + r.toUTCString()),
            !1 === i({ unitId: t })
          );
        }
        function a (e) {
          function t (e) {
            (0, m.removeEventListener)(e.target, 'click', t),
              C('광고 클릭시 배너 닫기'),
              O.destroy();
          }
          var n = this,
            r = e.unitId,
            u = r === undefined ? (0, d['default'])('unitId') : r,
            l = e.position,
            c = l === undefined ? 'bottom-right' : l,
            p = e.renderFailCallback,
            g = p === undefined ? function () {} : p,
            y = e.requestUrl,
            b = y === undefined ? 'https://display.ad.daum.net/sdk/native' : y,
            w = e.testMode,
            _ = w === undefined ? 'N' : w,
            E = e.baseClassName,
            k = E === undefined ? 'adFitPopupBanner' : E,
            x = e.baseNode,
            T = x === undefined ? document.createDocumentFragment() : x;
          if (this instanceof a == !1)
            return new a({ unitId: u, position: c, requestUrl: b, testMode: _, baseNode: T });
          var C = (0, h['default'])(['PopUpBanner', u, c].join(':')),
            N = c.toLowerCase().split('-');
          if (!1 === i({ unitId: u })) {
            return C(u + ':  사용자가 명시적으로 광고를 닫은 경우에는 광고 재요청하지 않음'), !1;
          }
          C('광고 wrapper 생성');
          var L = document.createElement('div');
          for (
            L.setAttribute(f['default'] + 'unit-id', u),
              L.className = k,
              C('광고 wrapper 생성: ' + L.outerHTML),
              C('광고 wrapper 템플릿 추가: ' + v),
              L.innerHTML = v,
              L.style.position = 'fixed',
              L.style.zIndex = '900',
              L.style.opacity = 0,
              L.style.transition = 'opacity 0.5s';
            N.length;

          ) {
            var R = N.shift();
            /top|bottom/.test(R) && (C('광고 wrapper 위치: ' + R), (L.style[R] = '30px')),
              /left|right/.test(R) && (C('광고 wrapper 위치: ' + R), (L.style[R] = '12px'));
          }
          T.appendChild(L),
            (this.hide = function () {
              var e =
                arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
              return (
                (0, m.addEventListener)(L, 'transitionend', function t (n) {
                  (0, m.removeEventListener)(n.target, 'transitionend', t),
                    (L.style.display = 'none'),
                    e();
                }),
                (L.style.opacity = 0),
                n
              );
            }),
            (this.show = function () {
              var e =
                arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
              return (
                (0, m.addEventListener)(L, 'transitionend', function t (n) {
                  (0, m.removeEventListener)(n.target, 'transitionend', t), e();
                }),
                (L.style.display = 'block'),
                (L.style.opacity = 1),
                n
              );
            }),
            (this.destroy = function () {
              var e =
                arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
              C('광고 wrapper 제거');
              try {
                'parentNode' in L && L.parentNode.removeChild(L), e();
              } catch (t) {}
            }),
            (this.close = function () {
              var e =
                arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
              return (
                n.hide(function () {
                  n.destroy(e), C('Opt Out Cookie 생성'), o({ unitId: u });
                }),
                n
              );
            });
          var O = this;
          (0, m.addEventListener)(L, 'click', t),
            (0, m.addEventListener)(
              L.querySelector('[' + f['default'] + 'landing-url]'),
              'click',
              t
            ),
            (0, m.addEventListener)(
              L.querySelector('[' + f['default'] + 'main-img-url]'),
              'click',
              t
            );
          var A = T.querySelector('[' + f['default'] + 'close-area]'),
            D = function (e) {
              (0, m.removeEventListener)(A, 'click'),
                C('닫기 버튼 클릭'),
                (0, m.stopEvent)(e),
                n.close();
            };
          (0, m.addEventListener)(A, 'click', D);
          var M = T.querySelector('[' + f['default'] + 'title]');
          (0, m.addEventListener)(M, 'click', t),
            new s['default']({ unitId: u, requestUrl: b, testMode: _, baseNode: T })
              .renderAs(T, function (e) {
                if ((C('광고 응답: ' + e), 1 === e.length)) {
                  var t = e[0].querySelector('[' + f['default'] + 'title]');
                  t.innerText.length &&
                    t.parent &&
                    'style' in t.parent &&
                    (t.parent.style.display = 'block'),
                    document.body.appendChild(e[0]),
                    setTimeout(function () {
                      e[0].style.opacity = 1;
                    }, 100);
                }
              })
              .renderFail(g)
              .init();
        }
        (t.__esModule = !0), (t['default'] = a);
        var u = n(30),
          s = r(u),
          l = n(31),
          d = r(l),
          c = n(29),
          f = r(c),
          p = n(15),
          h = r(p),
          m = n(26),
          v =
            '\n<div style="position:relative">\n  <strong ' +
            f['default'] +
            'ad-info-icon style="overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px">Kakao 광고</strong>\n  <a target="_blank" style="display:block;overflow:hidden" ' +
            f['default'] +
            'landing-url>\n    <img style="display:block;border-radius:5px" \n      ' +
            f['default'] +
            'image-width="300" \n      ' +
            f['default'] +
            'image-height="150" \n      ' +
            f['default'] +
            'main-img-url \n      ' +
            f['default'] +
            'alt-text>\n    <span style="position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid #000;border-radius:5px;opacity:0.2;filter:alpha(opacity=20)"></span>\n    <span style="overflow:hidden;display:none;position:absolute;bottom:0;left:0;right:0;height:52px">\n      <img src="https://t1.daumcdn.net/localimg/localimages/07/2018/pc/banner/bg_na.png" width="300" style="display:block;border-radius:0 0 5px 5px" alt="">\n      <strong ' +
            f['default'] +
            'title style="overflow:hidden;position:absolute;bottom:0;left:0;right:0;padding:22px 20px 11px;font-size:13px;font-family:AppleSDGothicNeo-Regular,\'Malgun Gothic\',\'맑은 고딕\',dotum,\'돋움\',sans-serif;color:#fff;border-radius:0 0 5px 5px;text-align:center;text-overflow:ellipsis;white-space:nowrap;"></strong>\n    </span>\n  </a>\n  <div style="position:absolute;top:0;right:0;z-index:10;width:40px;height:40px">\n    <a href="#none" style="float:right;width:24px;height:24px;padding:6px 0 0 6px" ' +
            f['default'] +
            'close-area>\n      <img src="https://t1.daumcdn.net/localimg/localimages/07/2018/pc/banner/img_close2x.png" width="18" style="display:block" alt="광고 닫기">\n    </a>\n  </div>\n</div>',
          g = 'user_close_ad_';
      },
    ]);
  })();
}
