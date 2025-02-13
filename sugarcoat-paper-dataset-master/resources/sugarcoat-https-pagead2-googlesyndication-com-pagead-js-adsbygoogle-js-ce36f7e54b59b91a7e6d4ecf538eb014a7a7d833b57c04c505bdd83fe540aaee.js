{
  const $___stub_d805ada25b0ee6d7 = {};
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
  })($___stub_d805ada25b0ee6d7);
  const $___stub_9bd06e76dd65dd94 = {};
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
  })($___stub_9bd06e76dd65dd94);
  const $___stub_aa247db1c85ca96e = {};
  (exports => {
    'use strict';
    let isSealed = false;
    const timeOrigin = Date.now();
    class PerformanceNavigation {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
      }
      get type () {
        return PerformanceNavigation.TYPE_NAVIGATE;
      }
      get redirectCount () {
        return 0;
      }
      toJSON () {
        return { type: this.type, redirectCount: this.redirectCount };
      }
    }
    Object.defineProperty(PerformanceNavigation, 'TYPE_NAVIGATE', {
      configurable: false,
      enumerable: true,
      value: 0,
    });
    Object.defineProperty(PerformanceNavigation, 'TYPE_RELOAD', {
      configurable: false,
      enumerable: true,
      value: 1,
    });
    Object.defineProperty(PerformanceNavigation, 'TYPE_BACK_FORWARD', {
      configurable: false,
      enumerable: true,
      value: 2,
    });
    Object.defineProperty(PerformanceNavigation, 'TYPE_RESERVED', {
      configurable: false,
      enumerable: true,
      value: 255,
    });
    exports.PerformanceNavigation = {
      configurable: true,
      enumerable: true,
      value: PerformanceNavigation,
      writable: true,
    };
    class PerformanceTiming {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
      }
      get navigationStart () {
        return 0;
      }
      get unloadEventStart () {
        return 0;
      }
      get unloadEventEnd () {
        return 0;
      }
      get redirectStart () {
        return 0;
      }
      get redirectEnd () {
        return 0;
      }
      get fetchStart () {
        return 0;
      }
      get domainLookupStart () {
        return 0;
      }
      get domainLookupEnd () {
        return 0;
      }
      get connectStart () {
        return 0;
      }
      get connectEnd () {
        return 0;
      }
      get secureConnectionStart () {
        return 0;
      }
      get requestStart () {
        return 0;
      }
      get responseStart () {
        return 0;
      }
      get responseEnd () {
        return 0;
      }
      get domLoading () {
        return 0;
      }
      get domInteractive () {
        return 0;
      }
      get domContentLoadedEventStart () {
        return 0;
      }
      get domContentLoadEventEnd () {
        return 0;
      }
      get domComplete () {
        return 0;
      }
      get loadEventStart () {
        return 0;
      }
      get loadEventEnd () {
        return 0;
      }
      toJSON () {
        return {
          navigationStart: this.navigationStart,
          unloadEventStart: this.unloadEventStart,
          unloadEventEnd: this.unloadEventEnd,
          redirectStart: this.redirectStart,
          redirectEnd: this.redirectEnd,
          fetchStart: this.fetchStart,
          domainLookupStart: this.domainLookupStart,
          domainLookupEnd: this.domainLookupEnd,
          connectStart: this.connectStart,
          connectEnd: this.connectEnd,
          secureConnectionStart: this.secureConnectionStart,
          requestStart: this.requestStart,
          responseStart: this.responseStart,
          responseEnd: this.responseEnd,
          domLoading: this.domLoading,
          domInteractive: this.domInteractive,
          domContentLoadedEventStart: this.domContentLoadedEventStart,
          domContentLoadedEventEnd: this.domContentLoadedEventEnd,
          domComplete: this.domComplete,
          loadEventStart: this.loadEventStart,
          loadEventEnd: this.loadEventEnd,
        };
      }
    }
    exports.PerformanceTiming = {
      configurable: true,
      enumerable: true,
      value: PerformanceTiming,
      writable: true,
    };
    class MemoryInfo {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
      }
      get jsHeapSizeLimit () {
        return 0;
      }
      get totalJSHeapSize () {
        return 0;
      }
      get usedJSHeapSize () {
        return 0;
      }
    }
    const performanceNavigationSymbol = Symbol('navigation');
    const performanceTimingSymbol = Symbol('timing');
    const performanceMemorySymbol = Symbol('memory');
    class Performance {
      constructor () {
        if (isSealed) {
          throw new TypeError('Illegal constructor');
        }
        Object.defineProperty(this, performanceNavigationSymbol, {
          configurable: false,
          enumerable: false,
          value: new PerformanceNavigation(),
        });
        Object.defineProperty(this, performanceTimingSymbol, {
          configurable: false,
          enumerable: false,
          value: new PerformanceTiming(),
        });
        Object.defineProperty(this, performanceMemorySymbol, {
          configurable: false,
          enumerable: false,
          value: new MemoryInfo(),
        });
      }
      get navigation () {
        return this[performanceNavigationSymbol];
      }
      get timing () {
        return this[performanceTimingSymbol];
      }
      get memory () {
        return this[performanceMemorySymbol];
      }
      get timeOrigin () {
        return timeOrigin;
      }
      clearMarks (name = null) {}
      clearMeasures (name = null) {}
      clearResourceTimings () {}
      getEntries () {
        return [];
      }
      getEntriesByName (name, type = null) {
        return [];
      }
      getEntriesByType (type) {
        return [];
      }
      mark (name) {}
      measure (name, startMark = null, endMark = null) {}
      now () {
        return Date.now() - timeOrigin;
      }
      setResourceTimingBufferSize (maxSize) {}
      toJSON () {
        return { timeOrigin: this.timeOrigin, timing: this.timing, navigation: this.navigation };
      }
    }
    exports.Performance = {
      configurable: true,
      enumerable: true,
      value: Performance,
      writable: true,
    };
    const performance = new Performance();
    exports.performance = {
      configurable: true,
      enumerable: true,
      value: performance,
      writable: true,
    };
    class PerformanceObserver {
      constructor (callback) {}
      observe (options) {}
      disconnect () {}
      takeRecords () {
        return [];
      }
    }
    exports.PerformanceObserver = {
      configurable: true,
      enumerable: true,
      value: PerformanceObserver,
      writable: true,
    };
    isSealed = true;
  })($___stub_aa247db1c85ca96e);
  (function () {
    (function () {
      const $___old_803056d6cf2c8cd7 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        ),
        $___old_c31ca49237dee573 = {}.constructor.getOwnPropertyDescriptor(window, 'performance');
      try {
        if ($___old_803056d6cf2c8cd7)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_9bd06e76dd65dd94.userAgent
          ));
        if ($___old_c31ca49237dee573)
          ({}.constructor.defineProperty(
            window,
            'performance',
            $___stub_aa247db1c85ca96e.performance
          ));
        return function () {
          var n;
          function aa (a) {
            var b = 0;
            return function () {
              return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
            };
          }
          var ba =
            'function' == typeof Object.defineProperties
              ? Object.defineProperty
              : function (a, b, c) {
                  if (a == Array.prototype || a == Object.prototype) return a;
                  a[b] = c.value;
                  return a;
                };
          function ca (a) {
            a = [
              'object' == typeof globalThis && globalThis,
              a,
              'object' == typeof window && window,
              'object' == typeof self && self,
              'object' == typeof global && global,
            ];
            for (var b = 0; b < a.length; ++b) {
              var c = a[b];
              if (c && c.Math == Math) return c;
            }
            throw Error('Cannot find global object');
          }
          var da = ca(this),
            ea = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x'),
            q = {},
            fa = {};
          function r (a, b) {
            var c = fa[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b];
          }
          function u (a, b, c) {
            if (b)
              a: {
                var d = a.split('.');
                a = 1 === d.length;
                var e = d[0],
                  f;
                !a && e in q ? (f = q) : (f = da);
                for (e = 0; e < d.length - 1; e++) {
                  var g = d[e];
                  if (!(g in f)) break a;
                  f = f[g];
                }
                d = d[d.length - 1];
                c = ea && 'es6' === c ? f[d] : null;
                b = b(c);
                null != b &&
                  (a
                    ? ba(q, d, { configurable: !0, writable: !0, value: b })
                    : b !== c &&
                      ((fa[d] = ea ? da.Symbol(d) : '$jscp$' + d),
                      (d = fa[d]),
                      ba(f, d, { configurable: !0, writable: !0, value: b })));
              }
          }
          u(
            'Symbol',
            function (a) {
              function b (e) {
                if (this instanceof b) throw new TypeError('Symbol is not a constructor');
                return new c('jscomp_symbol_' + (e || '') + '_' + d++, e);
              }
              function c (e, f) {
                this.a = e;
                ba(this, 'description', { configurable: !0, writable: !0, value: f });
              }
              if (a) return a;
              c.prototype.toString = function () {
                return this.a;
              };
              var d = 0;
              return b;
            },
            'es6'
          );
          u(
            'Symbol.iterator',
            function (a) {
              if (a) return a;
              a = (0, q.Symbol)('Symbol.iterator');
              for (
                var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
                    ' '
                  ),
                  c = 0;
                c < b.length;
                c++
              ) {
                var d = da[b[c]];
                'function' === typeof d &&
                  'function' != typeof d.prototype[a] &&
                  ba(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                      return ha(aa(this));
                    },
                  });
              }
              return a;
            },
            'es6'
          );
          function ha (a) {
            a = { next: a };
            a[r(q.Symbol, 'iterator')] = function () {
              return this;
            };
            return a;
          }
          function ia (a) {
            return (a.raw = a);
          }
          function y (a) {
            var b =
              'undefined' != typeof q.Symbol &&
              r(q.Symbol, 'iterator') &&
              a[r(q.Symbol, 'iterator')];
            return b ? b.call(a) : { next: aa(a) };
          }
          function ja (a) {
            if (!(a instanceof Array)) {
              a = y(a);
              for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
              a = c;
            }
            return a;
          }
          var ka =
              'function' == typeof Object.create
                ? Object.create
                : function (a) {
                    function b () {}
                    b.prototype = a;
                    return new b();
                  },
            la;
          if (ea && 'function' == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
          else {
            var ma;
            a: {
              var na = { La: !0 },
                oa = {};
              try {
                oa.__proto__ = na;
                ma = oa.La;
                break a;
              } catch (a) {}
              ma = !1;
            }
            la = ma
              ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
                  return a;
                }
              : null;
          }
          var pa = la;
          function z (a, b) {
            a.prototype = ka(b.prototype);
            a.prototype.constructor = a;
            if (pa) pa(a, b);
            else
              for (var c in b)
                if ('prototype' != c)
                  if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d);
                  } else a[c] = b[c];
            a.cb = b.prototype;
          }
          function qa (a, b, c) {
            if (null == a)
              throw new TypeError(
                "The 'this' value for String.prototype." + c + ' must not be null or undefined'
              );
            if (b instanceof RegExp)
              throw new TypeError(
                'First argument to String.prototype.' + c + ' must not be a regular expression'
              );
            return a + '';
          }
          u(
            'String.prototype.endsWith',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    var d = qa(this, b, 'endsWith');
                    void 0 === c && (c = d.length);
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var e = b.length; 0 < e && 0 < c; ) if (d[--c] != b[--e]) return !1;
                    return 0 >= e;
                  };
            },
            'es6'
          );
          function ra (a, b, c) {
            a instanceof String && (a = String(a));
            for (var d = a.length, e = 0; e < d; e++) {
              var f = a[e];
              if (b.call(c, f, e, a)) return { wa: e, Ka: f };
            }
            return { wa: -1, Ka: void 0 };
          }
          u(
            'Array.prototype.find',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    return ra(this, b, c).Ka;
                  };
            },
            'es6'
          );
          u(
            'String.prototype.startsWith',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    var d = qa(this, b, 'startsWith'),
                      e = d.length,
                      f = b.length;
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
                    return g >= f;
                  };
            },
            'es6'
          );
          function sa (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
          }
          var ta =
            ea && 'function' == typeof r(Object, 'assign')
              ? r(Object, 'assign')
              : function (a, b) {
                  for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (d) for (var e in d) sa(d, e) && (a[e] = d[e]);
                  }
                  return a;
                };
          u(
            'Object.assign',
            function (a) {
              return a || ta;
            },
            'es6'
          );
          u(
            'Promise',
            function (a) {
              function b (g) {
                this.a = 0;
                this.f = void 0;
                this.c = [];
                this.v = !1;
                var h = this.g();
                try {
                  g(h.resolve, h.reject);
                } catch (k) {
                  h.reject(k);
                }
              }
              function c () {
                this.a = null;
              }
              function d (g) {
                return g instanceof b
                  ? g
                  : new b(function (h) {
                      h(g);
                    });
              }
              if (a) return a;
              c.prototype.c = function (g) {
                if (null == this.a) {
                  this.a = [];
                  var h = this;
                  this.f(function () {
                    h.h();
                  });
                }
                this.a.push(g);
              };
              var e = da.setTimeout;
              c.prototype.f = function (g) {
                e(g, 0);
              };
              c.prototype.h = function () {
                for (; this.a && this.a.length; ) {
                  var g = this.a;
                  this.a = [];
                  for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                      k();
                    } catch (l) {
                      this.g(l);
                    }
                  }
                }
                this.a = null;
              };
              c.prototype.g = function (g) {
                this.f(function () {
                  throw g;
                });
              };
              b.prototype.g = function () {
                function g (l) {
                  return function (m) {
                    k || ((k = !0), l.call(h, m));
                  };
                }
                var h = this,
                  k = !1;
                return { resolve: g(this.K), reject: g(this.h) };
              };
              b.prototype.K = function (g) {
                if (g === this) this.h(new TypeError('A Promise cannot resolve to itself'));
                else if (g instanceof b) this.M(g);
                else {
                  a: switch (typeof g) {
                    case 'object':
                      var h = null != g;
                      break a;
                    case 'function':
                      h = !0;
                      break a;
                    default:
                      h = !1;
                  }
                  h ? this.I(g) : this.j(g);
                }
              };
              b.prototype.I = function (g) {
                var h = void 0;
                try {
                  h = g.then;
                } catch (k) {
                  this.h(k);
                  return;
                }
                'function' == typeof h ? this.N(h, g) : this.j(g);
              };
              b.prototype.h = function (g) {
                this.m(2, g);
              };
              b.prototype.j = function (g) {
                this.m(1, g);
              };
              b.prototype.m = function (g, h) {
                if (0 != this.a)
                  throw Error(
                    'Cannot settle(' +
                      g +
                      ', ' +
                      h +
                      '): Promise already settled in state' +
                      this.a
                  );
                this.a = g;
                this.f = h;
                2 === this.a && this.L();
                this.C();
              };
              b.prototype.L = function () {
                var g = this;
                e(function () {
                  if (g.H()) {
                    var h = da.console;
                    'undefined' !== typeof h && h.error(g.f);
                  }
                }, 1);
              };
              b.prototype.H = function () {
                if (this.v) return !1;
                var g = da.CustomEvent,
                  h = da.Event,
                  k = da.dispatchEvent;
                if ('undefined' === typeof k) return !0;
                'function' === typeof g
                  ? (g = new g('unhandledrejection', { cancelable: !0 }))
                  : 'function' === typeof h
                  ? (g = new h('unhandledrejection', { cancelable: !0 }))
                  : ((g = da.document.createEvent('CustomEvent')),
                    g.initCustomEvent('unhandledrejection', !1, !0, g));
                g.promise = this;
                g.reason = this.f;
                return k(g);
              };
              b.prototype.C = function () {
                if (null != this.c) {
                  for (var g = 0; g < this.c.length; ++g) f.c(this.c[g]);
                  this.c = null;
                }
              };
              var f = new c();
              b.prototype.M = function (g) {
                var h = this.g();
                g.ca(h.resolve, h.reject);
              };
              b.prototype.N = function (g, h) {
                var k = this.g();
                try {
                  g.call(h, k.resolve, k.reject);
                } catch (l) {
                  k.reject(l);
                }
              };
              b.prototype.then = function (g, h) {
                function k (t, v) {
                  return 'function' == typeof t
                    ? function (x) {
                        try {
                          l(t(x));
                        } catch (w) {
                          m(w);
                        }
                      }
                    : v;
                }
                var l,
                  m,
                  p = new b(function (t, v) {
                    l = t;
                    m = v;
                  });
                this.ca(k(g, l), k(h, m));
                return p;
              };
              b.prototype.catch = function (g) {
                return this.then(void 0, g);
              };
              b.prototype.ca = function (g, h) {
                function k () {
                  switch (l.a) {
                    case 1:
                      g(l.f);
                      break;
                    case 2:
                      h(l.f);
                      break;
                    default:
                      throw Error('Unexpected state: ' + l.a);
                  }
                }
                var l = this;
                null == this.c ? f.c(k) : this.c.push(k);
                this.v = !0;
              };
              b.resolve = d;
              b.reject = function (g) {
                return new b(function (h, k) {
                  k(g);
                });
              };
              b.race = function (g) {
                return new b(function (h, k) {
                  for (var l = y(g), m = l.next(); !m.done; m = l.next()) d(m.value).ca(h, k);
                });
              };
              b.all = function (g) {
                var h = y(g),
                  k = h.next();
                return k.done
                  ? d([])
                  : new b(function (l, m) {
                      function p (x) {
                        return function (w) {
                          t[x] = w;
                          v--;
                          0 == v && l(t);
                        };
                      }
                      var t = [],
                        v = 0;
                      do t.push(void 0), v++, d(k.value).ca(p(t.length - 1), m), (k = h.next());
                      while (!k.done);
                    });
              };
              return b;
            },
            'es6'
          );
          u(
            'Array.prototype.findIndex',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    return ra(this, b, c).wa;
                  };
            },
            'es6'
          );
          function ua (a, b) {
            a instanceof String && (a += '');
            var c = 0,
              d = !1,
              e = {
                next: function () {
                  if (!d && c < a.length) {
                    var f = c++;
                    return { value: b(f, a[f]), done: !1 };
                  }
                  d = !0;
                  return { done: !0, value: void 0 };
                },
              };
            e[r(q.Symbol, 'iterator')] = function () {
              return e;
            };
            return e;
          }
          u(
            'Array.prototype.keys',
            function (a) {
              return a
                ? a
                : function () {
                    return ua(this, function (b) {
                      return b;
                    });
                  };
            },
            'es6'
          );
          u(
            'Array.prototype.values',
            function (a) {
              return a
                ? a
                : function () {
                    return ua(this, function (b, c) {
                      return c;
                    });
                  };
            },
            'es8'
          );
          u(
            'WeakMap',
            function (a) {
              function b (g) {
                this.a = (f += Math.random() + 1).toString();
                if (g) {
                  g = y(g);
                  for (var h; !(h = g.next()).done; ) (h = h.value), this.set(h[0], h[1]);
                }
              }
              function c () {}
              function d (g) {
                var h = typeof g;
                return ('object' === h && null !== g) || 'function' === h;
              }
              if (
                (function () {
                  if (!a || !Object.seal) return !1;
                  try {
                    var g = Object.seal({}),
                      h = Object.seal({}),
                      k = new a([
                        [g, 2],
                        [h, 3],
                      ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h);
                  } catch (l) {
                    return !1;
                  }
                })()
              )
                return a;
              var e = '$jscomp_hidden_' + Math.random(),
                f = 0;
              b.prototype.set = function (g, h) {
                if (!d(g)) throw Error('Invalid WeakMap key');
                if (!sa(g, e)) {
                  var k = new c();
                  ba(g, e, { value: k });
                }
                if (!sa(g, e)) throw Error('WeakMap key fail: ' + g);
                g[e][this.a] = h;
                return this;
              };
              b.prototype.get = function (g) {
                return d(g) && sa(g, e) ? g[e][this.a] : void 0;
              };
              b.prototype.has = function (g) {
                return d(g) && sa(g, e) && sa(g[e], this.a);
              };
              b.prototype.delete = function (g) {
                return d(g) && sa(g, e) && sa(g[e], this.a) ? delete g[e][this.a] : !1;
              };
              return b;
            },
            'es6'
          );
          u(
            'Map',
            function (a) {
              function b () {
                var h = {};
                return (h.G = h.next = h.head = h);
              }
              function c (h, k) {
                var l = h.a;
                return ha(function () {
                  if (l) {
                    for (; l.head != h.a; ) l = l.G;
                    for (; l.next != l.head; ) return (l = l.next), { done: !1, value: k(l) };
                    l = null;
                  }
                  return { done: !0, value: void 0 };
                });
              }
              function d (h, k) {
                var l = k && typeof k;
                'object' == l || 'function' == l
                  ? f.has(k)
                    ? (l = f.get(k))
                    : ((l = '' + ++g), f.set(k, l))
                  : (l = 'p_' + k);
                var m = h.c[l];
                if (m && sa(h.c, l))
                  for (h = 0; h < m.length; h++) {
                    var p = m[h];
                    if ((k !== k && p.key !== p.key) || k === p.key)
                      return { id: l, list: m, index: h, l: p };
                  }
                return { id: l, list: m, index: -1, l: void 0 };
              }
              function e (h) {
                this.c = {};
                this.a = b();
                this.size = 0;
                if (h) {
                  h = y(h);
                  for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
                }
              }
              if (
                (function () {
                  if (
                    !a ||
                    'function' != typeof a ||
                    !a.prototype.entries ||
                    'function' != typeof Object.seal
                  )
                    return !1;
                  try {
                    var h = Object.seal({ x: 4 }),
                      k = new a(y([[h, 's']]));
                    if (
                      's' != k.get(h) ||
                      1 != k.size ||
                      k.get({ x: 4 }) ||
                      k.set({ x: 4 }, 't') != k ||
                      2 != k.size
                    )
                      return !1;
                    var l = k.entries(),
                      m = l.next();
                    if (m.done || m.value[0] != h || 's' != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || 't' != m.value[1] || !l.next().done
                      ? !1
                      : !0;
                  } catch (p) {
                    return !1;
                  }
                })()
              )
                return a;
              var f = new q.WeakMap();
              e.prototype.set = function (h, k) {
                h = 0 === h ? 0 : h;
                var l = d(this, h);
                l.list || (l.list = this.c[l.id] = []);
                l.l
                  ? (l.l.value = k)
                  : ((l.l = { next: this.a, G: this.a.G, head: this.a, key: h, value: k }),
                    l.list.push(l.l),
                    (this.a.G.next = l.l),
                    (this.a.G = l.l),
                    this.size++);
                return this;
              };
              e.prototype.delete = function (h) {
                h = d(this, h);
                return h.l && h.list
                  ? (h.list.splice(h.index, 1),
                    h.list.length || delete this.c[h.id],
                    (h.l.G.next = h.l.next),
                    (h.l.next.G = h.l.G),
                    (h.l.head = null),
                    this.size--,
                    !0)
                  : !1;
              };
              e.prototype.clear = function () {
                this.c = {};
                this.a = this.a.G = b();
                this.size = 0;
              };
              e.prototype.has = function (h) {
                return !!d(this, h).l;
              };
              e.prototype.get = function (h) {
                return (h = d(this, h).l) && h.value;
              };
              e.prototype.entries = function () {
                return c(this, function (h) {
                  return [h.key, h.value];
                });
              };
              e.prototype.keys = function () {
                return c(this, function (h) {
                  return h.key;
                });
              };
              e.prototype.values = function () {
                return c(this, function (h) {
                  return h.value;
                });
              };
              e.prototype.forEach = function (h, k) {
                for (var l = this.entries(), m; !(m = l.next()).done; )
                  (m = m.value), h.call(k, m[1], m[0], this);
              };
              e.prototype[r(q.Symbol, 'iterator')] = e.prototype.entries;
              var g = 0;
              return e;
            },
            'es6'
          );
          u(
            'Set',
            function (a) {
              function b (c) {
                this.a = new q.Map();
                if (c) {
                  c = y(c);
                  for (var d; !(d = c.next()).done; ) this.add(d.value);
                }
                this.size = this.a.size;
              }
              if (
                (function () {
                  if (
                    !a ||
                    'function' != typeof a ||
                    !a.prototype.entries ||
                    'function' != typeof Object.seal
                  )
                    return !1;
                  try {
                    var c = Object.seal({ x: 4 }),
                      d = new a(y([c]));
                    if (
                      !d.has(c) ||
                      1 != d.size ||
                      d.add(c) != d ||
                      1 != d.size ||
                      d.add({ x: 4 }) != d ||
                      2 != d.size
                    )
                      return !1;
                    var e = d.entries(),
                      f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done ||
                      f.value[0] == c ||
                      4 != f.value[0].x ||
                      f.value[1] != f.value[0]
                      ? !1
                      : e.next().done;
                  } catch (g) {
                    return !1;
                  }
                })()
              )
                return a;
              b.prototype.add = function (c) {
                c = 0 === c ? 0 : c;
                this.a.set(c, c);
                this.size = this.a.size;
                return this;
              };
              b.prototype.delete = function (c) {
                c = this.a.delete(c);
                this.size = this.a.size;
                return c;
              };
              b.prototype.clear = function () {
                this.a.clear();
                this.size = 0;
              };
              b.prototype.has = function (c) {
                return this.a.has(c);
              };
              b.prototype.entries = function () {
                return this.a.entries();
              };
              b.prototype.values = function () {
                return r(this.a, 'values').call(this.a);
              };
              b.prototype.keys = r(b.prototype, 'values');
              b.prototype[r(q.Symbol, 'iterator')] = r(b.prototype, 'values');
              b.prototype.forEach = function (c, d) {
                var e = this;
                this.a.forEach(function (f) {
                  return c.call(d, f, f, e);
                });
              };
              return b;
            },
            'es6'
          );
          var A = this || self;
          function va (a) {
            if (a && a != A) return xa(a.document);
            null === ya && (ya = xa(A.document));
            return ya;
          }
          var za = /^[\w+/_-]+[=]{0,2}$/,
            ya = null;
          function xa (a) {
            return (a = a.querySelector && a.querySelector('script[nonce]')) &&
              (a = a.nonce || a.getAttribute('nonce')) &&
              za.test(a)
              ? a
              : '';
          }
          function Aa (a) {
            const $___old_ca8db2029b5332fa = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_ca8db2029b5332fa)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_d805ada25b0ee6d7.localStorage
                ));
              return function () {
                a = a.split('.');
                for (var b = A, c = 0; c < a.length; c++)
                  if (((b = b[a[c]]), null == b)) return null;
                return b;
              }.apply(this, arguments);
            } finally {
              if ($___old_ca8db2029b5332fa)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_ca8db2029b5332fa));
            }
          }
          function Ba () {}
          function Ca (a) {
            a.ma = void 0;
            a.i = function () {
              return a.ma ? a.ma : (a.ma = new a());
            };
          }
          function Da (a) {
            var b = typeof a;
            return ('object' == b && null != a) || 'function' == b;
          }
          function Ea (a) {
            return (Object.prototype.hasOwnProperty.call(a, Fa) && a[Fa]) || (a[Fa] = ++Ga);
          }
          var Fa = 'closure_uid_' + ((1000000000 * Math.random()) >>> 0),
            Ga = 0;
          function Ha (a, b, c) {
            return a.call.apply(a.bind, arguments);
          }
          function Ia (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
              var d = Array.prototype.slice.call(arguments, 2);
              return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e);
              };
            }
            return function () {
              return a.apply(b, arguments);
            };
          }
          function Ja (a, b, c) {
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf('native code')
              ? (Ja = Ha)
              : (Ja = Ia);
            return Ja.apply(null, arguments);
          }
          function Ka (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
              var d = c.slice();
              d.push.apply(d, arguments);
              return a.apply(this, d);
            };
          }
          function B (a, b) {
            function c () {}
            c.prototype = b.prototype;
            a.cb = b.prototype;
            a.prototype = new c();
            a.prototype.constructor = a;
            a.fb = function (d, e, f) {
              for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
              return b.prototype[e].apply(d, g);
            };
          }
          function La (a) {
            return a;
          }
          var Ma = new Date().getTime();
          function Na (a, b) {
            for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++)
              e in d && b.call(void 0, d[e], e, a);
          }
          function Oa (a, b) {
            for (
              var c = a.length, d = [], e = 0, f = 'string' === typeof a ? a.split('') : a, g = 0;
              g < c;
              g++
            )
              if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h);
              }
            return d;
          }
          function Pa (a, b) {
            for (
              var c = a.length, d = Array(c), e = 'string' === typeof a ? a.split('') : a, f = 0;
              f < c;
              f++
            )
              f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d;
          }
          function Qa (a, b) {
            for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++)
              if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1;
          }
          function Ra (a, b) {
            a: {
              for (
                var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0;
                e < c;
                e++
              )
                if (e in d && b.call(void 0, d[e], e, a)) {
                  b = e;
                  break a;
                }
              b = -1;
            }
            return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
          }
          function Sa (a, b) {
            a: {
              for (var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                  b = d;
                  break a;
                }
              b = -1;
            }
            return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
          }
          function Ta (a, b) {
            a: if ('string' === typeof a)
              a = 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
              for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) {
                  a = c;
                  break a;
                }
              a = -1;
            }
            return 0 <= a;
          }
          function Ua (a) {
            return function () {
              return !a.apply(this, arguments);
            };
          }
          function Va (a) {
            var b = !1,
              c;
            return function () {
              b || ((c = a()), (b = !0));
              return c;
            };
          }
          function Wa (a) {
            var b = a;
            return function () {
              if (b) {
                var c = b;
                b = null;
                c();
              }
            };
          }
          function Xa (a, b) {
            var c = {},
              d;
            for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c;
          }
          function Ya (a, b) {
            for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
            return !1;
          }
          function Za (a, b) {
            return null !== a && b in a;
          }
          function $a (a) {
            var b = {},
              c;
            for (c in a) b[c] = a[c];
            return b;
          }
          var ab;
          function bb () {
            if (void 0 === ab) {
              var a = null,
                b = A.trustedTypes;
              if (b && b.createPolicy) {
                try {
                  a = b.createPolicy('goog#html', {
                    createHTML: La,
                    createScript: La,
                    createScriptURL: La,
                  });
                } catch (c) {
                  A.console && A.console.error(c.message);
                }
                ab = a;
              } else ab = a;
            }
            return ab;
          }
          function cb (a, b) {
            this.c = (a === db && b) || '';
            this.a = eb;
          }
          function fb (a) {
            return a instanceof cb && a.constructor === cb && a.a === eb
              ? a.c
              : 'type_error:Const';
          }
          var eb = {},
            db = {};
          var gb = {};
          function hb (a, b) {
            this.a = b === gb ? a : '';
          }
          function ib (a, b) {
            for (var c = [], d = 1; d < arguments.length; d++)
              c.push(JSON.stringify(arguments[d]).replace(/</g, '\\x3c'));
            c = '(' + fb(a) + ')(' + c.join(', ') + ');';
            c = (d = bb()) ? d.createScript(c) : c;
            return new hb(c, gb);
          }
          function jb (a) {
            return a instanceof hb && a.constructor === hb ? a.a : 'type_error:SafeScript';
          }
          function kb (a, b) {
            this.a = b === lb ? a : '';
          }
          function mb (a, b, c) {
            a = nb.exec(ob(a).toString());
            var d = a[3] || '';
            return pb(a[1] + qb('?', a[2] || '', b) + qb('#', d, c));
          }
          function ob (a) {
            return a instanceof kb && a.constructor === kb ? a.a : 'type_error:TrustedResourceUrl';
          }
          function rb () {
            var a = {},
              b = fb(new cb(db, 'https://pagead2.googlesyndication.com/pagead/gen_204'));
            if (!sb.test(b)) throw Error('Invalid TrustedResourceUrl format: ' + b);
            var c = b.replace(tb, function (d, e) {
              if (!Object.prototype.hasOwnProperty.call(a, e))
                throw Error(
                  'Found marker, "' +
                    e +
                    '", in format string, "' +
                    b +
                    '", but no valid label mapping found in args: ' +
                    JSON.stringify(a)
                );
              d = a[e];
              return d instanceof cb ? fb(d) : encodeURIComponent(String(d));
            });
            return pb(c);
          }
          var tb = /%{(\w+)}/g,
            sb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            nb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
            lb = {};
          function pb (a) {
            var b = bb();
            a = b ? b.createScriptURL(a) : a;
            return new kb(a, lb);
          }
          function qb (a, b, c) {
            if (null == c) return b;
            if ('string' === typeof c) return c ? a + encodeURIComponent(c) : '';
            for (var d in c)
              if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                  var g = e[f];
                  null != g &&
                    (b || (b = a),
                    (b +=
                      (b.length > a.length ? '&' : '') +
                      encodeURIComponent(d) +
                      '=' +
                      encodeURIComponent(String(g))));
                }
              }
            return b;
          }
          function ub (a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
          }
          var vb = /&/g,
            wb = /</g,
            xb = />/g,
            yb = /"/g,
            zb = /'/g,
            Ab = /\x00/g;
          function Bb (a, b) {
            var c = 0;
            a = ub(String(a)).split('.');
            b = ub(String(b)).split('.');
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
              var f = a[e] || '',
                g = b[e] || '';
              do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
                g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
                if (0 == f[0].length && 0 == g[0].length) break;
                c =
                  Cb(
                    0 == f[1].length ? 0 : parseInt(f[1], 10),
                    0 == g[1].length ? 0 : parseInt(g[1], 10)
                  ) ||
                  Cb(0 == f[2].length, 0 == g[2].length) ||
                  Cb(f[2], g[2]);
                f = f[3];
                g = g[3];
              } while (0 == c);
            }
            return c;
          }
          function Cb (a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
          }
          var Db;
          a: {
            var Eb = A.navigator;
            if (Eb) {
              var Fb = Eb.userAgent;
              if (Fb) {
                Db = Fb;
                break a;
              }
            }
            Db = '';
          }
          function C (a) {
            return -1 != Db.indexOf(a);
          }
          function Gb (a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; (d = b.exec(a)); )
              c.push([d[1], d[2], d[3] || void 0]);
            return c;
          }
          function Hb () {
            return (C('Chrome') || C('CriOS')) && !C('Edge');
          }
          function Ib () {
            function a (e) {
              e = Ra(e, d);
              return c[e] || '';
            }
            var b = Db;
            if (C('Trident') || C('MSIE')) return Jb(b);
            b = Gb(b);
            var c = {};
            Na(b, function (e) {
              c[e[0]] = e[1];
            });
            var d = Ka(Za, c);
            return C('Opera')
              ? a(['Version', 'Opera'])
              : C('Edge')
              ? a(['Edge'])
              : C('Edg/')
              ? a(['Edg'])
              : Hb()
              ? a(['Chrome', 'CriOS', 'HeadlessChrome'])
              : ((b = b[2]) && b[1]) || '';
          }
          function Jb (a) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) return b[1];
            b = '';
            var c = /MSIE +([\d\.]+)/.exec(a);
            if (c && c[1])
              if (((a = /Trident\/(\d.\d)/.exec(a)), '7.0' == c[1]))
                if (a && a[1])
                  switch (a[1]) {
                    case '4.0':
                      b = '8.0';
                      break;
                    case '5.0':
                      b = '9.0';
                      break;
                    case '6.0':
                      b = '10.0';
                      break;
                    case '7.0':
                      b = '11.0';
                  }
                else b = '7.0';
              else b = c[1];
            return b;
          }
          function Kb (a, b, c) {
            this.a = c === Lb ? a : '';
          }
          function Mb (a) {
            return a instanceof Kb && a.constructor === Kb ? a.a : 'type_error:SafeHtml';
          }
          var Lb = {},
            Nb = new Kb((A.trustedTypes && A.trustedTypes.emptyHTML) || '', 0, Lb);
          var Ob = Va(function () {
            var a = document.createElement('div'),
              b = document.createElement('div');
            b.appendChild(document.createElement('div'));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = Mb(Nb);
            return !b.parentElement;
          });
          function Pb (a, b) {
            if (Ob()) for (; a.lastChild; ) a.removeChild(a.lastChild);
            a.innerHTML = Mb(b);
          }
          var Qb = {
              '\0': '\\0',
              '\b': '\\b',
              '\f': '\\f',
              '\n': '\\n',
              '\r': '\\r',
              '\t': '\\t',
              '\x0B': '\\x0B',
              '"': '\\"',
              '\\': '\\\\',
              '<': '\\u003C',
            },
            Rb = { "'": "\\'" };
          function Sb (a) {
            return String(a).replace(/\-([a-z])/g, function (b, c) {
              return c.toUpperCase();
            });
          }
          function Tb () {
            return C('iPhone') && !C('iPod') && !C('iPad');
          }
          function Ub (a) {
            Ub[' '](a);
            return a;
          }
          Ub[' '] = Ba;
          var Vb = Tb() || C('iPod'),
            Wb =
              C('Safari') &&
              !(
                Hb() ||
                C('Coast') ||
                C('Opera') ||
                C('Edge') ||
                C('Edg/') ||
                C('OPR') ||
                C('Firefox') ||
                C('FxiOS') ||
                C('Silk') ||
                C('Android')
              ) &&
              !(Tb() || C('iPad') || C('iPod'));
          var Xb = {},
            Yb = null;
          function D () {}
          var Zb = 'function' == typeof Uint8Array;
          function E (a, b, c, d) {
            a.c = null;
            b || (b = []);
            a.m = void 0;
            a.g = -1;
            a.a = b;
            a: {
              if ((b = a.a.length)) {
                --b;
                var e = a.a[b];
                if (
                  !(
                    null === e ||
                    'object' != typeof e ||
                    Array.isArray(e) ||
                    (Zb && e instanceof Uint8Array)
                  )
                ) {
                  a.h = b - a.g;
                  a.f = e;
                  break a;
                }
              }
              a.h = Number.MAX_VALUE;
            }
            a.v = {};
            if (c)
              for (b = 0; b < c.length; b++)
                (e = c[b]),
                  e < a.h
                    ? ((e += a.g), (a.a[e] = a.a[e] || $b))
                    : (ac(a), (a.f[e] = a.f[e] || $b));
            if (d && d.length) for (b = 0; b < d.length; b++) bc(a, d[b]);
          }
          var $b = [];
          function ac (a) {
            var b = a.h + a.g;
            a.a[b] || (a.f = a.a[b] = {});
          }
          function G (a, b) {
            if (b < a.h) {
              b += a.g;
              var c = a.a[b];
              return c !== $b ? c : (a.a[b] = []);
            }
            if (a.f) return (c = a.f[b]), c === $b ? (a.f[b] = []) : c;
          }
          function cc (a, b) {
            a = G(a, b);
            return null == a ? a : +a;
          }
          function dc (a, b) {
            a = G(a, b);
            return null == a ? a : !!a;
          }
          function H (a, b, c) {
            a = G(a, b);
            return null == a ? c : a;
          }
          function ec (a, b) {
            a = dc(a, b);
            return null == a ? !1 : a;
          }
          function fc (a, b) {
            a = cc(a, b);
            return null == a ? 0 : a;
          }
          function gc (a, b, c) {
            b < a.h ? (a.a[b + a.g] = c) : (ac(a), (a.f[b] = c));
            return a;
          }
          function hc (a, b, c, d) {
            c !== d ? gc(a, b, c) : b < a.h ? (a.a[b + a.g] = null) : (ac(a), delete a.f[b]);
            return a;
          }
          function bc (a, b) {
            for (var c, d, e = 0; e < b.length; e++) {
              var f = b[e],
                g = G(a, f);
              null != g && ((c = f), (d = g), gc(a, f, void 0));
            }
            return c ? (gc(a, c, d), c) : 0;
          }
          function I (a, b, c) {
            a.c || (a.c = {});
            if (!a.c[c]) {
              var d = G(a, c);
              d && (a.c[c] = new b(d));
            }
            return a.c[c];
          }
          function J (a, b, c) {
            a.c || (a.c = {});
            if (!a.c[c]) {
              for (var d = G(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
              a.c[c] = e;
            }
            b = a.c[c];
            b == $b && (b = a.c[c] = []);
            return b;
          }
          D.prototype.j = Zb
            ? function () {
                var a = Uint8Array.prototype.toJSON;
                Uint8Array.prototype.toJSON = function () {
                  var b;
                  void 0 === b && (b = 0);
                  if (!Yb) {
                    Yb = {};
                    for (
                      var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                          ''
                        ),
                        d = ['+/=', '+/', '-_=', '-_.', '-_'],
                        e = 0;
                      5 > e;
                      e++
                    ) {
                      var f = c.concat(d[e].split(''));
                      Xb[e] = f;
                      for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === Yb[h] && (Yb[h] = g);
                      }
                    }
                  }
                  b = Xb[b];
                  c = [];
                  for (d = 0; d < this.length; d += 3) {
                    var k = this[d],
                      l = (e = d + 1 < this.length) ? this[d + 1] : 0;
                    h = (f = d + 2 < this.length) ? this[d + 2] : 0;
                    g = k >> 2;
                    k = ((k & 3) << 4) | (l >> 4);
                    l = ((l & 15) << 2) | (h >> 6);
                    h &= 63;
                    f || ((h = 64), e || (l = 64));
                    c.push(b[g], b[k], b[l] || '', b[h] || '');
                  }
                  return c.join('');
                };
                try {
                  return JSON.stringify(this.a && this.a, ic);
                } finally {
                  Uint8Array.prototype.toJSON = a;
                }
              }
            : function () {
                return JSON.stringify(this.a && this.a, ic);
              };
          function ic (a, b) {
            return 'number' !== typeof b || (!isNaN(b) && Infinity !== b && -Infinity !== b)
              ? b
              : String(b);
          }
          function kc (a) {
            E(this, a, lc, null);
          }
          B(kc, D);
          function mc (a) {
            E(this, a, null, null);
          }
          B(mc, D);
          var lc = [2, 3];
          function nc (a, b) {
            var c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || '';
            this.id = b.id || 'jserror';
            this.meta = c;
          }
          function oc (a) {
            return !!(a.error && a.meta && a.id);
          }
          function pc (a, b, c) {
            a.addEventListener && a.addEventListener(b, c, !1);
          }
          function qc (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1);
          }
          function rc (a, b) {
            b = String(b);
            'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
            return a.createElement(b);
          }
          function sc (a) {
            this.a = a || A.document || document;
          }
          sc.prototype.contains = function (a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ('undefined' != typeof a.compareDocumentPosition)
              return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b; ) b = b.parentNode;
            return b == a;
          };
          function tc () {
            return !uc() && (C('iPod') || C('iPhone') || C('Android') || C('IEMobile'));
          }
          function uc () {
            return C('iPad') || (C('Android') && !C('Mobile')) || C('Silk');
          }
          var vc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
          function wc (a) {
            try {
              var b;
              if ((b = !!a && null != a.location.href))
                a: {
                  try {
                    Ub(a.foo);
                    b = !0;
                    break a;
                  } catch (c) {}
                  b = !1;
                }
              return b;
            } catch (c) {
              return !1;
            }
          }
          function xc (a) {
            for (var b = A, c = 0; b && 40 > c++ && (!wc(b) || !a(b)); ) b = yc(b);
          }
          function zc () {
            var a = A;
            xc(function (b) {
              a = b;
              return !1;
            });
            return a;
          }
          function yc (a) {
            try {
              var b = a.parent;
              if (b && b != a) return b;
            } catch (c) {}
            return null;
          }
          function Ac (a, b, c) {
            var d = a.createElement('script');
            (void 0 === c ? 0 : c) && d.setAttribute('crossorigin', 'anonymous');
            d.src = ob(b);
            (b = va(d.ownerDocument && d.ownerDocument.defaultView)) && d.setAttribute('nonce', b);
            return (a = a.getElementsByTagName('script')[0]) && a.parentNode
              ? (a.parentNode.insertBefore(d, a), d)
              : null;
          }
          function Bc (a, b) {
            return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
          }
          function Cc (a, b) {
            if (!Dc() && !Ec()) {
              var c = Math.random();
              if (c < b) return (c = Fc(A)), a[Math.floor(c * a.length)];
            }
            return null;
          }
          function Fc (a) {
            if (!a.crypto) return Math.random();
            try {
              var b = new Uint32Array(1);
              a.crypto.getRandomValues(b);
              return b[0] / 65536 / 65536;
            } catch (c) {
              return Math.random();
            }
          }
          function Gc (a, b) {
            if (a)
              for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a);
          }
          function Hc (a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++)
              c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
            return 0 < c ? c : 4294967296 + c;
          }
          var Ec = Va(function () {
            return (
              Qa(
                [
                  'Google Web Preview',
                  'Mediapartners-Google',
                  'Google-Read-Aloud',
                  'Google-Adwords',
                ],
                Ic
              ) || 0.0001 > Math.random()
            );
          });
          function Jc (a, b) {
            var c = -1;
            try {
              a && (c = parseInt(a.getItem(b), 10));
            } catch (d) {
              return null;
            }
            return 0 <= c && 1000 > c ? c : null;
          }
          function Kc (a, b, c) {
            a = Ec() ? null : Math.floor(1000 * Fc(a));
            var d;
            if ((d = null != a && b))
              a: {
                var e = String(a);
                try {
                  if (b) {
                    b.setItem(c, e);
                    d = e;
                    break a;
                  }
                } catch (f) {}
                d = null;
              }
            return d ? a : null;
          }
          var Dc = Va(function () {
            return Ic('MSIE');
          });
          function Ic (a) {
            return -1 != Db.indexOf(a);
          }
          var Lc = /^([0-9.]+)px$/,
            Mc = /^(-?[0-9.]{1,30})$/;
          function Nc (a) {
            return Mc.test(a) && ((a = Number(a)), !isNaN(a)) ? a : null;
          }
          function Oc (a, b) {
            return b ? !/^false$/.test(a) : /^true$/.test(a);
          }
          function K (a) {
            return (a = Lc.exec(a)) ? +a[1] : null;
          }
          function Pc (a, b) {
            for (var c = 0; 50 > c; ++c) {
              try {
                var d = !(!a.frames || !a.frames[b]);
              } catch (e) {
                d = !1;
              }
              if (d) return a;
              if (!(a = yc(a))) break;
            }
            return null;
          }
          var Qc = Va(function () {
            return tc() ? 2 : uc() ? 1 : 0;
          });
          function Rc (a) {
            var b = { display: 'none' };
            a.style.setProperty
              ? Gc(b, function (c, d) {
                  a.style.setProperty(d, c, 'important');
                })
              : (a.style.cssText = Sc(
                  Tc(
                    Uc(a.style.cssText),
                    Vc(b, function (c) {
                      return c + ' !important';
                    })
                  )
                ));
          }
          var Tc =
            r(Object, 'assign') ||
            function (a, b) {
              for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                  for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
              }
              return a;
            };
          function Vc (a, b) {
            var c = {},
              d;
            for (d in a)
              Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
            return c;
          }
          function Sc (a) {
            var b = [];
            Gc(a, function (c, d) {
              null != c && '' !== c && b.push(d + ':' + c);
            });
            return b.length ? b.join(';') + ';' : '';
          }
          function Uc (a) {
            var b = {};
            if (a) {
              var c = /\s*:\s*/;
              Na((a || '').split(/\s*;\s*/), function (d) {
                if (d) {
                  var e = d.split(c);
                  d = e[0];
                  e = e[1];
                  d && e && (b[d.toLowerCase()] = e);
                }
              });
            }
            return b;
          }
          var Wc = [];
          function Xc () {
            var a = Wc;
            Wc = [];
            a = y(a);
            for (var b = a.next(); !b.done; b = a.next()) {
              b = b.value;
              try {
                b();
              } catch (c) {}
            }
          }
          function Yc (a) {
            var b = Zc;
            'complete' === b.readyState || 'interactive' === b.readyState
              ? (Wc.push(a),
                1 == Wc.length &&
                  (q.Promise
                    ? q.Promise.resolve().then(Xc)
                    : window.setImmediate
                    ? setImmediate(Xc)
                    : setTimeout(Xc, 0)))
              : b.addEventListener('DOMContentLoaded', a);
          }
          function $c (a, b, c) {
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement('img');
            if (c) {
              var e = function (f) {
                c && c(f);
                qc(d, 'load', e);
                qc(d, 'error', e);
              };
              pc(d, 'load', e);
              pc(d, 'error', e);
            }
            d.src = b;
            a.google_image_requests.push(d);
          }
          function cd (a, b) {
            var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=' + b;
            Gc(a, function (d, e) {
              d && (c += '&' + e + '=' + encodeURIComponent(d));
            });
            dd(c);
          }
          function dd (a) {
            var b = window;
            b.fetch
              ? b.fetch(a, {
                  keepalive: !0,
                  credentials: 'include',
                  redirect: 'follow',
                  method: 'get',
                  mode: 'no-cors',
                })
              : $c(b, a, null);
          }
          var Zc = document,
            L = window;
          var ed = {
            '120x90': !0,
            '160x90': !0,
            '180x90': !0,
            '200x90': !0,
            '468x15': !0,
            '728x15': !0,
          };
          function fd (a, b) {
            if (15 == b) {
              if (728 <= a) return 728;
              if (468 <= a) return 468;
            } else if (90 == b) {
              if (200 <= a) return 200;
              if (180 <= a) return 180;
              if (160 <= a) return 160;
              if (120 <= a) return 120;
            }
            return null;
          }
          function gd (a, b) {
            a = parseInt(a, 10);
            return isNaN(a) ? b : a;
          }
          function hd () {
            return 'r20201112';
          }
          var id = Oc('false', !1),
            jd = Oc('false', !1),
            kd = Oc('false', !0);
          function M () {
            this.h = this.h;
            this.v = this.v;
          }
          M.prototype.h = !1;
          M.prototype.a = function () {
            if (this.v) for (; this.v.length; ) this.v.shift()();
          };
          function ld (a) {
            a = void 0 === a ? A : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b)
              try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
              } catch (c) {}
            try {
              if (b && b.pageViewId && b.canonicalUrl) return b;
            } catch (c) {}
            return null;
          }
          function md (a) {
            return (a = a || ld()) ? (wc(a.master) ? a.master : null) : null;
          }
          var nd = {};
          function od (a) {
            if (a !== nd) throw Error('Bad secret');
          }
          var pd = {
            Qa: function () {
              if ('undefined' !== typeof window) return window.trustedTypes;
            },
          };
          function qd () {
            var a;
            return null !== (a = pd.Qa()) && void 0 !== a ? a : null;
          }
          var rd;
          function sd () {
            var a, b;
            if (void 0 === rd)
              try {
                rd =
                  null !==
                    (b =
                      null === (a = qd()) || void 0 === a
                        ? void 0
                        : a.createPolicy('google#safe', {
                            createHTML: function (c) {
                              return c;
                            },
                            createScript: function (c) {
                              return c;
                            },
                            createScriptURL: function (c) {
                              return c;
                            },
                          })) && void 0 !== b
                    ? b
                    : null;
              } catch (c) {
                (rd = null), console.log(c);
              }
            return rd;
          }
          function td () {}
          function ud (a, b) {
            od(b);
            this.a = a;
          }
          z(ud, td);
          ud.prototype.toString = function () {
            return this.a;
          };
          function vd () {}
          function wd (a, b) {
            od(b);
            this.a = a;
          }
          z(wd, vd);
          wd.prototype.toString = function () {
            return this.a.toString();
          };
          function xd (a) {
            var b, c;
            a =
              null !== (c = null === (b = sd()) || void 0 === b ? void 0 : b.createScriptURL(a)) &&
              void 0 !== c
                ? c
                : a;
            return new wd(a, nd);
          }
          function yd (a) {
            if (!(a instanceof wd)) throw Error('wrong type');
            return a.a;
          }
          new ud('about:blank', nd);
          new ud('about:invalid#zTSz', nd);
          function zd (a) {
            Ad();
            var b = bb();
            a = b ? b.createHTML(a) : a;
            return new Kb(a, null, Lb);
          }
          function Bd (a) {
            Ad();
            return pb(a);
          }
          var Ad = Ba;
          function Cd (a, b) {
            if (a)
              for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a);
          }
          function Dd (a) {
            return !(!a || !a.call) && 'function' === typeof a;
          }
          function Ed (a) {
            var b = void 0 === b ? 1 : b;
            a = md(ld(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + b;
          }
          function Fd (a) {
            a = a.google_unique_id;
            return 'number' === typeof a ? a : 0;
          }
          function Gd (a) {
            a = md(ld(a)) || a;
            a = a.google_unique_id;
            return 'number' === typeof a ? a : 0;
          }
          var Hd = !!window.google_async_iframe_id,
            Id = (Hd && window.parent) || window;
          function Jd () {
            if (Hd && !wc(Id)) {
              var a = '.' + Zc.domain;
              try {
                for (; 2 < a.split('.').length && !wc(Id); )
                  (Zc.domain = a = a.substr(a.indexOf('.') + 1)), (Id = window.parent);
              } catch (b) {}
              wc(Id) || (Id = window);
            }
            return Id;
          }
          var Kd = /(^| )adsbygoogle($| )/;
          function Ld (a) {
            return (id && a.google_top_window) || a.top;
          }
          function Md (a) {
            a = Ld(a);
            return wc(a) ? a : null;
          }
          var Nd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
          function Od (a, b) {
            this.a = a;
            this.c = b;
          }
          function Pd (a, b, c) {
            this.url = a;
            this.a = b;
            this.xa = !!c;
            this.depth = null;
          }
          function Qd () {
            this.f = '&';
            this.c = {};
            this.g = 0;
            this.a = [];
          }
          function Rd (a, b) {
            var c = {};
            c[a] = b;
            return [c];
          }
          function Sd (a, b, c, d, e) {
            var f = [];
            Gc(a, function (g, h) {
              (g = Td(g, b, c, d, e)) && f.push(h + '=' + g);
            });
            return f.join(b);
          }
          function Td (a, b, c, d, e) {
            if (null == a) return '';
            b = b || '&';
            c = c || ',$';
            'string' == typeof c && (c = c.split(''));
            if (a instanceof Array) {
              if (((d = d || 0), d < c.length)) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Td(a[g], b, c, d + 1, e));
                return f.join(c[d]);
              }
            } else if ('object' == typeof a)
              return (e = e || 0), 2 > e ? encodeURIComponent(Sd(a, b, c, d, e + 1)) : '...';
            return encodeURIComponent(String(a));
          }
          function Ud (a, b, c) {
            b = b + '//pagead2.googlesyndication.com' + c;
            var d = Vd(a) - c.length;
            if (0 > d) return '';
            a.a.sort(function (m, p) {
              return m - p;
            });
            c = null;
            for (var e = '', f = 0; f < a.a.length; f++)
              for (var g = a.a[f], h = a.c[g], k = 0; k < h.length; k++) {
                if (!d) {
                  c = null == c ? g : c;
                  break;
                }
                var l = Sd(h[k], a.f, ',$');
                if (l) {
                  l = e + l;
                  if (d >= l.length) {
                    d -= l.length;
                    b += l;
                    e = a.f;
                    break;
                  }
                  c = null == c ? g : c;
                }
              }
            a = '';
            null != c && (a = e + 'trn=' + c);
            return b + a;
          }
          function Vd (a) {
            var b = 1,
              c;
            for (c in a.c) b = c.length > b ? c.length : b;
            return 3997 - b - a.f.length - 1;
          }
          function Wd (a, b, c, d, e, f) {
            if ((d ? a.a : Math.random()) < (e || 0.01))
              try {
                if (c instanceof Qd) var g = c;
                else
                  (g = new Qd()),
                    Gc(c, function (k, l) {
                      var m = g,
                        p = m.g++;
                      k = Rd(l, k);
                      m.a.push(p);
                      m.c[p] = k;
                    });
                var h = Ud(g, a.c, '/pagead/gen_204?id=' + b + '&');
                h &&
                  ('undefined' !== typeof f ? $c(A, h, void 0 === f ? null : f) : $c(A, h, null));
              } catch (k) {}
          }
          var Xd = null;
          function Yd () {
            if (null === Xd) {
              Xd = '';
              try {
                var a = '';
                try {
                  a = A.top.location.hash;
                } catch (c) {
                  a = A.location.hash;
                }
                if (a) {
                  var b = a.match(/\bdeid=([\d,]+)/);
                  Xd = b ? b[1] : '';
                }
              } catch (c) {}
            }
            return Xd;
          }
          function Zd () {
            var a = A.performance;
            return a && a.now && a.timing
              ? Math.floor(a.now() + a.timing.navigationStart)
              : Date.now();
          }
          function $d () {
            const $___old_b21b14004af5ab47 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_b21b14004af5ab47)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_aa247db1c85ca96e.performance
                ));
              return function () {
                var a = void 0 === a ? A : a;
                return (a = a.performance) && a.now ? a.now() : null;
              }.apply(this, arguments);
            } finally {
              if ($___old_b21b14004af5ab47)
                ({}.constructor.defineProperty(window, 'performance', $___old_b21b14004af5ab47));
            }
          }
          function ae (a, b) {
            var c = $d() || Zd();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0;
          }
          var be = A.performance,
            ce = !!(be && be.mark && be.measure && be.clearMarks),
            de = Va(function () {
              var a;
              if ((a = ce)) (a = Yd()), (a = !!a.indexOf && 0 <= a.indexOf('1337'));
              return a;
            });
          function ee () {
            var a = fe;
            this.events = [];
            this.c = a || A;
            var b = null;
            a &&
              ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
              (this.events = a.google_js_reporting_queue),
              (b = a.google_measure_js_timing));
            this.a = de() || (null != b ? b : 1 > Math.random());
          }
          function ge (a) {
            a &&
              be &&
              de() &&
              (be.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'),
              be.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
          }
          ee.prototype.start = function (a, b) {
            if (!this.a) return null;
            a = new ae(a, b);
            b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
            be && de() && be.mark(b);
            return a;
          };
          function he () {
            var a = ie;
            this.j = je;
            this.f = !0;
            this.c = null;
            this.h = this.J;
            this.a = void 0 === a ? null : a;
            this.g = !1;
          }
          n = he.prototype;
          n.Fa = function (a) {
            this.h = a;
          };
          n.na = function (a) {
            this.c = a;
          };
          n.Ga = function (a) {
            this.f = a;
          };
          n.Ha = function (a) {
            this.g = a;
          };
          n.ga = function (a, b, c) {
            try {
              if (this.a && this.a.a) {
                var d = this.a.start(a.toString(), 3);
                var e = b();
                var f = this.a;
                b = d;
                if (f.a && 'number' === typeof b.value) {
                  b.duration = ($d() || Zd()) - b.value;
                  var g = 'goog_' + b.label + '_' + b.uniqueId + '_end';
                  be && de() && be.mark(g);
                  !f.a || 2048 < f.events.length || f.events.push(b);
                }
              } else e = b();
            } catch (h) {
              f = this.f;
              try {
                ge(d), (f = this.h(a, new nc(h, { message: ke(h) }), void 0, c));
              } catch (k) {
                this.J(217, k);
              }
              if (!f) throw h;
            }
            return e;
          };
          n.Aa = function (a, b, c, d) {
            var e = this;
            return function (f) {
              for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
              return e.ga(
                a,
                function () {
                  return b.apply(c, g);
                },
                d
              );
            };
          };
          n.J = function (a, b, c, d, e) {
            e = e || 'jserror';
            try {
              var f = new Qd();
              f.a.push(1);
              f.c[1] = Rd('context', a);
              oc(b) || (b = new nc(b, { message: ke(b) }));
              if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.a.push(2);
                f.c[2] = Rd('msg', g);
              }
              var h = b.meta || {};
              if (this.c)
                try {
                  this.c(h);
                } catch (jc) {}
              if (d)
                try {
                  d(h);
                } catch (jc) {}
              b = [h];
              f.a.push(3);
              f.c[3] = b;
              d = A;
              b = [];
              g = null;
              do {
                var k = d;
                if (wc(k)) {
                  var l = k.location.href;
                  g = (k.document && k.document.referrer) || null;
                } else (l = g), (g = null);
                b.push(new Pd(l || '', k));
                try {
                  d = k.parent;
                } catch (jc) {
                  d = null;
                }
              } while (d && k != d);
              l = 0;
              for (var m = b.length - 1; l <= m; ++l) b[l].depth = m - l;
              k = A;
              if (
                k.location &&
                k.location.ancestorOrigins &&
                k.location.ancestorOrigins.length == b.length - 1
              )
                for (m = 1; m < b.length; ++m) {
                  var p = b[m];
                  p.url || ((p.url = k.location.ancestorOrigins[m - 1] || ''), (p.xa = !0));
                }
              var t = new Pd(A.location.href, A, !1);
              k = null;
              var v = b.length - 1;
              for (p = v; 0 <= p; --p) {
                var x = b[p];
                !k && Nd.test(x.url) && (k = x);
                if (x.url && !x.xa) {
                  t = x;
                  break;
                }
              }
              x = null;
              var w = b.length && b[v].url;
              0 != t.depth && w && (x = b[v]);
              var F = new Od(t, x);
              if (F.c) {
                var wa = F.c.url || '';
                f.a.push(4);
                f.c[4] = Rd('top', wa);
              }
              var ad = { url: F.a.url || '' };
              if (F.a.url) {
                var bd = F.a.url.match(vc),
                  lf = bd[1],
                  mf = bd[3],
                  nf = bd[4];
                t = '';
                lf && (t += lf + ':');
                mf && ((t += '//'), (t += mf), nf && (t += ':' + nf));
                var of = t;
              } else of = '';
              ad = [ad, { url: of }];
              f.a.push(5);
              f.c[5] = ad;
              Wd(this.j, e, f, this.g, c);
            } catch (jc) {
              try {
                Wd(
                  this.j,
                  e,
                  { context: 'ecmserr', rctx: a, msg: ke(jc), url: F && F.a.url },
                  this.g,
                  c
                );
              } catch (jm) {}
            }
            return this.f;
          };
          function ke (a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ': ' + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ': ' + a.message);
            if (a.stack) {
              a = a.stack;
              try {
                -1 == a.indexOf(b) && (a = b + '\n' + a);
                for (var c; a != c; )
                  (c = a), (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1'));
                b = a.replace(/\n */g, '\n');
              } catch (d) {}
            }
            return b;
          }
          function N (a) {
            a = void 0 === a ? '' : a;
            var b = Error.call(this);
            this.message = b.message;
            'stack' in b && (this.stack = b.stack);
            this.name = 'TagError';
            this.message = a ? 'adsbygoogle.push() error: ' + a : '';
            Error.captureStackTrace
              ? Error.captureStackTrace(this, N)
              : (this.stack = Error().stack || '');
          }
          z(N, Error);
          function le () {
            this.c = !1;
            this.a = null;
            this.g = !1;
            this.h = Math.random();
            this.f = this.J;
          }
          n = le.prototype;
          n.na = function (a) {
            this.a = a;
          };
          n.Ga = function (a) {
            this.c = a;
          };
          n.Ha = function (a) {
            this.g = a;
          };
          n.Fa = function (a) {
            this.f = a;
          };
          n.J = function (a, b, c, d, e) {
            if ((this.g ? this.h : Math.random()) > (void 0 === c ? 0.01 : c)) return this.c;
            oc(b) || (b = new nc(b, { context: a, id: void 0 === e ? 'jserror' : e }));
            if (d || this.a) (b.meta = {}), this.a && this.a(b.meta), d && d(b.meta);
            A.google_js_errors = A.google_js_errors || [];
            A.google_js_errors.push(b);
            A.error_rep_loaded ||
              (Ac(
                A.document,
                Bd(A.location.protocol + '//pagead2.googlesyndication.com/pagead/js/err_rep.js')
              ),
              (A.error_rep_loaded = !0));
            return this.c;
          };
          n.ga = function (a, b, c) {
            try {
              var d = b();
            } catch (e) {
              if (!this.f(a, e, 0.01, c, 'jserror')) throw e;
            }
            return d;
          };
          n.Aa = function (a, b, c, d) {
            var e = this;
            return function (f) {
              for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
              return e.ga(
                a,
                function () {
                  return b.apply(c, g);
                },
                d
              );
            };
          };
          var je,
            me,
            fe = Jd(),
            ie = new ee();
          function ne (a) {
            null != a && (fe.google_measure_js_timing = a);
            fe.google_measure_js_timing ||
              ((a = ie),
              (a.a = !1),
              a.events != a.c.google_js_reporting_queue &&
                (de() && Na(a.events, ge), (a.events.length = 0)));
          }
          function oe (a) {
            var b = L.jerExpIds;
            if (Array.isArray(b) && 0 !== b.length) {
              var c = a.eid;
              if (c) {
                b = [].concat(ja(c.split(',')), ja(b));
                c = {};
                for (var d = 0, e = 0; e < b.length; ) {
                  var f = b[e++];
                  var g = f;
                  g = Da(g) ? 'o' + Ea(g) : (typeof g).charAt(0) + g;
                  Object.prototype.hasOwnProperty.call(c, g) || ((c[g] = !0), (b[d++] = f));
                }
                b.length = d;
                a.eid = b.join(',');
              } else a.eid = b.join(',');
            }
          }
          function pe (a) {
            var b = L.jerUserAgent;
            b && (a.useragent = b);
          }
          je = new (function () {
            var a = void 0 === a ? L : a;
            this.c = 'http:' === a.location.protocol ? 'http:' : 'https:';
            this.a = Math.random();
          })();
          'number' !== typeof fe.google_srt && (fe.google_srt = Math.random());
          var qe = je,
            re = fe.google_srt;
          0 <= re && 1 >= re && (qe.a = re);
          me = new he();
          me.na(function (a) {
            oe(a);
            pe(a);
          });
          me.Ha(!0);
          'complete' == fe.document.readyState
            ? ne()
            : ie.a &&
              pc(fe, 'load', function () {
                ne();
              });
          function se () {
            var a = [te, ue];
            me.na(function (b) {
              Na(a, function (c) {
                c(b);
              });
              oe(b);
              pe(b);
            });
          }
          function ve (a, b, c) {
            return me.ga(a, b, c);
          }
          function we (a, b) {
            return me.Aa(a, b, void 0, void 0);
          }
          function xe (a, b, c) {
            Wd(je, a, b, !0, c, void 0);
          }
          function ye (a, b, c, d) {
            var e;
            oc(b) ? (e = b.msg || ke(b.error)) : (e = ke(b));
            return 0 == e.indexOf('TagError')
              ? ((c = b instanceof nc ? b.error : b),
                c.pbr || ((c.pbr = !0), me.J(a, b, 0.1, d, 'puberror')),
                !1)
              : me.J(a, b, c, d);
          }
          function O (a) {
            a.google_ad_modifications || (a.google_ad_modifications = {});
            return a.google_ad_modifications;
          }
          function ze (a, b, c) {
            a = O(a);
            if (Ae(a.ad_whitelist || [], b, c)) return null;
            c = a.space_collapsing || 'none';
            return (b = Ae(a.ad_blacklist || [], b))
              ? { ia: !0, Ia: b.space_collapsing || c }
              : a.remove_ads_by_default
              ? { ia: !0, Ia: c, ja: a.ablation_viewport_offset }
              : null;
          }
          function Be (a) {
            a = O(a);
            a.eids || (a.eids = []);
            return a.eids;
          }
          function Ce (a, b) {
            a = O(a);
            a.tag_partners = a.tag_partners || [];
            a.tag_partners.push(b);
          }
          function De (a, b) {
            a = O(a);
            a.remove_ads_by_default = !0;
            a.space_collapsing = 'slot';
            a.ablation_viewport_offset = b;
          }
          function Ee (a) {
            O(L).allow_second_reactive_tag = a;
          }
          function Ae (a, b, c) {
            for (var d = 0; d < a.length; ++d)
              if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c)
                return xe('admdflst', { slot: b }), a[d];
            return null;
          }
          var P = {},
            Fe =
              ((P.google_ad_channel = !0),
              (P.google_ad_client = !0),
              (P.google_ad_host = !0),
              (P.google_ad_host_channel = !0),
              (P.google_adtest = !0),
              (P.google_tag_for_child_directed_treatment = !0),
              (P.google_tag_for_under_age_of_consent = !0),
              (P.google_tag_partner = !0),
              (P.google_restrict_data_processing = !0),
              (P.google_page_url = !0),
              (P.google_debug_params = !0),
              (P.google_adbreak_test = !0),
              (P.google_ad_frequency_hint = !0),
              P);
          function Ge (a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            if (!Array.isArray(a) || !Array.isArray(a.raw))
              throw new TypeError(
                'trustedResourceUrl is a template literal tag function that only accepts template literals with or without expressions. For example, trustedResourceUrl`foo`; or trustedResourceUrl`foo${bar}`'
              );
            if (0 === c.length) return xd(a[0]);
            d = a[0].toLowerCase();
            if (r(d, 'startsWith').call(d, 'data:'))
              throw Error('Data URLs cannot have expressions in the template literal input.');
            if (r(d, 'startsWith').call(d, 'https://') || r(d, 'startsWith').call(d, '//')) {
              var e = d.indexOf('//') + 2;
              var f = d.indexOf('/', e);
              if (f <= e)
                throw Error(
                  "Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'."
                );
              if (!/^[0-9a-z.:-]+$/i.test(d.substring(e, f)))
                throw Error('The origin contains unsupported characters.');
              e = !0;
            } else e = !1;
            if ((e = !e)) {
              if (r(d, 'startsWith').call(d, '/'))
                if ('/' === d || (1 < d.length && '/' !== d[1] && '\\' !== d[1])) e = !0;
                else throw Error('The path start in the url is invalid.');
              else e = !1;
              e = !e;
            }
            if (e) {
              if (r(d, 'startsWith').call(d, 'about:blank')) {
                if ('about:blank' !== d && !r(d, 'startsWith').call(d, 'about:blank#'))
                  throw Error('The about url is invalid.');
                d = !0;
              } else d = !1;
              e = !d;
            }
            if (e) throw Error('Trying to interpolate expressions in an unsupported url format.');
            d = [a[0]];
            for (e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
            return xd(d.join(''));
          }
          var He = ia([
              'https://pagead2.googlesyndication.com/pagead/js/managed/adsense/',
              '/show_ads_impl',
              '.js',
            ]),
            Ie = ia([
              'https://pagead2.googlesyndication.com/pagead/js/',
              '/',
              '/show_ads_impl',
              '.js',
            ]),
            Je = ia([
              'https://pagead2.googlesyndication.com/pagead/js/managed/adsense/',
              '/slotcar_library',
              '.js',
            ]),
            Ke = ia([
              'https://pagead2.googlesyndication.com/pagead/js/',
              '/',
              '/slotcar_library',
              '.js',
            ]),
            Le = ia([
              'https://pagead2.googlesyndication.com/pagead/js/managed/adsense/',
              '/show_ads_impl_exp',
              '.js',
            ]),
            Me = ia([
              'https://pagead2.googlesyndication.com/pagead/js/',
              '/',
              '/show_ads_impl_exp',
              '.js',
            ]),
            Ne = ia([
              'https://pagead2.googlesyndication.com/pagead/js/managed/adsense/',
              '/show_ads_impl_with_ama',
              '.js',
            ]),
            Oe = ia([
              'https://pagead2.googlesyndication.com/pagead/js/',
              '/',
              '/show_ads_impl_with_ama',
              '.js',
            ]);
          function Pe (a, b) {
            if (!a) return !1;
            a = a.hash;
            if (!a || !a.indexOf) return !1;
            if (-1 != a.indexOf(b)) return !0;
            b = Qe(b);
            return 'go' != b && -1 != a.indexOf(b) ? !0 : !1;
          }
          function Qe (a) {
            var b = '';
            Cd(a.split('_'), function (c) {
              b += c.substr(0, 2);
            });
            return b;
          }
          var Re = gd('2019', 2012);
          function Se (a, b) {
            return 'relative' === a ? b : ['https://', a, b].join('');
          }
          var Te = null;
          function Ue () {
            if (!id) return !1;
            if (null != Te) return Te;
            Te = !1;
            try {
              var a = Md(A);
              a && -1 !== a.location.hash.indexOf('google_logging') && (Te = !0);
              A.localStorage.getItem('google_logging') && (Te = !0);
            } catch (b) {}
            return Te;
          }
          function Ve (a, b) {
            b = void 0 === b ? [] : b;
            var c = !1;
            A.google_logging_queue || ((c = !0), (A.google_logging_queue = []));
            A.google_logging_queue.push([a, b]);
            c &&
              Ue() &&
              ((a = Se('pagead2.googlesyndication.com', '/pagead/js/logging_library.js')),
              2012 < Re &&
                ((b = (b = a.match(/(__[a-z0-9_]+)\.js(?:\?|$)/)) ? b[1] : ''),
                (a = a.replace(
                  new RegExp(
                    String(b + '.js')
                      .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1')
                      .replace(/\x08/g, '\\x08'),
                    'g'
                  ),
                  ('_fy' + Re + b + '.js').replace(/\$/g, '$$$$')
                ))),
              Ac(A.document, Bd(a)));
          }
          function We (a) {
            if (!a) return '';
            (a = a.toLowerCase()) && 'ca-' != a.substring(0, 3) && (a = 'ca-' + a);
            return a;
          }
          function Xe (a) {
            var b = window;
            var c = void 0 === c ? null : c;
            pc(b, 'message', function (d) {
              try {
                var e = JSON.parse(d.data);
              } catch (f) {
                return;
              }
              !e ||
                'sc-cnf' !== e.googMsgType ||
                (c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d)) ||
                a(e, d);
            });
          }
          var Ye = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
          };
          function Ze () {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.improveCollisionDetection = 1;
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new $e();
          }
          function af (a) {
            a.google_reactive_ads_global_state
              ? null == a.google_reactive_ads_global_state.floatingAdsStacking &&
                (a.google_reactive_ads_global_state.floatingAdsStacking = new $e())
              : (a.google_reactive_ads_global_state = new Ze());
            return a.google_reactive_ads_global_state;
          }
          function $e () {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = [];
          }
          function bf (a) {
            a = a.document;
            var b = {};
            a && (b = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body);
            return b || {};
          }
          function Q (a) {
            return bf(a).clientWidth;
          }
          function cf (a, b, c) {
            return df(a, void 0 === c ? '' : c, function (d) {
              return Qa(J(d, mc, 2), function (e) {
                return G(e, 1) === b;
              });
            });
          }
          function ef (a, b, c) {
            c = void 0 === c ? '' : c;
            var d = Md(a) || a;
            return ff(d, b)
              ? !0
              : df(a, c, function (e) {
                  return Qa(G(e, 3), function (f) {
                    return f === b;
                  });
                });
          }
          function gf (a) {
            return df(A, void 0 === a ? '' : a, function () {
              return !0;
            });
          }
          function ff (a, b) {
            a =
              (a =
                (a = a.location && a.location.hash) &&
                a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
            return !!a && Ta(a.split(','), b.toString());
          }
          function df (a, b, c) {
            a = Md(a) || a;
            var d = hf(a);
            b && (b = We(String(b)));
            return Ya(d, function (e, f) {
              return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e);
            });
          }
          function hf (a) {
            a = jf(a);
            var b = {};
            Cd(a, function (c, d) {
              try {
                var e = new kc(c);
                b[d] = e;
              } catch (f) {}
            });
            return b;
          }
          function jf (a) {
            const $___old_d69155adee91a0af = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_d69155adee91a0af)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_d805ada25b0ee6d7.localStorage
                ));
              return function () {
                try {
                  var b = a.localStorage.getItem('google_adsense_settings');
                  if (!b) return {};
                  var c = JSON.parse(b);
                  return c !== Object(c)
                    ? {}
                    : Xa(c, function (d, e) {
                        return (
                          Object.prototype.hasOwnProperty.call(c, e) &&
                          'string' === typeof e &&
                          Array.isArray(d)
                        );
                      });
                } catch (d) {
                  return {};
                }
              }.apply(this, arguments);
            } finally {
              if ($___old_d69155adee91a0af)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_d69155adee91a0af));
            }
          }
          var kf = Ub(''),
            pf = /^\d+$/.test(kf) ? kf : '';
          function qf (a) {
            E(this, a, rf, sf);
          }
          B(qf, D);
          var rf = [2, 8],
            sf = [
              [3, 4, 5],
              [6, 7],
            ];
          function tf (a) {
            return null != a ? !a : a;
          }
          function uf (a, b) {
            for (var c = !1, d = 0; d < a.length; d++) {
              var e = a[d].call();
              if (e == b) return e;
              null == e && (c = !0);
            }
            if (!c) return !b;
          }
          function vf (a, b) {
            var c = J(a, qf, 2);
            if (!c.length) return wf(a, b);
            a = H(a, 1, 0);
            if (1 == a) return tf(vf(c[0], b));
            c = Pa(c, function (d) {
              return function () {
                return vf(d, b);
              };
            });
            switch (a) {
              case 2:
                return uf(c, !1);
              case 3:
                return uf(c, !0);
            }
          }
          function wf (a, b) {
            var c = bc(a, sf[0]);
            a: {
              switch (c) {
                case 3:
                  var d = H(a, 3, 0);
                  break a;
                case 4:
                  d = H(a, 4, 0);
                  break a;
                case 5:
                  d = H(a, 5, 0);
                  break a;
              }
              d = void 0;
            }
            if (d && (b = (b = b[c]) && b[d])) {
              try {
                var e = b.apply(null, G(a, 8));
              } catch (f) {
                return;
              }
              b = H(a, 1, 0);
              if (4 == b) return !!e;
              d = null != e;
              if (5 == b) return d;
              if (12 == b) a = H(a, 7, '');
              else
                a: {
                  switch (c) {
                    case 4:
                      a = fc(a, 6);
                      break a;
                    case 5:
                      a = H(a, 7, '');
                      break a;
                  }
                  a = void 0;
                }
              if (null != a) {
                if (6 == b) return e === a;
                if (9 == b) return 0 == Bb(e, a);
                if (d)
                  switch (b) {
                    case 7:
                      return e < a;
                    case 8:
                      return e > a;
                    case 12:
                      return new RegExp(a).test(e);
                    case 10:
                      return -1 == Bb(e, a);
                    case 11:
                      return 1 == Bb(e, a);
                  }
              }
            }
          }
          function xf (a, b) {
            return !a || !(!b || !vf(a, b));
          }
          function yf () {
            var a = {};
            this[3] =
              ((a[23] = function (b) {
                return cf(L, parseInt(b, 10));
              }),
              (a[24] = function (b) {
                return ef(L, parseInt(b, 10));
              }),
              a);
            a = {};
            this[4] =
              ((a[7] = function (b) {
                const $___old_140492764b71d8b8 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'localStorage'
                );
                try {
                  if ($___old_140492764b71d8b8)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___stub_d805ada25b0ee6d7.localStorage
                    ));
                  return function () {
                    try {
                      var c = window.localStorage;
                    } catch (f) {
                      c = null;
                    }
                    var d = b;
                    b = window;
                    d = void 0 === d ? 0 : d;
                    d = 0 != d ? 'google_experiment_mod' + d : 'google_experiment_mod';
                    var e = Jc(c, d);
                    return null === e ? Kc(b, c, d) : e;
                  }.apply(this, arguments);
                } finally {
                  if ($___old_140492764b71d8b8)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___old_140492764b71d8b8
                    ));
                }
              }),
              a);
            a = {};
            this[5] =
              ((a[6] = function () {
                return pf;
              }),
              a);
          }
          Ca(yf);
          function zf (a) {
            E(this, a, Af, null);
          }
          B(zf, D);
          var Af = [4];
          function Bf (a) {
            E(this, a, Cf, Df);
          }
          B(Bf, D);
          function Ef (a) {
            E(this, a, null, null);
          }
          B(Ef, D);
          var Cf = [5],
            Df = [[1, 2, 3, 6, 7]];
          function Ff () {
            var a = {};
            this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
          }
          Ca(Ff);
          var Gf = Oc('false', !1);
          function Hf (a, b) {
            switch (b) {
              case 1:
                return H(a, 1, 0);
              case 2:
                return H(a, 2, 0);
              case 3:
                return H(a, 3, 0);
              case 6:
                return H(a, 6, 0);
              default:
                return null;
            }
          }
          function If (a, b) {
            if (!a) return null;
            switch (b) {
              case 1:
                return ec(a, 1);
              case 7:
                return H(a, 3, '');
              case 2:
                return fc(a, 2);
              case 3:
                return H(a, 3, '');
              case 6:
                return G(a, 4);
              default:
                return null;
            }
          }
          var Jf = Va(function () {
            if (!Gf) return {};
            try {
              var a = window.sessionStorage && window.sessionStorage.getItem('GGDFSSK');
              if (a) return JSON.parse(a);
            } catch (b) {}
            return {};
          });
          function Kf (a, b, c, d) {
            d = void 0 === d ? 0 : d;
            var e = Jf();
            if (e[a] && null != e[a][b]) return e[a][b];
            b = Lf(d)[a][b];
            if (!b) return c;
            b = new Bf(b);
            b = Mf(b);
            a = If(b, a);
            return null != a ? a : c;
          }
          function Mf (a) {
            var b = Ff.i().a;
            if (b) {
              var c = Sa(J(a, Ef, 5), function (d) {
                return xf(I(d, qf, 1), b);
              });
              if (c) return I(c, zf, 2);
            }
            return I(a, zf, 4);
          }
          function Nf () {
            this.a = {};
            this.c = [];
          }
          Ca(Nf);
          function Of (a, b, c) {
            return !!Kf(1, a, void 0 === b ? !1 : b, c);
          }
          function Pf (a, b, c) {
            b = void 0 === b ? 0 : b;
            a = Number(Kf(2, a, b, c));
            return isNaN(a) ? b : a;
          }
          function Qf (a, b, c) {
            return Kf(3, a, void 0 === b ? '' : b, c);
          }
          function Rf (a, b, c) {
            b = void 0 === b ? [] : b;
            return Kf(6, a, b, c);
          }
          function Lf (a) {
            var b = {};
            return (
              Nf.i().a[a] ||
              (Nf.i().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
            );
          }
          function Sf (a, b) {
            var c = Lf(b);
            Gc(a, function (d, e) {
              return Gc(d, function (f, g) {
                return (c[e][g] = f);
              });
            });
          }
          function Tf (a, b) {
            var c = Lf(b);
            Na(a, function (d) {
              var e = bc(d, Df[0]),
                f = Hf(d, e);
              f && (c[e][f] = d.a);
            });
          }
          function Uf (a, b) {
            var c = Lf(b);
            Na(a, function (d) {
              var e = new Bf(d),
                f = bc(e, Df[0]);
              (e = Hf(e, f)) && (c[f][e] || (c[f][e] = d));
            });
          }
          function Vf () {
            return Pa(r(Object, 'keys').call(Object, Nf.i().a), function (a) {
              return Number(a);
            });
          }
          function Wf (a) {
            Ta(Nf.i().c, a) || Sf(Lf(4), a);
          }
          function R (a) {
            this.methodName = a;
          }
          var Xf = new R(1),
            Yf = new R(15),
            Zf = new R(2),
            $f = new R(3),
            ag = new R(4),
            bg = new R(5),
            cg = new R(6),
            dg = new R(7),
            eg = new R(8),
            fg = new R(9),
            gg = new R(10),
            hg = new R(11),
            ig = new R(12),
            jg = new R(13),
            kg = new R(14);
          function S (a, b, c) {
            c.hasOwnProperty(a.methodName) ||
              Object.defineProperty(c, String(a.methodName), { value: b });
          }
          function lg (a, b, c) {
            return b[a.methodName] || c || function () {};
          }
          function mg (a) {
            S(bg, Of, a);
            S(cg, Pf, a);
            S(dg, Qf, a);
            S(eg, Rf, a);
            S(jg, Uf, a);
            S(Yf, Wf, a);
          }
          function ng (a) {
            S(
              ag,
              function (b) {
                Ff.i().a = b;
              },
              a
            );
            S(
              fg,
              function (b, c) {
                var d = Ff.i();
                d.a[3][b] || (d.a[3][b] = c);
              },
              a
            );
            S(
              gg,
              function (b, c) {
                var d = Ff.i();
                d.a[4][b] || (d.a[4][b] = c);
              },
              a
            );
            S(
              hg,
              function (b, c) {
                var d = Ff.i();
                d.a[5][b] || (d.a[5][b] = c);
              },
              a
            );
            S(
              kg,
              function (b) {
                for (var c = Ff.i(), d = y([3, 4, 5]), e = d.next(); !e.done; e = d.next()) {
                  var f = e.value;
                  e = void 0;
                  var g = c.a[f];
                  f = b[f];
                  for (e in f) g[e] = f[e];
                }
              },
              a
            );
          }
          function og (a) {
            a.hasOwnProperty('init-done') || Object.defineProperty(a, 'init-done', { value: !0 });
          }
          function pg (a) {
            a = void 0 === a ? A : a;
            return a.ggeac || (a.ggeac = {});
          }
          function qg () {
            this.c = function () {};
            this.a = function () {
              return [];
            };
          }
          function rg (a, b, c) {
            a.c = function (d) {
              lg(Zf, b, function () {
                return [];
              })(d, c);
            };
            a.a = function () {
              return lg($f, b, function () {
                return [];
              })(c);
            };
          }
          Ca(qg);
          function sg (a, b) {
            try {
              a: {
                var c = a.split('.');
                a = A;
                for (var d = 0, e; d < c.length; d++)
                  if (((e = a), (a = a[c[d]]), null == a)) {
                    var f = null;
                    break a;
                  }
                f = 'function' === typeof a ? e[c[d - 1]]() : a;
              }
              if (typeof f === b) return f;
            } catch (g) {}
          }
          function tg () {
            var a = {};
            this[3] =
              ((a[8] = function (b) {
                try {
                  return null != Aa(b);
                } catch (c) {}
              }),
              (a[9] = function (b) {
                try {
                  var c = Aa(b);
                } catch (d) {
                  return;
                }
                if ((b = 'function' === typeof c))
                  (c = c && c.toString && c.toString()),
                    (b = 'string' === typeof c && -1 != c.indexOf('[native code]'));
                return b;
              }),
              (a[10] = function () {
                return window == window.top;
              }),
              (a[6] = function (b) {
                return Ta(qg.i().a(), parseInt(b, 10));
              }),
              (a[27] = function (b) {
                b = sg(b, 'boolean');
                return void 0 !== b ? b : void 0;
              }),
              a);
            a = {};
            this[4] =
              ((a[3] = function () {
                return Qc();
              }),
              (a[6] = function (b) {
                b = sg(b, 'number');
                return void 0 !== b ? b : void 0;
              }),
              a);
            a = {};
            this[5] =
              ((a[2] = function () {
                return window.location.href;
              }),
              (a[3] = function () {
                try {
                  return window.top.location.hash;
                } catch (b) {
                  return '';
                }
              }),
              (a[4] = function (b) {
                b = sg(b, 'string');
                return void 0 !== b ? b : void 0;
              }),
              a);
          }
          Ca(tg);
          function ug (a) {
            E(this, a, vg, null);
          }
          B(ug, D);
          var vg = [2];
          ug.prototype.getId = function () {
            return H(this, 1, 0);
          };
          ug.prototype.da = function () {
            return H(this, 7, 0);
          };
          function wg (a) {
            E(this, a, xg, null);
          }
          B(wg, D);
          var xg = [2];
          wg.prototype.da = function () {
            return H(this, 5, 0);
          };
          function yg (a) {
            E(this, a, zg, null);
          }
          B(yg, D);
          function Ag (a) {
            E(this, a, Bg, null);
          }
          B(Ag, D);
          var zg = [1, 4, 2, 3],
            Bg = [2];
          Ag.prototype.da = function () {
            return H(this, 1, 0);
          };
          var Cg = [12, 13];
          function Dg () {}
          Dg.prototype.init = function (a, b, c) {
            var d = this;
            c = void 0 === c ? {} : c;
            var e = void 0 === c.va ? !1 : c.va,
              f = void 0 === c.Ua ? {} : c.Ua;
            c = void 0 === c.Xa ? [] : c.Xa;
            this.f = a;
            this.h = {};
            this.j = e;
            this.g = f;
            a = {};
            this.a = ((a[b] = []), (a[4] = []), a);
            this.c = {};
            (b = Yd()) &&
              Na(b.split(',') || [], function (g) {
                (g = parseInt(g, 10)) && (d.c[g] = !0);
              });
            Na(c, function (g) {
              d.c[g] = !0;
            });
            return this;
          };
          function Eg (a, b, c) {
            if (a.h[b]) return 0.001 >= Math.random() && cd({ b: c, dp: b }, 'tagging_dupdiv'), !0;
            a.h[b] = !0;
            return !1;
          }
          function Fg (a, b, c) {
            var d = [],
              e = Gg(a.f, b);
            if ((9 !== b && Eg(a, b, c)) || !e.length) return d;
            var f = Ta(Cg, b);
            Na(e, function (g) {
              if ((g = Hg(a, g, c))) {
                var h = g.getId();
                d.push(h);
                Ig(a, h, f ? 4 : c);
                var k = J(g, Bf, 2);
                k &&
                  (f
                    ? Na(Vf(), function (l) {
                        return Tf(k, l);
                      })
                    : Tf(k, c));
              }
            });
            return d;
          }
          function Ig (a, b, c) {
            a.a[c] || (a.a[c] = []);
            a = a.a[c];
            Ta(a, b) ? cd({ eids: JSON.stringify(a), dup: b }, 'gpt_dupeid') : a.push(b);
          }
          function Jg (a, b) {
            a.f.push.apply(
              a.f,
              ja(
                Oa(
                  Pa(b, function (c) {
                    return new Ag(c);
                  }),
                  function (c) {
                    return !Ta(Cg, c.da());
                  }
                )
              )
            );
          }
          function Hg (a, b, c) {
            var d = Ff.i().a;
            if (!xf(I(b, qf, 3), d)) return null;
            var e = J(b, ug, 2),
              f = e.length * H(b, 1, 0),
              g = H(b, 6, 0);
            if (g) {
              f = d[4];
              switch (c) {
                case 2:
                  var h = f[8];
                  break;
                case 1:
                  h = f[7];
              }
              f = null;
              if (h)
                try {
                  f = h(g);
                } catch (k) {}
              null === f && (f = Math.floor(1000 * Fc(window)));
              b = Kg(b, f);
              return !b || (d && !xf(I(b, qf, 3), d)) ? null : Lg(a, [b], 1);
            }
            g = d
              ? Oa(e, function (k) {
                  return xf(I(k, qf, 3), d);
                })
              : e;
            return g.length ? ((b = H(b, 4, 0)) ? Mg(a, b, f, g) : Lg(a, g, f / 1000)) : null;
          }
          function Mg (a, b, c, d) {
            var e = null != a.g[b] ? a.g[b] : 1000;
            if (0 >= e) return null;
            d = Lg(a, d, c / e);
            a.g[b] = d ? 0 : e - c;
            return d;
          }
          function Lg (a, b, c) {
            var d = a.c,
              e = Ra(b, function (f) {
                return !!d[f.getId()];
              });
            return e ? e : a.j ? null : Cc(b, c);
          }
          function Ng (a, b) {
            S(
              Xf,
              function (c) {
                a.c[c] = !0;
              },
              b
            );
            S(
              Zf,
              function (c, d) {
                return Fg(a, c, d);
              },
              b
            );
            S(
              $f,
              function (c) {
                return (a.a[c] || []).concat(a.a[4]);
              },
              b
            );
            S(
              ig,
              function (c) {
                return Jg(a, c);
              },
              b
            );
          }
          Ca(Dg);
          function Gg (a, b) {
            return (
              ((a = Ra(a, function (c) {
                return c.da() == b;
              })) &&
                J(a, wg, 2)) ||
              []
            );
          }
          function Kg (a, b) {
            var c = J(a, ug, 2),
              d = c.length,
              e = H(a, 1, 0);
            a = H(a, 8, 0);
            var f = (b - a) % d;
            return b < a || b - a - f >= d * e - 1 ? null : c[f];
          }
          function Og () {
            this.c = function (a, b) {
              return void 0 === b ? !1 : b;
            };
            this.f = function (a, b) {
              return void 0 === b ? 0 : b;
            };
            this.g = function (a, b) {
              return void 0 === b ? '' : b;
            };
            this.a = function () {};
          }
          function Pg (a, b, c) {
            a.c = function (d, e) {
              return lg(bg, b)(d, e, c);
            };
            a.f = function (d, e) {
              return lg(cg, b)(d, e, c);
            };
            a.g = function (d, e) {
              return lg(dg, b)(d, e, c);
            };
            a.a = function () {
              lg(Yf, b)(c);
            };
          }
          Ca(Og);
          function T (a) {
            var b = void 0 === b ? !1 : b;
            return Og.i().c(a, b);
          }
          function Qg (a) {
            var b = void 0 === b ? 0 : b;
            return Og.i().f(a, b);
          }
          function Rg () {
            var a = void 0 === a ? '' : a;
            return Og.i().g(14, a);
          }
          function Sg () {
            this.a = function () {};
          }
          Ca(Sg);
          function Tg (a) {
            Sg.i().a(a);
          }
          function Ug (a, b, c, d) {
            var e = 1;
            d = void 0 === d ? pg() : d;
            e = void 0 === e ? 0 : e;
            d.hasOwnProperty('init-done')
              ? (lg(
                  ig,
                  d
                )(
                  Pa(J(a, Ag, 2), function (f) {
                    return f.a;
                  })
                ),
                lg(jg, d)(
                  Pa(J(a, Bf, 1), function (f) {
                    return f.a;
                  }),
                  e
                ),
                b && lg(kg, d)(b),
                Vg(d, e))
              : (Ng(Dg.i().init(J(a, Ag, 2), e, c), d),
                mg(d),
                ng(d),
                og(d),
                Vg(d, e),
                Tf(J(a, Bf, 1), e),
                (Gf = Gf || !(!c || !c.Sa)),
                Tg(tg.i()),
                b && Tg(b));
          }
          function Vg (a, b) {
            a = void 0 === a ? pg() : a;
            b = void 0 === b ? 0 : b;
            var c = a,
              d = b;
            d = void 0 === d ? 0 : d;
            rg(qg.i(), c, d);
            c = a;
            b = void 0 === b ? 0 : b;
            Pg(Og.i(), c, b);
            Sg.i().a = lg(kg, a);
            Og.i().a();
          }
          function Wg (a) {
            const $___old_10313fb17287d36b = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_10313fb17287d36b)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_d805ada25b0ee6d7.localStorage
                ));
              return function () {
                var b = O(a);
                if (b.plle) Vg(pg(a), 1);
                else {
                  b.plle = !0;
                  try {
                    var c = a.localStorage;
                  } catch (e) {
                    c = null;
                  }
                  b = c;
                  null == Jc(b, 'goog_pem_mod') && Kc(a, b, 'goog_pem_mod');
                  b = [null, null];
                  try {
                    var d = JSON.parse(
                      '[[[null,62,null,[null,0.001]],[null,1010,null,[null,1]],[365,null,null,[1]],[1011,null,null,[1]],[null,1017,null,[null,500],[[[1,[[3,[[12,null,null,null,2,null,"soccernews\\\\.nl"],[12,null,null,null,2,null,"bolha\\\\.com"],[12,null,null,null,2,null,"multitran\\\\.com"],[12,null,null,null,2,null,"thefreedictionary\\\\.com"]]]]],[null,-1]]]],[225,null,null,[1]],[null,1904,null,[null,3]],[1912,null,null,[1],[[[12,null,null,null,4,null,"Chrome/8[4-6]",["navigator.userAgent"]],[]]]],[1902,null,null,[1]],[1020,null,null,[1]],[1012,null,null,[1]],[1016,null,null,[1]],[358,null,null,[1]],[209,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[210,null,null,[1]],[211,null,null,[1]],[312,null,null,[1]],[1007,null,null,[1]],[207,null,null,[1]],[370,null,null,[1]],[null,63,null,[null,30]],[null,1034,null,[]],[1023,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,58,null,[null,120]],[null,64,null,[null,300]],[215,null,null,[1]],[230,null,null,[1]],[191,null,null,[1]],[1001,null,null,[1]],[1024,null,null,[1]],[null,null,null,[null,null,null,["facebook[.]com","whatsapp[.]com","youtube[.]com","google[.]com","\\\\/ads?\\\\/"]],null,9],[371,null,null,[1]]],[[10,[[1,[[21066649,null,[1,[[3,[[3,[[6,null,null,null,6,null,"21067204"],[6,null,null,null,6,null,"m21067204"]]],[3,[[6,null,null,null,6,null,"21067205"],[6,null,null,null,6,null,"m21067205"]]]]]]]],[21066650,[[null,null,14,[null,null,"exp=21066650"]]],[1,[[3,[[3,[[6,null,null,null,6,null,"21067204"],[6,null,null,null,6,null,"m21067204"]]],[3,[[6,null,null,null,6,null,"21067205"],[6,null,null,null,6,null,"m21067205"]]]]]]]],[21066651,[[null,null,14,[null,null,"exp=21066651"]],[null,1008,null,[null,1]]],[1,[[3,[[3,[[6,null,null,null,6,null,"21067204"],[6,null,null,null,6,null,"m21067204"]]],[3,[[6,null,null,null,6,null,"21067205"],[6,null,null,null,6,null,"m21067205"]]]]]]]],[21066652,[[356,null,null,[1]],[null,null,14,[null,null,"exp=21066652"]],[null,1008,null,[null,1]]],[1,[[3,[[3,[[6,null,null,null,6,null,"21067204"],[6,null,null,null,6,null,"m21067204"]]],[3,[[6,null,null,null,6,null,"21067205"],[6,null,null,null,6,null,"m21067205"]]]]]]]],[21066653,[[357,null,null,[1]],[null,1008,null,[null,1]]],[1,[[3,[[3,[[6,null,null,null,6,null,"21067204"],[6,null,null,null,6,null,"m21067204"]]],[3,[[6,null,null,null,6,null,"21067205"],[6,null,null,null,6,null,"m21067205"]]]]]]]]],null,null,null,47,null,5],[10,[[21066699,null,[1,[[3,[[3,[[6,null,null,null,6,null,"21067204"],[6,null,null,null,6,null,"m21067204"]]],[3,[[6,null,null,null,6,null,"21067205"],[6,null,null,null,6,null,"m21067205"]]]]]]]],[21066700,[[1006,null,null,[1]],[375,null,null,[1]],[1028,null,null,[1]],[null,1008,null,[null,2]]],[1,[[3,[[3,[[6,null,null,null,6,null,"21067204"],[6,null,null,null,6,null,"m21067204"]]],[3,[[6,null,null,null,6,null,"21067205"],[6,null,null,null,6,null,"m21067205"]]]]]]]]],null,null,null,47,25,400],[10,[[21066792,null,[1,[[3,[[3,[[6,null,null,null,6,null,"21067204"],[6,null,null,null,6,null,"m21067204"]]],[3,[[6,null,null,null,6,null,"21067205"],[6,null,null,null,6,null,"m21067205"]]]]]]]],[21066793,null,[1,[[3,[[3,[[6,null,null,null,6,null,"21067204"],[6,null,null,null,6,null,"m21067204"]]],[3,[[6,null,null,null,6,null,"21067205"],[6,null,null,null,6,null,"m21067205"]]]]]]]]],null,null,null,47,25,400],[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[150,[[42530671],[42530672,[[1004,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44731609],[44731610]]],[10,[[21067213],[21067214]]],[1,[[21067419,[[190,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[21067420,[[265,null,null,[1]],[260,null,null,[1]],[190,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]]],[1,[[21067422,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[21067423,[[233,null,null,[1]],[232,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]]],[1,[[21067424,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[21067425,[[1002,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]],[182982300,null,[1,[[12,null,null,null,2,null,"\\\\.wiki(dogs|how)(-fun)?\\\\."]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,["1"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,["1"]]],[182984300,null,[4,null,23,null,null,null,null,["1"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[30,[[21066922],[21066923,[[325,null,null,[1]]]]],null,23],[1000,[[21067204,[[null,null,14,[null,null,"exp=21067204"]]],[3,[[6,null,null,null,6,null,"21067204"],[6,null,null,null,6,null,"m21067204"]]]],[21067205,[[null,null,14,[null,null,"exp=21067205"]]],[3,[[6,null,null,null,6,null,"21067205"],[6,null,null,null,6,null,"m21067205"]]]]]],[10,[[21067492]]],[1000,[[21067496]],[4,null,9,null,null,null,null,["document.hasTrustToken"]]],[50,[[21067981],[21067982,[[1022,null,null,[1]]]]]],[100,[[21068083],[21068084,[[1025,null,null,[1]]]]]],[10,[[21068108],[21068109,[[1026,null,null,[1]]]]]],[null,[[21068472,[[1029,null,null,[1]],[1030,null,null,[1]]]],[21068737],[21068738,[[1029,null,null,[1]]]]]],[10,[[21068495],[21068496,[[1009,null,null,[1]]]]]]]],[11,[[10,[[21067493]]]]],[13,[[1000,[[21066819,null,[2,[[12,null,null,null,4,null,"Linux.*Chrome",["navigator.userAgent"]],[4,null,27,null,null,null,null,["navigator.connection.saveData"]]]]]]],[10,[[21065726,null,[4,null,6,null,null,null,null,["21065725"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,["21065725"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,["21065725"]]]],[4,null,9,null,null,null,null,["LayoutShift"]]],[500,[[21066614],[21066615,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["21066613"]]],[1000,[[21066970,null,[2,[[6,null,null,6,null,8582400,null,["__gsaExp.id"]],[1,[[6,null,null,null,4,null,"",["frameElement.src"]]]]]]],[21066971,null,[2,[[6,null,null,6,null,8582400,null,["__gsaExp.id"]],[6,null,null,null,4,null,"",["frameElement.src"]]]]],[21066972,null,[2,[[5,null,null,6,null,null,null,["__gsaExp.id"]],[1,[[6,null,null,6,null,8582400,null,["__gsaExp.id"]]]]]]]]],[1000,[[21066973,null,[2,[[12,null,null,null,4,null,"Linux.*Chrome",["navigator.userAgent"]],[1,[[6,null,null,null,4,null,"",["frameElement.src"]]]],[1,[[5,null,null,6,null,null,null,["__gsaExp.id"]]]]]]],[21066974,null,[2,[[12,null,null,null,4,null,"Linux.*Chrome",["navigator.userAgent"]],[6,null,null,null,4,null,"",["frameElement.src"]],[1,[[5,null,null,6,null,null,null,["__gsaExp.id"]]]]]]]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21066613"]]]]],[10,[[21067495]]],[10,[[21067664,null,[4,null,6,null,null,null,null,["21065725"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,["21065725"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,["21065725"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,["21065725"]]]],[4,null,9,null,null,null,null,["LayoutShift"]]]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]]],[1,[[21065784]]],[1,[[21065785,null,[4,null,8,null,null,null,null,["navigator.connection.saveData"]]]]],[1,[[21065786,null,[4,null,27,null,null,null,null,["navigator.connection.saveData"]]]]],[1,[[21065787,null,[1,[[4,null,27,null,null,null,null,["navigator.connection.saveData"]]]]]]],[1,[[21065798,null,[2,[[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]]]]]]],[1,[[21065799,null,[2,[[5,null,8,null,null,null,null,["localStorage"]],[1,[[4,null,8,null,null,null,null,["localStorage"]]]]]]]]],[1,[[21066438,null,[1,[[5,null,8,null,null,null,null,["localStorage"]]]]]]],[10,[[21066612],[21066613,[[83,null,null,[1]],[84,null,null,[1]]]]]],[50,[[21066705],[21066706,[[382,null,null,[1]]]]]],[10,[[21067494]]],[null,[[21068783],[21068784,[[1911,null,null,[1]]]]]],[1,[[42530789],[42530790,[[900,null,null,[1]]]]]]]]]]'
                    );
                  } catch (e) {
                    d = b;
                  }
                  Ve(13, [d]);
                  Ug(
                    new yg(d),
                    yf.i(),
                    { va: id && !!a.google_disable_experiments, Sa: id },
                    pg(a)
                  );
                  qg.i().c(12);
                  qg.i().c(10);
                  d = Be(a);
                  ub('') && d.push('');
                  a = Md(a) || a;
                  Pe(a.location, 'google_mc_lab') && d.push('242104166');
                }
              }.apply(this, arguments);
            } finally {
              if ($___old_10313fb17287d36b)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_10313fb17287d36b));
            }
          }
          function ue (a) {
            var b = qg.i().a();
            var c = Be(A);
            (b = b.concat(c).join(',')) && (a.eid = 50 < b.length ? b.substring(0, 50) + 'T' : b);
          }
          function Xg () {
            var a = /[a-zA-Z0-9._~-]/,
              b = /%[89a-zA-Z]./;
            return A.location.pathname.replace(/(%[a-zA-Z0-9]{2})/g, function (c) {
              if (!c.match(b)) {
                var d = decodeURIComponent(c);
                if (d.match(a)) return d;
              }
              return c.toUpperCase();
            });
          }
          function Yg () {
            for (var a = Xg(), b = '', c = /[/%?&=]/, d = 0; d < a.length; ++d) {
              var e = a[d];
              b = e.match(c) ? b + e : b + encodeURIComponent(e);
            }
            return b;
          }
          function U (a) {
            E(this, a, Zg, null);
          }
          B(U, D);
          var Zg = [4];
          U.prototype.getId = function () {
            return G(this, 3);
          };
          function $g (a) {
            E(this, a, null, null);
          }
          B($g, D);
          function ah (a) {
            E(this, a, null, bh);
          }
          B(ah, D);
          function ch (a) {
            E(this, a, null, null);
          }
          B(ch, D);
          function dh (a) {
            E(this, a, null, null);
          }
          B(dh, D);
          function eh (a) {
            E(this, a, null, null);
          }
          B(eh, D);
          var bh = [[1, 2, 3]];
          function fh (a) {
            E(this, a, null, null);
          }
          B(fh, D);
          function gh (a) {
            E(this, a, null, null);
          }
          B(gh, D);
          function hh (a) {
            E(this, a, ih, null);
          }
          B(hh, D);
          var ih = [6, 7, 9, 10, 11];
          function jh (a) {
            E(this, a, kh, null);
          }
          B(jh, D);
          function lh (a) {
            E(this, a, null, null);
          }
          B(lh, D);
          function mh (a) {
            E(this, a, nh, null);
          }
          B(mh, D);
          function oh (a) {
            E(this, a, null, null);
          }
          B(oh, D);
          function ph (a) {
            E(this, a, null, null);
          }
          B(ph, D);
          function qh (a) {
            E(this, a, null, null);
          }
          B(qh, D);
          function rh (a) {
            E(this, a, null, null);
          }
          B(rh, D);
          var kh = [1, 2, 5, 7],
            nh = [2, 5, 6, 11];
          function sh (a) {
            var b = Yg().replace(/(^\/)|(\/$)/g, ''),
              c = Hc(b),
              d = th(b);
            return (
              r(a, 'find').call(a, function (e) {
                var f = null != G(e, 7) ? G(I(e, oh, 7), 1) : G(e, 1);
                e = null != G(e, 7) ? G(I(e, oh, 7), 2) : 2;
                if ('number' !== typeof f) return !1;
                switch (e) {
                  case 1:
                    return f == c;
                  case 2:
                    return d[f] || !1;
                }
                return !1;
              }) || null
            );
          }
          function th (a) {
            for (var b = {}; ; ) {
              b[Hc(a)] = !0;
              if (!a) return b;
              a = a.substring(0, a.lastIndexOf('/'));
            }
          }
          function uh (a) {
            this.a = a.slice(0);
          }
          uh.prototype.apply = function (a) {
            return new uh(a(this.a.slice(0)));
          };
          function vh (a) {
            var b = void 0 === a.ra ? void 0 : a.ra,
              c = void 0 === a.Ra ? void 0 : a.Ra,
              d = void 0 === a.Ca ? void 0 : a.Ca;
            this.a = void 0 === a.Na ? void 0 : a.Na;
            this.g = new uh(b || []);
            this.f = d;
            this.c = c;
          }
          function wh (a) {
            var b = [],
              c = a.g;
            c && c.a.length && b.push({ T: 'a', $: xh(c) });
            null != a.a && b.push({ T: 'as', $: a.a });
            null != a.c && b.push({ T: 'i', $: String(a.c) });
            null != a.f && b.push({ T: 'rp', $: String(a.f) });
            b.sort(function (d, e) {
              return d.T.localeCompare(e.T);
            });
            b.unshift({ T: 't', $: 'aa' });
            return b;
          }
          function xh (a) {
            a = a.a.slice(0).map(yh);
            a = JSON.stringify(a);
            return Hc(a);
          }
          function yh (a) {
            var b = {};
            null != G(a, 7) && (b.q = G(a, 7));
            null != G(a, 2) && (b.o = G(a, 2));
            null != G(a, 5) && (b.p = G(a, 5));
            return b;
          }
          function zh (a, b) {
            this.ta = a;
            this.Ba = b;
          }
          function Ah (a) {
            var b = [].slice.call(arguments).filter(
              Ua(function (e) {
                return null === e;
              })
            );
            if (!b.length) return null;
            var c = [],
              d = {};
            b.forEach(function (e) {
              c = c.concat(e.ta || []);
              d = r(Object, 'assign').call(Object, d, e.Ba);
            });
            return new zh(c, d);
          }
          function Bh (a) {
            switch (a) {
              case 1:
                return new zh(null, { google_ad_semantic_area: 'mc' });
              case 2:
                return new zh(null, { google_ad_semantic_area: 'h' });
              case 3:
                return new zh(null, { google_ad_semantic_area: 'f' });
              case 4:
                return new zh(null, { google_ad_semantic_area: 's' });
              default:
                return null;
            }
          }
          var Ch = new zh(['google-auto-placed'], { google_tag_origin: 'qs' });
          var Dh = {},
            Eh = ((Dh.google_ad_channel = !0), (Dh.google_ad_host = !0), Dh);
          function Fh (a, b) {
            a.location.href &&
              a.location.href.substring &&
              (b.url = a.location.href.substring(0, 200));
            xe('ama', b, 0.01);
          }
          function Gh (a) {
            var b = {};
            Gc(Eh, function (c, d) {
              d in a && (b[d] = a[d]);
            });
            return b;
          }
          function Hh (a) {
            const $___old_57033102bbc63417 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_57033102bbc63417)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_d805ada25b0ee6d7.localStorage
                ));
              return function () {
                if (T(316)) var b = null;
                else
                  try {
                    b = a.localStorage.getItem('google_ama_config');
                  } catch (d) {
                    b = null;
                  }
                try {
                  var c = b ? new jh(b ? JSON.parse(b) : null) : null;
                } catch (d) {
                  c = null;
                }
                (a = c)
                  ? ((b = I(a, lh, 3)), (a = !b || G(b, 1) <= Date.now() ? null : a))
                  : (a = null);
                return a;
              }.apply(this, arguments);
            } finally {
              if ($___old_57033102bbc63417)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_57033102bbc63417));
            }
          }
          function Ih (a, b, c) {
            this.a = a;
            this.c = b;
            this.f = c;
          }
          function Jh (a, b) {
            return { top: a.c - b, right: a.a + a.f + 1, bottom: a.c + b, left: a.a - 1 };
          }
          function Kh (a) {
            this.a = {};
            this.c = {};
            if (a) for (var b = 0; b < a.length; ++b) this.add(a[b]);
          }
          Kh.prototype.add = function (a) {
            this.a[a] = !0;
            this.c[a] = a;
          };
          Kh.prototype.contains = function (a) {
            return !!this.a[a];
          };
          function Lh (a) {
            E(this, a, null, null);
          }
          B(Lh, D);
          function Mh (a) {
            E(this, a, null, null);
          }
          B(Mh, D);
          function Nh (a) {
            E(this, a, null, null);
          }
          B(Nh, D);
          function Oh (a) {
            E(this, a, Ph, null);
          }
          B(Oh, D);
          var Ph = [5];
          function Qh (a) {
            try {
              var b = a.localStorage.getItem('google_ama_settings');
              return b ? new Oh(b ? JSON.parse(b) : null) : null;
            } catch (c) {
              return null;
            }
          }
          function Rh (a, b) {
            this.a = a;
            this.c = b;
          }
          function Sh (a) {
            return null != a.a ? a.a.value : null;
          }
          function Th (a) {
            if (null != a.a) {
              a = a.a.value;
              if (null == a) a = null;
              else {
                var b = wh(a);
                a = [];
                b = y(b);
                for (var c = b.next(); !c.done; c = b.next()) {
                  c = c.value;
                  var d = String(c.$);
                  a.push(c.T + '.' + (20 >= d.length ? d : d.slice(0, 19) + '_'));
                }
                a = new zh(null, { google_placement_id: a.join('~') });
              }
              return a instanceof Rh ? a : new Rh({ value: a }, null);
            }
            return a;
          }
          function Uh (a, b) {
            null != a.a || b(a.c);
            return a;
          }
          function Vh () {
            this.a = {};
            this.c = {};
          }
          Vh.prototype.set = function (a, b) {
            this.a[a] = b;
            this.c[a] = a;
          };
          Vh.prototype.get = function (a, b) {
            return void 0 !== this.a[a] ? this.a[a] : b;
          };
          var Wh = { rectangle: 1, horizontal: 2, vertical: 4 };
          function Xh (a, b) {
            for (var c = ['width', 'height'], d = 0; d < c.length; d++) {
              var e = 'google_ad_' + c[d];
              if (!b.hasOwnProperty(e)) {
                var f = K(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f);
              }
            }
          }
          function Yh (a, b) {
            return !(
              (Mc.test(b.google_ad_width) || Lc.test(a.style.width)) &&
              (Mc.test(b.google_ad_height) || Lc.test(a.style.height))
            );
          }
          function Zh (a, b) {
            return (a = $h(a, b)) ? a.y : 0;
          }
          function $h (a, b) {
            try {
              var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
              return { x: d.left - c.left, y: d.top - c.top };
            } catch (e) {
              return null;
            }
          }
          function ai (a, b) {
            do {
              var c = Bc(a, b);
              if (c && 'fixed' == c.position) return !1;
            } while ((a = a.parentElement));
            return !0;
          }
          function bi (a) {
            var b = 0,
              c;
            for (c in Wh) -1 != a.indexOf(c) && (b |= Wh[c]);
            return b;
          }
          function ci (a, b, c, d, e) {
            if (Ld(a) != a) return Md(a) ? 3 : 16;
            if (!(488 > Q(a))) return 4;
            if (!(a.innerHeight >= a.innerWidth)) return 5;
            var f = Q(a);
            if (!f || (f - c) / f > d) a = 6;
            else {
              if ((c = 'true' != e.google_full_width_responsive))
                a: {
                  c = Q(a);
                  for (b = b.parentElement; b; b = b.parentElement)
                    if (
                      (d = Bc(b, a)) &&
                      (e = K(d.width)) &&
                      !(e >= c) &&
                      'visible' != d.overflow
                    ) {
                      c = !0;
                      break a;
                    }
                  c = !1;
                }
              a = c ? 7 : !0;
            }
            return a;
          }
          function di (a, b, c, d) {
            var e = ci(b, c, a, 0.3, d);
            !0 !== e
              ? (a = e)
              : 'true' == d.google_full_width_responsive || ai(c, b)
              ? ei(b)
                ? (a = !0)
                : ((b = Q(b)),
                  (a = b - a),
                  (a = b && 0 <= a ? !0 : b ? (-10 > a ? 11 : 0 > a ? 14 : 12) : 10))
              : (a = 9);
            return a;
          }
          function fi (a, b, c) {
            a = a.style;
            'rtl' == b
              ? T(251)
                ? a.setProperty('margin-right', c, 'important')
                : (a.marginRight = c)
              : T(251)
              ? a.setProperty('margin-left', c, 'important')
              : (a.marginLeft = c);
          }
          function gi (a, b) {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
              if (/^(script|style)$/i.test(b.nodeName)) return !1;
              try {
                var c = Bc(b, a);
              } catch (d) {}
              return (
                !c ||
                ('none' != c.display &&
                  !(
                    'absolute' == c.position &&
                    ('hidden' == c.visibility || 'collapse' == c.visibility)
                  ))
              );
            }
            return !1;
          }
          function hi (a, b) {
            for (var c = 0; 100 > c && b.parentElement; ++c) {
              for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) {
                var f = d[e];
                if (f != b && gi(a, f)) return;
              }
              b = b.parentElement;
              b.style.width = '100%';
              b.style.height = 'auto';
            }
          }
          function ii (a, b, c) {
            a = $h(b, a);
            return 'rtl' == c ? -a.x : a.x;
          }
          function ji (a, b) {
            var c;
            c = (c = b.parentElement) ? ((c = Bc(c, a)) ? c.direction : '') : '';
            if (c) {
              b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition =
                'none';
              b.style.borderSpacing = b.style.padding = '0';
              fi(b, c, '0px');
              b.style.width = Q(a) + 'px';
              if (0 !== ii(a, b, c)) {
                fi(b, c, '0px');
                var d = ii(a, b, c);
                fi(b, c, -1 * d + 'px');
                a = ii(a, b, c);
                0 !== a && a !== d && fi(b, c, (d / (a - d)) * d + 'px');
              }
              b.style.zIndex = 30;
            }
          }
          function ei (a) {
            return T(233) || (a.location && '#bffwroe2etoq' == a.location.hash);
          }
          function V (a, b) {
            this.c = a;
            this.a = b;
          }
          n = V.prototype;
          n.minWidth = function () {
            return this.c;
          };
          n.height = function () {
            return this.a;
          };
          n.Y = function (a) {
            return 300 < a && 300 < this.a ? this.c : Math.min(1200, Math.round(a));
          };
          n.la = function (a) {
            return this.Y(a) + 'x' + this.height();
          };
          n.ba = function () {};
          function ki (a, b, c, d) {
            d =
              void 0 === d
                ? function (f) {
                    return f;
                  }
                : d;
            var e;
            return (
              (a.style && a.style[c] && d(a.style[c])) ||
              ((e = Bc(a, b)) && e[c] && d(e[c])) ||
              null
            );
          }
          function li (a) {
            return function (b) {
              return b.minWidth() <= a;
            };
          }
          function mi (a, b, c, d) {
            var e = a && ni(c, b),
              f = oi(b, d);
            return function (g) {
              return !(e && g.height() >= f);
            };
          }
          function pi (a) {
            return function (b) {
              return b.height() <= a;
            };
          }
          function ni (a, b) {
            return Zh(a, b) < bf(b).clientHeight - 100;
          }
          function qi (a, b) {
            a = Zh(a, b);
            b = bf(b).clientHeight;
            return 0 == b ? null : a / b;
          }
          function ri (a, b) {
            var c = ki(b, a, 'height', K);
            if (c) return c;
            var d = b.style.height;
            b.style.height = 'inherit';
            c = ki(b, a, 'height', K);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do
              (d = b.style && K(b.style.height)) && (c = Math.min(c, d)),
                (d = ki(b, a, 'maxHeight', K)) && (c = Math.min(c, d));
            while ((b = b.parentElement) && 'HTML' != b.tagName);
            return c;
          }
          function oi (a, b) {
            var c = 0 == Fd(a);
            return b && c ? Math.max(250, (2 * bf(a).clientHeight) / 3) : 250;
          }
          function si (a, b) {
            for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
            c.forEach(b, void 0);
          }
          function ti (a) {
            if (1 != a.nodeType) var b = !1;
            else if ((b = 'INS' == a.tagName))
              a: {
                b = ['adsbygoogle-placeholder'];
                a = a.className ? a.className.split(/\s+/) : [];
                for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
                for (d = 0; d < b.length; ++d)
                  if (!c[b[d]]) {
                    b = !1;
                    break a;
                  }
                b = !0;
              }
            return b;
          }
          function ui (a, b, c) {
            switch (c) {
              case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
              case 3:
                if ((c = b.parentNode)) {
                  var d = b.nextSibling;
                  if (d && d.parentNode != c) for (; d && 8 == d.nodeType; ) d = d.nextSibling;
                  c.insertBefore(a, d);
                }
                break;
              case 1:
                b.insertBefore(a, b.firstChild);
                break;
              case 2:
                b.appendChild(a);
            }
            ti(b) &&
              (b.setAttribute('data-init-display', b.style.display), (b.style.display = 'block'));
          }
          function vi (a, b, c) {
            function d (f) {
              f = wi(f);
              return null == f ? !1 : c > f;
            }
            function e (f) {
              f = wi(f);
              return null == f ? !1 : c < f;
            }
            switch (b) {
              case 0:
                return {
                  init: xi(a.previousSibling, e),
                  ea: function (f) {
                    return xi(f.previousSibling, e);
                  },
                  fa: 0,
                };
              case 2:
                return {
                  init: xi(a.lastChild, e),
                  ea: function (f) {
                    return xi(f.previousSibling, e);
                  },
                  fa: 0,
                };
              case 3:
                return {
                  init: xi(a.nextSibling, d),
                  ea: function (f) {
                    return xi(f.nextSibling, d);
                  },
                  fa: 3,
                };
              case 1:
                return {
                  init: xi(a.firstChild, d),
                  ea: function (f) {
                    return xi(f.nextSibling, d);
                  },
                  fa: 3,
                };
            }
            throw Error('Un-handled RelativePosition: ' + b);
          }
          function wi (a) {
            return a.hasOwnProperty('google-ama-order-assurance')
              ? a['google-ama-order-assurance']
              : null;
          }
          function xi (a, b) {
            return a && b(a) ? a : null;
          }
          function yi (a, b) {
            for (var c = 0; c < b.length; c++) {
              var d = b[c],
                e = Sb(d.gb);
              a[e] = d.value;
            }
          }
          function zi (a, b, c, d) {
            this.g = a;
            this.c = b;
            this.f = c;
            this.a = d;
          }
          function Ai (a, b) {
            var c = [];
            try {
              c = b.querySelectorAll(a.g);
            } catch (g) {}
            if (!c.length) return [];
            b = c;
            c = b.length;
            if (0 < c) {
              for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
              b = d;
            } else b = [];
            b = Bi(a, b);
            'number' === typeof a.c &&
              ((c = a.c), 0 > c && (c += b.length), (b = 0 <= c && c < b.length ? [b[c]] : []));
            if ('number' === typeof a.f) {
              c = [];
              for (d = 0; d < b.length; d++) {
                e = Ci(b[d]);
                var f = a.f;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f]);
              }
              b = c;
            }
            return b;
          }
          zi.prototype.toString = function () {
            return JSON.stringify({
              nativeQuery: this.g,
              occurrenceIndex: this.c,
              paragraphIndex: this.f,
              ignoreMode: this.a,
            });
          };
          function Bi (a, b) {
            if (null == a.a) return b;
            switch (a.a) {
              case 1:
                return b.slice(1);
              case 2:
                return b.slice(0, b.length - 1);
              case 3:
                return b.slice(1, b.length - 1);
              case 0:
                return b;
              default:
                throw Error('Unknown ignore mode: ' + a.a);
            }
          }
          function Ci (a) {
            var b = [];
            si(a.getElementsByTagName('p'), function (c) {
              100 <= Di(c) && b.push(c);
            });
            return b;
          }
          function Di (a) {
            if (3 == a.nodeType) return a.length;
            if (1 != a.nodeType || 'SCRIPT' == a.tagName) return 0;
            var b = 0;
            si(a.childNodes, function (c) {
              b += Di(c);
            });
            return b;
          }
          function Ei (a) {
            return 0 == a.length || isNaN(a[0])
              ? a
              : '\\' + (30 + parseInt(a[0], 10)) + ' ' + a.substring(1);
          }
          function Fi (a) {
            if (!a) return null;
            var b = G(a, 7);
            if (G(a, 1) || a.getId() || 0 < G(a, 4).length) {
              var c = a.getId(),
                d = G(a, 1),
                e = G(a, 4);
              b = G(a, 2);
              var f = G(a, 5);
              a = Gi(G(a, 6));
              var g = '';
              d && (g += d);
              c && (g += '#' + Ei(c));
              if (e) for (c = 0; c < e.length; c++) g += '.' + Ei(e[c]);
              b = (e = g) ? new zi(e, b, f, a) : null;
            } else b = b ? new zi(b, G(a, 2), G(a, 5), Gi(G(a, 6))) : null;
            return b;
          }
          var Hi = { 1: 1, 2: 2, 3: 3, 0: 0 };
          function Gi (a) {
            return null == a ? a : Hi[a];
          }
          var Ii = { 1: 0, 2: 1, 3: 2, 4: 3 };
          function Ji (a) {
            switch (G(a, 8)) {
              case 1:
              case 2:
                if (null == a) var b = null;
                else
                  (b = I(a, U, 1)),
                    null == b
                      ? (b = null)
                      : ((a = G(a, 2)), (b = null == a ? null : new vh({ ra: [b], Ca: a })));
                return null != b
                  ? new Rh({ value: b }, null)
                  : new Rh(null, Error('Missing dimension when creating placement id'));
              case 3:
                return new Rh(null, Error('Missing dimension when creating placement id'));
              default:
                return new Rh(null, Error('Invalid type: ' + G(a, 8)));
            }
          }
          function Ki () {}
          function Li (a, b, c) {
            var d = Jh(c, b + 1);
            return !Qa(a, function (e) {
              return e.left < d.right && d.left < e.right && e.top < d.bottom && d.top < e.bottom;
            });
          }
          function Mi () {
            this.a = new Vh();
          }
          Mi.prototype.set = function (a, b) {
            var c = this.a.get(a);
            c || ((c = new Kh()), this.a.set(a, c));
            c.add(b);
          };
          function Ni (a, b) {
            function c () {
              d.push({ anchor: e.anchor, position: e.position });
              return e.anchor == b.anchor && e.position == b.position;
            }
            for (var d = [], e = a; e; ) {
              switch (e.position) {
                case 1:
                  if (c()) return d;
                  e.position = 2;
                case 2:
                  if (c()) return d;
                  if (e.anchor.firstChild) {
                    e = { anchor: e.anchor.firstChild, position: 1 };
                    continue;
                  } else e.position = 3;
                case 3:
                  if (c()) return d;
                  e.position = 4;
                case 4:
                  if (c()) return d;
              }
              for (
                ;
                e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;

              ) {
                e = { anchor: e.anchor.parentNode, position: 3 };
                if (c()) return d;
                e.position = 4;
                if (c()) return d;
              }
              e && e.anchor.nextSibling
                ? (e = { anchor: e.anchor.nextSibling, position: 1 })
                : (e = null);
            }
            return d;
          }
          function Oi (a, b) {
            this.c = a;
            this.a = b;
          }
          function Pi (a, b) {
            var c = new Mi(),
              d = new Kh();
            b.forEach(function (e) {
              if (I(e, ch, 1)) {
                e = I(e, ch, 1);
                if (I(e, $g, 1) && I(I(e, $g, 1), U, 1) && I(e, $g, 2) && I(I(e, $g, 2), U, 1)) {
                  var f = Qi(a, I(I(e, $g, 1), U, 1)),
                    g = Qi(a, I(I(e, $g, 2), U, 1));
                  if (f && g)
                    for (
                      f = y(
                        Ni(
                          { anchor: f, position: G(I(e, $g, 1), 2) },
                          { anchor: g, position: G(I(e, $g, 2), 2) }
                        )
                      ),
                        g = f.next();
                      !g.done;
                      g = f.next()
                    )
                      (g = g.value), c.set(Ea(g.anchor), g.position);
                }
                I(e, $g, 3) &&
                  I(I(e, $g, 3), U, 1) &&
                  (f = Qi(a, I(I(e, $g, 3), U, 1))) &&
                  c.set(Ea(f), G(I(e, $g, 3), 2));
              } else I(e, dh, 2) ? Ri(a, I(e, dh, 2), c) : I(e, eh, 3) && Si(a, I(e, eh, 3), d);
            });
            return new Oi(c, d);
          }
          function Ri (a, b, c) {
            I(b, U, 1) &&
              (a = Ti(a, I(b, U, 1))) &&
              a.forEach(function (d) {
                d = Ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3);
              });
          }
          function Si (a, b, c) {
            I(b, U, 1) &&
              (a = Ti(a, I(b, U, 1))) &&
              a.forEach(function (d) {
                c.add(Ea(d));
              });
          }
          function Qi (a, b) {
            return (a = Ti(a, b)) && 0 < a.length ? a[0] : null;
          }
          function Ti (a, b) {
            return (b = Fi(b)) ? Ai(b, a) : null;
          }
          function Ui (a, b) {
            if (!a) return !1;
            a = Bc(a, b);
            if (!a) return !1;
            a = a.cssFloat || a.styleFloat;
            return 'left' == a || 'right' == a;
          }
          function Vi (a) {
            for (a = a.previousSibling; a && 1 != a.nodeType; ) a = a.previousSibling;
            return a ? a : null;
          }
          function Wi (a) {
            return !!a.nextSibling || (!!a.parentNode && Wi(a.parentNode));
          }
          function Xi (a, b) {
            return a && null != G(a, 4) && b[G(I(a, gh, 4), 2)] ? !1 : !0;
          }
          function Yi (a) {
            var b = {};
            a &&
              G(a, 6).forEach(function (c) {
                b[c] = !0;
              });
            return b;
          }
          function Zi (a, b, c, d) {
            this.a = A;
            this.m = a;
            this.c = b;
            this.j = d || null;
            this.v = (this.h = c) ? Pi(A.document, J(c, ah, 5)) : Pi(A.document, []);
            this.f = 0;
            this.g = !1;
          }
          function $i (a) {
            return new Ki(aj(a).numAutoAdsPlaced || 0, J(a.c, hh, 1).length);
          }
          function bj (a, b) {
            if (a.g) return !0;
            a.g = !0;
            var c = J(a.c, hh, 1);
            a.f = 0;
            var d = Yi(a.h);
            var e = (e = a.h) ? Ta(G(e, 11), 1) : !1;
            var f;
            if ((f = !e && I(a.c, rh, 15) && ec(I(a.c, rh, 15), 12)))
              a: {
                f = Qh(a.a);
                f = null !== f ? J(f, Nh, 5) : null;
                var g = Qh(a.a);
                var h = null != g ? I(g, Lh, 6) || null : null;
                if (null == f) f = !1;
                else {
                  g = 4;
                  var k = 0;
                  h && ((g = G(h, 1) || g), (k = G(h, 3) || k));
                  h = new Kh([2, 1, 0]);
                  I(a.c, rh, 15) && ec(I(a.c, rh, 15), 15) && h.add(4);
                  for (var l = [], m = 0; m < f.length; m++) {
                    var p = aj(a).numAutoAdsPlaced || 0;
                    var t = Qh(a.a);
                    t = null !== t && null != G(t, 8) ? G(t, 8) : 0;
                    if (p + t >= g) {
                      f = !0;
                      break a;
                    }
                    p = G(f[m], 1);
                    if (null == p) break;
                    t = c[p];
                    var v = I(f[m], Mh, 2);
                    null != v &&
                      null != cc(v, 1) &&
                      null != cc(v, 2) &&
                      null != cc(v, 3) &&
                      ((v = new Ih(cc(v, 1), cc(v, 2), cc(v, 3))),
                      Li(l, k, v) &&
                        ((p = cj(a, t, p, b, d, h)),
                        null != p &&
                          null != p.X &&
                          ((p = p.X.getBoundingClientRect()), l.push(p))));
                  }
                  f = 0 < (aj(a).numAutoAdsPlaced || 0);
                }
              }
            if (f) return !0;
            f = Qh(a.a);
            if (null !== f && ec(f, 2)) return (aj(a).eatf = !0), Ve(7, [!0, 0, !1]), !0;
            f = new Kh([2]);
            !e && I(a.c, rh, 15) && ec(I(a.c, rh, 15), 15) && f.add(4);
            for (e = 0; e < c.length; e++) if (cj(a, c[e], e, b, d, f)) return !0;
            Ve(7, [!1, a.f, !1]);
            return !1;
          }
          function cj (a, b, c, d, e, f) {
            if (!I(b, gh, 4) || !f.contains(G(I(b, gh, 4), 1)) || 1 !== G(b, 8) || !Xi(b, e))
              return null;
            a.f++;
            if ((b = dj(a, b, d, e)))
              (d = aj(a)),
                d.numAutoAdsPlaced || (d.numAutoAdsPlaced = 0),
                null == d.placed && (d.placed = []),
                d.numAutoAdsPlaced++,
                d.placed.push({ index: c, element: b.X }),
                Ve(7, [!1, a.f, !0]);
            return b;
          }
          function dj (a, b, c, d) {
            if (!Xi(b, d) || 1 != G(b, 8)) return null;
            d = I(b, U, 1);
            if (!d) return null;
            d = Fi(d);
            if (!d) return null;
            d = Ai(d, a.a.document);
            if (0 == d.length) return null;
            d = d[0];
            var e = G(b, 2);
            e = Ii[e];
            e = void 0 === e ? null : e;
            var f;
            if (!(f = null == e)) {
              a: {
                f = a.a;
                switch (e) {
                  case 0:
                    f = Ui(Vi(d), f);
                    break a;
                  case 3:
                    f = Ui(d, f);
                    break a;
                  case 2:
                    var g = d.lastChild;
                    f = Ui(g ? (1 == g.nodeType ? g : Vi(g)) : null, f);
                    break a;
                }
                f = !1;
              }
              if ((c = !f && !(!c && 2 == e && !Wi(d))))
                (c = 1 == e || 2 == e ? d : d.parentNode),
                  (c = !(c && !ti(c) && 0 >= c.offsetWidth));
              f = !c;
            }
            if (!(c = f)) {
              c = a.v;
              f = G(b, 2);
              g = Ea(d);
              g = c.c.a.get(g);
              if (!(g = g ? g.contains(f) : !1))
                a: {
                  if (c.a.contains(Ea(d)))
                    switch (f) {
                      case 2:
                      case 3:
                        g = !0;
                        break a;
                      default:
                        g = !1;
                        break a;
                    }
                  for (f = d.parentElement; f; ) {
                    if (c.a.contains(Ea(f))) {
                      g = !0;
                      break a;
                    }
                    f = f.parentElement;
                  }
                  g = !1;
                }
              c = g;
            }
            if (c) return null;
            c = I(b, fh, 3);
            f = {};
            c && ((f.Ja = G(c, 1)), (f.sa = G(c, 2)), (f.clearBoth = !!dc(c, 3)));
            c = I(b, gh, 4) && G(I(b, gh, 4), 2) ? G(I(b, gh, 4), 2) : null;
            c = Bh(c);
            g = null == G(b, 12) ? null : G(b, 12);
            g = null == g ? null : new zh(null, { google_ml_rank: g });
            b = T(1012) ? ej(a, b) : null;
            b = Ah(a.j, c, g, b);
            c = a.a;
            a = a.m;
            var h = c.document,
              k = f.clearBoth || !1;
            g = rc(new sc(h).a, 'DIV');
            var l = g.style;
            l.width = '100%';
            l.height = 'auto';
            l.clear = k ? 'both' : 'none';
            k = g.style;
            k.textAlign = 'center';
            f.Va && yi(k, f.Va);
            h = rc(new sc(h).a, 'INS');
            k = h.style;
            k.display = 'block';
            k.margin = 'auto';
            k.backgroundColor = 'transparent';
            f.Ja && (k.marginTop = f.Ja);
            f.sa && (k.marginBottom = f.sa);
            f.Ma && yi(k, f.Ma);
            g.appendChild(h);
            f = { ka: g, X: h };
            f.X.setAttribute('data-ad-format', 'auto');
            g = [];
            if ((h = b && b.ta)) f.ka.className = h.join(' ');
            h = f.X;
            h.className = 'adsbygoogle';
            h.setAttribute('data-ad-client', a);
            g.length && h.setAttribute('data-ad-channel', g.join('+'));
            a: {
              try {
                var m = f.ka;
                var p = void 0 === p ? 0 : p;
                if (T(313)) {
                  p = void 0 === p ? 0 : p;
                  var t = vi(d, e, p);
                  if (t.init) {
                    var v = t.init;
                    for (d = v; (d = t.ea(d)); ) v = d;
                    var x = { anchor: v, position: t.fa };
                  } else x = { anchor: d, position: e };
                  m['google-ama-order-assurance'] = p;
                  ui(m, x.anchor, x.position);
                } else ui(m, d, e);
                b: {
                  var w = f.X;
                  w.setAttribute('data-adsbygoogle-status', 'reserved');
                  w.className += ' adsbygoogle-noablate';
                  m = { element: w };
                  var F = b && b.Ba;
                  if (w.hasAttribute('data-pub-vars')) {
                    try {
                      F = JSON.parse(w.getAttribute('data-pub-vars'));
                    } catch (wa) {
                      break b;
                    }
                    w.removeAttribute('data-pub-vars');
                  }
                  F && (m.params = F);
                  (c.adsbygoogle = c.adsbygoogle || []).push(m);
                }
              } catch (wa) {
                (w = f.ka) &&
                  w.parentNode &&
                  ((F = w.parentNode),
                  F.removeChild(w),
                  ti(F) && (F.style.display = F.getAttribute('data-init-display') || 'none'));
                w = !1;
                break a;
              }
              w = !0;
            }
            return w ? f : null;
          }
          function aj (a) {
            return (a.a.google_ama_state = a.a.google_ama_state || {});
          }
          function ej (a, b) {
            return Sh(
              Uh(Th(Ji(b)), function (c) {
                aj(a).exception = c;
              })
            );
          }
          function fj () {
            this.c = new gj(this);
            this.a = 0;
          }
          fj.prototype.resolve = function (a) {
            hj(this);
            this.a = 1;
            this.g = a;
            ij(this.c);
          };
          fj.prototype.reject = function (a) {
            hj(this);
            this.a = 2;
            this.f = a;
            ij(this.c);
          };
          function hj (a) {
            if (0 != a.a) throw Error('Already resolved/rejected.');
          }
          function gj (a) {
            this.a = a;
          }
          gj.prototype.then = function (a, b) {
            if (this.c) throw Error('Then functions already set.');
            this.c = a;
            this.f = b;
            ij(this);
          };
          function ij (a) {
            switch (a.a.a) {
              case 0:
                break;
              case 1:
                a.c && a.c(a.a.g);
                break;
              case 2:
                a.f && a.f(a.a.f);
                break;
              default:
                throw Error('Unhandled deferred state.');
            }
          }
          function jj (a, b) {
            this.exception = b;
          }
          function kj (a, b) {
            this.f = A;
            this.a = a;
            this.c = b;
          }
          kj.prototype.start = function () {
            this.g();
          };
          kj.prototype.g = function () {
            try {
              switch (this.f.document.readyState) {
                case 'complete':
                case 'interactive':
                  bj(this.a, !0);
                  lj(this);
                  break;
                default:
                  bj(this.a, !1) ? lj(this) : this.f.setTimeout(Ja(this.g, this), 100);
              }
            } catch (a) {
              lj(this, a);
            }
          };
          function lj (a, b) {
            try {
              a.c.resolve(new jj($i(a.a), b));
            } catch (c) {
              a.c.reject(c);
            }
          }
          function mj (a) {
            Fh(a, { atf: 1 });
          }
          function nj (a, b) {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            Fh(a, { atf: 0 });
          }
          function oj () {
            this.debugCard = null;
            this.debugCardRequested = !1;
          }
          function pj () {
            var a = this;
            this.promise = new q.Promise(function (b, c) {
              a.resolve = b;
              a.reject = c;
            });
          }
          function qj () {
            var a = new pj();
            this.promise = a.promise;
            this.resolve = a.resolve;
          }
          function rj (a) {
            A.google_llp || (A.google_llp = {});
            var b = A.google_llp;
            b[7] || ((b[7] = new qj()), a && a());
            return b[7];
          }
          function sj (a) {
            return rj(function () {
              Ac(A.document, a);
            }).promise;
          }
          function tj (a) {
            var b = {},
              c = {};
            return (c.enable_page_level_ads = ((b.pltais = !0), b)), (c.google_ad_client = a), c;
          }
          function uj (a) {
            var b = ef(A, 12, a.google_ad_client);
            a = 'google_ad_host' in a;
            var c = 0.5 < Math.random(),
              d = Pe(A.location, 'google_ads_preview');
            return (b && !a && c) || d;
          }
          function vj (a) {
            if (A.google_apltlad || Ld(A) != A || !a.google_ad_client) return null;
            var b = uj(a);
            A.google_apltlad = !0;
            var c = tj(a.google_ad_client),
              d = c.enable_page_level_ads;
            Gc(a, function (e, f) {
              Fe[f] && 'google_ad_client' != f && (d[f] = e);
            });
            if (b) d.google_ad_channel = 'AutoInsertAutoAdCode';
            else if (
              ((d.google_pgb_reactive = 7), 'google_ad_section' in a || 'google_ad_region' in a)
            )
              d.google_ad_section = a.google_ad_section || a.google_ad_region;
            return c;
          }
          function wj (a) {
            return Da(a.enable_page_level_ads) && 7 == a.enable_page_level_ads.google_pgb_reactive;
          }
          function te (a) {
            a.shv = hd();
          }
          me.Ga(!id);
          function xj (a, b) {
            return Zh(b, a) + ki(b, a, 'height', K);
          }
          function yj (a) {
            E(this, a, null, null);
          }
          B(yj, D);
          function zj (a) {
            var b = this;
            this.a = a;
            a.google_iframe_oncopy ||
              (a.google_iframe_oncopy = {
                handlers: {},
                upd: function (c, d) {
                  var e = Aj('rx', c),
                    f = Number;
                  a: {
                    if (c && (c = c.match('dt=([^&]+)')) && 2 == c.length) {
                      c = c[1];
                      break a;
                    }
                    c = '';
                  }
                  f = f(c);
                  f = new Date().getTime() - f;
                  e = e.replace(
                    /&dtd=(\d+|-?M)/,
                    '&dtd=' + (100000 <= f ? 'M' : 0 <= f ? f : '-M')
                  );
                  b.set(d, e);
                  return e;
                },
              });
            this.c = a.google_iframe_oncopy;
          }
          zj.prototype.set = function (a, b) {
            var c = this;
            this.c.handlers[a] = b;
            this.a.addEventListener &&
              this.a.addEventListener(
                'load',
                function () {
                  var d = c.a.document.getElementById(a);
                  try {
                    var e = d.contentWindow.document;
                    if (d.onload && e && (!e.body || !e.body.firstChild)) d.onload();
                  } catch (f) {}
                },
                !1
              );
          };
          function Aj (a, b) {
            var c = new RegExp('\\b' + a + '=(\\d+)'),
              d = c.exec(b);
            d && (b = b.replace(c, a + '=' + (+d[1] + 1 || 1)));
            return b;
          }
          var Bj,
            Cj =
              'var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}';
          var W = Cj;
          /[\x00&<>"']/.test(W) &&
            (-1 != W.indexOf('&') && (W = W.replace(vb, '&amp;')),
            -1 != W.indexOf('<') && (W = W.replace(wb, '&lt;')),
            -1 != W.indexOf('>') && (W = W.replace(xb, '&gt;')),
            -1 != W.indexOf('"') && (W = W.replace(yb, '&quot;')),
            -1 != W.indexOf("'") && (W = W.replace(zb, '&#39;')),
            -1 != W.indexOf('\0') && (W = W.replace(Ab, '&#0;')));
          Cj = W;
          Bj = Cj;
          var Dj = null;
          function X (a, b, c, d) {
            d = void 0 === d ? !1 : d;
            V.call(this, a, b);
            this.aa = c;
            this.Ta = d;
          }
          z(X, V);
          X.prototype.ha = function () {
            return this.aa;
          };
          X.prototype.ba = function (a, b, c) {
            b.google_ad_resize || ((c.style.height = this.height() + 'px'), (b.rpe = !0));
          };
          function Ej (a) {
            return function (b) {
              return !!(b.aa & a);
            };
          }
          var Fj = Ub('script');
          function Gj (a, b, c, d, e, f, g, h, k, l, m, p, t, v) {
            this.C = a;
            this.a = b;
            this.aa = void 0 === c ? null : c;
            this.f = void 0 === d ? null : d;
            this.N = void 0 === e ? null : e;
            this.c = void 0 === f ? null : f;
            this.g = void 0 === g ? null : g;
            this.v = void 0 === h ? !1 : h;
            this.m = void 0 === k ? !1 : k;
            this.K = void 0 === l ? null : l;
            this.L = void 0 === m ? null : m;
            this.h = void 0 === p ? null : p;
            this.j = void 0 === t ? null : t;
            this.M = void 0 === v ? null : v;
            this.Z = this.I = this.H = null;
          }
          function Hj (a, b, c) {
            null != a.aa && (c.google_responsive_formats = a.aa);
            null != a.N && (c.google_safe_for_responsive_override = a.N);
            null != a.c &&
              (!0 === a.c
                ? (c.google_full_width_responsive_allowed = !0)
                : ((c.google_full_width_responsive_allowed = !1), (c.gfwrnwer = a.c)));
            null != a.g && !0 !== a.g && (c.gfwrnher = a.g);
            a.v && (c.google_bfa = a.v);
            a.m && (c.ebfa = a.m);
            var d = a.j || c.google_ad_width;
            null != d && (c.google_resizing_width = d);
            d = a.h || c.google_ad_height;
            null != d && (c.google_resizing_height = d);
            d = a.a.Y(b);
            var e = a.a.height();
            c.google_ad_resize ||
              ((c.google_ad_width = d),
              (c.google_ad_height = e),
              (c.google_ad_format = a.a.la(b)),
              (c.google_responsive_auto_format = a.C),
              null != a.f && (c.armr = a.f),
              (c.google_ad_resizable = !0),
              (c.google_override_format = 1),
              (c.google_loader_features_used = 128),
              !0 === a.c && (c.gfwrnh = a.a.height() + 'px'));
            null != a.K && (c.gfwroml = a.K);
            null != a.L && (c.gfwromr = a.L);
            null != a.h && (c.gfwroh = a.h);
            null != a.j && (c.gfwrow = a.j);
            null != a.M && (c.gfwroz = a.M);
            null != a.H && (c.gml = a.H);
            null != a.I && (c.gmr = a.I);
            null != a.Z && (c.gzi = a.Z);
            b = Jd();
            b = Md(b) || b;
            Pe(b.location, 'google_responsive_slot_debug') &&
              (c.ds =
                'outline:thick dashed ' +
                (d && e ? (!0 !== a.c || !0 !== a.g ? '#ffa500' : '#0f0') : '#f00') +
                ' !important;');
            Pe(b.location, 'google_responsive_dummy_ad') &&
              (Ta([1, 2, 3, 4, 5, 6, 7, 8], a.C) || 1 === a.f) &&
              2 !== a.f &&
              ((a = JSON.stringify({
                googMsgType: 'adpnt',
                key_value: [{ key: 'qid', value: 'DUMMY_AD' }],
              })),
              (c.dash =
                '<' +
                Fj +
                ">window.top.postMessage('" +
                a +
                "', '*');\n          </" +
                Fj +
                '>\n          <div id="dummyAd" style="width:' +
                d +
                'px;height:' +
                e +
                'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
                d +
                'x' +
                e +
                '</p>\n            <p>Rendered size:' +
                d +
                'x' +
                e +
                '</p>\n          </div>'));
          }
          var Ij = {},
            Jj =
              ((Ij.image_stacked = 1 / 1.91),
              (Ij.image_sidebyside = 1 / 3.82),
              (Ij.mobile_banner_image_sidebyside = 1 / 3.82),
              (Ij.pub_control_image_stacked = 1 / 1.91),
              (Ij.pub_control_image_sidebyside = 1 / 3.82),
              (Ij.pub_control_image_card_stacked = 1 / 1.91),
              (Ij.pub_control_image_card_sidebyside = 1 / 3.74),
              (Ij.pub_control_text = 0),
              (Ij.pub_control_text_card = 0),
              Ij),
            Kj = {},
            Lj =
              ((Kj.image_stacked = 80),
              (Kj.image_sidebyside = 0),
              (Kj.mobile_banner_image_sidebyside = 0),
              (Kj.pub_control_image_stacked = 80),
              (Kj.pub_control_image_sidebyside = 0),
              (Kj.pub_control_image_card_stacked = 85),
              (Kj.pub_control_image_card_sidebyside = 0),
              (Kj.pub_control_text = 80),
              (Kj.pub_control_text_card = 80),
              Kj),
            Mj = {},
            Nj =
              ((Mj.pub_control_image_stacked = 100),
              (Mj.pub_control_image_sidebyside = 200),
              (Mj.pub_control_image_card_stacked = 150),
              (Mj.pub_control_image_card_sidebyside = 250),
              (Mj.pub_control_text = 100),
              (Mj.pub_control_text_card = 150),
              Mj);
          function Oj (a) {
            var b = 0;
            a.F && b++;
            a.A && b++;
            a.B && b++;
            if (3 > b)
              return {
                D:
                  'Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.',
              };
            b = a.F.split(',');
            var c = a.B.split(',');
            a = a.A.split(',');
            if (b.length !== c.length || b.length !== a.length)
              return {
                D:
                  'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"',
              };
            if (2 < b.length)
              return {
                D:
                  'The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing ' +
                  (b.length +
                    ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".'),
              };
            for (var d = [], e = [], f = 0; f < b.length; f++) {
              var g = Number(c[f]);
              if (isNaN(g) || 0 === g)
                return { D: "Wrong value '" + c[f] + "' for data-matched-content-rows-num." };
              d.push(g);
              g = Number(a[f]);
              if (isNaN(g) || 0 === g)
                return { D: "Wrong value '" + a[f] + "' for data-matched-content-columns-num." };
              e.push(g);
            }
            return { B: d, A: e, za: b };
          }
          function Pj (a) {
            return 1200 <= a
              ? { width: 1200, height: 600 }
              : 850 <= a
              ? { width: a, height: Math.floor(0.5 * a) }
              : 550 <= a
              ? { width: a, height: Math.floor(0.6 * a) }
              : 468 <= a
              ? { width: a, height: Math.floor(0.7 * a) }
              : { width: a, height: Math.floor(3.44 * a) };
          }
          var Qj = [
            'google_content_recommendation_ui_type',
            'google_content_recommendation_columns_num',
            'google_content_recommendation_rows_num',
          ];
          function Rj (a, b) {
            V.call(this, a, b);
          }
          z(Rj, V);
          Rj.prototype.Y = function (a) {
            return Math.min(1200, Math.max(this.minWidth(), Math.round(a)));
          };
          function Sj (a, b) {
            Tj(a, b);
            if ('pedestal' == b.google_content_recommendation_ui_type)
              return new Gj(9, new Rj(a, Math.floor(a * b.google_phwr)));
            var c = tc();
            468 > a
              ? c
                ? ((c = a - 8 - 8),
                  (c =
                    Math.floor(c / 1.91 + 70) +
                    Math.floor(
                      11 *
                        (c * Jj.mobile_banner_image_sidebyside +
                          Lj.mobile_banner_image_sidebyside) +
                        96
                    )),
                  (a = { W: a, U: c, A: 1, B: 12, F: 'mobile_banner_image_sidebyside' }))
                : ((a = Pj(a)),
                  (a = { W: a.width, U: a.height, A: 1, B: 13, F: 'image_sidebyside' }))
              : ((a = Pj(a)), (a = { W: a.width, U: a.height, A: 4, B: 2, F: 'image_stacked' }));
            Uj(b, a);
            return new Gj(9, new Rj(a.W, a.U));
          }
          function Vj (a, b) {
            Tj(a, b);
            var c = Oj({
              B: b.google_content_recommendation_rows_num,
              A: b.google_content_recommendation_columns_num,
              F: b.google_content_recommendation_ui_type,
            });
            if (c.D) a = { W: 0, U: 0, A: 0, B: 0, F: 'image_stacked', D: c.D };
            else {
              var d = 2 === c.za.length && 468 <= a ? 1 : 0;
              var e = c.za[d];
              e = 0 === e.indexOf('pub_control_') ? e : 'pub_control_' + e;
              var f = Nj[e];
              for (var g = c.A[d]; a / g < f && 1 < g; ) g--;
              f = g;
              c = c.B[d];
              d = Math.floor((((a - 8 * f - 8) / f) * Jj[e] + Lj[e]) * c + 8 * c + 8);
              a =
                1500 < a
                  ? { width: 0, height: 0, oa: 'Calculated slot width is too large: ' + a }
                  : 1500 < d
                  ? { width: 0, height: 0, oa: 'Calculated slot height is too large: ' + d }
                  : { width: a, height: d };
              a = a.oa
                ? { W: 0, U: 0, A: 0, B: 0, F: e, D: a.oa }
                : { W: a.width, U: a.height, A: f, B: c, F: e };
            }
            if (a.D) throw new N(a.D);
            Uj(b, a);
            return new Gj(9, new Rj(a.W, a.U));
          }
          function Tj (a, b) {
            if (0 >= a)
              throw new N(
                'Invalid responsive width from Matched Content slot ' +
                  b.google_ad_slot +
                  ': ' +
                  a +
                  '. Please ensure to put this Matched Content slot into a non-zero width div container.'
              );
          }
          function Uj (a, b) {
            a.google_content_recommendation_ui_type = b.F;
            a.google_content_recommendation_columns_num = b.A;
            a.google_content_recommendation_rows_num = b.B;
          }
          function Wj (a, b) {
            V.call(this, a, b);
          }
          z(Wj, V);
          Wj.prototype.Y = function () {
            return this.minWidth();
          };
          Wj.prototype.ba = function (a, b, c) {
            ji(a, c);
            b.google_ad_resize || ((c.style.height = this.height() + 'px'), (b.rpe = !0));
          };
          var Xj = {
            'image-top': function (a) {
              return 600 >= a ? 284 + 0.414 * (a - 250) : 429;
            },
            'image-middle': function (a) {
              return 500 >= a ? 196 - 0.13 * (a - 250) : 164 + 0.2 * (a - 500);
            },
            'image-side': function (a) {
              return 500 >= a ? 205 - 0.28 * (a - 250) : 134 + 0.21 * (a - 500);
            },
            'text-only': function (a) {
              return 500 >= a ? 187 - 0.228 * (a - 250) : 130;
            },
            'in-article': function (a) {
              return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200;
            },
          };
          function Yj (a, b) {
            V.call(this, a, b);
          }
          z(Yj, V);
          Yj.prototype.Y = function () {
            return Math.min(1200, this.minWidth());
          };
          function Zj (a, b, c, d, e) {
            var f = e.google_ad_layout || 'image-top';
            if ('in-article' == f && 'false' != e.google_full_width_responsive) {
              var g = ci(b, c, a, 0.2, e);
              if (!0 !== g) e.gfwrnwer = g;
              else if ((g = Q(b)))
                (e.google_full_width_responsive_allowed = !0),
                  c.parentElement && (hi(b, c), ji(b, c), (a = g));
            }
            if (250 > a)
              throw new N('Fluid responsive ads must be at least 250px wide: availableWidth=' + a);
            a = Math.min(1200, Math.floor(a));
            if (d && 'in-article' != f) {
              f = Math.ceil(d);
              if (50 > f)
                throw new N('Fluid responsive ads must be at least 50px tall: height=' + f);
              return new Gj(11, new V(a, f));
            }
            if ('in-article' != f && (d = e.google_ad_layout_key)) {
              f = '' + d;
              b = Math.pow(10, 3);
              if ((d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length)) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e;
              } else b = null;
              if (!b) throw new N('Invalid data-ad-layout-key value: ' + f);
              f = (a + -725) / 1000;
              c = 0;
              d = 1;
              e = b.length;
              for (g = 0; g < e; g++) (c += b[g] * d), (d *= f);
              f = Math.ceil(1000 * c - -725 + 10);
              if (isNaN(f)) throw new N('Invalid height: height=' + f);
              if (50 > f)
                throw new N('Fluid responsive ads must be at least 50px tall: height=' + f);
              if (1200 < f)
                throw new N('Fluid responsive ads must be at most 1200px tall: height=' + f);
              return new Gj(11, new V(a, f));
            }
            d = Xj[f];
            if (!d) throw new N('Invalid data-ad-layout value: ' + f);
            c = ni(c, b);
            b = Q(b);
            b = 'in-article' !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new Gj(11, 'in-article' == f ? new Yj(a, b) : new V(a, b));
          }
          function ak (a) {
            return function (b) {
              for (var c = a.length - 1; 0 <= c; --c) if (!a[c](b)) return !1;
              return !0;
            };
          }
          function bk (a, b, c) {
            for (var d = a.length, e = null, f = 0; f < d; ++f) {
              var g = a[f];
              if (b(g)) {
                if (!c || c(g)) return g;
                null === e && (e = g);
              }
            }
            return e;
          }
          var Y = [
              new X(970, 90, 2),
              new X(728, 90, 2),
              new X(468, 60, 2),
              new X(336, 280, 1),
              new X(320, 100, 2),
              new X(320, 50, 2),
              new X(300, 600, 4),
              new X(300, 250, 1),
              new X(250, 250, 1),
              new X(234, 60, 2),
              new X(200, 200, 1),
              new X(180, 150, 1),
              new X(160, 600, 4),
              new X(125, 125, 1),
              new X(120, 600, 4),
              new X(120, 240, 4),
              new X(120, 120, 1, !0),
            ],
            ck = [
              Y[6],
              Y[12],
              Y[3],
              Y[0],
              Y[7],
              Y[14],
              Y[1],
              Y[8],
              Y[10],
              Y[4],
              Y[15],
              Y[2],
              Y[11],
              Y[5],
              Y[13],
              Y[9],
              Y[16],
            ];
          function dk (a, b, c, d, e) {
            'false' == e.google_full_width_responsive
              ? (c = { s: a, u: 1 })
              : ('autorelaxed' == b && e.google_full_width_responsive) ||
                ek(b) ||
                e.google_ad_resize
              ? (488 > Q(c) && (ei(c) || T(1002)) && hi(c, d),
                (b = di(a, c, d, e)),
                (c = !0 !== b ? { s: a, u: b } : { s: Q(c) || a, u: !0 }))
              : (c = { s: a, u: 2 });
            b = c.u;
            return !0 !== b ? { s: a, u: b } : d.parentElement ? { s: c.s, u: b } : { s: a, u: b };
          }
          function fk (a, b, c, d, e) {
            var f = ve(247, function () {
                return dk(a, b, c, d, e);
              }),
              g = f.s;
            f = f.u;
            var h = !0 === f,
              k = K(d.style.width),
              l = K(d.style.height),
              m = gk(g, b, c, d, e, h);
            g = m.V;
            h = m.R;
            var p = m.O,
              t = m.P,
              v = m.ha;
            m = m.ya;
            var x = hk(b, v),
              w,
              F = (w = ki(d, c, 'marginLeft', K)) ? w + 'px' : '',
              wa = (w = ki(d, c, 'marginRight', K)) ? w + 'px' : '';
            w = ki(d, c, 'zIndex') || '';
            return new Gj(x, g, v, null, m, f, h, p, t, F, wa, l, k, w);
          }
          function ek (a) {
            return 'auto' == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a);
          }
          function gk (a, b, c, d, e, f) {
            b = 'auto' == b ? (0.25 >= a / Math.min(1200, Q(c)) ? 4 : 3) : bi(b);
            var g = !1,
              h = !1;
            if (488 > Q(c)) {
              var k = ai(d, c);
              var l = ni(d, c);
              g = !l && k;
              h = l && k;
            }
            l = 488 > Q(c);
            var m = [li(a), Ej(b)];
            ei(c) || m.push(mi(l, c, d, h));
            null != e.google_max_responsive_height && m.push(pi(e.google_max_responsive_height));
            var p = [
              function (v) {
                return !v.Ta;
              },
            ];
            (!g && !h) || ei(c) || ((g = ri(c, d)), p.push(pi(g)));
            var t =
              l && !f && 3 === b && ik(c)
                ? new X(a, Math.floor(a / 1.2), 1)
                : bk(ck.slice(0), ak(m), ak(p));
            if (!t) throw new N('No slot size for availableWidth=' + a);
            p = ve(248, function () {
              var v;
              a: if (f) {
                if (e.gfwrnh && (v = K(e.gfwrnh))) {
                  v = { V: new Wj(a, v), R: !0, O: !1, P: !1 };
                  break a;
                }
                v = !1;
                var x = bf(c).clientHeight,
                  w = Zh(d, c),
                  F = c.google_lpabyc,
                  wa = qi(d, c);
                wa &&
                  2 < wa &&
                  !c.google_bfabyc &&
                  (!F || w - F > x) &&
                  ((x = 0.9 * bf(c).clientHeight),
                  (w = Math.min(x, jk(c, d, e))),
                  x &&
                    w == x &&
                    ((w = c.google_pbfabyc), (v = !w), w || (c.google_pbfabyc = Zh(d, c) + x)));
                x = a / 1.2;
                if (ei(c)) w = x;
                else if (((w = Math.min(x, jk(c, d, e))), w < 0.5 * x || 100 > w)) w = x;
                T(282) && !ni(d, c) && (w = Math.max(w, 0.5 * bf(c).clientHeight));
                v = { V: new Wj(a, Math.floor(w)), R: w < x ? 102 : !0, O: !1, P: v };
              } else v = { V: t, R: 100, O: !1, P: !1 };
              return v;
            });
            g = p.V;
            l = p.R;
            m = p.O;
            p = p.P;
            return 'in-article' === e.google_ad_layout && kk(c)
              ? { V: lk(a, c, d, g, e), R: !1, O: !1, P: !1, ha: b, ya: k }
              : { V: g, R: l, O: m, P: p, ha: b, ya: k };
          }
          function jk (a, b, c) {
            if (c.google_resizing_allowed || 'true' == c.google_full_width_responsive)
              a = Infinity;
            else {
              c = Infinity;
              do {
                var d = ki(b, a, 'height', K);
                d && (c = Math.min(c, d));
                (d = ki(b, a, 'maxHeight', K)) && (c = Math.min(c, d));
              } while ((b = b.parentElement) && 'HTML' != b.tagName);
              a = c;
            }
            return a;
          }
          function hk (a, b) {
            if ('auto' == a) return 1;
            switch (b) {
              case 2:
                return 2;
              case 1:
                return 3;
              case 4:
                return 4;
              case 3:
                return 5;
              case 6:
                return 6;
              case 5:
                return 7;
              case 7:
                return 8;
            }
            throw Error('bad mask');
          }
          function lk (a, b, c, d, e) {
            var f = e.google_ad_height || ki(c, b, 'height', K);
            b = Zj(a, b, c, f, e).a;
            return b.minWidth() * b.height() > a * d.height()
              ? new X(b.minWidth(), b.height(), 1)
              : d;
          }
          function kk (a) {
            return T(227) || (a.location && '#hffwroe2etoq' == a.location.hash);
          }
          function ik (a) {
            return T(232) || (a.location && '#affwroe2etoq' == a.location.hash);
          }
          function mk (a, b) {
            V.call(this, a, b);
          }
          z(mk, V);
          mk.prototype.Y = function () {
            return this.minWidth();
          };
          mk.prototype.la = function (a) {
            return V.prototype.la.call(this, a) + '_0ads_al';
          };
          var nk = [
            new mk(728, 15),
            new mk(468, 15),
            new mk(200, 90),
            new mk(180, 90),
            new mk(160, 90),
            new mk(120, 90),
          ];
          function ok (a, b, c) {
            var d = 250,
              e = 90;
            d = void 0 === d ? 130 : d;
            e = void 0 === e ? 30 : e;
            var f = bk(nk, li(a));
            if (!f) throw new N('No link unit size for width=' + a + 'px');
            a = Math.min(a, 1200);
            f = f.height();
            b = Math.max(f, b);
            d = new Gj(10, new mk(a, Math.min(b, 15 == f ? e : d))).a;
            b = d.minWidth();
            d = d.height();
            15 <= c && (d = c);
            return new Gj(10, new mk(b, d));
          }
          function pk (a, b, c, d) {
            if ('false' == d.google_full_width_responsive)
              return (d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = 1), a;
            var e = di(a, b, c, d);
            if (!0 !== e)
              return (d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = e), a;
            e = Q(b);
            if (!e) return a;
            d.google_full_width_responsive_allowed = !0;
            ji(b, c);
            return e;
          }
          function qk (a, b, c, d, e) {
            var f;
            (f = Q(b))
              ? 488 > Q(b)
                ? b.innerHeight >= b.innerWidth
                  ? ((e.google_full_width_responsive_allowed = !0),
                    ji(b, c),
                    (f = { s: f, u: !0 }))
                  : (f = { s: a, u: 5 })
                : (f = { s: a, u: 4 })
              : (f = { s: a, u: 10 });
            var g = f;
            f = g.s;
            g = g.u;
            if (!0 !== g || a == f) return new Gj(12, new V(a, d), null, null, !0, g, 100);
            a = gk(f, 'auto', b, c, e, !0);
            return new Gj(1, a.V, a.ha, 2, !0, g, a.R, a.O, a.P);
          }
          function rk (a, b) {
            var c = b.google_ad_format;
            if ('autorelaxed' == c) {
              a: {
                if ('pedestal' != b.google_content_recommendation_ui_type)
                  for (a = y(Qj), c = a.next(); !c.done; c = a.next())
                    if (null != b[c.value]) {
                      b = !0;
                      break a;
                    }
                b = !1;
              }
              return b ? 9 : 5;
            }
            if (ek(c)) return 1;
            if ('link' == c) return 4;
            if ('fluid' == c) {
              if ((c = 'in-article' === b.google_ad_layout))
                c =
                  T(208) ||
                  T(227) ||
                  (a.location &&
                    ('#hffwroe2etop' == a.location.hash || '#hffwroe2etoq' == a.location.hash));
              return c ? (sk(b), 1) : 8;
            }
            if (27 === b.google_reactive_ad_format) return sk(b), 1;
          }
          function tk (a, b, c, d, e) {
            e =
              b.offsetWidth ||
              ((c.google_ad_resize || (void 0 === e ? !1 : e)) && ki(b, d, 'width', K)) ||
              c.google_ad_width ||
              0;
            (T(310) || (d.location && '#ooimne2e' == d.location.hash)) &&
              4 === a &&
              ((c.google_ad_format = 'auto'), (a = 1));
            var f = (f = uk(a, e, b, c, d)) ? f : fk(e, c.google_ad_format, d, b, c);
            f.a.ba(d, c, b);
            Hj(f, e, c);
            1 != a && ((a = f.a.height()), (b.style.height = a + 'px'));
          }
          function uk (a, b, c, d, e) {
            var f = d.google_ad_height || ki(c, e, 'height', K);
            switch (a) {
              case 5:
                return (
                  (a = ve(247, function () {
                    return dk(b, d.google_ad_format, e, c, d);
                  })),
                  (f = a.s),
                  (a = a.u),
                  !0 === a && b != f && ji(e, c),
                  !0 === a
                    ? (d.google_full_width_responsive_allowed = !0)
                    : ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = a)),
                  Sj(f, d)
                );
              case 9:
                return Vj(b, d);
              case 4:
                return (a = pk(b, e, c, d)), ok(a, ri(e, c), f);
              case 8:
                return Zj(b, e, c, f, d);
              case 10:
                return qk(b, e, c, f, d);
            }
          }
          function sk (a) {
            a.google_ad_format = 'auto';
            a.armr = 3;
          }
          var vk = null;
          function wk () {
            if (!vk) {
              for (var a = A, b = a, c = 0; a && a != a.parent; )
                if (((a = a.parent), c++, wc(a))) b = a;
                else break;
              vk = b;
            }
            return vk;
          }
          function Z (a) {
            this.g = [];
            this.c = a || window;
            this.a = 0;
            this.f = null;
            this.h = 0;
          }
          var xk;
          n = Z.prototype;
          n.Oa = function (a, b) {
            0 != this.a || 0 != this.g.length || (b && b != window)
              ? this.ua(a, b)
              : ((this.a = 2), this.Ea(new yk(a, window)));
          };
          n.ua = function (a, b) {
            this.g.push(new yk(a, b || this.c));
            zk(this);
          };
          n.Wa = function (a) {
            this.a = 1;
            if (a) {
              var b = we(188, Ja(this.Da, this, !0));
              this.f = this.c.setTimeout(b, a);
            }
          };
          n.Da = function (a) {
            a && ++this.h;
            1 == this.a &&
              (null != this.f && (this.c.clearTimeout(this.f), (this.f = null)), (this.a = 0));
            zk(this);
          };
          n.bb = function () {
            return !(!window || !Array);
          };
          n.Pa = function () {
            return this.h;
          };
          function zk (a) {
            var b = we(189, Ja(a.eb, a));
            a.c.setTimeout(b, 0);
          }
          n.eb = function () {
            if (0 == this.a && this.g.length) {
              var a = this.g.shift();
              this.a = 2;
              var b = we(190, Ja(this.Ea, this, a));
              a.a.setTimeout(b, 0);
              zk(this);
            }
          };
          n.Ea = function (a) {
            this.a = 0;
            a.c();
          };
          function Ak (a) {
            try {
              return a.sz();
            } catch (b) {
              return !1;
            }
          }
          function Bk (a) {
            return (
              !!a &&
              ('object' === typeof a || 'function' === typeof a) &&
              Ak(a) &&
              Dd(a.nq) &&
              Dd(a.nqa) &&
              Dd(a.al) &&
              Dd(a.rl)
            );
          }
          function Ck () {
            if (xk && Ak(xk)) return xk;
            var a = wk(),
              b = a.google_jobrunner;
            return Bk(b) ? (xk = b) : (a.google_jobrunner = xk = new Z(a));
          }
          function Dk (a, b) {
            Ck().nq(a, b);
          }
          function Ek (a, b) {
            Ck().nqa(a, b);
          }
          Z.prototype.nq = Z.prototype.Oa;
          Z.prototype.nqa = Z.prototype.ua;
          Z.prototype.al = Z.prototype.Wa;
          Z.prototype.rl = Z.prototype.Da;
          Z.prototype.sz = Z.prototype.bb;
          Z.prototype.tc = Z.prototype.Pa;
          function yk (a, b) {
            this.c = a;
            this.a = b;
          }
          function Fk (a, b) {
            var c = Md(b);
            if (c) {
              c = Q(c);
              var d = Bc(a, b) || {},
                e = d.direction;
              if ('0px' === d.width && 'none' != d.cssFloat) return -1;
              if ('ltr' === e && c)
                return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
              if ('rtl' === e && c)
                return (
                  (a =
                    b.document.body.getBoundingClientRect().right -
                    a.getBoundingClientRect().right),
                  Math.floor(
                    Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2))
                  )
                );
            }
            return -1;
          }
          var Gk = {},
            Hk =
              ((Gk.google_ad_modifications = !0),
              (Gk.google_analytics_domain_name = !0),
              (Gk.google_analytics_uacct = !0),
              (Gk.google_pause_ad_requests = !0),
              (Gk.google_trust_token_operation_status = !0),
              (Gk.google_user_agent_client_hint = !0),
              Gk);
          function Ik (a, b, c) {
            var d = window;
            return function () {
              var e = $d(),
                f = 3;
              try {
                var g = b.apply(this, arguments);
              } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
              } finally {
                d.google_measure_js_timing &&
                  e &&
                  ((e = { label: a.toString(), value: e, duration: ($d() || 0) - e, type: f }),
                  (f = d.google_js_reporting_queue = d.google_js_reporting_queue || []),
                  2048 > f.length && f.push(e));
              }
              return g;
            };
          }
          function Jk (a, b) {
            return Ik(a, b, function (c, d) {
              new le().J(c, d);
            });
          }
          function Kk (a, b) {
            return null == b ? '&' + a + '=null' : '&' + a + '=' + Math.floor(b);
          }
          var Lk = new q.Set();
          function Mk (a) {
            a = a.id;
            return (
              null != a &&
              (Lk.has(a) ||
                r(a, 'startsWith').call(a, 'google_ads_iframe_') ||
                r(a, 'startsWith').call(a, 'aswift'))
            );
          }
          function Nk (a, b) {
            b = void 0 === b ? 4 : b;
            if (!a) return !1;
            if (Mk(a)) return !0;
            if (0 >= b) return !1;
            a = y(a.childNodes);
            for (var c = a.next(); !c.done; c = a.next()) if (Nk(c.value, b - 1)) return !0;
            return !1;
          }
          function Ok () {
            M.call(this);
            this.L = this.N = this.Z = this.c = this.C = this.m = this.g = 0;
            this.M = !1;
            this.H = this.j = this.f = 0;
            var a = document.querySelector('[data-google-query-id]');
            this.qa = a ? a.getAttribute('data-google-query-id') : null;
            this.I = null;
            this.pa = !1;
            this.K = function () {};
          }
          z(Ok, M);
          function Pk () {
            var a = new Ok();
            if (T(203) && !window.google_plmetrics && window.PerformanceObserver) {
              window.google_plmetrics = !0;
              for (
                var b = y(['layout-shift', 'largest-contentful-paint', 'first-input', 'longtask']),
                  c = b.next();
                !c.done;
                c = b.next()
              )
                (c = c.value), Qk(a).observe({ type: c, buffered: !T(240) });
              Rk(a);
            }
          }
          function Qk (a) {
            a.I ||
              (a.I = new PerformanceObserver(
                Jk(640, function (b) {
                  var c = !1;
                  b = y(b.getEntries());
                  for (var d = b.next(); !d.done; d = b.next())
                    switch (((d = d.value), d.entryType)) {
                      case 'layout-shift':
                        if (!c) {
                          try {
                            if ('undefined' !== typeof googletag && googletag.pubads) {
                              var e = googletag.pubads();
                              Lk.clear();
                              for (var f = y(e.getSlots()), g = f.next(); !g.done; g = f.next())
                                Lk.add(g.value.getSlotId().getDomId());
                            }
                          } catch (m) {}
                          c = !0;
                        }
                        var h = a;
                        if (!d.hadRecentInput && (!T(241) || 0.01 < d.value)) {
                          h.g += Number(d.value);
                          Number(d.value) > h.m && (h.m = Number(d.value));
                          h.C += 1;
                          a: {
                            if (d.sources) {
                              var k = y(d.sources);
                              for (var l = k.next(); !l.done; l = k.next())
                                if (Nk(l.value.node)) {
                                  k = !0;
                                  break a;
                                }
                            }
                            k = !1;
                          }
                          k && ((h.c += d.value), h.Z++);
                        }
                        break;
                      case 'largest-contentful-paint':
                        a.N = Math.floor(d.renderTime || d.loadTime);
                        break;
                      case 'first-input':
                        a.L = Number((d.processingStart - d.startTime).toFixed(3));
                        a.M = !0;
                        break;
                      case 'longtask':
                        (a.f += d.duration), d.duration > a.j && (a.j = d.duration), (a.H += 1);
                    }
                })
              ));
            return a.I;
          }
          function Rk (a) {
            var b = Jk(641, function () {
                var f = document;
                2 ==
                  ({ visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                    f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ''
                  ] || 0) && Sk(a);
              }),
              c = Jk(641, function () {
                return void Sk(a);
              });
            document.addEventListener('visibilitychange', b);
            document.addEventListener('unload', c);
            var d = Qg(1905),
              e;
            0 < d && (e = setTimeout(c, 1000 * d));
            a.K = function () {
              document.removeEventListener('visibilitychange', b);
              document.removeEventListener('unload', c);
              Qk(a).disconnect();
              e && clearTimeout(e);
            };
          }
          Ok.prototype.a = function () {
            M.prototype.a.call(this);
            this.K();
          };
          function Sk (a) {
            if (!a.pa) {
              a.pa = !0;
              Qk(a).takeRecords();
              var b = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics';
              window.LayoutShift &&
                ((b += '&cls=' + a.g.toFixed(3)),
                (b += '&mls=' + a.m.toFixed(3)),
                (b += Kk('nls', a.C)),
                window.LayoutShiftAttribution &&
                  ((b += '&cas=' + a.c.toFixed(3)), (b += Kk('nas', a.Z))));
              window.LargestContentfulPaint && (b += Kk('lcp', a.N));
              window.PerformanceEventTiming && a.M && (b += Kk('fid', a.L));
              window.PerformanceLongTaskTiming &&
                ((b += Kk('cbt', a.f)), (b += Kk('mbt', a.j)), (b += Kk('nlt', a.H)));
              for (
                var c = 0, d = y(document.getElementsByTagName('iframe')), e = d.next();
                !e.done;
                e = d.next()
              )
                Mk(e.value) && c++;
              b += Kk('nif', c);
              b += Kk('ifi', Fd(window));
              c = qg.i().a();
              b += '&eid=' + encodeURIComponent(c.join());
              b += '&top=' + (A === A.top ? 1 : 0);
              if (a.qa) c = '&qqid=' + encodeURIComponent(a.qa);
              else {
                if ('number' !== typeof A.goog_pvsid)
                  try {
                    Object.defineProperty(A, 'goog_pvsid', {
                      value: Math.floor(Math.random() * Math.pow(2, 52)),
                      configurable: !1,
                    });
                  } catch (f) {}
                c = Kk('pvsid', Number(A.goog_pvsid) || -1);
              }
              window.fetch(b + c, {
                keepalive: !0,
                credentials: 'include',
                redirect: 'follow',
                method: 'get',
                mode: 'no-cors',
              });
              a.h || ((a.h = !0), a.a());
            }
          }
          var Tk = {
              issuerOrigin: 'https://adservice.google.com',
              issuancePath: '/tt/i',
              redemptionPath: '/tt/r',
              shouldRedeemToken: function () {
                return !0;
              },
              shouldRequestToken: function () {
                return !1;
              },
            },
            Uk = [
              Tk,
              {
                issuerOrigin: 'https://attestation.android.com',
                issuancePath: '/att/i',
                redemptionPath: '/att/r',
                shouldRedeemToken: function () {
                  return !1;
                },
                shouldRequestToken: function () {
                  return !1;
                },
              },
            ];
          function Vk (a) {
            M.call(this);
            this.g = Uk;
            this.f = a;
            this.c = Wk(this);
          }
          z(Vk, M);
          function Wk (a) {
            var b = a.g.map(function (c) {
              return { issuerOrigin: c.issuerOrigin, state: document.hasTrustToken ? 1 : 0 };
            });
            a.f(b);
            return b;
          }
          function Xk (a, b, c) {
            var d = r(a.c, 'findIndex').call(a.c, function (e) {
              return e.issuerOrigin === b;
            });
            0 <= d && ((a.c[d].state = c), a.f(a.c));
          }
          function Yk (a, b) {
            window
              .fetch(b.issuerOrigin + b.redemptionPath, {
                keepalive: !0,
                redirect: 'follow',
                method: 'get',
                trustToken: {
                  type: 'srr-token-redemption',
                  issuer: b.issuerOrigin,
                  refreshPolicy: 'none',
                },
              })
              .then(function (c) {
                if (!c.ok) throw Error(c.status + ': Network response was not ok!');
                Xk(a, b.issuerOrigin, 6);
              })
              .catch(function (c) {
                c && 'NoModificationAllowedError' === c.name
                  ? Xk(a, b.issuerOrigin, 6)
                  : Xk(a, b.issuerOrigin, 5);
              });
            Xk(a, b.issuerOrigin, 2);
          }
          function Zk (a, b, c) {
            window
              .fetch(b.issuerOrigin + b.issuancePath, { trustToken: { type: 'token-request' } })
              .then(function (d) {
                if (!d.ok) throw Error(d.status + ': Network response was not ok!');
                Xk(a, b.issuerOrigin, 10);
                c && Yk(a, b);
              })
              .catch(function () {
                Xk(a, b.issuerOrigin, 9);
              });
            Xk(a, b.issuerOrigin, 8);
          }
          function $k (a) {
            document.hasTrustToken &&
              (T(1915)
                ? a.g.forEach(function (b) {
                    var c = b.shouldRedeemToken(),
                      d = b.shouldRequestToken();
                    c || d
                      ? document.hasTrustToken(b.issuerOrigin).then(function (e) {
                          e
                            ? c && Yk(a, b)
                            : b.shouldRequestToken
                            ? Zk(a, b, c)
                            : Xk(a, b.issuerOrigin, 3);
                        })
                      : Xk(a, b.issuerOrigin, 7);
                  })
                : T(1912)
                ? document.hasTrustToken(Tk.issuerOrigin).then(function (b) {
                    b ? Yk(a, Tk) : Xk(a, Tk.issuerOrigin, 3);
                  })
                : Yk(a, Tk));
          }
          function al (a) {
            E(this, a, bl, null);
          }
          B(al, D);
          var bl = [6];
          var cl = ['platform', 'platformVersion', 'architecture', 'model', 'uaFullVersion'];
          function dl () {
            return L.navigator &&
              L.navigator.userAgentData &&
              'function' === typeof L.navigator.userAgentData.getHighEntropyValues
              ? L.navigator.userAgentData.getHighEntropyValues(cl).then(function (a) {
                  var b = new al();
                  b = gc(b, 1, a.platform);
                  b = gc(b, 2, a.platformVersion);
                  b = gc(b, 3, a.architecture);
                  b = gc(b, 4, a.model);
                  return gc(b, 5, a.uaFullVersion);
                })
              : null;
          }
          function el (a, b) {
            L.google_sa_impl &&
              !L.document.getElementById('google_shimpl') &&
              ((L.google_sa_queue = null), (L.google_sl_win = null), (L.google_sa_impl = null));
            L.google_sa_queue ||
              ((L.google_sa_queue = []),
              (L.google_sl_win = L),
              (L.google_process_slots = function () {
                return fl(L);
              }),
              (a = gl(void 0 === b ? '' : b, a)),
              (Ac(L.document, a, T(356)).id = 'google_shimpl'));
          }
          var fl = we(215, function (a) {
            var b = a.google_sa_queue,
              c = b.shift();
            a.google_sa_impl || xe('shimpl', { t: 'no_fn' });
            'function' === typeof c && ve(216, c);
            b.length &&
              a.setTimeout(function () {
                return fl(a);
              }, 0);
          });
          function hl (a, b, c) {
            a.google_sa_queue = a.google_sa_queue || [];
            a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
          }
          function gl (a, b) {
            a: switch (Qg(1008)) {
              case 1:
                var c = pb(yd(b.Za).toString());
                break a;
              case 2:
                c = pb(yd(b.Ya).toString());
                break a;
              default:
                c = null;
            }
            b = !c || (T(1006) && !kd) ? pb(yd(b.$a).toString()) : c;
            a = il(a);
            return mb(b, a);
          }
          function il (a) {
            if (Rg()) return { bust: Rg() };
            if (T(357)) return { bust: L.location.host };
            if (kd && T(375)) {
              a ||
                (a = L.google_ad_client
                  ? L.google_ad_client
                  : (a = L.document.querySelector(
                      'script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]'
                    ))
                  ? a.getAttribute('data-ad-client')
                  : (a = L.document.querySelector('.adsbygoogle[data-ad-client]'))
                  ? a.getAttribute('data-ad-client')
                  : '');
              if (a) {
                var b = {};
                return (b.client = a), (b.plah = L.location.host), (b.amaexp = 1), b;
              }
              throw Error('PublisherCodeNotFoundForAma');
            }
            return {};
          }
          function jl (a, b, c, d) {
            return function () {
              var e = !1;
              d && Ck().al(30000);
              try {
                if (wc(a.document.getElementById(b).contentWindow)) {
                  var f = a.document.getElementById(b).contentWindow,
                    g = f.document;
                  (g.body && g.body.firstChild) ||
                    (/Firefox/.test(navigator.userAgent)
                      ? g.open('text/html', 'replace')
                      : g.open(),
                    (f.google_async_iframe_close = !0),
                    g.write(c));
                } else {
                  var h = a.document.getElementById(b).contentWindow;
                  f = c;
                  f = String(f);
                  g = ['"'];
                  for (var k = 0; k < f.length; k++) {
                    var l = f.charAt(k),
                      m = l.charCodeAt(0),
                      p = k + 1,
                      t;
                    if (!(t = Qb[l])) {
                      if (31 < m && 127 > m) var v = l;
                      else {
                        var x = void 0,
                          w = l;
                        if (w in Rb) v = Rb[w];
                        else if (w in Qb) v = Rb[w] = Qb[w];
                        else {
                          var F = w.charCodeAt(0);
                          if (31 < F && 127 > F) x = w;
                          else {
                            if (256 > F) {
                              if (((x = '\\x'), 16 > F || 256 < F)) x += '0';
                            } else (x = '\\u'), 4096 > F && (x += '0');
                            x += F.toString(16).toUpperCase();
                          }
                          v = Rb[w] = x;
                        }
                      }
                      t = v;
                    }
                    g[p] = t;
                  }
                  g.push('"');
                  h.location.replace('javascript:' + g.join(''));
                }
                e = !0;
              } catch (wa) {
                (h = wk().google_jobrunner), Bk(h) && h.rl();
              }
              e && ((e = Aj('google_async_rrc', c)), new zj(a).set(b, jl(a, b, e, !1)));
            };
          }
          function kl (a) {
            if (!Dj)
              a: {
                for (var b = [A.top], c = [], d = 0, e; (e = b[d++]); ) {
                  c.push(e);
                  try {
                    if (e.frames)
                      for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g)
                        b.push(e.frames[g]);
                  } catch (k) {}
                }
                for (b = 0; b < c.length; b++)
                  try {
                    var h = c[b].frames.google_esf;
                    if (h) {
                      Dj = h;
                      break a;
                    }
                  } catch (k) {}
                Dj = null;
              }
            if (!Dj) {
              if (/[^a-z0-9-]/.test(a)) return null;
              c = rc(document, 'IFRAME');
              c.id = 'google_esf';
              c.name = 'google_esf';
              c.src = Se(
                'googleads.g.doubleclick.net',
                ['/pagead/html/', hd(), '/r20190131/zrt_lookup.html#'].join('')
              );
              c.style.display = 'none';
              c.setAttribute('data-ad-client', We(a));
              return c;
            }
            return null;
          }
          function ll (a, b, c) {
            ml(a, b, c, function (d, e, f) {
              d = d.document;
              for (var g = e.id, h = 0; !g || d.getElementById(g + '_anchor'); )
                g = 'aswift_' + h++;
              e.id = g;
              e.name = g;
              g = Number(f.google_ad_width || 0);
              h = Number(f.google_ad_height || 0);
              var k = f.ds || '';
              k && (k += r(k, 'endsWith').call(k, ';') ? '' : ';');
              var l = '',
                m = '';
              if (!f.google_enable_single_iframe) {
                l = ['<iframe'];
                for (p in e)
                  e.hasOwnProperty(p) &&
                    ('onload' === p && T(381)
                      ? ((m = e.id),
                        (m =
                          "<script nonce='" +
                          va() +
                          "'>" +
                          jb(
                            ib(
                              new cb(
                                db,
                                "function(iframeId, globalVarName){document.getElementById(iframeId).addEventListener('load', function() {var i=this.id,s=window[globalVarName],H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}});}"
                              ),
                              m,
                              'google_iframe_oncopy'
                            )
                          ).toString() +
                          '</script>'))
                      : l.push(p + '=' + e[p]));
                l.push(
                  'style="left:0;position:absolute;top:0;border:0px;width:' +
                    (g + 'px;height:' + (h + 'px;"'))
                );
                l.push('></iframe>');
                l = l.join(' ');
              }
              var p = e.id;
              var t = '';
              t = void 0 === t ? '' : t;
              g =
                'border:none;height:' +
                h +
                'px;margin:0;padding:0;position:relative;visibility:visible;width:' +
                (g + 'px;background-color:transparent;');
              p =
                [
                  '<ins id="' + (p + '_expand"'),
                  ' style="display:inline-table;' + g + (void 0 === k ? '' : k) + '"',
                  t ? ' data-ad-slot="' + t + '">' : '>',
                  '<ins id="' + (p + '_anchor" style="display:block;') + g + '">',
                  l,
                  '</ins></ins>',
                ].join('') + m;
              16 == f.google_reactive_ad_format
                ? ((f = d.createElement('div')),
                  (d = zd(p)),
                  Pb(f, d),
                  c.appendChild(f.firstChild))
                : ((f = zd(p)), Pb(c, f));
              return e.id;
            });
          }
          function nl (a) {
            a = ib(
              new cb(
                db,
                'function(showAdsImplFn,slotVarsMap,iframeId){window.parent[showAdsImplFn]({iframeWin: window,pubWin: window.parent,vars: window.parent[slotVarsMap][iframeId]});}'
              ),
              'google_sa_impl',
              'google_sv_map',
              a
            );
            return "<script nonce='" + va() + "'>" + jb(a).toString() + '</script>';
          }
          function ml (a, b, c, d) {
            var e = b.google_ad_width,
              f = b.google_ad_height;
            if ((!Vb && !Wb) || T(325)) b.google_enable_single_iframe = !0;
            var g = {};
            null != e && (g.width = e && '"' + e + '"');
            null != f && (g.height = f && '"' + f + '"');
            g.frameborder = '"0"';
            g.marginwidth = '"0"';
            g.marginheight = '"0"';
            g.vspace = '"0"';
            g.hspace = '"0"';
            g.allowtransparency = '"true"';
            g.scrolling = '"no"';
            g.allowfullscreen = '"true"';
            g.onload = '"' + Bj + '"';
            d = d(a, g, b);
            ol(a, c, b);
            (c = kl(b.google_ad_client)) && a.document.documentElement.appendChild(c);
            c = Ma;
            e = new Date().getTime();
            b.google_lrv = hd();
            b.google_async_iframe_id = d;
            b.google_unique_id = Gd(a);
            b.google_start_time = c;
            b.google_bpp = e > c ? e - c : 1;
            b.google_async_rrc = 0;
            a.google_sv_map = a.google_sv_map || {};
            a.google_sv_map[d] = b;
            if (b.google_enable_single_iframe) {
              var h = { pubWin: a, iframeWin: null, vars: b };
              hl(
                a,
                function () {
                  a.google_sa_impl(h);
                },
                a.document.getElementById(d + '_anchor') ? Dk : Ek
              );
            } else
              (b = [
                '<!doctype html><html><body>',
                "<script nonce='" + va() + "'>",
                jb(
                  ib(
                    new cb(
                      db,
                      'function(singleLoadWindow,iframeStartTime,asyncIframeId,iframeId){window[singleLoadWindow]=window.parent;window[iframeStartTime]=new Date().getTime();window[asyncIframeId]=iframeId;}'
                    ),
                    'google_sl_win',
                    'google_iframe_start_time',
                    'google_async_iframe_id',
                    d
                  )
                ).toString(),
                '</script>',
                nl(d),
                '</body></html>',
              ].join('')),
                hl(a, jl(a, d, b, !0), a.document.getElementById(d) ? Dk : Ek);
          }
          function ol (a, b, c) {
            var d = c.google_ad_output,
              e = c.google_ad_format,
              f = c.google_ad_width || 0,
              g = c.google_ad_height || 0;
            e || ('html' != d && null != d) || (e = f + 'x' + g);
            d =
              !c.google_ad_slot ||
              c.google_override_format ||
              (!ed[c.google_ad_width + 'x' + c.google_ad_height] && 'aa' == c.google_loader_used);
            e && d ? (e = e.toLowerCase()) : (e = '');
            c.google_ad_format = e;
            if ('number' !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
              e = [
                c.google_ad_slot,
                c.google_orig_ad_format || c.google_ad_format,
                c.google_ad_type,
                c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height,
              ];
              d = [];
              f = 0;
              for (g = b; g && 25 > f; g = g.parentNode, ++f)
                9 === g.nodeType ? d.push('') : d.push(g.id);
              (d = d.join()) && e.push(d);
              c.google_ad_unit_key = Hc(e.join(':')).toString();
              var h = void 0 === h ? !1 : h;
              e = [];
              for (d = 0; b && 25 > d; ++d) {
                f = '';
                (void 0 !== h && h) || (f = (f = 9 !== b.nodeType && b.id) ? '/' + f : '');
                a: {
                  if (b && b.nodeName && b.parentElement) {
                    g = b.nodeName.toString().toLowerCase();
                    for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                      var p = k[m];
                      if (p.nodeName && p.nodeName.toString().toLowerCase() === g) {
                        if (b === p) {
                          g = '.' + l;
                          break a;
                        }
                        ++l;
                      }
                    }
                  }
                  g = '';
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement;
              }
              h = e.join() + ':';
              b = [];
              if (a)
                try {
                  var t = a.parent;
                  for (e = 0; t && t !== a && 25 > e; ++e) {
                    var v = t.frames;
                    for (d = 0; d < v.length; ++d)
                      if (a === v[d]) {
                        b.push(d);
                        break;
                      }
                    a = t;
                    t = a.parent;
                  }
                } catch (x) {}
              c.google_ad_dom_fingerprint = Hc(h + b.join()).toString();
            }
          }
          function pl (a, b) {
            a = a.attributes;
            for (var c = a.length, d = 0; d < c; d++) {
              var e = a[d];
              if (/data-/.test(e.name)) {
                var f = ub(
                  e.name
                    .replace('data-matched-content', 'google_content_recommendation')
                    .replace('data', 'google')
                    .replace(/-/g, '_')
                );
                if (!b.hasOwnProperty(f)) {
                  e = e.value;
                  var g = {};
                  g =
                    ((g.google_reactive_ad_format = gd), (g.google_allow_expandable_ads = Oc), g);
                  e = g.hasOwnProperty(f) ? g[f](e, null) : e;
                  null !== e && (b[f] = e);
                }
              }
            }
          }
          function ql (a) {
            if ((a = ld(a)))
              switch (a.data && a.data.autoFormat) {
                case 'rspv':
                  return 13;
                case 'mcrspv':
                  return 15;
                default:
                  return 14;
              }
            else return 12;
          }
          function rl (a, b, c) {
            pl(a, b);
            if (c.document && c.document.body && !rk(c, b) && !b.google_reactive_ad_format) {
              var d = parseInt(a.style.width, 10),
                e = Fk(a, c);
              if (0 < e && d > e) {
                var f = parseInt(a.style.height, 10);
                d = !!ed[d + 'x' + f];
                var g = e;
                if (d) {
                  var h = fd(e, f);
                  if (h) (g = h), (b.google_ad_format = h + 'x' + f + '_0ads_al');
                  else throw new N('No slot size for availableWidth=' + e);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = g;
                d || ((b.google_ad_format = null), (b.google_override_format = !0));
                e = g;
                a.style.width = e + 'px';
                f = fk(e, 'auto', c, a, b);
                g = e;
                f.a.ba(c, b, a);
                Hj(f, g, b);
                f = f.a;
                b.google_responsive_formats = null;
                f.minWidth() > e &&
                  !d &&
                  ((b.google_ad_width = f.minWidth()), (a.style.width = f.minWidth() + 'px'));
              }
            }
            d = a.offsetWidth || ki(a, c, 'width', K) || b.google_ad_width || 0;
            e = Ka(fk, d, 'auto', c, a, b, !1, !0);
            f = Md(c) || c;
            g = b.google_ad_client;
            f =
              f.location && '#ftptohbh' === f.location.hash
                ? 2
                : Pe(f.location, 'google_responsive_slot_debug') ||
                  Pe(f.location, 'google_responsive_slot_preview') ||
                  T(217)
                ? 1
                : T(218)
                ? 2
                : cf(f, 1, g)
                ? 1
                : 0;
            if ((g = 0 !== f))
              b: if (
                !(488 > Q(c) || T(216)) ||
                b.google_reactive_ad_format ||
                rk(c, b) ||
                Yh(a, b)
              )
                g = !1;
              else {
                for (g = a; g; g = g.parentElement) {
                  h = Bc(g, c);
                  if (!h) {
                    b.gfwrnwer = 18;
                    g = !1;
                    break b;
                  }
                  if (!Ta(['static', 'relative'], h.position)) {
                    b.gfwrnwer = 17;
                    g = !1;
                    break b;
                  }
                }
                if (!T(216) && ((g = ci(c, a, d, 0.3, b)), !0 !== g)) {
                  b.gfwrnwer = g;
                  g = !1;
                  break b;
                }
                g = Ld(c) == c ? !0 : !1;
              }
            g
              ? ((b.google_resizing_allowed = !0),
                (b.ovlp = !0),
                2 === f
                  ? ((f = {}),
                    Hj(e(), d, f),
                    (b.google_resizing_width = f.google_ad_width),
                    (b.google_resizing_height = f.google_ad_height),
                    f.ds && (b.ds = f.ds),
                    (b.iaaso = !1))
                  : ((b.google_ad_format = 'auto'), (b.iaaso = !0), (b.armr = 1)),
                (d = !0))
              : (d = !1);
            if ((e = rk(c, b))) tk(e, a, b, c, d);
            else {
              if (Yh(a, b)) {
                if ((d = Bc(a, c)))
                  (a.style.width = d.width), (a.style.height = d.height), Xh(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = ql(c);
              } else Xh(a.style, b);
              (c.location && '#gfwmrp' == c.location.hash) ||
              (12 == b.google_responsive_auto_format && 'true' == b.google_full_width_responsive)
                ? tk(10, a, b, c, !1)
                : 0.01 > Math.random() &&
                  12 == b.google_responsive_auto_format &&
                  ((a = di(
                    a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width,
                    c,
                    a,
                    b
                  )),
                  !0 !== a ? ((b.efwr = !1), (b.gfwrnwer = a)) : (b.efwr = !0));
            }
          }
          function sl () {
            this.S = {};
          }
          function tl () {
            if (ul) return ul;
            var a = md() || Jd(),
              b = a.google_persistent_state_async;
            return null != b && 'object' == typeof b && null != b.S && 'object' == typeof b.S
              ? (ul = b)
              : (a.google_persistent_state_async = ul = new sl());
          }
          function vl (a, b, c) {
            b = wl[b] || 'google_ps_' + b;
            a = a.S;
            var d = a[b];
            return void 0 === d ? (a[b] = c) : d;
          }
          function xl (a, b, c) {
            a.S[wl[b] || 'google_ps_' + b] = c;
          }
          var ul = null,
            yl = {},
            wl =
              ((yl[8] = 'google_prev_ad_formats_by_region'),
              (yl[9] = 'google_prev_ad_slotnames_by_region'),
              yl);
          function zl (a) {
            M.call(this);
            this.f = a;
            this.c = null;
            this.j = {};
            this.g = null;
          }
          z(zl, M);
          zl.prototype.a = function () {
            this.j = {};
            this.g && (qc(this.f, 'message', this.g), delete this.g);
            delete this.j;
            delete this.f;
            delete this.c;
            M.prototype.a.call(this);
          };
          function Al (a) {
            M.call(this);
            this.f = a;
            this.c = null;
            this.c ||
              (this.f.googlefc ? (this.c = this.f) : (this.c = Pc(this.f, 'googlefcPresent')));
          }
          z(Al, M);
          function Bl (a) {
            void 0 !== a.addtlConsent &&
              'string' !== typeof a.addtlConsent &&
              (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies &&
              'boolean' !== typeof a.gdprApplies &&
              (a.gdprApplies = void 0);
            return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
              (void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
              ? 2
              : a.cmpStatus && 'error' !== a.cmpStatus
              ? 0
              : 3;
          }
          function Cl (a, b) {
            b = void 0 === b ? 500 : b;
            M.call(this);
            this.f = a;
            this.c = null;
            this.j = {};
            this.C = 0;
            this.m = b;
            this.g = null;
          }
          z(Cl, M);
          Cl.prototype.a = function () {
            this.j = {};
            this.g && (qc(this.f, 'message', this.g), delete this.g);
            delete this.j;
            delete this.f;
            delete this.c;
            M.prototype.a.call(this);
          };
          function Dl (a) {
            return 'function' === typeof a.f.__tcfapi || null != El(a);
          }
          Cl.prototype.addEventListener = function (a) {
            function b (f, g) {
              clearTimeout(e);
              f
                ? ((c = f),
                  (c.internalErrorState = Bl(c)),
                  (g && 0 === c.internalErrorState) ||
                    ((c.tcString = 'tcunavailable'), g || (c.internalErrorState = 3)))
                : ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3));
              a(c);
            }
            var c = {},
              d = Wa(function () {
                return a(c);
              }),
              e = 0;
            -1 !== this.m &&
              (e = setTimeout(function () {
                c.tcString = 'tcunavailable';
                c.internalErrorState = 1;
                d();
              }, this.m));
            try {
              Fl(this, 'addEventListener', b);
            } catch (f) {
              (c.tcString = 'tcunavailable'),
                (c.internalErrorState = 3),
                e && (clearTimeout(e), (e = 0)),
                d();
            }
          };
          Cl.prototype.removeEventListener = function (a) {
            a && a.listenerId && Fl(this, 'removeEventListener', null, a.listenerId);
          };
          function Fl (a, b, c, d) {
            c || (c = function () {});
            if ('function' === typeof a.f.__tcfapi) (a = a.f.__tcfapi), a(b, 2, c, d);
            else if (El(a)) {
              Gl(a);
              var e = ++a.C;
              a.j[e] = c;
              a.c &&
                ((c = {}),
                a.c.postMessage(
                  ((c.__tcfapiCall = { command: b, version: 2, callId: e, parameter: d }), c),
                  '*'
                ));
            } else c({}, !1);
          }
          function El (a) {
            if (a.c) return a.c;
            a.c = Pc(a.f, '__tcfapiLocator');
            return a.c;
          }
          function Gl (a) {
            a.g ||
              ((a.g = function (b) {
                try {
                  var c;
                  'string' === typeof b.data ? (c = JSON.parse(b.data)) : (c = b.data);
                  var d = c.__tcfapiReturn;
                  a.j[d.callId](d.returnValue, d.success);
                } catch (e) {}
              }),
              pc(a.f, 'message', a.g));
          }
          var Hl = null;
          function Il (a) {
            return Kd.test(a.className) && 'done' != a.getAttribute('data-adsbygoogle-status');
          }
          function Jl (a, b) {
            a.setAttribute('data-adsbygoogle-status', 'done');
            Kl(a, b);
          }
          function Ll () {
            if (!(0.01 < Math.random())) {
              var a = 0.5 < Math.random(),
                b = mb(rb(), { id: 'rmvasftr', type: a }, void 0),
                c = rc(document, 'IFRAME');
              c.style.display = 'none';
              c.src = ob(b).toString();
              if (a) {
                var d = rc(document, 'IFRAME');
                d.addEventListener('load', function () {
                  d.contentWindow.document.documentElement.appendChild(c);
                });
                d.style.display = 'none';
                document.documentElement.appendChild(d);
              } else document.documentElement.appendChild(c);
            }
          }
          function Kl (a, b) {
            var c = window,
              d = Jd();
            d.google_spfd || (d.google_spfd = rl);
            (d = b.google_reactive_ads_config) || rl(a, b, c);
            if (!Ml(a, b, c)) {
              d || (c.google_lpabyc = xj(c, a));
              if (d) {
                var e = d.page_level_pubvars || {};
                if (O(L).page_contains_reactive_tag && !O(L).allow_second_reactive_tag) {
                  if (e.pltais) {
                    Ee(!1);
                    return;
                  }
                  throw new N("Only one 'enable_page_level_ads' allowed per page.");
                }
                O(L).page_contains_reactive_tag = !0;
                Ee(7 === e.google_pgb_reactive);
              }
              (d && !T(1022)) || Ed(c);
              Cd(Hk, function (f, g) {
                b[g] = b[g] || c[g];
              });
              b.google_loader_used = 'aa';
              b.google_reactive_tag_first = 1 === (O(L).first_tag_on_page || 0);
              ve(164, function () {
                ll(c, b, a);
              });
            }
          }
          function Ml (a, b, c) {
            var d = b.google_reactive_ads_config;
            if (d) {
              var e = d.page_level_pubvars;
              e = (Da(e) ? e : {}).google_tag_origin;
            }
            var f =
              'string' === typeof a.className &&
              /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className);
            if (
              (e = ze(c, b.google_ad_slot, e || b.google_tag_origin)) &&
              e.ia &&
              'on' != b.google_adtest &&
              !f &&
              ((f = qi(a, c)), !e.ja || (e.ja && (f || 0) >= e.ja))
            )
              return (
                (a.className += ' adsbygoogle-ablated-ad-slot'),
                (c = c.google_sv_map = c.google_sv_map || {}),
                (d = Ea(a)),
                (b.google_element_uid = d),
                (c[b.google_element_uid] = b),
                a.setAttribute('google_element_uid', d),
                'slot' == e.Ia &&
                  (null !== Nc(a.getAttribute('width')) && a.setAttribute('width', 0),
                  null !== Nc(a.getAttribute('height')) && a.setAttribute('height', 0),
                  (a.style.width = '0px'),
                  (a.style.height = '0px')),
                !0
              );
            if (
              (e = Bc(a, c)) &&
              'none' == e.display &&
              !('on' == b.google_adtest || 0 < b.google_reactive_ad_format || d)
            )
              return (
                c.document.createComment &&
                  a.appendChild(
                    c.document.createComment(
                      'No ad requested because of display:none on the adsbygoogle tag'
                    )
                  ),
                !0
              );
            a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
            return (1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format) || !a
              ? !1
              : (A.console &&
                  A.console.warn(
                    'Adsbygoogle tag with data-reactive-ad-format=' +
                      b.google_reactive_ad_format +
                      ' is deprecated. Check out page-level ads at https://www.google.com/adsense'
                  ),
                !0);
          }
          function Nl (a) {
            var b = document.getElementsByTagName('INS');
            for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
              var e = d;
              if (
                Il(e) &&
                'reserved' != e.getAttribute('data-adsbygoogle-status') &&
                (!a || d.id == a)
              )
                return d;
            }
            return null;
          }
          function Ol (a) {
            const $___old_577486cce40d9289 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_577486cce40d9289)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_d805ada25b0ee6d7.localStorage
                ));
              return function () {
                if (!O(L).ama_ran_on_page) {
                  var b = Hh(A);
                  if (b) {
                    if (wj(a)) {
                      var c = sh(J(b, mh, 7));
                      if (!c || !dc(c, 8)) return;
                    }
                    O(L).ama_ran_on_page = !0;
                    var d = I(b, ph, 13);
                    d &&
                      1 === G(d, 1) &&
                      ((c = 0), (d = I(d, qh, 6)) && G(d, 3) && (c = G(d, 3) || 0), De(A, c));
                    Ve(3, [b.a]);
                    var e = a.google_ad_client;
                    a = Gh(Da(a.enable_page_level_ads) ? a.enable_page_level_ads : {});
                    T(1009) && (a.google_reactive_ad_format = 40);
                    var f = Ah(Ch, new zh(null, a));
                    ve(782, function () {
                      var g = f;
                      try {
                        var h = sh(J(b, mh, 7)),
                          k;
                        if ((k = h))
                          a: {
                            var l;
                            if ((l = G(h, 2)))
                              for (var m = 0; m < l.length; m++)
                                if (1 == l[m]) {
                                  k = !0;
                                  break a;
                                }
                            k = !1;
                          }
                        if (k) {
                          if (G(h, 4)) {
                            k = {};
                            var p = new zh(null, ((k.google_package = G(h, 4)), k));
                            g = Ah(g, p);
                          }
                          var t = new Zi(e, b, h, g),
                            v = new fj();
                          new kj(t, v).start();
                          v.c.then(Ka(mj, A), Ka(nj, A));
                        }
                      } catch (x) {
                        Fh(A, { atf: -1 });
                      }
                    });
                  } else
                    try {
                      A.localStorage.removeItem('google_ama_config');
                    } catch (g) {
                      Fh(A, { lserr: 1 });
                    }
                }
              }.apply(this, arguments);
            } finally {
              if ($___old_577486cce40d9289)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_577486cce40d9289));
            }
          }
          function Pl (a, b) {
            if (a && a.shift)
              for (var c = 20; 0 < a.length && 0 < c; ) {
                try {
                  Ql(a.shift(), b);
                } catch (d) {
                  setTimeout(function () {
                    throw d;
                  });
                }
                --c;
              }
          }
          function Rl () {
            var a = rc(document, 'INS');
            a.className = 'adsbygoogle';
            a.className += ' adsbygoogle-noablate';
            Rc(a);
            return a;
          }
          function Sl (a) {
            var b = {};
            Cd(Ye, function (e, f) {
              !1 === a.enable_page_level_ads ? (b[f] = !1) : a.hasOwnProperty(f) && (b[f] = a[f]);
            });
            Da(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads);
            var c = Rl();
            Zc.body.appendChild(c);
            var d = {};
            d = ((d.google_reactive_ads_config = b), (d.google_ad_client = a.google_ad_client), d);
            d.google_pause_ad_requests = !!O(L).pause_ad_requests;
            Jl(c, d);
          }
          function Tl (a) {
            function b () {
              return Sl(a);
            }
            var c = void 0 === c ? L : c;
            af(c).wasPlaTagProcessed = !0;
            var d = c.document;
            if (d.body || 'complete' == d.readyState || 'interactive' == d.readyState) b();
            else {
              var e = Wa(we(191, b));
              pc(d, 'DOMContentLoaded', e);
              new A.MutationObserver(function (f, g) {
                d.body && (e(), g.disconnect());
              }).observe(d, { childList: !0, subtree: !0 });
            }
          }
          function Ql (a, b) {
            var c = {};
            ve(
              165,
              function () {
                Ul(a, c, b);
              },
              function (d) {
                d.client = d.client || c.google_ad_client || a.google_ad_client;
                d.slotname = d.slotname || c.google_ad_slot;
                d.tag_origin = d.tag_origin || c.google_tag_origin;
              }
            );
          }
          function Vl (a) {
            delete a.google_checked_head;
            Gc(a, function (b, c) {
              Fe[c] ||
                (delete a[c],
                A.console.warn(
                  "AdSense head tag doesn't support " +
                    c.replace('google', 'data').replace(/_/g, '-') +
                    ' attribute.'
                ));
            });
          }
          function Wl (a) {
            var b = L.document.querySelector(
              'script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])'
            );
            if (b) {
              b.setAttribute('data-checked-head', 'true');
              var c = O(window);
              if (c.head_tag_slot_vars)
                throw new N(
                  'Only one AdSense head tag supported per page. The second tag is ignored.'
                );
              var d = {};
              pl(b, d);
              Vl(d);
              var e = $a(d);
              c.head_tag_slot_vars = e;
              b = {};
              b = ((b.google_ad_client = d.google_ad_client), (b.enable_page_level_ads = d), b);
              L.adsbygoogle || (L.adsbygoogle = []);
              c = L.adsbygoogle;
              c.loaded ? c.push(b) : c.splice(0, 0, b);
              d.google_adbreak_test && Xl(e, a);
              Xe(function () {
                Xl(e, a);
              });
            }
          }
          function Ul (a, b, c) {
            if (null == a) throw new N('push() called with no parameters.');
            if (
              'object' !== typeof a ||
              null == a ||
              ('string' !== typeof a.type &&
                'string' !== typeof a.sound &&
                'string' !== typeof a.preloadAdBreaks)
            ) {
              Ma = new Date().getTime();
              el(c, a.google_ad_client);
              Yl();
              a: {
                if (void 0 != a.enable_page_level_ads) {
                  if ('string' === typeof a.google_ad_client) {
                    c = !0;
                    break a;
                  }
                  throw new N("'google_ad_client' is missing from the tag config.");
                }
                c = !1;
              }
              if (c) Zl(a, b);
              else if (
                ((c = a.params) &&
                  Cd(c, function (f, g) {
                    b[g] = f;
                  }),
                'js' === b.google_ad_output)
              )
                console.warn(
                  "Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."
                );
              else {
                c = $l(a.element);
                pl(c, b);
                var d = O(A).head_tag_slot_vars || {};
                Gc(d, function (f, g) {
                  b.hasOwnProperty(g) || (b[g] = f);
                });
                if (c.hasAttribute('data-require-head') && !O(A).head_tag_slot_vars)
                  throw new N(
                    "AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com."
                  );
                if (!b.google_ad_client) throw new N('Ad client is missing from the slot.');
                b.google_apsail = gf(b.google_ad_client);
                var e = (d = 0 === (O(L).first_tag_on_page || 0) && vj(b)) && wj(d);
                d && !e && (Zl(d), (O(L).skip_next_reactive_tag = !0));
                0 === (O(L).first_tag_on_page || 0) && (O(L).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!O(L).pause_ad_requests;
                Jl(c, b);
                d && e && am(d);
              }
            } else
              null != Hl &&
                (null != a.sound || null != a.preloadAdBreaks
                  ? ve(787, function () {
                      Hl.handleAdConfig(a);
                    })
                  : Hl.handleAdBreak(a).catch(function (f) {
                      me.J(730, f instanceof Error ? f : Error(String(f)), void 0, void 0);
                    }));
          }
          function Yl () {
            if (T(369)) {
              var a = ze(L, void 0);
              (a && a.ia) || !Hh(L) || De(L, 1);
            }
          }
          function am (a) {
            Yc(function () {
              af(A).wasPlaTagProcessed || (A.adsbygoogle && A.adsbygoogle.push(a));
            });
          }
          function Zl (a, b) {
            O(L).skip_next_reactive_tag
              ? (O(L).skip_next_reactive_tag = !1)
              : (0 === (O(L).first_tag_on_page || 0) && (O(L).first_tag_on_page = 1),
                b && a.tag_partner && (Ce(A, a.tag_partner), Ce(b, a.tag_partner)),
                Ol(a),
                Tl(a));
          }
          function $l (a) {
            if (a) {
              if (!Il(a) && (a.id ? (a = Nl(a.id)) : (a = null), !a))
                throw new N("'element' has already been filled.");
              if (!('innerHTML' in a)) throw new N("'element' is not a good DOM element.");
            } else if (((a = Nl()), !a))
              throw new N(
                'All ins elements in the DOM with class=adsbygoogle already have ads in them.'
              );
            return a;
          }
          function bm () {
            var a = new Cl(L),
              b = new zl(L),
              c = new Al(L),
              d = L.__cmp ? 1 : 0;
            a = Dl(a) ? 1 : 0;
            var e;
            (e = 'function' === typeof b.f.__uspapi) ||
              (b.c ? (b = b.c) : ((b.c = Pc(b.f, '__uspapiLocator')), (b = b.c)), (e = null != b));
            xe('cmpMet', { tcfv1: d, tcfv2: a, usp: e ? 1 : 0, fc: c.c ? 1 : 0, ptt: 9 }, Qg(62));
          }
          function cm (a) {
            var b = tl();
            if (!1 === a.gdprApplies) var c = !0;
            else
              void 0 === a.internalErrorState && (a.internalErrorState = Bl(a)),
                (c =
                  'error' === a.cmpStatus ||
                  0 !== a.internalErrorState ||
                  ('loaded' === a.cmpStatus &&
                    ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus))
                    ? !0
                    : !1);
            if (c) {
              xl(b, 24, a);
              c = y(vl(b, 25, []));
              for (var d = c.next(); !d.done; d = c.next()) d.value.resolve(a);
              xl(b, 25, []);
            } else xl(b, 24, null);
          }
          function dm (a) {
            if (T(365)) {
              var b = tl();
              xl(b, 26, !!Number(a));
            } else if (Number(a)) {
              if ((a = zc()) && a.frames && !a.frames.GoogleSetNPA)
                try {
                  b = a.document;
                  var c = new sc(b),
                    d = b.body || (b.head && b.head.parentElement);
                  if (d) {
                    var e = rc(c.a, 'IFRAME');
                    e.name = 'GoogleSetNPA';
                    e.id = 'GoogleSetNPA';
                    e.setAttribute(
                      'style',
                      'display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;'
                    );
                    d.appendChild(e);
                  }
                } catch (f) {}
            } else
              (a = zc().document.getElementById('GoogleSetNPA')) &&
                a.parentNode &&
                a.parentNode.removeChild(a);
          }
          function em (a) {
            Number(a)
              ? (O(L).pause_ad_requests = !0)
              : ((O(L).pause_ad_requests = !1),
                (a = function () {
                  if (!O(L).pause_ad_requests) {
                    var b = Jd(),
                      c = Jd();
                    try {
                      if (Zc.createEvent) {
                        var d = Zc.createEvent('CustomEvent');
                        d.initCustomEvent('adsbygoogle-pub-unpause-ad-requests-event', !1, !1, '');
                        b.dispatchEvent(d);
                      } else if (Dd(c.CustomEvent)) {
                        var e = new c.CustomEvent('adsbygoogle-pub-unpause-ad-requests-event', {
                          bubbles: !1,
                          cancelable: !1,
                          detail: '',
                        });
                        b.dispatchEvent(e);
                      } else if (Dd(c.Event)) {
                        var f = new Event('adsbygoogle-pub-unpause-ad-requests-event', {
                          bubbles: !1,
                          cancelable: !1,
                        });
                        b.dispatchEvent(f);
                      }
                    } catch (g) {}
                  }
                }),
                A.setTimeout(a, 0),
                A.setTimeout(a, 1000));
          }
          function fm (a) {
            switch (a) {
              case 0:
                a = !0;
                break;
              case 1:
                a = !1;
                break;
              case 2:
                a = T(1016) ? !0 : !jd;
                break;
              default:
                throw Error('Illegal value of cookieOptions: ' + a);
            }
            L._gfp_a_ = a;
          }
          function gm (a) {
            Dd(a) && window.setTimeout(a, 0);
          }
          function Xl (a, b) {
            sj(pb(yd(b.ab).toString())).then(function (c) {
              null == Hl && (c.init(a), (Hl = c));
            });
          }
          var hm, im;
          im = hc(new yj(), 1, Re, 0);
          hm = hc(im, 2, hd(), '');
          (function (a, b, c, d) {
            d = void 0 === d ? function () {} : d;
            se();
            me.Fa(ye);
            ve(166, function () {
              d();
              var e = md(ld(L)) || L;
              Wg(e);
              if (
                ((!C('Trident') && !C('MSIE')) || 0 <= Bb(Ib(), 11)) &&
                (null == (L.Prototype || {}).Version || !T(1026))
              ) {
                var f = c(a, b);
                Ll();
                ne(T(84));
                if (T(312)) {
                  var g = we(780, function (m) {
                    L.google_trust_token_operation_status = m;
                  });
                  we(779, function () {
                    $k(new Vk(g));
                  })();
                }
                e = dl();
                null != e &&
                  e.then(function (m) {
                    L.google_user_agent_client_hint = m.j();
                  });
                if (T(1030) && ((e = new Cl(window)), Dl(e))) {
                  var h = tl();
                  void 0 === vl(h, 24, void 0) && (xl(h, 24, null), e.addEventListener(cm));
                }
                try {
                  Pk();
                } catch (m) {}
                if ((e = Md(A)))
                  (e = af(e)), e.tagSpecificState[1] || (e.tagSpecificState[1] = new oj());
                Wl(f);
                e = window.adsbygoogle;
                if (!e || !e.loaded) {
                  Qg(62) && bm();
                  h = {
                    push: function (m) {
                      Ql(m, f);
                    },
                    loaded: !0,
                  };
                  try {
                    Object.defineProperty(h, 'requestNonPersonalizedAds', { set: dm }),
                      Object.defineProperty(h, 'pauseAdRequests', { set: em }),
                      Object.defineProperty(h, 'cookieOptions', { set: fm }),
                      Object.defineProperty(h, 'onload', { set: gm });
                  } catch (m) {}
                  if (e)
                    for (
                      var k = y(['requestNonPersonalizedAds', 'pauseAdRequests', 'cookieOptions']),
                        l = k.next();
                      !l.done;
                      l = k.next()
                    )
                      (l = l.value), void 0 !== e[l] && (h[l] = e[l]);
                  '_gfp_a_' in window || (window._gfp_a_ = T(1016) ? !0 : !jd);
                  Pl(e, f);
                  window.adsbygoogle = h;
                  e && (h.onload = e.onload);
                }
              }
            });
          })('', hc(hm, 3, '/r20190131', ''), function (a, b) {
            var c = 2012 < H(b, 1, 0) ? '_fy' + H(b, 1, 0) : '';
            H(b, 3, '');
            var d = H(b, 3, '').replace(/^\//, ''),
              e = a ? Ge(He, a, c) : Ge(Ie, H(b, 2, ''), d, c);
            return {
              ab: a ? Ge(Je, a, c) : Ge(Ke, H(b, 2, ''), d, c),
              $a: e,
              Za: a ? Ge(Le, a, c) : Ge(Me, H(b, 2, ''), d, c),
              Ya: a ? Ge(Ne, a, c) : Ge(Oe, H(b, 2, ''), d, c),
            };
          });
        }.apply(this, arguments);
      } finally {
        if ($___old_803056d6cf2c8cd7)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_803056d6cf2c8cd7
          ));
        if ($___old_c31ca49237dee573)
          ({}.constructor.defineProperty(window, 'performance', $___old_c31ca49237dee573));
      }
    }.call(this));
  })();
}
