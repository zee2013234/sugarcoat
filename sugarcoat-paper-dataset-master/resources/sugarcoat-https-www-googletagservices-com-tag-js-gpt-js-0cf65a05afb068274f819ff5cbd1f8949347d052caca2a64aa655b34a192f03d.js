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
  const $___stub_2b47892348e4e4b9 = {};
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
  })($___stub_2b47892348e4e4b9);
  (function () {
    (function (E) {
      const $___old_b3a457b7bc95fe48 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        ),
        $___old_b044c8f91236cab7 = {}.constructor.getOwnPropertyDescriptor(window, 'performance');
      try {
        if ($___old_b3a457b7bc95fe48)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_47c01efa79e9f191.userAgent
          ));
        if ($___old_b044c8f91236cab7)
          ({}.constructor.defineProperty(
            window,
            'performance',
            $___stub_2b47892348e4e4b9.performance
          ));
        return function () {
          var window = this;
          if (window.googletag && googletag.evalScripts) {
            googletag.evalScripts();
          }
          if (window.googletag && googletag._loaded_) return;
          var aa = function (a) {
              var b = 0;
              return function () {
                return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
              };
            },
            ba =
              'function' == typeof Object.defineProperties
                ? Object.defineProperty
                : function (a, b, c) {
                    if (a == Array.prototype || a == Object.prototype) return a;
                    a[b] = c.value;
                    return a;
                  },
            ca = function (a) {
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
            },
            ea = ca(this),
            fa = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x'),
            m = {},
            ha = {},
            n = function (a, b) {
              var c = ha[b];
              if (null == c) return a[b];
              c = a[c];
              return void 0 !== c ? c : a[b];
            },
            q = function (a, b, c) {
              if (b)
                a: {
                  var d = a.split('.');
                  a = 1 === d.length;
                  var e = d[0],
                    f;
                  !a && e in m ? (f = m) : (f = ea);
                  for (e = 0; e < d.length - 1; e++) {
                    var h = d[e];
                    if (!(h in f)) break a;
                    f = f[h];
                  }
                  d = d[d.length - 1];
                  c = fa && 'es6' === c ? f[d] : null;
                  b = b(c);
                  null != b &&
                    (a
                      ? ba(m, d, { configurable: !0, writable: !0, value: b })
                      : b !== c &&
                        ((ha[d] = fa ? ea.Symbol(d) : '$jscp$' + d),
                        (d = ha[d]),
                        ba(f, d, { configurable: !0, writable: !0, value: b })));
                }
            };
          q(
            'Symbol',
            function (a) {
              if (a) return a;
              var b = function (e, f) {
                this.a = e;
                ba(this, 'description', { configurable: !0, writable: !0, value: f });
              };
              b.prototype.toString = function () {
                return this.a;
              };
              var c = 0,
                d = function (e) {
                  if (this instanceof d) throw new TypeError('Symbol is not a constructor');
                  return new b('jscomp_symbol_' + (e || '') + '_' + c++, e);
                };
              return d;
            },
            'es6'
          );
          q(
            'Symbol.iterator',
            function (a) {
              if (a) return a;
              a = (0, m.Symbol)('Symbol.iterator');
              for (
                var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
                    ' '
                  ),
                  c = 0;
                c < b.length;
                c++
              ) {
                var d = ea[b[c]];
                'function' === typeof d &&
                  'function' != typeof d.prototype[a] &&
                  ba(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                      return ia(aa(this));
                    },
                  });
              }
              return a;
            },
            'es6'
          );
          var ia = function (a) {
              a = { next: a };
              a[n(m.Symbol, 'iterator')] = function () {
                return this;
              };
              return a;
            },
            r = function (a) {
              var b =
                'undefined' != typeof m.Symbol &&
                n(m.Symbol, 'iterator') &&
                a[n(m.Symbol, 'iterator')];
              return b ? b.call(a) : { next: aa(a) };
            },
            ja = function (a) {
              for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
              return c;
            },
            ka = function (a) {
              return a instanceof Array ? a : ja(r(a));
            },
            la =
              'function' == typeof Object.create
                ? Object.create
                : function (a) {
                    var b = function () {};
                    b.prototype = a;
                    return new b();
                  },
            ma;
          if (fa && 'function' == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
          else {
            var na;
            a: {
              var oa = { T: !0 },
                pa = {};
              try {
                pa.__proto__ = oa;
                na = pa.T;
                break a;
              } catch (a) {}
              na = !1;
            }
            ma = na
              ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
                  return a;
                }
              : null;
          }
          var qa = ma,
            ra = function (a, b) {
              a.prototype = la(b.prototype);
              a.prototype.constructor = a;
              if (qa) qa(a, b);
              else
                for (var c in b)
                  if ('prototype' != c)
                    if (Object.defineProperties) {
                      var d = Object.getOwnPropertyDescriptor(b, c);
                      d && Object.defineProperty(a, c, d);
                    } else a[c] = b[c];
              a.U = b.prototype;
            },
            t = function (a, b) {
              return Object.prototype.hasOwnProperty.call(a, b);
            },
            sa = function (a, b, c) {
              if (null == a)
                throw new TypeError(
                  "The 'this' value for String.prototype." + c + ' must not be null or undefined'
                );
              if (b instanceof RegExp)
                throw new TypeError(
                  'First argument to String.prototype.' + c + ' must not be a regular expression'
                );
              return a + '';
            };
          q(
            'String.prototype.startsWith',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    var d = sa(this, b, 'startsWith'),
                      e = d.length,
                      f = b.length;
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var h = 0; h < f && c < e; ) if (d[c++] != b[h++]) return !1;
                    return h >= f;
                  };
            },
            'es6'
          );
          var ta = function (a, b) {
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
            e[n(m.Symbol, 'iterator')] = function () {
              return e;
            };
            return e;
          };
          q(
            'Array.prototype.keys',
            function (a) {
              return a
                ? a
                : function () {
                    return ta(this, function (b) {
                      return b;
                    });
                  };
            },
            'es6'
          );
          q(
            'Array.prototype.values',
            function (a) {
              return a
                ? a
                : function () {
                    return ta(this, function (b, c) {
                      return c;
                    });
                  };
            },
            'es8'
          );
          q(
            'Array.prototype.findIndex',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    a: {
                      var d = this;
                      d instanceof String && (d = String(d));
                      for (var e = d.length, f = 0; f < e; f++)
                        if (b.call(c, d[f], f, d)) {
                          b = f;
                          break a;
                        }
                      b = -1;
                    }
                    return b;
                  };
            },
            'es6'
          );
          q(
            'Object.is',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
                  };
            },
            'es6'
          );
          q(
            'Array.prototype.includes',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    var d = this;
                    d instanceof String && (d = String(d));
                    var e = d.length;
                    c = c || 0;
                    for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                      var f = d[c];
                      if (f === b || n(Object, 'is').call(Object, f, b)) return !0;
                    }
                    return !1;
                  };
            },
            'es7'
          );
          q(
            'String.prototype.includes',
            function (a) {
              return a
                ? a
                : function (b, c) {
                    return -1 !== sa(this, b, 'includes').indexOf(b, c || 0);
                  };
            },
            'es6'
          );
          q(
            'WeakMap',
            function (a) {
              function b () {}
              function c (h) {
                var g = typeof h;
                return ('object' === g && null !== h) || 'function' === g;
              }
              if (
                (function () {
                  if (!a || !Object.seal) return !1;
                  try {
                    var h = Object.seal({}),
                      g = Object.seal({}),
                      k = new a([
                        [h, 2],
                        [g, 3],
                      ]);
                    if (2 != k.get(h) || 3 != k.get(g)) return !1;
                    k.delete(h);
                    k.set(g, 4);
                    return !k.has(h) && 4 == k.get(g);
                  } catch (l) {
                    return !1;
                  }
                })()
              )
                return a;
              var d = '$jscomp_hidden_' + Math.random(),
                e = 0,
                f = function (h) {
                  this.a = (e += Math.random() + 1).toString();
                  if (h) {
                    h = r(h);
                    for (var g; !(g = h.next()).done; ) (g = g.value), this.set(g[0], g[1]);
                  }
                };
              f.prototype.set = function (h, g) {
                if (!c(h)) throw Error('Invalid WeakMap key');
                if (!t(h, d)) {
                  var k = new b();
                  ba(h, d, { value: k });
                }
                if (!t(h, d)) throw Error('WeakMap key fail: ' + h);
                h[d][this.a] = g;
                return this;
              };
              f.prototype.get = function (h) {
                return c(h) && t(h, d) ? h[d][this.a] : void 0;
              };
              f.prototype.has = function (h) {
                return c(h) && t(h, d) && t(h[d], this.a);
              };
              f.prototype.delete = function (h) {
                return c(h) && t(h, d) && t(h[d], this.a) ? delete h[d][this.a] : !1;
              };
              return f;
            },
            'es6'
          );
          q(
            'Map',
            function (a) {
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
                    var g = Object.seal({ x: 4 }),
                      k = new a(r([[g, 's']]));
                    if (
                      's' != k.get(g) ||
                      1 != k.size ||
                      k.get({ x: 4 }) ||
                      k.set({ x: 4 }, 't') != k ||
                      2 != k.size
                    )
                      return !1;
                    var l = k.entries(),
                      p = l.next();
                    if (p.done || p.value[0] != g || 's' != p.value[1]) return !1;
                    p = l.next();
                    return p.done || 4 != p.value[0].x || 't' != p.value[1] || !l.next().done
                      ? !1
                      : !0;
                  } catch (da) {
                    return !1;
                  }
                })()
              )
                return a;
              var b = new m.WeakMap(),
                c = function (g) {
                  this.c = {};
                  this.a = f();
                  this.size = 0;
                  if (g) {
                    g = r(g);
                    for (var k; !(k = g.next()).done; ) (k = k.value), this.set(k[0], k[1]);
                  }
                };
              c.prototype.set = function (g, k) {
                g = 0 === g ? 0 : g;
                var l = d(this, g);
                l.list || (l.list = this.c[l.id] = []);
                l.j
                  ? (l.j.value = k)
                  : ((l.j = { next: this.a, m: this.a.m, head: this.a, key: g, value: k }),
                    l.list.push(l.j),
                    (this.a.m.next = l.j),
                    (this.a.m = l.j),
                    this.size++);
                return this;
              };
              c.prototype.delete = function (g) {
                g = d(this, g);
                return g.j && g.list
                  ? (g.list.splice(g.index, 1),
                    g.list.length || delete this.c[g.id],
                    (g.j.m.next = g.j.next),
                    (g.j.next.m = g.j.m),
                    (g.j.head = null),
                    this.size--,
                    !0)
                  : !1;
              };
              c.prototype.clear = function () {
                this.c = {};
                this.a = this.a.m = f();
                this.size = 0;
              };
              c.prototype.has = function (g) {
                return !!d(this, g).j;
              };
              c.prototype.get = function (g) {
                return (g = d(this, g).j) && g.value;
              };
              c.prototype.entries = function () {
                return e(this, function (g) {
                  return [g.key, g.value];
                });
              };
              c.prototype.keys = function () {
                return e(this, function (g) {
                  return g.key;
                });
              };
              c.prototype.values = function () {
                return e(this, function (g) {
                  return g.value;
                });
              };
              c.prototype.forEach = function (g, k) {
                for (var l = this.entries(), p; !(p = l.next()).done; )
                  (p = p.value), g.call(k, p[1], p[0], this);
              };
              c.prototype[n(m.Symbol, 'iterator')] = c.prototype.entries;
              var d = function (g, k) {
                  var l = k && typeof k;
                  'object' == l || 'function' == l
                    ? b.has(k)
                      ? (l = b.get(k))
                      : ((l = '' + ++h), b.set(k, l))
                    : (l = 'p_' + k);
                  var p = g.c[l];
                  if (p && t(g.c, l))
                    for (g = 0; g < p.length; g++) {
                      var da = p[g];
                      if ((k !== k && da.key !== da.key) || k === da.key)
                        return { id: l, list: p, index: g, j: da };
                    }
                  return { id: l, list: p, index: -1, j: void 0 };
                },
                e = function (g, k) {
                  var l = g.a;
                  return ia(function () {
                    if (l) {
                      for (; l.head != g.a; ) l = l.m;
                      for (; l.next != l.head; ) return (l = l.next), { done: !1, value: k(l) };
                      l = null;
                    }
                    return { done: !0, value: void 0 };
                  });
                },
                f = function () {
                  var g = {};
                  return (g.m = g.next = g.head = g);
                },
                h = 0;
              return c;
            },
            'es6'
          );
          q(
            'Set',
            function (a) {
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
                      d = new a(r([c]));
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
                  } catch (h) {
                    return !1;
                  }
                })()
              )
                return a;
              var b = function (c) {
                this.a = new m.Map();
                if (c) {
                  c = r(c);
                  for (var d; !(d = c.next()).done; ) this.add(d.value);
                }
                this.size = this.a.size;
              };
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
                return n(this.a, 'values').call(this.a);
              };
              b.prototype.keys = n(b.prototype, 'values');
              b.prototype[n(m.Symbol, 'iterator')] = n(b.prototype, 'values');
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
          var u = this || self,
            wa = function (a) {
              if (a && a != u) return ua(a.document);
              null === va && (va = ua(u.document));
              return va;
            },
            xa = /^[\w+/_-]+[=]{0,2}$/,
            va = null,
            ua = function (a) {
              return (a = a.querySelector && a.querySelector('script[nonce]')) &&
                (a = a.nonce || a.getAttribute('nonce')) &&
                xa.test(a)
                ? a
                : '';
            },
            ya = function (a) {
              const $___old_6ed83b16d771ddb9 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'localStorage'
              );
              try {
                if ($___old_6ed83b16d771ddb9)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___stub_b317e19f866a2da7.localStorage
                  ));
                return function () {
                  a = a.split('.');
                  for (var b = u, c = 0; c < a.length; c++)
                    if (((b = b[a[c]]), null == b)) return null;
                  return b;
                }.apply(this, arguments);
              } finally {
                if ($___old_6ed83b16d771ddb9)
                  ({}.constructor.defineProperty(
                    window,
                    'localStorage',
                    $___old_6ed83b16d771ddb9
                  ));
              }
            },
            v = function (a) {
              a.C = void 0;
              a.g = function () {
                return a.C ? a.C : (a.C = new a());
              };
            },
            Ba = function (a) {
              return (Object.prototype.hasOwnProperty.call(a, za) && a[za]) || (a[za] = ++Aa);
            },
            za = 'closure_uid_' + ((1000000000 * Math.random()) >>> 0),
            Aa = 0,
            Ca = function (a, b) {
              for (var c in b) a[c] = b[c];
            },
            w = function (a, b) {
              function c () {}
              c.prototype = b.prototype;
              a.U = b.prototype;
              a.prototype = new c();
              a.prototype.constructor = a;
              a.V = function (d, e, f) {
                for (var h = Array(arguments.length - 2), g = 2; g < arguments.length; g++)
                  h[g - 2] = arguments[g];
                return b.prototype[e].apply(d, h);
              };
            };
          var Da;
          var x = function (a, b) {
              Array.prototype.forEach.call(a, b, void 0);
            },
            Ea = function (a, b) {
              return Array.prototype.filter.call(a, b, void 0);
            },
            Fa = function (a, b) {
              return Array.prototype.map.call(a, b, void 0);
            };
          function Ga (a, b) {
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
          function Ha (a, b) {
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
          function Ia (a, b) {
            return 0 <= Array.prototype.indexOf.call(a, b, void 0);
          }
          var Ja = function (a) {
            var b = !1,
              c;
            return function () {
              b || ((c = a()), (b = !0));
              return c;
            };
          };
          var Ka = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          };
          var y = function (a, b) {
            this.c = (a === La && b) || '';
            this.f = Ma;
          };
          y.prototype.s = !0;
          y.prototype.a = function () {
            return this.c;
          };
          var Na = function (a) {
              return a instanceof y && a.constructor === y && a.f === Ma
                ? a.c
                : 'type_error:Const';
            },
            z = function (a) {
              return new y(La, a);
            },
            Ma = {},
            La = {};
          var A = function (a, b) {
            this.f = b === Oa ? a : '';
          };
          A.prototype.s = !0;
          A.prototype.a = function () {
            return this.f.toString();
          };
          A.prototype.B = !0;
          A.prototype.c = function () {
            return 1;
          };
          var Pa = function (a) {
              return a instanceof A && a.constructor === A ? a.f : 'type_error:TrustedResourceUrl';
            },
            Sa = function (a) {
              var b = Na(z('https://fundingchoicesmessages.google.com/uf/%{id}?ers=%{ers}'));
              if (!Qa.test(b)) throw Error('Invalid TrustedResourceUrl format: ' + b);
              var c = b.replace(Ra, function (d, e) {
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
                return d instanceof y ? Na(d) : encodeURIComponent(String(d));
              });
              return new A(c, Oa);
            },
            Ra = /%{(\w+)}/g,
            Qa = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            Ta = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
            Oa = {},
            Ua = function (a, b, c) {
              if (null == c) return b;
              if ('string' === typeof c) return c ? a + encodeURIComponent(c) : '';
              for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                  var e = c[d];
                  e = Array.isArray(e) ? e : [e];
                  for (var f = 0; f < e.length; f++) {
                    var h = e[f];
                    null != h &&
                      (b || (b = a),
                      (b +=
                        (b.length > a.length ? '&' : '') +
                        encodeURIComponent(d) +
                        '=' +
                        encodeURIComponent(String(h))));
                  }
                }
              return b;
            };
          var Va = function (a) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
            },
            cb = function (a) {
              if (!Wa.test(a)) return a;
              -1 != a.indexOf('&') && (a = a.replace(Xa, '&amp;'));
              -1 != a.indexOf('<') && (a = a.replace(Ya, '&lt;'));
              -1 != a.indexOf('>') && (a = a.replace(Za, '&gt;'));
              -1 != a.indexOf('"') && (a = a.replace($a, '&quot;'));
              -1 != a.indexOf("'") && (a = a.replace(ab, '&#39;'));
              -1 != a.indexOf('\0') && (a = a.replace(bb, '&#0;'));
              return a;
            },
            Xa = /&/g,
            Ya = /</g,
            Za = />/g,
            $a = /"/g,
            ab = /'/g,
            bb = /\x00/g,
            Wa = /[\x00&<>"']/,
            eb = function (a, b) {
              var c = 0;
              a = Va(String(a)).split('.');
              b = Va(String(b)).split('.');
              for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || '',
                  h = b[e] || '';
                do {
                  f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
                  h = /(\d*)(\D*)(.*)/.exec(h) || ['', '', '', ''];
                  if (0 == f[0].length && 0 == h[0].length) break;
                  c =
                    db(
                      0 == f[1].length ? 0 : parseInt(f[1], 10),
                      0 == h[1].length ? 0 : parseInt(h[1], 10)
                    ) ||
                    db(0 == f[2].length, 0 == h[2].length) ||
                    db(f[2], h[2]);
                  f = f[3];
                  h = h[3];
                } while (0 == c);
              }
              return c;
            },
            db = function (a, b) {
              return a < b ? -1 : a > b ? 1 : 0;
            };
          var B = function (a, b) {
            this.f = b === fb ? a : '';
          };
          B.prototype.s = !0;
          B.prototype.a = function () {
            return this.f.toString();
          };
          B.prototype.B = !0;
          B.prototype.c = function () {
            return 1;
          };
          var gb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
            hb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
            ib = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
            fb = {},
            jb = new B('about:invalid#zClosurez', fb);
          var C;
          a: {
            var kb = u.navigator;
            if (kb) {
              var lb = kb.userAgent;
              if (lb) {
                C = lb;
                break a;
              }
            }
            C = '';
          }
          var D = function (a, b, c) {
            this.f = c === mb ? a : '';
            this.h = b;
          };
          D.prototype.B = !0;
          D.prototype.c = function () {
            return this.h;
          };
          D.prototype.s = !0;
          D.prototype.a = function () {
            return this.f.toString();
          };
          var nb = function (a) {
              return a instanceof D && a.constructor === D ? a.f : 'type_error:SafeHtml';
            },
            ob = function (a) {
              if (a instanceof D) return a;
              var b = 'object' == typeof a,
                c = null;
              b && a.B && (c = a.c());
              a = cb(b && a.s ? a.a() : String(a));
              return new D(a, c, mb);
            },
            pb = /^[a-zA-Z0-9-]+$/,
            qb = {
              action: !0,
              cite: !0,
              data: !0,
              formaction: !0,
              href: !0,
              manifest: !0,
              poster: !0,
              src: !0,
            },
            sb = function (a, b) {
              var c = { src: a },
                d = {};
              a = {};
              for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
              for (e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
              if (b)
                for (e in b)
                  if (Object.prototype.hasOwnProperty.call(b, e)) {
                    var f = e.toLowerCase();
                    if (f in c) throw Error('');
                    f in d && delete a[f];
                    a[e] = b[e];
                  }
              b = null;
              e = '';
              if (a)
                for (h in a)
                  if (Object.prototype.hasOwnProperty.call(a, h)) {
                    if (!pb.test(h)) throw Error('');
                    d = a[h];
                    if (null != d) {
                      c = h;
                      if (d instanceof y) d = Na(d);
                      else {
                        if ('style' == c.toLowerCase()) throw Error('');
                        if (/^on/i.test(c)) throw Error('');
                        if (c.toLowerCase() in qb)
                          if (d instanceof A) d = Pa(d).toString();
                          else if (d instanceof B)
                            d = d instanceof B && d.constructor === B ? d.f : 'type_error:SafeUrl';
                          else if ('string' === typeof d)
                            d instanceof B ||
                              ((d = 'object' == typeof d && d.s ? d.a() : String(d)),
                              ib.test(d)
                                ? (d = new B(d, fb))
                                : ((d = String(d)),
                                  (d = d.replace(/(%0A|%0D)/g, '')),
                                  (d = (f = d.match(hb)) && gb.test(f[1]) ? new B(d, fb) : null))),
                              (d = (d || jb).a());
                          else throw Error('');
                      }
                      d.s && (d = d.a());
                      c = c + '="' + cb(String(d)) + '"';
                      e += ' ' + c;
                    }
                  }
              var h = '<script' + e;
              e = void 0;
              null == e ? (e = []) : Array.isArray(e) || (e = [e]);
              !0 === Ka.script
                ? (h += '>')
                : ((b = rb(e)), (h += '>' + nb(b).toString() + '</script>'), (b = b.c()));
              (a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
              return new D(h, b, mb);
            },
            ub = function (a) {
              var b = ob(tb),
                c = b.c(),
                d = [],
                e = function (f) {
                  Array.isArray(f)
                    ? x(f, e)
                    : ((f = ob(f)),
                      d.push(nb(f).toString()),
                      (f = f.c()),
                      0 == c ? (c = f) : 0 != f && c != f && (c = null));
                };
              x(a, e);
              return new D(d.join(nb(b).toString()), c, mb);
            },
            rb = function (a) {
              return ub(Array.prototype.slice.call(arguments));
            },
            mb = {},
            tb = new D((u.trustedTypes && u.trustedTypes.emptyHTML) || '', 0, mb);
          var vb = function (a, b) {
              a.write(nb(b));
            },
            wb = function (a) {
              var b = wa(a.ownerDocument && a.ownerDocument.defaultView);
              b && a.setAttribute('nonce', b);
            };
          var xb = {},
            yb = null;
          var F = function () {},
            zb = 'function' == typeof Uint8Array,
            G = function (a, b, c, d) {
              a.a = null;
              b || (b = []);
              a.u = void 0;
              a.f = -1;
              a.i = b;
              a: {
                if ((b = a.i.length)) {
                  --b;
                  var e = a.i[b];
                  if (
                    !(
                      null === e ||
                      'object' != typeof e ||
                      Array.isArray(e) ||
                      (zb && e instanceof Uint8Array)
                    )
                  ) {
                    a.h = b - a.f;
                    a.c = e;
                    break a;
                  }
                }
                a.h = Number.MAX_VALUE;
              }
              a.o = {};
              if (c)
                for (b = 0; b < c.length; b++)
                  (e = c[b]),
                    e < a.h
                      ? ((e += a.f), (a.i[e] = a.i[e] || Ab))
                      : (Bb(a), (a.c[e] = a.c[e] || Ab));
              if (d && d.length) for (b = 0; b < d.length; b++) Cb(a, d[b]);
            },
            Ab = [],
            Bb = function (a) {
              var b = a.h + a.f;
              a.i[b] || (a.c = a.i[b] = {});
            },
            H = function (a, b) {
              if (b < a.h) {
                b += a.f;
                var c = a.i[b];
                return c !== Ab ? c : (a.i[b] = []);
              }
              if (a.c) return (c = a.c[b]), c === Ab ? (a.c[b] = []) : c;
            },
            I = function (a, b, c) {
              a = H(a, b);
              return null == a ? c : a;
            },
            Db = function (a, b) {
              a = H(a, b);
              a = null == a ? a : +a;
              return null == a ? 0 : a;
            },
            J = function (a, b, c) {
              b < a.h ? (a.i[b + a.f] = c) : (Bb(a), (a.c[b] = c));
              return a;
            },
            Cb = function (a, b) {
              for (var c, d, e = 0; e < b.length; e++) {
                var f = b[e],
                  h = H(a, f);
                null != h && ((c = f), (d = h), J(a, f, void 0));
              }
              return c ? (J(a, c, d), c) : 0;
            },
            K = function (a, b, c) {
              a.a || (a.a = {});
              if (!a.a[c]) {
                var d = H(a, c);
                d && (a.a[c] = new b(d));
              }
              return a.a[c];
            },
            L = function (a, b, c) {
              a.a || (a.a = {});
              if (!a.a[c]) {
                for (var d = H(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.a[c] = e;
              }
              b = a.a[c];
              b == Ab && (b = a.a[c] = []);
              return b;
            },
            Eb = function (a, b, c) {
              a.a || (a.a = {});
              c = c || [];
              for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].i;
              a.a[b] = c;
              J(a, b, d);
            };
          F.prototype.l = zb
            ? function () {
                var a = Uint8Array.prototype.toJSON;
                Uint8Array.prototype.toJSON = function () {
                  var b;
                  void 0 === b && (b = 0);
                  if (!yb) {
                    yb = {};
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
                      xb[e] = f;
                      for (var h = 0; h < f.length; h++) {
                        var g = f[h];
                        void 0 === yb[g] && (yb[g] = h);
                      }
                    }
                  }
                  b = xb[b];
                  c = [];
                  for (d = 0; d < this.length; d += 3) {
                    var k = this[d],
                      l = (e = d + 1 < this.length) ? this[d + 1] : 0;
                    g = (f = d + 2 < this.length) ? this[d + 2] : 0;
                    h = k >> 2;
                    k = ((k & 3) << 4) | (l >> 4);
                    l = ((l & 15) << 2) | (g >> 6);
                    g &= 63;
                    f || ((g = 64), e || (l = 64));
                    c.push(b[h], b[k], b[l] || '', b[g] || '');
                  }
                  return c.join('');
                };
                try {
                  return JSON.stringify(this.i && this.i, Fb);
                } finally {
                  Uint8Array.prototype.toJSON = a;
                }
              }
            : function () {
                return JSON.stringify(this.i && this.i, Fb);
              };
          var Fb = function (a, b) {
            return 'number' !== typeof b || (!isNaN(b) && Infinity !== b && -Infinity !== b)
              ? b
              : String(b);
          };
          var Gb = function (a, b) {
            var c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || '';
            this.id = b.id || 'jserror';
            this.meta = c;
          };
          var Ib = function (a) {
              return a
                ? new Hb(9 == a.nodeType ? a : a.ownerDocument || a.document)
                : Da || (Da = new Hb());
            },
            Hb = function (a) {
              this.a = a || u.document || document;
            };
          Hb.prototype.createElement = function (a) {
            var b = this.a;
            a = String(a);
            'application/xhtml+xml' === b.contentType && (a = a.toLowerCase());
            return b.createElement(a);
          };
          Hb.prototype.appendChild = function (a, b) {
            a.appendChild(b);
          };
          var Jb = function () {
            return (
              -1 != C.indexOf('iPad') ||
              (-1 != C.indexOf('Android') && -1 == C.indexOf('Mobile')) ||
              -1 != C.indexOf('Silk')
            );
          };
          var Kb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
            Lb = function (a) {
              return a ? decodeURI(a) : a;
            },
            Mb = /#|$/,
            Nb = function (a) {
              var b = a.search(Mb),
                c;
              a: {
                for (c = 0; 0 <= (c = a.indexOf('network-code', c)) && c < b; ) {
                  var d = a.charCodeAt(c - 1);
                  if (38 == d || 63 == d)
                    if (((d = a.charCodeAt(c + 12)), !d || 61 == d || 38 == d || 35 == d)) break a;
                  c += 13;
                }
                c = -1;
              }
              if (0 > c) return null;
              d = a.indexOf('&', c);
              if (0 > d || d > b) d = b;
              c += 13;
              return decodeURIComponent(a.substr(c, d - c).replace(/\+/g, ' '));
            };
          var Rb = function (a, b) {
              if (!Ob() && !Pb()) {
                var c = Math.random();
                if (c < b) return (c = Qb(u)), a[Math.floor(c * a.length)];
              }
              return null;
            },
            Qb = function (a) {
              if (!a.crypto) return Math.random();
              try {
                var b = new Uint32Array(1);
                a.crypto.getRandomValues(b);
                return b[0] / 65536 / 65536;
              } catch (c) {
                return Math.random();
              }
            },
            Sb = function (a, b) {
              if (a)
                for (var c in a)
                  Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a);
            },
            Pb = Ja(function () {
              return (
                Array.prototype.some.call(
                  [
                    'Google Web Preview',
                    'Mediapartners-Google',
                    'Google-Read-Aloud',
                    'Google-Adwords',
                  ],
                  Tb,
                  void 0
                ) || 0.0001 > Math.random()
              );
            }),
            Ob = Ja(function () {
              return Tb('MSIE');
            }),
            Tb = function (a) {
              return -1 != C.indexOf(a);
            },
            Ub = /^(-?[0-9.]{1,30})$/,
            Vb = function (a, b) {
              return Ub.test(a) && ((a = Number(a)), !isNaN(a)) ? a : void 0 == b ? null : b;
            },
            Wb = Ja(function () {
              return Jb() ||
                (-1 == C.indexOf('iPod') &&
                  -1 == C.indexOf('iPhone') &&
                  -1 == C.indexOf('Android') &&
                  -1 == C.indexOf('IEMobile'))
                ? Jb()
                  ? 1
                  : 0
                : 2;
            }),
            Xb = function () {
              var a = void 0 === a ? window : a;
              if ((a = Lb(a.location.href.match(Kb)[3] || null))) {
                var b = a.length;
                if (0 == b) a = 0;
                else {
                  for (var c = 305419896, d = 0; d < b; d++)
                    c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
                  a = 0 < c ? c : 4294967296 + c;
                }
              } else a = null;
              return a;
            };
          var M = function () {
            this.a = this.a;
            this.c = this.c;
          };
          M.prototype.a = !1;
          M.prototype.o = function () {
            if (this.c) for (; this.c.length; ) this.c.shift()();
          };
          var Zb = function (a, b) {
              var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=' + b;
              Sb(a, function (d, e) {
                d && (c += '&' + e + '=' + encodeURIComponent(d));
              });
              Yb(c);
            },
            Yb = function (a) {
              var b = window;
              if (b.fetch)
                b.fetch(a, {
                  keepalive: !0,
                  credentials: 'include',
                  redirect: 'follow',
                  method: 'get',
                  mode: 'no-cors',
                });
              else {
                b.google_image_requests || (b.google_image_requests = []);
                var c = b.document.createElement('img');
                c.src = a;
                b.google_image_requests.push(c);
              }
            };
          var $b = {};
          var ac = function () {},
            bc = function (a, b) {
              if (b !== $b) throw Error('Bad secret');
              this.a = a;
            };
          ra(bc, ac);
          bc.prototype.toString = function () {
            return this.a;
          };
          new bc('about:blank', $b);
          new bc('about:invalid#zTSz', $b);
          var dc = function (a) {
            G(this, a, cc, null);
          };
          w(dc, F);
          var cc = [6];
          var ec = function (a, b, c, d, e, f) {
            try {
              var h = a.a,
                g = a.createElement('SCRIPT');
              g.async = !0;
              g.src = Pa(b);
              wb(g);
              h.head.appendChild(g);
              g.addEventListener('load', function () {
                e();
                d && h.head.removeChild(g);
              });
              g.addEventListener('error', function () {
                0 < c ? ec(a, b, c - 1, d, e, f) : (d && h.head.removeChild(g), f());
              });
            } catch (k) {
              f();
            }
          };
          var fc = function (a) {
            var b = a.document,
              c = Ib(a),
              d = function () {
                if (!a.frames.googlefcPresent)
                  if (b.body) {
                    var e = c.createElement('IFRAME');
                    e.style.display = 'none';
                    e.style.width = '0px';
                    e.style.height = '0px';
                    e.style.border = 'none';
                    e.style.zIndex = '-1000';
                    e.style.left = '-1000px';
                    e.style.top = '-1000px';
                    e.name = 'googlefcPresent';
                    b.body.appendChild(e);
                  } else a.setTimeout(d, 5);
              };
            d();
          };
          var gc = function (a, b) {
            this.a = a;
            this.c = Ib(this.a);
            this.f = b;
          };
          gc.prototype.start = function () {
            try {
              fc(this.a), hc(this);
            } catch (a) {}
          };
          var hc = function (a) {
            var b = Sa({ id: a.f, ers: 3 });
            ec(
              a.c,
              b,
              0,
              !1,
              function () {},
              function () {}
            );
          };
          var ic = null,
            jc = function () {
              if (null === ic) {
                ic = '';
                try {
                  var a = '';
                  try {
                    a = u.top.location.hash;
                  } catch (c) {
                    a = u.location.hash;
                  }
                  if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    ic = b ? b[1] : '';
                  }
                } catch (c) {}
              }
              return ic;
            };
          var N = function (a) {
            G(this, a, kc, lc);
          };
          w(N, F);
          var kc = [2, 8],
            lc = [
              [3, 4, 5],
              [6, 7],
            ];
          var mc = function (a) {
              return null != a ? !a : a;
            },
            nc = function (a, b) {
              for (var c = !1, d = 0; d < a.length; d++) {
                var e = a[d].call();
                if (e == b) return e;
                null == e && (c = !0);
              }
              if (!c) return !b;
            },
            pc = function (a, b) {
              var c = L(a, N, 2);
              if (!c.length) return oc(a, b);
              a = I(a, 1, 0);
              if (1 == a) return mc(pc(c[0], b));
              c = Fa(c, function (d) {
                return function () {
                  return pc(d, b);
                };
              });
              switch (a) {
                case 2:
                  return nc(c, !1);
                case 3:
                  return nc(c, !0);
              }
            },
            oc = function (a, b) {
              var c = Cb(a, lc[0]);
              a: {
                switch (c) {
                  case 3:
                    var d = I(a, 3, 0);
                    break a;
                  case 4:
                    d = I(a, 4, 0);
                    break a;
                  case 5:
                    d = I(a, 5, 0);
                    break a;
                }
                d = void 0;
              }
              if (d && (b = (b = b[c]) && b[d])) {
                try {
                  var e = b.apply(null, H(a, 8));
                } catch (f) {
                  return;
                }
                b = I(a, 1, 0);
                if (4 == b) return !!e;
                d = null != e;
                if (5 == b) return d;
                if (12 == b) a = I(a, 7, '');
                else
                  a: {
                    switch (c) {
                      case 4:
                        a = Db(a, 6);
                        break a;
                      case 5:
                        a = I(a, 7, '');
                        break a;
                    }
                    a = void 0;
                  }
                if (null != a) {
                  if (6 == b) return e === a;
                  if (9 == b) return 0 == eb(e, a);
                  if (d)
                    switch (b) {
                      case 7:
                        return e < a;
                      case 8:
                        return e > a;
                      case 12:
                        return new RegExp(a).test(e);
                      case 10:
                        return -1 == eb(e, a);
                      case 11:
                        return 1 == eb(e, a);
                    }
                }
              }
            },
            qc = function (a, b) {
              return !a || !(!b || !pc(a, b));
            };
          var sc = function (a) {
            G(this, a, rc, null);
          };
          w(sc, F);
          var rc = [4];
          var O = function (a) {
            G(this, a, tc, uc);
          };
          w(O, F);
          var vc = function (a) {
            G(this, a, null, null);
          };
          w(vc, F);
          var tc = [5],
            uc = [[1, 2, 3, 6, 7]];
          var P = function () {
            var a = {};
            this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
          };
          v(P);
          var wc = /^true$/.test('false');
          var xc = wc,
            yc = function (a, b) {
              switch (b) {
                case 1:
                  return I(a, 1, 0);
                case 2:
                  return I(a, 2, 0);
                case 3:
                  return I(a, 3, 0);
                case 6:
                  return I(a, 6, 0);
                default:
                  return null;
              }
            },
            zc = function (a, b) {
              if (!a) return null;
              switch (b) {
                case 1:
                  return (a = H(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
                case 7:
                  return I(a, 3, '');
                case 2:
                  return Db(a, 2);
                case 3:
                  return I(a, 3, '');
                case 6:
                  return H(a, 4);
                default:
                  return null;
              }
            },
            Ac = Ja(function () {
              if (!xc) return {};
              try {
                var a = window.sessionStorage && window.sessionStorage.getItem('GGDFSSK');
                if (a) return JSON.parse(a);
              } catch (b) {}
              return {};
            }),
            Dc = function (a, b, c, d) {
              d = void 0 === d ? 0 : d;
              var e = Ac();
              if (e[a] && null != e[a][b]) return e[a][b];
              b = Bc(d)[a][b];
              if (!b) return c;
              b = new O(b);
              b = Cc(b);
              a = zc(b, a);
              return null != a ? a : c;
            },
            Cc = function (a) {
              var b = P.g().a;
              if (b) {
                var c = Ha(L(a, vc, 5), function (d) {
                  return qc(K(d, N, 1), b);
                });
                if (c) return K(c, sc, 2);
              }
              return K(a, sc, 4);
            },
            Ec = function () {
              this.a = {};
              this.c = [];
            };
          v(Ec);
          var Fc = function (a, b, c) {
              return !!Dc(1, a, void 0 === b ? !1 : b, c);
            },
            Gc = function (a, b, c) {
              b = void 0 === b ? 0 : b;
              a = Number(Dc(2, a, b, c));
              return isNaN(a) ? b : a;
            },
            Hc = function (a, b, c) {
              return Dc(3, a, void 0 === b ? '' : b, c);
            },
            Ic = function (a, b, c) {
              b = void 0 === b ? [] : b;
              return Dc(6, a, b, c);
            },
            Bc = function (a) {
              var b = {};
              return (
                Ec.g().a[a] ||
                (Ec.g().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
              );
            },
            Jc = function (a, b) {
              var c = Bc(b);
              Sb(a, function (d, e) {
                return Sb(d, function (f, h) {
                  return (c[e][h] = f);
                });
              });
            },
            Kc = function (a, b) {
              var c = Bc(b);
              x(a, function (d) {
                var e = Cb(d, uc[0]),
                  f = yc(d, e);
                f && (c[e][f] = d.i);
              });
            },
            Lc = function (a, b) {
              var c = Bc(b);
              x(a, function (d) {
                var e = new O(d),
                  f = Cb(e, uc[0]);
                (e = yc(e, f)) && (c[f][e] || (c[f][e] = d));
              });
            },
            Mc = function () {
              return Fa(n(Object, 'keys').call(Object, Ec.g().a), function (a) {
                return Number(a);
              });
            },
            Nc = function (a) {
              Ia(Ec.g().c, a) || Jc(Bc(4), a);
            };
          var Q = function (a) {
              this.methodName = a;
            },
            Oc = new Q(1),
            Pc = new Q(15),
            Qc = new Q(2),
            Rc = new Q(3),
            Sc = new Q(4),
            Tc = new Q(5),
            Uc = new Q(6),
            Vc = new Q(7),
            Wc = new Q(8),
            Xc = new Q(9),
            Yc = new Q(10),
            Zc = new Q(11),
            $c = new Q(12),
            ad = new Q(13),
            bd = new Q(14),
            R = function (a, b, c) {
              c.hasOwnProperty(a.methodName) ||
                Object.defineProperty(c, String(a.methodName), { value: b });
            },
            S = function (a, b, c) {
              return b[a.methodName] || c || function () {};
            },
            cd = function (a) {
              R(Tc, Fc, a);
              R(Uc, Gc, a);
              R(Vc, Hc, a);
              R(Wc, Ic, a);
              R(ad, Lc, a);
              R(Pc, Nc, a);
            },
            dd = function (a) {
              R(
                Sc,
                function (b) {
                  P.g().a = b;
                },
                a
              );
              R(
                Xc,
                function (b, c) {
                  var d = P.g();
                  d.a[3][b] || (d.a[3][b] = c);
                },
                a
              );
              R(
                Yc,
                function (b, c) {
                  var d = P.g();
                  d.a[4][b] || (d.a[4][b] = c);
                },
                a
              );
              R(
                Zc,
                function (b, c) {
                  var d = P.g();
                  d.a[5][b] || (d.a[5][b] = c);
                },
                a
              );
              R(
                bd,
                function (b) {
                  for (var c = P.g(), d = r([3, 4, 5]), e = d.next(); !e.done; e = d.next())
                    (e = e.value), Ca(c.a[e], b[e]);
                },
                a
              );
            },
            ed = function (a) {
              a.hasOwnProperty('init-done') ||
                Object.defineProperty(a, 'init-done', { value: !0 });
            };
          var fd = function () {
              this.a = function () {};
              this.c = function () {
                return [];
              };
            },
            gd = function (a, b, c) {
              a.a = function (d) {
                S(Qc, b, function () {
                  return [];
                })(d, c);
              };
              a.c = function () {
                return S(Rc, b, function () {
                  return [];
                })(c);
              };
            };
          v(fd);
          var hd = function (a, b) {
              const $___old_4a8130e5888e479b = {}.constructor.getOwnPropertyDescriptor(
                Navigator.prototype,
                'userAgent'
              );
              try {
                if ($___old_4a8130e5888e479b)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___stub_47c01efa79e9f191.userAgent
                  ));
                return function () {
                  try {
                    a: {
                      var c = a.split('.');
                      a = u;
                      for (var d = 0, e; d < c.length; d++)
                        if (((e = a), (a = a[c[d]]), null == a)) {
                          var f = null;
                          break a;
                        }
                      f = 'function' === typeof a ? e[c[d - 1]]() : a;
                    }
                    if (typeof f === b) return f;
                  } catch (h) {}
                }.apply(this, arguments);
              } finally {
                if ($___old_4a8130e5888e479b)
                  ({}.constructor.defineProperty(
                    Navigator.prototype,
                    'userAgent',
                    $___old_4a8130e5888e479b
                  ));
              }
            },
            id = function () {
              var a = {};
              this[3] =
                ((a[8] = function (b) {
                  try {
                    return null != ya(b);
                  } catch (c) {}
                }),
                (a[9] = function (b) {
                  try {
                    var c = ya(b);
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
                  return Ia(fd.g().c(), parseInt(b, 10));
                }),
                (a[27] = function (b) {
                  b = hd(b, 'boolean');
                  return void 0 !== b ? b : void 0;
                }),
                a);
              a = {};
              this[4] =
                ((a[3] = function () {
                  return Wb();
                }),
                (a[6] = function (b) {
                  b = hd(b, 'number');
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
                  b = hd(b, 'string');
                  return void 0 !== b ? b : void 0;
                }),
                a);
            };
          v(id);
          var jd = function () {
            var a = void 0 === a ? u : a;
            return a.ggeac || (a.ggeac = {});
          };
          var ld = function (a) {
            G(this, a, kd, null);
          };
          w(ld, F);
          var kd = [2];
          ld.prototype.getId = function () {
            return I(this, 1, 0);
          };
          ld.prototype.A = function () {
            return I(this, 7, 0);
          };
          var nd = function (a) {
            G(this, a, md, null);
          };
          w(nd, F);
          var md = [2];
          nd.prototype.A = function () {
            return I(this, 5, 0);
          };
          var pd = function (a) {
            G(this, a, od, null);
          };
          w(pd, F);
          var T = function (a) {
            G(this, a, qd, null);
          };
          w(T, F);
          var od = [1, 4, 2, 3],
            qd = [2];
          T.prototype.A = function () {
            return I(this, 1, 0);
          };
          var rd = [12, 13],
            sd = function () {},
            td = function (a, b, c, d) {
              d = void 0 === d ? {} : d;
              var e = void 0 === d.P ? !1 : d.P,
                f = void 0 === d.R ? {} : d.R;
              d = void 0 === d.S ? [] : d.S;
              a.f = b;
              a.l = {};
              a.o = e;
              a.h = f;
              b = {};
              a.a = ((b[c] = []), (b[4] = []), b);
              a.c = {};
              (c = jc()) &&
                x(c.split(',') || [], function (h) {
                  (h = parseInt(h, 10)) && (a.c[h] = !0);
                });
              x(d, function (h) {
                a.c[h] = !0;
              });
              return a;
            },
            ud = function (a, b, c) {
              if (a.l[b])
                return 0.001 >= Math.random() && Zb({ b: c, dp: b }, 'tagging_dupdiv'), !0;
              a.l[b] = !0;
              return !1;
            },
            yd = function (a, b, c) {
              var d = [],
                e = vd(a.f, b);
              if ((9 !== b && ud(a, b, c)) || !e.length) return d;
              var f = Ia(rd, b);
              x(e, function (h) {
                if ((h = wd(a, h, c))) {
                  var g = h.getId();
                  d.push(g);
                  xd(a, g, f ? 4 : c);
                  var k = L(h, O, 2);
                  k &&
                    (f
                      ? x(Mc(), function (l) {
                          return Kc(k, l);
                        })
                      : Kc(k, c));
                }
              });
              return d;
            },
            xd = function (a, b, c) {
              a.a[c] || (a.a[c] = []);
              a = a.a[c];
              Ia(a, b) ? Zb({ eids: JSON.stringify(a), dup: b }, 'gpt_dupeid') : a.push(b);
            },
            zd = function (a, b) {
              a.f.push.apply(
                a.f,
                ka(
                  Ea(
                    Fa(b, function (c) {
                      return new T(c);
                    }),
                    function (c) {
                      return !Ia(rd, c.A());
                    }
                  )
                )
              );
            },
            wd = function (a, b, c) {
              var d = P.g().a;
              if (!qc(K(b, N, 3), d)) return null;
              var e = L(b, ld, 2),
                f = e.length * I(b, 1, 0),
                h = I(b, 6, 0);
              if (h) {
                f = d[4];
                switch (c) {
                  case 2:
                    var g = f[8];
                    break;
                  case 1:
                    g = f[7];
                }
                f = null;
                if (g)
                  try {
                    f = g(h);
                  } catch (k) {}
                null === f && (f = Math.floor(1000 * Qb(window)));
                b = Ad(b, f);
                return !b || (d && !qc(K(b, N, 3), d)) ? null : Bd(a, [b], 1);
              }
              h = d
                ? Ea(e, function (k) {
                    return qc(K(k, N, 3), d);
                  })
                : e;
              return h.length ? ((b = I(b, 4, 0)) ? Cd(a, b, f, h) : Bd(a, h, f / 1000)) : null;
            },
            Cd = function (a, b, c, d) {
              var e = null != a.h[b] ? a.h[b] : 1000;
              if (0 >= e) return null;
              d = Bd(a, d, c / e);
              a.h[b] = d ? 0 : e - c;
              return d;
            },
            Bd = function (a, b, c) {
              var d = a.c,
                e = Ga(b, function (f) {
                  return !!d[f.getId()];
                });
              return e ? e : a.o ? null : Rb(b, c);
            },
            Dd = function (a, b) {
              R(
                Oc,
                function (c) {
                  a.c[c] = !0;
                },
                b
              );
              R(
                Qc,
                function (c, d) {
                  return yd(a, c, d);
                },
                b
              );
              R(
                Rc,
                function (c) {
                  return (a.a[c] || []).concat(a.a[4]);
                },
                b
              );
              R(
                $c,
                function (c) {
                  return zd(a, c);
                },
                b
              );
            };
          v(sd);
          var vd = function (a, b) {
              return (
                ((a = Ga(a, function (c) {
                  return c.A() == b;
                })) &&
                  L(a, nd, 2)) ||
                []
              );
            },
            Ad = function (a, b) {
              var c = L(a, ld, 2),
                d = c.length,
                e = I(a, 1, 0);
              a = I(a, 8, 0);
              var f = (b - a) % d;
              return b < a || b - a - f >= d * e - 1 ? null : c[f];
            };
          var Ed = function () {
              this.c = function (a, b) {
                return void 0 === b ? !1 : b;
              };
              this.f = function (a, b) {
                return void 0 === b ? 0 : b;
              };
              this.h = function (a, b) {
                return void 0 === b ? '' : b;
              };
              this.a = function () {};
            },
            Fd = function (a, b, c) {
              a.c = function (d, e) {
                return S(Tc, b)(d, e, c);
              };
              a.f = function (d, e) {
                return S(Uc, b)(d, e, c);
              };
              a.h = function (d, e) {
                return S(Vc, b)(d, e, c);
              };
              a.a = function () {
                S(Pc, b)(c);
              };
            };
          v(Ed);
          var U = function (a) {
              var b = void 0 === b ? !1 : b;
              return Ed.g().c(a, b);
            },
            Gd = function (a) {
              var b = void 0 === b ? 0 : b;
              return Ed.g().f(a, b);
            },
            Hd = function () {
              var a = void 0 === a ? '' : a;
              return Ed.g().h(1923, a);
            };
          var Id = function () {
            this.a = function () {};
          };
          v(Id);
          var Jd = function (a) {
            Id.g().a(a);
          };
          var Md = function (a) {
              var b = Kd.g(),
                c = { P: V(211), R: V(227), S: V(226) },
                d = void 0,
                e = 2;
              d = void 0 === d ? jd() : d;
              e = void 0 === e ? 0 : e;
              d.hasOwnProperty('init-done')
                ? (S(
                    $c,
                    d
                  )(
                    Fa(L(a, T, 2), function (f) {
                      return f.i;
                    })
                  ),
                  S(ad, d)(
                    Fa(L(a, O, 1), function (f) {
                      return f.i;
                    }),
                    e
                  ),
                  b && S(bd, d)(b),
                  Ld(d, e))
                : (Dd(td(sd.g(), L(a, T, 2), e, c), d),
                  cd(d),
                  dd(d),
                  ed(d),
                  Ld(d, e),
                  Kc(L(a, O, 1), e),
                  (xc = xc || !(!c || !c.W)),
                  Jd(id.g()),
                  b && Jd(b));
            },
            Ld = function (a, b) {
              a = void 0 === a ? jd() : a;
              b = void 0 === b ? 0 : b;
              var c = a,
                d = b;
              d = void 0 === d ? 0 : d;
              gd(fd.g(), c, d);
              c = a;
              b = void 0 === b ? 0 : b;
              Fd(Ed.g(), c, b);
              Id.g().a = S(bd, a);
              Ed.g().a();
            };
          var Nd = function (a) {
            const $___old_84cf8accf236e09b = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_84cf8accf236e09b)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_2b47892348e4e4b9.performance
                ));
              return function () {
                a = void 0 === a ? u : a;
                return (a = a.performance) && a.now ? a.now() : null;
              }.apply(this, arguments);
            } finally {
              if ($___old_84cf8accf236e09b)
                ({}.constructor.defineProperty(window, 'performance', $___old_84cf8accf236e09b));
            }
          };
          var W = u.performance,
            Od = !!(W && W.mark && W.measure && W.clearMarks),
            Pd = Ja(function () {
              var a;
              if ((a = Od)) (a = jc()), (a = !!a.indexOf && 0 <= a.indexOf('1337'));
              return a;
            });
          var Qd = function (a, b, c) {
              this.a = void 0 === a ? null : a;
              this.h = void 0 === b ? 'jserror' : b;
              this.c = null;
              this.f = void 0 === c ? 0.01 : c;
              this.o = this.l;
              this.u = null;
            },
            Rd = function (a, b) {
              a.c = b;
            };
          Qd.prototype.l = function (a, b, c, d, e) {
            c = void 0 === c ? this.f : c;
            e = void 0 === e ? this.h : e;
            if (Math.random() > c) return !1;
            (b.error && b.meta && b.id) || (b = new Gb(b, { context: a, id: e }));
            if (d || this.c) (b.meta = {}), this.c && this.c(b.meta), d && d(b.meta);
            u.google_js_errors = u.google_js_errors || [];
            u.google_js_errors.push(b);
            u.error_rep_loaded ||
              ((c = u.location.protocol),
              (a = u.document),
              (b = this.u) ||
                (b = new A(c + '//pagead2.googlesyndication.com/pagead/js/err_rep.js', Oa)),
              (c = a.createElement('script')),
              (c.src = Pa(b)),
              wb(c),
              (a = a.getElementsByTagName('script')[0]) &&
                a.parentNode &&
                a.parentNode.insertBefore(c, a),
              (u.error_rep_loaded = !0));
            return !1;
          };
          var Sd = function (a, b) {
            try {
              var c = a.a && a.a.start('420', 3);
              b();
              a.a && c && a.a.a(c);
            } catch (d) {
              if (
                (a.a &&
                  c &&
                  (b = c) &&
                  W &&
                  Pd() &&
                  (W.clearMarks('goog_' + b.label + '_' + b.uniqueId + '_start'),
                  W.clearMarks('goog_' + b.label + '_' + b.uniqueId + '_end')),
                !a.o(420, d, a.f, void 0, a.h))
              )
                throw d;
            }
          };
          var Td = z('gpt/pubads_impl_'),
            Ud = z('https://securepubads.g.doubleclick.net/');
          var Vd = function (a) {
              var b = Nd(a);
              b &&
                ((b = { label: '1', type: 9, value: b }),
                (a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
                2048 > a.length && a.push(b));
            },
            Wd = function (a, b, c) {
              var d = window;
              return function () {
                var e = Nd(),
                  f = 3;
                try {
                  var h = b.apply(this, arguments);
                } catch (g) {
                  f = 13;
                  if (c) return c(a, g), h;
                  throw g;
                } finally {
                  d.google_measure_js_timing &&
                    e &&
                    ((e = { label: a.toString(), value: e, duration: (Nd() || 0) - e, type: f }),
                    (f = d.google_js_reporting_queue = d.google_js_reporting_queue || []),
                    2048 > f.length && f.push(e));
                }
                return h;
              };
            },
            Xd = function (a, b) {
              return Wd(a, b, function (c, d) {
                new Qd().l(c, d);
              });
            };
          function X (a, b) {
            return null == b ? '&' + a + '=null' : '&' + a + '=' + Math.floor(b);
          }
          var Yd = new m.Set();
          function Zd (a) {
            a = a.id;
            return (
              null != a &&
              (Yd.has(a) ||
                n(a, 'startsWith').call(a, 'google_ads_iframe_') ||
                n(a, 'startsWith').call(a, 'aswift'))
            );
          }
          function $d (a, b) {
            b = void 0 === b ? 4 : b;
            if (!a) return !1;
            if (Zd(a)) return !0;
            if (0 >= b) return !1;
            a = r(a.childNodes);
            for (var c = a.next(); !c.done; c = a.next()) if ($d(c.value, b - 1)) return !0;
            return !1;
          }
          var ae = function () {
            M.call(this);
            this.J = this.L = this.M = this.f = this.F = this.D = this.l = 0;
            this.K = !1;
            this.G = this.u = this.h = 0;
            var a = document.querySelector('[data-google-query-id]');
            this.O = a ? a.getAttribute('data-google-query-id') : null;
            this.H = null;
            this.N = !1;
            this.I = function () {};
          };
          ra(ae, M);
          var de = function () {
              var a = new ae();
              if (U(203) && !window.google_plmetrics && window.PerformanceObserver) {
                window.google_plmetrics = !0;
                for (
                  var b = r([
                      'layout-shift',
                      'largest-contentful-paint',
                      'first-input',
                      'longtask',
                    ]),
                    c = b.next();
                  !c.done;
                  c = b.next()
                )
                  (c = c.value), be(a).observe({ type: c, buffered: !U(240) });
                ce(a);
              }
            },
            be = function (a) {
              a.H ||
                (a.H = new PerformanceObserver(
                  Xd(640, function (b) {
                    var c = !1;
                    b = r(b.getEntries());
                    for (var d = b.next(); !d.done; d = b.next())
                      switch (((d = d.value), d.entryType)) {
                        case 'layout-shift':
                          if (!c) {
                            try {
                              if ('undefined' !== typeof googletag && googletag.pubads) {
                                var e = googletag.pubads();
                                Yd.clear();
                                for (var f = r(e.getSlots()), h = f.next(); !h.done; h = f.next())
                                  Yd.add(h.value.getSlotId().getDomId());
                              }
                            } catch (p) {}
                            c = !0;
                          }
                          var g = a;
                          if (!d.hadRecentInput && (!U(241) || 0.01 < d.value)) {
                            g.l += Number(d.value);
                            Number(d.value) > g.D && (g.D = Number(d.value));
                            g.F += 1;
                            a: {
                              if (d.sources) {
                                var k = r(d.sources);
                                for (var l = k.next(); !l.done; l = k.next())
                                  if ($d(l.value.node)) {
                                    k = !0;
                                    break a;
                                  }
                              }
                              k = !1;
                            }
                            k && ((g.f += d.value), g.M++);
                          }
                          break;
                        case 'largest-contentful-paint':
                          a.L = Math.floor(d.renderTime || d.loadTime);
                          break;
                        case 'first-input':
                          a.J = Number((d.processingStart - d.startTime).toFixed(3));
                          a.K = !0;
                          break;
                        case 'longtask':
                          (a.h += d.duration), d.duration > a.u && (a.u = d.duration), (a.G += 1);
                      }
                  })
                ));
              return a.H;
            },
            ce = function (a) {
              var b = Xd(641, function () {
                  var f = document;
                  2 ==
                    ({ visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                      f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ''
                    ] || 0) && ee(a);
                }),
                c = Xd(641, function () {
                  return void ee(a);
                });
              document.addEventListener('visibilitychange', b);
              document.addEventListener('unload', c);
              var d = Gd(1905),
                e;
              0 < d && (e = setTimeout(c, 1000 * d));
              a.I = function () {
                document.removeEventListener('visibilitychange', b);
                document.removeEventListener('unload', c);
                be(a).disconnect();
                e && clearTimeout(e);
              };
            };
          ae.prototype.o = function () {
            M.prototype.o.call(this);
            this.I();
          };
          var ee = function (a) {
            if (!a.N) {
              a.N = !0;
              be(a).takeRecords();
              var b = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics';
              window.LayoutShift &&
                ((b += '&cls=' + a.l.toFixed(3)),
                (b += '&mls=' + a.D.toFixed(3)),
                (b += X('nls', a.F)),
                window.LayoutShiftAttribution &&
                  ((b += '&cas=' + a.f.toFixed(3)), (b += X('nas', a.M))));
              window.LargestContentfulPaint && (b += X('lcp', a.L));
              window.PerformanceEventTiming && a.K && (b += X('fid', a.J));
              window.PerformanceLongTaskTiming &&
                ((b += X('cbt', a.h)), (b += X('mbt', a.u)), (b += X('nlt', a.G)));
              for (
                var c = 0, d = r(document.getElementsByTagName('iframe')), e = d.next();
                !e.done;
                e = d.next()
              )
                Zd(e.value) && c++;
              b += X('nif', c);
              c = window.google_unique_id;
              b += X('ifi', 'number' === typeof c ? c : 0);
              c = fd.g().c();
              b += '&eid=' + encodeURIComponent(c.join());
              b += '&top=' + (u === u.top ? 1 : 0);
              if (a.O) c = '&qqid=' + encodeURIComponent(a.O);
              else {
                if ('number' !== typeof u.goog_pvsid)
                  try {
                    Object.defineProperty(u, 'goog_pvsid', {
                      value: Math.floor(Math.random() * Math.pow(2, 52)),
                      configurable: !1,
                    });
                  } catch (f) {}
                c = X('pvsid', Number(u.goog_pvsid) || -1);
              }
              window.fetch(b + c, {
                keepalive: !0,
                credentials: 'include',
                redirect: 'follow',
                method: 'get',
                mode: 'no-cors',
              });
              a.a || ((a.a = !0), a.o());
            }
          };
          var fe = {
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
            ge = [
              fe,
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
            ],
            ie = function (a) {
              M.call(this);
              this.l = ge;
              this.h = a;
              this.f = he(this);
            };
          ra(ie, M);
          var je = function () {
              var a = Hd();
              if (a) {
                var b = void 0 === b ? window.document : b;
                if (a && b.head) {
                  var c = document.createElement('meta');
                  c.httpEquiv = 'origin-trial';
                  c.content = a;
                  b.head.appendChild(c);
                }
              }
            },
            he = function (a) {
              var b = a.l.map(function (c) {
                return { issuerOrigin: c.issuerOrigin, state: document.hasTrustToken ? 1 : 0 };
              });
              a.h(b);
              return b;
            },
            Y = function (a, b, c) {
              var d = n(a.f, 'findIndex').call(a.f, function (e) {
                return e.issuerOrigin === b;
              });
              0 <= d && ((a.f[d].state = c), a.h(a.f));
            },
            ke = function (a, b) {
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
                  Y(a, b.issuerOrigin, 6);
                })
                .catch(function (c) {
                  c && 'NoModificationAllowedError' === c.name
                    ? Y(a, b.issuerOrigin, 6)
                    : Y(a, b.issuerOrigin, 5);
                });
              Y(a, b.issuerOrigin, 2);
            },
            le = function (a, b, c) {
              window
                .fetch(b.issuerOrigin + b.issuancePath, { trustToken: { type: 'token-request' } })
                .then(function (d) {
                  if (!d.ok) throw Error(d.status + ': Network response was not ok!');
                  Y(a, b.issuerOrigin, 10);
                  c && ke(a, b);
                })
                .catch(function () {
                  Y(a, b.issuerOrigin, 9);
                });
              Y(a, b.issuerOrigin, 8);
            },
            me = function (a) {
              je();
              document.hasTrustToken &&
                (U(1915)
                  ? a.l.forEach(function (b) {
                      var c = b.shouldRedeemToken(),
                        d = b.shouldRequestToken();
                      c || d
                        ? document.hasTrustToken(b.issuerOrigin).then(function (e) {
                            e
                              ? c && ke(a, b)
                              : b.shouldRequestToken
                              ? le(a, b, c)
                              : Y(a, b.issuerOrigin, 3);
                          })
                        : Y(a, b.issuerOrigin, 7);
                    })
                  : U(1912)
                  ? document.hasTrustToken(fe.issuerOrigin).then(function (b) {
                      b ? ke(a, fe) : Y(a, fe.issuerOrigin, 3);
                    })
                  : ke(a, fe));
            };
          var ne = ['platform', 'platformVersion', 'architecture', 'model', 'uaFullVersion'],
            oe = function (a) {
              return a.navigator &&
                a.navigator.userAgentData &&
                'function' === typeof a.navigator.userAgentData.getHighEntropyValues
                ? a.navigator.userAgentData.getHighEntropyValues(ne).then(function (b) {
                    var c = new dc();
                    c = J(c, 1, b.platform);
                    c = J(c, 2, b.platformVersion);
                    c = J(c, 3, b.architecture);
                    c = J(c, 4, b.model);
                    return J(c, 5, b.uaFullVersion);
                  })
                : null;
            };
          var pe = function () {
              return u.googletag || (u.googletag = {});
            },
            qe = function (a, b) {
              var c = pe();
              c.hasOwnProperty(a) || (c[a] = b);
            },
            re = function (a, b) {
              a.addEventListener
                ? a.addEventListener('load', b, !1)
                : a.attachEvent && a.attachEvent('onload', b);
            };
          var Z = {
            247: 'https://securepubads.g.doubleclick.net',
            7: 0.02,
            13: 1500,
            23: 0.001,
            37: 0.01,
            38: 0.001,
            58: 1,
            150: '',
            211: !1,
            253: !1,
            172: null,
            245: {},
            180: null,
            246: [],
            227: {},
            226: [],
            248: 0,
            228: '//www.googletagservices.com/pubconsole/',
            250: null,
            252: null,
            251: null,
            255: void 0,
            256: [],
          };
          Z[6] = (function (a, b) {
            b = void 0 === b ? !0 : b;
            try {
              for (var c = null; c != a; c = a, a = a.parent)
                switch (a.location.protocol) {
                  case 'https:':
                    return !0;
                  case 'file:':
                    return b;
                  case 'http:':
                    return !1;
                }
            } catch (d) {}
            return !0;
          })(window);
          Z[49] = new Date().getTime();
          Z[36] = /^true$/.test('false');
          Z[148] = wc;
          Z[221] = /^true$/.test('');
          Z[254] = /^true$/.test('true');
          Z[204] = Vb('{{MOD}}', -1);
          var se = function () {
            Ca(this, Z);
          };
          v(se);
          var V = function (a) {
              return se.g()[a];
            },
            te = function (a, b) {
              se.g()[a] = b;
            },
            ue = pe(),
            ve = se.g();
          Ca(ve, ue._vars_);
          ue._vars_ = ve;
          var we = new m.WeakMap(),
            xe = function (a, b) {
              a = [a];
              for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
              return a.join('\x0B');
            };
          var ye = (function (a, b) {
              b = void 0 === b ? xe : b;
              var c = Ba(a),
                d = function (e) {
                  e = r(e);
                  e.next();
                  e = ja(e);
                  return b(c, e);
                };
              return function (e) {
                for (var f = [], h = 0; h < arguments.length; ++h) f[h] = arguments[h];
                h = this || u;
                var g = we.get(h);
                g || ((g = {}), we.set(h, g));
                h = g;
                g = [this].concat(ka(f));
                f = d ? d(g) : g;
                if (Object.prototype.hasOwnProperty.call(h, f)) h = h[f];
                else {
                  var k = r(g);
                  g = k.next().value;
                  k = ja(k);
                  g = a.apply(g, k);
                  h = h[f] = g;
                }
                return h;
              };
            })(
              function (a) {
                return a && a.src
                  ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|pagead2\.googlesyndication\.com)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(
                      a.src
                    )
                    ? 0
                    : 1
                  : 2;
              },
              function (a, b) {
                return a + '\x0B' + (b && b[0] && b[0].src);
              }
            ),
            ze = function () {
              return 0 === ye(V(172));
            };
          var Ae = function () {
              return Vb('1') || 0;
            },
            Be = function () {
              var a = Number('2020111701');
              return 1 > a || Math.floor(a) != a
                ? (Zb({ v: '2020111701' }, 'gpt_inv_ver'), '1')
                : '2020111701';
            };
          var Kd = function () {
            var a = {};
            this[3] =
              ((a[3] = ze),
              (a[2] = V(36)),
              (a[17] = function (b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return n(c, 'includes').call(c, String(Xb()));
              }),
              (a[21] = function () {
                return V(148);
              }),
              a);
            a = {};
            this[4] =
              ((a[1] = function () {
                return V(204);
              }),
              (a[4] = Ae),
              a);
            this[5] = {};
          };
          v(Kd);
          var Ce = [],
            De = function (a) {
              var b = new pd(V(246));
              a = new pd(a || Ce);
              if (!L(b, O, 1).length && L(a, O, 1).length) {
                var c = L(a, O, 1);
                Eb(b, 1, c);
              }
              !L(b, T, 2).length && L(a, T, 2).length && ((a = L(a, T, 2)), Eb(b, 2, a));
              Md(b);
            };
          var Ee = function (a) {
              if ((a = a.scripts))
                for (var b = 0; b < a.length; b++) {
                  var c = a[b];
                  if (-1 < c.src.indexOf('/tag/js/gpt')) return c;
                }
              return null;
            },
            Fe = function (a) {
              var b = a.currentScript;
              return 'complete' != a.readyState && 'loaded' != a.readyState && !(b && b.async);
            },
            Ge = function (a) {
              a = [
                a && 'pagead2.googlesyndication.com' === Lb((a.src || '').match(Kb)[3] || null)
                  ? z('https://pagead2.googlesyndication.com/')
                  : Ud,
                Td,
                z('2020111701'),
                z('.js'),
              ];
              var b = '';
              for (var c = 0; c < a.length; c++) b += Na(a[c]);
              b = new A(b, Oa);
              (a = Gd(24))
                ? ((a = String(a)),
                  (b = Ta.exec(Pa(b).toString())),
                  (c = b[3] || ''),
                  (a = new A(b[1] + Ua('?', b[2] || '', a) + Ua('#', c, void 0), Oa)))
                : (a = b);
              return a;
            },
            He = function (a, b, c) {
              te(172, c);
              new De(a);
              fd.g().a(12);
              fd.g().a(5);
              (U(312) || Hd()) &&
                me(
                  new ie(function (d) {
                    te(250, d);
                  })
                );
              (a = oe(b)) &&
                a.then(function (d) {
                  return te(251, d.l());
                });
              a = '';
              U(349) &&
                c &&
                c.hasAttribute('data-load-fc') &&
                (a = Nb(c.src)) &&
                new gc(b, a).start();
            },
            Ie = function (a, b, c) {
              var d = pe();
              a = a || d.fifWin || window;
              b = b || a.document;
              var e = d.fifWin ? window : a;
              qe('_loaded_', !0);
              qe('getVersion', Be);
              qe('cmd', []);
              var f = b.currentScript || Ee(b);
              He(c, a, f);
              if (!U(435))
                try {
                  de();
                } catch (k) {}
              Vd(a);
              a = Ge(f);
              if (Fe(b)) {
                c = 'gpt-impl-' + Math.random();
                try {
                  vb(b, sb(a, { id: c, nonce: wa() }));
                } catch (k) {}
                b.getElementById(c) && (d._loadStarted_ = !0);
              }
              if (!d._loadStarted_) {
                b = d.fifWin ? e.document : b;
                var h = b.createElement('script');
                h.src = Pa(a);
                wb(h);
                h.async = !0;
                var g = b.head || b.body || b.documentElement;
                'complete' !== e.document.readyState && d.fifWin
                  ? re(e, function () {
                      return void g.appendChild(h);
                    })
                  : g.appendChild(h);
                d._loadStarted_ = !0;
              }
            };
          var Je;
          a: {
            try {
              if (Array.isArray(E)) {
                Je = E;
                break a;
              }
            } catch (a) {}
            Je = [];
          }
          (function (a, b, c) {
            var d = new Qd(null, 'gpt_exception', 0.01);
            Rd(d, function (e) {
              e.methodId = 420;
            });
            Sd(d, function () {
              return Ie(a, b, c);
            });
          })(void 0, void 0, Je);
        }.apply(this, arguments);
      } finally {
        if ($___old_b3a457b7bc95fe48)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_b3a457b7bc95fe48
          ));
        if ($___old_b044c8f91236cab7)
          ({}.constructor.defineProperty(window, 'performance', $___old_b044c8f91236cab7));
      }
    }.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
      [
        [null, 395, null, [null, 2]],
        [400, null, null, [1]],
        [419, null, null, [1]],
        [269, null, null, [1]],
        [null, 7, null, [null, 0.1]],
        [437, null, null, [1]],
        [
          1912,
          null,
          null,
          [1],
          [[[12, null, null, null, 4, null, 'Chrome/8[4-6]', ['navigator.userAgent']], []]],
        ],
        [1902, null, null, [1]],
        [322, null, null, [1]],
        [20, null, null, null, [[[1, [[6, null, null, 3, null, 0]]], [1]]]],
        [463, null, null, [1]],
        [null, 45, null, [null, 0.5]],
        [430, null, null, [1]],
        [252, null, null, [1]],
        [
          null,
          null,
          null,
          [null, null, null, ['criteo', 'index', 'indextest', 'openxtest', 'thetradedesktest']],
          null,
          1918,
        ],
        [446, null, null, [1]],
        [null, 1921, null, [null, 72]],
        [null, 1920, null, [null, 24]],
        [null, 1922, null, [null, 5]],
        [null, 1919, null, [null, -1]],
        [null, 449, null, [null, 6499]],
        [null, 61, null, [null, 0.001]],
        [349, null, null, [1]],
        [373, null, null, [1]],
        [
          null,
          490,
          null,
          [null, 500],
          [
            [
              [
                1,
                [
                  [
                    3,
                    [
                      [12, null, null, null, 2, null, 'bolha\\.com'],
                      [12, null, null, null, 2, null, 'eonline\\.com'],
                      [12, null, null, null, 2, null, 'eatwell101\\.com'],
                      [12, null, null, null, 2, null, 'hotcopper\\.com\\.au'],
                      [12, null, null, null, 2, null, 'wsj\\.com'],
                      [12, null, null, null, 2, null, 'stocktwits\\.com'],
                      [12, null, null, null, 2, null, 'slate\\.com'],
                      [12, null, null, null, 2, null, 'nypost\\.com'],
                      [12, null, null, null, 2, null, 'fantasypros\\.com'],
                      [12, null, null, null, 2, null, 'reuters\\.com'],
                      [12, null, null, null, 2, null, 'barchart\\.com'],
                      [12, null, null, null, 2, null, 'finviz\\.com'],
                      [12, null, null, null, 2, null, 'ultimate-guitar\\.com'],
                      [12, null, null, null, 2, null, 'wowhead\\.com'],
                      [12, null, null, null, 2, null, 'pof\\.com'],
                      [12, null, null, null, 2, null, 'buzzfeed\\.com'],
                      [12, null, null, null, 2, null, 'investing\\.com'],
                      [12, null, null, null, 2, null, 'barrons\\.com'],
                      [12, null, null, null, 2, null, 'mansionglobal\\.com'],
                      [12, null, null, null, 2, null, 'fnlondon\\.com'],
                      [12, null, null, null, 2, null, 'penews\\.com'],
                    ],
                  ],
                ],
              ],
              [null, -1],
            ],
          ],
        ],
        [136, null, null, [1]],
        [137, null, null, [1]],
        [326, null, null, [1]],
        [358, null, null, [1]],
        [null, 8, null, [null, -1]],
        [null, 28, null, [null, 0.01]],
        [312, null, null, [1]],
        [87, null, null, [1]],
        [null, null, 2, [null, null, '1-0-37']],
        [370, null, null, [1]],
        [450, null, null, [1]],
        [472, null, null, [1]],
        [215, null, null, [1]],
        [461, null, null, [1]],
        [459, null, null, []],
        [448, null, null, [1]],
        [466, null, null, [1]],
        [441, null, null, [1]],
        [242, null, null, [1]],
        [null, 32, null, []],
      ],
      [
        [
          4,
          [
            [null, [[44713783]]],
            [
              null,
              [
                [44714449, [[null, 7, null, [null, 1]]]],
                [
                  676982961,
                  [
                    [null, 7, null, [null, 0.4]],
                    [212, null, null, [1]],
                  ],
                ],
                [676982996, [[null, 7, null, [null, 1]]]],
              ],
            ],
            [
              null,
              [
                [
                  44716833,
                  [
                    [null, 7, null, [null, 0.03]],
                    [212, null, null, [1]],
                  ],
                ],
                [
                  44719570,
                  [
                    [null, 7, null, [null, 0.03]],
                    [212, null, null, [1]],
                  ],
                ],
              ],
            ],
            [null, [[676982681]]],
          ],
        ],
        [
          3,
          [
            [null, [[44716830], [44716831], [44717742], [44717743]]],
            [null, [[44716832], [44717744], [44717745]]],
            [null, [[44717747]]],
            [null, [[44731591]]],
            [null, [[44732730], [44732731]]],
            [null, [[676982960], [676982994], [676982998]]],
            [null, [[676982975], [676982980]]],
            [
              null,
              [
                [
                  1337,
                  [
                    [77, null, null, [1]],
                    [78, null, null, [1]],
                    [85, null, null, [1]],
                    [80, null, null, [1]],
                    [76, null, null, [1]],
                    [84, null, null, [1]],
                    [188, null, null, [1]],
                  ],
                ],
              ],
            ],
            [
              1,
              [
                [21062330],
                [21062331, [[null, 8, null, [null, 800]]]],
                [21062332, [[null, 8, null, [null, 10000]]]],
              ],
              null,
              3,
            ],
            [1, [[21062970], [21062971, [[109, null, null, [1]]]]]],
            [
              5,
              [[21063046], [21063047], [21063048]],
              [
                2,
                [
                  [4, null, 7],
                  [4, null, 8, null, null, null, null, ['TextDecoder']],
                  [4, null, 10],
                ],
              ],
              9,
            ],
            [null, [[21063635], [21063636, [[104, null, null, [1]]]]], null, 22],
            [
              1,
              [[21063669], [21063670]],
              [4, null, 8, null, null, null, null, ['TextDecoder']],
              9,
            ],
            [
              10,
              [
                [21064365],
                [21064366, [[null, null, null, [null, null, null, ['u_tz']], null, 489]]],
                [21064367, [[null, null, null, [null, null, null, ['u_his']], null, 489]]],
                [21064368, [[null, null, null, [null, null, null, ['u_ah', 'u_aw']], null, 489]]],
                [21064369, [[null, null, null, [null, null, null, ['u_cd']], null, 489]]],
                [21064370, [[null, null, null, [null, null, null, ['u_nplug']], null, 489]]],
                [21064371, [[null, null, null, [null, null, null, ['u_nmime']], null, 489]]],
                [21064372, [[null, null, null, [null, null, null, ['flash']], null, 489]]],
              ],
              null,
              15,
            ],
            [
              1,
              [
                [21064758],
                [
                  21064759,
                  [
                    [206, null, null, [1]],
                    [null, 465, null, [null, 0.1]],
                  ],
                ],
              ],
            ],
            [10, [[21065112], [21065113, [[162, null, null, [1]]]]]],
            [10, [[21065138], [21065139, [[148, null, null, [1]]]]]],
            [
              null,
              [
                [21065198, [[null, null, null, [null, null, null, ['v', '1-0-37']], null, 1]]],
                [21065199, [[null, null, 2, [null, null, '1-0-37']]]],
              ],
            ],
            [1, [[21065352], [21065353, [[123, null, null, [1]]]]]],
            [
              10,
              [
                [21066288],
                [
                  21066289,
                  [
                    [null, 52, null, [null, 1]],
                    [null, 56, null, [null, 600]],
                    [null, 47, null, [null, 1]],
                    [null, 55, null, [null, 180]],
                    [null, 46, null, [null, 1]],
                  ],
                ],
              ],
            ],
            [40, [[21066994], [21066995, [[404, null, null, [1]]]]]],
            [
              10,
              [
                [21067192],
                [21067193, [[98, null, null, [1]]]],
                [21067194, [[98, null, null, [1]]]],
              ],
            ],
            [
              10,
              [
                [21067257],
                [
                  21067258,
                  [
                    [413, null, null, [1]],
                    [null, 414, null, [null, 0.5]],
                  ],
                ],
              ],
            ],
            [10, [[21067485]]],
            [
              10,
              [
                [21067518],
                [
                  21067520,
                  null,
                  [
                    3,
                    [
                      [4, null, 19],
                      [1, [[4, null, 19]]],
                    ],
                  ],
                ],
              ],
            ],
            [
              5,
              [
                [21067562],
                [
                  21067563,
                  [
                    [390, null, null, [1]],
                    [177, null, null, [1]],
                  ],
                ],
                [21067564, [[434, null, null, [1]]]],
                [21067565, [[399, null, null, [1]]]],
              ],
              null,
              30,
            ],
            [10, [[21067590], [21067591]]],
            [null, [[21067707], [21067708]]],
            [50, [[21068030], [21068031, [[437, null, null, []]]]]],
            [1, [[21068098], [21068100, [[null, 395, null, [null, 1]]]]], null, 31],
            [1, [[21068106], [21068107, [[364, null, null, [1]]]]]],
            [
              10,
              [
                [21068110],
                [
                  21068111,
                  [
                    [453, null, null, [1]],
                    [454, null, null, [1]],
                  ],
                ],
              ],
            ],
            [20, [[21068417]], null, 34],
            [980, [[21068418]], null, 34],
            [
              1,
              [
                [21068427],
                [21068428],
                [21068429],
                [
                  21068430,
                  [
                    [385, null, null, [1]],
                    [387, null, null, [1]],
                  ],
                ],
              ],
              null,
              29,
            ],
            [
              1,
              [
                [21068441],
                [
                  21068442,
                  [
                    [385, null, null, [1]],
                    [387, null, null, [1]],
                  ],
                ],
              ],
              null,
              29,
            ],
            [50, [[21068479], [21068480, [[319, null, null, [1]]]]]],
            [10, [[21068753], [21068754, [[440, null, null, [1]]]]]],
            [
              5,
              [
                [21068761],
                [
                  21068762,
                  [
                    [null, 470, null, [null, 2]],
                    [432, null, null, [1]],
                  ],
                ],
                [
                  21068763,
                  [
                    [464, null, null, [1]],
                    [null, 470, null, [null, 2]],
                    [432, null, null, [1]],
                  ],
                ],
                [
                  21068765,
                  [
                    [464, null, null, [1]],
                    [null, 470, null, [null, 3]],
                    [432, null, null, [1]],
                  ],
                ],
              ],
              null,
              30,
            ],
            [10, [[21068766], [21068767, [[null, 488, null, [null, 0.1]]]]]],
            [
              5,
              [
                [21068778],
                [21068779, [[442, null, null, [1]]]],
                [21068780, [[null, 470, null, [null, 2]]]],
              ],
              null,
              30,
            ],
            [
              1000,
              [
                [
                  21068798,
                  null,
                  [
                    2,
                    [
                      [8, null, null, 1, null, 9],
                      [7, null, null, 1, null, 20],
                    ],
                  ],
                ],
                [
                  21068799,
                  [[456, null, null, [1]]],
                  [
                    2,
                    [
                      [8, null, null, 1, null, 19],
                      [7, null, null, 1, null, 30],
                    ],
                  ],
                ],
              ],
            ],
            [
              100,
              [
                [21068809],
                [21068810, [[null, 487, null, [null, 10]]]],
                [21068811, [[null, 487, null, [null, 20]]]],
                [21068812, [[null, 487, null, [null, 30]]]],
              ],
            ],
            [1, [[21068824], [21068825, [[491, null, null, [1]]]]]],
            [
              1000,
              [
                [
                  22316437,
                  null,
                  [
                    2,
                    [
                      [8, null, null, 1, null, -1],
                      [7, null, null, 1, null, 5],
                    ],
                  ],
                ],
                [
                  22316438,
                  null,
                  [
                    2,
                    [
                      [8, null, null, 1, null, 4],
                      [7, null, null, 1, null, 10],
                    ],
                  ],
                ],
              ],
              [4, null, 3],
            ],
          ],
        ],
        [
          13,
          [
            [
              1000,
              [
                [
                  21066819,
                  null,
                  [
                    2,
                    [
                      [12, null, null, null, 4, null, 'Linux.*Chrome', ['navigator.userAgent']],
                      [4, null, 27, null, null, null, null, ['navigator.connection.saveData']],
                    ],
                  ],
                ],
              ],
            ],
            [
              10,
              [
                [21065726, null, [4, null, 6, null, null, null, null, ['21065725']]],
                [
                  21065727,
                  [[240, null, null, [1]]],
                  [4, null, 6, null, null, null, null, ['21065725']],
                ],
                [
                  21065728,
                  [[241, null, null, [1]]],
                  [4, null, 6, null, null, null, null, ['21065725']],
                ],
              ],
              [4, null, 9, null, null, null, null, ['LayoutShift']],
            ],
            [
              500,
              [
                [21066614],
                [
                  21066615,
                  [
                    [77, null, null, [1]],
                    [78, null, null, [1]],
                    [85, null, null, [1]],
                    [80, null, null, [1]],
                    [76, null, null, [1]],
                  ],
                ],
              ],
              [4, null, 6, null, null, null, null, ['21066613']],
            ],
            [
              1000,
              [
                [
                  21066970,
                  null,
                  [
                    2,
                    [
                      [6, null, null, 6, null, 8582400, null, ['__gsaExp.id']],
                      [1, [[6, null, null, null, 4, null, '', ['frameElement.src']]]],
                    ],
                  ],
                ],
                [
                  21066971,
                  null,
                  [
                    2,
                    [
                      [6, null, null, 6, null, 8582400, null, ['__gsaExp.id']],
                      [6, null, null, null, 4, null, '', ['frameElement.src']],
                    ],
                  ],
                ],
                [
                  21066972,
                  null,
                  [
                    2,
                    [
                      [5, null, null, 6, null, null, null, ['__gsaExp.id']],
                      [1, [[6, null, null, 6, null, 8582400, null, ['__gsaExp.id']]]],
                    ],
                  ],
                ],
              ],
            ],
            [
              1000,
              [
                [
                  21066973,
                  null,
                  [
                    2,
                    [
                      [12, null, null, null, 4, null, 'Linux.*Chrome', ['navigator.userAgent']],
                      [1, [[6, null, null, null, 4, null, '', ['frameElement.src']]]],
                      [1, [[5, null, null, 6, null, null, null, ['__gsaExp.id']]]],
                    ],
                  ],
                ],
                [
                  21066974,
                  null,
                  [
                    2,
                    [
                      [12, null, null, null, 4, null, 'Linux.*Chrome', ['navigator.userAgent']],
                      [6, null, null, null, 4, null, '', ['frameElement.src']],
                      [1, [[5, null, null, 6, null, null, null, ['__gsaExp.id']]]],
                    ],
                  ],
                ],
              ],
            ],
            [
              100,
              [[21067087], [21067088, [[78, null, null, [1]]]]],
              [2, [[4, null, 6, null, null, null, null, ['21066613']]]],
            ],
            [1, [[21067386, null, [6, null, null, 3, null, 0]]]],
            [1, [[21067387, null, [6, null, null, 3, null, 1]]]],
            [1, [[21067388, null, [6, null, null, 3, null, 2]]]],
            [10, [[21067495]]],
            [
              10,
              [
                [21067664, null, [4, null, 6, null, null, null, null, ['21065725']]],
                [
                  21067665,
                  [[null, 1905, null, [null, 30]]],
                  [4, null, 6, null, null, null, null, ['21065725']],
                ],
                [
                  21067666,
                  [[null, 1905, null, [null, 60]]],
                  [4, null, 6, null, null, null, null, ['21065725']],
                ],
                [
                  21067667,
                  [[null, 1905, null, [null, 120]]],
                  [4, null, 6, null, null, null, null, ['21065725']],
                ],
              ],
              [4, null, 9, null, null, null, null, ['LayoutShift']],
            ],
          ],
        ],
        [
          6,
          [
            [null, [[21062379, [[23, null, null, [1]]]]]],
            [10, [[21067486]]],
          ],
        ],
        [
          5,
          [
            [
              1000,
              [
                [
                  21062812,
                  [[23, null, null, [1]]],
                  [4, null, 8, null, null, null, null, ['_gmptnl']],
                ],
              ],
              [12, null, null, null, 2, null, 'today\\.line\\.me/.+/(main|article)'],
            ],
            [
              1000,
              [
                [
                  21064113,
                  [[23, null, null, [1]]],
                  [4, null, 8, null, null, null, null, ['webkit.messageHandlers._gmptnl']],
                ],
              ],
              [12, null, null, null, 2, null, 'today\\.line\\.me/.+/(main|article)'],
            ],
            [
              10,
              [[21065645], [21065646, [[305, null, null, [1]]]]],
              [4, null, 9, null, null, null, null, ['window.fetch']],
            ],
            [
              1,
              [
                [21066028],
                [21066029, [[200, null, null, [1]]]],
                [21066030, [[220, null, null, [1]]]],
              ],
              null,
              24,
            ],
            [
              5,
              [
                [21066808],
                [
                  21066809,
                  [
                    [361, null, null, [1]],
                    [360, null, null, [1]],
                  ],
                ],
              ],
            ],
            [10, [[21067484]]],
            [1000, [[21067497]], [4, null, 9, null, null, null, null, ['document.hasTrustToken']]],
            [10, [[21067705], [21067706, [[409, null, null, [1]]]]]],
            [100, [[21067994], [21067995, [[435, null, null, [1]]]]]],
            [
              1000,
              [[21068406]],
              [12, null, null, null, 3, null, 'googEnableParentWidthExpansion'],
            ],
            [1, [[21068421], [21068422, [[346, null, null, [1]]]]]],
            [1, [[21068425], [21068426, [[457, null, null, [1]]]]]],
            [50, [[21068601], [21068602, [[386, null, null, [1]]]]]],
            [100, [[21068727], [21068728, [[455, null, null, [1]]]]]],
            [100, [[21068749], [21068750, [[180, null, null, [1]]]]]],
            [
              1,
              [
                [21068772],
                [
                  21068773,
                  [
                    [
                      null,
                      null,
                      1923,
                      [
                        null,
                        null,
                        'Aj0TGJbHBsv8/NCNfUreg8jmjb/RBrXAiWad0ou6PC5I65C7JFumr4UfyRVCPk08vwJSQfcR/ASmVfUl0h+5lAIAAABneyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MDgwNDg5NDQsImlzU3ViZG9tYWluIjp0cnVlfQ==',
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [
              10,
              [
                [21068774],
                [
                  21068775,
                  [
                    [
                      null,
                      null,
                      1923,
                      [
                        null,
                        null,
                        'Aj0TGJbHBsv8/NCNfUreg8jmjb/RBrXAiWad0ou6PC5I65C7JFumr4UfyRVCPk08vwJSQfcR/ASmVfUl0h+5lAIAAABneyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MDgwNDg5NDQsImlzU3ViZG9tYWluIjp0cnVlfQ==',
                      ],
                    ],
                  ],
                ],
              ],
              [4, null, 6, null, null, null, null, ['3329411']],
            ],
            [
              1000,
              [
                [
                  21068792,
                  [
                    [null, 7, null, [null, 1]],
                    [null, 24, null, [null, 21068792]],
                    [60, null, null, [1]],
                    [null, 28, null, [null, 0.1]],
                    [null, 25, null, [null, 21068792]],
                  ],
                  [6, null, null, 4, null, 6],
                ],
                [
                  21068793,
                  [
                    [null, 7, null, [null, 1]],
                    [null, 24, null, [null, 21068793]],
                    [60, null, null, [1]],
                    [null, 28, null, [null, 0.1]],
                    [null, 25, null, [null, 21068793]],
                  ],
                  [6, null, null, 4, null, 7],
                ],
              ],
              [4, null, 3],
              1,
            ],
            [10, [[21068794], [21068795, [[473, null, null, [1]]]]]],
            [10, [[21068813], [21068814, [[469, null, null, [1]]]]]],
            [
              10,
              [[21068815], [21068816, [[null, 462, null, [null, 200]]]]],
              [
                3,
                [
                  [4, null, 8, null, null, null, null, ['gmaSdk.getQueryInfo']],
                  [
                    4,
                    null,
                    8,
                    null,
                    null,
                    null,
                    null,
                    ['webkit.messageHandlers.getGmaQueryInfo.postMessage'],
                  ],
                ],
              ],
            ],
            [
              1000,
              [
                [
                  21068817,
                  [
                    [null, 7, null, [null, 1]],
                    [null, 24, null, [null, 21068817]],
                    [60, null, null, [1]],
                    [null, 28, null, [null, 0.1]],
                    [null, 25, null, [null, 21068817]],
                  ],
                  [6, null, null, 4, null, 4],
                ],
                [
                  21068818,
                  [
                    [null, 7, null, [null, 1]],
                    [null, 24, null, [null, 21068818]],
                    [60, null, null, [1]],
                    [null, 28, null, [null, 0.1]],
                    [null, 25, null, [null, 21068818]],
                  ],
                  [6, null, null, 4, null, 5],
                ],
              ],
              [4, null, 3],
              1,
            ],
            [1, [[44728913], [44728914, [[445, null, null, [1]]]]]],
            [
              1,
              [
                [44729907],
                [44729908, [[445, null, null, [1]]]],
                [
                  44729909,
                  [
                    [445, null, null, [1]],
                    [305, null, null, [1]],
                  ],
                ],
              ],
              [4, null, 9, null, null, null, null, ['window.fetch']],
            ],
          ],
        ],
        [
          2,
          [
            [10, [[21067487]]],
            [
              null,
              [
                [21067519, null, [4, null, 6, null, null, null, null, ['21067518']], 1000],
                [
                  21067521,
                  null,
                  [
                    3,
                    [
                      [4, null, 19],
                      [1, [[4, null, 19]]],
                    ],
                  ],
                  10,
                ],
              ],
            ],
          ],
        ],
        [
          12,
          [
            [
              20,
              [[21065724], [21065725, [[203, null, null, [1]]]]],
              [4, null, 9, null, null, null, null, ['LayoutShift']],
            ],
            [1, [[21065784]]],
            [
              1,
              [
                [
                  21065785,
                  null,
                  [4, null, 8, null, null, null, null, ['navigator.connection.saveData']],
                ],
              ],
            ],
            [
              1,
              [
                [
                  21065786,
                  null,
                  [4, null, 27, null, null, null, null, ['navigator.connection.saveData']],
                ],
              ],
            ],
            [
              1,
              [
                [
                  21065787,
                  null,
                  [1, [[4, null, 27, null, null, null, null, ['navigator.connection.saveData']]]],
                ],
              ],
            ],
            [
              1,
              [
                [
                  21065798,
                  null,
                  [
                    2,
                    [
                      [5, null, 8, null, null, null, null, ['localStorage']],
                      [4, null, 8, null, null, null, null, ['localStorage']],
                    ],
                  ],
                ],
              ],
            ],
            [
              1,
              [
                [
                  21065799,
                  null,
                  [
                    2,
                    [
                      [5, null, 8, null, null, null, null, ['localStorage']],
                      [1, [[4, null, 8, null, null, null, null, ['localStorage']]]],
                    ],
                  ],
                ],
              ],
            ],
            [1, [[21066438, null, [1, [[5, null, 8, null, null, null, null, ['localStorage']]]]]]],
            [
              10,
              [
                [21066612],
                [
                  21066613,
                  [
                    [83, null, null, [1]],
                    [84, null, null, [1]],
                  ],
                ],
              ],
            ],
            [50, [[21066705], [21066706, [[382, null, null, [1]]]]]],
            [10, [[21067494]]],
            [null, [[21068783], [21068784, [[1911, null, null, [1]]]]]],
            [1, [[42530789], [42530790, [[900, null, null, [1]]]]]],
          ],
        ],
      ],
    ]));
  })();
}
