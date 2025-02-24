var _satellite;
{
  const $___stub_7b3e42788f2718a1 = {};
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
  })($___stub_7b3e42788f2718a1);
  const $___stub_ccf21163e1b0a1ef = {};
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
  })($___stub_ccf21163e1b0a1ef);
  const $___stub_12e4a56044062aff = {};
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
  })($___stub_12e4a56044062aff);
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-11-24T01:15:59Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {},
        extensions: {
          core: {
            displayName: 'Core',
            modules: {
              'core/src/lib/conditions/domain.js': {
                name: 'domain',
                displayName: 'Domain',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-document'),
                    i = /[|\\{}()[\]^$+*?.-]/g,
                    r = function (e) {
                      if ('string' != typeof e) throw new TypeError('Expected a string');
                      return e.replace(i, '\\$&');
                    };
                  e.exports = function (e) {
                    var t = a.location.hostname;
                    return e.domains.some(function (e) {
                      return t.match(new RegExp('(^|\\.)' + r(e) + '$', 'i'));
                    });
                  };
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    a.registerLibraryLoadedTrigger(t);
                  };
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, t, n, a) {
                  'use strict';
                  var i,
                    r,
                    s,
                    o = n('@adobe/reactor-document'),
                    c = n('./helpers/decorateCode'),
                    l = n('./helpers/loadCodeSequentially'),
                    d = n('../../../node_modules/postscribe/dist/postscribe'),
                    u = a.getExtensionSettings(),
                    p =
                      ((i = function (e) {
                        d(o.body, e, {
                          beforeWriteToken: function (e) {
                            return (
                              u.cspNonce && 'script' === e.tagName && (e.attrs.nonce = u.cspNonce),
                              e
                            );
                          },
                          error: function (e) {
                            a.logger.error(e.msg);
                          },
                        });
                      }),
                      (r = []),
                      (s = function () {
                        if (o.body) for (; r.length; ) i(r.shift());
                        else setTimeout(s, 20);
                      }),
                      function (e) {
                        r.push(e), s();
                      }),
                    g = (function () {
                      if (o.currentScript) return o.currentScript.async;
                      for (var e = o.querySelectorAll('script'), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(n.src)) return n.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, t) {
                    const $___old_161340a0d33daed5 = {}.constructor.getOwnPropertyDescriptor(
                        Navigator.prototype,
                        'userAgent'
                      ),
                      $___old_ac582dcf7caa0bde = {}.constructor.getOwnPropertyDescriptor(
                        window,
                        'XMLHttpRequest'
                      ),
                      $___old_1f65a583aecb7f37 = {}.constructor.getOwnPropertyDescriptor(
                        window,
                        'localStorage'
                      ),
                      $___old_edda013ac5482c59 = {}.constructor.getOwnPropertyDescriptor(
                        window,
                        'XMLHttpRequest'
                      );
                    try {
                      if ($___old_161340a0d33daed5)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'userAgent',
                          $___stub_7b3e42788f2718a1.userAgent
                        ));
                      if ($___old_ac582dcf7caa0bde)
                        ({}.constructor.defineProperty(
                          window,
                          'XMLHttpRequest',
                          $___stub_ccf21163e1b0a1ef.XMLHttpRequest
                        ));
                      if ($___old_1f65a583aecb7f37)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_12e4a56044062aff.localStorage
                        ));
                      if ($___old_edda013ac5482c59)
                        ({}.constructor.defineProperty(
                          window,
                          'XMLHttpRequest',
                          $___stub_ccf21163e1b0a1ef.XMLHttpRequest
                        ));
                      return function () {
                        var n = { settings: e, event: t },
                          a = n.settings.source;
                        if (a)
                          return n.settings.isExternal
                            ? l(a).then(function (e) {
                                e && p(c(n, e));
                              })
                            : void (g || 'loading' !== o.readyState
                                ? p(c(n, a))
                                : o.write
                                ? o.write(c(n, a))
                                : p(c(n, a)));
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_161340a0d33daed5)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'userAgent',
                          $___old_161340a0d33daed5
                        ));
                      if ($___old_ac582dcf7caa0bde)
                        ({}.constructor.defineProperty(
                          window,
                          'XMLHttpRequest',
                          $___old_ac582dcf7caa0bde
                        ));
                      if ($___old_1f65a583aecb7f37)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_1f65a583aecb7f37
                        ));
                      if ($___old_edda013ac5482c59)
                        ({}.constructor.defineProperty(
                          window,
                          'XMLHttpRequest',
                          $___old_edda013ac5482c59
                        ));
                    }
                  };
                },
              },
              'core/src/lib/conditions/path.js': {
                name: 'path',
                displayName: 'Path Without Query String',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-document'),
                    i = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = a.location.pathname;
                    return e.paths.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return i(n, t);
                    });
                  };
                },
              },
              'core/src/lib/conditions/subdomain.js': {
                name: 'subdomain',
                displayName: 'Subdomain',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-document'),
                    i = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = a.location.hostname;
                    return e.subdomains.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return i(n, t);
                    });
                  };
                },
              },
              'core/src/lib/conditions/pathAndQuerystring.js': {
                name: 'path-and-querystring',
                displayName: 'Path And Query String',
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-document'),
                    i = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = a.location.pathname + a.location.search;
                    return e.paths.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return i(n, t);
                    });
                  };
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, t, n) {
                  const $___old_664d3eb4ede2161a = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_664d3eb4ede2161a)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_7b3e42788f2718a1.appVersion
                      ));
                    return function () {
                      'use strict';
                      var a = n('@adobe/reactor-window'),
                        i = n('@adobe/reactor-document'),
                        r = -1 !== a.navigator.appVersion.indexOf('MSIE 10'),
                        s = 'WINDOW_LOADED',
                        o = 'DOM_READY',
                        c = 'PAGE_BOTTOM',
                        l = [c, o, s],
                        d = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        u = {};
                      l.forEach(function (e) {
                        u[e] = [];
                      });
                      var p = function (e, t) {
                          l.slice(0, f(e) + 1).forEach(function (e) {
                            h(t, e);
                          });
                        },
                        g = function () {
                          return 'complete' === i.readyState
                            ? s
                            : 'interactive' === i.readyState
                            ? r
                              ? null
                              : o
                            : void 0;
                        },
                        f = function (e) {
                          return l.indexOf(e);
                        },
                        h = function (t, e) {
                          u[e].forEach(function (e) {
                            m(t, e);
                          }),
                            (u[e] = []);
                        },
                        m = function (e, t) {
                          var n = t.trigger,
                            a = t.syntheticEventFn;
                          n(a ? a(e) : null);
                        };
                      (a._satellite = a._satellite || {}),
                        (a._satellite.pageBottom = p.bind(null, c)),
                        i.addEventListener('DOMContentLoaded', p.bind(null, o), !0),
                        a.addEventListener('load', p.bind(null, s), !0),
                        a.setTimeout(function () {
                          var e = g();
                          e && p(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            u[c].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            u[o].push({ trigger: e, syntheticEventFn: d.bind(null, i) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            u[s].push({ trigger: e, syntheticEventFn: d.bind(null, a) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_664d3eb4ede2161a)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_664d3eb4ede2161a
                      ));
                  }
                },
              },
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, t, n, a) {
                  'use strict';
                  var i = 0,
                    r = function (e) {
                      return e.settings.isExternal;
                    },
                    s = function (e, t) {
                      return '<script>\n' + t + '\n</script>';
                    },
                    o = function (t, e) {
                      var n = '__runScript' + ++i;
                      return (
                        (_satellite[n] = function (e) {
                          e.call(t.event.element, t.event, t.event.target), delete _satellite[n];
                        }),
                        '<script>_satellite["' +
                          n +
                          '"](function(event, target) {\n' +
                          e +
                          '\n});</script>'
                      );
                    },
                    c = {
                      javascript: function (e, t) {
                        return e.settings.global ? s(e, t) : o(e, t);
                      },
                      html: function (e, t) {
                        return r(e) ? a.replaceTokens(t, e.event) : t;
                      },
                    };
                  e.exports = function (e, t) {
                    return c[e.settings.language](e, t);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-promise'),
                    i = n('./getSourceByUrl'),
                    r = a.resolve();
                  e.exports = function (t) {
                    var e = new a(function (n) {
                      var e = i(t);
                      a.all([e, r]).then(function (e) {
                        var t = e[0];
                        n(t);
                      });
                    });
                    return (r = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (n, a) {
                  !(function i (e, t) {
                    'object' == typeof a && 'object' == typeof n
                      ? (n.exports = t())
                      : 'function' == typeof define && define.amd
                      ? define([], t)
                      : 'object' == typeof a
                      ? (a.postscribe = t())
                      : (e.postscribe = t());
                  })(this, function () {
                    return (function (n) {
                      function a (e) {
                        if (i[e]) return i[e].exports;
                        var t = (i[e] = { exports: {}, id: e, loaded: !1 });
                        return n[e].call(t.exports, t, t.exports, a), (t.loaded = !0), t.exports;
                      }
                      var i = {};
                      return (a.m = n), (a.c = i), (a.p = ''), a(0);
                    })([
                      function (e, t, n) {
                        'use strict';
                        function a (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var i = a(n(1));
                        e.exports = i['default'];
                      },
                      function (e, t, n) {
                        'use strict';
                        function a (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function i (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function l () {}
                        function d () {
                          var e = c.shift();
                          if (e) {
                            var t = s.last(e);
                            t.afterDequeue(),
                              (e.stream = r.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function r (e, t, a) {
                          function i (e) {
                            (e = a.beforeWrite(e)), h.write(e), a.afterWrite(e);
                          }
                          ((h = new g['default'](e, a)).id = f++),
                            (h.name = a.name || h.id),
                            (u.streams[h.name] = h);
                          var n = e.ownerDocument,
                            r = {
                              close: n.close,
                              open: n.open,
                              write: n.write,
                              writeln: n.writeln,
                            };
                          p(n, {
                            close: l,
                            open: l,
                            write: function o () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return i(t.join(''));
                            },
                            writeln: function c () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return i(t.join('') + '\n');
                            },
                          });
                          var s = h.win.onerror || l;
                          return (
                            (h.win.onerror = function (e, t, n) {
                              a.error({ msg: e + ' - ' + t + ': ' + n }),
                                s.apply(h.win, [e, t, n]);
                            }),
                            h.write(t, function () {
                              p(n, r), (h.win.onerror = s), a.done(), (h = null), d();
                            }),
                            h
                          );
                        }
                        function u (e, t, n) {
                          if (s.isFunction(n)) n = { done: n };
                          else if ('clear' === n) return (c = []), (h = null), void (f = 0);
                          n = s.defaults(n, o);
                          var a = [
                            (e = /^#/.test(e)
                              ? window.document.getElementById(e.substr(1))
                              : e.jquery
                              ? e[0]
                              : e),
                            t,
                            n,
                          ];
                          return (
                            (e.postscribe = {
                              cancel: function i () {
                                a.stream ? a.stream.abort() : (a[1] = l);
                              },
                            }),
                            n.beforeEnqueue(a),
                            c.push(a),
                            h || d(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var p =
                          Object.assign ||
                          function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                            }
                            return e;
                          };
                        t['default'] = u;
                        var g = i(n(2)),
                          s = a(n(4)),
                          o = {
                            afterAsync: l,
                            afterDequeue: l,
                            afterStreamStart: l,
                            afterWrite: l,
                            autoFix: !0,
                            beforeEnqueue: l,
                            beforeWriteToken: function m (e) {
                              return e;
                            },
                            beforeWrite: function b (e) {
                              return e;
                            },
                            done: l,
                            error: function _ (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          f = 0,
                          c = [],
                          h = null;
                        p(u, { streams: {}, queue: c, WriteStream: g['default'] });
                      },
                      function (e, t, n) {
                        'use strict';
                        function a (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function i (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function v (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function y (e, t) {
                          var n = D + t,
                            a = e.getAttribute(n);
                          return E.existy(a) ? String(a) : a;
                        }
                        function S (e, t, n) {
                          var a = 2 < arguments.length && n !== undefined ? arguments[2] : null,
                            i = D + t;
                          E.existy(a) && '' !== a ? e.setAttribute(i, a) : e.removeAttribute(i);
                        }
                        t.__esModule = !0;
                        var P =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var a in n)
                                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                              }
                              return e;
                            },
                          k = i(n(3)),
                          E = a(n(4)),
                          I = !1,
                          D = 'data-ps-',
                          w = 'ps-style',
                          T = 'ps-script',
                          r = (function () {
                            function a (e, t) {
                              var n = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              v(this, a),
                                (this.root = e),
                                (this.options = n),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new k['default']('', { autoFix: n.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                S(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (a.prototype.write = function n () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var t = this.writeQueue.shift();
                                  E.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                }
                              }),
                              (a.prototype._callFunction = function i (e) {
                                var t = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(t),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(t);
                              }),
                              (a.prototype._writeImpl = function r (e) {
                                this.parser.append(e);
                                for (
                                  var t = void 0, n = void 0, a = void 0, i = [];
                                  (t = this.parser.readToken()) &&
                                  !(n = E.isScript(t)) &&
                                  !(a = E.isStyle(t));

                                )
                                  (t = this.options.beforeWriteToken(t)) && i.push(t);
                                0 < i.length && this._writeStaticTokens(i),
                                  n && this._handleScriptToken(t),
                                  a && this._handleStyleToken(t);
                              }),
                              (a.prototype._writeStaticTokens = function s (e) {
                                var t = this._buildChunk(e);
                                return t.actual
                                  ? ((t.html = this.proxyHistory + t.actual),
                                    (this.proxyHistory += t.proxy),
                                    (this.proxyRoot.innerHTML = t.html),
                                    I && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    I && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (a.prototype._buildChunk = function d (e) {
                                for (
                                  var t = this.actuals.length,
                                    n = [],
                                    a = [],
                                    i = [],
                                    r = e.length,
                                    s = 0;
                                  s < r;
                                  s++
                                ) {
                                  var o = e[s],
                                    c = o.toString();
                                  if ((n.push(c), o.attrs)) {
                                    if (!/^noscript$/i.test(o.tagName)) {
                                      var l = t++;
                                      a.push(c.replace(/(\/?>)/, ' ' + D + 'id=' + l + ' $1')),
                                        o.attrs.id !== T &&
                                          o.attrs.id !== w &&
                                          i.push(
                                            'atomicTag' === o.type
                                              ? ''
                                              : '<' +
                                                  o.tagName +
                                                  ' ' +
                                                  D +
                                                  'proxyof=' +
                                                  l +
                                                  (o.unary ? ' />' : '>')
                                          );
                                    }
                                  } else a.push(c), i.push('endTag' === o.type ? c : '');
                                }
                                return {
                                  tokens: e,
                                  raw: n.join(''),
                                  actual: a.join(''),
                                  proxy: i.join(''),
                                };
                              }),
                              (a.prototype._walkChunk = function o () {
                                for (
                                  var e = void 0, t = [this.proxyRoot];
                                  E.existy((e = t.shift()));

                                ) {
                                  var n = 1 === e.nodeType;
                                  if (!n || !y(e, 'proxyof')) {
                                    n && S((this.actuals[y(e, 'id')] = e), 'id');
                                    var a = e.parentNode && y(e.parentNode, 'proxyof');
                                    a && this.actuals[a].appendChild(e);
                                  }
                                  t.unshift.apply(t, E.toArray(e.childNodes));
                                }
                              }),
                              (a.prototype._handleScriptToken = function c (e) {
                                var t = this,
                                  n = this.parser.clear();
                                n && this.writeQueue.unshift(n),
                                  (e.src = e.attrs.src || e.attrs.SRC),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    (e.src && this.scriptStack.length
                                      ? (this.deferredRemote = e)
                                      : this._onScriptStart(e),
                                    this._writeScriptToken(e, function () {
                                      t._onScriptDone(e);
                                    }));
                              }),
                              (a.prototype._handleStyleToken = function l (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (a.prototype._writeStyleToken = function u (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, w),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (a.prototype._buildStyle = function t (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  n.setAttribute('type', e.type),
                                  E.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  n
                                );
                              }),
                              (a.prototype._insertCursor = function p (e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var n = this.doc.getElementById(t);
                                n && n.parentNode.replaceChild(e, n);
                              }),
                              (a.prototype._onScriptStart = function g (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (a.prototype._onScriptDone = function f (e) {
                                e === this.scriptStack[0]
                                  ? (this.scriptStack.shift(),
                                    this.write.apply(this, e.outerWrites),
                                    !this.scriptStack.length &&
                                      this.deferredRemote &&
                                      (this._onScriptStart(this.deferredRemote),
                                      (this.deferredRemote = null)))
                                  : this.options.error({
                                      msg: 'Bad script nesting or script finished twice',
                                    });
                              }),
                              (a.prototype._writeScriptToken = function h (e, t) {
                                var n = this._buildScript(e),
                                  a = this._shouldRelease(n),
                                  i = this.options.afterAsync;
                                e.src &&
                                  ((n.src = e.src),
                                  this._scriptLoadHandler(
                                    n,
                                    a
                                      ? i
                                      : function () {
                                          t(), i();
                                        }
                                  ));
                                try {
                                  this._insertCursor(n, T), (n.src && !a) || t();
                                } catch (r) {
                                  this.options.error(r), t();
                                }
                              }),
                              (a.prototype._buildScript = function m (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  E.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  e.content && (n.text = e.content),
                                  n
                                );
                              }),
                              (a.prototype._scriptLoadHandler = function b (t, n) {
                                function a () {
                                  t = t.onload = t.onreadystatechange = t.onerror = null;
                                }
                                function i () {
                                  a(), null != n && n(), (n = null);
                                }
                                function r (e) {
                                  a(), s(e), null != n && n(), (n = null);
                                }
                                function e (e, t) {
                                  var n = e['on' + t];
                                  null != n && (e['_on' + t] = n);
                                }
                                var s = this.options.error;
                                e(t, 'load'),
                                  e(t, 'error'),
                                  P(t, {
                                    onload: function o () {
                                      if (t._onload)
                                        try {
                                          t._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          r({ msg: 'onload handler failed ' + e + ' @ ' + t.src });
                                        }
                                      i();
                                    },
                                    onerror: function c () {
                                      if (t._onerror)
                                        try {
                                          t._onerror.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          return void r({
                                            msg: 'onerror handler failed ' + e + ' @ ' + t.src,
                                          });
                                        }
                                      r({ msg: 'remote script failed ' + t.src });
                                    },
                                    onreadystatechange: function l () {
                                      /^(loaded|complete)$/.test(t.readyState) && i();
                                    },
                                  });
                              }),
                              (a.prototype._shouldRelease = function _ (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              a
                            );
                          })();
                        t['default'] = r;
                      },
                      function (n) {
                        !(function a (e, t) {
                          n.exports = t();
                        })(0, function () {
                          return (function (n) {
                            function a (e) {
                              if (i[e]) return i[e].exports;
                              var t = (i[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                n[e].call(t.exports, t, t.exports, a), (t.loaded = !0), t.exports
                              );
                            }
                            var i = {};
                            return (a.m = n), (a.c = i), (a.p = ''), a(0);
                          })([
                            function (e, t, n) {
                              'use strict';
                              function a (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var i = a(n(1));
                              e.exports = i['default'];
                            },
                            function (e, t, n) {
                              'use strict';
                              function a (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function i (e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                  for (var n in e)
                                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                return (t['default'] = e), t;
                              }
                              function d (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              t.__esModule = !0;
                              var u = i(n(2)),
                                p = i(n(3)),
                                g = a(n(6)),
                                r = n(5),
                                f = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                s = (function () {
                                  function c (e, t) {
                                    var n = this,
                                      a =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      i =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    d(this, c), (this.stream = a);
                                    var r = !1,
                                      s = {};
                                    for (var o in u)
                                      u.hasOwnProperty(o) &&
                                        (i.autoFix && (s[o + 'Fix'] = !0),
                                        (r = r || s[o + 'Fix']));
                                    r
                                      ? ((this._readToken = (0, g['default'])(
                                          this,
                                          s,
                                          function () {
                                            return n._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, g['default'])(this, s, function () {
                                          return n._peekTokenImpl();
                                        })))
                                      : ((this._readToken = this._readTokenImpl),
                                        (this._peekToken = this._peekTokenImpl));
                                  }
                                  return (
                                    (c.prototype.append = function t (e) {
                                      this.stream += e;
                                    }),
                                    (c.prototype.prepend = function n (e) {
                                      this.stream = e + this.stream;
                                    }),
                                    (c.prototype._readTokenImpl = function a () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (c.prototype._peekTokenImpl = function i () {
                                      for (var e in f)
                                        if (f.hasOwnProperty(e) && f[e].test(this.stream)) {
                                          var t = p[e](this.stream);
                                          if (t)
                                            return 'startTag' === t.type &&
                                              /script|style/i.test(t.tagName)
                                              ? null
                                              : ((t.text = this.stream.substr(0, t.length)), t);
                                        }
                                    }),
                                    (c.prototype.peekToken = function e () {
                                      return this._peekToken();
                                    }),
                                    (c.prototype.readToken = function r () {
                                      return this._readToken();
                                    }),
                                    (c.prototype.readTokens = function s (e) {
                                      for (var t = void 0; (t = this.readToken()); )
                                        if (e[t.type] && !1 === e[t.type](t)) return;
                                    }),
                                    (c.prototype.clear = function o () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (c.prototype.rest = function l () {
                                      return this.stream;
                                    }),
                                    c
                                  );
                                })();
                              for (var o in (((t['default'] = s).tokenToString = function (e) {
                                return e.toString();
                              }),
                              (s.escapeAttributes = function (e) {
                                var t = {};
                                for (var n in e)
                                  e.hasOwnProperty(n) && (t[n] = (0, r.escapeQuotes)(e[n], null));
                                return t;
                              }),
                              (s.supports = u)))
                                u.hasOwnProperty(o) &&
                                  (s.browserHasFlaw = s.browserHasFlaw || (!u[o] && o));
                            },
                            function (e, t) {
                              'use strict';
                              var n = !(t.__esModule = !0),
                                a = !1,
                                i = window.document.createElement('div');
                              try {
                                var r = '<P><I></P></I>';
                                (i.innerHTML = r), (t.tagSoup = n = i.innerHTML !== r);
                              } catch (s) {
                                t.tagSoup = n = !1;
                              }
                              try {
                                (i.innerHTML = '<P><i><P></P></i></P>'),
                                  (t.selfClose = a = 2 === i.childNodes.length);
                              } catch (s) {
                                t.selfClose = a = !1;
                              }
                              (i = null), (t.tagSoup = n), (t.selfClose = a);
                            },
                            function (e, t, n) {
                              'use strict';
                              function a (e) {
                                var t = e.indexOf('-->');
                                if (0 <= t) return new d.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function i (e) {
                                var t = e.indexOf('<');
                                return new d.CharsToken(0 <= t ? t : e.length);
                              }
                              function r (e) {
                                var s, o, c;
                                if (-1 !== e.indexOf('>')) {
                                  var t = e.match(u.startTag);
                                  if (t) {
                                    var n =
                                      ((s = {}),
                                      (o = {}),
                                      (c = t[2]),
                                      t[2].replace(u.attr, function (e, t, n, a, i, r) {
                                        n || a || i || r
                                          ? arguments[5]
                                            ? ((s[arguments[5]] = ''), (o[arguments[5]] = !0))
                                            : (s[t] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (u.fillAttr.test(t) && t) ||
                                                '')
                                          : (s[t] = ''),
                                          (c = c.replace(e, ''));
                                      }),
                                      {
                                        v: new d.StartTagToken(
                                          t[1],
                                          t[0].length,
                                          s,
                                          o,
                                          !!t[3],
                                          c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === n ? 'undefined' : l(n)))
                                      return n.v;
                                  }
                                }
                              }
                              function s (e) {
                                var t = r(e);
                                if (t) {
                                  var n = e.slice(t.length);
                                  if (n.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                    var a = n.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                    );
                                    if (a)
                                      return new d.AtomicTagToken(
                                        t.tagName,
                                        a[0].length + t.length,
                                        t.attrs,
                                        t.booleanAttrs,
                                        a[1]
                                      );
                                  }
                                }
                              }
                              function o (e) {
                                var t = e.match(u.endTag);
                                if (t) return new d.EndTagToken(t[1], t[0].length);
                              }
                              t.__esModule = !0;
                              var l =
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
                              (t.comment = a),
                                (t.chars = i),
                                (t.startTag = r),
                                (t.atomicTag = s),
                                (t.endTag = o);
                              var d = n(4),
                                u = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (e, t, n) {
                              'use strict';
                              function o (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (t.__esModule = !0),
                                (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined);
                              var c = n(5),
                                a = (t.Token = function a (e, t) {
                                  o(this, a), (this.type = e), (this.length = t), (this.text = '');
                                }),
                                i =
                                  ((t.CommentToken = (function () {
                                    function n (e, t) {
                                      o(this, n),
                                        (this.type = 'comment'),
                                        (this.length = t || (e ? e.length : 0)),
                                        (this.text = ''),
                                        (this.content = e);
                                    }
                                    return (
                                      (n.prototype.toString = function e () {
                                        return '<!--' + this.content;
                                      }),
                                      n
                                    );
                                  })()),
                                  (t.CharsToken = (function () {
                                    function t (e) {
                                      o(this, t),
                                        (this.type = 'chars'),
                                        (this.length = e),
                                        (this.text = '');
                                    }
                                    return (
                                      (t.prototype.toString = function e () {
                                        return this.text;
                                      }),
                                      t
                                    );
                                  })()),
                                  (t.TagToken = (function () {
                                    function r (e, t, n, a, i) {
                                      o(this, r),
                                        (this.type = e),
                                        (this.length = n),
                                        (this.text = ''),
                                        (this.tagName = t),
                                        (this.attrs = a),
                                        (this.booleanAttrs = i),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (r.formatTag = function s (e, t) {
                                        var n =
                                            1 < arguments.length && t !== undefined
                                              ? arguments[1]
                                              : null,
                                          a = '<' + e.tagName;
                                        for (var i in e.attrs)
                                          if (e.attrs.hasOwnProperty(i)) {
                                            a += ' ' + i;
                                            var r = e.attrs[i];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[i]) ||
                                              (a += '="' + (0, c.escapeQuotes)(r) + '"');
                                          }
                                        return (
                                          e.rest && (a += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (a += '/>') : (a += '>'),
                                          n !== undefined &&
                                            null !== n &&
                                            (a += n + '</' + e.tagName + '>'),
                                          a
                                        );
                                      }),
                                      r
                                    );
                                  })()));
                              (t.StartTagToken = (function () {
                                function s (e, t, n, a, i, r) {
                                  o(this, s),
                                    (this.type = 'startTag'),
                                    (this.length = t),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = n),
                                    (this.booleanAttrs = a),
                                    (this.html5Unary = !1),
                                    (this.unary = i),
                                    (this.rest = r);
                                }
                                return (
                                  (s.prototype.toString = function e () {
                                    return i.formatTag(this);
                                  }),
                                  s
                                );
                              })()),
                                (t.AtomicTagToken = (function () {
                                  function r (e, t, n, a, i) {
                                    o(this, r),
                                      (this.type = 'atomicTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = n),
                                      (this.booleanAttrs = a),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = i);
                                  }
                                  return (
                                    (r.prototype.toString = function e () {
                                      return i.formatTag(this, this.content);
                                    }),
                                    r
                                  );
                                })()),
                                (t.EndTagToken = (function () {
                                  function n (e, t) {
                                    o(this, n),
                                      (this.type = 'endTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e);
                                  }
                                  return (
                                    (n.prototype.toString = function e () {
                                      return '</' + this.tagName + '>';
                                    }),
                                    n
                                  );
                                })());
                            },
                            function (e, t) {
                              'use strict';
                              function n (e, t) {
                                var n =
                                  1 < arguments.length && t !== undefined ? arguments[1] : '';
                                return e
                                  ? e.replace(/([^"]*)"/g, function (e, t) {
                                      return /\\/.test(t) ? t + '"' : t + '\\"';
                                    })
                                  : n;
                              }
                              (t.__esModule = !0), (t.escapeQuotes = n);
                            },
                            function (e, t) {
                              'use strict';
                              function l (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = a.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function d (e, t) {
                                var n = e.stream,
                                  a = l(t());
                                return (e.stream = n), a;
                              }
                              function u (e, t) {
                                var n = t.pop();
                                e.prepend('</' + n.tagName + '>');
                              }
                              function p () {
                                var e = [];
                                return (
                                  (e.last = function () {
                                    return this[this.length - 1];
                                  }),
                                  (e.lastTagNameEq = function (e) {
                                    var t = this.last();
                                    return (
                                      t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase()
                                    );
                                  }),
                                  (e.containsTagName = function (e) {
                                    for (var t, n = 0; (t = this[n]); n++)
                                      if (t.tagName === e) return !0;
                                    return !1;
                                  }),
                                  e
                                );
                              }
                              function n (n, a, t) {
                                function i () {
                                  var e = d(n, t);
                                  e && s[e.type] && s[e.type](e);
                                }
                                var r = p(),
                                  s = {
                                    startTag: function o (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && r.lastTagNameEq('TABLE')
                                        ? (n.prepend('<TBODY>'), i())
                                        : a.selfCloseFix && g.test(t) && r.containsTagName(t)
                                        ? r.lastTagNameEq(t)
                                          ? u(n, r)
                                          : (n.prepend('</' + e.tagName + '>'), i())
                                        : e.unary || r.push(e);
                                    },
                                    endTag: function c (e) {
                                      r.last()
                                        ? a.tagSoupFix && !r.lastTagNameEq(e.tagName)
                                          ? u(n, r)
                                          : r.pop()
                                        : a.tagSoupFix && (t(), i());
                                    },
                                  };
                                return function e () {
                                  return i(), l(t());
                                };
                              }
                              (t.__esModule = !0), (t['default'] = n);
                              var a = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                g = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, t) {
                        'use strict';
                        function a (e) {
                          return null != e;
                        }
                        function n (e) {
                          return 'function' == typeof e;
                        }
                        function i (e, t, n) {
                          var a = void 0,
                            i = (e && e.length) || 0;
                          for (a = 0; a < i; a++) t.call(n, e[a], a);
                        }
                        function r (e, t, n) {
                          for (var a in e) e.hasOwnProperty(a) && t.call(n, a, e[a]);
                        }
                        function s (n, e) {
                          return (
                            (n = n || {}),
                            r(e, function (e, t) {
                              a(n[e]) || (n[e] = t);
                            }),
                            n
                          );
                        }
                        function o (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (a) {
                            var t =
                              ((n = []),
                              i(e, function (e) {
                                n.push(e);
                              }),
                              { v: n });
                            if ('object' === (void 0 === t ? 'undefined' : p(t))) return t.v;
                          }
                          var n;
                        }
                        function c (e) {
                          return e[e.length - 1];
                        }
                        function l (e, t) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(t)
                          );
                        }
                        function d (e) {
                          return l(e, 'script');
                        }
                        function u (e) {
                          return l(e, 'style');
                        }
                        t.__esModule = !0;
                        var p =
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
                        (t.existy = a),
                          (t.isFunction = n),
                          (t.each = i),
                          (t.eachKey = r),
                          (t.defaults = s),
                          (t.toArray = o),
                          (t.last = c),
                          (t.isTag = l),
                          (t.isScript = d),
                          (t.isStyle = u);
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, t, n) {
                  'use strict';
                  var a = n('@adobe/reactor-load-script'),
                    i = n('@adobe/reactor-promise'),
                    r = {},
                    s = {},
                    o = function (e) {
                      return s[e] || (s[e] = a(e)), s[e];
                    };
                  (_satellite.__registerScript = function (e, t) {
                    r[e] = t;
                  }),
                    (e.exports = function (t) {
                      return r[t]
                        ? i.resolve(r[t])
                        : new i(function (e) {
                            o(t).then(
                              function () {
                                e(r[t]);
                              },
                              function () {
                                e();
                              }
                            );
                          });
                    });
                },
              },
              'core/src/lib/helpers/textMatch.js': {
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    if (null == t) throw new Error('Illegal Argument: Pattern is not present');
                    return (
                      null != e &&
                      ('string' == typeof t ? e === t : t instanceof RegExp && t.test(e))
                    );
                  };
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP2c73f67d94bb4dfb8c54d3436dc19256/',
          },
        },
        company: { orgId: 'A8AB776A5245B4220A490D44@AdobeOrg' },
        property: {
          name: 'NEWS - Ramen Sites',
          settings: {
            domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [
          {
            id: 'RL0147e17c842e4c4faf46a608e5e8af25',
            name: 'BizDev - telemundo FB Remarketing Pixel  ',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n(function(){\n    /*global $t, fbq */\n    !function (f, b, e, v, n, t, s) {\n        if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };\n        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';\n        n.queue = []; t = b.createElement(e); t.async = !0;\n        t.src = v; s = b.getElementsByTagName(e)[0];\n        s.parentNode.insertBefore(t, s)\n    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');\n\n    var pixelIds = {\n        'telemundo':'1263674443740731'\n    };\n\n    for (var pixel in pixelIds) {\n        fbq('init', pixelIds[pixel]);\n    }\n\n    $t('on', 'dtm_pageView', function (e, data) {\n        var trackView = data.trackView !== false; //this will default all to true if not false\n        //Tracks all page views.\n        if (trackView) {\n            fbq('track', 'PageView', {});\n        }\n    });\n\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL0230c0416d1b40619cd5c051b5747fec',
            name: 'ndp_videoEvent - Parsely',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t */\n(function () {\n    var currentVideo = {};\n    var blurred = false;\n\n    //blur focus events\n    window.addEventListener('blur', function () {\n        if (window.PARSELY && window.PARSELY.video && currentVideo.playState === 'play') {\n            blurred = true;\n            window.PARSELY.video.trackPause(currentVideo.guid, currentVideo.mediaInfo, currentVideo.url);\n        }\n    });\n    window.addEventListener('focus', function () {\n        if (window.PARSELY && window.PARSELY.video && currentVideo.playState === 'play' && blurred) {\n            blurred = false;\n            window.PARSELY.video.trackPlay(currentVideo.guid, currentVideo.mediaInfo, currentVideo.url);\n        }\n    });\n    //video events\n    $t('on', 'ndp_videoEvent', function (e, data) {\n        if (window.PARSELY && window.PARSELY.video) {\n            var eventData = data && data.videoData || {};\n            var eventDataRaw = eventData.raw || {};\n\n            var getPubDate = function () { return eventDataRaw.datePublished && (new Date(eventDataRaw.datePublished).getTime()) || 0; };\n\n            switch (data.eventType) {\n                case 'NDP_PlaybackEvent_START':\n                    if (currentVideo && currentVideo.guid != eventDataRaw.guid) {\n                        //end previous if it hadn't\n                        if (typeof currentVideo.guid !== 'undefined' && !blurred) {\n                            window.PARSELY.video.trackPause(currentVideo.guid, currentVideo.mediaInfo, currentVideo.url);\n                        }\n                        currentVideo = {\n                            'guid': eventDataRaw.guid,\n                            'mediaInfo': {\n                                'title': eventDataRaw.headline && eventDataRaw.headline.primary || '', // required\n                                'pub_date_tmsp': getPubDate(), // timestamp\n                            },\n                            'url': $t('dataLayer.canonical_url', document.location.href),\n                            'playState': 'play'\n                        };\n                    }\n                    if (!blurred) {\n                        window.PARSELY.video.trackPlay(currentVideo.guid, currentVideo.mediaInfo, currentVideo.url);\n                    }\n                    break;\n                case 'NDP_PlaybackEvent_PLAY':\n                    //resume from pause\n                    if (!blurred) {\n                        window.PARSELY.video.trackPlay(currentVideo.guid, currentVideo.mediaInfo, currentVideo.url);\n                    }\n                    currentVideo.playState = 'play';\n                    break;\n                case 'NDP_PlaybackEvent_COMPLETE':\n                case 'NDP_PlaybackEvent_PAUSE':\n                    if (!blurred) {\n                        window.PARSELY.video.trackPause(currentVideo.guid, currentVideo.mediaInfo, currentVideo.url);\n                    }\n                    currentVideo.playState = 'pause';\n                    break;\n\n                default:\n                    break;\n            }\n        }\n    });\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL037cda8ad1b54380ba5b36413543892d',
            name: 'Fix - android ndp_videoEvent',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n// subscribe directly to video element events instead of NDP events for android, but only when ndp isnt working\n/* global $t */\n(function () {\n    var isAndroid = navigator.userAgent.toLowerCase().indexOf(\"android\") > -1; //&& ua.indexOf(\"mobile\");\n    var debugState = window.localStorage && window.localStorage.getItem('jf_test') ? true : false;\n    var oneSecond = 1000;\n    var props = {\n        isBroken: false,\n        previousEvent: '',\n        initSubscribes: 0\n    };\n\n    if(isAndroid) {\n      $t('on', 'ndp_videoEvent', function (e, data) {\n          if (data.initiator != 'androidFix') {\n              props.previousEvent = data.eventType;\n          }\n      });\n\n      $t('on', 'ndp_playerInit', function (e, data) {\n          props.initSubscribes++;//only subscribe on one init\n          var ndp = data.playerObj;\n          // var videoElem = ndp.location().querySelector('video');\n          var videoElem = document.querySelector('video[id^=\"ndp_video\"]');\n\n          var spoofNdpEvent = function (eventType, videoElem) {\n              if (props.isBroken) {\n                  var playheadPosition = Math.round((videoElem.currentTime || 0) * oneSecond);\n                  var totalLength = Math.round((videoElem.duration || 0) * oneSecond);\n                  var videoData = ndp.mediaAsset() || {};\n                  videoData.playheadPosition = playheadPosition;\n                  videoData.totalLength = totalLength;\n                  $t('track', 'ndp_videoEvent', {\n                      eventType: eventType,\n                      videoData: videoData,\n                      playerBrand: 'mbt',\n                      initiator: 'androidFix'\n                  });\n              }\n          };\n          var logEvent = function (event) {\n              if (debugState) {\n                  console.log('* ndp_htmlEvent (' + performance.now() + ') : ' + event + ' : %O', JSON.parse(JSON.stringify(props)));\n              }\n          };\n\n          if (videoElem && props.initSubscribes <= 1) {\n              videoElem.addEventListener('timeupdate', function () {\n                  logEvent('timeupdate');\n                  //figure out if the player is broken based on event order\n                  if (!props.isBroken && (props.previousEvent === 'NDP_PlaybackEvent_LOADED' || props.previousEvent === 'NDP_AdEvent_COMPLETE')) {\n                      props.isBroken = true;\n                  }\n                  if (props.isBroken && props.previousEvent === 'NDP_PlaybackEvent_START') {\n                      props.isBroken = false;\n                  }\n\n                  spoofNdpEvent('NDP_PlaybackEvent_PROGRESS', videoElem);\n              });\n\n              videoElem.addEventListener('play', function () {\n                  logEvent('play');\n                  spoofNdpEvent('NDP_PlaybackEvent_START', videoElem);\n              });\n\n              videoElem.addEventListener('ended', function () {\n                  logEvent('ended');\n                  spoofNdpEvent('NDP_PlaybackEvent_COMPLETE', videoElem);\n              });\n\n          }\n      });\n    }\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL136c2daa69fb44d78db6db187531b608',
            name: 'Action - mbt_gallery_scroll',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['nbcnews.com', 'msnbc.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, s */\n(function() {\n    var inSlideshow = false;\n    var prevSlide = -1;\n    $t('on', 'mbt_gallery_scroll', function(e) {\n        var adSlide = $t(e.type + '.adSlide');\n        if (!adSlide) {\n            prevSlide = $t(e.type + '.prevSlideNumber') != -1 ? $t(e.type + '.prevSlideNumber') : prevSlide;\n            var curSlide = $t(e.type + '.slideNumber', 0);\n            var action = '';\n\n            var totalSlides = $t(e.type + '.totalSlides', 0);\n            s.events = '';\n            if (inSlideshow === false) {\n                //start\n                action = 'Start,';\n                inSlideshow = true;\n            }\n            if (inSlideshow !== 'done' & curSlide === totalSlides) {\n                action = 'Complete,';\n                inSlideshow = 'done';\n            }\n            if (prevSlide < curSlide) {\n                //scroll down\n                action += 'Swipe Down';\n            } else if (prevSlide > curSlide) {\n                //scroll up\n                action += 'Swipe Up';\n            }\n\n            var actionContextData = {\n                'news.slideshowaction': action, //\"Start\", \"Swipe Up\", \"Swipe Down\", \"Swipe Right\", \"Swipe Left\", \"Complete\"\n                'news.slideshowname': $t('jsonLd.imageGallery.0.headline', s.noValue),\n                'news.slideshownumber': curSlide\n            };\n            s.contextData = s.extendArray(s.contextData, actionContextData);\n\n            //track action\n            s.tl(true, 'o', 'slideshow action');\n\n            //cleanup values after action\n            for (var item in actionContextData) {\n                delete s.contextData[item];\n            }\n        }\n    });\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL1c5ba8a5457a4e6f9874c94af4921e37',
            name: 'Fix - amp autoPlay ndp_videoEvent',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    var isAutoPlay = location.search.indexOf('?autoPlay=true') !== -1;\n    var isAmp = location.hash.indexOf('amp=1') !== -1;\n    var debugState = window.localStorage && window.localStorage.getItem('jf_test') ? true : false;\n    var logEvent = function (event) {\n        if (debugState) {\n            console.log('* ndp_htmlEvent (' + performance.now() + ') : ' + event + ' : %O', JSON.parse(JSON.stringify(_stateInfo)));\n        }\n    };\n    var _stateInfo = {\n        isStarted: false,\n    };\n\n    if (isAmp && isAutoPlay) {\n        var spoofNdpEvent = function (newEventType, data) {\n            data.eventType = newEventType;\n            data.spoofedEvent = true;\n            $t('track', 'ndp_videoEvent', data);\n        }\n\n        $t('on', 'ndp_videoEvent', function (e, data) {\n            switch (data.eventType) {\n                case 'NDP_PlaybackEvent_START':\n                case 'NDP_AdEvent_START':\n                    _stateInfo.isStarted = true;\n                    break;\n                case 'NDP_PlaybackEvent_PROGRESS':\n                    if (!_stateInfo.isStarted) {\n                        logEvent('*** Event Overwritten by amp fix ***');\n                        data.isFromFix=true; //set value to see in the event\n                        spoofNdpEvent('NDP_PlaybackEvent_START', data);\n                        _stateInfo.isStarted = true;\n                    }\n                    break;\n                default:\n                    break;\n            }\n        });\n    }\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL294b02e4301f4b31ac833af7e9ceb0b9',
            name: 'Action - mbt_video_drawer_click',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, s */\n$t('on', 'mbt_video_drawer_click', function(e) {\n    var isCountinuousPlay = $t(\"mbt_video_drawer_click.video.isContinuousPlay\", false);\n    if(isCountinuousPlay) {\n        //Continuous play event is not tracked at the moment\n        //Could be used in the future to track using this flag\n        return;\n    }\n    var index = parseInt($t(e.type + '.index', 0)) + 1;\n    var actionContextData = {\n        'news.linkmoduledetail': 'video drawer',\n        'news.linkmoduletype': index,\n        'news.videoplaylist': $t(e.type + '.playlist.headline.primary', s.noValue),\n        'news.videoplaylistid': $t(e.type + '.playlist.id', s.noValue)\n    };\n    s.contextData = s.extendArray(s.contextData, actionContextData);\n\n    //track action\n    s.tl(true, 'o', 'video drawer click');\n\n    //cleanup values after action\n    for (var item in actionContextData) {\n        delete s.contextData[item];\n    }\n});\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL38b008d597fb48babf3155ae3a635788',
            name: 'Global - Adobe Heartbeat',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '\n/*\n * video heartbeats - 2.0.1 - 2016-08-22\n * Copyright (c) 2016 Adobe Systems, Inc. All Rights Reserved.\n */\n\n// Heartbeat core\n!function(a){if("undefined"==typeof b)var b={};if("undefined"==typeof c)var c={};if("undefined"==typeof d)var d={};if(d.radio||(d.radio={}),d.plugin||(d.plugin={}),"undefined"==typeof e)var e={};e.clock||(e.clock={}),function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}a.md5=t}(b),function(a){"use strict";var b={};b.startsWith=function(a,b){return 0==a.indexOf(b)},a.StringUtils=b}(b),function(a){"use strict";var b={};b.clone=function(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},b.merge=function(a,c){var d=b.clone(a);for(var e in c)c.hasOwnProperty(e)&&(d[e]=c[e]);return d},a.ObjectUtils=b}(b),function(a){"use strict";function b(a,b,c){this.fn=a,this.ctx=b,this.params=c}b.prototype.run=function(){this.params?this.fn.apply(this.ctx,this.params):this.fn.apply(this.ctx)},a.radio.Command=b}(d),function(a){"use strict";function b(a,b){this._queue=[],this._lastTs=0,this._isSuspended="undefined"!=typeof a?a:!1,this._delay="undefined"!=typeof b?b:0}b.prototype.addCommand=function(a){this._queue.push(a),this._drain()},b.prototype.cancelAllCommands=function(){this._queue=[]},b.prototype.isEmpty=function(){return 0===this._queue.length},b.prototype.suspend=function(){this._isSuspended=!0},b.prototype.resume=function(){this._isSuspended=!1,this._drain()},b.prototype.flush=function(){this._isSuspended=!1;for(var a=0;a<this._queue.length;a++){var b=this._queue[a];b.run()}this._queue=[]},b.prototype._drain=function(){if(!this._isSuspended&&!this._drainInProgress){this._drainInProgress=!0;var a=this;!function b(){var c=a._queue.shift();c?a._runCommand(c,function(){a._isSuspended||b()}):a._drainInProgress=!1}()}},b.prototype._runCommand=function(a,b){function c(){a.run(),null!=b&&b.call(d)}var d=this;if(0==this._lastTs)c();else{var e=(new Date).getTime(),f=e-this._lastTs;this._lastTs=e,f<this._delay?setTimeout(c,this._delay-f):c()}},a.radio.CommandQueue=b}(d),function(a){"use strict";function b(a,b){if(this._name=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._listeners={},this._requests={},this._commands={},this._isShutDown=!1}function c(a,c){if(a===c)return!0;for(var d=(a||"").split(b.SEPARATOR),e=(c||"").split(b.SEPARATOR),f=!0,g=0;g<d.length;g++)f=f&&(d[g]===b.WILDCARD||d[g]===e[g]);return f}b.WILDCARD="*",b.SEPARATOR=":",b.prototype.toString=function(){return"<channel: "+this._name+">"},b.prototype.shutdown=function(){this._isShutDown||(this._logger.debug(d,"#shutdown > Shutting down"),this.off(),this._requests={},this._commands={},this._isShutDown=!0)},b.prototype.on=function(a,b,c){this._isShutDown||(this._listeners[a]||(this._listeners[a]=[]),this._listeners[a].push({fn:b,ctx:c}))},b.prototype.off=function(a,b,c){if(!this._isShutDown){if(b="function"==typeof b?b:null,!a&&null==b&&!c)return void(this._listeners={});if(a)this._removeListener(a,b,c);else for(a in this._listeners)this._listeners.hasOwnProperty(a)&&this._removeListener(a,b,c)}},b.prototype.trigger=function(a){if(!this._isShutDown)for(var b in this._listeners)if(this._listeners.hasOwnProperty(b)&&c(b,a.name))for(var d=this._listeners[b].slice(0),e=0;e<d.length;e++){var f=d[e];f.fn.call(f.ctx,a)}},b.prototype.comply=function(a,b,c){this._isShutDown||(this._commands[a]={cmd:b,ctx:c})},b.prototype.command=function(a,b){if(!this._isShutDown){var c=this._commands[a];return c?void c.cmd.call(c.ctx,b):void this._logger.warn(d,"#command > No command handler for: "+a)}},b.prototype.reply=function(a,b,c){this._isShutDown||(this._requests[a]={fn:b,ctx:c})},b.prototype.request=function(a){if(!this._isShutDown){var b=this._requests[a];return b?b.fn.call(b.ctx):(this._logger.warn(d,"#request > No request handler for: "+a),null)}},b.prototype._removeListener=function(a,b,c){b="function"==typeof b?b:null;var d=this._listeners[a];if(d){if(!d.length||null==b&&!c)return void delete this._listeners[a];for(var e=0;e<d.length;e++){var f=d[e];null!==b&&b!==f.fn||c&&c!==f.ctx||this._listeners[a].splice(e,1)}}};var d="radio::Channel";a.radio.Channel=b}(d),function(a){"use strict";function b(a){if(!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a,this._channels={}}var c=a.radio.Channel;b.prototype.channel=function(a){return this._channels[a]||(this._channels[a]=new c(a,this._logger)),this._channels[a]},b.prototype.shutdown=function(){for(var a in this._channels)this._channels.hasOwnProperty(a)&&this._channels[a].shutdown()},a.radio.Radio=b}(d),function(a){"use strict";function b(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a}a.extend=b}(d),function(a){"use strict";function b(){}b.prototype.write=function(a){throw new Error("Implementation error: Method must be overridden.")},a.ILogWriter=b}(d),function(a){"use strict";function b(){}b.prototype.write=function(a){window.console&&window.console.log&&window.console.log(a)},a.LogWriter=b}(d,c),function(a){"use strict";function b(){}b.prototype.setLogWriter=function(a){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getLogWriter=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getEnabled=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.enable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.disable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.debug=function(a,b){throw new Error("Implementation error: Method must be overridden.")},b.prototype.info=function(a,b){throw new Error("Implementation error: Method must be overridden.")},b.prototype.warn=function(a,b){throw new Error("Implementation error: Method must be overridden.")},b.prototype.error=function(a,b){throw new Error("Implementation error: Method must be overridden.")},a.ILogger=b}(d),function(a){"use strict";function b(){this._logWriter=new d}function c(a){return 10>a?"00"+a:100>a?"0"+a:""+a}var d=a.LogWriter;b.prototype.setLogWriter=function(a){if(!a)throw new Error("Reference to the ILogWriter object cannot be NULL");this._logWriter=a,this._enabled=!1},b.prototype.getLogWriter=function(){return this._logWriter},b.prototype.getEnabled=function(){return this._enabled},b.prototype.enable=function(){this._enabled=!0},b.prototype.disable=function(){this._enabled=!1},b.prototype.debug=function(a,b){this._log(a,f,b)},b.prototype.info=function(a,b){this._log(a,e,b)},b.prototype.warn=function(a,b){this._log(a,g,b)},b.prototype.error=function(a,b){this._log(a,h,b)},b.prototype._log=function(a,b,d){if(b==h||this._enabled){var e="",f=new Date;e+="["+f.toTimeString()+"."+c(f.getMilliseconds())+"] ["+b+"] ",e+="["+a+"] "+d,this._logWriter.write(e)}};var e="INFO",f="DEBUG",g="WARN",h="ERROR";a.Logger=b}(d),function(a){"use strict";function b(a,b){this._pluginName=a,this._eventName=b}var c=a.radio.Channel;b.prototype.getPluginName=function(){return this._pluginName},b.prototype.getEventName=function(){return this._eventName},b.prototype.getName=function(){return this._pluginName+c.SEPARATOR+this._eventName},a.Trigger=b}(d),function(a){"use strict";function b(a,b){this.name=a,this.data=b}b.SUCCESS="success",b.ERROR="error",b.createFromTrigger=function(a){return new b(a.getName())},a.Event=b}(d),function(a){"use strict";function b(){this._events={}}b.prototype.addEventListener=function(a,b,c){a&&b&&(c=c||window,this._events[a]=this._events[a]||[],this._events[a].push({cb:b,ctx:c}))},b.prototype.removeEventListener=function(a,b,c){if(a&&b){c=c||window;var d,e,f=!1;for(e in this._events)if(a===e){f=!0;break}if(f){for(d=this._events[e].length-1;d>=0;d--){var g=this._events[e][d];b===g.cb&&c===g.ctx&&this._events[e].splice(d,1)}this._events[e].length||delete this._events[e]}}},b.prototype.dispatchEvent=function(a){if(a.name){var b,c;for(b in this._events)if(this._events.hasOwnProperty(b)&&a.name===b){var d=this._events[b],e=d.slice(0),f=e.length;for(c=0;f>c;c++)e[c].cb.call(e[c].ctx,a);break}}},b.prototype.removeAllListeners=function(a){if(a){var b,c;for(c in this._events)if(this._events.hasOwnProperty(c)){for(b=this._events[c].length-1;b>=0;b--){var d=this._events[c][b];d.ctx===a&&this._events[c].splice(b,1)}this._events[c].length||delete this._events[c]}}else this._events={}},a.EventDispatcher=b}(d),function(a){"use strict";function b(){}function c(a,b){this.url=a||null,this.method=b,this._xmlhttp=null}function d(){d.__super__.constructor.call(this),this._connection=null}var e=a.Event,f=a.EventDispatcher;b.GET="GET",d.RESPONSE="response",d.INSTANCE="instance",a.extend(d,f),d.prototype.close=function(){this.removeAllListeners(null)},d.prototype.load=function(a){a&&a.method&&a.url&&(a._xmlhttp=this._createCORSRequest(a),a._xmlhttp?a._xmlhttp.send():this._loadImage(a))},d.prototype._createCORSRequest=function(a){var b=null;if("undefined"!=typeof window.XMLHttpRequest){var c=new window.XMLHttpRequest;"withCredentials"in c&&(b=c,b.open(a.method,a.url,!0))}if(null==b&&"undefined"!=typeof window.XDomainRequest&&(b=new window.XDomainRequest,b.open(a.method,a.url)),b){var f={};f[d.INSTANCE]=this;var g=this;b.onload=function(){return b.status&&parseInt(b.status,10)>=400?this.onerror():(f[d.RESPONSE]=b.responseText,void g.dispatchEvent(new e(e.SUCCESS,f)))},b.onerror=function(){g.dispatchEvent(new e(e.ERROR,f))}}return b},d.prototype._loadImage=function(a){this._connection||(this._connection=new Image,this._connection.alt=""),this._connection.src=a.url;var b={};b[d.RESPONSE]="",b[d.INSTANCE]=this,this.dispatchEvent(new e(e.SUCCESS,b))},a.URLRequestMethod=b,a.URLRequest=c,a.URLLoader=d}(d),function(a){"use strict";var b="js",c="2.0.1.88",d="c8c0b1",e=4,f={};f.getVersion=function(){return b+"-"+c+"-"+d},f.getMajor=function(){return f.getNumberAtPosition(0)},f.getMinor=function(){return f.getNumberAtPosition(1)},f.getMicro=function(){return f.getNumberAtPosition(2)},f.getPatch=function(){return f.getNumberAtPosition(3)},f.getBuild=function(){return d},f.getApiLevel=function(){return e},f.getNumberAtPosition=function(a){return c.split(".")[a]},a.Version=f}(c),function(a){"use strict";function b(a,b){this._message=a,this._details=b}b.prototype.getMessage=function(){return this._message},b.prototype.getDetails=function(){return this._details},a.ErrorInfo=b}(c),function(a){"use strict";function b(){this.debugLogging=!1}a.HeartbeatConfig=b}(c),function(a){"use strict";function b(){}b.prototype.onError=function(a){},a.HeartbeatDelegate=b}(c),function(a){"use strict";function b(){}b.prototype.configure=function(a){throw new Error("Implementation error: Method must be overridden.")},b.prototype.bootstrap=function(a){throw new Error("Implementation error: Method must be overridden.")},b.prototype.setup=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.destroy=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.enable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.disable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getName=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.isInitialized=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.resolveData=function(a){throw new Error("Implementation error: Method must be overridden.")},a.plugin.IPlugin=b}(d),function(a){"use strict";function b(a,b,c,d){this.trigger=a,this.action=c,this.plugin=b,this._paramMappings={},this.mergeParams(d)}var c=a.plugin.ParamMapping;b.prototype.mergeParams=function(a){if(a)for(var b=0;b<a.length;b++){var c=a[b];this._paramMappings[c.getKeyName()]=c}},b.prototype.getParams=function(){var a=[];for(var b in this._paramMappings)this._paramMappings.hasOwnProperty(b)&&a.push(this._paramMappings[b]);return a},b.prototype.addParam=function(a){this._paramMappings[a.getKeyName()]=a},b.prototype.removeParam=function(a,b){var d=new c(a,b);this._paramMappings.hasOwnProperty(d.getKeyName())&&delete this._paramMappings[d.getKeyName()]},a.plugin.Behaviour=b}(d),function(a){"use strict";function b(a,b,d){this._pluginName=a,this._key=b,this._paramName=d||a+c.SEPARATOR+b}var c=a.radio.Channel;b.prototype.getPluginName=function(){return this._pluginName},b.prototype.getKey=function(){return this._key},b.prototype.getKeyName=function(){return this._pluginName+c.SEPARATOR+this._key},b.prototype.getParamName=function(){return this._paramName},a.plugin.ParamMapping=b}(d),function(a){"use strict";function b(a){if(!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a,this._plugins={},this._behaviours={},this._radio=new d(this._logger),this._dataChannel=this._radio.channel(g),this._ctrlChannel=this._radio.channel(h)}var c=a.Event,d=a.radio.Radio,e=a.radio.Channel,f=a.plugin.Behaviour;b.ERROR="error",b.prototype.addPlugin=function(a){var b=a.getName();this._plugins[b]&&this._logger.warn(i,"#addPlugin > Replacing plugin: "+b),this._plugins[b]=a,a.bootstrap(this)},b.prototype.setupPlugins=function(){for(var a in this._plugins)this._plugins.hasOwnProperty(a)&&this._plugins[a].setup()},b.prototype.pluginExists=function(a){return!!this._plugins[a]},b.prototype.isPluginInitialized=function(a){return this._plugins[a]&&this._plugins[a].isInitialized()},b.prototype.on=function(a,b,c,d){this._dataChannel.on(a+e.SEPARATOR+b,c,d)},b.prototype.off=function(a,b,c,d){var f=a&&b?a+e.SEPARATOR+b:null;this._dataChannel.off(f,c,d)},b.prototype.trigger=function(a){var b=a.name,c=this._behaviours[b];if(c){var d,e,f,g,h,i={},j={};for(d=0;d<c.length;d++)if(f=c[d],g=f.getParams())for(e=0;e<g.length;e++)h=g[e],i[h.getPluginName()]=i[h.getPluginName()]||[],h.key in i[h.getPluginName()]||i[h.getPluginName()].push(h.getKey());for(var k in i)i.hasOwnProperty(k)&&(j[k]=this.request(k,i[k]));for(d=0;d<c.length;d++){f=c[d];var l={_behaviour:f,_eventData:a.data||{}};if(g=f.getParams()){for(e=0;e<g.length;e++)h=g[e],l[h.getParamName()]=j[h.getPluginName()]?j[h.getPluginName()][h.getKey()]:null;this.command(f.plugin.getName(),f.action,l)}}}this._dataChannel.trigger(a)},b.prototype.request=function(a,b){var c=this._plugins[a];return c&&b&&0!=b.length?c.resolveData(b):null},b.prototype.raise=function(a){this._errorInfo=a;var d=new c(b.ERROR,a);this._ctrlChannel.trigger(d)},b.prototype.getErrorInfo=function(){return this._errorInfo},b.prototype.destroy=function(){this._radio.shutdown();for(var a in this._plugins)this._plugins.hasOwnProperty(a)&&this._plugins[a].destroy()},b.prototype.comply=function(a,b,c){this._dataChannel.comply(a.getName()+e.SEPARATOR+b,c,a)},b.prototype.command=function(a,b,c){this._dataChannel.command(a+e.SEPARATOR+b,c)},b.prototype.registerBehaviour=function(a,b,c,d){var e=a.getName(),g=new f(a,b,c,d);this._behaviours[e]=this._behaviours[e]||[],this._behaviours[e].push(g)};var g="data_channel",h="ctrl_channel",i="plugin::PluginManager";a.plugin.PluginManager=b}(d),function(a,b){"use strict";function c(a){this._name=a,this._isInitialized=!1,this._isDestroyed=!1,this._isEnabled=!0,this._dataResolver={},this._logTag="plugin::"+this.getName(),this._logger=new d}var d=a.Logger,e=a.Trigger,f=a.Event,g=b.ErrorInfo;c.INITIALIZED="initialized",c.prototype.configure=function(a){},c.prototype.bootstrap=function(a){this._pluginManager=a,this._isDestroyed&&this._pluginManager.raise(new g("Invalid state.","Plugin already destroyed."))},c.prototype.setup=function(){this._trigger(c.INITIALIZED),this._isInitialized=!0},c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._teardown())},c.prototype.enable=function(){this._isEnabled=!0,this._enabled()},c.prototype.disable=function(){this._isEnabled=!1,this._disabled()},c.prototype.getName=function(){return this._name},c.prototype.getLogger=function(){return this._logger},c.prototype.isInitialized=function(){return this._isInitialized},c.prototype.resolveData=function(a){if(!this._isEnabled||!this._isInitialized)return this._logger.warn(this._logTag,"Unable to retrieve plugin data. Plugin: "+this._name+". Enabled: "+this._isEnabled+". Initialized: "+this._isInitialized+"."),null;if("function"==typeof this._dataResolver)return this._dataResolver.call(this,a);var b=null;if(a)for(var c=0;c<a.length;c++){var d=a[c];this._dataResolver.hasOwnProperty(d)&&(b=b||{},"function"==typeof this._dataResolver[d]?b[d]=this._dataResolver[d].call(this):b[d]=this._dataResolver[d])}return b},c.prototype.toString=function(){return"<plugin: "+this._name+">"},c.prototype._enabled=function(){},c.prototype._disabled=function(){},c.prototype._teardown=function(){},c.prototype._canProcess=function(){return this._isEnabled?this._isDestroyed?(this._logger.error(this._logTag,"Plugin destroyed."),!1):!0:(this._logger.error(this._logTag,"Plugin disabled."),!1)},c.prototype._trigger=function(a,b){var c=f.createFromTrigger(new e(this.getName(),a));c.data=b,this._pluginManager.trigger(c)},a.plugin.BasePlugin=c}(d,c),function(a){"use strict";function b(a,b,c){this.name=a,this.interval=b,this.isActive=!1,this.repeatCount="undefined"!=typeof c?c:e,this._nextTickTimestamp=0,this.reset()}function c(a,b){if(!a)throw new Error("Reference to the ClockService object cannot be NULL");if(this._service=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._isDestroyed=!1,this._timers={};var c=this;this._clock=window.setInterval(function(){c._onTick()},1e3*f)}b.prototype.reset=function(){this.tick=0,this._createdTimestamp=(new Date).getTime(),this._updateNextTickTimestamp()},b.prototype.shouldTick=function(){var a=(new Date).getTime();return a>this._nextTickTimestamp-f/2?(this.tick++,this._updateNextTickTimestamp(),!0):!1},b.prototype._updateNextTickTimestamp=function(){this._nextTickTimestamp=this._createdTimestamp+1e3*this.interval*(this.tick+1)},c.prototype.createTimer=function(a,c,d){this._timers[a]=new b(a,c,d)},c.prototype.destroyTimer=function(a){delete this._timers[a]},c.prototype.resumeTimer=function(a,b){b="undefined"!=typeof b?b:!1,this._logger.debug(d,"#resumeTimer(name="+a+", reset="+b+")");var c=this._timers[a];c&&(c.isActive=!0,b&&c.reset())},c.prototype.pauseTimer=function(a,b){b="undefined"!=typeof b?b:!1,this._logger.debug(d,"#pauseTimer(name="+a+", reset="+b+")");var c=this._timers[a];c&&(c.isActive=!1,b&&c.reset())},c.prototype.isTimerPaused=function(a){var b=this._timers[a];return b?!b.isActive:!1},c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._timers={},window.clearInterval(this._clock))},c.prototype._onTick=function(){for(var a in this._timers)if(this._timers.hasOwnProperty(a)){var b=this._timers[a];b.isActive&&b.shouldTick()&&(b.interval>1&&this._logger.debug(d,"#_onTick() > "+b.name+"("+b.tick+" | "+b.repeatCount+")"),0!=b.repeatCount?(this._service.onTick(b.name,b.interval,b.tick),b.repeatCount!=e&&b.repeatCount--):this.destroyTimer(b.name))}};var d="service.clock::TimerManager",e=-1,f=.25;a.clock.TimerDescriptor=b,a.clock.TimerManager=c}(e),function(a,b,c){"use strict";function d(a){if(d.__super__.constructor.call(this,h),!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a,this._timerManager=new e(this,this._logger),this._setupDataResolver()}var e=c.clock.TimerManager,f=b.StringUtils,g=a.plugin.BasePlugin;a.extend(d,g),d.prototype.bootstrap=function(a){d.__super__.bootstrap.call(this,a),this._pluginManager.comply(this,i,this._cmdCreate),this._pluginManager.comply(this,k,this._cmdResume),this._pluginManager.comply(this,j,this._cmdPause),this._pluginManager.comply(this,l,this._cmdDestroy)},d.prototype._teardown=function(){this._timerManager.destroy()},d.prototype._cmdCreate=function(a){var b=a[o]||s;this._timerManager.createTimer(a[m],a[n],b)},d.prototype._cmdPause=function(a){this._timerManager.pauseTimer(a[m],!!a[q])},d.prototype._cmdResume=function(a){this._timerManager.resumeTimer(a[m],!!a[q])},d.prototype._cmdDestroy=function(a){this._timerManager.destroyTimer(a[m])},d.prototype.onTick=function(a,b,c){a+=".tick";var d={};d[m]=a,d[n]=b,d[p]=c,this._trigger(a,d)},d.prototype._setupDataResolver=function(){var a={},b=this._timerManager;a[r]=function(a){return b.isTimerPaused(a)},this._dataResolver=function(b){if(!b||0==b.length)return null;for(var c=null,d=0;d<b.length;d++){var e=b[d];if(c=c||{},f.startsWith(e,r)){var g=e.split(r+".");g.length>0&&(c[e]=a[r].call(this,g[1]))}}return c}};var h="service.clock",i="create",j="pause",k="resume",l="destroy",m="name",n="interval",o="repeat_count",p="tick",q="reset",r="is_paused",s=-1;c.clock.ClockService=d}(d,b,e),function(a,b,c){"use strict";function d(a,b){if(this._logger=new e,this._pluginManager=new f(this._logger),this._pluginManager.addPlugin(new g(this._logger)),b)for(var c=0;c<b.length;c++)this._pluginManager.addPlugin(b[c]);this._pluginManager.setupPlugins(),this._isDestroyed=!1}var e=a.Logger,f=a.plugin.PluginManager,g=b.clock.ClockService;d.prototype.configure=function(a){if(!a)throw new Error("Configuration object cannot be NULL.");a.debugLogging?this._logger.enable():this._logger.disable(),this._isDestroyed&&this._logger.error(h,"Instance is destroyed.")},d.prototype.destroy=function(){this._isDestroyed||(this._pluginManager.destroy(),this._isDestroyed=!0)};var h="Heartbeat";c.Heartbeat=d}(d,e,c),a.ADB||(a.ADB={}),a.ADB.core||(a.ADB.core=d),a.ADB.va||(a.ADB.va=c),a.ADB.va.utils||(a.ADB.va.utils=b),a.ADB.va.plugins||(a.ADB.va.plugins={})}(this);\n\n// VideoPlayerPlugin\n!function(a){if("undefined"==typeof b)var b={};!function(a){"use strict";var b={};b.ASSET_TYPE_VOD="vod",b.ASSET_TYPE_LIVE="live",b.ASSET_TYPE_LINEAR="linear",a.AssetType=b}(b),function(a){"use strict";function b(){this.playerName=null,this.name=null,this.position=null,this.startTime=null}b.prototype.toString=function(){return"playerName="+this.playerName+", name="+this.name+", position="+this.position+", startTime="+this.startTime},a.AdBreakInfo=b}(b),function(a){"use strict";function b(){this.id=null,this.name=null,this.length=null,this.position=null}b.prototype.toString=function(){return"id="+this.id+", name="+this.name+", length="+this.length+", position="+this.position},a.AdInfo=b}(b),function(a){"use strict";function b(){this.name=null,this.length=null,this.position=null,this.startTime=null}b.prototype.toString=function(){return"name="+this.name+", length="+this.length+", position="+this.position+", startTime="+this.startTime},a.ChapterInfo=b}(b),function(a){"use strict";function b(){this.bitrate=null,this.fps=null,this.droppedFrames=null,this.startupTime=null}b.prototype.toString=function(){return"bitrate="+this.bitrate+", fps="+this.fps+", droppedFrames="+this.droppedFrames+", startupTime="+this.startupTime},a.QoSInfo=b}(b),function(a){"use strict";function b(){this.playerName=null,this.id=null,this.name=null,this.length=null,this.playhead=null,this.streamType=null,this.resumed=!1}b.prototype.toString=function(){return"playerName="+this.playerName+", id="+this.id+", name="+this.name+", length="+this.length+", playhead="+this.playhead+", streamType="+this.streamType+", resumed="+this.resumed},a.VideoInfo=b}(b),function(a){"use strict";function b(){this.debugLogging=!1}a.VideoPlayerPluginConfig=b}(b),function(a){"use strict";function b(){}b.prototype.getVideoInfo=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getAdBreakInfo=function(){return null},b.prototype.getAdInfo=function(){return null},b.prototype.getChapterInfo=function(){return null},b.prototype.getQoSInfo=function(){return null},a.VideoPlayerPluginDelegate=b}(b),function(a,b){"use strict";function c(a){if(c.__super__.constructor.call(this,h),!a)throw new Error("PlayerPlugin delegate cannot be NULL.");this._delegate=a,this._isTrackingSessionActive=!1,this._isTrackingSessionStarted=!1,this._isTrackingAd=!1,this._playheadTimer=null,this._previousPlayhead=-1,this._stalledPlayheadCount=0,this._playheadStalled=!1,this._videoIdle=!1,this._setupDataResolver()}var d=a.plugin.ParamMapping,e=a.Trigger,f=a.plugin.BasePlugin,g=b.VideoPlayerPluginConfig;a.extend(c,f),c.prototype.configure=function(a){if(!a)throw new Error("Reference to the configuration data cannot be NULL.");if(!(a instanceof g))throw new Error("Expected config data to be instance of VideoPlayerPluginConfig.");a.debugLogging?this._logger.enable():this._logger.disable(),this._logger.debug(this._logTag,"#configure(debugLogging="+a.debugLogging+")")},c.prototype.bootstrap=function(a){c.__super__.bootstrap.call(this,a),this._registerCommands(),this._registerBehaviours()},c.prototype._cmdVideoIdleStart=function(a){this._logger.info(this._logTag,"#_cmdVideoIdleStart()"),this._videoIdle=!0},c.prototype._cmdVideoIdleResume=function(a){this._logger.info(this._logTag,"#_cmdVideoIdleResume()"),this._videoIdle&&(this._trigger(o),this._trigger(p),a.isInChapter&&this._trigger(A),a.isInAd&&(this._trigger(u),this._isTrackingAd=!0)),this._videoIdle=!1},c.prototype.trackSessionStart=function(){if(this._logger.info(this._logTag,"#trackSessionStart()"),this._canProcess()){if(!this._isTrackingSessionActive)return void this._logger.warn(this._logTag,"#trackSessionStart() > No active tracking session.");if(this._isTrackingSessionStarted)return void this._logger.info(this._logTag,"#trackSessionStart() > Tracking session already started.");this._trigger(o),this._isTrackingSessionStarted=!0;var a=this._dataResolver(["video.resumed"]);a.hasOwnProperty("video.resumed")&&a["video.resumed"]&&this._trigger(p)}},c.prototype.trackVideoLoad=function(){this._logger.info(this._logTag,"#trackVideoLoad()"),this._canProcess()&&(this._trigger(m),this._isTrackingSessionActive=!0,this._isTrackingSessionStarted=!1)},c.prototype.trackVideoUnload=function(){if(this._logger.info(this._logTag,"#trackVideoUnload()"),this._canProcess()){if(!this._isTrackingSessionActive)return void this._logger.warn(this._logTag,"#trackVideoUnload() > No active tracking session.");this._stopPlayheadTimer(),this._trigger(n),this._isTrackingSessionActive=!1,this._isTrackingSessionStarted=!1,this._videoIdle=!1}},c.prototype.trackPlay=function(){this._logger.info(this._logTag,"#trackPlay()"),this._canProcess()&&this._startSessionIfNeeded("trackPlay")&&(this._trigger(s),this._startPlayheadTimer())},c.prototype.trackPause=function(){if(this._logger.info(this._logTag,"#trackPause()"),this._canProcess()&&this._startSessionIfNeeded("trackPause")){this._stopPlayheadTimer();var a={};a[H]=!1,this._trigger(t,a)}},c.prototype.trackBufferStart=function(){this._logger.info(this._logTag,"#trackBufferStart()"),this._canProcess()&&this._startSessionIfNeeded("trackBufferStart")&&(this._stopPlayheadTimer(),this._trigger(w))},c.prototype.trackBufferComplete=function(){this._logger.info(this._logTag,"#trackBufferComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackBufferComplete")&&(this._trigger(x),this._startPlayheadTimer())},c.prototype.trackSeekStart=function(){this._logger.info(this._logTag,"#trackSeekStart()"),this._canProcess()&&this._startSessionIfNeeded("trackSeekStart")&&(this._stopPlayheadTimer(),this._trigger(y))},c.prototype.trackSeekComplete=function(){if(this._logger.info(this._logTag,"#trackSeekComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackSeekComplete")){this._trigger(z),this._startPlayheadTimer();var a=this._dataResolver(["ad.isInAd"]);this._isTrackingAd=a.hasOwnProperty("ad.isInAd")&&a["ad.isInAd"]}},c.prototype.trackComplete=function(a){if(this._logger.info(this._logTag,"#trackComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackComplete")){var b={};b[G]=a,this._stopPlayheadTimer(),this._trigger(q,b)}},c.prototype.trackTimedMetadata=function(a){this._logger.info(this._logTag,"#trackComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackTimedMetadata")&&this._trigger(r,a)},c.prototype.trackChapterStart=function(){this._logger.info(this._logTag,"#trackChapterStart()"),this._canProcess()&&this._startSessionIfNeeded("#trackChapterStart")&&this._trigger(A)},c.prototype.trackChapterComplete=function(){this._logger.info(this._logTag,"trackChapterComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackChapterComplete")&&this._trigger(B)},c.prototype.trackAdStart=function(){this._logger.info(this._logTag,"#trackAdStart()"),this._canProcess()&&this._startSessionIfNeeded("trackAdStart")&&(this._trigger(u),this._isTrackingAd=!0)},c.prototype.trackAdComplete=function(){this._logger.info(this._logTag,"#trackAdComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackAdComplete")&&(this._trigger(v),this._isTrackingAd=!1)},c.prototype.trackBitrateChange=function(){this._logger.info(this._logTag,"#trackBitrateChange()"),this._canProcess()&&this._startSessionIfNeeded("trackBitrateChange")&&this._trigger(C)},c.prototype.trackVideoPlayerError=function(a){if(this._logger.info(this._logTag,"#trackVideoPlayerError(errorId="+a+")"),this._startSessionIfNeeded("trackVideoPlayerError")){var b={};b[I]=l,b[J]=a,this._trigger(D,b)}},c.prototype.trackApplicationError=function(a){if(this._logger.info(this._logTag,"#trackApplicationError(errorId="+a+")"),this._startSessionIfNeeded("trackApplicationError")){var b={};b[I]=k,b[J]=a,this._trigger(D,b)}},c.prototype._registerCommands=function(){this._pluginManager.comply(this,"handleVideoIdleStart",this._cmdVideoIdleStart),this._pluginManager.comply(this,"handleVideoIdleResume",this._cmdVideoIdleResume)},c.prototype._registerBehaviours=function(){this._pluginManager.registerBehaviour(new e(j,E),this,"handleVideoIdleStart"),this._pluginManager.registerBehaviour(new e(j,F),this,"handleVideoIdleResume",[new d(i,"ad.isInAd","isInAd"),new d(i,"chapter.isInChapter","isInChapter")])},c.prototype._setupDataResolver=function(){function a(){return g.video?g.video:(g.video=h._delegate.getVideoInfo(),h._logger.info(h._logTag,"Data from delegate > VideoInfo: "+g.video),g.video)}function b(){return g.ad?g.ad:(g.ad=h._delegate.getAdInfo(),h._logger.info(h._logTag,"Data from delegate > AdInfo: "+g.ad),g.ad)}function c(){return g.pod?g.pod:(g.pod=h._delegate.getAdBreakInfo(),h._logger.info(h._logTag,"Data from delegate > AdBreakInfo: "+g.pod),g.pod)}function d(){return g.chapter?g.chapter:(g.chapter=h._delegate.getChapterInfo(),h._logger.info(h._logTag,"Data from delegate > ChapterInfo: "+g.chapter),g.chapter)}function e(){return g.qos?g.qos:(g.qos=h._delegate.getQoSInfo(),h._logger.info(h._logTag,"Data from delegate > QoSInfo: "+g.qos),g.qos)}var f={},g={},h=this;f["video.id"]=function(){var b=a(),c=b?b.id:null;return h._logger.debug(h._logTag,"Resolving video.id: "+c),c},f["video.name"]=function(){var b=a(),c=b?b.name:null;return h._logger.debug(h._logTag,"Resolving video.name: "+c),c},f["video.length"]=function(){var b=a(),c=b?b.length:NaN;return h._logger.debug(h._logTag,"Resolving video.length: "+c),c},f["video.playerName"]=function(){var b=a(),c=b?b.playerName:null;return h._logger.debug(h._logTag,"Resolving video.playerName: "+c),c},f["video.streamType"]=function(){var b=a(),c=b?b.streamType:null;return h._logger.debug(h._logTag,"Resolving video.streamType: "+c),c},f["video.playhead"]=function(){var b=a(),c=b?b.playhead:NaN;return h._logger.debug(h._logTag,"Resolving video.playhead: "+c),c},f["video.resumed"]=function(){var b=a(),c=b?b.resumed:!1;return h._logger.debug(h._logTag,"Resolving video.resumed: "+c),c},f["video.playheadStalled"]=function(){return this._playheadStalled},f["pod.name"]=function(){var a=c(),b=a?a.name:null;return h._logger.debug(h._logTag,"Resolving pod.name: "+b),b},f["pod.playerName"]=function(){var a=c(),b=a?a.playerName:null;return h._logger.debug(h._logTag,"Resolving pod.playerName: "+b),b},f["pod.position"]=function(){var a=c(),b=a?a.position:NaN;return h._logger.debug(h._logTag,"Resolving pod.position: "+b),b},f["pod.startTime"]=function(){var a=c(),b=a?a.startTime:NaN;return h._logger.debug(h._logTag,"Resolving pod.startTime: "+b),b},f["ad.isInAd"]=function(){var a=b(),c=null!=a;return h._logger.debug(h._logTag,"Resolving ad.isInAd: "+c),c},f["ad.isInAdBreak"]=function(){var a=c(),b=null!=a;return h._logger.debug(h._logTag,"Resolving ad.isInAdBreak: "+b),b},f["ad.id"]=function(){var a=b(),c=a?a.id:null;return h._logger.debug(h._logTag,"Resolving ad.id: "+c),c},f["ad.name"]=function(){var a=b(),c=a?a.name:null;return h._logger.debug(h._logTag,"Resolving ad.name: "+c),c},f["ad.length"]=function(){var a=b(),c=a?a.length:NaN;return h._logger.debug(h._logTag,"Resolving ad.length: "+c),c},f["ad.position"]=function(){var a=b(),c=a?a.position:NaN;return h._logger.debug(h._logTag,"Resolving ad.position: "+c),c},f["chapter.isInChapter"]=function(){var a=d(),b=null!=a;return h._logger.debug(h._logTag,"Resolving chapter.isInChapter: "+b),b},f["chapter.name"]=function(){var a=d(),b=a?a.name:null;return h._logger.debug(h._logTag,"Resolving chapter.name: "+b),b},f["chapter.length"]=function(){var a=d(),b=a?a.length:NaN;return h._logger.debug(h._logTag,"Resolving chapter.length: "+b),b},f["chapter.position"]=function(){var a=d(),b=a?a.position:NaN;return h._logger.debug(h._logTag,"Resolving chapter.position: "+b),b},f["chapter.startTime"]=function(){var a=d(),b=a?a.startTime:NaN;return h._logger.debug(h._logTag,"Resolving chapter.startTime: "+b),b},f["qos.bitrate"]=function(){var a=e(),b=a?a.bitrate:NaN;return h._logger.debug(h._logTag,"Resolving qos.bitrate: "+b),b},f["qos.fps"]=function(){var a=e(),b=a?a.fps:NaN;return h._logger.debug(h._logTag,"Resolving qos.fps: "+b),b},f["qos.droppedFrames"]=function(){var a=e(),b=a?a.droppedFrames:NaN;return h._logger.debug(h._logTag,"Resolving qos.droppedFrames: "+b),b},f["qos.startupTime"]=function(){var a=e(),b=a?1e3*a.startupTime:NaN;return h._logger.debug(h._logTag,"Resolving qos.startupTime: "+b),b},this._dataResolver=function(a){if(!a||0==a.length)return null;g={};for(var b=null,c=0;c<a.length;c++){var d=a[c];b=b||{},b[d]=f.hasOwnProperty(d)?f[d].call(this):null}return b}},c.prototype._trackPlayheadStall=function(){this._canProcess()&&(this._playheadStalled||(this._logger.info(this._logTag,"#_trackPlayheadStall()"),this._stalledPlayheadCount=0,this._playheadStalled=!0,this._trigger(t)))},c.prototype._trackExitStall=function(){this._canProcess()&&(this._stalledPlayheadCount=0,this._playheadStalled&&(this._logger.info(this._logTag,"#_trackExitStall()"),this._playheadStalled=!1,this.trackPlay()))},c.prototype._startPlayheadTimer=function(){var a=this;this._playheadTimer||(this._playheadTimer=setInterval(function(){if(a._canProcess()){var b=a._dataResolver(["ad.isInAd","video.playhead"]);if(a._isTrackingAd)a._playheadStalled&&a._trackExitStall(),b.hasOwnProperty("ad.isInAd")&&!b["ad.isInAd"]&&(a._isTrackingAd=!1);else{var c=b["video.playhead"];c!=a._previousPlayhead?a._trackExitStall():a._previousPlayhead>=0&&c==a._previousPlayhead&&(a._stalledPlayheadCount++,a._stalledPlayheadCount==L&&a._trackPlayheadStall()),a._previousPlayhead=c}}},K))},c.prototype._stopPlayheadTimer=function(){this._playheadTimer&&(clearInterval(this._playheadTimer),this._playheadTimer=null),this._trackExitStall()},c.prototype._startSessionIfNeeded=function(a){return this._isTrackingSessionActive?(this._isTrackingSessionStarted||(this._logger.info(this._logTag,"#"+a+"() > Tracking session auto-start."),this.trackSessionStart()),!0):(this._logger.warn(this._logTag,"#"+a+"() > No active tracking session."),!1)};var h="player",i=h,j="adobe-heartbeat",k="sourceErrorExternal",l="sourceErrorSDK",m="video_load",n="video_unload",o="video_start",p="video_resume",q="video_complete",r="timed_metadata",s="play",t="pause",u="ad_start",v="ad_complete",w="buffer_start",x="buffer_complete",y="seek_start",z="seek_complete",A="chapter_start",B="chapter_complete",C="bitrate_change",D="track_error",E="video_idle_start",F="video_idle_resume",G="callback",H="filter_report",I="source",J="error_id",K=1001,L=2;b.VideoPlayerPlugin=c}(a.ADB.core,b),a.ADB.va.plugins.videoplayer||(a.ADB.va.plugins.videoplayer=b)}(this);\n\n// AdobeHeartbeatPlugin\n!function(a){if("undefined"==typeof b)var b={};b.clock||(b.clock={}),b.context||(b.context={}),b.filter||(b.filter={}),b.model||(b.model={}),b.network||(b.network={}),function(a,b){"use strict";function c(a,b,c,d,e){if(!b)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=b,!a)throw new Error("Reference to the pluginManager object cannot be NULL");if(this._pluginManager=a,!e)throw new Error("Reference to the logger object cannot be NULL");this._logTag="ah::Timer."+c,this._logger=e,this._isDestroyed=!1,this._createTimer(c,d),this._installHandlers()}var d=a.Event;c.KEY_NAME="name",c.KEY_INTERVAL="interval",c.KEY_RESET="reset",c.prototype.resume=function(a){this._logger.debug(this._logTag,"Starting timer: "+this._name);var b={};b[c.KEY_NAME]=e+"."+this._name,b[c.KEY_RESET]=a,this._pluginManager.command(f,i,b)},c.prototype.pause=function(a){this._logger.debug(this._logTag,"Stopping timer: "+this._name);var b={};b[c.KEY_NAME]=e+"."+this._name,b[c.KEY_RESET]=a,this._pluginManager.command(f,h,b)},c.prototype.destroy=function(){if(!this._isDestroyed){this._isDestroyed=!0,this._uninstallHandlers();var a={};a[c.KEY_NAME]=e+"."+this._name,this._pluginManager.command(f,j,a)}},c.prototype.setInterval=function(a){var b=k+"."+e+"."+this._name,c=this._pluginManager.request(f,[b])[b];this.pause(!0),this._createTimer(this._name,a),c||this.resume(!0)},c.prototype._cmdResume=function(a){var b=!1;null!=a&&a.hasOwnProperty(c.KEY_RESET)&&(b=a[c.KEY_RESET]),this.resume(b)},c.prototype._cmdPause=function(a){var b=!1;null!=a&&a.hasOwnProperty(c.KEY_RESET)&&(b=a[c.KEY_RESET]),this.pause(b)},c.prototype._onTick=function(a,b){this._channel.trigger(new d("clock:"+this._name+".tick",b))},c.prototype._installHandlers=function(){this._channel.comply("clock:"+this._name+".resume",this._cmdResume,this),this._channel.comply("clock:"+this._name+".pause",this._cmdPause,this),this._pluginManager.on(f,e+"."+this._name+".tick",this._onTick,this)},c.prototype._uninstallHandlers=function(){this._channel.off(null,null,this),this._pluginManager.off(null,null,null,this)},c.prototype._createTimer=function(a,b){this._name=a,this._interval=b;var d={};d[c.KEY_NAME]=e+"."+this._name,d[c.KEY_INTERVAL]=this._interval,this._pluginManager.command(f,g,d)};var e="heartbeat",f="service.clock",g="create",h="pause",i="resume",j="destroy",k="is_paused";b.clock.Timer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,d){c.__super__.constructor.call(this,a,b,f,h,d)}var d=a.Event,e=b.clock.Timer;a.extend(c,e),c.prototype._onCheckStatusComplete=function(a){var b=a.data[l];if(this._logger.debug(this._logTag,"#_onCheckStatusComplete(interval="+b+")"),b){if(b==this._interval)return void this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval value not changed.");b>g?(this._logger.warn(this._logTag,"#_onCheckStatusComplete() > Interval value too large: "+b),this.setInterval(g)):(this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval changed to: "+b),this.setInterval(b))}else this._logger.warn(this._logTag,"#_onCheckStatusComplete() > Invalid interval value."),this.setInterval(h)},c.prototype._getSettings=function(a){this._logger.debug(this._logTag,"#_getSettings()"),this._channel.trigger(new d(i))},c.prototype._installHandlers=function(){c.__super__._installHandlers.call(this),this._channel.on(j,this._getSettings,this),this._channel.on(k,this._onCheckStatusComplete,this),this._channel.reply(l,function(){return this._interval},this)};var f="check_status",g=600,h=60,i="clock:check_status.tick",j="clock:check_status.get_settings",k="net:check_status_complete",l="check_status_interval";b.clock.CheckStatusTimer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,d){c.__super__.constructor.call(this,a,b,e,f,d)}var d=b.clock.Timer;a.extend(c,d),c.prototype._onCheckStatusComplete=function(a){var b=a.data[g];if(this._logger.debug(this._logTag,"#_onCheckStatusComplete(interval="+b+")"),b){if(b==this._interval)return void this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval value not changed.");this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval changed to: "+b),this.setInterval(b)}else this._logger.warn(this._logTag,"#_onCheckStatusComplete() > Invalid interval value."),this.setInterval(f)},c.prototype._installHandlers=function(){c.__super__._installHandlers.call(this),this._channel.on(h,this._onCheckStatusComplete,this),this._channel.reply(g,function(){return this._interval},this)};var e="reporting",f=10,g="reporting_interval",h="net:check_status_complete";b.clock.ReportingTimer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,d){c.__super__.constructor.call(this,a,b,e,f,d)}var d=b.clock.Timer;a.extend(c,d);var e="idle",f=1800;b.clock.IdleTimer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,d){c.__super__.constructor.call(this,a,b,e,f,d)}var d=b.clock.Timer;a.extend(c,d);var e="flush_filter",f=.25;b.clock.FlushFilterTimer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,c){if(!a)throw new Error("Reference to the pluginManager object cannot be NULL");if(!b)throw new Error("Reference to the channel object cannot be NULL");if(!c)throw new Error("Reference to the logger object cannot be NULL");this._isDestroyed=!1,this._reportingTimer=new f(a,b,c),this._checkStatusTimer=new d(a,b,c),this._flushFilterTimer=new e(a,b,c),this._idleTimer=new g(a,b,c)}var d=b.clock.CheckStatusTimer,e=b.clock.FlushFilterTimer,f=b.clock.ReportingTimer,g=b.clock.IdleTimer;c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._reportingTimer.destroy(),this._checkStatusTimer.destroy(),this._flushFilterTimer.destroy(),this._idleTimer.destroy())},b.clock.Clock=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){this.value=a,this.hint=b}function d(a){this.realm=a,this.data={}}c.HINT_SHORT="short",d.prototype.setField=function(a,b,d){this.data[a]=new c(b,d)},d.prototype._createAccessor=function(a,b,c){var d=this;return function(){return arguments.length&&(d[a]=arguments[0],d.setField(b,arguments[0],c)),d[a]}},b.model.Dao=d,b.model.DaoField=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"asset"),this.adId=this._createAccessor("_adId","ad_id",null),this.sid=this._createAccessor("_sid","ad_sid",null),this.resolver=this._createAccessor("_resolver","resolver",null),this.podId=this._createAccessor("_podId","pod_id",null),this.podPosition=this._createAccessor("_podPosition","pod_position",null),this.podOffset=this._createAccessor("_podOffset","pod_offset",null),this.podName=this._createAccessor("_podName","pod_name",null),this.adLength=this._createAccessor("_adLength","ad_length",null),this.adName=this._createAccessor("_adName","ad_name",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.adId(a.adId()),this.sid(a.sid()),this.resolver(a.resolver()),this.podId(a.podId()),this.podPosition(a.podPosition()),this.podOffset(a.podOffset()),this.podName(a.podName()),this.adLength(a.adLength()),this.adName(a.adName())}else this.adId(""),this.sid(""),this.resolver(""),this.podId(""),this.podPosition(""),this.podOffset(0),this.podName(""),this.adLength(0),this.adName("")}var d=b.model.Dao;a.extend(c,d),b.model.AdDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"sc"),this.reportSuiteId=this._createAccessor("_reportSuiteId","rsid",null),this.trackingServer=this._createAccessor("_trackingServer","tracking_server",null),this.ssl=this._createAccessor("_ssl","ssl",e.HINT_SHORT),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.reportSuiteId(a.reportSuiteId()),this.trackingServer(a.trackingServer()),this.ssl(a.ssl())}else this.reportSuiteId(""),this.trackingServer(""),this.ssl(0)}var d=b.model.Dao,e=b.model.DaoField;a.extend(c,d),b.model.AdobeAnalyticsDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"stream"),this.id=this._createAccessor("_id","chapter_id",null),this.sid=this._createAccessor("_sid","chapter_sid",null),this.name=this._createAccessor("_name","chapter_name",null),this.position=this._createAccessor("_position","chapter_pos",null),this.length=this._createAccessor("_length","chapter_length",null),this.offset=this._createAccessor("_offset","chapter_offset",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.id(a.id()),this.sid(a.sid()),this.name(a.name()),this.position(a.position()),this.length(a.length()),this.offset(a.offset())}else this.id(""),this.sid(""),this.name(""),this.position(0),this.length(0),this.offset(0)}var d=b.model.Dao;a.extend(c,d),b.model.ChapterDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"asset"),this.type=this._createAccessor("_type","type",null),this.videoId=this._createAccessor("_videoId","video_id",null),this.publisher=this._createAccessor("_publisher","publisher",null),this.adData=this._createAccessor("_adData","ad_data",null),this.chapterData=this._createAccessor("_chapterData","chapter_data",null),this.length=this._createAccessor("_length","length",null),this.name=this._createAccessor("_name","name",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.type(a.type()),this.name(a.name()),this.videoId(a.videoId()),this.publisher(a.publisher()),this.length(a.length());var b=a.adData()?new e(a.adData()):null;this.adData(b);var d=a.chapterData()?new f(a.chapterData()):null;this.chapterData(d)}else this.type(""),this.name(""),this.videoId(""),this.publisher(""),this.length(0),this.adData(null),this.chapterData(null)}var d=b.model.Dao,e=b.model.AdDao,f=b.model.ChapterDao;a.extend(c,d),c.TYPE_AD="ad",c.TYPE_MAIN_CONTENT="main",b.model.AssetDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"event"),this.type=this._createAccessor("_type","type",null),this.duration=this._createAccessor("_duration","duration",null),this.playhead=this._createAccessor("_playhead","playhead",null),this.id=this._createAccessor("_id","id",null),this.source=this._createAccessor("_source","source",null),this.ts=this._createAccessor("_ts","ts",null),this.prevTs=this._createAccessor("_prevTs","prev_ts",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.type(a.type()),this.duration(a.duration()),this.playhead(a.playhead()),this.id(a.id()),this.source(a.source()),this.ts(a.ts()),this.prevTs(a.prevTs())}else this.type(""),this.duration(0),this.playhead(0),this.id(""),this.source(""),this.ts(0),this.prevTs(-1)}var d=b.model.Dao;a.extend(c,d),c.EVENT_TYPE_AA_START="aa_start",c.EVENT_TYPE_AA_AD_START="aa_ad_start",c.EVENT_TYPE_START="start",c.EVENT_TYPE_RESUME="resume",c.EVENT_TYPE_CHAPTER_START="chapter_start",c.EVENT_TYPE_CHAPTER_COMPLETE="chapter_complete",c.EVENT_TYPE_PLAY="play",c.EVENT_TYPE_PAUSE="pause",c.EVENT_TYPE_STALL="stall",c.EVENT_TYPE_BUFFER="buffer",c.EVENT_TYPE_BITRATE_CHANGE="bitrate_change",c.EVENT_TYPE_ERROR="error",c.EVENT_TYPE_COMPLETE="complete",b.model.EventDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"stream"),this.bitrate=this._createAccessor("_bitrate","bitrate",null),this.fps=this._createAccessor("_fps","fps",null),this.droppedFrames=this._createAccessor("_droppedFrames","dropped_frames",null),this.startupTime=this._createAccessor("_startup_time","startup_time",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.bitrate(a.bitrate()),this.fps(a.fps()),this.droppedFrames(a.droppedFrames()),this.startupTime(a.startupTime()),this.isStartupTimeOverridden=a.isStartupTimeOverridden}else this.bitrate(0),this.fps(0),this.droppedFrames(0),this.startupTime(0),this.isStartupTimeOverridden=!1}var d=b.model.Dao;a.extend(c,d),b.model.QoSDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"sp"),this.ovp=this._createAccessor("_ovp","ovp",null),this.sdk=this._createAccessor("_sdk","sdk",null),this.channel=this._createAccessor("_channel","channel",null),this.playerName=this._createAccessor("_playerName","player_name",null),this.libVersion=this._createAccessor("_libVersion","hb_version",null),this.apiLevel=this._createAccessor("_apiLevel","hb_api_lvl",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.ovp(a.ovp()),this.sdk(a.sdk()),this.channel(a.channel()),this.playerName(a.playerName()),this.libVersion(a.libVersion()),this.apiLevel(a.apiLevel())}else this.ovp(e),this.sdk(e),this.channel(e),this.playerName(""),this.libVersion(""),this.apiLevel(0)}var d=b.model.Dao;a.extend(c,d);var e="unknown";b.model.ServiceProviderDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"event"),this.sessionId=this._createAccessor("_sessionId","sid",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.sessionId(a.sessionId())}else this.sessionId(null)}var d=b.model.Dao;a.extend(c,d),b.model.SessionDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"stream"),this.type=this._createAccessor("_type","type",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.type(a.type())}else this.type(null)}var d=b.model.Dao;a.extend(c,d),b.model.StreamDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"user"),this.analyticsVisitorId=this._createAccessor("_analyticsVisitorId","aid",null),this.marketingCloudVisitorId=this._createAccessor("_marketingCloudVisitorId","mid",null),this.visitorId=this._createAccessor("_visitorId","id",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.analyticsVisitorId(a.analyticsVisitorId()),this.marketingCloudVisitorId(a.marketingCloudVisitorId()),this.visitorId(a.visitorId())}else this.analyticsVisitorId(null),this.marketingCloudVisitorId(null),this.visitorId(null)}var d=b.model.Dao;a.extend(c,d),b.model.UserDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"aam"),this.audienceManagerBlob=this._createAccessor("_audienceManagerBlob","blob",null),this.audienceManagerLocationHint=this._createAccessor("_audienceManagerLocationHint","loc_hint",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.audienceManagerBlob(a.audienceManagerBlob()),this.audienceManagerLocationHint(a.audienceManagerLocationHint())}else this.audienceManagerBlob(null),this.audienceManagerLocationHint(null)}var d=b.model.Dao;a.extend(c,d),b.model.AudienceManagerDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,c,i,j){this.eventData=new e,this.eventData.type(b),this.eventData.duration(0),this.eventData.ts((new Date).getTime()),this.eventData.playhead(c),this.assetData=new f(a._assetData),this.streamData=new g(a._streamData),this.qosData=new h(a._qosData),this.cuserData=d.clone(a._cuserData),this.meta=i,this.callback=j,this.filterReport=!0}var d=a.ObjectUtils,e=b.model.EventDao,f=b.model.AssetDao,g=b.model.StreamDao,h=b.model.QoSDao;b.model.TrackItem=c}(a.ADB.va.utils,b),function(a,b){"use strict";function c(a,b,c,i,j,k){this.adobeAnalyticsData=a,this.userData=b,this.aamData=c,this.serviceProviderData=i,this.sessionData=j,this.eventData=new e(k.eventData),this.assetData=new f(k.assetData),this.streamData=new g(k.streamData),this.qosData=new h(k.qosData),this.cuserData=d.clone(k.cuserData),this.meta=d.clone(k.meta),this.callback=k.callback,this.filterReport=k.filterReport}var d=a.ObjectUtils,e=b.model.EventDao,f=b.model.AssetDao,g=b.model.StreamDao,h=b.model.QoSDao;b.model.CUserDao;b.model.Report=c}(a.ADB.va.utils,b),function(a){"use strict";function b(){}b.prototype.serializeReport=function(a){},b.prototype.serializeDao=function(a){},b.prototype.serializeMap=function(a){},b.prototype.serializeNumber=function(a,b,c,d){},b.prototype.serializeString=function(a,b,c,d){},a.model.ISerializer=b}(b),function(a,b){"use strict";function c(a){if(!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a}var d=b.model.Dao,e=b.model.DaoField,f=b.model.ISerializer;a.extend(c,f),c.prototype.serializeReport=function(a){var b=[];return b.push(this.serializeDao(a.adobeAnalyticsData)),b.push(this.serializeDao(a.userData)),b.push(this.serializeDao(a.aamData)),b.push(this.serializeMap(a.cuserData,"cuser")),b.push(this.serializeDao(a.serviceProviderData)),b.push(this.serializeDao(a.sessionData)),b.push(this.serializeDao(a.eventData)),b.push(this.serializeDao(a.assetData)),b.push(this.serializeDao(a.streamData)),b.push(this.serializeDao(a.qosData)),b.push(this.serializeMap(a.meta,"meta")),{serializedOutput:b.filter(function(a){return!!a}).join("&"),callback:a.callback}},c.prototype.serializeDao=function(a){var b=this._processDao(a);return b.filter(function(a){return!!a}).join("&")},c.prototype.serializeMap=function(a,b){var c=[],d=b?b:"meta";for(var e in a)a.hasOwnProperty(e)&&a[e]&&c.push("s:"+d+":"+e+"="+window.encodeURIComponent(a[e]));return c.join("&")},c.prototype.serializeNumber=function(a,b,c,d){var f=h;return null==b||isNaN(b)?null:(d===e.HINT_SHORT&&(f=i),f+":"+c+":"+a+"="+Math.floor(b))},c.prototype.serializeString=function(a,b,c,d){return b?j+":"+c+":"+a+"="+window.encodeURIComponent(b):null},c.prototype._processDao=function(a){var b=[];for(var c in a.data)if(a.data.hasOwnProperty(c)){var e=a.data[c],f=e.value,h=e.hint,i=null,j=a.realm;if(null==f)continue;"number"==typeof f?i=this.serializeNumber(c,f,j,h):"string"==typeof f?i=this.serializeString(c,f,j,h):f instanceof d?i=this.serializeDao(f):this._logger.warn(g,"#_processDao() > Unable to serialize DAO. Field: "+c+". Value: "+f+"."),i&&b.push(i)}return b};var g="ah::QuerystringSerializer",h="l",i="h",j="s";b.model.QuerystringSerializer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){if(!a)throw new Error("Reference to the data object cannot be NULL");if(this._data=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b}c.prototype.parse=function(){var a,b,c,i,j;if(window.DOMParser){var k=new window.DOMParser;j=k.parseFromString(this._data,"text/xml")}else j=new window.ActiveXObject("Microsoft.XMLDOM"),j.async=!1,j.loadXML(this.data);var l;l=parseInt(j.getElementsByTagName("trackingInterval")[0].childNodes[0].nodeValue,10),l&&(a=l),l=parseInt(j.getElementsByTagName("setupCheckInterval")[0].childNodes[0].nodeValue,10),l&&(b=l),l=parseInt(j.getElementsByTagName("trackExternalErrors")[0].childNodes[0].nodeValue,10),l&&(c=1==l),j.getElementsByTagName("nielsenEnabled")[0]?(l=parseInt(j.getElementsByTagName("nielsenEnabled")[0].childNodes[0].nodeValue,10),i=1==l):i=!0;var m={};return m[e]=a,m[f]=b,m[g]=c,m[h]=i,this._logger.debug(d,"#parse() > Obtained configuration settings."),m};var d="ah::SettingsParser",e="reporting_interval",f="check_status_interval",g="track_external_errors",h="nielsen_enabled";b.network.SettingsParser=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){if(this._trackingServer=null,this._checkStatusServer=null,this._publisher=null,this._isConfigured=!1,this._isDestroyed=!1,this._quietMode=!1,this._visitorOptedOut=!1,this._prevReportSent=null,!a)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._serializer=new i(b),this._installEventListeners()}var d=a.Event,e=a.URLRequestMethod,f=a.URLRequest,g=a.URLLoader,h=b.network.SettingsParser,i=b.model.QuerystringSerializer;c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._logger.debug(j,"#destroy()"),this._uninstallEventListeners())},c.prototype._onApiConfig=function(a){var b=a.data;this._logger.debug(j,"#_onApiConfig(sb_server="+b[k]+", check_status_server="+b[l]+", publisher="+b[m]+", quiet_mode="+b[n]+", ssl="+b[o]+")"),this._trackingServer=this._updateRequestProtocol(b[k],b[o]),this._checkStatusServer=this._updateRequestProtocol(b[l],b[o]),this._publisher=b[m],this._quietMode=b[n],this._isConfigured=!0},c.prototype._onUpdateVisitorOptOut=function(a){var b=a.data;this._logger.debug(j,"#_onUpdateVisitorOptOut(visitor_opt_out="+b[q]+")"),this._visitorOptedOut=b[q]},c.prototype._onFilterReportAvailable=function(a){var b=a.data;if(!this._isConfigured)return void this._logger.warn(j,"#_onFilterReportAvailable() > Unable to send request: not configured.");var c=b[p],h=this._serializer.serializeReport(c),i=this._trackingServer+"/?"+h.serializedOutput;if(this._prevReportSent&&this._prevReportSent.eventData&&c.eventData&&this._prevReportSent.eventData.playhead==c.eventData.playhead&&this._prevReportSent.eventData.ts==c.eventData.ts&&this._prevReportSent.eventData.prevTs==c.eventData.prevTs&&this._prevReportSent.eventData.type==c.eventData.type)return void this._logger.debug(j,"#_onFilterReportAvailable() > Duplicate heartbeat report not sent for URL:\\n"+i);this._prevReportSent=c;var k=new f(i,e.GET);this._logger.debug(j,"#_onFilterReportAvailable() > "+k.url);var l=this,m=function(a){o.close(),h.callback&&h.callback.call(null)},n=function(a){o.close(),l._logger.warn(j,"#_onFilterReportAvailable() > Failed to send heartbeat report."),h.callback&&h.callback.call(null)};if(!this._quietMode&&!this._visitorOptedOut){var o=new g;o.addEventListener(d.SUCCESS,m,this),o.addEventListener(d.ERROR,n,this),o.load(k)}},c.prototype._onClockCheckStatusTick=function(a){function b(a){if(a.data){var b=new h(a.data.response,i._logger),c=b.parse();c?i._channel.trigger(new d(v,c)):i._logger.warn(j,"#_onClockCheckStatusTick() > Failed to parse the config. settings.")}n.close()}function c(a){i._logger.warn(j,"#_onClockCheckStatusTick() > Failed to obtain the config. settings."),n.close()}if(!this._isConfigured)return void this._logger.warn(j,"#_onClockCheckStatusTick() > Unable to send request: not configured.");if(!this._publisher)return void this._logger.warn(j,"#_onClockCheckStatusTick() > Publisher is NULL.");var i=this,k=this._publisher.replace(/[^a-zA-Z0-9]+/,"-").toLocaleLowerCase(),l=this._checkStatusServer+k+".xml?r="+(new Date).getTime(),m=new f(l,e.GET),n=new g;n.addEventListener(d.SUCCESS,b,this),n.addEventListener(d.ERROR,c,this),this._logger.debug(j,"#_onClockCheckStatusTick() > Get new settings from: "+l),n.load(m)},c.prototype._updateRequestProtocol=function(a,b){var c=a;return 0===c.indexOf("http://")?c=c.slice(7):0===c.indexOf("https://")&&(c=c.slice(8)),b?"https://"+c:"http://"+c},c.prototype._installEventListeners=function(){this._channel.on(r,this._onApiConfig,this),this._channel.on(s,this._onUpdateVisitorOptOut,this),this._channel.on(t,this._onFilterReportAvailable,this),this._channel.on(u,this._onClockCheckStatusTick,this)},c.prototype._uninstallEventListeners=function(){this._channel.off(null,null,this)};var j="ah::Network",k="tracking_server",l="check_status_server",m="publisher",n="quiet_mode",o="ssl",p="report",q="visitor_opt_out",r="api:config",s="api:update_visitor_optout",t="filter:data_available",u="clock:check_status.tick",v="net:check_status_complete";b.network.Network=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){if(!a)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._isDestroyed=!1,this._isBufferingInProgress=!1,this._reportBuffer={},this._tsHistory={},this._workQueue=new i,this._installEventListeners()}function d(a){var b=[];return a&&a.forEach(function(a){a.eventData.type()==k.EVENT_TYPE_PAUSE||a.eventData.type()==k.EVENT_TYPE_STALL?(!a.filterReport||a.eventData.duration()>u)&&b.push(a):b.push(a)}),b}function e(a){var b=-1,c=-1,d=[];return a.forEach(function(a){a.eventData.type()==k.EVENT_TYPE_START?a.assetData.type()==l.TYPE_MAIN_CONTENT?-1==b?b=d.push(a)-1:(a.eventData.prevTs(-1),d[b]=a):-1==c?c=d.push(a)-1:(a.eventData.prevTs(-1),d[c]=a):d.push(a)}),d}function f(a){var b=[];return a.forEach(function(c){if(c.eventData.type()==k.EVENT_TYPE_PLAY){if(c.eventData.duration()>t)b.push(c);else if(0==c.eventData.duration()&&c.assetData.type()==l.TYPE_MAIN_CONTENT){var d=g(a);d.indexOf(c)==d.length-1&&b.push(c)}}else b.push(c)}),b}function g(a){var b=[];return a.forEach(function(a){(a.eventData.type()==k.EVENT_TYPE_PLAY||a.eventData.type()==k.EVENT_TYPE_BUFFER||a.eventData.type()==k.EVENT_TYPE_START)&&b.push(a)}),b}var h=a.radio.Command,i=a.radio.CommandQueue,j=a.Event,k=b.model.EventDao,l=b.model.AssetDao;c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._logger.debug(w,"#destroy()"),this._uninstallEventListeners(),this.clear())},c.prototype.clear=function(){this._logger.debug(w,"#clear()"),this._workQueue.cancelAllCommands(),this._reportBuffer={},this._tsHistory={},this._isBufferingInProgress=!1},c.prototype.flush=function(){this._workQueue.addCommand(new h(this._flushBufferReport,this))},c.prototype._bufferReport=function(a){if(!this._isDestroyed){var b=a[q];if(b){var c=b.sessionData.sessionId();this._reportBuffer[c]=this._reportBuffer[c]||[],this._reportBuffer[c].push(b)}if(!this._isBufferingInProgress){this._isBufferingInProgress=!0;var d={};d[p]=!0,d[r]=1,this._channel.command(s,d)}}},c.prototype._flushBufferReport=function(){function a(a){if(a)for(var c=0;c<a.length;c++){var d=a[c],e=d.sessionData.sessionId();b._tsHistory[e]=b._tsHistory[e]||{};var f=d.eventData.type()+"."+(d.assetData.type()==l.TYPE_AD?d.assetData.adData().adId():d.assetData.videoId());b._tsHistory[e].hasOwnProperty(f)&&d.eventData.prevTs(b._tsHistory[e][f]),b._tsHistory[e][f]=d.eventData.ts()}}if(!this._isDestroyed){var b=this;for(var c in this._reportBuffer)if(this._reportBuffer.hasOwnProperty(c)){var g=f(e(d(this._reportBuffer[c])));a(g);for(var h=0;h<g.length;h++){var i=g[h],k={};k[q]=i,this._channel.trigger(new j(n,k))}}this._reportBuffer={};var m=this._channel.request(v),o=this._tsHistory[m]||{};this._tsHistory={},this._tsHistory[m]=o,this._isBufferingInProgress=!1}},c.prototype._onContextReportAvailable=function(a){var b=a.data;this._workQueue.addCommand(new h(this._bufferReport,this,[b]))},c.prototype._onClockFlushFilterTick=function(a){this.flush()},c.prototype._installEventListeners=function(){this._channel.on(m,this._onContextReportAvailable,this),this._channel.on(o,this._onClockFlushFilterTick,this)},c.prototype._uninstallEventListeners=function(){this._channel.off(null,null,this)};var m="context:report_available",n="filter:data_available",o="clock:flush_filter.tick",p="reset",q="report",r="repeat_count",s="clock:flush_filter.resume",t=250,u=250,v="session_id",w="ah::ReportFilter";b.filter.ReportFilter=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){this._onFail={fn:a,ctx:b}}var d=a.ErrorInfo;c.prototype.validateFields=function(a,b){if(!a)return this._fail("Data cannot be null");if(b)for(var c=0;c<b.length;c++){var d=b[c];switch(d){case"videoId":if(!a.hasOwnProperty("videoId"))return this._fail("The ID for the main video must be specified.");if("string"!=typeof a.videoId)return this._fail("The ID for the main video must be a String.");if(""===a.videoId)return this._fail("The ID for the main video cannot be an empty string.");break;case"streamType":if(!a.hasOwnProperty("streamType"))return this._fail("The stream type for the main video must be specified.");if("string"!=typeof a.streamType)return this._fail("The stream type for the main video must be a String.");if(""===a.streamType)return this._fail("The stream type for the main video cannot be an empty string.");break;case"videoLength":if(!a.hasOwnProperty("videoLength"))return this._fail("The length of the main video must be specified.");if("number"!=typeof a.videoLength)return this._fail("The length of the main video must be a Number.");if(isNaN(a.videoLength))return this._fail("The length of the main video cannot be NaN.");break;case"playhead":if(!a.hasOwnProperty("playhead"))return this._fail("The playhead for the main video must be specified.");if("number"!=typeof a.playhead)return this._fail("The playhead for the main video must be a Number.");if(isNaN(a.playhead))return this._fail("The playhead for the main video cannot be NaN.");break;case"playerName":if(!a.hasOwnProperty("playerName"))return this._fail("The player name for the main video must be specified.");if("string"!=typeof a.playerName)return this._fail("The player name for the main video must be a String.");if(""===a.playerName)return this._fail("The player name for the main video cannot be an empty string.");break;case"rsid":if(!a.hasOwnProperty("rsid"))return this._fail("account (rsid) is required and has to be set in the AppMeasurement instance.");if("string"!=typeof a.rsid)return this._fail("account (rsid) of the AppMeasurement instance must be a String.");if(""===a.rsid)return this._fail("account (rsid) of the AppMeasurement instance  cannot be an empty string.");break;case"trackingServer":if(!a.hasOwnProperty("trackingServer"))return this._fail("trackingServer is required and has to be set in the AppMeasurement instance.");if("string"!=typeof a.trackingServer)return this._fail("trackingServer of the AppMeasurement instance must be a String.");if(""===a.trackingServer)return this._fail("trackingServer of the AppMeasurement instance cannot be an empty string.");break;case"podPlayerName":if(!a.hasOwnProperty("podPlayerName"))return this._fail("The player name for the ad-break must be specified.");if("string"!=typeof a.podPlayerName)return this._fail("The player name for the ad-break must be a String.");if(""===a.podPlayerName)return this._fail("The player name for the ad-break cannot be an empty string.");break;case"podPosition":if(!a.hasOwnProperty("podPosition"))return this._fail("Position (index) of the ad-break must be specified.");if("number"!=typeof a.podPosition)return this._fail("Position (index) of the ad-break must be a Number.");if(isNaN(a.podPosition))return this._fail("Position (index) of the ad-break cannot be NaN.");break;case"adId":if(!a.hasOwnProperty("adId"))return this._fail("The ad ID must be specified.");if("string"!=typeof a.adId)return this._fail("The ad ID must be a String.");if(""===a.adId)return this._fail("The ad ID cannot be an empty string.");break;case"adPosition":if(!a.hasOwnProperty("adPosition"))return this._fail("Position (index) of the ad must be specified.");if("number"!=typeof a.adPosition)return this._fail("Position (index) of the ad must be a Number.");if(isNaN(a.adPosition))return this._fail("Position (index) of the ad cannot be NaN.");break;case"chapterPosition":if(!a.hasOwnProperty("chapterPosition"))return this._fail("Position (index) of the chapter must be specified.");if("number"!=typeof a.chapterPosition)return this._fail("Position (index) of the chapter must be a Number.");if(isNaN(a.chapterPosition))return this._fail("Position (index) of the chapter cannot be NaN.");break;case"chapterOffset":if(!a.hasOwnProperty("chapterOffset"))return this._fail("Chapter start-time (offset) must be specified.");if("number"!=typeof a.chapterOffset)return this._fail("Chapter start-time (offset) must be a Number.");if(isNaN(a.chapterOffset))return this._fail("Chapter start-time (offset) cannot be NaN.");break;case"chapterLength":if(!a.hasOwnProperty("chapterLength"))return this._fail("The length of the chapter must be specified.");if("number"!=typeof a.chapterLength)return this._fail("The length of the chapter must be a Number.");if(isNaN(a.chapterLength))return this._fail("The length of the chapter cannot be NaN.");break;default:return this._fail("Unable to validate unknown parameter: "+d)}}return!0},c.prototype._fail=function(a){var b=new d("Invalid input data",a);return this._onFail.fn&&this._onFail.fn.call(this._onFail.ctx,b),!1},b.context.InputDataValidator=c}(a.ADB.va,b),function(a,b){"use strict";function c(a,b){if(!b)throw new Error("Reference to the logger object cannot be NULL");if(this._logger=b,!a)throw new Error("Reference to the context object cannot be NULL");this._context=a}var d=b.model.Report;\nc.prototype.createReportForItem=function(a){return this._logger.debug(e,"Creating report for item: "+a.eventData.type()),new d(this._context._adobeAnalyticsData,this._context._userData,this._context._aamData,this._context._serviceProviderData,this._context._sessionData,a)};var e="ah::ReportFactory";b.context.ReportFactory=c}(a.ADB.core,b),function(a,b,c,d){"use strict";function e(a,b){if(!a)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._lastInBandItem=null,this._autoComputedStartupTime=0,this._reportingInterval=fa,this._assetData=null,this._streamData=null,this._qosData=null,this._sessionData=null,this._cuserData=null,this._adobeAnalyticsData=new j,this._serviceProviderData=new k,this._userData=new l,this._aamData=new m,this._isTrackingSessionActive=!1,this._isVideoComplete=!1,this._activeAssetId=null,this._isDestroyed=!1,this._doNotOverrideEventDuration=!1,this._reportFactory=new u(this,this._logger),this._inputDataValidator=new v(function(a){this._logger.error(w,a.getMessage()+" | "+a.getDetails()),this._channel.trigger(new h(y,a))},this),this._stashedChapterData=null,this._stashedAdData=null,this._trackExternalErrors=!0,this._installEventListeners()}var f=c.md5,g=c.ObjectUtils,h=a.Event,i=d.model.SessionDao,j=d.model.AdobeAnalyticsDao,k=d.model.ServiceProviderDao,l=d.model.UserDao,m=d.model.AudienceManagerDao,n=d.model.EventDao,o=d.model.AssetDao,p=d.model.StreamDao,q=d.model.QoSDao,r=d.model.AdDao,s=d.model.ChapterDao,t=d.model.TrackItem,u=d.context.ReportFactory,v=d.context.InputDataValidator;e.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._logger.debug(w,"#destroy()"),this._uninstallEventListeners())},e.prototype._onApiAnalyticsStart=function(a){this._logger.debug(w,"#_onApiAnalyticsStart()");var b=a.data;if(this._checkCall("_onApiAnalyticsStart")&&this._inputDataValidator.validateFields(b,["playhead"])){this._userData.visitorId(b.vid),this._userData.analyticsVisitorId(b.aid),this._userData.marketingCloudVisitorId(b.mid),this._aamData.audienceManagerBlob(b.blob),this._aamData.audienceManagerLocationHint(b.loc_hint),b.customerIDs&&(this._cuserData=b.customerIDs),this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_AA_START,b.playhead,null,b._eventData[E]);c.assetData.adData(null),c.assetData.type(o.TYPE_MAIN_CONTENT),this._cuserData=null,this._sendHit(c)}},e.prototype._onApiAnalyticsAdStart=function(a){this._logger.debug(w,"#_onApiAnalyticsAdStart()");var b=a.data;if(this._checkCall("_onApiAnalyticsAdStart")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_AA_AD_START,b.playhead,null,b._eventData[E]);this._sendHit(c)}},e.prototype._onApiVideoLoad=function(a){var b=a.data;this._logger.debug(w,"#_onApiVideoLoad(rsid="+b.rsid+", aa_trackingServer="+b.trackingServer+")"),this._resetInternalState(),this._inputDataValidator.validateFields(b,["rsid","trackingServer"])&&(this._sessionData.sessionId(this._generateSessionId()),this._isTrackingSessionActive=!0)},e.prototype._onApiVideoUnload=function(a){return this._logger.debug(w,"#_onApiVideoUnload()"),this._isTrackingSessionActive?void(this._isTrackingSessionActive=!1):void this._logger.debug(w,"#_onApiVideoUnload() > No active tracking session.")},e.prototype._onApiVideoStart=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiVideoStart(id="+b.videoId+", name="+b.videoName+", length="+b.videoLength+", type="+b.streamType+", playerName="+b.playerName+")"),this._checkCall("_onApiVideoStart")&&this._inputDataValidator.validateFields(b,["videoId","streamType","videoLength","playhead","playerName"])){this._adobeAnalyticsData.reportSuiteId(b.rsid),this._adobeAnalyticsData.trackingServer(b.trackingServer),this._adobeAnalyticsData.ssl(Number(b.useSsl)),this._serviceProviderData.ovp(b.ovp),this._serviceProviderData.sdk(b.sdk),this._serviceProviderData.channel(b.channel),this._serviceProviderData.libVersion(b.version),this._serviceProviderData.apiLevel(b.apiLvl),this._activeAssetId=b.videoId,this._serviceProviderData.playerName(b.playerName),this._assetData.videoId(this._activeAssetId),this._assetData.length(b.videoLength),this._assetData.type(o.TYPE_MAIN_CONTENT),this._assetData.publisher(b.publisher),this._assetData.name(b.videoName),this._streamData.type(b.streamType),this._updateQoSInfo(b);var c=b.metaNielsen?g.merge(b.metaVideo,b.metaNielsen):b.metaVideo,d=new t(this,n.EVENT_TYPE_START,b.playhead,c,b._eventData[E]);this._sendHit(d)}},e.prototype._onApiVideoResume=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiVideoResume(id="+b.videoId+", name="+b.videoName+", length="+b.videoLength+", type="+b.streamType+", playerName="+b.playerName+")"),this._checkCall("_onApiVideoResume")&&this._inputDataValidator.validateFields(b,["videoId","streamType","videoLength","playhead","playerName"])){this._activeAssetId=b.videoId,this._assetData.videoId(this._activeAssetId),this._assetData.length(b.videoLength),this._assetData.type(o.TYPE_MAIN_CONTENT),this._assetData.name(b.videoName),this._streamData.type(b.streamType);var c=new t(this,n.EVENT_TYPE_RESUME,b.playhead,null,b._eventData[E]);this._sendHit(c)}},e.prototype._onApiVideoComplete=function(a){this._logger.debug(w,"#_onApiVideoComplete()");var b=a.data;if(this._checkCall("_onApiVideoComplete")){var c=new t(this,n.EVENT_TYPE_COMPLETE,this._assetData.length(),null,b._eventData[E]);this._sendHit(c),this._isVideoComplete=!0}},e.prototype._onApiPlay=function(a){this._logger.debug(w,"#_onApiPlay()");var b=a.data;if(this._checkCall("_onApiPlay")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_PLAY,b.playhead,null,b._eventData[E]);this._sendHit(c)}},e.prototype._onApiPause=function(a){this._logger.debug(w,"#_onApiPause()");var b=a.data;if(this._checkCall("_onApiPause")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=b.playheadStalled?n.EVENT_TYPE_STALL:n.EVENT_TYPE_PAUSE,d=new t(this,c,b.playhead,null,b._eventData[E]);b._eventData.hasOwnProperty(F)&&(d.filterReport=b._eventData[F]),this._sendHit(d)}},e.prototype._onApiBufferStart=function(a){this._logger.debug(w,"#_onApiBufferStart()");var b=a.data;if(this._checkCall("_onApiBufferStart")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_BUFFER,b.playhead,null,b._eventData[E]);this._sendHit(c)}},e.prototype._onApiSeekStart=function(a){this._logger.debug(w,"#_onApiSeekStart()"),this._checkCall("_onApiSeekStart")&&(this._stashedAdData=this._assetData.adData(),this._stashedChapterData=this._assetData.chapterData(),this._assetData.adData(null),this._assetData.type(o.TYPE_MAIN_CONTENT),this._activeAssetId=this._assetData.videoId(),this._assetData.chapterData(null))},e.prototype._onApiSeekComplete=function(a){this._logger.debug(w,"#_onApiSeekComplete()");var b=a.data;if(this._checkCall("_onApiSeekComplete")&&this._inputDataValidator.validateFields(b,["playhead"])){if(b.isInAd){if(!this._inputDataValidator.validateFields(b,["adId","adPosition","podPosition","podPlayerName"]))return;var c=f(this._assetData.videoId())+"_"+b.podPosition;if(this._stashedAdData&&this._stashedAdData.podId()==c&&parseInt(this._stashedAdData.podPosition(),10)==b.adPosition)this._assetData.adData(this._stashedAdData),this._activeAssetId=this._stashedAdData.adId();else if(!this._assetData.adData()){this._activeAssetId=b.adId;var d=new r;d.adId(this._activeAssetId),d.adName(b.adName),d.adLength(b.adLength),d.podId(c),d.resolver(b.podPlayerName),d.podPosition(b.podPosition+""),d.podName(b.podName),d.podOffset(b.podSecond),d.sid(this._generateSessionId()),this._assetData.adData(d)}this._assetData.type(o.TYPE_AD)}else this._assetData.adData(null),this._assetData.type(o.TYPE_MAIN_CONTENT),this._activeAssetId=this._assetData.videoId();if(b.isInChapter){if(!this._inputDataValidator.validateFields(b,["chapterPosition","chapterLength","chapterOffset"]))return;if(this._stashedChapterData&&b.chapterPosition==this._stashedChapterData.position())this._assetData.chapterData(this._stashedChapterData);else if(!this._assetData.chapterData()){var e=new s;e.id(f(this._assetData.videoId())+"_"+b.chapterPosition),e.name(b.chapterName),e.length(b.chapterLength),e.position(b.chapterPosition),e.offset(b.chapterOffset),e.sid(this._generateSessionId()),this._assetData.chapterData(e)}}else this._assetData.chapterData(null);this._stashedAdData=null,this._stashedChapterData=null}},e.prototype._onApiAdStart=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiAdStart(id="+b.adId+", player_name="+b.podPlayerName+", parent_name="+this._assetData.videoId()+", pod_pos="+b.adPosition+")"),this._checkCall("_onApiAdStart")&&this._inputDataValidator.validateFields(b,["playhead","podPosition","podPlayerName","adId","adPosition"])){this._activeAssetId=b.adId;var c=new r;c.adId(this._activeAssetId),c.adName(b.adName),c.adLength(b.adLength),c.resolver(b.podPlayerName),c.podId(f(this._assetData.videoId())+"_"+b.podPosition),c.podPosition(b.adPosition+""),c.podName(b.podName),c.podOffset(b.podSecond),c.sid(this._generateSessionId()),this._assetData.adData(c),this._assetData.type(o.TYPE_AD),this._updateQoSInfo(b);var d=g.merge(b.metaVideo,b.metaAd);d=b.metaNielsen?g.merge(d,b.metaNielsen):d;var e=new t(this,n.EVENT_TYPE_START,b.playhead,d,b._eventData[E]);this._sendHit(e)}},e.prototype._onApiAdComplete=function(a){this._logger.debug(w,"#_onApiAdComplete()");var b=a.data;if(this._checkCall("_onApiAdComplete")&&this._inputDataValidator.validateFields(b,["playhead"])){if(this._assetData.type()!=o.TYPE_AD)return void this._logger.warn(w,"#_onApiAdComplete() > Ignoring the ad complete event, because we are no longer in an ad.");this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_COMPLETE,b.playhead,null,b._eventData[E]);this._sendHit(c),this._assetData.adData(null),this._assetData.type(o.TYPE_MAIN_CONTENT),this._activeAssetId=this._assetData.videoId()}},e.prototype._onApiChapterStart=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiChapterStart(name="+b.chapterName+", length="+b.chapterLength+", position="+b.chapterPosition+", chapter_offset="+b.chapterOffset+")"),this._checkCall("_onApiChapterStart")&&this._inputDataValidator.validateFields(b,["playhead","chapterPosition","chapterOffset","chapterLength"])){var c=new s;c.id(f(this._assetData.videoId())+"_"+b.chapterPosition),c.name(b.chapterName),c.length(b.chapterLength),c.position(b.chapterPosition),c.offset(b.chapterOffset),c.sid(this._generateSessionId()),this._assetData.chapterData(c),this._updateQoSInfo(b);var d=g.merge(b.metaVideo,b.metaChapter),e=new t(this,n.EVENT_TYPE_CHAPTER_START,b.playhead,d,b._eventData[E]);e.assetData.adData(null),e.assetData.type(o.TYPE_MAIN_CONTENT),this._sendHit(e)}},e.prototype._onApiChapterComplete=function(a){this._logger.debug(w,"#_onApiChapterComplete()");var b=a.data;if(this._checkCall("_onApiChapterComplete")&&this._inputDataValidator.validateFields(b,["playhead"])){if(!this._assetData.chapterData())return void this._logger.warn(w,"#_onApiChapterComplete() > Ignoring the chapter complete event, because we are no longer in a chapter.");this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_CHAPTER_COMPLETE,b.playhead,null,b._eventData[E]);c.assetData.adData(null),c.assetData.type(o.TYPE_MAIN_CONTENT),this._sendHit(c),this._assetData.chapterData(null)}},e.prototype._onApiBitrateChange=function(a){this._logger.debug(w,"#_onApiBitrateChange()");var b=a.data;if(this._checkCall("_onApiBitrateChange")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_BITRATE_CHANGE,b.playhead,null,b._eventData[E]);this._sendHit(c)}},e.prototype._onApiTrackError=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiTrackError(source="+b._eventData.source+", err_id="+b._eventData.error_id+")"),!this._isTrackingSessionActive)return void this._logger.warn(w,"#_onApiTrackError() > No active tracking session.");if(this._trackExternalErrors||b._eventData.source===x){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_ERROR,0,null,b._eventData[E]);c.eventData.id(b._eventData.error_id),c.eventData.source(b._eventData.source),this._sendHit(c)}},e.prototype._onApiTrackInternalError=function(a){var b=a.data;this._logger.debug(w,"#_onApiTrackInternalError(source="+b.source+", err_id="+b.error_id+")"),this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_ERROR,0);c.eventData.id(b.error_id),c.eventData.source(b.source),this._sendHit(c)},e.prototype._onApiQuantumEnd=function(a){this._logger.debug(w,"#_onApiQuantumEnd(interval="+this._channel.request(B)+")");var b=a.data;this._checkCall("_onApiQuantumEnd")&&this._inputDataValidator.validateFields(b,["playhead"])&&(this._lastInBandItem&&(this._lastInBandItem.eventData.playhead(b.playhead),this._updateQoSInfo(b),this._lastInBandItem.qosData.bitrate(this._qosData.bitrate()),this._lastInBandItem.qosData.fps(this._qosData.fps()),this._lastInBandItem.qosData.droppedFrames(this._qosData.droppedFrames()),this._lastInBandItem.qosData.startupTime(this._qosData.startupTime())),this._sendHit(this._lastInBandItem))},e.prototype._onNetworkCheckStatusComplete=function(a){var b=a.data;this._trackExternalErrors=b[I],this._reportingInterval=b[J],this._reportingInterval||(this._reportingInterval=fa),this._logger.debug(w,"#_onNetworkCheckStatusComplete(track_ext_err="+this._trackExternalErrors+")")},e.prototype._onResetSessionId=function(a){var b=this._generateSessionId();this._sessionData=new i,this._sessionData.sessionId(b),this._logger.debug(w,"#_resetSessionId(new sessionId="+b+")")},e.prototype._installEventListeners=function(){this._channel.on(K,this._onApiAnalyticsStart,this),this._channel.on(L,this._onApiAnalyticsAdStart,this),this._channel.on(M,this._onApiVideoLoad,this),this._channel.on(N,this._onApiVideoUnload,this),this._channel.on(O,this._onApiVideoStart,this),this._channel.on(P,this._onApiVideoComplete,this),this._channel.on(Q,this._onApiVideoResume,this),this._channel.on(R,this._onApiAdStart,this),this._channel.on(S,this._onApiAdComplete,this),this._channel.on(T,this._onApiPlay,this),this._channel.on(U,this._onApiPause,this),this._channel.on(V,this._onApiBufferStart,this),this._channel.on(W,this._onApiSeekStart,this),this._channel.on(X,this._onApiSeekComplete,this),this._channel.on(Y,this._onApiChapterStart,this),this._channel.on(Z,this._onApiChapterComplete,this),this._channel.on(aa,this._onApiBitrateChange,this),this._channel.on($,this._onApiTrackError,this),this._channel.on(_,this._onApiTrackInternalError,this),this._channel.on(ba,this._onApiQuantumEnd,this),this._channel.on(da,this._onNetworkCheckStatusComplete,this),this._channel.on(D,this._onResetSessionId,this),this._channel.reply(C,function(){return this._sessionData&&this._sessionData.sessionId()?this._sessionData.sessionId():null},this)},e.prototype._uninstallEventListeners=function(){this._channel.off(null,null,this)},e.prototype._resetInternalState=function(){this._logger.debug(w,"#_resetInternalState()"),this._isTrackingSessionActive=!1,this._isVideoComplete=!1,this._autoComputedStartupTime=0,this._streamData=new p,this._qosData=new q,this._sessionData=new i,this._assetData=new o,this._cuserData=null,this._stashedAdData=null,this._stashedChapterData=null,this._lastInBandItem=null},e.prototype._generateSessionId=function(){return""+(new Date).getTime()+Math.floor(1e9*Math.random())},e.prototype._updateQoSInfo=function(a){this._qosData.bitrate(a.bitrate||0),this._qosData.fps(a.fps||0),this._qosData.droppedFrames(a.droppedFrames||0),null==a.startupTime||isNaN(a.startupTime)?(this._qosData.startupTime(this._autoComputedStartupTime),this._qosData.isStartupTimeOverridden=!1):(this._qosData.startupTime(a.startupTime),this._qosData.isStartupTimeOverridden=!0)},e.prototype._checkCall=function(a){return this._isTrackingSessionActive?this._isVideoComplete?(this._logger.warn(w,"#"+a+"() > The video content already completed."),!1):!0:(this._logger.warn(w,"#"+a+"() > No active tracking session."),!1)},e.prototype._updateLastInBandItem=function(a){var b=(new Date).getTime(),c=1e3*Math.abs(a.eventData.playhead()-this._lastInBandItem.eventData.playhead()),d=Math.abs(b-this._lastInBandItem.eventData.ts());this._lastInBandItem.eventData.type()!=n.EVENT_TYPE_PAUSE&&this._lastInBandItem.eventData.type()!=n.EVENT_TYPE_STALL?(d*ea>=c||this._doNotOverrideEventDuration)&&d<=this._reportingInterval*ea*1e3?this._lastInBandItem.eventData.duration(b-this._lastInBandItem.eventData.ts()):(this._logger.warn(w,"[WARNING] Resetting duration in lastInBandItem to 0. playheadDelta:"+c+" tsDelta:"+d+" event type:"+this._lastInBandItem.eventData.type()),this._lastInBandItem.eventData.duration(0)):this._lastInBandItem.eventData.duration(b-this._lastInBandItem.eventData.ts()),this._doNotOverrideEventDuration&&(this._doNotOverrideEventDuration=!1),this._lastInBandItem.eventData.ts(b),this._lastInBandItem.eventData.playhead(a.eventData.playhead()),this._lastInBandItem.qosData.startupTime(a.qosData.startupTime()),this._lastInBandItem.qosData.isStartupTimeOverridden=a.qosData.isStartupTimeOverridden},e.prototype._sendHit=function(a){function b(a){var b=c._reportFactory.createReportForItem(a);b.qosData.isStartupTimeOverridden||b.qosData.startupTime(c._autoComputedStartupTime);var e={};e[G]=b,c._channel.trigger(new h(ca,e)),(b.eventData.type()==n.EVENT_TYPE_PLAY||b.eventData.type()==n.EVENT_TYPE_BUFFER||b.eventData.type()==n.EVENT_TYPE_START)&&(d={},d[H]=!0,c._channel.command(z,d))}var c=this,d={};switch(a.eventData.type()){case n.EVENT_TYPE_START:case n.EVENT_TYPE_PLAY:case n.EVENT_TYPE_PAUSE:case n.EVENT_TYPE_STALL:case n.EVENT_TYPE_BUFFER:this._lastInBandItem&&(this._updateLastInBandItem(a),this._lastInBandItem.eventData.type()==n.EVENT_TYPE_START&&this._lastInBandItem.assetData.type()==o.TYPE_MAIN_CONTENT&&(this._autoComputedStartupTime+=this._lastInBandItem.eventData.duration()),a!=this._lastInBandItem&&b(this._lastInBandItem)),b(a),this._lastInBandItem=a,d={},d[H]=!0,this._channel.command(z,d);break;case n.EVENT_TYPE_COMPLETE:this._lastInBandItem&&(a.assetData.type()==o.TYPE_AD&&(this._doNotOverrideEventDuration=!0),this._updateLastInBandItem(a),b(this._lastInBandItem)),b(a),a.assetData.type()==o.TYPE_MAIN_CONTENT?(this._lastInBandItem=null,d={},d[H]=!0,this._channel.command(A,d)):a.assetData.type()==o.TYPE_AD&&(this._lastInBandItem.assetData.adData(null),this._lastInBandItem.assetData.type(o.TYPE_MAIN_CONTENT),this._doNotOverrideEventDuration=!0);break;case n.EVENT_TYPE_CHAPTER_START:case n.EVENT_TYPE_CHAPTER_COMPLETE:this._lastInBandItem&&(this._updateLastInBandItem(a),b(this._lastInBandItem)),b(a),this._lastInBandItem&&(this._lastInBandItem.assetData.chapterData(a.eventData.type()==n.EVENT_TYPE_CHAPTER_START?new s(a.assetData.chapterData()):null),this._lastInBandItem.eventData.duration(0),b(this._lastInBandItem));break;default:b(a)}};var w="ah::Context",x="sourceErrorSDK",y="error",z="clock:reporting.resume",A="clock:reporting.pause",B="reporting_interval",C="session_id",D="reset_session_id",E="callback",F="filter_report",G="report",H="reset",I="track_external_errors",J="reporting_interval",K="api:aa_start",L="api:aa_ad_start",M="api:video_load",N="api:video_unload",O="api:video_start",P="api:video_complete",Q="api:video_resume",R="api:ad_start",S="api:ad_complete",T="api:play",U="api:pause",V="api:buffer_start",W="api:seek_start",X="api:seek_complete",Y="api:chapter_start",Z="api:chapter_complete",$="api:track_error",_="api:track_internal_error",aa="api:bitrate_change",ba="api:quantum_end",ca="context:report_available",da="net:check_status_complete",ea=1.5,fa=10;d.context.Context=e}(a.ADB.core,a.ADB.va,a.ADB.va.utils,b),function(a){"use strict";function b(a,b){this.trackingServer=a,this.publisher=b,this.ssl=!1,this.ovp=c,this.sdk=c,this.quietMode=!1,this.debugLogging=!1,this.__isPrimetime=!1,this.__psdkVersion=null}var c="unknown";a.AdobeHeartbeatPluginConfig=b}(b),function(a){"use strict";function b(){}b.prototype.onError=function(a){},a.AdobeHeartbeatPluginDelegate=b}(b),function(a,b,c){"use strict";function d(a){d.__super__.constructor.call(this,q),this._radio=new i(this._logger),this._channel=this._radio.channel(y),this._delegate=a,this._context=new l(this._channel,this._logger),this._filter=new m(this._channel,this._logger),this._network=new n(this._channel,this._logger),this._setupDataResolver()}var e=a.Event,f=a.Trigger,g=a.plugin.BasePlugin,h=a.plugin.ParamMapping,i=a.radio.Radio,j=b.ErrorInfo,k=b.Version,l=c.context.Context,m=c.filter.ReportFilter,n=c.network.Network,o=c.clock.Clock,p=c.AdobeHeartbeatPluginConfig;a.extend(d,g),d.prototype.configure=function(a){if(!a)throw new Error("Reference to the configuration data cannot be NULL.");if(!(a instanceof p))throw new Error("Expected config data to be instance of AdobeHeartbeatPluginConfig.");this._config=a,this._config.debugLogging?this._logger.enable():this._logger.disable(),this._logger.debug(this._logTag,"#configure({trackingServer="+this._config.trackingServer+", publisher="+this._config.publisher+", quietMode="+this._config.quietMode+", ssl="+this._config.ssl+"})");var b=this._config.trackingServer+"/settings/",c={};c[ba]=this._config.trackingServer,c[ca]=b,c[da]=this._config.publisher,c[ea]=this._config.quietMode,c[fa]=this._config.ssl,this._channel.trigger(new e(ja,c)),this._isConfigured=!0},d.prototype.bootstrap=function(a){d.__super__.bootstrap.call(this,a),this._channel.on(z,this._onError,this),this._clock=new o(this._pluginManager,this._channel,this._logger),this._channel.command(Ea),this._channel.trigger(new e(La)),this._registerCommands(),this._registerBehaviours()},d.prototype._teardown=function(){this._logger.debug(this._logTag,"#_teardown()"),this._radio.shutdown(),this._context.destroy(),this._clock.destroy(),this._filter.destroy(),this._network.destroy()},d.prototype._canProcess=function(){return this._isConfigured?this._errorInfo?(this._logger.error(this._logTag,"_canProcess() > Plugin in ERROR state."),!1):d.__super__._canProcess.call(this):(this._logger.error(this._logTag,"_canProcess() > Plugin not configured."),!1)},d.prototype._cmdAnalyticsError=function(a){this._errorInfo||(this._errorInfo=new j("Internal error","AdobeAnalyticsPlugin is in ERROR state."),this._trigger(z,this._errorInfo),this._delegate&&this._delegate.onError(this._errorInfo))},d.prototype._cmdAnalyticsStart=function(a){if(this._canProcess()){var b={};b[ga]=a.visitorOptedOut,this._channel.trigger(new e(ka,b)),this._channel.trigger(new e(ha,a))}},d.prototype._cmdAnalyticsAdStart=function(a){this._canProcess()&&this._channel.trigger(new e(ia,a))},d.prototype._cmdVideoLoad=function(a){this._errorInfo=null,this._canProcess()&&(this._isTrackingSessionActive&&this._channel.trigger(new e(ma,a)),this._isTrackingSessionActive=!1,this._isPaused=!0,this._isSeeking=!1,this._isBuffering=!1,this._isVideoIdle=!1,this._filter.clear(),this._channel.trigger(new e(la,a)),this._isTrackingSessionActive=!0)},d.prototype._cmdVideoUnload=function(a){this._errorInfo=null,this._canProcess()&&(this._channel.trigger(new e(ma,a)),this._filter.flush(),this._runReportingTimer(!1),this._runFlushFilterTimer(!1),this._runIdleTimer(!1),this._isTrackingSessionActive=!1)},d.prototype._cmdVideoStart=function(a){this._canProcess()&&this._channel.trigger(new e(na,a))},d.prototype._cmdVideoComplete=function(a){this._canProcess()&&this._channel.trigger(new e(oa,a))},d.prototype._cmdVideoResume=function(a){this._canProcess()&&this._channel.trigger(new e(pa,a))},d.prototype._cmdPlay=function(a){this._canProcess()&&(this._isPaused=!1,this._resumePlaybackIfPossible(a))},d.prototype._cmdPause=function(a){this._canProcess()&&(this._channel.trigger(new e(ta,a)),this._isPaused=!0,this._runIdleTimer(!0))},d.prototype._cmdAdStart=function(a){this._canProcess()&&(this._channel.trigger(new e(qa,a)),this._resumePlaybackIfPossible(a))},d.prototype._cmdAdComplete=function(a){this._canProcess()&&(this._channel.trigger(new e(ra,a)),a.isInAdBreak||this._resumePlaybackIfPossible(a))},d.prototype._cmdBufferStart=function(a){this._canProcess()&&(this._channel.trigger(new e(ua,a)),this._isBuffering=!0,this._runIdleTimer(!0))},d.prototype._cmdBufferComplete=function(a){this._canProcess()&&(this._isBuffering=!1,this._resumePlaybackIfPossible(a))},d.prototype._cmdSeekStart=function(a){this._canProcess()&&(this._channel.trigger(new e(va,a)),this._channel.trigger(new e(ta,a)),this._isSeeking=!0,this._runIdleTimer(!0))},d.prototype._cmdSeekComplete=function(a){this._canProcess()&&(this._channel.trigger(new e(wa,a)),this._isSeeking=!1,this._resumePlaybackIfPossible(a))},d.prototype._cmdChapterStart=function(a){this._canProcess()&&this._channel.trigger(new e(xa,a))},d.prototype._cmdChapterComplete=function(a){this._canProcess()&&this._channel.trigger(new e(ya,a))},d.prototype._cmdBitrateChange=function(a){this._canProcess()&&this._channel.trigger(new e(Ba,a))},d.prototype._cmdTrackError=function(a){this._canProcess()&&this._channel.trigger(new e(za,a))},d.prototype._cmdClockReportingTick=function(a){this._canProcess()&&this._channel.trigger(new e(Ca,a))},d.prototype._cmdIdleTick=function(a){this._canProcess()&&(this._isVideoIdle=!0,this._trigger(V),this._filter.flush(),this._runReportingTimer(!1),this._runFlushFilterTimer(!1),this._runIdleTimer(!1),this._trigger(T))},d.prototype._onError=function(a){this._errorInfo=a.data;var b={};b[_]=Da,b[aa]=this._errorInfo.getMessage()+"|"+this._errorInfo.getDetails(),this._channel.trigger(new e(Aa,b)),this._runReportingTimer(!1),this._trigger(z,this._errorInfo),this._delegate&&this._delegate.onError(this._errorInfo)},d.prototype._runIdleTimer=function(a){var b={};b[$]=!0,a?this._channel.command(Ja,b):this._channel.command(Ka,b)},d.prototype._runFlushFilterTimer=function(a){var b={};b[$]=!0,a?this._channel.command(Ha,b):this._channel.command(Ia,b)},d.prototype._runReportingTimer=function(a){var b={};b[$]=!0,a?this._channel.command(Fa,b):this._channel.command(Ga,b)},d.prototype._registerCommands=function(){this._pluginManager.comply(this,"handleAnalyticsError",this._cmdAnalyticsError),this._pluginManager.comply(this,"handleAnalyticsStart",this._cmdAnalyticsStart),this._pluginManager.comply(this,"handleAnalyticsAdStart",this._cmdAnalyticsAdStart),this._pluginManager.comply(this,"handleVideoLoad",this._cmdVideoLoad),this._pluginManager.comply(this,"handleVideoUnload",this._cmdVideoUnload),this._pluginManager.comply(this,"handleVideoStart",this._cmdVideoStart),this._pluginManager.comply(this,"handleVideoComplete",this._cmdVideoComplete),this._pluginManager.comply(this,"handleVideoResume",this._cmdVideoResume),this._pluginManager.comply(this,"handlePlay",this._cmdPlay),this._pluginManager.comply(this,"handlePause",this._cmdPause),this._pluginManager.comply(this,"handleAdStart",this._cmdAdStart),this._pluginManager.comply(this,"handleAdComplete",this._cmdAdComplete),this._pluginManager.comply(this,"handleBufferStart",this._cmdBufferStart),this._pluginManager.comply(this,"handleBufferComplete",this._cmdBufferComplete),this._pluginManager.comply(this,"handleSeekStart",this._cmdSeekStart),this._pluginManager.comply(this,"handleSeekComplete",this._cmdSeekComplete),this._pluginManager.comply(this,"handleChapterStart",this._cmdChapterStart),this._pluginManager.comply(this,"handleChapterComplete",this._cmdChapterComplete),this._pluginManager.comply(this,"handleBitrateChange",this._cmdBitrateChange),this._pluginManager.comply(this,"handleTrackError",this._cmdTrackError),this._pluginManager.comply(this,"handleClockReportingTick",this._cmdClockReportingTick),this._pluginManager.comply(this,"handleIdleTick",this._cmdIdleTick)},d.prototype._registerBehaviours=function(){this._pluginManager.registerBehaviour(new f(t,C),this,"handleVideoLoad",[new h(s,"rsid","rsid"),new h(s,"tracking_server","trackingServer")]),this._pluginManager.registerBehaviour(new f(t,D),this,"handleVideoUnload"),this._pluginManager.registerBehaviour(new f(t,E),this,"handleVideoStart",[new h(t,"video.id","videoId"),new h(t,"video.name","videoName"),new h(t,"video.length","videoLength"),new h(t,"video.playhead","playhead"),new h(t,"video.playerName","playerName"),new h(t,"video.streamType","streamType"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime"),new h(s,"rsid","rsid"),new h(s,"tracking_server","trackingServer"),new h(s,"channel","channel"),new h(s,"meta.video.*","metaVideo"),new h(s,"ssl","useSsl"),new h(u,"meta","metaNielsen"),new h(r,"publisher","publisher"),new h(r,"sdk","sdk"),new h(r,"ovp","ovp"),new h(r,"version","version"),new h(r,"api_level","apiLvl")]),this._pluginManager.registerBehaviour(new f(t,G),this,"handleVideoComplete",[new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,F),this,"handleVideoResume",[new h(t,"video.id","videoId"),new h(t,"video.name","videoName"),new h(t,"video.length","videoLength"),new h(t,"video.playhead","playhead"),new h(t,"video.playerName","playerName"),new h(t,"video.streamType","streamType")]),this._pluginManager.registerBehaviour(new f(t,H),this,"handlePlay",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,I),this,"handlePause",[new h(t,"video.playhead","playhead"),new h(t,"video.playheadStalled","playheadStalled"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,J),this,"handleAdStart",[new h(t,"video.playhead","playhead"),new h(t,"ad.id","adId"),new h(t,"ad.name","adName"),new h(t,"ad.length","adLength"),new h(t,"ad.position","adPosition"),new h(t,"pod.name","podName"),new h(t,"pod.playerName","podPlayerName"),new h(t,"pod.position","podPosition"),new h(t,"pod.startTime","podSecond"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime"),new h(s,"meta.video.*","metaVideo"),new h(s,"meta.ad.*","metaAd"),new h(u,"meta","metaNielsen")]),this._pluginManager.registerBehaviour(new f(t,K),this,"handleAdComplete",[new h(t,"video.playhead","playhead"),new h(t,"ad.isInAdBreak","isInAdBreak"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,L),this,"handleBufferStart",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,M),this,"handleBufferComplete",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,N),this,"handleSeekStart",[new h(t,"video.playhead","playhead")]),this._pluginManager.registerBehaviour(new f(t,O),this,"handleSeekComplete",[new h(t,"video.playhead","playhead"),new h(t,"ad.isInAd","isInAd"),new h(t,"ad.id","adId"),new h(t,"ad.position","adPosition"),new h(t,"pod.playerName","podPlayerName"),new h(t,"pod.position","podPosition"),new h(t,"chapter.isInChapter","isInChapter"),new h(t,"chapter.position","chapterPosition"),new h(t,"chapter.name","chapterName"),new h(t,"chapter.length","chapterLength"),new h(t,"chapter.startTime","chapterOffset"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),\nthis._pluginManager.registerBehaviour(new f(t,P),this,"handleChapterStart",[new h(t,"video.playhead","playhead"),new h(t,"chapter.position","chapterPosition"),new h(t,"chapter.name","chapterName"),new h(t,"chapter.length","chapterLength"),new h(t,"chapter.startTime","chapterOffset"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime"),new h(s,"meta.video.*","metaVideo"),new h(s,"meta.chapter.*","metaChapter"),new h(u,"meta","metaNielsen")]),this._pluginManager.registerBehaviour(new f(t,Q),this,"handleChapterComplete",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,R),this,"handleBitrateChange",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,S),this,"handleTrackError"),this._pluginManager.registerBehaviour(new f(v,X),this,"handleClockReportingTick",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(v,Z),this,"handleIdleTick",[]),this._pluginManager.registerBehaviour(new f(r,V),this,"handleClockReportingTick",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(s,z),this,"handleAnalyticsError"),this._pluginManager.registerBehaviour(new f(s,A),this,"handleAnalyticsStart",[new h(s,"vid","vid"),new h(s,"aid","aid"),new h(s,"mid","mid"),new h(s,"customerIDs","customerIDs"),new h(s,"visitorOptedOut","visitorOptedOut"),new h(s,"blob","blob"),new h(s,"loc_hint","loc_hint"),new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(s,B),this,"handleAnalyticsAdStart",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")])},d.prototype._setupDataResolver=function(){var a={},b=this;a.version=function(){return k.getVersion()},a.api_level=function(){return k.getApiLevel()},a.tracking_server=function(){return b._config?b._config.trackingServer:null},a.publisher=function(){return b._config?b._config.publisher:null},a.quiet_mode=function(){return b._config?b._config.quietMode:!1},a.ovp=function(){return b._config?b._config.ovp:null},a.sdk=function(){return b._config?b._config.sdk:null},a.is_primetime=function(){return b._config?b._config.__isPrimetime:!1},a.psdk_version=function(){return b._config?b._config.__psdkVersion:null},a.session_id=function(){return b._channel.request(w)},this._dataResolver=function(b){if(!b||0==b.length)return null;for(var c=null,d=0;d<b.length;d++){var e=b[d];c=c||{},c[e]=a.hasOwnProperty(e)?a[e].call(this):null}return c}},d.prototype._resumePlaybackIfPossible=function(a){this._errorInfo||this._isPaused||this._isSeeking||this._isBuffering||(this._isVideoIdle&&(this._isVideoIdle=!1,this._resumePlaybackFromIdle()),this._runIdleTimer(!1),this._channel.trigger(new e(sa,a)))},d.prototype._resumePlaybackFromIdle=function(){this._trigger(V),this._filter.clear(),this._channel.trigger(new e(x)),this._trigger(U),this._runReportingTimer(!0),this._runFlushFilterTimer(!0)};var q="adobe-heartbeat",r=q,s="adobe-analytics",t="player",u="nielsen",v="service.clock",w="session_id",x="reset_session_id",y="heartbeat-channel",z="error",A="aa_start",B="sc_ad_start",C="video_load",D="video_unload",E="video_start",F="video_resume",G="video_complete",H="play",I="pause",J="ad_start",K="ad_complete",L="buffer_start",M="buffer_complete",N="seek_start",O="seek_complete",P="chapter_start",Q="chapter_complete",R="bitrate_change",S="track_error",T="video_idle_start",U="video_idle_resume",V="quantum_close",W="heartbeat.reporting",X=W+".tick",Y="heartbeat.idle",Z=Y+".tick",$="reset",_="source",aa="error_id",ba="tracking_server",ca="check_status_server",da="publisher",ea="quiet_mode",fa="ssl",ga="visitor_opt_out",ha="api:aa_start",ia="api:aa_ad_start",ja="api:config",ka="api:update_visitor_optout",la="api:video_load",ma="api:video_unload",na="api:video_start",oa="api:video_complete",pa="api:video_resume",qa="api:ad_start",ra="api:ad_complete",sa="api:play",ta="api:pause",ua="api:buffer_start",va="api:seek_start",wa="api:seek_complete",xa="api:chapter_start",ya="api:chapter_complete",za="api:track_error",Aa="api:track_internal_error",Ba="api:bitrate_change",Ca="api:quantum_end",Da="sourceErrorHeartbeat",Ea="clock:check_status.resume",Fa="clock:reporting.resume",Ga="clock:reporting.pause",Ha="clock:flush_filter.resume",Ia="clock:flush_filter.pause",Ja="clock:idle.resume",Ka="clock:idle.pause",La="clock:check_status.get_settings";c.AdobeHeartbeatPlugin=d}(a.ADB.core,a.ADB.va,b),a.ADB.va.plugins.ah||(a.ADB.va.plugins.ah=b)}(this);\n\n// AdobeAnalyticsPlugin\n!function(a){if("undefined"==typeof b)var b={};!function(a,b){"use strict";function c(a,b){this._onFail={fn:a,ctx:b}}var d=a.ErrorInfo;c.prototype.validateFields=function(a,b){if(!a)return this._fail("Data cannot be null");if(b)for(var c=0;c<b.length;c++){var d=b[c];switch(d){case"videoId":if(!a.hasOwnProperty("videoId"))return this._fail("The ID for the main video must be specified.");if("string"!=typeof a.videoId)return this._fail("The ID for the main video must be a String.");if(""===a.videoId)return this._fail("The ID for the main video cannot be an empty string.");break;case"streamType":if(!a.hasOwnProperty("streamType"))return this._fail("The stream type for the main video must be specified.");if("string"!=typeof a.streamType)return this._fail("The stream type for the main video must be a String.");if(""===a.streamType)return this._fail("The stream type for the main video cannot be an empty string.");break;case"playerName":if(!a.hasOwnProperty("playerName"))return this._fail("The player name for the main video must be specified.");if("string"!=typeof a.playerName)return this._fail("The player name for the main video must be a String.");if(""===a.playerName)return this._fail("The player name for the main video cannot be an empty string.");break;case"videoLength":if(!a.hasOwnProperty("videoLength"))return this._fail("The length of the main video must be specified.");if("number"!=typeof a.videoLength)return this._fail("The length of the main video must be a Number.");if(isNaN(a.videoLength))return this._fail("The length of the main video cannot be NaN.");break;case"podPlayerName":if(!a.hasOwnProperty("podPlayerName"))return this._fail("The player name for the ad-break must be specified.");if("string"!=typeof a.podPlayerName)return this._fail("The player name for the ad-break must be a String.");if(""===a.podPlayerName)return this._fail("The player name for the ad-break cannot be an empty string.");break;case"podPosition":if(!a.hasOwnProperty("podPosition"))return this._fail("Position (index) of the ad-break must be specified.");if("number"!=typeof a.podPosition)return this._fail("Position (index) of the ad-break must be a Number.");if(isNaN(a.podPosition))return this._fail("Position (index) of the ad-break cannot be NaN.");break;case"adId":if(!a.hasOwnProperty("adId"))return this._fail("The ad ID must be specified.");if("string"!=typeof a.adId)return this._fail("The ad ID must be a String.");if(""===a.adId)return this._fail("The ad ID cannot be an empty string.");break;case"adPosition":if(!a.hasOwnProperty("adPosition"))return this._fail("Position (index) of the ad must be specified.");if("number"!=typeof a.adPosition)return this._fail("Position (index) of the ad must be a Number.");if(isNaN(a.adPosition))return this._fail("Position (index) of the ad cannot be NaN.");break;case"adLength":if(!a.hasOwnProperty("adLength"))return this._fail("The length of the ad must be specified.");if("number"!=typeof a.adLength)return this._fail("The length of the ad must be a Number.");if(isNaN(a.adLength))return this._fail("The length of the ad cannot be NaN.");break;default:return this._fail("Unable to validate unknown parameter: "+d)}}return!0},c.prototype._fail=function(a){var b=new d("Invalid input data",a);return this._onFail.fn&&this._onFail.fn.call(this._onFail.ctx,b),!1},b.InputDataValidator=c}(a.ADB.va,b),function(a){"use strict";function b(){this.channel=c,this.debugLogging=!1}var c="";a.AdobeAnalyticsPluginConfig=b}(b),function(a){"use strict";function b(){}b.prototype.onError=function(a){},a.AdobeAnalyticsPluginDelegate=b}(b),function(a,b,c,d){"use strict";function e(a,b){if(e.__super__.constructor.call(this,r),!a)throw new Error("The reference to the AppMeasurement object cannot be NULL.");this._appMeasurement=a,this._delegate=b,this._customMetaKeys=[],this._videoMetadata={},this._adMetadata={},this._chapterMetadata={},this._errorInfo=null,this._workQueue=new k(!0,w),this._inputDataValidator=new q(function(a){this._errorInfo=a,this._logger.error(this._logTag,a.getMessage()+" | "+a.getDetails());var b=this;setTimeout(function(){b._trigger(x,a),b._delegate&&b._delegate.onError(b._errorInfo)},0)},this),this._appMeasurement.isReadyToTrack(),this._setupDataResolver()}var f=a.Trigger,g=a.plugin.BasePlugin,h=a.plugin.ParamMapping,i=a.radio.Channel,j=a.radio.Command,k=a.radio.CommandQueue,l=b.ErrorInfo,m=c.md5,n=c.StringUtils,o=c.ObjectUtils,p=d.AdobeAnalyticsPluginConfig,q=d.InputDataValidator;a.extend(e,g),e.prototype.configure=function(a){if(!a)throw new Error("Reference to the configuration data cannot be NULL.");if(!(a instanceof p))throw new Error("Expected config data to be instance of AdobeAnalyticsPluginConfig.");this._config=a,this._config.debugLogging?this._logger.enable():this._logger.disable(),this._logger.debug(this._logTag,"#configure({trackingServer="+this._config.debugLogging+", channel="+this._config.channel+", ssl="+this._appMeasurement.ssl+"})")},e.prototype.bootstrap=function(a){e.__super__.bootstrap.call(this,a),this._registerCommands(),this._registerBehaviours()},e.prototype.setup=function(){this._appMeasurement.isReadyToTrack()?this._onAppMeasurementReady():this._appMeasurement.callbackWhenReadyToTrack(this,this._onAppMeasurementReady,[]),e.__super__.setup.call(this)},e.prototype.setVideoMetadata=function(a){this._videoMetadata=o.clone(a)},e.prototype.setAdMetadata=function(a){this._adMetadata=o.clone(a)},e.prototype.setChapterMetadata=function(a){this._chapterMetadata=o.clone(a)},e.prototype._canProcess=function(){return this._errorInfo?(this._logger.error(this._logTag,"#_canProcess() > In ERROR state."),!1):e.__super__._canProcess.call(this)},e.prototype._cmdVideoLoad=function(a){this._errorInfo=null},e.prototype._cmdVideoStart=function(a){this._logger.debug(this._logTag,"#_cmdVideoStart()"),this._canProcess()&&this._workQueue.addCommand(new j(this._executeOpen,this,[a]))},e.prototype._cmdAdStart=function(a){this._logger.debug(this._logTag,"#_cmdAdStart()"),this._canProcess()&&this._workQueue.addCommand(new j(this._executeOpenAd,this,[a]))},e.prototype._cmdHeartbeatPluginError=function(a){this._errorInfo||(this._errorInfo=new l("Internal error","HeartbeatPlugin is in ERROR state."),this._trigger(x,this._errorInfo),this._delegate&&this._delegate.onError(this._errorInfo))},e.prototype._resetAppMeasurementContextData=function(){delete this._appMeasurement.contextData["a.contentType"],delete this._appMeasurement.contextData["a.media.name"],delete this._appMeasurement.contextData["a.media.friendlyName"],delete this._appMeasurement.contextData["a.media.length"],delete this._appMeasurement.contextData["a.media.playerName"],delete this._appMeasurement.contextData["a.media.channel"],delete this._appMeasurement.contextData["a.media.view"],delete this._appMeasurement.contextData["a.media.ad.name"],delete this._appMeasurement.contextData["a.media.ad.friendlyName"],delete this._appMeasurement.contextData["a.media.ad.podFriendlyName"],delete this._appMeasurement.contextData["a.media.ad.length"],delete this._appMeasurement.contextData["a.media.ad.playerName"],delete this._appMeasurement.contextData["a.media.ad.pod"],delete this._appMeasurement.contextData["a.media.ad.podPosition"],delete this._appMeasurement.contextData["a.media.ad.podSecond"],delete this._appMeasurement.contextData["a.media.ad.view"];for(var a=0;a<this._customMetaKeys.length;a++){var b=this._customMetaKeys[a];delete this._appMeasurement.contextData[b]}this._customMetaKeys=[]},e.prototype._executeOpen=function(a){if(this._logger.debug(this._logTag,"#_executeOpen(id="+a.videoId+", videoName="+a.videoName+", streamType="+a.streamType+", length="+a.videoLength+", playerName="+a.playerName+", channel="+a.channel+", isPrimetime="+a.isPrimetime+", sessionId="+a.sessionId+")"),this._canProcess()&&this._inputDataValidator.validateFields(a,["videoId","streamType","videoLength","playerName"])){this._resetAppMeasurementContextData();for(var b in a.metaVideo)a.metaVideo.hasOwnProperty(b)&&(this._appMeasurement.contextData[b]=a.metaVideo[b],this._customMetaKeys.push(b));if(a.metaNielsen)for(var b in a.metaNielsen)a.metaNielsen.hasOwnProperty(b)&&(this._appMeasurement.contextData[b]=a.metaNielsen[b],this._customMetaKeys.push(b));this._appMeasurement.contextData["a.contentType"]=a.streamType,this._appMeasurement.contextData["a.media.name"]=a.videoId,this._appMeasurement.contextData["a.media.friendlyName"]=a.videoName||"",this._appMeasurement.contextData["a.media.length"]=Math.floor(a.videoLength)||"0.0",this._appMeasurement.contextData["a.media.playerName"]=a.playerName,this._appMeasurement.contextData["a.media.channel"]=a.channel||"",this._appMeasurement.contextData["a.media.view"]=!0,this._appMeasurement.contextData["a.media.vsid"]=a.sessionId,this._appMeasurement.pev3=y,this._appMeasurement.pe=a.isPrimetime?B:A,this._appMeasurement.track();var c=this;setTimeout(function(){c._trigger(E,a)},0)}},e.prototype._executeOpenAd=function(a){var b=m(a.videoId)+"_"+a.podPosition;if(this._logger.debug(this._logTag,"#_executeOpenAd(id="+a.adId+", streamType="+a.streamType+", length="+a.adLength+", podPlayerName="+a.podPlayerName+", parentId="+a.videoId+", podId="+b+", parentPodPosition="+a.adPosition+", podSecond="+a.podSecond+")"),this._canProcess()&&this._inputDataValidator.validateFields(a,["videoId","streamType","playerName","adId","adLength","podPlayerName","adPosition"])){a.podSecond=null==a.podSecond||isNaN(a.podSecond)?a.playhead:a.podSecond,this._resetAppMeasurementContextData();var c;for(c in a.metaVideo)a.metaVideo.hasOwnProperty(c)&&(this._appMeasurement.contextData[c]=a.metaVideo[c],this._customMetaKeys.push(c));for(c in a.metaAd)a.metaAd.hasOwnProperty(c)&&(this._appMeasurement.contextData[c]=a.metaAd[c],this._customMetaKeys.push(c));if(a.metaNielsen)for(var c in a.metaNielsen)a.metaNielsen.hasOwnProperty(c)&&(this._appMeasurement.contextData[c]=a.metaNielsen[c],this._customMetaKeys.push(c));this._appMeasurement.contextData["a.contentType"]=a.streamType,this._appMeasurement.contextData["a.media.name"]=a.videoId,this._appMeasurement.contextData["a.media.playerName"]=a.playerName,this._appMeasurement.contextData["a.media.channel"]=a.channel||"",this._appMeasurement.contextData["a.media.vsid"]=a.sessionId,this._appMeasurement.contextData["a.media.friendlyName"]=a.videoName||"",this._appMeasurement.contextData["a.media.length"]=Math.floor(a.videoLength)||"0.0",this._appMeasurement.contextData["a.media.ad.name"]=a.adId,this._appMeasurement.contextData["a.media.ad.friendlyName"]=a.adName||"",this._appMeasurement.contextData["a.media.ad.podFriendlyName"]=a.podName||"",this._appMeasurement.contextData["a.media.ad.length"]=Math.floor(a.adLength)||"0.0",this._appMeasurement.contextData["a.media.ad.playerName"]=a.podPlayerName,this._appMeasurement.contextData["a.media.ad.pod"]=b,this._appMeasurement.contextData["a.media.ad.podPosition"]=Math.floor(a.adPosition)||"0.0",this._appMeasurement.contextData["a.media.ad.podSecond"]=Math.floor(a.podSecond)||"0.0",this._appMeasurement.contextData["a.media.ad.view"]=!0,this._appMeasurement.pev3=z,this._appMeasurement.pe=a.isPrimetime?D:C,this._appMeasurement.track();var d=this;setTimeout(function(){d._trigger(F,a)},0)}},e.prototype._setupDataResolver=function(){var a={},b=this;a.rsid=function(){return b._appMeasurement.account},a.tracking_server=function(){return b._appMeasurement.ssl&&b._appMeasurement.trackingServerSecure?b._appMeasurement.trackingServerSecure:b._appMeasurement.trackingServer},a.ssl=function(){return b._appMeasurement.ssl},a.vid=function(){return b._appMeasurement.visitorID},a.aid=function(){return b._appMeasurement.analyticsVisitorID},a.mid=function(){return b._appMeasurement.marketingCloudVisitorID},a.blob=function(){return b._appMeasurement.audienceManagerBlob},a.loc_hint=function(){return b._appMeasurement.audienceManagerLocationHint?parseInt(b._appMeasurement.audienceManagerLocationHint):""},a.customerIDs=function(){var a=b._appMeasurement.visitor.getCustomerIDs(),c={};for(var d in a)if(a.hasOwnProperty(d)){var e=a[d];if("object"==typeof e){for(var f in e)e.hasOwnProperty(f)&&("authState"==f?c[d+".as"]=e[f]:c[d+"."+f]=e[f]);c[d+".as"]||(c[d+".as"]="0")}}return c},a.channel=function(){return b._config?b._config.channel:null},a.meta=function(a){var c=a.split(".");if(c.length<2)return null;var d=c.shift();switch(a=c.join("."),d){case"video":return a==i.WILDCARD?b._videoMetadata:b._videoMetadata[a];case"ad":return a==i.WILDCARD?b._adMetadata:b._adMetadata[a];case"chapter":return a==i.WILDCARD?b._chapterMetadata:b._chapterMetadata[a];default:return null}},a.visitorOptedOut=function(){return void 0==b._appMeasurement.visitorOptedOut?!1:b._appMeasurement.visitorOptedOut},this._dataResolver=function(b){if(!b||0==b.length)return null;for(var c=null,d=0;d<b.length;d++){var e=b[d];c=c||{},n.startsWith(e,"meta.")?c[e]=a.meta(e.split("meta.")[1]):c[e]=a.hasOwnProperty(e)?a[e].call(this):null}return c}},e.prototype._registerCommands=function(){this._pluginManager.comply(this,"handleVideoLoad",this._cmdVideoLoad),this._pluginManager.comply(this,"handleVideoStart",this._cmdVideoStart),this._pluginManager.comply(this,"handleAdStart",this._cmdAdStart),this._pluginManager.comply(this,"handleHeartbeatPluginError",this._cmdHeartbeatPluginError)},e.prototype._registerBehaviours=function(){this._pluginManager.registerBehaviour(new f(u,G),this,"handleVideoLoad"),this._pluginManager.registerBehaviour(new f(u,H),this,"handleVideoStart",[new h(u,"video.id","videoId"),new h(u,"video.streamType","streamType"),new h(u,"video.name","videoName"),new h(u,"video.length","videoLength"),new h(u,"video.playerName","playerName"),new h(u,"video.streamType","streamType"),new h(v,"is_primetime","isPrimetime"),new h(v,"session_id","sessionId"),new h(s,"channel","channel"),new h(s,"meta.video.*","metaVideo"),new h(t,"meta","metaNielsen")]),this._pluginManager.registerBehaviour(new f(u,I),this,"handleAdStart",[new h(u,"video.id","videoId"),new h(u,"video.streamType","streamType"),new h(u,"video.playhead","playhead"),new h(u,"video.playerName","playerName"),new h(u,"video.name","videoName"),new h(u,"video.length","videoLength"),new h(u,"ad.id","adId"),new h(u,"ad.length","adLength"),new h(u,"ad.position","adPosition"),new h(u,"ad.name","adName"),new h(u,"pod.name","podName"),new h(u,"pod.position","podPosition"),new h(u,"pod.playerName","podPlayerName"),new h(u,"pod.startTime","podSecond"),new h(v,"is_primetime","isPrimetime"),new h(v,"session_id","sessionId"),new h(s,"channel","channel"),new h(s,"meta.video.*","metaVideo"),new h(s,"meta.ad.*","metaAd"),new h(t,"meta","metaNielsen")]),this._pluginManager.registerBehaviour(new f(v,x),this,"handleHeartbeatPluginError")},e.prototype._onAppMeasurementReady=function(){this._workQueue.resume()};var r="adobe-analytics",s=r,t="nielsen",u="player",v="adobe-heartbeat",w=2e3,x="error",y="video",z="videoAd",A="ms_s",B="msp_s",C="msa_s",D="mspa_s",E="aa_start",F="sc_ad_start",G="video_load",H="video_start",I="ad_start";d.AdobeAnalyticsPlugin=e}(a.ADB.core,a.ADB.va,a.ADB.va.utils,b),function(a){"use strict";var b={SHOW:"a.media.show",SEASON:"a.media.season",EPISODE:"a.media.episode",ASSET_ID:"a.media.asset",GENRE:"a.media.genre",FIRST_AIR_DATE:"a.media.airDate",FIRST_DIGITAL_DATE:"a.media.digitalDate",RATING:"a.media.rating",ORIGINATOR:"a.media.originator",NETWORK:"a.media.network",SHOW_TYPE:"a.media.type",AD_LOAD:"a.media.adLoad",MVPD:"a.media.pass.mvpd",AUTHORIZED:"a.media.pass.auth",DAY_PART:"a.media.dayPart",FEED:"a.media.feed",STREAM_FORMAT:"a.media.format"},c={ADVERTISER:"a.media.ad.advertiser",CAMPAIGN_ID:"a.media.ad.campaign",CREATIVE_ID:"a.media.ad.creative",PLACEMENT_ID:"a.media.ad.placement",SITE_ID:"a.media.ad.site",CREATIVE_URL:"a.media.ad.creativeURL"};a.VideoMetadataKeys=b,a.AdMetadataKeys=c}(b),a.ADB.va.plugins.aa||(a.ADB.va.plugins.aa=b)}(this);\n\n// MediaHeartbeat\n!function(a){!function(a){"use strict";function b(){this.trackingServer=void 0,this.channel=void 0,this.ovp=void 0,this.appVersion=void 0,this.playerName=void 0,this.ssl=!1,this.debugLogging=!1}a.MediaHeartbeatConfig=b,a.MediaHeartbeatConfig.sharedInstance=new b}(a.ADB.va),function(a){"use strict";function b(){this.data={}}var c=a.plugins.videoplayer.VideoInfo,d=a.plugins.videoplayer.AdBreakInfo,e=a.plugins.videoplayer.AdInfo,f=a.plugins.videoplayer.ChapterInfo,g=a.plugins.videoplayer.QoSInfo;b.MEDIAINFO_KEY_NAME="a.name",b.MEDIAINFO_KEY_VIDEOID="a.videoId",b.MEDIAINFO_KEY_ADID="a.adId",b.MEDIAINFO_KEY_LENGTH="a.length",b.MEDIAINFO_KEY_PLAYHEAD="a.playhead",b.MEDIAINFO_KEY_STREAMTYPE="a.streamType",b.MEDIAINFO_KEY_POSITION="a.position",b.MEDIAINFO_KEY_STARTTIME="a.startTime",b.MEDIAINFO_KEY_BITRATE="a.bitrate",b.MEDIAINFO_KEY_FPS="a.fps",b.MEDIAINFO_KEY_DROPPEDFRAMES="a.droppedFrames",b.MEDIAINFO_KEY_STARTUPTIME="a.startupTime",b.MEDIAINFO_KEY_TIMEDMETADATA="a.timedMetadata",b.prototype.setValue=function(a,b){this.data[a]=b},b.prototype.getValue=function(a){return this.data.hasOwnProperty(a)?this.data[a]:null},b.prototype.createVideoInfo=function(){var a=new c;return a.id=null!=this.getValue(b.MEDIAINFO_KEY_VIDEOID)?this.getValue(b.MEDIAINFO_KEY_VIDEOID):"",a.name=null!=this.getValue(b.MEDIAINFO_KEY_NAME)?this.getValue(b.MEDIAINFO_KEY_NAME):"",a.length=null!=this.getValue(b.MEDIAINFO_KEY_LENGTH)?this.getValue(b.MEDIAINFO_KEY_LENGTH):0,a.playhead=null!=this.getValue(b.MEDIAINFO_KEY_PLAYHEAD)?this.getValue(b.MEDIAINFO_KEY_PLAYHEAD):0,a.streamType=null!=this.getValue(b.MEDIAINFO_KEY_STREAMTYPE)?this.getValue(b.MEDIAINFO_KEY_STREAMTYPE):"",a},b.prototype.createAdBreakInfo=function(){var a=new d;return a.name=null!=this.getValue(b.MEDIAINFO_KEY_NAME)?this.getValue(b.MEDIAINFO_KEY_NAME):"",a.position=null!=this.getValue(b.MEDIAINFO_KEY_POSITION)?this.getValue(b.MEDIAINFO_KEY_POSITION):0,a.startTime=null!=this.getValue(b.MEDIAINFO_KEY_STARTTIME)?this.getValue(b.MEDIAINFO_KEY_STARTTIME):0,a},b.prototype.createAdInfo=function(){var a=new e;return a.id=null!=this.getValue(b.MEDIAINFO_KEY_ADID)?this.getValue(b.MEDIAINFO_KEY_ADID):"",a.name=null!=this.getValue(b.MEDIAINFO_KEY_NAME)?this.getValue(b.MEDIAINFO_KEY_NAME):"",a.length=null!=this.getValue(b.MEDIAINFO_KEY_LENGTH)?this.getValue(b.MEDIAINFO_KEY_LENGTH):0,a.position=null!=this.getValue(b.MEDIAINFO_KEY_POSITION)?this.getValue(b.MEDIAINFO_KEY_POSITION):0,a},b.prototype.createChapterInfo=function(){var a=new f;return a.name=null!=this.getValue(b.MEDIAINFO_KEY_NAME)?this.getValue(b.MEDIAINFO_KEY_NAME):"",a.length=null!=this.getValue(b.MEDIAINFO_KEY_LENGTH)?this.getValue(b.MEDIAINFO_KEY_LENGTH):0,a.startTime=null!=this.getValue(b.MEDIAINFO_KEY_STARTTIME)?this.getValue(b.MEDIAINFO_KEY_STARTTIME):0,a.position=null!=this.getValue(b.MEDIAINFO_KEY_POSITION)?this.getValue(b.MEDIAINFO_KEY_POSITION):0,a},b.prototype.createQoSInfo=function(){var a=new g;return a.bitrate=null!=this.getValue(b.MEDIAINFO_KEY_BITRATE)?this.getValue(b.MEDIAINFO_KEY_BITRATE):0,a.fps=null!=this.getValue(b.MEDIAINFO_KEY_FPS)?this.getValue(b.MEDIAINFO_KEY_FPS):0,a.droppedFrames=null!=this.getValue(b.MEDIAINFO_KEY_DROPPEDFRAMES)?this.getValue(b.MEDIAINFO_KEY_DROPPEDFRAMES):0,a.startupTime=null!=this.getValue(b.MEDIAINFO_KEY_STARTUPTIME)?this.getValue(b.MEDIAINFO_KEY_STARTUPTIME):0,a},a.MediaObject=b}(a.ADB.va),function(a,b){"use strict";function c(a){c.__super__.constructor.call(this),this._heartbeat=a}function d(a){d.__super__.constructor.call(this),this._heartbeat=a}function e(a){e.__super__.constructor.call(this),this._heartbeat=a}function f(a){f.__super__.constructor.call(this),this._heartbeat=a}a.extend(c,b.plugins.aa.AdobeAnalyticsPluginDelegate),c.prototype.onError=function(a){b.MediaHeartbeat._onDelegateError.call(this._heartbeat,a)},a.extend(d,b.plugins.ah.AdobeHeartbeatPluginDelegate),d.prototype.onError=function(a){b.MediaHeartbeat._onDelegateError.call(this._heartbeat,a)},a.extend(e,b.HeartbeatDelegate),e.prototype.onError=function(a){b.MediaHeartbeat._onDelegateError.call(this._heartbeat,a)},a.extend(f,b.plugins.videoplayer.VideoPlayerPluginDelegate),f.prototype.getVideoInfo=function(){return this._heartbeat&&this._heartbeat._videoInfo?(this._heartbeat._delegate&&(this._heartbeat._videoInfo.playhead=this._heartbeat._delegate.getCurrentPlaybackTime()),this._heartbeat._videoInfo):null},f.prototype.getAdBreakInfo=function(){return this._heartbeat&&this._heartbeat._adBreakInfo?this._heartbeat._adBreakInfo:null},f.prototype.getAdInfo=function(){return this._heartbeat&&this._heartbeat._adInfo?this._heartbeat._adInfo:null},f.prototype.getChapterInfo=function(){return this._heartbeat&&this._heartbeat._chapterInfo?this._heartbeat._chapterInfo:null},f.prototype.getQoSInfo=function(){if(this._heartbeat&&this._heartbeat._delegate&&this._heartbeat._delegate.getQoSObject()){var a=this._heartbeat._delegate.getQoSObject();if(a&&"object"==typeof a&&a.setValue)return a.createQoSInfo()}return null},b._MediaAnalyticsPluginDelegate=c,b._MediaHeartbeatPluginDelegate=d,b._ADBMediaHeartbeatDelegate=e,b._MediaHeartbeatVideoPlayerPluginDelegate=f}(a.ADB.core,a.ADB.va),function(a,b){"use strict";function c(){}function d(a){d.__super__.constructor.call(this),this._heartbeat=a}var e=b.MediaHeartbeatConfig;b.plugins.nielsen&&(c.MEDIAHEARTBEAT_NIELSEN_CONTENT_METADATA="media_nielsen_content_metadata",c.MEDIAHEARTBEAT_NIELSEN_AD_METADATA="media_nielsen_ad_metadata",c.MEDIAHEARTBEAT_NIELSEN_CHANNEL_METADATA="media_nielsen_channel_metadata",e.prototype.nielsenConfigKey=void 0,e.prototype.nielsenAppInfo=void 0,a.extend(d,b.plugins.nielsen.NielsenPluginDelegate),d.prototype.getMetadataInfo=function(){if(this._heartbeat&&this._heartbeat._currentContentMediaObject){var a=this._heartbeat._currentContentMediaObject.getValue(c.MEDIAHEARTBEAT_NIELSEN_CONTENT_METADATA);if("object"==typeof a)return a}return null},d.prototype.getAdMetadataInfo=function(){if(this._heartbeat&&this._heartbeat._currentAdMediaObject){var a=this._heartbeat._currentAdMediaObject.getValue(c.MEDIAHEARTBEAT_NIELSEN_AD_METADATA);if("object"==typeof a)return a}return null},d.prototype.getChannelInfo=function(){if(this._heartbeat&&this._heartbeat._currentContentMediaObject){var a=this._heartbeat._currentContentMediaObject.getValue(c.MEDIAHEARTBEAT_NIELSEN_CHANNEL_METADATA);if("object"==typeof a)return a}return null},d.prototype.onError=function(a){this._heartbeat&&b.MediaHeartbeat._onError.call(this._heartbeat,a)},b.MediaHeartbeatNielsen=c,b._MediaHeartbeatNielsenPluginDelegate=d)}(a.ADB.core,a.ADB.va),function(b,c){"use strict";function d(){}function e(b,c,d){if(this._logger=new y,this._plugins=[],this._playerPlugin=null,this._aaPlugin=null,this._ahPlugin=null,this._currentContentMediaObject=void 0,this._currentAdMediaObject=void 0,this._videoInfo=void 0,this._adBreakInfo=void 0,this._adInfo=void 0,this._chapterInfo=void 0,this._state={},this._delegate=b,d)this.appMeasurement=d;else{if(!a.s)return void this._logger.error(X,"Valid AppMeasurement instance required for initialising MediaHeartbeat");this.appMeasurement=a.s}c&&"object"==typeof c&&void 0!=c.trackingServer?this._config=c:this._logger.error(X,"Valid config required for initialising MediaHeartbeat")}function f(a,b){if(a==e.Event.AdBreakStart){if(!t.call(this,W))return void this._logger.error(X,"API call trackEvent:AdBreakStart is unsupported in the current state.");b&&"object"==typeof b&&b.setValue?(this._adBreakInfo=b.createAdBreakInfo(),this._adBreakInfo.playerName=this._config.playerName?this._config.playerName:""):this._logger.error(X,"Invalid AdBreak Info for MediaHeartbeatEvent.AdBreakStart event.")}else{if(!t.call(this,W,!0))return void this._logger.error(X,"API call trackEvent:AdBreakComplete is unsupported in the current state.");this._adBreakInfo=void 0}}function g(a,b,c){if(a==e.Event.AdStart){if(!t.call(this,V))return void this._logger.error(X,"API call trackEvent:AdStart is unsupported in the current state.");if(b&&"object"==typeof b&&b.setValue){this._currentAdMediaObject=b,this._adInfo=b.createAdInfo();var d=b.getValue(e.MediaObjectKey.StandardAdMetadata);if(d&&"object"==typeof d)for(var f in d)d.hasOwnProperty(f)&&(c[f]=d[f]);this._aaPlugin&&this._aaPlugin.setAdMetadata(c),this._playerPlugin.trackAdStart()}else this._logger.error(X,"Invalid Ad Info for MediaHeartbeatEvent.AdStart event.")}else if(a==e.Event.AdComplete){if(!t.call(this,V,!0))return void this._logger.error(X,"API call trackEvent:AdComplete is unsupported in the current state.");this._playerPlugin.trackAdComplete(),this._adInfo=null}else{if(!t.call(this,V,!0))return void this._logger.error(X,"API call trackEvent:AdSkip is unsupported in the current state.");this._adInfo=null}}function h(a){if(a==e.Event.SeekStart){if(!t.call(this,T))return void this._logger.error(X,"API call trackEvent:SeekStart is unsupported in the current state.");this._playerPlugin.trackSeekStart()}else{if(!t.call(this,T,!0))return void this._logger.error(X,"API call trackEvent:SeekComplete is unsupported in the current state.");this._playerPlugin.trackSeekComplete()}}function i(a,b,c){if(a==e.Event.ChapterStart){if(!t.call(this,U))return void this._logger.error(X,"API call trackEvent:ChapterStart is unsupported in the current state.");b&&"object"==typeof b&&b.setValue?(this._chapterInfo=b.createChapterInfo(),this._aaPlugin&&this._aaPlugin.setChapterMetadata(c),this._playerPlugin.trackChapterStart()):this._logger.error(X,"Invalid Chapter Info for MediaHeartbeatEvent.ChapterStart event.")}else if(a==e.Event.ChapterComplete){if(!t.call(this,U,!0))return void this._logger.error(X,"API call trackEvent:ChapterComplete is unsupported in the current state.");this._chapterInfo=null,this._playerPlugin.trackChapterComplete()}else{if(!t.call(this,U,!0))return void this._logger.error(X,"API call trackEvent:ChapterSkip is unsupported in the current state.");this._chapterInfo=null}}function j(a){if(a==e.Event.BufferStart){if(!t.call(this,S))return void this._logger.error(X,"API call trackEvent:BufferStart is unsupported in the current state.");this._playerPlugin.trackBufferStart()}else{if(!t.call(this,S,!0))return void this._logger.error(X,"API call trackEvent:BufferComplete is unsupported in the current state.");this._playerPlugin.trackBufferComplete()}}function k(){return w.call(this)?void this._playerPlugin.trackBitrateChange():void this._logger.error(X,"API call trackEvent:BitrateChange is unsupported in the current state.")}function l(a){if(a&&"object"==typeof a&&a.setValue){var b=a.getValue(A.MEDIAINFO_KEY_TIMEDMETADATA);this._playerPlugin&&b&&"string"==typeof b&&this._playerPlugin.trackTimedMetadata(b)}}function m(){this._aaPlugin=new H(this.appMeasurement,new J);var a=new I;a.channel=this._config.channel?this._config.channel:"",a.debugLogging=c.MediaHeartbeat._debugLogging||this._config.debugLogging,this._aaPlugin.configure(a),this._plugins.push(this._aaPlugin)}function n(){this._ahPlugin=new K(new M);var a=new L(this._config.trackingServer,this.appMeasurement.visitor.marketingCloudOrgID);a.debugLogging=c.MediaHeartbeat._debugLogging||this._config.debugLogging,a.ovp=this._config.ovp?this._config.ovp:"",a.ssl=this._config.ssl,a.sdk=this._config.appVersion?this._config.appVersion:"";var b=s.call(this);b&&b.length>0&&(a.__primetime=!0,a.__psdkVersion=b),this._ahPlugin.configure(a),this._plugins.push(this._ahPlugin)}function o(){this._playerPlugin=new E(new G(this));var a=new F;a.debugLogging=c.MediaHeartbeat._debugLogging||this._config.debugLogging,this._playerPlugin.configure(a),this._plugins.push(this._playerPlugin)}function p(){if(c.plugins.nielsen&&this._config.nielsenConfigKey&&this._config.nielsenAppInfo){this._nielsenPlugin=new c.plugins.nielsen.NielsenPlugin(new c._MediaHeartbeatNielsenPluginDelegate(this));var a=new c.plugins.nielsen.NielsenPluginConfig;a.nielsenPluginConfig=c.MediaHeartbeat._debugLogging||this._config.debugLogging,a.appInfo=this._config.nielsenAppInfo,a.configKey=this._config.nielsenConfigKey,this._nielsenPlugin.configure(a),this._plugins.push(this._nielsenPlugin)}}function q(){var a=new C;a.debugLogging=c.MediaHeartbeat._debugLogging||this._config.debugLogging,this._heartbeat=new B(new D(this),this._plugins),this._heartbeat.configure(a)}function r(a){this._logger.error(X,a.getMessage()+" | "+a.getDetails())}function s(){return this._currentContentMediaObject?this._currentContentMediaObject.getValue(Y):null}function t(a,b){if(a!=O&&(!this._state[O]||this._state[R]))return!1;if(a===P&&u.call(this),b?!this._state[a]:this._state[a])return!1;switch(a){case P:this._state[Q]=b;break;case Q:this._state[P]=b;break;case W:if(!b&&this._state[V])return!1;break;case V:if(!b&&!this._state[W])return!1;case U:b||this._state[P]||this.trackPlay()}return this._state[a]=!b,!0}function u(){this._state[T]&&this.trackEvent(e.Event.SeekComplete),this._state[S]&&this.trackEvent(e.Event.BufferComplete)}function v(a){this._state[a]=!1}function w(){return this._state[O]}function x(){this._state={}}var y=b.Logger,z=c.plugins.videoplayer.AssetType,A=c.MediaObject,B=c.Heartbeat,C=c.HeartbeatConfig,D=c._ADBMediaHeartbeatDelegate,E=c.plugins.videoplayer.VideoPlayerPlugin,F=c.plugins.videoplayer.VideoPlayerPluginConfig,G=c._MediaHeartbeatVideoPlayerPluginDelegate,H=c.plugins.aa.AdobeAnalyticsPlugin,I=c.plugins.aa.AdobeAnalyticsPluginConfig,J=c._MediaAnalyticsPluginDelegate,K=c.plugins.ah.AdobeHeartbeatPlugin,L=c.plugins.ah.AdobeHeartbeatPluginConfig,M=c._MediaHeartbeatPluginDelegate;d.prototype.getCurrentPlaybackTime=function(){return null},d.prototype.getQoSObject=function(){return null},e.Event={AdBreakStart:"adBreakStart",AdBreakComplete:"adBreakComplete",AdStart:"adStart",AdComplete:"adComplete",AdSkip:"adSkip",ChapterStart:"chapterStart",ChapterComplete:"chapterComplete",ChapterSkip:"chapterSkip",SeekStart:"seekStart",SeekComplete:"seekComplete",BufferStart:"bufferStart",BufferComplete:"bufferComplete",BitrateChange:"bitrateChange",TimedMetadataUpdate:"timedMetadataUpdate"},e.StreamType={VOD:"vod",LIVE:"live",LINEAR:"linear"},e.MediaObjectKey={StandardVideoMetadata:"media_standard_content_metadata",StandardAdMetadata:"media_standard_ad_metadata",VideoResumed:"resumed"},e.VideoMetadataKeys=c.plugins.aa.VideoMetadataKeys,e.AdMetadataKeys=c.plugins.aa.AdMetadataKeys,e.version=function(){return c.Version.getVersion()},e.prototype.trackSessionStart=function(a,b){if(!t.call(this,O))return void this._logger.error(X,"API call trackSessionStart is unsupported in the current state.");if(!a||"object"!=typeof a||!a.setValue)return v.call(this,O),void this._logger.error(X,"Invalid Media Info object");this._currentContentMediaObject=a,this._videoInfo=a.createVideoInfo(),this._videoInfo.playerName=void 0!=this._config.playerName?this._config.playerName:"";var c=a.getValue(e.MediaObjectKey.StandardVideoMetadata);if(c&&"object"==typeof c)for(var d in c)c.hasOwnProperty(d)&&(b[d]=c[d]);var f=a.getValue(e.MediaObjectKey.VideoResumed);f&&"boolean"==typeof f&&(this._videoInfo.resumed=a.getValue(e.MediaObjectKey.VideoResumed)),N.call(this),this._playerPlugin&&(this._aaPlugin&&this._aaPlugin.setVideoMetadata(b),this._playerPlugin.trackVideoLoad(),this._playerPlugin.trackSessionStart())},e.prototype.trackPlay=function(){return t.call(this,P)?void this._playerPlugin.trackPlay():void this._logger.error(X,"API call trackPlay is unsupported in the current state.")},e.prototype.trackPause=function(){return t.call(this,Q)?void(this._playerPlugin&&this._playerPlugin.trackPause()):void this._logger.error(X,"API call trackPause is unsupported in the current state.")},e.prototype.trackComplete=function(){return t.call(this,R)?void(this._playerPlugin&&this._playerPlugin.trackComplete(function(){})):void this._logger.error(X,"API call trackComplete is unsupported in the current state.")},e.prototype.trackSessionEnd=function(){return t.call(this,O,!0)?(this._playerPlugin&&this._playerPlugin.trackVideoUnload(),x.call(this),void(this._plugins=[])):(x.call(this),this._plugins=[],void this._logger.error(X,"API call trackSessionEnd is unsupported in the current state."))},e.prototype.trackError=function(a){return w.call(this)?void(this._playerPlugin&&this._playerPlugin.trackVideoPlayerError(a?a:"unknown_error_id")):void this._logger.error(X,"API call trackError is unsupported in the current state.")},e.prototype.trackEvent=function(a,b,c){switch(a){case e.Event.AdBreakStart:case e.Event.AdBreakComplete:f.call(this,a,b);break;case e.Event.AdStart:case e.Event.AdComplete:case e.Event.AdSkip:g.call(this,a,b,c);break;case e.Event.SeekStart:case e.Event.SeekComplete:h.call(this,a);break;case e.Event.ChapterStart:case e.Event.ChapterComplete:case e.Event.ChapterSkip:i.call(this,a,b,c);break;case e.Event.BufferStart:case e.Event.BufferComplete:j.call(this,a);break;case e.Event.BitrateChange:k.call(this);break;case e.Event.TimedMetadataUpdate:l.call(this,b)}};var N=function(){if(!this.appMeasurement||!this.appMeasurement.visitor)throw new Error("appMeasurement.visitor object cannot be NULL.");m.call(this),n.call(this),o.call(this),p.call(this),q.call(this)},O=1,P=2,Q=3,R=4,S=5,T=6,U=7,V=8,W=9;e.createMediaObject=function(a,b,c,d){var f=new A;f.setValue(A.MEDIAINFO_KEY_VIDEOID,b),f.setValue(A.MEDIAINFO_KEY_NAME,a),f.setValue(A.MEDIAINFO_KEY_LENGTH,c),f.setValue(A.MEDIAINFO_KEY_PLAYHEAD,0);var g=z.ASSET_TYPE_VOD;switch(d){case e.StreamType.VOD:g=z.ASSET_TYPE_VOD;break;case e.StreamType.LIVE:g=z.ASSET_TYPE_LIVE;break;case e.StreamType.LINEAR:g=z.ASSET_TYPE_LINEAR}return f.setValue(A.MEDIAINFO_KEY_STREAMTYPE,g),f},e.createAdBreakObject=function(a,b,c){var d=new A;return d.setValue(A.MEDIAINFO_KEY_NAME,a),d.setValue(A.MEDIAINFO_KEY_POSITION,b),d.setValue(A.MEDIAINFO_KEY_STARTUPTIME,c),d},e.createAdObject=function(a,b,c,d){var e=new A;return e.setValue(A.MEDIAINFO_KEY_NAME,a),e.setValue(A.MEDIAINFO_KEY_ADID,b),e.setValue(A.MEDIAINFO_KEY_POSITION,c),e.setValue(A.MEDIAINFO_KEY_LENGTH,d),e},e.createChapterObject=function(a,b,c,d){var e=new A;return e.setValue(A.MEDIAINFO_KEY_NAME,a),e.setValue(A.MEDIAINFO_KEY_POSITION,b),e.setValue(A.MEDIAINFO_KEY_LENGTH,c),e.setValue(A.MEDIAINFO_KEY_STARTTIME,d),e},e.createQoSObject=function(a,b,c,d){var e=new A;return e.setValue(A.MEDIAINFO_KEY_BITRATE,a),e.setValue(A.MEDIAINFO_KEY_FPS,c),e.setValue(A.MEDIAINFO_KEY_DROPPEDFRAMES,d),e.setValue(A.MEDIAINFO_KEY_STARTUPTIME,b),e},e.createTimedMetadataObject=function(a){var b=new A;return b.setValue(A.MEDIAINFO_KEY_TIMEDMETADATA,a),b};var X="MediaHeartbeat",Y="a.__pttvsdkVersion";c.MediaHeartbeat=e,c.MediaHeartbeatDelegate=d,c.MediaHeartbeat.StreamType=e.StreamType,c.MediaHeartbeat.Event=e.Event,c.MediaHeartbeat.version=e.version,c.MediaHeartbeat.createMediaObject=e.createMediaObject,c.MediaHeartbeat.createAdBreakObject=e.createAdBreakObject,c.MediaHeartbeat.createAdObject=e.createAdObject,c.MediaHeartbeat.createChapterObject=e.createChapterObject,c.MediaHeartbeat.createQoSObject=e.createQoSObject,c.MediaHeartbeat.createTimedMetadataObject=e.createTimedMetadataObject,c.MediaHeartbeat._onDelegateError=r,c.MediaHeartbeat._debugLogging=!1}(a.ADB.core,a.ADB.va),a.ADB||(a.ADB={}),a.ADB.core||(a.ADB.core=core),a.ADB.va||(a.ADB.va=va),a.ADB.va.plugins||(a.ADB.va.plugins={})}(this);\n\n',
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* global $t, s */\n(function () {\n    'use strict';\n    //calculated on load\n    //statics\n    var noValue = 'not available';\n    var isAmp = location.hash.indexOf('amp=1') != -1;\n    var isMSNBC = location.hash.indexOf('domain=msnbc.com') != -1;\n    var isEmbedded = location.pathname.indexOf('/embedded-video/') != -1;\n    var ampSection = noValue; //(document.location.search.split('&')[1] || noValue) need to have this passed in URL later\n    var topLevelDomain = s.topLevelDomain;\n    var brand = function () {\n        if (topLevelDomain === 'today.com') {\n            return 'today';\n        } else if (topLevelDomain === 'msnbc.com') {\n            return 'msnbc';\n        } else if (topLevelDomain === 'telemundo.com') {\n            return 'telemundo';\n        } else {\n            return 'nbcnews';\n        }\n    };\n    var extend = function (defaults, options) {\n        var extended = {};\n        var prop;\n        for (prop in defaults) {\n            if (Object.prototype.hasOwnProperty.call(defaults, prop)) {\n                extended[prop] = defaults[prop];\n            }\n        }\n        for (prop in options) {\n            if (Object.prototype.hasOwnProperty.call(options, prop)) {\n                extended[prop] = options[prop];\n            }\n        }\n        return extended;\n    };\n    function getParmFromHash(url, parm) {\n        var re = new RegExp(\"#.*[?&]\" + parm + \"=([^&]+)(&|$)\");\n        var match = url.match(re);\n        return (match ? match[1] : \"\");\n    }\n\n    var contentType = function () {\n        if (isAmp || isEmbedded) {\n            return 'offsite';\n        } else {\n            return s.contextData['news.contenttype'];\n        }\n    };\n    var ampContentType = function () {\n        var passedType = getParmFromHash(location.hash, 'pageType')\n        if (isMSNBC) {\n            passedType = 'video';\n        }\n        switch (passedType) {\n            case 'video':\n                return 'AMP:canonical video';\n\n            default:\n                return 'AMP:post';\n        }\n    };\n\n    var playerStyle = function () {\n        switch (contentType()) {\n            case 'vertical':\n            case 'subvertical':\n            case 'show':\n                return 'Front Player';\n            case 'cover':\n                return 'Cover Player';\n            case 'canonical video':\n                return 'Canonical';\n            case 'post':\n                return 'Inline';\n            case 'offsite':\n                if (isAmp) {\n                    return 'AMP Player';\n                } else {\n                    return 'Offsite Embedded';\n                }\n            default:\n                return noValue;\n        }\n    };\n\n    //formating for publish date\n    var formatDate = function (dateStr) {\n        //convert: Thu Nov 09 2017 16:32:29 GMT+0000 (UTC) convert to 12/22/2015\n        if (typeof dateStr !== 'string') {\n            return false;\n        }\n        var date = new Date(dateStr);\n        //return if its not a valid date\n        if (isNaN(date.getTime())) { return false; }\n\n        return (date.getUTCMonth() + 1) + '/' + date.getUTCDate() + '/' + date.getUTCFullYear();\n    };\n\n    //expose function for custom values\n    window.hbCutomValues = (function () {\n        var customBuilder = function (context) {\n            var eventDataRaw = context.eventDataRaw;\n            var customContextData = context.customContextData;\n\n            var playListInfo = (function () {\n                var playListInfo = {\n                    'id': false,\n                    'label': false\n                };\n                if (eventDataRaw.associatedVideoPlaylist) {\n                    playListInfo.label = eventDataRaw.associatedVideoPlaylist.headline && eventDataRaw.associatedVideoPlaylist.headline.primary || false;\n                    playListInfo.id = eventDataRaw.associatedVideoPlaylist.playlist_id || false;\n                }\n                return playListInfo;\n            })();\n\n            var additionalTerms = (function () {\n                var terms = eventDataRaw.taxonomy && eventDataRaw.taxonomy.additionalTerms || [];\n                var category = [];\n                var keyword = [];\n                terms.forEach(function (term) {\n                    if (term.path.indexOf('category') != -1 && category.indexOf(term.name) == -1) {\n                        category.push(term.name)\n                    }\n                    if (term.path.indexOf('keyword') != -1 && keyword.indexOf(term.name) == -1) {\n                        keyword.push(term.name)\n                    }\n\n                })\n\n                return {\n                    'keyword': keyword.join(','),\n                    'category': category.join(',')\n                };\n            })();\n\n            var brandProgram = (function () {\n                //brand is only today, and everything else is nbcnews\n                if ($t('jsonLd.Dataset.0.vertical', noValue) === 'today') {\n                    return 'today';\n                } else {\n                    return 'NBC News';\n                }\n            })();\n\n            var videoNetwork = (function () {\n                var url = eventDataRaw.url && (eventDataRaw.url.canonical || eventDataRaw.url.primary) || '';//telemundo has no canonical?\n                if (url.indexOf('msnbc.com') != -1) {\n                    return 'msnbc';\n                }\n                else if (s.topLevelDomain === 'telemundo.com') {\n                    return 'telemundo';\n                }\n                else {\n                    return 'nbc';\n                }\n            })();\n            var videoProgramName = (function () {\n                //for not telemundo only uses taxonomy data\n                if (s.topLevelDomain === 'telemundo.com') {\n                    return eventDataRaw.taxonomy && eventDataRaw.taxonomy.primarySection && eventDataRaw.taxonomy.primarySection.name;\n                } else {\n                    return eventDataRaw.source && eventDataRaw.source.name || brandProgram;\n                }\n\n            })();\n            customContextData = extend(customContextData, {\n                'videocontentsource': eventDataRaw.source && eventDataRaw.source.name || noValue, //show name / network\n                'videonetwork': videoNetwork,\n                'videopagecontentcategory': isAmp ? ampSection : $t('jsonLd.Dataset.0.section', noValue),\n                'videopagesubverticalname': $t('jsonLd.Dataset.0.subVertical', noValue), //not correct for amp\n                'videopagetemplatename': $t('jsonLd.Dataset.0.packageId', noValue), //not  correct for amp\n                'videopagetype': isAmp ? ampContentType() : contentType(),\n                'videopageverticalname': $t('jsonLd.Dataset.0.vertical', noValue),\n                'videoplayerstyle': playerStyle(),\n                'videoplaylist': playListInfo.label || noValue,\n                'videoplaylistid': playListInfo.id || noValue,\n                'videoprogram': videoProgramName || noValue,\n                'videopublishdate': formatDate(eventDataRaw.datePublished) || noValue,\n                'videotitle': eventDataRaw.headline && eventDataRaw.headline.primary || noValue,\n                //copied from AppM context variables\n                'videoscrollcount': s.contextData['news.scrollcount'] || noValue,\n                'videosessionnumber': s.contextData['news.sessionnumber'] || noValue,\n                'videoflashversion': s.contextData['news.flashversion'] || noValue,\n                //optional values\n                'videoplayercount': $t('jsonLd.NewsArticle.0.video', []).length || noValue,\n                'videoadditionaltaxonomy': additionalTerms.category || noValue,\n                'news.uxexperiment': s.contextData['news.uxexperiment'] || noValue\n            });\n            return customContextData;\n        };\n\n        customBuilder.appMAccount = function () {\n            var appMAccount = s.account;\n            return appMAccount;\n        };\n        customBuilder.playerStyle = playerStyle();\n        //get referrer pagename if its an embeded amp page.\n        customBuilder.pageName = isAmp ? (brand() + ':' + ampContentType() + ':embeddedVideo') : false;\n\n        return customBuilder;\n    })();\n})();\n\n",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n\n//version 2.19\n(function() {\n    /*global $t, ADB, console, $ndp, AppMeasurement, visitor*/\n    $t('register', 'ahb_adobeAppMeasurmentLoaded');\n    var setupHeartbeat = function(s) {\n        'use strict';\n        //statics\n        var noValue = 'not available';\n        var playerName = window.otherVideoPlayerTech || 'NDP player'; //at this point, the whole thing shoudl be re-done, but adding a player type global var\n        var debugState = window.localStorage && window.localStorage.getItem('jf_test') ? true : false;\n\n        //privates\n        var _mediaHeartbeat = null;\n        var _appMeasurement = null;\n        var _videoData = null; //video data populated in scope by event\n        var _adData = null; //video data populated in scope by event\n        var _stateInfo = {\n            adPosition: 1,\n            playheadPosition: 0,\n            startupTime: 0,\n            manualPlayTime: 0,\n            videoCount: 0,\n            playState: 'stop',\n            videoType: 'VOD Clip',\n            inAd: false\n\n        };\n\n        //constructors from adobe for deligate\n        var CustomMediaHeartbeatDelegate = new ADB.va.MediaHeartbeatDelegate();\n        var MediaHeartbeat = ADB.va.MediaHeartbeat; //mapping to match documentation\n\n        //video info deligate\n        CustomMediaHeartbeatDelegate.getCurrentPlaybackTime = function() {\n            //playhead will be 0 for ads.\n            return Math.round(_stateInfo.playheadPosition / 1000) || 0;\n        };\n\n        CustomMediaHeartbeatDelegate.getQoSObject = function() {\n            //dont have QOS data right now (<bitrate>, <startuptime>, <fps>, <droppedFrames>)\n            return MediaHeartbeat.createQoSObject(0, Math.round(_stateInfo.startupTime), 0, 0);\n        };\n\n        var createAMandHBObjects = function() {\n            //create new appMeasurementmain and heartbeat instance \n            if (!_mediaHeartbeat) {\n                //use DTM values since this may load before the page track is complete\n                var appMAccount = window.hbCutomValues && typeof window.hbCutomValues.appMAccount === 'function' && window.hbCutomValues.appMAccount() || ''; //get from site specific function\n                // Set-up the AppMeasurement component using values from page version.\n                _appMeasurement = new AppMeasurement(appMAccount);\n                _appMeasurement.visitor = visitor;\n                _appMeasurement.trackingServer = s.trackingServer;\n                _appMeasurement.charSet = \"UTF-8\";\n                _appMeasurement.doPlugins = false;\n                _appMeasurement.ssl = true;\n                $t('track', 'ahb_adobeAppMeasurmentLoaded', {\n                    'sc_obj': _appMeasurement\n                });\n\n                //Media Heartbeat initialization\n                var mediaConfig = new ADB.va.MediaHeartbeatConfig();\n                mediaConfig.trackingServer = 'nbcume.hb.omtrdc.net';\n                mediaConfig.playerName = playerName;\n                mediaConfig.debugLogging = debugState; // set this to false for production apps.\n                mediaConfig.ssl = true;\n                mediaConfig.appVersion = $ndp && $ndp.__version || 'unknown'; //ndp player version\n                mediaConfig.ovp = 'unknown'; //change later\n                mediaConfig.channel = (function() {\n                    if (window.hbCutomValues && window.hbCutomValues.playerStyle === \"Offsite Embedded\") {\n                        return 'Off-domain';\n                    }\n                    return 'On-domain';\n                })();\n\n                _mediaHeartbeat = new MediaHeartbeat(CustomMediaHeartbeatDelegate, mediaConfig, _appMeasurement);\n            }\n        };\n\n        var setStartupTime = function(playInitiate) {\n            if (!window.performance || _stateInfo.startupTime !== 0) {\n                //only set startuptime first play\n                return;\n            }\n            var startupTime = 0;\n            if (playInitiate === 'Auto') {\n                startupTime = performance.now() / 1000;\n            } else {\n                startupTime = (performance.now() - _stateInfo.manualPlayTime) / 1000;\n            }\n            _stateInfo.startupTime = startupTime;\n        };\n\n        var convertDuration = function(duration) {\n            //if this is an ISO 8601 duration\n            var ISO8601 = /^PT(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+)S)?$/;\n            if (ISO8601.test(duration)) {\n                var h = 0,\n                    m = 0,\n                    s = 0;\n                var matches = ISO8601.exec(duration);\n                if (matches[1]) h = Number(matches[1]);\n                if (matches[2]) m = Number(matches[2]);\n                if (matches[3]) s = Number(matches[3]);\n                return h * 3600 + m * 60 + s;\n            }\n            //else return number\n            return duration;\n        };\n\n        $t('on', 'ndp_playerManualPlay', function() {\n            _stateInfo.manualPlayTime = window.performance && performance.now() || 0;\n            if (debugState) {\n                console.log('* ndp_playerManualPlay (' + performance.now() + ')');\n            }\n\n        });\n      \n        //setup events\n        $t('on', 'ndp_videoEvent', function(e, data) {\n            //populate scope data\n            var eventSection = data.eventType.split('_')[1] || '';\n            if (eventSection === 'AdEvent') {\n                _adData = data; //populate scope data with video data\n            } else if (eventSection === 'PlaybackEvent') {\n                _videoData = data; //populate scope data with video data\n            }\n\n            //if this is a progress event, populate playhead and exit\n            if (data.eventType.indexOf('PROGRESS') >= 0) {\n                if (data.videoData && data.videoData.playheadPosition !== 0) {\n                    //dont update playhead with ad progress\n                    if (data.eventType !== 'NDP_AdEvent_PROGRESS') {\n                        _stateInfo.playheadPosition = data.videoData.playheadPosition;\n                    }\n                }\n\n                //let the first AdEvent_PROGRESS event through\n                if (!(data.eventType === 'NDP_AdEvent_PROGRESS' && _stateInfo.inAd === false)) {\n                    return;\n                }\n            }\n\n            //if the heartbeat instance wasnt created yet, do it now\n            createAMandHBObjects();\n\n            var eventData = _videoData && _videoData.videoData || {};\n            var eventDataRaw = eventData.raw || {};\n\n            //set videoType based on guid (VOD, LINEAR, LIVE) (the telemundo one might need to be udpated later TODO)\n            if (/^lv_/.test(eventDataRaw.guid) || /^nbcnewslive/.test(eventDataRaw.guid) || /^TELE_ANV_ID/.test(eventDataRaw.guid)) {\n                _stateInfo.videoType = 'Linear';\n            } else if (/^nn_netcast_/.test(eventDataRaw.guid)) {\n                _stateInfo.videoType = 'VOD Episode';\n            } else {\n                _stateInfo.videoType = 'VOD Clip';\n            }\n\n            var playInitiate = (function() {\n                if (eventDataRaw.isContinuousPlay) {\n                    return 'Continuous';\n                }\n                if (_stateInfo.manualPlayTime !== 0) {\n                    return 'Manual';\n                }\n                return 'Auto';\n            })();\n\n            var playListInfo = (function() {\n                var playListInfo = {\n                    'id': false,\n                    'label': false\n                };\n                if (eventDataRaw.video_playlists && eventDataRaw.video_playlists[0]) {\n                    playListInfo.label = eventDataRaw.video_playlists[0].label || false;\n                    playListInfo.id = eventDataRaw.video_playlists[0].playlist_id || false;\n                }\n                return playListInfo;\n            })();\n\n            //had to move this out becuase of the pre-load event firing, and not knowing if ad_Start or content_Start firing\n            var startSession = function(customContextData) {\n                //start session on first frame\n\n                if (_stateInfo.playState == 'stop') {\n                    _stateInfo.playState = 'sessionStarted';\n                    var mediaInfo = MediaHeartbeat.createMediaObject(\n                        customContextData.videotitle || noValue, //video name\n                        customContextData.videoguid || noValue, //video ID\n                        (function() {\n                            if (_stateInfo.videoType === \"Linear\") {\n                                return -1; //set duration to -1 if its linear\n                            } else {\n                                return convertDuration(eventDataRaw.duration);\n                            }\n                        })(), //videoLength\n                        (function() {\n                            if (_stateInfo.videoType === \"Linear\") {\n                                return MediaHeartbeat.StreamType.LIVE;\n                            } else {\n                                return MediaHeartbeat.StreamType.VOD; //default VOD\n                            }\n                        })()\n                    );\n                    _mediaHeartbeat.trackSessionStart(mediaInfo, customContextData);\n                }\n            };\n\n            var pageName = window.hbCutomValues && window.hbCutomValues.pageName || s.pageName; //grab pagename from custom\n\n            var customContextData = { //custom context data for calls\n                'videocliptype': eventDataRaw.videoType || noValue,\n                'videocontentsource': eventDataRaw.source || noValue, //show name / network\n                'videocontenttype': 'Video',\n                'videodate': s.customTimeParting('d'),\n                'videoday': s.customTimeParting('dw'),\n                'videoguid': eventDataRaw.guid || noValue,\n                'videohour': s.customTimeParting('h'),\n                'videoinitiate': playInitiate || noValue, //\"Auto\" vs. \"Manual\" vs. \"Continuous\"\n                'videominute': s.customTimeParting('m'), //use customTimepart from scode file\n                'videompxid': eventDataRaw.mpxId || noValue,\n                'videonetwork': eventDataRaw.newsNetwork || noValue,\n                'videopagecontentcategory': noValue, //set remotly\n                'videopagename': pageName || noValue,\n                'videopagetype': noValue, //set remotly\n                'videoplatform': 'Web', //[todo] maybe mobile too?\n                'videoplayerstyle': noValue, //set remotly\n                'videoplayertech': $ndp && $ndp.playbackAdapter || noValue,\n                'videoplayerurl': window.location.href.split('?')[0],\n                'videoplaylist': playListInfo.label || noValue,\n                'videoplaylistid': playListInfo.id || noValue,\n                'videoprogram': eventDataRaw.source || noValue,\n                'videopublishdate': noValue,\n                'videoscreen': 'Normal', //[TODO] make this also show \"Full\"\n                'videostatus': 'Unrestricted',\n                'videosubcat1': noValue, //mpx primary category\n                'videosubcat2': noValue,\n                'videotitle': eventDataRaw.title || noValue,\n                //optionsal values\n                'videoadblockerdetection': s.cookieRead(\"i_abd\") || noValue, //use s cookieread\n                'videoflashversion': s.eVar88 || noValue, //uses \"FlashDetect.raw\"\n                'videonativesponsor': noValue,\n                'videopagestorylines': noValue,\n                'videoplayercount': noValue,\n                'videoplayertestvalue': window.__DY_VIDEO_TEST__ && window.__DY_VIDEO_TEST__.videoPlayerType || noValue,\n                'videoscrollcount': s.eVar86 || noValue,\n                'videosessionnumber': s.eVar35 || noValue, //session number count (from adobe)\n                'videostreamcount': _stateInfo.videoCount || noValue, //video count (set inside the event)\n                'videovideocontenttype': _stateInfo.videoType,\n                'videocontentrating': eventDataRaw.sentiment || noValue,\n                'videovisitorid': visitor.getMarketingCloudVisitorID(), //for testing mostly, visitorID\n                'videomutestate': $ndp.isMuted ? 'muted' : 'unmuted'\n            };\n            //append site specific data from seperate function\n            if (window.hbCutomValues) {\n                customContextData = window.hbCutomValues({\n                    'customContextData': customContextData,\n                    'eventDataRaw': eventDataRaw,\n                    '_stateInfo': _stateInfo\n                });\n\n            }\n            if (debugState) {\n                console.log('* ndp_videoEvent (' + performance.now() + ') : ' + data.eventType + ' : %O : %O : %O', data, customContextData, JSON.parse(JSON.stringify(_stateInfo)));\n            }\n\n            //specific events\n            switch (data.eventType) {\n                case 'NDP_PlaybackEvent_LOADED':\n                    //set videostreamcount, and increment\n                    _stateInfo.videoCount = _stateInfo.videoCount + 1;\n                    customContextData.videostreamcount = _stateInfo.videoCount;\n\n                    if (_stateInfo.playState !== 'stop') {\n                        //if other video is started while in pause, close out last session, and reset values\n                        _mediaHeartbeat.trackSessionEnd();\n                        _stateInfo.playState = 'stop';\n                        _stateInfo.adPosition = 1;\n                        _stateInfo.playheadPosition = 0;\n                        _stateInfo.inAd = false;\n                    }\n                    //reload app measurement settings before a videoLoad (to be sure its up to date)\n                    _appMeasurement.clearVars();\n                    _appMeasurement.pageName = pageName;\n                    break;\n\n                case 'NDP_PlaybackEvent_START':\n                    //set startup time\n                    setStartupTime(playInitiate);\n\n                    startSession(customContextData);\n\n                    if (_stateInfo.adPosition !== 1) { //if just came from an ad, end the adbreak\n                        _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdBreakComplete);\n                        _stateInfo.adPosition = 1;\n\n                        //do a seek event to force event fire at playback start after ad\n                        _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.SeekStart);\n                        _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.SeekComplete);\n                    }\n                    if (_stateInfo.playState !== 'play') {\n                        //if first asset after load\n                        _stateInfo.playState = 'play';\n                        _mediaHeartbeat.trackPlay();\n                    }\n                    break;\n\n                case 'NDP_PlaybackEvent_PLAY':\n                case 'NDP_AdEvent_PLAY':\n                    //play was resumed (filter multiple plays)\n                    if (_stateInfo.playState === 'pause') {\n                        _stateInfo.playState = 'play';\n                        _mediaHeartbeat.trackPlay();\n                    }\n                    break;\n                case 'NDP_PlaybackEvent_PAUSE':\n                case 'NDP_AdEvent_PAUSE':\n                    _stateInfo.playState = 'pause';\n                    _mediaHeartbeat.trackPause();\n                    break;\n\n                case 'NDP_PlaybackEvent_SEEK':\n                    _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.SeekStart);\n                    _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.SeekComplete);\n                    //track rewind event\n                    if (eventData.playheadPosition < _stateInfo.playheadPosition) {\n                        _appMeasurement.contextData = customContextData;\n                        _appMeasurement.contextData.videoscrub = 'rewind';\n                        _appMeasurement.tl(this, 'o', 'Video Rewind', null);\n                    }\n                    break;\n\n                case 'NDP_PlaybackEvent_COMPLETE':\n                    _mediaHeartbeat.trackComplete();\n                    _mediaHeartbeat.trackSessionEnd();\n                    _stateInfo.playState = 'stop';\n                    _stateInfo.playheadPosition = 0;\n                    break;\n\n                case 'NDP_AdEvent_START':\n                    //move all ad logic to progress\n                    //have to use this since content_loaded fires earlier.\n                    startSession(customContextData);\n                    break;\n\n                case 'NDP_AdEvent_PROGRESS':\n                    //set startup time \n                    _stateInfo.inAd = true;\n                    setStartupTime(playInitiate);\n                    //for ads, its only ever at the beginings for now, so hard coded\n                    var adData = _adData && _adData.videoData || {};\n                    var adLength = Math.round(adData.totalLength / 1000) || 0;\n                    var adBreakInfo = MediaHeartbeat.createAdBreakObject(\n                        noValue, //name\n                        1, //position \n                        0); //startTime\n                    var adInfo = MediaHeartbeat.createAdObject(\n                        noValue, //name\n                        ('rand_' + (Math.random() * 36 * 100000 | 0).toString(36)), //id (random ID)\n                        _stateInfo.adPosition, //position\n                        adLength); //length\n\n                    if (_stateInfo.adPosition === 1) { //start adBreak\n                        _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdBreakStart, adBreakInfo);\n                    }\n                    _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdStart, adInfo, customContextData);\n                    _stateInfo.adPosition = _stateInfo.adPosition + 1;\n                    //do the track play AFTER the ad starts\n                    if (_stateInfo.playState !== 'play') {\n                        //if first asset after load\n                        _stateInfo.playState = 'play';\n                        _mediaHeartbeat.trackPlay();\n                    }\n                    break;\n\n                case 'NDP_AdEvent_COMPLETE':\n                    if (_stateInfo.inAd) {\n                        _stateInfo.inAd = false;\n                        _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdComplete);\n                        _stateInfo.playheadPosition = 0;\n                    }\n                    break;\n\n                default:\n                    break;\n            }\n        });\n    };\n\n    //run after adobe is loaded, or if its alrady loaded.\n    if ($t('dtm_adobeAppMeasurmentLoaded', 'not loaded') !== 'not loaded') {\n        setupHeartbeat(window.s);\n    } else {\n        $t('on', 'dtm_adobeAppMeasurmentLoaded', function() {\n            setupHeartbeat(window.s);\n        });\n    }\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL24d560ccc43945d5ac49d0505c379a8a',
            name: 'Action - mbt_moreloader_click',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, s */\n$t('on', 'mbt_moreloader_click', function() {\n    var actionContextData = {\n        'news.linkmoduledetail': 'Button',\n        'news.linkmoduletype': 'Load More'\n    };\n    s.contextData = s.extendArray(s.contextData, actionContextData);\n\n    //track action\n    s.tl(true, 'o', 'load more link click');\n\n    //cleanup values after action\n    for (var item in actionContextData) {\n        delete s.contextData[item];\n    }\n});\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL30104985d62541618d2121f69f5a7599',
            name: 'BizDev - Data Plus Math tag',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'today.com', 'nbcnews.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    var loadedScripts = {};\n    var dpmAddress = 'https://c.tvpixel.com/js/current/dpm_pixel_min.js?aid=nbcu-3dcc5105-25e1-45bf-9fba-c85842909d0d';\n    var loadScript = function (address) {\n        if (address && !loadedScripts[address]) {\n            var head = document.getElementsByTagName('head')[0];\n            var script = document.createElement('script');\n            script.type = 'text/javascript';\n            script.src = address;\n            head.appendChild(script);\n            loadedScripts[address] = true;\n        }\n    };\n  \n    $t('on', 'dtm_pageView', function (e, data) {\n        var trackView = data.trackView !== false; //this will default all to true if not false\n        if (trackView) {\n            loadScript(dpmAddress);\n        }\n    });\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa7483b08115446c89243ebb892b56e8e',
            name: 'fix - dtm_video_tmp_event',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '^/now', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n  $t('register', 'dtm_video_tmp_event');\n  window.onbeforeunload = videoStopEvent;\n\n  function videoStopEvent() {\n      if ($t('uni_videoEvent.videoState.playState', 'none') === 'play') {\n        $t('track', 'dtm_video_tmp_event', { eventName: 'Linear Stream Stop', eventType: 'Navigation', eventData: {} });\n      }\n  }\n})();\n\n(function () {\n  var currentVideoGuid = '';\n\n  $t('on', 'uni_videoEvent', function (e, data) {\n    var videoData = data.videoData || {};\n    var noValue = 'not available';\n\n    if (data.eventType.indexOf('PROGRESS') >= 0) {\n      //skip all progress events\n      return;\n    }\n\n    var eventName = ''\n\n    var siteBrand = (function () {\n      //brand is only today, and everything else is nbcnews\n      if ($t('jsonLd.Dataset.0.vertical') === 'today') {\n        return 'Today';\n      } else if ($t('jsonLd.Dataset.0.vertical') === 'msnbc') {\n        return 'MSNBC';\n      } else {\n        return 'NBC News';\n      }\n    })();\n\n    var metadata = {\n      'video mpx id': videoData.mpxId || noValue,\n      'video guid': videoData.guid || noValue,\n      'video title': videoData.title || noValue,\n      'video brand domain': siteBrand, //what site user is on\n      'video network': videoData.newsNetwork,\n      'video program': videoData.source,\n      'video content source': videoData.source,\n      'video air date': videoData.dateBroadcast || noValue, //need format\n      'video asset status': 'Unrestricted',\n      'video screen mode': 'Normal',\n      'video length': videoData.duration * 1000 || noValue, //in miliseconds\n      'video clip category': videoData.videoType || noValue, //(Linear, VOD Clip, VOD Episode)\n      'video player name': videoData.playbackAdapter,\n      'video initiation': videoData.playInitiate,\n      'video playlist name': videoData.playListLabel || noValue,\n      'video playlist id': videoData.playListId || noValue,\n      'video content type': 'Video',\n      'video publish date': videoData.datePublished || noValue, //need format\n      'video index start': videoData.playheadPosition || noValue\n    }\n\n    switch (data.eventType) {\n      case 'PLAY':\n        if (videoData.guid && (currentVideoGuid != videoData.guid)) {\n          if (videoData.streamType === 'linear') {\n            eventName = 'Linear Stream Start';\n          } else {\n            eventName = 'VOD Clip Start';\n          }\n          currentVideoGuid = videoData.guid;\n        }\n        else return;\n        break;\n      case 'COMPLETE':\n        if (videoData.streamType === 'linear') {\n          eventName = 'Linear Stream Stop';\n        } else {\n          eventName = 'VOD Clip Complete';\n        }\n        break;\n      case 'STOP':\n        if (videoData.streamType === 'linear') {\n          eventName = 'Linear Stream Stop';\n        }\n    }\n\n    if (eventName) {\n      metadata.eventName = eventName\n      $t('track', 'dtm_video_tmp_event', metadata);\n    }\n  });\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa3325d2dc30e44beb233c987c4c8eb4b',
            name: 'BizDev - FB Remarketing Pixel ',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n(function(){\n    /*global $t, fbq */\n    !function (f, b, e, v, n, t, s) {\n        if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };\n        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';\n        n.queue = []; t = b.createElement(e); t.async = !0;\n        t.src = v; s = b.getElementsByTagName(e)[0];\n        s.parentNode.insertBefore(t, s)\n    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');\n\n    var pixelIds = {\n        'newsletter':'514991798612189',\n        'ecommerce':'258438165004812'\n    };\n\n    for (var pixel in pixelIds) {\n        fbq('init', pixelIds[pixel]);\n    }\n\n    $t('on', 'dtm_pageView', function (e, data) {\n        var trackView = data.trackView !== false; //this will default all to true if not false\n        var pageIndex = $t(e.type + '.index', 0);\n        //Tracks all page views.\n        if (trackView) {\n            fbq('track', 'PageView', {});\n        \n            //Tracks only ECommerce.\n            if ($t('jsonLd.Dataset.' + pageIndex + '.ecommerceEnabled',false)) {\n                fbq('trackSingle', pixelIds.ecommerce, 'ViewContent', {});\n            }\n        }\n    });\n\n    $t('on', 'mbt_ecommerce_shop_button', function() {\n        fbq('trackSingle', pixelIds.ecommerce , 'Lead', {});\n    });\n\n    //Promo - FB Pixel to track newsletter mach+better\n    $t('on', 'nv_newsletter_subscribe', function (e, data) {\n        if (data.id === 1 || data.id === 2) {\n            var fbTackingCode = data.id === 1 ? 'MACHNewsletterBento' : 'BETTERNewsletterBento';\n            fbq('trackSingleCustom', '514991798612189', fbTackingCode, {});\n        }\n    });\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL27cac79255634341b40374b2439591aa',
            name: 'Global - Nielsen video',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "/* global, $t */\n(function() {\n    'use strict';\n    //calculated on load\n    //statics\n    var noValue = 'not available';\n    var extend = function(defaults, options) {\n        var extended = {};\n        var prop;\n        for (prop in defaults) {\n            if (Object.prototype.hasOwnProperty.call(defaults, prop)) {\n                extended[prop] = defaults[prop];\n            }\n        }\n        for (prop in options) {\n            if (Object.prototype.hasOwnProperty.call(options, prop)) {\n                extended[prop] = options[prop];\n            }\n        }\n        return extended;\n    };\n\n    //setup brand settings per top level domain\n    var topLevelDomain = s.topLevelDomain;\n    var brandSettings = {\n        'nbcnews.com': {\n            playerID: 'P35C41790-24D9-4BCD-9873-48B547719D85',\n            defaultBrand: 'NBC News',\n            customValues:{\n                vcid: 'c04'\n            }\n        },\n        'today.com': {\n            playerID: 'P629EFCBC-BB38-416B-981A-0F18B5DDA193',\n            defaultBrand: 'NBC News',\n            customValues:{\n                vcid: 'c30'\n            }\n        },\n        'msnbc.com': {\n            playerID: 'P85E5B977-5FE2-4654-A4A4-3AF8BAAF454E',\n            defaultBrand: 'NBC News',\n            customValues:{\n                vcid: 'c29'\n            }\n        },\n        'telemundo.com': {\n            playerID: 'P86DC7712-C75F-4127-B0F1-D2984B243E50',\n            defaultBrand: 'Telemundo',\n            customValues:{\n                segB: 'Telemundo Web',\n                segC: 'Telemundo Web \u2013 Telemundo \u2013 Noticias',\n                subbrand:'c26'\n            }\n        }\n    };\n    var currentBrand = brandSettings[topLevelDomain] || brandSettings['nbcnews.com']; //default to nbcnews\n\n    var formatDate = function(dateStr) {\n        //convert: Thu Nov 09 2017 16:32:29 GMT+0000 (UTC) convert to YYYYMMDD HH:MI:SS (20170705 11:41:32)\n        function pad(number) {\n            if (number <= 9) {\n                number = '0' + number;\n            }\n            return number + '';\n        }\n        if (typeof dateStr !== 'string') {\n            return false;\n        }\n        var date = new Date(dateStr);\n        //return if its not a valid date\n        if (isNaN(date.getTime())) { return false; }\n        var timeString = pad(date.getUTCHours()) + ':' + pad(date.getUTCMinutes()) + ':' + pad(date.getUTCSeconds());\n\n        return '' + date.getUTCFullYear() + pad(date.getUTCMonth() + 1) + pad(date.getUTCDate()) + ' ' + timeString;\n    };\n\n    var convertDuration = function(duration) {\n        //if this is an ISO 8601 duration\n        var ISO8601 = /^PT(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+)S)?$/;\n        if (ISO8601.test(duration)) {\n            var h = 0,\n                m = 0,\n                s = 0;\n            var matches = ISO8601.exec(duration);\n            if (matches[1]) h = Number(matches[1]);\n            if (matches[2]) m = Number(matches[2]);\n            if (matches[3]) s = Number(matches[3]);\n            return h * 3600 + m * 60 + s;\n        }\n        //else return number\n        return duration;\n    };\n  \n    var isLinearVideo = function(guid){\n        if (/^TELE_ANV_ID/.test(guid) || /^lv_/.test(guid) || /^nbcnewslive/.test(guid)) { \n          return 'y';\n        }else{\n          return 'n';\n        }\n    }\n      \n    //expose function for custom values\n    window.nielsenCutomValues = (function() {\n        var customBuilder = function(context) {\n            var eventDataRaw = context.eventDataRaw;\n            var contentMetadataObject = context.contentMetadataObject;\n            //just add all of them for now\n            contentMetadataObject = extend(contentMetadataObject, {\n                type: 'content',\n                assetid: eventDataRaw.guid,\n                program: eventDataRaw.source && eventDataRaw.source.name || currentBrand.defaultBrand, //not sure,\n                title: eventDataRaw.headline && eventDataRaw.headline.primary || noValue,\n                length: convertDuration(eventDataRaw.duration),\n                mediaURL: eventDataRaw.canonicalUrl,\n                airdate: formatDate(eventDataRaw.datePublished) || noValue,\n                isfullepisode: isLinearVideo(eventDataRaw.guid),\n                crossId2: eventDataRaw.source && eventDataRaw.source.name || currentBrand.defaultBrand,\n                adloadtype: '2',\n                hasAds: '2',\n                //from nielsen\n                clientid: 'us-800148'\n                \n            });\n            contentMetadataObject = extend(contentMetadataObject, currentBrand.customValues)\n            return contentMetadataObject;\n        };\n        customBuilder.playerID = currentBrand.playerID;\n        return customBuilder;\n    })();\n})();",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, NOLBUNDLE */\n// this is basicaly a copy of the adobe heartbeat global script.\n// v1.8\n(function() {\n    // Add Static Queue Snippet\n    ! function(t, n) {\n        t[n] = t[n] || {\n            nlsQ: function(e, o, c, r, s, i) {\n                return s = t.document, r = s.createElement(\"script\"), r.async = 1, r.src = (\"http:\" === t.location.protocol ? \"http:\" : \"https:\") + \"//cdn-gl.imrworldwide.com/conf/\" + e + \".js#name=\" + o + \"&ns=\" + n, i = s.getElementsByTagName(\"script\")[0], i.parentNode.insertBefore(r, i), t[n][o] = t[n][o] || {\n                    g: c || {},\n                    ggPM: function(e, c, r, s, i) {\n                        (t[n][o].q = t[n][o].q || []).push([e, c, r, s, i]);\n                    }\n                }, t[n][o];\n            }\n        };\n    }(window, \"NOLBUNDLE\");\n\n    var debugState = window.localStorage && window.localStorage.getItem('jf_test') ? true : false;\n\n    // Created SDK Instance\n    var playerID = (function(){\n        if(window.nielsenCutomValues){\n            return window.nielsenCutomValues.playerID;\n        }else{\n            //default to the nbcnews playerID\n            return 'P35C41790-24D9-4BCD-9873-48B547719D85';\n        }\n    })();\n    var _nSdkInstance = NOLBUNDLE.nlsQ(playerID, \"nlsnInstance\", {\n        nol_sdkDebug: debugState ? \"debug\" : \"off\"\n    });\n    var _videoData = null; //video data populated in scope by event\n    var _adData = null; //video data populated  \n    var _stateInfo = {\n        playheadPosition: 0,\n        playState: 'stop',\n        inAd: false\n    };\n\n    var stopSession = function() {\n        if (_stateInfo.inAd === true) {\n            // Only inside a midroll indicate <stop> for the ad\n            _nSdkInstance.ggPM('stop', _stateInfo.playheadPosition);\n        } else if (_stateInfo.playState !== 'stop') {\n            // Indicate <end> and <stop> for the content\n            _nSdkInstance.ggPM('end', _stateInfo.playheadPosition);\n            _nSdkInstance.ggPM('stop', _stateInfo.playheadPosition);\n        }\n    };\n    //set for unload with stop session\n    window.addEventListener('beforeunload', stopSession);\n\n    $t('on', 'ndp_videoEvent', function(e, data) {\n        //populate scope data\n        var eventSection = data.eventType.split('_')[1] || '';\n        if (eventSection === 'AdEvent') {\n            _adData = data; //populate scope data with video data\n        } else if (eventSection === 'PlaybackEvent') {\n            _videoData = data; //populate scope data with video data\n        }\n\n        //if this is a progress event, populate playhead and exit\n        if (data.eventType.indexOf('PROGRESS') >= 0) {\n            if (data.videoData && data.videoData.playheadPosition !== 0) {\n                (function() {\n                    var prevPlayheadPosition = _stateInfo.playheadPosition;\n                    _stateInfo.playheadPosition = Math.round(data.videoData.playheadPosition / 1000);\n                    //populate playhead to nielsen every second\n                    if (prevPlayheadPosition != _stateInfo.playheadPosition) {\n                        _nSdkInstance.ggPM('setPlayheadPosition', _stateInfo.playheadPosition);\n                    }\n                })();\n            }\n\n            //let the first AdEvent_PROGRESS event through\n            if (!(data.eventType === 'NDP_AdEvent_PROGRESS' && _stateInfo.inAd === false)) {\n                return;\n            }\n        }\n\n        var eventData = _videoData && _videoData.videoData || {};\n        var eventDataRaw = eventData.raw || {};\n\n        //default values, overwritten with custom\n        var contentMetadataObject = {\n            type: 'content',\n            assetid: eventDataRaw.guid,\n            program: eventDataRaw.source,\n            title: eventDataRaw.title,\n            length: eventDataRaw.duration || '0',\n            mediaURL: eventDataRaw.canonicalUrl,\n            airdate: '', // 'YYYYMMDD HH:MI:SS'\n            isfullepisode: 'n',\n            //crossId1: 'Standard Episode ID',\n            crossId2: eventDataRaw.guid,\n            adloadtype: '2',\n            hasAds: '2',\n            //from nielsen\n            clientid: 'us-800148',\n        };\n\n        if (window.nielsenCutomValues) {\n            contentMetadataObject = window.nielsenCutomValues({\n                'contentMetadataObject': contentMetadataObject,\n                'eventDataRaw': eventDataRaw,\n                '_stateInfo': _stateInfo\n            });\n\n        }\n\n        //specific events\n        switch (data.eventType) {\n            case 'NDP_PlaybackEvent_LOADED':\n                if (_stateInfo.playState === 'play') {\n                    //if other video is started while in pause, close out last session, and reset values\n                    stopSession();\n\n                    _stateInfo.playState = 'stop';\n                    _stateInfo.playheadPosition = 0;\n                    _stateInfo.inAd = false;\n                }\n\n                _nSdkInstance.ggPM('loadMetadata', contentMetadataObject);\n                break;\n\n            case 'NDP_PlaybackEvent_START':\n                _nSdkInstance.ggPM('loadMetadata', contentMetadataObject);\n                _nSdkInstance.ggPM('setPlayheadPosition', _stateInfo.playheadPosition);\n\n                _stateInfo.playState = 'play';\n                break;\n\n            case 'NDP_PlaybackEvent_PLAY':\n            case 'NDP_AdEvent_PLAY':\n                //play was resumed (filter multiple plays)\n                if (_stateInfo.playState === 'pause') {\n                    _stateInfo.playState = 'play';\n                    _nSdkInstance.ggPM('setPlayheadPosition', _stateInfo.playheadPosition);\n                }\n                break;\n            case 'NDP_PlaybackEvent_PAUSE':\n            case 'NDP_AdEvent_PAUSE':\n                _stateInfo.playState = 'pause';\n                _nSdkInstance.ggPM('stop', _stateInfo.playheadPosition);\n                break;\n\n            case 'NDP_PlaybackEvent_SEEK':\n                _nSdkInstance.ggPM('setPlayheadPosition', _stateInfo.playheadPosition);\n                break;\n\n            case 'NDP_PlaybackEvent_COMPLETE':\n                stopSession();\n                _stateInfo.playState = 'stop';\n                _stateInfo.playheadPosition = 0;\n                break;\n\n            case 'NDP_AdEvent_START':\n                //move all ad logic to progress\n                break;\n\n            case 'NDP_AdEvent_PROGRESS':\n                //need flag since complete is always fired\n                _stateInfo.inAd = true;\n                //hardcoded pre-roll only\n                var adMetadataObject = {\n                    assetid: ('rand_' + (Math.random() * 36 * 100000 | 0).toString(36)),\n                    type: 'preroll'\n                };\n\n                _nSdkInstance.ggPM('loadMetadata', adMetadataObject);\n                _nSdkInstance.ggPM('setPlayheadPosition', _stateInfo.playheadPosition);\n\n                _stateInfo.playState = 'play';\n                break;\n\n            case 'NDP_AdEvent_COMPLETE':\n                if (_stateInfo.inAd) {\n                    _stateInfo.inAd = false;\n                    _nSdkInstance.ggPM('setPlayheadPosition', _stateInfo.playheadPosition);\n                    _nSdkInstance.ggPM('stop', _stateInfo.playheadPosition);\n\n                    _stateInfo.playheadPosition = 0;\n                }\n                break;\n\n            default:\n                break;\n        }\n    });\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL37a1ab47add94104879341fbc90ae9bb',
            name: 'z1Code - NDP video event subscription',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 40 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* version 1.3 */\n/*global $t */\n(function() {\n    var subscribeTsEventsToNdpPlayer = function(ndpPlayer, playerBrand) {\n        //set stub and make local instance of global\n        var $ndp = window.$ndp || {\n            events: {}\n        };\n\n        //register $t event\n        $t('register', 'ndp_videoEvent', {\n            'remote': false\n        }); //not remote for now\n\n        //handle ndp events\n        var tsVideoEventBind = function(e) {\n            //accounts for multi-video player where all events are on all players\n            var activePlayerId = e.payload && e.payload.playerId;\n            if ((ndpPlayer.id() === e.playerId) || !e.playerId) { //no event playerID if its old version\n\n                var eventName = e.type && e.type[0] || '';\n                //could explicitly map data here, but sending it all is more versatile\n                var videoData = e.payload && e.payload.asset || {};\n                //add lengths for ads to videoData to standardize\n                videoData.totalLength = e.payload && Math.round(e.payload.totalLength) || 0;\n                videoData.playheadPosition = e.payload && Math.round(e.payload.playheadPosition) || 0;\n\n                $t('track', 'ndp_videoEvent', {\n                    'eventIds': {\n                        'playerId': ndpPlayer.id(),\n                        'activePlayerId': activePlayerId,\n                        'eventPlayerId': e.playerId\n                    },\n                    'eventType': eventName,\n                    'videoData': videoData,\n                    'playerBrand': playerBrand\n                });\n            }\n\n        };\n        // subscribe to all ndp events, based on $ndp.events \"sections\"\n        var eventSections = ['AdEvent', 'PlaybackEvent'];\n        for (var i = 0; eventSections[i]; i++) {\n            for (var eventValue in $ndp.events[eventSections[i]]) {\n                if (typeof $ndp.events[eventSections[i]] !== 'undefined' && typeof $ndp.events[eventSections[i]][eventValue] === 'object' && typeof $ndp.events[eventSections[i]][eventValue][0] === 'string') {\n                    ndpPlayer.on($ndp.events[eventSections[i]][eventValue], tsVideoEventBind);\n                }\n            }\n        }\n    };\n    if ($t('ndp_playerInit.playerObj')) {\n        subscribeTsEventsToNdpPlayer($t('ndp_playerInit.playerObj'), $t('ndp_playerInit.brand'));\n    } else {\n        $t('on', 'ndp_playerInit', function(e, data) {\n            subscribeTsEventsToNdpPlayer(data.playerObj, data.brand);\n        });\n    }\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL857f5448325f47eea3ec9c0bd0368599',
            name: 'Action - mbt_transporter_*',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n\n/* globals $t, s */\n(function() {\n    window.dtm_pageview = window.dtm_pageview || {};\n    window.dtm_pageview.viewedPages = window.dtm_pageview.viewedPages || {}; //list of URLS already tracked (make it exposed, so )\n    var viewedPages = window.dtm_pageview.viewedPages; //keep it simple, so its shorter\n    var pageTries = {\n        default:{timeout: 100, tries: 5}\n    };\n\n    $t('on', 'mbt_transporter_loadPage', function() {\n        // reload ldjson\n        // this should be when it is parsed, but loadPage is early from when the meta data is actualy available on the page.\n        window.parseJsonLd();\n    });\n\n    $t('on', 'mbt_transporter_nav', function(e,data) {\n        // try to re-parse ldjson until it is a match with the nav data, then trigger pageview\n        // this is becuase the metadata loads late on the page vs the nav event. it is most likely a prolem with the <helmut> component\n        pageTries[$t(e.type + '.url', 'na')] = {\n            tries : pageTries.default.tries,\n            timer : setTimeout(function(){\n                var trackView = data.trackView !== false; //this will default all to true if not false\n                var url = $t(e.type + '.url', 'na');\n                window.parseJsonLd(); // parse again to get jsonld changes\n                var index = (function() {\n                    //this figures out index by compring urls, instead of relying on the provided one.\n                    var i;\n                    var dataset = $t('jsonLd.Dataset', []);\n                    for (i = 0; dataset[i]; i++) {\n                        if (dataset[i].url && dataset[i].url.match(new RegExp(url + '$' , 'g') )) {\n                            return i;\n                        }\n                    }\n                    return -1; //if no index from loop, default to -1 for no metadata;\n                })();\n                if(index != -1 || pageTries[url].tries <= 0){\n                    //check to see if thise page has been tracked already (only one pageview per URL)\n                    // also exclude liveblog views from transporter\n                    if (viewedPages[$t(e.type + '.url')] || $t(e.type + '.type') === 'liveBlog') {\n                        trackView = false;\n                    } else {\n                        viewedPages[$t(e.type + '.url', 'na')] = true;\n                        trackView = true;\n                    }\n                    $t('track', 'dtm_pageView', {\n                        initiator: 'transporter',\n                        index: index, // $t(e.type + '.index', index) just use the searched index, to know if there is metadata\n                        url: $t(e.type + '.url', ''),\n                        trackView: trackView\n                    });\n                    clearTimeout(pageTries[url].timer);\n                }\n                pageTries[url].tries--;\n            },pageTries.default.timeout)\n        };\n    });\n    var handleScrollEvent = function(e) {\n        var actionContextData = {\n            'news.pagescrollpercent': $t(e.type + '.percent', s.noValue)\n        };\n        s.contextData = s.extendArray(s.contextData, actionContextData);\n\n        //track action\n        s.tl(true, 'o', 'percent scrolled');\n\n        //cleanup values after action\n        for (var item in actionContextData) {\n            delete s.contextData[item];\n        }\n    }\n    // trasnporter event is going away\n    $t('on', 'mbt_transporter_scrolled_percentage', handleScrollEvent);\n    $t('on', 'mbt_scrolled_percentage', handleScrollEvent);\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL3e9b5e9587e342bc9a1119731f681cc2',
            name: 'Action - ndp_playerStick',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, s */\n$t('on', 'ndp_playerStick', function() {\n    var actionContextData = {\n        'news.pageevents': 'Video docked'\n    };\n    s.contextData = s.extendArray(s.contextData, actionContextData);\n\n    //track action\n    s.tl(true, 'o', 'Video docked');\n\n    //cleanup values after action\n    for (var item in actionContextData) {\n        delete s.contextData[item];\n    }\n});\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL403fb4c7187c4dcf994b1a9e2fa7fa59',
            name: 'BizDev - Quora Pixel',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'staging', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\nif($t && $t('jsonLd.Dataset.0.pageType','').toLowerCase() === 'article'){ //only on article pages (doesnt account for SPA and transporter)\n  !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function()\n  {n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');\n  qp('init', '84010779d768495588826e8170d4c66e');\n  qp('track', 'ViewContent');\n}\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL46d9ab50b8554712b13124d3833476d1',
            name: '! - PageView - passThrough',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 70 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* global $t, parseJsonLd */\n(function () {\n    window.dtm_pageview = window.dtm_pageview || {};\n    window.dtm_pageview.viewedPages = window.dtm_pageview.viewedPages || {}; //list of URLS already tracked (make it exposed, so )\n    var viewedPages = window.dtm_pageview.viewedPages; //keep it simple, so its shorter\n\n    var trackView = true;\n    var i, excludedPaths = [\n        /\\/embedded-video\\//,\n        /^\\/playmaker\\/embed/,\n        /^\\/embedded-pkg\\//\n    ];\n\n    $t('register', 'dtm_pageView');\n    //reparse ldjson before pageview\n    if (typeof parseJsonLd === 'function') {\n        parseJsonLd();\n    }\n\n    //dont track pages from exlude list\n    for (i = 0; (excludedPaths[i] && trackView); i++) {\n        if (document.location.pathname.search(excludedPaths[i]) != -1) {\n            trackView = false;\n        }\n    }\n\n    //check to see if thise page has been tracked already (only one pageview per URL)\n    if (viewedPages[document.location.pathname]) {\n        trackView = false;\n    }\n    $t('track', 'dtm_pageView', { initiator: 'pageViewPassThrough', trackView: trackView, url: document.location.pathname });\n    viewedPages[document.location.pathname] = true;\n\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL6194655133594f59918af91e0fb93d5a',
            name: 'Global - Parsely analytics',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: 'widget/.*', valueIsRegex: !0 },
                    { value: 'embedded-pkg/.*', valueIsRegex: !0 },
                    { value: 'playmaker/embed.*', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '\n(function() {\n    var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n    var rootElement = document.getElementsByTagName(\'head\')[0] || document.getElementsByTagName(\'body\')[0];\n    var topDiv = document.createElement(\'div\');\n    var insideSpan = document.createElement(\'span\');\n    insideSpan.setAttribute(\'data-parsely-site\', topLevelDomain)\n    insideSpan.id = \'parsely-cfg\';\n    topDiv.id = \'parsely-root\';\n    topDiv.style = \'display: none\';\n    topDiv.appendChild(insideSpan);\n    rootElement.appendChild(topDiv)\n})();\n\n(function(s, p, d) {\n    var h = d.location.protocol,\n        i = p + "-" + s,\n        e = d.getElementById(i),\n        r = d.getElementById(p + "-root"),\n        u = h === "https:" ? "d1z2jf7jlzjs58.cloudfront.net" : "static." + p + ".com";\n    if (e) return;\n    if(d.location.pathname.indexOf("embedded-video") >= 0) {\n        var notrackScr = d.createElement(s);\n        notrackScr.innerText = "PARSELY = { autotrack: false };";\n        r.appendChild(notrackScr);\n    }\n    e = d.createElement(s);\n    e.id = i;\n    e.async = true;\n    e.src = h + "//" + u + "/p.js";\n    r.appendChild(e);\n})("script", "parsely", document);\n\n',
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, PARSELY, s */\n(function() {\n    $t('on', 'dtm_pageView', function(e, data) {\n        var pageIndex = $t(e.type + '.index', '0');\n        var trackPage = (function() {\n            var trackView = data.trackView !== false; //this will default all to true if not false\n            // it looks like metadata is replaced instead of added to the page now, so must use omniture count instead\n            var notFirst = s && s.contextData && s.contextData['news.scrollcount'] > 1;\n            var inlineFront = notFirst && ($t('jsonLd.Dataset.' + pageIndex + '.pageType', '').toLowerCase() === 'front');\n\n            return trackView && notFirst && !inlineFront;\n        })();\n\n        if (trackPage && window.PARSELY && window.PARSELY.beacon) {\n            PARSELY.beacon.trackPageView({\n                url: [location.protocol, '//', location.host, location.pathname].join(''), // URL to be tracked\n                urlref: document.referrer, // Referring URL\n                js: 1 // flag indicating this is dynamic\n            });\n        }\n    });\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL4853ed24c6e9419c8dfd73ae8ad6be88',
            name: 'mParticle - $t tracking',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "/**\n * checks the event name with the exclude list\n * Params: \n ** { trackingEvent }: object with event info\n * Return:\n ** { boolean }: True if we should skip this event and False if we want to track it\n */\n(function () {\n  function exclude(trackingEvent) {\n      switch (trackingEvent.eventType) {\n          case ('ndp_videoEvent'):\n          case ('uni_videoEvent'):\n              return true; //for now just exclude all video events\n              var excludeEvent = trackingEvent && trackingEvent.eventData && trackingEvent.eventData.eventType || '';\n              var videoExcludeList = [\"NDP_PlaybackEvent_PROGRESS\",\"NDP_AdEvent_PROGRESS\",\"PROGRESS\"];\n              if (videoExcludeList.includes(excludeEvent)) { \n                return true; \n              }\n              break;\n          case ('mParticle_track_event'):\n          case ('dtm_pageView'):\n          case ('ndp_playerInit'):\n          case ('playMaker_init'):\n              return true;\n          default:\n              return false\n      }\n  }\n  \n  if (window.$t) {\n      $t('bindTrack', function (e, trackingEvent) {\n          // check if the event is one that we want to exclude\n          if (exclude(trackingEvent)) { return; }\n\n          //prefix data, and remove objects\n          var prefedData = (function(data){\n            var tmp = {};\n            var keys = Object.keys(data);\n            for (var j=0; j < keys.length; j++) {\n               var key = '$t ' + keys[j];\n               if(typeof data[keys[j]] !== 'object'){\n                 tmp[key] = data[keys[j]];\n               }\n            }\n            return tmp;\n          })(trackingEvent.eventData)\n\n          var eventName = trackingEvent && trackingEvent.eventType || '';\n          window.$t('track', 'mParticle_track_event', { eventName: \"$t \" + eventName, eventType: 'Navigation', eventData: prefedData });\n      }) \n  }\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL4a0e3cf080b74c73b0af5ed7b7157682',
            name: 'Ads - Pressboard tag',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    var ranPressboard = false;\n    $t('on', 'dtm_pageView', function (e, data) {\n        var pageIndex = $t(e.type + '.index', '0');\n        var trackView = data.trackView !== false; //this will default all to true if not false\n        var nativeSponsor = $t('jsonLd.Dataset.' + pageIndex + '.sponsor', false);\n\n        if (nativeSponsor && trackView && !ranPressboard) {\n            //lookup ID\n            var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n            var siteInfo = {\n                'today.com': '174872',\n                'nbcnews.com': '174868',\n                'msnbc.com': '174864'\n            };\n            var siteId = siteInfo[topLevelDomain];\n\n            //add div after content (had to delay for content redraw)\n            setTimeout(function () {\n                var articleNode = document.getElementsByTagName('article')[0];\n                if (articleNode) {\n                    var trackingNode = document.createElement('div');\n                    trackingNode.id = 'pressboard-ad-sponsorship-msg';\n                    articleNode.parentNode.insertBefore(trackingNode, articleNode.nextSibling);\n                }\n            }, 300)\n\n            //load script\n            var s = document.createElement('script');\n            s.type = 'text/javascript';\n            s.async = !0;\n            s.src = 'https://adserver.pressboard.ca/v3/embedder?media=' + siteId;\n            var d = document.getElementsByTagName(\"script\")[0];\n            d.parentNode.insertBefore(s, d);\n            ranPressboard = true;\n        }\n    });\n})()",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL870615d25a6d44248d3a62b83de733c7',
            name: 'Action - mbt_navbar_*',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, s */\n(function() {\n    $t('on', 'mbt_navbar_topicClick', function(e) {\n        var actionContextData = {\n            'news.linkmoduledetail': 'Hamburger Link',\n            'news.linkmoduletype': $t(e.type + '.topic', s.noValue)\n        };\n        s.contextData = s.extendArray(s.contextData, actionContextData);\n\n        //track action\n        s.tl(true, 'o', 'hamburger link click');\n\n        //cleanup values after action\n        for (var item in actionContextData) {\n            delete s.contextData[item];\n        }\n    });\n    $t('on', 'mbt_navbar_hamburgerClick', function(e, data) {\n        if (data.isOpen) {\n            var actionContextData = {\n                'news.linkmoduledetail': 'Hamburger',\n                'news.linkmoduletype': 'Hamburger Expand'\n            };\n            s.contextData = s.extendArray(s.contextData, actionContextData);\n\n            //track action\n            s.tl(true, 'o', 'hamburger expand');\n\n            //cleanup values after action\n            for (var item in actionContextData) {\n                delete s.contextData[item];\n            }\n        }\n    });\n    $t('on', 'mbt_navbar_follow', function(e) {\n        var actionContextData = {\n            'news.linkmoduledetail': 'Hamburger',\n            'news.linkmoduletype': 'Hamburger Follow',\n            'news.socialplatform': $t(e.type + '.platform', s.noValue)\n        };\n        s.contextData = s.extendArray(s.contextData, actionContextData);\n\n        //track action\n        s.tl(true, 'o', 'hamburger follow');\n\n        //cleanup values after action\n        for (var item in actionContextData) {\n            delete s.contextData[item];\n        }\n    });\n    $t('on', 'mbt_navbar_share', function(e) {\n        var actionContextData = {\n            'news.linkmoduledetail': 'Article Share Bar',\n            'news.linkmoduletype': 'Article',\n            'news.socialplatform': $t(e.type + '.platform', s.noValue)\n        };\n        s.contextData = s.extendArray(s.contextData, actionContextData);\n\n        //track action\n        s.tl(true, 'o', 'article share');\n\n        //cleanup values after action\n        for (var item in actionContextData) {\n            delete s.contextData[item];\n        }\n    });\n    $t('on', 'mbt_navbar_shareClick', function(e, data) {\n        if (data.isOpen) {\n            var actionContextData = {\n                'news.linkmoduledetail': 'Article Share Bar',\n                'news.linkmoduletype': 'Expand',\n            };\n            s.contextData = s.extendArray(s.contextData, actionContextData);\n\n            //track action\n            s.tl(true, 'o', 'article share expand');\n\n            //cleanup values after action\n            for (var item in actionContextData) {\n                delete s.contextData[item];\n            }\n        }\n    });\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL3c0a4d787df74d3ebcd9c19bf4e97566',
            name: 'BizDev - Skimlink',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['nbcnews.com', 'today.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n(function () {\n    /*global $t */\n    var loadedScripts = {};\n    var loadScript = function (address, id) {\n        if (address && !loadedScripts[address]) {\n            var t = document.createElement('script'); t.async = !0;\n            t.src = address;\n            if (id) {\n                t.id = id;\n            }\n            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(t, s);\n            loadedScripts[address] = true;\n        }\n    };\n\n    var skimlinkAddresses = {\n        'nbcnews.com': 'https://s.skimresources.com/js/96128X1573856.skimlinks.js',\n        'today.com': 'https://s.skimresources.com/js/96128X1550925.skimlinks.js'\n    };\n\n    $t('on', 'dtm_pageView', function (e, data) {\n        var trackView = data.trackView !== false; //this will default all to true if not false\n        var pageIndex = $t(e.type + '.index', 0);\n        var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n        var pageType = $t('jsonLd.Dataset.' + pageIndex + '.pageType', '').toLowerCase();\n\n        var isCoverOrFront = pageType === 'front' || pageType === 'sectionfront';\n      \n        //Tracks only ECommerce.\n        if (trackView && (isCoverOrFront)) {\n            loadScript(skimlinkAddresses[topLevelDomain]);\n        }\n    });\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa94ef2ec2cf24897b9e76f112170bebe',
            name: 'mParticle - pageView',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    var showList = {\n        'msnbc': { //show should be signaled by the site, but for now we just have a list\n            'firstlook': true,//msnbc shows(scraped from nav)\n            'morning-joe': true,\n            'msnbc-live-hallie-jackson': true,\n            'velshi-ruhle': true,\n            'andrea-mitchell': true,\n            'craig-melvin': true,\n            'msnbc-live-katy-tur': true,\n            'msnbc-live-with-ali-velshi': true,\n            'deadline-white-house': true,\n            'mtp-daily': true,\n            'msnbc-live-ari-melber': true,\n            'hardball': true,\n            'all': true,\n            'rachel-maddow-show': true,\n            'the-last-word': true,\n            '11th-hour-with-brian-williams': true,\n            'originals': true,\n            'your-business': true,\n            'hugh-hewitt': true,\n            'politicsnation': true,\n            'am-joy': true,\n            'weekends-with-alex': true,\n            'kasiedc': true\n        },\n        'nbcnews': {\n            'nightly-news': true,//nbcnews shows\n            'meet-the-press': true,\n            'dateline': true\n        },\n        'today': {\n            'on-the-show': true, //today shows\n            'megyn-kelly-today': true,\n            'klgandhoda': true,\n            'weekend-today': true,\n            'sunday-today': true,\n            'originals': true\n        }\n    };\n\n    $t('on', 'dtm_pageView', function (e, data) {\n        var slug = function () {\n            var slug = $t(e.type + '.url').match(/[^/]+(?=\\/$|$)/g) || '';\n            return slug.toString();\n        };\n\n        var noValue = 'not available';\n\n        var checkIfEmbeddedVideo = function () {\n            var i, embeddedVideoPaths = [\n                /\\/embedded-video\\//,\n                /^\\/playmaker\\/embed/\n            ];\n            for (i = 0; (embeddedVideoPaths[i]); i++) {\n                if (document.location.pathname.search(embeddedVideoPaths[i]) != -1) {\n                    return true;\n                }\n            }\n            return false;\n        };\n\n        var brand = (function () {\n            //would be better is this wasnt based on domain\n            if (window.s.topLevelDomain === 'today.com') {\n                return 'today';\n            } else if (window.s.topLevelDomain === 'msnbc.com') {\n                return 'msnbc';\n            } else {\n                return 'nbcnews';\n            }\n        })();\n\n        var convertDate = function (dateString) {\n            //input: 2015-06-04T14:40:45.000+0000, output: 2015-06-04 14:40:45 Z\n            var dateObj = new Date(dateString);\n            if (dateObj.toString() !== 'Invalid Date') {\n                return dateObj.toISOString().replace('T', ' ').replace('.000Z', ' Z');\n            } else {\n                return dateString;\n            }\n        };\n\n        var contentType = (function () {\n            if ($t('jsonLd.Dataset.0.sponsor', false)) {\n                return 'native';\n            }\n            var pageType = $t('jsonLd.Dataset.0.pageType', '').toLowerCase(); //only considers the most recent page for now\n\n            if (document.location.pathname.indexOf('/card/') !== -1) { //override for legacy card pages\n                pageType = 'card';\n            }\n            //make pagetype for embedded videos\n            if (checkIfEmbeddedVideo()) {\n                pageType = 'embedded';\n            }\n            switch (pageType) {\n                case 'article':\n                    if (document.location.pathname.indexOf('/live-blog/') != -1) { //override for liveblog, this should be represented bby the dataset later\n                        return 'liveblog';\n                    } else {\n                        return 'post';\n                    }\n                case 'card':\n                    return 'card';\n                case 'gallery':\n                    return 'gallery';\n                case 'front':\n                    if ($t(e.type + '.url') === '/') {\n                        return 'cover';\n                    } else if ($t(e.type + '.initiator') === 'transporter') {\n                        return 'inline vertical';\n                    } else {\n                        return 'vertical';\n                    }\n                case 'showpage':\n                    return 'show';\n                case 'subfront': //i think 'SubFront' is gone?\n                case 'sectionfront':\n                    if (showList[brand][slug()]) {\n                        return 'show';\n                    } else {\n                        return 'subvertical';\n                    }\n                case 'video':\n                    return 'canonical video';\n                case 'embedded':\n                    return 'embedded video';\n                case 'notfound':\n                case 'internalservererror':\n                    return 'error';\n                default:\n                    return noValue;\n            }\n        })();\n\n        var pageName = (function () {\n            var pn = brand + ':';\n            if (contentType === 'subvertical') {\n                //subvertical is weird\n                pn += $t('jsonLd.Dataset.0.vertical', noValue) + ':' + contentType + ':' + slug();\n            } else if (contentType === 'inline vertical') {\n                //urls dont change, so slug is not right\n                pn += contentType + ':' + $t('jsonLd.Dataset.0.vertical', noValue);\n            } else if (contentType === 'cover' && $t('jsonLd.Dataset.0.vertical', noValue) === 'news') {\n                //Temporary change to identify bento cover in Omniture\n                pn += contentType + ':new';\n            } else {\n                pn += contentType + (slug() ? (':' + slug()) : '');\n            }\n            return pn;\n        })();\n\n        var pageSection = (function () {\n            if ($t('jsonLd.Dataset.0.pageType', '').toLowerCase() === 'front') {\n                return contentType;\n            } else {\n                return $t('jsonLd.Dataset.0.section', noValue);\n            }\n        })()\n\n        var mParticlePageViewData = {\n            'page name': pageName,\n            'page type': contentType,\n            'page section': pageSection,\n            'topic': noValue,\n            'sub topic': $t('jsonLd.Dataset.0.subSection', noValue),\n            'headline': $t('jsonLd.NewsArticle.' + 0 + '.headline', noValue),\n            'label': $t('jsonLd.Dataset.0.label', noValue),\n            'short summary': $t('jsonLd.NewsArticle.' + 0 + '.description', noValue),\n            'author': $t('jsonLd.NewsArticle.' + 0 + '.author.0.name', noValue),\n            'page publish date': convertDate($t('jsonLd.NewsArticle.' + 0 + '.datePublished', noValue)),\n            'page modified date': convertDate($t('jsonLd.NewsArticle.' + 0 + '.dateModified', noValue)),\n            'article id': $t('jsonLd.NewsArticle.' + 0 + '.identifier.value', noValue),\n            'tags': noValue,\n            'show': noValue,\n            'previous url': document.referrer || noValue,\n        };\n        // gallery pages have a different data object\n        if (contentType === 'gallery') {\n            mParticlePageViewData['article id'] = $t('jsonLd.imageGallery.0.identifier.value', noValue);\n            mParticlePageViewData['page publish date'] = convertDate($t('jsonLd.imageGallery.0.dateModified', noValue));\n            mParticlePageViewData['page modified date'] = convertDate($t('jsonLd.imageGallery.0.dateModified', noValue));\n            mParticlePageViewData['author'] = $t('jsonLd.imageGallery.0.author.0.name', noValue);\n            mParticlePageViewData['headline'] = $t('jsonLd.imageGallery.0.headline', noValue);\n        }\n\n        var trackView = data.trackView !== false; //want to make sure its the right page view event\n\n        if (window.$t && trackView) {\n            window.$t('track', 'mParticle_track_event', { eventName: 'Page View', eventType: 'Navigation', eventData: mParticlePageViewData }); \n        }\n    });\n})()",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL877fc05a581445fb80e87d1fc30ce5ec',
            name: 'Ads - AAM include',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '!function(){"use strict";function e(e,t,s){var n="",i=t||"Error caught in DIL module/submodule: ";return e===Object(e)?n=i+(e.message||"err has no message"):(n=i+"err is not a valid object",e={}),e.message=n,s instanceof DIL&&(e.partner=s.api.getPartner()),DIL.errorModule.handleError(e),this.errorMessage=n}var r,a,o,t={submitUniversalAnalytics:function(e,t,s){try{var n,i,r,a,o=e.getAll()[0],d=o[s||"b"].data.keys,u={};for(n=0,i=d.length;n<i;n++)r=d[n],void 0===(a=o.get(r))||"function"==typeof a||a===Object(a)||/^_/.test(r)||/^&/.test(r)||(u[r]=a);return t.api.signals(u,"c_").submit(),u}catch(e){return"Caught error with message: "+e.message}},dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:e,init:function(e,t,s){try{this.dil=null,this.arr=null,this.tv=null,this.errorMessage="",this.signals={},this.hasSignals=!1;var n={name:"DIL GA Module Error"},i="";t instanceof DIL?(this.dil=t,n.partner=this.dil.api.getPartner()):(i="dilInstance is not a valid instance of DIL",n.message=i,DIL.errorModule.handleError(n)),e instanceof Array&&e.length?this.arr=e:(i="gaArray is not an array or is empty",n.message=i,DIL.errorModule.handleError(n)),this.tv=this.constructTrackVars(s),this.errorMessage=i}catch(e){this.handle(e,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(e){var t,s,n,i,r,a,o=[];if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){for(a={},s=0,n=(r=this.defaultTrackVars).length;s<n;s++)a[r[s]]=!0;this.defaultTrackVarsObj=a}else a=this.defaultTrackVarsObj;if(e===Object(e)){if((t=e.names)instanceof Array&&(n=t.length))for(s=0;s<n;s++)"string"==typeof(i=t[s])&&i.length&&i in a&&o.push(i);if(o.length)return o}return this.defaultTrackVars},constructGAObj:function(e){var t,s,n,i,r,a,o={},d=e instanceof Array?e:this.arr;for(t=0,s=d.length;t<s;t++)(n=d[t])instanceof Array&&n.length&&(r=n=[],a=d[t],r instanceof Array&&a instanceof Array&&Array.prototype.push.apply(r,a),"string"==typeof(i=n.shift())&&i.length&&(o[i]instanceof Array||(o[i]=[]),o[i].push(n)));return o},addToSignals:function(e,t){return"string"==typeof e&&""!==e&&null!=t&&""!==t&&(this.signals[e]instanceof Array||(this.signals[e]=[]),this.signals[e].push(t),this.hasSignals=!0)},constructSignals:function(){var e,t,s,n,i,r,a=this.constructGAObj(),o={_setAccount:function(e){this.addToSignals("c_accountId",e)},_setCustomVar:function(e,t,s){"string"==typeof t&&t.length&&this.addToSignals("c_"+t,s)},_addItem:function(e,t,s,n,i,r){this.addToSignals("c_itemOrderId",e),this.addToSignals("c_itemSku",t),this.addToSignals("c_itemName",s),this.addToSignals("c_itemCategory",n),this.addToSignals("c_itemPrice",i),this.addToSignals("c_itemQuantity",r)},_addTrans:function(e,t,s,n,i,r,a,o){this.addToSignals("c_transOrderId",e),this.addToSignals("c_transAffiliation",t),this.addToSignals("c_transTotal",s),this.addToSignals("c_transTax",n),this.addToSignals("c_transShipping",i),this.addToSignals("c_transCity",r),this.addToSignals("c_transState",a),this.addToSignals("c_transCountry",o)},_trackSocial:function(e,t,s,n){this.addToSignals("c_socialNetwork",e),this.addToSignals("c_socialAction",t),this.addToSignals("c_socialTarget",s),this.addToSignals("c_socialPagePath",n)}},d=this.tv;for(e=0,t=d.length;e<t;e++)if(s=d[e],a.hasOwnProperty(s)&&o.hasOwnProperty(s)&&(r=a[s])instanceof Array)for(n=0,i=r.length;n<i;n++)o[s].apply(this,r[n])},submit:function(){try{return""!==this.errorMessage?this.errorMessage:(this.constructSignals(),this.hasSignals?(this.dil.api.signals(this.signals).submit(),"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)):"No signals present")}catch(e){return this.handle(e,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:e,callback:null,v:function(){return!1},init:function(e,t,s){try{this.dil=null,this.callback=null,this.errorMessage="",e instanceof DIL?(this.dil=e,this.v=this.dil.validators.isPopulatedString,this.cookieName=this.v(t)?t:"aam_ga",this.delimiter=this.v(s)?s:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(e){this.handle(e,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(e){var t,s,n,i,r,a,o,d,u,c,l,h=!1,f=1;if(e===Object(e)&&(t=e.stuff)&&t instanceof Array&&(s=t.length))for(n=0;n<s;n++)if((i=t[n])&&i===Object(i)&&(r=i.cn,a=i.cv,r===this.cookieName&&this.v(a))){h=!0;break}if(h){for(o=a.split(this.delimiter),void 0===window._gaq&&(window._gaq=[]),d=window._gaq,n=0,s=o.length;n<s&&(c=(u=o[n].split("="))[0],l=u[1],this.v(c)&&this.v(l)&&d.push(["_setCustomVar",f++,c,l,1]),!(f>this.LIMIT));n++);this.errorMessage=1<f?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"==typeof this.callback)return this.callback()},submit:function(){try{var t=this;return""!==this.errorMessage?this.errorMessage:(this.dil.api.afterResult(function(e){t.process(e)}).submit(),"DIL.modules.GA.Stuffer.submit() successful")}catch(e){return this.handle(e,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}},s={dil:null,handle:e,init:function(e,t,s,n){try{var f=this,i={name:"DIL Site Catalyst Module Error"},p=function(e){return i.message=e,DIL.errorModule.handleError(i),e};if(this.options=n===Object(n)?n:{},this.dil=null,!(t instanceof DIL))return p("dilInstance is not a valid instance of DIL");if(this.dil=t,i.partner=t.api.getPartner(),e!==Object(e))return p("siteCatalystReportingSuite is not an object");var r=e;return window.AppMeasurement_Module_DIL=r.m_DIL=function(e){var t="function"==typeof e.m_i?e.m_i("DIL"):this;if(t!==Object(t))return p("m is not an object");t.trackVars=f.constructTrackVars(s),t.d=0,t.s=e,t._t=function(){var e,t,s,n,i,r,a=this,o=","+a.trackVars+",",d=a.s,u=[],c=[],l={},h=!1;if(d!==Object(d))return p("Error in m._t function: s is not an object");if(a.d){if("function"==typeof d.foreachVar)d.foreachVar(function(e,t){void 0!==t&&(l[e]=t,h=!0)},a.trackVars);else{if(!(d.va_t instanceof Array))return p("Error in m._t function: s.va_t is not an array");if(d.lightProfileID?(e=d.lightTrackVars)&&(e=","+e+","+d.vl_mr+","):(d.pe||d.linkType)&&(e=d.linkTrackVars,d.pe&&(t=d.pe.substring(0,1).toUpperCase()+d.pe.substring(1),d[t]&&(e=d[t].trackVars)),e&&(e=","+e+","+d.vl_l+","+d.vl_l2+",")),e){for(r=0,u=e.split(",");r<u.length;r++)0<=o.indexOf(","+u[r]+",")&&c.push(u[r]);c.length&&(o=","+c.join(",")+",")}for(n=0,i=d.va_t.length;n<i;n++)s=d.va_t[n],0<=o.indexOf(","+s+",")&&void 0!==d[s]&&null!==d[s]&&""!==d[s]&&(l[s]=d[s],h=!0)}f.includeContextData(d,l).store_populated&&(h=!0),h&&a.d.api.signals(l,"c_").submit()}}},r.loadModule("DIL"),r.DIL.d=t,i.message?i.message:"DIL.modules.siteCatalyst.init() completed with no errors"}catch(e){return this.handle(e,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(e){var t,s,n,i,r,a,o,d,u=[];if(e===Object(e)){if((t=e.names)instanceof Array&&(i=t.length))for(n=0;n<i;n++)"string"==typeof(r=t[n])&&r.length&&u.push(r);if((s=e.iteratedNames)instanceof Array&&(i=s.length))for(n=0;n<i;n++)if((a=s[n])===Object(a)&&(r=a.name,d=parseInt(a.maxIndex,10),"string"==typeof r&&r.length&&!isNaN(d)&&0<=d))for(o=0;o<=d;o++)u.push(r+o);if(u.length)return u.join(",")}return this.constructTrackVars({names:["pageName","channel","campaign","products","events","pe","pev1","pev2","pev3"],iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:250}]})},includeContextData:function(e,t){var s={},n=!1;if(e.contextData===Object(e.contextData)){var i,r,a,o,d,u=e.contextData,c=this.options.replaceContextDataPeriodsWith,l=this.options.filterFromContextVariables,h={};if("string"==typeof c&&c.length||(c="_"),l instanceof Array)for(i=0,r=l.length;i<r;i++)a=l[i],this.dil.validators.isPopulatedString(a)&&(h[a]=!0);for(o in u)u.hasOwnProperty(o)&&!h[o]&&((d=u[o])||"number"==typeof d)&&(t[o=("contextData."+o).replace(/\\./g,c)]=d,n=!0)}return s.store_populated=n,s}};"function"!=typeof window.DIL&&(window.DIL=function(s){var c,e,I,r,u,p,t,a,n,i,o,d,y,l,h,g,f,m,b,v,D,S=[],_={};function O(e){return void 0===e||!0===e}s!==Object(s)&&(s={}),I=s.partner,r=s.containerNSID,u=s.mappings,p=s.uuidCookie,t=!0===s.enableErrorReporting,a=s.visitorService,n=s.declaredId,i=!0===s.delayAllUntilWindowLoad,o=O(s.secureDataCollection),d="boolean"==typeof s.isCoopSafe?s.isCoopSafe:null,y=O(s.enableHrefererParam),l=O(s.enableLogging),h=O(s.enableUrlDestinations),g=O(s.enableCookieDestinations),f=!0===s.disableDefaultRequest,m=s.afterResultForDefaultRequest,b=s.visitorConstructor,v=!0===s.disableCORS,D=!0===s.ignoreHardDependencyOnVisitorAPI,t&&DIL.errorModule.activate(),D&&S.push("Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.");var C=!0===window._dil_unit_tests;if((c=arguments[1])&&S.push(c+""),!I||"string"!=typeof I){var w={name:"error",message:c="DIL partner is invalid or not specified in initConfig",filename:"dil.js"};return DIL.errorModule.handleError(w),new Error(c)}if(c="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0",(r||"number"==typeof r)&&(r=parseInt(r,10),!isNaN(r)&&0<=r&&(c="")),c&&(r=0,S.push(c),c=""),(e=DIL.getDil(I,r))instanceof DIL&&e.api.getPartner()===I&&e.api.getContainerNSID()===r)return e;if(!(this instanceof DIL))return new DIL(s,"DIL was not instantiated with the \'new\' operator, returning a valid instance with partner = "+I+" and containerNSID = "+r);DIL.registerDil(this,I,r);var L={doesConsoleLogExist:window.console===Object(window.console)&&"function"==typeof window.console.log,logMemo:{},log:function(e){(S.push(e),l&&this.doesConsoleLogExist)&&Function.prototype.bind.call(window.console.log,window.console).apply(window.console,arguments)},logOnce:function(e){this.logMemo[e]||(this.logMemo[e]=!0,L.log(e))}},A={IS_HTTPS:o||"https:"===document.location.protocol,SIX_MONTHS_IN_MINUTES:259200,IE_VERSION:function(){if(document.documentMode)return document.documentMode;for(var e=7;4<e;e--){var t=document.createElement("div");if(t.innerHTML="\\x3c!--[if IE "+e+"]><span></span><![endif]--\\x3e",t.getElementsByTagName("span").length)return t=null,e}return null}()};A.IS_IE_LESS_THAN_10="number"==typeof A.IE_VERSION&&A.IE_VERSION<10;var P={stuffed:{}},T={},R={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},firstRequestHasFired:!1,abortRequests:!1,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,platformParams:{d_nsid:r+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:3e4,calledBack:!1,mid:null,noVisitorAPI:null,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(e){try{if(this.admsProcessingStarted)return;this.admsProcessingStarted=!0;var t,s,n,i=a;if("function"!=typeof e||"function"!=typeof e.getInstance)throw this.noVisitorAPI=!0,new Error("Visitor does not exist.");if(i!==Object(i)||!(t=i.namespace)||"string"!=typeof t)throw this.releaseType="no namespace",new Error("DIL.create() needs the initConfig property `visitorService`:{namespace:\'<Experience Cloud Org ID>\'}");if(!((s=e.getInstance(t,{idSyncContainerID:r}))===Object(s)&&s instanceof e&&"function"==typeof s.isAllowed&&"function"==typeof s.getMarketingCloudVisitorID&&"function"==typeof s.getCustomerIDs&&"function"==typeof s.isOptedOut&&"function"==typeof s.publishDestinations))throw this.releaseType="invalid instance",n="Invalid Visitor instance.",s===Object(s)&&"function"!=typeof s.publishDestinations&&(n+=" In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ ."),new Error(n);if(this.VisitorAPI=e,!s.isAllowed())return this.releaseType="VisitorAPI is not allowed to write cookies",void this.releaseRequests();this.instance=s,this.waitForMidToReleaseRequests()}catch(e){if(!D)throw new Error("Error in processing Visitor API, which is a hard dependency for DIL v8.0+: "+e.message);this.releaseRequests()}},waitForMidToReleaseRequests:function(){var t=this;this.instance&&(this.instance.getMarketingCloudVisitorID(function(e){t.mid=e,t.releaseType="VisitorAPI",t.releaseRequests()},!0),(!N.exists||!N.isIabContext&&N.isApproved()||N.isIabContext&&G.hasGoSignal())&&setTimeout(function(){"VisitorAPI"!==t.releaseType&&(t.releaseType="timeout",t.releaseRequests())},this.getLoadTimeout()))},releaseRequests:function(){this.calledBack=!0,R.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var e=V.isPopulatedString,t=this.getMarketingCloudVisitorID();return e(this.mid)&&this.mid===t||(this.mid=t),e(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(e){if(e!==Object(e))return"";var t,s,n,i,r="",a=[],o=[];for(t in e)e.hasOwnProperty(t)&&(s=e[o[0]=t])===Object(s)&&(o[1]=s.id||"",o[2]=s.authState||0,a.push(o),o=[]);if(i=a.length)for(n=0;n<i;n++)r+="&d_cid_ic="+x.encodeAndBuildRequest(a[n],"%01");return r},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(e){this.isOptedOut=e,this.isOptedOutCallbackCalled=!0,R.registerRequest(),N.isIabContext()&&G.checkQueryStringObject()},getLoadTimeout:function(){var e=this.instance;if(e){if("function"==typeof e.getLoadTimeout)return e.getLoadTimeout();if(void 0!==e.loadTimeout)return e.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(e,t){var s=V.isPopulatedString,n=encodeURIComponent;if(e===Object(e)&&s(t)){var i=e.dpid,r=e.dpuuid,a=null;if(s(i)&&s(r))return a=n(i)+"$"+n(r),!0===this.declaredIdCombos[a]?"setDeclaredId: combo exists for type \'"+t+"\'":(this.declaredIdCombos[a]=!0,this.declaredId[t]={dpid:i,dpuuid:r},"setDeclaredId: succeeded for type \'"+t+"\'")}return"setDeclaredId: failed for type \'"+t+"\'"},getDeclaredIdQueryString:function(){var e=this.declaredId.request,t=this.declaredId.init,s=encodeURIComponent,n="";return null!==e?n="&d_dpid="+s(e.dpid)+"&d_dpuuid="+s(e.dpuuid):null!==t&&(n="&d_dpid="+s(t.dpid)+"&d_dpuuid="+s(t.dpuuid)),n}},registerRequest:function(e){var t,s=this.firingQueue;e===Object(e)&&(s.push(e),e.isDefaultRequest||(f=!0)),this.firing||!s.length||i&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(N.isApproved()||G.hasGoSignal())&&(this.adms.isOptedOutCallbackCalled=!1,(t=s.shift()).src=t.src.replace(/&d_nsid=/,"&"+this.adms.getMIDQueryString()+G.getQueryString()+"d_nsid="),V.isPopulatedString(t.corsPostData)&&(t.corsPostData=t.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+G.getQueryString()+"d_nsid=")),M.fireRequest(t),this.firstRequestHasFired||"script"!==t.tag&&"cors"!==t.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(b||window.Visitor)},getCoopQueryString:function(){var e="";return!0===d?e="&d_coop_safe=1":!1===d&&(e="&d_coop_unsafe=1"),e}};_.requestController=R;var E,j,k={sendingMessages:!1,messages:[],messagesPosted:[],destinations:[],destinationsPosted:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],publishDestinationsVersion:null,requestToProcess:function(e,t){var s,n=this;function i(){n.jsonForComparison.push(e),n.jsonWaiting.push([e,t])}if(e&&!V.isEmptyObject(e))if(s=JSON.stringify(e.dests||[]),this.jsonForComparison.length){var r,a,o,d=!1;for(r=0,a=this.jsonForComparison.length;r<a;r++)if(o=this.jsonForComparison[r],s===JSON.stringify(o.dests||[])){d=!0;break}d?this.jsonDuplicates.push(e):i()}else i();if(this.jsonWaiting.length){var u=this.jsonWaiting.shift();this.process(u[0],u[1]),this.requestToProcess()}this.messages.length&&!this.sendingMessages&&this.sendMessages()},process:function(e){if(h){var t,s,n,i,r,a,o=encodeURIComponent,d=this.getPublishDestinationsVersion(),u=!1;if(-1!==d){if((t=e.dests)&&t instanceof Array&&(s=t.length)){for(n=0;n<s;n++)i=t[n],a=[o("dests"),o(i.id||""),o(i.y||""),o(i.c||"")].join("|"),this.addMessage(a),r={url:i.c,hideReferrer:void 0===i.hr||!!i.hr,message:a},this.addDestination(r),void 0!==i.hr&&(u=!0);1===d&&u&&L.logOnce("Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.")}this.jsonProcessed.push(e)}}},addMessage:function(e){this.messages.push(e)},addDestination:function(e){this.destinations.push(e)},sendMessages:function(){this.sendingMessages||(this.sendingMessages=!0,h&&this.messages.length&&this.publishDestinations())},publishDestinations:function(){var t=this,e=R.adms.instance,s=[],n=[],i=function(e){L.log("visitor.publishDestinations() result: "+(e.error||e.message)),t.sendingMessages=!1,t.requestToProcess()},r=function(){t.messages=[],t.destinations=[]};return 1===this.publishDestinationsVersion?(x.extendArray(s,this.messages),x.extendArray(this.messagesPosted,this.messages),r(),e.publishDestinations(I,s,i),"Called visitor.publishDestinations() version 1"):1<this.publishDestinationsVersion?(x.extendArray(n,this.destinations),x.extendArray(this.destinationsPosted,this.destinations),r(),e.publishDestinations({subdomain:I,callback:i,urlDestinations:n}),"Called visitor.publishDestinations() version > 1"):void 0},getPublishDestinationsVersion:function(){if(null!==this.publishDestinationsVersion)return this.publishDestinationsVersion;var e=R.adms.instance,s=-1;return e.publishDestinations(null,null,function(e){if(e===Object(e)){var t=e.error;"subdomain is not a populated string."===t?s=1:"Invalid parameters passed."===t&&(s=2)}}),this.publishDestinationsVersion=s}},q={traits:function(e){return V.isValidPdata(e)&&(T.sids instanceof Array||(T.sids=[]),x.extendArray(T.sids,e)),this},pixels:function(e){return V.isValidPdata(e)&&(T.pdata instanceof Array||(T.pdata=[]),x.extendArray(T.pdata,e)),this},logs:function(e){return V.isValidLogdata(e)&&(T.logdata!==Object(T.logdata)&&(T.logdata={}),x.extendObject(T.logdata,e)),this},customQueryParams:function(e){return V.isEmptyObject(e)||x.extendObject(T,e,R.reservedKeys),this},signals:function(e,t){var s,n=e;if(!V.isEmptyObject(n)){if(t&&"string"==typeof t)for(s in n={},e)e.hasOwnProperty(s)&&(n[t+s]=e[s]);x.extendObject(T,n,R.reservedKeys)}return this},declaredId:function(e){return R.declaredId.setDeclaredId(e,"request"),this},result:function(e){return"function"==typeof e&&(T.callback=e),this},afterResult:function(e){return"function"==typeof e&&(T.postCallbackFn=e),this},useImageRequest:function(){return T.useImageRequest=!0,this},clearData:function(){return T={},this},submit:function(e){return T.isDefaultRequest=!!e,M.submitRequest(T),T={},this},getPartner:function(){return I},getContainerNSID:function(){return r},getEventLog:function(){return S},getState:function(){var e={},t={};return x.extendObject(e,R,{registerRequest:!0}),x.extendObject(t,k,{requestToProcess:!0,process:!0,sendMessages:!0}),{initConfig:s,pendingRequest:T,otherRequestInfo:e,destinationPublishingInfo:t,log:S}},idSync:function(){throw new Error("Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance")},aamIdSync:function(){throw new Error("Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance")},passData:function(e){return V.isEmptyObject(e)?"Error: json is empty or not an object":(M.defaultCallback(e),e)},getPlatformParams:function(){return R.platformParams},getEventCallConfigParams:function(){var e,t=R,s=t.modStatsParams,n=t.platformParams;if(!s){for(e in s={},n)n.hasOwnProperty(e)&&!t.nonModStatsParams[e]&&(s[e.replace(/^d_/,"")]=n[e]);!0===d?s.coop_safe=1:!1===d&&(s.coop_unsafe=1),t.modStatsParams=s}return s},setAsCoopSafe:function(){return d=!0,this},setAsCoopUnsafe:function(){return d=!1,this},getEventCallIabSignals:function(e){var t;return e!==Object(e)?"Error: config is not an object":"function"!=typeof e.callback?"Error: config.callback is not a function":(t=parseInt(e.timeout,10),isNaN(t)&&(t=null),void G.getQueryStringObject(e.callback,t))}},M={corsMetadata:(E="none","undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&"withCredentials"in new XMLHttpRequest&&(E="XMLHttpRequest"),{corsType:E}),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(e){return R.registerRequest(M.createQueuedRequest(e)),!0},createQueuedRequest:function(e){var t,s,n,i,r,a=e.callback,o="img",d=e.isDefaultRequest;if(delete e.isDefaultRequest,!V.isEmptyObject(u))for(n in u)if(u.hasOwnProperty(n)){if(null==(i=u[n])||""===i)continue;if(n in e&&!(i in e)&&!(i in R.reservedKeys)){if(null==(r=e[n])||""===r)continue;e[i]=r}}return V.isValidPdata(e.sids)||(e.sids=[]),V.isValidPdata(e.pdata)||(e.pdata=[]),V.isValidLogdata(e.logdata)||(e.logdata={}),e.logdataArray=x.convertObjectToKeyValuePairs(e.logdata,"=",!0),e.logdataArray.push("_ts="+(new Date).getTime()),"function"!=typeof a&&(a=this.defaultCallback),t=this.makeRequestSrcData(e),(s=this.getCORSInstance())&&!0!==e.useImageRequest&&(o="cors"),{tag:o,src:t.src,corsSrc:t.corsSrc,callbackFn:a,postCallbackFn:e.postCallbackFn,useImageRequest:!!e.useImageRequest,requestData:e,corsInstance:s,corsPostData:t.corsPostData,isDefaultRequest:d}},defaultCallback:function(e,t){var s,n,i,r,a,o,d,u,c;if(g&&(s=e.stuff)&&s instanceof Array&&(n=s.length))for(i=0;i<n;i++)(r=s[i])&&r===Object(r)&&(a=r.cn,o=r.cv,void 0!==(d=r.ttl)&&""!==d||(d=Math.floor(x.getMaxCookieExpiresInMinutes()/60/24)),u=r.dmn||"."+document.domain.replace(/^www\\./,""),c=r.type,a&&(o||"number"==typeof o)&&("var"!==c&&(d=parseInt(d,10))&&!isNaN(d)&&x.setCookie(a,o,24*d*60,"/",u,!1),P.stuffed[a]=o));var l,h,f=e.uuid;V.isPopulatedString(f)&&(V.isEmptyObject(p)||("string"==typeof(l=p.path)&&l.length||(l="/"),h=parseInt(p.days,10),isNaN(h)&&(h=100),x.setCookie(p.name||"aam_did",f,24*h*60,l,p.domain||"."+document.domain.replace(/^www\\./,""),!0===p.secure))),R.abortRequests||k.requestToProcess(e,t)},makeRequestSrcData:function(r){r.sids=V.removeEmptyArrayValues(r.sids||[]),r.pdata=V.removeEmptyArrayValues(r.pdata||[]);var a=R,e=a.platformParams,t=x.encodeAndBuildRequest(r.sids,","),s=x.encodeAndBuildRequest(r.pdata,","),n=(r.logdataArray||[]).join("&");delete r.logdataArray;var i,o,d=encodeURIComponent,u=A.IS_HTTPS?"https://":"http://",c=a.declaredId.getDeclaredIdQueryString(),l=a.adms.instance?a.adms.getCustomerIDsQueryString(a.adms.getCustomerIDs()):"",h=function(){var e,t,s,n,i=[];for(e in r)if(!(e in a.reservedKeys)&&r.hasOwnProperty(e))if(t=r[e],e=d(e),t instanceof Array)for(s=0,n=t.length;s<n;s++)i.push(e+"="+d(t[s]));else i.push(e+"="+d(t));return i.length?"&"+i.join("&"):""}(),f="d_dil_ver="+d(DIL.version),p="d_nsid="+e.d_nsid+a.getCoopQueryString()+c+l+(t.length?"&d_sid="+t:"")+(s.length?"&d_px="+s:"")+(n.length?"&d_ld="+d(n):""),g="&d_rtbd="+e.d_rtbd+"&d_jsonv="+e.d_jsonv+"&d_dst="+e.d_dst,m=y?"&h_referer="+d(location.href):"";return o=(i=u+I+".demdex.net/event")+"?"+f+"&"+p+g+h+m,{corsSrc:i+"?"+f+"&_ts="+(new Date).getTime(),src:o,corsPostData:p+g+h+m,isDeclaredIdCall:""!==c}},fireRequest:function(e){if("img"===e.tag)this.fireImage(e);else{var t=R.declaredId,s=t.declaredId.request||t.declaredId.init||{},n={dpid:s.dpid||"",dpuuid:s.dpuuid||""};this.fireCORS(e,n)}},fireImage:function(t){var e,s,n=R;n.abortRequests||(n.firing=!0,e=new Image(0,0),n.sent.push(t),e.onload=function(){n.firing=!1,n.fired.push(t),n.num_of_img_responses++,n.registerRequest()},s=function(e){c="imgAbortOrErrorHandler received the event of type "+e.type,L.log(c),n.abortRequests=!0,n.firing=!1,n.errored.push(t),n.num_of_img_errors++,n.registerRequest()},e.addEventListener("error",s),e.addEventListener("abort",s),e.src=t.src)},fireCORS:function(n,i){var r=this,a=R,e=this.corsMetadata.corsType,t=n.corsSrc,s=n.corsInstance,o=n.corsPostData,d=n.postCallbackFn,u="function"==typeof d;if(!a.abortRequests&&!v){a.firing=!0;try{s.open("post",t,!0),"XMLHttpRequest"===e&&(s.withCredentials=!0,s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.onreadystatechange=function(){4===this.readyState&&200===this.status&&function(e){var t;try{if((t=JSON.parse(e))!==Object(t))return r.handleCORSError(n,i,"Response is not JSON")}catch(e){return r.handleCORSError(n,i,"Error parsing response as JSON")}try{var s=n.callbackFn;a.firing=!1,a.fired.push(n),a.num_of_cors_responses++,s(t,i),u&&d(t,i)}catch(e){e.message="DIL handleCORSResponse caught error with message "+e.message,c=e.message,L.log(c),e.filename=e.filename||"dil.js",e.partner=I,DIL.errorModule.handleError(e);try{s({error:e.name+"|"+e.message},i),u&&d({error:e.name+"|"+e.message},i)}catch(e){}}finally{a.registerRequest()}}(this.responseText)}),s.onerror=function(){r.handleCORSError(n,i,"onerror")},s.ontimeout=function(){r.handleCORSError(n,i,"ontimeout")},s.send(o)}catch(e){this.handleCORSError(n,i,"try-catch")}a.sent.push(n),a.declaredId.declaredId.request=null}},handleCORSError:function(e,t,s){R.num_of_cors_errors++,R.corsErrorSources.push(s)}},V={isValidPdata:function(e){return!!(e instanceof Array&&this.removeEmptyArrayValues(e).length)},isValidLogdata:function(e){return!this.isEmptyObject(e)},isEmptyObject:function(e){if(e!==Object(e))return!0;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0},removeEmptyArrayValues:function(e){var t,s=0,n=e.length,i=[];for(s=0;s<n;s++)null!=(t=e[s])&&""!==t&&i.push(t);return i},isPopulatedString:function(e){return"string"==typeof e&&e.length}},x={convertObjectToKeyValuePairs:function(e,t,s){var n,i,r=[];for(n in t||(t="="),e)e.hasOwnProperty(n)&&null!=(i=e[n])&&""!==i&&r.push(n+t+(s?encodeURIComponent(i):i));return r},encodeAndBuildRequest:function(e,t){return e.map(function(e){return encodeURIComponent(e)}).join(t)},getCookie:function(e){var t,s,n,i=e+"=",r=document.cookie.split(";");for(t=0,s=r.length;t<s;t++){for(n=r[t];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(i))return decodeURIComponent(n.substring(i.length,n.length))}return null},setCookie:function(e,t,s,n,i,r){var a=new Date;s&&(s=1e3*s*60),document.cookie=e+"="+encodeURIComponent(t)+(s?";expires="+new Date(a.getTime()+s).toUTCString():"")+(n?";path="+n:"")+(i?";domain="+i:"")+(r?";secure":"")},extendArray:function(e,t){return e instanceof Array&&t instanceof Array&&(Array.prototype.push.apply(e,t),!0)},extendObject:function(e,t,s){var n;if(e!==Object(e)||t!==Object(t))return!1;for(n in t)if(t.hasOwnProperty(n)){if(!V.isEmptyObject(s)&&n in s)continue;e[n]=t[n]}return!0},getMaxCookieExpiresInMinutes:function(){return A.SIX_MONTHS_IN_MINUTES},replaceMethodsWithFunction:function(e,t){var s;if(e===Object(e)&&"function"==typeof t)for(s in e)e.hasOwnProperty(s)&&"function"==typeof e[s]&&(e[s]=t)}},N=(j=_.requestController,{exists:null,instance:null,aamIsApproved:null,init:function(){var e=this;this.checkIfExists()?(this.exists=!0,this.instance=window.adobe.optIn,this.instance.fetchPermissions(function(){e.callback()},!0)):this.exists=!1},checkIfExists:function(){return window.adobe===Object(window.adobe)&&window.adobe.optIn===Object(window.adobe.optIn)},callback:function(){this.aamIsApproved=this.instance.isApproved([this.instance.Categories.AAM]),j.adms.waitForMidToReleaseRequests(),j.adms.getIsOptedOut()},isApproved:function(){return!this.isIabContext()&&!j.adms.isOptedOut&&(!this.exists||this.aamIsApproved)},isIabContext:function(){return this.instance&&this.instance.isIabContext}});_.optIn=N;var U,F,Q,H,G=(F=(U=_).requestController,Q=U.optIn,H={isVendorConsented:null,doesGdprApply:null,consentString:null,queryStringObjectCallbacks:[],init:function(){this.fetchConsentData()},hasGoSignal:function(){return!(!(Q.isIabContext()&&this.isVendorConsented&&this.doesGdprApply&&"string"==typeof this.consentString&&this.consentString.length)||F.adms.isOptedOut)},fetchConsentData:function(s,e){var n=this,t={};"function"!=typeof s&&(s=function(){}),Q.instance&&Q.isIabContext()?(e&&(t.timeout=e),Q.instance.execute({command:"iabPlugin.fetchConsentData",params:t,callback:function(e,t){t===Object(t)?(n.doesGdprApply=!!t.gdprApplies,n.consentString=t.consentString||""):(n.doesGdprApply=!1,n.consentString=""),n.isVendorConsented=Q.instance.isApproved(Q.instance.Categories.AAM),e?s({}):n.checkQueryStringObject(s),F.adms.waitForMidToReleaseRequests()}})):s({})},getQueryString:function(){return Q.isIabContext()?"gdpr="+(this.doesGdprApply?1:0)+"&gdpr_consent="+this.consentString+"&":""},getQueryStringObject:function(e,t){this.fetchConsentData(e,t)},checkQueryStringObject:function(e){H.hasGoSignal()&&"function"==typeof e&&e({gdpr:this.doesGdprApply?1:0,gdpr_consent:this.consentString})}});_.iab=G,"error"===I&&0===r&&window.addEventListener("load",function(){DIL.windowLoaded=!0});var B=!1,W=function(){B||(B=!0,R.registerRequest(),K())},K=function(){setTimeout(function(){f||R.firstRequestHasFired||("function"==typeof m?q.afterResult(m).submit(!0):q.submit(!0))},DIL.constants.TIME_TO_DEFAULT_REQUEST)},X=document;"error"!==I&&(DIL.windowLoaded?W():"complete"!==X.readyState&&"loaded"!==X.readyState?window.addEventListener("load",function(){DIL.windowLoaded=!0,W()}):(DIL.windowLoaded=!0,W())),R.declaredId.setDeclaredId(n,"init"),N.init(),G.init(),R.processVisitorAPI();A.IS_IE_LESS_THAN_10&&x.replaceMethodsWithFunction(q,function(){return this}),this.api=q,this.getStuffedVariable=function(e){var t=P.stuffed[e];return t||"number"==typeof t||(t=x.getCookie(e))||"number"==typeof t||(t=""),t},this.validators=V,this.helpers=x,this.constants=A,this.log=S,this.pendingRequest=T,this.requestController=R,this.destinationPublishing=k,this.requestProcs=M,this.units=_,this.initConfig=s,this.logger=L,C&&(this.variables=P,this.callWindowLoadFunctions=W)},DIL.extendStaticPropertiesAndMethods=function(e){var t;if(e===Object(e))for(t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},DIL.extendStaticPropertiesAndMethods({version:"9.3",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:500},variables:{scriptNodeList:document.getElementsByTagName("script")},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(){var e=arguments[0];this.windowLoaded="function"==typeof e?!!e():"boolean"!=typeof e||e},create:function(e){try{return new DIL(e)}catch(e){throw new Error("Error in attempt to create DIL instance with DIL.create(): "+e.message)}},registerDil:function(e,t,s){var n=t+"$"+s;n in this.dils||(this.dils[n]=e)},getDil:function(e,t){var s;return"string"!=typeof e&&(e=""),t||(t=0),(s=e+"$"+t)in this.dils?this.dils[s]:new Error("The DIL instance with partner = "+e+" and containerNSID = "+t+" was not found")},dexGetQSVars:function(e,t,s){var n=this.getDil(t,s);return n instanceof this?n.getStuffedVariable(e):""}}),DIL.errorModule=(r=DIL.create({partner:"error",containerNSID:0,ignoreHardDependencyOnVisitorAPI:!0}),o=!(a={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020}),{activate:function(){o=!0},handleError:function(e){if(!o)return"DIL error module has not been activated";e!==Object(e)&&(e={});var t=e.name?(e.name+"").toLowerCase():"",s=t in a?a[t]:a.noerrortypedefined,n=[],i={name:t,filename:e.filename?e.filename+"":"",partner:e.partner?e.partner+"":"no_partner",site:e.site?e.site+"":document.location.href,message:e.message?e.message+"":""};return n.push(s),r.api.pixels(n).logs(i).useImageRequest().submit(),"DIL error report sent"},pixelMap:a}),DIL.tools={},DIL.modules={helpers:{}}),window.DIL&&DIL.tools&&DIL.modules&&(DIL.tools.getMetaTags=function(){var e,t,s,n,i,r={},a=document.getElementsByTagName("meta");for(e=0,s=arguments.length;e<s;e++)if(null!==(n=arguments[e]))for(t=0;t<a.length;t++)if((i=a[t]).name===n){r[n]=i.content;break}return r},DIL.tools.decomposeURI=function(e){var s,t=document.createElement("a");return t.href=e||document.referrer,{hash:t.hash,host:t.host.split(":").shift(),hostname:t.hostname,href:t.href,pathname:t.pathname.replace(/^\\//,""),protocol:t.protocol,search:t.search,uriParams:(s={},t.search.replace(/^(\\/|\\?)?|\\/$/g,"").split("&").map(function(e){var t=e.split("=");s[t.shift()]=t.shift()}),s)}},DIL.tools.getSearchReferrer=function(e,t){var s=DIL.getDil("error"),n=DIL.tools.decomposeURI(e||document.referrer),i="",r="",a={DEFAULT:{queryParam:"q"},SEARCH_ENGINES:[t===Object(t)?t:{},{hostPattern:/aol\\./},{hostPattern:/ask\\./},{hostPattern:/bing\\./},{hostPattern:/google\\./},{hostPattern:/yahoo\\./,queryParam:"p"}]},o=a.DEFAULT;return(i=a.SEARCH_ENGINES.filter(function(e){return!(!e.hasOwnProperty("hostPattern")||!n.hostname.match(e.hostPattern))}).shift())?{valid:!0,name:n.hostname,keywords:(s.helpers.extendObject(o,i),i=(""+n.search).match(o.queryPattern),r=o.queryPattern?i?i[1]:"":n.uriParams[o.queryParam],decodeURIComponent(r||"").replace(/\\+|%20/g," "))}:{valid:!1,name:"",keywords:""}},DIL.modules.GA=t,DIL.modules.siteCatalyst=s,DIL.modules.helpers.handleModuleError=e)}();\n',
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n(function() {\n    /* globals $t, DIL */\n    var setupAAM = function(_scDilObj) {\n        //DIL instantiation starts. Configurable section below\n        var nbcuDil = DIL.create({\n            partner: \"nbcu\",\n            containerNSID: 0,\n            uuidCookie: {\n                name: 'aam_uuid',\n                days: 30\n            },\n            visitorService:{ \n                namespace: \"A8AB776A5245B4220A490D44@AdobeOrg\" \n            }\n\n        });\n        //replace customObj with any MPS object when data collection is required\n        if (typeof window.customObj != 'undefined') {\n            var nbcuDilInstance = DIL.getDil('nbcu');\n            nbcuDilInstance.api.signals(window.customObj, 'c_');\n        }\n        //SC Object Data Collection \n        DIL.modules.siteCatalyst.init(_scDilObj, DIL.getDil('nbcu'), {\n            names: ['pageName', 'channel', 'campaign', 'products', 'events', 'pe', 'referrer', 'server', 'purchaseID', 'zip', 'state'],\n            iteratedNames: [{\n                name: 'eVar',\n                maxIndex: 75\n            }, {\n                name: 'prop',\n                maxIndex: 75\n            }, {\n                name: 'pev',\n                maxIndex: 3\n            }, {\n                name: 'hier',\n                maxIndex: 4\n            }]\n        });\n    };\n    //run after adobe is loaded, or if its alrady loaded.\n    if ($t('dtm_adobeAppMeasurmentLoaded', 'not loaded') !== 'not loaded') {\n        setupAAM($t('dtm_adobeAppMeasurmentLoaded.sc_obj', {}));\n    } else {\n        $t('on', 'dtm_adobeAppMeasurmentLoaded', function() {\n            setupAAM($t('dtm_adobeAppMeasurmentLoaded.sc_obj', {}));\n        });\n    }\n    //also setup heartbeat instsnce of app measurment\n    if ($t('ahb_adobeAppMeasurmentLoaded', 'not loaded') !== 'not loaded') {\n        setupAAM($t('ahb_adobeAppMeasurmentLoaded.sc_obj', {}));\n    } else {\n        $t('on', 'ahb_adobeAppMeasurmentLoaded', function() {\n            setupAAM($t('ahb_adobeAppMeasurmentLoaded.sc_obj', {}));\n        });\n    }\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL3001f664fcc24986b123e910bb226a2b',
            name: 'Action - newsletter_subscribe',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, s */\n$t('on', 'newsletter_subscribe', function(e) {\n    var actionContextData = {\n        'news.newsletteraction': 'Subscribe', //\"Subscribe\", \"Unsubscribe\"\n        'news.newsletterid': $t(e.type + '.id', $t(e.type + '.key', '')),\n        'news.newslettertouchpoint': $t(e.type + '.placement', '')\n    };\n    s.contextData = s.extendArray(s.contextData, actionContextData);\n\n    //track action\n    s.tl(true, 'o', 'newsletter_subscribe');\n\n    //cleanup values after action\n    for (var item in actionContextData) {\n        delete s.contextData[item];\n    }\n});\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL9048efaad7904635824a72bb6f5f5ff2',
            name: 'mParticle - ndp_videoEvent',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n  $t('on', 'ndp_videoEvent', function (e, data) {\n    var eventData = data && data.videoData || {};\n    var noValue = 'not available';\n    var eventDataRaw = eventData.raw || {};\n\n    if (data.eventType.indexOf('PROGRESS') >= 0) {\n      //skip all progress events\n      return;\n    }\n    var eventName = ''\n    var videoSource = eventDataRaw.source && eventDataRaw.source.name || 'NBC News'\n    var videoNetwork = (eventDataRaw.url && eventDataRaw.url.primary && eventDataRaw.url.primary.indexOf('msnbc.com') != -1) ? 'msnbc' : 'nbc' //msnbc or nbc\n\n    var siteBrand = (function () {\n      //brand is only today, and everything else is nbcnews, (this does not work for continous consumption)\n      if ($t('jsonLd.Dataset.0.vertical') === 'today') {\n        return 'Today';\n      } else if ($t('jsonLd.Dataset.0.vertical') === 'msnbc') {\n        return 'MSNBC';\n      } else {\n        return 'NBC News';\n      }\n    })();\n\n    var playInitiate = (function () {\n      if (eventDataRaw.isContinuousPlay) {\n        return 'Continuous';\n      }\n      if (!eventDataRaw.autoPlay) {\n        return 'Manual';\n      }\n      return 'Auto';\n    })();\n\n    var playListInfo = (function () {\n      var playListInfo = {\n        'id': false,\n        'label': false\n      };\n      if (eventDataRaw.video_playlists && eventDataRaw.video_playlists[0]) {\n        playListInfo.label = eventDataRaw.video_playlists[0].label || false;\n        playListInfo.id = eventDataRaw.video_playlists[0].playlist_id || false;\n      }\n      return playListInfo;\n    })();\n    \n    var metadata = {\n      'video mpx id': eventDataRaw.mpxId || noValue,\n      'video guid': eventDataRaw.mpxMetadata.guid || noValue,\n      'video title': eventDataRaw.headline && eventDataRaw.headline.primary || noValue,\n      'video network': videoNetwork,\n      'video program': videoSource,\n      'video content source': videoSource,\n      'video air date': eventDataRaw.dateBroadcast || noValue,\n      'video asset status': 'Unrestricted',\n      'video screen mode': 'Normal',\n      'video length': eventDataRaw.duration * 1000 || noValue,\n      'video clip category': eventDataRaw.videoType || noValue,\n      'video player name': 'NDP',\n      'video initiation': playInitiate,\n      'video playlist name': playListInfo.label || noValue,\n      'video playlist id': playListInfo.id || noValue,\n      'video content type': 'Video',\n      'video publish date': eventDataRaw.datePublished || noValue,\n      'video index start': eventData.playheadPosition * 1000 || noValue,\n      'video page name': s.pageName || noValue,\n      'video page url': window.location.href.split('?')[0] || noValue,\n    }\n\n    switch (data.eventType) {\n      case 'NDP_PlaybackEvent_START':\n      case 'NDP_PlaybackEvent_PLAY':\n          eventName = 'VOD Clip Start';\n          break;\n      case 'NDP_PlaybackEvent_COMPLETE':\n          eventName = 'VOD Clip Complete';\n          break;\n    }\n    if(eventName){\n      $t('track', 'mParticle_track_event', { eventName: eventName, eventType: 'Navigation', eventData: metadata });\n    }\n  });\n})()",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLb1d8a74b34bf4c61937fb3a99465ecf6',
            name: 'Ads - Admiral Tag',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '\\/embedded-video\\/', valueIsRegex: !0 }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '\n//hey this is new\n(function () {\n    var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n    var sites = {\n        \'today.com\': \'https://toecircle.com/v2/0/ipsM8e8wJUWinFx5kEFjVWpjMFpK28xoSgcEIKpRDHUaCTEBPwVlhZFKrdnaGsGmLCljctjBbCa\',\n        \'nbcnews.com\': \'https://squirrelhands.com/v2/0/boxMwgh9Tn_VvjyzIXMiHTGVUrAUX0rhe5mOf3dsNOkrRLxGY_kvtOK00ZP57aIhfWixPqLS3rWBQ\',\n        \'msnbc.com\': \'https://womanear.com/v2/0/wxz8HLrRO684hLbYEBrFfoEkAITVboSzNDwZSaqEMleNpLSJeu3dJsU6iZY0RvnpF7mSfAJJ1wrbQ\'\n    };\n    if(sites[topLevelDomain]){\n        !function(t,o,e){e=t.createElement(o),t=t.getElementsByTagName(o)[0],e.async=1,e.src=sites[topLevelDomain],t.parentNode.insertBefore(e,t)}(document,"script"),function(t,o){t[o]=t[o]||function(){(t[o].q=t[o].q||[]).push(arguments)}}(document,window,"script","admiral");!function(t,n,e,o){function r(t){try{return t=localStorage.getItem("v4ac1eiZr0"),t&&t.split(",")[4]>0}catch(n){}return!1}function c(){var o=r();if(o){var c=t[n].pubads();typeof c.setTargeting===e&&c.setTargeting("admiral-engaged","true")}}o=t[n]=t[n]||{},o.cmd=o.cmd||[],typeof o.pubads===e?c():typeof o.cmd.unshift===e?o.cmd.unshift(c):o.cmd.push(c)}(window,"googletag","function");\n    }\n})();\n\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL4625711861174d7cb643baae3f1d2c0c',
            name: 'mParticle - Global event tracker',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 40 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    $t('register', 'mParticle_setIdResolved');\n  \n    var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n    var cookieRead = function (a) {\n        var b = document.cookie.match('(^|[^;]+)\\\\s*' + a + '\\\\s*=\\\\s*([^;]+)');\n        return b ? b.pop() : '';\n    }\n    var mpartIds = {\n        'today.com': '3f8eeba44cd1254a897586bb26fa1c4a',\n        'nbcnews.com': '65ea0b28a73c4c4abd08599774d30799',\n        'msnbc.com': '4c6f61ee9fa74942a781c3ecf77b926e',\n        'telemundo.com': 'us1-09b8a860d541194caaa889a29a469376'\n    }\n    var mparticle_apikey = mpartIds[topLevelDomain] || false;\n\n    function readMIDCookie(orgId) {\n        var cookieSearch = document.cookie.match('(^|[^;]+)\\\\s*' + orgId + '\\\\s*=\\\\s*([^;]+)');\n        var AAMCookie = cookieSearch ? cookieSearch.pop() : '';\n        var AAMCookie_val = decodeURIComponent(AAMCookie).split('|');\n        var aam_mid = (AAMCookie_val[0] !== '' ? AAMCookie_val[4] : AAMCookie_val[0]) || null;\n\n        //validate must be all numbers\n        if (!/^[0-9]+$/.test(aam_mid)) {\n            aam_mid = null\n        }\n        return aam_mid;\n    }\n    //mParticle init \n    if (mparticle_apikey) {\n        (function (apiKey) {\n            // set aam_uuid and MID from adobe\n            var aam_uuid = cookieRead('aam_uuid') || null;\n            var aam_mid = readMIDCookie('AMCV_A8AB776A5245B4220A490D44%40AdobeOrg') || null;\n            var isLaunchDev = !(_satellite && _satellite.buildInfo && _satellite.buildInfo.environment === 'production');\n\n            window.mParticle = window.mParticle || {};\n            window.mParticle.config = {\n                identifyRequest: {\n                    userIdentities: {\n                        //other3: aam_uuid, //AAM UUID Remove UUID becuase it is causing conflicts\n                        //other4: aam_mid //Adobe MID Remove MID becuase of hot keying\n                    }\n                },\n                identityCallback: function(result) {\n                    $t('track', 'mParticle_setIdResolved', { mpid: result.getUser().getMPID() });\n                },\n                rq: [],\n                useCookieStorage: true,\n                isDevelopmentMode: isLaunchDev\n            };\n            window.mParticle.ready = function (f) {\n                window.mParticle.config.rq.push(f);\n            };\n\n            function a(o, t) {\n                return function () {\n                    t && (o = t + \".\" + o);\n                    var e = Array.prototype.slice.call(arguments);\n                    e.unshift(o), window.mParticle.config.rq.push(e);\n                }\n            }\n            var x = [\"endSession\", \"logError\", \"logEvent\", \"logForm\", \"logLink\", \"logPageView\", \"setSessionAttribute\", \"setAppName\", \"setAppVersion\", \"setOptOut\", \"setPosition\", \"startNewSession\", \"startTrackingLocation\", \"stopTrackingLocation\"],\n                y = [\"setCurrencyCode\", \"logCheckout\"],\n                z = [\"login\", \"logout\", \"modify\"];\n            x.forEach(function (o) {\n                window.mParticle[o] = a(o)\n            });\n            y.forEach(function (o) {\n                window.mParticle.eCommerce = window.mParticle.eCommerce || {};\n                window.mParticle.eCommerce[o] = a(o, \"eCommerce\")\n            });\n            z.forEach(function (o) {\n                window.mParticle.Identity = window.mParticle.Identity || {};\n                window.mParticle.Identity[o] = a(o, \"Identity\")\n            });\n\n            //load script\n            var mp = document.createElement('script');\n            var sc = document.getElementsByTagName('script')[0];\n            mp.type = 'text/javascript';\n            mp.async = true;\n            mp.src = ('https:' == document.location.protocol ? 'https://jssdkcdns' : 'http://jssdkcdn') + '.mparticle.com/js/v2/' + apiKey + '/mparticle.js';\n            sc.parentNode.insertBefore(mp, sc);\n        })(mparticle_apikey);\n    }\n})();",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    function trackMParticle(eventName, eventType, customData) {\n        var noValue = 'not available';\n        // set aam_uuid and MID from adobe\n        var aam_uuid = window.s && window.s.cookieRead('aam_uuid') || noValue;\n        var aam_mid = window.s && window.s.visitor && s.visitor.getMarketingCloudVisitorID() || noValue;\n\n        var navigator = window.navigator || {};\n\n        var uxExperiment = (function () {\n            //example 2147483647~rv=8~id=b7c90f942ae0282250a0418fbf11f00a~rn=MSNBC_Video_Player_vs._Bento%20B'\n            var cookieName = (function () {\n                if (window.s.topLevelDomain === 'nbcnews.com') {\n                    return 'akaas_NBCNews';\n                }\n                else if (window.s.topLevelDomain === 'msnbc.com') {\n                    return 'akaas_MSNBC';\n                }\n                else if (window.s.topLevelDomain === 'today.com') {\n                    return 'akaas_TODAY';\n                }\n                else return null;\n            })();\n            var returnString = 'false';\n            var value = window.s.cookieRead(cookieName).split('~');\n            if (value.length >= 2) {\n                returnString = value[1];\n            }\n            return returnString;\n        })();\n\n        var siteBrand = (function () {\n            //brand is only today, and everything else is nbcnews\n            if ($t('jsonLd.Dataset.0.vertical') === 'today') {\n                return 'Today';\n            } else if ($t('jsonLd.Dataset.0.vertical') === 'msnbc') {\n                return 'MSNBC';\n            } else {\n                return 'NBC News';\n            }\n        })();\n\n        var globalData = {\n            'adobe uuid': aam_uuid || noValue,\n            'adobe marketing cloud': aam_mid || noValue,\n            'user agent': navigator.userAgent || noValue,\n            'platform': navigator.platform || noValue,\n            'product name': 'web',\n            'referrer': window.BI && window.BI.userInfo && window.BI.userInfo.get(\"referrer\"),\n            'ui experiment': window.s.custGetQS('icid'),\n            'ux experiment': uxExperiment,\n            'campaign id': window.BI && window.BI.userInfo && window.BI.userInfo.get(\"cid\"),\n            'url': document.location.href || noValue,\n            'brand domain': siteBrand || noValue,\n            'app version': $t('jsonLd.Dataset.0.appVersion', noValue),\n            'sailthru visitor': BI && BI.userInfo && BI.userInfo.get(\"sailthru_visitor\"),\n            'airship id': BI && BI.userInfo && BI.userInfo.get(\"airship_id\"),\n            isAmp: 'false'\n        }\n        var combinedData = Object.assign({}, globalData, customData);\n        // remove any keys that have noValue \n        var filteredData = Object.keys(combinedData).reduce(function (filteredData, key) {\n            if (combinedData[key] !== noValue && combinedData[key] !== '') filteredData[key] = combinedData[key];\n            return filteredData;\n        }, {});\n\n        window.mParticle.logEvent(eventName, eventType, filteredData, { 'Facebook.EventSourceURL': globalData.url });\n    }\n\n    $t('register', 'mParticle_track_event');\n\n    $t('on', 'mParticle_track_event', function (e, data) {\n        if (window.mParticle) {\n            window.mParticle.ready(\n                function () {\n                    var eventType = data && data.eventType;\n                    eventType = mParticle.EventType[eventType] || null;\n                    var eventName = data && data.eventName || null;\n                    var eventData = data && data.eventData || {};\n                    if (eventType && eventName) {\n                        trackMParticle(eventName, eventType, eventData);\n                    }\n                }\n            )\n        }\n    })\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLb3e14f7c8cf5486aa0dd2635d987da55',
            name: 'Action - mbt_video_socialShare',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, s */\n$t('on', 'mbt_video_socialShare', function (e) {\n    var actionContextData = {\n        'news.linkmoduledetail': 'Video',\n        'news.linkmoduletype': 'Video Share Bar',\n        'news.socialplatform': $t(e.type + '.platform', s.noValue)\n    };\n    s.contextData = s.extendArray(s.contextData, actionContextData);\n\n    //track action\n    s.tl(true, 'o', 'video share');\n\n    //cleanup values after action\n    for (var item in actionContextData) {\n        delete s.contextData[item];\n    }\n});\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL5d539e150a7840cd9d49d5f3e4ec2837',
            name: 'Ads - SimpleReach pageview',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 40 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t */\n(function() {\n    var ranSimplereach = false;\n    $t('on', 'dtm_pageView', function(e, data) {\n        var pageIndex = $t(e.type + '.index', '0');\n        var articleIndex = $t('jsonLd.Dataset', []).reduce(function(acum, curE, curI) {\n            var pageType = curE.pageType && curE.pageType.toLowerCase();\n            if (curI <= pageIndex && pageType === 'article') {\n                return acum + 1;\n            } else {\n                return acum;\n            }\n        }, -1);\n        var trackView = data.trackView !== false; //this will default all to true if not false\n        var nativeSponsor = $t('jsonLd.Dataset.' + pageIndex + '.sponsor', false);\n        var isWWW = document.location.hostname.match(/([a-z0-9])+[^.]/)[0] === 'www';\n        var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n        var brand = topLevelDomain.split('.')[0];\n\n        if (nativeSponsor && trackView && !ranSimplereach) {\n            window.__reach_config = {\n                pid: (isWWW ? '58642e4d736b79ecca00151c' : '000000000000000000000000'),\n                title: $t('jsonLd.NewsArticle.' + articleIndex + '.headline'),\n                url: $t('jsonLd.NewsArticle.' + articleIndex + '.url'),\n                date: $t('jsonLd.NewsArticle.' + articleIndex + '.datePublished'), //UTC or any ISO8601 date\n                authors: [nativeSponsor, brand],\n                channels: [$t('jsonLd.Dataset.' + pageIndex + '.vertical'), $t('jsonLd.Dataset' + pageIndex + '.section'), $t('jsonLd.Dataset.' + pageIndex + '.subSection')],\n                tags: [$t('jsonLd.NewsArticle.' + articleIndex + '.articleId'), 'article'],\n                article_id: [$t('jsonLd.NewsArticle.' + articleIndex + '.articleId')],\n                ignore_errors: false\n            };\n            if (window.SPR && window.SPR.Reach) {\n                window.SPR.Reach.collect(window.__reach_config);\n            } else {\n                (function() {\n                    var s = document.createElement('script');\n                    s.async = true;\n                    s.type = 'text/javascript';\n                    s.src = document.location.protocol + '//d8rk54i4mohrb.cloudfront.net/js/reach.js';\n                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);\n                })();\n            }\n            ranSimplereach = true;\n        } else if (trackView && ranSimplereach && window.SPR) {\n            window.SPR.stop();\n            ranSimplereach = false;\n        }\n    });\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLc35b23054fa64ecc82087238055c13fa',
            name: 'ndp_videoEvent - streamsense',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '\n/* Copyright (c) 2016 comScore, Inc.\n    * All rights reserved.\n    * By using this software, you are agreeing to be bound by the\n    * terms of these policies: http://www.comscore.com/About_comScore/Privacy_Policy\n    */\n!function(a,b){false&&"function"==typeof define&&define.a?define([],function(){return a.ns_=b(a.ns_)}):"object"==typeof module&&module.exports?module.exports=b():a.ns_=b(a.ns_)}(this,function(a){a=a||{},a.ns_=a;var b={uid:function(){var a=1;return function(){return+new Date+"_"+a++}}(),filter:function(a,b){var c={};for(var d in b)b.hasOwnProperty(d)&&a(b[d])&&(c[d]=b[d]);return c},extend:function(a){var b,c=arguments.length;a=a||{};for(var d=1;c>d;d++)if(b=arguments[d])for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},getString:function(a,b){var c=String(a);return null==a?b||"na":c},getLong:function(a,b){var c=Number(a);return null==a||isNaN(c)?b||0:c},getInteger:function(a,b){var c=Number(parseInt(a));return null==a||isNaN(c)?b||0:c},getBoolean:function(a,b){var c="true"==String(a).toLowerCase();return null==a?b||!1:c},parseBoolean:function(a,b){return b=b||!1,a?"0"==a?!1:void 0:b},isNotEmpty:function(a){return!this.isEmpty(a)},isEmpty:function(a){return void 0===a||null===a||""===a||a instanceof Array&&0===a.length},indexOf:function(a,b){var c=-1;return this.forEach(b,function(b,d){b==a&&(c=d)}),c},forEach:function(a,b,c){try{if("function"==typeof b)if(c="undefined"!=typeof c?c:null,"number"!=typeof a.length||"undefined"==typeof a[0]){var d="undefined"!=typeof a.__proto__;for(var e in a)a.hasOwnProperty(e)&&(!d||d&&"undefined"==typeof a.__proto__[e])&&"function"!=typeof a[e]&&b.call(c,a[e],e)}else for(var f=0,g=a.length;g>f;f++)b.call(c,a[f],f)}catch(h){}},regionMatches:function(a,b,c,d,e){if(0>b||0>d||b+e>a.length||d+e>c.length)return!1;for(;--e>=0;){var f=a.charAt(b++),g=c.charAt(d++);if(f!=g)return!1}return!0},size:function(a){var b=0;for(var c in a)a.hasOwnProperty(c)&&b++;return b},log:function(a,b){if("undefined"!=typeof b&&b&&"undefined"!=typeof console&&console){var c=new Date,d=c.getHours()+":"+c.getMinutes()+":"+c.getSeconds();console.log(d,a)}},isTrue:function(a){return"undefined"==typeof a?!1:"string"==typeof a?(a=a.toLowerCase(),"true"===a||"1"===a||"on"===a):!!a},toString:function(a){if("undefined"==typeof a)return"undefined";if("string"==typeof a)return a;if("[object Array]"===Object.prototype.toString.call(a))return a.join(",");if(this.size(a)>0){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}return a.toString()},exists:function(a){return"undefined"!=typeof a&&null!=a},firstGreaterThan0:function(){for(var a=0,b=arguments.length;b>a;a++){var c=arguments[a];if(c>0)return c}return 0},cloneObject:function(a){if(null==a||"object"!=typeof a)return a;var b=function(){function a(){}function b(b){return"object"==typeof b?(a.prototype=b,new a):b}function c(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])}function d(){this.copiedObjects=[];var a=this;this.recursiveDeepCopy=function(b){return a.deepCopy(b)},this.depth=0}function e(a,b){var c=new d;return b&&(c.maxDepth=b),c.deepCopy(a)}function f(a){return"undefined"!=typeof window&&window&&window.Node?a instanceof Node:"undefined"!=typeof document&&a===document?!0:"number"==typeof a.nodeType&&a.attributes&&a.childNodes&&a.cloneNode}var g=[];return c.prototype={constructor:c,canCopy:function(){return!1},create:function(a){},populate:function(a,b,c){}},d.prototype={constructor:d,maxDepth:256,cacheResult:function(a,b){this.copiedObjects.push([a,b])},getCachedResult:function(a){for(var b=this.copiedObjects,c=b.length,d=0;c>d;d++)if(b[d][0]===a)return b[d][1]},deepCopy:function(a){if(null===a)return null;if("object"!=typeof a)return a;var b=this.getCachedResult(a);if(b)return b;for(var c=0;c<g.length;c++){var d=g[c];if(d.canCopy(a))return this.applyDeepCopier(d,a)}throw new Error("Unable to clone the following object "+a)},applyDeepCopier:function(a,b){var c=a.create(b);if(this.cacheResult(b,c),this.depth++,this.depth>this.maxDepth)throw new Error("Maximum recursion depth exceeded.");return a.populate(this.recursiveDeepCopy,b,c),this.depth--,c}},e.DeepCopier=c,e.deepCopiers=g,e.register=function(a){a instanceof c||(a=new c(a)),g.unshift(a)},e.register({canCopy:function(){return!0},create:function(a){return a instanceof a.constructor?b(a.constructor.prototype):{}},populate:function(a,b,c){for(var d in b)b.hasOwnProperty(d)&&(c[d]=a(b[d]));return c}}),e.register({canCopy:function(a){return a instanceof Array},create:function(a){return new a.constructor},populate:function(a,b,c){for(var d=0;d<b.length;d++)c.push(a(b[d]));return c}}),e.register({canCopy:function(a){return a instanceof Date},create:function(a){return new Date(a)}}),e.register({canCopy:function(a){return f(a)},create:function(a){return"undefined"!=typeof document&&a===document?document:a.cloneNode(!1)},populate:function(a,b,c){if("undefined"!=typeof document&&b===document)return document;if(b.childNodes&&b.childNodes.length)for(var d=0;d<b.childNodes.length;d++){var e=a(b.childNodes[d]);c.appendChild(e)}}}),{deepCopy:e}}();return b.deepCopy(a)},safeGet:function(a,b){return b=this.exists(b)?b:"",this.exists(a)?a:b},getBrowserName:function(){if(!navigator)return"";var a,b,c=navigator.userAgent||"",d=navigator.appName||"";return-1!=(b=c.indexOf("Opera"))||-1!=(b=c.indexOf("OPR/"))?d="Opera":-1!=(b=c.indexOf("Android"))?d="Android":-1!=(b=c.indexOf("Chrome"))?d="Chrome":-1!=(b=c.indexOf("Safari"))?d="Safari":-1!=(b=c.indexOf("Firefox"))?d="Firefox":-1!=(b=c.indexOf("IEMobile"))?d="Internet Explorer Mobile":"Microsoft Internet Explorer"==d||"Netscape"==d?d="Internet Explorer":(a=c.lastIndexOf(" ")+1)<(b=c.lastIndexOf("/"))?(d=c.substring(a,b),d.toLowerCase()==d.toUpperCase()&&(d=navigator.appName)):d="unknown",d},getBrowserFullVersion:function(){if(!navigator)return"";var a,b,c,d,e=navigator.userAgent||"",f=navigator.appName||"",g=navigator.appVersion?""+parseFloat(navigator.appVersion):"";return-1!=(b=e.indexOf("Opera"))?(g=e.substring(b+6),-1!=(b=e.indexOf("Version"))&&(g=e.substring(b+8))):-1!=(b=e.indexOf("OPR/"))?g=e.substring(b+4):-1!=(b=e.indexOf("Android"))?g=e.substring(b+11):-1!=(b=e.indexOf("Chrome"))?g=e.substring(b+7):-1!=(b=e.indexOf("Safari"))?(g=e.substring(b+7),-1!=(b=e.indexOf("Version"))&&(g=e.substring(b+8))):-1!=(b=e.indexOf("Firefox"))?g=e.substring(b+8):"Microsoft Internet Explorer"==f?(d=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),null!=d.exec(e)&&(g=parseFloat(RegExp.$1))):"Netscape"==f?(d=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"),null!=d.exec(e)&&(g=parseFloat(RegExp.$1))):g=e.lastIndexOf(" ")+1<(b=e.lastIndexOf("/"))?e.substring(b+1):"unknown",g=g.toString(),-1!=(c=g.indexOf(";"))&&(g=g.substring(0,c)),-1!=(c=g.indexOf(" "))&&(g=g.substring(0,c)),-1!=(c=g.indexOf(")"))&&(g=g.substring(0,c)),a=parseInt(""+g,10),isNaN(a)&&(g=""+parseFloat(navigator.appVersion)),g},browserAcceptsLargeURLs:function(){return"undefined"!=typeof window?(null!==window.ActiveXObject,!0):!0},getNamespace:function(){return a.ns_||a}};return a.StreamSense=a.StreamSense||function(){var c=function(){var a="cs_";return function(){var c="undefined"!=typeof localStorage?localStorage:null;b.extend(this,{get:function(b){return c&&c.getItem(a+b)},set:function(b,d){c&&c.setItem(a+b,d)},has:function(b){return c&&c.getItem(a+b)},remove:function(b){c&&c.removeItem(a+b)},clear:function(){for(var b=0;c&&b<c.length;++b){var d=c.key(b);d.substr(0,a.length)===a&&c.removeItem(d)}}})}}(),d=function(a,b){if("undefined"!=typeof Image){var c=new Image;c.onload=function(){b&&b(200),c=null},c.onerror=function(){b&&b(),c=null},c.src=a}},e=function(a,b,c){c&&"undefined"!=typeof setTimeout&&setTimeout(c,0)},f=function(){return{dir:function(){return null},append:function(a,b,c){},write:function(a,b,c){},deleteFile:function(){return!1},read:function(){return null}}}(),g=function(){return{PLATFORM:"generic",httpGet:d,httpPost:e,Storage:c,IO:f,getCrossPublisherId:function(){return null},getAppName:function(){return h.UNKNOWN_VALUE},getAppVersion:function(){return h.UNKNOWN_VALUE},getVisitorId:function(){return this.getDeviceName()+ +new Date+~~(1e3*Math.random())},getVisitorIdSuffix:function(){return"72"},getDeviceName:function(){return h.UNKNOWN_VALUE},getPlatformVersion:function(){return h.UNKNOWN_VALUE},getPlatformName:function(){return"js"},getRuntimeName:function(){return h.UNKNOWN_VALUE},getRuntimeVersion:function(){return h.UNKNOWN_VALUE},getResolution:function(){return h.UNKNOWN_VALUE},getLanguage:function(){return h.UNKNOWN_VALUE},getPackageName:function(){return null},isConnectionAvailable:function(){return!0},isCompatible:function(){return!0},autoSelect:function(){},setPlatformAPI:function(){},isCrossPublisherIdChanged:function(){return!1},setTimeout:function(a,b){return setTimeout(a,b)},clearTimeout:function(a){return clearTimeout(a)},getDeviceArchitecture:function(){return h.UNKNOWN_VALUE},getConnectionType:function(){return h.UNKNOWN_VALUE},getDeviceJailBrokenFlag:function(){return h.UNKNOWN_VALUE},isConnSecure:function(){return"s"===document.location.href.charAt(4)},processMeasurementLabels:function(){}}}(),h={UNKNOWN_VALUE:"unknown",UNKNOWN_RESOLUTION:"0x0"};b.jsonObjectToStringDictionary=function(a){var b={};for(var c in a){var d=a[c];null===d||void 0===d?b[c]=d:b[c]=a[c]+""}return b},b.getKeys=function(a,b){var c,d=[];for(c in a)b&&!b.test(c)||!a.hasOwnProperty(c)||(d[d.length]=c);return d},b.fixEventTime=function(a){if(a.ns_ts)return parseInt(a.ns_ts);var b=+new Date;return a.ns_ts=String(b),b},b.isBrowser=function(){return"undefined"!=typeof window&&"undefined"!=typeof document},b.addNewPlaybackInterval=function(a,c,d,e){var f={};if(!(d>=c))return b.cloneObject(a);if(f.start=c,f.end=d,0==a.length)return a.push(f),b.cloneObject(a);var g;for(g=0;g<a.length;g++)if(f.start>=a[g].start&&f.end<=a[g].end)return b.cloneObject(a);var h,i=!1;for(h=0;h<a.length;h++)if(h+1===a.length&&f.start>=a[h].start||f.start>=a[h].start&&f.start<a[h+1].start){a.splice(h+1,0,f),i=!0;break}i||a.splice(0,0,f);var j=[a[0]];for(g=1;g<a.length;g++)j[j.length-1].end+e<a[g].start?j.push(a[g]):j[j.length-1].end<a[g].end&&(j[j.length-1].end=a[g].end);return b.cloneObject(j)};var i=function(){var a=["play","pause","pause-on-buffering","end","buffer","buffer-stop","keep-alive","hb","custom","load","start","skstart","adskip","cta","error","trans","drmfa","drmap","drmde","bitrt","playrt","volume","window","audio","video","subs","cdn"];return{PLAY:0,PAUSE:1,PAUSE_ON_BUFFERING:2,END:3,BUFFER:4,BUFFER_STOP:5,KEEPALIVE:6,HEARTBEAT:7,CUSTOM:8,LOAD:9,START:10,SEEK_START:11,AD_SKIP:12,CTA:13,ERROR:14,TRANSFER:15,DRM_FAILED:16,DRM_APPROVED:17,DRM_DENIED:18,BIT_RATE:19,PLAYBACK_RATE:20,VOLUME:21,WINDOW_STATE:22,AUDIO:23,VIDEO:24,SUBS:25,CDN:26,toString:function(b){return a[b]}}}(),j=function(){return{IDLE:0,PLAYBACK_NOT_STARTED:1,PLAYING:2,PAUSED:3,BUFFERING_BEFORE_PLAYBACK:4,BUFFERING_DURING_PLAYBACK:5,BUFFERING_DURING_SEEKING:6,BUFFERING_DURING_PAUSE:7,SEEKING_BEFORE_PLAYBACK:8,SEEKING_DURING_PLAYBACK:9,SEEKING_DURING_BUFFERING:10,SEEKING_DURING_PAUSE:11,PAUSED_DURING_BUFFERING:12}}(),k=function(){var a=["c","s","r"];return{SINGLE_CLIP:0,SEGMENTED:1,REDUCED:2,toString:function(b){return a[b]}}}(),l={STREAMSENSE_VERSION:"5.1.1.160316",MODEL_VERSION:"5.1",DEFAULT_PLAYERNAME:"js_api",DEFAULT_HEARTBEAT_INTERVAL:[{playingtime:6e4,interval:1e4},{playingtime:null,interval:6e4}],DEFAULT_KEEP_ALIVE_INTERVAL:12e5,DEFAULT_PAUSED_ON_BUFFERING_INTERVAL:500,C1_VALUE:"19",C10_VALUE:"js",NS_AP_C12M_VALUE:"1",NS_NC_VALUE:"1",PAGE_NAME_LABEL:"name",RESTRICTED_URL_LENGTH_LIMIT:2048,URL_LENGTH_LIMIT:4096,THROTTLING_DELAY:500,INTERVAL_MERGE_TOLERANCE:500,STANDARD_METADATA_LABELS:["ns_st_ci","ns_st_pr","ns_st_sn","ns_st_en","ns_st_ep","ns_st_ty","ns_st_ct","ns_st_li","ns_st_ad","ns_st_bn","ns_st_tb","ns_st_an","ns_st_ta","ns_st_pu","c3","c4","c6"],LABELS_ORDER:["c1","c2","ca2","cb2","cc2","cd2","ns_site","ca_ns_site","cb_ns_site","cc_ns_site","cd_ns_site","ns_vsite","ca_ns_vsite","cb_ns_vsite","cc_ns_vsite","cd_ns_vsite","ns_alias","ca_ns_alias","cb_ns_alias","cc_ns_alias","cd_ns_alias","ns_ap_an","ca_ns_ap_an","cb_ns_ap_an","cc_ns_ap_an","cd_ns_ap_an","ns_ap_pn","ns_ap_pv","c12","ca12","cb12","cc12","cd12","ns_ak","ns_ap_hw","name","ns_ap_ni","ns_ap_ec","ns_ap_ev","ns_ap_device","ns_ap_id","ns_ap_csf","ns_ap_bi","ns_ap_pfm","ns_ap_pfv","ns_ap_ver","ca_ns_ap_ver","cb_ns_ap_ver","cc_ns_ap_ver","cd_ns_ap_ver","ns_ap_sv","ns_ap_cv","ns_type","ca_ns_type","cb_ns_type","cc_ns_type","cd_ns_type","ns_radio","ns_nc","cs_partner","cs_xcid","ns_ap_ui","ca_ns_ap_ui","cb_ns_ap_ui","cc_ns_ap_ui","cd_ns_ap_ui","ns_ap_gs","ns_st_sv","ns_st_pv","ns_st_smv","ns_st_it","ns_st_id","ns_st_ec","ns_st_sp","ns_st_sc","ns_st_sq","ns_st_ppc","ns_st_apc","ns_st_spc","ns_st_cn","ns_st_ev","ns_st_po","ns_st_cl","ns_st_el","ns_st_sl","ns_st_pb","ns_st_hc","ns_st_mp","ca_ns_st_mp","cb_ns_st_mp","cc_ns_st_mp","cd_ns_st_mp","ns_st_mv","ca_ns_st_mv","cb_ns_st_mv","cc_ns_st_mv","cd_ns_st_mv","ns_st_pn","ns_st_tp","ns_st_ad","ns_st_li","ns_st_ci","ns_st_si","ns_st_pt","ns_st_dpt","ns_st_ipt","ns_st_et","ns_st_det","ns_st_upc","ns_st_dupc","ns_st_iupc","ns_st_upa","ns_st_dupa","ns_st_iupa","ns_st_lpc","ns_st_dlpc","ns_st_lpa","ns_st_dlpa","ns_st_pa","ns_ap_jb","ns_ap_et","ns_ap_res","ns_ap_sd","ns_ap_po","ns_ap_ot","ns_ap_c12m","cs_c12u","ca_cs_c12u","cb_cs_c12u","cc_cs_c12u","cd_cs_c12u","ns_ap_install","ns_ap_updated","ns_ap_lastrun","ns_ap_cs","ns_ap_runs","ns_ap_usage","ns_ap_fg","ns_ap_ft","ns_ap_dft","ns_ap_bt","ns_ap_dbt","ns_ap_dit","ns_ap_as","ns_ap_das","ns_ap_it","ns_ap_uc","ns_ap_aus","ns_ap_daus","ns_ap_us","ns_ap_dus","ns_ap_ut","ns_ap_oc","ns_ap_uxc","ns_ap_uxs","ns_ap_lang","ns_ap_ar","ns_ap_miss","ns_ts","ns_st_ca","ns_st_cp","ns_st_er","ca_ns_st_er","cb_ns_st_er","cc_ns_st_er","cd_ns_st_er","ns_st_pe","ns_st_ui","ca_ns_st_ui","cb_ns_st_ui","cc_ns_st_ui","cd_ns_st_ui","ns_st_bc","ns_st_dbc","ns_st_bt","ns_st_dbt","ns_st_bp","ns_st_lt","ns_st_skc","ns_st_dskc","ns_st_ska","ns_st_dska","ns_st_skd","ns_st_skt","ns_st_dskt","ns_st_pc","ns_st_dpc","ns_st_pp","ns_st_br","ns_st_pbr","ns_st_rt","ns_st_prt","ns_st_ub","ns_st_vo","ns_st_pvo","ns_st_ws","ns_st_pws","ns_st_ki","ns_st_rp","ns_st_bn","ns_st_tb","ns_st_an","ns_st_ta","ns_st_pl","ns_st_pr","ns_st_sn","ns_st_en","ns_st_ep","ns_st_sr","ns_st_ty","ns_st_ct","ns_st_cs","ns_st_ge","ns_st_st","ns_st_ce","ns_st_ia","ns_st_dt","ns_st_ddt","ns_st_tdt","ns_st_tm","ns_st_dtm","ns_st_ttm","ns_st_de","ns_st_pu","ns_st_ti","ns_st_cu","ns_st_fee","ns_st_at","ns_st_pat","ns_st_vt","ns_st_pvt","ns_st_tt","ns_st_ptt","ns_st_cdn","ns_st_pcdn","ns_ap_i1","ns_ap_i2","ns_ap_i3","ns_ap_i4","ns_ap_i5","ns_ap_i6","ns_ap_referrer","ns_clid","ns_campaign","ns_source","ns_mchannel","ns_linkname","ns_fee","gclid","utm_campaign","utm_source","utm_medium","utm_term","utm_content","ns_ecommerce","ns_ec_sv","ns_client_id","ns_order_id","ns_ec_cur","ns_orderline_id","ns_orderlines","ns_prod_id","ns_qty","ns_prod_price","ns_prod_grp","ns_brand","ns_shop","ns_category","category","ns_c","ns_search_term","ns_search_result","ns_m_exp","ns_m_chs","c3","ca3","cb3","cc3","cd3","c4","ca4","cb4","cc4","cd4","c5","ca5","cb5","cc5","cd5","c6","ca6","cb6","cc6","cd6","c10","c11","c13","c14","c15","c16","c7","c8","c9","ns_ap_er"]},m=function(){function a(){function a(){I={},I.ns_st_pt="0",I.ns_st_bt="0",I.ns_st_bc="0",I.ns_st_pc="0",I.ns_st_sq="0",I.ns_st_cl="0",I.ns_st_pn="1",I.ns_st_tp="1",I.ns_st_skc="0",I.ns_st_et="0",I.ns_st_cn="1",I.ns_st_sc="0",I.ns_st_ska="0",I.ns_st_skd="0",I.ns_st_skt="0",I.ns_st_upc="0",I.ns_st_lpc="0",I.ns_st_upa="0",I.ns_st_lpa="0",I.ns_st_ub="0",I.ns_st_br="0",f=!1,e=!1,d=h.UNKNOWN_VALUE,g=NaN,m=0,j=0,i=NaN,n=NaN,p=0,o=0,k=0,s=NaN,q=[],r=[],t=0,u=0,v=0,w=0,x=0,y=0,z=NaN,A=0,B=!1,C=NaN,F=!1,E=0,H=0,D=0,G=0,J=0,K=0,L=0,M=0,N=0}function c(){var a,b,c=0;for(a=0;a<q.length;a++)c+=Math.abs(q[a].end-q[a].start);O.setUniquePlaybackInterval(c);var d=0;for(a=0;a<q.length;a++)b=Math.abs(q[a].end-q[a].start),b>d&&(d=b);O.setLongestPlaybackInterval(d);var e=0;for(a=0;a<r.length;a++)e+=Math.abs(r[a].end-r[a].start);O.setAssetUniquePlaybackInterval(e);var f=0;for(a=0;a<r.length;a++)b=Math.abs(r[a].end-r[a].start),b>f&&(f=b);O.setAssetLongestPlaybackInterval(f)}var d,e,f,g,i,j,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=this,P=l.INTERVAL_MERGE_TOLERANCE;b.extend(this,{getHash:function(){return d},setHash:function(a){d=a},setPlaybackIntervalMergeTolerance:function(a){P=a},getPlaybackIntervalMergeTolerance:function(){return P},setLabels:function(a){null!=a&&b.extend(I,a)},getLabels:function(){return I},setLabel:function(a,b){var c={};c[a]=b,O.setLabels(c)},getLabel:function(a){return I[a]},getClipNumber:function(){return parseInt(O.getLabel("ns_st_cn"))},setClipNumber:function(a){O.setLabel("ns_st_cn",String(a))},getPartNumber:function(){return parseInt(O.getLabel("ns_st_pn"))},createLabels:function(a){var c=a||{};c.ns_st_dbt=String(O.getBufferingTime()-A),A=O.getBufferingTime(),c.ns_st_det=String(O.getElapsedTime()-o),o=O.getElapsedTime(),c.ns_st_dupc=String(O.getUniquePlaybackInterval()-t),t=O.getUniquePlaybackInterval(),parseInt(c.ns_st_dupc)<0&&(c.ns_st_dupc="0");var d;d=b.exists(c.ns_st_upc)?parseInt(c.ns_st_upc):O.getUniquePlaybackInterval(),c.ns_st_iupc=String(d-u),u=d,parseInt(c.ns_st_iupc)<0&&(c.ns_st_iupc="0"),c.ns_st_dupa=String(O.getAssetUniquePlaybackInterval()-v),v=O.getAssetUniquePlaybackInterval(),parseInt(c.ns_st_dupa)<0&&(c.ns_st_dupa="0");var e;e=b.exists(c.ns_st_upa)?parseInt(c.ns_st_upa):O.getAssetUniquePlaybackInterval(),c.ns_st_iupa=String(e-w),w=e,parseInt(c.ns_st_iupa)<0&&(c.ns_st_iupa="0"),c.ns_st_dlpc=String(O.getLongestPlaybackInterval()-x),x=O.getLongestPlaybackInterval(),parseInt(c.ns_st_dlpc)<0&&(c.ns_st_dlpc="0"),c.ns_st_dlpa=String(O.getAssetLongestPlaybackInterval()-y),y=O.getAssetLongestPlaybackInterval(),parseInt(c.ns_st_dlpa)<0&&(c.ns_st_dlpa="0");var g;return g=b.exists(c.ns_st_pt)?parseInt(c.ns_st_pt):O.getPlaybackTime(),c.ns_st_ipt=String(g-k),k=g,c.ns_st_dpt=String(O.getPlaybackTime()-j),j=O.getPlaybackTime(),c.ns_st_dpc=String(O.getPauses()-J),J=O.getPauses(),c.ns_st_dskc=String(O.getSeeks()-K),K=O.getSeeks(),c.ns_st_dbc=String(O.getBuffers()-L),L=O.getBuffers(),c.ns_st_dskt=String(O.getSeekingTime()-D),D=O.getSeekingTime(),c.ns_st_dska=String(O.getSeekingAmount()-G),G=O.getSeekingAmount(),b.extend(c,O.getLabels()),O.setSeekingDirection(0),f&&(c.ns_st_spc=String(M),c.ns_st_apc=String(N)),f||b.parseBoolean(c.ns_st_sc)||(c.ns_st_sc="1"),c},getVideoTrack:function(){return O.getLabel("ns_st_vt")},setVideoTrack:function(a){O.setLabel("ns_st_vt",String(a))},getAudioTrack:function(){return O.getLabel("ns_st_at")},setAudioTrack:function(a){O.setLabel("ns_st_at",String(a))},getSubtitleTrack:function(){return O.getLabel("ns_st_tt")},setSubtitleTrack:function(a){O.setLabel("ns_st_tt",String(a))},getCDN:function(){return O.getLabel("ns_st_cdn")},setCDN:function(a){O.setLabel("ns_st_cdn",String(a))},getClipPlaybackIntervals:function(){return q},setClipPlaybackIntervals:function(a){q=a},getAssetPlaybackIntervals:function(){return r},getUniquePlaybackInterval:function(){return parseInt(O.getLabel("ns_st_upc"))},getAssetUniquePlaybackInterval:function(){return parseInt(O.getLabel("ns_st_upa"))},setAssetUniquePlaybackInterval:function(a){O.setLabel("ns_st_upa",String(a))},setUniquePlaybackInterval:function(a){O.setLabel("ns_st_upc",String(a))},getLongestPlaybackInterval:function(){return parseInt(O.getLabel("ns_st_lpc"))},setLongestPlaybackInterval:function(a){O.setLabel("ns_st_lpc",String(a))},getAssetLongestPlaybackInterval:function(){return parseInt(O.getLabel("ns_st_lpa"))},setAssetLongestPlaybackInterval:function(a){O.setLabel("ns_st_lpa",String(a))},incrementPauses:function(){O.setLabel("ns_st_pc",String(O.getPauses()+1))},incrementSeeks:function(){O.setLabel("ns_st_skc",String(O.getSeeks()+1))},incrementPlayCounter:function(){O.setLabel("ns_st_sq",String(O.getPlayCounter()+1))},getPlayCounter:function(){return parseInt(O.getLabel("ns_st_sq"))},getBufferingTime:function(){return parseInt(O.getLabel("ns_st_bt"))},setBufferingTime:function(a){O.setLabel("ns_st_bt",String(a))},addBufferingTime:function(a){if(!isNaN(z)){var b=O.getBufferingTime();b+=a-z,O.setBufferingTime(b),z=NaN}},setPlaybackStartPosition:function(a){s=parseInt(a)},getPlaybackStartPosition:function(){return s},addInterval:function(a){isNaN(s)||isNaN(a)||(q=b.addNewPlaybackInterval(q,s,a,P),r=b.addNewPlaybackInterval(r,s,a,P),c(),s=NaN)},getElapsedTime:function(){return parseInt(O.getLabel("ns_st_et"))},setElapsedTime:function(a){O.setLabel("ns_st_et",String(a))},addElapsedTime:function(a){if(!isNaN(n)){var b=O.getElapsedTime();b+=a-n,O.setElapsedTime(b),n=NaN}},getElapsedTimestamp:function(){return n},setElapsedTimestamp:function(a){n=a},addPlaybackTime:function(a){if(!isNaN(g)){var b=O.getPlaybackTime();b+=a-g,O.setPlaybackTime(b),g=NaN}},getPlaybackTime:function(){return parseInt(O.getLabel("ns_st_pt"))},getExpectedPlaybackPosition:function(a){return isNaN(g)||(m+=a-g),m},setPlaybackTimeOffset:function(a){m=a},getPlaybackTimeOffset:function(){return m},setPlaybackTime:function(a){O.setLabel("ns_st_pt",String(a))},getPlaybackTimestamp:function(){return g},setPlaybackTimestamp:function(a){g=a},setPreviousPlaybackTime:function(a){j=a},setPreviousPlaybackTimestamp:function(a){i=a},getBufferingTimestamp:function(){return z},setBufferingTimestamp:function(a){z=a},getPauses:function(){return parseInt(O.getLabel("ns_st_pc"))},setPauses:function(a){O.setLabel("ns_st_pc",String(a))},getSeeks:function(){return parseInt(O.getLabel("ns_st_skc"))},setSeeks:function(a){O.setLabel("ns_st_skc",String(a))},setSeeking:function(a){B=a},isSeeking:function(){return B},setCollectingSeekingTime:function(a){F=a},isCollectingSeekingTime:function(){return F},setClipStarted:function(a){e=a},isClipStarted:function(){return e},setPlaybackStarted:function(a){f=a},isPlaybackStarted:function(){return f},setSeekingTimestamp:function(a){C=a},getSeekingTimestamp:function(){return C},addSeekingTime:function(a){if(!isNaN(C)){var b=O.getSeekingTime();b+=a-C,O.setSeekingTime(b),C=NaN}},getSeekingTime:function(){return parseInt(O.getLabel("ns_st_skt"))},setSeekingTime:function(a){O.setLabel("ns_st_skt",String(a))},setSeekingTimeBeforeEnd:function(a){H=a},getSeekingTimeBeforeEnd:function(){return H},setSeekStartPosition:function(a){E=a},getSeekStartPosition:function(){return E},setSeekingAmount:function(a){O.setLabel("ns_st_ska",String(a))},getSeekingAmount:function(){return parseInt(O.getLabel("ns_st_ska"))},addSeekingAmount:function(a){var b=O.getSeekingAmount();b+=Math.abs(a-E),O.setSeekingAmount(b);var c;E==a?c=0:E>a?c=-1:a>E&&(c=1),O.setSeekingDirection(c),E=0},getSeekingDirection:function(){return parseInt(O.getLabel("ns_st_skd"))},setSeekingDirection:function(a){O.setLabel("ns_st_skd",String(a))},resetClipLifecycleLabels:function(){I.ns_st_pt="0",j=0,k=0,I.ns_st_bt="0",A=0,I.ns_st_bc="0",L=0,I.ns_st_pc="0",J=0,I.ns_st_sq="0",I.ns_st_upa="0",v=0,w=0,I.ns_st_et="0",o=0,I.ns_st_lpa="0",y=0,I.ns_st_skt="0",D=0,I.ns_st_ska="0",G=0,I.ns_st_skc="0",K=0},incrementSegmentPlaybackCounter:function(){M++},incrementClipLoadCounter:function(){O.setLabel("ns_st_sc",String(O.getClipLoadCounter()+1))},incrementAssetPlaybackCounter:function(){N++},setPreviousUniquePlaybackInterval:function(a){t=a},setPreviousEventIndependentUniquePlaybackInterval:function(a){u=a},setPreviousLongestPlaybackInterval:function(a){x=a},resetAssetPlaybackCounters:function(){r=[],O.setAssetUniquePlaybackInterval(0),v=0,w=0,O.setAssetLongestPlaybackInterval(0),y=0},setSegmentPlaybackCounter:function(a){M=a},setClipLoadCounter:function(a){O.setLabel("ns_st_sc",String(a))},setAssetPlaybackCounter:function(a){N=a},setLowestPartNumberPlayed:function(a){p=a},getSegmentPlaybackCounter:function(){return M},getClipLoadCounter:function(){return parseInt(O.getLabel("ns_st_sc"))},getAssetPlaybackCounter:function(){return N},getLowestPartNumberPlayed:function(){return p},getBuffers:function(){return parseInt(O.getLabel("ns_st_bc"))},incrementBufferCount:function(){O.setLabel("ns_st_bc",String(O.getBuffers()+1))},getPreviousBufferingTime:function(){return A}}),a()}return a.resetClip=function(a,b,c){for(var d=a.getLabels(),e={},f=0;c&&f<c.length;++f)d.hasOwnProperty(c[f])&&(e[c[f]]=d[c[f]]);b.setLabels(e),b.setPlaybackIntervalMergeTolerance(a.getPlaybackIntervalMergeTolerance())},a}(),n=function(){function a(){function a(){c=new m,f={},f.ns_st_bp="0",f.ns_st_pa="0",f.ns_st_pp="0",f.ns_st_sp="1",f.ns_st_id=String(+new Date),d=NaN,e=NaN,h={},i=0,g=!1,j=!1,k=0}var c,d,e,f,g,h,i,j,k,l=this;b.extend(this,{resetClip:function(){var a=c;c=new m,m.resetClip(a,c)},hashExists:function(a){return null!=h[a]},storeHash:function(a){h[a]={}},removeHash:function(a){delete h[a]},storeClipPlaybackCounters:function(){for(var a in h)if(h.hasOwnProperty(a)&&h[a].clipNumber===c.getClipNumber()){b.extend(h[a],{segmentPlaybackCounter:c.getSegmentPlaybackCounter(),clipLoadCounter:c.getClipLoadCounter(),assetPlaybackCounter:c.getAssetPlaybackCounter(),lowestPartNumberPlayed:c.getLowestPartNumberPlayed(),seeking:c.isSeeking(),seekingTimeBeforeEnd:c.getSeekingTimeBeforeEnd(),seekingStartPosition:c.getSeekStartPosition(),clipPlaybackIntervals:c.getClipPlaybackIntervals(),uniquePlaybackInterval:c.getUniquePlaybackInterval(),longestPlaybackInterval:c.getLongestPlaybackInterval(),videoTrack:c.getVideoTrack(),audioTrack:c.getAudioTrack(),subtitleTrack:c.getSubtitleTrack(),cdn:c.getCDN()});break}},getStoredClipRegisters:function(a){return h[a]},getClipNumber:function(a){return h[a].clipNumber},getMaxClipNumber:function(){return i},storeClipNumber:function(a,b){h[a].clipNumber=b,b>i&&(i=b)},setLabels:function(a){null!=a&&b.extend(f,a)},getLabels:function(){return f},setLabel:function(a,b){var c={};c[a]=b,l.setLabels(c)},getLabel:function(a){return f[a]},getClip:function(){return c},createLabels:function(a){var d=a||{};return j||(d.ns_st_pb=null!=d.ns_st_pb?d.ns_st_pb:"1"),b.extend(d,l.getLabels()),c.isPlaybackStarted()&&(d.ns_st_ppc=String(k)),d},incrementPlayCounter:function(){l.setLabel("ns_st_sp",String(parseInt(l.getLabel("ns_st_sp"))+1))},incrementPauses:function(){l.setLabel("ns_st_pp",String(l.getPauses()+1))},addPlaybackTime:function(a){if(!isNaN(e)){var b=l.getPlaybackTime();b+=a-e,l.setPlaybackTime(b),e=NaN}},addBufferingTime:function(a){if(!isNaN(d)){var b=l.getBufferingTime();b+=a-d,l.setBufferingTime(b),d=NaN}},getBufferingTime:function(){return parseInt(l.getLabel("ns_st_bp"))},setBufferingTime:function(a){l.setLabel("ns_st_bp",String(a))},getPlaybackTime:function(){return parseInt(l.getLabel("ns_st_pa"))},setBufferingTimestamp:function(a){d=a},getBufferingTimestamp:function(){return d},setPlaybackTime:function(a){l.setLabel("ns_st_pa",String(a))},setPlaybackTimestamp:function(a){e=a},getPlaybackTimestamp:function(){return e},getPauses:function(){return parseInt(l.getLabel("ns_st_pp"))},setPauses:function(a){l.setLabel("ns_st_pp",String(a))},isPlaylistStarted:function(){return g},setPlaylistStarted:function(a){g=a},getPlaybackCounter:function(){return k},incrementPlaybackCounter:function(){k++},setFirstEventSent:function(a){j=a}}),a()}return a.resetPlaylist=function(b,c,d){for(var e=b.getClip(),f=b.getLabels(),g={},h=0;d&&h<d.length;h++)f.hasOwnProperty(d[h])&&(g[d[h]]=f[d[h]]);c=new a,c.setLabels(g),m.resetClip(e,c.getClip(),d)},a}(),o=function(){return function(a){function c(){e=1}function d(c){f=b.extend({},c);var d=a.getSSECore().getPixelURL();if(a.getAppCore()){if(a.getSSECore().isProperlyInitialized()){var e=a.getSSECore().getExports().am,g=a.getSSECore().getExports().et,h=e.newApplicationMeasurement(a.getAppCore(),g.HIDDEN,c,d);a.getAppCore().getQueue().offer(h)}}else d&&a.getSSECore().getPlatformAPI().httpGet(a.getSSECore().prepareUrl(d,c))}var e,f,g=this;b.extend(this,{newEvent:function(a){d(a.eventLabels),a.eventType!=i.HEARTBEAT&&g.incrementEventCounter()},getEventCounter:function(){return e},incrementEventCounter:function(){e++},setEventCounter:function(a){e=a},getMeasurementSnapshot:function(){return f}}),c()}}(),p=function(){return function(a){function c(){g=0,h=0}function d(){h++;var c={},d=b.fixEventTime(c);c.ns_st_po=String(a.getPlaylist().getClip().getPlaybackTimeOffset()+(d-a.getPlaylist().getClip().getPlaybackTimestamp())),c.ns_st_pa=String(a.getPlaylist().getPlaybackTime()+(d-a.getPlaylist().getPlaybackTimestamp())),c.ns_st_pt=String(a.getPlaylist().getClip().getPlaybackTime()+(d-a.getPlaylist().getClip().getPlaybackTimestamp())),c.ns_st_dpt=String(d-a.getPlaylist().getClip().getPlaybackTimestamp()),a.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK?(c.ns_st_bp=String(a.getPlaylist().getBufferingTime()+(d-a.getPlaylist().getBufferingTimestamp())),c.ns_st_bt=String(a.getPlaylist().getClip().getBufferingTime()+(d-a.getPlaylist().getClip().getBufferingTimestamp())),c.ns_st_dbt=String(d-a.getPlaylist().getClip().getBufferingTimestamp())):c.ns_st_dbt=String(a.getPlaylist().getClip().getBufferingTime()-a.getPlaylist().getClip().getPreviousBufferingTime()),c.ns_st_et=String(a.getPlaylist().getClip().getElapsedTime()+(d-a.getPlaylist().getClip().getElapsedTimestamp())),c.ns_st_det=String(d-a.getPlaylist().getClip().getElapsedTimestamp());var e=b.cloneObject(a.getPlaylist().getClip().getClipPlaybackIntervals()),f=b.cloneObject(a.getPlaylist().getClip().getAssetPlaybackIntervals());e=b.addNewPlaybackInterval(e,a.getPlaylist().getClip().getPlaybackStartPosition(),parseInt(c.ns_st_po),a.getPlaylist().getClip().getPlaybackIntervalMergeTolerance()),f=b.addNewPlaybackInterval(f,a.getPlaylist().getClip().getPlaybackStartPosition(),parseInt(c.ns_st_po),a.getPlaylist().getClip().getPlaybackIntervalMergeTolerance());var l,m,n=0;for(l=0;l<e.length;l++)n+=Math.abs(e[l].end-e[l].start);c.ns_st_upc=String(n),c.ns_st_dupc=String(n-a.getPlaylist().getClip().getUniquePlaybackInterval());var o=0;for(l=0;l<e.length;l++)m=Math.abs(e[l].end-e[l].start),m>o&&(o=m);c.ns_st_lpc=String(o),c.ns_st_dlpc=String(o-a.getPlaylist().getClip().getLongestPlaybackInterval());var p=0;for(l=0;l<f.length;l++)p+=Math.abs(f[l].end-f[l].start);c.ns_st_upa=String(p),c.ns_st_dupa=String(p-a.getPlaylist().getClip().getAssetUniquePlaybackInterval());var q=0;for(l=0;l<f.length;l++)m=Math.abs(f[l].end-f[l].start),m>q&&(q=m);c.ns_st_lpa=String(q),c.ns_st_dlpa=String(q-a.getPlaylist().getClip().getAssetLongestPlaybackInterval()),c.ns_st_hc=String(a.getHeartbeat().getCount());var r=a.getSSECore().createLabels(i.HEARTBEAT,c,d);a.getEventManager().newEvent(r),g=0,k.resume()}function e(){null!=f&&(a.getSSECore().getPlatformAPI().clearTimeout(f),f=null)}var f,g,h,k=this,m=l.DEFAULT_HEARTBEAT_INTERVAL;b.extend(this,{getCount:function(){return h},setIntervals:function(a){m=a},getInterval:function(a){var b=0;if(null!=m)for(var c=0;c<m.length;c++){var d=m[c],e=d.playingtime;if(!e||e>a){b=d.interval;break}}return b},resume:function(){e();var b=k.getInterval(a.getPlaylist().getClip().getPlaybackTime()+(+new Date-a.getPlaylist().getClip().getPlaybackTimestamp()));if(b>0){var c=g>0?g:b;f=a.getSSECore().getPlatformAPI().setTimeout(d,c)}g=0},pause:function(){e();var b=k.getInterval(a.getPlaylist().getClip().getPlaybackTime()+(+new Date-a.getPlaylist().getClip().getPlaybackTimestamp()));g=b-(a.getPlaylist().getClip().getPlaybackTime()+(+new Date-a.getPlaylist().getClip().getPlaybackTimestamp()))%b}}),c()}}(),q=function(){return function(a){function c(){}function d(){var c={},d=b.fixEventTime(c);c.ns_st_po=String(a.getPlaylist().getClip().getExpectedPlaybackPosition(d)),a.getPlaylist().addPlaybackTime(d),a.getPlaylist().setPlaybackTimestamp(d),a.getPlaylist().getClip().addPlaybackTime(d),a.getPlaylist().getClip().setPlaybackTimestamp(d),a.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK&&(a.getPlaylist().addBufferingTime(d),a.getPlaylist().setBufferingTimestamp(d),a.getPlaylist().getClip().addBufferingTime(d),a.getPlaylist().getClip().setBufferingTimestamp(d)),a.getPlaylist().getClip().addElapsedTime(d),a.getPlaylist().getClip().setElapsedTimestamp(d),a.getPlaylist().getClip().addInterval(parseInt(c.ns_st_po)),a.getPlaylist().getClip().setPlaybackStartPosition(parseInt(c.ns_st_po));\nvar e=a.getSSECore().createLabels(i.KEEPALIVE,c,d);a.getEventManager().newEvent(e),g.resume()}function e(){null!=f&&(a.getSSECore().getPlatformAPI().clearTimeout(f),f=null)}var f,g=this,h=l.DEFAULT_KEEP_ALIVE_INTERVAL;b.extend(g,{resume:function(){e(),f=a.getSSECore().getPlatformAPI().setTimeout(d,h)},pause:function(){e()},setInterval:function(a){h=a},getInterval:function(){return h}}),c()}}(),r=function(){return function(a){function c(){f=j.IDLE,e=null,d=NaN}var d,e,f,g=this;b.extend(g,{eventTypeToState:function(a){if(f==j.IDLE){if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK}else if(f==j.PLAYBACK_NOT_STARTED){if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK;if(a==i.END||a==i.AD_SKIP)return j.IDLE}else if(f==j.PLAYING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.BUFFER)return j.BUFFERING_DURING_PLAYBACK;if(a==i.PAUSE)return j.PAUSED;if(a==i.SEEK_START)return j.SEEKING_DURING_PLAYBACK}else if(f==j.PAUSED){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.BUFFER)return j.BUFFERING_DURING_PAUSE;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_DURING_PAUSE}else if(f==j.BUFFERING_BEFORE_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PLAYBACK_NOT_STARTED;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK}else if(f==j.BUFFERING_DURING_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY||a==i.BUFFER_STOP)return j.PLAYING;if(a==i.PAUSE_ON_BUFFERING)return j.PAUSED_DURING_BUFFERING;if(a==i.SEEK_START)return j.SEEKING_DURING_BUFFERING;if(a==i.PAUSE)return j.PAUSED}else if(f==j.BUFFERING_DURING_SEEKING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.BUFFER_STOP)return j.SEEKING_DURING_PLAYBACK;if(a==i.PAUSE)return j.PAUSED}else if(f==j.BUFFERING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_DURING_PAUSE;if(a==i.BUFFER_STOP||a==i.PAUSE)return j.PAUSED}else if(f==j.SEEKING_BEFORE_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PAUSE)return j.PLAYBACK_NOT_STARTED;if(a==i.PLAY)return j.PLAYING;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK}else if(f==j.SEEKING_DURING_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE)return j.PAUSED;if(a==i.BUFFER)return j.BUFFERING_DURING_SEEKING}else if(f==j.SEEKING_DURING_BUFFERING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PAUSED}else if(f==j.SEEKING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PAUSED;if(a==i.BUFFER)return j.BUFFERING_DURING_PAUSE}else if(f==j.PAUSED_DURING_BUFFERING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.SEEK_START)return j.SEEKING_DURING_BUFFERING;if(a==i.PAUSE)return j.PAUSED;if(a==i.PLAY||a==i.BUFFER_STOP)return j.PLAYING}return null},getCurrentState:function(){return f},newEvent:function(a,b){var c=g.eventTypeToState(a);f!=c&&(e=f,f=c,d=b)},getPreviousState:function(){return e},getLastStateChangeTimestamp:function(){return d}}),c()}}(),s=function(){return function(a){var c=this;b.extend(c,{onSeekStartWhenPausedOrBufferingDuringPause:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().isCollectingSeekingTime()||(a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().getClip().setCollectingSeekingTime(!0)):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onBufferWhenSeekingOrPlayBackNotStartedOrPaused:function(b,c){a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b)},onPlayWhenSeekingDuringBufferingOrSeekingDuringPause:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)},onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b)},onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause:function(b,c){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause:function(b,c){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))}})}}(),t=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBufferStop:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().isCollectingSeekingTime()||(a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().getClip().setCollectingSeekingTime(!0)):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=String(a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()),a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),u=function(){return function(a){var c=this;b.extend(c,{onEndAndSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b)},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),v=function(){return function(a){var c=this;b.extend(c,{onPauseOnBuffering:function(b,c){var d=parseInt(c.ns_st_po);a.getSSECore().stopPausedOnBufferingTimer(),a.getHeartbeat().pause(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e),a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b),a.getPlaylist().getClip().setPlaybackTimeOffset(d)},onBufferStop:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b)},onEndOrAdSkip:function(c,d){var e=parseInt(d.ns_st_po);a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addPlaybackTime(c),a.getPlaylist().getClip().addElapsedTime(c),a.getPlaylist().getClip().addInterval(e);var f=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(f),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)},onPause:function(b,c){var d=parseInt(c.ns_st_po);a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)},onPlay:function(b,c){a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b)}})}}(),w=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses(),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),x=function(){return function(a){var c=this;b.extend(c,{onBuffer:function(b,c){a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()),a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()),a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b)},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabel("ns_st_pn"))<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabel("ns_st_pn"))),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=String(a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()),a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),y=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),z=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBufferStop:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().isCollectingSeekingTime()||(a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().getClip().setCollectingSeekingTime(!0)):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses()},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),A=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().setSeekingTimestamp(b):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=String(a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()),a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),B=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){var e=parseInt(d.ns_st_po);a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(c),a.getPlaylist().getClip().addPlaybackTime(c),a.getPlaylist().getClip().addElapsedTime(c),a.getPlaylist().getClip().addInterval(e);var f=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(f),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBuffer:function(b,c){a.getSSECore().isPauseOnBufferingEnabled()&&a.getSSECore().startPausedOnBufferingTimer(b,c),a.getPlaylist().getClip().incrementBufferCount(),a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getHeartbeat().pause(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)},onPause:function(b,c){var d=parseInt(c.ns_st_po);a.getHeartbeat().pause(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)}})}}(),C=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPause:function(b,c){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=String(a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()),a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),D=function(){return function(a){var c=this;b.extend(c,{onPause:function(b,c){a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses(),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))}})}}(),E=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){parseInt(d.ns_st_po);a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=String(a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()),a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),F=function(){return function(){function a(){f=new G(aa),b.getNamespace().comScore?(ba=b.getNamespace().comScore.exports,f.setAppCore(ba.c())):f.setAppCore(null),f.setKeepAlive(new q(f)),\nf.setHeartbeat(new p(f)),f.setEventManager(new o(f)),f.setStateMachine(new r),f.setPlaylist(new n),$={},m=new x(f),F=new y(f),H=new A(f),I=new B(f),J=new t(f),K=new v(f),L=new w(f),M=new u(f),N=new z(f),O=new C(f),P=new D(f),Q=new E(f),R=new s(f),S=!1,T=0,U=+new Date,V=!0,X=!1,Z=[]}function c(a){var b=f.getStateMachine().getCurrentState();if(b==j.IDLE||b==j.PLAYBACK_NOT_STARTED||b==j.BUFFERING_BEFORE_PLAYBACK||b==j.SEEKING_BEFORE_PLAYBACK){if(a==i.PLAY)return!0}else if(b==j.PLAYING){if(a==i.END||a==i.AD_SKIP||a==i.SEEK_START||a==i.PAUSE)return!0}else if(b==j.PAUSED||b==j.BUFFERING_DURING_PAUSE||b==j.SEEKING_DURING_PLAYBACK||b==j.SEEKING_DURING_BUFFERING||b==j.SEEKING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP||a==i.PLAY)return!0}else if(b==j.BUFFERING_DURING_PLAYBACK){if(a==i.PAUSE_ON_BUFFERING||a==i.END||a==i.AD_SKIP||a==i.SEEK_START||a==i.PAUSE||a==i.PLAY)return!0}else if(b==j.BUFFERING_DURING_SEEKING){if(a==i.END||a==i.AD_SKIP||a==i.PAUSE||a==i.PLAY)return!0}else if(b==j.PAUSED_DURING_BUFFERING&&(a==i.END||a==i.AD_SKIP||a==i.BUFFER_STOP||a==i.PLAY))return!0;return!1}function d(a,b,d){var e=f.getStateMachine().getCurrentState();a==i.AD_SKIP&&!d.hasOwnProperty("ns_st_ui")&&c(a)?d.ns_st_ui="skip":a==i.SEEK_START&&!d.hasOwnProperty("ns_st_ui")&&c(a)&&(d.ns_st_ui="seek"),e==j.IDLE?a==i.BUFFER?m.onBuffer(b,d):a==i.SEEK_START?m.onSeekStart(b,d):a==i.PLAY&&m.onPlay(b,d):e==j.PLAYBACK_NOT_STARTED?a==i.END||a==i.AD_SKIP?H.onEndOrAdSkip(b,d):a==i.SEEK_START?H.onSeekStart(b,d):a==i.PLAY?H.onPlay(b,d):a==i.BUFFER&&R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):e==j.PLAYING?a==i.END||a==i.AD_SKIP?I.onEndOrAdSkip(b,d):a==i.BUFFER?I.onBuffer(b,d):a==i.SEEK_START?I.onSeekStart(b,d):a==i.PAUSE&&I.onPause(b,d):e==j.PAUSED?a==i.END||a==i.AD_SKIP?F.onEndOrAdSkip(b,d):a==i.PLAY?F.onPlay(b,d):a==i.BUFFER?R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.SEEK_START&&R.onSeekStartWhenPausedOrBufferingDuringPause(b,d):e==j.BUFFERING_BEFORE_PLAYBACK?a==i.END||a==i.AD_SKIP?J.onEndOrAdSkip(b,d):a==i.BUFFER_STOP?J.onBufferStop(b,d):a==i.SEEK_START?J.onSeekStart(b,d):a==i.PAUSE?J.onPause(b,d):a==i.PLAY&&J.onPlay(b,d):e==j.BUFFERING_DURING_PLAYBACK?a==i.PAUSE_ON_BUFFERING?K.onPauseOnBuffering(b,d):a==i.BUFFER_STOP?K.onBufferStop(b,d):a==i.END||a==i.AD_SKIP?K.onEndOrAdSkip(b,d):a==i.SEEK_START?K.onSeekStart(b,d):a==i.PAUSE?K.onPause(b,d):a==i.PLAY&&K.onPlay(b,d):e==j.BUFFERING_DURING_SEEKING?a==i.END||a==i.AD_SKIP?L.onEndOrAdSkip(b,d):a==i.PAUSE?L.onPause(b,d):a==i.PLAY?L.onPlay(b,d):a==i.BUFFER_STOP&&R.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b,d):e==j.BUFFERING_DURING_PAUSE?a==i.END||a==i.AD_SKIP?M.onEndAndSkip(b,d):a==i.PAUSE?M.onPause(b,d):a==i.PLAY?M.onPlay(b,d):a==i.SEEK_START?R.onSeekStartWhenPausedOrBufferingDuringPause(b,d):a==i.BUFFER_STOP&&R.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b,d):e==j.SEEKING_BEFORE_PLAYBACK?a==i.END||a==i.AD_SKIP?O.onEndOrAdSkip(b,d):a==i.PAUSE?O.onPause(b,d):a==i.PLAY?O.onPlay(b,d):a==i.BUFFER&&R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):e==j.SEEKING_DURING_PLAYBACK?a==i.END||a==i.AD_SKIP?Q.onEndOrAdSkip(b,d):a==i.PLAY?Q.onPlay(b,d):a==i.BUFFER?R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.PAUSE&&R.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b,d):e==j.SEEKING_DURING_BUFFERING?a==i.PAUSE?P.onPause(b,d):a==i.BUFFER?R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.PLAY?R.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.END||a==i.AD_SKIP?R.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.BUFFER_STOP&&R.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):e==j.PAUSED_DURING_BUFFERING?a==i.END||a==i.AD_SKIP?N.onEndOrAdSkip(b,d):a==i.BUFFER_STOP?N.onBufferStop(b,d):a==i.SEEK_START?N.onSeekStart(b,d):a==i.PAUSE?N.onPause(b,d):a==i.PLAY&&N.onPlay(b,d):e==j.SEEKING_DURING_PAUSE&&(a==i.BUFFER?R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.PLAY?R.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.PAUSE?R.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b,d):a==i.END||a==i.AD_SKIP?R.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.BUFFER_STOP&&R.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b,d)),c(a)&&f.getPlaylist().setFirstEventSent(!0)}function e(a,c){for(var d,e=ea.encodeURIComponent||escape,f=[],g=l.LABELS_ORDER,h=a.split("?"),i=h[0],j=h[1],k=j.split("&"),m=0,n=k.length;n>m;m++){var o=k[m].split("="),p=unescape(o[0]),q=unescape(o[1]);p&&(c[p]=q)}for(var r={},s=0,t=g.length;t>s;s++){var u=g[s];if(c.hasOwnProperty(u)){var v=c[u];"undefined"!=typeof v&&null!=v&&(r[u]=!0,f.push(e(u)+"="+e(c[u])))}}for(var w in c)if(c.hasOwnProperty(w)){if(r[w])continue;var x=c[w];"undefined"!=typeof x&&null!=x&&f.push(e(w)+"="+e(c[w]))}d=i+"?"+f.join("&"),d=d+(d.indexOf("&c8=")<0?"&c8="+e(fa.title):"")+(d.indexOf("&c7=")<0?"&c7="+e(fa.URL):"")+(d.indexOf("&c9=")<0?"&c9="+e(fa.referrer):"");var y=b.browserAcceptsLargeURLs()?l.URL_LENGTH_LIMIT:l.RESTRICTED_URL_LENGTH_LIMIT;if(d.length>y&&d.indexOf("&")>0){var z=d.substr(0,y-8).lastIndexOf("&");d=(d.substring(0,z)+"&ns_cut="+e(d.substring(z+1))).substr(0,y)}return d}var f,m,F,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa=this,ba={},ca=l.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,da=l.THROTTLING_DELAY;b.extend(aa,{createLabels:function(a,c,d){var e={};if("undefined"!=typeof document){var g=document;e.c7=g.URL,e.c8=g.title,e.c9=g.referrer}return null!=c&&b.extend(e,c),e.ns_ts=null!=e.ns_ts?e.ns_ts:String(+new Date),e.ns_st_ev=null!=e.ns_st_ev?e.ns_st_ev:i.toString(a),e.ns_st_mp=null!=e.ns_st_mp?e.ns_st_mp:l.DEFAULT_PLAYERNAME,e.ns_st_mv=null!=e.ns_st_mv?e.ns_st_mv:l.STREAMSENSE_VERSION,e.ns_st_ub=null!=e.ns_st_ub?e.ns_st_ub:"0",e.ns_st_br=null!=e.ns_st_br?e.ns_st_br:"0",e.ns_st_pn=null!=e.ns_st_pn?e.ns_st_pn:"1",e.ns_st_tp=null!=e.ns_st_tp?e.ns_st_tp:"1",e.ns_st_it=null!=e.ns_st_it?e.ns_st_it:k.toString(k.SINGLE_CLIP),e.ns_st_sv=null!=e.ns_st_sv?e.ns_st_sv:l.STREAMSENSE_VERSION,e.ns_st_smv=null!=e.ns_st_smv?e.ns_st_smv:l.MODEL_VERSION,e.ns_type=null!=e.ns_type?e.ns_type:"hidden",e.ns_st_ec=null!=e.ns_st_ec?e.ns_st_ec:String(f.getEventManager().getEventCounter()),e.ns_st_po=null!=e.ns_st_po?e.ns_st_po:String(f.getPlaylist().getPlaylist().getClip().getExpectedPlaybackPosition(d)),e.ns_st_ki=null!=e.ns_st_ki?e.ns_st_ki:String(f.getKeepAlive().getInterval()),f.getPlaylist().createLabels(e),f.getPlaylist().getClip().createLabels(e),b.extend(e,aa.getLabels()),b.extend(e,c),{eventType:a,eventLabels:e}},newEvent:function(a,b,c,e){aa.stopDelayedTransitionTimer();var g=f.getStateMachine().getCurrentState(),h=f.getStateMachine().eventTypeToState(a);if(null!=h&&h!=g)if(!aa.isThrottlingEnabled()||g!=j.PLAYING&&g!=j.PAUSED||h!=j.PLAYING&&h!=j.PAUSED||e){c.ns_st_po||(f.getStateMachine().getCurrentState()==j.PLAYING&&a==i.BUFFER||f.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK&&a==i.BUFFER_STOP?c.ns_st_po=String(f.getPlaylist().getClip().getPlaybackTimeOffset()+(b-f.getPlaylist().getClip().getPlaybackTimestamp())):c.ns_st_po=String(f.getPlaylist().getClip().getExpectedPlaybackPosition(b))),d(a,b,c);var k=0;isNaN(f.getStateMachine().getLastStateChangeTimestamp())||(k=b-f.getStateMachine().getLastStateChangeTimestamp()),f.getStateMachine().newEvent(a,b);for(var l=0,m=Z.length;m>l;l++)Z[l](g,h,c,k)}else Y=f.getPlatformAPI().setTimeout(function(a,c,d){return function(){aa.newEvent(a,b,d,!0)}}(a,h,c),da)},newPseudoEvent:function(a,b,c){if(a!=i.LOAD&&a!=i.START||f.getStateMachine().getCurrentState()==j.IDLE){a!=i.ERROR||c.ns_st_er||(c.ns_st_er=h.UNKNOWN_VALUE),f.getStateMachine().getCurrentState()!=j.IDLE&&f.getStateMachine().getCurrentState()!=j.PLAYBACK_NOT_STARTED&&f.getStateMachine().getCurrentState()!=j.SEEKING_BEFORE_PLAYBACK&&f.getStateMachine().getCurrentState()!=j.BUFFERING_BEFORE_PLAYBACK&&(f.getPlaylist().getClip().addElapsedTime(b),f.getPlaylist().getClip().setElapsedTimestamp(b));var d,e,g,k=!0,l=!1;switch(a){case i.BIT_RATE:d="ns_st_br",e="ns_st_pbr",l=!0;break;case i.PLAYBACK_RATE:d="ns_st_rt",e="ns_st_prt",l=!0;break;case i.VOLUME:d="ns_st_vo",e="ns_st_pvo",l=!0;break;case i.WINDOW_STATE:d="ns_st_ws",e="ns_st_pws",l=!0;break;case i.AUDIO:d="ns_st_at",e="ns_st_pat",l=!1;break;case i.VIDEO:d="ns_st_vt",e="ns_st_pvt",l=!1;break;case i.SUBS:d="ns_st_tt",e="ns_st_ptt",l=!1;break;case i.CDN:d="ns_st_cdn",e="ns_st_pcdn",l=!1;break;default:k=!1}if(k&&c.hasOwnProperty(d)&&(l?(aa.getLabels().hasOwnProperty(d)&&(g=aa.getLabels()[d],c[e]=g),aa.setLabel(d,c[d])):(f.getPlaylist().getClip().getLabels().hasOwnProperty(d)&&(g=f.getPlaylist().getClip().getLabels()[d],c[e]=g),f.getPlaylist().getClip().setLabel(d,c[d]))),!k||f.getStateMachine().getCurrentState()==j.PLAYING||f.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK){c.ns_st_po||(c.ns_st_po=String(f.getPlaylist().getClip().getExpectedPlaybackPosition(b))),f.getStateMachine().getCurrentState()!=j.PLAYING&&f.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PLAYBACK||(f.getPlaylist().addPlaybackTime(b),f.getPlaylist().setPlaybackTimestamp(b),f.getPlaylist().getClip().addPlaybackTime(b),f.getPlaylist().getClip().setPlaybackTimestamp(b),f.getPlaylist().getClip().addInterval(parseInt(c.ns_st_po)),f.getPlaylist().getClip().setPlaybackStartPosition(parseInt(c.ns_st_po))),f.getStateMachine().getCurrentState()!=j.BUFFERING_BEFORE_PLAYBACK&&f.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PAUSE&&f.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PLAYBACK&&f.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_SEEKING||(f.getPlaylist().addBufferingTime(b),f.getPlaylist().setBufferingTimestamp(b),f.getPlaylist().getClip().addBufferingTime(b),f.getPlaylist().getClip().setBufferingTimestamp(b));var m=aa.createLabels(a,c,b);f.getEventManager().newEvent(m)}}},getState:function(){return f.getStateMachine().getCurrentState()},addListener:function(a){Z.push(a)},removeListener:function(a){Z.splice(b.indexOf(a,Z),1)},getLabel:function(a){return $[a]},getLabels:function(){return $},setLabel:function(a,b){null==b?delete $[a]:$[a]=b},setLabels:function(a){for(var b in a)a.hasOwnProperty(b)&&aa.setLabel(b,a[b])},getPlatformAPI:function(){return f.getAppCore()?f.getAppCore().getPlatformAPI():g},getExports:function(){return ba},isProperlyInitialized:function(){var a=f.getAppCore().getAppContext(),b=f.getAppCore().getSalt(),c=f.getAppCore().getPixelURL();return a&&c&&b},setImplementationType:function(a){f.getStateMachine().getCurrentState()!=j.IDLE||a!=k.SINGLE_CLIP&&a!=k.SEGMENTED&&a!=k.REDUCED||f.getPlaylist().setLabel("ns_st_it",k.toString(a))},setThrottlingDelay:function(a){da=a},getThrottlingDelay:function(){return da},isThrottlingEnabled:function(){return X},setThrottlingEnabled:function(a){X=a},isLoadingTimeSent:function(){return S},setLoadingTimeSent:function(a){S=a},getLoadTimeOffset:function(){return T},setLoadTimeOffset:function(a){T=a},getInitTimestamp:function(){return U},setPauseOnBufferingInterval:function(a){ca=a},getPauseOnBufferingInterval:function(){return ca},isPauseOnBufferingEnabled:function(){return V},setPauseOnBufferingEnabled:function(a){V=a},startPausedOnBufferingTimer:function(a,c){aa.stopPausedOnBufferingTimer(),W=aa.getPlatformAPI().setTimeout(function(){var d={},e=b.fixEventTime(d),f=parseInt(c.ns_st_po);d.ns_st_po=String(f+e-a),aa.newEvent(i.PAUSE_ON_BUFFERING,e,d)},ca)},stopPausedOnBufferingTimer:function(){null!=W&&(aa.getPlatformAPI().clearTimeout(W),W=null)},stopDelayedTransitionTimer:function(){Y&&(aa.getPlatformAPI().clearTimeout(Y),Y=null)},setPixelURL:function(a){if(null==a||0==a.length)return null;var b=decodeURIComponent||unescape,c=a.indexOf("?");if(c>=0){if(c<a.length-1){for(var d=a.substring(c+1).split("&"),e=0,f=d.length;f>e;e++){var g=d[e],h=g.split("=");2==h.length?aa.setLabel(h[0],b(h[1])):1==h.length&&aa.setLabel(l.PAGE_NAME_LABEL,b(h[0]))}a=a.substring(0,c+1)}}else a+="?";return _=a},getPixelURL:function(){return _?_:"undefined"!=typeof ns_p&&"string"==typeof ns_p.src?_=ns_p.src.replace(/&amp;/,"&").replace(/&ns__t=\\d+/,""):"string"==typeof ns_pixelUrl?_=ns_pixelUrl.replace(/&amp;/,"&").replace(/&ns__t=\\d+/,""):null},getSseSM:function(){return f},resetPlaylist:function(a){var b=f.getPlaylist();f.setPlaylist(new n),n.resetPlaylist(b,f.getPlaylist(),a)},resetHeartbeat:function(){f.getHeartbeat().pause(),f.setHeartbeat(new p(f))},resetKeepAlive:function(){f.getKeepAlive().pause(),f.setKeepAlive(new q(f))}});var ea,fa;b.isBrowser()?(ea=window,fa=document):(ea={},fa={location:{href:""},title:"",URL:"",referrer:"",cookie:""}),b.extend(this,{prepareUrl:e}),a()}}(),G=function(){return function(a){var c,d,e,f,g,h,i=this;b.extend(i,{getAppCore:function(){return c},getSSECore:function(){return a},getEventManager:function(){return d},getStateMachine:function(){return e},getHeartbeat:function(){return f},getKeepAlive:function(){return g},getPlaylist:function(){return h},setAppCore:function(a){c=a},setKeepAlive:function(a){g=a},setHeartbeat:function(a){f=a},setEventManager:function(a){d=a},setStateMachine:function(a){e=a},setPlaylist:function(a){h=a}})}}(),H=function(){return function(a,c){function d(){h=new F,g=!0,a&&k.setLabels(a),c&&k.setPixelURL(c)}function e(a,b){k.notify(i.CUSTOM,a,b)}function f(){g&&h.getSseSM().getStateMachine().getCurrentState()!=j.IDLE&&k.end()}var g,h,k=this,m=l.STANDARD_METADATA_LABELS;b.extend(this,{isProperlyInitialized:function(){return h.isProperlyInitialized()},reset:function(a){var b=h;b.getSseSM().getKeepAlive().pause(),b.getSseSM().getHeartbeat().pause(),h=new F,n.resetPlaylist(b.getSseSM().getPlaylist(),h.getSseSM().getPlaylist(),a)},setPauseOnBufferingInterval:function(a){h.setPauseOnBufferingInterval(a)},getPauseOnBufferingInterval:function(){return h.getPauseOnBufferingInterval()},setKeepAliveInterval:function(a){h.getSseSM().getKeepAlive().setInterval(a)},getKeepAliveInterval:function(){return h.getSseSM().getKeepAlive().getInterval()},setHeartbeatIntervals:function(a){h.getSseSM().getHeartbeat().setIntervals(a)},play:function(a,b){k.notify(i.PLAY,a,b)},pause:function(a,b){k.notify(i.PAUSE,a,b)},end:function(a,b){k.notify(i.END,a,b)},bufferStart:function(a,b){k.notify(i.BUFFER,a,b)},bufferStop:function(a,b){k.notify(i.BUFFER_STOP,a,b)},load:function(a,b){k.notify(i.LOAD,a,b)},start:function(a,b){k.notify(i.START,a,b)},seekStart:function(a,b){k.notify(i.SEEK_START,a,b)},skipAd:function(a,b){k.notify(i.AD_SKIP,a,b)},callToAction:function(a,b){k.notify(i.CTA,a,b)},error:function(a,b){k.notify(i.ERROR,a,b)},transferPlayback:function(a,b){k.notify(i.TRANSFER,a,b)},drmFail:function(a,b){k.notify(i.DRM_FAILED,a,b)},drmApprove:function(a,b){k.notify(i.DRM_APPROVED,a,b)},drmDeny:function(a,b){k.notify(i.DRM_DENIED,a,b)},changeBitrate:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_br=String(a),k.notify(i.BIT_RATE,d,b)}},changePlaybackRate:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_rt=String(a),k.notify(i.PLAYBACK_RATE,d,b)}},changeVolume:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_vo=String(a),k.notify(i.VOLUME,d,b)}},changeWindowState:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_ws=String(a),k.notify(i.WINDOW_STATE,d,b)}},changeAudio:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_at=String(a),k.notify(i.AUDIO,d,b)}},changeVideo:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_vt=String(a),k.notify(i.VIDEO,d,b)}},changeSubtitle:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_tt=String(a),k.notify(i.SUBS,d,b)}},changeCDN:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_cdn=String(a),k.notify(i.CDN,d,b)}},notify:function(a){var c,d;if(c="object"==typeof arguments[1]?arguments[1]:"object"==typeof arguments[2]?arguments[2]:{},d="number"==typeof arguments[1]?arguments[1]:"number"==typeof arguments[2]?arguments[2]:NaN,i.toString(a)){c=b.jsonObjectToStringDictionary(c);var e=b.fixEventTime(c);c.ns_st_po||isNaN(d)||(c.ns_st_po=b.getInteger(d,0).toString()),c.ns_st_po&&h.getSseSM().getPlaylist().getClip().setPlaybackTimeOffset(parseInt(c.ns_st_po)),a==i.PLAY||a==i.PAUSE||a==i.BUFFER||a==i.END||a==i.SEEK_START||a==i.AD_SKIP||a==i.BUFFER_STOP?h.newEvent(a,e,c):h.newPseudoEvent(a,e,c)}},getLabels:function(){return h.getLabels()},getState:function(){return h.getSseSM().getStateMachine().getCurrentState()},setLabels:function(a){h.setLabels(a)},getLabel:function(a){return h.getLabel(a)},setLabel:function(a,b){h.setLabel(a,b)},getLoadTimeOffset:function(){return h.getLoadTimeOffset()},setLoadTimeOffset:function(a){h.setLoadTimeOffset(a)},setPixelURL:function(a){return h.setPixelURL(a)},getPixelURL:function(){return h.getSseSM().getSSECore().getPixelURL()},setImplementationType:function(a){h.setImplementationType(a)},isPauseOnBufferingEnabled:function(){return h.isPauseOnBufferingEnabled()},setPauseOnBufferingEnabled:function(a){h.setPauseOnBufferingEnabled(a)},isThrottlingEnabled:function(){return h.isThrottlingEnabled()},setThrottlingEnabled:function(a){h.setThrottlingEnabled(a)},setThrottlingDelay:function(a){h.setThrottlingDelay(a)},getThrottlingDelay:function(){return h.getThrottlingDelay()},setPlaybackIntervalMergeTolerance:function(a){h.getSseSM().getPlaylist().getClip().setPlaybackIntervalMergeTolerance(a)},getPlaybackIntervalMergeTolerance:function(){return h.getSseSM().getPlaylist().getClip().getPlaybackIntervalMergeTolerance()},setClip:function(a,c,d){if(void 0===d&&(d=!0),a=b.jsonObjectToStringDictionary(a),d&&h.getSseSM().getStateMachine().getCurrentState()!==j.IDLE&&k.end(),h.getSseSM().getStateMachine().getCurrentState()==j.IDLE){var e="",f=0;if(null!=a.ns_st_cn)e=String(a.ns_st_cn);else for(var g=0;g<m.length;g++)a[m[g]]&&(e+=m[g]+":"+a[m[g]]+";");var i=h.getSseSM().getPlaylist(),l=i.getClip();l.isClipStarted()?(i.hashExists(l.getHash())||(i.storeHash(l.getHash()),i.storeClipNumber(l.getHash(),l.getClipNumber())),i.storeClipPlaybackCounters(),f=i.hashExists(e)?i.getClipNumber(e):b.exists(a.ns_st_cn)?parseInt(a.ns_st_cn):i.getMaxClipNumber()+1):f=i.hashExists(e)?i.getClipNumber(e):l.getClipNumber(),i.resetClip(),l=i.getClip(),l.setHash(e),l.setClipNumber(f),l.setLabels(a);var n=i.getStoredClipRegisters(e);return n&&(l.setClipStarted(!0),l.setSegmentPlaybackCounter(n.segmentPlaybackCounter),l.setClipLoadCounter(n.clipLoadCounter),l.setAssetPlaybackCounter(n.assetPlaybackCounter),l.setLowestPartNumberPlayed(n.lowestPartNumberPlayed),l.setSeeking(n.seeking),l.setSeekingTimeBeforeEnd(n.seekingTimeBeforeEnd),l.setSeekStartPosition(n.seekingStartPosition),l.setClipPlaybackIntervals(n.clipPlaybackIntervals),l.setUniquePlaybackInterval(n.uniquePlaybackInterval),l.setLongestPlaybackInterval(n.longestPlaybackInterval),l.setVideoTrack(n.videoTrack),l.setAudioTrack(n.audioTrack),l.setSubtitleTrack(n.subtitleTrack),l.setCDN(n.cdn),l.setPreviousUniquePlaybackInterval(n.uniquePlaybackInterval),l.setPreviousEventIndependentUniquePlaybackInterval(n.uniquePlaybackInterval),l.setPreviousLongestPlaybackInterval(n.longestPlaybackInterval)),l.incrementClipLoadCounter(),l.isClipStarted()&&c&&(i.incrementPlayCounter(),i.incrementPlaybackCounter()),!0}return!1},setPlaylist:function(a,c){return void 0===c&&(c=!0),a=b.jsonObjectToStringDictionary(a),c&&h.getSseSM().getStateMachine().getCurrentState()!==j.IDLE&&k.end(),h.getSseSM().getStateMachine().getCurrentState()==j.IDLE?(h.getSseSM().getPlaylist().isPlaylistStarted()&&h.resetPlaylist(),h.getSseSM().getPlaylist().setLabels(a),!0):!1},importState:function(){},exportState:function(){return{}},getVersion:function(){return l.STREAMSENSE_VERSION},addListener:function(a){h.addListener(a)},removeListener:function(a){h.removeListener(a)},getClip:function(){return console&&console.warn&&console.warn("getClip() is deprecated. Use getPlaylist().getClip() instead."),h.getSseSM().getPlaylist().getClip()},getPlaylist:function(){return h.getSseSM().getPlaylist()},setHttpGet:function(a){"function"==typeof a&&(h.getPlatformAPI().httpGet=a)},setHttpPost:function(a){"function"==typeof a&&(h.getPlatformAPI().httpPost=a)},setExitEndEventEnabled:function(a){g=a},isExitEndEventEnabled:function(){return g},getPlatformAPI:function(){return h.getPlatformAPI()}}),b.extend(this,{customNotify:e,viewNotify:function(a,b){a=a||k.getPixelURL(),a&&viewNotify(a,b)}}),b.isBrowser()&&(window.addEventListener?(window.addEventListener("beforeunload",f),window.addEventListener("unload",f)):window.attachEvent&&(window.attachEvent("onbeforeunload",f),window.attachEvent("onunload",f))),d()}}();return function(c){function d(a,b){return x[z]||f(a,b)}function e(){z=-1;for(var b=0;y>=b;b++)if(x.hasOwnProperty(String(b))){z=b;break}return a.StreamSense.activeIndex=z,z}function f(b,c){return b=b||null,c=c||null,b&&"object"==typeof b&&(c=b,b=null),x[++y]=new a.StreamSense(c,b),e(),x[y]}function g(){var b=!1,c=z;if("number"==typeof arguments[0]&&isFinite(arguments[0]))c=arguments[0];else if(arguments[0]instanceof a.StreamSense)for(var d in x)if(x.hasOwnProperty(d)&&x[d]===arguments[0]){c=d;break}return x.hasOwnProperty(String(c))&&(b=x[c],delete x[c],b.reset(),e()),b}function h(a){return a=a||{},d().setPlaylist(a),d().getPlaylist()}function i(a,b,c){return a=a||{},"number"==typeof b&&(a.ns_st_cn=String(b)),d().setClip(a,c),d().getClip()}function j(a,b,c){return"undefined"==typeof a?!1:(c=c||null,b=b||{},d().notify(a,b,c))}function k(a){"undefined"!=typeof a&&d().setLabels(a)}function l(){return d().getLabels()}function m(a){"undefined"!=typeof a&&d().getPlaylist().setLabels(a)}function n(){return d().getPlaylist().getLabels()}function o(a){"undefined"!=typeof a&&d().getClip().setLabels(a)}function p(){return d().getClip().getLabels()}function q(a){return d().reset(a||{})}function r(a){return d().getPlaylist().reset(a||{})}function s(a){return d().getClip().reset(a||{})}function t(a){return a=a||{},d().viewNotify(null,a)}function u(a,b){return arguments.length>2&&(a=arguments[1],b=arguments[2]),a=a||{},"number"==typeof b&&(a.ns_st_po=String(b)),d().customNotify(a,b)}function v(){return d().exportState()}function w(a){d().importState(a)}var x={},y=-1,z=-1;b.extend(c,{activeIndex:z,newInstance:f,"new":f,destroyInstance:g,destroy:g,newPlaylist:h,newClip:i,notify:j,setLabels:k,getLabels:l,setPlaylistLabels:m,getPlaylistLabels:n,setClipLabels:o,getClipLabels:p,resetInstance:q,resetPlaylist:r,resetClip:s,viewEvent:t,customEvent:u,exportState:v,importState:w})}(H),H.PlayerEvents=i,H.InternalStates=j,H.ImplementationType=k,H}(),a.StreamingTag=a.StreamingTag||function(){var c=a.StreamSense,d=(a.StreamSense.PlayerEvents,a.StreamSense.InternalStates||null),e=a.StreamSense.ImplementationType||null,f=null!=a.StreamSense.InternalStates&&null!=a.StreamSense.ImplementationType;return function(){var a={LongFormOnDemand:"12",ShortFormOnDemand:"11",Live:"13",UserGeneratedLongFormOnDemand:"22",UserGeneratedShortFormOnDemand:"21",UserGeneratedLive:"23",Bumper:"99",Other:"00"},g={LinearOnDemandPreRoll:"11",LinearOnDemandMidRoll:"12",LinearOnDemandPostRoll:"13",LinearLive:"21",Other:"00"},h=function(a){function g(){if(f)if(b.getNamespace().comScore)q=new c,q.setImplementationType(e.REDUCED);else if(b.exists(a))if(r=b.isTrue(a.debug),b.exists(a.customerC2)&&a.customerC2.length>0){var d=a.secure?"https://sb":"http"+("s"==document.location.href.charAt(4)?"s://sb":"://b");q=new c,q.setPixelURL(d+".scorecardresearch.com/p?c1=2"),q.setLabel("c2",a.customerC2),q.setImplementationType(e.REDUCED)}else r&&console&&console.log("Warning: customerC2 is not provided (or incorrect) in the StreamingTag configuration.")}function h(a){b.exists(a)||(a={});for(var c in t)t.hasOwnProperty(c)&&!b.exists(a[t[c]])&&("ns_st_ci"==t[c]?a.ns_st_ci="0":a[t[c]]="*null");return a}function i(a){for(var b in t)if(t.hasOwnProperty(b)&&!j(t[b],o,a))return!1;return!0}function j(a,c,d){if(b.exists(a)&&b.exists(c)&&b.exists(d)){var e=c[a],f=d[a];return b.exists(e)&&b.exists(f)&&e===f}return!1}function k(a){n++;var c={ns_st_cn:String(n),ns_st_pn:"1",ns_st_tp:"0"};b.extend(c,a),q.setClip(c),o=a,q.play()}function l(a){n++,a=h(a);var c={ns_st_cn:String(n),ns_st_pn:"1",ns_st_tp:"1",ns_st_ad:"1"};b.extend(c,a),q.setClip(c),q.play(),p=!1}function m(a,b){a=h(a),u==s.None&&(u=b),p&&u==b&&i(a)?(q.getClip().setLabels(a),q.getState()!=d.PLAYING&&q.play()):k(a),p=!0,u=b}var n=0,o=null,p=!1,q=null,r=!1,s={None:0,AudioContent:1,VideoContent:2},t=["ns_st_ci","c3","c4","c6","ns_st_st","ns_st_pu","ns_st_pr","ns_st_ep","ns_st_sn","ns_st_en","ns_st_ct"],u=s.None;b.extend(this,{playAdvertisement:function(){if(q){r&&console&&console.warn("Calling deprecated function \'playAdvertisement\'. Please call \'playVideoAdvertisement\' or \'playAudioAdvertisement\' functions instead.");var a={ns_st_ct:"va"};l(a)}},playVideoAdvertisement:function(a,c){if(q){var d={ns_st_ct:"va"};c?d.ns_st_ct="va"+c:r&&console&&console.warn("Calling \'playVideoAdvertisement\' without specifying the media type as a second parameter."),a&&b.extend(d,a),l(d)}},playAudioAdvertisement:function(a,c){if(q){var d={ns_st_ct:"aa"};c?d.ns_st_ct="aa"+c:r&&console&&console.warn("Calling \'playAudioAdvertisement\' without specifying the media type as a second parameter."),a&&b.extend(d,a),l(d)}},playContentPart:function(a){if(q){r&&console&&console.warn("Calling deprecated function \'playContentPart\'. Please call \'playVideoContentPart\' or \'playAudioContentPart\' functions instead.");var c={ns_st_ct:"vc"};a&&b.extend(c,a),m(c,s.VideoContent)}},playVideoContentPart:function(a,c){if(q){var d={ns_st_ct:"vc"};c?d.ns_st_ct="vc"+c:r&&console&&console.warn("Calling \'playVideoContentPart\' without specifying the media type as a second parameter."),a&&b.extend(d,a),m(d,s.VideoContent)}},playAudioContentPart:function(a,c){if(q){var d={ns_st_ct:"ac"};c?d.ns_st_ct="ac"+c:r&&console&&console.warn("Calling \'playAudioContentPart\' without specifying the media type as a second parameter."),a&&b.extend(d,a),m(d,s.AudioContent)}},stop:function(){q&&q.pause()}}),g()};return function(a){}(h),h.ContentType=a,h.AdType=g,h}()}(),a});\n\n',
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n(function () {\n    var streamingTag = null;\n    var previousVideoStopped = true;\n    var trackedAd = false;\n    $t('on', 'ndp_videoEvent', function (e, data) {\n        var eventData = data && data.videoData || {};\n        var eventDataRaw = eventData.raw || {};\n        var topLevelDomain = s.topLevelDomain;\n        var brandSettings = {\n            'today.com': {\n                st: 'Today',\n                pu: 'Today',\n                c4: 'today',\n                c6Default: '*null'\n            },\n            'msnbc.com': {\n                st: 'MSNBC',\n                pu: 'MSNBC',\n                c4: 'msnbc',\n                c6Default: 'msnbc'\n            },\n            'nbcnews.com': {\n                st: 'NBC News',\n                pu: 'NBC New',\n                c4: 'nbcnews',\n                c6Default: 'nbcnews'\n            },\n            'telemundo.com': {\n                st: 'Telemundo',\n                pu: 'Telemundo',\n                c3: 'Telemundo',\n                c6Default: '*null'\n            }\n        }\n        var siteBrand = brandSettings[topLevelDomain] || brandSettings['nbcnews.com'];\n\n        switch (data.eventType) {\n            case 'NDP_PlaybackEvent_LOADED':\n                //set new streaming tag for each instance, stop previous if needed\n                if (!previousVideoStopped) {\n                    streamingTag.stop();\n                }\n                streamingTag = new ns_.StreamingTag({ customerC2: '6035083' });\n\n                previousVideoStopped = false;\n                trackedAd = false;\n                break;\n\n            case 'NDP_PlaybackEvent_START':\n            case 'NDP_PlaybackEvent_PLAY':\n                var showNamesC6 = {\n                    //nbcnews shows\n                    'Dateline': 'dateline',\n                    'Dateline Digital': 'dateline',\n                    'Meet the Press': 'meetthepress',\n                    'MTP Daily': 'meetthepress',\n                    //msnbc shows\n                    'Nightly News': 'nightlynews',\n                    'News Nation': 'newsnation', //check\n                    'Morning Joe': 'morningjoe',//check\n                    'MSNBC': 'msnbc',//check\n                    'Rachel Maddow': 'rachelmaddow',\n                    'Andrea Mitchell': 'andreamitchell',//check\n                    'All In': 'allin',//check\n                    'Way Too Early': 'waytooearly',//check\n                    'Hardball': 'hardball',//check\n                    'The Ed Show': 'theedshow',//check\n                    'The Last Word': 'thelastword',//check\n                    'Politics Nation': 'politicsnation',//check\n                    'The Reid Out': 'reidout',//check\n                    'Deadline: White House': 'deadlinewhitehouse',//check\n                    'The Beat': 'thebeat',//check\n                    '11th Hour': '11thhour'//check\n                };\n\n                var taxonomyShow = $t(e.type + '.videoData.raw.taxonomy.primarySection.name')\n                if(topLevelDomain !== 'telemundo.com'){\n                    //for now only use taxonomy for telemundo.\n                    taxonomyShow= ''\n                }\n                var videoSource = eventDataRaw.source && eventDataRaw.source.name;\n                var metadata = {\n                    ns_st_ci: eventDataRaw.guid || '0', // Content Asset ID\n                    ns_st_cl: data.videoData.totalLength ? data.videoData.totalLength : \"0\", // Clip Length\n                    ns_st_st: siteBrand.st,\n                    ns_st_pu: siteBrand.pu, // Publisher Brand Name\n                    ns_st_pr: taxonomyShow || videoSource || '*null', // Program Title\n                    ns_st_ep: eventDataRaw.headline && eventDataRaw.headline.primary || '*null', // Episode Title\n                    ns_st_sn: \"*null\", // Episode Season Number\n                    ns_st_en: \"*null\", // Episode Number\n                    ns_st_ge: \"News\", // Content Genre\n                    ns_st_ti: \"*null\", // TMS ID (unavailable)\n                    ns_st_ia: \"0\", // Identical Ad Assignment Flag\n                    ns_st_ce: \"0\", // Complete Episode Flag (TODO 1 for msnbc authenticated video)\n                    ns_st_ddt: \"*null\", // Digital Air Date (not setup) \"2014-10-03\"\n                    ns_st_tdt: \"*null\", // TV Air Date (not setup) \"2014-10-03\"\n                    c3: siteBrand.c3 || \"*null\", // Dictionary Classification Value\n                    c4: siteBrand.c4 || \"*null\", // Unused Dictionary Classification Value\n                    c6: showNamesC6[taxonomyShow || videoSource] || taxonomyShow || siteBrand.c6Default // Unused Dictionary Classification Value\n                }\n                streamingTag && streamingTag.playVideoContentPart(metadata, ns_.StreamingTag.ContentType.ShortFormOnDemand);\n                break;\n            case 'NDP_AdEvent_PROGRESS':\n                //adstart is not used anymore, has to be ad progress\n                if (!trackedAd) {\n                    streamingTag && streamingTag.playVideoAdvertisement({ ns_st_cl: eventData.totalLength || 0 }, ns_.StreamingTag.ContentType.ShortFormOnDemand);\n                    trackedAd = true;\n                }\n                break;\n            case 'NDP_AdEvent_COMPLETE':\n                trackedAd = false;\n                streamingTag && streamingTag.stop();\n                break;\n            case 'NDP_PlaybackEvent_COMPLETE':\n            case 'NDP_PlaybackEvent_PAUSE':\n                streamingTag && streamingTag.stop();\n                previousVideoStopped = true;\n                break;\n        }\n    });\n})();\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLb1544bd32c464a11abfe066ead6aceaf',
            name: 'BI Tools',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 40 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    var PREFIX = 'BI_';\n\n    window.BI = window.BI || {}\n\n    function returnPairs(modName) {\n        // if no module is given, we are going to return all BI cookies\n        var prefix = modName ? PREFIX + modName : PREFIX;\n        var pairs = document.cookie.split('; ').filter(function (key) { return key.indexOf(prefix) == 0 });\n        var result = {};\n        pairs.forEach(function (pair) {\n            var keyValueArray = pair.split('=');\n            // remove the prefix on the cookie\n            keyValueArray[0] = keyValueArray[0].replace(prefix + '_', '')\n            result[keyValueArray[0]] = keyValueArray[1];\n        })\n        return result;\n    }\n\n    window.BI.cookie = {\n        // should only get one key/value pair at a time\n        write: function (modName, key, data, expiration) {\n            if (data) {\n                modName = modName ? modName : 'GLOBAL';\n                var prefixedKey = PREFIX + modName + '_' + key;\n                document.cookie = prefixedKey.trim() + '=' + data + '; expires=' + expiration + '; path=/';\n            }\n        },\n        read: function (modName, key) {\n            // if we only get the module name, return all cookies in that module\n            if (modName && !key) {\n                return returnPairs(modName);\n            }\n            // if we get both the module and cookie name, return that specific cookie\n            else if (modName && key) {\n                var prefixedKey = PREFIX + modName + '_' + key;\n                var b = document.cookie.match('(^|[^;]+)\\\\s*' + prefixedKey + '\\\\s*=\\\\s*([^;]+)');\n                return b ? b.pop() : '';\n            }\n            // return all BI cookies if nothing is given\n            else {\n                return returnPairs();\n            }\n        }\n    }\n\n    window.BI.userInfo = {\n        save: function (userInfo, expiration) {\n            for (var key in userInfo) {\n                // default is a 30min expiration\n                var dt = new Date();\n                dt.setMinutes(dt.getMinutes() + 30);\n                // UI is the modName to pass to the cookie writer\n                if (expiration) window.BI.cookie.write('UI', key, userInfo[key], expiration)\n                // if no expiration is given, use the default 30min\n                else window.BI.cookie.write('UI', key, userInfo[key], dt.toGMTString());\n            }\n        },\n        get: function (key) {\n            // we only want to get the UI module cookies\n            return window.BI.cookie.read('UI', key);\n        }\n    }\n})()",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "//BI console\n(function (window) {\n    var hasConsole = function () {\n        return window.console && window.console.log;\n    };\n    var prefix = 'BIConsole.';\n\n    var cleanJSON = function(data){\n        var resultJSON = {};\n        try {\n            resultJSON = JSON.parse(JSON.stringify(data));\n        }catch(e){\n            resultJSON = data;\n        }\n        return resultJSON;\n    };\n    window.BI = window.BI || {};\n    window.BI.console = {\n        list: function (searchKey) {\n            searchKey = searchKey || '';\n            var result = {};\n            for (var key in localStorage) {\n                if (key.indexOf(prefix) != -1 && key.split(prefix)[1].indexOf(searchKey) != -1) {\n                    result[key.replace(prefix,'')] = localStorage.getItem(key);\n                }\n            }\n            return result;\n        },\n        off: function (key) {\n            var keys = this.list(key);\n            var result = {};\n            for (key in keys) {\n                localStorage.setItem(prefix + key, false);\n                result[key] = false;\n            }\n            return result;\n        },\n        on: function (key) {\n            var keys = this.list(key);\n            var result = {};\n            for (key in keys) {\n                localStorage.setItem(prefix + key, true);\n                result[key] = true;\n            }\n            return result;\n        },\n        log: function (event, data, eventSource) {\n            eventSource = eventSource || 'gen';\n            var logKey = window.localStorage.getItem(prefix + eventSource);\n            if (hasConsole && logKey && logKey.toLowerCase() === 'true') {\n                console.log('%c BI:%s %c%s%c @ %s : %O', 'font-weight:normal', eventSource, 'font-weight:bold', event, 'font-weight:normal', (new Date()).toISOString().split('T')[1], cleanJSON(data));\n            } else {\n                window.localStorage.setItem(prefix + eventSource, false);\n            }\n        }\n    };\n})(window);",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n    window.BI = window.BI || {};\n    window.BI.brand = (function () {\n        var settings = {}\n        var brandSettings = function (product) {\n            //add default setting\n            if (settings[product] && settings[product][topLevelDomain]) {\n                return settings[product][topLevelDomain];\n            } else {\n                return false\n            }\n        }\n        brandSettings.setProduct = function (product, data) {\n            settings[product] = data;\n        }\n        brandSettings.getProduct = function (product) {\n            if (product) {\n                return settings[product];\n            } else {\n                return settings;\n            }\n        }\n        brandSettings.getDomain = function (domain) {\n            var domainValues = {}\n            if (!domain) {\n                domain = topLevelDomain;\n            }\n            var product;\n            for (product in settings) {\n                if (settings[product][domain]) {\n                    domainValues[product] = settings[product][domain];\n                } else {\n                    domainValues[product] = 'no settings';\n                }\n            }\n            return domainValues;\n        }\n        return brandSettings;\n    })();\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLb7a5fd079baf4f7f892fca75866b6a4c',
            name: 'Chartbeat',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['telemundo.com', 'today.com', 'nbcnews.com', 'msnbc.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: '\\/embedded-video\\/', valueIsRegex: !0 },
                    { value: '\\/playmaker\\/embed', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    var topLevelDomain = s.topLevelDomain || 'nbcnews.com';\n    var allBrandSettings = {\n        'telemundo.com': {\n            id: '43949',\n            domains: 'telemundo.com'\n        },\n        'today.com': {\n            id: '57481',\n            domains: 'today.com'\n        },\n        'nbcnews.com': {\n            id: '57481',\n            domain: 'nbcnews.com'\n        },\n        'msnbc.com': {\n            id: '57481',\n            domain: 'msnbc.com'\n        }\n    }\n    var brandSettings = allBrandSettings[topLevelDomain];\n\n    /** CONFIGURATION START **/\n    var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});\n    _sf_async_config.uid = brandSettings.id;\n    _sf_async_config.domain = brandSettings.domain;\n    _sf_async_config.flickerControl = false;\n    _sf_async_config.useCanonical = true;\n    _sf_async_config.useCanonicalDomain = true;\n    _sf_async_config.sections = (function () {\n        var sections = []\n        sections.push($t('jsonLd.Dataset.0.section'))\n        sections.push($t('jsonLd.Dataset.0.vertical', '') + ' all')\n        return sections.filter(Boolean).join(',')\n    })(); //$t('jsonLd.Dataset.0.section') + \",Noticias All\";\n    _sf_async_config.authors = (function () {\n        var authorArray = $t('jsonLd.NewsArticle.0.author', [])\n        if (!Array.isArray(authorArray)) {\n            authorArray = [authorArray];\n        }\n        return authorArray.map(function (auth) { return auth.name }).join(', ');\n    })();\n    /** CONFIGURATION END **/\n\n    function loadChartbeat(path) {\n        var e = document.createElement('script');\n        var n = document.getElementsByTagName('script')[0];\n        e.type = 'text/javascript';\n        e.async = true;\n        e.src = path;\n        n.parentNode.insertBefore(e, n);\n    }\n    loadChartbeat('//static.chartbeat.com/js/chartbeat.js');\n    loadChartbeat('//static.chartbeat.com/js/chartbeat_mab.js');\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLb45623c47ead4391bd763f313d47d894',
            name: 'BizDev - Taboola Pixel',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['today.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n(function () {\n    var today_id = 1182132\n\n    window._tfa = window._tfa || [];\n    window._tfa.push({ notify: 'event', name: 'page_view', id: today_id });\n \n    !function (t, f, a, x) {\n        if (!document.getElementById(x)) {\n            t.async = 1; t.src = a; t.id = x; f.parentNode.insertBefore(t, f);\n        }\n    }(document.createElement('script'), document.getElementsByTagName('script')[0], '//cdn.taboola.com/libtrc/unip/1182132/tfa.js', 'tb_tfa_script');\n\n    $t('on', 'mbt_ecommerce_shop_button', function () {\n        _tfa.push({ notify: 'event', name: 'ShopNowButtonClickers', id: today_id });\n    });\n})()\n\n\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLb7ccf82000c347d78967aa9da3067d76',
            name: 'UniVideo - Streamsense',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 60 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '\n  //the streamsense library has to be here when video is converted to all univideo\n\n',
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    var logEvent = (function () {\n        var logGroup = 'uni_streamsense';\n        var logger = function (event, data) {\n            if (window.BI && window.BI.console) {\n                window.BI.console.log(event, data, logGroup);\n            }\n        }\n        logger.logGroup = logGroup\n        return logger;\n    })();\n    var uniEvent = window.uniVideo && window.uniVideo.event || {};\n    var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n    var sites = {\n        'today.com': {\n            st: 'Today',\n            c6Default: '*null',\n            c4: 'today'\n        },\n        'nbcnews.com': {\n            st: 'NBC News',\n            c6Default: 'nbcnews',\n            c4: 'nbcnews'\n        },\n        'msnbc.com': {\n            st: 'MSNBC',\n            c6Default: 'msnbc',\n            c4: 'msnbc'\n        }\n    };\n\n    var streamingTag = null;\n    var previousVideoStopped = true;\n    var metadata = {};\n    $t('on', 'uni_videoEvent', function (e, data) {\n        if (ns_ && ns_.StreamingTag && ns_.StreamingTag.ContentType) {\n            var videoData = data && data.videoData || {};\n            var videoState = data && data.videoState || {};\n            var siteBrand = sites[topLevelDomain] || {};\n            var streamContentType = (function () {\n                if (videoData.streamType === 'linear') {\n                    return ns_.StreamingTag.ContentType.Live;\n                } else {\n                    return ns_.StreamingTag.ContentType.ShortFormOnDemand;\n                }\n            })()\n            var videoLength = (function () {\n                if (videoData.streamType === 'linear') {\n                    return -1;\n                } else {\n                    return videoData.duration;\n                }\n            })()\n            switch (data.eventType) {\n                case uniEvent.VIDEO_LOADED:\n                    //set new streaming tag for each instance, stop previous if needed\n                    if (!previousVideoStopped) {\n                        streamingTag.stop();\n                        logEvent('stop previous', metadata);\n                    }\n                    streamingTag = new ns_.StreamingTag({ customerC2: '6035083' });\n                    logEvent('new streamingTag');\n                    metadata = {};\n                    previousVideoStopped = false;\n                    break;\n\n                case uniEvent.PLAY:\n                    if (!videoState.inAd) {\n                        var showNamesC6 = {\n                            //nbcnews shows\n                            'Dateline': 'dateline',\n                            'Dateline Digital': 'dateline',\n                            'Meet the Press': 'meetthepress',\n                            'MTP Daily': 'meetthepress',\n                            'NBC News NOW': 'nbcnewsnow',\n                            'Nightly News': 'nightlynews',\n                            //msnbc shows\n                            'News Nation': 'newsnation', //check\n                            'Morning Joe': 'morningjoe',//check\n                            'MSNBC': 'msnbc',//check\n                            'Rachel Maddow': 'rachelmaddow',\n                            'Andrea Mitchell': 'andreamitchell',//check\n                            'All In': 'allin',//check\n                            'Way Too Early': 'waytooearly',//check\n                            'Hardball': 'hardball',//check\n                            'The Ed Show': 'theedshow',//check\n                            'The Last Word': 'thelastword',//check\n                            'Politics Nation': 'politicsnation'//check\n                        };\n\n                        metadata = {\n                            ns_st_ci: videoData.guid || '0', // Content Asset ID\n                            ns_st_cl: videoLength, // Clip Length\n                            ns_st_st: siteBrand.st,\n                            ns_st_pu: videoData.source === 'TODAY' ? 'TODAY' : 'NBC News', // Publisher Brand Name (needs fixing for today)\n                            ns_st_pr: videoData.source || '*null', // Program Title\n                            ns_st_ep: videoData.title || '*null', // Episode Title\n                            ns_st_sn: '*null', // Episode Season Number\n                            ns_st_en: '*null', // Episode Number\n                            ns_st_ge: 'News', // Content Genre\n                            ns_st_ti: '*null', // TMS ID (unavailable)\n                            ns_st_ia: '0', // Identical Ad Assignment Flag\n                            ns_st_ce: '0', // Complete Episode Flag\n                            ns_st_ddt: '*null', // Digital Air Date (not setup) '2014-10-03'\n                            ns_st_tdt: '*null', // TV Air Date (not setup) '2014-10-03'\n                            c3: '*null', // Dictionary Classification Value\n                            c4: siteBrand.c4, // Unused Dictionary Classification Value\n                            c6: showNamesC6[videoData.source] ? showNamesC6[videoData.source] : siteBrand.c6Default // Unused Dictionary Classification Value\n                        }\n                        if (streamingTag) {\n                            streamingTag.playVideoContentPart(metadata, streamContentType);\n                            logEvent('play', metadata);\n                        }\n                    }\n                    break;\n                case uniEvent.AD_PLAY:\n                    if (streamingTag) {\n                        streamingTag.playVideoAdvertisement({ ns_st_cl: videoData.adLength || 0 }, streamContentType);\n                        logEvent('play ad', metadata);\n                    }\n                    break;\n                case uniEvent.AD_COMPLETE:\n                    if (streamingTag) {\n                        streamingTag.stop();\n                        logEvent('stop', metadata);\n                    }\n                    break;\n                case uniEvent.PAUSE:\n                case uniEvent.STOP:\n                case uniEvent.COMPLETE:\n                    if (streamingTag) {\n                        streamingTag.stop();\n                        logEvent('stop', metadata);\n                    }\n                    previousVideoStopped = true;\n                    break;\n            }\n        }\n    });\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLbc6f9c43be99439ba179388e67f96bcb',
            name: 'Action - mbt_rightRailTabbed_latestClick',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, s */\n$t('on', 'mbt_rightRailTabbed_latestClick', function() {\n    var actionContextData = {\n        'news.linkmoduledetail': 'Button',\n        'news.linkmoduletype': 'Latest Stories Tab'\n    };\n    s.contextData = s.extendArray(s.contextData, actionContextData);\n\n    //track action\n    s.tl(true, 'o', 'latest stories tab click');\n\n    //cleanup values after action\n    for (var item in actionContextData) {\n        delete s.contextData[item];\n    }\n});\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL700f2451c3764fc68c4d3413278d674f',
            name: 'BI User Info',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n  function getUrlParams() {\n    var qParam = {};\n    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {\n      qParam[key] = value;\n    });\n    return qParam;\n  }\n\n  var referrer = document.referrer === '' ? 'direct' : document.referrer;\n  BI.userInfo.save({ 'previousPage': referrer });\n  if (BI.userInfo.get('referrer') === '') {\n    BI.userInfo.save({ 'referrer': referrer });\n  }\n\n  var cid = getUrlParams('cid');\n  if (cid.cid && (BI.userInfo.get('cid') === '')) {\n    var userCid = { 'cid': cid.cid };\n    BI.userInfo.save(userCid);\n  }\n})()",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL69b3bcffe0884f5386154d9f92c08ea1',
            name: 'Action - mbt_router_pageView',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, s */\n$t('on', 'mbt_router_pageView', function(e) {\n    if (s & s.pageURL != $t(e.type + '.url', '')) {\n        setTimeout(function() {\n            window.parseJsonLd();\n            $t('track', 'dtm_pageView', {\n                initiator: 'router',\n                index: $t(e.type + '.index', 0),\n                url: $t(e.type + '.url')\n            });\n        }, 1);\n    }\n});\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL73e61d3d9ae947aea5815b97a3ff30cd',
            name: 'Action - inlineVideoFullyInView',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, s */\n$t('on', 'inlineVideoFullyInView', function() {\n    var actionContextData = {\n        'news.pageevents': 'inlineVideoFullyInView'\n    };\n    s.contextData = s.extendArray(s.contextData, actionContextData);\n\n    //track action\n    s.tl(true, 'o', 'Inline video fully in view');\n\n    //cleanup values after action\n    for (var item in actionContextData) {\n        delete s.contextData[item];\n    }\n});\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL779cb312c9d94822a35971d466ff441e',
            name: 'Global - Nielson tracking',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '\n(function() {\n    // neilson\n    var canonicalUrl = document.URL;\n    var d = new Image(1, 1);\n    d.onerror = d.onload = function() {\n        d.onerror = d.onload = null;\n    };\n    d.src = ["//secure-us.imrworldwide.com/cgi-bin/m?ci=us-505401h&cg=0&cc=1&si=", escape(canonicalUrl), "&rp=", escape(document.referrer), "&ts=compact&rnd=", (new Date()).getTime()].join(\'\');\n})();\n\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL797f91937a3f4927b4c6233a13459148',
            name: 'z2code - Load $t Tracking Service',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 20 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '\n/*!******************\nTracking Service $t\nVersion: 2.4.1\nBuilt: 2017-08-24T19:35:07.994Z\n*********************/\n!function(e,t){var n=function(){var n=function(e){return"function"==typeof n[e]?n[e].apply(n,Array.prototype.slice.call(arguments,1)):arguments.length>0?n.get.apply(n,arguments):n.list.apply(n,arguments)},r=function(e,t){n.errorLog.push(e),(!t||n.debug>=1)&&i("$t error - "+e)},i=e.console?function(){e.console.log.apply(e.console,arguments)}:function(){},o=function(e,t){e=e||{};for(var n in t)"object"==typeof t[n]?e[n]=o(e[n],t[n]):e[n]=t[n];return e},s=function(e,t){var i=!1;return/^[^a-zA-Z_$]|[^0-9a-zA-Z_$]/.test(e)&&(i="validation: "+e+" is not a valid variable name"),t||void 0===n.eventLog[e]||(i="validation: "+e+" is already registered"),!i||(r(i),!1)},a={exp:36e5,key:"ts_data.",save:function(t,n,r){var i=(new Date).getTime(),o={eventData:n,timestamp:i};i=r?i+r:i+this.exp;var s=/\\w+\\.\\w+$/.exec(e.location.hostname);return this.cookie.set({name:this.key+t,value:JSON.stringify(o),path:"/",expires:new Date(i),domain:s}),n},load:function(e){var t=null;return!!(t=this.cookie.get(this.key+e))&&(t=JSON.parse(t),(new Date).getTime()<t.timestamp?t.eventData:void 0)},listEvents:function(){var e,t=[];e=this.cookie.keys();for(var n in e)isNaN(n)||(n=e[n]),-1!=n.indexOf(this.key)&&t.push(n.split(this.key)[1]);return t},cookie:{get:function(e){var n=t.cookie.split(e+"=");return 2===n.length&&decodeURI(n.pop().split(";").shift())},set:function(e){var n=e.name+"="+encodeURI(e.value)+";";e.expires&&(n+="expires="+e.expires.toUTCString()+";"),n+=e.path?"path="+e.path+";":"",n+=e.domain?"domain="+e.domain+";":"",n+=e.secure?"secure;":"",n+=e.httpOnly?"httpOnly;":"",t.cookie=n},keys:function(){var e=[],n=t.cookie;if(""===n)return e;for(var r=n.split("; "),i=r.length;i--;){var o=r[i].split("=");e[i]=o[0]}return e}}},c={listeners:{},trigger:function(e,t,i){if(this.listeners[t]&&this.listeners[t].length>0)for(var o=0;this.listeners[t][o];o++){var s=this.listeners[t][o];try{s.apply(n,[{type:t},i])}catch(e){r("Cant execute callback for: "+t+". "+e.stack)}}},bind:function(e,t,n){void 0===this.listeners[t]&&(this.listeners[t]=[]),this.listeners[t].push(n)}},f=function(t){if(t=t.split("."),void 0!==e[t[0]]){for(var n=e[t[0]],i=1;t.length>i;i++){if(null===n||void 0===n[t[i]])return r("TRAM convert - undefined - "+t.join().replace(/,/g,"."),!0),!1;n=n[t[i]]}return!function(e){if("object"==typeof e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1}(n)&&n||!1}return r("TRAM convert - missing root obj - "+t[0],!0),!1},l={},v={uniqueKey:"$t_nbc_crossEvent",srcUrl:[e.location.protocol,"//",e.location.host,e.location.pathname].join(""),listen:function(){var t=this.uniqueKey,r=this.srcUrl,i=e.addEventListener?"addEventListener":"attachEvent",o=function(e){try{return JSON.parse(e)}catch(e){return null}};(0,e[i])("attachEvent"==i?"onmessage":"message",function(i){if("string"==typeof i.data&&i.data.substring(0,t.length)===t){var s=o(i.data.replace(t,""));s&&s.action&&s.srcUrl!==r&&("track"!==s.action[0]&&"register"!==s.action[0]||(n.apply(n,s.action),parent!==e&&parent.postMessage(i.data,"*")))}},!1)},send:function(e){var t=this.uniqueKey,n={action:e,srcUrl:this.srcUrl};parent.postMessage(t+JSON.stringify(n),"*")}},u={};return n.version="2.4.1",n.debug=0,n.errorLog=[],n.eventLog={},n.track=function(t,n,s){if(void 0!==this.eventLog[t]){if("object"!=typeof s&&(s={}),n=n||!0,this.eventLog[t]=n,s.persistent){var f=!1;s.expires&&(f=1e3*s.expires),a.save(t,n,f)}if(0!==t.indexOf("_")&&c.trigger(this,"eventTracked",{eventType:t,eventData:n}),u[t]&&u[t].remote){if("object"==typeof n&&!n.$t_remote){var l=[e.location.protocol,"//",e.location.host,e.location.pathname].join("");o(n,{$t_remote:l})}v.send(["track",t,n])}return c.trigger(this,t,n),(1==this.debug&&0!==t.indexOf("_")||2==this.debug)&&i("*Tracking service: "+t+" triggered"),!0}return r("unable to track: "+t),!1},n.register=function(e,t){"object"!=typeof t&&(t={}),t=u[e[f]]=o(u[e[f]]||{},t);for(var n="",i=a.listEvents(),c={},f=0;i[f];f++)c[i[f]]=!0;for("string"==typeof e&&(e=[e]),f=0;e[f];f++){if(!0===c[e[f]])return!0;s(e[f],t.allowDuplicate)?(this.eventLog[e[f]]=null,t.remote&&v.send(["register",e[f],t])):n+=e[f]+","}return!n||(r("could not register: "+n),!1)},n.registeredEvents=function(e){var t=!1,r=[];0===(e=e||"").indexOf("_")&&(t=!0,e=e.substr(1));for(var i in n.eventLog)-1==i.indexOf(e)||0===i.indexOf("_")&&!t||r.push(i);return r},n.bindTrack=function(e){c.bind(this,"eventTracked",e)},n.on=function(e,t){"string"==typeof e&&(e=[e]);for(var n=0;e[n];n++)c.bind(this,e[n],t)},n.load=function(e,t,n){void 0===l[e]?"string"==typeof t?(l[e]={},l[e].info={ref:t,options:n}):r("TRAM load - object reference must be string"):r("TRAM load - object name taken")},n.get=function(e,t){var r=e.split(".")[0];if(t=void 0!==t?t:"",n.eventLog[r]||l[r]){n.eventLog[r]&&(e="$t."+e,r="$t"),e=e.replace(r,l[r].info.ref);var i=f(e);return i||t}return t},n.list=function(e){if(e)n.eventLog[e]?(i(e+" : event info"),i(n.eventLog[e])):l[e]?void 0!==window[l[e].info.ref.split(".")[0]]?(i(e+" : "+l[e].info.ref),i(f(l[e].info.ref))):i(e+" : "+l[e].info.ref+" : Not present"):i(e+" :  Empty or not defined");else{i("%cversion: %s","font-weight:bold;",n.version),i("%cevents:","font-weight:bold;");for(var t in n.eventLog)if(0!==t.indexOf("_")||2==n.debug){var r=u[t]&&u[t].remote?"(remote)":"";n.eventLog[t]?i("%c* %s %s fired %O","color:#B80;",t,r,n.eventLog[t]):(r=u[t]&&u[t].remote?"(remote)":"",i("%s %s",t,r))}i("%cTRAM objects:","font-weight:bold;");for(var o in l)i("%s : %s : %O",o,l[o].info.ref,f(l[o].info.ref));n.errorLog.length>0&&i("%clog: %O","font-weight:bold;",n.errorLog)}},function(){var e=a.listEvents();if(!e)return!1;for(var t=0;e[t];t++){var r=a.load(e[t]);r&&(n.eventLog[e[t]]=r)}}(),n.load("$t","$t.eventLog"),v.listen(),n};if(void 0!==e.$t){if(!parseFloat(e.$t.version)>0){var r=e.$t("getSaves");e.$t=n();for(var i=0;r[i];i++)e.$t.apply(e.$t,r[i])}}else e.$t=n()}(window,document);\n  \n//load data layers\n$t(\'load\',\'jsonLd\',\'jsonLd\');\n\n',
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\nwindow.parseJsonLd = function() {\n    var safeParse = function(JSONstring) {\n        try {\n            return JSON.parse(JSONstring);\n        } catch (e) {\n            return { '@type':'error','errorObj': e };\n        }\n    };\n    var rawJsonLd = document.querySelectorAll('script[type=\"application/ld+json\"]');\n    window.jsonLd = {};\n    for (var i = 0; rawJsonLd[i]; i++) {\n        var entryParsed = safeParse(rawJsonLd[i].innerHTML);\n        var type = entryParsed['@type'] || 'unknown';\n        window.jsonLd[type] = window.jsonLd[type] || [];\n        window.jsonLd[type].push(entryParsed);\n    }\n};\nwindow.parseJsonLd();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLca145d9853c349819c2ba0865b7c4383',
            name: 'Action - dtm_pageView',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['telemundo.com', 'today.com', 'nbcnews.com', 'msnbc.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "/* globals s, $t */\n(function () {\n    var showList = {\n        'msnbc': { //show should be signaled by the site, but for now we just have a list\n            'firstlook': true,//msnbc shows(scraped from nav)\n            'morning-joe': true,\n            'msnbc-live-hallie-jackson': true,\n            'velshi-ruhle': true,\n            'andrea-mitchell': true,\n            'craig-melvin': true,\n            'msnbc-live-katy-tur': true,\n            'msnbc-live-with-ali-velshi': true,\n            'deadline-white-house': true,\n            'mtp-daily': true,\n            'msnbc-live-ari-melber': true,\n            'hardball': true,\n            'all': true,\n            'rachel-maddow-show': true,\n            'the-last-word': true,\n            '11th-hour-with-brian-williams': true,\n            'originals': true,\n            'your-business': true,\n            'hugh-hewitt': true,\n            'politicsnation': true,\n            'am-joy': true,\n            'weekends-with-alex': true,\n            'kasiedc': true,\n            'the-beat-with-ari-melber': true\n        },\n        'nbcnews': {\n            'nightly-news': true,//nbcnews shows\n            'meet-the-press': true,\n            'dateline': true\n        },\n        'today': {\n            'on-the-show': true, //today shows\n            'megyn-kelly-today': true,\n            'klgandhoda': true,\n            'weekend-today': true,\n            'sunday-today': true,\n            'originals': true\n        },\n        'telemundo': {\n            'latinx-now': true,\n            'famosos': true,\n            'musica': true,\n            'cine': true,\n            'television': true,\n            'belleza-y-moda': true,\n            'billboard-en-espanol': true\n        }\n    };\n    var brand = function () {\n        //would be better is this wasnt based on domain\n        switch(s.topLevelDomain){\n          case 'today.com':\n            return 'today';\n            \n          case 'msnbc.com':\n            return 'msnbc';\n            \n          case 'telemundo.com':\n            return 'telemundo';\n            \n          default:\n            return 'nbcnews';\n        } \n    };\n    var convertDate = function (dateString) {\n        //input: 2015-06-04T14:40:45.000+0000, output: 2015-06-04 14:40:45 Z\n        var dateObj = new Date(dateString);\n        if (dateObj.toString() !== 'Invalid Date') {\n            return dateObj.toISOString().replace('T', ' ').replace('.000Z', ' Z');\n        } else {\n            return dateString;\n        }\n    };\n\n    var checkIfEmbeddedVideo = function () {\n        var i, embeddedVideoPaths = [\n            /\\/embedded-video\\//,\n            /^\\/playmaker\\/embed/\n        ];\n        for (i = 0; (embeddedVideoPaths[i]); i++) {\n            if (document.location.pathname.search(embeddedVideoPaths[i]) != -1) {\n                return true;\n            }\n        }\n        return false;\n    };\n\n    $t('on', 'dtm_pageView', function (e, data) {\n\n        var slug = function () {\n            var slug = $t(e.type + '.url').match(/[^\\/]+(?=(\\/$|\\/index\\.html$)|$)/g) || ['']; //remove index.html for shorthand pages\n            return slug[0]\n        };\n        var pageIndex = $t(e.type + '.index', '0');\n        var trackView = data.trackView !== false; //this will default all to true if not false\n\n        var contentType = (function () {\n            //if its native content, its just native\n            if (pageIndex === -1) {\n                //if there is an arror loading metadata, page index is -1\n                return 'error';\n            }\n            if ($t('jsonLd.Dataset.' + pageIndex + '.sponsor', false)) {\n                return 'native';\n            }\n            var pageType = $t('jsonLd.Dataset.' + pageIndex + '.pageType', '').toLowerCase(); //only considers the most recent page for now\n            if (document.location.pathname.indexOf('/card/') != -1) { //override for legacy card pages\n                pageType = 'card';\n            }\n            //make pagetype for embedded videos\n            if (checkIfEmbeddedVideo()) {\n                pageType = 'embedded';\n            }\n            switch (pageType) {\n                case 'article':\n                    if (document.location.pathname.indexOf('/live-blog/') != -1) { //override for liveblog, this should be represented bby the dataset later\n                        return 'liveblog';\n                    } else {\n                        return 'post';\n                    }\n                    break\n                case 'card':\n                    return 'card';\n                case 'gallery':\n                    return 'gallery';\n                case 'front':\n                    if ($t(e.type + '.url') === '/') {\n                        return 'cover';\n                    } else if ($t(e.type + '.initiator') === 'transporter') {\n                        return 'inline vertical';\n                    } else {\n                        return 'vertical';\n                    }\n                    break\n                case 'showpage':\n                    return 'show';\n                case 'subfront': //i think 'SubFront' is gone?\n                case 'sectionfront':\n                    if (showList[brand()] && showList[brand()][slug()]) {\n                        return 'show';\n                    } else {\n                        return 'subvertical';\n                    }\n                    break\n                case 'video':\n                    return 'canonical video';\n                case 'embedded':\n                    return 'embedded video';\n                case 'elections':\n                    return 'elections';\n                case 'email':\n                    return 'email';\n                case 'specialpage':\n                    return 'specialpage';\n                case 'notfound':\n                case 'internalservererror':\n                    return 'error';\n                case 'search':\n                    return 'search';\n                default:\n                    return s.noValue;\n            }\n        })();\n\n        //adobe values - clear before each pageview\n        s.clearVars();\n\n        s.pageName = (function () {\n            var pn = brand() + ':';\n            if (contentType === 'subvertical') {\n                //subvertical is weird\n                pn += $t('jsonLd.Dataset.' + pageIndex + '.vertical', s.noValue) + ':' + contentType + ':' + slug();\n            } else if (contentType === 'inline vertical') {\n                //urls dont change, so slug is not right\n                pn += contentType + ':' + $t('jsonLd.Dataset.' + pageIndex + '.vertical', s.noValue);\n            } else if (contentType === 'cover' && $t('jsonLd.Dataset.' + pageIndex + '.vertical', s.noValue) === 'news') {\n                //Temporary change to identify bento cover in Omniture\n                pn += contentType + ':new';\n            } else if (contentType === 'search'){\n                pn += contentType;\n            } else {\n                pn += contentType + (slug() ? (':' + slug()) : '');\n            }\n            return pn;\n        })();\n        s.contextData = {\n            'news.contenttype': contentType,\n            'news.contentcategory': (function () { // section\n                if ($t('jsonLd.Dataset.' + pageIndex + '.pageType', '').toLowerCase() === 'front') {\n                    return contentType;\n                } else {\n                    return $t('jsonLd.Dataset.' + pageIndex + '.section', s.noValue);\n                }\n            })(),\n            'news.subcat1': $t('jsonLd.Dataset.' + pageIndex + '.subSection', s.noValue),\n            //'news.breakingnews':s.noValue, // 'True' on TODAY, URL on NBCNews\n            //'news.contentsource':s.noValue,\n            'news.nativesponsor': $t('jsonLd.Dataset.' + pageIndex + '.sponsor', s.noValue),\n            'news.subverticalname': $t('jsonLd.Dataset.' + pageIndex + '.subVertical', s.noValue),\n            'news.templatename': $t('jsonLd.Dataset.' + pageIndex + '.packageId', s.noValue),\n            'news.verticalname': $t('jsonLd.Dataset.' + pageIndex + '.vertical', s.noValue),\n            'news.ecommerceenabled': $t('jsonLd.Dataset.' + pageIndex + '.ecommerceEnabled'),\n            //test for ldjson loading multiple times from react-helmet\n            'news.jsonld': $t('jsonLd.Dataset', []).length\n        };\n\n        // switch on contentType \n        switch (contentType) {\n            case 'post':\n            case 'liveblog':\n            case 'card':\n                //article index for multi-type content\n                var articleIndex = $t('jsonLd.Dataset', []).reduce(function (acum, curE, curI) {\n                    var pageType = curE.pageType && curE.pageType.toLowerCase();\n                    if (curI <= pageIndex && pageType === 'article') {\n                        return acum + 1;\n                    } else {\n                        return acum;\n                    }\n\n                }, -1);\n                articleIndex = articleIndex === -1 ? 0 : articleIndex;\n                s.contextData = s.extendArray(s.contextData, {\n                    'news.docid': $t('jsonLd.NewsArticle.' + articleIndex + '.identifier.value', s.noValue),\n                    //'news.videoplayercount': $t('jsonLd.NewsArticle.' + articleIndex + '.video', []).length || s.noValue, //ldjson video removed for now\n                    'news.videoplayercount': $t('jsonLd.Dataset.' + pageIndex + '.videoPlayerCount', s.noValue),\n                    'news.origpagepublishdate': convertDate($t('jsonLd.NewsArticle.' + articleIndex + '.datePublished', s.noValue)),\n                    'news.shortsummary': $t('jsonLd.NewsArticle.' + articleIndex + '.description', s.noValue),\n                    'news.show': s.noValue, //[TODO] need this from video objects\n                    'news.storylines': s.noValue, //[TODO] need this from video objects\n                    'news.modpagepublishdate': convertDate($t('jsonLd.NewsArticle.' + articleIndex + '.dateModified', s.noValue)), // 2017-08-17T16:40:53.000Z\n                    'news.author': $t('jsonLd.NewsArticle.' + articleIndex + '.author.0.name', s.noValue),\n                    'news.headline': $t('jsonLd.NewsArticle.' + articleIndex + '.headline', s.noValue),\n                    'news.label': $t('jsonLd.Dataset.' + articleIndex + '.label', s.noValue),\n                    'news.additionaltaxonomy': $t('jsonLd.NewsArticle.' + articleIndex + '.keywords', s.noValue) + '' //should be a string later, but need to convert now\n                });\n                break;\n            case 'inline vertical':\n            case 'vertical':\n                break;\n            case 'subvertical':\n                break;\n            case 'show':\n                s.contextData = s.extendArray(s.contextData, {\n                    'news.subverticalname': s.noValue, //subvertical is wrong in the template \n                    'news.contentcategory': $t('jsonLd.Dataset.' + pageIndex + '.section', slug()) //using slug as show name\n                });\n                break;\n            case 'gallery':\n                // indexing set to 0, non dynamic\n                s.contextData = s.extendArray(s.contextData, {\n                    'news.docid': $t('jsonLd.imageGallery.0.identifier.value', s.noValue),\n                    'news.origpagepublishdate': convertDate($t('jsonLd.imageGallery.0.dateModified', s.noValue)),\n                    'news.shortsummary': $t('jsonLd.imageGallery.0.description', s.noValue), // [TODO] not sure if this is headline?\n                    'news.modpagepublishdate': convertDate($t('jsonLd.imageGallery.0.dateModified', s.noValue)), // 2017-08-17T16:40:53.000Z\n                    'news.author': $t('jsonLd.imageGallery.0.author.0.name', s.noValue),\n                    'news.slideshowname': $t('jsonLd.imageGallery.0.headline', s.noValue),\n                    'news.headline': $t('jsonLd.imageGallery.0.headline', s.noValue)\n                });\n                break;\n            case 'canonical video':\n                // indexing set to 0, non dynamic\n                s.contextData = s.extendArray(s.contextData, {\n                    'news.contentcategory': 'video', //section is hard coded\n                    'news.modpagepublishdate': convertDate($t('jsonLd.NewsArticle.0.dateModified', s.noValue)), // 2017-08-17T16:40:53.000Z\n                    'news.origpagepublishdate': convertDate($t('jsonLd.NewsArticle.0.datePublished', s.noValue))\n                });\n                break;\n        }\n        //track paegview, or only set pageview values\n        if (trackView) {\n            s.t();\n        }\n    });\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL7f422ffbf754407db3affc2b3c23668e',
            name: 'Global - Comscore Pageview',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'widget/.*', valueIsRegex: !0 }] },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n(function () {\n    /* globals $t */\n\n    //track comscore pageview\n    $t('on', 'dtm_pageView', function (e, data) {\n        var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n        var trackView = data.trackView !== false; //this will default all to true if not false\n        var c4Values = {\n            'today.com': 'today',\n            'nbcnews.com': 'nbcnews',\n            'msnbc.com': 'msnbc',\n            'telemundo.com': 'telemundo'\n        };\n\n        if (trackView) {\n            window._comscore = window._comscore || [];\n            (function () {\n                var s = document.createElement(\"script\"),\n                    el = document.getElementsByTagName(\"script\")[0];\n                s.async = true;\n                s.src = (document.location.protocol == \"https:\" ? \"https://sb\" : \"http://b\") + \".scorecardresearch.com/beacon.js\";\n                el.parentNode.insertBefore(s, el);\n            })();\n            window._comscore.push({\n                c1: '2',\n                c2: '6035083',\n                c3: '*null',\n                c4: c4Values[topLevelDomain] || c4Values['nbcnews.com']\n            });\n        }\n    });\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLc07e4c025c444432aa274672fe5b49e9',
            name: 'Product - Hotjar',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n\n    var brandValues = {\n        'today.com': '352474',\n        'nbcnews.com': '309218',\n        'msnbc.com': '382740'\n    }\n    var brandHjId = brandValues[topLevelDomain];\n    if (brandHjId) {\n        (function (h, o, t, j, a, r) {\n            h.hj = h.hj || function () {\n                (h.hj.q = h.hj.q || []).push(arguments)\n            };\n            h._hjSettings = { hjid: brandHjId, hjsv: 6 };\n            a = o.getElementsByTagName('head')[0];\n            r = o.createElement('script');\n            r.async = 1;\n            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;\n            a.appendChild(r);\n        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');\n    }\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLc338ca9bddc04ab9961c4a7fa81d7dd0',
            name: 'Action - mbt_curtain_',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/* globals $t, s */\n$t('on', 'mbt_curtain_closeClick', function() {\n    var actionContextData = {\n        'news.linkmoduledetail': 'Close',\n        'news.linkmoduletype': 'Homepage Curtain'\n    };\n    s.contextData = s.extendArray(s.contextData, actionContextData);\n\n    //track action\n    s.tl(true, 'o', 'curtain close click');\n\n    //cleanup values after action\n    for (var item in actionContextData) {\n        delete s.contextData[item];\n    }\n});\n$t('on', 'mbt_curtain_scrollPast', function() {\n    var actionContextData = {\n        'news.belowcurtain': 'true',\n    };\n    s.contextData = s.extendArray(s.contextData, actionContextData);\n\n    //track action\n    s.tl(true, 'o', 'scrolled past curtain');\n\n    //cleanup values after action\n    for (var item in actionContextData) {\n        delete s.contextData[item];\n    }\n});\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLc3dbcde9619046bb9ce5f1e6b9063c8d',
            name: 'Global - Conductrics tag',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "\n//dynamicaly load conductrics scripts\n(function () {\n    var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n    var siteEndpoints = {\n        'today.com': '//cdn-v3.conductrics.com/ac-kANJFqzwHz/v3/agent-api/js/f-MGXQstUBzA/dt-dLILCrQnEa9tihQkISOiSQfBsuZKdW?apikey=api-GCNKdGuimYDiuTjQpVpN',\n        'nbcnews.com': '//cdn-v3.conductrics.com/ac-kANJFqzwHz/v3/agent-api/js/f-MGXQstUBzA/dt-3RxgN1KLu0QvqskKLYBEVyV2EGUVvw?apikey=api-GCNKdGuimYDiuTjQpVpN',\n        'msnbc.com': '//cdn-v3.conductrics.com/ac-kANJFqzwHz/v3/agent-api/js/f-MGXQstUBzA/dt-wpczel0toMY1QBxXg7LJ63vSXifojX?apikey=api-GCNKdGuimYDiuTjQpVpN'\n    };\n\n    (function (scriptURL) {\n        if (!scriptURL) {\n            return false;\n        }\n        var s = document.createElement('script');\n        var el = document.getElementsByTagName('script')[0];\n        s.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + scriptURL;\n        el.parentNode.insertBefore(s, el);\n    })(siteEndpoints[topLevelDomain]);\n})();\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLccae62036e9c4af39f4f4fdc4cdc1712',
            name: 'UniVideo - Core',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    /* global $t */\n    var isEmpty = function (obj) {\n        return Object.keys(obj).length === 0 && obj.constructor === Object;\n    }\n    window.uniVideo = (function () {\n        var extend = function (defaults, options) {\n            var extended = {};\n            var prop;\n            for (prop in defaults) {\n                if (Object.prototype.hasOwnProperty.call(defaults, prop)) {\n                    extended[prop] = defaults[prop];\n                }\n            }\n            for (prop in options) {\n                if (Object.prototype.hasOwnProperty.call(options, prop)) {\n                    extended[prop] = options[prop];\n                }\n            }\n            return extended;\n        };\n\n        var uniVideo = {};\n\n        uniVideo.event = {\n            PROGRESS: 'PROGRESS',\n            INIT: 'INIT',\n            VIDEO_LOADED: 'VIDEO_LOADED',\n            PLAY: 'PLAY',\n            PAUSE: 'PAUSE',\n            SEEK_START: 'SEEK_START',\n            SEEK_COMPLETE: 'SEEK_COMPLETE',\n            STOP: 'STOP',\n            COMPLETE: 'COMPLETE',\n            AD_BREAK_START: 'AD_BREAK_START',\n            AD_BREAK_COMPLETE: 'AD_BREAK_COMPLETE',\n            AD_PLAY: 'AD_PLAY',\n            AD_COMPLETE: 'AD_COMPLETE',\n            FULLSCREEN: 'FULLSCREEN',\n            SEGMENT_START: 'SEGMENT_START',\n            SEGMENT_END: 'SEGMENT_END'\n        };\n\n        uniVideo.buildUniTrack = function () {\n\n            // register $t event\n            $t('register', 'uni_videoEvent', { allowDuplicate: true }); //if different players are using it\n\n            var videoData = {}\n            var videoDataDefaults = {\n                adLength: 0,\n                dateBroadcast: '', //js toIsoString ex: \"2019-11-06T17:52:27.351Z\"\n                datePublished: '', //js toIsoString ex: \"2019-11-06T17:52:27.351Z\"\n                duration: '', //seconds\n                guid: '',\n                mpxId: '',\n                newsNetwork: '',\n                playbackAdapter: '',\n                playheadPosition: 0, // miliseconds\n                playInitiate: '', // (Continuous,Manual,Auto)\n                playListId: '',\n                playListLabel: '',\n                sentiment: '',\n                source: '',\n                streamType: '', // (linear, vod)\n                title: '',\n                videoCount: 0,\n                videoType: '',\n                assetID: '' //for SCTE info since no ID or title\n            };\n\n            // video state WHEN the event happened, not after\n            var videoState = {}\n            var videoStateDefaults = {\n                inAd: false,\n                inSegment: false,\n                segmentPosition: 1,\n                adPosition: 1,\n                adBreakPosition: 1,\n                playState: 'stop', //stop, play, pause\n                fullScreen: false,\n                isMuted: false\n            };\n\n            var uniTrack = function (eventName) {\n                $t('track', 'uni_videoEvent', {\n                    eventType: eventName,\n                    videoData: uniTrack.videoData(),\n                    videoState: uniTrack.videoState()\n                });\n            };\n\n            uniTrack.videoData = function (newSettings, setDefaults) {\n                if (isEmpty(videoData)) {\n                    videoData = videoDataDefaults;\n                }\n                if (newSettings) {\n                    var previousSettings = setDefaults ? videoDataDefaults : videoData;\n                    videoData = extend(previousSettings, newSettings);\n                } else {\n                    return videoData;\n                }\n            };\n\n            uniTrack.videoState = function (newSettings, setDefaults) {\n                if (isEmpty(videoState)) {\n                    videoState = videoStateDefaults;\n                }\n                if (newSettings) {\n                    var previousSettings = setDefaults ? videoStateDefaults : videoState;\n                    videoState = extend(previousSettings, newSettings);\n                } else {\n                    return videoState;\n                }\n            };\n\n            return uniTrack;\n        }\n        return uniVideo;\n    })();\n})()",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL90e16927fadf41d6bbc6244be1e90bb2',
            name: 'BizDev - Floodlight tags',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n/*globals $t */\n(function () {\n    var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n    var sites = {\n        'today.com': {\n            'view': 'DC-8168974/today0/today0+standard',\n            'play': 'DC-8168974/today0/today00+standard'\n        },\n        'nbcnews.com': {\n            'view': 'DC-8168974/nbcvi0/nbcne0+standard',\n            'play': 'DC-8168974/nbcvi0/nbcne00+standard'\n        },\n        'msnbc.com': {\n            'view': 'DC-8168974/msnbc0/msnbc0+standard',\n            'play': 'DC-8168974/msnbc0/msnbc00+standard'\n        }\n    };\n    var siteEvents = sites[topLevelDomain] || { 'view': '', 'play': '' };\n\n    // add global script\n    var loadScript = function (script) {\n        var s = document.createElement('script'),\n            el = document.getElementsByTagName('script')[0];\n        s.async = true;\n        s.src = (document.location.protocol == 'https:' ? 'https://' : 'http://') + script;\n        el.parentNode.insertBefore(s, el);\n    };\n    loadScript('www.googletagmanager.com/gtag/js?id=DC-8168974');\n\n    window.dataLayer = window.dataLayer || []; //that name is to generic to have global scope\n    function gtag() { window.dataLayer.push(arguments); }\n\n    gtag('js', new Date());\n    gtag('config', 'DC-8168974');\n\n    var customEvent = function (sendTo) {\n        gtag('event', 'conversion', {\n            'allow_custom_scripts': true,\n            'send_to': sendTo\n        });\n    };\n\n    //on pageload\n    customEvent(siteEvents.view);\n\n    //on video start\n    $t('on', 'ndp_videoEvent', function (e, data) {\n        if(data.eventType === 'NDP_PlaybackEvent_START') {\n            customEvent(siteEvents.play);\n        }\n    });\n})();\n\n",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "(function () {\n    var trackPath = /www.nbcnews.com\\/now$/;\n    var videoStarted = false;\n\n    //local gtag\n    window.dataLayer = window.dataLayer || []; //that name is to generic to have global scope\n    function gtag() { window.dataLayer.push(arguments); }\n\n    gtag('js', new Date());\n    gtag('config', 'DC-8168974');\n\n    if (document.location.href.split('?')[0].search(trackPath) >= 1) {\n        $t('on', 'dtm_pageView', function (e, data) {\n            //Event snippet for NBC NEWS NOW - Landing Page on https://www.nbcnews.com/now: Please do not remove.\n            // Creation date: 11/12/2020\n            typeof gtag != 'undefined' && gtag('event', 'conversion', {\n                'allow_custom_scripts': true,\n                'send_to': 'DC-8168974/nbcno0/nbcne0+standard' //this one has 0 vs 00\n            });\n        });\n\n        $t('on', 'uni_videoEvent', function (e, data) {\n            if (data.eventType == 'PLAY' && !videoStarted) {\n                //Event snippet for NBC NEWS NOW Video - Start on https://www.nbcnews.com/now: Please do not remove.\n                //Creation date: 11/12/2020\n                typeof gtag != 'undefined' && gtag('event', 'conversion', {\n                    'allow_custom_scripts': true,\n                    'send_to': 'DC-8168974/nbcno0/nbcne00+standard' //this one has 00 vs 0\n                });\n                videoStarted = true;\n            }\n        })\n    }\n})();\n\n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLdda703372cab4082886a5d4983173d0f',
            name: 'Global - Sailthru page track',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "\n(function () {\n    (function() {\n        var s = document.createElement('script');\n        s.type = 'text/javascript';\n        s.async = true;\n        s.src = location.protocol + '//ak.sail-horizon.com/spm/spm.v1.min.js';\n        var x = document.getElementsByTagName('script')[0];\n        x.parentNode.insertBefore(s, x);\n    })();\n\n    //poll to run sailthru init after loaded\n    var pollTimer = {\n        tries: 5,\n        timer: setInterval(function () {\n            pollTimer.tries = pollTimer.tries - 1;\n            if (window.Sailthru) {\n                var topLevelDomain = document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n                var customerIdValues = {\n                    'today.com': 'f0090744c0d73fb6594d580fbac227a5',\n                    'nbcnews.com': 'a839e8824b3cdd864a9ba3052205d70b',\n                    'msnbc.com': '18ce7874047066963cf21c55d2137291',\n                    'telemundo.com': 'd65e7b400b7f33ab3b0824e1d23721b5'\n                };\n                if(customerIdValues[topLevelDomain]){\n                    window.Sailthru.init({ customerId: customerIdValues[topLevelDomain] });\n                    pollTimer.tries = 0;\n                }\n                pollTimer.tries = 0;\n            }\n            if (pollTimer.tries <= 0) {\n                clearInterval(pollTimer.timer);\n            }\n        }, 200)\n    };\n})();     \n\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL07bfdadcae954d84a838b05a32fb8cae',
            name: 'z2Code - Adobe Appmeasurment',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 30 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '/*\nCopyright (c) Copyright (c) 2007, Carl S. Yestrau All rights reserved.\nCode licensed under the BSD License: http://www.featureblend.com/license.txt\nVersion: 1.0.4\n*/\nwindow.FlashDetect = new function(){var r=this;r.installed=!1,r.raw="",r.major=-1,r.minor=-1,r.revision=-1,r.revisionStr="";var n=[{name:"ShockwaveFlash.ShockwaveFlash.7",version:function(r){return e(r)}},{name:"ShockwaveFlash.ShockwaveFlash.6",version:function(r){var n="6,0,21";try{r.AllowScriptAccess="always",n=e(r)}catch(i){}return n}},{name:"ShockwaveFlash.ShockwaveFlash",version:function(r){return e(r)}}],e=function(r){var n=-1;try{n=r.GetVariable("$version")}catch(i){}return n},a=function(r){var n=-1;try{n=new ActiveXObject(r)}catch(i){n={activeXError:!0}}return n},t=function(r){var n=r.split(",");return{raw:r,major:parseInt(n[0].split(" ")[1],10),minor:parseInt(n[1],10),revision:parseInt(n[2],10),revisionStr:n[2]}},o=function(r){var n=r.split(/ +/),i=n[2].split(/\\./),e=n[3];return{raw:r,major:parseInt(i[0],10),minor:parseInt(i[1],10),revisionStr:e,revision:s(e)}},s=function(n){return parseInt(n.replace(/[a-zA-Z]/g,""),10)||r.revision};r.majorAtLeast=function(n){return r.major>=n},r.minorAtLeast=function(n){return r.minor>=n},r.revisionAtLeast=function(n){return r.revision>=n},r.versionAtLeast=function(){var n=[r.major,r.minor,r.revision],e=Math.min(n.length,arguments.length);for(i=0;e>i;i++){if(n[i]>=arguments[i]){if(e>i+1&&n[i]==arguments[i])continue;return!0}return!1}},r.FlashDetect=function(){if(navigator.plugins&&navigator.plugins.length>0){var i="application/x-shockwave-flash",e=navigator.mimeTypes;if(e&&e[i]&&e[i].enabledPlugin&&e[i].enabledPlugin.description){var s=e[i].enabledPlugin.description,v=o(s);r.raw=v.raw,r.major=v.major,r.minor=v.minor,r.revisionStr=v.revisionStr,r.revision=v.revision,r.installed=!0}}else if(-1==navigator.appVersion.indexOf("Mac")&&window.execScript)for(var s=-1,c=0;c<n.length&&-1==s;c++){var l=a(n[c].name);if(!l.activeXError&&(r.installed=!0,s=n[c].version(l),-1!=s)){var v=t(s);r.raw=v.raw,r.major=v.major,r.minor=v.minor,r.revision=v.revision,r.revisionStr=v.revisionStr}}}()};FlashDetect.JS_RELEASE="1.0.4";\n\n/*\n Start ActivityMap Module\n\n The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap\n allows you to view data overlays on your links and content to understand how\n users engage with your web site. If you do not intend to use ActivityMap, you\n can remove the following block of code from your AppMeasurement.js file.\n Additional documentation on how to configure ActivityMap is available at:\n https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html\n*/\nfunction AppMeasurement_Module_ActivityMap(h){function q(){var a=f.pageYOffset+(f.innerHeight||0);a&&a>+g&&(g=a)}function r(){if(e.scrollReachSelector){var a=h.d.querySelector&&h.d.querySelector(e.scrollReachSelector);a?(g=a.scrollTop||0,a.addEventListener("scroll",function(){var d;(d=a&&a.scrollTop+a.clientHeight||0)>g&&(g=d)})):0<w--&&setTimeout(r,1E3)}}function l(a,d){var c,b,n;if(a&&d&&(c=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<c.length&&(b=c[n++]);)if(-1<a.indexOf(b))return null;p=1;return a}\nfunction s(a,d,c,b,e){var f,k;if(a.dataset&&(k=a.dataset[d]))f=k;else if(a.getAttribute)if(k=a.getAttribute("data-"+c))f=k;else if(k=a.getAttribute(c))f=k;if(!f&&h.useForcedLinkTracking&&e){var g;a=a.onclick?""+a.onclick:"";varValue="";if(b&&a&&(d=a.indexOf(b),0<=d)){for(d+=b.length;d<a.length;)if(c=a.charAt(d++),0<="\'\\"".indexOf(c)){g=c;break}for(k=!1;d<a.length&&g;){c=a.charAt(d);if(!k&&c===g)break;"\\\\"===c?k=!0:(varValue+=c,k=!1);d++}}(g=varValue)&&(h.w[b]=g)}return f||e&&h.w[b]}function t(a,d,\nc){var b;return(b=e[d](a,c))&&(p?(p=0,b):l(m(b),e[d+"Exclusions"]))}function u(a,d,c){var b;if(a&&!(1===(b=a.nodeType)&&(b=a.nodeName)&&(b=b.toUpperCase())&&x[b])&&(1===a.nodeType&&(b=a.nodeValue)&&(d[d.length]=b),c.a||c.t||c.s||!a.getAttribute||((b=a.getAttribute("alt"))?c.a=b:(b=a.getAttribute("title"))?c.t=b:"IMG"==(""+a.nodeName).toUpperCase()&&(b=a.getAttribute("src")||a.src)&&(c.s=b)),(b=a.childNodes)&&b.length))for(a=0;a<b.length;a++)u(b[a],d,c)}function m(a){if(null==a||void 0==a)return a;\ntry{return a.replace(RegExp("^[\\\\s\\\\n\\\\f\\\\r\\\\t\\t-\\r \\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u205f\\u3000\\ufeff]+","mg"),"").replace(RegExp("[\\\\s\\\\n\\\\f\\\\r\\\\t\\t-\\r \\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u205f\\u3000\\ufeff]+$","mg"),"").replace(RegExp("[\\\\s\\\\n\\\\f\\\\r\\\\t\\t-\\r \\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u205f\\u3000\\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=h;var f=window;f.s_c_in||(f.s_c_il=[],f.s_c_in=0);e._il=f.s_c_il;e._in=f.s_c_in;e._il[e._in]=e;f.s_c_in++;\ne._c="s_m";var g=0,v,w=60;e.c={};var p=0,x={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,c,b=h.contextData,e=h.linkObject;(a=h.pageName||h.pageURL)&&(d=t(e,"link",h.linkName))&&(c=t(e,"region"))&&(b["a.activitymap.page"]=a.substring(0,255),b["a.activitymap.link"]=128<d.length?d.substring(0,128):d,b["a.activitymap.region"]=127<c.length?c.substring(0,127):c,0<g&&(b["a.activitymap.xy"]=10*Math.floor(g/10)),b["a.activitymap.pageIDType"]=h.pageName?1:0)};e.e=function(){e.trackScrollReach&&\n!v&&(e.scrollReachSelector?r():(q(),f.addEventListener&&f.addEventListener("scroll",q,!1)),v=!0)};e.link=function(a,d){var c;if(d)c=l(m(d),e.linkExclusions);else if((c=a)&&!(c=s(a,"sObjectId","s-object-id","s_objectID",1))){var b,f;(f=l(m(a.innerText||a.textContent),e.linkExclusions))||(u(a,b=[],c={a:void 0,t:void 0,s:void 0}),(f=l(m(b.join(""))))||(f=l(m(c.a?c.a:c.t?c.t:c.s?c.s:void 0)))||!(b=(b=a.tagName)&&b.toUpperCase?b.toUpperCase():"")||("INPUT"==b||"SUBMIT"==b&&a.value?f=l(m(a.value)):"IMAGE"==\nb&&a.src&&(f=l(m(a.src)))));c=f}return c};e.region=function(a){for(var d,c=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=s(a,c,c,c))return d;if("BODY"==a.nodeName)return"BODY"}}}\n/* End ActivityMap Module */\n\n/*\n Start AudienceManagement Module\n */\nfunction AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableScriptAttachment=!0,c.disableCORS=!0,c.secureDataCollection=!1,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?\na.instance.api.getEventCallConfigParams():{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}\n!function(){"use strict";var r,o,a;"function"!=typeof window.DIL&&(window.DIL=function(n){var c,e,I,r,u,h,t,o,s,i,a,d,y,l,f,g,p,m,b,v,D,O=[],C={};function S(e){return void 0===e||!0===e}n!==Object(n)&&(n={}),I=n.partner,r=n.containerNSID,u=n.mappings,h=n.uuidCookie,t=!0===n.enableErrorReporting,o=n.visitorService,s=n.declaredId,i=!0===n.delayAllUntilWindowLoad,a=S(n.secureDataCollection),d="boolean"==typeof n.isCoopSafe?n.isCoopSafe:null,y=S(n.enableHrefererParam),l=S(n.enableLogging),f=S(n.enableUrlDestinations),g=S(n.enableCookieDestinations),p=!0===n.disableDefaultRequest,m=n.afterResultForDefaultRequest,b=n.visitorConstructor,v=!0===n.disableCORS,D=!0===n.ignoreHardDependencyOnVisitorAPI,t&&DIL.errorModule.activate(),D&&O.push("Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.");var w=!0===window._dil_unit_tests;if((c=arguments[1])&&O.push(c+""),!I||"string"!=typeof I){var _={name:"error",message:c="DIL partner is invalid or not specified in initConfig",filename:"dil.js"};return DIL.errorModule.handleError(_),new Error(c)}if(c="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0",(r||"number"==typeof r)&&(r=parseInt(r,10),!isNaN(r)&&0<=r&&(c="")),c&&(r=0,O.push(c),c=""),(e=DIL.getDil(I,r))instanceof DIL&&e.api.getPartner()===I&&e.api.getContainerNSID()===r)return e;if(!(this instanceof DIL))return new DIL(n,"DIL was not instantiated with the \'new\' operator, returning a valid instance with partner = "+I+" and containerNSID = "+r);DIL.registerDil(this,I,r);var R={doesConsoleLogExist:window.console===Object(window.console)&&"function"==typeof window.console.log,logMemo:{},log:function(e){(O.push(e),l&&this.doesConsoleLogExist)&&Function.prototype.bind.call(window.console.log,window.console).apply(window.console,arguments)},logOnce:function(e){this.logMemo[e]||(this.logMemo[e]=!0,R.log(e))}},E={IS_HTTPS:a||"https:"===document.location.protocol,SIX_MONTHS_IN_MINUTES:259200,IE_VERSION:function(){if(document.documentMode)return document.documentMode;for(var e=7;4<e;e--){var t=document.createElement("div");if(t.innerHTML="\\x3c!--[if IE "+e+"]><span></span><![endif]--\\x3e",t.getElementsByTagName("span").length)return t=null,e}return null}()};E.IS_IE_LESS_THAN_10="number"==typeof E.IE_VERSION&&E.IE_VERSION<10;var P={stuffed:{}},L={},A={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},firstRequestHasFired:!1,abortRequests:!1,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,platformParams:{d_nsid:r+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:3e4,calledBack:!1,mid:null,noVisitorAPI:null,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(e){try{if(this.admsProcessingStarted)return;this.admsProcessingStarted=!0;var t,n,s,i=o;if("function"!=typeof e||"function"!=typeof e.getInstance)throw this.noVisitorAPI=!0,new Error("Visitor does not exist.");if(i!==Object(i)||!(t=i.namespace)||"string"!=typeof t)throw this.releaseType="no namespace",new Error("DIL.create() needs the initConfig property `visitorService`:{namespace:\'<Experience Cloud Org ID>\'}");if(!((n=e.getInstance(t,{idSyncContainerID:r}))===Object(n)&&n instanceof e&&"function"==typeof n.isAllowed&&"function"==typeof n.getMarketingCloudVisitorID&&"function"==typeof n.getCustomerIDs&&"function"==typeof n.isOptedOut&&"function"==typeof n.publishDestinations))throw this.releaseType="invalid instance",s="Invalid Visitor instance.",n===Object(n)&&"function"!=typeof n.publishDestinations&&(s+=" In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ ."),new Error(s);if(this.VisitorAPI=e,!n.isAllowed())return this.releaseType="VisitorAPI is not allowed to write cookies",void this.releaseRequests();this.instance=n,this.waitForMidToReleaseRequests()}catch(e){if(!D)throw new Error("Error in processing Visitor API, which is a hard dependency for DIL v8.0+: "+e.message);this.releaseRequests()}},waitForMidToReleaseRequests:function(){var t=this;this.instance&&(this.instance.getMarketingCloudVisitorID(function(e){t.mid=e,t.releaseType="VisitorAPI",t.releaseRequests()},!0),(!N.exists||!N.isIabContext&&N.isApproved()||N.isIabContext&&B.hasGoSignal())&&setTimeout(function(){"VisitorAPI"!==t.releaseType&&(t.releaseType="timeout",t.releaseRequests())},this.getLoadTimeout()))},releaseRequests:function(){this.calledBack=!0,A.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var e=k.isPopulatedString,t=this.getMarketingCloudVisitorID();return e(this.mid)&&this.mid===t||(this.mid=t),e(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(e){if(e!==Object(e))return"";var t,n,s,i,r="",o=[],a=[];for(t in e)e.hasOwnProperty(t)&&(n=e[a[0]=t])===Object(n)&&(a[1]=n.id||"",a[2]=n.authState||0,o.push(a),a=[]);if(i=o.length)for(s=0;s<i;s++)r+="&d_cid_ic="+x.encodeAndBuildRequest(o[s],"%01");return r},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(e){this.isOptedOut=e,this.isOptedOutCallbackCalled=!0,A.registerRequest(),N.isIabContext()&&B.checkQueryStringObject()},getLoadTimeout:function(){var e=this.instance;if(e){if("function"==typeof e.getLoadTimeout)return e.getLoadTimeout();if(void 0!==e.loadTimeout)return e.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(e,t){var n=k.isPopulatedString,s=encodeURIComponent;if(e===Object(e)&&n(t)){var i=e.dpid,r=e.dpuuid,o=null;if(n(i)&&n(r))return o=s(i)+"$"+s(r),!0===this.declaredIdCombos[o]?"setDeclaredId: combo exists for type \'"+t+"\'":(this.declaredIdCombos[o]=!0,this.declaredId[t]={dpid:i,dpuuid:r},"setDeclaredId: succeeded for type \'"+t+"\'")}return"setDeclaredId: failed for type \'"+t+"\'"},getDeclaredIdQueryString:function(){var e=this.declaredId.request,t=this.declaredId.init,n=encodeURIComponent,s="";return null!==e?s="&d_dpid="+n(e.dpid)+"&d_dpuuid="+n(e.dpuuid):null!==t&&(s="&d_dpid="+n(t.dpid)+"&d_dpuuid="+n(t.dpuuid)),s}},registerRequest:function(e){var t,n=this.firingQueue;e===Object(e)&&(n.push(e),e.isDefaultRequest||(p=!0)),this.firing||!n.length||i&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(N.isApproved()||B.hasGoSignal())&&(this.adms.isOptedOutCallbackCalled=!1,(t=n.shift()).src=t.src.replace(/&d_nsid=/,"&"+this.adms.getMIDQueryString()+B.getQueryString()+"d_nsid="),k.isPopulatedString(t.corsPostData)&&(t.corsPostData=t.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+B.getQueryString()+"d_nsid=")),V.fireRequest(t),this.firstRequestHasFired||"script"!==t.tag&&"cors"!==t.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(b||window.Visitor)},getCoopQueryString:function(){var e="";return!0===d?e="&d_coop_safe=1":!1===d&&(e="&d_coop_unsafe=1"),e}};C.requestController=A;var q,j,T={sendingMessages:!1,messages:[],messagesPosted:[],destinations:[],destinationsPosted:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],publishDestinationsVersion:null,requestToProcess:function(e,t){var n,s=this;function i(){s.jsonForComparison.push(e),s.jsonWaiting.push([e,t])}if(e&&!k.isEmptyObject(e))if(n=JSON.stringify(e.dests||[]),this.jsonForComparison.length){var r,o,a,d=!1;for(r=0,o=this.jsonForComparison.length;r<o;r++)if(a=this.jsonForComparison[r],n===JSON.stringify(a.dests||[])){d=!0;break}d?this.jsonDuplicates.push(e):i()}else i();if(this.jsonWaiting.length){var u=this.jsonWaiting.shift();this.process(u[0],u[1]),this.requestToProcess()}this.messages.length&&!this.sendingMessages&&this.sendMessages()},process:function(e){if(f){var t,n,s,i,r,o,a=encodeURIComponent,d=this.getPublishDestinationsVersion(),u=!1;if(-1!==d){if((t=e.dests)&&t instanceof Array&&(n=t.length)){for(s=0;s<n;s++)i=t[s],o=[a("dests"),a(i.id||""),a(i.y||""),a(i.c||"")].join("|"),this.addMessage(o),r={url:i.c,hideReferrer:void 0===i.hr||!!i.hr,message:o},this.addDestination(r),void 0!==i.hr&&(u=!0);1===d&&u&&R.logOnce("Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.")}this.jsonProcessed.push(e)}}},addMessage:function(e){this.messages.push(e)},addDestination:function(e){this.destinations.push(e)},sendMessages:function(){this.sendingMessages||(this.sendingMessages=!0,f&&this.messages.length&&this.publishDestinations())},publishDestinations:function(){var t=this,e=A.adms.instance,n=[],s=[],i=function(e){R.log("visitor.publishDestinations() result: "+(e.error||e.message)),t.sendingMessages=!1,t.requestToProcess()},r=function(){t.messages=[],t.destinations=[]};return 1===this.publishDestinationsVersion?(x.extendArray(n,this.messages),x.extendArray(this.messagesPosted,this.messages),r(),e.publishDestinations(I,n,i),"Called visitor.publishDestinations() version 1"):1<this.publishDestinationsVersion?(x.extendArray(s,this.destinations),x.extendArray(this.destinationsPosted,this.destinations),r(),e.publishDestinations({subdomain:I,callback:i,urlDestinations:s}),"Called visitor.publishDestinations() version > 1"):void 0},getPublishDestinationsVersion:function(){if(null!==this.publishDestinationsVersion)return this.publishDestinationsVersion;var e=A.adms.instance,n=-1;return e.publishDestinations(null,null,function(e){if(e===Object(e)){var t=e.error;"subdomain is not a populated string."===t?n=1:"Invalid parameters passed."===t&&(n=2)}}),this.publishDestinationsVersion=n}},M={traits:function(e){return k.isValidPdata(e)&&(L.sids instanceof Array||(L.sids=[]),x.extendArray(L.sids,e)),this},pixels:function(e){return k.isValidPdata(e)&&(L.pdata instanceof Array||(L.pdata=[]),x.extendArray(L.pdata,e)),this},logs:function(e){return k.isValidLogdata(e)&&(L.logdata!==Object(L.logdata)&&(L.logdata={}),x.extendObject(L.logdata,e)),this},customQueryParams:function(e){return k.isEmptyObject(e)||x.extendObject(L,e,A.reservedKeys),this},signals:function(e,t){var n,s=e;if(!k.isEmptyObject(s)){if(t&&"string"==typeof t)for(n in s={},e)e.hasOwnProperty(n)&&(s[t+n]=e[n]);x.extendObject(L,s,A.reservedKeys)}return this},declaredId:function(e){return A.declaredId.setDeclaredId(e,"request"),this},result:function(e){return"function"==typeof e&&(L.callback=e),this},afterResult:function(e){return"function"==typeof e&&(L.postCallbackFn=e),this},useImageRequest:function(){return L.useImageRequest=!0,this},clearData:function(){return L={},this},submit:function(e){return L.isDefaultRequest=!!e,V.submitRequest(L),L={},this},getPartner:function(){return I},getContainerNSID:function(){return r},getEventLog:function(){return O},getState:function(){var e={},t={};return x.extendObject(e,A,{registerRequest:!0}),x.extendObject(t,T,{requestToProcess:!0,process:!0,sendMessages:!0}),{initConfig:n,pendingRequest:L,otherRequestInfo:e,destinationPublishingInfo:t,log:O}},idSync:function(){throw new Error("Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance")},aamIdSync:function(){throw new Error("Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance")},passData:function(e){return k.isEmptyObject(e)?"Error: json is empty or not an object":(V.defaultCallback(e),e)},getPlatformParams:function(){return A.platformParams},getEventCallConfigParams:function(){var e,t=A,n=t.modStatsParams,s=t.platformParams;if(!n){for(e in n={},s)s.hasOwnProperty(e)&&!t.nonModStatsParams[e]&&(n[e.replace(/^d_/,"")]=s[e]);!0===d?n.coop_safe=1:!1===d&&(n.coop_unsafe=1),t.modStatsParams=n}return n},setAsCoopSafe:function(){return d=!0,this},setAsCoopUnsafe:function(){return d=!1,this},getEventCallIabSignals:function(e){var t;return e!==Object(e)?"Error: config is not an object":"function"!=typeof e.callback?"Error: config.callback is not a function":(t=parseInt(e.timeout,10),isNaN(t)&&(t=null),void B.getQueryStringObject(e.callback,t))}},V={corsMetadata:(q="none","undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&"withCredentials"in new XMLHttpRequest&&(q="XMLHttpRequest"),{corsType:q}),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(e){return A.registerRequest(V.createQueuedRequest(e)),!0},createQueuedRequest:function(e){var t,n,s,i,r,o=e.callback,a="img",d=e.isDefaultRequest;if(delete e.isDefaultRequest,!k.isEmptyObject(u))for(s in u)if(u.hasOwnProperty(s)){if(null==(i=u[s])||""===i)continue;if(s in e&&!(i in e)&&!(i in A.reservedKeys)){if(null==(r=e[s])||""===r)continue;e[i]=r}}return k.isValidPdata(e.sids)||(e.sids=[]),k.isValidPdata(e.pdata)||(e.pdata=[]),k.isValidLogdata(e.logdata)||(e.logdata={}),e.logdataArray=x.convertObjectToKeyValuePairs(e.logdata,"=",!0),e.logdataArray.push("_ts="+(new Date).getTime()),"function"!=typeof o&&(o=this.defaultCallback),t=this.makeRequestSrcData(e),(n=this.getCORSInstance())&&!0!==e.useImageRequest&&(a="cors"),{tag:a,src:t.src,corsSrc:t.corsSrc,callbackFn:o,postCallbackFn:e.postCallbackFn,useImageRequest:!!e.useImageRequest,requestData:e,corsInstance:n,corsPostData:t.corsPostData,isDefaultRequest:d}},defaultCallback:function(e,t){var n,s,i,r,o,a,d,u,c;if(g&&(n=e.stuff)&&n instanceof Array&&(s=n.length))for(i=0;i<s;i++)(r=n[i])&&r===Object(r)&&(o=r.cn,a=r.cv,void 0!==(d=r.ttl)&&""!==d||(d=Math.floor(x.getMaxCookieExpiresInMinutes()/60/24)),u=r.dmn||"."+document.domain.replace(/^www\\./,""),c=r.type,o&&(a||"number"==typeof a)&&("var"!==c&&(d=parseInt(d,10))&&!isNaN(d)&&x.setCookie(o,a,24*d*60,"/",u,!1),P.stuffed[o]=a));var l,f,p=e.uuid;k.isPopulatedString(p)&&(k.isEmptyObject(h)||("string"==typeof(l=h.path)&&l.length||(l="/"),f=parseInt(h.days,10),isNaN(f)&&(f=100),x.setCookie(h.name||"aam_did",p,24*f*60,l,h.domain||"."+document.domain.replace(/^www\\./,""),!0===h.secure))),A.abortRequests||T.requestToProcess(e,t)},makeRequestSrcData:function(r){r.sids=k.removeEmptyArrayValues(r.sids||[]),r.pdata=k.removeEmptyArrayValues(r.pdata||[]);var o=A,e=o.platformParams,t=x.encodeAndBuildRequest(r.sids,","),n=x.encodeAndBuildRequest(r.pdata,","),s=(r.logdataArray||[]).join("&");delete r.logdataArray;var i,a,d=encodeURIComponent,u=E.IS_HTTPS?"https://":"http://",c=o.declaredId.getDeclaredIdQueryString(),l=o.adms.instance?o.adms.getCustomerIDsQueryString(o.adms.getCustomerIDs()):"",f=function(){var e,t,n,s,i=[];for(e in r)if(!(e in o.reservedKeys)&&r.hasOwnProperty(e))if(t=r[e],e=d(e),t instanceof Array)for(n=0,s=t.length;n<s;n++)i.push(e+"="+d(t[n]));else i.push(e+"="+d(t));return i.length?"&"+i.join("&"):""}(),p="d_dil_ver="+d(DIL.version),h="d_nsid="+e.d_nsid+o.getCoopQueryString()+c+l+(t.length?"&d_sid="+t:"")+(n.length?"&d_px="+n:"")+(s.length?"&d_ld="+d(s):""),g="&d_rtbd="+e.d_rtbd+"&d_jsonv="+e.d_jsonv+"&d_dst="+e.d_dst,m=y?"&h_referer="+d(location.href):"";return a=(i=u+I+".demdex.net/event")+"?"+p+"&"+h+g+f+m,{corsSrc:i+"?"+p+"&_ts="+(new Date).getTime(),src:a,corsPostData:h+g+f+m,isDeclaredIdCall:""!==c}},fireRequest:function(e){if("img"===e.tag)this.fireImage(e);else{var t=A.declaredId,n=t.declaredId.request||t.declaredId.init||{},s={dpid:n.dpid||"",dpuuid:n.dpuuid||""};this.fireCORS(e,s)}},fireImage:function(t){var e,n,s=A;s.abortRequests||(s.firing=!0,e=new Image(0,0),s.sent.push(t),e.onload=function(){s.firing=!1,s.fired.push(t),s.num_of_img_responses++,s.registerRequest()},n=function(e){c="imgAbortOrErrorHandler received the event of type "+e.type,R.log(c),s.abortRequests=!0,s.firing=!1,s.errored.push(t),s.num_of_img_errors++,s.registerRequest()},e.addEventListener("error",n),e.addEventListener("abort",n),e.src=t.src)},fireCORS:function(s,i){var r=this,o=A,e=this.corsMetadata.corsType,t=s.corsSrc,n=s.corsInstance,a=s.corsPostData,d=s.postCallbackFn,u="function"==typeof d;if(!o.abortRequests&&!v){o.firing=!0;try{n.open("post",t,!0),"XMLHttpRequest"===e&&(n.withCredentials=!0,n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){4===this.readyState&&200===this.status&&function(e){var t;try{if((t=JSON.parse(e))!==Object(t))return r.handleCORSError(s,i,"Response is not JSON")}catch(e){return r.handleCORSError(s,i,"Error parsing response as JSON")}try{var n=s.callbackFn;o.firing=!1,o.fired.push(s),o.num_of_cors_responses++,n(t,i),u&&d(t,i)}catch(e){e.message="DIL handleCORSResponse caught error with message "+e.message,c=e.message,R.log(c),e.filename=e.filename||"dil.js",e.partner=I,DIL.errorModule.handleError(e);try{n({error:e.name+"|"+e.message},i),u&&d({error:e.name+"|"+e.message},i)}catch(e){}}finally{o.registerRequest()}}(this.responseText)}),n.onerror=function(){r.handleCORSError(s,i,"onerror")},n.ontimeout=function(){r.handleCORSError(s,i,"ontimeout")},n.send(a)}catch(e){this.handleCORSError(s,i,"try-catch")}o.sent.push(s),o.declaredId.declaredId.request=null}},handleCORSError:function(e,t,n){A.num_of_cors_errors++,A.corsErrorSources.push(n)}},k={isValidPdata:function(e){return!!(e instanceof Array&&this.removeEmptyArrayValues(e).length)},isValidLogdata:function(e){return!this.isEmptyObject(e)},isEmptyObject:function(e){if(e!==Object(e))return!0;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0},removeEmptyArrayValues:function(e){var t,n=0,s=e.length,i=[];for(n=0;n<s;n++)null!=(t=e[n])&&""!==t&&i.push(t);return i},isPopulatedString:function(e){return"string"==typeof e&&e.length}},x={convertObjectToKeyValuePairs:function(e,t,n){var s,i,r=[];for(s in t||(t="="),e)e.hasOwnProperty(s)&&null!=(i=e[s])&&""!==i&&r.push(s+t+(n?encodeURIComponent(i):i));return r},encodeAndBuildRequest:function(e,t){return e.map(function(e){return encodeURIComponent(e)}).join(t)},getCookie:function(e){var t,n,s,i=e+"=",r=document.cookie.split(";");for(t=0,n=r.length;t<n;t++){for(s=r[t];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(i))return decodeURIComponent(s.substring(i.length,s.length))}return null},setCookie:function(e,t,n,s,i,r){var o=new Date;n&&(n=1e3*n*60),document.cookie=e+"="+encodeURIComponent(t)+(n?";expires="+new Date(o.getTime()+n).toUTCString():"")+(s?";path="+s:"")+(i?";domain="+i:"")+(r?";secure":"")},extendArray:function(e,t){return e instanceof Array&&t instanceof Array&&(Array.prototype.push.apply(e,t),!0)},extendObject:function(e,t,n){var s;if(e!==Object(e)||t!==Object(t))return!1;for(s in t)if(t.hasOwnProperty(s)){if(!k.isEmptyObject(n)&&s in n)continue;e[s]=t[s]}return!0},getMaxCookieExpiresInMinutes:function(){return E.SIX_MONTHS_IN_MINUTES},replaceMethodsWithFunction:function(e,t){var n;if(e===Object(e)&&"function"==typeof t)for(n in e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t)}},N=(j=C.requestController,{exists:null,instance:null,aamIsApproved:null,init:function(){var e=this;this.checkIfExists()?(this.exists=!0,this.instance=window.adobe.optIn,this.instance.fetchPermissions(function(){e.callback()},!0)):this.exists=!1},checkIfExists:function(){return window.adobe===Object(window.adobe)&&window.adobe.optIn===Object(window.adobe.optIn)},callback:function(){this.aamIsApproved=this.instance.isApproved([this.instance.Categories.AAM]),j.adms.waitForMidToReleaseRequests(),j.adms.getIsOptedOut()},isApproved:function(){return!this.isIabContext()&&!j.adms.isOptedOut&&(!this.exists||this.aamIsApproved)},isIabContext:function(){return this.instance&&this.instance.isIabContext}});C.optIn=N;var F,Q,H,U,B=(Q=(F=C).requestController,H=F.optIn,U={isVendorConsented:null,doesGdprApply:null,consentString:null,queryStringObjectCallbacks:[],init:function(){this.fetchConsentData()},hasGoSignal:function(){return!(!(H.isIabContext()&&this.isVendorConsented&&this.doesGdprApply&&"string"==typeof this.consentString&&this.consentString.length)||Q.adms.isOptedOut)},fetchConsentData:function(n,e){var s=this,t={};"function"!=typeof n&&(n=function(){}),H.instance&&H.isIabContext()?(e&&(t.timeout=e),H.instance.execute({command:"iabPlugin.fetchConsentData",params:t,callback:function(e,t){t===Object(t)?(s.doesGdprApply=!!t.gdprApplies,s.consentString=t.consentString||""):(s.doesGdprApply=!1,s.consentString=""),s.isVendorConsented=H.instance.isApproved(H.instance.Categories.AAM),e?n({}):s.checkQueryStringObject(n),Q.adms.waitForMidToReleaseRequests()}})):n({})},getQueryString:function(){return H.isIabContext()?"gdpr="+(this.doesGdprApply?1:0)+"&gdpr_consent="+this.consentString+"&":""},getQueryStringObject:function(e,t){this.fetchConsentData(e,t)},checkQueryStringObject:function(e){U.hasGoSignal()&&"function"==typeof e&&e({gdpr:this.doesGdprApply?1:0,gdpr_consent:this.consentString})}});C.iab=B,"error"===I&&0===r&&window.addEventListener("load",function(){DIL.windowLoaded=!0});var G=!1,W=function(){G||(G=!0,A.registerRequest(),X())},X=function(){setTimeout(function(){p||A.firstRequestHasFired||("function"==typeof m?M.afterResult(m).submit(!0):M.submit(!0))},DIL.constants.TIME_TO_DEFAULT_REQUEST)},K=document;"error"!==I&&(DIL.windowLoaded?W():"complete"!==K.readyState&&"loaded"!==K.readyState?window.addEventListener("load",function(){DIL.windowLoaded=!0,W()}):(DIL.windowLoaded=!0,W())),A.declaredId.setDeclaredId(s,"init"),N.init(),B.init(),A.processVisitorAPI();E.IS_IE_LESS_THAN_10&&x.replaceMethodsWithFunction(M,function(){return this}),this.api=M,this.getStuffedVariable=function(e){var t=P.stuffed[e];return t||"number"==typeof t||(t=x.getCookie(e))||"number"==typeof t||(t=""),t},this.validators=k,this.helpers=x,this.constants=E,this.log=O,this.pendingRequest=L,this.requestController=A,this.destinationPublishing=T,this.requestProcs=V,this.units=C,this.initConfig=n,this.logger=R,w&&(this.variables=P,this.callWindowLoadFunctions=W)},DIL.extendStaticPropertiesAndMethods=function(e){var t;if(e===Object(e))for(t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},DIL.extendStaticPropertiesAndMethods({version:"9.3",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:500},variables:{scriptNodeList:document.getElementsByTagName("script")},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(){var e=arguments[0];this.windowLoaded="function"==typeof e?!!e():"boolean"!=typeof e||e},create:function(e){try{return new DIL(e)}catch(e){throw new Error("Error in attempt to create DIL instance with DIL.create(): "+e.message)}},registerDil:function(e,t,n){var s=t+"$"+n;s in this.dils||(this.dils[s]=e)},getDil:function(e,t){var n;return"string"!=typeof e&&(e=""),t||(t=0),(n=e+"$"+t)in this.dils?this.dils[n]:new Error("The DIL instance with partner = "+e+" and containerNSID = "+t+" was not found")},dexGetQSVars:function(e,t,n){var s=this.getDil(t,n);return s instanceof this?s.getStuffedVariable(e):""}}),DIL.errorModule=(r=DIL.create({partner:"error",containerNSID:0,ignoreHardDependencyOnVisitorAPI:!0}),a=!(o={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020}),{activate:function(){a=!0},handleError:function(e){if(!a)return"DIL error module has not been activated";e!==Object(e)&&(e={});var t=e.name?(e.name+"").toLowerCase():"",n=t in o?o[t]:o.noerrortypedefined,s=[],i={name:t,filename:e.filename?e.filename+"":"",partner:e.partner?e.partner+"":"no_partner",site:e.site?e.site+"":document.location.href,message:e.message?e.message+"":""};return s.push(n),r.api.pixels(s).logs(i).useImageRequest().submit(),"DIL error report sent"},pixelMap:o}),DIL.tools={},DIL.modules={helpers:{}})}();\n/*\n End AudienceManagement Module\n */\n\n/*\n ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============\n\nAppMeasurement for JavaScript version: 2.17.0\nCopyright 1996-2016 Adobe, Inc. All Rights Reserved\nMore info available at http://www.adobe.com/marketing-cloud.html\n*/\nfunction AppMeasurement(r){var a=this;a.version="2.17.0";var h=window;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;a._c="s_c";var q=h.AppMeasurement.ec;q||(q=null);var p=h,m,s;try{for(m=p.parent,s=p.location;m&&m.location&&s&&""+m.location!=""+s&&p.location&&""+m.location!=""+p.location&&m.location.host==s.host;)p=m,m=p.parent}catch(u){}a.C=function(a){try{console.log(a)}catch(b){}};a.Pa=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||\n0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()\'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.Kb=function(){var c=h.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.Ia&&!/^[0-9.]+$/.test(c)&&\n(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ia=0<d?c.substring(d):c}return a.Ia};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.Kb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?\n(d=new Date,d.setTime(d.getTime()+1E3*g)):1===d&&(d=new Date,g=d.getYear(),d.setYear(g+2+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.Hb=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.ub(a,function(){}))};a.ub=function(a,b){for(var d in a)a.hasOwnProperty(d)&&"function"===typeof a[d]&&(a[d]=b)};\na.K=[];a.ea=function(c,b,d){if(a.Ja)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.fa)for(a.fa=1,d=0;d<k.length;d++)a.d.addEventListener(k[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.fa=0,a.delayReady())});f=1;e=0}else d||a.u("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.fa||setTimeout(a.delayReady,\na.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.u("_d")?b=1:a.ya();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Ja=1;a[d.m].apply(a,d.a);a.Ja=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ea("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=\nc.split(",")};a.foreachVar=function(c,b){var d,f,e,g,k="";e=f="";if(a.lightProfileID)d=a.O,(k=a.lightTrackVars)&&(k=","+k+","+a.ka.join(",")+",");else{d=a.g;if(a.pe||a.linkType)k=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(k=a[e].ac,f=a[e].$b));k&&(k=","+k+","+a.F.join(",")+",");f&&k&&(k+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!k||0<=k.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.o=function(c,\nb,d,f,e){var g="",k,l,h,n,m=0;"contextData"==c&&(c="c");if(b){for(k in b)if(!(Object.prototype[k]||e&&k.substring(0,e.length)!=e)&&b[k]&&(!d||0<=d.indexOf(","+(f?f+".":"")+k+","))){h=!1;if(m)for(l=0;l<m.length;l++)if(k.substring(0,m[l].length)==m[l]){h=!0;break}if(!h&&(""==g&&(g+="&"+c+"."),l=b[k],e&&(k=k.substring(e.length)),0<k.length))if(h=k.indexOf("."),0<h)l=k.substring(0,h),h=(e?e:"")+l+".",m||(m=[]),m.push(h),g+=a.o(l,b,d,f,h);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==\nf&&0>e.indexOf(".contextData."))switch(h=k.substring(0,4),n=k.substring(4),k){case "transactionID":k="xact";break;case "channel":k="ch";break;case "campaign":k="v0";break;default:a.Pa(n)&&("prop"==h?k="c"+n:"eVar"==h?k="v"+n:"list"==h?k="l"+n:"hier"==h&&(k="h"+n,l=l.substring(0,255)))}g+="&"+a.escape(k)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.Nb=function(){var c="",b,d,f,e,g,k,l,h,n="",m="",p=e="",r=a.T();if(a.lightProfileID)b=a.O,(n=a.lightTrackVars)&&(n=","+n+","+a.ka.join(",")+\n",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].ac,m=a[e].$b));n&&(n=","+n+","+a.F.join(",")+",");m&&(m=","+m+",",n&&(n+=",events,"));a.events2&&(p+=(""!=p?",":"")+a.events2)}if(r&&r.getCustomerIDs){e=q;if(g=r.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.o("cid",e))}a.AudienceManagement&&\na.AudienceManagement.isReady()&&(c+=a.o("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);k=e.substring(4);g||("events"==e&&p?(g=p,p=""):"marketingCloudOrgID"==e&&r&&a.V("ECID")&&(g=r.marketingCloudOrgID));if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e=\n"D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&\na.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;\ncase "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":p&&(g+=(""!=g?",":"")+p);if(m)for(k=g.split(","),g="",f=0;f<k.length;f++)l=k[f],h=l.indexOf("="),0<=h&&(l=l.substring(0,h)),h=l.indexOf(":"),0<=h&&(l=l.substring(0,h)),0<=m.indexOf(","+l+",")&&(g+=\n(g?",":"")+k[f]);break;case "events2":g="";break;case "contextData":c+=a.o("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.o("mts",a[e],n,e));g="";break;default:a.Pa(k)&&("prop"==f?e="c"+k:"eVar"==f?e="v"+k:"list"==\nf?e="l"+k:"hier"==f&&(e="h"+k,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}a.ja&&(c+="&lrt="+a.ja,a.ja=null);return c};a.B=function(a){var b=a.tagName;if("undefined"!=""+a.hc||"undefined"!=""+a.Wb&&"HTML"!=(""+a.Wb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.La=function(a){var b=h.location,\nd=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.L=function(c){var b=a.B(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+\nf,"\\r",""),"\\n",""),"\\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.La(c),e)?{id:e.substring(0,100),type:g}:0};a.fc=function(c){for(var b=a.B(c),d=a.L(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.B(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Vb=function(){var c,b,d=a.linkObject,\nf=a.linkType,e=a.linkURL,g,k;a.la=1;d||(a.la=0,d=a.clickObject);if(d){c=a.B(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.B(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0}}else a.la=1;!e&&d&&(e=a.La(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,n=0,p;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),\ng=l.indexOf("?"),k=l.indexOf("#"),0<=g?0<=k&&k<g&&(g=k):g=k,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),k=0;k<g.length;k++)(p=g[k])&&l.substring(l.length-(p.length+1))=="."+p&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.Oa(l)&&(a.linkInternalFilters||(a.linkInternalFilters=h.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(k=\n0;k<g.length;k++)p=g[k],0<=l.indexOf(p)&&(n=1);n?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),h.s_objectID&&(b.id=h.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Ob=function(){var c=a.la,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||\nf)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.Rb()){var b={},d=0,e=a.pb(),g=e?e.split("&"):0,k,l,h,e=0;if(g)for(k=0;k<g.length;k++)l=g[k].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");k={};for(h in a.contextData)h&&!Object.prototype[h]&&"a.activitymap."==h.substring(0,14)&&(k[h]=a.contextData[h],a.contextData[h]="");a.e=a.o("c",k)+\n(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(h=0;h<f.length;h++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),k=0;k<b[l].length;k++)g=b[l][k],g==f[h]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(k,1),d=1);c||(d=1);if(d){e="";k=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),k=1);for(l in b)!Object.prototype[l]&&0<k&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+a.escape(l),\nk--);a.wb(e)}}}return c};a.pb=function(){if(a.useLinkTrackSessionStorage){if(a.Ca())return h.sessionStorage.getItem(a.P)}else return a.cookieRead(a.P)};a.Ca=function(){return h.sessionStorage?!0:!1};a.wb=function(c){a.useLinkTrackSessionStorage?a.Ca()&&h.sessionStorage.setItem(a.P,c):a.cookieWrite(a.P,c)};a.Pb=function(){if(!a.Zb){var c=new Date,b=p.location,d,f,e=f=d="",g="",k="",l="1.2",h=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",q="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l=\n"1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;k=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.gc(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),\nq=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=h;a.browserWidth=g;a.browserHeight=k;a.connectionType=q;a.homepage=m;a.Zb=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=h["AppMeasurement_Module_"+c]?new h["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.ib=function(){return d.sb};d.xb=function(b){if(d.sb=b)a[c+"_onLoad"]=b,a.ea(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",\n{get:d.ib,set:d.xb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ea(c+"_onLoad",[a,d],1)||b(a,d))};a.u=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Rb=function(){return a.ActivityMap&&a.ActivityMap._c?!0:!1};a.Sb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);\nif(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.S=function(c,b){var d,f,e,g,k,h,m;m={};for(d=0;2>d;d++)for(f=0<d?a.Ea:a.g,e=0;e<f.length;e++)if(g=f[e],(k=c[g])||c["!"+g]){if(k&&!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(h in a[g])k[h]||(k[h]=a[g][h]);a[g]||(m["!"+g]=1);m[g]=a[g];a[g]=k}return m};a.cc=function(c){var b,d,f,e;for(b=0;2>b;b++)for(d=0<b?a.Ea:a.g,f=0;f<d.length;f++)e=d[f],c[e]=a[e],c[e]||"prop"!==e.substring(0,4)&&\n"eVar"!==e.substring(0,4)&&"hier"!==e.substring(0,4)&&"list"!==e.substring(0,4)&&"channel"!==e&&"events"!==e&&"eventList"!==e&&"products"!==e&&"productList"!==e&&"purchaseID"!==e&&"transactionID"!==e&&"state"!==e&&"zip"!==e&&"campaign"!==e&&"events2"!==e&&"latitude"!==e&&"longitude"!==e&&"ms_a"!==e&&"contextData"!==e&&"supplementalDataID"!==e&&"tnt"!==e&&"timestamp"!==e&&"abort"!==e&&"useBeacon"!==e&&"linkObject"!==e&&"clickObject"!==e&&"linkType"!==e&&"linkName"!==e&&"linkURL"!==e&&"bodyClickTarget"!==\ne&&"bodyClickFunction"!==e||(c["!"+e]=1)};a.Jb=function(a){var b,d,f,e,g,k=0,h,m="",n="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(h=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")?k=",p,ei,":0<=e.indexOf("baidu.")&&(k=",wd,word,"),k&&h)))){if((a=\nh.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?m+=(m?"&":"")+e:n+=(n?"&":"")+e;m&&n?h=m+"&"+n:n=""}d=253-(h.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+h}return a};a.bb=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);\n"visible"==b&&c()});return!1}return!0};a.ba=!1;a.H=!1;a.zb=function(){a.H=!0;a.p()};a.I=!1;a.Ab=function(c){a.marketingCloudVisitorID=c.MCMID;a.visitorOptedOut=c.MCOPTOUT;a.analyticsVisitorID=c.MCAID;a.audienceManagerLocationHint=c.MCAAMLH;a.audienceManagerBlob=c.MCAAMB;a.I=!1;a.p()};a.ab=function(c){a.maxDelay||(a.maxDelay=250);return a.u("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.Z=!1;a.G=!1;a.ya=function(){a.G=!0;a.p()};a.isReadyToTrack=function(){var c=!0;if(!a.mb()||!a.kb())return!1;\na.ob()||(c=!1);a.rb()||(c=!1);return c};a.mb=function(){a.ba||a.H||(a.bb(a.zb)?a.H=!0:a.ba=!0);return a.ba&&!a.H?!1:!0};a.kb=function(){var c=a.va();if(c)if(a.ra||a.aa)if(a.ra){if(!c.isApproved(c.Categories.ANALYTICS))return!1}else return!1;else return c.fetchPermissions(a.tb,!0),a.aa=!0,!1;return!0};a.V=function(c){var b=a.va();return b&&!b.isApproved(b.Categories[c])?!1:!0};a.va=function(){return h.adobe&&h.adobe.optIn?h.adobe.optIn:null};a.Y=!0;a.ob=function(){var c=a.T();if(!c||!c.getVisitorValues)return!0;\na.Y&&(a.Y=!1,a.I||(a.I=!0,c.getVisitorValues(a.Ab)));return!a.I};a.T=function(){var c=a.visitor;c&&!c.isAllowed()&&(c=null);return c};a.rb=function(){a.Z||a.G||(a.ab(a.ya)?a.G=!0:a.Z=!0);return a.Z&&!a.G?!1:!0};a.aa=!1;a.tb=function(){a.aa=!1;a.ra=!0};a.j=q;a.q=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.Eb=c;f.Db=b;f.Bb=d;a.j==q&&(a.j=[]);a.j.push(f);0==a.q&&(a.q=setInterval(a.p,100))};a.p=function(){var c;if(a.isReadyToTrack()&&(a.yb(),a.j!=q))for(;0<a.j.length;)c=a.j.shift(),c.Db.apply(c.Eb,\nc.Bb)};a.yb=function(){a.q&&(clearInterval(a.q),a.q=0)};a.ta=function(c){var b,d={};a.cc(d);if(c!=q)for(b in c)d[b]=c[b];a.callbackWhenReadyToTrack(a,a.Da,[d]);a.Ba()};a.Lb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.Da=function(c){var b=new Date,\nd="s"+Math.floor(b.getTime()/108E5)%10+Math.floor(1E13*Math.random()),f=b.getYear(),f="t="+a.escape(b.getDate()+"/"+b.getMonth()+"/"+(1900>f?f+1900:f)+" "+b.getHours()+":"+b.getMinutes()+":"+b.getSeconds()+" "+b.getDay()+" "+b.getTimezoneOffset()),e=a.T(),g;c&&(g=a.S(c,1));a.Sb()&&!a.visitorOptedOut&&(a.wa()||(a.fid=a.Lb()),a.Vb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(b.getTime()/1E3)),c=h.location,a.pageURL||(a.pageURL=\nc.href?c.href:c),a.referrer||a.Za||(c=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=c||void 0===c?void 0===c?"":c:p.document.referrer),a.Za=1,a.referrer=a.Jb(a.referrer),a.u("_g")),a.Ob()&&!a.abort&&(e&&a.V("TARGET")&&!a.supplementalDataID&&e.getSupplementalDataID&&(a.supplementalDataID=e.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.V("AAM")||(a.contextData["cm.ssf"]=1),a.Pb(),f+=a.Nb(),a.qb(d,f),a.u("_t"),a.referrer="")));a.Ba();g&&a.S(g,1)};a.t=\na.track=function(c,b){b&&a.S(b);a.Y=!0;a.isReadyToTrack()?null!=a.j&&0<a.j.length?(a.ta(c),a.p()):a.Da(c):a.ta(c)};a.Ba=function(){a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=h.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=a.useBeacon=a.referrer=0};a.Aa=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Aa.push([c,b]):a.debugTracking&&a.C("DEBUG: Non function type passed to registerPreTrackCallback")};\na.fb=function(c){a.ua(a.Aa,c)};a.za=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.za.push([c,b]):a.debugTracking&&a.C("DEBUG: Non function type passed to registerPostTrackCallback")};a.eb=function(c){a.ua(a.za,c)};a.ua=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1].slice();e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.C(g.message)}}};a.tl=\na.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.bodyClickTarget=c,a.bodyClickFunction=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||\n"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.qb=function(c,b){var d=a.gb()+"/"+c+"?AQB=1&ndh=1&pf=1&"+(a.xa()?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.fb(d);a.cb(d);a.U()};a.gb=function(){var c=a.hb();return"http"+(a.ssl?"s":"")+"://"+c+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(a.xa()?"10":"1")+"/JS-"+a.version+(a.Yb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")};a.xa=function(){return a.AudienceManagement&&\na.AudienceManagement.isReady()||0!=a.usePostbacks};a.hb=function(){var c=a.dc,b=a.trackingServer;b?a.trackingServerSecure&&a.ssl&&(b=a.trackingServerSecure):(c=c?(""+c).toLowerCase():"d1","d1"==c?c="112":"d2"==c&&(c="122"),b=a.jb()+"."+c+".2o7.net");return b};a.jb=function(){var c=a.visitorNamespace;c||(c=a.account.split(",")[0],c=c.replace(/[^0-9a-z]/gi,""));return c};a.Ya=/{(%?)(.*?)(%?)}/;a.bc=RegExp(a.Ya.source,"g");a.Ib=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=\nc.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.bc),e=0;e<f.length;++e){var g=f[e],k=g.match(a.Ya),h="";"%"==k[1]&&"timezone_offset"==k[2]?h=(new Date).getTimezoneOffset():"%"==k[1]&&"timestampz"==k[2]&&(h=a.Mb());d.c=d.c.replace(g,a.escape(h))}}};a.Mb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+\n(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.pa={};a.doPostbacks=function(c){if("object"==typeof c)if(a.Ib(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=\nc.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.pa[d.id]=new Image,a.pa[d.id].alt="",a.pa[d.id].src=d.c)}};a.cb=function(c){a.i||a.Qb();a.i.push(c);a.ia=a.A();a.Wa()};a.Qb=function(){a.i=a.Tb();a.i||(a.i=[])};a.Tb=function(){var c,b;if(a.oa()){try{(b=h.localStorage.getItem(a.ma()))&&(c=h.JSON.parse(b))}catch(d){}return c}};a.oa=function(){var c=!0;a.trackOffline&&a.offlineFilename&&h.localStorage&&h.JSON||(c=!1);return c};a.Ma=function(){var c=\n0;a.i&&(c=a.i.length);a.l&&c++;return c};a.U=function(){if(a.l&&(a.v&&a.v.complete&&a.v.D&&a.v.R(),a.l))return;a.Na=q;if(a.na)a.ia>a.N&&a.Ua(a.i),a.qa(500);else{var c=a.Cb();if(0<c)a.qa(c);else if(c=a.Ka())a.l=1,a.Ub(c),a.Xb(c)}};a.qa=function(c){a.Na||(c||(c=0),a.Na=setTimeout(a.U,c))};a.Cb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.A()-a.Sa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ka=function(){if(0<a.i.length)return a.i.shift()};a.Ub=function(c){if(a.debugTracking){var b=\n"AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\\n\\t"+a.unescape(c[d]);a.C(b)}};a.wa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.X=!1;var t;try{t=JSON.parse(\'{"x":"y"}\')}catch(w){t=null}t&&"y"==t.x?(a.X=!0,a.W=function(a){return JSON.parse(a)}):h.$&&h.$.parseJSON?(a.W=function(a){return h.$.parseJSON(a)},a.X=!0):a.W=function(){return null};a.Xb=function(c){var b,d,f;a.lb(c)&&(d=1,b={send:function(c){a.useBeacon=!1;navigator.sendBeacon(c)?b.R():b.ga()}});\n!b&&a.wa()&&2047<c.length&&(a.$a()&&(d=2,b=new XMLHttpRequest),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.X?b.Fa=!0:b=0));!b&&a.Xa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||\n"undefined"===typeof h.InstallTrigger||(b.abort=function(){b.src=q}));b.Ta=Date.now();b.Ha=function(){try{b.D&&(clearTimeout(b.D),b.D=0)}catch(a){}};b.onload=b.R=function(){b.Ta&&(a.ja=Date.now()-b.Ta);a.eb(c);b.Ha();a.Gb();a.ca();a.l=0;a.U();if(b.Fa){b.Fa=!1;try{a.doPostbacks(a.W(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.ga=function(){b.Ha();(a.trackOffline||a.na)&&a.l&&a.i.unshift(a.Fb);a.l=0;a.ia>a.N&&a.Ua(a.i);a.ca();a.qa(500)};b.onreadystatechange=function(){4==b.readyState&&(200==\nb.status?b.R():b.ga())};a.Sa=a.A();if(1===d)b.send(c);else if(2===d)f=c.indexOf("?"),d=c.substring(0,f),f=c.substring(f+1),f=f.replace(/&callback=[a-zA-Z0-9_.\\[\\]]+/,""),b.open("POST",d,!0),b.withCredentials=!0,b.send(f);else if(b.src=c,3===d){if(a.Qa)try{f.removeChild(a.Qa)}catch(e){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Qa=a.v}b.D=setTimeout(function(){b.D&&(b.complete?b.R():(a.trackOffline&&b.abort&&b.abort(),b.ga()))},5E3);a.Fb=c;a.v=h["s_i_"+a.replace(a.account,",","_")]=\nb;if(a.useForcedLinkTracking&&a.J||a.bodyClickFunction)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.da=setTimeout(a.ca,a.forcedLinkTrackingTimeout)};a.lb=function(c){var b=!1;navigator.sendBeacon&&(a.nb(c)?b=!0:a.useBeacon&&(b=!0));a.vb(c)&&(b=!1);return b};a.nb=function(a){return a&&0<a.indexOf("pe=lnk_e")?!0:!1};a.vb=function(a){return 64E3<=a.length};a.$a=function(){return"undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?!0:!1};a.Gb=function(){if(a.oa()&&\n!(a.Ra>a.N))try{h.localStorage.removeItem(a.ma()),a.Ra=a.A()}catch(c){}};a.Ua=function(c){if(a.oa()){a.Wa();try{h.localStorage.setItem(a.ma(),h.JSON.stringify(c)),a.N=a.A()}catch(b){}}};a.Wa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ka()}};a.forceOffline=function(){a.na=!0};a.forceOnline=function(){a.na=!1};a.ma=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.A=function(){return(new Date).getTime()};\na.Oa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Yb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.S(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=\n0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:h.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+\nc+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var b=document.createElement("div");b.innerHTML="\\x3c!--[if IE "+a+"]><span></span><![endif]--\\x3e";if(b.getElementsByTagName("span").length)return a}return null}};a.F="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");\na.g=a.F.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ka="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.ka.slice(0);a.Ea="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" ");\nfor(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.O.push("prop"+m)),a.g.push("eVar"+m),a.O.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" ");a.g=a.g.concat(m);a.F=a.F.concat(m);a.ssl=0<=h.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=\n0;a.offlineFilename="AppMeasurement.offline";a.P="s_sq";a.Sa=0;a.ia=0;a.N=0;a.Ra=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=h;a.d=h.document;try{if(a.Xa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Xa=!0}}catch(x){}a.ca=function(){a.da&&(h.clearTimeout(a.da),a.da=q);a.bodyClickTarget&&a.J&&a.bodyClickTarget.dispatchEvent(a.J);\na.bodyClickFunction&&("function"==typeof a.bodyClickFunction?a.bodyClickFunction():a.bodyClickTarget&&a.bodyClickTarget.href&&(a.d.location=a.bodyClickTarget.href));a.bodyClickTarget=a.J=a.bodyClickFunction=0};a.Va=function(){a.b=a.d.body;a.b?(a.r=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ga)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.r,!1);else{a.b.removeEventListener("click",a.r,!0);a.Ga=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=\n0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=0;else{var k=a.M=a.clickObject;a.ha&&(clearTimeout(a.ha),a.ha=0);a.ha=setTimeout(function(){a.M==k&&(a.M=0)},1E4);f=a.Ma();a.track();if(f<a.Ma()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Oa(g)||\n(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||h.name&&d==h.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=new h.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.bodyClickTarget=\nc.target,a.J=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.r):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&h.MouseEvent)&&(a.Ga=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.r,!0)),a.b.addEventListener("click",a.r,!1))):setTimeout(a.Va,30)};a.Hb();a.ic||(r?a.setAccount(r):a.C("Error, missing Report Suite ID in AppMeasurement initialization"),a.Va(),\na.loadModule("ActivityMap"))}function s_gi(r){var a,h=window.s_c_il,q,p,m=r.split(","),s,u,t=0;if(h)for(q=0;!t&&q<h.length;){a=h[q];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(p=a.account?a.account:a.oun,p=a.allAccounts?a.allAccounts:p.split(","),s=0;s<m.length;s++)for(u=0;u<p.length;u++)m[s]==p[u]&&(t=1);q++}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement(r);return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);\nfunction s_pgicq(){var r=window,a=r.s_giq,h,q,p;if(a)for(h=0;h<a.length;h++)q=a[h],p=s_gi(q.oun),p.setAccount(q.un),p.setTagContainer(q.tagContainerName);r.s_giq=0}s_pgicq();\n/**\n * @license\n * Adobe Visitor API for JavaScript version: 4.4.0\n * Copyright 2019 Adobe, Inc. All Rights Reserved\n * More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/\n */\nvar e=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var n=this.callbacks[e].push(t)-1,i=this;return function(){i.callbacks[e].splice(n,1)}},execute:function(e,t){if(this.callbacks[e]){t=void 0===t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var n=this.callbacks[e].shift();"function"==typeof n?n.apply(null,t):n instanceof Array&&n[1].apply(n[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!j.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var n=void 0!==e[t]?e[t]:"";this.execute(t,n)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}function i(e,t,n){var i=null==e?void 0:e[t];return void 0===i?n:i}function r(e){for(var t=/^\\d+$/,n=0,i=e.length;n<i;n++)if(!t.test(e[n]))return!1;return!0}function a(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function o(e,t){for(var n=0;n<e.length;n++){var i=parseInt(e[n],10),r=parseInt(t[n],10);if(i>r)return 1;if(r>i)return-1}return 0}function s(e,t){if(e===t)return 0;var n=e.toString().split("."),i=t.toString().split(".");return r(n.concat(i))?(a(n,i),o(n,i)):NaN}function l(e){return e===Object(e)&&0===Object.keys(e).length}function c(e){return"function"==typeof e||e instanceof Array&&e.length}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};this.log=_e("log",e,t),this.warn=_e("warn",e,t),this.error=_e("error",e,t)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isEnabled,n=e.cookieName,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.cookies;return t&&n&&r?{remove:function(){r.remove(n)},get:function(){var e=r.get(n),t={};try{t=JSON.parse(e)}catch(e){t={}}return t},set:function(e,t){t=t||{},r.set(n,JSON.stringify(e),{domain:t.optInCookieDomain||"",cookieLifetime:t.optInStorageExpiry||3419e4,expires:!0})}}:{get:Le,set:Le,remove:Le}}function f(e){this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}function p(){function e(e,t){var n=Se(e);return n.length?n.every(function(e){return!!t[e]}):De(t)}function t(){M(b),O(ce.COMPLETE),_(h.status,h.permissions),m.set(h.permissions,{optInCookieDomain:l,optInStorageExpiry:c}),C.execute(xe)}function n(e){return function(n,i){if(!Ae(n))throw new Error("[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.");return O(ce.CHANGED),Object.assign(b,ye(Se(n),e)),i||t(),h}}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.doesOptInApply,a=i.previousPermissions,o=i.preOptInApprovals,s=i.isOptInStorageEnabled,l=i.optInCookieDomain,c=i.optInStorageExpiry,u=i.isIabContext,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=f.cookies,g=Pe(a);Re(g,"Invalid `previousPermissions`!"),Re(o,"Invalid `preOptInApprovals`!");var m=d({isEnabled:!!s,cookieName:"adobeujs-optin"},{cookies:p}),h=this,_=le(h),C=ge(),I=Me(g),v=Me(o),S=m.get(),D={},A=function(e,t){return ke(e)||t&&ke(t)?ce.COMPLETE:ce.PENDING}(I,S),y=function(e,t,n){var i=ye(pe,!r);return r?Object.assign({},i,e,t,n):i}(v,I,S),b=be(y),O=function(e){return A=e},M=function(e){return y=e};h.deny=n(!1),h.approve=n(!0),h.denyAll=h.deny.bind(h,pe),h.approveAll=h.approve.bind(h,pe),h.isApproved=function(t){return e(t,h.permissions)},h.isPreApproved=function(t){return e(t,v)},h.fetchPermissions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?h.on(ce.COMPLETE,e):Le;return!r||r&&h.isComplete||!!o?e(h.permissions):t||C.add(xe,function(){return e(h.permissions)}),n},h.complete=function(){h.status===ce.CHANGED&&t()},h.registerPlugin=function(e){if(!e||!e.name||"function"!=typeof e.onRegister)throw new Error(je);D[e.name]||(D[e.name]=e,e.onRegister.call(e,h))},h.execute=Ne(D),Object.defineProperties(h,{permissions:{get:function(){return y}},status:{get:function(){return A}},Categories:{get:function(){return ue}},doesOptInApply:{get:function(){return!!r}},isPending:{get:function(){return h.status===ce.PENDING}},isComplete:{get:function(){return h.status===ce.COMPLETE}},__plugins:{get:function(){return Object.keys(D)}},isIabContext:{get:function(){return u}}})}function g(e,t){function n(){r=null,e.call(e,new f("The call took longer than you wanted!"))}function i(){r&&(clearTimeout(r),e.apply(e,arguments))}if(void 0===t)return e;var r=setTimeout(n,t);return i}function m(){if(window.__cmp)return window.__cmp;var e=window;if(e===window.top)return void Ie.error("__cmp not found");for(var t;!t;){e=e.parent;try{e.frames.__cmpLocator&&(t=e)}catch(e){}if(e===window.top)break}if(!t)return void Ie.error("__cmp not found");var n={};return window.__cmp=function(e,i,r){var a=Math.random()+"",o={__cmpCall:{command:e,parameter:i,callId:a}};n[a]=r,t.postMessage(o,"*")},window.addEventListener("message",function(e){var t=e.data;if("string"==typeof t)try{t=JSON.parse(e.data)}catch(e){}if(t.__cmpReturn){var i=t.__cmpReturn;n[i.callId]&&(n[i.callId](i.returnValue,i.success),delete n[i.callId])}},!1),window.__cmp}function h(){var e=this;e.name="iabPlugin",e.version="0.0.1";var t=ge(),n={allConsentData:null},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n[e]=t};e.fetchConsentData=function(e){var t=e.callback,n=e.timeout,i=g(t,n);r({callback:i})},e.isApproved=function(e){var t=e.callback,i=e.category,a=e.timeout;if(n.allConsentData)return t(null,s(i,n.allConsentData.vendorConsents,n.allConsentData.purposeConsents));var o=g(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.vendorConsents,a=n.purposeConsents;t(e,s(i,r,a))},a);r({category:i,callback:o})},e.onRegister=function(t){var n=Object.keys(de),i=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.purposeConsents,a=i.gdprApplies,o=i.vendorConsents;!e&&a&&o&&r&&(n.forEach(function(e){var n=s(e,o,r);t[n?"approve":"deny"](e,!0)}),t.complete())};e.fetchConsentData({callback:i})};var r=function(e){var r=e.callback;if(n.allConsentData)return r(null,n.allConsentData);t.add("FETCH_CONSENT_DATA",r);var s={};o(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.purposeConsents,o=e.gdprApplies,l=e.vendorConsents;(arguments.length>1?arguments[1]:void 0)&&(s={purposeConsents:r,gdprApplies:o,vendorConsents:l},i("allConsentData",s)),a(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(arguments.length>1?arguments[1]:void 0)&&(s.consentString=e.consentData,i("allConsentData",s)),t.execute("FETCH_CONSENT_DATA",[null,n.allConsentData])})})},a=function(e){var t=m();t&&t("getConsentData",null,e)},o=function(e){var t=Fe(de),n=m();n&&n("getVendorConsents",t,e)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!!t[de[e]];return i&&function(){return fe[e].every(function(e){return n[e]})}()}}var _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(e){for(var t,n,i=1;i<arguments.length;++i){n=arguments[i];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e};var C,I,v={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},S={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},D={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",ALLFIELDS:"getVisitorValues"},A={CUSTOMERIDS:"getCustomerIDs"},y={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs",ALLFIELDS:"getVisitorValues"},b={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},O={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},M={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},k={GLOBAL:"global"},E={MESSAGES:v,STATE_KEYS_MAP:S,ASYNC_API_MAP:D,SYNC_API_MAP:A,ALL_APIS:y,FIELDGROUP_TO_FIELD:b,FIELDS:O,AUTH_STATE:M,OPT_OUT:k},T=E.STATE_KEYS_MAP,L=function(e){function t(){}function n(t,n){var i=this;return function(){var r=e(0,t),a={};return a[t]=r,i.setStateAndPublish(a),n(r),r}}this.getMarketingCloudVisitorID=function(e){e=e||t;var i=this.findField(T.MCMID,e),r=n.call(this,T.MCMID,e);return void 0!==i?i:r()},this.getVisitorValues=function(e){this.getMarketingCloudVisitorID(function(t){e({MCMID:t})})}},P=E.MESSAGES,R=E.ASYNC_API_MAP,w=E.SYNC_API_MAP,F=function(){function e(){}function t(e,t){var n=this;return function(){return n.callbackRegistry.add(e,t),n.messageParent(P.GETSTATE),""}}function n(n){this[R[n]]=function(i){i=i||e;var r=this.findField(n,i),a=t.call(this,n,i);return void 0!==r?r:a()}}function i(t){this[w[t]]=function(){return this.findField(t,e)||{}}}Object.keys(R).forEach(n,this),Object.keys(w).forEach(i,this)},N=E.ASYNC_API_MAP,x=function(){Object.keys(N).forEach(function(e){this[N[e]]=function(t){this.callbackRegistry.add(e,t)}},this)},j=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(t,n){n.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},n.isValueEmpty=function(e){return""===e||n.isObjectEmpty(e)},n.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\\x3c!--[if IE "+e+"]><span></span><![endif]--\\x3e",t.getElementsByTagName("span").length)return t=null,e;t=null}return null},n.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)},n.isObject=function(t){return null!==t&&"object"===e(t)&&!1===Array.isArray(t)},n.defineGlobalNamespace=function(){return window.adobe=n.isObject(window.adobe)?window.adobe:{},window.adobe},n.pluck=function(e,t){return t.reduce(function(t,n){return e[n]&&(t[n]=e[n]),t},Object.create(null))},n.parseOptOut=function(e,t,n){t||(t=n,e.d_optout&&e.d_optout instanceof Array&&(t=e.d_optout.join(",")));var i=parseInt(e.d_ottl,10);return isNaN(i)&&(i=7200),{optOut:t,d_ottl:i}},n.normalizeBoolean=function(e){var t=e;return"true"===e?t=!0:"false"===e&&(t=!1),t}}),V=(j.isObjectEmpty,j.isValueEmpty,j.getIeVersion,j.encodeAndBuildRequest,j.isObject,j.defineGlobalNamespace,j.pluck,j.parseOptOut,j.normalizeBoolean,n),H=E.MESSAGES,U={0:"prefix",1:"orgID",2:"state"},B=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach(function(e,n){if(void 0!==e){t[U[n]]=2!==n?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(n){var i=this.parse(n);if(!i||Object.keys(i).length<2)return!0;var r=e!==i.orgID,a=!t||n.origin!==t,o=-1===Object.keys(H).indexOf(i.prefix);return r||a||o},this.send=function(n,i,r){var a=i+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{n.postMessage(a,t)}catch(e){}}},G=E.MESSAGES,Y=function(e,t,n,i){function r(e){Object.assign(p,e)}function a(e){Object.assign(p.state,e),Object.assign(p.state.ALLFIELDS,e),p.callbackRegistry.executeAll(p.state)}function o(e){if(!h.isInvalid(e)){m=!1;var t=h.parse(e);p.setStateAndPublish(t.state)}}function s(e){!m&&g&&(m=!0,h.send(i,e))}function l(){r(new L(n._generateID)),p.getMarketingCloudVisitorID(),p.callbackRegistry.executeAll(p.state,!0),_.removeEventListener("message",c)}function c(e){if(!h.isInvalid(e)){var t=h.parse(e);m=!1,_.clearTimeout(p._handshakeTimeout),_.removeEventListener("message",c),r(new F(p)),_.addEventListener("message",o),p.setStateAndPublish(t.state),p.callbackRegistry.hasCallbacks()&&s(G.GETSTATE)}}function u(){g&&postMessage?(_.addEventListener("message",c),s(G.HANDSHAKE),p._handshakeTimeout=setTimeout(l,250)):l()}function d(){_.s_c_in||(_.s_c_il=[],_.s_c_in=0),p._c="Visitor",p._il=_.s_c_il,p._in=_.s_c_in,p._il[p._in]=p,_.s_c_in++}function f(){function e(e){0!==e.indexOf("_")&&"function"==typeof n[e]&&(p[e]=function(){})}Object.keys(n).forEach(e),p.getSupplementalDataID=n.getSupplementalDataID,p.isAllowed=function(){return!0}}var p=this,g=t.whitelistParentDomain;p.state={ALLFIELDS:{}},p.version=n.version,p.marketingCloudOrgID=e,p.cookieDomain=n.cookieDomain||"",p._instanceType="child";var m=!1,h=new B(e,g);p.callbackRegistry=V(),p.init=function(){d(),f(),r(new x(p)),u()},p.findField=function(e,t){if(void 0!==p.state[e])return t(p.state[e]),p.state[e]},p.messageParent=s,p.setStateAndPublish=a},q=E.MESSAGES,X=E.ALL_APIS,W=E.ASYNC_API_MAP,J=E.FIELDGROUP_TO_FIELD,K=function(e,t){function n(){var t={};return Object.keys(X).forEach(function(n){var i=X[n],r=e[i]();j.isValueEmpty(r)||(t[n]=r)}),t}function i(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(n){if(e._loading[n]){var i=J[n];t.push(i)}}),t.length?t:null}function r(t){return function n(r){var a=i();if(a){var o=W[a[0]];e[o](n,!0)}else t()}}function a(e,i){var r=n();t.send(e,i,r)}function o(e){l(e),a(e,q.HANDSHAKE)}function s(e){r(function(){a(e,q.PARENTSTATE)})()}function l(n){function i(i){r.call(e,i),t.send(n,q.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=i}return function(e){if(!t.isInvalid(e)){(t.parse(e).prefix===q.HANDSHAKE?o:s)(e.source)}}},z=function(e,t){function n(e){return function(n){i[e]=n,r++,r===a&&t(i)}}var i={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var i=e[t];if(i.fn){var r=i.args||[];r.unshift(n(t)),i.fn.apply(i.context||null,r)}})},Q={get:function(e){e=encodeURIComponent(e);var t=(";"+document.cookie).split(" ").join(";"),n=t.indexOf(";"+e+"="),i=n<0?n:t.indexOf(";",n+1);return n<0?"":decodeURIComponent(t.substring(n+2+e.length,i<0?t.length:i))},set:function(e,t,n){var r=i(n,"cookieLifetime"),a=i(n,"expires"),o=i(n,"domain"),s=i(n,"secure"),l=s?"Secure":"";if(a&&"SESSION"!==r&&"NONE"!==r){var c=""!==t?parseInt(r||0,10):-60;if(c)a=new Date,a.setTime(a.getTime()+1e3*c);else if(1===a){a=new Date;var u=a.getYear();a.setYear(u+2+(u<1900?1900:0))}}else a=0;return e&&"NONE"!==r?(document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(a?" expires="+a.toGMTString()+";":"")+(o?" domain="+o+";":"")+l,this.get(e)===t):0},remove:function(e,t){var n=i(t,"domain");n=n?" domain="+n+";":"",document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+n}},$=function(e){var t;!e&&_.location&&(e=_.location.hostname),t=e;var n,i=t.split(".");for(n=i.length-2;n>=0;n--)if(t=i.slice(n).join("."),Q.set("test","cookie",{domain:t}))return Q.remove("test",{domain:t}),t;return""},Z={compare:s,isLessThan:function(e,t){return s(e,t)<0},areVersionsDifferent:function(e,t){return 0!==s(e,t)},isGreaterThan:function(e,t){return s(e,t)>0},isEqual:function(e,t){return 0===s(e,t)}},ee=!!_.postMessage,te={postMessage:function(e,t,n){var i=1;t&&(ee?n.postMessage(e,t.replace(/([^:]+:\\/\\/[^\\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+i+++"&"+e))},receiveMessage:function(e,t){var n;try{ee&&(e&&(n=function(n){if("string"==typeof t&&n.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(n.origin))return!1;e(n)}),_.addEventListener?_[e?"addEventListener":"removeEventListener"]("message",n):_[e?"attachEvent":"detachEvent"]("onmessage",n))}catch(e){}}},ne=function(e){var t,n,i="0123456789",r="",a="",o=8,s=10,l=10;if(1==e){for(i+="ABCDEF",t=0;16>t;t++)n=Math.floor(Math.random()*o),r+=i.substring(n,n+1),n=Math.floor(Math.random()*o),a+=i.substring(n,n+1),o=16;return r+"-"+a}for(t=0;19>t;t++)n=Math.floor(Math.random()*s),r+=i.substring(n,n+1),0===t&&9==n?s=3:(1==t||2==t)&&10!=s&&2>n?s=10:2<t&&(s=10),n=Math.floor(Math.random()*l),a+=i.substring(n,n+1),0===t&&9==n?l=3:(1==t||2==t)&&10!=l&&2>n?l=10:2<t&&(l=10);return r+a},ie=function(e,t){return{corsMetadata:function(){var e="none",t=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.call(_.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new _[this.corsMetadata.corsType]},fireCORS:function(t,n,i){function r(e){var n;try{if((n=JSON.parse(e))!==Object(n))return void a.handleCORSError(t,null,"Response is not JSON")}catch(e){return void a.handleCORSError(t,e,"Error parsing response as JSON")}try{for(var i=t.callback,r=_,o=0;o<i.length;o++)r=r[i[o]];r(n)}catch(e){a.handleCORSError(t,e,"Error forming callback function")}}var a=this;n&&(t.loadErrorHandler=n);try{var o=this.getCORSInstance();o.open("get",t.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=e.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&r(this.responseText)}),o.onerror=function(e){a.handleCORSError(t,e,"onerror")},o.ontimeout=function(e){a.handleCORSError(t,e,"ontimeout")},o.send(),e._log.requests.push(t.corsUrl)}catch(e){this.handleCORSError(t,e,"try-catch")}},handleCORSError:function(t,n,i){e.CORSErrors.push({corsData:t,error:n,description:i}),t.loadErrorHandler&&("ontimeout"===i?t.loadErrorHandler(!0):t.loadErrorHandler(!1))}}},re={POST_MESSAGE_ENABLED:!!_.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\\|((\\d+\\.)?(\\d+\\.)?(\\*|\\d+))(?=$|\\|)/,FIRST_PARTY_SERVER_COOKIE:"s_ecid"},ae=function(e,t){var n=_.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,i="http://fast.",r="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(i=e.idSyncSSLUseAkamai?"https://fast.":"https://"),t=i+this.subdomain+".demdex.net/dest5.html"+r,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:re.POST_MESSAGE_ENABLED?null:100,onPageDestinationsFired:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return!(e.idSyncDisableSyncs||e.disableIdSyncs||e.idSyncDisable3rdPartySyncing||e.disableThirdPartyCookies||e.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){r=n.createElement("iframe"),r.sandbox="allow-scripts allow-same-origin",r.title="Adobe ID Syncing iFrame",r.id=i.id,r.name=i.id+"_name",r.style.cssText="display: none; width: 0; height: 0;",r.src=i.url,i.newIframeCreated=!0,t(),n.body.appendChild(r)}function t(e){r.addEventListener("load",function(){r.className="aamIframeLoaded",i.iframeHasLoaded=!0,i.fireIframeLoadedCallbacks(e),i.requestToProcess()})}this.startedAttachingIframe=!0;var i=this,r=n.getElementById(this.id);r?"IFRAME"!==r.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==r.className?(this.originalIframeHasLoadedAlready=!1,t("The destination publishing iframe already exists from a different library, but hadn\'t loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=r,this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):e(),this.iframe=r},fireIframeLoadedCallbacks:function(e){this.iframeLoadedCallbacks.forEach(function(t){"function"==typeof t&&t({message:e||"The destination publishing iframe was attached and loaded successfully."})}),this.iframeLoadedCallbacks=[]},requestToProcess:function(t){function n(){r.jsonForComparison.push(t),r.jsonWaiting.push(t),r.processSyncOnPage(t)}var i,r=this;if(t===Object(t)&&t.ibs)if(i=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var a,o,s,l=!1;for(a=0,o=this.jsonForComparison.length;a<o;a++)if(s=this.jsonForComparison[a],i===JSON.stringify(s.ibs||[])){l=!0;break}l?this.jsonDuplicates.push(t):n()}else n();if((this.receivedThirdPartyCookiesNotification||!re.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var c=this.jsonWaiting.shift();this.process(c),this.requestToProcess()}e.idSyncDisableSyncs||e.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){r.messageSendingInterval=re.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,n){var i=e._getField("MCAAMLH"),r=t.d_region||t.dcs_region;return i?r&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",r),parseInt(i,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),i=r)):(i=r)&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",i)),i||(i=""),i},processSyncOnPage:function(e){var t,n,i,r;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(i=0;i<n;i++)r=t[i],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")},process:function(e){var t,n,i,r,a,o=encodeURIComponent,s=!1;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(s=!0,i=0;i<n;i++)r=t[i],a=[o("ibs"),o(r.id||""),o(r.tag||""),j.encodeAndBuildRequest(r.url||[],","),o(r.ttl||""),"","",r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(a.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,a.join("|")));s&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,n,i){var r="syncOnPage"===i,a=r?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var o,s,l=e._getField(a),c=!1,u=!1,d=Math.ceil((new Date).getTime()/re.MILLIS_PER_DAY);l?(o=l.split("*"),s=this.pruneSyncData(o,t.id,d),c=s.dataPresent,u=s.dataValid,c&&u||this.fireSync(r,t,n,o,a,d)):(o=[],this.fireSync(r,t,n,o,a,d))},pruneSyncData:function(e,t,n){var i,r,a,o=!1,s=!1;for(r=0;r<e.length;r++)i=e[r],a=parseInt(i.split("-")[1],10),i.match("^"+t+"-")?(o=!0,n<a?s=!0:(e.splice(r,1),r--)):n>=a&&(e.splice(r,1),r--);return{dataPresent:o,dataValid:s}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,n,i,r,a,o){var s=this;if(t){if("img"===n.tag){var l,c,u,d,f=n.url,p=e.loadSSL?"https:":"http:";for(l=0,c=f.length;l<c;l++){u=f[l],d=/^\\/\\//.test(u);var g=new Image;g.addEventListener("load",function(t,n,i,r){return function(){s.onPagePixels[t]=null,e._readVisitor();var o,l=e._getField(a),c=[];if(l){o=l.split("*");var u,d,f;for(u=0,d=o.length;u<d;u++)f=o[u],f.match("^"+n.id+"-")||c.push(f)}s.setSyncTrackingData(c,n,i,r)}}(this.onPagePixels.length,n,a,o)),g.src=(d?p:"")+u,this.onPagePixels.push(g)}}}else this.addMessage(i),this.setSyncTrackingData(r,n,a,o)},addMessage:function(t){var n=encodeURIComponent,i=n(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((re.POST_MESSAGE_ENABLED?"":i)+t)},setSyncTrackingData:function(t,n,i,r){t.push(n.id+"-"+(r+Math.ceil(n.ttl/60/24))),this.manageSyncsSize(t),e._setField(i,t.join("*"))},sendMessages:function(){var e,t=this,n="",i=encodeURIComponent;this.regionChanged&&(n=i("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?re.POST_MESSAGE_ENABLED?(e=n+i("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(n+e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){te.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,n=/^---destpub-to-parent---/;"string"==typeof e&&n.test(e)&&(t=e.replace(n,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(i){(null==this.url||i.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=i.subdomain||"",this.url=this.getUrl()),i.ibs instanceof Array&&i.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===n.readyState||"loaded"===n.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(i):this.requestToProcess(i),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(i)},canMakeSyncIDCall:function(t,n){return e._forceSyncIDCall||!t||n-t>re.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(n.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}},oe={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},doesOptInApply:{},disableThirdPartyCalls:{},discardTrackingServerECID:{},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{},disableThirdPartyCookies:{},idSyncDisableSyncs:{},disableIdSyncs:{},idSyncIDCallResult:{},idSyncSSLUseAkamai:{},isCoopSafe:{},isIabContext:{},isOptInStorageEnabled:{},loadSSL:{},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},optInCookieDomain:{},optInStorageExpiry:{},overwriteCrossDomainMCIDAndAID:{},preOptInApprovals:{},previousPermissions:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},whitelistIframeDomains:{},whitelistParentDomain:{}},se={getConfigNames:function(){return Object.keys(oe)},getConfigs:function(){return oe},normalizeConfig:function(e){return"function"!=typeof e?e:e()}},le=function(e){var t={};return e.on=function(e,n,i){if(!n||"function"!=typeof n)throw new Error("[ON] Callback should be a function.");t.hasOwnProperty(e)||(t[e]=[]);var r=t[e].push({callback:n,context:i})-1;return function(){t[e].splice(r,1),t[e].length||delete t[e]}},e.off=function(e,n){t.hasOwnProperty(e)&&(t[e]=t[e].filter(function(e){if(e.callback!==n)return e}))},e.publish=function(e){if(t.hasOwnProperty(e)){var n=[].slice.call(arguments,1);t[e].slice(0).forEach(function(e){e.callback.apply(e.context,n)})}},e.publish},ce={PENDING:"pending",CHANGED:"changed",COMPLETE:"complete"},ue={AAM:"aam",ADCLOUD:"adcloud",ANALYTICS:"aa",CAMPAIGN:"campaign",ECID:"ecid",LIVEFYRE:"livefyre",TARGET:"target",VIDEO_ANALYTICS:"videoaa"},de=(C={},t(C,ue.AAM,565),t(C,ue.ECID,565),C),fe=(I={},t(I,ue.AAM,[1,2,5]),t(I,ue.ECID,[1,2,5]),I),pe=function(e){return Object.keys(e).map(function(t){return e[t]})}(ue),ge=function(){var e={};return e.callbacks=Object.create(null),e.add=function(t,n){if(!c(n))throw new Error("[callbackRegistryFactory] Make sure callback is a function or an array of functions.");e.callbacks[t]=e.callbacks[t]||[];var i=e.callbacks[t].push(n)-1;return function(){e.callbacks[t].splice(i,1)}},e.execute=function(t,n){if(e.callbacks[t]){n=void 0===n?[]:n,n=n instanceof Array?n:[n];try{for(;e.callbacks[t].length;){var i=e.callbacks[t].shift();"function"==typeof i?i.apply(null,n):i instanceof Array&&i[1].apply(i[0],n)}delete e.callbacks[t]}catch(e){}}},e.executeAll=function(t,n){(n||t&&!l(t))&&Object.keys(e.callbacks).forEach(function(n){var i=void 0!==t[n]?t[n]:"";e.execute(n,i)},e)},e.hasCallbacks=function(){return Boolean(Object.keys(e.callbacks).length)},e},me=function(){},he=function(e){var t=window,n=t.console;return!!n&&"function"==typeof n[e]},_e=function(e,t,n){return n()?function(){if(he(e)){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];console[e].apply(console,[t].concat(i))}}:me},Ce=u,Ie=new Ce("[ADOBE OPT-IN]"),ve=function(t,n){return e(t)===n},Se=function(e,t){return e instanceof Array?e:ve(e,"string")?[e]:t||[]},De=function(e){var t=Object.keys(e);return!!t.length&&t.every(function(t){return!0===e[t]})},Ae=function(e){return!(!e||Oe(e))&&Se(e).every(function(e){return pe.indexOf(e)>-1})},ye=function(e,t){return e.reduce(function(e,n){return e[n]=t,e},{})},be=function(e){return JSON.parse(JSON.stringify(e))},Oe=function(e){return"[object Array]"===Object.prototype.toString.call(e)&&!e.length},Me=function(e){if(Te(e))return e;try{return JSON.parse(e)}catch(e){return{}}},ke=function(e){return void 0===e||(Te(e)?Ae(Object.keys(e)):Ee(e))},Ee=function(e){try{var t=JSON.parse(e);return!!e&&ve(e,"string")&&Ae(Object.keys(t))}catch(e){return!1}},Te=function(e){return null!==e&&ve(e,"object")&&!1===Array.isArray(e)},Le=function(){},Pe=function(e){return ve(e,"function")?e():e},Re=function(e,t){ke(e)||Ie.error("".concat(t))},we=function(e){return Object.keys(e).map(function(t){return e[t]})},Fe=function(e){return we(e).filter(function(e,t,n){return n.indexOf(e)===t})},Ne=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.command,i=t.params,r=void 0===i?{}:i,a=t.callback,o=void 0===a?Le:a;if(!n||-1===n.indexOf("."))throw new Error("[OptIn.execute] Please provide a valid command.");try{var s=n.split("."),l=e[s[0]],c=s[1];if(!l||"function"!=typeof l[c])throw new Error("Make sure the plugin and API name exist.");var u=Object.assign(r,{callback:o});l[c].call(l,u)}catch(e){Ie.error("[execute] Something went wrong: "+e.message)}}};f.prototype=Object.create(Error.prototype),f.prototype.constructor=f;var xe="fetchPermissions",je="[OptIn#registerPlugin] Plugin is invalid.";p.Categories=ue,p.TimeoutError=f;var Ve=Object.freeze({OptIn:p,IabPlugin:h}),He=function(e,t){e.publishDestinations=function(n){var i=arguments[1],r=arguments[2];try{r="function"==typeof r?r:n.callback}catch(e){r=function(){}}var a=t;if(!a.readyToAttachIframePreliminary())return void r({error:"The destination publishing iframe is disabled in the Visitor library."});if("string"==typeof n){if(!n.length)return void r({error:"subdomain is not a populated string."});if(!(i instanceof Array&&i.length))return void r({error:"messages is not a populated array."});var o=!1;if(i.forEach(function(e){\n"string"==typeof e&&e.length&&(a.addMessage(e),o=!0)}),!o)return void r({error:"None of the messages are populated strings."})}else{if(!j.isObject(n))return void r({error:"Invalid parameters passed."});var s=n;if("string"!=typeof(n=s.subdomain)||!n.length)return void r({error:"config.subdomain is not a populated string."});var l=s.urlDestinations;if(!(l instanceof Array&&l.length))return void r({error:"config.urlDestinations is not a populated array."});var c=[];l.forEach(function(e){j.isObject(e)&&(e.hideReferrer?e.message&&a.addMessage(e.message):c.push(e))});!function e(){c.length&&setTimeout(function(){var t=new Image,n=c.shift();t.src=n.url,a.onPageDestinationsFired.push(n),e()},100)}()}a.iframe?(r({message:"The destination publishing iframe is already attached and loaded."}),a.requestToProcess()):!e.subdomain&&e._getField("MCMID")?(a.subdomain=n,a.doAttachIframe=!0,a.url=a.getUrl(),a.readyToAttachIframe()?(a.iframeLoadedCallbacks.push(function(e){r({message:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+(e.message||"no result")})}),a.attachIframe()):r({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):a.iframeLoadedCallbacks.push(function(e){r({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(e.message||"no result")})})}},Ue=function e(t){function n(e,t){return e>>>t|e<<32-t}for(var i,r,a=Math.pow,o=a(2,32),s="",l=[],c=8*t.length,u=e.h=e.h||[],d=e.k=e.k||[],f=d.length,p={},g=2;f<64;g++)if(!p[g]){for(i=0;i<313;i+=g)p[i]=g;u[f]=a(g,.5)*o|0,d[f++]=a(g,1/3)*o|0}for(t+="\x80";t.length%64-56;)t+="\\0";for(i=0;i<t.length;i++){if((r=t.charCodeAt(i))>>8)return;l[i>>2]|=r<<(3-i)%4*8}for(l[l.length]=c/o|0,l[l.length]=c,r=0;r<l.length;){var m=l.slice(r,r+=16),h=u;for(u=u.slice(0,8),i=0;i<64;i++){var _=m[i-15],C=m[i-2],I=u[0],v=u[4],S=u[7]+(n(v,6)^n(v,11)^n(v,25))+(v&u[5]^~v&u[6])+d[i]+(m[i]=i<16?m[i]:m[i-16]+(n(_,7)^n(_,18)^_>>>3)+m[i-7]+(n(C,17)^n(C,19)^C>>>10)|0);u=[S+((n(I,2)^n(I,13)^n(I,22))+(I&u[1]^I&u[2]^u[1]&u[2]))|0].concat(u),u[4]=u[4]+S|0}for(i=0;i<8;i++)u[i]=u[i]+h[i]|0}for(i=0;i<8;i++)for(r=3;r+1;r--){var D=u[i]>>8*r&255;s+=(D<16?0:"")+D.toString(16)}return s},Be=function(e,t){return"SHA-256"!==t&&"SHA256"!==t&&"sha256"!==t&&"sha-256"!==t||(e=Ue(e)),e},Ge=function(e){return String(e).trim().toLowerCase()},Ye=Ve.OptIn;j.defineGlobalNamespace(),window.adobe.OptInCategories=Ye.Categories;var qe=function(t,n,i){function r(e){var t=e;return function(e){var n=e||v.location.href;try{var i=g._extractParamFromUri(n,t);if(i)return w.parsePipeDelimetedKeyValues(i)}catch(e){}}}function a(e){function t(e,t,n){e&&e.match(re.VALID_VISITOR_ID_REGEX)&&(n===A&&(I=!0),t(e))}t(e[A],g.setMarketingCloudVisitorID,A),g._setFieldExpire(k,-1),t(e[O],g.setAnalyticsVisitorID)}function o(e){e=e||{},g._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",g._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},g._supplementalDataIDLast=e.supplementalDataIDLast||"",g._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function s(e){function t(e,t,n){return n=n?n+="|":n,n+=e+"="+encodeURIComponent(t)}function n(e,n){var i=n[0],r=n[1];return null!=r&&r!==T&&(e=t(i,r,e)),e}var i=e.reduce(n,"");return function(e){var t=w.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}(i)}function l(e){var t=e.minutesToLive,n="";return(g.idSyncDisableSyncs||g.disableIdSyncs)&&(n=n||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(n=n||"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:t}}function c(){return!!g.configs.doesOptInApply&&!(m.optIn.isComplete&&u())}function u(){return g.configs.isIabContext?m.optIn.isApproved(m.optIn.Categories.ECID)&&C:m.optIn.isApproved(m.optIn.Categories.ECID)}function d(e,t){if(C=!0,e)throw new Error("[IAB plugin] : "+e);t.gdprApplies&&(h=t.consentString),g.init(),p()}function f(){m.optIn.isApproved(m.optIn.Categories.ECID)&&(g.configs.isIabContext?m.optIn.execute({command:"iabPlugin.fetchConsentData",callback:d}):(g.init(),p()))}function p(){m.optIn.off("complete",f)}if(!i||i.split("").reverse().join("")!==t)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var g=this,m=window.adobe,h="",C=!1,I=!1;g.version="4.4.0";var v=_,S=v.Visitor;S.version=g.version,S.AuthState=E.AUTH_STATE,S.OptOut=E.OPT_OUT,v.s_c_in||(v.s_c_il=[],v.s_c_in=0),g._c="Visitor",g._il=v.s_c_il,g._in=v.s_c_in,g._il[g._in]=g,v.s_c_in++,g._instanceType="regular",g._log={requests:[]},g.marketingCloudOrgID=t,g.cookieName="AMCV_"+t,g.sessionCookieName="AMCVS_"+t,g.cookieDomain=$(),g.loadSSL=v.location.protocol.toLowerCase().indexOf("https")>=0,g.loadTimeout=3e4,g.CORSErrors=[],g.marketingCloudServer=g.audienceManagerServer="dpm.demdex.net",g.sdidParamExpiry=30;var D=null,A="MCMID",y="MCIDTS",b="A",O="MCAID",M="AAM",k="MCAAMB",T="NONE",L=function(e){return!Object.prototype[e]},P=ie(g);g.FIELDS=E.FIELDS,g.cookieRead=function(e){return Q.get(e)},g.cookieWrite=function(e,t,n){var i=g.cookieLifetime?(""+g.cookieLifetime).toUpperCase():"",r=!1;return g.configs&&g.configs.secureCookie&&"https:"===location.protocol&&(r=!0),Q.set(e,""+t,{expires:n,domain:g.cookieDomain,cookieLifetime:i,secure:r})},g.resetState=function(e){e?g._mergeServerState(e):o()},g._isAllowedDone=!1,g._isAllowedFlag=!1,g.isAllowed=function(){return g._isAllowedDone||(g._isAllowedDone=!0,(g.cookieRead(g.cookieName)||g.cookieWrite(g.cookieName,"T",1))&&(g._isAllowedFlag=!0)),"T"===g.cookieRead(g.cookieName)&&g._helpers.removeCookie(g.cookieName),g._isAllowedFlag},g.setMarketingCloudVisitorID=function(e){g._setMarketingCloudFields(e)},g._use1stPartyMarketingCloudServer=!1,g.getMarketingCloudVisitorID=function(e,t){g.marketingCloudServer&&g.marketingCloudServer.indexOf(".demdex.net")<0&&(g._use1stPartyMarketingCloudServer=!0);var n=g._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;return g._getRemoteField(A,i,e,t,n)},g.getVisitorValues=function(e,t){var n={MCMID:{fn:g.getMarketingCloudVisitorID,args:[!0],context:g},MCOPTOUT:{fn:g.isOptedOut,args:[void 0,!0],context:g},MCAID:{fn:g.getAnalyticsVisitorID,args:[!0],context:g},MCAAMLH:{fn:g.getAudienceManagerLocationHint,args:[!0],context:g},MCAAMB:{fn:g.getAudienceManagerBlob,args:[!0],context:g}},i=t&&t.length?j.pluck(n,t):n;z(i,e)},g._currentCustomerIDs={},g._customerIDsHashChanged=!1,g._newCustomerIDsHash="",g.setCustomerIDs=function(t,n){function i(){g._customerIDsHashChanged=!1}if(!g.isOptedOut()&&t){if(!j.isObject(t)||j.isObjectEmpty(t))return!1;g._readVisitor();var r,a,o;for(r in t)if(L(r)&&(a=t[r],n=a.hasOwnProperty("hashType")?a.hashType:n,a))if("object"===e(a)){var s={};if(a.id){if(n){if(!(o=Be(Ge(a.id),n)))return;a.id=o,s.hashType=n}s.id=a.id}void 0!=a.authState&&(s.authState=a.authState),g._currentCustomerIDs[r]=s}else if(n){if(!(o=Be(Ge(a),n)))return;g._currentCustomerIDs[r]={id:o,hashType:n}}else g._currentCustomerIDs[r]={id:a};var l=g.getCustomerIDs(),c=g._getField("MCCIDH"),u="";c||(c=0);for(r in l)L(r)&&(a=l[r],u+=(u?"|":"")+r+"|"+(a.id?a.id:"")+(a.authState?a.authState:""));g._newCustomerIDsHash=String(g._hash(u)),g._newCustomerIDsHash!==c&&(g._customerIDsHashChanged=!0,g._mapCustomerIDs(i))}},g.getCustomerIDs=function(){g._readVisitor();var e,t,n={};for(e in g._currentCustomerIDs)L(e)&&(t=g._currentCustomerIDs[e],n[e]||(n[e]={}),t.id&&(n[e].id=t.id),void 0!=t.authState?n[e].authState=t.authState:n[e].authState=S.AuthState.UNKNOWN,t.hashType&&(n[e].hashType=t.hashType));return n},g.setAnalyticsVisitorID=function(e){g._setAnalyticsFields(e)},g.getAnalyticsVisitorID=function(e,t,n){if(!w.isTrackingServerPopulated()&&!n)return g._callCallback(e,[""]),"";var i="";if(n||(i=g.getMarketingCloudVisitorID(function(t){g.getAnalyticsVisitorID(e,!0)})),i||n){var r=n?g.marketingCloudServer:g.trackingServer,a="";g.loadSSL&&(n?g.marketingCloudServerSecure&&(r=g.marketingCloudServerSecure):g.trackingServerSecure&&(r=g.trackingServerSecure));var o={};if(r){var s="http"+(g.loadSSL?"s":"")+"://"+r+"/id",l="d_visid_ver="+g.version+"&mcorgid="+encodeURIComponent(g.marketingCloudOrgID)+(i?"&mid="+encodeURIComponent(i):"")+(g.idSyncDisable3rdPartySyncing||g.disableThirdPartyCookies?"&d_coppa=true":""),c=["s_c_il",g._in,"_set"+(n?"MarketingCloud":"Analytics")+"Fields"];a=s+"?"+l+"&callback=s_c_il%5B"+g._in+"%5D._set"+(n?"MarketingCloud":"Analytics")+"Fields",o.corsUrl=s+"?"+l,o.callback=c}return o.url=a,g._getRemoteField(n?A:O,a,e,t,o)}return""},g.getAudienceManagerLocationHint=function(e,t){if(g.getMarketingCloudVisitorID(function(t){g.getAudienceManagerLocationHint(e,!0)})){var n=g._getField(O);if(!n&&w.isTrackingServerPopulated()&&(n=g.getAnalyticsVisitorID(function(t){g.getAudienceManagerLocationHint(e,!0)})),n||!w.isTrackingServerPopulated()){var i=g._getAudienceManagerURLData(),r=i.url;return g._getRemoteField("MCAAMLH",r,e,t,i)}}return""},g.getLocationHint=g.getAudienceManagerLocationHint,g.getAudienceManagerBlob=function(e,t){if(g.getMarketingCloudVisitorID(function(t){g.getAudienceManagerBlob(e,!0)})){var n=g._getField(O);if(!n&&w.isTrackingServerPopulated()&&(n=g.getAnalyticsVisitorID(function(t){g.getAudienceManagerBlob(e,!0)})),n||!w.isTrackingServerPopulated()){var i=g._getAudienceManagerURLData(),r=i.url;return g._customerIDsHashChanged&&g._setFieldExpire(k,-1),g._getRemoteField(k,r,e,t,i)}}return""},g._supplementalDataIDCurrent="",g._supplementalDataIDCurrentConsumed={},g._supplementalDataIDLast="",g._supplementalDataIDLastConsumed={},g.getSupplementalDataID=function(e,t){g._supplementalDataIDCurrent||t||(g._supplementalDataIDCurrent=g._generateID(1));var n=g._supplementalDataIDCurrent;return g._supplementalDataIDLast&&!g._supplementalDataIDLastConsumed[e]?(n=g._supplementalDataIDLast,g._supplementalDataIDLastConsumed[e]=!0):n&&(g._supplementalDataIDCurrentConsumed[e]&&(g._supplementalDataIDLast=g._supplementalDataIDCurrent,g._supplementalDataIDLastConsumed=g._supplementalDataIDCurrentConsumed,g._supplementalDataIDCurrent=n=t?"":g._generateID(1),g._supplementalDataIDCurrentConsumed={}),n&&(g._supplementalDataIDCurrentConsumed[e]=!0)),n};var R=!1;g._liberatedOptOut=null,g.getOptOut=function(e,t){var n=g._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;if(u())return g._getRemoteField("MCOPTOUT",i,e,t,n);if(g._registerCallback("liberatedOptOut",e),null!==g._liberatedOptOut)return g._callAllCallbacks("liberatedOptOut",[g._liberatedOptOut]),R=!1,g._liberatedOptOut;if(R)return null;R=!0;var r="liberatedGetOptOut";return n.corsUrl=n.corsUrl.replace(/dpm\\.demdex\\.net\\/id\\?/,"dpm.demdex.net/optOutStatus?"),n.callback=[r],_[r]=function(e){if(e===Object(e)){var t,n,i=j.parseOptOut(e,t,T);t=i.optOut,n=1e3*i.d_ottl,g._liberatedOptOut=t,setTimeout(function(){g._liberatedOptOut=null},n)}g._callAllCallbacks("liberatedOptOut",[t]),R=!1},P.fireCORS(n),null},g.isOptedOut=function(e,t,n){t||(t=S.OptOut.GLOBAL);var i=g.getOptOut(function(n){var i=n===S.OptOut.GLOBAL||n.indexOf(t)>=0;g._callCallback(e,[i])},n);return i?i===S.OptOut.GLOBAL||i.indexOf(t)>=0:null},g._fields=null,g._fieldsExpired=null,g._hash=function(e){var t,n,i=0;if(e)for(t=0;t<e.length;t++)n=e.charCodeAt(t),i=(i<<5)-i+n,i&=i;return i},g._generateID=ne,g._generateLocalMID=function(){var e=g._generateID(0);return N.isClientSideMarketingCloudVisitorID=!0,e},g._callbackList=null,g._callCallback=function(e,t){try{"function"==typeof e?e.apply(v,t):e[1].apply(e[0],t)}catch(e){}},g._registerCallback=function(e,t){t&&(null==g._callbackList&&(g._callbackList={}),void 0==g._callbackList[e]&&(g._callbackList[e]=[]),g._callbackList[e].push(t))},g._callAllCallbacks=function(e,t){if(null!=g._callbackList){var n=g._callbackList[e];if(n)for(;n.length>0;)g._callCallback(n.shift(),t)}},g._addQuerystringParam=function(e,t,n,i){var r=encodeURIComponent(t)+"="+encodeURIComponent(n),a=w.parseHash(e),o=w.hashlessUrl(e);if(-1===o.indexOf("?"))return o+"?"+r+a;var s=o.split("?"),l=s[0]+"?",c=s[1];return l+w.addQueryParamAtLocation(c,r,i)+a},g._extractParamFromUri=function(e,t){var n=new RegExp("[\\\\?&#]"+t+"=([^&#]*)"),i=n.exec(e);if(i&&i.length)return decodeURIComponent(i[1])},g._parseAdobeMcFromUrl=r(re.ADOBE_MC),g._parseAdobeMcSdidFromUrl=r(re.ADOBE_MC_SDID),g._attemptToPopulateSdidFromUrl=function(e){var n=g._parseAdobeMcSdidFromUrl(e),i=1e9;n&&n.TS&&(i=w.getTimestampInSeconds()-n.TS),n&&n.SDID&&n.MCORGID===t&&i<g.sdidParamExpiry&&(g._supplementalDataIDCurrent=n.SDID,g._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},g._attemptToPopulateIdsFromUrl=function(){var e=g._parseAdobeMcFromUrl();if(e&&e.TS){var n=w.getTimestampInSeconds(),i=n-e.TS;if(Math.floor(i/60)>re.ADOBE_MC_TTL_IN_MIN||e.MCORGID!==t)return;a(e)}},g._mergeServerState=function(e){if(e)try{if(e=function(e){return w.isObject(e)?e:JSON.parse(e)}(e),e[g.marketingCloudOrgID]){var t=e[g.marketingCloudOrgID];!function(e){w.isObject(e)&&g.setCustomerIDs(e)}(t.customerIDs),o(t.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},g._timeout=null,g._loadData=function(e,t,n,i){t=g._addQuerystringParam(t,"d_fieldgroup",e,1),i.url=g._addQuerystringParam(i.url,"d_fieldgroup",e,1),i.corsUrl=g._addQuerystringParam(i.corsUrl,"d_fieldgroup",e,1),N.fieldGroupObj[e]=!0,i===Object(i)&&i.corsUrl&&"XMLHttpRequest"===P.corsMetadata.corsType&&P.fireCORS(i,n,e)},g._clearTimeout=function(e){null!=g._timeout&&g._timeout[e]&&(clearTimeout(g._timeout[e]),g._timeout[e]=0)},g._settingsDigest=0,g._getSettingsDigest=function(){if(!g._settingsDigest){var e=g.version;g.audienceManagerServer&&(e+="|"+g.audienceManagerServer),g.audienceManagerServerSecure&&(e+="|"+g.audienceManagerServerSecure),g._settingsDigest=g._hash(e)}return g._settingsDigest},g._readVisitorDone=!1,g._readVisitor=function(){if(!g._readVisitorDone){g._readVisitorDone=!0;var e,t,n,i,r,a,o=g._getSettingsDigest(),s=!1,l=g.cookieRead(g.cookieName),c=new Date;if(l||I||g.discardTrackingServerECID||(l=g.cookieRead(re.FIRST_PARTY_SERVER_COOKIE)),null==g._fields&&(g._fields={}),l&&"T"!==l)for(l=l.split("|"),l[0].match(/^[\\-0-9]+$/)&&(parseInt(l[0],10)!==o&&(s=!0),l.shift()),l.length%2==1&&l.pop(),e=0;e<l.length;e+=2)t=l[e].split("-"),n=t[0],i=l[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),s&&("MCCIDH"===n&&(i=""),r>0&&(r=c.getTime()/1e3-60)),n&&i&&(g._setField(n,i,1),r>0&&(g._fields["expire"+n]=r+(a?"s":""),(c.getTime()>=1e3*r||a&&!g.cookieRead(g.sessionCookieName))&&(g._fieldsExpired||(g._fieldsExpired={}),g._fieldsExpired[n]=!0)));!g._getField(O)&&w.isTrackingServerPopulated()&&(l=g.cookieRead("s_vi"))&&(l=l.split("|"),l.length>1&&l[0].indexOf("v1")>=0&&(i=l[1],e=i.indexOf("["),e>=0&&(i=i.substring(0,e)),i&&i.match(re.VALID_VISITOR_ID_REGEX)&&g._setField(O,i)))}},g._appendVersionTo=function(e){var t="vVersion|"+g.version,n=e?g._getCookieVersion(e):null;return n?Z.areVersionsDifferent(n,g.version)&&(e=e.replace(re.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},g._writeVisitor=function(){var e,t,n=g._getSettingsDigest();for(e in g._fields)L(e)&&g._fields[e]&&"expire"!==e.substring(0,6)&&(t=g._fields[e],n+=(n?"|":"")+e+(g._fields["expire"+e]?"-"+g._fields["expire"+e]:"")+"|"+t);n=g._appendVersionTo(n),g.cookieWrite(g.cookieName,n,1)},g._getField=function(e,t){return null==g._fields||!t&&g._fieldsExpired&&g._fieldsExpired[e]?null:g._fields[e]},g._setField=function(e,t,n){null==g._fields&&(g._fields={}),g._fields[e]=t,n||g._writeVisitor()},g._getFieldList=function(e,t){var n=g._getField(e,t);return n?n.split("*"):null},g._setFieldList=function(e,t,n){g._setField(e,t?t.join("*"):"",n)},g._getFieldMap=function(e,t){var n=g._getFieldList(e,t);if(n){var i,r={};for(i=0;i<n.length;i+=2)r[n[i]]=n[i+1];return r}return null},g._setFieldMap=function(e,t,n){var i,r=null;if(t){r=[];for(i in t)L(i)&&(r.push(i),r.push(t[i]))}g._setFieldList(e,r,n)},g._setFieldExpire=function(e,t,n){var i=new Date;i.setTime(i.getTime()+1e3*t),null==g._fields&&(g._fields={}),g._fields["expire"+e]=Math.floor(i.getTime()/1e3)+(n?"s":""),t<0?(g._fieldsExpired||(g._fieldsExpired={}),g._fieldsExpired[e]=!0):g._fieldsExpired&&(g._fieldsExpired[e]=!1),n&&(g.cookieRead(g.sessionCookieName)||g.cookieWrite(g.sessionCookieName,"1"))},g._findVisitorID=function(t){return t&&("object"===e(t)&&(t=t.d_mid?t.d_mid:t.visitorID?t.visitorID:t.id?t.id:t.uuid?t.uuid:""+t),t&&"NOTARGET"===(t=t.toUpperCase())&&(t=T),t&&(t===T||t.match(re.VALID_VISITOR_ID_REGEX))||(t="")),t},g._setFields=function(t,n){if(g._clearTimeout(t),null!=g._loading&&(g._loading[t]=!1),N.fieldGroupObj[t]&&N.setState(t,!1),"MC"===t){!0!==N.isClientSideMarketingCloudVisitorID&&(N.isClientSideMarketingCloudVisitorID=!1);var i=g._getField(A);if(!i||g.overwriteCrossDomainMCIDAndAID){if(!(i="object"===e(n)&&n.mid?n.mid:g._findVisitorID(n))){if(g._use1stPartyMarketingCloudServer&&!g.tried1stPartyMarketingCloudServer)return g.tried1stPartyMarketingCloudServer=!0,void g.getAnalyticsVisitorID(null,!1,!0);i=g._generateLocalMID()}g._setField(A,i)}i&&i!==T||(i=""),"object"===e(n)&&((n.d_region||n.dcs_region||n.d_blob||n.blob)&&g._setFields(M,n),g._use1stPartyMarketingCloudServer&&n.mid&&g._setFields(b,{id:n.id})),g._callAllCallbacks(A,[i])}if(t===M&&"object"===e(n)){var r=604800;void 0!=n.id_sync_ttl&&n.id_sync_ttl&&(r=parseInt(n.id_sync_ttl,10));var a=F.getRegionAndCheckIfChanged(n,r);g._callAllCallbacks("MCAAMLH",[a]);var o=g._getField(k);(n.d_blob||n.blob)&&(o=n.d_blob,o||(o=n.blob),g._setFieldExpire(k,r),g._setField(k,o)),o||(o=""),g._callAllCallbacks(k,[o]),!n.error_msg&&g._newCustomerIDsHash&&g._setField("MCCIDH",g._newCustomerIDsHash)}if(t===b){var s=g._getField(O);s&&!g.overwriteCrossDomainMCIDAndAID||(s=g._findVisitorID(n),s?s!==T&&g._setFieldExpire(k,-1):s=T,g._setField(O,s)),s&&s!==T||(s=""),g._callAllCallbacks(O,[s])}if(g.idSyncDisableSyncs||g.disableIdSyncs)F.idCallNotProcesssed=!0;else{F.idCallNotProcesssed=!1;var l={};l.ibs=n.ibs,l.subdomain=n.subdomain,F.processIDCallData(l)}if(n===Object(n)){var c,d;u()&&g.isAllowed()&&(c=g._getField("MCOPTOUT"));var f=j.parseOptOut(n,c,T);c=f.optOut,d=f.d_ottl,g._setFieldExpire("MCOPTOUT",d,!0),g._setField("MCOPTOUT",c),g._callAllCallbacks("MCOPTOUT",[c])}},g._loading=null,g._getRemoteField=function(e,t,n,i,r){var a,o="",s=w.isFirstPartyAnalyticsVisitorIDCall(e),l={MCAAMLH:!0,MCAAMB:!0};if(u()&&g.isAllowed()){g._readVisitor(),o=g._getField(e,!0===l[e]);if(function(){return(!o||g._fieldsExpired&&g._fieldsExpired[e])&&(!g.disableThirdPartyCalls||s)}()){if(e===A||"MCOPTOUT"===e?a="MC":"MCAAMLH"===e||e===k?a=M:e===O&&(a=b),a)return!t||null!=g._loading&&g._loading[a]||(null==g._loading&&(g._loading={}),g._loading[a]=!0,g._loadData(a,t,function(t){if(!g._getField(e)){t&&N.setState(a,!0);var n="";e===A?n=g._generateLocalMID():a===M&&(n={error_msg:"timeout"}),g._setFields(a,n)}},r)),g._registerCallback(e,n),o||(t||g._setFields(a,{id:T}),"")}else o||(e===A?(g._registerCallback(e,n),o=g._generateLocalMID(),g.setMarketingCloudVisitorID(o)):e===O?(g._registerCallback(e,n),o="",g.setAnalyticsVisitorID(o)):(o="",i=!0))}return e!==A&&e!==O||o!==T||(o="",i=!0),n&&i&&g._callCallback(n,[o]),o},g._setMarketingCloudFields=function(e){g._readVisitor(),g._setFields("MC",e)},g._mapCustomerIDs=function(e){g.getAudienceManagerBlob(e,!0)},g._setAnalyticsFields=function(e){g._readVisitor(),g._setFields(b,e)},g._setAudienceManagerFields=function(e){g._readVisitor(),g._setFields(M,e)},g._getAudienceManagerURLData=function(e){var t=g.audienceManagerServer,n="",i=g._getField(A),r=g._getField(k,!0),a=g._getField(O),o=a&&a!==T?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(g.loadSSL&&g.audienceManagerServerSecure&&(t=g.audienceManagerServerSecure),t){var s,l,c=g.getCustomerIDs();if(c)for(s in c)L(s)&&(l=c[s],o+="&d_cid_ic="+encodeURIComponent(s)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""));e||(e="_setAudienceManagerFields");var u="http"+(g.loadSSL?"s":"")+"://"+t+"/id",d="d_visid_ver="+g.version+(h&&-1!==u.indexOf("demdex.net")?"&gdpr=1&gdpr_force=1&gdpr_consent="+h:"")+"&d_rtbd=json&d_ver=2"+(!i&&g._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(g.marketingCloudOrgID)+"&d_nsid="+(g.idSyncContainerID||0)+(i?"&d_mid="+encodeURIComponent(i):"")+(g.idSyncDisable3rdPartySyncing||g.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===D?"&d_coop_safe=1":!1===D?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+o,f=["s_c_il",g._in,e];return n=u+"?"+d+"&d_cb=s_c_il%5B"+g._in+"%5D."+e,{url:n,corsUrl:u+"?"+d,callback:f}}return{url:n}},g.appendVisitorIDsTo=function(e){try{var t=[[A,g._getField(A)],[O,g._getField(O)],["MCORGID",g.marketingCloudOrgID]];return g._addQuerystringParam(e,re.ADOBE_MC,s(t))}catch(t){return e}},g.appendSupplementalDataIDTo=function(e,t){if(!(t=t||g.getSupplementalDataID(w.generateRandomString(),!0)))return e;try{var n=s([["SDID",t],["MCORGID",g.marketingCloudOrgID]]);return g._addQuerystringParam(e,re.ADOBE_MC_SDID,n)}catch(t){return e}};var w={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,n){var i=e.split("&");return n=null!=n?n:i.length,i.splice(n,0,t),i.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,n){if(e!==O)return!1;var i;return t||(t=g.trackingServer),n||(n=g.trackingServerSecure),!("string"!=typeof(i=g.loadSSL?n:t)||!i.length)&&(i.indexOf("2o7.net")<0&&i.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){Q.remove(e,{domain:g.cookieDomain})},isTrackingServerPopulated:function(){return!!g.trackingServer||!!g.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=n[Math.floor(Math.random()*n.length)];return t},normalizeBoolean:function(e){return"true"===e||"false"!==e&&e},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var n in e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t);return e}};g._helpers=w;var F=ae(g,S);g._destinationPublishing=F,g.timeoutMetricsLog=[];var N={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case"MC":!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case b:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case M:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};g.isClientSideMarketingCloudVisitorID=function(){return N.isClientSideMarketingCloudVisitorID},g.MCIDCallTimedOut=function(){return N.MCIDCallTimedOut},g.AnalyticsIDCallTimedOut=function(){return N.AnalyticsIDCallTimedOut},g.AAMIDCallTimedOut=function(){return N.AAMIDCallTimedOut},g.idSyncGetOnPageSyncInfo=function(){return g._readVisitor(),g._getField("MCSYNCSOP")},g.idSyncByURL=function(e){if(!g.isOptedOut()){var t=l(e||{});if(t.error)return t.error;var n,i,r=e.url,a=encodeURIComponent,o=F;return r=r.replace(/^https:/,"").replace(/^http:/,""),n=j.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),i=["ibs",a(e.dpid),"img",a(r),t.ttl,"",n],o.addMessage(i.join("|")),o.requestToProcess(),"Successfully queued"}},g.idSyncByDataSource=function(e){if(!g.isOptedOut())return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,g.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},He(g,F),g._getCookieVersion=function(e){e=e||g.cookieRead(g.cookieName);var t=re.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},g._resetAmcvCookie=function(e){var t=g._getCookieVersion();t&&!Z.isLessThan(t,e)||w.removeCookie(g.cookieName)},g.setAsCoopSafe=function(){D=!0},g.setAsCoopUnsafe=function(){D=!1},function(){if(g.configs=Object.create(null),w.isObject(n))for(var e in n)L(e)&&(g[e]=n[e],g.configs[e]=n[e])}(),function(){[["getMarketingCloudVisitorID"],["setCustomerIDs",void 0],["getAnalyticsVisitorID"],["getAudienceManagerLocationHint"],["getLocationHint"],["getAudienceManagerBlob"]].forEach(function(e){var t=e[0],n=2===e.length?e[1]:"",i=g[t];g[t]=function(e){return u()&&g.isAllowed()?i.apply(g,arguments):("function"==typeof e&&g._callCallback(e,[n]),n)}})}(),g.init=function(){if(c())return m.optIn.fetchPermissions(f,!0);!function(){if(w.isObject(n)){g.idSyncContainerID=g.idSyncContainerID||0,D="boolean"==typeof g.isCoopSafe?g.isCoopSafe:w.parseBoolean(g.isCoopSafe),g.resetBeforeVersion&&g._resetAmcvCookie(g.resetBeforeVersion),g._attemptToPopulateIdsFromUrl(),g._attemptToPopulateSdidFromUrl(),g._readVisitor();var e=g._getField(y),t=Math.ceil((new Date).getTime()/re.MILLIS_PER_DAY);g.idSyncDisableSyncs||g.disableIdSyncs||!F.canMakeSyncIDCall(e,t)||(g._setFieldExpire(k,-1),g._setField(y,t)),g.getMarketingCloudVisitorID(),g.getAudienceManagerLocationHint(),g.getAudienceManagerBlob(),g._mergeServerState(g.serverState)}else g._attemptToPopulateIdsFromUrl(),g._attemptToPopulateSdidFromUrl()}(),function(){if(!g.idSyncDisableSyncs&&!g.disableIdSyncs){F.checkDPIframeSrc();var e=function(){var e=F;e.readyToAttachIframe()&&e.attachIframe()};v.addEventListener("load",function(){S.windowLoaded=!0,e()});try{te.receiveMessage(function(e){F.receiveMessage(e.data)},F.iframeHost)}catch(e){}}}(),function(){g.whitelistIframeDomains&&re.POST_MESSAGE_ENABLED&&(g.whitelistIframeDomains=g.whitelistIframeDomains instanceof Array?g.whitelistIframeDomains:[g.whitelistIframeDomains],g.whitelistIframeDomains.forEach(function(e){var n=new B(t,e),i=K(g,n);te.receiveMessage(i,e)}))}()}};qe.config=se,_.Visitor=qe;var Xe=qe,We=function(e){if(j.isObject(e))return Object.keys(e).filter(function(t){return""!==e[t]}).reduce(function(t,n){var i="doesOptInApply"!==n?e[n]:se.normalizeConfig(e[n]),r=j.normalizeBoolean(i);return t[n]=r,t},Object.create(null))},Je=Ve.OptIn,Ke=Ve.IabPlugin;return Xe.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var n=function(){var t=_.s_c_il;if(t)for(var n=0;n<t.length;n++){var i=t[n];if(i&&"Visitor"===i._c&&i.marketingCloudOrgID===e)return i}}();if(n)return n;var i=We(t);!function(e){_.adobe.optIn=_.adobe.optIn||function(){var t=j.pluck(e,["doesOptInApply","previousPermissions","preOptInApprovals","isOptInStorageEnabled","optInStorageExpiry","isIabContext"]),n=e.optInCookieDomain||e.cookieDomain;n=n||$(),n=n===window.location.hostname?"":n,t.optInCookieDomain=n;var i=new Je(t,{cookies:Q});if(t.isIabContext){var r=new Ke(window.__cmp);i.registerPlugin(r)}return i}()}(i||{});var r=e,a=r.split("").reverse().join(""),o=new Xe(e,null,a);j.isObject(i)&&i.cookieDomain&&(o.cookieDomain=i.cookieDomain),function(){_.s_c_il.splice(--_.s_c_in,1)}();var s=j.getIeVersion();if("number"==typeof s&&s<10)return o._helpers.replaceMethodsWithFunction(o,function(){});var l=function(){try{return _.self!==_.parent}catch(e){return!0}}()&&!function(e){return e.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===e.cookieRead("TEST_AMCV_COOKIE")&&(e._helpers.removeCookie("TEST_AMCV_COOKIE"),!0)}(o)&&_.parent?new Y(e,i,o,_.parent):new Xe(e,i,a);return o=null,l.init(),l},function(){function e(){Xe.windowLoaded=!0}_.addEventListener?_.addEventListener("load",e):_.attachEvent&&_.attachEvent("onload",e),Xe.codeLoadEnd=(new Date).getTime()}(),Xe}();\n',
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "/* mbt app measurement config */\n/* globals Visitor, visitor, AppMeasurement, $t, s, _satellite, FlashDetect */\n\n$t('register', 'dtm_adobeAppMeasurmentLoaded');\n\n(function applyBrandSettings() {\n    // default to news\n    var allBrandSettings = {\n        'today.com': {\n            stageAccount: 'nbcutodaycomdev',\n            prodAccount: 'nbcutodaycomprod',\n            visitorNamespace: 'nbcuniversal',\n            server: 'aamt.today.com'\n        },\n        'nbcnews.com': {\n            stageAccount: 'nbcunbcnewscomdev',\n            prodAccount: 'msnbcnbcnewscomprod',\n            visitorNamespace: 'msnbc',\n            server: 'aamt.nbcnews.com'\n        },\n        'msnbc.com': {\n            stageAccount: 'nbcumsnbccomdev',\n            prodAccount: 'msnbcdotcom',\n            visitorNamespace: 'msnbc',\n            server: 'aamt.msnbc.com'\n        },\n        'telemundo.com': {\n            stageAccount: 'nbcutelemundodev',\n            prodAccount: 'nbcutelemundo',\n            visitorNamespace: 'nbcuniversal',\n            server: 'aamt.newsapp.telemundo.com'\n        }\n    };\n    var topLevelDomain = (function () {\n        var validDomains = ['nbcnews.com', 'today.com', 'msnbc.com', 'telemundo.com'];\n        var isAmp = location.hash.indexOf('amp=1') != -1;\n        var ampDomainOverride = (location.hash.split('domain=')[1] || '').split('&')[0];\n        var topLevelDomain = (isAmp && ampDomainOverride) || document.location.hostname.match(/[^./]+\\.[^./]+$/)[0];\n        topLevelDomain = validDomains.indexOf(topLevelDomain) != -1 ? topLevelDomain : 'nbcnews.com';\n\n        return topLevelDomain;\n    })();\n\n    var brandSettings = allBrandSettings[topLevelDomain]\n    //switch account based on Launch stage\n    var account = (function () {\n        if (_satellite && _satellite.buildInfo && _satellite.buildInfo.environment === 'production') {\n            return brandSettings.prodAccount;\n        }\n        return brandSettings.stageAccount;\n    })()\n    //set global object\n    window.s = new AppMeasurement(account);\n\n    //custom added variables\n    window.s.topLevelDomain = topLevelDomain;\n    window.s.continuousView = 0;\n    window.s.noValue = 'not available';\n\n    //from config values\n    window.s.visitorNamespace = brandSettings.visitorNamespace;\n    window.s.trackingServer = brandSettings.server;\n})();\n\n/* Link Tracking Config */\ns.trackingServerSecure = s.trackingServer;\ns.trackDownloadLinks = true;\ns.trackExternalLinks = true;\ns.trackInlineStats = true;\ns.linkDownloadFileTypes = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';\ns.linkLeaveQueryString = true;\ns.linkTrackVars = 'None';\ns.linkTrackEvents = 'None';\ns.linkInternalFilters = s.topLevelDomain + ',javascript:,mailto:,facebook.com/sharrer,twitter.com/intent'; // jshint ignore:line\n\n/* settings for actifity map */\ns.ActivityMap.regionIDAttribute = 'class';\n\n/* setup visitor API */\nwindow.visitor = Visitor.getInstance('A8AB776A5245B4220A490D44@AdobeOrg', { 'trackingServer': s.trackingServer, 'trackingServerSecure': s.trackingServerSecure });\ns.visitor = visitor;\n\n/* the plugin section is basically global values that are interpreted right before the image request is sent */\nfunction s_doPlugins(s) {\n\n    //campaign tracking\n    s.campaign = s.custGetQS(\"cid\");\n\n    //urls change, so this sets them on track.\n    s.pageURL = document.location.href;\n\n    //extend global values (values upstream take presidence)\n    s.contextData = s.extendArray({\n        //defaults\n        'news.adblock': s.cookieRead('i_abd') || s.notValue,\n        'news.date': s.customTimeParting('d'),\n        'news.day': s.customTimeParting('dw'), // day of the week\n        'news.flashversion': (function () {\n            //report flash version using Flash Detect library\n            if (typeof FlashDetect === \"undefined\") {\n                return s.notValue;\n            } else {\n                return FlashDetect.raw || \"no flash\";\n            }\n        })(),\n        'news.hour': s.customTimeParting('h'),\n        'news.kruxid': localStorage.getItem('kxuser'),\n        'news.minute': s.customTimeParting('m'),\n        'news.omnitureid': s.marketingCloudVisitorID,\n        'news.pagename': s.pageName,\n        'news.pageurl': document.location.href,\n        'news.platform': 'Web',      \n        'news.previouspage': (function () {\n            var prevPage = !s.abort && s.getPreviousValue(s.pageName, 'prevVal_pn');\n            return prevPage ? prevPage : 'not available';\n        })(),\n        'news.referrer': document.referrer ? document.referrer : 'no referrer url',\n        'news.scrollcount': (function () {\n            // increment a pageCount for continuous consumption pageviews\n            if (!s.linkType && !s.clickObject && !s.abort) {\n                s.continuousView += 1;\n            }\n            return s.continuousView;\n        })(),\n        'news.server': s.topLevelDomain,\n        'news.sessionnumber': s.getVisitNum(),\n        'news.timezone': s.customTimeParting('tz'),\n        'news.xfinityheader': s.cookieRead(\"P7\"),\n        'news.uiexperiment': s.custGetQS(\"icid\"),\n        'news.uxexperiment': (function () {\n            //example 2147483647~rv=8~id=b7c90f942ae0282250a0418fbf11f00a~rn=MSNBC_Video_Player_vs._Bento%20B'\n            var cookieName = (function () {\n                if (s.topLevelDomain === 'nbcnews.com') {\n                    return 'akaas_NBCNews';\n                }\n                if (s.topLevelDomain === 'msnbc.com') {\n                    return 'akaas_MSNBC';\n                }\n                if (s.topLevelDomain === 'today.com') {\n                    return 'akaas_TODAY';\n                }\n                if (s.topLevelDomain === 'telemundo.com') {\n                    return 'akaas_TELEMUNDO';\n                }\n            })();\n            var returnString = false;\n            var value = s.cookieRead(cookieName).split('~');\n            if (value.length >= 2) {\n                returnString = value[1];\n            }\n            return returnString;\n        })(),\n        'news.homepagecurtain': (function () {\n            var cookieName = 'curtainEnd';\n            var validDate = function (d) { return d && d.getTime && !isNaN(d.getTime()); };\n            var cookieVal = s.cookieRead(cookieName);\n            var curDate = cookieVal && new Date(parseInt(cookieVal));\n            var now = new Date();\n            if (!cookieVal || !validDate(curDate)) {\n                return s.noValue;\n            } else if (now <= curDate) {\n                return 'yes';\n            } else {\n                return 'no';\n            }\n        })(),\n        'news.appversion': $t('jsonLd.Dataset.0.appVersion', s.noValue)\n    }, s.contextData);\n\n    //add the demdex context var\n    var demDexCookie = s.Util.cookieRead('aam_uuid') || s.Util.cookieRead('aam_did');\n    s.contextData['tve.did'] = demDexCookie ? demDexCookie : 'demdex cookie not set';\n\n    //set linkTrackVars to all contextData;\n    s.linkTrackVars = false;\n    for (var key in s.contextData) {\n        key = 'contextData.' + key;\n        s.linkTrackVars = s.linkTrackVars ? s.linkTrackVars + ',' + key : key;\n    }\n}\n\n/* Plugin Config */\ns.usePlugins = true;\ns.doPlugins = s_doPlugins;\n\n/* plugins and helpers (ignore lint for plugins)*/\n/* jshint ignore:start */\n\n/*\n * extend arrays recursively\n * by Jeremy F.\n */\ns.extendArray = function (defaults, options) { defaults = defaults || {}; for (var prop in options) { if (typeof options[prop] === 'object') { defaults[prop] = s.extendArray(defaults[prop], options[prop]); } else { defaults[prop] = options[prop]; } } return defaults; };\n\n/*\n * Custom getQuerySting to use window.location V1.0 from MDN\n * by Jeremy F.\n */\n\ns.custGetQS = function (key) { return unescape(window.location.search.replace(new RegExp(\"^(?:.*[&\\\\?]\" + escape(key).replace(/[\\.\\+\\*]/g, \"\\\\$&\") + \"(?:\\\\=([^&]*))?)?.*$\", \"i\"), \"$1\")); }\n\n/* custom time parting function */\ns.customTimeParting = function (value) {\n    var d = new Date();\n    var da = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n    switch (value) {\n        case 'm':\n            return (\"0\" + d.getHours()).slice(-2) + \":\" + (\"0\" + d.getMinutes()).slice(-2);\n        case 'h':\n            return d.getHours() + \":00\";\n        case 'dw':\n            return da[d.getDay()];\n        case 'd':\n            return (d.getMonth() + 1) + \"/\" + d.getDate() + \"/\" + d.getFullYear();\n        case 'tz':\n            return d.getTimezoneOffset() / 60 * -1;\n        default:\n            return \"\";\n    }\n}\n\n/*\n * Plugin: getPreviousValue_v1.0 - return previous value of designated\n *   variable (requires split utility)\n */\ns.getPreviousValue = new Function(\"v\", \"c\", \"el\", \"\" + \"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el\" + \"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i\" + \"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)\" + \":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?\" + \"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}\");\n/*\n * Utility Function: split v1.5 (JS 1.0 compatible)\n */\ns.split = new Function(\"l\", \"d\", \"\" + \"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x\" + \"++]=l.substring(0,i);l=l.substring(i+d.length);}return a\");\n\ns.getVisitNum = new Function(\"\" + \"var s\\x3dthis,e\\x3dnew Date(),cval,cvisit,ct\\x3de.getTime(),c\\x3d's_vnum',c2\\x3d's\" + \"_invisit';e.setTime(ct+30*24*60*60*1000);cval\\x3ds.c_r(c);if(cval){var\" + \" i\\x3dcval.indexOf('\\x26vn\\x3d'),str\\x3dcval.substring(i+4,cval.length),k;}cvis\" + \"it\\x3ds.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'\" +\n    \"true',e);return str;}else return 'unknown visit number';}else{if(st\" + \"r){str++;k\\x3dcval.substring(0,i);e.setTime(k);s.c_w(c,k+'\\x26vn\\x3d'+str,e)\" + \";e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w\" + \"(c,ct+30*24*60*60*1000+'\\x26vn\\x3d1',e);e.setTime(ct+30*60*1000);s.c_w(c2\" + \",'true',e);return 1;}}\");\n/* jshint ignore:end */\n\n//track that its all been loaded;\n$t('track', 'dtm_adobeAppMeasurmentLoaded', { 'sc_obj': s });",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLe751fa88756a4cd68f5b3765dcf12d2e',
            name: 'UniVideo - Parsely',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 60 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "/* globals $t, PARSELY */\n(function () {\n    var logEvent = (function () {\n        var logGroup = 'uni_parsley';\n        var logger = function (event, data) {\n\n            if (window.BI && window.BI.console) {\n                window.BI.console.log(event, data, logGroup);\n            }\n        }\n        logger.logGroup = logGroup\n        return logger;\n    })();\n\n    var currentVideo = {};\n    var blurred = false;\n    //blur focus events\n    window.addEventListener('blur', function () {\n        if (currentVideo.playState === 'play') {\n            blurred = true;\n            logEvent('blur',{currentVideo:currentVideo})\n            PARSELY.video.trackPause(currentVideo.guid, currentVideo.mediaInfo, currentVideo.url);\n        }\n    });\n    window.addEventListener('focus', function () {\n        if (currentVideo.playState === 'play' && blurred) {\n            blurred = false;\n            logEvent('focus',{currentVideo:currentVideo})\n            PARSELY.video.trackPlay(currentVideo.guid, currentVideo.mediaInfo, currentVideo.url);\n        }\n    });\n    //video events\n    $t('on', 'uni_videoEvent', function (e, data) {\n        if (window.PARSELY && window.PARSELY.video) {\n            var videoData = data && data.videoData || {};\n            var videoState = data && data.videoState || {};\n            var pubDate = (function () { return videoData.datePublished && (new Date(videoData.datePublished).getTime()) || 0; })();\n\n            switch (data.eventType) {\n                case 'PLAY':\n                    if (!videoState.inAd) {\n                        if (videoData.guid && (currentVideo.guid != videoData.guid)) {\n                            //end previous if it hadn't\n                            if (currentVideo.guid && !blurred) {\n                                logEvent('stop previous',{currentVideo:currentVideo})\n                                PARSELY.video.trackPause(currentVideo.guid, currentVideo.mediaInfo, currentVideo.url);\n                            }\n                            currentVideo = {\n                                'guid': videoData.guid,\n                                'mediaInfo': {\n                                    'title': videoData.title || '', // required\n                                    'pub_date_tmsp': pubDate // timestamp\n                                },\n                                'url': $t('dataLayer.canonical_url', document.location.href),\n                                'playState': 'play'\n                            };\n                        }\n                        if (!blurred && currentVideo.playState !== 'play') {\n                            logEvent('start',{currentVideo:currentVideo})\n                            PARSELY.video.trackPlay(currentVideo.guid, currentVideo.mediaInfo, currentVideo.url);\n                        }\n                    }\n                    break;\n                case 'COMPLETE':\n                case 'STOP':\n                case 'PAUSE':\n                    if (!blurred && currentVideo.playState === 'play') {\n                        logEvent('stop',{currentVideo:currentVideo})\n                        PARSELY.video.trackPause(currentVideo.guid, currentVideo.mediaInfo, currentVideo.url);\n                        currentVideo.playState = 'pause';\n                    }\n                    break;\n\n                default:\n                    break;\n            }\n        }\n    });\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLf2fb5e9be0a24c71b1aa9ea78d19a917',
            name: 'UniVideo - subs Playmaker',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 60 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    /* global $t, uniVideo */\n    var logEvent = (function () {\n        var logGroup = 'uni_playmaker';\n        var logger = function (event, data) {\n\n            if (window.BI && window.BI.console) {\n                window.BI.console.log(event, data, logGroup);\n            }\n        }\n        logger.logGroup = logGroup\n        return logger;\n    })();\n\n    var safeParseJSON = function (string) {\n        var output = {};\n        try {\n            if (string && typeof string === 'string') {\n                output = JSON.parse(string);\n            }\n        } catch (e) {\n            logEvent('Parse Error', { error: e, string: string });\n        }\n        return output;\n    };\n    var uniEvent = window.uniVideo && window.uniVideo.event || {};\n    var uniTrack = window.uniVideo && window.uniVideo.buildUniTrack() || function () { };\n\n    var playmakerUniBind = function (event, data) {\n        if (event === 'MEDIA_STATE_CHANGE') {\n            // convert media state changes to events\n            event = data.status;\n        }\n\n        switch (event) {\n            case 'UPDATE_TIME':\n                uniTrack.videoData({ playheadPosition: data.playerTime * 1000 });\n                uniTrack(uniEvent.PROGRESS);\n                break;\n            case 'USER_ACTION_CLICK_TO_PLAY':\n                //nbcsplayer.PlayerMessageTypes.USER_ACTION_CLICK_TO_PLAY\n                break;\n            case 'MAIN_MEDIA_CHANGE':\n                // load metadata\n                var tmpCount = uniTrack.videoData().videoCount || 0;\n                // overwrite with defaults and repopulate\n                uniTrack.videoData({\n                    datePublished: '', // Need to get this data\n                    duration: '',\n                    guid: data.pid,\n                    newsNetwork: data.name, // maybe?\n                    playbackAdapter: 'playmaker', // maybe?\n                    playInitiate: 'Auto', // (Continuous,Manual,Auto)\n                    sentiment: 'live', //  hard coded\n                    source: data.name, // maybe?, NBC News\n                    streamType: 'linear', //hardcoded for now\n                    title: data.title,\n                    videoCount: tmpCount + 1,\n                    videoType: data.type, // Prerecorded?\n                }, true);\n\n                //update source value for \"news now\" show\n                if (uniTrack.videoData().title === 'NBC News NOW') {\n                    uniTrack.videoData({ source: uniTrack.videoData().title })\n                }\n                uniTrack(uniEvent.VIDEO_LOADED);\n                break;\n            case 'rehtml5player:initialized':\n                uniTrack(uniEvent.INIT);\n                break;\n            case 'rehtml5player:playing':\n                uniTrack(uniEvent.PLAY);\n                uniTrack.videoState({ playState: 'play' });\n                break;\n            case 'rehtml5player:seeking':\n                uniTrack(uniEvent.SEEK_START);\n                break;\n            case 'rehtml5player:waiting':\n                uniTrack(uniEvent.PAUSE);\n                uniTrack.videoState({ playState: 'pause' });\n                break;\n            case 'stop': // this is unknown, havent seen\n                uniTrack(uniEvent.STOP);\n                uniTrack.videoState({ playState: 'stop' });\n                break;\n            case 'rehtml5player:paused':\n                uniTrack(uniEvent.PAUSE);\n                uniTrack.videoState({ playState: 'pause' });\n                break;\n            case 'FULLSCREEN':\n                uniTrack(uniEvent.FULLSCREEN);\n                uniTrack.videoState({ fullScreen: data.fullScreen });\n                break;\n            case 'SEEK_COMPLETE':\n                uniTrack(uniEvent.SEEK_COMPLETE);\n                uniTrack.videoState({ playState: 'stop' });\n                break;\n            case 'AD_START':\n                uniTrack(uniEvent.AD_PLAY);\n                uniTrack.videoState({\n                    inAd: true,\n                    playState: 'play'\n                });\n                break;\n            case 'AD_COMPLETE':\n                uniTrack(uniEvent.AD_COMPLETE);\n                uniTrack.videoState({\n                    inAd: false,\n                    playState: 'stop',\n                    adPosition: uniTrack.videoState().adPosition + 1\n                });\n                break;\n            case 'AD_BREAK_START':\n                uniTrack(uniEvent.AD_BREAK_START);\n                break;\n            case 'AD_BREAK_COMPLETE':\n                uniTrack(uniEvent.AD_BREAK_COMPLETE);\n                uniTrack.videoState({\n                    adPosition: 1,\n                    adBreakPosition: uniTrack.videoState().adBreakPosition + 1\n                });\n                break;\n            case 'scteBreakStart':\n                //nbcsplayer.PlayerMessageTypes.SCTE_BREAK_START\n                uniTrack.videoData({\n                    assetId: data.assetId,\n                });\n                if (uniTrack.videoState().inSegment) {\n                    uniTrack.videoState({\n                        inSegment: false,\n                    });\n                    uniTrack(uniEvent.SEGMENT_END);\n                }\n                break;\n            case 'scteBreakEnd':\n                //nbcsplayer.PlayerMessageTypes.SCTE_BREAK_END\n                if (uniTrack.videoState().inSegment) {\n                    //if start before end, end and skip next end\n                    uniTrack(uniEvent.SEGMENT_END);\n                }\n                uniTrack.videoState({\n                    inSegment: true,\n                    segmentPosition: uniTrack.videoState().segmentPosition + 1\n                });\n                uniTrack(uniEvent.SEGMENT_START);\n                break;\n            case 'scteProgramStart':\n                //nbcsplayer.PlayerMessageTypes.SCTE_PROGRAM_START\n\n                if (uniTrack.videoState().inSegment) {\n                    //if start before end, end and skip next end\n                    uniTrack(uniEvent.SEGMENT_END);\n                }\n                //set new asset after end\n                uniTrack.videoData({\n                    assetId: data.assetId,\n                });\n                uniTrack.videoState({\n                    inSegment: true,\n                    segmentPosition: 1\n                });\n                uniTrack(uniEvent.SEGMENT_START);\n                break;\n            case 'scteProgramEnd':\n                // nbcsplayer.PlayerMessageTypes.SCTE_PROGRAM_END\n                // skip program end now, since there is no assetId to know which start an end is to, and they are out of order\n                if (uniTrack.videoState().inSegment && false) {\n                    uniTrack.videoState({\n                        inSegment: false,\n                    });\n                    uniTrack(uniEvent.SEGMENT_END);\n                }\n                break;\n\n            default:\n                break;\n        }\n    };\n\n    var subscribeUniEventsToPlaymaker = function (data) {\n        if (data.iframeObj) {\n            var iframe = data.iframeObj\n            //for iframe player (does not support scte)\n            window.addEventListener('message', function (e) {\n                var isOldMsgFormat = (e.origin === iframe.location.origin && typeof e.data === 'string' && e.data.indexOf('[embedplayer]') > -1);\n                var isNewMsgFormat = (e.origin === iframe.location.origin && typeof e.data != 'string' && e.data.app === 'playmaker');\n                if (isOldMsgFormat || isNewMsgFormat) {\n                    var eventData = isNewMsgFormat ? e.data.data : {};\n                    var command = isNewMsgFormat ? e.data.type : {};\n                    if (command === 'html5Notification') {\n                        command = eventData.type; //take type out first\n                        eventData = safeParseJSON(eventData.data);\n                    }\n                    //to support old message format\n                    if (isOldMsgFormat) {\n                        var filter = e.data.split('[embedplayer]')[1] || '';\n                        command = filter.split('::')[0] || '';\n                        eventData = safeParseJSON(filter.replace(command + '::', ''));\n                    }\n                    if (command !== 'UPDATE_TIME') {\n                        logCommand = command;\n                        if (command === 'MEDIA_STATE_CHANGE') {\n                            // convert media state changes to events\n                            logCommand = 'MEDIA_STATE_CHANGE: ' + eventData.status;\n                        }\n                        logEvent(logCommand, { eventData: eventData, videoData: uniTrack.videoData(), videoState: uniTrack.videoState() });\n                    }\n\n                    playmakerUniBind(command, eventData);\n                }\n            });\n        } else if (data.playerObj) {\n            // subscribe to all ndp events, based on $ndp.events \"sections\"\n            var playerReference = data.playerObj;\n            var bindFunction = function (e) {\n                var command = e.type;\n                var eventData = safeParseJSON(e.data)\n                if (command !== 'UPDATE_TIME') {\n                    logCommand = command;\n                    if (command === 'MEDIA_STATE_CHANGE') {\n                        // convert media state changes to events\n                        logCommand = 'MEDIA_STATE_CHANGE: ' + eventData.status;\n                    }\n                    logEvent(logCommand, { eventData: eventData, videoData: uniTrack.videoData(), videoState: uniTrack.videoState() });\n                }\n\n                playmakerUniBind(command, eventData);\n            }\n            //window.rehtml5player.on is the object usually\n            var subsEvents = ['API_CREATED', 'API_READY', 'HTML5_NOTIFICATION', 'PLAYER_READY', 'STATUS_CHANGE']\n            subsEvents.forEach(function (event) {\n                if (playerReference.PlayerEvents && typeof playerReference.PlayerEvents[event] === 'string') {\n                    playerReference.on(playerReference.PlayerEvents[event], bindFunction);\n                }\n            });\n        }\n    };\n\n    // be sure its only once per player, and 2 cases for if the player loads before this\n    if ($t('playMaker_init.iframeObj') || $t('playMaker_init.playObj')) {\n        subscribeUniEventsToPlaymaker($t('playMaker_init'));\n    } else {\n        $t('on', 'playMaker_init', function (e, data) {\n            subscribeUniEventsToPlaymaker(data);\n        });\n    }\n})()",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLf3ba3d64eee34c9786df92415afc650e',
            name: 'UniVideo - Heartbeat',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 60 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    /*global $t, ADB, console, AppMeasurement, visitor*/\n    $t('register', 'univideo_ahb_adobeAppMeasurmentLoaded');\n\n    var logEvent = (function () {\n        var logGroup = 'uni_heartbeat';\n        var logger = function (event, data) {\n\n            if (window.BI && window.BI.console) {\n                window.BI.console.log(event, data, logGroup);\n            }\n        }\n        logger.logGroup = logGroup\n        return logger;\n    })();\n\n    var uniEvent = window.uniVideo && window.uniVideo.event || {};\n    var setupHeartbeat = function (s) {\n        'use strict';\n        // statics\n        var noValue = 'not available';\n\n        // privates\n        var _mediaHeartbeat = null;\n        var _appMeasurement = null;\n        var _stateInfo = {\n            playheadPosition: 0,\n            startupTime: 0,\n            manualPlayTime: 0\n        };\n\n        // constructors from adobe for deligate\n        var CustomMediaHeartbeatDelegate = new ADB.va.MediaHeartbeatDelegate();\n        var MediaHeartbeat = ADB.va.MediaHeartbeat; // mapping to match documentation\n\n        // video info deligate\n        CustomMediaHeartbeatDelegate.getCurrentPlaybackTime = function () {\n            // playhead will be 0 for ads.\n            return Math.round(_stateInfo.playheadPosition / 1000) || 0;\n        };\n\n        CustomMediaHeartbeatDelegate.getQoSObject = function () {\n            // dont have QOS data right now (<bitrate>, <startuptime>, <fps>, <droppedFrames>)\n            return MediaHeartbeat.createQoSObject(0, Math.round(_stateInfo.startupTime), 0, 0);\n        };\n\n        var createAMandHBObjects = function (playerName) {\n            playerName = playerName || window.otherVideoPlayerTech || 'playmaker'; // need to make this more dynamic\n\n            var debugState = window.BI && BI.console.list() && BI.console.list()[logEvent.logGroup] === 'true' || false\n            // create new appMeasurementmain and heartbeat instance \n            if (!_mediaHeartbeat) {\n                // use DTM values since this may load before the page track is complete\n                var appMAccount = window.hbCutomValues && typeof window.hbCutomValues.appMAccount === 'function' && window.hbCutomValues.appMAccount() || ''; // get from site specific function\n                // Set-up the AppMeasurement component using values from page version.\n                _appMeasurement = new AppMeasurement(appMAccount);\n                _appMeasurement.visitor = visitor;\n                _appMeasurement.trackingServer = s.trackingServer;\n                _appMeasurement.charSet = 'UTF-8';\n                _appMeasurement.doPlugins = false;\n                _appMeasurement.ssl = true;\n                $t('track', 'univideo_ahb_adobeAppMeasurmentLoaded', {\n                    'sc_obj': _appMeasurement\n                });\n\n                // Media Heartbeat initialization\n                var mediaConfig = new ADB.va.MediaHeartbeatConfig();\n                mediaConfig.trackingServer = 'nbcume.hb.omtrdc.net';\n                mediaConfig.playerName = playerName;\n                mediaConfig.debugLogging = debugState; // set this to false for production apps.\n                mediaConfig.ssl = true;\n                mediaConfig.appVersion = window.$ndp && window.$ndp.__version || 'unknown'; // TODO need playmaker info\n                mediaConfig.ovp = 'unknown'; // change later\n                mediaConfig.channel = (function () {\n                    if (window.hbCutomValues && window.hbCutomValues.playerStyle === 'Offsite Embedded') {\n                        return 'Off-domain';\n                    }\n                    return 'On-domain';\n                })();\n\n                _mediaHeartbeat = new MediaHeartbeat(CustomMediaHeartbeatDelegate, mediaConfig, _appMeasurement);\n            }\n        };\n\n        var setStartupTime = function (playInitiate) {\n            if (!window.performance || _stateInfo.startupTime !== 0) {\n                // only set startuptime first play\n                return;\n            }\n            var startupTime = 0;\n            if (playInitiate === 'Auto') {\n                startupTime = performance.now() / 1000;\n            } else {\n                startupTime = (performance.now() - _stateInfo.manualPlayTime) / 1000;\n            }\n            _stateInfo.startupTime = startupTime;\n        };\n\n        //formating for publish date\n        var formatDate = function (dateStr) {\n            //convert: Thu Nov 09 2017 16:32:29 GMT+0000 (UTC) convert to 12/22/2015\n            if (typeof dateStr !== 'string') {\n                return false;\n            }\n            var date = new Date(dateStr);\n            //return if its not a valid date\n            if (isNaN(date.getTime())) { return false; }\n\n            return (date.getUTCMonth() + 1) + '/' + date.getUTCDate() + '/' + date.getUTCFullYear();\n        };\n\n        // TODO this needs non-ndp-solution\n        $t('on', 'ndp_playerManualPlay', function () {\n            _stateInfo.manualPlayTime = window.performance && performance.now() || 0;\n            logEvent('ndp_playerManualPlay', {});\n        });\n\n        // process events\n        $t('on', 'uni_videoEvent', function (e, data) {\n            var videoData = data.videoData || {};\n            var videoState = data.videoState || {};\n\n            // if its a progress event, just update time and return\n            if (data.eventType === uniEvent.PROGRESS) {\n                _stateInfo.playheadPosition = videoData.playheadPosition;\n                return;\n            }\n\n            // if the heartbeat instance wasn't created yet, do it now\n            createAMandHBObjects();\n\n            // set videoType based on guid (VOD, LINEAR, LIVE)\n            var videoType = (function () {\n                if (/^lv_/.test(videoData.guid) || /^nbcnewslive/.test(videoData.guid) || videoData.streamType === 'linear') {\n                    return 'Linear';\n                } else if (/^nn_netcast_/.test(videoData.guid)) {\n                    return 'VOD Episode';\n                } else {\n                    return 'VOD Clip';\n                }\n            })();\n\n            // not setup yet\n            var playListInfo = (function () {\n                var playListInfo = {\n                    'id': false,\n                    'label': false\n                };\n                if (videoData.associatedPlaylist) {\n                    playListInfo.label = videoData.associatedPlaylist.headline && videoData.associatedPlaylist.headline.actual || false;\n                    playListInfo.id = videoData.associatedPlaylist.playlist_id || false;\n                }\n                return playListInfo;\n            })();\n\n            // had to move this out becuase of the pre-load event firing, and not knowing if ad_Start or content_Start firing\n            var startSession = function (customContextData, videoType) {\n                // start session on first frame\n\n                if (videoState.playState === 'stop') {\n                    var mediaInfo = MediaHeartbeat.createMediaObject(\n                        customContextData.videotitle || noValue, // video name\n                        customContextData.videoguid || noValue, // video ID\n                        (function () {\n                            if (videoType === 'Linear') {\n                                return -1; // set duration to -1 if its linear\n                            } else {\n                                return videoData.duration || 0;\n                            }\n                        })(), // videoLength\n                        (function () {\n                            if (videoType === 'Linear') {\n                                return MediaHeartbeat.StreamType.LIVE;\n                            } else {\n                                return MediaHeartbeat.StreamType.VOD; // default VOD\n                            }\n                        })()\n                    );\n                    _mediaHeartbeat.trackSessionStart(mediaInfo, customContextData);\n                }\n            };\n\n            var customContextData = { // custom context data for calls\n                'videocliptype': videoData.videoType || noValue,\n                'videocontentsource': videoData.source || noValue, // show name / network\n                'videocontenttype': 'Video',\n                'videodate': s.customTimeParting('d'),\n                'videoday': s.customTimeParting('dw'),\n                'videoguid': videoData.guid || noValue,\n                'videohour': s.customTimeParting('h'),\n                'videoinitiate': videoData.playInitiate || noValue, // \"Auto\" vs. \"Manual\" vs. \"Continuous\"\n                'videominute': s.customTimeParting('m'), // use customTimepart from scode file\n                'videompxid': videoData.mpxId || noValue,\n                'videonetwork': videoData.newsNetwork || noValue,\n                'videopagecontentcategory': noValue, // set remotly\n                'videopagename': s.pageName || noValue,\n                'videopagetype': noValue, // set remotly\n                'videoplatform': 'Web', // [todo] maybe mobile too?\n                'videoplayerstyle': noValue, // set remotly\n                'videoplayertech': videoData.playbackAdapter || noValue,\n                'videoplayerurl': window.location.href.split('?')[0],\n                'videoplaylist': playListInfo.label || noValue,\n                'videoplaylistid': playListInfo.id || noValue,\n                'videoprogram': videoData.source || noValue,\n                'videopublishdate': formatDate(videoData.datePublished) || noValue,\n                'videoscreen': 'Normal', // [TODO] make this also show \"Full\"\n                'videostatus': 'Unrestricted',\n                'videosubcat1': noValue, // mpx primary category\n                'videosubcat2': noValue,\n                'videotitle': videoData.title || noValue,\n                // optionsal values\n                'videoadblockerdetection': s.cookieRead('i_abd') || noValue, // use s cookieread\n                'videonativesponsor': noValue,\n                'videopagestorylines': noValue,\n                'videoplayertestvalue': window.__DY_VIDEO_TEST__ && window.__DY_VIDEO_TEST__.videoPlayerType || noValue,\n                'videostreamcount': videoData.videoCount || noValue, // video count (set inside the event)\n                'videovideocontenttype': videoType,\n                'videocontentrating': videoData.sentiment || noValue,\n                'videovisitorid': visitor.getMarketingCloudVisitorID(), // for testing mostly, visitorID\n                'videoscrollcount': s.contextData['news.scrollcount'] || noValue,\n                'videosessionnumber': s.contextData['news.sessionnumber'] || noValue,\n                'videoflashversion': s.contextData['news.flashversion'] || noValue,\n                'videoplayercount': $t('jsonLd.NewsArticle.0.video', []).length || noValue\n\n            };\n\n            logEvent(data.eventType, { data: data, contextData: customContextData, state: _stateInfo })\n\n            // specific events\n            switch (data.eventType) {\n                case uniEvent.VIDEO_LOADED:\n                    if (videoState.playState !== 'stop') {\n                        // if other video is started while in pause, close out last session, and reset values\n                        _mediaHeartbeat.trackSessionEnd();\n                        _stateInfo.playheadPosition = 0;\n                    }\n\n                    // reload app measurement settings before a videoLoad (to be sure its up to date)\n                    _appMeasurement.clearVars();\n                    _appMeasurement.pageName = s.pageName;\n                    startSession(customContextData, videoType);\n                    break;\n\n                case uniEvent.PLAY:\n                    // set startup time\n                    setStartupTime(videoData.playInitiate);\n\n                    if (videoState.playState !== 'play') {\n                        // if first asset after load\n                        _mediaHeartbeat.trackPlay();\n                    }\n                    break;\n                case uniEvent.PAUSE:\n                    _mediaHeartbeat.trackPause();\n                    break;\n                case uniEvent.SEEK_START:\n                    _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.SeekStart);\n                    break;\n                case uniEvent.SEEK_COMPLETE:\n                    _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.SeekComplete);\n\n                    // track rewind event (TODO not setup)\n                    if (videoData.playheadPosition < videoData.playheadPosition && false) {\n                        _appMeasurement.contextData = customContextData;\n                        _appMeasurement.contextData.videoscrub = 'rewind';\n                        _appMeasurement.tl(this, 'o', 'Video Rewind', null);\n                    }\n                    break;\n                case uniEvent.COMPLETE: // TODO not setup\n                    _mediaHeartbeat.trackComplete();\n                    _mediaHeartbeat.trackSessionEnd();\n                    _stateInfo.playheadPosition = 0;\n                    break;\n                case uniEvent.AD_BREAK_START:\n                    var adBreakInfo = MediaHeartbeat.createAdBreakObject(\n                        noValue, // name\n                        videoState.adBreakPosition, // position\n                        _stateInfo.playheadPosition); // startTime\n                    _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdBreakStart, adBreakInfo);\n                    break;\n                case uniEvent.AD_BREAK_COMPLETE:\n                    _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdBreakComplete);\n                    break;\n                case uniEvent.AD_PLAY:\n                    // set startup time \n                    setStartupTime(videoData.playInitiate);\n                    // for ads, its only ever at the beginings for now, so hard coded\n                    var adLength = Math.round(videoData.adLength / 1000) || 0;\n                    var adInfo = MediaHeartbeat.createAdObject(\n                        noValue, // name\n                        ('rand_' + (Math.random() * 36 * 100000 | 0).toString(36)), // id (random ID)\n                        videoState.adPosition, // position\n                        adLength); // length\n\n                    _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdStart, adInfo, customContextData);\n                    // do the track play AFTER the ad starts\n                    if (videoState.playState !== 'play') {\n                        _mediaHeartbeat.trackPlay();\n                    }\n                    break;\n                case uniEvent.AD_COMPLETE:\n                    _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.AdComplete);\n                    break;\n                case uniEvent.SEGMENT_START:\n                    var chapterInfo = MediaHeartbeat.createChapterObject(\n                        videoData.assetID, // CHAPTER_NAME\n                        videoState.segmentPosition,  //POSITION\n                        -1,  //LENGTH\n                        _stateInfo.playheadPosition //START_TIME\n                    );\n                    _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.ChapterStart,\n                        chapterInfo,\n                        {\n                            segmentType: \"Program\",\n                            segmentName: videoData.assetID\n                        });\n                    break;\n                case uniEvent.SEGMENT_END:\n                    _mediaHeartbeat.trackEvent(MediaHeartbeat.Event.ChapterComplete);\n                    break;\n                default:\n                    break;\n            }\n        });\n    };\n\n    // run after adobe is loaded, or if its alrady loaded.\n    if ($t('dtm_adobeAppMeasurmentLoaded', 'not loaded') !== 'not loaded') {\n        setupHeartbeat(window.s);\n    } else {\n        $t('on', 'dtm_adobeAppMeasurmentLoaded', function () {\n            setupHeartbeat(window.s);\n        });\n    }\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLfa08228894bc4bd8a0fd366db6c9d283',
            name: 'Action - elections_*',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function(){\n  /* globals $t, s */\n  $t('on', 'elections_expand_counties', function (e) {\n      var actionContextData = {\n          'news.linkmoduledetail': 'Expand',\n          'news.linkmoduletype': 'Elections Counties Button',\n      };\n      s.contextData = s.extendArray(s.contextData, actionContextData);\n\n      //track action\n      s.tl(true, 'o', 'expand elections counties');\n\n      //cleanup values after action\n      for (var item in actionContextData) {\n          delete s.contextData[item];\n      }\n  });\n\n  $t('on', ['elections_expand_polls','eleections_expand_polls'], function (e) {//there is a typo in the event, remove later\n      var actionContextData = {\n          'news.linkmoduledetail': 'Expand',\n          'news.linkmoduletype': 'Elections Polls Button',\n      };\n      s.contextData = s.extendArray(s.contextData, actionContextData);\n\n      //track action\n      s.tl(true, 'o', 'expand elections polls');\n\n      //cleanup values after action\n      for (var item in actionContextData) {\n          delete s.contextData[item];\n      }\n  });\n  \n\n  $t('on', 'elections_hover_map', function (e, data) {\n      var actionContextData = {\n          'news.linkmoduledetail': $t(e.type + '.duration'),\n          'news.linkmoduletype': 'Hover Election Map',\n      };\n      s.contextData = s.extendArray(s.contextData, actionContextData);\n\n      //track action\n      s.tl(true, 'o', 'hover election map');\n\n      //cleanup values after action\n      for (var item in actionContextData) {\n          delete s.contextData[item];\n      }\n  });\n})()",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLfb8c0fb961994be0bcd91e558b488ba1',
            name: 'BI $t logging ',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['msnbc.com', 'nbcnews.com', 'today.com', 'telemundo.com'] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "// $t debug\n(function () {\n    if (window.$t && window.BI && window.BI.console) {\n        window.$t('bindTrack', function (e, trackingEvent) {\n            window.BI.console.log(trackingEvent.eventType, trackingEvent.eventData, '$t');\n        });\n    }\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL22c753eb52264ec097a38eb62ec787c6',
            name: 'BizDev - NBCU Checkout',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['today.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: '/shop/test-article-t164692', valueIsRegex: !1 },
                    { value: '/shop/test-universal-checkout-prod-t187800' },
                    {
                      value: '/paid-content/test-storied-universal-checkout-article-prod-t187801',
                    },
                    { value: '/shop/support-t182786' },
                    {
                      value: '/paid-content/no-race-no-problem-3-ways-stay-motivated-run-t191215',
                    },
                    { value: '/shop/?$', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    var loadedScripts = {};\n    var loadScript = function (address, elementID) {\n        if (address && !loadedScripts[address]) {\n            var t = document.createElement('script'); t.async = !0;\n            var d = document.createElement('div');\n            d.id = elementID;\n            t.src = address;\n\n            var body = document.getElementsByTagName('body')[0];\n            body.appendChild(d);\n            var s = document.getElementsByTagName('script')[0];\n            s.parentNode.insertBefore(t, s);\n            // be sure the script isn't loaded twice\n            loadedScripts[address] = true;\n        }\n    };\n\n    var scripts = {\n        stage: 'https://nonprod-commerce.nbcuni.com/uat/widget/latest/bootstrap.js',\n        prod: 'https://commerce.nbcuni.com/public/widget/latest/bootstrap.js'\n    }\n    var isProd = (_satellite && _satellite.buildInfo && _satellite.buildInfo.environment === 'production' && document.location.host.indexOf('uat.') === -1)\n\n    if (isProd) {//always stage for now\n        loadScript(scripts.prod);\n    } else {\n        loadScript(scripts.stage);\n    }\n\n    window.onload = function () {\n        window.uscWidget.init({\n            theme: \"today\",\n            lang: document.documentElement.lang,\n            popoverRenewalTimeUnit: \"days\",\n            popoverRenewalTimeAmount: 60,\n            networkBrand: \"nbcu-today\",\n            externalLinks: {\n                customerService: \"/shop/support-t182786#anchor-CustomerService\",\n                returnsPolicy: \"/shop/support-t182786#anchor-30DayReturns\",\n                faq: \"/shop/support-t182786#anchor-FAQs\",\n                termsAndConditions: \"https://www.nbcuniversal.com/privacy?brandA=NBC_News&intake=NBC_News\",\n                privacyPolicy: \"https://www.today.com/shop/support-t182786#anchor-TermsofService\",\n            },\n        });\n    };\n\n})();",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLba2d7f01eaab4818899faea655167946',
            name: 'BizDev - Dynata tag',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['today.com', 'nbcnews.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/embedded-video/', valueIsRegex: !0 }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function () {\n    var imgPing = function (pixelUrl, data, id) {\n        id = id ? id : Math.random().toString(36).substr(2, 9);\n        var qStr = [];\n        for (var p in data) {\n            if (data.hasOwnProperty(p) && data[p] !== '') {\n                qStr.push(encodeURIComponent(p) + \"=\" + encodeURIComponent(data[p]));\n            }\n        }\n        qStr = qStr.join(\"&\");\n\n        var pixel = document.createElement(\"img\");\n        pixel.src = pixelUrl + '?' + qStr;\n        pixel.id = id;\n        document.body.appendChild(pixel);\n\n        return id;\n    };\n    // <img src=\"https://tag.researchnow.com/t/beacon?adn=13&ca=CAMPAIGN&cr=CREATIVE&pl=PLACEMENT&pr=284801&si=NBCNEWS&eid=EXTERNALID\" />\n    var data = {\n        'adn': 13,\n        'ca': window.BI && window.BI.userInfo && window.BI.userInfo.get('referrer') || '', //CAMPAIGN\n        'cr': '', //CREATIVE\n        'pl': document.location.href,\n        'pr': 284801,\n        'si': 'NBCNEWS',\n        'eid': '' //EXTERNALID\n    }\n\n    var pixelId = imgPing('https://tag.researchnow.com/t/beacon', data);\n})()",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLca9119e833bf4cc99385279da40a4c5c',
            name: 'BizDev - Branch tag',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/domain.js',
                settings: { domains: ['nbcnews.com'] },
              },
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: {
                  paths: [
                    { value: '/embedded-video/', valueIsRegex: !0 },
                    { value: '/playmaker/embed', valueIsRegex: !0 },
                  ],
                },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "(function () {\n    // Sets the 'branch' window variable\n    (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src=\"https://cdn.branch.io/branch-latest.min.js\";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,\"script\",\"branch\",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},\"addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking\".split(\" \"), 0);\n\n    var keys = {\n        dev: 'key_test_jlM6CmXnvwa9jp4CmPsKGahbDzpCP4uH',\n        prod: 'key_live_bmS4ym2cDBm2ge4BjKwILcjeCvnyQ3v3'\n    }\n\n    var isProd = (_satellite && _satellite.buildInfo && _satellite.buildInfo.environment === 'production' && document.location.host.indexOf('uat.') === -1)\n\n    if (isProd) {\n        branch.init(keys.prod, function(err) {\n            if (err) console.log('error initializing Branch in prod', err);\n        });\n    } else {\n        branch.init(keys.dev, function(err, data) {\n            if (err) console.log('error initializing branch in dev');\n        });\n    }\n  \n    var mParticleQueryResult = $t('mParticle_setIdResolved.mpid', 'not_available');\n\n    if (mParticleQueryResult !== 'not_available') {\n        // In this case, mParticle_setIdResolved has already loaded, and the mpid is available if queried\n        branch.setIdentity(mParticleQueryResult, function (err) {\n            if (err) console.log('error setting Branch identity');\n        });\n    } else {\n        // mParticle_setIdResolved has not yet been tracked, and we want to listen for it\n        $t('on', 'mParticle_setIdResolved', function(e, eventData) {\n            branch.setIdentity(eventData.mpid, function (err) {\n                if (err) console.log('error setting Branch identity');\n            });\n        });\n    }\n})();",
                  language: 'javascript',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "(function () {\n  if (document.location.pathname.includes('/politics')) {\n    var delayMs = 5000;\n    \n    setTimeout(function () {\n      branch.closeJourney(function (err, data) {\n        if (err) console.log(err, data);\n\n        // We want to run this regardless if whether or not the closeJourney errored out\n        setTimeout(function () {\n          /* \n            This key/value pair is entirely arbitrary.\n            Its only purpose is to be found by a condition specified in the Branch dashboard.\n          */\n          branch.track('pageview', {\n            // Convert to seconds\n            delay: delayMs / 1000\n          });\n        }, 1000);\n      });\n    }, delayMs);\n  }\n})();\n",
                  language: 'javascript',
                },
              },
            ],
          },
        ],
      });
    var $___var_5ef7f2c62607b050 = (function () {
      const $___old_888ca7ddeb74ad58 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_888ca7ddeb74ad58)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_7b3e42788f2718a1.userAgent
          ));
        return function () {
          'use strict';
          function e (e, t) {
            return e((t = { exports: {} }), t.exports), t.exports;
          }
          function t (t) {
            var n = this.constructor;
            return this.then(
              function (e) {
                return n.resolve(t()).then(function () {
                  return e;
                });
              },
              function (e) {
                return n.resolve(t()).then(function () {
                  return n.reject(e);
                });
              }
            );
          }
          function l (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function a () {}
          function i (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function r (e) {
            if (!(this instanceof r)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              p(e, this);
          }
          function s (a, i) {
            for (; 3 === a._state; ) a = a._value;
            0 !== a._state
              ? ((a._handled = !0),
                r._immediateFn(function () {
                  var e = 1 === a._state ? i.onFulfilled : i.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(a._value);
                    } catch (n) {
                      return void c(i.promise, n);
                    }
                    o(i.promise, t);
                  } else (1 === a._state ? o : c)(i.promise, a._value);
                }))
              : a._deferreds.push(i);
          }
          function o (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof r) return (e._state = 3), (e._value = t), void d(e);
                if ('function' == typeof n) return void p(i(n, t), e);
              }
              (e._state = 1), (e._value = t), d(e);
            } catch (a) {
              c(e, a);
            }
          }
          function c (e, t) {
            (e._state = 2), (e._value = t), d(e);
          }
          function d (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              r._immediateFn(function () {
                e._handled || r._unhandledRejectionFn(e._value);
              });
            for (var t = 0, n = e._deferreds.length; t < n; t++) s(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function u (e, t, n) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof t ? t : null),
              (this.promise = n);
          }
          function p (e, t) {
            var n = !1;
            try {
              e(
                function (e) {
                  n || ((n = !0), o(t, e));
                },
                function (e) {
                  n || ((n = !0), c(t, e));
                }
              );
            } catch (a) {
              if (n) return;
              (n = !0), c(t, a);
            }
          }
          function g (e) {
            if (null === e || e === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(e);
          }
          function n () {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
              for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                  .map(function (e) {
                    return t[e];
                  })
                  .join('')
              )
                return !1;
              var a = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  a[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, a)).join('')
              );
            } catch (i) {
              return !1;
            }
          }
          function h (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var f = function (e) {
                var n = [];
                return (
                  e.forEach(function (t) {
                    t.events &&
                      t.events.forEach(function (e) {
                        n.push({ rule: t, event: e });
                      });
                  }),
                  n.sort(function (e, t) {
                    return e.event.ruleOrder - t.event.ruleOrder;
                  })
                );
              },
              m = 'debug',
              b = function (t, e) {
                var n = function () {
                    return 'true' === t.getItem(m);
                  },
                  a = function (e) {
                    t.setItem(m, e);
                  },
                  i = [],
                  r = function (e) {
                    i.push(e);
                  };
                return (
                  (e.outputEnabled = n()),
                  {
                    onDebugChanged: r,
                    getDebugEnabled: n,
                    setDebugEnabled: function (t) {
                      n() !== t &&
                        (a(t),
                        (e.outputEnabled = t),
                        i.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              _ = 'Module did not export a function.',
              v = function (r, s) {
                return function (e, t, n) {
                  n = n || [];
                  var a = r.getModuleExports(e.modulePath);
                  if ('function' != typeof a) throw new Error(_);
                  var i = s(e.settings || {}, t);
                  return a.bind(null, i).apply(null, n);
                };
              },
              y = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              S = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              P = '\uD83D\uDE80',
              k =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : P,
              E = !1,
              I = function (e) {
                if (E && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(k),
                    e !== S.DEBUG || window.console[e] || (e = S.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              D = I.bind(null, S.LOG),
              w = I.bind(null, S.INFO),
              T = I.bind(null, S.DEBUG),
              C = I.bind(null, S.WARN),
              A = I.bind(null, S.ERROR),
              O = {
                log: D,
                info: w,
                debug: T,
                warn: C,
                error: A,
                get outputEnabled () {
                  return E;
                },
                set outputEnabled (e) {
                  E = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: D.bind(null, t),
                    info: w.bind(null, t),
                    debug: T.bind(null, t),
                    warn: C.bind(null, t),
                    error: A.bind(null, t),
                  };
                },
              },
              L = e(function (a) {
                !(function (e) {
                  if (((a.exports = e()), !!0)) {
                    var t = window.Cookies,
                      n = (window.Cookies = e());
                    n.noConflict = function () {
                      return (window.Cookies = t), n;
                    };
                  }
                })(function () {
                  function c () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var a in n) t[a] = n[a];
                    }
                    return t;
                  }
                  function d (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (l) {
                    function o () {}
                    function n (e, t, n) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (n = c({ path: '/' }, o.defaults, n)).expires &&
                          (n.expires = new Date(1 * new Date() + 86400000 * n.expires)),
                          (n.expires = n.expires ? n.expires.toUTCString() : '');
                        try {
                          var a = JSON.stringify(t);
                          /^[\{\[]/.test(a) && (t = a);
                        } catch (s) {}
                        (t = l.write
                          ? l.write(t, e)
                          : encodeURIComponent(String(t)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var i = '';
                        for (var r in n)
                          n[r] &&
                            ((i += '; ' + r), !0 !== n[r] && (i += '=' + n[r].split(';')[0]));
                        return (document.cookie = e + '=' + t + i);
                      }
                    }
                    function t (e, t) {
                      if ('undefined' != typeof document) {
                        for (
                          var n = {},
                            a = document.cookie ? document.cookie.split('; ') : [],
                            i = 0;
                          i < a.length;
                          i++
                        ) {
                          var r = a[i].split('='),
                            s = r.slice(1).join('=');
                          t || '"' !== s.charAt(0) || (s = s.slice(1, -1));
                          try {
                            var o = d(r[0]);
                            if (((s = (l.read || l)(s, o) || d(s)), t))
                              try {
                                s = JSON.parse(s);
                              } catch (c) {}
                            if (((n[o] = s), e === o)) break;
                          } catch (c) {}
                        }
                        return e ? n[e] : n;
                      }
                    }
                    return (
                      (o.set = n),
                      (o.get = function (e) {
                        return t(e, !1);
                      }),
                      (o.getJSON = function (e) {
                        return t(e, !0);
                      }),
                      (o.remove = function (e, t) {
                        n(e, '', c(t, { expires: -1 }));
                      }),
                      (o.defaults = {}),
                      (o.withConverter = e),
                      o
                    );
                  }
                  return e(function () {});
                });
              }),
              N = { get: L.get, set: L.set, remove: L.remove },
              M = window,
              R = 'com.adobe.reactor.',
              x = function (a, e) {
                var i = R + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_7f9b833359b842bc = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_7f9b833359b842bc)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_12e4a56044062aff.localStorage
                        ));
                      return function () {
                        try {
                          return M[a].getItem(i + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_7f9b833359b842bc)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_7f9b833359b842bc
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_ddd400de01846f2c = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_ddd400de01846f2c)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_12e4a56044062aff.localStorage
                        ));
                      return function () {
                        try {
                          return M[a].setItem(i + e, t), !0;
                        } catch (n) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_ddd400de01846f2c)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_ddd400de01846f2c
                        ));
                    }
                  },
                };
              },
              j = '_sdsat_',
              V = 'dataElements.',
              B = 'dataElementCookiesMigrated',
              F = x('localStorage'),
              U = x('sessionStorage', V),
              q = x('localStorage', V),
              H = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              G = {},
              Y = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (n) {}
                return t;
              },
              K = function (e, t, n) {
                var a;
                switch (t) {
                  case H.PAGEVIEW:
                    return void (G[e] = n);
                  case H.SESSION:
                    return void ((a = Y(n)) && U.setItem(e, a));
                  case H.VISITOR:
                    return void ((a = Y(n)) && q.setItem(e, a));
                }
              },
              $ = function (e, t) {
                var n = N.get(j + e);
                n !== undefined && K(e, t, n);
              },
              W = {
                setValue: K,
                getValue: function (e, t) {
                  var n;
                  switch (t) {
                    case H.PAGEVIEW:
                      return G.hasOwnProperty(e) ? G[e] : null;
                    case H.SESSION:
                      return null === (n = U.getItem(e)) ? n : JSON.parse(n);
                    case H.VISITOR:
                      return null === (n = q.getItem(e)) ? n : JSON.parse(n);
                  }
                },
                migrateCookieData: function (t) {
                  F.getItem(B) ||
                    (Object.keys(t).forEach(function (e) {
                      $(e, t[e].storageDuration);
                    }),
                    F.setItem(B, !0));
                },
              },
              Q = function (e, t, n, a) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  n +
                  (a ? '\n' + a : '')
                );
              },
              z = function (o, c, l, d) {
                return function (e, t) {
                  var n = c(e);
                  if (!n) return d ? '' : undefined;
                  var a,
                    i = n.storageDuration;
                  try {
                    a = o.getModuleExports(n.modulePath);
                  } catch (s) {
                    return void O.error(Q(n, e, s.message, s.stack));
                  }
                  if ('function' == typeof a) {
                    var r;
                    try {
                      r = a(l(n.settings, t), t);
                    } catch (s) {
                      return void O.error(Q(n, e, s.message, s.stack));
                    }
                    return (
                      i && (null != r ? W.setValue(e, i, r) : (r = W.getValue(e, i))),
                      null == r && null != n.defaultValue && (r = n.defaultValue),
                      'string' == typeof r &&
                        (n.cleanText && (r = y(r)), n.forceLowerCase && (r = r.toLowerCase())),
                      r
                    );
                  }
                  O.error(Q(n, e, 'Module did not export a function.'));
                };
              },
              J = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return y(e.textContent);
                },
              },
              X = function (e, t, n) {
                for (var a, i = e, r = 0, s = t.length; r < s; r++) {
                  if (null == i) return undefined;
                  var o = t[r];
                  if (n && '@' === o.charAt(0)) {
                    var c = o.slice(1);
                    i = J[c](i);
                  } else if (i.getAttribute && (a = o.match(/^getAttribute\((.+)\)$/))) {
                    var l = a[1];
                    i = i.getAttribute(l);
                  } else i = i[o];
                }
                return i;
              },
              Z = function (r, s, o) {
                return function (e, t) {
                  var n;
                  if (s(e)) n = o(e, t);
                  else {
                    var a = e.split('.'),
                      i = a.shift();
                    'this' === i
                      ? t && (n = X(t.element, a, !0))
                      : 'event' === i
                      ? t && (n = X(t, a))
                      : 'target' === i
                      ? t && (n = X(t.target, a))
                      : (n = X(r[i], a));
                  }
                  return n;
                };
              },
              ee = function (n, a) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    a(e) || 'this' === t || 'event' === t || 'target' === t || n.hasOwnProperty(t)
                  );
                };
              },
              te = function (e, t, n) {
                var a = { exports: {} };
                return e.call(a.exports, a, a.exports, t, n), a.exports;
              },
              ne = function () {
                var s = {},
                  n = function (e) {
                    var t = s[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(s).forEach(function (e) {
                      try {
                        a(e);
                      } catch (n) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          n.message +
                          (n.stack ? '\n' + n.stack : '');
                        O.error(t);
                      }
                    });
                  },
                  a = function (e) {
                    var t = n(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = te(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, n, a, i) {
                    var r = { definition: t, extensionName: n, require: a, turbine: i };
                    (r.require = a), (s[e] = r);
                  },
                  hydrateCache: e,
                  getModuleExports: a,
                  getModuleDefinition: function (e) {
                    return n(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return n(e).extensionName;
                  },
                };
              },
              ae = !1,
              ie = function (a) {
                return function (t, n) {
                  var e = a._monitors;
                  e &&
                    (ae ||
                      (O.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (ae = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](n);
                    }));
                };
              },
              re = function (i, r, s) {
                var n,
                  a,
                  o,
                  c,
                  l = [],
                  d = function (e, t, n) {
                    if (!i(t)) return e;
                    l.push(t);
                    var a = r(t, n);
                    return l.pop(), null == a && s ? '' : a;
                  };
                return (
                  (n = function (e, n) {
                    var t = /^%([^%]+)%$/.exec(e);
                    return t
                      ? d(e, t[1], n)
                      : e.replace(/%(.+?)%/g, function (e, t) {
                          return d(e, t, n);
                        });
                  }),
                  (a = function (e, t) {
                    for (var n = {}, a = Object.keys(e), i = 0; i < a.length; i++) {
                      var r = a[i],
                        s = e[r];
                      n[r] = c(s, t);
                    }
                    return n;
                  }),
                  (o = function (e, t) {
                    for (var n = [], a = 0, i = e.length; a < i; a++) n.push(c(e[a], t));
                    return n;
                  }),
                  (c = function (e, t) {
                    return 'string' == typeof e
                      ? n(e, t)
                      : Array.isArray(e)
                      ? o(e, t)
                      : 'object' == typeof e && null !== e
                      ? a(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < l.length
                      ? (O.error('Data element circular reference detected: ' + l.join(' -> ')), e)
                      : c(e, t);
                  }
                );
              },
              se = function (i) {
                return function (e, t) {
                  if ('string' == typeof e) i[arguments[0]] = t;
                  else if (arguments[0]) {
                    var n = arguments[0];
                    for (var a in n) i[a] = n[a];
                  }
                };
              },
              oe = setTimeout;
            (r.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (r.prototype.then = function (e, t) {
                var n = new this.constructor(a);
                return s(this, new u(e, t, n)), n;
              }),
              (r.prototype['finally'] = t),
              (r.all = function (t) {
                return new r(function (i, r) {
                  function s (t, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var n = e.then;
                        if ('function' == typeof n)
                          return void n.call(
                            e,
                            function (e) {
                              s(t, e);
                            },
                            r
                          );
                      }
                      (o[t] = e), 0 == --c && i(o);
                    } catch (a) {
                      r(a);
                    }
                  }
                  if (!l(t)) return r(new TypeError('Promise.all accepts an array'));
                  var o = Array.prototype.slice.call(t);
                  if (0 === o.length) return i([]);
                  for (var c = o.length, e = 0; e < o.length; e++) s(e, o[e]);
                });
              }),
              (r.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === r
                  ? t
                  : new r(function (e) {
                      e(t);
                    });
              }),
              (r.reject = function (n) {
                return new r(function (e, t) {
                  t(n);
                });
              }),
              (r.race = function (i) {
                return new r(function (e, t) {
                  if (!l(i)) return t(new TypeError('Promise.race accepts an array'));
                  for (var n = 0, a = i.length; n < a; n++) r.resolve(i[n]).then(e, t);
                });
              }),
              (r._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  oe(e, 0);
                }),
              (r._unhandledRejectionFn = function Et (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ce = window.Promise || r['default'] || r,
              le = function (l, n, a) {
                return function (o, t, c, e) {
                  return e.then(function () {
                    var r,
                      s = o.delayNext;
                    return new ce(function (e, t) {
                      var n = l(o, c, [c]);
                      if (!s) return e();
                      var a = o.timeout,
                        i = new ce(function (e, t) {
                          r = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  a / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, a);
                        });
                      ce.race([n, i]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(r), (e = n(e)), a(o, t, e), ce.reject(e);
                      })
                      .then(function () {
                        clearTimeout(r);
                      });
                  });
                };
              },
              de = function (c, n, a, i, l) {
                return function (s, t, o, e) {
                  return e.then(function () {
                    var r;
                    return new ce(function (e, t) {
                      var n = c(s, o, [o]),
                        a = s.timeout,
                        i = new ce(function (e, t) {
                          r = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  a / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, a);
                        });
                      ce.race([n, i]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(r), (e = n(e)), i(s, t, e), ce.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(r), !a(s, e))) return l(s, t), ce.reject();
                      });
                  });
                };
              },
              ue = ce.resolve(),
              pe = function (a, i, e) {
                return function (t, n) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        ue = a(e, t, n, ue);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        ue = i(e, t, n, ue);
                      }),
                    (ue = (ue = ue.then(function () {
                      e(t);
                    }))['catch'](function () {}))
                  );
                };
              },
              ge = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              fe = function (s, o, c, l) {
                return function (e, t) {
                  var n;
                  if (e.conditions)
                    for (var a = 0; a < e.conditions.length; a++) {
                      n = e.conditions[a];
                      try {
                        var i = s(n, t, [t]);
                        if (ge(i))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!o(n, i)) return c(n, e), !1;
                      } catch (r) {
                        return l(n, e, r), !1;
                      }
                    }
                  return !0;
                };
              },
              he = function (n, a) {
                return function (e, t) {
                  n(e, t) && a(e, t);
                };
              },
              me = function (n) {
                return function (e) {
                  var t = n.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              be = function (i) {
                return function (e) {
                  var t = e.rule,
                    n = e.event,
                    a = i.getModuleDefinition(n.modulePath).name;
                  return {
                    $type: i.getModuleExtensionName(n.modulePath) + '.' + a,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              _e = function (o, c, l, d, u, p) {
                return function (n, e) {
                  var a = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var i = u(e);
                    c(t, null, [
                      function r (e) {
                        var t = l(i, e);
                        n(function () {
                          o(t, a);
                        });
                      },
                    ]);
                  } catch (s) {
                    p.error(d(t, a, s));
                  }
                };
              },
              ve = function (i, r, s, o) {
                return function (e, t, n) {
                  var a = r(e);
                  s.error(i(a, t.name, n)), o('ruleActionFailed', { rule: t, action: e });
                };
              },
              ye = function (i, r, s, o) {
                return function (e, t, n) {
                  var a = r(e);
                  s.error(i(a, t.name, n)), o('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Se = function (a, i, r) {
                return function (e, t) {
                  var n = a(e);
                  i.log('Condition "' + n + '" for rule "' + t.name + '" was not met.'),
                    r('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Pe = function (t, n) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), n('ruleCompleted', { rule: e });
                };
              },
              ke = function (r, s, o) {
                return function (e, t) {
                  var n;
                  if (e.actions)
                    for (var a = 0; a < e.actions.length; a++) {
                      n = e.actions[a];
                      try {
                        r(n, t, [t]);
                      } catch (i) {
                        return void s(n, e, i);
                      }
                    }
                  o(e);
                };
              },
              Ee = function (n, a, i, r) {
                return function (e, t) {
                  r('ruleTriggered', { rule: t }), n ? i(t, e) : a(t, e);
                };
              },
              Ie = function (e, t, n) {
                return (
                  'Failed to execute "' +
                  e +
                  '" for "' +
                  t +
                  '" rule. ' +
                  n.message +
                  (n.stack ? '\n' + n.stack : '')
                );
              },
              De = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              we = [],
              Te = !1,
              Ce = function (e) {
                Te ? e() : we.push(e);
              },
              Ae = function (e, t, n) {
                e(t).forEach(function (e) {
                  n(Ce, e);
                }),
                  (Te = !0),
                  we.forEach(function (e) {
                    e();
                  }),
                  (we = []);
              },
              Oe = function (e) {
                if (
                  (e ||
                    (e = new Error(
                      'The extension triggered an error, but no error information was provided.'
                    )),
                  !(e instanceof Error))
                ) {
                  var t = 'object' == typeof e ? JSON.stringify(e) : String(e);
                  e = new Error(t);
                }
                return e;
              },
              Le = Object.getOwnPropertySymbols,
              Ne = Object.prototype.hasOwnProperty,
              Me = Object.prototype.propertyIsEnumerable,
              Re = n()
                ? Object.assign
                : function (e) {
                    for (var t, n, a = g(e), i = 1; i < arguments.length; i++) {
                      for (var r in (t = Object(arguments[i]))) Ne.call(t, r) && (a[r] = t[r]);
                      if (Le) {
                        n = Le(t);
                        for (var s = 0; s < n.length; s++) Me.call(t, n[s]) && (a[n[s]] = t[n[s]]);
                      }
                    }
                    return a;
                  },
              xe = function (e, t) {
                return (
                  Re((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          O.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              je = function (c, l) {
                return function (e, t) {
                  var n = c[e];
                  if (n) {
                    var a = n.modules;
                    if (a)
                      for (var i = Object.keys(a), r = 0; r < i.length; r++) {
                        var s = i[r],
                          o = a[s];
                        if (o.shared && o.name === t) return l.getModuleExports(s);
                      }
                  }
                };
              },
              Ve = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Be = function (n, a) {
                return function (e) {
                  if (a) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return n + e;
                };
              },
              Fe = '.js',
              Ue = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              qe = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              He = function (e, t) {
                qe(t, Fe) || (t += Fe);
                var n = t.split('/'),
                  a = Ue(e).split('/');
                return (
                  n.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? a.length && a.pop() : a.push(e));
                  }),
                  a.join('/')
                );
              },
              Ge = document,
              Ye = function (n, a) {
                return new ce(function (e, t) {
                  (a.onload = function () {
                    e(a);
                  }),
                    (a.onerror = function () {
                      t(new Error('Failed to load script ' + n));
                    });
                });
              },
              Ke = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var n = Ye(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), n;
              },
              $e = function (e, t, n, a) {
                (t = t || '&'), (n = n || '=');
                var i = {};
                if ('string' != typeof e || 0 === e.length) return i;
                var r = /\+/g;
                e = e.split(t);
                var s = 1000;
                a && 'number' == typeof a.maxKeys && (s = a.maxKeys);
                var o = e.length;
                0 < s && s < o && (o = s);
                for (var c = 0; c < o; ++c) {
                  var l,
                    d,
                    u,
                    p,
                    g = e[c].replace(r, '%20'),
                    f = g.indexOf(n);
                  0 <= f ? ((l = g.substr(0, f)), (d = g.substr(f + 1))) : ((l = g), (d = '')),
                    (u = decodeURIComponent(l)),
                    (p = decodeURIComponent(d)),
                    h(i, u)
                      ? Array.isArray(i[u])
                        ? i[u].push(p)
                        : (i[u] = [i[u], p])
                      : (i[u] = p);
                }
                return i;
              },
              We = function (e) {
                switch (typeof e) {
                  case 'string':
                    return e;
                  case 'boolean':
                    return e ? 'true' : 'false';
                  case 'number':
                    return isFinite(e) ? e : '';
                  default:
                    return '';
                }
              },
              Qe = function (n, a, i, e) {
                return (
                  (a = a || '&'),
                  (i = i || '='),
                  null === n && (n = undefined),
                  'object' == typeof n
                    ? Object.keys(n)
                        .map(function (e) {
                          var t = encodeURIComponent(We(e)) + i;
                          return Array.isArray(n[e])
                            ? n[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(We(e));
                                })
                                .join(a)
                            : t + encodeURIComponent(We(n[e]));
                        })
                        .join(a)
                    : e
                    ? encodeURIComponent(We(e)) + i + encodeURIComponent(We(n))
                    : ''
                );
              },
              ze = e(function (e, t) {
                (t.decode = t.parse = $e), (t.encode = t.stringify = Qe);
              }),
              Je = (ze.decode, ze.parse, ze.encode, ze.stringify, '@adobe/reactor-'),
              Xe = {
                cookie: N,
                document: Ge,
                'load-script': Ke,
                'object-assign': Re,
                promise: ce,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), ze.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return ze.stringify(e);
                  },
                },
                window: M,
              },
              Ze = function (a) {
                return function (e) {
                  if (0 === e.indexOf(Je)) {
                    var t = e.substr(Je.length),
                      n = Xe[t];
                    if (n) return n;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return a(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, s, o, c, l) {
                var d = e.extensions,
                  u = e.buildInfo,
                  p = e.property.settings;
                if (d) {
                  var g = je(d, s);
                  Object.keys(d).forEach(function (a) {
                    var i = d[a],
                      e = Ve(c, i.settings);
                    if (i.modules) {
                      var t = O.createPrefixedLogger(i.displayName),
                        n = Be(i.hostedLibFilesBaseUrl, u.minified),
                        r = {
                          buildInfo: u,
                          getDataElementValue: l,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: n,
                          getSharedModule: g,
                          logger: t,
                          propertySettings: p,
                          replaceTokens: c,
                          onDebugChanged: o.onDebugChanged,
                          get debugEnabled () {
                            return o.getDebugEnabled();
                          },
                        };
                      Object.keys(i.modules).forEach(function (n) {
                        var e = i.modules[n],
                          t = Ze(function (e) {
                            var t = He(n, e);
                            return s.getModuleExports(t);
                          });
                        s.registerModule(n, e, a, t, r);
                      });
                    }
                  }),
                    s.hydrateCache();
                }
                return s;
              },
              tt = function (e, t, n, a, i) {
                var r = O.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  O.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: t.property.name }),
                  (e.company = t.company),
                  (e.buildInfo = t.buildInfo),
                  (e.logger = r),
                  (e.notify = function (e, t) {
                    switch (
                      (O.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      t)
                    ) {
                      case 3:
                        r.info(e);
                        break;
                      case 4:
                        r.warn(e);
                        break;
                      case 5:
                        r.error(e);
                        break;
                      default:
                        r.log(e);
                    }
                  }),
                  (e.getVar = a),
                  (e.setVar = i),
                  (e.setCookie = function (e, t, n) {
                    var a = '',
                      i = {};
                    n && ((a = ', { expires: ' + n + ' }'), (i.expires = n));
                    var r =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      a +
                      ').';
                    O.warn(r), N.set(e, t, i);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      O.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      N.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    O.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      N.remove(e);
                  }),
                  (e.cookie = N),
                  (e.pageBottom = function () {}),
                  (e.setDebug = n);
                var s = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      s ||
                        (O.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (s = !0)),
                      t
                    );
                  },
                });
              },
              nt = window._satellite;
            if (nt && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var at = nt.container;
              delete nt.container;
              var it = at.property.settings.undefinedVarsReturnEmpty,
                rt = at.property.settings.ruleComponentSequencingEnabled,
                st = at.dataElements || {};
              W.migrateCookieData(st);
              var ot,
                ct = function (e) {
                  return st[e];
                },
                lt = ne(),
                dt = z(
                  lt,
                  ct,
                  function () {
                    return ot.apply(null, arguments);
                  },
                  it
                ),
                ut = {},
                pt = se(ut),
                gt = ee(ut, ct),
                ft = Z(ut, ct, dt);
              ot = re(gt, ft, it);
              var ht = b(x('localStorage'), O);
              tt(nt, at, ht.setDebugEnabled, ft, pt), et(at, lt, ht, ot, dt);
              var mt = ie(nt),
                bt = v(lt, ot),
                _t = me(lt),
                vt = Se(_t, O, mt),
                yt = ye(Ie, _t, O, mt),
                St = ve(Ie, _t, O, mt),
                Pt = Pe(O, mt),
                kt = _e(
                  Ee(
                    rt,
                    he(fe(bt, De, vt, yt), ke(bt, St, Pt)),
                    pe(de(bt, Oe, De, yt, vt), le(bt, Oe, St), Pt),
                    mt
                  ),
                  bt,
                  xe,
                  Ie,
                  be(lt),
                  O
                );
              Ae(f, at.rules || [], kt);
            }
            return nt;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_888ca7ddeb74ad58)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_888ca7ddeb74ad58
          ));
      }
    })();
    _satellite = $___var_5ef7f2c62607b050;
  })();
}
