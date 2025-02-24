var _satellite;
{
  const $___stub_93ef30bcc5fe9986 = {};
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
  })($___stub_93ef30bcc5fe9986);
  const $___stub_3ac875f7196a9c3f = {};
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
  })($___stub_3ac875f7196a9c3f);
  (function () {
    (window._satellite = window._satellite || {}),
      (window._satellite.container = {
        buildInfo: {
          minified: !0,
          buildDate: '2020-09-09T05:54:32Z',
          environment: 'production',
          turbineBuildDate: '2020-08-10T20:14:17Z',
          turbineVersion: '27.0.0',
        },
        dataElements: {},
        extensions: {},
        company: { orgId: '9A7F02BE5329651E0A490D4C@AdobeOrg' },
        property: {
          name: 'MM Global Analytics',
          settings: {
            domains: ['www.manoramaonline.com'],
            undefinedVarsReturnEmpty: !1,
            ruleComponentSequencingEnabled: !1,
          },
        },
        rules: [],
      });
    var $___var_3c769a580da4210f = (function () {
      const $___old_f8e03c8ac0bff4f3 = {}.constructor.getOwnPropertyDescriptor(
        Navigator.prototype,
        'userAgent'
      );
      try {
        if ($___old_f8e03c8ac0bff4f3)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_93ef30bcc5fe9986.userAgent
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
          function f (e) {
            return Boolean(e && 'undefined' != typeof e.length);
          }
          function r () {}
          function o (e, n) {
            return function () {
              e.apply(n, arguments);
            };
          }
          function i (e) {
            if (!(this instanceof i)) throw new TypeError('Promises must be constructed via new');
            if ('function' != typeof e) throw new TypeError('not a function');
            (this._state = 0),
              (this._handled = !1),
              (this._value = undefined),
              (this._deferreds = []),
              d(e, this);
          }
          function u (r, o) {
            for (; 3 === r._state; ) r = r._value;
            0 !== r._state
              ? ((r._handled = !0),
                i._immediateFn(function () {
                  var e = 1 === r._state ? o.onFulfilled : o.onRejected;
                  if (null !== e) {
                    var n;
                    try {
                      n = e(r._value);
                    } catch (t) {
                      return void c(o.promise, t);
                    }
                    a(o.promise, n);
                  } else (1 === r._state ? a : c)(o.promise, r._value);
                }))
              : r._deferreds.push(o);
          }
          function a (e, n) {
            try {
              if (n === e) throw new TypeError('A promise cannot be resolved with itself.');
              if (n && ('object' == typeof n || 'function' == typeof n)) {
                var t = n.then;
                if (n instanceof i) return (e._state = 3), (e._value = n), void s(e);
                if ('function' == typeof t) return void d(o(t, n), e);
              }
              (e._state = 1), (e._value = n), s(e);
            } catch (r) {
              c(e, r);
            }
          }
          function c (e, n) {
            (e._state = 2), (e._value = n), s(e);
          }
          function s (e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              i._immediateFn(function () {
                e._handled || i._unhandledRejectionFn(e._value);
              });
            for (var n = 0, t = e._deferreds.length; n < t; n++) u(e, e._deferreds[n]);
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
                  t || ((t = !0), a(n, e));
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
          function p (e) {
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
          function m (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
          }
          if (window.atob) {
            var g = function (e) {
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
              h = 'debug',
              v = function (n, e) {
                var t = function () {
                    return 'true' === n.getItem(h);
                  },
                  r = function (e) {
                    n.setItem(h, e);
                  },
                  o = [],
                  i = function (e) {
                    o.push(e);
                  };
                return (
                  (e.outputEnabled = t()),
                  {
                    onDebugChanged: i,
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
              b = function (i, u) {
                return function (e, n, t) {
                  t = t || [];
                  var r = i.getModuleExports(e.modulePath);
                  if ('function' != typeof r) throw new Error(y);
                  var o = u(e.settings || {}, n);
                  return r.bind(null, o).apply(null, t);
                };
              },
              w = function (e) {
                return 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e;
              },
              E = { LOG: 'log', INFO: 'info', DEBUG: 'debug', WARN: 'warn', ERROR: 'error' },
              O = '\uD83D\uDE80',
              _ =
                10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1])
                  ? '[Launch]'
                  : O,
              x = !1,
              I = function (e) {
                if (x && window.console) {
                  var n = Array.prototype.slice.call(arguments, 1);
                  n.unshift(_),
                    e !== E.DEBUG || window.console[e] || (e = E.INFO),
                    window.console[e].apply(window.console, n);
                }
              },
              C = I.bind(null, E.LOG),
              j = I.bind(null, E.INFO),
              k = I.bind(null, E.DEBUG),
              P = I.bind(null, E.WARN),
              S = I.bind(null, E.ERROR),
              A = {
                log: C,
                info: j,
                debug: k,
                warn: P,
                error: S,
                get outputEnabled () {
                  return x;
                },
                set outputEnabled (e) {
                  x = e;
                },
                createPrefixedLogger: function (e) {
                  var n = '[' + e + ']';
                  return {
                    log: C.bind(null, n),
                    info: j.bind(null, n),
                    debug: k.bind(null, n),
                    warn: P.bind(null, n),
                    error: S.bind(null, n),
                  };
                },
              },
              R = e(function (r) {
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
                  function s (e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                  }
                  function e (f) {
                    function a () {}
                    function t (e, n, t) {
                      if ('undefined' != typeof document) {
                        'number' == typeof (t = c({ path: '/' }, a.defaults, t)).expires &&
                          (t.expires = new Date(1 * new Date() + 86400000 * t.expires)),
                          (t.expires = t.expires ? t.expires.toUTCString() : '');
                        try {
                          var r = JSON.stringify(n);
                          /^[\{\[]/.test(r) && (n = r);
                        } catch (u) {}
                        (n = f.write
                          ? f.write(n, e)
                          : encodeURIComponent(String(n)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                            )),
                          (e = encodeURIComponent(String(e))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                        var o = '';
                        for (var i in t)
                          t[i] &&
                            ((o += '; ' + i), !0 !== t[i] && (o += '=' + t[i].split(';')[0]));
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
                          var i = r[o].split('='),
                            u = i.slice(1).join('=');
                          n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                          try {
                            var a = s(i[0]);
                            if (((u = (f.read || f)(u, a) || s(u)), n))
                              try {
                                u = JSON.parse(u);
                              } catch (c) {}
                            if (((t[a] = u), e === a)) break;
                          } catch (c) {}
                        }
                        return e ? t[e] : t;
                      }
                    }
                    return (
                      (a.set = t),
                      (a.get = function (e) {
                        return n(e, !1);
                      }),
                      (a.getJSON = function (e) {
                        return n(e, !0);
                      }),
                      (a.remove = function (e, n) {
                        t(e, '', c(n, { expires: -1 }));
                      }),
                      (a.defaults = {}),
                      (a.withConverter = e),
                      a
                    );
                  }
                  return e(function () {});
                });
              }),
              D = { get: R.get, set: R.set, remove: R.remove },
              T = window,
              N = 'com.adobe.reactor.',
              F = function (r, e) {
                var o = N + (e || '');
                return {
                  getItem: function (e) {
                    const $___old_12af389b8d4e69f2 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_12af389b8d4e69f2)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_3ac875f7196a9c3f.localStorage
                        ));
                      return function () {
                        try {
                          return T[r].getItem(o + e);
                        } catch (n) {
                          return null;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_12af389b8d4e69f2)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_12af389b8d4e69f2
                        ));
                    }
                  },
                  setItem: function (e, n) {
                    const $___old_8b6df9ca535cf477 = {}.constructor.getOwnPropertyDescriptor(
                      window,
                      'localStorage'
                    );
                    try {
                      if ($___old_8b6df9ca535cf477)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___stub_3ac875f7196a9c3f.localStorage
                        ));
                      return function () {
                        try {
                          return T[r].setItem(o + e, n), !0;
                        } catch (t) {
                          return !1;
                        }
                      }.apply(this, arguments);
                    } finally {
                      if ($___old_8b6df9ca535cf477)
                        ({}.constructor.defineProperty(
                          window,
                          'localStorage',
                          $___old_8b6df9ca535cf477
                        ));
                    }
                  },
                };
              },
              M = '_sdsat_',
              U = 'dataElements.',
              V = 'dataElementCookiesMigrated',
              B = F('localStorage'),
              L = F('sessionStorage', U),
              q = F('localStorage', U),
              G = { PAGEVIEW: 'pageview', SESSION: 'session', VISITOR: 'visitor' },
              J = {},
              $ = function (e) {
                var n;
                try {
                  n = JSON.stringify(e);
                } catch (t) {}
                return n;
              },
              W = function (e, n, t) {
                var r;
                switch (n) {
                  case G.PAGEVIEW:
                    return void (J[e] = t);
                  case G.SESSION:
                    return void ((r = $(t)) && L.setItem(e, r));
                  case G.VISITOR:
                    return void ((r = $(t)) && q.setItem(e, r));
                }
              },
              Z = function (e, n) {
                var t = D.get(M + e);
                t !== undefined && W(e, n, t);
              },
              K = {
                setValue: W,
                getValue: function (e, n) {
                  var t;
                  switch (n) {
                    case G.PAGEVIEW:
                      return J.hasOwnProperty(e) ? J[e] : null;
                    case G.SESSION:
                      return null === (t = L.getItem(e)) ? t : JSON.parse(t);
                    case G.VISITOR:
                      return null === (t = q.getItem(e)) ? t : JSON.parse(t);
                  }
                },
                migrateCookieData: function (n) {
                  B.getItem(V) ||
                    (Object.keys(n).forEach(function (e) {
                      Z(e, n[e].storageDuration);
                    }),
                    B.setItem(V, !0));
                },
              },
              z = function (e, n, t, r) {
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
              H = function (a, c, f, s) {
                return function (e, n) {
                  var t = c(e);
                  if (!t) return s ? '' : undefined;
                  var r,
                    o = t.storageDuration;
                  try {
                    r = a.getModuleExports(t.modulePath);
                  } catch (u) {
                    return void A.error(z(t, e, u.message, u.stack));
                  }
                  if ('function' == typeof r) {
                    var i;
                    try {
                      i = r(f(t.settings, n), n);
                    } catch (u) {
                      return void A.error(z(t, e, u.message, u.stack));
                    }
                    return (
                      o && (null != i ? K.setValue(e, o, i) : (i = K.getValue(e, o))),
                      null == i && null != t.defaultValue && (i = t.defaultValue),
                      'string' == typeof i &&
                        (t.cleanText && (i = w(i)), t.forceLowerCase && (i = i.toLowerCase())),
                      i
                    );
                  }
                  A.error(z(t, e, 'Module did not export a function.'));
                };
              },
              Q = {
                text: function (e) {
                  return e.textContent;
                },
                cleanText: function (e) {
                  return w(e.textContent);
                },
              },
              X = function (e, n, t) {
                for (var r, o = e, i = 0, u = n.length; i < u; i++) {
                  if (null == o) return undefined;
                  var a = n[i];
                  if (t && '@' === a.charAt(0)) {
                    var c = a.slice(1);
                    o = Q[c](o);
                  } else if (o.getAttribute && (r = a.match(/^getAttribute\((.+)\)$/))) {
                    var f = r[1];
                    o = o.getAttribute(f);
                  } else o = o[a];
                }
                return o;
              },
              Y = function (i, u, a) {
                return function (e, n) {
                  var t;
                  if (u(e)) t = a(e, n);
                  else {
                    var r = e.split('.'),
                      o = r.shift();
                    'this' === o
                      ? n && (t = X(n.element, r, !0))
                      : 'event' === o
                      ? n && (t = X(n, r))
                      : 'target' === o
                      ? n && (t = X(n.target, r))
                      : (t = X(i[o], r));
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
                var u = {},
                  t = function (e) {
                    var n = u[e];
                    if (!n) throw new Error('Module ' + e + ' not found.');
                    return n;
                  },
                  e = function () {
                    Object.keys(u).forEach(function (e) {
                      try {
                        r(e);
                      } catch (t) {
                        var n =
                          'Error initializing module ' +
                          e +
                          '. ' +
                          t.message +
                          (t.stack ? '\n' + t.stack : '');
                        A.error(n);
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
                    var i = { definition: n, extensionName: t, require: r, turbine: o };
                    (i.require = r), (u[e] = i);
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
                      (A.warn(
                        'The _satellite._monitors API may change at any time and should only be used for debugging.'
                      ),
                      (re = !0)),
                    e.forEach(function (e) {
                      e[n] && e[n](t);
                    }));
                };
              },
              ie = function (o, i, u) {
                var t,
                  r,
                  a,
                  c,
                  f = [],
                  s = function (e, n, t) {
                    if (!o(n)) return e;
                    f.push(n);
                    var r = i(n, t);
                    return f.pop(), null == r && u ? '' : r;
                  };
                return (
                  (t = function (e, t) {
                    var n = /^%([^%]+)%$/.exec(e);
                    return n
                      ? s(e, n[1], t)
                      : e.replace(/%(.+?)%/g, function (e, n) {
                          return s(e, n, t);
                        });
                  }),
                  (r = function (e, n) {
                    for (var t = {}, r = Object.keys(e), o = 0; o < r.length; o++) {
                      var i = r[o],
                        u = e[i];
                      t[i] = c(u, n);
                    }
                    return t;
                  }),
                  (a = function (e, n) {
                    for (var t = [], r = 0, o = e.length; r < o; r++) t.push(c(e[r], n));
                    return t;
                  }),
                  (c = function (e, n) {
                    return 'string' == typeof e
                      ? t(e, n)
                      : Array.isArray(e)
                      ? a(e, n)
                      : 'object' == typeof e && null !== e
                      ? r(e, n)
                      : e;
                  }),
                  function (e, n) {
                    return 10 < f.length
                      ? (A.error('Data element circular reference detected: ' + f.join(' -> ')), e)
                      : c(e, n);
                  }
                );
              },
              ue = function (o) {
                return function (e, n) {
                  if ('string' == typeof e) o[arguments[0]] = n;
                  else if (arguments[0]) {
                    var t = arguments[0];
                    for (var r in t) o[r] = t[r];
                  }
                };
              },
              ae = setTimeout;
            (i.prototype['catch'] = function (e) {
              return this.then(null, e);
            }),
              (i.prototype.then = function (e, n) {
                var t = new this.constructor(r);
                return u(this, new l(e, n, t)), t;
              }),
              (i.prototype['finally'] = n),
              (i.all = function (n) {
                return new i(function (o, i) {
                  function u (n, e) {
                    try {
                      if (e && ('object' == typeof e || 'function' == typeof e)) {
                        var t = e.then;
                        if ('function' == typeof t)
                          return void t.call(
                            e,
                            function (e) {
                              u(n, e);
                            },
                            i
                          );
                      }
                      (a[n] = e), 0 == --c && o(a);
                    } catch (r) {
                      i(r);
                    }
                  }
                  if (!f(n)) return i(new TypeError('Promise.all accepts an array'));
                  var a = Array.prototype.slice.call(n);
                  if (0 === a.length) return o([]);
                  for (var c = a.length, e = 0; e < a.length; e++) u(e, a[e]);
                });
              }),
              (i.resolve = function (n) {
                return n && 'object' == typeof n && n.constructor === i
                  ? n
                  : new i(function (e) {
                      e(n);
                    });
              }),
              (i.reject = function (t) {
                return new i(function (e, n) {
                  n(t);
                });
              }),
              (i.race = function (o) {
                return new i(function (e, n) {
                  if (!f(o)) return n(new TypeError('Promise.race accepts an array'));
                  for (var t = 0, r = o.length; t < r; t++) i.resolve(o[t]).then(e, n);
                });
              }),
              (i._immediateFn =
                ('function' == typeof setImmediate &&
                  function (e) {
                    setImmediate(e);
                  }) ||
                function (e) {
                  ae(e, 0);
                }),
              (i._unhandledRejectionFn = function In (e) {
                'undefined' != typeof console &&
                  console &&
                  console.warn('Possible Unhandled Promise Rejection:', e);
              });
            var ce = window.Promise || i['default'] || i,
              fe = function (f, t, r) {
                return function (a, n, c, e) {
                  return e.then(function () {
                    var i,
                      u = a.delayNext;
                    return new ce(function (e, n) {
                      var t = f(a, c, [c]);
                      if (!u) return e();
                      var r = a.timeout,
                        o = new ce(function (e, n) {
                          i = setTimeout(function () {
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
                        return clearTimeout(i), (e = t(e)), r(a, n, e), ce.reject(e);
                      })
                      .then(function () {
                        clearTimeout(i);
                      });
                  });
                };
              },
              se = function (c, t, r, o, f) {
                return function (u, n, a, e) {
                  return e.then(function () {
                    var i;
                    return new ce(function (e, n) {
                      var t = c(u, a, [a]),
                        r = u.timeout,
                        o = new ce(function (e, n) {
                          i = setTimeout(function () {
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
                        return clearTimeout(i), (e = t(e)), o(u, n, e), ce.reject(e);
                      })
                      .then(function (e) {
                        if ((clearTimeout(i), !r(u, e))) return f(u, n), ce.reject();
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
              pe = function (e) {
                return Boolean(e && 'object' == typeof e && 'function' == typeof e.then);
              },
              ge = function (u, a, c, f) {
                return function (e, n) {
                  var t;
                  if (e.conditions)
                    for (var r = 0; r < e.conditions.length; r++) {
                      t = e.conditions[r];
                      try {
                        var o = u(t, n, [n]);
                        if (pe(o))
                          throw new Error(
                            'Rule component sequencing must be enabled on the property for this condition to function properly.'
                          );
                        if (!a(t, o)) return c(t, e), !1;
                      } catch (i) {
                        return f(t, e, i), !1;
                      }
                    }
                  return !0;
                };
              },
              me = function (t, r) {
                return function (e, n) {
                  t(e, n) && r(e, n);
                };
              },
              he = function (t) {
                return function (e) {
                  var n = t.getModuleDefinition(e.modulePath);
                  return (n && n.displayName) || e.modulePath;
                };
              },
              ve = function (o) {
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
              ye = function (a, c, f, s, l, d) {
                return function (t, e) {
                  var r = e.rule,
                    n = e.event;
                  n.settings = n.settings || {};
                  try {
                    var o = l(e);
                    c(n, null, [
                      function i (e) {
                        var n = f(o, e);
                        t(function () {
                          a(n, r);
                        });
                      },
                    ]);
                  } catch (u) {
                    d.error(s(n, r, u));
                  }
                };
              },
              be = function (o, i, u, a) {
                return function (e, n, t) {
                  var r = i(e);
                  u.error(o(r, n.name, t)), a('ruleActionFailed', { rule: n, action: e });
                };
              },
              we = function (o, i, u, a) {
                return function (e, n, t) {
                  var r = i(e);
                  u.error(o(r, n.name, t)), a('ruleConditionFailed', { rule: n, condition: e });
                };
              },
              Ee = function (r, o, i) {
                return function (e, n) {
                  var t = r(e);
                  o.log('Condition "' + t + '" for rule "' + n.name + '" was not met.'),
                    i('ruleConditionFailed', { rule: n, condition: e });
                };
              },
              Oe = function (n, t) {
                return function (e) {
                  n.log('Rule "' + e.name + '" fired.'), t('ruleCompleted', { rule: e });
                };
              },
              _e = function (i, u, a) {
                return function (e, n) {
                  var t;
                  if (e.actions)
                    for (var r = 0; r < e.actions.length; r++) {
                      t = e.actions[r];
                      try {
                        i(t, n, [n]);
                      } catch (o) {
                        return void u(t, e, o);
                      }
                    }
                  a(e);
                };
              },
              xe = function (t, r, o, i) {
                return function (e, n) {
                  i('ruleTriggered', { rule: n }), t ? o(n, e) : r(n, e);
                };
              },
              Ie = function (e, n, t) {
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
              je = [],
              ke = !1,
              Pe = function (e) {
                ke ? e() : je.push(e);
              },
              Se = function (e, n, t) {
                e(n).forEach(function (e) {
                  t(Pe, e);
                }),
                  (ke = !0),
                  je.forEach(function (e) {
                    e();
                  }),
                  (je = []);
              },
              Ae = function (e) {
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
              Re = Object.getOwnPropertySymbols,
              De = Object.prototype.hasOwnProperty,
              Te = Object.prototype.propertyIsEnumerable,
              Ne = t()
                ? Object.assign
                : function (e) {
                    for (var n, t, r = p(e), o = 1; o < arguments.length; o++) {
                      for (var i in (n = Object(arguments[o]))) De.call(n, i) && (r[i] = n[i]);
                      if (Re) {
                        t = Re(n);
                        for (var u = 0; u < t.length; u++) Te.call(n, t[u]) && (r[t[u]] = n[t[u]]);
                      }
                    }
                    return r;
                  },
              Fe = function (e, n) {
                return (
                  Ne((n = n || {}), e),
                  n.hasOwnProperty('type') ||
                    Object.defineProperty(n, 'type', {
                      get: function () {
                        return (
                          A.warn(
                            'Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead.'
                          ),
                          n.$type
                        );
                      },
                    }),
                  n
                );
              },
              Me = function (c, f) {
                return function (e, n) {
                  var t = c[e];
                  if (t) {
                    var r = t.modules;
                    if (r)
                      for (var o = Object.keys(r), i = 0; i < o.length; i++) {
                        var u = o[i],
                          a = r[u];
                        if (a.shared && a.name === n) return f.getModuleExports(u);
                      }
                  }
                };
              },
              Ue = function (e, n) {
                return function () {
                  return n ? e(n) : {};
                };
              },
              Ve = function (t, r) {
                return function (e) {
                  if (r) {
                    var n = e.split('.');
                    n.splice(n.length - 1 || 1, 0, 'min'), (e = n.join('.'));
                  }
                  return t + e;
                };
              },
              Be = '.js',
              Le = function (e) {
                return e.substr(0, e.lastIndexOf('/'));
              },
              qe = function (e, n) {
                return -1 !== e.indexOf(n, e.length - n.length);
              },
              Ge = function (e, n) {
                qe(n, Be) || (n += Be);
                var t = n.split('/'),
                  r = Le(e).split('/');
                return (
                  t.forEach(function (e) {
                    e && '.' !== e && ('..' === e ? r.length && r.pop() : r.push(e));
                  }),
                  r.join('/')
                );
              },
              Je = document,
              $e = function (t, r) {
                return new ce(function (e, n) {
                  (r.onload = function () {
                    e(r);
                  }),
                    (r.onerror = function () {
                      n(new Error('Failed to load script ' + t));
                    });
                });
              },
              We = function (e) {
                var n = document.createElement('script');
                (n.src = e), (n.async = !0);
                var t = $e(e, n);
                return document.getElementsByTagName('head')[0].appendChild(n), t;
              },
              Ze = function (e, n, t, r) {
                (n = n || '&'), (t = t || '=');
                var o = {};
                if ('string' != typeof e || 0 === e.length) return o;
                var i = /\+/g;
                e = e.split(n);
                var u = 1000;
                r && 'number' == typeof r.maxKeys && (u = r.maxKeys);
                var a = e.length;
                0 < u && u < a && (a = u);
                for (var c = 0; c < a; ++c) {
                  var f,
                    s,
                    l,
                    d,
                    p = e[c].replace(i, '%20'),
                    g = p.indexOf(t);
                  0 <= g ? ((f = p.substr(0, g)), (s = p.substr(g + 1))) : ((f = p), (s = '')),
                    (l = decodeURIComponent(f)),
                    (d = decodeURIComponent(s)),
                    m(o, l)
                      ? Array.isArray(o[l])
                        ? o[l].push(d)
                        : (o[l] = [o[l], d])
                      : (o[l] = d);
                }
                return o;
              },
              Ke = function (e) {
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
              ze = function (t, r, o, e) {
                return (
                  (r = r || '&'),
                  (o = o || '='),
                  null === t && (t = undefined),
                  'object' == typeof t
                    ? Object.keys(t)
                        .map(function (e) {
                          var n = encodeURIComponent(Ke(e)) + o;
                          return Array.isArray(t[e])
                            ? t[e]
                                .map(function (e) {
                                  return n + encodeURIComponent(Ke(e));
                                })
                                .join(r)
                            : n + encodeURIComponent(Ke(t[e]));
                        })
                        .join(r)
                    : e
                    ? encodeURIComponent(Ke(e)) + o + encodeURIComponent(Ke(t))
                    : ''
                );
              },
              He = e(function (e, n) {
                (n.decode = n.parse = Ze), (n.encode = n.stringify = ze);
              }),
              Qe = (He.decode, He.parse, He.encode, He.stringify, '@adobe/reactor-'),
              Xe = {
                cookie: D,
                document: Je,
                'load-script': We,
                'object-assign': Ne,
                promise: ce,
                'query-string': {
                  parse: function (e) {
                    return (
                      'string' == typeof e && (e = e.trim().replace(/^[?#&]/, '')), He.parse(e)
                    );
                  },
                  stringify: function (e) {
                    return He.stringify(e);
                  },
                },
                window: T,
              },
              Ye = function (r) {
                return function (e) {
                  if (0 === e.indexOf(Qe)) {
                    var n = e.substr(Qe.length),
                      t = Xe[n];
                    if (t) return t;
                  }
                  if (0 === e.indexOf('./') || 0 === e.indexOf('../')) return r(e);
                  throw new Error('Cannot resolve module "' + e + '".');
                };
              },
              en = function (e, u, a, c, f) {
                var s = e.extensions,
                  l = e.buildInfo,
                  d = e.property.settings;
                if (s) {
                  var p = Me(s, u);
                  Object.keys(s).forEach(function (r) {
                    var o = s[r],
                      e = Ue(c, o.settings);
                    if (o.modules) {
                      var n = A.createPrefixedLogger(o.displayName),
                        t = Ve(o.hostedLibFilesBaseUrl, l.minified),
                        i = {
                          buildInfo: l,
                          getDataElementValue: f,
                          getExtensionSettings: e,
                          getHostedLibFileUrl: t,
                          getSharedModule: p,
                          logger: n,
                          propertySettings: d,
                          replaceTokens: c,
                          onDebugChanged: a.onDebugChanged,
                          get debugEnabled () {
                            return a.getDebugEnabled();
                          },
                        };
                      Object.keys(o.modules).forEach(function (t) {
                        var e = o.modules[t],
                          n = Ye(function (e) {
                            var n = Ge(t, e);
                            return u.getModuleExports(n);
                          });
                        u.registerModule(t, e, r, n, i);
                      });
                    }
                  }),
                    u.hydrateCache();
                }
                return u;
              },
              nn = function (e, n, t, r, o) {
                var i = A.createPrefixedLogger('Custom Script');
                (e.track = function (e) {
                  A.log('"' + e + '" does not match any direct call identifiers.');
                }),
                  (e.getVisitorId = function () {
                    return null;
                  }),
                  (e.property = { name: n.property.name }),
                  (e.company = n.company),
                  (e.buildInfo = n.buildInfo),
                  (e.logger = i),
                  (e.notify = function (e, n) {
                    switch (
                      (A.warn(
                        '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
                      ),
                      n)
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
                  (e.setCookie = function (e, n, t) {
                    var r = '',
                      o = {};
                    t && ((r = ', { expires: ' + t + ' }'), (o.expires = t));
                    var i =
                      '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' +
                      e +
                      '", "' +
                      n +
                      '"' +
                      r +
                      ').';
                    A.warn(i), D.set(e, n, o);
                  }),
                  (e.readCookie = function (e) {
                    return (
                      A.warn(
                        '_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' +
                          e +
                          '").'
                      ),
                      D.get(e)
                    );
                  }),
                  (e.removeCookie = function (e) {
                    A.warn(
                      '_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' +
                        e +
                        '").'
                    ),
                      D.remove(e);
                  }),
                  (e.cookie = D),
                  (e.pageBottom = function () {}),
                  (e.setDebug = t);
                var u = !1;
                Object.defineProperty(e, '_container', {
                  get: function () {
                    return (
                      u ||
                        (A.warn(
                          '_satellite._container may change at any time and should only be used for debugging.'
                        ),
                        (u = !0)),
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
                un = rn.property.settings.ruleComponentSequencingEnabled,
                an = rn.dataElements || {};
              K.migrateCookieData(an);
              var cn,
                fn = function (e) {
                  return an[e];
                },
                sn = te(),
                ln = H(
                  sn,
                  fn,
                  function () {
                    return cn.apply(null, arguments);
                  },
                  on
                ),
                dn = {},
                pn = ue(dn),
                gn = ee(dn, fn),
                mn = Y(dn, fn, ln);
              cn = ie(gn, mn, on);
              var hn = v(F('localStorage'), A);
              nn(tn, rn, hn.setDebugEnabled, mn, pn), en(rn, sn, hn, cn, ln);
              var vn = oe(tn),
                yn = b(sn, cn),
                bn = he(sn),
                wn = Ee(bn, A, vn),
                En = we(Ie, bn, A, vn),
                On = be(Ie, bn, A, vn),
                _n = Oe(A, vn),
                xn = ye(
                  xe(
                    un,
                    me(ge(yn, Ce, wn, En), _e(yn, On, _n)),
                    de(se(yn, Ae, Ce, En, wn), fe(yn, Ae, On), _n),
                    vn
                  ),
                  yn,
                  Fe,
                  Ie,
                  ve(sn),
                  A
                );
              Se(g, rn.rules || [], xn);
            }
            return tn;
          }
          console.warn('Adobe Launch is unsupported in IE 9 and below.');
        }.apply(this, arguments);
      } finally {
        if ($___old_f8e03c8ac0bff4f3)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_f8e03c8ac0bff4f3
          ));
      }
    })();
    _satellite = $___var_3c769a580da4210f;
  })();
}
