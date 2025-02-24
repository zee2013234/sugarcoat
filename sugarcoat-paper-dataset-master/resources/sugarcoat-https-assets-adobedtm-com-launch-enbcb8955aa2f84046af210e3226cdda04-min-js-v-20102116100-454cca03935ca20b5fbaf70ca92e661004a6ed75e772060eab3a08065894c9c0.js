var _satellite;
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
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-11-14T00:48:12Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {
          'Gear - All Pages': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return !!location.href.match(/gear\.xbox\.com\/?/gi);
              },
            },
          },
          'Bing Global Conditions': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                var e = location.pathname,
                  t = location.href;
                return (
                  !!e.match(/..\-..\/games\/(halo-wars-2|windows)\/?/gi) ||
                  !!t.match(/(www\.xbox\.com)\/[a-z]{2}-(us|ca|gb|fr)/gi) ||
                  !!t.match(/(xboxdesignlab\.xbox\.com)\/?/gi)
                );
              },
            },
          },
          Ensighten: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return null != window.Bootstrapper;
              },
            },
          },
          'JSLL Redtiger': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 0 < $('#primaryArea[data-m]').length;
              },
            },
          },
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
          'Retailer Page': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return !!location.href.match(/en-us\/xbox-one\/retailers\/?/gi);
              },
            },
          },
          'Some games pages': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return !!window.location.href.match(
                  /en-us\/games\/(sea-of-thieves|crackdown-3|playerunknowns-battlegrounds|forza-horizon-4)/gi
                );
              },
            },
          },
          'Host = www.xbox.com': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return 'www.xbox.com' == window.location.host;
              },
            },
          },
          'Xbox - All Pages': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return !(
                  !location.href.match(/(www\.xbox\.com)\/?/gi) &&
                  !location.href.match(/(xbox\.(cn|com)\/zh-cn)\/?/gi)
                );
              },
            },
          },
          'XDL - All Pages': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return !!location.href.match(/xboxdesignlab\.xbox\.com\/?/gi);
              },
            },
          },
          'Xbox and Gear - All Pages': {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return !!(
                  location.href.match(/(www\.xbox\.com)\/?/gi) ||
                  location.href.match(/(xbox\.(cn|com)\/zh-cn)\/?/gi) ||
                  location.href.match(/gear\.xbox\.com\/?/gi)
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
                  ('undefined' == typeof window.mscc && 'undefined' == typeof siteConsent) ||
                  ('undefined' != typeof window.mscc && 'undefined' == typeof siteConsent
                    ? !('function' == typeof window.mscc.hasConsent && !window.mscc.hasConsent())
                    : null !== window.siteConsent &&
                      'object' == typeof window.siteConsent &&
                      'function' == typeof window.siteConsent.getConsentFor &&
                      'object' == typeof WcpConsent.consentCategories
                    ? siteConsent.getConsentFor(WcpConsent.consentCategories.SocialMedia)
                    : void 0)
                );
              },
            },
          },
          SiteConsent_Advertising: {
            defaultValue: '',
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return (
                  ('undefined' == typeof window.mscc && 'undefined' == typeof siteConsent) ||
                  ('undefined' != typeof window.mscc && 'undefined' == typeof siteConsent
                    ? !('function' != typeof window.mscc.hasConsent || !window.mscc.hasConsent())
                    : null !== window.siteConsent &&
                      'function' == typeof window.siteConsent.getConsentFor &&
                      'object' == typeof WcpConsent.consentCategories
                    ? siteConsent.getConsentFor(WcpConsent.consentCategories.Advertising)
                    : void 0)
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
                  ('undefined' == typeof window.mscc && 'undefined' == typeof siteConsent) ||
                  ('undefined' != typeof window.mscc && 'undefined' == typeof siteConsent
                    ? !('function' != typeof window.mscc.hasConsent || !window.mscc.hasConsent())
                    : null !== window.siteConsent &&
                      'function' == typeof window.siteConsent.getConsentFor &&
                      'object' == typeof WcpConsent.consentCategories
                    ? siteConsent.getConsentFor(WcpConsent.consentCategories.Analytics)
                    : void 0)
                );
              },
            },
          },
          'Dreamscape page': {
            modulePath: 'core/src/lib/dataElements/customCode.js',
            settings: {
              source: function () {
                return !!window.location.href.match(
                  /dreamscape.xbox.com|appxboxcampaign2020-qa.azurewebsites.net/i
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
                script: function (e) {
                  'use strict';
                  e.exports = function (e) {
                    return e.source();
                  };
                },
              },
              'core/src/lib/events/domReady.js': {
                name: 'dom-ready',
                displayName: 'DOM Ready',
                script: function (e, t, n) {
                  'use strict';
                  var o = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    o.registerDomReadyTrigger(t);
                  };
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, t, n, o) {
                  'use strict';
                  var r,
                    s,
                    i,
                    a = n('@adobe/reactor-document'),
                    c = n('./helpers/decorateCode'),
                    u = n('./helpers/loadCodeSequentially'),
                    d = n('../../../node_modules/postscribe/dist/postscribe'),
                    l =
                      ((r = function (e) {
                        d(a.body, e, {
                          error: function (e) {
                            o.logger.error(e.msg);
                          },
                        });
                      }),
                      (s = []),
                      (i = function () {
                        if (a.body) for (; s.length; ) r(s.shift());
                        else setTimeout(i, 20);
                      }),
                      function (e) {
                        s.push(e), i();
                      }),
                    f = (function () {
                      if (a.currentScript) return a.currentScript.async;
                      for (var e = a.querySelectorAll('script'), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(n.src)) return n.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, t) {
                    var n = { settings: e, event: t },
                      o = n.settings.source;
                    if (o)
                      return n.settings.isExternal
                        ? u(o).then(function (e) {
                            e && l(c(n, e));
                          })
                        : void (f || 'loading' !== a.readyState
                            ? l(c(n, o))
                            : a.write
                            ? a.write(c(n, o))
                            : l(c(n, o)));
                  };
                },
              },
              'core/src/lib/conditions/valueComparison.js': {
                name: 'value-comparison',
                displayName: 'Value Comparison',
                script: function (e) {
                  'use strict';
                  var o = function (e) {
                      return 'number' == typeof e && isFinite(e);
                    },
                    r = function (e) {
                      return 'string' == typeof e || e instanceof String;
                    },
                    s = function (e, t) {
                      return t && r(e) ? e.toLowerCase() : e;
                    },
                    i = function (e) {
                      return o(e) ? String(e) : e;
                    },
                    a = function (e) {
                      return r(e) ? Number(e) : e;
                    },
                    t = function (o) {
                      return function (e, t, n) {
                        return (e = i(s(e, n))), (t = i(s(t, n))), r(e) && r(t) && o(e, t);
                      };
                    },
                    n = function (n) {
                      return function (e, t) {
                        return (e = a(e)), (t = a(t)), o(e) && o(t) && n(e, t);
                      };
                    },
                    c = {
                      equals: function (e, t, n) {
                        return s(e, n) == s(t, n);
                      },
                      doesNotEqual: function () {
                        return !c.equals.apply(null, arguments);
                      },
                      contains: t(function (e, t) {
                        return -1 !== e.indexOf(t);
                      }),
                      doesNotContain: function () {
                        return !c.contains.apply(null, arguments);
                      },
                      startsWith: t(function (e, t) {
                        return 0 === e.indexOf(t);
                      }),
                      doesNotStartWith: function () {
                        return !c.startsWith.apply(null, arguments);
                      },
                      endsWith: t(function (e, t) {
                        return e.substring(e.length - t.length, e.length) === t;
                      }),
                      doesNotEndWith: function () {
                        return !c.endsWith.apply(null, arguments);
                      },
                      matchesRegex: t(function (e, t, n) {
                        return new RegExp(t, n ? 'i' : '').test(e);
                      }),
                      doesNotMatchRegex: function () {
                        return !c.matchesRegex.apply(null, arguments);
                      },
                      lessThan: n(function (e, t) {
                        return e < t;
                      }),
                      lessThanOrEqual: n(function (e, t) {
                        return e <= t;
                      }),
                      greaterThan: n(function (e, t) {
                        return t < e;
                      }),
                      greaterThanOrEqual: n(function (e, t) {
                        return t <= e;
                      }),
                      isTrue: function (e) {
                        return !0 === e;
                      },
                      isTruthy: function (e) {
                        return Boolean(e);
                      },
                      isFalse: function (e) {
                        return !1 === e;
                      },
                      isFalsy: function (e) {
                        return !e;
                      },
                    };
                  e.exports = function (e) {
                    return c[e.comparison.operator](
                      e.leftOperand,
                      e.rightOperand,
                      Boolean(e.comparison.caseInsensitive)
                    );
                  };
                },
              },
              'core/src/lib/conditions/path.js': {
                name: 'path',
                displayName: 'Path Without Query String',
                script: function (e, t, n) {
                  'use strict';
                  var o = n('@adobe/reactor-document'),
                    r = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var n = o.location.pathname;
                    return e.paths.some(function (e) {
                      var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return r(n, t);
                    });
                  };
                },
              },
              'core/src/lib/conditions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e, t) {
                    return e.source.call(t.element, t, t.target);
                  };
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, t, n) {
                  const $___old_5cf5f0afe8b794be = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_5cf5f0afe8b794be)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_47c01efa79e9f191.appVersion
                      ));
                    return function () {
                      'use strict';
                      var o = n('@adobe/reactor-window'),
                        r = n('@adobe/reactor-document'),
                        s = -1 !== o.navigator.appVersion.indexOf('MSIE 10'),
                        i = 'WINDOW_LOADED',
                        a = 'DOM_READY',
                        c = 'PAGE_BOTTOM',
                        u = [c, a, i],
                        d = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        l = {};
                      u.forEach(function (e) {
                        l[e] = [];
                      });
                      var f = function (e, t) {
                          u.slice(0, m(e) + 1).forEach(function (e) {
                            h(t, e);
                          });
                        },
                        p = function () {
                          return 'complete' === r.readyState
                            ? i
                            : 'interactive' === r.readyState
                            ? s
                              ? null
                              : a
                            : void 0;
                        },
                        m = function (e) {
                          return u.indexOf(e);
                        },
                        h = function (t, e) {
                          l[e].forEach(function (e) {
                            g(t, e);
                          }),
                            (l[e] = []);
                        },
                        g = function (e, t) {
                          var n = t.trigger,
                            o = t.syntheticEventFn;
                          n(o ? o(e) : null);
                        };
                      (o._satellite = o._satellite || {}),
                        (o._satellite.pageBottom = f.bind(null, c)),
                        r.addEventListener('DOMContentLoaded', f.bind(null, a), !0),
                        o.addEventListener('load', f.bind(null, i), !0),
                        o.setTimeout(function () {
                          var e = p();
                          e && f(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            l[c].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            l[a].push({ trigger: e, syntheticEventFn: d.bind(null, r) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            l[i].push({ trigger: e, syntheticEventFn: d.bind(null, o) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_5cf5f0afe8b794be)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_5cf5f0afe8b794be
                      ));
                  }
                },
              },
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, t, n, o) {
                  'use strict';
                  var r = 0,
                    s = function (e) {
                      return e.settings.isExternal;
                    },
                    i = function (e, t) {
                      return '<script>\n' + t + '\n</script>';
                    },
                    a = function (t, e) {
                      var n = '__runScript' + ++r;
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
                        return e.settings.global ? i(e, t) : a(e, t);
                      },
                      html: function (e, t) {
                        return s(e) ? o.replaceTokens(t, e.event) : t;
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
                  var o = n('@adobe/reactor-promise'),
                    r = n('./getSourceByUrl'),
                    s = o.resolve();
                  e.exports = function (t) {
                    var e = new o(function (n) {
                      var e = r(t);
                      o.all([e, s]).then(function (e) {
                        var t = e[0];
                        n(t);
                      });
                    });
                    return (s = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (n, o) {
                  !(function r (e, t) {
                    'object' == typeof o && 'object' == typeof n
                      ? (n.exports = t())
                      : 'function' == typeof define && define.amd
                      ? define([], t)
                      : 'object' == typeof o
                      ? (o.postscribe = t())
                      : (e.postscribe = t());
                  })(this, function () {
                    return (function (n) {
                      function o (e) {
                        if (r[e]) return r[e].exports;
                        var t = (r[e] = { exports: {}, id: e, loaded: !1 });
                        return n[e].call(t.exports, t, t.exports, o), (t.loaded = !0), t.exports;
                      }
                      var r = {};
                      return (o.m = n), (o.c = r), (o.p = ''), o(0);
                    })([
                      function (e, t, n) {
                        'use strict';
                        function o (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var r = o(n(1));
                        e.exports = r['default'];
                      },
                      function (e, t, n) {
                        'use strict';
                        function o (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function u () {}
                        function d () {
                          var e = c.shift();
                          if (e) {
                            var t = i.last(e);
                            t.afterDequeue(),
                              (e.stream = s.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function s (e, t, o) {
                          function r (e) {
                            (e = o.beforeWrite(e)), h.write(e), o.afterWrite(e);
                          }
                          ((h = new p['default'](e, o)).id = m++),
                            (h.name = o.name || h.id),
                            (l.streams[h.name] = h);
                          var n = e.ownerDocument,
                            s = {
                              close: n.close,
                              open: n.open,
                              write: n.write,
                              writeln: n.writeln,
                            };
                          f(n, {
                            close: u,
                            open: u,
                            write: function a () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return r(t.join(''));
                            },
                            writeln: function c () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return r(t.join('') + '\n');
                            },
                          });
                          var i = h.win.onerror || u;
                          return (
                            (h.win.onerror = function (e, t, n) {
                              o.error({ msg: e + ' - ' + t + ': ' + n }),
                                i.apply(h.win, [e, t, n]);
                            }),
                            h.write(t, function () {
                              f(n, s), (h.win.onerror = i), o.done(), (h = null), d();
                            }),
                            h
                          );
                        }
                        function l (e, t, n) {
                          if (i.isFunction(n)) n = { done: n };
                          else if ('clear' === n) return (c = []), (h = null), void (m = 0);
                          n = i.defaults(n, a);
                          var o = [
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
                              cancel: function r () {
                                o.stream ? o.stream.abort() : (o[1] = u);
                              },
                            }),
                            n.beforeEnqueue(o),
                            c.push(o),
                            h || d(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var f =
                          Object.assign ||
                          function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var o in n)
                                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                            }
                            return e;
                          };
                        t['default'] = l;
                        var p = r(n(2)),
                          i = o(n(4)),
                          a = {
                            afterAsync: u,
                            afterDequeue: u,
                            afterStreamStart: u,
                            afterWrite: u,
                            autoFix: !0,
                            beforeEnqueue: u,
                            beforeWriteToken: function g (e) {
                              return e;
                            },
                            beforeWrite: function b (e) {
                              return e;
                            },
                            done: u,
                            error: function v (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          m = 0,
                          c = [],
                          h = null;
                        f(l, { streams: {}, queue: c, WriteStream: p['default'] });
                      },
                      function (e, t, n) {
                        'use strict';
                        function o (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function y (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function w (e, t) {
                          var n = T + t,
                            o = e.getAttribute(n);
                          return E.existy(o) ? String(o) : o;
                        }
                        function x (e, t, n) {
                          var o = 2 < arguments.length && n !== undefined ? arguments[2] : null,
                            r = T + t;
                          E.existy(o) && '' !== o ? e.setAttribute(r, o) : e.removeAttribute(r);
                        }
                        t.__esModule = !0;
                        var C =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var o in n)
                                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                              }
                              return e;
                            },
                          j = r(n(3)),
                          E = o(n(4)),
                          P = !1,
                          T = 'data-ps-',
                          R = 'ps-style',
                          _ = 'ps-script',
                          s = (function () {
                            function o (e, t) {
                              var n = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              y(this, o),
                                (this.root = e),
                                (this.options = n),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new j['default']('', { autoFix: n.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                x(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (o.prototype.write = function n () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var t = this.writeQueue.shift();
                                  E.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                }
                              }),
                              (o.prototype._callFunction = function r (e) {
                                var t = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(t),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(t);
                              }),
                              (o.prototype._writeImpl = function s (e) {
                                this.parser.append(e);
                                for (
                                  var t = void 0, n = void 0, o = void 0, r = [];
                                  (t = this.parser.readToken()) &&
                                  !(n = E.isScript(t)) &&
                                  !(o = E.isStyle(t));

                                )
                                  (t = this.options.beforeWriteToken(t)) && r.push(t);
                                0 < r.length && this._writeStaticTokens(r),
                                  n && this._handleScriptToken(t),
                                  o && this._handleStyleToken(t);
                              }),
                              (o.prototype._writeStaticTokens = function i (e) {
                                var t = this._buildChunk(e);
                                return t.actual
                                  ? ((t.html = this.proxyHistory + t.actual),
                                    (this.proxyHistory += t.proxy),
                                    (this.proxyRoot.innerHTML = t.html),
                                    P && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    P && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (o.prototype._buildChunk = function d (e) {
                                for (
                                  var t = this.actuals.length,
                                    n = [],
                                    o = [],
                                    r = [],
                                    s = e.length,
                                    i = 0;
                                  i < s;
                                  i++
                                ) {
                                  var a = e[i],
                                    c = a.toString();
                                  if ((n.push(c), a.attrs)) {
                                    if (!/^noscript$/i.test(a.tagName)) {
                                      var u = t++;
                                      o.push(c.replace(/(\/?>)/, ' ' + T + 'id=' + u + ' $1')),
                                        a.attrs.id !== _ &&
                                          a.attrs.id !== R &&
                                          r.push(
                                            'atomicTag' === a.type
                                              ? ''
                                              : '<' +
                                                  a.tagName +
                                                  ' ' +
                                                  T +
                                                  'proxyof=' +
                                                  u +
                                                  (a.unary ? ' />' : '>')
                                          );
                                    }
                                  } else o.push(c), r.push('endTag' === a.type ? c : '');
                                }
                                return {
                                  tokens: e,
                                  raw: n.join(''),
                                  actual: o.join(''),
                                  proxy: r.join(''),
                                };
                              }),
                              (o.prototype._walkChunk = function a () {
                                for (
                                  var e = void 0, t = [this.proxyRoot];
                                  E.existy((e = t.shift()));

                                ) {
                                  var n = 1 === e.nodeType;
                                  if (!n || !w(e, 'proxyof')) {
                                    n && x((this.actuals[w(e, 'id')] = e), 'id');
                                    var o = e.parentNode && w(e.parentNode, 'proxyof');
                                    o && this.actuals[o].appendChild(e);
                                  }
                                  t.unshift.apply(t, E.toArray(e.childNodes));
                                }
                              }),
                              (o.prototype._handleScriptToken = function c (e) {
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
                              (o.prototype._handleStyleToken = function u (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (o.prototype._writeStyleToken = function l (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, R),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (o.prototype._buildStyle = function t (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  n.setAttribute('type', e.type),
                                  E.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  n
                                );
                              }),
                              (o.prototype._insertCursor = function f (e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var n = this.doc.getElementById(t);
                                n && n.parentNode.replaceChild(e, n);
                              }),
                              (o.prototype._onScriptStart = function p (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (o.prototype._onScriptDone = function m (e) {
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
                              (o.prototype._writeScriptToken = function h (e, t) {
                                var n = this._buildScript(e),
                                  o = this._shouldRelease(n),
                                  r = this.options.afterAsync;
                                e.src &&
                                  ((n.src = e.src),
                                  this._scriptLoadHandler(
                                    n,
                                    o
                                      ? r
                                      : function () {
                                          t(), r();
                                        }
                                  ));
                                try {
                                  this._insertCursor(n, _), (n.src && !o) || t();
                                } catch (s) {
                                  this.options.error(s), t();
                                }
                              }),
                              (o.prototype._buildScript = function g (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  E.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  e.content && (n.text = e.content),
                                  n
                                );
                              }),
                              (o.prototype._scriptLoadHandler = function b (t, n) {
                                function o () {
                                  t = t.onload = t.onreadystatechange = t.onerror = null;
                                }
                                function r () {
                                  o(), null != n && n(), (n = null);
                                }
                                function s (e) {
                                  o(), i(e), null != n && n(), (n = null);
                                }
                                function e (e, t) {
                                  var n = e['on' + t];
                                  null != n && (e['_on' + t] = n);
                                }
                                var i = this.options.error;
                                e(t, 'load'),
                                  e(t, 'error'),
                                  C(t, {
                                    onload: function a () {
                                      if (t._onload)
                                        try {
                                          t._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          s({ msg: 'onload handler failed ' + e + ' @ ' + t.src });
                                        }
                                      r();
                                    },
                                    onerror: function c () {
                                      if (t._onerror)
                                        try {
                                          t._onerror.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          return void s({
                                            msg: 'onerror handler failed ' + e + ' @ ' + t.src,
                                          });
                                        }
                                      s({ msg: 'remote script failed ' + t.src });
                                    },
                                    onreadystatechange: function u () {
                                      /^(loaded|complete)$/.test(t.readyState) && r();
                                    },
                                  });
                              }),
                              (o.prototype._shouldRelease = function v (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              o
                            );
                          })();
                        t['default'] = s;
                      },
                      function (n) {
                        !(function o (e, t) {
                          n.exports = t();
                        })(0, function () {
                          return (function (n) {
                            function o (e) {
                              if (r[e]) return r[e].exports;
                              var t = (r[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                n[e].call(t.exports, t, t.exports, o), (t.loaded = !0), t.exports
                              );
                            }
                            var r = {};
                            return (o.m = n), (o.c = r), (o.p = ''), o(0);
                          })([
                            function (e, t, n) {
                              'use strict';
                              function o (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var r = o(n(1));
                              e.exports = r['default'];
                            },
                            function (e, t, n) {
                              'use strict';
                              function o (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function r (e) {
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
                              var l = r(n(2)),
                                f = r(n(3)),
                                p = o(n(6)),
                                s = n(5),
                                m = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                i = (function () {
                                  function c (e, t) {
                                    var n = this,
                                      o =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      r =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    d(this, c), (this.stream = o);
                                    var s = !1,
                                      i = {};
                                    for (var a in l)
                                      l.hasOwnProperty(a) &&
                                        (r.autoFix && (i[a + 'Fix'] = !0),
                                        (s = s || i[a + 'Fix']));
                                    s
                                      ? ((this._readToken = (0, p['default'])(
                                          this,
                                          i,
                                          function () {
                                            return n._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, p['default'])(this, i, function () {
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
                                    (c.prototype._readTokenImpl = function o () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (c.prototype._peekTokenImpl = function r () {
                                      for (var e in m)
                                        if (m.hasOwnProperty(e) && m[e].test(this.stream)) {
                                          var t = f[e](this.stream);
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
                                    (c.prototype.readToken = function s () {
                                      return this._readToken();
                                    }),
                                    (c.prototype.readTokens = function i (e) {
                                      for (var t = void 0; (t = this.readToken()); )
                                        if (e[t.type] && !1 === e[t.type](t)) return;
                                    }),
                                    (c.prototype.clear = function a () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (c.prototype.rest = function u () {
                                      return this.stream;
                                    }),
                                    c
                                  );
                                })();
                              for (var a in (((t['default'] = i).tokenToString = function (e) {
                                return e.toString();
                              }),
                              (i.escapeAttributes = function (e) {
                                var t = {};
                                for (var n in e)
                                  e.hasOwnProperty(n) && (t[n] = (0, s.escapeQuotes)(e[n], null));
                                return t;
                              }),
                              (i.supports = l)))
                                l.hasOwnProperty(a) &&
                                  (i.browserHasFlaw = i.browserHasFlaw || (!l[a] && a));
                            },
                            function (e, t) {
                              'use strict';
                              var n = !(t.__esModule = !0),
                                o = !1,
                                r = window.document.createElement('div');
                              try {
                                var s = '<P><I></P></I>';
                                (r.innerHTML = s), (t.tagSoup = n = r.innerHTML !== s);
                              } catch (i) {
                                t.tagSoup = n = !1;
                              }
                              try {
                                (r.innerHTML = '<P><i><P></P></i></P>'),
                                  (t.selfClose = o = 2 === r.childNodes.length);
                              } catch (i) {
                                t.selfClose = o = !1;
                              }
                              (r = null), (t.tagSoup = n), (t.selfClose = o);
                            },
                            function (e, t, n) {
                              'use strict';
                              function o (e) {
                                var t = e.indexOf('-->');
                                if (0 <= t) return new d.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function r (e) {
                                var t = e.indexOf('<');
                                return new d.CharsToken(0 <= t ? t : e.length);
                              }
                              function s (e) {
                                var i, a, c;
                                if (-1 !== e.indexOf('>')) {
                                  var t = e.match(l.startTag);
                                  if (t) {
                                    var n =
                                      ((i = {}),
                                      (a = {}),
                                      (c = t[2]),
                                      t[2].replace(l.attr, function (e, t, n, o, r, s) {
                                        n || o || r || s
                                          ? arguments[5]
                                            ? ((i[arguments[5]] = ''), (a[arguments[5]] = !0))
                                            : (i[t] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (l.fillAttr.test(t) && t) ||
                                                '')
                                          : (i[t] = ''),
                                          (c = c.replace(e, ''));
                                      }),
                                      {
                                        v: new d.StartTagToken(
                                          t[1],
                                          t[0].length,
                                          i,
                                          a,
                                          !!t[3],
                                          c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === n ? 'undefined' : u(n)))
                                      return n.v;
                                  }
                                }
                              }
                              function i (e) {
                                var t = s(e);
                                if (t) {
                                  var n = e.slice(t.length);
                                  if (n.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                    var o = n.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                    );
                                    if (o)
                                      return new d.AtomicTagToken(
                                        t.tagName,
                                        o[0].length + t.length,
                                        t.attrs,
                                        t.booleanAttrs,
                                        o[1]
                                      );
                                  }
                                }
                              }
                              function a (e) {
                                var t = e.match(l.endTag);
                                if (t) return new d.EndTagToken(t[1], t[0].length);
                              }
                              t.__esModule = !0;
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
                              (t.comment = o),
                                (t.chars = r),
                                (t.startTag = s),
                                (t.atomicTag = i),
                                (t.endTag = a);
                              var d = n(4),
                                l = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (e, t, n) {
                              'use strict';
                              function a (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (t.__esModule = !0),
                                (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined);
                              var c = n(5),
                                o = (t.Token = function o (e, t) {
                                  a(this, o), (this.type = e), (this.length = t), (this.text = '');
                                }),
                                r =
                                  ((t.CommentToken = (function () {
                                    function n (e, t) {
                                      a(this, n),
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
                                      a(this, t),
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
                                    function s (e, t, n, o, r) {
                                      a(this, s),
                                        (this.type = e),
                                        (this.length = n),
                                        (this.text = ''),
                                        (this.tagName = t),
                                        (this.attrs = o),
                                        (this.booleanAttrs = r),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (s.formatTag = function i (e, t) {
                                        var n =
                                            1 < arguments.length && t !== undefined
                                              ? arguments[1]
                                              : null,
                                          o = '<' + e.tagName;
                                        for (var r in e.attrs)
                                          if (e.attrs.hasOwnProperty(r)) {
                                            o += ' ' + r;
                                            var s = e.attrs[r];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[r]) ||
                                              (o += '="' + (0, c.escapeQuotes)(s) + '"');
                                          }
                                        return (
                                          e.rest && (o += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (o += '/>') : (o += '>'),
                                          n !== undefined &&
                                            null !== n &&
                                            (o += n + '</' + e.tagName + '>'),
                                          o
                                        );
                                      }),
                                      s
                                    );
                                  })()));
                              (t.StartTagToken = (function () {
                                function i (e, t, n, o, r, s) {
                                  a(this, i),
                                    (this.type = 'startTag'),
                                    (this.length = t),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = n),
                                    (this.booleanAttrs = o),
                                    (this.html5Unary = !1),
                                    (this.unary = r),
                                    (this.rest = s);
                                }
                                return (
                                  (i.prototype.toString = function e () {
                                    return r.formatTag(this);
                                  }),
                                  i
                                );
                              })()),
                                (t.AtomicTagToken = (function () {
                                  function s (e, t, n, o, r) {
                                    a(this, s),
                                      (this.type = 'atomicTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = n),
                                      (this.booleanAttrs = o),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = r);
                                  }
                                  return (
                                    (s.prototype.toString = function e () {
                                      return r.formatTag(this, this.content);
                                    }),
                                    s
                                  );
                                })()),
                                (t.EndTagToken = (function () {
                                  function n (e, t) {
                                    a(this, n),
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
                              function u (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = o.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function d (e, t) {
                                var n = e.stream,
                                  o = u(t());
                                return (e.stream = n), o;
                              }
                              function l (e, t) {
                                var n = t.pop();
                                e.prepend('</' + n.tagName + '>');
                              }
                              function f () {
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
                              function n (n, o, t) {
                                function r () {
                                  var e = d(n, t);
                                  e && i[e.type] && i[e.type](e);
                                }
                                var s = f(),
                                  i = {
                                    startTag: function a (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && s.lastTagNameEq('TABLE')
                                        ? (n.prepend('<TBODY>'), r())
                                        : o.selfCloseFix && p.test(t) && s.containsTagName(t)
                                        ? s.lastTagNameEq(t)
                                          ? l(n, s)
                                          : (n.prepend('</' + e.tagName + '>'), r())
                                        : e.unary || s.push(e);
                                    },
                                    endTag: function c (e) {
                                      s.last()
                                        ? o.tagSoupFix && !s.lastTagNameEq(e.tagName)
                                          ? l(n, s)
                                          : s.pop()
                                        : o.tagSoupFix && (t(), r());
                                    },
                                  };
                                return function e () {
                                  return r(), u(t());
                                };
                              }
                              (t.__esModule = !0), (t['default'] = n);
                              var o = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                p = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, t) {
                        'use strict';
                        function o (e) {
                          return null != e;
                        }
                        function n (e) {
                          return 'function' == typeof e;
                        }
                        function r (e, t, n) {
                          var o = void 0,
                            r = (e && e.length) || 0;
                          for (o = 0; o < r; o++) t.call(n, e[o], o);
                        }
                        function s (e, t, n) {
                          for (var o in e) e.hasOwnProperty(o) && t.call(n, o, e[o]);
                        }
                        function i (n, e) {
                          return (
                            (n = n || {}),
                            s(e, function (e, t) {
                              o(n[e]) || (n[e] = t);
                            }),
                            n
                          );
                        }
                        function a (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (o) {
                            var t =
                              ((n = []),
                              r(e, function (e) {
                                n.push(e);
                              }),
                              { v: n });
                            if ('object' === (void 0 === t ? 'undefined' : f(t))) return t.v;
                          }
                          var n;
                        }
                        function c (e) {
                          return e[e.length - 1];
                        }
                        function u (e, t) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(t)
                          );
                        }
                        function d (e) {
                          return u(e, 'script');
                        }
                        function l (e) {
                          return u(e, 'style');
                        }
                        t.__esModule = !0;
                        var f =
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
                        (t.existy = o),
                          (t.isFunction = n),
                          (t.each = r),
                          (t.eachKey = s),
                          (t.defaults = i),
                          (t.toArray = a),
                          (t.last = c),
                          (t.isTag = u),
                          (t.isScript = d),
                          (t.isStyle = l);
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, t, n) {
                  'use strict';
                  var o = n('@adobe/reactor-load-script'),
                    r = n('@adobe/reactor-promise'),
                    s = {},
                    i = {},
                    a = function (e) {
                      return i[e] || (i[e] = o(e)), i[e];
                    };
                  (_satellite.__registerScript = function (e, t) {
                    s[e] = t;
                  }),
                    (e.exports = function (t) {
                      return s[t]
                        ? r.resolve(s[t])
                        : new r(function (e) {
                            a(t).then(
                              function () {
                                e(s[t]);
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
              'https://assets.adobedtm.com/extensions/EP9f64ab5391d540b0bb8658a244bbeb36/',
          },
        },
        company: { orgId: 'EA76ADE95776D2EC7F000101@AdobeOrg' },
        property: {
          name: 'Xbox',
          settings: {
            domains: ['microsoft.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [
          {
            id: 'RL321fe05bd0424bb68e8edc810a0a345b',
            name: 'JSLL Video OnePlayer (using API)',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 60 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCc17a59b7b91644d889a1351d6aa1b24b-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL125ae123536c4907b8fdae6b1df6d8bb',
            name: 'Global Facebook XDL',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%XDL - All Pages%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC99f29df45bd74ed484fff51babd5c8ba-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL6108d0244ffd4cbf90e5d5df4eaa17e6',
            name: 'Page Postcard Campaign O-55',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 55 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%JSLL Redtiger%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC83ccc95ed5f8479a8622ed377613280e-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc7b0e40c248d43acacf60e37c99374cd',
            name: 'Temp DCM Console xbox-series-x',
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
                        '(en-us|en-gb|en-au|fr-fr|es-mx|de-de)\\/consoles\\/(xbox-series-x)\\/?$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '(en-us|en-gb|en-au|fr-fr)\\/xbox-all-access\\/?$',
                      valueIsRegex: !0,
                    },
                    { value: '(en-us|en-gb)\\/xbox-all-access\\/upgrade\\/?$', valueIsRegex: !0 },
                  ],
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC81e69743056847b2aa08a12d4988a679-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL195d7865c8d642cfb91fc6559e89fffa',
            name: 'JSLL RT Xbox',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%JSLL Redtiger%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%Xbox - All Pages%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCfea271bfac02467da5f1fa7595d687fb-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL286149abee08489abd87734256c65a48',
            name: 'Temp DCM Console xbox-series-s',
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
                        '(en-us|en-gb|en-au|fr-fr|es-mx|de-de)\\/consoles\\/xbox-series-s\\/?$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '(en-us|en-gb|en-au|fr-fr|de-de|es-mx)\\/consoles\\/?$',
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
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC5208978270674f30a36a51c613b70003-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL22a63e85b0034e7396a9276542a19682',
            name: 'Dreamscape JSLL',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%Dreamscape page%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCb6c762cfeac74c1283926a18dc77d418-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb6982909e8c940c89d8f4bf09d862514',
            name: 'Dreamscape JSLL Pageview',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 3 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%Dreamscape page%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC01eb2152d1d2457bbed233ef852f79f6-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLdc1872867e404bbbb116978afaed6dfe',
            name: 'Global JSLL',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%JSLL Redtiger%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCd2b7cb640409409680e79326e179f4a8-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCc9ffb998f79947fa9fd177f1dae569ed-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC9c3b6dc555624df79135c5e32aa4c405-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC84f36e69251c425f93b7a2be95f9a949-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC656a8a685b7f40599a28f4a19ef6f163-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC50004a41599a4db6ba35d2d0c257b59e-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC1d7a65ded55e4e9697a1bd236d55c584-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCfda7efa1db314ff688ecd08b08d1c0c6-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCac40a4d5e3d241c49dddee283cd75cee-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCde01dff205a04ec6a5284f6d1df44bb6-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL77aa61b2bab7405088e030d50ec89d6b',
            name: 'Global DCM XDL',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%XDL - All Pages%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCd86a3033243d4d37b10faf9276c603d8-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5f4faef3ac544b9fbe363b7356f45144',
            name: 'Global DCM Xbox',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 55 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%Xbox and Gear - All Pages%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCfd46e863449c4326b49b6f8f0201afc1-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL5168a4d12ab74c01aad5a58a1b88216c',
            name: 'Temp DCM Platform Awareness ',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%Host = www.xbox.com%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: {
                  paths: [
                    {
                      value:
                        '\\/(en-US|en-GB|en-AU|pt-BR|es-MX|de-de|fr-fr)\\/xbox-all-access\\/?$',
                      valueIsRegex: !0,
                    },
                    {
                      value: '\\/(en-US|en-GB|en-AU|pt-BR|es-MX|de-de|fr-fr)\\/consoles',
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
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC567d165863d74b93a70fefa94792b501-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL8508ccf97e234b89abb4043d03171801',
            name: 'Global Datalayer',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 2 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCa71ae4490d6e4caa919bebcd266a08cb-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL23a9c7a067e3475d91b2dc077072322a',
            name: 'Temp DCM Gamepass',
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
                        '(en-gb|en-us|pt-br|es-MX|fr-fr|de-de|en-ca|en-au|fr-ca)\\/xbox-game-pass',
                      valueIsRegex: !0,
                    },
                    { value: '(en-us|en-gb|pt-br|es-MX|fr-fr|de-de)\\/?$', valueIsRegex: !0 },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return 'www.xbox.com' == window.location.host;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCa54691479cfd480e8966b36c0e24cb24-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL7e268452b38d42e6b2de2ea9897742ea',
            name: 'Multi Clicktale Xbox (en-us)',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '\\/en-us\\/?', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%Xbox - All Pages%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC5acd65d782564b14b5a99193aee849ea-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL9e159d5edc96489fafe7767027e38a99',
            name: 'Global Xbox Framework',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 1 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC921754e9394147fcbaf63e6306ca560c-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLdfd4f579e40948a88eecd9e521993676',
            name: 'Global Comscore Xbox All Pages (en-us, en-gb)',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isFalse' },
                  leftOperand: '%Gear - All Pages%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '\\/en-(us|gb)\\/?', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC568e247f3bc34228a576df85c9abafaa-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL8e513a0cdeb942509107c366ca701bf1',
            name: 'Global Facebook Xbox',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 55 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%Xbox and Gear - All Pages%',
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCff3b108562df43d6ad12cfb6aac1c005-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb071ff123cde47b6b5295acfab4c18a0',
            name: 'JSLL Custom RT - Gear Xbox',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: {
                  comparison: { operator: 'isTrue' },
                  leftOperand: '%Gear - All Pages%',
                },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%JSLL Redtiger%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCb4cf7565036148f69a613310b1430dd7-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCe0428e0a7d3448f4abf094f03b8bd007-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb204f11c58294cc8954a8eb84de58bc8',
            name: 'Global JSLL RT - XDL',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%JSLL Redtiger%' },
              },
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isTrue' }, leftOperand: '%XDL - All Pages%' },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RCf6fe34543cec4b818dce5b147ae74ebf-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf7dec1a9b76c4c4fbb21832f6408683d',
            name: 'JSLL Year In Review 2018',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '/live/year-in-review', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC1bb26b5778294f9bb71b9005905e8712-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL0c428f30228247d983ef6435e5bb11f2',
            name: 'Temp JSLL Sticky Bar',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 51 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/valueComparison.js',
                settings: { comparison: { operator: 'isFalse' }, leftOperand: '%JSLL Redtiger%' },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '\\/games\\/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC2d0dccf6dbc04c2f98e885a001c92603-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb414f0c7640a492e986260e6775310f4',
            name: 'Temp DCM Gold Live Upgrade',
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
                        '\\/(en-us|en-gb|en-au|en-ca|fr-ca|fr-fr|es-mx|de-de|pt-br)\\/live\\/gold\\/upgrade\\/?$',
                      valueIsRegex: !0,
                    },
                  ],
                },
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return 'www.xbox.com' == window.location.host;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC3048fb5771e54a8aa66664b718c52a2d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLc6a38a4f30644327af145a5c182c4b7c',
            name: 'Temp DCM Games',
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
                        '\\/(en-gb|en-us|pt-br|es-MX|fr-fr|de-de|en-au|en-ca|fr-ca)\\/games\\/(battletoads|grounded|halo-the-master-chief-collection-pc|microsoft-flight-simulator|minecraft-dungeons|tell-me-why|wasteland-3)',
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
                    'https://assets.adobedtm.com/5ef092d1efb5/80899f83bd8d/281a2cd598fb/RC53914eb2091842ee8be261ea1518db42-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
        ],
      });
    var $___var_1f54f8dcf814c059 = (function () {
      const $___old_3010dd1b7fd434a5 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_3010dd1b7fd434a5)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_47c01efa79e9f191.userAgent
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
          function u (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function o () {}
          function r (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function s (e) {
            if (!(this instanceof s)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              f(e, this);
          }
          function i (o, r) {
            for (; 3 === o._state; ) o = o._value;
            0 !== o._state
              ? ((o._handled = !0),
                s._immediateFn(function () {
                  var e = 1 === o._state ? r.onFulfilled : r.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(o._value);
                    } catch (n) {
                      return void c(r.promise, n);
                    }
                    a(r.promise, t);
                  } else (1 === o._state ? a : c)(r.promise, o._value);
                }))
              : o._deferreds.push(r);
          }
          function a (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var n = t.then;
                if (t instanceof s) return (e._state = 3), (e._value = t), void d(e);
                if ('function' == typeof n) return void f(r(n, t), e);
              }
              (e._state = 1), (e._value = t), d(e);
            } catch (o) {
              c(e, o);
            }
          }
          function c (e, t) {
            (e._state = 2), (e._value = t), d(e);
          }
          function d (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              s._immediateFn(function () {
                e._handled || s._unhandledRejectionFn(e._value);
              });
            for (var t = 0, n = e._deferreds.length; t < n; t++) i(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function l (e, t, n) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof t ? t : null),
              (this.promise = n);
          }
          function f (e, t) {
            var n = !1;
            try {
              e(
                function (e) {
                  n || ((n = !0), a(t, e));
                },
                function (e) {
                  n || ((n = !0), c(t, e));
                }
              );
            } catch (o) {
              if (n) return;
              (n = !0), c(t, o);
            }
          }
          function p (e) {
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
              var o = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  o[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, o)).join('')
              );
            } catch (r) {
              return !1;
            }
          }
          function h (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var m = function (e) {
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
              g = 'debug',
              b = function (t, e) {
                var n = function () {
                    return 'true' === t.getItem(g);
                  },
                  o = function (e) {
                    t.setItem(g, e);
                  },
                  r = [],
                  s = function (e) {
                    r.push(e);
                  };
                return (
                  (e.outputEnabled = n()),
                  {
                    onDebugChanged: s,
                    getDebugEnabled: n,
                    setDebugEnabled: function (t) {
                      n() !== t &&
                        (o(t),
                        (e.outputEnabled = t),
                        r.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              v = 'Module did not export a function.',
              y = function (s, i) {
                return function (e, t, n) {
                  n = n || [];
                  var o = s.getModuleExports(e.modulePath);
                  if ('function' != typeof o) throw new Error(v);
                  var r = i(e.settings || {}, t);
                  return o.bind(null, r).apply(null, n);
                };
              },
              w = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              x = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              C = '\uD83D\uDE80',
              j =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : C,
              E = !1,
              P = function (e) {
                if (E && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(j),
                    e !== x.DEBUG || window.console[e] || (e = x.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              T = P.bind(null, x.LOG),
              R = P.bind(null, x.INFO),
              _ = P.bind(null, x.DEBUG),
              S = P.bind(null, x.WARN),
              O = P.bind(null, x.ERROR),
              k = {
                log: T,
                info: R,
                debug: _,
                warn: S,
                error: O,
                get outputEnabled () {
                  return E;
                },
                set outputEnabled (e) {
                  E = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: T.bind(null, t),
                    info: R.bind(null, t),
                    debug: _.bind(null, t),
                    warn: S.bind(null, t),
                    error: O.bind(null, t),
                  };
                },
              },
              A = e(function (o) {
                !(function (e) {
                  if (((o.exports = e()), !!0)) {
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
                      for (var o in n) t[o] = n[o];
                    }
                    return t;
                  }
                  function d (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (u) {
                    function a () {}
                    function n (e, t, n) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (n = c({ path: '/' }, a.defaults, n)).expires &&
                          (n.expires = new Date(1 * new Date() + 86400000 * n.expires)),
                          (n.expires = n.expires ? n.expires.toUTCString() : '');
                        try {
                          var o = JSON.stringify(t);
                          /^[\{\[]/.test(o) && (t = o);
                        } catch (i) {}
                        (t = u.write
                          ? u.write(t, e)
                          : encodeURIComponent(String(t)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var r = '';
                        for (var s in n)
                          n[s] &&
                            ((r += '; ' + s), !0 !== n[s] && (r += '=' + n[s].split(';')[0]));
                        return (document.cookie = e + '=' + t + r);
                      }
                    }
                    function t (e, t) {
                      if ('undefined' != typeof document) {
                        for (
                          var n = {},
                            o = document.cookie ? document.cookie.split('; ') : [],
                            r = 0;
                          r < o.length;
                          r++
                        ) {
                          var s = o[r].split('='),
                            i = s.slice(1).join('=');
                          t || '"' !== i.charAt(0) || (i = i.slice(1, -1));
                          try {
                            var a = d(s[0]);
                            if (((i = (u.read || u)(i, a) || d(i)), t))
                              try {
                                i = JSON.parse(i);
                              } catch (c) {}
                            if (((n[a] = i), e === a)) break;
                          } catch (c) {}
                        }
                        return e ? n[e] : n;
                      }
                    }
                    return (
                      (a.set = n),
                      (a.get = function (e) {
                        return t(e, !1);
                      }),
                      (a.getJSON = function (e) {
                        return t(e, !0);
                      }),
                      (a.remove = function (e, t) {
                        n(e, '', c(t, { expires: -1 }));
                      }),
                      (a.defaults = {}),
                      (a.withConverter = e),
                      a
                    );
                  }
                  return e(function () {});
                });
              }),
              L = { get: A.get, set: A.set, remove: A.remove },
              I = window,
              N = 'com.adobe.reactor.',
              D = function (o, e) {
                var r = N + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_7245ecab33e8542c = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_7245ecab33e8542c)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return I[o].getItem(r + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_7245ecab33e8542c)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_7245ecab33e8542c
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_8020d8b3f04eefd1 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_8020d8b3f04eefd1)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_b317e19f866a2da7.localStorage
                        ));
                      return function () {
                        try {
                          return I[o].setItem(r + e, t), !0;
                        } catch (n) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_8020d8b3f04eefd1)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_8020d8b3f04eefd1
                        ));
                    }
                  },
                };
              },
              M = '_sdsat_',
              F = 'dataElements.',
              B = 'dataElementCookiesMigrated',
              U = D('localStorage'),
              V = D('sessionStorage', F),
              G = D('localStorage', F),
              W = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              q = {},
              X = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (n) {}
                return t;
              },
              $ = function (e, t, n) {
                var o;
                switch (t) {
                  case W.PAGEVIEW:
                    return void (q[e] = n);
                  case W.SESSION:
                    return void ((o = X(n)) && V.setItem(e, o));
                  case W.VISITOR:
                    return void ((o = X(n)) && G.setItem(e, o));
                }
              },
              J = function (e, t) {
                var n = L.get(M + e);
                n !== undefined && $(e, t, n);
              },
              H = {
                setValue: $,
                getValue: function (e, t) {
                  var n;
                  switch (t) {
                    case W.PAGEVIEW:
                      return q.hasOwnProperty(e) ? q[e] : null;
                    case W.SESSION:
                      return null === (n = V.getItem(e)) ? n : JSON.parse(n);
                    case W.VISITOR:
                      return null === (n = G.getItem(e)) ? n : JSON.parse(n);
                  }
                },
                migrateCookieData: function (t) {
                  U.getItem(B) ||
                    (Object.keys(t).forEach(function (e) {
                      J(e, t[e].storageDuration);
                    }),
                    U.setItem(B, !0));
                },
              },
              z = function (e, t, n, o) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  n +
                  (o ? '\n' + o : '')
                );
              },
              Q = function (a, c, u, d) {
                return function (e, t) {
                  var n = c(e);
                  if (!n) return d ? '' : undefined;
                  var o,
                    r = n.storageDuration;
                  try {
                    o = a.getModuleExports(n.modulePath);
                  } catch (i) {
                    return void k.error(z(n, e, i.message, i.stack));
                  }
                  if ('function' == typeof o) {
                    var s;
                    try {
                      s = o(u(n.settings, t), t);
                    } catch (i) {
                      return void k.error(z(n, e, i.message, i.stack));
                    }
                    return (
                      r && (null != s ? H.setValue(e, r, s) : (s = H.getValue(e, r))),
                      null == s && null != n.defaultValue && (s = n.defaultValue),
                      'string' == typeof s &&
                        (n.cleanText && (s = w(s)), n.forceLowerCase && (s = s.toLowerCase())),
                      s
                    );
                  }
                  k.error(z(n, e, 'Module did not export a function.'));
                };
              },
              Z = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return w(e.textContent);
                },
              },
              K = function (e, t, n) {
                for (var o, r = e, s = 0, i = t.length; s < i; s++) {
                  if (null == r) return undefined;
                  var a = t[s];
                  if (n && '@' === a.charAt(0)) {
                    var c = a.slice(1);
                    r = Z[c](r);
                  } else if (r.getAttribute && (o = a.match(/^getAttribute\((.+)\)$/))) {
                    var u = o[1];
                    r = r.getAttribute(u);
                  } else r = r[a];
                }
                return r;
              },
              Y = function (s, i, a) {
                return function (e, t) {
                  var n;
                  if (i(e)) n = a(e, t);
                  else {
                    var o = e.split('.'),
                      r = o.shift();
                    'this' === r
                      ? t && (n = K(t.element, o, !0))
                      : 'event' === r
                      ? t && (n = K(t, o))
                      : 'target' === r
                      ? t && (n = K(t.target, o))
                      : (n = K(s[r], o));
                  }
                  return n;
                };
              },
              ee = function (n, o) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    o(e) || 'this' === t || 'event' === t || 'target' === t || n.hasOwnProperty(t)
                  );
                };
              },
              te = function (e, t, n) {
                var o = { exports: {} };
                return e.call(o.exports, o, o.exports, t, n), o.exports;
              },
              ne = function () {
                var i = {},
                  n = function (e) {
                    var t = i[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(i).forEach(function (e) {
                      try {
                        o(e);
                      } catch (n) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          n.message +
                          (n.stack ? '\n' + n.stack : '');
                        k.error(t);
                      }
                    });
                  },
                  o = function (e) {
                    var t = n(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = te(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, n, o, r) {
                    var s = { definition: t, extensionName: n, require: o, turbine: r };
                    (s.require = o), (i[e] = s);
                  },
                  hydrateCache: e,
                  getModuleExports: o,
                  getModuleDefinition: function (e) {
                    return n(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return n(e).extensionName;
                  },
                };
              },
              oe = !1,
              re = function (o) {
                return function (t, n) {
                  var e = o._monitors;
                  e &&
                    (oe ||
                      (k.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (oe = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](n);
                    }));
                };
              },
              se = function (r, s, i) {
                var n,
                  o,
                  a,
                  c,
                  u = [],
                  d = function (e, t, n) {
                    if (!r(t)) return e;
                    u.push(t);
                    var o = s(t, n);
                    return u.pop(), null == o && i ? '' : o;
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
                  (o = function (e, t) {
                    for (var n = {}, o = Object.keys(e), r = 0; r < o.length; r++) {
                      var s = o[r],
                        i = e[s];
                      n[s] = c(i, t);
                    }
                    return n;
                  }),
                  (a = function (e, t) {
                    for (var n = [], o = 0, r = e.length; o < r; o++) n.push(c(e[o], t));
                    return n;
                  }),
                  (c = function (e, t) {
                    return 'string' == typeof e
                      ? n(e, t)
                      : Array.isArray(e)
                      ? a(e, t)
                      : 'object' == typeof e && null !== e
                      ? o(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < u.length
                      ? (k.error('Data element circular reference detected: ' + u.join(' -> ')), e)
                      : c(e, t);
                  }
                );
              },
              ie = function (r) {
                return function (e, t) {
                  if ('string' == typeof e) r[arguments[0]] = t;
                  else if (arguments[0]) {
                    var n = arguments[0];
                    for (var o in n) r[o] = n[o];
                  }
                };
              },
              ae = setTimeout;
            (s.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (s.prototype.then = function (e, t) {
                var n = new this.constructor(o);
                return i(this, new l(e, t, n)), n;
              }),
              (s.prototype['finally'] = t),
              (s.all = function (t) {
                return new s(function (r, s) {
                  function i (t, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var n = e.then;
                        if ('function' == typeof n)
                          return void n.call(
                            e,
                            function (e) {
                              i(t, e);
                            },
                            s
                          );
                      }
                      (a[t] = e), 0 == --c && r(a);
                    } catch (o) {
                      s(o);
                    }
                  }
                  if (!u(t)) return s(new TypeError('Promise.all accepts an array'));
                  var a = Array.prototype.slice.call(t);
                  if (0 === a.length) return r([]);
                  for (var c = a.length, e = 0; e < a.length; e++) i(e, a[e]);
                });
              }),
              (s.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === s
                  ? t
                  : new s(function (e) {
                      e(t);
                    });
              }),
              (s.reject = function (n) {
                return new s(function (e, t) {
                  t(n);
                });
              }),
              (s.race = function (r) {
                return new s(function (e, t) {
                  if (!u(r)) return t(new TypeError('Promise.race accepts an array'));
                  for (var n = 0, o = r.length; n < o; n++) s.resolve(r[n]).then(e, t);
                });
              }),
              (s._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  ae(e, 0);
                }),
              (s._unhandledRejectionFn = function Et (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ce = window.Promise || s['default'] || s,
              ue = function (u, n, o) {
                return function (a, t, c, e) {
                  return e.then(function () {
                    var s,
                      i = a.delayNext;
                    return new ce(function (e, t) {
                      var n = u(a, c, [c]);
                      if (!i) return e();
                      var o = a.timeout,
                        r = new ce(function (e, t) {
                          s = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  o / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, o);
                        });
                      ce.race([n, r]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(s), (e = n(e)), o(a, t, e), ce.reject(e);
                      })
                      .then(function () {
                        clearTimeout(s);
                      });
                  });
                };
              },
              de = function (c, n, o, r, u) {
                return function (i, t, a, e) {
                  return e.then(function () {
                    var s;
                    return new ce(function (e, t) {
                      var n = c(i, a, [a]),
                        o = i.timeout,
                        r = new ce(function (e, t) {
                          s = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  o / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, o);
                        });
                      ce.race([n, r]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(s), (e = n(e)), r(i, t, e), ce.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(s), !o(i, e))) return u(i, t), ce.reject();
                      });
                  });
                };
              },
              le = ce.resolve(),
              fe = function (o, r, e) {
                return function (t, n) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        le = o(e, t, n, le);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        le = r(e, t, n, le);
                      }),
                    (le = (le = le.then(function () {
                      e(t);
                    }))['catch'](function () {}))
                  );
                };
              },
              pe = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              me = function (i, a, c, u) {
                return function (e, t) {
                  var n;
                  if (e.conditions)
                    for (var o = 0; o < e.conditions.length; o++) {
                      n = e.conditions[o];
                      try {
                        var r = i(n, t, [t]);
                        if (pe(r))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!a(n, r)) return c(n, e), !1;
                      } catch (s) {
                        return u(n, e, s), !1;
                      }
                    }
                  return !0;
                };
              },
              he = function (n, o) {
                return function (e, t) {
                  n(e, t) && o(e, t);
                };
              },
              ge = function (n) {
                return function (e) {
                  var t = n.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              be = function (r) {
                return function (e) {
                  var t = e.rule,
                    n = e.event,
                    o = r.getModuleDefinition(n.modulePath).name;
                  return {
                    $type: r.getModuleExtensionName(n.modulePath) + '.' + o,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              ve = function (a, c, u, d, l, f) {
                return function (n, e) {
                  var o = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var r = l(e);
                    c(t, null, [
                      function s (e) {
                        var t = u(r, e);
                        n(function () {
                          a(t, o);
                        });
                      },
                    ]);
                  } catch (i) {
                    f.error(d(t, o, i));
                  }
                };
              },
              ye = function (r, s, i, a) {
                return function (e, t, n) {
                  var o = s(e);
                  i.error(r(o, t.name, n)), a('ruleActionFailed', { rule: t, action: e });
                };
              },
              we = function (r, s, i, a) {
                return function (e, t, n) {
                  var o = s(e);
                  i.error(r(o, t.name, n)), a('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              xe = function (o, r, s) {
                return function (e, t) {
                  var n = o(e);
                  r.log('Condition "' + n + '" for rule "' + t.name + '" was not met.'),
                    s('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              Ce = function (t, n) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), n('ruleCompleted', { rule: e });
                };
              },
              je = function (s, i, a) {
                return function (e, t) {
                  var n;
                  if (e.actions)
                    for (var o = 0; o < e.actions.length; o++) {
                      n = e.actions[o];
                      try {
                        s(n, t, [t]);
                      } catch (r) {
                        return void i(n, e, r);
                      }
                    }
                  a(e);
                };
              },
              Ee = function (n, o, r, s) {
                return function (e, t) {
                  s('ruleTriggered', { rule: t }), n ? r(t, e) : o(t, e);
                };
              },
              Pe = function (e, t, n) {
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
              Te = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              Re = [],
              _e = !1,
              Se = function (e) {
                _e ? e() : Re.push(e);
              },
              Oe = function (e, t, n) {
                e(t).forEach(function (e) {
                  n(Se, e);
                }),
                  (_e = !0),
                  Re.forEach(function (e) {
                    e();
                  }),
                  (Re = []);
              },
              ke = function (e) {
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
              Ae = Object.getOwnPropertySymbols,
              Le = Object.prototype.hasOwnProperty,
              Ie = Object.prototype.propertyIsEnumerable,
              Ne = n()
                ? Object.assign
                : function (e) {
                    for (var t, n, o = p(e), r = 1; r < arguments.length; r++) {
                      for (var s in (t = Object(arguments[r]))) Le.call(t, s) && (o[s] = t[s]);
                      if (Ae) {
                        n = Ae(t);
                        for (var i = 0; i < n.length; i++) Ie.call(t, n[i]) && (o[n[i]] = t[n[i]]);
                      }
                    }
                    return o;
                  },
              De = function (e, t) {
                return (
                  Ne((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          k.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Me = function (c, u) {
                return function (e, t) {
                  var n = c[e];
                  if (n) {
                    var o = n.modules;
                    if (o)
                      for (var r = Object.keys(o), s = 0; s < r.length; s++) {
                        var i = r[s],
                          a = o[i];
                        if (a.shared && a.name === t) return u.getModuleExports(i);
                      }
                  }
                };
              },
              Fe = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Be = function (n, o) {
                return function (e) {
                  if (o) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return n + e;
                };
              },
              Ue = '.js',
              Ve = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              Ge = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              We = function (e, t) {
                Ge(t, Ue) || (t += Ue);
                var n = t.split('/'),
                  o = Ve(e).split('/');
                return (
                  n.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? o.length && o.pop() : o.push(e));
                  }),
                  o.join('/')
                );
              },
              qe = document,
              Xe = function (n, o) {
                return new ce(function (e, t) {
                  (o.onload = function () {
                    e(o);
                  }),
                    (o.onerror = function () {
                      t(new Error('Failed to load script ' + n));
                    });
                });
              },
              $e = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var n = Xe(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), n;
              },
              Je = function (e, t, n, o) {
                (t = t || '&'), (n = n || '=');
                var r = {};
                if ('string' != typeof e || 0 === e.length) return r;
                var s = /\+/g;
                e = e.split(t);
                var i = 1000;
                o && 'number' == typeof o.maxKeys && (i = o.maxKeys);
                var a = e.length;
                0 < i && i < a && (a = i);
                for (var c = 0; c < a; ++c) {
                  var u,
                    d,
                    l,
                    f,
                    p = e[c].replace(s, '%20'),
                    m = p.indexOf(n);
                  0 <= m ? ((u = p.substr(0, m)), (d = p.substr(m + 1))) : ((u = p), (d = '')),
                    (l = decodeURIComponent(u)),
                    (f = decodeURIComponent(d)),
                    h(r, l)
                      ? Array.isArray(r[l])
                        ? r[l].push(f)
                        : (r[l] = [r[l], f])
                      : (r[l] = f);
                }
                return r;
              },
              He = function (e) {
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
              ze = function (n, o, r, e) {
                return (
                  (o = o || '&'),
                  (r = r || '='),
                  null === n && (n = undefined),
                  'object' == typeof n
                    ? Object.keys(n)
                        .map(function (e) {
                          var t = encodeURIComponent(He(e)) + r;
                          return Array.isArray(n[e])
                            ? n[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(He(e));
                                })
                                .join(o)
                            : t + encodeURIComponent(He(n[e]));
                        })
                        .join(o)
                    : e
                    ? encodeURIComponent(He(e)) + r + encodeURIComponent(He(n))
                    : ''
                );
              },
              Qe = e(function (e, t) {
                (t.decode = t.parse = Je), (t.encode = t.stringify = ze);
              }),
              Ze = (Qe.decode, Qe.parse, Qe.encode, Qe.stringify, '@adobe/reactor-'),
              Ke = {
                cookie: L,
                document: qe,
                'load-script': $e,
                'object-assign': Ne,
                promise: ce,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), Qe.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return Qe.stringify(e);
                  },
                },
                window: I,
              },
              Ye = function (o) {
                return function (e) {
                  if (0 === e.indexOf(Ze)) {
                    var t = e.substr(Ze.length),
                      n = Ke[t];
                    if (n) return n;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return o(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, i, a, c, u) {
                var d = e.extensions,
                  l = e.buildInfo,
                  f = e.property.settings;
                if (d) {
                  var p = Me(d, i);
                  Object.keys(d).forEach(function (o) {
                    var r = d[o],
                      e = Fe(c, r.settings);
                    if (r.modules) {
                      var t = k.createPrefixedLogger(r.displayName),
                        n = Be(r.hostedLibFilesBaseUrl, l.minified),
                        s = {
                          buildInfo: l,
                          getDataElementValue: u,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: n,
                          getSharedModule: p,
                          logger: t,
                          propertySettings: f,
                          replaceTokens: c,
                          onDebugChanged: a.onDebugChanged,
                          get debugEnabled () {
                            return a.getDebugEnabled();
                          },
                        };
                      Object.keys(r.modules).forEach(function (n) {
                        var e = r.modules[n],
                          t = Ye(function (e) {
                            var t = We(n, e);
                            return i.getModuleExports(t);
                          });
                        i.registerModule(n, e, o, t, s);
                      });
                    }
                  }),
                    i.hydrateCache();
                }
                return i;
              },
              tt = function (e, t, n, o, r) {
                var s = k.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  k.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: t.property.name }),
                  (e.company = t.company),
                  (e.buildInfo = t.buildInfo),
                  (e.logger = s),
                  (e.notify = function (e, t) {
                    switch (
                      (k.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      t)
                    ) {
                      case 3:
                        s.info(e);
                        break;
                      case 4:
                        s.warn(e);
                        break;
                      case 5:
                        s.error(e);
                        break;
                      default:
                        s.log(e);
                    }
                  }),
                  (e.getVar = o),
                  (e.setVar = r),
                  (e.setCookie = function (e, t, n) {
                    var o = '',
                      r = {};
                    n && ((o = ', { expires: ' + n + ' }'), (r.expires = n));
                    var s =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      o +
                      ').';
                    k.warn(s), L.set(e, t, r);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      k.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      L.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    k.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      L.remove(e);
                  }),
                  (e.cookie = L),
                  (e.pageBottom = function () {}),
                  (e.setDebug = n);
                var i = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      i ||
                        (k.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (i = !0)),
                      t
                    );
                  },
                });
              },
              nt = window._satellite;
            if (nt && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var ot = nt.container;
              delete nt.container;
              var rt = ot.property.settings.undefinedVarsReturnEmpty,
                st = ot.property.settings.ruleComponentSequencingEnabled,
                it = ot.dataElements || {};
              H.migrateCookieData(it);
              var at,
                ct = function (e) {
                  return it[e];
                },
                ut = ne(),
                dt = Q(
                  ut,
                  ct,
                  function () {
                    return at.apply(null, arguments);
                  },
                  rt
                ),
                lt = {},
                ft = ie(lt),
                pt = ee(lt, ct),
                mt = Y(lt, ct, dt);
              at = se(pt, mt, rt);
              var ht = b(D('localStorage'), k);
              tt(nt, ot, ht.setDebugEnabled, mt, ft), et(ot, ut, ht, at, dt);
              var gt = re(nt),
                bt = y(ut, at),
                vt = ge(ut),
                yt = xe(vt, k, gt),
                wt = we(Pe, vt, k, gt),
                xt = ye(Pe, vt, k, gt),
                Ct = Ce(k, gt),
                jt = ve(
                  Ee(
                    st,
                    he(me(bt, Te, yt, wt), je(bt, xt, Ct)),
                    fe(de(bt, ke, Te, wt, yt), ue(bt, ke, xt), Ct),
                    gt
                  ),
                  bt,
                  De,
                  Pe,
                  be(ut),
                  k
                );
              Oe(m, ot.rules || [], jt);
            }
            return nt;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_3010dd1b7fd434a5)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_3010dd1b7fd434a5
          ));
      }
    })();
    _satellite = $___var_1f54f8dcf814c059;
  })();
}
