{
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
  const $___stub_f79664207d7661d0 = {};
  (exports => {
    'use strict';
    exports.doNotTrack = {
      configurable: true,
      enumerable: true,
      get () {
        return '1';
      },
    };
    exports.productSub = {
      configurable: true,
      enumerable: true,
      get () {
        return 20030107;
      },
    };
    exports.vendor = {
      configurable: true,
      enumerable: true,
      get () {
        return '';
      },
    };
  })($___stub_f79664207d7661d0);
  (function () {
    !(function (e, t, n) {
      function i () {
        T.getToolsByType('nielsen').length > 0 && T.domReady(T.bind(this.initialize, this));
      }
      function r (t) {
        T.domReady(
          T.bind(function () {
            (this.twttr = t || e.twttr), this.initialize();
          }, this)
        );
      }
      function o () {
        (this.lastURL = T.URL()),
          (this._fireIfURIChanged = T.bind(this.fireIfURIChanged, this)),
          (this._onPopState = T.bind(this.onPopState, this)),
          (this._onHashChange = T.bind(this.onHashChange, this)),
          (this._pushState = T.bind(this.pushState, this)),
          (this._replaceState = T.bind(this.replaceState, this)),
          this.initialize();
      }
      function c () {
        var e = T.filter(T.rules, function (e) {
          return 0 === e.event.indexOf('dataelementchange');
        });
        (this.dataElementsNames = T.map(
          e,
          function (e) {
            return e.event.match(/dataelementchange\((.*)\)/i)[1];
          },
          this
        )),
          this.initPolling();
      }
      function l () {
        T.addEventHandler(e, 'orientationchange', l.orientationChange);
      }
      function u () {
        (this.rules = T.filter(T.rules, function (e) {
          return 'videoplayed' === e.event.substring(0, 11);
        })),
          (this.eventHandler = T.bind(this.onUpdateTime, this));
      }
      function d () {
        this.defineEvents(),
          (this.visibilityApiHasPriority = !0),
          t.addEventListener
            ? this.setVisibilityApiPriority(!1)
            : this.attachDetachOlderEventListeners(!0, t, 'focusout');
        T.bindEvent('aftertoolinit', function () {
          T.fireEvent(T.visibility.isHidden() ? 'tabblur' : 'tabfocus');
        });
      }
      function g (t) {
        (t = t || T.rules),
          (this.rules = T.filter(t, function (e) {
            return 'inview' === e.event;
          })),
          (this.elements = []),
          (this.eventHandler = T.bind(this.track, this)),
          T.addEventHandler(e, 'scroll', this.eventHandler),
          T.addEventHandler(e, 'load', this.eventHandler);
      }
      function m () {
        this.rules = T.filter(T.rules, function (e) {
          return 'elementexists' === e.event;
        });
      }
      function p (e) {
        (this.delay = 250),
          (this.FB = e),
          T.domReady(
            T.bind(function () {
              T.poll(T.bind(this.initialize, this), this.delay, 8);
            }, this)
          );
      }
      function h () {
        var e = (this.eventRegex = /^hover\(([0-9]+)\)$/),
          t = (this.rules = []);
        T.each(T.rules, function (n) {
          n.event.match(e) && t.push([Number(n.event.match(e)[1]), n.selector]);
        });
      }
      function f (e) {
        T.BaseTool.call(this, e),
          this.defineListeners(),
          (this.beaconMethod = 'plainBeacon'),
          (this.adapt = new f.DataAdapters()),
          (this.dataProvider = new f.DataProvider.Aggregate());
      }
      function v (e) {
        T.BaseTool.call(this, e), (this.styleElements = {}), (this.targetPageParamsStore = {});
      }
      function b () {
        T.BaseTool.call(this),
          (this.asyncScriptCallbackQueue = []),
          (this.argsForBlockingScripts = []);
      }
      function y (e) {
        T.BaseTool.call(this, e),
          (this.varBindings = {}),
          (this.events = []),
          (this.products = []),
          (this.customSetupFuns = []);
      }
      function w (e) {
        T.BaseTool.call(this, e), (this.name = e.name || 'Basic');
      }
      function _ (e) {
        T.BaseTool.call(this, e);
      }
      function x (e) {
        T.BaseTool.call(this, e);
      }
      function C (e) {
        T.BaseTool.call(this, e), (this.name = e.name || 'VisitorID'), this.initialize();
      }
      var S,
        E,
        k,
        P = Object.prototype.toString,
        V = e._satellite && e._satellite.override,
        T = {
          initialized: !1,
          $data: function (e, t, a) {
            if (e) {
              var i = '__satellite__',
                r = T.dataCache,
                o = e[i];
              o || (o = e[i] = T.uuid++);
              var s = r[o];
              if ((s || (s = r[o] = {}), a === n)) return s[t];
              s[t] = a;
            }
          },
          uuid: 1,
          dataCache: {},
          keys: function (e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t;
          },
          values: function (e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
            return t;
          },
          isArray:
            Array.isArray ||
            function (e) {
              return '[object Array]' === P.apply(e);
            },
          isObject: function (e) {
            return null != e && !T.isArray(e) && 'object' == typeof e;
          },
          isString: function (e) {
            return 'string' == typeof e;
          },
          isNumber: function (e) {
            return '[object Number]' === P.apply(e) && !T.isNaN(e);
          },
          isNaN: function (e) {
            return e != e;
          },
          isRegex: function (e) {
            return e instanceof RegExp;
          },
          isLinkTag: function (e) {
            return !(!e || !e.nodeName || 'a' !== e.nodeName.toLowerCase());
          },
          each: function (e, t, n) {
            for (var a = 0, i = e.length; a < i; a++) t.call(n, e[a], a, e);
          },
          map: function (e, t, n) {
            for (var a = [], i = 0, r = e.length; i < r; i++) a.push(t.call(n, e[i], i, e));
            return a;
          },
          filter: function (e, t, n) {
            for (var a = [], i = 0, r = e.length; i < r; i++) {
              var o = e[i];
              t.call(n, o, i, e) && a.push(o);
            }
            return a;
          },
          any: function (e, t, n) {
            for (var a = 0, i = e.length; a < i; a++) {
              var r = e[a];
              if (t.call(n, r, a, e)) return !0;
            }
            return !1;
          },
          every: function (e, t, n) {
            for (var a = !0, i = 0, r = e.length; i < r; i++) {
              var o = e[i];
              a = a && t.call(n, o, i, e);
            }
            return a;
          },
          contains: function (e, t) {
            return -1 !== T.indexOf(e, t);
          },
          indexOf: function (e, t) {
            if (e.indexOf) return e.indexOf(t);
            for (var n = e.length; n--; ) if (t === e[n]) return n;
            return -1;
          },
          find: function (e, t, n) {
            if (!e) return null;
            for (var a = 0, i = e.length; a < i; a++) {
              var r = e[a];
              if (t.call(n, r, a, e)) return r;
            }
            return null;
          },
          textMatch: function (e, t) {
            if (null == t) throw new Error('Illegal Argument: Pattern is not present');
            return (
              null != e && ('string' == typeof t ? e === t : t instanceof RegExp && t.test(e))
            );
          },
          stringify: function (e, t) {
            if (((t = t || []), T.isObject(e))) {
              if (T.contains(t, e)) return '<Cycle>';
              t.push(e);
            }
            if (T.isArray(e))
              return (
                '[' +
                T.map(e, function (e) {
                  return T.stringify(e, t);
                }).join(',') +
                ']'
              );
            if (T.isString(e)) return '"' + String(e) + '"';
            if (T.isObject(e)) {
              var n = [];
              for (var a in e) e.hasOwnProperty(a) && n.push(a + ': ' + T.stringify(e[a], t));
              return '{' + n.join(', ') + '}';
            }
            return String(e);
          },
          trim: function (e) {
            return null == e ? null : e.trim ? e.trim() : e.replace(/^ */, '').replace(/ *$/, '');
          },
          bind: function (e, t) {
            return function () {
              return e.apply(t, arguments);
            };
          },
          throttle: function (e, t) {
            var n = null;
            return function () {
              var a = this,
                i = arguments;
              clearTimeout(n),
                (n = setTimeout(function () {
                  e.apply(a, i);
                }, t));
            };
          },
          domReady: (function (e) {
            function n (e) {
              for (g = 1; (e = i.shift()); ) e();
            }
            var a,
              i = [],
              r = !1,
              o = t,
              s = o.documentElement,
              c = s.doScroll,
              l = 'DOMContentLoaded',
              u = 'addEventListener',
              d = 'onreadystatechange',
              g = /^loade|^c/.test(o.readyState);
            return (
              o[u] &&
                o[u](
                  l,
                  (a = function () {
                    o.removeEventListener(l, a, r), n();
                  }),
                  r
                ),
              c &&
                o.attachEvent(
                  d,
                  (a = function () {
                    /^c/.test(o.readyState) && (o.detachEvent(d, a), n());
                  })
                ),
              (e = c
                ? function (t) {
                    self != top
                      ? g
                        ? t()
                        : i.push(t)
                      : (function () {
                          try {
                            s.doScroll('left');
                          } catch (n) {
                            return setTimeout(function () {
                              e(t);
                            }, 50);
                          }
                          t();
                        })();
                  }
                : function (e) {
                    g ? e() : i.push(e);
                  })
            );
          })(),
          loadScript: function (e, n) {
            var a = t.createElement('script');
            T.scriptOnLoad(e, a, n), (a.src = e), t.getElementsByTagName('head')[0].appendChild(a);
          },
          scriptOnLoad: function (e, t, n) {
            function a (e) {
              e && T.logError(e), n && n(e);
            }
            'onload' in t
              ? ((t.onload = function () {
                  a();
                }),
                (t.onerror = function () {
                  a(new Error('Failed to load script ' + e));
                }))
              : 'readyState' in t &&
                (t.onreadystatechange = function () {
                  var e = t.readyState;
                  ('loaded' !== e && 'complete' !== e) || ((t.onreadystatechange = null), a());
                });
          },
          loadScriptOnce: function (e, t) {
            T.loadedScriptRegistry[e] ||
              T.loadScript(e, function (n) {
                n || (T.loadedScriptRegistry[e] = !0), t && t(n);
              });
          },
          loadedScriptRegistry: {},
          loadScriptSync: function (e) {
            t.write
              ? T.domReadyFired
                ? T.notify('Cannot load sync the "' + e + '" script after DOM Ready.', 1)
                : (e.indexOf('"') > -1 && (e = encodeURI(e)),
                  t.write('<script src="' + e + '"></script>'))
              : T.notify(
                  'Cannot load sync the "' +
                    e +
                    '" script because "document.write" is not available',
                  1
                );
          },
          pushAsyncScript: function (e) {
            T.tools['default'].pushAsyncScript(e);
          },
          pushBlockingScript: function (e) {
            T.tools['default'].pushBlockingScript(e);
          },
          addEventHandler: e.addEventListener
            ? function (e, t, n) {
                e.addEventListener(t, n, !1);
              }
            : function (e, t, n) {
                e.attachEvent('on' + t, n);
              },
          removeEventHandler: e.removeEventListener
            ? function (e, t, n) {
                e.removeEventListener(t, n, !1);
              }
            : function (e, t, n) {
                e.detachEvent('on' + t, n);
              },
          preventDefault: e.addEventListener
            ? function (e) {
                e.preventDefault();
              }
            : function (e) {
                e.returnValue = !1;
              },
          stopPropagation: function (e) {
            (e.cancelBubble = !0), e.stopPropagation && e.stopPropagation();
          },
          containsElement: function (e, t) {
            return e.contains ? e.contains(t) : !!(16 & e.compareDocumentPosition(t));
          },
          matchesCss: (function (n) {
            function a (e, t) {
              var n = t.tagName;
              return !!n && e.toLowerCase() === n.toLowerCase();
            }
            var i =
              n.matchesSelector ||
              n.mozMatchesSelector ||
              n.webkitMatchesSelector ||
              n.oMatchesSelector ||
              n.msMatchesSelector;
            return i
              ? function (n, a) {
                  if (a === t || a === e) return !1;
                  try {
                    return i.call(a, n);
                  } catch (r) {
                    return !1;
                  }
                }
              : n.querySelectorAll
              ? function (e, t) {
                  if (!t.parentNode) return !1;
                  if (e.match(/^[a-z]+$/i)) return a(e, t);
                  try {
                    for (var n = t.parentNode.querySelectorAll(e), i = n.length; i--; )
                      if (n[i] === t) return !0;
                  } catch (r) {}
                  return !1;
                }
              : function (e, t) {
                  if (e.match(/^[a-z]+$/i)) return a(e, t);
                  try {
                    return T.Sizzle.matches(e, [t]).length > 0;
                  } catch (n) {
                    return !1;
                  }
                };
          })(t.documentElement),
          cssQuery:
            ((S = t),
            S.querySelectorAll
              ? function (e, t) {
                  var n;
                  try {
                    n = S.querySelectorAll(e);
                  } catch (a) {
                    n = [];
                  }
                  t(n);
                }
              : function (e, t) {
                  if (T.Sizzle) {
                    var n;
                    try {
                      n = T.Sizzle(e);
                    } catch (a) {
                      n = [];
                    }
                    t(n);
                  } else T.sizzleQueue.push([e, t]);
                }),
          hasAttr: function (e, t) {
            return e.hasAttribute ? e.hasAttribute(t) : e[t] !== n;
          },
          inherit: function (e, t) {
            var n = function () {};
            (n.prototype = t.prototype), (e.prototype = new n()), (e.prototype.constructor = e);
          },
          extend: function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          },
          toArray: (function () {
            try {
              var e = Array.prototype.slice;
              return (
                e.call(t.documentElement.childNodes, 0)[0].nodeType,
                function (t) {
                  return e.call(t, 0);
                }
              );
            } catch (n) {
              return function (e) {
                for (var t = [], n = 0, a = e.length; n < a; n++) t.push(e[n]);
                return t;
              };
            }
          })(),
          equalsIgnoreCase: function (e, t) {
            return null == e
              ? null == t
              : null != t && String(e).toLowerCase() === String(t).toLowerCase();
          },
          poll: function (e, t, n) {
            function a () {
              (T.isNumber(n) && i++ >= n) || e() || setTimeout(a, t);
            }
            var i = 0;
            (t = t || 1000), a();
          },
          escapeForHtml: function (e) {
            return e
              ? String(e)
                  .replace(/\&/g, '&amp;')
                  .replace(/\</g, '&lt;')
                  .replace(/\>/g, '&gt;')
                  .replace(/\"/g, '&quot;')
                  .replace(/\'/g, '&#x27;')
                  .replace(/\//g, '&#x2F;')
              : e;
          },
        };
      (T.availableTools = {}),
        (T.availableEventEmitters = []),
        (T.fireOnceEvents = ['condition', 'elementexists']),
        (T.initEventEmitters = function () {
          T.eventEmitters = T.map(T.availableEventEmitters, function (e) {
            return new e();
          });
        }),
        (T.eventEmitterBackgroundTasks = function () {
          T.each(T.eventEmitters, function (e) {
            'backgroundTasks' in e && e.backgroundTasks();
          });
        }),
        (T.initTools = function (e) {
          var t = { default: new b() },
            n = T.settings.euCookieName || 'sat_track';
          for (var a in e)
            if (e.hasOwnProperty(a)) {
              var i, r, o;
              if ((i = e[a]).euCookie) if ('true' !== T.readCookie(n)) continue;
              if (!(r = T.availableTools[i.engine])) {
                var s = [];
                for (var c in T.availableTools) T.availableTools.hasOwnProperty(c) && s.push(c);
                throw new Error(
                  'No tool engine named ' + i.engine + ', available: ' + s.join(',') + '.'
                );
              }
              ((o = new r(i)).id = a), (t[a] = o);
            }
          return t;
        }),
        (T.preprocessArguments = function (e, t, n, a, i) {
          function r (e) {
            return a && T.isString(e) ? e.toLowerCase() : e;
          }
          function o (e) {
            var c = {};
            for (var l in e)
              if (e.hasOwnProperty(l)) {
                var u = e[l];
                T.isObject(u)
                  ? (c[l] = o(u))
                  : T.isArray(u)
                  ? (c[l] = s(u, a))
                  : (c[l] = r(T.replace(u, t, n, i)));
              }
            return c;
          }
          function s (e) {
            for (var a = [], i = 0, s = e.length; i < s; i++) {
              var c = e[i];
              T.isString(c)
                ? (c = r(T.replace(c, t, n)))
                : c && c.constructor === Object && (c = o(c)),
                a.push(c);
            }
            return a;
          }
          return e ? s(e, a) : e;
        }),
        (T.execute = function (e, t, n, a) {
          function i (i) {
            var r = a[i || 'default'];
            if (r)
              try {
                r.triggerCommand(e, t, n);
              } catch (o) {
                T.logError(o);
              }
          }
          if (!_satellite.settings.hideActivity)
            if (((a = a || T.tools), e.engine)) {
              var r = e.engine;
              for (var o in a)
                if (a.hasOwnProperty(o)) {
                  var s = a[o];
                  s.settings && s.settings.engine === r && i(o);
                }
            } else
              e.tool instanceof Array
                ? T.each(e.tool, function (e) {
                    i(e);
                  })
                : i(e.tool);
        }),
        (T.Logger = {
          outputEnabled: !1,
          messages: [],
          keepLimit: 100,
          flushed: !1,
          LEVELS: [null, null, 'log', 'info', 'warn', 'error'],
          message: function (e, t) {
            var n = this.LEVELS[t] || 'log';
            this.messages.push([n, e]),
              this.messages.length > this.keepLimit && this.messages.shift(),
              this.outputEnabled && this.echo(n, e);
          },
          getHistory: function () {
            return this.messages;
          },
          clearHistory: function () {
            this.messages = [];
          },
          setOutputState: function (e) {
            this.outputEnabled != e &&
              ((this.outputEnabled = e), e ? this.flush() : (this.flushed = !1));
          },
          echo: function (t, n) {
            e.console && e.console[t]('SATELLITE: ' + n);
          },
          flush: function () {
            this.flushed ||
              (T.each(
                this.messages,
                function (e) {
                  !0 !== e[2] && (this.echo(e[0], e[1]), (e[2] = !0));
                },
                this
              ),
              (this.flushed = !0));
          },
        }),
        (T.notify = T.bind(T.Logger.message, T.Logger)),
        (T.cleanText = function (e) {
          return null == e ? null : T.trim(e).replace(/\s+/g, ' ');
        }),
        (T.cleanText.legacy = function (e) {
          return null == e
            ? null
            : T.trim(e)
                .replace(/\s{2,}/g, ' ')
                .replace(/[^\000-\177]*/g, '');
        }),
        (T.text = function (e) {
          return e.textContent || e.innerText;
        }),
        (T.specialProperties = {
          text: T.text,
          cleanText: function (e) {
            return T.cleanText(T.text(e));
          },
        }),
        (T.getObjectProperty = function (e, t, a) {
          for (
            var i, r = t.split('.'), o = e, s = T.specialProperties, c = 0, l = r.length;
            c < l;
            c++
          ) {
            if (null == o) return n;
            var u = r[c];
            if (a && '@' === u.charAt(0)) o = s[u.slice(1)](o);
            else if (o.getAttribute && (i = u.match(/^getAttribute\((.+)\)$/))) {
              var d = i[1];
              o = o.getAttribute(d);
            } else o = o[u];
          }
          return o;
        }),
        (T.getToolsByType = function (e) {
          if (!e) throw new Error('Tool type is missing');
          var t = [];
          for (var n in T.tools)
            if (T.tools.hasOwnProperty(n)) {
              var a = T.tools[n];
              a.settings && a.settings.engine === e && t.push(a);
            }
          return t;
        }),
        (T.setVar = function () {
          var e = T.data.customVars;
          if (
            (null == e && ((T.data.customVars = {}), (e = T.data.customVars)),
            'string' == typeof arguments[0])
          )
            e[arguments[0]] = arguments[1];
          else if (arguments[0]) {
            var t = arguments[0];
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          }
        }),
        (T.dataElementSafe = function (e, t) {
          if (arguments.length > 2) {
            var n = arguments[2];
            'pageview' === t
              ? (T.dataElementSafe.pageviewCache[e] = n)
              : 'session' === t
              ? T.setCookie('_sdsat_' + e, n)
              : 'visitor' === t && T.setCookie('_sdsat_' + e, n, 730);
          } else {
            if ('pageview' === t) return T.dataElementSafe.pageviewCache[e];
            if ('session' === t || 'visitor' === t) return T.readCookie('_sdsat_' + e);
          }
        }),
        (T.dataElementSafe.pageviewCache = {}),
        (T.realGetDataElement = function (t) {
          var n;
          return (
            t.selector
              ? T.hasSelector &&
                T.cssQuery(t.selector, function (e) {
                  if (e.length > 0) {
                    var a = e[0];
                    'text' === t.property
                      ? (n = a.innerText || a.textContent)
                      : t.property in a
                      ? (n = a[t.property])
                      : T.hasAttr(a, t.property) && (n = a.getAttribute(t.property));
                  }
                })
              : t.queryParam
              ? (n = t.ignoreCase
                  ? T.getQueryParamCaseInsensitive(t.queryParam)
                  : T.getQueryParam(t.queryParam))
              : t.cookie
              ? (n = T.readCookie(t.cookie))
              : t.jsVariable
              ? (n = T.getObjectProperty(e, t.jsVariable))
              : t.customJS
              ? (n = t.customJS())
              : t.contextHub && (n = t.contextHub()),
            T.isString(n) && t.cleanText && (n = T.cleanText(n)),
            n
          );
        }),
        (T.getDataElement = function (e, t, a) {
          if (null == (a = a || T.dataElements[e]))
            return T.settings.undefinedVarsReturnEmpty ? '' : null;
          var i = T.realGetDataElement(a);
          return (
            i === n && a.storeLength
              ? (i = T.dataElementSafe(e, a.storeLength))
              : i !== n && a.storeLength && T.dataElementSafe(e, a.storeLength, i),
            i || t || (i = a['default'] || ''),
            T.isString(i) && a.forceLowerCase && (i = i.toLowerCase()),
            i
          );
        }),
        (T.getVar = function (a, i, r) {
          var o,
            s,
            c = T.data.customVars,
            l = r ? r.target || r.srcElement : null,
            u = { uri: T.URI(), protocol: t.location.protocol, hostname: t.location.hostname };
          if (T.dataElements && a in T.dataElements) return T.getDataElement(a);
          if ((s = u[a.toLowerCase()]) === n)
            if ('this.' === a.substring(0, 5))
              (a = a.slice(5)), (s = T.getObjectProperty(i, a, !0));
            else if ('event.' === a.substring(0, 6))
              (a = a.slice(6)), (s = T.getObjectProperty(r, a));
            else if ('target.' === a.substring(0, 7))
              (a = a.slice(7)), (s = T.getObjectProperty(l, a));
            else if ('window.' === a.substring(0, 7))
              (a = a.slice(7)), (s = T.getObjectProperty(e, a));
            else if ('param.' === a.substring(0, 6)) (a = a.slice(6)), (s = T.getQueryParam(a));
            else if ((o = a.match(/^rand([0-9]+)$/))) {
              var d = Number(o[1]),
                g = (Math.random() * (Math.pow(10, d) - 1)).toFixed(0);
              s = Array(d - g.length + 1).join('0') + g;
            } else s = T.getObjectProperty(c, a);
          return s;
        }),
        (T.getVars = function (e, t, n) {
          var a = {};
          return (
            T.each(e, function (e) {
              a[e] = T.getVar(e, t, n);
            }),
            a
          );
        }),
        (T.replace = function (e, t, n, a) {
          return 'string' != typeof e
            ? e
            : e.replace(/%(.*?)%/g, function (e, i) {
                var r = T.getVar(i, t, n);
                return null == r
                  ? T.settings.undefinedVarsReturnEmpty
                    ? ''
                    : e
                  : a
                  ? T.escapeForHtml(r)
                  : r;
              });
        }),
        (T.escapeHtmlParams = function (e) {
          return (e.escapeHtml = !0), e;
        }),
        (T.searchVariables = function (e, t, n) {
          if (!e || 0 === e.length) return '';
          for (var a = [], i = 0, r = e.length; i < r; i++) {
            var o = e[i],
              s = T.getVar(o, t, n);
            a.push(o + '=' + escape(s));
          }
          return '?' + a.join('&');
        }),
        (T.fireRule = function (e, t, n) {
          var a = e.trigger;
          if (a) {
            for (var i = 0, r = a.length; i < r; i++) {
              var o = a[i];
              T.execute(o, t, n);
            }
            T.contains(T.fireOnceEvents, e.event) && (e.expired = !0);
          }
        }),
        (T.isLinked = function (e) {
          for (var t = e; t; t = t.parentNode) if (T.isLinkTag(t)) return !0;
          return !1;
        }),
        (T.firePageLoadEvent = function (e) {
          for (
            var n = t.location,
              a = { type: e, target: n },
              i = T.pageLoadRules,
              r = T.evtHandlers[a.type],
              o = i.length;
            o--;

          ) {
            var s = i[o];
            T.ruleMatches(s, a, n) &&
              (T.notify('Rule "' + s.name + '" fired.', 1), T.fireRule(s, n, a));
          }
          for (var c in T.tools)
            if (T.tools.hasOwnProperty(c)) {
              var l = T.tools[c];
              l.endPLPhase && l.endPLPhase(e);
            }
          r &&
            T.each(r, function (e) {
              e(a);
            });
        }),
        (T.track = function (e) {
          e = e.replace(/^\s*/, '').replace(/\s*$/, '');
          for (var t = 0; t < T.directCallRules.length; t++) {
            var n = T.directCallRules[t];
            if (n.name === e)
              return (
                T.notify('Direct call Rule "' + e + '" fired.', 1),
                void T.fireRule(n, location, { type: e })
              );
          }
          T.notify('Direct call Rule "' + e + '" not found.', 1);
        }),
        (T.basePath = function () {
          return T.data.host
            ? ('https:' === t.location.protocol
                ? 'https://' + T.data.host.https
                : 'http://' + T.data.host.http) + '/'
            : this.settings.basePath;
        }),
        (T.setLocation = function (t) {
          e.location = t;
        }),
        (T.parseQueryParams = function (e) {
          var t = function (e) {
            var t = e;
            try {
              t = decodeURIComponent(e);
            } catch (n) {}
            return t;
          };
          if ('' === e || !1 === T.isString(e)) return {};
          0 === e.indexOf('?') && (e = e.substring(1));
          var n = {},
            a = e.split('&');
          return (
            T.each(a, function (e) {
              (e = e.split('='))[1] && (n[t(e[0])] = t(e[1]));
            }),
            n
          );
        }),
        (T.getCaseSensitivityQueryParamsMap = function (e) {
          var t = T.parseQueryParams(e),
            n = {};
          for (var a in t) t.hasOwnProperty(a) && (n[a.toLowerCase()] = t[a]);
          return { normal: t, caseInsensitive: n };
        }),
        (T.updateQueryParams = function () {
          T.QueryParams = T.getCaseSensitivityQueryParamsMap(e.location.search);
        }),
        T.updateQueryParams(),
        (T.getQueryParam = function (e) {
          return T.QueryParams.normal[e];
        }),
        (T.getQueryParamCaseInsensitive = function (e) {
          return T.QueryParams.caseInsensitive[e.toLowerCase()];
        }),
        (T.encodeObjectToURI = function (e) {
          if (!1 === T.isObject(e)) return '';
          var t = [];
          for (var n in e)
            e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + '=' + encodeURIComponent(e[n]));
          return t.join('&');
        }),
        (T.readCookie = function (e) {
          for (var a = e + '=', i = t.cookie.split(';'), r = 0; r < i.length; r++) {
            for (var o = i[r]; ' ' == o.charAt(0); ) o = o.substring(1, o.length);
            if (0 === o.indexOf(a)) return o.substring(a.length, o.length);
          }
          return n;
        }),
        (T.setCookie = function (e, n, a) {
          var i;
          if (a) {
            var r = new Date();
            r.setTime(r.getTime() + 24 * a * 60 * 60 * 1000), (i = '; expires=' + r.toGMTString());
          } else i = '';
          t.cookie = e + '=' + n + i + '; path=/';
        }),
        (T.removeCookie = function (e) {
          T.setCookie(e, '', -1);
        }),
        (T.getElementProperty = function (e, t) {
          if ('@' === t.charAt(0)) {
            var a = T.specialProperties[t.substring(1)];
            if (a) return a(e);
          }
          return 'innerText' === t
            ? T.text(e)
            : t in e
            ? e[t]
            : e.getAttribute
            ? e.getAttribute(t)
            : n;
        }),
        (T.propertiesMatch = function (e, t) {
          if (e)
            for (var n in e)
              if (e.hasOwnProperty(n)) {
                var a = e[n],
                  i = T.getElementProperty(t, n);
                if ('string' == typeof a && a !== i) return !1;
                if (a instanceof RegExp && !a.test(i)) return !1;
              }
          return !0;
        }),
        (T.isRightClick = function (e) {
          var t;
          return e.which ? (t = 3 == e.which) : e.button && (t = 2 == e.button), t;
        }),
        (T.ruleMatches = function (e, t, n, a) {
          var i = e.condition,
            r = e.conditions,
            o = e.property,
            s = t.type,
            c = e.value,
            l = t.target || t.srcElement,
            u = n === l;
          if (e.event !== s && ('custom' !== e.event || e.customEvent !== s)) return !1;
          if (!T.ruleInScope(e)) return !1;
          if ('click' === e.event && T.isRightClick(t)) return !1;
          if (e.isDefault && a > 0) return !1;
          if (e.expired) return !1;
          if ('inview' === s && t.inviewDelay !== e.inviewDelay) return !1;
          if (!u && (!1 === e.bubbleFireIfParent || (0 !== a && !1 === e.bubbleFireIfChildFired)))
            return !1;
          if (e.selector && !T.matchesCss(e.selector, n)) return !1;
          if (!T.propertiesMatch(o, n)) return !1;
          if (null != c)
            if ('string' == typeof c) {
              if (c !== n.value) return !1;
            } else if (!c.test(n.value)) return !1;
          if (i)
            try {
              if (!i.call(n, t, l))
                return T.notify('Condition for rule "' + e.name + '" not met.', 1), !1;
            } catch (g) {
              return (
                T.notify('Condition for rule "' + e.name + '" not met. Error: ' + g.message, 1), !1
              );
            }
          if (r) {
            var d = T.find(r, function (a) {
              try {
                return !a.call(n, t, l);
              } catch (g) {
                return (
                  T.notify('Condition for rule "' + e.name + '" not met. Error: ' + g.message, 1),
                  !0
                );
              }
            });
            if (d)
              return (
                T.notify('Condition ' + d.toString() + ' for rule "' + e.name + '" not met.', 1),
                !1
              );
          }
          return !0;
        }),
        (T.evtHandlers = {}),
        (T.bindEvent = function (e, t) {
          var n = T.evtHandlers;
          n[e] || (n[e] = []), n[e].push(t);
        }),
        (T.whenEvent = T.bindEvent),
        (T.unbindEvent = function (e, t) {
          var n = T.evtHandlers;
          if (n[e]) {
            var a = T.indexOf(n[e], t);
            n[e].splice(a, 1);
          }
        }),
        (T.bindEventOnce = function (e, t) {
          var n = function () {
            T.unbindEvent(e, n), t.apply(null, arguments);
          };
          T.bindEvent(e, n);
        }),
        (T.isVMLPoisoned = function (e) {
          if (!e) return !1;
          try {
            e.nodeName;
          } catch (t) {
            if ('Attribute only valid on v:image' === t.message) return !0;
          }
          return !1;
        }),
        (T.handleEvent = function (e) {
          if (!T.$data(e, 'eventProcessed')) {
            var t = e.type.toLowerCase(),
              n = e.target || e.srcElement,
              a = 0,
              i = T.rules,
              r = (T.tools, T.evtHandlers[e.type]);
            if (T.isVMLPoisoned(n))
              T.notify('detected ' + t + ' on poisoned VML element, skipping.', 1);
            else {
              r &&
                T.each(r, function (t) {
                  t(e);
                }),
                n && n.nodeName
                  ? T.notify('detected ' + t + ' on ' + n.nodeName, 1)
                  : T.notify('detected ' + t, 1);
              for (var o = n; o; o = o.parentNode) {
                var s = !1;
                if (
                  (T.each(i, function (t) {
                    T.ruleMatches(t, e, o, a) &&
                      (T.notify('Rule "' + t.name + '" fired.', 1),
                      T.fireRule(t, o, e),
                      a++,
                      t.bubbleStop && (s = !0));
                  }),
                  s)
                )
                  break;
              }
              T.$data(e, 'eventProcessed', !0);
            }
          }
        }),
        (T.onEvent = t.querySelectorAll
          ? function (e) {
              T.handleEvent(e);
            }
          : ((E = []),
            ((k = function (e) {
              e.selector ? E.push(e) : T.handleEvent(e);
            }).pendingEvents = E),
            k)),
        (T.fireEvent = function (e, t) {
          T.onEvent({ type: e, target: t });
        }),
        (T.registerEvents = function (e, t) {
          for (var n = t.length - 1; n >= 0; n--) {
            var a = t[n];
            T.$data(e, a + '.tracked') ||
              (T.addEventHandler(e, a, T.onEvent), T.$data(e, a + '.tracked', !0));
          }
        }),
        (T.registerEventsForTags = function (e, n) {
          for (var a = e.length - 1; a >= 0; a--)
            for (var i = e[a], r = t.getElementsByTagName(i), o = r.length - 1; o >= 0; o--)
              T.registerEvents(r[o], n);
        }),
        (T.setListeners = function () {
          var e = ['click', 'submit'];
          T.each(T.rules, function (t) {
            'custom' === t.event &&
              t.hasOwnProperty('customEvent') &&
              !T.contains(e, t.customEvent) &&
              e.push(t.customEvent);
          }),
            T.registerEvents(t, e);
        }),
        (T.getUniqueRuleEvents = function () {
          return (
            T._uniqueRuleEvents ||
              ((T._uniqueRuleEvents = []),
              T.each(T.rules, function (e) {
                -1 === T.indexOf(T._uniqueRuleEvents, e.event) &&
                  T._uniqueRuleEvents.push(e.event);
              })),
            T._uniqueRuleEvents
          );
        }),
        (T.setFormListeners = function () {
          if (!T._relevantFormEvents) {
            var e = ['change', 'focus', 'blur', 'keypress'];
            T._relevantFormEvents = T.filter(T.getUniqueRuleEvents(), function (t) {
              return -1 !== T.indexOf(e, t);
            });
          }
          T._relevantFormEvents.length &&
            T.registerEventsForTags(
              ['input', 'select', 'textarea', 'button'],
              T._relevantFormEvents
            );
        }),
        (T.setVideoListeners = function () {
          if (!T._relevantVideoEvents) {
            var e = ['play', 'pause', 'ended', 'volumechange', 'stalled', 'loadeddata'];
            T._relevantVideoEvents = T.filter(T.getUniqueRuleEvents(), function (t) {
              return -1 !== T.indexOf(e, t);
            });
          }
          T._relevantVideoEvents.length &&
            T.registerEventsForTags(['video'], T._relevantVideoEvents);
        }),
        (T.readStoredSetting = function (t) {
          const $___old_f8a3c308c5f89613 = {}.constructor.getOwnPropertyDescriptor(
            window,
            'localStorage'
          );
          try {
            if ($___old_f8a3c308c5f89613)
              ({}.constructor.defineProperty(
                window,
                'localStorage',
                $___stub_b317e19f866a2da7.localStorage
              ));
            return function () {
              try {
                return (t = 'sdsat_' + t), e.localStorage.getItem(t);
              } catch (n) {
                return (
                  T.notify('Cannot read stored setting from localStorage: ' + n.message, 2), null
                );
              }
            }.apply(this, arguments);
          } finally {
            if ($___old_f8a3c308c5f89613)
              ({}.constructor.defineProperty(window, 'localStorage', $___old_f8a3c308c5f89613));
          }
        }),
        (T.loadStoredSettings = function () {
          var e = T.readStoredSetting('debug'),
            t = T.readStoredSetting('hide_activity');
          e && (T.settings.notifications = 'true' === e),
            t && (T.settings.hideActivity = 'true' === t);
        }),
        (T.isRuleActive = function (e, t) {
          function n (e, t) {
            return (
              (t = i(t, { hour: e[m](), minute: e[p]() })),
              Math.floor(Math.abs((e.getTime() - t.getTime()) / 86400000))
            );
          }
          function a (e, t) {
            function n (e) {
              return 12 * e[d]() + e[g]();
            }
            return Math.abs(n(e) - n(t));
          }
          function i (e, t) {
            var n = new Date(e.getTime());
            for (var a in t)
              if (t.hasOwnProperty(a)) {
                var i = t[a];
                switch (a) {
                  case 'hour':
                    n[h](i);
                    break;
                  case 'minute':
                    n[f](i);
                    break;
                  case 'date':
                    n[v](i);
                }
              }
            return n;
          }
          function r (e, t) {
            return 60 * e[m]() + e[p]() > 60 * t[m]() + t[p]();
          }
          function o (e, t) {
            return 60 * e[m]() + e[p]() < 60 * t[m]() + t[p]();
          }
          var s = e.schedule;
          if (!s) return !0;
          var c = s.utc,
            l = c ? 'getUTCDate' : 'getDate',
            u = c ? 'getUTCDay' : 'getDay',
            d = c ? 'getUTCFullYear' : 'getFullYear',
            g = c ? 'getUTCMonth' : 'getMonth',
            m = c ? 'getUTCHours' : 'getHours',
            p = c ? 'getUTCMinutes' : 'getMinutes',
            h = c ? 'setUTCHours' : 'setHours',
            f = c ? 'setUTCMinutes' : 'setMinutes',
            v = c ? 'setUTCDate' : 'setDate';
          if (((t = t || new Date()), s.repeat)) {
            if (r(s.start, t)) return !1;
            if (o(s.end, t)) return !1;
            if (t < s.start) return !1;
            if (s.endRepeat && t >= s.endRepeat) return !1;
            if ('daily' === s.repeat) {
              if (s.repeatEvery) if (n(s.start, t) % s.repeatEvery != 0) return !1;
            } else if ('weekly' === s.repeat) {
              if (s.days) {
                if (!T.contains(s.days, t[u]())) return !1;
              } else if (s.start[u]() !== t[u]()) return !1;
              if (s.repeatEvery) if (n(s.start, t) % (7 * s.repeatEvery) != 0) return !1;
            } else if ('monthly' === s.repeat) {
              if (s.repeatEvery) if (a(s.start, t) % s.repeatEvery != 0) return !1;
              if (s.nthWeek && s.mthDay) {
                if (s.mthDay !== t[u]()) return !1;
                var b = Math.floor((t[l]() - t[u]() + 1) / 7);
                if (s.nthWeek !== b) return !1;
              } else if (s.start[l]() !== t[l]()) return !1;
            } else if ('yearly' === s.repeat) {
              if (s.start[g]() !== t[g]()) return !1;
              if (s.start[l]() !== t[l]()) return !1;
              if (s.repeatEvery)
                if (Math.abs(s.start[d]() - t[d]()) % s.repeatEvery != 0) return !1;
            }
          } else {
            if (s.start > t) return !1;
            if (s.end < t) return !1;
          }
          return !0;
        }),
        (T.isOutboundLink = function (e) {
          if (!e.getAttribute('href')) return !1;
          var t = e.hostname,
            n = (e.href, e.protocol);
          return (
            ('http:' === n || 'https:' === n) &&
            !T.any(T.settings.domainList, function (e) {
              return T.isSubdomainOf(t, e);
            }) &&
            t !== location.hostname
          );
        }),
        (T.isLinkerLink = function (e) {
          return (
            !(!e.getAttribute || !e.getAttribute('href')) &&
            T.hasMultipleDomains() &&
            e.hostname != location.hostname &&
            !e.href.match(/^javascript/i) &&
            !T.isOutboundLink(e)
          );
        }),
        (T.isSubdomainOf = function (e, t) {
          if (e === t) return !0;
          var n = e.length - t.length;
          return n > 0 && T.equalsIgnoreCase(e.substring(n), t);
        }),
        (T.getVisitorId = function () {
          var e = T.getToolsByType('visitor_id');
          return 0 === e.length ? null : e[0].getInstance();
        }),
        (T.URI = function () {
          var e = t.location.pathname + t.location.search;
          return T.settings.forceLowerCase && (e = e.toLowerCase()), e;
        }),
        (T.URL = function () {
          var e = t.location.href;
          return T.settings.forceLowerCase && (e = e.toLowerCase()), e;
        }),
        (T.filterRules = function () {
          function e (e) {
            return !!T.isRuleActive(e);
          }
          (T.rules = T.filter(T.rules, e)), (T.pageLoadRules = T.filter(T.pageLoadRules, e));
        }),
        (T.ruleInScope = function (e, n) {
          function a (e, t) {
            function n (e) {
              return t.match(e);
            }
            var a = e.include,
              r = e.exclude;
            if (a && i(a, t)) return !0;
            if (r) {
              if (T.isString(r) && r === t) return !0;
              if (T.isArray(r) && T.any(r, n)) return !0;
              if (T.isRegex(r) && n(r)) return !0;
            }
            return !1;
          }
          function i (e, t) {
            function n (e) {
              return t.match(e);
            }
            return (
              !(!T.isString(e) || e === t) ||
              !(!T.isArray(e) || T.any(e, n)) ||
              !(!T.isRegex(e) || n(e))
            );
          }
          n = n || t.location;
          var r = e.scope;
          if (!r) return !0;
          var o = r.URI,
            s = r.subdomains,
            c = r.domains,
            l = r.protocols,
            u = r.hashes;
          return (
            (!o || !a(o, n.pathname + n.search)) &&
            (!s || !a(s, n.hostname)) &&
            (!c || !i(c, n.hostname)) &&
            (!l || !i(l, n.protocol)) &&
            (!u || !a(u, n.hash))
          );
        }),
        (T.backgroundTasks = function () {
          new Date();
          T.setFormListeners(),
            T.setVideoListeners(),
            T.loadStoredSettings(),
            T.registerNewElementsForDynamicRules(),
            T.eventEmitterBackgroundTasks();
          new Date();
        }),
        (T.registerNewElementsForDynamicRules = function () {
          function e (t, n) {
            var a = e.cache[t];
            if (a) return n(a);
            T.cssQuery(t, function (a) {
              (e.cache[t] = a), n(a);
            });
          }
          (e.cache = {}),
            T.each(T.dynamicRules, function (t) {
              e(t.selector, function (e) {
                T.each(e, function (e) {
                  var n = 'custom' === t.event ? t.customEvent : t.event;
                  T.$data(e, 'dynamicRules.seen.' + n) ||
                    (T.$data(e, 'dynamicRules.seen.' + n, !0),
                    T.propertiesMatch(t.property, e) && T.registerEvents(e, [n]));
                });
              });
            });
        }),
        (T.ensureCSSSelector = function () {
          t.querySelectorAll
            ? (T.hasSelector = !0)
            : ((T.loadingSizzle = !0),
              (T.sizzleQueue = []),
              T.loadScript(T.basePath() + 'selector.js', function () {
                if (T.Sizzle) {
                  var e = T.onEvent.pendingEvents;
                  T.each(
                    e,
                    function (e) {
                      T.handleEvent(e);
                    },
                    this
                  ),
                    (T.onEvent = T.handleEvent),
                    (T.hasSelector = !0),
                    delete T.loadingSizzle,
                    T.each(T.sizzleQueue, function (e) {
                      T.cssQuery(e[0], e[1]);
                    }),
                    delete T.sizzleQueue;
                } else T.logError(new Error('Failed to load selector.js'));
              }));
        }),
        (T.errors = []),
        (T.logError = function (e) {
          T.errors.push(e), T.notify(e.name + ' - ' + e.message, 5);
        }),
        (T.pageBottom = function () {
          T.initialized && ((T.pageBottomFired = !0), T.firePageLoadEvent('pagebottom'));
        }),
        (T.stagingLibraryOverride = function () {
          if ('true' === T.readStoredSetting('stagingLibrary')) {
            for (
              var e,
                n,
                a,
                i = t.getElementsByTagName('script'),
                r = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/,
                o = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/,
                s = 0,
                c = i.length;
              s < c &&
              (!(a = i[s].getAttribute('src')) ||
                (e || (e = a.match(r)), n || (n = a.match(o)), !n));
              s++
            );
            if (e && !n) {
              var l = e[1] + 'satelliteLib-' + e[2] + '-staging.js';
              if (t.write) t.write('<script src="' + l + '"></script>');
              else {
                var u = t.createElement('script');
                (u.src = l), t.head.appendChild(u);
              }
              return !0;
            }
          }
          return !1;
        }),
        (T.checkAsyncInclude = function () {
          e.satellite_asyncLoad &&
            T.notify(
              'You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.',
              5
            );
        }),
        (T.hasMultipleDomains = function () {
          return !!T.settings.domainList && T.settings.domainList.length > 1;
        }),
        (T.handleOverrides = function () {
          if (V) for (var e in V) V.hasOwnProperty(e) && (T.data[e] = V[e]);
        }),
        (T.privacyManagerParams = function () {
          var e = {};
          T.extend(e, T.settings.privacyManagement);
          var t = [];
          for (var n in T.tools)
            if (T.tools.hasOwnProperty(n)) {
              var a = T.tools[n],
                i = a.settings;
              if (!i) continue;
              'sc' === i.engine && t.push(a);
            }
          var r = T.filter(
            T.map(t, function (e) {
              return e.getTrackingServer();
            }),
            function (e) {
              return null != e;
            }
          );
          e.adobeAnalyticsTrackingServers = r;
          for (
            var o = ['bannerText', 'headline', 'introductoryText', 'customCSS'], s = 0;
            s < o.length;
            s++
          ) {
            var c = o[s],
              l = e[c];
            if (l)
              if ('text' === l.type) e[c] = l.value;
              else {
                if ('data' !== l.type) throw new Error('Invalid type: ' + l.type);
                e[c] = T.getVar(l.value);
              }
          }
          return e;
        }),
        (T.prepareLoadPrivacyManager = function () {
          function t (e) {
            function t () {
              ++r === i.length && (n(), clearTimeout(o), e());
            }
            function n () {
              T.each(i, function (e) {
                T.unbindEvent(e.id + '.load', t);
              });
            }
            function a () {
              n(), e();
            }
            var i = T.filter(T.values(T.tools), function (e) {
              return e.settings && 'sc' === e.settings.engine;
            });
            if (0 === i.length) return e();
            var r = 0;
            T.each(i, function (e) {
              T.bindEvent(e.id + '.load', t);
            });
            var o = setTimeout(a, 5000);
          }
          T.addEventHandler(e, 'load', function () {
            t(T.loadPrivacyManager);
          });
        }),
        (T.loadPrivacyManager = function () {
          var e = T.basePath() + 'privacy_manager.js';
          T.loadScript(e, function () {
            var e = T.privacyManager;
            e.configure(T.privacyManagerParams()), e.openIfRequired();
          });
        }),
        (T.init = function (t) {
          if (!T.stagingLibraryOverride()) {
            T.configurationSettings = t;
            var a = t.tools;
            for (var i in (delete t.tools, t)) t.hasOwnProperty(i) && (T[i] = t[i]);
            T.data.customVars === n && (T.data.customVars = {}),
              (T.data.queryParams = T.QueryParams.normal),
              T.handleOverrides(),
              T.detectBrowserInfo(),
              T.trackVisitorInfo && T.trackVisitorInfo(),
              T.loadStoredSettings(),
              T.Logger.setOutputState(T.settings.notifications),
              T.checkAsyncInclude(),
              T.ensureCSSSelector(),
              T.filterRules(),
              (T.dynamicRules = T.filter(T.rules, function (e) {
                return e.eventHandlerOnElement;
              })),
              (T.tools = T.initTools(a)),
              T.initEventEmitters(),
              T.firePageLoadEvent('aftertoolinit'),
              T.settings.privacyManagement && T.prepareLoadPrivacyManager(),
              T.hasSelector && T.domReady(T.eventEmitterBackgroundTasks),
              T.setListeners(),
              T.domReady(function () {
                T.poll(function () {
                  T.backgroundTasks();
                }, T.settings.recheckEvery || 3000);
              }),
              T.domReady(function () {
                (T.domReadyFired = !0),
                  T.pageBottomFired || T.pageBottom(),
                  T.firePageLoadEvent('domready');
              }),
              T.addEventHandler(e, 'load', function () {
                T.firePageLoadEvent('windowload');
              }),
              T.firePageLoadEvent('pagetop'),
              (T.initialized = !0);
          }
        }),
        (T.pageLoadPhases = ['aftertoolinit', 'pagetop', 'pagebottom', 'domready', 'windowload']),
        (T.loadEventBefore = function (e, t) {
          return T.indexOf(T.pageLoadPhases, e) <= T.indexOf(T.pageLoadPhases, t);
        }),
        (T.flushPendingCalls = function (e) {
          e.pending &&
            (T.each(e.pending, function (t) {
              var n = t[0],
                a = t[1],
                i = t[2],
                r = t[3];
              n in e
                ? e[n].apply(e, [a, i].concat(r))
                : e.emit
                ? e.emit(n, a, i, r)
                : T.notify('Failed to trigger ' + n + ' for tool ' + e.id, 1);
            }),
            delete e.pending);
        }),
        (T.setDebug = function (t) {
          try {
            e.localStorage.setItem('sdsat_debug', t);
          } catch (n) {
            T.notify('Cannot set debug mode: ' + n.message, 2);
          }
        }),
        (T.getUserAgent = function () {
          const $___old_dd9a899d19401de8 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_dd9a899d19401de8)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_47c01efa79e9f191.userAgent
              ));
            return function () {
              return navigator.userAgent;
            }.apply(this, arguments);
          } finally {
            if ($___old_dd9a899d19401de8)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_dd9a899d19401de8
              ));
          }
        }),
        (T.detectBrowserInfo = function () {
          function e (e) {
            return function (t) {
              for (var n in e) {
                if (e.hasOwnProperty(n)) if (e[n].test(t)) return n;
              }
              return 'Unknown';
            };
          }
          var t = e({
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
            }),
            n = e({
              Blackberry: /BlackBerry|BB10/,
              'Symbian OS': /Symbian|SymbOS/,
              Maemo: /Maemo/,
              Android: /Android/,
              Linux: / Linux /,
              Unix: /FreeBSD|OpenBSD|CrOS/,
              Windows: /[\( ]Windows /,
              iOS: /iPhone|iPad|iPod/,
              MacOS: /Macintosh;/,
            }),
            a = e({
              Nokia: /Symbian|SymbOS|Maemo/,
              'Windows Phone': /Windows Phone/,
              Blackberry: /BlackBerry|BB10/,
              Android: /Android/,
              iPad: /iPad/,
              iPod: /iPod/,
              iPhone: /iPhone/,
              Desktop: /.*/,
            }),
            i = T.getUserAgent();
          T.browserInfo = { browser: t(i), os: n(i), deviceType: a(i) };
        }),
        (T.isHttps = function () {
          return 'https:' == t.location.protocol;
        }),
        (T.BaseTool = function (e) {
          (this.settings = e || {}),
            (this.forceLowerCase = T.settings.forceLowerCase),
            'forceLowerCase' in this.settings &&
              (this.forceLowerCase = this.settings.forceLowerCase);
        }),
        (T.BaseTool.prototype = {
          triggerCommand: function (e, t, n) {
            var a = this.settings || {};
            if (
              this.initialize &&
              this.isQueueAvailable() &&
              this.isQueueable(e) &&
              n &&
              T.loadEventBefore(n.type, a.loadOn)
            )
              this.queueCommand(e, t, n);
            else {
              var i = e.command,
                r = this['$' + i],
                o = !!r && r.escapeHtml,
                s = T.preprocessArguments(e.arguments, t, n, this.forceLowerCase, o);
              r
                ? r.apply(this, [t, n].concat(s))
                : this.$missing$
                ? this.$missing$(i, t, n, s)
                : T.notify('Failed to trigger ' + i + ' for tool ' + this.id, 1);
            }
          },
          endPLPhase: function () {},
          isQueueable: function (e) {
            return 'cancelToolInit' !== e.command;
          },
          isQueueAvailable: function () {
            return !this.initialized && !this.initializing;
          },
          flushQueue: function () {
            this.pending &&
              (T.each(
                this.pending,
                function (e) {
                  this.triggerCommand.apply(this, e);
                },
                this
              ),
              (this.pending = []));
          },
          queueCommand: function (e, t, n) {
            this.pending || (this.pending = []), this.pending.push([e, t, n]);
          },
          $cancelToolInit: function () {
            this._cancelToolInit = !0;
          },
        }),
        (e._satellite = T),
        (T.ecommerce = {
          addItem: function () {
            var e = [].slice.call(arguments);
            T.onEvent({ type: 'ecommerce.additem', target: e });
          },
          addTrans: function () {
            var e = [].slice.call(arguments);
            (T.data.saleData.sale = { orderId: e[0], revenue: e[2] }),
              T.onEvent({ type: 'ecommerce.addtrans', target: e });
          },
          trackTrans: function () {
            T.onEvent({ type: 'ecommerce.tracktrans', target: [] });
          },
        }),
        (T.visibility = {
          isHidden: function () {
            var e = this.getHiddenProperty();
            return !!e && t[e];
          },
          isVisible: function () {
            return !this.isHidden();
          },
          getHiddenProperty: function () {
            var e = ['webkit', 'moz', 'ms', 'o'];
            if ('hidden' in t) return 'hidden';
            for (var n = 0; n < e.length; n++) if (e[n] + 'Hidden' in t) return e[n] + 'Hidden';
            return null;
          },
          getVisibilityEvent: function () {
            var e = this.getHiddenProperty();
            return e ? e.replace(/[H|h]idden/, '') + 'visibilitychange' : null;
          },
        }),
        (i.prototype = {
          obue: !1,
          initialize: function () {
            this.attachCloseListeners();
          },
          obuePrevUnload: function () {},
          obuePrevBeforeUnload: function () {},
          newObueListener: function () {
            this.obue || ((this.obue = !0), this.triggerBeacons());
          },
          attachCloseListeners: function () {
            (this.prevUnload = e.onunload),
              (this.prevBeforeUnload = e.onbeforeunload),
              (e.onunload = T.bind(function (t) {
                this.prevUnload &&
                  setTimeout(
                    T.bind(function () {
                      this.prevUnload.call(e, t);
                    }, this),
                    1
                  ),
                  this.newObueListener();
              }, this)),
              (e.onbeforeunload = T.bind(function (t) {
                this.prevBeforeUnload &&
                  setTimeout(
                    T.bind(function () {
                      this.prevBeforeUnload.call(e, t);
                    }, this),
                    1
                  ),
                  this.newObueListener();
              }, this));
          },
          triggerBeacons: function () {
            T.fireEvent('leave', t);
          },
        }),
        T.availableEventEmitters.push(i),
        (r.prototype = {
          initialize: function () {
            var e = this.twttr;
            e && 'function' == typeof e.ready && e.ready(T.bind(this.bind, this));
          },
          bind: function () {
            this.twttr.events.bind('tweet', function (e) {
              e &&
                (T.notify('tracking a tweet button', 1),
                T.onEvent({ type: 'twitter.tweet', target: t }));
            });
          },
        }),
        T.availableEventEmitters.push(r),
        (o.prototype = {
          initialize: function () {
            this.setupHistoryAPI(), this.setupHashChange();
          },
          fireIfURIChanged: function () {
            var e = T.URL();
            this.lastURL !== e && (this.fireEvent(), (this.lastURL = e));
          },
          fireEvent: function () {
            T.updateQueryParams(), T.onEvent({ type: 'locationchange', target: t });
          },
          setupSPASupport: function () {
            this.setupHistoryAPI(), this.setupHashChange();
          },
          setupHistoryAPI: function () {
            var t = e.history;
            t &&
              (t.pushState &&
                ((this.originalPushState = t.pushState), (t.pushState = this._pushState)),
              t.replaceState &&
                ((this.originalReplaceState = t.replaceState),
                (t.replaceState = this._replaceState))),
              T.addEventHandler(e, 'popstate', this._onPopState);
          },
          pushState: function () {
            var e = this.originalPushState.apply(history, arguments);
            return this.onPushState(), e;
          },
          replaceState: function () {
            var e = this.originalReplaceState.apply(history, arguments);
            return this.onReplaceState(), e;
          },
          setupHashChange: function () {
            T.addEventHandler(e, 'hashchange', this._onHashChange);
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
            this.cleanUpHistoryAPI(), this.cleanUpHashChange();
          },
          cleanUpHistoryAPI: function () {
            history.pushState === this._pushState && (history.pushState = this.originalPushState),
              history.replaceState === this._replaceState &&
                (history.replaceState = this.originalReplaceState),
              T.removeEventHandler(e, 'popstate', this._onPopState);
          },
          cleanUpHashChange: function () {
            T.removeEventHandler(e, 'hashchange', this._onHashChange);
          },
        }),
        T.availableEventEmitters.push(o),
        (c.prototype.getStringifiedValue = (e.JSON && e.JSON.stringify) || T.stringify),
        (c.prototype.initPolling = function () {
          0 !== this.dataElementsNames.length &&
            ((this.dataElementsStore = this.getDataElementsValues()),
            T.poll(T.bind(this.checkDataElementValues, this), 1000));
        }),
        (c.prototype.getDataElementsValues = function () {
          var e = {};
          return (
            T.each(
              this.dataElementsNames,
              function (t) {
                var n = T.getVar(t);
                e[t] = this.getStringifiedValue(n);
              },
              this
            ),
            e
          );
        }),
        (c.prototype.checkDataElementValues = function () {
          T.each(
            this.dataElementsNames,
            T.bind(function (e) {
              var n = this.getStringifiedValue(T.getVar(e));
              n !== this.dataElementsStore[e] &&
                ((this.dataElementsStore[e] = n),
                T.onEvent({ type: 'dataelementchange(' + e + ')', target: t }));
            }, this)
          );
        }),
        T.availableEventEmitters.push(c),
        (l.orientationChange = function (t) {
          var n = 0 === e.orientation ? 'portrait' : 'landscape';
          (t.orientation = n), T.onEvent(t);
        }),
        T.availableEventEmitters.push(l),
        (u.prototype = {
          backgroundTasks: function () {
            var e = this.eventHandler;
            T.each(this.rules, function (t) {
              T.cssQuery(t.selector || 'video', function (t) {
                T.each(t, function (t) {
                  T.$data(t, 'videoplayed.tracked') ||
                    (T.addEventHandler(t, 'timeupdate', T.throttle(e, 100)),
                    T.$data(t, 'videoplayed.tracked', !0));
                });
              });
            });
          },
          evalRule: function (e, t) {
            var n = t.event,
              a = e.seekable,
              i = a.start(0),
              r = a.end(0),
              o = e.currentTime,
              s = t.event.match(/^videoplayed\(([0-9]+)([s%])\)$/);
            if (s) {
              var c = s[2],
                l = Number(s[1]),
                u =
                  '%' === c
                    ? function () {
                        return l <= (100 * (o - i)) / (r - i);
                      }
                    : function () {
                        return l <= o - i;
                      };
              !T.$data(e, n) && u() && (T.$data(e, n, !0), T.onEvent({ type: n, target: e }));
            }
          },
          onUpdateTime: function (e) {
            var t = this.rules,
              n = e.target;
            if (n.seekable && 0 !== n.seekable.length)
              for (var a = 0, i = t.length; a < i; a++) this.evalRule(n, t[a]);
          },
        }),
        T.availableEventEmitters.push(u),
        (d.prototype = {
          defineEvents: function () {
            (this.oldBlurClosure = function () {
              T.fireEvent('tabblur', t);
            }),
              (this.oldFocusClosure = T.bind(function () {
                this.visibilityApiHasPriority
                  ? T.fireEvent('tabfocus', t)
                  : (null != T.visibility.getHiddenProperty() && T.visibility.isHidden()) ||
                    T.fireEvent('tabfocus', t);
              }, this));
          },
          attachDetachModernEventListeners: function (e) {
            T[0 == e ? 'removeEventHandler' : 'addEventHandler'](
              t,
              T.visibility.getVisibilityEvent(),
              this.handleVisibilityChange
            );
          },
          attachDetachOlderEventListeners: function (t, n, a) {
            var i = 0 == t ? 'removeEventHandler' : 'addEventHandler';
            T[i](n, a, this.oldBlurClosure), T[i](e, 'focus', this.oldFocusClosure);
          },
          handleVisibilityChange: function () {
            T.visibility.isHidden() ? T.fireEvent('tabblur', t) : T.fireEvent('tabfocus', t);
          },
          setVisibilityApiPriority: function (t) {
            (this.visibilityApiHasPriority = t),
              this.attachDetachOlderEventListeners(!1, e, 'blur'),
              this.attachDetachModernEventListeners(!1),
              t
                ? null != T.visibility.getHiddenProperty()
                  ? this.attachDetachModernEventListeners(!0)
                  : this.attachDetachOlderEventListeners(!0, e, 'blur')
                : (this.attachDetachOlderEventListeners(!0, e, 'blur'),
                  null != T.visibility.getHiddenProperty() &&
                    this.attachDetachModernEventListeners(!0));
          },
          oldBlurClosure: null,
          oldFocusClosure: null,
          visibilityApiHasPriority: !0,
        }),
        T.availableEventEmitters.push(d),
        (g.offset = function (n) {
          var a = null,
            i = null;
          try {
            var r = n.getBoundingClientRect(),
              o = t,
              s = o.documentElement,
              c = o.body,
              l = e,
              u = s.clientTop || c.clientTop || 0,
              d = s.clientLeft || c.clientLeft || 0,
              g = l.pageYOffset || s.scrollTop || c.scrollTop,
              m = l.pageXOffset || s.scrollLeft || c.scrollLeft;
            (a = r.top + g - u), (i = r.left + m - d);
          } catch (p) {}
          return { top: a, left: i };
        }),
        (g.getViewportHeight = function () {
          var n = e.innerHeight,
            a = t.compatMode;
          return (
            a && (n = 'CSS1Compat' == a ? t.documentElement.clientHeight : t.body.clientHeight), n
          );
        }),
        (g.getScrollTop = function () {
          return t.documentElement.scrollTop ? t.documentElement.scrollTop : t.body.scrollTop;
        }),
        (g.isElementInDocument = function (e) {
          return t.body.contains(e);
        }),
        (g.isElementInView = function (e) {
          if (!g.isElementInDocument(e)) return !1;
          var t = g.getViewportHeight(),
            n = g.getScrollTop(),
            a = g.offset(e).top,
            i = e.offsetHeight;
          return null !== a && !(n > a + i || n + t < a);
        }),
        (g.prototype = {
          backgroundTasks: function () {
            var e = this.elements;
            T.each(this.rules, function (t) {
              T.cssQuery(t.selector, function (n) {
                var a = 0;
                T.each(n, function (t) {
                  T.contains(e, t) || (e.push(t), a++);
                }),
                  a && T.notify(t.selector + ' added ' + a + ' elements.', 1);
              });
            }),
              this.track();
          },
          checkInView: function (e, t, n) {
            var a = T.$data(e, 'inview');
            if (g.isElementInView(e)) {
              a || T.$data(e, 'inview', !0);
              var i = this;
              this.processRules(
                e,
                function (n, a, r) {
                  if (t || !n.inviewDelay)
                    T.$data(e, a, !0),
                      T.onEvent({ type: 'inview', target: e, inviewDelay: n.inviewDelay });
                  else if (n.inviewDelay) {
                    var o = T.$data(e, r);
                    o ||
                      ((o = setTimeout(function () {
                        i.checkInView(e, !0, n.inviewDelay);
                      }, n.inviewDelay)),
                      T.$data(e, r, o));
                  }
                },
                n
              );
            } else {
              if (!g.isElementInDocument(e)) {
                var r = T.indexOf(this.elements, e);
                this.elements.splice(r, 1);
              }
              a && T.$data(e, 'inview', !1),
                this.processRules(
                  e,
                  function (t, n, a) {
                    var i = T.$data(e, a);
                    i && clearTimeout(i);
                  },
                  n
                );
            }
          },
          track: function () {
            for (var e = this.elements.length - 1; e >= 0; e--) this.checkInView(this.elements[e]);
          },
          processRules: function (e, t, n) {
            var a = this.rules;
            n &&
              (a = T.filter(this.rules, function (e) {
                return e.inviewDelay == n;
              })),
              T.each(a, function (n, a) {
                var i = n.inviewDelay ? 'viewed_' + n.inviewDelay : 'viewed',
                  r = 'inview_timeout_id_' + a;
                T.$data(e, i) || (T.matchesCss(n.selector, e) && t(n, i, r));
              });
          },
        }),
        T.availableEventEmitters.push(g),
        (m.prototype.backgroundTasks = function () {
          T.each(this.rules, function (e) {
            T.cssQuery(e.selector, function (e) {
              if (e.length > 0) {
                var t = e[0];
                if (T.$data(t, 'elementexists.seen')) return;
                T.$data(t, 'elementexists.seen', !0),
                  T.onEvent({ type: 'elementexists', target: t });
              }
            });
          });
        }),
        T.availableEventEmitters.push(m),
        (p.prototype = {
          initialize: function () {
            if (((this.FB = this.FB || e.FB), this.FB && this.FB.Event && this.FB.Event.subscribe))
              return this.bind(), !0;
          },
          bind: function () {
            this.FB.Event.subscribe('edge.create', function () {
              T.notify('tracking a facebook like', 1),
                T.onEvent({ type: 'facebook.like', target: t });
            }),
              this.FB.Event.subscribe('edge.remove', function () {
                T.notify('tracking a facebook unlike', 1),
                  T.onEvent({ type: 'facebook.unlike', target: t });
              }),
              this.FB.Event.subscribe('message.send', function () {
                T.notify('tracking a facebook share', 1),
                  T.onEvent({ type: 'facebook.send', target: t });
              });
          },
        }),
        T.availableEventEmitters.push(p),
        (h.prototype = {
          backgroundTasks: function () {
            var e = this;
            T.each(
              this.rules,
              function (t) {
                var n = t[1],
                  a = t[0];
                T.cssQuery(n, function (t) {
                  T.each(t, function (t) {
                    e.trackElement(t, a);
                  });
                });
              },
              this
            );
          },
          trackElement: function (e, t) {
            var n = this,
              a = T.$data(e, 'hover.delays');
            a
              ? T.contains(a, t) || a.push(t)
              : (T.addEventHandler(e, 'mouseover', function (t) {
                  n.onMouseOver(t, e);
                }),
                T.addEventHandler(e, 'mouseout', function (t) {
                  n.onMouseOut(t, e);
                }),
                T.$data(e, 'hover.delays', [t]));
          },
          onMouseOver: function (e, t) {
            var n = e.target || e.srcElement,
              a = e.relatedTarget || e.fromElement;
            (t === n || T.containsElement(t, n)) &&
              !T.containsElement(t, a) &&
              this.onMouseEnter(t);
          },
          onMouseEnter: function (e) {
            var t = T.$data(e, 'hover.delays'),
              n = T.map(t, function (t) {
                return setTimeout(function () {
                  T.onEvent({ type: 'hover(' + t + ')', target: e });
                }, t);
              });
            T.$data(e, 'hover.delayTimers', n);
          },
          onMouseOut: function (e, t) {
            var n = e.target || e.srcElement,
              a = e.relatedTarget || e.toElement;
            (t === n || T.containsElement(t, n)) &&
              !T.containsElement(t, a) &&
              this.onMouseLeave(t);
          },
          onMouseLeave: function (e) {
            var t = T.$data(e, 'hover.delayTimers');
            t &&
              T.each(t, function (e) {
                clearTimeout(e);
              });
          },
        }),
        T.availableEventEmitters.push(h),
        T.inherit(f, T.BaseTool),
        T.extend(f.prototype, {
          name: 'Nielsen',
          endPLPhase: function (e) {
            switch (e) {
              case 'pagetop':
                this.initialize();
                break;
              case 'pagebottom':
                this.enableTracking &&
                  (this.queueCommand({ command: 'sendFirstBeacon', arguments: [] }),
                  this.flushQueueWhenReady());
            }
          },
          defineListeners: function () {
            (this.onTabFocus = T.bind(function () {
              this.notify('Tab visible, sending view beacon when ready', 1),
                (this.tabEverVisible = !0),
                this.flushQueueWhenReady();
            }, this)),
              (this.onPageLeave = T.bind(function () {
                this.notify('isHuman? : ' + this.isHuman(), 1),
                  this.isHuman() && this.sendDurationBeacon();
              }, this)),
              (this.onHumanDetectionChange = T.bind(function (e) {
                this == e.target.target && (this.human = e.target.isHuman);
              }, this));
          },
          initialize: function () {
            this.initializeTracking(),
              this.initializeDataProviders(),
              this.initializeNonHumanDetection(),
              (this.tabEverVisible = T.visibility.isVisible()),
              this.tabEverVisible
                ? this.notify('Tab visible, sending view beacon when ready', 1)
                : T.bindEventOnce('tabfocus', this.onTabFocus),
              (this.initialized = !0);
          },
          initializeTracking: function () {
            this.initialized ||
              (this.notify('Initializing tracking', 1),
              this.addRemovePageLeaveEvent(this.enableTracking),
              this.addRemoveHumanDetectionChangeEvent(this.enableTracking),
              (this.initialized = !0));
          },
          initializeDataProviders: function () {
            var e,
              t = this.getAnalyticsTool();
            this.dataProvider.register(new f.DataProvider.VisitorID(T.getVisitorId())),
              t
                ? ((e = new f.DataProvider.Generic('rsid', function () {
                    return t.settings.account;
                  })),
                  this.dataProvider.register(e))
                : this.notify('Missing integration with Analytics: rsid will not be sent.');
          },
          initializeNonHumanDetection: function () {
            T.nonhumandetection
              ? (T.nonhumandetection.init(),
                this.setEnableNonHumanDetection(0 != this.settings.enableNonHumanDetection),
                this.settings.nonHumanDetectionDelay > 0 &&
                  this.setNonHumanDetectionDelay(
                    1000 * parseInt(this.settings.nonHumanDetectionDelay)
                  ))
              : this.notify('NHDM is not available.');
          },
          getAnalyticsTool: function () {
            if (this.settings.integratesWith) return T.tools[this.settings.integratesWith];
          },
          flushQueueWhenReady: function () {
            this.enableTracking &&
              this.tabEverVisible &&
              T.poll(
                T.bind(function () {
                  if (this.isReadyToTrack()) return this.flushQueue(), !0;
                }, this),
                100,
                20
              );
          },
          isReadyToTrack: function () {
            return this.tabEverVisible && this.dataProvider.isReady();
          },
          $setVars: function (e, t, n) {
            for (var a in n) {
              var i = n[a];
              'function' == typeof i && (i = i()), (this.settings[a] = i);
            }
            this.notify('Set variables done', 2), this.prepareContextData();
          },
          $setEnableTracking: function (e, t, n) {
            this.notify('Will' + (n ? '' : ' not') + ' track time on page', 1),
              this.enableTracking != n &&
                (this.addRemovePageLeaveEvent(n),
                this.addRemoveHumanDetectionChangeEvent(n),
                (this.enableTracking = n));
          },
          $sendFirstBeacon: function () {
            this.sendViewBeacon();
          },
          setEnableNonHumanDetection: function (e) {
            e ? T.nonhumandetection.register(this) : T.nonhumandetection.unregister(this);
          },
          setNonHumanDetectionDelay: function (e) {
            T.nonhumandetection.register(this, e);
          },
          addRemovePageLeaveEvent: function (e) {
            this.notify((e ? 'Attach onto' : 'Detach from') + ' page leave event', 1),
              T[0 == e ? 'unbindEvent' : 'bindEvent']('leave', this.onPageLeave);
          },
          addRemoveHumanDetectionChangeEvent: function (e) {
            this.notify((e ? 'Attach onto' : 'Detach from') + ' human detection change event', 1),
              T[0 == e ? 'unbindEvent' : 'bindEvent'](
                'humandetection.change',
                this.onHumanDetectionChange
              );
          },
          sendViewBeacon: function () {
            this.notify('Tracked page view.', 1), this.sendBeaconWith();
          },
          sendDurationBeacon: function () {
            if (
              T.timetracking &&
              'function' == typeof T.timetracking.timeOnPage &&
              null != T.timetracking.timeOnPage()
            ) {
              this.notify('Tracked close', 1),
                this.sendBeaconWith({
                  timeOnPage: Math.round(T.timetracking.timeOnPage() / 1000),
                  duration: 'D',
                  timer: 'timer',
                });
              var e;
              for (e = 0; e < this.magicConst; e++) '0';
            } else this.notify('Could not track close due missing time on page', 5);
          },
          sendBeaconWith: function (e) {
            this.enableTracking && this[this.beaconMethod].call(this, this.prepareUrl(e));
          },
          plainBeacon: function (e) {
            var t = new Image();
            (t.src = e), (t.width = 1), (t.height = 1), (t.alt = '');
          },
          navigatorSendBeacon: function (e) {
            navigator.sendBeacon(e);
          },
          prepareUrl: function (e) {
            var t = this.settings;
            return (
              T.extend(t, this.dataProvider.provide()),
              T.extend(t, e),
              this.preparePrefix(this.settings.collectionServer) +
                this.adapt.convertToURI(this.adapt.toNielsen(this.substituteVariables(t)))
            );
          },
          preparePrefix: function (e) {
            return '//' + encodeURIComponent(e) + '.imrworldwide.com/cgi-bin/gn?';
          },
          substituteVariables: function (e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = T.replace(e[n]));
            return t;
          },
          prepareContextData: function () {
            if (this.getAnalyticsTool()) {
              var e = this.settings;
              (e.sdkVersion = _satellite.publishDate),
                this.getAnalyticsTool().$setVars(null, null, {
                  contextData: this.adapt.toAnalytics(this.substituteVariables(e)),
                });
            } else this.notify('Adobe Analytics missing.');
          },
          isHuman: function () {
            return this.human;
          },
          onTabFocus: function () {},
          onPageLeave: function () {},
          onHumanDetectionChange: function () {},
          notify: function (e, t) {
            T.notify(this.logPrefix + e, t);
          },
          beaconMethod: 'plainBeacon',
          adapt: null,
          enableTracking: !1,
          logPrefix: 'Nielsen: ',
          tabEverVisible: !1,
          human: !0,
          magicConst: 2000000,
        }),
        (f.DataProvider = {}),
        (f.DataProvider.Generic = function (e, t) {
          (this.key = e), (this.valueFn = t);
        }),
        T.extend(f.DataProvider.Generic.prototype, {
          isReady: function () {
            return !0;
          },
          getValue: function () {
            return this.valueFn();
          },
          provide: function () {
            this.isReady() ||
              f.prototype.notify('Not yet ready to provide value for: ' + this.key, 5);
            var e = {};
            return (e[this.key] = this.getValue()), e;
          },
        }),
        (f.DataProvider.VisitorID = function (e, t, n) {
          (this.key = t || 'uuid'),
            (this.visitorInstance = e),
            this.visitorInstance &&
              (this.visitorId = e.getMarketingCloudVisitorID([this, this._visitorIdCallback])),
            (this.fallbackProvider = n || new f.UUID());
        }),
        T.inherit(f.DataProvider.VisitorID, f.DataProvider.Generic),
        T.extend(f.DataProvider.VisitorID.prototype, {
          isReady: function () {
            return null === this.visitorInstance || !!this.visitorId;
          },
          getValue: function () {
            return this.visitorId || this.fallbackProvider.get();
          },
          _visitorIdCallback: function (e) {
            this.visitorId = e;
          },
        }),
        (f.DataProvider.Aggregate = function () {
          this.providers = [];
          for (var e = 0; e < arguments.length; e++) this.register(arguments[e]);
        }),
        T.extend(f.DataProvider.Aggregate.prototype, {
          register: function (e) {
            this.providers.push(e);
          },
          isReady: function () {
            return T.every(this.providers, function (e) {
              return e.isReady();
            });
          },
          provide: function () {
            var e = {};
            return (
              T.each(this.providers, function (t) {
                T.extend(e, t.provide());
              }),
              e
            );
          },
        }),
        (f.UUID = function () {}),
        T.extend(f.UUID.prototype, {
          generate: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
              var t = (16 * Math.random()) | 0;
              return ('x' == e ? t : (3 & t) | 8).toString(16);
            });
          },
          get: function () {
            var e = T.readCookie(this.key('uuid'));
            return e || ((e = this.generate()), T.setCookie(this.key('uuid'), e), e);
          },
          key: function (e) {
            return '_dtm_nielsen_' + e;
          },
        }),
        (f.DataAdapters = function () {}),
        T.extend(f.DataAdapters.prototype, {
          toNielsen: function (e) {
            var t = new Date().getTime(),
              a = {
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
              i = {
                ci: e.clientId,
                c6: e.vcid,
                c13: e.appId,
                c15: e.appName,
                prv: 1,
                forward: 0,
                ad: 0,
                cr: e.duration || 'V',
                rt: 'text',
                st: 'dcr',
                prd: 'dcr',
                r: t,
                at: e.timer || 'view',
                c16: e.sdkVersion,
                c27: e.timeOnPage || 0,
                c40: e.uuid,
                c35: e.rsid,
                ti: t,
                sup: 0,
                c32: e.segmentA,
                c33: e.segmentB,
                c34: e.segmentC,
                asn: e.assetName,
                c29: e.playerID,
                c30: e.buildVersion,
              };
            for (key in i)
              if (i[key] !== n && null != i[key] && i[key] !== n && null != i && '' != i) {
                var r = encodeURIComponent(i[key]);
                a.hasOwnProperty(key) && r && (r = a[key] + r), (i[key] = r);
              }
            return this.filterObject(i);
          },
          toAnalytics: function (e) {
            return this.filterObject({
              'a.nielsen.clientid': e.clientId,
              'a.nielsen.vcid': e.vcid,
              'a.nielsen.appid': e.appId,
              'a.nielsen.appname': e.appName,
              'a.nielsen.accmethod': '0',
              'a.nielsen.ctype': 'text',
              'a.nielsen.sega': e.segmentA,
              'a.nielsen.segb': e.segmentB,
              'a.nielsen.segc': e.segmentC,
              'a.nielsen.asset': e.assetName,
            });
          },
          convertToURI: function (e) {
            if (!1 === T.isObject(e)) return '';
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n + '=' + e[n]);
            return t.join('&');
          },
          filterObject: function (e) {
            for (var t in e) !e.hasOwnProperty(t) || (null != e[t] && e[t] !== n) || delete e[t];
            return e;
          },
        }),
        (T.availableTools.nielsen = f),
        T.inherit(v, T.BaseTool),
        T.extend(v.prototype, {
          name: 'tnt',
          endPLPhase: function (e) {
            'aftertoolinit' === e && this.initialize();
          },
          initialize: function () {
            T.notify('Test & Target: Initializing', 1),
              this.initializeTargetPageParams(),
              this.load();
          },
          initializeTargetPageParams: function () {
            e.targetPageParams &&
              this.updateTargetPageParams(this.parseTargetPageParamsResult(e.targetPageParams())),
              this.updateTargetPageParams(this.settings.pageParams),
              this.setTargetPageParamsFunction();
          },
          load: function () {
            var e = this.getMboxURL(this.settings.mboxURL);
            !1 !== this.settings.initTool
              ? this.settings.loadSync
                ? (T.loadScriptSync(e), this.onScriptLoaded())
                : (T.loadScript(e, T.bind(this.onScriptLoaded, this)), (this.initializing = !0))
              : (this.initialized = !0);
          },
          getMboxURL: function (t) {
            var n = t;
            return (
              T.isObject(t) && (n = 'https:' === e.location.protocol ? t.https : t.http),
              n.match(/^https?:/) ? n : T.basePath() + n
            );
          },
          onScriptLoaded: function () {
            T.notify('Test & Target: loaded.', 1),
              this.flushQueue(),
              (this.initialized = !0),
              (this.initializing = !1);
          },
          $addMbox: function (e, t, n) {
            var a = n.mboxGoesAround,
              i = a + '{visibility: hidden;}',
              r = this.appendStyle(i);
            a in this.styleElements || (this.styleElements[a] = r),
              this.initialized
                ? this.$addMBoxStep2(null, null, n)
                : this.initializing &&
                  this.queueCommand({ command: 'addMBoxStep2', arguments: [n] }, e, t);
          },
          $addMBoxStep2: function (n, a, i) {
            var r = this.generateID(),
              o = this;
            T.addEventHandler(
              e,
              'load',
              T.bind(function () {
                T.cssQuery(i.mboxGoesAround, function (n) {
                  var a = n[0];
                  if (a) {
                    var s = t.createElement('div');
                    (s.id = r),
                      a.parentNode.replaceChild(s, a),
                      s.appendChild(a),
                      e.mboxDefine(r, i.mboxName);
                    var c = [i.mboxName];
                    i.arguments && (c = c.concat(i.arguments)),
                      e.mboxUpdate.apply(null, c),
                      o.reappearWhenCallComesBack(a, r, i.timeout, i);
                  }
                });
              }, this)
            ),
              (this.lastMboxID = r);
          },
          $addTargetPageParams: function (e, t, n) {
            this.updateTargetPageParams(n);
          },
          generateID: function () {
            return '_sdsat_mbox_' + String(Math.random()).substring(2) + '_';
          },
          appendStyle: function (e) {
            var n = t.getElementsByTagName('head')[0],
              a = t.createElement('style');
            return (
              (a.type = 'text/css'),
              a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(t.createTextNode(e)),
              n.appendChild(a),
              a
            );
          },
          reappearWhenCallComesBack: function (e, t, n, a) {
            function i () {
              var e = r.styleElements[a.mboxGoesAround];
              e && (e.parentNode.removeChild(e), delete r.styleElements[a.mboxGoesAround]);
            }
            var r = this;
            T.cssQuery('script[src*="omtrdc.net"]', function (e) {
              var t = e[0];
              if (t) {
                T.scriptOnLoad(t.src, t, function () {
                  T.notify('Test & Target: request complete', 1), i(), clearTimeout(a);
                });
                var a = setTimeout(function () {
                  T.notify('Test & Target: bailing after ' + n + 'ms', 1), i();
                }, n);
              } else T.notify('Test & Target: failed to find T&T ajax call, bailing', 1), i();
            });
          },
          updateTargetPageParams: function (e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[T.replace(n)] = T.replace(e[n]));
            T.extend(this.targetPageParamsStore, t);
          },
          getTargetPageParams: function () {
            return this.targetPageParamsStore;
          },
          setTargetPageParamsFunction: function () {
            e.targetPageParams = T.bind(this.getTargetPageParams, this);
          },
          parseTargetPageParamsResult: function (e) {
            var t = e;
            return (
              T.isArray(e) && (e = e.join('&')), T.isString(e) && (t = T.parseQueryParams(e)), t
            );
          },
        }),
        (T.availableTools.tnt = v),
        T.inherit(b, T.BaseTool),
        T.extend(b.prototype, {
          name: 'Default',
          $loadIframe: function (t, n, a) {
            var i = a.pages,
              r = a.loadOn,
              o = T.bind(function () {
                T.each(
                  i,
                  function (e) {
                    this.loadIframe(t, n, e);
                  },
                  this
                );
              }, this);
            r || o(),
              'domready' === r && T.domReady(o),
              'load' === r && T.addEventHandler(e, 'load', o);
          },
          loadIframe: function (e, n, a) {
            var i = t.createElement('iframe');
            i.style.display = 'none';
            var r = T.data.host,
              o = a.data,
              s = this.scriptURL(a.src),
              c = T.searchVariables(o, e, n);
            r && (s = T.basePath() + s), (s += c), (i.src = s);
            var l = t.getElementsByTagName('body')[0];
            l
              ? l.appendChild(i)
              : T.domReady(function () {
                  t.getElementsByTagName('body')[0].appendChild(i);
                });
          },
          scriptURL: function (e) {
            return (T.settings.scriptDir || '') + e;
          },
          $loadScript: function (t, n, a) {
            var i = a.scripts,
              r = a.sequential,
              o = a.loadOn,
              s = T.bind(function () {
                r
                  ? this.loadScripts(t, n, i)
                  : T.each(
                      i,
                      function (e) {
                        this.loadScripts(t, n, [e]);
                      },
                      this
                    );
              }, this);
            o
              ? 'domready' === o
                ? T.domReady(s)
                : 'load' === o && T.addEventHandler(e, 'load', s)
              : s();
          },
          loadScripts: function (e, t, n) {
            function a () {
              r.length > 0 && i && r.shift().call(e, t, o);
              var c = n.shift();
              if (c) {
                var l = T.data.host,
                  u = s.scriptURL(c.src);
                l && (u = T.basePath() + u), (i = c), T.loadScript(u, a);
              }
            }
            try {
              n = n.slice(0);
              var i,
                r = this.asyncScriptCallbackQueue,
                o = t.target || t.srcElement,
                s = this;
            } catch (c) {
              console.error('scripts is', T.stringify(n));
            }
            a();
          },
          $loadBlockingScript: function (e, t, n) {
            var a = n.scripts;
            n.loadOn;
            T.bind(function () {
              T.each(
                a,
                function (n) {
                  this.loadBlockingScript(e, t, n);
                },
                this
              );
            }, this)();
          },
          loadBlockingScript: function (e, t, n) {
            var a = this.scriptURL(n.src),
              i = T.data.host,
              r = t.target || t.srcElement;
            i && (a = T.basePath() + a),
              this.argsForBlockingScripts.push([e, t, r]),
              T.loadScriptSync(a);
          },
          pushAsyncScript: function (e) {
            this.asyncScriptCallbackQueue.push(e);
          },
          pushBlockingScript: function (e) {
            var t = this.argsForBlockingScripts.shift(),
              n = t[0];
            e.apply(n, t.slice(1));
          },
          $writeHTML: T.escapeHtmlParams(function (e, n) {
            if (!T.domReadyFired && t.write)
              if ('pagebottom' === n.type || 'pagetop' === n.type)
                for (var a = 2, i = arguments.length; a < i; a++) {
                  var r = arguments[a].html;
                  (r = T.replace(r, e, n)), t.write(r);
                }
              else
                T.notify(
                  'You can only use writeHTML on the `pagetop` and `pagebottom` events.',
                  1
                );
            else
              T.notify(
                'Command writeHTML failed. You should try appending HTML using the async option.',
                1
              );
          }),
          linkNeedsDelayActivate: function (t, n) {
            n = n || e;
            var a = t.tagName,
              i = t.getAttribute('target'),
              r = t.getAttribute('href');
            return (
              (!a || 'a' === a.toLowerCase()) &&
              !!r &&
              (!i ||
                ('_blank' !== i &&
                  ('_top' === i
                    ? n.top === n
                    : '_parent' !== i && ('_self' === i || !n.name || i === n.name))))
            );
          },
          $delayActivateLink: function (e, t) {
            if (this.linkNeedsDelayActivate(e)) {
              T.preventDefault(t);
              var n = T.settings.linkDelay || 100;
              setTimeout(function () {
                T.setLocation(e.href);
              }, n);
            }
          },
          isQueueable: function (e) {
            return 'writeHTML' !== e.command;
          },
        }),
        (T.availableTools['default'] = b),
        T.inherit(y, T.BaseTool),
        T.extend(y.prototype, {
          name: 'SC',
          endPLPhase: function (e) {
            e === this.settings.loadOn && this.initialize(e);
          },
          initialize: function (t) {
            if (!this._cancelToolInit)
              if (
                ((this.settings.initVars = this.substituteVariables(this.settings.initVars, {
                  type: t,
                })),
                !1 !== this.settings.initTool)
              ) {
                var n = this.settings.sCodeURL || T.basePath() + 's_code.js';
                'object' == typeof n && (n = 'https:' === e.location.protocol ? n.https : n.http),
                  n.match(/^https?:/) || (n = T.basePath() + n),
                  this.settings.initVars && this.$setVars(null, null, this.settings.initVars),
                  T.loadScript(n, T.bind(this.onSCodeLoaded, this)),
                  (this.initializing = !0);
              } else (this.initializing = !0), this.pollForSC();
          },
          getS: function (t, n) {
            var a = (n && n.hostname) || e.location.hostname,
              i = this.concatWithToolVarBindings((n && n.setVars) || this.varBindings),
              r = (n && n.addEvent) || this.events,
              o = this.getAccount(a),
              s = e.s_gi;
            if (!s) return null;
            if ((this.isValidSCInstance(t) || (t = null), !o && !t))
              return (
                T.notify(
                  'Adobe Analytics: tracker not initialized because account was not found',
                  1
                ),
                null
              );
            t = t || s(o);
            var c = 'D' + T.appVersion;
            return (
              'undefined' != typeof t.tagContainerMarker
                ? (t.tagContainerMarker = c)
                : 'string' == typeof t.version &&
                  t.version.substring(t.version.length - 5) !== '-' + c &&
                  (t.version += '-' + c),
              t.sa &&
                !0 !== this.settings.skipSetAccount &&
                !1 !== this.settings.initTool &&
                t.sa(this.settings.account),
              this.applyVarBindingsOnTracker(t, i),
              r.length > 0 && (t.events = r.join(',')),
              T.getVisitorId() && (t.visitor = T.getVisitorId()),
              t
            );
          },
          onSCodeLoaded: function (e) {
            (this.initialized = !0), (this.initializing = !1);
            var t = ['Adobe Analytics: loaded', e ? ' (manual)' : '', '.'];
            T.notify(t.join(''), 1),
              T.fireEvent(this.id + '.load', this.getS()),
              e || (this.flushQueueExceptTrackLink(), this.sendBeacon()),
              this.flushQueue();
          },
          getAccount: function (t) {
            return e.s_account
              ? e.s_account
              : (t && this.settings.accountByHost && this.settings.accountByHost[t]) ||
                  this.settings.account;
          },
          getTrackingServer: function () {
            var t = this,
              n = t.getS();
            if (n) {
              if (n.ssl && n.trackingServerSecure) return n.trackingServerSecure;
              if (n.trackingServer) return n.trackingServer;
            }
            var a,
              i = t.getAccount(e.location.hostname);
            if (!i) return null;
            var r,
              o,
              s = '',
              c = n && n.dc;
            return (
              (r = (a = i).indexOf(',')) >= 0 && (a = a.gb(0, r)),
              (a = a.replace(/[^A-Za-z0-9]/g, '')),
              s || (s = '2o7.net'),
              (c = c ? ('' + c).toLowerCase() : 'd1'),
              '2o7.net' == s && ('d1' == c ? (c = '112') : 'd2' == c && (c = '122'), (o = '')),
              (r = a + '.' + c + '.' + o + s)
            );
          },
          sendBeacon: function () {
            var t = this.getS(e[this.settings.renameS || 's']);
            t
              ? this.settings.customInit && !1 === this.settings.customInit(t)
                ? T.notify('Adobe Analytics: custom init suppressed beacon', 1)
                : (this.settings.executeCustomPageCodeFirst &&
                    this.applyVarBindingsOnTracker(t, this.varBindings),
                  this.executeCustomSetupFuns(t),
                  t.t(),
                  this.clearVarBindings(),
                  this.clearCustomSetup(),
                  T.notify('Adobe Analytics: tracked page view', 1))
              : T.notify('Adobe Analytics: page code not loaded', 1);
          },
          pollForSC: function () {
            T.poll(
              T.bind(function () {
                if ('function' == typeof e.s_gi) return this.onSCodeLoaded(!0), !0;
              }, this)
            );
          },
          flushQueueExceptTrackLink: function () {
            if (this.pending) {
              for (var e = [], t = 0; t < this.pending.length; t++) {
                var n = this.pending[t];
                'trackLink' === n[0].command ? e.push(n) : this.triggerCommand.apply(this, n);
              }
              this.pending = e;
            }
          },
          isQueueAvailable: function () {
            return !this.initialized;
          },
          substituteVariables: function (e, t) {
            var n = {};
            for (var a in e)
              if (e.hasOwnProperty(a)) {
                var i = e[a];
                n[a] = T.replace(i, location, t);
              }
            return n;
          },
          $setVars: function (e, t, n) {
            for (var a in n)
              if (n.hasOwnProperty(a)) {
                var i = n[a];
                'function' == typeof i && (i = i()), (this.varBindings[a] = i);
              }
            T.notify('Adobe Analytics: set variables.', 2);
          },
          $customSetup: function (e, t, n) {
            this.customSetupFuns.push(function (a) {
              n.call(e, t, a);
            });
          },
          isValidSCInstance: function (e) {
            return !!e && 'function' == typeof e.t && 'function' == typeof e.tl;
          },
          concatWithToolVarBindings: function (e) {
            var t = this.settings.initVars || {};
            return (
              T.map(['trackingServer', 'trackingServerSecure'], function (n) {
                t[n] && !e[n] && (e[n] = t[n]);
              }),
              e
            );
          },
          applyVarBindingsOnTracker: function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          },
          clearVarBindings: function () {
            this.varBindings = {};
          },
          clearCustomSetup: function () {
            this.customSetupFuns = [];
          },
          executeCustomSetupFuns: function (t) {
            T.each(this.customSetupFuns, function (n) {
              n.call(e, t);
            });
          },
          $trackLink: function (e, t, n) {
            var a = (n = n || {}).type,
              i = n.linkName;
            !i && e && e.nodeName && 'a' === e.nodeName.toLowerCase() && (i = e.innerHTML),
              i || (i = 'link clicked');
            var r = n && n.setVars,
              o = (n && n.addEvent) || [],
              s = this.getS(null, { setVars: r, addEvent: o });
            if (s) {
              var c = s.linkTrackVars,
                l = s.linkTrackEvents,
                u = this.definedVarNames(r);
              n && n.customSetup && n.customSetup.call(e, t, s),
                o.length > 0 && u.push('events'),
                s.products && u.push('products'),
                (u = this.mergeTrackLinkVars(s.linkTrackVars, u)),
                (o = this.mergeTrackLinkVars(s.linkTrackEvents, o)),
                (s.linkTrackVars = this.getCustomLinkVarsList(u));
              var d = T.map(o, function (e) {
                return e.split(':')[0];
              });
              (s.linkTrackEvents = this.getCustomLinkVarsList(d)),
                s.tl(!0, a || 'o', i),
                T.notify(
                  [
                    'Adobe Analytics: tracked link ',
                    'using: linkTrackVars=',
                    T.stringify(s.linkTrackVars),
                    '; linkTrackEvents=',
                    T.stringify(s.linkTrackEvents),
                  ].join(''),
                  1
                ),
                (s.linkTrackVars = c),
                (s.linkTrackEvents = l);
            } else T.notify('Adobe Analytics: page code not loaded', 1);
          },
          mergeTrackLinkVars: function (e, t) {
            return e && (t = e.split(',').concat(t)), t;
          },
          getCustomLinkVarsList: function (e) {
            var t = T.indexOf(e, 'None');
            return t > -1 && e.length > 1 && e.splice(t, 1), e.join(',');
          },
          definedVarNames: function (e) {
            e = e || this.varBindings;
            var t = [];
            for (var n in e)
              e.hasOwnProperty(n) &&
                /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(
                  n
                ) &&
                t.push(n);
            return t;
          },
          $trackPageView: function (e, t, n) {
            var a = n && n.setVars,
              i = (n && n.addEvent) || [],
              r = this.getS(null, { setVars: a, addEvent: i });
            r
              ? ((r.linkTrackVars = ''),
                (r.linkTrackEvents = ''),
                this.executeCustomSetupFuns(r),
                n && n.customSetup && n.customSetup.call(e, t, r),
                r.t(),
                this.clearVarBindings(),
                this.clearCustomSetup(),
                T.notify('Adobe Analytics: tracked page view', 1))
              : T.notify('Adobe Analytics: page code not loaded', 1);
          },
          $postTransaction: function (t, n, a) {
            var i = (T.data.transaction = e[a]),
              r = this.varBindings,
              o = this.settings.fieldVarMapping;
            if (
              (T.each(
                i.items,
                function (e) {
                  this.products.push(e);
                },
                this
              ),
              (r.products = T.map(
                this.products,
                function (e) {
                  var t = [];
                  if (o && o.item)
                    for (var n in o.item)
                      if (o.item.hasOwnProperty(n)) {
                        var a = o.item[n];
                        t.push(a + '=' + e[n]),
                          'event' === a.substring(0, 5) && this.events.push(a);
                      }
                  var i = ['', e.product, e.quantity, e.unitPrice * e.quantity];
                  return t.length > 0 && i.push(t.join('|')), i.join(';');
                },
                this
              ).join(',')),
              o && o.transaction)
            ) {
              var s = [];
              for (var c in o.transaction)
                if (o.transaction.hasOwnProperty(c)) {
                  a = o.transaction[c];
                  s.push(a + '=' + i[c]), 'event' === a.substring(0, 5) && this.events.push(a);
                }
              r.products.length > 0 && (r.products += ','), (r.products += ';;;;' + s.join('|'));
            }
          },
          $addEvent: function () {
            for (var e = 2, t = arguments.length; e < t; e++) this.events.push(arguments[e]);
          },
          $addProduct: function () {
            for (var e = 2, t = arguments.length; e < t; e++) this.products.push(arguments[e]);
          },
        }),
        (T.availableTools.sc = y),
        T.inherit(w, T.BaseTool),
        T.extend(w.prototype, {
          initialize: function () {
            var e = this.settings;
            if (!1 !== this.settings.initTool) {
              var t = e.url;
              (t = 'string' == typeof t ? T.basePath() + t : T.isHttps() ? t.https : t.http),
                T.loadScript(t, T.bind(this.onLoad, this)),
                (this.initializing = !0);
            } else this.initialized = !0;
          },
          isQueueAvailable: function () {
            return !this.initialized;
          },
          onLoad: function () {
            (this.initialized = !0),
              (this.initializing = !1),
              this.settings.initialBeacon && this.settings.initialBeacon(),
              this.flushQueue();
          },
          endPLPhase: function (e) {
            e === this.settings.loadOn &&
              (T.notify(this.name + ': Initializing at ' + e, 1), this.initialize());
          },
          $fire: function (e, t, n) {
            this.initializing
              ? this.queueCommand({ command: 'fire', arguments: [n] }, e, t)
              : n.call(this.settings, e, t);
          },
        }),
        (T.availableTools.am = w),
        (T.availableTools.adlens = w),
        (T.availableTools.aem = w),
        (T.availableTools.__basic = w),
        T.inherit(_, T.BaseTool),
        T.extend(_.prototype, {
          name: 'GA',
          initialize: function () {
            var t = this.settings,
              n = e._gaq,
              a = t.initCommands || [],
              i = t.customInit;
            if ((n || (_gaq = []), this.isSuppressed()))
              T.notify('GA: page code not loaded(suppressed).', 1);
            else {
              if (!n && !_.scriptLoaded) {
                var r = T.isHttps(),
                  o = (r ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                t.url && (o = r ? t.url.https : t.url.http),
                  T.loadScript(o),
                  (_.scriptLoaded = !0),
                  T.notify('GA: page code loaded.', 1);
              }
              t.domain;
              var s = t.trackerName,
                c = O.allowLinker(),
                l = T.replace(t.account, location);
              T.settings.domainList;
              _gaq.push([this.cmd('setAccount'), l]),
                c && _gaq.push([this.cmd('setAllowLinker'), c]),
                _gaq.push([this.cmd('setDomainName'), O.cookieDomain()]),
                T.each(
                  a,
                  function (e) {
                    var t = [this.cmd(e[0])].concat(
                      T.preprocessArguments(e.slice(1), location, null, this.forceLowerCase)
                    );
                    _gaq.push(t);
                  },
                  this
                ),
                i && (this.suppressInitialPageView = !1 === i(_gaq, s)),
                t.pageName && this.$overrideInitialPageView(null, null, t.pageName);
            }
            (this.initialized = !0), T.fireEvent(this.id + '.configure', _gaq, s);
          },
          isSuppressed: function () {
            return this._cancelToolInit || !1 === this.settings.initTool;
          },
          tracker: function () {
            return this.settings.trackerName;
          },
          cmd: function (e) {
            var t = this.tracker();
            return t ? t + '._' + e : '_' + e;
          },
          $overrideInitialPageView: function (e, t, n) {
            this.urlOverride = n;
          },
          trackInitialPageView: function () {
            if (!this.isSuppressed() && !this.suppressInitialPageView)
              if (this.urlOverride) {
                var e = T.preprocessArguments(
                  [this.urlOverride],
                  location,
                  null,
                  this.forceLowerCase
                );
                this.$missing$('trackPageview', null, null, e);
              } else this.$missing$('trackPageview');
          },
          endPLPhase: function (e) {
            e === this.settings.loadOn &&
              (T.notify('GA: Initializing at ' + e, 1),
              this.initialize(),
              this.flushQueue(),
              this.trackInitialPageView());
          },
          call: function (e, t, n, a) {
            if (!this._cancelToolInit) {
              this.settings;
              var i = this.tracker(),
                r = this.cmd(e);
              a = a ? [r].concat(a) : [r];
              _gaq.push(a),
                i
                  ? T.notify(
                      'GA: sent command ' +
                        e +
                        ' to tracker ' +
                        i +
                        (a.length > 1 ? ' with parameters [' + a.slice(1).join(', ') + ']' : '') +
                        '.',
                      1
                    )
                  : T.notify(
                      'GA: sent command ' +
                        e +
                        (a.length > 1 ? ' with parameters [' + a.slice(1).join(', ') + ']' : '') +
                        '.',
                      1
                    );
            }
          },
          $missing$: function (e, t, n, a) {
            this.call(e, t, n, a);
          },
          $postTransaction: function (t, n, a) {
            var i = (T.data.customVars.transaction = e[a]);
            this.call('addTrans', t, n, [
              i.orderID,
              i.affiliation,
              i.total,
              i.tax,
              i.shipping,
              i.city,
              i.state,
              i.country,
            ]),
              T.each(
                i.items,
                function (e) {
                  this.call('addItem', t, n, [
                    e.orderID,
                    e.sku,
                    e.product,
                    e.category,
                    e.unitPrice,
                    e.quantity,
                  ]);
                },
                this
              ),
              this.call('trackTrans', t, n);
          },
          delayLink: function (e, t) {
            var n = this;
            if (
              O.allowLinker() &&
              e.hostname.match(this.settings.linkerDomains) &&
              !T.isSubdomainOf(e.hostname, location.hostname)
            ) {
              T.preventDefault(t);
              var a = T.settings.linkDelay || 100;
              setTimeout(function () {
                n.call('link', e, t, [e.href]);
              }, a);
            }
          },
          popupLink: function (t, n) {
            if (e._gat) {
              T.preventDefault(n);
              var a = this.settings.account,
                i = e._gat._createTracker(a)._getLinkerUrl(t.href);
              e.open(i);
            }
          },
          $link: function (e, t) {
            '_blank' === e.getAttribute('target') ? this.popupLink(e, t) : this.delayLink(e, t);
          },
          $trackEvent: function (e, t) {
            var n = Array.prototype.slice.call(arguments, 2);
            if (n.length >= 4 && null != n[3]) {
              var a = parseInt(n[3], 10);
              T.isNaN(a) && (a = 1), (n[3] = a);
            }
            this.call('trackEvent', e, t, n);
          },
        }),
        (T.availableTools.ga = _);
      var O = {
        allowLinker: function () {
          return T.hasMultipleDomains();
        },
        cookieDomain: function () {
          var t = T.settings.domainList,
            n = T.find(t, function (t) {
              var n = e.location.hostname;
              return T.equalsIgnoreCase(n.slice(n.length - t.length), t);
            });
          return n ? '.' + n : 'auto';
        },
      };
      T.inherit(x, T.BaseTool),
        T.extend(x.prototype, {
          name: 'GAUniversal',
          endPLPhase: function (e) {
            e === this.settings.loadOn &&
              (T.notify('GAU: Initializing at ' + e, 1),
              this.initialize(),
              this.flushQueue(),
              this.trackInitialPageView());
          },
          getTrackerName: function () {
            return this.settings.trackerSettings.name || '';
          },
          isPageCodeLoadSuppressed: function () {
            return !1 === this.settings.initTool || !0 === this._cancelToolInit;
          },
          initialize: function () {
            if (this.isPageCodeLoadSuppressed())
              return (
                (this.initialized = !0),
                void T.notify('GAU: Page code not loaded (suppressed).', 1)
              );
            var t = 'ga';
            (e[t] = e[t] || this.createGAObject()),
              (e.GoogleAnalyticsObject = t),
              T.notify('GAU: Page code loaded.', 1),
              T.loadScriptOnce(this.getToolUrl());
            var n = this.settings;
            (O.allowLinker() && !1 !== n.allowLinker
              ? this.createAccountForLinker()
              : this.createAccount(),
            this.executeInitCommands(),
            n.customInit) &&
              !1 === (0, n.customInit)(e[t], this.getTrackerName()) &&
              (this.suppressInitialPageView = !0);
            this.initialized = !0;
          },
          createGAObject: function () {
            var e = function () {
              e.q.push(arguments);
            };
            return (e.q = []), (e.l = 1 * new Date()), e;
          },
          createAccount: function () {
            this.create();
          },
          createAccountForLinker: function () {
            var e = {};
            O.allowLinker() && (e.allowLinker = !0),
              this.create(e),
              this.call('require', 'linker'),
              this.call('linker:autoLink', this.autoLinkDomains(), !1, !0);
          },
          create: function (e) {
            var t = this.settings.trackerSettings;
            ((t = T.preprocessArguments(
              [t],
              location,
              null,
              this.forceLowerCase
            )[0]).trackingId = T.replace(this.settings.trackerSettings.trackingId, location)),
              t.cookieDomain || (t.cookieDomain = O.cookieDomain()),
              T.extend(t, e || {}),
              this.call('create', t);
          },
          autoLinkDomains: function () {
            var e = location.hostname;
            return T.filter(T.settings.domainList, function (t) {
              return t !== e;
            });
          },
          executeInitCommands: function () {
            var e = this.settings;
            e.initCommands &&
              T.each(
                e.initCommands,
                function (e) {
                  var t = e.splice(2, e.length - 2);
                  (e = e.concat(T.preprocessArguments(t, location, null, this.forceLowerCase))),
                    this.call.apply(this, e);
                },
                this
              );
          },
          trackInitialPageView: function () {
            this.suppressInitialPageView ||
              this.isPageCodeLoadSuppressed() ||
              this.call('send', 'pageview');
          },
          call: function () {
            'function' == typeof ga
              ? this.isCallSuppressed() ||
                ((arguments[0] = this.cmd(arguments[0])),
                this.log(T.toArray(arguments)),
                ga.apply(e, arguments))
              : T.notify('GA Universal function not found!', 4);
          },
          isCallSuppressed: function () {
            return !0 === this._cancelToolInit;
          },
          $missing$: function (e, t, n, a) {
            (a = a || []), (a = [e].concat(a)), this.call.apply(this, a);
          },
          getToolUrl: function () {
            var e = this.settings,
              t = T.isHttps();
            return e.url
              ? t
                ? e.url.https
                : e.url.http
              : (t ? 'https://ssl' : 'http://www') + '.google-analytics.com/analytics.js';
          },
          cmd: function (e) {
            var t = ['send', 'set', 'get'],
              n = this.getTrackerName();
            return n && -1 !== T.indexOf(t, e) ? n + '.' + e : e;
          },
          log: function (e) {
            var t =
              'GA Universal: sent command ' +
              e[0] +
              ' to tracker ' +
              (this.getTrackerName() || 'default');
            if (e.length > 1) {
              T.stringify(e.slice(1));
              t += ' with parameters ' + T.stringify(e.slice(1));
            }
            (t += '.'), T.notify(t, 1);
          },
        }),
        (T.availableTools.ga_universal = x),
        T.extend(C.prototype, {
          getInstance: function () {
            return this.instance;
          },
          initialize: function () {
            var e,
              t = this.settings;
            T.notify('Visitor ID: Initializing tool', 1),
              null !== (e = this.createInstance(t.mcOrgId, t.initVars)) &&
                (t.customerIDs && this.applyCustomerIDs(e, t.customerIDs),
                t.autoRequest && e.getMarketingCloudVisitorID(),
                (this.instance = e));
          },
          createInstance: function (e, t) {
            if (!T.isString(e))
              return (
                T.notify('Visitor ID: Cannot create instance using mcOrgId: "' + e + '"', 4), null
              );
            (e = T.replace(e)),
              T.notify('Visitor ID: Create instance using mcOrgId: "' + e + '"', 1),
              (t = this.parseValues(t));
            var n = Visitor.getInstance(e, t);
            return T.notify('Visitor ID: Set variables: ' + T.stringify(t), 1), n;
          },
          applyCustomerIDs: function (e, t) {
            var n = this.parseIds(t);
            e.setCustomerIDs(n), T.notify('Visitor ID: Set Customer IDs: ' + T.stringify(n), 1);
          },
          parseValues: function (e) {
            if (!1 === T.isObject(e)) return {};
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = T.replace(e[n]));
            return t;
          },
          parseIds: function (e) {
            var t = {};
            if (!1 === T.isObject(e)) return {};
            for (var n in e)
              if (e.hasOwnProperty(n)) {
                var a = T.replace(e[n].id);
                a !== e[n].id &&
                  a &&
                  ((t[n] = {}),
                  (t[n].id = a),
                  (t[n].authState = Visitor.AuthState[e[n].authState]));
              }
            return t;
          },
        }),
        (T.availableTools.visitor_id = C),
        _satellite.init({
          tools: {},
          pageLoadRules: [
            {
              name: 'Autonomous Site - Advertising Scripts',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script>\n(function(){function D(){for(var a=[8],c=1;2>=c;c++)a.push(8+c),a.push(8-c);a=a[Math.floor(Math.random()*a.length)];return{b:a,a:0==Math.floor(Math.random()*a)}}function l(a){var c=a=a.replace(":","");try{for(var d=0;100>d&&(a=decodeURIComponent(a),c!=a)&&!a.match(/^http(s)?\\:/);d++)c=a}catch(b){}return a.replace(/(^\\s+|\\s+$)/g,"")}try{var z=function(a,c,d,b){return a[c]===b&&0===d||a[d]===b&&0===c};if(!location||!location.hostname||!location.pathname)return!1;var e=document.location.hostname.replace(/^www\\./,\n""),t=function(){for(var a,c=document.getElementsByTagName("meta"),d,b=0,e=c.length;b<e;b++)if(d=c[b],"og:title"===d.getAttribute("property")){a=d.getAttribute("content");break}a||(a=document.title||"Untitled");return a}(),b={},b=function(a,c,b){a.l1=c;a.l2=b;a.l3="__page__";a.l4="-";return a}(b,e,t),m=(new Date).getTime(),n=Math.floor(Math.random()*Math.pow(10,12)),p,f;f=D();p=f.a?f.b:0;b.zmoatab_cm=p;b.t=m;b.de=n;b.zMoatAB_SNPT=!0;var q;q=p?p:1;var u;u=f?f.a?!0:!1:!0;var e=[],v=(new Date).getTime().toString(35),\nw=[l(b.l1),l(b.l2),l(b.l3),l(b.l4)].join(":"),t=/zct[a-z0-9]+/i,g="",h;for(h in b)b.hasOwnProperty(h)&&h.match(t)&&(g+="&"+h+"="+b[h]);var A=document.referrer.match(/^([^:]{2,}:\\/\\/[^\\/]*)/),r=A?A[1]:document.referrer,x=["e=17","d="+encodeURIComponent(w),"de="+n,"t="+m,"i=ORACLE_CONTENT1","cm="+q,String("j="+encodeURIComponent(r)+g),"mp=1","ac=1","pl=1","bq=10","vc=2"],v="https://g5r0xwdu5kou-a.akamaihd.net/"+v+".gif?",y=function(a){for(var c="",b=0;b<a.length;b++)c+=(0===b?"":"&")+a[b];return c}(function(a){for(var b=\n0;b<a.length;b++){var d=Math.floor(Math.random()*(a.length-b)+b),e=a[b],f=z(a,b,d,x[1]);z(a,b,d,x[0])||f?b--:(a[b]=a[d],a[d]=e)}return a}(x)),y=v+y+"&cs=0",E="https://px.moatads.com/pixel.gif?e=17&d="+encodeURIComponent(w)+"&de="+n+"&t="+m+"&i=ORACLE_CONTENT1&cm="+q+"&j="+encodeURIComponent(r)+g+"&mp=0&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0",F="https://px.moatads.com/pixel.gif?e=17&d="+encodeURIComponent(w)+"&de="+n+"&t="+m+"&i=ORACLE_CONTENT1&cm="+q+"&j="+encodeURIComponent(r)+g+"&ku=1&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0";\nu&&((new Image).src=y,(new Image).src=E);for(var B in b)e.push(B+"="+encodeURIComponent(b[B]));var e=e.join("&"),e=e+"&vc=2",k=document.createElement("script");k.type="text/javascript";k.async=!0;u&&(k.onerror=function(){(new Image).src=F});var C=document.getElementsByTagName("script")[0];C.parentNode.insertBefore(k,C);k.src="https://z.moatads.com/oraclecontent19897089498/moatcontent.js#"+e}catch(a){try{var G="//pixel.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=MOATCONTENTABSNIPPET1"+\ng+"&vc=2&ac=1&k="+encodeURIComponent(a)+"&j="+encodeURIComponent(r)+"&cs="+(new Date).getTime();(new Image).src=G}catch(c){}}})();\n</script>',
                    },
                  ],
                },
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5bc0f86964746d63bf003a92-staging.js' }],
                    },
                  ],
                },
              ],
              conditions: [
                function () {
                  var t = [
                      'www-stage.oracle.com',
                      'www-sites-stage.oracle.com',
                      'www-sites.oracle.com',
                    ],
                    n = _satellite.getVar('truste_consent');
                  return (
                    1 != n &&
                    2 != n &&
                    'false' == _satellite.getVar('countryExclusion') &&
                    -1 == location.search.indexOf('testUber=true') &&
                    ((-1 != t.indexOf(e.location.host) &&
                      0 == e.location.pathname.indexOf('/auto.oracle.com/')) ||
                      'auto.oracle.com' == e.location.host)
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Autonomous Site - Chat and Source Tracking Scripts',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script>\n    var sc_product = 225;\n    var x = document.getElementsByClassName("atgchat-link");\n    for (var i = 0; i < x.length; i++) {\n    name = "ochat";\n        arr = x[i].className.split(" ");\n        if (arr.indexOf(name) == -1) {\n            x[i].className += " " + name;\n        }\n   }\n</script>\n<script data-reqjq="" src="//auto.oracle.com/asset/js/oracle-chat-auto.js" id="oracle_chat" data-path="//auto.oracle.com/asset/json/chat-translation-data.json" data-scchannel="SC Auto" data-nosidewall></script>',
                    },
                  ],
                },
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5bc0f8ee64746d0da0004c59-staging.js' }],
                    },
                  ],
                },
              ],
              conditions: [
                function () {
                  return (
                    (-1 !=
                      [
                        'www-stage.oracle.com',
                        'www-sites-stage.oracle.com',
                        'www-sites.oracle.com',
                      ].indexOf(e.location.host) &&
                      0 == e.location.pathname.indexOf('/auto.oracle.com/')) ||
                    'auto.oracle.com' == e.location.host
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Awareness UBER TAG',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-59b7994164746d5205007ad4-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  exclude: [
                    /\/\btechnetwork\//i,
                    /\/\bpartners\//i,
                    /^\/index.html/i,
                    /\/corporate\/accessibility\//i,
                  ],
                },
                subdomains: {
                  include: [/www.oracle.com/i, /blogs.oracle.com/i, /community.oracle.com/i],
                },
              },
              conditions: [
                function () {
                  var n = [
                      '/cn/cloud/workload.html',
                      '/cn/cloud/data-integration.html',
                      '/cn/cloud/enterprise-mobility.html',
                      '/cn/cloud/analytics.html',
                      '/cn/cloud/management-security-cloud.html',
                    ],
                    a = _satellite.getVar('trusteConsent');
                  return (
                    !(
                      (-1 == a.truste_consent.indexOf(0) && -1 == a.truste_consent.indexOf(3)) ||
                      a.dnt ||
                      'false' != _satellite.getVar('countryExclusion') ||
                      -1 != t.referrer.indexOf('explore.oracle.com')
                    ) &&
                    -1 == location.search.indexOf('testUber=true') &&
                    (1 != _satellite.getVar('apacRegion') || -1 != n.indexOf(e.location.pathname))
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Awareness UBER TAG - Eloqua',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a28356464746d39bb001920-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { exclude: [/\/\btechnetwork\//i, /\/\bpartners\//i] },
                subdomains: { include: [/www.oracle.com/i, /go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var n = [
                      '/cn/cloud/workload.html',
                      '/cn/cloud/data-integration.html',
                      '/cn/cloud/enterprise-mobility.html',
                      '/cn/cloud/analytics.html',
                      '/cn/cloud/management-security-cloud.html',
                    ],
                    a = ['71796', '68405', '68406'],
                    i = _satellite.getVar('trusteConsent');
                  if (
                    (-1 == i.truste_consent.indexOf(0) && -1 == i.truste_consent.indexOf(3)) ||
                    i.dnt ||
                    'false' != _satellite.getVar('countryExclusion') ||
                    -1 != location.search.indexOf('testUber=true') ||
                    -1 != t.referrer.indexOf('explore.oracle.com')
                  )
                    return !1;
                  if ('go.oracle.com' == location.host) {
                    if (1 == _satellite.getVar('apacRegion')) {
                      var r = _satellite.getVar('LP_id');
                      return -1 != a.indexOf(r);
                    }
                    return !0;
                  }
                  return (
                    !('www.oracle.com' != location.host || !formHtmlName) &&
                    (1 != _satellite.getVar('apacRegion') || -1 != n.indexOf(e.location.pathname))
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Awareness UBER TAG - Stage Sites',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a341d9a64746d01b500b11a-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  exclude: [
                    /\/\btechnetwork\//i,
                    /\/\bpartners\//i,
                    '/\\bauto.oracle.com/',
                    /\/corporate\/accessibility\//i,
                  ],
                },
                subdomains: {
                  include: [
                    /www-sites.oracle.com/i,
                    /www-sites-stage.oracle.com/i,
                    /go-stage.oracle.com/i,
                    /go.oracle.com/i,
                    /www.oracle.com/i,
                    /www-stage.oracle.com/i,
                    /blogs-stage.oracle.com/i,
                    /community-stage.oracle.com/i,
                  ],
                },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return (
                    !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      'false' != _satellite.getVar('countryExclusion')
                    ) &&
                    (('go.oracle.com' != location.host && 'www.oracle.com' != location.host) ||
                      -1 != location.search.indexOf('testUber=true'))
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Bluekai Core Tag',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5b634aa964746d11bf000172-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  exclude: ['/corporate/acquisitions/micros/', /\/corporate\/accessibility\//i],
                },
                subdomains: {
                  include: [
                    /www.oracle.com/i,
                    /blogs.oracle.com/i,
                    /go.oracle.com/i,
                    /auto.oracle.com/i,
                    /www-stage.oracle.com/i,
                    /www-sites.oracle.com/i,
                    /community-stage.oracle.com/i,
                    /community.oracle.com/i,
                  ],
                },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return (
                    !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      'false' != _satellite.getVar('countryExclusion') ||
                      -1 != t.referrer.indexOf('explore.oracle.com')
                    ) && 1 != _satellite.getVar('apacRegion')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Bluekai Core Test',
              trigger: [
                {
                  command: 'loadBlockingScript',
                  arguments: [
                    {
                      sequential: !0,
                      scripts: [{ src: 'satellite-5c7442ef64746d0be2001a70-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: ['/corporate/acquisitions/micros/'] },
                subdomains: { include: [/www.oracle.com/i] },
              },
              conditions: [
                function () {
                  var t = _satellite.getVar('trusteConsent');
                  return (
                    !(
                      (-1 == t.truste_consent.indexOf(0) && -1 == t.truste_consent.indexOf(3)) ||
                      t.dnt ||
                      'false' != _satellite.getVar('countryExclusion')
                    ) || ((e.dataLayerObject.user.campaigns.status = 'NoConsent'), !1)
                  );
                },
              ],
              event: 'pagetop',
            },
            {
              name: 'Chat Script',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script>\n\t\twindow.sc_channel = \'SC Ocom\';\n    if(window.location.pathname.indexOf(\'technetwork\') != -1){\n    \twindow.sc_channel = "SC OTN";\n    }\n  \n  \tvar sc_product = _satellite.getVar(\'salesChatProductId\');\n    var x = document.getElementsByClassName("atgchat-link");\n    for (var i = 0; i < x.length; i++) {\n    name = "ochat";\n        arr = x[i].className.split(" ");\n        if (arr.indexOf(name) == -1) {\n            x[i].className += " " + name;\n        }\n   }\n   \n   var oChatScript = document.createElement(\'script\');\n\toChatScript.type = \'text/javascript\';\n\toChatScript.src = "//www.oracle.com/asset/web/js/oracle-chat.js";\n\toChatScript.id = "oracle_chat";\n\toChatScript.async = false;\n\toChatScript.setAttribute("data-path", "/asset/web/json/chat-translation-data.json");\n\toChatScript.setAttribute("data-scchannel", window.sc_channel);\n\tdocument.body.appendChild(oChatScript);\n</script>\n<!-- <script data-reqjq src="//www.oracle.com/asset/web/js/oracle-chat.js" onload="this.setAttribute(\'data-scchannel\',window.sc_channel)" id="oracle_chat" data-path="/asset/web/json/chat-translation-data.json"></script> -->',
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /\/corporate\/contact\//i,
                    /\/consulting\/soar.html/i,
                    /^\/us\/corporate\/events\/soar\/index.html/i,
                    /\/applications\//i,
                    /\/artificial-intelligence\//i,
                    /\/autonomouscloud\//i,
                    /\/big-data\//i,
                    /\/cloud\//i,
                    /\/content-storage-management\//i,
                    /\/corporate\/pricing\//i,
                    /\/database\//i,
                    /\/engineered-systems\//i,
                    /\/enterprise-manager\//i,
                    /\/erp\//i,
                    /\/industries\/communications\//i,
                    /\/industries\/construction-engineering\//i,
                    /\/java\//i,
                    /\/linux\//i,
                    /\/marketingcloud\//i,
                    /\/middleware\//i,
                    /\/midmarket\//i,
                    /\/midsize\//i,
                    /\/networking\//i,
                    /^(\/?[a-zA-Z0-9_-]*)\/products\//i,
                    /\/security\//i,
                    /\/servers\//i,
                    /\/smb\//i,
                    /\/solaris\//i,
                    /\/solutions\//i,
                    /\/storage\//i,
                    /\/systems\//i,
                    /\/tools\//i,
                    /^\/us\/products\/applications\/ebusiness\//i,
                    /^\/us\/products\/applications\/master-data-management\//i,
                    /^\/us\/products\/applications\/siebel\//i,
                    /\/virtualization\//i,
                    /^\/(de|es|fr|it|nl|se|uk)\/corporate\/features\/power\//i,
                    /\/it-infrastructure\//i,
                    /^\/jp\/corporate\/pricing.html/i,
                    /\/technetwork\//i,
                    /^\/tryit.html/i,
                    /\/area-of-interest\//i,
                    /^\/cn\/videocenter\//i,
                    /^(\/?[a-zA-Z0-9_-]*)\/mysql\//i,
                    /\/_qa\/chatTest\/compass_test.html/i,
                    /\/industries\/food-beverage\//i,
                    /\/industries\/hospitality\//i,
                    /^\/jp\/contact-us\//i,
                  ],
                  exclude: [
                    /\/corporate\/contact\/help.html/i,
                    /^\/ca-fr\//i,
                    /^\/il\//i,
                    /^\/middleeast-ar\//i,
                    /^\/cy\//i,
                    /^\/mt\//i,
                    /^\/partners\//i,
                    /\/industries\/retail\//i,
                    '^/emea/',
                    /^\/java\//i,
                    /^\/technetwork\/java\//i,
                    /^\/industries\/construction-engineering\/future-of-projects\//i,
                    /^\/([A-Za-z]+)-ar\/*/i,
                    /\/products\/financing\//i,
                    /\/uk\/applications\/erp\/future-ready\//i,
                  ],
                },
                subdomains: { include: [/www.oracle.com/i, /www-sites.oracle.com/i] },
              },
              event: 'pagebottom',
            },
            {
              name: 'Chat Script for HP',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script>\n    var x = document.getElementsByClassName("atgchat-link");\n    for (var i = 0; i < x.length; i++) {\n    name = "ochat";\n        arr = x[i].className.split(" ");\n        if (arr.indexOf(name) == -1) {\n            x[i].className += " " + name;\n        }\n   }\n</script>\n<script data-reqjq src="//www.oracle.com/asset/web/js/oracle-chat.js" id="oracle_chat" data-path="/asset/web/json/chat-translation-data.json"></script>',
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /^\/(([A-Za-z]{2})|([A-Za-z]{2}-[A-Za-z]{2}))\/index.html/i,
                    /^\/lad\/index.html/i,
                    /^\/asiasouth\/index.html/i,
                    /^\/africa-fr\/index.html/i,
                    /^\/africa\/index.html/i,
                    /^\/middleeast\/index.html/i,
                  ],
                  exclude: [
                    /^\/index.html/i,
                    /^\/ca-fr\/index.html/i,
                    /^\/il\/index.html/i,
                    /^\/cy\/index.html/i,
                    /^\/mt\/index.html/i,
                    /^\/([A-Za-z]+)-ar\//i,
                  ],
                },
                subdomains: { include: [/www.oracle.com/i, /www-sites.oracle.com/i] },
              },
              event: 'pagebottom',
            },
            {
              name: 'Consideration Prospecting UBER TAG',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a057d3164746d2eb80054e1-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { exclude: [/\/\btechnetwork\//i, /\/\bpartners\//i, /^\/index.html/i] },
                subdomains: {
                  include: [
                    /www.oracle.com/i,
                    /go.oracle.com/i,
                    /blogs.oracle.com/i,
                    /community.oracle.com/i,
                  ],
                },
              },
              conditions: [
                function () {
                  var n = [
                      '/cn/cloud/workload.html',
                      '/cn/cloud/data-integration.html',
                      '/cn/cloud/enterprise-mobility.html',
                      '/cn/cloud/analytics.html',
                      '/cn/cloud/management-security-cloud.html',
                    ],
                    a = ['71796', '68405', '68406', '71795'],
                    i = _satellite.getVar('trusteConsent');
                  if (
                    (-1 == (i = _satellite.getVar('trusteConsent')).truste_consent.indexOf(0) &&
                      -1 == i.truste_consent.indexOf(3)) ||
                    i.dnt ||
                    'false' != _satellite.getVar('countryExclusion') ||
                    -1 != t.referrer.indexOf('explore.oracle.com')
                  )
                    return !1;
                  if (-1 == location.search.indexOf('testUber=true')) {
                    if (1 == _satellite.getVar('apacRegion')) {
                      var r = _satellite.getVar('LP_id');
                      return -1 != a.indexOf(r) || -1 != n.indexOf(e.location.pathname);
                    }
                    return !0;
                  }
                  return !1;
                },
              ],
              event: 'windowload',
            },
            {
              name: 'DB Click Pixels for IaaS ',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-59b129c564746d520200582f-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { URI: { include: ['/cloud/iaas/'] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent')
                  ) {
                    var t = [];
                    return (
                      (t['/de/cloud/iaas/clearer-path-to-cloud-adoption/customer-stories.html'] = {
                        cat: 'cloud003',
                      }),
                      (t['/it/cloud/iaas/clearer-path-to-cloud-adoption/customer-stories.html'] = {
                        cat: 'cloud007',
                      }),
                      (t['/uk/cloud/iaas/clearer-path-to-cloud-adoption/customer-stories.html'] = {
                        cat: 'cloud00',
                      }),
                      (t['/de/cloud/iaas/clearer-path-to-cloud-adoption.html'] = {
                        cat: 'cloud002',
                        bcid_cat: 'cloud005',
                      }),
                      (t['/it/cloud/iaas/clearer-path-to-cloud-adoption.html'] = {
                        cat: 'cloud006',
                        bcid_cat: 'cloud009',
                      }),
                      (t['/uk/cloud/iaas/clearer-path-to-cloud-adoption.html'] = {
                        cat: 'cloud0',
                        bcid_cat: 'cloud001',
                      }),
                      (t['/de/cloud/iaas/clearer-path-to-cloud-adoption/pulse-survey.html'] = {
                        cat: 'cloud004',
                      }),
                      (t['/it/cloud/iaas/clearer-path-to-cloud-adoption/pulse-survey.html'] = {
                        cat: 'cloud008',
                      }),
                      (t['/uk/cloud/iaas/clearer-path-to-cloud-adoption/pulse-survey.html'] = {
                        cat: 'cloud000',
                      }),
                      'object' == typeof t[location.pathname] &&
                        (-1 != location.search.indexOf('bcid=548068258800')
                          ? (e.cat = t[location.pathname].bcid_cat)
                          : (e.cat = t[location.pathname].cat),
                        !0)
                    );
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Data Layer',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5b9beb9864746d1f4e0012f1-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                subdomains: {
                  include: [
                    /www.oracle.com/i,
                    /go.oracle.com/i,
                    /www-sites.oracle.com/i,
                    /auto.oracle.com/i,
                    /www-stage.oracle.com/i,
                    /community-stage.oracle.com/i,
                    /blogs.oracle.com/i,
                    /community.oracle.com/i,
                  ],
                },
              },
              conditions: [
                function () {
                  return _satellite.getVar('dataLayer'), !0;
                },
              ],
              event: 'pagetop',
            },
            {
              name: 'Develop Test Deploy - Landing Page',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: Develop Test Deploy - Landing Page\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/cloud/dev-test-deploy/index.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 11/21/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=fy18n006;cat=devel0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=fy18n006;cat=devel0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                    },
                  ],
                },
              ],
              scope: { URI: { include: [/cloud\/dev-test-deploy\/index.html/i] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'DoubleClick Pixel for EMEA Tech and Apps Q2FY18',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-59f8adf464746d55a10055fe-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /\/uk\/cloud\/iaas\/clearer-path-to-cloud-adoption\/pulse-survey\/index.html/i,
                  ],
                },
              },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'DoubleClick Pixels - Your Tomorrow Today 2018',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a5e634264746d21cf000a78-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [/\/tomorrow\//i],
                  exclude: [/\/\btechnetwork\//i, /\/\bpartners\//i],
                },
                subdomains: { include: [/www-sites.oracle.com/i, /www.oracle.com/i] },
              },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    return (
                      (t['/corporate/tomorrow/payscout.html'] = { cat: 'yttst0' }),
                      (t['/corporate/tomorrow/index.html'] = { cat: 'yttho0' }),
                      'object' == typeof t[location.pathname] &&
                        ((e.cat = t[location.pathname].cat), !0)
                    );
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Doubleclick Pixel -  NAS SMB Q4FY18 - May 25 2018 - 151138 ',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5b0be0b264746d45bb001cc5-staging.js' }],
                    },
                  ],
                },
              ],
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    t = {
                      50089: { type: 'oracl0', cat: 'smbhc0' },
                      48944: { type: 'oracl0', cat: 'smbhc001' },
                      55342: { type: 'oracl0', cat: 'smber0' },
                      55353: { type: 'oracl0', cat: 'smber000' },
                      48809: { type: 'oracl0', cat: 'smber002' },
                      56749: { type: 'oracl0', cat: 'smber004' },
                      66122: { type: 'oracl0', cat: 'smbep0' },
                      51189: { type: 'oracl0', cat: 'smbcx0' },
                      54753: { type: 'oracl0', cat: 'smbcx000' },
                      48673: { type: 'oracl0', cat: 'smbcx002' },
                      66047: { type: 'oracl0', cat: 'smbcx004' },
                      48973: { type: 'oracl0', cat: 'smbcx006' },
                      '/SMB-Assessment': { type: 'oracl0', cat: 'smbge00' },
                      50090: { type: 'oracl00', cat: 'smbhc0' },
                      48945: { type: 'oracl00', cat: 'smbhc00' },
                      55343: { type: 'oracl00', cat: 'smber0' },
                      55354: { type: 'oracl00', cat: 'smber00' },
                      48810: { type: 'oracl00', cat: 'smber000' },
                      56750: { type: 'oracl00', cat: 'smber001' },
                      66123: { type: 'oracl00', cat: 'smbep0' },
                      51190: { type: 'oracl00', cat: 'smbcx0' },
                      54754: { type: 'oracl00', cat: 'smbcx00' },
                      48674: { type: 'oracl00', cat: 'smbcx000' },
                      66048: { type: 'oracl00', cat: 'smbcx001' },
                      48974: { type: 'oracl00', cat: 'smbcx002' },
                      '/smb/hcm.html': { type: 'oracl0', cat: 'smbhc003' },
                      '/smb/epm-cloud.html': { type: 'oracl0', cat: 'smbep000' },
                      '/smb/finance.html': { type: 'oracl0', cat: 'smber006' },
                      '/smb/customer-experience.html': { type: 'oracl0', cat: 'smbcx008' },
                      '/smb/index.html': { type: 'oracl0', cat: 'smbge0' },
                    };
                    var n = _satellite.getVar('LP_id');
                    return 'object' == typeof t[n]
                      ? ((e.type = t[n].type), (e.cat = t[n].cat), !0)
                      : 'object' == typeof t[location.pathname] &&
                          ((e.type = t[location.pathname].type),
                          (e.cat = t[location.pathname].cat),
                          !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua  Sales Cloud Landing Pad Campaign-147103',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!-- Google Code for IaaS/PaaS_Welcome&#12506;&#12540;&#12472; Conversion Page -->\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 846058898;\nvar google_conversion_language = "en";\nvar google_conversion_format = "3";\nvar google_conversion_color = "ffffff";\nvar google_conversion_label =  window.dtm_google_conversion_label;\nvar google_remarketing_only = false;\n/* ]]> */\n</script>\n<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">\n</script>\n',
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = _satellite.getVar('LP_id');
                    return '67353' == t
                      ? ((e.dtm_google_conversion_label = 'brosCNS4xn0Qkqu3kwM'), !0)
                      : '67354' == t &&
                          ((e.dtm_google_conversion_label = '8BNNCKqCwn0Qkqu3kwM'), !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Conversion Pixels 154756',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 802202278;\nvar google_conversion_label = window.dtm_conv_lbl;\nvar google_remarketing_only = false;\n/* ]]> */\n</script>\n<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">\n</script>',
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    (t[56961] = 'q6WYCMCc6YQBEKbFwv4C'),
                      (t[60373] = 'IdLOCP6Z_IUBEKbFwv4C'),
                      (t[69867] = '02SgCIj-7IUBEKbFwv4C');
                    var n = _satellite.getVar('LP_id');
                    return !!t[n] && ((e.dtm_conv_lbl = t[n]), !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Conversion Pixels 156553',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5b979e4964746d085d001465-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=64598/i, /lp=60581/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('truste_consent');
                  return 1 != e && 2 != e && 'false' == _satellite.getVar('countryExclusion');
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Conversion Pixels 157012',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!-- Google Code for HCM_Submission&#23436;&#20102; Conversion Page -->\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 846058898;\nvar google_conversion_language = "en";\nvar google_conversion_format = "3";\nvar google_conversion_color = "ffffff";\nvar google_conversion_label = "HPgbCMfXv3MQkqu3kwM";\nvar google_remarketing_only = false;\n/* ]]> */\n</script>\n<script async type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">\n</script>',
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /lp=73416/i,
                    /lp=74845/i,
                    /lp=71020/i,
                    /lp=71046/i,
                    /lp=71062/i,
                    /lp=70985/i,
                    /lp=68862/i,
                    /lp=68993/i,
                  ],
                },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('truste_consent');
                  return 1 != e && 2 != e && 'false' == _satellite.getVar('countryExclusion');
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Conversion Pixels 158266',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!-- Google Code for OMC_&#36039;&#26009;DL&#12501;&#12457;&#12540;&#12512;&#26469;&#35370; Conversion Page -->\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 836061479;\nvar google_conversion_label = "73D0CJyxpIABEKeS1Y4D";\nvar google_remarketing_only = false;\n/* ]]> */\n</script>\n <script async type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">\n</script>',
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=73833/i, /lp=73778/i, /lp=75205/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('truste_consent');
                  return 1 != e && 2 != e && 'false' == _satellite.getVar('countryExclusion');
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Conversion Pixels-67354 - 154756',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5b61a08764746d442800273a-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=67354/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Conversion Pixels-68487-157445',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5ba3623b64746d426d000508-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=68487/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('truste_consent');
                  return 1 != e && 2 != e && 'false' == _satellite.getVar('countryExclusion');
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Conversion Pixels-70897-157445',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5ba3762264746d7d64002a8f-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=70897/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('truste_consent');
                  return 1 != e && 2 != e && 'false' == _satellite.getVar('countryExclusion');
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua First Party Script',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5b61f22a64746d2170002400-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                subdomains: {
                  include: [/www.oracle.com/i, /blogs.oracle.com/i, /community.oracle.com/i],
                },
              },
              conditions: [
                function () {
                  var e =
                      -1 != location.host.indexOf('-stage') ||
                      -1 != location.host.indexOf('-content') ||
                      -1 != location.host.indexOf('localhost') ||
                      -1 != location.host.indexOf('.us.oracle.com') ||
                      -1 != location.host.indexOf('127.0.0.1') ||
                      -1 != location.host.indexOf('-dev') ||
                      -1 != location.host.indexOf('www-sites'),
                    t = _satellite.getVar('trusteConsent');
                  return !(
                    e ||
                    (-1 == t.truste_consent.indexOf(0) &&
                      -1 == t.truste_consent.indexOf(2) &&
                      -1 == t.truste_consent.indexOf(3)) ||
                    t.dnt
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Google Display Ad campaign for IaaS-145921',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!-- Google Code for IaaS/PaaS_Welcome&#12506;&#12540;&#12472; Conversion Page -->\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 846058898;\nvar google_conversion_language = "en";\nvar google_conversion_format = "3";\nvar google_conversion_color = "ffffff";\nvar google_conversion_label =  window.dtm_google_conversion_label;\nvar google_remarketing_only = false;\n/* ]]> */\n</script>\n<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">\n</script>\n',
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = _satellite.getVar('LP_id');
                    return '65054' == t
                      ? ((e.dtm_google_conversion_label = 'zVL9CJDA8XMQkqu3kwM'), !0)
                      : '65055' == t &&
                          ((e.dtm_google_conversion_label = '4BK-CNzlgXQQkqu3kwM'), !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Google Display Ad campaign for IaaS-146685',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!-- Google Code for IaaS/PaaS_Welcome&#12506;&#12540;&#12472; Conversion Page -->\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 846058898;\nvar google_conversion_language = "en";\nvar google_conversion_format = "3";\nvar google_conversion_color = "ffffff";\nvar google_conversion_label =  window.dtm_google_conversion_label;\nvar google_remarketing_only = false;\n/* ]]> */\n</script>\n<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">\n</script>\n',
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = ['63475', '64221', '64315', '65565', '65075'],
                      n = ['63476', '64222', '64316', '65566', '65076'],
                      a = _satellite.getVar('LP_id');
                    return -1 != t.indexOf(a)
                      ? ((e.dtm_google_conversion_label = 'zVL9CJDA8XMQkqu3kwM'), !0)
                      : -1 != n.indexOf(a) &&
                          ((e.dtm_google_conversion_label = '4BK-CNzlgXQQkqu3kwM'), !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua HCM Paid Search Google Re marketing Pixels  Campaign - 155087',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5b769f6a64746d683100349f-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=62356/i, /lp=62460/i, /lp=62348/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua IaaS/PaaS Campaign Google Conversion Tag-153005',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5b35fb9c64746d3ec4001140-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=68487/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua LAD SMB | Q3FY18 - December 21 2017-142753',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        "<!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the <head> and </head> tags on every page of your site.\n-->\n<!-- Global site tag (gtag.js) - DoubleClick -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=DC-3573286\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-3573286');\n</script>\n<!-- End of global snippet: Please do not remove -->",
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var e = [
                        '62729',
                        '62730',
                        '62750',
                        '62751',
                        '62758',
                        '62674',
                        '62675',
                        '62759',
                        '62760',
                        '62806',
                        '62563',
                        '62565',
                        '62687',
                        '62688',
                        '62802',
                        '62883',
                        '62884',
                        '62885',
                        '62886',
                        '62695',
                        '62800',
                        '62801',
                        '62841',
                        '62842',
                        '62761',
                        '62762',
                        '62763',
                        '62764',
                        '62765',
                        '62811',
                        '62993',
                        '62994',
                        '62850',
                        '62851',
                        '62803',
                        '62887',
                        '62888',
                        '62893',
                        '62894',
                        '62757',
                      ],
                      t = _satellite.getDataElement('LP_id');
                    return -1 != e.indexOf(t);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Modern Customer Experience Google Conversion Tag-154161',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5b5591b464746d43fa00038b-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: { URI: { include: [/lp=69867/i, /lp=71223/i] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua NAS ERP Q4FY18 - May 31 2018 - 151485',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5b11444464746d50800048e5-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = {
                        41337: { type: 'namer001', cat: 'gener0' },
                        41652: { type: 'namer002', cat: 'gener0' },
                      },
                      n = _satellite.getVar('LP_id');
                    return 'object' == typeof t[n]
                      ? ((e.type = t[n].type), (e.cat = t[n].cat), !0)
                      : 'object' == typeof t[location.pathname] &&
                          ((e.type = t[location.pathname].type),
                          (e.cat = t[location.pathname].cat),
                          !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua NAS ERP l Q3FY18 - January 9 2018 - 143309',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a56533764746d636700033a-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    t[54689] = { type: 'fy18n000', cat: 'mitre0' };
                    var n = _satellite.getDataElement('LP_id');
                    return (
                      'object' == typeof t[n] && ((e.cat = t[n].cat), (e.type = t[n].type), !0)
                    );
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua NAS HCM Q3FY18 - December 1 2017 - 141749',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a39549764746d108b00d25c-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    (t[55113] = { cat: 'hcmfi0' }),
                      (t[55114] = { cat: 'hcmfi00' }),
                      (t[57822] = { cat: 'hcmwo0' }),
                      (t[57823] = { cat: 'hcmwo00' });
                    var n = _satellite.getDataElement('LP_id');
                    return 'object' == typeof t[n] && ((e.cat = t[n].cat), !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua NAS HCM Q3FY18 - December 15 2017- 14249',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a39292464746d54a701ae0a-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    (t[63158] = { cat: 'hcmwo0' }), (t[63159] = { cat: 'hcmwo00' });
                    var n = _satellite.getDataElement('LP_id');
                    return 'object' == typeof t[n] && ((e.cat = t[n].cat), !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua NAS HCM Q3FY18 - February 20 2018 - 145754',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a8d81fc64746d1db0003adf-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    (t[63150] = { cat: 'hcmwo0' }),
                      (t[63151] = { cat: 'hcmwo00' }),
                      (t[63011] = { cat: 'succe0' }),
                      (t[63012] = { cat: 'succe00' }),
                      (t[62997] = { cat: 'succe0' }),
                      (t[62998] = { cat: 'succe00' }),
                      (t[57759] = { cat: 'hcmwo0' }),
                      (t[57758] = { cat: 'hcmwo00' }),
                      (t[64441] = { cat: 'socia0' }),
                      (t[64436] = { cat: 'socia00' });
                    var n = _satellite.getVar('LP_id');
                    return 'object' == typeof t[n] && ((e.cat = t[n].cat), !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua NAS SMB Q2FY19 - October 4 2018 - 158436',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5bb7397064746d3248000a19-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = {
                        74433: { cat: 'smber00-' },
                        74432: { cat: 'smbcx00b' },
                        74431: { cat: 'smbhc009' },
                        68510: { cat: 'smbcx00c' },
                        73736: { cat: 'smbcx00d' },
                        69798: { cat: 'smber00a' },
                        67369: { cat: 'smber00b' },
                        70291: { cat: 'smbhc00-' },
                        71150: { cat: 'smbhc00a' },
                        69858: { cat: 'smbge002' },
                        73501: { cat: 'smbge003' },
                      },
                      n = _satellite.getVar('LP_id');
                    return 'object' == typeof t[n] && ((e.cat = t[n].cat), !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua NAS SMB Q3FY18 - December 18 2017 - 142568',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a3bb0a964746d58a4001703-staging.js' }],
                    },
                  ],
                },
              ],
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    (t[57762] = { cat: 'smbcx003', type: 'oracl000' }),
                      (t[48378] = { cat: 'smbcx00', type: 'oracl000' }),
                      (t[54753] = { cat: 'smbcx001', type: 'oracl0' }),
                      (t[48377] = { cat: 'smbcx000', type: 'oracl0' }),
                      (t[57761] = { cat: 'smbcx004', type: 'oracl0' }),
                      (t[54354] = { cat: 'smbcx002', type: 'oracl0' }),
                      (t[54754] = { cat: 'smbcx000', type: 'oracl000' }),
                      (t[54919] = { cat: 'smber00', type: 'oracl0' }),
                      (t[55229] = { cat: 'smber002', type: 'oracl000' }),
                      (t[54920] = { cat: 'smber000', type: 'oracl000' }),
                      (t[55343] = { cat: 'smber004', type: 'oracl000' }),
                      (t[55342] = { cat: 'smber002', type: 'oracl0' }),
                      (t[55228] = { cat: 'smber000', type: 'oracl0' }),
                      (t[55353] = { cat: 'smber001', type: 'oracl0' }),
                      (t[54350] = { cat: 'smbhc000', type: 'oracl000' }),
                      (t[46363] = { cat: 'smbhc002', type: 'oracl0' }),
                      (t[46365] = { cat: 'smbhc002', type: 'oracl000' }),
                      (t[54349] = { cat: 'smbhc000', type: 'oracl0' }),
                      (t[55311] = { cat: 'smbhc003', type: 'oracl000' }),
                      (t[55344] = { cat: 'smbhc005', type: 'oracl0' }),
                      (t[55310] = { cat: 'smbhc004', type: 'oracl0' }),
                      (t[55345] = { cat: 'smbhc004', type: 'oracl000' }),
                      (t[48955] = { cat: 'smbcx0', type: 'oracl000' }),
                      (t[51189] = { cat: 'smbcx003', type: 'oracl0' }),
                      (t[51190] = { cat: 'smbcx002', type: 'oracl000' }),
                      (t[48954] = { cat: 'smbcx0', type: 'oracl0' }),
                      (t[48933] = { cat: 'smbcx00', type: 'oracl0' }),
                      (t[54355] = { cat: 'smbcx001', type: 'oracl000' }),
                      (t[48934] = { cat: 'smber00', type: 'oracl000' }),
                      (t[48809] = { cat: 'smber0', type: 'oracl0' }),
                      (t[55354] = { cat: 'smber003', type: 'oracl000' }),
                      (t[48769] = { cat: 'smber001', type: 'oracl000' }),
                      (t[56750] = { cat: 'smber005', type: 'oracl000' }),
                      (t[56749] = { cat: 'smber003', type: 'oracl0' }),
                      (t[48808] = { cat: 'smber0', type: 'oracl000' }),
                      (t[50090] = { cat: 'smbhc001', type: 'oracl000' }),
                      (t[50089] = { cat: 'smbhc003', type: 'oracl0' }),
                      (t[48504] = { cat: 'smbhc00', type: 'oracl0' }),
                      (t[48943] = { cat: 'smbhc0', type: 'oracl000' }),
                      (t[48944] = { cat: 'smbhc0', type: 'oracl0' }),
                      (t[48505] = { cat: 'smbhc00', type: 'oracl000' }),
                      (t['/smb/index.html'] = { cat: 'smbal00', type: 'oracl0' }),
                      (t['/smb/customer-experience.html'] = { cat: 'smbcx005', type: 'oracl0' }),
                      (t['/smb/finance.html'] = { cat: 'smber004', type: 'oracl0' }),
                      (t['/smb/hcm.html'] = { cat: 'smbhc007', type: 'oracl0' });
                    var n = _satellite.getDataElement('LP_id');
                    return 'object' == typeof t[n]
                      ? ((e.cat = t[n].cat), (e.type = t[n].type), !0)
                      : 'object' == typeof t[location.pathname] &&
                          ((e.cat = t[location.pathname].cat),
                          (e.type = t[location.pathname].type),
                          !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua NAS SMB Q3FY18 - February 13 2018-145350',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a84285964746d1db0000089-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    t[65924] = { cat: 'smbep0' };
                    var n = _satellite.getDataElement('LP_id');
                    return 'object' == typeof t[n] && ((e.cat = t[n].cat), !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua NAS SMB Q4FY18 - April 26 2018-149749',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5ae97c0d64746d0fe500330e-staging.js' }],
                    },
                  ],
                },
              ],
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    (t[68510] = { cat: 'smbcx007', type: 'oracl0' }),
                      (t[68511] = { cat: 'smbcx004', type: 'oracl000' });
                    var n = _satellite.getDataElement('LP_id');
                    return (
                      'object' == typeof t[n] && ((e.cat = t[n].cat), (e.type = t[n].type), !0)
                    );
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua NAS SMB l Q3FY18 - January 17 2018 - 145615',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a8ac87e64746d63ec001f77-staging.js' }],
                    },
                  ],
                },
              ],
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    (t[66047] = { cat: 'smbcx006' }),
                      (t['/smb/epm-cloud.html'] = { cat: 'smbep00' });
                    var n = _satellite.getDataElement('LP_id');
                    return 'object' == typeof t[n]
                      ? ((e.cat = t[n].cat), !0)
                      : 'object' == typeof t[location.pathname] &&
                          ((e.cat = t[location.pathname].cat), !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Oracle CX Web Google Display Ad campaign - 150934',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!-- Google Code for OMC_LP&#21040;&#36948; Conversion Page -->\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 836061479;\nvar google_conversion_label = "uydcCPDamoMBEKeS1Y4D";\nvar google_remarketing_only = false;\n/* ]]> */\n</script>\n<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">\n</script>',
                    },
                  ],
                },
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5b054d1864746d317c00a875-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=70483/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Oracle IaaS/PaaS Google Display Ad campaign - 153005',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!-- Google Code for &#12461;&#12515;&#12531;&#12506;&#12540;&#12531;_LP&#21040;&#36948; Conversion Page -->\n<!-- Google Code for Welcome Page CV Tag by TCI-->\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 802202278;\nvar google_conversion_label = "HOmrCI-0yYMBEKbFwv4C";\nvar google_remarketing_only = false;\n/* ]]> */\n</script>\n<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">\n</script>\n',
                    },
                  ],
                },
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5b34bb7e64746d17900043e8-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: { URI: { include: [/lp=70897/i, /lp=68486/i] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Oracle Marketing Cloud Eloqua LP Advertise Campaign-1149099 ',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!-- Google Code for OMC_&#36039;&#26009;DL&#12501;&#12457;&#12540;&#12512;&#26469;&#35370; Conversion Page Welcome -->\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 836061479;\nvar google_conversion_label = "73D0CJyxpIABEKeS1Y4D";\nvar google_remarketing_only = false;\n/* ]]> */\n</script>\n<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">\n</script>\n<noscript>\n<div style="display:inline;">\n<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/836061479/?label=73D0CJyxpIABEKeS1Y4D&amp;guid=ON&amp;script=0"/>\n</div>\n</noscript>',
                    },
                  ],
                },
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5adef43864746d4efc00d24d-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var e = ['68516', '67937', '67295', '68350'],
                      t = _satellite.getVar('LP_id');
                    return -1 != e.indexOf(t);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua Source Tracking Script',
              trigger: [
                {
                  command: 'loadBlockingScript',
                  arguments: [
                    {
                      sequential: !0,
                      scripts: [{ src: 'satellite-5b32143164746d604a00436d-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: ['go.oracle.com'] } },
              event: 'pagetop',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 161940',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5c0e405e64746d101a00b53d-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /lp=68350/i,
                    /lp=72723/i,
                    /lp=75205/i,
                    /lp=76369/i,
                    /lp=73778/i,
                    /lp=71223/i,
                    /lp=72727/i,
                    /lp=73833/i,
                    /lp=67937/i,
                    /lp=67295/i,
                    /lp=68516/i,
                  ],
                },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('truste_consent');
                  return 1 != e && 2 != e && 'false' == _satellite.getVar('countryExclusion');
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 161946',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5c0e516264746d6151012166-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=77312/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('truste_consent');
                  return 1 != e && 2 != e && 'false' == _satellite.getVar('countryExclusion');
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 162162',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 802202278;\nvar google_conversion_label = window.dtm_label;\nif(dtm_custom_params){\nvar google_custom_params = window.google_tag_params;\n}\nvar google_remarketing_only = window.dtm_remarketing;\n/* ]]> */\n</script>\n<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">\n</script>',
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=77663/i, /lp=77664/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var t = _satellite.getVar('truste_consent');
                  if (1 != t && 2 != t && 'false' == _satellite.getVar('countryExclusion')) {
                    var n = _satellite.getVar('LP_id');
                    return '77663' == n
                      ? ((e.dtm_label = 'Q4t7CK21yoMBEKbFwv4C'),
                        (e.dtm_remarketing = !0),
                        (dtm_custom_params = !0),
                        !0)
                      : '77664' == n &&
                          ((e.dtm_label = '035tCMu8m5EBEKbFwv4C'),
                          (e.dtm_remarketing = !1),
                          (dtm_custom_params = !1),
                          !0);
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 162470',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5c1a0c6a64746d488d010a52-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/^\/jp\/corporate\/contact\/$/i] },
                subdomains: { include: [/www.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                    e.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 163292',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5c3ef86464746d416301e1e5-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=78509/i, /lp=78510/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var t = _satellite.getVar('trusteConsent');
                  return (
                    !(
                      (-1 == t.truste_consent.indexOf(0) && -1 == t.truste_consent.indexOf(3)) ||
                      t.dnt ||
                      'false' != _satellite.getVar('countryExclusion')
                    ) &&
                    ('78509' == _satellite.getVar('LP_id')
                      ? ((e.google_tag_label = 'Q4t7CK21yoMBEKbFwv4C'),
                        (e.gtm_params = !0),
                        (e.google_tag_remarketing = !0))
                      : ((e.google_tag_label = 'JNXtCNvE-5IBEKbFwv4C'),
                        (e.gtm_params = !1),
                        (e.google_tag_remarketing = !1)),
                    !0)
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 163559',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5c3efe4e64746d615101d629-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=76369/i, /lp=72723/i, /lp=72727/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                    e.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 163820',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5c45d63264746d6cdb002536-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /lp=78888/i,
                    /lp=78889/i,
                    /lp=77951/i,
                    /lp=77963/i,
                    /lp=78442/i,
                    /lp=78495/i,
                    /lp=78497/i,
                    /lp=78499/i,
                    /lp=78501/i,
                    /lp=78503/i,
                    /lp=77952/i,
                    /lp=77965/i,
                    /lp=78443/i,
                    /lp=78496/i,
                    /lp=78498/i,
                    /lp=78500/i,
                    /lp=78502/i,
                    /lp=78504/i,
                    /lp=78657/i,
                  ],
                },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var t = _satellite.getVar('trusteConsent');
                  if (
                    (-1 == t.truste_consent.indexOf(0) && -1 == t.truste_consent.indexOf(3)) ||
                    t.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  )
                    return !1;
                  var n = _satellite.getVar('LP_id');
                  return '78888' == n ||
                    '77951' == n ||
                    '77963' == n ||
                    '78442' == n ||
                    '78495' == n ||
                    '78497' == n ||
                    '78499' == n ||
                    '78501' == n ||
                    '78503' == n ||
                    '78657' == n
                    ? ((e.google_tag_label = 'Q4t7CK21yoMBEKbFwv4C'),
                      (e.gtm_params = !0),
                      (e.google_tag_remarketing = !0),
                      !0)
                    : ('78889' == n ||
                        '77952' == n ||
                        '77965' == n ||
                        '78443' == n ||
                        '78496' == n ||
                        '78498' == n ||
                        '78500' == n ||
                        '78502' == n ||
                        '78504' == n) &&
                        ((e.google_tag_label = 'y1N1CMq0ppMBEKbFwv4C'),
                        (e.gtm_params = !1),
                        (e.google_tag_remarketing = !1),
                        !0);
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 164615',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [
                        { src: 'satellite-5c5415d364746d2076000d87-staging.js' },
                        { src: 'satellite-5c5415d364746d2076000d89-staging.js' },
                      ],
                    },
                  ],
                },
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5c5415d364746d2076000d88-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /^\/jp\/applications\/customer-experience\/uncovering-hype-around-innovative-technology.html/i,
                  ],
                },
                subdomains: { include: [/www.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                    e.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 166142',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5c87859c64746d4e3300394c-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=74439/i, /lp=74416/i, /lp=74560/i, /lp=74605/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                    e.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 166558',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5c8782ba64746d3ae4000627-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=79142/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                    e.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 167757',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [
                        { src: 'satellite-5c98a02064746d76a6007048-staging.js' },
                        { src: 'satellite-5c9a061464746d755b002eb9-staging.js' },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /\/jp\/applications\/customer-experience\/innovation-technologies-growth.html/i,
                    /\/jp\/applications\/customer-experience\/innovation-technologies-growth-form.html/i,
                  ],
                },
                subdomains: { include: [/www.oracle.com/i] },
              },
              conditions: [
                function () {
                  var t = _satellite.getVar('trusteConsent');
                  if (
                    (-1 == t.truste_consent.indexOf(0) && -1 == t.truste_consent.indexOf(3)) ||
                    t.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  )
                    return !1;
                  var n = e.location.pathname;
                  return '/jp/applications/customer-experience/innovation-technologies-growth.html' ==
                    n
                    ? ((e.google_tag_label = 'Q4t7CK21yoMBEKbFwv4C'),
                      (e.gtm_params = !0),
                      (e.google_tag_remarketing = !0),
                      !0)
                    : '/jp/applications/customer-experience/innovation-technologies-growth-form.html' ==
                        n &&
                        ((e.google_tag_label = '04S-CObnjpQBEKbFwv4C'),
                        (e.gtm_params = !1),
                        (e.google_tag_remarketing = !1),
                        !0);
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP Conversion Pixels 168871',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5cb07b2e64746d7c4e00351b-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=81193/i, /lp=81194/i, /lp=81180/i, /lp=81181/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var t = _satellite.getVar('trusteConsent');
                  if (
                    (-1 == t.truste_consent.indexOf(0) && -1 == t.truste_consent.indexOf(3)) ||
                    t.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  )
                    return !1;
                  var n = _satellite.getVar('LP_id');
                  return (
                    ('81181' != n && '81194' != n) || (e.thankspage = !0),
                    ('81180' != n && '81193' != n) || (e.thankspage = !1),
                    !0
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP Conversion Pixels AW-836061479 - 168040',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !0,
                      scripts: [{ src: 'satellite-5ca1e45764746d3bcf003738-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=72720/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                    e.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP Conversion Pixels AW-846058898 - 168040',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5ca1e23d64746d494c001161-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /lp=78210/i,
                    /lp=56961/i,
                    /lp=56882/i,
                    /lp=77312/i,
                    /lp=66521/i,
                    /lp=61300/i,
                  ],
                },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                    e.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP Conversion Pixels AW-846058898-1 - 168040',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5ca1e31164746d1c39000835-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [/lp=77199/i, /lp=77325/i, /lp=77213/i, /lp=77292/i, /lp=76756/i],
                },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                    e.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Eloqua-JP EPM  Remarketing Pixels 164867',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5c5d4cef64746d510e002cba-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=56960/i, /lp=77311/i, /lp=72719/i, /^\/cxjp/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                    e.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Form Complete Uber Tag',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a3022dd64746d5703000ff7-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { exclude: [/\/\btechnetwork\//i, /\/\bpartners\//i, /^\/index.html/i] },
                subdomains: {
                  include: [
                    /www.oracle.com/i,
                    /go.oracle.com/i,
                    /blogs.oracle.com/i,
                    /community.oracle.com/i,
                  ],
                },
              },
              conditions: [
                function () {
                  var n = ['71796', '68405', '68406'],
                    a = _satellite.getVar('trusteConsent');
                  if (
                    (-1 == a.truste_consent.indexOf(0) && -1 == a.truste_consent.indexOf(3)) ||
                    a.dnt ||
                    'false' != _satellite.getVar('countryExclusion') ||
                    -1 != location.search.indexOf('testUber=true') ||
                    -1 != t.referrer.indexOf('explore.oracle.com')
                  )
                    return !1;
                  if ('go.oracle.com' == location.host) {
                    if (1 == _satellite.getVar('apacRegion')) {
                      var i = _satellite.getVar('LP_id');
                      return -1 != n.indexOf(i);
                    }
                    return !0;
                  }
                  return (
                    !(
                      'www.oracle.com' != location.host ||
                      (!e.formHtmlName && -1 == s.eVar24.indexOf('success=true'))
                    ) && 1 != _satellite.getVar('apacRegion')
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Global Footer Rule',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5919e65464746d1994013896-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { exclude: [/\/\btechnetwork\//i] },
                subdomains: { include: ['www.oracle.com', /www-sites.oracle.com/i] },
              },
              event: 'pagebottom',
            },
            {
              name: 'Global Header Rule',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-58f99cfe64746d198e008eb2-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  exclude: [
                    /\/ru\//i,
                    /\/corporate\/acquisitions\/micros\//i,
                    /\/corporate\/accessibility\//i,
                  ],
                },
              },
              conditions: [
                function () {
                  return (
                    -1 == t.referrer.indexOf('explore.oracle.com') &&
                    1 != _satellite.getVar('apacRegion')
                  );
                },
              ],
              event: 'pagetop',
            },
            {
              name: 'Global Site Tag',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !0,
                      scripts: [{ src: 'satellite-5be328f764746d415a004e59-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  exclude: [
                    /\/\btechnetwork\//i,
                    /\/\bpartners\//i,
                    /\/corporate\/accessibility\//i,
                  ],
                },
                subdomains: {
                  include: [
                    /www.oracle.com/i,
                    /www-sites.oracle.com/i,
                    /blogs.oracle.com/i,
                    /community.oracle.com/i,
                    /go.oracle.com/i,
                    /www-sites-stage.oracle.com/i,
                    /go-stage.oracle.com/i,
                    /www-stage.oracle.com/i,
                    /blogs-stage.oracle.com/i,
                    /community-stage.oracle.com/i,
                    /auto.oracle.com/i,
                  ],
                },
              },
              conditions: [
                function () {
                  var n = [
                      '/cn/cloud/workload.html',
                      '/cn/cloud/data-integration.html',
                      '/cn/cloud/enterprise-mobility.html',
                      '/cn/cloud/analytics.html',
                      '/cn/cloud/management-security-cloud.html',
                    ],
                    a = ['71796', '68405', '68406'];
                  if (
                    ('www.oracle.com' == e.location.host &&
                      '/index.html' == e.location.pathname) ||
                    -1 != t.referrer.indexOf('explore.oracle.com')
                  )
                    return !1;
                  var i = _satellite.getVar('trusteConsent');
                  if (
                    (-1 == i.truste_consent.indexOf(0) && -1 == i.truste_consent.indexOf(3)) ||
                    i.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  )
                    return !1;
                  if (1 == _satellite.getVar('apacRegion')) {
                    var r = _satellite.getVar('LP_id');
                    return (
                      ('www.oracle.com' == e.location.host &&
                        -1 != n.indexOf(e.location.pathname)) ||
                      ('go.oracle.com' == e.location.host && -1 != a.indexOf(r))
                    );
                  }
                  return !0;
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Global Site Tag - Japan',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !0,
                      scripts: [{ src: 'satellite-5c86425d64746d7f58003a21-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /lp=79141/i,
                    /lp=79142/i,
                    /lp=74439/i,
                    /lp=74416/i,
                    /lp=74560/i,
                    /lp=74605/i,
                    /lp=78210/i,
                    /lp=56961/i,
                    /lp=56882/i,
                    /lp=77312/i,
                    /lp=66521/i,
                    /lp=61300/i,
                    /lp=77199/i,
                    /lp=77325/i,
                    /lp=77213/i,
                    /lp=77292/i,
                    /lp=76756/i,
                  ],
                },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                    e.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Javaone Registration',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-590cd75d64746d72dc001fba-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: { URI: { include: [/\bjavaone\/register\b/i] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'MOAT Content  Tag',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script>\n(function(){function D(){for(var a=[8],c=1;2>=c;c++)a.push(8+c),a.push(8-c);a=a[Math.floor(Math.random()*a.length)];return{b:a,a:0==Math.floor(Math.random()*a)}}function l(a){var c=a=a.replace(":","");try{for(var d=0;100>d&&(a=decodeURIComponent(a),c!=a)&&!a.match(/^http(s)?\\:/);d++)c=a}catch(b){}return a.replace(/(^\\s+|\\s+$)/g,"")}try{var z=function(a,c,d,b){return a[c]===b&&0===d||a[d]===b&&0===c};if(!location||!location.hostname||!location.pathname)return!1;var e=document.location.hostname.replace(/^www\\./,\n""),t=function(){for(var a,c=document.getElementsByTagName("meta"),d,b=0,e=c.length;b<e;b++)if(d=c[b],"og:title"===d.getAttribute("property")){a=d.getAttribute("content");break}a||(a=document.title||"Untitled");return a}(),b={},b=function(a,c,b){a.l1=c;a.l2=b;a.l3="__page__";a.l4="-";return a}(b,e,t),m=(new Date).getTime(),n=Math.floor(Math.random()*Math.pow(10,12)),p,f;f=D();p=f.a?f.b:0;b.zmoatab_cm=p;b.t=m;b.de=n;b.zMoatAB_SNPT=!0;var q;q=p?p:1;var u;u=f?f.a?!0:!1:!0;var e=[],v=(new Date).getTime().toString(35),\nw=[l(b.l1),l(b.l2),l(b.l3),l(b.l4)].join(":"),t=/zct[a-z0-9]+/i,g="",h;for(h in b)b.hasOwnProperty(h)&&h.match(t)&&(g+="&"+h+"="+b[h]);var A=document.referrer.match(/^([^:]{2,}:\\/\\/[^\\/]*)/),r=A?A[1]:document.referrer,x=["e=17","d="+encodeURIComponent(w),"de="+n,"t="+m,"i=ORACLE_CONTENT1","cm="+q,String("j="+encodeURIComponent(r)+g),"mp=1","ac=1","pl=1","bq=10","vc=2"],v="https://g5r0xwdu5kou-a.akamaihd.net/"+v+".gif?",y=function(a){for(var c="",b=0;b<a.length;b++)c+=(0===b?"":"&")+a[b];return c}(function(a){for(var b=\n0;b<a.length;b++){var d=Math.floor(Math.random()*(a.length-b)+b),e=a[b],f=z(a,b,d,x[1]);z(a,b,d,x[0])||f?b--:(a[b]=a[d],a[d]=e)}return a}(x)),y=v+y+"&cs=0",E="https://px.moatads.com/pixel.gif?e=17&d="+encodeURIComponent(w)+"&de="+n+"&t="+m+"&i=ORACLE_CONTENT1&cm="+q+"&j="+encodeURIComponent(r)+g+"&mp=0&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0",F="https://px.moatads.com/pixel.gif?e=17&d="+encodeURIComponent(w)+"&de="+n+"&t="+m+"&i=ORACLE_CONTENT1&cm="+q+"&j="+encodeURIComponent(r)+g+"&ku=1&ac=1&pl=1&bq=10&ad_type=img&vc=2&cs=0";\nu&&((new Image).src=y,(new Image).src=E);for(var B in b)e.push(B+"="+encodeURIComponent(b[B]));var e=e.join("&"),e=e+"&vc=2",k=document.createElement("script");k.type="text/javascript";k.async=!0;u&&(k.onerror=function(){(new Image).src=F});var C=document.getElementsByTagName("script")[0];C.parentNode.insertBefore(k,C);k.src="https://z.moatads.com/oraclecontent19897089498/moatcontent.js#"+e}catch(a){try{var G="//pixel.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=MOATCONTENTABSNIPPET1"+\ng+"&vc=2&ac=1&k="+encodeURIComponent(a)+"&j="+encodeURIComponent(r)+"&cs="+(new Date).getTime();(new Image).src=G}catch(c){}}})();\n</script>\n',
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/\/corporate\//i] },
                subdomains: { include: [/www.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                    e.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Maxymiser Core Script',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></script>',
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /^\/index.html/i,
                    '/_qa/index.html',
                    /^\/_qa\/index2.html/i,
                    /^\/tryit.html/i,
                    /^\/openworld\/index.html/i,
                    /^\/code-one\/index.html/i,
                    /^\/corporate\/events\/application-development-day.html/i,
                    /^\/openworld\/cloudfest.html/i,
                    /^\/openworld\/register.html/i,
                    /^\/applications\/human-capital-management\//i,
                    /^\/cloudday\/na\//i,
                    /^\/moderncx\//i,
                    /^\/modern-business-experience\//i,
                    /\/corporate\/acquisitions\/micros\//i,
                    '/try-it.html',
                    /^\/uk\/area-of-interest\/it.html/i,
                    /^\/database\/auto-db-dummies-book-form.html/i,
                    '/uk/area-of-interest/it/innovation-culture-webinar.html',
                    '/uk/area-of-interest/it/innovation-and-it.html',
                  ],
                },
                subdomains: { include: ['www.oracle.com', 'www-sites.oracle.com'] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return (
                    console.log(e),
                    !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                      e.dnt
                    )
                  );
                },
              ],
              event: 'pagetop',
            },
            {
              name: 'Maxymiser Core Script - Eloqua',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></script>',
                    },
                  ],
                },
              ],
              scope: {
                URI: {
                  include: [
                    /lp=55466/i,
                    /lp=58625/i,
                    /lp=59961/i,
                    /lp=56007/i,
                    /lp=56008/i,
                    /lp=54859/i,
                    /lp=54858/i,
                    /lp=55467/i,
                    /lp=66717/i,
                    /lp=66798/i,
                    /lp=41254/i,
                    /lp=63344/i,
                    /lp=69090/i,
                    /lp=41253/i,
                    /lp=63343/i,
                    /lp=70980/i,
                    /lp=71091/i,
                    /lp=71092/i,
                    /lp=54440/i,
                    /lp=71477/i,
                    /lp=72461/i,
                    /lp=72589/i,
                    /lp=73252/i,
                    /lp=76346/i,
                    /lp=49044/i,
                    /lp=54858/i,
                    /lp=54859/i,
                    /lp=54878/i,
                    /lp=54879/i,
                    /lp=54881/i,
                    /lp=54882/i,
                    /lp=54883/i,
                    /lp=54884/i,
                    /lp=67877/i,
                    /lp=67878/i,
                  ],
                },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                    e.dnt
                  );
                },
              ],
              event: 'pagetop',
            },
            {
              name: 'Maxymiser-Global',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script type="text/javascript" src="//service.maxymiser.net/cdn/oracle/js/mmcore.js"></script>',
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/blogs.oracle.com/i] } },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return !(
                    (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(2)) ||
                    e.dnt
                  );
                },
              ],
              event: 'pagetop',
            },
            {
              name: 'NAS Communications GBU Q3FY18 - December 5 2017 - 141951',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a32368064746d0864005882-staging.js' }],
                    },
                  ],
                },
              ],
              conditions: [
                function () {
                  if (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  ) {
                    var t = [];
                    return (
                      (t[
                        '/industries/communications/enterprise/products/live-experience-cloud/index.html'
                      ] = { type: 'fy18c0', cat: 'oracl0' }),
                      (t[
                        '/industries/communications/enterprise/products/session-border-controller/index.html'
                      ] = { type: 'fy18c000', cat: 'oracl0' }),
                      (t[
                        '/industries/communications/enterprise/products/interactive-session-recorder/index.html'
                      ] = { type: 'fy18c000', cat: 'oracl000' }),
                      (t[
                        '/industries/communications/enterprise/products/operations-monitor/index.html'
                      ] = { type: 'fy18c000', cat: 'oracl001' }),
                      'object' == typeof t[location.pathname] &&
                        ((e.type = t[location.pathname].type),
                        (e.cat = t[location.pathname].cat),
                        !0)
                    );
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'NAS SMB Q1FY19 - August 30 2018 - 156377',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5b8fe50d64746d3d6a000dc3-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/blogs.oracle.com/i] } },
              conditions: [
                function () {
                  var t = _satellite.getVar('truste_consent');
                  if (1 != t && 2 != t && 'false' == _satellite.getVar('countryExclusion')) {
                    var n = {
                      '/smb/6-myths-about-configure-price-quote-debunked': { cat: 'smbcx009' },
                      '/smb/what-does-it-take-to-get-on-the-inc-5000-learn-from-those-who-have-been-there': {
                        cat: 'smbcx00-',
                      },
                      '/smb/3-demands-you-must-embrace-to-make-your-customers-happy': {
                        cat: 'smbcx00a',
                      },
                      '/smb/3-ideas-to-make-your-financial-close-more-efficient': {
                        cat: 'smber007',
                      },
                      '/smb/how-to-revolutionize-your-reporting': { cat: 'smber008' },
                      '/smb/the-best-planning-methods-for-strategic-smb-growth': {
                        cat: 'smber009',
                      },
                      '/smb/losing-sleep-over-talent-learn-the-top-talent-concerns-of-smb-leaders-and-how-to-fix-them': {
                        cat: 'smbhc006',
                      },
                      '/smb/10-ways-to-build-an-effective-engaged-workforce': { cat: 'smbhc007' },
                      '/smb/need-top-talent-how-to-attract-better-people-with-culture-stories': {
                        cat: 'smbhc008',
                      },
                      '/smb/3-reasons-to-digitally-transform-your-business': { cat: 'smbge000' },
                      '/smb/6-ways-to-automate-your-smb-with-ai': { cat: 'smbge001' },
                    };
                    return (
                      'object' == typeof n[location.pathname] &&
                      ((e.cat = n[location.pathname].cat), !0)
                    );
                  }
                  return !1;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'OTN Software Downloads Script',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script data-reqjq async="async" language="JavaScript" data-src="https://www.oracle.com/a/tech/docs/otn-osdc.js"></script>',
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/_qa\/test-otn-sw-downloads.html/i, /\/technologies\//i] },
              },
              conditions: [
                function () {
                  return 0 != t.getElementsByClassName('otn-software').length;
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Oracle Startup - Landing Page',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: Oracle Startup - Landing Page\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/startup/index.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 11/21/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=fy18n006;cat=oracl0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=fy18n006;cat=oracl0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                    },
                  ],
                },
              ],
              scope: { URI: { include: [/startup\/index.html/i] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Qualified Lead Uber Tag',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a3819d664746d3f4e011b2a-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { exclude: [/\/\btechnetwork\//i, /\/\bpartners\//i] },
                subdomains: { include: [/www.oracle.com/i, /go.oracle.com/i] },
              },
              conditions: [
                function () {
                  var e = _satellite.getVar('trusteConsent');
                  return (
                    !(
                      (-1 == e.truste_consent.indexOf(0) && -1 == e.truste_consent.indexOf(3)) ||
                      e.dnt ||
                      'false' != _satellite.getVar('countryExclusion') ||
                      -1 != t.referrer.indexOf('explore.oracle.com')
                    ) &&
                    ('go.oracle.com' == location.host ||
                      (!_satellite.getVar('scData').found &&
                        -1 != ['event23', 'event27'].indexOf(s.events)))
                  );
                },
              ],
              event: 'windowload',
            },
            {
              name: 'Rimini Street schema.org JSON',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script type="application/ld+json">\n{\n  "@context": "http://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [\n    { \n      "@type": "ListItem", \n      "position": "1", \n      "item": { \n        "@id": "https://www.oracle.com/support/", \n        "name": "Support" \n      } \n    },\n    { \n      "@type": "ListItem", \n      "position": "2", \n      "item": { \n        "@id": "https://www.oracle.com/rimini-street/", \n        "name": "Rimini Street" \n      } \n    }\n  ]\n}\n</script>\n<script type="application/ld+json">\n{\n  "@context": "http://schema.org",\n  "@type": "NewsArticle",\n  "headline": "Court Orders Rimini Street to Comply with Permanent Injunction Prohibiting Further Infringement",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://www.oracle.com/assets/ct13-autonomous-db-self-driving-5037183.png"\n  },\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://www.oracle.com/corporate/pressrelease/rimini-street-110718.html"\n  },\n  "description": "On Monday, a federal appeals court rejected Rimini Street\'s motion to stay and effectively delay a permanent injunction issued by the Federal District Court in Nevada.",\n  "datePublished": "2018-11-07",\n  "dateModified": "2018-11-07",\n  "author": {\n    "@type": "Organization",\n    "name": "Oracle"\n  },\n  "publisher": {\n    "@type": "Organization",\n    "name": "Oracle",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://www.oracle.com/webfolder/s/brand/assets/i/specimens/identity/logo/badge-color-print.gif"\n    }\n  },\n  "articleBody": "On Monday, a federal appeals court rejected Rimini Street\'s motion to stay and effectively delay a permanent injunction issued by the Federal District Court in Nevada. That injunction prohibits Rimini Street from engaging in specific unlawful practices in connection with its core business practices as found in Oracle\'s 2015 copyright infringement trial against Rimini Street and its founder, Seth Ravin. The trial court had determined earlier that the more than $100 million that Rimini Street paid to Oracle in damages following trial was inadequate to fully compensate Oracle for Rimini Street\'s copyright infringement, citing \\"Rimini Street\'s conscious disregard for Oracle\'s software copyrights\\" and the fact that Rimini Street\'s business model \\"was built entirely on its infringement of Oracle\'s copyrighted software.\\" The Court ruled that Rimini Street can only provide support for Oracle\'s PeopleSoft, J.D. Edwards, Siebel, and Database software subject to certain court-mandated restrictions, as set forth in the injunction. While Rimini Street made public statements suggesting that it can comply with the injunction without changing its business model, it told the federal appeals court a different story in court filings. Rimini Street instead argued that the \\"injunction goes far beyond the changes that Rimini Street [already] made in response\\" to the Nevada court\'s rulings, and would therefore harm its business. Rimini Street must now comply with all the terms of the injunction while its latest appeal is pending.\'We are grateful that the Ninth Circuit Court of Appeals denied Rimini Street\'s latest attempt to delay justice. The federal courts in this country have appropriately recognized that the only way to stop serial infringers such as Rimini Street is to subject them to detailed, court-ordered prohibitions against unlawful practices and subject them to contempt of court penalties for any breach. Oracle will continue to be unrelenting in its mission to stop the infringement of its intellectual property rights,\' said Dorian Daley, Oracle\'s Executive Vice President and General Counsel."\n}\n</script>\n<script type="application/ld+json">\n{\n  "@context": "http://schema.org",\n  "@type": "NewsArticle",\n  "headline": "Federal Court Rules Oracle Is Entitled to a Permanent Injunction Against Rimini Street, Awards Attorneys\' Fees",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://www.oracle.com/assets/ct13-autonomous-db-self-securing-5037185.png"\n  },\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://www.oracle.com/corporate/pressrelease/rimini-street-081418.html"\n  },\n  "description": "Today, for the second time, a Federal Court in Nevada granted Oracle\'s motion for a permanent injunction against Rimini Street for years of infringement of Oracle\'s copyrights.",\n  "datePublished": "2018-08-14",\n  "dateModified": "2018-08-14",\n  "author": {\n    "@type": "Organization",\n    "name": "Oracle"\n  },\n  "publisher": {\n    "@type": "Organization",\n    "name": "Oracle",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://www.oracle.com/webfolder/s/brand/assets/i/specimens/identity/logo/badge-color-print.gif" \n    }\n  },\n  "articlebody": "Today, for the second time, a Federal Court in Nevada granted Oracle\'s motion for a permanent injunction against Rimini Street for years of infringement of Oracle\'s copyrights. In an opinion notable for its strong language condemning Rimini Street\'s actions, the Court made clear that since its inception, Rimini\'s business \\"was built entirely on its infringement of Oracle\'s copyrighted software.\\" The Court also highlighted Rimini\'s \\"conscious disregard\\" for Oracle\'s copyrights and Rimini\'s \\"significant litigation misconduct\\" in granting Oracle\'s motion for its attorneys\' fees to be paid. \\"As the Court\'s Order today makes clear, Rimini Street\'s business has been built entirely on unlawful conduct, and Rimini\'s executives have repeatedly lied to cover up their company\'s illegal acts. Rimini, which admits that it is the subject of an ongoing federal criminal investigation, has proven itself to be disreputable, and it seems very clear that it will not stop its unlawful conduct until a Court orders it to stop. Oracle is grateful that today the Federal Court in Nevada did just that,\\" said Dorian Daley, Oracle\'s Executive Vice President and General Counsel. The Court noted that it was Rimini\'s brazen misconduct that enabled it to \'rapidly build\' its infringing business, while at the same time irreparably damaging Oracle because Rimini\'s very business model \\"eroded the bonds and trust that Oracle has with its customers.\\" It also stressed that for over five years of litigation, \\"literally up until trial\\", Rimini Street denied the allegations of infringement. At trial, however, Rimini CEO Seth Ravin, who was also a defendant, changed his story and admitted for the first time that Rimini Street did in fact engage in all the infringing activities that Oracle had identified. Finally, the Court declared that over $28M in attorneys\' fees should be awarded to Oracle because of Rimini Street\'s significant litigation misconduct in this action. Rimini comments to the market that this award would have to be returned to Rimini have proven to be false and misleading, like so many of its actions and assurances to customers and others."\n}\n</script>\n<script type="application/ld+json">\n{\n  "@context": "http://schema.org",\n  "@type": "NewsArticle",\n  "headline": "Oracle Will Seek Affirmation of Cost Award in the United States Supreme Court",\n  "image": {\n    "@type": "ImageObject",\n    "url": "https://www.oracle.com/assets/ct13-autonomous-db-self-repairing-5037184.png"\n  },\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://www.oracle.com/corporate/pressrelease/oracle-statement-092718.html"\n  },\n  "description": "Today\'s United States Supreme Court grant of certiorari in the Rimini case is limited to a narrow issue regarding an award of more than $12 million in litigation costs that Rimini was ordered to pay to Oracle.",\n  "datePublished": "2018-09-27",\n  "dateModified": "2018-09-27",\n  "author": {\n    "@type": "Organization",\n    "name": "Oracle"\n  },\n  "publisher": {\n    "@type": "Organization",\n    "name": "Oracle",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://www.oracle.com/webfolder/s/brand/assets/i/specimens/identity/logo/badge-color-print.gif"\n    }\n  }\n  ,\n  "articlebody": "Today\'s United States Supreme Court grant of certiorari in the Rimini Street case is limited to a narrow issue regarding an award of more than $12 million in litigation costs that Rimini Street was ordered to pay to Oracle. This award came after a jury found that Rimini Street infringed 93 Oracle copyrights, and this costs appeal has zero impact on the resolved issue that Rimini Street infringed 93 copyrights and the jury award of compensatory damages. In 2016, the trial court found that Oracle was entitled to an award of attorneys\' fees and costs \\"because of Rimini\'s repeated instances of copyright infringement and its significant litigation misconduct.\\" While the Supreme Court will take up this narrow costs issue as a matter of law, the underlying conduct is not in question. \\"We look forward to addressing this costs issue in our nation\'s highest court, and we believe that the Court should reject the attempt by Rimini Street-a dishonest, serial infringer-to avoid fully compensating Oracle for Rimini\'s misconduct,\\" said Dorian Daley, Oracle\'s Executive Vice President and General Counsel."\n}\n</script>\n<script type="application/ld+json">\n{\n  "@context": "http://schema.org",\n  "@type": "VideoObject",\n  "name": "Why Cybersecurity Matters and Why You Should Never Compromise",\n  "description": "Global cybercrime headlines reflect the new normal. Hear from Oracle\'s Juan Jones, SVP, Global Support Renewal Sales, share his insights on the risk of third-party and self-maintenance support models while identifying their limitations.",\n  "thumbnailUrl": "https://oracle-a.akamaihd.net/aug2014/1460825906/201804/1920/1460825906_5778650349001_5778642544001-vs.jpg",\n  "uploadDate": "2014-06-17",\n  "duration": "PT7M50S",\n  "contentUrl": "https://video.oracle.com/detail/video/5778642544001",\n  "embedUrl": "https://video.oracle.com/detail/video/5778642544001"\n}\n</script>',
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/^\/rimini-street\/$/i] },
                subdomains: { include: [/www.oracle.com/i] },
              },
              event: 'pagebottom',
            },
            {
              name: 'SMB Commerce Cloud',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB Commerice Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/commerce-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx000;cat=smbco0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx000;cat=smbco0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                    },
                  ],
                },
              ],
              scope: { URI: { include: ['smb/commerce-cloud'] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'SMB Customer Stories',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB Customer Stories\nURL of the webpage where the tag is expected to be placed: http://https://www.oracle.com/smb/customers.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcu0;cat=smbcu0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcu0;cat=smbcu0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                    },
                  ],
                },
              ],
              scope: { URI: { include: ['smb/customers'] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'SMB EPM Cloud',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB EPM Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/epm-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbep0;cat=smbep0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbep0;cat=smbep0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                    },
                  ],
                },
              ],
              scope: { URI: { include: ['smb/epm-cloud'] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'SMB ERP Cloud',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB ERP Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/erp-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smber0;cat=smber0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smber0;cat=smber0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                    },
                  ],
                },
              ],
              scope: { URI: { include: ['smb/erp-cloud'] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'SMB HR Cloud',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB HR Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/hr-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbhr0;cat=smbhr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbhr0;cat=smbhr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                    },
                  ],
                },
              ],
              scope: { URI: { include: ['smb/hr-cloud'] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'SMB IT',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB IT\nURL of the webpage where the tag is expected to be placed: https://go.oracle.com/smb-it\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 12/21/2016\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbgo0;cat=smbit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbgo0;cat=smbit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                    },
                  ],
                },
              ],
              scope: { URI: { include: ['smb/it'] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'SMB Sales Cloud',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB Sales Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/sales-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx0;cat=smbsa0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx0;cat=smbsa0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                    },
                  ],
                },
              ],
              scope: { URI: { include: ['smb/sales-cloud'] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'SMB Service Cloud',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB Service Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/service-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx00;cat=smbse0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbcx00;cat=smbse0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                    },
                  ],
                },
              ],
              scope: { URI: { include: ['smb/service-cloud'] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'SMB Talent Management Cloud',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<!--\nStart of DoubleClick Floodlight Tag: Please do not remove\nActivity name of this tag: SMB Talent management Cloud\nURL of the webpage where the tag is expected to be placed: https://www.oracle.com/smb/talent-management-cloud.html\nThis tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.\nCreation Date: 06/15/2017\n-->\n<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbta0;cat=smbta0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://3573281.fls.doubleclick.net/activityi;src=3573281;type=smbta0;cat=smbta0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->',
                    },
                  ],
                },
              ],
              scope: { URI: { include: ['smb/talent-management-cloud'] } },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent')
                  );
                },
              ],
              event: 'pagebottom',
            },
            {
              name: 'Stage Scripts',
              trigger: [
                {
                  command: 'writeHTML',
                  arguments: [
                    {
                      html:
                        '<script>\n \t \tvar sc_product = _satellite.getVar(\'salesChatProductId\');\n    var x = document.getElementsByClassName("atgchat-link");\n    for (var i = 0; i < x.length; i++) {\n    name = "ochat";\n        arr = x[i].className.split(" ");\n        if (arr.indexOf(name) == -1) {\n            x[i].className += " " + name;\n        }\n   }\n</script>\n<script data-reqjq src="//www.oracle.com/asset/web/js/oracle-chat.js" id="oracle_chat" data-scchannel="SC OTN" data-path="/webfolder/assets/chat-translation-data.json"></script>',
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/^\/technetwork\//i] },
                subdomains: {
                  include: [
                    /www-content.oracle.com/i,
                    /www-content-stage.oracle.com/i,
                    /www-portal-stage.oracle.com/i,
                  ],
                },
              },
              event: 'pagebottom',
            },
          ],
          rules: [
            {
              name: 'Consideration Prospecting UBER TAG Video CTA ',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a057a6f64746d7042005650-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { exclude: [/\/\btechnetwork\//i, /\/\bpartners\//i, /^\/index.html/i] },
                subdomains: {
                  include: [
                    /www.oracle.com/i,
                    /go.oracle.com/i,
                    /community.oracle.com/i,
                    /blogs.oracle.com/i,
                  ],
                },
              },
              conditions: [
                function () {
                  var t = _satellite.getVar('trusteConsent');
                  return (
                    !(
                      (-1 == t.truste_consent.indexOf(0) && -1 == t.truste_consent.indexOf(3)) ||
                      t.dnt ||
                      'false' != _satellite.getVar('countryExclusion')
                    ) &&
                    !_satellite.getVar('scData').found &&
                    (s.products
                      ? ((e.ctaVideoText =
                          ';' === s.products.charAt(0) ? s.products.slice(1) : s.products),
                        (e.ctaVideoText += ':' + $(this).text()))
                      : (e.ctaVideoText = ''),
                    !0)
                  );
                },
              ],
              selector: '.bcc_cta a',
              eventHandlerOnElement: !0,
              event: 'click',
              bubbleFireIfParent: !0,
              bubbleFireIfChildFired: !0,
              bubbleStop: !1,
            },
            {
              name: 'Consideration Prospecting UBER TAG Video Starts',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !0,
                      scripts: [{ src: 'satellite-5a0b773364746d153d006f82-staging.js' }],
                    },
                  ],
                },
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a057aff64746d07fd004f1d-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { exclude: [/\/\btechnetwork\//i, /\/\bpartners\//i, /^\/index.html/i] },
                subdomains: {
                  include: [
                    /www.oracle.com/i,
                    /go.oracle.com/i,
                    /community.oracle.com/i,
                    /blogs.oracle.com/i,
                  ],
                },
              },
              conditions: [
                function () {
                  var t = [
                      '/cn/cloud/workload.html',
                      '/cn/cloud/data-integration.html',
                      '/cn/cloud/enterprise-mobility.html',
                      '/cn/cloud/analytics.html',
                      '/cn/cloud/management-security-cloud.html',
                    ],
                    n = ['71796', '68405', '68406', '71795'],
                    a = _satellite.getVar('trusteConsent');
                  if (
                    (-1 == a.truste_consent.indexOf(0) && -1 == a.truste_consent.indexOf(3)) ||
                    a.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  )
                    return !1;
                  if (1 == _satellite.getVar('apacRegion')) {
                    var i = _satellite.getVar('LP_id');
                    return -1 != n.indexOf(i) || -1 != t.indexOf(e.location.pathname);
                  }
                  return !0;
                },
              ],
              selector: 'video',
              eventHandlerOnElement: !0,
              event: 'videoplayed(1s)',
              bubbleFireIfParent: !0,
              bubbleFireIfChildFired: !0,
              bubbleStop: !1,
            },
            {
              name: 'Consideration Prospecting UBER TAG Video Starts - Eloqua',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a4ec4e964746d581800010e-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  var t = [
                      '/cn/cloud/workload.html',
                      '/cn/cloud/data-integration.html',
                      '/cn/cloud/enterprise-mobility.html',
                      '/cn/cloud/analytics.html',
                      '/cn/cloud/management-security-cloud.html',
                    ],
                    n = ['71796', '68405', '68406', '71795'],
                    a = _satellite.getVar('trusteConsent');
                  if (
                    (-1 == a.truste_consent.indexOf(0) && -1 == a.truste_consent.indexOf(3)) ||
                    a.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  )
                    return !1;
                  if (1 == _satellite.getVar('apacRegion')) {
                    var i = _satellite.getVar('LP_id');
                    return -1 != n.indexOf(i) || -1 != t.indexOf(e.location.pathname);
                  }
                  return !0;
                },
              ],
              selector:
                ".vjs-poster,button.vjs-big-play-button,a[rel='vbox'][href*='bcid'],button.vjs-play-control",
              eventHandlerOnElement: !0,
              event: 'click',
              bubbleFireIfParent: !0,
              bubbleFireIfChildFired: !0,
              bubbleStop: !1,
            },
            {
              name: 'Eloqua Google Conversion Tag - 154756',
              trigger: [
                {
                  command: 'loadIframe',
                  arguments: [
                    {
                      pages: [
                        { src: 'satellite-5b6416a864746d11bf0003d3-staging.html', data: [] },
                      ],
                    },
                  ],
                },
              ],
              scope: {
                URI: { include: [/lp=72720/i] },
                subdomains: { include: [/go.oracle.com/i] },
              },
              conditions: [
                function () {
                  return (
                    1 != _satellite.getVar('truste_consent') &&
                    2 != _satellite.getVar('truste_consent') &&
                    'false' == _satellite.getVar('countryExclusion')
                  );
                },
              ],
              selector: 'a#downloadFilePDF',
              event: 'click',
              bubbleFireIfParent: !0,
              bubbleFireIfChildFired: !0,
              bubbleStop: !1,
            },
            {
              name: 'File Download Link',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a057a0d64746d7d40003e57-staging.js' }],
                    },
                  ],
                },
              ],
              scope: {
                URI: { exclude: [/\/\btechnetwork\//i, /\/\bpartners\//i, /^\/index.html/i] },
                subdomains: {
                  include: [
                    /www.oracle.com/i,
                    /go.oracle.com/i,
                    /community.oracle.com/i,
                    /blogs.oracle.com/i,
                  ],
                },
              },
              conditions: [
                function () {
                  var t = [
                      '/cn/cloud/workload.html',
                      '/cn/cloud/data-integration.html',
                      '/cn/cloud/enterprise-mobility.html',
                      '/cn/cloud/analytics.html',
                      '/cn/cloud/management-security-cloud.html',
                    ],
                    n = ['71796', '68405', '68406', '71795'],
                    a = _satellite.getVar('trusteConsent');
                  if (
                    (-1 == a.truste_consent.indexOf(0) && -1 == a.truste_consent.indexOf(3)) ||
                    a.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  )
                    return !1;
                  if (_satellite.getVar('scData').found || -1 == s.events.indexOf('event15'))
                    return !1;
                  if (1 == _satellite.getVar('apacRegion')) {
                    var i = _satellite.getVar('LP_id');
                    return -1 != n.indexOf(i) || -1 != t.indexOf(e.location.pathname);
                  }
                  return !0;
                },
              ],
              selector: 'a',
              property: {
                href: /\.(?:doc|docx|eps|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
              },
              event: 'click',
              bubbleFireIfParent: !0,
              bubbleFireIfChildFired: !0,
              bubbleStop: !1,
            },
            {
              name: 'File Download Link - Eloqua',
              trigger: [
                {
                  command: 'loadScript',
                  arguments: [
                    {
                      sequential: !1,
                      scripts: [{ src: 'satellite-5a7a096f64746d6de50001bb-staging.js' }],
                    },
                  ],
                },
              ],
              scope: { subdomains: { include: [/go.oracle.com/i] } },
              conditions: [
                function () {
                  var t = ['71796', '68405', '68406', '71795'],
                    n = _satellite.getVar('trusteConsent');
                  if (
                    (-1 == n.truste_consent.indexOf(0) && -1 == n.truste_consent.indexOf(3)) ||
                    n.dnt ||
                    'false' != _satellite.getVar('countryExclusion')
                  )
                    return !1;
                  if (!_satellite.getVar('scData').found && e.fileName) {
                    if (1 == _satellite.getVar('apacRegion')) {
                      var a = _satellite.getVar('LP_id');
                      return -1 != t.indexOf(a);
                    }
                    return !0;
                  }
                  return !1;
                },
              ],
              selector: '#downloadFilePDF',
              event: 'click',
              bubbleFireIfParent: !0,
              bubbleFireIfChildFired: !0,
              bubbleStop: !1,
            },
          ],
          directCallRules: [],
          settings: {
            trackInternalLinks: !0,
            libraryName: 'satelliteLib-e598c5b61e39a10b402e048e87dd27b0f1cd2d4c',
            isStaging: !0,
            allowGATTcalls: !1,
            downloadExtensions: /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
            notifications: !1,
            utilVisible: !1,
            domainList: ['oracle.com'],
            scriptDir: '6f37a0dc9cdbe818dc4979828b58b88e3f060ea4/scripts/',
            linkDelay: 1,
            tagTimeout: 3000,
          },
          data: {
            URI: t.location.pathname + t.location.search,
            browser: {},
            cartItems: [],
            revenue: '',
            host: { http: 'assets.adobedtm.com', https: 'assets.adobedtm.com' },
          },
          dataElements: {
            apacRegion: {
              customJS: function () {
                if (_satellite.getVar('apacRegionVar') != n)
                  return _satellite.getVar('apacRegionVar');
                for (var t = !1, a = ['/cn/'], i = a.length, r = 0; r < i; r++)
                  if (-1 != location.href.indexOf(a[r])) {
                    t = !0;
                    break;
                  }
                if ('go.oracle.com' === location.hostname) {
                  var o = e.languageCode ? e.languageCode : 'en',
                    s = e.countryCode ? e.countryCode : 'us';
                  ('zh-cn' != o && 'cn' != s) || (t = !0);
                }
                return _satellite.setVar('apacRegionVar', t), t;
              },
              default: 'false',
              storeLength: 'pageview',
              forceLowerCase: !0,
              cleanText: !0,
            },
            countryExclusion: {
              customJS: function () {
                if (_satellite.getVar('countryExclusionVar') != n)
                  return _satellite.getVar('countryExclusionVar');
                for (var t = !1, a = ['/ru/'], i = a.length, r = ((t = !1), 0); r < i; r++)
                  if (-1 != location.href.indexOf(a[r])) {
                    t = !0;
                    break;
                  }
                if ('go.oracle.com' === location.hostname) {
                  var o = e.languageCode ? e.languageCode : 'en',
                    s = e.countryCode ? e.countryCode : 'us';
                  ('ru-ru' != o && 'ru' != s) || (t = !0);
                }
                return (
                  e.truste &&
                    e.truste.eu &&
                    truste.eu.bindMap &&
                    truste.eu.bindMap.country &&
                    'ru' == e.truste.eu.bindMap.country &&
                    (t = !0),
                  _satellite.setVar('countryExclusionVar', t),
                  t
                );
              },
              default: 'false',
              storeLength: 'pageview',
              forceLowerCase: !0,
              cleanText: !0,
            },
            dataLayer: {
              customJS: function () {
                (e.dataLayerObject = {}),
                  (dataLayerObject = {
                    page: { pageInfo: 'NotSet', taxonomy: 'NotSet' },
                    user: { userType: '', campaigns: { status: 'NotSet' } },
                  }),
                  (dataLayerObject.page.pageInfo =
                    e.pageData && e.pageData.pageInfo ? e.pageData.pageInfo : 'NotSet'),
                  (dataLayerObject.page.taxonomy =
                    e.pageData && e.pageData.taxonomy ? e.pageData.taxonomy : 'NotSet');
              },
              default: 'Not defined',
              storeLength: 'pageview',
              forceLowerCase: !0,
              cleanText: !0,
            },
            LP_id: {
              customJS: function () {
                var e = 'Not Available';
                return _satellite.getVar('lpIdVar') != n
                  ? _satellite.getVar('lpIdVar')
                  : ('go.oracle.com' == location.host &&
                      location.href.toLocaleLowerCase().indexOf('/lp=') > 0 &&
                      (e = location.href
                        .toLocaleLowerCase()
                        .split('?')[0]
                        .split('/lp=')[1]
                        .split('/')[0]),
                    _satellite.setVar('lpIdVar', e),
                    e);
              },
              default: 'false',
              storeLength: 'pageview',
              cleanText: !0,
            },
            metaDataLayer: {
              customJS: function () {
                if (_satellite.getVar('metadataVar') != n) return _satellite.getVar('metadataVar');
                for (var e = t.getElementsByTagName('meta'), a = {}, i = 0; i < e.length; i++)
                  e[i].getAttribute('name') &&
                    (a[e[i].getAttribute('name').toLowerCase()] = e[i]
                      .getAttribute('content')
                      .replace(/'/g, '%27'));
                return _satellite.setVar('metadataVar', a), a;
              },
              default: 'Not Available',
              storeLength: 'pageview',
              forceLowerCase: !0,
              cleanText: !0,
            },
            salesChatProductId: {
              customJS: function () {
                var e = 0,
                  t = {
                    'Big Data': { stage: '34', prod: '18' },
                    'Business Analytics': { stage: '35', prod: '19' },
                    'Cloud Applications': { stage: '18', prod: '20' },
                    'Cloud Technologies': { stage: '31', prod: '21' },
                    'Customer Experience Sales & Marketing': { stage: '27', prod: '22' },
                    'Customer Experience Service': { stage: '26', prod: '23' },
                    Database: { stage: '32', prod: '24' },
                    'Engineered Systems': { stage: '29', prod: '25' },
                    'Enterprise Communications Solutions': { stage: '205', prod: '170' },
                    'Enterprise Performance Management': { stage: '19', prod: '26' },
                    'Enterprise Resource Planning': { stage: '20', prod: '27' },
                    'Human Capital Management': { stage: '25', prod: '29' },
                    Middleware: { stage: '33', prod: '30' },
                    'Operating Systems and Virtualization': { stage: '30', prod: '31' },
                    Procurement: { stage: '22', prod: '32' },
                    'Product Lifecycle Management': { stage: '23', prod: '33' },
                    'Project Portfolio Management': { stage: '36', prod: '34' },
                    'Server & Storage Systems': { stage: '28', prod: '35' },
                    'Supply Chain Management': { stage: '24', prod: '36' },
                    'Application Development': { stage: '145', prod: '143' },
                    MySQL: { stage: '232', prod: '224' },
                    'Autonomous Database': { stage: '268', prod: '225' },
                    'Financial Management': { stage: '21', prod: '28' },
                    'Hotel, Restaurant and Casino Solutions': { stage: '270', prod: '256' },
                    'Accelerate On Prem to Cloud': { stage: '271', prod: '257' },
                  },
                  n = 'prod';
                (-1 == location.host.indexOf('www-sites.oracle.com') &&
                  -1 == location.host.indexOf('www-content-stage.oracle.com') &&
                  -1 == location.host.indexOf('www-portal-stage.oracle.com')) ||
                  (n = 'stage');
                var a = {
                  '/database/autonomous-database.html': 'Autonomous Database',
                  '/applications/agile-product-lifecycle-management/':
                    'Product Lifecycle Management',
                  '/applications/customer-experience/': 'Customer Experience Sales & Marketing',
                  '/applications/enterprise-resource-planning/': 'Enterprise Resource Planning',
                  '/applications/erp/': 'Enterprise Resource Planning',
                  '/applications/human-capital-management/': 'Human Capital Management',
                  '/applications/jd-edwards-enterpriseone/': 'Enterprise Resource Planning',
                  '/applications/performance-management/': 'Enterprise Performance Management',
                  '/applications/primavera/': 'Project Portfolio Management',
                  '/applications/rightnow/': 'Customer Experience Service',
                  '/applications/supply-chain-management/': 'Supply Chain Management',
                  '/applications/taleo.html': 'Human Capital Management',
                  '/autonomouscloud/': 'Cloud Technologies',
                  '/big-data/': 'Big Data',
                  '/cloud/blockchain/': 'Application Development',
                  '/database/': 'Database',
                  '/engineered-systems/': 'Engineered Systems',
                  '/enterprise-manager/': 'Cloud Technologies',
                  '/erp/': 'Enterprise Resource Planning',
                  '/industries/communications/': 'Enterprise Communications Solutions',
                  '/industries/construction-engineering/': 'Project Portfolio Management',
                  '/java/': 'Application Development',
                  '/linux/': 'Operating Systems and Virtualization',
                  '/marketingcloud/': 'Customer Experience Sales & Marketing',
                  '/middleware/': 'Middleware',
                  '/servers/': 'Server & Storage Systems',
                  '/solaris/': 'Operating Systems and Virtualization',
                  '/solutions/business-analytics/': 'Business Analytics',
                  '/storage/': 'Server & Storage Systems',
                  '/us/products/applications/siebel/': 'Customer Experience Sales & Marketing',
                  '/virtualization/': 'Operating Systems and Virtualization',
                  '/mysql/': 'MySQL',
                  '/applications/siebel/': 'Customer Experience Sales & Marketing',
                  '/industries/food-beverage/': 'Hotel, Restaurant and Casino Solutions',
                  '/industries/hospitality/': 'Hotel, Restaurant and Casino Solutions',
                  '/consulting/': 'Accelerate On Prem to Cloud',
                };
                for (var i in a)
                  if (-1 != location.pathname.indexOf(i)) {
                    e = t[a[i]][n];
                    break;
                  }
                return e;
              },
              default: '0',
              storeLength: 'pageview',
              forceLowerCase: !0,
              cleanText: !0,
            },
            scData: {
              customJS: function () {
                try {
                  var e = {
                      pageURL: 'Not Available',
                      pageName: 'Not Available',
                      siteId: 'Not Available',
                      userType: 'Not Available',
                      loginStatus: 'Not Available',
                      globalId: 'Not Available',
                      userAction: 'Not Available',
                      videoTitle: 'Not Available',
                      linkName: 'Not Available',
                      fileDownload: 'Not Available',
                    },
                    t = {
                      event1: 'Welcome',
                      event2: 'Landing Page/Pad Step2:Survey',
                      event3: 'Landing Page/Pad Step3:Thanks',
                      event8: 'Welcome',
                      event9: 'Step3:Thanks',
                      event10: 'Step2:Reg',
                      event15: 'File Downloads',
                      event22: 'OOW/Javaone Registration Started',
                      event23: 'OOW/Javaone Registration Complete',
                      event26: 'Trial/Demo Registration Welcome',
                      event27: 'Trial/Demo Registration Confirmed',
                    };
                  if (
                    (location.href && (e.pageURL = encodeURIComponent(location.href)),
                    'object' == typeof s)
                  ) {
                    if (
                      (s.pageName && (e.pageName = s.pageName),
                      s.eVar26 && (e.siteId = s.eVar26),
                      s.eVar20 && (e.userType = s.eVar20),
                      s.eVar54 && (e.loginStatus = s.eVar54),
                      s.eVar64 && (e.globalId = s.eVar64),
                      s.eVar15 && (e.fileDownload = s.eVar15),
                      s.eVar24 && (e.userAction = 'no value' == s.eVar24 ? 'on load' : s.eVar24),
                      s.events)
                    ) {
                      for (var n = s.events.split(','), a = '', i = 0; i < n.length; i++)
                        if (n[i] in t) {
                          a = '-' + t[n[i]];
                          break;
                        }
                      e.userAction = encodeURIComponent(e.userAction + ':' + s.events + a);
                    }
                  } else e.found = !1;
                  return e;
                } catch (r) {
                  return !1;
                }
              },
              default: 'false',
              storeLength: 'pageview',
              forceLowerCase: !0,
              cleanText: !0,
            },
            truste_consent: {
              customJS: function () {
                const $___old_4b86a68e291cbf6a = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'doNotTrack'
                );
                try {
                  if ($___old_4b86a68e291cbf6a)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'doNotTrack',
                      $___stub_f79664207d7661d0.doNotTrack
                    ));
                  return function () {
                    function a () {
                      var e = new Array(-1, 'NoTRUSTe');
                      try {
                        (e[0] = r.truste.api.getConsentDecision().consentDecision),
                          (e[1] = r.truste.api.getConsentDecision().source);
                      } catch (t) {
                        e[0] = -1;
                      }
                      if (-1 == e[0])
                        try {
                          (e[0] =
                            'approved' ==
                            truste.cma.callApi(
                              'getConsent',
                              'oracle.com',
                              null,
                              null,
                              'advertising'
                            ).consent
                              ? 3
                              : -1),
                            (e[1] = truste.cma.callApi('getConsentDecision', 'oracle.com').source),
                            -1 == e[0] &&
                              ((e[0] =
                                'approved' ==
                                truste.cma.callApi(
                                  'getConsent',
                                  'oracle.com',
                                  null,
                                  null,
                                  'functional'
                                ).consent
                                  ? 2
                                  : -1),
                              (e[1] = truste.cma.callApi(
                                'getConsentDecision',
                                'oracle.com'
                              ).source)),
                            -1 == e[0] && (e[0] = 1),
                            'implied' == e[1] && (e[0] = 0);
                        } catch (t) {
                          e[0] = -1;
                        }
                      if (-1 == e[0])
                        try {
                          (e[0] = truste.cma.callApi(
                            'getConsentDecision',
                            'oracle.com'
                          ).consentDecision),
                            (e[1] = truste.cma.callApi('getConsentDecision', 'oracle.com').source);
                        } catch (t) {
                          e[0] = -1;
                        }
                      return e[0];
                    }
                    var i = -1;
                    if (_satellite.getVar('trusteVar') != n)
                      return (i = _satellite.getVar('trusteVar')).toString();
                    try {
                      r.truste.api.getConsentDecision().consentDecision,
                        r.truste.api.getConsentDecision().source;
                    } catch (o) {
                      var r = r || {};
                      (r.truste = {}),
                        (r.truste.api = {}),
                        function () {
                          var e = 'notice_preferences',
                            t = 'truste.eu.cookie.notice_preferences';
                          (this.getCookieName = function () {
                            return e;
                          }),
                            (this.getStorageItemName = function () {
                              return t;
                            });
                        }.apply(r.truste),
                        function () {
                          function e (e) {
                            for (
                              var n = e + '=', a = t.cookie.split(';'), i = 0;
                              i < a.length;
                              i++
                            ) {
                              for (var r = a[i]; ' ' == r.charAt(0); ) r = r.substring(1);
                              if (0 == r.indexOf(n)) return r.substring(n.length, r.length);
                            }
                            return null;
                          }
                          function n (e) {
                            const $___old_e80725a69a85d83d = {}.constructor.getOwnPropertyDescriptor(
                                window,
                                'Storage'
                              ),
                              $___old_f4df068d32643e05 = {}.constructor.getOwnPropertyDescriptor(
                                window,
                                'localStorage'
                              );
                            try {
                              if ($___old_e80725a69a85d83d)
                                ({}.constructor.defineProperty(
                                  window,
                                  'Storage',
                                  $___stub_b317e19f866a2da7.Storage
                                ));
                              if ($___old_f4df068d32643e05)
                                ({}.constructor.defineProperty(
                                  window,
                                  'localStorage',
                                  $___stub_b317e19f866a2da7.localStorage
                                ));
                              return function () {
                                return 'undefined' != typeof Storage
                                  ? localStorage.getItem(e)
                                  : null;
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_e80725a69a85d83d)
                                ({}.constructor.defineProperty(
                                  window,
                                  'Storage',
                                  $___old_e80725a69a85d83d
                                ));
                              if ($___old_f4df068d32643e05)
                                ({}.constructor.defineProperty(
                                  window,
                                  'localStorage',
                                  $___old_f4df068d32643e05
                                ));
                            }
                          }
                          function a (e) {
                            var t = n(e);
                            return null != t ? JSON.parse(t).value : null;
                          }
                          var i = r.truste;
                          (this.getConsentCode = function () {
                            var t = a(i.getStorageItemName()) || e(i.getCookieName());
                            return null == t ? -1 : parseInt(t) + 1;
                          }),
                            (this.getConsentDecision = function () {
                              var e = this.getConsentCode();
                              if (-1 == e) {
                                var t = '{"consentDecision": 0, "source": "implied"}';
                                return JSON.parse(t);
                              }
                              t = '{"consentDecision": ' + parseInt(e) + ', "source": "asserted"}';
                              return JSON.parse(t);
                            });
                        }.apply(r.truste.api);
                    }
                    return (
                      (-1 != (i = a()) && 0 != i) ||
                        (1 != navigator.doNotTrack &&
                          1 != e.doNotTrack &&
                          1 != navigator.msDoNotTrack) ||
                        (i = 1),
                      _satellite.setVar('trusteVar', i),
                      i
                    );
                  }.apply(this, arguments);
                } finally {
                  if ($___old_4b86a68e291cbf6a)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'doNotTrack',
                      $___old_4b86a68e291cbf6a
                    ));
                }
              },
              default: 'Not Defined',
              storeLength: 'pageview',
              forceLowerCase: !0,
              cleanText: !0,
            },
            trusteConsent: {
              customJS: function () {
                const $___old_440d7ce710a70ca6 = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'doNotTrack'
                );
                try {
                  if ($___old_440d7ce710a70ca6)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'doNotTrack',
                      $___stub_f79664207d7661d0.doNotTrack
                    ));
                  return function () {
                    function i () {
                      var e = new Array(-1, 'NoTRUSTe');
                      try {
                        (e[0] = o.truste.api.getGdprConsentDecision().consentDecision),
                          (e[1] = o.truste.api.getGdprConsentDecision().source);
                      } catch (t) {
                        e[0] = -1;
                      }
                      if (-1 == e[0])
                        try {
                          (e[0] = truste.cma.callApi(
                            'getGDPRConsentDecision',
                            'oracle.com'
                          ).consentDecision),
                            (e[1] = truste.cma.callApi(
                              'getGDPRConsentDecision',
                              'oracle.com'
                            ).source);
                        } catch (t) {
                          e[0] = -1;
                        }
                      return e[0];
                    }
                    var r = { truste_consent: -1, dnt: !1 };
                    if (_satellite.getVar('trustVar') != n)
                      return (r = _satellite.getVar('trustVar'));
                    try {
                      o.truste.api.getGdprConsentDecision();
                    } catch (s) {
                      var o = o || {};
                      (o.truste = {}),
                        (o.truste.api = {}),
                        function () {
                          (this.getCookieName = function () {
                            return 'notice_preferences';
                          }),
                            (this.getStorageItemName = function () {
                              return 'truste.eu.cookie.notice_preferences';
                            }),
                            (this.getGdprCookieName = function () {
                              return 'notice_gdpr_prefs';
                            }),
                            (this.getGdprStorageItemName = function () {
                              return 'truste.eu.cookie.notice_gdpr_prefs';
                            });
                        }.apply(o.truste),
                        function () {
                          function e (e) {
                            for (
                              var n = e + '=', a = t.cookie.split(';'), i = 0;
                              i < a.length;
                              i++
                            ) {
                              for (var r = a[i]; ' ' == r.charAt(0); ) r = r.substring(1);
                              if (0 == r.indexOf(n)) return r.substring(n.length, r.length);
                            }
                            return null;
                          }
                          function n (e) {
                            const $___old_b9511094e0664f11 = {}.constructor.getOwnPropertyDescriptor(
                                window,
                                'Storage'
                              ),
                              $___old_1e803923d8a1b0ef = {}.constructor.getOwnPropertyDescriptor(
                                window,
                                'localStorage'
                              );
                            try {
                              if ($___old_b9511094e0664f11)
                                ({}.constructor.defineProperty(
                                  window,
                                  'Storage',
                                  $___stub_b317e19f866a2da7.Storage
                                ));
                              if ($___old_1e803923d8a1b0ef)
                                ({}.constructor.defineProperty(
                                  window,
                                  'localStorage',
                                  $___stub_b317e19f866a2da7.localStorage
                                ));
                              return function () {
                                var t,
                                  n =
                                    ((t = e),
                                    'undefined' != typeof Storage
                                      ? localStorage.getItem(t)
                                      : null);
                                return null != n ? JSON.parse(n).value : null;
                              }.apply(this, arguments);
                            } finally {
                              if ($___old_b9511094e0664f11)
                                ({}.constructor.defineProperty(
                                  window,
                                  'Storage',
                                  $___old_b9511094e0664f11
                                ));
                              if ($___old_1e803923d8a1b0ef)
                                ({}.constructor.defineProperty(
                                  window,
                                  'localStorage',
                                  $___old_1e803923d8a1b0ef
                                ));
                            }
                          }
                          var i = o.truste;
                          (this.getConsentCode = function () {
                            var t = n(i.getStorageItemName()) || e(i.getCookieName());
                            return null == t ? -1 : parseInt(t) + 1;
                          }),
                            (this.getGdprConsentCode = function () {
                              var t = n(i.getGdprStorageItemName()) || e(i.getGdprCookieName());
                              if (null == t) return -1;
                              var r = new Array();
                              for (a in (r = t.split(','))) r[a] = parseInt(r[a], 10) + 1;
                              return r.toString();
                            }),
                            (this.getConsentDecision = function () {
                              var e = this.getConsentCode();
                              if (-1 == e) {
                                var t = '{"consentDecision": 0, "source": "implied"}';
                                return JSON.parse(t);
                              }
                              return (
                                (t =
                                  '{"consentDecision": ' +
                                  parseInt(e) +
                                  ', "source": "asserted"}'),
                                JSON.parse(t)
                              );
                            }),
                            (this.getGdprConsentDecision = function () {
                              var e = this.getGdprConsentCode();
                              if (-1 == e) {
                                var t = '{"consentDecision": [0], "source": "implied"}';
                                return JSON.parse(t);
                              }
                              return (
                                (t = '{"consentDecision": [' + e + '], "source": "asserted"}'),
                                JSON.parse(t)
                              );
                            });
                        }.apply(o.truste.api);
                    }
                    return (
                      (r.truste_consent = i()),
                      (-1 != r.truste_consent && -1 == r.truste_consent.indexOf(0)) ||
                        (1 != navigator.doNotTrack &&
                          1 != e.doNotTrack &&
                          1 != navigator.msDoNotTrack) ||
                        (r.dnt = !0),
                      _satellite.setVar('trustVar', r),
                      r
                    );
                  }.apply(this, arguments);
                } finally {
                  if ($___old_440d7ce710a70ca6)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'doNotTrack',
                      $___old_440d7ce710a70ca6
                    ));
                }
              },
              default: 'Not defined',
              storeLength: 'pageview',
              forceLowerCase: !0,
              cleanText: !0,
            },
          },
          appVersion: '7QN',
          buildDate: '2019-04-24 19:17:36 UTC',
          publishDate: '2019-04-19 17:44:05 UTC',
        });
    })(window, document);
  })();
}
