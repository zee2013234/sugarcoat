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
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2019-04-08T19:10:08Z',
          environment: 'production',
          turbineBuildDate: '2018-12-11T21:01:34Z',
          turbineVersion: '25.4.0',
        },
        dataElements: {},
        extensions: {
          core: {
            displayName: 'Core',
            modules: {
              'core/src/lib/events/domReady.js': {
                name: 'dom-ready',
                displayName: 'DOM Ready',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('./helpers/pageLifecycleEvents');
                  e.exports = function (e, t) {
                    r.registerDomReadyTrigger(t);
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
              'core/src/lib/conditions/queryStringParameter.js': {
                name: 'query-string-parameter',
                displayName: 'Query String Parameter',
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-window'),
                    o = n('@adobe/reactor-query-string'),
                    i = n('../helpers/textMatch');
                  e.exports = function (e) {
                    var t = e.valueIsRegex ? new RegExp(e.value, 'i') : e.value,
                      n = o.parse(r.location.search);
                    return i(n[e.name], t);
                  };
                },
              },
              'core/src/lib/actions/customCode.js': {
                name: 'custom-code',
                displayName: 'Custom Code',
                script: function (e, t, n, r) {
                  'use strict';
                  var o,
                    i,
                    a,
                    s = n('@adobe/reactor-document'),
                    u = n('./helpers/decorateCode'),
                    c = n('./helpers/loadCodeSequentially'),
                    l = n('../../../node_modules/postscribe/dist/postscribe'),
                    f =
                      ((o = function (e) {
                        l(s.body, e, {
                          error: function (e) {
                            r.logger.error(e.msg);
                          },
                        });
                      }),
                      (i = []),
                      (a = function () {
                        if (s.body) for (; i.length; ) o(i.shift());
                        else setTimeout(a, 20);
                      }),
                      function (e) {
                        i.push(e), a();
                      }),
                    d = (function () {
                      if (s.currentScript) return s.currentScript.async;
                      for (var e = s.querySelectorAll('script'), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(n.src)) return n.async;
                      }
                      return !0;
                    })();
                  e.exports = function (e, t) {
                    var n = { settings: e, event: t },
                      r = n.settings.source;
                    if (r) {
                      if (n.settings.isExternal)
                        return c(r).then(function (e) {
                          e && f(u(n, e));
                        });
                      if (
                        d ||
                        ('core.library-loaded' !== t.$type && 'core.page-bottom' !== t.$type)
                      )
                        f(u(n, r));
                      else {
                        if (!s.write)
                          throw new Error(
                            'Cannot write HTML to the page. `document.write` is unavailable.'
                          );
                        s.write(u(n, r));
                      }
                    }
                  };
                },
              },
              'core/src/lib/events/helpers/pageLifecycleEvents.js': {
                script: function (e, t, n) {
                  const $___old_197f6e4e1d59035d = {}.constructor.getOwnPropertyDescriptor(
                    Navigator.prototype,
                    'appVersion'
                  );
                  try {
                    if ($___old_197f6e4e1d59035d)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___stub_9d7b4eb662ee43f5.appVersion
                      ));
                    return function () {
                      'use strict';
                      var r = n('@adobe/reactor-window'),
                        o = n('@adobe/reactor-document'),
                        i = -1 !== r.navigator.appVersion.indexOf('MSIE 10'),
                        a = 'WINDOW_LOADED',
                        s = 'DOM_READY',
                        u = 'PAGE_BOTTOM',
                        c = [u, s, a],
                        l = function (e, t) {
                          return { element: e, target: e, nativeEvent: t };
                        },
                        f = {};
                      c.forEach(function (e) {
                        f[e] = [];
                      });
                      var d = function (e, t) {
                          c.slice(0, h(e) + 1).forEach(function (e) {
                            m(t, e);
                          });
                        },
                        p = function () {
                          return 'complete' === o.readyState
                            ? a
                            : 'interactive' === o.readyState
                            ? i
                              ? null
                              : s
                            : void 0;
                        },
                        h = function (e) {
                          return c.indexOf(e);
                        },
                        m = function (t, e) {
                          f[e].forEach(function (e) {
                            g(t, e);
                          }),
                            (f[e] = []);
                        },
                        g = function (e, t) {
                          var n = t.trigger,
                            r = t.syntheticEventFn;
                          n(r ? r(e) : null);
                        };
                      (r._satellite = r._satellite || {}),
                        (r._satellite.pageBottom = d.bind(null, u)),
                        o.addEventListener('DOMContentLoaded', d.bind(null, s), !0),
                        r.addEventListener('load', d.bind(null, a), !0),
                        r.setTimeout(function () {
                          var e = p();
                          e && d(e);
                        }, 0),
                        (e.exports = {
                          registerLibraryLoadedTrigger: function (e) {
                            e();
                          },
                          registerPageBottomTrigger: function (e) {
                            f[u].push({ trigger: e });
                          },
                          registerDomReadyTrigger: function (e) {
                            f[s].push({ trigger: e, syntheticEventFn: l.bind(null, o) });
                          },
                          registerWindowLoadedTrigger: function (e) {
                            f[a].push({ trigger: e, syntheticEventFn: l.bind(null, r) });
                          },
                        });
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_197f6e4e1d59035d)
                      ({}.constructor.defineProperty(
                        Navigator.prototype,
                        'appVersion',
                        $___old_197f6e4e1d59035d
                      ));
                  }
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
              'core/src/lib/actions/helpers/decorateCode.js': {
                script: function (e, t, n, r) {
                  'use strict';
                  var o = 0,
                    i = function (e) {
                      return e.settings.isExternal;
                    },
                    a = function (e, t) {
                      return '<script>\n' + t + '\n</script>';
                    },
                    s = function (t, e) {
                      var n = '__runScript' + ++o;
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
                    u = {
                      javascript: function (e, t) {
                        return e.settings.global ? a(e, t) : s(e, t);
                      },
                      html: function (e, t) {
                        return i(e) ? r.replaceTokens(t, e.event) : t;
                      },
                    };
                  e.exports = function (e, t) {
                    return u[e.settings.language](e, t);
                  };
                },
              },
              'core/src/lib/actions/helpers/loadCodeSequentially.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-promise'),
                    o = n('./getSourceByUrl'),
                    i = r.resolve();
                  e.exports = function (t) {
                    var e = new r(function (n) {
                      var e = o(t);
                      r.all([e, i]).then(function (e) {
                        var t = e[0];
                        n(t);
                      });
                    });
                    return (i = e);
                  };
                },
              },
              'core/node_modules/postscribe/dist/postscribe.js': {
                script: function (n, r) {
                  !(function o (e, t) {
                    'object' == typeof r && 'object' == typeof n
                      ? (n.exports = t())
                      : 'function' == typeof define && define.amd
                      ? define([], t)
                      : 'object' == typeof r
                      ? (r.postscribe = t())
                      : (e.postscribe = t());
                  })(this, function () {
                    return (function (n) {
                      function r (e) {
                        if (o[e]) return o[e].exports;
                        var t = (o[e] = { exports: {}, id: e, loaded: !1 });
                        return n[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports;
                      }
                      var o = {};
                      return (r.m = n), (r.c = o), (r.p = ''), r(0);
                    })([
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        var o = r(n(1));
                        e.exports = o['default'];
                      },
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function o (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function c () {}
                        function l () {
                          var e = u.shift();
                          if (e) {
                            var t = a.last(e);
                            t.afterDequeue(),
                              (e.stream = i.apply(undefined, e)),
                              t.afterStreamStart();
                          }
                        }
                        function i (e, t, r) {
                          function o (e) {
                            (e = r.beforeWrite(e)), m.write(e), r.afterWrite(e);
                          }
                          ((m = new p['default'](e, r)).id = h++),
                            (m.name = r.name || m.id),
                            (f.streams[m.name] = m);
                          var n = e.ownerDocument,
                            i = {
                              close: n.close,
                              open: n.open,
                              write: n.write,
                              writeln: n.writeln,
                            };
                          d(n, {
                            close: c,
                            open: c,
                            write: function s () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return o(t.join(''));
                            },
                            writeln: function u () {
                              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                              return o(t.join('') + '\n');
                            },
                          });
                          var a = m.win.onerror || c;
                          return (
                            (m.win.onerror = function (e, t, n) {
                              r.error({ msg: e + ' - ' + t + ': ' + n }),
                                a.apply(m.win, [e, t, n]);
                            }),
                            m.write(t, function () {
                              d(n, i), (m.win.onerror = a), r.done(), (m = null), l();
                            }),
                            m
                          );
                        }
                        function f (e, t, n) {
                          if (a.isFunction(n)) n = { done: n };
                          else if ('clear' === n) return (u = []), (m = null), void (h = 0);
                          n = a.defaults(n, s);
                          var r = [
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
                              cancel: function o () {
                                r.stream ? r.stream.abort() : (r[1] = c);
                              },
                            }),
                            n.beforeEnqueue(r),
                            u.push(r),
                            m || l(),
                            e.postscribe
                          );
                        }
                        t.__esModule = !0;
                        var d =
                          Object.assign ||
                          function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                          };
                        t['default'] = f;
                        var p = o(n(2)),
                          a = r(n(4)),
                          s = {
                            afterAsync: c,
                            afterDequeue: c,
                            afterStreamStart: c,
                            afterWrite: c,
                            autoFix: !0,
                            beforeEnqueue: c,
                            beforeWriteToken: function g (e) {
                              return e;
                            },
                            beforeWrite: function y (e) {
                              return e;
                            },
                            done: c,
                            error: function v (e) {
                              throw new Error(e.msg);
                            },
                            releaseAsync: !1,
                          },
                          h = 0,
                          u = [],
                          m = null;
                        d(f, { streams: {}, queue: u, WriteStream: p['default'] });
                      },
                      function (e, t, n) {
                        'use strict';
                        function r (e) {
                          if (e && e.__esModule) return e;
                          var t = {};
                          if (null != e)
                            for (var n in e)
                              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                          return (t['default'] = e), t;
                        }
                        function o (e) {
                          return e && e.__esModule ? e : { default: e };
                        }
                        function b (e, t) {
                          if (!(e instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                        }
                        function w (e, t) {
                          var n = k + t,
                            r = e.getAttribute(n);
                          return S.existy(r) ? String(r) : r;
                        }
                        function _ (e, t, n) {
                          var r = 2 < arguments.length && n !== undefined ? arguments[2] : null,
                            o = k + t;
                          S.existy(r) && '' !== r ? e.setAttribute(o, r) : e.removeAttribute(o);
                        }
                        t.__esModule = !0;
                        var T =
                            Object.assign ||
                            function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                              }
                              return e;
                            },
                          x = o(n(3)),
                          S = r(n(4)),
                          E = !1,
                          k = 'data-ps-',
                          O = 'ps-style',
                          C = 'ps-script',
                          i = (function () {
                            function r (e, t) {
                              var n = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                              b(this, r),
                                (this.root = e),
                                (this.options = n),
                                (this.doc = e.ownerDocument),
                                (this.win = this.doc.defaultView || this.doc.parentWindow),
                                (this.parser = new x['default']('', { autoFix: n.autoFix })),
                                (this.actuals = [e]),
                                (this.proxyHistory = ''),
                                (this.proxyRoot = this.doc.createElement(e.nodeName)),
                                (this.scriptStack = []),
                                (this.writeQueue = []),
                                _(this.proxyRoot, 'proxyof', 0);
                            }
                            return (
                              (r.prototype.write = function n () {
                                var e;
                                for (
                                  (e = this.writeQueue).push.apply(e, arguments);
                                  !this.deferredRemote && this.writeQueue.length;

                                ) {
                                  var t = this.writeQueue.shift();
                                  S.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                                }
                              }),
                              (r.prototype._callFunction = function o (e) {
                                var t = { type: 'function', value: e.name || e.toString() };
                                this._onScriptStart(t),
                                  e.call(this.win, this.doc),
                                  this._onScriptDone(t);
                              }),
                              (r.prototype._writeImpl = function i (e) {
                                this.parser.append(e);
                                for (
                                  var t = void 0, n = void 0, r = void 0, o = [];
                                  (t = this.parser.readToken()) &&
                                  !(n = S.isScript(t)) &&
                                  !(r = S.isStyle(t));

                                )
                                  (t = this.options.beforeWriteToken(t)) && o.push(t);
                                0 < o.length && this._writeStaticTokens(o),
                                  n && this._handleScriptToken(t),
                                  r && this._handleStyleToken(t);
                              }),
                              (r.prototype._writeStaticTokens = function a (e) {
                                var t = this._buildChunk(e);
                                return t.actual
                                  ? ((t.html = this.proxyHistory + t.actual),
                                    (this.proxyHistory += t.proxy),
                                    (this.proxyRoot.innerHTML = t.html),
                                    E && (t.proxyInnerHTML = this.proxyRoot.innerHTML),
                                    this._walkChunk(),
                                    E && (t.actualInnerHTML = this.root.innerHTML),
                                    t)
                                  : null;
                              }),
                              (r.prototype._buildChunk = function l (e) {
                                for (
                                  var t = this.actuals.length,
                                    n = [],
                                    r = [],
                                    o = [],
                                    i = e.length,
                                    a = 0;
                                  a < i;
                                  a++
                                ) {
                                  var s = e[a],
                                    u = s.toString();
                                  if ((n.push(u), s.attrs)) {
                                    if (!/^noscript$/i.test(s.tagName)) {
                                      var c = t++;
                                      r.push(u.replace(/(\/?>)/, ' ' + k + 'id=' + c + ' $1')),
                                        s.attrs.id !== C &&
                                          s.attrs.id !== O &&
                                          o.push(
                                            'atomicTag' === s.type
                                              ? ''
                                              : '<' +
                                                  s.tagName +
                                                  ' ' +
                                                  k +
                                                  'proxyof=' +
                                                  c +
                                                  (s.unary ? ' />' : '>')
                                          );
                                    }
                                  } else r.push(u), o.push('endTag' === s.type ? u : '');
                                }
                                return {
                                  tokens: e,
                                  raw: n.join(''),
                                  actual: r.join(''),
                                  proxy: o.join(''),
                                };
                              }),
                              (r.prototype._walkChunk = function s () {
                                for (
                                  var e = void 0, t = [this.proxyRoot];
                                  S.existy((e = t.shift()));

                                ) {
                                  var n = 1 === e.nodeType;
                                  if (!n || !w(e, 'proxyof')) {
                                    n && _((this.actuals[w(e, 'id')] = e), 'id');
                                    var r = e.parentNode && w(e.parentNode, 'proxyof');
                                    r && this.actuals[r].appendChild(e);
                                  }
                                  t.unshift.apply(t, S.toArray(e.childNodes));
                                }
                              }),
                              (r.prototype._handleScriptToken = function u (e) {
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
                              (r.prototype._handleStyleToken = function c (e) {
                                var t = this.parser.clear();
                                t && this.writeQueue.unshift(t),
                                  (e.type = e.attrs.type || e.attrs.TYPE || 'text/css'),
                                  (e = this.options.beforeWriteToken(e)) &&
                                    this._writeStyleToken(e),
                                  t && this.write();
                              }),
                              (r.prototype._writeStyleToken = function f (e) {
                                var t = this._buildStyle(e);
                                this._insertCursor(t, O),
                                  e.content &&
                                    (t.styleSheet && !t.sheet
                                      ? (t.styleSheet.cssText = e.content)
                                      : t.appendChild(this.doc.createTextNode(e.content)));
                              }),
                              (r.prototype._buildStyle = function t (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  n.setAttribute('type', e.type),
                                  S.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  n
                                );
                              }),
                              (r.prototype._insertCursor = function d (e, t) {
                                this._writeImpl('<span id="' + t + '"/>');
                                var n = this.doc.getElementById(t);
                                n && n.parentNode.replaceChild(e, n);
                              }),
                              (r.prototype._onScriptStart = function p (e) {
                                (e.outerWrites = this.writeQueue),
                                  (this.writeQueue = []),
                                  this.scriptStack.unshift(e);
                              }),
                              (r.prototype._onScriptDone = function h (e) {
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
                              (r.prototype._writeScriptToken = function m (e, t) {
                                var n = this._buildScript(e),
                                  r = this._shouldRelease(n),
                                  o = this.options.afterAsync;
                                e.src &&
                                  ((n.src = e.src),
                                  this._scriptLoadHandler(
                                    n,
                                    r
                                      ? o
                                      : function () {
                                          t(), o();
                                        }
                                  ));
                                try {
                                  this._insertCursor(n, C), (n.src && !r) || t();
                                } catch (i) {
                                  this.options.error(i), t();
                                }
                              }),
                              (r.prototype._buildScript = function g (e) {
                                var n = this.doc.createElement(e.tagName);
                                return (
                                  S.eachKey(e.attrs, function (e, t) {
                                    n.setAttribute(e, t);
                                  }),
                                  e.content && (n.text = e.content),
                                  n
                                );
                              }),
                              (r.prototype._scriptLoadHandler = function y (t, n) {
                                function r () {
                                  t = t.onload = t.onreadystatechange = t.onerror = null;
                                }
                                function o () {
                                  r(), null != n && n(), (n = null);
                                }
                                function i (e) {
                                  r(), a(e), null != n && n(), (n = null);
                                }
                                function e (e, t) {
                                  var n = e['on' + t];
                                  null != n && (e['_on' + t] = n);
                                }
                                var a = this.options.error;
                                e(t, 'load'),
                                  e(t, 'error'),
                                  T(t, {
                                    onload: function s () {
                                      if (t._onload)
                                        try {
                                          t._onload.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          i({ msg: 'onload handler failed ' + e + ' @ ' + t.src });
                                        }
                                      o();
                                    },
                                    onerror: function u () {
                                      if (t._onerror)
                                        try {
                                          t._onerror.apply(
                                            this,
                                            Array.prototype.slice.call(arguments, 0)
                                          );
                                        } catch (e) {
                                          return void i({
                                            msg: 'onerror handler failed ' + e + ' @ ' + t.src,
                                          });
                                        }
                                      i({ msg: 'remote script failed ' + t.src });
                                    },
                                    onreadystatechange: function c () {
                                      /^(loaded|complete)$/.test(t.readyState) && o();
                                    },
                                  });
                              }),
                              (r.prototype._shouldRelease = function v (e) {
                                return (
                                  !/^script$/i.test(e.nodeName) ||
                                  !!(this.options.releaseAsync && e.src && e.hasAttribute('async'))
                                );
                              }),
                              r
                            );
                          })();
                        t['default'] = i;
                      },
                      function (n) {
                        !(function r (e, t) {
                          n.exports = t();
                        })(0, function () {
                          return (function (n) {
                            function r (e) {
                              if (o[e]) return o[e].exports;
                              var t = (o[e] = { exports: {}, id: e, loaded: !1 });
                              return (
                                n[e].call(t.exports, t, t.exports, r), (t.loaded = !0), t.exports
                              );
                            }
                            var o = {};
                            return (r.m = n), (r.c = o), (r.p = ''), r(0);
                          })([
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              var o = r(n(1));
                              e.exports = o['default'];
                            },
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                return e && e.__esModule ? e : { default: e };
                              }
                              function o (e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                  for (var n in e)
                                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                return (t['default'] = e), t;
                              }
                              function l (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              t.__esModule = !0;
                              var f = o(n(2)),
                                d = o(n(3)),
                                p = r(n(6)),
                                i = n(5),
                                h = {
                                  comment: /^<!--/,
                                  endTag: /^<\//,
                                  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                                  startTag: /^</,
                                  chars: /^[^<]/,
                                },
                                a = (function () {
                                  function u (e, t) {
                                    var n = this,
                                      r =
                                        0 < arguments.length && e !== undefined
                                          ? arguments[0]
                                          : '',
                                      o =
                                        1 < arguments.length && t !== undefined
                                          ? arguments[1]
                                          : {};
                                    l(this, u), (this.stream = r);
                                    var i = !1,
                                      a = {};
                                    for (var s in f)
                                      f.hasOwnProperty(s) &&
                                        (o.autoFix && (a[s + 'Fix'] = !0),
                                        (i = i || a[s + 'Fix']));
                                    this._peekToken = i
                                      ? ((this._readToken = (0, p['default'])(
                                          this,
                                          a,
                                          function () {
                                            return n._readTokenImpl();
                                          }
                                        )),
                                        (0, p['default'])(this, a, function () {
                                          return n._peekTokenImpl();
                                        }))
                                      : ((this._readToken = this._readTokenImpl),
                                        this._peekTokenImpl);
                                  }
                                  return (
                                    (u.prototype.append = function t (e) {
                                      this.stream += e;
                                    }),
                                    (u.prototype.prepend = function n (e) {
                                      this.stream = e + this.stream;
                                    }),
                                    (u.prototype._readTokenImpl = function r () {
                                      var e = this._peekTokenImpl();
                                      if (e) return (this.stream = this.stream.slice(e.length)), e;
                                    }),
                                    (u.prototype._peekTokenImpl = function o () {
                                      for (var e in h)
                                        if (h.hasOwnProperty(e) && h[e].test(this.stream)) {
                                          var t = d[e](this.stream);
                                          if (t)
                                            return 'startTag' === t.type &&
                                              /script|style/i.test(t.tagName)
                                              ? null
                                              : ((t.text = this.stream.substr(0, t.length)), t);
                                        }
                                    }),
                                    (u.prototype.peekToken = function e () {
                                      return this._peekToken();
                                    }),
                                    (u.prototype.readToken = function i () {
                                      return this._readToken();
                                    }),
                                    (u.prototype.readTokens = function a (e) {
                                      for (var t = void 0; (t = this.readToken()); )
                                        if (e[t.type] && !1 === e[t.type](t)) return;
                                    }),
                                    (u.prototype.clear = function s () {
                                      var e = this.stream;
                                      return (this.stream = ''), e;
                                    }),
                                    (u.prototype.rest = function c () {
                                      return this.stream;
                                    }),
                                    u
                                  );
                                })();
                              for (var s in (((t['default'] = a).tokenToString = function (e) {
                                return e.toString();
                              }),
                              (a.escapeAttributes = function (e) {
                                var t = {};
                                for (var n in e)
                                  e.hasOwnProperty(n) && (t[n] = (0, i.escapeQuotes)(e[n], null));
                                return t;
                              }),
                              (a.supports = f)))
                                f.hasOwnProperty(s) &&
                                  (a.browserHasFlaw = a.browserHasFlaw || (!f[s] && s));
                            },
                            function (e, t) {
                              'use strict';
                              var n = !(t.__esModule = !0),
                                r = !1,
                                o = window.document.createElement('div');
                              try {
                                var i = '<P><I></P></I>';
                                (o.innerHTML = i), (t.tagSoup = n = o.innerHTML !== i);
                              } catch (a) {
                                t.tagSoup = n = !1;
                              }
                              try {
                                (o.innerHTML = '<P><i><P></P></i></P>'),
                                  (t.selfClose = r = 2 === o.childNodes.length);
                              } catch (a) {
                                t.selfClose = r = !1;
                              }
                              (o = null), (t.tagSoup = n), (t.selfClose = r);
                            },
                            function (e, t, n) {
                              'use strict';
                              function r (e) {
                                var t = e.indexOf('-->');
                                if (0 <= t) return new l.CommentToken(e.substr(4, t - 1), t + 3);
                              }
                              function o (e) {
                                var t = e.indexOf('<');
                                return new l.CharsToken(0 <= t ? t : e.length);
                              }
                              function i (e) {
                                var a, s, u;
                                if (-1 !== e.indexOf('>')) {
                                  var t = e.match(f.startTag);
                                  if (t) {
                                    var n =
                                      ((a = {}),
                                      (s = {}),
                                      (u = t[2]),
                                      t[2].replace(f.attr, function (e, t, n, r, o, i) {
                                        n || r || o || i
                                          ? arguments[5]
                                            ? ((a[arguments[5]] = ''), (s[arguments[5]] = !0))
                                            : (a[t] =
                                                arguments[2] ||
                                                arguments[3] ||
                                                arguments[4] ||
                                                (f.fillAttr.test(t) && t) ||
                                                '')
                                          : (a[t] = ''),
                                          (u = u.replace(e, ''));
                                      }),
                                      {
                                        v: new l.StartTagToken(
                                          t[1],
                                          t[0].length,
                                          a,
                                          s,
                                          !!t[3],
                                          u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                                        ),
                                      });
                                    if ('object' === (void 0 === n ? 'undefined' : c(n)))
                                      return n.v;
                                  }
                                }
                              }
                              function a (e) {
                                var t = i(e);
                                if (t) {
                                  var n = e.slice(t.length);
                                  if (n.match(new RegExp('</\\s*' + t.tagName + '\\s*>', 'i'))) {
                                    var r = n.match(
                                      new RegExp('([\\s\\S]*?)</\\s*' + t.tagName + '\\s*>', 'i')
                                    );
                                    if (r)
                                      return new l.AtomicTagToken(
                                        t.tagName,
                                        r[0].length + t.length,
                                        t.attrs,
                                        t.booleanAttrs,
                                        r[1]
                                      );
                                  }
                                }
                              }
                              function s (e) {
                                var t = e.match(f.endTag);
                                if (t) return new l.EndTagToken(t[1], t[0].length);
                              }
                              t.__esModule = !0;
                              var c =
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
                              (t.comment = r),
                                (t.chars = o),
                                (t.startTag = i),
                                (t.atomicTag = a),
                                (t.endTag = s);
                              var l = n(4),
                                f = {
                                  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                                  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                                  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                                  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
                                };
                            },
                            function (e, t, n) {
                              'use strict';
                              function s (e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError('Cannot call a class as a function');
                              }
                              (t.__esModule = !0),
                                (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined);
                              var u = n(5),
                                r = (t.Token = function r (e, t) {
                                  s(this, r), (this.type = e), (this.length = t), (this.text = '');
                                }),
                                o =
                                  ((t.CommentToken = (function () {
                                    function n (e, t) {
                                      s(this, n),
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
                                      s(this, t),
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
                                    function i (e, t, n, r, o) {
                                      s(this, i),
                                        (this.type = e),
                                        (this.length = n),
                                        (this.text = ''),
                                        (this.tagName = t),
                                        (this.attrs = r),
                                        (this.booleanAttrs = o),
                                        (this.unary = !1),
                                        (this.html5Unary = !1);
                                    }
                                    return (
                                      (i.formatTag = function a (e, t) {
                                        var n =
                                            1 < arguments.length && t !== undefined
                                              ? arguments[1]
                                              : null,
                                          r = '<' + e.tagName;
                                        for (var o in e.attrs)
                                          if (e.attrs.hasOwnProperty(o)) {
                                            r += ' ' + o;
                                            var i = e.attrs[o];
                                            ('undefined' != typeof e.booleanAttrs &&
                                              'undefined' != typeof e.booleanAttrs[o]) ||
                                              (r += '="' + (0, u.escapeQuotes)(i) + '"');
                                          }
                                        return (
                                          e.rest && (r += ' ' + e.rest),
                                          e.unary && !e.html5Unary ? (r += '/>') : (r += '>'),
                                          n !== undefined &&
                                            null !== n &&
                                            (r += n + '</' + e.tagName + '>'),
                                          r
                                        );
                                      }),
                                      i
                                    );
                                  })()));
                              (t.StartTagToken = (function () {
                                function a (e, t, n, r, o, i) {
                                  s(this, a),
                                    (this.type = 'startTag'),
                                    (this.length = t),
                                    (this.text = ''),
                                    (this.tagName = e),
                                    (this.attrs = n),
                                    (this.booleanAttrs = r),
                                    (this.html5Unary = !1),
                                    (this.unary = o),
                                    (this.rest = i);
                                }
                                return (
                                  (a.prototype.toString = function e () {
                                    return o.formatTag(this);
                                  }),
                                  a
                                );
                              })()),
                                (t.AtomicTagToken = (function () {
                                  function i (e, t, n, r, o) {
                                    s(this, i),
                                      (this.type = 'atomicTag'),
                                      (this.length = t),
                                      (this.text = ''),
                                      (this.tagName = e),
                                      (this.attrs = n),
                                      (this.booleanAttrs = r),
                                      (this.unary = !1),
                                      (this.html5Unary = !1),
                                      (this.content = o);
                                  }
                                  return (
                                    (i.prototype.toString = function e () {
                                      return o.formatTag(this, this.content);
                                    }),
                                    i
                                  );
                                })()),
                                (t.EndTagToken = (function () {
                                  function n (e, t) {
                                    s(this, n),
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
                              function c (e) {
                                return (
                                  e &&
                                    'startTag' === e.type &&
                                    ((e.unary = r.test(e.tagName) || e.unary),
                                    (e.html5Unary = !/\/>$/.test(e.text))),
                                  e
                                );
                              }
                              function l (e, t) {
                                var n = e.stream,
                                  r = c(t());
                                return (e.stream = n), r;
                              }
                              function f (e, t) {
                                var n = t.pop();
                                e.prepend('</' + n.tagName + '>');
                              }
                              function d () {
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
                              function n (n, r, t) {
                                function o () {
                                  var e = l(n, t);
                                  e && a[e.type] && a[e.type](e);
                                }
                                var i = d(),
                                  a = {
                                    startTag: function s (e) {
                                      var t = e.tagName;
                                      'TR' === t.toUpperCase() && i.lastTagNameEq('TABLE')
                                        ? (n.prepend('<TBODY>'), o())
                                        : r.selfCloseFix && p.test(t) && i.containsTagName(t)
                                        ? i.lastTagNameEq(t)
                                          ? f(n, i)
                                          : (n.prepend('</' + e.tagName + '>'), o())
                                        : e.unary || i.push(e);
                                    },
                                    endTag: function u (e) {
                                      i.last()
                                        ? r.tagSoupFix && !i.lastTagNameEq(e.tagName)
                                          ? f(n, i)
                                          : i.pop()
                                        : r.tagSoupFix && (t(), o());
                                    },
                                  };
                                return function e () {
                                  return o(), c(t());
                                };
                              }
                              (t.__esModule = !0), (t['default'] = n);
                              var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                p = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
                            },
                          ]);
                        });
                      },
                      function (e, t) {
                        'use strict';
                        function r (e) {
                          return null != e;
                        }
                        function n (e) {
                          return 'function' == typeof e;
                        }
                        function o (e, t, n) {
                          var r = void 0,
                            o = (e && e.length) || 0;
                          for (r = 0; r < o; r++) t.call(n, e[r], r);
                        }
                        function i (e, t, n) {
                          for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r]);
                        }
                        function a (n, e) {
                          return (
                            (n = n || {}),
                            i(e, function (e, t) {
                              r(n[e]) || (n[e] = t);
                            }),
                            n
                          );
                        }
                        function s (e) {
                          try {
                            return Array.prototype.slice.call(e);
                          } catch (r) {
                            var t =
                              ((n = []),
                              o(e, function (e) {
                                n.push(e);
                              }),
                              { v: n });
                            if ('object' === (void 0 === t ? 'undefined' : d(t))) return t.v;
                          }
                          var n;
                        }
                        function u (e) {
                          return e[e.length - 1];
                        }
                        function c (e, t) {
                          return !(
                            !e ||
                            ('startTag' !== e.type && 'atomicTag' !== e.type) ||
                            !('tagName' in e) ||
                            !~e.tagName.toLowerCase().indexOf(t)
                          );
                        }
                        function l (e) {
                          return c(e, 'script');
                        }
                        function f (e) {
                          return c(e, 'style');
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
                        (t.existy = r),
                          (t.isFunction = n),
                          (t.each = o),
                          (t.eachKey = i),
                          (t.defaults = a),
                          (t.toArray = s),
                          (t.last = u),
                          (t.isTag = c),
                          (t.isScript = l),
                          (t.isStyle = f);
                      },
                    ]);
                  });
                },
              },
              'core/src/lib/actions/helpers/getSourceByUrl.js': {
                script: function (e, t, n) {
                  'use strict';
                  var r = n('@adobe/reactor-load-script'),
                    o = n('@adobe/reactor-promise'),
                    i = {},
                    a = {},
                    s = function (e) {
                      return a[e] || (a[e] = r(e)), a[e];
                    };
                  (_satellite.__registerScript = function (e, t) {
                    i[e] = t;
                  }),
                    (e.exports = function (t) {
                      return i[t]
                        ? o.resolve(i[t])
                        : new o(function (e) {
                            s(t).then(
                              function () {
                                e(i[t]);
                              },
                              function () {
                                e();
                              }
                            );
                          });
                    });
                },
              },
            },
            hostedLibFilesBaseUrl:
              '//assets.adobedtm.com/extensions/EP73d0010a5a1e442fbce7d2b017628ddf/',
          },
        },
        company: { orgId: 'EA76ADE95776D2EC7F000101@AdobeOrg' },
        property: {
          name: 'Hololens',
          settings: { domains: ['microsoft.com'], undefinedVarsReturnEmpty: !1 },
        },
        rules: [
          {
            id: 'RL75083b534eaf4788ac8c62968dd56431',
            name: 'Blueprint: Pre Loader',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return !0;
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'tagtest', value: 'off' },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '//assets.adobedtm.com/COdb619ef0f3bc48f09d9a4c3a5e66564d/PR2fca1be12ae74c1096cd68380c2f5033/BL80c0ee972ef0423c943c54882193ce76/RC7827fe4ae17441378e1ce831558ad3cd-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL4e69624c4c9148f7a861a19bee3324d2',
            name: 'Blueprint: UTF Loader',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return !0;
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'tagtest', value: 'off' },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '//assets.adobedtm.com/COdb619ef0f3bc48f09d9a4c3a5e66564d/PR2fca1be12ae74c1096cd68380c2f5033/BL80c0ee972ef0423c943c54882193ce76/RCfaee11aded5b489498114fe5b0639b31-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RL4fe42a00923a42f88f4856b416801e44',
            name: 'Blueprint: Hololens',
            events: [
              { modulePath: 'core/src/lib/events/domReady.js', settings: {}, ruleOrder: 50 },
            ],
            conditions: [
              {
                modulePath: 'core/src/lib/conditions/customCode.js',
                settings: {
                  source: function () {
                    return (window.oaLoadRule = function r (e, t, n) {
                      return !!n.match(/\/..-..\/hololens\/?/i);
                    })(
                      window.location.href,
                      window.location.hostname,
                      window.location.pathname,
                      window.location.search,
                      document.cookie
                    );
                  },
                },
              },
              {
                modulePath: 'core/src/lib/conditions/queryStringParameter.js',
                settings: { name: 'tagtest', value: 'off' },
                negate: !0,
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  global: !0,
                  source:
                    '//assets.adobedtm.com/COdb619ef0f3bc48f09d9a4c3a5e66564d/PR2fca1be12ae74c1096cd68380c2f5033/BL80c0ee972ef0423c943c54882193ce76/RCecd0d59668c34c7e9e08af794b20228d-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
          {
            id: 'RLffd1b15274ae4c2db7b074a95567ad51',
            name: 'HoloLens_broker',
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
                      -1 !== window.location.href.indexOf('hololens')
                    )
                      return !0;
                  },
                },
              },
            ],
            actions: [
              {
                modulePath: 'core/src/lib/actions/customCode.js',
                settings: {
                  source:
                    '//assets.adobedtm.com/COdb619ef0f3bc48f09d9a4c3a5e66564d/PR2fca1be12ae74c1096cd68380c2f5033/BL80c0ee972ef0423c943c54882193ce76/RC25722abee74e457b86b36a7e38872c80-source.min.js',
                  language: 'javascript',
                  isExternal: !0,
                },
              },
            ],
          },
        ],
      });
    var $___var_4edb66bb8cb2e7de = (function () {
      const $___old_20e2374da794f0d7 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_20e2374da794f0d7)
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
          function s (e) {
            if (null === e || e === undefined)
              throw new TypeError('Object.assign cannot be called with null or undefined');
            return Object(e);
          }
          function t () {
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
          function m (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          if (window.atob) {
            var n = { LOG: 'log', INFO: 'info', WARN: 'warn', ERROR: 'error' },
              r = '\uD83D\uDE80',
              o =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : r,
              i = !1,
              a = function (e) {
                if (i && window.console) {
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.unshift(o), window.console[e].apply(window.console, t);
                }
              },
              u = a.bind(null, n.LOG),
              c = a.bind(null, n.INFO),
              l = a.bind(null, n.WARN),
              f = a.bind(null, n.ERROR),
              _ = {
                log: u,
                info: c,
                warn: l,
                error: f,
                get outputEnabled () {
                  return i;
                },
                set outputEnabled (e) {
                  i = e;
                },
                createPrefixedLogger: function (e) {
                  var t = '[' + e + ']';
                  return {
                    log: u.bind(null, t),
                    info: c.bind(null, t),
                    warn: l.bind(null, t),
                    error: f.bind(null, t),
                  };
                },
              },
              d = function (o, i, a) {
                var n,
                  r,
                  s,
                  u,
                  c = [],
                  l = function (e, t, n) {
                    if (!o(t)) return e;
                    c.push(t);
                    var r = i(t, n);
                    return c.pop(), null == r && a ? '' : r;
                  };
                return (
                  (n = function (e, n) {
                    var t = /^%([^%]+)%$/.exec(e);
                    return t
                      ? l(e, t[1], n)
                      : e.replace(/%(.+?)%/g, function (e, t) {
                          return l(e, t, n);
                        });
                  }),
                  (r = function (e, t) {
                    for (var n = {}, r = Object.keys(e), o = 0; o < r.length; o++) {
                      var i = r[o],
                        a = e[i];
                      n[i] = u(a, t);
                    }
                    return n;
                  }),
                  (s = function (e, t) {
                    for (var n = [], r = 0, o = e.length; r < o; r++) n.push(u(e[r], t));
                    return n;
                  }),
                  (u = function (e, t) {
                    return 'string' == typeof e
                      ? n(e, t)
                      : Array.isArray(e)
                      ? s(e, t)
                      : 'object' == typeof e && null !== e
                      ? r(e, t)
                      : e;
                  }),
                  function (e, t) {
                    return 10 < c.length
                      ? (_.error('Data element circular reference detected: ' + c.join(' -> ')), e)
                      : u(e, t);
                  }
                );
              },
              p = function (o) {
                return function (e, t) {
                  if ('string' == typeof e) o[arguments[0]] = t;
                  else if (arguments[0]) {
                    var n = arguments[0];
                    for (var r in n) o[r] = n[r];
                  }
                };
              },
              h = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              g =
                'undefined' != typeof window
                  ? window
                  : 'undefined' != typeof global
                  ? global
                  : 'undefined' != typeof self
                  ? self
                  : {},
              y = e(function (r) {
                !(function (e) {
                  if (
                    ('function' == typeof undefined && undefined.amd && (undefined(e), !0),
                    (r.exports = e()),
                    !!0)
                  ) {
                    var t = window.Cookies,
                      n = (window.Cookies = e());
                    n.noConflict = function () {
                      return (window.Cookies = t), n;
                    };
                  }
                })(function () {
                  function g () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var r in n) t[r] = n[r];
                    }
                    return t;
                  }
                  function e (h) {
                    function m (e, t, n) {
                      var r;
                      if ('undefined' != typeof document) {
                        if (1 < arguments.length) {
                          if ('number' == typeof (n = g({ path: '/' }, m.defaults, n)).expires) {
                            var o = new Date();
                            o.setMilliseconds(o.getMilliseconds() + 86400000 * n.expires),
                              (n.expires = o);
                          }
                          n.expires = n.expires ? n.expires.toUTCString() : '';
                          try {
                            (r = JSON.stringify(t)), /^[\{\[]/.test(r) && (t = r);
                          } catch (p) {}
                          (t = h.write
                            ? h.write(t, e)
                            : encodeURIComponent(String(t)).replace(
                                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                                decodeURIComponent
                              )),
                            (e = (e = (e = encodeURIComponent(String(e))).replace(
                              /%(23|24|26|2B|5E|60|7C)/g,
                              decodeURIComponent
                            )).replace(/[\(\)]/g, escape));
                          var i = '';
                          for (var a in n)
                            n[a] && ((i += '; ' + a), !0 !== n[a] && (i += '=' + n[a]));
                          return (document.cookie = e + '=' + t + i);
                        }
                        e || (r = {});
                        for (
                          var s = document.cookie ? document.cookie.split('; ') : [],
                            u = /(%[0-9A-Z]{2})+/g,
                            c = 0;
                          c < s.length;
                          c++
                        ) {
                          var l = s[c].split('='),
                            f = l.slice(1).join('=');
                          '"' === f.charAt(0) && (f = f.slice(1, -1));
                          try {
                            var d = l[0].replace(u, decodeURIComponent);
                            if (
                              ((f = h.read
                                ? h.read(f, d)
                                : h(f, d) || f.replace(u, decodeURIComponent)),
                              this.json)
                            )
                              try {
                                f = JSON.parse(f);
                              } catch (p) {}
                            if (e === d) {
                              r = f;
                              break;
                            }
                            e || (r[d] = f);
                          } catch (p) {}
                        }
                        return r;
                      }
                    }
                    return (
                      ((m.set = m).get = function (e) {
                        return m.call(m, e);
                      }),
                      (m.getJSON = function () {
                        return m.apply({ json: !0 }, [].slice.call(arguments));
                      }),
                      (m.defaults = {}),
                      (m.remove = function (e, t) {
                        m(e, '', g(t, { expires: -1 }));
                      }),
                      (m.withConverter = e),
                      m
                    );
                  }
                  return e(function () {});
                });
              }),
              v = { get: y.get, set: y.set, remove: y.remove },
              b = window,
              w = 'com.adobe.reactor.',
              T = function (r, e) {
                var o = w + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_016e59471b26d0b6 = {}.constructor.getOwnPropertyDescriptor(
                        window,
                        'localStorage'
                      ),
                      $___old_a0e9f5e91ce2e95e = {}.constructor.getOwnPropertyDescriptor(
                        window,
                        'sessionStorage'
                      );
                    try {
                      if ($___old_016e59471b26d0b6)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_a011c28886b08277.localStorage
                        ));
                      if ($___old_a0e9f5e91ce2e95e)
                        ({}.constructor.defineProperty(
                          window,
                          'sessionStorage',
                          $___stub_a011c28886b08277.sessionStorage
                        ));
                      return function () {
                        try {
                          return b[r].getItem(o + e);
                        } catch (t) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_016e59471b26d0b6)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_016e59471b26d0b6
                        ));
                      if ($___old_a0e9f5e91ce2e95e)
                        ({}.constructor.defineProperty(
                          window,
                          'sessionStorage',
                          $___old_a0e9f5e91ce2e95e
                        ));
                    }
                  },
                  setItem: function (e, t) {
                    const $___old_ceee89be6366623b = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_ceee89be6366623b)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_a011c28886b08277.localStorage
                        ));
                      return function () {
                        try {
                          return b[r].setItem(o + e, t), !0;
                        } catch (n) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_ceee89be6366623b)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_ceee89be6366623b
                        ));
                    }
                  },
                };
              },
              x = '_sdsat_',
              S = 'dataElements.',
              E = 'dataElementCookiesMigrated',
              k = T('localStorage'),
              O = T('sessionStorage', S),
              C = T('localStorage', S),
              j = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              P = {},
              A = function (e) {
                var t;
                try {
                  t = JSON.stringify(e);
                } catch (n) {}
                return t;
              },
              I = function (e, t, n) {
                var r;
                switch (t) {
                  case j.PAGEVIEW:
                    return void (P[e] = n);
                  case j.SESSION:
                    return void ((r = A(n)) && O.setItem(e, r));
                  case j.VISITOR:
                    return void ((r = A(n)) && C.setItem(e, r));
                }
              },
              R = function (e, t) {
                var n = v.get(x + e);
                n !== undefined && I(e, t, n);
              },
              N = {
                setValue: I,
                getValue: function (e, t) {
                  var n;
                  switch (t) {
                    case j.PAGEVIEW:
                      return P.hasOwnProperty(e) ? P[e] : null;
                    case j.SESSION:
                      return null === (n = O.getItem(e)) ? n : JSON.parse(n);
                    case j.VISITOR:
                      return null === (n = C.getItem(e)) ? n : JSON.parse(n);
                  }
                },
                migrateCookieData: function (t) {
                  k.getItem(E) ||
                    (Object.keys(t).forEach(function (e) {
                      R(e, t[e].storageDuration);
                    }),
                    k.setItem(E, !0));
                },
              },
              M = function (e, t, n, r) {
                return (
                  'Failed to execute data element module ' +
                  e.modulePath +
                  ' for data element ' +
                  t +
                  '. ' +
                  n +
                  (r ? '\n' + r : '')
                );
              },
              F = function (e) {
                return e !== undefined && null !== e;
              },
              L = function (s, u, c, l) {
                return function (e, t) {
                  var n = u(e);
                  if (!n) return l ? '' : null;
                  var r,
                    o = n.storageDuration;
                  try {
                    r = s.getModuleExports(n.modulePath);
                  } catch (a) {
                    return void _.error(M(n, e, a.message, a.stack));
                  }
                  if ('function' == typeof r) {
                    var i;
                    try {
                      i = r(c(n.settings, t), t);
                    } catch (a) {
                      return void _.error(M(n, e, a.message, a.stack));
                    }
                    return (
                      o && (F(i) ? N.setValue(e, o, i) : (i = N.getValue(e, o))),
                      F(i) || (i = n.defaultValue || ''),
                      'string' == typeof i &&
                        (n.cleanText && (i = h(i)), n.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  _.error(M(n, e, 'Module did not export a function.'));
                };
              },
              D = function (e, t, n) {
                var r = { exports: {} };
                return e.call(r.exports, r, r.exports, t, n), r.exports;
              },
              B = function () {
                var a = {},
                  n = function (e) {
                    var t = a[e];
                    if (!t) throw new Error('Module ' + e + ' not found.');
                    return t;
                  },
                  e = function () {
                    Object.keys(a).forEach(function (e) {
                      try {
                        r(e);
                      } catch (n) {
                        var t =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          n.message +
                          (n.stack ? '\n' + n.stack : '');
                        _.error(t);
                      }
                    });
                  },
                  r = function (e) {
                    var t = n(e);
                    return (
                      t.hasOwnProperty('exports') ||
                        (t.exports = D(t.definition.script, t.require, t.turbine)),
                      t.exports
                    );
                  };
                return {
                  registerModule: function (e, t, n, r, o) {
                    var i = { definition: t, extensionName: n, require: r, turbine: o };
                    (i.require = r), (a[e] = i);
                  },
                  hydrateCache: e,
                  getModuleExports: r,
                  getModuleDefinition: function (e) {
                    return n(e).definition;
                  },
                  getModuleExtensionName: function (e) {
                    return n(e).extensionName;
                  },
                };
              },
              U = function (n, r) {
                return function (e) {
                  var t = e.split('.')[0];
                  return Boolean(
                    r(e) || 'this' === t || 'event' === t || 'target' === t || n.hasOwnProperty(t)
                  );
                };
              },
              q = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return h(e.textContent);
                },
              },
              H = function (e, t, n) {
                for (var r, o = e, i = 0, a = t.length; i < a; i++) {
                  if (null == o) return undefined;
                  var s = t[i];
                  if (n && '@' === s.charAt(0)) {
                    var u = s.slice(1);
                    o = q[u](o);
                  } else if (o.getAttribute && (r = s.match(/^getAttribute\((.+)\)$/))) {
                    var c = r[1];
                    o = o.getAttribute(c);
                  } else o = o[s];
                }
                return o;
              },
              V = function (i, a, s) {
                return function (e, t) {
                  var n;
                  if (a(e)) n = s(e, t);
                  else {
                    var r = e.split('.'),
                      o = r.shift();
                    'this' === o
                      ? t && (n = H(t.element, r, !0))
                      : 'event' === o
                      ? t && (n = H(t, r))
                      : 'target' === o
                      ? t && (n = H(t.target, r))
                      : (n = H(i[o], r));
                  }
                  return n;
                };
              },
              W = function (u, c) {
                return function (e, t) {
                  var n = u[e];
                  if (n) {
                    var r = n.modules;
                    if (r)
                      for (var o = Object.keys(r), i = 0; i < o.length; i++) {
                        var a = o[i],
                          s = r[a];
                        if (s.shared && s.name === t) return c.getModuleExports(a);
                      }
                  }
                };
              },
              $ = function (e, t) {
                return function () {
                  return t ? e(t) : {};
                };
              },
              Q = function (n, r) {
                return function (e) {
                  if (r) {
                    var t = e.split('.');
                    t.splice(t.length - 1 || 1, 0, 'min'), (e = t.join('.'));
                  }
                  return n + e;
                };
              },
              G = '.js',
              Z = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              z = function (e, t) {
                return -1 !== e.indexOf(t, e.length - t.length);
              },
              J = function (e, t) {
                z(t, G) || (t += G);
                var n = t.split('/'),
                  r = Z(e).split('/');
                return (
                  n.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? r.length && r.pop() : r.push(e));
                  }),
                  r.join('/')
                );
              },
              K = document,
              Y = e(function (h) {
                !(function (e) {
                  function r () {}
                  function o (e, t) {
                    return function () {
                      e.apply(t, arguments);
                    };
                  }
                  function i (e) {
                    if ('object' != typeof this)
                      throw new TypeError('Promises must be constructed via new');
                    if ('function' != typeof e) throw new TypeError('not a function');
                    (this._state = 0),
                      (this._handled = !1),
                      (this._value = undefined),
                      (this._deferreds = []),
                      f(e, this);
                  }
                  function a (r, o) {
                    for (; 3 === r._state; ) r = r._value;
                    0 !== r._state
                      ? ((r._handled = !0),
                        i._immediateFn(function () {
                          var e = 1 === r._state ? o.onFulfilled : o.onRejected;
                          if (null !== e) {
                            var t;
                            try {
                              t = e(r._value);
                            } catch (n) {
                              return void u(o.promise, n);
                            }
                            s(o.promise, t);
                          } else (1 === r._state ? s : u)(o.promise, r._value);
                        }))
                      : r._deferreds.push(o);
                  }
                  function s (e, t) {
                    try {
                      if (t === e)
                        throw new TypeError('A promise cannot be resolved with itself.');
                      if (t && ('object' == typeof t || 'function' == typeof t)) {
                        var n = t.then;
                        if (t instanceof i) return (e._state = 3), (e._value = t), void c(e);
                        if ('function' == typeof n) return void f(o(n, t), e);
                      }
                      (e._state = 1), (e._value = t), c(e);
                    } catch (r) {
                      u(e, r);
                    }
                  }
                  function u (e, t) {
                    (e._state = 2), (e._value = t), c(e);
                  }
                  function c (e) {
                    2 === e._state &&
                      0 === e._deferreds.length &&
                      i._immediateFn(function () {
                        e._handled || i._unhandledRejectionFn(e._value);
                      });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
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
                          n || ((n = !0), s(t, e));
                        },
                        function (e) {
                          n || ((n = !0), u(t, e));
                        }
                      );
                    } catch (r) {
                      if (n) return;
                      (n = !0), u(t, r);
                    }
                  }
                  var t = setTimeout;
                  (i.prototype['catch'] = function (e) {
                    return this.then(null, e);
                  }),
                    (i.prototype.then = function (e, t) {
                      var n = new this.constructor(r);
                      return a(this, new l(e, t, n)), n;
                    }),
                    (i.all = function (e) {
                      var u = Array.prototype.slice.call(e);
                      return new i(function (o, i) {
                        function a (t, e) {
                          try {
                            if (e && ('object' == typeof e || 'function' == typeof e)) {
                              var n = e.then;
                              if ('function' == typeof n)
                                return void n.call(
                                  e,
                                  function (e) {
                                    a(t, e);
                                  },
                                  i
                                );
                            }
                            (u[t] = e), 0 == --s && o(u);
                          } catch (r) {
                            i(r);
                          }
                        }
                        if (0 === u.length) return o([]);
                        for (var s = u.length, e = 0; e < u.length; e++) a(e, u[e]);
                      });
                    }),
                    (i.resolve = function (t) {
                      return t && 'object' == typeof t && t.constructor === i
                        ? t
                        : new i(function (e) {
                            e(t);
                          });
                    }),
                    (i.reject = function (n) {
                      return new i(function (e, t) {
                        t(n);
                      });
                    }),
                    (i.race = function (o) {
                      return new i(function (e, t) {
                        for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t);
                      });
                    }),
                    (i._immediateFn =
                      ('function' == typeof setImmediate &&
                        function (e) {
                          setImmediate(e);
                        }) ||
                      function (e) {
                        t(e, 0);
                      }),
                    (i._unhandledRejectionFn = function n (e) {
                      'undefined' != typeof console &&
                        console &&
                        console.warn('Possible Unhandled Promise Rejection:', e);
                    }),
                    (i._setImmediateFn = function d (e) {
                      i._immediateFn = e;
                    }),
                    (i._setUnhandledRejectionFn = function p (e) {
                      i._unhandledRejectionFn = e;
                    }),
                    h.exports ? (h.exports = i) : e.Promise || (e.Promise = i);
                })(g);
              }),
              X = window.Promise || Y,
              ee = function (n, r) {
                return new X(function (t, e) {
                  'onload' in r
                    ? ((r.onload = function () {
                        t(r);
                      }),
                      (r.onerror = function () {
                        e(new Error('Failed to load script ' + n));
                      }))
                    : 'readyState' in r &&
                      (r.onreadystatechange = function () {
                        var e = r.readyState;
                        ('loaded' !== e && 'complete' !== e) ||
                          ((r.onreadystatechange = null), t(r));
                      });
                });
              },
              te = function (e) {
                var t = document.createElement('script');
                (t.src = e), (t.async = !0);
                var n = ee(e, t);
                return document.getElementsByTagName('head')[0].appendChild(t), n;
              },
              ne = Object.getOwnPropertySymbols,
              re = Object.prototype.hasOwnProperty,
              oe = Object.prototype.propertyIsEnumerable,
              ie = t()
                ? Object.assign
                : function (e) {
                    for (var t, n, r = s(e), o = 1; o < arguments.length; o++) {
                      for (var i in (t = Object(arguments[o]))) re.call(t, i) && (r[i] = t[i]);
                      if (ne) {
                        n = ne(t);
                        for (var a = 0; a < n.length; a++) oe.call(t, n[a]) && (r[n[a]] = t[n[a]]);
                      }
                    }
                    return r;
                  },
              ae = function (e, t, n, r) {
                (t = t || '&'), (n = n || '=');
                var o = {};
                if ('string' != typeof e || 0 === e.length) return o;
                var i = /\+/g;
                e = e.split(t);
                var a = 1000;
                r && 'number' == typeof r.maxKeys && (a = r.maxKeys);
                var s = e.length;
                0 < a && a < s && (s = a);
                for (var u = 0; u < s; ++u) {
                  var c,
                    l,
                    f,
                    d,
                    p = e[u].replace(i, '%20'),
                    h = p.indexOf(n);
                  (l = 0 <= h ? ((c = p.substr(0, h)), p.substr(h + 1)) : ((c = p), '')),
                    (f = decodeURIComponent(c)),
                    (d = decodeURIComponent(l)),
                    m(o, f)
                      ? Array.isArray(o[f])
                        ? o[f].push(d)
                        : (o[f] = [o[f], d])
                      : (o[f] = d);
                }
                return o;
              },
              se = function (e) {
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
              ue = function (n, r, o, e) {
                return (
                  (r = r || '&'),
                  (o = o || '='),
                  null === n && (n = undefined),
                  'object' == typeof n
                    ? Object.keys(n)
                        .map(function (e) {
                          var t = encodeURIComponent(se(e)) + o;
                          return Array.isArray(n[e])
                            ? n[e]
                                .map(function (e) {
                                  return t + encodeURIComponent(se(e));
                                })
                                .join(r)
                            : t + encodeURIComponent(se(n[e]));
                        })
                        .join(r)
                    : e
                    ? encodeURIComponent(se(e)) + o + encodeURIComponent(se(n))
                    : ''
                );
              },
              ce = e(function (e, t) {
                (t.decode = t.parse = ae), (t.encode = t.stringify = ue);
              }),
              le = '@adobe/reactor-',
              fe = {
                cookie: v,
                document: K,
                'load-script': te,
                'object-assign': ie,
                promise: X,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), ce.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return ce.stringify(e);
                  },
                },
                window: b,
              },
              de = function (r) {
                return function (e) {
                  if (0 === e.indexOf(le)) {
                    var t = e.substr(le.length),
                      n = fe[t];
                    if (n) return n;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return r(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              pe = function (e, a, s, u) {
                var c = e.extensions,
                  l = e.buildInfo,
                  f = e.property.settings;
                if (c) {
                  var d = W(c, a);
                  Object.keys(c).forEach(function (r) {
                    var o = c[r],
                      e = $(s, o.settings);
                    if (o.modules) {
                      var t = _.createPrefixedLogger(o.displayName),
                        n = Q(o.hostedLibFilesBaseUrl, l.minified),
                        i = {
                          buildInfo: l,
                          getDataElementValue: u,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: n,
                          getSharedModule: d,
                          logger: t,
                          propertySettings: f,
                          replaceTokens: s,
                        };
                      Object.keys(o.modules).forEach(function (n) {
                        var e = o.modules[n],
                          t = de(function (e) {
                            var t = J(n, e);
                            return a.getModuleExports(t);
                          });
                        a.registerModule(n, e, r, t, i);
                      });
                    }
                  }),
                    a.hydrateCache();
                }
                return a;
              },
              he = function (e, t, n, r, o) {
                var i = _.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  _.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: t.property.name }),
                  (e.company = t.company),
                  (e.buildInfo = t.buildInfo),
                  (e.logger = i),
                  (e.notify = function (e, t) {
                    switch (
                      (_.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      t)
                    ) {
                      case 3:
                        i.info(e);
                        break;
                      case 4:
                        i.warn(e);
                        break;
                      case 5:
                        i.error(e);
                        break;
                      default:
                        i.log(e);
                    }
                  }),
                  (e.getVar = r),
                  (e.setVar = o),
                  (e.setCookie = function (e, t, n) {
                    var r = '',
                      o = {};
                    n && ((r = ', { expires: ' + n + ' }'), (o.expires = n));
                    var i =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      t +
                      '"' +
                      r +
                      ').';
                    _.warn(i), v.set(e, t, o);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      _.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      v.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    _.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      v.remove(e);
                  }),
                  (e.cookie = v),
                  (e.pageBottom = function () {}),
                  (e.setDebug = n);
                var a = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      a ||
                        (_.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (a = !0)),
                      t
                    );
                  },
                });
              },
              me = function (e, t) {
                return (
                  ie((t = t || {}), e),
                  t.hasOwnProperty('type') ||
                    Object.defineProperty(t, 'type', {
                      get: function () {
                        return (
                          _.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          t.$type
                        );
                      },
                    }),
                  t
                );
              },
              ge = function (e) {
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
              ye = !1,
              ve = function (r) {
                return function (t, n) {
                  var e = r._monitors;
                  e &&
                    (ye ||
                      (_.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (ye = !0)),
                    e.forEach(function (e) {
                      e[t] && e[t](n);
                    }));
                };
              },
              be = 'Module did not export a function.',
              we = function (i, a) {
                return function (e, t, n) {
                  n = n || [];
                  var r = i.getModuleExports(e.modulePath);
                  if ('function' != typeof r) throw new Error(be);
                  var o = a(e.settings || {}, t);
                  return r.bind(null, o).apply(null, n);
                };
              },
              _e = T('localStorage'),
              Te = T('sessionStorage'),
              xe = function () {
                return Boolean(_e.getItem('queue') || Te.getItem('queue'));
              },
              Se = 2000,
              Ee = !1,
              ke = function () {
                Ee ||
                  ((Ee = !0),
                  _.warn(
                    'Rule queueing is only intended for testing purposes. Queueing behavior may be changed or removed at any time.'
                  ));
              },
              Oe = function (e, t, s, n) {
                var i = X.resolve(),
                  u = ve(e),
                  c = we(s, n),
                  o = function (e) {
                    var t = s.getModuleDefinition(e.modulePath);
                    return (t && t.displayName) || e.modulePath;
                  },
                  l = function (e, t, n, r) {
                    return (
                      'Failed to execute ' +
                      o(e) +
                      ' for ' +
                      t.name +
                      ' rule. ' +
                      n +
                      (r ? '\n' + r : '')
                    );
                  },
                  a = function (e, t, n) {
                    _.error(l(e, t, n.message, n.stack)),
                      u('ruleActionFailed', { rule: t, action: e });
                  },
                  f = function (e, t, n) {
                    _.error(l(e, t, n.message, n.stack)),
                      u('ruleConditionFailed', { rule: t, condition: e });
                  },
                  d = function (e, t) {
                    var n = o(e);
                    _.log('Condition ' + n + ' for rule ' + t.name + ' not met.'),
                      u('ruleConditionFailed', { rule: t, condition: e });
                  },
                  p = function (e) {
                    _.log('Rule "' + e.name + '" fired.'), u('ruleCompleted', { rule: e });
                  },
                  h = function (e) {
                    return (
                      e ||
                        (e = new Error(
                          'The extension triggered an error, but no error information was provided.'
                        )),
                      e instanceof Error || (e = new Error(String(e))),
                      e
                    );
                  },
                  m = function (e, t) {
                    return (t && !e.negate) || (!t && e.negate);
                  },
                  g = function (t, o) {
                    t.conditions &&
                      t.conditions.forEach(function (r) {
                        i = i.then(function () {
                          var n;
                          return new X(function (e, t) {
                            (n = setTimeout(function () {
                              t(
                                'A timeout occurred because the condition took longer than ' +
                                  Se / 1000 +
                                  ' seconds to complete. '
                              );
                            }, Se)),
                              X.resolve(c(r, o, [o])).then(e, t);
                          })
                            ['catch'](function (e) {
                              return clearTimeout(n), (e = h(e, r)), f(r, t, e), X.reject(e);
                            })
                            .then(function (e) {
                              if ((clearTimeout(n), !m(r, e))) return d(r, t), X.reject();
                            });
                        });
                      }),
                      t.actions &&
                        t.actions.forEach(function (r) {
                          i = i.then(function () {
                            var n;
                            return new X(function (e, t) {
                              (n = setTimeout(function () {
                                t(
                                  'A timeout occurred because the action took longer than ' +
                                    Se / 1000 +
                                    ' seconds to complete. '
                                );
                              }, Se)),
                                X.resolve(c(r, o, [o])).then(e, t);
                            })
                              .then(function () {
                                clearTimeout(n);
                              })
                              ['catch'](function (e) {
                                return clearTimeout(n), (e = h(e)), a(r, t, e), X.reject(e);
                              });
                          });
                        }),
                      (i = (i = i.then(function () {
                        p(t);
                      }))['catch'](function () {}));
                  },
                  y = function (e, t) {
                    var n;
                    if (e.conditions)
                      for (var r = 0; r < e.conditions.length; r++) {
                        n = e.conditions[r];
                        try {
                          var o = c(n, t, [t]);
                          if (!m(n, o)) return void d(n, e);
                        } catch (i) {
                          return void f(n, e, i);
                        }
                      }
                    v(e, t);
                  },
                  v = function (e, t) {
                    var n;
                    if (e.actions) {
                      for (var r = 0; r < e.actions.length; r++) {
                        n = e.actions[r];
                        try {
                          c(n, t, [t]);
                        } catch (o) {
                          return void a(n, e, o);
                        }
                      }
                      p(e);
                    }
                  },
                  b = !1,
                  w = [],
                  r = function (e) {
                    var t,
                      n = e.rule,
                      r = e.event;
                    r.settings = r.settings || {};
                    try {
                      t = s.getModuleDefinition(r.modulePath).name;
                      var o = {
                          $type: s.getModuleExtensionName(r.modulePath) + '.' + t,
                          $rule: { id: n.id, name: n.name },
                        },
                        i = function (e) {
                          if (b) {
                            u('ruleTriggered', { rule: n });
                            var t = me(o, e);
                            xe() ? (ke(), g(n, t)) : y(n, t);
                          } else w.push(i.bind(null, e));
                        };
                      c(r, null, [i]);
                    } catch (a) {
                      _.error(l(r, n, a.message, a.stack));
                    }
                  };
                return (
                  ge(t).forEach(r),
                  (b = !0),
                  w.forEach(function (e) {
                    e();
                  }),
                  (w = null),
                  i
                );
              },
              Ce = 'debug',
              je = window._satellite;
            if (je && !window.__satelliteLoaded) {
              window.__satelliteLoaded = !0;
              var Pe = je.container;
              delete je.container;
              var Ae = Pe.property.settings.undefinedVarsReturnEmpty,
                Ie = Pe.dataElements || {};
              N.migrateCookieData(Ie);
              var Re,
                Ne = function (e) {
                  return Ie[e];
                },
                Me = B(),
                Fe = L(
                  Me,
                  Ne,
                  function () {
                    return Re.apply(null, arguments);
                  },
                  Ae
                ),
                Le = {},
                De = p(Le),
                Be = U(Le, Ne),
                Ue = V(Le, Ne, Fe);
              Re = d(Be, Ue, Ae);
              var qe = T('localStorage'),
                He = function () {
                  return 'true' === qe.getItem(Ce);
                },
                Ve = function (e) {
                  qe.setItem(Ce, e), (_.outputEnabled = e);
                };
              (_.outputEnabled = He()),
                he(je, Pe, Ve, Ue, De),
                pe(Pe, Me, Re, Fe),
                Oe(je, Pe.rules || [], Me, Re);
            }
            return je;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_20e2374da794f0d7)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_20e2374da794f0d7
          ));
      }
    })();
    _satellite = $___var_4edb66bb8cb2e7de;
  })();
}
