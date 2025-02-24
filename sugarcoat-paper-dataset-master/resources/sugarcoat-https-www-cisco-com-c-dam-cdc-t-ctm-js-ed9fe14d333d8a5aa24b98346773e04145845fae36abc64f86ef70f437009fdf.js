var ctmsRequire, rulesLib;
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
    var $___var_1e1deb518d0c47bd;
    ctmsRequire = $___var_1e1deb518d0c47bd;
    !(function () {
      if (!ctmsRequire || !ctmsRequire.requirejs) {
        ctmsRequire ? (require = ctmsRequire) : (ctmsRequire = {});
        var requirejs, require, define;
        !(function (global, setTimeout) {
          const $___old_0e9a32a1946d785c = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'platform'
          );
          try {
            if ($___old_0e9a32a1946d785c)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'platform',
                $___stub_47c01efa79e9f191.platform
              ));
            return function () {
              function commentReplace (e, t) {
                return t || '';
              }
              function isFunction (e) {
                return '[object Function]' === ostring.call(e);
              }
              function isArray (e) {
                return '[object Array]' === ostring.call(e);
              }
              function each (e, t) {
                if (e) {
                  var c;
                  for (c = 0; c < e.length && (!e[c] || !t(e[c], c, e)); c += 1);
                }
              }
              function eachReverse (e, t) {
                if (e) {
                  var c;
                  for (c = e.length - 1; c > -1 && (!e[c] || !t(e[c], c, e)); c -= 1);
                }
              }
              function hasProp (e, t) {
                return hasOwn.call(e, t);
              }
              function getOwn (e, t) {
                return hasProp(e, t) && e[t];
              }
              function eachProp (e, t) {
                var c;
                for (c in e) if (hasProp(e, c) && t(e[c], c)) break;
              }
              function mixin (e, t, c, o) {
                return (
                  t &&
                    eachProp(t, function (t, s) {
                      (!c && hasProp(e, s)) ||
                        (!o ||
                        'object' != typeof t ||
                        !t ||
                        isArray(t) ||
                        isFunction(t) ||
                        t instanceof RegExp
                          ? (e[s] = t)
                          : (e[s] || (e[s] = {}), mixin(e[s], t, c, o)));
                    }),
                  e
                );
              }
              function bind (e, t) {
                return function () {
                  return t.apply(e, arguments);
                };
              }
              function scripts () {
                return document.getElementsByTagName('script');
              }
              function defaultOnError (e) {
                throw e;
              }
              function getGlobal (e) {
                if (!e) return e;
                var t = global;
                return (
                  each(e.split('.'), function (e) {
                    t = t[e];
                  }),
                  t
                );
              }
              function makeError (e, t, c, o) {
                var s = new Error(t + '\nhttp://requirejs.org/docs/errors.html#' + e);
                return (s.requireType = e), (s.requireModules = o), c && (s.originalError = c), s;
              }
              function newContext (e) {
                function t (e) {
                  var t, c;
                  for (t = 0; t < e.length; t++)
                    if (((c = e[t]), '.' === c)) e.splice(t, 1), (t -= 1);
                    else if ('..' === c) {
                      if (0 === t || (1 === t && '..' === e[2]) || '..' === e[t - 1]) continue;
                      t > 0 && (e.splice(t - 1, 2), (t -= 2));
                    }
                }
                function c (e, c, o) {
                  var s,
                    i,
                    a,
                    n,
                    r,
                    d,
                    u,
                    p,
                    l,
                    m,
                    h,
                    f,
                    g = c && c.split('/'),
                    v = k.map,
                    w = v && v['*'];
                  if (
                    (e &&
                      ((e = e.split('/')),
                      (u = e.length - 1),
                      k.nodeIdCompat &&
                        jsSuffixRegExp.test(e[u]) &&
                        (e[u] = e[u].replace(jsSuffixRegExp, '')),
                      '.' === e[0].charAt(0) &&
                        g &&
                        ((f = g.slice(0, g.length - 1)), (e = f.concat(e))),
                      t(e),
                      (e = e.join('/'))),
                    o && v && (g || w))
                  ) {
                    a = e.split('/');
                    e: for (n = a.length; n > 0; n -= 1) {
                      if (((d = a.slice(0, n).join('/')), g))
                        for (r = g.length; r > 0; r -= 1)
                          if (
                            ((i = getOwn(v, g.slice(0, r).join('/'))), i && (i = getOwn(i, d)))
                          ) {
                            (p = i), (l = n);
                            break e;
                          }
                      !m && w && getOwn(w, d) && ((m = getOwn(w, d)), (h = n));
                    }
                    !p && m && ((p = m), (l = h)), p && (a.splice(0, l, p), (e = a.join('/')));
                  }
                  return (s = getOwn(k.pkgs, e)), s ? s : e;
                }
                function o (e) {
                  isBrowser &&
                    each(scripts(), function (t) {
                      if (
                        t.getAttribute('data-requiremodule') === e &&
                        t.getAttribute('data-requirecontext') === b.contextName
                      )
                        return t.parentNode.removeChild(t), !0;
                    });
                }
                function s (e) {
                  var t = getOwn(k.paths, e);
                  if (t && isArray(t) && t.length > 1)
                    return (
                      t.shift(), b.require.undef(e), b.makeRequire(null, { skipMap: !0 })([e]), !0
                    );
                }
                function i (e) {
                  var t,
                    c = e ? e.indexOf('!') : -1;
                  return (
                    c > -1 && ((t = e.substring(0, c)), (e = e.substring(c + 1, e.length))), [t, e]
                  );
                }
                function a (e, t, o, s) {
                  var a,
                    n,
                    r,
                    d,
                    u = null,
                    p = t ? t.name : null,
                    l = e,
                    m = !0,
                    h = '';
                  return (
                    e || ((m = !1), (e = '_@r' + (T += 1))),
                    (d = i(e)),
                    (u = d[0]),
                    (e = d[1]),
                    u && ((u = c(u, p, s)), (n = getOwn(q, u))),
                    e &&
                      (u
                        ? (h =
                            n && n.normalize
                              ? n.normalize(e, function (e) {
                                  return c(e, p, s);
                                })
                              : e.indexOf('!') === -1
                              ? c(e, p, s)
                              : e)
                        : ((h = c(e, p, s)),
                          (d = i(h)),
                          (u = d[0]),
                          (h = d[1]),
                          (o = !0),
                          (a = b.nameToUrl(h)))),
                    (r = !u || n || o ? '' : '_unnormalized' + (N += 1)),
                    {
                      prefix: u,
                      name: h,
                      parentMap: t,
                      unnormalized: !!r,
                      url: a,
                      originalName: l,
                      isDefine: m,
                      id: (u ? u + '!' + h : h) + r,
                    }
                  );
                }
                function n (e) {
                  var t = e.id,
                    c = getOwn(S, t);
                  return c || (c = S[t] = new b.Module(e)), c;
                }
                function r (e, t, c) {
                  var o = e.id,
                    s = getOwn(S, o);
                  !hasProp(q, o) || (s && !s.defineEmitComplete)
                    ? ((s = n(e)), s.error && 'error' === t ? c(s.error) : s.on(t, c))
                    : 'defined' === t && c(q[o]);
                }
                function d (e, t) {
                  var c = e.requireModules,
                    o = !1;
                  t
                    ? t(e)
                    : (each(c, function (t) {
                        var c = getOwn(S, t);
                        c && ((c.error = e), c.events.error && ((o = !0), c.emit('error', e)));
                      }),
                      o || req.onError(e));
                }
                function u () {
                  globalDefQueue.length &&
                    (each(globalDefQueue, function (e) {
                      var t = e[0];
                      'string' == typeof t && (b.defQueueMap[t] = !0), E.push(e);
                    }),
                    (globalDefQueue = []));
                }
                function p (e) {
                  delete S[e], delete x[e];
                }
                function l (e, t, c) {
                  var o = e.map.id;
                  e.error
                    ? e.emit('error', e.error)
                    : ((t[o] = !0),
                      each(e.depMaps, function (o, s) {
                        var i = o.id,
                          a = getOwn(S, i);
                        !a ||
                          e.depMatched[s] ||
                          c[i] ||
                          (getOwn(t, i) ? (e.defineDep(s, q[i]), e.check()) : l(a, t, c));
                      }),
                      (c[o] = !0));
                }
                function m () {
                  var e,
                    t,
                    c = 1000 * k.waitSeconds,
                    i = c && b.startTime + c < new Date().getTime(),
                    a = [],
                    n = [],
                    r = !1,
                    u = !0;
                  if (!w) {
                    if (
                      ((w = !0),
                      eachProp(x, function (e) {
                        var c = e.map,
                          d = c.id;
                        if (e.enabled && (c.isDefine || n.push(e), !e.error))
                          if (!e.inited && i) s(d) ? ((t = !0), (r = !0)) : (a.push(d), o(d));
                          else if (!e.inited && e.fetched && c.isDefine && ((r = !0), !c.prefix))
                            return (u = !1);
                      }),
                      i && a.length)
                    )
                      return (
                        (e = makeError('timeout', 'Load timeout for modules: ' + a, null, a)),
                        (e.contextName = b.contextName),
                        d(e)
                      );
                    u &&
                      each(n, function (e) {
                        l(e, {}, {});
                      }),
                      (i && !t) ||
                        !r ||
                        (!isBrowser && !isWebWorker) ||
                        y ||
                        (y = setTimeout(function () {
                          (y = 0), m();
                        }, 50)),
                      (w = !1);
                  }
                }
                function h (e) {
                  hasProp(q, e[0]) || n(a(e[0], null, !0)).init(e[1], e[2]);
                }
                function f (e, t, c, o) {
                  e.detachEvent && !isOpera
                    ? o && e.detachEvent(o, t)
                    : e.removeEventListener(c, t, !1);
                }
                function g (e) {
                  var t = e.currentTarget || e.srcElement;
                  return (
                    f(t, b.onScriptLoad, 'load', 'onreadystatechange'),
                    f(t, b.onScriptError, 'error'),
                    { node: t, id: t && t.getAttribute('data-requiremodule') }
                  );
                }
                function v () {
                  var e;
                  for (u(); E.length; ) {
                    if (((e = E.shift()), null === e[0]))
                      return d(
                        makeError(
                          'mismatch',
                          'Mismatched anonymous define() module: ' + e[e.length - 1]
                        )
                      );
                    h(e);
                  }
                  b.defQueueMap = {};
                }
                var w,
                  _,
                  b,
                  A,
                  y,
                  k = {
                    waitSeconds: 7,
                    baseUrl: './',
                    paths: {},
                    bundles: {},
                    pkgs: {},
                    shim: {},
                    config: {},
                  },
                  S = {},
                  x = {},
                  C = {},
                  E = [],
                  q = {},
                  j = {},
                  P = {},
                  T = 1,
                  N = 1;
                return (
                  (A = {
                    require: function (e) {
                      return e.require ? e.require : (e.require = b.makeRequire(e.map));
                    },
                    exports: function (e) {
                      if (((e.usingExports = !0), e.map.isDefine))
                        return e.exports
                          ? (q[e.map.id] = e.exports)
                          : (e.exports = q[e.map.id] = {});
                    },
                    module: function (e) {
                      return e.module
                        ? e.module
                        : (e.module = {
                            id: e.map.id,
                            uri: e.map.url,
                            config: function () {
                              return getOwn(k.config, e.map.id) || {};
                            },
                            exports: e.exports || (e.exports = {}),
                          });
                    },
                  }),
                  (_ = function (e) {
                    (this.events = getOwn(C, e.id) || {}),
                      (this.map = e),
                      (this.shim = getOwn(k.shim, e.id)),
                      (this.depExports = []),
                      (this.depMaps = []),
                      (this.depMatched = []),
                      (this.pluginMaps = {}),
                      (this.depCount = 0);
                  }),
                  (_.prototype = {
                    init: function (e, t, c, o) {
                      (o = o || {}),
                        this.inited ||
                          ((this.factory = t),
                          c
                            ? this.on('error', c)
                            : this.events.error &&
                              (c = bind(this, function (e) {
                                this.emit('error', e);
                              })),
                          (this.depMaps = e && e.slice(0)),
                          (this.errback = c),
                          (this.inited = !0),
                          (this.ignore = o.ignore),
                          o.enabled || this.enabled ? this.enable() : this.check());
                    },
                    defineDep: function (e, t) {
                      this.depMatched[e] ||
                        ((this.depMatched[e] = !0),
                        (this.depCount -= 1),
                        (this.depExports[e] = t));
                    },
                    fetch: function () {
                      if (!this.fetched) {
                        (this.fetched = !0), (b.startTime = new Date().getTime());
                        var e = this.map;
                        return this.shim
                          ? void b.makeRequire(this.map, { enableBuildCallback: !0 })(
                              this.shim.deps || [],
                              bind(this, function () {
                                return e.prefix ? this.callPlugin() : this.load();
                              })
                            )
                          : e.prefix
                          ? this.callPlugin()
                          : this.load();
                      }
                    },
                    load: function () {
                      var e = this.map.url;
                      j[e] || ((j[e] = !0), b.load(this.map.id, e));
                    },
                    check: function () {
                      if (this.enabled && !this.enabling) {
                        var e,
                          t,
                          c = this.map.id,
                          o = this.depExports,
                          s = this.exports,
                          i = this.factory;
                        if (this.inited) {
                          if (this.error) this.emit('error', this.error);
                          else if (!this.defining) {
                            if (((this.defining = !0), this.depCount < 1 && !this.defined)) {
                              if (isFunction(i)) {
                                if (
                                  (this.events.error && this.map.isDefine) ||
                                  req.onError !== defaultOnError
                                )
                                  try {
                                    s = b.execCb(c, i, o, s);
                                  } catch (t) {
                                    e = t;
                                  }
                                else s = b.execCb(c, i, o, s);
                                if (
                                  (this.map.isDefine &&
                                    void 0 === s &&
                                    ((t = this.module),
                                    t ? (s = t.exports) : this.usingExports && (s = this.exports)),
                                  e)
                                )
                                  return (
                                    (e.requireMap = this.map),
                                    (e.requireModules = this.map.isDefine ? [this.map.id] : null),
                                    (e.requireType = this.map.isDefine ? 'define' : 'require'),
                                    d((this.error = e))
                                  );
                              } else s = i;
                              if (
                                ((this.exports = s),
                                this.map.isDefine &&
                                  !this.ignore &&
                                  ((q[c] = s), req.onResourceLoad))
                              ) {
                                var a = [];
                                each(this.depMaps, function (e) {
                                  a.push(e.normalizedMap || e);
                                }),
                                  req.onResourceLoad(b, this.map, a);
                              }
                              p(c), (this.defined = !0);
                            }
                            (this.defining = !1),
                              this.defined &&
                                !this.defineEmitted &&
                                ((this.defineEmitted = !0),
                                this.emit('defined', this.exports),
                                (this.defineEmitComplete = !0));
                          }
                        } else hasProp(b.defQueueMap, c) || this.fetch();
                      }
                    },
                    callPlugin: function () {
                      var e = this.map,
                        t = e.id,
                        o = a(e.prefix);
                      this.depMaps.push(o),
                        r(
                          o,
                          'defined',
                          bind(this, function (o) {
                            var s,
                              i,
                              u,
                              l = getOwn(P, this.map.id),
                              m = this.map.name,
                              h = this.map.parentMap ? this.map.parentMap.name : null,
                              f = b.makeRequire(e.parentMap, { enableBuildCallback: !0 });
                            return this.map.unnormalized
                              ? (o.normalize &&
                                  (m =
                                    o.normalize(m, function (e) {
                                      return c(e, h, !0);
                                    }) || ''),
                                (i = a(e.prefix + '!' + m, this.map.parentMap)),
                                r(
                                  i,
                                  'defined',
                                  bind(this, function (e) {
                                    (this.map.normalizedMap = i),
                                      this.init(
                                        [],
                                        function () {
                                          return e;
                                        },
                                        null,
                                        { enabled: !0, ignore: !0 }
                                      );
                                  })
                                ),
                                (u = getOwn(S, i.id)),
                                void (
                                  u &&
                                  (this.depMaps.push(i),
                                  this.events.error &&
                                    u.on(
                                      'error',
                                      bind(this, function (e) {
                                        this.emit('error', e);
                                      })
                                    ),
                                  u.enable())
                                ))
                              : l
                              ? ((this.map.url = b.nameToUrl(l)), void this.load())
                              : ((s = bind(this, function (e) {
                                  this.init(
                                    [],
                                    function () {
                                      return e;
                                    },
                                    null,
                                    { enabled: !0 }
                                  );
                                })),
                                (s.error = bind(this, function (e) {
                                  (this.inited = !0),
                                    (this.error = e),
                                    (e.requireModules = [t]),
                                    eachProp(S, function (e) {
                                      0 === e.map.id.indexOf(t + '_unnormalized') && p(e.map.id);
                                    }),
                                    d(e);
                                })),
                                (s.fromText = bind(this, function (c, o) {
                                  var i = e.name,
                                    r = a(i),
                                    u = useInteractive;
                                  o && (c = o),
                                    u && (useInteractive = !1),
                                    n(r),
                                    hasProp(k.config, t) && (k.config[i] = k.config[t]);
                                  try {
                                    req.exec(c);
                                  } catch (e) {
                                    return d(
                                      makeError(
                                        'fromtexteval',
                                        'fromText eval for ' + t + ' failed: ' + e,
                                        e,
                                        [t]
                                      )
                                    );
                                  }
                                  u && (useInteractive = !0),
                                    this.depMaps.push(r),
                                    b.completeLoad(i),
                                    f([i], s);
                                })),
                                void o.load(e.name, f, s, k));
                          })
                        ),
                        b.enable(o, this),
                        (this.pluginMaps[o.id] = o);
                    },
                    enable: function () {
                      (x[this.map.id] = this),
                        (this.enabled = !0),
                        (this.enabling = !0),
                        each(
                          this.depMaps,
                          bind(this, function (e, t) {
                            var c, o, s;
                            if ('string' == typeof e) {
                              if (
                                ((e = a(
                                  e,
                                  this.map.isDefine ? this.map : this.map.parentMap,
                                  !1,
                                  !this.skipMap
                                )),
                                (this.depMaps[t] = e),
                                (s = getOwn(A, e.id)))
                              )
                                return void (this.depExports[t] = s(this));
                              (this.depCount += 1),
                                r(
                                  e,
                                  'defined',
                                  bind(this, function (e) {
                                    this.undefed || (this.defineDep(t, e), this.check());
                                  })
                                ),
                                this.errback
                                  ? r(e, 'error', bind(this, this.errback))
                                  : this.events.error &&
                                    r(
                                      e,
                                      'error',
                                      bind(this, function (e) {
                                        this.emit('error', e);
                                      })
                                    );
                            }
                            (c = e.id),
                              (o = S[c]),
                              hasProp(A, c) || !o || o.enabled || b.enable(e, this);
                          })
                        ),
                        eachProp(
                          this.pluginMaps,
                          bind(this, function (e) {
                            var t = getOwn(S, e.id);
                            t && !t.enabled && b.enable(e, this);
                          })
                        ),
                        (this.enabling = !1),
                        this.check();
                    },
                    on: function (e, t) {
                      var c = this.events[e];
                      c || (c = this.events[e] = []), c.push(t);
                    },
                    emit: function (e, t) {
                      each(this.events[e], function (e) {
                        e(t);
                      }),
                        'error' === e && delete this.events[e];
                    },
                  }),
                  (b = {
                    config: k,
                    contextName: e,
                    registry: S,
                    defined: q,
                    urlFetched: j,
                    defQueue: E,
                    defQueueMap: {},
                    Module: _,
                    makeModuleMap: a,
                    nextTick: req.nextTick,
                    onError: d,
                    configure: function (e) {
                      if (
                        (e.baseUrl &&
                          '/' !== e.baseUrl.charAt(e.baseUrl.length - 1) &&
                          (e.baseUrl += '/'),
                        'string' == typeof e.urlArgs)
                      ) {
                        var t = e.urlArgs;
                        e.urlArgs = function (e, c) {
                          return (c.indexOf('?') === -1 ? '?' : '&') + t;
                        };
                      }
                      var c = k.shim,
                        o = { paths: !0, bundles: !0, config: !0, map: !0 };
                      eachProp(e, function (e, t) {
                        o[t] ? (k[t] || (k[t] = {}), mixin(k[t], e, !0, !0)) : (k[t] = e);
                      }),
                        e.bundles &&
                          eachProp(e.bundles, function (e, t) {
                            each(e, function (e) {
                              e !== t && (P[e] = t);
                            });
                          }),
                        e.shim &&
                          (eachProp(e.shim, function (e, t) {
                            isArray(e) && (e = { deps: e }),
                              (!e.exports && !e.init) ||
                                e.exportsFn ||
                                (e.exportsFn = b.makeShimExports(e)),
                              (c[t] = e);
                          }),
                          (k.shim = c)),
                        e.packages &&
                          each(e.packages, function (e) {
                            var t, c;
                            (e = 'string' == typeof e ? { name: e } : e),
                              (c = e.name),
                              (t = e.location),
                              t && (k.paths[c] = e.location),
                              (k.pkgs[c] =
                                e.name +
                                '/' +
                                (e.main || 'main')
                                  .replace(currDirRegExp, '')
                                  .replace(jsSuffixRegExp, ''));
                          }),
                        eachProp(S, function (e, t) {
                          e.inited || e.map.unnormalized || (e.map = a(t, null, !0));
                        }),
                        (e.deps || e.callback) && b.require(e.deps || [], e.callback);
                    },
                    makeShimExports: function (e) {
                      function t () {
                        var t;
                        return (
                          e.init && (t = e.init.apply(global, arguments)),
                          t || (e.exports && getGlobal(e.exports))
                        );
                      }
                      return t;
                    },
                    makeRequire: function (t, s) {
                      function i (c, o, r) {
                        var u, p, l;
                        return (
                          s.enableBuildCallback && o && isFunction(o) && (o.__requireJsBuild = !0),
                          'string' == typeof c
                            ? isFunction(o)
                              ? d(makeError('requireargs', 'Invalid require call'), r)
                              : t && hasProp(A, c)
                              ? A[c](S[t.id])
                              : req.get
                              ? req.get(b, c, t, i)
                              : ((p = a(c, t, !1, !0)),
                                (u = p.id),
                                hasProp(q, u)
                                  ? q[u]
                                  : d(
                                      makeError(
                                        'notloaded',
                                        'Module name "' +
                                          u +
                                          '" has not been loaded yet for context: ' +
                                          e +
                                          (t ? '' : '. Use require([])')
                                      )
                                    ))
                            : (v(),
                              b.nextTick(function () {
                                v(),
                                  (l = n(a(null, t))),
                                  (l.skipMap = s.skipMap),
                                  l.init(c, o, r, { enabled: !0 }),
                                  m();
                              }),
                              i)
                        );
                      }
                      return (
                        (s = s || {}),
                        mixin(i, {
                          isBrowser: isBrowser,
                          toUrl: function (e) {
                            var o,
                              s = e.lastIndexOf('.'),
                              i = e.split('/')[0],
                              a = '.' === i || '..' === i;
                            return (
                              s !== -1 &&
                                (!a || s > 1) &&
                                ((o = e.substring(s, e.length)), (e = e.substring(0, s))),
                              b.nameToUrl(c(e, t && t.id, !0), o, !0)
                            );
                          },
                          defined: function (e) {
                            return hasProp(q, a(e, t, !1, !0).id);
                          },
                          specified: function (e) {
                            return (e = a(e, t, !1, !0).id), hasProp(q, e) || hasProp(S, e);
                          },
                        }),
                        t ||
                          (i.undef = function (e) {
                            u();
                            var c = a(e, t, !0),
                              s = getOwn(S, e);
                            (s.undefed = !0),
                              o(e),
                              delete q[e],
                              delete j[c.url],
                              delete C[e],
                              eachReverse(E, function (t, c) {
                                t[0] === e && E.splice(c, 1);
                              }),
                              delete b.defQueueMap[e],
                              s && (s.events.defined && (C[e] = s.events), p(e));
                          }),
                        i
                      );
                    },
                    enable: function (e) {
                      var t = getOwn(S, e.id);
                      t && n(e).enable();
                    },
                    completeLoad: function (e) {
                      var t,
                        c,
                        o,
                        i = getOwn(k.shim, e) || {},
                        a = i.exports;
                      for (u(); E.length; ) {
                        if (((c = E.shift()), null === c[0])) {
                          if (((c[0] = e), t)) break;
                          t = !0;
                        } else c[0] === e && (t = !0);
                        h(c);
                      }
                      if (
                        ((b.defQueueMap = {}),
                        (o = getOwn(S, e)),
                        !t && !hasProp(q, e) && o && !o.inited)
                      ) {
                        if (!(!k.enforceDefine || (a && getGlobal(a))))
                          return s(e)
                            ? void 0
                            : d(makeError('nodefine', 'No define call for ' + e, null, [e]));
                        h([e, i.deps || [], i.exportsFn]);
                      }
                      m();
                    },
                    nameToUrl: function (e, t, c) {
                      var o,
                        s,
                        i,
                        a,
                        n,
                        r,
                        d,
                        u = getOwn(k.pkgs, e);
                      if ((u && (e = u), (d = getOwn(P, e)))) return b.nameToUrl(d, t, c);
                      if (req.jsExtRegExp.test(e)) n = e + (t || '');
                      else {
                        for (o = k.paths, s = e.split('/'), i = s.length; i > 0; i -= 1)
                          if (((a = s.slice(0, i).join('/')), (r = getOwn(o, a)))) {
                            isArray(r) && (r = r[0]), s.splice(0, i, r);
                            break;
                          }
                        (n = s.join('/')),
                          (n += t || (/^data\:|^blob\:|\?/.test(n) || c ? '' : '.js')),
                          (n =
                            ('/' === n.charAt(0) || n.match(/^[\w\+\.\-]+:/) ? '' : k.baseUrl) +
                            n);
                      }
                      return k.urlArgs && !/^blob\:/.test(n) ? n + k.urlArgs(e, n) : n;
                    },
                    load: function (e, t) {
                      req.load(b, e, t);
                    },
                    execCb: function (e, t, c, o) {
                      return t.apply(o, c);
                    },
                    onScriptLoad: function (e) {
                      if (
                        'load' === e.type ||
                        readyRegExp.test((e.currentTarget || e.srcElement).readyState)
                      ) {
                        interactiveScript = null;
                        var t = g(e);
                        b.completeLoad(t.id);
                      }
                    },
                    onScriptError: function (e) {
                      var t = g(e);
                      if (!s(t.id)) {
                        var c = [];
                        return (
                          eachProp(S, function (e, o) {
                            0 !== o.indexOf('_@r') &&
                              each(e.depMaps, function (e) {
                                if (e.id === t.id) return c.push(o), !0;
                              });
                          }),
                          d(
                            makeError(
                              'scripterror',
                              'Script error for "' +
                                t.id +
                                (c.length ? '", needed by: ' + c.join(', ') : '"'),
                              e,
                              [t.id]
                            )
                          )
                        );
                      }
                    },
                  }),
                  (b.require = b.makeRequire()),
                  b
                );
              }
              function getInteractiveScript () {
                return interactiveScript && 'interactive' === interactiveScript.readyState
                  ? interactiveScript
                  : (eachReverse(scripts(), function (e) {
                      if ('interactive' === e.readyState) return (interactiveScript = e);
                    }),
                    interactiveScript);
              }
              var req,
                s,
                head,
                baseElement,
                dataMain,
                src,
                interactiveScript,
                currentlyAddingScript,
                mainScript,
                subPath,
                version = '2.3.2',
                commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
                cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
                jsSuffixRegExp = /\.js$/,
                currDirRegExp = /^\.\//,
                op = Object.prototype,
                ostring = op.toString,
                hasOwn = op.hasOwnProperty,
                isBrowser = !(
                  'undefined' == typeof window ||
                  'undefined' == typeof navigator ||
                  !window.document
                ),
                isWebWorker = !isBrowser && 'undefined' != typeof importScripts,
                readyRegExp =
                  isBrowser && 'PLAYSTATION 3' === navigator.platform
                    ? /^complete$/
                    : /^(complete|loaded)$/,
                defContextName = '_',
                isOpera = 'undefined' != typeof opera && '[object Opera]' === opera.toString(),
                contexts = {},
                cfg = {},
                globalDefQueue = [],
                useInteractive = !1;
              if (((cfg.skipDataMain = !0), 'undefined' == typeof define)) {
                if ('undefined' != typeof requirejs) {
                  if (isFunction(requirejs)) return;
                  (cfg = requirejs), (requirejs = void 0);
                }
                'undefined' == typeof require ||
                  isFunction(require) ||
                  ((cfg = require), (require = void 0)),
                  (req = requirejs = function (e, t, c, o) {
                    var s,
                      i,
                      a = defContextName;
                    return (
                      isArray(e) ||
                        'string' == typeof e ||
                        ((i = e), isArray(t) ? ((e = t), (t = c), (c = o)) : (e = [])),
                      i && i.context && (a = i.context),
                      (s = getOwn(contexts, a)),
                      s || (s = contexts[a] = req.s.newContext(a)),
                      i && s.configure(i),
                      s.require(e, t, c)
                    );
                  }),
                  (req.config = function (e) {
                    return req(e);
                  }),
                  (req.nextTick =
                    'undefined' != typeof setTimeout
                      ? function (e) {
                          setTimeout(e, 4);
                        }
                      : function (e) {
                          e();
                        }),
                  require || (require = req),
                  (req.version = version),
                  (req.jsExtRegExp = /^\/|:|\?|\.js$/),
                  (req.isBrowser = isBrowser),
                  (s = req.s = { contexts: contexts, newContext: newContext }),
                  req({}),
                  each(['toUrl', 'undef', 'defined', 'specified'], function (e) {
                    req[e] = function () {
                      var t = contexts[defContextName];
                      return t.require[e].apply(t, arguments);
                    };
                  }),
                  isBrowser &&
                    ((head = s.head = document.getElementsByTagName('head')[0]),
                    (baseElement = document.getElementsByTagName('base')[0]),
                    baseElement && (head = s.head = baseElement.parentNode)),
                  (req.onError = defaultOnError),
                  (req.createNode = function (e, t, c) {
                    var o = e.xhtml
                      ? document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script')
                      : document.createElement('script');
                    return (
                      (o.type = e.scriptType || 'text/javascript'),
                      (o.charset = 'utf-8'),
                      (o.async = !0),
                      o
                    );
                  }),
                  (req.load = function (e, t, c) {
                    var o,
                      s = (e && e.config) || {};
                    if (isBrowser)
                      return (
                        (o = req.createNode(s, t, c)),
                        o.setAttribute('data-requirecontext', e.contextName),
                        o.setAttribute('data-requiremodule', t),
                        !o.attachEvent ||
                        (o.attachEvent.toString &&
                          o.attachEvent.toString().indexOf('[native code') < 0) ||
                        isOpera
                          ? (o.addEventListener('load', e.onScriptLoad, !1),
                            o.addEventListener('error', e.onScriptError, !1))
                          : ((useInteractive = !0),
                            o.attachEvent('onreadystatechange', e.onScriptLoad)),
                        (o.src = c),
                        s.onNodeCreated && s.onNodeCreated(o, s, t, c),
                        (currentlyAddingScript = o),
                        baseElement ? head.insertBefore(o, baseElement) : head.appendChild(o),
                        (currentlyAddingScript = null),
                        o
                      );
                    if (isWebWorker)
                      try {
                        setTimeout(function () {}, 0), importScripts(c), e.completeLoad(t);
                      } catch (o) {
                        e.onError(
                          makeError(
                            'importscripts',
                            'importScripts failed for ' + t + ' at ' + c,
                            o,
                            [t]
                          )
                        );
                      }
                  }),
                  isBrowser &&
                    !cfg.skipDataMain &&
                    eachReverse(scripts(), function (e) {
                      if (
                        (head || (head = e.parentNode), (dataMain = e.getAttribute('data-main')))
                      )
                        return (
                          (mainScript = dataMain),
                          cfg.baseUrl ||
                            mainScript.indexOf('!') !== -1 ||
                            ((src = mainScript.split('/')),
                            (mainScript = src.pop()),
                            (subPath = src.length ? src.join('/') + '/' : './'),
                            (cfg.baseUrl = subPath)),
                          (mainScript = mainScript.replace(jsSuffixRegExp, '')),
                          req.jsExtRegExp.test(mainScript) && (mainScript = dataMain),
                          (cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript]),
                          !0
                        );
                    }),
                  (define = function (e, t, c) {
                    var o, s;
                    'string' != typeof e && ((c = t), (t = e), (e = null)),
                      isArray(t) || ((c = t), (t = null)),
                      !t &&
                        isFunction(c) &&
                        ((t = []),
                        c.length &&
                          (c
                            .toString()
                            .replace(commentRegExp, commentReplace)
                            .replace(cjsRequireRegExp, function (e, c) {
                              t.push(c);
                            }),
                          (t = (1 === c.length
                            ? ['require']
                            : ['require', 'exports', 'module']
                          ).concat(t)))),
                      useInteractive &&
                        ((o = currentlyAddingScript || getInteractiveScript()),
                        o &&
                          (e || (e = o.getAttribute('data-requiremodule')),
                          (s = contexts[o.getAttribute('data-requirecontext')]))),
                      s
                        ? (s.defQueue.push([e, t, c]), (s.defQueueMap[e] = !0))
                        : globalDefQueue.push([e, t, c]);
                  }),
                  (define.amd = { jQuery: !0 }),
                  (req.exec = function (text) {
                    return eval(text);
                  }),
                  req(cfg);
              }
            }.apply(this, arguments);
          } finally {
            if ($___old_0e9a32a1946d785c)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'platform',
                $___old_0e9a32a1946d785c
              ));
          }
        })(this, 'undefined' == typeof setTimeout ? void 0 : setTimeout),
          (ctmsRequire.requirejs = requirejs),
          (ctmsRequire.require = require),
          (ctmsRequire.define = define);
      }
    })(),
      ctmsRequire.define('requireLib', function () {}),
      (window.XdUtils =
        window.XdUtils ||
        (function () {
          function e (e, t) {
            var c,
              o = t || {};
            for (c in e) e.hasOwnProperty(c) && (o[c] = e[c]);
            return o;
          }
          return { extend: e };
        })()),
      ctmsRequire.define('xdUtils', function () {}),
      (window.xdLocalStorage =
        window.xdLocalStorage ||
        (function () {
          function e (e) {
            d[e.id] && (d[e.id](e), delete d[e.id]);
          }
          function t (t) {
            var c = t.origin || t.originalEvent.origin;
            if ('https://www.cisco.com' === c) {
              var o;
              try {
                o = JSON.parse(t.data);
              } catch (e) {}
              o &&
                o.namespace === a &&
                ('iframe-ready' === o.id ? ((p = !0), n.initCallback()) : e(o));
            }
          }
          function c (e, t, c, o) {
            r++, (d[r] = o);
            var s = { namespace: a, id: r, action: e, key: t, value: c };
            i.contentWindow.postMessage(JSON.stringify(s), 'https://www.cisco.com');
          }
          function o (e) {
            ctm.util.consoleLog('### XDLS: Init function that initializes Iframe'),
              (n = XdUtils.extend(e, n));
            var c = document.createElement('div');
            window.addEventListener
              ? window.addEventListener('message', t, !1)
              : window.attachEvent('onmessage', t),
              (c.innerHTML =
                '<iframe id="' +
                n.iframeId +
                '" src=' +
                n.iframeUrl +
                ' style="display: none;"></iframe>'),
              document.body.appendChild(c),
              (i = document.getElementById(n.iframeId));
          }
          function s () {
            return u
              ? !!p ||
                  (ctm.util.consoleLog(
                    '### XDLS: You must wait for iframe ready message before using the api.'
                  ),
                  !1)
              : (ctm.util.consoleLog(
                  '### XDLS: You must call xdLocalStorage.init() before using it.'
                ),
                !1);
          }
          var i,
            a = 'cross-domain-local-message',
            n = {
              iframeId: 'cross-domain-iframe',
              iframeUrl: void 0,
              initCallback: function () {},
            },
            r = -1,
            d = {},
            u = !1,
            p = !0;
          return {
            init: function (e) {
              if (!e.iframeUrl) throw 'You must specify iframeUrl';
              return u
                ? void ctm.util.consoleLog('### XDLS: xdLocalStorage was already initialized!')
                : ((u = !0),
                  void ('complete' === document.readyState
                    ? o(e)
                    : window.addEventListener('load', function () {
                        ctm.util.consoleLog(
                          '### XDLS: In onload event listner for XDLS Iframe initialization ###'
                        ),
                          o(e);
                      })));
            },
            setItem: function (e, t, o) {
              s() && c('set', e, t, o);
            },
            getItem: function (e, t) {
              s() && c('get', e, null, t);
            },
            removeItem: function (e, t) {
              s() && c('remove', e, null, t);
            },
            key: function (e, t) {
              s() && c('key', e, null, t);
            },
            getSize: function (e) {
              s() && c('size', null, null, e);
            },
            getLength: function (e) {
              s() && c('length', null, null, e);
            },
            clear: function (e) {
              s() && c('clear', null, null, e);
            },
            wasInit: function () {
              return u;
            },
          };
        })()),
      ctmsRequire.define('xdLocalStorage', function () {}),
      'undefined' == typeof ctm && (ctm = {}),
      'undefined' == typeof ctm.util && (ctm.util = {}),
      (ctm.util.matches = function (e, t) {
        return (
          e.matches ||
          e.matchesSelector ||
          e.msMatchesSelector ||
          e.mozMatchesSelector ||
          e.webkitMatchesSelector ||
          e.oMatchesSelector
        ).call(e, t);
      }),
      (ctm.util.extend = function (e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++)
          if (arguments[t])
            for (var c in arguments[t]) arguments[t].hasOwnProperty(c) && (e[c] = arguments[t][c]);
        return e;
      }),
      (ctm.util.closest = function (e, t) {
        return (
          e && ('undefined' != typeof e.tagName && t(e) ? e : ctm.util.closest(e.parentNode, t))
        );
      }),
      (ctm.util.ready = function (e) {
        (
          document.attachEvent
            ? 'complete' === document.readyState
            : 'loading' !== document.readyState
        )
          ? e()
          : document.addEventListener('DOMContentLoaded', e);
      }),
      ctmsRequire.define('coreUtil', function () {}),
      'undefined' == typeof ctm && (ctm = {}),
      'undefined' == typeof ctm.util && (ctm.util = {});
    try {
      ctm.util.currentScript = document.currentScript;
    } catch (e) {
      console.log(e);
    }
    (ctm.util.getMetricsSrcInfo = function () {
      var e = '',
        t = function () {
          try {
            var e,
              t,
              c = document.querySelector(
                'script[src*="/etc/designs/cdc/fw/snapshots/js/responsive-"]'
              ),
              o = document.querySelector(
                'script[src*="/etc/designs/cdc/fw/snapshots/js/satellite-"]'
              );
            return (
              (e = ''),
              null != c
                ? ((t = parseFloat(c.getAttribute('src').match(/-(.*)v\.js/)[1])),
                  (e = t > 1.1 ? 'Snapshot-Responsive-' + t : ''))
                : null != o &&
                  ((t = parseFloat(o.getAttribute('src').match(/-(.*)v\.js/)[1])),
                  (e = t > 1.1 ? 'Snapshot-Satellite-' + t : '')),
              e
            );
          } catch (e) {
            console.log(e);
          }
        };
      try {
        var c = ctm.util.currentScript;
        return (e =
          null != c && null != c.getAttribute('data-config-src')
            ? c.getAttribute('data-config-src')
            : t());
      } catch (t) {
        return console.log(t), e;
      }
    }),
      ctmsRequire.define('telemetry', function () {});
    var $___var_9aca8d3b5eaf63ed = (function () {
      function e (t, c) {
        var o = {};
        return (
          (c = c || i),
          c.forEach(function (c) {
            var s = c.cond,
              i = c.vals,
              n = c.subs;
            (a(s) ? s(t) : ctm.util.matches(t, s)) &&
              (ctm.util.extend(o, a(i) ? i(t) : i), n.length < 1 || ctm.util.extend(o, e(t, n)));
          }),
          o
        );
      }
      function t (e, c, o, s) {
        (c = c || {}), (s = s || i);
        var n = [],
          r = { cond: e, vals: c, subs: n };
        s.push(r),
          a(o) &&
            o({
              subrule: function (e, c, o) {
                return t(e, c, o, n);
              },
            });
      }
      function c (e, t, c) {
        for (var o in t) e.hasAttribute(o) && (c[t[o]] = e.getAttribute(o));
        return c;
      }
      var o = function (e, c, o) {
          return t(e, c, o);
        },
        s = function (t) {
          var o = e(t),
            s = {
              'data-config-metrics-group': 'lpos',
              'data-config-metrics-title': 'lid',
              'data-config-metrics-item': 'linktext',
            };
          return (o = c(t, s, o));
        },
        i = [],
        a = function (e) {
          return 'function' == typeof e;
        };
      return { addMetricsRule: o, getMetricsInfo: s };
    })();
    rulesLib = $___var_9aca8d3b5eaf63ed;
    (ctm.util.addMetricsRule = rulesLib.addMetricsRule),
      (ctm.util.getMetricsInfo = rulesLib.getMetricsInfo),
      ('undefined' != typeof cdc &&
        'undefined' != typeof cdc.util &&
        'function' == typeof cdc.util.addMetricsRule) ||
        ('undefined' == typeof window.cdc && (window.cdc = {}),
        'undefined' == typeof cdc.util && (cdc.util = {}),
        (cdc.util.addMetricsRule = ctm.util.addMetricsRule),
        (cdc.util.getMetricsInfo = ctm.util.getMetricsInfo)),
      'undefined' == typeof cdc && (cdc = {}),
      'undefined' == typeof cdc.ut && (cdc.ut = {}),
      'undefined' == typeof cdc.ut.eventqueue && (cdc.ut.eventqueue = {}),
      'undefined' == typeof cdc.ut.eventqueue.q && (cdc.ut.eventqueue.q = []),
      'undefined' == typeof cdc.ut.trackEvent &&
        ((cdc.ut.trackEvent = {
          event: function (e, t) {
            console.log('tracking Queue triggered in ctm.js');
            try {
              var c = '';
              for (var o in t) c += '&' + o + '=' + t[o];
              cdc.ut.eventqueue.q.push({ a: e, b: t });
            } catch (e) {
              console.log('Unable to create cdc.ut.trackEvent.event function:', e);
            }
          },
        }),
        (trackEvent = cdc.ut.trackEvent)),
      'undefined' == typeof ctm.trackQueue && (ctm.trackQueue = []),
      (ctm.track = function (e) {
        'undefined' != typeof trackEvent && 'undefined' != typeof trackEvent.event
          ? trackEvent.event('ctmtrack', e)
          : ctm.trackQueue.push(e);
      }),
      (ctm.processTrackQueue = function (e) {
        'undefined' != typeof ctm.trackQueue && ctm.trackQueue.length > 0 && (ctm.trackQueue = []);
        for (var t = 0; t < e.length; t++) {
          var c = e[t];
          'undefined' != typeof trackEvent &&
            'undefined' != typeof trackEvent.event &&
            trackEvent.event('ctmtrack', c);
        }
      }),
      ctmsRequire.define('trackingApi', function () {}),
      ctmsRequire.define('xdcConfig', [], function () {
        var e = [
          '%.cisco.com',
          '%.jasper.com',
          '%.ciscospark.com',
          '%.ciscolive.com',
          'cisco.lookbookhq.com',
          'testcisco.marketing.adobe.com',
          'cisco.marketing.adobe.com',
          'ciscosales.my.salesforce.com',
          'test.salesforce.com',
          '%.webex.com',
          '%.rainfocus.com',
        ];
        return { xdcIncludeList: e };
      }),
      ctmsRequire.define('delayUtagConfig', [], function () {
        var e = ['%.rainfocus.com'];
        return e;
      }),
      ctmsRequire.define('ctmsUtil', ['xdcConfig', 'delayUtagConfig'], function (e, t) {
        const $___old_cfe9b87d9119e002 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_cfe9b87d9119e002)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_47c01efa79e9f191.userAgent
            ));
          return function () {
            return (
              'undefined' == typeof ctm && (ctm = {}),
              'undefined' == typeof ctm.util && (ctm.util = {}),
              (ctm.util.logQueue = []),
              (ctm.util.consoleLog = function () {
                const $___old_f8a0c06723143312 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'localStorage'
                );
                try {
                  if ($___old_f8a0c06723143312)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___stub_b317e19f866a2da7.localStorage
                    ));
                  return function () {
                    var e = document.location.search,
                      t = /(\?|\&)ctmLog\=true/gi;
                    if (
                      ('object' == typeof localStorage &&
                        'undefined' != typeof localStorage.ctmLog) ||
                      t.test(e)
                    ) {
                      for (var c = [], o = 0; o < arguments.length; o++)
                        'object' == typeof arguments[o]
                          ? (c[o] = JSON.stringify(arguments[o]))
                          : (c[o] = arguments[o]);
                      var s = c.toString() || '';
                      '' !== s && ctm.util.logQueue.push(s), console.log(s);
                    }
                  }.apply(this, arguments);
                } finally {
                  if ($___old_f8a0c06723143312)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___old_f8a0c06723143312
                    ));
                }
              }),
              (ctm.util.isDownloadLink = function (e) {
                if ('undefined' == typeof e.href || '' === e.href) return !1;
                var t = e.href;
                'string' == typeof t && t.indexOf('?') != -1 && (t = t.split('?').shift());
                var c = new RegExp(
                    '(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx|tcl|tar|m4v|mp4)$'
                  ),
                  o = c.test(t);
                return o;
              }),
              (ctm.util.isIframe = function () {
                try {
                  return window.self !== window.parent ? 'true' : 'false';
                } catch (e) {
                  return 'false';
                }
              }),
              (ctm.util.isTablet = (function (e) {
                if (/ipad|android.+\d safari|tablet/i.test(e)) return !0;
              })(navigator.userAgent || navigator.vendor || window.opera)
                ? 'true'
                : 'false'),
              (ctm.util.isMobile = (function (e) {
                if (
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                    e
                  ) ||
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                    e.substr(0, 4)
                  )
                )
                  return !0;
              })(navigator.userAgent || navigator.vendor || window.opera)
                ? 'true'
                : 'false'),
              (ctm.util.ls = {
                setConfigInfo: function (e, t) {
                  try {
                    return (localStorage[e] = JSON.stringify(t)), !0;
                  } catch (e) {
                    return !1;
                  }
                },
                getConfigInfo: function (e) {
                  try {
                    return JSON.parse(localStorage[e]);
                  } catch (e) {
                    return !1;
                  }
                },
                deleteConfigInfo: function (e) {
                  try {
                    return localStorage.removeItem(e), !0;
                  } catch (e) {
                    return !1;
                  }
                },
              }),
              (ctm.util.getLS = function (e) {
                try {
                  if ('undefined' != typeof localStorage) return localStorage.getItem(e);
                } catch (e) {
                  console.log('Unable to get localStorage:', e);
                }
              }),
              (ctm.util.setLS = function (e, t) {
                try {
                  'undefined' != typeof localStorage && localStorage.setItem(e, JSON.stringify(t));
                } catch (e) {
                  console.log('Unable to set localStorage:', e);
                }
              }),
              (ctm.util.deleteLS = function (e) {
                try {
                  'undefined' != typeof localStorage && localStorage.removeItem(e);
                } catch (e) {
                  console.log('Unable to remove localStorage:', e);
                }
              }),
              (ctm.util.getQueryStringObj = function (e) {
                var t = {},
                  c = '';
                if ('undefined' != typeof e && e) {
                  if (!(e.indexOf('?') > -1)) return t;
                  c = e.substring(e.indexOf('?') + 1);
                }
                for (var o = c.split('&'), s = 0; s < o.length; s++)
                  if ('undefined' != typeof o[s] && '' != o[s]) {
                    var i = o[s].split('=');
                    t[decodeURIComponent(i[0]).toLowerCase()] = decodeURIComponent(i[1]);
                  }
                return t;
              }),
              (ctm.util.omsData = []),
              (ctm.util.qFunc = (function () {
                var e = [],
                  t = [],
                  c = !1,
                  o = function (t) {
                    e && e.push(t);
                  },
                  s = function () {
                    if (e.length > 0)
                      for (var c = 0; c <= e.length - 1; c++)
                        'function' == typeof e[c] && e[c].call();
                    else if (t.length > 0) {
                      for (var c = 0; c <= t.length - 1; c++)
                        'function' == typeof t[c][0] &&
                          'function' == typeof t[c][1] &&
                          t[c][0].call();
                      (t = []), (ctm.util.omsData = []);
                    }
                  },
                  i = function (e) {
                    o(e);
                  },
                  a = function (e, c, o) {
                    t && t.push([e, c]), o();
                  };
                return { append: i, queueCB: a, run: s, runNow: c };
              })()),
              (ctm.util.getOMS = function (e, t) {
                ctm.util.qFunc.queueCB(
                  function () {
                    xdLocalStorage.getItem('omsData', function (c) {
                      if ('undefined' != typeof c.value) {
                        var o = JSON.parse(c.value);
                        if (o)
                          for (var s = 0; s <= e.length - 1; s++) {
                            var i = e[s].toString() + '_ts';
                            if (o[e[s]] && o[i]) {
                              var a = {};
                              (a[e[s]] = o[e[s]]), (a[i] = o[i]), ctm.util.omsData.push(a);
                            }
                          }
                      }
                      t(ctm.util.omsData);
                    });
                  },
                  t,
                  function () {
                    ctm.util.qFunc.runNow === !0 && ctm.util.qFunc.run();
                  }
                );
              }),
              (ctm.util.fetchCountry = function () {
                var e = 'none';
                return (
                  'undefined' != typeof cdc &&
                    'undefined' != typeof cdc.userInfoDispatcher &&
                    cdc.userInfoDispatcher.getUserProfile({
                      listOfDataFields: ['locale'],
                      callback: function (t) {
                        t.locale.country_code && (e = t.locale.country_code);
                      },
                    }),
                  e
                );
              }),
              (ctm.util.setCookie = function (e) {
                e.cookieName ||
                  ((e = { cookieName: e, cookieValue: arguments[1] }),
                  arguments.length > 2 && (e.days = arguments[2]));
                var t = '',
                  c = '',
                  o = '',
                  s = parseInt(e.msecs);
                if ((isNaN(s) && e.days && (s = 24 * e.days * 60 * 60 * 1000), !isNaN(s))) {
                  var i = new Date();
                  i.setTime(i.getTime() + s), (t = '; expires=' + i.toUTCString());
                }
                (c = e.path ? '; path=' + e.path + ';' : '; path=/;'),
                  e.domain && (o = '; domain=' + e.domain);
                try {
                  document.cookie = e.cookieName + '=' + escape(e.cookieValue) + t + c + o;
                } catch (e) {
                  return !1;
                }
                return !0;
              }),
              (ctm.util.getCookie = function (e) {
                e.cookieName || (e = { cookieName: e });
                var t = ctm.util.unpackParamString(document.cookie, /\s*;\s*/);
                return t[e.cookieName] || '';
              }),
              (ctm.util.deleteCookie = function (e) {
                var t,
                  c = {};
                for (t in e) e.hasOwnProperty(t) && (c[t] = e[t]);
                return (c.msecs = c.days = -1), (c.cookieValue = ''), ctm.util.setCookie(c);
              }),
              (ctm.util.packParamString = function (e, t) {
                t = t || '&';
                var c,
                  o = [];
                for (c in e) e.hasOwnProperty(c) && o.push(escape(c) + '=' + escape(e[c]));
                return o.join(t);
              }),
              (ctm.util.unpackParamString = function (e, t) {
                t = t || '&';
                var c,
                  o,
                  s,
                  i,
                  a,
                  n = e.split(t),
                  r = {};
                for (a = 0; a < n.length && (c = n[a]); a++)
                  (o = c.indexOf('=')),
                    o < 0 ||
                      ((s = unescape(c.substring(0, o))),
                      (i = unescape(c.substring(o + 1))),
                      (r[s] = i));
                return r;
              }),
              (ctm.util.bindEvent = function (e, t, c, o) {
                e.addEventListener
                  ? e.addEventListener(t, c, !1)
                  : e.attachEvent && e.attachEvent((1 == o ? '' : 'on') + t, c);
              }),
              (ctm.util.isXDCIncludedFlag = (function (e, t) {
                for (var c = !1, o = 0; o < t.length; o++) {
                  var s = t[o];
                  (s = s.replace(new RegExp('\\.', 'g'), '\\.')),
                    (s = s.replace(new RegExp('%', 'g'), '.*?'));
                  var i = new RegExp(s, 'i');
                  if (i.test(e)) {
                    c = !0;
                    break;
                  }
                }
                return c;
              })(location.hostname, e.xdcIncludeList)),
              (ctm.util.isDelayUtagFlag = (function (e, t) {
                for (var c = !1, o = 0; o < t.length; o++) {
                  var s = t[o];
                  (s = s.replace(new RegExp('\\.', 'g'), '\\.')),
                    (s = s.replace(new RegExp('%', 'g'), '.*?'));
                  var i = new RegExp(s, 'i');
                  if (i.test(e)) {
                    c = !0;
                    break;
                  }
                }
                return c;
              })(location.hostname, t)),
              (ctm.util.isEmptyObject = function (e) {
                if (null == e) return !0;
                for (k in e) if (e.hasOwnProperty(k)) return !1;
                return !0;
              }),
              (ctm.util.isArrayIncludes = function (e, t, c) {
                function o (e, t) {
                  return (
                    e === t ||
                    ('number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t))
                  );
                }
                if ('undefined' == typeof t || t.length <= 0 || 'undefined' == typeof e) return !1;
                if ('function' == typeof Array.prototype.includes) return t.includes(e);
                if (null == t) throw new TypeError('"arr" is null or not defined');
                var s = Object(t),
                  i = s.length >>> 0;
                if (0 === i) return !1;
                for (var a = 0 | c, n = Math.max(a >= 0 ? a : i - Math.abs(a), 0); n < i; ) {
                  if (o(s[n], e)) return !0;
                  n++;
                }
                return !1;
              }),
              (ctm.util.detectIE = function (e) {
                return (
                  (e = e || navigator.userAgent),
                  e.indexOf('MSIE ') > -1 || e.indexOf('Trident/') > -1
                );
              }),
              (ctm.util.stringify = function (e, t, c, o, s) {
                function i (e) {
                  if ('object' != typeof e) return null !== e ? e.toString() : '';
                  for (var r in e) {
                    var d = e[r];
                    '' == d ||
                      null === d ||
                      d instanceof Array ||
                      ctm.util.isArrayIncludes(r, s) ||
                      ('object' == typeof d
                        ? (o && (n = r + '_'), i(d))
                        : (a += t + n + r + c + d));
                  }
                  return (n = ''), a;
                }
                var a = '',
                  t = t || '|',
                  c = c || ':',
                  o = o || !1,
                  n = '';
                a = i(e);
                var r = new RegExp('^\\' + t);
                return a.replace(r, '');
              }),
              ctm.util
            );
          }.apply(this, arguments);
        } finally {
          if ($___old_cfe9b87d9119e002)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_cfe9b87d9119e002
            ));
        }
      }),
      (ctm.util.isFormReqFieldEntered = function (e) {
        if ('object' == typeof e && 'FORM' === e.tagName) {
          var t = e.querySelectorAll('[required]');
          if (t.length > 0) {
            for (var c = 0; c < t.length; c++) if (!t[c].checkValidity()) return !1;
            return !0;
          }
          return !0;
        }
      }),
      ctmsRequire.define('ctmsFe', [], function () {
        var e = function (e) {
            var e = e.replace(/\.cisco\.com$|\.jiveon\.com$|\.cisco$/i, ''),
              t = [
                'www[0-9]*',
                'apps',
                'cdx',
                'cepx-active-prod[0-9]*',
                'wemapp-(author|publish)-(prod[0-9]|nprd)[0-9]*-[0-9]*',
                'www-(author|test|publish)',
                'www-(author|test|publish)-nprd',
                'wwwin-tools',
                'cisco-apps',
                'grs',
                'investor',
                'newsroom',
                'origin-software',
                'software',
                'sso[0-9]*',
                'tools',
                'webapps',
                'wwwin',
                '.*.cloudapps',
                '.*.cisco',
                '^nic$',
                'supportforums',
                'services',
                'search',
                'blogs',
                'youprotect',
                'soladv',
              ],
              c = [
                'apps-lt',
                'apps-stage',
                'cdx-stage',
                '(cepx|ecmx)-(active|staging|wip)-(lt|stage)[0-9]*',
                'fdk-author-lt',
                'fdk-author-stage',
                '(www(in)?-)?fdk-(publish-)?lt[0-9]*',
                '(www(in)?-)?fdk-(publish-)?.?stage[0-9]*',
                'wemapp-(author|publish)-.?stage[0-9]*-[0-9]*',
                'software-lt',
                'software-stage',
                'sso-nprd[0-9]*',
                'tools-lt',
                'tools-stage',
                'www-lt[0-9]*',
                'www-(author-|publish-)*stage[0-9]*',
                'webapps-lt',
                'webapps-stage',
                'wwwin-tools-(dev|stage|lt)',
                'wwwin-stage',
                '.*-stage.cloudapps',
                '.*-lt.cloudapps',
                '.*-preprod',
              ],
              o = [
                'apps-dev',
                'cdx-dev',
                'cepx-active-dev[0-9]*',
                'ecmx-active-dev[0-9]*',
                'fdk-(author-)?dev[0-9]*',
                '(www(in)?-)?fdk-(author-)?devint[0-9]*',
                'wemapp-(author|publish)-(dev|devint|idev)[0-9]*-[0-9]*',
                'software-dev',
                'sso-idev[0-9]*',
                'tools-dev',
                'www-(dev|idev)[0-9]*',
                'localhost',
                'webapps-dev',
                'wwwin-dev',
                '.*-dev.cloudapps',
              ],
              s = new RegExp('^(' + t.join('|') + ')(\\.|:|$)'),
              i = new RegExp('^(' + c.join('|') + ')(\\.|:|$)'),
              a = new RegExp('^(' + o.join('|') + ')(\\.|:|$)');
            return (function (e) {
              return a.test(e) ? 'dev' : i.test(e) ? 'stage' : s.test(e) ? 'prod' : 'unknown';
            })(e);
          },
          t = function () {
            return e(window.location.host);
          };
        return { findEnv: t, matchEnv: e };
      }),
      ctmsRequire.define('ctmsCrossDomainLS', ['ctmsUtil'], function (e) {
        return (
          'undefined' == typeof ctm && (ctm = {}),
          'undefined' == typeof ctm.util && (ctm.util = {}),
          (ctm.util.isCdLs = 'www.cisco.com' !== window.location.hostname),
          (ctm.util.cdls = {
            setConfigInfo: function (e, t) {
              try {
                return ctm.util.isXDCIncludedFlag && xdLocalStorage.setItem(e, t), !0;
              } catch (e) {
                return console.log('exception', e), !1;
              }
            },
            getConfigInfo: function (e, t) {
              try {
                ctm.util.isXDCIncludedFlag && xdLocalStorage.getItem(e, t);
              } catch (e) {
                return console.log('exception', e), !1;
              }
            },
            deleteConfigInfo: function (e) {
              try {
                ctm.util.isXDCIncludedFlag && xdLocalStorage.removeItem(e);
              } catch (e) {
                return console.log('exception', e), !1;
              }
            },
          }),
          { isCdLs: ctm.util.isCdLs, cdls: ctm.util.cdls }
        );
      }),
      ctmsRequire.define('cdcPerformance', ['ctmsFe', 'ctmsCrossDomainLS', 'ctmsUtil'], function (
        e,
        t,
        c
      ) {
        cdcPerformance = (function () {
          return (
            (getFirstPaintIE = function () {
              var e = 'na';
              if (window.performance) {
                var t = window.performance.timing;
                'number' == typeof t.msFirstPaint && (e = t.msFirstPaint - t.navigationStart);
              }
              return e;
            }),
            (getFirstPaintCh = function () {
              var e = 'na';
              if (window.performance && 'undefined' != typeof window.performance.getEntriesByType)
                for (
                  var t = window.performance.getEntriesByType('paint'), c = 0;
                  c < t.length;
                  c++
                ) {
                  var o = t[c];
                  if ('first-paint' == o.name) {
                    e = o.startTime;
                    break;
                  }
                }
              return e;
            }),
            (getFirstPaintOther = function () {
              var e = 'na';
              if (window.performance) {
                var t = window.performance.timing;
                e = t.domLoading - t.navigationStart;
              }
              return e;
            }),
            (getFirstPaint = function () {
              var e,
                t,
                c = getFirstPaintIE(),
                o = getFirstPaintCh(),
                s = getFirstPaintOther();
              return (
                'na' !== c
                  ? ((e = c), (t = 'IE'))
                  : 'na' !== o
                  ? ((e = o), (t = 'Chrome'))
                  : 'na' != s && ((e = s), (t = 'Other')),
                { fpValue: e, fpType: t, calculatedFP: s }
              );
            }),
            (sendPerformancePost = function (t) {
              var c = Date.now();
              'undefined' != typeof t && 'undefined' != typeof t.page && (t.page.ets = c);
              var o = e.findEnv();
              if ('prod' === o) {
                var s = '//mcc-tags.cisco.com/cgi-bin/cdcpd',
                  i = s,
                  a = new XMLHttpRequest();
                return (
                  a.open('POST', i),
                  a.setRequestHeader('Content-type', 'application/json'),
                  (t = JSON.stringify(t)),
                  a.send(t),
                  !0
                );
              }
              return !1;
            }),
            (getPerformance = function () {
              if ('undefined' != typeof performance) {
                var e = performance.timing,
                  t = 'na';
                'undefined' != typeof performance.getEntriesByType &&
                  (t = performance.getEntriesByType('mark'));
                var c = document.cookie.replace(
                    /(?:(?:^|.*;\s*)CP_GUTC\s*\=\s*([^;]*).*$)|^.*$/,
                    '$1'
                  ),
                  o = getFirstPaint(),
                  s = {
                    performance: {
                      redirectTiming: e.fetchStart - e.navigationStart,
                      appCacheTiming: e.domainLookupStart - e.fetchStart,
                      dnsTiming: e.domainLookupEnd - e.domainLookupStart,
                      tcpTiming: e.connectEnd - e.connectStart,
                      requestTiming: e.responseStart - e.connectEnd,
                      responseTiming: e.responseEnd - e.responseStart,
                      processingTiming: e.loadEventStart - e.domLoading,
                      onLoadTiming: e.loadEventEnd - e.loadEventStart,
                      totalPageLoadTime: e.loadEventEnd - e.navigationStart,
                      navigationStart: e.navigationStart,
                      unloadEventStart: e.unloadEventStart,
                      unloadEventEnd: e.unloadEventEnd,
                      redirectStart: e.redirectStart,
                      redirectEnd: e.redirectEnd,
                      fetchStart: e.fetchStart,
                      domainLookupStart: e.domainLookupStart,
                      domainLookupEnd: e.domainLookupEnd,
                      connectStart: e.connectStart,
                      connectEnd: e.connectEnd,
                      secureConnectionStart: e.secureConnectionStart,
                      requestStart: e.requestStart,
                      responseStart: e.responseStart,
                      responseEnd: e.responseEnd,
                      domLoading: e.domLoading,
                      domInteractive: e.domInteractive,
                      domContentLoadedEventStart: e.domContentLoadedEventStart,
                      domContentLoadedEventEnd: e.domContentLoadedEventEnd,
                      domComplete: e.domComplete,
                      loadEventStart: e.loadEventStart,
                      loadEventEnd: e.loadEventEnd,
                      firstPaint: o.fpValue,
                      firstPaintType: o.fpType,
                      calculatedFP: o.calculatedFP,
                      msFirstPaint: e.msFirstPaint,
                      marks: t,
                    },
                    page: {
                      url: location.href,
                      ua: window.navigator.userAgent,
                      CP_GUTC: c,
                      test: 'JSON sent as string.',
                      ts: e.fetchStart,
                    },
                  };
              }
              return s;
            }),
            (writePerformanceData = function () {
              'undefined' != typeof performance &&
                (window.onbeforeunload = function () {
                  var e = getPerformance();
                  'undefined' != typeof localStorage &&
                    localStorage.setItem('performanceData', JSON.stringify(e));
                });
            }),
            (retrievePerformanceData = function () {
              var e = '';
              return (
                'undefined' != typeof localStorage &&
                  ((e = localStorage.getItem('performanceData')), (e = JSON.parse(e))),
                e
              );
            }),
            (sendPerformanceOnExit = function () {
              var e = getPerformance();
              sendPerformancePost(e);
            }),
            (savePerformanceData = function () {
              if ('undefined' != typeof performance) {
                var e = getPerformance();
                ctm.util.cdls.setConfigInfo('performanceData', JSON.stringify(e));
              }
            }),
            (processPerfData = function (e) {
              e &&
                'undefined' != typeof e.value &&
                '' !== e.value &&
                null !== e.value &&
                sendPerformancePost(JSON.parse(e.value));
            }),
            (performanceInit = function () {
              ctm.util.cdls.getConfigInfo('performanceData', processPerfData);
            }),
            ctm.util.bindEvent(window, 'beforeunload', savePerformanceData),
            {
              sendPerformanceOnExit: sendPerformanceOnExit,
              retrievePerformanceData: retrievePerformanceData,
              writePerformanceData: writePerformanceData,
              sendPerformancePost: sendPerformancePost,
              savePerformanceData: savePerformanceData,
              performanceInit: performanceInit,
            }
          );
        })();
      }),
      ctmsRequire.define('profileConfig', [], function () {
        var e = [
          { '.cisco.com/cisco/psn': 'ctms' },
          { 'cxpathfindersuccesstracks.cisco.com': 'ctms' },
          { 'bcsroi.cisco.com': 'ctms' },
          { 'meraki.cisco.com': 'meraki' },
          { 'merakiresources.cisco.com': 'meraki' },
          { merakigo: 'merakigo' },
          { 'meraki-go': 'merakigo' },
          { '%.appdynamics.com': 'appdynamics' },
          { '%.appdynamics.fr': 'appdynamics' },
          { '%.appdynamics.de': 'appdynamics' },
          { '%.cisco.com/c/r/appdynamics': 'appdynamics' },
          { 'appdynamics-wem.cisco.com': 'appdynamics' },
          { 'appdynamics.rmglabs.com': 'appdynamics' },
          { 'investor.cisco.com': 'cdc' },
          { 'cisco.s3.q4web.com': 'gdpr' },
          { 'developer-portal%.com': 'gdpr' },
          { 'developer.webex.com': 'gdpr' },
          { 'ondemandelearning.cisco.com': 'gdpr' },
          { 'certsite.net': 'gdpr' },
          { 'marketplace-intb.ciscospark.com': 'gdpr' },
          { 'apphub.webex.com': 'gdpr' },
          { 'apps.cisco.com/Commerce/': 'commerce' },
          { 'apps.cisco.com/ccw': 'commerce' },
          { 'apps.cisco.com/cfgon': 'commerce' },
          { 'tools.cisco.com/qorept/': 'commerce' },
          { 'soladv.cloudapps.cisco.com': 'commerce' },
          { 'ccw%.cloudapps.cisco.com': 'commerce' },
          { 'pdricw%.cloudapps.cisco.com': 'commerce' },
          { 'pdrqo%.cloudapps.cisco.com': 'commerce' },
          { 'prfl%.cloudapps.cisco.com': 'commerce' },
          { 'viewst%.cloudapps.cisco.com': 'commerce' },
          { 'ccrc%.cisco.com': 'commerce' },
          { 'vm-b2c-%.cisco.com': 'commerce' },
          { 'connectthedots.cisco.com': 'commerce' },
          { 'cdexternal-stage.cloudapps.cisco.com': 'commerce' },
          { 'ccrc.cisco.com': 'commerce' },
          { 'ccwr-sc-stg.cisco.com': 'commerce' },
          { 'buildprice.cisco.com': 'bnp' },
          { 'b2csmb%.cisco.com': 'smb' },
          { '%/about/legal/privacy-full.html': 'privacy' },
          { 'onesearch%.cisco.com': 'cec' },
          { 'onesearch%.cloudapps.cisco.com': 'cec' },
          { 'srchui%.cloudapps.cisco.com': 'cec' },
          { 'diralpha%.cloudapps.cisco.com': 'cec' },
          { 'techzone%.cisco.com/': 'cec' },
          { 'helpzone.cisco.com': 'cec' },
          { 'helpzone-stage.cisco.com': 'cec' },
          { 'cisco.jiveon.com': 'cec' },
          { 'cisco-poc.jiveon.com': 'cec' },
          { 'cisco-preprod.jiveon.com': 'cec' },
          { 'wiki%.cisco.com': 'cec' },
          { 'wwwin-tools%.cisco.com/dir/': 'cec' },
          { 'directory%.cisco.com': 'cec' },
          { '.cisco.com/web/fw/tools/ssue': 'cec' },
          { '.cisco.com/c/cec/': 'cec' },
          { '.cisco.com/c/r/gsx/': 'cec' },
          { 'gsx-nprd.cisco.com/c/r/gsx/': 'cec' },
          { 'gsx.cisco.com': 'cec' },
          { 'wwwin.cisco.com': 'cec' },
          { 'youprotect.cisco.com': 'cec' },
          { 'apps.na.collabserv.com': 'cec' },
          { 'apps.scniris.com': 'cec' },
          { 'search.cisco.com': 'search' },
          { 'searchx.cisco.com': 'search' },
          { 'search-green.cisco.com': 'search' },
          { 'searchd.cisco.com': 'search' },
          { 'search-prf.cloudapps.cisco.com': 'search' },
          { 'cdcsearch-stage.cisco.com': 'search' },
          { 'smbmarketplace.cisco.com': 'cdc' },
          { 'beli.cisco.com': 'cdc' },
          { 'ciscobusinesslink.cisco.com': 'cdc' },
          { 'solucionespyme.cisco.com': 'cdc' },
          { 'ticcostarica.com': 'cdc' },
          { 'todoenredesecuador.com': 'cdc' },
          { 'armada.cisco.com.tr': 'cdc' },
          { '.ciscobusinesscloudadvisoradoptionreport.com': 'cdc' },
          { 'livestreaming.cisco.com': 'cdc' },
          { '18binarydev.cisco.com': 'cdc' },
          { '20bytestage.cisco.com': 'cdc' },
          { 'tools-stage-was7.cisco.com/ys3bnx/': 'commerce' },
          { 'qa.ciscosmb.psdops.com': 'cdc' },
          { 'mycase.cloudapps.cisco.com/': 'support' },
          { 'mycase-%.cloudapps.cisco.com/': 'support' },
          { 'quickview-stage.cloudapps.cisco.com/': 'support' },
          { 'quickview.cloudapps.cisco.com/': 'support' },
          { 'bst-stage.cloudapps.cisco.com/bugsearch/': 'support' },
          { 'bst.cloudapps.cisco.com/bugsearch/': 'support' },
          { 'snmp-stage.cloudapps.cisco.com/support/snmp/': 'support' },
          { 'snmp.cloudapps.cisco.com/support/snmp/': 'support' },
          { 'cway.cisco.com': 'support' },
          { 'cway-stg.cisco.com': 'support' },
          { 'collaborationhelp.cisco.com': 'support' },
          { 'supportforums-stage.cisco.com': 'support' },
          { 'supportforums-dev1.cisco.com': 'support' },
          { 'supportforums-dev2.cisco.com': 'support' },
          { 'supportforums.cisco.com': 'support' },
          { 'supportforums-dev1.lithium.com': 'support' },
          { 'supportforums-dev2.lithium.com': 'support' },
          { 'supportforums-stage.lithium.com': 'support' },
          { 'ciscosupportdev1.stage.lithium.com': 'support' },
          { 'kxiwq67737.stage.lithium.com': 'support' },
          { 'ciscosupportdev2.stage.lithium.com': 'support' },
          { 'csc-stage.cisco.com': 'support' },
          { 'software%.cisco.com': 'support' },
          { '.cisco.com/support/': 'support' },
          { '.cisco.com/cpc/': 'support' },
          { '.cisco.com/servicerequesttool/': 'support' },
          { '.cisco.com/bugsearch': 'support' },
          { '.cisco.com/swift/': 'support' },
          { '.cisco.com/itdit/cfn/': 'support' },
          { '.cisco.com/gct/upgrade/': 'support' },
          { '.cisco.com/itdit/mibs/servlet/': 'support' },
          { '.cisco.com/en/us/support/': 'support' },
          { '.cisco.com/cisco/web/support/': 'support' },
          { '.cisco.com/cisco/web/psa/': 'support' },
          { '.cisco.com/cisco/web/br/support/': 'support' },
          { '.cisco.com/cisco/web/br/psa/': 'support' },
          { '.cisco.com/cisco/web/cn/support/': 'support' },
          { '.cisco.com/cisco/web/cn/psa/': 'support' },
          { '.cisco.com/cisco/web/jp/support/': 'support' },
          { '.cisco.com/cisco/web/jp/psa/': 'support' },
          { '.cisco.com/cisco/web/la/support/': 'support' },
          { '.cisco.com/cisco/web/la/psa/': 'support' },
          { '.cisco.com/cisco/web/ru/support/': 'support' },
          { '.cisco.com/cisco/web/ru/psa/': 'support' },
          { '.cisco.com/cisco/web/ca/fr/support/': 'support' },
          { '.cisco.com/cisco/web/ca/fr/psa/': 'support' },
          { '.cisco.com/c/%/support/': 'support' },
          { '.cisco.com/c/%/td/': 'support' },
          { 'csc-%.cisco.com': 'support' },
          { '.cisco.com/web/applicat/dsprecal/': 'support' },
          { '.cisco.com/web/tsweb/': 'support' },
          { '.cisco.com/cgi-bin/software/': 'support' },
          { '.cisco.com/cgi-bin/xxipsnet/': 'support' },
          { 'sds-%.cisco.com': 'support' },
          { 'community.cisco.com': 'support' },
          { 'community-dev3.cisco.com': 'support' },
          { 'cce%.cloudapps.cisco.com': 'cdc' },
          { 'ontrack%.cisco.com': 'cdc' },
          { 'ssdevnode.cloudapps.cisco.com': 'cdc' },
          { 'connectedfutures%.cisco.com': 'connectedfutures' },
          { 'cf-stage.readystate.com': 'connectedfutures' },
          { 'cloudsso.cisco.com': 'apps' },
          { 'sso.cisco.com': 'apps' },
          { 'sso%.cisco.com': 'apps' },
          { 'swipe.cisco.com': 'apps' },
          { 'globalcontacts.cloudapps.cisco.com/contacts/': 'apps' },
          { 'globalcontacts.cloudapps.cisco.com/secure/': 'apps' },
          { 'globalcontacts-stage.cloudapps.cisco.com/contacts/': 'apps' },
          { 'globalcontacts-dev.cloudapps.cisco.com/contacts/': 'apps' },
          { 'locatr%.cloudapps.cisco.com/': 'cdc' },
          { 'dcpplat%.cloudapps.cisco.com': 'apps' },
          { 'dcp%.cisco.com': 'apps' },
          { 'wwwin-github.cisco.com': 'apps' },
          { 'iotconnect.cisco.com': 'apps' },
          { 'iotconnect%.cloudapps.cisco.com': 'apps' },
          { 'camp.cloudapps.cisco.com': 'apps' },
          { 'camp-stage.cloudapps.cisco.com': 'apps' },
          { 'camp-dev.cloudapps.cisco.com': 'apps' },
          { 'campperl.cloudapps.cisco.com': 'apps' },
          { 'campperl-stage.cloudapps.cisco.com': 'apps' },
          { 'campperl-dev.cloudapps.cisco.com': 'apps' },
          { 'ciscoarchive.cloudapps.cisco.com': 'apps' },
          { 'ciscoarchive-stage.cloudapps.cisco.com': 'apps' },
          { 'ciscoarchive-dev.cloudapps.cisco.com': 'apps' },
          { 'smartservices%.cloudapps.cisco.com': 'apps' },
          { 'tools%.cisco.com/smartservices': 'apps' },
          { 'jasperconnect.cisco.com': 'apps' },
          { 'jasperconnect%.cloudapps.cisco.com': 'apps' },
          { 'dce%.cisco.com': 'apps' },
          { 'data-analytics%.cisco.com': 'apps' },
          { 'ipa%.cloudapps.cisco.com': 'apps' },
          { 'p2p%.cloudapps.cisco.com': 'apps' },
          { 'ibpm%.cisco.com': 'apps' },
          { 'newpos%.cloudapps.cisco.com/': 'apps' },
          { 'getlog%.cloudapps.cisco.com/': 'apps' },
          { 'tools.cisco.com': 'apps' },
          { 'webapps.cisco.com': 'apps' },
          { 'devnetapps.cisco.com': 'cdc' },
          { 'centrojavapoc.cloudapps.cisco.com': 'apps' },
          { 'dsv%.cloudapps.cisco.com': 'apps' },
          { 'dipr%.cloudapps.cisco.com': 'apps' },
          { 'pep%.cloudapps.cisco.com': 'apps' },
          { 'newdca%.cloudapps.cisco.com': 'apps' },
          { 'dsv-reporting%.cloudapps.cisco.com': 'apps' },
          { 'drf-stage.cloudapps.cisco.com/drf/': 'apps' },
          { 'dpa.cloudapps.cisco.com/drf/': 'apps' },
          { 'apps.cisco.com': 'apps' },
          { 'ciscosales%.my.salesforce.com': 'apps' },
          { 'ciscosales%.lightning.force.com': 'apps' },
          { 'estore%.cisco.com': 'apps' },
          { 'dgcrep-prd-001.cisco.com': 'apps' },
          { 'salesconnect%.cisco.com': 'apps' },
          { 'statemachines.cisco.com': 'apps' },
          { 'apj-case-studies.cisco.com': 'apps' },
          { 'heliosx-dev.cisco.com': 'apps' },
          { 'trusttech.cisco.com': 'apps' },
          { 'www.bbc.com': 'apps' },
          { 'merchandise-store.cisco.com': 'apps' },
          { 'centrojsmed%.cisco.com': 'apps' },
          { 'identity.cisco.com': 'apps' },
          { 'community%.meraki.com': 'apps' },
          { 'customerservice%.cloudapps.cisco.com': 'apps' },
          { 'dtx2%.cisco.com': 'apps' },
          { 'eam%.cisco.com': 'apps' },
          { 'warp.cloudapps.cisco.com': 'apps' },
          { 'ngfwpe%.cisco.com': 'apps' },
          { 'teamstoolkit%.cisco.com': 'apps' },
          { 'trustportal%.cisco.com': 'apps' },
          { 'mce%.cisco.com': 'apps' },
          { 'learningspace%.cisco.com': 'apps' },
          { 'search-prd.cisco.com': 'apps' },
          { 'search-stg.cisco.com': 'apps' },
          { 'cisco.gomob.biz': 'apps' },
          { 'impact%.cisco.com': 'apps' },
          { '.cisco.com/c/r/techdocs': 'apps' },
          { 'techdocs.cisco.com': 'apps' },
          { 'sdwan-docs.cisco.com': 'apps' },
          { 'salesplaybook.cisco.com': 'apps' },
          { 'marketingvelocity.uberflip.com': 'apps' },
          { 'cta.amp.cisco.com': 'apps' },
          { '%cta.%.amp.cisco.com': 'apps' },
          { 'www.multiplydiversity.com': 'apps' },
          { 'nextgenfcst%.cisco.com': 'apps' },
          { 'cx.cisco.com': 'apps' },
          { 'cx-cloud.cisco.com': 'apps' },
          { 'cxportal%.cisco.com': 'apps' },
          { 'cx-%.cisco.com': 'apps' },
          { 'tie.cisco.com': 'apps' },
          { 'apollo-stage.cisco.com': 'apps' },
          { 'ibn-assessment.cisco.com': 'apps' },
          { 'merakipartners.com': 'apps' },
          { 'partner-merakicommunities.cs45.force.com': 'apps' },
          { '%.ziftsolutions.com': 'apps' },
          { 'cxpartner%.cisco.com': 'apps' },
          { 'digital-learning.cisco.com/cx#/': 'apps' },
          { 'smartbuy-test.cisco.com': 'apps' },
          { 'emear-qbr.cisco.com': 'apps' },
          { 'wwwin-webapps%.cisco.com/ComplianceWizard/': 'apps' },
          { 'wwwin-webapps%.cisco.com/Compliance/': 'apps' },
          { 'emear-leaderboard.cisco.com': 'apps' },
          { 'tmgmatrix%.cisco.com': 'apps' },
          { 'bx.cisco.com': 'apps' },
          { '.cisco.com/c/r/cbx/': 'apps' },
          { 'spokesperson%.cisco.com': 'apps' },
          { '%.cvent.com': 'apps' },
          { 'cae-globalcentro-%.cisco.com': 'apps' },
          { 'centro.cisco.com': 'apps' },
          { 'services%.cisco.com': 'cec' },
          { '%.ciscospark.com': 'collaboration' },
          { '%ciscospark%cisco.com': 'collaboration' },
          { '%.webex.': 'collaboration' },
          { '%webex%.cisco.com': 'collaboration' },
          { 'webex-develop.netlify.app': 'collaboration' },
          { '%/zh_cn/%': 'cdc-china' },
          { '.cisco.com%/zh-cn/%': 'cdc-china' },
          { '.cisco.com%/zh/cn/%': 'cdc-china' },
          { 'videolounge.cisco.com': 'cdc' },
          { 'blogs.cisco.com': 'cdc' },
          { 'communities.cisco.com': 'cdc' },
          { 'communities-private.cisco.com': 'cdc' },
          { 'insider.cisco.com': 'cdc' },
          { 'dnaroi.cisco.com': 'cdc' },
          { 'cloud.path.cisco.com': 'cdc' },
          { 'journey.cisco.com': 'cdc' },
          { 'explore.cisco.com': 'cdc' },
          { '.cisco.com/c/r/': 'cdc' },
          { 'internetofeverything.cisco.com': 'cdc' },
          { 'ioeassessment.cisco.com': 'cdc' },
          { 'share.cisco.com': 'cdc' },
          { 'newsroom.cisco.com': 'cdc' },
          { 'weare.cisco.com': 'cdc' },
          { 'socialmedia.cisco.com': 'cdc' },
          { 'marketplace.cisco.com': 'cdc' },
          { 'developer.cisco.com': 'cdc' },
          { 'testing-developer.cisco.com': 'cdc' },
          { '.epuboffers.cisco.com': 'cdc' },
          { 'csr.cisco.com': 'cdc' },
          { 'offers.cisco.com': 'cdc' },
          { 'b2me.cisco.com': 'cdc' },
          { 'demand.cisco.com': 'cdc' },
          { 'lifeconnections.cisco.com': 'cdc' },
          { 'td.cloudsec.sco.cisco.com': 'cdc' },
          { 'td-stage.cloudsec.sco.cisco.com': 'cdc' },
          { 'b2me-cisco-com.p03.elqsandbox.com': 'cdc' },
          { 'info-ciscotest1-com.p03.elqsandbox.com': 'cdc' },
          { 'cognitive.cisco.com': 'cdc' },
          { 'grs.cisco.com': 'cdc' },
          { '.cisco.com/cisco/web/uk/': 'cdc' },
          { '.cisco.com/c/dam/': 'cdc' },
          { '.cisco.com/c/%/': 'cdc' },
          { 'innovationgrandchallenge.cisco.com': 'cdc' },
          { 'continuum.cisco.com': 'cdc' },
          { 'discover.cisco.com': 'cdc' },
          { 'projectworkplace.cisco.com': 'cdc' },
          { 'collaborate.cisco.com/': 'cdc' },
          { 'collabkp.cisco.com': 'cdc' },
          { '%ciscobusinesscloudadvisoradoptionreport.com': 'cdc' },
          { 'challenge.cisco.com': 'cdc' },
          { '.acquisitionconnection.com': 'cdc' },
          { 'cisco-ecommunities.jiveon.com': 'cdc' },
          { 'ciscostaging.jiveon.com': 'cdc' },
          { 'cisco-dev-ext.jiveon.com': 'cdc' },
          { 'cisco-marketing.uat5.hosted.jivesoftware.com': 'cdc' },
          { '.youtubecisco.com': 'cdc' },
          { '.jasper.com': 'cdc' },
          { 'cisco-inspire.jp': 'cdc' },
          { 'cisco.acc-test.jp/inspire': 'cdc' },
          { 'ciscodnareadinessbrief.com': 'cdc' },
          { 'uat-ciscodnareadinessbrief-com.webappuat.com': 'cdc' },
          { 'content%.cisco.com': 'cdc' },
          { 'ebooks.cisco.com': 'cdc' },
          { 'smbinsights.cisco.com': 'cdc' },
          { 'partnersuccess.cisco.com': 'cdc' },
          { 'proposals.cisco.com': 'cdc' },
          { 'dcloud%.cisco.com': 'cdc' },
          { 'design.cisco.com': 'cdc' },
          { 'cxlab%.cisco.com': 'cdc' },
          { 'netacad.com': 'cdc' },
          { 'events.cisco.com/Campaign-OneTrust-POC': 'onetrust' },
          { 'events.cisco.com': 'cdc' },
          { 'catalyst9000insights.cisco.com': 'cdc' },
          { 'transform.cisco.com': 'cdc' },
          { 'pymes.cisco.com': 'cdc' },
          { 'pme.cisco.com': 'cdc' },
          { 'pmi.cisco.com': 'cdc' },
          { 'ciscotv%.cisco.com': 'cdc' },
          { 'learningnetwork.cisco.com': 'cdc' },
          { 'clndev-ciscolearningservices.cs4.force.com': 'cdc' },
          { 'video%.cisco.com': 'veh' },
          { 'digital.cisco.com': 'digital' },
          { 'dep.mvp.broadsoft.net': 'digital' },
          { 'sales-digital.cisco.com': 'digital' },
          { 'playbook-qa.mvp.broadsoft.net': 'digital' },
          { 'product-digital.cisco.com': 'digital' },
          { 'qa-product-digital.cisco.com': 'digital' },
          { 'ciscolive%.cisco.com': 'ciscolive' },
          { '.ciscolive.com': 'ciscolive' },
          { '.rainfocus.com': 'ciscolive' },
          { '%umbrella.cisco.com/': 'umbrella' },
          { 'opendns.com': 'umbrella' },
          { '%umbrella.com': 'umbrella' },
          { 'umbrella%.shield.strln.net': 'umbrella' },
          { 'cloudemaildefense.cisco.com': 'umbrella' },
          { '.cisco.com/': 'default' },
          { 'unleashedit.com': 'microsite' },
          { 'uberflip.com': 'microsite' },
          { '.connectedfuturesmag.com': 'microsite' },
          { 'app.smartsheet.com': 'microsite' },
          { 'network.51cto.com/act/cisco_content/2016': 'microsite' },
          { 'chinabyte.com/content/cisco2016': 'microsite' },
          { 'huffingtonpost.ca': 'microsite' },
          { 'cr.silverpush.co': 'microsite' },
          { 'sueddeutsche.de': 'microsite' },
          { 'nowiresnoworries.com': 'microsite' },
          { 'mainstayadvisor.com': 'microsite' },
          { 'www.mi-idea.com': 'microsite' },
          { 'www.idea-london.co.uk': 'microsite' },
          { 'devnetcreate.io': 'microsite' },
          { 'cisco.turtl.co': 'microsite' },
          { 'cisco---master.turtl.io': 'microsite' },
          { 'themandarin.com.au': 'microsite' },
          { 'www.getsdwan.com': 'microsite' },
          { 'www.federal.meetwithease.com': 'microsite' },
          { 'www.meetwithease.com': 'microsite' },
          { 'uk.meetwithease.com': 'microsite' },
          { 'cisco-network-challenge.firebaseapp.com': 'microsite' },
          { 'ciscoxmusic.com': 'microsite' },
          { 'ciscosimple.com': 'microsite' },
          { 'cloudlock.com': 'microsite' },
          { 'cisco-challenge.com.au': 'microsite' },
          { 'ciscoemear.influitive.com': 'microsite' },
          { 'ciscoemearsb.influitivedemo.com': 'microsite' },
          { 'upshotstories.com': 'microsite' },
          { 'cisco.innovationchallenge.com': 'microsite' },
          { 'cisco.lookbookhq.com': 'microsite' },
          { 'multicloudadvisortool.com': 'microsite' },
          { 'mca%webappuat.com': 'microsite' },
          { 'www.sentryo.net': 'microsite' },
          { '%.duo.com': 'duo' },
          { 'duo.com': 'duo' },
          { 'ciscosalescrm.secure.force.com': 'ctms' },
          { 'www.csc-china.com.cn': 'ctms' },
          { '.': 'default' },
        ];
        return e;
      }),
      ctmsRequire.define('activeProfile', ['profileConfig'], function (e) {
        var t = [
            'appdynamics',
            'apps',
            'duo',
            'cdc',
            'cec',
            'ctms',
            'home',
            'microsite',
            'meraki',
            'merakigo',
            'search',
            'support',
            'lib-analytics',
            'lib-media',
            'commerce',
            'ciscolive',
            'cdc-china',
            'collaboration',
            'connectedfutures',
            'digital',
            'privacy',
            'default',
          ],
          c = function (e) {
            return !!new RegExp(t.join('|')).test(e);
          },
          o = function () {
            return t;
          },
          s = function (t, o) {
            var s = '',
              i = 'undefined' == typeof t ? window.location.href : t;
            if (
              ((i = i.toLowerCase()),
              'undefined' != typeof ctmProfile &&
                '' != ctmProfile &&
                c(ctmProfile) &&
                (s = ctmProfile),
              '' === s)
            )
              for (var a = 0; a < e.length; a++) {
                var n = Object.keys(e[a])[0];
                if ('' !== e[a][n]) {
                  var r = n;
                  (r = r.replace(new RegExp('\\.', 'g'), '\\.')),
                    (r = r.replace(new RegExp('%', 'g'), '.*?'));
                  var d = new RegExp(r, 'i');
                  if (d.test(i)) {
                    s = e[a][n];
                    break;
                  }
                }
              }
            null !== document.querySelector('.cdc-homepage') &&
              ('undefined' == typeof cdc && (cdc = {}),
              'undefined' == typeof cdc.homepage && (cdc.homepage = {}),
              (cdc.homepage.isHomepage = !0)),
              'undefined' != typeof cdc &&
                'undefined' != typeof cdc.homepage &&
                cdc.homepage.isHomepage &&
                (s = 'cdc-china' === s ? 'cdc-china' : 'home');
            var u = /\b((https):\/\/?(engage2demand\.cisco|b2me\.cisco))/g;
            if (u.test(i)) {
              var p =
                document.querySelector("meta[name='country'][content='CN']") ||
                document.querySelector("meta[name='country'][content='cn']");
              p
                ? (s = 'cdc-china')
                : 'object' == typeof o && 'cn' == o.country && (s = 'cdc-china');
            }
            return s;
          };
        return { getActiveProfile: s, getValidProfiles: o, validateProfile: c };
      }),
      ctmsRequire.define('visitConfig', ['ctmsCrossDomainLS', 'activeProfile'], function (e, t) {
        return (
          (visitConfig = (function () {
            var e = 1000,
              c = 60 * e,
              o = !1,
              s = !1,
              i = ['ctms', 'cec', 'apps', 'microsite'],
              a = function (e) {
                'undefined' != typeof Storage &&
                  i.toString().indexOf(t) == -1 &&
                  ctm.util.cdls.setConfigInfo('lastVisitTime', e);
              },
              n = function () {
                (s = !0),
                  'function' == typeof ctm.util.initNewVisitTags && ctm.util.initNewVisitTags();
              },
              r = function () {
                (o = !0),
                  'function' == typeof ctm.util.initReturnVisitTags &&
                    ctm.util.initReturnVisitTags();
              },
              d = function (e) {
                var d;
                'undefined' != typeof e && (d = 'object' == typeof e ? e.value : e);
                var u = Math.round(Date.now() / c);
                if ('undefined' == typeof d || null === d) n(), a(u);
                else {
                  var p = u - d;
                  p > 30 && p < 43200 && i.toString().indexOf(t) == -1
                    ? r()
                    : p > 259200 && i.toString().indexOf(t) == -1
                    ? n()
                    : ((o = !1), (s = !1)),
                    a(u);
                }
              },
              u = function () {
                ctm.util.cdls.getConfigInfo('lastVisitTime', d);
              },
              p = function () {
                return o;
              },
              l = function () {
                return s;
              };
            return { init: u, isReturnVisit: p, isNewVisit: l };
          })()),
          visitConfig
        );
      }),
      ctmsRequire.define('excludeConfig', [], function () {
        var e = [
          'www.scaleprotect.com',
          '%.nvidia.com',
          'www.itron.com',
          'tigerdirect.ca',
          'www.scality.com',
          '%.accelerateandsimplify.com',
          'mapr.com',
          'learn.swiftstack.com',
          '%protectandscale.com',
          'flashstack.com',
          'compuzone.co.kr',
          'veeammarketing.com',
          '%.veeam.com',
          'pcmcanada.com',
          'www.washingtonpost.com',
          'youvisit.com',
          'www.pbtech.co.nz',
          'www.pbtech.com',
          'www.wwt.com',
          'www.hitachivantara.com',
          'connecttoronto19.smarteventscloud.com',
          'appdynamics.rmglabs.com',
          'brandstore.appdynamics.com',
        ];
        return e;
      }),
      ctmsRequire.define('initDataLayer', ['excludeConfig'], function (e) {
        var t = ['ctm_disbable_auto_track', 'appKey', 's_wgw', 'attendeeId'],
          c = [
            'zemantaActivityName',
            'imgActivityName',
            'fetchCountry',
            'dfaActivityName',
            'adwordsActivityName',
            'isChinesePage',
            'ClicktaleLoadFlag',
            'SessionCamLoadFlag',
            'DecibelLoadFlag',
            'cat_code',
            'meta.keywords',
            'meta.productcategory',
            'meta.page.pageinfo.campaign',
            'meta.doctype',
          ],
          o = function (e, t) {
            if (((t = t || window), 'string' == typeof e))
              'undefined' == typeof t[e] && (t[e] = '');
            else if ('object' == typeof e && e instanceof Array)
              for (var c = 0; c < e.length; c++) 'undefined' == typeof t[e[c]] && (t[e[c]] = '');
          },
          s = function (t) {
            var c = 'undefined' == typeof t ? window.location.href : t;
            c = c.toLowerCase();
            for (var o = !1, s = 0; s < e.length; s++) {
              var i = e[s];
              (i = i.replace(new RegExp('\\.', 'g'), '\\.')),
                (i = i.replace(new RegExp('%', 'g'), '.*?'));
              var a = new RegExp(i, 'i');
              if (a.test(c)) {
                o = !0;
                break;
              }
            }
            return o;
          };
        o(t, window),
          'undefined' == typeof utag_data && (utag_data = {}),
          o(c, utag_data),
          (utag_data.noLoadConfig = !!s());
      }),
      ctmsRequire.define(
        'omsStorage',
        ['ctmsCrossDomainLS', 'initDataLayer', 'ctmsUtil'],
        function (e, t, c) {
          return (
            (omsStorage = (function () {
              try {
                var e = Math.round(Date.now() / 1000),
                  t = {
                    oid: 'qp.oid',
                    dtid: 'qp.dtid',
                    ccid: 'qp.ccid',
                    oeid: 'qp.oeid',
                    ecid: 'qp.ecid',
                    keycode: 'qp.keycode',
                    gclid: 'qp.gclid',
                    search: 'qp.search',
                    placement: 'qp.placement',
                    campaign: 'qp.campaign',
                    position: 'qp.position',
                    country_site: 'qp.country_site',
                    creative: 'qp.creative',
                    keyword: 'qp.keyword',
                    referring_site: 'qp.referring_site',
                    ad_id: 'qp.ad_id',
                  },
                  o = { oid: 'qp.oid' },
                  s = { ccid: 'CCID_Page' },
                  i = '_ts',
                  a = '_count',
                  n = '_ls',
                  r = '_pg',
                  d = 4,
                  u = 86400,
                  p = !1,
                  l = !1,
                  m = !1,
                  h = function (c) {
                    if ('undefined' == typeof c || Object.keys(c).length <= 0) return {};
                    var s = {};
                    for (var n in t)
                      'undefined' != typeof c[n] &&
                        '' != c[n] &&
                        ((s[n] = c[n]), (s[n + i] = e), (s[n + r] = 0), n in o && (s[n + a] = 0));
                    return s;
                  },
                  f = function () {
                    var t,
                      c = {};
                    for (var o in s) {
                      var a = document.querySelector('meta[name=' + s[o] + ']');
                      null !== a &&
                        a.hasAttribute('content') &&
                        ((t = a.getAttribute('content')),
                        '' != t && ((c[o] = t), (c[o + i] = e), (c[o + r] = 1)));
                    }
                    return c;
                  },
                  g = function (e) {
                    if ('undefined' == typeof e || Object.keys(e).length <= 0) return !1;
                    for (var c in t) if (c in e) return !0;
                    return !1;
                  },
                  v = function (e) {
                    'undefined' == typeof utag_data && (utag_data = {});
                    for (var t in e) utag_data[t] = e[t];
                  },
                  w = function (e) {
                    var o = {},
                      s = {};
                    for (var r in t)
                      'undefined' != typeof e[r] &&
                        '' != e[r] &&
                        'undefined' != typeof e[r + i] &&
                        ((o[t[r]] = e[r]),
                        (s[r + n] = e[r]),
                        (o[r + i] = e[r + i]),
                        'undefined' != typeof e[r + a] &&
                          ((e[r + a] = e[r + a] + 1), (o[r + a] = e[r + a])));
                    c.isEmptyObject(o) ||
                      (ctm.util.cdls.setConfigInfo('omsData', JSON.stringify(e)),
                      c.isDelayUtagFlag && v(s),
                      (o.ev = 'data'),
                      trackEvent.event('data', o));
                  },
                  _ = function (t, c, o) {
                    var s = c[t + i];
                    if ('undefined' != typeof c[t] && '' != c[t])
                      return e - s <= o && !('undefined' != typeof c[t + a] && c[t + a] >= d);
                  },
                  b = function (e) {
                    var c = u,
                      o = {};
                    for (var s in t)
                      _(s, e, c) &&
                        ((o[s] = e[s]),
                        (o[s + i] = e[s + i]),
                        (o[s + r] = e[s + r] ? e[s + r] : 0),
                        'undefined' != typeof e[s + a] && (o[s + a] = e[s + a]),
                        (p = !0));
                    return o;
                  },
                  A = function (e, t) {
                    'object' != typeof e && (e = {});
                    for (var c in t)
                      if (t.hasOwnProperty(c)) {
                        var o = t[c];
                        if ('object' == typeof o) {
                          e[c] = A(e[c], o);
                          continue;
                        }
                        'undefined' != typeof o && '' !== o && null != o && (e[c] = o);
                      }
                    return e;
                  },
                  y = function (e, t) {
                    if ('object' == typeof e && 'object' == typeof t) {
                      for (var c in s)
                        t.hasOwnProperty(c) &&
                          (e.hasOwnProperty(c)
                            ? e[c + r] === t[c + r] && ((e[c] = t[c]), (e[c + i] = t[c + i]))
                            : ((e[c + r] = t[c + r]), (e[c] = t[c]), (e[c + i] = t[c + i])));
                      return e;
                    }
                  },
                  k = function (e) {
                    ctm.util.cdls.getConfigInfo('omsData', function (t) {
                      var c = JSON.parse(t.value),
                        o = e;
                      'undefined' != typeof c && null != c && (o = A(c, e)),
                        ctm.util.cdls.setConfigInfo('omsData', JSON.stringify(o));
                    });
                  },
                  S = function () {
                    var e,
                      t = ctm.util.getQueryStringObj(window.location.href),
                      c = {},
                      o = f();
                    g(t) && ((l = !0), (c = h(t))),
                      g(o) && (m = !0),
                      ctm.util.cdls.getConfigInfo('omsData', function (t) {
                        var s = JSON.parse(t.value);
                        if ('undefined' != typeof s && null != s) var i = b(s);
                        if (
                          (l && (e = c),
                          l || m || !p || (e = i),
                          l || p || !m || (e = o),
                          l && p && !m && (e = A(i, c)),
                          !l && p && m && (e = y(i, o)),
                          l && !p && m && (e = A(o, c)),
                          l && p && m)
                        ) {
                          var a = A(i, c);
                          e = y(a, o);
                        }
                        l || p || m
                          ? (w(e), (ctm.util.qFunc.runNow = !0), ctm.util.qFunc.run())
                          : (ctm.util.cdls.deleteConfigInfo('omsData'),
                            (ctm.util.qFunc.runNow = !0),
                            ctm.util.qFunc.run());
                      });
                  };
                return {
                  processOmsData: S,
                  isOmsDataExists: g,
                  getOmsDataWithTSFromQS: h,
                  updateOMSDataToXDS: k,
                };
              } catch (e) {
                console.log('omsStorage error:', e);
              }
            })()),
            omsStorage
          );
        }
      ),
      ctmsRequire.define('videoMetrics', [], function () {
        videoMetrics = (function () {
          try {
            var e = {
                element_type: 'video',
                video_player: 'youtube',
                video_renderer: 'youtube',
                element_name: '',
                video_id: '',
              },
              t = function (t) {
                'undefined' != typeof t &&
                  'undefined' != typeof t.target &&
                  (t.target.timerFunc = setInterval(function () {
                    t.target.isTimerOn &&
                      ((t.target.timeInSec = Math.round(t.target.getCurrentTime())),
                      0 != t.target.timeInSec &&
                        t.target.timeInSec % 60 === 0 &&
                        ((e.action = 'milestone'),
                        (e.video_length = t.target.getDuration()),
                        (e.video_offset = t.target.timeInSec),
                        trackEvent.event('livevideo', e)));
                  }, 1000));
              },
              c = function (e) {
                'undefined' != typeof e &&
                  'undefined' != typeof e.target &&
                  clearInterval(e.target.timerFunc);
              },
              o = function (o) {
                if (
                  'undefined' != typeof o &&
                  'undefined' != typeof o.target &&
                  'undefined' != typeof o.data
                ) {
                  var s = o.target.getVideoData();
                  (e.element_name = s.title),
                    (e.video_id = s.video_id),
                    o.data === -1 && (o.target.prevState = o.data),
                    1 === o.data &&
                      (o.target.prevState === -1 &&
                        ((e.action = 'start'),
                        (e.video_length = o.target.getDuration()),
                        (e.video_offset = Math.round(o.target.getCurrentTime())),
                        trackEvent.event('livevideo', e)),
                      o.target.isTimerOn ||
                        ((o.target.isTimerOn = !0), (o.target.prevState = o.data), t(o))),
                    (0 !== o.data && 2 !== o.data && 3 !== o.data && 5 !== o.data) ||
                      (o.target.isTimerOn &&
                        ((o.target.isTimerOn = !1), (o.target.prevState = o.data), c(o)));
                }
              };
            return { trackVideoInfo: o };
          } catch (e) {
            console.log('VideoMetrics error:', e);
          }
        })();
      }),
      ctmsRequire.define('findEnv', [], function () {
        if (
          'undefined' == typeof cdc ||
          'undefined' == typeof cdc.util ||
          'undefined' == typeof cdc.util.findEnvironment
        )
          return 'prod';
        var e = cdc.util.findEnvironment();
        switch (e) {
          case 'dev':
            return 'dev';
          case 'stage':
            return 'qa';
          case 'prod':
            return 'prod';
          case 'unknown':
            return 'prod';
        }
      }),
      ctmsRequire.define(
        'utagLoader',
        [
          'initDataLayer',
          'findEnv',
          'activeProfile',
          'ctmsCrossDomainLS',
          'visitConfig',
          'omsStorage',
          'cdcPerformance',
          'ctmsUtil',
        ],
        function (e, t, c, o, s, i, a, n) {
          function r (e, t, c) {
            'undefined' == typeof t && (t = 'prod');
            var o = c + e + '/' + t + '/utag.js',
              s = document,
              i = 'script',
              a = s.createElement(i),
              r = '' != p ? p : 'ctm';
            (a.src = o),
              (a.type = 'text/java' + i),
              a.setAttribute('data-config-src', r),
              (a.async = !0),
              (o = s.getElementsByTagName(i)[0]),
              ctm.util.isXDCIncludedFlag && ctm.util.isDelayUtagFlag
                ? (ctm.util.consoleLog(
                    'Delay Tealium till XDS call back',
                    ctm.util.isDelayUtagFlag
                  ),
                  (n.scriptSrc = a))
                : o.parentNode.insertBefore(a, o);
          }
          cdtmLoaded = !0;
          var d = c.getActiveProfile(),
            u =
              'cdc-china' === d ? '//tags.tiqcdn.cn/utag/cisco/' : '//tags.tiqcdn.com/utag/cisco/',
            p =
              'undefined' != typeof ctm.util.getMetricsSrcInfo ? ctm.util.getMetricsSrcInfo() : '',
            l = function () {
              ctm.util.consoleLog('## Utag Initiation through XDS call back ##');
              var e = document.getElementsByTagName('script')[0];
              n.scriptSrc && e.parentNode.insertBefore(n.scriptSrc, e);
            };
          ctm.util.isXDCIncludedFlag &&
            'https:' === location.protocol &&
            xdLocalStorage.init({
              iframeUrl: 'https://www.cisco.com/assets/ctm/xdc/xdcLsFrame.html',
              initCallback: function () {
                ctm.util.isDelayUtagFlag && 'function' == typeof l && l(),
                  'function' == typeof Event && document.dispatchEvent(new Event('xdsInit')),
                  s.init(),
                  i.processOmsData(),
                  (ctm.util.returnVisitInitialized = !0),
                  performanceInit();
              },
            });
          var m = !1;
          'object' == typeof ctm.gdpr &&
          'function' == typeof ctm.gdpr.isOTEnabled &&
          ctm.gdpr.isOTEnabled()
            ? ('function' == typeof ctm.gdpr.initiateTealium &&
                (ctm.gdpr.initiateTealium = function (e) {
                  const $___old_9fbdc081068a1369 = {}.constructor.getOwnPropertyDescriptor(
                    window,
                    'localStorage'
                  );
                  try {
                    if ($___old_9fbdc081068a1369)
                      ({}.constructor.defineProperty(
                        window,
                        'localStorage',
                        $___stub_b317e19f866a2da7.localStorage
                      ));
                    return function () {
                      var c = /\b(OTAcceptBtn|OTSaveBtn|OTAllowAllBtn)/gi;
                      'object' == typeof e &&
                        c.test(e.event) &&
                        ('object' != typeof utag ||
                          'object' != typeof utag.cfg ||
                          utag.cfg.noload ||
                          (ctm.gdpr.consoleLog(
                            'Tealium Initiation after user consent on ' + e.event
                          ),
                          setTimeout(function () {
                            ((window.utag && window.utag.udoname) || window.utag_data) &&
                              utag.view(
                                window[(window.utag && window.utag.udoname) || 'utag_data']
                              );
                          }, 0))),
                        'object' != typeof e ||
                          'OTInitialLoad' !== e.event ||
                          m ||
                          ('undefined' != typeof ctm.gdpr.eventqueue &&
                            (0 === ctm.gdpr.eventqueue.length ||
                              (1 === ctm.gdpr.eventqueue.length &&
                                'PznInitialLoad' === ctm.gdpr.eventqueue[0].event)) &&
                            (ctm.gdpr.consoleLog(
                              'First Visit: Tealium initiation delayed, till OT sets groups values in Cookie ' +
                                e.event
                            ),
                            r(d, t, u)));
                    }.apply(this, arguments);
                  } finally {
                    if ($___old_9fbdc081068a1369)
                      ({}.constructor.defineProperty(
                        window,
                        'localStorage',
                        $___old_9fbdc081068a1369
                      ));
                  }
                }),
              ctm.gdpr.isFirstVisit
                ? ctm.gdpr.isOTCookieAvailable() &&
                  (ctm.gdpr.consoleLog('First Visit : Tealium initiation not delayed'),
                  (m = !0),
                  r(d, t, u))
                : '' !== d &&
                  (ctm.gdpr.consoleLog('Subsequent Visit: Tealium initiation not delayed'),
                  (m = !0),
                  r(d, t, u)))
            : '' !== d &&
              (ctm.util.consoleLog(
                '### OT not enabled for current domain ### Tealium initiation in normal workflow ###'
              ),
              (m = !0),
              r(d, t, u));
        }
      ),
      ctmsRequire.define('browserFeatures', [], function () {
        return (
          (isCookieEnabled = function () {
            try {
              var e = 'undefined' != typeof navigator.cookieEnabled && navigator.cookieEnabled;
              return e;
            } catch (e) {
              return !1;
            }
          }),
          (isSSEnabled = function () {
            var e = 'ctmtest';
            try {
              return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
            } catch (e) {
              return !1;
            }
          }),
          (isLSEnabled = function () {
            var e = 'ctmtest';
            try {
              return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
            } catch (e) {
              return !1;
            }
          }),
          (isDNTEnabled = function () {
            return (
              'yes' == navigator.doNotTrack ||
              '1' == navigator.doNotTrack ||
              '1' == navigator.msDoNotTrack ||
              'yes' == window.doNotTrack ||
              '1' == window.doNotTrack ||
              '1' == window.msDoNotTrack
            );
          }),
          {
            isCookieEnabled: isCookieEnabled,
            isLSEnabled: isLSEnabled,
            isSSEnabled: isSSEnabled,
            isDNTEnabled: isDNTEnabled,
          }
        );
      }),
      ctmsRequire.define('oneTrust', ['ctmsUtil'], function (e) {
        (e.isOneTrustLoaded = function () {
          var t = /\&groups\=/g,
            c = e.getCookie('OptanonConsent');
          return '' !== e.getCookie('OptanonAlertBoxClosed') || ('' !== c && t.test(c))
            ? 'true'
            : 'false';
        }),
          (e.getPerformanceFlag = function () {
            var t = e.getCookie('OptanonConsent'),
              c = /(\=|\,)[2]\:[0]/g;
            return '' != t && c.test(t) ? 'false' : 'true';
          }),
          (e.getTargetingFlag = function () {
            var t = e.getCookie('OptanonConsent'),
              c = /(\=|\,)[4]\:[0]/g;
            return '' != t && c.test(t) ? 'false' : 'true';
          });
      }),
      ctmsRequire.define('performanceMarks', ['ctmsUtil'], function (e) {
        var t = {},
          c = {
            targetLoad: 'Targeter loads and logs start time',
            uidTimeout: 'UID timeout',
            atjsexecuted: 'at.js executed',
            renderSuccessGlobal: 'CONTENT_RENDERING_SUCCEEDED for target-global-mbox',
          },
          o = function (e, t) {
            if (
              'undefined' != typeof performance &&
              'undefined' != typeof performance.getEntriesByName
            ) {
              var c = performance.getEntriesByName(e, t);
              return c;
            }
          },
          s = function () {
            for (var e in c) {
              var s = o(c[e], 'mark');
              'undefined' != typeof s && s.length > 0 && (t[e] = s[0].startTime);
            }
            Object.keys(t).length > 0 && trackEvent.event('mark', t);
          },
          i = function () {
            if (Object.keys(t).length > 0) return t;
          };
        return (
          (ctm.performanceMarks = { getMarkStartTimes: i, reqMarks: c }),
          ctm.util.bindEvent(window, 'beforeunload', s),
          ctm.performanceMarks
        );
      }),
      ctmsRequire.define('loginReferrer', ['ctmsUtil'], function (e) {
        var t = '',
          c = [
            'sso[0-9]*',
            'cloudsso[0-9]*',
            'sso-nprd[0-9]*',
            'cloudsso-test[0-9]*',
            'sso-idev[0-9]*',
            'cloudsso-idev[0-9]*',
          ],
          o = new RegExp('^(' + c.join('|') + ')(\\.|:|$)'),
          s =
            'undefined' != typeof cdc &&
            'undefined' != typeof cdc.context &&
            'function' == typeof cdc.context.isLoginPage &&
            cdc.context.isLoginPage(),
          i = o.test(document.referrer.replace(/^(http\:\/\/|https\:\/\/)/i, ''));
        return (
          s && !i
            ? e.setCookie({
                cookieName: 'loginPageRef',
                cookieValue: document.referrer,
                domain: '.cisco.com',
              })
            : (s && i) ||
              (i && (t = '' != e.getCookie('authorization') ? e.getCookie('loginPageRef') : '')),
          t
        );
      }),
      ctmsRequire.define('sensorConfig', [], function () {
        return {
          send: {
            sensor: 'https://cisco-tags.cisco.com/tag/ntpagetag.gif',
            auth_sensor: 'https://cisco-tags.cisco.com/tag/auth/ntpagetag.gif',
          },
          nprd_send: {
            sensor: 'https://cisco-tags-stg.cisco.com/tag/ntpagetag.gif',
            auth_sensor: 'https://cisco-tags-stg.cisco.com/tag/auth/ntpagetag.gif',
          },
          insearch_send: {
            sensor: 'https://partners-tags.cisco.com/tag/insearch/ntpagetag.gif',
            auth_sensor: 'https://partners-tags.cisco.com/tag/auth/insearch/ntpagetag.gif',
          },
          insearch_stg_send: {
            sensor: 'https://partners-tags-stg.cisco.com/tag/insearch/ntpagetag.gif',
            auth_sensor: 'https://partners-tags-stg.cisco.com/tag/auth/insearch/ntpagetag.gif',
          },
          psend: {
            sensor: 'https://partners-tags.cisco.com/tag/search/ntpagetag.gif',
            auth_sensor: 'https://partners-tags.cisco.com/tag/auth/search/ntpagetag.gif',
          },
          search_send: {
            sensor:
              'https://partners-tags.cisco.com/tag/search/ntpagetag.gif, https://cisco-tags.cisco.com/tag/ntpagetag.gif',
            auth_sensor:
              'https://partners-tags.cisco.com/tag/auth/search/ntpagetag.gif, https://cisco-tags.cisco.com/tag/auth/ntpagetag.gif',
          },
          search_stg_send: {
            sensor:
              'https://partners-tags-stg.cisco.com/tag/search/ntpagetag.gif, https://cisco-tags-stg.cisco.com/tag/ntpagetag.gif',
            auth_sensor:
              'https://partners-tags-stg.cisco.com/tag/auth/search/ntpagetag.gif, https://cisco-tags-stg.cisco.com/tag/auth/ntpagetag.gif',
          },
          toolsend: {
            sensor: 'https://tools-tags.cisco.com/tag/ntpagetag.gif',
            auth_sensor: 'https://tools-tags.cisco.com/tag/auth/ntpagetag.gif',
          },
          cec_stage_send: {
            sensor: 'https://partners-tags-stg.cisco.com/tag/cec/ntpagetag.gif',
            auth_sensor: 'https://partners-tags-stg.cisco.com/tag/auth/cec/ntpagetag.gif',
          },
          cec_prod_send: {
            sensor: 'https://partners-tags.cisco.com/tag/cec/ntpagetag.gif',
            auth_sensor: 'https://partners-tags.cisco.com/tag/auth/cec/ntpagetag.gif',
          },
          onsearch_send: {
            sensor: 'https://partners-tags.cisco.com/tag/onesearch/ntpagetag.gif',
            auth_sensor: 'https://partners-tags.cisco.com/tag/auth/onesearch/ntpagetag.gif',
          },
          onsearchDevStage_send: {
            sensor: 'https://partners-tags-stg.cisco.com/tag/onesearch/ntpagetag.gif',
            auth_sensor: 'https://partners-tags-stg.cisco.com/tag/auth/onesearch/ntpagetag.gif',
          },
          jivepsend: {
            sensor: 'https://partners-tags.cisco.com/tag/jcec/ntpagetag.gif',
            auth_sensor: 'https://partners-tags.cisco.com/tag/auth/jcec/ntpagetag.gif',
          },
          jivepreprodsend: {
            sensor: 'https://partners-tags-stg.cisco.com/tag/jcec/ntpagetag.gif',
            auth_sensor: 'https://partners-tags-stg.cisco.com/tag/auth/jcec/ntpagetag.gif',
          },
          lc_send: {
            sensor: 'https://partners-tags.cisco.com/tag/int/ntpagetag.gif',
            auth_sensor: 'https://partners-tags.cisco.com/tag/auth/int/ntpagetag.gif',
          },
          lc_nprd_send: {
            sensor: 'https://partners-tags-stg.cisco.com/tag/int/ntpagetag.gif',
            auth_sensor: 'https://partners-tags-stg.cisco.com/tag/auth/int/ntpagetag.gif',
          },
          estore_nprd_send: {
            sensor: 'http://partners-tags-stg.cisco.com/tag/auth/estore/ntpagetag.gif',
            auth_sensor: 'http://partners-tags-stg.cisco.com/tag/auth/estore/ntpagetag.gif',
          },
          estore_send: {
            sensor: 'http://partners-tags.cisco.com/tag/auth/estore/ntpagetag.gif',
            auth_sensor: 'http://partners-tags.cisco.com/tag/auth/estore/ntpagetag.gif',
          },
        };
      }),
      ctmsRequire.define('sensorMapping', ['sensorConfig'], function (e) {
        var t = [
          { '//www.cisco.com/cisco/psn/bssprt/': { path: e.send, defaultAuth: !1 } },
          { '//www.cisco.com/cisco/web/support/index_b.html': { path: e.send, defaultAuth: !1 } },
          { '//www.cisco.com/cisco/web/support/index.html': { path: e.send, defaultAuth: !1 } },
          { '//www.cisco.com/c/r/lifeconnections/': { path: e.lc_send, defaultAuth: !1 } },
          { '//www.cisco.com/c/r/gsx/': { path: e.lc_send, defaultAuth: !0 } },
          { '//www.cisco.com/web/fw/tools/ssue': { path: e.send, defaultAuth: !0 } },
          { '//gsx.cisco.com/': { path: e.lc_send, defaultAuth: !0 } },
          { '//gsx-nprd.cisco.com/c/r/gsx/': { path: e.nprd_send, defaultAuth: !0 } },
          { '//www.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//buildprice.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//newsroom.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//video-dev.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//video-stage.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//video.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//videolounge.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//youtubecisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//grs.cisco.com/grsx/': { path: e.send, defaultAuth: !1 } },
          { '//share.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//socialmedia.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//software.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//software-stage.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//sso.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//sso-nprd.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//sso-test.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//cloudsso.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//cloudsso-test.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//sso-idev.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//cloudsso-idev.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//search.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//search-green.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//searchx.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//searchd.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//search-prf.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//cdcsearch-stage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//tools.cisco.com/smartservices/': { path: e.send, defaultAuth: !0 } },
          { '//tools-stage.cisco.com/smartservices': { path: e.nprd_send, defaultAuth: !0 } },
          { '//tools-dev.cisco.com/smartservices': { path: e.nprd_send, defaultAuth: !1 } },
          { '//smartservices.cloudapps.cisco.com/': { path: e.send, defaultAuth: !0 } },
          { '//smartservices-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//smartservices-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'services-dev.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'services-stage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'services-lt.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'services-ci.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'services.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//tools.cisco.com/qorept/': { path: e.send, defaultAuth: !0 } },
          { '//tools.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//blogs.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//communities.cisco.com/': { path: e.send, defaultAuth: !0 } },
          { '//communities-private.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//cisco-ecommunities.jiveon.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//ciscostaging.jiveon.com': { path: e.nprd_send, defaultAuth: !0 } },
          {
            '//ccw-wstg.cloudapps.cisco.com/Commerce/guest': {
              path: e.nprd_send,
              defaultAuth: !1,
            },
          },
          { '//ccw-wstg.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//pdricw-cstg.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//pdrqo-wstg.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//prfl-wstg.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//viewst-wstg.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//ccrc.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//ccrc-external-1.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//ccrc-external-2.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//ccrc-red.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//ccrc-prd1-red.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//ccrc-prd2-red.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//soladv.cloudapps.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//apps.cisco.com/ccw/cpc/guest': { path: e.send, defaultAuth: !1 } },
          { '//apps.cisco.com/ccw/': { path: e.send, defaultAuth: !0 } },
          { '//apps.cisco.com/search/': { path: e.psend, defaultAuth: !1 } },
          { '//apps.cisco.com/cfgon/': { path: e.send, defaultAuth: !0 } },
          { '//apps.cisco.com/Commerce/guest': { path: e.send, defaultAuth: !1 } },
          { '//apps.cisco.com/Commerce/': { path: e.send, defaultAuth: !0 } },
          { '//apps.cisco.com/': { path: e.toolsend, defaultAuth: !1 } },
          { '//cisco-apps.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//gblogs.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//internetofeverything.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//weare.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//fdk-stage.cisco.com/c/cec/': { path: e.cec_stage_send, defaultAuth: !0 } },
          { '//fdk-author-stage.cisco.com/c/cec/': { path: e.cec_stage_send, defaultAuth: !0 } },
          { '//wwwin.cisco.com': { path: e.cec_prod_send, defaultAuth: !0 } },
          { '//wwwin-stage.cisco.com/c/cec/': { path: e.cec_stage_send, defaultAuth: !0 } },
          { '//ioeassessment.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//marketplace.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//dcpplat.cloudapps.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//dcp.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//dcp-stg.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//dcpplat-stg.cloudapps.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//dcp-dev.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//dcpplat-dev.cloudapps.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//dcpplat-stage.cloudapps.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//dcpplat-lt.cloudapps.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//dcpplatprod-dev.cloudapps.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//dcpplatprod-stage.cloudapps.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//dcpplat3-dev.cloudapps.cisco.com/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//mycase.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//mycase-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//quickview.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//quickview-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//bst-stage.cloudapps.cisco.com/bugsearch/': { path: e.nprd_send, defaultAuth: !0 } },
          { '//bst.cloudapps.cisco.com/bugsearch/': { path: e.send, defaultAuth: !0 } },
          {
            '//snmp-stage.cloudapps.cisco.com/Support/SNMP/': {
              path: e.nprd_send,
              defaultAuth: !1,
            },
          },
          { '//snmp.cloudapps.cisco.com/Support/SNMP/': { path: e.send, defaultAuth: !1 } },
          { '//lifeconnections.cisco.com/': { path: e.lc_send, defaultAuth: !1 } },
          { '//onesearch.cisco.com': { path: e.onsearch_send, defaultAuth: !0 } },
          { '//onesearchalpha.cisco.com': { path: e.onsearch_send, defaultAuth: !0 } },
          { '//onesearchalpha.cloudapps.cisco.com': { path: e.onsearch_send, defaultAuth: !0 } },
          { '//onesearch.cloudapps.cisco.com': { path: e.onsearch_send, defaultAuth: !0 } },
          {
            '//onesearch-stage.cloudapps.cisco.com/': {
              path: e.onsearchDevStage_send,
              defaultAuth: !0,
            },
          },
          {
            '//onesearch-dev.cloudapps.cisco.com/': {
              path: e.onsearchDevStage_send,
              defaultAuth: !0,
            },
          },
          { '//apps.na.collabserv.com': { path: e.jivepsend, defaultAuth: !0 } },
          { '//apps.scniris.com': { path: e.jivepreprodsend, defaultAuth: !0 } },
          { '//cisco.jiveon.com': { path: e.jivepsend, defaultAuth: !0 } },
          { '//cisco-poc.jiveon.com': { path: e.jivepreprodsend, defaultAuth: !0 } },
          { '//cisco-preprod.jiveon.com': { path: e.jivepreprodsend, defaultAuth: !0 } },
          { '//cisco-dev-ext.jiveon.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//wiki-dev.cisco.com': { path: e.jivepreprodsend, defaultAuth: !0 } },
          { '//wiki-stage.cisco.com': { path: e.jivepreprodsend, defaultAuth: !0 } },
          { '//wiki.cisco.com': { path: e.jivepsend, defaultAuth: !0 } },
          { '//app.smartsheet.com': { path: e.jivepsend, defaultAuth: !0 } },
          { '//wwwin-tools-dev.cisco.com/dir/': { path: e.jivepreprodsend, defaultAuth: !0 } },
          { '//wwwin-tools-stage.cisco.com/dir/': { path: e.jivepreprodsend, defaultAuth: !0 } },
          { '//wwwin-tools.cisco.com/dir/': { path: e.jivepsend, defaultAuth: !0 } },
          { '//diralpha-dev.cloudapps.cisco.com': { path: e.jivepreprodsend, defaultAuth: !0 } },
          { '//diralpha-stage.cloudapps.cisco.com': { path: e.jivepreprodsend, defaultAuth: !0 } },
          { '//directory-dev.cisco.com': { path: e.jivepreprodsend, defaultAuth: !0 } },
          { '//directory-stage.cisco.com': { path: e.jivepreprodsend, defaultAuth: !0 } },
          { '//directory-alpha.cisco.com': { path: e.jivepsend, defaultAuth: !0 } },
          { '//directory.cisco.com': { path: e.jivepsend, defaultAuth: !0 } },
          { '//globalcontacts.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//globalcontacts-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//globalcontacts-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//ciscoarchive.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//ciscoarchive-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//ciscoarchive-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//camp.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//camp-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//camp-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//campperl.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//campperl-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//campperl-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//techzone.cisco.com/': { path: e.lc_send, defaultAuth: !0 } },
          { '//techzone-stage.cisco.com/': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//techzone-dev2.cisco.com/': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//techzone-dev1.cisco.com/': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { 'helpzone.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { 'helpzone-stage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//cpc.cloudapps.cisco.com/cpc/': { path: e.send, defaultAuth: !1 } },
          { '//idpswd.cloudapps.cisco.com/': { path: e.send, defaultAuth: !1 } },
          { '//idreg.cloudapps.cisco.com/': { path: e.send, defaultAuth: !1 } },
          {
            '//learningcredit.cloudapps.cisco.com/GET/lrncrd/jsp/': {
              path: e.send,
              defaultAuth: !1,
            },
          },
          {
            '//cisco-marketing.uat5.hosted.jivesoftware.com': {
              path: e.nprd_send,
              defaultAuth: !1,
            },
          },
          { '//cisco.acc-test.jp/inSPire/': { path: e.nprd_send, defaultAuth: !1 } },
          { '//salesconnect.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//salesconnect-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//salesconnect-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//salesconnectnew-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          {
            '//salesconnectnew-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 },
          },
          { '//cce.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//cce-green.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//cce-blue.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//cce-temp.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//cce-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//cce-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//srchui.cloudapps.cisco.com': { path: e.insearch_send, defaultAuth: !0 } },
          { '//ts1srchui.cloudapps.cisco.com': { path: e.insearch_send, defaultAuth: !0 } },
          { '//srchui-stage.cloudapps.cisco.com': { path: e.insearch_stg_send, defaultAuth: !0 } },
          { '//srchui-dev.cloudapps.cisco.com': { path: e.insearch_stg_send, defaultAuth: !0 } },
          {
            '//ts1srchui-dev.cloudapps.cisco.com': { path: e.insearch_stg_send, defaultAuth: !0 },
          },
          {
            '//ts1srchui-stage.cloudapps.cisco.com': {
              path: e.insearch_stg_send,
              defaultAuth: !0,
            },
          },
          {
            '//ts2srchui-dev.cloudapps.cisco.com': { path: e.insearch_stg_send, defaultAuth: !0 },
          },
          {
            '//ts2srchui-stage.cloudapps.cisco.com': {
              path: e.insearch_stg_send,
              defaultAuth: !0,
            },
          },
          {
            '//ts3srchui-dev.cloudapps.cisco.com': { path: e.insearch_stg_send, defaultAuth: !0 },
          },
          { '//discover.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//nowiresnoworries.com': { path: e.send, defaultAuth: !1 } },
          { '//umbrella.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//learn-umbrella.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//signup.umbrella.com': { path: e.send, defaultAuth: !1 } },
          { '//login.umbrella.com': { path: e.send, defaultAuth: !1 } },
          { '//cloudemaildefense.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//umbrella-dev.shield.strln.net': { path: e.nprd_send, defaultAuth: !1 } },
          { '//umbrella-staging.shield.strln.net': { path: e.nprd_send, defaultAuth: !1 } },
          { '//jasperconnect.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//jasperconnect-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//jasperconnect-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//ciscodnareadinessbrief.com': { path: e.send, defaultAuth: !1 } },
          {
            '//uat-ciscodnareadinessbrief-com.webappuat.com': {
              path: e.nprd_send,
              defaultAuth: !1,
            },
          },
          { '//smbmarketplace.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//ausmbmarketplace.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//solucoespme.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//indiasmbmarketplace.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//beli.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//ciscobusinesslink.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//solucionespyme.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//www.ticcostarica.com': { path: e.send, defaultAuth: !1 } },
          { '//www.todoenredesecuador.com': { path: e.send, defaultAuth: !1 } },
          { '//japansmbmarketplace.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//armada.cisco.com.tr': { path: e.send, defaultAuth: !1 } },
          { 'qa.ciscosmb.psdops.com': { path: e.nprd_send, defaultAuth: !1 } },
          {
            'mainstayadvisor.com/go/cisco/ucs-tco-roi-advisor/': { path: e.send, defaultAuth: !1 },
          },
          { 'www.ciscospark.com': { path: e.send, defaultAuth: !1 } },
          { 'origin-ciscospark-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'ciscospark-stg.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'ciscospark-ca-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'ciscospark-dev.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'ciscospark-test.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'ciscospark-sb.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'ciscospark-qa.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'ciscospark-beta.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-ciscospark-ca-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-ciscospark-uk-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-ciscospark-au-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-ciscospark-de-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-ciscospark-jp-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-ciscospark-fr-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'www.webex.com': { path: e.send, defaultAuth: !1 } },
          { 'buy.webex.com': { path: e.send, defaultAuth: !1 } },
          { 'virtualsummit.webex.com': { path: e.send, defaultAuth: !1 } },
          { 'futureofwork.webex.com': { path: e.send, defaultAuth: !1 } },
          { '//hardware.webex.com': { path: e.send, defaultAuth: !1 } },
          { 'futureofwork-np.webex.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-stg.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex.uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'webex-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-ca-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-uk-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-fr-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-au-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-in-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-cn-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-jp-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-hk-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-de-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-es-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-it-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-mx-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-kr-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-br-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'origin-webex-nz-uat.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//webex-develop.netlify.app': { path: e.nprd_send, defaultAuth: !1 } },
          { '//www.mi-idea.com': { path: e.send, defaultAuth: !1 } },
          { '//www.idea-london.co.uk': { path: e.send, defaultAuth: !1 } },
          { 'community.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'community-dev3.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'supportforums-stage.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'supportforums-dev1.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'supportforums-dev2.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'supportforums-dev1.lithium.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'supportforums-dev2.lithium.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'supportforums-stage.lithium.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'ciscosupportdev1.stage.lithium.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'kxiwq67737.stage.lithium.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'ciscosupportdev2.stage.lithium.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'devnetcreate.io': { path: e.send, defaultAuth: !1 } },
          { '.ciscobusinesscloudadvisoradoptionreport.com': { path: e.send, defaultAuth: !1 } },
          { '//cisco.turtl.co': { path: e.send, defaultAuth: !1 } },
          { '//cisco---master.turtl.io': { path: e.nprd_send, defaultAuth: !1 } },
          { '//ocidm.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//ocidm-stg.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//ocidm-dev.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//dce-stage.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//dce-dev.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//dce-ci.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//dce-nprd.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//dce-green.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//dce-blue.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//dce-temp.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//dce.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//dce-app.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//dce.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { 'data-analytics-nprd.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { 'data-analytics-stage.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          {
            'data-analytics-stage.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 },
          },
          { 'data-analytics-dev.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { 'data-analytics-dev.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { 'data-analytics.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { 'themandarin.com.au': { path: e.send, defaultAuth: !1 } },
          { '//locatr.cloudapps.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//locatr-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//locatr-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//ipa-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//ipa-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//ipa.cloudapps.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//p2p.cloudapps.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//p2p-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//ibpm.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//ibpm-stage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//newpos.cloudapps.cisco.com/': { path: e.send, defaultAuth: !0 } },
          { '//newpos-stage.cloudapps.cisco.com/': { path: e.nprd_send, defaultAuth: !0 } },
          { '//newpos-dev.cloudapps.cisco.com/': { path: e.nprd_send, defaultAuth: !0 } },
          { '//getlog.cloudapps.cisco.com/': { path: e.send, defaultAuth: !0 } },
          { '//getlog-stage.cloudapps.cisco.com/': { path: e.nprd_send, defaultAuth: !0 } },
          { '//getlog-dev.cloudapps.cisco.com/': { path: e.nprd_send, defaultAuth: !0 } },
          { '//ciscoxmusic.com': { path: e.send, defaultAuth: !1 } },
          { '//ciscosimple.com': { path: e.send, defaultAuth: !1 } },
          { '//www.connectedfutures.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//connectedfutures.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//connectedfutures-prod.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//cf-stage.readystate.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//ontrack.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//ontrack.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//ontrack-stage.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//ssdevnode.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//collaborationhelp.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//stage-collaborationhelp.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//dev-collaborationhelp.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//collabkp.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//youprotect.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//sds-stage.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//sds-dev.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//sds-pilot.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//sds-prod.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'meraki.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//b2csmb-stage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//b2csmb-dev.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//b2csmb.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//vm-b2c-um-dev41.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//cdexternal-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//connectthedots.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//cisco.lookbookhq.com': { path: e.send, defaultAuth: !1 } },
          { '//ciscosales.my.salesforce.com': { path: e.send, defaultAuth: !0 } },
          { '//ciscosales.lightning.force.com': { path: e.send, defaultAuth: !0 } },
          { '//ciscosales--reg.cs64.my.salesforce.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//ciscosales--reg.lightning.force.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//ciscosalescrm.secure.force.com': { path: e.send, defaultAuth: !1 } },
          { '//content.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//content-stage.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//content-dev.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'cisco-challenge.com.au': { path: e.send, defaultAuth: !1 } },
          { 'cloudlock.com': { path: e.send, defaultAuth: !1 } },
          { 'opendns.com': { path: e.send, defaultAuth: !1 } },
          { 'ciscoemear.influitive.com': { path: e.send, defaultAuth: !1 } },
          { 'ciscoemearsb.influitivedemo.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'upshotstories.com': { path: e.send, defaultAuth: !1 } },
          { 'estore.cisco.com': { path: e.estore_send, defaultAuth: !0 } },
          { 'estore-stage.cisco.com': { path: e.estore_nprd_send, defaultAuth: !0 } },
          { 'estore-dev.cisco.com': { path: e.estore_nprd_send, defaultAuth: !0 } },
          { 'ebooks.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'smbinsights.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'partnersuccess.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'cisco.innovationchallenge.com': { path: e.send, defaultAuth: !1 } },
          { 'testing-developer.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'devnetapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'developer.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'dgcrep-prd-001.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'proposals.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'dcloud.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'www.csc-china.com.cn': { path: e.send, defaultAuth: !1 } },
          { 'design.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { 'cxlab.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'cxlab-dev.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'cxlab-stage.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'apj-case-studies.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { 'statemachines.cisco.com': { path: e.lc_send, defaultAuth: !1 } },
          { 'heliosx-dev.cisco.com': { path: e.lc_nprd_send, defaultAuth: !1 } },
          { 'ciscolive.cisco.com': { path: e.send, defaultAuth: !0 } },
          { 'ciscolive-dev.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'ciscolive-dev2.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'ciscolive-stg.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'reg.rainfocus.com': { path: e.send, defaultAuth: !0 } },
          { 'www.ciscolive.com': { path: e.send, defaultAuth: !0 } },
          { 'www.netacad.com': { path: e.send, defaultAuth: !1 } },
          { 'events.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'multicloudadvisortool.com': { path: e.send, defaultAuth: !1 } },
          { '.webappuat.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'trusttech.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { 'centrojavapoc.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { 'merakiresources.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'catalyst9000insights.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'www.bbc.com': { path: e.send, defaultAuth: !1 } },
          { 'centrojsmed.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { 'centrojsmed-dev.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { 'stg-identity.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'transform.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'community.meraki.com': { path: e.send, defaultAuth: !1 } },
          { 'community-staging.meraki.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'customerservice.cloudapps.cisco.com': { path: e.send, defaultAuth: !0 } },
          { 'customerservice-stg.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'customerservice-lt.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'pme.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'pymes.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'pmi.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'dtx2.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { 'dtx2-fe-np-alln.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { 'sales-digital.cisco.com': { path: e.send, defaultAuth: !0 } },
          { 'playbook-qa.mvp.broadsoft.net': { path: e.nprd_send, defaultAuth: !0 } },
          { 'qa-product-digital.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'product-digital.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'digital.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'dep.mvp.broadsoft.net': { path: e.nprd_send, defaultAuth: !1 } },
          { 'eam.cisco.com': { path: e.send, defaultAuth: !0 } },
          { 'eam-stage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'warp.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '.appdynamics.com': { path: e.send, defaultAuth: !1 } },
          { '.appdynamics.fr': { path: e.send, defaultAuth: !1 } },
          { '.appdynamics.de': { path: e.send, defaultAuth: !1 } },
          { 'ngfwpe.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'ngfwpe-dev.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'ngfwpe-stg.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'teamstoolkit.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { 'teamstoolkit-dev.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { 'trustportal.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'trustportal-nprd.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { 'mce.cisco.com': { path: e.send, defaultAuth: !0 } },
          { 'mce-stage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'mce-lt.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'learningspace.cisco.com': { path: e.send, defaultAuth: !0 } },
          { 'learningspace-stage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { 'search-prd.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { 'search-stg.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { 'cisco.gomob.biz': { path: e.send, defaultAuth: !1 } },
          { '//impact.cisco.com': { path: e.send, defaultAuth: !0 } },
          { 'techdocs.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '.cisco.com/c/r/techdocs': { path: e.nprd_send, defaultAuth: !0 } },
          { 'sdwan-docs.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'insider.cisco.com': { path: e.send, defaultAuth: !1 } },
          { 'salesplaybook.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//web.cvent.com': { path: e.send, defaultAuth: !1 } },
          { '//marketingvelocity.uberflip.com': { path: e.send, defaultAuth: !1 } },
          { '//cta.eu.amp.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//cta.amp.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//staging.cta.eu.amp.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//www.multiplydiversity.com': { path: e.send, defaultAuth: !1 } },
          { '//journey.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//explore.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//www.sentryo.net': { path: e.send, defaultAuth: !1 } },
          { '//nextgenfcst.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//nextgenfcst-dev.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//nextgenfcst-dev2.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//nextgenfcst-stg.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//cxportal.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//cx.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//cx-cloud.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//cxportal-qa.cxcloud.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//cxportal-lt.cxcloud.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//cx-cp-dev.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//cx-cp-qa.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//cx-cp-lt.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//cx-beta.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//apollo-stage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//tie.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//www.meraki-go.com': { path: e.send, defaultAuth: !1 } },
          { '//learninglocator-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//ibn-assessment.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//ciscotv-dev.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//ciscotv-stage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//ciscotv.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//livestreaming.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//18binarydev.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//20bytestage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//merakipartners.com': { path: e.send, defaultAuth: !1 } },
          { '//partner-merakicommunities.cs45.force.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//sites.ziftsolutions.com': { path: e.send, defaultAuth: !1 } },
          { '//cxpartner-dev.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//cxpartner-stage.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//cxpartner.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//bx.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//fdk-stage.cisco.com/c/r/cbx/': { path: e.nprd_send, defaultAuth: !0 } },
          { '//fdk-devint.cisco.com/c/r/cbx/': { path: e.nprd_send, defaultAuth: !0 } },
          { '//bxin-devint.cisco.com/c/r/cbx/': { path: e.nprd_send, defaultAuth: !0 } },
          { '//fdk-stage.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//appdynamics-wem.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//dsv.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//dsv-dev.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//dsv-stage.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//dipr.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//dipr-dev.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//dipr-stage.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//pep.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//pep-dev.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//pep-stage.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//newdca.cloudapps.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//newdca-dev.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//newdca-stage.cloudapps.cisco.com': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//dsv-reporting.cloudapps.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//dsv-reporting-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//dsv-reporting-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//learningnetwork.cisco.com': { path: e.send, defaultAuth: !1 } },
          {
            '//clndev-ciscolearningservices.cs4.force.com': { path: e.nprd_send, defaultAuth: !1 },
          },
          { '//wwwin-github.cisco.com': { path: e.lc_send, defaultAuth: !1 } },
          { '//iotconnect.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//iotconnect-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//investor.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//signup.duo.com': { path: e.send, defaultAuth: !1 } },
          { '//duo.com': { path: e.send, defaultAuth: !1 } },
          { '//digital-learning.cisco.com/cx#/': { path: e.send, defaultAuth: !0 } },
          { '//pss.cloudapps.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//ipa.cloudapps.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//ccrc.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//ccwr-sc-stg.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//smartbuy-test.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//emear-qbr.cisco.com': { path: e.lc_send, defaultAuth: !1 } },
          { '//getlog.cloudapps.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//wwwin-webapps.cisco.com/ComplianceWizard/': { path: e.lc_send, defaultAuth: !0 } },
          { '//wwwin-webapps.cisco.com/Compliance/': { path: e.lc_send, defaultAuth: !0 } },
          {
            '//wwwin-webapps-stage.cisco.com/Compliance/': {
              path: e.lc_nprd_send,
              defaultAuth: !0,
            },
          },
          {
            '//wwwin-webapps-stage.cisco.com/ComplianceWizard/': {
              path: e.lc_nprd_send,
              defaultAuth: !0,
            },
          },
          {
            '//wwwin-webapps-dev.cisco.com/Compliance/': { path: e.lc_nprd_send, defaultAuth: !0 },
          },
          {
            '//wwwin-webapps-dev.cisco.com/ComplianceWizard/': {
              path: e.lc_nprd_send,
              defaultAuth: !0,
            },
          },
          { '//emear-leaderboard.cisco.com': { path: e.lc_send, defaultAuth: !0 } },
          { '//tpv.cloudapps.cisco.com': { path: e.send, defaultAuth: !0 } },
          { '//tpv-dev.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//tpv-stage.cloudapps.cisco.com': { path: e.nprd_send, defaultAuth: !0 } },
          { '//tmgmatrix.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//tmgmatrix-dev.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//tmgmatrix-stage.cisco.com': { path: e.nprd_send, defaultAuth: !1 } },
          { '//drf-stage.cloudapps.cisco.com/drf/': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//dpa.cloudapps.cisco.com/drf/': { path: e.lc_send, defaultAuth: !0 } },
          { '//bcsroi.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//cxpathfindersuccesstracks.cisco.com': { path: e.send, defaultAuth: !1 } },
          { '//spokesperson-dev.cisco.com': { path: e.cec_stage_send, defaultAuth: !0 } },
          { '//spokesperson.cisco.com': { path: e.cec_prod_send, defaultAuth: !0 } },
          { '//cae-globalcentro-dev.cisco.com/': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//cae-globalcentro-stg.cisco.com/': { path: e.lc_nprd_send, defaultAuth: !0 } },
          { '//centro.cisco.com/': { path: e.lc_send, defaultAuth: !0 } },
        ];
        return t;
      }),
      ctmsRequire.define('activeSensor', ['sensorConfig', 'sensorMapping', 'findEnv'], function (
        e,
        t,
        c
      ) {
        var o = function (o) {
          var s,
            i = !1;
          (s = 'qa' == c || 'dev' == c ? e.nprd_send : e.send),
            'undefined' == typeof o && (o = '//' + location.hostname + location.pathname);
          for (var a = 0; a < t.length; a++) {
            var n = Object.keys(t[a])[0];
            if (o.indexOf(n) > -1) {
              (s = t[a][n].path), (i = t[a][n].defaultAuth);
              break;
            }
          }
          return (s.isDefaultAuth = i), s;
        };
        return { getSensorConfigObj: o };
      }),
      ctmsRequire.define('conversionConfig', [], function () {
        var e = [
          {
            tagName: 'GL_Campaign_C_ST_V_B2PArrival',
            send_to: 'DC-3569326/brand0/gl_ca0+standard',
            urls: ['bridge-to-possible'],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_AutoCampaignInitialMedia',
            send_to: 'DC-3569326/gsp_a00/gl_se0+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/solutions-cloud-providers/network-services-orchestrator-solutions.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_MediaRetargeting',
            send_to: 'DC-3569326/gsp_m000/gl_se0+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/media-and-entertainment/ip-fabric.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/media-and-entertainment/data-center.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/media-and-entertainment/collaboration.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/media-and-entertainment/cloud.orchestration.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/media-entertainment/ip-fabric-for-media.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/media-entertainment/data-center-for-media.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/media-entertainment/collaboration-for-media.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/media-entertainment/cloud-orchestration-for-media.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_MediaProspecting',
            send_to: 'DC-3569326/gsp_m00/gl_se0+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/media-and-entertainment/index.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/media-and-entertainment/security.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/media-entertainment.html',
            ],
          },
          {
            tagName: 'AMER_Collaboration_C_ST_V_Cognitive-Collaboration-Solutions',
            send_to: 'DC-3569326/colla0/amer_002+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/collaboration/cognitive-collaboration-solutions.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableProspecting',
            send_to: 'DC-3569326/gsp_j0/gl_se01y+standard',
            urls: ['//www.cisco.com/c/en/us/solutions/service-provider/industry/cable.html'],
          },
          {
            tagName: 'AMER_Product_C_ST_V_IoTManufacturingOverview',
            send_to: 'DC-3569326/iotkp0/amer_00f+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/internet-of-things/iot-digital-manufacturing-solution.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableDigitizationOverviewVideoJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se0+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/digitization.html?socialshare=cable-network-transformation-digitize-vid',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableCKNTransformingAccessNetworkRemotePHYJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se00+standard',
            urls: ['//engage2demand.cisco.com/LP=13525'],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableAdvantageRemotePHYJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se000+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/advantage-remote-phy.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableEPN-M-RPHY-VideoJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se001+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/digitization.html?socialshare=cisco-epnm-vid#epnm',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableDigitizingAccessSolutionOverviewJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se002+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/first-step-in-cable-network-transformation-digitization.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableDigitizeProductBladeJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se003+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/digitization.html#products',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableVirtualizationOverviewVideoJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se004+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/virtualization.html?socialshare=cable-network-transformation-virtualize-vid',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableCloudNative-cnBR-AAGJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se005+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/cnbr-at-a-glance.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableHeadend-cnBR-OverviewVideoJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se006+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/virtualization.html?socialshare=go-cloud-native-vid#cnbr',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableCloudNativeFunctionsJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se007+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/cloud-native-network-functions.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableVirtualizationNetworkSolutionJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se008+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/virtualizing-the-cable-access-network.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableVirtualizeProductBladeJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se009+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/virtualization.html#products',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableInterconnectOverviewVideoJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se00-+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/intelligent-ip-interconnect.html?socialshare=cable-network-transformation-interconnect-vid',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableACGNetworkTransformationJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se00a+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/acg-research-modernizing-the-cable-network-infrastructure.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableACGImportanceCINJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se00b+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/acg-research-evolving-to-the-converged-interconnect-network.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableIntelligentIPInterconnectSolutionJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se00c+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/intelligently-interconnecting-the-cable-access-network.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableInterconnectProductBladeJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se00d+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/intelligent-ip-interconnect.html#products',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableSCTEVideoDemoBladeJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se00e+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable.html#tech-demos',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CableServicesAccessAAGJRNY',
            send_to: 'DC-3569326/gsp_j000/gl_se00g+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/industry/cable/services-to-enhance-cable-access-value-propositions.html',
            ],
          },
          {
            tagName: 'US_Small-Biz_C_ST_V_EasyPay',
            send_to: 'DC-3569326/small00/us_sm000+standard',
            urls: ['//engage2demand.cisco.com/LP=13841'],
          },
          {
            tagName: 'US_Small-Biz_C_ST_V_ScanYourNetwork',
            send_to: 'DC-3569326/small00/us_sm001+standard',
            urls: ['//engage2demand.cisco.com/1829'],
          },
          {
            tagName: 'US_Small-Biz_C_ST_V_ScanNetwork-TY',
            send_to: 'DC-3569326/small00/us_sm003+standard',
            urls: ['//engage2demand.cisco.com/lp2014_ty'],
          },
          {
            tagName: 'US_Small-Biz_C_ST_V_EasyPay-TY',
            send_to: 'DC-3569326/small00/us_sm002+standard',
            urls: ['//engage2demand.cisco.com/lp13845_ty'],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_5GJourneySelect',
            send_to: 'DC-3569326/gsp_j001/gl_se0+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/index.html#new-innovations',
              '//www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/the-cisco-mobile-cloud-control-portal-for-enterprise.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/index.html#crosswork-son',
              '//www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/index.html#xhaul',
              '//www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/index.html#~new-innovations',
              '//www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/index.html#~crosswork-son',
              '//www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/index.html#~xhaul',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_5GJourneyEvaluate',
            send_to: 'DC-3569326/gsp_j001/gl_se00+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/idc-digital-transformation-assessment.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/reimagining-mobile-network.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation.html?socialshare=videoblade2#use-case-vids',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation.html?socialshare=videoblade2#~5g-in-action',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation.html#~5g-in-action',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_5GJourneyConsider',
            send_to: 'DC-3569326/gsp_j001/gl_se000+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/grow-5g-business.html?socialshare=cisco-5g-architecture-demo#5g-architecture',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation.html?socialshare=unified-domain-center-demo#building-blocks',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/enhance-broadband-reliability.html?socialshare=open-vran-demo#open-vran',
              '//www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/index.html?socialshare=ultra-cloud-core-vid#new-innovations',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/grow-5g-business.html?socialshare=cisco-5g-architecture-demo#~5g-architecture',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/grow-5g-business.html#~5g-architecture',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation.html?socialshare=unified-domain-center-demo#~building-blocks',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation.html#~building-blocks',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/enhance-broadband-reliability.html?socialshare=open-vran-demo#~open-vran',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/enhance-broadband-reliability.html#~open-vran',
              '//www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/index.html?socialshare=ultra-cloud-core-vid#~new-innovations',
              '//www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/index.html#~new-innovations',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_5GJourneySolutionAware',
            send_to: 'DC-3569326/gsp_j001/gl_se001+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation.html?socialshare=power-5g-now-vid',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/grow-5g-business.html?socialshare=lightbox-5733935869001#5g-power',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/monetizing-5g-services.html?socialshare=profitability-with-5g-vid#making-5g-profitable',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/grow-5g-business.html?socialshare=lightbox-5733935869001#~5g-power',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/grow-5g-business.html#~5g-power',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/monetizing-5g-services.html?socialshare=profitability-with-5g-vid#~making-5g-profitable',
              '//www.cisco.com/c/en/us/solutions/service-provider/5g-transformation/monetizing-5g-services.html#~making-5g-profitable',
            ],
          },
          {
            tagName: 'JP_Learning_C_ST_V_CyberSecurity-Scholarship-Student',
            send_to: 'DC-3569326/japan003/jp_le0+standard',
            urls: [
              '//www.cisco.com/c/m/ja_jp/about/security-scholarship/security-scholarship-students.html',
            ],
          },
          {
            tagName: 'JP_Learning_C_ST_V_CyberSecurity-Scholarship-School',
            send_to: 'DC-3569326/japan003/jp_le00+standard',
            urls: [
              '//www.cisco.com/c/m/ja_jp/about/security-scholarship/security-scholarship-schools.html',
            ],
          },
          {
            tagName: 'JP_Learning_C_ST_V_CyberSecurity-Scholarship-Professionals',
            send_to: 'DC-3569326/japan003/jp_le000+standard',
            urls: [
              '//www.cisco.com/c/m/ja_jp/about/security-scholarship/security-scholarship-business.html',
            ],
          },
          {
            tagName: 'JP_Learning_C_ST_V_CyberSecurity-Scholarship-SubmitForm',
            send_to: 'DC-3569326/japan003/jp_le001+standard',
            urls: ['//www.cisco.com/c/m/ja_jp/about/security-scholarship/submit_form.html'],
          },
          {
            tagName: 'JP_Learning_C_ST_V_CyberSecurity-Scholarship-Registration',
            send_to: 'DC-3569326/japan003/jp_le002+standard',
            urls: ['//engage2demand.cisco.com/LP=8020'],
          },
          {
            tagName: 'JP_Learning_C_ST_V_CyberSecurity-Scholarship-HomePage',
            send_to: 'DC-3569326/japan003/jp_le003+standard',
            urls: ['//www.cisco.com/c/m/ja_jp/about/security-scholarship.html'],
          },
          {
            tagName: 'AMER_Product_C_ST_V_IOTWireless6300Series',
            send_to: 'DC-3569326/iotkp0/amer_00g+standard',
            urls: [
              '//www.cisco.com/c/en/us/products/wireless/industrial-wireless-6300-series/index.html',
            ],
          },
          {
            tagName: 'AMER_Product_C_ST_V_IoTIE3400HDSeries',
            send_to: 'DC-3569326/iotkp0/amer_00h+standard',
            urls: [
              '//www.cisco.com/c/en/us/products/switches/catalyst-ie3400-heavy-duty-series/index.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CriticalInfraJourneySolutionAware',
            send_to: 'DC-3569326/gsp_j002/gl_se0+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/critical-infrastructure.html?socialshare=future-for-mission',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CriticalInfraJourneyDCIUseCase',
            send_to: 'DC-3569326/gsp_j002/gl_se002+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/critical-infrastructure/data-center-interconnect.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CriticalInfraJourneyIMAUseCase',
            send_to: 'DC-3569326/gsp_j002/gl_se003+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/critical-infrastructure/intelligence-metro-access.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CriticalInfraJourneyDCIConsiderEvalSelect',
            send_to: 'DC-3569326/gsp_j002/gl_se005+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/critical-infrastructure/data-center-interconnect.html?socialshare=connecting-traffic-to-data-center-vid',
              '//www.cisco.com/c/m/en_us/network-intelligence/service-provider/digital-transformation/are-your-data-center-connections-ready.html',
              '//www.cisco.com/c/en/us/solutions/critical-infrastructure/data-center-connections-across-your-network.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_CriticalInfraJourneyIMAConsiderEvalSelect',
            send_to: 'DC-3569326/gsp_j002/gl_se004+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/critical-infrastructure/intelligence-metro-access.html?socialshare=scale-your-access-network-vid',
              '//www.cisco.com/c/m/en_us/network-intelligence/service-provider/digital-transformation/take-control-of-your-access-network.html',
              '//www.cisco.com/c/en/us/solutions/critical-infrastructure/evolve-your-access-network.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_AutomationJourneySelectTest',
            send_to: 'DC-3569326/gsp_j003/gl_se0+standard',
            urls: [
              '//www.cisco.com/c/en/us/products/cloud-systems-management/crosswork-network-automation/index.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html?socialshare=nso-vid#products',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html#products',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html?socialshare=automation-demo#crosswork-insights',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html#crosswork-insights',
              '//www.cisco.com/c/m/en_us/network-intelligence/service-provider/digital-transformation/network-automation.html#~innovations',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html?socialshare=trusted-infrastructure-demo#trust-insights',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html#trust-insights',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration/augmented-intelligence.html#next-gen-son',
            ],
          },
          {
            tagName: 'GL_Security_C_ST_V_NGFW-Firewall-ProductPage',
            send_to: 'DC-3569326/secur001/gl_se007+standard',
            urls: [
              '//www.cisco.com/c/en/us/products/security/firewalls/index.html?socialshare=lightbox-anchor1',
            ],
          },
          {
            tagName: 'GL_Security_C_ST_V_NGFW-Firewall-eBook',
            send_to: 'DC-3569326/secur001/gl_se006+standard',
            urls: ['//www.cisco.com/c/m/en_us/products/security/firewalls/ngfw-ebook.html'],
          },
          {
            tagName: 'AS_Security_C_ST_V_NGFW-Firewall-BOFU-OfferPage',
            send_to: 'DC-3569326/secur001/as_se00+standard',
            urls: ['//engage2demand.cisco.com/1829'],
          },
          {
            tagName: 'AS_Security_C_ST_V_NGFW-Firewall-BOFU-ThankYouPage',
            send_to: 'DC-3569326/secur001/as_se0+standard',
            urls: ['//engage2demand.cisco.com/lp2014_ty'],
          },
          {
            tagName: 'GL_Security_C_ST_V_NGFW-Firewall-BOFU-UmbrellaSignUp',
            send_to: 'DC-3569326/secur001/gl_se005+standard',
            urls: [
              '//signup.umbrella.com/?utm_source=cisco-referral&utm_medium=cisco-referral&utm_campaign=2017q2-cisco-referral-cb',
            ],
          },
          {
            tagName: 'GL_Security_C_ST_V_NGFW-Firewall-BOFU-Umbrella-ThankYou',
            send_to: 'DC-3569326/secur001/gl_se004+standard',
            urls: ['//signup.umbrella.com/building'],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_AutomationJourneySolutionAware',
            send_to: 'DC-3569326/gsp_j003/gl_se000+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html?socialshare=lightbox-5724232224001',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration/mass-awareness.html?socialshare=lightbox-5719600842001#visibility',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration/mass-awareness.html#visibility',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html#benefits',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html#innovations',
              '//www.cisco.com/c/en/us/products/cloud-systems-management/crosswork-network-automation/index.html?socialshare=telefonica',
              '//www.cisco.com/c/en/us/products/cloud-systems-management/crosswork-network-automation/index.html',
            ],
          },
          {
            tagName: 'GL_Service-Provider_C_ST_V_AutomationJourneyConsiderEvaluate',
            send_to: 'DC-3569326/gsp_j003/gl_se00+standard',
            urls: [
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration/mass-awareness.html?socialshare=lightbox-5715375742001#visibility',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration/mass-awareness.html#visibility',
              '//www.cisco.com/c/m/en_us/network-intelligence/service-provider/digital-transformation/crosswork-closed-loop-automation-solution.html',
              '//www.cisco.com/c/en/us/products/cloud-systems-management/crosswork-network-automation/the-risks-of-traffic-hijacking.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration/proactive-control.html?socialshare=lightbox-5715378884001#deliver',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration/proactive-control.html#deliver',
              '//www.cisco.com/c/m/en_us/network-intelligence/service-provider/digital-transformation/proactive-control.html#~overview',
              '//www.cisco.com/c/m/en_us/network-intelligence/service-provider/digital-transformation/proactive-control.html?socialshare=lightbox-5715378884001#~overview',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html?socialshare=lightbox-5788368371001#case-studies',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html#case-studies',
              '//www.cisco.com/c/m/en_us/network-intelligence/service-provider/digital-transformation/automation-journey-blogs.html',
              '//www.cisco.com/c/en/us/solutions/service-provider/network-automation-orchestration.html?socialshare=lightbox-5752446450001#case-studies',
            ],
          },
        ];
        return e;
      }),
      ctmsRequire.define('activeConversion', ['conversionConfig'], function (e) {
        var t = function (t) {
          var c = [];
          'undefined' == typeof t && (t = window.location.href);
          for (var o = 0; o < e.length; o++)
            for (var s = e[o].urls, i = 0; i < s.length; i++)
              if (t.indexOf(s[i]) > -1) {
                c.push(e[o].send_to);
                break;
              }
          return { gConfObj: c };
        };
        return { getConversionConfigObj: t };
      }),
      ctmsRequire.define('errorCount', ['ctmsUtil'], function (e) {
        ctm.util.jsErrorCount = 0;
        var t;
        null != window.onerror && (t = window.onerror),
          (window.onerror = function (e, c, o, s, i) {
            return t && t(e, c, o, s, i), ctm.util.jsErrorCount++, !1;
          });
      }),
      ctmsRequire.require([
        'browserFeatures',
        'ctmsUtil',
        'oneTrust',
        'cdcPerformance',
        'performanceMarks',
        'visitConfig',
        'omsStorage',
        'videoMetrics',
        'loginReferrer',
        'activeSensor',
        'activeConversion',
        'utagLoader',
        'errorCount',
      ]),
      ctmsRequire.define('main', function () {}),
      ctmsRequire.define('ctmsRequire', function () {});
  })();
}
