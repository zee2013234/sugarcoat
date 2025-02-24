var _satellite;
{
  const $___stub_fd468a9a287c63aa = {};
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
  })($___stub_fd468a9a287c63aa);
  const $___stub_d454ba247eb956b2 = {};
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
  })($___stub_d454ba247eb956b2);
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-11-30T09:08:30Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {},
        extensions: {
          core: {
            displayName: 'Core',
            modules: {
              'core/src/lib/events/pageBottom.js': {
                name: 'page-bottom',
                displayName: 'Page Bottom',
                script: function (e, n, t) {
                  'use strict';
                  var r = t('./helpers/pageLifecycleEvents');
                  e.exports = function (e, n) {
                    r.registerPageBottomTrigger(n);
                  };
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, n, t, r) {
                  'use strict';
                  var o,
                    a,
                    i,
                    s = t('@adobe/reactor-document'),
                    c = t('./helpers/decorateCode'),
                    u = t('./helpers/loadCodeSequentially'),
                    p = t('../../../node_modules/postscribe/dist/postscribe'),
                    l = r.getExtensionSettings(),
                    d =
                      ((o = function (e) {
                        p(s.body, e, {
                          beforeWriteToken: function (e) {
                            return (
                              l.cspNonce && 'script' === e.tagName && (e.attrs.nonce = l.cspNonce),
                              e
                            );
                          },
                          error: function (e) {
                            r.logger.error(e.msg);
                          },
                        });
                      }),
                      (a = []),
                      (i = function () {
                        if (s.body) for (; a.length; ) o(a.shift());
                        else setTimeout(i, 20);
                      }),
                      function (e) {
                        a.push(e), i();
                      }),
                    m = (function () {
                      if (s.currentScript) return s.currentScript.async;
                      for (var e = s.querySelectorAll('script'), n = 0; n < e.length; n++) {
                        var t = e[n];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(t.src)) return t.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, n) {
                    var t = { settings: e, event: n },
                      r = t.settings.source;
                    if (r)
                      return t.settings.isExternal
                        ? u(r).then(function (e) {
                            e && d(c(t, e));
                          })
                        : void (m || 'loading' !== s.readyState
                            ? d(c(t, r))
                            : s.write
                            ? s.write(c(t, r))
                            : d(c(t, r)));
                  };
                },
              },
              'core/src/lib/events/libraryLoaded.js': {
                name: 'library-loaded',
                displayName: 'Library Loaded (Page Top)',
                script: function (e, n, t) {
                  'use strict';
                  var r = t('./helpers/pageLifecycleEvents');
                  e.exports = function (e, n) {
                    r.registerLibraryLoadedTrigger(n);
                  };
                },
              },
              'core/src/lib/conditions/subdomain.js': {
                name: 'subdomain',
                displayName: 'Subdomain',
                script: function (e, n, t) {
                  'use strict';
                  var r = t('@adobe/reactor-document'),
                    o = t('../helpers/textMatch');
                  e.exports = function (e) {
                    var t = r.location.hostname;
                    return e.subdomains.some(function (e) {
                      var n = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return o(t, n);
                    });
                  };
                },
              },
              'core/src/lib/conditions/path.js': {
                name: 'path',
                displayName: 'Path Without Query String',
                script: function (e, n, t) {
                  'use strict';
                  var r = t('@adobe/reactor-document'),
                    o = t('../helpers/textMatch');
                  e.exports = function (e) {
                    var t = r.location.pathname;
                    return e.paths.some(function (e) {
                      var n = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return o(t, n);
                    });
                  };
                },
              },
              'core/src/lib/conditions/pathAndQuerystring.js': {
                name: 'path-and-querystring',
                displayName: 'Path And Query String',
                script: function (e, n, t) {
                  'use strict';
                  var r = t('@adobe/reactor-document'),
                    o = t('../helpers/textMatch');
                  e.exports = function (e) {
                    var t = r.location.pathname + r.location.search;
                    return e.paths.some(function (e) {
                      var n = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value;
                      return o(t, n);
                    });
                  };
                },
              },
              'core/src/lib/events/windowLoaded.js': {
                name: 'window-loaded',
                displayName: 'Window Loaded',
                script: function (e, n, t) {
                  'use strict';
                  var r = t('./helpers/pageLifecycleEvents');
                  e.exports = function (e, n) {
                    r.registerWindowLoadedTrigger(n);
                  };
                },
              },
              'core/src/lib/events/directCall.js': {
                name: 'direct-call',
                displayName: 'Direct Call',
                script: function (e, n, t, a) {
                  'use strict';
                  var i = {};
                  (window._satellite = window._satellite || {}),
                    (window._satellite.track = function (e, n) {
                      e = e.trim();
                      var t = i[e];
                      if (t) {
                        var r = { identifier: e, detail: n };
                        t.forEach(function (e) {
                          e(r);
                        });
                        var o = [
                          'Rules using the direct call event type with identifier "' +
                            e +
                            '" have been triggered' +
                            (n ? ' with additional detail:' : '.'),
                        ];
                        n && o.push(n), a.logger.log.apply(a.logger, o);
                      } else
                        a.logger.log('"' + e + '" does not match any direct call identifiers.');
                    }),
                    (e.exports = function (e, n) {
                      var t = i[e.identifier];
                      t || (t = i[e.identifier] = []), t.push(n);
                    });
                },
              },
              'core/src/lib/conditions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e) {
                  'use strict';
                  e.exports = function (e, n) {
                    return e.source.call(n.element, n, n.target);
                  };
                },
              },
              'core/src/lib/events/domReady.js': {
                name: 'dom-ready',
                displayName: 'DOM Ready',
                script: function (e, n, t) {
                  'use strict';
                  var r = t('./helpers/pageLifecycleEvents');
                  e.exports = function (e, n) {
                    r.registerDomReadyTrigger(n);
                  };
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, n, t) {
                  const $___old_c3b88ac5712cd09b = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_c3b88ac5712cd09b)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_fd468a9a287c63aa.appVersion
                      ));
                    return function () {
                      'use strict';
                      var r = t('@adobe/reactor-window'),
                        o = t('@adobe/reactor-document'),
                        a = -1 !== r.navigator.appVersion.indexOf('MSIE 10'),
                        i = 'WINDOW_LOADED',
                        s = 'DOM_READY',
                        c = 'PAGE_BOTTOM',
                        u = [c, s, i],
                        p = function (e, n) {
                          return { element: e, target: e, nativeEvent: n };
                        },
                        l = {};
                      u.forEach(function (e) {
                        l[e] = [];
                      });
                      var d = function (e, n) {
                          u.slice(0, f(e) + 1).forEach(function (e) {
                            g(n, e);
                          });
                        },
                        m = function () {
                          return 'complete' === o.readyState
                            ? i
                            : 'interactive' === o.readyState
                            ? a
                              ? null
                              : s
                            : void 0;
                        },
                        f = function (e) {
                          return u.indexOf(e);
                        },
                        g = function (n, e) {
                          l[e].forEach(function (e) {
                            v(n, e);
                          }),
                            (l[e] = []);
                        },
                        v = function (e, n) {
                          var t = n.trigger,
                            r = n.syntheticEventFn;
                          t(r ? r(e) : null);
                        };
                      (r._satellite = r._satellite || {}),
                        (r._satellite.pageBottom = d.bind(null, c)),
                        o.addEventListener('DOMContentLoaded', d.bind(null, s), !0),
                        r.addEventListener('load', d.bind(null, i), !0),
                        r.setTimeout(function () {
                          var e = m();
                          e && d(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            l[c].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            l[s].push({ trigger: e, syntheticEventFn: p.bind(null, o) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            l[i].push({ trigger: e, syntheticEventFn: p.bind(null, r) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_c3b88ac5712cd09b)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_c3b88ac5712cd09b
                      ));
                  }
                },
              },
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, n, t, r) {
                  'use strict';
                  var o = 0,
                    a = function (e) {
                      return e.settings.isExternal;
                    },
                    i = function (e, n) {
                      return '<script>\n' + n + '\n</script>';
                    },
                    s = function (n, e) {
                      var t = '__runScript' + ++o;
                      return (
                        (_satellite[t] = function (e) {
                          e.call(n.event.element, n.event, n.event.target), delete _satellite[t];
                        }),
                        '<script>_satellite["' +
                          t +
                          '"](function(event, target) {\n' +
                          e +
                          '\n});</script>'
                      );
                    },
                    c = {
                      javascript: function (e, n) {
                        return e.settings.global ? i(e, n) : s(e, n);
                      },
                      html: function (e, n) {
                        return a(e) ? r.replaceTokens(n, e.event) : n;
                      },
                    };
                  e.exports = function (e, n) {
                    return c[e.settings.language](e, n);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (e, n, t) {
                  'use strict';
                  var r = t('@adobe/reactor-promise'),
                    o = t('./getSourceByUrl'),
                    a = r.resolve();
                  e.exports = function (n) {
                    var e = new r(function (t) {
                      var e = o(n);
                      r.all([e, a]).then(function (e) {
                        var n = e[0];
                        t(n);
                      });
                    });
                    return (a = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (t, r) {
                  !(function o (e, n) {
                    'object' == typeof r && 'object' == typeof t
                      ? (t.exports = n())
                      : 'function' == typeof define && define.amd
                      ? define([], n)
                      : 'object' == typeof r
                      ? (r.postscribe = n())
                      : (e.postscribe = n());
                  })(this, function () {
                    return (function (t) {
                      function r (e) {
                        if (o[e]) return o[e].exports;
                        var n = (o[e] = { exports: {}, id: e, loaded: !1 });
                        return t[e].call(n.exports, n, n.exports, r), (n.loaded = !0), n.exports;
                      }
                      var o = {};
                      return (r.m = t), (r.c = o), (r.p = ''), r(0);
                    })([
                      function (e, n, t) {
                        'use strict';
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var o = r(t(1));
                        e.exports = o['default'];
                      },
                      function (e, n, t) {
                        'use strict';
                        function r (e) {
                          if (e && e.__esModule) return e;
                          var n = {};
                          if (null != e)
                            for (var t in e)
                              Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
                          return (n['default'] = e), n;
                        }
                        function o (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function u () {}
                        function p () {
                          var e = c.shift();
                          if (e) {
                            var n = i.last(e);
                            n.afterDequeue(),
                              (e.stream = a.apply(undefined, e)),
                              n.afterStreamStart();
                          }
                        }
                        function a (e, n, r) {
                          function o (e) {
                            (e = r.beforeWrite(e)), g.write(e), r.afterWrite(e);
                          }
                          ((g = new m['default'](e, r)).id = f++),
                            (g.name = r.name || g.id),
                            (l.streams[g.name] = g);
                          var t = e.ownerDocument,
                            a = {
                              close: t.close,
                              open: t.open,
                              write: t.write,
                              writeln: t.writeln,
                            };
                          d(t, {
                            close: u,
                            open: u,
                            write: function s () {
                              for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
                                n[t] = arguments[t];
                              return o(n.join(''));
                            },
                            writeln: function c () {
                              for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
                                n[t] = arguments[t];
                              return o(n.join('') + '\n');
                            },
                          });
                          var i = g.win.onerror || u;
                          return (
                            (g.win.onerror = function (e, n, t) {
                              r.error({ msg: e + ' - ' + n + ': ' + t }),
                                i.apply(g.win, [e, n, t]);
                            }),
                            g.write(n, function () {
                              d(t, a), (g.win.onerror = i), r.done(), (g = null), p();
                            }),
                            g
                          );
                        }
                        function l (e, n, t) {
                          if (i.isFunction(t)) t = { done: t };
                          else if ('clear' === t) return (c = []), (g = null), void (f = 0);
                          t = i.defaults(t, s);
                          var r = [
                            (e = /^#/.test(e)
                              ? window.document.getElementById(e.substr(1))
                              : e.jquery
                              ? e[0]
                              : e),
                            n,
                            t,
                          ];
                          return (
                            (e.postscribe = {
                              cancel: function o () {
                                r.stream ? r.stream.abort() : (r[1] = u);
                              },
                            }),
                            t.beforeEnqueue(r),
                            c.push(r),
                            g || p(),
                            e.postscribe
                          );
                        }
                        n.__esModule = !0;
                        var d =
                          Object.assign ||
                          function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                              var t = arguments[n];
                              for (var r in t)
                                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            }
                            return e;
                          };
                        n['default'] = l;
                        var m = o(t(2)),
                          i = r(t(4)),
                          s = {
                            afterAsync: u,
                            afterDequeue: u,
                            afterStreamStart: u,
                            afterWrite: u,
                            autoFix: !0,
                            beforeEnqueue: u,
                            beforeWriteToken: function v (e) {
                              return e;
                            },
                            beforeWrite: function h (e) {
                              return e;
                            },
                            done: u,
                            error: function y (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          f = 0,
                          c = [],
                          g = null;
                        d(l, { streams: {}, queue: c, WriteStream: m['default'] });
                      },
                      function (e, n, t) {
                        'use strict';
                        function r (e) {
                          if (e && e.__esModule) return e;
                          var n = {};
                          if (null != e)
                            for (var t in e)
                              Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
                          return (n['default'] = e), n;
                        }
                        function o (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function _ (e, n) {
                          if (!(e instanceof n))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function b (e, n) {
                          var t = C + n,
                            r = e.getAttribute(t);
                          return V.existy(r) ? String(r) : r;
                        }
                        function w (e, n, t) {
                          var r = 2 < arguments.length && t !== undefined ? arguments[2] : null,
                            o = C + n;
                          V.existy(r) && '' !== r ? e.setAttribute(o, r) : e.removeAttribute(o);
                        }
                        n.__esModule = !0;
                        var x =
                            Object.assign ||
                            function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                var t = arguments[n];
                                for (var r in t)
                                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                              }
                              return e;
                            },
                          j = o(t(3)),
                          V = r(t(4)),
                          k = !1,
                          C = 'data-ps-',
                          O = 'ps-style',
                          E = 'ps-script',
                          a = (function () {
                            function r (e, n) {
                              var t = 1 < arguments.length && n !== undefined ? arguments[1] : {};
                              _(this, r),
                                (this.root = e),
                                (this.options = t),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new j['default']('', { autoFix: t.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                w(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (r.prototype.write = function t () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var n = this.writeQueue.shift();
                                  V.isFunction(n) ? this._callFunction(n) : this._writeImpl(n);
                                }
                              }),
                              (r.prototype._callFunction = function o (e) {
                                var n = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(n),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(n);
                              }),
                              (r.prototype._writeImpl = function a (e) {
                                this.parser.append(e);
                                for (
                                  var n = void 0, t = void 0, r = void 0, o = [];
                                  (n = this.parser.readToken()) &&
                                  !(t = V.isScript(n)) &&
                                  !(r = V.isStyle(n));

                                )
                                  (n = this.options.beforeWriteToken(n)) && o.push(n);
                                0 < o.length && this._writeStaticTokens(o),
                                  t && this._handleScriptToken(n),
                                  r && this._handleStyleToken(n);
                              }),
                              (r.prototype._writeStaticTokens = function i (e) {
                                var n = this._buildChunk(e);
                                return n.actual
                                  ? ((n.html = this.proxyHistory + n.actual),
                                    (this.proxyHistory += n.proxy),
                                    (this.proxyRoot.innerHTML = n.html),
                                    k && (n.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    k && (n.actualInnerHTML = this.root.innerHTML),
                                    n)
                                  : null;
                              }),
                              (r.prototype._buildChunk = function p (e) {
                                for (
                                  var n = this.actuals.length,
                                    t = [],
                                    r = [],
                                    o = [],
                                    a = e.length,
                                    i = 0;
                                  i < a;
                                  i++
                                ) {
                                  var s = e[i],
                                    c = s.toString();
                                  if ((t.push(c), s.attrs)) {
                                    if (!/^noscript$/i.test(s.tagName)) {
                                      var u = n++;
                                      r.push(c.replace(/(\/?>)/, ' ' + C + 'id=' + u + ' $1')),
                                        s.attrs.id !== E &&
                                          s.attrs.id !== O &&
                                          o.push(
                                            'atomicTag' === s.type
                                              ? ''
                                              : '<' +
                                                  s.tagName +
                                                  ' ' +
                                                  C +
                                                  'proxyof=' +
                                                  u +
                                                  (s.unary ? ' />' : '>')
                                          );
                                    }
                                  } else r.push(c), o.push('endTag' === s.type ? c : '');
                                }
                                return {
                                  tokens: e,
                                  raw: t.join(''),
                                  actual: r.join(''),
                                  proxy: o.join(''),
                                };
                              }),
                              (r.prototype._walkChunk = function s () {
                                for (
                                  var e = void 0, n = [this.proxyRoot];
                                  V.existy((e = n.shift()));

                                ) {
                                  var t = 1 === e.nodeType;
                                  if (!t || !b(e, 'proxyof')) {
                                    t && w((this.actuals[b(e, 'id')] = e), 'id');
                                    var r = e.parentNode && b(e.parentNode, 'proxyof');
                                    r && this.actuals[r].appendChild(e);
                                  }
                                  n.unshift.apply(n, V.toArray(e.childNodes));
                                }
                              }),
                              (r.prototype._handleScriptToken = function c (e) {
                                var n = this,
                                  t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.src = e.attrs.src || e.attrs.SRC),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    (e.src && this.scriptStack.length
                                      ? (this.deferredRemote = e)
                                      : this._onScriptStart(e),
                                    this._writeScriptToken(e, function () {
                                      n._onScriptDone(e);
                                    }));
                              }),
                              (r.prototype._handleStyleToken = function u (e) {
                                var n = this.parser.clear();
                                n && this.writeQueue.unshift(n),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  n && this.write();
                              }),
                              (r.prototype._writeStyleToken = function l (e) {
                                var n = this._buildStyle(e);
                                this._insertCursor(n, O),
                                  e.content &&
                                    (n.styleSheet && !n.sheet
                                      ? (n.styleSheet.cssText = e.content)
                                      : n.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (r.prototype._buildStyle = function n (e) {
                                var t = this.doc.createElement(e.tagName);
                                return (
                                  t.setAttribute('type', e.type),
                                  V.eachKey(e.attrs, function (e, n) {
                                    t.setAttribute(e, n);
                                  }),
                                  t
                                );
                              }),
                              (r.prototype._insertCursor = function d (e, n) {
                                const $___old_913a98fbcaa17621 = {}.constructor.getOwnPropertyDescriptor(
                                  window,
                                  'localStorage'
                                );
                                try {
                                  if ($___old_913a98fbcaa17621)
                                    ({}.constructor.defineProperty(
                                      window,
                                      'localStorage',
                                      $___stub_d454ba247eb956b2.localStorage
                                    ));
                                  return function () {
                                    this._writeImpl('<span id="' + n + '"/>');
                                    var t = this.doc.getElementById(n);
                                    t && t.parentNode.replaceChild(e, t);
                                  }.apply(this, arguments);
                                } finally {
                                  if ($___old_913a98fbcaa17621)
                                    ({}.constructor.defineProperty(
                                      window,
                                      'localStorage',
                                      $___old_913a98fbcaa17621
                                    ));
                                }
                              }),
                              (r.prototype._onScriptStart = function m (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (r.prototype._onScriptDone = function f (e) {
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
                              (r.prototype._writeScriptToken = function g (e, n) {
                                var t = this._buildScript(e),
                                  r = this._shouldRelease(t),
                                  o = this.options.afterAsync;
                                e.src &&
                                  ((t.src = e.src),
                                  this._scriptLoadHandler(
                                    t,
                                    r
                                      ? o
                                      : function () {
                                          n(), o();
                                        }
                                  ));
                                try {
                                  this._insertCursor(t, E), (t.src && !r) || n();
                                } catch (a) {
                                  this.options.error(a), n();
                                }
                              }),
                              (r.prototype._buildScript = function v (e) {
                                var t = this.doc.createElement(e.tagName);
                                return (
                                  V.eachKey(e.attrs, function (e, n) {
                                    t.setAttribute(e, n);
                                  }),
                                  e.content && (t.text = e.content),
                                  t
                                );
                              }),
                              (r.prototype._scriptLoadHandler = function h (n, t) {
                                function r () {
                                  n = n.onload = n.onreadystatechange = n.onerror = null;
                                }
                                function o () {
                                  r(), null != t && t(), (t = null);
                                }
                                function a (e) {
                                  r(), i(e), null != t && t(), (t = null);
                                }
                                function e (e, n) {
                                  var t = e['on' + n];
                                  null != t && (e['_on' + n] = t);
                                }
                                var i = this.options.error;
                                e(n, 'load'),
                                  e(n, 'error'),
                                  x(n, {
                                    onload: function s () {
                                      if (n._onload)
                                        try {
                                          n._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          a({ msg: 'onload handler failed ' + e + ' @ ' + n.src });
                                        }
                                      o();
                                    },
                                    onerror: function c () {
                                      if (n._onerror)
                                        try {
                                          n._onerror.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          return void a({
                                            msg: 'onerror handler failed ' + e + ' @ ' + n.src,
                                          });
                                        }
                                      a({ msg: 'remote script failed ' + n.src });
                                    },
                                    onreadystatechange: function u () {
                                      /^(loaded|complete)$/.test(n.readyState) && o();
                                    },
                                  });
                              }),
                              (r.prototype._shouldRelease = function y (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              r
                            );
                          })();
                        n['default'] = a;
                      },
                      function (t) {
                        !(function r (e, n) {
                          t.exports = n();
                        })(0, function () {
                          return (function (t) {
                            function r (e) {
                              if (o[e]) return o[e].exports;
                              var n = (o[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                t[e].call(n.exports, n, n.exports, r), (n.loaded = !0), n.exports
                              );
                            }
                            var o = {};
                            return (r.m = t), (r.c = o), (r.p = ''), r(0);
                          })([
                            function (e, n, t) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var o = r(t(1));
                              e.exports = o['default'];
                            },
                            function (e, n, t) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function o (e) {
                                if (e && e.__esModule) return e;
                                var n = {};
                                if (null != e)
                                  for (var t in e)
                                    Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
                                return (n['default'] = e), n;
                              }
                              function p (e, n) {
                                if (!(e instanceof n))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              n.__esModule = !0;
                              var l = o(t(2)),
                                d = o(t(3)),
                                m = r(t(6)),
                                a = t(5),
                                f = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                i = (function () {
                                  function c (e, n) {
                                    var t = this,
                                      r =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      o =
                                        1 < arguments.length && n !== undefined
                                          ? arguments[1]
                                          : {};
                                    p(this, c), (this.stream = r);
                                    var a = !1,
                                      i = {};
                                    for (var s in l)
                                      l.hasOwnProperty(s) &&
                                        (o.autoFix && (i[s + 'Fix'] = !0),
                                        (a = a || i[s + 'Fix']));
                                    a
                                      ? ((this._readToken = (0, m['default'])(
                                          this,
                                          i,
                                          function () {
                                            return t._readTokenImpl();
                                          }
                                        )),
                                        (this._peekToken = (0, m['default'])(this, i, function () {
                                          return t._peekTokenImpl();
                                        })))
                                      : ((this._readToken = this._readTokenImpl),
                                        (this._peekToken = this._peekTokenImpl));
                                  }
                                  return (
                                    (c.prototype.append = function n (e) {
                                      this.stream += e;
                                    }),
                                    (c.prototype.prepend = function t (e) {
                                      this.stream = e + this.stream;
                                    }),
                                    (c.prototype._readTokenImpl = function r () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (c.prototype._peekTokenImpl = function o () {
                                      for (var e in f)
                                        if (f.hasOwnProperty(e) && f[e].test(this.stream)) {
                                          var n = d[e](this.stream);
                                          if (n)
                                            return 'startTag' === n.type &&
                                              /script|style/i.test(n.tagName)
                                              ? null
                                              : ((n.text = this.stream.substr(0, n.length)), n);
                                        }
                                    }),
                                    (c.prototype.peekToken = function e () {
                                      return this._peekToken();
                                    }),
                                    (c.prototype.readToken = function a () {
                                      return this._readToken();
                                    }),
                                    (c.prototype.readTokens = function i (e) {
                                      for (var n = void 0; (n = this.readToken()); )
                                        if (e[n.type] && !1 === e[n.type](n)) return;
                                    }),
                                    (c.prototype.clear = function s () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (c.prototype.rest = function u () {
                                      return this.stream;
                                    }),
                                    c
                                  );
                                })();
                              for (var s in (((n['default'] = i).tokenToString = function (e) {
                                return e.toString();
                              }),
                              (i.escapeAttributes = function (e) {
                                var n = {};
                                for (var t in e)
                                  e.hasOwnProperty(t) && (n[t] = (0, a.escapeQuotes)(e[t], null));
                                return n;
                              }),
                              (i.supports = l)))
                                l.hasOwnProperty(s) &&
                                  (i.browserHasFlaw = i.browserHasFlaw || (!l[s] && s));
                            },
                            function (e, n) {
                              'use strict';
                              var t = !(n.__esModule = !0),
                                r = !1,
                                o = window.document.createElement('div');
                              try {
                                var a = '<P><I></P></I>';
                                (o.innerHTML = a), (n.tagSoup = t = o.innerHTML !== a);
                              } catch (i) {
                                n.tagSoup = t = !1;
                              }
                              try {
                                (o.innerHTML = '<P><i><P></P></i></P>'),
                                  (n.selfClose = r = 2 === o.childNodes.length);
                              } catch (i) {
                                n.selfClose = r = !1;
                              }
                              (o = null), (n.tagSoup = t), (n.selfClose = r);
                            },
                            function (e, n, t) {
                              'use strict';
                              function r (e) {
                                var n = e.indexOf('-->');
                                if (0 <= n) return new p.CommentToken(e.substr(4, n - 1), n + 3);
                              }
                              function o (e) {
                                var n = e.indexOf('<');
                                return new p.CharsToken(0 <= n ? n : e.length);
                              }
                              function a (e) {
                                var i, s, c;
                                if (-1 !== e.indexOf('>')) {
                                  var n = e.match(l.startTag);
                                  if (n) {
                                    var t =
                                      ((i = {}),
                                      (s = {}),
                                      (c = n[2]),
                                      n[2].replace(l.attr, function (e, n, t, r, o, a) {
                                        t || r || o || a
                                          ? arguments[5]
                                            ? ((i[arguments[5]] = ''), (s[arguments[5]] = !0))
                                            : (i[n] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (l.fillAttr.test(n) && n) ||
                                                '')
                                          : (i[n] = ''),
                                          (c = c.replace(e, ''));
                                      }),
                                      {
                                        v: new p.StartTagToken(
                                          n[1],
                                          n[0].length,
                                          i,
                                          s,
                                          !!n[3],
                                          c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === t ? 'undefined' : u(t)))
                                      return t.v;
                                  }
                                }
                              }
                              function i (e) {
                                var n = a(e);
                                if (n) {
                                  var t = e.slice(n.length);
                                  if (t.match(new RegExp('</\\s*' + n.tagName + '\\s*>', 'i'))) {
                                    var r = t.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + n.tagName + '\\s*>', 'i')
                                    );
                                    if (r)
                                      return new p.AtomicTagToken(
                                        n.tagName,
                                        r[0].length + n.length,
                                        n.attrs,
                                        n.booleanAttrs,
                                        r[1]
                                      );
                                  }
                                }
                              }
                              function s (e) {
                                var n = e.match(l.endTag);
                                if (n) return new p.EndTagToken(n[1], n[0].length);
                              }
                              n.__esModule = !0;
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
                              (n.comment = r),
                                (n.chars = o),
                                (n.startTag = a),
                                (n.atomicTag = i),
                                (n.endTag = s);
                              var p = t(4),
                                l = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (e, n, t) {
                              'use strict';
                              function s (e, n) {
                                if (!(e instanceof n))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (n.__esModule = !0),
                                (n.EndTagToken = n.AtomicTagToken = n.StartTagToken = n.TagToken = n.CharsToken = n.CommentToken = n.Token = undefined);
                              var c = t(5),
                                r = (n.Token = function r (e, n) {
                                  s(this, r), (this.type = e), (this.length = n), (this.text = '');
                                }),
                                o =
                                  ((n.CommentToken = (function () {
                                    function t (e, n) {
                                      s(this, t),
                                        (this.type = 'comment'),
                                        (this.length = n || (e ? e.length : 0)),
                                        (this.text = ''),
                                        (this.content = e);
                                    }
                                    return (
                                      (t.prototype.toString = function e () {
                                        return '<!--' + this.content;
                                      }),
                                      t
                                    );
                                  })()),
                                  (n.CharsToken = (function () {
                                    function n (e) {
                                      s(this, n),
                                        (this.type = 'chars'),
                                        (this.length = e),
                                        (this.text = '');
                                    }
                                    return (
                                      (n.prototype.toString = function e () {
                                        return this.text;
                                      }),
                                      n
                                    );
                                  })()),
                                  (n.TagToken = (function () {
                                    function a (e, n, t, r, o) {
                                      s(this, a),
                                        (this.type = e),
                                        (this.length = t),
                                        (this.text = ''),
                                        (this.tagName = n),
                                        (this.attrs = r),
                                        (this.booleanAttrs = o),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (a.formatTag = function i (e, n) {
                                        var t =
                                            1 < arguments.length && n !== undefined
                                              ? arguments[1]
                                              : null,
                                          r = '<' + e.tagName;
                                        for (var o in e.attrs)
                                          if (e.attrs.hasOwnProperty(o)) {
                                            r += ' ' + o;
                                            var a = e.attrs[o];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[o]) ||
                                              (r += '="' + (0, c.escapeQuotes)(a) + '"');
                                          }
                                        return (
                                          e.rest && (r += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (r += '/>') : (r += '>'),
                                          t !== undefined &&
                                            null !== t &&
                                            (r += t + '</' + e.tagName + '>'),
                                          r
                                        );
                                      }),
                                      a
                                    );
                                  })()));
                              (n.StartTagToken = (function () {
                                function i (e, n, t, r, o, a) {
                                  s(this, i),
                                    (this.type = 'startTag'),
                                    (this.length = n),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = t),
                                    (this.booleanAttrs = r),
                                    (this.html5Unary = !1),
                                    (this.unary = o),
                                    (this.rest = a);
                                }
                                return (
                                  (i.prototype.toString = function e () {
                                    return o.formatTag(this);
                                  }),
                                  i
                                );
                              })()),
                                (n.AtomicTagToken = (function () {
                                  function a (e, n, t, r, o) {
                                    s(this, a),
                                      (this.type = 'atomicTag'),
                                      (this.length = n),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = t),
                                      (this.booleanAttrs = r),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = o);
                                  }
                                  return (
                                    (a.prototype.toString = function e () {
                                      return o.formatTag(this, this.content);
                                    }),
                                    a
                                  );
                                })()),
                                (n.EndTagToken = (function () {
                                  function t (e, n) {
                                    s(this, t),
                                      (this.type = 'endTag'),
                                      (this.length = n),
                                      (this.text = ''),
                                      (this.tagName = e);
                                  }
                                  return (
                                    (t.prototype.toString = function e () {
                                      return '</' + this.tagName + '>';
                                    }),
                                    t
                                  );
                                })());
                            },
                            function (e, n) {
                              'use strict';
                              function t (e, n) {
                                var t =
                                  1 < arguments.length && n !== undefined ? arguments[1] : '';
                                return e
                                  ? e.replace(/([^"]*)"/g, function (e, n) {
                                      return /\\/.test(n) ? n + '"' : n + '\\"';
                                    })
                                  : t;
                              }
                              (n.__esModule = !0), (n.escapeQuotes = t);
                            },
                            function (e, n) {
                              'use strict';
                              function u (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = r.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function p (e, n) {
                                var t = e.stream,
                                  r = u(n());
                                return (e.stream = t), r;
                              }
                              function l (e, n) {
                                var t = n.pop();
                                e.prepend('</' + t.tagName + '>');
                              }
                              function d () {
                                var e = [];
                                return (
                                  (e.last = function () {
                                    return this[this.length - 1];
                                  }),
                                  (e.lastTagNameEq = function (e) {
                                    var n = this.last();
                                    return (
                                      n && n.tagName && n.tagName.toUpperCase() === e.toUpperCase()
                                    );
                                  }),
                                  (e.containsTagName = function (e) {
                                    for (var n, t = 0; (n = this[t]); t++)
                                      if (n.tagName === e) return !0;
                                    return !1;
                                  }),
                                  e
                                );
                              }
                              function t (t, r, n) {
                                function o () {
                                  var e = p(t, n);
                                  e && i[e.type] && i[e.type](e);
                                }
                                var a = d(),
                                  i = {
                                    startTag: function s (e) {
                                      var n = e.tagName;
                                      'TR' === n.toUpperCase() && a.lastTagNameEq('TABLE')
                                        ? (t.prepend('<TBODY>'), o())
                                        : r.selfCloseFix && m.test(n) && a.containsTagName(n)
                                        ? a.lastTagNameEq(n)
                                          ? l(t, a)
                                          : (t.prepend('</' + e.tagName + '>'), o())
                                        : e.unary || a.push(e);
                                    },
                                    endTag: function c (e) {
                                      a.last()
                                        ? r.tagSoupFix && !a.lastTagNameEq(e.tagName)
                                          ? l(t, a)
                                          : a.pop()
                                        : r.tagSoupFix && (n(), o());
                                    },
                                  };
                                return function e () {
                                  return o(), u(n());
                                };
                              }
                              (n.__esModule = !0), (n['default'] = t);
                              var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                m = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, n) {
                        'use strict';
                        function r (e) {
                          return null != e;
                        }
                        function t (e) {
                          return 'function' == typeof e;
                        }
                        function o (e, n, t) {
                          var r = void 0,
                            o = (e && e.length) || 0;
                          for (r = 0; r < o; r++) n.call(t, e[r], r);
                        }
                        function a (e, n, t) {
                          for (var r in e) e.hasOwnProperty(r) && n.call(t, r, e[r]);
                        }
                        function i (t, e) {
                          return (
                            (t = t || {}),
                            a(e, function (e, n) {
                              r(t[e]) || (t[e] = n);
                            }),
                            t
                          );
                        }
                        function s (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (r) {
                            var n =
                              ((t = []),
                              o(e, function (e) {
                                t.push(e);
                              }),
                              { v: t });
                            if ('object' === (void 0 === n ? 'undefined' : d(n))) return n.v;
                          }
                          var t;
                        }
                        function c (e) {
                          return e[e.length - 1];
                        }
                        function u (e, n) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(n)
                          );
                        }
                        function p (e) {
                          return u(e, 'script');
                        }
                        function l (e) {
                          return u(e, 'style');
                        }
                        n.__esModule = !0;
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
                        (n.existy = r),
                          (n.isFunction = t),
                          (n.each = o),
                          (n.eachKey = a),
                          (n.defaults = i),
                          (n.toArray = s),
                          (n.last = c),
                          (n.isTag = u),
                          (n.isScript = p),
                          (n.isStyle = l);
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, n, t) {
                  'use strict';
                  var r = t('@adobe/reactor-load-script'),
                    o = t('@adobe/reactor-promise'),
                    a = {},
                    i = {},
                    s = function (e) {
                      return i[e] || (i[e] = r(e)), i[e];
                    };
                  (_satellite.__registerScript = function (e, n) {
                    a[e] = n;
                  }),
                    (e.exports = function (n) {
                      return a[n]
                        ? o.resolve(a[n])
                        : new o(function (e) {
                            s(n).then(
                              function () {
                                e(a[n]);
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
                  e.exports = function (e, n) {
                    if (null == n) throw new Error('Illegal Argument: Pattern is not present');
                    return (
                      null != e &&
                      ('string' == typeof n ? e === n : n instanceof RegExp && n.test(e))
                    );
                  };
                },
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP205185a6537e4aacbdc36b05eb266113/',
          },
          'adobe-analytics': {
            displayName: 'Adobe Analytics',
            modules: {
              'adobe-analytics/src/lib/actions/sendBeacon.js': {
                name: 'send-beacon',
                displayName: 'Send Beacon',
                script: function (e, n, t, o) {
                  'use strict';
                  var r = t('../sharedModules/getTracker'),
                    a = function (e) {
                      return e && e.nodeName && 'a' === e.nodeName.toLowerCase();
                    },
                    i = function (e) {
                      return a(e) ? e.innerHTML : 'link clicked';
                    },
                    s = function (e, n, t) {
                      if ('page' === n.type) o.logger.info('Firing page view beacon.'), e.t();
                      else {
                        var r = { linkType: n.linkType || 'o', linkName: n.linkName || i(t) };
                        o.logger.info(
                          'Firing link track beacon using the values: ' + JSON.stringify(r) + '.'
                        ),
                          e.tl(a(t) ? t : 'true', r.linkType, r.linkName);
                      }
                    };
                  e.exports = function (n, t) {
                    return r().then(
                      function (e) {
                        s(e, n, t.element);
                      },
                      function (e) {
                        o.logger.error('Cannot send beacon: ' + e);
                      }
                    );
                  };
                },
              },
              'adobe-analytics/src/lib/sharedModules/getTracker.js': {
                script: function (e, n, t, i) {
                  'use strict';
                  var r,
                    o = t('@adobe/reactor-cookie'),
                    a = t('@adobe/reactor-promise'),
                    s = t('@adobe/reactor-window'),
                    c = t('../helpers/augmenters'),
                    u = t('@adobe/reactor-load-script'),
                    p = t('../helpers/applyTrackerVariables'),
                    l = t('../helpers/loadLibrary'),
                    d = t('../helpers/generateVersion')(i.buildInfo.turbineBuildDate),
                    m = 'beforeSettings',
                    f = i.getSharedModule('adobe-mcid', 'mcid-instance'),
                    g = function (e) {
                      return !e || 'true' === o.get(e);
                    },
                    v = function (r) {
                      return a
                        .all(
                          c.map(function (e) {
                            var n;
                            try {
                              n = e(r);
                            } catch (t) {
                              setTimeout(function () {
                                throw t;
                              });
                            }
                            return a.resolve(n);
                          })
                        )
                        .then(function () {
                          return r;
                        });
                    },
                    h = function (e) {
                      return (
                        f &&
                          (i.logger.info('Setting MCID instance on the tracker.'),
                          (e.visitor = f)),
                        e
                      );
                    },
                    y = function (e) {
                      return (
                        i.logger.info('Setting version on tracker: "' + d + '".'),
                        'undefined' != typeof e.tagContainerMarker
                          ? (e.tagContainerMarker = d)
                          : 'string' == typeof e.version &&
                            e.version.substring(e.version.length - 5) !== '-' + d &&
                            (e.version += '-' + d),
                        e
                      );
                    },
                    _ = function (e, n, t) {
                      return (
                        n.loadPhase === m &&
                          n.source &&
                          (i.logger.info('Calling custom script before settings.'),
                          n.source.call(s, t)),
                        p(t, e || {}),
                        n.loadPhase !== m &&
                          n.source &&
                          (i.logger.info('Calling custom script after settings.'),
                          n.source.call(s, t)),
                        t
                      );
                    },
                    b = function (e, n) {
                      var t = e.moduleProperties;
                      if (
                        t &&
                        t.audienceManager &&
                        t.audienceManager.config &&
                        s._satellite &&
                        s._satellite.company &&
                        s._satellite.company.orgId
                      ) {
                        var r = { namespace: s._satellite.company.orgId };
                        t.audienceManager.config.visitorService = r;
                        var o = 'AppMeasurement_Module_AudienceManagement.js',
                          a = i.getHostedLibFileUrl(o);
                        return u(a).then(function () {
                          return (
                            n.loadModule('AudienceManagement'),
                            i.logger.info('Initializing AudienceManagement module'),
                            n.AudienceManagement.setup(t.audienceManager.config),
                            n
                          );
                        });
                      }
                      return n;
                    },
                    w =
                      ((r = i.getExtensionSettings()),
                      g(r.trackingCookieName)
                        ? l(r)
                            .then(v)
                            .then(h)
                            .then(y)
                            .then(_.bind(null, r.trackerProperties, r.customSetup || {}))
                            .then(b.bind(null, r))
                        : a.reject('EU compliance was not acknowledged by the user.'));
                  e.exports = function () {
                    return w;
                  };
                },
                name: 'get-tracker',
                shared: !0,
              },
              'adobe-analytics/src/lib/sharedModules/augmentTracker.js': {
                name: 'augment-tracker',
                shared: !0,
                script: function (e, n, t) {
                  'use strict';
                  var r = t('../helpers/augmenters');
                  e.exports = function (e) {
                    r.push(e);
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/augmenters.js': {
                script: function (e) {
                  'use strict';
                  e.exports = [];
                },
              },
              'adobe-analytics/src/lib/helpers/applyTrackerVariables.js': {
                script: function (e, n, t, i) {
                  'use strict';
                  var o = t('@adobe/reactor-query-string'),
                    a = t('@adobe/reactor-window'),
                    s = /eVar([0-9]+)/,
                    c = /prop([0-9]+)/,
                    u = new RegExp(
                      '^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$'
                    ),
                    p = function (e, n, t) {
                      return t.indexOf(e) === n;
                    },
                    l = function (e, n, t) {
                      var r = Object.keys(n).filter(u.test.bind(u));
                      return (
                        t && r.push('events'),
                        (r = r.concat((e.linkTrackVars || '').split(',')))
                          .filter(function (e, n) {
                            return 'None' !== e && e && p(e, n, r);
                          })
                          .join(',')
                      );
                    },
                    d = function (e, n) {
                      var t = n.map(function (e) {
                        return e.name;
                      });
                      return (t = t.concat((e.linkTrackEvents || '').split(',')))
                        .filter(function (e, n) {
                          return 'None' !== e && p(e, n, t);
                        })
                        .join(',');
                    },
                    r = function (e, n, t) {
                      e[n] = t[n].join(',');
                    },
                    m = function (o, e, n) {
                      var a = n.dynamicVariablePrefix || 'D=';
                      n[e].forEach(function (e) {
                        var n;
                        if ('value' === e.type) n = e.value;
                        else {
                          var t = s.exec(e.value);
                          if (t) n = a + 'v' + t[1];
                          else {
                            var r = c.exec(e.value);
                            r && (n = a + 'c' + r[1]);
                          }
                        }
                        o[e.name] = n;
                      });
                    },
                    f = {
                      linkDownloadFileTypes: r,
                      linkExternalFilters: r,
                      linkInternalFilters: r,
                      hierarchies: function (n, e, t) {
                        t[e].forEach(function (e) {
                          n[e.name] = e.sections.join(e.delimiter);
                        });
                      },
                      props: m,
                      eVars: m,
                      campaign: function (e, n, t) {
                        if ('queryParam' === t[n].type) {
                          var r = o.parse(a.location.search);
                          e[n] = r[t[n].value];
                        } else e[n] = t[n].value;
                      },
                      events: function (e, n, t) {
                        var r = t[n].map(function (e) {
                          var n = e.name;
                          return (
                            e.id && (n = [n, e.id].join(':')),
                            e.value && (n = [n, e.value].join('=')),
                            n
                          );
                        });
                        e[n] = r.join(',');
                      },
                    };
                  e.exports = function (n, r) {
                    var o = {};
                    (r = r || {}),
                      Object.keys(r).forEach(function (e) {
                        var n = f[e],
                          t = r[e];
                        n ? n(o, e, r) : (o[e] = t);
                      }),
                      o.events &&
                        n.events &&
                        0 < n.events.length &&
                        (o.events = n.events + ',' + o.events);
                    var e = r && r.events && 0 < r.events.length,
                      t = l(n, o, e);
                    t && (o.linkTrackVars = t);
                    var a = d(n, r.events || []);
                    a && (o.linkTrackEvents = a),
                      i.logger.info(
                        'Applying the following properties on tracker: "' +
                          JSON.stringify(o) +
                          '".'
                      ),
                      Object.keys(o).forEach(function (e) {
                        n[e] = o[e];
                      });
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/loadLibrary.js': {
                script: function (e, n, t, a) {
                  'use strict';
                  var r = t('@adobe/reactor-load-script'),
                    i = t('@adobe/reactor-window'),
                    s = t('@adobe/reactor-promise'),
                    o = {
                      MANAGED: 'managed',
                      PREINSTALLED: 'preinstalled',
                      REMOTE: 'remote',
                      CUSTOM: 'custom',
                    },
                    c = function (e) {
                      return a.logger.info('Loading AppMeasurement script from: ' + e + '.'), r(e);
                    },
                    u = function (e) {
                      var n = e.production;
                      return (
                        e[a.buildInfo.environment] && (n = e[a.buildInfo.environment]), n.join(',')
                      );
                    },
                    p = function (e, n) {
                      if (!i.s_gi)
                        throw new Error(
                          'Unable to create AppMeasurement tracker, `s_gi` function not found.' +
                            i.AppMeasurement
                        );
                      a.logger.info(
                        'Creating AppMeasurement tracker with these report suites: "' + n + '"'
                      );
                      var t = i.s_gi(n);
                      return (
                        e.libraryCode.scopeTrackerGlobally &&
                          (a.logger.info('Setting the tracker as window.s'), (i.s = t)),
                        t
                      );
                    },
                    l = function (e) {
                      var n = u(e.libraryCode.accounts);
                      return c(a.getHostedLibFileUrl('AppMeasurement.js')).then(
                        p.bind(null, e, n)
                      );
                    },
                    d = function (e, n) {
                      if (e.libraryCode.accounts)
                        if (n.sa) {
                          var t = u(e.libraryCode.accounts);
                          a.logger.info(
                            'Setting the following report suites on the tracker: "' + t + '"'
                          ),
                            n.sa(t);
                        } else
                          a.logger.warn(
                            'Cannot set report suites on tracker. `sa` method not available.'
                          );
                      return n;
                    },
                    m = function (o) {
                      return (
                        a.logger.info(
                          'Waiting for the tracker to become accessible at: "' + o + '".'
                        ),
                        new s(function (e, n) {
                          var t = 1,
                            r = setInterval(function () {
                              i[o] &&
                                (a.logger.info('Found tracker located at: "' + o + '".'),
                                e(i[o]),
                                clearInterval(r)),
                                10 <= t &&
                                  (clearInterval(r),
                                  n(
                                    new Error(
                                      'Bailing out. Cannot find the global variable name: "' +
                                        o +
                                        '".'
                                    )
                                  )),
                                t++;
                            }, 1000);
                        })
                      );
                    },
                    f = function (e) {
                      return m(e.libraryCode.trackerVariableName).then(d.bind(null, e));
                    },
                    g = function (e) {
                      if (i[e])
                        return a.logger.info('Found tracker located at: "' + e + '".'), i[e];
                      throw new Error('Cannot find the global variable name: "' + e + '".');
                    },
                    v = function (e, n) {
                      return c(e)
                        .then(g.bind(null, n.libraryCode.trackerVariableName))
                        .then(d.bind(null, n));
                    };
                  e.exports = function (e) {
                    var n, t;
                    switch (e.libraryCode.type) {
                      case o.MANAGED:
                        t = l(e);
                        break;
                      case o.PREINSTALLED:
                        t = f(e);
                        break;
                      case o.CUSTOM:
                        (n = e.libraryCode.source), (t = v(n, e));
                        break;
                      case o.REMOTE:
                        (n =
                          'https:' === i.location.protocol
                            ? e.libraryCode.httpsUrl
                            : e.libraryCode.httpUrl),
                          (t = v(n, e));
                        break;
                      default:
                        throw new Error('Cannot load library. Type not supported.');
                    }
                    return t;
                  };
                },
              },
              'adobe-analytics/src/lib/helpers/generateVersion.js': {
                script: function (e) {
                  'use strict';
                  var n = 8,
                    t = function (e) {
                      return e.getUTCDate().toString(36);
                    },
                    r = function (e) {
                      return e.substr(e.length - 1);
                    },
                    o = function (e) {
                      return Math.floor(e.getUTCHours() / n);
                    },
                    a = function (e) {
                      var n = (e.getUTCMonth() + 1 + 12 * o(e)).toString(36);
                      return r(n);
                    },
                    i = function (e) {
                      return (e.getUTCFullYear() - 2010).toString(36);
                    };
                  e.exports = function (e) {
                    var n = new Date(e);
                    if (isNaN(n)) throw new Error('Invalid date provided');
                    return ('L' + i(n) + a(n) + t(n)).toUpperCase();
                  };
                },
              },
            },
            settings: {
              orgId: '2B21678254E74BBD0A4C98A5@AdobeOrg',
              customSetup: {
                source: function (_) {
                  function A () {
                    var e = document.createElement('ins');
                    (e.className = 'AdSense'),
                      (e.style.display = 'block'),
                      (e.style.position = 'absolute'),
                      (e.style.top = '-1px'),
                      (e.style.height = '1px'),
                      null != document.body && document.body.appendChild(e);
                    var n = !e.clientHeight;
                    return null != document.body && document.body.removeChild(e), n;
                  }
                  function t (e) {
                    for (var n = e.split(''), t = n.length, r = []; t--; ) {
                      var o = n[t].charCodeAt();
                      o < 33 || 127 < o ? r.push('&#' + o + ';') : r.push(n[t]);
                    }
                    return r.reverse().join('');
                  }
                  function M (e) {
                    if ('string' != typeof e) return '';
                    var n = e.replace(/%/g, '');
                    return (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = t(
                      (n = (n = decodeURI(n)).replace(/(^[\s|\n|>]+|[\s|\n|>]+$)/g, ''))
                    )).replace(/&#32;/g, ' ')).replace(/&#193;/g, 'A')).replace(
                      /&#195;/g,
                      'a'
                    )).replace(/&#225;/g, 'a')).replace(/&#201;/g, 'E')).replace(
                      /&#233;/g,
                      'e'
                    )).replace(/&#205;/g, 'I')).replace(/&#237;/g, 'i')).replace(
                      /&#211;/g,
                      'O'
                    )).replace(/&#243;/g, 'o')).replace(/&#218;/g, 'U')).replace(
                      /&#250;/g,
                      'u'
                    )).replace(/&#220;/g, 'U')).replace(/&#252;/g, 'u')).replace(
                      /&#192;/g,
                      'A'
                    )).replace(/&#224;/g, 'a')).replace(/&#200;/g, 'E')).replace(
                      /&#232;/g,
                      'e'
                    )).replace(/&#204;/g, 'I')).replace(/&#236;/g, 'i')).replace(
                      /&#210;/g,
                      'O'
                    )).replace(/&#242;/g, 'o')).replace(/&#217;/g, 'U')).replace(
                      /&#249;/g,
                      'u'
                    )).replace(/&#209;/g, 'N')).replace(/&#241;/g, 'n')).replace(
                      /&#201;/g,
                      'E'
                    )).replace(/&#232;/g, 'e')).replace(/&#231;/g, 'c')).replace(
                      /&#8230;/g,
                      ''
                    )).replace(/\?/g, '')).replace(/&#161;/g, '')).replace(/!/g, '')).replace(
                      /&#191;/g,
                      ''
                    )).replace(/&#8220;/g, '')).replace(/&#8221;/g, '')).replace(
                      /&#8230;/g,
                      ' '
                    )).replace(/&#8364;/g, 'euros')).replace(/&#180;/g, '')).replace(
                      /&#173;/g,
                      ''
                    )).replace(/&#039;/g, '')).replace(/&#8216;/g, "'")).replace(
                      /&#8217;/g,
                      "'"
                    )).replace(/&aacute;/g, 'a')).replace(/&eacute;/g, 'e')).replace(
                      /&iacute;/g,
                      'i'
                    )).replace(/&oacute;/g, 'o')).replace(/&uacute;/g, 'u')).replace(
                      /&Aacute;/g,
                      'A'
                    )).replace(/&Eacute;/g, 'E')).replace(/&Iacute;/g, 'I')).replace(
                      /&Oacute;/g,
                      'O'
                    )).replace(/&Uacute;/g, 'U')).replace(/&ntilde;/g, 'n')).replace(
                      /&quot;/g,
                      "'"
                    ));
                  }
                  function B () {
                    var e = !1;
                    return (
                      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                        navigator.userAgent
                      ) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                          navigator.userAgent.substr(0, 4)
                        )) &&
                        (e = !0),
                      e
                    );
                  }
                  function F (e, n) {
                    var t = e.split(','),
                      r = '';
                    if (0 < t.length)
                      for (i = 0; i <= t.length - 1; i++)
                        t[i] == n ? (removed = !0) : (0 < r.length && (r += ','), (r += t[i]));
                    return r;
                  }
                  function z () {
                    return (
                      'undefined' != typeof _.events &&
                      (-1 < _.events.indexOf('event40') ||
                        -1 < _.events.indexOf('event41') ||
                        -1 < _.events.indexOf('event36') ||
                        -1 < _.events.indexOf('event44') ||
                        -1 < _.events.indexOf('event45') ||
                        -1 < _.events.indexOf('event46'))
                    );
                  }
                  function H (e) {
                    try {
                      var n = '__t__',
                        t = window[e];
                      return t.setItem(n, n), t.removeItem(n), !0;
                    } catch (r) {
                      return !1;
                    }
                  }
                  _.trackExternalLinks = !0;
                  var e = document.domain,
                    n = e.substring(e.indexOf('.') + 1, e.length);
                  (_.linkInternalFilters = 'javascript:,outbrain.com,taboola.com,' + n),
                    (_.pte =
                      'event21,event22,event23,event24,event25,event26,event27,event28,event29,event30'),
                    (_.ptc = !1),
                    (window.thirtySeconds = function () {
                      (_.linkTrackVars = ''),
                        (_.linkTrackEvents = 'event7'),
                        (_.events = 'event7'),
                        _.tl(this, 'o', 'thirty seconds'),
                        (_.linkTrackVars = 'None'),
                        (_.linkTrackEvents = 'None'),
                        (_.events = '');
                    }),
                    (window.sixtySeconds = function () {
                      (_.linkTrackVars = ''),
                        (_.linkTrackEvents = 'event3'),
                        (_.events = 'event3'),
                        _.tl(this, 'o', 'sixty seconds'),
                        (_.linkTrackVars = 'None'),
                        (_.linkTrackEvents = 'None'),
                        (_.events = '');
                    }),
                    (_.usePlugins = !0);
                  var G = document.location.hostname;
                  (window.cms_marca = !1),
                    -1 < G.indexOf('supercodigo') &&
                      (ConfiguraPaginaSuperCodigo(_),
                      jQuery(window).load(function () {
                        jQuery('ul#pmenu li').click(function () {
                          ConfiguraPaginaSuperCodigo(_), _.t();
                        });
                      })),
                    (_.doPlugins = function (s) {
                      function n () {
                        return (
                          -1 < G.indexOf('alimentatusalud.') ||
                          -1 < G.indexOf('caminaresdeporte.') ||
                          -1 < G.indexOf('caminosalternativos.') ||
                          -1 < G.indexOf('conducecomopiensas.') ||
                          -1 < G.indexOf('conectamoscontigo.') ||
                          -1 < G.indexOf('correresdevalientes.') ||
                          -1 < G.indexOf('creerenelfuturo.') ||
                          -1 < G.indexOf('cuidatemucho.') ||
                          -1 < G.indexOf('efectopositivo.') ||
                          -1 < G.indexOf('eldormitoriode.') ||
                          -1 < G.indexOf('electrificate.') ||
                          -1 < G.indexOf('elreydeltourmalet.') ||
                          -1 < G.indexOf('elsalonde.') ||
                          -1 < G.indexOf('espiritufilantropico.') ||
                          -1 < G.indexOf('espiritumazda.') ||
                          -1 < G.indexOf('estardondeestes.') ||
                          -1 < G.indexOf('estrategiadigital.') ||
                          -1 < G.indexOf('feliziudad.') ||
                          -1 < G.indexOf('futurosostenible.') ||
                          -1 < G.indexOf('hablemosdefuturo.') ||
                          -1 < G.indexOf('haranhistoria.') ||
                          -1 < G.indexOf('impulsodigital.') ||
                          -1 < G.indexOf('laprevia.') ||
                          -1 < G.indexOf('lasrespuestasdelmanana.') ||
                          -1 < G.indexOf('madridnotieneprecio.') ||
                          -1 < G.indexOf('nacidosparaserautonomos.') ||
                          -1 < G.indexOf('noesfutboleslaliga.') ||
                          -1 < G.indexOf('nosmovemos.') ||
                          -1 < G.indexOf('nosvemosencasa.') ||
                          -1 < G.indexOf('otrasmanerasdevivir.') ||
                          -1 < G.indexOf('paddockclub.') ||
                          -1 < G.indexOf('plana.') ||
                          -1 < G.indexOf('planetainteligente.') ||
                          -1 < G.indexOf('porunusolove.') ||
                          -1 < G.indexOf('potenciatupyme.') ||
                          -1 < G.indexOf('realidadyficcion.') ||
                          -1 < G.indexOf('revivetupelo.') ||
                          -1 < G.indexOf('saludesvida.') ||
                          -1 < G.indexOf('sienteloscolores.') ||
                          -1 < G.indexOf('tuproposito.') ||
                          -1 < G.indexOf('tusonrisasenota.') ||
                          -1 < G.indexOf('unpaseoporelprado.') ||
                          -1 < G.indexOf('ventanaalfuturo.') ||
                          -1 < G.indexOf('vivirmasymejor.') ||
                          -1 < G.indexOf('activistasdelasalud.') ||
                          -1 < G.indexOf('empresascomprometidas.') ||
                          -1 < G.indexOf('huaweicontigo.') ||
                          -1 < G.indexOf('encuentrosconfuturo.') ||
                          -1 < G.indexOf('informateencasa.') ||
                          -1 < G.indexOf('retosdelmanana.') ||
                          -1 < G.indexOf('fernandoalonso.')
                        );
                      }
                      function e () {
                        H('localStorage') &&
                          'string' == typeof localStorage.getItem('auto-refresh-counter') &&
                          ((s.prop53 = s.eVar53 = localStorage.getItem('auto-refresh-counter')),
                          localStorage.removeItem('auto-refresh-counter'));
                      }
                      function t () {
                        (s_account = 'uemarcapreprod'),
                          n() && (s_account = 'uemarcapreprod,uebrandedpreprod'),
                          -1 < document.domain.indexOf('noesfutboleslaliga') &&
                            (s_account = 'uemarcapreprod,uebrandedpreprod,uenoesfutboleslaliga'),
                          (-1 < document.domain.indexOf('cuidateplus') ||
                            'cuidateplus' == s.channel) &&
                            (s_account = 'uemarcapreprod,uecuidateplus'),
                          -1 < document.domain.indexOf('marca.sta.internet.int') &&
                            (s_account = 'uepruebas'),
                          -1 < document.domain.indexOf('www.sportweekend.com') &&
                            (s_account = 'uemarcapreprod,uesportweekend'),
                          s.sa(s_account);
                      }
                      function r () {
                        if (
                          -1 < G.indexOf('socialgames') &&
                          'function' == typeof ConfiguraPaginaSocialGames
                        )
                          ConfiguraPaginaSocialGames(s);
                        else if (-1 < G.indexOf('1x2') && 'function' == typeof ConfiguraPagina1x2)
                          ConfiguraPagina1x2(s);
                        else if (
                          -1 < G.indexOf('fanzone') &&
                          'function' == typeof ConfiguraPaginafanzone
                        )
                          ConfiguraPaginafanzone(s);
                        else if (
                          -1 < G.indexOf('derbi') &&
                          'function' == typeof ConfiguraPaginaElderbi
                        )
                          ConfiguraPaginaElderbi(s);
                        else if (
                          -1 < G.indexOf('elgoldeoro') &&
                          'function' == typeof ConfiguraPaginaGolDeOro
                        )
                          ConfiguraPaginaGolDeOro(s);
                        else if (
                          -1 < G.indexOf('porraeuropa') &&
                          'function' == typeof ConfiguraPaginaPorraEuropa
                        )
                          ConfiguraPaginaPorraEuropa(s);
                        else if (
                          -1 < G.indexOf('cuidateplus') &&
                          'function' == typeof ConfiguraCuidatePlus
                        )
                          ConfiguraCuidatePlus(s);
                        else if (-1 < G.indexOf('bosque') && 'function' == typeof ConfiguraBosque)
                          ConfiguraBosque(s);
                        else if (
                          -1 < G.indexOf('comparador-coches') &&
                          'function' == typeof ConfiguraComparadorCoches
                        )
                          ConfiguraComparadorCoches(s);
                        else if (
                          -1 < G.indexOf('premioslaureus') &&
                          'function' == typeof ConfiguraPremiosLaureus
                        )
                          ConfiguraPremiosLaureus(s);
                        else if (
                          -1 < G.indexOf('suscripcion') &&
                          'function' == typeof ConfiguraSuscripcion
                        )
                          ConfiguraSuscripcion(s);
                        else if (
                          (-1 < document.location.pathname.indexOf('/bar-budweiser/') ||
                            -1 < document.location.pathname.indexOf('/budbar/')) &&
                          'function' == typeof ConfiguraBudweiser
                        )
                          ConfiguraBudweiser(s);
                        else if (n() && 'function' == typeof ConfiguraPaginaBranded)
                          ConfiguraPaginaBranded(s);
                        else if (
                          (-1 < G.indexOf('descuentos') ||
                            -1 < G.indexOf('encuentratusitio') ||
                            -1 < G.indexOf('cuidateplus-isalud') ||
                            -1 < G.indexOf('masmarca')) &&
                          'function' == typeof ConfiguraSudominios
                        )
                          ConfiguraSudominios(s);
                        else if (
                          -1 < G.indexOf('especiales.marca.com') &&
                          'function' == typeof ConfiguraPaginaEspeciales
                        )
                          ConfiguraPaginaEspeciales(s);
                        else if (
                          -1 < G.indexOf('videosmx.marca.com') &&
                          'function' == typeof ConfiguraVideosMX
                        )
                          ConfiguraVideosMX(s);
                        else if (
                          (('undefined' != typeof s.pageURL &&
                            -1 < s.pageURL.indexOf('ar.marca.com')) ||
                            -1 < G.indexOf('ar.marca.com') ||
                            -1 < G.indexOf('marcaargentina.sta.internet.int')) &&
                          'function' == typeof ConfiguraPaginaArgentina
                        )
                          ConfiguraPaginaArgentina(s);
                        else if (
                          (('undefined' != typeof s.pageURL &&
                            -1 < s.pageURL.indexOf('co.marca.com')) ||
                            -1 < G.indexOf('co.marca.com') ||
                            -1 < G.indexOf('marcacolombia.sta.internet.int')) &&
                          -1 == G.indexOf('benefico.marca.com') &&
                          'function' == typeof ConfiguraPaginaColombia
                        )
                          ConfiguraPaginaColombia(s);
                        else if (
                          (('undefined' != typeof s.pageURL &&
                            -1 < s.pageURL.indexOf('us.marca.com')) ||
                            -1 < G.indexOf('us.marca.com') ||
                            -1 < G.indexOf('marcausa.sta.internet.int')) &&
                          'function' == typeof ConfiguraPaginaUSA
                        )
                          ConfiguraPaginaUSA(s);
                        else if (
                          -1 < document.location.pathname.indexOf('/promociones/') &&
                          'function' == typeof ConfiguraPaginaPromociones
                        )
                          ConfiguraPaginaPromociones(s);
                        else if (
                          -1 < G.indexOf('marca.sta.internet.int') ||
                          -1 < G.indexOf('www.marca.com') ||
                          -1 < G.indexOf('videos.marca.com')
                        ) {
                          window.cms_marca = !0;
                          try {
                            omniture_fill_vars_reg_user('REGMARCA', s);
                          } catch (e) {}
                          (-1 < G.indexOf('videos.marca') || -1 < G.indexOf('videosar.marca')) &&
                            (window.cms_marca = !1);
                        }
                      }
                      function o () {
                        console.log('chartbeat in'),
                          'undefined' != typeof stat_chartbeat &&
                            (console.log('la funcion existe'),
                            -1 < G.indexOf('cuidateplus')
                              ? stat_chartbeat(G, s.eVar2, s.eVar75, s.eVar32, s.eVar26)
                              : n()
                              ? stat_chartbeat(
                                  s.eVar7,
                                  'UEstudio',
                                  'www' != G.split('.')[0] ? G.split('.')[0] : G.split('.')[1],
                                  s.eVar32,
                                  s.eVar26
                                )
                              : stat_chartbeat(s.eVar7, s.channel, s.eVar75, s.eVar32, s.eVar26),
                            window.onload());
                      }
                      try {
                        if (
                          ('undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.events &&
                            '' != s_omniture.events &&
                            '' == s.events &&
                            (s.events = s.apl(s.events, s_omniture.events, ',', 1)),
                          'amp' == s.Util.getQueryParam('c61'))
                        ) {
                          (s.channel = s.eVar1 = s.Util.getQueryParam('channel').toLowerCase()),
                            (s.referrer = s.Util.getQueryParam('r').toLowerCase()),
                            (s.prop1 = s.eVar2 = s.Util.getQueryParam('c1').toLowerCase()),
                            (s.prop2 = s.eVar3 = s.Util.getQueryParam('c2').toLowerCase()),
                            (s.prop3 = s.eVar4 = s.Util.getQueryParam('c3').toLowerCase()),
                            (s.prop4 = s.eVar5 = s.Util.getQueryParam('c4').toLowerCase()),
                            (s.prop5 = s.eVar6 = s.Util.getQueryParam('c5').toLowerCase()),
                            (s.prop6 = s.eVar31 = s.Util.getQueryParam('c6').toLowerCase()),
                            (s.prop7 = s.eVar7 = s.Util.getQueryParam('c7').toLowerCase()),
                            (s.prop9 = s.eVar9 = s.Util.getQueryParam('c9').toLowerCase()),
                            (s.prop10 = s.eVar10 = M(s.Util.getQueryParam('c10').toLowerCase())),
                            (s.prop11 = s.eVar11 = M(s.Util.getQueryParam('c11').toLowerCase())),
                            (s.eVar19 = M(s.Util.getQueryParam('c19').toLowerCase())),
                            (s.prop27 = s.eVar27 = M(s.Util.getQueryParam('c27').toLowerCase())),
                            (s.prop29 = s.eVar29 = M(s.Util.getQueryParam('c29').toLowerCase())),
                            (s.prop30 = s.eVar30 = M(s.Util.getQueryParam('c30').toLowerCase())),
                            (s.prop31 = M(s.Util.getQueryParam('c31').toLowerCase())),
                            (s.prop32 = s.eVar32 = M(s.Util.getQueryParam('c32').toLowerCase())),
                            (s.prop33 = s.eVar33 = M(s.Util.getQueryParam('c33').toLowerCase())),
                            (s.prop38 = s.eVar38 = M(
                              s.Util.getQueryParam('firstPublicationDate').toLowerCase()
                            )),
                            (s.prop52 = s.eVar52 = M(s.Util.getQueryParam('c52').toLowerCase())),
                            (s.prop61 = s.eVar61 = M(s.Util.getQueryParam('c61').toLowerCase())),
                            (s.prop75 = s.eVar75 = M(s.Util.getQueryParam('c75').toLowerCase())),
                            s.channel;
                          var a = s.prop1;
                          (-1 < window.location.href.indexOf('amp-mx') ||
                            -1 < window.location.href.indexOf('amp-co') ||
                            -1 < window.location.href.indexOf('amp-co') ||
                            -1 < window.location.href.indexOf('amp-us')) &&
                            ((s.prop1 = s.prop2), (s.prop2 = a)),
                            (s.eVar18 = M(s.Util.getQueryParam('v18').toLowerCase())),
                            (s.hier1 = s.prop7 + '|' + s.channel),
                            (s.hier1 = s.prop1 ? s.hier1 + '|' + s.prop1 : s.hier1),
                            (s.hier1 = s.prop2 ? s.hier1 + '|' + s.prop2 : s.hier1),
                            (s.hier1 = s.prop3 ? s.hier1 + '|' + s.prop3 : s.hier1),
                            (s.hier1 = s.prop4 ? s.hier1 + '|' + s.prop4 : s.hier1),
                            (s.hier1 = s.prop5 ? s.hier1 + '|' + s.prop5 : s.hier1),
                            (s.hier1 = s.prop6 ? s.hier1 + '|' + s.prop6 : s.hier1),
                            (s.list2 = s.eVar29),
                            (s.prop62 = s.eVar62 = s.Util.getQueryParam('docUrl')),
                            (s.pageURL = s.Util.getQueryParam('pageName').toLowerCase()),
                            (s.pageName = s.pageURL.split('?')[0]),
                            (window.s_omniture = s);
                        }
                        (s.events = F(s.events, 'event50')), r(), t();
                        var i = document.URL.replace('#', '?');
                        if (
                          (s.pageURL || (s.pageURL = document.location.href),
                          s.pageName || (s.pageName = window.location.href.split('?')[0]),
                          (s.prop9 = s.eVar9 = s.pageURL),
                          (s.events = s.apl(s.events, 'event2', ',', 1)),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop1 &&
                            '' != s_omniture.prop1 &&
                            (s.prop1 = M(s_omniture.prop1).toLowerCase()),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop2 &&
                            '' != s_omniture.prop2 &&
                            (s.prop2 = M(s_omniture.prop2).toLowerCase()),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop3 &&
                            '' != s_omniture.prop3 &&
                            (s.prop3 = M(s_omniture.prop3).toLowerCase()),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop4 &&
                            '' != s_omniture.prop4 &&
                            (s.prop4 = M(s_omniture.prop4).toLowerCase()),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop5 &&
                            '' != s_omniture.prop5 &&
                            (s.prop5 = M(s_omniture.prop5).toLowerCase()),
                          'undefined' == typeof s_omniture ||
                            'undefined' == typeof s_omniture.prop6 ||
                            '' == s_omniture.prop6 ||
                            -1 < s_omniture.channel.indexOf('claro') ||
                            z() ||
                            (s.prop6 = M(s_omniture.prop6).toLowerCase()),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.channel &&
                            '' != s_omniture.channel &&
                            (s.channel = M(s_omniture.channel).toLowerCase()),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.hier1 &&
                            '' != s_omniture.hier1 &&
                            ((s.hier1 = M(s_omniture.hier1).toLowerCase()),
                            -1 < s.hier1.indexOf(s.prop1) && '' != s.prop1 && s.prop1),
                          (s.prop7 = s.eVar7 = 'marca.com'),
                          (-1 < s.pageName.indexOf('eventos/marcador') ||
                            -1 < s.pageName.indexOf('/directo/') ||
                            -1 < s.pageName.indexOf('-directo/') ||
                            -1 < s.pageName.indexOf('/en-directo/') ||
                            -1 < s.pageName.indexOf('/cronica/')) &&
                            'amp' !== s.eVar61)
                        ) {
                          if (
                            (-1 < s.pageName.indexOf('/en-directo/') ||
                              'claro-mx' === s.channel ||
                              (s.channel = 'directos'),
                            (-1 < s.pageName.indexOf('/directo/') ||
                              -1 < s.pageName.indexOf('/en-directo/') ||
                              -1 < s.pageName.indexOf('/cronica/')) &&
                              ('undefined' != typeof s_omniture &&
                                'undefined' != typeof s_omniture.prop6 &&
                                '' != s_omniture.prop6 &&
                                (s.prop6 = s_omniture.prop6),
                              'undefined' != typeof s_omniture &&
                                'undefined' != typeof s_omniture.prop11 &&
                                '' != s_omniture.prop11 &&
                                (s_omniture.prop6 = s_omniture.prop11),
                              document.addEventListener(
                                'UE-FootballMatchScoreboardDataEvent',
                                function (e) {
                                  s.prop5 = e.detail.sportEvent.status.name;
                                }
                              ),
                              document.dispatchEvent(
                                new CustomEvent('UE-FootballMatchDataDispatcherRequestEvent', {
                                  detail: { type: 'event' },
                                })
                              )),
                            -1 < s.pageName.indexOf('eventos/marcador'))
                          ) {
                            var c = document.location.pathname.split('/');
                            3 < c.length &&
                              ((s.prop1 = c[3]),
                              (s.hier1 = s.prop7 + '|' + s.channel + '|' + s.prop1)),
                              4 < c.length &&
                                ((s.prop2 = c[4]), (s.hier1 = s.hier1 + '|' + s.prop2)),
                              5 < c.length &&
                                ((s.prop3 = c[5]), (s.hier1 = s.hier1 + '|' + s.prop3)),
                              6 < c.length &&
                                ((s.prop4 = c[7]), (s.hier1 = s.hier1 + '|' + s.prop4));
                          }
                          if (
                            0 < document.getElementsByClassName('primero').length ||
                            0 < jQuery('ue-event-board-live').length
                          ) {
                            if (0 < document.getElementsByClassName('primero').length) {
                              var u = document
                                .getElementsByClassName('primero')[0]
                                .innerText.toLowerCase();
                              -1 < u.indexOf('nica') &&
                                ((s.prop5 = 'post'),
                                (s.prop6 = 'cronica'),
                                (s.hier1 = s.hier1 + '|' + s.prop5 + '|' + s.prop6)),
                                -1 < u.indexOf('directo') &&
                                  ((s.prop5 = 'durante'),
                                  (s.prop6 = 'narracion'),
                                  (s.hier1 = s.hier1 + '|' + s.prop5 + '|' + s.prop6)),
                                -1 < u.indexOf('previa') &&
                                  ((s.prop5 = 'antes'),
                                  (s.prop6 = 'previa'),
                                  (s.hier1 = s.hier1 + '|' + s.prop5 + '|' + s.prop6));
                            }
                            var p = document.location.href;
                            -1 < p.indexOf('estadisticas') &&
                              ((s.prop6 = 'estadistica'),
                              (s.hier1 =
                                s.prop7 +
                                '|' +
                                s.channel +
                                '|' +
                                s.prop1 +
                                '|' +
                                s.prop2 +
                                '|' +
                                s.prop3 +
                                '|' +
                                s.prop4 +
                                '|' +
                                s.prop5 +
                                '|' +
                                s.prop6)),
                              -1 < p.indexOf('alineacion') &&
                                ((s.prop6 = 'alineaciones'),
                                (s.hier1 =
                                  s.prop7 +
                                  '|' +
                                  s.channel +
                                  '|' +
                                  s.prop1 +
                                  '|' +
                                  s.prop2 +
                                  '|' +
                                  s.prop3 +
                                  '|' +
                                  s.prop4 +
                                  '|' +
                                  s.prop5 +
                                  '|' +
                                  s.prop6)),
                              -1 < p.indexOf('cronica') &&
                                'claro-mx' !== s.channel &&
                                ((s.prop5 = 'cronica'),
                                (s.hier1 =
                                  s.prop7 +
                                  '|' +
                                  s.channel +
                                  '|' +
                                  s.prop1 +
                                  '|' +
                                  s.prop2 +
                                  '|' +
                                  s.prop3 +
                                  '|' +
                                  s.prop4 +
                                  '|' +
                                  s.prop5 +
                                  '|' +
                                  s.prop6));
                          }
                          var l = s.channel,
                            d = s.prop1;
                          -1 < window.location.href.indexOf('/claro-mx') ||
                          -1 < window.location.href.indexOf('co.marca.com/claro') ||
                          -1 < window.location.href.indexOf('ar.marca.com/claro') ||
                          -1 < window.location.href.indexOf('us.marca.com/claro')
                            ? ((s.prop1 = s.prop2), (s.prop2 = d))
                            : ((s.channel = s.prop1), (s.prop1 = l));
                        } else if (
                          'amp' !== s.eVar61 &&
                          window.cms_marca &&
                          -1 == document.location.pathname.indexOf('/deporte/opinion/blogs/')
                        ) {
                          var m = !0,
                            f = !0;
                          (s.prop1 = s.prop2 = s.prop3 = s.prop4 = ''),
                            (s.hier1 = s.prop7 + '|' + s.channel),
                            -1 != document.location.pathname.indexOf('/blogs/') ||
                              'undefined' == typeof s_omniture ||
                              '' == s_omniture.prop3 ||
                              'undefined' == typeof s_omniture.prop3 ||
                              ('undefined' != typeof s_omniture.prop5 &&
                                '' != s_omniture.prop5 &&
                                -1 != document.location.href.indexOf(s_omniture.prop5)) ||
                              ((s.prop1 = s_omniture.prop3),
                              (s.hier1 = s.prop7 + '|' + s.channel + '|' + s.prop1),
                              '' != s_omniture.prop4 &&
                                'undefined' != typeof s_omniture.prop4 &&
                                ((s.prop2 = s_omniture.prop4),
                                (s.hier1 = s.hier1 + '|' + s.prop2),
                                (f = !1)),
                              (m = !1));
                          for (
                            var g = (_ = document.location.pathname.split('/')).length, v = 0;
                            v < _.length;
                            v++
                          ) {
                            if (-1 == _[v].search(/\D{1,}/) && -1 < _[v].search(/\d{2,}/)) {
                              g = v;
                              break;
                            }
                            if (-1 < _[v].indexOf('.html')) {
                              -1 < _[v].indexOf('index.html') && (g = v),
                                (_[v] = _[v].split('.')[0]);
                              break;
                            }
                          }
                          if (
                            -1 < document.location.pathname.search(/\d{4}\/\d{2}\/\d{2}\/(.)+\//)
                          ) {
                            var h = document.location.pathname
                              .substring(
                                document.location.pathname.search(/\d{4}\/\d{2}\/\d{2}\//) + 11
                              )
                              .split('/');
                            for (v = 0; v < h.length; v++) {
                              if (-1 < h[v].indexOf('.html')) {
                                if (-1 < h[v].indexOf('index.html')) break;
                                if (-1 < h[v].search(/\d{7,}/)) {
                                  window.noticiaID = h[v].split('.')[0];
                                  break;
                                }
                                (_[g] = h[v].split('.')[0]), (g += 1);
                                break;
                              }
                              (_[g] = h[v]), (g += 1);
                            }
                          }
                          ('' != s.channel && 'undefined' != typeof s.channel) ||
                            ((s.channel = _[1]), (s.hier1 = s.prop7 + '|' + s.channel)),
                            2 == g &&
                              '' == _[1] &&
                              ((s.channel = 'portada'), (s.hier1 = s.prop7 + '|' + s.channel)),
                            -1 < document.location.href.indexOf('marca.com/resultados/') &&
                              ((s.channel = 'resultados'),
                              (s.hier1 = s.prop7 + '|' + s.channel),
                              (f = m = !0)),
                            'blogs' == _[1] &&
                              ((s.channel = 'blogs'), (s.hier1 = s.prop7 + '|' + s.channel)),
                            2 < g &&
                              m &&
                              '' != _[2] &&
                              ((s.prop1 = _[2]),
                              (s.hier1 = s.prop7 + '|' + s.channel + '|' + s.prop1)),
                            3 < g &&
                              f &&
                              '' != _[3] &&
                              ((s.prop2 = _[3]), (s.hier1 = s.hier1 + '|' + s.prop2)),
                            (s.prop3 = ''),
                            4 < g &&
                              '' != _[4] &&
                              ((s.prop3 = _[4]), (s.hier1 = s.hier1 + '|' + s.prop3)),
                            (s.prop4 = ''),
                            5 < g &&
                              '' != _[5] &&
                              ((s.prop4 = _[5]), (s.hier1 = s.hier1 + '|' + s.prop4)),
                            (s.prop5 = ''),
                            6 < g &&
                              '' != _[6] &&
                              ((s.prop5 = _[6]), (s.hier1 = s.hier1 + '|' + s.prop5)),
                            (s.prop6 = ''),
                            7 < g &&
                              '' != _[7] &&
                              ((s.prop6 = _[7]), (s.hier1 = s.hier1 + '|' + s.prop6)),
                            (('english-version' == s.channel && '' == s.prop1) ||
                              ('claro-mx' == s.channel && '' == s.prop1) ||
                              -1 < document.location.href.indexOf('tiramillas') ||
                              -1 < document.location.href.indexOf('buzz') ||
                              -1 < document.location.href.indexOf('polideportivo')) &&
                              ('' == s.prop1 &&
                                ((s.prop1 = s.channel),
                                (s.hier1 = s.prop7 + '|' + s.channel + '|' + s.prop1)),
                              '' == s.prop2 &&
                                ((s.prop2 = s.prop1),
                                (s.hier1 =
                                  s.prop7 + '|' + s.channel + '|' + s.prop1 + '|' + s.prop2)),
                              '' == s.prop3 &&
                                ((s.prop3 = s.prop2),
                                (s.hier1 =
                                  s.prop7 +
                                  '|' +
                                  s.channel +
                                  '|' +
                                  s.prop1 +
                                  '|' +
                                  s.prop2 +
                                  '|' +
                                  s.prop3))),
                            'undefined' != typeof s_omniture &&
                              'undefined' != typeof s_omniture.prop1 &&
                              '' != s_omniture.prop1 &&
                              ('undefined' != typeof ueDataPage &&
                              'undefined' != typeof ueDataPage.model
                                ? s_omniture.prop1.toLowerCase() ==
                                    ueDataPage.model.toLowerCase() &&
                                  (s.prop33 = s.eVar33 = M(s_omniture.prop1).toLowerCase())
                                : s_omniture.prop1 != s.prop1 &&
                                  (s.prop33 = s.eVar33 = M(s_omniture.prop1).toLowerCase()));
                        }
                        if (
                          ((s.eVar1 = s.channel),
                          (s.eVar2 = s.prop1),
                          (s.eVar3 = s.prop2),
                          (s.eVar4 = s.prop3),
                          (s.eVar5 = s.prop4),
                          (s.eVar6 = s.prop5),
                          (s.eVar31 = s.prop6),
                          'true' == s.Util.getQueryParam('notificacion') &&
                            (s.prop55 = s.eVar55 = 'notificaciones push'),
                          'undefined' != typeof jQuery &&
                            0 < jQuery('h1[itemprop^="headline"]:first').length &&
                            (0 < jQuery('.news-author ul li.author-name').length &&
                              (s.eVar75 ||
                                (s.eVar75 = M(
                                  jQuery.trim(
                                    jQuery('.news-author ul li.author-name').text().toLowerCase()
                                  )
                                )),
                              (s.prop75 = s.eVar75)),
                            (s.prop32 = s.eVar32 = 'noticia'),
                            (s.eVar10 = s.prop10 = z()
                              ? s.eVar10
                              : document.location.href.replace('.html', '').split('/').pop()),
                            (s.eVar11 = s.prop11 = z()
                              ? s.eVar11
                              : M(
                                  jQuery.trim(jQuery('h1[itemprop^="headline"]:first').text())
                                ).toLowerCase())),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop11 &&
                            '' != s_omniture.prop11 &&
                            (s_omniture.prop6 = s_omniture.prop11),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop6 &&
                            '' != s_omniture.prop6)
                        )
                          z() ||
                            -1 < document.domain.search(/videos\w*.marca.com/) ||
                            ('undefined' != typeof s_omniture.prop10 && '' != s_omniture.prop10
                              ? (s.eVar10 = s.prop10 = s_omniture.prop10)
                              : -1 < s_omniture.prop6.indexOf('-') &&
                                (s.eVar10 = s.prop10 = M(s_omniture.prop6.split('-').pop()))),
                            (s.eVar11 = s.prop11 = z()
                              ? s.eVar11
                              : M(s_omniture.prop6.split('-').shift()).toLowerCase());
                        else if ('undefined' != typeof window.noticiaID)
                          try {
                            var y = document
                              .getElementsByClassName('cab_articulo')[0]
                              .getElementsByTagName('h3');
                            (s.eVar10 = s.prop10 = z() ? s.eVar10 : window.noticiaID),
                              (s.eVar11 = s.prop11 = z()
                                ? s.eVar11
                                : M(y[0].textContent.toLowerCase()));
                          } catch (R) {}
                        if (
                          'undefined' != typeof s_omniture &&
                          'undefined' != typeof s_omniture.prop32 &&
                          '' != s_omniture.prop32
                        )
                          (s.eVar32 = M(s_omniture.prop32).toLowerCase()),
                            'albumes' == s.eVar32 && (s.eVar32 = 'album'),
                            'home' == s.eVar32 && (s.eVar32 = 'portada'),
                            'directo' == s.eVar32 && (s.eVar32 = 'directos'),
                            'videos' == s.eVar32 &&
                              (-1 < document.location.pathname.indexOf('/v/')
                                ? ((s.eVar32 = 'video'),
                                  (s.eVar11 = s.prop11 = z()
                                    ? s.eVar11
                                    : M(s_omniture.prop6).toLowerCase()))
                                : ((s.eVar32 = 'portadilla'),
                                  -1 != document.location.pathname.indexOf('/blogs/') &&
                                    (s.eVar11 = s.prop11 = z() ? s.eVar11 : '')),
                              ('video' == s.prop2 || (s.prop2 && -1 < s.prop2.indexOf('home'))) &&
                                ((s.prop2 = ''),
                                (s.eVar3 = ''),
                                'undefined' != typeof s.prop3 &&
                                  '' != s.prop3 &&
                                  ((s.prop2 = s.prop3),
                                  (s.eVar3 = s.prop2),
                                  (s.prop3 = ''),
                                  (s.eVar4 = ''),
                                  (s.hier1 =
                                    s.prop7 + '|' + s.channel + '|' + s.prop1 + '|' + s.prop2)),
                                'undefined' != typeof s.prop4 &&
                                  '' != s.prop4 &&
                                  ((s.prop3 = s.prop4),
                                  (s.eVar4 = s.prop3),
                                  (s.prop4 = ''),
                                  (s.eVar5 = ''),
                                  (s.hier1 =
                                    s.prop7 +
                                    '|' +
                                    s.channel +
                                    '|' +
                                    s.prop1 +
                                    '|' +
                                    s.prop2 +
                                    '|' +
                                    s.prop3)))),
                            (s.prop32 = s.eVar32);
                        else if (
                          'undefined' == typeof configurationByRule ||
                          !1 === configurationByRule
                        ) {
                          if (
                            ('undefined' != typeof s.eVar11 &&
                              '' != s.eVar11 &&
                              (s.eVar32 || (s.eVar32 = 'noticia')),
                            -1 < document.location.pathname.indexOf('multimedia') ||
                              -1 < document.location.pathname.indexOf('/ocio'))
                          )
                            'undefined' != typeof s.eVar11 && '' != s.eVar11
                              ? (s.eVar32 = 'otros')
                              : (s.eVar32 = 'portadilla');
                          else if (-1 < document.location.pathname.indexOf('albumes'))
                            if (-1 < document.location.pathname.indexOf('index.html'))
                              s.eVar32 = 'portadilla';
                            else {
                              s.eVar32 = 'album';
                              try {
                                s.eVar11 = s.prop11 = z()
                                  ? s.eVar11
                                  : M(
                                      document
                                        .getElementsByClassName('competicion')[0]
                                        .textContent.toLowerCase()
                                    );
                              } catch (R) {}
                            }
                          else s.eVar32 || (s.eVar32 = 'otros');
                          s.prop32 = s.eVar32;
                        }
                        if (-1 != document.location.pathname.indexOf('/blogs/')) {
                          s.eVar32 = 'portadilla';
                          var _ = document.location.pathname.split('/');
                          for (v = 0; v < _.length; v++)
                            if (!isNaN(parseInt(_[v]))) {
                              s.eVar32 = 'opinion';
                              break;
                            }
                          s.prop32 = s.eVar32;
                        }
                        if (
                          ('undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop75 &&
                            '' != s_omniture.prop75 &&
                            (s.prop75 = s.eVar75 = M(s_omniture.prop75).toLowerCase()),
                          -1 < s.pageName.indexOf('eventos/marcador') &&
                            'undefined' != typeof jQuery &&
                            ((s.eVar11 = s.prop11 = z()
                              ? s.eVar11
                              : M(jQuery('h1').text().toLowerCase())),
                            (s.prop75 = s.eVar75 = M(
                              jQuery('.comentarista span.redactor').text().toLowerCase()
                            ))),
                          -1 < s.pageName.indexOf('/album/') &&
                            'album' == s.eVar32 &&
                            'undefined' != typeof jQuery &&
                            '' == s.eVar75 &&
                            (s.prop75 = s.eVar75 = M(
                              jQuery('p.gallery-cover-article__author').text().toLowerCase()
                            )),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop29 &&
                            '' != s_omniture.prop29 &&
                            ((s.prop29 = s.eVar29 = z()
                              ? s.eVar29
                              : M(s_omniture.prop29).toLowerCase().replace(/,/g, '|')),
                            (s.list2 = M(s_omniture.list2).toLowerCase().replace(/,/g, '|'))),
                          'undefined' != typeof jQuery && 0 < jQuery('img.full-image').length)
                        )
                          var b = 'imagenes';
                        if ('undefined' != typeof jQuery && 0 < jQuery('[id*=video-]').length)
                          var w = 'videos';
                        'string' == typeof w && 'string' == typeof b
                          ? (s.eVar30 = w + '|' + b)
                          : 'string' == typeof w
                          ? (s.eVar30 = w)
                          : 'string' == typeof b && (s.eVar30 = b),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop30 &&
                            '' != s_omniture.prop30 &&
                            ((s.eVar30 = M(s_omniture.prop30).toLowerCase()),
                            'foto' == s.eVar30 && (s.eVar30 = 'imagenes')),
                          ('undefined' != typeof s.eVar30 && '' != s.eVar30) ||
                            'album' != s.eVar32 ||
                            (s.eVar30 = 'imagenes'),
                          (s.prop30 = s.eVar30),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.eVar28 &&
                            '' != s_omniture.eVar28 &&
                            (s.prop28 = s.eVar28 = M(s_omniture.eVar28).toLowerCase());
                        var x = 'web';
                        B() && (x = 'movil'),
                          (s.prop27 = s.eVar27 = x),
                          A() ? (s.prop47 = 'bloqueada') : (s.prop47 = 'no bloqueada'),
                          (s.eVar47 = s.prop47),
                          'undefined' != typeof jQuery &&
                            'block' == jQuery('#privacyPolicyLayerN').css('display') &&
                            (s.events = s.apl(s.events, 'event49', ',', 1));
                        var j = new Date(),
                          V = j.getFullYear(),
                          k = -j.getTimezoneOffset() / 60 - 1;
                        0 <= k && (k = '+' + k.toString()),
                          (s.dstStart = '1/1/' + V),
                          (s.dstEnd = '12/31/' + V),
                          (s.currentYear = V);
                        var C = j.getMonth() + 1;
                        C < 10 && (C = '0' + C);
                        var O = j.getMilliseconds();
                        O < 10 && (O = '0' + O);
                        var E = j.getSeconds();
                        E < 10 && (E = '0' + E);
                        var T = j.getMinutes();
                        T < 10 && (T = '0' + T);
                        var L = j.getHours();
                        L < 10 && (L = '0' + L);
                        var P = j.getDate();
                        P < 10 && (P = '0' + P),
                          (s.eVar49 = L + ':' + T + ':' + E + ':' + O),
                          (s.prop49 = s.eVar49),
                          (s.prop16 = s.eVar16 = L + ':' + T);
                        var Q = new Array(
                          'Sunday',
                          'Monday',
                          'Tuesday',
                          'Wednesday',
                          'Thursday',
                          'Friday',
                          'Saturday'
                        );
                        (s.prop17 = s.eVar17 = Q[j.getDay()]),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.firstPublicationDate &&
                            '' != s_omniture.firstPublicationDate &&
                            (s.prop38 = s.eVar38 = M(
                              s_omniture.firstPublicationDate
                            ).toLowerCase());
                        var S,
                          N = s.getPercentPageViewed(s.pageName);
                        if (
                          (N[0] &&
                            ((s.prop43 = s.eVar43 = s.getPreviousValue(s.pageURL, 's_ppn')),
                            s.performanceTiming(),
                            (s.prop44 = s.eVar44 = N[1])),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop36 &&
                            '' != s_omniture.prop36 &&
                            (s.prop36 = s.eVar36 = M(s_omniture.prop36).toLowerCase()),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop35 &&
                            '' != s_omniture.prop35 &&
                            ((s.prop35 = s.eVar35 = M(s_omniture.prop35).toLowerCase()),
                            'portadilla' == s.eVar32 &&
                              -1 < s.eVar35.indexOf('continua') &&
                              H('sessionStorage') &&
                              'undefined' != typeof sessionStorage.eVar32 &&
                              ('portada' == sessionStorage.eVar32 ||
                                'portadilla-nc' == sessionStorage.eVar32) &&
                              (s.prop32 = s.eVar32 = 'portadilla-nc'),
                            H('sessionStorage') && (sessionStorage.eVar32 = s.eVar32)),
                          'album' == s.eVar32 && 'undefined' != typeof jQuery
                            ? (0 == jQuery('.gallery-slide-article__count').length
                                ? ((s.prop52 = 'origen'),
                                  H('sessionStorage') &&
                                  'undefined' != typeof sessionStorage.contador_foto
                                    ? ((sessionStorage.contador_foto =
                                        sessionStorage.contador_foto - 1),
                                      (s.prop53 = sessionStorage.contador_foto))
                                    : (s.prop53 = '0'),
                                  0 < jQuery('.gallery-end__nav').length &&
                                    ((s.prop52 = 'fin'),
                                    (s.prop53 = sessionStorage.contador_foto),
                                    -1 < s.pageName.lastIndexOf('_') &&
                                      ((s.pageName =
                                        s.pageName.substring(0, s.pageName.lastIndexOf('_')) +
                                        '.html'),
                                      '' == s.eVar11 ||
                                        'undefined' == typeof s.eVar11 ||
                                        z() ||
                                        (s.eVar11 = s.prop11 = s.eVar11.substring(
                                          0,
                                          s.eVar11.lastIndexOf('_')
                                        )))),
                                  H('sessionStorage') &&
                                    sessionStorage.removeItem('interaccion_foto'),
                                  H('sessionStorage') &&
                                    sessionStorage.removeItem('contador_foto'))
                                : ((s.prop52 = jQuery('.gallery-slide-article__count')
                                    .text()
                                    .replace('/', '|')),
                                  H('sessionStorage') &&
                                    'undefined' == typeof sessionStorage.contador_foto &&
                                    (sessionStorage.contador_foto = 1),
                                  (s.prop53 = H('sessionStorage') && sessionStorage.contador_foto),
                                  'undefined' != typeof s_omniture &&
                                    'undefined' != typeof s_omniture.eVar54 &&
                                    '' != s_omniture.eVar54 &&
                                    (s.prop54 = M(s_omniture.eVar54).toLowerCase()),
                                  -1 < s.pageName.lastIndexOf('_') &&
                                    ((s.pageName =
                                      s.pageName.substring(0, s.pageName.lastIndexOf('_')) +
                                      '.html'),
                                    '' != s.eVar10 &&
                                      'undefined' != typeof s.eVar10 &&
                                      (s.prop10 = s.eVar10 = s.eVar10.substring(
                                        0,
                                        s.eVar10.lastIndexOf('_')
                                      )))),
                              (s.eVar52 = s.prop52),
                              (s.eVar53 = s.prop53),
                              (s.eVar54 = s.prop54))
                            : (H('sessionStorage') &&
                                sessionStorage.removeItem('interaccion_foto'),
                              H('sessionStorage') && sessionStorage.removeItem('contador_foto')),
                          'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.prop71 &&
                            '' != s_omniture.prop71 &&
                            (s.prop71 = s_omniture.prop71),
                          H('localStorage') &&
                            'string' == typeof localStorage.getItem('dmpue_segs'))
                        ) {
                          var D = [
                              'xuj',
                              'gln',
                              'f0e',
                              '7kp',
                              '0w0',
                              'bwe',
                              'eh6',
                              'tsd',
                              '42m',
                              '2nt',
                              'zbx',
                              'og4',
                              '23u',
                              'fgm',
                              '5x4',
                              '5qw',
                              'hcc',
                              'z9x',
                              '248',
                              'fhj',
                              '7a2',
                              '9j2',
                              'ic2',
                              'ui8',
                              'ggg',
                              '4sj',
                              'zue',
                              'xmp',
                              'mcg',
                              'uhm',
                              '4qz',
                              '31o',
                              'cj4',
                              '4jd',
                              'ppx',
                              '1oe',
                              'avp',
                              'xr2',
                              'wnf',
                              'vws',
                              'efq',
                              'nuq',
                              '828',
                              '7zo',
                              'fx7',
                              'e8j',
                              'rn2',
                              'lqu',
                            ],
                            U = [
                              'igd',
                              'tn3',
                              '9nc',
                              'jx6',
                              '6hc',
                              'uyn',
                              'sqc',
                              '9my',
                              '37a',
                              'tnu',
                              '48d',
                              'uwc',
                              'mnp',
                              'sws',
                              'su1',
                              '4qv',
                              'h7x',
                              'ya5',
                              'ks5',
                              'ih0',
                              'bd1',
                              'mh8',
                              'ftw',
                              'u6d',
                              'o8e',
                              'l0b',
                              '9us',
                              '1wp',
                              '5hg',
                              'kuq',
                            ];
                          localStorage
                            .getItem('dmpue_segs')
                            .split(',')
                            .forEach(function (e) {
                              -1 < D.indexOf(e)
                                ? (s.prop18 = s.apl(s.prop18, e, '|', 1))
                                : -1 < U.indexOf(e) && (s.prop19 = s.apl(s.prop19, e, '|', 1)),
                                (s.prop48 = s.eVar48 = s.apl(s.prop48, e, '|', 1));
                            });
                        }
                        (s.prop14 = s.eVar14 = s.getNewRepeat()),
                          (s.eVar19 = 'D=fid'),
                          H('localStorage') &&
                          'string' == typeof localStorage.getItem('lastVisitMonth') &&
                          localStorage.getItem('lastVisitMonth') == j.getMonth()
                            ? (s.prop50 = s.eVar50 = 'Repeat')
                            : ((s.prop50 = s.eVar50 = 'New'),
                              H('localStorage') &&
                                localStorage.setItem('lastVisitMonth', j.getMonth())),
                          s.prop13 || (s.prop13 = s.Util.getQueryParam('q')),
                          s.prop13 &&
                            ((s.prop13 = s.prop13.toLowerCase()),
                            (s.eVar13 = s.prop13),
                            '' != s.getValOnce(s.eVar13, 'ev13', 0) &&
                              (s.events = s.apl(s.events, 'event1', ',', 1))),
                          (s.prop64 = s.eVar64 = s.Util.getQueryParam('intcmp', i)),
                          (s.eVar66 = s.Util.getQueryParam('emk', i)),
                          (s.campaign = s.Util.getQueryParam('cid', i)),
                          s.Util.getQueryParam('s_kw', i) &&
                            ((s.eVar34 = s.Util.getQueryParam('s_kw', i)),
                            (s.eVar34 = s.eVar34.split('%20').join(' ')),
                            (s.prop34 = s.eVar34)),
                          window.optimizely &&
                            'function' == typeof window.optimizely.get &&
                            window.optimizely.get('custom/adobeIntegrator') &&
                            window.optimizely.get('custom/adobeIntegrator').assignCampaigns(s),
                          (s.prop42 = s.Util.getQueryParam('_appid', i)),
                          new (function (e) {
                            var n = 'event50',
                              t = 'ueAnaliticsGDPRStateChange',
                              r = function () {
                                return H('localStorage') && window.localStorage
                                  ? localStorage.getItem(t)
                                  : null;
                              },
                              o = function () {
                                H('localStorage') && localStorage.removeItem(t);
                              },
                              a = function () {
                                e && r() && (o(), i());
                              },
                              i = function () {
                                window.s && (s.events = s.apl(s.events, n, ',', 1));
                              };
                            return { checkPolicy: a };
                          })(
                            !H('localStorage') ||
                            !window.ueCookiesPolicy ||
                            ('object' == typeof window.ueCookiesPolicy &&
                              'function' != typeof window.ueCookiesPolicy.isAccepted)
                              ? null
                              : ueCookiesPolicy.isAccepted()
                          ).checkPolicy(),
                          (s.prop69 = ''),
                          window.ueCookiesPolicy &&
                            'object' == typeof window.ueCookiesPolicy &&
                            'function' == typeof window.ueCookiesPolicy.getConsentData &&
                            ((S = ueCookiesPolicy.getConsentData()) ||
                              (S = H('localStorage') && localStorage.getItem('ueConsentData')),
                            S && (s.prop69 = S)),
                          o(),
                          e(),
                          document.addEventListener('DOMContentLoaded', function () {
                            'object' == typeof window.utag_data
                              ? (s.eVar60 = 'true')
                              : 'undefined' == typeof window.utag_data
                              ? (s.eVar60 = 'false')
                              : (s.eVar60 = 'undefined');
                          }),
                          (s.eVar56 = s.prop56 = window.navigator.userAgent),
                          (s.eVar18 =
                            'undefined' != typeof s_omniture &&
                            'undefined' != typeof s_omniture.eVar18 &&
                            '' != s_omniture.eVar18 &&
                            'new' != s_omniture.eVar18 &&
                            'amp' != s_omniture.eVar18
                              ? 'launch old s_omniture'
                              : 'launch'),
                          'undefined' == typeof window._thirtyTO &&
                            (('undefined' != typeof s_omniture &&
                              'undefined' != typeof s_omniture.prop67 &&
                              'cerrado: completo' == s_omniture.prop67) ||
                              'branded-content' == s.channel ||
                              'branded-content' == s.prop1) &&
                            ((window._thirtyTO = setTimeout('thirtySeconds()', 30000)),
                            (window._sixtyTO = setTimeout('sixtySeconds()', 60000)));
                        try {
                          var I =
                            'event4=' +
                            (performance.getEntriesByType('paint')[0].startTime / 1000).toString();
                          (s.events = s.apl(s.events, I, ',', 1)),
                            (s.events = s.apl(s.events, 'event5', ',', 1));
                        } catch (R) {}
                      } catch (q) {
                        (s.eVar18 = 'null'), (s.eVar69 = q.message);
                      }
                    }),
                    'undefined' != typeof jQuery &&
                      jQuery('.privacyA').click(function () {
                        (_.linkTrackVars =
                          'events,eVar12,eVar63,channel,prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop11,prop29,prop30,prop32,prop75,prop33,prop52'),
                          (_.linkTrackEvents = 'event50'),
                          (_.events = 'event50'),
                          _.tl(this, 'o', 'click en faldon cookies'),
                          (_.linkTrackVars = 'None'),
                          (_.linkTrackEvents = 'None');
                      }),
                    _.loadModule('Media'),
                    (_.Media.autoTrack = !1),
                    (_.linkTrackVars = 'None'),
                    (_.linkTrackEvents = 'None'),
                    (_.linkTrackVars =
                      'channel,eVar1,prop1,eVar2,prop2,eVar3,prop3,eVar4,prop4,eVar5,prop5,eVar6,prop6,eVar7,prop7,eVar31,prop9,eVar9,prop10,eVar10,prop11,eVar11,prop20,eVar20,prop21,eVar21,prop22,eVar22,prop23,eVar23,prop24,eVar24,prop25,eVar25,prop29,eVar29,prop31,prop32,eVar32,prop41,eVar41,prop40,eVar40,prop49,eVar49,prop65,eVar65,prop68,eVar68,eVar69,events'),
                    (_.linkTrackEvents =
                      'event40,event41,event36,event44,event45,event46,event119'),
                    (_.events = ''),
                    (window.flag = []),
                    (window.flag_end = []),
                    window.videoId,
                    (window.variosvideos = !1);
                  var r = function (n) {
                      n && n.kBind
                        ? (n.kBind('firstPlay', function () {
                            setTimeout(function () {
                              n.kBind('playerUpdatePlayhead.' + n.id, function (e) {
                                0.5 <= e &&
                                  (n.kUnbind('playerUpdatePlayhead.' + n.id),
                                  setVideoData(n, 'video start'));
                              });
                            }, 1000);
                          }),
                          n.kBind('replay', function () {
                            setVideoData(n, 'video start');
                          }),
                          n.kBind('playerPlayEnd', function () {
                            setVideoData(n, 'video end');
                          }))
                        : 'undefined' != typeof console &&
                          console.log('Error, no kBind method in Kaltura div ' + n);
                    },
                    o = function () {
                      a(),
                        s(),
                        window.addEventListener('KalturaPlayerReady', function (e) {
                          var n = e.detail.playerId;
                          if (n) {
                            var t = document.getElementById(n);
                            t && r(t);
                          }
                        });
                    },
                    a = function () {
                      var e = ['full-video'],
                        n = [];
                      for (var t in e)
                        if (0 < document.getElementsByClassName(e[t]).length) {
                          n = [].slice.call(document.getElementsByClassName(e[t]));
                          break;
                        }
                      n.map(function (e) {
                        e && e.kBind && r(e);
                      });
                    },
                    s = function () {
                      var e = ['colVideo'],
                        n = [];
                      for (var t in e)
                        if (0 < document.getElementsByClassName(e[t]).length) {
                          n = [].slice.call(document.getElementsByClassName(e[t]));
                          break;
                        }
                      n.map(function (e) {
                        var n,
                          t = e.querySelector('iframe');
                        t && t.parentElement && (n = t.parentElement) && n.kBind && r(n);
                      });
                    };
                  (window.videoMetadata = function () {}),
                    (window.setVideoData = function (e, n) {
                      try {
                        var t, r;
                        if (e && e.evaluate) {
                          (t = e.evaluate('{mediaProxy.entry}')),
                            (r = e.evaluate('{mediaProxy.entryMetadata}'));
                          var o = 'Player - Kaltura',
                            a =
                              void 0 !== t && 'undefined' != typeof t.rootEntryId
                                ? t.rootEntryId
                                : 'Id del Video HTML5',
                            i =
                              void 0 !== t && 'undefined' != typeof t.name
                                ? t.name
                                : 'Nombre del Video HTML5',
                            s =
                              void 0 !== t && 'undefined' != typeof t.categories
                                ? t.categories
                                : 'Categoría a la que pertenece el Video - HTML5',
                            c =
                              void 0 !== t && t.tags
                                ? t.tags.replace(/, /g, '|')
                                : 'Etiquetas o tags del Video - HTML5',
                            u = void 0 !== t && t.isLive ? t.isLive : 'vod',
                            p =
                              void 0 !== r && 'undefined' != typeof r.Provider
                                ? r.Provider
                                : 'Provider del Video - HTML5',
                            l = void 0 !== t && 'undefined' != typeof t.duration ? t.duration : 0;
                          if (
                            (window.s &&
                              'function' == typeof window.s.t &&
                              ((_.prop24 = _.eVar24 = o),
                              (_.prop10 = _.eVar10 = a),
                              (_.prop11 = _.eVar11 = i),
                              (_.prop22 = _.eVar22 = s),
                              (_.prop29 = _.eVar29 = c),
                              (_.prop40 = _.eVar40 = u),
                              (_.prop25 = _.eVar25 = p),
                              'consumo 25' == n &&
                                ((_.events = 'event44'), _.tl(this, 'o', 'video 25%')),
                              'consumo 50' == n &&
                                ((_.events = 'event45'), _.tl(this, 'o', 'video 50%')),
                              'consumo 75' == n &&
                                ((_.events = 'event46'), _.tl(this, 'o', 'video 75%')),
                              ('video start' != n && 'ad start' != n) ||
                                ((_.events = 'event40'), _.tl(this, 'o', 'video play')),
                              'video end' == n &&
                                ((_.events = 'event41,event36=' + l),
                                _.tl(this, 'o', 'video stop')),
                              (_.events = '')),
                            window.ueDataLayer)
                          ) {
                            var d,
                              m,
                              f,
                              g = !1,
                              v = '',
                              h = 'setVideoData';
                            ('video start' !== n && 'ad start' !== n) ||
                              ((g = !0), (d = v = 'event40'), (m = f = 'video views')),
                              'video end' === n &&
                                ((g = !0), (d = v = 'event41'), (m = f = 'video completes')),
                              'consumo 25' === n &&
                                ((g = !0), (d = v = 'event44'), (m = f = 'v:rep 25% del video')),
                              'consumo 50' === n &&
                                ((g = !0), (d = v = 'event45'), (m = f = 'v:rep 50% del video')),
                              'consumo 75' === n &&
                                ((g = !0), (d = v = 'event46'), (m = f = 'v:rep 75% del video')),
                              g &&
                                d &&
                                'object' == typeof window.utag &&
                                'function' == typeof window.utag.link &&
                                utag.link({
                                  events: d,
                                  tealium_event: m,
                                  event_category: h,
                                  event_action: f,
                                  event_label: v,
                                  be_video_name: i,
                                  be_video_id: a,
                                  be_video_tags: c,
                                  be_video_category: s,
                                  be_video_broadcast_type: u,
                                  be_video_provider: p,
                                  be_video_duration: l,
                                  be_video_player: o,
                                });
                          }
                        }
                      } catch (y) {}
                    }),
                    'loading' == document.readyState
                      ? document.addEventListener('DOMContentLoaded', o)
                      : o();
                },
              },
              libraryCode: {
                type: 'custom',
                source:
                  'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/EX4f833c92fc654e94a580c7bbbcb2ba9c-libraryCode_source.min.js',
                trackerVariableName: 's',
              },
              trackerProperties: {
                eVars: [{ name: 'eVar7', type: 'value', value: 'marca.com' }],
                props: [{ name: 'prop7', type: 'alias', value: 'eVar7' }],
                charSet: 'UTF-8',
                currencyCode: 'EUR',
                trackingServer: 'metrics.el-mundo.net',
                trackInlineStats: !0,
                trackDownloadLinks: !0,
                trackExternalLinks: !1,
                trackingServerSecure: 'smetrics.el-mundo.net',
                linkDownloadFileTypes: [
                  'doc',
                  'docx',
                  'eps',
                  'jpg',
                  'png',
                  'svg',
                  'xls',
                  'ppt',
                  'pptx',
                  'pdf',
                  'xlsx',
                  'tab',
                  'csv',
                  'zip',
                  'txt',
                  'vsd',
                  'vxd',
                  'xml',
                  'js',
                  'css',
                  'rar',
                  'exe',
                  'wma',
                  'mov',
                  'avi',
                  'wmv',
                  'mp3',
                  'wav',
                  'm4v',
                ],
              },
            },
            hostedLibFilesBaseUrl:
              'https://assets.adobedtm.com/extensions/EP308220a2a4c4403f97fc1960100db40f/',
          },
        },
        company: { orgId: '2B21678254E74BBD0A4C98A5@AdobeOrg' },
        property: {
          name: '01 Marca',
          settings: {
            domains: ['marca.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [
          {
            id: 'RL6a654b8d74a34c49818a827578b826bb',
            name: 'stat_pagina_vista',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'adobe-analytics/src/lib/actions/sendBeacon.js',
                settings: { type: 'page' },
              },
            ],
          },
          {
            id: 'RL298e0502f8bf49b38cad56b226cb945f',
            name: 'stat_chartbeat_pixel',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'amp-aux', valueIsRegex: !0 }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});\n\nfunction stat_chartbeat(domain, sections, authors, contentType, userId, accessContentType) {\n\t/** CONFIGURATION START **/\n\t_sf_async_config.uid = 52682;\n\t_sf_async_config.domain = (typeof domain != \"undefined\") ? domain : \"no definido\";\n\t_sf_async_config.useCanonical = true;\n\t_sf_async_config.sections = (typeof sections != \"undefined\") ? sections : \"no definido\";\n\t_sf_async_config.authors = (typeof authors != \"undefined\") ? authors : \"no definido\";\n\t_sf_async_config.type = (typeof contentType != \"undefined\") ? contentType : \"no definido\";\n\n\tvar chbt_user_type = 'anon'\n\tif (typeof accessContentType != 'undefined' && accessContentType.indexOf('completo') > -1){\n\t\tchbt_user_type = 'paid'\n\t} else if (typeof userId != 'undefined' && typeof userId.toLowerCase != 'function'){\n\t\tchbt_user_type = 'lgdin';\n\t}\n\n\tvar _cbq = window._cbq = (window._cbq || []);\n\t_cbq.push(['_acct',chbt_user_type]);\n\t/** CONFIGURATION END **/\n\t\n\t(function () {\n\t\tfunction loadChartbeat() { var e = document.createElement('script'); e.setAttribute('language', 'javascript'); e.setAttribute('type', 'text/javascript'); e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js'); document.body.appendChild(e); }\n\t\tvar oldonload = window.onload;\n\t\twindow.onload = (typeof window.onload != 'function') ?\n\t\t\tloadChartbeat : function () { loadChartbeat(); oldonload();}\n\t\t\t;\n\t})();\n}",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLbb77fa003464404ca7e9a353c66724a4',
            name: 'stat_funciones_auxiliares',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 1 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '/**\n * FUNCIONES AUXILIARES\n * Versión: 1.0\n * Fecha:\n * Autor de las modificaciones: Divisadero - ue@divisadero.es\n */\n\n/*****************************************************************\n * IMPORTANTE:                                                   *\n * Al crear la regla, marcarse el código como "Execute Globally" *\n *****************************************************************/\n\nfunction envioEventoRedSocial(redsocial) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars =\n            "events,eVar12,eVar63,channel,prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop11,prop26,prop29,prop30,prop32,prop67,prop75,prop33,prop52,eVar68";\n        s.linkTrackEvents = "event6";\n        s.eVar63 = s.pageName;\n        s.events = "event6";\n        s.eVar12 = redsocial;\n        s.tl(this, "o", "click en " + redsocial);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.be_page_url === undefined\n        ) {\n            window.ueDataLayer.be_page_url = "";\n            if (typeof window.ueDataLayer.entryError === "function")\n                window.ueDataLayer.entryError("e-not found be_page_url");\n        }\n\n        utag.link({\n            events: "event6",\n            tealium_event: "click en " + redsocial,\n            event_category: "envioEventoRedSocial",\n            event_action: "content shared",\n            event_label: "event6",\n            be_page_shared_content_url: ueDataLayer.be_page_url,\n            be_page_shared_content_platform: redsocial\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n\nfunction envioEventoSC(evento, nombre) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        var s = s_gi(s.account);\n        s.linkTrackVars =\n            "events,channel,prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop11";\n        s.linkTrackEvents = evento;\n        s.events = evento;\n        s.tl(this, "o", nombre);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        utag.link({\n            events: evento,\n            tealium_event: nombre,\n            event_category: "envioEventoSC",\n            event_action: nombre,\n            event_label: evento\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n\nfunction envioSC(nombreBoton) {\n    var fecha = new Date();\n    var milliseconds = fecha.getMilliseconds();\n    if (milliseconds < 10) milliseconds = "0" + milliseconds;\n    var seconds = fecha.getSeconds();\n    if (seconds < 10) seconds = "0" + seconds;\n    var minutes = fecha.getMinutes();\n    if (minutes < 10) minutes = "0" + minutes;\n    var hours = fecha.getHours();\n    if (hours < 10) hours = "0" + hours;\n\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s = s_gi(s.account);\n        s.linkTrackVars =\n            "prop51,eVar51,events,channel,prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop11,prop49";\n        s.linkTrackEvents = "event51";\n        s.prop49 = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;\n        s.prop51 = nombreBoton + ":" + s.pageName;\n        s.eVar51 = s.prop51;\n        s.events = "event51";\n        s.tl(this, "o", s.prop51);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.be_page_url === undefined\n        ) {\n            window.ueDataLayer.be_page_url = "";\n            if (typeof window.ueDataLayer.entryError === "function")\n                window.ueDataLayer.entryError("e-not found be_page_url");\n        }\n\n        utag.link({\n            events: "event51",\n            tealium_event: "onclick",\n            event_category: "envioSC",\n            event_action: "onclick",\n            event_label: "event51",\n            be_onclick: nombreBoton + ":" + window.ueDataLayer.be_page_url,\n            timestamp: hours + ":" + minutes + ":" + seconds + ":" + milliseconds\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n\nfunction envioBTSC(moduloBTclicado) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars =\n            "prop71,prop66,eVar71,events,channel,prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop11,prop29,prop30,prop32,prop75";\n        s.linkTrackEvents = "event99";\n        s.prop66 = moduloBTclicado;\n        s.eVar71 = moduloBTclicado;\n        s.events = "event99";\n        s.tl(this, "o", "Click en moduloBT:" + s.eVar71);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        utag.link({\n            events: "event99",\n            tealium_event: "onclick modulobt",\n            event_category: "envioBTSC",\n            event_action: "onclick modulobt",\n            event_label: "event99",\n            be_bt_modules_showed: moduloBTclicado\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n\nfunction envioEventoNotificaciones(modulo, boton, contador) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars =\n            "events,channel,prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop9,eVar9,prop10,eVar10,prop11,eVar11,prop18,eVar18,prop19,eVar19,prop29,eVar29,prop30,eVar30,prop32,eVar32,prop35,eVar35,prop36,eVar36,prop75,eVar75,prop51,eVar51,prop48,eVar48";\n        s.linkTrackEvents = "event15,event16,event17";\n        s.prop51 = s.eVar51 = modulo + ":" + boton + ":" + contador;\n        if (boton == "permitir") s.events = "event15";\n        if (boton == "denegar") s.events = "event16";\n        if (boton == "salir" || boton == "salirscroll") s.events = "event17";\n        if (s.events == "event15" || s.events == "event16" || s.events == "event17")\n            s.tl(this, "o", "Notificaciones Web: " + s.prop51);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n        s.events = "";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        var event_tealium = "";\n\n        if (boton == "permitir") event_tealium = "event15";\n        if (boton == "denegar") event_tealium = "event16";\n        if (boton == "salir" || boton == "salirscroll") event_tealium = "event17";\n\n        if (\n            event_tealium == "event15" ||\n            event_tealium == "event16" ||\n            event_tealium == "event17"\n        ) {\n            utag.link({\n                events: event_tealium,\n                tealium_event: "notificaciones: " + modulo,\n                event_category: "envioEventoNotificaciones",\n                event_action: "notificaciones: " + modulo,\n                event_label: event_tealium,\n                be_onclick: modulo + ":" + boton + ":" + contador\n            });\n        }\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n\n\n}\n\nfunction envioSCModulosApoyo(nombreBoton) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars =\n            "prop57,eVar57,events,channel,prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop11,prop29,prop30,prop32,prop75";\n        s.linkTrackEvents = "event53";\n        s.prop57 = nombreBoton + ":" + s.pageName;\n        s.eVar57 = s.prop57;\n        s.events = "event53";\n        s.tl(this, "o", s.prop57);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.be_page_url === undefined\n        ) {\n            window.ueDataLayer.be_page_url = "";\n            if (typeof window.ueDataLayer.entryError === "function")\n                window.ueDataLayer.entryError("e-not found be_page_url");\n        }\n\n        utag.link({\n            events: "event53",\n            tealium_event: "onclick modulo apoyo",\n            event_category: "envioSCModulosApoyo",\n            event_action: "onclick modulo apoyo",\n            event_label: "event53",\n            be_onclick: nombreBoton + ":" + ueDataLayer.be_page_url\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n\nfunction eventoSCModulos(modulo, tipo, pos, titulo, URL) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars =\n            "prop72,eVar72,prop73,eVar73,prop74,eVar74,events,channel,prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop11,prop29,prop30,prop32,prop75";\n        s.linkTrackEvents = "event69";\n        s.prop72 = modulo + ": " + tipo;\n        s.eVar72 = s.prop72;\n        s.prop73 = pos + ": " + titulo;\n        s.eVar73 = s.prop73;\n        s.prop74 = URL;\n        s.eVar74 = s.prop74;\n        s.events = "event69";\n        s.tl(this, "o", "Medicion de modulos");\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        utag.link({\n            events: "event69",\n            tealium_event: "medicion de modulos",\n            event_category: "eventoSCModulos",\n            event_action: "medicion de modulos",\n            event_label: "event69",\n            be_modules_type: modulo + ": " + tipo,\n            be_modules_position: pos + ": " + titulo,\n            be_modules_url: URL\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n\nfunction minutoNoticia(tituloNoticia) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars =\n            "prop56,eVar56,channel, prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop11, prop29, prop30, prop32, prop75";\n        s.linkTrackEvents = "event23";\n        s.prop56 = tituloNoticia;\n        s.eVar56 = s.prop56;\n        s.events = "event23";\n        s.tl(this, "o", s.prop56);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        utag.link({\n            events: "event23",\n            tealium_event: "dns timing",\n            event_category: "minutoNoticia",\n            event_action: "dns timing",\n            event_label: "event23",\n            be_titulo_noticia: tituloNoticia\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n\nfunction primeraNoticia(tituloNoticia) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars =\n            "prop56,eVar56,channel, prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop11, prop29, prop30, prop32, prop75";\n        s.linkTrackEvents = "event20";\n        s.prop56 = tituloNoticia;\n        s.eVar56 = s.prop56;\n        s.events = "event20";\n        s.tl(this, "o", s.prop56);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        utag.link({\n            events: "event20",\n            tealium_event: "primera noticia leida",\n            event_category: "primeraNoticia",\n            event_action: "primera noticia leida",\n            event_label: "event20",\n            be_titulo_noticia: tituloNoticia\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n\nfunction datosFormulario(nombreFormulario, tipoEnvio) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        if (tipoEnvio == "correcto") {\n            s.events = "event34";\n        } else {\n            s.events = "event35";\n        }\n\n        s.linkTrackVars =\n            "eVar70,events,channel,prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop11";\n        s.linkTrackEvents = "event33,event34,event35";\n        s.eVar70 = nombreFormulario;\n        s.tl(this, "o", "medicion formulario:" + s.eVar70);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        if (tipoEnvio == "correcto") {\n            event_tealium = "event34";\n        } else {\n            event_tealium = "event35";\n        }\n\n        utag.link({\n            events: event_tealium,\n            tealium_event: "form analysis" + nombreFormulario,\n            event_category: "datosFormulario",\n            event_action: "form analysis" + nombreFormulario,\n            event_label: "nombreFormulario"\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n\nfunction ComentariosSocialNoticias(categoria, accion) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars = "events,eVar9";\n        s.linkTrackEvents = "event77";\n        s.events = "event77";\n        s.tl(this, "o", "Social: Noticia: TODOS: Comentar");\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.be_page_url_qs === undefined\n        ) {\n            window.ueDataLayer.be_page_url_qs = "";\n            if (typeof window.ueDataLayer.entryError === "function")\n                window.ueDataLayer.entryError("e-not found be_page_url_qs");\n        }\n\n        utag.link({\n            events: "event77",\n            tealium_event: "actividad en noticia",\n            event_category: "ComentariosSocialNoticias",\n            event_action: "actividad en noticia",\n            event_label: "event77",\n            be_page_url_qs: ueDataLayer.be_page_url_qs\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n\nfunction envioActivaCuentaSite() {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        var texto = "Click en : Activa tu cuenta";\n\n        s.linkTrackVars = "";\n        s.linkTrackEvents = "event161,event162";\n        s.events = "event161,event162";\n        s.tl(this, "o", texto);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        utag.link({\n            events: "event162",\n            tealium_event: "registro: activacion cuenta otro site",\n            event_category: "envioActivaCuentaSite",\n            event_action: "registro: activacion cuenta otro site",\n            event_label: "event162"\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n//Registro\nfunction envioBotonRegistro(btnName, trackEvents, events) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        try {\n            s = s_gi(s_account);\n            s.linkTrackVars = "events";\n            s.linkTrackEvents = trackEvents;\n            s.events = events;\n            s.tl(this, "o", btnName);\n        } catch (e) {\n            console.warn("Analytics: " + e.toString());\n        }\n    }\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        utag.link({\n            events: trackEvents,\n            tealium_event: btnName,\n            event_category: "envioBotonRegistro",\n            event_action: btnName\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n//Agenda\nfunction envioAgenda(event) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars =\n            "prop72,eVar72,prop73,eVar73,prop74,eVar74,events,channel,prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop11,prop29,prop30,prop32,prop75";\n        s.linkTrackEvents = "event69";\n        s.prop72 = (event.detail.module || "") + " : " + (event.detail.type || "");\n        s.eVar72 = s.prop72;\n        s.prop73 =\n            (typeof event.detail.position !== "undefined" ?\n                event.detail.position :\n                "") +\n            " : " +\n            (event.detail.title || "");\n        s.eVar73 = s.prop73;\n        s.prop74 = event.detail.url || "";\n        s.eVar74 = s.prop74;\n        s.events = "event69";\n        s.tl(this, "o", "Medicion de modulos", null, this._redirect(location));\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n    }\n\n    //Tealium\n    if (\n        typeof window.utag === "object" &&\n        typeof window.utag.link === "function"\n    ) {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.be_modules_type === undefined\n        ) {\n            window.ueDataLayer.be_modules_type = "";\n            if (typeof window.ueDataLayer.entryError === "function")\n                window.ueDataLayer.entryError("e-not found be_modules_type");\n        }\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.be_modules_position === undefined\n        ) {\n            window.ueDataLayer.be_modules_position = "";\n            if (typeof window.ueDataLayer.entryError === "function")\n                window.ueDataLayer.entryError("e-not found be_modules_position");\n        }\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.be_modules_url === undefined\n        ) {\n            window.ueDataLayer.be_modules_url = "";\n            if (typeof window.ueDataLayer.entryError === "function")\n                window.ueDataLayer.entryError("e-not found be_modules_url");\n        }\n\n        utag.link({\n            events: "event69",\n            tealium_event: "medicion de modulos",\n            event_category: "modulos",\n            event_action: "medicion de modulos",\n            be_modules_type: ueDatalayer.be_modules_type,\n            be_modules_position: ueDatalayer.be_modules_position,\n            be_modules_url: ueDatalayer.be_modules_url\n        });\n    } else {\n        if (\n            window.ueDataLayer &&\n            typeof window.ueDataLayer.entryError === "function"\n        )\n            window.ueDataLayer.entryError("no se encuentra Tealium");\n    }\n}\n\n//pendular.io\nfunction pendularViewBar(bar_id, bar_name) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars = "";\n        s.linkTrackEvents = "event207";\n        s.events = "event207";\n        var texto = "Pendular: View Bar |" + bar_id + "" + bar_name;\n        s.tl(this, "o", texto);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n\n        //console.log("pendularViewBar fired");\n    }\n\n    //Tealium\n}\n\nfunction pendularClickAvatar(\n    bar_id,\n    bar_name,\n    story_id,\n    story_name,\n    position,\n    avatar_type\n) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        if (avatar_type == "Editorial") {\n            s.linkTrackVars = "";\n            s.linkTrackEvents = "event208";\n            s.events = "event208";\n            var texto =\n                "Pendular: Click Avatar |" +\n                bar_id +\n                "" +\n                bar_name +\n                "" +\n                story_id +\n                "" +\n                story_name +\n                "" +\n                position +\n                "" +\n                avatar_type;\n            s.tl(this, "o", texto);\n            s.linkTrackVars = "None";\n            s.linkTrackEvents = "None";\n\n        } else if (avatar_type == "Publicidad") {\n            s.linkTrackVars = "";\n            s.linkTrackEvents = "event211";\n            s.events = "event211";\n            var texto_ad =\n                "Pendular: Click Avatar Ad |" +\n                bar_id +\n                "" +\n                bar_name +\n                "" +\n                story_id +\n                "" +\n                story_name +\n                "" +\n                position +\n                "" +\n                avatar_type;\n            s.tl(this, "o", texto_ad);\n            s.linkTrackVars = "None";\n            s.linkTrackEvents = "None";\n\n        } else if (avatar_type == "Branded") {\n            s.linkTrackVars = "";\n            s.linkTrackEvents = "event214";\n            s.events = "event214";\n            var texto_bd =\n                "Pendular: Click Avatar Branded |" +\n                bar_id +\n                "" +\n                bar_name +\n                "" +\n                story_id +\n                "" +\n                story_name +\n                "" +\n                position +\n                "" +\n                avatar_type;\n            s.tl(this, "o", texto_bd);\n            s.linkTrackVars = "None";\n            s.linkTrackEvents = "None";\n        } else {\n            console.warn("Pendular param is not defined");\n        }\n    }\n}\n\nfunction pendularViewScene(\n    bar_id,\n    bar_name,\n    story_id,\n    story_name,\n    scene_id,\n    story_type\n) {\n    if (story_type == "Editorial") {\n        s.linkTrackVars = "";\n        s.linkTrackEvents = "event206";\n        s.events = "event206";\n        var texto =\n            "Pendular: View Scene |" +\n            bar_id +\n            "" +\n            bar_name +\n            "" +\n            story_id +\n            "" +\n            story_name +\n            "" +\n            scene_id +\n            "" +\n            story_type;\n        s.tl(this, "o", texto);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n\n    } else if (story_type == "Publicidad") {\n        s.linkTrackVars = "";\n        s.linkTrackEvents = "event210";\n        s.events = "event210";\n        var texto_ad =\n            "Pendular: View Scene Ad |" +\n            bar_id +\n            "" +\n            bar_name +\n            "" +\n            story_id +\n            "" +\n            story_name +\n            "" +\n            scene_id +\n            "" +\n            story_type;\n        s.tl(this, "o", texto_ad);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n\n    } else if (story_type == "Branded") {\n        s.linkTrackVars = "";\n        s.linkTrackEvents = "event213";\n        s.events = "event213";\n        var texto_bd =\n            "Pendular: View Scene Branded |" +\n            bar_id +\n            "" +\n            bar_name +\n            "" +\n            story_id +\n            "" +\n            story_name +\n            "" +\n            scene_id +\n            "" +\n            story_type;\n        s.tl(this, "o", texto_bd);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n\n    } else {\n        console.warn("Pendular param is not defined");\n    }\n}\n\nfunction pendularClickScene(\n    bar_id,\n    bar_name,\n    story_id,\n    story_name,\n    scene_id,\n    story_type,\n    url\n) {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        if (story_type == "Editorial") {\n            s.linkTrackVars = "";\n            s.linkTrackEvents = "event209";\n            s.events = "event209";\n            var texto =\n                "Pendular: View Scene |" +\n                bar_id +\n                "" +\n                bar_name +\n                "" +\n                story_id +\n                "" +\n                story_name +\n                "" +\n                scene_id +\n                "" +\n                story_type +\n                "" +\n                url;\n            s.tl(this, "o", texto);\n            s.linkTrackVars = "None";\n            s.linkTrackEvents = "None";\n\n        } else if (story_type == "Publicidad") {\n            s.linkTrackVars = "";\n            s.linkTrackEvents = "event212";\n            s.events = "event212";\n            var texto_ad =\n                "Pendular: View Scene Ad |" +\n                bar_id +\n                "" +\n                bar_name +\n                "" +\n                story_id +\n                "" +\n                story_name +\n                "" +\n                scene_id +\n                "" +\n                story_type +\n                "" +\n                url;\n            s.tl(this, "o", texto_ad);\n            s.linkTrackVars = "None";\n            s.linkTrackEvents = "None";\n\n        } else if (avatar_type == "Branded") {\n            s.linkTrackVars = "";\n            s.linkTrackEvents = "event215";\n            s.events = "event215";\n            var texto_bd =\n                "Pendular: View Scene Branded |" +\n                bar_id +\n                "" +\n                bar_name +\n                "" +\n                story_id +\n                "" +\n                story_name +\n                "" +\n                scene_id +\n                "" +\n                story_type +\n                "" +\n                url;\n            s.tl(this, "o", texto_bd);\n            s.linkTrackVars = "None";\n            s.linkTrackEvents = "None";\n\n        } else {\n            console.warn("Pendular param is not defined");\n        }\n    }\n    //Tealium\n}\n\n//pendular UE\n\nfunction pendularHideBar() {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars = "";\n        s.linkTrackEvents = "event204";\n        s.events = "event204";\n        var texto = "Pendular: Hide Bar";\n        s.tl(this, "o", texto);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n\n        console.log("pendularHideBar fired");\n    }\n    //Tealium\n}\n\nfunction pendularShowBar() {\n    //Adobe\n    if (typeof window.s === "object" && typeof window.s.tl === "function") {\n        s.linkTrackVars = "";\n        s.linkTrackEvents = "event205";\n        s.events = "event205";\n        var texto = "Pendular: Show Bar";\n        s.tl(this, "o", texto);\n        s.linkTrackVars = "None";\n        s.linkTrackEvents = "None";\n\n        console.log("pendularShowBar fired");\n    }\n    //Tealium\n}\n\nfunction omniture_reset_metrics_cookie(\n    omniture_name_metrics_cookie,\n    counter_usr_aux_omniture,\n    counter_status_usr_aux_omniture,\n    registered_usr_aux_omniture,\n    contract_usr_aux_omniture,\n    paid_content_aux_omniture,\n    suscription_type_aux_omniture\n) {\n    var omniture_domain_metrics_cookie =\n        "." +\n        location.hostname\n        .split(".")\n        .slice(1)\n        .join(".");\n    var n_aux_omniture =\n        counter_usr_aux_omniture +\n        "|" +\n        counter_status_usr_aux_omniture +\n        "|" +\n        registered_usr_aux_omniture +\n        "|" +\n        contract_usr_aux_omniture +\n        "|" +\n        paid_content_aux_omniture +\n        "|" +\n        suscription_type_aux_omniture;\n    var n_aux_date = new Date();\n    n_aux_date.setMonth(n_aux_date.getMonth() + 1);\n    n_aux_date.setDate(0);\n    n_aux_date.setHours(23, 59, 59, 0);\n    document.cookie =\n        omniture_name_metrics_cookie +\n        "=" +\n        n_aux_omniture +\n        "; expires=" +\n        n_aux_date.toGMTString() +\n        "; domain=" +\n        omniture_domain_metrics_cookie +\n        "; path=/";\n}\n\nfunction omniture_fill_vars_reg_user_metrics(\n    omniture_name_reg_cookie,\n    omniture_name_metrics_cookie,\n    s,\n    omniture_name_anon_cookie\n) {\n    var name_omniture = omniture_name_reg_cookie + "=";\n    var n_aux_omniture = document.cookie.indexOf(name_omniture);\n    var idusr_aux_omniture = "";\n    if (n_aux_omniture > -1) {\n        var exist = document.cookie.substring(n_aux_omniture).split(";")[0];\n        idusr_aux_omniture =\n            exist.indexOf("-") > -1 ?\n            exist.split("-")[0].substr(name_omniture.length) :\n            "";\n        idusr_aux_omniture =\n            idusr_aux_omniture == "" ? "" : parseInt(idusr_aux_omniture, 16);\n    }\n    var name_omniture = omniture_name_metrics_cookie + "=";\n    var n_aux_omniture = document.cookie.indexOf(name_omniture);\n    var counter_usr_aux_omniture = "0";\n    var counter_status_usr_aux_omniture = "0";\n    var registered_usr_aux_omniture = "0";\n    var contract_usr_aux_omniture = "0";\n    var paid_content_aux_omniture = "0";\n    var suscription_type_aux_omniture = "0";\n    var omniture_name_metrics_cookie_found = n_aux_omniture > -1;\n    if (omniture_name_metrics_cookie_found) {\n        var exist = document.cookie.substring(n_aux_omniture).split(";")[0];\n        counter_usr_aux_omniture =\n            exist.indexOf("|") > -1 ?\n            exist.split("|")[0].substr(name_omniture.length) :\n            "0";\n        if (typeof counter_usr_aux_omniture === "undefined") {\n            counter_status_usr_aux_omniture = "0";\n        }\n        counter_status_usr_aux_omniture =\n            exist.indexOf("|") > -1 ? exist.split("|")[1] : "0";\n        if (typeof counter_status_usr_aux_omniture === "undefined") {\n            counter_status_usr_aux_omniture = "0";\n        }\n        registered_usr_aux_omniture =\n            exist.indexOf("|") > -1 ? exist.split("|")[2] : "0";\n        if (typeof registered_usr_aux_omniture === "undefined") {\n            registered_usr_aux_omniture = "0";\n        }\n        contract_usr_aux_omniture =\n            exist.indexOf("|") > -1 ? exist.split("|")[3] : "0";\n        if (typeof contract_usr_aux_omniture === "undefined") {\n            contract_usr_aux_omniture = "0";\n        }\n        paid_content_aux_omniture =\n            exist.indexOf("|") > -1 ? exist.split("|")[4] : "0";\n        if (typeof paid_content_aux_omniture === "undefined") {\n            paid_content_aux_omniture = "0";\n        }\n        suscription_type_aux_omniture =\n            exist.indexOf("|") > -1 ? exist.split("|")[5] : "0";\n        if (typeof suscription_type_aux_omniture === "undefined") {\n            suscription_type_aux_omniture = "0";\n        }\n    }\n    if (idusr_aux_omniture != "" && registered_usr_aux_omniture == "0") {\n        counter_usr_aux_omniture = "0";\n        counter_status_usr_aux_omniture = "0";\n        registered_usr_aux_omniture = "1";\n        contract_usr_aux_omniture = "0";\n        paid_content_aux_omniture = "0";\n        suscription_type_aux_omniture = "0";\n    } else if (idusr_aux_omniture == "" && registered_usr_aux_omniture == "1") {\n        counter_usr_aux_omniture = "0";\n        counter_status_usr_aux_omniture = "0";\n        registered_usr_aux_omniture = "0";\n        contract_usr_aux_omniture = "0";\n        paid_content_aux_omniture = "0";\n        suscription_type_aux_omniture = "0";\n    }\n    s.eVar15 = s.prop15 = idusr_aux_omniture != "" ? "logged" : "not logged";\n\n    if (idusr_aux_omniture != "") {\n        s.eVar26 = s.prop26 = idusr_aux_omniture;\n    } else {\n        s.eVar26 = s.prop26 = "not logged";\n    }\n\n    if (typeof omniture_name_anon_cookie != "undefined") {\n        var name_omniture = omniture_name_anon_cookie + "=";\n        var n_aux_omniture = document.cookie.indexOf(name_omniture);\n        if (n_aux_omniture > -1) {\n            var exist = document.cookie.substring(n_aux_omniture).split(";")[0];\n            var idanon_aux_omniture =\n                exist.length > -1 ? exist.substr(name_omniture.length) : "";\n            if (idanon_aux_omniture.length == 43) {\n                s.prop67 = idanon_aux_omniture.substr(11);\n                s.eVar67 = s.prop67;\n            }\n        }\n    }\n    if (omniture_name_metrics_cookie_found) {\n        omniture_reset_metrics_cookie(\n            omniture_name_metrics_cookie,\n            counter_usr_aux_omniture,\n            "0",\n            registered_usr_aux_omniture,\n            contract_usr_aux_omniture,\n            "0",\n            suscription_type_aux_omniture\n        );\n    } else {\n        return;\n    }\n}\n\nfunction omniture_fill_vars_reg_user(omniture_name_reg_cookie, s) {\n    var name_omniture = omniture_name_reg_cookie + "=";\n    var n_aux_omniture = document.cookie.indexOf(name_omniture);\n    var idusr_aux_omniture = "";\n    if (n_aux_omniture > -1) {\n        var exist = document.cookie.substring(n_aux_omniture).split(";")[0];\n        idusr_aux_omniture =\n            exist.indexOf("-") > -1 ?\n            exist.split("-")[0].substr(name_omniture.length) :\n            "";\n        idusr_aux_omniture =\n            idusr_aux_omniture == "" ? "" : parseInt(idusr_aux_omniture, 16);\n    }\n    s.eVar15 = s.prop15 = idusr_aux_omniture != "" ? "logged" : "not logged";\n\n    if (idusr_aux_omniture != "") {\n        s.eVar26 = s.prop26 = idusr_aux_omniture;\n    } else {\n        s.eVar26 = s.prop26 = "not logged";\n    }\n}\nvar anaUtils = {\n    removeFromcsv: function(csv, v) {\n        //removes a val from csv\n        var csvArray = csv.split(",");\n        var endString = "";\n        if (csvArray.length > 0) {\n            for (i = 0; i <= csvArray.length - 1; i++) {\n                if (csvArray[i] == v) {\n                    removed = true;\n                } else {\n                    if (endString.length > 0) {\n                        endString += ",";\n                    }\n                    endString += csvArray[i];\n                }\n            }\n        }\n        return endString;\n    },\n    HTMLEncode: function(d) {\n        var a = d.split(""),\n            b = a.length,\n            c = [];\n        while (b--) {\n            var e = a[b].charCodeAt();\n            if (e < 33 || e > 127) {\n                c.push("&#" + e + ";");\n            } else {\n                c.push(a[b]);\n            }\n        }\n        return c.reverse().join("");\n    },\n    sc_quitatildes: function(cadenaTxt) {\n        if (typeof cadenaTxt !== "string") {\n            return "";\n        }\n        var a = cadenaTxt.replace(/%/g, "");\n        a = decodeURI(a);\n        a = a.replace(/(^[\\s|\\n|>]+|[\\s|\\n|>]+$)/g, "");\n        a = this.HTMLEncode(a);\n\n        a = a.replace(/&#32;/g, " ");\n        a = a.replace(/&#193;/g, "A");\n        a = a.replace(/&#195;/g, "a");\n        a = a.replace(/&#225;/g, "a");\n        a = a.replace(/&#201;/g, "E");\n        a = a.replace(/&#233;/g, "e");\n        a = a.replace(/&#205;/g, "I");\n        a = a.replace(/&#237;/g, "i");\n        a = a.replace(/&#211;/g, "O");\n        a = a.replace(/&#243;/g, "o");\n        a = a.replace(/&#218;/g, "U");\n        a = a.replace(/&#250;/g, "u");\n        a = a.replace(/&#220;/g, "U");\n        a = a.replace(/&#252;/g, "u");\n        a = a.replace(/&#192;/g, "A");\n        a = a.replace(/&#224;/g, "a");\n        a = a.replace(/&#200;/g, "E");\n        a = a.replace(/&#232;/g, "e");\n        a = a.replace(/&#204;/g, "I");\n        a = a.replace(/&#236;/g, "i");\n        a = a.replace(/&#210;/g, "O");\n        a = a.replace(/&#242;/g, "o");\n        a = a.replace(/&#217;/g, "U");\n        a = a.replace(/&#249;/g, "u");\n        a = a.replace(/&#209;/g, "N");\n        a = a.replace(/&#241;/g, "n");\n        a = a.replace(/&#201;/g, "E");\n        a = a.replace(/&#232;/g, "e");\n        a = a.replace(/&#231;/g, "c");\n        a = a.replace(/&#8230;/g, "");\n        a = a.replace(/\\?/g, "");\n        a = a.replace(/&#161;/g, "");\n        a = a.replace(/!/g, "");\n        a = a.replace(/&#191;/g, "");\n        a = a.replace(/&#8220;/g, "");\n        a = a.replace(/&#8221;/g, "");\n        a = a.replace(/&#8230;/g, " ");\n        a = a.replace(/&#8364;/g, "euros");\n        a = a.replace(/&#180;/g, "");\n        a = a.replace(/&#173;/g, "");\n        a = a.replace(/&#039;/g, "");\n        a = a.replace(/&#8216;/g, "\'");\n        a = a.replace(/&#8217;/g, "\'");\n        a = a.replace(/&aacute;/g, "a");\n        a = a.replace(/&eacute;/g, "e");\n        a = a.replace(/&iacute;/g, "i");\n        a = a.replace(/&oacute;/g, "o");\n        a = a.replace(/&uacute;/g, "u");\n        a = a.replace(/&Aacute;/g, "A");\n        a = a.replace(/&Eacute;/g, "E");\n        a = a.replace(/&Iacute;/g, "I");\n        a = a.replace(/&Oacute;/g, "O");\n        a = a.replace(/&Uacute;/g, "U");\n        a = a.replace(/&ntilde;/g, "n");\n        a = a.replace(/&quot;/g, "\'");\n\n        return a;\n    },\n    deviceIsMobile: function() {\n        var isMobile = false; //initiate as false\n        //device detection\n        if (\n            /(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(\n                navigator.userAgent\n            ) ||\n            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(\n                navigator.userAgent.substr(0, 4)\n            )\n        )\n            isMobile = true;\n\n        return isMobile;\n    },\n    AdBlockEnabled: function() {\n        var ad = document.createElement("ins");\n        ad.className = "AdSense";\n        ad.style.display = "block";\n        ad.style.position = "absolute";\n        ad.style.top = "-1px";\n        ad.style.height = "1px";\n        if (document.body != null) {\n            document.body.appendChild(ad);\n        }\n        var isAdBlockEnabled = !ad.clientHeight;\n        if (document.body != null) {\n            document.body.removeChild(ad);\n        }\n        return isAdBlockEnabled;\n    },\n    isVideoEvent: function() {\n        return (\n            typeof s.events != "undefined" &&\n            (s.events.indexOf("event40") > -1 ||\n                s.events.indexOf("event41") > -1 ||\n                s.events.indexOf("event36") > -1 ||\n                s.events.indexOf("event44") > -1 ||\n                s.events.indexOf("event45") > -1 ||\n                s.events.indexOf("event46") > -1)\n        );\n    }\n};',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLf3a69517d8054a7d946036c224fd6fbf',
            name: 'it_ab_testing_radio_marca',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '/radio/programas/', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0027/6864.js" async="async"></script>',
                  language: 'html',
                },
              },
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:413277,hjsv:5};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL5a938c5b664842b0b47cea10ef52fb85',
            name: 'it_qa_rum_pingdom_marca_futbol',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/futbol.html$' }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "var _npin = Math.random() * 274;\nif (_npin < 1) {var _prum = [['id', \"573b42a3abe53d534031f22f\"], ['mark', 'firstbyte', (new Date()).getTime()]]; (function() { var s = document.getElementsByTagName('script')[0], p = document.createElement('script'); p.async = 'async'; p.src = '//rum-static.pingdom.net/prum.min.js'; s.parentNode.insertBefore(p, s);})();}",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLd5a342a2eea24e47b87096428afde918',
            name: 'stat_sportweekend',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'sportweekend', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '/* SportWeekend 2020 auditorium corrections */\n\n            if (document.location.href.indexOf(\'auditorio/1\') > -1) {\n                s.prop1 = s.eVar2 = "lagrada";\n            }\n            if (document.location.href.indexOf(\'auditorio/2\') > -1) {\n                s.prop1 = s.eVar2 = "showtime";\n            }\n            if (document.location.href.indexOf(\'auditorio/3\') > -1) {\n                s.prop1 = s.eVar2 = "marcagaming";\n            }\n        ',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL20c49dae42834c889b4653739bad2a59',
            name: 'stat_conf_dmax',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'dmax', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraPaginaDMax(p){if("undefined"!=typeof jQuery){p.channel="discovery max",p.prop1="inicio";var r=document.location.pathname,o=r.split("/"),a=o.length;5==a&&(p.prop1=o[1],p.prop2=o[2],p.prop3=o[3]),4==a?(p.prop1=o[1],p.prop2=o[2]):3==a&&(p.prop1=o[1]),p.prop4="",p.eVar1=p.channel,p.eVar2=p.prop1,p.eVar3=p.prop2,p.eVar4=p.prop3,p.eVar5=p.prop4,p.prop2&&p.prop3?p.hier1="marca.com|"+p.channel+"|"+p.prop1+"|"+p.prop2+"|"+p.prop3:p.prop2?p.hier1="marca.com|"+p.channel+"|"+p.prop1+"|"+p.prop2:p.hier1="marca.com|"+p.channel+"|"+p.prop1,p.eVar32="especial",p.prop32="D=v32"}}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL8f35ece515294c4fb6614bd97b0985c6',
            name: 'stat_chartbeat_pixel_mab',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: '^(www.|)marca.com$', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<script type='text/javascript'>\nvar _sf_async_config=_sf_async_config||{};\n_sf_async_config.uid=52682;\n_sf_async_config.domain='marca.com';\n_sf_async_config.flickerControl=false;\n_sf_async_config.useCanonical=true;\nvar _sf_startpt=(new Date()).getTime();\n</script>\n<script src='//static.chartbeat.com/js/chartbeat_mab.js'></script>",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL24d6cfc8e62640349a456d076e4403d8',
            name: 'IT Accengage - Javascript Snippet',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '^\\/(index\\.html)*($|\\?.*)', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: 'cuidateplus', valueIsRegex: !0 }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    "(function () {\n function DOMContentLoaded (doc, cb) {\n   doc.readyState !== 'loading' ? cb(doc.readyState) : doc.addEventListener('DOMContentLoaded', function () {\n     cb(doc.readyState)\n   }, false)\n }\n DOMContentLoaded(window.document, function (state) {\n   // this is a fix accengage to not request permision on start\n   var id = 'accengageRequestBrowserPermission'\n   var link = window.document.getElementById(id)\n   if (!link || link.nodeName !== 'A') {\n     var node = window.document.createElement('a')\n     node.setAttribute('id', id)\n     var body = window.document.getElementsByTagName('body')[0]\n     body.appendChild(node)\n   }\n })\n}(window));\n\nvar siteAccengage = '';\nif(window.location.host.indexOf('cuidateplus') > -1) {\n    siteAccengage = 'cuidateplus-marca-com-by.accengage.net';\n}else {\n    siteAccengage = 'marca-com-by.accengage.net';\n}\n(function(l,o,a,d,i,n,g,w,e,b){\n g='AccengageWebSDKObject';w='script';l[g]=l[g]||{};l[g][n]=d;\n l[d]=l[d]||[];l[d].p={'date':1*new Date(),'window':l,'document':o,'params':a};\n e=o.createElement(w);b=o.getElementsByTagName(w)[0];e.async=1;\n e.src='https://'+n+i+'/init.js';b.parentNode.insertBefore(e,b);\n})(window,document,{},'ACC','/pushweb/assets', siteAccengage);\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL96256a80f4c34bad85ae8c8405da9dfc',
            name: 'stat_conf_socialgames',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'socialgames', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraPaginaSocialGames(p){if("undefined"!=typeof jQuery){p.channel="socialgames",p.prop1="inicio";var r=document.location.pathname,a=r.split("/"),o=a.length;4==o?(p.prop1=a[1],p.prop2=a[2]):3==o&&(p.prop1=a[1]),p.prop3="",p.prop4="",p.eVar1=p.channel,p.eVar2=p.prop1,p.eVar3=p.prop2,p.eVar4=p.prop3,p.eVar5=p.prop4,p.prop2?p.hier1="marca.com|"+p.channel+"|"+p.prop1+"|"+p.prop2:p.hier1="marca.com|"+p.channel+"|"+p.prop1,p.eVar32="especial",p.prop32="D=v32"}}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLd2dc92fee99148198138302cb717f9c8',
            name: 'stat_track_videos_youtube',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RC61207311d1eb48f69f9f4249338b555e-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLb4d5e079a9494fc4927719560a213cda',
            name: 'stat_conf_videos_youtube',
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
                    '//var started=new Array;window.onPlayerStateChange=function(e){e.data==YT.PlayerState.PLAYING&&void 0!==e.target.getVideoData&&started.indexOf(e.target.getVideoData().video_id)<0&&(setYTVideoData(e.target,"video start"),started.push(e.target.getVideoData().video_id)),e.data==YT.PlayerState.ENDED&&(setYTVideoData(e.target,"video end"),started.pop(e.target.getVideoData().video_id))},window.setYTVideoData=function(e,t){try{s.prop25=s.eVar25=anaUtils&&anaUtils.sc_quitatildes(e.getVideoData().author).toLowerCase(),s.prop29=s.eVar29=s.prop23=s.eVar23="etiquetas o tags del video - html5",s.eVar24="Player - Youtube",s.prop24=s.eVar24,s.eVar10=anaUtils&&anaUtils.sc_quitatildes(e.getVideoData().video_id).toLowerCase(),s.prop10=s.eVar10,s.prop11=s.eVar11=s.eVar20=anaUtils&&anaUtils.sc_quitatildes(e.getVideoData().title).toLowerCase(),s.prop20=s.eVar20,s.eVar40="vod",s.prop40=s.eVar40,s.eVar21=s.prop7,s.prop21=s.eVar21,s.eVar41=document.URL||"url de la pagina - html5",s.prop41=s.eVar41,s.eVar65=s.channel||"seccion donde esta ubicado el video - html5",s.prop65=s.eVar65,s.eVar68=s.prop1||"subseccion donde esta ubicado el video - html5",s.prop68=s.eVar68,"consumo 25"==t&&(s.events="event44",s.tl(this,"o","video 25%")),"consumo 50"==t&&(s.events="event45",s.tl(this,"o","video 50%")),"consumo 75"==t&&(s.events="event46",s.tl(this,"o","video 75%")),"video start"!=t&&"ad start"!=t||(s.events="event40",s.tl(this,"o","video play")),"video end"==t&&(s.events="event41,event36="+e.getDuration(),s.tl(this,"o","video stop")),s.events=""}catch(e){s.eVar69=e.message,s.events="event119",s.tl(this,"o","ERROR VIDEO")}};\nvar started=new Array;window.onPlayerStateChange=function(event){if(event.data==YT.PlayerState.PLAYING){if(typeof event.target.getVideoData!="undefined"&&started.indexOf(event.target.getVideoData().video_id)<0){setYTVideoData(event.target,"video start");started.push(event.target.getVideoData().video_id)}}if(event.data==YT.PlayerState.ENDED){setYTVideoData(event.target,"video end");started.pop(event.target.getVideoData().video_id)}};window.setYTVideoData=function(player,evento){try{var videoTags="Etiquetas o tags del Video - HTML5";var videoPlayerName="Player - Youtube";var videoId=anaUtils&&anaUtils.sc_quitatildes(player.getVideoData().video_id).toLowerCase();var videoTitle=anaUtils&&anaUtils.sc_quitatildes(player.getVideoData().title).toLowerCase();var videoEntryType="vod";var videoProvider=anaUtils&&anaUtils.sc_quitatildes(player.getVideoData().author).toLowerCase();var videoDuration=player.getDuration();if(window.s&&typeof window.s.t==="function"){s.prop29=s.eVar29=videoTags;s.prop24=s.eVar24=videoPlayerName;s.prop10=s.eVar10=videoId;s.prop11=s.eVar11=videoTitle;s.prop40=s.eVar40=videoEntryType;s.prop25=s.eVar25=videoProvider;s.prop21=s.eVar21=s.prop7;s.prop41=s.eVar41=document.URL||"URL de la página - HTML5";s.prop65=s.eVar65=s.channel||"Seccion donde esta ubicado el Video - HTML5";s.prop68=s.eVar68=s.prop1||"Subseccion donde esta ubicado el Video - HTML5";if(evento=="consumo 25"){s.events="event44";s.tl(this,"o","video 25%")}if(evento=="consumo 50"){s.events="event45";s.tl(this,"o","video 50%")}if(evento=="consumo 75"){s.events="event46";s.tl(this,"o","video 75%")}if(evento=="video start"||evento=="ad start"){s.events="event40";s.tl(this,"o","video play")}if(evento=="video end"){s.events="event41,event36="+videoDuration;s.tl(this,"o","video stop")}s.events=""}if(window.ueDataLayer){var launchTealiumVideoEvent=false;var eventName,tealiumEvent,eventAction,eventLabel="";var eventCategory="setYTVideoData";if(evento==="video start"||evento==="ad start"){launchTealiumVideoEvent=true;eventName=eventLabel="event40";tealiumEvent=eventAction="video views"}if(evento==="video end"){launchTealiumVideoEvent=true;eventName=eventLabel="event41";tealiumEvent=eventAction="video completes"}if(evento==="consumo 25"){launchTealiumVideoEvent=true;eventName=eventLabel="event44";tealiumEvent=eventAction="v:rep 25% del video"}if(evento==="consumo 50"){launchTealiumVideoEvent=true;eventName=eventLabel="event45";tealiumEvent=eventAction="v:rep 50% del video"}if(evento==="consumo 75"){launchTealiumVideoEvent=true;eventName=eventLabel="event46";tealiumEvent=eventAction="v:rep 75% del video"}if(launchTealiumVideoEvent&&eventName){if(typeof window.utag==="object"&&typeof window.utag.link==="function"){utag.link({events:eventName,tealium_event:tealiumEvent,event_category:eventCategory,event_action:eventAction,event_label:eventLabel,be_video_name:videoTitle,be_video_id:videoId,be_video_tags:videoTags,be_video_broadcast_type:videoEntryType,be_video_provider:videoProvider,be_video_duration:videoDuration,be_video_player:videoPlayerName})}}}}catch(err){if(window.s&&typeof window.s.tl==="function"){s.eVar69=err.message;s.events="event119";s.tl(this,"o","ERROR VIDEO")}if(window.ueDataLayer&&typeof window.ueDataLayer.entryError==="function"){window.ueDataLayer.entryError("Error analitica video youtube:"+err.mesage)}}};',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLea816ea271ab4b19b6dd615bf3790c8e',
            name: 'stat_conf_promociones',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: '/promociones', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraPaginaPromociones(r){r.channel="promociones";var e="";e=window.location.pathname,jerarquia=e.split("/"),r.hier1=r.prop7+"|"+r.channel,jerarquia.shift(),jerarquia.length>2&&(r.prop1=jerarquia[1].toLowerCase(),r.hier1=r.hier1+"|"+r.prop1,jerarquia.length>3&&(r.prop2=jerarquia[2].toLowerCase(),r.hier1=r.hier1+"|"+r.prop2,jerarquia.length>4&&(r.prop3=jerarquia[3].toLowerCase(),r.hier1=r.hier1+"|"+r.prop3,jerarquia.length>5&&(r.prop4=jerarquia[4].toLowerCase(),r.hier1=r.hier1+"|"+r.prop4)))),r.eVar32="otros",r.prop32="D=v32"}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLe5fc62ab621b4691bf940933322c0f73',
            name: 'stat_async_comparador_coches',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'comparador-coches', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    "// Galerías\njQuery(document).on('mousedown', 'section.galleries div.gallery', function() {\n  if(jQuery('section.galleries div.gallery.activegallery').length==0){  \n  \ts.linkTrackVars = \"prop53,eVar53\";\n\n    // Contador foto\n    if (typeof contadorFoto != 'undefined') {\n        contadorFoto++;\n    } else {\n        window.contadorFoto = 1;\n    }\n    s.eVar53 = contadorFoto;\n    s.prop53 = \"D=v53\";\n\n    s.tl(this, \"o\", \"click en visualizar galerias\");\n    s.linkTrackVars = \"None\";\n  }\n})\n\njQuery(document).on('mousedown', 'csgallery .gallery.activegallery footer span.left,csgallery .gallery.activegallery footer span.right', function() {\n    var iteraccion = jQuery(this).attr('class') == 'right' ? 'next' : 'prev';\n  \n  \tvar delay = 1000; //1 seconds\n    setTimeout(function() { \n      s.linkTrackVars = \"prop52,eVar52,prop53,eVar53,prop54,eVar54\";\n\n      if (typeof contadorFoto != 'undefined') {\n          contadorFoto++;\n      } else {\n          window.contadorFoto = 1;\n      }\n      s.eVar53 = contadorFoto;\n      s.prop53 = \"D=v53\";\n\n      s.eVar54 = iteraccion;\n      s.prop54 = \"D=v54\";\n  \n      s.eVar52 = (jQuery('csgallery .gallery nav div.active').index() + 1) + '|' + jQuery('csgallery .gallery nav div').length;\n      s.prop52 = \"D=v52\"; \n      s.tl(this, \"o\", \"click en galerias\");\n    \t\n      s.linkTrackVars = \"None\";        \n    }, delay);\n})  \n  \njQuery(document).on('mousedown', 'footer ul.social-networks li a', function() {\n  var redSocial = jQuery(this).text().toLowerCase()\n  envioEventoRedSocial(redSocial);\n})\n\n// Añadir al comparador\njQuery(document).on('mousedown', 'main#main-content .comparerButton, .inlinecomparer, .comparer-box a', function() {\n  var enlace = sc_quitatildes(jQuery.trim(jQuery(this).text().toLowerCase()));\n  envioSC(enlace);\n})\n",
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLf7124ad107724ea08bda5de2f2d4edc8',
            name: 'stat_conf_budbar',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'bar-budweiser|budbar', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function httpGet(theUrl){var xmlHttp=new XMLHttpRequest;return xmlHttp.open("GET",theUrl,!1),xmlHttp.send(null),xmlHttp.responseText}function limpiarJerarquia(){s.channel=s.eVar1=s.prop1=s.eVar2=s.prop2=s.eVar3=s.prop3=s.eVar4=s.prop4=s.eVar5=s.prop5=s.eVar6=s.prop6=s.eVar31=""}var storeName,matchInfo;function envioBudBar(match,barName,province,lat,lng){limpiarJerarquia(),matchInfo=void 0!==match&&null!=match?match:"",storeName=void 0!==barName&&null!=barName?barName:"",void 0!==lat&&null!=lat&&void 0!==lng&&null!=lng&&(s.prop39="lat: "+lat+" - lng: "+lng),void 0!==province&&null!=province&&(s.prop39=""),s.t()}function ConfiguraBudweiser(){s.prop7=s.eVar7="marca.com";var pathname="";if(pathname=window.location.pathname,s.pageURL=document.location.href,s.pageName=window.location.href.split("?")[0],s_omniture.pageName=window.location.href,pathname.lastIndexOf("partidos.html")>-1||pathname.lastIndexOf("bar-budweiser.html")>-1||pathname.lastIndexOf("buscador-bares.html")>-1||pathname.lastIndexOf("buscador-bares_app.html")>-1?pathname=pathname.substring(pathname.lastIndexOf(".html"),-1):pathname.lastIndexOf(".html")>-1&&(pathname=pathname.substring(pathname.lastIndexOf("/"),-1)),s_omniture.hier1=s.prop7+pathname.replace(/\\/[0-9]{2,}/g,"").replace(/\\//g,"|"),void 0!==matchInfo&&null!=matchInfo&&""!=matchInfo)s_omniture.hier1=s_omniture.hier1+"|"+matchInfo;else{var matchId=s.Util.getQueryParam("event");if(void 0!==matchId&&null!=matchId&&""!=matchId){var match=JSON.parse(httpGet("https://api.unidadeditorial.es/sports/v1/events/"+matchId+"?site=2"));matchInfo="evt:"+match.data.tournament.name+" "+match.data.sportEvent.competitors.homeTeam.commonName+" - "+match.data.sportEvent.competitors.awayTeam.commonName,s_omniture.hier1=s_omniture.hier1+"|"+matchInfo}}if(void 0!==storeName&&null!=storeName&&""!=storeName)s_omniture.hier1=s_omniture.hier1+"|"+storeName;else{var barId=s.Util.getQueryParam("bar");if(void 0!==barId&&null!=barId&&""!=barId){var bar=JSON.parse(httpGet("https://www.budweiserbar.com/api/v1/marca/user/"+barId));storeName="bar:"+bar.storeName,s_omniture.hier1=s_omniture.hier1+"|"+storeName}}for(jerarquia=s_omniture.hier1.split("|"),i=1;i<jerarquia.length;i++)s["eVar"+i]=jerarquia[i];s.eVar7!=s.prop7&&(s.eVar31=s.eVar7,s.eVar7=s.prop7),s_omniture.channel=s.eVar1,s_omniture.prop1=s.eVar2,s_omniture.prop2=s.eVar3,s_omniture.prop3=s.eVar4,s_omniture.prop4=s.eVar5,s_omniture.prop5=s.eVar6,s_omniture.prop6=s.eVar31;var lat=s.Util.getQueryParam("lat"),lng=s.Util.getQueryParam("lng");void 0!==lat&&null!=lat&&""!=lat&&void 0!==lng&&null!=lng&&""!=lng&&(s.prop39="lat: "+lat+" - lng: "+lng),s_omniture.prop32=null!=typeof s_omniture.prop32&&"pagecontent"!=s_omniture.prop32?s_omniture.prop32:"servicio"}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL531c008e323a40abb9e114690e6b6308',
            name: 'stat_thirty_seconds_dc',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'thirtySeconds' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RCc126a42bf3094f02ac6451b1b84fdd6f-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL08436fe5531c45c8a4079deef64ae588',
            name: 'stat_conf_comparador_coches',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'comparador-coches', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function HTMLEncode(e){for(var r=e.split(""),a=r.length,c=[];a--;){var p=r[a].charCodeAt();p<33||p>127?c.push("&#"+p+";"):c.push(r[a])}return c.reverse().join("")}function sc_quitatildes(e){if("string"!=typeof e)return"";var r=e.replace(/%/g,"");return r=decodeURI(r),r=r.replace(/(^[\\s|\\n|>]+|[\\s|\\n|>]+$)/g,""),r=HTMLEncode(r),r=r.replace(/&#32;/g," "),r=r.replace(/&#193;/g,"A"),r=r.replace(/&#195;/g,"a"),r=r.replace(/&#225;/g,"a"),r=r.replace(/&#201;/g,"E"),r=r.replace(/&#233;/g,"e"),r=r.replace(/&#205;/g,"I"),r=r.replace(/&#237;/g,"i"),r=r.replace(/&#211;/g,"O"),r=r.replace(/&#243;/g,"o"),r=r.replace(/&#218;/g,"U"),r=r.replace(/&#250;/g,"u"),r=r.replace(/&#220;/g,"U"),r=r.replace(/&#252;/g,"u"),r=r.replace(/&#192;/g,"A"),r=r.replace(/&#224;/g,"a"),r=r.replace(/&#200;/g,"E"),r=r.replace(/&#232;/g,"e"),r=r.replace(/&#204;/g,"I"),r=r.replace(/&#236;/g,"i"),r=r.replace(/&#210;/g,"O"),r=r.replace(/&#242;/g,"o"),r=r.replace(/&#217;/g,"U"),r=r.replace(/&#249;/g,"u"),r=r.replace(/&#209;/g,"N"),r=r.replace(/&#241;/g,"n"),r=r.replace(/&#201;/g,"E"),r=r.replace(/&#232;/g,"e"),r=r.replace(/&#231;/g,"c"),r=r.replace(/&#8230;/g,""),r=r.replace(/\\?/g,""),r=r.replace(/&#161;/g,""),r=r.replace(/!/g,""),r=r.replace(/&#191;/g,""),r=r.replace(/&#8220;/g,""),r=r.replace(/&#8221;/g,""),r=r.replace(/&#8230;/g," "),r=r.replace(/&#8364;/g,"euros"),r=r.replace(/&#180;/g,""),r=r.replace(/&#173;/g,""),r=r.replace(/&#039;/g,""),r=r.replace(/&#8216;/g,"\'"),r=r.replace(/&#8217;/g,"\'"),r=r.replace(/&aacute;/g,"a"),r=r.replace(/&eacute;/g,"e"),r=r.replace(/&iacute;/g,"i"),r=r.replace(/&oacute;/g,"o"),r=r.replace(/&uacute;/g,"u"),r=r.replace(/&Aacute;/g,"A"),r=r.replace(/&Eacute;/g,"E"),r=r.replace(/&Iacute;/g,"I"),r=r.replace(/&Oacute;/g,"O"),r=r.replace(/&Uacute;/g,"U"),r=r.replace(/&ntilde;/g,"n"),r=r.replace(/&quot;/g,"\'"),r}function ConfiguraComparadorCoches(e){if("undefined"!=typeof jQuery){var r=document.URL;r.replace("#","?");if(e.pageName=window.location.href.split("?")[0],e.eVar7="marca.com",e.prop7="D=v7",e.channel="comparador-coches",e.eVar1=e.channel,0==jQuery("breadcrumb a").length)e.eVar2="portada",e.prop1="D=v2",e.prop32="portadilla",e.eVar11="busca tu coche (portada)",e.hier1=e.eVar7+"|"+e.channel+"|"+e.eVar2;else if(e.prop32="especial",e.eVar11=jQuery("main#main-content h1").text().trim().toLowerCase(),1==jQuery("breadcrumb a").length)e.eVar2=sc_quitatildes(jQuery("breadcrumb span:last").text().trim().toLowerCase()),e.prop1="D=v2",e.hier1=e.eVar7+"|"+e.channel+"|"+e.eVar2,-1==e.eVar11.indexOf("comparador")&&-1==e.eVar11.indexOf("resultados")&&(e.eVar11=e.eVar11+" (marca)");else if(2==jQuery("breadcrumb a").length)e.eVar2=sc_quitatildes(jQuery("breadcrumb a:eq(1)").text().trim().toLowerCase()),e.eVar3=sc_quitatildes(jQuery("breadcrumb span:last").text().trim().toLowerCase()),e.prop1="D=v2",e.prop2="D=v3",e.hier1=e.eVar7+"|"+e.channel+"|"+e.eVar2+"|"+e.eVar3,e.eVar11=e.eVar11+" (modelo)";else if(3==jQuery("breadcrumb a").length){if(e.eVar2=sc_quitatildes(jQuery("breadcrumb a:eq(1)").text().trim().toLowerCase()),e.eVar3=sc_quitatildes(jQuery("breadcrumb a:eq(2)").text().trim().toLowerCase()),e.hier1=e.eVar7+"|"+e.channel+"|"+e.eVar2+"|"+e.eVar3,window.location.pathname.search("20")>-1){var a=window.location.pathname.search("20");e.eVar4=window.location.pathname.substring(a,a+4),e.eVar5=sc_quitatildes(jQuery("breadcrumb span:last").text().trim().toLowerCase()),e.hier1=e.eVar7+"|"+e.channel+"|"+e.eVar2+"|"+e.eVar3+"|"+e.eVar4+"|"+e.eVar5,e.eVar11=e.eVar11+" (modelo concreto)"}e.prop1="D=v2",e.prop2="D=v3",e.prop3="D=v4",e.prop4="D=v5"}if(e.prop11="D=v11",jQuery("a.Login").length>0?e.eVar15="Logged":e.eVar15="Not Logged",e.prop15="D=v15",e.prop75=e.eVar75="km77",e.eVar11.indexOf("resultados")>-1){var c=document.location.pathname.replace(/\\//g," ").replace("*","").trim();e.prop13=c.toLowerCase(),""!=e.Util.getQueryParam("fuel")&&(e.prop13=e.prop13+"-fuel:"+e.Util.getQueryParam("fuel")),""!=e.Util.getQueryParam("simplebodygroup")&&(e.prop13=e.prop13+"-sbp:"+e.Util.getQueryParam("simplebodygroup")),""!=e.Util.getQueryParam("price")&&(e.prop13=e.prop13+"-price:"+e.Util.getQueryParam("price")),e.eVar13="D=c13",e.eVar11=e.eVar11+" (resultados)",e.eVar11=e.eVar11.replace(": resultados","")}e.eVar29="comparador coches",-1==e.eVar11.indexOf("comparador")&&(window.location.pathname.length>1&&(e.eVar29=e.eVar29+"|"+window.location.pathname.replace("*","").replace(/\\//g," ").trim().replace(/ /g,"|")),e.prop29="D=v29"),e.list2=e.eVar29,e.eVar30="imagenes",e.prop30="D=v30"}void 0===window._interaction&&(window._interaction=0),window._interaction=window._interaction+1}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLdd8620b7818b451abff5c0eaae89f037',
            name: 'stat_conf_navidad',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'navidad', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'jQuery(".btn-fb").click(function(){var t=jQuery(this).parent().parent().parent().find("img").attr("src").split("/"),r=t.length;envioSC("clic compartir facebook gif:"+t[r-1])}),jQuery(".btn-tw").click(function(){var t=jQuery(this).parent().parent().parent().find("img").attr("src").split("/"),r=t.length;envioSC("clic compartir twitter gif:"+t[r-1])}),jQuery(".btn-g").click(function(){var t=jQuery(this).parent().parent().parent().find("img").attr("src").split("/"),r=t.length;envioSC("clic compartir google gif:"+t[r-1])}),jQuery(".btn-download").click(function(){var t=jQuery(this).parent().parent().parent().find("img").attr("src").split("/"),r=t.length;envioSC("clic descargar gif:"+t[r-1])});',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLc7c66bbb39454201b0a541c2c755547b',
            name: 'stat_fantasy_krux',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      -1 < document.location.pathname.indexOf('/laliga-fantasy/') &&
                      -1 < document.location.host.indexOf('www.marca.com')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<img src='https://beacon.krxd.net/event.gif?event_id=Nnma0PNM&event_type=default' width=0 height=0 />",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL99d349efa44b4e6aa6d109952398c799',
            name: 'it_apuestas_deportivas_tracker',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '/apuestas-deportivas/2018', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<script src="//js.perfecttoolmedia.com/trackjs.min.js" type="text/javascript"></script>',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL1dca15929c674a16b8180680c4987693',
            name: 'stat_conf_subdominios',
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
                    'function isVideoEvent(){return void 0!==s.events&&(s.events.indexOf("event40")>-1||s.events.indexOf("event41")>-1||s.events.indexOf("event36")>-1||s.events.indexOf("event44")>-1||s.events.indexOf("event45")>-1||s.events.indexOf("event46")>-1)}function ConfiguraSudominios(e){e.prop7=e.eVar7="marca.com";var a="";if(a=window.location.pathname,a.lastIndexOf(".aspx")>-1&&(a=a.substring(a.lastIndexOf(".aspx"),-1)),a.lastIndexOf(".html")>-1&&(a=a.substring(a.lastIndexOf(".html"),-1)),jerarquia=a.split("/"),jerarquia.shift(),hostname=window.location.hostname.split("."),hostname.length>0&&"www"===hostname[0]&&hostname.shift(),e.hier1=e.eVar7,hostname.length>2){e.channel=hostname[0].toLowerCase(),e.hier1=e.hier1+"|"+e.channel;var r=!1;if(jerarquia.length>0&&""!=jerarquia[0])for(var t=0;t<jerarquia.length;t++)r=r||t>6,""==jerarquia[t]||r||(e["prop"+(t+1)]=anaUtils&&anaUtils.sc_quitatildes(jerarquia[t].toLowerCase()),e.hier1=e.hier1+"|"+e["prop"+(t+1)]);else e.prop1="portada",e.hier1=e.hier1+"|"+e.prop1}e.eVar1=e.channel,e.eVar2=e.prop1,e.eVar3=e.prop2,e.eVar4=e.prop3,e.eVar5=e.prop4,e.eVar6=e.prop5,e.eVar31=e.prop6,"undefined"!=typeof jQuery?(e.prop32=e.eVar32="comparador"==e.channel||"comparadores"==e.channel||"buscadorcoches"==e.channel||"masmarca"==e.channel?"servicio":"portadilla","portada"!=e.prop1?jQuery("h1.page-title").length>0?e.prop11=e.eVar11=anaUtils&&anaUtils.sc_quitatildes(jQuery("h1.page-title").text().toLowerCase()):1==jQuery("h1").length?e.prop11=e.eVar11=anaUtils&&anaUtils.sc_quitatildes(jQuery("h1").text().toLowerCase()):jQuery("title").length>0&&(e.prop11=e.eVar11=anaUtils&&anaUtils.sc_quitatildes(jQuery("title").text().toLowerCase())):e.prop11=e.eVar11="portada "+e.channel):e.prop32=e.eVar32="comparador"==e.channel||"comparadores"==e.channel||"buscadorcoches"==e.channel||"masmarca"==e.channel?"servicio":"otros"}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL94cf620ad1f8451289034db5e377f75b',
            name: 'stat_conf_bosque',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'bosque', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraBosque(e){function r(e){for(var r=e.split(""),a=r.length,c=[];a--;){var o=r[a].charCodeAt();o<33||o>127?c.push("&#"+o+";"):c.push(r[a])}return c.reverse().join("")}function a(e){var a=decodeURI(e);return a=a.replace(/(^[\\s|\\n|>]+|[\\s|\\n|>]+$)/g,""),a=r(a),a=a.replace(/&#32;/g," "),a=a.replace(/&#193;/g,"A"),a=a.replace(/&#225;/g,"a"),a=a.replace(/&#201;/g,"E"),a=a.replace(/&#233;/g,"e"),a=a.replace(/&#205;/g,"I"),a=a.replace(/&#237;/g,"i"),a=a.replace(/&#211;/g,"O"),a=a.replace(/&#243;/g,"o"),a=a.replace(/&#218;/g,"U"),a=a.replace(/&#250;/g,"u"),a=a.replace(/&#220;/g,"U"),a=a.replace(/&#252;/g,"u"),a=a.replace(/&#192;/g,"A"),a=a.replace(/&#224;/g,"a"),a=a.replace(/&#200;/g,"E"),a=a.replace(/&#232;/g,"e"),a=a.replace(/&#204;/g,"I"),a=a.replace(/&#236;/g,"i"),a=a.replace(/&#210;/g,"O"),a=a.replace(/&#242;/g,"o"),a=a.replace(/&#217;/g,"U"),a=a.replace(/&#249;/g,"u"),a=a.replace(/&#209;/g,"N"),a=a.replace(/&#241;/g,"n"),a=a.replace(/&#201;/g,"E"),a=a.replace(/&#232;/g,"e"),a=a.replace(/&#8230;/g,""),a=a.replace(/\\?/g,""),a=a.replace(/&#161;/g,""),a=a.replace(/!/g,""),a=a.replace(/&#191;/g,""),a=a.replace(/&#8220;/g,""),a=a.replace(/&#8221;/g,""),a=a.replace(/&#8230;/g," "),a=a.replace(/&#8364;/g,"euros"),a=a.replace(/&#180;/g,""),a=a.replace(/&#173;/g,""),a=a.replace(/&#039;/g,""),a=a.replace("&aacute;","a"),a=a.replace("&eacute;","e"),a=a.replace("&iacute;","i"),a=a.replace("&oacute;","o"),a=a.replace("&uacute;","u"),a=a.replace("&Aacute;","A"),a=a.replace("&Eacute;","E"),a=a.replace("&Iacute;","I"),a=a.replace("&Oacute;","O"),a=a.replace("&Uacute;","U"),a}if("undefined"!=typeof jQuery){e.eVar7="marca.com",e.prop7="D=v7",e.channel="bosque",e.eVar1=e.channel,document.referrer||(e.referrer=document.referrer),e.eVar43=e.referrer,e.prop43="D=v43";for(var c=jQuery(".nav-item.selected").text().toLowerCase().trim().replace("\\n","");c.indexOf("  ")>-1;)c=c.replace(" ","");e.prop1=e.eVar2=a(c),e.hier1=e.eVar7+"|"+e.channel+"|"+e.eVar2,e.pageURL=document.location.href,e.eVar9=e.pageURL,e.prop9="D=v9",jQuery("#slide-3-layer-21:visible").length>0?e.prop15=e.eVar15="Logged":e.prop15=e.eVar15="Not Logged",window.optimizely=window.optimizely||[],window.optimizely.push("activateSiteCatalyst"),"inicio"==e.eVar2?e.prop32=e.eVar32="portada":e.prop32=e.eVar32="portadilla"}}jQuery("#rev_slider_1_1, #rev_slider_2_1").bind("revolution.slide.onchange",function(){ConfiguraBosque(s),0==control_llamada?control_llamada++:s.t()}),"undefined"!=typeof jQuery&&(jQuery("body").on("click","#slide-6-layer-41,#slide-6-layer-44,#slide-6-layer-45,#slide-6-layer-46",function(){envioSC(sc_quitatildes(jQuery(this).text().toLowerCase().trim()).replace("ñ","n"))}),jQuery("body").on("click",".tp-caption.rev-btn.rs-hover-ready#slide-6-layer-7",function(){envioSC(sc_quitatildes(jQuery(this).text().toLowerCase().trim()).replace("ñ","n"))}),jQuery("body").on("mousedown",".tp-caption.rev-btn.rs-hover-ready#login-btn",function(){envioSC(sc_quitatildes(jQuery(this).text().toLowerCase().trim()))}),jQuery("body").on("click","a.logo",function(){envioSC("logo marca")}),jQuery("body").on("click","#slide-1-layer-11",function(){envioSC("bases legales")}),jQuery("iframe").on("load",function(){jQuery(this).contents().find("a.download-link").on("click",function(){envioSC("descargar imagen "+sc_quitatildes(jQuery(this).siblings("p").text().toLowerCase().trim()).replace("ñ","n"))})}),function(e){e.each(["show","hide"],function(r,a){var c=e.fn[a];e.fn[a]=function(){return this.trigger(a),c.apply(this,arguments)}})}(jQuery),jQuery(".login-btn").on("hide",function(){envioSC("usuario ha colaborado")}));',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL920c64faca524213a07fb5ce978b009c',
            name: 'stat_PV_call',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'paginaVista' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RC4359c302d69d428c82ac29dbf38925d3-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLf76b7231d9d94e068b308ae901f7a9e7',
            name: 'stat_facebook_pixel_code',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'navidad', valueIsRegex: !0 },
                    { value: 'cuidateplus', valueIsRegex: !0 },
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
                    "<!-- Facebook Pixel Code -->\n<script>\n    !function (f, b, e, v, n, t, s) {\n        if (f.fbq) return; n = f.fbq = function () {\n            n.callMethod ?\n            n.callMethod.apply(n, arguments) : n.queue.push(arguments)\n        }; if (!f._fbq) f._fbq = n;\n        n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;\n        t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)\n    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');\n    fbq('init', '155657188322363'); // Insert your pixel ID here.\n    fbq('track', 'PageView');\n</script>\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\n        src=\"https://www.facebook.com/tr?id=155657188322363&ev=PageView&noscript=1\" /></noscript>\n<!-- DO NOT MODIFY -->\n<!-- End Facebook Pixel Code -->",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RLc968617ebf224aefad2d528f1f996cda',
            name: 'stat_controltag',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '!function(){var k=document.createElement("script");k.type="text/javascript",k.src="https://dmpcdn.el-mundo.net/cdn/77r.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(k,s)}();',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL83a6a626834140c6af18703753f19f8c',
            name: 'stat_conf_elgoldeoro',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'elgoldeoro', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraPaginaGolDeOro(e){if("undefined"!=typeof jQuery){e.channel="elgoldeoro",e.eVar7="marca.com",e.eVar1=e.channel,e.hier1=e.eVar7+"|"+e.channel;var o=[],r="";r=window.location.pathname,o=r.split("/"),o.length>1&&""==o[1]?(e.prop1="portada",e.hier1=e.hier1+"|"+e.prop1):o.length>1&&""!=o[1]&&(e.prop1=o[1].split(".")[0],e.prop1.indexOf("video")>=0&&(e.prop1="video",e.eVar11=sc_anaUtils&anaUtils.sc_quitatildes(jQuery("#video div.row").find("h2").text())+"|"+sc_anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery("#video div.row").find("h3").text())),e.prop11="D=v11"),e.hier1=e.hier1+"|"+e.prop1,o.length>2&&""!=o[2]&&(e.prop2=o[2].split(".")[0],e.hier1=e.hier1+"|"+e.prop2)),"portada"==e.prop1?e.prop32="portada":"video"==e.prop1?e.prop32="video":r.indexOf(".html")>=0?e.prop32="portadilla":e.prop32="pagecontent"}else console.log("ERROR: jQuery is not defined")}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLf3ddd68e09d444a094348170852483ca',
            name: 'stat_facebook_cp_pixel_code',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'cuidateplus', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<!-- Facebook Pixel Code -->\n<script>\n    !function (f, b, e, v, n, t, s) {\n        if (f.fbq) return; n = f.fbq = function () {\n            n.callMethod ?\n            n.callMethod.apply(n, arguments) : n.queue.push(arguments)\n        }; if (!f._fbq) f._fbq = n;\n        n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;\n        t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)\n    }(window,\n        document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');\n    fbq('init', '884528981704020'); // Insert your pixel ID here.\n    fbq('track', 'PageView');\n</script>\n<noscript><img height=\"1\" width=\"1\" style=\"display:none\"\n        src=\"https://www.facebook.com/tr?id=884528981704020&ev=PageView&noscript=1\" /></noscript>\n<!-- DO NOT MODIFY -->\n<!-- End Facebook Pixel Code -->",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL27893aaf15ac4be78f1b33f464b11553',
            name: 'stat_conf_branded_content',
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
                    'function ConfiguraPaginaBranded(e){if("undefined"!=typeof jQuery){e.channel="branded-content";var a="";a=window.location.pathname,a.lastIndexOf(".html")>-1&&(a=a.substring(a.lastIndexOf(".html"),-1)),jerarquia=a.split("/"),e.prop1="www"==document.domain.split(".")[0]?document.domain.split(".")[1]:document.domain.split(".")[0],e.hier1=e.prop7+"|"+e.channel+"|"+e.prop1,jerarquia.shift(),jerarquia.length>0&&""!=jerarquia[0]?(e.prop2=jerarquia[0].toLowerCase(),e.hier1=e.hier1+"|"+e.prop2,jerarquia.length>1&&""!=jerarquia[1]&&(e.prop3=jerarquia[1].toLowerCase(),e.hier1=e.hier1+"|"+e.prop3,jerarquia.length>2&&""!=jerarquia[2]&&(e.prop4=jerarquia[2].toLowerCase(),e.hier1=e.hier1+"|"+e.prop4,jerarquia.length>3&&""!=jerarquia[3]&&(e.prop5=jerarquia[3].toLowerCase(),e.hier1=e.hier1+"|"+e.prop5)))):(e.prop2="portada",e.hier1=e.hier1+"|"+e.prop2),e.eVar1=e.channel,e.eVar2=e.prop1,e.eVar3=e.prop2,e.eVar4=e.prop3,e.eVar5=e.prop4,e.eVar6=e.prop5,e.eVar31=e.prop6,document.domain.indexOf("sienteloscolores")>-1&&""!=jQuery(".hero h1").text()?(e.eVar11=anaUtils&&anaUtils.sc_quitatildes(jQuery(".hero h1").text().toLowerCase()),e.prop11="D=v11"):document.domain.indexOf("realidadyficcion")>-1&&""!=jQuery(".noticia__md--title h1").text()?(e.eVar11=anaUtils&&anaUtils.sc_quitatildes(jQuery(".noticia__md--title h1").text().toLowerCase()),e.prop11="D=v11"):document.domain.indexOf("saludesvida")>-1?(e.eVar11=anaUtils&&anaUtils.sc_quitatildes(jQuery(".title.point h1").text().toLowerCase()),e.prop11="D=v11"):document.domain.indexOf("elsalonde")>-1&&jQuery(".block-video-detail-title.animate").length>0?(e.eVar11=anaUtils&&anaUtils.sc_quitatildes(jQuery(".block-video-detail-title.animate").text().toLowerCase()),e.prop11="D=v11"):document.domain.indexOf("eldormitoriode")>-1&&jQuery(".block-video-detail-title.animate").length>0?(e.eVar11=anaUtils&&anaUtils.sc_quitatildes(jQuery(".block-video-detail-title.animate").text().toLowerCase()),e.prop11="D=v11"):document.domain.indexOf("caminaresdeporte")>-1?(e.eVar11="portada"==e.prop2?"portada caminar es deporte":anaUtils&&anaUtils.sc_quitatildes(jQuery.trim(jQuery(".entry-title h1").text().replace(/[\\s\\s]+/g," ")).toLowerCase()),e.prop11="D=v11"):document.domain.indexOf("estardondeestes")>-1?(e.eVar11="portada"==e.prop2?"portada estar donde estes":anaUtils&&anaUtils.sc_quitatildes(jQuery.trim(jQuery(".noticia__md--title h1").text().replace(/[\\s\\s]+/g," ")).toLowerCase()),e.prop11="D=v11"):document.domain.indexOf("noesfutboleslaliga")>-1?(e.eVar11="portada"==e.prop2?"portada no es futbol es la liga":anaUtils&&anaUtils.sc_quitatildes(jQuery.trim(jQuery(".entry-hero h1").text().replace(/[\\s\\s]+/g," ")).toLowerCase()),e.prop11="D=v11"):document.domain.indexOf("tuproposito")>-1?e.eVar11=e.prop11="portada"==e.prop2?"portada tuproposito":anaUtils&&anaUtils.sc_quitatildes(jQuery.trim(jQuery("title").text()).toLowerCase()):document.domain.indexOf("feliziudad")>-1&&(e.eVar11=e.prop11="portada"==e.prop2?"portada feliziudad":anaUtils&&anaUtils.sc_quitatildes(jQuery.trim(jQuery("title").text()).toLowerCase())),jQuery(".author").length>0&&(e.eVar75=anaUtils&&anaUtils.sc_quitatildes(jQuery.trim(jQuery(".author").text().replace(/[\\s\\s]+/g," ")).toLowerCase()),e.prop75="D=v75"),e.eVar32="otros",e.prop32="D=v32"}}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL964eb689602d4392a2d78c0c7a92f774',
            name: 'stat_conf_suscripciones',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'suscripcion', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraSuscripcion(e){try{var r=document.URL;r.replace("#","?");e.eVar7="marca.com",e.prop7=e.eVar7,e.channel="ventas digitales",e.pageName=window.location.href.split("?")[0],e.pageURL=document.location.href,e.eVar9=e.pageURL,e.prop9="D=v9",e.events=e.apl(e.events,"event2",",",1);var t="";t=window.location.pathname,jerarquia=t.split("/"),jerarquia.shift(),e.hier1=e.eVar7,e.channel="ventas digitales",e.hier1=e.hier1+"|"+e.channel;var a=!1;if(jerarquia.length>0&&""!=jerarquia[0])for(var i=0;i<jerarquia.length;i++)a=a||i>6,""==jerarquia[i]||a||("/pedido/index/index/"==document.location.pathname&&3==i?e["prop"+(i+1)]="datos de pago":e["prop"+(i+1)]=anaUtils&anaUtils.sc_quitatildes(jerarquia[i].toLowerCase()),e.hier1=e.hier1+"|"+e["prop"+(i+1)]);else e.prop1="portada",e.hier1=e.hier1+"|"+e.prop1;if(e.eVar1=e.channel,e.eVar2=e.prop1,e.eVar3=e.prop2,e.eVar4=e.prop3,e.eVar5=e.prop4,e.eVar6=e.prop5,e.eVar31=e.prop6,e.eVar32="ecommerce",e.prop32="D=v32",e.eVar35="origen",e.prop35="D=v35","undefined"!=typeof jQuery&&"block"==jQuery("#privacyPolicyLayerN").css("display")&&(e.events=e.apl(e.events,"event49",",",1)),e.prop14=e.eVar14=e.getNewRepeat(),e.eVar19="D=fid","undefined"!=typeof jQuery&&jQuery(".row > .col-main").find("h1").length>0&&(e.prop11=anaUtils&anaUtils.sc_quitatildes(jQuery(".row > .col-main").find("h1")[0].innerText.toLowerCase())),jQuery(".header-top-link li.last").text().search(/fin de sesi.n/i)>-1?e.prop15=e.eVar15="Logged":e.prop15=e.eVar15="Not Logged",jQuery("li.product").is(":visible")&&jQuery("li#product_tabs_description").is(":visible")&&-1==e.events.search(/scAdd/i)){e.events=e.apl(e.events,"prodView",",",1);var n=jQuery.trim(jQuery(\'span[itemprop*="sku"]\').text()),s=""!=jQuery.trim(jQuery(\'.product-info-tags.hidden span[itemprop*="category"]\').text())?anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(\'.product-info-tags.hidden span[itemprop*="category"]\').text())):"",p=anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(".product-name h1").text())).replace(/,/gi,".");e.products=s+";"+n+":"+p,e.eVar89=""!=e.Util.getQueryParam("s_kw","",document.referrer)&&-1!=e.Util.getQueryParam("cid","",document.referrer).search(/VENDIG/g)?e.Util.getQueryParam("s_kw","",document.referrer):null!=SC_getCookie("sc_accesoProd")?SC_getCookie("sc_accesoProd"):"",SC_setCookie("sc_accesoProd",e.eVar89)}if(document.URL.search("/checkout/cart")>=0&&jQuery("tr .fa.fa-close").is(":visible"))if(e.events=e.apl(e.events,"scView",",",1),e.events=e.apl(e.events,"event96",",",1),null!=SC_getCookie("sc_products")&&-1==e.events.search(/scRemove/i))e.products=SC_getCookie("sc_products");else if(-1==e.events.search(/scRemove/i)){var o=jQuery("h3.product-name").length;if(o>0){e.events=e.apl(e.events,"event97",",",1);n=jQuery.trim(jQuery(jQuery(\'span[itemprop*="sku"]\')[0]).text()),s=""!=jQuery.trim(jQuery(jQuery(\'.product-info-tags.hidden span[itemprop*="category"]\')[0]).text())?anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(jQuery(\'.product-info-tags.hidden span[itemprop*="category"]\')[0]).text())):"",p=anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(jQuery("h3.product-name")[0]).text())).replace(/,/gi,".");var c=jQuery(jQuery("h3.product-name")[0]).parent().parent().children(".a-center").first().children("input").val()||jQuery.trim(jQuery(jQuery("h3.product-name")[0]).parent().parent().children(".a-center").first().children("span").last().text()),u=anaUtils&anaUtils.sc_quitatildes(jQuery(jQuery("h3.product-name")[0]).parent().parent().children(".a-center").children(".cart-price").last().text()).replace(/,/gi,".");if(e.products=";"+p+";"+c+";"+u,o>1)for(i=1;i<jQuery("h3.product-name").length;i++)n=jQuery.trim(jQuery(jQuery(\'span[itemprop*="sku"]\')[i]).text()),s=""!=jQuery.trim(jQuery(jQuery(\'.product-info-tags.hidden span[itemprop*="category"]\')[i]).text())?anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(jQuery(\'.product-info-tags.hidden span[itemprop*="category"]\')[i]).text())):"",p=anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(jQuery("h3.product-name")[i]).text())).replace(/,/gi,"."),c=jQuery(jQuery("h3.product-name")[i]).parent().parent().children(".a-center").first().children("input").val()||jQuery.trim(jQuery(jQuery("h3.product-name")[i]).parent().parent().children(".a-center").first().children("span").last().text()),u=anaUtils&anaUtils.sc_quitatildes(jQuery(jQuery("h3.product-name")[i]).parent().parent().children(".a-center").children(".cart-price").last().text()).replace(/,/gi,"."),e.products+=",;"+p+";"+c+";"+u;SC_setCookie("sc_products",e.products)}}if("/pedido/"==document.location.pathname&&-1==e.events.search(/scRemove/i)){o=jQuery("h3.product-name").length;if(o>0){e.events=e.apl(e.events,"scCheckout,event97",",",1);n=jQuery.trim(jQuery(jQuery(\'span[itemprop*="sku"]\')[0]).text()),s=""!=jQuery.trim(jQuery(jQuery(\'.product-info-tags.hidden span[itemprop*="category"]\')[0]).text())?anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(jQuery(\'.product-info-tags.hidden span[itemprop*="category"]\')[0]).text())):"",p=anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(jQuery("h3.product-name")[0]).text())).replace(/,/gi,"."),c=jQuery(jQuery("h3.product-name")[0]).parent().parent().children(".a-center").children(".qty-wrapper").children(\'input[type="text"]\').val()||jQuery(jQuery("h3.product-name")[0]).parent().parent().children(".a-center").children(".qty-wrapper").children("span").text(),u=anaUtils&anaUtils.sc_quitatildes(jQuery(jQuery("h3.product-name")[0]).parent().parent().children(".last").text()).replace(/,/gi,".");if(e.products=s+";"+n+":"+p+";"+c+";"+u,o>1)for(i=1;i<jQuery("h3.product-name").length;i++)n=jQuery.trim(jQuery(jQuery(\'span[itemprop*="sku"]\')[i]).text()),s=""!=jQuery.trim(jQuery(jQuery(\'.product-info-tags.hidden span[itemprop*="category"]\')[i]).text())?anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(jQuery(\'.product-info-tags.hidden span[itemprop*="category"]\')[i]).text())):"",p=anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(jQuery("h3.product-name")[i]).text())).replace(/,/gi,"."),c=jQuery(jQuery("h3.product-name")[i]).parent().parent().children(".a-center").children(".qty-wrapper").children(\'input[type="text"]\').val()||jQuery(jQuery("h3.product-name")[i]).parent().parent().children(".a-center").children(".qty-wrapper").children("span").text(),u=anaUtils&anaUtils.sc_quitatildes(jQuery(jQuery("h3.product-name")[i]).parent().parent().children(".last").text()).replace(/,/gi,"."),e.products+=","+s+";"+n+":"+p+";"+c+";"+u;SC_setCookie("sc_products",e.products)}e.eVar89=""!=e.Util.getQueryParam("s_kw","",document.referrer)&&-1!=e.Util.getQueryParam("cid","",document.referrer).search(/VENDIG/g)?e.Util.getQueryParam("s_kw","",document.referrer):null!=SC_getCookie("sc_accesoProd")?SC_getCookie("sc_accesoProd"):"",SC_setCookie("sc_accesoProd",e.eVar89)}if(jQuery("h2").text().search(/Gracias por tu compra/)>=0){if(e.events=e.apl(e.events,"purchase,event93",",",1),e.purchaseID=jQuery("p a").eq(0).text(),e.eVar90=e.purchaseID,e.products=null!=SC_getCookie("sc_products")?SC_getCookie("sc_products"):"",e.eVar89=null!=SC_getCookie("sc_accesoProd")?SC_getCookie("sc_accesoProd"):"",e.eVar79=null!=SC_getCookie("sc_metodoPago")?SC_getCookie("sc_metodoPago"):"",e.prop63="D=v79",""!=e.products){e.list3=e.products.split(",")[0].split(";")[1].split(":")[1]+":"+e.products.split(",")[0].split(";")[3];for(i=1;i<e.products.split(",").length;i++)e.list3+=","+e.products.split(",")[i].split(";")[1].split(":")[1]+":"+e.products.split(",")[i].split(";")[3]}SC_setCookie("sc_accesoProd",""),SC_setCookie("sc_products",""),SC_setCookie("sc_metodoPago","")}e.eVar26=e.Util.getQueryParam("intcmp"),!e._channel||"Direct Load"==e._channel||""!=e._partner&&"n/a"!=e._partner||(e._partner="Other Channel",e._keywords="Other Channel"),e.visEvent&&(e.eVar47=e._channel,e.eVar48=e._partner,e.eVar49=decodeURI(e._keywords),e.eVar50=e._referringDomain,e.campaign=e._campaign,"Natural Search"==e._channel&&(e.campaign="SEO:"+e.eVar48,e.eVar46="SEO:"+e.eVar48+":"+e.eVar49),e.Util.getQueryParam("s_kw","cid")&&(e.eVar49=e.Util.getQueryParam("s_kw"),e.eVar49=e.rep(e.eVar49,"%20"," "))),e.eVar56=e.prop56=window.navigator.userAgent,e.eVar18||(e.eVar18="dtm")}catch(r){e.eVar18="null",e.eVar69=r.message}}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLed12846981ef4823934e4726dba86717',
            name: 'IT Accengage - Manifest Snippet',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: '^\\/(index\\.html)*($|\\?.*)', valueIsRegex: !0 }] },
              },
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: 'cuidate', valueIsRegex: !0 }] },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<link rel="manifest" href="https://www.marca.com/assets/push-web/manifest.json">',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL5614e7adc804438192109056073e9445',
            name: 'stat_taboola_pixel_code',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      !(
                        -1 < document.location.pathname.indexOf('eventos/marcador') ||
                        -1 < document.location.pathname.indexOf('/directo/') ||
                        -1 < document.location.pathname.indexOf('/en-directo/') ||
                        -1 < document.location.pathname.indexOf('/cronica/')
                      ) &&
                      (-1 < document.location.host.indexOf('www.marca.com') ||
                        -1 < document.location.host.indexOf('videos.marca.com'))
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<!-- Taboola Pixel Code -->\n<script type='text/javascript'>\n  window._tfa = window._tfa || [];\n  window._tfa.push({notify: 'event', name: 'page_view', id: 1171464});\n  !function (t, f, a, x) {\n         if (!document.getElementById(x)) {\n            t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);\n         }\n  }(document.createElement('script'),\n  document.getElementsByTagName('script')[0],\n  '//dmpcdn.el-mundo.net/cdn/libtrc/tfa.js',\n  'tb_tfa_script');\n</script>\n<noscript>\n  <img src='//trc.taboola.com/1171464/log/3/unip?en=page_view'\n      width='0' height='0' style='display:none'/>\n</noscript>\n<!-- End of Taboola Pixel Code -->\n",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL84971ffc33904f66889152c3bf520255',
            name: 'stat_conf_usa',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'us.marca', valueIsRegex: !0 },
                    { value: 'amp-aux', valueIsRegex: !0 },
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
                    'function ConfiguraPaginaUSA(e){e.pageName="undefined"!=typeof s_omniture&&void 0!==s_omniture.pageName?s_omniture.pageName:window.location.href.split("?")[0];try{omniture_fill_vars_reg_user("REGMARCAUSA",e)}catch(e){}if(e.pageName.indexOf("claro/eventos/")>-1&&(window.cms_marca=!1,void 0===s_omniture.prop5&&""===s_omniture.prop5||(e.prop5=s_omniture.prop5),document.getElementsByClassName("primero").length>0)){var r=document.getElementsByClassName("primero")[0].innerText.toLowerCase();r.indexOf("nica")>-1&&(e.prop6="post",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6),r.indexOf("directo")>-1&&(e.prop6="durante",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6),r.indexOf("previa")>-1&&(e.prop6="antes",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6)}if(e.pageName.indexOf("claro/eventos/")>-1){s_omniture.prop1="directos";var o="";o=document.querySelector("#cabeceraInteriorAjax .estadoPartido").innerHTML,"Finalizado"==o&&(e.prop6="Finalizado",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6)}(e.pageName.indexOf("videosus.marca")>-1||e.pageName.indexOf("videos.marcaus")>-1)&&"claro-us"!=s_omniture.channel&&(s_omniture.prop4=s_omniture.prop3,s_omniture.prop3=s_omniture.prop2,"home"!==s_omniture.prop2&&(s_omniture.prop2=s_omniture.prop1),s_omniture.prop1=s_omniture.channel,s_omniture.channel="claro-us",s_omniture.hier1="marca.com|"+s_omniture.channel+"|"+s_omniture.prop1+"|"+s_omniture.prop2),"undefined"!=typeof s_omniture&&void 0!==s_omniture.prop11&&""!=s_omniture.prop11&&(s_omniture.prop11=s_omniture.prop11.replace(/-/g," "))}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL827ec85bbbbc464e8f074f7bbdb95091',
            name: 'stat_conf_premios_laureus',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'premioslaureus', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraPremiosLaureus(o){if("undefined"!=typeof jQuery){o.eVar1=o.channel;var e=document.location.pathname.replace(/-|_/g," ").match(/([^\\/]+)/g);if(e&&"index2"!=e)for(i=0;i<e.length;i++)i==e.length-1&&jQuery("body").hasClass("single")?(o.eVar11=e[i],o.prop11="D=v11"):i<5?(o["eVar"+(i+2)]=e[i],o["prop"+(i+1)]="D=v"+(i+2)):(i=6)&&(o.eVar31=e[i],o.prop6="D=v31");else o.eVar2="home",o.prop1="D=v2";jQuery("body").hasClass("single")&&(o.eVar75=jQuery(".author a").text(),o.prop75="D=v75"),jQuery("body").on("click","button:contains(\'VOTAR\')",function(){envioSC("Votar")}),jQuery("body").on("click","a:contains(\'PARTICIPA\')",function(){envioSC("Participa")}),jQuery("body").on("click","div.social a.btn-tw",function(){envioEventoRedSocial("Twitter")}),jQuery("body").on("click","div.social a.btn-fb",function(){envioEventoRedSocial("Facebook")})}}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL2738f7f13b104fd9adce33e7121789a7',
            name: 'stat_conf_suscripcion_dom',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'suscripcion', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RC0c73ff3ff5434fe9b7390c3ef55c4012-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLe5da4468775242ea9d892ce532193f68',
            name: 'stat_conf_colombia',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      -1 < window.location.host.indexOf('videosco.marca.com') ||
                      -1 < window.location.host.indexOf('co.marca.com') ||
                      -1 < window.location.host.indexOf('amp-aux')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraPaginaColombia(e){try{omniture_fill_vars_reg_user("REGMARCACOLOMBIA",e)}catch(e){}if(e.pageName="undefined"!=typeof s_omniture&&void 0!==s_omniture.pageName?s_omniture.pageName:window.location.href.split("?")[0],e.pageName.indexOf("claro/eventos/")>-1&&(window.cms_marca=!1,void 0===s_omniture.prop5&&""===s_omniture.prop5||(e.prop5=s_omniture.prop5),document.getElementsByClassName("primero").length>0)){var r=document.getElementsByClassName("primero")[0].innerText.toLowerCase();r.indexOf("nica")>-1&&(e.prop6="post",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6),r.indexOf("directo")>-1&&(e.prop6="durante",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6),r.indexOf("previa")>-1&&(e.prop6="antes",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6)}if(e.pageName.indexOf("claro/eventos/")>-1){s_omniture.prop1="directos";var o="";o=document.querySelector("#cabeceraInteriorAjax .estadoPartido").innerHTML,"Finalizado"==o&&(e.prop6="Finalizado",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6)}"claro-co"!=s_omniture.channel&&(s_omniture.prop5=s_omniture.prop4,s_omniture.prop4=s_omniture.prop3,s_omniture.prop3=s_omniture.prop2,s_omniture.prop2=s_omniture.prop1,s_omniture.prop1=s_omniture.channel,s_omniture.channel="claro-co"),s_omniture.hier1=s_omniture.prop7+"|"+s_omniture.channel+"|"+s_omniture.prop1+"|"+s_omniture.prop2,"undefined"!=typeof s_omniture&&void 0!==s_omniture.prop11&&""!=s_omniture.prop11&&(s_omniture.prop11=s_omniture.prop11.replace(/-/g," "))}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLf33d801cd80d4e7aa0045d197b72963d',
            name: 'stat_rebote_call',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'rebote' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RCff05b052d0534fa48c26fcc591a03a8d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLef7cebef7e6d4d7598f1a63dc6a94893',
            name: 'stat_conf_supercodigo',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'supercodigo', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraPaginaSuperCodigo(r){"undefined"!=typeof jQuery&&(r.channel="supercodigo",r.prop1="inicio",void 0!==jQuery("li#supercodigo").attr("class")&&jQuery("li#supercodigo").attr("class").indexOf("on")>-1&&(r.prop1="supercodigo"),void 0!==jQuery("li#cartillas").attr("class")&&jQuery("li#cartillas").attr("class").indexOf("on")>-1&&(r.prop1="mis cartillas"),void 0!==jQuery("li#reservas").attr("class")&&jQuery("li#reservas").attr("class").indexOf("on")>-1&&(r.prop1="mis reservas"),r.prop2="",r.prop3="",r.prop4="",r.eVar1=r.channel,r.eVar2=r.prop1,r.eVar3=r.prop2,r.eVar4=r.prop3,r.eVar5=r.prop4,r.hier1="marca.com|"+r.channel+"|"+r.prop1,r.eVar32="especial",r.prop32="D=v32")}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLb79cfe82465a4829bf74843921245bf8',
            name: 'stat_conf_elderbi',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'elderbi', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraPaginaElderbi(r){if("undefined"!=typeof jQuery){r.channel="elderbi",r.prop1="inicio";var e="";if(e=window.location.pathname,jerarquia=e.split("/"),jerarquia.shift(),jerarquia.length>0&&(r.prop1=jerarquia[0].toLowerCase(),r.hier1=r.prop7+"|"+r.channel+"|"+r.prop1,""==jerarquia[0]&&(r.prop1=jerarquia[0].toLowerCase(),r.hier1=r.prop7+"|"+r.channel),jerarquia.length>1)){var a=jerarquia[1].split(".")[0];r.prop2=a.toLowerCase(),r.hier1=r.hier1+"|"+r.prop2,jerarquia.length>2&&(r.prop3=jerarquia[2].toLowerCase(),r.hier1=r.hier1+"|"+r.prop3,jerarquia.length>3&&(r.prop4=jerarquia[3].toLowerCase(),r.hier1=r.hier1+"|"+r.prop4,jerarquia.length>4&&(r.prop5=jerarquia[4].toLowerCase(),r.hier1=r.hier1+"|"+r.prop5,jerarquia.length>4&&(r.prop6=jerarquia[5].toLowerCase(),r.hier1=r.hier1+"|"+r.prop6))))}r.eVar32="especial",r.prop32="D=v32"}}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL4798902c582d430ab085c374de2e7a53',
            name: 'stat_conf_suscripcion_bottom',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'suscripcion', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'jQuery(document).ready(function(){jQuery(".tel,.teLlamamos").click(function(){var t=s_gi(s_account);t.linkTrackVars="prop51,eVar51,events",t.linkTrackEvents="event51",t.events="event51",t.prop51=document.domain+":boton llamada",t.eVar51="D=c51",t.tl(this,"o","click en "+document.domain+":boton llamada"),t.prop51=t.eVar51=t.events=""})}),jQuery(document).ready(function(){jQuery("button.button.btn-lo-quiero").click(function(){var t=s_gi(s_account);t.linkTrackVars="products,events",t.linkTrackEvents="scAdd",t.events="scAdd";var e=void 0!==jQuery(this).closest(".product-info").siblings(".product-info-tags.hidden").children(\'span[itemprop*="sku"]\').text()?jQuery(this).closest(".product-info").siblings(".product-info-tags.hidden").children(\'span[itemprop*="sku"]\').text():"",i=void 0!==jQuery(this).closest(".product-info").siblings(".product-info-tags.hidden").children(\'span[itemprop*="category"]\').text()?anaUtils&anaUtils.sc_quitatildes(jQuery(this).closest(".product-info").siblings(".product-info-tags.hidden").children(\'span[itemprop*="category"]\').text()):"",r=void 0!==(anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(this).closest(".product-info").siblings(".product-info-tags.hidden").children(\'span[itemprop*="name"]\').text())).replace(/,/gi,"."))?anaUtils&anaUtils.sc_quitatildes(jQuery.trim(jQuery(this).prev("h2").text())).replace(/,/gi,"."):"",a=void 0!==jQuery(this).closest(".product-info").siblings(".product-info-tags.hidden").children(\'span[itemprop*="price"]\').text()?jQuery.trim(jQuery(this).closest(".product-info").siblings(".product-info-tags.hidden").children(\'span[itemprop*="price"]\').text().replace(/,/gi,".").replace(/\u20AC/gi,"")):"";t.products=i+";"+e+":"+r+";1;"+a,t.tl(this,"o","add to cart")}),jQuery("#product-addtocart-button").click(function(){var t=s_gi(s_account);t.linkTrackVars="products,events",t.linkTrackEvents="scAdd";var e=void 0!==jQuery(this).parent().siblings(".arw-box-quantity").children("div").children("input#qty").val()?jQuery(this).parent().siblings(".arw-box-quantity").children("div").children("input#qty").val():"1",i=void 0!==jQuery(this).closest(".product-shop-inner").children(".product-info-tags.hidden").children(\'span[itemprop*="price"]\').text()?";"+parseFloat(jQuery.trim(jQuery(this).closest(".product-shop-inner").children(".product-info-tags.hidden").children(\'span[itemprop*="price"]\').text().replace(/,/gi,".").replace(/\u20AC/gi,"")))*parseFloat(e):"";t.products+=";"+e+i,t.events="scAdd",t.tl(this,"o","add to cart")})}),jQuery(document).ready(function(){jQuery(".btn-checkout").click(function(){for(var t=jQuery("h3.product-name").length,e="",i="",r=0;r<t;r++)i=i+anaUtils&anaUtils.sc_quitatildes(jQuery("h3.product-name").eq(r).text())+":"+anaUtils&anaUtils.sc_quitatildes(jQuery("td[data-th=\'Precio\'] .cart-price").eq(r).text().replace(",",".")),e=e+";"+anaUtils&anaUtils.sc_quitatildes(jQuery("h3.product-name").eq(r).text()),e=e+";"+jQuery("input[title=\'Cant.\']").eq(r).val(),e=e+";"+anaUtils&anaUtils.sc_quitatildes(jQuery(".last .cart-price").eq(r).text().replace(",",".")),r<jQuery("h3.product-name").length-1&&(e+=",",i+=",");var a={prop37:jQuery("#p_method_realexredirect").is(":checked")?"tarjeta de credito":"tarjeta de credito almacenada",eVar37:jQuery("#p_method_realexredirect").is(":checked")?"tarjeta de credito":"tarjeta de credito almacenada",products:e,list3:i,prop45:s.prop45,eVar10:s.eVar10};sessionStorage.sc_datospedido=JSON.stringify(a)})});',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLe052daa96419467abcd2c78e1c6048e3',
            name: 'stat_conf_1x2',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: '1x2', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraPagina1x2(p){if("undefined"!=typeof jQuery){p.channel="1x2";var r=document.URL,a=r.replace("#","?");p.prop1=document.location.pathname.split("/")[1],p.prop2=p.Util.getQueryParam("fuseaction","",a),p.prop3="",p.prop4="",p.eVar1=p.channel,p.eVar2=p.prop1,p.eVar3=p.prop2,p.eVar4=p.prop3,p.eVar5=p.prop4,p.prop2?p.hier1="marca.com|"+p.channel+"|"+p.prop1+"|"+p.prop2:p.hier1="marca.com|"+p.channel+"|"+p.prop1,p.eVar32="especial",p.prop32="D=v32"}}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL2d64f0f392dc4a938b3bb9001456371e',
            name: 'stat_sixty_seconds_dc',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'sixtySeconds' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RC0c968e9d687b442ca77a19dc644b5a20-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL57e0446d19374e17925d10c3a8154607',
            name: 'stat_track_mediapro_videos',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'jQuery("iframe").each(function(){var e=jQuery(this).attr("src");e&&e.indexOf("playerclipslaliga.tv")>-1&&(e.indexOf("?")>-1?-1==e.indexOf("eventscb")&&(e+="&eventscb=eventsplayer"):e+="?eventscb=eventsplayer",jQuery(this).attr("src",e))});if(window.addEventListener){window.addEventListener("message",receive,false)}else{if(window.attachEvent){window.attachEvent("onmessage",receive,false)}}function receive(event){var data=event.data;if(typeof window[data.cb]=="function"){window[data.cb].call(null,data.obj)}}var started=new Array;function eventsplayer(evento){if(typeof evento!="undefined"&&typeof evento.event!="undefined"){if(evento.event=="play"&&started.indexOf(evento.idClip)<0){jQuery.ajax({url:"https://api-cms.playerclipslaliga.tv/api/v1/clips/"+evento.idClip,headers:{"x-api-key":"5d4165e7ddb66776bb841404"},success:function(response,status,xhr){setMediaProVideoData(response,"video start");started.push(response._id)}})}if(evento.event=="complete"){jQuery.ajax({url:"https://api-cms.playerclipslaliga.tv/api/v1/clips/"+evento.idClip,headers:{"x-api-key":"5d4165e7ddb66776bb841404"},success:function(response,status,xhr){setMediaProVideoData(response,"video end");started.pop(evento.idClip)}})}}}window.setMediaProVideoData=function(videoData,tipo){try{var videoPlayerName="Player - Mediapro";var videoId=anaUtils&&anaUtils.sc_quitatildes(videoData._id).toLowerCase();var videoTitle=anaUtils&&anaUtils.sc_quitatildes(videoData.title).toLowerCase();var videoEntryType="vod";var videoTags=anaUtils&&anaUtils.sc_quitatildes(videoData.competition.name).toLowerCase()+"|"+anaUtils.sc_quitatildes(videoData.matchday.name).toLowerCase()+"|"+anaUtils.sc_quitatildes(videoData.teams[0].name).toLowerCase()+"|"+anaUtils.sc_quitatildes(videoData.teams[1].name).toLowerCase();var videoProvider="mediapro";var videoDuration=videoData.duration;if(window.s&&typeof window.s.t==="function"){s.prop24=s.eVar24=videoPlayerName;s.prop25=s.eVar25=videoProvider;s.prop29=s.eVar29=videoTags;s.prop10=s.eVar10=videoId;s.prop11=s.eVar11=videoTitle;s.prop40=s.eVar40=videoEntryType;if(tipo=="consumo 25"){s.events="event44";s.tl(this,"o","video 25%")}if(tipo=="consumo 50"){s.events="event45";s.tl(this,"o","video 50%")}if(tipo=="consumo 75"){s.events="event46";s.tl(this,"o","video 75%")}if(tipo=="video start"||tipo=="ad start"){s.events="event40";s.tl(this,"o","video play")}if(tipo=="video end"){s.events="event41,event36="+videoDuration;s.tl(this,"o","video stop")}s.events=""}if(window.ueDataLayer){var launchTealiumVideoEvent=false;var eventName,tealiumEvent,eventAction,eventLabel="";var eventCategory="setMediaProVideoData";if(tipo==="video start"||tipo==="ad start"){launchTealiumVideoEvent=true;eventName=eventLabel="event40";tealiumEvent=eventAction="video views"}if(tipo==="video end"){launchTealiumVideoEvent=true;eventName=eventLabel="event41";tealiumEvent=eventAction="video completes"}if(tipo==="consumo 25"){launchTealiumVideoEvent=true;eventName=eventLabel="event44";tealiumEvent=eventAction="v:rep 25% del video"}if(tipo==="consumo 50"){launchTealiumVideoEvent=true;eventName=eventLabel="event45";tealiumEvent=eventAction="v:rep 50% del video"}if(tipo==="consumo 75"){launchTealiumVideoEvent=true;eventName=eventLabel="event46";tealiumEvent=eventAction="v:rep 75% del video"}if(launchTealiumVideoEvent&&eventName){if(typeof window.utag==="object"&&typeof window.utag.link==="function"){utag.link({events:eventName,tealium_event:tealiumEvent,event_category:eventCategory,event_action:eventAction,event_label:eventLabel,be_video_name:videoTitle,be_video_id:videoId,be_video_tags:videoTags,be_video_broadcast_type:videoEntryType,be_video_provider:videoProvider,be_video_duration:videoDuration,be_video_player:videoPlayerName})}}}}catch(err){if(window.s&&typeof window.s.tl==="function"){s.eVar69=err.message;s.events="event119";s.tl(this,"o","ERROR VIDEO")}if(window.ueDataLayer&&typeof window.ueDataLayer.entryError==="function"){window.ueDataLayer.entryError("Error analitica video mediapro:"+err.mesage)}}};',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL9c3ad337c99c49ceb7db062132c0da5f',
            name: 'stat_goldeoro_call',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: '#ranking' },
                ruleOrder: 50,
              },
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: '#patrocinador' },
                ruleOrder: 50,
              },
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: '#goles_de_la_jornada' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RC3f25bf844c7e4715b89290709efac44c-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL4d327905a9b34684b4ddc0a03b8e349f',
            name: 'stat_conf_videosmx',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'videosmx', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraVideosMX(o){"claro-mx"!=s_omniture.channel&&(s_omniture.prop5=s_omniture.prop4,s_omniture.prop4=s_omniture.prop3,s_omniture.prop3=s_omniture.prop2,s_omniture.prop2=s_omniture.prop1,s_omniture.prop1=s_omniture.channel,s_omniture.channel="claro-mx"),"undefined"!=typeof s_omniture&&void 0!==s_omniture.prop11&&""!=s_omniture.prop11&&(s_omniture.prop11=s_omniture.prop11.replace(/-/g," "))}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL6e760c9db0f24dba972370ec43e4a133',
            name: 'stat_config_especiales',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'especiales', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function ConfiguraPaginaEspeciales(r){if("undefined"!=typeof jQuery){r.channel="especiales";var e="";e=window.location.pathname,jerarquia=e.split("/"),r.hier1=r.prop7+"|"+r.channel,jerarquia.shift(),jerarquia.length>0&&""!=jerarquia[0]?(r.prop1=jerarquia[0].toLowerCase(),r.hier1=r.hier1+"|"+r.prop1,jerarquia.length>1&&""!=jerarquia[1]?(r.prop2=jerarquia[1].toLowerCase(),"index.html"===r.prop2&&(r.prop2="portada"),r.hier1=r.hier1+"|"+r.prop2,jerarquia.length>2&&""!=jerarquia[2]&&(r.prop3=jerarquia[2].toLowerCase(),r.hier1=r.hier1+"|"+r.prop3,jerarquia.length>3&&""!=jerarquia[3]&&(r.prop4=jerarquia[3].toLowerCase(),r.hier1=r.hier1+"|"+r.prop4))):r.prop2="portada"):(r.prop2="portada",r.hier1=r.hier1+"|"+r.prop2),r.eVar32="especial",r.prop32="D=v32"}}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL2de74d15db804a9f8769843926c091f0',
            name: 'stat_view_comparador_coches_call',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'view' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RCec177d5ce9524c72849ea77f3a692951-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLd80eccd895d749a69d63533ba075d0a9',
            name: 'stat_nav_continua_call',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'navegacion_continua' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RC6254722f50cc424bbb161debb7c6083d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa222b707180d4c4598ac550b219f7a0a',
            name: 'stat_galeria_call',
            events: [
              {
                modulePath: 'core/src/lib/events/directCall.js',
                settings: { identifier: 'galeria' },
                ruleOrder: 50,
              },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RCe1afc8187c754571806c2b8399082c96-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLd774612e189540dd9fe3ce6cfe20e4e1',
            name: 'stat_track_videos_vimeo',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RCfe47b251e27c491b995406b47e884d00-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLd0b2528d3e5a48a4bc75fc55ae0ae949',
            name: 'stat_conf_cuidateplus',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'cuidateplus', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'function HTMLEncode(d) {\n    var a = d.split(""),\n        b = a.length,\n        c = [];\n    while (b--) {\n        var e = a[b].charCodeAt();\n        if (e < 33 || e > 127) {\n            c.push("&#" + e + ";");\n        } else {\n            c.push(a[b]);\n        }\n    }\n    return c.reverse().join("");\n}\n\nfunction sc_quitatildes(cadenaTxt) {\n    if (typeof cadenaTxt !== \'string\') {\n        return "";\n    }\n    var a = cadenaTxt.replace(/%/g, "");\n    a = decodeURI(a);\n    a = a.replace(/(^[\\s|\\n|>]+|[\\s|\\n|>]+$)/g, \'\')\n    a = HTMLEncode(a);\n\n    a = a.replace(/&#32;/g, " ");\n    a = a.replace(/&#193;/g, "A");\n    a = a.replace(/&#195;/g, "a");\n    a = a.replace(/&#225;/g, "a");\n    a = a.replace(/&#201;/g, "E");\n    a = a.replace(/&#233;/g, "e");\n    a = a.replace(/&#205;/g, "I");\n    a = a.replace(/&#237;/g, "i");\n    a = a.replace(/&#211;/g, "O");\n    a = a.replace(/&#243;/g, "o");\n    a = a.replace(/&#218;/g, "U");\n    a = a.replace(/&#250;/g, "u");\n    a = a.replace(/&#220;/g, "U");\n    a = a.replace(/&#252;/g, "u");\n    a = a.replace(/&#192;/g, "A");\n    a = a.replace(/&#224;/g, "a");\n    a = a.replace(/&#200;/g, "E");\n    a = a.replace(/&#232;/g, "e");\n    a = a.replace(/&#204;/g, "I");\n    a = a.replace(/&#236;/g, "i");\n    a = a.replace(/&#210;/g, "O");\n    a = a.replace(/&#242;/g, "o");\n    a = a.replace(/&#217;/g, "U");\n    a = a.replace(/&#249;/g, "u");\n    a = a.replace(/&#209;/g, "N");\n    a = a.replace(/&#241;/g, "n");\n    a = a.replace(/&#201;/g, "E");\n    a = a.replace(/&#232;/g, "e");\n    a = a.replace(/&#231;/g, "c");\n    a = a.replace(/&#8230;/g, "");\n    a = a.replace(/\\?/g, "");\n    a = a.replace(/&#161;/g, "");\n    a = a.replace(/!/g, "");\n    a = a.replace(/&#191;/g, "");\n    a = a.replace(/&#8220;/g, "");\n    a = a.replace(/&#8221;/g, "");\n    a = a.replace(/&#8230;/g, " ");\n    a = a.replace(/&#8364;/g, "euros");\n    a = a.replace(/&#180;/g, "");\n    a = a.replace(/&#173;/g, "");\n    a = a.replace(/&#039;/g, "");\n    a = a.replace(/&#8216;/g, "\'");\n    a = a.replace(/&#8217;/g, "\'");\n    a = a.replace(/&aacute;/g, \'a\');\n    a = a.replace(/&eacute;/g, \'e\');\n    a = a.replace(/&iacute;/g, \'i\');\n    a = a.replace(/&oacute;/g, \'o\');\n    a = a.replace(/&uacute;/g, \'u\');\n    a = a.replace(/&Aacute;/g, \'A\');\n    a = a.replace(/&Eacute;/g, \'E\');\n    a = a.replace(/&Iacute;/g, \'I\');\n    a = a.replace(/&Oacute;/g, \'O\');\n    a = a.replace(/&Uacute;/g, \'U\');\n    a = a.replace(/&ntilde;/g, \'n\');\n    a = a.replace(/&quot;/g, "\'");\n\n    return a;\n}\n\nfunction ConfiguraCuidatePlus(s) {\n\n    // Para evitar sobreescritura de prop32 (y otras futuras) definimos un flag\n    // configuracionByRule a true, para poder saltarnos ciertos "if"\n    configurationByRule = true;\n    s.sa("uemarcapreprod,uecuidateplus");\n\n    // Configuracion de channel. Siempre cuidateplus\n    s.channel = \'cuidateplus\';\n\n    // Cuidateplus\n    if (document.location.href.indexOf(\'mediktor\') == -1 || document.location.href.indexOf(\'evaluadortos\') == -1 && document.location.pathname.indexOf(\'/native/\') == -1) {\n        // Si existe hierachy\n        if (typeof hierachy != \'undefined\' && document.location.href.indexOf(\'/evento/2017/que_es\') == -1) {\n            if (hierachy[hierachy.length - 1] == "home") {\n                hierachy[hierachy.length - 1] = ""\n            }\n            // cuidate+ en marca\n            s.prop1 = (hierachy.length >= 0) ? sc_quitatildes(hierachy[0]) : "";\n            s.prop2 = (hierachy.length > 0 && hierachy[1] != \'home\') ? hierachy[1] : "";\n            s.prop3 = (hierachy.length > 1) ? hierachy[2] : "";\n            s.prop4 = (hierachy.length > 2) ? hierachy[3] : "";\n            s.prop5 = (hierachy.length > 3 && !(hierachy[0] == "enfermedades" && hierachy[4] == "que es")) ? hierachy[4] : "";\n\n            if (hierachy.length == 2 && jQuery(\'div ul li a.active-trail\').length == 1) {\n                s.prop1 = sc_quitatildes(jQuery.trim(jQuery(\'div ul li a.active-trail\').text().toLowerCase()));\n            }\n            if (s.prop1.indexOf("diccionario de enfermedades") > -1) {\n                s.prop1 = "enfermedades";\n            }\n            if (document.location.pathname.indexOf("/alimentacion/dietas/diccionario") > -1) {\n                s.prop2 = "diccionario de dietas";\n                s.prop3 = "";\n            }\n\n            if (jQuery(\'div ul li a.active-trail\').eq(0).text() == "Servicios" || jQuery(\'div ul li a.active-trail\').eq(0).text() == "servicios" || document.location.pathname.indexOf("comparador-de-salud.html") > -1) {\n                s.prop1 = "servicios";\n                s.prop2 = (hierachy.length >= 0) ? hierachy[0] : "";\n                s.prop3 = (hierachy.length > 0) ? hierachy[1] : "";\n                s.prop4 = (hierachy.length > 1) ? hierachy[2] : "";\n                s.prop5 = (hierachy.length > 2) ? hierachy[3] : "";\n            }\n\n            if (jQuery(\'article.noticia\').text().length > 0 && document.location.href.indexOf(\'diccionario/\') == -1) {\n                s[\'prop\' + hierachy.length] = "";\n            }\n\n            s.hier1 = s.eVar7 + "|" + s.channel;\n\n            if (s.prop1 != undefined && s.prop1 != "") {\n                s.hier1 = s.hier1 + "|" + s.prop1;\n            }\n            if (s.prop2 != undefined && s.prop2 != "") {\n                s.hier1 = s.hier1 + "|" + s.prop2;\n            }\n            if (s.prop3 != undefined && s.prop3 != "") {\n                s.hier1 = s.hier1 + "|" + s.prop3;\n            }\n            if (s.prop4 != undefined && s.prop4 != "") {\n                s.hier1 = s.hier1 + "|" + s.prop4;\n            }\n\n            // 02/05/17: Ajuste para URLs de evento\n        } else if (document.location.href.indexOf(\'evento\') > -1) {\n            s.prop1 = "evento";\n        } else {\n            var miga = document.location.pathname.replace(/-|_/g, \' \').match(/([^\\/]+)/g);\n            s.hier1 = s.eVar7;\n            if (!miga || miga == "/") {\n                s.prop1 = "portada";\n                s.hier1 = s.hier1 + "|" + s.channel + "|" + s.prop1;\n            } else {\n                for (i = 0; i < miga.length - 2; i++) {\n                    if (i < 5) {\n                        s[\'prop\' + (i + 2)] = miga[i];\n                    }\n                }\n            }\n        }\n    }\n\n    // Mediktor\n    else if (document.location.pathname.indexOf(\'/native/\') == -1) {\n        s.prop1 = "mediktor";\n        s.hier1 = s.eVar7 + "|" + s.channel;\n        s.hier1 = s.hier1 + \'|\' + s.prop1;\n        // prop32 default \n        s.prop32 = s.eVar32 = "servicios";\n        // Home\n        if (jQuery(\'section.home-portada\').length > 0) {\n            s.eVar11 = s.prop11 = "mediktor portadilla";\n            s.prop32 = s.eVar32 = "portadilla";\n        } else if (document.location.pathname.indexOf("evaluador") > -1) {\n            s.prop2 = \'evaluador\';\n            s.prop3 = \'P1: datos\';\n            s.hier1 = s.hier1 + \'|\' + s.prop2 + \'|\' + s.prop3;\n            s.eVar11 = s.prop11 = "evaluador P1: datos";\n            s.prop32 = s.eVar32 = "servicios";\n        } else if (document.location.pathname.indexOf("validacion-sintoma") > -1) {\n            s.prop2 = \'evaluador\';\n            s.prop3 = \'P2: validacion sintomas\';\n            s.hier1 = s.hier1 + \'|\' + s.prop2 + \'|\' + s.prop3;\n            s.eVar11 = s.prop11 = "evaluador P2: validacion sintomas";\n            s.prop32 = s.eVar32 = "servicios";\n        } else if (document.location.pathname.indexOf("preguntas") > -1) {\n            window.numpreg = 1;\n            s.prop2 = \'evaluador\';\n            s.prop3 = \'P3: responder pregunta\';\n            s.hier1 = s.hier1 + \'|\' + s.prop2 + \'|\' + s.prop3 + \'|\' + numpreg;\n            s.eVar11 = s.prop11 = "evaluador P3: responder pregunta " + numpreg;\n            s.prop32 = s.eVar32 = "servicios";\n        } else if (document.location.pathname.indexOf("resultados") > -1) {\n            s.prop2 = \'evaluador\';\n            s.prop3 = \'P4: resultados evaluador\';\n            s.hier1 = s.hier1 + \'|\' + s.prop2 + \'|\' + s.prop3;\n            s.eVar11 = s.prop11 = "evaluador P4: resultados evaluador";\n            s.prop32 = s.eVar32 = "servicios";\n        } else if (jQuery(\'h2\').length > 0) {\n            s.prop2 = sc_quitatildes(jQuery.trim(jQuery(\'h2\').text().toLowerCase()));\n            s.hier1 = s.hier1 + \'|\' + s.prop2;\n        }\n    }\n\n\n\n\n\n    // Calculos prop32 cuidate+\n    if (document.location.href.indexOf(\'mediktor\') == -1 || document.location.href.indexOf(\'evaluadortos\') == -1) {\n        s.eVar30 = "";\n        s.eVar30 = (jQuery(\'section.blk p img\').length > 3 || jQuery(\'figure\').length > 0) ? \'imagenes\' : s.eVar30;\n        s.eVar30 = (s.eVar30 == "" && jQuery(\'.videoKaltura\').length > 0) ? \'videos\' : s.eVar30;\n        s.eVar30 = (s.eVar30 != "" && jQuery(\'.videoKaltura\').length > 0) ? \'imagenes|videos\' : s.eVar30;\n        s.prop30 = "D=v30"\n\n        //Titular pagina y content type:\n        if (document.location.pathname == "/") {\n            s.eVar11 = s.prop11 = "cuidateplus portada";\n            s.prop32 = s.eVar32 = "portadilla";\n        } else if (jQuery(\'.portada\').length != 0 || jQuery(\'section.listado_noticias\').length == 1) {\n            s.eVar11 = s.prop11 = sc_quitatildes(jQuery.trim(jQuery(\'h1\').eq(0).text().toLowerCase()));\n            s.prop32 = s.eVar32 = "portadilla";\n        } else if (document.location.pathname.indexOf("/buscador/") > -1) {\n            s.eVar11 = s.prop11 = "buscador";\n            s.prop32 = s.eVar32 = "especial";\n        } else {\n            if (jQuery(\'h1\').length > -1) {\n                s.eVar11 = s.prop11 = sc_quitatildes(jQuery.trim(jQuery(\'h1\')[0].innerText.toLowerCase()));\n                s.prop32 = s.eVar32 = "noticia";\n            }\n            if (s.channel == \'enfermedades\' || document.location.pathname.indexOf(\'/diccionario\') != -1) {\n                s.prop32 = s.eVar32 = "diccionario";\n            }\n            if (jQuery(\'div ul li a.active-trail\').eq(0).text() == "Servicios" || jQuery(\'div ul li a.active-trail\').eq(0).text() == "servicios" || document.location.pathname.indexOf("comparador-de-salud.html") > -1) {\n                s.prop32 = s.eVar32 = "servicios";\n            }\n            if (document.location.pathname.indexOf(\'/recetas\') != -1) {\n                s.prop32 = s.eVar32 = "recetas";\n            }\n            if (s.prop32 == undefined || s.prop32 == "") {\n                s.prop32 = s.eVar32 = "especial";\n            }\n        }\n    }\n\n    //Sacamos los tags de la pagina y los informamos en la prop29, eVar29 y list2\n    if (jQuery(\'div.tags-box ul li a\').length > 0) {\n        s.eVar29 = jQuery(\'div.tags-box ul li a\').eq(0).text();\n        for (i = 1; i < jQuery(\'div.tags-box ul li a\').length - 1; i++) {\n            s.eVar29 = s.eVar29 + "|" + jQuery(\'div.tags-box ul li a\').eq(i).text();\n        }\n        s.prop29 = "D=v29";\n        s.list2 = s.eVar29;\n    }\n\n    // Ötras props de cuidate+\n    s.eVar15 = (jQuery(\'a.menuItemsLink .menuItemUser\').length > 0 || jQuery(\'#sesion-name\').length > 0) ? "Logged" : "Not Logged";\n    s.prop15 = "D=v15";\n    // Prop75 Author\n    if (document.location.pathname.indexOf(\'/native/\') == -1)\n        if (jQuery(\'div.author-date p\').length > 0)\n            s.eVar75 = sc_quitatildes(jQuery(\'div.author-date p\')[0].innerText.toLowerCase())\n    if (typeof s.eVar75 != \'undefined\')\n        s.prop75 = s.eVar75\n}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL5cd58d16f72245c09d31c825a16741be',
            name: 'stat_conf_argentina',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: {
                  subdomains: [
                    { value: 'ar.marca', valueIsRegex: !0 },
                    { value: 'marcaargentina.sta', valueIsRegex: !0 },
                    { value: 'amp-aux', valueIsRegex: !0 },
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
                    'function ConfiguraPaginaArgentina(e){e.pageName="undefined"!=typeof s_omniture&&void 0!==s_omniture.pageName?s_omniture.pageName:window.location.href.split("?")[0];try{omniture_fill_vars_reg_user("REGMARCAARGENTINA",e)}catch(e){}if(e.pageName.indexOf("claro/eventos/")>-1&&(window.cms_marca=!1,void 0===s_omniture.prop5&&""===s_omniture.prop5||(e.prop5=s_omniture.prop5),document.getElementsByClassName("primero").length>0)){var r=document.getElementsByClassName("primero")[0].innerText.toLowerCase();r.indexOf("nica")>-1&&(e.prop6="post",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6),r.indexOf("directo")>-1&&(e.prop6="durante",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6),r.indexOf("previa")>-1&&(e.prop6="antes",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6)}if(e.pageName.indexOf("claro/eventos/")>-1){s_omniture.prop1="directos";var o="";o=document.querySelector("#cabeceraInteriorAjax .estadoPartido").innerHTML,"Finalizado"==o&&(e.prop6="Finalizado",s_omniture.hier1=s_omniture.hier1+"|"+e.prop6)}(e.pageName.indexOf("videosar.marca")>-1||e.pageName.indexOf("videos.marcaargentina")>-1)&&"claro-ar"!=s_omniture.channel&&(s_omniture.prop4=s_omniture.prop3,s_omniture.prop3=s_omniture.prop2,"home"!==s_omniture.prop2&&(s_omniture.prop2=s_omniture.prop1),s_omniture.prop1=s_omniture.channel,s_omniture.channel="claro-ar",s_omniture.hier1="marca.com|"+s_omniture.channel+"|"+s_omniture.prop1+"|"+s_omniture.prop2),"undefined"!=typeof s_omniture&&void 0!==s_omniture.prop11&&""!=s_omniture.prop11&&(s_omniture.prop11=s_omniture.prop11.replace(/-/g," "))}',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RL2ff72e4b8aae4b75a29d7b067cdfd2d1',
            name: 'stat_taboola_pixel_code_cuidateplus',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      !(
                        -1 < document.location.pathname.indexOf('eventos/marcador') ||
                        -1 < document.location.pathname.indexOf('/directo/') ||
                        -1 < document.location.pathname.indexOf('/en-directo/') ||
                        -1 < document.location.pathname.indexOf('/cronica/')
                      ) && -1 < document.location.host.indexOf('cuidateplus.marca.com')
                    );
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    "<!-- Taboola Pixel Code -->\n<script type='text/javascript'>\n  window._tfa = window._tfa || [];\n  window._tfa.push({notify: 'event', name: 'page_view', id: 1171464});\n  !function (t, f, a, x) {\n         if (!document.getElementById(x)) {\n            t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);\n         }\n  }(document.createElement('script'),\n  document.getElementsByTagName('script')[0],\n  '//cdn.taboola.com/cdn/libtrc/tfa.js',\n  'tb_tfa_script');\n</script>\n<noscript>\n  <img src='//trc.taboola.com/1171464/log/3/unip?en=page_view'\n      width='0' height='0' style='display:none'/>\n</noscript>\n<!-- End of Taboola Pixel Code -->\n",
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL3dc4aba32c5f48ab80dcf923677a9529',
            name: 'stat_track_videoHTML5',
            events: [
              { modulePath: 'core/src/lib/events/windowLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    'https://assets.adobedtm.com/4d74bee6bf2c/d7a00be5cf81/668778d9c04a/RC90e71a5507b14df18fad4bb2095210a1-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLa11b2c204c07433da1cc372d85ef62d8',
            name: 'stat_fotogalerias',
            events: [
              { modulePath: 'core/src/lib/events/pageBottom.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/pathAndQuerystring.js',
                settings: { paths: [{ value: 'album', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !1,
                  source:
                    '"undefined"!=typeof jQuery&&(jQuery("body").on("click","a.gallery-slide-article__nav__next",function(){sessionStorage.interaccion_foto="next",void 0===sessionStorage.contador_foto?sessionStorage.contador_foto=1:sessionStorage.contador_foto=parseInt(sessionStorage.contador_foto)+1}),jQuery("body").on("click","a.gallery-slide-article__nav__previous",function(){sessionStorage.interaccion_foto="prev",void 0===sessionStorage.contador_foto?sessionStorage.contador_foto=1:sessionStorage.contador_foto=parseInt(sessionStorage.contador_foto)+1}),jQuery("body").on("click",\'a[href*="facebook"], .icon-facebook\',function(){envioEventoRedSocial("facebook")}),jQuery("body").on("click",\'a[href*="twitter"], .icon-twitter\',function(){envioEventoRedSocial("twitter")}));',
                  language: 'javascript',
                },
              },
            ],
          },
          {
            id: 'RLe679343de094411894f3202a006a3631',
            name: 'IT Accengage - Manifest Snippet Cuidateplus',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/path.js',
                settings: { paths: [{ value: 'cuidateplus', valueIsRegex: !0 }] },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '<link rel="manifest" href="https://cuidateplus.marca.com/assets/push-web/manifest.json">',
                  language: 'html',
                },
              },
            ],
          },
          {
            id: 'RL31e63496b5bc467face47ca470de6878',
            name: 'stat_comscore_pixel_franz',
            events: [
              { modulePath: 'core/src/lib/events/libraryLoaded.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/subdomain.js',
                settings: { subdomains: [{ value: 'amp-aux', valueIsRegex: !0 }] },
                negate: !0,
              },
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (
                      -1 < document.location.host.indexOf('www.marca.com') ||
                      -1 < document.location.host.indexOf('videos.marca.com') ||
                      -1 < document.location.host.indexOf('seguro.marca.com') ||
                      -1 < document.location.host.indexOf('videos.marca.com') ||
                      -1 < document.location.host.indexOf('videosliga.marca.com') ||
                      -1 < document.location.host.indexOf('especiales.marca.com') ||
                      -1 < document.location.host.indexOf('videosmx.marca.com') ||
                      -1 < document.location.host.indexOf('co.marca.com') ||
                      -1 < document.location.host.indexOf('ar.marca.com') ||
                      -1 < document.location.href.indexOf('us.marca.com/claro/') ||
                      -1 < document.location.host.indexOf('seguro-co.marca.com') ||
                      -1 < document.location.host.indexOf('seguro-ar.marca.com') ||
                      -1 < document.location.host.indexOf('seguro-us.marca.com')
                    );
                  },
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
                    'var comscoreC1 = \'2\';\nvar comscoreC2 = \'7184769\';\n\nvar callComscore = function() {\n    var params = { c1: comscoreC1, c2: comscoreC2, cs_ucfr: getCS_UCFR() };\n    if (window.COMSCORE && typeof window.COMSCORE.beacon === \'function\') {\n        window.COMSCORE.beacon(params);\n    } else {\n        window._comscore = window._comscore || [];\n        window._comscore.push(params);\n    }\n};\n\nvar getCS_UCFR = function() {\n    function getResult(knownConsent) {\n        switch (knownConsent) {\n            case \'-1\':\n            case null:\n            case undefined:\n                return \'\';\n            case \'0\':\n            case false:\n                return 0;\n            case \'1\':\n            case true:\n                return 1;\n            default:\n                return \'\';\n        }\n    }\n\n    if (window.ueCookiesPolicy && typeof window.ueCookiesPolicy.getUserConsentStatusForVendors === \'function\') {\n        var policyConsent = window.ueCookiesPolicy.getUserConsentStatusForVendors(\'comscore\'); // true || false || undefined || null\n        return getResult(typeof policyConsent === \'object\' ? policyConsent.comscore : undefined); // 1 || 0 || \'\'\n    } else if (window.localStorage) {\n        var storageConsent = localStorage.getItem(\'ueUserContentComscore\'); // \'1\' || \'0\' || \'-1\' || null\n        return getResult(storageConsent); // 1 || 0 || \'\'\n    } else {\n        return getResult(); // \'\'\n    }\n};\n\nvar init = function() {\n    bindCMPEvents();\n    callComscore();\n};\n\nvar bindCMPEvents = function() {\n    window.didomiEventListeners = window.didomiEventListeners || [];\n    window.didomiEventListeners.push({\n        event: \'consent.changed\',\n        listener: function() {\n            callComscore();\n            console.log("llamamos a Comscore tras el cambio en el CMP");\n        }\n    });\n};\n\ninit();\n\n\n\n(function() {\n    function udm_(e, t) {\n        var n = "comScore=",\n            r = document,\n            i = r.cookie,\n            s = "",\n            o = "indexOf",\n            u = "substring",\n            a = "length",\n            f = 2048,\n            l,\n            c = "&ns_",\n            h = "&",\n            p,\n            d,\n            v,\n            m,\n            g = window,\n            y = g.encodeURIComponent || escape;\n        if (i[o](n) + 1)\n            for (v = 0, d = i.split(";"), m = d[a]; v < m; v++)\n                (p = d[v][o](n)), p + 1 && (s = h + unescape(d[v][u](p + n[a])));\n        (e +=\n            c +\n            "_t=" +\n            +new Date() +\n            c +\n            "c=" +\n            (r.characterSet || r.defaultCharset || "") +\n            (g === g.top ? "" : c + "if=1") +\n            "&cv=3.1&c8=" +\n            y(r.title) +\n            s +\n            "&c7=" +\n            y(r.URL) +\n            "&c9=" +\n            y(r.referrer)),\n        e[a] > f &&\n            e[o](h) > 0 &&\n            ((l = e[u](0, f - 8).lastIndexOf(h)),\n                (e = (e[u](0, l) + c + "cut=" + y(e[u](l + 1)))[u](0, f))),\n            r.images ?\n            ((p = new Image()),\n                g.ns_p || (ns_p = p),\n                typeof t == "function" && (p.onload = p.onerror = t),\n                (p.src = e)) :\n            r.write(\n                "<",\n                "p",\n                "><",\n                \'img src="\',\n                e,\n                \'" height="1" width="1" alt="*"\',\n                "><",\n                "/p",\n                ">"\n            );\n    }\n    typeof _comscore == "undefined" && (_comscore = []),\n        (function() {\n            var e = "length",\n                t = window,\n                n = t.encodeURIComponent ? encodeURIComponent : escape,\n                r,\n                i = function(t) {\n                    if (t) {\n                        var r,\n                            i = [],\n                            s,\n                            o = 0,\n                            u,\n                            a,\n                            f = "";\n                        for (var l in t) {\n                            s = typeof t[l];\n                            if (s == "string" || s == "number")\n                                (i[i[e]] = l + "=" + n(t[l])),\n                                l == "c2" ? (f = t[l]) : l == "c1" && (o = 1);\n                        }\n                        if (i[e] <= 0 || f == "") return;\n                        (a = t.options || {}), (a.d = a.d || document);\n                        if (typeof a.url_append == "string") {\n                            u = a.url_append.replace(/&amp;/, "&").split("&");\n                            for (var l = 0, c = u[e], h; l < c; l++)\n                                (h = u[l].split("=")),\n                                h[e] == 2 && (i[i[e]] = h[0] + "=" + n(h[1]));\n                        }\n                        (r = [\n                            a.d.URL.charAt(4) == "s" ? "//sb" : "//b",\n                            ".scorecardresearch.com/b?",\n                            o ? "" : "c1=2&",\n                            i.join("&").replace(/&$/, "")\n                        ]),\n                        udm_(r.join(""));\n                    }\n                },\n                s = function(t) {\n                    t = t || _comscore;\n                    for (var n = 0, r = t[e]; n < r; n++) i(t[n]);\n                    t = _comscore = [];\n                };\n            s(),\n                (r = t.COMSCORE) ?\n                ((r.purge = s), (r.beacon = i)) :\n                (COMSCORE = {\n                    purge: s,\n                    beacon: i\n                });\n        })();\n})();',
                  language: 'javascript',
                },
              },
            ],
          },
        ],
      });
    var $___var_3518d3b3043e88b6 = (function () {
      const $___old_06c787e8e7a2d892 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_06c787e8e7a2d892)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_fd468a9a287c63aa.userAgent
          ));
        return function () {
          'use strict';
          function e (e, n) {
            return e((n = { exports: {} }), n.exports), n.exports;
          }
          function n (n) {
            var t = this.constructor;
            return this.then(
              function (e) {
                return t.resolve(n()).then(function () {
                  return e;
                });
              },
              function (e) {
                return t.resolve(n()).then(function () {
                  return t.reject(e);
                });
              }
            );
          }
          function u (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function r () {}
          function o (e, n) {
            return function () {
              e.apply(n, arguments);
            };
          }
          function a (e) {
            if (!(this instanceof a)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              d(e, this);
          }
          function i (r, o) {
            for (; 3 === r._state; ) r = r._value;
            0 !== r._state
              ? ((r._handled = !0),
                a._immediateFn(function () {
                  var e = 1 === r._state ? o.onFulfilled : o.onRejected;
                  if (null !== e) {
                    var n;
                    try {
                      n = e(r._value);
                    } catch (t) {
                      return void c(o.promise, t);
                    }
                    s(o.promise, n);
                  } else (1 === r._state ? s : c)(o.promise, r._value);
                }))
              : r._deferreds.push(o);
          }
          function s (e, n) {
            try {
              if (n === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (n && ('object' == typeof n || 'function' == typeof n)) {
                var t = n.then;
                if (n instanceof a) return (e._state = 3), (e._value = n), void p(e);
                if ('function' == typeof t) return void d(o(t, n), e);
              }
              (e._state = 1), (e._value = n), p(e);
            } catch (r) {
              c(e, r);
            }
          }
          function c (e, n) {
            (e._state = 2), (e._value = n), p(e);
          }
          function p (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              a._immediateFn(function () {
                e._handled || a._unhandledRejectionFn(e._value);
              });
            for (var n = 0, t = e._deferreds.length; n < t; n++) i(e, e._deferreds[n]);
            e._deferreds = null;
          }
          function l (e, n, t) {
            (this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof n ? n : null),
              (this.promise = t);
          }
          function d (e, n) {
            var t = !1;
            try {
              e(
                function (e) {
                  t || ((t = !0), s(n, e));
                },
                function (e) {
                  t || ((t = !0), c(n, e));
                }
              );
            } catch (r) {
              if (t) return;
              (t = !0), c(n, r);
            }
          }
          function m (e) {
            if (null === e || e === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(e);
          }
          function t () {
            try {
              if (!Object.assign) return !1;
              var e = new String('abc');
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
              for (var n = {}, t = 0; t < 10; t++) n['_' + String.fromCharCode(t)] = t;
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(n)
                  .map(function (e) {
                    return n[e];
                  })
                  .join('')
              )
                return !1;
              var r = {};
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                  r[e] = e;
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
              );
            } catch (o) {
              return !1;
            }
          }
          function g (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
          }
          if (window.atob) {
            var f = function (e) {
                var t = [];
                return (
                  e.forEach(function (n) {
                    n.events &&
                      n.events.forEach(function (e) {
                        t.push({ rule: n, event: e });
                      });
                  }),
                  t.sort(function (e, n) {
                    return e.event.ruleOrder - n.event.ruleOrder;
                  })
                );
              },
              v = 'debug',
              h = function (n, e) {
                var t = function () {
                    return 'true' === n.getItem(v);
                  },
                  r = function (e) {
                    n.setItem(v, e);
                  },
                  o = [],
                  a = function (e) {
                    o.push(e);
                  };
                return (
                  (e.outputEnabled = t()),
                  {
                    onDebugChanged: a,
                    getDebugEnabled: t,
                    setDebugEnabled: function (n) {
                      t() !== n &&
                        (r(n),
                        (e.outputEnabled = n),
                        o.forEach(function (e) {
                          e(n);
                        }));
                    },
                  }
                );
              },
              y = 'Module did not export a function.',
              _ = function (a, i) {
                return function (e, n, t) {
                  t = t || [];
                  var r = a.getModuleExports(e.modulePath);
                  if ('function' != typeof r) throw new Error(y);
                  var o = i(e.settings || {}, n);
                  return r.bind(null, o).apply(null, t);
                };
              },
              b = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              w = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              x = '\uD83D\uDE80',
              j =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : x,
              V = !1,
              k = function (e) {
                if (V && window.console) {
                  var n = Array.prototype.slice.call(arguments, 1);
                  n.unshift(j),
                    e !== w.DEBUG || window.console[e] || (e = w.INFO),
                    window.console[e].apply(window.console, n);
                }
              },
              C = k.bind(null, w.LOG),
              O = k.bind(null, w.INFO),
              E = k.bind(null, w.DEBUG),
              T = k.bind(null, w.WARN),
              L = k.bind(null, w.ERROR),
              P = {
                log: C,
                info: O,
                debug: E,
                warn: T,
                error: L,
                get outputEnabled () {
                  return V;
                },
                set outputEnabled (e) {
                  V = e;
                },
                createPrefixedLogger: function (e) {
                  var n = '[' + e + ']';
                  return {
                    log: C.bind(null, n),
                    info: O.bind(null, n),
                    debug: E.bind(null, n),
                    warn: T.bind(null, n),
                    error: L.bind(null, n),
                  };
                },
              },
              Q = e(function (r) {
                !(function (e) {
                  if (((r.exports = e()), !!0)) {
                    var n = window.Cookies,
                      t = (window.Cookies = e());
                    t.noConflict = function () {
                      return (window.Cookies = n), t;
                    };
                  }
                })(function () {
                  function c () {
                    for (var e = 0, n = {}; e < arguments.length; e++) {
                      var t = arguments[e];
                      for (var r in t) n[r] = t[r];
                    }
                    return n;
                  }
                  function p (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (u) {
                    function s () {}
                    function t (e, n, t) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (t = c({ path: '/' }, s.defaults, t)).expires &&
                          (t.expires = new Date(1 * new Date() + 86400000 * t.expires)),
                          (t.expires = t.expires ? t.expires.toUTCString() : '');
                        try {
                          var r = JSON.stringify(n);
                          /^[\{\[]/.test(r) && (n = r);
                        } catch (i) {}
                        (n = u.write
                          ? u.write(n, e)
                          : encodeURIComponent(String(n)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var o = '';
                        for (var a in t)
                          t[a] &&
                            ((o += '; ' + a), !0 !== t[a] && (o += '=' + t[a].split(';')[0]));
                        return (document.cookie = e + '=' + n + o);
                      }
                    }
                    function n (e, n) {
                      if ('undefined' != typeof document) {
                        for (
                          var t = {},
                            r = document.cookie ? document.cookie.split('; ') : [],
                            o = 0;
                          o < r.length;
                          o++
                        ) {
                          var a = r[o].split('='),
                            i = a.slice(1).join('=');
                          n || '"' !== i.charAt(0) || (i = i.slice(1, -1));
                          try {
                            var s = p(a[0]);
                            if (((i = (u.read || u)(i, s) || p(i)), n))
                              try {
                                i = JSON.parse(i);
                              } catch (c) {}
                            if (((t[s] = i), e === s)) break;
                          } catch (c) {}
                        }
                        return e ? t[e] : t;
                      }
                    }
                    return (
                      (s.set = t),
                      (s.get = function (e) {
                        return n(e, !1);
                      }),
                      (s.getJSON = function (e) {
                        return n(e, !0);
                      }),
                      (s.remove = function (e, n) {
                        t(e, '', c(n, { expires: -1 }));
                      }),
                      (s.defaults = {}),
                      (s.withConverter = e),
                      s
                    );
                  }
                  return e(function () {});
                });
              }),
              S = { get: Q.get, set: Q.set, remove: Q.remove },
              N = window,
              D = 'com.adobe.reactor.',
              U = function (r, e) {
                var o = D + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_42de50cff66e738c = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_42de50cff66e738c)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_d454ba247eb956b2.localStorage
                        ));
                      return function () {
                        try {
                          return N[r].getItem(o + e);
                        } catch (n) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_42de50cff66e738c)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_42de50cff66e738c
                        ));
                    }
                  },
                  setItem: function (e, n) {
                    const $___old_f2706e003c80916c = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_f2706e003c80916c)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_d454ba247eb956b2.localStorage
                        ));
                      return function () {
                        try {
                          return N[r].setItem(o + e, n), !0;
                        } catch (t) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_f2706e003c80916c)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_f2706e003c80916c
                        ));
                    }
                  },
                };
              },
              I = '_sdsat_',
              R = 'dataElements.',
              q = 'dataElementCookiesMigrated',
              A = U('localStorage'),
              M = U('sessionStorage', R),
              B = U('localStorage', R),
              F = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              z = {},
              H = function (e) {
                var n;
                try {
                  n = JSON.stringify(e);
                } catch (t) {}
                return n;
              },
              G = function (e, n, t) {
                var r;
                switch (n) {
                  case F.PAGEVIEW:
                    return void (z[e] = t);
                  case F.SESSION:
                    return void ((r = H(t)) && M.setItem(e, r));
                  case F.VISITOR:
                    return void ((r = H(t)) && B.setItem(e, r));
                }
              },
              W = function (e, n) {
                var t = S.get(I + e);
                t !== undefined && G(e, n, t);
              },
              $ = {
                setValue: G,
                getValue: function (e, n) {
                  var t;
                  switch (n) {
                    case F.PAGEVIEW:
                      return z.hasOwnProperty(e) ? z[e] : null;
                    case F.SESSION:
                      return null === (t = M.getItem(e)) ? t : JSON.parse(t);
                    case F.VISITOR:
                      return null === (t = B.getItem(e)) ? t : JSON.parse(t);
                  }
                },
                migrateCookieData: function (n) {
                  A.getItem(q) ||
                    (Object.keys(n).forEach(function (e) {
                      W(e, n[e].storageDuration);
                    }),
                    A.setItem(q, !0));
                },
              },
              Y = function (e, n, t, r) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  n +
                  '. ' +
                  t +
                  (r ? '\n' + r : '')
                );
              },
              J = function (s, c, u, p) {
                return function (e, n) {
                  var t = c(e);
                  if (!t) return p ? '' : undefined;
                  var r,
                    o = t.storageDuration;
                  try {
                    r = s.getModuleExports(t.modulePath);
                  } catch (i) {
                    return void P.error(Y(t, e, i.message, i.stack));
                  }
                  if ('function' == typeof r) {
                    var a;
                    try {
                      a = r(u(t.settings, n), n);
                    } catch (i) {
                      return void P.error(Y(t, e, i.message, i.stack));
                    }
                    return (
                      o && (null != a ? $.setValue(e, o, a) : (a = $.getValue(e, o))),
                      null == a && null != t.defaultValue && (a = t.defaultValue),
                      'string' == typeof a &&
                        (t.cleanText && (a = b(a)), t.forceLowerCase && (a = a.toLowerCase())),
                      a
                    );
                  }
                  P.error(Y(t, e, 'Module did not export a function.'));
                };
              },
              K = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return b(e.textContent);
                },
              },
              X = function (e, n, t) {
                for (var r, o = e, a = 0, i = n.length; a < i; a++) {
                  if (null == o) return undefined;
                  var s = n[a];
                  if (t && '@' === s.charAt(0)) {
                    var c = s.slice(1);
                    o = K[c](o);
                  } else if (o.getAttribute && (r = s.match(/^getAttribute\((.+)\)$/))) {
                    var u = r[1];
                    o = o.getAttribute(u);
                  } else o = o[s];
                }
                return o;
              },
              Z = function (a, i, s) {
                return function (e, n) {
                  var t;
                  if (i(e)) t = s(e, n);
                  else {
                    var r = e.split('.'),
                      o = r.shift();
                    'this' === o
                      ? n && (t = X(n.element, r, !0))
                      : 'event' === o
                      ? n && (t = X(n, r))
                      : 'target' === o
                      ? n && (t = X(n.target, r))
                      : (t = X(a[o], r));
                  }
                  return t;
                };
              },
              ee = function (t, r) {
                return function (e) {
                  var n = e.split('.')[0];
                  return Boolean(
                    r(e) || 'this' === n || 'event' === n || 'target' === n || t.hasOwnProperty(n)
                  );
                };
              },
              ne = function (e, n, t) {
                var r = { exports: {} };
                return e.call(r.exports, r, r.exports, n, t), r.exports;
              },
              te = function () {
                var i = {},
                  t = function (e) {
                    var n = i[e];
                    if (!n) throw new Error('Module ' + e + ' not found.');
                    return n;
                  },
                  e = function () {
                    Object.keys(i).forEach(function (e) {
                      try {
                        r(e);
                      } catch (t) {
                        var n =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          t.message +
                          (t.stack ? '\n' + t.stack : '');
                        P.error(n);
                      }
                    });
                  },
                  r = function (e) {
                    var n = t(e);
                    return (
                      n.hasOwnProperty('exports') ||
                        (n.exports = ne(n.definition.script, n.require, n.turbine)),
                      n.exports
                    );
                  };
                return {
                  registerModule: function (e, n, t, r, o) {
                    var a = { definition: n, extensionName: t, require: r, turbine: o };
                    (a.require = r), (i[e] = a);
                  },
                  hydrateCache: e,
                  getModuleExports: r,
                  getModuleDefinition: function (e) {
                    return t(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return t(e).extensionName;
                  },
                };
              },
              re = !1,
              oe = function (r) {
                return function (n, t) {
                  var e = r._monitors;
                  e &&
                    (re ||
                      (P.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (re = !0)),
                    e.forEach(function (e) {
                      e[n] && e[n](t);
                    }));
                };
              },
              ae = function (o, a, i) {
                var t,
                  r,
                  s,
                  c,
                  u = [],
                  p = function (e, n, t) {
                    if (!o(n)) return e;
                    u.push(n);
                    var r = a(n, t);
                    return u.pop(), null == r && i ? '' : r;
                  };
                return (
                  (t = function (e, t) {
                    var n = /^%([^%]+)%$/.exec(e);
                    return n
                      ? p(e, n[1], t)
                      : e.replace(/%(.+?)%/g, function (e, n) {
                          return p(e, n, t);
                        });
                  }),
                  (r = function (e, n) {
                    for (var t = {}, r = Object.keys(e), o = 0; o < r.length; o++) {
                      var a = r[o],
                        i = e[a];
                      t[a] = c(i, n);
                    }
                    return t;
                  }),
                  (s = function (e, n) {
                    for (var t = [], r = 0, o = e.length; r < o; r++) t.push(c(e[r], n));
                    return t;
                  }),
                  (c = function (e, n) {
                    return 'string' == typeof e
                      ? t(e, n)
                      : Array.isArray(e)
                      ? s(e, n)
                      : 'object' == typeof e && null !== e
                      ? r(e, n)
                      : e;
                  }),
                  function (e, n) {
                    return 10 < u.length
                      ? (P.error('Data element circular reference detected: ' + u.join(' -> ')), e)
                      : c(e, n);
                  }
                );
              },
              ie = function (o) {
                return function (e, n) {
                  if ('string' == typeof e) o[arguments[0]] = n;
                  else if (arguments[0]) {
                    var t = arguments[0];
                    for (var r in t) o[r] = t[r];
                  }
                };
              },
              se = setTimeout;
            (a.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (a.prototype.then = function (e, n) {
                var t = new this.constructor(r);
                return i(this, new l(e, n, t)), t;
              }),
              (a.prototype['finally'] = n),
              (a.all = function (n) {
                return new a(function (o, a) {
                  function i (n, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var t = e.then;
                        if ('function' == typeof t)
                          return void t.call(
                            e,
                            function (e) {
                              i(n, e);
                            },
                            a
                          );
                      }
                      (s[n] = e), 0 == --c && o(s);
                    } catch (r) {
                      a(r);
                    }
                  }
                  if (!u(n)) return a(new TypeError('Promise.all accepts an array'));
                  var s = Array.prototype.slice.call(n);
                  if (0 === s.length) return o([]);
                  for (var c = s.length, e = 0; e < s.length; e++) i(e, s[e]);
                });
              }),
              (a.resolve = function (n) {
                return n && 'object' == typeof n && n.constructor === a
                  ? n
                  : new a(function (e) {
                      e(n);
                    });
              }),
              (a.reject = function (t) {
                return new a(function (e, n) {
                  n(t);
                });
              }),
              (a.race = function (o) {
                return new a(function (e, n) {
                  if (!u(o)) return n(new TypeError('Promise.race accepts an array'));
                  for (var t = 0, r = o.length; t < r; t++) a.resolve(o[t]).then(e, n);
                });
              }),
              (a._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  se(e, 0);
                }),
              (a._unhandledRejectionFn = function kn (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ce = window.Promise || a['default'] || a,
              ue = function (u, t, r) {
                return function (s, n, c, e) {
                  return e.then(function () {
                    var a,
                      i = s.delayNext;
                    return new ce(function (e, n) {
                      var t = u(s, c, [c]);
                      if (!i) return e();
                      var r = s.timeout,
                        o = new ce(function (e, n) {
                          a = setTimeout(function () {
                            n(
                              new Error(
                                'A timeout occurred because the action took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      ce.race([t, o]).then(e, n);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(a), (e = t(e)), r(s, n, e), ce.reject(e);
                      })
                      .then(function () {
                        clearTimeout(a);
                      });
                  });
                };
              },
              pe = function (c, t, r, o, u) {
                return function (i, n, s, e) {
                  return e.then(function () {
                    var a;
                    return new ce(function (e, n) {
                      var t = c(i, s, [s]),
                        r = i.timeout,
                        o = new ce(function (e, n) {
                          a = setTimeout(function () {
                            n(
                              new Error(
                                'A timeout occurred because the condition took longer than ' +
                                  r / 1000 +
                                  ' seconds to complete. '
                              )
                            );
                          }, r);
                        });
                      ce.race([t, o]).then(e, n);
                    })
                      ['catch'](function (e) {
                        return clearTimeout(a), (e = t(e)), o(i, n, e), ce.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(a), !r(i, e))) return u(i, n), ce.reject();
                      });
                  });
                };
              },
              le = ce.resolve(),
              de = function (r, o, e) {
                return function (n, t) {
                  return (
                    n.conditions &&
                      n.conditions.forEach(function (e) {
                        le = r(e, n, t, le);
                      }),
                    n.actions &&
                      n.actions.forEach(function (e) {
                        le = o(e, n, t, le);
                      }),
                    (le = (le = le.then(function () {
                      e(n);
                    }))['catch'](function () {}))
                  );
                };
              },
              me = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              fe = function (i, s, c, u) {
                return function (e, n) {
                  var t;
                  if (e.conditions)
                    for (var r = 0; r < e.conditions.length; r++) {
                      t = e.conditions[r];
                      try {
                        var o = i(t, n, [n]);
                        if (me(o))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!s(t, o)) return c(t, e), !1;
                      } catch (a) {
                        return u(t, e, a), !1;
                      }
                    }
                  return !0;
                };
              },
              ge = function (t, r) {
                return function (e, n) {
                  t(e, n) && r(e, n);
                };
              },
              ve = function (t) {
                return function (e) {
                  var n = t.getModuleDefinition(e.modulePath);
                  return (n && n.displayName) || e.modulePath;
                };
              },
              he = function (o) {
                return function (e) {
                  var n = e.rule,
                    t = e.event,
                    r = o.getModuleDefinition(t.modulePath).name;
                  return {
                    $type: o.getModuleExtensionName(t.modulePath) + '.' + r,
                    $rule: { id: n.id, name: n.name },
                  };
                };
              },
              ye = function (s, c, u, p, l, d) {
                return function (t, e) {
                  var r = e.rule,
                    n = e.event;
                  n.settings = n.settings || {};
                  try {
                    var o = l(e);
                    c(n, null, [
                      function a (e) {
                        var n = u(o, e);
                        t(function () {
                          s(n, r);
                        });
                      },
                    ]);
                  } catch (i) {
                    d.error(p(n, r, i));
                  }
                };
              },
              _e = function (o, a, i, s) {
                return function (e, n, t) {
                  var r = a(e);
                  i.error(o(r, n.name, t)), s('ruleActionFailed', { rule: n, action: e });
                };
              },
              be = function (o, a, i, s) {
                return function (e, n, t) {
                  var r = a(e);
                  i.error(o(r, n.name, t)), s('ruleConditionFailed', { rule: n, condition: e });
                };
              },
              we = function (r, o, a) {
                return function (e, n) {
                  var t = r(e);
                  o.log('Condition "' + t + '" for rule "' + n.name + '" was not met.'),
                    a('ruleConditionFailed', { rule: n, condition: e });
                };
              },
              xe = function (n, t) {
                return function (e) {
                  n.log('Rule "' + e.name + '" fired.'), t('ruleCompleted', { rule: e });
                };
              },
              je = function (a, i, s) {
                return function (e, n) {
                  var t;
                  if (e.actions)
                    for (var r = 0; r < e.actions.length; r++) {
                      t = e.actions[r];
                      try {
                        a(t, n, [n]);
                      } catch (o) {
                        return void i(t, e, o);
                      }
                    }
                  s(e);
                };
              },
              Ve = function (t, r, o, a) {
                return function (e, n) {
                  a('ruleTriggered', { rule: n }), t ? o(n, e) : r(n, e);
                };
              },
              ke = function (e, n, t) {
                return (
                  'Failed to execute "' +
                  e +
                  '" for "' +
                  n +
                  '" rule. ' +
                  t.message +
                  (t.stack ? '\n' + t.stack : '')
                );
              },
              Ce = function (e, n) {
                return (n && !e.negate) || (!n && e.negate);
              },
              Oe = [],
              Ee = !1,
              Te = function (e) {
                Ee ? e() : Oe.push(e);
              },
              Le = function (e, n, t) {
                e(n).forEach(function (e) {
                  t(Te, e);
                }),
                  (Ee = !0),
                  Oe.forEach(function (e) {
                    e();
                  }),
                  (Oe = []);
              },
              Pe = function (e) {
                if (
                  (e ||
                    (e = new Error(
                      'The extension triggered an error, but no error information was provided.'
                    )),
                  !(e instanceof Error))
                ) {
                  var n = 'object' == typeof e ? JSON.stringify(e) : String(e);
                  e = new Error(n);
                }
                return e;
              },
              Qe = Object.getOwnPropertySymbols,
              Se = Object.prototype.hasOwnProperty,
              Ne = Object.prototype.propertyIsEnumerable,
              De = t()
                ? Object.assign
                : function (e) {
                    for (var n, t, r = m(e), o = 1; o < arguments.length; o++) {
                      for (var a in (n = Object(arguments[o]))) Se.call(n, a) && (r[a] = n[a]);
                      if (Qe) {
                        t = Qe(n);
                        for (var i = 0; i < t.length; i++) Ne.call(n, t[i]) && (r[t[i]] = n[t[i]]);
                      }
                    }
                    return r;
                  },
              Ue = function (e, n) {
                return (
                  De((n = n || {}), e),
                  n.hasOwnProperty('type') ||
                    Object.defineProperty(n, 'type', {
                      get: function () {
                        return (
                          P.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          n.$type
                        );
                      },
                    }),
                  n
                );
              },
              Ie = function (c, u) {
                return function (e, n) {
                  var t = c[e];
                  if (t) {
                    var r = t.modules;
                    if (r)
                      for (var o = Object.keys(r), a = 0; a < o.length; a++) {
                        var i = o[a],
                          s = r[i];
                        if (s.shared && s.name === n) return u.getModuleExports(i);
                      }
                  }
                };
              },
              Re = function (e, n) {
                return function () {
                  return n ? e(n) : {};
                };
              },
              qe = function (t, r) {
                return function (e) {
                  if (r) {
                    var n = e.split('.');
                    n.splice(n.length - 1 || 1, 0, 'min'), (e = n.join('.'));
                  }
                  return t + e;
                };
              },
              Ae = '.js',
              Me = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              Be = function (e, n) {
                return -1 !== e.indexOf(n, e.length - n.length);
              },
              Fe = function (e, n) {
                Be(n, Ae) || (n += Ae);
                var t = n.split('/'),
                  r = Me(e).split('/');
                return (
                  t.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? r.length && r.pop() : r.push(e));
                  }),
                  r.join('/')
                );
              },
              ze = document,
              He = function (t, r) {
                return new ce(function (e, n) {
                  (r.onload = function () {
                    e(r);
                  }),
                    (r.onerror = function () {
                      n(new Error('Failed to load script ' + t));
                    });
                });
              },
              Ge = function (e) {
                var n = document.createElement('script');
                (n.src = e), (n.async = !0);
                var t = He(e, n);
                return document.getElementsByTagName('head')[0].appendChild(n), t;
              },
              We = function (e, n, t, r) {
                (n = n || '&'), (t = t || '=');
                var o = {};
                if ('string' != typeof e || 0 === e.length) return o;
                var a = /\+/g;
                e = e.split(n);
                var i = 1000;
                r && 'number' == typeof r.maxKeys && (i = r.maxKeys);
                var s = e.length;
                0 < i && i < s && (s = i);
                for (var c = 0; c < s; ++c) {
                  var u,
                    p,
                    l,
                    d,
                    m = e[c].replace(a, '%20'),
                    f = m.indexOf(t);
                  0 <= f ? ((u = m.substr(0, f)), (p = m.substr(f + 1))) : ((u = m), (p = '')),
                    (l = decodeURIComponent(u)),
                    (d = decodeURIComponent(p)),
                    g(o, l)
                      ? Array.isArray(o[l])
                        ? o[l].push(d)
                        : (o[l] = [o[l], d])
                      : (o[l] = d);
                }
                return o;
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
              Ye = function (t, r, o, e) {
                return (
                  (r = r || '&'),
                  (o = o || '='),
                  null === t && (t = undefined),
                  'object' == typeof t
                    ? Object.keys(t)
                        .map(function (e) {
                          var n = encodeURIComponent($e(e)) + o;
                          return Array.isArray(t[e])
                            ? t[e]
                                .map(function (e) {
                                  return n + encodeURIComponent($e(e));
                                })
                                .join(r)
                            : n + encodeURIComponent($e(t[e]));
                        })
                        .join(r)
                    : e
                    ? encodeURIComponent($e(e)) + o + encodeURIComponent($e(t))
                    : ''
                );
              },
              Je = e(function (e, n) {
                (n.decode = n.parse = We), (n.encode = n.stringify = Ye);
              }),
              Ke = (Je.decode, Je.parse, Je.encode, Je.stringify, '@adobe/reactor-'),
              Xe = {
                cookie: S,
                document: ze,
                'load-script': Ge,
                'object-assign': De,
                promise: ce,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), Je.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return Je.stringify(e);
                  },
                },
                window: N,
              },
              Ze = function (r) {
                return function (e) {
                  if (0 === e.indexOf(Ke)) {
                    var n = e.substr(Ke.length),
                      t = Xe[n];
                    if (t) return t;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return r(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              en = function (e, i, s, c, u) {
                var p = e.extensions,
                  l = e.buildInfo,
                  d = e.property.settings;
                if (p) {
                  var m = Ie(p, i);
                  Object.keys(p).forEach(function (r) {
                    var o = p[r],
                      e = Re(c, o.settings);
                    if (o.modules) {
                      var n = P.createPrefixedLogger(o.displayName),
                        t = qe(o.hostedLibFilesBaseUrl, l.minified),
                        a = {
                          buildInfo: l,
                          getDataElementValue: u,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: t,
                          getSharedModule: m,
                          logger: n,
                          propertySettings: d,
                          replaceTokens: c,
                          onDebugChanged: s.onDebugChanged,
                          get debugEnabled () {
                            return s.getDebugEnabled();
                          },
                        };
                      Object.keys(o.modules).forEach(function (t) {
                        var e = o.modules[t],
                          n = Ze(function (e) {
                            var n = Fe(t, e);
                            return i.getModuleExports(n);
                          });
                        i.registerModule(t, e, r, n, a);
                      });
                    }
                  }),
                    i.hydrateCache();
                }
                return i;
              },
              nn = function (e, n, t, r, o) {
                var a = P.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  P.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: n.property.name }),
                  (e.company = n.company),
                  (e.buildInfo = n.buildInfo),
                  (e.logger = a),
                  (e.notify = function (e, n) {
                    switch (
                      (P.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      n)
                    ) {
                      case 3:
                        a.info(e);
                        break;
                      case 4:
                        a.warn(e);
                        break;
                      case 5:
                        a.error(e);
                        break;
                      default:
                        a.log(e);
                    }
                  }),
                  (e.getVar = r),
                  (e.setVar = o),
                  (e.setCookie = function (e, n, t) {
                    var r = '',
                      o = {};
                    t && ((r = ', { expires: ' + t + ' }'), (o.expires = t));
                    var a =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      n +
                      '"' +
                      r +
                      ').';
                    P.warn(a), S.set(e, n, o);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      P.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      S.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    P.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      S.remove(e);
                  }),
                  (e.cookie = S),
                  (e.pageBottom = function () {}),
                  (e.setDebug = t);
                var i = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      i ||
                        (P.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (i = !0)),
                      n
                    );
                  },
                });
              },
              tn = window._satellite;
            if (tn && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var rn = tn.container;
              delete tn.container;
              var on = rn.property.settings.undefinedVarsReturnEmpty,
                an = rn.property.settings.ruleComponentSequencingEnabled,
                sn = rn.dataElements || {};
              $.migrateCookieData(sn);
              var cn,
                un = function (e) {
                  return sn[e];
                },
                pn = te(),
                ln = J(
                  pn,
                  un,
                  function () {
                    return cn.apply(null, arguments);
                  },
                  on
                ),
                dn = {},
                mn = ie(dn),
                fn = ee(dn, un),
                gn = Z(dn, un, ln);
              cn = ae(fn, gn, on);
              var vn = h(U('localStorage'), P);
              nn(tn, rn, vn.setDebugEnabled, gn, mn), en(rn, pn, vn, cn, ln);
              var hn = oe(tn),
                yn = _(pn, cn),
                _n = ve(pn),
                bn = we(_n, P, hn),
                wn = be(ke, _n, P, hn),
                xn = _e(ke, _n, P, hn),
                jn = xe(P, hn),
                Vn = ye(
                  Ve(
                    an,
                    ge(fe(yn, Ce, bn, wn), je(yn, xn, jn)),
                    de(pe(yn, Pe, Ce, wn, bn), ue(yn, Pe, xn), jn),
                    hn
                  ),
                  yn,
                  Ue,
                  ke,
                  he(pn),
                  P
                );
              Le(f, rn.rules || [], Vn);
            }
            return tn;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_06c787e8e7a2d892)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_06c787e8e7a2d892
          ));
      }
    })();
    _satellite = $___var_3518d3b3043e88b6;
  })();
}
