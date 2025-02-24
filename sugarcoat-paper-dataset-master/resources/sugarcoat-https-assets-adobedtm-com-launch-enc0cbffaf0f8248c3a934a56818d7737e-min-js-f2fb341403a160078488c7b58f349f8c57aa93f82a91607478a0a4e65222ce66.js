var _satellite;
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
  (function () {
    !(function () {
      (window._satellite = window._satellite || {}),
        (window._satellite.container = {
          buildInfo: {
            minified: !0,
            buildDate: '2020-11-23T08:01:39Z',
            environment: 'production',
            turbineBuildDate: '2020-08-10T20:14:17Z',
            turbineVersion: '27.0.0',
          },
          dataElements: {
            cachebuster: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/randomNumber.js',
              settings: { max: 1000000, min: 1 },
            },
            purl: {
              defaultValue: '',
              cleanText: !0,
              storageDuration: 'pageview',
              modulePath: 'core/src/lib/dataElements/pageInfo.js',
              settings: { attribute: 'url' },
            },
            MC1_DE: {
              defaultValue: '',
              modulePath: 'core/src/lib/dataElements/cookie.js',
              settings: { name: 'MC1' },
            },
          },
          extensions: {
            core: {
              displayName: 'Core',
              modules: {
                'core/src/lib/dataElements/randomNumber.js': {
                  name: 'random-number',
                  displayName: 'Random Number',
                  script: function (e) {
                    'use strict';
                    e.exports = function (e) {
                      var t = Math.ceil(e.min),
                        o = Math.floor(e.max);
                      return o < t ? NaN : Math.floor(Math.random() * (o - t + 1)) + t;
                    };
                  },
                },
                'core/src/lib/dataElements/pageInfo.js': {
                  name: 'page-info',
                  displayName: 'Page Info',
                  script: function (e, t, o) {
                    'use strict';
                    var n = o('@adobe/reactor-document');
                    e.exports = function (e) {
                      switch (e.attribute) {
                        case 'url':
                          return n.location.href;
                        case 'hostname':
                          return n.location.hostname;
                        case 'pathname':
                          return n.location.pathname;
                        case 'protocol':
                          return n.location.protocol;
                        case 'referrer':
                          return n.referrer;
                        case 'title':
                          return n.title;
                      }
                    };
                  },
                },
                'core/src/lib/dataElements/cookie.js': {
                  name: 'cookie',
                  displayName: 'Cookie',
                  script: function (e, t, o) {
                    'use strict';
                    var n = o('@adobe/reactor-cookie');
                    e.exports = function (e) {
                      return n.get(e.name);
                    };
                  },
                },
                'core/src/lib/events/domReady.js': {
                  name: 'dom-ready',
                  displayName: 'DOM Ready',
                  script: function (e, t, o) {
                    'use strict';
                    var n = o('./helpers/pageLifecycleEvents');
                    e.exports = function (e, t) {
                      n.registerDomReadyTrigger(t);
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
                'core/src/lib/actions/customCode.js': {
                  name: 'custom-code',
                  displayName: 'Custom Code',
                  script: function (e, t, o, n) {
                    'use strict';
                    var i,
                      r,
                      c,
                      a = o('@adobe/reactor-document'),
                      s = o('./helpers/decorateCode'),
                      d = o('./helpers/loadCodeSequentially'),
                      f = o('../../../node_modules/postscribe/dist/postscribe'),
                      u =
                        ((i = function (e) {
                          f(a.body, e, {
                            error: function (e) {
                              n.logger.error(e.msg);
                            },
                          });
                        }),
                        (r = []),
                        (c = function () {
                          if (a.body) for (; r.length; ) i(r.shift());
                          else setTimeout(c, 20);
                        }),
                        function (e) {
                          r.push(e), c();
                        }),
                      l = (function () {
                        if (a.currentScript) return a.currentScript.async;
                        for (var e = a.querySelectorAll('script'), t = 0; t < e.length; t++) {
                          var o = e[t];
                          if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(o.src))
                            return o.async;
                        }
                        return !0;
                      })();
                    e.exports = function (e, t) {
                      var o = { settings: e, event: t },
                        n = o.settings.source;
                      if (n) {
                        if (o.settings.isExternal)
                          return d(n).then(function (e) {
                            e && u(s(o, e));
                          });
                        if (
                          l ||
                          ('core.library-loaded' !== t.$type && 'core.page-bottom' !== t.$type)
                        )
                          u(s(o, n));
                        else {
                          if (!a.write)
                            throw new Error(
                              'Cannot write HTML to the page. `document.write` is unavailable.'
                            );
                          a.write(s(o, n));
                        }
                      }
                    };
                  },
                },
                'core/src/lib/events/click.js': {
                  name: 'click',
                  displayName: 'Click',
                  script: function (e, t, o) {
                    'use strict';
                    var i = o('@adobe/reactor-window'),
                      r = o('./helpers/createBubbly')(),
                      c = new (o('./helpers/weakMap'))(),
                      a = function (e) {
                        var t = e.tagName;
                        if (t && 'a' !== t.toLowerCase()) return !1;
                        var o = e.getAttribute('target');
                        return (
                          !!e.getAttribute('href') &&
                          (!o ||
                            ('_blank' !== o &&
                              ('_top' === o
                                ? i.top === i
                                : '_parent' !== o && ('_self' === o || !i.name || o === i.name))))
                        );
                      };
                    document.addEventListener('click', r.evaluateEvent, !0),
                      (e.exports = function (o, n) {
                        r.addListener(o, function (e) {
                          var t = e.nativeEvent;
                          t.s_fe ||
                            (o.anchorDelay &&
                              (c.has(t) ||
                                (a(t.target) &&
                                  (t.preventDefault(),
                                  setTimeout(function () {
                                    i.location = t.target.href;
                                  }, o.anchorDelay)),
                                c.set(t, !0))),
                            n(e));
                        });
                      }),
                      (e.exports.__reset = r.__reset);
                  },
                },
                'core/src/lib/conditions/landingPage.js': {
                  name: 'landing-page',
                  displayName: 'Landing Page',
                  script: function (e, t, o) {
                    'use strict';
                    var n = o('../helpers/visitorTracking'),
                      i = o('../helpers/textMatch');
                    e.exports = function (e) {
                      var t = e.pageIsRegex ? new RegExp(e.page, 'i') : e.page;
                      return i(n.getLandingPage(), t);
                    };
                  },
                },
                'core/src/lib/events/windowLoaded.js': {
                  name: 'window-loaded',
                  displayName: 'Window Loaded',
                  script: function (e, t, o) {
                    'use strict';
                    var n = o('./helpers/pageLifecycleEvents');
                    e.exports = function (e, t) {
                      n.registerWindowLoadedTrigger(t);
                    };
                  },
                },
                'core/src/lib/events/customEvent.js': {
                  name: 'custom-event',
                  displayName: 'Custom Event',
                  script: function (e, t, o) {
                    'use strict';
                    var n = o('./helpers/createBubbly')(),
                      i = [];
                    e.exports = function (e, t) {
                      var o = e.type;
                      -1 === i.indexOf(o) &&
                        (i.push(o), document.addEventListener(o, n.evaluateEvent, !0)),
                        n.addListener(e, function (e) {
                          e.nativeEvent.type === o && ((e.detail = e.nativeEvent.detail), t(e));
                        });
                    };
                  },
                },
                'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                  script: function (e, t, o) {
                    const $___old_b28edeb2345f301a = {}.constructor.getOwnPropertyDescriptor(
                      Navigator.prototype,
                      'appVersion'
                    );
                    try {
                      if ($___old_b28edeb2345f301a)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'appVersion',
                          $___stub_9d7b4eb662ee43f5.appVersion
                        ));
                      return function () {
                        'use strict';
                        var n = o('@adobe/reactor-window'),
                          i = o('@adobe/reactor-document'),
                          r = -1 !== n.navigator.appVersion.indexOf('MSIE 10'),
                          c = 'WINDOW_LOADED',
                          a = 'DOM_READY',
                          s = 'PAGE_BOTTOM',
                          d = [s, a, c],
                          f = function (e, t) {
                            return { element: e, target: e, nativeEvent: t };
                          },
                          u = {};
                        d.forEach(function (e) {
                          u[e] = [];
                        });
                        var l = function (e, t) {
                            d.slice(0, b(e) + 1).forEach(function (e) {
                              w(t, e);
                            });
                          },
                          m = function () {
                            return 'complete' === i.readyState
                              ? c
                              : 'interactive' === i.readyState
                              ? r
                                ? null
                                : a
                              : void 0;
                          },
                          b = function (e) {
                            return d.indexOf(e);
                          },
                          w = function (t, e) {
                            u[e].forEach(function (e) {
                              h(t, e);
                            }),
                              (u[e] = []);
                          },
                          h = function (e, t) {
                            var o = t.trigger,
                              n = t.syntheticEventFn;
                            o(n ? n(e) : null);
                          };
                        (n._satellite = n._satellite || {}),
                          (n._satellite.pageBottom = l.bind(null, s)),
                          i.addEventListener('DOMContentLoaded', l.bind(null, a), !0),
                          n.addEventListener('load', l.bind(null, c), !0),
                          n.setTimeout(function () {
                            var e = m();
                            e && l(e);
                          }, 0),
                          (e.exports = {
                            registerLibraryLoadedTrigger: function (e) {
                              e();
                            },
                            registerPageBottomTrigger: function (e) {
                              u[s].push({ trigger: e });
                            },
                            registerDomReadyTrigger: function (e) {
                              u[a].push({ trigger: e, syntheticEventFn: f.bind(null, i) });
                            },
                            registerWindowLoadedTrigger: function (e) {
                              u[c].push({ trigger: e, syntheticEventFn: f.bind(null, n) });
                            },
                          });
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_b28edeb2345f301a)
                        ({}.constructor.defineProperty(
                          Navigator.prototype,
                          'appVersion',
                          $___old_b28edeb2345f301a
                        ));
                    }
                  },
                },
                'core/src/lib/actions/helpers/decorateCode.js': {
                  script: function (e, t, o, n) {
                    'use strict';
                    var i = 0,
                      r = function (e) {
                        return e.settings.isExternal;
                      },
                      c = function (e, t) {
                        return '<script>\n' + t + '\n</script>';
                      },
                      a = function (t, e) {
                        var o = '__runScript' + ++i;
                        return (
                          (_satellite[o] = function (e) {
                            e.call(t.event.element, t.event, t.event.target), delete _satellite[o];
                          }),
                          '<script>_satellite["' +
                            o +
                            '"](function(event, target) {\n' +
                            e +
                            '\n});</script>'
                        );
                      },
                      s = {
                        javascript: function (e, t) {
                          return e.settings.global ? c(e, t) : a(e, t);
                        },
                        html: function (e, t) {
                          return r(e) ? n.replaceTokens(t, e.event) : t;
                        },
                      };
                    e.exports = function (e, t) {
                      return s[e.settings.language](e, t);
                    };
                  },
                },
                'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                  script: function (e, t, o) {
                    'use strict';
                    var n = o('@adobe/reactor-promise'),
                      i = o('./getSourceByUrl'),
                      r = n.resolve();
                    e.exports = function (t) {
                      var e = new n(function (o) {
                        var e = i(t);
                        n.all([e, r]).then(function (e) {
                          var t = e[0];
                          o(t);
                        });
                      });
                      return (r = e);
                    };
                  },
                },
                'core/node_modules/postscribe/dist/postscribe.js': {
                  script: function (o, n) {
                    !(function i (e, t) {
                      'object' == typeof n && 'object' == typeof o
                        ? (o.exports = t())
                        : 'function' == typeof define && define.amd
                        ? define([], t)
                        : 'object' == typeof n
                        ? (n.postscribe = t())
                        : (e.postscribe = t());
                    })(this, function () {
                      return (function (o) {
                        function n (e) {
                          if (i[e]) return i[e].exports;
                          var t = (i[e] = { exports: {}, id: e, loaded: !1 });
                          return o[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports;
                        }
                        var i = {};
                        return (n.m = o), (n.c = i), (n.p = ''), n(0);
                      })([
                        function (e, t, o) {
                          'use strict';
                          function n (e) {
                            return e && e.__esModule ? e : { default: e };
                          }
                          var i = n(o(1));
                          e.exports = i['default'];
                        },
                        function (e, t, o) {
                          'use strict';
                          function n (e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                              for (var o in e)
                                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return (t['default'] = e), t;
                          }
                          function i (e) {
                            return e && e.__esModule ? e : { default: e };
                          }
                          function d () {}
                          function f () {
                            var e = s.shift();
                            if (e) {
                              var t = c.last(e);
                              t.afterDequeue(),
                                (e.stream = r.apply(undefined, e)),
                                t.afterStreamStart();
                            }
                          }
                          function r (e, t, n) {
                            function i (e) {
                              (e = n.beforeWrite(e)), w.write(e), n.afterWrite(e);
                            }
                            ((w = new m['default'](e, n)).id = b++),
                              (w.name = n.name || w.id),
                              (u.streams[w.name] = w);
                            var o = e.ownerDocument,
                              r = {
                                close: o.close,
                                open: o.open,
                                write: o.write,
                                writeln: o.writeln,
                              };
                            l(o, {
                              close: d,
                              open: d,
                              write: function a () {
                                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
                                  t[o] = arguments[o];
                                return i(t.join(''));
                              },
                              writeln: function s () {
                                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
                                  t[o] = arguments[o];
                                return i(t.join('') + '\n');
                              },
                            });
                            var c = w.win.onerror || d;
                            return (
                              (w.win.onerror = function (e, t, o) {
                                n.error({ msg: e + ' - ' + t + ': ' + o }),
                                  c.apply(w.win, [e, t, o]);
                              }),
                              w.write(t, function () {
                                l(o, r), (w.win.onerror = c), n.done(), (w = null), f();
                              }),
                              w
                            );
                          }
                          function u (e, t, o) {
                            if (c.isFunction(o)) o = { done: o };
                            else if ('clear' === o) return (s = []), (w = null), void (b = 0);
                            o = c.defaults(o, a);
                            var n = [
                              (e = /^#/.test(e)
                                ? window.document.getElementById(e.substr(1))
                                : e.jquery
                                ? e[0]
                                : e),
                              t,
                              o,
                            ];
                            return (
                              (e.postscribe = {
                                cancel: function i () {
                                  n.stream ? n.stream.abort() : (n[1] = d);
                                },
                              }),
                              o.beforeEnqueue(n),
                              s.push(n),
                              w || f(),
                              e.postscribe
                            );
                          }
                          t.__esModule = !0;
                          var l =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var o = arguments[t];
                                for (var n in o)
                                  Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
                              }
                              return e;
                            };
                          t['default'] = u;
                          var m = i(o(2)),
                            c = n(o(4)),
                            a = {
                              afterAsync: d,
                              afterDequeue: d,
                              afterStreamStart: d,
                              afterWrite: d,
                              autoFix: !0,
                              beforeEnqueue: d,
                              beforeWriteToken: function h (e) {
                                return e;
                              },
                              beforeWrite: function p (e) {
                                return e;
                              },
                              done: d,
                              error: function g (e) {
                                throw new Error(e.msg);
                              },
                              releaseAsync: !1,
                            },
                            b = 0,
                            s = [],
                            w = null;
                          l(u, { streams: {}, queue: s, WriteStream: m['default'] });
                        },
                        function (e, t, o) {
                          'use strict';
                          function n (e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                              for (var o in e)
                                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                            return (t['default'] = e), t;
                          }
                          function i (e) {
                            return e && e.__esModule ? e : { default: e };
                          }
                          function x (e, t) {
                            if (!(e instanceof t))
                              throw new TypeError('Cannot call a class as a function');
                          }
                          function O (e, t) {
                            var o = P + t,
                              n = e.getAttribute(o);
                            return j.existy(n) ? String(n) : n;
                          }
                          function v (e, t, o) {
                            var n = 2 < arguments.length && o !== undefined ? arguments[2] : null,
                              i = P + t;
                            j.existy(n) && '' !== n ? e.setAttribute(i, n) : e.removeAttribute(i);
                          }
                          t.__esModule = !0;
                          var y =
                              Object.assign ||
                              function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                  var o = arguments[t];
                                  for (var n in o)
                                    Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
                                }
                                return e;
                              },
                            C = i(o(3)),
                            j = n(o(4)),
                            k = !1,
                            P = 'data-ps-',
                            E = 'ps-style',
                            R = 'ps-script',
                            r = (function () {
                              function n (e, t) {
                                var o =
                                  1 < arguments.length && t !== undefined ? arguments[1] : {};
                                x(this, n),
                                  (this.root = e),
                                  (this.options = o),
                                  (this.doc = e.ownerDocument),
                                  (this.win = this.doc.defaultView || this.doc.parentWindow),
                                  (this.parser = new C['default']('', { autoFix: o.autoFix })),
                                  (this.actuals = [e]),
                                  (this.proxyHistory = ''),
                                  (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                  (this.scriptStack = []),
                                  (this.writeQueue = []),
                                  v(this.proxyRoot, 'proxyof', 0);
                              }
                              return (
                                (n.prototype.write = function o () {
                                  var e;
                                  for (
                                    (e = this.writeQueue).push.apply(e, arguments);
                                    !this.deferredRemote && this.writeQueue.length;

                                  ) {
                                    var t = this.writeQueue.shift();
                                    j.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                  }
                                }),
                                (n.prototype._callFunction = function i (e) {
                                  var t = { type: 'function', value: e.name || e.toString() };
                                  this._onScriptStart(t),
                                    e.call(this.win, this.doc),
                                    this._onScriptDone(t);
                                }),
                                (n.prototype._writeImpl = function r (e) {
                                  this.parser.append(e);
                                  for (
                                    var t = void 0, o = void 0, n = void 0, i = [];
                                    (t = this.parser.readToken()) &&
                                    !(o = j.isScript(t)) &&
                                    !(n = j.isStyle(t));

                                  )
                                    (t = this.options.beforeWriteToken(t)) && i.push(t);
                                  0 < i.length && this._writeStaticTokens(i),
                                    o && this._handleScriptToken(t),
                                    n && this._handleStyleToken(t);
                                }),
                                (n.prototype._writeStaticTokens = function c (e) {
                                  var t = this._buildChunk(e);
                                  return t.actual
                                    ? ((t.html = this.proxyHistory + t.actual),
                                      (this.proxyHistory += t.proxy),
                                      (this.proxyRoot.innerHTML = t.html),
                                      k && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                      this._walkChunk(),
                                      k && (t.actualInnerHTML = this.root.innerHTML),
                                      t)
                                    : null;
                                }),
                                (n.prototype._buildChunk = function f (e) {
                                  for (
                                    var t = this.actuals.length,
                                      o = [],
                                      n = [],
                                      i = [],
                                      r = e.length,
                                      c = 0;
                                    c < r;
                                    c++
                                  ) {
                                    var a = e[c],
                                      s = a.toString();
                                    if ((o.push(s), a.attrs)) {
                                      if (!/^noscript$/i.test(a.tagName)) {
                                        var d = t++;
                                        n.push(s.replace(/(\/?>)/, ' ' + P + 'id=' + d + ' $1')),
                                          a.attrs.id !== R &&
                                            a.attrs.id !== E &&
                                            i.push(
                                              'atomicTag' === a.type
                                                ? ''
                                                : '<' +
                                                    a.tagName +
                                                    ' ' +
                                                    P +
                                                    'proxyof=' +
                                                    d +
                                                    (a.unary ? ' />' : '>')
                                            );
                                      }
                                    } else n.push(s), i.push('endTag' === a.type ? s : '');
                                  }
                                  return {
                                    tokens: e,
                                    raw: o.join(''),
                                    actual: n.join(''),
                                    proxy: i.join(''),
                                  };
                                }),
                                (n.prototype._walkChunk = function a () {
                                  for (
                                    var e = void 0, t = [this.proxyRoot];
                                    j.existy((e = t.shift()));

                                  ) {
                                    var o = 1 === e.nodeType;
                                    if (!(o && O(e, 'proxyof'))) {
                                      o && v((this.actuals[O(e, 'id')] = e), 'id');
                                      var n = e.parentNode && O(e.parentNode, 'proxyof');
                                      n && this.actuals[n].appendChild(e);
                                    }
                                    t.unshift.apply(t, j.toArray(e.childNodes));
                                  }
                                }),
                                (n.prototype._handleScriptToken = function s (e) {
                                  var t = this,
                                    o = this.parser.clear();
                                  o && this.writeQueue.unshift(o),
                                    (e.src = e.attrs.src || e.attrs.SRC),
                                    (e = this.options.beforeWriteToken(e)) &&
                                      (e.src && this.scriptStack.length
                                        ? (this.deferredRemote = e)
                                        : this._onScriptStart(e),
                                      this._writeScriptToken(e, function () {
                                        t._onScriptDone(e);
                                      }));
                                }),
                                (n.prototype._handleStyleToken = function d (e) {
                                  var t = this.parser.clear();
                                  t && this.writeQueue.unshift(t),
                                    (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                    (e = this.options.beforeWriteToken(e)) &&
                                      this._writeStyleToken(e),
                                    t && this.write();
                                }),
                                (n.prototype._writeStyleToken = function u (e) {
                                  var t = this._buildStyle(e);
                                  this._insertCursor(t, E),
                                    e.content &&
                                      (t.styleSheet && !t.sheet
                                        ? (t.styleSheet.cssText = e.content)
                                        : t.appendChild(this.doc.createTextNode(e.content)));
                                }),
                                (n.prototype._buildStyle = function t (e) {
                                  var o = this.doc.createElement(e.tagName);
                                  return (
                                    o.setAttribute('type', e.type),
                                    j.eachKey(e.attrs, function (e, t) {
                                      o.setAttribute(e, t);
                                    }),
                                    o
                                  );
                                }),
                                (n.prototype._insertCursor = function l (e, t) {
                                  this._writeImpl('<span id="' + t + '"/>');
                                  var o = this.doc.getElementById(t);
                                  o && o.parentNode.replaceChild(e, o);
                                }),
                                (n.prototype._onScriptStart = function m (e) {
                                  (e.outerWrites = this.writeQueue),
                                    (this.writeQueue = []),
                                    this.scriptStack.unshift(e);
                                }),
                                (n.prototype._onScriptDone = function b (e) {
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
                                (n.prototype._writeScriptToken = function w (e, t) {
                                  var o = this._buildScript(e),
                                    n = this._shouldRelease(o),
                                    i = this.options.afterAsync;
                                  e.src &&
                                    ((o.src = e.src),
                                    this._scriptLoadHandler(
                                      o,
                                      n
                                        ? i
                                        : function () {
                                            t(), i();
                                          }
                                    ));
                                  try {
                                    this._insertCursor(o, R), (o.src && !n) || t();
                                  } catch (r) {
                                    this.options.error(r), t();
                                  }
                                }),
                                (n.prototype._buildScript = function h (e) {
                                  var o = this.doc.createElement(e.tagName);
                                  return (
                                    j.eachKey(e.attrs, function (e, t) {
                                      o.setAttribute(e, t);
                                    }),
                                    e.content && (o.text = e.content),
                                    o
                                  );
                                }),
                                (n.prototype._scriptLoadHandler = function p (t, o) {
                                  function n () {
                                    t = t.onload = t.onreadystatechange = t.onerror = null;
                                  }
                                  function i () {
                                    n(), null != o && o(), (o = null);
                                  }
                                  function r (e) {
                                    n(), c(e), null != o && o(), (o = null);
                                  }
                                  function e (e, t) {
                                    var o = e['on' + t];
                                    null != o && (e['_on' + t] = o);
                                  }
                                  var c = this.options.error;
                                  e(t, 'load'),
                                    e(t, 'error'),
                                    y(t, {
                                      onload: function a () {
                                        if (t._onload)
                                          try {
                                            t._onload.apply(
                                              this,
                                              Array.prototype.slice.call(arguments, 0)
                                            );
                                          } catch (e) {
                                            r({
                                              msg: 'onload handler failed ' + e + ' @ ' + t.src,
                                            });
                                          }
                                        i();
                                      },
                                      onerror: function s () {
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
                                      onreadystatechange: function d () {
                                        /^(loaded|complete)$/.test(t.readyState) && i();
                                      },
                                    });
                                }),
                                (n.prototype._shouldRelease = function g (e) {
                                  return (
                                    !/^script$/i.test(e.nodeName) ||
                                    !!(
                                      this.options.releaseAsync &&
                                      e.src &&
                                      e.hasAttribute('async')
                                    )
                                  );
                                }),
                                n
                              );
                            })();
                          t['default'] = r;
                        },
                        function (o) {
                          !(function n (e, t) {
                            o.exports = t();
                          })(0, function () {
                            return (function (o) {
                              function n (e) {
                                if (i[e]) return i[e].exports;
                                var t = (i[e] = { exports: {}, id: e, loaded: !1 });
                                return (
                                  o[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports
                                );
                              }
                              var i = {};
                              return (n.m = o), (n.c = i), (n.p = ''), n(0);
                            })([
                              function (e, t, o) {
                                'use strict';
                                function n (e) {
                                  return e && e.__esModule ? e : { default: e };
                                }
                                var i = n(o(1));
                                e.exports = i['default'];
                              },
                              function (e, t, o) {
                                'use strict';
                                function n (e) {
                                  return e && e.__esModule ? e : { default: e };
                                }
                                function i (e) {
                                  if (e && e.__esModule) return e;
                                  var t = {};
                                  if (null != e)
                                    for (var o in e)
                                      Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                  return (t['default'] = e), t;
                                }
                                function f (e, t) {
                                  if (!(e instanceof t))
                                    throw new TypeError('Cannot call a class as a function');
                                }
                                t.__esModule = !0;
                                var u = i(o(2)),
                                  l = i(o(3)),
                                  m = n(o(6)),
                                  r = o(5),
                                  b = {
                                    comment: /^<!--/,
                                    endTag: /^<\//,
                                    atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                    startTag: /^</,
                                    chars: /^[^<]/,
                                  },
                                  c = (function () {
                                    function s (e, t) {
                                      var o = this,
                                        n =
                                          0 < arguments.length && e !== undefined
                                            ? arguments[0]
                                            : '',
                                        i =
                                          1 < arguments.length && t !== undefined
                                            ? arguments[1]
                                            : {};
                                      f(this, s), (this.stream = n);
                                      var r = !1,
                                        c = {};
                                      for (var a in u)
                                        u.hasOwnProperty(a) &&
                                          (i.autoFix && (c[a + 'Fix'] = !0),
                                          (r = r || c[a + 'Fix']));
                                      r
                                        ? ((this._readToken = (0, m['default'])(
                                            this,
                                            c,
                                            function () {
                                              return o._readTokenImpl();
                                            }
                                          )),
                                          (this._peekToken = (0, m['default'])(
                                            this,
                                            c,
                                            function () {
                                              return o._peekTokenImpl();
                                            }
                                          )))
                                        : ((this._readToken = this._readTokenImpl),
                                          (this._peekToken = this._peekTokenImpl));
                                    }
                                    return (
                                      (s.prototype.append = function t (e) {
                                        this.stream += e;
                                      }),
                                      (s.prototype.prepend = function o (e) {
                                        this.stream = e + this.stream;
                                      }),
                                      (s.prototype._readTokenImpl = function n () {
                                        var e = this._peekTokenImpl();
                                        if (e)
                                          return (this.stream = this.stream.slice(e.length)), e;
                                      }),
                                      (s.prototype._peekTokenImpl = function i () {
                                        for (var e in b)
                                          if (b.hasOwnProperty(e) && b[e].test(this.stream)) {
                                            var t = l[e](this.stream);
                                            if (t)
                                              return 'startTag' === t.type &&
                                                /script|style/i.test(t.tagName)
                                                ? null
                                                : ((t.text = this.stream.substr(0, t.length)), t);
                                          }
                                      }),
                                      (s.prototype.peekToken = function e () {
                                        return this._peekToken();
                                      }),
                                      (s.prototype.readToken = function r () {
                                        return this._readToken();
                                      }),
                                      (s.prototype.readTokens = function c (e) {
                                        for (var t = void 0; (t = this.readToken()); )
                                          if (e[t.type] && !1 === e[t.type](t)) return;
                                      }),
                                      (s.prototype.clear = function a () {
                                        var e = this.stream;
                                        return (this.stream = ''), e;
                                      }),
                                      (s.prototype.rest = function d () {
                                        return this.stream;
                                      }),
                                      s
                                    );
                                  })();
                                for (var a in (((t['default'] = c).tokenToString = function (e) {
                                  return e.toString();
                                }),
                                (c.escapeAttributes = function (e) {
                                  var t = {};
                                  for (var o in e)
                                    e.hasOwnProperty(o) &&
                                      (t[o] = (0, r.escapeQuotes)(e[o], null));
                                  return t;
                                }),
                                (c.supports = u)))
                                  u.hasOwnProperty(a) &&
                                    (c.browserHasFlaw = c.browserHasFlaw || (!u[a] && a));
                              },
                              function (e, t) {
                                'use strict';
                                var o = !(t.__esModule = !0),
                                  n = !1,
                                  i = window.document.createElement('div');
                                try {
                                  var r = '<P><I></P></I>';
                                  (i.innerHTML = r), (t.tagSoup = o = i.innerHTML !== r);
                                } catch (c) {
                                  t.tagSoup = o = !1;
                                }
                                try {
                                  (i.innerHTML = '<P><i><P></P></i></P>'),
                                    (t.selfClose = n = 2 === i.childNodes.length);
                                } catch (c) {
                                  t.selfClose = n = !1;
                                }
                                (i = null), (t.tagSoup = o), (t.selfClose = n);
                              },
                              function (e, t, o) {
                                'use strict';
                                function n (e) {
                                  var t = e.indexOf('-->');
                                  if (0 <= t) return new f.CommentToken(e.substr(4, t - 1), t + 3);
                                }
                                function i (e) {
                                  var t = e.indexOf('<');
                                  return new f.CharsToken(0 <= t ? t : e.length);
                                }
                                function r (e) {
                                  var c, a, s;
                                  if (-1 !== e.indexOf('>')) {
                                    var t = e.match(u.startTag);
                                    if (t) {
                                      var o =
                                        ((c = {}),
                                        (a = {}),
                                        (s = t[2]),
                                        t[2].replace(u.attr, function (e, t, o, n, i, r) {
                                          o || n || i || r
                                            ? arguments[5]
                                              ? ((c[arguments[5]] = ''), (a[arguments[5]] = !0))
                                              : (c[t] =
                                                  arguments[2] ||
                                                  arguments[3] ||
                                                  arguments[4] ||
                                                  (u.fillAttr.test(t) && t) ||
                                                  '')
                                            : (c[t] = ''),
                                            (s = s.replace(e, ''));
                                        }),
                                        {
                                          v: new f.StartTagToken(
                                            t[1],
                                            t[0].length,
                                            c,
                                            a,
                                            !!t[3],
                                            s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                          ),
                                        });
                                      if ('object' === (void 0 === o ? 'undefined' : d(o)))
                                        return o.v;
                                    }
                                  }
                                }
                                function c (e) {
                                  var t = r(e);
                                  if (t) {
                                    var o = e.slice(t.length);
                                    if (o.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                      var n = o.match(
                                        new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                      );
                                      if (n)
                                        return new f.AtomicTagToken(
                                          t.tagName,
                                          n[0].length + t.length,
                                          t.attrs,
                                          t.booleanAttrs,
                                          n[1]
                                        );
                                    }
                                  }
                                }
                                function a (e) {
                                  var t = e.match(u.endTag);
                                  if (t) return new f.EndTagToken(t[1], t[0].length);
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
                                      };
                                (t.comment = n),
                                  (t.chars = i),
                                  (t.startTag = r),
                                  (t.atomicTag = c),
                                  (t.endTag = a);
                                var f = o(4),
                                  u = {
                                    startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                    endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                    attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                    fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                  };
                              },
                              function (e, t, o) {
                                'use strict';
                                function a (e, t) {
                                  if (!(e instanceof t))
                                    throw new TypeError('Cannot call a class as a function');
                                }
                                (t.__esModule = !0),
                                  (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined);
                                var s = o(5),
                                  n = (t.Token = function n (e, t) {
                                    a(this, n),
                                      (this.type = e),
                                      (this.length = t),
                                      (this.text = '');
                                  }),
                                  i =
                                    ((t.CommentToken = (function () {
                                      function o (e, t) {
                                        a(this, o),
                                          (this.type = 'comment'),
                                          (this.length = t || (e ? e.length : 0)),
                                          (this.text = ''),
                                          (this.content = e);
                                      }
                                      return (
                                        (o.prototype.toString = function e () {
                                          return '<!--' + this.content;
                                        }),
                                        o
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
                                      function r (e, t, o, n, i) {
                                        a(this, r),
                                          (this.type = e),
                                          (this.length = o),
                                          (this.text = ''),
                                          (this.tagName = t),
                                          (this.attrs = n),
                                          (this.booleanAttrs = i),
                                          (this.unary = !1),
                                          (this.html5Unary = !1);
                                      }
                                      return (
                                        (r.formatTag = function c (e, t) {
                                          var o =
                                              1 < arguments.length && t !== undefined
                                                ? arguments[1]
                                                : null,
                                            n = '<' + e.tagName;
                                          for (var i in e.attrs)
                                            if (e.attrs.hasOwnProperty(i)) {
                                              n += ' ' + i;
                                              var r = e.attrs[i];
                                              ('undefined' != typeof e.booleanAttrs &&
                                                'undefined' != typeof e.booleanAttrs[i]) ||
                                                (n += '="' + (0, s.escapeQuotes)(r) + '"');
                                            }
                                          return (
                                            e.rest && (n += ' ' + e.rest),
                                            e.unary && !e.html5Unary ? (n += '/>') : (n += '>'),
                                            o !== undefined &&
                                              null !== o &&
                                              (n += o + '</' + e.tagName + '>'),
                                            n
                                          );
                                        }),
                                        r
                                      );
                                    })()));
                                (t.StartTagToken = (function () {
                                  function c (e, t, o, n, i, r) {
                                    a(this, c),
                                      (this.type = 'startTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = o),
                                      (this.booleanAttrs = n),
                                      (this.html5Unary = !1),
                                      (this.unary = i),
                                      (this.rest = r);
                                  }
                                  return (
                                    (c.prototype.toString = function e () {
                                      return i.formatTag(this);
                                    }),
                                    c
                                  );
                                })()),
                                  (t.AtomicTagToken = (function () {
                                    function r (e, t, o, n, i) {
                                      a(this, r),
                                        (this.type = 'atomicTag'),
                                        (this.length = t),
                                        (this.text = ''),
                                        (this.tagName = e),
                                        (this.attrs = o),
                                        (this.booleanAttrs = n),
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
                                    function o (e, t) {
                                      a(this, o),
                                        (this.type = 'endTag'),
                                        (this.length = t),
                                        (this.text = ''),
                                        (this.tagName = e);
                                    }
                                    return (
                                      (o.prototype.toString = function e () {
                                        return '</' + this.tagName + '>';
                                      }),
                                      o
                                    );
                                  })());
                              },
                              function (e, t) {
                                'use strict';
                                function o (e, t) {
                                  var o =
                                    1 < arguments.length && t !== undefined ? arguments[1] : '';
                                  return e
                                    ? e.replace(/([^"]*)"/g, function (e, t) {
                                        return /\\/.test(t) ? t + '"' : t + '\\"';
                                      })
                                    : o;
                                }
                                (t.__esModule = !0), (t.escapeQuotes = o);
                              },
                              function (e, t) {
                                'use strict';
                                function d (e) {
                                  return (
                                    e &&
                                      'startTag' === e.type &&
                                      ((e.unary = n.test(e.tagName) || e.unary),
                                      (e.html5Unary = !/\/>$/.test(e.text))),
                                    e
                                  );
                                }
                                function f (e, t) {
                                  var o = e.stream,
                                    n = d(t());
                                  return (e.stream = o), n;
                                }
                                function u (e, t) {
                                  var o = t.pop();
                                  e.prepend('</' + o.tagName + '>');
                                }
                                function l () {
                                  var e = [];
                                  return (
                                    (e.last = function () {
                                      return this[this.length - 1];
                                    }),
                                    (e.lastTagNameEq = function (e) {
                                      var t = this.last();
                                      return (
                                        t &&
                                        t.tagName &&
                                        t.tagName.toUpperCase() === e.toUpperCase()
                                      );
                                    }),
                                    (e.containsTagName = function (e) {
                                      for (var t, o = 0; (t = this[o]); o++)
                                        if (t.tagName === e) return !0;
                                      return !1;
                                    }),
                                    e
                                  );
                                }
                                function o (o, n, t) {
                                  function i () {
                                    var e = f(o, t);
                                    e && c[e.type] && c[e.type](e);
                                  }
                                  var r = l(),
                                    c = {
                                      startTag: function a (e) {
                                        var t = e.tagName;
                                        'TR' === t.toUpperCase() && r.lastTagNameEq('TABLE')
                                          ? (o.prepend('<TBODY>'), i())
                                          : n.selfCloseFix && m.test(t) && r.containsTagName(t)
                                          ? r.lastTagNameEq(t)
                                            ? u(o, r)
                                            : (o.prepend('</' + e.tagName + '>'), i())
                                          : e.unary || r.push(e);
                                      },
                                      endTag: function s (e) {
                                        r.last()
                                          ? n.tagSoupFix && !r.lastTagNameEq(e.tagName)
                                            ? u(o, r)
                                            : r.pop()
                                          : n.tagSoupFix && (t(), i());
                                      },
                                    };
                                  return function e () {
                                    return i(), d(t());
                                  };
                                }
                                (t.__esModule = !0), (t['default'] = o);
                                var n = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                  m = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                              },
                            ]);
                          });
                        },
                        function (e, t) {
                          'use strict';
                          function n (e) {
                            return null != e;
                          }
                          function o (e) {
                            return 'function' == typeof e;
                          }
                          function i (e, t, o) {
                            var n = void 0,
                              i = (e && e.length) || 0;
                            for (n = 0; n < i; n++) t.call(o, e[n], n);
                          }
                          function r (e, t, o) {
                            for (var n in e) e.hasOwnProperty(n) && t.call(o, n, e[n]);
                          }
                          function c (o, e) {
                            return (
                              (o = o || {}),
                              r(e, function (e, t) {
                                n(o[e]) || (o[e] = t);
                              }),
                              o
                            );
                          }
                          function a (e) {
                            try {
                              return Array.prototype.slice.call(e);
                            } catch (n) {
                              var t =
                                ((o = []),
                                i(e, function (e) {
                                  o.push(e);
                                }),
                                { v: o });
                              if ('object' === (void 0 === t ? 'undefined' : l(t))) return t.v;
                            }
                            var o;
                          }
                          function s (e) {
                            return e[e.length - 1];
                          }
                          function d (e, t) {
                            return (
                              !(
                                !e ||
                                ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                                !('tagName' in e)
                              ) && !!~e.tagName.toLowerCase().indexOf(t)
                            );
                          }
                          function f (e) {
                            return d(e, 'script');
                          }
                          function u (e) {
                            return d(e, 'style');
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
                          (t.existy = n),
                            (t.isFunction = o),
                            (t.each = i),
                            (t.eachKey = r),
                            (t.defaults = c),
                            (t.toArray = a),
                            (t.last = s),
                            (t.isTag = d),
                            (t.isScript = f),
                            (t.isStyle = u);
                        },
                      ]);
                    });
                  },
                },
                'core/src/lib/actions/helpers/getSourceByUrl.js': {
                  script: function (e, t, o) {
                    'use strict';
                    var n = o('@adobe/reactor-load-script'),
                      i = o('@adobe/reactor-promise'),
                      r = {},
                      c = {},
                      a = function (e) {
                        return c[e] || (c[e] = n(e)), c[e];
                      };
                    (_satellite.__registerScript = function (e, t) {
                      r[e] = t;
                    }),
                      (e.exports = function (t) {
                        return r[t]
                          ? i.resolve(r[t])
                          : new i(function (e) {
                              a(t).then(
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
                'core/src/lib/events/helpers/createBubbly.js': {
                  script: function (e, t, o) {
                    'use strict';
                    var n = o('./weakMap'),
                      m = o('./matchesProperties'),
                      b = o('./matchesSelector');
                    e.exports = function () {
                      var u = [],
                        l = new n(),
                        e = {
                          addListener: function (e, t) {
                            u.push({ settings: e, callback: t });
                          },
                          evaluateEvent: function (t, e) {
                            if (u.length && !l.has(t)) {
                              for (var o = t.target, n = !1; o; ) {
                                for (var i = !1, r = !1, c = 0; c < u.length; c++) {
                                  var a = u[c],
                                    s = a.settings.elementSelector,
                                    d = a.settings.elementProperties;
                                  if (
                                    (!1 !== a.settings.bubbleFireIfChildFired || !n) &&
                                    (o === t.target || !1 !== a.settings.bubbleFireIfParent) &&
                                    (o === t.target || s || (d && Object.keys(d).length)) &&
                                    (!s || b(o, s)) &&
                                    (!d || m(o, d))
                                  ) {
                                    var f = {};
                                    e
                                      ? Object.keys(t).forEach(function (e) {
                                          f[e] = t[e];
                                        })
                                      : (f.nativeEvent = t),
                                      (f.element = o),
                                      (f.target = t.target),
                                      !1 !== a.callback(f) &&
                                        ((r = !0), a.settings.bubbleStop && (i = !0));
                                  }
                                }
                                if (i) break;
                                r && (n = !0), (o = o.parentNode);
                              }
                              l.set(t, !0);
                            }
                          },
                          __reset: function () {
                            u = [];
                          },
                        };
                      return e;
                    };
                  },
                },
                'core/src/lib/events/helpers/weakMap.js': {
                  script: function (e, t, o) {
                    'use strict';
                    var n = o('@adobe/reactor-window').WeakMap;
                    if (void 0 === n) {
                      var i = Object.defineProperty,
                        r = Date.now() % 1000000000;
                      (n = function () {
                        this.name = '__st' + ((1000000000 * Math.random()) >>> 0) + r++ + '__';
                      }).prototype = {
                        set: function (e, t) {
                          var o = e[this.name];
                          return (
                            o && o[0] === e
                              ? (o[1] = t)
                              : i(e, this.name, { value: [e, t], writable: !0 }),
                            this
                          );
                        },
                        get: function (e) {
                          var t;
                          return (t = e[this.name]) && t[0] === e ? t[1] : undefined;
                        },
                        delete: function (e) {
                          var t = e[this.name];
                          return !(!t || t[0] !== e) && ((t[0] = t[1] = undefined), !0);
                        },
                        has: function (e) {
                          var t = e[this.name];
                          return !!t && t[0] === e;
                        },
                      };
                    }
                    e.exports = n;
                  },
                },
                'core/src/lib/events/helpers/matchesProperties.js': {
                  script: function (e, t, o) {
                    'use strict';
                    var i = o('./../../helpers/textMatch'),
                      r = function (e, t) {
                        return '@text' === t || 'innerText' === t
                          ? e.textContent || e.innerText
                          : t in e
                          ? e[t]
                          : e.getAttribute
                          ? e.getAttribute(t)
                          : void 0;
                      };
                    e.exports = function (n, e) {
                      return (
                        !e ||
                        e.every(function (e) {
                          var t = r(n, e.name),
                            o = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                          return i(t, o);
                        })
                      );
                    };
                  },
                },
                'core/src/lib/events/helpers/matchesSelector.js': {
                  script: function (e, t, o, i) {
                    'use strict';
                    e.exports = function (e, t) {
                      var o = e.matches || e.msMatchesSelector;
                      if (o)
                        try {
                          return o.call(e, t);
                        } catch (n) {
                          return (
                            i.logger.warn(
                              'Matching element failed. ' + t + ' is not a valid selector.'
                            ),
                            !1
                          );
                        }
                      return !1;
                    };
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
                'core/src/lib/helpers/visitorTracking.js': {
                  script: function (e, t, o) {
                    'use strict';
                    var n = o('@adobe/reactor-cookie'),
                      i = o('@adobe/reactor-document'),
                      r = o('@adobe/reactor-window'),
                      c = o('./getNamespacedStorage'),
                      a = '_sdsat_',
                      s = 'visitorTracking.',
                      d = 'cookiesMigrated',
                      f = c('localStorage', s),
                      u = c('sessionStorage', s),
                      l = function () {
                        var e = u.getItem('landingPage');
                        return (
                          e ||
                            (u.setItem('landingPage', r.location.href),
                            u.setItem('landingTime', new Date().getTime())),
                          !e
                        );
                      },
                      m = function () {
                        return u.getItem('landingPage');
                      },
                      b = function () {
                        return Number(u.getItem('landingTime'));
                      },
                      w = function () {
                        return Number(f.getItem('sessionCount'));
                      },
                      h = function () {
                        return Number(f.getItem('pagesViewed'));
                      },
                      p = function () {
                        var e = new Date().getTime();
                        return Math.floor((e - b()) / 1000 / 60);
                      },
                      g = function () {
                        return u.getItem('trafficSource');
                      },
                      x = function () {
                        return Number(u.getItem('pagesViewed'));
                      },
                      O = function () {
                        return 1 === w();
                      },
                      v = function (e) {
                        e && f.setItem('sessionCount', w() + 1);
                      },
                      y = function () {
                        u.setItem('pagesViewed', x() + 1);
                      },
                      C = function () {
                        f.setItem('pagesViewed', h() + 1);
                      },
                      j = function () {
                        u.getItem('trafficSource') || u.setItem('trafficSource', i.referrer);
                      },
                      k = function () {
                        var e = l();
                        v(e), C(), y(), j();
                      };
                    (function () {
                      if (!f.getItem(d)) {
                        var e = n.get(a + 'session_count');
                        e && f.setItem('sessionCount', e);
                        var t = n.get(a + 'lt_pages_viewed');
                        t && f.setItem('pagesViewed', t), f.setItem(d, !0);
                      }
                    })(),
                      k(),
                      (e.exports = {
                        getLandingPage: m,
                        getLandingTime: b,
                        getMinutesOnSite: p,
                        getSessionCount: w,
                        getLifetimePageViewCount: h,
                        getSessionPageViewCount: x,
                        getTrafficSource: g,
                        getIsNewVisitor: O,
                      });
                  },
                },
                'core/src/lib/helpers/getNamespacedStorage.js': {
                  script: function (e, t, o) {
                    'use strict';
                    var r = o('@adobe/reactor-window'),
                      c = 'com.adobe.reactor.core.';
                    e.exports = function (n, e) {
                      var i = c + (e || '');
                      return {
                        getItem: function (e) {
                          const $___old_c9b8da527dcf9d8c = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'localStorage'
                            ),
                            $___old_881833837d150498 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'sessionStorage'
                            );
                          try {
                            if ($___old_c9b8da527dcf9d8c)
                              ({}.constructor.defineProperty(
                                window,
                                'localStorage',
                                $___stub_a011c28886b08277.localStorage
                              ));
                            if ($___old_881833837d150498)
                              ({}.constructor.defineProperty(
                                window,
                                'sessionStorage',
                                $___stub_a011c28886b08277.sessionStorage
                              ));
                            return function () {
                              try {
                                return r[n].getItem(i + e);
                              } catch (t) {
                                return null;
                              }
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_c9b8da527dcf9d8c)
                              ({}.constructor.defineProperty(
                                window,
                                'localStorage',
                                $___old_c9b8da527dcf9d8c
                              ));
                            if ($___old_881833837d150498)
                              ({}.constructor.defineProperty(
                                window,
                                'sessionStorage',
                                $___old_881833837d150498
                              ));
                          }
                        },
                        setItem: function (e, t) {
                          const $___old_4b4a875e90f1e8b3 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'localStorage'
                            ),
                            $___old_d01c54222efca2d4 = {}.constructor.getOwnPropertyDescriptor(
                              window,
                              'sessionStorage'
                            );
                          try {
                            if ($___old_4b4a875e90f1e8b3)
                              ({}.constructor.defineProperty(
                                window,
                                'localStorage',
                                $___stub_a011c28886b08277.localStorage
                              ));
                            if ($___old_d01c54222efca2d4)
                              ({}.constructor.defineProperty(
                                window,
                                'sessionStorage',
                                $___stub_a011c28886b08277.sessionStorage
                              ));
                            return function () {
                              try {
                                return r[n].setItem(i + e, t), !0;
                              } catch (o) {
                                return !1;
                              }
                            }.apply(this, arguments);
                          } finally {
                            if ($___old_4b4a875e90f1e8b3)
                              ({}.constructor.defineProperty(
                                window,
                                'localStorage',
                                $___old_4b4a875e90f1e8b3
                              ));
                            if ($___old_d01c54222efca2d4)
                              ({}.constructor.defineProperty(
                                window,
                                'sessionStorage',
                                $___old_d01c54222efca2d4
                              ));
                          }
                        },
                      };
                    };
                  },
                },
              },
              hostedLibFilesBaseUrl:
                'https://assets.adobedtm.com/extensions/EP73d0010a5a1e442fbce7d2b017628ddf/',
            },
            clicktale: {
              displayName: 'Clicktale Tag Injector',
              modules: {
                'clicktale/src/lib/actions/deployclicktale.js': {
                  name: 'deployclicktale',
                  displayName: 'Deploy Clicktale',
                  script: function (module, exports, require, turbine) {
                    'use strict';
                    function Base64Decode (e) {
                      return decodeURIComponent(
                        atob(e)
                          .split('')
                          .map(function (e) {
                            return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
                          })
                          .join('')
                      );
                    }
                    var loadScript = require('@adobe/reactor-load-script'),
                      extensionSettings = turbine.getExtensionSettings(),
                      partition = extensionSettings.partition,
                      guid = extensionSettings.guid,
                      piiselector = extensionSettings.piiselector,
                      multipleconditions = extensionSettings.multipleconditions || '[]';
                    if (
                      ((multipleconditions = JSON.parse(multipleconditions)),
                      multipleconditions &&
                        multipleconditions.forEach(function (index) {
                          var definition = index.definition;
                          if (((definition = definition.replace(/&#39;/g, "'")), eval(definition)))
                            return (guid = index.guid), void (partition = index.partition);
                        }),
                      piiselector)
                    ) {
                      try {
                        piiselector = Base64Decode(extensionSettings.piiselector);
                      } catch (e) {
                        piiselector = extensionSettings.piiselector;
                      }
                      window.ClickTalePIISelector = piiselector;
                    }
                    module.exports = function () {
                      partition &&
                        guid &&
                        (window.clickTaleTagInjected ||
                          (function (n, i, r) {
                            function e () {
                              var e = n.createElementNS,
                                t = e
                                  ? e.call(n, 'http://www.w3.org/1999/xhtml', i)
                                  : n.createElement(i),
                                o = n.getElementsByTagName(i)[0];
                              (t.async = !0),
                                (t.crossOrigin = 'anonymous'),
                                (t.type = 'text/javascript'),
                                (t.src = r),
                                o.parentNode.insertBefore(t, o);
                            }
                            (window.clickTaleTagInjected = !0),
                              'loading' != n.readyState
                                ? e()
                                : n.addEventListener('DOMContentLoaded', function () {
                                    setTimeout(e, 0);
                                  });
                          })(
                            document,
                            'script',
                            'https://cdnssl.clicktale.net/' + partition + '/ptc/' + guid + '.js'
                          ));
                    };
                  },
                },
              },
              settings: {
                guid: '76a3450f-9b77-4456-a451-720ddc99b4c8',
                partition: 'www32',
                piiselector: '',
                multipleconditions: '[]',
              },
              hostedLibFilesBaseUrl:
                'https://assets.adobedtm.com/extensions/EP4d83bfe125da46f2b5b2fcacec043b9f/',
            },
          },
          company: { orgId: 'EA76ADE95776D2EC7F000101@AdobeOrg' },
          property: {
            name: 'M365 Demo',
            settings: {
              domains: ['microsoft.com'],
              undefinedVarsReturnEmpty: !1,
              ruleComponentSequencingEnabled: !0,
            },
          },
          rules: [
            {
              id: 'RL84444dc9d44d4f238a304519763e6c02',
              name: 'Signup.azure.com - PurchaseComplete | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('signup.azure.com') ||
                        -1 !== window.location.href.indexOf('signup-local.azure.com') ||
                        -1 !== window.location.href.indexOf('signup-staging.azure.com')
                      )
                        return !0;
                    },
                  },
                  timeout: 8000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC6b82d3bee2754910bf1dc718f288fe92-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 20000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL0db1e3a5d9134c67b44b1e7b7042385f',
              name: 'hup',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !(
                          -1 === t.toLowerCase().indexOf('www.microsoft.com') ||
                          !o.match(
                            /(\/([a-z]{2}-[a-z]{2}|[a-z]{2}|[a-z]{2}-[a-z]{4}-[a-z]{2})\/home-use-program(?:\/|$))/i
                          )
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCcb0ae87148764a99bb1bc5fb767d23e3-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL5bfc793257bf48009c8a7b48345b9965',
              name: 'Resilience - Homepage CTA Click',
              events: [
                {
                  modulePath: 'core/src/lib/events/click.js',
                  settings: {
                    elementSelector: 'a.c-call-to-action.c-glyph.custom_bluebutton',
                    bubbleFireIfParent: !0,
                    bubbleFireIfChildFired: !0,
                  },
                  ruleOrder: 50,
                },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('www.microsoft.com') ||
                          -1 !==
                            window.location.href.indexOf('marketingsites-prod.microsoft.com')) &&
                        -1 !== window.location.href.indexOf('resilience')
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !1,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCdb68b718d4aa4f03a0d6255161f1a642-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL4ab9dfecba604a50a1ab70e66f5a4312',
              name: 'my_visualstudio',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 90 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function o (e, t) {
                        return (
                          -1 !== t.toLowerCase().indexOf('my.visualstudio.com') ||
                          -1 !== t.toLowerCase().indexOf('app.subscriptionsint.tfsallin.net') ||
                          -1 !== t.toLowerCase().indexOf('myvspreview.visualstudio.com')
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCce40d62e02bb4c7f9e2ecf104356409a-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL0cbbc969ad4c474c88cf0de84ac6dde7',
              name: 'Pre Loader',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 10 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCe273b42c34d5427cb02b2d6cd022cac2-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL42c81fa999f9402da27a8a46dbb3bc5b',
              name: 'teams_microsoft',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function o (e, t) {
                        return -1 !== t.toLowerCase().indexOf('teams.microsoft.com');
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCa326a70db2914317a87850e49628a5f9-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL8cfaf94722c646bb9452fbc133408ad9',
              name: 'Microsoft-365 - Iframe China | Office Direct Purchase | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      var e = window.location.href.toLowerCase();
                      if (
                        (-1 !== e.indexOf('microsoft.com') &&
                          -1 !== e.indexOf('/microsoft-365/tracking') &&
                          (-1 !== e.indexOf('ms.trans_market=CN') ||
                            -1 !== e.indexOf('ms.trans_market=cn') ||
                            -1 !== e.indexOf('ms.trans_market=HK') ||
                            -1 !== e.indexOf('ms.trans_market=hk') ||
                            -1 !== e.indexOf('ms.trans_market=TW') ||
                            -1 !== e.indexOf('ms.trans_market=tw')) &&
                          ((-1 !== e.indexOf('cfq7ttc0k62t') && -1 !== e.indexOf('0001')) ||
                            (-1 !== e.indexOf('cfq7ttc0k62t') && -1 !== e.indexOf('0003')) ||
                            (-1 !== e.indexOf('cfq7ttc0k62t') && -1 !== e.indexOf('0005')) ||
                            -1 !== e.indexOf('c57915a1-4a04-418c-a987-9bf7c2e88b99') ||
                            -1 !== e.indexOf('c0cfe51f-3381-430d-bff4-440db56755ce') ||
                            (-1 !== e.indexOf('cfq7ttc0k5j7') && -1 !== e.indexOf('0004')) ||
                            (-1 !== e.indexOf('cfq7ttc0k5j7') && -1 !== e.indexOf('0005')) ||
                            (-1 !== e.indexOf('cfq7ttc0k5j7') && -1 !== e.indexOf('0003')) ||
                            -1 !== e.indexOf('b8223c6c-5717-4564-8ed1-a46bf9b0e30a') ||
                            -1 !== e.indexOf('e3254b63-3660-4ed4-9bb8-5d8cbd3aaae0') ||
                            (-1 !== e.indexOf('cfq7ttc0k59v') && -1 !== e.indexOf('0006')) ||
                            (-1 !== e.indexOf('cfq7ttc0k59v') && -1 !== e.indexOf('0007')) ||
                            (-1 !== e.indexOf('cfq7ttc0k59v') && -1 !== e.indexOf('0005')) ||
                            -1 !== e.indexOf('4f7c74af-24cc-4cb4-b91f-4da6acf69e49') ||
                            -1 !== e.indexOf('a9fc988e-871c-4b5d-9c20-50b10ba5fef4') ||
                            -1 !== e.indexOf('03755f51-f0b2-4e3c-95d1-c0622175f51f') ||
                            -1 !== e.indexOf('0515af71-d224-41a6-b3fb-6760ea2b56cd') ||
                            -1 !== e.indexOf('09184d8c-f454-443e-90ed-1c2d2553c8d6') ||
                            -1 !== e.indexOf('0b914f7a-4751-4d09-a647-1f48bde091b9') ||
                            -1 !== e.indexOf('114292df-9e1f-468d-bc2b-6ad1c32d78a0') ||
                            -1 !== e.indexOf('1175f545-78bd-48c3-9b08-ca33af0dd0cd') ||
                            -1 !== e.indexOf('1d470951-18a8-4f98-b79e-d44323d27608') ||
                            -1 !== e.indexOf('1ef39d7e-f24c-410e-b100-36a217c1581f') ||
                            -1 !== e.indexOf('204a8e44-c924-4bfb-aa90-ddf42dc0e18a') ||
                            -1 !== e.indexOf('28504f49-3a7d-4f0f-8cfb-0febc4092c0a') ||
                            -1 !== e.indexOf('37435795-3259-4835-9e10-eec132c59add') ||
                            -1 !== e.indexOf('3c0ea64e-b600-4d14-9d58-a9f9e355bb0e') ||
                            -1 !== e.indexOf('4207c99f-1c18-41e2-9554-56a2ea747109') ||
                            -1 !== e.indexOf('475c6575-dc72-4789-8972-0dfe5c454c9a') ||
                            -1 !== e.indexOf('5957d37c-fa3e-45d2-bb53-855cc001fde7') ||
                            -1 !== e.indexOf('5aef4396-0dec-4b6d-9376-59f51a70d26c') ||
                            -1 !== e.indexOf('5dafc710-4c54-457f-b447-fa7a5a37de01') ||
                            -1 !== e.indexOf('5eebea96-b2c3-4c9d-acf3-7f17efeba383') ||
                            -1 !== e.indexOf('6204be22-8f76-4d22-a287-2bed4d12b1e2') ||
                            -1 !== e.indexOf('70caa448-d7d2-4631-bc59-570540f0eb9a') ||
                            -1 !== e.indexOf('76321138-e21f-4011-a051-b00eb400933d') ||
                            -1 !== e.indexOf('76980e76-c912-4931-a61e-05152fada429') ||
                            -1 !== e.indexOf('78876db1-983b-4d0e-8700-c3987dad4810') ||
                            -1 !== e.indexOf('7a797956-fa05-4735-b420-caaeac500ee5') ||
                            -1 !== e.indexOf('8288d81d-1a0a-44bf-9c90-8f560dc5d5bc') ||
                            -1 !== e.indexOf('84492f93-ce77-479c-9e0d-52f15135c21f') ||
                            -1 !== e.indexOf('9a3dc03c-d190-45e9-a49d-d8b0cd9307a7') ||
                            -1 !== e.indexOf('a4179d30-cc09-49f0-977e-dc2cb70b874f') ||
                            -1 !== e.indexOf('ab7c82a2-4fc8-432d-9145-76acdb41fbd8') ||
                            -1 !== e.indexOf('b26eda17-623a-49d1-b40c-c225f1f614e5') ||
                            -1 !== e.indexOf('b9b58589-80c1-43fb-aa79-47478880c19d') ||
                            -1 !== e.indexOf('c06dd105-c79b-44b2-a89e-7405456114a3') ||
                            -1 !== e.indexOf('c0a22c3d-262e-4fee-a4c3-23352fe1cc8e') ||
                            (-1 !== e.indexOf('cfq7ttc0k8r1') && -1 !== e.indexOf('0001')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8r1') && -1 !== e.indexOf('0003')) ||
                            (-1 !== e.indexOf('cfq7ttc0k59j') && -1 !== e.indexOf('0007')) ||
                            (-1 !== e.indexOf('cfq7ttc0k59j') && -1 !== e.indexOf('0008')) ||
                            (-1 !== e.indexOf('cfq7ttc0k5jn') && -1 !== e.indexOf('0006')) ||
                            (-1 !== e.indexOf('cfq7ttc0k5jn') && -1 !== e.indexOf('0007')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8r0') && -1 !== e.indexOf('0002')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8r0') && -1 !== e.indexOf('0003')) ||
                            -1 !== e.indexOf('cfq7ttc0k860') ||
                            -1 !== e.indexOf('cfq7ttc0k8mg') ||
                            -1 !== e.indexOf('cfq7ttc0k8r2') ||
                            (-1 !== e.indexOf('cfq7ttc0k7ch') && -1 !== e.indexOf('0003')) ||
                            (-1 !== e.indexOf('cfq7ttc0k7cj') && -1 !== e.indexOf('0002')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8v3') && -1 !== e.indexOf('0003')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8v3') && -1 !== e.indexOf('0004')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8v2') && -1 !== e.indexOf('0001')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8v2') && -1 !== e.indexOf('0003')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8v1') && -1 !== e.indexOf('0001')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8v1') && -1 !== e.indexOf('0003')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8v0') && -1 !== e.indexOf('0001')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8v0') && -1 !== e.indexOf('0004')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8v0') && -1 !== e.indexOf('0003')) ||
                            (-1 !== e.indexOf('cfq7ttc0k5j0') && -1 !== e.indexOf('0003')) ||
                            (-1 !== e.indexOf('cfq7ttc0k5j0') && -1 !== e.indexOf('0004')) ||
                            (-1 !== e.indexOf('cfq7ttc0k59r') && -1 !== e.indexOf('0003')) ||
                            (-1 !== e.indexOf('cfq7ttc0k59r') && -1 !== e.indexOf('0004')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8mg') && -1 !== e.indexOf('0001')) ||
                            (-1 !== e.indexOf('cfq7ttc0k8mg') && -1 !== e.indexOf('0003')) ||
                            -1 !== e.indexOf('dfbbaca3-91f2-40de-b17f-1ee556338d81') ||
                            -1 !== e.indexOf('e9251d03-0fe3-42d7-847a-c2fe1c84542e') ||
                            -1 !== e.indexOf('eddd8573-47a1-4d8c-a19f-1e3bd2f64227') ||
                            -1 !== e.indexOf('ef671b57-7eec-4464-a033-7668be22d9ba') ||
                            -1 !== e.indexOf('f54b2a20-3bc2-4334-b1d1-b36fe38e122c') ||
                            -1 !== e.indexOf('f6db649c-a505-4c1c-a96e-23a1edb1b74f') ||
                            -1 !== e.indexOf('6e94b56f-c6cd-4d5d-9769-ef87e3bd523b') ||
                            -1 !== e.indexOf('5c6e8b8c-307d-49f2-8431-5922d8ce93fd') ||
                            -1 !== e.indexOf('cef7a763-4fe3-4a2c-858e-cb2d1c057c06') ||
                            -1 !== e.indexOf('575b1b91-8034-44c0-98a0-443c888b9924') ||
                            -1 !== e.indexOf('9df77af9-daae-4d51-8e0e-eeeadd4866b8') ||
                            -1 !== e.indexOf('b03ad9b6-42e5-4899-9a84-f7666ded99a1') ||
                            -1 !== e.indexOf('28504f49-3a7d-4f0f-8cfb-0febc4092c0a') ||
                            -1 !== e.indexOf('a12e069f-9543-497a-aad6-06f84cf77ad3') ||
                            -1 !== e.indexOf('a22f31c9-be04-4fc9-8939-1010e1a01b43') ||
                            -1 !== e.indexOf('96be3695-faf7-44bb-91fb-0e0eaa48950f') ||
                            -1 !== e.indexOf('653652d2-4426-4a11-9bb0-76050d7d81bc') ||
                            -1 !== e.indexOf('b5fea8c8-5f2e-4f44-9bb5-ef28092d12bb') ||
                            -1 !== e.indexOf('2b2e740e-87d8-4779-864f-fb0b786aadef') ||
                            -1 !== e.indexOf('830ca699-76dd-4750-8933-086be27eabea'))) ||
                        (-1 !== e.indexOf('products.office.com') &&
                          -1 !== e.indexOf('/en/tracking'))
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC25083f8c467c4a46b6245c5f42907cc8-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL25b9f26cbaf2418bbf97bb6685b1b086',
              name: 'transform.microsoft.com',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('dtcweb-qa.azurewebsites.net') ||
                        -1 !== window.location.href.indexOf('roi-prod.azurewebsites.net') ||
                        -1 !== window.location.href.indexOf('roi.transform.microsoft.com')
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC39614d55628f445d88de3bba1e8b3c00-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL4c33ade3e6e5436f9d2530275bce6a67',
              name: 'teamsPOC_Signin_Up_Click',
              events: [
                {
                  modulePath: 'core/src/lib/events/click.js',
                  settings: {
                    elementSelector:
                      'a[href*="https://go.microsoft.com/fwlink/p/?LinkID=2123761"]',
                    bubbleFireIfParent: !0,
                    bubbleFireIfChildFired: !0,
                  },
                  ruleOrder: 50,
                },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('www.microsoft.com') &&
                        -1 !== window.location.href.indexOf('microsoft-365/microsoft-teams')
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !1,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCd71b2fe84f2d44529518aefade3822f3-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL75080feb5ef74fd499e7c5a4e9971525',
              name: 'Microsoft-365 Iframe | Office Direct Purchase | KWIF_new',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('microsoft.com') &&
                          -1 !== window.location.href.indexOf('/microsoft-365/tracking') &&
                          ((-1 !== window.location.href.indexOf('cfq7ttc0k62t') &&
                            -1 !== window.location.href.indexOf('0001')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k62t') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k62t') &&
                              -1 !== window.location.href.indexOf('0005')) ||
                            -1 !==
                              window.location.href.indexOf(
                                'c57915a1-4a04-418c-a987-9bf7c2e88b99'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'c0cfe51f-3381-430d-bff4-440db56755ce'
                              ) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k5j7') &&
                              -1 !== window.location.href.indexOf('0004')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k5j7') &&
                              -1 !== window.location.href.indexOf('0005')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k5j7') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            -1 !==
                              window.location.href.indexOf(
                                'b8223c6c-5717-4564-8ed1-a46bf9b0e30a'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'e3254b63-3660-4ed4-9bb8-5d8cbd3aaae0'
                              ) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k59v') &&
                              -1 !== window.location.href.indexOf('0006')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k59v') &&
                              -1 !== window.location.href.indexOf('0007')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k59v') &&
                              -1 !== window.location.href.indexOf('0005')) ||
                            -1 !==
                              window.location.href.indexOf(
                                '4f7c74af-24cc-4cb4-b91f-4da6acf69e49'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'a9fc988e-871c-4b5d-9c20-50b10ba5fef4'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '03755F51-F0B2-4E3C-95D1-C0622175F51F'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '0515AF71-D224-41A6-B3FB-6760EA2B56CD'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '09184D8C-F454-443E-90ED-1C2D2553C8D6'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '0B914F7A-4751-4D09-A647-1F48BDE091B9'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '114292DF-9E1F-468D-BC2B-6AD1C32D78A0'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '1175F545-78BD-48C3-9B08-CA33AF0DD0CD'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '1D470951-18A8-4F98-B79E-D44323D27608'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '1EF39D7E-F24C-410E-B100-36A217C1581F'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '204A8E44-C924-4BFB-AA90-DDF42DC0E18A'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '28504F49-3A7D-4F0F-8CFB-0FEBC4092C0A'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '37435795-3259-4835-9E10-EEC132C59ADD'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '3C0EA64E-B600-4D14-9D58-A9F9E355BB0E'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '4207C99F-1C18-41E2-9554-56A2EA747109'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '475C6575-DC72-4789-8972-0DFE5C454C9A'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '5957D37C-FA3E-45D2-BB53-855CC001FDE7'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '5AEF4396-0DEC-4B6D-9376-59F51A70D26C'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '5DAFC710-4C54-457F-B447-FA7A5A37DE01'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '5EEBEA96-B2C3-4C9D-ACF3-7F17EFEBA383'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '6204BE22-8F76-4D22-A287-2BED4D12B1E2'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '70CAA448-D7D2-4631-BC59-570540F0EB9A'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '76321138-E21F-4011-A051-B00EB400933D'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '76980E76-C912-4931-A61E-05152FADA429'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '78876DB1-983B-4D0E-8700-C3987DAD4810'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '7A797956-FA05-4735-B420-CAAEAC500EE5'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '8288D81D-1A0A-44BF-9C90-8F560DC5D5BC'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '84492F93-CE77-479C-9E0D-52F15135C21F'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '9A3DC03C-D190-45E9-A49D-D8B0CD9307A7'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'A4179D30-CC09-49F0-977E-DC2CB70B874F'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'AB7C82A2-4FC8-432D-9145-76ACDB41FBD8'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'B26EDA17-623A-49D1-B40C-C225F1F614E5'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'B9B58589-80C1-43FB-AA79-47478880C19D'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'C06DD105-C79B-44B2-A89E-7405456114A3'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'C0A22C3D-262E-4FEE-A4C3-23352FE1CC8E'
                              ) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8r1') &&
                              -1 !== window.location.href.indexOf('0001')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8r1') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k59j') &&
                              -1 !== window.location.href.indexOf('0007')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k59j') &&
                              -1 !== window.location.href.indexOf('0008')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k5jn') &&
                              -1 !== window.location.href.indexOf('0006')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k5jn') &&
                              -1 !== window.location.href.indexOf('0007')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8r0') &&
                              -1 !== window.location.href.indexOf('0002')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8r0') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            -1 !== window.location.href.indexOf('cfq7ttc0k860') ||
                            -1 !== window.location.href.indexOf('cfq7ttc0k8mg') ||
                            -1 !== window.location.href.indexOf('cfq7ttc0k8r2') ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k7ch') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k7cj') &&
                              -1 !== window.location.href.indexOf('0002')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8v3') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8v3') &&
                              -1 !== window.location.href.indexOf('0004')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8v2') &&
                              -1 !== window.location.href.indexOf('0001')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8v2') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8v1') &&
                              -1 !== window.location.href.indexOf('0001')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8v1') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8v0') &&
                              -1 !== window.location.href.indexOf('0001')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8v0') &&
                              -1 !== window.location.href.indexOf('0004')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8v0') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k5j0') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k5j0') &&
                              -1 !== window.location.href.indexOf('0004')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k59r') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k59r') &&
                              -1 !== window.location.href.indexOf('0004')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8mg') &&
                              -1 !== window.location.href.indexOf('0001')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8mg') &&
                              -1 !== window.location.href.indexOf('0003')) ||
                            -1 !==
                              window.location.href.indexOf(
                                'DFBBACA3-91F2-40DE-B17F-1EE556338D81'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'E9251D03-0FE3-42D7-847A-C2FE1C84542E'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'EDDD8573-47A1-4D8C-A19F-1E3BD2F64227'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'EF671B57-7EEC-4464-A033-7668BE22D9BA'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'F54B2A20-3BC2-4334-B1D1-B36FE38E122C'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'F6DB649C-A505-4C1C-A96E-23A1EDB1B74F'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '6e94b56f-c6cd-4d5d-9769-ef87e3bd523b'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '5c6e8b8c-307d-49f2-8431-5922d8ce93fd'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'cef7a763-4fe3-4a2c-858e-cb2d1c057c06'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '575b1b91-8034-44c0-98a0-443c888b9924'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '9df77af9-daae-4d51-8e0e-eeeadd4866b8'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'b03ad9b6-42e5-4899-9a84-f7666ded99a1'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '28504f49-3a7d-4f0f-8cfb-0febc4092c0a'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'a12e069f-9543-497a-aad6-06f84cf77ad3'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'a22f31c9-be04-4fc9-8939-1010e1a01b43'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '96be3695-faf7-44bb-91fb-0e0eaa48950f'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '653652d2-4426-4a11-9bb0-76050d7d81bc'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'b5fea8c8-5f2e-4f44-9bb5-ef28092d12bb'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '2b2e740e-87d8-4779-864f-fb0b786aadef'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '830ca699-76dd-4750-8933-086be27eabea'
                              ))) ||
                        (-1 !== window.location.href.indexOf('products.office.com') &&
                          -1 !== window.location.href.indexOf('/en/tracking'))
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC3030977fcd90460085a604ace6c138c0-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RLb5e923c90fa74dafa4d50b20587a92db',
              name: 'Microsoft365blog_Clicktale_ProdS',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/landingPage.js',
                  settings: {
                    page: 'https://www.microsoft.com/en-us/microsoft-365/blog/',
                    pageIsRegex: !0,
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC74ab54bc5a944465a1492dc9590e1c9d-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL4b4a45976c38423080b6bde0ccf6cc72',
              name: 'Together Resilience | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('www.microsoft.com') &&
                        (-1 !== window.location.href.indexOf('/together') ||
                          -1 !== window.location.href.indexOf('/resilience'))
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC6593d7ec2bbd406f823b698e64e29349-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL1bb56436deb449d7a155cf7d7b31e8ae',
              name: 'IMC | PageLoad/Lead - 1P/3P | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !==
                        window.location.href.toLocaleLowerCase().indexOf('info.microsoft.com')
                      )
                        return !0;
                    },
                  },
                  timeout: 20000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCd946a892284d464f9c523690da9c2db9-source.min.js',
                    language: 'html',
                    isExternal: !0,
                  },
                },
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !1,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC759185461b714770809d8df08c968701-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL4c215b618c2e4fdeaefc3c4c4fa7ebd1',
              name: 'applicationInnovationPlanner',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function o (e, t) {
                        return (
                          -1 !==
                            t
                              .toLowerCase()
                              .indexOf('applicationinnovationplanner.azurewebsites.net') ||
                          -1 !==
                            t
                              .toLowerCase()
                              .indexOf('applicationinnovationplanner-uat.azurewebsites.net')
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCe95a8969877d453f8e72b72515a4c7d9-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL689c9eaba266422ab962f47e62aded0f',
              name: 'microsoft365',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !(
                          (-1 === t.toLowerCase().indexOf('www.microsoft.com') ||
                            !o.match(
                              /^(\/([a-z]{2}-[a-z]{2}|[a-z]{2}|[a-z]{2}-[a-z]{4}-[a-z]{2})\/microsoft-365)/i
                            ) ||
                            -1 !== o.toLowerCase().indexOf('/success/') ||
                            -1 !== o.toLowerCase().indexOf('/blog/') ||
                            -1 !== o.toLowerCase().indexOf('/tracking/') ||
                            -1 !== o.toLowerCase().indexOf('/microsoft-365/buy') ||
                            -1 !== window.location.href.indexOf('/microsoft-365/try') ||
                            o.match(/\/success(?:$|\/)?$/i)) &&
                          -1 === t.toLowerCase().indexOf('od.marketingsites-ppe.microsoft.com') &&
                          -1 === t.toLowerCase().indexOf('marketingsites-prod.microsoft.com')
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCcfee65319b4d49b28a7ba481b3d5d868-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL8956692e9fdf49beadbaa0b4c1c61944',
              name: 'signup.azure.com',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function o (e, t) {
                        return (
                          -1 !== t.toLowerCase().indexOf('signup.azure.com') ||
                          -1 !== t.toLowerCase().indexOf('signup-staging.azure.com') ||
                          -1 !== t.toLowerCase().indexOf('signup-local.azure.com')
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC51ae71a8d8ac4762a25f3da68839ab24-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLb1a7018235804c7ebb043a069b842d3d',
              name: 'customers_microsoft',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function o (e, t) {
                        return (
                          -1 !==
                            t.toLowerCase().indexOf('advocacypublic.clouddamppe.microsoft.com') ||
                          -1 !==
                            t
                              .toLowerCase()
                              .indexOf('customers-ci.customers-int.p.azurewebsites.net') ||
                          -1 !== t.toLowerCase().indexOf('customers.microsoft.com')
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC0fb457630aaf4b31bdd76c8a80d2ae45-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL027180c2811a405f9c10cf13218109ec',
              name: 'Microsoft Events | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('preprod-microsoft.certain.com') ||
                        -1 !== window.location.href.indexOf('www.microsoftevents.com')
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC71b8cef6072e422ca2498bda7bf14664-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL912238d6aad542eda12b3a98e8a98446',
              name: 'Impact Radius_HUP_ALL_prodS',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (
                        -1 < window.location.pathname.toLowerCase().indexOf('/home-use-program') &&
                        -1 < window.location.host.toLowerCase().indexOf('www.microsoft.com')
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCe5ead177255b42818ee7ac15395d5c16-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLae82caa4886546018a51ed2d0fdefffc',
              name: 'sqlServer',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !!(
                          (-1 !== t.toLowerCase().indexOf('www.microsoft.com') &&
                            o.match(/((\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)(sql-server))/i)) ||
                          (-1 !== t.toLowerCase().indexOf('cmspreview2.corp.microsoft.com') &&
                            o.match(/((\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)(sql-server))/i))
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC3f30405a7c044f549b8f37d2d962b897-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLc5e9134fba024357a7d30100b848f0ce',
              name: 'MSSecurityBlog | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('www.microsoft.com') &&
                        -1 !== window.location.href.indexOf('security/blog')
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC5eb5e08515914221ad9b4c3856d3596d-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL57a710f7b6e244e5865c48b59a20accf',
              name: 'WindowsForBusiness2 | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('www.microsoft.com') &&
                        -1 !== window.location.href.indexOf('/microsoft-365/windows')
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCf26875c27fde432dac805bac46198976-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL0aec46ef3d47495e97283500d8057119',
              name: 'trustCenter',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !!(
                          (-1 !== t.toLowerCase().indexOf('www.microsoft.com') &&
                            o.match(/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/i) &&
                            -1 !== o.toLowerCase().indexOf('trustcenter')) ||
                          (-1 !== t.toLowerCase().indexOf('cmspreview2.corp.microsoft.com') &&
                            o.match(/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/i) &&
                            -1 !== o.toLowerCase().indexOf('trustcenter'))
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC207377b41def4672baacbae321fcc71e-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL9f15a2b3bc774dc7bf14b2feb079a649',
              name: 'dynamics365',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !(
                          -1 === t.toLowerCase().indexOf('www.microsoft.com') ||
                          !o.match(/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)(dynamics365)/i)
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC1dc6e22934aa43c292a563b2c78c4a5f-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLd1b04d7f1c0c4b6f93911b41df25a3f0',
              name: 'test_directory',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return !1;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCf1bdd2a9fd9c48569a4451e7608bfebc-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLb3f89bfc0bb3493ebd41027bf5226766',
              name: 'Resilience - Any Engagement',
              events: [
                {
                  modulePath: 'core/src/lib/events/click.js',
                  settings: {
                    elementSelector: 'a',
                    bubbleFireIfParent: !0,
                    bubbleFireIfChildFired: !0,
                  },
                  ruleOrder: 50,
                },
                {
                  modulePath: 'core/src/lib/events/click.js',
                  settings: {
                    elementSelector: '.[*ow-padding-right-1-col]',
                    bubbleFireIfParent: !0,
                    bubbleFireIfChildFired: !0,
                  },
                  ruleOrder: 50,
                },
                {
                  modulePath: 'core/src/lib/events/click.js',
                  settings: {
                    elementSelector: '.onegdcweb-herowithquotes',
                    bubbleFireIfParent: !0,
                    bubbleFireIfChildFired: !0,
                  },
                  ruleOrder: 50,
                },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        !(
                          (-1 === window.location.href.indexOf('www.microsoft.com') &&
                            -1 ===
                              window.location.href.indexOf('marketingsites-prod.microsoft.com')) ||
                          -1 === window.location.href.indexOf('resilience') ||
                          (-1 === window.location.href.indexOf('remote-working-solutions') &&
                            -1 ===
                              window.location.href.indexOf('remote-security-access-solutions') &&
                            -1 === window.location.href.indexOf('crisis-response-solutions') &&
                            -1 === window.location.href.indexOf('sales-and-service-solutions') &&
                            -1 === window.location.href.indexOf('remote-development-solutions') &&
                            -1 === window.location.href.indexOf('cloud-migration-solutions') &&
                            -1 === window.location.href.indexOf('agile-supply-chain-solutions') &&
                            -1 ===
                              window.location.href.indexOf(
                                'business-insights-analytics-solutions'
                              ) &&
                            -1 === window.location.href.indexOf('locales') &&
                            -1 === window.location.href.indexOf('return-to-workplace') &&
                            -1 ===
                              window.location.href.indexOf('adaptation-and-automation-solutions'))
                        )
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !1,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCabddfc9b55ee471c9d1c169381198041-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL02a291913d9447dab7e298a948c3af34',
              name: 'visualStudioMarketplace',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function o (e, t) {
                        return (
                          -1 !== t.toLowerCase().indexOf('marketplace.visualstudio.com') ||
                          -1 !== t.toLowerCase().indexOf('marketplace.vsallin.net')
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC742ef14b25b6448b85ec2e1702596cc8-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL495a1cd17e4e47b595476fd209066e04',
              name: 'AIStories | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (-1 !== window.location.href.indexOf('aistories.microsoft.com'))
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC3eea7faa7f584783a1b84e49c44fb194-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLd5f8908d29c34eacb8d3b1bc90ce1647',
              name: 'security',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !(
                          -1 === t.toLowerCase().indexOf('www.microsoft.com') ||
                          !o.match(/((\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)(security))/i)
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC0c9427f563df4e9faa21859f194918a1-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL08915ffbc7014adf850b98e776e92173',
              name: 'windowsForBusiness',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !(
                          -1 === t.toLowerCase().indexOf('www.microsoft.com') ||
                          !o.match(/((\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)(windowsforbusiness))/i) ||
                          -1 !== o.toLowerCase().indexOf('microsoft-365/windows')
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCdf98cc0b3ec24193b0a2061ca8240a06-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL16fd2f90e07d4e6498d62d76b1437e33',
              name: 'cloudblogs_microsoft',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function o (e, t) {
                        return (
                          -1 !== t.toLowerCase().indexOf('cloudblogs.microsoft.com') ||
                          -1 !== t.toLowerCase().indexOf('mscp.10uplabs.com')
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCa879c16d9bd84227b15e5f8942ba4e70-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL11c46b599702446c9ebef16caee78dc4',
              name: 'fastTrack',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !!(
                          -1 !== t.toLowerCase().indexOf('uat3fasttrack.azurewebsites.net') ||
                          -1 !== t.toLowerCase().indexOf('fasttrack.microsoft.com') ||
                          -1 !== t.toLowerCase().indexOf('intfasttrack.azurewebsites.net') ||
                          (-1 !== t.toLowerCase().indexOf('www.microsoft.com') &&
                            o.match(
                              /^(\/([a-z]{2}-[a-z]{2}|[a-z]{2}|[a-z]{2}-[a-z]{4}-[a-z]{2})\/fasttrack)/i
                            ))
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC7bc5d935beb044b7876962df54013f5d-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL58967a15b6474346a15dd8dba9273936',
              name: 'UTF Loader | PROD',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      var r = function (e, t) {
                        return -1 === e.indexOf('blueprint=1') && -1 === t.indexOf('cfDebug=');
                      };
                      return (window.oaLoadRuleProd = function c (e, t, o, n, i) {
                        return !!r(n, i);
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 20000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC6e3e8b1d782343b1bb26a19a4cb6309f-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 20000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL44beee1d7fd043d88380c727c536719a',
              name: 'Microsoft-365 | Family Safety | Get Started for Free Click',
              events: [
                {
                  modulePath: 'core/src/lib/events/click.js',
                  settings: {
                    elementSelector:
                      'a.c-button.f-primary.ow-slide-in.ow-slide-in-2.xs-ow-mr-0.ow-mt-25.ow-txt-trans-upper',
                    bubbleFireIfParent: !0,
                    bubbleFireIfChildFired: !0,
                  },
                  ruleOrder: 50,
                },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('www.microsoft.com') &&
                        -1 !== window.location.href.indexOf('microsoft-365/family-safety')
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !1,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCc11698da5ce64b7fb8b71d499a6448c4-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLa5b5f760395544f7bcc336511cac954a',
              name: 'content_microsoft',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !!(
                          -1 !== t.toLowerCase().indexOf('content.microsoft.com') ||
                          (-1 !== t.toLowerCase().indexOf('microsoft.postclickmarketing.com') &&
                            o.match(/\/build\/office-365\/?/i))
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC48f896b6ba7b4369af78a9967fa7a44d-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL59fbe03e01f14db4abef440927f582e9',
              name: 'Microsoft-365 Blog | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 100 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('www.microsoft.com') &&
                          -1 !== window.location.href.indexOf('microsoft-365/blog') &&
                          -1 === window.location.href.indexOf('success')) ||
                        (-1 !== window.location.href.indexOf('www.microsoft.com') &&
                          -1 !== window.location.href.indexOf('attributes-successful-teams'))
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC847a53f129e148359c20bbd14ab50f12-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL0d1d5530668e4e619a34d0de9b292cad',
              name: 'AIDemos | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('microsoft.com') &&
                        -1 !== window.location.href.indexOf('aidemos.microsoft.com')
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCefefde563ba44eb3b194cef204e49295-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLa28c451d32fe4767ac74df7bc9d2b47c',
              name: 'dataModernizationPlanner',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function o (e, t) {
                        return (
                          -1 !==
                          t.toLowerCase().indexOf('datamodernizationplanner.azurewebsites.net')
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCca164056e45d4f6a80c3152a0a49de35-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLef4737fb38b942dba4c7825298059699',
              name:
                '[Office Web Team] LiveEngage | AddThis | products.office.com | Thought Leadership',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      function i (e, t) {
                        return (
                          -1 !== e.indexOf(o) &&
                          -1 === t.toLowerCase().indexOf('en/tracking') &&
                          null !== h &&
                          -1 !== h.indexOf(l) &&
                          null !== p &&
                          -1 !== p.indexOf(m)
                        );
                      }
                      function r (e) {
                        return (
                          -1 !== e.indexOf('cmspreview2.corp.microsoft.com') &&
                          null !== w &&
                          -1 !== w.indexOf(o) &&
                          null !== p &&
                          -1 !== p.indexOf(l) &&
                          null !== g &&
                          -1 !== g.indexOf(m)
                        );
                      }
                      function c (e) {
                        for (var t = 1, o = arguments.length; t < o; t++)
                          if (-1 !== e.indexOf(arguments[t])) return !0;
                        return !1;
                      }
                      function a (e) {
                        return (
                          -1 !== e.indexOf(t) &&
                          null !== h &&
                          -1 !== h.indexOf(n) &&
                          null !== p &&
                          -1 !== p.indexOf(l) &&
                          null !== g &&
                          -1 !== g.indexOf('small-business-solutions')
                        );
                      }
                      function s (e) {
                        return (
                          -1 !== e.indexOf(t) &&
                          ((null !== p &&
                            -1 !== p.indexOf(l) &&
                            null !== g &&
                            (-1 !== g.indexOf('microsoft-365-proplus') ||
                              -1 !== g.indexOf('microsoft-365-app-for-enterprise')) &&
                            null !== x &&
                            -1 !== x.indexOf('guided-tour')) ||
                            (null !== p &&
                              -1 !== p.indexOf('microsoft-teams') &&
                              null !== g &&
                              -1 !== g.indexOf('art-of-teamwork-guide')))
                        );
                      }
                      function d (e) {
                        return (
                          -1 !== e.indexOf(t) &&
                          null != h &&
                          -1 !== h.indexOf(n) &&
                          null != p &&
                          -1 !== p.indexOf(b) &&
                          null != g
                        );
                      }
                      function f (e) {
                        return (
                          (-1 !== e.indexOf(u) ||
                            -1 !== e.indexOf('od.marketingsites-ppe.microsoft.com')) &&
                          null != h &&
                          -1 !== h.indexOf(n) &&
                          null != p &&
                          -1 !== p.indexOf(b) &&
                          null != g
                        );
                      }
                      var o = 'products.office.com',
                        t = 'www.microsoft.com',
                        u = 'onerf.dev.microsoft.com',
                        n = 'microsoft-365',
                        l = 'business',
                        m = 'articles',
                        b = 'growth-center',
                        e = (function () {
                          for (
                            var e = window.location.pathname.split('/'), t = [], o = 0;
                            o < e.length;
                            o++
                          ) {
                            var n = e[o];
                            null !== n && 0 !== n.length && t.push(n);
                          }
                          return t;
                        })(),
                        w = e && e[0] !== undefined ? e[0].toLocaleLowerCase() : null,
                        h = e && e[1] !== undefined ? e[1].toLocaleLowerCase() : null,
                        p = e && e[2] !== undefined ? e[2].toLocaleLowerCase() : null,
                        g = e && e[3] !== undefined ? e[3].toLocaleLowerCase() : null,
                        x = e && e[4] !== undefined ? e[4].toLocaleLowerCase() : null;
                      return (window.oaLoadRuleProd = function O (e, t, o) {
                        var n = t.toLowerCase();
                        return (
                          i(n, o) ||
                          r(n) ||
                          c(
                            n,
                            u,
                            'int.onerf.microsoft.com',
                            'marketingsites-prod.microsoft.com',
                            'marketingsites-ppe.microsoft.com',
                            'marketingsites-prod.office.com',
                            'marketingsites-ppe.office.com'
                          ) ||
                          a(n) ||
                          s(n) ||
                          d(n) ||
                          f(n)
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCf33a57f3d9174c129230681203b1e450-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL5d6eb023d1f74deda797b748adb46ab1',
              name: 'POC',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return (
                          (e = e && e.toLowerCase ? e.toLowerCase() : e),
                          (t = t && t.toLowerCase ? t.toLowerCase() : t),
                          (o = o && o.toLowerCase ? o.toLowerCase() : o),
                          (-1 !== e.indexOf('products.office.com') &&
                            -1 === o.indexOf('en/tracking')) ||
                            (-1 !== t.indexOf('cmspreview2.corp.microsoft.com') &&
                              -1 !== o.indexOf('products.office.com')) ||
                            (-1 !== t.indexOf('products.ppe.onerf.office.com') &&
                              -1 === o.indexOf('en/tracking')) ||
                            (-1 !== t.indexOf('onerf.dev.microsoft.com') &&
                              -1 === o.indexOf('en/tracking'))
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC0574821be41741c7b6cb2f5c6c36f6af-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL133719d7fb414696826c60425ec9bee1',
              name: 'Signup.azure.com_SubscriptionProvisioned | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('signup.azure.com') ||
                        -1 !== window.location.href.indexOf('signup-local.azure.com') ||
                        -1 !== window.location.href.indexOf('signup-staging.azure.com')
                      )
                        return !0;
                    },
                  },
                  timeout: 8000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC9ec0eb6b7e0e4c55b6d0fee9d2fc4656-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 20000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL9ea5acf313bd413fbd511724ae620a7b',
              name: 'MyBuild Techcommunity | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('microsoft.com') &&
                        -1 !== window.location.href.indexOf('mybuild') &&
                        -1 !== window.location.href.indexOf('techcommunity')
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCdd1fa0dc1505419d8ed0b689583baa6b-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL6a364d9a40b3492eacd94651ce51c649',
              name: 'Microsoft365 Iframe | Impact Radius | KWIF_New',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('microsoft.com') &&
                          -1 !== window.location.href.indexOf('/microsoft-365/tracking')) ||
                        (-1 !== window.location.href.indexOf('products.office.com') &&
                          -1 !== window.location.href.indexOf('/en/tracking'))
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCff04964aaae245079b873459a7ea6ac1-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL410b197b0b20495f9abc5d0b94159dde',
              name: 'Microsoft Industry | KWIF ',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('www.microsoft.com') &&
                          -1 !== window.location.href.indexOf('/industry') &&
                          -1 === window.location.href.indexOf('trust-center') &&
                          -1 === window.location.href.indexOf('/sql-server') &&
                          -1 === window.location.href.indexOf('microsoft-365/blog') &&
                          -1 === window.location.href.indexOf('microsoft-365/growth-center') &&
                          -1 === window.location.href.indexOf('/security/partnerships')) ||
                        (-1 !==
                          window.location.href.indexOf('marketingsites-prod.microsoft.com') &&
                          -1 !== window.location.href.indexOf('industry'))
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC11024386107e4e9fae81f767917d2cd3-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL85d9bb6ea44b4ed38116bd4c79be37d4',
              name: 'ImpactRadius | Data Layer | SKUs List',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 5 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRuleProd = function n (e, t, o) {
                        return (
                          -1 !== e.toLowerCase().indexOf('products.office.com') ||
                          (-1 !== t.toLowerCase().indexOf('cmspreview2.corp.microsoft.com') &&
                            -1 !== o.toLowerCase().indexOf('products.office.com'))
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC7dbd808a17a94fcfa6c078f38c514331-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL489700a1a4954b819b86a45e43a3413d',
              name: 'Microsoft-365 Iframe | PowerAppsPurchase | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('microsoft.com') &&
                          -1 !== window.location.href.indexOf('/microsoft-365/tracking') &&
                          (-1 !==
                            window.location.href.indexOf('d78c830e-8fc4-415d-901e-7ad47d469b3f') ||
                            -1 !== window.location.href.indexOf('CFQ7TTC0KP0P') ||
                            -1 !== window.location.href.indexOf('PowerAppsSvc') ||
                            -1 !== window.location.href.indexOf('CFQ7TTC0KP0N'))) ||
                        (-1 !== window.location.href.indexOf('products.office.com') &&
                          -1 !== window.location.href.indexOf('/en/tracking'))
                      )
                        return !0;
                    },
                  },
                  timeout: 20000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCf8f5a5096cbb4311bfde7ef401dd366c-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 20000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL364fb4d696d04e2eaf1d44fda91a4170',
              name: 'ROC | PageLoad/Lead - 1P/3P | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function t (e) {
                        return -1 !== e.toLowerCase().indexOf('resources.office.com');
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 20000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCa632b78ed22241d1b41ffeb36192f981-source.min.js',
                    language: 'html',
                    isExternal: !0,
                  },
                  timeout: 20000,
                  delayNext: !0,
                },
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC2b29af8180e34260867929e14f67f6ce-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL7c7bb8481195451e9f4e00fd21e26a18',
              name: 'visualstudioManage',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function o (e, t) {
                        return -1 !== t.toLowerCase().indexOf('manage.visualstudio.com');
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC47e70cadc3114bd2b7c02f66bed20a43-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL2c343605666c4288a09ed684cf0c51de',
              name: 'boards.microsoft.com | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function o (e, t) {
                        return -1 !== t.toLowerCase().indexOf('show.folloze.com');
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC184c747dbde64dd8a70e1d16eddd7e28-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLc87a6078edd14193a60ff1a1018800b6',
              name: '[Office Web Team] Loading WebBlends',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCa0059efdf53d4c19be7d008a0a7abf0a-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL526a2247c07d4f6d9ec48251ae3a049e',
              name: 'Microsoft-365 Iframe | Dynamics365 Purchase | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('microsoft.com') &&
                          -1 !== window.location.href.indexOf('/microsoft-365/tracking') &&
                          (-1 !==
                            window.location.href.indexOf('95142fe2-f5e1-4585-88c0-f2d0f0f84f35') ||
                            -1 !==
                              window.location.href.indexOf(
                                '7d99fd82-7195-410d-a9d0-2d3a144d8606'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '4fe1cd4d-88c3-4a81-8235-0ba2b49bba9f'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '39ce6204-6bb5-4ff1-a2a7-3b03c53731c1'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '238e2f8d-e429-4035-94db-6926be4ffe7b'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'e13f604b-6bf7-4b10-bd47-0c92055879b9'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '1508ad2d-5802-44e6-bfe8-6fb65de63d28'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '61e6bd70-fbdb-4deb-82ea-912842f39431'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '036c2481-aa8a-47cd-ab43-324f0c157c2d'
                              ))) ||
                        (-1 !== window.location.href.indexOf('products.office.com') &&
                          -1 !== window.location.href.indexOf('/en/tracking'))
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC3e26111fc0264c949f1acb189832b6f2-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLab77bcf657b346888a169e671c83bb90',
              name: '[Office Web Team] TempStyle | microsoft-365',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCe86a4eb0fcba478dbcc7216ce8374629-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL92eda9da60d0481f9730b28174c8d964',
              name: 'Microsoft-365 Iframe | PowerBIPurchase | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('microsoft.com') &&
                          -1 !== window.location.href.indexOf('/microsoft-365/tracking') &&
                          (-1 !== window.location.href.indexOf('CFQ7TTC0L3PB') ||
                            -1 !== window.location.href.indexOf('CFQ7TTC0KP0N'))) ||
                        (-1 !== window.location.href.indexOf('products.office.com') &&
                          -1 !== window.location.href.indexOf('/en/tracking'))
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCc84539f6f2b04a258f63df0b9a8c80ad-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL659180f48e1f434787203fef6483eb02',
              name: 'Microsoft-365 Iframe | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('www.microsoft.com') &&
                        -1 !== window.location.href.indexOf('/en-us/microsoft-365/tracking')
                      )
                        return !0;
                    },
                  },
                  timeout: 20000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC9c1884533d0441cb861efbf0192860a9-source.min.js',
                    language: 'html',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL62c0c94245b14fa3ac52bc5cda62c0b0',
              name: 'Business Voice Value Calculator | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('www.microsoft.com') &&
                          -1 !==
                            window.location.href.indexOf('business-voice-value-calculator')) ||
                        -1 !== window.location.href.indexOf('smb-uat.azurewebsites.net')
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCf5621867110140088c22cb206b4face4-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLbebdd3334d974f1eb1e4acadba39d53c',
              name: 'Microsoft-365 Iframe | PowerAppsTrial | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('microsoft.com') &&
                          -1 !== window.location.href.indexOf('/microsoft-365/tracking') &&
                          (-1 !==
                            window.location.href.indexOf('83d3609a-14c1-4fc2-a18e-0f5ca7047e46') ||
                            -1 !==
                              window.location.href.indexOf(
                                'd3f087f5-d71d-4930-a6f2-36e51743efe4'
                              ))) ||
                        (-1 !== window.location.href.indexOf('products.office.com') &&
                          -1 !== window.location.href.indexOf('/en/tracking'))
                      )
                        return !0;
                    },
                  },
                  timeout: 20000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC102c5cc14ae943bfad3ca2fce9edc9a7-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RLde08d54435244f06b96e9e48bd4191bb',
              name: 'UTF Loader | DEV',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      var r = function (e, t) {
                        return -1 !== e.indexOf('blueprint=1') || -1 !== t.indexOf('cfDebug=');
                      };
                      return (window.oaLoadRuleDev = function c (e, t, o, n, i) {
                        return !!r(n, i);
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCca9178c8f0024c889912b52ace311aee-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLb4685e7822154f65882700c539f461e2',
              name: 'events_microsoft',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function o (e, t) {
                        return (
                          -1 !== t.toLowerCase().indexOf('events.microsoft.com') ||
                          -1 !== t.toLowerCase().indexOf('eventstest.one.microsoft.com') ||
                          -1 !== t.toLowerCase().indexOf('eventsdev.one.microsoft.com')
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC93db854fba714d9d8396bb01e8a6240a-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL295e3b7158a1435785ffaeda79fce880',
              name: 'Microsoft-365 Iframe | Office Direct Trial | KWIF_new',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('microsoft.com') &&
                          -1 !== window.location.href.indexOf('/microsoft-365/tracking') &&
                          (-1 !==
                            window.location.href.indexOf('d171e0fd-7edf-42bd-acc4-7ba8d550fcbe') ||
                            -1 !==
                              window.location.href.indexOf(
                                '35dffc92-9eb4-4d5c-82c2-2582b37bb9c4'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '8368ac6a-5797-4859-b2ec-4d32330277c9'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '525fa8e9-782b-4edb-b1f4-b095f86a9048'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '161dad2c-af3d-4d23-b2eb-82f34a63d6bb'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'b38eb735-6855-42d9-a47e-9cf7f6a29d20'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'e1ff4ab7-2e5e-429d-a860-1cf9b5249f95'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '169c6b3f-db6d-4a62-94ac-b3d3902875B8'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'c5d71fef-6d8b-4819-bd1d-5a44e1276aa3'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'f8e8d0df-e413-4968-ac82-b07d8c441888'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'ec5a9bb1-5c3c-492c-968f-df4f976da2dd'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '508cda15-1deb-4135-9c54-4d691a705353'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '121acbbf-05ee-4c97-98b6-31dc25879186'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'bda7a87a-ffd0-4b20-b4d9-a3b48ebd70b9'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '3c9462ff-5045-4a71-a7a6-5a7ec82911cf'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '0a845364-6aa2-4046-8198-6cf6461f7f2b'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '467eab54-127b-42d3-b046-3844b860bebf'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '8368ac6a-5797-4859-b2ec-4d32330277c9'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'b07a1127-de83-4a6d-9f85-2c104bdae8b4'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '101bde18-5ffb-4d79-a47b-f5b2c62525b3'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '02f65c1d-8b54-4d83-8941-fff22869499c'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '0f5b471a-08ef-4e69-abb0-bb4da43f0344'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'a43415d3-404c-4df3-b31b-aad28118a778'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'cb0138b9-b935-43c5-8039-c121ee4e84f2'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '10ddc3da-b394-42b8-bb45-37f7cba40981'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '204a8e44-c924-4bfb-aa90-ddf42dc0e18a'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '7809e406-fcf6-4c06-8bfd-7c020e77046a'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '87dd2714-d452-48a0-a809-d2f58c4f68b7'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '757c4c34-d589-46e4-9579-120bba5c92ed'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                'ebe94500-8c76-457c-8d3f-eb40ce524bc0'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '47128319-73ff-4a7b-b96f-a3e8b14728e2'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '204a8e44-c924-4bfb-aa90-ddf42dc0e18a'
                              ) ||
                            -1 !==
                              window.location.href.indexOf(
                                '53e11149-82f9-4bca-a7f2-8f72592e4f03'
                              ) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k5j7') &&
                              -1 !== window.location.href.indexOf('0005')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k5j7') &&
                              -1 !== window.location.href.indexOf('0002')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k62t') &&
                              -1 !== window.location.href.indexOf('0004')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8v1') &&
                              -1 !== window.location.href.indexOf('0004')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k59j') &&
                              -1 !== window.location.href.indexOf('0009')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8v0') &&
                              -1 !== window.location.href.indexOf('0005')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k5jn') &&
                              -1 !== window.location.href.indexOf('0005')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k8mg') &&
                              -1 !== window.location.href.indexOf('0005')) ||
                            (-1 !== window.location.href.indexOf('cfq7ttc0k62t') &&
                              -1 !== window.location.href.indexOf('0004')))) ||
                        (-1 !== window.location.href.indexOf('products.office.com') &&
                          -1 !== window.location.href.indexOf('/en/tracking'))
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC0c567690019e4353b25dfaecd183ce3a-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL312cdfae84124e4e988a6b1f4117fcdb',
              name: 'Microsoft-365 Iframe | TeamsSignUpCompletePolaris | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('www.microsoft.com') &&
                          -1 !== window.location.href.indexOf('/microsoft-365/tracking') &&
                          (-1 !== window.location.href.indexOf('CFQ7TTC0K8P5') ||
                            -1 !== window.location.href.indexOf('cfq7ttc0k8p5'))) ||
                        (-1 !== window.location.href.indexOf('products.office.com') &&
                          -1 !== window.location.href.indexOf('/en/tracking'))
                      )
                        return !0;
                    },
                  },
                  timeout: 20000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC690ed5e45e4747d19f3e16347f609425-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 20000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLe23b9d42506b43f6af4dfd445474ddb0',
              name: 'Signup.azure.com| PageLoad - 3P | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !==
                          window.location.href.toLocaleLowerCase().indexOf('signup.azure.com') ||
                        -1 !==
                          window.location.href
                            .toLocaleLowerCase()
                            .indexOf('signup-staging.azure.com')
                      )
                        return !0;
                    },
                  },
                  timeout: 20000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC57378c56349a40efb16d6545e9427e6f-source.min.js',
                    language: 'html',
                    isExternal: !0,
                  },
                },
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !1,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC08ef28a604564af1a2a7541648b3524a-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                },
              ],
            },
            {
              id: 'RL61ad0fade9ff411d8e5d6423a9ffb9c2',
              name: 'cloudPlatform',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !!(
                          (-1 !== t.toLowerCase().indexOf('www.microsoft.com') &&
                            o.match(/((\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)(cloud-platform))/)) ||
                          (-1 !== t.toLowerCase().indexOf('cmspreview2.corp.microsoft.com') &&
                            o.match(/((\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)(cloud-platform))/))
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCa01a9d985aef49b9965af0a85b78ae77-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL4a50a8ae2f3c4064b15a4b39e3de8f9f',
              name: 'Microsoft365 | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        (-1 !== window.location.href.indexOf('www.microsoft.com') &&
                          -1 !== window.location.href.indexOf('/microsoft-365/') &&
                          -1 === window.location.href.indexOf('/tracking') &&
                          -1 === window.location.href.indexOf('/microsoft-365/buy') &&
                          -1 === window.location.href.indexOf('/microsoft-365/try') &&
                          -1 === window.location.href.indexOf('/success/') &&
                          -1 === window.location.href.indexOf('/success') &&
                          -1 === window.location.href.indexOf('/blog/')) ||
                        -1 !==
                          window.location.href.indexOf('od.marketingsites-ppe.microsoft.com') ||
                        -1 !== window.location.href.indexOf('marketingsites-prod.microsoft.com')
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC41b1a929ca03401780b890256ac128a7-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL0c89e208178442b8a78f8384ef23b8cb',
              name: 'businessAppsSummit',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !!(
                          (-1 !== t.toLowerCase().indexOf('microsoftbusinessapplicationssummit') &&
                            -1 !== t.toLowerCase().indexOf('azurewebsites.net') &&
                            -1 !== o.toLowerCase().indexOf('businessapplicationssummit')) ||
                          (-1 !== t.toLowerCase().indexOf('www.microsoft.com') &&
                            o.match(
                              /^(\/([a-z]{2}-[a-z]{2}|[a-z]{2}|[a-z]{2}-[a-z]{4}-[a-z]{2})\/BusinessApplicationsSummit\/?)/i
                            )) ||
                          t.match(/datainsightssummit[0-9]{4}\.stage\.eventcore\.com/i) ||
                          -1 !==
                            t
                              .toLowerCase()
                              .indexOf('register.businessapplicationssummit.microsoft.com') ||
                          (-1 !== t.toLowerCase().indexOf('businessapplicationssummit') &&
                            -1 !== t.toLowerCase().indexOf('.eventcore.com')) ||
                          -1 !==
                            e
                              .toLowerCase()
                              .indexOf(
                                'bascatalog2018.azurewebsites.net/en-us/businessapplicationssummit/sessioncatalog'
                              )
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCb9e4e57ae0864625936ba4fe309b2da3-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL39abf272f69b476e965ca0ab0865152e',
              name: 'AISchool | PageLoad - 1P/3P | KWIF',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      if (
                        -1 !== window.location.href.indexOf('aischool.microsoft.com') ||
                        -1 !==
                          window.location.href.indexOf(
                            'ai-school-ppe.ai-platforms.p.azurewebsites.net'
                          )
                      )
                        return !0;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RCefd3365772a04faca78becd7c632044a-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RL928feacd9fa04f9ea7a468a3e35d0a09',
              name: 'evalCenter',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      return (window.oaLoadRule = function n (e, t, o) {
                        return !!(
                          (-1 !== t.toLowerCase().indexOf('www.microsoft.com') &&
                            o.match(/\/.*\/evalcenter\/?/i)) ||
                          (-1 !== t.toLowerCase().indexOf('ev-azure.azurewebsites.net') &&
                            o.match(/\/.*\/evalcenter\/?/i)) ||
                          (-1 !==
                            t
                              .toLowerCase()
                              .indexOf('evprod-vm-staging.westus.cloudapp.azure.com') &&
                            o.match(/\/.*\/evalcenter\/?/i))
                        );
                      })(
                        window.location.href,
                        window.location.hostname,
                        window.location.pathname,
                        window.location.search,
                        document.cookie
                      );
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'core/src/lib/actions/customCode.js',
                  settings: {
                    global: !0,
                    source:
                      'https://assets.adobedtm.com/5ef092d1efb5/2537c33769cb/283e9038ba6f/RC9a87d63cb59746e9ba47c8a73f9f6508-source.min.js',
                    language: 'javascript',
                    isExternal: !0,
                  },
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
            {
              id: 'RLcdb357ac6ce54a6b8c2bfde6b5c29fb0',
              name: 'M365 ClickTale',
              events: [
                { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
                {
                  modulePath: 'core/src/lib/events/customEvent.js',
                  settings: {
                    type: 'ConsentGiven',
                    elementSelector: 'body',
                    bubbleFireIfParent: !0,
                    bubbleFireIfChildFired: !0,
                  },
                  ruleOrder: 50,
                },
              ],
              conditions: [
                {
                  modulePath: 'core/src/lib/conditions/customCode.js',
                  settings: {
                    source: function () {
                      var e = window.location.href,
                        t = [
                          '/microsoft-365/buy',
                          '/microsoft-365/try',
                          '/microsoft-365/onedrive',
                          '/microsoft-365/blog',
                        ];
                      if (
                        /(?:(?:www\.|od\.marketingsites-ppe\.)microsoft\.com|localhost:44359)\/(?:(?:\w{2})?\-?(?:\w{2}\w{0,2})?\-?(?:\w{2})?\/+)+(?:microsoft\-365|fasttrack|security|trust-center)(\/+.*)?$/gi.test(
                          e
                        )
                      ) {
                        for (var o = 0, n = t.length; o < n; o++)
                          if (-1 !== e.indexOf(t[o])) return !1;
                        return !0;
                      }
                      return !1;
                    },
                  },
                  timeout: 2000,
                },
              ],
              actions: [
                {
                  modulePath: 'clicktale/src/lib/actions/deployclicktale.js',
                  settings: {},
                  timeout: 2000,
                  delayNext: !0,
                },
              ],
            },
          ],
        });
    })();
    var $___var_b4948ac54d3e67fe = (function () {
      const $___old_d9f26c6672d63452 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_d9f26c6672d63452)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_9d7b4eb662ee43f5.userAgent
          ));
        return function () {
          'use strict';
          function e (e, t) {
            return e((t = { exports: {} }), t.exports), t.exports;
          }
          function t (t) {
            var o = this.constructor;
            return this.then(
              function (e) {
                return o.resolve(t()).then(function () {
                  return e;
                });
              },
              function (e) {
                return o.resolve(t()).then(function () {
                  return o.reject(e);
                });
              }
            );
          }
          function d (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function n () {}
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
              l(e, this);
          }
          function c (n, i) {
            for (; 3 === n._state; ) n = n._value;
            0 !== n._state
              ? ((n._handled = !0),
                r._immediateFn(function () {
                  var e = 1 === n._state ? i.onFulfilled : i.onRejected;
                  if (null !== e) {
                    var t;
                    try {
                      t = e(n._value);
                    } catch (o) {
                      return void s(i.promise, o);
                    }
                    a(i.promise, t);
                  } else (1 === n._state ? a : s)(i.promise, n._value);
                }))
              : n._deferreds.push(i);
          }
          function a (e, t) {
            try {
              if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (t && ('object' == typeof t || 'function' == typeof t)) {
                var o = t.then;
                if (t instanceof r) return (e._state = 3), (e._value = t), void f(e);
                if ('function' == typeof o) return void l(i(o, t), e);
              }
              (e._state = 1), (e._value = t), f(e);
            } catch (n) {
              s(e, n);
            }
          }
          function s (e, t) {
            (e._state = 2), (e._value = t), f(e);
          }
          function f (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              r._immediateFn(function () {
                e._handled || r._unhandledRejectionFn(e._value);
              });
            for (var t = 0, o = e._deferreds.length; t < o; t++) c(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function u (e, t, o) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof t ? t : null),
              (this.promise = o);
          }
          function l (e, t) {
            var o = !1;
            try {
              e(
                function (e) {
                  o || ((o = !0), a(t, e));
                },
                function (e) {
                  o || ((o = !0), s(t, e));
                }
              );
            } catch (n) {
              if (o) return;
              (o = !0), s(t, n);
            }
          }
          function m (e) {
            if (null === e || e === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(e);
          }
          function o () {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
              for (var t = {}, o = 0; o < 10; o++) t['_' + String.fromCharCode(o)] = o;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                  .map(function (e) {
                    return t[e];
                  })
                  .join('')
              )
                return !1;
              var n = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  n[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
              );
            } catch (i) {
              return !1;
            }
          }
          function w (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var b = function (e) {
                var o = [];
                return (
                  e.forEach(function (t) {
                    t.events &&
                      t.events.forEach(function (e) {
                        o.push({ rule: t, event: e });
                      });
                  }),
                  o.sort(function (e, t) {
                    return e.event.ruleOrder - t.event.ruleOrder;
                  })
                );
              },
              h = 'debug',
              p = function (t, e) {
                var o = function () {
                    return 'true' === t.getItem(h);
                  },
                  n = function (e) {
                    t.setItem(h, e);
                  },
                  i = [],
                  r = function (e) {
                    i.push(e);
                  };
                return (
                  (e.outputEnabled = o()),
                  {
                    onDebugChanged: r,
                    getDebugEnabled: o,
                    setDebugEnabled: function (t) {
                      o() !== t &&
                        (n(t),
                        (e.outputEnabled = t),
                        i.forEach(function (e) {
                          e(t);
                        }));
                    },
                  }
                );
              },
              g = 'Module did not export a function.',
              x = function (r, c) {
                return function (e, t, o) {
                  o = o || [];
                  var n = r.getModuleExports(e.modulePath);
                  if ('function' != typeof n) throw new Error(g);
                  var i = c(e.settings || {}, t);
                  return n.bind(null, i).apply(null, o);
                };
              },
              O = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              v = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              y = '\uD83D\uDE80',
              C =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : y,
              j = !1,
              k = function (e) {
                if (j && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(C),
                    e !== v.DEBUG || window.console[e] || (e = v.INFO),
                    window.console[e].apply(window.console, t);
                }
              },
              P = k.bind(null, v.LOG),
              E = k.bind(null, v.INFO),
              R = k.bind(null, v.DEBUG),
              L = k.bind(null, v.WARN),
              _ = k.bind(null, v.ERROR),
              T = {
                log: P,
                info: E,
                debug: R,
                warn: L,
                error: _,
                get outputEnabled () {
                  return j;
                },
                set outputEnabled (e) {
                  j = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: P.bind(null, t),
                    info: E.bind(null, t),
                    debug: R.bind(null, t),
                    warn: L.bind(null, t),
                    error: _.bind(null, t),
                  };
                },
              },
              A = e(function (n) {
                !(function (e) {
                  if (((n.exports = e()), !!0)) {
                    var t = window.Cookies,
                      o = (window.Cookies = e());
                    o.noConflict = function () {
                      return (window.Cookies = t), o;
                    };
                  }
                })(function () {
                  function s () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var o = arguments[e];
                      for (var n in o) t[n] = o[n];
                    }
                    return t;
                  }
                  function f (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (d) {
                    function a () {}
                    function o (e, t, o) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (o = s({ path: '/' }, a.defaults, o)).expires &&
                          (o.expires = new Date(1 * new Date() + 86400000 * o.expires)),
                          (o.expires = o.expires ? o.expires.toUTCString() : '');
                        try {
                          var n = JSON.stringify(t);
                          /^[\{\[]/.test(n) && (t = n);
                        } catch (c) {}
                        (t = d.write
                          ? d.write(t, e)
                          : encodeURIComponent(String(t)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var i = '';
                        for (var r in o)
                          o[r] &&
                            ((i += '; ' + r), !0 !== o[r] && (i += '=' + o[r].split(';')[0]));
                        return (document.cookie = e + '=' + t + i);
                      }
                    }
                    function t (e, t) {
                      if ('undefined' != typeof document) {
                        for (
                          var o = {},
                            n = document.cookie ? document.cookie.split('; ') : [],
                            i = 0;
                          i < n.length;
                          i++
                        ) {
                          var r = n[i].split('='),
                            c = r.slice(1).join('=');
                          t || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                          try {
                            var a = f(r[0]);
                            if (((c = (d.read || d)(c, a) || f(c)), t))
                              try {
                                c = JSON.parse(c);
                              } catch (s) {}
                            if (((o[a] = c), e === a)) break;
                          } catch (s) {}
                        }
                        return e ? o[e] : o;
                      }
                    }
                    return (
                      (a.set = o),
                      (a.get = function (e) {
                        return t(e, !1);
                      }),
                      (a.getJSON = function (e) {
                        return t(e, !0);
                      }),
                      (a.remove = function (e, t) {
                        o(e, '', s(t, { expires: -1 }));
                      }),
                      (a.defaults = {}),
                      (a.withConverter = e),
                      a
                    );
                  }
                  return e(function () {});
                });
              }),
              F = { get: A.get, set: A.set, remove: A.remove },
              S = window,
              I = 'com.adobe.reactor.',
              D = function (n, e) {
                var i = I + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_ddd370d70c37b169 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_ddd370d70c37b169)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_a011c28886b08277.localStorage
                        ));
                      return function () {
                        try {
                          return S[n].getItem(i + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_ddd370d70c37b169)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_ddd370d70c37b169
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_8f72c3285771d58d = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_8f72c3285771d58d)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_a011c28886b08277.localStorage
                        ));
                      return function () {
                        try {
                          return S[n].setItem(i + e, t), !0;
                        } catch (o) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_8f72c3285771d58d)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_8f72c3285771d58d
                        ));
                    }
                  },
                };
              },
              N = '_sdsat_',
              q = 'dataElements.',
              B = 'dataElementCookiesMigrated',
              M = D('localStorage'),
              z = D('sessionStorage', q),
              W = D('localStorage', q),
              K = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              U = {},
              V = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (o) {}
                return t;
              },
              Z = function (e, t, o) {
                var n;
                switch (t) {
                  case K.PAGEVIEW:
                    return void (U[e] = o);
                  case K.SESSION:
                    return void ((n = V(o)) && z.setItem(e, n));
                  case K.VISITOR:
                    return void ((n = V(o)) && W.setItem(e, n));
                }
              },
              H = function (e, t) {
                var o = F.get(N + e);
                o !== undefined && Z(e, t, o);
              },
              $ = {
                setValue: Z,
                getValue: function (e, t) {
                  var o;
                  switch (t) {
                    case K.PAGEVIEW:
                      return U.hasOwnProperty(e) ? U[e] : null;
                    case K.SESSION:
                      return null === (o = z.getItem(e)) ? o : JSON.parse(o);
                    case K.VISITOR:
                      return null === (o = W.getItem(e)) ? o : JSON.parse(o);
                  }
                },
                migrateCookieData: function (t) {
                  M.getItem(B) ||
                    (Object.keys(t).forEach(function (e) {
                      H(e, t[e].storageDuration);
                    }),
                    M.setItem(B, !0));
                },
              },
              Q = function (e, t, o, n) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  o +
                  (n ? '\n' + n : '')
                );
              },
              G = function (a, s, d, f) {
                return function (e, t) {
                  var o = s(e);
                  if (!o) return f ? '' : undefined;
                  var n,
                    i = o.storageDuration;
                  try {
                    n = a.getModuleExports(o.modulePath);
                  } catch (c) {
                    return void T.error(Q(o, e, c.message, c.stack));
                  }
                  if ('function' == typeof n) {
                    var r;
                    try {
                      r = n(d(o.settings, t), t);
                    } catch (c) {
                      return void T.error(Q(o, e, c.message, c.stack));
                    }
                    return (
                      i && (null != r ? $.setValue(e, i, r) : (r = $.getValue(e, i))),
                      null == r && null != o.defaultValue && (r = o.defaultValue),
                      'string' == typeof r &&
                        (o.cleanText && (r = O(r)), o.forceLowerCase && (r = r.toLowerCase())),
                      r
                    );
                  }
                  T.error(Q(o, e, 'Module did not export a function.'));
                };
              },
              J = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return O(e.textContent);
                },
              },
              Y = function (e, t, o) {
                for (var n, i = e, r = 0, c = t.length; r < c; r++) {
                  if (null == i) return undefined;
                  var a = t[r];
                  if (o && '@' === a.charAt(0)) {
                    var s = a.slice(1);
                    i = J[s](i);
                  } else if (i.getAttribute && (n = a.match(/^getAttribute\((.+)\)$/))) {
                    var d = n[1];
                    i = i.getAttribute(d);
                  } else i = i[a];
                }
                return i;
              },
              X = function (r, c, a) {
                return function (e, t) {
                  var o;
                  if (c(e)) o = a(e, t);
                  else {
                    var n = e.split('.'),
                      i = n.shift();
                    'this' === i
                      ? t && (o = Y(t.element, n, !0))
                      : 'event' === i
                      ? t && (o = Y(t, n))
                      : 'target' === i
                      ? t && (o = Y(t.target, n))
                      : (o = Y(r[i], n));
                  }
                  return o;
                };
              },
              ee = function (o, n) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    n(e) || 'this' === t || 'event' === t || 'target' === t || o.hasOwnProperty(t)
                  );
                };
              },
              te = function (e, t, o) {
                var n = { exports: {} };
                return e.call(n.exports, n, n.exports, t, o), n.exports;
              },
              oe = function () {
                var c = {},
                  o = function (e) {
                    var t = c[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(c).forEach(function (e) {
                      try {
                        n(e);
                      } catch (o) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          o.message +
                          (o.stack ? '\n' + o.stack : '');
                        T.error(t);
                      }
                    });
                  },
                  n = function (e) {
                    var t = o(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = te(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, o, n, i) {
                    var r = { definition: t, extensionName: o, require: n, turbine: i };
                    (r.require = n), (c[e] = r);
                  },
                  hydrateCache: e,
                  getModuleExports: n,
                  getModuleDefinition: function (e) {
                    return o(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return o(e).extensionName;
                  },
                };
              },
              ne = !1,
              ie = function (n) {
                return function (t, o) {
                  var e = n._monitors;
                  e &&
                    (ne ||
                      (T.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (ne = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](o);
                    }));
                };
              },
              re = function (i, r, c) {
                var o,
                  n,
                  a,
                  s,
                  d = [],
                  f = function (e, t, o) {
                    if (!i(t)) return e;
                    d.push(t);
                    var n = r(t, o);
                    return d.pop(), null == n && c ? '' : n;
                  };
                return (
                  (o = function (e, o) {
                    var t = /^%([^%]+)%$/.exec(e);
                    return t
                      ? f(e, t[1], o)
                      : e.replace(/%(.+?)%/g, function (e, t) {
                          return f(e, t, o);
                        });
                  }),
                  (n = function (e, t) {
                    for (var o = {}, n = Object.keys(e), i = 0; i < n.length; i++) {
                      var r = n[i],
                        c = e[r];
                      o[r] = s(c, t);
                    }
                    return o;
                  }),
                  (a = function (e, t) {
                    for (var o = [], n = 0, i = e.length; n < i; n++) o.push(s(e[n], t));
                    return o;
                  }),
                  (s = function (e, t) {
                    return 'string' == typeof e
                      ? o(e, t)
                      : Array.isArray(e)
                      ? a(e, t)
                      : 'object' == typeof e && null !== e
                      ? n(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < d.length
                      ? (T.error('Data element circular reference detected: ' + d.join(' -> ')), e)
                      : s(e, t);
                  }
                );
              },
              ce = function (i) {
                return function (e, t) {
                  if ('string' == typeof e) i[arguments[0]] = t;
                  else if (arguments[0]) {
                    var o = arguments[0];
                    for (var n in o) i[n] = o[n];
                  }
                };
              },
              ae = setTimeout;
            (r.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (r.prototype.then = function (e, t) {
                var o = new this.constructor(n);
                return c(this, new u(e, t, o)), o;
              }),
              (r.prototype['finally'] = t),
              (r.all = function (t) {
                return new r(function (i, r) {
                  function c (t, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var o = e.then;
                        if ('function' == typeof o)
                          return void o.call(
                            e,
                            function (e) {
                              c(t, e);
                            },
                            r
                          );
                      }
                      (a[t] = e), 0 == --s && i(a);
                    } catch (n) {
                      r(n);
                    }
                  }
                  if (!d(t)) return r(new TypeError('Promise.all accepts an array'));
                  var a = Array.prototype.slice.call(t);
                  if (0 === a.length) return i([]);
                  for (var s = a.length, e = 0; e < a.length; e++) c(e, a[e]);
                });
              }),
              (r.resolve = function (t) {
                return t && 'object' == typeof t && t.constructor === r
                  ? t
                  : new r(function (e) {
                      e(t);
                    });
              }),
              (r.reject = function (o) {
                return new r(function (e, t) {
                  t(o);
                });
              }),
              (r.race = function (i) {
                return new r(function (e, t) {
                  if (!d(i)) return t(new TypeError('Promise.race accepts an array'));
                  for (var o = 0, n = i.length; o < n; o++) r.resolve(i[o]).then(e, t);
                });
              }),
              (r._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  ae(e, 0);
                }),
              (r._unhandledRejectionFn = function jt (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var se = window.Promise || r['default'] || r,
              de = function (d, o, n) {
                return function (a, t, s, e) {
                  return e.then(function () {
                    var r,
                      c = a.delayNext;
                    return new se(function (e, t) {
                      var o = d(a, s, [s]);
                      if (!c) return e();
                      var n = a.timeout,
                        i = new se(function (e, t) {
                          r = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  n / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, n);
                        });
                      se.race([o, i]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(r), (e = o(e)), n(a, t, e), se.reject(e);
                      })
                      .then(function () {
                        clearTimeout(r);
                      });
                  });
                };
              },
              fe = function (s, o, n, i, d) {
                return function (c, t, a, e) {
                  return e.then(function () {
                    var r;
                    return new se(function (e, t) {
                      var o = s(c, a, [a]),
                        n = c.timeout,
                        i = new se(function (e, t) {
                          r = setTimeout(function () {
                            t(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  n / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, n);
                        });
                      se.race([o, i]).then(e, t);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(r), (e = o(e)), i(c, t, e), se.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(r), !n(c, e))) return d(c, t), se.reject();
                      });
                  });
                };
              },
              ue = se.resolve(),
              le = function (n, i, e) {
                return function (t, o) {
                  return (
                    t.conditions &&
                      t.conditions.forEach(function (e) {
                        ue = n(e, t, o, ue);
                      }),
                    t.actions &&
                      t.actions.forEach(function (e) {
                        ue = i(e, t, o, ue);
                      }),
                    (ue = (ue = ue.then(function () {
                      e(t);
                    }))['catch'](function () {}))
                  );
                };
              },
              me = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              be = function (c, a, s, d) {
                return function (e, t) {
                  var o;
                  if (e.conditions)
                    for (var n = 0; n < e.conditions.length; n++) {
                      o = e.conditions[n];
                      try {
                        var i = c(o, t, [t]);
                        if (me(i))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!a(o, i)) return s(o, e), !1;
                      } catch (r) {
                        return d(o, e, r), !1;
                      }
                    }
                  return !0;
                };
              },
              we = function (o, n) {
                return function (e, t) {
                  o(e, t) && n(e, t);
                };
              },
              he = function (o) {
                return function (e) {
                  var t = o.getModuleDefinition(e.modulePath);
                  return (t && t.displayName) || e.modulePath;
                };
              },
              pe = function (i) {
                return function (e) {
                  var t = e.rule,
                    o = e.event,
                    n = i.getModuleDefinition(o.modulePath).name;
                  return {
                    $type: i.getModuleExtensionName(o.modulePath) + '.' + n,
                    $rule: { id: t.id, name: t.name },
                  };
                };
              },
              ge = function (a, s, d, f, u, l) {
                return function (o, e) {
                  var n = e.rule,
                    t = e.event;
                  t.settings = t.settings || {};
                  try {
                    var i = u(e);
                    s(t, null, [
                      function r (e) {
                        var t = d(i, e);
                        o(function () {
                          a(t, n);
                        });
                      },
                    ]);
                  } catch (c) {
                    l.error(f(t, n, c));
                  }
                };
              },
              xe = function (i, r, c, a) {
                return function (e, t, o) {
                  var n = r(e);
                  c.error(i(n, t.name, o)), a('ruleActionFailed', { rule: t, action: e });
                };
              },
              Oe = function (i, r, c, a) {
                return function (e, t, o) {
                  var n = r(e);
                  c.error(i(n, t.name, o)), a('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              ve = function (n, i, r) {
                return function (e, t) {
                  var o = n(e);
                  i.log('Condition "' + o + '" for rule "' + t.name + '" was not met.'),
                    r('ruleConditionFailed', { rule: t, condition: e });
                };
              },
              ye = function (t, o) {
                return function (e) {
                  t.log('Rule "' + e.name + '" fired.'), o('ruleCompleted', { rule: e });
                };
              },
              Ce = function (r, c, a) {
                return function (e, t) {
                  var o;
                  if (e.actions)
                    for (var n = 0; n < e.actions.length; n++) {
                      o = e.actions[n];
                      try {
                        r(o, t, [t]);
                      } catch (i) {
                        return void c(o, e, i);
                      }
                    }
                  a(e);
                };
              },
              je = function (o, n, i, r) {
                return function (e, t) {
                  r('ruleTriggered', { rule: t }), o ? i(t, e) : n(t, e);
                };
              },
              ke = function (e, t, o) {
                return (
                  'Failed to execute "' +
                  e +
                  '" for "' +
                  t +
                  '" rule. ' +
                  o.message +
                  (o.stack ? '\n' + o.stack : '')
                );
              },
              Pe = function (e, t) {
                return (t && !e.negate) || (!t && e.negate);
              },
              Ee = [],
              Re = !1,
              Le = function (e) {
                Re ? e() : Ee.push(e);
              },
              _e = function (e, t, o) {
                e(t).forEach(function (e) {
                  o(Le, e);
                }),
                  (Re = !0),
                  Ee.forEach(function (e) {
                    e();
                  }),
                  (Ee = []);
              },
              Te = function (e) {
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
              Fe = Object.prototype.hasOwnProperty,
              Se = Object.prototype.propertyIsEnumerable,
              Ie = o()
                ? Object.assign
                : function (e) {
                    for (var t, o, n = m(e), i = 1; i < arguments.length; i++) {
                      for (var r in (t = Object(arguments[i]))) Fe.call(t, r) && (n[r] = t[r]);
                      if (Ae) {
                        o = Ae(t);
                        for (var c = 0; c < o.length; c++) Se.call(t, o[c]) && (n[o[c]] = t[o[c]]);
                      }
                    }
                    return n;
                  },
              De = function (e, t) {
                return (
                  Ie((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          T.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              Ne = function (s, d) {
                return function (e, t) {
                  var o = s[e];
                  if (o) {
                    var n = o.modules;
                    if (n)
                      for (var i = Object.keys(n), r = 0; r < i.length; r++) {
                        var c = i[r],
                          a = n[c];
                        if (a.shared && a.name === t) return d.getModuleExports(c);
                      }
                  }
                };
              },
              qe = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Be = function (o, n) {
                return function (e) {
                  if (n) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return o + e;
                };
              },
              Me = '.js',
              ze = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              We = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              Ke = function (e, t) {
                We(t, Me) || (t += Me);
                var o = t.split('/'),
                  n = ze(e).split('/');
                return (
                  o.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? n.length && n.pop() : n.push(e));
                  }),
                  n.join('/')
                );
              },
              Ue = document,
              Ve = function (o, n) {
                return new se(function (e, t) {
                  (n.onload = function () {
                    e(n);
                  }),
                    (n.onerror = function () {
                      t(new Error('Failed to load script ' + o));
                    });
                });
              },
              Ze = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var o = Ve(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), o;
              },
              He = function (e, t, o, n) {
                (t = t || '&'), (o = o || '=');
                var i = {};
                if ('string' != typeof e || 0 === e.length) return i;
                var r = /\+/g;
                e = e.split(t);
                var c = 1000;
                n && 'number' == typeof n.maxKeys && (c = n.maxKeys);
                var a = e.length;
                0 < c && c < a && (a = c);
                for (var s = 0; s < a; ++s) {
                  var d,
                    f,
                    u,
                    l,
                    m = e[s].replace(r, '%20'),
                    b = m.indexOf(o);
                  0 <= b ? ((d = m.substr(0, b)), (f = m.substr(b + 1))) : ((d = m), (f = '')),
                    (u = decodeURIComponent(d)),
                    (l = decodeURIComponent(f)),
                    w(i, u)
                      ? Array.isArray(i[u])
                        ? i[u].push(l)
                        : (i[u] = [i[u], l])
                      : (i[u] = l);
                }
                return i;
              },
              $e = function (e) {
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
              Qe = function (o, n, i, e) {
                return (
                  (n = n || '&'),
                  (i = i || '='),
                  null === o && (o = undefined),
                  'object' == typeof o
                    ? Object.keys(o)
                        .map(function (e) {
                          var t = encodeURIComponent($e(e)) + i;
                          return Array.isArray(o[e])
                            ? o[e]
                                .map(function (e) {
                                  return t + encodeURIComponent($e(e));
                                })
                                .join(n)
                            : t + encodeURIComponent($e(o[e]));
                        })
                        .join(n)
                    : e
                    ? encodeURIComponent($e(e)) + i + encodeURIComponent($e(o))
                    : ''
                );
              },
              Ge = e(function (e, t) {
                (t.decode = t.parse = He), (t.encode = t.stringify = Qe);
              }),
              Je = (Ge.decode, Ge.parse, Ge.encode, Ge.stringify, '@adobe/reactor-'),
              Ye = {
                cookie: F,
                document: Ue,
                'load-script': Ze,
                'object-assign': Ie,
                promise: se,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), Ge.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return Ge.stringify(e);
                  },
                },
                window: S,
              },
              Xe = function (n) {
                return function (e) {
                  if (0 === e.indexOf(Je)) {
                    var t = e.substr(Je.length),
                      o = Ye[t];
                    if (o) return o;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return n(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              et = function (e, c, a, s, d) {
                var f = e.extensions,
                  u = e.buildInfo,
                  l = e.property.settings;
                if (f) {
                  var m = Ne(f, c);
                  Object.keys(f).forEach(function (n) {
                    var i = f[n],
                      e = qe(s, i.settings);
                    if (i.modules) {
                      var t = T.createPrefixedLogger(i.displayName),
                        o = Be(i.hostedLibFilesBaseUrl, u.minified),
                        r = {
                          buildInfo: u,
                          getDataElementValue: d,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: o,
                          getSharedModule: m,
                          logger: t,
                          propertySettings: l,
                          replaceTokens: s,
                          onDebugChanged: a.onDebugChanged,
                          get debugEnabled () {
                            return a.getDebugEnabled();
                          },
                        };
                      Object.keys(i.modules).forEach(function (o) {
                        var e = i.modules[o],
                          t = Xe(function (e) {
                            var t = Ke(o, e);
                            return c.getModuleExports(t);
                          });
                        c.registerModule(o, e, n, t, r);
                      });
                    }
                  }),
                    c.hydrateCache();
                }
                return c;
              },
              tt = function (e, t, o, n, i) {
                var r = T.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  T.log('"' + e + '" does not match any direct call identifiers.');
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
                      (T.warn(
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
                  (e.getVar = n),
                  (e.setVar = i),
                  (e.setCookie = function (e, t, o) {
                    var n = '',
                      i = {};
                    o && ((n = ', { expires: ' + o + ' }'), (i.expires = o));
                    var r =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      n +
                      ').';
                    T.warn(r), F.set(e, t, i);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      T.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      F.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    T.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      F.remove(e);
                  }),
                  (e.cookie = F),
                  (e.pageBottom = function () {}),
                  (e.setDebug = o);
                var c = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      c ||
                        (T.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (c = !0)),
                      t
                    );
                  },
                });
              },
              ot = window._satellite;
            if (ot && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var nt = ot.container;
              delete ot.container;
              var it = nt.property.settings.undefinedVarsReturnEmpty,
                rt = nt.property.settings.ruleComponentSequencingEnabled,
                ct = nt.dataElements || {};
              $.migrateCookieData(ct);
              var at,
                st = function (e) {
                  return ct[e];
                },
                dt = oe(),
                ft = G(
                  dt,
                  st,
                  function () {
                    return at.apply(null, arguments);
                  },
                  it
                ),
                ut = {},
                lt = ce(ut),
                mt = ee(ut, st),
                bt = X(ut, st, ft);
              at = re(mt, bt, it);
              var wt = p(D('localStorage'), T);
              tt(ot, nt, wt.setDebugEnabled, bt, lt), et(nt, dt, wt, at, ft);
              var ht = ie(ot),
                pt = x(dt, at),
                gt = he(dt),
                xt = ve(gt, T, ht),
                Ot = Oe(ke, gt, T, ht),
                vt = xe(ke, gt, T, ht),
                yt = ye(T, ht),
                Ct = ge(
                  je(
                    rt,
                    we(be(pt, Pe, xt, Ot), Ce(pt, vt, yt)),
                    le(fe(pt, Te, Pe, Ot, xt), de(pt, Te, vt), yt),
                    ht
                  ),
                  pt,
                  De,
                  ke,
                  pe(dt),
                  T
                );
              _e(b, nt.rules || [], Ct);
            }
            return ot;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_d9f26c6672d63452)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_d9f26c6672d63452
          ));
      }
    })();
    _satellite = $___var_b4948ac54d3e67fe;
  })();
}
