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
  const $___stub_c0f1d0ee9b6f2da6 = {};
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
  })($___stub_c0f1d0ee9b6f2da6);
  (function () {
    (function () {
      const $___old_af90419613bcd872 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        ),
        $___old_e75f719af11f61a6 = {}.constructor.getOwnPropertyDescriptor(window, 'performance');
      try {
        if ($___old_af90419613bcd872)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___stub_9d7b4eb662ee43f5.userAgent
          ));
        if ($___old_e75f719af11f61a6)
          ({}.constructor.defineProperty(
            window,
            'performance',
            $___stub_c0f1d0ee9b6f2da6.performance
          ));
        return function () {
          var l,
            aa = function (a) {
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
            da = ca(this),
            q = function (a, b) {
              if (b)
                a: {
                  var c = da;
                  a = a.split('.');
                  for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e];
                  }
                  a = a[a.length - 1];
                  d = c[a];
                  b = b(d);
                  b != d && null != b && ba(c, a, { configurable: !0, writable: !0, value: b });
                }
            };
          q('Symbol', function (a) {
            if (a) return a;
            var b = function (e, f) {
              this.g = e;
              ba(this, 'description', { configurable: !0, writable: !0, value: f });
            };
            b.prototype.toString = function () {
              return this.g;
            };
            var c = 0,
              d = function (e) {
                if (this instanceof d) throw new TypeError('Symbol is not a constructor');
                return new b('jscomp_symbol_' + (e || '') + '_' + c++, e);
              };
            return d;
          });
          q('Symbol.iterator', function (a) {
            if (a) return a;
            a = Symbol('Symbol.iterator');
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
                    return ea(aa(this));
                  },
                });
            }
            return a;
          });
          var ea = function (a) {
              a = { next: a };
              a[Symbol.iterator] = function () {
                return this;
              };
              return a;
            },
            r = function (a) {
              var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
              return b ? b.call(a) : { next: aa(a) };
            },
            fa = function (a) {
              if (!(a instanceof Array)) {
                a = r(a);
                for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
                a = c;
              }
              return a;
            },
            ha =
              'function' == typeof Object.create
                ? Object.create
                : function (a) {
                    var b = function () {};
                    b.prototype = a;
                    return new b();
                  },
            ia = (function () {
              function a () {
                function c () {}
                new c();
                Reflect.construct(c, [], function () {});
                return new c() instanceof c;
              }
              if ('undefined' != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function (c, d, e) {
                  c = b(c, d);
                  e && Reflect.setPrototypeOf(c, e.prototype);
                  return c;
                };
              }
              return function (c, d, e) {
                void 0 === e && (e = c);
                e = ha(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e;
              };
            })(),
            ka;
          if ('function' == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
          else {
            var ma;
            a: {
              var na = { Xd: !0 },
                oa = {};
              try {
                oa.__proto__ = na;
                ma = oa.Xd;
                break a;
              } catch (a) {}
              ma = !1;
            }
            ka = ma
              ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
                  return a;
                }
              : null;
          }
          var pa = ka,
            t = function (a, b) {
              a.prototype = ha(b.prototype);
              a.prototype.constructor = a;
              if (pa) pa(a, b);
              else
                for (var c in b)
                  if ('prototype' != c)
                    if (Object.defineProperties) {
                      var d = Object.getOwnPropertyDescriptor(b, c);
                      d && Object.defineProperty(a, c, d);
                    } else a[c] = b[c];
              a.Ca = b.prototype;
            },
            qa = function () {
              this.A = !1;
              this.h = null;
              this.H = void 0;
              this.g = 1;
              this.J = this.o = 0;
              this.l = null;
            },
            ra = function (a) {
              if (a.A) throw new TypeError('Generator is already running');
              a.A = !0;
            };
          qa.prototype.B = function (a) {
            this.H = a;
          };
          var sa = function (a, b) {
            a.l = { he: b, Ce: !0 };
            a.g = a.o || a.J;
          };
          qa.prototype.return = function (a) {
            this.l = { return: a };
            this.g = this.J;
          };
          var ta = function (a, b, c) {
              a.g = c;
              return { value: b };
            },
            ua = function (a) {
              this.g = new qa();
              this.h = a;
            },
            xa = function (a, b) {
              ra(a.g);
              var c = a.g.h;
              if (c)
                return va(
                  a,
                  'return' in c
                    ? c['return']
                    : function (d) {
                        return { value: d, done: !0 };
                      },
                  b,
                  a.g.return
                );
              a.g.return(b);
              return wa(a);
            },
            va = function (a, b, c, d) {
              try {
                var e = b.call(a.g.h, c);
                if (!(e instanceof Object))
                  throw new TypeError('Iterator result ' + e + ' is not an object');
                if (!e.done) return (a.g.A = !1), e;
                var f = e.value;
              } catch (g) {
                return (a.g.h = null), sa(a.g, g), wa(a);
              }
              a.g.h = null;
              d.call(a.g, f);
              return wa(a);
            },
            wa = function (a) {
              for (; a.g.g; )
                try {
                  var b = a.h(a.g);
                  if (b) return (a.g.A = !1), { value: b.value, done: !1 };
                } catch (c) {
                  (a.g.H = void 0), sa(a.g, c);
                }
              a.g.A = !1;
              if (a.g.l) {
                b = a.g.l;
                a.g.l = null;
                if (b.Ce) throw b.he;
                return { value: b.return, done: !0 };
              }
              return { value: void 0, done: !0 };
            },
            ya = function (a) {
              this.next = function (b) {
                ra(a.g);
                a.g.h ? (b = va(a, a.g.h.next, b, a.g.B)) : (a.g.B(b), (b = wa(a)));
                return b;
              };
              this.throw = function (b) {
                ra(a.g);
                a.g.h ? (b = va(a, a.g.h['throw'], b, a.g.B)) : (sa(a.g, b), (b = wa(a)));
                return b;
              };
              this.return = function (b) {
                return xa(a, b);
              };
              this[Symbol.iterator] = function () {
                return this;
              };
            },
            za = function (a) {
              function b (d) {
                return a.next(d);
              }
              function c (d) {
                return a.throw(d);
              }
              return new Promise(function (d, e) {
                function f (g) {
                  g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
                }
                f(a.next());
              });
            },
            Aa = function (a) {
              return za(new ya(new ua(a)));
            };
          q('Reflect', function (a) {
            return a ? a : {};
          });
          q('Reflect.construct', function () {
            return ia;
          });
          q('Reflect.setPrototypeOf', function (a) {
            return a
              ? a
              : pa
              ? function (b, c) {
                  try {
                    return pa(b, c), !0;
                  } catch (d) {
                    return !1;
                  }
                }
              : null;
          });
          q('Promise', function (a) {
            function b () {
              this.g = null;
            }
            function c (g) {
              return g instanceof e
                ? g
                : new e(function (h) {
                    h(g);
                  });
            }
            if (a) return a;
            b.prototype.h = function (g) {
              if (null == this.g) {
                this.g = [];
                var h = this;
                this.l(function () {
                  h.A();
                });
              }
              this.g.push(g);
            };
            var d = da.setTimeout;
            b.prototype.l = function (g) {
              d(g, 0);
            };
            b.prototype.A = function () {
              for (; this.g && this.g.length; ) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                  var k = g[h];
                  g[h] = null;
                  try {
                    k();
                  } catch (n) {
                    this.o(n);
                  }
                }
              }
              this.g = null;
            };
            b.prototype.o = function (g) {
              this.l(function () {
                throw g;
              });
            };
            var e = function (g) {
              this.g = 0;
              this.l = void 0;
              this.h = [];
              this.H = !1;
              var h = this.o();
              try {
                g(h.resolve, h.reject);
              } catch (k) {
                h.reject(k);
              }
            };
            e.prototype.o = function () {
              function g (n) {
                return function (m) {
                  k || ((k = !0), n.call(h, m));
                };
              }
              var h = this,
                k = !1;
              return { resolve: g(this.K), reject: g(this.A) };
            };
            e.prototype.K = function (g) {
              if (g === this) this.A(new TypeError('A Promise cannot resolve to itself'));
              else if (g instanceof e) this.M(g);
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
                h ? this.I(g) : this.B(g);
              }
            };
            e.prototype.I = function (g) {
              var h = void 0;
              try {
                h = g.then;
              } catch (k) {
                this.A(k);
                return;
              }
              'function' == typeof h ? this.N(h, g) : this.B(g);
            };
            e.prototype.A = function (g) {
              this.J(2, g);
            };
            e.prototype.B = function (g) {
              this.J(1, g);
            };
            e.prototype.J = function (g, h) {
              if (0 != this.g)
                throw Error(
                  'Cannot settle(' + g + ', ' + h + '): Promise already settled in state' + this.g
                );
              this.g = g;
              this.l = h;
              2 === this.g && this.L();
              this.D();
            };
            e.prototype.L = function () {
              var g = this;
              d(function () {
                if (g.G()) {
                  var h = da.console;
                  'undefined' !== typeof h && h.error(g.l);
                }
              }, 1);
            };
            e.prototype.G = function () {
              if (this.H) return !1;
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
              g.reason = this.l;
              return k(g);
            };
            e.prototype.D = function () {
              if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                this.h = null;
              }
            };
            var f = new b();
            e.prototype.M = function (g) {
              var h = this.o();
              g.Cb(h.resolve, h.reject);
            };
            e.prototype.N = function (g, h) {
              var k = this.o();
              try {
                g.call(h, k.resolve, k.reject);
              } catch (n) {
                k.reject(n);
              }
            };
            e.prototype.then = function (g, h) {
              function k (p, w) {
                return 'function' == typeof p
                  ? function (x) {
                      try {
                        n(p(x));
                      } catch (B) {
                        m(B);
                      }
                    }
                  : w;
              }
              var n,
                m,
                u = new e(function (p, w) {
                  n = p;
                  m = w;
                });
              this.Cb(k(g, n), k(h, m));
              return u;
            };
            e.prototype.catch = function (g) {
              return this.then(void 0, g);
            };
            e.prototype.Cb = function (g, h) {
              function k () {
                switch (n.g) {
                  case 1:
                    g(n.l);
                    break;
                  case 2:
                    h(n.l);
                    break;
                  default:
                    throw Error('Unexpected state: ' + n.g);
                }
              }
              var n = this;
              null == this.h ? f.h(k) : this.h.push(k);
              this.H = !0;
            };
            e.resolve = c;
            e.reject = function (g) {
              return new e(function (h, k) {
                k(g);
              });
            };
            e.race = function (g) {
              return new e(function (h, k) {
                for (var n = r(g), m = n.next(); !m.done; m = n.next()) c(m.value).Cb(h, k);
              });
            };
            e.all = function (g) {
              var h = r(g),
                k = h.next();
              return k.done
                ? c([])
                : new e(function (n, m) {
                    function u (x) {
                      return function (B) {
                        p[x] = B;
                        w--;
                        0 == w && n(p);
                      };
                    }
                    var p = [],
                      w = 0;
                    do p.push(void 0), w++, c(k.value).Cb(u(p.length - 1), m), (k = h.next());
                    while (!k.done);
                  });
            };
            return e;
          });
          q('Object.setPrototypeOf', function (a) {
            return a || pa;
          });
          var Ba = function (a, b) {
              return Object.prototype.hasOwnProperty.call(a, b);
            },
            Ca =
              'function' == typeof Object.assign
                ? Object.assign
                : function (a, b) {
                    for (var c = 1; c < arguments.length; c++) {
                      var d = arguments[c];
                      if (d) for (var e in d) Ba(d, e) && (a[e] = d[e]);
                    }
                    return a;
                  };
          q('Object.assign', function (a) {
            return a || Ca;
          });
          var Da = function (a, b, c) {
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
          q('Array.prototype.find', function (a) {
            return a
              ? a
              : function (b, c) {
                  a: {
                    var d = this;
                    d instanceof String && (d = String(d));
                    for (var e = d.length, f = 0; f < e; f++) {
                      var g = d[f];
                      if (b.call(c, g, f, d)) {
                        b = g;
                        break a;
                      }
                    }
                    b = void 0;
                  }
                  return b;
                };
          });
          q('String.prototype.repeat', function (a) {
            return a
              ? a
              : function (b) {
                  var c = Da(this, null, 'repeat');
                  if (0 > b || 1342177279 < b) throw new RangeError('Invalid count value');
                  b |= 0;
                  for (var d = ''; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
                  return d;
                };
          });
          var Ea = function (a, b) {
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
            e[Symbol.iterator] = function () {
              return e;
            };
            return e;
          };
          q('Array.prototype.entries', function (a) {
            return a
              ? a
              : function () {
                  return Ea(this, function (b, c) {
                    return [b, c];
                  });
                };
          });
          q('Array.prototype.keys', function (a) {
            return a
              ? a
              : function () {
                  return Ea(this, function (b) {
                    return b;
                  });
                };
          });
          q('Array.prototype.values', function (a) {
            return a
              ? a
              : function () {
                  return Ea(this, function (b, c) {
                    return c;
                  });
                };
          });
          q('Object.is', function (a) {
            return a
              ? a
              : function (b, c) {
                  return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
                };
          });
          q('Array.prototype.includes', function (a) {
            return a
              ? a
              : function (b, c) {
                  var d = this;
                  d instanceof String && (d = String(d));
                  var e = d.length;
                  c = c || 0;
                  for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                    var f = d[c];
                    if (f === b || Object.is(f, b)) return !0;
                  }
                  return !1;
                };
          });
          q('String.prototype.includes', function (a) {
            return a
              ? a
              : function (b, c) {
                  return -1 !== Da(this, b, 'includes').indexOf(b, c || 0);
                };
          });
          q('Object.entries', function (a) {
            return a
              ? a
              : function (b) {
                  var c = [],
                    d;
                  for (d in b) Ba(b, d) && c.push([d, b[d]]);
                  return c;
                };
          });
          q('WeakMap', function (a) {
            function b () {}
            function c (k) {
              var n = typeof k;
              return ('object' === n && null !== k) || 'function' === n;
            }
            function d (k) {
              if (!Ba(k, f)) {
                var n = new b();
                ba(k, f, { value: n });
              }
            }
            function e (k) {
              var n = Object[k];
              n &&
                (Object[k] = function (m) {
                  if (m instanceof b) return m;
                  Object.isExtensible(m) && d(m);
                  return n(m);
                });
            }
            if (
              (function () {
                if (!a || !Object.seal) return !1;
                try {
                  var k = Object.seal({}),
                    n = Object.seal({}),
                    m = new a([
                      [k, 2],
                      [n, 3],
                    ]);
                  if (2 != m.get(k) || 3 != m.get(n)) return !1;
                  m.delete(k);
                  m.set(n, 4);
                  return !m.has(k) && 4 == m.get(n);
                } catch (u) {
                  return !1;
                }
              })()
            )
              return a;
            var f = '$jscomp_hidden_' + Math.random();
            e('freeze');
            e('preventExtensions');
            e('seal');
            var g = 0,
              h = function (k) {
                this.g = (g += Math.random() + 1).toString();
                if (k) {
                  k = r(k);
                  for (var n; !(n = k.next()).done; ) (n = n.value), this.set(n[0], n[1]);
                }
              };
            h.prototype.set = function (k, n) {
              if (!c(k)) throw Error('Invalid WeakMap key');
              d(k);
              if (!Ba(k, f)) throw Error('WeakMap key fail: ' + k);
              k[f][this.g] = n;
              return this;
            };
            h.prototype.get = function (k) {
              return c(k) && Ba(k, f) ? k[f][this.g] : void 0;
            };
            h.prototype.has = function (k) {
              return c(k) && Ba(k, f) && Ba(k[f], this.g);
            };
            h.prototype.delete = function (k) {
              return c(k) && Ba(k, f) && Ba(k[f], this.g) ? delete k[f][this.g] : !1;
            };
            return h;
          });
          q('Map', function (a) {
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
                    k = new a(r([[h, 's']]));
                  if (
                    's' != k.get(h) ||
                    1 != k.size ||
                    k.get({ x: 4 }) ||
                    k.set({ x: 4 }, 't') != k ||
                    2 != k.size
                  )
                    return !1;
                  var n = k.entries(),
                    m = n.next();
                  if (m.done || m.value[0] != h || 's' != m.value[1]) return !1;
                  m = n.next();
                  return m.done || 4 != m.value[0].x || 't' != m.value[1] || !n.next().done
                    ? !1
                    : !0;
                } catch (u) {
                  return !1;
                }
              })()
            )
              return a;
            var b = new WeakMap(),
              c = function (h) {
                this.h = {};
                this.g = f();
                this.size = 0;
                if (h) {
                  h = r(h);
                  for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
                }
              };
            c.prototype.set = function (h, k) {
              h = 0 === h ? 0 : h;
              var n = d(this, h);
              n.list || (n.list = this.h[n.id] = []);
              n.oa
                ? (n.oa.value = k)
                : ((n.oa = { next: this.g, Ha: this.g.Ha, head: this.g, key: h, value: k }),
                  n.list.push(n.oa),
                  (this.g.Ha.next = n.oa),
                  (this.g.Ha = n.oa),
                  this.size++);
              return this;
            };
            c.prototype.delete = function (h) {
              h = d(this, h);
              return h.oa && h.list
                ? (h.list.splice(h.index, 1),
                  h.list.length || delete this.h[h.id],
                  (h.oa.Ha.next = h.oa.next),
                  (h.oa.next.Ha = h.oa.Ha),
                  (h.oa.head = null),
                  this.size--,
                  !0)
                : !1;
            };
            c.prototype.clear = function () {
              this.h = {};
              this.g = this.g.Ha = f();
              this.size = 0;
            };
            c.prototype.has = function (h) {
              return !!d(this, h).oa;
            };
            c.prototype.get = function (h) {
              return (h = d(this, h).oa) && h.value;
            };
            c.prototype.entries = function () {
              return e(this, function (h) {
                return [h.key, h.value];
              });
            };
            c.prototype.keys = function () {
              return e(this, function (h) {
                return h.key;
              });
            };
            c.prototype.values = function () {
              return e(this, function (h) {
                return h.value;
              });
            };
            c.prototype.forEach = function (h, k) {
              for (var n = this.entries(), m; !(m = n.next()).done; )
                (m = m.value), h.call(k, m[1], m[0], this);
            };
            c.prototype[Symbol.iterator] = c.prototype.entries;
            var d = function (h, k) {
                var n = k && typeof k;
                'object' == n || 'function' == n
                  ? b.has(k)
                    ? (n = b.get(k))
                    : ((n = '' + ++g), b.set(k, n))
                  : (n = 'p_' + k);
                var m = h.h[n];
                if (m && Ba(h.h, n))
                  for (h = 0; h < m.length; h++) {
                    var u = m[h];
                    if ((k !== k && u.key !== u.key) || k === u.key)
                      return { id: n, list: m, index: h, oa: u };
                  }
                return { id: n, list: m, index: -1, oa: void 0 };
              },
              e = function (h, k) {
                var n = h.g;
                return ea(function () {
                  if (n) {
                    for (; n.head != h.g; ) n = n.Ha;
                    for (; n.next != n.head; ) return (n = n.next), { done: !1, value: k(n) };
                    n = null;
                  }
                  return { done: !0, value: void 0 };
                });
              },
              f = function () {
                var h = {};
                return (h.Ha = h.next = h.head = h);
              },
              g = 0;
            return c;
          });
          q('Math.trunc', function (a) {
            return a
              ? a
              : function (b) {
                  b = Number(b);
                  if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
                  var c = Math.floor(Math.abs(b));
                  return 0 > b ? -c : c;
                };
          });
          q('Array.prototype.fill', function (a) {
            return a
              ? a
              : function (b, c, d) {
                  var e = this.length || 0;
                  0 > c && (c = Math.max(0, e + c));
                  if (null == d || d > e) d = e;
                  d = Number(d);
                  0 > d && (d = Math.max(0, e + d));
                  for (c = Number(c || 0); c < d; c++) this[c] = b;
                  return this;
                };
          });
          var Fa = function (a) {
            return a ? a : Array.prototype.fill;
          };
          q('Int8Array.prototype.fill', Fa);
          q('Uint8Array.prototype.fill', Fa);
          q('Uint8ClampedArray.prototype.fill', Fa);
          q('Int16Array.prototype.fill', Fa);
          q('Uint16Array.prototype.fill', Fa);
          q('Int32Array.prototype.fill', Fa);
          q('Uint32Array.prototype.fill', Fa);
          q('Float32Array.prototype.fill', Fa);
          q('Float64Array.prototype.fill', Fa);
          q('String.prototype.padStart', function (a) {
            return a
              ? a
              : function (b, c) {
                  var d = Da(this, null, 'padStart');
                  b -= d.length;
                  c = void 0 !== c ? String(c) : ' ';
                  return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : '') + d;
                };
          });
          var Ga = Ga || {},
            v = this || self,
            y = function (a, b, c) {
              a = a.split('.');
              c = c || v;
              a[0] in c || 'undefined' == typeof c.execScript || c.execScript('var ' + a[0]);
              for (var d; a.length && (d = a.shift()); )
                a.length || void 0 === b
                  ? c[d] && c[d] !== Object.prototype[d]
                    ? (c = c[d])
                    : (c = c[d] = {})
                  : (c[d] = b);
            },
            Ja = function (a) {
              if (a && a != v) return Ha(a.document);
              null === Ia && (Ia = Ha(v.document));
              return Ia;
            },
            Ka = /^[\w+/_-]+[=]{0,2}$/,
            Ia = null,
            Ha = function (a) {
              return (a = a.querySelector && a.querySelector('script[nonce]')) &&
                (a = a.nonce || a.getAttribute('nonce')) &&
                Ka.test(a)
                ? a
                : '';
            },
            La = function (a, b) {
              a = a.split('.');
              b = b || v;
              for (var c = 0; c < a.length; c++) if (((b = b[a[c]]), null == b)) return null;
              return b;
            },
            Ma = function () {},
            Na = function (a) {
              a.sc = void 0;
              a.C = function () {
                return a.sc ? a.sc : (a.sc = new a());
              };
            },
            Oa = function (a) {
              var b = typeof a;
              b = 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null';
              return 'array' == b || ('object' == b && 'number' == typeof a.length);
            },
            Pa = function (a) {
              var b = typeof a;
              return ('object' == b && null != a) || 'function' == b;
            },
            Sa = function (a) {
              return (Object.prototype.hasOwnProperty.call(a, Qa) && a[Qa]) || (a[Qa] = ++Ra);
            },
            Ta = function (a) {
              null !== a && 'removeAttribute' in a && a.removeAttribute(Qa);
              try {
                delete a[Qa];
              } catch (b) {}
            },
            Qa = 'closure_uid_' + ((1000000000 * Math.random()) >>> 0),
            Ra = 0,
            Ua = function (a, b, c) {
              return a.call.apply(a.bind, arguments);
            },
            Va = function (a, b, c) {
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
            },
            Wa = function (a, b, c) {
              Function.prototype.bind &&
              -1 != Function.prototype.bind.toString().indexOf('native code')
                ? (Wa = Ua)
                : (Wa = Va);
              return Wa.apply(null, arguments);
            },
            Xa = function (a, b) {
              var c = Array.prototype.slice.call(arguments, 1);
              return function () {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d);
              };
            },
            z = function () {
              return Date.now();
            },
            A = function (a, b) {
              function c () {}
              c.prototype = b.prototype;
              a.Ca = b.prototype;
              a.prototype = new c();
              a.prototype.constructor = a;
              a.Xg = function (d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                  g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g);
              };
            },
            Ya = function (a) {
              return a;
            };
          function Za (a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, Za);
            else {
              var b = Error().stack;
              b && (this.stack = b);
            }
            a && (this.message = String(a));
          }
          A(Za, Error);
          Za.prototype.name = 'CustomError';
          var $a;
          var ab = function (a, b) {
              if ('string' === typeof a)
                return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
              for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
              return -1;
            },
            C = function (a, b, c) {
              for (
                var d = a.length, e = 'string' === typeof a ? a.split('') : a, f = 0;
                f < d;
                f++
              )
                f in e && b.call(c, e[f], f, a);
            };
          function bb (a, b) {
            for (var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1; 0 <= d; --d)
              d in c && b.call(void 0, c[d], d, a);
          }
          var cb = function (a, b) {
              for (
                var c = a.length,
                  d = [],
                  e = 0,
                  f = 'string' === typeof a ? a.split('') : a,
                  g = 0;
                g < c;
                g++
              )
                if (g in f) {
                  var h = f[g];
                  b.call(void 0, h, g, a) && (d[e++] = h);
                }
              return d;
            },
            db = function (a, b) {
              for (
                var c = a.length, d = Array(c), e = 'string' === typeof a ? a.split('') : a, f = 0;
                f < c;
                f++
              )
                f in e && (d[f] = b.call(void 0, e[f], f, a));
              return d;
            },
            eb = function (a, b, c) {
              var d = c;
              C(a, function (e, f) {
                d = b.call(void 0, d, e, f, a);
              });
              return d;
            },
            fb = function (a, b) {
              for (
                var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0;
                e < c;
                e++
              )
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
              return !1;
            };
          function gb (a, b) {
            b = ib(a, b, void 0);
            return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
          }
          function ib (a, b, c) {
            for (var d = a.length, e = 'string' === typeof a ? a.split('') : a, f = 0; f < d; f++)
              if (f in e && b.call(c, e[f], f, a)) return f;
            return -1;
          }
          function jb (a, b) {
            for (var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1; 0 <= d; d--)
              if (d in c && b.call(void 0, c[d], d, a)) return d;
            return -1;
          }
          function kb (a, b) {
            return 0 <= ab(a, b);
          }
          function lb (a, b) {
            b = ab(a, b);
            var c;
            (c = 0 <= b) && ob(a, b);
            return c;
          }
          function ob (a, b) {
            return 1 == Array.prototype.splice.call(a, b, 1).length;
          }
          function pb (a, b) {
            var c = 0;
            bb(a, function (d, e) {
              b.call(void 0, d, e, a) && ob(a, e) && c++;
            });
          }
          function qb (a) {
            return Array.prototype.concat.apply([], arguments);
          }
          function rb (a) {
            var b = a.length;
            if (0 < b) {
              for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
              return c;
            }
            return [];
          }
          function sb (a) {
            for (var b = {}, c = 0, d = 0; d < a.length; ) {
              var e = a[d++];
              var f = e;
              f = Pa(f) ? 'o' + Sa(f) : (typeof f).charAt(0) + f;
              Object.prototype.hasOwnProperty.call(b, f) || ((b[f] = !0), (a[c++] = e));
            }
            a.length = c;
          }
          function tb (a, b) {
            a.sort(b || ub);
          }
          function ub (a, b) {
            return a > b ? 1 : a < b ? -1 : 0;
          }
          function vb (a, b) {
            for (var c = [], d = 0; d < b; d++) c[d] = a;
            return c;
          }
          var wb = function (a) {
            return db(a, function (b) {
              b = b.toString(16);
              return 1 < b.length ? b : '0' + b;
            }).join('');
          };
          var xb = function (a) {
              return function () {
                return a;
              };
            },
            yb = function (a) {
              var b = !1,
                c;
              return function () {
                b || ((c = a()), (b = !0));
                return c;
              };
            },
            zb = function (a) {
              var b = a;
              return function () {
                if (b) {
                  var c = b;
                  b = null;
                  c();
                }
              };
            },
            Ab = function (a) {
              var b = 0,
                c = !1,
                d = [],
                e = function () {
                  b = 0;
                  c && ((c = !1), f());
                },
                f = function () {
                  b = v.setTimeout(e, 1000);
                  a.apply(void 0, d);
                };
              return function (g) {
                d = arguments;
                b ? (c = !0) : f();
              };
            };
          var Bb = function (a, b, c) {
              for (var d in a) b.call(c, a[d], d, a);
            },
            Cb = function (a, b) {
              var c = {},
                d;
              for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
              return c;
            },
            Eb = function (a) {
              var b = Db,
                c;
              for (c in b) if (a.call(void 0, b[c], c, b)) return !0;
              return !1;
            },
            Gb = function (a) {
              var b = Fb,
                c;
              for (c in b) if (!a.call(void 0, b[c], c, b)) return !1;
              return !0;
            },
            Hb = function (a) {
              var b = [],
                c = 0,
                d;
              for (d in a) b[c++] = a[d];
              return b;
            },
            Ib = function (a) {
              var b = [],
                c = 0,
                d;
              for (d in a) b[c++] = d;
              return b;
            },
            Jb = function (a, b) {
              var c = Oa(b),
                d = c ? b : arguments;
              for (c = c ? 0 : 1; c < d.length; c++) {
                if (null == a) return;
                a = a[d[c]];
              }
              return a;
            },
            Kb = function (a, b) {
              return null !== a && b in a;
            },
            Lb = function (a, b) {
              for (var c in a) if (a[c] == b) return !0;
              return !1;
            },
            Nb = function (a) {
              var b = Mb,
                c;
              for (c in b) if (a.call(void 0, b[c], c, b)) return c;
            },
            Ob = function (a) {
              for (var b in a) return !1;
              return !0;
            },
            Pb = function (a) {
              for (var b in a) delete a[b];
            },
            Qb = function (a, b, c) {
              return null !== a && b in a ? a[b] : c;
            },
            Rb = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
              ' '
            ),
            Sb = function (a, b) {
              for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Rb.length; f++)
                  (c = Rb[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
              }
            };
          var Tb,
            Ub = function () {
              if (void 0 === Tb) {
                var a = null,
                  b = v.trustedTypes;
                if (b && b.createPolicy) {
                  try {
                    a = b.createPolicy('goog#html', {
                      createHTML: Ya,
                      createScript: Ya,
                      createScriptURL: Ya,
                    });
                  } catch (c) {
                    v.console && v.console.error(c.message);
                  }
                  Tb = a;
                } else Tb = a;
              }
              return Tb;
            };
          var Xb = function (a, b) {
            this.g = (a === Vb && b) || '';
            this.h = Wb;
          };
          Xb.prototype.Na = !0;
          Xb.prototype.Ea = function () {
            return this.g;
          };
          var Yb = function (a) {
              return a instanceof Xb && a.constructor === Xb && a.h === Wb
                ? a.g
                : 'type_error:Const';
            },
            Zb = function (a) {
              return new Xb(Vb, a);
            },
            Wb = {},
            Vb = {};
          var ac = function (a, b) {
            this.g = b === $b ? a : '';
          };
          ac.prototype.Na = !0;
          ac.prototype.Ea = function () {
            return this.g.toString();
          };
          ac.prototype.qc = !0;
          ac.prototype.jc = function () {
            return 1;
          };
          var bc = function (a) {
              return a instanceof ac && a.constructor === ac
                ? a.g
                : 'type_error:TrustedResourceUrl';
            },
            $b = {},
            cc = function (a) {
              var b = Ub();
              a = b ? b.createScriptURL(a) : a;
              return new ac(a, $b);
            };
          var dc = function (a, b) {
              var c = a.length - b.length;
              return 0 <= c && a.indexOf(b, c) == c;
            },
            ec = function (a) {
              return /^[\s\xa0]*$/.test(a);
            },
            fc = String.prototype.trim
              ? function (a) {
                  return a.trim();
                }
              : function (a) {
                  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
                },
            oc = function (a, b) {
              if (b)
                a = a
                  .replace(gc, '&amp;')
                  .replace(hc, '&lt;')
                  .replace(ic, '&gt;')
                  .replace(jc, '&quot;')
                  .replace(kc, '&#39;')
                  .replace(mc, '&#0;');
              else {
                if (!nc.test(a)) return a;
                -1 != a.indexOf('&') && (a = a.replace(gc, '&amp;'));
                -1 != a.indexOf('<') && (a = a.replace(hc, '&lt;'));
                -1 != a.indexOf('>') && (a = a.replace(ic, '&gt;'));
                -1 != a.indexOf('"') && (a = a.replace(jc, '&quot;'));
                -1 != a.indexOf("'") && (a = a.replace(kc, '&#39;'));
                -1 != a.indexOf('\0') && (a = a.replace(mc, '&#0;'));
              }
              return a;
            },
            gc = /&/g,
            hc = /</g,
            ic = />/g,
            jc = /"/g,
            kc = /'/g,
            mc = /\x00/g,
            nc = /[\x00&<>"']/,
            pc = function (a, b) {
              return -1 != a.toLowerCase().indexOf(b.toLowerCase());
            },
            rc = function (a, b) {
              var c = 0;
              a = fc(String(a)).split('.');
              b = fc(String(b)).split('.');
              for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || '',
                  g = b[e] || '';
                do {
                  f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
                  g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
                  if (0 == f[0].length && 0 == g[0].length) break;
                  c =
                    qc(
                      0 == f[1].length ? 0 : parseInt(f[1], 10),
                      0 == g[1].length ? 0 : parseInt(g[1], 10)
                    ) ||
                    qc(0 == f[2].length, 0 == g[2].length) ||
                    qc(f[2], g[2]);
                  f = f[3];
                  g = g[3];
                } while (0 == c);
              }
              return c;
            },
            qc = function (a, b) {
              return a < b ? -1 : a > b ? 1 : 0;
            };
          var tc = function (a, b) {
            this.g = b === sc ? a : '';
          };
          tc.prototype.Na = !0;
          tc.prototype.Ea = function () {
            return this.g.toString();
          };
          tc.prototype.qc = !0;
          tc.prototype.jc = function () {
            return 1;
          };
          var uc = function (a) {
              return a instanceof tc && a.constructor === tc ? a.g : 'type_error:SafeUrl';
            },
            vc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
            wc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
            xc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
            yc = function (a) {
              if (a instanceof tc) return a;
              a = 'object' == typeof a && a.Na ? a.Ea() : String(a);
              xc.test(a) || (a = 'about:invalid#zClosurez');
              return new tc(a, sc);
            },
            sc = {},
            zc = new tc('about:invalid#zClosurez', sc);
          var Bc = function (a, b) {
            this.g = b === Ac ? a : '';
          };
          Bc.prototype.Na = !0;
          Bc.prototype.Ea = function () {
            return this.g;
          };
          var Ac = {},
            Cc = new Bc('', Ac);
          var Dc;
          a: {
            var Ec = v.navigator;
            if (Ec) {
              var Fc = Ec.userAgent;
              if (Fc) {
                Dc = Fc;
                break a;
              }
            }
            Dc = '';
          }
          var D = function (a) {
            return -1 != Dc.indexOf(a);
          };
          var Gc = function () {
              return D('Trident') || D('MSIE');
            },
            Hc = function () {
              return D('Firefox') || D('FxiOS');
            },
            Jc = function () {
              return (
                D('Safari') &&
                !(
                  Ic() ||
                  D('Coast') ||
                  D('Opera') ||
                  D('Edge') ||
                  D('Edg/') ||
                  D('OPR') ||
                  Hc() ||
                  D('Silk') ||
                  D('Android')
                )
              );
            },
            Ic = function () {
              return (D('Chrome') || D('CriOS')) && !D('Edge');
            };
          var Lc = function (a, b, c) {
            this.g = c === Kc ? a : '';
            this.h = b;
          };
          Lc.prototype.qc = !0;
          Lc.prototype.jc = function () {
            return this.h;
          };
          Lc.prototype.Na = !0;
          Lc.prototype.Ea = function () {
            return this.g.toString();
          };
          var Mc = function (a) {
              return a instanceof Lc && a.constructor === Lc ? a.g : 'type_error:SafeHtml';
            },
            Kc = {},
            Nc = function (a, b) {
              var c = Ub();
              a = c ? c.createHTML(a) : a;
              return new Lc(a, b, Kc);
            },
            Oc = new Lc((v.trustedTypes && v.trustedTypes.emptyHTML) || '', 0, Kc);
          var Pc = yb(function () {
              var a = document.createElement('div'),
                b = document.createElement('div');
              b.appendChild(document.createElement('div'));
              a.appendChild(b);
              b = a.firstChild.firstChild;
              a.innerHTML = Mc(Oc);
              return !b.parentElement;
            }),
            Qc = function (a, b) {
              if (Pc()) for (; a.lastChild; ) a.removeChild(a.lastChild);
              a.innerHTML = Mc(b);
            },
            Rc = function (a, b) {
              a.src = bc(b);
              (b = Ja(a.ownerDocument && a.ownerDocument.defaultView)) &&
                a.setAttribute('nonce', b);
            };
          var Sc = function (a) {
              return decodeURIComponent(a.replace(/\+/g, ' '));
            },
            Tc = function (a) {
              return (a = oc(a, void 0));
            },
            Uc = function (a, b) {
              a.length > b && (a = a.substring(0, b - 3) + '...');
              return a;
            },
            Vc = String.prototype.repeat
              ? function (a, b) {
                  return a.repeat(b);
                }
              : function (a, b) {
                  return Array(b + 1).join(a);
                },
            Wc = function (a) {
              return null == a ? '' : String(a);
            },
            Xc = (2147483648 * Math.random()) | 0,
            Yc = function (a) {
              return String(a).replace(/\-([a-z])/g, function (b, c) {
                return c.toUpperCase();
              });
            },
            Zc = function () {
              return 'googleAvInapp'.replace(/([A-Z])/g, '-$1').toLowerCase();
            },
            $c = function (a) {
              return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
                return c + d.toUpperCase();
              });
            },
            ad = function (a) {
              isFinite(a) && (a = String(a));
              return 'string' === typeof a
                ? /^\s*-?0x/i.test(a)
                  ? parseInt(a, 16)
                  : parseInt(a, 10)
                : NaN;
            };
          var bd = 0,
            cd = 0;
          var dd = function () {
            this.g = [];
          };
          dd.prototype.length = function () {
            return this.g.length;
          };
          var ed = function (a) {
              var b = a.g;
              a.g = [];
              return b;
            },
            fd = function (a, b) {
              for (; 127 < b; ) a.g.push((b & 127) | 128), (b >>>= 7);
              a.g.push(b);
            },
            gd = function (a, b) {
              a.g.push((b >>> 0) & 255);
              a.g.push((b >>> 8) & 255);
              a.g.push((b >>> 16) & 255);
              a.g.push((b >>> 24) & 255);
            };
          var hd = function () {
              return D('iPhone') && !D('iPod') && !D('iPad');
            },
            id = function () {
              return hd() || D('iPad') || D('iPod');
            };
          var jd = function (a) {
            jd[' '](a);
            return a;
          };
          jd[' '] = Ma;
          var kd = function (a, b) {
              try {
                return jd(a[b]), !0;
              } catch (c) {}
              return !1;
            },
            md = function (a, b) {
              var c = ld;
              return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
            };
          var nd = D('Opera'),
            od = Gc(),
            pd = D('Edge'),
            rd =
              D('Gecko') &&
              !(pc(Dc, 'WebKit') && !D('Edge')) &&
              !(D('Trident') || D('MSIE')) &&
              !D('Edge'),
            sd = pc(Dc, 'WebKit') && !D('Edge'),
            td = D('Macintosh'),
            ud = D('Android'),
            vd = hd(),
            wd = D('iPad'),
            xd = D('iPod'),
            yd = id(),
            zd = function () {
              var a = v.document;
              return a ? a.documentMode : void 0;
            },
            Ad;
          a: {
            var Bd = '',
              Cd = (function () {
                var a = Dc;
                if (rd) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (pd) return /Edge\/([\d\.]+)/.exec(a);
                if (od) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (sd) return /WebKit\/(\S+)/.exec(a);
                if (nd) return /(?:Version)[ \/]?(\S+)/.exec(a);
              })();
            Cd && (Bd = Cd ? Cd[1] : '');
            if (od) {
              var Dd = zd();
              if (null != Dd && Dd > parseFloat(Bd)) {
                Ad = String(Dd);
                break a;
              }
            }
            Ad = Bd;
          }
          var Ed = Ad,
            ld = {},
            Fd = function (a) {
              return md(a, function () {
                return 0 <= rc(Ed, a);
              });
            },
            Gd;
          if (v.document && od) {
            var Hd = zd();
            Gd = Hd ? Hd : parseInt(Ed, 10) || void 0;
          } else Gd = void 0;
          var Id = Gd;
          var Jd = Hc(),
            Kd = hd() || D('iPod'),
            Ld = D('iPad'),
            Md = D('Android') && !(Ic() || Hc() || D('Opera') || D('Silk')),
            Nd = Ic(),
            Od = Jc() && !id();
          var Pd = {},
            Qd = null,
            Sd = function (a, b) {
              void 0 === b && (b = 0);
              Rd();
              b = Pd[b];
              for (var c = [], d = 0; d < a.length; d += 3) {
                var e = a[d],
                  f = d + 1 < a.length,
                  g = f ? a[d + 1] : 0,
                  h = d + 2 < a.length,
                  k = h ? a[d + 2] : 0,
                  n = e >> 2;
                e = ((e & 3) << 4) | (g >> 4);
                g = ((g & 15) << 2) | (k >> 6);
                k &= 63;
                h || ((k = 64), f || (g = 64));
                c.push(b[n], b[e], b[g] || '', b[k] || '');
              }
              return c.join('');
            },
            Td = function (a) {
              for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && ((b[c++] = e & 255), (e >>= 8));
                b[c++] = e;
              }
              return Sd(b, 3);
            },
            Vd = function (a) {
              var b = [];
              Ud(a, function (c) {
                b.push(c);
              });
              return b;
            },
            Ud = function (a, b) {
              function c (k) {
                for (; d < a.length; ) {
                  var n = a.charAt(d++),
                    m = Qd[n];
                  if (null != m) return m;
                  if (!ec(n)) throw Error('Unknown base64 encoding at char: ' + n);
                }
                return k;
              }
              Rd();
              for (var d = 0; ; ) {
                var e = c(-1),
                  f = c(0),
                  g = c(64),
                  h = c(64);
                if (64 === h && -1 === e) break;
                b((e << 2) | (f >> 4));
                64 != g && (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
              }
            },
            Rd = function () {
              if (!Qd) {
                Qd = {};
                for (
                  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                      ''
                    ),
                    b = ['+/=', '+/', '-_=', '-_.', '-_'],
                    c = 0;
                  5 > c;
                  c++
                ) {
                  var d = a.concat(b[c].split(''));
                  Pd[c] = d;
                  for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Qd[f] && (Qd[f] = e);
                  }
                }
              }
            };
          var Wd = function () {
            this.h = [];
            this.l = 0;
            this.g = new dd();
          };
          Wd.prototype.reset = function () {
            this.h = [];
            ed(this.g);
            this.l = 0;
          };
          var Xd = function (a, b, c) {
            if (null != c && null != c) {
              fd(a.g, 8 * b);
              a = a.g;
              var d = c;
              c = 0 > d;
              d = Math.abs(d);
              b = d >>> 0;
              d = Math.floor((d - b) / 4294967296);
              d >>>= 0;
              c &&
                ((d = ~d >>> 0),
                (b = (~b >>> 0) + 1),
                4294967295 < b && ((b = 0), d++, 4294967295 < d && (d = 0)));
              bd = b;
              cd = d;
              c = bd;
              for (b = cd; 0 < b || 127 < c; )
                a.g.push((c & 127) | 128), (c = ((c >>> 7) | (b << 25)) >>> 0), (b >>>= 7);
              a.g.push(c);
            }
          };
          var Yd = function () {},
            Zd = 'function' == typeof Uint8Array,
            ce = function (a, b, c, d) {
              a.g = null;
              b || (b = []);
              a.H = void 0;
              a.l = -1;
              a.ia = b;
              a: {
                if ((b = a.ia.length)) {
                  --b;
                  var e = a.ia[b];
                  if (
                    !(
                      null === e ||
                      'object' != typeof e ||
                      Array.isArray(e) ||
                      (Zd && e instanceof Uint8Array)
                    )
                  ) {
                    a.o = b - a.l;
                    a.h = e;
                    break a;
                  }
                }
                a.o = Number.MAX_VALUE;
              }
              a.B = {};
              if (c)
                for (b = 0; b < c.length; b++)
                  (e = c[b]),
                    e < a.o
                      ? ((e += a.l), (a.ia[e] = a.ia[e] || $d))
                      : (ae(a), (a.h[e] = a.h[e] || $d));
              if (d && d.length) for (b = 0; b < d.length; b++) be(a, d[b]);
            },
            $d = [],
            ae = function (a) {
              var b = a.o + a.l;
              a.ia[b] || (a.h = a.ia[b] = {});
            },
            E = function (a, b) {
              if (b < a.o) {
                b += a.l;
                var c = a.ia[b];
                return c !== $d ? c : (a.ia[b] = []);
              }
              if (a.h) return (c = a.h[b]), c === $d ? (a.h[b] = []) : c;
            },
            de = function (a, b) {
              a = E(a, b);
              return null == a ? a : !!a;
            },
            ee = function (a, b, c) {
              a = E(a, b);
              return null == a ? c : a;
            },
            fe = function (a, b) {
              a = de(a, b);
              return null == a ? !1 : a;
            },
            ge = function (a, b) {
              a = E(a, b);
              a = null == a ? a : +a;
              return null == a ? 0 : a;
            },
            he = function (a, b, c) {
              b < a.o ? (a.ia[b + a.l] = c) : (ae(a), (a.h[b] = c));
              return a;
            },
            ie = function (a, b, c, d) {
              c !== d ? he(a, b, c) : b < a.o ? (a.ia[b + a.l] = null) : (ae(a), delete a.h[b]);
              return a;
            },
            be = function (a, b) {
              for (var c, d, e = 0; e < b.length; e++) {
                var f = b[e],
                  g = E(a, f);
                null != g && ((c = f), (d = g), he(a, f, void 0));
              }
              return c ? (he(a, c, d), c) : 0;
            },
            je = function (a, b, c) {
              a.g || (a.g = {});
              if (!a.g[c]) {
                var d = E(a, c);
                d && (a.g[c] = new b(d));
              }
              return a.g[c];
            },
            ke = function (a, b, c) {
              a.g || (a.g = {});
              if (!a.g[c]) {
                for (var d = E(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.g[c] = e;
              }
              b = a.g[c];
              b == $d && (b = a.g[c] = []);
              return b;
            },
            le = function (a, b, c) {
              a.g || (a.g = {});
              var d = c ? c.ia : c;
              a.g[b] = c;
              return he(a, b, d);
            };
          Yd.prototype.A = Zd
            ? function () {
                var a = Uint8Array.prototype.toJSON;
                Uint8Array.prototype.toJSON = function () {
                  return Sd(this);
                };
                try {
                  return JSON.stringify(this.ia && this.ia, me);
                } finally {
                  Uint8Array.prototype.toJSON = a;
                }
              }
            : function () {
                return JSON.stringify(this.ia && this.ia, me);
              };
          var me = function (a, b) {
              return 'number' !== typeof b || (!isNaN(b) && Infinity !== b && -Infinity !== b)
                ? b
                : String(b);
            },
            ne = function (a, b) {
              return new a(b ? JSON.parse(b) : null);
            };
          Yd.prototype.toString = function () {
            return this.ia.toString();
          };
          var oe = document,
            F = window;
          var pe = function (a) {
            ce(this, a, null, null);
          };
          A(pe, Yd);
          var qe = function (a) {
            ce(this, a, null, null);
          };
          A(qe, Yd);
          var re = function (a) {
            ce(this, a, null, null);
          };
          A(re, Yd);
          var se = function (a) {
            var b = [],
              c = [],
              d = {},
              e = function (f, g) {
                var h = g + '  ';
                try {
                  if (void 0 === f) b.push('undefined');
                  else if (null === f) b.push('NULL');
                  else if ('string' === typeof f) b.push('"' + f.replace(/\n/g, '\n' + g) + '"');
                  else if ('function' === typeof f) b.push(String(f).replace(/\n/g, '\n' + g));
                  else if (Pa(f)) {
                    f[Qa] || c.push(f);
                    var k = Sa(f);
                    if (d[k]) b.push('*** reference loop detected (id=' + k + ') ***');
                    else {
                      d[k] = !0;
                      b.push('{');
                      for (var n in f)
                        'function' !== typeof f[n] &&
                          (b.push('\n'), b.push(h), b.push(n + ' = '), e(f[n], h));
                      b.push('\n' + g + '}');
                      delete d[k];
                    }
                  } else b.push(f);
                } catch (m) {
                  b.push('*** ' + m + ' ***');
                }
              };
            e(a, '');
            for (a = 0; a < c.length; a++) Ta(c[a]);
            return b.join('');
          };
          var te = function (a) {
            this.g = a || { cookie: '' };
          };
          l = te.prototype;
          l.set = function (a, b, c) {
            var d = !1;
            if ('object' === typeof c) {
              var e = c.bh;
              d = c.Te || !1;
              var f = c.domain || void 0;
              var g = c.path || void 0;
              var h = c.gd;
            }
            if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
            if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
            void 0 === h && (h = -1);
            this.g.cookie =
              a +
              '=' +
              b +
              (f ? ';domain=' + f : '') +
              (g ? ';path=' + g : '') +
              (0 > h
                ? ''
                : 0 == h
                ? ';expires=' + new Date(1970, 1, 1).toUTCString()
                : ';expires=' + new Date(Date.now() + 1000 * h).toUTCString()) +
              (d ? ';secure' : '') +
              (null != e ? ';samesite=' + e : '');
          };
          l.get = function (a, b) {
            for (
              var c = a + '=', d = (this.g.cookie || '').split(';'), e = 0, f;
              e < d.length;
              e++
            ) {
              f = fc(d[e]);
              if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
              if (f == a) return '';
            }
            return b;
          };
          l.remove = function (a, b, c) {
            var d = void 0 !== this.get(a);
            this.set(a, '', { gd: 0, path: b, domain: c });
            return d;
          };
          l.Ta = function () {
            return ue(this).keys;
          };
          l.Va = function () {
            return ue(this).values;
          };
          var ue = function (a) {
            a = (a.g.cookie || '').split(';');
            for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
              (e = fc(a[f])),
                (d = e.indexOf('=')),
                -1 == d
                  ? (b.push(''), c.push(e))
                  : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
            return { keys: b, values: c };
          };
          var ve = function (a) {
              return (a = new te(a).get('DATA_USE_CONSENT', '')) ? a : null;
            },
            we = function (a) {
              var b = (b = new te(a).get('FCCDCF', '')) ? b : null;
              try {
                var c = b ? ne(qe, b) : null;
              } catch (d) {
                c = null;
              }
              if (!c) return ve(a);
              c = je(c, re, 3);
              if (!c || null == E(c, 1)) return ve(a);
              a = E(c, 2);
              b = Date.now();
              if (a) {
                if (b < a || b > a + 33696000000) return null;
              } else return null;
              return E(c, 1);
            };
          var ye = function (a) {
            ce(this, a, xe, null);
          };
          A(ye, Yd);
          var xe = [1, 2, 3, 4];
          var ze = function (a, b, c) {
              c = void 0 === c ? {} : c;
              this.error = a;
              this.context = b.context;
              this.msg = b.message || '';
              this.id = b.id || 'jserror';
              this.meta = c;
            },
            Ae = function (a) {
              return !!(a.error && a.meta && a.id);
            };
          var Be = yb(function () {
            var a = !1;
            try {
              var b = Object.defineProperty({}, 'passive', {
                get: function () {
                  a = !0;
                },
              });
              v.addEventListener('test', null, b);
            } catch (c) {}
            return a;
          });
          function Ce (a) {
            return a ? (a.passive && Be() ? a : a.capture || !1) : !1;
          }
          var De = function (a, b, c, d) {
              return a.addEventListener ? (a.addEventListener(b, c, Ce(d)), !0) : !1;
            },
            Ee = function (a, b, c) {
              a.removeEventListener && a.removeEventListener(b, c, Ce(void 0));
            },
            Fe = function (a) {
              var b = void 0 === b ? {} : b;
              if ('function' === typeof window.CustomEvent) var c = new CustomEvent('rum_blp', b);
              else
                (c = document.createEvent('CustomEvent')),
                  c.initCustomEvent('rum_blp', !!b.bubbles, !!b.cancelable, b.detail);
              a.dispatchEvent(c);
            };
          try {
            new self.OffscreenCanvas(0, 0).getContext('2d');
          } catch (a) {}
          var Ge = !od || 9 <= Number(Id),
            He = od || nd || sd;
          var Ie = function (a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0;
          };
          Ie.prototype.ceil = function () {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this;
          };
          Ie.prototype.floor = function () {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this;
          };
          Ie.prototype.round = function () {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
          };
          Ie.prototype.scale = function (a, b) {
            this.x *= a;
            this.y *= 'number' === typeof b ? b : a;
            return this;
          };
          var Je = function (a, b) {
            this.width = a;
            this.height = b;
          };
          l = Je.prototype;
          l.aspectRatio = function () {
            return this.width / this.height;
          };
          l.ceil = function () {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this;
          };
          l.floor = function () {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this;
          };
          l.round = function () {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this;
          };
          l.scale = function (a, b) {
            this.width *= a;
            this.height *= 'number' === typeof b ? b : a;
            return this;
          };
          var Me = function (a) {
              return a ? new Ke(Le(a)) : $a || ($a = new Ke());
            },
            Ne = function (a) {
              var b = document;
              return 'string' === typeof a ? b.getElementById(a) : a;
            },
            Oe = function () {
              var a = document;
              return a.querySelectorAll && a.querySelector
                ? a.querySelectorAll('SCRIPT')
                : a.getElementsByTagName('SCRIPT');
            },
            Qe = function (a, b) {
              Bb(b, function (c, d) {
                c && 'object' == typeof c && c.Na && (c = c.Ea());
                'style' == d
                  ? (a.style.cssText = c)
                  : 'class' == d
                  ? (a.className = c)
                  : 'for' == d
                  ? (a.htmlFor = c)
                  : Pe.hasOwnProperty(d)
                  ? a.setAttribute(Pe[d], c)
                  : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0)
                  ? a.setAttribute(d, c)
                  : (a[d] = c);
              });
            },
            Pe = {
              cellpadding: 'cellPadding',
              cellspacing: 'cellSpacing',
              colspan: 'colSpan',
              frameborder: 'frameBorder',
              height: 'height',
              maxlength: 'maxLength',
              nonce: 'nonce',
              role: 'role',
              rowspan: 'rowSpan',
              type: 'type',
              usemap: 'useMap',
              valign: 'vAlign',
              width: 'width',
            },
            Re = function (a) {
              a = a.document;
              a = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body;
              return new Je(a.clientWidth, a.clientHeight);
            },
            Se = function (a) {
              var b = a.scrollingElement
                ? a.scrollingElement
                : sd || 'CSS1Compat' != a.compatMode
                ? a.body || a.documentElement
                : a.documentElement;
              a = a.parentWindow || a.defaultView;
              return od && Fd('10') && a.pageYOffset != b.scrollTop
                ? new Ie(b.scrollLeft, b.scrollTop)
                : new Ie(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
            },
            G = function (a) {
              return a ? a.parentWindow || a.defaultView : window;
            },
            Ve = function (a, b, c) {
              var d = arguments,
                e = document,
                f = String(d[0]),
                g = d[1];
              if (!Ge && g && (g.name || g.type)) {
                f = ['<', f];
                g.name && f.push(' name="', Tc(g.name), '"');
                if (g.type) {
                  f.push(' type="', Tc(g.type), '"');
                  var h = {};
                  Sb(h, g);
                  delete h.type;
                  g = h;
                }
                f.push('>');
                f = f.join('');
              }
              f = Te(e, f);
              g &&
                ('string' === typeof g
                  ? (f.className = g)
                  : Array.isArray(g)
                  ? (f.className = g.join(' '))
                  : Qe(f, g));
              2 < d.length && Ue(e, f, d, 2);
              return f;
            },
            Ue = function (a, b, c, d) {
              function e (h) {
                h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h);
              }
              for (; d < c.length; d++) {
                var f = c[d];
                if (!Oa(f) || (Pa(f) && 0 < f.nodeType)) e(f);
                else {
                  a: {
                    if (f && 'number' == typeof f.length) {
                      if (Pa(f)) {
                        var g = 'function' == typeof f.item || 'string' == typeof f.item;
                        break a;
                      }
                      if ('function' === typeof f) {
                        g = 'function' == typeof f.item;
                        break a;
                      }
                    }
                    g = !1;
                  }
                  C(g ? rb(f) : f, e);
                }
              }
            },
            Te = function (a, b) {
              b = String(b);
              'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
              return a.createElement(b);
            },
            We = function (a) {
              a && a.parentNode && a.parentNode.removeChild(a);
            },
            Xe = function (a) {
              var b;
              if (
                He &&
                !(od && Fd('9') && !Fd('10') && v.SVGElement && a instanceof v.SVGElement) &&
                (b = a.parentElement)
              )
                return b;
              b = a.parentNode;
              return Pa(b) && 1 == b.nodeType ? b : null;
            },
            Ye = function (a, b) {
              if (!a || !b) return !1;
              if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
              if ('undefined' != typeof a.compareDocumentPosition)
                return a == b || !!(a.compareDocumentPosition(b) & 16);
              for (; b && a != b; ) b = b.parentNode;
              return b == a;
            },
            Le = function (a) {
              return 9 == a.nodeType ? a : a.ownerDocument || a.document;
            },
            Ze = function (a) {
              try {
                return a.contentWindow || (a.contentDocument ? G(a.contentDocument) : null);
              } catch (b) {}
              return null;
            },
            $e = function (a, b) {
              a && (a = a.parentNode);
              for (var c = 0; a; ) {
                if (b(a)) return a;
                a = a.parentNode;
                c++;
              }
              return null;
            },
            Ke = function (a) {
              this.g = a || v.document || document;
            };
          l = Ke.prototype;
          l.getElementsByTagName = function (a, b) {
            return (b || this.g).getElementsByTagName(String(a));
          };
          l.createElement = function (a) {
            return Te(this.g, a);
          };
          l.appendChild = function (a, b) {
            a.appendChild(b);
          };
          l.append = function (a, b) {
            Ue(Le(a), a, arguments, 1);
          };
          l.canHaveChildren = function (a) {
            if (1 != a.nodeType) return !1;
            switch (a.tagName) {
              case 'APPLET':
              case 'AREA':
              case 'BASE':
              case 'BR':
              case 'COL':
              case 'COMMAND':
              case 'EMBED':
              case 'FRAME':
              case 'HR':
              case 'IMG':
              case 'INPUT':
              case 'IFRAME':
              case 'ISINDEX':
              case 'KEYGEN':
              case 'LINK':
              case 'NOFRAMES':
              case 'NOSCRIPT':
              case 'META':
              case 'OBJECT':
              case 'PARAM':
              case 'SCRIPT':
              case 'SOURCE':
              case 'STYLE':
              case 'TRACK':
              case 'WBR':
                return !1;
            }
            return !0;
          };
          var bf = function () {
              return !af() && (D('iPod') || D('iPhone') || D('Android') || D('IEMobile'));
            },
            af = function () {
              return D('iPad') || (D('Android') && !D('Mobile')) || D('Silk');
            };
          var cf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
            df = function (a) {
              var b = a.match(cf);
              a = b[1];
              var c = b[3];
              b = b[4];
              var d = '';
              a && (d += a + ':');
              c && ((d = d + '//' + c), b && (d += ':' + b));
              return d;
            },
            ef = function (a, b) {
              if (a) {
                a = a.split('&');
                for (var c = 0; c < a.length; c++) {
                  var d = a[c].indexOf('='),
                    e = null;
                  if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1);
                  } else f = a[c];
                  b(f, e ? Sc(e) : '');
                }
              }
            },
            ff = /#|$/,
            gf = function (a, b) {
              var c = a.search(ff);
              a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
                  var f = a.charCodeAt(d - 1);
                  if (38 == f || 63 == f)
                    if (((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f)) break a;
                  d += e + 1;
                }
                d = -1;
              }
              if (0 > d) return null;
              e = a.indexOf('&', d);
              if (0 > e || e > c) e = c;
              d += b.length + 1;
              return Sc(a.substr(d, e - d));
            };
          var hf = function (a) {
              try {
                return !!a && null != a.location.href && kd(a, 'foo');
              } catch (b) {
                return !1;
              }
            },
            jf = function (a, b) {
              if (a)
                for (var c in a)
                  Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a);
            },
            kf = /https?:\/\/[^\/]+/,
            lf = function (a) {
              return ((a = kf.exec(a)) && a[0]) || '';
            },
            mf = function () {
              var a = v;
              var b = void 0 === b ? !0 : b;
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
            },
            of = function () {
              var a = nf;
              if (!a) return '';
              var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
              try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : 'true';
              } catch (d) {}
              return '';
            },
            pf = function (a, b) {
              try {
                return !(!a.frames || !a.frames[b]);
              } catch (c) {
                return !1;
              }
            },
            qf = function (a, b) {
              for (var c = 0; 50 > c; ++c) {
                if (pf(a, b)) return a;
                a: {
                  try {
                    var d = a.parent;
                    if (d && d != a) {
                      var e = d;
                      break a;
                    }
                  } catch (f) {}
                  e = null;
                }
                if (!(a = e)) break;
              }
              return null;
            };
          var rf = function (a) {
            var b = document;
            try {
              var c = we(b);
              var d = c ? ne(ye, c) : null;
            } catch (e) {
              d = null;
            }
            if (!d) return 0;
            if (de(d, 7)) return 4;
            if (a) {
              if (kb(E(d, 3), a)) return 2;
              if (kb(E(d, 4), a)) return 3;
            }
            return 1;
          };
          var sf = function (a) {
            ce(this, a, null, null);
          };
          A(sf, Yd);
          var H = function () {
            this.J = this.J;
            this.H = this.H;
          };
          H.prototype.J = !1;
          H.prototype.ub = function () {
            return this.J;
          };
          H.prototype.V = function () {
            this.J || ((this.J = !0), this.O());
          };
          var vf = function (a, b) {
              tf(a, Xa(uf, b));
            },
            tf = function (a, b) {
              a.J ? b() : (a.H || (a.H = []), a.H.push(b));
            };
          H.prototype.O = function () {
            if (this.H) for (; this.H.length; ) this.H.shift()();
          };
          var uf = function (a) {
            a && 'function' == typeof a.V && a.V();
          };
          var I = function (a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d;
          };
          I.prototype.getWidth = function () {
            return this.right - this.left;
          };
          I.prototype.getHeight = function () {
            return this.bottom - this.top;
          };
          var wf = function (a) {
            return new I(a.top, a.right, a.bottom, a.left);
          };
          I.prototype.expand = function (a, b, c, d) {
            Pa(a)
              ? ((this.top -= a.top),
                (this.right += a.right),
                (this.bottom += a.bottom),
                (this.left -= a.left))
              : ((this.top -= a),
                (this.right += Number(b)),
                (this.bottom += Number(c)),
                (this.left -= Number(d)));
            return this;
          };
          I.prototype.ceil = function () {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this;
          };
          I.prototype.floor = function () {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this;
          };
          I.prototype.round = function () {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this;
          };
          var xf = function (a, b, c) {
            b instanceof Ie
              ? ((a.left += b.x), (a.right += b.x), (a.top += b.y), (a.bottom += b.y))
              : ((a.left += b),
                (a.right += b),
                'number' === typeof c && ((a.top += c), (a.bottom += c)));
            return a;
          };
          I.prototype.scale = function (a, b) {
            b = 'number' === typeof b ? b : a;
            this.left *= a;
            this.right *= a;
            this.top *= b;
            this.bottom *= b;
            return this;
          };
          var yf = function (a, b, c, d) {
              this.left = a;
              this.top = b;
              this.width = c;
              this.height = d;
            },
            zf = function (a) {
              return new I(a.top, a.left + a.width, a.top + a.height, a.left);
            };
          yf.prototype.ceil = function () {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this;
          };
          yf.prototype.floor = function () {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this;
          };
          yf.prototype.round = function () {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this;
          };
          yf.prototype.scale = function (a, b) {
            b = 'number' === typeof b ? b : a;
            this.left *= a;
            this.width *= a;
            this.top *= b;
            this.height *= b;
            return this;
          };
          var Af = function (a) {
            a = void 0 === a ? v : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b)
              try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
              } catch (c) {}
            try {
              if (b && b.pageViewId && b.canonicalUrl) return b;
            } catch (c) {}
            return null;
          };
          var Bf = function (a, b) {
              a.google_image_requests || (a.google_image_requests = []);
              var c = a.document.createElement('img');
              c.src = b;
              a.google_image_requests.push(c);
            },
            Df = function (a) {
              var b = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=gfp_cw_status';
              jf(a, function (c, d) {
                c && (b += '&' + d + '=' + encodeURIComponent(c));
              });
              Cf(b);
            },
            Cf = function (a) {
              var b = window;
              b.fetch
                ? b.fetch(a, {
                    keepalive: !0,
                    credentials: 'include',
                    redirect: 'follow',
                    method: 'get',
                    mode: 'no-cors',
                  })
                : Bf(b, a);
            };
          var Ef = {};
          var Ff = function () {},
            Gf = function (a, b) {
              if (b !== Ef) throw Error('Bad secret');
              this.g = a;
            };
          t(Gf, Ff);
          Gf.prototype.toString = function () {
            return this.g;
          };
          new Gf('about:blank', Ef);
          new Gf('about:invalid#zTSz', Ef);
          var If = function (a) {
              Hf();
              return Nc(a, null);
            },
            Jf = function (a) {
              Hf();
              return cc(a);
            },
            Hf = Ma;
          var Lf = function (a, b) {
              if ('string' === typeof b) (b = Kf(a, b)) && (a.style[b] = void 0);
              else
                for (var c in b) {
                  var d = a,
                    e = b[c],
                    f = Kf(d, c);
                  f && (d.style[f] = e);
                }
            },
            Mf = {},
            Kf = function (a, b) {
              var c = Mf[b];
              if (!c) {
                var d = Yc(b);
                c = d;
                void 0 === a.style[d] &&
                  ((d = (sd ? 'Webkit' : rd ? 'Moz' : od ? 'ms' : nd ? 'O' : null) + $c(d)),
                  void 0 !== a.style[d] && (c = d));
                Mf[b] = c;
              }
              return c;
            },
            Nf = function (a, b) {
              var c = a.style[Yc(b)];
              return 'undefined' !== typeof c ? c : a.style[Kf(a, b)] || '';
            },
            Of = function (a) {
              try {
                return a.getBoundingClientRect();
              } catch (b) {
                return { left: 0, top: 0, right: 0, bottom: 0 };
              }
            },
            Pf = function (a) {
              var b = Le(a),
                c = new Ie(0, 0);
              var d = b ? Le(b) : document;
              d =
                !od || 9 <= Number(Id) || 'CSS1Compat' == Me(d).g.compatMode
                  ? d.documentElement
                  : d.body;
              if (a == d) return c;
              a = Of(a);
              b = Se(Me(b).g);
              c.x = a.left + b.x;
              c.y = a.top + b.y;
              return c;
            },
            Qf = function (a, b) {
              var c = new Ie(0, 0),
                d = G(Le(a));
              if (!kd(d, 'parent')) return c;
              do {
                if (d == b) var e = Pf(a);
                else (e = Of(a)), (e = new Ie(e.left, e.top));
                c.x += e.x;
                c.y += e.y;
              } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
              return c;
            },
            Rf = function () {
              var a = '100%';
              'number' == typeof a && (a = Math.round(a) + 'px');
              return a;
            },
            Tf = function (a) {
              var b = Sf;
              a: {
                var c = Le(a);
                if (
                  c.defaultView &&
                  c.defaultView.getComputedStyle &&
                  (c = c.defaultView.getComputedStyle(a, null))
                ) {
                  c = c.display || c.getPropertyValue('display') || '';
                  break a;
                }
                c = '';
              }
              c || (c = a.currentStyle ? a.currentStyle.display : null);
              if ('none' != (c || (a.style && a.style.display))) return b(a);
              c = a.style;
              var d = c.display,
                e = c.visibility,
                f = c.position;
              c.visibility = 'hidden';
              c.position = 'absolute';
              c.display = 'inline';
              a = b(a);
              c.display = d;
              c.position = f;
              c.visibility = e;
              return a;
            },
            Sf = function (a) {
              var b = a.offsetWidth,
                c = a.offsetHeight,
                d = sd && !b && !c;
              return (void 0 === b || d) && a.getBoundingClientRect
                ? ((a = Of(a)), new Je(a.right - a.left, a.bottom - a.top))
                : new Je(b, c);
            };
          var Uf = !!window.google_async_iframe_id,
            Vf = (Uf && window.parent) || window,
            Wf = function () {
              if (Uf && !hf(Vf)) {
                var a = '.' + oe.domain;
                try {
                  for (; 2 < a.split('.').length && !hf(Vf); )
                    (oe.domain = a = a.substr(a.indexOf('.') + 1)), (Vf = window.parent);
                } catch (b) {}
                hf(Vf) || (Vf = window);
              }
              return Vf;
            };
          var Xf = function (a) {
            for (var b = 0, c = a, d = 0; a && a != a.parent; )
              (a = a.parent), d++, hf(a) && ((c = a), (b = d));
            return { ma: c, level: b };
          };
          var Yf = function () {
              this.S = {};
            },
            ag = function () {
              if (Zf) var a = Zf;
              else {
                a = ((a = Af()) ? (hf(a.master) ? a.master : null) : null) || Wf();
                var b = a.google_persistent_state_async;
                a =
                  null != b && 'object' == typeof b && null != b.S && 'object' == typeof b.S
                    ? (Zf = b)
                    : (a.google_persistent_state_async = Zf = new Yf());
              }
              b = Wf();
              var c = Af(b);
              c
                ? ((c = c || Af())
                    ? ((b = c.pageViewId),
                      (c = c.clientId),
                      'string' === typeof c && (b += c.replace(/\D/g, '').substr(0, 6)))
                    : (b = null),
                  (b = +b))
                : ((b = Xf(b).ma),
                  (c = b.google_global_correlator) ||
                    (b.google_global_correlator = c =
                      1 + Math.floor(Math.random() * Math.pow(2, 43))),
                  (b = c));
              c = $f[7] || 'google_ps_7';
              a = a.S;
              var d = a[c];
              a = void 0 === d ? (a[c] = b) : d;
              return a;
            },
            Zf = null,
            bg = {},
            $f =
              ((bg[8] = 'google_prev_ad_formats_by_region'),
              (bg[9] = 'google_prev_ad_slotnames_by_region'),
              bg);
          var cg = function () {
            var a;
            this.g = a = void 0 === a ? {} : a;
          };
          cg.prototype.reset = function () {
            this.g = {};
          };
          var dg = null;
          var eg = function () {
              const $___old_0877c35e25f46c22 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'performance'
              );
              try {
                if ($___old_0877c35e25f46c22)
                  ({}.constructor.defineProperty(
                    window,
                    'performance',
                    $___stub_c0f1d0ee9b6f2da6.performance
                  ));
                return function () {
                  var a = v.performance;
                  return a && a.now && a.timing
                    ? Math.floor(a.now() + a.timing.navigationStart)
                    : z();
                }.apply(this, arguments);
              } finally {
                if ($___old_0877c35e25f46c22)
                  ({}.constructor.defineProperty(window, 'performance', $___old_0877c35e25f46c22));
              }
            },
            fg = function () {
              const $___old_a7dfcbbe6409f8f4 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'performance'
              );
              try {
                if ($___old_a7dfcbbe6409f8f4)
                  ({}.constructor.defineProperty(
                    window,
                    'performance',
                    $___stub_c0f1d0ee9b6f2da6.performance
                  ));
                return function () {
                  var a = void 0 === a ? v : a;
                  return (a = a.performance) && a.now ? a.now() : null;
                }.apply(this, arguments);
              } finally {
                if ($___old_a7dfcbbe6409f8f4)
                  ({}.constructor.defineProperty(window, 'performance', $___old_a7dfcbbe6409f8f4));
              }
            },
            gg = function (a) {
              const $___old_2094ee1614b30a28 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'performance'
              );
              try {
                if ($___old_2094ee1614b30a28)
                  ({}.constructor.defineProperty(
                    window,
                    'performance',
                    $___stub_c0f1d0ee9b6f2da6.performance
                  ));
                return function () {
                  var b = v.performance;
                  return (b && b.timing && b.timing[a]) || 0;
                }.apply(this, arguments);
              } finally {
                if ($___old_2094ee1614b30a28)
                  ({}.constructor.defineProperty(window, 'performance', $___old_2094ee1614b30a28));
              }
            },
            hg = function () {
              var a = Math.min(gg('domLoading') || Infinity, gg('domInteractive') || Infinity);
              return Infinity == a ? Math.max(gg('responseEnd'), gg('navigationStart')) : a;
            };
          var ig = function (a, b, c, d, e) {
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = void 0 === d ? 0 : d;
            this.uniqueId = Math.random();
            this.slotId = e;
          };
          var jg = v.performance,
            kg = !!(jg && jg.mark && jg.measure && jg.clearMarks),
            lg = yb(function () {
              var a;
              if ((a = kg)) {
                var b;
                if (null === dg) {
                  dg = '';
                  try {
                    a = '';
                    try {
                      a = v.top.location.hash;
                    } catch (c) {
                      a = v.location.hash;
                    }
                    a && (dg = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : '');
                  } catch (c) {}
                }
                b = dg;
                a = !!b.indexOf && 0 <= b.indexOf('1337');
              }
              return a;
            }),
            mg = function (a, b) {
              this.events = [];
              this.g = b || v;
              var c = null;
              b &&
                ((b.google_js_reporting_queue = b.google_js_reporting_queue || []),
                (this.events = b.google_js_reporting_queue),
                (c = b.google_measure_js_timing));
              this.l = lg() || (null != c ? c : Math.random() < a);
            };
          mg.prototype.H = function () {
            this.l = !1;
            this.events != this.g.google_js_reporting_queue &&
              (lg() && C(this.events, ng), (this.events.length = 0));
          };
          mg.prototype.J = function (a) {
            !this.l || 2048 < this.events.length || this.events.push(a);
          };
          var ng = function (a) {
            a &&
              jg &&
              lg() &&
              (jg.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'),
              jg.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
          };
          mg.prototype.start = function (a, b) {
            if (!this.l) return null;
            a = new ig(a, b, fg() || eg());
            b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
            jg && lg() && jg.mark(b);
            return a;
          };
          var og = function (a, b) {
            if (a.l && 'number' === typeof b.value) {
              b.duration = (fg() || eg()) - b.value;
              var c = 'goog_' + b.label + '_' + b.uniqueId + '_end';
              jg && lg() && jg.mark(c);
              a.J(b);
            }
          };
          var pg = function () {
            this.h = 'jserror';
            this.l = !1;
            this.g = null;
            this.o = !1;
            this.B = Math.random();
            this.A = this.Fa;
          };
          l = pg.prototype;
          l.Gc = function (a) {
            this.h = a;
          };
          l.Yb = function (a) {
            this.g = a;
          };
          l.Hc = function (a) {
            this.l = a;
          };
          l.Ic = function (a) {
            this.o = a;
          };
          l.Fa = function (a, b, c, d, e) {
            e = void 0 === e ? this.h : e;
            if ((this.o ? this.B : Math.random()) > (void 0 === c ? 0.01 : c)) return this.l;
            Ae(b) || (b = new ze(b, { context: a, id: e }));
            if (d || this.g) (b.meta = {}), this.g && this.g(b.meta), d && d(b.meta);
            v.google_js_errors = v.google_js_errors || [];
            v.google_js_errors.push(b);
            v.error_rep_loaded ||
              ((b = v.document),
              (c = Jf(
                v.location.protocol + '//pagead2.googlesyndication.com/pagead/js/err_rep.js'
              )),
              (a = b.createElement('script')),
              Rc(a, c),
              (b = b.getElementsByTagName('script')[0]) &&
                b.parentNode &&
                b.parentNode.insertBefore(a, b),
              (v.error_rep_loaded = !0));
            return this.l;
          };
          l.$a = function (a, b, c) {
            try {
              var d = b();
            } catch (e) {
              if (!this.A(a, e, 0.01, c, this.h)) throw e;
            }
            return d;
          };
          l.Dc = function (a, b, c, d) {
            var e = this;
            return function (f) {
              for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
              return e.$a(
                a,
                function () {
                  return b.apply(c, g);
                },
                d
              );
            };
          };
          var qg = function (a) {
              return (
                { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                  a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ''
                ] || 0
              );
            },
            rg = function (a) {
              var b;
              a.visibilityState
                ? (b = 'visibilitychange')
                : a.mozVisibilityState
                ? (b = 'mozvisibilitychange')
                : a.webkitVisibilityState && (b = 'webkitvisibilitychange');
              return b;
            };
          var sg = function (a) {
            a = a._google_rum_ns_ = a._google_rum_ns_ || {};
            return (a.pq = a.pq || []);
          };
          var tg = function (a, b, c) {
              jf(b, function (d, e) {
                var f = c && c[e];
                (!d && 0 !== d) ||
                  f ||
                  ((a += '&' + encodeURIComponent(e) + '=' + encodeURIComponent(String(d))),
                  c && (c[e] = !0));
              });
              return a;
            },
            Bg = function (a, b, c, d, e, f, g, h) {
              const $___old_1839ea91956321fc = {}.constructor.getOwnPropertyDescriptor(
                window,
                'performance'
              );
              try {
                if ($___old_1839ea91956321fc)
                  ({}.constructor.defineProperty(
                    window,
                    'performance',
                    $___stub_c0f1d0ee9b6f2da6.performance
                  ));
                return function () {
                  f = void 0 === f ? Infinity : f;
                  g = void 0 === g ? !1 : g;
                  mg.call(this, a, h);
                  var k = this;
                  this.D = 0;
                  this.L = f;
                  this.$ = b;
                  this.M = c;
                  this.Z = d;
                  this.ea = e;
                  a = this.g.navigator;
                  this.W = !('csi.gstatic.com' !== this.M || !a || !a.sendBeacon);
                  this.A = {};
                  this.K = {};
                  (this.g.performance && this.g.performance.now) || ug(this, 'dat', 1);
                  a && a.deviceMemory && ug(this, 'dmc', a.deviceMemory);
                  this.U = !g;
                  this.N = function () {
                    k.g.setTimeout(function () {
                      return vg(k);
                    }, 1100);
                  };
                  this.va = [];
                  this.X = function () {
                    wg(k, 1);
                  };
                  this.R = function () {
                    wg(k, 2);
                  };
                  this.fa = Ab(function () {
                    vg(k);
                  });
                  this.Da = function () {
                    var m = k.g.document;
                    (null != m.hidden
                      ? m.hidden
                      : null != m.mozHidden
                      ? m.mozHidden
                      : null != m.webkitHidden && m.webkitHidden) && k.fa();
                  };
                  this.G = this.g.setTimeout(function () {
                    return vg(k);
                  }, 5000);
                  this.B = {};
                  this.o = b.length + c.length + d.length + e.length + 3;
                  this.h = 0;
                  C(this.events, function (m) {
                    return xg(k, m);
                  });
                  this.I = [];
                  b = sg(this.g);
                  var n = function (m) {
                    var u = m[0];
                    m = m[1];
                    var p = u.length + m.length + 2;
                    8000 < k.o + k.h + p && vg(k);
                    k.I.push([u, m]);
                    k.h += p;
                    yg(k);
                    return 0;
                  };
                  C(b, function (m) {
                    return n(m);
                  });
                  b.length = 0;
                  b.push = n;
                  zg(this);
                  Ag(this);
                }.apply(this, arguments);
              } finally {
                if ($___old_1839ea91956321fc)
                  ({}.constructor.defineProperty(window, 'performance', $___old_1839ea91956321fc));
              }
            };
          t(Bg, mg);
          var Ag = function (a) {
              'complete' === a.g.document.readyState
                ? a.g.setTimeout(function () {
                    return vg(a);
                  }, 0)
                : De(a.g, 'load', a.N);
              var b = rg(a.g.document);
              'undefined' !== typeof b && De(a.g, b, a.Da);
              De(a.g, 'unload', a.X);
              De(a.g, 'pagehide', a.R);
            },
            ug = function (a, b, c) {
              c = String(c);
              a.o =
                null != a.A[b]
                  ? a.o + (c.length - a.A[b].length)
                  : a.o + (b.length + c.length + 2);
              a.A[b] = c;
            },
            Cg = function (a) {
              null != a.A.uet && ((a.o -= 3 + a.A.uet.length + 2), delete a.A.uet);
            },
            Fg = function (a, b, c, d, e) {
              e = void 0 === e ? '' : e;
              var f = Dg(a, b, c, d, e);
              8000 < a.o + a.h + f && (vg(a), (f = b.length + c.length + 2));
              Eg(a, b, c, d, e);
              a.h += f;
              yg(a);
            },
            Dg = function (a, b, c, d, e) {
              return null == a.B[b]
                ? b.length + c.length + 2
                : d
                ? c.length + (void 0 === e ? '' : e).length
                : c.length - a.B[b].length;
            },
            Eg = function (a, b, c, d, e) {
              a.B[b] = d && null != a.B[b] ? a.B[b] + ('' + (void 0 === e ? '' : e) + c) : c;
            },
            yg = function (a) {
              6000 <= a.o + a.h && vg(a);
            },
            vg = function (a) {
              if (a.l && a.U) {
                try {
                  if (a.h) {
                    var b = a.B;
                    a.D++;
                    var c = Gg(a, b);
                    b = !1;
                    try {
                      b = !!(a.W && a.g.navigator && a.g.navigator.sendBeacon(c, null));
                    } catch (d) {
                      a.W = !1;
                    }
                    b || Bf(a.g, c);
                    zg(a);
                    a.D === a.L && a.H();
                  }
                } catch (d) {
                  new pg().Fa(358, d);
                }
                a.B = {};
                a.h = 0;
                a.events.length = 0;
                a.g.clearTimeout(a.G);
                a.G = 0;
              }
            },
            Gg = function (a, b) {
              var c = a.$ + '//' + a.M + a.Z + a.ea,
                d = {};
              c = tg(c, a.A, d);
              c = tg(c, b, d);
              a.g.google_timing_params &&
                ((c = tg(c, a.g.google_timing_params, d)), (a.g.google_timing_params = void 0));
              C(a.I, function (e) {
                var f = r(e);
                e = f.next().value;
                f = f.next().value;
                var g = {};
                c = tg(c, ((g[e] = f), g));
              });
              a.I.length = 0;
              return c;
            },
            zg = function (a) {
              ug(a, 'puid', (a.D + 1).toString(36) + '~' + z().toString(36));
            },
            xg = function (a, b) {
              var c = 'met.' + b.type,
                d = 'number' === typeof b.value ? Math.round(b.value).toString(36) : b.value,
                e = Math.round(b.duration);
              b =
                '' +
                b.label +
                (null != b.slotId ? '_' + b.slotId : '') +
                ('.' + d) +
                (0 < e ? '_' + e.toString(36) : '');
              Fg(a, c, b, !0, '~');
            };
          Bg.prototype.J = function (a) {
            this.l && this.D < this.L && (mg.prototype.J.call(this, a), xg(this, a));
          };
          Bg.prototype.H = function () {
            mg.prototype.H.call(this);
            this.g.clearTimeout(this.G);
            this.h = this.G = 0;
            this.B = {};
            Pb(this.K);
            Pb(this.A);
            Ee(this.g, 'load', this.N);
            Ee(this.g, 'unload', this.X);
            Ee(this.g, 'pagehide', this.R);
          };
          var wg = function (a, b) {
            ug(a, 'uet', b);
            C(a.va, function (c) {
              try {
                c();
              } catch (d) {}
            });
            Fe(a.g);
            vg(a);
            Cg(a);
          };
          var J = function () {
              this.g = new Bg(1, 'https:', 'csi.gstatic.com', '/csi?v=2&s=', 'ima', void 0, !0);
              var a = ag();
              null != a && ug(this.g, 'c', a);
              a = parseInt(this.g.A.c, 10) / 2;
              null != a && ug(this.g, 'slotId', a);
            },
            K = function (a, b, c) {
              if (null != c) {
                a = a.g;
                var d = b + '=' + c;
                a.K[d] || (Fg(a, b, c, !1), 1000 > d.length && (a.K[d] = !0));
              }
            },
            Hg = function (a, b) {
              for (var c in b)
                b[c] =
                  'object' === typeof b[c]
                    ? encodeURIComponent(JSON.stringify(b[c]))
                    : encodeURIComponent(String(b[c]));
              a = a.g;
              c = !1;
              var d = 0,
                e;
              for (e in b) null != a.B[e] && (c = !0), (d += Dg(a, e, b[e], !1));
              (8000 < a.o + a.h + d || c) && vg(a);
              for (var f in b) Eg(a, f, b[f], !1);
              a.h += d;
              yg(a);
            },
            Ig = function (a) {
              var b = J.C().g,
                c = eg() - 0;
              b.l && b.J(new ig(a, 4, c, 0, void 0));
            };
          Na(J);
          var Jg = function (a) {
              return /^\s*$/.test(a)
                ? !1
                : /^[\],:{}\s\u2028\u2029]*$/.test(
                    a
                      .replace(/\\["\\\/bfnrtu]/g, '@')
                      .replace(
                        /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                        ']'
                      )
                      .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, '')
                  );
            },
            Kg = function (a) {
              a = String(a);
              if (Jg(a))
                try {
                  return eval('(' + a + ')');
                } catch (b) {}
              throw Error('Invalid JSON string: ' + a);
            },
            Ng = function (a, b) {
              var c = [];
              Lg(new Mg(b), a, c);
              return c.join('');
            },
            Mg = function (a) {
              this.g = a;
            },
            Lg = function (a, b, c) {
              if (null == b) c.push('null');
              else {
                if ('object' == typeof b) {
                  if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push('[');
                    for (var e = '', f = 0; f < b; f++)
                      c.push(e),
                        (e = d[f]),
                        Lg(a, a.g ? a.g.call(d, String(f), e) : e, c),
                        (e = ',');
                    c.push(']');
                    return;
                  }
                  if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                  else {
                    c.push('{');
                    f = '';
                    for (d in b)
                      Object.prototype.hasOwnProperty.call(b, d) &&
                        ((e = b[d]),
                        'function' != typeof e &&
                          (c.push(f),
                          Og(d, c),
                          c.push(':'),
                          Lg(a, a.g ? a.g.call(b, d, e) : e, c),
                          (f = ',')));
                    c.push('}');
                    return;
                  }
                }
                switch (typeof b) {
                  case 'string':
                    Og(b, c);
                    break;
                  case 'number':
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : 'null');
                    break;
                  case 'boolean':
                    c.push(String(b));
                    break;
                  case 'function':
                    c.push('null');
                    break;
                  default:
                    throw Error('Unknown type: ' + typeof b);
                }
              }
            },
            Pg = {
              '"': '\\"',
              '\\': '\\\\',
              '/': '\\/',
              '\b': '\\b',
              '\f': '\\f',
              '\n': '\\n',
              '\r': '\\r',
              '\t': '\\t',
              '\x0B': '\\u000b',
            },
            Qg = /\uffff/.test('\uFFFF')
              ? /[\\"\x00-\x1f\x7f-\uffff]/g
              : /[\\"\x00-\x1f\x7f-\xff]/g,
            Og = function (a, b) {
              b.push(
                '"',
                a.replace(Qg, function (c) {
                  var d = Pg[c];
                  d ||
                    ((d = '\\u' + (c.charCodeAt(0) | 65536).toString(16).substr(1)), (Pg[c] = d));
                  return d;
                }),
                '"'
              );
            };
          var Rg = function () {
              this.l = null;
              this.g = 'missing-id';
              this.h = !1;
            },
            Tg = function (a) {
              var b = null;
              try {
                b = document.getElementsByClassName('lima-exp-data');
              } catch (c) {
                return Sg('missing-element', a.g), null;
              }
              if (1 < b.length) return Sg('multiple-elements', a.g), null;
              b = b[0];
              return b ? b.innerHTML : (Sg('missing-element', a.g), null);
            },
            Vg = function () {
              var a = Ug,
                b = Tg(a);
              if (null !== b)
                if (Jg(b)) {
                  var c = JSON.parse(b);
                  b = c.experimentIds;
                  var d = c.binaryIdentifier;
                  c = c.adEventId;
                  var e = 'string' === typeof d;
                  if ('string' == typeof c) {
                    var f = J.C();
                    null != c && ug(f.g, 'qqid', c);
                  }
                  e && (a.g = d);
                  'string' !== typeof b
                    ? Sg('missing-flags', a.g)
                    : (e || Sg('missing-binary-id', a.g), (a.l = b));
                } else Sg('invalid-json', a.g);
            };
          Rg.prototype.reset = function () {
            this.l = null;
            this.g = 'missing-id';
          };
          var Xg = function (a, b, c, d, e) {
              this.id = a;
              this.F = b;
              this.h = c;
              this.Xb = !1;
              this.g = d;
              this.l = e;
              this.h && Wg(this);
            },
            Yg = function (a) {
              return a.Xb || a.h;
            },
            Wg = function (a) {
              if (a.g && a.l) {
                var b = a.g;
                b && Object.assign(a.l.g, b);
              }
            },
            Zg = function () {
              this.g = [];
            },
            $g = function () {
              this.g = new Map();
              this.h = !1;
              this.o = new Zg();
              this.B = new Xg(0, 0, !1);
              this.l = [this.o];
              this.A = new cg();
            },
            M = function (a) {
              var b = ah;
              if (b.h || b.g.has(a.id) || (null == a.F && null == a.control) || 0 == a.fc)
                return b.B;
              var c = b.o;
              if (null != a.control)
                for (var d = r(b.l), e = d.next(); !e.done; e = d.next()) {
                  if (((e = e.value), e.g.includes(a.control))) {
                    c = e;
                    break;
                  }
                }
              else null != a.ba && (c = a.ba);
              d = 0;
              null != a.control ? (d = a.control.F) : null != a.F && (d = a.F);
              a = new Xg(a.id, d, !!a.$g, a.flags, b.A);
              c.g.push(a);
              b.l.includes(c) || b.l.push(c);
              b.g.set(a.id, a);
              return a;
            },
            bh = function () {
              var a = ah;
              return [].concat(fa(a.g.keys())).filter(function (b) {
                return Yg(this.g.get(b));
              }, a);
            },
            ch = function (a) {
              var b = ah;
              b.h || (a.g(b.l, b.g), (b.h = !0));
            };
          $g.prototype.reset = function () {
            for (var a = r(this.g), b = a.next(); !b.done; b = a.next())
              (b = r(b.value)), b.next(), (b.next().value.Xb = !1);
            this.h = !1;
            this.A.reset();
          };
          var ah = new $g(),
            eh = function () {
              return dh.g
                .filter(function (a) {
                  return Yg(a);
                })
                .map(function (a) {
                  return a.id;
                });
            };
          var fh = function () {};
          fh.prototype.g = function (a) {
            a = r(a);
            for (var b = a.next(); !b.done; b = a.next()) {
              var c = 0,
                d = Math.floor(1000 * Math.random());
              b = r(b.value.g);
              for (var e = b.next(); !e.done; e = b.next())
                if (((e = e.value), (c += e.F), d < c)) {
                  e.Xb = !0;
                  Wg(e);
                  break;
                }
            }
          };
          var ih = function (a) {
            ce(this, a, gh, hh);
          };
          A(ih, Yd);
          var gh = [2, 8],
            hh = [
              [3, 4, 5],
              [6, 7],
            ];
          var kh = function (a) {
            ce(this, a, jh, null);
          };
          A(kh, Yd);
          var jh = [4];
          var nh = function (a) {
            ce(this, a, lh, mh);
          };
          A(nh, Yd);
          var lh = [5],
            mh = [[1, 2, 3, 6, 7]];
          var ph = function (a) {
            ce(this, a, oh, null);
          };
          A(ph, Yd);
          var oh = [2];
          var rh = function (a) {
            ce(this, a, qh, null);
          };
          A(rh, Yd);
          var qh = [2];
          var th = function (a) {
            ce(this, a, sh, null);
          };
          A(th, Yd);
          var vh = function (a) {
            ce(this, a, uh, null);
          };
          A(vh, Yd);
          var sh = [1, 4, 2, 3],
            uh = [2];
          var wh = function (a, b) {
              switch (b) {
                case 1:
                  return ee(a, 1, 0);
                case 2:
                  return ee(a, 2, 0);
                case 3:
                  return ee(a, 3, 0);
                case 6:
                  return ee(a, 6, 0);
                default:
                  return null;
              }
            },
            zh = function (a, b) {
              if (!a) return null;
              switch (b) {
                case 1:
                  return fe(a, 1);
                case 7:
                  return ee(a, 3, '');
                case 2:
                  return ge(a, 2);
                case 3:
                  return ee(a, 3, '');
                case 6:
                  return E(a, 4);
                default:
                  return null;
              }
            };
          var Ah = {},
            Bh = ((Ah[47] = Jd), Ah);
          function Ch () {
            var a = Dh,
              b = ke(new th(Eh), vh, 2);
            1 == b.length &&
              16 == ee(b[0], 1, 0) &&
              ke(b[0], rh, 2).forEach(function (c) {
                var d = ee(c, 1, 0),
                  e = je(c, ih, 3),
                  f = a[ee(c, 4, 0)];
                ke(c, ph, 2).forEach(function (g) {
                  var h = d || ee(g, 4, 0),
                    k = ee(g, 1, 0),
                    n = e || je(g, ih, 3);
                  n = n ? ee(n, 3, 0) : null;
                  n = Bh[n];
                  g = Fh(ke(g, nh, 2));
                  M({ id: k, F: h, ba: f, fc: n, flags: g });
                });
              });
          }
          function Fh (a) {
            if (a.length) {
              var b = {};
              a.forEach(function (c) {
                var d = be(c, mh[0]),
                  e = je(c, kh, 4);
                e && ((c = wh(c, d)), (d = zh(e, d)), (b[c] = d));
              });
              return b;
            }
          }
          var Gh = function (a) {
            this.h = a;
          };
          Gh.prototype.g = function (a, b) {
            a = r(this.h);
            for (var c = a.next(); !c.done; c = a.next())
              if ((c = b.get(c.value))) (c.Xb = !0), Wg(c);
          };
          var Hh = function (a, b) {
            this.h = a;
            this.l = b;
          };
          t(Hh, Gh);
          Hh.prototype.g = function (a, b) {
            Gh.prototype.g.call(this, a, b);
            var c = [];
            a = [];
            for (var d = r(this.h), e = d.next(); !e.done; e = d.next())
              (e = e.value), b.get(e) ? c.push(e) : a.push(e);
            b = c.map(String).join(',') || '0';
            a = a.map(String).join(',') || '0';
            K(J.C(), 'sei', b);
            K(J.C(), 'nsei', a);
            K(J.C(), 'bi', this.l);
          };
          var Ih = function () {
            Rg.apply(this, arguments);
          };
          t(Ih, Rg);
          var Sg = function (a, b) {
            var c = J.C();
            K(c, 'eee', a);
            K(c, 'bi', b);
          };
          Na(Ih);
          function Jh () {
            return Kh.split(',')
              .map(function (a) {
                return parseInt(a, 10);
              })
              .filter(function (a) {
                return !isNaN(a);
              });
          }
          var dh = new Zg(),
            Lh = new Zg(),
            Mh = new Zg();
          M({ id: 318475490, F: 0 });
          M({ id: 324123032, F: 0 });
          M({ id: 418572103, F: 0 });
          M({ id: 420706097, F: 10 });
          M({ id: 420706098, F: 10 });
          M({ id: 21061786, F: 10 });
          M({ id: 21061817, F: 10 });
          M({ id: 21061824, F: 50 });
          M({ id: 21061888, F: 10 });
          M({ id: 21061893, F: 10 });
          M({ id: 21062100, F: 0 });
          M({ id: 21062101, F: 0 });
          M({ id: 420706109, F: 10 });
          M({ id: 420706110, F: 10 });
          M({ id: 21062347, F: 0 });
          M({ id: 21063070, F: 0 });
          M({ id: 21063072, F: 0 });
          M({ id: 21063100, F: 0 });
          M({ id: 420706105, F: 10 });
          M({ id: 420706106, F: 10 });
          M({ id: 75259402, F: 10 });
          M({ id: 75259403, F: 10 });
          M({ id: 21064018, F: 0 });
          M({ id: 21064020, F: 0 });
          M({ id: 21064022, F: 0 });
          M({ id: 21064024, F: 0 });
          M({ id: 21064075, F: 0 });
          M({ id: 21064201, F: 50 });
          var Nh = M({ id: 210640812, F: 10 });
          M({ id: 420706142, F: 0 });
          M({ id: 21064347, F: 0 });
          M({ id: 72811302, F: 0 });
          M({ id: 318491509, F: 0 });
          M({ id: 72811303, F: 0 });
          M({ id: 44719312, F: 0 });
          M({ id: 72811304, F: 0 });
          M({ id: 44719313, F: 0 });
          M({ id: 72811305, F: 0 });
          M({ id: 72811306, F: 0 });
          M({ id: 72811307, F: 0 });
          M({ id: 44725460, F: 0 });
          M({ id: 44725462, F: 0 });
          M({ id: 21064565, F: 0 });
          M({ id: 21064567, F: 0 });
          M({ id: 40819804, F: 10 });
          var Oh = M({ id: 40819805, F: 10 });
          M({ id: 418572006, F: 10 });
          M({ id: 420706136, F: 10 });
          M({ id: 420706137, F: 10 });
          M({ id: 420706138, F: 10 });
          M({ id: 420706139, F: 10 });
          M({ id: 420706140, F: 10 });
          M({ id: 420706141, F: 10 });
          M({ id: 21065285, F: 1 });
          M({ id: 21065286, F: 1 });
          M({ id: 21065287, F: 10, fc: Jd });
          M({ id: 21065288, F: 10, fc: Jd });
          var Ph = M({ id: 72811314, F: 0 });
          M({ id: 44714743, F: 0 });
          M({ id: 44718898, F: 0 });
          M({ id: 44719216, F: 0 });
          M({ id: 44730895, F: 10 });
          M({ id: 44730896, F: 10 });
          M({ id: 44730769, F: 0 });
          M({ id: 44731465, F: 10 });
          M({ id: 44731467, F: 10 });
          M({ id: 44728149, F: 10, ba: dh });
          M({ id: 44728150, F: 10, ba: dh });
          M({ id: 44728138, F: 10, ba: dh });
          M({ id: 44728139, F: 10, ba: dh });
          M({ id: 44731964, F: 10, ba: dh });
          M({ id: 44731965, F: 10, ba: dh });
          M({ id: 668123728, F: 10, ba: dh });
          M({ id: 668123729, F: 10, ba: dh });
          M({ id: 44727842, F: 0, ba: dh });
          M({ id: 44727843, F: 0, ba: dh });
          M({ id: 31061774, F: 10 });
          var Qh = M({ id: 31061775, F: 10 });
          M({ id: 44730612, F: 10 });
          M({ id: 44731115, F: 0 });
          var Rh = M({ id: 44731116, F: 0 });
          M({ id: 44731363, F: 10 });
          M({ id: 44731364, F: 10 });
          M({ id: 44712632, F: 10 });
          M({ id: 44712633, F: 10 });
          M({ id: 44715336, F: 10 });
          M({ id: 44716179, F: 10 });
          M({ id: 44716180, F: 10 });
          M({ id: 44729309, F: 10 });
          M({ id: 44717393, F: 50 });
          M({ id: 44717394, F: 50 });
          M({ id: 75259407, F: 0 });
          var Sh = M({ id: 75259408, F: 0 });
          M({ id: 44721472, F: 0 });
          M({ id: 75259410, F: 0 });
          M({ id: 75259412, F: 0 });
          M({ id: 75259413, F: 0 });
          M({ id: 44732593, F: 10 });
          M({ id: 44732594, F: 10 });
          M({ id: 44725355, F: 50 });
          var Th = M({ id: 44725356, F: 50 });
          M({ id: 44729226, F: 50 });
          M({ id: 44729227, F: 50 });
          M({ id: 44724516, F: 0 });
          var Uh = new Zg();
          M({ id: 21068227, F: 50, ba: Uh });
          var Vh = M({ id: 21068228, F: 50, ba: Uh });
          M({ id: 44726389, F: 10 });
          M({ id: 44726392, F: 10 });
          M({ id: 44726393, F: 10 });
          var Wh = new Zg();
          M({ id: 44728726, F: 1, ba: Wh });
          var Xh = M({ id: 44728727, F: 1, ba: Wh });
          M({ id: 44732375, F: 10, ba: Wh });
          M({ id: 44732376, F: 10, ba: Wh });
          M({ id: 44732377, F: 10, ba: Wh });
          var Yh = M({ id: 44732378, F: 10, ba: Wh });
          M({ id: 44730464, F: 10 });
          M({ id: 44730465, F: 10 });
          M({ id: 44731939, F: 100, ba: Lh });
          M({ id: 44731940, F: 100, ba: Lh });
          M({ id: 44727953, F: 0 });
          var Zh = M({ id: 447279544, F: 0 });
          M({ id: 44729911, F: 0 });
          M({ id: 44730425, F: 0 });
          M({ id: 44730426, F: 0 });
          M({ id: 44730431, F: 0 });
          M({ id: 46130026, F: 50, ba: Mh });
          M({ id: 46130025, F: 50, ba: Mh });
          M({ id: 447304389, F: 0 });
          M({ id: 44732022, F: 10 });
          M({ id: 44732023, F: 10 });
          M({ id: 44731719, F: 10, ba: dh });
          M({ id: 44731718, F: 10, ba: dh });
          var $h = {},
            Dh = (($h[32] = dh), ($h[33] = Wh), $h);
          Dh = void 0 === Dh ? {} : Dh;
          try {
            var Eh = JSON.parse(
              '[null,[[16,[[10,[[44727465],[44727466,null,[null,null,47]],[44727944]]],[null,[[44729329],[44729330,null,[null,null,47]],[44729331]]]]]]]'
            );
            Eh instanceof Array && Ch();
          } catch (a) {
            K(J.C(), 'espe', a.message);
          }
          if ('undefined' === typeof window.v8_flag_map) {
            var Ug = Ih.C();
            Ug.h || (Vg(), (Ug.h = !0));
            var Kh = Ug.l,
              ai;
            Ug.h || (Vg(), (Ug.h = !0));
            ai = Ug.g;
            if (null != Kh) {
              var bi = new Hh(Jh(), ai);
              ch(bi);
            }
          }
          ah.reset();
          ch(new fh());
          v.console && 'function' === typeof v.console.log && Wa(v.console.log, v.console);
          var ci = function (a) {
            for (var b = [], c = (a = G(a.ownerDocument)); c != a.top; c = c.parent)
              if (c.frameElement) b.push(c.frameElement);
              else break;
            return b;
          };
          var di = !od || 9 <= Number(Id),
            ei = od && !Fd('9'),
            fi = (function () {
              if (!v.addEventListener || !Object.defineProperty) return !1;
              var a = !1,
                b = Object.defineProperty({}, 'passive', {
                  get: function () {
                    a = !0;
                  },
                });
              try {
                v.addEventListener('test', Ma, b), v.removeEventListener('test', Ma, b);
              } catch (c) {}
              return a;
            })();
          var gi = function (a, b) {
            this.type = a;
            this.currentTarget = this.target = b;
            this.defaultPrevented = this.h = !1;
          };
          gi.prototype.stopPropagation = function () {
            this.h = !0;
          };
          gi.prototype.preventDefault = function () {
            this.defaultPrevented = !0;
          };
          var hi = function (a, b) {
            gi.call(this, a ? a.type : '');
            this.relatedTarget = this.currentTarget = this.target = null;
            this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
            this.key = '';
            this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
            this.pointerId = 0;
            this.pointerType = '';
            this.g = null;
            a && this.init(a, b);
          };
          A(hi, gi);
          var ii = { 2: 'touch', 3: 'pen', 4: 'mouse' };
          hi.prototype.init = function (a, b) {
            var c = (this.type = a.type),
              d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget)
              ? rd && (kd(b, 'nodeName') || (b = null))
              : 'mouseover' == c
              ? (b = a.fromElement)
              : 'mouseout' == c && (b = a.toElement);
            this.relatedTarget = b;
            d
              ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
                (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
                (this.screenX = d.screenX || 0),
                (this.screenY = d.screenY || 0))
              : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
                (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
                (this.screenX = a.screenX || 0),
                (this.screenY = a.screenY || 0));
            this.button = a.button;
            this.key = a.key || '';
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType =
              'string' === typeof a.pointerType ? a.pointerType : ii[a.pointerType] || '';
            this.g = a;
            a.defaultPrevented && this.preventDefault();
          };
          hi.prototype.stopPropagation = function () {
            hi.Ca.stopPropagation.call(this);
            this.g.stopPropagation ? this.g.stopPropagation() : (this.g.cancelBubble = !0);
          };
          hi.prototype.preventDefault = function () {
            hi.Ca.preventDefault.call(this);
            var a = this.g;
            if (a.preventDefault) a.preventDefault();
            else if (((a.returnValue = !1), ei))
              try {
                if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
              } catch (b) {}
          };
          var ji = 'closure_listenable_' + ((1000000 * Math.random()) | 0),
            ki = function (a) {
              return !(!a || !a[ji]);
            },
            li = 0;
          var mi = function (a, b, c, d, e) {
              this.listener = a;
              this.g = null;
              this.src = b;
              this.type = c;
              this.capture = !!d;
              this.Gb = e;
              this.key = ++li;
              this.jb = this.Bb = !1;
            },
            ni = function (a) {
              a.jb = !0;
              a.listener = null;
              a.g = null;
              a.src = null;
              a.Gb = null;
            };
          var oi = function (a) {
            this.src = a;
            this.g = {};
            this.h = 0;
          };
          oi.prototype.add = function (a, b, c, d, e) {
            var f = a.toString();
            a = this.g[f];
            a || ((a = this.g[f] = []), this.h++);
            var g = pi(a, b, d, e);
            -1 < g
              ? ((b = a[g]), c || (b.Bb = !1))
              : ((b = new mi(b, this.src, f, !!d, e)), (b.Bb = c), a.push(b));
            return b;
          };
          oi.prototype.remove = function (a, b, c, d) {
            a = a.toString();
            if (!(a in this.g)) return !1;
            var e = this.g[a];
            b = pi(e, b, c, d);
            return -1 < b
              ? (ni(e[b]), ob(e, b), 0 == e.length && (delete this.g[a], this.h--), !0)
              : !1;
          };
          var qi = function (a, b) {
            var c = b.type;
            c in a.g && lb(a.g[c], b) && (ni(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
          };
          oi.prototype.qb = function (a, b, c, d) {
            a = this.g[a.toString()];
            var e = -1;
            a && (e = pi(a, b, c, d));
            return -1 < e ? a[e] : null;
          };
          var pi = function (a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
              var f = a[e];
              if (!f.jb && f.listener == b && f.capture == !!c && f.Gb == d) return e;
            }
            return -1;
          };
          var ri = 'closure_lm_' + ((1000000 * Math.random()) | 0),
            si = {},
            ti = 0,
            vi = function (a, b, c, d, e) {
              if (d && d.once) return ui(a, b, c, d, e);
              if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) vi(a, b[f], c, d, e);
                return null;
              }
              c = wi(c);
              return ki(a) ? a.T(b, c, Pa(d) ? !!d.capture : !!d, e) : xi(a, b, c, !1, d, e);
            },
            xi = function (a, b, c, d, e, f) {
              if (!b) throw Error('Invalid event type');
              var g = Pa(e) ? !!e.capture : !!e,
                h = yi(a);
              h || (a[ri] = h = new oi(a));
              c = h.add(b, c, d, g, f);
              if (c.g) return c;
              d = zi();
              c.g = d;
              d.src = a;
              d.listener = c;
              if (a.addEventListener)
                fi || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
              else if (a.attachEvent) a.attachEvent(Ai(b.toString()), d);
              else if (a.addListener && a.removeListener) a.addListener(d);
              else throw Error('addEventListener and attachEvent are unavailable.');
              ti++;
              return c;
            },
            zi = function () {
              var a = Bi,
                b = di
                  ? function (c) {
                      return a.call(b.src, b.listener, c);
                    }
                  : function (c) {
                      c = a.call(b.src, b.listener, c);
                      if (!c) return c;
                    };
              return b;
            },
            ui = function (a, b, c, d, e) {
              if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) ui(a, b[f], c, d, e);
                return null;
              }
              c = wi(c);
              return ki(a) ? a.wb(b, c, Pa(d) ? !!d.capture : !!d, e) : xi(a, b, c, !0, d, e);
            },
            Ci = function (a, b, c, d, e) {
              if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Ci(a, b[f], c, d, e);
              else
                (d = Pa(d) ? !!d.capture : !!d),
                  (c = wi(c)),
                  ki(a) ? a.Qa(b, c, d, e) : a && (a = yi(a)) && (b = a.qb(b, c, d, e)) && Di(b);
            },
            Di = function (a) {
              if ('number' !== typeof a && a && !a.jb) {
                var b = a.src;
                if (ki(b)) qi(b.l, a);
                else {
                  var c = a.type,
                    d = a.g;
                  b.removeEventListener
                    ? b.removeEventListener(c, d, a.capture)
                    : b.detachEvent
                    ? b.detachEvent(Ai(c), d)
                    : b.addListener && b.removeListener && b.removeListener(d);
                  ti--;
                  (c = yi(b)) ? (qi(c, a), 0 == c.h && ((c.src = null), (b[ri] = null))) : ni(a);
                }
              }
            },
            Ai = function (a) {
              return a in si ? si[a] : (si[a] = 'on' + a);
            },
            Fi = function (a, b, c, d) {
              var e = !0;
              if ((a = yi(a)))
                if ((b = a.g[b.toString()]))
                  for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.jb && ((f = Ei(f, d)), (e = e && !1 !== f));
                  }
              return e;
            },
            Ei = function (a, b) {
              var c = a.listener,
                d = a.Gb || a.src;
              a.Bb && Di(a);
              return c.call(d, b);
            },
            Bi = function (a, b) {
              if (a.jb) return !0;
              if (!di) {
                var c = b || La('window.event');
                b = new hi(c, this);
                var d = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                  a: {
                    var e = !1;
                    if (0 == c.keyCode)
                      try {
                        c.keyCode = -1;
                        break a;
                      } catch (g) {
                        e = !0;
                      }
                    if (e || void 0 == c.returnValue) c.returnValue = !0;
                  }
                  c = [];
                  for (e = b.currentTarget; e; e = e.parentNode) c.push(e);
                  a = a.type;
                  for (e = c.length - 1; !b.h && 0 <= e; e--) {
                    b.currentTarget = c[e];
                    var f = Fi(c[e], a, !0, b);
                    d = d && f;
                  }
                  for (e = 0; !b.h && e < c.length; e++)
                    (b.currentTarget = c[e]), (f = Fi(c[e], a, !1, b)), (d = d && f);
                }
                return d;
              }
              return Ei(a, new hi(b, this));
            },
            yi = function (a) {
              a = a[ri];
              return a instanceof oi ? a : null;
            },
            Gi = '__closure_events_fn_' + ((1000000000 * Math.random()) >>> 0),
            wi = function (a) {
              if ('function' === typeof a) return a;
              a[Gi] ||
                (a[Gi] = function (b) {
                  return a.handleEvent(b);
                });
              return a[Gi];
            };
          var N = function () {
            H.call(this);
            this.l = new oi(this);
            this.Wd = this;
            this.ea = null;
          };
          A(N, H);
          N.prototype[ji] = !0;
          l = N.prototype;
          l.addEventListener = function (a, b, c, d) {
            vi(this, a, b, c, d);
          };
          l.removeEventListener = function (a, b, c, d) {
            Ci(this, a, b, c, d);
          };
          l.dispatchEvent = function (a) {
            var b,
              c = this.ea;
            if (c) for (b = []; c; c = c.ea) b.push(c);
            c = this.Wd;
            var d = a.type || a;
            if ('string' === typeof a) a = new gi(a, c);
            else if (a instanceof gi) a.target = a.target || c;
            else {
              var e = a;
              a = new gi(d, c);
              Sb(a, e);
            }
            e = !0;
            if (b)
              for (var f = b.length - 1; !a.h && 0 <= f; f--) {
                var g = (a.currentTarget = b[f]);
                e = Hi(g, d, !0, a) && e;
              }
            a.h ||
              ((g = a.currentTarget = c),
              (e = Hi(g, d, !0, a) && e),
              a.h || (e = Hi(g, d, !1, a) && e));
            if (b)
              for (f = 0; !a.h && f < b.length; f++)
                (g = a.currentTarget = b[f]), (e = Hi(g, d, !1, a) && e);
            return e;
          };
          l.O = function () {
            N.Ca.O.call(this);
            if (this.l) {
              var a = this.l,
                b = 0,
                c;
              for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, ni(d[e]);
                delete a.g[c];
                a.h--;
              }
            }
            this.ea = null;
          };
          l.T = function (a, b, c, d) {
            return this.l.add(String(a), b, !1, c, d);
          };
          l.wb = function (a, b, c, d) {
            return this.l.add(String(a), b, !0, c, d);
          };
          l.Qa = function (a, b, c, d) {
            this.l.remove(String(a), b, c, d);
          };
          var Hi = function (a, b, c, d) {
            b = a.l.g[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
              var g = b[f];
              if (g && !g.jb && g.capture == c) {
                var h = g.listener,
                  k = g.Gb || g.src;
                g.Bb && qi(a.l, g);
                e = !1 !== h.call(k, d) && e;
              }
            }
            return e && !d.defaultPrevented;
          };
          N.prototype.qb = function (a, b, c, d) {
            return this.l.qb(String(a), b, c, d);
          };
          var Ii = function (a, b) {
            this.l = a;
            this.o = b;
            this.h = 0;
            this.g = null;
          };
          Ii.prototype.get = function () {
            if (0 < this.h) {
              this.h--;
              var a = this.g;
              this.g = a.next;
              a.next = null;
            } else a = this.l();
            return a;
          };
          var Ji = function (a, b) {
            a.o(b);
            100 > a.h && (a.h++, (b.next = a.g), (a.g = b));
          };
          var Ki = function (a) {
              v.setTimeout(function () {
                throw a;
              }, 0);
            },
            Li,
            Mi = function () {
              var a = v.MessageChannel;
              'undefined' === typeof a &&
                'undefined' !== typeof window &&
                window.postMessage &&
                window.addEventListener &&
                !D('Presto') &&
                (a = function () {
                  var e = Te(document, 'IFRAME');
                  e.style.display = 'none';
                  document.documentElement.appendChild(e);
                  var f = e.contentWindow;
                  e = f.document;
                  e.open();
                  e.close();
                  var g = 'callImmediate' + Math.random(),
                    h =
                      'file:' == f.location.protocol
                        ? '*'
                        : f.location.protocol + '//' + f.location.host;
                  e = Wa(function (k) {
                    if (('*' == h || k.origin == h) && k.data == g) this.port1.onmessage();
                  }, this);
                  f.addEventListener('message', e, !1);
                  this.port1 = {};
                  this.port2 = {
                    postMessage: function () {
                      f.postMessage(g, h);
                    },
                  };
                });
              if ('undefined' !== typeof a && !Gc()) {
                var b = new a(),
                  c = {},
                  d = c;
                b.port1.onmessage = function () {
                  if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Xc;
                    c.Xc = null;
                    e();
                  }
                };
                return function (e) {
                  d.next = { Xc: e };
                  d = d.next;
                  b.port2.postMessage(0);
                };
              }
              return function (e) {
                v.setTimeout(e, 0);
              };
            };
          var Ni = function () {
              this.h = this.g = null;
            },
            Pi = new Ii(
              function () {
                return new Oi();
              },
              function (a) {
                a.reset();
              }
            );
          Ni.prototype.add = function (a, b) {
            var c = Pi.get();
            c.set(a, b);
            this.h ? (this.h.next = c) : (this.g = c);
            this.h = c;
          };
          Ni.prototype.remove = function () {
            var a = null;
            this.g &&
              ((a = this.g), (this.g = this.g.next), this.g || (this.h = null), (a.next = null));
            return a;
          };
          var Oi = function () {
            this.next = this.h = this.g = null;
          };
          Oi.prototype.set = function (a, b) {
            this.g = a;
            this.h = b;
            this.next = null;
          };
          Oi.prototype.reset = function () {
            this.next = this.h = this.g = null;
          };
          var Ui = function (a, b) {
              Qi || Ri();
              Si || (Qi(), (Si = !0));
              Ti.add(a, b);
            },
            Qi,
            Ri = function () {
              if (v.Promise && v.Promise.resolve) {
                var a = v.Promise.resolve(void 0);
                Qi = function () {
                  a.then(Vi);
                };
              } else
                Qi = function () {
                  var b = Vi;
                  'function' !== typeof v.setImmediate ||
                  (v.Window &&
                    v.Window.prototype &&
                    !D('Edge') &&
                    v.Window.prototype.setImmediate == v.setImmediate)
                    ? (Li || (Li = Mi()), Li(b))
                    : v.setImmediate(b);
                };
            },
            Si = !1,
            Ti = new Ni(),
            Vi = function () {
              for (var a; (a = Ti.remove()); ) {
                try {
                  a.g.call(a.h);
                } catch (b) {
                  Ki(b);
                }
                Ji(Pi, a);
              }
              Si = !1;
            };
          var Wi = function (a) {
            if (!a) return !1;
            try {
              return !!a.$goog_Thenable;
            } catch (b) {
              return !1;
            }
          };
          var Yi = function (a) {
              this.g = 0;
              this.H = void 0;
              this.o = this.h = this.l = null;
              this.A = this.B = !1;
              if (a != Ma)
                try {
                  var b = this;
                  a.call(
                    void 0,
                    function (c) {
                      Xi(b, 2, c);
                    },
                    function (c) {
                      Xi(b, 3, c);
                    }
                  );
                } catch (c) {
                  Xi(this, 3, c);
                }
            },
            Zi = function () {
              this.next = this.context = this.h = this.l = this.g = null;
              this.o = !1;
            };
          Zi.prototype.reset = function () {
            this.context = this.h = this.l = this.g = null;
            this.o = !1;
          };
          var $i = new Ii(
              function () {
                return new Zi();
              },
              function (a) {
                a.reset();
              }
            ),
            aj = function (a, b, c) {
              var d = $i.get();
              d.l = a;
              d.h = b;
              d.context = c;
              return d;
            };
          Yi.prototype.then = function (a, b, c) {
            return bj(
              this,
              'function' === typeof a ? a : null,
              'function' === typeof b ? b : null,
              c
            );
          };
          Yi.prototype.$goog_Thenable = !0;
          Yi.prototype.cancel = function (a) {
            if (0 == this.g) {
              var b = new cj(a);
              Ui(function () {
                dj(this, b);
              }, this);
            }
          };
          var dj = function (a, b) {
              if (0 == a.g)
                if (a.l) {
                  var c = a.l;
                  if (c.h) {
                    for (
                      var d = 0, e = null, f = null, g = c.h;
                      g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d)));
                      g = g.next
                    )
                      e || (f = g);
                    e &&
                      (0 == c.g && 1 == d
                        ? dj(c, b)
                        : (f
                            ? ((d = f), d.next == c.o && (c.o = d), (d.next = d.next.next))
                            : ej(c),
                          fj(c, e, 3, b)));
                  }
                  a.l = null;
                } else Xi(a, 3, b);
            },
            hj = function (a, b) {
              a.h || (2 != a.g && 3 != a.g) || gj(a);
              a.o ? (a.o.next = b) : (a.h = b);
              a.o = b;
            },
            bj = function (a, b, c, d) {
              var e = aj(null, null, null);
              e.g = new Yi(function (f, g) {
                e.l = b
                  ? function (h) {
                      try {
                        var k = b.call(d, h);
                        f(k);
                      } catch (n) {
                        g(n);
                      }
                    }
                  : f;
                e.h = c
                  ? function (h) {
                      try {
                        var k = c.call(d, h);
                        void 0 === k && h instanceof cj ? g(h) : f(k);
                      } catch (n) {
                        g(n);
                      }
                    }
                  : g;
              });
              e.g.l = a;
              hj(a, e);
              return e.g;
            };
          Yi.prototype.D = function (a) {
            this.g = 0;
            Xi(this, 2, a);
          };
          Yi.prototype.G = function (a) {
            this.g = 0;
            Xi(this, 3, a);
          };
          var Xi = function (a, b, c) {
              if (0 == a.g) {
                a === c && ((b = 3), (c = new TypeError('Promise cannot resolve to itself')));
                a.g = 1;
                a: {
                  var d = c,
                    e = a.D,
                    f = a.G;
                  if (d instanceof Yi) {
                    hj(d, aj(e || Ma, f || null, a));
                    var g = !0;
                  } else if (Wi(d)) d.then(e, f, a), (g = !0);
                  else {
                    if (Pa(d))
                      try {
                        var h = d.then;
                        if ('function' === typeof h) {
                          ij(d, h, e, f, a);
                          g = !0;
                          break a;
                        }
                      } catch (k) {
                        f.call(a, k);
                        g = !0;
                        break a;
                      }
                    g = !1;
                  }
                }
                g ||
                  ((a.H = c),
                  (a.g = b),
                  (a.l = null),
                  gj(a),
                  3 != b || c instanceof cj || jj(a, c));
              }
            },
            ij = function (a, b, c, d, e) {
              var f = !1,
                g = function (k) {
                  f || ((f = !0), c.call(e, k));
                },
                h = function (k) {
                  f || ((f = !0), d.call(e, k));
                };
              try {
                b.call(a, g, h);
              } catch (k) {
                h(k);
              }
            },
            gj = function (a) {
              a.B || ((a.B = !0), Ui(a.J, a));
            },
            ej = function (a) {
              var b = null;
              a.h && ((b = a.h), (a.h = b.next), (b.next = null));
              a.h || (a.o = null);
              return b;
            };
          Yi.prototype.J = function () {
            for (var a; (a = ej(this)); ) fj(this, a, this.g, this.H);
            this.B = !1;
          };
          var fj = function (a, b, c, d) {
              if (3 == c && b.h && !b.o) for (; a && a.A; a = a.l) a.A = !1;
              if (b.g) (b.g.l = null), kj(b, c, d);
              else
                try {
                  b.o ? b.l.call(b.context) : kj(b, c, d);
                } catch (e) {
                  lj.call(null, e);
                }
              Ji($i, b);
            },
            kj = function (a, b, c) {
              2 == b ? a.l.call(a.context, c) : a.h && a.h.call(a.context, c);
            },
            jj = function (a, b) {
              a.A = !0;
              Ui(function () {
                a.A && lj.call(null, b);
              });
            },
            lj = Ki,
            cj = function (a) {
              Za.call(this, a);
            };
          A(cj, Za);
          cj.prototype.name = 'cancel';
          var mj = function (a, b) {
            N.call(this);
            this.h = a || 1;
            this.g = b || v;
            this.o = Wa(this.Xe, this);
            this.A = z();
          };
          A(mj, N);
          l = mj.prototype;
          l.Wa = !1;
          l.xa = null;
          l.setInterval = function (a) {
            this.h = a;
            this.xa && this.Wa ? (this.stop(), this.start()) : this.xa && this.stop();
          };
          l.Xe = function () {
            if (this.Wa) {
              var a = z() - this.A;
              0 < a && a < 0.8 * this.h
                ? (this.xa = this.g.setTimeout(this.o, this.h - a))
                : (this.xa && (this.g.clearTimeout(this.xa), (this.xa = null)),
                  this.dispatchEvent('tick'),
                  this.Wa && (this.stop(), this.start()));
            }
          };
          l.start = function () {
            this.Wa = !0;
            this.xa || ((this.xa = this.g.setTimeout(this.o, this.h)), (this.A = z()));
          };
          l.stop = function () {
            this.Wa = !1;
            this.xa && (this.g.clearTimeout(this.xa), (this.xa = null));
          };
          l.O = function () {
            mj.Ca.O.call(this);
            this.stop();
            delete this.g;
          };
          var nj = function (a, b, c) {
            if ('function' === typeof a) c && (a = Wa(a, c));
            else if (a && 'function' == typeof a.handleEvent) a = Wa(a.handleEvent, a);
            else throw Error('Invalid listener argument');
            return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0);
          };
          var oj = function () {
              return Math.round(z() / 1000);
            },
            pj = function (a) {
              const $___old_a310605008227ef6 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'performance'
              );
              try {
                if ($___old_a310605008227ef6)
                  ({}.constructor.defineProperty(
                    window,
                    'performance',
                    $___stub_c0f1d0ee9b6f2da6.performance
                  ));
                return function () {
                  var b =
                    window.performance &&
                    window.performance.timing &&
                    window.performance.timing.domLoading &&
                    0 < window.performance.timing.domLoading
                      ? Math.round(window.performance.timing.domLoading / 1000)
                      : null;
                  return null != b ? b : null != a ? a : oj();
                }.apply(this, arguments);
              } finally {
                if ($___old_a310605008227ef6)
                  ({}.constructor.defineProperty(window, 'performance', $___old_a310605008227ef6));
              }
            };
          var qj = function () {
            this.h = -1;
          };
          var rj = function () {
            this.g = {};
            return this;
          };
          rj.prototype.remove = function (a) {
            var b = this.g;
            a in b && delete b[a];
          };
          rj.prototype.set = function (a, b) {
            this.g[a] = b;
          };
          var sj = function (a, b) {
            a.g.eb = Qb(a.g, 'eb', 0) | b;
          };
          rj.prototype.get = function (a) {
            return Qb(this.g, a, null);
          };
          var tj = null,
            uj = function () {
              this.g = {};
              this.h = 0;
            },
            vj = function () {
              tj || (tj = new uj());
              return tj;
            },
            wj = function (a, b) {
              a.g[b.A] = b;
            },
            xj = function (a, b) {
              this.A = a;
              this.l = !0;
              this.g = b;
            };
          xj.prototype.h = function () {
            return String(this.g);
          };
          var yj = function (a, b) {
            xj.call(this, String(a), b);
            this.o = a;
            this.g = !!b;
          };
          t(yj, xj);
          yj.prototype.h = function () {
            return this.g ? '1' : '0';
          };
          var zj = function (a, b) {
            xj.call(this, a, b);
          };
          t(zj, xj);
          zj.prototype.h = function () {
            return this.g
              ? Math.round(this.g.top) +
                  '.' +
                  Math.round(this.g.left) +
                  '.' +
                  (Math.round(this.g.top) + Math.round(this.g.height)) +
                  '.' +
                  (Math.round(this.g.left) + Math.round(this.g.width))
              : '';
          };
          var Aj = function (a) {
            if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
              a = a.split('.');
              var b = Number(a[0]),
                c = Number(a[1]);
              return new zj('', new yf(c, b, Number(a[3]) - c, Number(a[2]) - b));
            }
            return new zj('', new yf(0, 0, 0, 0));
          };
          var Bj = function (a) {
              var b = new yf(
                  -Number.MAX_VALUE / 2,
                  -Number.MAX_VALUE / 2,
                  Number.MAX_VALUE,
                  Number.MAX_VALUE
                ),
                c = new yf(0, 0, 0, 0);
              if (!a || 0 == a.length) return c;
              for (var d = 0; d < a.length; d++) {
                a: {
                  var e = b;
                  var f = a[d],
                    g = Math.max(e.left, f.left),
                    h = Math.min(e.left + e.width, f.left + f.width);
                  if (g <= h) {
                    var k = Math.max(e.top, f.top);
                    f = Math.min(e.top + e.height, f.top + f.height);
                    if (k <= f) {
                      e.left = g;
                      e.top = k;
                      e.width = h - g;
                      e.height = f - k;
                      e = !0;
                      break a;
                    }
                  }
                  e = !1;
                }
                if (!e) return c;
              }
              return b;
            },
            Cj = function (a, b) {
              var c = a.getBoundingClientRect();
              a = Qf(a, b);
              return new yf(
                Math.round(a.x),
                Math.round(a.y),
                Math.round(c.right - c.left),
                Math.round(c.bottom - c.top)
              );
            },
            Dj = function (a, b, c) {
              if (b && c) {
                a: {
                  var d = Math.max(b.left, c.left);
                  var e = Math.min(b.left + b.width, c.left + c.width);
                  if (d <= e) {
                    var f = Math.max(b.top, c.top),
                      g = Math.min(b.top + b.height, c.top + c.height);
                    if (f <= g) {
                      d = new yf(d, f, e - d, g - f);
                      break a;
                    }
                  }
                  d = null;
                }
                e = d ? d.height * d.width : 0;
                f = d ? b.height * b.width : 0;
                d = d && f ? Math.round((e / f) * 100) : 0;
                wj(a, new xj('vp', d));
                d && 0 < d
                  ? ((e = zf(b)), (f = zf(c)), (e = e.top >= f.top && e.top < f.bottom))
                  : (e = !1);
                wj(a, new yj(512, e));
                d && 0 < d
                  ? ((e = zf(b)), (f = zf(c)), (e = e.bottom <= f.bottom && e.bottom > f.top))
                  : (e = !1);
                wj(a, new yj(1024, e));
                d && 0 < d
                  ? ((e = zf(b)), (f = zf(c)), (e = e.left >= f.left && e.left < f.right))
                  : (e = !1);
                wj(a, new yj(2048, e));
                d && 0 < d
                  ? ((b = zf(b)), (c = zf(c)), (c = b.right <= c.right && b.right > c.left))
                  : (c = !1);
                wj(a, new yj(4096, c));
              }
            };
          var Ej = function (a, b) {
            var c = 0;
            Jb(G(), 'ima', 'video', 'client', 'tagged') && (c = 1);
            var d = null;
            a && (d = a());
            if (d) {
              a = vj();
              a.g = {};
              var e = new yj(32, !0);
              e.l = !1;
              wj(a, e);
              e = G().document;
              e =
                e.visibilityState ||
                e.webkitVisibilityState ||
                e.mozVisibilityState ||
                e.msVisibilityState ||
                '';
              wj(a, new yj(64, 'hidden' != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
              try {
                var f = G().top;
                try {
                  var g = !!f.location.href || '' === f.location.href;
                } catch (m) {
                  g = !1;
                }
                if (g) {
                  var h = ci(d);
                  var k = h && 0 != h.length ? '1' : '0';
                } else k = '2';
              } catch (m) {
                k = '2';
              }
              wj(a, new yj(256, '2' == k));
              wj(a, new yj(128, '1' == k));
              h = g = G().top;
              '2' == k && (h = G());
              f = Cj(d, h);
              wj(a, new zj('er', f));
              try {
                var n = h.document && !h.document.body ? null : Re(h || window);
              } catch (m) {
                n = null;
              }
              n
                ? ((h = Se(Me(h.document).g)),
                  wj(a, new yj(16384, !!h)),
                  (n = h ? new yf(h.x, h.y, n.width, n.height) : null))
                : (n = null);
              wj(a, new zj('vi', n));
              if (n && '1' == k) {
                k = ci(d);
                d = [];
                for (h = 0; h < k.length; h++) (e = Cj(k[h], g)) && d.push(e);
                d.push(n);
                n = Bj(d);
              }
              Dj(a, f, n);
              a.h && wj(a, new xj('ts', oj() - a.h));
              a.h = oj();
            } else (a = vj()), (a.g = {}), (a.h = oj()), wj(a, new yj(32, !1));
            this.l = a;
            this.g = new rj();
            this.g.set('ve', 4);
            c && sj(this.g, 1);
            Jb(G(), 'ima', 'video', 'client', 'crossdomainTag') && sj(this.g, 4);
            Jb(G(), 'ima', 'video', 'client', 'sdkTag') && sj(this.g, 8);
            Jb(G(), 'ima', 'video', 'client', 'jsTag') && sj(this.g, 2);
            b && Qb(b, 'fullscreen', !1) && sj(this.g, 16);
            this.h = b = null;
            if (c && ((c = Jb(G(), 'ima', 'video', 'client')), c.getEData)) {
              this.h = c.getEData();
              if ((c = Jb(G(), 'ima', 'video', 'client', 'getLastSnapshotFromTop')))
                if ((a = c()))
                  this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp),
                    (c = this.l),
                    (b = a.er),
                    (a = a.vi),
                    b &&
                      a &&
                      ((b = Aj(b).g),
                      (a = Aj(a).g),
                      (k = null),
                      Qb(c.g, 'er', null) &&
                        ((k = Qb(c.g, 'er', null).g),
                        (k.top += b.top),
                        (k.left += b.left),
                        wj(c, new zj('er', k))),
                      Qb(c.g, 'vi', null) &&
                        ((n = Qb(c.g, 'vi', null).g),
                        (n.top += b.top),
                        (n.left += b.left),
                        (d = []),
                        d.push(n),
                        d.push(b),
                        d.push(a),
                        (b = Bj(d)),
                        Dj(c, k, b),
                        wj(c, new zj('vi', a))));
              a: {
                if (this.h) {
                  if (this.h.getTagLoadTimestamp) {
                    b = this.h.getTagLoadTimestamp();
                    break a;
                  }
                  if (this.h.getTimeSinceTagLoadSeconds) {
                    b = this.h.getTimeSinceTagLoadSeconds();
                    break a;
                  }
                }
                b = null;
              }
            }
            this.g.set('td', oj() - pj(b));
          };
          var Fj = new mj(200),
            Gj = function (a, b) {
              try {
                var c = new Ej(a, b);
                a = [];
                var d = Number(c.g.get('eb'));
                c.g.remove('eb');
                var e,
                  f = c.g;
                b = [];
                for (var g in f.g) b.push(g + f.g[g]);
                (e = b.join('_')) && a.push(e);
                if (c.h) {
                  var h = c.h.serialize();
                  h && a.push(h);
                }
                var k,
                  n = c.l;
                e = d;
                f = [];
                e || (e = 0);
                for (var m in n.g) {
                  var u = n.g[m];
                  if (u instanceof yj) u.g && (e |= u.o);
                  else {
                    var p,
                      w = n.g[m];
                    (p = w.l ? w.h() : '') && f.push(m + p);
                  }
                }
                f.push('eb' + String(e));
                (k = f.join('_')) && a.push(k);
                c.g.set('eb', d);
                return a.join('_');
              } catch (x) {
                return 'tle;' + Uc(x.name, 12) + ';' + Uc(x.message, 40);
              }
            },
            Hj = function (a, b) {
              vi(Fj, 'tick', function () {
                var c = Gj(b);
                a(c);
              });
              Fj.start();
              Fj.dispatchEvent('tick');
            };
          var Ij = function (a) {
            ce(this, a, null, null);
          };
          A(Ij, Yd);
          var Jj;
          Jj = ['av.key', 'js', 'unreleased'].slice(-1)[0];
          var Kj = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
            Oj = function (a) {
              a = a || Lj();
              for (
                var b = new Mj(v.location.href, v, !1), c = null, d = a.length - 1, e = d;
                0 <= e;
                --e
              ) {
                var f = a[e];
                !c && Kj.test(f.url) && (c = f);
                if (f.url && !f.uc) {
                  b = f;
                  break;
                }
              }
              e = null;
              f = a.length && a[d].url;
              0 != b.depth && f && (e = a[d]);
              return new Nj(b, e, c);
            },
            Lj = function () {
              var a = v,
                b = [],
                c = null;
              do {
                var d = a;
                if (hf(d)) {
                  var e = d.location.href;
                  c = (d.document && d.document.referrer) || null;
                } else (e = c), (c = null);
                b.push(new Mj(e || '', d));
                try {
                  a = d.parent;
                } catch (f) {
                  a = null;
                }
              } while (a && d != a);
              d = 0;
              for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
              d = v;
              if (
                d.location &&
                d.location.ancestorOrigins &&
                d.location.ancestorOrigins.length == b.length - 1
              )
                for (a = 1; a < b.length; ++a)
                  (e = b[a]),
                    e.url || ((e.url = d.location.ancestorOrigins[a - 1] || ''), (e.uc = !0));
              return b;
            },
            Nj = function (a, b, c) {
              this.g = a;
              this.h = b;
              this.l = c;
            },
            Mj = function (a, b, c) {
              this.url = a;
              this.ma = b;
              this.uc = !!c;
              this.depth = null;
            };
          var Pj = function () {
              this.l = '&';
              this.h = {};
              this.o = 0;
              this.g = [];
            },
            Qj = function (a, b) {
              var c = {};
              c[a] = b;
              return [c];
            },
            Sj = function (a, b, c, d, e) {
              var f = [];
              jf(a, function (g, h) {
                (g = Rj(g, b, c, d, e)) && f.push(h + '=' + g);
              });
              return f.join(b);
            },
            Rj = function (a, b, c, d, e) {
              if (null == a) return '';
              b = b || '&';
              c = c || ',$';
              'string' == typeof c && (c = c.split(''));
              if (a instanceof Array) {
                if (((d = d || 0), d < c.length)) {
                  for (var f = [], g = 0; g < a.length; g++) f.push(Rj(a[g], b, c, d + 1, e));
                  return f.join(c[d]);
                }
              } else if ('object' == typeof a)
                return (e = e || 0), 2 > e ? encodeURIComponent(Sj(a, b, c, d, e + 1)) : '...';
              return encodeURIComponent(String(a));
            },
            Tj = function (a, b, c) {
              a.g.push(b);
              a.h[b] = c;
            },
            Uj = function (a, b, c, d) {
              a.g.push(b);
              a.h[b] = Qj(c, d);
            },
            Wj = function (a, b, c) {
              b = b + '//pagead2.googlesyndication.com' + c;
              var d = Vj(a) - c.length;
              if (0 > d) return '';
              a.g.sort(function (m, u) {
                return m - u;
              });
              c = null;
              for (var e = '', f = 0; f < a.g.length; f++)
                for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
                  if (!d) {
                    c = null == c ? g : c;
                    break;
                  }
                  var n = Sj(h[k], a.l, ',$');
                  if (n) {
                    n = e + n;
                    if (d >= n.length) {
                      d -= n.length;
                      b += n;
                      e = a.l;
                      break;
                    }
                    c = null == c ? g : c;
                  }
                }
              a = '';
              null != c && (a = e + 'trn=' + c);
              return b + a + '';
            },
            Vj = function (a) {
              var b = 1,
                c;
              for (c in a.h) b = c.length > b ? c.length : b;
              return 3997 - b - a.l.length - 1;
            };
          var Xj = function (a, b, c, d, e) {
            if ((d ? a.g : Math.random()) < (e || 0.01))
              try {
                if (c instanceof Pj) var f = c;
                else
                  (f = new Pj()),
                    jf(c, function (h, k) {
                      var n = f,
                        m = n.o++;
                      Tj(n, m, Qj(k, h));
                    });
                var g = Wj(f, a.h, '/pagead/gen_204?id=' + b + '&');
                g && Bf(v, g);
              } catch (h) {}
          };
          var ak = function () {
            var a = Yj;
            this.B = Zj;
            this.A = 'jserror';
            this.l = !0;
            this.h = null;
            this.H = this.Fa;
            this.g = void 0 === a ? null : a;
            this.o = !1;
          };
          l = ak.prototype;
          l.Yb = function (a) {
            this.h = a;
          };
          l.Gc = function (a) {
            this.A = a;
          };
          l.Hc = function (a) {
            this.l = a;
          };
          l.Ic = function (a) {
            this.o = a;
          };
          l.$a = function (a, b, c) {
            try {
              if (this.g && this.g.l) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                og(this.g, d);
              } else e = b();
            } catch (g) {
              b = this.l;
              try {
                ng(d);
                var f = new ze(g, { message: bk(g) });
                b = this.H(a, f, void 0, c);
              } catch (h) {
                this.Fa(217, h);
              }
              if (!b) throw g;
            }
            return e;
          };
          l.Dc = function (a, b, c, d) {
            var e = this;
            return function (f) {
              for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
              return e.$a(
                a,
                function () {
                  return b.apply(c, g);
                },
                d
              );
            };
          };
          l.Fa = function (a, b, c, d, e) {
            e = e || this.A;
            try {
              var f = new Pj();
              Uj(f, 1, 'context', a);
              Ae(b) || (b = new ze(b, { message: bk(b) }));
              b.msg && Uj(f, 2, 'msg', b.msg.substring(0, 512));
              var g = b.meta || {};
              if (this.h)
                try {
                  this.h(g);
                } catch (k) {}
              if (d)
                try {
                  d(g);
                } catch (k) {}
              Tj(f, 3, [g]);
              var h = Oj();
              h.h && Uj(f, 4, 'top', h.h.url || '');
              Tj(f, 5, [{ url: h.g.url || '' }, { url: h.g.url ? df(h.g.url) : '' }]);
              Xj(this.B, e, f, this.o, c);
            } catch (k) {
              try {
                Xj(
                  this.B,
                  e,
                  { context: 'ecmserr', rctx: a, msg: bk(k), url: h && h.g.url },
                  this.o,
                  c
                );
              } catch (n) {}
            }
            return this.l;
          };
          var bk = function (a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ': ' + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ': ' + a.message);
            if (a.stack) {
              a = a.stack;
              var c = b;
              try {
                -1 == a.indexOf(c) && (a = c + '\n' + a);
                for (var d; a != d; )
                  (d = a), (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1'));
                b = a.replace(/\n */g, '\n');
              } catch (e) {
                b = c;
              }
            }
            return b;
          };
          var Zj,
            ck,
            dk = Wf(),
            Yj = new mg(1, dk);
          Zj = new (function () {
            var a = void 0 === a ? F : a;
            this.h = 'http:' === a.location.protocol ? 'http:' : 'https:';
            this.g = Math.random();
          })();
          'number' !== typeof dk.google_srt && (dk.google_srt = Math.random());
          var ek = Zj,
            fk = dk.google_srt;
          0 <= fk && 1 >= fk && (ek.g = fk);
          ck = new ak();
          ck.Yb(function (a) {
            var b = F.jerExpIds;
            if (Array.isArray(b) && 0 !== b.length) {
              var c = a.eid;
              c
                ? ((b = [].concat(fa(c.split(',')), fa(b))), sb(b), (a.eid = b.join(',')))
                : (a.eid = b.join(','));
            }
            (b = F.jerUserAgent) && (a.useragent = b);
          });
          ck.Ic(!0);
          'complete' == dk.document.readyState
            ? dk.google_measure_js_timing || Yj.H()
            : Yj.l &&
              De(dk, 'load', function () {
                dk.google_measure_js_timing || Yj.H();
              });
          var gk = [0, 2, 1],
            hk = null;
          document.addEventListener &&
            document.addEventListener(
              'mousedown',
              function (a) {
                hk = a;
              },
              !0
            );
          window.mb = function (a) {
            if (a) {
              var b;
              if ((b = window.event || hk)) {
                var c;
                (c = b.which ? 1 << gk[b.which - 1] : b.button) && b.shiftKey && (c |= 8);
                c && b.altKey && (c |= 16);
                c && b.ctrlKey && (c |= 32);
                b = c;
              } else b = null;
              if ((c = b))
                if (window.css) window.css(a.id, 'mb', c, void 0, void 0);
                else if (a) {
                  b = a.href;
                  var d = b.indexOf('&mb=');
                  if (0 > d) c = b + '&mb=' + c;
                  else {
                    d += 4;
                    var e = b.indexOf('&', d);
                    c = 0 <= e ? b.substring(0, d) + c + b.substring(e) : b.substring(0, d) + c;
                  }
                  a.href = 2000 < c.length ? b : c;
                }
            }
          };
          var ik = function (a, b, c) {
            try {
              a && (b = b.top);
              var d = void 0;
              var e = b;
              c = void 0 === c ? !1 : c;
              a && null !== e && e != e.top && (e = e.top);
              try {
                d = (void 0 === c ? 0 : c)
                  ? new Je(e.innerWidth, e.innerHeight).round()
                  : Re(e || window).round();
              } catch (k) {
                d = new Je(-12245933, -12245933);
              }
              a = d;
              var f = Se(Me(b.document).g);
              if (-12245933 == a.width) {
                var g = a.width;
                var h = new I(g, g, g, g);
              } else h = new I(f.y, f.x + a.width, f.y + a.height, f.x);
              return h;
            } catch (k) {
              return new I(-12245933, -12245933, -12245933, -12245933);
            }
          };
          var jk = function (a) {
            var b = {};
            C(a, function (c) {
              var d = c.event,
                e = b[d];
              b.hasOwnProperty(d) ? null !== e && (c.h(e) || (b[d] = null)) : (b[d] = c);
            });
            pb(a, function (c) {
              return null === b[c.event];
            });
          };
          var kk = { NONE: 0, yf: 1 };
          var lk = function () {
            this.Y = 0;
            this.g = !1;
            this.h = -1;
            this.Xa = !1;
            this.ra = 0;
          };
          lk.prototype.isVisible = function () {
            return this.Xa ? 0.3 <= this.Y : 0.5 <= this.Y;
          };
          var mk = { xf: 0, Cf: 1 },
            nk = { 668123728: 0, 668123729: 1 },
            ok = { 44728149: 0, 44728150: 1 },
            pk = { 44728138: 0, 44728139: 1 },
            qk = { 44727842: 0, 44727843: 1 },
            rk = { 44731964: 0, 44731965: 1 },
            sk = { NONE: 0, cg: 1, Gf: 2 },
            tk = { 480596784: 0, 480596785: 1, 21063355: 2 };
          var uk = function () {
              this.g = null;
              this.l = !1;
              this.o = null;
            },
            vk = function (a) {
              a.l = !0;
              return a;
            },
            wk = function (a, b) {
              a.o = void 0 === b ? null : b;
            },
            xk = function (a, b) {
              a.o &&
                C(b, function (c) {
                  c = a.o[c];
                  void 0 !== c && a.h(c);
                });
            },
            yk = function (a) {
              uk.call(this);
              this.A = a;
            };
          t(yk, uk);
          yk.prototype.h = function (a) {
            null === this.g && Lb(this.A, a) && (this.g = a);
          };
          var zk = function () {
            uk.call(this);
          };
          t(zk, uk);
          zk.prototype.h = function (a) {
            null === this.g && 'number' === typeof a && (this.g = a);
          };
          var Ak = function () {
            uk.call(this);
          };
          t(Ak, uk);
          Ak.prototype.h = function (a) {
            null === this.g && 'string' === typeof a && (this.g = a);
          };
          var Bk = function () {
            this.g = {};
            this.l = !0;
            this.h = {};
          };
          Bk.prototype.reset = function () {
            this.g = {};
            this.l = !0;
            this.h = {};
          };
          var Ck = function (a, b, c) {
              a.g[b] || (a.g[b] = new yk(c));
              return a.g[b];
            },
            Dk = function (a) {
              a.g.queryid || (a.g.queryid = new Ak());
            },
            Ek = function (a, b, c) {
              (a = a.g[b]) && a.h(c);
            },
            Fk = function (a, b) {
              if (Kb(a.h, b)) return a.h[b];
              if ((a = a.g[b])) return a.g;
            },
            Gk = function (a) {
              var b = {},
                c = Cb(a.g, function (d) {
                  return d.l;
                });
              Bb(
                c,
                function (d, e) {
                  d = void 0 !== a.h[e] ? String(a.h[e]) : d.l && null !== d.g ? String(d.g) : '';
                  0 < d.length && (b[e] = d);
                },
                a
              );
              return b;
            },
            Hk = function (a) {
              a = Gk(a);
              var b = [];
              Bb(a, function (c, d) {
                d in Object.prototype || ('undefined' != typeof c && b.push([d, ':', c].join('')));
              });
              return b;
            },
            Ik = function () {
              var a = O.C().P,
                b = eh();
              a.l &&
                C(Hb(a.g), function (c) {
                  return xk(c, b);
                });
            };
          var Jk = !od && !Jc();
          var Kk = function () {
            this.g = this.Oa = null;
          };
          var Lk = function () {};
          Lk.prototype.now = function () {
            return 0;
          };
          Lk.prototype.h = function () {
            return 0;
          };
          Lk.prototype.l = function () {
            return 0;
          };
          Lk.prototype.g = function () {
            return 0;
          };
          var Nk = function () {
            if (!Mk()) throw Error();
          };
          t(Nk, Lk);
          var Mk = function () {
            const $___old_be86d2a9794b3050 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_be86d2a9794b3050)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_c0f1d0ee9b6f2da6.performance
                ));
              return function () {
                return !(!F || !F.performance);
              }.apply(this, arguments);
            } finally {
              if ($___old_be86d2a9794b3050)
                ({}.constructor.defineProperty(window, 'performance', $___old_be86d2a9794b3050));
            }
          };
          Nk.prototype.now = function () {
            const $___old_641dea0c723d288d = {}.constructor.getOwnPropertyDescriptor(
              window,
              'performance'
            );
            try {
              if ($___old_641dea0c723d288d)
                ({}.constructor.defineProperty(
                  window,
                  'performance',
                  $___stub_c0f1d0ee9b6f2da6.performance
                ));
              return function () {
                return Mk() && F.performance.now
                  ? F.performance.now()
                  : Lk.prototype.now.call(this);
              }.apply(this, arguments);
            } finally {
              if ($___old_641dea0c723d288d)
                ({}.constructor.defineProperty(window, 'performance', $___old_641dea0c723d288d));
            }
          };
          Nk.prototype.h = function () {
            return Mk() && F.performance.memory
              ? F.performance.memory.totalJSHeapSize || 0
              : Lk.prototype.h.call(this);
          };
          Nk.prototype.l = function () {
            return Mk() && F.performance.memory
              ? F.performance.memory.usedJSHeapSize || 0
              : Lk.prototype.l.call(this);
          };
          Nk.prototype.g = function () {
            return Mk() && F.performance.memory
              ? F.performance.memory.jsHeapSizeLimit || 0
              : Lk.prototype.g.call(this);
          };
          var Ok = function () {};
          Ok.prototype.isVisible = function () {
            return 1 === qg(oe);
          };
          var Pk = function (a, b) {
              this.g = a;
              this.depth = b;
            },
            Rk = function (a) {
              a = a || Lj();
              var b = Math.max(a.length - 1, 0),
                c = Oj(a);
              a = c.g;
              var d = c.h,
                e = c.l,
                f = [];
              c = function (h, k) {
                return null == h ? k : h;
              };
              e && f.push(new Pk([e.url, e.uc ? 2 : 0], c(e.depth, 1)));
              d && d != e && f.push(new Pk([d.url, 2], 0));
              a.url && a != e && f.push(new Pk([a.url, 0], c(a.depth, b)));
              var g = db(f, function (h, k) {
                return f.slice(0, f.length - k);
              });
              !a.url ||
                ((e || d) && a != e) ||
                ((d = lf(a.url)) && g.push([new Pk([d, 1], c(a.depth, b))]));
              g.push([]);
              return db(g, function (h) {
                return Qk(b, h);
              });
            };
          function Qk (a, b) {
            var c = eb(
                b,
                function (e, f) {
                  return Math.max(e, f.depth);
                },
                -1
              ),
              d = vb('', c + 2);
            d[0] = a;
            C(b, function (e) {
              return (d[e.depth + 1] = e.g);
            });
            return d;
          }
          var Sk = function () {
            var a = Rk();
            return db(a, function (b) {
              return Rj(b);
            });
          };
          var Tk = function () {
              this.h = new Ok();
              this.g = Mk() ? new Nk() : new Lk();
            },
            Vk = function () {
              Uk();
              var a = F.document;
              return !!(
                a &&
                a.body &&
                a.body.getBoundingClientRect &&
                'function' === typeof F.setInterval &&
                'function' === typeof F.clearInterval &&
                'function' === typeof F.setTimeout &&
                'function' === typeof F.clearTimeout
              );
            };
          Tk.prototype.setInterval = function (a, b) {
            return F.setInterval(a, b);
          };
          Tk.prototype.clearInterval = function (a) {
            F.clearInterval(a);
          };
          Tk.prototype.setTimeout = function (a, b) {
            return F.setTimeout(a, b);
          };
          Tk.prototype.clearTimeout = function (a) {
            F.clearTimeout(a);
          };
          var Wk = function (a) {
              Uk();
              var b = Wf() || F;
              Bf(b, a);
            },
            Xk = function () {
              Uk();
              return Sk();
            };
          Na(Tk);
          var Yk = function () {};
          Yk.prototype.getContext = function () {
            if (!this.g) {
              if (!F) throw Error('Context has not been set and window is undefined.');
              this.g = Tk.C();
            }
            return this.g;
          };
          Na(Yk);
          var Uk = function () {
            return Yk.C().getContext();
          };
          var Zk = function (a) {
            ce(this, a, null, null);
          };
          A(Zk, Yd);
          var $k = function (a) {
              this.o = a;
              this.g = -1;
              this.h = this.l = 0;
            },
            al = function (a, b) {
              return function (c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                if (-1 < a.g) return b.apply(null, fa(d));
                try {
                  return (a.g = a.o.g.now()), b.apply(null, fa(d));
                } finally {
                  (a.l += a.o.g.now() - a.g), (a.g = -1), (a.h += 1);
                }
              };
            };
          var bl = function (a, b) {
            this.h = a;
            this.l = b;
            this.g = new $k(a);
          };
          var cl = function () {};
          var dl = { vg: 1, Tg: 2, kg: 3 };
          cc(Yb(Zb('https://pagead2.googlesyndication.com/pagead/osd.js')));
          var O = function () {
            this.o = void 0;
            this.h = this.H = 0;
            this.B = -1;
            this.P = new Bk();
            wk(vk(Ck(this.P, 'mv', sk)), tk);
            Ck(this.P, 'omid', mk);
            vk(Ck(this.P, 'epoh', mk));
            vk(Ck(this.P, 'epph', mk));
            wk(vk(Ck(this.P, 'umt', mk)), nk);
            vk(Ck(this.P, 'phel', mk));
            vk(Ck(this.P, 'phell', mk));
            vk(Ck(this.P, 'oseid', dl));
            var a = this.P;
            a.g.sloi || (a.g.sloi = new zk());
            vk(a.g.sloi);
            vk(Ck(this.P, 'xdi', mk));
            vk(Ck(this.P, 'amp', mk));
            vk(Ck(this.P, 'prf', mk));
            vk(Ck(this.P, 'gtx', mk));
            vk(Ck(this.P, 'mvp_lv', mk));
            wk(vk(Ck(this.P, 'vcm', mk)), qk);
            wk(vk(Ck(this.P, 'dov', sk)), ok);
            vk(Ck(this.P, 'postrxl', mk));
            this.P.h.postrxl = 1;
            wk(vk(Ck(this.P, 'mpv', mk)), pk);
            wk(vk(Ck(this.P, 'ssmol', mk)), rk);
            this.g = new bl(Uk(), this.P);
            this.A = this.l = !1;
            this.flags = new cl();
          };
          O.prototype.Cc = function (a) {
            if ('string' === typeof a && 0 != a.length) {
              var b = this.P;
              if (b.l) {
                a = a.split('&');
                for (var c = a.length - 1; 0 <= c; c--) {
                  var d = a[c].split('='),
                    e = d[0];
                  d = 1 < d.length ? parseInt(d[1], 10) : 1;
                  isNaN(d) || ((e = b.g[e]) && e.h(d));
                }
              }
            }
          };
          Na(O);
          var el = function () {
              var a = 'https:';
              F && F.location && 'http:' === F.location.protocol && (a = 'http:');
              this.h = a;
              this.g = 0.01;
              this.l = Math.random();
            },
            fl = function (a, b, c, d, e) {
              if ((d ? a.l : Math.random()) < (e || a.g))
                try {
                  if (c instanceof Pj) var f = c;
                  else
                    (f = new Pj()),
                      jf(c, function (h, k) {
                        var n = f,
                          m = n.o++;
                        Tj(n, m, Qj(k, h));
                      });
                  var g = Wj(f, a.h, '/pagead/gen_204?id=' + b + '&');
                  g && Wk(g);
                } catch (h) {}
            };
          var il = function () {
            var a = gl;
            this.B = hl;
            this.A = 'jserror';
            this.l = !0;
            this.h = null;
            this.H = this.Fa;
            this.g = void 0 === a ? null : a;
            this.o = !1;
          };
          l = il.prototype;
          l.Yb = function (a) {
            this.h = a;
          };
          l.Gc = function (a) {
            this.A = a;
          };
          l.Hc = function (a) {
            this.l = a;
          };
          l.Ic = function (a) {
            this.o = a;
          };
          l.$a = function (a, b, c) {
            var d = this;
            return al(O.C().g.g, function () {
              try {
                if (d.g && d.g.l) {
                  var e = d.g.start(a.toString(), 3);
                  var f = b();
                  og(d.g, e);
                } else f = b();
              } catch (k) {
                var g = d.l;
                try {
                  ng(e);
                  var h = new jl(kl(k));
                  g = d.H(a, h, void 0, c);
                } catch (n) {
                  d.Fa(217, n);
                }
                if (!g) throw k;
              }
              return f;
            })();
          };
          l.Dc = function (a, b, c, d) {
            var e = this;
            return al(O.C().g.g, function (f) {
              for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
              return e.$a(
                a,
                function () {
                  return b.apply(c, g);
                },
                d
              );
            });
          };
          l.Fa = function (a, b, c, d, e) {
            e = e || this.A;
            try {
              var f = new Pj();
              Uj(f, 1, 'context', a);
              Ae(b) || (b = new jl(kl(b)));
              b.msg && Uj(f, 2, 'msg', b.msg.substring(0, 512));
              var g = b.meta || {};
              if (this.h)
                try {
                  this.h(g);
                } catch (k) {}
              if (d)
                try {
                  d(g);
                } catch (k) {}
              Tj(f, 3, [g]);
              var h = Oj();
              h.h && Uj(f, 4, 'top', h.h.url || '');
              Tj(f, 5, [{ url: h.g.url || '' }, { url: h.g.url ? df(h.g.url) : '' }]);
              fl(this.B, e, f, this.o, c);
            } catch (k) {
              try {
                fl(
                  this.B,
                  e,
                  { context: 'ecmserr', rctx: a, msg: kl(k), url: h && h.g.url },
                  this.o,
                  c
                );
              } catch (n) {}
            }
            return this.l;
          };
          var kl = function (a) {
              var b = a.toString();
              a.name && -1 == b.indexOf(a.name) && (b += ': ' + a.name);
              a.message && -1 == b.indexOf(a.message) && (b += ': ' + a.message);
              if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                  -1 == a.indexOf(c) && (a = c + '\n' + a);
                  for (var d; a != d; )
                    (d = a), (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1'));
                  b = a.replace(/\n */g, '\n');
                } catch (e) {
                  b = c;
                }
              }
              return b;
            },
            jl = function (a) {
              ze.call(this, Error(a), { message: a });
            };
          t(jl, ze);
          var hl,
            ll,
            gl = new mg(1, Wf()),
            ml = function () {
              var a = Wf();
              a &&
                'undefined' != typeof a.google_measure_js_timing &&
                (a.google_measure_js_timing || gl.H());
            };
          (function () {
            hl = new el();
            ll = new il();
            var a = Wf();
            a &&
              a.document &&
              ('complete' == a.document.readyState
                ? ml()
                : gl.l &&
                  De(a, 'load', function () {
                    ml();
                  }));
          })();
          var nl = function (a) {
              ll.Yb(function (b) {
                C(a, function (c) {
                  c(b);
                });
              });
            },
            ol = function (a, b) {
              return ll.$a(a, b, void 0);
            },
            pl = function (a, b, c, d) {
              return ll.Dc(a, b, c, d);
            },
            ql = function (a, b, c, d) {
              ll.Fa(a, b, c, d);
            };
          var tl = Date.now(),
            ul = -1,
            vl = -1,
            wl,
            xl = -1,
            yl = !1,
            zl = function () {
              return Date.now() - tl;
            },
            Al = function () {
              var a = O.C().o,
                b = 0 <= vl ? zl() - vl : -1,
                c = yl ? zl() - ul : -1,
                d = 0 <= xl ? zl() - xl : -1;
              if (947190542 == a) return 100;
              if (79463069 == a) return 200;
              a = [2000, 4000];
              var e = [250, 500, 1000];
              ql(637, Error(), 0.001);
              var f = b;
              -1 != c && c < b && (f = c);
              for (b = 0; b < a.length; ++b)
                if (f < a[b]) {
                  var g = e[b];
                  break;
                }
              void 0 === g && (g = e[a.length]);
              return -1 != d && 1500 < d && 4000 > d ? 500 : g;
            };
          var Bl = function (a, b, c) {
            var d = new I(0, 0, 0, 0);
            this.time = a;
            this.volume = null;
            this.l = b;
            this.g = d;
            this.h = c;
          };
          var Cl = function (a, b, c, d, e, f, g) {
            this.o = a;
            this.l = b;
            this.B = c;
            this.g = d;
            this.A = e;
            this.h = f;
            this.H = g;
          };
          var Dl = {
              currentTime: 1,
              duration: 2,
              isVpaid: 4,
              volume: 8,
              isYouTube: 16,
              isPlaying: 32,
            },
            Mb = {
              bc: 'start',
              FIRST_QUARTILE: 'firstquartile',
              MIDPOINT: 'midpoint',
              THIRD_QUARTILE: 'thirdquartile',
              COMPLETE: 'complete',
              Id: 'metric',
              ac: 'pause',
              Sc: 'resume',
              SKIPPED: 'skip',
              VIEWABLE_IMPRESSION: 'viewable_impression',
              Jd: 'mute',
              Ud: 'unmute',
              FULLSCREEN: 'fullscreen',
              Gd: 'exitfullscreen',
              Oc: 'bufferstart',
              Nc: 'bufferfinish',
              Qc: 'fully_viewable_audible_half_duration_impression',
              Rc: 'measurable_impression',
              Bd: 'abandon',
              Pc: 'engagedview',
              IMPRESSION: 'impression',
              Dd: 'creativeview',
              LOADED: 'loaded',
              xg: 'progress',
              nf: 'close',
              qf: 'collapse',
              Kd: 'overlay_resize',
              Ld: 'overlay_unmeasurable_impression',
              Md: 'overlay_unviewable_impression',
              Od: 'overlay_viewable_immediate_impression',
              Nd: 'overlay_viewable_end_of_session_impression',
              Ed: 'custom_metric_viewable',
              pg: 'verification_debug',
            },
            El = 'start firstquartile midpoint thirdquartile resume loaded'.split(' '),
            Fl = ['start', 'firstquartile', 'midpoint', 'thirdquartile'],
            Gl = ['abandon'],
            Hl = {
              Mg: -1,
              bc: 0,
              FIRST_QUARTILE: 1,
              MIDPOINT: 2,
              THIRD_QUARTILE: 3,
              COMPLETE: 4,
              Id: 5,
              ac: 6,
              Sc: 7,
              SKIPPED: 8,
              VIEWABLE_IMPRESSION: 9,
              Jd: 10,
              Ud: 11,
              FULLSCREEN: 12,
              Gd: 13,
              Qc: 14,
              Rc: 15,
              Bd: 16,
              Pc: 17,
              IMPRESSION: 18,
              Dd: 19,
              LOADED: 20,
              Ed: 21,
              Oc: 22,
              Nc: 23,
            };
          var Fb = {
              df: 'addEventListener',
              Hf: 'getMaxSize',
              If: 'getScreenSize',
              Jf: 'getState',
              Kf: 'getVersion',
              yg: 'removeEventListener',
              dg: 'isViewable',
            },
            Il = function (a) {
              var b = a !== a.top,
                c = a.top === Xf(a).ma,
                d = -1,
                e = 0;
              if (b && c && a.top.mraid) {
                d = 3;
                var f = a.top.mraid;
              } else d = (f = a.mraid) ? (b ? (c ? 2 : 1) : 0) : -1;
              f &&
                (f.IS_GMA_SDK || (e = 2),
                Gb(function (g) {
                  return 'function' === typeof f[g];
                }) || (e = 1));
              return { ya: f, Db: e, Ue: d };
            };
          var Jl = function (a) {
            return (a = a.document) && 'function' === typeof a.elementFromPoint;
          };
          if (oe && oe.URL) {
            var Kl,
              nf = oe.URL;
            Kl = !!nf && 0 < of().length;
            ll.Hc(!Kl);
          }
          var Ll = function (a, b, c, d) {
            var e = void 0 === e ? !1 : e;
            c = pl(d, c);
            De(a, b, c, { capture: e });
          };
          var Ml = function (a, b) {
            b = Math.pow(10, b);
            return Math.floor(a * b) / b;
          };
          function Nl (a, b, c, d) {
            if (!a) return { value: d, done: !1 };
            d = b(d, a);
            var e = c(d, a);
            return !e && kd(a, 'parentElement') ? Nl(Xe(a), b, c, d) : { done: e, value: d };
          }
          var Ol = function (a, b, c, d) {
            if (!a) return d;
            d = Nl(a, b, c, d);
            if (!d.done)
              try {
                var e = Le(a),
                  f = e && G(e);
                return Ol(f && f.frameElement, b, c, d.value);
              } catch (g) {}
            return d.value;
          };
          function Pl (a) {
            var b = !od || Fd(8);
            return Ol(
              a,
              function (c, d) {
                c = kd(d, 'style') && d.style && Nf(d, 'visibility');
                return { hidden: 'hidden' === c, visible: b && 'visible' === c };
              },
              function (c) {
                return c.hidden || c.visible;
              },
              { hidden: !1, visible: !1 }
            ).hidden;
          }
          var Ql = function (a) {
              return Ol(
                a,
                function (b, c) {
                  return !(!kd(c, 'style') || !c.style || 'none' !== Nf(c, 'display'));
                },
                function (b) {
                  return b;
                },
                !1
              )
                ? !0
                : Pl(a);
            },
            Rl = function (a) {
              return new I(a.top, a.right, a.bottom, a.left);
            },
            Sl = function (a) {
              var b = a.top || 0,
                c = a.left || 0;
              return new I(b, c + (a.width || 0), b + (a.height || 0), c);
            },
            Tl = function (a) {
              return null != a && 0 <= a && 1 >= a;
            };
          function Ul () {
            var a = Dc;
            return a
              ? fb(
                  'Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX'.split(
                    ';'
                  ),
                  function (b) {
                    return pc(a, b);
                  }
                ) ||
                (pc(a, 'OMI/') && !pc(a, 'XiaoMi/'))
                ? !0
                : pc(a, 'Presto') &&
                  pc(a, 'Linux') &&
                  !pc(a, 'X11') &&
                  !pc(a, 'Android') &&
                  !pc(a, 'Mobi')
              : !1;
          }
          function Vl () {
            var a = Dc;
            return pc(a, 'AppleTV') || pc(a, 'Apple TV') || pc(a, 'CFNetwork') || pc(a, 'tvOS');
          }
          function Wl () {
            var a;
            (a =
              pc(Dc, 'CrKey') ||
              pc(Dc, 'PlayStation') ||
              pc(Dc, 'Roku') ||
              Ul() ||
              pc(Dc, 'Xbox') ||
              Vl()) || ((a = Dc), (a = pc(a, 'sdk_google_atv_x86') || pc(a, 'Android TV')));
            return a;
          }
          var P = function () {
              this.D = !1;
              this.l = !hf(F.top);
              this.H = af() || bf();
              var a = Lj();
              a =
                0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url
                  ? ((a = a[a.length - 1].url.match(cf)[3] || null) ? decodeURI(a) : a) || ''
                  : '';
              this.domain = a;
              this.g = new I(0, 0, 0, 0);
              this.A = new Je(0, 0);
              this.o = new Je(0, 0);
              this.J = new I(0, 0, 0, 0);
              this.I = null;
              this.B = 0;
              this.G = !1;
              this.h = !(!F || !Il(F).ya);
              Xl(this);
            },
            Yl = function (a, b) {
              b && b.screen && (a.A = new Je(b.screen.width, b.screen.height));
            },
            Zl = function (a, b) {
              var c = a.g ? new Je(a.g.getWidth(), a.g.getHeight()) : new Je(0, 0);
              b = void 0 === b ? F : b;
              null !== b && b != b.top && (b = b.top);
              var d = 0,
                e = 0;
              try {
                var f = b.document,
                  g = f.body,
                  h = f.documentElement;
                if ('CSS1Compat' == f.compatMode && h.scrollHeight)
                  (d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight),
                    (e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth);
                else {
                  var k = h.scrollHeight,
                    n = h.scrollWidth,
                    m = h.offsetHeight,
                    u = h.offsetWidth;
                  h.clientHeight != m &&
                    ((k = g.scrollHeight),
                    (n = g.scrollWidth),
                    (m = g.offsetHeight),
                    (u = g.offsetWidth));
                  k > c.height
                    ? k > m
                      ? ((d = k), (e = n))
                      : ((d = m), (e = u))
                    : k < m
                    ? ((d = k), (e = n))
                    : ((d = m), (e = u));
                }
                var p = new Je(e, d);
              } catch (w) {
                p = new Je(-12245933, -12245933);
              }
              a.o = p;
            },
            Xl = function (a) {
              F &&
                F.document &&
                ((a.J = ik(!1, F, a.H)), (a.g = ik(!0, F, a.H)), (a.I = a.g), Zl(a, F), Yl(a, F));
            },
            $l = function () {
              var a = P.C();
              if (0 < a.B || a.G) return !0;
              a = Uk().h.isVisible();
              var b = 0 === qg(oe);
              return a || b;
            };
          Na(P);
          var am = function (a) {
            this.l = a;
            this.h = 0;
            this.g = null;
          };
          am.prototype.cancel = function () {
            Uk().clearTimeout(this.g);
            this.g = null;
          };
          var bm = function (a) {
            var b = Uk();
            a.g = b.setTimeout(
              al(
                O.C().g.g,
                pl(143, function () {
                  a.h++;
                  a.l.$();
                })
              ),
              Al()
            );
          };
          var cm = function (a, b, c) {
            this.ma = a;
            this.va = void 0 === c ? 'na' : c;
            this.A = [];
            this.G = !1;
            this.l = new Bl(-1, !0, this);
            this.g = this;
            this.J = b;
            this.I = this.fa = this.D = !1;
            this.M = 'uk';
            this.U = !1;
            this.o = !0;
          };
          l = cm.prototype;
          l.ld = function () {
            return this.Ub();
          };
          l.Ub = function () {
            return !1;
          };
          l.initialize = function () {
            return (this.G = !0);
          };
          l.fb = function () {
            return this.g.M;
          };
          l.rb = function () {
            return this.g.I;
          };
          var em = function (a, b, c) {
            if (!a.I || (void 0 === c ? 0 : c))
              (a.I = !0), (a.M = b), (a.J = 0), a.g != a || dm(a);
          };
          cm.prototype.da = function () {
            return this.g.va;
          };
          cm.prototype.Ka = function () {
            return this.g.N();
          };
          cm.prototype.N = function () {
            return {};
          };
          cm.prototype.Aa = function () {
            return this.g.J;
          };
          var fm = function (a, b) {
            kb(a.A, b) || (a.A.push(b), b.gb(a.g), b.Ma(a.l), b.Ba() && (a.D = !0));
          };
          cm.prototype.W = function () {
            var a = P.C();
            a.g = ik(!0, this.ma, a.H);
          };
          cm.prototype.X = function () {
            Yl(P.C(), this.ma);
          };
          cm.prototype.Da = function () {
            Zl(P.C(), this.ma);
          };
          cm.prototype.R = function () {
            return this.l.g;
          };
          var gm = function (a) {
            a = a.g;
            a.X();
            a.W();
            var b = P.C();
            b.J = ik(!1, a.ma, b.H);
            a.Da();
            a.l.g = a.R();
          };
          cm.prototype.$ = function () {};
          var hm = function (a, b) {
            a.g != a ? hm(a.g, b) : a.o !== b && ((a.o = b), dm(a));
          };
          cm.prototype.tc = function () {
            return this.g.o;
          };
          var im = function (a) {
              a.D = a.A.length
                ? fb(a.A, function (b) {
                    return b.Ba();
                  })
                : !1;
            },
            jm = function (a) {
              var b = rb(a.A);
              C(b, function (c) {
                c.Ma(a.l);
              });
            },
            dm = function (a) {
              var b = rb(a.A);
              C(b, function (c) {
                c.gb(a.g);
              });
              a.g != a || jm(a);
            };
          l = cm.prototype;
          l.gb = function (a) {
            var b = this.g,
              c = a.Aa();
            this.g = c >= this.J ? a : this;
            b !== this.g
              ? ((this.o = this.g.o), dm(this))
              : this.o !== this.g.o && ((this.o = this.g.o), dm(this));
          };
          l.Ma = function (a) {
            if (a.h === this.g) {
              var b;
              if (!(b = this.fa)) {
                b = this.l;
                var c = this.D;
                if ((c = a && (void 0 === c || !c || b.volume == a.volume) && b.l == a.l))
                  (b = b.g),
                    (c = a.g),
                    (c =
                      b == c
                        ? !0
                        : b && c
                        ? b.top == c.top &&
                          b.right == c.right &&
                          b.bottom == c.bottom &&
                          b.left == c.left
                        : !1);
                b = !c;
              }
              this.l = a;
              b && jm(this);
            }
          };
          l.Ba = function () {
            return this.D;
          };
          l.V = function () {
            this.U = !0;
          };
          l.ub = function () {
            return this.U;
          };
          var km = function (a, b, c, d) {
            this.l = a;
            this.g = new I(0, 0, 0, 0);
            this.I = null;
            this.A = new I(0, 0, 0, 0);
            this.h = b;
            this.P = c;
            this.L = d;
            this.K = !1;
            this.timestamp = -1;
            this.J = new Cl(b.l, this.g, new I(0, 0, 0, 0), 0, 0, zl(), 0);
          };
          l = km.prototype;
          l.xc = function () {
            return !0;
          };
          l.Tb = function () {};
          l.V = function () {
            if (!this.ub()) {
              var a = this.h;
              lb(a.A, this);
              a.D && this.Ba() && im(a);
              this.Tb();
              this.K = !0;
            }
          };
          l.ub = function () {
            return this.K;
          };
          l.Ka = function () {
            return this.h.Ka();
          };
          l.Aa = function () {
            return this.h.Aa();
          };
          l.fb = function () {
            return this.h.fb();
          };
          l.rb = function () {
            return this.h.rb();
          };
          l.gb = function () {};
          l.Ma = function () {
            this.Ja();
          };
          l.Ba = function () {
            return this.L;
          };
          var lm = function (a) {
            this.A = !1;
            this.g = a;
            this.o = Ma;
          };
          l = lm.prototype;
          l.Aa = function () {
            return this.g.Aa();
          };
          l.fb = function () {
            return this.g.fb();
          };
          l.rb = function () {
            return this.g.rb();
          };
          l.create = function (a, b, c) {
            var d = null;
            this.g && ((d = this.Qb(a, b, c)), fm(this.g, d));
            return d;
          };
          l.hd = function () {
            return this.xb();
          };
          l.xb = function () {
            return !1;
          };
          l.init = function (a) {
            return this.g.initialize() ? (fm(this.g, this), (this.o = a), !0) : !1;
          };
          l.gb = function (a) {
            0 == a.Aa() && this.o(a.fb(), this);
          };
          l.Ma = function () {};
          l.Ba = function () {
            return !1;
          };
          l.V = function () {
            this.A = !0;
          };
          l.ub = function () {
            return this.A;
          };
          l.Ka = function () {
            return {};
          };
          var mm = function (a, b, c) {
              this.l = void 0 === c ? 0 : c;
              this.h = a;
              this.g = null == b ? '' : b;
            },
            nm = function (a) {
              switch (Math.trunc(a.l)) {
                case -16:
                  return -16;
                case -8:
                  return -8;
                case 0:
                  return 0;
                case 8:
                  return 8;
                case 16:
                  return 16;
                default:
                  return 16;
              }
            },
            om = function (a, b) {
              return a.l < b.l
                ? !0
                : a.l > b.l
                ? !1
                : a.h < b.h
                ? !0
                : a.h > b.h
                ? !1
                : typeof a.g < typeof b.g
                ? !0
                : typeof a.g > typeof b.g
                ? !1
                : a.g < b.g;
            };
          var pm = function () {
            this.l = 0;
            this.g = [];
            this.h = !1;
          };
          pm.prototype.add = function (a, b, c) {
            ++this.l;
            a = new mm(a, b, c);
            this.g.push(new mm(a.h, a.g, a.l + this.l / 4096));
            this.h = !0;
            return this;
          };
          var qm = function (a, b) {
              C(b.g, function (c) {
                a.add(c.h, c.g, nm(c));
              });
            },
            rm = function (a, b) {
              var c = void 0 === c ? 0 : c;
              var d = void 0 === d ? !0 : d;
              jf(b, function (e, f) {
                (d && void 0 === e) || a.add(f, e, c);
              });
              return a;
            },
            tm = function (a) {
              var b = sm;
              a.h &&
                (tb(a.g, function (c, d) {
                  return om(d, c) ? 1 : om(c, d) ? -1 : 0;
                }),
                (a.h = !1));
              return eb(
                a.g,
                function (c, d) {
                  d = b(d);
                  return '' + c + ('' != c && '' != d ? '&' : '') + d;
                },
                ''
              );
            };
          var sm = function (a) {
            var b = a.h;
            a = a.g;
            return '' === a
              ? b
              : 'boolean' === typeof a
              ? a
                ? b
                : ''
              : Array.isArray(a)
              ? 0 === a.length
                ? b
                : b + '=' + a.join()
              : b + '=' + (kb(['mtos', 'tos', 'p'], b) ? a : encodeURIComponent(a));
          };
          var um = function (a) {
            var b = void 0 === b ? !0 : b;
            this.g = new pm();
            void 0 !== a && qm(this.g, a);
            b && this.g.add('v', Jj, -16);
          };
          um.prototype.toString = function () {
            var a = '//pagead2.googlesyndication.com//pagead/gen_204',
              b = tm(this.g);
            0 < b.length && (a += '?' + b);
            return a;
          };
          var vm = function (a) {
              var b = [],
                c = [];
              Bb(a, function (d, e) {
                if (!(e in Object.prototype) && 'undefined' != typeof d)
                  switch ((Array.isArray(d) && (d = d.join(',')), (d = [e, '=', d].join('')), e)) {
                    case 'adk':
                    case 'r':
                    case 'tt':
                    case 'error':
                    case 'mtos':
                    case 'tos':
                    case 'p':
                    case 'bs':
                      b.unshift(d);
                      break;
                    case 'req':
                    case 'url':
                    case 'referrer':
                    case 'iframe_loc':
                      c.push(d);
                      break;
                    default:
                      b.push(d);
                  }
              });
              return b.concat(c);
            },
            wm = function () {
              if (Jj && 'unreleased' !== Jj) return Jj;
            },
            xm = function (a) {
              var b = void 0 === b ? 4000 : b;
              a = a.toString();
              if (!/&v=[^&]+/.test(a)) {
                var c = wm();
                a = c ? a + '&v=' + encodeURIComponent(c) : a;
              }
              a = a.substring(0, b);
              Wk(a);
            };
          var ym = function () {
            this.g = 0;
          };
          Na(ym);
          var zm = function (a, b, c) {
            C(a.l, function (d) {
              var e = a.g;
              if (!d.g && (d.l(b, c), d.o())) {
                d.g = !0;
                var f = d.h(),
                  g = new pm();
                g.add('id', 'av-js');
                g.add('type', 'verif');
                g.add('vtype', d.A);
                d = ym.C();
                g.add('i', d.g++);
                g.add('adk', e);
                rm(g, f);
                e = new um(g);
                xm(e);
              }
            });
          };
          var Am = function () {
              this.h = this.l = this.o = this.g = 0;
            },
            Bm = function (a, b, c, d) {
              b && ((a.g += c), (a.h += c), (a.o += c), (a.l = Math.max(a.l, a.o)));
              if (void 0 === d ? !b : d) a.o = 0;
            };
          var Cm = [1, 0.75, 0.5, 0.3, 0],
            Dm = function (a) {
              this.h = a = void 0 === a ? Cm : a;
              this.g = db(this.h, function () {
                return new Am();
              });
            },
            Fm = function (a, b) {
              return Em(
                a,
                function (c) {
                  return c.g;
                },
                void 0 === b ? !0 : b
              );
            },
            Hm = function (a, b) {
              return Gm(a, b, function (c) {
                return c.g;
              });
            },
            Im = function (a, b) {
              return Em(
                a,
                function (c) {
                  return c.l;
                },
                void 0 === b ? !0 : b
              );
            },
            Jm = function (a, b) {
              return Gm(a, b, function (c) {
                return c.l;
              });
            },
            Km = function (a, b) {
              return Gm(a, b, function (c) {
                return c.h;
              });
            },
            Lm = function (a) {
              C(a.g, function (b) {
                b.h = 0;
              });
            },
            Mm = function (a, b, c, d, e, f, g) {
              g = void 0 === g ? !0 : g;
              c = f ? Math.min(b, c) : c;
              for (f = 0; f < a.h.length; f++) {
                var h = a.h[f],
                  k = 0 < c && c >= h;
                h = !(0 < b && b >= h) || d;
                Bm(a.g[f], g && k, e, !g || h);
              }
            },
            Em = function (a, b, c) {
              a = db(a.g, function (d) {
                return b(d);
              });
              return c ? a : Nm(a);
            },
            Gm = function (a, b, c) {
              var d = jb(a.h, function (e) {
                return b <= e;
              });
              return -1 == d ? 0 : c(a.g[d]);
            },
            Nm = function (a) {
              return db(a, function (b, c, d) {
                return 0 < c ? d[c] - d[c - 1] : d[c];
              });
            };
          var Om = function () {
              this.h = new Dm();
              this.W = new Am();
              this.I = this.H = -1;
              this.$ = 1000;
              this.ea = new Dm([1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0]);
              this.N = this.K = -1;
            },
            Pm = function (a, b) {
              return Im(a.h, void 0 === b ? !0 : b);
            };
          Om.prototype.L = function (a, b, c, d) {
            this.H = -1 != this.H ? Math.min(this.H, b.Y) : b.Y;
            this.I = Math.max(this.I, b.Y);
            this.K = -1 != this.K ? Math.min(this.K, b.ra) : b.ra;
            this.N = Math.max(this.N, b.ra);
            Mm(this.ea, b.ra, c.ra, b.g, a, d);
            Mm(this.h, b.Y, c.Y, b.g, a, d);
            c = d || c.Xa != b.Xa ? c.isVisible() && b.isVisible() : c.isVisible();
            b = !b.isVisible() || b.g;
            Bm(this.W, c, a, b);
          };
          Om.prototype.Za = function () {
            return this.W.l >= this.$;
          };
          var Qm = new I(0, 0, 0, 0);
          function Rm (a, b) {
            b = Sm(b);
            return 0 === b ? 0 : Sm(a) / b;
          }
          function Sm (a) {
            return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0);
          }
          function Tm (a, b) {
            if (!a || !b) return !1;
            for (var c = 0; null !== a && 100 > c++; ) {
              if (a === b) return !0;
              try {
                if ((a = Xe(a) || a)) {
                  var d = Le(a),
                    e = d && G(d),
                    f = e && e.frameElement;
                  f && (a = f);
                }
              } catch (g) {
                break;
              }
            }
            return !1;
          }
          function Um (a, b, c) {
            if (!a || !b) return !1;
            b = xf(wf(a), -b.left, -b.top);
            a = (b.left + b.right) / 2;
            b = (b.top + b.bottom) / 2;
            var d = Wf();
            hf(d.top) && d.top && d.top.document && (d = d.top);
            if (!Jl(d)) return !1;
            a = d.document.elementFromPoint(a, b);
            if (!a) return !1;
            b = (b = (b = Le(c)) && b.defaultView && b.defaultView.frameElement) && Tm(b, a);
            d = a === c;
            a =
              !d &&
              a &&
              $e(a, function (e) {
                return e === c;
              });
            return !(b || d || a);
          }
          function Vm (a, b, c, d) {
            return P.C().l
              ? !1
              : 0 >= a.getWidth() || 0 >= a.getHeight()
              ? !0
              : c && d
              ? ol(208, function () {
                  return Um(a, b, c);
                })
              : !1;
          }
          var Wm = new I(0, 0, 0, 0),
            Xm = function (a, b, c) {
              H.call(this);
              this.position = wf(Wm);
              this.Mb = this.Fb();
              this.vc = -2;
              this.Ye = Date.now();
              this.wd = -1;
              this.Ib = b;
              this.Hb = null;
              this.Eb = !1;
              this.Wb = null;
              this.opacity = -1;
              this.Se = c;
              this.xd = this.wc = Ma;
              this.sa = new Kk();
              this.sa.Oa = a;
              this.sa.g = a;
              this.Ya = !1;
              this.Sa = { zc: null, yc: null };
              this.td = !0;
              this.yb = null;
              this.ib = this.De = !1;
              O.C().H++;
              this.pa = this.lc();
              this.ud = -1;
              this.aa = null;
              this.ye = !1;
              a = this.P = new Bk();
              Ck(a, 'od', kk);
              vk(Ck(a, 'opac', mk));
              vk(Ck(a, 'sbeos', mk));
              vk(Ck(a, 'prf', mk));
              vk(Ck(a, 'mwt', mk));
              Ck(a, 'iogeo', mk);
              vk(Ck(a, 'postrxl', mk));
              (a = this.sa.Oa) &&
                a.getAttribute &&
                !/-[a-z]/.test('googleAvInapp') &&
                (Jk && a.dataset
                  ? 'googleAvInapp' in a.dataset
                  : a.hasAttribute
                  ? a.hasAttribute('data-' + Zc())
                  : a.getAttribute('data-' + Zc())) &&
                (P.C().h = !0);
              1 == this.Se ? Ek(this.P, 'od', 1) : Ek(this.P, 'od', 0);
            };
          t(Xm, H);
          l = Xm.prototype;
          l.O = function () {
            this.sa.g &&
              (this.Sa.zc && (Ee(this.sa.g, 'mouseover', this.Sa.zc), (this.Sa.zc = null)),
              this.Sa.yc && (Ee(this.sa.g, 'mouseout', this.Sa.yc), (this.Sa.yc = null)));
            this.yb && this.yb.V();
            this.aa && this.aa.V();
            delete this.Mb;
            delete this.wc;
            delete this.xd;
            delete this.sa.Oa;
            delete this.sa.g;
            delete this.Sa;
            delete this.yb;
            delete this.aa;
            delete this.P;
            H.prototype.O.call(this);
          };
          l.Ua = function () {
            return this.aa ? this.aa.g : this.position;
          };
          l.Cc = function (a) {
            O.C().Cc(a);
          };
          l.Ba = function () {
            return !1;
          };
          l.Fb = function () {
            return new Om();
          };
          l.ua = function () {
            return this.Mb;
          };
          var Ym = function (a, b) {
              b != a.ib && ((a.ib = b), (a = P.C()), b ? a.B++ : 0 < a.B && a.B--);
            },
            Zm = function (a, b) {
              if (a.aa) {
                if (b.da() === a.aa.da()) return;
                a.aa.V();
                a.aa = null;
              }
              b = b.create(a.sa.g, a.P, a.Ba());
              if ((b = null != b && b.xc() ? b : null)) a.aa = b;
            },
            $m = function (a, b, c) {
              if (!a.Hb || -1 == a.Ib || -1 === b.h || -1 === a.Hb.h) return 0;
              a = b.h - a.Hb.h;
              return a > c ? 0 : a;
            };
          Xm.prototype.bd = function (a) {
            return $m(this, a, 10000);
          };
          var an = function (a, b, c) {
              if (a.aa) {
                a.aa.Ja();
                var d = a.aa.J,
                  e = d.o,
                  f = e.g;
                if (null != d.B) {
                  var g = d.l;
                  a.Wb = new Ie(g.left - f.left, g.top - f.top);
                }
                f = a.Zb() ? Math.max(d.g, d.A) : d.g;
                g = {};
                null !== e.volume && (g.volume = e.volume);
                e = a.bd(d);
                a.Hb = d;
                a.Kc(f, b, c, !1, g, e, d.H);
              }
            },
            bn = function (a) {
              if (a.Eb && a.yb) {
                var b = 1 == Fk(a.P, 'od'),
                  c = P.C().g,
                  d = a.yb,
                  e = new Je(c.getWidth(), c.getHeight());
                c = a.Zb();
                a = { We: a.aa ? a.aa.da() : 'ns', Wb: a.Wb, cf: e, Zb: c, Y: a.pa.Y, Ze: b };
                if ((b = d.h)) {
                  b.Ja();
                  e = b.J;
                  var f = e.o.g,
                    g = null,
                    h = null;
                  null != e.B &&
                    f &&
                    ((g = e.l),
                    (g = new Ie(g.left - f.left, g.top - f.top)),
                    (h = new Je(f.right - f.left, f.bottom - f.top)));
                  c = { We: b.da(), Wb: g, cf: h, Zb: c, Ze: !1, Y: c ? Math.max(e.g, e.A) : e.g };
                } else c = null;
                c && zm(d, a, c);
              }
            };
          l = Xm.prototype;
          l.Kc = function (a, b, c, d, e, f, g) {
            this.Ya ||
              (this.Eb &&
                ((a = this.cc(a, c, e, g)),
                (d = d && this.pa.Y >= (this.Xa() ? 0.3 : 0.5)),
                this.Lc(f, a, d),
                (this.Ib = b),
                0 < a.Y && -1 === this.ud && (this.ud = b),
                -1 == this.wd && this.Za() && (this.wd = b),
                -2 == this.vc && (this.vc = Sm(this.Ua()) ? a.Y : -1),
                (this.pa = a)),
              this.wc(this));
          };
          l.Lc = function (a, b, c) {
            this.ua().L(a, b, this.pa, c);
          };
          l.lc = function () {
            return new lk();
          };
          l.cc = function (a, b, c, d) {
            c = this.lc();
            c.g = b;
            b = Uk().h;
            b = 0 === qg(oe) ? -1 : b.isVisible() ? 0 : 1;
            c.h = b;
            c.Y = this.ec(a);
            c.Xa = this.Xa();
            c.ra = d;
            return c;
          };
          l.ec = function (a) {
            return 0 === this.opacity && 1 === Fk(this.P, 'opac') ? 0 : a;
          };
          l.Xa = function () {
            return !1;
          };
          l.Zb = function () {
            return this.ye || this.De;
          };
          l.wa = function () {
            return 0;
          };
          l.Za = function () {
            return this.Mb.Za();
          };
          var cn = function (a, b, c) {
            b && (a.wc = b);
            c && (a.xd = c);
          };
          var dn = function () {
              this.o = this.g = this.l = this.h = this.A = 0;
            },
            en = function (a) {
              var b = {};
              b = ((b.ptlt = z() - a.A), b);
              var c = a.h;
              c && (b.pnk = c);
              (c = a.l) && (b.pnc = c);
              (c = a.o) && (b.pnmm = c);
              (a = a.g) && (b.pns = a);
              return b;
            };
          var fn = function () {
            lk.call(this);
            this.l = !1;
            this.volume = void 0;
            this.paused = !1;
            this.mediaTime = -1;
          };
          t(fn, lk);
          var gn = function (a) {
            return Tl(a.volume) && 0.1 <= a.volume;
          };
          var hn = function () {
              var a = {};
              this.h =
                ((a.vs = [1, 0]),
                (a.vw = [0, 1]),
                (a.am = [2, 2]),
                (a.a = [4, 4]),
                (a.f = [8, 8]),
                (a.bm = [16, 16]),
                (a.b = [32, 32]),
                (a.avw = [0, 64]),
                (a.avs = [64, 0]),
                (a.pv = [256, 256]),
                (a.gdr = [0, 512]),
                (a.p = [0, 1024]),
                (a.r = [0, 2048]),
                (a.m = [0, 4096]),
                (a.um = [0, 8192]),
                (a.ef = [0, 16384]),
                (a.s = [0, 32768]),
                (a.pmx = [0, 16777216]),
                a);
              this.g = {};
              for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
              this.l = 0;
            },
            jn = function (a, b) {
              var c = a.h[b],
                d = c[1];
              a.l += c[0];
              0 < d && 0 == a.g[b] && (a.g[b] = 1);
            },
            kn = function (a) {
              var b = Ib(a.h),
                c = 0,
                d;
              for (d in a.g) kb(b, d) && 1 == a.g[d] && ((c += a.h[d][1]), (a.g[d] = 2));
              return c;
            },
            ln = function (a) {
              var b = 0,
                c;
              for (c in a.g) {
                var d = a.g[c];
                if (1 == d || 2 == d) b += a.h[c][1];
              }
              return b;
            };
          var mn = function () {
              this.h = this.g = 0;
            },
            nn = function (a, b, c) {
              32 <= b ||
                (a.h & (1 << b) && !c
                  ? (a.g &= ~(1 << b))
                  : a.h & (1 << b) || !c || (a.g |= 1 << b),
                (a.h |= 1 << b));
            };
          var on = function () {
            Om.call(this);
            this.l = new Am();
            this.U = this.D = this.M = 0;
            this.J = -1;
            this.fa = new Am();
            this.A = new Am();
            this.g = new Dm();
            this.B = this.o = -1;
            this.G = new Am();
            this.$ = 2000;
            this.R = new mn();
            this.Z = new mn();
            this.X = new mn();
          };
          t(on, Om);
          var pn = function (a, b, c) {
            var d = a.U;
            yl || c || -1 == a.J || (d += b - a.J);
            return d;
          };
          on.prototype.L = function (a, b, c, d) {
            if (!b.paused) {
              Om.prototype.L.call(this, a, b, c, d);
              var e = gn(b) && gn(c),
                f = 0.5 <= (d ? Math.min(b.Y, c.Y) : c.Y);
              Tl(b.volume) &&
                ((this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume),
                (this.B = Math.max(this.B, b.volume)));
              f && ((this.M += a), (this.D += e ? a : 0));
              Mm(this.g, b.Y, c.Y, b.g, a, d, e);
              Bm(this.l, !0, a);
              Bm(this.A, e, a);
              Bm(this.G, c.l, a);
              Bm(this.fa, e && !f, a);
              a = Math.floor(b.mediaTime / 1000);
              nn(this.R, a, b.isVisible());
              nn(this.Z, a, 1 <= b.Y);
              nn(this.X, a, gn(b));
            }
          };
          var qn = function () {
              this.g = !1;
            },
            rn = function (a, b) {
              a.g ||
                (a.l(b) ? ((b = a.D.report(a.o, b)), (a.h |= b), (b = 0 == b)) : (b = !1),
                (a.g = b));
            };
          var sn = function (a, b) {
            this.g = !1;
            this.o = a;
            this.D = b;
            this.h = 0;
          };
          t(sn, qn);
          sn.prototype.l = function () {
            return !0;
          };
          sn.prototype.A = function () {
            return !1;
          };
          sn.prototype.B = function () {
            var a = this,
              b = Nb(function (c) {
                return c == a.o;
              });
            return Hl[b].toString();
          };
          sn.prototype.toString = function () {
            var a = '';
            this.A() && (a += 'c');
            this.g && (a += 's');
            0 < this.h && (a += ':' + this.h);
            return this.B() + a;
          };
          var tn = function (a, b, c, d) {
            km.call(this, a, b, c, d);
          };
          t(tn, km);
          l = tn.prototype;
          l.dc = function () {
            if (this.l) {
              var a = this.l,
                b = this.h.g.ma;
              try {
                try {
                  var c = Rl(a.getBoundingClientRect());
                } catch (n) {
                  c = new I(0, 0, 0, 0);
                }
                var d = c.right - c.left,
                  e = c.bottom - c.top,
                  f = Qf(a, b),
                  g = f.x,
                  h = f.y;
                var k = new I(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g));
              } catch (n) {
                k = wf(Qm);
              }
              this.g = k;
            }
          };
          l.Uc = function () {
            this.A = this.h.l.g;
          };
          l.ed = function (a) {
            return Vm(a, this.A, this.l, 1 == Fk(this.P, 'od'));
          };
          l.Vc = function () {
            this.timestamp = zl();
          };
          l.Ja = function () {
            this.Vc();
            this.dc();
            if (
              1 === Fk(O.C().P, 'vcm') &&
              this.l &&
              'number' === typeof this.l.videoWidth &&
              'number' === typeof this.l.videoHeight
            ) {
              var a = this.l,
                b = new Je(a.videoWidth, a.videoHeight);
              this.I = this.g;
              a = this.g;
              var c = a.getWidth(),
                d = a.getHeight(),
                e = b.width;
              b = b.height;
              0 >= e ||
                0 >= b ||
                0 >= c ||
                0 >= d ||
                ((e /= b),
                (a = wf(a)),
                e > c / d
                  ? ((c /= e),
                    (d = (d - c) / 2),
                    0 < d &&
                      ((d = a.top + d), (a.top = Math.round(d)), (a.bottom = Math.round(d + c))))
                  : ((d *= e),
                    (c = Math.round((c - d) / 2)),
                    0 < c &&
                      ((c = a.left + c),
                      (a.left = Math.round(c)),
                      (a.right = Math.round(c + d)))));
              this.g = a;
            }
            this.Uc();
            a = this.g;
            c = this.A;
            a =
              a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom
                ? new I(
                    Math.max(a.top, c.top),
                    Math.min(a.right, c.right),
                    Math.min(a.bottom, c.bottom),
                    Math.max(a.left, c.left)
                  )
                : new I(0, 0, 0, 0);
            c = a.top >= a.bottom || a.left >= a.right ? new I(0, 0, 0, 0) : a;
            a = this.h.l;
            b = e = d = 0;
            0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) &&
              (this.ed(c)
                ? (c = new I(0, 0, 0, 0))
                : ((d = P.C().A),
                  (b = new I(0, d.height, d.width, 0)),
                  (d = Rm(c, this.g)),
                  (e = Rm(c, P.C().g)),
                  (b = Rm(c, b))));
            c =
              c.top >= c.bottom || c.left >= c.right
                ? new I(0, 0, 0, 0)
                : xf(c, -this.g.left, -this.g.top);
            $l() || (e = d = 0);
            this.J = new Cl(a, this.g, c, d, e, this.timestamp, b);
          };
          l.da = function () {
            return this.h.da();
          };
          var un = new I(0, 0, 0, 0),
            vn = function (a, b, c) {
              km.call(this, null, a, b, c);
              this.H = a.tc();
              this.B = 0;
            };
          t(vn, tn);
          l = vn.prototype;
          l.xc = function () {
            this.o();
            return !0;
          };
          l.Ma = function () {
            tn.prototype.Ja.call(this);
          };
          l.Vc = function () {};
          l.dc = function () {};
          l.Ja = function () {
            this.o();
            tn.prototype.Ja.call(this);
          };
          l.gb = function (a) {
            a = a.tc();
            a !== this.H &&
              (a
                ? this.o()
                : ((P.C().g = new I(0, 0, 0, 0)),
                  (this.g = new I(0, 0, 0, 0)),
                  (this.A = new I(0, 0, 0, 0)),
                  (this.timestamp = -1)));
            this.H = a;
          };
          function wn (a) {
            return [a.top, a.left, a.bottom, a.right];
          }
          var xn = {},
            yn =
              ((xn.firstquartile = 0),
              (xn.midpoint = 1),
              (xn.thirdquartile = 2),
              (xn.complete = 3),
              xn),
            zn = function (a, b, c, d, e, f) {
              e = void 0 === e ? null : e;
              f = void 0 === f ? [] : f;
              Xm.call(this, b, c, d);
              this.hc = 0;
              this.ha = {};
              this.ga = new hn();
              this.yd = {};
              this.la = '';
              this.Pa = null;
              this.Da = !1;
              this.g = [];
              this.o = e;
              this.D = f;
              this.B = null;
              this.l = -1;
              this.X = this.I = void 0;
              this.L = this.K = 0;
              this.U = -1;
              this.fa = this.ea = !1;
              this.R = this.G = this.h = this.nb = this.va = 0;
              new Dm();
              this.W = this.Z = 0;
              this.$ = -1;
              this.ca = 0;
              this.M = Ma;
              this.N = [this.Fb()];
              this.Ab = 2;
              this.ab = {};
              this.ab.pause = 'p';
              this.ab.resume = 'r';
              this.ab.skip = 's';
              this.ab.mute = 'm';
              this.ab.unmute = 'um';
              this.ab.exitfullscreen = 'ef';
              this.A = null;
              this.pd = !1;
            };
          t(zn, Xm);
          zn.prototype.Ba = function () {
            return !0;
          };
          var An = function (a) {
              !a.Ya &&
                a.o &&
                0 != a.ca &&
                (Fk(O.C().P, 'mpv') ? a.pd && a.aa && 2 === a.aa.Aa() && rn(a.o, a) : rn(a.o, a));
            },
            Bn = function (a) {
              return void 0 === a ? a : Number(a) ? Ml(a, 3) : 0;
            };
          l = zn.prototype;
          l.bd = function (a) {
            return $m(this, a, Math.max(10000, this.l / 3));
          };
          l.Kc = function (a, b, c, d, e, f, g) {
            var h = this,
              k = this.M(this) || {};
            Sb(k, e);
            this.l = k.duration || this.l;
            this.I = k.isVpaid || this.I;
            this.X = k.isYouTube || this.X;
            e = Cn(this, b);
            1 === Dn(this) && (f = e);
            Xm.prototype.Kc.call(this, a, b, c, d, k, f, g);
            this.o &&
              this.o.g &&
              C(this.D, function (n) {
                rn(n, h);
              });
          };
          l.Lc = function (a, b, c) {
            Xm.prototype.Lc.call(this, a, b, c);
            En(this).L(a, b, this.pa, c);
            this.fa = gn(this.pa) && gn(b);
            -1 == this.U && this.ea && (this.U = this.ua().l.g);
            this.ga.l = 0;
            a = this.Za();
            b.isVisible() && jn(this.ga, 'vs');
            a && jn(this.ga, 'vw');
            Tl(b.volume) && jn(this.ga, 'am');
            gn(b) && jn(this.ga, 'a');
            this.ib && jn(this.ga, 'f');
            -1 != b.h && (jn(this.ga, 'bm'), 1 == b.h && jn(this.ga, 'b'));
            gn(b) && b.isVisible() && jn(this.ga, 'avs');
            this.fa && a && jn(this.ga, 'avw');
            0 < b.Y && jn(this.ga, 'pv');
            Fn(this, this.ua().l.g, !0) && jn(this.ga, 'gdr');
            2000 <= Jm(this.ua().h, 1) && jn(this.ga, 'pmx');
          };
          l.Fb = function () {
            return new on();
          };
          l.ua = function () {
            return this.Mb;
          };
          var En = function (a, b) {
            var c;
            null != b && b < a.N.length ? (c = b) : (c = a.N.length - 1);
            return a.N[c];
          };
          zn.prototype.lc = function () {
            return new fn();
          };
          zn.prototype.cc = function (a, b, c, d) {
            a = Xm.prototype.cc.call(this, a, b, c, void 0 === d ? -1 : d);
            a.l = this.ib;
            a.paused = 2 == this.ca;
            a.volume = c.volume;
            Tl(a.volume) || (this.va++, (b = this.pa), Tl(b.volume) && (a.volume = b.volume));
            c = c.currentTime;
            a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
            return a;
          };
          var Dn = function (a) {
              var b = !!Fk(O.C().P, 'umt');
              return a.I || (!b && !a.X) ? 0 : 1;
            },
            Cn = function (a, b) {
              2 == a.ca
                ? (b = 0)
                : -1 == a.Ib
                ? (b = 0)
                : ((b -= a.Ib), (b = b > Math.max(10000, a.l / 3) ? 0 : b));
              var c = a.M(a) || {};
              c = void 0 !== c.currentTime ? c.currentTime : a.K;
              var d = c - a.K,
                e = 0;
              0 <= d
                ? ((a.L += b), (a.W += Math.max(b - d, 0)), (e = Math.min(d, a.L)))
                : (a.Z += Math.abs(d));
              0 != d && (a.L = 0);
              -1 == a.$ && 0 < d && (a.$ = 0 <= xl ? zl() - xl : -1);
              a.K = c;
              return e;
            };
          zn.prototype.ec = function (a) {
            return P.C().D ? 0 : this.ib ? 1 : Xm.prototype.ec.call(this, a);
          };
          zn.prototype.wa = function () {
            return 1;
          };
          zn.prototype.getDuration = function () {
            return this.l;
          };
          var Gn = function (a, b) {
              fb(a.D, function (c) {
                return c.o == b.o;
              }) || a.D.push(b);
            },
            Fn = function (a, b, c) {
              return 15000 <= b
                ? !0
                : a.ea
                ? (void 0 === c ? 0 : c)
                  ? !0
                  : 0 < a.l
                  ? b >= a.l / 2
                  : 0 < a.U
                  ? b >= a.U
                  : !1
                : !1;
            },
            Hn = function (a) {
              var b = {},
                c = P.C();
              b.insideIframe = c.l;
              b.unmeasurable = a.Ya;
              b.position = a.Ua();
              b.exposure = a.pa.Y;
              b.documentSize = c.o;
              b.viewportSize = new Je(c.g.getWidth(), c.g.getHeight());
              null != a.A && (b.presenceData = a.A);
              b.screenShare = a.pa.ra;
              return b;
            },
            In = function (a) {
              var b = Ml(a.pa.Y, 2),
                c = a.ga.l,
                d = a.pa,
                e = En(a),
                f = Bn(e.o),
                g = Bn(e.B),
                h = Bn(d.volume),
                k = Ml(e.H, 2),
                n = Ml(e.I, 2),
                m = Ml(d.Y, 2),
                u = Ml(e.K, 2),
                p = Ml(e.N, 2);
              d = Ml(d.ra, 2);
              a = wf(a.Ua());
              a.round();
              e = Pm(e, !1);
              return {
                bf: b,
                sb: c,
                Nb: f,
                Jb: g,
                pb: h,
                Ob: k,
                Kb: n,
                Y: m,
                Pb: u,
                Lb: p,
                ra: d,
                position: a,
                Vb: e,
              };
            },
            Kn = function (a, b) {
              Jn(a.g, b, function () {
                return {
                  bf: 0,
                  sb: void 0,
                  Nb: -1,
                  Jb: -1,
                  pb: -1,
                  Ob: -1,
                  Kb: -1,
                  Y: -1,
                  Pb: -1,
                  Lb: -1,
                  ra: -1,
                  position: void 0,
                  Vb: [],
                };
              });
              a.g[b] = In(a);
            },
            Jn = function (a, b, c) {
              for (var d = a.length; d < b + 1; ) a.push(c()), d++;
            },
            Nn = function (a, b, c) {
              var d = a.yd[b];
              if (null != d) return d;
              d = Ln(a, b);
              var e = Nb(function (f) {
                return f == b;
              });
              a = Mn(a, d, d, c, yn[Mb[e]]);
              'fully_viewable_audible_half_duration_impression' == b && (a.std = 'csm');
              return a;
            },
            On = function (a, b, c) {
              var d = [b];
              if (a != b || c != b) d.unshift(a), d.push(c);
              return d;
            },
            Mn = function (a, b, c, d, e) {
              if (a.Ya) return { if: 0 };
              var f = wf(a.Ua());
              f.round();
              var g = P.C(),
                h = O.C(),
                k = a.ua(),
                n = a.aa ? a.aa.da() : 'ns',
                m = {};
              m['if'] = g.l ? 1 : void 0;
              m.sdk = a.B ? a.B : void 0;
              m.t = a.Ye;
              m.p = [f.top, f.left, f.bottom, f.right];
              if ((f = a.aa ? a.aa.I : null)) (f = wf(f)), f.round(), (m.cp = wn(f));
              m.tos = Fm(k.h, !1);
              m.mtos = Pm(k);
              m.mcvt = k.W.l;
              m.ps = void 0;
              m.vht = pn(k, zl(), 2 == a.ca);
              m.mut = k.fa.l;
              m.a = Bn(a.pa.volume);
              m.mv = Bn(k.B);
              m.fs = a.ib ? 1 : 0;
              m.ft = k.G.g;
              m.at = k.A.g;
              m.as = 0.1 <= k.o ? 1 : 0;
              m.atos = Fm(k.g);
              m.ssb = Fm(k.ea, !1);
              m.amtos = Im(k.g);
              m.uac = a.va;
              m.vpt = k.l.g;
              'nio' == n && ((m.nio = 1), (m.avms = 'nio'));
              m.gmm = '4';
              m.gdr = Fn(a, k.l.g, !0) ? 1 : 0;
              m.efpf = a.Ab;
              if ('gsv' == n || 'nis' == n) (n = a.aa), 0 < n.B && (m.nnut = n.B);
              m.tcm = Dn(a);
              m.nmt = a.Z;
              m.bt = a.W;
              m.pst = a.$;
              m.vpaid = a.I;
              m.dur = a.l;
              m.vmtime = a.K;
              m.is = a.ga.l;
              1 <= a.g.length &&
                ((m.i0 = a.g[0].sb),
                (m.a0 = [a.g[0].pb]),
                (m.c0 = [a.g[0].Y]),
                (m.ss0 = [a.g[0].ra]),
                (n = a.g[0].position),
                (m.p0 = n ? wn(n) : void 0));
              2 <= a.g.length &&
                ((m.i1 = a.g[1].sb),
                (m.a1 = On(a.g[1].Nb, a.g[1].pb, a.g[1].Jb)),
                (m.c1 = On(a.g[1].Ob, a.g[1].Y, a.g[1].Kb)),
                (m.ss1 = On(a.g[1].Pb, a.g[1].ra, a.g[1].Lb)),
                (n = a.g[1].position),
                (m.p1 = n ? wn(n) : void 0),
                (m.mtos1 = a.g[1].Vb));
              3 <= a.g.length &&
                ((m.i2 = a.g[2].sb),
                (m.a2 = On(a.g[2].Nb, a.g[2].pb, a.g[2].Jb)),
                (m.c2 = On(a.g[2].Ob, a.g[2].Y, a.g[2].Kb)),
                (m.ss2 = On(a.g[2].Pb, a.g[2].ra, a.g[2].Lb)),
                (n = a.g[2].position),
                (m.p2 = n ? wn(n) : void 0),
                (m.mtos2 = a.g[2].Vb));
              4 <= a.g.length &&
                ((m.i3 = a.g[3].sb),
                (m.a3 = On(a.g[3].Nb, a.g[3].pb, a.g[3].Jb)),
                (m.c3 = On(a.g[3].Ob, a.g[3].Y, a.g[3].Kb)),
                (m.ss3 = On(a.g[3].Pb, a.g[3].ra, a.g[3].Lb)),
                (n = a.g[3].position),
                (m.p3 = n ? wn(n) : void 0),
                (m.mtos3 = a.g[3].Vb));
              m.cs = ln(a.ga);
              b &&
                ((m.ic = kn(a.ga)),
                (m.dvpt = k.l.h),
                (m.dvs = Km(k.h, 0.5)),
                (m.dfvs = Km(k.h, 1)),
                (m.davs = Km(k.g, 0.5)),
                (m.dafvs = Km(k.g, 1)),
                c && ((k.l.h = 0), Lm(k.h), Lm(k.g)),
                a.Za() &&
                  ((m.dtos = k.M),
                  (m.dav = k.D),
                  (m.dtoss = a.hc + 1),
                  c && ((k.M = 0), (k.D = 0), a.hc++)),
                (m.dat = k.A.h),
                (m.dft = k.G.h),
                c && ((k.A.h = 0), (k.G.h = 0)));
              m.ps = [g.o.width, g.o.height];
              m.bs = [g.g.getWidth(), g.g.getHeight()];
              m.scs = [g.A.width, g.A.height];
              m.dom = g.domain;
              a.nb && (m.vds = a.nb);
              if (0 < a.D.length || a.o)
                (b = rb(a.D)),
                  a.o && b.push(a.o),
                  (m.pings = db(b, function (u) {
                    return u.toString();
                  }));
              b = db(
                cb(a.D, function (u) {
                  return u.A();
                }),
                function (u) {
                  return u.B();
                }
              );
              sb(b);
              m.ces = b;
              a.h && (m.vmer = a.h);
              a.G && (m.vmmk = a.G);
              a.R && (m.vmiec = a.R);
              m.avms = a.aa ? a.aa.da() : 'ns';
              a.aa && Sb(m, a.aa.Ka());
              d ? ((m.c = Ml(a.pa.Y, 2)), (m.ss = Ml(a.pa.ra, 2))) : (m.tth = zl() - wl);
              m.mc = Ml(k.I, 2);
              m.nc = Ml(k.H, 2);
              m.mv = Bn(k.B);
              m.nv = Bn(k.o);
              m.lte = Ml(a.vc, 2);
              d = En(a, e);
              Pm(k);
              m.qmtos = Pm(d);
              m.qnc = Ml(d.H, 2);
              m.qmv = Bn(d.B);
              m.qnv = Bn(d.o);
              m.qas = 0.1 <= d.o ? 1 : 0;
              m.qi = a.la;
              m.avms || (m.avms = 'geo');
              m.psm = k.R.h;
              m.psv = k.R.g;
              m.psfv = k.Z.g;
              m.psa = k.X.g;
              h = Hk(h.P);
              h.length && (m.veid = h);
              a.A && Sb(m, en(a.A));
              return m;
            },
            Ln = function (a, b) {
              if (kb(Gl, b)) return !0;
              var c = a.ha[b];
              return void 0 !== c ? ((a.ha[b] = !0), !c) : !1;
            };
          var Pn = z(),
            Sn = function () {
              this.g = {};
              var a = G();
              Qn(this, a, document);
              var b = Rn();
              try {
                if ('1' == b) {
                  for (var c = a.parent; c != a.top; c = c.parent) Qn(this, c, c.document);
                  Qn(this, a.top, a.top.document);
                }
              } catch (d) {}
            },
            Rn = function () {
              var a = document.documentElement;
              try {
                if (!hf(G().top)) return '2';
                var b = [],
                  c = G(a.ownerDocument);
                for (a = c; a != c.top; a = a.parent)
                  if (a.frameElement) b.push(a.frameElement);
                  else break;
                return b && 0 != b.length ? '1' : '0';
              } catch (d) {
                return '2';
              }
            },
            Qn = function (a, b, c) {
              Ll(
                c,
                'mousedown',
                function () {
                  return Tn(a);
                },
                301
              );
              Ll(
                b,
                'scroll',
                function () {
                  return Un(a);
                },
                302
              );
              Ll(
                c,
                'touchmove',
                function () {
                  return Vn(a);
                },
                303
              );
              Ll(
                c,
                'mousemove',
                function () {
                  return Wn(a);
                },
                304
              );
              Ll(
                c,
                'keydown',
                function () {
                  return Xn(a);
                },
                305
              );
            },
            Tn = function (a) {
              Bb(a.g, function (b) {
                100000 < b.l || ++b.l;
              });
            },
            Un = function (a) {
              Bb(a.g, function (b) {
                100000 < b.g || ++b.g;
              });
            },
            Vn = function (a) {
              Bb(a.g, function (b) {
                100000 < b.g || ++b.g;
              });
            },
            Xn = function (a) {
              Bb(a.g, function (b) {
                100000 < b.h || ++b.h;
              });
            },
            Wn = function (a) {
              Bb(a.g, function (b) {
                100000 < b.o || ++b.o;
              });
            };
          var Yn = function () {
              this.g = [];
              this.h = [];
            },
            Zn = function (a, b) {
              return gb(a.g, function (c) {
                return c.la == b;
              });
            },
            $n = function (a, b) {
              return b
                ? gb(a.g, function (c) {
                    return c.sa.Oa == b;
                  })
                : null;
            },
            ao = function (a, b) {
              return gb(a.h, function (c) {
                return 2 == c.wa() && c.la == b;
              });
            },
            co = function () {
              var a = bo;
              return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : qb(a.h, a.g);
            };
          Yn.prototype.reset = function () {
            this.g = [];
            this.h = [];
          };
          var eo = function (a, b) {
              a = 1 == b.wa() ? a.g : a.h;
              var c = ib(a, function (d) {
                return d == b;
              });
              return -1 != c ? (a.splice(c, 1), b.aa && b.aa.Tb(), b.V(), !0) : !1;
            },
            fo = function (a) {
              var b = bo;
              if (eo(b, a)) {
                switch (a.wa()) {
                  case 0:
                    var c = function () {
                      return null;
                    };
                  case 2:
                    c = function () {
                      return ao(b, a.la);
                    };
                    break;
                  case 1:
                    c = function () {
                      return Zn(b, a.la);
                    };
                }
                for (var d = c(); d; d = c()) eo(b, d);
              }
            },
            go = function (a) {
              var b = bo;
              a = cb(a, function (c) {
                return !$n(b, c.sa.Oa);
              });
              b.g.push.apply(b.g, fa(a));
            },
            ho = function (a) {
              var b = bo,
                c = [];
              C(a, function (d) {
                fb(b.g, function (e) {
                  return e.sa.Oa === d.sa.Oa && e.la === d.la;
                }) || (b.g.push(d), c.push(d));
              });
            };
          Na(Yn);
          var bo = Yn.C();
          var io = function () {
              this.g = this.h = null;
            },
            jo = function (a, b) {
              if (null == a.h) return !1;
              var c = function (d, e) {
                b(d, e);
              };
              a.g = gb(a.h, function (d) {
                return null != d && d.hd();
              });
              a.g && (a.g.init(c) ? gm(a.g.g) : b(a.g.g.fb(), a.g));
              return null != a.g;
            };
          Na(io);
          var lo = function (a) {
            a = ko(a);
            lm.call(this, a.length ? a[a.length - 1] : new cm(F, 0));
            this.l = a;
            this.h = null;
          };
          t(lo, lm);
          l = lo.prototype;
          l.da = function () {
            return (this.h ? this.h : this.g).da();
          };
          l.Ka = function () {
            return (this.h ? this.h : this.g).Ka();
          };
          l.Aa = function () {
            return (this.h ? this.h : this.g).Aa();
          };
          l.init = function (a) {
            var b = !1;
            C(this.l, function (c) {
              c.initialize() && (b = !0);
            });
            b && ((this.o = a), fm(this.g, this));
            return b;
          };
          l.V = function () {
            C(this.l, function (a) {
              a.V();
            });
            lm.prototype.V.call(this);
          };
          l.hd = function () {
            return fb(this.l, function (a) {
              return a.ld();
            });
          };
          l.xb = function () {
            return fb(this.l, function (a) {
              return a.Ub();
            });
          };
          l.Qb = function (a, b, c) {
            return new tn(a, this.g, b, c);
          };
          l.Ma = function (a) {
            this.h = a.h;
          };
          var ko = function (a) {
            if (!a.length) return [];
            a = cb(a, function (c) {
              return null != c && c.ld();
            });
            for (var b = 1; b < a.length; b++) fm(a[b - 1], a[b]);
            return a;
          };
          var mo = { threshold: [0, 0.3, 0.5, 0.75, 1] },
            no = function (a, b, c, d) {
              km.call(this, a, b, c, d);
              this.G = this.D = this.B = this.H = this.o = null;
            };
          t(no, tn);
          no.prototype.xc = function () {
            var a = this;
            this.G || (this.G = zl());
            if (
              ol(298, function () {
                return oo(a);
              })
            )
              return !0;
            em(this.h, 'msf');
            return !1;
          };
          no.prototype.Tb = function () {
            if (this.o && this.l)
              try {
                this.o.unobserve(this.l),
                  this.H
                    ? (this.H.unobserve(this.l), (this.H = null))
                    : this.B && (this.B.disconnect(), (this.B = null));
              } catch (a) {}
          };
          var po = function (a) {
              return a.o && a.o.takeRecords ? a.o.takeRecords() : [];
            },
            oo = function (a) {
              if (!a.l) return !1;
              var b = a.l,
                c = a.h.g.ma,
                d = O.C().g.g;
              a.o = new c.IntersectionObserver(
                al(d, function (e) {
                  return qo(a, e);
                }),
                mo
              );
              d = al(d, function () {
                a.o.unobserve(b);
                a.o.observe(b);
                qo(a, po(a));
              });
              c.ResizeObserver
                ? ((a.H = new c.ResizeObserver(d)), a.H.observe(b))
                : c.MutationObserver &&
                  ((a.B = new v.MutationObserver(d)),
                  a.B.observe(b, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0,
                  }));
              a.o.observe(b);
              qo(a, po(a));
              return !0;
            },
            qo = function (a, b) {
              try {
                if (b.length) {
                  a.D || (a.D = zl());
                  var c = ro(b),
                    d = Qf(a.l, a.h.g.ma),
                    e = d.x,
                    f = d.y;
                  a.g = new I(
                    Math.round(f),
                    Math.round(e) + c.boundingClientRect.width,
                    Math.round(f) + c.boundingClientRect.height,
                    Math.round(e)
                  );
                  var g = Rl(c.intersectionRect);
                  a.A = xf(g, a.g.left - g.left, a.g.top - g.top);
                }
              } catch (h) {
                a.Tb(), ql(299, h);
              }
            },
            ro = function (a) {
              return eb(
                a,
                function (b, c) {
                  return b.time > c.time ? b : c;
                },
                a[0]
              );
            };
          l = no.prototype;
          l.Ja = function () {
            var a = po(this);
            0 < a.length && qo(this, a);
            tn.prototype.Ja.call(this);
          };
          l.dc = function () {};
          l.ed = function () {
            return !1;
          };
          l.Uc = function () {};
          l.Ka = function () {
            var a = {};
            return Object.assign(this.h.Ka(), ((a.niot_obs = this.G), (a.niot_cbk = this.D), a));
          };
          l.da = function () {
            return 'nio';
          };
          var so = function (a) {
            a = void 0 === a ? F : a;
            lm.call(this, new cm(a, 2));
          };
          t(so, lm);
          so.prototype.da = function () {
            return 'nio';
          };
          so.prototype.xb = function () {
            var a = Dc;
            return a && 0 <= a.toLowerCase().indexOf('cobalt')
              ? !1
              : !P.C().h && null != this.g.g.ma.IntersectionObserver;
          };
          so.prototype.Qb = function (a, b, c) {
            return new no(a, this.g, b, c);
          };
          var uo = function () {
            var a = to();
            cm.call(this, F.top, a, 'geo');
          };
          t(uo, cm);
          uo.prototype.R = function () {
            return P.C().g;
          };
          uo.prototype.Ub = function () {
            var a = to();
            this.J !== a &&
              (this.g != this && a > this.g.J && ((this.g = this), dm(this)), (this.J = a));
            return 2 == a;
          };
          var to = function () {
            O.C();
            var a = P.C();
            return a.l || a.h ? 0 : 2;
          };
          Na(uo);
          var vo = function () {};
          Na(vo);
          var wo = function () {
              this.done = !1;
              this.g = { Zd: 0, Tc: 0, eh: 0, Zc: 0, rc: -1, ee: 0, de: 0, fe: 0 };
              this.A = null;
              this.B = !1;
              this.h = null;
              this.H = 0;
              this.l = new am(this);
            },
            zo = function () {
              var a = xo;
              a.B ||
                ((a.B = !0),
                yo(a, function (b) {
                  for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
                  return a.o.apply(a, fa(c));
                }),
                a.o());
            };
          wo.prototype.$ = function () {
            Ao(this, co(), !1);
          };
          var Bo = function () {
              vo.C();
              var a = io.C();
              null != a.g && a.g.g ? gm(a.g.g) : Xl(P.C());
            },
            Ao = function (a, b, c) {
              if (!a.done && (a.l.cancel(), 0 != b.length)) {
                a.h = null;
                try {
                  Bo();
                  var d = zl(),
                    e = O.C();
                  e.B = d;
                  if (null != io.C().g) for (e = 0; e < b.length; e++) an(b[e], d, c);
                  else fl(hl, '', { strategy_not_selected: 1, bin: e.h }, !0, void 0);
                  for (d = 0; d < b.length; d++) bn(b[d]);
                  ++a.g.Zc;
                  O.C();
                } finally {
                  c
                    ? C(b, function (f) {
                        f.pa.Y = 0;
                      })
                    : bm(a.l);
                }
              }
            },
            yo = function (a, b) {
              if (!a.A) {
                b = pl(142, b);
                Uk();
                var c = rg(oe);
                c && De(oe, c, b, { capture: !1 }) && (a.A = b);
              }
            };
          wo.prototype.o = function () {
            var a = $l(),
              b = zl();
            a
              ? (yl ||
                  ((ul = b),
                  C(bo.g, function (c) {
                    var d = c.ua();
                    d.U = pn(d, b, 1 != c.ca);
                  })),
                (yl = !0))
              : ((this.H = Co(this, b)),
                (yl = !1),
                (wl = b),
                C(bo.g, function (c) {
                  c.Eb && (c.ua().J = b);
                }));
            Ao(this, co(), !a);
          };
          var Do = function () {
              var a = io.C();
              if (null != a.g) {
                var b = a.g;
                C(co(), function (c) {
                  return Zm(c, b);
                });
              }
            },
            Co = function (a, b) {
              a = a.H;
              yl && (a += b - ul);
              return a;
            },
            Eo = function (a) {
              var b = xo;
              a =
                void 0 === a
                  ? function () {
                      return {};
                    }
                  : a;
              ll.Gc('av-js');
              hl.g = 0.01;
              nl([
                function (c) {
                  var d = O.C(),
                    e = {};
                  e = ((e.bin = d.h), (e.type = 'error'), e);
                  d = Gk(d.P);
                  if (!b.h) {
                    var f = F.document,
                      g = 0 <= vl ? zl() - vl : -1,
                      h = zl();
                    -1 == b.g.rc && (g = h);
                    var k = P.C(),
                      n = O.C(),
                      m = Gk(n.P),
                      u = co();
                    try {
                      if (0 < u.length) {
                        var p = k.g;
                        p && (m.bs = [p.getWidth(), p.getHeight()]);
                        var w = k.o;
                        w && (m.ps = [w.width, w.height]);
                        F.screen && (m.scs = [F.screen.width, F.screen.height]);
                      } else
                        (m.url = encodeURIComponent(F.location.href.substring(0, 512))),
                          f.referrer &&
                            (m.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                      m.tt = g;
                      m.pt = vl;
                      m.bin = n.h;
                      void 0 !== F.google_osd_load_pub_page_exp &&
                        (m.olpp = F.google_osd_load_pub_page_exp);
                      m.deb = [
                        1,
                        b.g.Zd,
                        b.g.Tc,
                        b.g.Zc,
                        b.g.rc,
                        0,
                        b.l.h,
                        b.g.ee,
                        b.g.de,
                        b.g.fe,
                      ].join('-');
                      m.tvt = Co(b, h);
                      k.h && (m.inapp = 1);
                      if (null !== F && F != F.top) {
                        0 < u.length &&
                          (m.iframe_loc = encodeURIComponent(F.location.href.substring(0, 512)));
                        var x = k.J;
                        m.is = [x.getWidth(), x.getHeight()];
                      }
                    } catch (la) {
                      m.error = 1;
                    }
                    b.h = m;
                  }
                  w = b.h;
                  p = {};
                  for (var B in w) p[B] = w[B];
                  B = O.C().g;
                  if (1 == Fk(B.l, 'prf')) {
                    w = new Zk();
                    x = B.g;
                    f = 0;
                    -1 < x.g && (f = x.o.g.now() - x.g);
                    w = ie(w, 1, x.l + f, 0);
                    x = B.g;
                    w = ie(w, 5, -1 < x.g ? x.h + 1 : x.h, 0);
                    w = ie(w, 2, B.h.g.l(), 0);
                    w = ie(w, 3, B.h.g.h(), 0);
                    x = ie(w, 4, B.h.g.g(), 0);
                    B = {};
                    w = new Wd();
                    f = ge(x, 1);
                    if (0 !== f && ((g = f), null != g)) {
                      fd(w.g, 9);
                      f = w.g;
                      k = g;
                      k = (g = 0 > k ? 1 : 0) ? -k : k;
                      if (0 === k) (cd = 0 < 1 / k ? 0 : 2147483648), (bd = 0);
                      else if (isNaN(k)) (cd = 2147483647), (bd = 4294967295);
                      else if (1.7976931348623157e308 < k)
                        (cd = ((g << 31) | 2146435072) >>> 0), (bd = 0);
                      else if (2.2250738585072014e-308 > k)
                        (k /= Math.pow(2, -1074)),
                          (cd = ((g << 31) | (k / 4294967296)) >>> 0),
                          (bd = k >>> 0);
                      else {
                        n = k;
                        h = 0;
                        if (2 <= n) for (; 2 <= n && 1023 > h; ) h++, (n /= 2);
                        else for (; 1 > n && -1022 < h; ) (n *= 2), h--;
                        k *= Math.pow(2, -h);
                        cd = ((g << 31) | ((h + 1023) << 20) | ((1048576 * k) & 1048575)) >>> 0;
                        bd = (4503599627370496 * k) >>> 0;
                      }
                      gd(f, bd);
                      gd(f, cd);
                    }
                    f = ee(x, 2, 0);
                    0 !== f && Xd(w, 2, f);
                    f = ee(x, 3, 0);
                    0 !== f && Xd(w, 3, f);
                    f = ee(x, 4, 0);
                    0 !== f && Xd(w, 4, f);
                    f = ee(x, 5, 0);
                    if (0 !== f && null != f && null != f)
                      if ((fd(w.g, 40), (x = w.g), 0 <= f)) fd(x, f);
                      else {
                        for (g = 0; 9 > g; g++) x.g.push((f & 127) | 128), (f >>= 7);
                        x.g.push(1);
                      }
                    x = new Uint8Array(w.l + w.g.length());
                    g = w.h;
                    h = g.length;
                    for (k = f = 0; k < h; k++) (n = g[k]), x.set(n, f), (f += n.length);
                    g = ed(w.g);
                    x.set(g, f);
                    w.h = [x];
                    B = ((B.pf = Sd(x)), B);
                  } else B = {};
                  Sb(p, B);
                  Sb(c, e, d, p, a());
                  if ((e = wm())) (d = {}), Sb(c, ((d.v = encodeURIComponent(e)), d));
                },
              ]);
            };
          Na(wo);
          var xo = wo.C();
          var Fo = null,
            Go = '',
            Ho = !1,
            Io = function () {
              var a = Fo || F;
              if (!a) return '';
              var b = [];
              if (!a.location || !a.location.href) return '';
              b.push('url=' + encodeURIComponent(a.location.href.substring(0, 512)));
              a.document &&
                a.document.referrer &&
                b.push('referrer=' + encodeURIComponent(a.document.referrer.substring(0, 512)));
              return b.join('&');
            };
          var Jo = function (a) {
              return function (b) {
                return void 0 === b[a] ? 0 : b[a];
              };
            },
            Lo = function () {
              var a = [0, 2, 4];
              return function (b) {
                b = b.tos;
                if (Array.isArray(b)) {
                  for (var c = Array(b.length), d = 0; d < b.length; d++)
                    c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                  return void 0 !== a ? Ko(c, a) : c;
                }
              };
            },
            Mo = function (a, b, c, d) {
              c = void 0 === c ? !0 : c;
              d =
                void 0 === d
                  ? function () {
                      return !0;
                    }
                  : d;
              return function (e) {
                var f = e[a];
                if (Array.isArray(f) && d(e)) return Ko(f, b, c);
              };
            },
            No = function (a, b) {
              return function (c) {
                return b(c) ? c[a] : void 0;
              };
            },
            Oo = function (a) {
              return function (b) {
                for (var c = 0; c < a.length; c++)
                  if (a[c] === b.e || (void 0 === a[c] && !b.hasOwnProperty('e'))) return !0;
                return !1;
              };
            },
            Ko = function (a, b, c) {
              return void 0 === c || c
                ? cb(a, function (d, e) {
                    return kb(b, e);
                  })
                : db(b, function (d, e, f) {
                    return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function (g, h) {
                      return g + h;
                    }, 0);
                  });
            };
          var Po = Oo([void 0, 1, 2, 3, 4, 8, 16]),
            Qo = Oo([void 0, 4, 8, 16]),
            Ro = {
              sv: 'sv',
              cb: 'cb',
              e: 'e',
              nas: 'nas',
              msg: 'msg',
              if: 'if',
              sdk: 'sdk',
              p: 'p',
              p0: No('p0', Qo),
              p1: No('p1', Qo),
              p2: No('p2', Qo),
              p3: No('p3', Qo),
              cp: 'cp',
              tos: 'tos',
              mtos: 'mtos',
              mtos1: Mo('mtos1', [0, 2, 4], !1, Qo),
              mtos2: Mo('mtos2', [0, 2, 4], !1, Qo),
              mtos3: Mo('mtos3', [0, 2, 4], !1, Qo),
              mcvt: 'mcvt',
              ps: 'ps',
              scs: 'scs',
              bs: 'bs',
              vht: 'vht',
              mut: 'mut',
              a: 'a',
              a0: No('a0', Qo),
              a1: No('a1', Qo),
              a2: No('a2', Qo),
              a3: No('a3', Qo),
              ft: 'ft',
              dft: 'dft',
              at: 'at',
              dat: 'dat',
              as: 'as',
              vpt: 'vpt',
              gmm: 'gmm',
              std: 'std',
              efpf: 'efpf',
              swf: 'swf',
              nio: 'nio',
              px: 'px',
              nnut: 'nnut',
              vmer: 'vmer',
              vmmk: 'vmmk',
              vmiec: 'vmiec',
              nmt: 'nmt',
              tcm: 'tcm',
              bt: 'bt',
              pst: 'pst',
              vpaid: 'vpaid',
              dur: 'dur',
              vmtime: 'vmtime',
              dtos: 'dtos',
              dtoss: 'dtoss',
              dvs: 'dvs',
              dfvs: 'dfvs',
              dvpt: 'dvpt',
              fmf: 'fmf',
              vds: 'vds',
              is: 'is',
              i0: 'i0',
              i1: 'i1',
              i2: 'i2',
              i3: 'i3',
              ic: 'ic',
              cs: 'cs',
              c: 'c',
              c0: No('c0', Qo),
              c1: No('c1', Qo),
              c2: No('c2', Qo),
              c3: No('c3', Qo),
              mc: 'mc',
              nc: 'nc',
              mv: 'mv',
              nv: 'nv',
              qmt: No('qmtos', Po),
              qnc: No('qnc', Po),
              qmv: No('qmv', Po),
              qnv: No('qnv', Po),
              raf: 'raf',
              rafc: 'rafc',
              lte: 'lte',
              ces: 'ces',
              tth: 'tth',
              femt: 'femt',
              femvt: 'femvt',
              emc: 'emc',
              emuc: 'emuc',
              emb: 'emb',
              avms: 'avms',
              nvat: 'nvat',
              qi: 'qi',
              psm: 'psm',
              psv: 'psv',
              psfv: 'psfv',
              psa: 'psa',
              pnk: 'pnk',
              pnc: 'pnc',
              pnmm: 'pnmm',
              pns: 'pns',
              ptlt: 'ptlt',
              pngs: 'pings',
              veid: 'veid',
              ssb: 'ssb',
              ss0: No('ss0', Qo),
              ss1: No('ss1', Qo),
              ss2: No('ss2', Qo),
              ss3: No('ss3', Qo),
              dc_rfl: 'urlsigs',
              obd: 'obd',
              omidp: 'omidp',
              omidr: 'omidr',
              omidv: 'omidv',
              omida: 'omida',
              omids: 'omids',
              omidpv: 'omidpv',
              omidam: 'omidam',
              omidct: 'omidct',
              omidia: 'omidia',
            },
            So = {
              c: Jo('c'),
              at: 'at',
              atos: Mo('atos', [0, 2, 4]),
              ta: (function (a, b) {
                return function (c) {
                  if (void 0 === c[a]) return b;
                };
              })('tth', '1'),
              a: 'a',
              dur: 'dur',
              p: 'p',
              tos: Lo(),
              j: 'dom',
              mtos: Mo('mtos', [0, 2, 4]),
              gmm: 'gmm',
              gdr: 'gdr',
              ss: Jo('ss'),
              vsv: xb('w2'),
              t: 't',
            },
            To = {
              atos: 'atos',
              amtos: 'amtos',
              avt: Mo('atos', [2]),
              davs: 'davs',
              dafvs: 'dafvs',
              dav: 'dav',
              ss: Jo('ss'),
              t: 't',
            },
            Uo = {
              a: 'a',
              tos: Lo(),
              at: 'at',
              c: Jo('c'),
              mtos: Mo('mtos', [0, 2, 4]),
              dur: 'dur',
              fs: 'fs',
              p: 'p',
              vpt: 'vpt',
              vsv: xb('ias_w2'),
              dom: 'dom',
              gmm: 'gmm',
              gdr: 'gdr',
              t: 't',
            },
            Vo = {
              tos: Lo(),
              at: 'at',
              c: Jo('c'),
              mtos: Mo('mtos', [0, 2, 4]),
              p: 'p',
              vpt: 'vpt',
              vsv: xb('dv_w4'),
              gmm: 'gmm',
              gdr: 'gdr',
              dom: 'dom',
              t: 't',
              mv: 'mv',
              qmpt: Mo('qmtos', [0, 2, 4]),
              qvs: (function (a, b) {
                return function (c) {
                  var d = c[a];
                  if ('number' === typeof d)
                    return db(b, function (e) {
                      return 0 < d && d >= e ? 1 : 0;
                    });
                };
              })('qnc', [1, 0.5, 0]),
              qmv: 'qmv',
              qa: 'qas',
              a: 'a',
            };
          var Xo = function (a, b) {
              var c = { sv: '882', cb: 'j' };
              c.nas = bo.g.length;
              c.msg = a;
              void 0 !== b && (a = Wo(b)) && (c.e = Hl[a]);
              return c;
            },
            Yo = function (a) {
              return 0 == a.lastIndexOf('custom_metric_viewable', 0);
            },
            Wo = function (a) {
              var b = Yo(a) ? 'custom_metric_viewable' : a.toLowerCase();
              return Nb(function (c) {
                return c == b;
              });
            };
          var Zo = { Df: 'visible', jf: 'audible', Gg: 'time', Ig: 'timetype' },
            $o = {
              visible: function (a) {
                return /^(100|[0-9]{1,2})$/.test(a);
              },
              audible: function (a) {
                return '0' == a || '1' == a;
              },
              timetype: function (a) {
                return 'mtos' == a || 'tos' == a;
              },
              time: function (a) {
                return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a);
              },
            },
            ap = function () {
              this.g = void 0;
              this.h = !1;
              this.l = 0;
              this.o = -1;
              this.A = 'tos';
            },
            bp = function (a) {
              try {
                var b = a.split(',');
                return b.length > Ib(Zo).length
                  ? null
                  : eb(
                      b,
                      function (c, d) {
                        d = d.toLowerCase().split('=');
                        if (2 != d.length || void 0 === $o[d[0]] || !$o[d[0]](d[1]))
                          throw Error('Entry (' + d[0] + ', ' + d[1] + ') is invalid.');
                        c[d[0]] = d[1];
                        return c;
                      },
                      {}
                    );
              } catch (c) {
                return null;
              }
            },
            cp = function (a, b) {
              if (void 0 == a.g) return 0;
              switch (a.A) {
                case 'mtos':
                  return a.h ? Jm(b.g, a.g) : Jm(b.h, a.g);
                case 'tos':
                  return a.h ? Hm(b.g, a.g) : Hm(b.h, a.g);
              }
              return 0;
            };
          var dp = function (a, b, c, d) {
            sn.call(this, b, d);
            this.J = a;
            this.H = c;
          };
          t(dp, sn);
          dp.prototype.B = function () {
            return this.J;
          };
          dp.prototype.A = function () {
            return !0;
          };
          dp.prototype.l = function (a) {
            var b = a.ua(),
              c = a.getDuration();
            return fb(this.H, function (d) {
              if (void 0 != d.g) var e = cp(d, b);
              else
                b: {
                  switch (d.A) {
                    case 'mtos':
                      e = d.h ? b.A.l : b.l.g;
                      break b;
                    case 'tos':
                      e = d.h ? b.A.g : b.l.g;
                      break b;
                  }
                  e = 0;
                }
              0 == e
                ? (d = !1)
                : ((d = -1 != d.l ? d.l : void 0 !== c && 0 < c ? d.o * c : -1),
                  (d = -1 != d && e >= d));
              return d;
            });
          };
          var ep = function (a) {
            sn.call(this, 'fully_viewable_audible_half_duration_impression', a);
          };
          t(ep, sn);
          ep.prototype.l = function (a) {
            var b = Hm(a.ua().g, 1);
            return Fn(a, b);
          };
          var fp = function (a, b) {
            sn.call(this, a, b);
          };
          t(fp, sn);
          fp.prototype.l = function (a) {
            return a.ua().Za();
          };
          var gp = function () {
            this.h = this.o = this.B = this.A = this.l = this.g = '';
          };
          var hp = function () {},
            ip = function (a, b, c, d, e) {
              var f = {};
              if (void 0 !== a)
                if (null != b)
                  for (var g in b) {
                    var h = b[g];
                    g in Object.prototype ||
                      (null != h && (f[g] = 'function' === typeof h ? h(a) : a[h]));
                  }
                else Sb(f, a);
              void 0 !== c && Sb(f, c);
              a = tm(rm(new pm(), f));
              0 < a.length &&
                void 0 !== d &&
                void 0 !== e &&
                ((e = e(a)), (a += '&' + d + '=' + e));
              return a;
            };
          var jp = function () {};
          t(jp, hp);
          jp.prototype.g = function (a) {
            var b = new gp();
            b.g = ip(a, Ro);
            b.l = ip(a, To);
            return b;
          };
          var kp = function (a, b, c) {
            vn.call(this, a, b, c);
          };
          t(kp, vn);
          kp.prototype.o = function () {
            var a = La('ima.admob.getViewability'),
              b = Fk(this.P, 'queryid');
            'function' === typeof a && b && a(b);
          };
          kp.prototype.da = function () {
            return 'gsv';
          };
          var lp = function (a) {
            a = void 0 === a ? F : a;
            lm.call(this, new cm(a, 2));
          };
          t(lp, lm);
          lp.prototype.da = function () {
            return 'gsv';
          };
          lp.prototype.xb = function () {
            var a = P.C();
            O.C();
            return a.h && !1;
          };
          lp.prototype.Qb = function (a, b, c) {
            return new kp(this.g, b, c);
          };
          var mp = function (a, b, c) {
            vn.call(this, a, b, c);
          };
          t(mp, vn);
          mp.prototype.o = function () {
            var a = this,
              b = La('ima.bridge.getNativeViewability'),
              c = Fk(this.P, 'queryid');
            'function' === typeof b &&
              c &&
              b(c, function (d) {
                Ob(d) && a.B++;
                var e = d.opt_nativeViewVisibleBounds || {},
                  f = d.opt_nativeViewHidden;
                a.g = Sl(d.opt_nativeViewBounds || {});
                var g = a.h.l;
                g.g = f ? wf(un) : Sl(e);
                a.timestamp = d.opt_nativeTime || -1;
                P.C().g = g.g;
                d = d.opt_nativeVolume;
                void 0 !== d && (g.volume = d);
              });
          };
          mp.prototype.da = function () {
            return 'nis';
          };
          var np = function (a) {
            a = void 0 === a ? F : a;
            lm.call(this, new cm(a, 2));
          };
          t(np, lm);
          np.prototype.da = function () {
            return 'nis';
          };
          np.prototype.xb = function () {
            var a = P.C();
            O.C();
            return a.h && !1;
          };
          np.prototype.Qb = function (a, b, c) {
            return new mp(this.g, b, c);
          };
          var op = function () {
            cm.call(this, F, 2, 'mraid');
            this.Z = 0;
            this.K = this.L = !1;
            this.H = null;
            this.h = Il(this.ma);
            this.l.g = new I(0, 0, 0, 0);
            this.ea = !1;
          };
          t(op, cm);
          op.prototype.Ub = function () {
            return null != this.h.ya;
          };
          op.prototype.N = function () {
            var a = {};
            this.Z && (a.mraid = this.Z);
            this.L && (a.mlc = 1);
            a.mtop = this.h.Ue;
            this.H && (a.mse = this.H);
            this.ea && (a.msc = 1);
            a.mcp = this.h.Db;
            return a;
          };
          op.prototype.B = function (a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            try {
              return this.h.ya[a].apply(this.h.ya, c);
            } catch (e) {
              ql(538, e, 0.01, function (f) {
                f.method = a;
              });
            }
          };
          var pp = function (a, b, c) {
            a.B('addEventListener', b, c);
          };
          op.prototype.initialize = function () {
            var a = this;
            if (this.G) return !this.rb();
            this.G = !0;
            if (2 === this.h.Db) return (this.H = 'ng'), em(this, 'w'), !1;
            if (1 === this.h.Db) return (this.H = 'mm'), em(this, 'w'), !1;
            P.C().G = !0;
            this.ma.document.readyState && 'complete' == this.ma.document.readyState
              ? qp(this)
              : Ll(
                  this.ma,
                  'load',
                  function () {
                    Uk().setTimeout(
                      pl(292, function () {
                        return qp(a);
                      }),
                      100
                    );
                  },
                  292
                );
            return !0;
          };
          var qp = function (a) {
              O.C().A = !!a.B('isViewable');
              pp(a, 'viewableChange', rp);
              'loading' === a.B('getState') ? pp(a, 'ready', sp) : tp(a);
            },
            tp = function (a) {
              'string' === typeof a.h.ya.AFMA_LIDAR
                ? ((a.L = !0), up(a))
                : ((a.h.Db = 3), (a.H = 'nc'), em(a, 'w'));
            },
            up = function (a) {
              a.K = !1;
              var b = 1 == Fk(O.C().P, 'rmmt'),
                c = !!a.B('isViewable');
              (b ? !c : 1) &&
                Uk().setTimeout(
                  pl(524, function () {
                    a.K || (vp(a), ql(540, Error()), (a.H = 'mt'), em(a, 'w'));
                  }),
                  500
                );
              wp(a);
              pp(a, a.h.ya.AFMA_LIDAR, xp);
            },
            wp = function (a) {
              var b = 1 == Fk(O.C().P, 'sneio'),
                c = void 0 !== a.h.ya.AFMA_LIDAR_EXP_1,
                d = void 0 !== a.h.ya.AFMA_LIDAR_EXP_2;
              (b = b && d) && (a.h.ya.AFMA_LIDAR_EXP_2 = !0);
              c && (a.h.ya.AFMA_LIDAR_EXP_1 = !b);
            },
            vp = function (a) {
              a.B('removeEventListener', a.h.ya.AFMA_LIDAR, xp);
              a.L = !1;
            };
          op.prototype.W = function () {
            var a = P.C(),
              b = yp(this, 'getMaxSize');
            a.g = new I(0, b.width, b.height, 0);
          };
          op.prototype.X = function () {
            P.C().A = yp(this, 'getScreenSize');
          };
          var yp = function (a, b) {
            if ('loading' === a.B('getState')) return new Je(-1, -1);
            b = a.B(b);
            if (!b) return new Je(-1, -1);
            a = parseInt(b.width, 10);
            b = parseInt(b.height, 10);
            return isNaN(a) || isNaN(b) ? new Je(-1, -1) : new Je(a, b);
          };
          op.prototype.V = function () {
            vp(this);
            cm.prototype.V.call(this);
          };
          var sp = function () {
              try {
                var a = op.C();
                a.B('removeEventListener', 'ready', sp);
                tp(a);
              } catch (b) {
                ql(541, b);
              }
            },
            xp = function (a, b) {
              try {
                var c = op.C();
                c.K = !0;
                var d = a ? new I(a.y, a.x + a.width, a.y + a.height, a.x) : new I(0, 0, 0, 0);
                var e = zl(),
                  f = $l();
                var g = new Bl(e, f, c);
                g.g = d;
                g.volume = b;
                c.Ma(g);
              } catch (h) {
                ql(542, h);
              }
            },
            rp = function (a) {
              var b = O.C(),
                c = op.C();
              a && !b.A && ((b.A = !0), (c.ea = !0), c.H && em(c, 'w', !0));
            };
          Na(op);
          var Ap = function () {
            this.l = this.N = !1;
            this.g = null;
            this.o = new jp();
            this.h = null;
            var a = {};
            this.L =
              ((a.start = this.ve),
              (a.firstquartile = this.qe),
              (a.midpoint = this.se),
              (a.thirdquartile = this.we),
              (a.complete = this.oe),
              (a.pause = this.Bc),
              (a.resume = this.sd),
              (a.skip = this.ue),
              (a.viewable_impression = this.La),
              (a.mute = this.kb),
              (a.unmute = this.kb),
              (a.fullscreen = this.re),
              (a.exitfullscreen = this.pe),
              (a.fully_viewable_audible_half_duration_impression = this.La),
              (a.measurable_impression = this.La),
              (a.abandon = this.Bc),
              (a.engagedview = this.La),
              (a.impression = this.La),
              (a.creativeview = this.La),
              (a.progress = this.kb),
              (a.custom_metric_viewable = this.La),
              (a.bufferstart = this.Bc),
              (a.bufferfinish = this.sd),
              a);
            a = {};
            this.W =
              ((a.overlay_resize = this.te),
              (a.abandon = this.pc),
              (a.close = this.pc),
              (a.collapse = this.pc),
              (a.overlay_unmeasurable_impression = function (b) {
                return Nn(b, 'overlay_unmeasurable_impression', $l());
              }),
              (a.overlay_viewable_immediate_impression = function (b) {
                return Nn(b, 'overlay_viewable_immediate_impression', $l());
              }),
              (a.overlay_unviewable_impression = function (b) {
                return Nn(b, 'overlay_unviewable_impression', $l());
              }),
              (a.overlay_viewable_end_of_session_impression = function (b) {
                return Nn(b, 'overlay_viewable_end_of_session_impression', $l());
              }),
              a);
            O.C().h = 3;
            zp(this);
            this.R = !1;
          };
          Ap.prototype.B = function (a) {
            Ym(a, !1);
            fo(a);
          };
          Ap.prototype.J = function () {};
          var Bp = function (a, b, c, d) {
            a = a.H(null, d, !0, b);
            a.B = c;
            go([a]);
            return a;
          };
          Ap.prototype.H = function (a, b, c, d) {
            var e = this;
            this.h || (this.h = this.Yc());
            b = c ? b : -1;
            a =
              null == this.h || this.l
                ? new zn(F, a, b, 7)
                : new zn(F, a, b, 7, new sn('measurable_impression', this.h), Cp(this));
            a.la = d;
            Dk(a.P);
            Ek(a.P, 'queryid', a.la);
            a.Cc('');
            cn(
              a,
              function (f) {
                for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
                return e.K.apply(e, fa(g));
              },
              function (f) {
                for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
                return e.U.apply(e, fa(g));
              }
            );
            (d = io.C().g) && Zm(a, d);
            a.sa.Oa && vo.C();
            return a;
          };
          var Dp = function (a, b, c) {
              jk(b);
              var d = a.h;
              C(b, function (e) {
                var f = db(e.g, function (g) {
                  var h = bp(g);
                  if (null == h) g = null;
                  else if (
                    ((g = new ap()),
                    null != h.visible && (g.g = h.visible / 100),
                    null != h.audible && (g.h = 1 == h.audible),
                    null != h.time)
                  ) {
                    var k = 'mtos' == h.timetype ? 'mtos' : 'tos',
                      n = dc(h.time, '%') ? '%' : 'ms';
                    h = parseInt(h.time, 10);
                    '%' == n && (h /= 100);
                    'ms' == n ? ((g.l = h), (g.o = -1)) : ((g.l = -1), (g.o = h));
                    g.A = void 0 === k ? 'tos' : k;
                  }
                  return g;
                });
                fb(f, function (g) {
                  return null == g;
                }) || Gn(c, new dp(e.id, e.event, f, d));
              });
            },
            Cp = function (a) {
              a = a.h;
              return [new fp('viewable_impression', a), new ep(a)];
            },
            Ep = function () {
              var a = [];
              P.C();
              var b = O.C();
              a.push(uo.C());
              Fk(b.P, 'mvp_lv') && a.push(op.C());
              b = [new lp(), new np()];
              b.push(new lo(a));
              b.push(new so(F));
              return b;
            },
            Gp = function (a) {
              if (!a.N) {
                a.N = !0;
                try {
                  var b = zl(),
                    c = O.C(),
                    d = P.C();
                  vl = b;
                  c.o = 79463069;
                  'o' !== a.g && (Fo = Xf(F).ma);
                  if (Vk()) {
                    xo.g.Tc = 0;
                    xo.g.rc = zl() - b;
                    var e = Ep(),
                      f = io.C();
                    f.h = e;
                    jo(f, function () {
                      Fp(a);
                    })
                      ? xo.done || (Do(), fm(f.g.g, a), zo())
                      : d.l
                      ? Fp(a)
                      : zo();
                  } else Ho = !0;
                } catch (g) {
                  throw (bo.reset(), g);
                }
              }
            },
            Hp = function (a) {
              xo.l.cancel();
              Go = a;
              xo.done = !0;
            },
            Ip = function (a) {
              if (a.g) return a.g;
              var b = io.C().g;
              if (b)
                switch (b.da()) {
                  case 'nis':
                    a.g = 'n';
                    break;
                  case 'gsv':
                    a.g = 'm';
                }
              a.g || (a.g = 'h');
              return a.g;
            },
            Jp = function (a, b, c) {
              if (null == a.h) return (b.nb |= 4), !1;
              a = a.h.report(c, b);
              b.nb |= a;
              return 0 == a;
            };
          Ap.prototype.gb = function (a) {
            switch (a.Aa()) {
              case 0:
                if ((a = io.C().g)) (a = a.g), lb(a.A, this), a.D && this.Ba() && im(a);
                Fp(this);
                break;
              case 2:
                zo(), Fk(O.C().P, 'mpv') && Kp();
            }
          };
          Ap.prototype.Ma = function () {};
          Ap.prototype.Ba = function () {
            return !1;
          };
          var Kp = function () {
              C(bo.g, function (a) {
                return An(a);
              });
            },
            Fp = function (a) {
              if (!a.R) {
                a.R = !0;
                var b = [new so(F)],
                  c = io.C();
                c.h = b;
                jo(c, function () {
                  Hp('i');
                })
                  ? xo.done || (Do(), fm(c.g.g, a), zo())
                  : Hp('i');
              }
            };
          Ap.prototype.U = function (a, b) {
            a.Ya = !0;
            switch (a.wa()) {
              case 1:
                Lp(this, a, b);
                break;
              case 2:
                this.Ec(a);
            }
            this.Fc(a);
          };
          var Lp = function (a, b, c) {
            if (!b.Da) {
              var d = Nn(b, 'start', $l());
              a = a.o.g(d).g;
              var e = { id: 'lidarv' };
              e.r = c;
              e.v = '882v';
              ef(a, function (f, g) {
                return (e[f] = 'mtos' == f || 'tos' == f ? g : encodeURIComponent(g));
              });
              c = Io();
              ef(c, function (f, g) {
                return (e[f] = encodeURIComponent(g));
              });
              c = '//pagead2.googlesyndication.com/pagead/gen_204?' + tm(rm(new pm(), e));
              xm(c);
              b.Da = !0;
            }
          };
          l = Ap.prototype;
          l.ve = function (a) {
            Kn(a, 0);
            return Nn(a, 'start', $l());
          };
          l.kb = function (a, b, c) {
            Ao(xo, [a], !$l());
            return this.La(a, b, c);
          };
          l.La = function (a, b, c) {
            return Nn(a, c, $l());
          };
          l.qe = function (a) {
            return Mp(a, 'firstquartile', 1);
          };
          l.se = function (a) {
            a.ea = !0;
            return Mp(a, 'midpoint', 2);
          };
          l.we = function (a) {
            return Mp(a, 'thirdquartile', 3);
          };
          l.oe = function (a) {
            var b = Mp(a, 'complete', 4);
            0 != a.ca && (a.ca = 3);
            return b;
          };
          var Mp = function (a, b, c) {
            Ao(xo, [a], !$l());
            Kn(a, c);
            4 != c && Jn(a.N, c, a.Fb);
            return Nn(a, b, $l());
          };
          l = Ap.prototype;
          l.sd = function (a, b, c) {
            b = $l();
            2 != a.ca || b || (a.ua().J = zl());
            Ao(xo, [a], !b);
            2 == a.ca && (a.ca = 1);
            return Nn(a, c, b);
          };
          l.ue = function (a, b) {
            b = this.kb(a, b || {}, 'skip');
            0 != a.ca && (a.ca = 3);
            return b;
          };
          l.re = function (a, b) {
            Ym(a, !0);
            return this.kb(a, b || {}, 'fullscreen');
          };
          l.pe = function (a, b) {
            Ym(a, !1);
            return this.kb(a, b || {}, 'exitfullscreen');
          };
          l.Bc = function (a, b, c) {
            b = a.ua();
            b.U = pn(b, zl(), 1 != a.ca);
            Ao(xo, [a], !$l());
            1 == a.ca && (a.ca = 2);
            return Nn(a, c, $l());
          };
          l.te = function (a) {
            Ao(xo, [a], !$l());
            return a.h();
          };
          l.pc = function (a) {
            Ao(xo, [a], !$l());
            this.rd(a);
            0 != a.ca && (a.ca = 3);
            return a.h();
          };
          var zp = function (a) {
              Eo(function () {
                var b = Np();
                null != a.g && (b.sdk = a.g);
                var c = io.C();
                null != c.g && (b.avms = c.g.da());
                return b;
              });
            },
            Op = function (a, b, c, d) {
              var e = $n(bo, c);
              null !== e && e.la !== b && (a.B(e), (e = null));
              e ||
                ((b = a.H(c, zl(), !1, b)),
                0 == bo.h.length && (O.C().o = 79463069),
                ho([b]),
                (e = b),
                (e.B = Ip(a)),
                d && (e.Pa = d));
              return e;
            };
          Ap.prototype.K = function () {};
          var Qp = function (a, b) {
            b.G = 0;
            for (var c in Dl) null == a[c] && (b.G |= Dl[c]);
            Pp(a, 'currentTime');
            Pp(a, 'duration');
          };
          l = Ap.prototype;
          l.Ec = function () {};
          l.rd = function () {};
          l.kd = function () {};
          l.Fc = function () {};
          l.Yc = function () {};
          var Pp = function (a, b) {
              var c = a[b];
              void 0 !== c && 0 < c && (a[b] = Math.floor(1000 * c));
            },
            Np = function () {
              var a = P.C(),
                b = {};
              return (b.sv = '882'), (b['if'] = a.l ? '1' : '0'), (b.nas = String(bo.g.length)), b;
            };
          var Rp = z(),
            Sp = !1,
            Tp = !1,
            Up = !1,
            Vp = function (a) {
              return !a ||
                'function' !== typeof a ||
                0 > String(Function.prototype.toString).indexOf('[native code]')
                ? !1
                : (0 <= String(a).indexOf('[native code]') && !0) || !1;
            },
            Wp = function (a) {
              return !!((1 << a) & Rp);
            },
            Xp = [
              function (a) {
                return !(!a.chrome || !a.chrome.webstore);
              },
              function (a) {
                return !!a.document.documentMode;
              },
              function (a) {
                return !!a.document.fonts.ready;
              },
              function () {
                return Wp(0);
              },
              function (a) {
                return !!a.ActiveXObject;
              },
              function (a) {
                return !!a.chrome;
              },
              function (a) {
                return !!a.navigator.serviceWorker;
              },
              function (a) {
                return !!a.opera;
              },
              function (a) {
                return !!a.sidebar;
              },
              function () {
                return !+'\x0B1';
              },
              function () {
                return Wp(1);
              },
              function (a) {
                return !a.ActiveXObject;
              },
              function (a) {
                return '-ms-ime-align' in a.document.documentElement.style;
              },
              function (a) {
                return '-ms-scroll-limit' in a.document.documentElement.style;
              },
              function (a) {
                return '-webkit-font-feature-settings' in a.document.body.style;
              },
              function () {
                return Wp(2);
              },
              function (a) {
                return 'ActiveXObject' in a;
              },
              function (a) {
                return 'MozAppearance' in a.document.documentElement.style;
              },
              function (a) {
                return '_phantom' in a;
              },
              function (a) {
                return 'callPhantom' in a;
              },
              function (a) {
                return 'content' in a.document.createElement('template');
              },
              function (a) {
                return 'getEntriesByType' in a.performance;
              },
              function () {
                return Wp(3);
              },
              function (a) {
                return 'image-rendering' in a.document.body.style;
              },
              function (a) {
                return 'object-fit' in a.document.body.style;
              },
              function (a) {
                return 'open' in a.document.createElement('details');
              },
              function (a) {
                return 'orientation' in a.screen;
              },
              function (a) {
                return 'performance' in a;
              },
              function (a) {
                return 'shape-image-threshold' in a.document.body.style;
              },
              function () {
                return Wp(4);
              },
              function (a) {
                return 'srcset' in a.document.createElement('img');
              },
              function () {
                return Tp;
              },
              function () {
                return Up;
              },
              function () {
                return Wp(5);
              },
              function (a) {
                a = a.document.createElement('div');
                a.style.width = '1px';
                a.style.width = '-webkit-min-content';
                a.style.width = 'min-content';
                return '1px' != a.style.width;
              },
              function (a) {
                a = a.document.createElement('div');
                a.style.width = '1px';
                a.style.width = 'calc(1px - 1px)';
                a.style.width = '-webkit-calc(1px - 1px)';
                return '1px' != a.style.width;
              },
              function () {
                var a = !1;
                eval(
                  'var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }'
                );
                try {
                  DummyFunction1();
                } catch (b) {
                  a = !0;
                }
                return a;
              },
              function () {
                var a = !1;
                try {
                  DummyFunction2();
                } catch (b) {
                  a = !0;
                }
                return a;
              },
              function () {
                return !1;
              },
              function () {
                return Wp(6);
              },
              function (a) {
                var b = a.document.createElement('canvas');
                b.width = b.height = 1;
                b = b.getContext('2d');
                b.globalCompositeOperation = 'multiply';
                b.fillStyle = 'rgb(0,255,255)';
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b.fillStyle = 'rgb(255,255,0)';
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b = b.getImageData(0, 0, 1, 1).data;
                return (b[0] == b[2] && b[1] == b[3]) || Vp(a.navigator.vibrate);
              },
              function (a) {
                a = a.document.createElement('canvas');
                a.width = a.height = 1;
                a = a.getContext('2d');
                a.globalCompositeOperation = 'multiply';
                a.fillStyle = 'rgb(0,255,255)';
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a.fillStyle = 'rgb(255,255,0)';
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a = a.getImageData(0, 0, 1, 1).data;
                return a[0] == a[2] && a[1] == a[3];
              },
              function (a) {
                return Vp(a.document.createElement('div').matches);
              },
              function (a) {
                a = a.document.createElement('input');
                a.setAttribute('type', 'range');
                return 'text' !== a.type;
              },
              function (a) {
                return a.CSS.supports('image-rendering', 'pixelated');
              },
              function (a) {
                return a.CSS.supports('object-fit', 'contain');
              },
              function () {
                return Wp(7);
              },
              function (a) {
                return a.CSS.supports('object-fit', 'inherit');
              },
              function (a) {
                return a.CSS.supports('shape-image-threshold', '0.9');
              },
              function (a) {
                return a.CSS.supports('word-break', 'keep-all');
              },
              function () {
                return eval('1 == [for (item of [1,2,3]) item][0]');
              },
              function (a) {
                return Vp(a.CSS.supports);
              },
              function () {
                return Vp(Intl.Collator);
              },
              function (a) {
                return Vp(a.document.createElement('dialog').show);
              },
              function () {
                return Wp(8);
              },
              function (a) {
                return Vp(
                  a.document.createElement('div').animate(
                    [
                      { transform: 'scale(1)', easing: 'ease-in' },
                      { transform: 'scale(1.3)', easing: 'ease-in' },
                    ],
                    { duration: 1300, iterations: 1 }
                  ).reverse
                );
              },
              function (a) {
                return Vp(a.document.createElement('div').animate);
              },
              function (a) {
                return Vp(a.document.documentElement.webkitRequestFullScreen);
              },
              function (a) {
                return Vp(a.navigator.getBattery);
              },
              function (a) {
                return Vp(a.navigator.permissions.query);
              },
              function () {
                return !1;
              },
              function () {
                return Wp(9);
              },
              function () {
                return Vp(webkitRequestAnimationFrame);
              },
              function (a) {
                return Vp(a.BroadcastChannel.call);
              },
              function (a) {
                return Vp(a.FontFace);
              },
              function (a) {
                return Vp(a.Gamepad);
              },
              function () {
                return Wp(10);
              },
              function (a) {
                return Vp(a.MutationEvent);
              },
              function (a) {
                return Vp(a.MutationObserver);
              },
              function (a) {
                return Vp(a.crypto.getRandomValues);
              },
              function (a) {
                return Vp(a.document.body.createShadowRoot);
              },
              function (a) {
                return Vp(a.document.body.webkitCreateShadowRoot);
              },
              function (a) {
                return Vp(a.fetch);
              },
              function () {
                return Wp(11);
              },
              function (a) {
                return Vp(a.navigator.serviceWorker.register);
              },
              function (a) {
                return Vp(a.navigator.webkitGetGamepads);
              },
              function (a) {
                return Vp(a.speechSynthesis.speak);
              },
              function (a) {
                return Vp(a.webkitRTCPeerConnection);
              },
              function (a) {
                return a.CSS.supports('--fake-var', '0');
              },
              function () {
                return Wp(12);
              },
              function (a) {
                return a.CSS.supports('cursor', 'grab');
              },
              function (a) {
                return a.CSS.supports('cursor', 'zoom-in');
              },
              function (a) {
                return a.CSS.supports('image-orientation', '270deg');
              },
              function () {
                return Wp(13);
              },
              function (a) {
                return a.CSS.supports('position', 'sticky');
              },
              function (a) {
                return void 0 === a.document.createElement('style').scoped;
              },
              function (a) {
                return a.performance.getEntriesByType('resource') instanceof Array;
              },
              function () {
                return 'undefined' == typeof InstallTrigger;
              },
              function () {
                return 'object' == typeof new Intl.Collator().resolvedOptions();
              },
              function (a) {
                return 'boolean' == typeof a.navigator.onLine;
              },
              function () {
                return Wp(14);
              },
              function (a) {
                return 'undefined' == typeof a.navigator.ih;
              },
              function (a) {
                return 'number' == typeof a.performance.now();
              },
              function () {
                return 0 == new Uint16Array(1)[0];
              },
              function (a) {
                return -1 == a.ActiveXObject.toString().indexOf('native');
              },
              function (a) {
                return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf('Constructor');
              },
            ],
            Yp = [
              function (a) {
                a = a.document.createElement('div');
                var b = null,
                  c = [
                    '{45EA75A0-A269-11D1-B5BF-0000F8051515}',
                    '{3AF36230-A269-11D1-B5BF-0000F8051515}',
                    '{89820200-ECBD-11CF-8B85-00AA005B4383}',
                  ];
                try {
                  a.style.behavior = 'url(#default#clientcaps)';
                } catch (e) {}
                for (var d = 0; d < c.length; d++) {
                  try {
                    b = a.getComponentVersion(c[d], 'componentid').replace(/,/g, '.');
                  } catch (e) {}
                  if (b) return b.split('.')[0];
                }
                return !1;
              },
              function () {
                return new Date().getTimezoneOffset();
              },
              function (a) {
                return (
                  (a.innerWidth ||
                    a.document.documentElement.clientWidth ||
                    a.document.body.clientWidth) /
                  (a.innerHeight ||
                    a.document.documentElement.clientHeight ||
                    a.document.body.clientHeight)
                );
              },
              function (a) {
                return (
                  (a.outerWidth ||
                    (a.document && a.document.body && a.document.body.offsetWidth)) /
                  (a.outerHeight ||
                    (a.document && a.document.body && a.document.body.offsetHeight))
                );
              },
              function (a) {
                return a.screen.availWidth / a.screen.availHeight;
              },
              function (a) {
                return a.screen.width / a.screen.height;
              },
            ],
            Zp = [
              function (a) {
                return a.navigator.userAgent;
              },
              function (a) {
                return a.navigator.platform;
              },
              function (a) {
                return a.navigator.vendor;
              },
            ],
            aq = function () {
              try {
                $p();
              } catch (d) {}
              var a = 'a=1&b=' + Rp + '&',
                b = [],
                c = 99;
              C(Xp, function (d, e) {
                var f = !1;
                try {
                  f = d(F);
                } catch (g) {}
                b[(e / 32) >>> 0] |= f << e % 32;
              });
              C(b, function (d, e) {
                a += String.fromCharCode(c + e) + '=' + (d >>> 0).toString(16) + '&';
              });
              c = 105;
              C(Yp, function (d) {
                var e = 'false';
                try {
                  e = d(F);
                } catch (f) {}
                a += String.fromCharCode(c++) + '=' + e + '&';
              });
              C(Zp, function (d) {
                var e = '';
                try {
                  e = Td(d(F));
                } catch (f) {}
                a += String.fromCharCode(c++) + '=' + e + '&';
              });
              return a.slice(0, -1);
            },
            $p = function () {
              if (!Sp) {
                var a = function () {
                  Tp = !0;
                  F.document.removeEventListener('webdriver-evaluate', a, !0);
                };
                F.document.addEventListener('webdriver-evaluate', a, !0);
                var b = function () {
                  Up = !0;
                  F.document.removeEventListener('webdriver-evaluate-response', b, !0);
                };
                F.document.addEventListener('webdriver-evaluate-response', b, !0);
                Sp = !0;
              }
            };
          var bq = function () {
            this.h = 64;
            this.g = Array(4);
            this.B = Array(this.h);
            this.A = this.o = 0;
            this.reset();
          };
          A(bq, qj);
          bq.prototype.reset = function () {
            this.g[0] = 1732584193;
            this.g[1] = 4023233417;
            this.g[2] = 2562383102;
            this.g[3] = 271733878;
            this.A = this.o = 0;
          };
          var cq = function (a, b, c) {
            c || (c = 0);
            var d = Array(16);
            if ('string' === typeof b)
              for (var e = 0; 16 > e; ++e)
                d[e] =
                  b.charCodeAt(c++) |
                  (b.charCodeAt(c++) << 8) |
                  (b.charCodeAt(c++) << 16) |
                  (b.charCodeAt(c++) << 24);
            else
              for (e = 0; 16 > e; ++e)
                d[e] = b[c++] | (b[c++] << 8) | (b[c++] << 16) | (b[c++] << 24);
            b = a.g[0];
            c = a.g[1];
            e = a.g[2];
            var f = a.g[3];
            var g = (b + (f ^ (c & (e ^ f))) + d[0] + 3614090360) & 4294967295;
            b = c + (((g << 7) & 4294967295) | (g >>> 25));
            g = (f + (e ^ (b & (c ^ e))) + d[1] + 3905402710) & 4294967295;
            f = b + (((g << 12) & 4294967295) | (g >>> 20));
            g = (e + (c ^ (f & (b ^ c))) + d[2] + 606105819) & 4294967295;
            e = f + (((g << 17) & 4294967295) | (g >>> 15));
            g = (c + (b ^ (e & (f ^ b))) + d[3] + 3250441966) & 4294967295;
            c = e + (((g << 22) & 4294967295) | (g >>> 10));
            g = (b + (f ^ (c & (e ^ f))) + d[4] + 4118548399) & 4294967295;
            b = c + (((g << 7) & 4294967295) | (g >>> 25));
            g = (f + (e ^ (b & (c ^ e))) + d[5] + 1200080426) & 4294967295;
            f = b + (((g << 12) & 4294967295) | (g >>> 20));
            g = (e + (c ^ (f & (b ^ c))) + d[6] + 2821735955) & 4294967295;
            e = f + (((g << 17) & 4294967295) | (g >>> 15));
            g = (c + (b ^ (e & (f ^ b))) + d[7] + 4249261313) & 4294967295;
            c = e + (((g << 22) & 4294967295) | (g >>> 10));
            g = (b + (f ^ (c & (e ^ f))) + d[8] + 1770035416) & 4294967295;
            b = c + (((g << 7) & 4294967295) | (g >>> 25));
            g = (f + (e ^ (b & (c ^ e))) + d[9] + 2336552879) & 4294967295;
            f = b + (((g << 12) & 4294967295) | (g >>> 20));
            g = (e + (c ^ (f & (b ^ c))) + d[10] + 4294925233) & 4294967295;
            e = f + (((g << 17) & 4294967295) | (g >>> 15));
            g = (c + (b ^ (e & (f ^ b))) + d[11] + 2304563134) & 4294967295;
            c = e + (((g << 22) & 4294967295) | (g >>> 10));
            g = (b + (f ^ (c & (e ^ f))) + d[12] + 1804603682) & 4294967295;
            b = c + (((g << 7) & 4294967295) | (g >>> 25));
            g = (f + (e ^ (b & (c ^ e))) + d[13] + 4254626195) & 4294967295;
            f = b + (((g << 12) & 4294967295) | (g >>> 20));
            g = (e + (c ^ (f & (b ^ c))) + d[14] + 2792965006) & 4294967295;
            e = f + (((g << 17) & 4294967295) | (g >>> 15));
            g = (c + (b ^ (e & (f ^ b))) + d[15] + 1236535329) & 4294967295;
            c = e + (((g << 22) & 4294967295) | (g >>> 10));
            g = (b + (e ^ (f & (c ^ e))) + d[1] + 4129170786) & 4294967295;
            b = c + (((g << 5) & 4294967295) | (g >>> 27));
            g = (f + (c ^ (e & (b ^ c))) + d[6] + 3225465664) & 4294967295;
            f = b + (((g << 9) & 4294967295) | (g >>> 23));
            g = (e + (b ^ (c & (f ^ b))) + d[11] + 643717713) & 4294967295;
            e = f + (((g << 14) & 4294967295) | (g >>> 18));
            g = (c + (f ^ (b & (e ^ f))) + d[0] + 3921069994) & 4294967295;
            c = e + (((g << 20) & 4294967295) | (g >>> 12));
            g = (b + (e ^ (f & (c ^ e))) + d[5] + 3593408605) & 4294967295;
            b = c + (((g << 5) & 4294967295) | (g >>> 27));
            g = (f + (c ^ (e & (b ^ c))) + d[10] + 38016083) & 4294967295;
            f = b + (((g << 9) & 4294967295) | (g >>> 23));
            g = (e + (b ^ (c & (f ^ b))) + d[15] + 3634488961) & 4294967295;
            e = f + (((g << 14) & 4294967295) | (g >>> 18));
            g = (c + (f ^ (b & (e ^ f))) + d[4] + 3889429448) & 4294967295;
            c = e + (((g << 20) & 4294967295) | (g >>> 12));
            g = (b + (e ^ (f & (c ^ e))) + d[9] + 568446438) & 4294967295;
            b = c + (((g << 5) & 4294967295) | (g >>> 27));
            g = (f + (c ^ (e & (b ^ c))) + d[14] + 3275163606) & 4294967295;
            f = b + (((g << 9) & 4294967295) | (g >>> 23));
            g = (e + (b ^ (c & (f ^ b))) + d[3] + 4107603335) & 4294967295;
            e = f + (((g << 14) & 4294967295) | (g >>> 18));
            g = (c + (f ^ (b & (e ^ f))) + d[8] + 1163531501) & 4294967295;
            c = e + (((g << 20) & 4294967295) | (g >>> 12));
            g = (b + (e ^ (f & (c ^ e))) + d[13] + 2850285829) & 4294967295;
            b = c + (((g << 5) & 4294967295) | (g >>> 27));
            g = (f + (c ^ (e & (b ^ c))) + d[2] + 4243563512) & 4294967295;
            f = b + (((g << 9) & 4294967295) | (g >>> 23));
            g = (e + (b ^ (c & (f ^ b))) + d[7] + 1735328473) & 4294967295;
            e = f + (((g << 14) & 4294967295) | (g >>> 18));
            g = (c + (f ^ (b & (e ^ f))) + d[12] + 2368359562) & 4294967295;
            c = e + (((g << 20) & 4294967295) | (g >>> 12));
            g = (b + (c ^ e ^ f) + d[5] + 4294588738) & 4294967295;
            b = c + (((g << 4) & 4294967295) | (g >>> 28));
            g = (f + (b ^ c ^ e) + d[8] + 2272392833) & 4294967295;
            f = b + (((g << 11) & 4294967295) | (g >>> 21));
            g = (e + (f ^ b ^ c) + d[11] + 1839030562) & 4294967295;
            e = f + (((g << 16) & 4294967295) | (g >>> 16));
            g = (c + (e ^ f ^ b) + d[14] + 4259657740) & 4294967295;
            c = e + (((g << 23) & 4294967295) | (g >>> 9));
            g = (b + (c ^ e ^ f) + d[1] + 2763975236) & 4294967295;
            b = c + (((g << 4) & 4294967295) | (g >>> 28));
            g = (f + (b ^ c ^ e) + d[4] + 1272893353) & 4294967295;
            f = b + (((g << 11) & 4294967295) | (g >>> 21));
            g = (e + (f ^ b ^ c) + d[7] + 4139469664) & 4294967295;
            e = f + (((g << 16) & 4294967295) | (g >>> 16));
            g = (c + (e ^ f ^ b) + d[10] + 3200236656) & 4294967295;
            c = e + (((g << 23) & 4294967295) | (g >>> 9));
            g = (b + (c ^ e ^ f) + d[13] + 681279174) & 4294967295;
            b = c + (((g << 4) & 4294967295) | (g >>> 28));
            g = (f + (b ^ c ^ e) + d[0] + 3936430074) & 4294967295;
            f = b + (((g << 11) & 4294967295) | (g >>> 21));
            g = (e + (f ^ b ^ c) + d[3] + 3572445317) & 4294967295;
            e = f + (((g << 16) & 4294967295) | (g >>> 16));
            g = (c + (e ^ f ^ b) + d[6] + 76029189) & 4294967295;
            c = e + (((g << 23) & 4294967295) | (g >>> 9));
            g = (b + (c ^ e ^ f) + d[9] + 3654602809) & 4294967295;
            b = c + (((g << 4) & 4294967295) | (g >>> 28));
            g = (f + (b ^ c ^ e) + d[12] + 3873151461) & 4294967295;
            f = b + (((g << 11) & 4294967295) | (g >>> 21));
            g = (e + (f ^ b ^ c) + d[15] + 530742520) & 4294967295;
            e = f + (((g << 16) & 4294967295) | (g >>> 16));
            g = (c + (e ^ f ^ b) + d[2] + 3299628645) & 4294967295;
            c = e + (((g << 23) & 4294967295) | (g >>> 9));
            g = (b + (e ^ (c | ~f)) + d[0] + 4096336452) & 4294967295;
            b = c + (((g << 6) & 4294967295) | (g >>> 26));
            g = (f + (c ^ (b | ~e)) + d[7] + 1126891415) & 4294967295;
            f = b + (((g << 10) & 4294967295) | (g >>> 22));
            g = (e + (b ^ (f | ~c)) + d[14] + 2878612391) & 4294967295;
            e = f + (((g << 15) & 4294967295) | (g >>> 17));
            g = (c + (f ^ (e | ~b)) + d[5] + 4237533241) & 4294967295;
            c = e + (((g << 21) & 4294967295) | (g >>> 11));
            g = (b + (e ^ (c | ~f)) + d[12] + 1700485571) & 4294967295;
            b = c + (((g << 6) & 4294967295) | (g >>> 26));
            g = (f + (c ^ (b | ~e)) + d[3] + 2399980690) & 4294967295;
            f = b + (((g << 10) & 4294967295) | (g >>> 22));
            g = (e + (b ^ (f | ~c)) + d[10] + 4293915773) & 4294967295;
            e = f + (((g << 15) & 4294967295) | (g >>> 17));
            g = (c + (f ^ (e | ~b)) + d[1] + 2240044497) & 4294967295;
            c = e + (((g << 21) & 4294967295) | (g >>> 11));
            g = (b + (e ^ (c | ~f)) + d[8] + 1873313359) & 4294967295;
            b = c + (((g << 6) & 4294967295) | (g >>> 26));
            g = (f + (c ^ (b | ~e)) + d[15] + 4264355552) & 4294967295;
            f = b + (((g << 10) & 4294967295) | (g >>> 22));
            g = (e + (b ^ (f | ~c)) + d[6] + 2734768916) & 4294967295;
            e = f + (((g << 15) & 4294967295) | (g >>> 17));
            g = (c + (f ^ (e | ~b)) + d[13] + 1309151649) & 4294967295;
            c = e + (((g << 21) & 4294967295) | (g >>> 11));
            g = (b + (e ^ (c | ~f)) + d[4] + 4149444226) & 4294967295;
            b = c + (((g << 6) & 4294967295) | (g >>> 26));
            g = (f + (c ^ (b | ~e)) + d[11] + 3174756917) & 4294967295;
            f = b + (((g << 10) & 4294967295) | (g >>> 22));
            g = (e + (b ^ (f | ~c)) + d[2] + 718787259) & 4294967295;
            e = f + (((g << 15) & 4294967295) | (g >>> 17));
            g = (c + (f ^ (e | ~b)) + d[9] + 3951481745) & 4294967295;
            a.g[0] = (a.g[0] + b) & 4294967295;
            a.g[1] = (a.g[1] + (e + (((g << 21) & 4294967295) | (g >>> 11)))) & 4294967295;
            a.g[2] = (a.g[2] + e) & 4294967295;
            a.g[3] = (a.g[3] + f) & 4294967295;
          };
          bq.prototype.l = function (a, b) {
            void 0 === b && (b = a.length);
            for (var c = b - this.h, d = this.B, e = this.o, f = 0; f < b; ) {
              if (0 == e) for (; f <= c; ) cq(this, a, f), (f += this.h);
              if ('string' === typeof a)
                for (; f < b; ) {
                  if (((d[e++] = a.charCodeAt(f++)), e == this.h)) {
                    cq(this, d);
                    e = 0;
                    break;
                  }
                }
              else
                for (; f < b; )
                  if (((d[e++] = a[f++]), e == this.h)) {
                    cq(this, d);
                    e = 0;
                    break;
                  }
            }
            this.o = e;
            this.A += b;
          };
          bq.prototype.H = function () {
            var a = Array((56 > this.o ? this.h : 2 * this.h) - this.o);
            a[0] = 128;
            for (var b = 1; b < a.length - 8; ++b) a[b] = 0;
            var c = 8 * this.A;
            for (b = a.length - 8; b < a.length; ++b) (a[b] = c & 255), (c /= 256);
            this.l(a);
            a = Array(16);
            for (b = c = 0; 4 > b; ++b)
              for (var d = 0; 32 > d; d += 8) a[c++] = (this.g[b] >>> d) & 255;
            return a;
          };
          var dq = function () {
            this.h = null;
          };
          t(dq, jp);
          dq.prototype.g = function (a) {
            var b = jp.prototype.g.call(this, a);
            var c = (Rp = z());
            var d = Wp(5);
            c = (Tp ? !d : d) ? c | 2 : c & -3;
            d = Wp(2);
            c = (Up ? !d : d) ? c | 8 : c & -9;
            c = { s1: (c >>> 0).toString(16) };
            this.h || (this.h = aq());
            b.A = this.h;
            b.B = ip(a, So, c, 'h', eq('kArwaWEsTs'));
            b.o = ip(a, Uo, {}, 'h', eq('b96YPMzfnx'));
            b.h = ip(a, Vo, {}, 'h', eq('yb8Wev6QDg'));
            return b;
          };
          var eq = function (a) {
            return function (b) {
              var c = new bq();
              c.l(b + a);
              return wb(c.H()).slice(-8);
            };
          };
          var fq = function (a, b) {
            this.h = a;
            this.l = b;
          };
          fq.prototype.report = function (a, b) {
            var c = this.g(b);
            if ('function' === typeof c) {
              var d = {};
              d = ((d.sv = '882'), (d.cb = 'j'), (d.e = gq(a)), d);
              var e = Nn(b, a, $l());
              Sb(d, e);
              b.yd[a] = e;
              d = 2 == b.wa() ? vm(d).join('&') : this.l.g(d).g;
              try {
                return c(b.la, d, a), 0;
              } catch (f) {
                return 2;
              }
            } else return 1;
          };
          var gq = function (a) {
            var b = Yo(a) ? 'custom_metric_viewable' : a;
            a = Nb(function (c) {
              return c == b;
            });
            return Hl[a];
          };
          fq.prototype.g = function () {
            return La(this.h);
          };
          var hq = function (a, b, c) {
            fq.call(this, a, b);
            this.o = c;
          };
          t(hq, fq);
          hq.prototype.g = function (a) {
            if (!a.Pa) return fq.prototype.g.call(this, a);
            if (this.o[a.Pa]) return function () {};
            ql(393, Error());
            return null;
          };
          var iq = function () {
            Ap.call(this);
            this.G = void 0;
            this.I = null;
            this.D = !1;
            this.A = {};
            this.M = 0;
            this.o = new dq();
          };
          t(iq, Ap);
          iq.prototype.J = function (a, b) {
            var c = this,
              d = io.C();
            if (null != d.g)
              switch (d.g.da()) {
                case 'nis':
                  var e = jq(this, a, b);
                  break;
                case 'gsv':
                  e = kq(this, a, b);
                  break;
                case 'exc':
                  e = lq(this, a);
              }
            e ||
              (b.opt_overlayAdElement
                ? (e = void 0)
                : b.opt_adElement && (e = Op(this, a, b.opt_adElement, b.opt_osdId)));
            e &&
              1 == e.wa() &&
              (e.M == Ma &&
                (e.M = function (f) {
                  return c.kd(f);
                }),
              mq(this, e, b));
            return e;
          };
          var mq = function (a, b, c) {
            c = c.opt_configurable_tracking_events;
            null != a.h && Array.isArray(c) && Dp(a, c, b);
          };
          iq.prototype.kd = function (a) {
            a.h = 0;
            a.R = 0;
            if ('h' == a.B || 'n' == a.B) {
              if (O.C().l) var b = La('ima.bridge.getVideoMetadata');
              else if (a.Pa && nq(this)) {
                var c = this.A[a.Pa];
                c
                  ? (b = function (e) {
                      return oq(c, e);
                    })
                  : null !== c && ql(379, Error());
              } else b = La('ima.common.getVideoMetadata');
              if ('function' === typeof b)
                try {
                  var d = b(a.la);
                } catch (e) {
                  a.h |= 4;
                }
              else a.h |= 2;
            } else if ('b' == a.B)
              if (((b = La('ytads.bulleit.getVideoMetadata')), 'function' === typeof b))
                try {
                  d = b(a.la);
                } catch (e) {
                  a.h |= 4;
                }
              else a.h |= 2;
            else if ('ml' == a.B)
              if (((b = La('ima.common.getVideoMetadata')), 'function' === typeof b))
                try {
                  d = b(a.la);
                } catch (e) {
                  a.h |= 4;
                }
              else a.h |= 2;
            else a.h |= 1;
            a.h ||
              (void 0 === d
                ? (a.h |= 8)
                : null === d
                ? (a.h |= 16)
                : Ob(d)
                ? (a.h |= 32)
                : null != d.errorCode && ((a.R = d.errorCode), (a.h |= 64)));
            null == d && (d = {});
            Qp(d, a);
            Tl(d.volume) && Tl(this.G) && (d.volume *= this.G);
            return d;
          };
          var kq = function (a, b, c) {
              var d = Zn(bo, b);
              d ||
                ((d = c.opt_nativeTime || -1),
                (d = Bp(a, b, Ip(a), d)),
                c.opt_osdId && (d.Pa = c.opt_osdId));
              return d;
            },
            jq = function (a, b, c) {
              var d = Zn(bo, b);
              d || (d = Bp(a, b, 'n', c.opt_nativeTime || -1));
              return d;
            },
            lq = function (a, b) {
              var c = Zn(bo, b);
              c || (c = Bp(a, b, 'h', -1));
              return c;
            };
          iq.prototype.Yc = function () {
            if (nq(this)) return new hq('ima.common.triggerExternalActivityEvent', this.o, this.A);
            var a = pq(this);
            return null != a ? new fq(a, this.o) : null;
          };
          var pq = function (a) {
            var b = O.C();
            switch (Ip(a)) {
              case 'b':
                return 'ytads.bulleit.triggerExternalActivityEvent';
              case 'n':
                return 'ima.bridge.triggerExternalActivityEvent';
              case 'h':
                if (b.l) return 'ima.bridge.triggerExternalActivityEvent';
              case 'm':
              case 'ml':
                return 'ima.common.triggerExternalActivityEvent';
            }
            return null;
          };
          iq.prototype.Ec = function (a) {
            !a.g && a.Ya && Jp(this, a, 'overlay_unmeasurable_impression') && (a.g = !0);
          };
          iq.prototype.rd = function (a) {
            a.td &&
              (a.Za()
                ? Jp(this, a, 'overlay_viewable_end_of_session_impression')
                : Jp(this, a, 'overlay_unviewable_impression'),
              (a.td = !1));
          };
          var qq = function (a, b, c, d) {
            c = void 0 === c ? {} : c;
            var e = {};
            Sb(e, { opt_adElement: void 0, opt_fullscreen: void 0 }, c);
            if (e.opt_bounds) return a.o.g(Xo('ol', d));
            if (void 0 !== d)
              if (void 0 !== Wo(d))
                if (Ho) b = Xo('ue', d);
                else if ((Gp(a), 'i' == Go)) (b = Xo('i', d)), (b['if'] = 0);
                else if ((b = a.J(b, e))) {
                  b: {
                    'i' == Go && ((b.Ya = !0), a.Fc(b));
                    c = e.opt_fullscreen;
                    void 0 !== c && Ym(b, !!c);
                    var f;
                    if ((c = !P.C().h && !Wl())) Uk(), (c = 0 === qg(oe));
                    if ((f = c)) {
                      switch (b.wa()) {
                        case 1:
                          Lp(a, b, 'pv');
                          break;
                        case 2:
                          a.Ec(b);
                      }
                      Hp('pv');
                    }
                    c = d.toLowerCase();
                    if ((f = !f))
                      c: {
                        if (Fk(O.C().P, 'ssmol') && ((f = a.l), 'loaded' === c)) break c;
                        f = kb(El, c);
                      }
                    if (f && 0 == b.ca) {
                      'i' != Go && (xo.done = !1);
                      f = void 0 !== e ? e.opt_nativeTime : void 0;
                      xl = f = 'number' === typeof f ? f : zl();
                      b.Eb = !0;
                      var g = $l();
                      b.ca = 1;
                      b.ha = {};
                      b.ha.start = !1;
                      b.ha.firstquartile = !1;
                      b.ha.midpoint = !1;
                      b.ha.thirdquartile = !1;
                      b.ha.complete = !1;
                      b.ha.resume = !1;
                      b.ha.pause = !1;
                      b.ha.skip = !1;
                      b.ha.mute = !1;
                      b.ha.unmute = !1;
                      b.ha.viewable_impression = !1;
                      b.ha.measurable_impression = !1;
                      b.ha.fully_viewable_audible_half_duration_impression = !1;
                      b.ha.fullscreen = !1;
                      b.ha.exitfullscreen = !1;
                      b.hc = 0;
                      g || (b.ua().J = f);
                      Ao(xo, [b], !g);
                    }
                    (f = b.ab[c]) && jn(b.ga, f);
                    kb(Fl, c) && ((b.pd = !0), An(b));
                    switch (b.wa()) {
                      case 1:
                        var h = Yo(c) ? a.L.custom_metric_viewable : a.L[c];
                        break;
                      case 2:
                        h = a.W[c];
                    }
                    if (h && ((d = h.call(a, b, e, d)), void 0 !== d)) {
                      e = Xo(void 0, c);
                      Sb(e, d);
                      d = e;
                      break b;
                    }
                    d = void 0;
                  }
                  3 == b.ca && a.B(b);
                  b = d;
                } else b = Xo('nf', d);
              else b = void 0;
            else
              Ho
                ? (b = Xo('ue'))
                : (b = a.J(b, e))
                ? ((d = Xo()), Sb(d, Mn(b, !0, !1, !1)), (b = d))
                : (b = Xo('nf'));
            return 'string' === typeof b ? a.o.g(void 0) : a.o.g(b);
          };
          iq.prototype.K = function (a) {
            this.l && 1 == a.wa() && rq(this, a);
          };
          iq.prototype.Fc = function (a) {
            this.l && 1 == a.wa() && rq(this, a);
          };
          var rq = function (a, b) {
              var c;
              if (b.Pa && nq(a)) {
                var d = a.A[b.Pa];
                d
                  ? (c = function (f, g) {
                      sq(d, f, g);
                    })
                  : null !== d && ql(379, Error());
              } else c = La('ima.common.triggerViewabilityMeasurementUpdate');
              if ('function' === typeof c) {
                var e = Hn(b);
                e.nativeVolume = a.G;
                c(b.la, e);
              }
            },
            tq = function (a, b, c) {
              a.A[b] = c;
            },
            nq = function (a) {
              return O.C().l || ('h' != Ip(a) && 'm' != Ip(a)) ? !1 : 0 != a.M;
            };
          iq.prototype.H = function (a, b, c, d) {
            a = Ap.prototype.H.call(this, a, b, c, d);
            this.D &&
              ((b = this.I), null == a.A && (a.A = new dn()), (b.g[a.la] = a.A), (a.A.A = Pn));
            return a;
          };
          iq.prototype.B = function (a) {
            a && 1 == a.wa() && this.D && delete this.I.g[a.la];
            return Ap.prototype.B.call(this, a);
          };
          var uq = function (a) {
              var b = {};
              return (
                (b.viewability = a.g),
                (b.googleViewability = a.l),
                (b.moatInit = a.A),
                (b.moatViewability = a.B),
                (b.integralAdsViewability = a.o),
                (b.doubleVerifyViewability = a.h),
                b
              );
            },
            vq = function (a, b, c) {
              c = void 0 === c ? {} : c;
              a = qq(iq.C(), b, c, a);
              return uq(a);
            };
          Na(iq);
          var wq = new gp();
          wq.A = 'stopped';
          wq.g = 'stopped';
          wq.l = 'stopped';
          wq.B = 'stopped';
          wq.o = 'stopped';
          wq.h = 'stopped';
          Object.freeze(wq);
          var xq = pl(193, vq, void 0, Np);
          y('Goog_AdSense_Lidar_sendVastEvent', xq, void 0);
          var yq = pl(194, function (a, b) {
            b = void 0 === b ? {} : b;
            a = qq(iq.C(), a, b);
            return uq(a);
          });
          y('Goog_AdSense_Lidar_getViewability', yq, void 0);
          var zq = pl(195, function () {
            return Xk();
          });
          y('Goog_AdSense_Lidar_getUrlSignalsArray', zq, void 0);
          var Aq = pl(196, function () {
            return Ng(Xk());
          });
          y('Goog_AdSense_Lidar_getUrlSignalsList', Aq, void 0);
          var Cq = function (a) {
            ce(this, a, Bq, null);
          };
          A(Cq, Yd);
          var Bq = [3],
            Dq = function (a) {
              var b = new Cq();
              return ie(b, 1, a, 0);
            },
            Eq = function (a, b) {
              return ie(a, 2, b, 0);
            },
            Fq = function (a, b) {
              return he(a, 3, b || []);
            };
          var Hq = function (a) {
            ce(this, a, Gq, null);
          };
          A(Hq, Yd);
          var Gq = [1, 2, 3, 4],
            Iq = function (a, b) {
              return he(a, 1, b || []);
            },
            Jq = function (a, b) {
              return he(a, 2, b || []);
            },
            Kq = function (a, b) {
              return he(a, 3, b || []);
            },
            Lq = function (a, b) {
              he(a, 4, b || []);
            };
          var Nq = function (a) {
            ce(this, a, Mq, null);
          };
          A(Nq, Yd);
          var Mq = [12, 13, 14, 17, 18, 19];
          Nq.prototype.getVersion = function () {
            return ee(this, 1, 0);
          };
          var Oq = function (a, b) {
              return ie(a, 1, b, 0);
            },
            Pq = function (a, b) {
              return le(a, 2, b);
            },
            Qq = function (a, b) {
              return le(a, 3, b);
            },
            Rq = function (a, b) {
              return ie(a, 4, b, 0);
            },
            Sq = function (a, b) {
              return ie(a, 5, b, 0);
            },
            Tq = function (a, b) {
              return ie(a, 6, b, 0);
            },
            Uq = function (a, b) {
              return ie(a, 7, b, '');
            },
            Vq = function (a, b) {
              return ie(a, 8, b, 0);
            },
            Wq = function (a, b) {
              return ie(a, 9, b, 0);
            },
            Xq = function (a, b) {
              return ie(a, 10, b, !1);
            },
            Yq = function (a, b) {
              return ie(a, 11, b, !1);
            },
            Zq = function (a, b) {
              return he(a, 12, b || []);
            },
            $q = function (a, b) {
              return he(a, 13, b || []);
            },
            ar = function (a, b) {
              return he(a, 14, b || []);
            },
            br = function (a, b) {
              return ie(a, 15, b, !1);
            },
            cr = function (a, b) {
              return ie(a, 16, b, '');
            },
            dr = function (a, b) {
              return he(a, 17, b || []);
            },
            er = function (a, b) {
              return he(a, 18, b || []);
            },
            fr = function (a, b) {
              a.g || (a.g = {});
              b = b || [];
              for (var c = [], d = 0; d < b.length; d++) c[d] = b[d].ia;
              a.g[19] = b;
              return he(a, 19, c);
            };
          var gr = function (a) {
            ce(this, a, null, null);
          };
          A(gr, Yd);
          var hr = 'a'.charCodeAt(),
            ir = Hb({
              Zf: 0,
              Yf: 1,
              Vf: 2,
              Qf: 3,
              Wf: 4,
              Rf: 5,
              Xf: 6,
              Tf: 7,
              Uf: 8,
              Pf: 9,
              Sf: 10,
            }),
            jr = Hb({ ag: 0, bg: 1, $f: 2 });
          var kr = function (a) {
              if (/[^01]/.test(a)) throw Error('Input bitstring ' + a + ' is malformed!');
              this.h = a;
              this.g = 0;
            },
            mr = function (a) {
              a = lr(a, 36);
              var b = new pe();
              b = ie(b, 1, Math.floor(a / 10), 0);
              return ie(b, 2, (a % 10) * 100000000, 0);
            },
            nr = function (a) {
              var b = function () {
                var c = lr(a, 6);
                if (25 < c || 0 > c)
                  throw Error('Invalid character code, expected in range [0,25], got: ' + c);
                return String.fromCharCode(hr + c);
              };
              return b() + b();
            },
            qr = function (a) {
              var b = lr(a, 16);
              return !0 === !!lr(a, 1)
                ? ((a = or(a)),
                  a.forEach(function (c) {
                    if (c > b) throw Error('ID ' + c + ' is past MaxVendorId ' + b + '!');
                  }),
                  a)
                : pr(a, b);
            },
            rr = function (a) {
              for (var b = [], c = lr(a, 12); c--; ) {
                var d = lr(a, 6),
                  e = lr(a, 2),
                  f = or(a);
                b.push(Fq(Eq(Dq(d), e), f));
              }
              return b;
            },
            or = function (a) {
              for (var b = lr(a, 12), c = []; b--; ) {
                var d = !0 === !!lr(a, 1),
                  e = lr(a, 16);
                if (d) for (d = lr(a, 16); e <= d; e++) c.push(e);
                else c.push(e);
              }
              c.sort(function (f, g) {
                return f - g;
              });
              return c;
            },
            pr = function (a, b, c) {
              for (var d = [], e = 0; e < b; e++)
                if (lr(a, 1)) {
                  var f = e + 1;
                  if (c && -1 === c.indexOf(f))
                    throw Error('ID: ' + f + ' is outside of allowed values!');
                  d.push(f);
                }
              return d;
            },
            lr = function (a, b) {
              if (a.g + b > a.h.length)
                throw Error('Requested length ' + b + ' is past end of string.');
              var c = a.h.substring(a.g, a.g + b);
              a.g += b;
              return parseInt(c, 2);
            };
          var sr = function (a) {
            try {
              var b = Vd(a)
                  .map(function (f) {
                    return f.toString(2).padStart(8, '0');
                  })
                  .join(''),
                c = new kr(b);
              if (3 !== lr(c, 3)) return null;
              var d = Jq(Iq(new Hq(), pr(c, 24, ir)), pr(c, 24, ir)),
                e = lr(c, 6);
              0 !== e && Lq(Kq(d, pr(c, e)), pr(c, e));
              return d;
            } catch (f) {
              return null;
            }
          };
          var tr = function (a) {
            try {
              var b = Vd(a)
                  .map(function (d) {
                    return d.toString(2).padStart(8, '0');
                  })
                  .join(''),
                c = new kr(b);
              return fr(
                er(
                  dr(
                    cr(
                      br(
                        ar(
                          $q(
                            Zq(
                              Yq(
                                Xq(
                                  Wq(
                                    Vq(
                                      Uq(
                                        Tq(
                                          Sq(
                                            Rq(
                                              Qq(Pq(Oq(new Nq(), lr(c, 6)), mr(c)), mr(c)),
                                              lr(c, 12)
                                            ),
                                            lr(c, 12)
                                          ),
                                          lr(c, 6)
                                        ),
                                        nr(c)
                                      ),
                                      lr(c, 12)
                                    ),
                                    lr(c, 6)
                                  ),
                                  !!lr(c, 1)
                                ),
                                !!lr(c, 1)
                              ),
                              pr(c, 12, jr)
                            ),
                            pr(c, 24, ir)
                          ),
                          pr(c, 24, ir)
                        ),
                        !!lr(c, 1)
                      ),
                      nr(c)
                    ),
                    qr(c)
                  ),
                  qr(c)
                ),
                rr(c)
              );
            } catch (d) {
              return null;
            }
          };
          var vr = function (a) {
              if (!a) return null;
              var b = a.split('.');
              if (4 < b.length) return null;
              a = tr(b[0]);
              if (!a) return null;
              var c = new gr();
              a = le(c, 1, a);
              b.shift();
              b = r(b);
              for (c = b.next(); !c.done; c = b.next())
                switch (((c = c.value), ur(c))) {
                  case 1:
                  case 2:
                    break;
                  case 3:
                    c = sr(c);
                    if (!c) return null;
                    le(a, 2, c);
                    break;
                  default:
                    return null;
                }
              return a;
            },
            ur = function (a) {
              try {
                var b = Vd(a)
                  .map(function (c) {
                    return c.toString(2).padStart(8, '0');
                  })
                  .join('');
                return lr(new kr(b), 3);
              } catch (c) {
                return -1;
              }
            };
          var wr = function (a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
              b = r(b);
              for (var d = b.next(); !d.done; d = b.next())
                (d = d.value), (c[d] = -1 !== a.indexOf(d));
            } else for (a = r(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
            delete c[0];
            return c;
          };
          var yr = function (a) {
            ce(this, a, xr, null);
          };
          A(yr, Yd);
          var xr = [6];
          var zr = /^((market|itms|intent|itms-appss):\/\/)/i;
          var Ar = function (a, b) {
            this.h = {};
            this.g = [];
            this.l = 0;
            var c = arguments.length;
            if (1 < c) {
              if (c % 2) throw Error('Uneven number of arguments');
              for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
            } else if (a)
              if (a instanceof Ar)
                for (c = a.Ta(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
              else for (d in a) this.set(d, a[d]);
          };
          Ar.prototype.Va = function () {
            Br(this);
            for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
            return a;
          };
          Ar.prototype.Ta = function () {
            Br(this);
            return this.g.concat();
          };
          Ar.prototype.remove = function (a) {
            return Cr(this.h, a)
              ? (delete this.h[a], this.l--, this.g.length > 2 * this.l && Br(this), !0)
              : !1;
          };
          var Br = function (a) {
            if (a.l != a.g.length) {
              for (var b = 0, c = 0; b < a.g.length; ) {
                var d = a.g[b];
                Cr(a.h, d) && (a.g[c++] = d);
                b++;
              }
              a.g.length = c;
            }
            if (a.l != a.g.length) {
              var e = {};
              for (c = b = 0; b < a.g.length; )
                (d = a.g[b]), Cr(e, d) || ((a.g[c++] = d), (e[d] = 1)), b++;
              a.g.length = c;
            }
          };
          Ar.prototype.get = function (a, b) {
            return Cr(this.h, a) ? this.h[a] : b;
          };
          Ar.prototype.set = function (a, b) {
            Cr(this.h, a) || (this.l++, this.g.push(a));
            this.h[a] = b;
          };
          Ar.prototype.forEach = function (a, b) {
            for (var c = this.Ta(), d = 0; d < c.length; d++) {
              var e = c[d],
                f = this.get(e);
              a.call(b, f, e, this);
            }
          };
          var Cr = function (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
          };
          var Q = function (a, b) {
            this.h = this.B = this.o = '';
            this.J = null;
            this.D = this.g = '';
            this.A = !1;
            var c;
            a instanceof Q
              ? ((this.A = void 0 !== b ? b : a.A),
                Dr(this, a.o),
                (this.B = a.B),
                (this.h = a.h),
                Er(this, a.J),
                (this.g = a.g),
                Fr(this, Gr(a.l)),
                (this.D = a.G()))
              : a && (c = String(a).match(cf))
              ? ((this.A = !!b),
                Dr(this, c[1] || '', !0),
                (this.B = Hr(c[2] || '')),
                (this.h = Hr(c[3] || '', !0)),
                Er(this, c[4]),
                (this.g = Hr(c[5] || '', !0)),
                Fr(this, c[6] || '', !0),
                (this.D = Hr(c[7] || '')))
              : ((this.A = !!b), (this.l = new Ir(null, this.A)));
          };
          Q.prototype.toString = function () {
            var a = [],
              b = this.o;
            b && a.push(Jr(b, Kr, !0), ':');
            var c = this.h;
            if (c || 'file' == b)
              a.push('//'),
                (b = this.B) && a.push(Jr(b, Kr, !0), '@'),
                a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
                (c = this.J),
                null != c && a.push(':', String(c));
            if ((c = this.g))
              this.h && '/' != c.charAt(0) && a.push('/'),
                a.push(Jr(c, '/' == c.charAt(0) ? Lr : Mr, !0));
            (c = this.l.toString()) && a.push('?', c);
            (c = this.G()) && a.push('#', Jr(c, Nr));
            return a.join('');
          };
          Q.prototype.resolve = function (a) {
            var b = this.I(),
              c = !!a.o;
            c ? Dr(b, a.o) : (c = !!a.B);
            c ? (b.B = a.B) : (c = !!a.h);
            c ? (b.h = a.h) : (c = null != a.J);
            var d = a.g;
            if (c) Er(b, a.J);
            else if ((c = !!a.g)) {
              if ('/' != d.charAt(0))
                if (this.h && !this.g) d = '/' + d;
                else {
                  var e = b.g.lastIndexOf('/');
                  -1 != e && (d = b.g.substr(0, e + 1) + d);
                }
              e = d;
              if ('..' == e || '.' == e) d = '';
              else if (-1 != e.indexOf('./') || -1 != e.indexOf('/.')) {
                d = 0 == e.lastIndexOf('/', 0);
                e = e.split('/');
                for (var f = [], g = 0; g < e.length; ) {
                  var h = e[g++];
                  '.' == h
                    ? d && g == e.length && f.push('')
                    : '..' == h
                    ? ((1 < f.length || (1 == f.length && '' != f[0])) && f.pop(),
                      d && g == e.length && f.push(''))
                    : (f.push(h), (d = !0));
                }
                d = f.join('/');
              } else d = e;
            }
            c ? (b.g = d) : (c = '' !== a.l.toString());
            c ? Fr(b, Gr(a.l)) : (c = !!a.D);
            c && (b.D = a.G());
            return b;
          };
          Q.prototype.I = function () {
            return new Q(this);
          };
          var Dr = function (a, b, c) {
              a.o = c ? Hr(b, !0) : b;
              a.o && (a.o = a.o.replace(/:$/, ''));
            },
            Er = function (a, b) {
              if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error('Bad port number ' + b);
                a.J = b;
              } else a.J = null;
            },
            Fr = function (a, b, c) {
              b instanceof Ir
                ? ((a.l = b), Or(a.l, a.A))
                : (c || (b = Jr(b, Pr)), (a.l = new Ir(b, a.A)));
            },
            Qr = function (a, b, c) {
              a.l.set(b, c);
              return a;
            };
          Q.prototype.G = function () {
            return this.D;
          };
          var Hr = function (a, b) {
              return a ? (b ? decodeURI(a.replace(/%25/g, '%2525')) : decodeURIComponent(a)) : '';
            },
            Jr = function (a, b, c) {
              return 'string' === typeof a
                ? ((a = encodeURI(a).replace(b, Rr)),
                  c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
                  a)
                : null;
            },
            Rr = function (a) {
              a = a.charCodeAt(0);
              return '%' + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
            },
            Kr = /[#\/\?@]/g,
            Mr = /[#\?:]/g,
            Lr = /[#\?]/g,
            Pr = /[#\?@]/g,
            Nr = /#/g,
            Ir = function (a, b) {
              this.h = this.g = null;
              this.l = a || null;
              this.o = !!b;
            },
            Sr = function (a) {
              a.g ||
                ((a.g = new Ar()),
                (a.h = 0),
                a.l &&
                  ef(a.l, function (b, c) {
                    a.add(Sc(b), c);
                  }));
            };
          Ir.prototype.add = function (a, b) {
            Sr(this);
            this.l = null;
            a = Tr(this, a);
            var c = this.g.get(a);
            c || this.g.set(a, (c = []));
            c.push(b);
            this.h += 1;
            return this;
          };
          Ir.prototype.remove = function (a) {
            Sr(this);
            a = Tr(this, a);
            return Cr(this.g.h, a)
              ? ((this.l = null), (this.h -= this.g.get(a).length), this.g.remove(a))
              : !1;
          };
          var Ur = function (a, b) {
            Sr(a);
            b = Tr(a, b);
            return Cr(a.g.h, b);
          };
          l = Ir.prototype;
          l.forEach = function (a, b) {
            Sr(this);
            this.g.forEach(function (c, d) {
              C(
                c,
                function (e) {
                  a.call(b, e, d, this);
                },
                this
              );
            }, this);
          };
          l.Ta = function () {
            Sr(this);
            for (var a = this.g.Va(), b = this.g.Ta(), c = [], d = 0; d < b.length; d++)
              for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
            return c;
          };
          l.Va = function (a) {
            Sr(this);
            var b = [];
            if ('string' === typeof a) Ur(this, a) && (b = qb(b, this.g.get(Tr(this, a))));
            else {
              a = this.g.Va();
              for (var c = 0; c < a.length; c++) b = qb(b, a[c]);
            }
            return b;
          };
          l.set = function (a, b) {
            Sr(this);
            this.l = null;
            a = Tr(this, a);
            Ur(this, a) && (this.h -= this.g.get(a).length);
            this.g.set(a, [b]);
            this.h += 1;
            return this;
          };
          l.get = function (a, b) {
            if (!a) return b;
            a = this.Va(a);
            return 0 < a.length ? String(a[0]) : b;
          };
          l.toString = function () {
            if (this.l) return this.l;
            if (!this.g) return '';
            for (var a = [], b = this.g.Ta(), c = 0; c < b.length; c++) {
              var d = b[c],
                e = encodeURIComponent(String(d));
              d = this.Va(d);
              for (var f = 0; f < d.length; f++) {
                var g = e;
                '' !== d[f] && (g += '=' + encodeURIComponent(String(d[f])));
                a.push(g);
              }
            }
            return (this.l = a.join('&'));
          };
          var Gr = function (a) {
              var b = new Ir();
              b.l = a.l;
              a.g && ((b.g = new Ar(a.g)), (b.h = a.h));
              return b;
            },
            Tr = function (a, b) {
              b = String(b);
              a.o && (b = b.toLowerCase());
              return b;
            },
            Or = function (a, b) {
              b &&
                !a.o &&
                (Sr(a),
                (a.l = null),
                a.g.forEach(function (c, d) {
                  var e = d.toLowerCase();
                  d != e &&
                    (this.remove(d),
                    this.remove(e),
                    0 < c.length &&
                      ((this.l = null), this.g.set(Tr(this, e), rb(c)), (this.h += c.length)));
                }, a));
              a.o = b;
            };
          var Vr = '://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav'.split(
              ' '
            ),
            Wr = /\bocr\b/,
            Xr = 0,
            Yr = {},
            Zr = function (a) {
              if (ec(Wc(a))) return !1;
              if (0 <= a.indexOf('://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&'))
                return !0;
              try {
                var b = new Q(a);
              } catch (c) {
                return (
                  null !=
                  gb(Vr, function (d) {
                    return 0 < a.search(d);
                  })
                );
              }
              return b.G().match(Wr)
                ? !0
                : null !=
                    gb(Vr, function (c) {
                      return null != a.match(c);
                    });
            },
            cs = function (a) {
              if (a && ((a = $r(a)), !ec(a))) {
                var b = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
                as(function (c) {
                  bs(
                    c
                      ? b
                      : 'javascript:"<body><object data=\\""+' +
                          a +
                          '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"'
                  );
                });
              }
            },
            bs = function (a) {
              var b = Ve('IFRAME', { src: a, style: 'display:none' });
              a = Le(b).body;
              var c = nj(function () {
                Di(d);
                We(b);
              }, 15000);
              var d = ui(b, ['load', 'error'], function () {
                nj(function () {
                  v.clearTimeout(c);
                  We(b);
                }, 5000);
              });
              a.appendChild(b);
            },
            as = function (a) {
              var b = Yr.imageLoadingEnabled;
              if (null != b) a(b);
              else {
                var c = !1;
                ds(function (d, e) {
                  delete Yr[e];
                  c ||
                    ((c = !0),
                    null == Yr.imageLoadingEnabled && (Yr.imageLoadingEnabled = d),
                    a(d));
                });
              }
            },
            ds = function (a) {
              var b = new Image(),
                c = '' + Xr++;
              Yr[c] = b;
              b.onload = function () {
                clearTimeout(d);
                a(!0, c);
              };
              var d = setTimeout(function () {
                a(!1, c);
              }, 300);
              b.src =
                'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
            },
            es = function (a) {
              if (a) {
                var b = Te(document, 'OBJECT');
                b.data = a;
                b.width = '1';
                b.height = '1';
                b.style.visibility = 'hidden';
                var c = '' + Xr++;
                Yr[c] = b;
                b.onload = b.onerror = function () {
                  delete Yr[c];
                };
                document.body.appendChild(b);
              }
            },
            fs = function (a) {
              if (a) {
                var b = new Image(),
                  c = '' + Xr++;
                Yr[c] = b;
                b.onload = b.onerror = function () {
                  delete Yr[c];
                };
                b.src = a;
              }
            },
            gs = function (a) {
              a &&
                as(function (b) {
                  b ? fs(a) : es(a);
                });
            },
            $r = function (a) {
              if (!(a instanceof tc))
                if (((a = 'object' == typeof a && a.Na ? a.Ea() : String(a)), xc.test(a)))
                  a = new tc(a, sc);
                else {
                  a = String(a);
                  a = a.replace(/(%0A|%0D)/g, '');
                  var b = a.match(wc);
                  a = b && vc.test(b[1]) ? new tc(a, sc) : null;
                }
              a = uc(a || zc);
              if ('about:invalid#zClosurez' === a) return '';
              if (!(a instanceof Lc)) {
                b = 'object' == typeof a;
                var c = null;
                b && a.qc && (c = a.jc());
                a = Nc(oc(b && a.Na ? a.Ea() : String(a)), c);
              }
              a = Mc(a).toString();
              return encodeURIComponent(String(Ng(a)));
            };
          var hs = 'ad_type vpos mridx pos vad_type videoad_start_delay'.split(' ');
          var is = function (a) {
            var b = a.bb,
              c = a.height,
              d = a.width,
              e = void 0 === a.Ga ? !1 : a.Ga;
            this.B = a.lb;
            this.g = b;
            this.o = c;
            this.D = d;
            this.A = e;
          };
          is.prototype.getHeight = function () {
            return this.o;
          };
          is.prototype.getWidth = function () {
            return this.D;
          };
          var js = function (a) {
            var b = a.af,
              c = a.ae,
              d = a.$e,
              e = a.$d;
            is.call(this, {
              lb: a.lb,
              bb: a.bb,
              height: a.height,
              width: a.width,
              Ga: void 0 === a.Ga ? !1 : a.Ga,
            });
            this.J = b;
            this.l = c;
            this.H = d;
            this.h = e;
          };
          t(js, is);
          var ks = function (a) {
            var b = a.Ee;
            is.call(this, {
              lb: a.lb,
              bb: a.bb,
              height: a.height,
              width: a.width,
              Ga: void 0 === a.Ga ? !1 : a.Ga,
            });
            this.h = b;
          };
          t(ks, is);
          ks.prototype.getMediaUrl = function () {
            return this.h;
          };
          var ls = {
            LOADED: 'loaded',
            bc: 'start',
            FIRST_QUARTILE: 'firstQuartile',
            MIDPOINT: 'midpoint',
            THIRD_QUARTILE: 'thirdQuartile',
            COMPLETE: 'complete',
            ac: 'pause',
            Sc: 'resume',
            Oc: 'bufferStart',
            Nc: 'bufferFinish',
            SKIPPED: 'skipped',
            Vd: 'volumeChange',
            ug: 'playerStateChange',
            hf: 'adUserInteraction',
          };
          var ms = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
            ns = function () {
              for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++)
                8 == d || 13 == d || 18 == d || 23 == d
                  ? (a[d] = '-')
                  : 14 == d
                  ? (a[d] = '4')
                  : (2 >= b && (b = (33554432 + 16777216 * Math.random()) | 0),
                    (c = b & 15),
                    (b >>= 4),
                    (a[d] = ms[19 == d ? (c & 3) | 8 : c]));
              return a.join('');
            };
          function os (a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            return new (Function.prototype.bind.apply(a, [null].concat(fa(c))))();
          }
          var R = {},
            ps =
              ((R[18] = -1),
              (R[22] = -1),
              (R[43] = 350),
              (R[44] = 350),
              (R[45] = 350),
              (R[59] = -1),
              (R[133] = 350),
              (R[134] = 350),
              (R[135] = 350),
              (R[136] = 350),
              (R[140] = 50),
              (R[141] = 50),
              (R[160] = 350),
              (R[242] = 150),
              (R[243] = 150),
              (R[244] = 150),
              (R[245] = 150),
              (R[249] = 50),
              (R[250] = 50),
              (R[251] = 50),
              (R[278] = 150),
              (R[342] = -1),
              (R[343] = -1),
              (R[344] = -1),
              (R[345] = -1),
              (R[346] = -1),
              (R[347] = -1),
              R),
            S = {},
            qs =
              ((S[18] = !1),
              (S[22] = !1),
              (S[43] = !0),
              (S[44] = !0),
              (S[45] = !0),
              (S[59] = !1),
              (S[133] = !0),
              (S[134] = !0),
              (S[135] = !0),
              (S[136] = !0),
              (S[140] = !0),
              (S[141] = !0),
              (S[160] = !0),
              (S[242] = !0),
              (S[243] = !0),
              (S[244] = !0),
              (S[245] = !0),
              (S[249] = !0),
              (S[250] = !0),
              (S[251] = !0),
              (S[278] = !0),
              (S[342] = !1),
              (S[343] = !1),
              (S[344] = !1),
              (S[345] = !1),
              (S[346] = !1),
              (S[347] = !1),
              S),
            T = {},
            rs =
              ((T[18] = 'video/mp4'),
              (T[22] = 'video/mp4'),
              (T[43] = 'video/webm'),
              (T[44] = 'video/webm'),
              (T[45] = 'video/webm'),
              (T[59] = 'video/mp4'),
              (T[133] = 'video/mp4'),
              (T[134] = 'video/mp4'),
              (T[135] = 'video/mp4'),
              (T[136] = 'video/mp4'),
              (T[140] = 'audio/mp4'),
              (T[141] = 'audio/mp4'),
              (T[160] = 'video/mp4'),
              (T[242] = 'video/webm'),
              (T[243] = 'video/webm'),
              (T[244] = 'video/webm'),
              (T[245] = 'video/webm'),
              (T[249] = 'audio/webm'),
              (T[250] = 'audio/webm'),
              (T[251] = 'audio/webm'),
              (T[278] = 'video/webm'),
              (T[342] = 'video/mp4'),
              (T[343] = 'video/mp4'),
              (T[344] = 'video/mp4'),
              (T[345] = 'video/mp4'),
              (T[346] = 'video/mp4'),
              (T[347] = 'video/mp4'),
              T),
            U = {},
            ts =
              ((U[18] = 'avc1.42001E, mp4a.40.2'),
              (U[22] = 'avc1.64001F, mp4a.40.2'),
              (U[43] = 'vp8, vorbis'),
              (U[44] = 'vp8, vorbis'),
              (U[45] = 'vp8, vorbis'),
              (U[59] = 'avc1.4D001F, mp4a.40.2'),
              (U[133] = 'avc1.4D401E'),
              (U[134] = 'avc1.4D401E'),
              (U[135] = 'avc1.4D401E'),
              (U[136] = 'avc1.4D401E'),
              (U[140] = 'mp4a.40.2'),
              (U[141] = 'mp4a.40.2'),
              (U[160] = 'avc1.4D401E'),
              (U[242] = 'vp9'),
              (U[243] = 'vp9'),
              (U[244] = 'vp9'),
              (U[245] = 'vp9'),
              (U[249] = 'opus'),
              (U[250] = 'opus'),
              (U[251] = 'opus'),
              (U[278] = 'vp9'),
              (U[342] = 'avc1.42E01E, mp4a.40.2'),
              (U[343] = 'avc1.42E01E, mp4a.40.2'),
              (U[344] = 'avc1.42E01E, mp4a.40.2'),
              (U[345] = 'avc1.42E01E, mp4a.40.2'),
              (U[346] = 'avc1.42E01E, mp4a.40.2'),
              (U[347] = 'avc1.4D001F, mp4a.40.2'),
              U);
          var us = function () {};
          us.prototype.g = null;
          var ws = function (a) {
            var b;
            (b = a.g) || ((b = {}), vs(a) && ((b[0] = !0), (b[1] = !0)), (b = a.g = b));
            return b;
          };
          var xs,
            ys = function () {};
          A(ys, us);
          var zs = function (a) {
              return (a = vs(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
            },
            vs = function (a) {
              if (
                !a.h &&
                'undefined' == typeof XMLHttpRequest &&
                'undefined' != typeof ActiveXObject
              ) {
                for (
                  var b = [
                      'MSXML2.XMLHTTP.6.0',
                      'MSXML2.XMLHTTP.3.0',
                      'MSXML2.XMLHTTP',
                      'Microsoft.XMLHTTP',
                    ],
                    c = 0;
                  c < b.length;
                  c++
                ) {
                  var d = b[c];
                  try {
                    return new ActiveXObject(d), (a.h = d);
                  } catch (e) {}
                }
                throw Error(
                  'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed'
                );
              }
              return a.h;
            };
          xs = new ys();
          var Cs = function (a) {
            N.call(this);
            this.headers = new Ar();
            this.K = a || null;
            this.h = !1;
            this.I = this.g = null;
            this.N = '';
            this.A = 0;
            this.o = this.M = this.B = this.L = !1;
            this.G = 0;
            this.D = null;
            this.X = '';
            this.R = this.U = !1;
          };
          A(Cs, N);
          var Ds = /^https?$/i,
            Es = ['POST', 'PUT'],
            Js = function (a, b) {
              if (a.g)
                throw Error(
                  '[goog.net.XhrIo] Object is active with another request=' + a.N + '; newUri=' + b
                );
              a.N = b;
              a.A = 0;
              a.L = !1;
              a.h = !0;
              a.g = a.K ? zs(a.K) : zs(xs);
              a.I = a.K ? ws(a.K) : ws(xs);
              a.g.onreadystatechange = Wa(a.W, a);
              try {
                (a.M = !0), a.g.open('GET', String(b), !0), (a.M = !1);
              } catch (e) {
                Fs(a);
                return;
              }
              b = new Ar(a.headers);
              var c = gb(b.Ta(), Gs),
                d = v.FormData && !1;
              !kb(Es, 'GET') ||
                c ||
                d ||
                b.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
              b.forEach(function (e, f) {
                this.g.setRequestHeader(f, e);
              }, a);
              a.X && (a.g.responseType = a.X);
              'withCredentials' in a.g &&
                a.g.withCredentials !== a.U &&
                (a.g.withCredentials = a.U);
              try {
                Hs(a),
                  0 < a.G &&
                    ((a.R = Is(a.g)),
                    a.R
                      ? ((a.g.timeout = a.G), (a.g.ontimeout = Wa(a.Z, a)))
                      : (a.D = nj(a.Z, a.G, a))),
                  (a.B = !0),
                  a.g.send(''),
                  (a.B = !1);
              } catch (e) {
                Fs(a);
              }
            },
            Is = function (a) {
              return od && Fd(9) && 'number' === typeof a.timeout && void 0 !== a.ontimeout;
            },
            Gs = function (a) {
              return 'content-type' == a.toLowerCase();
            };
          Cs.prototype.Z = function () {
            'undefined' != typeof Ga &&
              this.g &&
              ((this.A = 8), this.dispatchEvent('timeout'), this.abort(8));
          };
          var Fs = function (a) {
              a.h = !1;
              a.g && ((a.o = !0), a.g.abort(), (a.o = !1));
              a.A = 5;
              Ks(a);
              Ls(a);
            },
            Ks = function (a) {
              a.L || ((a.L = !0), a.dispatchEvent('complete'), a.dispatchEvent('error'));
            };
          Cs.prototype.abort = function (a) {
            this.g &&
              this.h &&
              ((this.h = !1),
              (this.o = !0),
              this.g.abort(),
              (this.o = !1),
              (this.A = a || 7),
              this.dispatchEvent('complete'),
              this.dispatchEvent('abort'),
              Ls(this));
          };
          Cs.prototype.O = function () {
            this.g &&
              (this.h && ((this.h = !1), (this.o = !0), this.g.abort(), (this.o = !1)),
              Ls(this, !0));
            Cs.Ca.O.call(this);
          };
          Cs.prototype.W = function () {
            this.ub() || (this.M || this.B || this.o ? Ms(this) : this.$());
          };
          Cs.prototype.$ = function () {
            Ms(this);
          };
          var Ms = function (a) {
              if (a.h && 'undefined' != typeof Ga && (!a.I[1] || 4 != Ns(a) || 2 != Os(a)))
                if (a.B && 4 == Ns(a)) nj(a.W, 0, a);
                else if ((a.dispatchEvent('readystatechange'), 4 == Ns(a))) {
                  a.h = !1;
                  try {
                    var b = Os(a);
                    a: switch (b) {
                      case 200:
                      case 201:
                      case 202:
                      case 204:
                      case 206:
                      case 304:
                      case 1223:
                        var c = !0;
                        break a;
                      default:
                        c = !1;
                    }
                    var d;
                    if (!(d = c)) {
                      var e;
                      if ((e = 0 === b)) {
                        var f = String(a.N).match(cf)[1] || null;
                        if (!f && v.self && v.self.location) {
                          var g = v.self.location.protocol;
                          f = g.substr(0, g.length - 1);
                        }
                        e = !Ds.test(f ? f.toLowerCase() : '');
                      }
                      d = e;
                    }
                    d
                      ? (a.dispatchEvent('complete'), a.dispatchEvent('success'))
                      : ((a.A = 6), Ks(a));
                  } finally {
                    Ls(a);
                  }
                }
            },
            Ls = function (a, b) {
              if (a.g) {
                Hs(a);
                var c = a.g,
                  d = a.I[0] ? Ma : null;
                a.g = null;
                a.I = null;
                b || a.dispatchEvent('ready');
                try {
                  c.onreadystatechange = d;
                } catch (e) {}
              }
            },
            Hs = function (a) {
              a.g && a.R && (a.g.ontimeout = null);
              a.D && (v.clearTimeout(a.D), (a.D = null));
            };
          Cs.prototype.tc = function () {
            return !!this.g;
          };
          var Ns = function (a) {
              return a.g ? a.g.readyState : 0;
            },
            Os = function (a) {
              try {
                return 2 < Ns(a) ? a.g.status : -1;
              } catch (b) {
                return -1;
              }
            },
            Ps = function (a) {
              try {
                return a.g ? a.g.responseText : '';
              } catch (b) {
                return '';
              }
            },
            Qs = function (a) {
              if (a.g) {
                a: {
                  a = a.g.responseText;
                  if (v.JSON)
                    try {
                      var b = v.JSON.parse(a);
                      break a;
                    } catch (c) {}
                  b = Kg(a);
                }
                return b;
              }
            },
            Rs = function (a, b) {
              if (a.g && 4 == Ns(a))
                return (a = a.g.getResponseHeader(b)), null === a ? void 0 : a;
            };
          var Ss = /\/itag\/(\d+)\//;
          function Ts (a) {
            var b = parseInt(gf(a, 'itag'), 10);
            return b ? b : (a = a.match(Ss)) && 2 == a.length ? parseInt(a[1], 10) : null;
          }
          function Us (a) {
            var b = rs[a];
            a = ts[a];
            b
              ? ((b = Wc(b).toLowerCase()), (b = a ? b + '; codecs="' + Wc(a) + '"' : b))
              : (b = '');
            return b;
          }
          function Vs (a) {
            if ('function' === typeof CustomEvent)
              return new CustomEvent('media_source_error', { detail: a });
            var b = document.createEvent('CustomEvent');
            b.initCustomEvent('media_source_error', !1, !0, a);
            return b;
          }
          var Ws = -1;
          var Xs = function () {
            this.g = z();
          };
          Xs.prototype.reset = function () {
            this.g = z();
          };
          var Ys = function (a) {
            a = a.g + 5000 - z();
            return 0 < a ? a : 0;
          };
          var Zs = 'ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com'.split(
              ' '
            ),
            $s = ['c.googlesyndication.com'];
          function at (a, b) {
            b = void 0 === b ? window.location.protocol : b;
            var c = !1;
            bt(a, $s) ? (c = !1) : b.includes('https') && bt(a, Zs) && (c = !0);
            if (c) {
              b = new Q(a);
              if ('https' == b.o) return a;
              K(J.C(), 'htp', '1');
              Dr(b, 'https');
              return b.toString();
            }
            return a;
          }
          function bt (a, b) {
            return new RegExp(
              '^https?://([a-z0-9-]{1,63}\\.)*(' +
                b.join('|').replace(/\./g, '\\.') +
                ')(:[0-9]+)?([/?#]|$)',
              'i'
            ).test(a);
          }
          var ct = function (a) {
            return (a = a.exec(Dc)) ? a[1] : '';
          };
          (function () {
            if (Jd) return ct(/Firefox\/([0-9.]+)/);
            if (od || pd || nd) return Ed;
            if (Nd) return id() ? ct(/CriOS\/([0-9.]+)/) : ct(/Chrome\/([0-9.]+)/);
            if (Od && !id()) return ct(/Version\/([0-9.]+)/);
            if (Kd || Ld) {
              var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Dc);
              if (a) return a[1] + '.' + a[2];
            } else if (Md) return (a = ct(/Android\s+([0-9.]+)/)) ? a : ct(/Version\/([0-9.]+)/);
            return '';
          })();
          var dt = /OS (\S+) like/,
            et = /Android ([\d\.]+)/;
          function ft (a, b) {
            a = (a = a.exec(Dc)) ? a[1] : '';
            a = a.replace(/_/g, '.');
            return 0 <= rc(a, b);
          }
          var gt = function () {
              return td && 'ontouchstart' in document.documentElement;
            },
            ht = function (a) {
              return yd && ft(dt, a);
            },
            it = function (a) {
              return (a = void 0 === a ? null : a) && 'function' === typeof a.getAttribute
                ? a.getAttribute('playsinline')
                  ? !0
                  : !1
                : !1;
            };
          var jt = function (a) {
            var b = Error.call(this, a);
            this.message = b.message;
            'stack' in b && (this.stack = b.stack);
            this.errorCode = a;
          };
          t(jt, Error);
          var kt = function () {
              if (!od) return !1;
              try {
                return new ActiveXObject('MSXML2.DOMDocument'), !0;
              } catch (a) {
                return !1;
              }
            },
            lt = od && kt();
          var mt = function (a) {
            H.call(this);
            this.o = a;
            this.h = {};
          };
          A(mt, H);
          var nt = [];
          mt.prototype.T = function (a, b, c, d) {
            return ot(this, a, b, c, d);
          };
          var ot = function (a, b, c, d, e, f) {
            Array.isArray(c) || (c && (nt[0] = c.toString()), (c = nt));
            for (var g = 0; g < c.length; g++) {
              var h = vi(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
              if (!h) break;
              a.h[h.key] = h;
            }
            return a;
          };
          mt.prototype.wb = function (a, b, c, d) {
            return pt(this, a, b, c, d);
          };
          var pt = function (a, b, c, d, e, f) {
            if (Array.isArray(c)) for (var g = 0; g < c.length; g++) pt(a, b, c[g], d, e, f);
            else {
              b = ui(b, c, d || a.handleEvent, e, f || a.o || a);
              if (!b) return a;
              a.h[b.key] = b;
            }
            return a;
          };
          mt.prototype.Qa = function (a, b, c, d, e) {
            if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.Qa(a, b[f], c, d, e);
            else
              (c = c || this.handleEvent),
                (d = Pa(d) ? !!d.capture : !!d),
                (e = e || this.o || this),
                (c = wi(c)),
                (d = !!d),
                (b = ki(a)
                  ? a.qb(b, c, d, e)
                  : a
                  ? (a = yi(a))
                    ? a.qb(b, c, d, e)
                    : null
                  : null),
                b && (Di(b), delete this.h[b.key]);
          };
          var qt = function (a) {
            Bb(
              a.h,
              function (b, c) {
                this.h.hasOwnProperty(c) && Di(b);
              },
              a
            );
            a.h = {};
          };
          mt.prototype.O = function () {
            mt.Ca.O.call(this);
            qt(this);
          };
          mt.prototype.handleEvent = function () {
            throw Error('EventHandler.handleEvent not implemented');
          };
          var rt = function () {};
          rt.prototype.get = function (a, b) {
            return tt(a, b);
          };
          var tt = function (a, b) {
              return ut(a, !0, b).then(
                function (c) {
                  return Promise.resolve(c);
                },
                function (c) {
                  return c instanceof Error && 6 == c.message ? ut(a, !1, b) : Promise.reject(c);
                }
              );
            },
            ut = function (a, b, c) {
              var d = new Cs();
              d.U = b;
              d.G = Math.max(0, Ys(c));
              var e = new mt();
              return new Promise(function (f, g) {
                e.wb(d, 'success', function () {
                  a: {
                    if (Vl())
                      try {
                        Qs(d);
                        var h = 'application/json';
                        break a;
                      } catch (p) {
                        h = 'application/xml';
                        break a;
                      }
                    h = Rs(d, 'Content-Type') || '';
                  }
                  if (-1 != h.indexOf('application/json')) f(Qs(d) || {});
                  else {
                    try {
                      var k = d.g ? d.g.responseXML : null;
                    } catch (p) {
                      k = null;
                    }
                    if (null == k)
                      if (((k = Ps(d)), 'undefined' != typeof DOMParser))
                        (h = new DOMParser()),
                          (k = If(k)),
                          (k = h.parseFromString(Mc(k), 'application/xml'));
                      else if (lt) {
                        h = new ActiveXObject('MSXML2.DOMDocument');
                        h.resolveExternals = !1;
                        h.validateOnParse = !1;
                        try {
                          h.setProperty('ProhibitDTD', !0),
                            h.setProperty('MaxXMLSize', 2048),
                            h.setProperty('MaxElementDepth', 256);
                        } catch (p) {}
                        h.loadXML(k);
                        k = h;
                      } else throw Error('Your browser does not support loading xml documents');
                    h = Yg(Nh);
                    var n;
                    if ((n = k && k.documentElement))
                      (n = k.documentElement) && 'VAST' != !n.nodeName
                        ? (n = n.getAttribute('version'))
                          ? ((n = parseInt(n, 10)), (n = null == n || isNaN(n) ? null : n))
                          : (n = null)
                        : (n = null),
                        (n = null == n || 2 > n || 4 < n ? !1 : !0);
                    if (!n && h) {
                      h = {
                        vastUrl: a.substring(0, 200),
                        responseText: Ps(d).substring(0, 200),
                        status: Os(d),
                        origin: window.location.origin,
                      };
                      Vl() ||
                        ((h.contentType = Rs(d, 'Content-Type')),
                        (h.acao = Rs(d, 'Access-Control-Allow-Origin')),
                        (h.acac = Rs(d, 'Access-Control-Allow-Credentials')));
                      n = J.C();
                      for (var m = r(Object.keys(h)), u = m.next(); !u.done; u = m.next())
                        (u = u.value), K(n, u, h[u]);
                    }
                    f(k);
                  }
                  e.V();
                  d.V();
                });
                e.wb(d, ['error', 'timeout'], function () {
                  g(new jt(d.A, Os(d)));
                  e.V();
                  d.V();
                });
                Js(d, at(a));
              });
            };
          var vt = function (a, b) {
              return ec(b) ? !1 : new RegExp(a).test(b);
            },
            wt = function (a) {
              var b = {};
              a.split(',').forEach(function (c) {
                var d = c.split('=');
                2 == d.length && ((c = fc(d[0])), (d = fc(d[1])), 0 < c.length && (b[c] = d));
              });
              return b;
            },
            xt = function (a) {
              var b = 'af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu'.split(
                ' '
              );
              if (!a) return null;
              a = a.toLowerCase().replace('-', '_');
              if (b.includes(a)) return a;
              a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, '') : '';
              return b.includes(a) ? a : null;
            };
          var zt = function (a) {
            Q.call(this, a);
            this.H = new Map();
            a = this.g;
            var b = a.indexOf(';'),
              c = null;
            0 <= b ? ((this.g = a.substring(0, b)), (c = a.substring(b + 1))) : (this.g = a);
            yt(this, c);
          };
          t(zt, Q);
          zt.prototype.toString = function () {
            return At(this, Q.prototype.toString.call(this));
          };
          zt.prototype.G = function () {
            return '';
          };
          var yt = function (a, b) {
              ec(Wc(b)) ||
                b.split(';').forEach(function (c) {
                  var d = c.indexOf('=');
                  if (!(0 >= d)) {
                    var e = Sc(c.substring(0, d));
                    c = Sc(c.substring(d + 1));
                    d = a.H.get(e);
                    null != d ? d.includes(c) || d.push(c) : (d = [Wc(c)]);
                    a.H.set(e, d);
                  }
                }, a);
            },
            Bt = function (a) {
              if (ec(Wc('ord'))) return null;
              a = a.H.get('ord');
              return null != a ? a : null;
            },
            Ct = function (a, b) {
              ec(Wc('ord')) || ((b = b.map(Wc)), a.H.set('ord', b));
            },
            At = function (a, b) {
              b = [Wc(b)];
              b.push.apply(b, fa(Dt(a)));
              return b.join(';');
            },
            Dt = function (a) {
              var b = Bt(a);
              null == b ? (b = [Wc(z())]) : ec(Wc('ord')) || a.H.delete('ord');
              var c = [];
              a.H.forEach(function (d, e) {
                d.forEach(function (f) {
                  c.push(e + '=' + f);
                });
              });
              c.push('ord=' + b[0]);
              Ct(a, b);
              return c;
            };
          zt.prototype.I = function () {
            return new zt(this.toString());
          };
          function Et (a) {
            var b = Zb('_blank');
            if (!ec(Wc(a))) {
              a = a instanceof tc || !zr.test(a) ? a : new tc(a, sc);
              var c = window;
              a = a instanceof tc ? a : yc(a);
              c = c || v;
              b = b instanceof Xb ? Yb(b) : b || '';
              c.open(uc(a), b, '', void 0);
            }
          }
          var Ft = {
            AUTOPLAY_DISALLOWED: 'autoplayDisallowed',
            kf: 'beginFullscreen',
            lf: 'canPlay',
            mf: 'canPlayThrough',
            CLICK: 'click',
            DURATION_CHANGE: 'durationChange',
            zf: 'end',
            Af: 'endFullscreen',
            Bf: 'error',
            Ff: 'focusSkipButton',
            Hd: 'loadStart',
            LOADED: 'loaded',
            hg: 'mediaLoadTimeout',
            ig: 'mediaPlaybackTimeout',
            ac: 'pause',
            tg: 'play',
            zg: 'seeked',
            Ag: 'seeking',
            Bg: 'skip',
            Rd: 'skipShown',
            bc: 'start',
            Jg: 'timeUpdate',
            Hg: 'timedMetadata',
            Vd: 'volumeChange',
            Ug: 'waiting',
          };
          var Ht = function (a) {
              this.g = a;
              this.h = Gt(a);
            },
            Gt = function (a) {
              return new Map(
                a.g.split('/').reduce(function (b, c, d) {
                  d % 2 ? b[b.length - 1].push(c) : b.push([c]);
                  return b;
                }, [])
              );
            },
            It = function (a, b) {
              var c = a.g.l.get(b);
              return c ? c : (a = a.h.get(b)) ? a : null;
            };
          var Jt = function () {};
          var Mt = function (a, b) {
              this.h = 64;
              this.A = v.Uint8Array ? new Uint8Array(this.h) : Array(this.h);
              this.B = this.o = 0;
              this.g = [];
              this.D = a;
              this.J = b;
              this.G = v.Int32Array ? new Int32Array(64) : Array(64);
              void 0 === Kt && (v.Int32Array ? (Kt = new Int32Array(Lt)) : (Kt = Lt));
              this.reset();
            },
            Kt;
          A(Mt, qj);
          var Nt = qb(128, vb(0, 63));
          Mt.prototype.reset = function () {
            this.B = this.o = 0;
            this.g = v.Int32Array ? new Int32Array(this.J) : rb(this.J);
          };
          var Ot = function (a) {
            for (var b = a.A, c = a.G, d = 0, e = 0; e < b.length; )
              (c[d++] = (b[e] << 24) | (b[e + 1] << 16) | (b[e + 2] << 8) | b[e + 3]), (e = 4 * d);
            for (b = 16; 64 > b; b++) {
              e = c[b - 15] | 0;
              d = c[b - 2] | 0;
              var f =
                  ((c[b - 16] | 0) +
                    (((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3))) |
                  0,
                g =
                  ((c[b - 7] | 0) +
                    (((d >>> 17) | (d << 15)) ^ ((d >>> 19) | (d << 13)) ^ (d >>> 10))) |
                  0;
              c[b] = (f + g) | 0;
            }
            d = a.g[0] | 0;
            e = a.g[1] | 0;
            var h = a.g[2] | 0,
              k = a.g[3] | 0,
              n = a.g[4] | 0,
              m = a.g[5] | 0,
              u = a.g[6] | 0;
            f = a.g[7] | 0;
            for (b = 0; 64 > b; b++) {
              var p =
                ((((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10))) +
                  ((d & e) ^ (d & h) ^ (e & h))) |
                0;
              g = (n & m) ^ (~n & u);
              f =
                (f +
                  (((n >>> 6) | (n << 26)) ^ ((n >>> 11) | (n << 21)) ^ ((n >>> 25) | (n << 7)))) |
                0;
              g = (g + (Kt[b] | 0)) | 0;
              g = (f + ((g + (c[b] | 0)) | 0)) | 0;
              f = u;
              u = m;
              m = n;
              n = (k + g) | 0;
              k = h;
              h = e;
              e = d;
              d = (g + p) | 0;
            }
            a.g[0] = (a.g[0] + d) | 0;
            a.g[1] = (a.g[1] + e) | 0;
            a.g[2] = (a.g[2] + h) | 0;
            a.g[3] = (a.g[3] + k) | 0;
            a.g[4] = (a.g[4] + n) | 0;
            a.g[5] = (a.g[5] + m) | 0;
            a.g[6] = (a.g[6] + u) | 0;
            a.g[7] = (a.g[7] + f) | 0;
          };
          Mt.prototype.l = function (a, b) {
            void 0 === b && (b = a.length);
            var c = 0,
              d = this.o;
            if ('string' === typeof a)
              for (; c < b; )
                (this.A[d++] = a.charCodeAt(c++)), d == this.h && (Ot(this), (d = 0));
            else if (Oa(a))
              for (; c < b; ) {
                var e = a[c++];
                if (!('number' == typeof e && 0 <= e && 255 >= e && e == (e | 0)))
                  throw Error('message must be a byte array');
                this.A[d++] = e;
                d == this.h && (Ot(this), (d = 0));
              }
            else throw Error('message must be string or array');
            this.o = d;
            this.B += b;
          };
          Mt.prototype.H = function () {
            var a = [],
              b = 8 * this.B;
            56 > this.o ? this.l(Nt, 56 - this.o) : this.l(Nt, this.h - (this.o - 56));
            for (var c = 63; 56 <= c; c--) (this.A[c] = b & 255), (b /= 256);
            Ot(this);
            for (c = b = 0; c < this.D; c++)
              for (var d = 24; 0 <= d; d -= 8) a[b++] = (this.g[c] >> d) & 255;
            return a;
          };
          var Lt = [
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298,
          ];
          var Qt = function () {
            Mt.call(this, 8, Pt);
          };
          A(Qt, Mt);
          var Pt = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225,
          ];
          var Tt = function (a, b, c) {
            if ('number' === typeof a) var d = { name: Rt(a) };
            else (d = a), (a = St(a.name));
            this.code = a;
            this.g = d;
            b = 'Error ' + b + ': ' + (this.g.name || '');
            c && (b += ', ' + c);
            Za.call(this, b);
          };
          A(Tt, Za);
          var Ut = {
              Td: 1,
              ng: 2,
              NOT_FOUND_ERR: 3,
              Cd: 4,
              Fd: 5,
              og: 6,
              Sd: 7,
              ABORT_ERR: 8,
              Qd: 9,
              Lg: 10,
              TIMEOUT_ERR: 11,
              Pd: 12,
              INVALID_ACCESS_ERR: 13,
              INVALID_STATE_ERR: 14,
            },
            Vt = (v.Ia || v.Ra || Ut).Td,
            Wt = (v.Ia || v.Ra || Ut).NOT_FOUND_ERR,
            Xt = (v.Ia || v.Ra || Ut).Cd,
            Yt = (v.Ia || v.Ra || Ut).Fd,
            Zt = (v.Ia || v.Ra || Ut).Sd,
            $t = (v.Ia || v.Ra || Ut).ABORT_ERR,
            au = (v.Ia || v.Ra || Ut).Qd,
            bu = (v.Ia || v.Ra || Ut).TIMEOUT_ERR,
            cu = (v.Ia || v.Ra || Ut).Pd,
            du = (v.DOMException || Ut).INVALID_ACCESS_ERR,
            eu = (v.DOMException || Ut).INVALID_STATE_ERR,
            St = function (a) {
              switch (a) {
                case 'UnknownError':
                  return Vt;
                case 'NotFoundError':
                  return Wt;
                case 'ConstraintError':
                  return Xt;
                case 'DataError':
                  return Yt;
                case 'TransactionInactiveError':
                  return Zt;
                case 'AbortError':
                  return $t;
                case 'ReadOnlyError':
                  return au;
                case 'TimeoutError':
                  return bu;
                case 'QuotaExceededError':
                  return cu;
                case 'InvalidAccessError':
                  return du;
                case 'InvalidStateError':
                  return eu;
                default:
                  return Vt;
              }
            },
            Rt = function (a) {
              switch (a) {
                case Vt:
                  return 'UnknownError';
                case Wt:
                  return 'NotFoundError';
                case Xt:
                  return 'ConstraintError';
                case Yt:
                  return 'DataError';
                case Zt:
                  return 'TransactionInactiveError';
                case $t:
                  return 'AbortError';
                case au:
                  return 'ReadOnlyError';
                case bu:
                  return 'TimeoutError';
                case cu:
                  return 'QuotaExceededError';
                case du:
                  return 'InvalidAccessError';
                case eu:
                  return 'InvalidStateError';
                default:
                  return 'UnknownError';
              }
            },
            fu = function (a, b) {
              return 'error' in a ? new Tt(a.error, b) : new Tt({ name: 'UnknownError' }, b);
            },
            gu = function (a, b) {
              if ('name' in a) return (b = b + ': ' + a.message), new Tt(a, b);
              if ('code' in a) {
                var c = Rt(a.code);
                b = b + ': ' + a.message;
                return new Tt({ name: c }, b);
              }
              return new Tt({ name: 'UnknownError' }, b);
            };
          var hu = function () {
            this.B = [];
            this.o = this.g = !1;
            this.l = void 0;
            this.G = this.K = this.J = !1;
            this.H = 0;
            this.h = null;
            this.D = 0;
          };
          hu.prototype.cancel = function (a) {
            if (this.g) this.l instanceof hu && this.l.cancel();
            else {
              if (this.h) {
                var b = this.h;
                delete this.h;
                a ? b.cancel(a) : (b.D--, 0 >= b.D && b.cancel());
              }
              this.G = !0;
              this.g || iu(this, new ju(this));
            }
          };
          hu.prototype.I = function (a, b) {
            this.J = !1;
            ku(this, a, b);
          };
          var ku = function (a, b, c) {
              a.g = !0;
              a.l = c;
              a.o = !b;
              lu(a);
            },
            nu = function (a) {
              if (a.g) {
                if (!a.G) throw new mu(a);
                a.G = !1;
              }
            };
          hu.prototype.A = function (a) {
            nu(this);
            ku(this, !0, a);
          };
          var iu = function (a, b) {
              nu(a);
              ku(a, !1, b);
            },
            pu = function (a, b) {
              return ou(a, b, null, void 0);
            },
            ou = function (a, b, c, d) {
              a.B.push([b, c, d]);
              a.g && lu(a);
              return a;
            };
          hu.prototype.then = function (a, b, c) {
            var d,
              e,
              f = new Yi(function (g, h) {
                d = g;
                e = h;
              });
            ou(this, d, function (g) {
              g instanceof ju ? f.cancel() : e(g);
            });
            return f.then(a, b, c);
          };
          hu.prototype.$goog_Thenable = !0;
          var qu = function (a) {
              return fb(a.B, function (b) {
                return 'function' === typeof b[1];
              });
            },
            lu = function (a) {
              if (a.H && a.g && qu(a)) {
                var b = a.H,
                  c = ru[b];
                c && (v.clearTimeout(c.g), delete ru[b]);
                a.H = 0;
              }
              a.h && (a.h.D--, delete a.h);
              b = a.l;
              for (var d = (c = !1); a.B.length && !a.J; ) {
                var e = a.B.shift(),
                  f = e[0],
                  g = e[1];
                e = e[2];
                if ((f = a.o ? g : f))
                  try {
                    var h = f.call(e || null, b);
                    void 0 !== h && ((a.o = a.o && (h == b || h instanceof Error)), (a.l = b = h));
                    if (Wi(b) || ('function' === typeof v.Promise && b instanceof v.Promise))
                      (d = !0), (a.J = !0);
                  } catch (k) {
                    (b = k), (a.o = !0), qu(a) || (c = !0);
                  }
              }
              a.l = b;
              d &&
                ((h = Wa(a.I, a, !0)),
                (d = Wa(a.I, a, !1)),
                b instanceof hu ? (ou(b, h, d), (b.K = !0)) : b.then(h, d));
              c && ((b = new tu(b)), (ru[b.g] = b), (a.H = b.g));
            },
            mu = function () {
              Za.call(this);
            };
          A(mu, Za);
          mu.prototype.message = 'Deferred has already fired';
          mu.prototype.name = 'AlreadyCalledError';
          var ju = function () {
            Za.call(this);
          };
          A(ju, Za);
          ju.prototype.message = 'Deferred was canceled';
          ju.prototype.name = 'CanceledError';
          var tu = function (a) {
            this.g = v.setTimeout(Wa(this.l, this), 0);
            this.h = a;
          };
          tu.prototype.l = function () {
            delete ru[this.g];
            throw this.h;
          };
          var ru = {};
          var uu = function (a) {
              this.g = a;
            },
            vu = function (a, b, c, d) {
              var e = new hu();
              try {
                var f = d ? a.g.add(c, d) : a.g.add(c);
              } catch (g) {
                return (b += se(c)), d && (b += ', with key ' + se(d)), iu(e, gu(g, b)), e;
              }
              f.onsuccess = function (g) {
                e.A(g.target.result);
              };
              f.onerror = function (g) {
                b += se(c);
                d && (b += ', with key ' + se(d));
                iu(e, fu(g.target, b));
              };
              return e;
            };
          uu.prototype.add = function (a, b) {
            return vu(this, 'adding into ' + this.g.name + ' with value ', a, b);
          };
          uu.prototype.remove = function (a) {
            var b = new hu();
            try {
              var c = this.g['delete'](a);
            } catch (e) {
              return (
                (c = 'removing from ' + this.g.name + ' with key ' + se(a)), iu(b, gu(e, c)), b
              );
            }
            c.onsuccess = function () {
              b.A();
            };
            var d = this;
            c.onerror = function (e) {
              var f = 'removing from ' + d.g.name + ' with key ' + se(a);
              iu(b, fu(e.target, f));
            };
            return b;
          };
          uu.prototype.get = function (a) {
            var b = new hu();
            try {
              var c = this.g.get(a);
            } catch (e) {
              return (
                (c = 'getting from ' + this.g.name + ' with key ' + se(a)), iu(b, gu(e, c)), b
              );
            }
            c.onsuccess = function (e) {
              b.A(e.target.result);
            };
            var d = this;
            c.onerror = function (e) {
              var f = 'getting from ' + d.g.name + ' with key ' + se(a);
              iu(b, fu(e.target, f));
            };
            return b;
          };
          var wu = function (a, b) {
            N.call(this);
            this.g = a;
            this.o = b;
            this.h = new mt(this);
            this.h.T(this.g, 'complete', Wa(this.dispatchEvent, this, 'complete'));
            this.h.T(this.g, 'abort', Wa(this.dispatchEvent, this, 'abort'));
            this.h.T(this.g, 'error', this.ne);
          };
          A(wu, N);
          l = wu.prototype;
          l.ne = function (a) {
            a.target instanceof Tt
              ? this.dispatchEvent({ type: 'error', target: a.target })
              : this.dispatchEvent({ type: 'error', target: fu(a.target, 'in transaction') });
          };
          l.objectStore = function (a) {
            try {
              return new uu(this.g.objectStore(a));
            } catch (b) {
              throw gu(b, 'getting object store ' + a);
            }
          };
          l.commit = function (a) {
            if (this.g.commit || !a)
              try {
                this.g.commit();
              } catch (b) {
                throw gu(b, 'cannot commit the transaction');
              }
          };
          l.wait = function () {
            var a = new hu();
            ui(this, 'complete', Wa(a.A, a));
            var b = ui(this, 'abort', function () {
              Di(c);
              iu(a, new Tt($t, 'waiting for transaction to complete'));
            });
            var c = ui(this, 'error', function (e) {
              Di(b);
              iu(a, e.target);
            });
            var d = this.o;
            return pu(a, function () {
              return d;
            });
          };
          l.abort = function () {
            this.g.abort();
          };
          l.O = function () {
            wu.Ca.O.call(this);
            this.h.V();
          };
          var xu = function () {
            var a = null.Yg,
              b = ['MediaSourceVideoChunk'];
            try {
              var c = a.g.transaction(b, 'readwrite');
              return new wu(c, a);
            } catch (d) {
              throw gu(d, 'creating transaction');
            }
          };
          var yu = { Sg: 'videoId', eg: 'itag', Cg: 'source', Dg: 'startIndex' },
            zu = function (a) {
              var b = Object.keys(yu)
                  .sort()
                  .map(function (d) {
                    return a[yu[d]];
                  })
                  .join(','),
                c = new Qt();
              c.l(b);
              return wb(c.H());
            },
            Au = function (a, b) {
              var c = xu().objectStore('MediaSourceVideoChunk');
              return Promise.resolve(c.get(a)).then(
                function (d) {
                  if (!d) return K(J.C(), 'cenf', '1'), null;
                  if (d.lmt !== b)
                    return (
                      K(J.C(), 'cdl', '1'),
                      c.remove(a).then(null, function (e) {
                        K(J.C(), 'crdlvf', e.message);
                      }),
                      null
                    );
                  K(J.C(), 'cefml', '1');
                  return {
                    endIndex: d.endIndex,
                    isLastVideoChunk: d.isLastVideoChunk,
                    video: d.video,
                  };
                },
                function (d) {
                  K(J.C(), 'cgvf', d.message);
                }
              );
            };
          var Bu = function (a) {
            N.call(this);
            this.D = new Q(a);
            this.B = this.g = this.o = this.h = 0;
            tf(this, function () {
              uf(null);
            });
            this.A = null;
          };
          t(Bu, N);
          var Du = function (a) {
              Aa(function (b) {
                if (1 == b.g) return 2 === a.g && (a.g = 1), ta(b, Cu(a), 4);
                var c = 3 < a.B;
                if (c && null !== a.A) {
                  var d = Vs({
                    code:
                      0 < a.o
                        ? MediaError.MEDIA_ERR_NETWORK
                        : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                    message:
                      'Response code "' +
                      a.A +
                      '" with ' +
                      a.h +
                      ' bytes requested and ' +
                      a.o +
                      ' bytes loaded',
                  });
                  a.dispatchEvent(d);
                }
                a.o < a.h && 3 !== a.g && !c ? (b.g = 1) : (3 !== a.g && (a.g = 0), (b.g = 0));
              });
            },
            Cu = function (a) {
              var b;
              return Aa(function (c) {
                switch (c.g) {
                  case 1:
                    b = a.o + '-' + (a.h - 1);
                    Qr(a.D, 'range', b);
                    c.g = 2;
                    break;
                  case 3:
                    return c.return(Eu(a));
                  case 2:
                    return (c.o = 4), ta(c, Fu(a), 6);
                  case 6:
                    c.g = 0;
                    c.o = 0;
                    break;
                  case 4:
                    (c.o = 0), (c.l = null), a.B++, (c.g = 0);
                }
              });
            },
            Eu = function (a) {
              var b;
              return Aa(function (c) {
                switch (c.g) {
                  case 1:
                    var d = new Ht(a.D);
                    var e = It(d, 'id');
                    var f = It(d, 'itag'),
                      g = It(d, 'source'),
                      h = It(d, 'lmt');
                    (d = d.g.l.get('range'))
                      ? ((d = d.split('-')[0]), (d = !d || isNaN(d) ? null : parseInt(d, 10)))
                      : (d = null);
                    var k = [];
                    e
                      ? f
                        ? g
                          ? h
                            ? null === d && k.push('startIndex')
                            : k.push('lmt')
                          : k.push('source')
                        : k.push('itag')
                      : k.push('videoId');
                    0 < k.length
                      ? (K(J.C(), 'civp', k.join('-')), (e = null))
                      : (e = { videoId: e, itag: f, source: g, lmt: h, startIndex: d + 0 });
                    e ? ((f = zu(e)), (e = Au(f, e.lmt))) : (e = Promise.resolve(null));
                    return ta(c, e, 2);
                  case 2:
                    if ((b = c.H)) {
                      b.isLastVideoChunk && (a.g = 3);
                      Gu(a, b.video, 0);
                      c.g = 0;
                      break;
                    }
                    c.o = 4;
                    return ta(c, Fu(a), 6);
                  case 6:
                    c.g = 0;
                    c.o = 0;
                    break;
                  case 4:
                    (c.o = 0), (c.l = null), a.B++, (c.g = 0);
                }
              });
            },
            Fu = function (a) {
              return new Promise(function (b, c) {
                var d = new XMLHttpRequest(),
                  e = 0,
                  f = a.h - a.o;
                d.addEventListener('load', function () {
                  Ig('lvlcl');
                  var g = d.response;
                  g.byteLength < f && (a.g = 3);
                  g = Gu(a, g, e);
                  e += g;
                  b();
                });
                d.addEventListener('timeout', function () {
                  Ig('lvlct');
                  a.A = d.status;
                  c();
                });
                d.addEventListener('error', function () {
                  Ig('lvlce');
                  a.A = d.status;
                  c();
                });
                d.addEventListener('progress', function () {
                  var g = Gu(a, d.response, e);
                  e += g;
                });
                d.responseType = 'arraybuffer';
                d.open('get', a.D.toString());
                d.send(null);
              });
            },
            Gu = function (a, b, c) {
              if (null === b) return 0;
              b = b.slice(c);
              a.o += b.byteLength;
              a.dispatchEvent({ type: 'progress', ce: b });
              return b.byteLength;
            };
          Bu.prototype.O = function () {
            N.prototype.O.call(this);
          };
          function Hu () {
            return !!window.MediaSource;
          }
          function Iu (a) {
            var b = [43, 44, 45].includes(a);
            return Yg(Zh) && b && Jd
              ? !1
              : qs[a]
              ? ((a = Us(a)), !!a && Hu() && MediaSource.isTypeSupported(a))
              : !1;
          }
          var Ju = function () {};
          Ju.prototype.g = function (a, b, c) {
            return 0 === c ? 1000000 : 5000 > b - a ? 300000 : 0;
          };
          var Ku = function (a, b, c, d) {
            this.url = a;
            this.mimeType = b;
            this.g = c;
            this.h = void 0 === d ? null : d;
          };
          var Nu = function (a) {
            N.call(this);
            var b = this;
            this.g = a;
            this.B = this.g.map(function (c) {
              return os(Bu, c.url);
            });
            this.h = os(MediaSource);
            this.o = [];
            this.D = window.URL.createObjectURL(this.h);
            this.I = 0;
            this.G = !1;
            this.h.addEventListener('sourceopen', function () {
              return Lu(b);
            });
            this.K = Mu(this);
            this.A = 0;
          };
          t(Nu, N);
          var Mu = function (a) {
              for (var b = [], c = 0; c < a.g.length; ++c) b.push(new Ju());
              return b;
            },
            Lu = function (a) {
              for (var b = {}, c = 0; c < a.g.length; b = { zb: b.zb, ob: b.ob }, ++c)
                (b.zb = a.h.addSourceBuffer(a.g[c].mimeType)),
                  (b.ob = a.B[c]),
                  b.ob.T(
                    'progress',
                    (function (d) {
                      return function (e) {
                        var f = d.ob;
                        e = e.ce;
                        0 !== e.byteLength && d.zb.appendBuffer(e);
                        3 === f.g && (a.I++, a.I === a.o.length && Ou(a));
                      };
                    })(b)
                  ),
                  b.ob.T('media_source_error', function (d) {
                    a.dispatchEvent(d);
                  }),
                  a.o.push(b.zb);
              a.G = !0;
              Pu(a);
            },
            Ou = function (a) {
              Promise.all(
                a.o.map(function (b) {
                  return new Promise(function (c) {
                    b.updating
                      ? b.addEventListener('updateend', function () {
                          c();
                        })
                      : c();
                  });
                })
              ).then(function () {
                return a.h.endOfStream();
              });
            },
            Pu = function (a) {
              if (a.G)
                for (var b = 0; b < a.g.length; ++b) {
                  var c = a.B[b],
                    d = a.o[b];
                  d = 0 === d.buffered.length ? 0 : 1000 * d.buffered.end(0);
                  d = a.K[b].g(a.A, d, c.h);
                  0 !== d &&
                    (1 === c.g
                      ? ((c.h += d), (c.g = 2))
                      : 0 === c.g && ((c.h += d), (c.g = 1), Du(c)));
                }
            };
          var Ru = function (a, b, c, d, e) {
            H.call(this);
            this.B = a;
            this.K = new Q(b.url);
            this.h = c;
            this.o = e;
            this.G = b.g;
            this.va = d;
            (this.M = b.h) || this.K.l.remove('alr');
            K(J.C(), 'sl_dv' + this.o, (null != this.M).toString());
            this.N = !this.M;
            this.ea = 0;
            this.g = new XMLHttpRequest();
            this.R = this.L = this.fa = this.D = this.l = 0;
            this.$ = 0.1;
            this.A = [];
            this.I = !1;
            this.U = this.X = this.W = null;
            this.Z = !1;
            Qu(this);
          };
          t(Ru, H);
          var Su = function (a, b) {
              b = Vs({
                code:
                  1 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                message: b,
              });
              a.B.dispatchEvent(b);
            },
            Qu = function (a) {
              a.W = function () {
                Tu(a);
                if (a.N) {
                  var b = a.g.responseText;
                  a.I = !b || b.length < a.G;
                  a.L = 0;
                  Ig('sl_cc' + a.o + '_' + a.l);
                  a.D++;
                  Uu(a);
                }
              };
              a.X = function () {
                return Tu(a);
              };
              a.U = function () {
                Ig('sl_ec' + a.o + '_' + a.l);
                Su(a, 'Failed to load chunk ' + a.l + ' for stream ' + a.o);
              };
              a.g.addEventListener('load', a.W);
              a.g.addEventListener('progress', a.X);
              a.g.addEventListener('error', a.U);
              a.h.addEventListener('updateend', function () {
                a.h.buffered.length &&
                  ((a.fa = a.h.buffered.end(0)),
                  a.I && !a.h.updating && a.l === a.D && (Ig('sl_lc' + a.o), a.va()));
                !a.Z && 1 < a.B.buffered.length && (K(J.C(), 'dbr', '1'), (a.Z = !0));
              });
              a.h.addEventListener('update', function () {
                a.A.length && !a.h.updating && a.h.appendBuffer(a.A.shift());
              });
              a.h.addEventListener('error', function () {
                Ig('msb_err' + a.o);
                var b = Vs({
                  code: MediaError.MEDIA_ERR_DECODE,
                  message: 'Error on SourceBuffer ' + a.o,
                });
                a.B.dispatchEvent(b);
              });
              Vu(a);
            },
            Tu = function (a) {
              if (400 <= a.g.status)
                Su(
                  a,
                  'Response code "' +
                    a.g.status +
                    '" on loading chunk ' +
                    a.l +
                    ' for stream ' +
                    a.o
                );
              else {
                if (!a.N) {
                  var b = a.g.getResponseHeader('content-type');
                  if (b && 0 <= b.indexOf('text/plain')) {
                    a.g.readyState === XMLHttpRequest.DONE &&
                      ((a.K = new Q(a.g.response)), (a.l = 0), (a.D = 0), a.ea++, Vu(a));
                    return;
                  }
                  a.N = !0;
                  Ig('sl_redc' + a.o);
                  K(J.C(), 'sl_tr' + a.o, a.ea.toString());
                }
                a.K.l.remove('alr');
                if (
                  a.g.readyState === XMLHttpRequest.LOADING ||
                  a.g.readyState === XMLHttpRequest.DONE
                ) {
                  b = a.L;
                  for (
                    var c = a.g.response, d = new Uint8Array(c.length - b), e = 0;
                    e < d.length;
                    e++
                  )
                    d[e] = c.charCodeAt(e + b) & 255;
                  b = d.buffer;
                  a.L = a.g.response.length;
                  a.R += b.byteLength;
                  0 < b.byteLength &&
                    (a.h.updating || a.A.length ? a.A.push(b) : a.h.appendBuffer(b));
                }
              }
            },
            Uu = function (a) {
              var b = Ws;
              -1 != b && b < a.R + a.G
                ? (a.B.pause(), (Ws = -1), (b = !1))
                : ((b = a.D === a.l && !a.h.updating && !a.A.length),
                  (b = !a.I && b && a.B.currentTime >= a.$));
              b && ((a.$ = a.fa + 0.1), Vu(a));
            },
            Vu = function (a) {
              Ig('sl_rc' + a.o + '-' + a.l);
              var b = a.l * a.G;
              b = Qr(a.K, 'range', b + '-' + (b + a.G - 1)).toString();
              a.g.open('get', b);
              a.g.overrideMimeType('text/plain; charset=x-user-defined');
              a.g.send(null);
              a.l++;
            };
          Ru.prototype.O = function () {
            this.g.removeEventListener('load', this.W);
            this.g.removeEventListener('progress', this.X);
            this.g.removeEventListener('error', this.U);
            Di(null);
            Di(null);
            H.prototype.O.call(this);
          };
          var Xu = function (a, b) {
            H.call(this);
            var c = this;
            this.B = a;
            this.G = b;
            this.h = new MediaSource();
            this.D = [];
            this.l = [];
            this.g = this.o = null;
            this.A = !1;
            this.I = function () {
              return Wu(c);
            };
            this.h.addEventListener('sourceopen', this.I);
          };
          t(Xu, H);
          var Yu = function (a) {
              if (a.g) return a.g;
              a.g = window.URL.createObjectURL(a.h);
              return a.g;
            },
            Zu = function (a) {
              a.o && a.B.removeEventListener('timeupdate', a.o);
            },
            Wu = function (a) {
              Ig('msmsw_oso');
              a.o = function () {
                if (!a.A) for (var e = r(a.l), f = e.next(); !f.done; f = e.next()) Uu(f.value);
              };
              a.B.addEventListener('timeupdate', a.o);
              for (var b = 0; b < a.G.length; b++) {
                var c = a.G[b];
                K(J.C(), 'msmsw_mime' + b, c.mimeType);
                K(J.C(), 'msmsw_cs' + b, c.mimeType);
                var d = a.h.addSourceBuffer(c.mimeType);
                d
                  ? (a.D.push(d),
                    (c = os(
                      Ru,
                      a.B,
                      c,
                      d,
                      function () {
                        a: if (!a.A) {
                          for (var e = r(a.l), f = e.next(); !f.done; f = e.next())
                            if (((f = f.value), !f.I || f.h.updating || f.A.length)) break a;
                          a.h.endOfStream();
                          a.A = !0;
                          Zu(a);
                        }
                      },
                      b
                    )),
                    a.l.push(c))
                  : Ig('msmsw_sbf' + b);
              }
              K(J.C(), 'msmsw_ns', a.D.length.toString());
            };
          Xu.prototype.O = function () {
            this.g && window.URL.revokeObjectURL(this.g);
            for (var a = r(this.l), b = a.next(); !b.done; b = a.next()) b.value.V();
            Zu(this);
            this.h.removeEventListener('sourceopen', this.I);
            H.prototype.O.call(this);
          };
          var $u = /\/pagead\/conversion|\/pagead\/adview|\/pagead\/gen_204|\/activeview?|csi.gstatic.com\/csi|google.com\/pagead\/xsul|google.com\/ads\/measurement\/l|googleads.g.doubleclick.net\/pagead\/ide_cookie|googleads.g.doubleclick.net\/xbbe\/pixel/,
            av = /outstream.min.js/,
            bv = /outstream.min.css/,
            cv = /fonts.gstatic.com/,
            dv = /googlevideo.com\/videoplayback|c.2mdn.net\/videoplayback|gcdn.2mdn.net\/videoplayback/,
            ev = /custom.elements.min.js/;
          function fv (a, b) {
            var c = 0,
              d = 0,
              e = 0,
              f = 0,
              g = 0,
              h = 0,
              k = 0,
              n = !1,
              m = !1;
            if (
              'function' === typeof La('performance.getEntriesByType', v) &&
              'transferSize' in v.PerformanceResourceTiming.prototype
            ) {
              var u = v.performance.getEntriesByType('resource');
              u = r(u);
              for (var p = u.next(); !p.done; p = u.next())
                (p = p.value),
                  $u.test(p.name) ||
                    ((f += 1),
                    p.transferSize
                      ? ((c += p.transferSize),
                        p.encodedBodySize &&
                          p.transferSize < p.encodedBodySize &&
                          ((h += 1),
                          (e += p.encodedBodySize),
                          av.test(p.name) && (n = !0),
                          bv.test(p.name) && (m = !0)),
                        dv.test(p.name) && (d += p.transferSize))
                      : 0 == p.transferSize && 0 == p.encodedBodySize
                      ? ev.test(p.name)
                        ? (c += 6686)
                        : cv.test(p.name) ||
                          ((k += 1),
                          Hg(J.C(), {
                            event_name: 'unmeasurable_asset',
                            resource_name: p.name,
                            encoded_body_size: p.encodedBodySize,
                            transfer_size: p.transferSize,
                          }))
                      : ((g += 1),
                        (e += p.encodedBodySize),
                        av.test(p.name) && (n = !0),
                        bv.test(p.name) && (m = !0)));
              u = 0;
              if (a.duration) {
                for (p = 0; p < a.buffered.length; p++)
                  u += a.buffered.end(p) - a.buffered.start(p);
                u = Math.min(u, a.duration);
              }
              Hg(J.C(), {
                event_name: b,
                asset_bytes: c,
                video_bytes: d,
                cached_data_bytes: e,
                js_cached: n,
                css_cached: m,
                num_assets: f,
                num_assets_cached: g,
                num_assets_cache_validated: h,
                num_assets_unmeasurable: k,
                video_played_seconds: a.currentTime.toFixed(2),
                video_muted: a.muted,
                video_seconds_loaded: u.toFixed(2),
              });
            } else K(J.C(), 'error', 'reporting_timing_not_supported');
          }
          function gv (a) {
            var b = J.C(),
              c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
            c
              ? ((a = a.currentTime),
                K(b, 'vqdf', String(c.droppedVideoFrames)),
                K(b, 'vqtf', String(c.totalVideoFrames)),
                K(b, 'vqfr', String(Math.round(c.totalVideoFrames / a))))
              : K(b, 'vqu', '1');
          }
          var hv = function () {};
          hv.prototype.toString = function () {
            return 'video_mute';
          };
          var iv = new hv();
          var jv = function (a) {
            H.call(this);
            this.A = 1;
            this.l = [];
            this.o = 0;
            this.g = [];
            this.h = {};
            this.B = !!a;
          };
          A(jv, H);
          jv.prototype.G = function (a) {
            var b = this.g[a];
            b &&
              ((b = this.h[b]),
              0 != this.o
                ? (this.l.push(a), (this.g[a + 1] = Ma))
                : (b && lb(b, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2]));
          };
          jv.prototype.D = function (a, b) {
            var c = this.h[a];
            if (c) {
              for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
              if (this.B)
                for (e = 0; e < c.length; e++) {
                  var g = c[e];
                  kv(this.g[g + 1], this.g[g + 2], d);
                }
              else {
                this.o++;
                try {
                  for (e = 0, f = c.length; e < f; e++)
                    (g = c[e]), this.g[g + 1].apply(this.g[g + 2], d);
                } finally {
                  if ((this.o--, 0 < this.l.length && 0 == this.o))
                    for (; (c = this.l.pop()); ) this.G(c);
                }
              }
            }
          };
          var kv = function (a, b, c) {
            Ui(function () {
              a.apply(b, c);
            });
          };
          jv.prototype.O = function () {
            jv.Ca.O.call(this);
            this.g.length = 0;
            this.h = {};
            this.l.length = 0;
          };
          var lv = function (a) {
            H.call(this);
            this.g = new jv(a);
            vf(this, this.g);
          };
          A(lv, H);
          var mv = function (a, b) {
            a = a.g;
            var c = iv.toString(),
              d = a.h[c];
            d || (d = a.h[c] = []);
            var e = a.A;
            a.g[e] = c;
            a.g[e + 1] = b;
            a.g[e + 2] = void 0;
            a.A = e + 3;
            d.push(e);
          };
          var nv = function () {
            H.call(this);
            this.g = new mt(this);
            vf(this, this.g);
          };
          t(nv, H);
          var ov = function (a, b) {
            nv.call(this, b);
            mv(b, function (c) {
              c ? a.show() : (a.g.mode = 'hidden');
            });
          };
          t(ov, nv);
          var pv = function () {
            N.call(this);
            this.h = new mt(this);
            vf(this, this.h);
          };
          t(pv, N);
          var rv = function (a, b, c) {
            c = void 0 === c ? !0 : c;
            pv.call(this);
            a.setAttribute('crossorigin', 'anonymous');
            var d = Ve('TRACK');
            d.setAttribute('kind', 'captions');
            d.setAttribute('src', b);
            d.setAttribute('default', '');
            a.appendChild(d);
            this.g = a.textTracks[0];
            qv(this);
            c ? this.show() : (this.g.mode = 'hidden');
          };
          t(rv, pv);
          var qv = function (a) {
            var b = a.g;
            b.addEventListener(
              'cuechange',
              function () {
                for (var c = b.cues, d = 0; d < c.length; d++) {
                  var e = c[d];
                  e.align = 'center';
                  e.position = 'auto';
                }
              },
              { once: !0 }
            );
          };
          rv.prototype.show = function () {
            this.g.mode = 'showing';
          };
          function tv (a, b) {
            if ('undefined' !== typeof ReportingObserver) {
              var c = function (e) {
                  e = r(e);
                  for (var f = e.next(); !f.done; f = e.next()) (f = f.value), a(f) && b(f);
                },
                d = new ReportingObserver(c, { buffered: !0 });
              v.addEventListener('unload', function () {
                c(d.takeRecords(), d);
                d.disconnect();
              });
              d.observe();
            }
          }
          function uv (a) {
            a = void 0 === a ? null : a;
            tv(
              function (b) {
                return b.body && 'HeavyAdIntervention' === b.body.id;
              },
              function (b) {
                var c = b.body,
                  d = J.C();
                K(d, 'ham', c.message);
                c.message.includes('Ad was removed because its CPU usage exceeded the limit')
                  ? K(d, 'hacpu', 'true')
                  : c.message.includes(
                      'Ad was removed because its network usage exceeded the limit'
                    ) && K(d, 'habytes', 'true');
                a && a(b);
              }
            );
          }
          var vv = function (a) {
            N.call(this);
            this.g = a;
            this.A = this.B = !1;
            this.D = this.G = 0;
            this.h = new mj(1000);
            vf(this, this.h);
            vi(this.h, 'tick', this.I, !1, this);
            vi(this.g, 'pause', this.o, !1, this);
            vi(this.g, 'playing', this.o, !1, this);
            vi(this.g, 'ended', this.o, !1, this);
            vi(this.g, 'timeupdate', this.o, !1, this);
          };
          t(vv, N);
          vv.prototype.o = function (a) {
            switch (a.type) {
              case 'playing':
                wv(this);
                break;
              case 'pause':
              case 'ended':
                this.h.Wa && this.h.stop();
                break;
              case 'timeupdate':
                !this.B && 0 < this.g.currentTime && ((this.B = !0), wv(this));
            }
          };
          var wv = function (a) {
            !a.h.Wa &&
              a.B &&
              ((a.G = 1000 * a.g.currentTime), (a.D = z()), (a.A = !1), a.h.start());
          };
          vv.prototype.I = function () {
            var a = z(),
              b = 1000 * this.g.currentTime;
            b - this.G < 0.5 * (a - this.D)
              ? this.A || ((this.A = !0), this.dispatchEvent('playbackStalled'))
              : (this.A = !1);
            this.G = b;
            this.D = a;
          };
          var xv = 'autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay'.split(
              ' '
            ),
            yv = 'autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen'.split(
              ' '
            ),
            zv = { childList: !0 },
            Av = HTMLElement;
          /^\s*class\s*\{\s*\}\s*$/.test(function () {}.toString()) ||
            ((Av = function () {
              return v.Reflect.construct(HTMLElement, [], this.__proto__.constructor);
            }),
            Object.setPrototypeOf(Av, HTMLElement),
            Object.setPrototypeOf(Av.prototype, HTMLElement.prototype));
          var Bv = function (a) {
              if (null !== a) {
                a = r(a);
                for (var b = a.next(); !b.done; b = a.next())
                  if (((b = b.value), b.nodeName === 'TRACK'.toString())) return b;
              }
              return null;
            },
            Cv = function (a, b) {
              this.code = a;
              this.message = void 0 === b ? '' : b;
            },
            Dv = function (a) {
              Cv.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, void 0 === a ? '' : a);
            };
          t(Dv, Cv);
          var Hv = function () {
            var a = Av.call(this) || this;
            K(J.C(), 'ulv', '1');
            a.h = null;
            a.J = '';
            a.H = null;
            a.g = Ve('VIDEO');
            Ev(a);
            a.G = new lv();
            Fv(a);
            a.A = null;
            Gv(a);
            a.attachShadow({ mode: 'open' });
            a.shadowRoot.appendChild(a.g);
            uv(function () {
              K(J.C(), 'has', a.src || a.l);
              K(J.C(), 'hat', String(a.g.currentTime));
            });
            a.B = !1;
            a.D = !1;
            return a;
          };
          t(Hv, Av);
          Hv.prototype.attributeChangedCallback = function (a, b, c) {
            switch (a) {
              case 'src':
                Iv(this, c);
                break;
              case 'demuxedaudiosrc':
              case 'demuxedvideosrc':
                Jv(this);
                break;
              case 'muted':
                this.g[a] = '' === c ? !0 : !!c;
                Kv(this, a, c);
                break;
              default:
                Kv(this, a, c);
            }
          };
          var Kv = function (a, b, c) {
              c !== a.g.getAttribute(b) &&
                (null === c ? a.g.removeAttribute(b) : a.g.setAttribute(b, c));
            },
            Lv = function (a) {
              a.h && (a.h.V(), (a.h = null));
            },
            Mv = function (a, b) {
              a.H = b;
              a.g.dispatchEvent(new Event('error'));
            },
            Ev = function (a) {
              Nv(a);
              Ov(a);
              a.g.addEventListener('loadedmetadata', function () {
                var b = a.g.videoWidth,
                  c = a.g.videoHeight,
                  d = Tf(a),
                  e = d.width,
                  f = d.height;
                0 < b &&
                  0 < c &&
                  0 < e &&
                  0 < f &&
                  ((d = d.width / d.height),
                  (b /= c),
                  0.97 <= Math.min(b, d) / Math.max(b, d)
                    ? Lf(a.g, { 'object-fit': 'cover' })
                    : Lf(a.g, { 'object-fit': 'contain' }));
              });
              a.g.addEventListener('play', function () {
                a.D || (fv(a.g, 'first_play'), (a.D = !0));
              });
              a.g.addEventListener('pause', function () {
                a.B || (fv(a.g, 'first_pause'), gv(a.g), (a.B = !0));
              });
              vi(v, 'unload', function () {
                a.B || (fv(a.g, 'first_pause'), gv(a.g), (a.B = !0));
              });
              a.g.addEventListener('stalled', function () {
                K(J.C(), 'ves', '1');
              });
              new vv(a.g).T('playbackStalled', function () {
                return K(J.C(), 'pbs', '1');
              });
              a.g.addEventListener('media_source_error', function (b) {
                Lv(a);
                b = b.detail;
                Mv(a, new Cv(b.code, b.message));
              });
              Pv(a);
            },
            Gv = function (a) {
              var b = Bv(a.childNodes);
              b && Qv(a, b);
              null === a.A && Rv(a);
            },
            Rv = function (a) {
              if (v.MutationObserver) {
                var b = new MutationObserver(function (c) {
                  c = r(c);
                  for (var d = c.next(); !d.done; d = c.next())
                    if (((d = d.value), 'childList' === d.type && (d = Bv(d.addedNodes)))) {
                      Qv(a, d);
                      b.disconnect();
                      break;
                    }
                });
                b.observe(a, zv);
              }
            },
            Fv = function (a) {
              a.g.addEventListener('volumechange', function () {
                a.G.g.D(iv.toString(), a.g.muted);
              });
            },
            Qv = function (a, b) {
              if (null === a.A && b.hasAttribute('src')) {
                var c = b.getAttribute('src');
                a.A = new rv(a.g, c, b.hasAttribute('default'));
                new ov(a.A, a.G);
                c.includes('kind=asr') && K(J.C(), 'act', '1');
              }
            },
            Iv = function (a, b) {
              if (b !== a.J) {
                var c = (a.J = b) ? Ts(b) : null,
                  d = !!c && Iu(c);
                K(J.C(), 'umsem', d ? '1' : '0');
                if (d)
                  if (((b = os(Ku, b, Us(c), 1000 * ps[c], null)), Yg(Sh))) {
                    var e = os(Nu, [b]);
                    e.T('media_source_error', function (f) {
                      f = Vs(f.detail);
                      a.g.dispatchEvent(f);
                    });
                    a.g.addEventListener('timeupdate', function () {
                      e.A = 1000 * a.g.currentTime;
                      Pu(e);
                    });
                    a.g.src = e.D;
                  } else (a.h = os(Xu, a.g, [b])), (a.g.src = Yu(a.h));
                else Lv(a), (a.g.src = b);
                a.g.load();
              }
            },
            Jv = function (a) {
              a.src &&
                Mv(
                  a,
                  new Cv(
                    MediaError.MEDIA_ERR_ABORTED,
                    'Setting demuxed src after src is already set.'
                  )
                );
              if (!a.o && !a.l && a.h) Lv(a), (a.g.src = 'about:blank'), a.g.load();
              else if (a.o && a.l) {
                var b = Ts(a.o),
                  c = Ts(a.l);
                if (c && Iu(c))
                  if (b && Iu(b)) {
                    var d = !!c && Iu(c) && !!b && Iu(b);
                    K(J.C(), 'umsed', d ? '1' : '0');
                    if (Yg(Ph)) {
                      c = os(Ku, a.l, Us(c), -1, null);
                      b = os(Ku, a.o, Us(b), -1, null);
                      var e = os(Nu, [c, b]);
                      e.T('media_source_error', function (f) {
                        f = Vs(f.detail);
                        a.g.dispatchEvent(f);
                      });
                      a.g.addEventListener('timeupdate', function () {
                        e.A = 1000 * a.g.currentTime;
                        Pu(e);
                      });
                      a.g.src = e.D;
                    } else
                      (d = 1000 * ps[b]),
                        (c = os(Ku, a.l, Us(c), 1000 * ps[c], null)),
                        (b = os(Ku, a.o, Us(b), d, null)),
                        (a.h = os(Xu, a.g, [c, b])),
                        (a.g.src = Yu(a.h));
                    a.g.load();
                  } else Mv(a, new Dv('Audio itag "' + b + '" not supported.'));
                else Mv(a, new Dv('Video itag "' + c + '" not supported.'));
              }
            },
            Nv = function (a) {
              for (
                var b = {}, c = r(yv), d = c.next();
                !d.done;
                b = { za: b.za, $b: b.$b }, d = c.next()
              )
                (b.za = d.value),
                  b.za in a.g &&
                    ('function' === typeof a.g[b.za]
                      ? ((b.$b = a.g[b.za].bind(a.g)),
                        Object.defineProperty(a, b.za, {
                          set: (function (e) {
                            return function (f) {
                              a.g[e.za] = f;
                            };
                          })(b),
                          get: (function (e) {
                            return function () {
                              return e.$b;
                            };
                          })(b),
                        }))
                      : Object.defineProperty(a, b.za, {
                          set: (function (e) {
                            return function (f) {
                              a.g[e.za] = f;
                            };
                          })(b),
                          get: (function (e) {
                            return function () {
                              return a.g[e.za];
                            };
                          })(b),
                        }));
            },
            Ov = function (a) {
              Object.defineProperty(a, 'error', {
                set: function () {},
                get: function () {
                  return a.g.error ? a.g.error : a.H;
                },
              });
            },
            Pv = function (a) {
              a.g.style.width = Rf();
              a.g.style.height = Rf();
            };
          da.Object.defineProperties(Hv.prototype, {
            o: {
              configurable: !0,
              enumerable: !0,
              set: function (a) {
                this.setAttribute('demuxedaudiosrc', a);
              },
              get: function () {
                return this.getAttribute('demuxedaudiosrc');
              },
            },
            l: {
              configurable: !0,
              enumerable: !0,
              set: function (a) {
                this.setAttribute('demuxedvideosrc', a);
              },
              get: function () {
                return this.getAttribute('demuxedvideosrc');
              },
            },
            src: {
              configurable: !0,
              enumerable: !0,
              set: function (a) {
                this.setAttribute('src', a);
              },
              get: function () {
                return this.getAttribute('src');
              },
            },
          });
          da.Object.defineProperties(Hv, {
            observedAttributes: {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return xv;
              },
            },
          });
          v.customElements &&
            (v.customElements.get('lima-video') || v.customElements.define('lima-video', Hv));
          var Sv = function () {
            throw Error('Do not instantiate directly');
          };
          Sv.prototype.g = null;
          Sv.prototype.getContent = function () {
            return this.content;
          };
          Sv.prototype.toString = function () {
            return this.content;
          };
          var Tv = function () {
            Sv.call(this);
          };
          A(Tv, Sv);
          var Uv = (function (a) {
            function b (c) {
              this.content = c;
            }
            b.prototype = a.prototype;
            return function (c, d) {
              c = new b(String(c));
              void 0 !== d && (c.g = d);
              return c;
            };
          })(Tv);
          var Vv = {
              rgb: !0,
              rgba: !0,
              alpha: !0,
              rect: !0,
              image: !0,
              'linear-gradient': !0,
              'radial-gradient': !0,
              'repeating-linear-gradient': !0,
              'repeating-radial-gradient': !0,
              'cubic-bezier': !0,
              matrix: !0,
              perspective: !0,
              rotate: !0,
              rotate3d: !0,
              rotatex: !0,
              rotatey: !0,
              steps: !0,
              rotatez: !0,
              scale: !0,
              scale3d: !0,
              scalex: !0,
              scaley: !0,
              scalez: !0,
              skew: !0,
              skewx: !0,
              skewy: !0,
              translate: !0,
              translate3d: !0,
              translatex: !0,
              translatey: !0,
              translatez: !0,
            },
            Wv = function (a) {
              a = fc(a);
              if ('' == a) return null;
              var b = String(a.substr(0, 4)).toLowerCase();
              if (0 == ('url(' < b ? -1 : 'url(' == b ? 0 : 1)) return null;
              if (0 < a.indexOf('(')) {
                if (/"|'/.test(a)) return null;
                b = /([\-\w]+)\(/g;
                for (var c; (c = b.exec(a)); ) if (!(c[1].toLowerCase() in Vv)) return null;
              }
              return a;
            };
          function Xv (a) {
            var b = v.CSSStyleDeclaration;
            return (b && b.prototype && b.prototype[a]) || null;
          }
          var Yv = Xv('getPropertyValue'),
            Zv = Xv('setProperty');
          function $v (a, b, c, d) {
            if (a) return a.apply(b, d);
            if (od && 10 > document.documentMode) {
              if (!b[c].call) throw Error('IE Clobbering detected');
            } else if ('function' != typeof b[c]) throw Error('Clobbering detected');
            return b[c].apply(b, d);
          }
          var aw = {
              '-webkit-border-horizontal-spacing': !0,
              '-webkit-border-vertical-spacing': !0,
            },
            cw = function (a) {
              if (!a) return Cc;
              var b = document.createElement('div').style,
                c = bw(a);
              C(c, function (d) {
                var e =
                  sd && d in aw
                    ? d
                    : d.replace(
                        /^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,
                        ''
                      );
                0 != e.lastIndexOf('--', 0) &&
                  0 != e.lastIndexOf('var', 0) &&
                  ((d =
                    $v(Yv, a, a.getPropertyValue ? 'getPropertyValue' : 'getAttribute', [d]) ||
                    ''),
                  (d = Wv(d)),
                  null != d && $v(Zv, b, b.setProperty ? 'setProperty' : 'setAttribute', [e, d]));
              });
              return new Bc(b.cssText || '', Ac);
            },
            bw = function (a) {
              Oa(a) ? (a = rb(a)) : ((a = Ib(a)), lb(a, 'cssText'));
              return a;
            };
          var dw = function () {
            if (window.MutationObserver) {
              var a = [];
              new MutationObserver(function () {
                a.forEach(function (b) {
                  return b();
                });
                a = [];
              }).observe(document.createTextNode(''), { characterData: !0 });
            }
          };
          ('function' === typeof Promise && -1 < String(Promise).indexOf('[native code]')) || dw();
          var ew = 'abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting'.split(
            ' '
          );
          var fw = function (a) {
              this.g = a;
            },
            gw = function (a, b) {
              return Kb(a.g, b) && ((a = a.g[b]), 'boolean' === typeof a) ? a : !1;
            };
          var V = function () {
              this.D = 'always';
              this.L = 4;
              this.B = 1;
              this.g = 0;
              this.J = !0;
              this.l = 'en';
              this.K = !1;
              this.R = this.N = '';
              this.A = null;
              this.W = this.M = -1;
              this.U = this.I = this.H = '';
              this.G = !1;
              this.h = !0;
              this.X = ns();
              try {
                this.$ = Rk(void 0)[0];
              } catch (a) {}
            },
            hw = function (a) {
              a = Wc(a);
              ec(a) || (a = a.substring(0, 20));
              return a;
            };
          l = V.prototype;
          l.setCompanionBackfill = function (a) {
            this.D = a;
          };
          l.getCompanionBackfill = function () {
            return this.D;
          };
          l.setNumRedirects = function (a) {
            this.L = a;
          };
          l.getNumRedirects = function () {
            return this.L;
          };
          l.setPpid = function (a) {
            this.Z = a;
          };
          l.getPpid = function () {
            return this.Z;
          };
          l.setVpaidAllowed = function (a) {
            'boolean' === typeof a && (this.B = a ? 1 : 0);
          };
          l.setVpaidMode = function (a) {
            this.B = a;
          };
          l.getVpaidMode = function () {
            return this.B;
          };
          l.setAutoPlayAdBreaks = function (a) {
            this.J = a;
          };
          l.isAutoPlayAdBreaks = function () {
            return this.J;
          };
          l.setIsVpaidAdapter = function (a) {
            this.K = a;
          };
          l.vb = function () {
            return this.K;
          };
          l.setLocale = function (a) {
            if ((a = xt(a))) this.l = a;
          };
          l.ke = function () {
            return this.l;
          };
          l.setPlayerType = function (a) {
            this.N = hw(a);
          };
          l.getPlayerType = function () {
            return this.N;
          };
          l.setPlayerVersion = function (a) {
            this.R = hw(a);
          };
          l.getPlayerVersion = function () {
            return this.R;
          };
          var iw = function (a) {
            if (null == a.A) {
              var b = {};
              var c = new Q(G().location.href).l;
              if (Ur(c, 'tcnfp'))
                try {
                  b = JSON.parse(c.get('tcnfp'));
                } catch (d) {}
              a.A = new fw(b);
            }
            return a.A;
          };
          l = V.prototype;
          l.setPageCorrelator = function (a) {
            this.M = a;
          };
          l.setStreamCorrelator = function (a) {
            this.W = a;
          };
          l.setDisableCustomPlaybackForIOS10Plus = function (a) {
            this.G = a;
          };
          l.getDisableCustomPlaybackForIOS10Plus = function () {
            return this.G;
          };
          l.ze = function () {
            return this.h;
          };
          l.setCookiesEnabled = function (a) {
            null != a && (this.h = a);
          };
          l.setDisableFlashAds = function () {};
          l.getDisableFlashAds = function () {
            return !0;
          };
          V.prototype.getDisableFlashAds = V.prototype.getDisableFlashAds;
          V.prototype.setDisableFlashAds = V.prototype.setDisableFlashAds;
          V.prototype.setCookiesEnabled = V.prototype.setCookiesEnabled;
          V.prototype.isCookiesEnabled = V.prototype.ze;
          V.prototype.getDisableCustomPlaybackForIOS10Plus =
            V.prototype.getDisableCustomPlaybackForIOS10Plus;
          V.prototype.setDisableCustomPlaybackForIOS10Plus =
            V.prototype.setDisableCustomPlaybackForIOS10Plus;
          V.prototype.setStreamCorrelator = V.prototype.setStreamCorrelator;
          V.prototype.setPageCorrelator = V.prototype.setPageCorrelator;
          V.prototype.getPlayerVersion = V.prototype.getPlayerVersion;
          V.prototype.setPlayerVersion = V.prototype.setPlayerVersion;
          V.prototype.getPlayerType = V.prototype.getPlayerType;
          V.prototype.setPlayerType = V.prototype.setPlayerType;
          V.prototype.getLocale = V.prototype.ke;
          V.prototype.setLocale = V.prototype.setLocale;
          V.prototype.isVpaidAdapter = V.prototype.vb;
          V.prototype.setIsVpaidAdapter = V.prototype.setIsVpaidAdapter;
          V.prototype.isAutoPlayAdBreaks = V.prototype.isAutoPlayAdBreaks;
          V.prototype.setAutoPlayAdBreaks = V.prototype.setAutoPlayAdBreaks;
          V.prototype.getVpaidMode = V.prototype.getVpaidMode;
          V.prototype.setVpaidMode = V.prototype.setVpaidMode;
          V.prototype.setVpaidAllowed = V.prototype.setVpaidAllowed;
          V.prototype.getPpid = V.prototype.getPpid;
          V.prototype.setPpid = V.prototype.setPpid;
          V.prototype.getNumRedirects = V.prototype.getNumRedirects;
          V.prototype.setNumRedirects = V.prototype.setNumRedirects;
          V.prototype.getCompanionBackfill = V.prototype.getCompanionBackfill;
          V.prototype.setCompanionBackfill = V.prototype.setCompanionBackfill;
          var W = new V();
          var jw = function (a) {
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
            },
            kw = function (a, b) {
              b = void 0 === b ? 500 : b;
              H.call(this);
              this.h = a;
              this.g = null;
              this.o = {};
              this.B = 0;
              this.A = b;
              this.l = null;
            };
          t(kw, H);
          kw.prototype.O = function () {
            this.o = {};
            this.l && (Ee(this.h, 'message', this.l), delete this.l);
            delete this.o;
            delete this.h;
            delete this.g;
            H.prototype.O.call(this);
          };
          kw.prototype.tb = function () {
            return 'function' === typeof this.h.__tcfapi || null != lw(this);
          };
          var ow = function (a, b) {
            var c = { internalErrorState: 0 },
              d = zb(function () {
                return b(c);
              }),
              e = 0;
            -1 !== a.A &&
              (e = setTimeout(function () {
                e = 0;
                c.tcString = 'tcunavailable';
                c.internalErrorState = 1;
                d();
              }, a.A));
            mw(a, 'addEventListener', function (f) {
              f &&
                ((c = f),
                (c.internalErrorState = jw(c)),
                nw(c) &&
                  (0 != c.internalErrorState && (c.tcString = 'tcunavailable'),
                  mw(a, 'removeEventListener', null, c.listenerId),
                  e && (clearTimeout(e), (e = 0)),
                  d()));
            });
          };
          kw.prototype.addEventListener = function (a) {
            var b = {},
              c = zb(function () {
                return a(b);
              }),
              d = 0;
            -1 !== this.A &&
              (d = setTimeout(function () {
                b.tcString = 'tcunavailable';
                b.internalErrorState = 1;
                c();
              }, this.A));
            var e = function (f, g) {
              clearTimeout(d);
              f
                ? ((b = f),
                  (b.internalErrorState = jw(b)),
                  (g && 0 === b.internalErrorState) ||
                    ((b.tcString = 'tcunavailable'), g || (b.internalErrorState = 3)))
                : ((b.tcString = 'tcunavailable'), (b.internalErrorState = 3));
              a(b);
            };
            try {
              mw(this, 'addEventListener', e);
            } catch (f) {
              (b.tcString = 'tcunavailable'),
                (b.internalErrorState = 3),
                d && (clearTimeout(d), (d = 0)),
                c();
            }
          };
          kw.prototype.removeEventListener = function (a) {
            a && a.listenerId && mw(this, 'removeEventListener', null, a.listenerId);
          };
          var pw = function (a) {
              var b = void 0 === b ? !1 : b;
              if (nw(a))
                if (
                  !1 === a.gdprApplies ||
                  'tcunavailable' === a.tcString ||
                  (void 0 === a.gdprApplies && !b) ||
                  'string' !== typeof a.tcString ||
                  !a.tcString.length
                )
                  a = !0;
                else {
                  var c = void 0 === c ? '755' : c;
                  b: {
                    if (
                      a.publisher &&
                      a.publisher.restrictions &&
                      ((b = a.publisher.restrictions['1']), void 0 !== b)
                    ) {
                      b = b[void 0 === c ? '755' : c];
                      break b;
                    }
                    b = void 0;
                  }
                  0 === b
                    ? (a = !1)
                    : a.purpose && a.vendor
                    ? ((b = a.vendor.consents),
                      (c = !(!b || !b[void 0 === c ? '755' : c])) &&
                      a.purposeOneTreatment &&
                      'DE' === a.publisherCC
                        ? (a = !0)
                        : (c && ((a = a.purpose.consents), (c = !(!a || !a['1']))), (a = c)))
                    : (a = !0);
                }
              else a = !1;
              return a;
            },
            mw = function (a, b, c, d) {
              c || (c = function () {});
              if ('function' === typeof a.h.__tcfapi) (a = a.h.__tcfapi), a(b, 2, c, d);
              else if (lw(a)) {
                qw(a);
                var e = ++a.B;
                a.o[e] = c;
                a.g &&
                  ((c = {}),
                  a.g.postMessage(
                    ((c.__tcfapiCall = { command: b, version: 2, callId: e, parameter: d }), c),
                    '*'
                  ));
              } else c({}, !1);
            },
            lw = function (a) {
              if (a.g) return a.g;
              a.g = qf(a.h, '__tcfapiLocator');
              return a.g;
            },
            qw = function (a) {
              a.l ||
                ((a.l = function (b) {
                  try {
                    var c;
                    'string' === typeof b.data ? (c = JSON.parse(b.data)) : (c = b.data);
                    var d = c.__tcfapiReturn;
                    a.o[d.callId](d.returnValue, d.success);
                  } catch (e) {}
                }),
                De(a.h, 'message', a.l));
            },
            nw = function (a) {
              if (!1 === a.gdprApplies) return !0;
              void 0 === a.internalErrorState && (a.internalErrorState = jw(a));
              return 'error' === a.cmpStatus ||
                0 !== a.internalErrorState ||
                ('loaded' === a.cmpStatus &&
                  ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus))
                ? !0
                : !1;
            };
          function rw (a) {
            var b = {};
            new Q(a).l.forEach(function (c, d) {
              b[d] = c;
            });
            return b;
          }
          var tw = function (a) {
              this.fd = a.isGdprLoader || !1;
              this.uspString = a.uspString || '';
              var b = a.gdprApplies;
              this.gdprApplies =
                'boolean' == typeof b
                  ? b
                    ? '1'
                    : '0'
                  : 'number' != typeof b || (1 !== b && 0 !== b)
                  ? 'string' != typeof b || ('1' !== b && '0' !== b)
                    ? ''
                    : '1' == b
                    ? '1'
                    : '0'
                  : 1 == b
                  ? '1'
                  : '0';
              this.g = a.tcString || '';
              /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
            },
            uw = function (a, b) {
              a = void 0 === a ? {} : a;
              b = void 0 === b ? {} : b;
              this.g = a;
              this.h = new tw(b);
            },
            vw = function (a, b) {
              var c = new Q(a);
              var d = c.g;
              (c = dc(c.h, 'googleads.g.doubleclick.net') && vt('/pagead/(live/)?ads', d)) ||
                ((d = new zt(a)),
                (c = d.h),
                (d = At(d, d.g)),
                (c =
                  !dc(c, '.g.doubleclick.net') &&
                  dc(c, 'doubleclick.net') &&
                  vt('/(ad|pfad)[x|i|j]?/', d)));
              c ||
                ((c = new Q(a)),
                (d = c.g),
                (c = dc(c.h, 'doubleclick.net') && vt('/gampad/(live/)?ads', d)));
              (c = c || 'bid.g.doubleclick.net' == new Q(a).h) ||
                ((c = new Q(a)),
                (d = c.g),
                (c = 'ad.doubleclick.net' === c.h && vt('/dv3/adv', d)));
              c ||
                ((c = new Q(a)),
                (d = c.g),
                'pubads.g.doubleclick.net' === c.h && vt('/ondemand/', d));
              return new uw(rw(a), b);
            },
            xw = function (a) {
              if (!W.h || '1' == ww(a, 'ltd')) return !1;
              if ('1' !== a.h.gdprApplies) return !0;
              var b = a.h.g;
              a = ww(a, 'gdpr_consent');
              b = b && 'tcunavailable' != b ? b : 'tcunavailable' == b ? a || b : a || '';
              if ('tcunavailable' === b) return !1;
              if ((a = vr(b)) && b) {
                var c = je(a, Nq, 1);
                a = je(a, Hq, 2) || new Hq();
                var d = ee(c, 9, 0),
                  e = ee(c, 4, 0),
                  f = ee(c, 5, 0),
                  g = fe(c, 10),
                  h = fe(c, 11),
                  k = ee(c, 16, ''),
                  n = fe(c, 15),
                  m = { consents: wr(E(c, 13), ir), legitimateInterests: wr(E(c, 14), ir) },
                  u = {
                    consents: wr(E(c, 17), void 0),
                    legitimateInterests: wr(E(c, 18), void 0),
                  },
                  p = wr(E(c, 12), jr),
                  w = ke(c, Cq, 19);
                c = {};
                w = r(w);
                for (var x = w.next(); !x.done; x = w.next()) {
                  x = x.value;
                  var B = ee(x, 1, 0);
                  c[B] = c[B] || {};
                  for (var la = r(E(x, 3)), lc = la.next(); !lc.done; lc = la.next())
                    c[B][lc.value] = ee(x, 2, 0);
                }
                b = {
                  tcString: b,
                  tcfPolicyVersion: d,
                  gdprApplies: !0,
                  cmpId: e,
                  cmpVersion: f,
                  isServiceSpecific: g,
                  useNonStandardStacks: h,
                  publisherCC: k,
                  purposeOneTreatment: n,
                  purpose: m,
                  vendor: u,
                  specialFeatureOptins: p,
                  publisher: {
                    restrictions: c,
                    consents: wr(E(a, 1), ir),
                    legitimateInterests: wr(E(a, 2), ir),
                    customPurposes: { consents: wr(E(a, 3)), legitimateInterests: wr(E(a, 4)) },
                  },
                };
              } else b = null;
              return b ? pw(b) : !1;
            },
            ww = function (a, b) {
              if (a.g.hasOwnProperty(b)) return a.g[b];
            };
          var yw = ['platform', 'platformVersion', 'architecture', 'model', 'uaFullVersion'],
            zw = function () {
              var a = window;
              return a.navigator &&
                a.navigator.userAgentData &&
                'function' === typeof a.navigator.userAgentData.getHighEntropyValues
                ? a.navigator.userAgentData.getHighEntropyValues(yw).then(function (b) {
                    var c = new yr();
                    c = he(c, 1, b.platform);
                    c = he(c, 2, b.platformVersion);
                    c = he(c, 3, b.architecture);
                    c = he(c, 4, b.model);
                    return he(c, 5, b.uaFullVersion);
                  })
                : null;
            };
          var Bw = function () {
              new uw();
              ns();
              this.deviceId = '';
              this.g = this.referrer = this.location = null;
              Aw(this);
            },
            Cw = function () {
              Bw.C();
              var a = 'h.3.426.0';
              W.vb() && (a += '/vpaid_adapter');
              return a;
            },
            Aw = function (a) {
              var b = zw();
              b &&
                b.then(function (c) {
                  a.g = Td(c.A());
                });
            };
          Na(Bw);
          var Dw = function (a) {
              var b = iw(W);
              if ((b && gw(b, 'forceCustomPlayback')) || W.vb()) return !0;
              if ((wd || gt()) && a) return !1;
              a =
                a &&
                (wd || gt() || ht(10)) &&
                (W.getDisableCustomPlaybackForIOS10Plus() || Yg(Oh));
              return ((vd || xd) && !a) || (ud && (!ud || !ft(et, 4))) || Wl() ? !0 : !1;
            },
            Ew = function (a) {
              return null == a
                ? !1
                : W.vb()
                ? !0
                : yd || wd || gt()
                ? it(a)
                  ? wd || gt() || (ht(10) && W.getDisableCustomPlaybackForIOS10Plus())
                    ? !1
                    : !0
                  : !0
                : (ud && (!ud || !ft(et, 4))) || Wl()
                ? !0
                : !1;
            },
            Fw = function () {
              var a = iw(W);
              return a && gw(a, 'disableOnScreenDetection') ? !1 : !Vl();
            };
          var Gw = function () {
              this.allowCustom = !0;
              this.creativeType = this.resourceType = 'All';
              this.sizeCriteria = 'SelectExactMatch';
              this.nearMatchPercent = 90;
              this.adSlotIds = [];
            },
            Hw = { IMAGE: 'Image', FLASH: 'Flash', ALL: 'All' };
          y(
            'module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.CreativeType',
            Hw,
            void 0
          );
          var Iw = { HTML: 'Html', IFRAME: 'IFrame', STATIC: 'Static', ALL: 'All' };
          y(
            'module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.ResourceType',
            Iw,
            void 0
          );
          var Jw = {
            IGNORE: 'IgnoreSize',
            SELECT_EXACT_MATCH: 'SelectExactMatch',
            SELECT_NEAR_MATCH: 'SelectNearMatch',
          };
          y(
            'module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.SizeCriteria',
            Jw,
            void 0
          );
          var Kw = !1,
            Lw = function (a) {
              if ((a = a.match(/[\d]+/g))) a.length = 3;
            };
          (function () {
            if (navigator.plugins && navigator.plugins.length) {
              var a = navigator.plugins['Shockwave Flash'];
              if (a && ((Kw = !0), a.description)) {
                Lw(a.description);
                return;
              }
              if (navigator.plugins['Shockwave Flash 2.0']) {
                Kw = !0;
                return;
              }
            }
            if (
              navigator.mimeTypes &&
              navigator.mimeTypes.length &&
              ((a = navigator.mimeTypes['application/x-shockwave-flash']),
              (Kw = !(!a || !a.enabledPlugin)))
            ) {
              Lw(a.enabledPlugin.description);
              return;
            }
            if ('undefined' != typeof ActiveXObject) {
              try {
                var b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7');
                Kw = !0;
                Lw(b.GetVariable('$version'));
                return;
              } catch (c) {}
              try {
                b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
                Kw = !0;
                return;
              } catch (c) {}
              try {
                (b = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')),
                  (Kw = !0),
                  Lw(b.GetVariable('$version'));
              } catch (c) {}
            }
          })();
          var Mw = Kw;
          var Ow = function (a, b) {
              b = void 0 === b ? new Gw() : b;
              this.h = a;
              this.g = b ? b : new Gw();
              this.B = Nw(Iw, this.g.resourceType) ? this.g.resourceType : 'All';
              this.o = Nw(Hw, this.g.creativeType) ? this.g.creativeType : 'All';
              this.H = Nw(Jw, this.g.sizeCriteria) ? this.g.sizeCriteria : 'SelectExactMatch';
              this.l = null != this.g.adSlotIds ? this.g.adSlotIds : [];
              this.A =
                'number' === typeof this.g.nearMatchPercent &&
                0 < this.g.nearMatchPercent &&
                100 >= this.g.nearMatchPercent
                  ? this.g.nearMatchPercent
                  : 90;
            },
            Rw = function (a, b) {
              var c = [];
              b.forEach(function (d) {
                a.g.allowCustom &&
                  (!ec(d.getContent()) &&
                  (isNaN(d.g.sequenceNumber) ||
                    isNaN(d.g.mainAdSequenceNumber) ||
                    d.g.mainAdSequenceNumber == d.g.sequenceNumber) &&
                  Pw(a, d)
                    ? c.push(d)
                    : ((d = Qw(a, d)), null != d && !ec(d.getContent()) && c.push(d)));
              });
              return c;
            },
            Pw = function (a, b) {
              var c;
              if ((c = 'Flash' != b.getContentType() || Mw)) {
                if ((c = 'All' == a.B || a.B == b.g.resourceType))
                  (c = b.getContentType()), (c = null == c ? !0 : 'All' == a.o || a.o == c);
                c && ((c = b.$c()), (c = 0 == a.l.length ? !0 : null != c ? a.l.includes(c) : !1));
              }
              if (c)
                if (
                  ((b = b.g.size),
                  (c = 'IgnoreSize' == a.H) ||
                    ((c = a.h),
                    (c = c == b ? !0 : c && b ? c.width == b.width && c.height == b.height : !1)),
                  c)
                )
                  a = !0;
                else {
                  if ((c = 'SelectNearMatch' == a.H))
                    (c = b.width),
                      (b = b.height),
                      (c =
                        c > a.h.width ||
                        b > a.h.height ||
                        c < (a.A / 100) * a.h.width ||
                        b < (a.A / 100) * a.h.height
                          ? !1
                          : !0);
                  a = c;
                }
              else a = !1;
              return a;
            },
            Qw = function (a, b) {
              b = Sw(b);
              return null == b
                ? null
                : b.find(function (c) {
                    return Pw(a, c);
                  }) || null;
            },
            Nw = function (a, b) {
              return null != b && Lb(a, b);
            };
          var X = {},
            Tw =
              ((X.creativeView = 'creativeview'),
              (X.start = 'start'),
              (X.midpoint = 'midpoint'),
              (X.firstQuartile = 'firstquartile'),
              (X.thirdQuartile = 'thirdquartile'),
              (X.complete = 'complete'),
              (X.mute = 'mute'),
              (X.unmute = 'unmute'),
              (X.pause = 'pause'),
              (X.rewind = 'rewind'),
              (X.resume = 'resume'),
              (X.fullscreen = 'fullscreen'),
              (X.exitFullscreen = 'exitfullscreen'),
              (X.expand = 'expand'),
              (X.collapse = 'collapse'),
              (X.close = 'close'),
              (X.acceptInvitation = 'acceptinvitation'),
              (X.userInteraction = 'userInteraction'),
              (X.adCanPlay = 'adCanPlay'),
              (X.adStarted = 'adStarted'),
              (X.abandon = 'abandon'),
              (X.acceptInvitationLinear = 'acceptinvitationlinear'),
              (X.engagedView = 'engagedview'),
              (X.instreamAdComplete = 'instreamAdComplete'),
              (X.skipShown = 'skipshown'),
              (X.skippableStateChanged = 'skippableStateChanged'),
              (X.skip = 'skip'),
              (X.progress = 'progress'),
              (X.publisher_invoked_skip = 'PUBLISHER_INVOKED_SKIP'),
              (X.annotation_start = 'annotation_start'),
              (X.annotation_click = 'annotation_click'),
              (X.annotation_close = 'annotation_close'),
              (X.cta_annotation_shown = 'cta_annotation_shown'),
              (X.cta_annotation_clicked = 'cta_annotation_clicked'),
              (X.cta_annotation_closed = 'cta_annotation_closed'),
              (X.replay = 'replay'),
              (X.stop = 'stop'),
              (X.autoplayDisallowed = 'autoplayDisallowed'),
              (X.error = 'error'),
              (X.mediaLoadTimeout = 'mediaLoadTimeout'),
              (X.linearChanged = 'linearChanged'),
              (X.click = 'click'),
              (X.contentPauseRequested = 'contentPauseRequested'),
              (X.contentResumeRequested = 'contentResumeRequested'),
              (X.discardAdBreak = 'discardAdBreak'),
              (X.updateAdsRenderingSettings = 'updateAdsRenderingSettings'),
              (X.durationChange = 'durationChange'),
              (X.expandedChanged = 'expandedChanged'),
              (X.autoClose = 'autoClose'),
              (X.userClose = 'userClose'),
              (X.userRecall = 'userRecall'),
              (X.prefetched = 'prefetched'),
              (X.loaded = 'loaded'),
              (X.init = 'init'),
              (X.allAdsCompleted = 'allAdsCompleted'),
              (X.adMetadata = 'adMetadata'),
              (X.adBreakReady = 'adBreakReady'),
              (X.adBreakFetchError = 'adBreakFetchError'),
              (X.log = 'log'),
              (X.volumeChange = 'volumeChange'),
              (X.companionBackfill = 'companionBackfill'),
              (X.companionInitialized = 'companionInitialized'),
              (X.companionImpression = 'companionImpression'),
              (X.companionClick = 'companionClick'),
              (X.impression = 'impression'),
              (X.interaction = 'interaction'),
              (X.adProgress = 'adProgress'),
              (X.adBuffering = 'adBuffering'),
              (X.trackingUrlPinged = 'trackingUrlPinged'),
              (X.measurable_impression = 'measurable_impression'),
              (X.custom_metric_viewable = 'custom_metric_viewable'),
              (X.viewable_impression = 'viewable_impression'),
              (X.fully_viewable_audible_half_duration_impression =
                'fully_viewable_audible_half_duration_impression'),
              (X.overlay_resize = 'overlay_resize'),
              (X.overlay_unmeasurable_impression = 'overlay_unmeasurable_impression'),
              (X.overlay_unviewable_impression = 'overlay_unviewable_impression'),
              (X.overlay_viewable_immediate_impression = 'overlay_viewable_immediate_impression'),
              (X.overlay_viewable_end_of_session_impression =
                'overlay_viewable_end_of_session_impression'),
              (X.externalActivityEvent = 'externalActivityEvent'),
              (X.adEvent = 'adEvent'),
              (X.configure = 'configure'),
              (X.remainingTime = 'remainingTime'),
              (X.destroy = 'destroy'),
              (X.resize = 'resize'),
              (X.volume = 'volume'),
              (X.sendAbandonUrls = 'sendAbandonUrls'),
              (X.authorIconClicked = 'videoAuthorIconClicked'),
              (X.authorNameClicked = 'videoAuthorClicked'),
              (X.videoClicked = 'videoClicked'),
              (X.videoIconClicked = 'videoIconClicked'),
              (X.learnMoreClicked = 'videoLearnMoreClicked'),
              (X.muteClicked = 'videoMuteClicked'),
              (X.titleClicked = 'videoTitleClicked'),
              (X.skipShown = 'SKIP_SHOWN'),
              (X.videoSkipClicked = 'SKIPPED'),
              (X.unmuteClicked = 'videoUnmuteClicked'),
              (X.vpaidEvent = 'vpaidEvent'),
              (X.show_ad = 'show_ad'),
              (X.video_card_endcap_collapse = 'video_card_endcap_collapse'),
              (X.video_card_endcap_dismiss = 'video_card_endcap_dismiss'),
              (X.video_card_endcap_impression = 'video_card_endcap_impression'),
              (X.mediaUrlPinged = 'mediaUrlPinged'),
              (X.breakStart = 'breakstart'),
              (X.breakEnd = 'breakend'),
              (X.omidReady = 'omidReady'),
              (X.omidUnavailable = 'omidUnavailable'),
              (X.omidAdSessionCompleted = 'omidAdSessionCompleted'),
              (X.omidAdSessionAbandoned = 'omidAdSessionAbandoned'),
              (X.verificationNotExecuted = 'verificationNotExecuted'),
              (X.loadStart = 'loadStart'),
              (X.seeked = 'seeked'),
              (X.seeking = 'seeking'),
              X);
          var Uw = function (a) {
            N.call(this);
            this.A = a || 'goog_' + Xc++;
            this.o = [];
            this.h = !1;
          };
          t(Uw, N);
          Uw.prototype.connect = function () {
            for (this.h = !0; 0 != this.o.length; ) {
              var a = this.o.shift();
              this.sendMessage(a.name, a.type, a.data);
            }
          };
          var Vw = function (a, b, c, d) {
            a.h ? a.sendMessage(b, c, d) : a.o.push({ name: b, type: c, data: d });
          };
          Uw.prototype.sendMessage = function () {};
          function Ww (a) {
            a = at(a, Vl() ? 'https' : window.location.protocol);
            if (Vl()) Xw(a);
            else
              try {
                a && (Zr(a) ? cs(a) : gs(a));
              } catch (b) {}
          }
          function Xw (a) {
            new rt().get(a, new Xs()).then(
              function () {},
              function () {}
            );
          }
          var Yw = function (a, b, c) {
            var d = Error.call(this);
            this.message = d.message;
            'stack' in d && (this.stack = d.stack);
            this.l = b;
            this.g = c;
            this.o = a;
          };
          t(Yw, Error);
          l = Yw.prototype;
          l.getAd = function () {
            return this.A;
          };
          l.getInnerError = function () {
            return this.h;
          };
          l.getMessage = function () {
            return this.l;
          };
          l.getErrorCode = function () {
            return this.g;
          };
          l.cd = function () {
            return 1000 > this.g ? this.g : 900;
          };
          l.getType = function () {
            return this.o;
          };
          l.toString = function () {
            return (
              'AdError ' +
              this.getErrorCode() +
              ': ' +
              this.getMessage() +
              (null != this.getInnerError() ? ' Caused by: ' + this.getInnerError() : '')
            );
          };
          var Zw = function (a, b) {
            this.message = a;
            this.errorCode = b;
          };
          Zw.prototype.getErrorCode = function () {
            return this.errorCode;
          };
          Zw.prototype.getMessage = function () {
            return this.message;
          };
          var $w = new Zw(
              'Failed to initialize ad playback element before starting ad playback.',
              400
            ),
            ax = new Zw('The provided {0} information: {1} is invalid.', 1101);
          function bx (a, b, c) {
            var d = void 0 === b ? null : b;
            if (!(d instanceof Yw)) {
              var e = a.errorCode,
                f = a.message,
                g = Array.prototype.slice.call(arguments, 2);
              if (0 < g.length)
                for (var h = 0; h < g.length; h++)
                  f = f.replace(new RegExp('\\{' + h + '\\}', 'ig'), g[h]);
              e = new Yw('adPlayError', f, e);
              e.h = d;
              d = e;
            }
            return d;
          }
          var cx = function () {
            N.call(this);
            this.K = !1;
            this.g = null;
            this.D = this.I = this.M = !1;
            this.h = 0;
            this.A = [];
            this.G = !1;
            this.R = this.N = Infinity;
            this.o = 0;
            this.B = new mt(this);
            this.L = {};
          };
          t(cx, N);
          var ex = function (a, b) {
              null == b || a.K || ((a.g = b), dx(a), (a.K = !0));
            },
            gx = function (a) {
              null != a.g &&
                a.K &&
                (fx(a), (a.K = !1), (a.I = !1), (a.D = !1), (a.h = 0), (a.A = []), (a.G = !1));
            },
            dx = function (a) {
              fx(a);
              !(a.g instanceof N) && 'ontouchstart' in document.documentElement && yd
                ? ((a.L = {
                    touchstart: function (b) {
                      a.I = !0;
                      a.h = b.touches.length;
                      a.o && (window.clearTimeout(a.o), (a.o = 0), (a.M = !0));
                      a.G = hx(a, b.touches) || 1 != b.touches.length;
                      a.G
                        ? ((a.N = Infinity), (a.R = Infinity))
                        : ((a.N = b.touches[0].clientX), (a.R = b.touches[0].clientY));
                      b = b.touches;
                      a.A = [];
                      for (var c = 0; c < b.length; c++) a.A.push(b[c].identifier);
                    },
                    touchmove: function (b) {
                      a.h = b.touches.length;
                      if (
                        !ht(8) ||
                        Math.pow(b.changedTouches[0].clientX - a.N, 2) +
                          Math.pow(b.changedTouches[0].clientY - a.R, 2) >
                          Math.pow(5, 2)
                      )
                        a.D = !0;
                    },
                    touchend: function (b) {
                      return void ix(a, b);
                    },
                  }),
                  Bb(a.L, function (b, c) {
                    a.g.addEventListener(c, b, !1);
                  }))
                : a.B.T(a.g, 'click', a.U);
            },
            fx = function (a) {
              a.B.Qa(a.g, 'click', a.U);
              Bb(
                a.L,
                function (b, c) {
                  this.g.removeEventListener(c, b, !1);
                },
                a
              );
              a.L = {};
            },
            ix = function (a, b) {
              !a.I ||
                1 != a.h ||
                a.D ||
                a.M ||
                a.G ||
                !hx(a, b.changedTouches) ||
                (a.o = window.setTimeout(function () {
                  return void jx(a);
                }, 300));
              a.h = b.touches.length;
              0 == a.h && ((a.I = !1), (a.D = !1), (a.A = []));
              a.M = !1;
            };
          cx.prototype.U = function () {
            jx(this);
          };
          var hx = function (a, b) {
              for (var c = 0; c < b.length; c++) if (a.A.includes(b[c].identifier)) return !0;
              return !1;
            },
            jx = function (a) {
              a.o = 0;
              a.dispatchEvent(new gi('click'));
            };
          cx.prototype.O = function () {
            gx(this);
            this.B.V();
            this.B = null;
            N.prototype.O.call(this);
          };
          var kx = function (a, b, c) {
            this.h = c;
            0 == b.length && (b = [[]]);
            this.g = b.map(function (d) {
              d = a.concat(d);
              for (var e = [], f = 0, g = 0; f < d.length; ) {
                var h = d[f++];
                if (128 > h) e[g++] = String.fromCharCode(h);
                else if (191 < h && 224 > h) {
                  var k = d[f++];
                  e[g++] = String.fromCharCode(((h & 31) << 6) | (k & 63));
                } else if (239 < h && 365 > h) {
                  k = d[f++];
                  var n = d[f++],
                    m = d[f++];
                  h = (((h & 7) << 18) | ((k & 63) << 12) | ((n & 63) << 6) | (m & 63)) - 65536;
                  e[g++] = String.fromCharCode(55296 + (h >> 10));
                  e[g++] = String.fromCharCode(56320 + (h & 1023));
                } else
                  (k = d[f++]),
                    (n = d[f++]),
                    (e[g++] = String.fromCharCode(((h & 15) << 12) | ((k & 63) << 6) | (n & 63)));
              }
              return new RegExp(e.join(''));
            });
          };
          kx.prototype.match = function (a) {
            var b = this;
            return this.g.some(function (c) {
              c = a.match(c);
              return null == c
                ? !1
                : !b.h ||
                  (1 <= c.length && '3.426.0' == c[1]) ||
                  (2 <= c.length && '3.426.0' == c[2])
                ? !0
                : !1;
            });
          };
          var lx = [
              104,
              116,
              116,
              112,
              115,
              63,
              58,
              47,
              47,
              105,
              109,
              97,
              115,
              100,
              107,
              92,
              46,
              103,
              111,
              111,
              103,
              108,
              101,
              97,
              112,
              105,
              115,
              92,
              46,
              99,
              111,
              109,
              47,
              106,
              115,
              47,
              40,
              115,
              100,
              107,
              108,
              111,
              97,
              100,
              101,
              114,
              124,
              99,
              111,
              114,
              101,
              41,
              47,
            ],
            mx = [
              104,
              116,
              116,
              112,
              115,
              63,
              58,
              47,
              47,
              115,
              48,
              92,
              46,
              50,
              109,
              100,
              110,
              92,
              46,
              110,
              101,
              116,
              47,
              105,
              110,
              115,
              116,
              114,
              101,
              97,
              109,
              47,
              104,
              116,
              109,
              108,
              53,
              47,
            ],
            nx = [
              104,
              116,
              116,
              112,
              115,
              63,
              58,
              47,
              47,
              105,
              109,
              97,
              115,
              100,
              107,
              92,
              46,
              103,
              111,
              111,
              103,
              108,
              101,
              97,
              112,
              105,
              115,
              92,
              46,
              99,
              111,
              109,
              47,
              112,
              114,
              101,
              114,
              101,
              108,
              101,
              97,
              115,
              101,
              47,
              106,
              115,
              47,
              91,
              48,
              45,
              57,
              93,
              43,
              92,
              46,
              91,
              48,
              45,
              57,
              92,
              46,
              93,
              43,
              47,
            ],
            ox = [
              [105, 109, 97, 51, 92, 46, 106, 115],
              [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115],
            ],
            px = [
              [
                98,
                114,
                105,
                100,
                103,
                101,
                40,
                91,
                48,
                45,
                57,
                93,
                43,
                92,
                46,
                91,
                48,
                45,
                57,
                92,
                46,
                93,
                43,
                41,
                40,
                95,
                40,
                91,
                97,
                45,
                122,
                48,
                45,
                57,
                93,
                41,
                123,
                50,
                44,
                51,
                125,
                41,
                123,
                48,
                44,
                50,
                125,
                92,
                46,
                104,
                116,
                109,
                108,
              ],
              [
                98,
                114,
                105,
                100,
                103,
                101,
                40,
                91,
                48,
                45,
                57,
                93,
                43,
                92,
                46,
                91,
                48,
                45,
                57,
                92,
                46,
                93,
                43,
                41,
                95,
                100,
                101,
                98,
                117,
                103,
                40,
                95,
                40,
                91,
                97,
                45,
                122,
                48,
                45,
                57,
                93,
                41,
                123,
                50,
                44,
                51,
                125,
                41,
                123,
                48,
                44,
                50,
                125,
                92,
                46,
                104,
                116,
                109,
                108,
              ],
              [
                98,
                114,
                105,
                100,
                103,
                101,
                40,
                95,
                40,
                91,
                97,
                45,
                122,
                48,
                45,
                57,
                93,
                41,
                123,
                50,
                44,
                51,
                125,
                41,
                123,
                48,
                44,
                50,
                125,
                92,
                46,
                104,
                116,
                109,
                108,
              ],
            ],
            qx = [
              [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
              [
                111,
                117,
                116,
                115,
                116,
                114,
                101,
                97,
                109,
                95,
                100,
                101,
                98,
                117,
                103,
                92,
                46,
                106,
                115,
              ],
            ],
            rx = new kx(lx, ox, !1),
            sx = new kx(lx, px, !0),
            tx = new kx(mx, ox, !1),
            ux = new kx(mx, px, !0),
            vx = new kx(nx, ox, !1),
            wx = new kx(
              [
                104,
                116,
                116,
                112,
                115,
                63,
                58,
                47,
                47,
                40,
                112,
                97,
                103,
                101,
                97,
                100,
                50,
                124,
                116,
                112,
                99,
                41,
                92,
                46,
                103,
                111,
                111,
                103,
                108,
                101,
                115,
                121,
                110,
                100,
                105,
                99,
                97,
                116,
                105,
                111,
                110,
                92,
                46,
                99,
                111,
                109,
                47,
                112,
                97,
                103,
                101,
                97,
                100,
                47,
                40,
                103,
                97,
                100,
                103,
                101,
                116,
                115,
                124,
                106,
                115,
                41,
                47,
              ],
              [],
              !1
            ),
            xx = new kx(
              lx,
              [
                [
                  100,
                  97,
                  105,
                  95,
                  105,
                  102,
                  114,
                  97,
                  109,
                  101,
                  40,
                  91,
                  48,
                  45,
                  57,
                  93,
                  43,
                  92,
                  46,
                  91,
                  48,
                  45,
                  57,
                  92,
                  46,
                  93,
                  43,
                  41,
                  40,
                  95,
                  40,
                  91,
                  97,
                  45,
                  122,
                  48,
                  45,
                  57,
                  93,
                  41,
                  123,
                  50,
                  44,
                  51,
                  125,
                  41,
                  123,
                  48,
                  44,
                  50,
                  125,
                  92,
                  46,
                  104,
                  116,
                  109,
                  108,
                ],
                [
                  100,
                  97,
                  105,
                  95,
                  105,
                  102,
                  114,
                  97,
                  109,
                  101,
                  40,
                  91,
                  48,
                  45,
                  57,
                  93,
                  43,
                  92,
                  46,
                  91,
                  48,
                  45,
                  57,
                  92,
                  46,
                  93,
                  43,
                  41,
                  95,
                  100,
                  101,
                  98,
                  117,
                  103,
                  40,
                  95,
                  40,
                  91,
                  97,
                  45,
                  122,
                  48,
                  45,
                  57,
                  93,
                  41,
                  123,
                  50,
                  44,
                  51,
                  125,
                  41,
                  123,
                  48,
                  44,
                  50,
                  125,
                  92,
                  46,
                  104,
                  116,
                  109,
                  108,
                ],
                [
                  100,
                  97,
                  105,
                  95,
                  105,
                  102,
                  114,
                  97,
                  109,
                  101,
                  40,
                  95,
                  40,
                  91,
                  97,
                  45,
                  122,
                  48,
                  45,
                  57,
                  93,
                  41,
                  123,
                  50,
                  44,
                  51,
                  125,
                  41,
                  123,
                  48,
                  44,
                  50,
                  125,
                  92,
                  46,
                  104,
                  116,
                  109,
                  108,
                ],
              ],
              !0
            ),
            yx = new kx(lx, qx, !1),
            zx = new kx(nx, qx, !1),
            Db = { Nf: rx, Lf: sx, gg: tx, fg: ux, Of: vx, Fg: wx, Mf: xx, qg: yx, rg: zx };
          var Ax = function () {
              var a = G(),
                b = document;
              return new Q(a.parent == a ? a.location.href : b.referrer);
            },
            Bx = function (a, b) {
              Qr(a, 'url', '');
              try {
                var c = 2083 - a.toString().length - 1;
                if (0 >= c) return a.toString();
                for (
                  var d = b.slice(0, c), e = encodeURIComponent(d), f = c;
                  0 < f && e.length > c;

                )
                  (d = b.slice(0, f--)), (e = encodeURIComponent(d));
                Qr(a, 'url', d);
              } catch (g) {}
              return a.toString();
            };
          var Cx = function () {
            this.g = 0.01 > Math.random();
            this.h = Math.floor(4503599627370496 * Math.random());
          };
          Cx.prototype.report = function (a, b, c) {
            b = void 0 === b ? {} : b;
            if (null == v.G_testRunner && (this.g || (void 0 === c ? 0 : c))) {
              b.lid = a;
              b.sdkv = Cw();
              a = bh().sort().join(',');
              ec(Wc(a)) || (b.e = a);
              b = Dx(this, b);
              var d = new Q('http://pagead2.googlesyndication.com/pagead/gen_204');
              Bb(
                b,
                function (e, f) {
                  Qr(d, f, null == e ? '' : 'boolean' == typeof e ? (e ? 't' : 'f') : '' + e);
                },
                this
              );
              b = Ax();
              Dr(d, b.o);
              b = d.toString();
              a = d.l.get('url');
              null != a && Gc() && 2083 < b.length && (b = Bx(d, a));
              Ww(b);
            }
          };
          var Dx = function (a, b) {
            b.id = 'ima_html5';
            var c = Ax();
            b.c = a.h;
            b.domain = c.h;
            return b;
          };
          Na(Cx);
          var Ex = function (a, b, c, d, e) {
            e = void 0 === e ? '' : e;
            gi.call(this, a);
            this.ka = b;
            this.na = c;
            this.Rb = d;
            this.od = e;
          };
          t(Ex, gi);
          Ex.prototype.toString = function () {
            return '';
          };
          var Fx = function (a) {
            this.g = a;
          };
          l = Fx.prototype;
          l.getTotalAds = function () {
            return this.g.totalAds;
          };
          l.getMaxDuration = function () {
            return this.g.maxDuration;
          };
          l.getAdPosition = function () {
            return this.g.adPosition;
          };
          l.getPodIndex = function () {
            return this.g.podIndex;
          };
          l.getTimeOffset = function () {
            return this.g.timeOffset;
          };
          l.getIsBumper = function () {
            return this.g.isBumper;
          };
          Fx.prototype.getIsBumper = Fx.prototype.getIsBumper;
          Fx.prototype.getTimeOffset = Fx.prototype.getTimeOffset;
          Fx.prototype.getPodIndex = Fx.prototype.getPodIndex;
          Fx.prototype.getAdPosition = Fx.prototype.getAdPosition;
          Fx.prototype.getMaxDuration = Fx.prototype.getMaxDuration;
          Fx.prototype.getTotalAds = Fx.prototype.getTotalAds;
          var Gx = function (a) {
            this.g = a;
          };
          l = Gx.prototype;
          l.getContent = function () {
            return this.g.content;
          };
          l.getContentType = function () {
            return this.g.contentType;
          };
          l.getWidth = function () {
            return this.g.size.width;
          };
          l.getHeight = function () {
            return this.g.size.height;
          };
          l.$c = function () {
            return this.g.adSlotId;
          };
          var Sw = function (a) {
            return (a = a.g.backupCompanions)
              ? a.map(function (b) {
                  return new Gx(b);
                })
              : [];
          };
          Gx.prototype.getAdSlotId = Gx.prototype.$c;
          Gx.prototype.getHeight = Gx.prototype.getHeight;
          Gx.prototype.getWidth = Gx.prototype.getWidth;
          Gx.prototype.getContentType = Gx.prototype.getContentType;
          Gx.prototype.getContent = Gx.prototype.getContent;
          var Hx = function (a, b) {
            this.h = a;
            this.g = b;
          };
          Hx.prototype.getAdIdValue = function () {
            return this.h;
          };
          Hx.prototype.getAdIdRegistry = function () {
            return this.g;
          };
          Hx.prototype.getAdIdRegistry = Hx.prototype.getAdIdRegistry;
          Hx.prototype.getAdIdValue = Hx.prototype.getAdIdValue;
          var Y = function (a) {
            this.g = a;
          };
          Y.prototype.getAdId = function () {
            return this.g.adId;
          };
          Y.prototype.getCreativeAdId = function () {
            return this.g.creativeAdId;
          };
          Y.prototype.getCreativeId = function () {
            return this.g.creativeId;
          };
          var Ix = function (a) {
            return a.g.adQueryId;
          };
          l = Y.prototype;
          l.getAdSystem = function () {
            return this.g.adSystem;
          };
          l.getAdvertiserName = function () {
            return this.g.advertiserName;
          };
          l.getApiFramework = function () {
            return this.g.apiFramework;
          };
          l.getWrapperAdIds = function () {
            return this.g.adWrapperIds;
          };
          l.getWrapperCreativeIds = function () {
            return this.g.adWrapperCreativeIds;
          };
          l.getWrapperAdSystems = function () {
            return this.g.adWrapperSystems;
          };
          l.isLinear = function () {
            return this.g.linear;
          };
          l.isSkippable = function () {
            return this.g.skippable;
          };
          l.getContentType = function () {
            return this.g.contentType;
          };
          l.je = function () {
            return this.g.description;
          };
          l.le = function () {
            return this.g.title;
          };
          l.getDuration = function () {
            return this.g.duration;
          };
          l.getVastMediaWidth = function () {
            return this.g.vastMediaWidth;
          };
          l.getVastMediaHeight = function () {
            return this.g.vastMediaHeight;
          };
          l.getWidth = function () {
            return this.g.width;
          };
          l.getHeight = function () {
            return this.g.height;
          };
          l.getUiElements = function () {
            return this.g.uiElements;
          };
          l.getMinSuggestedDuration = function () {
            return this.g.minSuggestedDuration;
          };
          l.getAdPodInfo = function () {
            return new Fx(this.g.adPodInfo);
          };
          l.getCompanionAds = function (a, b, c) {
            var d = this.g.companions.map(function (e) {
              return new Gx(e);
            });
            return Rw(new Ow(new Je(a, b), c), d);
          };
          l.getTraffickingParameters = function () {
            return wt(Wc(this.g.traffickingParameters));
          };
          l.getTraffickingParametersString = function () {
            return this.g.traffickingParameters;
          };
          l.getVastMediaBitrate = function () {
            return this.g.vastMediaBitrate;
          };
          l.getMediaUrl = function () {
            return this.g.mediaUrl;
          };
          l.getSurveyUrl = function () {
            return this.g.surveyUrl;
          };
          l.getDealId = function () {
            return this.g.dealId;
          };
          l.me = function () {
            return (this.g.universalAdIds || []).map(function (a) {
              return new Hx(a.adIdValue, a.adIdRegistry);
            });
          };
          l.getUniversalAdIdValue = function () {
            return this.g.universalAdIdValue;
          };
          l.getUniversalAdIdRegistry = function () {
            return this.g.universalAdIdRegistry;
          };
          l.getSkipTimeOffset = function () {
            return this.g.skipTimeOffset;
          };
          l.isUiDisabled = function () {
            return this.g.disableUi;
          };
          Y.prototype.isUiDisabled = Y.prototype.isUiDisabled;
          Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
          Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
          Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
          Y.prototype.getUniversalAdIds = Y.prototype.me;
          Y.prototype.getDealId = Y.prototype.getDealId;
          Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
          Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
          Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
          Y.prototype.getTraffickingParametersString = Y.prototype.getTraffickingParametersString;
          Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
          Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
          Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
          Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
          Y.prototype.getUiElements = Y.prototype.getUiElements;
          Y.prototype.getHeight = Y.prototype.getHeight;
          Y.prototype.getWidth = Y.prototype.getWidth;
          Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
          Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
          Y.prototype.getDuration = Y.prototype.getDuration;
          Y.prototype.getTitle = Y.prototype.le;
          Y.prototype.getDescription = Y.prototype.je;
          Y.prototype.getContentType = Y.prototype.getContentType;
          Y.prototype.isSkippable = Y.prototype.isSkippable;
          Y.prototype.isLinear = Y.prototype.isLinear;
          Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
          Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
          Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
          Y.prototype.getApiFramework = Y.prototype.getApiFramework;
          Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
          Y.prototype.getAdSystem = Y.prototype.getAdSystem;
          Y.prototype.getCreativeId = Y.prototype.getCreativeId;
          Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
          Y.prototype.getAdId = Y.prototype.getAdId;
          var Jx = null,
            Kx = function () {
              N.call(this);
              this.g = null;
              this.G = new mt(this);
              vf(this, this.G);
              this.h = new Map();
              this.A = new Map();
              this.o = this.B = !1;
              this.D = null;
            },
            Lx;
          t(Kx, N);
          var Mx = function () {
              null == Jx && (Jx = new Kx());
              return Jx;
            },
            sq = function (a, b, c) {
              var d = {};
              d.queryId = b;
              d.viewabilityData = c;
              a.g && Vw(a.g, 'activityMonitor', 'viewabilityMeasurement', d);
            };
          Kx.prototype.destroy = function () {
            this.G.Qa(this.g, 'activityMonitor', this.I);
            this.o = !1;
            this.h.clear();
            this === Lx && (Lx = null);
          };
          Kx.prototype.O = function () {
            this.destroy();
            N.prototype.O.call(this);
          };
          Kx.prototype.init = function (a) {
            if (!this.o) {
              if ((this.g = a || null)) this.G.T(this.g, 'activityMonitor', this.I), Nx(this);
              if (!(v.ima && v.ima.video && v.ima.video.client && v.ima.video.client.tagged)) {
                y('ima.video.client.sdkTag', !0, void 0);
                var b = v.document;
                a = Te(document, 'SCRIPT');
                var c = cc(Yb(Zb('https://s0.2mdn.net/instream/video/client.js')));
                Rc(a, c);
                a.async = !0;
                a.type = 'text/javascript';
                b = b.getElementsByTagName('script')[0];
                b.parentNode.insertBefore(a, b);
              }
              Ik();
              iq.C().M = W.g;
              this.B = !0;
              iq.C().l = !0;
              this.D = null;
              a = iq.C();
              b = 'h' == Ip(a) || 'b' == Ip(a);
              c = !(O.C(), !1);
              b && c && ((a.D = !0), (a.I = new Sn()));
              this.o = !0;
            }
          };
          var Px = function (a) {
              if (null == a) return !1;
              if ((vd || xd) && null != a.webkitDisplayingFullscreen)
                return a.webkitDisplayingFullscreen;
              a = Ox(a);
              var b = window.screen.availHeight || window.screen.height;
              return (
                0 >= (window.screen.availWidth || window.screen.width) - a.width &&
                42 >= b - a.height
              );
            },
            Ox = function (a) {
              var b = {
                left: a.offsetLeft,
                top: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight,
              };
              try {
                'function' === typeof a.getBoundingClientRect &&
                  Ye(Le(a), a) &&
                  (b = a.getBoundingClientRect());
              } catch (c) {}
              return b;
            },
            Qx = function (a, b, c, d, e) {
              e = void 0 === e ? {} : e;
              if (a.o) {
                d && null == e.opt_osdId && (e.opt_osdId = d);
                if (a.D) return a.D(b, c, e);
                if ((a = d ? a.A.get(d) : W.o))
                  null == e.opt_fullscreen && (e.opt_fullscreen = Px(a)),
                    null == e.opt_adElement && (e.opt_adElement = a);
                return ck.$a(469, Xa(vq, b, c, e), void 0) || {};
              }
              return {};
            },
            Rx = function (a, b) {
              var c = String(Math.floor(1000000000 * Math.random()));
              a.A.set(c, b);
              if (Yg(Qh))
                try {
                  Hj(
                    function (d) {
                      if (a.g) {
                        var e = {};
                        e.engagementString = d;
                        Vw(a.g, 'activityMonitor', 'engagementData', e);
                      }
                    },
                    function () {
                      return b;
                    }
                  );
                } catch (d) {}
              0 != W.g && tq(iq.C(), c, a);
              return c;
            },
            Sx = function (a, b, c) {
              if (c) a.h.get(c) == b && a.h.delete(c);
              else {
                var d = [];
                a.h.forEach(function (e, f) {
                  e == b && d.push(f);
                });
                d.forEach(a.h.delete, a.h);
              }
            },
            oq = function (a, b) {
              a = a.h.get(b);
              return 'function' === typeof a ? a() : {};
            },
            Nx = function (a) {
              if ('function' === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
                var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                Vw(a.g, 'activityMonitor', 'pageSignals', b);
              }
            };
          Kx.prototype.I = function (a) {
            var b = a.na,
              c = b.queryId,
              d = {},
              e = null;
            d.eventId = b.eventId;
            switch (a.ka) {
              case 'getPageSignals':
                Nx(this);
                break;
              case 'reportVastEvent':
                e = b.vastEvent;
                a = b.osdId;
                var f = {};
                f.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (f.opt_bounds = b.overlayBounds);
                d.viewabilityData = Qx(this, e, c, a, f);
                Vw(this.g, 'activityMonitor', 'viewability', d);
                break;
              case 'fetchAdTagUrl':
                (c = {}),
                  (c.eventId = b.eventId),
                  (a = b.osdId),
                  Kb(b, 'isFullscreen') && (e = b.isFullscreen),
                  Kb(b, 'loggingId') &&
                    ((b = b.loggingId),
                    (c.loggingId = b),
                    Cx.C().report(43, { step: 'beforeLookup', logid: b, time: Date.now() })),
                  (c.engagementString = Tx(this, a, e)),
                  this.g && Vw(this.g, 'activityMonitor', 'engagement', c);
            }
          };
          var Tx = function (a, b, c) {
            var d = b ? a.A.get(b) : W.o;
            a = {};
            null != c && (a.fullscreen = c);
            c = '';
            try {
              c = Gj(function () {
                return d;
              }, a);
            } catch (e) {
              c = 'sdktle;' + Uc(e.name, 12) + ';' + Uc(e.message, 40);
            }
            return c;
          };
          y(
            'ima.common.getVideoMetadata',
            function (a) {
              return oq(Mx(), a);
            },
            void 0
          );
          y(
            'ima.common.triggerViewabilityMeasurementUpdate',
            function (a, b) {
              sq(Mx(), a, b);
            },
            void 0
          );
          var Ux = od ? cc(Yb(Zb('javascript:""'))) : cc(Yb(Zb('about:blank')));
          bc(Ux);
          var Vx = od ? cc(Yb(Zb('javascript:""'))) : cc(Yb(Zb('javascript:undefined')));
          bc(Vx);
          var Wx = function (a, b, c) {
            b = void 0 === b ? null : b;
            c = void 0 === c ? null : c;
            gi.call(this, a);
            this.l = b;
            this.g = c;
          };
          t(Wx, gi);
          Wx.prototype.getAd = function () {
            return this.l;
          };
          Wx.prototype.getAdData = function () {
            return this.g;
          };
          var Xx = function () {
              this.loadVideoTimeout = 8000;
              this.autoAlign = !0;
              this.bitrate = -1;
              this.uiElements = null;
              this.enablePreloading = this.disableClickThrough = !1;
              this.mimeTypes = null;
              this.useStyledNonLinearAds = this.useStyledLinearAds = this.useLearnMoreButton = this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
              this.playAdsAfterTime = -1;
              this.useVideoAdUi = !0;
              this.disableUi = !1;
            },
            Yx = function (a, b) {
              var c = {};
              Object.assign(c, a);
              b && (c.disableClickThrough = !0);
              return c;
            };
          Xx.prototype.append = function (a) {
            if (a) {
              this.autoAlign = a.autoAlign || this.autoAlign;
              var b = ad(a.bitrate);
              'number' === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
              this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
              this.disableUi = a.disableUi || this.disableUi;
              this.enablePreloading = a.enablePreloading || this.enablePreloading;
              a.mimeTypes && 0 != a.mimeTypes.length && (this.mimeTypes = a.mimeTypes);
              b = ad(a.playAdsAfterTime);
              'number' === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
              this.restoreCustomPlaybackStateOnAdBreakComplete =
                a.restoreCustomPlaybackStateOnAdBreakComplete ||
                this.restoreCustomPlaybackStateOnAdBreakComplete;
              b = ad(a.loadVideoTimeout);
              'number' === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
              this.uiElements = a.uiElements || this.uiElements;
              this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
              this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
              this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
              this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi;
            }
          };
          y(
            'module$contents$ima$AdsRenderingSettings_AdsRenderingSettings.AUTO_SCALE',
            -1,
            void 0
          );
          var Zx = function () {
            N.call(this);
            this.g = new Ar();
            this.o = null;
            this.h = new Map();
            this.A = new mt(this);
            vf(this, this.A);
            this.G = new Map();
            this.D = null;
            this.B = -1;
            O.C().l = !0;
            Fw();
          };
          A(Zx, N);
          var $x = null,
            ay = function () {
              null == $x && ($x = new Zx());
              return $x;
            },
            by = function (a, b) {
              var c = {};
              c.queryId = a;
              c.viewabilityString = b;
              ay().dispatchEvent(new Wx('measurable_impression', null, c));
            },
            cy = function (a, b) {
              var c = {};
              c.queryId = a;
              c.viewabilityString = b;
              ay().dispatchEvent(new Wx('viewable_impression', null, c));
            },
            dy = function (a, b, c) {
              var d = {};
              d.queryId = a;
              d.viewabilityString = b;
              d.eventName = c;
              ay().dispatchEvent(new Wx('externalActivityEvent', null, d));
            };
          Zx.prototype.destroy = function () {
            this.A.Qa(this.o, 'activityMonitor', this.I);
            this.o = null;
          };
          Zx.prototype.I = function (a) {
            var b = a.na;
            switch (a.ka) {
              case 'appStateChanged':
                iq.C();
                b = b.appState;
                a = P.C();
                a.D != b && ((a.D = b), (a = io.C().g) && hm(a.g, !b));
                break;
              case 'externalActivityEvent':
                dy(b.queryId, b.viewabilityString, b.eventName);
                break;
              case 'measurableImpression':
                by(b.queryId, b.viewabilityString);
                break;
              case 'viewableImpression':
                cy(b.queryId, b.viewabilityString);
                break;
              case 'engagementData':
                b = b.engagementString;
                ay().D = b;
                ay().B = z();
                break;
              case 'viewability':
                a = b.queryId;
                var c = b.vastEvent;
                this.h.get(a) && 'start' == c && this.h.get(a);
                a = b.eventId;
                clearTimeout(a);
                if ((c = this.g.get(a))) this.g.remove(a), c(b.viewabilityData);
                break;
              case 'viewabilityMeasurement':
                iq.C();
                O.C();
                break;
              case 'engagement':
                a = b.eventId;
                clearTimeout(a);
                c = this.g.get(a);
                if (Cx.C().g) {
                  var d = -1;
                  this.K && (d = z() - this.K);
                  var e = !1;
                  c || (e = !0);
                  Kb(b, 'loggingId') &&
                    Cx.C().report(43, {
                      step: 'receivedResponse',
                      time: z(),
                      timeout: e,
                      logid: b.loggingId,
                      timediff: d,
                    });
                }
                c && (this.g.remove(a), c(b.engagementString));
            }
          };
          y(
            'ima.bridge.getNativeViewability',
            function (a, b) {
              ay();
              b({});
            },
            void 0
          );
          y(
            'ima.bridge.getVideoMetadata',
            function (a) {
              return (a = ay().G.get(a)) ? a() : {};
            },
            void 0
          );
          y('ima.bridge.triggerViewEvent', cy, void 0);
          y('ima.bridge.triggerMeasurableEvent', by, void 0);
          y('ima.bridge.triggerExternalActivityEvent', dy, void 0);
          Object.entries({
            'application/dash+xml': 1,
            'application/x-javascript': 2,
            'application/x-mpegurl': 3,
            'application/javascript': 4,
            'audio/ogg': 5,
            'audio/mp4': 6,
            'audio/mpeg': 7,
            'audio/wav': 8,
            'text/javascript': 9,
            'video/m4v': 10,
            'video/ogg': 11,
            'video/x-flv': 12,
            'video/3gpp': 13,
            'video/mpt2': 14,
            'video/mp4': 15,
            'video/mpeg': 16,
            'video/quicktime': 17,
            'video/webm': 18,
          });
          function ey (a, b) {
            return b instanceof RegExp ? '__REGEXP' + b.toString() : b;
          }
          function fy (a, b) {
            return b && 0 == b.toString().indexOf('__REGEXP')
              ? ((a = b.split('__REGEXP')[1].match(/\/(.*)\/(.*)?/)), new RegExp(a[1], a[2] || ''))
              : b;
          }
          var gy = function (a, b) {
            Uw.call(this, b);
            this.B = a;
            this.g = null;
            this.D = new mt(this);
            this.D.T(G(), 'message', this.G);
          };
          t(gy, Uw);
          var hy = function (a) {
            if (null == a || 'string' !== typeof a || 0 != a.lastIndexOf('ima://', 0)) return null;
            a = a.substr(6);
            try {
              return JSON.parse(a, fy);
            } catch (b) {
              return null;
            }
          };
          gy.prototype.sendMessage = function (a, b, c) {
            null != this.g &&
              null != this.g.postMessage &&
              this.g.postMessage(iy(this, a, b, c), '*');
            null != this.g && null == this.g.postMessage && Cx.C().report(11);
          };
          gy.prototype.O = function () {
            uf(this.D);
            this.g = null;
            Uw.prototype.O.call(this);
          };
          gy.prototype.G = function (a) {
            a = a.g;
            var b = hy(a.data);
            if (jy(this, b)) {
              if (null == this.g) (this.g = a.source), this.h || this.connect();
              else if (this.g != a.source) return;
              jy(this, b) &&
                this.dispatchEvent(new Ex(b.name, b.type, b.data || {}, b.sid, a.origin));
            }
          };
          var iy = function (a, b, c, d) {
              var e = {};
              e.name = b;
              e.type = c;
              null != d && (e.data = d);
              e.sid = a.A;
              e.channel = a.B;
              return 'ima://' + Ng(e, ey);
            },
            jy = function (a, b) {
              if (null == b) return !1;
              var c = b.channel;
              if (null == c || c != a.B) return !1;
              b = b.sid;
              return null == b || ('*' != a.A && b != a.A) ? !1 : !0;
            };
          var ky = cc(
            Yb(Zb('http://pagead2.googlesyndication.com/omsdk/releases/live/omsdk-v1.js'))
          );
          function ly (a, b) {
            if (!b) throw Error('Value for ' + a + ' is undefined, null or blank.');
            if ('string' !== typeof b && !(b instanceof String))
              throw Error('Value for ' + a + ' is not a string.');
            if ('' === b.trim()) throw Error('Value for ' + a + ' is empty string.');
          }
          function my (a, b) {
            if (null == b) throw Error('Value for ' + a + ' is undefined or null');
          }
          function ny (a, b) {
            if (null == b) throw Error(a + ' must not be null or undefined.');
            if ('number' !== typeof b || isNaN(b))
              throw Error('Value for ' + a + ' is not a number');
          }
          function oy () {
            return /\d+\.\d+\.\d+(-.*)?/.test('1.3.3-google_20200427');
          }
          function py () {
            for (var a = ['1', '3', '3'], b = ['1', '0', '3'], c = 0; 3 > c; c++) {
              var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
              if (d > e) break;
              else if (d < e) return !1;
            }
            return !0;
          }
          var qy = function (a, b, c, d) {
              this.h = a;
              this.method = b;
              this.version = c;
              this.g = d;
            },
            ry = function (a) {
              return (
                !!a &&
                void 0 !== a.omid_message_guid &&
                void 0 !== a.omid_message_method &&
                void 0 !== a.omid_message_version &&
                'string' === typeof a.omid_message_guid &&
                'string' === typeof a.omid_message_method &&
                'string' === typeof a.omid_message_version &&
                (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
              );
            },
            sy = function (a) {
              return new qy(
                a.omid_message_guid,
                a.omid_message_method,
                a.omid_message_version,
                a.omid_message_args
              );
            },
            ty = function (a) {
              var b = {};
              b =
                ((b.omid_message_guid = a.h),
                (b.omid_message_method = a.method),
                (b.omid_message_version = a.version),
                b);
              void 0 !== a.g && (b.omid_message_args = a.g);
              return b;
            };
          var uy = function (a) {
            this.h = a;
          };
          function vy (a, b) {
            return a && (a[b] || (a[b] = {}));
          }
          function wy (a, b) {
            var c;
            if ((c = void 0 === c ? ('undefined' === typeof omidExports ? null : omidExports) : c))
              (a = a.split('.')), (a.slice(0, a.length - 1).reduce(vy, c)[a[a.length - 1]] = b);
          }
          function yy () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (a) {
              var b = (16 * Math.random()) | 0;
              return 'y' === a ? ((b & 3) | 8).toString(16) : b.toString(16);
            });
          }
          function zy (a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
            Ay(
              function () {
                throw new (Function.prototype.bind.apply(
                  Error,
                  [null, 'Could not complete the test successfully - '].concat(fa(b))
                ))();
              },
              function () {
                return console.error.apply(console, fa(b));
              }
            );
          }
          function Ay (a, b) {
            'undefined' !== typeof jasmine && jasmine
              ? a()
              : 'undefined' !== typeof console && console && console.error && b();
          }
          var By = function (a) {
            try {
              return a.frames ? !!a.frames.omid_v1_present : !1;
            } catch (b) {
              return !1;
            }
          };
          var Cy = function (a) {
            this.h = a;
            this.handleExportedMessage = Cy.prototype.l.bind(this);
          };
          t(Cy, uy);
          Cy.prototype.sendMessage = function (a, b) {
            b = void 0 === b ? this.h : b;
            if (!b)
              throw Error(
                'Message destination must be defined at construction time or when sending the message.'
              );
            b.handleExportedMessage(ty(a), this);
          };
          Cy.prototype.l = function (a, b) {
            ry(a) && this.g && this.g(sy(a), b);
          };
          var Dy = eval('this'),
            Ey = (function () {
              if ('undefined' !== typeof omidGlobal && omidGlobal) return omidGlobal;
              if ('undefined' !== typeof global && global) return global;
              if ('undefined' !== typeof window && window) return window;
              if ('undefined' !== typeof Dy && Dy) return Dy;
              throw Error('Could not determine global object context.');
            })();
          function Fy (a) {
            return null != a && 'undefined' !== typeof a.top && null != a.top;
          }
          function Gy (a) {
            if (a === Ey) return !1;
            try {
              if ('undefined' === typeof a.location.hostname) return !0;
            } catch (b) {
              return !0;
            }
            return !1;
          }
          var Hy = function (a, b) {
            this.h = b = void 0 === b ? Ey : b;
            var c = this;
            a.addEventListener('message', function (d) {
              if ('object' === typeof d.data) {
                var e = d.data;
                ry(e) && d.source && c.g && c.g(sy(e), d.source);
              }
            });
          };
          t(Hy, uy);
          Hy.prototype.sendMessage = function (a, b) {
            b = void 0 === b ? this.h : b;
            if (!b)
              throw Error(
                'Message destination must be defined at construction time or when sending the message.'
              );
            b.postMessage(ty(a), '*');
          };
          var Iy = ['omid', 'v1_SessionServiceCommunication'];
          function Jy (a) {
            return Iy.reduce(function (b, c) {
              return b && b[c];
            }, a);
          }
          wy('OmidSessionClient.Partner', function (a, b) {
            ly('Partner.name', a);
            ly('Partner.version', b);
            this.name = a;
            this.version = b;
          });
          var Ky = function (a, b, c) {
            ly('VerificationScriptResource.resourceUrl', a);
            this.h = a;
            this.l = b;
            this.g = c;
          };
          Ky.prototype.toJSON = function () {
            return { resourceUrl: this.h, vendorKey: this.l, verificationParameters: this.g };
          };
          wy('OmidSessionClient.VerificationScriptResource', Ky);
          wy('OmidSessionClient.Context', function (a, b, c) {
            c = void 0 === c ? null : c;
            my('Context.partner', a);
            this.g = a;
            this.l = b;
            this.h = c;
          });
          var Ly = { sessionError: 'reportError' },
            My = Object.keys(ls).map(function (a) {
              return ls[a];
            }),
            Ny = ['impressionOccurred'],
            Oy = function () {
              var a = void 0 === a ? Ey : a;
              this.g = a.omidSessionInterface;
            };
          Oy.prototype.sendMessage = function (a, b, c) {
            'registerSessionObserver' == a && (c = [b]);
            Ly[a] && (a = Ly[a]);
            b = this.g;
            0 <= Ny.indexOf(a) && (b = b.adEvents);
            0 <= My.indexOf(a) && (b = b.videoEvents);
            b = b[a];
            if (!b) throw Error('Unrecognized method name: ' + a + '.');
            b.apply(null, fa(c));
          };
          var Ry = function (a, b, c) {
              my('AdSession.context', a);
              this.J = a;
              if (!b) {
                var d;
                'undefined' === typeof d &&
                  'undefined' !== typeof window &&
                  window &&
                  (d = window);
                d = Fy(d) ? d : Ey;
                var e = void 0 === e ? By : e;
                a: {
                  b = r([d, Fy(d) ? d.top : Ey]);
                  for (var f = b.next(); !f.done; f = b.next()) {
                    b: {
                      var g = d;
                      f = f.value;
                      var h = e;
                      if (!Gy(f))
                        try {
                          var k = Jy(f);
                          if (k) {
                            var n = new Cy(k);
                            break b;
                          }
                        } catch (m) {}
                      n = h(f) ? new Hy(g, f) : null;
                    }
                    if ((g = n)) {
                      b = g;
                      break a;
                    }
                  }
                  b = null;
                }
              }
              this.h = b;
              this.G = c || new Oy();
              this.H = this.A = this.o = !1;
              this.B = this.D = null;
              this.l = {};
              this.h && (this.h.g = this.I.bind(this));
              this.g('setClientInfo', '1.3.3-google_20200427', this.J.g.name, this.J.g.version);
              Py(this, a.l);
              (a = a.h) && this.g('setContentUrl', a);
              Qy(this);
            },
            Sy = function (a, b) {
              a.sendMessage('registerSessionObserver', b);
            };
          Ry.prototype.error = function (a, b) {
            this.g('sessionError', a, b);
          };
          Ry.prototype.g = function (a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            this.sendMessage.apply(this, [a, null].concat(fa(c)));
          };
          Ry.prototype.sendMessage = function (a, b, c) {
            for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
            if (this.h)
              (e = yy()),
                b && (this.l[e] = b),
                (d = new qy(
                  e,
                  'SessionService.' + a,
                  '1.3.3-google_20200427',
                  oy() && py() ? d : JSON.stringify(d)
                )),
                this.h.sendMessage(d);
            else if (null != this.G.g)
              try {
                this.G.sendMessage(a, b, d);
              } catch (f) {
                zy('Failed to communicate with SessionInterface with error:'), zy(f);
              }
          };
          Ry.prototype.I = function (a) {
            var b = a.method,
              c = a.h;
            a = a.g;
            if ('response' === b && this.l[c]) {
              var d =
                oy() && py() ? (a ? a : []) : a && 'string' === typeof a ? JSON.parse(a) : [];
              this.l[c].apply(this, d);
            }
            'error' === b && window.console && zy(a);
          };
          var Py = function (a, b) {
              b &&
                ((b = b.map(function (c) {
                  return c.toJSON();
                })),
                a.g('injectVerificationScriptResources', b));
            },
            Qy = function (a) {
              Sy(a, function (b) {
                'sessionStart' === b.type &&
                  ((a.H = !0), (a.D = b.data.creativeType), (a.B = b.data.impressionType));
                'sessionFinish' === b.type && (a.H = !1);
              });
            };
          wy('OmidSessionClient.AdSession', Ry);
          var Ty = function (a) {
            my('AdEvents.adSession', a);
            try {
              if (a.o) throw Error('AdEvents already registered.');
              a.o = !0;
              a.g('registerAdEvents');
              this.g = a;
            } catch (b) {
              throw Error('AdSession already has an ad events instance registered');
            }
          };
          Ty.prototype.loaded = function (a) {
            a = void 0 === a ? null : a;
            var b = this.g;
            if ('definedByJavaScript' === b.D) throw Error('Creative type has not been redefined');
            if ('definedByJavaScript' === b.B)
              throw Error('Impression type has not been redefined');
            a ? this.g.g('loaded', a.toJSON()) : this.g.g('loaded');
          };
          wy('OmidSessionClient.AdEvents', Ty);
          var Uy = function (a) {
            my('MediaEvents.adSession', a);
            try {
              if (a.A) throw Error('MediaEvents already registered.');
              a.A = !0;
              a.g('registerMediaEvents');
              this.g = a;
            } catch (b) {
              throw Error('AdSession already has a media events instance registered');
            }
          };
          Uy.prototype.loaded = function (a) {
            my('MediaEvents.loaded.vastProperties', a);
            this.g.g('loaded', a.toJSON());
          };
          Uy.prototype.start = function (a, b) {
            ny('MediaEvents.start.duration', a);
            ny('MediaEvents.start.mediaPlayerVolume', b);
            if (0 > b || 1 < b)
              throw Error(
                'Value for MediaEvents.start.mediaPlayerVolume is outside the range [0,1]'
              );
            this.g.g('start', a, b);
          };
          Uy.prototype.pause = function () {
            this.g.g('pause');
          };
          Uy.prototype.resume = function () {
            this.g.g('resume');
          };
          wy('OmidSessionClient.MediaEvents', Uy);
          var Xy = function (a, b) {
              Vy ? (a.srcdoc = b) : (a = a.contentWindow) && Wy(a.document, b);
            },
            Vy = sd && 'srcdoc' in Te(document, 'IFRAME'),
            Wy = function (a, b) {
              a.open('text/html', 'replace');
              a.write(b);
              a.close();
            };
          function Yy (a) {
            return (a = Ze(a)) && a.omidSessionInterface ? a.omidSessionInterface : null;
          }
          function Zy (a, b) {
            var c = Ve('IFRAME', {
              name: b,
              sandbox: 'allow-scripts allow-same-origin',
              style: 'display: none',
            });
            a.appendChild(c);
            a = '<script src=' + ky.Ea() + '></script>';
            b = new Promise(function (d, e) {
              c.addEventListener('load', function () {
                Yy(c) ? d(c) : e();
              });
            });
            Xy(c, a);
            return b;
          }
          var $y = function (a, b) {
            N.call(this);
            this.g = Yy(a);
            this.h = b;
          };
          t($y, N);
          var bz = function (a) {
              try {
                a.g.registerSessionObserver(function (b) {
                  'sessionStart' == b.type ? az(a, a.h) : 'sessionFinish' == b.type && bz(a);
                });
              } catch (b) {
                a.dispatchEvent(new Event('error'));
              }
            },
            az = function (a, b) {
              try {
                a.g.setVideoElement(b);
              } catch (c) {
                a.dispatchEvent(new Event('error'));
              }
            };
          var cz = function (a) {
            this.g = a;
          };
          cz.prototype.getCuePoints = function () {
            return this.g;
          };
          cz.prototype.getCuePoints = cz.prototype.getCuePoints;
          y('module$contents$ima$AdCuePoints_AdCuePoints.PREROLL', 0, void 0);
          y('module$contents$ima$AdCuePoints_AdCuePoints.POSTROLL', -1, void 0);
          var dz = function (a) {
              this.g = a;
              this.l = '';
              this.h = -1;
              this.o = !1;
            },
            fz = function (a, b) {
              if (0 <= a.h) {
                var c = null == b ? function () {} : b,
                  d = function () {
                    ez(a, c);
                    a.g.removeEventListener('loadedmetadata', d, !1);
                  };
                a.g.addEventListener('loadedmetadata', d, !1);
                a.g.src = a.l;
                a.g.load();
              } else null != b && b();
            },
            ez = function (a, b) {
              var c = 0 < a.g.seekable.length;
              a.o
                ? c
                  ? ((a.g.currentTime = a.h), gz(a), b())
                  : setTimeout(function () {
                      return ez(a, b);
                    }, 100)
                : (gz(a), b());
            },
            gz = function (a) {
              a.h = -1;
              a.l = '';
              a.o = !1;
            };
          var hz = function (a) {
            N.call(this);
            this.g = a;
            this.$ = null;
            this.N = new dz(a);
            this.A = 0;
            this.G = this.M = this.R = this.Z = this.D = !1;
            this.I = this.o = null;
            this.L = new Je(this.g.offsetWidth, this.g.offsetHeight);
            this.W = Px(this.g);
            this.X = !1;
          };
          t(hz, N);
          l = hz.prototype;
          l.jd = function () {
            var a = this.N;
            a.l = a.g.currentSrc;
            a.o = 0 < a.g.seekable.length;
            a.h = a.g.ended ? -1 : a.g.currentTime;
          };
          l.Sb = function (a) {
            fz(this.N, a);
          };
          l.load = function (a, b) {
            var c = J.C().g;
            c.U = !0;
            vg(c);
            Ig('hvd_lc');
            c = J.C();
            var d = this.L.width + 'x' + this.L.height;
            null != d && ug(c.g, 'ps', d);
            iz(this);
            this.R = !1;
            if (b)
              if ((Ig('hvd_ad'), b instanceof ks)) {
                if ((Ig('hvd_mad'), (b = b.getMediaUrl()))) {
                  Ig('hvd_admu');
                  Ig('hvd_src');
                  this.g.src = b;
                  this.g.load();
                  return;
                }
              } else if (b instanceof js) {
                Ig('hvd_dad');
                c = b.J;
                d = b.l;
                var e = b.H,
                  f = b.h,
                  g = b.B,
                  h = b.g;
                if (c && d && e && f && g && h && (Ig('hvd_addu'), b.A)) {
                  Ig('hvd_admse');
                  b = e + '; codecs="' + g + '"';
                  f = f + '; codecs="' + h + '"';
                  if (
                    Hu() &&
                    Hu() &&
                    MediaSource.isTypeSupported(b) &&
                    Hu() &&
                    MediaSource.isTypeSupported(f)
                  ) {
                    Ig('hvd_ymse');
                    Ig('hvd_mse');
                    a = !1;
                    try {
                      -1 != window.location.search.indexOf('goog_limavideo=true') && (a = !0);
                    } catch (k) {}
                    (Yg(Th) || a) && v.customElements
                      ? (a && console.log('force lima video in video display'),
                        (this.g.l = c),
                        (this.g.o = d))
                      : ((this.$ = new Xu(this.g, [
                          new Ku(c, b, 350000, new Jt()),
                          new Ku(d, f, 82000, new Jt()),
                        ])),
                        vf(this, this.$),
                        (this.g.src = Yu(this.$)));
                    this.g.load();
                    return;
                  }
                  Ig('hvd_nmse');
                }
              } else Ig('hvd_uad');
            a ? (Ig('hvd_src'), (this.g.src = a)) : Ig('hvd_vn');
            this.g.load();
          };
          l.setVolume = function (a) {
            this.g.volume = Math.max(a, 0);
            this.g.muted = 0 == a ? !0 : !1;
          };
          l.getVolume = function () {
            return this.g.muted ? 0 : this.g.volume;
          };
          var jz = function (a) {
            a.X = !1;
            a.R || Gc()
              ? ((a.G = !1),
                (a.o = a.g.play()),
                null != a.o &&
                  ((a.I = null),
                  a.o
                    .then(function () {
                      a.o = null;
                      a.nd(a.I);
                      a.I = null;
                    })
                    .catch(function (b) {
                      a.o = null;
                      var c = '';
                      null != b && null != b.name && (c = b.name);
                      'AbortError' == c || 'NotAllowedError' == c
                        ? a.dispatchEvent('autoplayDisallowed')
                        : a.Ac();
                    })))
              : (a.G = !0);
          };
          hz.prototype.pause = function () {
            null == this.o && ((this.X = !0), this.g.pause());
          };
          hz.prototype.getDuration = function () {
            return isNaN(this.g.duration) ? -1 : this.g.duration;
          };
          hz.prototype.O = function () {
            kz(this);
            N.prototype.O.call(this);
          };
          var lz = function (a) {
              kz(a);
              a.h = new mt(a);
              a.h.T(a.g, ew, a.fa);
              a.h.T(a.g, 'ended', a.He);
              a.h.T(a.g, 'webkitbeginfullscreen', a.va);
              a.h.T(a.g, 'webkitendfullscreen', a.md);
              a.h.T(a.g, 'loadedmetadata', a.Je);
              a.h.T(a.g, 'pause', a.Me);
              a.h.T(a.g, 'playing', a.nd);
              a.h.T(a.g, 'timeupdate', a.Ne);
              a.h.T(a.g, 'volumechange', a.Oe);
              a.h.T(a.g, 'error', a.Ac);
              a.h.T(a.g, Md || (yd && !ht(8)) ? 'loadeddata' : 'canplay', a.Ke);
              a.K = new cx();
              a.h.T(a.K, 'click', a.Fe);
              ex(a.K, a.g);
              a.U = new mj(1000);
              a.h.T(a.U, 'tick', a.Ie);
              a.U.start();
            },
            kz = function (a) {
              null != a.K && (gx(a.K), (a.K = null));
              null != a.U && a.U.V();
              null != a.h && (a.h.V(), (a.h = null));
              iz(a);
            },
            iz = function (a) {
              a.Z = !1;
              a.M = !1;
              a.D = !1;
              a.G = !1;
              a.A = 0;
              a.o = null;
              a.I = null;
              uf(a.B);
            };
          hz.prototype.fa = function (a) {
            this.dispatchEvent(a.type);
          };
          var nz = function (a) {
            if (!a.M) {
              a.M = !0;
              a.dispatchEvent('start');
              var b =
                'function' === typeof a.g.getAttribute && null != a.g.getAttribute('playsinline');
              b = void 0 === b ? !1 : b;
              ((wd || gt() || ht(10)) && (b || (Bw.C(), 1))) ||
                (Bw.C(), pc(Dc, 'Xbox')) ||
                (vd || xd ? 0 : (!ud || (ud && ft(et, 4))) && (Vl() ? (Bw.C(), !1) : !Wl())) ||
                !ud ||
                (ud && ft(et, 3)) ||
                ((vd || xd) && !ht(4)) ||
                mz(a);
            }
          };
          l = hz.prototype;
          l.Je = function () {
            this.R = !0;
            this.G && jz(this);
            this.G = !1;
          };
          l.Ke = function () {
            this.Z || ((this.Z = !0), this.dispatchEvent('loaded'));
          };
          l.nd = function (a) {
            null != this.o
              ? (this.I = a)
              : (this.dispatchEvent('play'), yd || wd || gt() || Md || nz(this));
          };
          l.Ne = function (a) {
            if (!this.M && (yd || wd || gt() || Md)) {
              if (0 >= this.g.currentTime) return;
              if (Md && this.g.ended && 1 == this.getDuration()) {
                this.Ac(a);
                return;
              }
              nz(this);
            }
            if (yd || pc(Dc, 'Nintendo WiiU')) {
              if (1.5 < this.g.currentTime - this.A) {
                this.D = !0;
                this.g.currentTime = this.A;
                return;
              }
              this.D = !1;
              this.g.currentTime > this.A && (this.A = this.g.currentTime);
            }
            this.dispatchEvent('timeUpdate');
          };
          l.Oe = function () {
            this.dispatchEvent('volumeChange');
          };
          l.Me = function () {
            if (this.M && yd && !this.X && (2 > oz(this) || this.D)) {
              this.B = new mj(250);
              this.h.T(this.B, 'tick', this.Ge);
              this.B.start();
              var a = !0;
            } else a = !1;
            a || this.o || this.dispatchEvent('pause');
          };
          l.He = function () {
            var a = !0;
            if (yd || pc(Dc, 'Nintendo WiiU')) a = this.A >= this.g.duration - 1.5;
            !this.D && a && this.dispatchEvent('end');
          };
          var mz = function (a) {
            a.dispatchEvent('beginFullscreen');
          };
          l = hz.prototype;
          l.md = function () {
            this.dispatchEvent('endFullscreen');
          };
          l.Ac = function () {
            this.dispatchEvent('error');
          };
          l.Fe = function () {
            this.dispatchEvent('click');
          };
          l.Ie = function () {
            var a = new Je(this.g.offsetWidth, this.g.offsetHeight),
              b = Px(this.g);
            if (a.width != this.L.width || a.height != this.L.height)
              !this.W && b ? mz(this) : this.W && !b && this.md(), (this.L = a), (this.W = b);
          };
          l.Ge = function () {
            if (
              !this.g.ended &&
              this.g.paused &&
              (yd || Nd ? this.g.currentTime < this.g.duration : 1)
            ) {
              var a = this.g.duration - this.g.currentTime,
                b = oz(this);
              0 < b && (2 <= b || 2 > a) && (uf(this.B), jz(this));
            } else uf(this.B);
          };
          var oz = function (a) {
            var b;
            a: {
              for (b = a.g.buffered.length - 1; 0 <= b; ) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                  b = a.g.buffered.end(b);
                  break a;
                }
                b--;
              }
              b = 0;
            }
            return b - a.g.currentTime;
          };
          hz.prototype.va = function () {
            Cx.C().report(139);
            mz(this);
          };
          var sz = function (a, b, c) {
            H.call(this);
            var d = this;
            this.l = b;
            this.A = c;
            b = new mt(this);
            vf(this, b);
            this.o = 'goog_' + Xc++;
            this.g = this.h = null;
            Zy(a, this.o)
              .then(function (e) {
                return void pz(d, e);
              })
              .catch(function () {
                return void qz(d);
              });
            b.T(this.l, 'adsManager', function (e) {
              'allAdsCompleted' == e.ka && rz(d);
            });
          };
          t(sz, H);
          var pz = function (a, b) {
              a.h = b;
              var c = {};
              c = ((c.frameName = a.o), c);
              Vw(a.l, 'omid', 'iframeReady', c);
              a.g = new $y(b, a.A);
              a.g.T('error', function () {
                return void qz(a);
              });
              bz(a.g);
            },
            qz = function (a) {
              Vw(a.l, 'omid', 'iframeFailed');
              a.V();
            },
            rz = function (a) {
              setTimeout(function () {
                a.V();
              }, 3000);
            };
          sz.prototype.O = function () {
            this.h && (We(this.h), (this.h = null));
            H.prototype.O.call(this);
          };
          var tz = function (a, b, c, d) {
            H.call(this);
            this.o = a;
            this.l = b;
            this.g = c;
            this.D = d;
            this.h = new mt(this);
            vf(this, this.h);
            this.h.T(this.o, d, this.B);
          };
          t(tz, H);
          var vz = function (a, b) {
            var c = b.na;
            switch (b.ka) {
              case 'showVideo':
                c = a.l;
                null != c.g && c.g.show();
                break;
              case 'hide':
                c = a.l;
                null != c.g && uz(c.g.g, !1);
                break;
              case 'getPreloadDisplay':
              case 'resizeAndPositionVideo':
                a = a.l.h;
                c = c.resizeAndPositionVideo;
                a.g.style.left = String(c.left) + 'px';
                a.g.style.top = String(c.top) + 'px';
                a.g.style.width = String(c.width) + 'px';
                a.g.style.height = String(c.height) + 'px';
                break;
              case 'restoreSizeAndPositionVideo':
                (c = a.l.h),
                  (c.g.style.width = '100%'),
                  (c.g.style.height = '100%'),
                  (c.g.style.left = '0'),
                  (c.g.style.right = '0');
            }
          };
          tz.prototype.B = function (a) {
            var b = a.na;
            switch (a.ka) {
              case 'activate':
                a = this.l;
                var c = this.g;
                a.h != c &&
                  a.g &&
                  a.o &&
                  a.l &&
                  (c.setVolume(a.h.getVolume()),
                  (c = a.h),
                  (a.h = a.l),
                  (a.l = c),
                  (c = a.g),
                  (a.g = a.o),
                  (a.o = c),
                  uz(a.o.g, !1));
                break;
              case 'startTracking':
                a = this.g;
                c = this.A;
                this.h.T(a, Hb(Ft), c);
                this.h.T(a, ew, c);
                lz(this.g);
                break;
              case 'stopTracking':
                a = this.g;
                c = this.A;
                this.h.Qa(a, Hb(Ft), c);
                this.h.Qa(a, ew, c);
                kz(this.g);
                break;
              case 'exitFullscreen':
                a = this.g;
                (vd || xd) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
                break;
              case 'play':
                jz(this.g);
                break;
              case 'pause':
                this.g.pause();
                break;
              case 'load':
                lz(this.g);
                a = this.g;
                c = b.videoUrl;
                var d = b.muxedMediaUrl,
                  e = b.muxedMimeType,
                  f = b.muxedAudioCodec,
                  g = b.muxedVideoCodec,
                  h = b.demuxedAudioUrl,
                  k = b.demuxedVideoUrl,
                  n = b.demuxedAudioMimeType,
                  m = b.demuxedVideoMimeType,
                  u = b.demuxedAudioCodec,
                  p = b.demuxedVideoCodec;
                b = b.mseCompatible;
                var w = null;
                k &&
                  h &&
                  b &&
                  m &&
                  n &&
                  p &&
                  u &&
                  (w = new js({
                    af: k,
                    ae: h,
                    hh: null,
                    Wg: null,
                    $e: m,
                    $d: n,
                    lb: p,
                    bb: u,
                    height: null,
                    width: null,
                    Ga: b,
                    gh: null,
                    Vg: null,
                  }));
                h = null;
                d &&
                  e &&
                  g &&
                  f &&
                  (h = new ks({
                    Ee: d,
                    ah: null,
                    mimeType: e,
                    lb: g,
                    bb: f,
                    height: null,
                    width: null,
                    Ga: b,
                    Zg: null,
                  }));
                w ? a.load(c, w) : h ? a.load(c, h) : a.load(c, null);
                break;
              case 'unload':
                a = this.g;
                iz(a);
                a.R = !1;
                'removeAttribute' in a.g ? a.g.removeAttribute('src') : (a.g.src = '');
                a.g.load();
                break;
              case 'setCurrentTime':
                this.g.g.currentTime = b.currentTime;
                break;
              case 'setVolume':
                this.g.setVolume(b.volume);
            }
          };
          tz.prototype.A = function (a) {
            var b = {};
            switch (a.type) {
              case 'autoplayDisallowed':
                a = 'autoplayDisallowed';
                break;
              case 'beginFullscreen':
                a = 'fullscreen';
                break;
              case 'endFullscreen':
                a = 'exitFullscreen';
                break;
              case 'click':
                a = 'click';
                break;
              case 'end':
                a = 'end';
                break;
              case 'error':
                a = 'error';
                break;
              case 'loaded':
                a = 'loaded';
                break;
              case 'mediaLoadTimeout':
                a = 'mediaLoadTimeout';
                break;
              case 'pause':
                a = 'pause';
                b.ended = this.g.g.ended;
                break;
              case 'play':
                a = 'play';
                break;
              case 'skip':
                a = 'skip';
                break;
              case 'start':
                a = 'start';
                b.volume = this.g.getVolume();
                break;
              case 'timeUpdate':
                a = 'timeupdate';
                b.currentTime = this.g.g.currentTime;
                b.duration = this.g.getDuration();
                break;
              case 'volumeChange':
                a = 'volumeChange';
                b.volume = this.g.getVolume();
                break;
              case 'loadedmetadata':
                a = a.type;
                b.duration = this.g.getDuration();
                break;
              case 'abort':
              case 'canplay':
              case 'canplaythrough':
              case 'durationchange':
              case 'emptied':
              case 'loadstart':
              case 'loadeddata':
              case 'progress':
              case 'ratechange':
              case 'seeked':
              case 'seeking':
              case 'stalled':
              case 'suspend':
              case 'waiting':
                a = a.type;
                break;
              default:
                return;
            }
            Vw(this.o, this.D, a, b);
          };
          var wz = function (a, b) {
            H.call(this);
            this.h = b;
            this.l = new tz(a, b, this.h.h, 'videoDisplay1');
            vf(this, this.l);
            this.g = null;
            var c = this.h.l;
            null != c && ((this.g = new tz(a, b, c, 'videoDisplay2')), vf(this, this.g));
          };
          t(wz, H);
          var xz = function (a, b, c, d) {
            var e = new Ke(document).createElement('IFRAME');
            e.id = b;
            e.name = b;
            e.width = String(c);
            e.height = String(d);
            e.allowTransparency = 'true';
            e.scrolling = 'no';
            e.marginWidth = '0';
            e.marginHeight = '0';
            e.frameBorder = '0';
            e.style.border = '0';
            e.style.verticalAlign = 'bottom';
            e.src = 'about:blank';
            a.appendChild(e);
            return e;
          };
          function yz () {
            return 'object' == typeof googletag && googletag.companionAds
              ? googletag.companionAds()
              : null;
          }
          function zz (a) {
            var b = {};
            b.slotId = a.getSlotId().getId();
            var c = [];
            a = r(a.getSizes() || []);
            for (var d = a.next(); !d.done; d = a.next())
              if (((d = d.value), 'string' !== typeof d)) {
                var e = {};
                c.push(((e.adWidth = d.getWidth()), (e.adHeight = d.getHeight()), e));
              }
            return (b.adSizes = c), b;
          }
          function Az (a) {
            var b = yz();
            if (b && a && Array.isArray(a)) {
              var c = new Map(
                b.getSlots().map(function (m) {
                  return [m.getSlotId().getId(), m];
                })
              );
              a = r(a);
              for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value,
                  f = c.get(e.slotId);
                if (f && !b.isSlotAPersistentRoadblock(f)) {
                  var g = e.adContent;
                  if (g && (d = Ne(f.getSlotId().getDomId()))) {
                    d.style.display = '';
                    var h = e.adWidth,
                      k = e.adHeight;
                    d.textContent = '';
                    if (e.friendlyIframeRendering) {
                      var n = 'google_companion_' + f.getSlotId().getId();
                      n = xz(d, n, h, k);
                      Xy(n, g);
                    } else Qc(d, If(g)), (d.style.width = h + 'px'), (d.style.height = k + 'px');
                    b.slotRenderEnded(f, h, k);
                    (e = e.onAdContentSet) && e(d);
                  }
                }
              }
            }
          }
          var Bz = function (a, b, c, d, e, f) {
            Ex.call(this, a, b, c, d, e);
            this.g = f;
          };
          t(Bz, Ex);
          var Cz = function (a, b) {
            N.call(this);
            this.A = a;
            this.o = b;
            this.g = {};
            this.h = new mt(this);
            this.h.T(G(), 'message', this.B);
          };
          t(Cz, N);
          var Dz = function (a, b) {
              var c = b.g;
              a.g.hasOwnProperty(c) && Vw(a.g[c], b.type, b.ka, b.na);
            },
            Ez = function (a, b, c, d) {
              a.g.hasOwnProperty(b) ||
                ((c = new gy(b, c)),
                a.h.T(c, a.A, function (e) {
                  this.dispatchEvent(new Bz(e.type, e.ka, e.na, e.Rb, e.od, b));
                }),
                (c.g = d),
                c.connect(),
                (a.g[b] = c));
            };
          Cz.prototype.O = function () {
            this.h.V();
            for (var a in this.g) uf(this.g[a]);
            N.prototype.O.call(this);
          };
          Cz.prototype.B = function (a) {
            a = a.g;
            var b = hy(a.data);
            if (null != b) {
              var c = b.channel;
              if (this.o && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                Ez(this, c, d, a.source);
                this.dispatchEvent(new Bz(b.name, b.type, b.data || {}, d, a.origin, c));
              }
            }
          };
          function Fz () {
            return !!La('googletag.cmd', G());
          }
          function Gz () {
            var a = La('googletag.console', G());
            return null != a ? a : null;
          }
          var Hz = function () {
            mt.call(this);
            this.l = new Cz('gpt', !0);
            vf(this, this.l);
            this.T(this.l, 'gpt', this.B);
            this.g = null;
            Fz() ||
              G().top === G() ||
              ((this.g = new Cz('gpt', !1)), vf(this, this.g), this.T(this.g, 'gpt', this.A));
          };
          t(Hz, mt);
          Hz.prototype.B = function (a) {
            var b = a.od,
              c = '//imasdk.googleapis.com'.match(cf);
            b = b.match(cf);
            if (c[3] == b[3] && c[4] == b[4])
              if (null != this.g)
                Ez(this.g, a.g, a.Rb, G().parent), null != this.g && Dz(this.g, a);
              else if (((c = a.na), null != c && void 0 !== c.scope)) {
                b = c.scope;
                c = c.args;
                var d;
                if ('proxy' == b)
                  (c = a.ka),
                    'isGptPresent' == c
                      ? (d = Fz())
                      : 'isConsolePresent' == c && (d = null != Gz());
                else if (Fz())
                  if ('pubads' == b || 'companionAds' == b) {
                    d = a.ka;
                    var e = G().googletag;
                    if (
                      null != e &&
                      null != e[b] &&
                      ((e = e[b]()), null != e && ((d = e[d]), null != d))
                    )
                      try {
                        var f = d.apply(e, c);
                      } catch (g) {}
                    d = f;
                  } else if ('console' == b) {
                    if (((f = Gz()), null != f && ((e = f[a.ka]), null != e)))
                      try {
                        e.apply(f, c);
                      } catch (g) {}
                  } else if (null === b)
                    if (((d = a.ka), Yg(Vh)))
                      'googleGetCompanionAdSlots' == d
                        ? (d = (c = yz()) ? c.getSlots().map(zz) : [])
                        : ('googleSetCompanionAdContents' == d && Az(c[0]), (d = null));
                    else {
                      f = G();
                      if (
                        ['googleGetCompanionAdSlots', 'googleSetCompanionAdContents'].includes(
                          d
                        ) &&
                        ((d = f[d]), null != d)
                      )
                        try {
                          e = d.apply(f, c);
                        } catch (g) {}
                      d = e;
                    }
                void 0 !== d && ((a.na.returnValue = d), Dz(this.l, a));
              }
          };
          Hz.prototype.A = function (a) {
            Dz(this.l, a);
          };
          var Iz = function (a, b) {
            if (a.g) {
              var c = a.g;
              uf(c.g[b]);
              delete c.g[b];
            }
            a.l && ((a = a.l), uf(a.g[b]), delete a.g[b]);
          };
          var Kz = function (a, b) {
              var c = Array.prototype.slice.call(arguments),
                d = c.shift();
              if ('undefined' == typeof d) throw Error('[goog.string.format] Template required');
              return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (
                e,
                f,
                g,
                h,
                k,
                n,
                m,
                u
              ) {
                if ('%' == n) return '%';
                var p = c.shift();
                if ('undefined' == typeof p)
                  throw Error('[goog.string.format] Not enough arguments');
                arguments[0] = p;
                return Jz[n].apply(null, arguments);
              });
            },
            Jz = {
              s: function (a, b, c) {
                return isNaN(c) || '' == c || a.length >= Number(c)
                  ? a
                  : (a =
                      -1 < b.indexOf('-', 0)
                        ? a + Vc(' ', Number(c) - a.length)
                        : Vc(' ', Number(c) - a.length) + a);
              },
              f: function (a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || '' == e || (d = parseFloat(a).toFixed(e));
                var f =
                  0 > Number(a) ? '-' : 0 <= b.indexOf('+') ? '+' : 0 <= b.indexOf(' ') ? ' ' : '';
                0 <= Number(a) && (d = f + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length;
                return (d =
                  0 <= b.indexOf('-', 0)
                    ? f + d + Vc(' ', a)
                    : f + Vc(0 <= b.indexOf('0', 0) ? '0' : ' ', a) + d);
              },
              d: function (a, b, c, d, e, f, g, h) {
                return Jz.f(parseInt(a, 10), b, c, d, 0, f, g, h);
              },
            };
          Jz.i = Jz.d;
          Jz.u = Jz.d;
          var Mz = function (a, b) {
            N.call(this);
            this.A = new mt(this);
            vf(this, this.A);
            this.M = this.L = null;
            this.K = !1;
            this.D = 'goog_' + Xc++;
            this.B = new Map();
            var c = this.D,
              d =
                (mf() ? 'https:' : 'http:') +
                Kz('//imasdk.googleapis.com/js/core/bridge3.426.0_%s.html', W.l);
            a: {
              var e = window;
              try {
                do {
                  try {
                    if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
                      var f = !0;
                      break a;
                    }
                  } catch (g) {}
                  e = e.parent;
                } while (e != e.top);
              } catch (g) {}
              f = !1;
            }
            f && (d += '?f=' + c);
            c = Ve('IFRAME', {
              src: d + '#' + c,
              allowFullscreen: !0,
              allow: 'autoplay',
              style: 'border:0; opacity:0; margin:0; padding:0; position:relative;',
            });
            this.A.wb(c, 'load', this.Z);
            a.appendChild(c);
            this.g = c;
            this.o = Lz(this);
            this.G = b;
            this.h = null;
            this.N = new wz(this.o, this.G);
            vf(this, this.N);
            this.G.h && this.A.T(this.o, 'displayContainer', this.U);
            this.A.T(this.o, 'mouse', this.W);
            this.A.T(this.o, 'touch', this.X);
            c = G();
            d = La('google.ima.gptProxyInstance', c);
            null != d
              ? (c = d)
              : ((d = new Hz()), y('google.ima.gptProxyInstance', d, c), (c = d));
            this.R = c;
            Yg(Rh) && ((this.I = new sz(a, this.o, b.h.N.g)), vf(this, this.I));
          };
          t(Mz, N);
          var Lz = function (a, b) {
            b = void 0 === b ? '*' : b;
            var c = a.B.get(b);
            null == c &&
              ((c = new gy(a.D, b)), a.K && ((c.g = Ze(a.g)), c.connect()), a.B.set(b, c));
            return c;
          };
          Mz.prototype.O = function () {
            null !== this.h && (this.h.V(), (this.h = null));
            this.B.forEach(function (a) {
              uf(a);
            });
            this.B.clear();
            Iz(this.R, this.D);
            We(this.g);
            N.prototype.O.call(this);
          };
          Mz.prototype.W = function (a) {
            var b = a.na,
              c = Pf(this.g),
              d = document.createEvent('MouseEvent');
            d.initMouseEvent(
              a.ka,
              !0,
              !0,
              window,
              b.detail,
              b.screenX,
              b.screenY,
              b.clientX + c.x,
              b.clientY + c.y,
              b.ctrlKey,
              b.altKey,
              b.shiftKey,
              b.metaKey,
              b.button,
              null
            );
            this.g.dispatchEvent(d);
          };
          var Nz = function (a, b) {
            var c = Pf(a.g),
              d = !!('TouchEvent' in window && 0 < TouchEvent.length);
            b = b.map(function (e) {
              return d
                ? new Touch({
                    identifier: e.identifier,
                    target: a.g,
                    clientX: e.clientX,
                    clientY: e.clientY,
                    screenX: e.screenX,
                    screenY: e.screenY,
                    pageX: e.pageX + c.x,
                    pageY: e.pageY + c.y,
                  })
                : document.createTouch(
                    window,
                    a.g,
                    e.identifier,
                    e.pageX + c.x,
                    e.pageY + c.y,
                    e.screenX,
                    e.screenY
                  );
            });
            return d ? b : document.createTouchList.apply(document, b);
          };
          Mz.prototype.X = function (a) {
            var b = a.na,
              c = Pf(this.g);
            if ('TouchEvent' in window && 0 < TouchEvent.length)
              (b = {
                bubbles: !0,
                cancelable: !0,
                view: window,
                detail: b.detail,
                ctrlKey: b.ctrlKey,
                altKey: b.altKey,
                shiftKey: b.shiftKey,
                metaKey: b.metaKey,
                touches: Nz(this, b.touches),
                targetTouches: Nz(this, b.targetTouches),
                changedTouches: Nz(this, b.changedTouches),
              }),
                (a = new TouchEvent(a.ka, b)),
                this.g.dispatchEvent(a);
            else {
              var d = document.createEvent('TouchEvent');
              d.initTouchEvent(
                a.ka,
                !0,
                !0,
                window,
                b.detail,
                b.screenX,
                b.screenY,
                b.clientX + c.x,
                b.clientY + c.y,
                b.ctrlKey,
                b.altKey,
                b.shiftKey,
                b.metaKey,
                Nz(this, b.touches),
                Nz(this, b.targetTouches),
                Nz(this, b.changedTouches),
                b.scale,
                b.rotation
              );
              this.g.dispatchEvent(d);
            }
          };
          Mz.prototype.U = function (a) {
            switch (a.ka) {
              case 'showVideo':
                null == this.h
                  ? ((this.h = new cx()), this.A.T(this.h, 'click', this.$))
                  : gx(this.h);
                ex(this.h, Oz(this.G));
                break;
              case 'hide':
                null !== this.h && (this.h.V(), (this.h = null));
            }
            var b = this.N;
            vz(b.l, a);
            b.g && vz(b.g, a);
          };
          Mz.prototype.$ = function () {
            Vw(this.o, 'displayContainer', 'videoClick');
          };
          Mz.prototype.Z = function () {
            var a = this;
            this.L = hg();
            this.M = eg();
            this.B.forEach(function (b) {
              b.g = Ze(a.g);
              b.connect();
            });
            this.K = !0;
          };
          var Qz = function () {
            N.call(this);
            this.buffered = new Pz();
            this.G = new Pz();
            this.B = new mt(this);
            this.src = this.D = '';
            this.I = !1;
            this.o = null;
            var a = iw(W);
            if (a) {
              a: {
                if (
                  Kb(a.g, 'videoElementFakeDuration') &&
                  ((a = a.g.videoElementFakeDuration), 'number' === typeof a)
                )
                  break a;
                a = NaN;
              }
              this.duration = a;
            }
          };
          t(Qz, N);
          var Rz = function () {
            var a = ['video/mp4'],
              b = ['video/ogg'],
              c = new Qz();
            c.canPlayType = function (d) {
              return a.includes(d) ? 'probably' : b.includes(d) ? 'maybe' : '';
            };
            c.width = 0;
            c.height = 0;
            c.offsetWidth = 0;
            c.offsetHeight = 0;
            return c;
          };
          l = Qz.prototype;
          l.pause = function () {
            this.paused ||
              (null.stop(),
              (this.paused = !0),
              this.dispatchEvent('timeupdate'),
              this.dispatchEvent('pause'));
          };
          l.load = function () {
            this.dd = 0;
            this.paused = !0;
            this.dispatchEvent('loadstart');
            this.setProperty(
              'duration',
              isNaN(this.duration) ? 10 + 20 * Math.random() : this.duration
            );
            var a = this.G;
            a.g.push(new Sz(this.duration));
            a.length = a.g.length;
            a = this.buffered;
            a.g.push(new Sz(this.duration));
            a.length = a.g.length;
            this.dispatchEvent('loadedmetadata');
            0 < this.currentTime && this.dispatchEvent('timeupdate');
            this.dispatchEvent('loadeddata');
            this.dispatchEvent('canplay');
            this.dispatchEvent('canplaythrough');
            this.dispatchEvent('progress');
          };
          l.setProperty = function (a, b) {
            switch (a) {
              case 'currentTime':
                a = Number(b);
                this.dispatchEvent('seeking');
                this.currentTime = a;
                this.dispatchEvent('seeked');
                a = z() - this.A;
                b = this.currentTime + a / 1000;
                this.A += a;
                2 < this.dd && (this.currentTime = Math.min(b, this.duration));
                this.dispatchEvent('timeupdate');
                this.currentTime == this.duration &&
                  ((this.paused = !0), null.stop(), this.dispatchEvent('ended'));
                break;
              case 'duration':
                this.duration = Number(b);
                this.dispatchEvent('durationchange');
                break;
              case 'volume':
                this.volume = Number(b);
                this.dispatchEvent('volumechange');
                break;
              default:
                throw 'Property setter not implemented';
            }
          };
          l.setAttribute = function (a, b) {
            null != a && Tz.set(a, b);
          };
          l.getAttribute = function (a) {
            return Tz.get(a);
          };
          l.O = function () {
            this.B.V();
          };
          l.xe = function (a) {
            var b = null,
              c = null;
            switch (a.type) {
              case 'loadeddata':
                b = 'Loaded';
                break;
              case 'playing':
                b = 'Playing';
                c = '#00f';
                break;
              case 'pause':
                b = 'Paused';
                break;
              case 'ended':
                (b = 'Ended'), (c = '#000');
            }
            b && this.h && (this.h.innerText = b);
            c && this.g && (this.g.style.backgroundColor = c);
          };
          var Tz = new Ar(),
            Sz = function (a) {
              this.endTime = a;
            },
            Pz = function () {
              this.length = 0;
              this.g = [];
            };
          Pz.prototype.start = function () {
            return 0;
          };
          l = Qz.prototype;
          l.dd = 0;
          l.currentTime = 0;
          l.duration = NaN;
          l.paused = !0;
          l.volume = 1;
          l.muted = !1;
          Object.defineProperty(Qz.prototype, 'src', {
            get: function () {
              return Qz.prototype.D;
            },
            set: function (a) {
              var b = Qz.prototype;
              b.I && null != b.o ? (b.o.reject(), (b.o = null)) : (b.D = a);
            },
          });
          Qz.prototype.A = 0;
          Qz.prototype.g = null;
          Qz.prototype.h = null;
          var Wz = function (a, b) {
            H.call(this);
            this.o = a;
            this.l = this.g = null;
            this.h = Uz();
            Vz(this, b);
            uv(function () {
              K(J.C(), 'haob', '1');
            });
          };
          t(Wz, H);
          Wz.prototype.initialize = function () {
            this.h && this.h.load();
          };
          Wz.prototype.O = function () {
            We(this.g);
            H.prototype.O.call(this);
          };
          var Vz = function (a, b) {
              a.g = Ve('DIV', { style: 'display:none;' });
              a.o.appendChild(a.g);
              a.g.appendChild(a.h);
              b &&
                ((a.l = Ve('DIV', {
                  style: 'position:absolute;width:100%;height:100%;left:0px;top:0px',
                })),
                a.g.appendChild(a.l));
            },
            Uz = function () {
              var a = iw(W);
              if (gw(a, 'useVideoElementFake')) {
                a = Rz();
                var b = Ve('DIV', {
                  style: 'position:absolute;width:100%;height:100%;top:0px;left:0px;',
                });
                for (c in a) b[c] = a[c];
                a.g = Ve('DIV', {
                  style:
                    'position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000',
                });
                a.h = Ve('P', {
                  style: 'position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;',
                });
                a.g.appendChild(a.h);
                b.appendChild(a.g);
                a.B.T(a, ['loadeddata', 'playing', 'pause', 'ended'], a.xe);
                var c = b;
              } else {
                c = !1;
                try {
                  -1 != window.location.search.indexOf('goog_limavideo=true') && (c = !0);
                } catch (d) {}
                if ((Yg(Th) || c) && v.customElements) {
                  c && console.log('force lima video in wrapper');
                  c = null;
                  try {
                    c = new Hv();
                  } catch (d) {
                    c = Ve('lima-video');
                  }
                  c.style.backgroundColor = '#000';
                  c.style.height = '100%';
                  c.style.width = '100%';
                  c.style.position = 'absolute';
                  c.style.left = '0';
                  c.style.top = '0';
                } else
                  c = Ve('VIDEO', {
                    style:
                      'background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;',
                    title: Uv('Advertisement').toString(),
                  });
              }
              c.setAttribute('webkit-playsinline', !0);
              c.setAttribute('playsinline', !0);
              return c;
            };
          Wz.prototype.show = function () {
            uz(this.g, !0);
          };
          var uz = function (a, b) {
            null != a && (a.style.display = b ? 'block' : 'none');
          };
          var Zz = function (a, b, c) {
            var d = a && a.getRootNode ? a.getRootNode({ composed: !0 }) : a;
            if (null == a || !Ye(Le(d), d)) throw bx(ax, null, 'containerElement', 'element');
            this.B = b;
            this.Z = Ew(this.B || null);
            this.X = it(this.B || null);
            this.W = String(Math.floor(1000000000 * Math.random()));
            this.L = !1;
            this.I = a;
            this.N = null != b;
            W.g = 2;
            this.D = Xz(b ? b : null);
            d = Ve('DIV', { style: 'position:absolute' });
            a.insertBefore(d, a.firstChild);
            this.A = d;
            this.g = null;
            Yz(this) && b
              ? (a = new hz(b))
              : ((this.g = new Wz(this.A, !0)), (a = new hz(this.g.h)));
            this.h = a;
            this.l = this.o = null;
            a = ud && !(ud && ft(et, 4));
            d = vd || xd;
            !this.g ||
              Yz(this) ||
              !W.isAutoPlayAdBreaks() ||
              Wl() ||
              a ||
              d ||
              ((this.o = new Wz(this.A, !0)), (this.l = new hz(this.o.h)));
            this.H = c || null;
            this.U = null != this.H;
            Yz(this) && b
              ? 'function' !== typeof b.getBoundingClientRect
                ? ((c = this.A), (W.o = c))
                : (c = b)
              : (c = this.A);
            this.G = c;
            this.J = new Mz(this.A, this);
            this.R = new Je(0, 0);
            this.K = '';
            b &&
              ((b = b.src || b.currentSrc),
              (b = b instanceof Q ? b.I() : new Q(b, void 0)),
              200 > b.toString().length
                ? (this.K = b.toString())
                : 200 > b.h.length && (this.K = b.h));
            this.M = new Map();
            this.M.set('videoDisplay1', this.h);
            this.l && this.M.set('videoDisplay2', this.l);
          };
          Zz.prototype.initialize = function () {
            this.L = !0;
            null != this.g && this.g.initialize();
            null != this.o && this.o.initialize();
          };
          Zz.prototype.destroy = function () {
            var a = this;
            this.B = null;
            uf(this.g);
            uf(this.o);
            uf(this.J);
            this.h.Sb(function () {
              return uf(a.h);
            });
            null != this.l &&
              this.l.Sb(function () {
                return uf(a.l);
              });
            We(this.A);
          };
          var Oz = function (a) {
              return a.U && a.H ? a.H : null != a.g ? a.g.l : null;
            },
            Yz = function (a) {
              return Dw(a.D) && a.N;
            },
            Xz = function (a) {
              return null != a &&
                'function' === typeof a.getAttribute &&
                null != a.getAttribute('playsinline')
                ? !0
                : !1;
            };
          Zz.prototype.destroy = Zz.prototype.destroy;
          Zz.prototype.initialize = Zz.prototype.initialize;
          var $z = function (a) {
            var b = Error.call(this);
            this.message = b.message;
            'stack' in b && (this.stack = b.stack);
            this.g = a;
          };
          t($z, Error);
          l = $z.prototype;
          l.getInnerError = function () {
            var a = this.g.innerError;
            return a instanceof Object ? new $z(a) : null != a ? Error(a) : null;
          };
          l.getMessage = function () {
            return this.g.errorMessage;
          };
          l.getErrorCode = function () {
            return this.g.errorCode;
          };
          l.cd = function () {
            var a = this.getErrorCode();
            return 1000 > a ? a : 900;
          };
          l.getType = function () {
            return this.g.type;
          };
          l.toString = function () {
            return (
              'AdError ' +
              this.getErrorCode() +
              ': ' +
              this.getMessage() +
              (null != this.getInnerError() ? ' Caused by: ' + this.getInnerError() : '')
            );
          };
          $z.prototype.getType = $z.prototype.getType;
          $z.prototype.getVastErrorCode = $z.prototype.cd;
          $z.prototype.getErrorCode = $z.prototype.getErrorCode;
          $z.prototype.getMessage = $z.prototype.getMessage;
          $z.prototype.getInnerError = $z.prototype.getInnerError;
          var aA = { AD_LOAD: 'adLoadError', AD_PLAY: 'adPlayError' };
          y('module$contents$ima$AdError_AdError.Type', aA, void 0);
          var bA = function (a, b) {
            b = void 0 === b ? null : b;
            gi.call(this, 'adError');
            this.g = a;
            this.l = b;
          };
          t(bA, gi);
          bA.prototype.getError = function () {
            return this.g;
          };
          bA.prototype.getUserRequestContext = function () {
            return this.l;
          };
          bA.prototype.getUserRequestContext = bA.prototype.getUserRequestContext;
          bA.prototype.getError = bA.prototype.getError;
          var cA = { AD_ERROR: 'adError' };
          y('module$contents$ima$AdErrorEvent_AdErrorEvent.Type', cA, void 0);
          var dA = function (a, b, c) {
            b = void 0 === b ? null : b;
            c = void 0 === c ? null : c;
            gi.call(this, a);
            this.o = b;
            this.l = c;
          };
          t(dA, gi);
          dA.prototype.getAd = function () {
            return this.o;
          };
          dA.prototype.getAdData = function () {
            return this.l;
          };
          dA.prototype.getAdData = dA.prototype.getAdData;
          dA.prototype.getAd = dA.prototype.getAd;
          var eA = {
            AD_CAN_PLAY: 'adCanPlay',
            gf: 'adStarted',
            CONTENT_PAUSE_REQUESTED: 'contentPauseRequested',
            CONTENT_RESUME_REQUESTED: 'contentResumeRequested',
            CLICK: 'click',
            VIDEO_CLICKED: 'videoClicked',
            VIDEO_ICON_CLICKED: 'videoIconClicked',
            Pc: 'engagedView',
            EXPANDED_CHANGED: 'expandedChanged',
            STARTED: 'start',
            AD_PROGRESS: 'adProgress',
            AD_BUFFERING: 'adBuffering',
            IMPRESSION: 'impression',
            Rc: 'measurable_impression',
            VIEWABLE_IMPRESSION: 'viewable_impression',
            Qc: 'fully_viewable_audible_half_duration_impression',
            Kd: 'overlay_resize',
            Ld: 'overlay_unmeasurable_impression',
            Md: 'overlay_unviewable_impression',
            Od: 'overlay_viewable_immediate_impression',
            Nd: 'overlay_viewable_end_of_session_impression',
            Ef: 'externalActivityEvent',
            PAUSED: 'pause',
            RESUMED: 'resume',
            FIRST_QUARTILE: 'firstQuartile',
            MIDPOINT: 'midpoint',
            THIRD_QUARTILE: 'thirdQuartile',
            COMPLETE: 'complete',
            DURATION_CHANGE: 'durationChange',
            USER_CLOSE: 'userClose',
            Ng: 'userRecall',
            wg: 'prefetched',
            LOADED: 'loaded',
            ALL_ADS_COMPLETED: 'allAdsCompleted',
            SKIPPED: 'skip',
            Rd: 'skipShown',
            LINEAR_CHANGED: 'linearChanged',
            SKIPPABLE_STATE_CHANGED: 'skippableStateChanged',
            AD_METADATA: 'adMetadata',
            ff: 'adBreakFetchError',
            AD_BREAK_READY: 'adBreakReady',
            LOG: 'log',
            VOLUME_CHANGED: 'volumeChange',
            VOLUME_MUTED: 'mute',
            INTERACTION: 'interaction',
            sf: 'companionBackfill',
            Kg: 'trackingUrlPinged',
            Pg: 'video_card_endcap_collapse',
            Qg: 'video_card_endcap_dismiss',
            Rg: 'video_card_endcap_impression',
            vf: 'companionInitialized',
            uf: 'companionImpression',
            tf: 'companionClick',
            jg: 'mediaUrlPinged',
            Hd: 'loadStart',
            mg: 'navigationRequested',
          };
          y('module$contents$ima$AdEvent_AdEvent.Type', eA, void 0);
          var fA = function (a, b) {
            b = void 0 === b ? null : b;
            dA.call(this, 'adMetadata', a);
            this.g = b;
          };
          t(fA, dA);
          fA.prototype.ie = function () {
            return this.g;
          };
          fA.prototype.getAdCuePoints = fA.prototype.ie;
          var gA = function (a) {
            this.adBreakDuration = a.adBreakDuration;
            this.adPosition = a.adPosition;
            this.currentTime = a.currentTime;
            this.duration = a.duration;
            this.totalAds = a.totalAds;
          };
          var hA = function (a, b) {
            N.call(this);
            this.o = a;
            this.B = b;
            this.h = this.o.currentTime;
            this.g = new mj(250);
            vf(this, this.g);
            this.A = new mt(this);
            vf(this, this.A);
            ot(this.A, this.g, 'tick', this.D, !1, this);
          };
          t(hA, N);
          hA.prototype.Ua = function () {
            return this.h;
          };
          hA.prototype.start = function () {
            iA(this);
            this.g.start();
          };
          hA.prototype.stop = function () {
            this.g.stop();
          };
          hA.prototype.D = function () {
            var a = this.o.currentTime;
            a != this.Ua() && ((this.h = a), iA(this));
          };
          var iA = function (a) {
            var b = {};
            b.currentTime = a.Ua();
            Vw(a.B, 'contentTimeUpdate', 'contentTimeUpdate', b);
          };
          var jA = function (a, b, c) {
            N.call(this);
            this.h = a;
            this.g = null;
            this.K = '';
            this.L = Cc;
            this.M = 0;
            this.D = this.o = null;
            this.A = b;
            this.B = null;
            this.G = '';
            this.I = c;
          };
          t(jA, N);
          jA.prototype.init = function (a) {
            this.G = a;
            a = 'about:self';
            od && (a = '');
            this.o = Ve('IFRAME', { src: a, allowtransparency: !0, background: 'transparent' });
            Lf(this.o, { display: 'none', width: '0', height: '0' });
            a = this.h.I;
            a.appendChild(this.o);
            a = a.ownerDocument;
            a = a.defaultView || a.parentWindow;
            null == this.B && (this.B = new mt(this));
            this.B.T(a, 'message', this.N);
            a =
              '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js"></script><script>loader = new VPAIDLoader(false, "' +
              (this.G + '");</script></body>');
            if (Nd || Jd || pd) {
              var b = this.o.contentWindow;
              b && Wy(b.document, a);
            } else Xy(this.o, a);
          };
          jA.prototype.N = function (a) {
            try {
              var b = a.g.data;
              try {
                var c = JSON.parse(b);
              } catch (la) {
                return;
              }
              var d = c.session;
              if (null != d && this.G == d)
                switch (c.type) {
                  case 'friendlyReady':
                    var e = kA(this);
                    if (null != e) {
                      this.g = e;
                      this.K = e.currentSrc;
                      var f = e.style.cssText;
                      if (od && 10 > document.documentMode) var g = Cc;
                      else {
                        var h = document;
                        'function' === typeof HTMLTemplateElement &&
                          (h = Te(document, 'TEMPLATE').content.ownerDocument);
                        var k = h.implementation.createHTMLDocument('').createElement('DIV');
                        k.style.cssText = f;
                        g = cw(k.style);
                      }
                      this.L = g;
                      this.M = e.currentTime;
                    } else {
                      var n = this.h.I,
                        m = this.h.R;
                      var u =
                        'border: 0; margin: 0; padding: 0; position: absolute; width:' +
                        (m.width + 'px; ');
                      u += 'height:' + m.height + 'px;';
                      this.g = Ve('VIDEO', { style: u, autoplay: !0 });
                      n.appendChild(this.g);
                    }
                    var p = this.h.I;
                    e = 'border: 0; margin: 0; padding: 0;position: absolute; ';
                    var w = Tf(this.g);
                    e += 'width:' + w.width + 'px; ';
                    e += 'height:' + w.height + 'px;';
                    this.D = Ve('DIV', { style: e });
                    p.appendChild(this.D);
                    try {
                      this.o.contentWindow.loader.initFriendly(this.g, this.D);
                    } catch (la) {
                      lA(this);
                    }
                    Vw(this.A, 'vpaid', '', b);
                    break;
                  case 'becameLinear':
                    this.g && !bf() && !af() && Lf(this.g, { visibility: 'visible' });
                    Vw(this.A, 'vpaid', '', b);
                    break;
                  case 'becameNonlinear':
                    mA(this);
                    Vw(this.A, 'vpaid', '', b);
                    break;
                  case 'startAd':
                    p = {};
                    if (this.g) {
                      h = this.g.paused;
                      var x = 0 < this.g.currentTime;
                      p.apl = x && !h ? '1' : '0';
                      p.ip = h ? '1' : '0';
                      p.iavp = x ? '1' : '0';
                    } else p.apl = 'n';
                    Cx.C().report(99, p);
                    Vw(this.A, 'vpaid', '', b);
                    if (null != kA(this)) {
                      var B = this.h;
                      null != B.g && B.g.show();
                    }
                    break;
                  default:
                    Vw(this.A, 'vpaid', '', b);
                }
            } catch (la) {
              lA(this);
            }
          };
          var lA = function (a) {
              var b = { type: 'error' };
              b.session = a.G;
              a = Ng(b);
              window.postMessage(a, '*');
            },
            kA = function (a) {
              return ('videoDisplayUnknown' == a.I ? a.h.h : a.h.M.get(a.I)).N.g;
            },
            mA = function (a) {
              a.g && !bf() && !af() && Lf(a.g, { visibility: 'hidden' });
            };
          jA.prototype.O = function () {
            N.Ca.O.call(this);
            uf(this.B);
            this.B = null;
            We(this.D);
            this.D = null;
            We(this.o);
            this.o = null;
            var a = kA(this);
            if (null != a) {
              var b = this.L;
              a.style.cssText =
                b instanceof Bc && b.constructor === Bc ? b.g : 'type_error:SafeStyle';
              bf() || af()
                ? ((a.src = this.K), (a.currentTime = this.M))
                : (a.removeAttribute('src'), (a = this.h), null != a.g && uz(a.g.g, !1));
            } else We(this.g), (this.g = null);
          };
          var nA = function (a, b) {
            H.call(this);
            this.l = a;
            this.h = b;
            this.g = new Map();
          };
          t(nA, H);
          var oA = function (a, b) {
            try {
              var c = b.na,
                d = c.session;
              switch (c.vpaidEventType) {
                case 'createFriendlyIframe':
                  b = 'videoDisplayUnknown';
                  c.videoDisplayName && (b = c.videoDisplayName);
                  var e = c.session,
                    f = new jA(a.l, a.h, b);
                  a.g.set(e, f);
                  f.init(e);
                  break;
                case 'vpaidNonLinear':
                  var g = a.g.get(d);
                  g && mA(g);
                  break;
                case 'destroyFriendlyIframe':
                  var h = a.g.get(d);
                  h && (h.V(), a.g.delete(d));
              }
            } catch (k) {
              Cx.C().report(125, { msg: k.message });
            }
          };
          nA.prototype.O = function () {
            this.g.forEach(function (a) {
              return a.V();
            });
          };
          var pA = function () {
              this.g = [];
              this.h = [];
            },
            qA = function (a) {
              return 0 == a.g.length && 0 == a.h.length;
            };
          pA.prototype.remove = function (a) {
            var b = this.g;
            b: {
              var c = b.length - 1;
              0 > c && (c = Math.max(0, b.length + c));
              if ('string' === typeof b)
                c = 'string' !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);
              else {
                for (; 0 <= c; c--) if (c in b && b[c] === a) break b;
                c = -1;
              }
            }
            0 <= c ? (ob(b, c), (b = !0)) : (b = !1);
            return b || lb(this.h, a);
          };
          pA.prototype.Va = function () {
            for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
            var c = this.h.length;
            for (b = 0; b < c; ++b) a.push(this.h[b]);
            return a;
          };
          var Z = function (a, b, c, d, e, f, g) {
            N.call(this);
            var h = this;
            this.L = a;
            this.g = b;
            this.K = c;
            this.Yd = e;
            this.A = new Xx();
            this.I = g;
            this.U = !1;
            this.R = 1;
            this.zd = d;
            this.fa = -1;
            this.o = this.h = null;
            this.G = new hA({ currentTime: 0 }, this.I);
            this.D = new pA();
            this.Ab = this.$ = !1;
            this.W = new Map();
            this.X = this.va = !1;
            this.Da = new nA(b, g);
            vf(this, this.Da);
            this.M = f && null != this.g.H;
            this.N = function () {
              var k = h.g.h,
                n = k.g.currentTime;
              k = k.getDuration();
              return { currentTime: n, duration: k, isPlaying: !0, volume: h.R };
            };
            this.Z = new mt(this);
            this.Z.T(this.I, 'adsManager', this.be);
          };
          t(Z, N);
          Z.prototype.be = function (a) {
            var b = this,
              c = a.ka,
              d = a.na;
            switch (c) {
              case 'error':
                rA(this);
                sA(this, d);
                break;
              case 'contentPauseRequested':
                Cx.C().report(130);
                tA(this);
                uA(this, c, d);
                break;
              case 'contentResumeRequested':
                vA(this, function () {
                  return uA(b, c, d);
                });
                break;
              case 'remainingTime':
                this.fa = d.remainingTime;
                break;
              case 'skip':
                uA(this, c, d);
                break;
              case 'log':
                uA(this, c, d, d.logData);
                break;
              case 'companionBackfill':
                a = La('window.google_show_companion_ad');
                null != a && a();
                break;
              case 'skipShown':
                this.U = !0;
                uA(this, c, d);
                break;
              case 'interaction':
                uA(this, c, d, d.interactionData);
                break;
              case 'vpaidEvent':
                oA(this.Da, a);
                break;
              case 'skippableStateChanged':
                a = d.adData;
                null != a.skippable && (this.U = a.skippable);
                uA(this, c, d);
                break;
              case 'volumeChange':
                a = d.adData;
                null != a && 'number' === typeof a.volume && (this.R = a.volume);
                uA(this, c, d);
                break;
              case 'firstQuartile':
                uA(this, Tw.firstQuartile, d);
                uA(this, c, d);
                break;
              case 'thirdQuartile':
                uA(this, Tw.thirdQuartile, d);
                uA(this, c, d);
                break;
              default:
                uA(this, c, d);
            }
          };
          var uA = function (a, b, c, d) {
              if (null == c.companions) {
                var e = a.W.get(c.adId);
                c.companions = null != e ? e : [];
              }
              var f = c.adData;
              if ((e = null == f ? null : new Y(f))) a.h = e;
              switch (b) {
                case 'adBreakReady':
                case 'mediaUrlPinged':
                  b = new dA(b, null, c);
                  break;
                case 'adMetadata':
                  b = null;
                  null != c.adCuePoints && (b = new cz(c.adCuePoints));
                  b = new fA(e, b);
                  break;
                case 'allAdsCompleted':
                  a.h = null;
                  a.va = !0;
                  b = new dA(b, e);
                  break;
                case 'contentPauseRequested':
                  a.X = !1;
                  b = new dA(b, e);
                  break;
                case 'contentResumeRequested':
                  a.h = null;
                  a.X = !0;
                  b = new dA(b, e);
                  break;
                case 'loaded':
                  a.fa = e.getDuration();
                  Fw() &&
                    ((d = a.L),
                    (c = a.Yd),
                    d.h.set(Ix(e), a.N),
                    (0 != W.g ? iq.C().l : d.B) && Qx(d, 'loaded', Ix(e), c));
                  b = new dA(b, e, f);
                  break;
                case 'start':
                  a.W.set(c.adId, c.companions);
                  null != Oz(a.g) &&
                    (null == a.o ? ((a.o = new cx()), a.Z.T(a.o, 'click', a.Le)) : gx(a.o),
                    ex(a.o, Oz(a.g)));
                  b = new dA(b, e);
                  break;
                case 'complete':
                  null != a.o && gx(a.o);
                  Fw() && Sx(a.L, a.N, Ix(e));
                  a.h = null;
                  a.W.delete(c.adId);
                  b = new dA(b, e);
                  break;
                case 'log':
                  c = null;
                  null != d && null != d.type
                    ? ((f = d.type), (f = 'adLoadError' == f || 'adPlayError' == f))
                    : (f = !1);
                  f && (c = { adError: new $z(d) });
                  b = new dA(b, e, c);
                  break;
                case 'interaction':
                  b = new dA(b, e, d);
                  break;
                case 'adProgress':
                  b = new dA(b, e, new gA(c));
                  break;
                default:
                  b = new dA(b, e);
              }
              a.dispatchEvent(b);
              a.va && a.X && a.destroy();
            },
            sA = function (a, b) {
              var c = new bA(new $z(b));
              a.$
                ? (a.dispatchEvent(c), Fw() && a.h && Sx(a.L, a.N, Ix(a.h)), (a.h = null))
                : a.D.h.push(c);
              a = { error: b.errorCode, vis: qg(document) };
              Cx.C().report(7, a);
            },
            wA = function (a, b, c) {
              Vw(a.I, 'adsManager', b, c);
            },
            vA = function (a, b) {
              Cx.C().report(131);
              rA(a, b);
            },
            tA = function (a) {
              var b = a.g.h;
              Yz(a.g) && a.A.restoreCustomPlaybackStateOnAdBreakComplete && null != b.jd && b.jd();
            },
            rA = function (a, b) {
              var c = a.g.h;
              Yz(a.g) && a.A.restoreCustomPlaybackStateOnAdBreakComplete && null != c.Sb
                ? c.Sb(b)
                : b && b();
            };
          l = Z.prototype;
          l.init = function (a, b, c, d) {
            if (qA(this.D)) {
              var e = this.g,
                f = null;
              e.B && null == d && (f = { vd: 'setnull' });
              e.B && e.B === d && (f = { vd: 'match' });
              if (e.B && e.B !== d) {
                f = Ew(d || null);
                var g = it(d || null);
                f = { vd: 'diff', oc: e.Z, nc: f, oi: e.X, ni: g };
              }
              !e.B && d && (f = { vd: 'new' });
              f && ((f.custVid = e.W), Cx.C().report(93, f));
              null != d &&
                ((e.D = Xz(d)),
                Dw(e.D) &&
                  ((e.N = !0),
                  uf(e.g),
                  uf(e.o),
                  uf(e.l),
                  (e.g = null),
                  (e.o = null),
                  (e.l = null),
                  uf(e.h),
                  (e.h = new hz(d)),
                  'function' !== typeof d.getBoundingClientRect
                    ? ((e.G = e.A), (W.o = e.G))
                    : (e.G = d),
                  (d = e.J),
                  d.I &&
                    ((d = d.I),
                    (e = e.h.N.g),
                    (d.A = e),
                    d.g && ((d = d.g), (d.h = e), az(d, e)))));
              this.$ = !0;
              this.resize(a, b, c);
              e = Yx(this.A, this.M);
              wA(this, 'init', { adsRenderingSettings: e, width: a, height: b, viewMode: c });
            } else {
              for (; !qA(this.D); )
                (b = a = this.D),
                  0 == b.g.length && ((b.g = b.h), b.g.reverse(), (b.h = [])),
                  (a = a.g.pop()),
                  this.dispatchEvent(a);
              this.V();
            }
          };
          l.Be = function () {
            return Yz(this.g);
          };
          l.Ae = function () {
            return this.M;
          };
          l.getRemainingTime = function () {
            return this.fa;
          };
          l.getAdSkippableState = function () {
            return this.U;
          };
          l.ge = function () {
            wA(this, 'discardAdBreak');
          };
          l.updateAdsRenderingSettings = function (a) {
            if (null != a) {
              var b = this.A.bitrate,
                c = a.bitrate;
              Cx.C().report(96, {
                init: this.$ ? '1' : '0',
                start: this.Ab ? '1' : '0',
                old: b,
                new: c,
                changed: b != c ? '1' : '0',
              });
              this.A = a;
              a = Yx(this.A, this.M);
              wA(this, 'updateAdsRenderingSettings', { adsRenderingSettings: a });
            }
          };
          l.skip = function () {
            wA(this, 'skip');
          };
          l.start = function () {
            if (this.K) {
              (vd || xd) && Cx.C().report(50, { customPlayback: Yz(this.g) });
              this.g.L || Cx.C().report(26, { adtagurl: this.K, customPlayback: Yz(this.g) });
              Ql(this.g.A) && Cx.C().report(30, { adtagurl: this.K, customPlayback: Yz(this.g) });
              var a = this.g.H,
                b = this.g.A,
                c;
              if ((c = a && b && !Ql(a)))
                (a = Ox(a)),
                  (b = Ox(b)),
                  (c =
                    0 < a.width &&
                    0 < a.height &&
                    0 < b.width &&
                    0 < b.height &&
                    a.left <= b.left + b.width &&
                    b.left <= a.left + a.width &&
                    a.top <= b.top + b.height &&
                    b.top <= a.top + a.height);
              c && Cx.C().report(31, { adtagurl: this.K, customPlayback: Yz(this.g) });
            }
            if (!this.g.L && !Yz(this.g)) throw bx($w);
            b = this.g;
            b.U = this.M && null != b.H;
            this.g.J.g.style.opacity = 1;
            null != this.B &&
              1 == this.getVolume() &&
              ('boolean' === typeof this.B.muted && this.B.muted
                ? this.setVolume(0)
                : 'number' === typeof this.B.volume &&
                  ((b = this.B.volume), 0 <= b && 1 >= b && this.setVolume(this.B.volume)));
            this.Ab = !0;
            wA(this, 'start');
          };
          l.Le = function () {
            if (!this.A.disableClickThrough && null != this.h) {
              var a = this.h.g.clickThroughUrl;
              null != a && Et(a);
            }
          };
          l.resize = function (a, b, c) {
            var d = this.g,
              e = d.A;
            null != e &&
              (-1 == a
                ? ((e.style.right = '0'), (e.style.left = '0'))
                : (e.style.width = a + 'px'),
              -1 == b
                ? ((e.style.bottom = '0'), (e.style.top = '0'))
                : (e.style.height = b + 'px'));
            e = d.J;
            e.g.width = -1 == a ? '100%' : a;
            e.g.height = -1 == b ? '100%' : b;
            try {
              e.g.offsetTop = e.g.offsetTop;
            } catch (f) {}
            d.R = new Je(a, b);
            wA(this, 'resize', { width: a, height: b, viewMode: c });
          };
          l.stop = function () {
            wA(this, 'stop');
          };
          l.expand = function () {
            wA(this, 'expand');
          };
          l.collapse = function () {
            wA(this, 'collapse');
          };
          l.getVolume = function () {
            return this.R;
          };
          l.setVolume = function (a) {
            this.R = a;
            this.g.h.setVolume(a);
            wA(this, 'volume', { volume: a });
          };
          l.pause = function () {
            wA(this, 'pause');
          };
          l.resume = function () {
            wA(this, 'resume');
          };
          l.destroy = function () {
            this.V();
          };
          l.getCuePoints = function () {
            return this.zd;
          };
          l.getCurrentAd = function () {
            return this.h;
          };
          l.O = function () {
            wA(this, 'destroy');
            null != this.o && this.o.V();
            this.Z.V();
            var a = this.D;
            a.g = [];
            a.h = [];
            this.G && (this.G.stop(), this.G.V());
            Fw() && Sx(this.L, this.N);
            N.prototype.O.call(this);
          };
          l.clicked = function () {
            Cx.C().report(124, { api: 'clicked' });
            var a = this.h && this.h.g.clickThroughUrl;
            a && this.h.isUiDisabled() && Et(a);
            wA(this, 'click');
          };
          l.focus = function () {
            Vw(this.I, 'userInteraction', 'focusUiElement');
          };
          Z.prototype.clicked = Z.prototype.clicked;
          Z.prototype.getCurrentAd = Z.prototype.getCurrentAd;
          Z.prototype.getCuePoints = Z.prototype.getCuePoints;
          Z.prototype.destroy = Z.prototype.destroy;
          Z.prototype.resume = Z.prototype.resume;
          Z.prototype.pause = Z.prototype.pause;
          Z.prototype.setVolume = Z.prototype.setVolume;
          Z.prototype.getVolume = Z.prototype.getVolume;
          Z.prototype.collapse = Z.prototype.collapse;
          Z.prototype.expand = Z.prototype.expand;
          Z.prototype.stop = Z.prototype.stop;
          Z.prototype.resize = Z.prototype.resize;
          Z.prototype.start = Z.prototype.start;
          Z.prototype.skip = Z.prototype.skip;
          Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
          Z.prototype.discardAdBreak = Z.prototype.ge;
          Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
          Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
          Z.prototype.isCustomClickTrackingUsed = Z.prototype.Ae;
          Z.prototype.isCustomPlaybackUsed = Z.prototype.Be;
          Z.prototype.init = Z.prototype.init;
          var xA = function (a, b) {
            gi.call(this, 'adsManagerLoaded');
            this.g = a;
            this.l = b;
          };
          t(xA, gi);
          xA.prototype.getAdsManager = function (a, b) {
            a = a || { currentTime: null };
            var c = this.g;
            c.B = a;
            null != a.currentTime && ((c.G = new hA(a, c.I)), c.G.start());
            null != b && (c.A = b);
            return this.g;
          };
          xA.prototype.getUserRequestContext = function () {
            return this.l;
          };
          xA.prototype.getUserRequestContext = xA.prototype.getUserRequestContext;
          xA.prototype.getAdsManager = xA.prototype.getAdsManager;
          var yA = { ADS_MANAGER_LOADED: 'adsManagerLoaded' };
          y('module$contents$ima$AdsManagerLoadedEvent_AdsManagerLoadedEvent.Type', yA, void 0);
          var zA = function () {
            this.videoPlayMuted = this.videoPlayActivation = 'unknown';
            this.videoContinuousPlay = '0';
            this.nonLinearAdSlotHeight = this.nonLinearAdSlotWidth = this.linearAdSlotHeight = this.linearAdSlotWidth = this.liveStreamPrefetchSeconds = 0;
            this.forceNonLinearFullSlot = !1;
            this.vastLoadTimeout = 5000;
            this.omidAccessModeRules = {};
          };
          zA.prototype.setAdWillAutoPlay = function (a) {
            this.videoPlayActivation = a ? 'auto' : 'click';
          };
          zA.prototype.setAdWillPlayMuted = function (a) {
            this.videoPlayMuted = a ? 'muted' : 'unmuted';
          };
          zA.prototype.setContinuousPlayback = function (a) {
            this.videoContinuousPlay = a ? '2' : '1';
          };
          zA.prototype.setContinuousPlayback = zA.prototype.setContinuousPlayback;
          zA.prototype.setAdWillPlayMuted = zA.prototype.setAdWillPlayMuted;
          zA.prototype.setAdWillAutoPlay = zA.prototype.setAdWillAutoPlay;
          var AA = function (a) {
            try {
              var b = new Q(a);
              if (!b.h.includes('.cdn.ampproject.org')) return null;
              var c = b.g.split('/').slice(1);
              if ('s' == c[1] && 3 > c.length) return null;
              if (2 > c.length) return a;
              var d = 's' == c[1];
              c = d ? c.slice(2) : c.slice(1);
              var e = decodeURIComponent(c[0]) + '/';
              return d
                ? 'https://' + e + c.slice(1).join('/')
                : 'http://' + e + c.slice(1).join('/');
            } catch (f) {
              return null;
            }
          };
          function BA (a, b, c) {
            c = void 0 === c ? document : c;
            c = void 0 === c ? document : c;
            b = de(b, 5) ? c.cookie : null;
            return null === b ? null : new te({ cookie: b }).get(a) || '';
          }
          var CA = function () {
            this.g = window;
            this.h = 0;
          };
          var DA = {};
          var EA = function (a, b, c) {
            var d = 'script';
            d = void 0 === d ? '' : d;
            var e = a.createElement('link');
            try {
              (e.rel = 'preload'),
                (e.href = pc('preload', 'stylesheet')
                  ? bc(b).toString()
                  : b instanceof ac
                  ? bc(b).toString()
                  : b instanceof tc
                  ? uc(b)
                  : uc(yc(b)));
            } catch (f) {
              return;
            }
            d && (e.as = d);
            c && e.setAttribute('nonce', c);
            if ((a = a.getElementsByTagName('head')[0]))
              try {
                a.appendChild(e);
              } catch (f) {}
          };
          var FA = /^\.google\.(com?\.)?[a-z]{2,3}$/,
            GA = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
            HA = v,
            JA = function (a) {
              a = 'https://adservice' + (a + '/adsid/integrator.js');
              var b = ['domain=' + encodeURIComponent(v.location.hostname)];
              IA[3] >= z() && b.push('adsid=' + encodeURIComponent(IA[1]));
              (void 0 == DA.enable_mustu_exp_behavior ? 0 : DA.enable_mustu_exp_behavior) &&
                b.push('meb=1');
              return a + '?' + b.join('&');
            },
            IA,
            KA,
            LA = function () {
              HA = v;
              IA = HA.googleToken = HA.googleToken || {};
              var a = z();
              (IA[1] && IA[3] > a && 0 < IA[2]) ||
                ((IA[1] = ''), (IA[2] = -1), (IA[3] = -1), (IA[4] = ''), (IA[6] = ''));
              KA = HA.googleIMState = HA.googleIMState || {};
              a = KA[1];
              (FA.test(a) && !GA.test(a)) || (KA[1] = '.google.com');
              Array.isArray(KA[5]) || (KA[5] = []);
              'boolean' !== typeof KA[6] && (KA[6] = !1);
              Array.isArray(KA[7]) || (KA[7] = []);
              'number' !== typeof KA[8] && (KA[8] = 0);
            },
            MA = {
              kc: function () {
                return 0 < KA[8];
              },
              Pe: function () {
                KA[8]++;
              },
              Qe: function () {
                0 < KA[8] && KA[8]--;
              },
              Re: function () {
                KA[8] = 0;
              },
              fh: function () {
                return !1;
              },
              ad: function () {
                return KA[5];
              },
              Wc: function (a) {
                try {
                  a();
                } catch (b) {
                  v.setTimeout(function () {
                    throw b;
                  }, 0);
                }
              },
              qd: function () {
                if (!MA.kc()) {
                  var a = v.document,
                    b = function (e) {
                      e = JA(e);
                      a: {
                        try {
                          var f = Ja();
                          break a;
                        } catch (g) {}
                        f = void 0;
                      }
                      EA(a, e, f);
                      f = a.createElement('script');
                      f.type = 'text/javascript';
                      f.onerror = function () {
                        return v.processGoogleToken({}, 2);
                      };
                      e = Jf(e);
                      Rc(f, e);
                      try {
                        (a.head || a.body || a.documentElement).appendChild(f), MA.Pe();
                      } catch (g) {}
                    },
                    c = KA[1];
                  b(c);
                  '.google.com' != c && b('.google.com');
                  b = {};
                  var d = ((b.newToken = 'FBT'), b);
                  v.setTimeout(function () {
                    return v.processGoogleToken(d, 1);
                  }, 1000);
                }
              },
            },
            NA = function (a) {
              LA();
              var b = HA.googleToken[5] || 0;
              a && (0 != b || IA[3] >= z() ? MA.Wc(a) : (MA.ad().push(a), MA.qd()));
              (IA[3] >= z() && IA[2] >= z()) || MA.qd();
            },
            OA = function (a) {
              v.processGoogleToken =
                v.processGoogleToken ||
                function (b, c) {
                  var d = b;
                  d = void 0 === d ? {} : d;
                  c = void 0 === c ? 0 : c;
                  b = d.newToken || '';
                  var e = 'NT' == b,
                    f = parseInt(d.freshLifetimeSecs || '', 10),
                    g = parseInt(d.validLifetimeSecs || '', 10),
                    h = d['1p_jar'] || '';
                  d = d.pucrd || '';
                  LA();
                  1 == c ? MA.Re() : MA.Qe();
                  var k = (HA.googleToken = HA.googleToken || {}),
                    n =
                      0 == c &&
                      b &&
                      'string' === typeof b &&
                      !e &&
                      'number' === typeof f &&
                      0 < f &&
                      'number' === typeof g &&
                      0 < g &&
                      'string' === typeof h;
                  e = e && !MA.kc() && (!(IA[3] >= z()) || 'NT' == IA[1]);
                  var m = !(IA[3] >= z()) && 0 != c;
                  if (n || e || m)
                    (e = z()),
                      (f = e + 1000 * f),
                      (g = e + 1000 * g),
                      0.00001 > Math.random() &&
                        Bf(
                          v,
                          'https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=' + c
                        ),
                      (k[5] = c),
                      (k[1] = b),
                      (k[2] = f),
                      (k[3] = g),
                      (k[4] = h),
                      (k[6] = d),
                      LA();
                  if (n || !MA.kc()) {
                    c = MA.ad();
                    for (b = 0; b < c.length; b++) MA.Wc(c[b]);
                    c.length = 0;
                  }
                };
              NA(a);
            };
          var PA = function (a, b) {
            b = void 0 === b ? 500 : b;
            H.call(this);
            this.h = a;
            this.g = null;
            this.o = {};
            this.A = 0;
            this.B = b;
            this.l = null;
          };
          t(PA, H);
          PA.prototype.O = function () {
            this.o = {};
            this.l && (Ee(this.h, 'message', this.l), delete this.l);
            delete this.o;
            delete this.h;
            delete this.g;
            H.prototype.O.call(this);
          };
          var RA = function (a) {
              return 'function' === typeof a.h.__uspapi || null != QA(a);
            },
            TA = function (a, b) {
              var c = {};
              if (RA(a)) {
                var d = zb(function () {
                  return b(c);
                });
                SA(a, function (e, f) {
                  f && (c = e);
                  d();
                });
                setTimeout(d, a.B);
              } else b(c);
            },
            SA = function (a, b) {
              if ('function' === typeof a.h.__uspapi) (a = a.h.__uspapi), a('getUSPData', 1, b);
              else if (QA(a)) {
                UA(a);
                var c = ++a.A;
                a.o[c] = b;
                a.g &&
                  ((b = {}),
                  a.g.postMessage(
                    ((b.__uspapiCall = { command: 'getUSPData', version: 1, callId: c }), b),
                    '*'
                  ));
              }
            },
            QA = function (a) {
              if (a.g) return a.g;
              a.g = qf(a.h, '__uspapiLocator');
              return a.g;
            },
            UA = function (a) {
              a.l ||
                ((a.l = function (b) {
                  try {
                    var c;
                    'string' === typeof b.data ? (c = JSON.parse(b.data)) : (c = b.data);
                    var d = c.__uspapiReturn;
                    a.o[d.callId](d.returnValue, d.success);
                  } catch (e) {}
                }),
                De(a.h, 'message', a.l));
            };
          (function () {
            if (
              !Eb(function (e) {
                return e.match(G().location.href);
              })
            ) {
              for (var a = Oe(), b = null, c = null, d = 0; d < a.length; d++)
                if (
                  ((c = a[d]),
                  Eb(function (e) {
                    return e.match(c.src);
                  }))
                ) {
                  b = c;
                  break;
                }
              if (null == b)
                throw Error(
                  'IMA SDK is either not loaded from a google domain or is not a supported version.'
                );
            }
          })();
          var VA = function (a) {
            N.call(this);
            this.A = new CA();
            this.g = a;
            this.D = new Map();
            this.o = this.g.J;
            this.G = new mt(this);
            this.I = new kw(window);
            this.K = new PA(window);
            0 != W.g ? ((this.h = new Kx()), vf(this, this.h)) : (this.h = Mx());
            Fw() && (this.h.init(Lz(this.o)), (this.B = Rx(this.h, this.g.G)));
          };
          t(VA, N);
          VA.prototype.O = function () {
            this.G.V();
            var a = this.B;
            this.h.A.delete(a);
            0 != W.g && (iq.C().A[a] = null);
            N.prototype.O.call(this);
          };
          VA.prototype.destroy = function () {
            this.V();
          };
          VA.prototype.getVersion = function () {
            return 'h.3.426.0';
          };
          VA.prototype.requestAds = function (a, b) {
            var c = this,
              d = [],
              e = null,
              f = this.I.tb();
            f &&
              d.push(
                new Promise(function (h) {
                  ow(c.I, function (k) {
                    e = k;
                    h();
                  });
                })
              );
            var g = null;
            RA(this.K) &&
              d.push(
                new Promise(function (h) {
                  TA(c.K, function (k) {
                    g = k;
                    h();
                  });
                })
              );
            Promise.all(d).then(function () {
              WA(c, a, b, { Jc: e, Mc: g, tb: f });
            });
          };
          var WA = function (a, b, c, d) {
            var e = b.adTagUrl;
            e &&
              Cx.C().report(8, {
                adtagurl: e,
                customPlayback: Yz(a.g),
                customClick: null != a.g.H,
              });
            var f = 'goog_' + Xc++;
            a.D.set(f, c || null);
            var g = (c = d.Jc) ? pw(c) : !1,
              h = XA({ adTagUrl: e, Ve: g, tb: d.tb, fd: !1, Jc: c, Mc: d.Mc }),
              k = function () {
                var n = {};
                n = ((n.limaExperimentIds = bh().sort().join(',')), n);
                var m = a.getSettings(),
                  u = 0 != W.g ? iq.C().l : a.h.B;
                u = void 0 === u ? null : u;
                var p = {};
                null != u && (p.activeViewPushUpdates = u);
                p.activityMonitorMode = m.g;
                p.adsToken = m.H;
                p.autoPlayAdBreaks = m.isAutoPlayAdBreaks();
                p.companionBackfill = m.getCompanionBackfill();
                p.cookiesEnabled = m.h;
                p.disableCustomPlaybackForIOS10Plus = m.getDisableCustomPlaybackForIOS10Plus();
                p.engagementDetection = !0;
                p.isFunctionalTest = !1;
                p.isVpaidAdapter = m.vb();
                p['1pJar'] = m.I;
                p.numRedirects = m.getNumRedirects();
                p.pageCorrelator = m.M;
                p.persistentStateCorrelator = ag();
                p.playerType = m.getPlayerType();
                p.playerVersion = m.getPlayerVersion();
                p.ppid = m.getPpid();
                p.privacyControls = m.U;
                p.reportMediaRequests = !1;
                p.sessionId = m.X;
                p.streamCorrelator = m.W;
                p.testingConfig = iw(m).g;
                p.unloadAbandonPingEnabled = !0;
                p.urlSignals = m.$;
                p.vpaidMode = m.getVpaidMode();
                u = b.adTagUrl;
                m = {};
                m.contentMediaUrl = a.g.K;
                m.customClickTrackingProvided = null != a.g.H;
                a: {
                  var w = Lj();
                  w = r(w);
                  for (var x = w.next(); !x.done; x = w.next())
                    if (((x = x.value), x.url && x.url.includes('amp=1'))) {
                      w = !0;
                      break a;
                    }
                  w =
                    null != window.context
                      ? 0 < parseInt(window.context.ampcontextVersion, 10)
                      : null != Oj().l;
                }
                m.isAmp = w;
                a: {
                  try {
                    var B = window.top.location.href;
                  } catch (ZA) {
                    B = 2;
                    break a;
                  }
                  B = null == B ? 2 : B == window.document.location.href ? 0 : 1;
                }
                m.iframeState = B;
                m.imaHostingDomain = window.document.domain;
                if (Vl()) B = window.location.href;
                else {
                  x = Oj();
                  B = x.h;
                  w = x.g;
                  x = x.l;
                  var la = null;
                  x && (la = AA(x.url));
                  B = la ? la : B && B.url ? B.url : w && w.url ? w.url : '';
                }
                m.location = B;
                m.referrer = window.document.referrer;
                m.domLoadTime = a.o.L;
                m.sdkImplLoadTime = a.o.M;
                m.supportsResizing = !Yz(a.g);
                B = G().location.ancestorOrigins;
                m.topOrigin = B
                  ? 0 < B.length && 200 > B[B.length - 1].length
                    ? B[B.length - 1]
                    : ''
                  : null;
                m.osdId = a.B;
                m.usesCustomVideoPlayback = Yz(a.g);
                m.usesInlinePlayback = a.g.D;
                w = a.g.I;
                B = [];
                la = x = '';
                if (null != w) {
                  x = w;
                  la = !0;
                  la = void 0 === la ? !1 : la;
                  for (var lc = [], qd = 0; x && 25 > qd; ++qd) {
                    var xh = '';
                    (void 0 !== la && la) ||
                      (xh = (xh = 9 !== x.nodeType && x.id) ? '/' + xh : '');
                    a: {
                      if (x && x.nodeName && x.parentElement) {
                        var yh = x.nodeName.toString().toLowerCase();
                        for (
                          var As = x.parentElement.childNodes, Bs = 0, rl = 0;
                          rl < As.length;
                          ++rl
                        ) {
                          var sl = As[rl];
                          if (sl.nodeName && sl.nodeName.toString().toLowerCase() === yh) {
                            if (x === sl) {
                              yh = '.' + Bs;
                              break a;
                            }
                            ++Bs;
                          }
                        }
                      }
                      yh = '';
                    }
                    lc.push((x.nodeName && x.nodeName.toString().toLowerCase()) + xh + yh);
                    x = x.parentElement;
                  }
                  x = lc.join();
                  if (w) {
                    w = ((w = w.ownerDocument) && (w.defaultView || w.parentWindow)) || null;
                    la = [];
                    if (w)
                      try {
                        var L = w.parent;
                        for (lc = 0; L && L !== w && 25 > lc; ++lc) {
                          var nb = L.frames;
                          for (qd = 0; qd < nb.length; ++qd)
                            if (w === nb[qd]) {
                              la.push(qd);
                              break;
                            }
                          w = L;
                          L = w.parent;
                        }
                      } catch (ZA) {}
                    la = la.join();
                  } else la = '';
                }
                B.push(x, la);
                if (null != u) {
                  for (L = 0; L < hs.length - 1; ++L) B.push(gf(u, hs[L]) || '');
                  L = gf(u, 'videoad_start_delay');
                  nb = '';
                  L &&
                    ((L = parseInt(L, 10)),
                    (nb = 0 > L ? 'postroll' : 0 == L ? 'preroll' : 'midroll'));
                  B.push(nb);
                } else for (L = 0; L < hs.length; ++L) B.push('');
                L = B.join(':');
                nb = L.length;
                if (0 == nb) L = 0;
                else {
                  u = 305419896;
                  for (B = 0; B < nb; B++)
                    u ^= ((u << 5) + (u >> 2) + L.charCodeAt(B)) & 4294967295;
                  L = 0 < u ? u : 4294967296 + u;
                }
                m = ((m.videoAdKey = L.toString()), m);
                L = {};
                n =
                  ((L.consentSettings = h),
                  (L.imalibExperiments = n),
                  (L.settings = p),
                  (L.videoEnvironment = m),
                  L);
                p = {};
                p.adsResponse = b.adsResponse;
                p.videoPlayActivation = b.videoPlayActivation;
                p.videoPlayMuted = b.videoPlayMuted;
                p.videoContinuousPlay = b.videoContinuousPlay;
                p.adTagUrl = b.adTagUrl;
                p.contentDuration = b.contentDuration;
                p.contentKeywords = b.contentKeywords;
                p.contentTitle = b.contentTitle;
                p.linearAdSlotWidth = b.linearAdSlotWidth;
                p.linearAdSlotHeight = b.linearAdSlotHeight;
                p.nonLinearAdSlotWidth = b.nonLinearAdSlotWidth;
                p.nonLinearAdSlotHeight = b.nonLinearAdSlotHeight;
                p.forceNonLinearFullSlot = b.forceNonLinearFullSlot;
                p.liveStreamPrefetchSeconds = b.liveStreamPrefetchSeconds;
                p.vastLoadTimeout = b.vastLoadTimeout;
                p.omidAccessModeRules = b.omidAccessModeRules;
                Object.assign(n, p);
                if (W.h) {
                  p = new sf();
                  he(p, 5, g || !0);
                  m = a.A;
                  if (0 === m.h) {
                    if (BA('__gads', p, m.g.document)) L = !0;
                    else if (
                      ((L = m.g.document),
                      (L = void 0 === L ? document : L),
                      de(p, 5) && new te(L).set('GoogleAdServingTest', 'Good', void 0),
                      (L = 'Good' === BA('GoogleAdServingTest', p, m.g.document)))
                    )
                      (nb = m.g.document),
                        (nb = void 0 === nb ? document : nb),
                        de(p, 5) && new te(nb).remove('GoogleAdServingTest');
                    m.h = L ? 2 : 1;
                  }
                  n.isBrowserCookieEnabled = 2 === m.h;
                  p = BA('__gads', p, a.A.g.document);
                  null !== p && (n.gfpCookieValue = p);
                }
                p = Lz(a.o, f);
                a.G.T(p, 'adsLoader', a.L);
                Vw(p, 'adsLoader', 'requestAds', n);
              };
            d = vw(e, h || {});
            YA('1' == ww(d, 'ltd') ? !0 : Yg(Xh) || Yg(Yh) ? !xw(d) : !1)
              ? $A().then(function () {
                  k();
                })
              : k();
          };
          VA.prototype.getSettings = function () {
            return W;
          };
          VA.prototype.contentComplete = function () {
            Vw(Lz(this.o), 'adsLoader', 'contentComplete');
          };
          var YA = function (a) {
            return a ? !1 : !Wl();
          };
          VA.prototype.L = function (a) {
            var b = a.ka;
            switch (b) {
              case 'adsLoaded':
                b = a.na;
                a = a.Rb;
                b = new Z(
                  this.h,
                  this.g,
                  b.adTagUrl || '',
                  b.adCuePoints,
                  this.B,
                  b.isCustomClickTrackingAllowed,
                  Lz(this.o, a)
                );
                this.dispatchEvent(new xA(b, aB(this, a)));
                break;
              case 'error':
                b = a.na;
                this.dispatchEvent(new bA(new $z(b), aB(this, a.Rb)));
                a = { error: b.errorCode, vis: qg(document) };
                Cx.C().report(7, a);
                break;
              case 'gfpCookieAvailable':
                var c = a.na;
                if (null == c || !W.h) break;
                b = new sf();
                he(b, 5, c.storageAllowed);
                a = this.A;
                c = ne(Ij, c.gfpCookie);
                var d = {
                    gd: E(c, 2) - a.g.Date.now() / 1000,
                    path: E(c, 3),
                    domain: E(c, 4),
                    Te: !1,
                  },
                  e = E(c, 1),
                  f = a.g.document;
                f = void 0 === f ? document : f;
                de(b, 5) && new te(f).set('__gads', e, d);
                de(b, 5) &&
                  0.01 > a.g.Math.random() &&
                  ((b = BA('__gads', b, a.g.document)),
                  Df({
                    domain: E(c, 4),
                    host: a.g.location.host,
                    success: b === E(c, 1) ? '1' : '0',
                  }));
                break;
              case 'trackingUrlPinged':
                this.dispatchEvent(new dA(b, null, a.na));
            }
          };
          var aB = function (a, b) {
              var c = a.D.get(b);
              a.D.delete(b);
              return c;
            },
            XA = function (a) {
              var b;
              if ((b = a.adTagUrl)) {
                var c = /iu=\/(\d+)\//.exec(Sc(b));
                (c = c && 2 == c.length ? c[1] : null) ||
                  ((b = Wc(new Q(b).l.get('client'))), (c = ec(b) ? null : b));
                b = c;
              } else b = null;
              b = b || '';
              c = rf(b);
              0 != c
                ? (b = c)
                : ((c = v.top),
                  (b = pf(c, 'googlefcInactive')
                    ? 4
                    : b && pf(c, 'googlefcPA-' + b)
                    ? 2
                    : pf(c, 'googlefcNPA')
                    ? 3
                    : 0));
              c = pf(v.top, 'googlefcLoaded');
              var d = a.Jc,
                e = a.Mc,
                f = {};
              return (
                (f.gfcPresent = (!!v.googlefc || pf(v.top, 'googlefcPresent')) && 4 != b),
                (f.gfcLoaded = c),
                (f.gfcUserConsent = b),
                (f.isGdprLoader = a.fd),
                (f.isCmpAvailable = a.tb),
                (f.storageAllowed = a.Ve),
                (f.addtlConsent = d ? d.addtlConsent : null),
                (f.gdprApplies = d ? d.gdprApplies : null),
                (f.tcString = d ? d.tcString : null),
                (f.uspString = e ? e.uspString : null),
                f
              );
            },
            $A = function () {
              return new Promise(function (a) {
                OA(function () {
                  LA();
                  W.H = IA[1] || '';
                  LA();
                  W.U = IA[6] || '';
                  LA();
                  W.I = IA[4] || '';
                  a();
                });
              });
            };
          VA.prototype.contentComplete = VA.prototype.contentComplete;
          VA.prototype.getSettings = VA.prototype.getSettings;
          VA.prototype.requestAds = VA.prototype.requestAds;
          VA.prototype.getVersion = VA.prototype.getVersion;
          VA.prototype.destroy = VA.prototype.destroy;
          y('google.ima.AdCuePoints', cz, window);
          y('google.ima.AdDisplayContainer', Zz, window);
          y(
            'google.ima.AdError.ErrorCode',
            {
              DEPRECATED_ERROR_CODE: -1,
              VAST_MALFORMED_RESPONSE: 100,
              VAST_SCHEMA_VALIDATION_ERROR: 101,
              VAST_UNSUPPORTED_VERSION: 102,
              VAST_TRAFFICKING_ERROR: 200,
              VAST_UNEXPECTED_LINEARITY: 201,
              VAST_UNEXPECTED_DURATION_ERROR: 202,
              VAST_WRAPPER_ERROR: 300,
              VAST_LOAD_TIMEOUT: 301,
              VAST_TOO_MANY_REDIRECTS: 302,
              VAST_NO_ADS_AFTER_WRAPPER: 303,
              VIDEO_PLAY_ERROR: 400,
              VAST_MEDIA_LOAD_TIMEOUT: 402,
              VAST_LINEAR_ASSET_MISMATCH: 403,
              VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
              OVERLAY_AD_PLAYING_FAILED: 500,
              NONLINEAR_DIMENSIONS_ERROR: 501,
              sg: 502,
              Og: 503,
              wf: 602,
              rf: 603,
              UNKNOWN_ERROR: 900,
              VPAID_ERROR: 901,
              FAILED_TO_REQUEST_ADS: 1005,
              VAST_ASSET_NOT_FOUND: 1007,
              VAST_EMPTY_RESPONSE: 1009,
              UNKNOWN_AD_RESPONSE: 1010,
              UNSUPPORTED_LOCALE: 1011,
              ADS_REQUEST_NETWORK_ERROR: 1012,
              INVALID_AD_TAG: 1013,
              STREAM_INITIALIZATION_FAILED: 1020,
              ASSET_FALLBACK_FAILED: 1021,
              INVALID_ARGUMENTS: 1101,
              lg: 1204,
              AUTOPLAY_DISALLOWED: 1205,
              CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
              Eg: 2002,
            },
            window
          );
          y('google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED', -1, window);
          y('google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED', -1, window);
          y('google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR', -1, window);
          y('google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE', -1, window);
          y('google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED', -1, window);
          y('google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE', -1, window);
          y('google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED', -1, window);
          y('google.ima.AdError.Type', aA, window);
          y('google.ima.AdErrorEvent.Type', cA, window);
          y('google.ima.AdEvent.Type', eA, window);
          y('google.ima.AdsLoader', VA, window);
          y('google.ima.AdsManagerLoadedEvent.Type', yA, window);
          y('google.ima.CompanionAdSelectionSettings', Gw, window);
          y('google.ima.CompanionAdSelectionSettings.CreativeType', Hw, void 0);
          y('google.ima.CompanionAdSelectionSettings.ResourceType', Iw, void 0);
          y('google.ima.CompanionAdSelectionSettings.SizeCriteria', Jw, void 0);
          y(
            'google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED',
            'deprecated-event',
            window
          );
          y('ima.ImaSdkSettings', V, window);
          y('google.ima.settings', W, window);
          y(
            'google.ima.ImaSdkSettings.CompanionBackfillMode',
            { ALWAYS: 'always', ON_MASTER_AD: 'on_master_ad' },
            void 0
          );
          y(
            'google.ima.ImaSdkSettings.VpaidMode',
            { DISABLED: 0, ENABLED: 1, INSECURE: 2 },
            void 0
          );
          y('google.ima.AdsRenderingSettings', Xx, window);
          y('google.ima.AdsRenderingSettings.AUTO_SCALE', -1, window);
          y('google.ima.AdsRequest', zA, window);
          y('google.ima.VERSION', '3.426.0', void 0);
          y(
            'google.ima.OmidAccessMode',
            { LIMITED: 'limited', DOMAIN: 'domain', FULL: 'full' },
            void 0
          );
          y(
            'google.ima.UiElements',
            { AD_ATTRIBUTION: 'adAttribution', COUNTDOWN: 'countdown' },
            void 0
          );
          y('google.ima.ViewMode', { NORMAL: 'normal', FULLSCREEN: 'fullscreen' }, void 0);
        }.apply(this, arguments);
      } finally {
        if ($___old_af90419613bcd872)
          ({}.constructor.defineProperty(
            Navigator.prototype,
            'userAgent',
            $___old_af90419613bcd872
          ));
        if ($___old_e75f719af11f61a6)
          ({}.constructor.defineProperty(window, 'performance', $___old_e75f719af11f61a6));
      }
    })();
  })();
}
