{
  const $___stub_7b3e42788f2718a1 = {};
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
  })($___stub_7b3e42788f2718a1);
  const $___stub_12e4a56044062aff = {};
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
  })($___stub_12e4a56044062aff);
  const $___stub_b151ea89d2a17b2f = {};
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
  })($___stub_b151ea89d2a17b2f);
  (function () {
    !(function () {
      'use strict';
      function a (a) {
        return t(a, [f, g, h]);
      }
      var b = '1.1.126',
        c = (function () {
          return {
            host: function () {
              return location.host;
            },
            hostname: function () {
              return location.hostname;
            },
            href: function () {
              return location.href;
            },
          };
        })(),
        d = (function () {
          return {
            referrer: function () {
              return document.referrer;
            },
          };
        })(),
        e = function () {
          window.console && window.IWADebuggingOn && console.log.apply(console, arguments);
        },
        f = 'user',
        g = 'visit',
        h = 'page',
        i = {
          PARAM_BLOCK: 'iwa_block',
          PARAM_ITEM: 'iwa_item',
          PARAM_HASH: 'iwa_hash',
          PARAM_IMG: 'iwa_img',
          PARAM_SOURCE: 'iwa_source',
          PARAM_TESTAB: 'iwa_testab',
          PARAM_IS_AD: 'iwa_is_ad',
          PARAM_DISABLED: 'iwa_disabled',
          PARAM_URL: 'iwa_url',
        },
        j = 0,
        k = {
          ATTR_BLOCK: 'data-iwa-block',
          ATTR_ITEM: 'data-iwa-item',
          ATTR_HASH: 'data-iwa-hash',
          ATTR_IMG: 'data-iwa-img',
          ATTR_TESTAB: 'data-iwa-testab',
          ATTR_DISABLED: 'data-iwa-disabled',
          ATTR_IS_SPONSORED: 'data-iwa-is-sponsored',
          ATTR_IS_AD: 'data-iwa-is-ad',
        },
        l =
          (i.PARAM_BLOCK,
          i.PARAM_ITEM,
          i.PARAM_HASH,
          i.PARAM_IMG,
          i.PARAM_TESTAB,
          i.PARAM_IS_AD,
          [
            i.PARAM_BLOCK,
            i.PARAM_ITEM,
            i.PARAM_HASH,
            i.PARAM_IMG,
            i.PARAM_TESTAB,
            i.PARAM_SOURCE,
          ]),
        m = function (a) {
          return void 0 !== a;
        },
        n = function (a) {
          return 'function' == typeof a;
        },
        o = function (a) {
          return null === a;
        },
        p = function (a) {
          return m(a) && '[object Object]' === Object.prototype.toString.call(a);
        },
        q = function (a) {
          return '[object Array]' === Object.prototype.toString.call(a);
        },
        r = function (a) {
          return 'string' == typeof a || a instanceof String;
        },
        s = function (a) {
          return 'number' == typeof a;
        },
        t = function (a, b) {
          if (!m(a) || !q(b)) return !1;
          for (var c in b) if (b[c] === a) return !0;
          return !1;
        },
        u = function (a, b) {
          if ((!q(a) && !p(a)) || !n(b)) return !1;
          for (var c in a) a.hasOwnProperty(c) && b(c, a[c]);
        },
        v = function (a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = function (a, b) {
              return (a << b) | (a >>> (32 - b));
            },
            l = function (a) {
              var b,
                c,
                d = '';
              for (b = 7; b >= 0; b--) (c = (a >>> (4 * b)) & 15), (d += c.toString(16));
              return d;
            },
            m = new Array(80),
            n = 1732584193,
            o = 4023233417,
            p = 2562383102,
            q = 271733878,
            r = 3285377520;
          a = unescape(encodeURIComponent(a));
          var s = a.length,
            t = [];
          for (c = 0; c < s - 3; c += 4)
            (d =
              (a.charCodeAt(c) << 24) |
              (a.charCodeAt(c + 1) << 16) |
              (a.charCodeAt(c + 2) << 8) |
              a.charCodeAt(c + 3)),
              t.push(d);
          switch (s % 4) {
            case 0:
              c = 2147483648;
              break;
            case 1:
              c = (a.charCodeAt(s - 1) << 24) | 8388608;
              break;
            case 2:
              c = (a.charCodeAt(s - 2) << 24) | (a.charCodeAt(s - 1) << 16) | 32768;
              break;
            case 3:
              c =
                (a.charCodeAt(s - 3) << 24) |
                (a.charCodeAt(s - 2) << 16) |
                (a.charCodeAt(s - 1) << 8) |
                128;
          }
          for (t.push(c); t.length % 16 != 14; ) t.push(0);
          for (t.push(s >>> 29), t.push((s << 3) & 4294967295), b = 0; b < t.length; b += 16) {
            for (c = 0; c < 16; c++) m[c] = t[b + c];
            for (c = 16; c <= 79; c++) m[c] = k(m[c - 3] ^ m[c - 8] ^ m[c - 14] ^ m[c - 16], 1);
            for (e = n, f = o, g = p, h = q, i = r, c = 0; c <= 19; c++)
              (j = (k(e, 5) + ((f & g) | (~f & h)) + i + m[c] + 1518500249) & 4294967295),
                (i = h),
                (h = g),
                (g = k(f, 30)),
                (f = e),
                (e = j);
            for (c = 20; c <= 39; c++)
              (j = (k(e, 5) + (f ^ g ^ h) + i + m[c] + 1859775393) & 4294967295),
                (i = h),
                (h = g),
                (g = k(f, 30)),
                (f = e),
                (e = j);
            for (c = 40; c <= 59; c++)
              (j = (k(e, 5) + ((f & g) | (f & h) | (g & h)) + i + m[c] + 2400959708) & 4294967295),
                (i = h),
                (h = g),
                (g = k(f, 30)),
                (f = e),
                (e = j);
            for (c = 60; c <= 79; c++)
              (j = (k(e, 5) + (f ^ g ^ h) + i + m[c] + 3395469782) & 4294967295),
                (i = h),
                (h = g),
                (g = k(f, 30)),
                (f = e),
                (e = j);
            (n = (n + e) & 4294967295),
              (o = (o + f) & 4294967295),
              (p = (p + g) & 4294967295),
              (q = (q + h) & 4294967295),
              (r = (r + i) & 4294967295);
          }
          return (j = l(n) + l(o) + l(p) + l(q) + l(r)), j.toLowerCase();
        },
        w = function (a) {
          function b () {
            'complete' !== d.readyState || c || ((c = !0), a());
          }
          var c = !1,
            d = document,
            e = window;
          b(),
            c ||
              (d.addEventListener
                ? (d.addEventListener(
                    'DOMContentLoaded',
                    function () {
                      (c = !0), a();
                    },
                    !1
                  ),
                  e.addEventListener(
                    'load',
                    function () {
                      c || a();
                    },
                    !1
                  ))
                : d.attachEvent('onreadystatechange', b));
        },
        x = function (a, b, c) {
          if (!m(a) || !m(b)) return !1;
          var d = b;
          if (m(a.addEventListener)) a.addEventListener(d, c, !1);
          else {
            if (!m(a.attachEvent)) return !1;
            (d = 'on' + b),
              a.attachEvent(d, function () {
                var a = window.event;
                return (a.target = a.srcElement), c(a);
              });
          }
          return !0;
        },
        y = function () {
          return d.referrer();
        },
        z = function (a) {
          var b = this,
            c = 0,
            d = [],
            e = null,
            f = a;
          (this.getTracker = function () {
            return f;
          }),
            (this.resolve = function (a) {
              d.length > 0
                ? ++c == d.length && this.promise().resolve(a)
                : this.promise().resolve(a);
            }),
            (this.reject = function (a) {
              this.promise().fail(a);
            }),
            (this.when = function (a) {
              return (
                q(a)
                  ? ((c = 0),
                    u(a, function (a, b) {
                      d.push(b);
                    }))
                  : n(a) && d.push(a),
                this.promise()
              );
            }),
            (this.promise = function () {
              return null == e && (e = new A(b)), e;
            }),
            (this.run = function () {
              if (d.length > 0)
                try {
                  u(d, function (a, c) {
                    c(b);
                  });
                } catch (a) {
                  this.promise().fail(a);
                }
              else this.promise().resolve();
            }),
            this.promise();
        },
        A = function (a) {
          var b, c, d;
          (this.then = function (a, e) {
            return (c = a), (d = e), (b = new z()), b.promise();
          }),
            (this.resolve = function (a) {
              'function' == typeof c && c(b, a);
            }),
            (this.fail = function (a) {
              'function' == typeof d ? d(a) : b && b.reject(a);
            }),
            (this.done = function (a) {
              return (c = a), this;
            }),
            (this.error = function (a) {
              return (d = a), this;
            });
        },
        B = function (b) {
          function c (a, b, c) {
            var d = this;
            (this.name = a),
              (this.scope = c),
              q(b)
                ? ((this.value = new Array()),
                  u(b, function (a, b) {
                    q(b) || d.value.push(b);
                  }))
                : (this.value = b);
          }
          var d = {},
            e = function (a, b, e) {
              return (d[a] = new c(a, b, e)), !0;
            };
          (this.set = function (c, d, f) {
            return (
              !(m(f) && !a(f)) &&
              !!(r(c) && m(f) && (r(d) || s(d) || q(d))) &&
              ((c = r(c) ? c : String(c)),
              (c = c.slice(0, b.customVariableMaxLength)),
              (!q(d) || 0 !== d.length) &&
                ((d = r(d) ? d.slice(0, b.customVariableMaxLength) : d), e(c, d, f)))
            );
          }),
            (this.del = function (a, b) {
              m(d[a]) && d[a].scope === b && delete d[a];
            }),
            (this.getBy = function (a) {
              m(a) || (a = [f, g, h]);
              var b = [];
              for (var c in d) {
                var e = d[c];
                d.hasOwnProperty(c) && !n(e) && t(e.scope, a) && b.push(e);
              }
              return b;
            }),
            (this.get = function (a, b) {
              if (m(d[a])) {
                if (m(b)) {
                  if (d[a].scope === b) return d[a];
                  return;
                }
                return d[a];
              }
            }),
            (this.serialize = function (a, c) {
              var e = [];
              return (
                m(a) || (a = [f, g, h]),
                u(d, function (d, f) {
                  if (t(f.scope, a) && (!q(c) || t(f.name, c)))
                    if (q(f.value)) {
                      var g = [];
                      u(f.value, function (a, b) {
                        g.push(encodeURIComponent(b));
                      }),
                        e.push(
                          encodeURIComponent(f.name) +
                            '=' +
                            g.join(b.customVarArrayElementSeparator)
                        );
                    } else e.push(encodeURIComponent(f.name) + '=' + encodeURIComponent(f.value));
                }),
                e.join(b.customVariableSeparator)
              );
            }),
            (this.importData = function (a, c) {
              if (!o(a) && m(a)) {
                var d,
                  f,
                  g,
                  h = a.split(b.customVariableSeparator);
                u(h, function (a, h) {
                  (d = h.split('=')),
                    (g = d[1].split(b.customVarArrayElementSeparator)),
                    q(g) && g.length > 1
                      ? u(g, function (a, b) {
                          g[a] = decodeURIComponent(b);
                        })
                      : (g = decodeURIComponent(d[1])),
                    (f = d[0]),
                    e(decodeURIComponent(f), g, c);
                });
              }
            });
        },
        C = function () {
          (this.get = function () {
            return null;
          }),
            (this.set = function () {}),
            (this.remove = function () {});
        },
        D = function () {
          (this.get = function (a) {
            for (var b = a + '=', c = document.cookie.split(';'), d = 0; d < c.length; d++) {
              for (var e = c[d]; ' ' == e.charAt(0); ) e = e.substring(1, e.length);
              if (0 === e.indexOf(b)) return decodeURIComponent(e.substring(b.length, e.length));
            }
            return null;
          }),
            (this.set = function (a, b, c, d, f, g) {
              var h, i, j, k;
              if (c) {
                var l = new Date();
                l.setTime(l.getTime() + 1000 * c), (h = ' expires=' + l.toUTCString() + ';');
              } else h = '';
              (a = encodeURIComponent(a)),
                (b = encodeURIComponent(b)),
                (j = d ? ' domain=' + d + ';' : ''),
                (i = f ? ' path=' + f + ';' : ''),
                (k = g ? g + ';' : ''),
                -1 === a.indexOf('testCookie') &&
                  e('set cookie:\t\t', a + '=' + b + '; ' + h + j + i + k),
                (document.cookie = a + '=' + b + ';' + h + j + i + k);
            }),
            (this.remove = function (a, b, c, d) {
              var e = b || '',
                f = c || '/',
                g = d || '';
              this.set(a, '', -1, e, f, g);
            });
        },
        E = function () {
          this.send = function (a, b, c, d) {
            var f = '',
              g = '',
              h = isNaN(parseInt(b, 10)) ? '' : '/' + parseInt(b, 10),
              i = c || 'iwa.hit.interia.pl',
              j = d ? '/' + d : '/hit.t';
            if ('undefined' !== a) {
              e('request params: ', a), (g = '?');
              for (var k in a) g += k + '=' + encodeURIComponent(a[k]) + '&';
              g = g.substring(0, g.length - 1);
            }
            (f = '//' + i + h + j + g + '&mt=' + new Date().getTime()),
              e('sending request: ' + f),
              (new Image().src = f);
          };
        },
        F = function () {
          var a = {},
            b = {},
            c = {},
            d = null,
            e = 0,
            f = 0,
            g = {},
            h = {
              getPlugin: function (b) {
                return m(a[b]) ? a[b] : void 0;
              },
              load: function (b, c) {
                if (m(c) && p(c) && n(c.init)) {
                  var d = this.getConfig(b);
                  (a[b] = c), this.init(b, c, d);
                }
              },
              register: function (b, d) {
                m(b) && m(d) && ((c[b] = d), e++, this.init(b, a[b], c[b]));
              },
              inner: function (a, c) {
                r(a) && p(c) && (b[a] = c);
              },
              init: function (a, b, c) {
                m(a) && m(b) && m(c) && (b.init(d, c), f++, l());
              },
              getConfig: function (a) {
                if (m(c[a])) return c[a];
              },
            },
            i = function (a) {
              return n(h[a]);
            },
            j = function () {
              return e == f && 0 !== e;
            },
            k = function (b) {
              return !(!m(h.getConfig(b)) || !p(a[b]));
            },
            l = function () {
              if (j() || 0 === e) {
                var b = !1;
                if (
                  (u(g, function (a, c) {
                    (b = !0), n(c) && (c(a), delete g[a]);
                  }),
                  !b)
                ) {
                  var c = [],
                    f = [];
                  u(a, function (a, b) {
                    k(a) && (n(b.complete) && c.push(b.complete), n(b.unload) && f.push(b.unload));
                  }),
                    c.length > 0 && d.complete(c),
                    f.length > 0 && d.unload(f);
                }
              }
            };
          (this.plugin = function (a, b, c) {
            i(a) && h[a].call(h, b, c);
          }),
            (this.onPluginsLoaded = function (a, b) {
              m(g[a]) || (g[a] = b), l();
            }),
            (this.setTracker = function (a) {
              (d = a), o(a);
            }),
            (this.getCallbacks = function (b) {
              switch (b) {
                case 'complete':
                  var c = [];
                  return (
                    u(a, function (a, b) {
                      n(b.complete) && k(b.name) && c.push(b.complete);
                    }),
                    c
                  );
                case 'unload':
                  var c = [];
                  return (
                    u(a, function (a, b) {
                      n(b.unload) && k(b.name) && c.push(b.unload);
                    }),
                    c
                  );
              }
            });
          var o = function (a) {
            u(b, function (b, c) {
              p(c) && n(c.pageview) && c.pageview(a);
            });
          };
        },
        G = function (a, b) {
          var c = a,
            d = b,
            f = 'default',
            g = function (a) {
              var b = c.getAll();
              u(b, function (b, c) {
                c && a(c);
              });
            },
            h = function (a, b) {
              var d = f;
              -1 !== a.indexOf('.') &&
                ((d = a.substring(0, a.indexOf('.'))), (a = a.substring(a.indexOf('.') + 1)));
              var e = c.getByName(d);
              if (e && r(a) && n(e[a])) return e[a].apply(e[d], b);
            },
            i = function (a) {
              return 'function' == typeof c[a];
            },
            j = function (a) {
              return 'function' == typeof d[a];
            };
          this.execute = function () {
            if ('function' == typeof arguments[0][0]) g(arguments[0][0]);
            else {
              var a = Array.prototype.slice.call(arguments[0]);
              if (0 === a.length) return;
              var b = a.shift(),
                k = a;
              if (i(b)) {
                e('\nCREATING TRACKER: ', k),
                  'create' == b && m(k) && k[1] && m(k[1].name) && (f = k[1].name);
                var l = c[b].apply(c, k);
                return d.setTracker(c.getByName(f)), l;
              }
              if (j(b)) return d[b].apply(d, k);
              switch (b) {
                case 'unload':
                case 'complete':
                  d.onPluginsLoaded(b, function (a) {
                    return (k[0] = k[0].concat(d.getCallbacks(a))), h(a, k);
                  });
                  break;
                default:
                  return h(b, k);
              }
            }
          };
        },
        H = function () {
          var a,
            b,
            c = {},
            d = { create: [] },
            e = function (a) {
              return 'object' == typeof c[a];
            },
            f = function () {
              var a = 0;
              for (var b in c) c.hasOwnProperty(b) && !n(c[b]) && a++;
              return a;
            };
          (this.attach = function (a, b) {
            m(d[a]) && b && d[a].push(b);
          }),
            (this.create = function (e, g) {
              if (((m(g) && !o(g)) || (g = {}), (g.name = g.name || 'default'), !(f() > 0)))
                return (
                  (a = new D()),
                  (b = new E()),
                  (c[g.name] = new I(e, g, a, b)),
                  u(d.create, function (a, b) {
                    b(c[g.name]);
                  }),
                  c[g.name]
                );
            }),
            (this.getByName = function (a) {
              if (e(a)) return c[a];
            }),
            (this.getAll = function () {
              return c;
            });
        },
        I = function (a, d, f, g) {
          function h () {
            var a = new Date().getTime();
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (b) {
              var c = (a + 16 * Math.random()) % 16 | 0;
              return (a = Math.floor(a / 16)), ('x' == b ? c : (7 & c) | 8).toString(16);
            });
          }
          function A () {
            var a = new Date().getTime();
            return 'xxxxxxxx'.replace(/[xy]/g, function (b) {
              var c = (a + 16 * Math.random()) % 16 | 0;
              return (a = Math.floor(a / 16)), ('x' == b ? c : (7 & c) | 8).toString(16);
            });
          }
          function E (a) {
            var b = 0;
            if (0 === a.length) return b;
            for (var c = 0; c < a.length; c++) {
              (b = (b << 5) - b + a.charCodeAt(c)), (b &= b);
            }
            return Math.abs(b);
          }
          function F (a) {
            return 'visitorDataName' === a
              ? ea.dataPrefix + '_' + ea[a]
              : ea.dataPrefix + '_' + E(ea.sessionDomain) + '_' + ea[a];
          }
          function G (a) {
            var b = a.indexOf(':');
            return -1 !== b && (a = a.slice(0, b)), a;
          }
          function H (a) {
            var b = a || c.host(),
              d = b.split('.');
            return 'www' === d[0] && d.shift(), (d = d.join('.')), G(d);
          }
          function I (a) {
            for (var b = G(a || c.host()), d = b.split('.'), e = '', g = d.length - 1; g >= 0; ) {
              if (
                ('' !== e && (e = '.' + e),
                (e = d[g] + e),
                f.set(ea.dataPrefix + '_testCookie_topDomain', 'testValue', '', e, '/'),
                'testValue' === f.get(ea.dataPrefix + '_testCookie_topDomain'))
              )
                return f.remove(ea.dataPrefix + '_testCookie_topDomain', e, '/'), e;
              g--;
            }
          }
          function J () {
            var a = 0,
              b = 0;
            return (
              'number' == typeof window.innerWidth
                ? ((a = parseInt(window.innerWidth, 10)), (b = parseInt(window.innerHeight, 10)))
                : document.documentElement &&
                  (document.documentElement.clientWidth || document.documentElement.clientHeight)
                ? ((a = parseInt(document.documentElement.clientWidth, 10)),
                  (b = parseInt(document.documentElement.clientHeight, 10)))
                : document.body &&
                  (document.body.clientWidth || document.body.clientHeight) &&
                  ((a = parseInt(document.body.clientWidth, 10)),
                  (b = parseInt(document.body.clientHeight, 10))),
              a + 'x' + b
            );
          }
          function K () {
            const $___old_2eb92b57fe3f3fd2 = {}.constructor.getOwnPropertyDescriptor(
              Navigator.prototype,
              'userAgent'
            );
            try {
              if ($___old_2eb92b57fe3f3fd2)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___stub_7b3e42788f2718a1.userAgent
                ));
              return function () {
                var a,
                  b,
                  c = {
                    pdf: 'application/pdf',
                    wma: 'application/x-mplayer2',
                    silverlight: 'application/x-silverlight',
                  };
                if (
                  ((ua.pdf = ''),
                  (ua.wma = ''),
                  (ua.silverlight = ''),
                  !new RegExp('MSIE').test(navigator.userAgent))
                ) {
                  if (navigator.mimeTypes && navigator.mimeTypes.length)
                    for (a in c)
                      Object.prototype.hasOwnProperty.call(c, a) &&
                        ((b = navigator.mimeTypes[c[a]]), (ua[a] = b && b.enabledPlugin ? 1 : 0));
                  'unknown' != typeof navigator.javaEnabled &&
                    m(navigator.javaEnabled) &&
                    navigator.javaEnabled() &&
                    (ua.java = 1);
                }
              }.apply(this, arguments);
            } finally {
              if ($___old_2eb92b57fe3f3fd2)
                ({}.constructor.defineProperty(
                  Navigator.prototype,
                  'userAgent',
                  $___old_2eb92b57fe3f3fd2
                ));
            }
          }
          function L () {
            try {
              da.setCustomVar('websocket', WebSocket ? 1 : 0, 'page');
            } catch (a) {}
            if (!navigator.cookieEnabled) return da.setCustomVar('cookies', '0', 'page'), !1;
            var a = '0',
              b = new D();
            b.set('__iwa_testCookie_Enabled', 'enabled'),
              'enabled' === b.get('__iwa_testCookie_Enabled') &&
                ((a = '1'), b.remove('__iwa_testCookie_Enabled')),
              da.setCustomVar('cookies', a, 'page');
          }
          function M () {
            try {
              try {
                var a = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
                try {
                  a.AllowScriptAccess = 'always';
                } catch (a) {
                  return '6.0.0';
                }
              } catch (a) {}
              return new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
                .GetVariable('$version')
                .replace(/\D+/g, '.')
                .match(/^.?(.+),?$/)[1];
            } catch (a) {
              try {
                if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin)
                  return (
                    navigator.plugins['Shockwave Flash 2.0'] ||
                    navigator.plugins['Shockwave Flash']
                  ).description
                    .replace(/\D+/g, '.')
                    .match(/^.?(.+),?$/)[1];
              } catch (a) {}
            }
            return '0.0.0';
          }
          function N (a, b) {
            if (!m(a) || !m(b)) return !1;
            b = b.split('#');
            for (var c = b.length - 1; c >= 0; c--) {
              1 == c && (b[c] = '#' + b[c]), (a = a.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]'));
              var d = new RegExp('[\\?&#]' + a + '=([^&#]*)'),
                e = d.exec(decodeURIComponent(b[c]));
              if (null !== e) return decodeURIComponent(e[1].replace(/\+/g, ' '));
            }
            return null;
          }
          function O (a) {
            return a.replace(/(\n|\r|\t)/gm, '');
          }
          function P (a) {
            return a.toLowerCase();
          }
          function Q (a, b) {
            if (r(a) && a.length > 0) {
              var c = document.createElement('A');
              (c.href = a),
                (a =
                  -1 === a.indexOf(c.hostname + '/') && -1 !== c.href.indexOf(c.hostname + '/')
                    ? c.href.replace(c.hostname + '/', c.hostname)
                    : c.href);
            } else a = '';
            var d = a.indexOf('#');
            if (-1 != d) {
              var e = a.slice(0, d),
                f = a.slice(d + 1),
                g = [];
              if (f && f.length > 0) {
                var h = f.split('&');
                u(h, function (a, c) {
                  var d = c.split('='),
                    e = d[0],
                    f = d[1] || !1;
                  (!b && t(e, l)) || g.push(e + (f ? '=' + f : ''));
                });
              }
              a = g.length > 0 ? e + '#' + g.join('&') : e;
            }
            return a;
          }
          function R (a, b) {
            var c = document.createElement('A'),
              d = document.createElement('A');
            (c.href = b), (d.href = a);
            var e = N('gclid', a) && -1 != b.indexOf('google.'),
              f = (N('gclsrc', a) || N('gclid', a)) && -1 != b.indexOf('doubleclick.'),
              g = N('utm_source', a),
              h = 'daum:q eniro:search_word naver:query pchome:q google.interia:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q netscape:query cnn:query about:terms mamma:q voila:rdata virgilio:qs live:q baidu:wd alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT wp:szukaj onet:qt yam:k kvasir:q ozu:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q search.centrum.cz:q 360.cn:q'.split(
                ' '
              );
            if (e || f) {
              var i;
              e ? (i = 'AdWords') : f && (i = 'DoubleClick'),
                (na = 'google'),
                (oa = i),
                (pa = 'cpc'),
                (qa = N('q', b) || '(not set)'),
                (ra = i);
            } else if (g)
              (na = N('utm_source', a) || '(not set)'),
                (oa = N('utm_campaign', a) || '(not set)'),
                (pa = N('utm_medium', a) || '(not set)'),
                (qa = N('utm_term', a) || '(not set)'),
                (ra = N('utm_content', a) || '(not set)');
            else if ('' !== b) {
              for (var j, k, l = c.hostname, m = c.pathname, n = 0; n < h.length; n++)
                if (-1 !== l.indexOf(h[n].split(':')[0])) {
                  (j = h[n].split(':')[0]), (k = h[n].split(':')[1]);
                  break;
                }
              var o = N(k, b);
              void 0 !== j && o
                ? ((na = j),
                  (oa = '(not set)'),
                  (pa = 'organic'),
                  (qa = o || '(not set)'),
                  (ra = '(not set)'))
                : r(b) && -1 != b.indexOf('www.google.')
                ? ((na = 'google'),
                  (oa = '(not set)'),
                  (pa = 'organic'),
                  (qa = o || '(not set)'),
                  (ra = '(not set)'))
                : ('/' != m[0] && (m = '/' + m),
                  (na = l),
                  (oa = '(referral)'),
                  (pa = 'referral'),
                  (qa = '(not set)'),
                  (ra = m));
            } else
              (na = '(direct)'),
                (oa = '(direct)'),
                (pa = '(none)'),
                (qa = '(not set)'),
                (ra = '(not set)');
            (na = O(na)), (oa = O(oa)), (pa = O(pa)), (qa = O(qa)), (ra = O(ra));
          }
          function S (a) {
            null !== a
              ? ((fa.visitorId = a), e('init vid:\t\t', a))
              : ((j = 1), e('init vid:\t\t', 'empty'));
          }
          function T (a) {
            if (null !== a) {
              var b = a.split('.');
              (ha = b[0]), (ia = b[1]), (ja = b[2]), (ka = b[3]), e('init sid:\t\t', b);
            } else e('init sid:\t\t', 'empty');
          }
          function U (a) {
            if (null !== a) {
              var b = a.split('.');
              (la = b[0]), (ma = b[1]), e('init tid:\t\t', b);
            } else e('init tid:\t\t', 'empty');
          }
          function V (a) {
            if (null !== a) {
              var b = a.split('|');
              (na = b[0]),
                (oa = b[1]),
                (pa = b[2]),
                (qa = b[3]),
                (ra = b[4]),
                e('init vs:\t\t', b);
            } else e('init vs:\t\t', 'empty');
          }
          function W () {
            0 === fa.visitorId && (fa.visitorId = h());
          }
          function X (a) {
            return a;
          }
          function Y () {
            0 === la && R(document.location.href, y());
          }
          function Z () {
            var a = new Date(),
              b = new Date(1000 * ja);
            a.getDay() !== b.getDay() && ((la = 0), (ma = 0)),
              0 === ha
                ? ((ha = Math.round(new Date().getTime() / 1000)),
                  (ia = Math.round(new Date().getTime() / 1000)),
                  (ja = Math.round(new Date().getTime() / 1000)),
                  (ka = 1))
                : 0 === la &&
                  ((ha = ha),
                  (ia = ja),
                  (ja = Math.round(new Date().getTime() / 1000)),
                  (ka = parseInt(ka, 10) + 1)),
              (la = Math.round(new Date().getTime() / 1000)),
              (ma = parseInt(ma, 10) + 1);
          }
          function $ () {
            f.set(F('visitorDataName'), fa.visitorId, ea.dataExpire, ga, ea.path, ea.secure),
              sa.getBy(['user']).length > 0 &&
                f.set(
                  F('userCustomVar'),
                  sa.serialize(['user']),
                  ea.dataExpire,
                  ga,
                  ea.path,
                  ea.secure
                ),
              sa.getBy(['visit']).length > 0 &&
                f.set(
                  F('visitCustomVar'),
                  sa.serialize(['visit']),
                  ea.sessionExpire,
                  ea.sessionDomain,
                  ea.path,
                  ea.secure
                );
          }
          function _ () {
            if (!(f instanceof C)) {
              var a = f.get(F('visitorDataName')),
                b = f.get(F('sessionDataName')),
                c = f.get(F('terminationDataName')),
                d = f.get(F('visitSourceDataName'));
              if (b || c || d) {
                var e = new Date();
                f.set(F('sessionDataName'), '', e, ea.sessionDomain, ea.path, ea.secure),
                  f.set(F('terminationDataName'), '', e, ea.sessionDomain, ea.path, ea.secure),
                  f.set(F('visitSourceDataName'), '', e, ea.sessionDomain, ea.path, ea.secure);
              }
              var g = f.get(F('userCustomVar')),
                h = f.get(F('visitCustomVar'));
              S(a), T(b), U(c), V(d), sa.importData(h, 'visit'), sa.importData(g, 'user');
            }
            aa(fa.visitorId);
          }
          function aa (a) {
            const $___old_63729fa999e701b1 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_63729fa999e701b1)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_12e4a56044062aff.localStorage
                ));
              return function () {
                var b = JSON.parse(localStorage.getItem('iwa_vid')),
                  c = new Date();
                b
                  ? ((b.lV = c), !a == b.vId && ((b.vId = a), (b.cSet = c)))
                  : ((b = {}), (b.lV = c), (b.vId = a), (b.fV = c), (b.cSet = c));
                try {
                  localStorage.setItem('iwa_vid', JSON.stringify(b));
                } catch (a) {}
              }.apply(this, arguments);
            } finally {
              if ($___old_63729fa999e701b1)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_63729fa999e701b1));
            }
          }
          function ba (a, d) {
            var e = O(document.title),
              f = document.location.pathname + document.location.search + document.location.hash,
              h = P(c.hostname()),
              i = Q(c.href()),
              k = Q(y()),
              l = (document.charset || document.characterSet).toUpperCase(),
              n = ['id', 'type', 'ding', 'uid'],
              o = new B(ea),
              q = {},
              r = function () {
                u(n, function (a, b) {
                  var c = sa.get(b);
                  p(c) && o.set(c.name, c.value, c.scope);
                }),
                  m(d) &&
                    (m(d.customVariables) &&
                      u(d.customVariables.getBy(['page']), function (a, b) {
                        p(b) && o.set(b.name, b.value, b.scope);
                      }),
                    m(d.customVariableNames) &&
                      u(d.customVariableNames, function (a, b) {
                        var c = sa.get(b);
                        p(c) && o.set(c.name, c.value, c.scope);
                      }));
              },
              s = function (a) {
                m(a) &&
                  u(ta, function (b, c) {
                    m(a[b]) || (a[b] = c);
                  });
              };
            switch (
              ((q = {
                vid: fa.visitorId,
                p: fa.microtimestamp,
                t: '',
                sh: ea.sessionDomain,
                dt: e.length > 512 ? e.substring(0, 512) : e,
                dp: f.length > 512 ? f.substring(0, 512) : f,
                dh: h.length > 512 ? h.substring(0, 512) : h,
                dl: i.length > 512 ? i.substring(0, 512) : i,
                dr: k.length > 512 ? k.substring(0, 512) : k,
                de: l.length > 20 ? l.substring(0, 20) : l,
                df: top != self ? 1 : 0,
                bt: parseInt(new Date().getTimezoneOffset(), 10),
                br: parseInt(screen.width, 10) + 'x' + parseInt(screen.height, 10),
                bo: parseInt(screen.colorDepth, 10),
                bd: window.devicePixelRatio ? parseFloat(window.devicePixelRatio) : '',
                bv: J(),
                bc: navigator.cookieEnabled ? 1 : 0,
                bl: navigator.language || navigator.browserLanguage,
                bj: navigator.javaEnabled() ? 1 : 0,
                bf: M(),
                bs: ua.silverlight,
                bp: ua.pdf,
                bw: ua.wma,
                v: b,
              }),
              a)
            ) {
              case 'debug':
              case 'event':
                if ((r(), (q.cv = o.serialize()), (q.t = a), m(d) && m(d.event))) {
                  var t = new Array();
                  u(d.event, function (a, b) {
                    t.push('ec' + a + '=' + encodeURIComponent(b));
                  }),
                    (q.ec = t.join(ea.customVariableSeparator));
                }
                s(q);
                break;
              case 'stream':
                r(),
                  (q.t = 'stream'),
                  (q.cv = Object.keys(d)
                    .map(function (a) {
                      return encodeURIComponent(a) + '=' + encodeURIComponent(d[a]);
                    })
                    .join('&'));
                break;
              case 'complete':
                r(), (q.cv = o.serialize()), (q.t = 'complete'), s(q);
                break;
              case 'unload':
                r();
                var v = window.Inpl ? window.Inpl : {},
                  w = v.AdCID ? v.AdCID : '';
                o.set('ADCID', w, 'page'), (q.cv = o.serialize()), (q.t = 'unload'), s(q);
                break;
              case 'outlinks':
                r(), (q.cv = o.serialize()), (q.t = 'outlinks'), s(q);
                break;
              case 'pageview':
              default:
                L(),
                  wa(),
                  (q.cv = sa.serialize(['user', 'visit', 'page'])),
                  (q.t = 'pageview'),
                  s(q);
            }
            var x = [];
            if (
              (q.cv && '' != q.cv && (x = q.cv.split('&')),
              x.push('gen_sUID=' + j),
              (q.cv = x.join('&')),
              g.send(q, ea.trackerId, ea.trackerURL, ea.trackingObject),
              'outlinks' == a)
            )
              for (var z = new Date().getTime(); z + 100 > new Date().getTime(); );
            j = 0;
          }
          function ca () {
            var a = arguments.length > 0,
              b = { event: {} },
              c = b.event,
              d = null;
            if (
              (arguments.length > 1 &&
                q(arguments[arguments.length - 1]) &&
                arguments[arguments.length - 1].length > 0 &&
                ((d = Array.prototype.pop.call(arguments)), (b.customVariableNames = d)),
              arguments.length > 1 && p(arguments[arguments.length - 1]))
            ) {
              var e = new B(ea),
                f = Array.prototype.pop.call(arguments);
              u(f, function (a, b) {
                e.set(a, b, 'page');
              }),
                (b.customVariables = e);
            }
            for (var g = 0; g < arguments.length; g++) {
              if (!r(arguments[g]) && !s(arguments[g])) {
                a = !1;
                break;
              }
              c[g] = arguments[g];
            }
            if (a) return b;
          }
          var da = this,
            ea = {
              trackerId: '',
              trackerURL: '',
              trackingObject: '',
              name: d && d.name ? d.name : 'default',
              dataPrefix: '__iwa',
              visitorDataName: 'vid',
              sessionDataName: 'sid',
              terminationDataName: 'tid',
              visitSourceDataName: 'vs',
              visitCustomVar: 'cvv',
              userCustomVar: 'cvu',
              dataExpire: 63115200,
              sessionExpire: 1800,
              sessionDomain: H(),
              path: '/',
              secure: !1,
              customVariableMaxLength: 300,
              customVariableSeparator: '&',
              customVarArrayElementSeparator: ',',
            },
            fa = { visitorId: 0, microtimestamp: new Date().getTime() },
            ga = I(),
            ha = 0,
            ia = 0,
            ja = 0,
            ka = 0,
            la = 0,
            ma = 0,
            na = '',
            oa = '',
            pa = '',
            qa = '',
            ra = '',
            sa = new B(ea),
            ta = {},
            ua = {};
          this.clickMapEnabled = !1;
          var va = function () {
            return new z({
              customVariables: new B(ea),
              setCustomVar: function (a, b) {
                this.customVariables.set(a, b, 'page');
              },
            });
          };
          (this.set = function () {
            switch ((e('set args:\t\t', arguments), arguments.length)) {
              case 1:
                for (var a in arguments[0]) ea[a] = arguments[0][a];
                break;
              case 2:
                ea[arguments[0]] = arguments[1];
            }
          }),
            (this.get = function (a) {
              return m(ea[a]) ? ea[a] : m(fa[a]) ? fa[a] : void 0;
            }),
            (this.send = function () {
              e('prepare data for sending'),
                f instanceof C || (W(), Y(), Z(), $()),
                ba(arguments[0]);
            }),
            (this.complete = function (a) {
              if (q(a)) {
                var b = [];
                u(a, function (a, c) {
                  n(c) && b.push(c);
                });
                var c = va();
                c
                  .when(b)
                  .done(function () {
                    ba('complete', c.getTracker());
                  })
                  .error(function (a) {
                    console.log('complete error:' + a);
                  }),
                  c.run();
              }
            }),
            (this.unload = function (a) {
              if (q(a)) {
                var b = [],
                  c = function () {
                    u(a, function (a, c) {
                      n(c) && b.push(c);
                    });
                    var c = va();
                    c
                      .when(b)
                      .done(function () {
                        ba('unload', c.getTracker());
                      })
                      .error(function (a) {
                        console.log('unload error:' + a);
                      }),
                      c.run();
                  },
                  d = 'beforeunload';
                void 0 !== window.addEventListener
                  ? window.addEventListener(
                      d,
                      function () {
                        c();
                      },
                      !1
                    )
                  : void 0 !== window.attachEvent &&
                    window.attachEvent('on' + d, function () {
                      c();
                    });
              }
            }),
            (this.checkHardUser = function () {
              var a = new Date(),
                b = JSON.parse(localStorage.getItem('iwa_vid'));
              return (a - new Date(b.cSet)) / 86400000 >= 30;
            }),
            (this.videoConfig = {}),
            (this.stream = function () {
              var a = arguments.length > 2,
                b = {},
                c = arguments[0],
                d = arguments[1],
                e = arguments[2];
              if (('init' === d && (self.videoConfig = e), a)) {
                b = { type_stream: c, action_stream: d, attachment_id: e.attachment_id };
                for (var f in self.videoConfig) b[f] = self.videoConfig[f];
                for (var f in e) b[f] = e[f];
              }
              a && 'init' !== d && ba('stream', b);
            }),
            (this.trackEvent = function () {
              var a = ca.apply(this, arguments);
              m(a) && ba('event', a);
            }),
            (this.debug = function () {
              var a = ca.apply(this, arguments);
              m(a) && ba('debug', a);
            }),
            (this.setCustomVar = function (a, b, c) {
              return sa.set(a, b, c);
            }),
            (this.getCustomVar = function (a, b) {
              return sa.get(a, b);
            }),
            (this.deleteCustomVar = function (a, b) {
              sa.del(a, b);
            }),
            (this.onDocumentReady = w),
            (this.addEvent = x),
            (this.foreach = u),
            (this.clickMap = function (a, b) {
              da.clickMapEnabled = !0;
              var c = !0;
              m(b) && (c = !m(b.fixUrl) || b.fixUrl);
              var d = function (a) {
                  if (m(a) && a && m(a.tagName))
                    return 'form' == a.tagName.toLowerCase()
                      ? a.getAttribute(k.ATTR_BLOCK)
                        ? a
                        : void 0
                      : d(a.parentElement || a.parentNode);
                },
                f = function (a, b) {
                  return m(b) && b && r(b.tagName) && r(a)
                    ? b.tagName.toLowerCase() == a.toLowerCase()
                      ? b
                      : f(a, b.parentElement || b.parentNode)
                    : void 0;
                },
                g = function (a, b) {
                  if (m(b) && !o(b) && b && r(a)) {
                    if (!m(b.getAttribute)) return;
                    var c = b.getAttribute(a);
                    return m(c) && c ? b : g(a, b.parentElement || b.parentNode);
                  }
                },
                h = function (a) {
                  var b,
                    c = f('a', a) || f('area', a);
                  if (m(c) && c && ((b = g('data-iwa-block', c)), m(b) && b)) return c;
                },
                j = function (a, b, d) {
                  if (m(a) && p(a) && 1 != a[i.PARAM_DISABLED]) {
                    var e = new B(ea);
                    u(a, function (a, b) {
                      e.set(a, b, 'page');
                    }),
                      e.set(i.PARAM_URL, c ? Q(d, !0) : d, 'page'),
                      ba('outlinks', { customVariables: e }, b);
                  }
                },
                l = function (b, c) {
                  try {
                    if (
                      (b.getAttribute('id') &&
                        -1 != b.getAttribute('id').indexOf('ad_') &&
                        (c[i.PARAM_IS_AD] = 1),
                      b.getAttribute(k.ATTR_IS_SPONSORED) && (c[i.PARAM_IS_AD] = 1),
                      b.getAttribute(k.ATTR_IS_AD) && (c[i.PARAM_IS_AD] = 1),
                      b.getAttribute(k.ATTR_DISABLED) &&
                        1 == b.getAttribute(k.ATTR_DISABLED) &&
                        (c[i.PARAM_DISABLED] = 1),
                      b.getAttribute(k.ATTR_BLOCK) &&
                        ((c[i.PARAM_BLOCK] = b.getAttribute(k.ATTR_BLOCK)),
                        m(a) && t(a, ['a', 'b']) && (c[i.PARAM_TESTAB] = a)),
                      b.getAttribute(k.ATTR_ITEM))
                    ) {
                      c[i.PARAM_ITEM] = b.getAttribute(k.ATTR_ITEM);
                      var d = b.getElementsByTagName('img');
                      'object' == typeof d && 1 == d.length
                        ? (c[i.PARAM_IMG] = 1)
                        : (c[i.PARAM_IMG] = 0),
                        b.getAttribute(k.ATTR_HASH) &&
                          (c[i.PARAM_HASH] = b.getAttribute(k.ATTR_HASH));
                    }
                    var f = b.parentElement || b.parentNode;
                    return m(c[i.PARAM_BLOCK])
                      ? c
                      : (f && f.tagName && 'body' != f.tagName.toLowerCase() && l(f, c), c);
                  } catch (a) {
                    e(a);
                  }
                },
                n = function (a, b) {
                  var c, f;
                  try {
                    switch (a) {
                      case 'span':
                      case 'img':
                      case 'area':
                      case 'b':
                      case 'a':
                        if (!(c = h(b.target))) return;
                        (f = l(c, {})), j(f, c, c.getAttribute('href'));
                        break;
                      case 'input':
                      case 'button':
                        if (!(c = d(b.target))) return;
                        (f = l(c, {})), j(f, c, c.getAttribute('action'));
                    }
                  } catch (a) {
                    e(a);
                  }
                };
              w(function () {
                x(document, 'mousedown', function (a) {
                  var b = a.target.tagName.toLowerCase();
                  return (
                    ('a' == b ||
                      'area' == b ||
                      'b' == b ||
                      'span' == b ||
                      'button' == b ||
                      (m(a.target.parentElement) &&
                        a.target.parentElement &&
                        m(a.target.parentElement.tagName) &&
                        'a' == a.target.parentElement.tagName.toLowerCase()) ||
                      (m(a.target.parentElement) &&
                        a.target.parentElement &&
                        m(a.target.parentElement.parentElement) &&
                        a.target.parentElement.parentElement &&
                        m(a.target.parentElement.parentElement.tagName) &&
                        'a' == a.target.parentElement.parentElement.tagName.toLowerCase()) ||
                      ('input' == b && 'submit' === a.target.getAttribute('type'))) &&
                      n(b, a),
                    !0
                  );
                }),
                  x(document, 'keydown', function (a) {
                    var b = a.target.tagName.toLowerCase();
                    return ('a' != b && 'input' != b) || 13 != a.keyCode || n(b, a), !0;
                  });
              });
            });
          var wa = function () {
              try {
                var a = '';
                if (0 == document.location.hash.length) return;
                a = document.location.hash.slice(1);
                u(a.split('&'), function (a, b) {
                  var c = b.split('=');
                  m(c[0]) && m(c[1]) && t(c[0], l) && sa.set(c[0], c[1], 'page');
                });
              } catch (a) {}
            },
            xa = function () {
              try {
                var a,
                  b = new D(),
                  c = b.get('UEMAIL');
                c && ((a = v(decodeURIComponent(c.toLowerCase()))), (ta.we = a));
              } catch (a) {
                e(a);
              }
            },
            ya = function (a) {
              try {
                if (!r(a)) return !1;
                var b = a.split('&');
                if (!b) return !1;
                if (b[0] && -1 === b[0].indexOf('=')) return !1;
                var c = {};
                return (
                  u(b, function (a, b) {
                    var d = b.split('=');
                    m(d) && m(d[0]) && m(d[1]) && (c[d[0]] = d[1]);
                  }),
                  c
                );
              } catch (a) {
                return !1;
              }
            },
            za = function (a, b, c) {
              var d = ya(a);
              if (!d) return b + '=' + c;
              d[b] = c;
              var e = [];
              return (
                u(d, function (a, b) {
                  e.push(a + '=' + b);
                }),
                e.join('&')
              );
            },
            Aa = function () {
              try {
                var a = 'iwa_window_id';
                if (m(window.name) && r(window.name))
                  if (window.name) {
                    var b = ya(window.name);
                    if (b) {
                      if (!m(b[a])) {
                        var c = A(),
                          d = za(window.name, a, c);
                        d && (window.name = d), (b[a] = c);
                      }
                    } else (b = {}), (b[a] = window.name);
                    da.setCustomVar('windowId', b[a], 'page');
                  } else {
                    var f = A();
                    (window.name = za('', a, f)), da.setCustomVar('windowId', f, 'page');
                  }
              } catch (a) {
                e(a);
              }
            },
            Ba = function () {
              m(document.visibilityState) &&
                da.setCustomVar('pagevisibility', document.visibilityState, 'page');
            },
            Ca = function () {
              m(window.pp_gemius_identifier) &&
                r(window.pp_gemius_identifier) &&
                da.setCustomVar(
                  'gemiusId',
                  window.pp_gemius_identifier.split('&id=')[0].replace('USED_', ''),
                  'page'
                ),
                m(window.pp_gemius_time_identifier) &&
                  r(window.pp_gemius_time_identifier) &&
                  da.setCustomVar(
                    'gemiusTimeId',
                    window.pp_gemius_time_identifier.replace('USED_', ''),
                    'page'
                  ),
                m(window.gfkSstConf) &&
                  (m(window.gfkSstConf.media) &&
                    da.setCustomVar('gfk_media', window.gfkSstConf.media, 'page'),
                  m(window.gfkSstConf.content) &&
                    da.setCustomVar('gfk_content', window.gfkSstConf.content, 'page'));
            };
          !(function (b, c) {
            e('init tracker:\t', a, c),
              'undefined' !== a &&
                ((ea.trackerId = a), (c = X(c)), b.set(c), W(), _(), K(), xa(), Aa(), Ba(), Ca());
          })(this, d);
        },
        J = function () {
          if (arguments.length) return J.eFasade.execute(arguments);
        };
      (J.loaded = !1),
        (J.getByName = function () {
          return J.manager.getByName.apply(this.manager, arguments);
        }),
        (J.getAll = function () {
          return J.manager.getAll.apply(this.manager, arguments);
        }),
        (J.create = function () {
          return J.manager.create.apply(this.manager, arguments);
        }),
        e('IWA Script Version: ', b),
        (J.manager = J.manager || new H()),
        (J.plugins = J.plugins || new F()),
        (J.eFasade = J.eFasade || new G(J.manager, J.plugins));
      var K, L;
      if (void 0 !== window.IWAObject && void 0 !== window[window.IWAObject]) {
        (K = window.IWAObject),
          (L = window[K].q || []),
          (window[K].getByName = function () {
            return J.getByName.apply(J, arguments);
          }),
          (window[K].getAll = function () {
            return J.getAll.apply(J, arguments);
          }),
          (window[K].create = function () {
            return J.create.apply(J, arguments);
          }),
          J.manager.attach('create', function () {
            var a = window.__iwa || [];
            if (m(a) && q(a)) for (var b = 0; b < a.length; b++) a[b] && J.apply(J, a[b]);
          });
        for (var M = 0; M < L.length; M++) L[M] && J.apply(J, L[M]);
        (J.loaded = !0), (window[K] = J), e('\n');
      }
    })(),
      (function () {
        var a = function () {
          (this.init = function (a, b) {}),
            (this.unload = function (a) {
              a.resolve();
            });
        };
        iwa('plugin', 'load', 'browserFeatures', new a());
      })(),
      (function () {
        var a = function () {
          (this.init = function (a, b) {}),
            (this.unload = function (a) {
              a.resolve();
            });
        };
        iwa('plugin', 'load', 'clickMap', new a());
      })(),
      (function () {
        var a = function () {
          var a = null,
            b = null,
            c = 0;
          (this.init = function (c, e) {
            (a = c), (b = e), d();
          }),
            (this.unload = function (a) {
              a.getTracker().setCustomVar(b.readVar, c),
                a.getTracker().setCustomVar(b.contentIdVar, b.objectId),
                a.getTracker().setCustomVar(b.objectTypeVar, b.objectType),
                a.resolve();
            });
          var d = function () {
            var d = function () {
              return (
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight ||
                0
              );
            };
            a.onDocumentReady(function () {
              var e = document.getElementById(b.containerId);
              if (e) {
                var f = function () {
                  e.getBoundingClientRect().top + e.offsetHeight <= d() &&
                    ((c = 1),
                    void 0 !== window.addEventListener
                      ? window.removeEventListener('scroll', f)
                      : void 0 !== window.attachEvent && window.detachEvent('onscroll', f));
                };
                a.addEvent(window, 'scroll', f);
              }
            });
          };
        };
        iwa('plugin', 'load', 'containerRead', new a());
      })(),
      (function () {
        var a = function () {
          var a,
            b,
            c = null,
            d = null;
          (this.init = function (e, f) {
            (c = e), (d = f);
            var g = function () {
              'undefined' != typeof FB &&
                FB.api(
                  {
                    method: 'fql.query',
                    query:
                      "SELECT share_count, like_count, comment_count, total_count FROM link_stat WHERE url='" +
                      d.url +
                      "'",
                  },
                  function (c) {
                    c && c[0] && ((a = c[0].like_count), (b = c[0].share_count));
                  }
                );
            };
            c.addEvent(window, 'load', g);
          }),
            (this.unload = function (c) {
              c.getTracker().setCustomVar(d.fbLikeVar, a),
                c.getTracker().setCustomVar(d.fbShareVar, b),
                c.getTracker().setCustomVar(d.contentIdVar, d.objectId),
                c.getTracker().setCustomVar(d.objectTypeVar, d.objectType),
                c.resolve();
            });
        };
        iwa('plugin', 'load', 'fb', new a());
      })(),
      (function () {
        var a = function () {
          var a,
            b,
            c,
            d,
            e = 0,
            f = function (a) {
              var b = a.getBoundingClientRect();
              return (
                b.top >= 0 &&
                b.left >= 0 &&
                b.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                b.right <= (window.innerWidth || document.documentElement.clientWidth)
              );
            },
            g = function (a, b) {
              window.addEventListener
                ? window.addEventListener(a, b, !1)
                : window.attachEvent
                ? window.attachEvent('on' + a, b)
                : (window['on' + a] = b);
            },
            h = 0;
          (this.init = function (i, j) {
            var k = function () {
              (d = document.querySelector(j.cssSelector)),
                (c = f(d)),
                (b = a = new Date().getTime()),
                g('scroll', function () {
                  var g;
                  f(d) !== c &&
                    ((c = f(d)),
                    c
                      ? (a = new Date().getTime())
                      : ((b = new Date().getTime()),
                        (g = b - a),
                        (e += g > 0 ? g : 0),
                        g < 0 && (h = 1)));
                });
            };
            i.onDocumentReady(k);
          }),
            (this.unload = function (d) {
              var f;
              c &&
                ((b = new Date().getTime()), (f = b - a), (e += f > 0 ? f : 0), f < 0 && (h = 1)),
                d.getTracker().setCustomVar('logoVisibilityTime', parseInt(e / 1000, 10)),
                h && d.getTracker().setCustomVar('visibilityBadTime', 1),
                d.resolve();
            });
        };
        iwa('plugin', 'load', 'logoVisibility', new a());
      })(),
      (function () {
        var a = function () {
          var a,
            b = null,
            c = null;
          (this.init = function (d, e) {
            (b = d), (c = e);
            var f = function () {
              try {
                a = Math.max(
                  document.body.scrollHeight || 0,
                  document.documentElement.scrollHeight || 0,
                  document.body.offsetHeight || 0,
                  document.documentElement.offsetHeight || 0,
                  document.body.clientHeight || 0,
                  document.documentElement.clientHeight || 0
                );
              } catch (a) {}
            };
            b.onDocumentReady(f);
          }),
            (this.unload = function (b) {
              b.getTracker().setCustomVar(c.pageHeightVar, a), b.resolve();
            });
        };
        iwa('plugin', 'load', 'pageheight', new a());
      })(),
      (function () {
        var a = function () {
          var a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o = !1,
            p = function () {
              const $___old_d47184baaee7234c = {}.constructor.getOwnPropertyDescriptor(
                window,
                'performance'
              );
              try {
                if ($___old_d47184baaee7234c)
                  ({}.constructor.defineProperty(
                    window,
                    'performance',
                    $___stub_b151ea89d2a17b2f.performance
                  ));
                return function () {
                  return (
                    void 0 !== window.performance &&
                    void 0 !== window.performance.timing &&
                    window.performance.timing
                  );
                }.apply(this, arguments);
              } finally {
                if ($___old_d47184baaee7234c)
                  ({}.constructor.defineProperty(window, 'performance', $___old_d47184baaee7234c));
              }
            },
            q = function () {
              c &&
                ((d = c.unloadEventEnd - c.unloadEventStart),
                (e = c.redirectEnd - c.redirectStart),
                (f = c.domainLookupEnd - c.domainLookupStart),
                (g = c.connectEnd - c.connectStart),
                (h = c.responseEnd - c.requestStart),
                (i = c.responseEnd - c.responseStart),
                (j = c.domInteractive - c.domLoading),
                (k = c.domContentLoadedEventStart - c.navigationStart),
                (l = c.domComplete - c.navigationStart),
                (m = c.navigationStart),
                (n = c.fetchStart),
                (o = !0));
            };
          (window['IWA_PLUGIN_PERFORMANCE.measure'] = q),
            (this.init = function (d) {
              (b = d),
                (a = {
                  unloadEvent: 'p_unload_evt',
                  redirect: 'p_redirect',
                  domainLookup: 'p_domain_lookup',
                  connect: 'p_connect',
                  request: 'p_request',
                  response: 'p_response',
                  parse: 'p_parse',
                  domContentLoaded: 'p_dom_cnt_load',
                  domContentLoadedEvent: 'p_dom_cnt_load_evt',
                  pageload: 'p_load',
                  pageloadEvent: 'p_load_evt',
                }),
                (c = p()),
                b.addEvent(window, 'load', q);
            }),
            (this.unload = function (b) {
              if (o && c) {
                var p = b.getTracker();
                p.setCustomVar(a.unloadEvent, d),
                  p.setCustomVar(a.redirect, e),
                  p.setCustomVar(a.domainLookup, f),
                  p.setCustomVar(a.connect, g),
                  p.setCustomVar(a.request, h),
                  p.setCustomVar(a.response, i),
                  p.setCustomVar(a.parse, j),
                  p.setCustomVar(
                    a.domContentLoadedEvent,
                    c.domContentLoadedEventEnd - c.domContentLoadedEventStart
                  ),
                  m > 0 && (p.setCustomVar(a.domContentLoaded, k), p.setCustomVar(a.pageload, l)),
                  p.setCustomVar(a.pageloadEvent, c.loadEventEnd - c.loadEventStart),
                  p.setCustomVar('p_nav_start', m),
                  p.setCustomVar('p_fetch_start', n);
              }
              b.resolve();
            });
        };
        iwa('plugin', 'load', 'performance', new a());
      })(),
      (function () {
        function a () {
          function a () {
            Object.keys(h).forEach(function (a) {
              var e,
                f = h[a],
                g = a;
              (['html', 'body'].includes(String(f).toLowerCase()) || 'scrollToVar' === g) &&
                (e = window),
                'scrollToVar' === g && (g = 'scroll'),
                (j[g] = 0),
                (j[g + '_max'] = 0),
                (j[g + '_current'] = 0),
                (e = e === window ? e : document.querySelector(f)) &&
                  b(
                    e,
                    g,
                    function (a, b) {
                      (j[b + '_current'] = c(a)),
                        (j[b] = d(a)),
                        j[b + '_max'] < j[b + '_current'] && (j[b + '_max'] = j[b + '_current']);
                    }.bind(this)
                  );
            });
          }
          function b (a, b, c) {
            a.addEventListener(
              'scroll',
              function () {
                clearTimeout(i), (i = setTimeout(c.bind(this, a, b), 150));
              }.bind(this)
            );
          }
          function c (a) {
            var b = a === window ? a.scrollY : a.scrollTop;
            return Math.round(b);
          }
          function d (a) {
            var b = e(),
              d = f(),
              g = c(a),
              h = 0;
            if (!(g + b > d)) {
              if (b > d) return (h = 100);
              var i = parseInt(((b + g) / d) * 100);
              return (i > h || (h > 100 && i <= 100)) && (h = i), h;
            }
          }
          function e () {
            return (
              window.innerHeight ||
              document.documentElement.clientHeight ||
              document.body.clientHeight ||
              0
            );
          }
          function f () {
            return Math.max(
              document.body.scrollHeight || 0,
              document.documentElement.scrollHeight || 0,
              document.body.offsetHeight || 0,
              document.documentElement.offsetHeight || 0,
              document.body.clientHeight || 0,
              document.documentElement.clientHeight || 0
            );
          }
          var g = null,
            h = null,
            i = null,
            j = {};
          (this.init = function (b, c) {
            (h = c),
              (g = b),
              'complete' === document.readyState || 'loaded' === document.readyState
                ? a()
                : window.addEventListener('load', function () {
                    a();
                  });
          }),
            (this.unload = function (a) {
              Object.keys(j).forEach(function (b) {
                var c = j[b];
                a.getTracker().setCustomVar(b, c);
              }),
                a.resolve();
            });
        }
        iwa('plugin', 'load', 'scroll', new a());
      })(),
      (function () {
        var a = function () {
          var a = 0;
          (this.init = function (b, c) {
            b.addEvent(window, 'scroll', function () {
              var b = document.documentElement.scrollTop || document.body.scrollTop;
              a = Math.max(a, parseInt(b / 600, 10));
            });
          }),
            (this.unload = function (b) {
              b.getTracker().setCustomVar('scroll600', a), b.resolve();
            });
        };
        iwa('plugin', 'load', 'scroll600', new a());
      })(),
      (function () {
        var a = function () {
          var a,
            b,
            c = 'measurement',
            d = 'stoped',
            e = null,
            f = null,
            g = null,
            h = null,
            i = d,
            j = 0,
            k = 0,
            l = !1;
          (this.init = function (c, d) {
            (e = c),
              (f = d),
              (g = d.document || document),
              (h = d.date || Date),
              void 0 !== g.hidden
                ? ((a = 'hidden'), (b = 'visibilitychange'))
                : void 0 !== g.mozHidden
                ? ((a = 'mozHidden'), (b = 'mozvisibilitychange'))
                : void 0 !== g.msHidden
                ? ((a = 'msHidden'), (b = 'msvisibilitychange'))
                : void 0 !== g.webkitHidden &&
                  ((a = 'webkitHidden'), (b = 'webkitvisibilitychange')),
              (l = Number(void 0 !== g.addEventListener && void 0 !== g[a])),
              n() && o(),
              void 0 !== g.addEventListener &&
                g.addEventListener(b, function () {
                  g[a] ? p() : o();
                });
          }),
            (this.unload = function (a) {
              try {
                p();
              } catch (a) {}
              var b = a.getTracker();
              b.setCustomVar('timeSpent', k), b.setCustomVar('visApi', l), a.resolve();
            });
          var m = function () {
              return new h().getTime();
            },
            n = function () {
              return !l || !document[a];
            },
            o = function () {
              i == d && ((i = c), (j = m()));
            },
            p = function () {
              i == c && ((i = d), (k += parseInt((m() - j) / 1000)));
            };
        };
        iwa('plugin', 'load', 'timeSpent', new a());
      })(),
      (function () {
        var a = function () {
          (this.init = function (a, b) {}),
            (this.unload = function (a) {
              a.resolve();
            });
        };
        iwa('plugin', 'load', 'userOrigin', new a());
      })(),
      (function () {
        var a = function () {
          (this.init = function (a, b) {}),
            (this.unload = function (a) {
              a.resolve();
            });
        };
        iwa('plugin', 'load', 'viewAbility', new a());
      })();
  })();
}
