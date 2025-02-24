var _satellite;
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
  const $___stub_9417959baab2caf0 = {};
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
  })($___stub_9417959baab2caf0);
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
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-11-24T10:23:54Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          MSCC_Consent: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return !(
                  'undefined' != typeof window.mscc &&
                  'function' == typeof window.mscc.hasConsent &&
                  !window.mscc.hasConsent()
                );
              },
            },
          },
          'Windows - All Pages': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return !!location.pathname.match(/\/windows\/?/gi);
              },
            },
          },
          'JSLL RedTiger': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 0 < $('#primaryArea[data-m]').length;
              },
            },
          },
          SiteConsent_Advertising: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return (
                  ('undefined' == typeof window.mscc &&
                    'undefined' == typeof window.siteConsent) ||
                  ('undefined' != typeof window.mscc && 'undefined' == typeof window.siteConsent
                    ? !('function' != typeof window.mscc.hasConsent || !window.mscc.hasConsent())
                    : null === window.siteConsent ||
                      'function' != typeof window.siteConsent.getConsentFor ||
                      'object' != typeof WcpConsent.consentCategories ||
                      siteConsent.getConsentFor(WcpConsent.consentCategories.Advertising))
                );
              },
            },
          },
          SiteConsent_SocialMedia: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return (
                  ('undefined' == typeof window.mscc &&
                    'undefined' == typeof window.siteConsent) ||
                  ('undefined' != typeof window.mscc && 'undefined' == typeof window.siteConsent
                    ? !('function' != typeof window.mscc.hasConsent || !window.mscc.hasConsent())
                    : null === window.siteConsent ||
                      'function' != typeof window.siteConsent.getConsentFor ||
                      'object' != typeof WcpConsent.consentCategories ||
                      siteConsent.getConsentFor(WcpConsent.consentCategories.SocialMedia))
                );
              },
            },
          },
          SiteConsent_Analytics: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return (
                  ('undefined' == typeof window.mscc &&
                    'undefined' == typeof window.siteConsent) ||
                  ('undefined' != typeof window.mscc && 'undefined' == typeof window.siteConsent
                    ? !('function' != typeof window.mscc.hasConsent || !window.mscc.hasConsent())
                    : null === window.siteConsent ||
                      'function' != typeof window.siteConsent.getConsentFor ||
                      'object' != typeof WcpConsent.consentCategories ||
                      siteConsent.getConsentFor(WcpConsent.consentCategories.Analytics))
                );
              },
            },
          },
        },
        extensions: {
          core: {
            displayName: 'Core',
            modules: {
              'core/src/lib/dataElements/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (n) {
                  'use strict';
                  n.exports = function (n) {
                    return n.source();
                  };
                },
              },
              'core/src/lib/events/domReady.js': {
                name: 'dom-ready',
                displayName: 'DOM Ready',
                script: function (n, e, t) {
                  'use strict';
                  var r = t('./helpers/pageLifecycleEvents');
                  n.exports = function (n, e) {
                    r.registerDomReadyTrigger(e);
                  };
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (n, e, t, r) {
                  'use strict';
                  var a,
                    i,
                    o,
                    s = t('@adobe/reactor-document'),
                    c = t('./helpers/decorateCode'),
                    u = t('./helpers/loadCodeSequentially'),
                    l = t('../../../node_modules/postscribe/dist/postscribe'),
                    d =
                      ((a = function (n) {
                        l(s.body, n, {
                          error: function (n) {
                            r.logger.error(n.msg);
                          },
                        });
                      }),
                      (i = []),
                      (o = function () {
                        if (s.body) for (; i.length; ) a(i.shift());
                        else setTimeout(o, 20);
                      }),
                      function (n) {
                        i.push(n), o();
                      }),
                    f = (function () {
                      if (s.currentScript) return s.currentScript.async;
                      for (var n = s.querySelectorAll('script'), e = 0; e < n.length; e++) {
                        var t = n[e];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(t.src)) return t.async;
                      }
                      return !0;
                    })();
                  n.exports = function (n, e) {
                    var t = { settings: n, event: e },
                      r = t.settings.source;
                    if (r)
                      return t.settings.isExternal
                        ? u(r).then(function (n) {
                            n && d(c(t, n));
                          })
                        : void (f || 'loading' !== s.readyState
                            ? d(c(t, r))
                            : s.write
                            ? s.write(c(t, r))
                            : d(c(t, r)));
                  };
                },
              },
              'core/src/lib/conditions/path.js': {
                name: 'path',
                displayName: 'Path Without Query String',
                script: function (n, e, t) {
                  'use strict';
                  var r = t('@adobe/reactor-document'),
                    a = t('../helpers/textMatch');
                  n.exports = function (n) {
                    var t = r.location.pathname;
                    return n.paths.some(function (n) {
                      var e = n.valueIsRegex ? new RegExp(n.value, 'i') : n.value;
                      return a(t, e);
                    });
                  };
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (n, e, t) {
                  'use strict';
                  var r = t('./helpers/pageLifecycleEvents');
                  n.exports = function (n, e) {
                    r.registerLibraryLoadedTrigger(e);
                  };
                },
              },
              'core/src/lib/conditions/valueComparison.js': {
                name: 'value-comparison',
                displayName: 'Value Comparison',
                script: function (n) {
                  'use strict';
                  var r = function (n) {
                      return 'number' == typeof n && isFinite(n);
                    },
                    a = function (n) {
                      return 'string' == typeof n || n instanceof String;
                    },
                    i = function (n, e) {
                      return e && a(n) ? n.toLowerCase() : n;
                    },
                    o = function (n) {
                      return r(n) ? String(n) : n;
                    },
                    s = function (n) {
                      return a(n) ? Number(n) : n;
                    },
                    e = function (r) {
                      return function (n, e, t) {
                        return (n = o(i(n, t))), (e = o(i(e, t))), a(n) && a(e) && r(n, e);
                      };
                    },
                    t = function (t) {
                      return function (n, e) {
                        return (n = s(n)), (e = s(e)), r(n) && r(e) && t(n, e);
                      };
                    },
                    c = {
                      equals: function (n, e, t) {
                        return i(n, t) == i(e, t);
                      },
                      doesNotEqual: function () {
                        return !c.equals.apply(null, arguments);
                      },
                      contains: e(function (n, e) {
                        return -1 !== n.indexOf(e);
                      }),
                      doesNotContain: function () {
                        return !c.contains.apply(null, arguments);
                      },
                      startsWith: e(function (n, e) {
                        return 0 === n.indexOf(e);
                      }),
                      doesNotStartWith: function () {
                        return !c.startsWith.apply(null, arguments);
                      },
                      endsWith: e(function (n, e) {
                        return n.substring(n.length - e.length, n.length) === e;
                      }),
                      doesNotEndWith: function () {
                        return !c.endsWith.apply(null, arguments);
                      },
                      matchesRegex: e(function (n, e, t) {
                        return new RegExp(e, t ? 'i' : '').test(n);
                      }),
                      doesNotMatchRegex: function () {
                        return !c.matchesRegex.apply(null, arguments);
                      },
                      lessThan: t(function (n, e) {
                        return n < e;
                      }),
                      lessThanOrEqual: t(function (n, e) {
                        return n <= e;
                      }),
                      greaterThan: t(function (n, e) {
                        return e < n;
                      }),
                      greaterThanOrEqual: t(function (n, e) {
                        return e <= n;
                      }),
                      isTrue: function (n) {
                        return !0 === n;
                      },
                      isTruthy: function (n) {
                        return Boolean(n);
                      },
                      isFalse: function (n) {
                        return !1 === n;
                      },
                      isFalsy: function (n) {
                        return !n;
                      },
                    };
                  n.exports = function (n) {
                    return c[n.comparison.operator](
                      n.leftOperand,
                      n.rightOperand,
                      Boolean(n.comparison.caseInsensitive)
                    );
                  };
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (n, e, t) {
                  const $___old_4194a230978668a4 = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_4194a230978668a4)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_addd751f0eb655f8.appVersion
                      ));
                    return function () {
                      'use strict';
                      var r = t('@adobe/reactor-window'),
                        a = t('@adobe/reactor-document'),
                        i = -1 !== r.navigator.appVersion.indexOf('MSIE 10'),
                        o = 'WINDOW_LOADED',
                        s = 'DOM_READY',
                        c = 'PAGE_BOTTOM',
                        u = [c, s, o],
                        l = function (n, e) {
                          return { element: n, target: n, nativeEvent: e };
                        },
                        d = {};
                      u.forEach(function (n) {
                        d[n] = [];
                      });
                      var f = function (n, e) {
                          u.slice(0, g(n) + 1).forEach(function (n) {
                            m(e, n);
                          });
                        },
                        p = function () {
                          return 'complete' === a.readyState
                            ? o
                            : 'interactive' === a.readyState
                            ? i
                              ? null
                              : s
                            : void 0;
                        },
                        g = function (n) {
                          return u.indexOf(n);
                        },
                        m = function (e, n) {
                          d[n].forEach(function (n) {
                            v(e, n);
                          }),
                            (d[n] = []);
                        },
                        v = function (n, e) {
                          var t = e.trigger,
                            r = e.syntheticEventFn;
                          t(r ? r(n) : null);
                        };
                      (r._satellite = r._satellite || {}),
                        (r._satellite.pageBottom = f.bind(null, c)),
                        a.addEventListener('DOMContentLoaded', f.bind(null, s), !0),
                        r.addEventListener('load', f.bind(null, o), !0),
                        r.setTimeout(function () {
                          var n = p();
                          n && f(n);
                        }, 0),
                        (n.exports = {
                          registerLibraryLoadedTrigger: function (n) {
                            n();
                          },
                          registerPageBottomTrigger: function (n) {
                            d[c].push({ trigger: n });
                          },
                          registerDomReadyTrigger: function (n) {
                            d[s].push({ trigger: n, syntheticEventFn: l.bind(null, a) });
                          },
                          registerWindowLoadedTrigger: function (n) {
                            d[o].push({ trigger: n, syntheticEventFn: l.bind(null, r) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_4194a230978668a4)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_4194a230978668a4
                      ));
                  }
                },
              },
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (n, e, t, r) {
                  'use strict';
                  var a = 0,
                    i = function (n) {
                      return n.settings.isExternal;
                    },
                    o = function (n, e) {
                      return '<script>\n' + e + '\n</script>';
                    },
                    s = function (e, n) {
                      var t = '__runScript' + ++a;
                      return (
                        (_satellite[t] = function (n) {
                          const $___old_19d01c4c35dcc737 = {}.constructor.getOwnPropertyDescriptor(
                            window,
                            'Storage'
                          );
                          try {
                            if ($___old_19d01c4c35dcc737)
                              ({}.constructor.defineProperty(
                                window,
                                'Storage',
                                $___stub_9417959baab2caf0.Storage
                              ));
                            return function () {
                              n.call(e.event.element, e.event, e.event.target),
                                delete _satellite[t];
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_19d01c4c35dcc737)
                              ({}.constructor.defineProperty(
                                window,
                                'Storage',
                                $___old_19d01c4c35dcc737
                              ));
                          }
                        }),
                        '<script>_satellite["' +
                          t +
                          '"](function(event, target) {\n' +
                          n +
                          '\n});</script>'
                      );
                    },
                    c = {
                      javascript: function (n, e) {
                        return n.settings.global ? o(n, e) : s(n, e);
                      },
                      html: function (n, e) {
                        return i(n) ? r.replaceTokens(e, n.event) : e;
                      },
                    };
                  n.exports = function (n, e) {
                    return c[n.settings.language](n, e);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (n, e, t) {
                  'use strict';
                  var r = t('@adobe/reactor-promise'),
                    a = t('./getSourceByUrl'),
                    i = r.resolve();
                  n.exports = function (e) {
                    var n = new r(function (t) {
                      var n = a(e);
                      r.all([n, i]).then(function (n) {
                        var e = n[0];
                        t(e);
                      });
                    });
                    return (i = n);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (t, r) {
                  !(function a (n, e) {
                    'object' == typeof r && 'object' == typeof t
                      ? (t.exports = e())
                      : 'function' == typeof define && define.amd
                      ? define([], e)
                      : 'object' == typeof r
                      ? (r.postscribe = e())
                      : (n.postscribe = e());
                  })(this, function () {
                    return (function (t) {
                      function r (n) {
                        if (a[n]) return a[n].exports;
                        var e = (a[n] = { exports: {}, id: n, loaded: !1 });
                        return t[n].call(e.exports, e, e.exports, r), (e.loaded = !0), e.exports;
                      }
                      var a = {};
                      return (r.m = t), (r.c = a), (r.p = ''), r(0);
                    })([
                      function (n, e, t) {
                        'use strict';
                        function r (n) {
                          return n && n.__esModule ? n : { default: n };
                        }
                        var a = r(t(1));
                        n.exports = a['default'];
                      },
                      function (n, e, t) {
                        'use strict';
                        function r (n) {
                          if (n && n.__esModule) return n;
                          var e = {};
                          if (null != n)
                            for (var t in n)
                              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                          return (e['default'] = n), e;
                        }
                        function a (n) {
                          return n && n.__esModule ? n : { default: n };
                        }
                        function u () {}
                        function l () {
                          var n = c.shift();
                          if (n) {
                            var e = o.last(n);
                            e.afterDequeue(),
                              (n.stream = i.apply(undefined, n)),
                              e.afterStreamStart();
                          }
                        }
                        function i (n, e, r) {
                          function a (n) {
                            (n = r.beforeWrite(n)), m.write(n), r.afterWrite(n);
                          }
                          ((m = new p['default'](n, r)).id = g++),
                            (m.name = r.name || m.id),
                            (d.streams[m.name] = m);
                          var t = n.ownerDocument,
                            i = {
                              close: t.close,
                              open: t.open,
                              write: t.write,
                              writeln: t.writeln,
                            };
                          f(t, {
                            close: u,
                            open: u,
                            write: function s () {
                              for (var n = arguments.length, e = Array(n), t = 0; t < n; t++)
                                e[t] = arguments[t];
                              return a(e.join(''));
                            },
                            writeln: function c () {
                              for (var n = arguments.length, e = Array(n), t = 0; t < n; t++)
                                e[t] = arguments[t];
                              return a(e.join('') + '\n');
                            },
                          });
                          var o = m.win.onerror || u;
                          return (
                            (m.win.onerror = function (n, e, t) {
                              r.error({ msg: n + ' - ' + e + ': ' + t }),
                                o.apply(m.win, [n, e, t]);
                            }),
                            m.write(e, function () {
                              f(t, i), (m.win.onerror = o), r.done(), (m = null), l();
                            }),
                            m
                          );
                        }
                        function d (n, e, t) {
                          if (o.isFunction(t)) t = { done: t };
                          else if ('clear' === t) return (c = []), (m = null), void (g = 0);
                          t = o.defaults(t, s);
                          var r = [
                            (n = /^#/.test(n)
                              ? window.document.getElementById(n.substr(1))
                              : n.jquery
                              ? n[0]
                              : n),
                            e,
                            t,
                          ];
                          return (
                            (n.postscribe = {
                              cancel: function a () {
                                r.stream ? r.stream.abort() : (r[1] = u);
                              },
                            }),
                            t.beforeEnqueue(r),
                            c.push(r),
                            m || l(),
                            n.postscribe
                          );
                        }
                        e.__esModule = !0;
                        var f =
                          Object.assign ||
                          function (n) {
                            for (var e = 1; e < arguments.length; e++) {
                              var t = arguments[e];
                              for (var r in t)
                                Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                            }
                            return n;
                          };
                        e['default'] = d;
                        var p = a(t(2)),
                          o = r(t(4)),
                          s = {
                            afterAsync: u,
                            afterDequeue: u,
                            afterStreamStart: u,
                            afterWrite: u,
                            autoFix: !0,
                            beforeEnqueue: u,
                            beforeWriteToken: function v (n) {
                              return n;
                            },
                            beforeWrite: function h (n) {
                              return n;
                            },
                            done: u,
                            error: function b (n) {
                              throw new Error(n.msg);
                            },
                            releaseAsync: !1,
                          },
                          g = 0,
                          c = [],
                          m = null;
                        f(d, { streams: {}, queue: c, WriteStream: p['default'] });
                      },
                      function (n, e, t) {
                        'use strict';
                        function r (n) {
                          if (n && n.__esModule) return n;
                          var e = {};
                          if (null != n)
                            for (var t in n)
                              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                          return (e['default'] = n), e;
                        }
                        function a (n) {
                          return n && n.__esModule ? n : { default: n };
                        }
                        function w (n, e) {
                          if (!(n instanceof e))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function y (n, e) {
                          var t = T + e,
                            r = n.getAttribute(t);
                          return S.existy(r) ? String(r) : r;
                        }
                        function _ (n, e, t) {
                          var r = 2 < arguments.length && t !== undefined ? arguments[2] : null,
                            a = T + e;
                          S.existy(r) && '' !== r ? n.setAttribute(a, r) : n.removeAttribute(a);
                        }
                        e.__esModule = !0;
                        var C =
                            Object.assign ||
                            function (n) {
                              for (var e = 1; e < arguments.length; e++) {
                                var t = arguments[e];
                                for (var r in t)
                                  Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                              }
                              return n;
                            },
                          k = a(t(3)),
                          S = r(t(4)),
                          j = !1,
                          T = 'data-ps-',
                          L = 'ps-style',
                          x = 'ps-script',
                          i = (function () {
                            function r (n, e) {
                              var t = 1 < arguments.length && e !== undefined ? arguments[1] : {};
                              w(this, r),
                                (this.root = n),
                                (this.options = t),
                                (this.doc = n.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new k['default']('', { autoFix: t.autoFix })),
                                (this.actuals = [n]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(n.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                _(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (r.prototype.write = function t () {
                                var n;
                                for (
                                  (n = this.writeQueue).push.apply(n, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var e = this.writeQueue.shift();
                                  S.isFunction(e) ? this._callFunction(e) : this._writeImpl(e);
                                }
                              }),
                              (r.prototype._callFunction = function a (n) {
                                var e = { type: 'function', value: n.name || n.toString() };
                                this._onScriptStart(e),
                                  n.call(this.win, this.doc),
                                  this._onScriptDone(e);
                              }),
                              (r.prototype._writeImpl = function i (n) {
                                this.parser.append(n);
                                for (
                                  var e = void 0, t = void 0, r = void 0, a = [];
                                  (e = this.parser.readToken()) &&
                                  !(t = S.isScript(e)) &&
                                  !(r = S.isStyle(e));

                                )
                                  (e = this.options.beforeWriteToken(e)) && a.push(e);
                                0 < a.length && this._writeStaticTokens(a),
                                  t && this._handleScriptToken(e),
                                  r && this._handleStyleToken(e);
                              }),
                              (r.prototype._writeStaticTokens = function o (n) {
                                var e = this._buildChunk(n);
                                return e.actual
                                  ? ((e.html = this.proxyHistory + e.actual),
                                    (this.proxyHistory += e.proxy),
                                    (this.proxyRoot.innerHTML = e.html),
                                    j && (e.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    j && (e.actualInnerHTML = this.root.innerHTML),
                                    e)
                                  : null;
                              }),
                              (r.prototype._buildChunk = function l (n) {
                                for (
                                  var e = this.actuals.length,
                                    t = [],
                                    r = [],
                                    a = [],
                                    i = n.length,
                                    o = 0;
                                  o < i;
                                  o++
                                ) {
                                  var s = n[o],
                                    c = s.toString();
                                  if ((t.push(c), s.attrs)) {
                                    if (!/^noscript$/i.test(s.tagName)) {
                                      var u = e++;
                                      r.push(c.replace(/(\/?>)/, ' ' + T + 'id=' + u + ' $1')),
                                        s.attrs.id !== x &&
                                          s.attrs.id !== L &&
                                          a.push(
                                            'atomicTag' === s.type
                                              ? ''
                                              : '<' +
                                                  s.tagName +
                                                  ' ' +
                                                  T +
                                                  'proxyof=' +
                                                  u +
                                                  (s.unary ? ' />' : '>')
                                          );
                                    }
                                  } else r.push(c), a.push('endTag' === s.type ? c : '');
                                }
                                return {
                                  tokens: n,
                                  raw: t.join(''),
                                  actual: r.join(''),
                                  proxy: a.join(''),
                                };
                              }),
                              (r.prototype._walkChunk = function s () {
                                for (
                                  var n = void 0, e = [this.proxyRoot];
                                  S.existy((n = e.shift()));

                                ) {
                                  var t = 1 === n.nodeType;
                                  if (!t || !y(n, 'proxyof')) {
                                    t && _((this.actuals[y(n, 'id')] = n), 'id');
                                    var r = n.parentNode && y(n.parentNode, 'proxyof');
                                    r && this.actuals[r].appendChild(n);
                                  }
                                  e.unshift.apply(e, S.toArray(n.childNodes));
                                }
                              }),
                              (r.prototype._handleScriptToken = function c (n) {
                                var e = this,
                                  t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (n.src = n.attrs.src || n.attrs.SRC),
                                  (n = this.options.beforeWriteToken(n)) &&
                                    (n.src && this.scriptStack.length
                                      ? (this.deferredRemote = n)
                                      : this._onScriptStart(n),
                                    this._writeScriptToken(n, function () {
                                      e._onScriptDone(n);
                                    }));
                              }),
                              (r.prototype._handleStyleToken = function u (n) {
                                var e = this.parser.clear();
                                e && this.writeQueue.unshift(e),
                                  (n.type = n.attrs.type || n.attrs.TYPE || 'text/css'),
                                  (n = this.options.beforeWriteToken(n)) &&
                                    this._writeStyleToken(n),
                                  e && this.write();
                              }),
                              (r.prototype._writeStyleToken = function d (n) {
                                var e = this._buildStyle(n);
                                this._insertCursor(e, L),
                                  n.content &&
                                    (e.styleSheet && !e.sheet
                                      ? (e.styleSheet.cssText = n.content)
                                      : e.appendChild(this.doc.createTextNode(n.content)));
                              }),
                              (r.prototype._buildStyle = function e (n) {
                                var t = this.doc.createElement(n.tagName);
                                return (
                                  t.setAttribute('type', n.type),
                                  S.eachKey(n.attrs, function (n, e) {
                                    t.setAttribute(n, e);
                                  }),
                                  t
                                );
                              }),
                              (r.prototype._insertCursor = function f (n, e) {
                                this._writeImpl('<span id="' + e + '"/>');
                                var t = this.doc.getElementById(e);
                                t && t.parentNode.replaceChild(n, t);
                              }),
                              (r.prototype._onScriptStart = function p (n) {
                                (n.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(n);
                              }),
                              (r.prototype._onScriptDone = function g (n) {
                                n === this.scriptStack[0]
                                  ? (this.scriptStack.shift(),
                                    this.write.apply(this, n.outerWrites),
                                    !this.scriptStack.length &&
                                      this.deferredRemote &&
                                      (this._onScriptStart(this.deferredRemote),
                                      (this.deferredRemote = null)))
                                  : this.options.error({
                                      msg: 'Bad script nesting or script finished twice',
                                    });
                              }),
                              (r.prototype._writeScriptToken = function m (n, e) {
                                var t = this._buildScript(n),
                                  r = this._shouldRelease(t),
                                  a = this.options.afterAsync;
                                n.src &&
                                  ((t.src = n.src),
                                  this._scriptLoadHandler(
                                    t,
                                    r
                                      ? a
                                      : function () {
                                          e(), a();
                                        }
                                  ));
                                try {
                                  this._insertCursor(t, x), (t.src && !r) || e();
                                } catch (i) {
                                  this.options.error(i), e();
                                }
                              }),
                              (r.prototype._buildScript = function v (n) {
                                var t = this.doc.createElement(n.tagName);
                                return (
                                  S.eachKey(n.attrs, function (n, e) {
                                    t.setAttribute(n, e);
                                  }),
                                  n.content && (t.text = n.content),
                                  t
                                );
                              }),
                              (r.prototype._scriptLoadHandler = function h (e, t) {
                                function r () {
                                  e = e.onload = e.onreadystatechange = e.onerror = null;
                                }
                                function a () {
                                  r(), null != t && t(), (t = null);
                                }
                                function i (n) {
                                  r(), o(n), null != t && t(), (t = null);
                                }
                                function n (n, e) {
                                  var t = n['on' + e];
                                  null != t && (n['_on' + e] = t);
                                }
                                var o = this.options.error;
                                n(e, 'load'),
                                  n(e, 'error'),
                                  C(e, {
                                    onload: function s () {
                                      if (e._onload)
                                        try {
                                          e._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (n) {
                                          i({ msg: 'onload handler failed ' + n + ' @ ' + e.src });
                                        }
                                      a();
                                    },
                                    onerror: function c () {
                                      if (e._onerror)
                                        try {
                                          e._onerror.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (n) {
                                          return void i({
                                            msg: 'onerror handler failed ' + n + ' @ ' + e.src,
                                          });
                                        }
                                      i({ msg: 'remote script failed ' + e.src });
                                    },
                                    onreadystatechange: function u () {
                                      /^(loaded|complete)$/.test(e.readyState) && a();
                                    },
                                  });
                              }),
                              (r.prototype._shouldRelease = function b (n) {
                                return (
                                  !/^script$/i.test(n.nodeName) ||
                                  !!(this.options.releaseAsync && n.src && n.hasAttribute('async'))
                                );
                              }),
                              r
                            );
                          })();
                        e['default'] = i;
                      },
                      function (t) {
                        !(function r (n, e) {
                          t.exports = e();
                        })(0, function () {
                          return (function (t) {
                            function r (n) {
                              if (a[n]) return a[n].exports;
                              var e = (a[n] = { exports: {}, id: n, loaded: !1 });
                              return (
                                t[n].call(e.exports, e, e.exports, r), (e.loaded = !0), e.exports
                              );
                            }
                            var a = {};
                            return (r.m = t), (r.c = a), (r.p = ''), r(0);
                          })([
                            function (n, e, t) {
                              'use strict';
                              function r (n) {
                                return n && n.__esModule ? n : { default: n };
                              }
                              var a = r(t(1));
                              n.exports = a['default'];
                            },
                            function (n, e, t) {
                              'use strict';
                              function r (n) {
                                return n && n.__esModule ? n : { default: n };
                              }
                              function a (n) {
                                if (n && n.__esModule) return n;
                                var e = {};
                                if (null != n)
                                  for (var t in n)
                                    Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                                return (e['default'] = n), e;
                              }
                              function l (n, e) {
                                if (!(n instanceof e))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              e.__esModule = !0;
                              var d = a(t(2)),
                                f = a(t(3)),
                                p = r(t(6)),
                                i = t(5),
                                g = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                o = (function () {
                                  function c (n, e) {
                                    var t = this,
                                      r =
                                        0 < arguments.length && n !== undefined
                                          ? arguments[0]
                                          : '',
                                      a =
                                        1 < arguments.length && e !== undefined
                                          ? arguments[1]
                                          : {};
                                    l(this, c), (this.stream = r);
                                    var i = !1,
                                      o = {};
                                    for (var s in d)
                                      d.hasOwnProperty(s) &&
                                        (a.autoFix && (o[s + 'Fix'] = !0),
                                        (i = i || o[s + 'Fix']));
                                    i
                                      ? ((this._readToken = (0, p['default'])(
                                          this,
                                          o,
                                          function () {
                                            return t._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, p['default'])(this, o, function () {
                                          return t._peekTokenImpl();
                                        })))
                                      : ((this._readToken = this._readTokenImpl),
                                        (this._peekToken = this._peekTokenImpl));
                                  }
                                  return (
                                    (c.prototype.append = function e (n) {
                                      this.stream += n;
                                    }),
                                    (c.prototype.prepend = function t (n) {
                                      this.stream = n + this.stream;
                                    }),
                                    (c.prototype._readTokenImpl = function r () {
                                      var n = this._peekTokenImpl();
                                      if (n) return (this.stream = this.stream.slice(n.length)), n;
                                    }),
                                    (c.prototype._peekTokenImpl = function a () {
                                      for (var n in g)
                                        if (g.hasOwnProperty(n) && g[n].test(this.stream)) {
                                          var e = f[n](this.stream);
                                          if (e)
                                            return 'startTag' === e.type &&
                                              /script|style/i.test(e.tagName)
                                              ? null
                                              : ((e.text = this.stream.substr(0, e.length)), e);
                                        }
                                    }),
                                    (c.prototype.peekToken = function n () {
                                      return this._peekToken();
                                    }),
                                    (c.prototype.readToken = function i () {
                                      return this._readToken();
                                    }),
                                    (c.prototype.readTokens = function o (n) {
                                      for (var e = void 0; (e = this.readToken()); )
                                        if (n[e.type] && !1 === n[e.type](e)) return;
                                    }),
                                    (c.prototype.clear = function s () {
                                      var n = this.stream;
                                      return (this.stream = ''), n;
                                    }),
                                    (c.prototype.rest = function u () {
                                      return this.stream;
                                    }),
                                    c
                                  );
                                })();
                              for (var s in (((e['default'] = o).tokenToString = function (n) {
                                return n.toString();
                              }),
                              (o.escapeAttributes = function (n) {
                                var e = {};
                                for (var t in n)
                                  n.hasOwnProperty(t) && (e[t] = (0, i.escapeQuotes)(n[t], null));
                                return e;
                              }),
                              (o.supports = d)))
                                d.hasOwnProperty(s) &&
                                  (o.browserHasFlaw = o.browserHasFlaw || (!d[s] && s));
                            },
                            function (n, e) {
                              'use strict';
                              var t = !(e.__esModule = !0),
                                r = !1,
                                a = window.document.createElement('div');
                              try {
                                var i = '<P><I></P></I>';
                                (a.innerHTML = i), (e.tagSoup = t = a.innerHTML !== i);
                              } catch (o) {
                                e.tagSoup = t = !1;
                              }
                              try {
                                (a.innerHTML = '<P><i><P></P></i></P>'),
                                  (e.selfClose = r = 2 === a.childNodes.length);
                              } catch (o) {
                                e.selfClose = r = !1;
                              }
                              (a = null), (e.tagSoup = t), (e.selfClose = r);
                            },
                            function (n, e, t) {
                              'use strict';
                              function r (n) {
                                var e = n.indexOf('-->');
                                if (0 <= e) return new l.CommentToken(n.substr(4, e - 1), e + 3);
                              }
                              function a (n) {
                                var e = n.indexOf('<');
                                return new l.CharsToken(0 <= e ? e : n.length);
                              }
                              function i (n) {
                                var o, s, c;
                                if (-1 !== n.indexOf('>')) {
                                  var e = n.match(d.startTag);
                                  if (e) {
                                    var t =
                                      ((o = {}),
                                      (s = {}),
                                      (c = e[2]),
                                      e[2].replace(d.attr, function (n, e, t, r, a, i) {
                                        t || r || a || i
                                          ? arguments[5]
                                            ? ((o[arguments[5]] = ''), (s[arguments[5]] = !0))
                                            : (o[e] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (d.fillAttr.test(e) && e) ||
                                                '')
                                          : (o[e] = ''),
                                          (c = c.replace(n, ''));
                                      }),
                                      {
                                        v: new l.StartTagToken(
                                          e[1],
                                          e[0].length,
                                          o,
                                          s,
                                          !!e[3],
                                          c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === t ? 'undefined' : u(t)))
                                      return t.v;
                                  }
                                }
                              }
                              function o (n) {
                                var e = i(n);
                                if (e) {
                                  var t = n.slice(e.length);
                                  if (t.match(new RegExp('</\\s*' + e.tagName + '\\s*>', 'i'))) {
                                    var r = t.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + e.tagName + '\\s*>', 'i')
                                    );
                                    if (r)
                                      return new l.AtomicTagToken(
                                        e.tagName,
                                        r[0].length + e.length,
                                        e.attrs,
                                        e.booleanAttrs,
                                        r[1]
                                      );
                                  }
                                }
                              }
                              function s (n) {
                                var e = n.match(d.endTag);
                                if (e) return new l.EndTagToken(e[1], e[0].length);
                              }
                              e.__esModule = !0;
                              var u =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                  ? function (n) {
                                      return typeof n;
                                    }
                                  : function (n) {
                                      return n &&
                                        'function' == typeof Symbol &&
                                        n.constructor === Symbol &&
                                        n !== Symbol.prototype
                                        ? 'symbol'
                                        : typeof n;
                                    };
                              (e.comment = r),
                                (e.chars = a),
                                (e.startTag = i),
                                (e.atomicTag = o),
                                (e.endTag = s);
                              var l = t(4),
                                d = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (n, e, t) {
                              'use strict';
                              function s (n, e) {
                                if (!(n instanceof e))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (e.__esModule = !0),
                                (e.EndTagToken = e.AtomicTagToken = e.StartTagToken = e.TagToken = e.CharsToken = e.CommentToken = e.Token = undefined);
                              var c = t(5),
                                r = (e.Token = function r (n, e) {
                                  s(this, r), (this.type = n), (this.length = e), (this.text = '');
                                }),
                                a =
                                  ((e.CommentToken = (function () {
                                    function t (n, e) {
                                      s(this, t),
                                        (this.type = 'comment'),
                                        (this.length = e || (n ? n.length : 0)),
                                        (this.text = ''),
                                        (this.content = n);
                                    }
                                    return (
                                      (t.prototype.toString = function n () {
                                        return '<!--' + this.content;
                                      }),
                                      t
                                    );
                                  })()),
                                  (e.CharsToken = (function () {
                                    function e (n) {
                                      s(this, e),
                                        (this.type = 'chars'),
                                        (this.length = n),
                                        (this.text = '');
                                    }
                                    return (
                                      (e.prototype.toString = function n () {
                                        return this.text;
                                      }),
                                      e
                                    );
                                  })()),
                                  (e.TagToken = (function () {
                                    function i (n, e, t, r, a) {
                                      s(this, i),
                                        (this.type = n),
                                        (this.length = t),
                                        (this.text = ''),
                                        (this.tagName = e),
                                        (this.attrs = r),
                                        (this.booleanAttrs = a),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (i.formatTag = function o (n, e) {
                                        var t =
                                            1 < arguments.length && e !== undefined
                                              ? arguments[1]
                                              : null,
                                          r = '<' + n.tagName;
                                        for (var a in n.attrs)
                                          if (n.attrs.hasOwnProperty(a)) {
                                            r += ' ' + a;
                                            var i = n.attrs[a];
                                            ('undefined' != typeof n.booleanAttrs &&
                                              'undefined' != typeof n.booleanAttrs[a]) ||
                                              (r += '="' + (0, c.escapeQuotes)(i) + '"');
                                          }
                                        return (
                                          n.rest && (r += ' ' + n.rest),
                                          n.unary && !n.html5Unary ? (r += '/>') : (r += '>'),
                                          t !== undefined &&
                                            null !== t &&
                                            (r += t + '</' + n.tagName + '>'),
                                          r
                                        );
                                      }),
                                      i
                                    );
                                  })()));
                              (e.StartTagToken = (function () {
                                function o (n, e, t, r, a, i) {
                                  s(this, o),
                                    (this.type = 'startTag'),
                                    (this.length = e),
                                    (this.text = ''),
                                    (this.tagName = n),
                                    (this.attrs = t),
                                    (this.booleanAttrs = r),
                                    (this.html5Unary = !1),
                                    (this.unary = a),
                                    (this.rest = i);
                                }
                                return (
                                  (o.prototype.toString = function n () {
                                    return a.formatTag(this);
                                  }),
                                  o
                                );
                              })()),
                                (e.AtomicTagToken = (function () {
                                  function i (n, e, t, r, a) {
                                    s(this, i),
                                      (this.type = 'atomicTag'),
                                      (this.length = e),
                                      (this.text = ''),
                                      (this.tagName = n),
                                      (this.attrs = t),
                                      (this.booleanAttrs = r),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = a);
                                  }
                                  return (
                                    (i.prototype.toString = function n () {
                                      return a.formatTag(this, this.content);
                                    }),
                                    i
                                  );
                                })()),
                                (e.EndTagToken = (function () {
                                  function t (n, e) {
                                    s(this, t),
                                      (this.type = 'endTag'),
                                      (this.length = e),
                                      (this.text = ''),
                                      (this.tagName = n);
                                  }
                                  return (
                                    (t.prototype.toString = function n () {
                                      return '</' + this.tagName + '>';
                                    }),
                                    t
                                  );
                                })());
                            },
                            function (n, e) {
                              'use strict';
                              function t (n, e) {
                                var t =
                                  1 < arguments.length && e !== undefined ? arguments[1] : '';
                                return n
                                  ? n.replace(/([^"]*)"/g, function (n, e) {
                                      return /\\/.test(e) ? e + '"' : e + '\\"';
                                    })
                                  : t;
                              }
                              (e.__esModule = !0), (e.escapeQuotes = t);
                            },
                            function (n, e) {
                              'use strict';
                              function u (n) {
                                return (
                                  n &&
                                    'startTag' === n.type &&
                                    ((n.unary = r.test(n.tagName) || n.unary),
                                    (n.html5Unary = !/\/>$/.test(n.text))),
                                  n
                                );
                              }
                              function l (n, e) {
                                var t = n.stream,
                                  r = u(e());
                                return (n.stream = t), r;
                              }
                              function d (n, e) {
                                var t = e.pop();
                                n.prepend('</' + t.tagName + '>');
                              }
                              function f () {
                                var n = [];
                                return (
                                  (n.last = function () {
                                    return this[this.length - 1];
                                  }),
                                  (n.lastTagNameEq = function (n) {
                                    var e = this.last();
                                    return (
                                      e && e.tagName && e.tagName.toUpperCase() === n.toUpperCase()
                                    );
                                  }),
                                  (n.containsTagName = function (n) {
                                    for (var e, t = 0; (e = this[t]); t++)
                                      if (e.tagName === n) return !0;
                                    return !1;
                                  }),
                                  n
                                );
                              }
                              function t (t, r, e) {
                                function a () {
                                  var n = l(t, e);
                                  n && o[n.type] && o[n.type](n);
                                }
                                var i = f(),
                                  o = {
                                    startTag: function s (n) {
                                      var e = n.tagName;
                                      'TR' === e.toUpperCase() && i.lastTagNameEq('TABLE')
                                        ? (t.prepend('<TBODY>'), a())
                                        : r.selfCloseFix && p.test(e) && i.containsTagName(e)
                                        ? i.lastTagNameEq(e)
                                          ? d(t, i)
                                          : (t.prepend('</' + n.tagName + '>'), a())
                                        : n.unary || i.push(n);
                                    },
                                    endTag: function c (n) {
                                      i.last()
                                        ? r.tagSoupFix && !i.lastTagNameEq(n.tagName)
                                          ? d(t, i)
                                          : i.pop()
                                        : r.tagSoupFix && (e(), a());
                                    },
                                  };
                                return function n () {
                                  return a(), u(e());
                                };
                              }
                              (e.__esModule = !0), (e['default'] = t);
                              var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                p = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (n, e) {
                        'use strict';
                        function r (n) {
                          return null != n;
                        }
                        function t (n) {
                          return 'function' == typeof n;
                        }
                        function a (n, e, t) {
                          var r = void 0,
                            a = (n && n.length) || 0;
                          for (r = 0; r < a; r++) e.call(t, n[r], r);
                        }
                        function i (n, e, t) {
                          for (var r in n) n.hasOwnProperty(r) && e.call(t, r, n[r]);
                        }
                        function o (t, n) {
                          return (
                            (t = t || {}),
                            i(n, function (n, e) {
                              r(t[n]) || (t[n] = e);
                            }),
                            t
                          );
                        }
                        function s (n) {
                          try {
                            return Array.prototype.slice.call(n);
                          } catch (r) {
                            var e =
                              ((t = []),
                              a(n, function (n) {
                                t.push(n);
                              }),
                              { v: t });
                            if ('object' === (void 0 === e ? 'undefined' : f(e))) return e.v;
                          }
                          var t;
                        }
                        function c (n) {
                          return n[n.length - 1];
                        }
                        function u (n, e) {
                          return !(
                            !n ||
                            ('startTag' !== n.type && 'atomicTag' !== n.type) ||
                            !('tagName' in n) ||
                            !~n.tagName.toLowerCase().indexOf(e)
                          );
                        }
                        function l (n) {
                          return u(n, 'script');
                        }
                        function d (n) {
                          return u(n, 'style');
                        }
                        e.__esModule = !0;
                        var f =
                          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (n) {
                                return typeof n;
                              }
                            : function (n) {
                                return n &&
                                  'function' == typeof Symbol &&
                                  n.constructor === Symbol &&
                                  n !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof n;
                              };
                        (e.existy = r),
                          (e.isFunction = t),
                          (e.each = a),
                          (e.eachKey = i),
                          (e.defaults = o),
                          (e.toArray = s),
                          (e.last = c),
                          (e.isTag = u),
                          (e.isScript = l),
                          (e.isStyle = d);
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (n, e, t) {
                  'use strict';
                  var r = t('@adobe/reactor-load-script'),
                    a = t('@adobe/reactor-promise'),
                    i = {},
                    o = {},
                    s = function (n) {
                      return o[n] || (o[n] = r(n)), o[n];
                    };
                  (_satellite.__registerScript = function (n, e) {
                    i[n] = e;
                  }),
                    (n.exports = function (e) {
                      return i[e]
                        ? a.resolve(i[e])
                        : new a(function (n) {
                            s(e).then(
                              function () {
                                n(i[e]);
                              },
                              function () {
                                n();
                              }
                            );
                          });
                    });
                },
              },
              'core/src/lib/helpers/textMatch.js': {
                script: function (n) {
                  'use strict';
                  n.exports = function (n, e) {
                    if (null == e) throw new Error('Illegal Argument: Pattern is not present');
                    return (
                      null != n &&
                      ('string' == typeof e ? n === e : e instanceof RegExp && e.test(n))
                    );
                  };
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP04617b99e04841b9991487d04c8db46c/',
          },
        },
        company: { orgId: 'EA76ADE95776D2EC7F000101@AdobeOrg' },
        property: {
          name: 'Windows',
          settings: {
            domains: ['microsoft.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [
          {
            id: 'RLe7221e4dca14472f8094045a98045009',
            name: 'Global Facebook',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 55 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC95d5954deda24aa780e2bd87a6eabf8f-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL306bc9fb7d6247eca730423ce3f80c24',
            name: 'Global LinkedIn',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC69b31008c50e44318e064df1bd9de728-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5a8e4c7ddca342f789dceec6cc28edbb',
            name: 'Global Twitter',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RCc2141db146544563be4a301eefc1a8f3-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLabe6c0017fcc46d18bdc7e393bb82a60',
            name: 'Google Conversion - Devices Offers',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: '/(windows\\/device-offers-.*)', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RCb8b461f257f245f9b49a1c473d97143f-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL0b6d4453f4e34dfbbba4fba5fdfe0000',
            name: 'Google Conversion - Devices PDPs',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '/windows\\/featured-devices', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RCf217b514e453421a8c56f37b26d24678-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe703713037a7407089f7396d9825c187',
            name: 'Global DCM',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 55 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    {
                      value:
                        '\\/windows\\/(microsoft\\-edge|devices|featured-devices|view-all|desktops|windows-laptops|2-in-1s|gaming-pcs|windows-mixed-reality-devices|lenovo-offers|promotions|do-what-you-love-better|pc-offers-.*)',
                      valueIsRegex: !0,
                    },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC4f3a4581f1cc420db05f206334f1f4b4-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL869091db6c6a4d1bbe3fc6fda1787633',
            name: 'Global Framework',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 1 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '//# sourceURL=wdgGFramework\n/**\n * WDG Tagging Framework.\n *\n * Analytics tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 4.6\n */\nif (window.wdgtagging == null) {\n  window.wdgtagging = (function () {\n    //variables\n    var _private = {};\n    var _public = {};\n    _private.data = {};\n    _private.tagsInfoList = [];\n    _private.tagsExecuted = [];\n    _private.debugLogToConsole = false;\n    _private.debugLogMsgs = [];\n    _private.storageSupport = false;\n    _public.util = {};\n\n    /* Private functions */\n    _private.checkTagType = function (elem, tag_type) {\n      if (elem == undefined || elem == null || tag_type == undefined || tag_type == null) {\n        return false;\n      }\n      if (_public.util.isjQueryLoaded()) {\n        return jQuery(elem).is(tag_type);\n      } else {\n        return elem.tagName == tag_type.toUpperCase();\n      }\n    }\n\n    /* Public functions */\n    /*\n     * Adds a Tag information. To be called on each tag load.\n     *\n     * @param {string}   name    Name of the tag.\n     * @param {string}   version Version of the tag. Format yyyyMMMdd-v{number}.\n     */\n    _public.addTagInfo = function (name, version) {\n      _private.tagsInfoList.push(name + ": " + version);\n    };\n\n    /*\n     * Gets loaded tags info list. \n     */\n    _public.getTagsInfoList = function () {\n      return _private.tagsInfoList;\n    };\n    /* Public functions */\n    /*\n     * Adds a Tag executed information. To be called on each tag load.\n     *\n     * @param {string}   name    Name of the tag.\n     * @param {string}   version Version of the tag. Format yyyyMMMdd-v{number}.\n     */\n    _public.addTagExecuted = function (name, event) {\n      event = event || "View";\n      _private.tagsExecuted.push({\n        "name": name,\n        "event": event\n      });\n    };\n\n    /*\n     * Gets loaded tags executed list. \n     */\n    _public.getTagsExecutedList = function () {\n      return _private.tagsExecuted;\n    };\n\n    /*\n     * Sets data layer value.\n     *\n     * @param {string}   name   Data Name.\n     * @param {string}   value  Data value.\n     */\n    _public.setData = function (name, value) {\n      _private.data[name] = value;\n    };\n\n    /*\n     * Gets data layer value.\n     *\n     * @param {string}   name   Data Name.\n     *\n     * @return {object} returns data layer value.\n     */\n    _public.getData = function (name) {\n      return _private.data[name];\n    };\n\n    /*\n     * Gets all data layer values.\n     *\n     * @return {object} returns data layer value.\n     */\n    _public.getAllData = function () {\n      return _private.data;\n    };\n\n    /*--------------------------Public Utility functions------------------------------------*/\n    /*\n     * Returns boolean of jQuery is loaded or not.\n     *\n     */\n    _public.util.isjQueryLoaded = function () {\n      return (typeof jQuery === "function");\n    };\n    /*\n     * Returns boolean of jQuery is loaded or not.\n     *\n     */\n    _public.util.instanceOfjQuery = function (elem) {\n      if (_public.util.isjQueryLoaded()) {\n        return (elem instanceof jQuery);\n      } else {\n        return false;\n      }\n    };\n    /*\n     * Checks if the element is HTML Link.\n     *\n     * @param {object}   elem     DOM element.\n     */\n    _public.util.isA = function (elem) {\n      return _private.checkTagType(elem, "A");\n    };\n    /*\n     * Checks if the element is HTML BUTTON.\n     *\n     * @param {object}   elem     DOM element.\n     */\n    _public.util.isButton = function (elem) {\n      return _private.checkTagType(elem, "BUTTON");\n    };\n    /*\n     * Checks if the element is HTML INPUT.\n     *\n     * @param {object}   elem     DOM element.\n     */\n    _public.util.isInput = function (elem) {\n      return _private.checkTagType(elem, "INPUT");\n    };\n    /*\n     * Gets if the element is HTML INPUT.\n     *\n     * @param {object}   elem     DOM element.\n     */\n    _public.util.getTextContent = function (elem) {\n      if (_public.util.instanceOfjQuery(elem)) {\n        elem = elem[0];\n      }\n      var eTxt;\n      if (_public.util.isjQueryLoaded()) {\n        eTxt = jQuery(elem).text();\n      } else {\n        eTxt = elem.textContent || elem.innerText;\n      }\n      return eTxt;\n    };\n    /*\n     * Gets attribute value from DOM element.\n     *\n     * @param {object}   elem     DOM element.\n     * @param {string}   attr     Attribute Name.\n     */\n    _public.util.getAttr = function (elem, attr) {\n      if (_public.util.isjQueryLoaded()) {\n        return jQuery(elem).attr(attr);\n      } else {\n        return elem.getAttribute(attr);\n      }\n    };\n\n    /*\n     * Sets attribute value to a DOM element.\n     *\n     * @param {object}   elem     DOM element.\n     * @param {string}   attr     Attribute Name.\n     * @param {string}   val     Attribute Value.\n     */\n    _public.util.setAttr = function (elem, attr, val) {\n      if (_public.util.isjQueryLoaded()) {\n        jQuery(elem).attr(attr, val);\n      } else {\n        elem.setAttribute(attr, val);\n      }\n    };\n    /*\n     * Parses JSON string into a JSON object.\n     *\n     * @param {string}   jsonString     JSON string.\n     */\n    _public.util.parseJSON = function (jsonString) {\n      if (_public.util.isjQueryLoaded()) {\n        return jQuery.parseJSON(jsonString);\n      } else {\n        return JSON.parse(jsonString);\n      }\n    };\n\n    /*\n     * Triggers custom event.\n     *\n     * @param {object}   elem     DOM element on which custom event triggered.\n     * @param {string}   eventName     Custom event Name.\n     */\n    _public.util.triggerEvent = function (elem, eventName) {\n      var event;\n      if (elem == undefined || elem == null) {\n        elem = document;\n      }\n      if (eventName == undefined || eventName == null || typeof eventName !== "string") {\n        return false;\n      }\n      if (_public.util.isjQueryLoaded()) {\n        jQuery(elem).trigger(eventName);\n      } else {\n        if (document.createEvent) {\n          event = document.createEvent("HTMLEvents");\n          event.initEvent(eventName, true, true);\n          event.eventName = eventName;\n          elem.dispatchEvent(event);\n        } else {\n          event = document.createEventObject();\n          event.eventName = eventName;\n          event.eventType = eventName;\n          elem.fireEvent("on" + event.eventType, event);\n        }\n      }\n    };\n    /*\n     * Loads a JavaScript file from specified URL.\n     *\n     * @param {string}   url     URL of JavaScript file.\n     */\n    _public.util.insertScript = function (url, async) {\n      async = async || false;\n      script = document.createElement(\'script\');\n      script.type = \'text/javascript\';\n      script.async = async;\n      script.src = url;\n      document.getElementsByTagName(\'head\')[0].appendChild(script);\n    };\n\n    /*\n     * Loads a JavaScript file from specified URL and executes a callback function on load.\n     *\n     * @param {string}    url       URL of JavaScript file.\n     * @param {function}  callback  Callback function.\n     */\n    _public.util.insertScriptCallback = function (url, callback, async) {\n      async = async || false;\n      script = document.createElement(\'script\');\n      script.type = \'text/javascript\';\n      script.async = async;\n      script.src = url;\n      if (typeof (callback) === "function") {\n        script.onreadystatechange = script.onload = function () {\n          try {\n            callback.call(this);\n          } catch (err) {\n            console.error(err);\n          }\n        };\n      }\n      document.getElementsByTagName(\'head\')[0].appendChild(script);\n    };\n\n    /*\n     * Loads an image from specific source URL.\n     *\n     * @param {string}    src       Image source.\n     */\n    _public.util.requestImage = function (src) {\n      new Image(0, 0).src = src;\n    };\n    /*\n     * Enable debug to console.\n     *\n     */\n    _public.util.enableDebugToConsole = function () {\n      _private.debugLogToConsole = true;\n    };\n    /*\n     * Logs the debug message.\n     *\n     * @param {string}   msg   log message.\n     */\n    _public.util.debugLog = function (msg) {\n      _private.debugLogMsgs.push(msg);\n      if (_private.debugLogMsgs.length > 50) {\n        _private.debugLogMsgs.shift();\n      }\n      if (_private.debugLogToConsole) {\n        console.log(msg);\n      }\n    };\n    /*\n     * Gets all debug logs.\n     *\n     * @return {array} returns string array.\n     */\n    _public.util.getDebugLogs = function () {\n      return _private.debugLogMsgs;\n    };\n    /*\n     * Trim string.\n     *\n     * @return {array} returns string.\n     */\n    _public.util.trim = function (val) {\n      if (!val) {\n        return val;\n      }\n      if (_public.util.isjQueryLoaded() && jQuery.trim) {\n        val = jQuery.trim(val);\n      } else if (String.prototype.trim) {\n        val = val.trim();\n      } else {\n        return val.replace(/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g, \'\');\n      }\n      val = val.replace(/\\s\\s+/g, \' \');\n      return val;\n    };\n\n    /*\n     * Gets trimmed and lower case value. Returns default value in case value is null.\n     *\n     * @param {string}   val   string value.\n     * @param {string}   def   default value.\n     *\n     * @return {string} returns string value.\n     */\n    _public.util.tlcStr = function (val, def) {\n      if (!val) {\n        val = def || "";\n      } else if (typeof val == "string") {\n        val = val.toLowerCase();\n      } else if (typeof val == "object" && _public.util.instanceOfjQuery(elem)) {\n        val = val.text().toLowerCase();\n      } else {\n        val = val.toString().toLowerCase();\n      }\n      if (!val) {\n        val = def || "";\n      }\n      val = _public.util.trim(val);\n      return val;\n    };\n    /*\n     * Gets escape (>), trimmed and lower case value. Returns default value in case value is null.\n     *\n     * @param {string}   val   string value.\n     * @param {string}   def   default value.\n     *\n     * @return {string} returns string value.\n     */\n    _public.util.etlcStr = function (val, def) {\n      val = _public.util.tlcStr(val, def);\n      val = val.replace(/\\>/ig, "");\n      if (!val) {\n        val = def || "";\n      }\n      val = _public.util.trim(val);\n      return val;\n    };\n    /*\n   * Excludes selector element.\n   *\n   * @param {object}   elem   Element.\n   * @param {string}   sel   selector.\n   *\n   * @return {string} returns content value.\n   */\n    _public.util.excludeSelector = function (elem, sel) {\n      if (elem && sel && window.wdgtagging.util.isjQueryLoaded()) {\n        return jQuery(elem).clone().find(sel).remove().end();\n      }\n      return elem;\n    };\n\n    /*\n     * Gets meta tag content value.\n     *\n     * @param {string}   name   meta tag name.\n     *\n     * @return {string} returns content value.\n     */\n    _public.util.getMetaTagContent = function (name) {\n      if (_public.util.isjQueryLoaded() && name) {\n        return jQuery("meta[name=\'" + name + "\']").attr("content") || null;\n      } else if (name && document.querySelector && document.querySelector("meta[name=\'" + name + "\']")) {\n        return document.querySelector("meta[name=\'" + name + "\']").getAttribute("content");\n      }\n      return null;\n    };\n\n    /*\n     * Sets meta tag content.\n     *\n     * @param {string}   name     meta tag name.\n     * @param {string}   content  content value.\n     */\n    _public.util.setMetaTag = function (name, content) {\n      if (!name || !content) {\n        return;\n      }\n      if (_public.util.isjQueryLoaded()) {\n        if (jQuery("meta[name=\'" + name + "\']").length > 0) {\n          jQuery("meta[name=\'" + name + "\']").attr("content", content);\n        } else {\n          jQuery("head").append("<meta name=\'" + name + "\' content=\'" + content + "\'>");\n        }\n      } else {\n        if (document.querySelector && document.querySelector("meta[name=\'" + name + "\']")) {\n          document.querySelector("meta[name=\'" + name + "\']").setAttribute("content", content);\n        } else {\n          var meta = document.createElement(\'meta\');\n          meta.name = name;\n          meta.content = content;\n          document.getElementsByTagName(\'head\')[0].appendChild(meta);\n        }\n      }\n    };\n\n    /*\n     * Creates cookie with provided name, value & expiration.\n     *\n     * @param {string}   name     Name of cookie.\n     * @param {string}   value    Value of cookie.\n     * @param {number}   content  No of expiration days.\n     */\n    _public.util.createCookie = function (name, value, days) {\n      var expires;\n      if (days) {\n        var date = new Date();\n        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));\n        expires = "; expires=" + date.toGMTString();\n      } else {\n        expires = "";\n      }\n      document.cookie = name + "=" + value + expires + "; path=/";\n    };\n\n    /*\n     * Gets cookie value.\n     *\n     * @param {string}   name   Name of cookie.\n     *\n     * @return {string} returns cookie value.\n     */\n    _public.util.readCookie = function (name) {\n      var nameEQ = name + "=";\n      var ca = document.cookie.split(\';\');\n      for (var i = 0; i < ca.length; i++) {\n        var c = ca[i];\n        while (c.charAt(0) == \' \')\n          c = c.substring(1, c.length);\n        if (c.indexOf(nameEQ) === 0)\n          return c.substring(nameEQ.length, c.length);\n      }\n      return null;\n    };\n\n    /*\n     * Deletes the cookie.\n     *\n     * @param {string}   name     Name of cookie.\n     */\n    _public.util.deleteCookie = function (name) {\n      _public.util.createCookie(name, "", -1);\n    };\n\n    /*\n     * Gets Query string parameter value from a provided URL or current page URL.\n     *\n     * @param {string}   name   Name of Querystring parameter.\n     * @param {string}   url   URL. If not provided, current page URL is used.\n     *\n     * @return {string} returns Querystring parameter value.\n     */\n    _public.util.getQueryParam = function (name, url) {\n      url = url || window.location.href;\n      return decodeURIComponent(url.replace(new RegExp("^(?:.*[&\\\\?]" + encodeURIComponent(name).replace(/[\\.\\+\\*]/g, "\\\\$&") + "(?:\\\\=([^&]*))?)?.*$", "i"), "$1"));\n    };\n\n    /*\n     * Sets Localstorage value.\n     *\n     * @param {string}   name     Name of localstorage.\n     * @param {string}   value    Value of localstorage.\n     */\n    _public.util.setLocalStorage = function (name, value) {\n      if (_private.storageSupport && name) {\n        localStorage.setItem(name, value);\n      }\n    };\n\n    /*\n     * Gets Localstorage value.\n     *\n     * @param {string}   name   Name of Localstorage.\n     *\n     * @return {string} returns Localstorage value.\n     */\n    _public.util.readLocalStorage = function (name) {\n      return _private.storageSupport ? localStorage.getItem(name) : null;\n    };\n\n    /*\n     * Deletes the Localstorage value.\n     *\n     * @param {string}   name     Name of Localstorage.\n     */\n    _public.util.deleteLocalStorage = function (name) {\n      if (_private.storageSupport && name) {\n        localStorage.removeItem(name);\n      }\n    };\n\n    /*\n     * Sets Sessionstorage value.\n     *\n     * @param {string}   name     Name of Sessionstorage.\n     * @param {string}   value    Value of Sessionstorage.\n     */\n    _public.util.setSessionStorage = function (name, value) {\n      if (_private.storageSupport && name) {\n        sessionStorage.setItem(name, value);\n      }\n    };\n\n    /*\n     * Gets Sessionstorage value.\n     *\n     * @param {string}   name   Name of Sessionstorage.\n     *\n     * @return {string} returns Sessionstorage value.\n     */\n    _public.util.readSessionStorage = function (name) {\n      return _private.storageSupport ? sessionStorage.getItem(name) : null;\n    };\n\n    /*\n     * Deletes the Sessionstorage value.\n     *\n     * @param {string}   name     Name of Sessionstorage.\n     */\n    _public.util.deleteSessionStorage = function (name) {\n      if (_private.storageSupport && name) {\n        sessionStorage.removeItem(name);\n      }\n    };\n\n    /*\n     * Extends JSON objects.\n     *\n     * @param {string}   obj1     First Object.\n     * @param {string}   obj2     Second Object.\n     *\n     * Return first object\n     */\n    _public.util.extendObj = function (obj1, obj2) {\n      if (window.wdgtagging.util.isjQueryLoaded()) {\n        jQuery.extend(obj1, obj2);\n      } else if (Object.assign) {\n        Object.assign(obj1, obj2);\n      } else {\n        for (var key in obj2) {\n          if (obj2.hasOwnProperty(key)) {\n            obj1[key] = obj2[key];\n          }\n        }\n      }\n      return obj1;\n    };\n\n    /*\n     * Gets MSCC Consent status\n     *\n     * returns true or false\n     */\n    _public.util.isMSCCConsent = function () {\n      // returns true or false\n      // If mscc object is present, return mscc.hasContent() value.\n      // If in an iframe - return false\n      try {\n        if (window.self !== window.top) {\n          return "0";\n        }\n      } catch (e) {\n        //if there is an error it will be a cross domain error caused by being in an iframe\n        return "0";\n      }\n\n      if (typeof (window.mscc) !== "undefined" && typeof (window.mscc.hasConsent) === "function" && !window.mscc.hasConsent()) {\n        return "0";\n      } else {\n        return "1";\n      }\n    };\n\n    /*\n     * Gets Product information from DOM element.\n     *\n     * @param {object}   elem     DOM element.\n     *\n     * @return {object} returns Product Info object.\n     */\n    _public.util.getProductInfo = function (elem) {\n      try {\n        if (_public.util.instanceOfjQuery(elem)) {\n          elem = elem[0];\n        }\n        var original_elem = elem;\n        var isJqueryLoaded = this.isjQueryLoaded();\n        var isA = this.isA(elem);\n        var data_js_href = this.getAttr(elem, "data-js-href");\n        if (!isA && data_js_href && data_js_href != "") {\n          var data_js_href_elem = document.createElement("A");\n          data_js_href_elem.href = data_js_href;\n          data_js_href_elem.setAttribute("data-js-href-flag", "true");\n          elem = data_js_href_elem;\n          isA = this.isA(elem);\n        }\n        var productInfo = {\n          "id": null,\n          "sku": null,\n          "name": null,\n          "retailer": null,\n          "cta": null\n        };\n        var tmp;\n        if (isA) {\n          var pathname = elem.pathname;\n          var search = elem.search;\n          if (pathname.match(/onerf\\/signin/i)) {\n            var temp_A = document.createElement("a");\n            temp_A.href = this.getQueryParam("ru", search);\n            if (temp_A) {\n              pathname = temp_A.pathname || "";\n              search = temp_A.search || "";\n            }\n          }\n          if (pathname.match(/productID/i)) {\n            tmp = pathname.split("productID");\n            productInfo.id = tmp.length > 0 ? tmp[1] : null;\n          } else if (search.match(/pid\\=/i)) {\n            productInfo.id = this.getQueryParam("pid", search);\n          } else if (pathname.match(/\\/store\\/(b|d|config|buy|p|configure)\\//i)) {\n            tmp = pathname.substring(pathname.indexOf("/store")).split("/");\n            productInfo.name = (tmp.length >= 4 ? tmp[3] : null);\n            productInfo.id = (tmp.length > 4 ? tmp[4] : null);\n            productInfo.sku = (tmp.length > 5 ? tmp[5] : null);\n          } else if (pathname.match(/\\/(..\\-..\\/)?p\\//i)) {\n            var partUrl = pathname.split(\'/\');\n            if (partUrl.length == 4) {\n              productInfo.id = (partUrl.length == 4 ? pathname.split(\'/\')[3] : null);\n            }\n            if (partUrl.length == 5) {\n              if (pathname.match(/^\\/p\\//i)) {\n                productInfo.sku = (partUrl.length == 5 ? pathname.split(\'/\')[4] : null);\n                productInfo.id = (partUrl.length == 5 ? pathname.split(\'/\')[3] : null);\n              } else {\n                productInfo.id = (partUrl.length == 5 ? pathname.split(\'/\')[4] : null);\n              }\n            }\n            if (partUrl.length == 6) {\n              productInfo.sku = (partUrl.length == 6 ? pathname.split(\'/\')[5] : null);\n              productInfo.id = (partUrl.length == 6 ? pathname.split(\'/\')[4] : null);\n            }\n          } else if (pathname.match(/\\/store\\/configure\\/xbox-design-lab/ig)) {\n            tmp = pathname.substring(pathname.indexOf("/store")).split("/");\n            productInfo.id = tmp.length > 4 ? tmp[4] : null;\n          } else if (pathname.match(/\\/store\\/build/)) {\n            productInfo.id = pathname.split(\'/\')[5];\n          }\n\n          if (productInfo.sku == null && search.match(/sid\\=/i)) {\n            productInfo.sku = this.getQueryParam("sid", search);\n          }\n          if (pathname.match(/\\/p\\//i)) {\n            productInfo.name = pathname.split("/p/")[1].split("/")[0].replace(/\\-/g, " ");\n          }\n        }\n\n        if ($(elem).attr("data-js-href-flag") && $(elem).attr("data-js-href-flag") == "true") {\n          elem = original_elem;\n        }\n        if (this.getAttr(elem, "data-bi-name")) {\n          productInfo.cta = _public.util.trim(this.getAttr(elem, "data-bi-name"));\n        }\n        if (this.getAttr(elem, "data-m")) {\n          var data_m = null;\n          try {\n            if (isJqueryLoaded) {\n              data_m = jQuery.parseJSON(this.getAttr(elem, "data-m") || "{}");\n            } else if (JSON && JSON.parse) {\n              data_m = JSON.parse(this.getAttr(elem, "data-m") || "{}");\n            }\n          } catch (err) {\n            _public.util.debugLog("Error in getProductInfo - " + err);\n          }\n          if (data_m) {\n            if (productInfo.id == null && data_m.prodid) {\n              productInfo.id = data_m.prodid;\n            }\n            if (productInfo.retailer == null && data_m.prtnm) {\n              productInfo.retailer = data_m.prtnm;\n            }\n            if (productInfo.cta == null && data_m.cN) {\n              productInfo.cta = _public.util.trim(data_m.cN);\n            }\n            if (productInfo.cta == null && data_m.contentName) {\n              productInfo.cta = _public.util.trim(data_m.contentName);\n            }\n          }\n        }\n        /* Product Id(u25) */\n        if (productInfo.id == null && this.getAttr(elem, "data-bigid")) {\n          productInfo.id = this.getAttr(elem, "data-bigid");\n        }\n        if (productInfo.id == null && this.getAttr(elem, "data-productid")) {\n          productInfo.id = this.getAttr(elem, "data-productid");\n        }\n        if (productInfo.id == null && this.getAttr(elem, "productbuyxmlid")) {\n          productInfo.id = this.getAttr(elem, "productbuyxmlid");\n        }\n        if (productInfo.id == null && this.getAttr(elem, "ps-sku")) {\n          productInfo.id = this.getAttr(elem, "ps-sku");\n        }\n        if (productInfo.id == null && (this.getAttr(elem, "onclick") && /(xboxContextualStore|OpenWithExp)/i.test(this.getAttr(elem, "onclick")))) {\n          var stringMatch = this.getAttr(elem, "onclick").match(/([\\w]+)\\([\'"]?([\\w]+)?[\'"]?,?[\'"]?([\\w]+)?[\'"]?\\)/);\n          var productIdIndex = {\n            "open": 2,\n            "openwithexp": 3\n          };\n          var funcIndex = 1;\n          if (stringMatch && stringMatch[funcIndex]) {\n            var funcName = this.trim(stringMatch[funcIndex].toLowerCase());\n            var prodId = stringMatch[productIdIndex[funcName]];\n            productInfo.id = prodId ? prodId : null;\n          }\n        }\n        /* Product Name(u26) */\n        if (isJqueryLoaded && jQuery(elem).parents(".m-product-placement-item").length > 0) {\n          var tName = jQuery(elem).parents(".m-product-placement-item").find("[itemprop=\'name\']");\n          if (tName.length > 0) {\n            productInfo.name = this.trim(tName.text());\n          }\n        }\n        if (this.getAttr(elem, "data-name")) {\n          productInfo.name = this.getAttr(elem, "data-name");\n        }\n        if (isJqueryLoaded && jQuery(elem).parents(".ps-online-seller-select[data-name]").length > 0) {\n          productInfo.name = jQuery(elem).parents(".ps-online-seller-select[data-name]:first").attr("data-name");\n        }\n\n        /* Retailer Name(u56) */\n        if (this.getAttr(elem, "data-bi-prtnm")) {\n          productInfo.retailer = this.getAttr(elem, "data-bi-prtnm");\n        }\n        if ((productInfo.retailer == null || productInfo.retailer == "") && (this.getAttr(elem, "data-retailer") && this.getAttr(elem, "data-retailer") !== "")) {\n          productInfo.retailer = this.getAttr(elem, "data-retailer") || "";\n        }\n        if ((productInfo.retailer == null || productInfo.retailer == "") && isJqueryLoaded && jQuery(elem).parents("[data-retailer][data-retailer!=\'\']").length > 0) {\n          productInfo.retailer = jQuery(elem).parents("[data-retailer]:first").attr("data-retailer");\n        }\n        return productInfo;\n      } catch (err) {\n        _public.util.debugLog("Error in getProductInfo - " + err);\n      }\n    };\n\n    //Initilization\n    _private.storageSupport = (typeof (Storage) !== "undefined");\n\n    if (!_public.util.isjQueryLoaded()) {\n      _public.util.debugLog("tagging_core: jQuery not loaded");\n    }\n    _public.addTagInfo("WDGTagging", "2018may11-v1.1");\n\n    return _public;\n  }());\n}\n\n/**\n * WDG JSLL Tagging Framework.\n *\n * JSLL tagging framework for WDG websites. JSLL version 4.x.x.\n *\n * @author  WDG Tagging & Analytics Team\n * @since   04-30-2018\n * @version 1.1\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a JSLL framework\n   */\n  window.wdgtagging.jsll = (function (wdg, tu, td) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.baseUrl = "//az725175.vo.msecnd.net/scripts/jsll-";\n    _private.baseVersion = "4";\n    _private.JSLLReady = false;\n    _private.JSLLLoaded = false;\n    _private.qCustomEvents = [];\n    _private.qCustomUpdates = [];\n    _private.qCustomEventsProcessed = false;\n    _private.qCustomUpdatesProcessed = false;\n    _private.prePageView = null;\n    _private.postPageView = null;\n    _private.initCounter = 0;\n    _private.jconfig = {\n      autoCapture: {\n        scroll: "true",\n        lineage: "true"\n      },\n      coreData: {\n        appId: "NOT",\n        requestUri: window.location.href\n      }\n    };\n    _private.tagName = "JSLL";\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Executes a Callback function before JSLL page view\n     */\n    _private.prePageViewCallback = function () {\n      if (typeof _private.prePageView === "function") {\n        _private.prePageView(_private.jconfig);\n      }\n    };\n\n    /*\n     * Executes a Callback function after JSLL page view\n     */\n    _private.postPageViewCallback = function () {\n      if (typeof _private.postPageView === "function") {\n        _private.postPageView();\n      }\n    };\n\n    /*\n     * Initializes and sends JSLL page view call\n     */\n    _private.init = function () {\n      _private.prePageViewCallback();\n      if (window.awa) {\n        if (!window.awa.isInitialized) {\n          if (typeof window.siteConsent == \'object\' && window.siteConsent !== null && typeof window.siteConsent.getConsent == \'function\') {\n            _private.jconfig.syncMuid = (_satellite.getVar("SiteConsent_Analytics") === true);\n          }\n          else {\n            _private.jconfig.syncMuid = (_satellite.getVar("MSCC_Consent") === true);\n          }\n          window.awa.init(_private.jconfig);\n          tu.triggerEvent(document, "awaReady");\n          _private.JSLLReady = true;\n        }\n      } else {\n        tu.debugLog("JSLL Library not loaded");\n      }\n      _private.postPageViewCallback();\n      setTimeout(function () {\n        _private.processCustomEventQueue();\n        _private.processCustomContentUpdateQueue();\n      }, 1000);\n      wdg.addTagExecuted(_private.tagName);\n    };\n\n    /*\n     * Processes Custom JSLL event queue\n     */\n    _private.processCustomEventQueue = function () {\n      var i = _private.qCustomEvents.length;\n      while (i--) {\n        _private.processCustomEventFromArray(_private.qCustomEvents[i]);\n      }\n      _private.qCustomEventsProcessed = true;\n    };\n\n    /*\n     * Processes Custom JSLL updates queue\n     */\n    _private.processCustomContentUpdateQueue = function () {\n      var i = _private.qCustomUpdates.length;\n      while (i--) {\n        _private.processCustomContentUpdateFromArray(_private.qCustomUpdates[i]);\n      }\n      _private.qCustomUpdatesProcessed = true;\n    };\n    /*\n     * Executes init setTimeout in case JSLL is loading\n     */\n    _private.initTimeout = function () {\n      if (_private.initCounter < 61) {\n        _private.initCounter++;\n        if (typeof awa !== "undefined") {\n          _private.init();\n        } else {\n          setTimeout(_private.initTimeout, 500);\n        }\n      }\n    };\n    //------------------------Public functions-----------------------------------------    \n    /*\n     * Processes Custom JSLL event from array or adds it to queue\n     *\n     * @param {string}   inArray    JSSL event array.\n     */\n    _public.processCustomEventFromArray = function (inArray) {\n      if (typeof inArray == "undefined" || inArray === null || inArray.length === 0) {\n        tu.debugLog("processCustomEventFromArray called with no inArray");\n        return;\n      }\n      if (!_private.JSLLReady && !window.awa) {\n        _private.qCustomEvents.push(inArray);\n        return;\n      }\n      awa.ct.captureContentPageAction(inArray);\n    };\n    /*\n     * Processes Custom JSLL update from array or adds it to queue\n     *\n     * @param {string}   inArray    JSSL Update array.\n     */\n    _public.processCustomContentUpdateFromArray = function (inArray) {\n      if (typeof inArray == "undefined" || inArray === null || inArray.length === 0) {\n        tu.debugLog("processCustomEventFromArray called with no inArray");\n        return;\n      }\n      if (!_private.JSLLReady && !window.awa) {\n        _private.qCustomUpdates.push(inArray);\n        return;\n      }\n      awa.ct.captureContentUpdate(inArray);\n    };\n    /*\n     * Gets JSLL readyness.\n     *\n     * @return {boolean} returns JSLL readyness.\n     */\n    _public.IsJSLLReady = function () {\n      return _private.JSLLReady;\n    };\n    /*\n     * Loads JSLL Base tag and sends a page view\n     *\n     * @param {object}   config           JSLL configuration object. Example as below\n          {\n            "appId":"SOME ID", - JSLL App ID\n            "prePageView":function(){ //somecode }, - callback function pre page view\n            "postPageView":function(){ //somecode },  - callback function post page view\n            "version": "4" - JSLL library Version,\n            "coreData":{ } - Override coredata values\n          }\n     */\n    _public.load = function (config) {\n      _private.initCounter = 0;\n      if (config == undefined || config == null) {\n        tu.debugLog("JSLL configuration missing");\n        return;\n      }\n      var load = (config.load == undefined || config.load == null) || config.load;\n      var init = (config.init == undefined || config.init == null) || config.init;\n      var async = (config.async == undefined || config.async == null) || config.async;\n      if (init) {\n        if (config.appId == undefined || config.appId == null) {\n          tu.debugLog("JSLL App ID missing");\n          return;\n        } else {\n          _private.jconfig.coreData.appId = config.appId;\n        }\n        if (config.prePageView != undefined && config.prePageView != null) {\n          _private.prePageView = config.prePageView;\n        }\n        if (config.postPageView != undefined && config.postPageView != null) {\n          _private.postPageView = config.postPageView;\n        }\n        var src;\n        if (config.coreData != undefined && config.coreData != null) {\n          _private.jconfig.coreData = tu.extendObj(_private.jconfig.coreData, config.coreData);\n        }\n        if (config.autoCapture != undefined && config.autoCapture != null) {\n          _private.jconfig.autoCapture = tu.extendObj(_private.jconfig.autoCapture, config.autoCapture);\n        }\n        if (config.isLoggedIn != undefined && config.isLoggedIn != null) {\n          _private.jconfig.isLoggedIn = config.isLoggedIn;\n        }\n      }\n      if (load) {\n        if (config.version != undefined && config.version != null) {\n          _private.src = _private.baseUrl + config.version + ".js";\n        } else {\n          _private.src = _private.baseUrl + _private.baseVersion + ".js";\n        }\n      }\n      if (load) {\n        if (typeof window.JSLLEarlyLoaded !== "undefined" && window.JSLLEarlyLoaded === true) {\n          _private.JSLLLoaded = true;\n        }\n        if (typeof awa === "undefined" && (typeof window.JSLLEarlyLoaded === "undefined" || window.JSLLEarlyLoaded === false)) {\n          tu.insertScriptCallback(_private.src, function (tj, init) {\n            return function () {\n              _private.JSLLLoaded = true;\n              if (init) {\n                tj.init();\n              }\n            };\n          }(_private, init), async);\n        } else if (init) {\n          _private.initTimeout();\n        }\n      } else if (init) {\n        _private.initTimeout();\n      }\n    };\n    /*\n     * Sets JSLL Partner Referral tracking.\n     *\n     */\n    _public.TagReferralLinkRT = function (elem) {\n      var referralBlackListURL = [\n        "facebook.com",\n        "instagram.com",\n        "linkedin.com",\n        "twitter.com",\n        "office.com",\n        "live.com",\n        "xbox.com",\n        "skype.com",\n        "onenote.com",\n        "atdmt.com",\n        "msdn.com",\n        "trafficmanager.net",\n        "windows.net",\n        "aka.ms",\n        "slideshare.net",\n        "azure.com",\n        "blogs.windows.com",\n        "azurewebsites.net",\n        "insider.windows.com",\n        "javascript:void(0);",\n        "youtube.com",\n        "xbox.cn",\n        "onerf.xbox.cn",\n        "xbox.com",\n        "weibo.com",\n        "clouddamcdnprodep.azureedge.net",\n        "microsoftedge.github.io",\n        "ms-settings:",\n        "ms-photos:",\n        "ms-windows-store",\n        "ms-phone",\n        "app.adjust.com",\n        "play.google.com",\n        "itunes.apple.com",\n        "apps.apple",\n        "apple.com\\/itunes",\n        "microsoftstore.com.cn/surfacegosignup"\n      ];\n\n      var isBlackList = function (link) {\n        if (link === "") {\n          return false;\n        }\n        var result = false;\n        link = tu.trim(link.toLowerCase());\n        if (link === "#") {\n          result = true;\n        } else {\n          for (var i = 0; i < referralBlackListURL.length; i++) {\n            if (link.indexOf(referralBlackListURL[i]) > -1) {\n              result = true;\n              break;\n            }\n          }\n        }\n        return result;\n      };\n      if (tu.instanceOfjQuery(elem)) {\n        elem = elem[0];\n      }\n      var data_m = tu.getAttr(elem, "data-m");\n      if (data_m) {\n        var productInfo = tu.getProductInfo(elem);\n        var domain, link, prodName, prodId, prodSku;\n        var referral = false;\n        var partnerName = null;\n        prodName = productInfo.name;\n        prodId = productInfo.id;\n        prodSku = productInfo.sku;\n        if (tu.getAttr(elem, "href")) {\n          link = elem.href;\n          domain = elem.hostname;\n        } else {\n          var tempA = document.createElement("a");\n          tempA.href = tu.getAttr(elem, "data-js-href");\n          link = tempA.href;\n          domain = tempA.hostname;\n        }\n        if (link && domain) {\n          if (domain.match(/microsoft\\.com/i) && (link.match(/\\/store\\//i) || link.match(/(..-..|..-.*)?\\/p\\//i))) {\n            referral = true;\n            partnerName = "ms store";\n          } else if (!domain.match(/microsoft\\.com/i) && !isBlackList(link)) {\n            partnerName = domain;\n            referral = true;\n          }\n          if (referral) {\n            var targetJSON = JSON.parse(data_m);\n            targetJSON.prtnm = partnerName;\n            targetJSON.bhvr = "PARTNERREFERRAL";\n            targetJSON.prod = prodName;\n            targetJSON.pid = prodId;\n            targetJSON.sku = prodSku;\n            tu.setAttr(elem, "data-m", JSON.stringify(targetJSON));\n            //This is here to signal that we are customizing the element so Red Tiger knows\n            tu.setAttr(elem, "data-wdg-behavior", "PARTNERREFERRAL");\n          }\n        }\n      }\n    };\n\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018apr30-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util, window.wdgtagging.data);\n}\n\n/**\n * WDG 1DS Tagging Framework.\n *\n * 1DS tagging framework for MLSD & Gaming websites. 1DS version 2.x.x.\n *\n * @author  WDG Tagging & Analytics Team\n * @since   06-30-2020\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a 1DS framework\n   */\n  window.wdgtagging.oneds = (function (wdg, tu, td) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.baseUrl = "//az416426.vo.msecnd.net/scripts/c/ms.analytics-web-";\n    _private.baseVersion = "2";\n    _private.OneDSReady = false;\n    _private.qCustomEvents = [];\n    _private.qCustomUpdates = [];\n    _private.qCustomEventsProcessed = false;\n    _private.qCustomUpdatesProcessed = false;\n    _private.prePageView = null;\n    _private.postPageView = null;\n    _private.oconfig = {\n      instrumentationKey: "",\n      channelConfiguration: {\n        eventsLimitInMem: 50\n      },\n      propertyConfiguration: {\n\n      },\n      webAnalyticsConfiguration: {\n        autoCapture: {\n          scroll: true,\n          pageView: true,\n          onLoad: true,\n          onUnload: true,\n          click: true,\n          resize: true,\n          lineage: true,\n          jsError: true\n        }\n      }\n    };\n    _private.tagName = "1DS";\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Executes a Callback function before JSLL page view\n     */\n    _private.prePageViewCallback = function () {\n      if (typeof _private.prePageView === "function") {\n        _private.prePageView(_private.oconfig.webAnalyticsConfiguration);\n      }\n    };\n\n    /*\n     * Executes a Callback function after JSLL page view\n     */\n    _private.postPageViewCallback = function () {\n      if (typeof _private.postPageView === "function") {\n        _private.postPageView();\n      }\n    };\n\n    /*\n     * Initializes and sends JSLL page view call\n     */\n    _private.init = function () {\n      _private.prePageViewCallback();\n      if (typeof oneDS !== "undefined" && oneDS.ApplicationInsights) {\n        if (!_private.OneDSReady) {\n          _private.oconfig.webAnalyticsConfiguration.syncMuid = (_satellite.getVar("MSCC_Consent") === true);\n          window.ods = new oneDS.ApplicationInsights();\n          //Initialize SDK\n          window.ods.initialize(_private.oconfig, []);\n\n          tu.triggerEvent(document, "awaReady");\n          _private.OneDSReady = true;\n        }\n      } else {\n        tu.debugLog("JSLL Library not loaded");\n      }\n      _private.postPageViewCallback();\n      wdg.addTagExecuted(_private.tagName);\n    };\n\n    /*\n     * Processes Custom JSLL event queue\n     */\n    _private.processCustomEventQueue = function () {\n      var i = _private.qCustomEvents.length;\n      while (i--) {\n        _private.processCustomEventFromArray(_private.qCustomEvents[i]);\n      }\n      _private.qCustomEventsProcessed = true;\n    };\n\n    /*\n     * Processes Custom JSLL updates queue\n     */\n    _private.processCustomContentUpdateQueue = function () {\n      var i = _private.qCustomUpdates.length;\n      while (i--) {\n        _private.processCustomContentUpdateFromArray(_private.qCustomUpdates[i]);\n      }\n      _private.qCustomUpdatesProcessed = true;\n    };\n\n    //------------------------Public functions-----------------------------------------    \n    /*\n     * Processes Custom JSLL event from array or adds it to queue\n     *\n     * @param {string}   inArray    JSSL event array.\n     */\n    _public.processCustomEventFromArray = function (inArray) {\n      if (typeof inArray == "undefined" || inArray === null || inArray.length === 0) {\n        tu.debugLog("processCustomEventFromArray called with no inArray");\n        return;\n      }\n      if (!_private.JSLLReady && !window.awa) {\n        _private.qCustomEvents.push(inArray);\n        return;\n      }\n      awa.ct.captureContentPageAction(inArray);\n    };\n    /*\n     * Processes Custom JSLL update from array or adds it to queue\n     *\n     * @param {string}   inArray    JSSL Update array.\n     */\n    _public.processCustomContentUpdateFromArray = function (inArray) {\n      if (typeof inArray == "undefined" || inArray === null || inArray.length === 0) {\n        tu.debugLog("processCustomEventFromArray called with no inArray");\n        return;\n      }\n      if (!_private.JSLLReady && !window.awa) {\n        _private.qCustomUpdates.push(inArray);\n        return;\n      }\n      awa.ct.captureContentUpdate(inArray);\n    };\n    /*\n     * Gets JSLL readyness.\n     *\n     * @return {boolean} returns JSLL readyness.\n     */\n    _public.IsOneDDReady = function () {\n      return _private.OneDSReady;\n    };\n    /*\n     * Loads JSLL Base tag and sends a page view\n     *\n     * @param {object}   config           JSLL configuration object. Example as below\n          {\n            "appId":"SOME ID", - JSLL App ID\n            "prePageView":function(){ //somecode }, - callback function pre page view\n            "postPageView":function(){ //somecode },  - callback function post page view\n            "version": "4" - JSLL library Version,\n            "coreData":{ } - Override coredata values\n          }\n     */\n    _public.load = function (config) {\n      if (config == undefined || config == null) {\n        tu.debugLog("1DS configuration missing");\n        return;\n      }\n      if (config.instrumentationKey == undefined || config.instrumentationKey == null) {\n        tu.debugLog("iDS instrumentation Key missing");\n        return;\n      } else {\n        _private.oconfig.instrumentationKey = config.instrumentationKey;\n      }\n      if (config.prePageView != undefined && config.prePageView != null) {\n        _private.prePageView = config.prePageView;\n      }\n      if (config.postPageView != undefined && config.postPageView != null) {\n        _private.postPageView = config.postPageView;\n      }\n      var min = ".min";\n      if (config.minified != undefined && config.minified != null && config.minified == false) {\n        min = "";\n      }\n      var src;\n      if (config.version != undefined && config.version != null) {\n        _private.src = _private.baseUrl + config.version + min + ".js";\n      } else {\n        _private.src = _private.baseUrl + _private.baseVersion + min + ".js";\n      }\n      if (config.webAnalyticsConfiguration != undefined && config.webAnalyticsConfiguration.coreData != undefined && config.webAnalyticsConfiguration.coreData != null) {\n        _private.oconfig.webAnalyticsConfiguration.coreData = tu.extendObj(_private.oconfig.webAnalyticsConfiguration.coreData, config.webAnalyticsConfiguration.coreData);\n      }\n      if (config.propertyConfiguration != undefined && config.propertyConfiguration != null) {\n        _private.oconfig.propertyConfiguration = tu.extendObj(_private.oconfig.propertyConfiguration, config.propertyConfiguration);\n      }\n      if (config.isLoggedIn != undefined && config.isLoggedIn != null) {\n        _private.oconfig.webAnalyticsConfiguration.isLoggedIn = config.webAnalyticsConfiguration.isLoggedIn;\n      }\n      if (typeof oneDS === "undefined") {\n        tu.insertScriptCallback(_private.src, function (tj) {\n          return function () {\n            tj.init();\n            setTimeout(function () {\n              tj.processCustomEventQueue();\n              tj.processCustomContentUpdateQueue();\n            }, 1000);\n          };\n        }(_private));\n      } else {\n        _private.init();\n        setTimeout(function () {\n          _private.processCustomEventQueue();\n          _private.processCustomContentUpdateQueue();\n        }, 1000);\n      }\n    };\n    /*\n     * Sets JSLL Partner Referral tracking.\n     *\n     */\n    _public.TagReferralLinkRT = function (elem) {\n      var referralBlackListURL = [\n        "facebook.com",\n        "instagram.com",\n        "linkedin.com",\n        "twitter.com",\n        "office.com",\n        "live.com",\n        "xbox.com",\n        "skype.com",\n        "onenote.com",\n        "atdmt.com",\n        "msdn.com",\n        "trafficmanager.net",\n        "windows.net",\n        "aka.ms",\n        "slideshare.net",\n        "azure.com",\n        "blogs.windows.com",\n        "azurewebsites.net",\n        "insider.windows.com",\n        "javascript:void(0);",\n        "youtube.com",\n        "xbox.cn",\n        "onerf.xbox.cn",\n        "xbox.com",\n        "weibo.com",\n        "clouddamcdnprodep.azureedge.net",\n        "microsoftedge.github.io",\n        "ms-settings:",\n        "ms-photos:",\n        "ms-windows-store",\n        "ms-phone",\n        "app.adjust.com",\n        "play.google.com",\n        "itunes.apple.com",\n        "apps.apple",\n        "apple.com\\/itunes",\n        "microsoftstore.com.cn/surfacegosignup"\n      ];\n\n      var isBlackList = function (link) {\n        if (link === "") {\n          return false;\n        }\n        var result = false;\n        link = tu.trim(link.toLowerCase());\n        if (link === "#") {\n          result = true;\n        } else {\n          for (var i = 0; i < referralBlackListURL.length; i++) {\n            if (link.indexOf(referralBlackListURL[i]) > -1) {\n              result = true;\n              break;\n            }\n          }\n        }\n        return result;\n      };\n      if (tu.instanceOfjQuery(elem)) {\n        elem = elem[0];\n      }\n      var data_m = tu.getAttr(elem, "data-m");\n      if (data_m) {\n        var productInfo = tu.getProductInfo(elem);\n        var domain, link, prodName, prodId, prodSku;\n        var referral = false;\n        var partnerName = null;\n        prodName = productInfo.name;\n        prodId = productInfo.id;\n        prodSku = productInfo.sku;\n        if (tu.getAttr(elem, "href")) {\n          link = elem.href;\n          domain = elem.hostname;\n        } else {\n          var tempA = document.createElement("a");\n          tempA.href = tu.getAttr(elem, "data-js-href");\n          link = tempA.href;\n          domain = tempA.hostname;\n        }\n        if (link && domain) {\n          if (domain.match(/microsoft\\.com/i) && (link.match(/\\/store\\//i) || link.match(/(..-..|..-.*)?\\/p\\//i))) {\n            referral = true;\n            partnerName = "ms store";\n          } else if (!domain.match(/microsoft\\.com/i) && !isBlackList(link)) {\n            partnerName = domain;\n            referral = true;\n          }\n          if (referral) {\n            var targetJSON = JSON.parse(data_m);\n            targetJSON.prtnm = partnerName;\n            targetJSON.bhvr = "PARTNERREFERRAL";\n            targetJSON.prod = prodName;\n            targetJSON.pid = prodId;\n            targetJSON.sku = prodSku;\n            tu.setAttr(elem, "data-m", JSON.stringify(targetJSON));\n            //This is here to signal that we are customizing the element so Red Tiger knows\n            tu.setAttr(elem, "data-wdg-behavior", "PARTNERREFERRAL");\n          }\n        }\n      }\n    };\n\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2020jun30-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util, window.wdgtagging.data);\n}\n\n/**\n * WDG DCM Tagging Framework.\n *\n * DCM tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a DCM framework\n   */\n  window.wdgtagging.dcm = (function (wdg, tu) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.baseUrl = "//ad.doubleclick.net/ddm/activity/";\n    _private.ordRandomEndSrc = ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=";\n    _private.ord1NumRandomEndSrc = ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=";\n    _private.randomEnding = _private.ordRandomEndSrc;\n    _private.tagName = "DCM";\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Sets Base DCM Variables\n     *\n     * @param {object}   elem     DOM element.\n     */\n    _private.setBaseUVars = function (elem, override) {\n      _private.uVars = _private.uVars || {};\n      _private.setUVar("u1", wdg.getData("loc") || \'\', false);\n      _private.setUVar("u2", wdg.getData("langLoc") || \'\', false);\n      _private.setUVar("u6", (wdg.getData("gpn") || "").replace(/\\//g, \'-\') || \'\', false);\n      _private.setUVar("u26", (document.title || "").split("|")[0], true);\n\n\n      if (elem) {\n        _private.setProdUVars(elem);\n        /* CTA(u50) */\n        _private.uVars.u50 = null;\n        var eTxt = null;\n        var productInfo = tu.getProductInfo(elem);\n        eTxt = productInfo.cta;\n        if (!eTxt) {\n          eTxt = tu.getTextContent(elem);\n        }\n        eTxt = tu.etlcStr(eTxt, null);\n        if (eTxt) {\n          _private.setUVar("u50", eTxt, true);\n        }\n      }\n      if (override != undefined && override != null && typeof (override) == "object") {\n        _private.uVars = tu.extendObj(_private.uVars, override);\n      }\n    };\n\n    /*\n     * Sets Product DCM Variables\n     *\n     * @param {object}   elem     DOM element.\n     */\n    _private.setProdUVars = function (elem) {\n      var productInfo = tu.getProductInfo(elem);\n      _private.setUVar("u25", productInfo.id, true);\n      _private.setUVar("u32", productInfo.sku, true);\n      _private.setUVar("u26", productInfo.name, true);\n      _private.setUVar("u56", productInfo.retailer, true);\n    };\n\n    /*\n     * Sets DCM Variable\n     *\n     * @param {string}   uVar     Variable Name.\n     * @param {string}   value    Variable Value.\n     * @param {boolen}   override Flag for overriding variable value.\n     */\n    _private.setUVar = function (uVar, value, override) {\n      if (!uVar) {\n        return false;\n      }\n      if (!override) {\n        if (_private.uVars[uVar]) {\n          return false;\n        }\n      }\n      _private.uVars[uVar] = ((value === null || value === undefined) ? null : encodeURIComponent(tu.trim(value)));\n    };\n\n    /*\n     * Get DCM tracking string\n     *\n     * @param {string}   src    DCM Source value.\n     * @param {string}   type   DCM Type value.\n     * @param {string}   cat    DCM Category value.\n     * @param {object}   elem   DOM element (Optional). Available in case of Link click.\n     *\n     * @return {string} returns DCM tracking string.\n     */\n    _private.getDcmString = function (src, type, cat, override, elem) {\n      _private.setBaseUVars(elem, override);\n      var s = _private.baseUrl + "src=" + src + ";type=" + type + ";cat=" + cat + _private.getUVarString();\n      return s;\n    };\n\n    /*\n     * Gets DCM Variable string.\n     *\n     * @return {string} returns DCM variable string.\n     */\n    _private.getUVarString = function () {\n      var u = _private.uVars;\n      var uVarString = \'\';\n      for (var key in u) {\n        if (u.hasOwnProperty(key) && u[key] !== null) {\n          uVarString += ";" + key + "=" + u[key];\n        }\n      }\n      uVarString += _private.getRandomEndSrc();\n      return uVarString;\n    };\n\n    /*\n     * Gets Random Number\n     *\n     * @return {number} returns random number.\n     */\n    _private.getRandomNbr = function () {\n      var r = Math.random() + "";\n      r = r * 10000000000000;\n      return r;\n    };\n\n    /*\n     * Gets Random End string\n     *\n     * @return {string} returns random end string.\n     */\n    _private.getRandomEndSrc = function () {\n      return _private.randomEnding + _private.getRandomNbr();\n    };\n\n    /*\n     * Gets Conditioned DCM Variable\n     *\n     * @param {string}   name  DCM Variable name.\n     * @param {string}   val   DCM Variable value.\n     *\n     * @return {object} returns DCM variable.\n     */\n    _private.condStr = function (name, val) {\n      if (name && val) {\n        return ";" + name + "=" + val;\n      }\n      return "";\n    };\n\n    //------------------------Public functions-----------------------------------------\n    /*\n     * Set Ord Random ending\n     *\n     */\n    _public.setOrdRandomEnding = function () {\n      _private.randomEnding = _private.ordRandomEndSrc;\n    };\n\n    /*\n     * Set Ord1 Num Random ending\n     *\n     */\n    _public.setOrd1NumRandomEnding = function () {\n      _private.randomEnding = _private.ord1NumRandomEndSrc;\n    };\n\n    /*\n     * Tracks DCM Page view\n     *\n     * @param {string}   src    DCM Source value.\n     * @param {string}   type   DCM Type value.\n     * @param {string}   cat    DCM Category value.\n     */\n    _public.trackView = function (src, type, cat, override) {\n      var s = _private.getDcmString(src, type, cat, override, null);\n      tu.requestImage(s);\n      wdg.addTagExecuted(_private.tagName, "View");\n    };\n\n    /*\n     * Tracks DCM Page view\n     *\n     * @param {string}   src    DCM Source value.\n     * @param {string}   type   DCM Type value.\n     * @param {string}   cat    DCM Category value.\n     * @param {object}   elem   DOM element.\n     */\n    _public.trackEvent = function (src, type, cat, override, elem) {\n      var s = _private.getDcmString(src, type, cat, override, elem);\n      tu.requestImage(s);\n      wdg.addTagExecuted(_private.tagName, "Conversion");\n    };\n\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018apr30-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * WDG Facebook Tagging Framework.\n *\n * Facebook tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a Facebook Pixel framework\n   */\n  window.wdgtagging.facebook = (function (wdg, tu) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.baseUrl = "https://connect.facebook.net/en_US/fbevents.js";\n    _private.loaded = false;\n    _private.tagName = "Facebook";\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Loads Facebook library if not already loaded\n     */\n    _private.load = function () {\n      if (!_private.loaded) {\n        !function (f, b, e, v, n, t, s) {\n          if (f.fbq) return;\n          n = f.fbq = function () {\n            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)\n          };\n          if (!f._fbq) f._fbq = n;\n          n.push = n;\n          n.loaded = !0;\n          n.version = \'2.0\';\n          n.queue = [];\n          t = b.createElement(e);\n          t.async = !0;\n          t.src = v;\n          s = b.getElementsByTagName(e)[0];\n          s.parentNode.insertBefore(t, s);\n        }(window, document, \'script\', _private.baseUrl);\n      }\n    };\n\n    /*\n     * Initilize the Facebook Pixel tag.\n     *\n     * @param {number}   id     Facebook Pixel ID.\n     */\n    _public.init = function (id) {\n      _private.load();\n      window.fbq(\'dataProcessingOptions\', [\'LDU\'], 0, 0);\n      window.fbq(\'set\', \'autoConfig\', \'false\', id);\n      window.fbq(\'init\', id);\n      wdg.addTagExecuted(_private.tagName);\n    }\n\n    /*\n     * Tracks the Facebook Pixel tag event.\n     *\n     * @param {string}   eventType  Event Type. E.g. "trackSingle"\n     * @param {number}   id         Facebook Pixel ID.\n     * @param {string}   eventName  Event Name. E.g. "PageView"\n     * @param {object}   inArray    Tracking Data. \n     */\n    _public.trackEvent = function (eventType, id, eventName, inArray) {\n      if (inArray != undefined && inArray != null && typeof (inArray) == "object") {\n        window.fbq(eventType, id, eventName, inArray);\n      } else {\n        window.fbq(eventType, id, eventName);\n      }\n      wdg.addTagExecuted(_private.tagName, "Conversion");\n    };\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018apr30-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * WDG Twitter Tagging Framework.\n *\n * Twitter tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a Twitter Pixel framework\n   */\n  window.wdgtagging.twitter = (function (wdg, tu) {\n    // variables\n    var _private = {};\n    var _public = {};\n    // The baseUrl we have here is the same as\n    // http://static.ads-twitter.com/uwt.js\n    // //platform.twitter.com/oct.js\n    _private.baseUrl = "//static.ads-twitter.com/oct.js";\n    _private.loaded = false;\n    _private.tagName = "Twitter";\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Loads Twitter library if not already loaded\n     */\n    _private.load = function () {\n      if (!_private.loaded) {\n        !function (e, t, n, s, u, a) {\n          e.twq || (s = e.twq = function () {\n            s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);\n          },\n            s.version = \'1.1\',\n            s.queue = [],\n            u = t.createElement(n),\n            u.async = !0,\n            u.src = _private.baseUrl,\n            a = t.getElementsByTagName(n)[0],\n            a.parentNode.insertBefore(u, a)\n          )\n        }(window, document, \'script\');\n        _private.loaded = true;\n      }\n    };\n    _private.track = function (id, event) {\n      if (!_private.loaded) {\n        _private.load();\n      }\n      twq(\'init\', id);\n      twq(\'track\', event);\n    };\n    _private.init = function (id) {\n      if (!_private.loaded) {\n        tu.insertScriptCallback(_private.baseUrl, function (id) {\n          return function () {\n            _private.loaded = true;\n            twttr.conversion.trackPid(id, {\n              tw_sale_amount: 0,\n              tw_order_quantity: 0\n            });\n          };\n        }(id));\n      }\n    };\n    _private.click = function (id) {\n      if (_private.loaded) {\n        twttr.conversion.trackPid(id, {\n          tw_sale_amount: 0,\n          tw_order_quantity: 0\n        });\n      }\n    }\n\n    /*\n     * Initilize the Twitter Pixel tag.\n     *\n     * @param {number}   id    Twitter Data Partner ID.\n     */\n    _public.trackLoad = function (id) {\n      window._twitter_data_partner_id = id;\n      _private.init(id);\n      wdg.addTagExecuted(_private.tagName);\n    }\n    _public.trackEvent = function (id, event) {\n      _private.track(id, event);\n      wdg.addTagExecuted(_private.tagName, "Event");\n    }\n    _public.trackClick = function (id) {\n      window._twitter_data_partner_id = id;\n      _private.click(id);\n      wdg.addTagExecuted(_private.tagName, "Conversion");\n    }\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018may22-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * WDG Linkedin Tagging Framework.\n *\n * Linkedin tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a Linkedin Pixel framework\n   */\n  window.wdgtagging.linkedin = (function (wdg, tu) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.baseUrl = "https://snap.licdn.com/li.lms-analytics/insight.min.js";\n    _private.loaded = false;\n    _private.tagName = "Linkedin";\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Loads Linkedin library if not already loaded\n     */\n    _private.load = function () {\n      if (!_private.loaded) {\n        tu.insertScript(_private.baseUrl);\n        _private.loaded = true;\n      }\n    };\n\n    /*\n     * Initilize the Linkedin Pixel tag.\n     *\n     * @param {number}   id     Linkedin Data Partner ID.\n     */\n    _public.init = function (id) {\n      window._linkedin_data_partner_id = id;\n      _private.load();\n      wdg.addTagExecuted(_private.tagName);\n    }\n\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018apr30-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * WDG Bing Tagging Framework.\n *\n * Bing tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a Bing Pixel framework\n   */\n  window.wdgtagging.bing = (function (wdg, tu) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.baseUrl = "//bat.bing.com/bat.js";\n    _private.loaded = false;\n    _private.tagName = "Bing";\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Loads Bing library if not already loaded\n     */\n    _private.load = function (id) {\n      if (!_private.loaded) {\n        (function (w, d, t, r, u) {\n          var f, n, i;\n          w[u] = w[u] || [], f = function () {\n            var o = {\n              ti: id\n            };\n            o.q = w[u],\n              w[u] = new UET(o),\n              w[u].push("pageLoad");\n          },\n            n = d.createElement(t),\n            n.src = r,\n            n.async = 1,\n            n.onload = n.onreadystatechange = function () {\n              var s = this.readyState;\n              s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null)\n            },\n            i = d.getElementsByTagName(t)[0],\n            i.parentNode.insertBefore(n, i);\n        })(window, document, "script", _private.baseUrl, "uetq");\n      }\n    };\n\n    /*\n     * Initilize the Bing Pixel tag.\n     *\n     * @param {number}   id   Bing Pixel ID.\n     */\n    _public.init = function (id) {\n      _private.load(id);\n      wdg.addTagExecuted(_private.tagName);\n    }\n\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018may22-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * WDG Clicktale Tagging Framework.\n *\n * Clicktale tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @since   05-10-2018\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a Clicktale framework\n   */\n  window.wdgtagging.clicktale = (function (wdg, tu) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.baseUrl = document.location.protocol == \'https:\' ? \'https://cdnssl.clicktale.net/\' : \'http://cdn.clicktale.net/\';\n    _private.baseUrl += \'www32/ptc/\';\n    _private.defaultPath = \'168a4db6-5fe8-43da-8dfb-30d4c42d3feb.js\';\n    _private.loaded = false;\n    _private.tagName = "Clicktale";\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Loads Clicktale library if not already loaded\n     */\n    _private.load = function (scriptPath) {\n      if (!_private.loaded) {\n        if (typeof (window.ClickTaleCreateDOMElement) != "function") {\n          window.ClickTaleCreateDOMElement = function (tagName) {\n            if (document.createElementNS) {\n              return document.createElementNS(\'http://www.w3.org/1999/xhtml\', tagName);\n            }\n            return document.createElement(tagName);\n          };\n        }\n\n        window.WRInitTime = (new Date()).getTime();\n        scriptElement = ClickTaleCreateDOMElement(\'script\');\n        scriptElement.type = "text/javascript";\n        if (scriptPath != undefined && scriptPath != null && tu.trim(scriptPath) != undefined && tu.trim(scriptPath).length > 0) {\n          scriptElement.src = _private.baseUrl + scriptPath;\n        } else {\n          scriptElement.src = _private.baseUrl + _private.defaultPath;\n        }\n        document.getElementsByTagName(\'body\')[0].appendChild(scriptElement);\n        _private.loaded = true;\n      }\n    };\n\n    /*\n     * Initilize the Clicktale tag.\n     */\n    _public.init = function (scriptPath) {\n      if (typeof window.ClickTaleGlobal == \'undefined\') {\n        _private.load(scriptPath);\n        wdg.addTagExecuted(_private.tagName);\n      }\n    }\n\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018may10-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * WDG Comscore Tagging Framework.\n *\n * Comscore tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a Comscore Pixel framework\n   */\n  window.wdgtagging.comscore = (function (wdg, tu) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.path = "//www.microsoft.com/library/svy/";\n    _private.sPreBrokerFile = "pre_broker.js";\n    _private.sBrokerFile = "broker.js";\n    _private.loaded = false;\n    _private.tagName = "Comscore";\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Loads Comscore library if not already loaded\n     */\n    _private.load = function (path) {\n      if (!_private.loaded) {\n        _private.path = path || _private.path;\n        _private.path = (/\\/$/.test(_private.path) ? _private.path : _private.path + "/");\n        tu.insertScriptCallback(_private.path + _private.sPreBrokerFile, function () {\n          tu.insertScript(_private.path + _private.sBrokerFile);\n        });\n      }\n    }\n\n    /*\n     * Initilize the Comscore Pixel tag.\n     *\n     * @param {number}  id  Comscore Pixel ID.\n     */\n    _public.init = function (path) {\n      _private.load(path);\n      wdg.addTagExecuted(_private.tagName);\n    }\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018may22-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * WDG Google Conversion Tagging Framework.\n *\n * Google Conversion tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a Google Conversion framework\n   */\n  window.wdgtagging.google = (function (w, wdg, tu) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.baseUrl = "//www.googleadservices.com/pagead/conversion_async.js";\n    _private.loaded = false;\n    _private.trackedConvObjs = [];\n    _private.tagName = "Google";\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Loads Google library if not already loaded\n     */\n    _private.trackConv = function (inConvObj) {\n      _private.trackedConvObjs.push(inConvObj);\n      if (typeof w.google_trackConversion == "function") {\n        w.google_trackConversion(inConvObj);\n      } else {\n        if (!_private.loaded) {\n          tu.insertScriptCallback(_private.baseUrl, function () {\n            w.google_trackConversion(inConvObj);\n          });\n          _private.loaded = true;\n        }\n      }\n    };\n\n    /*\n     * Tracks Google Page view\n     *\n     */\n    _public.track = function (id, label, isRemarketing, lang) {\n      var gco = {};\n      gco.google_conversion_id = id;\n      if (label != undefined && label != null) {\n        gco.google_conversion_label = label;\n      }\n      gco.google_conversion_format = "3";\n      if (lang != undefined && lang != null) {\n        gco.google_conversion_language = lang;\n      }\n      gco.google_remarketing_only = isRemarketing;\n      _private.trackConv(gco);\n      wdg.addTagExecuted(_private.tagName, "Conversion");\n    };\n\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018apr30-v1");\n\n    return _public;\n  })(window, window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * WDG Marketo Tagging Framework.\n *\n * Marketo tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a Linkedin Pixel framework\n   */\n  window.wdgtagging.marketo = (function (wdg, tu) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.baseUrl = location.protocol + "//munchkin.marketo.net/munchkin.js";\n    _private.loaded = false;\n    _private.initialized = false;\n    _private.tagName = "Marketo";\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Loads library if not already loaded\n     */\n    _private.load = function (id) {\n      if (!_private.loaded) {\n        tu.insertScriptCallback(_private.baseUrl, function () {\n          if (!_private.initialized && typeof (Munchkin) != undefined) {\n            _private.initialized = true;\n            Munchkin.init(id);\n          }\n        });\n        _private.loaded = true;\n      }\n    };\n\n    /*\n     * Initilize the Marketo tag.\n     *\n     * @param {number}   id     Marketo ID.\n     */\n    _public.init = function (id) {\n      _private.load(id);\n      wdg.addTagExecuted(_private.tagName);\n    }\n\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018june11-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * WDG DAN Tagging Framework.\n *\n * DAN tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a DAN Pixel framework\n   */\n  window.wdgtagging.dan = (function (wdg, tu) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.loaded = false;\n    _private.tagName = "DAN";\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Loads DAN library if not already loaded\n     */\n    _private.load = function (id) {\n      if (!_private.loaded) {\n        (function (d, c) {\n          var\n            a = window,\n            b = document,\n            s = "script",\n            a = a[d] = a[d] || {};\n          a.c = {};\n          a.c[c] = {};\n          a.c[c].d = [];\n          a.c[c].d.push("init:" + (new Date).getTime());\n          a = b.getElementsByTagName(s)[0];\n          b = b.createElement(s);\n          b.async = !0;\n          b.src = "//t.a3cloud.net/" + c + "/tag.js?ns=" + d;\n          a.parentNode.insertBefore(b, a);\n        })("am", id);\n      }\n    };\n\n    /*\n     * Initilize the DAN Pixel tag.\n     *\n     * @param {number}   id   dan Pixel ID.\n     */\n    _public.init = function (id) {\n      if (!/AM-/i.test(id)) {\n        id = "AM-" + id;\n      }\n\n      _private.load(id);\n      wdg.addTagExecuted(_private.tagName);\n    }\n\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018may22-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * WDG AppNexus Tagging Framework.\n *\n * AppNexus tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a AppNexus Pixel framework\n   */\n  window.wdgtagging.appnexus = (function (wdg, tu) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.tagName = "AppNexus";\n    _private.baseUrl = "https://secure.adnxs.com/px?";\n    _private.loaded = false;\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Loads AppNexus Image Request not already loaded\n     */\n    _private.load = function (id, seg) {\n      if (!_private.loaded) {\n        tu.requestImage(_private.baseUrl + "id=" + id + "&seg=" + seg + "&t=2");\n        wdg.addTagExecuted(_private.tagName);\n      }\n    };\n\n    /*\n     * Initilize the AppNexus Pixel tag PageView.\n     *\n     * @param {number} id AppNexus Pixel ID.\n     */\n    _public.init = function (id, seg) {\n      _private.load(id, seg);\n    };\n\n    //Initializes\n    wdg.addTagInfo(_private.baseUrl, "2018may22-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * WDG MathTag Tagging Framework.\n *\n * MathTag tagging framework for WDG websites.\n *\n * @author  WDG Tagging & Analytics Team\n * @version 1.0\n */\nif (window.wdgtagging != null) {\n  /*\n   * Registers a MathTag Pixel framework\n   */\n  window.wdgtagging.mathtag = (function (wdg, tu) {\n    // variables \n    var _private = {};\n    var _public = {};\n    _private.tagName = "MathTag";\n    _private.baseUrl = "//pixel.mathtag.com/event/js?";\n    _private.loaded = false;\n\n    //------------------------Private functions-----------------------------------------\n    /*\n     * Loads MathTag Image Request not already loaded\n     */\n    _private.load = function (mtid, adid) {\n      if (!_private.loaded) {\n        tu.insertScript(_private.baseUrl + "mt_id=" + mtid + "&mt_adid=" + adid + "&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=");\n        _private.loaded = true;\n        wdg.addTagExecuted(_private.tagName);\n      }\n    };\n\n    /*\n     * Initilize the MathTag Pixel tag PageView.\n     *\n     * @param {number} id MathTag Pixel ID.\n     */\n    _public.init = function (mtid, adid) {\n      _private.load(mtid, adid);\n    };\n\n    //Initializes\n    wdg.addTagInfo(_private.tagName, "2018may22-v1");\n\n    return _public;\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n\n/**\n * This is the whole cookie consent script\n * if cookie consent has been accepted "all", fire all function in the queue and flip the status to true\n * if it has been accepted a "specific", fire all function in that specific queue and flip that status to true\n * if window.siteConsent Object is not available, it will check the object for 5 second in every 10 millisecond.\n */\nif (window.wdgtagging != null) {\n  window.wdgtagging.WDGCookieConsentCheck = (function (wdg, tu) {\n    try {\n      /**\n       * This object hold all SiteConsent data structure\n       * @type {{analytics: {wcpCatString: string, queue: [], status: boolean},\n       *       socialmedia: {wcpCatString: string, queue: [], status: boolean},\n       *       advertising: {wcpCatString: string, queue: [], status: boolean}}}\n       */\n      wdg.category = {\n        "socialmedia": { "wcpCatString": "SocialMedia", "status": false, "queue": [] },\n        "analytics": { "wcpCatString": "Analytics", "status": false, "queue": [] },\n        "advertising": { "wcpCatString": "Advertising", "status": false, "queue": [] },\n      };\n      // An array holding all different siteConsent category\n      wdg.catOrder = ["socialmedia", "analytics", "advertising"];\n      // A counter for the WcpSiteConsent object checking loop\n      wdg.siteConsentLoopCount = 0;\n      /**\n       * Check if the siteConsent object is available or not\n       * @returns {boolean}\n       */\n      tu.checkSiteConsentObject = function () {\n        return typeof window.siteConsent === "object" && window.siteConsent !== null && typeof window.siteConsent.getConsentFor == \'function\';\n      }\n      /**\n       * A function that will check a specific type of the consent has been accept\n       * @param categoryString which is the siteConsent type in lower case\n       * @returns {boolean} true if that type of cookie consent has been accepted, otherwise return flase.\n       */\n      tu.checkConsentStatus = function (categoryString) {\n        wdg.category[categoryString].status = window.siteConsent.getConsentFor(wdg.category[categoryString].wcpCatString);\n        return wdg.category[categoryString].status;\n      }\n      /**\n       * Fire "All" function in a "SPECIFIC" type of the consent queue\n       * @param categoryString in wdg.category object\n       */\n      tu.fireCategoryFunction = function (categoryString) {\n        var executeFunction;\n        while (wdg.category[categoryString].queue.length > 0) {\n          executeFunction = wdg.category[categoryString].queue.shift();\n          executeFunction();\n        }\n      }\n      /**\n       * Check "ALL" type of the consent status from window.siteConsent\n       * and set that status into wdg\'s consent status\n       * if it\'s true, fire "ALL" function in that "SPECIFIC" type of the consent queue\n       */\n      tu.checkWcpScStatusAndFireFuncInQueue = function () {\n        for (var i = 0; i < wdg.catOrder.length; i++) {\n          if (tu.checkConsentStatus(wdg.catOrder[i])) {\n            tu.fireCategoryFunction(wdg.catOrder[i]);\n          }\n        }\n      }\n      /**\n       * A function will start checking the cookie consent status.\n       * it will load the function if a specific type of consent has been accepted.\n       * if the cookie consent has been accepted all, all type of the function will be loaded.\n       */\n      tu.checkSiteConsent = function () {\n        if (typeof window.mscc === "undefined" && typeof window.siteConsent === "undefined") {\n          wdg.category_all_status = true;\n        } else if (typeof window.mscc !== "undefined" && typeof window.siteConsent === "undefined") {\n          if (typeof window.mscc.hasConsent === "function" && window.mscc.hasConsent()) {\n            wdg.category_all_status = true;\n          } else {\n            var checkSiteConsent = function () {\n              if (tu.checkSiteConsentObject()) {\n                clearInterval(siteConsentInterval);\n                tu.checkWcpScStatusAndFireFuncInQueue();\n              } else if (wdg.siteConsentLoopCount > 500) {\n                clearInterval(siteConsentInterval);\n              }\n              wdg.siteConsentLoopCount++;\n            };\n            var siteConsentInterval = setInterval(checkSiteConsent, 10);\n          }\n        } else {\n          if (tu.checkSiteConsentObject()) {\n            tu.checkWcpScStatusAndFireFuncInQueue()\n          }\n        }\n      }\n      tu.checkSiteConsent();\n    } catch (err) {\n      console.error(err);\n    }\n  })(window.wdgtagging, window.wdgtagging.util);\n}\n',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLa4980d7244384324b3dc59c622e882e6',
            name: 'Global JSLL PageView',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 3 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%JSLL RedTiger%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC579ee48d9ed04155b8299e869af1ac51-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLd3007a5aa2d4488a8101fbe1819579ec',
            name: 'AAM - Get Windows 10',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: '/en-us\\/windows\\/get-windows-10', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RCf76471806cca4694b149d3eae45bbfb8-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL480fd3b56d03430fa6f00f5245351e22',
            name: 'Bing - Devices PDPs & View All',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    {
                      value:
                        '/windows\\/featured-devices\\/(dell-xps-13)|(hp-spectre-x360-13)|(samsung-galaxy-tabpro-s)',
                      valueIsRegex: !0,
                    },
                    { value: '/windows\\/view-all-devices', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC19307c2ee521424581e9eef6cbf37168-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLafd2a94d5c11428f944c933907d24ea2',
            name: 'Global JSLL RT Tag',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%JSLL RedTiger%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RCc381ea104d9b4d878bba428451519c3e-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC6deb5a770cc848e8b1ef3761b2df54b2-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL643ee5606d9a4c61b667a51f872cceb5',
            name: 'JSLL Video OnePlayer',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 60 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC5f812135e64f48ad85ea100034bc60a2-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL77876936f4c642329d2b8da736f1694e',
            name: 'Windows JSLL Taggging',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 3 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%JSLL RedTiger%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC9f9b3c9f668a4b9dbf5ccda86744fe39-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RCf16325d3e41c447fb6b66d7d82fcb43d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC557c8c9e1a32442f85198b3cd484649f-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC8f2e96b0f42b4791b6a87bd6474f9dc7-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC1a3e34bc6d5b4a44bdd14eed6f571acb-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL02fba5fdfe344316aa25b75c00afedff',
            name: 'Global Comscore',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC0d8ee37d286a40e9a5bcfa5bffd8a963-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL631abc51e7c3470cbc8751c7abc4c67a',
            name: 'Global Data Layer',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 2 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '//# sourceURL=MldDataLayer.js\n/**\n * WDG Global Data Layer.\n *\n * Datalayer tagging for WDG websites. \n *\n * @author    WDG Tagging & Analytics Team\n * @version   1.3\n */\n\nif (window.wdgtagging != null) {\n  (function (wdg, tu, $) {\n    /**\n     * Added for US 14106\n     * @todo Delete:2021-03-30\n     * for HCL. Since the accessibility checker is throwing a false positive for them we have fixed it using the code below.Need to check again in March if the issue is resolved from Adobe.\n     */\n    $(".at-flicker-control").slice(1).remove(); \n\n    var env, langLoc, lang, loc, gpn;\n    env = (window.location.host === "www.microsoft.com") ? "prod" : "staging";\n\n    //Market - LangLoc\n    var tPNSplits = window.location.pathname.toLowerCase().split("/");\n    var i = (env === "prod" ? 1 : 2);\n    //RedTiger Staging environment condition\n    if (env === "staging" && window.location.hostname === "marketingsites-prod.microsoft.com")\n    {\n      i = 1;\n    }\n    langLoc = tPNSplits[i];\n\n    if (!langLoc) {\n      lang = "";\n      loc = "";\n    } else if (langLoc.match(/^..-.*-..$/)) {\n      //special case for sr-latn-rn\n      lang = langLoc.split("-")[0];\n      loc = langLoc.split("-")[2];\n    } else if (langLoc.match(/^..-.*$/)) {\n      //also includes en-westindies\n      lang = langLoc.split("-")[0];\n      loc = langLoc.split("-")[1];\n    } else {\n      lang = "";\n      loc = "";\n    }\n\n    //Page name\n    i = i + 2;\n    gpn = tu.tlcStr(tPNSplits[i], "homepage");\n    if (gpn !== "homepage") {\n      i++;\n      while (i < tPNSplits.length) {\n        gpn += "/" + tPNSplits[i];\n        i++;\n      }\n      gpn = tu.tlcStr(gpn).replace(/[\\-_]/g, \' \');\n    }\n\n    wdg.setData("env", env);\n    wdg.setData("langLoc", langLoc);\n    wdg.setData("lang", lang);\n    wdg.setData("loc", loc);\n    wdg.setData("gpn", gpn);\n\n  })(window.wdgtagging, window.wdgtagging.util, window.jQuery);\n}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL7ab54b4243a040ee81b23419515ace4f',
            name: 'Windows JSLL QUIZ Tagging',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 5 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%JSLL RedTiger%' },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: '\\/windows\\/get-windows-10\\/?', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC390ba8699f64474dba867fef3e01c924-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL6ef7192250f742c38bd19c8f3bea1c5c',
            name: 'Facebook HMC o-60',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 60 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: '\\/windows\\/help-me-choose\\/?', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RCa702afa033a845acb20323efdcea6397-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL46e44e8cc7914ef5a1b0f960f5118f38',
            name: 'Page - PcOffers - OCID o-20',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 55 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: '\\/en-us\\/windows\\/pc-offers-', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RCdf95a4dff57442a7baa561961636b306-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL70f9b87df892419ea3d7fde16d56f438',
            name: 'Get Windows 10 Old HMC',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%JSLL RedTiger%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC30b69654d14a4895ae64b6e5cf0cf812-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL2806f9c0075840dea8dcb402b8c2b397',
            name: 'Temp Clarity Media',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC5548547466864ee2ab73cca512147d77-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5a6539f8057c4b0a8623a0acd5389c30',
            name: 'Temp DCM EN-US|GB Pc-Offers-60973501',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: 'en-(us|gb)\\/windows\\/pc-offers-60973501', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC9fd875aff67a4694bccd766c7660f8ab-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL23606fc3bb5b4ffd84c1941c383bee2c',
            name: 'Temp Pinterest EN-US Pc Offers-72605654',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [{ value: 'en-us\\/windows\\/pc-offers-72605654', valueIsRegex: !0 }],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC9d4cd5653a4e43e1aef6cb5cd508c1c9-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc0712cc383d14469a3a21ba2573bf0ad',
            name: 'Temp Snap Pixel',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    { value: '\\/en-us\\/windows\\/sync-across-your-devices', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/2418adba327c/RC7d4bbb3a791a4a888004bbbf008f6fe7-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
        ],
      });
    var $___var_babeca36f6d15eb8 = (function () {
      const $___old_ca1894c5f90b076a = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_ca1894c5f90b076a)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_addd751f0eb655f8.userAgent
          ));
        return function () {
          'use strict';
          function n (n, e) {
            return n((e = { exports: {} }), e.exports), e.exports;
          }
          function e (e) {
            var t = this.constructor;
            return this.then(
              function (n) {
                return t.resolve(e()).then(function () {
                  return n;
                });
              },
              function (n) {
                return t.resolve(e()).then(function () {
                  return t.reject(n);
                });
              }
            );
          }
          function u (n) {
            return Boolean(n && 'undefined' != typeof n.length);
          }
          function r () {}
          function a (n, e) {
            return function () {
              n.apply(e, arguments);
            };
          }
          function i (n) {
            if (!(this instanceof i)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof n) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              f(n, this);
          }
          function o (r, a) {
            for (; 3 === r._state; ) r = r._value;
            0 !== r._state
              ? ((r._handled = !0),
                i._immediateFn(function () {
                  var n = 1 === r._state ? a.onFulfilled : a.onRejected;
                  if (null !== n) {
                    var e;
                    try {
                      e = n(r._value);
                    } catch (t) {
                      return void c(a.promise, t);
                    }
                    s(a.promise, e);
                  } else (1 === r._state ? s : c)(a.promise, r._value);
                }))
              : r._deferreds.push(a);
          }
          function s (n, e) {
            try {
              if (e === n) throw new TypeError('A promise cannot be resolved with itself.');
              if (e && ('object' == typeof e || 'function' == typeof e)) {
                var t = e.then;
                if (e instanceof i) return (n._state = 3), (n._value = e), void l(n);
                if ('function' == typeof t) return void f(a(t, e), n);
              }
              (n._state = 1), (n._value = e), l(n);
            } catch (r) {
              c(n, r);
            }
          }
          function c (n, e) {
            (n._state = 2), (n._value = e), l(n);
          }
          function l (n) {
            2 === n._state &&
              0 === n._deferreds.length &&
              i._immediateFn(function () {
                n._handled || i._unhandledRejectionFn(n._value);
              });
            for (var e = 0, t = n._deferreds.length; e < t; e++) o(n, n._deferreds[e]);
            n._deferreds = null;
          }
          function d (n, e, t) {
            (this.onFulfilled = 'function' == typeof n ? n : null),
              (this.onRejected = 'function' == typeof e ? e : null),
              (this.promise = t);
          }
          function f (n, e) {
            var t = !1;
            try {
              n(
                function (n) {
                  t || ((t = !0), s(e, n));
                },
                function (n) {
                  t || ((t = !0), c(e, n));
                }
              );
            } catch (r) {
              if (t) return;
              (t = !0), c(e, r);
            }
          }
          function p (n) {
            if (null === n || n === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(n);
          }
          function t () {
            try {
              if (!Object.assign) return !1;
              var n = new String('abc');
              if (((n[5] = 'de'), '5' === Object.getOwnPropertyNames(n)[0])) return !1;
              for (var e = {}, t = 0; t < 10; t++) e['_' + String.fromCharCode(t)] = t;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(e)
                  .map(function (n) {
                    return e[n];
                  })
                  .join('')
              )
                return !1;
              var r = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (n) {
                  r[n] = n;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
              );
            } catch (a) {
              return !1;
            }
          }
          function m (n, e) {
            return Object.prototype.hasOwnProperty.call(n, e);
          }
          if (window.atob) {
            var g = function (n) {
                var t = [];
                return (
                  n.forEach(function (e) {
                    e.events &&
                      e.events.forEach(function (n) {
                        t.push({ rule: e, event: n });
                      });
                  }),
                  t.sort(function (n, e) {
                    return n.event.ruleOrder - e.event.ruleOrder;
                  })
                );
              },
              v = 'debug',
              h = function (e, n) {
                var t = function () {
                    return 'true' === e.getItem(v);
                  },
                  r = function (n) {
                    e.setItem(v, n);
                  },
                  a = [],
                  i = function (n) {
                    a.push(n);
                  };
                return (
                  (n.outputEnabled = t()),
                  {
                    onDebugChanged: i,
                    getDebugEnabled: t,
                    setDebugEnabled: function (e) {
                      t() !== e &&
                        (r(e),
                        (n.outputEnabled = e),
                        a.forEach(function (n) {
                          n(e);
                        }));
                    },
                  }
                );
              },
              b = 'Module did not export a function.',
              w = function (i, o) {
                return function (n, e, t) {
                  t = t || [];
                  var r = i.getModuleExports(n.modulePath);
                  if ('function' != typeof r) throw new Error(b);
                  var a = o(n.settings || {}, e);
                  return r.bind(null, a).apply(null, t);
                };
              },
              y = function (n) {
                return 'string' == typeof n ? n.replace(/\s+/g, ' ').trim() : n;
              },
              _ = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              C = '\uD83D\uDE80',
              k =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : C,
              S = !1,
              j = function (n) {
                if (S && window.console) {
                  var e = Array.prototype.slice.call(arguments, 1);
                  e.unshift(k),
                    n !== _.DEBUG || window.console[n] || (n = _.INFO),
                    window.console[n].apply(window.console, e);
                }
              },
              T = j.bind(null, _.LOG),
              L = j.bind(null, _.INFO),
              x = j.bind(null, _.DEBUG),
              E = j.bind(null, _.WARN),
              P = j.bind(null, _.ERROR),
              I = {
                log: T,
                info: L,
                debug: x,
                warn: E,
                error: P,
                get outputEnabled () {
                  return S;
                },
                set outputEnabled (n) {
                  S = n;
                },
                createPrefixedLogger: function (n) {
                  var e = '[' + n + ']';
                  return {
                    log: T.bind(null, e),
                    info: L.bind(null, e),
                    debug: x.bind(null, e),
                    warn: E.bind(null, e),
                    error: P.bind(null, e),
                  };
                },
              },
              A = n(function (r) {
                !(function (n) {
                  if (((r.exports = n()), !!0)) {
                    var e = window.Cookies,
                      t = (window.Cookies = n());
                    t.noConflict = function () {
                      return (window.Cookies = e), t;
                    };
                  }
                })(function () {
                  function c () {
                    for (var n = 0, e = {}; n < arguments.length; n++) {
                      var t = arguments[n];
                      for (var r in t) e[r] = t[r];
                    }
                    return e;
                  }
                  function l (n) {
                    return n.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function n (u) {
                    function s () {}
                    function t (n, e, t) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (t = c({ path: '/' }, s.defaults, t)).expires &&
                          (t.expires = new Date(1 * new Date() + 86400000 * t.expires)),
                          (t.expires = t.expires ? t.expires.toUTCString() : '');
                        try {
                          var r = JSON.stringify(e);
                          /^[\{\[]/.test(r) && (e = r);
                        } catch (o) {}
                        (e = u.write
                          ? u.write(e, n)
                          : encodeURIComponent(String(e)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (n = encodeURIComponent(String(n))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var a = '';
                        for (var i in t)
                          t[i] &&
                            ((a += '; ' + i), !0 !== t[i] && (a += '=' + t[i].split(';')[0]));
                        return (document.cookie = n + '=' + e + a);
                      }
                    }
                    function e (n, e) {
                      const $___old_f6b824709edbd51f = {}.constructor.getOwnPropertyDescriptor(
                        Document.prototype,
                        'cookie'
                      );
                      try {
                        if ($___old_f6b824709edbd51f)
                          ({}.constructor.defineProperty(
                            Document.prototype,
                            'cookie',
                            $___stub_cdc5a54489618108.cookie
                          ));
                        return function () {
                          if ('undefined' != typeof document) {
                            for (
                              var t = {},
                                r = document.cookie ? document.cookie.split('; ') : [],
                                a = 0;
                              a < r.length;
                              a++
                            ) {
                              var i = r[a].split('='),
                                o = i.slice(1).join('=');
                              e || '"' !== o.charAt(0) || (o = o.slice(1, -1));
                              try {
                                var s = l(i[0]);
                                if (((o = (u.read || u)(o, s) || l(o)), e))
                                  try {
                                    o = JSON.parse(o);
                                  } catch (c) {}
                                if (((t[s] = o), n === s)) break;
                              } catch (c) {}
                            }
                            return n ? t[n] : t;
                          }
                        }.apply(this, arguments);
                      } finally {
                        if ($___old_f6b824709edbd51f)
                          ({}.constructor.defineProperty(
                            Document.prototype,
                            'cookie',
                            $___old_f6b824709edbd51f
                          ));
                      }
                    }
                    return (
                      (s.set = t),
                      (s.get = function (n) {
                        return e(n, !1);
                      }),
                      (s.getJSON = function (n) {
                        return e(n, !0);
                      }),
                      (s.remove = function (n, e) {
                        t(n, '', c(e, { expires: -1 }));
                      }),
                      (s.defaults = {}),
                      (s.withConverter = n),
                      s
                    );
                  }
                  return n(function () {});
                });
              }),
              N = { get: A.get, set: A.set, remove: A.remove },
              R = window,
              O = 'com.adobe.reactor.',
              D = function (r, n) {
                var a = O + (n || '');
                return {
                  getItem: function (n) {
                    const $___old_cf42ee9964a3d260 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_cf42ee9964a3d260)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_9417959baab2caf0.localStorage
                        ));
                      return function () {
                        try {
                          return R[r].getItem(a + n);
                        } catch (e) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_cf42ee9964a3d260)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_cf42ee9964a3d260
                        ));
                    }
                  },
                  setItem: function (n, e) {
                    const $___old_525d1c173a69193f = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_525d1c173a69193f)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_9417959baab2caf0.localStorage
                        ));
                      return function () {
                        try {
                          return R[r].setItem(a + n, e), !0;
                        } catch (t) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_525d1c173a69193f)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_525d1c173a69193f
                        ));
                    }
                  },
                };
              },
              M = '_sdsat_',
              U = 'dataElements.',
              F = 'dataElementCookiesMigrated',
              V = D('localStorage'),
              J = D('sessionStorage', U),
              q = D('localStorage', U),
              G = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              W = {},
              Q = function (n) {
                var e;
                try {
                  e = JSON.stringify(n);
                } catch (t) {}
                return e;
              },
              B = function (n, e, t) {
                var r;
                switch (e) {
                  case G.PAGEVIEW:
                    return void (W[n] = t);
                  case G.SESSION:
                    return void ((r = Q(t)) && J.setItem(n, r));
                  case G.VISITOR:
                    return void ((r = Q(t)) && q.setItem(n, r));
                }
              },
              z = function (n, e) {
                var t = N.get(M + n);
                t !== undefined && B(n, e, t);
              },
              $ = {
                setValue: B,
                getValue: function (n, e) {
                  var t;
                  switch (e) {
                    case G.PAGEVIEW:
                      return W.hasOwnProperty(n) ? W[n] : null;
                    case G.SESSION:
                      return null === (t = J.getItem(n)) ? t : JSON.parse(t);
                    case G.VISITOR:
                      return null === (t = q.getItem(n)) ? t : JSON.parse(t);
                  }
                },
                migrateCookieData: function (e) {
                  V.getItem(F) ||
                    (Object.keys(e).forEach(function (n) {
                      z(n, e[n].storageDuration);
                    }),
                    V.setItem(F, !0));
                },
              },
              H = function (n, e, t, r) {
                return (
                  'Failed to execute data element module ' +
                  n.modulePath +
                  ' for data element ' +
                  e +
                  '. ' +
                  t +
                  (r ? '\n' + r : '')
                );
              },
              K = function (s, c, u, l) {
                return function (n, e) {
                  var t = c(n);
                  if (!t) return l ? '' : undefined;
                  var r,
                    a = t.storageDuration;
                  try {
                    r = s.getModuleExports(t.modulePath);
                  } catch (o) {
                    return void I.error(H(t, n, o.message, o.stack));
                  }
                  if ('function' == typeof r) {
                    var i;
                    try {
                      i = r(u(t.settings, e), e);
                    } catch (o) {
                      return void I.error(H(t, n, o.message, o.stack));
                    }
                    return (
                      a && (null != i ? $.setValue(n, a, i) : (i = $.getValue(n, a))),
                      null == i && null != t.defaultValue && (i = t.defaultValue),
                      'string' == typeof i &&
                        (t.cleanText && (i = y(i)), t.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  I.error(H(t, n, 'Module did not export a function.'));
                };
              },
              Z = {
                text: function (n) {
                  return n.textContent;
                },
                cleanText: function (n) {
                  return y(n.textContent);
                },
              },
              Y = function (n, e, t) {
                for (var r, a = n, i = 0, o = e.length; i < o; i++) {
                  if (null == a) return undefined;
                  var s = e[i];
                  if (t && '@' === s.charAt(0)) {
                    var c = s.slice(1);
                    a = Z[c](a);
                  } else if (a.getAttribute && (r = s.match(/^getAttribute\((.+)\)$/))) {
                    var u = r[1];
                    a = a.getAttribute(u);
                  } else a = a[s];
                }
                return a;
              },
              X = function (i, o, s) {
                return function (n, e) {
                  var t;
                  if (o(n)) t = s(n, e);
                  else {
                    var r = n.split('.'),
                      a = r.shift();
                    'this' === a
                      ? e && (t = Y(e.element, r, !0))
                      : 'event' === a
                      ? e && (t = Y(e, r))
                      : 'target' === a
                      ? e && (t = Y(e.target, r))
                      : (t = Y(i[a], r));
                  }
                  return t;
                };
              },
              nn = function (t, r) {
                return function (n) {
                  var e = n.split('.')[0];
                  return Boolean(
                    r(n) || 'this' === e || 'event' === e || 'target' === e || t.hasOwnProperty(e)
                  );
                };
              },
              en = function (n, e, t) {
                var r = { exports: {} };
                return n.call(r.exports, r, r.exports, e, t), r.exports;
              },
              tn = function () {
                var o = {},
                  t = function (n) {
                    var e = o[n];
                    if (!e) throw new Error('Module ' + n + ' not found.');
                    return e;
                  },
                  n = function () {
                    Object.keys(o).forEach(function (n) {
                      try {
                        r(n);
                      } catch (t) {
                        var e =
                          'Error initializing module ' +
                          n +
                          '. ' +
                          t.message +
                          (t.stack ? '\n' + t.stack : '');
                        I.error(e);
                      }
                    });
                  },
                  r = function (n) {
                    var e = t(n);
                    return (
                      e.hasOwnProperty('exports') ||
                        (e.exports = en(e.definition.script, e.require, e.turbine)),
                      e.exports
                    );
                  };
                return {
                  registerModule: function (n, e, t, r, a) {
                    var i = { definition: e, extensionName: t, require: r, turbine: a };
                    (i.require = r), (o[n] = i);
                  },
                  hydrateCache: n,
                  getModuleExports: r,
                  getModuleDefinition: function (n) {
                    return t(n).definition;
                  },
                  getModuleExtensionName: function (n) {
                    return t(n).extensionName;
                  },
                };
              },
              rn = !1,
              an = function (r) {
                return function (e, t) {
                  var n = r._monitors;
                  n &&
                    (rn ||
                      (I.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (rn = !0)),
                    n.forEach(function (n) {
                      n[e] && n[e](t);
                    }));
                };
              },
              on = function (a, i, o) {
                var t,
                  r,
                  s,
                  c,
                  u = [],
                  l = function (n, e, t) {
                    if (!a(e)) return n;
                    u.push(e);
                    var r = i(e, t);
                    return u.pop(), null == r && o ? '' : r;
                  };
                return (
                  (t = function (n, t) {
                    var e = /^%([^%]+)%$/.exec(n);
                    return e
                      ? l(n, e[1], t)
                      : n.replace(/%(.+?)%/g, function (n, e) {
                          return l(n, e, t);
                        });
                  }),
                  (r = function (n, e) {
                    for (var t = {}, r = Object.keys(n), a = 0; a < r.length; a++) {
                      var i = r[a],
                        o = n[i];
                      t[i] = c(o, e);
                    }
                    return t;
                  }),
                  (s = function (n, e) {
                    for (var t = [], r = 0, a = n.length; r < a; r++) t.push(c(n[r], e));
                    return t;
                  }),
                  (c = function (n, e) {
                    return 'string' == typeof n
                      ? t(n, e)
                      : Array.isArray(n)
                      ? s(n, e)
                      : 'object' == typeof n && null !== n
                      ? r(n, e)
                      : n;
                  }),
                  function (n, e) {
                    return 10 < u.length
                      ? (I.error('Data element circular reference detected: ' + u.join(' -> ')), n)
                      : c(n, e);
                  }
                );
              },
              sn = function (a) {
                return function (n, e) {
                  if ('string' == typeof n) a[arguments[0]] = e;
                  else if (arguments[0]) {
                    var t = arguments[0];
                    for (var r in t) a[r] = t[r];
                  }
                };
              },
              cn = setTimeout;
            (i.prototype['catch'] = function (n) {
              return this.then(null, n);
            }),
              (i.prototype.then = function (n, e) {
                var t = new this.constructor(r);
                return o(this, new d(n, e, t)), t;
              }),
              (i.prototype['finally'] = e),
              (i.all = function (e) {
                return new i(function (a, i) {
                  function o (e, n) {
                    try {
                      if (n && ('object' == typeof n || 'function' == typeof n)) {
                        var t = n.then;
                        if ('function' == typeof t)
                          return void t.call(
                            n,
                            function (n) {
                              o(e, n);
                            },
                            i
                          );
                      }
                      (s[e] = n), 0 == --c && a(s);
                    } catch (r) {
                      i(r);
                    }
                  }
                  if (!u(e)) return i(new TypeError('Promise.all accepts an array'));
                  var s = Array.prototype.slice.call(e);
                  if (0 === s.length) return a([]);
                  for (var c = s.length, n = 0; n < s.length; n++) o(n, s[n]);
                });
              }),
              (i.resolve = function (e) {
                return e && 'object' == typeof e && e.constructor === i
                  ? e
                  : new i(function (n) {
                      n(e);
                    });
              }),
              (i.reject = function (t) {
                return new i(function (n, e) {
                  e(t);
                });
              }),
              (i.race = function (a) {
                return new i(function (n, e) {
                  if (!u(a)) return e(new TypeError('Promise.race accepts an array'));
                  for (var t = 0, r = a.length; t < r; t++) i.resolve(a[t]).then(n, e);
                });
              }),
              (i._immediateFn =
                ('function' == typeof setImmediate &&
                  function (n) {
                    setImmediate(n);
                  }) ||
                function (n) {
                  cn(n, 0);
                }),
              (i._unhandledRejectionFn = function je (n) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', n);
              });
            var un = window.Promise || i['default'] || i,
              ln = function (u, t, r) {
                return function (s, e, c, n) {
                  return n.then(function () {
                    var i,
                      o = s.delayNext;
                    return new un(function (n, e) {
                      var t = u(s, c, [c]);
                      if (!o) return n();
                      var r = s.timeout,
                        a = new un(function (n, e) {
                          i = setTimeout(function () {
                            e(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      un.race([t, a]).then(n, e);
                    })
                      ['catch'](function (n) {
                        return clearTimeout(i), (n = t(n)), r(s, e, n), un.reject(n);
                      })
                      .then(function () {
                        clearTimeout(i);
                      });
                  });
                };
              },
              dn = function (c, t, r, a, u) {
                return function (o, e, s, n) {
                  return n.then(function () {
                    var i;
                    return new un(function (n, e) {
                      var t = c(o, s, [s]),
                        r = o.timeout,
                        a = new un(function (n, e) {
                          i = setTimeout(function () {
                            e(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      un.race([t, a]).then(n, e);
                    })
                      ['catch'](function (n) {
                        return clearTimeout(i), (n = t(n)), a(o, e, n), un.reject(n);
                      })
                      .then(function (n) {
                        if ((clearTimeout(i), !r(o, n))) return u(o, e), un.reject();
                      });
                  });
                };
              },
              fn = un.resolve(),
              pn = function (r, a, n) {
                return function (e, t) {
                  return (
                    e.conditions &&
                      e.conditions.forEach(function (n) {
                        fn = r(n, e, t, fn);
                      }),
                    e.actions &&
                      e.actions.forEach(function (n) {
                        fn = a(n, e, t, fn);
                      }),
                    (fn = (fn = fn.then(function () {
                      n(e);
                    }))['catch'](function () {}))
                  );
                };
              },
              gn = function (n) {
                return Boolean(n && 'object' == typeof n && 'function' == typeof n.then);
              },
              mn = function (o, s, c, u) {
                return function (n, e) {
                  var t;
                  if (n.conditions)
                    for (var r = 0; r < n.conditions.length; r++) {
                      t = n.conditions[r];
                      try {
                        var a = o(t, e, [e]);
                        if (gn(a))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!s(t, a)) return c(t, n), !1;
                      } catch (i) {
                        return u(t, n, i), !1;
                      }
                    }
                  return !0;
                };
              },
              vn = function (t, r) {
                return function (n, e) {
                  t(n, e) && r(n, e);
                };
              },
              hn = function (t) {
                return function (n) {
                  var e = t.getModuleDefinition(n.modulePath);
                  return (e && e.displayName) || n.modulePath;
                };
              },
              bn = function (a) {
                return function (n) {
                  var e = n.rule,
                    t = n.event,
                    r = a.getModuleDefinition(t.modulePath).name;
                  return {
                    $type: a.getModuleExtensionName(t.modulePath) + '.' + r,
                    $rule: { id: e.id, name: e.name },
                  };
                };
              },
              wn = function (s, c, u, l, d, f) {
                return function (t, n) {
                  var r = n.rule,
                    e = n.event;
                  e.settings = e.settings || {};
                  try {
                    var a = d(n);
                    c(e, null, [
                      function i (n) {
                        var e = u(a, n);
                        t(function () {
                          s(e, r);
                        });
                      },
                    ]);
                  } catch (o) {
                    f.error(l(e, r, o));
                  }
                };
              },
              yn = function (a, i, o, s) {
                return function (n, e, t) {
                  var r = i(n);
                  o.error(a(r, e.name, t)), s('ruleActionFailed', { rule: e, action: n });
                };
              },
              _n = function (a, i, o, s) {
                return function (n, e, t) {
                  var r = i(n);
                  o.error(a(r, e.name, t)), s('ruleConditionFailed', { rule: e, condition: n });
                };
              },
              Cn = function (r, a, i) {
                return function (n, e) {
                  var t = r(n);
                  a.log('Condition "' + t + '" for rule "' + e.name + '" was not met.'),
                    i('ruleConditionFailed', { rule: e, condition: n });
                };
              },
              kn = function (e, t) {
                return function (n) {
                  e.log('Rule "' + n.name + '" fired.'), t('ruleCompleted', { rule: n });
                };
              },
              Sn = function (i, o, s) {
                return function (n, e) {
                  var t;
                  if (n.actions)
                    for (var r = 0; r < n.actions.length; r++) {
                      t = n.actions[r];
                      try {
                        i(t, e, [e]);
                      } catch (a) {
                        return void o(t, n, a);
                      }
                    }
                  s(n);
                };
              },
              jn = function (t, r, a, i) {
                return function (n, e) {
                  i('ruleTriggered', { rule: e }), t ? a(e, n) : r(e, n);
                };
              },
              Tn = function (n, e, t) {
                return (
                  'Failed to execute "' +
                  n +
                  '" for "' +
                  e +
                  '" rule. ' +
                  t.message +
                  (t.stack ? '\n' + t.stack : '')
                );
              },
              Ln = function (n, e) {
                return (e && !n.negate) || (!e && n.negate);
              },
              xn = [],
              En = !1,
              Pn = function (n) {
                En ? n() : xn.push(n);
              },
              In = function (n, e, t) {
                n(e).forEach(function (n) {
                  t(Pn, n);
                }),
                  (En = !0),
                  xn.forEach(function (n) {
                    n();
                  }),
                  (xn = []);
              },
              An = function (n) {
                if (
                  (n ||
                    (n = new Error(
                      'The extension triggered an error, but no error information was provided.'
                    )),
                  !(n instanceof Error))
                ) {
                  var e = 'object' == typeof n ? JSON.stringify(n) : String(n);
                  n = new Error(e);
                }
                return n;
              },
              Nn = Object.getOwnPropertySymbols,
              Rn = Object.prototype.hasOwnProperty,
              On = Object.prototype.propertyIsEnumerable,
              Dn = t()
                ? Object.assign
                : function (n) {
                    for (var e, t, r = p(n), a = 1; a < arguments.length; a++) {
                      for (var i in (e = Object(arguments[a]))) Rn.call(e, i) && (r[i] = e[i]);
                      if (Nn) {
                        t = Nn(e);
                        for (var o = 0; o < t.length; o++) On.call(e, t[o]) && (r[t[o]] = e[t[o]]);
                      }
                    }
                    return r;
                  },
              Mn = function (n, e) {
                return (
                  Dn((e = e || {}), n),
                  e.hasOwnProperty('type') ||
                    Object.defineProperty(e, 'type', {
                      get: function () {
                        return (
                          I.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          e.$type
                        );
                      },
                    }),
                  e
                );
              },
              Un = function (c, u) {
                return function (n, e) {
                  var t = c[n];
                  if (t) {
                    var r = t.modules;
                    if (r)
                      for (var a = Object.keys(r), i = 0; i < a.length; i++) {
                        var o = a[i],
                          s = r[o];
                        if (s.shared && s.name === e) return u.getModuleExports(o);
                      }
                  }
                };
              },
              Fn = function (n, e) {
                return function () {
                  return e ? n(e) : {};
                };
              },
              Vn = function (t, r) {
                return function (n) {
                  if (r) {
                    var e = n.split('.');
                    e.splice(e.length - 1 || 1, 0, 'min'), (n = e.join('.'));
                  }
                  return t + n;
                };
              },
              Jn = '.js',
              qn = function (n) {
                return n.substr(0, n.lastIndexOf('/'));
              },
              Gn = function (n, e) {
                return -1 !== n.indexOf(e, n.length - e.length);
              },
              Wn = function (n, e) {
                Gn(e, Jn) || (e += Jn);
                var t = e.split('/'),
                  r = qn(n).split('/');
                return (
                  t.forEach(function (n) {
                    n && '.' !== n && ('..' === n ? r.length && r.pop() : r.push(n));
                  }),
                  r.join('/')
                );
              },
              Qn = document,
              Bn = function (t, r) {
                return new un(function (n, e) {
                  (r.onload = function () {
                    n(r);
                  }),
                    (r.onerror = function () {
                      e(new Error('Failed to load script ' + t));
                    });
                });
              },
              zn = function (n) {
                var e = document.createElement('script');
                (e.src = n), (e.async = !0);
                var t = Bn(n, e);
                return document.getElementsByTagName('head')[0].appendChild(e), t;
              },
              $n = function (n, e, t, r) {
                (e = e || '&'), (t = t || '=');
                var a = {};
                if ('string' != typeof n || 0 === n.length) return a;
                var i = /\+/g;
                n = n.split(e);
                var o = 1000;
                r && 'number' == typeof r.maxKeys && (o = r.maxKeys);
                var s = n.length;
                0 < o && o < s && (s = o);
                for (var c = 0; c < s; ++c) {
                  var u,
                    l,
                    d,
                    f,
                    p = n[c].replace(i, '%20'),
                    g = p.indexOf(t);
                  0 <= g ? ((u = p.substr(0, g)), (l = p.substr(g + 1))) : ((u = p), (l = '')),
                    (d = decodeURIComponent(u)),
                    (f = decodeURIComponent(l)),
                    m(a, d)
                      ? Array.isArray(a[d])
                        ? a[d].push(f)
                        : (a[d] = [a[d], f])
                      : (a[d] = f);
                }
                return a;
              },
              Hn = function (n) {
                switch (typeof n) {
                  case 'string':
                    return n;
                  case 'boolean':
                    return n ? 'true' : 'false';
                  case 'number':
                    return isFinite(n) ? n : '';
                  default:
                    return '';
                }
              },
              Kn = function (t, r, a, n) {
                return (
                  (r = r || '&'),
                  (a = a || '='),
                  null === t && (t = undefined),
                  'object' == typeof t
                    ? Object.keys(t)
                        .map(function (n) {
                          var e = encodeURIComponent(Hn(n)) + a;
                          return Array.isArray(t[n])
                            ? t[n]
                                .map(function (n) {
                                  return e + encodeURIComponent(Hn(n));
                                })
                                .join(r)
                            : e + encodeURIComponent(Hn(t[n]));
                        })
                        .join(r)
                    : n
                    ? encodeURIComponent(Hn(n)) + a + encodeURIComponent(Hn(t))
                    : ''
                );
              },
              Zn = n(function (n, e) {
                (e.decode = e.parse = $n), (e.encode = e.stringify = Kn);
              }),
              Yn = (Zn.decode, Zn.parse, Zn.encode, Zn.stringify, '@adobe/reactor-'),
              Xn = {
                cookie: N,
                document: Qn,
                'load-script': zn,
                'object-assign': Dn,
                promise: un,
                'query-string': {
                  parse: function (n) {
                    return (
                      'string' == typeof n && (n = n.trim().replace(/^[?#&]/, '')), Zn.parse(n)
                    );
                  },
                  stringify: function (n) {
                    return Zn.stringify(n);
                  },
                },
                window: R,
              },
              ne = function (r) {
                return function (n) {
                  if (0 === n.indexOf(Yn)) {
                    var e = n.substr(Yn.length),
                      t = Xn[e];
                    if (t) return t;
                  }
                  if (0 === n.indexOf('./') || 0 === n.indexOf('../')) return r(n);
                  throw new Error('Cannot resolve module "' + n + '".');
                };
              },
              ee = function (n, o, s, c, u) {
                var l = n.extensions,
                  d = n.buildInfo,
                  f = n.property.settings;
                if (l) {
                  var p = Un(l, o);
                  Object.keys(l).forEach(function (r) {
                    var a = l[r],
                      n = Fn(c, a.settings);
                    if (a.modules) {
                      var e = I.createPrefixedLogger(a.displayName),
                        t = Vn(a.hostedLibFilesBaseUrl, d.minified),
                        i = {
                          buildInfo: d,
                          getDataElementValue: u,
                          getExtensionSettings: n,
                          getHostedLibFileUrl: t,
                          getSharedModule: p,
                          logger: e,
                          propertySettings: f,
                          replaceTokens: c,
                          onDebugChanged: s.onDebugChanged,
                          get debugEnabled () {
                            return s.getDebugEnabled();
                          },
                        };
                      Object.keys(a.modules).forEach(function (t) {
                        var n = a.modules[t],
                          e = ne(function (n) {
                            var e = Wn(t, n);
                            return o.getModuleExports(e);
                          });
                        o.registerModule(t, n, r, e, i);
                      });
                    }
                  }),
                    o.hydrateCache();
                }
                return o;
              },
              te = function (n, e, t, r, a) {
                var i = I.createPrefixedLogger('Custom Script');
                (n.track = function (n) {
                  I.log('"' + n + '" does not match any direct call identifiers.');
                }),
                  (n.getVisitorId = function () {
                    return null;
                  }),
                  (n.property = { name: e.property.name }),
                  (n.company = e.company),
                  (n.buildInfo = e.buildInfo),
                  (n.logger = i),
                  (n.notify = function (n, e) {
                    switch (
                      (I.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      e)
                    ) {
                      case 3:
                        i.info(n);
                        break;
                      case 4:
                        i.warn(n);
                        break;
                      case 5:
                        i.error(n);
                        break;
                      default:
                        i.log(n);
                    }
                  }),
                  (n.getVar = r),
                  (n.setVar = a),
                  (n.setCookie = function (n, e, t) {
                    var r = '',
                      a = {};
                    t && ((r = ', { expires: ' + t + ' }'), (a.expires = t));
                    var i =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      n +
                      '", "' +
                      e +
                      '"' +
                      r +
                      ').';
                    I.warn(i), N.set(n, e, a);
                  }),
                  (n.readCookie = function (n) {
                    return (
                      I.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          n +
                          '").'
                      ),
                      N.get(n)
                    );
                  }),
                  (n.removeCookie = function (n) {
                    I.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        n +
                        '").'
                    ),
                      N.remove(n);
                  }),
                  (n.cookie = N),
                  (n.pageBottom = function () {}),
                  (n.setDebug = t);
                var o = !1;
                Object.defineProperty(n, '_container', {
                  get: function () {
                    return (
                      o ||
                        (I.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (o = !0)),
                      e
                    );
                  },
                });
              },
              re = window._satellite;
            if (re && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var ae = re.container;
              delete re.container;
              var ie = ae.property.settings.undefinedVarsReturnEmpty,
                oe = ae.property.settings.ruleComponentSequencingEnabled,
                se = ae.dataElements || {};
              $.migrateCookieData(se);
              var ce,
                ue = function (n) {
                  return se[n];
                },
                le = tn(),
                de = K(
                  le,
                  ue,
                  function () {
                    return ce.apply(null, arguments);
                  },
                  ie
                ),
                fe = {},
                pe = sn(fe),
                ge = nn(fe, ue),
                me = X(fe, ue, de);
              ce = on(ge, me, ie);
              var ve = h(D('localStorage'), I);
              te(re, ae, ve.setDebugEnabled, me, pe), ee(ae, le, ve, ce, de);
              var he = an(re),
                be = w(le, ce),
                we = hn(le),
                ye = Cn(we, I, he),
                _e = _n(Tn, we, I, he),
                Ce = yn(Tn, we, I, he),
                ke = kn(I, he),
                Se = wn(
                  jn(
                    oe,
                    vn(mn(be, Ln, ye, _e), Sn(be, Ce, ke)),
                    pn(dn(be, An, Ln, _e, ye), ln(be, An, Ce), ke),
                    he
                  ),
                  be,
                  Mn,
                  Tn,
                  bn(le),
                  I
                );
              In(g, ae.rules || [], Se);
            }
            return re;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_ca1894c5f90b076a)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_ca1894c5f90b076a
          ));
      }
    })();
    _satellite = $___var_babeca36f6d15eb8;
  })();
}
