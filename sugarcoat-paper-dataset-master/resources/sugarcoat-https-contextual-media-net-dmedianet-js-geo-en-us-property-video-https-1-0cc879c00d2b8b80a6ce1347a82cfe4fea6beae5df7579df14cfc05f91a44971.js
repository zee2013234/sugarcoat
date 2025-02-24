var _mN, _mNSrv, setup, _mN_Idf, _mN_ctrM;
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
    (window.mnjs = window.mnjs || {}),
      (window.mnjs.ERP =
        window.mnjs.ERP ||
        function () {
          const $___old_aa8a3ec546748df1 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_aa8a3ec546748df1)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_9d7b4eb662ee43f5.userAgent
              ));
            return function () {
              'use strict';
              function e (e) {
                'object' == typeof e && (p = e);
              }
              function n (e) {
                g = e;
              }
              function t (e) {
                m = e;
              }
              function o (e) {
                d = e;
              }
              function r (e) {
                'undefined' == typeof e.logLevel && (e = { logLevel: 3, errorVal: e }),
                  e.logLevel >= 3 && w[e.logLevel - 1].push(e);
              }
              function i () {
                var e,
                  n = 0;
                for (e = 0; e < v; e++) n += w[e].length;
                if (0 !== n) {
                  var t,
                    o,
                    r,
                    i,
                    s = new Image(),
                    a = p.lurl ? p.lurl : 'https://lg3-a.akamaihd.net/nerrping.php',
                    f = '',
                    c = 0;
                  for (e = v - 1; e >= 0; e--) {
                    for (n = w[e].length, t = 0; t < n; ) {
                      if (
                        ((i =
                          1 === e
                            ? w[e][t]
                            : {
                                logLevel: w[e][t].logLevel,
                                errorVal: {
                                  name: w[e][t].errorVal.name,
                                  type: g,
                                  svr: m,
                                  servname: d,
                                  message: w[e][t].errorVal.message,
                                  line: w[e][t].errorVal.lineNumber,
                                  description: w[e][t].errorVal.description,
                                  stack: w[e][t].errorVal.stack,
                                },
                              }),
                        (r = l(i)),
                        !(r.length + f.length <= 1200) && f.length)
                      ) {
                        c = 1;
                        break;
                      }
                      0 !== f.length && (f += ','), (f += r), w[e].shift(), n--;
                    }
                    if (c) break;
                  }
                  (f = encodeURIComponent('[' + f + ']')),
                    (o =
                      a +
                      '?d=' +
                      f +
                      '&userAgent=' +
                      h +
                      '&requrl=' +
                      encodeURIComponent(window.location.href) +
                      '&img=logo.gif'),
                    (s.src = o);
                }
              }
              function l (e) {
                return 'object' == typeof JSON && 'function' == typeof JSON.stringify
                  ? JSON.stringify(e)
                  : 'JSON IS NOT SUPPORTED';
              }
              function s (e, n, t) {
                (this.name = e), (this.message = n), (this.logLevel = t);
              }
              function a () {
                var e,
                  n,
                  t = Array.prototype.slice.call(arguments),
                  o = [],
                  i = t.length,
                  l = null,
                  a = null;
                'object' == typeof t[i - 1] && t[i - 1].constructor === s && ((e = t[i - 1]), i--),
                  'function' == typeof t[0]
                    ? ((n = t.shift()), i--)
                    : ((l = t.shift()), (n = t.shift()), (i -= 2)),
                  (o = t.slice(0, i));
                try {
                  return n.apply(l, o);
                } catch (f) {
                  return (
                    e &&
                      ((f.name = e.name + ' (' + f.name + ')'),
                      (f.message = e.message + ' (' + f.message + ')'),
                      (a = e.logLevel)),
                    r({ logLevel: a || 3, errorVal: f }),
                    new s()
                  );
                }
              }
              function f (e, n) {
                var t = a(e);
                t !== !1 &&
                  t.constructor != s &&
                  window.setTimeout(function () {
                    f(e, n);
                  }, n);
              }
              function c (e, n) {
                var t;
                if ('function' == typeof e)
                  return (
                    (t = function () {
                      a(e);
                    }),
                    window.setTimeout(t, n)
                  );
              }
              var u,
                g = '',
                m = '',
                d = '',
                p = {},
                v = 3,
                h = encodeURIComponent(navigator.userAgent),
                w = [];
              for (u = 0; u < v; u++) w[u] = [];
              var y = function () {
                i(), c(y, 2500);
              };
              return (
                window.addEventListener
                  ? window.addEventListener('load', y, !1)
                  : window.attachEvent('onload', y),
                {
                  setConfig: e,
                  execSafe: a,
                  pushError: r,
                  setType: n,
                  setCodeVersion: t,
                  setServerName: o,
                  setTimeout: c,
                  setInterval: f,
                }
              );
            }.apply(this, arguments);
          } finally {
            if ($___old_aa8a3ec546748df1)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_aa8a3ec546748df1
              ));
          }
        });
    (window.mnjs = window.mnjs || {}),
      (window.mnjs.stu =
        window.mnjs.stu ||
        (function () {
          function t (t) {
            return void 0 !== t && '' !== t && null !== t;
          }
          function n (n) {
            switch (typeof n) {
              case 'string':
                return t(n);
              case 'object':
                return null !== n;
              case 'number':
              case 'boolean':
                return !0;
              default:
                return !1;
            }
          }
          function r (n) {
            switch (typeof n) {
              case 'string':
                return t(n) && ('1' === n || 'true' === n);
              case 'number':
                return 0 !== n;
              case 'boolean':
                return n;
              default:
                return !1;
            }
          }
          function e (t) {
            return 'function' == typeof t;
          }
          function o (t) {
            return '[object Array]' === Object.prototype.toString.call(t);
          }
          function i (t, n) {
            var r = Math.floor(Math.random() * (n - t + 1) + t);
            return r > n && (r = n), r;
          }
          function u (t, n, r) {
            return (
              (r = r || null),
              (n = n || []),
              function () {
                var e = n.slice(0);
                return (
                  arguments.length > 0 &&
                    Array.prototype.push.apply(e, Array.prototype.slice.call(arguments)),
                  t.apply(r, e)
                );
              }
            );
          }
          function a (n, r) {
            return !!t(n) && !(!t(r) || n.indexOf(r) === -1);
          }
          function f (t) {
            var n;
            if (
              ((t = t.match(
                /^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i
              )),
              !t)
            )
              return !1;
            for (t[0] = 0, n = 1; n < 5; n += 1)
              (t[0] += !!(t[n] || '').length), (t[n] = parseInt(t[n], 10) || 0);
            return (
              t.push(256, 256, 256, 256),
              (t[4 + t[0]] *= Math.pow(256, 4 - t[0])),
              !(t[1] >= t[5] || t[2] >= t[6] || t[3] >= t[7] || t[4] >= t[8]) &&
                t[1] * (1 === t[0] || 16777216) +
                  t[2] * (t[0] <= 2 || 65536) +
                  t[3] * (t[0] <= 3 || 256) +
                  1 * t[4]
            );
          }
          function c (t) {
            var n = t.lastIndexOf('.');
            return n === -1 ? '' : t.substr(0, n + 1) + '0';
          }
          function s (t, n) {
            if (void 0 !== t && void 0 !== n && void 0 !== t[n]) return t[n];
          }
          function l (t) {
            var n = t.toString(),
              r = n.indexOf('.');
            return r !== -1
              ? parseFloat(n.substr(0, Math.min(r + 3, n.length))).toFixed(2)
              : parseFloat(t).toFixed(2);
          }
          function p (t, r) {
            if (n(t)) {
              var e = 0,
                i = t.length;
              if (o(t)) for (; e < i; e++) r.call(t[e], t[e], e, i);
              else for (e in t) t.hasOwnProperty(e) && r.call(t[e], t[e], e, 0);
            }
          }
          function d (t, r) {
            if (n(t)) {
              e(r) ||
                (r = function (t, n) {
                  return !!t;
                });
              var i,
                u = 0,
                a = t.length;
              if (o(t)) {
                for (; u < a; u++) if (((i = r.call(t[u], t[u], u)), n(i))) return i;
              } else
                for (u in t)
                  if (t.hasOwnProperty(u) && ((i = r.call(t[u], t[u], u)), n(i))) return i;
            }
          }
          function h (t, n) {
            if (!o(t)) return !1;
            n = n.toString().toUpperCase();
            for (var r = 0; r < t.length; r++) if (t[r].toString().toUpperCase() == n) return !0;
            return !1;
          }
          function y (t) {
            for (var n in t) if (t.hasOwnProperty(n)) return !1;
            return !0;
          }
          function g (t, n) {
            return (
              p(n, function (n, r) {
                t[r] = n;
              }),
              t
            );
          }
          return {
            isStringSet: t,
            isSet: n,
            isOptionSet: r,
            isFunction: e,
            isArray: o,
            getRandom: i,
            getProxy: u,
            checkItemExists: a,
            ip2long: f,
            setLastOctetInIPToZero: c,
            safeReturn: s,
            decimalLimit: l,
            each: p,
            any: d,
            checkItemExistsInArray: h,
            isObjectEmpty: y,
            extend: g,
          };
        })());
    (window.mnjs = window.mnjs || {}),
      (window.mnjs.bru =
        window.mnjs.bru ||
        (function () {
          const $___old_02aed1b5432f8a21 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_02aed1b5432f8a21)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_9d7b4eb662ee43f5.userAgent
              ));
            return function () {
              function n (n) {
                return mnjs.stu.isStringSet(n) ? encodeURIComponent(n) : '';
              }
              function t (n) {
                if (!mnjs.stu.isStringSet(n)) return '';
                try {
                  return decodeURIComponent(n);
                } catch (t) {
                  return n;
                }
              }
              function e (n) {
                n = t(n);
                var e = new RegExp('^http(?:s)?://([^/]+)', 'im'),
                  i = n.match(e);
                return i ? i[1].toString() : '';
              }
              function i () {
                var n = !1;
                try {
                  'object' == typeof window.top &&
                    'object' == typeof window &&
                    (n = window.top != window);
                } catch (t) {
                  n = !0;
                }
                return n;
              }
              function o () {
                var n;
                return (mnjs.stu.checkItemExists(u, 'Trident') ||
                  mnjs.stu.checkItemExists(u, 'MSIE')) &&
                  ((n = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(u)),
                  mnjs.stu.isSet(n) && mnjs.stu.isSet(n[1]))
                  ? parseFloat(n[1])
                  : -1;
              }
              function r () {
                return !(
                  !mnjs.stu.isStringSet(u) ||
                  !/ip(hone|od|ad)|android|blackberry|kindle|symbian|wap|windows (ce|phone)|palm( os)|iemobile|nokia|mobile/i.test(
                    u
                  )
                );
              }
              function s () {
                return !!(
                  window.JSON &&
                  window.JSON.parse &&
                  'function' == typeof JSON.parse &&
                  window.JSON.stringify &&
                  'function' == typeof JSON.stringify
                );
              }
              var u = navigator.userAgent;
              return {
                encodeParam: n,
                decodeParam: t,
                getHostname: e,
                getIEVersion: o,
                isMobile: r,
                isJSONSupported: s,
                isInIFrameCall: i,
                inIframe: i(),
                ua: window.navigator.userAgent.toLowerCase(),
              };
            }.apply(this, arguments);
          } finally {
            if ($___old_02aed1b5432f8a21)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_02aed1b5432f8a21
              ));
          }
        })());
    (window.mnjs = window.mnjs || {}),
      (window.mnjs.uru =
        window.mnjs.uru ||
        (function () {
          function n (n) {
            if (!mnjs.stu.isStringSet(n)) return {};
            var t,
              r,
              e,
              s,
              i = {};
            if (((t = n.indexOf('?')), t === -1)) return i;
            for (r = n.substring(t + 1).split('&'), e = r.length; e--; )
              (s = r[e].split('=')), (i[s[0]] = s[1]);
            return i;
          }
          function t (t) {
            (this.url = t), (this.map = n(this.url));
          }
          function r (n) {
            return mnjs.stu.isStringSet(n)
              ? n.search('^(http(s)?%253A%252F%252F)') !== -1
                ? mnjs.bru.decodeParam(n)
                : n.search('^(http(s)?://)') !== -1
                ? mnjs.bru.encodeParam(n)
                : n
              : '';
          }
          function e (n, t) {
            return (mnjs.stu.isStringSet(t) || 'number' == typeof t) && mnjs.stu.isStringSet(n)
              ? '&' + encodeURIComponent(n) + '=' + encodeURIComponent(t)
              : '';
          }
          function s (n, t, r) {
            if (mnjs.stu.isStringSet(n) && mnjs.stu.isStringSet(t) && mnjs.stu.isStringSet(r)) {
              var e = n.split(/#(.*)/);
              return (
                e[0].indexOf('?') === -1 && (e[0] += '?'),
                e[0] +
                  '&' +
                  t +
                  '=' +
                  mnjs.bru.encodeParam(r) +
                  (mnjs.stu.isSet(e[1]) ? '#' + e[1] : '')
              );
            }
            return n;
          }
          function i (n, t, r) {
            if (mnjs.stu.isStringSet(n) && mnjs.stu.isStringSet(t) && mnjs.stu.isStringSet(r)) {
              var e = n.split(/#(.*)/);
              return (
                e[0] +
                '#' +
                (mnjs.stu.isSet(e[1]) ? e[1] + '&' : '') +
                t +
                '=' +
                mnjs.bru.encodeParam(r)
              );
            }
            return n;
          }
          return (
            (t.prototype.getParam = function (n) {
              return this.map[n] || '';
            }),
            (t.prototype.getDecodedParam = function (n) {
              var t = this.map[n];
              return (t && mnjs.bru.decodeParam(t)) || '';
            }),
            {
              getParamValueFromUrlAsArray: n,
              GetParamValueFromUrl: t,
              checkUrlDecodingEncoding: r,
              getQueryParamString: e,
              appendQueryParamToUrl: s,
              appendHashParamToUrl: i,
            }
          );
        })());
    (window.mnjs = window.mnjs || {}),
      (window.mnjs.evu =
        window.mnjs.evu ||
        (function () {
          function t (e, o) {
            var d = /interactive|complete|loaded/;
            if (
              (document.attachEvent && mnjs.bru.getIEVersion() <= 10 && (d = /complete|loaded/),
              d.test(document.readyState))
            )
              return void e();
            if ((o || n.addEvent(window, 'load', e), !o && document.addEventListener))
              return void n.addEvent(document, 'DOMContentLoaded', e);
            var r = document.documentElement;
            if (r && r.doScroll)
              try {
                r.doScroll('left'), e();
              } catch (i) {
                setTimeout(mnjs.stu.getProxy(t, [e, !0]), 50);
              }
          }
          var n = {
              addEvent: function (t, n, e) {
                t.addEventListener
                  ? t.addEventListener(n, e, !1)
                  : t.attachEvent && t.attachEvent('on' + n, e),
                  (t = null);
              },
              removeEvent: function (t, n, e) {
                t.removeEventListener
                  ? t.removeEventListener(n, e)
                  : t.detachEvent && t.detachEvent('on' + n, e),
                  (t = null);
              },
            },
            e = (function () {
              function n () {
                function n () {
                  var t;
                  for (o = !0; e.length > 0; ) (t = e.shift()), t.call(null);
                  e = [];
                }
                var e = [];
                (this.onDOMLoad = function (d) {
                  return e.push(d), 1 !== e.length || o ? void (o && n()) : void t(n);
                }),
                  (this.hasDOMLoaded = function () {
                    return o;
                  }),
                  (this.isDOMInteractive = function () {
                    return o || /interactive/.test(document.readyState);
                  });
              }
              var e = null,
                o = !1;
              return {
                getInstance: function () {
                  return null === e && (e = new n()), e;
                },
              };
            })();
          return { eventLib: n, DOMLoadObserver: e };
        })());
    (window.mnjs = window.mnjs || {}),
      (window.mnjs.dmu =
        window.mnjs.dmu ||
        (function () {
          function e (e, t, n) {
            if (mnjs.stu.isFunction(document.getElementsByClassName))
              return e.getElementsByClassName(t);
            n = n || '*';
            var s,
              a,
              r = new RegExp('(^|\\s)' + t + '(\\s|$)'),
              l = e || document,
              m = '*' === n && l.all ? l.all : l.getElementsByTagName(n),
              u = [],
              c = m.length;
            for (a = 0; a < c; a++) (s = m[a]), r.test(s.className) && u.push(s);
            return u;
          }
          function t (t, n) {
            try {
              var s,
                a = n || document,
                r = t.charAt(0),
                l = t.substr(1).split(':'),
                m = l[0],
                u = mnjs.stu.isStringSet(l[1]) && parseInt(l[1], 10);
              switch (r) {
                case '@':
                  s = a.getElementsByTagName(m);
                  break;
                case '#':
                  s = a.getElementById(m);
                  break;
                case '$':
                  s = a.getElementsByName(m);
                  break;
                case '.':
                  s = e(a, m);
                  break;
                default:
                  s = a.getElementById(t);
              }
              return u === !1 ? s : s[u];
            } catch (c) {
              return null;
            }
          }
          function n (e, s, a, r) {
            try {
              var l = t(e),
                m = mnjs.evu.DOMLoadObserver.getInstance().hasDOMLoaded();
              if (l || (!r && m)) return void a.call(null, l || !1);
              setTimeout(mnjs.stu.getProxy(n, [e, s, a, r]), s);
            } catch (u) {
              setTimeout(mnjs.stu.getProxy(n, [e, s, a, r]), s);
            }
          }
          return { getChildElemByClass: e, queryDOM: t, callWhenAvailable: n };
        })());
    (window.mnjs = window.mnjs || {}),
      (window.mnjs.ifu =
        window.mnjs.ifu ||
        (function () {
          function t (t) {
            return t
              ? void (this.frame = t.document.createElement('iframe'))
              : void (this.frame = document.createElement('iframe'));
          }
          function e (t) {
            try {
              var e = t.contentWindow || t.contentDocument;
              return e;
            } catch (r) {
              return null;
            }
          }
          function r (t) {
            try {
              var r = e(t),
                n = (r && (r.document || r)) || !1;
              return [n, r, null];
            } catch (o) {
              return [!1, null, 'Access Denied'];
            }
          }
          function n (t, e) {
            if (!t) return !1;
            var n,
              o,
              i = r(t);
            try {
              if (null !== i[2]) throw i[2];
              (n = i[0]), (o = i[1]);
              try {
                if (/msie/.test(window.navigator.userAgent.toLowerCase())) throw 10;
                n && (n.open(), n.write(e), n.close());
              } catch (c) {
                (o.data = e), n.location.replace('javascript:window["data"];');
              }
            } catch (a) {
              var u = "javascript:var d=document.open();d.domain='" + document.domain + "';";
              t.src = u + 'void(0);';
              try {
                var s = t.contentWindow.document;
                s.write(e), s.close();
              } catch (d) {
                return (
                  (t.src = u + 'd.write("' + e.replace(/"/g, '\\"') + '");d.close();'),
                  new mnjs.ERP().pushError(d),
                  !1
                );
              }
            }
            return !0;
          }
          return (
            (t.prototype.set = function (t, e) {
              return (this.frame[t] = e), this;
            }),
            (t.prototype.setStyle = function (t) {
              var e;
              for (e in t) t.hasOwnProperty(e) && (this.frame.style[e] = t[e]);
              return this;
            }),
            (t.prototype.overrideStyle = function (t) {
              return (this.frame.style.cssText = t), this;
            }),
            (t.prototype.done = function () {
              return this.frame;
            }),
            { CreateFrame: t, getIframeWindow: e, getIframeDoc: r, writeContentInIframe: n }
          );
        })());
    try {
      try {
        window.hbCMBidxc = window.hbCMBidxc || {};
        window.hbCMBidxc.isLoaded = true;
        window.hbCMBidxc.configSettings = {
          provider: {
            10000: {
              pid: '10000',
              pnm: 'YBNCA',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'unknown',
              eid: '31',
              tb: !1,
              nat: 0,
              bidder: 'ybncabidder',
              ps: 'YbncaProvider',
            },
            108: {
              pid: '108',
              pnm: 'CRITEO_NATIVE',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'unknown',
              eid: '3009',
              tb: !1,
              nat: 1,
              bidder: 'criteonativebidder',
              ps: 'NativeProvider',
            },
            117: {
              pid: '117',
              pnm: 'BIDSWITCH_NATIVE',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'unknown',
              eid: '3043',
              tb: !1,
              nat: 1,
              bidder: 'nativebidder',
              ps: 'NativeProvider',
            },
            141: {
              pid: '141',
              pnm: 'Zemanta*_FP_D',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'null',
              eid: '3044',
              tb: !1,
              nat: 1,
              bidder: 'nativebidder',
              ps: 'NativeProvider',
            },
            3007: {
              pid: '3007',
              pnm: 'Media Force Native*_FP_N',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'null',
              eid: '3051',
              tb: !1,
              nat: 1,
              bidder: 'nativebidder',
              ps: 'NativeProvider',
            },
            3008: {
              pid: '3008',
              pnm: 'MAX Native_FP_N',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'null',
              eid: '3052',
              tb: !1,
              nat: 1,
              bidder: 'nativebidder',
              ps: 'NativeProvider',
            },
            3010: {
              pid: '3010',
              pnm: 'Zeta* Native_FP_N',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'null',
              eid: '3054',
              tb: !1,
              nat: 1,
              bidder: 'nativebidder',
              ps: 'NativeProvider',
            },
            3012: {
              pid: '3012',
              pnm: 'Criteo*_Textads_FP_N',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'null',
              eid: '3009',
              tb: !1,
              nat: 1,
              bidder: 'criteonativebidder',
              ps: 'NativeProvider',
            },
            3014: {
              pid: '3014',
              pnm: 'Bidtellect_Native E1_FP_N',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'null',
              eid: '3056',
              tb: !1,
              nat: 1,
              bidder: 'nativebidder',
              ps: 'NativeProvider',
            },
            3015: {
              pid: '3015',
              pnm: 'MAX - Lazy Native_FP_N',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'null',
              eid: '3052',
              tb: !1,
              nat: 1,
              bidder: 'nativebidder',
              ps: 'NativeProvider',
            },
            3022: {
              pid: '3022',
              pnm: 'Baidu Native*_FP_N',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'null',
              eid: '3061',
              tb: !1,
              nat: 1,
              bidder: 'nativebidder',
              ps: 'NativeProvider',
            },
            4: {
              pid: '4',
              pnm: 'YBNCA-AUTO',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'unknown',
              eid: '31',
              tb: !1,
              nat: 0,
              bidder: 'ybncabidder',
              ps: 'YbncaProvider',
            },
            41: {
              pid: '41',
              pnm: 'BIDTELLECT',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'unknown',
              eid: '3005',
              tb: !0,
              nat: 1,
              bidder: 'nativebidder',
              ps: 'NativeProvider',
            },
            9: {
              pid: '9',
              pnm: 'YBNCA',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !1,
              adn: 'unknown',
              eid: '31',
              tb: !1,
              nat: 0,
              bidder: 'ybncabidder',
              ps: 'YbncaProvider',
            },
            99: {
              pid: '99',
              pnm: 'TEST_BIDDER',
              pm: '${AUCTION_PRICE}',
              mnet: !0,
              cs: !0,
              adn: 'unknown',
              eid: '27',
              tb: !0,
              nat: 0,
              bidder: 'testbidder',
              ps: '',
            },
          },
          log: {
            pr: 20,
            ad: 1,
            na: 100,
            sw: 0,
            prf: 1,
            aw: 1,
            gptr: 0,
            psi: 1,
            gpts: 0,
            ck: 0,
            exp: 0,
            ap: 20,
            crl: 1,
          },
          placements: {
            579433412: {
              div: 'cm-div,',
              targ: [],
              code: 'MSN_Video_Mobile_Bottom',
              crid: '579433412',
              szs: [[226, 264]],
              pt: '',
              amp: 0,
              pdt: '27',
              g: !1,
            },
          },
          providerMap: {
            579433412: {
              99: {
                pid: '99',
                csh: 100,
                dsh: 0,
                hb: !0,
                prf: !1,
                tm: !0,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '579433412' }],
              },
              3008: {
                pid: '3008',
                csh: 100,
                dsh: 0,
                ecc: '8CUBQMC8W',
                hb: !0,
                prf: !1,
                tm: !1,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '428811656_8CUBQMC8W' }],
              },
              3007: {
                pid: '3007',
                csh: 100,
                dsh: 0,
                ecc: '8CUBQMC8W',
                hb: !0,
                prf: !1,
                tm: !1,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '428811656_8CUBQMC8W' }],
              },
              3015: {
                pid: '3015',
                csh: 100,
                dsh: 0,
                ecc: '8CUBQMC8W',
                hb: !0,
                prf: !1,
                tm: !0,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '428811656_8CUBQMC8W' }],
              },
              117: {
                pid: '117',
                csh: 100,
                dsh: 0,
                ecc: '8CUBQMC8W',
                hb: !0,
                prf: !1,
                tm: !1,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '428811656_8CUBQMC8W' }],
              },
              3014: {
                pid: '3014',
                csh: 100,
                dsh: 0,
                ecc: '8CUBQMC8W',
                hb: !0,
                prf: !1,
                tm: !1,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '428811656_8CUBQMC8W' }],
              },
              10000: {
                pid: '10000',
                csh: 100,
                dsh: 0,
                ecc: '8CUR875GP',
                auto: 100,
                hb: !0,
                prf: !1,
                tm: !1,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '428811656' }],
              },
              108: {
                pid: '108',
                csh: 100,
                dsh: 0,
                ecc: '8CUBQMC8W',
                hb: !0,
                prf: !1,
                tm: !1,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '428811656_8CUBQMC8W' }],
              },
              3012: {
                pid: '3012',
                csh: 100,
                dsh: 0,
                ecc: '8CUBQMC8W',
                hb: !0,
                prf: !1,
                tm: !1,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '428811656_8CUBQMC8W' }],
              },
              3010: {
                pid: '3010',
                csh: 100,
                dsh: 0,
                ecc: '8CUBQMC8W',
                hb: !0,
                prf: !1,
                tm: !1,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '428811656_8CUBQMC8W' }],
              },
              41: {
                pid: '41',
                csh: 100,
                dsh: 0,
                ecc: '8CUR875GP',
                hb: !0,
                prf: !1,
                tm: !1,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '428811656_8CUBQMC8W' }],
              },
              141: {
                pid: '141',
                csh: 100,
                dsh: 0,
                ecc: '8CUBQMC8W',
                hb: !0,
                prf: !1,
                tm: !1,
                br: !1,
                fp: 0,
                szs: [{ sz: '226x264', epc: '428811656_8CUBQMC8W' }],
              },
            },
          },
          timeout: { gptrd: 400, cted: 365 },
          info: {
            cid: '8HBEYK367',
            partner: '8PR68Q253',
            scav: !1,
            sver: '2020112510_76',
            servname: 'hbcm_na',
            ptid: '27',
            ypartner: '8PRVCXX19',
            rEng: [],
            adxCid: '8CU3436U9',
            iType: 'HB-CM',
          },
          pvsh: [
            { pvid: '10000', rvsh: 0 },
            { pvid: '108', rvsh: 0 },
            { pvid: '117', rvsh: 0 },
            { pvid: '141', rvsh: 0 },
            { pvid: '3007', rvsh: 0 },
            { pvid: '3008', rvsh: 0 },
            { pvid: '3010', rvsh: 0 },
            { pvid: '3012', rvsh: 0 },
            { pvid: '3014', rvsh: 0 },
            { pvid: '3015', rvsh: 0 },
            { pvid: '3022', rvsh: 0 },
            { pvid: '4', rvsh: 0 },
            { pvid: '41', rvsh: 0 },
            { pvid: '9', rvsh: 0 },
            { pvid: '99', rvsh: 0 },
          ],
          misc: { dcto: 0, adlogSt: 0, grc: 1, rvc: 1, ogf: 1, lac: 0, did: 'msn' },
          adt: 'desktop',
          features: { ch: 1, enGdpr: 1, rrcmt: 80, auct: 2 },
          hbInfo: {
            uspconfig: {
              enf: 1,
              csm: [
                { cstr: '1---', st: 'S0', idx: 0 },
                { cstr: '1N--', st: 'S99', idx: 1 },
                { cstr: '1NYY', st: 'S1', idx: 2 },
                { cstr: '1NYN', st: 'S1', idx: 3 },
                { cstr: '1NNY', st: 'S2', idx: 4 },
                { cstr: '1NNN', st: 'S2', idx: 5 },
                { cstr: '1NY-', st: 'S1', idx: 6 },
                { cstr: '1N-Y', st: 'S99', idx: 7 },
                { cstr: '1N-N', st: 'S99', idx: 8 },
                { cstr: '1NN-', st: 'S2', idx: 9 },
                { cstr: '1YYN', st: 'S1', idx: 10 },
                { cstr: '1YY-', st: 'S1', idx: 11 },
                { cstr: '1YN-', st: 'S2', idx: 12 },
                { cstr: '1YNN', st: 'S2', idx: 13 },
                { cstr: '1YNY', st: 'S2', idx: 14 },
                { cstr: '1YYY', st: 'S3', idx: 15 },
                { cstr: '1-YY', st: 'S3', idx: 16 },
                { cstr: '1-YN', st: 'S1', idx: 17 },
                { cstr: '1-NY', st: 'S2', idx: 18 },
                { cstr: '1-NN', st: 'S2', idx: 19 },
                { cstr: '1--Y', st: 'S99', idx: 20 },
                { cstr: '1--N', st: 'S99', idx: 21 },
                { cstr: '1Y--', st: 'S99', idx: 22 },
                { cstr: '1Y-N', st: 'S99', idx: 23 },
                { cstr: '1Y-Y', st: 'S99', idx: 24 },
                { cstr: '1-Y-', st: 'S4', idx: 25 },
                { cstr: '1-N-', st: 'S2', idx: 26 },
              ],
              sam: {
                S0: [],
                S1: [
                  'TRIM_LAST_OCTET',
                  'APPLY_GOOGLE_RESTRICTION',
                  'STOP_SPAM',
                  'STOP_WHITEOPS',
                  'STOP_LOGGING_VISITOR_ID',
                  'DISABLE_COOKIESYNC',
                ],
                S2: [],
                S3: [
                  'TRIM_LAST_OCTET',
                  'STOP_LOGGING_VISITOR_ID',
                  'APPLY_GOOGLE_RESTRICTION',
                  'ENABLE_COOKIESYNC_FOR_SIGNATORIES',
                ],
                S4: ['TRIM_LAST_OCTET', 'APPLY_GOOGLE_RESTRICTION', 'STOP_SPAM', 'STOP_WHITEOPS'],
                S99: [],
              },
              dfcnst: '1NY-',
              psp: !0,
            },
            tcfconfig: {
              pam: {
                1: { tp: 'C', act: ['DISABLE_COOKIESYNC', 'STOP_WHITEOPS', 'STOP_SPAM'] },
                2: { tp: 'F', act: ['DISABLE_ADS', 'STOP_LOGGING_VISITOR_ID', 'TRIM_LAST_OCTET'] },
                3: {
                  tp: 'C',
                  act: ['STOP_LOGGING_VISITOR_ID', 'TRIM_LAST_OCTET', 'STOP_SENDING_PII'],
                },
                4: {
                  tp: 'C',
                  act: ['STOP_LOGGING_VISITOR_ID', 'TRIM_LAST_OCTET', 'STOP_SENDING_PII'],
                },
                7: { tp: 'F', act: ['DISABLE_ADVIEWLOGS'] },
              },
            },
            hdhome: '',
            version: '',
            srvd: 'https://contextual.media.net',
            gdprPrv: [
              '20',
              '25',
              '28',
              '41',
              '44',
              '54',
              '62',
              '65',
              '70',
              '73',
              '75',
              '76',
              '79',
              '80',
              '85',
              '87',
              '88',
              '96',
              '107',
              '109',
              '115',
              '116',
              '118',
              '2004',
              '2008',
              '2009',
            ],
          },
          bidderGroups: [],
          logDcs: { cxt: 'ncal' },
          targetingKeys: [],
          defaultBidderSetting: {
            nativebidder: { tplUrl: 'https://contextual.media.net/tc.js' },
            criteobidder: { criteoRtusUrl: 'https://gum.criteo.com/sync' },
            cookieUrl: 'https://contextual.media.net/checksync.php?',
            bidApiUrl2M: 'https://contextual.media.net/rtbsmpubs.php',
            bidStreamUrlEast: 'https://cdneast2-xch.media.net/AdExchange/rtbsspub',
            bidStreamUrlEastOrigin: 'https://east2-xch.media.net/AdExchange/rtbsspub',
            sspServerScriptUrl: 'https://contextual.media.net/ssapi/bids',
            sspServerStreamUrl: 'https://contextual.media.net/sse/bids',
            bidStreamUrlWest: 'https://cdnwest-xch.media.net/AdExchange/rtbsspub',
            bidStreamUrlWestOrigin: 'https://west-xch.media.net/AdExchange/rtbsspub',
            bidNonStreamUrlEastOrigin: 'https://east2-xch.media.net/AdExchange/rtbsapub',
            bidNonStreamUrlWestOrigin: 'https://west-xch.media.net/AdExchange/rtbsapub',
          },
          logUrls: {
            acl: 'logid=kfk&evtid=ybx',
            abd: 'logid=kfk&evtid=abdlog',
            pr: 'logid=prlog',
            ap: 'logid=aplog',
            ad: 'logid=adlog',
            prf: 'logid=prflog',
            aw: 'logid=awlog',
            gptr: 'logid=gptrlog',
            cslog: 'logid=kfk&evtid=cslog',
            amzlog: 'logid=kfk&evtid=amzlog',
            gpts: 'logid=kfk&evtid=gptslog',
            agpts: 'logid=kfk&evtid=agptslog',
            errorBid: 'logid=kfk&evtid=errorBidLog',
            tpUrl: 'logid=kfk&evtid=rtbstl',
            sw: 'logid=kfk&evtid=slotlog',
            exp: 'logid=kfk&evtid=explog',
            idl: 'logid=kfk&evtid=initlog',
            av: 'logid=kfk&evtid=avlog',
            ar: 'logid=kfk&evtid=arlog',
            el: 'logid=kfk&evtid=belog',
            fl: 'logid=kfk&evtid=flog',
            fblog: 'logid=kfk&evtid=fblog',
            adx: 'logid=kfk&evtid=adx',
            ybncaadx: 'logid=kfk&evtid=ybncaadx',
            adc: 'logid=kfk&evtid=hbadc',
            lb: 'logid=kfk&evtid=lblog',
            pn: '/log',
            crl: 'https://cslogger.media.net/log?logid=kfk&evtid=cs&origin=1',
            og: 'https://hblg.media.net',
            ogncal: 'https://lgncal.media.net',
            pog: 'https://hbxlp.media.net',
            ssp: 'logid=kfk&evtid=ssp',
            na: 'logid=kfk&evtid=al',
            cxt: 'logid=kfk&evtid=cxtlog',
            wops: 'logid=kfk&evtid=wops',
          },
          _ccpa: '1',
          _gdpr: '0',
          _mNVsid: '',
          _optout: '',
          _dataCk: '',
          viewid: '1606443969',
          _mNVisitIdData: '75.80.55.156',
          cok: { fb: '', crt: '', cov: '' },
          _coc: 'NA',
          _dma: '825',
          _ip2c: 'US',
          _ip2sc: 'CA',
          _ip2ct: 'LAJOLLA',
          _ip2z: 'w',
          _epurl: 'https%3a%2f%2fwww.msn.com%2f',
        };
        !(function () {
          'use strict';
          function e (e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          }
          function n (e) {
            return void 0 !== e && '' !== e && null !== e;
          }
          function o (e) {
            return 'function' == typeof e;
          }
          function t (t, r, c) {
            return (
              o(r) && ((c = r), (r = [])),
              !!(n(t) && e(r) && o(c)) && void (f[t] = f[t] || { deps: r, callback: c })
            );
          }
          function r (e, n) {
            var t,
              c = [];
            for (var d in e)
              if (e.hasOwnProperty(d)) {
                if (((t = e[d]), 'object' == typeof t || 'undefined' == typeof t)) {
                  c.push(t);
                  continue;
                }
                if (void 0 !== i[t]) c.push(i[t]);
                else {
                  if (u[t] === !0) throw new Error('Cyclic dependency for: ' + t);
                  if (!f[t] || !f[t].deps) throw new Error('Module not defined: ' + t);
                  (u[t] = !0), (i[t] = r(f[t].deps, f[t].callback)), (u[t] = !1), c.push(i[t]);
                }
              }
            return o(n) ? n.apply(this, c) : c;
          }
          var c,
            i = {},
            f = {},
            u = {};
          (c = 'undefined' != typeof global && 'object' == typeof module ? global : window),
            (c._cR = c._cR || r),
            (c._cD = c._cD || t);
        })();
        _cD('mnrp', [window, document, {}], function (e, n) {
          const $___old_4e01c06770d23336 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_4e01c06770d23336)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_9d7b4eb662ee43f5.userAgent
              ));
            return function () {
              'use strict';
              function t (e) {
                u = e;
              }
              function r (e) {
                p = e;
              }
              function o (e) {
                h = e;
              }
              function i (e) {
                'undefined' == typeof e.logLevel && (e = { logLevel: 3, errorVal: e }),
                  e.logLevel >= 3 && d[e.logLevel - 1].push(e);
              }
              function l () {
                var t,
                  r = 0;
                for (t = 0; t < m; t++) r += d[t].length;
                if (0 !== r) {
                  var o,
                    i,
                    l,
                    s,
                    c = new Image(),
                    f =
                      'https:' === n.location.protocol
                        ? 'https://hblg.media.net/nerrping.php'
                        : 'http://hblg.media.net/nerrping.php',
                    g = '',
                    y = 0;
                  for (t = m - 1; t >= 0; t--) {
                    for (r = d[t].length, o = 0; o < r; ) {
                      if (
                        ((s =
                          1 === t
                            ? d[t][o]
                            : {
                                logLevel: d[t][o].logLevel,
                                errorVal: {
                                  name: d[t][o].errorVal.name,
                                  type: u,
                                  svr: p,
                                  servname: h,
                                  message: d[t][o].errorVal.message,
                                  line: d[t][o].errorVal.lineNumber,
                                  description: d[t][o].errorVal.description,
                                  stack: d[t][o].errorVal.stack,
                                },
                              }),
                        (l = a(s)),
                        !(l.length + g.length <= 1200) && g.length)
                      ) {
                        y = 1;
                        break;
                      }
                      0 !== g.length && (g += ','), (g += l), d[t].shift(), r--;
                    }
                    if (y) break;
                  }
                  (g = encodeURIComponent('[' + g + ']')),
                    (i =
                      f +
                      '?d=' +
                      g +
                      '&userAgent=' +
                      v +
                      '&requrl=' +
                      encodeURIComponent(e.location.href) +
                      '&img=logo.gif'),
                    (c.src = i);
                }
              }
              function a (e) {
                if ('object' == typeof JSON && 'function' == typeof JSON.stringify)
                  return JSON.stringify(e);
              }
              function s (e, n, t) {
                (this.name = e), (this.message = n), (this.logLevel = t);
              }
              function c () {
                var e,
                  n,
                  t = Array.prototype.slice.call(arguments),
                  r = [],
                  o = t.length,
                  l = null,
                  a = null;
                'object' == typeof t[o - 1] &&
                  null !== t[o - 1] &&
                  t[o - 1].constructor === s &&
                  ((e = t[o - 1]), o--),
                  'function' == typeof t[0]
                    ? ((n = t.shift()), o--)
                    : ((l = t.shift()), (n = t.shift()), (o -= 2)),
                  (r = t.slice(0, o));
                try {
                  return n.apply(l, r);
                } catch (c) {
                  return (
                    e &&
                      ((c.name = e.name + ' (' + c.name + ')'),
                      (c.message = e.message + ' (' + c.message + ')'),
                      (a = e.logLevel)),
                    i({ logLevel: a || 3, errorVal: c }),
                    new s()
                  );
                }
              }
              function f (n, t) {
                var r;
                if ('function' == typeof n)
                  return (
                    (r = function () {
                      c(n);
                    }),
                    e.setTimeout(r, t)
                  );
              }
              var g,
                u = '',
                p = '',
                h = '',
                m = 3,
                v = encodeURIComponent(navigator.userAgent),
                d = [];
              for (g = 0; g < m; g++) d[g] = [];
              var y = function () {
                l(), f(y, 2500);
              };
              return (
                e.addEventListener
                  ? e.addEventListener('load', y, !1)
                  : e.attachEvent('onload', y),
                {
                  execSafe: c,
                  pushError: i,
                  setType: t,
                  setCodeVersion: r,
                  setServerName: o,
                  setTimeout: f,
                }
              );
            }.apply(this, arguments);
          } finally {
            if ($___old_4e01c06770d23336)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_4e01c06770d23336
              ));
          }
        });
        _cD('encryption', [window, document, {}], function () {
          'use strict';
          function t (t) {
            for (var e = '', o = 0; o < t.length; o++) {
              var a = t.charAt(o),
                i = a === a.toUpperCase(),
                u = i ? c : n,
                p = t.charCodeAt(o) - u;
              p >= 0 && p <= 25 && (a = i ? r.charAt(p).toUpperCase() : r.charAt(p)), (e += a);
            }
            return e;
          }
          var r = 'qazxswedcvfrtgbnhyujmkiolp',
            n = 97,
            c = 65;
          return { substitutionEncryption: t };
        });
        _cD('_', ['mnrp', 'res', window, document, {}], function (t, e, n, r) {
          const $___old_547133ac72dd5cf8 = {}.constructor.getOwnPropertyDescriptor(
            Navigator.prototype,
            'userAgent'
          );
          try {
            if ($___old_547133ac72dd5cf8)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___stub_9d7b4eb662ee43f5.userAgent
              ));
            return function () {
              'use strict';
              function o () {
                var t,
                  e,
                  n = {},
                  r = !1;
                (this.startTime = function () {
                  return t;
                }),
                  (this.start = function () {
                    (t = new Date().getTime()), (r = !0);
                  }),
                  (this.stop = function () {
                    (e = new Date().getTime()), (r = !1);
                  }),
                  (this.diff = function () {
                    return new Date().getTime() - t;
                  }),
                  (this.tick = function (t) {
                    (n[t] = {}), (n[t].startTime = r ? this.diff() : -1);
                  }),
                  (this.tock = function (t) {
                    n.hasOwnProperty(t) &&
                      (n[t].endTime = n[t].startTime === -1 ? -1 : this.diff());
                  }),
                  (this.time = function (t) {
                    return n.hasOwnProperty(t)
                      ? (n[t].endTime || this.tock(t), n[t].endTime - n[t].startTime)
                      : -1;
                  }),
                  (this.getTime = function (t) {
                    return n.hasOwnProperty(t) ? this.diff() - n[t].startTime : -1;
                  }),
                  (this.getAllTime = function () {
                    return n;
                  });
              }
              function i (t, e, n) {
                var r = 'evt_' + (e || 'gbl');
                (qe[r] = qe[r] || {}), (qe[r][t] = qe[r][t] || []), qe[r][t].push(n);
              }
              function a (t, e) {
                var n = 'evt_' + (e || 'gbl');
                qe[n] && qe[n][t] && qe[n][t].length > 0 && (qe[n][t] = []);
              }
              function u (t, e, n) {
                var r = C(n) ? n : Date.now,
                  o = r();
                return function () {
                  var n = r();
                  n - o >= t && ((o = n), e.apply(null, arguments));
                };
              }
              function c (t) {
                if (w(t)) {
                  var e = 'evt_' + t;
                  w(qe[e]) &&
                    !b(qe[e]) &&
                    Rt(qe[e], function (t, n) {
                      qe[e][n] = [];
                    });
                }
              }
              function f () {
                c('global');
              }
              function s () {
                for (var t in qe)
                  qe.hasOwnProperty(t) &&
                    t.indexOf('evt_') !== -1 &&
                    t.indexOf('command') === -1 &&
                    (qe[t] = {});
              }
              function l (e, n, r, o) {
                (o = o || ('object' == typeof r ? r : {})), (r = 'boolean' == typeof r && r);
                var i = 'evt_' + (n || 'gbl');
                if (void 0 !== qe[i]) {
                  var a,
                    u,
                    c = qe[i][e] || [],
                    f = { src: n };
                  for (
                    qe.evt_gbl && qe.evt_gbl.gblEvt && t.execSafe(qe.evt_gbl.gblEvt[0], f, o),
                      u = 0,
                      a = c.length;
                    u < a;
                    u++
                  )
                    C(c[u]) && t.execSafe(c[u], f, o);
                  !r && c.length > 0 && (qe[i][e] = []);
                }
              }
              function d (t, e, n, r) {
                l('before:' + t, e, n), l(t, e, n, r), l('after:' + t, e, n);
              }
              function p () {
                try {
                  var t = n.document.body,
                    e = n.document.documentElement;
                  return Math.max(
                    t.scrollHeight,
                    t.offsetHeight,
                    e.clientHeight,
                    e.scrollHeight,
                    e.offsetHeight
                  );
                } catch (r) {
                  return 0;
                }
              }
              function h (t) {
                try {
                  t.frameElement;
                } catch (e) {
                  return !0;
                }
                return !1;
              }
              function v (t, e) {
                return !!O(t) && O(e) && t.indexOf(e) !== -1;
              }
              function m (t, e) {
                return (
                  !!M(t) &&
                  (It(t, function (t) {
                    if (t === e) return !0;
                  }) ||
                    !1)
                );
              }
              function g (t, e) {
                return (
                  !(!M(t) || !M(e)) &&
                  It(t, function (t) {
                    return m(e, t);
                  })
                );
              }
              function y (t, e, n) {
                var r = !1;
                M(t) &&
                  w(e) &&
                  w(n) &&
                  (Rt(t, function (o, i, a) {
                    new RegExp(e).test(o) === !0 && ((r = !0), (t[i] = n));
                  }),
                  r === !1 && t.push(n));
              }
              function b (t) {
                for (var e in t) if (t.hasOwnProperty(e)) return !1;
                return !0;
              }
              function w (t) {
                switch (typeof t) {
                  case 'string':
                    return void 0 !== t && '' !== t && null !== t;
                  case 'object':
                    return null !== t;
                  case 'number':
                  case 'boolean':
                    return !0;
                  default:
                    return !1;
                }
              }
              function E (t) {
                return 'object' == typeof t && null !== t && !b(t);
              }
              function x (t) {
                return 'undefined' != typeof t;
              }
              function O (t) {
                return w(t);
              }
              function S (t) {
                return 'string' == typeof t;
              }
              function T (t) {
                return 'boolean' == typeof t;
              }
              function C (t) {
                return 'function' == typeof t;
              }
              function M (t) {
                return '[object Array]' === Object.prototype.toString.call(t);
              }
              function k (t) {
                return _(t) !== t;
              }
              function D (t) {
                return O(t) ? encodeURIComponent(t) : '';
              }
              function _ (t) {
                if (!O(t)) return '';
                try {
                  return decodeURIComponent(t);
                } catch (e) {
                  return t;
                }
              }
              function N (t) {
                return O(t)
                  ? t.search('^(http(s)?%253A%252F%252F)') !== -1
                    ? _(t)
                    : t.search('^(http(s)?://)') !== -1
                    ? D(t)
                    : t
                  : '';
              }
              function j (t) {
                if (!O(t)) return {};
                var e,
                  n,
                  r,
                  o,
                  i = {};
                if (((e = t.indexOf('?')), e === -1)) return i;
                for (n = t.substring(e + 1).split('&'), r = n.length; r--; )
                  (o = n[r].split('=')), (i[o[0]] = o[1]);
                return i;
              }
              function P (t) {
                (this.url = t), (this.map = j(this.url));
              }
              function B () {
                var t = !1;
                try {
                  'object' == typeof n.top && 'object' == typeof n && (t = n.top != n);
                } catch (e) {
                  t = !0;
                }
                return t;
              }
              function A (t) {
                return w(t) ? t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') : '';
              }
              function R (t, e) {
                var n = Math.floor(Math.random() * (e - t + 1) + t);
                return n > e && (n = e), n;
              }
              function F (t, e, n) {
                var r = Math.pow(10, n || 2);
                return R(t * r, e * r) / r;
              }
              function I () {
                var t = new Date(),
                  e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())),
                  n = new Date(Date.UTC(e.getUTCFullYear(), 0, 1)),
                  r = 86400000;
                return (
                  e.setUTCDate(e.getUTCDate() + 4 - (e.getUTCDay() || 7)),
                  Math.ceil(((e - n) / r + 1) / 7)
                );
              }
              function W (t, e, n) {
                return (
                  (n = n || null),
                  (e = e || []),
                  function () {
                    var r = e.slice(0);
                    return (
                      arguments.length > 0 &&
                        Array.prototype.push.apply(r, Array.prototype.slice.call(arguments)),
                      t.apply(n, r)
                    );
                  }
                );
              }
              function L () {
                var t = Array.prototype.slice.call(arguments),
                  e = t[0];
                return (
                  t.shift(),
                  Rt(t, function (t) {
                    return M(t) ? void Array.prototype.push.apply(e, t) : void e.push(t);
                  }),
                  e
                );
              }
              function U () {
                return w(n.location.href) ? n.location.href : '';
              }
              function H (t) {
                t = _(t);
                var e = new RegExp('^http(?:s)?://([^/]+)', 'im'),
                  n = t.match(e);
                return n ? n[1].toString() : '';
              }
              function X (t) {
                try {
                  var e = Z(t),
                    n = (e && (e.document || e)) || !1;
                  return [n, e, null];
                } catch (r) {
                  return [!1, null, 'Access Denied'];
                }
              }
              function Z (t) {
                try {
                  var e = t.contentWindow || t.contentDocument;
                  return e;
                } catch (n) {
                  return null;
                }
              }
              function V (t) {
                var e;
                if (
                  ((t = t.match(
                    /^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i
                  )),
                  !t)
                )
                  return !1;
                for (t[0] = 0, e = 1; e < 5; e += 1)
                  (t[0] += !!(t[e] || '').length), (t[e] = parseInt(t[e], 10) || 0);
                return (
                  t.push(256, 256, 256, 256),
                  (t[4 + t[0]] *= Math.pow(256, 4 - t[0])),
                  !(t[1] >= t[5] || t[2] >= t[6] || t[3] >= t[7] || t[4] >= t[8]) &&
                    t[1] * (1 === t[0] || 16777216) +
                      t[2] * (t[0] <= 2 || 65536) +
                      t[3] * (t[0] <= 3 || 256) +
                      1 * t[4]
                );
              }
              function Y (t) {
                var e = t.lastIndexOf('.');
                return e === -1 ? '' : t.substr(0, e + 1) + '0';
              }
              function G () {
                return '' + R(0, 254) + '.' + R(0, 254) + '.' + R(0, 254) + '.' + R(0, 254);
              }
              function J (t, e, n, r, o) {
                var i;
                if (((n = n || dt('@body:0')), !n))
                  return ht('@body:0', 100, W(J, [t, e, null, r, o]), !1), null;
                if (
                  ((i = new lt()
                    .set('marginWidth', 0)
                    .set('marginHeight', 0)
                    .set('scrolling', 'no')
                    .set('frameBorder', 0)
                    .set('height', 0)
                    .set('width', 0)
                    .overrideStyle('display:none !important;')
                    .done()),
                  w(t) && (i.id = t),
                  r)
                )
                  for (var a in r) i[a] = r[a];
                return (
                  n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i),
                  e && $(i, e),
                  C(o) && (i.onload = o),
                  i
                );
              }
              function q (t, e, n) {
                return new lt()
                  .set('marginWidth', 0)
                  .set('marginHeight', 0)
                  .set('scrolling', 'no')
                  .set('frameBorder', 0)
                  .set('height', n || 0)
                  .set('width', e || 0)
                  .set('id', t)
                  .set('allowtransparency', 'true')
                  .done();
              }
              function $ (e, n) {
                if (e) {
                  var o,
                    i = X(e);
                  try {
                    if (null !== i[2]) throw i[2];
                    (o = i[0]), o && (o.open(), o.write(n), o.close());
                  } catch (a) {
                    var u = "javascript:var d=document.open();d.domain='" + r.domain + "';";
                    e.src = u + 'void(0);';
                    try {
                      var c = e.contentWindow.document;
                      c.write(n), c.close();
                    } catch (f) {
                      (e.src = u + 'd.write("' + n.replace(/"/g, '\\"') + '");d.close();'),
                        t.pushError(f);
                    }
                  }
                }
              }
              function Q (t, e, n) {
                return O(t)
                  ? (w(n) && w(n.encode) && n.encode === !0 && (e = D(e)), '&' + t + '=' + e)
                  : '';
              }
              function z (t) {
                if (C(Object.keys)) return Object.keys(t);
                var e = [];
                return (
                  Rt(t, function (t, n) {
                    e.push(n);
                  }),
                  e
                );
              }
              function K (t, e, n) {
                function r (t) {
                  return 'object' != typeof t || t.isUrlEntity !== !1;
                }
                var o = {};
                w(n) && w(n.encode) && (o.encode = n.encode);
                var i,
                  a,
                  u = '',
                  c = !!e,
                  f = c ? e : t;
                for (i in f)
                  if (f.hasOwnProperty(i) && (c && (i = e[i]), O(t[i]) && r(t[i]))) {
                    if (M(t[i])) {
                      for (var s in t[i]) u += Q(i + '[]', t[i][s], o);
                      continue;
                    }
                    (a = 'object' == typeof t[i] ? t[i].value : t[i]), (u += Q(i, a, o));
                  }
                return u;
              }
              function tt (t, e) {
                e = 60 * e * 1000;
                var n = $t();
                return !(n - t > e);
              }
              function et () {
                return /msie|rv:11\.0/.test($e.toLowerCase());
              }
              function nt (t, e) {
                var n = '',
                  r = {};
                return (
                  w(e) && w(e.encode) && (r.encode = e.encode),
                  Rt(t, function (t, e) {
                    n += Q(e, t, r);
                  }),
                  n
                );
              }
              function rt (t, e, n) {
                var r,
                  o,
                  i,
                  a,
                  u = [],
                  c = [],
                  f = {},
                  s = t.length;
                if (0 === s) return [''];
                w(n) && w(n.encode) && (f.encode = n.encode);
                for (r in t[0]) t[0].hasOwnProperty(r) && u.push(r);
                var l = '',
                  d = et();
                for (r = 0, o = t.length; r < o; r++) {
                  var p = '';
                  for (i = 0, a = u.length; i < a; i++) p += Q(u[i] + '[]', t[r][u[i]], f);
                  d && w(e)
                    ? p.length > e
                      ? c.push(p)
                      : (l + p).length > e
                      ? (c.push(l), (l = p))
                      : (l += p)
                    : (l += p);
                }
                return c.push(l), c;
              }
              function ot (t) {
                switch (typeof t) {
                  case 'string':
                    return O(t) && ('1' === t || 'true' === t);
                  case 'number':
                    return 0 !== t;
                  case 'boolean':
                    return t;
                  default:
                    return !1;
                }
              }
              function it (t) {
                var e = t.split('&'),
                  n = [];
                return (
                  Rt(e, function (t) {
                    t.indexOf('=') !== -1 &&
                      '' !== t &&
                      'action_object_map=' !== t.substring(0, 18) &&
                      'action_type_map=' !== t.substring(0, 16) &&
                      'action_ref_map=' !== t.substring(0, 15) &&
                      'action_action_map=' !== t.substring(0, 18) &&
                      'fb_' !== t.substring(0, 3) &&
                      'fbclid' !== t.substring(0, 6) &&
                      'lcid=' !== t.substring(0, 5) &&
                      'force_hbtest=' !== t.substring(0, 13) &&
                      'mnet_test=' !== t.substring(0, 10) &&
                      'force_hbprv=' !== t.substring(0, 12) &&
                      'a=' !== t.substring(0, 2) &&
                      'kwp_0' !== t.substring(0, 6) &&
                      'utm_' !== t.substring(0, 4) &&
                      'code=' !== t.substring(0, 5) &&
                      'bcmt' !== t.substring(0, 4) &&
                      n.push(t);
                  }),
                  n.join('&')
                );
              }
              function at (t) {
                if (!w(t)) return '';
                var e = t.split('?')[0].split('#')[0];
                if (!w(e)) return '';
                e = e.replace(/\/$/, '');
                var n = t.indexOf('#'),
                  r = '';
                n > 0 && (r = t.substring(n + 1));
                var o = t.indexOf('?'),
                  i = n > 0 ? n : t.length,
                  a = '';
                o > 0 && (a = t.substring(o + 1, i));
                var u = it(a);
                w(u) && (e = e + '?' + u);
                var c = it(r);
                return w(c) && (e = e + '#' + c), e;
              }
              function ut (t) {
                return (t = t || ''), t.replace(/\/$/, '');
              }
              function ct (t, e) {
                if (void 0 !== t && void 0 !== e && void 0 !== t[e]) return t[e];
              }
              function ft () {
                var t;
                return (v($e, 'Trident') || v($e, 'MSIE')) &&
                  ((t = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($e)), w(t) && w(t[1]))
                  ? parseFloat(t[1])
                  : -1;
              }
              function st (t, e) {
                var o = /interactive|complete|loaded/;
                if ((r.attachEvent && ft() <= 10 && (o = /complete|loaded/), o.test(r.readyState)))
                  return void t();
                if ((e || ze.addEvent(n, 'load', t), !e && r.addEventListener))
                  return void ze.addEvent(r, 'DOMContentLoaded', t);
                var i = r.documentElement;
                if (i && i.doScroll)
                  try {
                    i.doScroll('left'), t();
                  } catch (a) {
                    setTimeout(W(st, [t, !0]), 50);
                  }
              }
              function lt (t) {
                return t
                  ? void (this.frame = t.document.createElement('iframe'))
                  : void (this.frame = r.createElement('iframe'));
              }
              function dt (t) {
                try {
                  var e,
                    n = t.charAt(0),
                    o = t.substr(1).split(':'),
                    i = o[0],
                    a = O(o[1]) && parseInt(o[1], 10);
                  switch (n) {
                    case '@':
                      e = r.getElementsByTagName(i);
                      break;
                    case '#':
                      e = r.getElementById(i);
                      break;
                    case '$':
                      e = r.getElementsByName(i);
                      break;
                    case '.':
                      e = vt(r, i);
                      break;
                    default:
                      e = r.getElementById(t);
                  }
                  return a === !1 ? e : e[a];
                } catch (u) {
                  return null;
                }
              }
              function pt (t) {
                var e = {};
                (this.input = function (t, n) {
                  return (e[t] = n), this;
                }),
                  (this.get = function (t) {
                    return w(e[t]) ? e[t] : '';
                  }),
                  (this.loadFrom = function (t) {
                    return t && (e = t), this;
                  }),
                  (this.freeze = function () {
                    return e;
                  }),
                  (this.deleteProperty = function (t) {
                    delete e[t];
                  }),
                  t && (e = t);
              }
              function ht (t, e, n, r) {
                try {
                  var o = dt(t),
                    i = Ke.getInstance().hasDOMLoaded();
                  if (o || (!r && i)) return void n.call(null, o || !1);
                  setTimeout(W(ht, [t, e, n, r]), e);
                } catch (a) {
                  setTimeout(W(ht, [t, e, n, r]), e);
                }
              }
              function vt (t, e, n) {
                if (C(r.getElementsByClassName)) return t.getElementsByClassName(e);
                n = n || '*';
                var o,
                  i,
                  a = new RegExp('(^|\\s)' + e + '(\\s|$)'),
                  u = t || r,
                  c = '*' === n && u.all ? u.all : u.getElementsByTagName(n),
                  f = [],
                  s = c.length;
                for (i = 0; i < s; i++) (o = c[i]), a.test(o.className) && f.push(o);
                return f;
              }
              function mt () {
                return (
                  O($e) &&
                  /ip(hone|od|ad)|android|blackberry|kindle|symbian|wap|windows (ce|phone)|palm( os)|iemobile|nokia|mobile/i.test(
                    $e
                  )
                );
              }
              function gt () {
                return (
                  O($e) &&
                  /mac_powerpc|macintosh|mac\\sos|darwin\/|imac\/|macbookpro[\d]/i.test($e)
                );
              }
              function yt () {
                var t;
                return (
                  !(!v($e, 'Gecko') || v($e, 'Trident') || v($e, 'MSIE')) ||
                  !!v($e, 'webkit') ||
                  !!((v($e, 'Trident') || v($e, 'MSIE')) && ((t = ft()), t >= 11))
                );
              }
              function ft () {
                var t;
                return (v($e, 'Trident') || v($e, 'MSIE')) &&
                  ((t = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($e)), w(t) && w(t[1]))
                  ? parseFloat(t[1])
                  : -1;
              }
              function bt (e, n, o, i) {
                if (O(e)) {
                  if ('http' !== e.substr(0, 4) && o === !0) {
                    var a = 'https:' === r.location.protocol;
                    e = (a ? 'https:' : 'http:') + e;
                  }
                  var u = r.createElement('script'),
                    c = r.getElementsByTagName('script')[0],
                    f = !1;
                  (u.type = 'text/javascript'),
                    (u.async = !0),
                    i && i.crossOrigin && (u.crossOrigin = 'anonymous'),
                    n &&
                      'function' == typeof n &&
                      (u.onload = u.onreadystatechange = function () {
                        f ||
                          (this.readyState &&
                            'loaded' !== this.readyState &&
                            'complete' !== this.readyState) ||
                          ((f = !0), t.execSafe(n));
                      }),
                    (u.src = e),
                    c.parentNode.insertBefore(u, c);
                }
              }
              function wt (t) {
                if (O(t)) {
                  var e = r.createElement('script'),
                    n = r.getElementsByTagName('script')[0];
                  (e.type = 'text/javascript'),
                    e.appendChild(r.createTextNode(t)),
                    n.parentNode.insertBefore(e, n);
                }
              }
              function Et () {
                try {
                  return /loaded|complete/.test(r.readyState);
                } catch (t) {
                  return !1;
                }
              }
              function xt (t, e, n) {
                var o;
                if (O(t)) {
                  if ('http' !== t.substr(0, 4)) {
                    var a = 'https:' === r.location.protocol;
                    t = (a ? 'https:' : 'http:') + t;
                  }
                  (o = 'hbcm_if' + n), i('prvReq', n, e);
                  var u =
                      '<!DOCTYPE html><html><head><script type="text/javascript">function makeCall(){var scriptElement = document.createElement(\'script\'), tag = document.getElementsByTagName("script")[0], status = false; scriptElement.type = \'text/javascript\'; scriptElement.async = true; scriptElement.onload = scriptElement.onreadystatechange = function () { if (!status && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) { status = true; window.parent._cR([\'_\'], function(util){util.WZ(\'prvReq\', "' +
                      n +
                      '", false, window);});}};scriptElement.src = "' +
                      t +
                      '"; tag.parentNode.insertBefore(scriptElement, tag);}if(("performance" in window) && ("PerformanceObserver" in window)) {var observer = new PerformanceObserver(function (entries) {try {window.parent.hbCMBidxc.processPrefetchPerformanceEntries(entries.getEntries());} catch (e) {}});observer.observe({entryTypes: [\'resource\']});} </script></head><body onload="makeCall()"></body></html>',
                    c = J(o, u);
                  return X(c)[1];
                }
              }
              function Ot (t, e) {
                var n =
                  '<!DOCTYPE html><html><head><script type="text/javascript">function makeCall(){var scriptElement = document.createElement(\'script\'), tag = document.getElementsByTagName("script")[0], status = false; scriptElement.type = \'text/javascript\'; scriptElement.async = true; scriptElement.onload = scriptElement.onreadystatechange = function () { if (!status && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) { status = true; }};scriptElement.src = "' +
                  e +
                  '"; tag.parentNode.insertBefore(scriptElement, tag);}</script></head><body onload="makeCall()"></body></html>';
                $(t, n);
              }
              function St (t, e) {
                var n = Math.pow(10, e);
                return Math.round(t * n) / n;
              }
              function Tt (t) {
                var e = t.toString(),
                  n = e.indexOf('.');
                return n !== -1
                  ? parseFloat(e.substr(0, Math.min(n + 3, e.length))).toFixed(2)
                  : parseFloat(t).toFixed(2);
              }
              function Ct (t, e) {
                return t * (1 + e / 100);
              }
              function Mt (t) {
                return w(t) ? (!isFinite(t) || isNaN(t) ? 0 : t) : 0;
              }
              function kt (t) {
                return (t = Mt(t)), (t = Tt(t)), parseFloat(t);
              }
              function Dt (t) {
                if (M(t)) {
                  var e = Math.max.apply(null, t);
                  if (!isNaN(e)) return e;
                }
              }
              function _t () {
                return n.location.href.indexOf('mnet_test=') !== -1;
              }
              function Nt () {
                _t() && n.console && n.console.log(Array.prototype.slice.call(arguments));
              }
              function jt (t, e) {
                var n,
                  r = e.split('.'),
                  o = t;
                for (n = 0; n < r.length; ++n) {
                  if (void 0 === o[r[n]]) return;
                  o = o[r[n]];
                }
                return o;
              }
              function Pt (t, e) {
                t.super_ = e;
                for (var n in e.prototype) t.prototype[n] = e.prototype[n];
                t.prototype.constructor = t;
              }
              function Bt (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t;
              }
              function At (t, e) {
                return null !== e && 'object' == typeof e && w(t)
                  ? (Rt(e, function (e, n) {
                      t[n] = At(t[n], e);
                    }),
                    t)
                  : e;
              }
              function Rt (t, e) {
                if (w(t)) {
                  var n = 0,
                    r = t.length;
                  if (M(t)) for (; n < r; n++) e.call(t[n], t[n], n, r);
                  else for (n in t) t.hasOwnProperty(n) && e.call(t[n], t[n], n, 0);
                }
              }
              function Ft (t, e) {
                if (!w(t)) return [];
                var n;
                C(e) ||
                  (e = function (t, e) {
                    return !!t;
                  });
                var r = 0,
                  o = t.length;
                if (M(t)) for (n = []; r < o; r++) e.call(t[r], t[r], r) && n.push(t[r]);
                else {
                  n = {};
                  for (r in t) t.hasOwnProperty(r) && e.call(t[r], t[r], r) && (n[r] = t[r]);
                }
                return n;
              }
              function It (t, e) {
                if (w(t)) {
                  C(e) ||
                    (e = function (t, e) {
                      return !!t;
                    });
                  var n,
                    r = 0,
                    o = t.length;
                  if (M(t)) {
                    for (; r < o; r++) if (((n = e.call(t[r], t[r], r)), w(n))) return n;
                  } else
                    for (r in t)
                      if (t.hasOwnProperty(r) && ((n = e.call(t[r], t[r], r)), w(n))) return n;
                }
              }
              function Wt (t, e) {
                if (!w(t)) return !1;
                C(e) ||
                  (e = function (t, e) {
                    return !!t;
                  });
                var n,
                  r = 0,
                  o = t.length;
                if (M(t)) {
                  for (; r < o; r++) if (((n = e.call(t[r], t[r], r)), n === !0)) return n;
                } else
                  for (r in t)
                    if (t.hasOwnProperty(r) && ((n = e.call(t[r], t[r], r)), n === !0)) return n;
                return !1;
              }
              function Lt (t) {
                if (!M(t)) return {};
                for (var e = 0, n = t.length, r = {}; e < n; e++) r[t[e]] = e + 1;
                return r;
              }
              function Ut (t, e) {
                if (!w(t)) return [];
                var n;
                C(e) ||
                  (e = function (t, e) {
                    return !!t;
                  });
                var r = 0,
                  o = t.length;
                if (M(t)) for (n = []; r < o; r++) n.push(e.call(t[r], t[r], r));
                else {
                  n = {};
                  for (r in t) t.hasOwnProperty(r) && (n[r] = e.call(t[r], t[r], r));
                }
                return n;
              }
              function Ht (t, e, n) {
                if (C(e)) {
                  var r, o, i;
                  if (M(t)) {
                    if (((o = 0), (i = t.length), 'undefined' != typeof n)) r = n;
                    else {
                      for (; o < i && !(o in t); ) o++;
                      if (o >= i) return;
                      r = t[o++];
                    }
                    for (; o < i; o++) o in t && (r = e(r, t[o], o, t));
                    return r;
                  }
                  (n = n || ''), (r = n);
                  for (o in t) t.hasOwnProperty(o) && (r = e(r, t[o], o, t));
                  return r;
                }
              }
              function Xt (t) {
                return 'CSS1Compat' == t.compatMode ? t.documentElement : t.body;
              }
              function Zt (t) {
                var e,
                  n,
                  o = t.document,
                  i = void 0,
                  a = void 0,
                  u = '_mNTemp';
                try {
                  (e = Xt(o)),
                    e ||
                      (o.write('<div id="' + u + '" style="display:none;"></div>'),
                      (e = Xt(t.document)),
                      (n = r.getElementById(u)),
                      n.parentNode.removeChild(n)),
                    e && ((i = e.clientWidth || void 0), (a = e.clientHeight || void 0));
                } catch (c) {}
                return { width: i, height: a };
              }
              function Vt () {
                return Zt(n).width;
              }
              function Yt () {
                return Zt(n).height;
              }
              function Gt () {
                try {
                  return n.screen.width + 'x' + n.screen.height;
                } catch (t) {
                  return '';
                }
              }
              function Jt (t) {
                var e,
                  n,
                  r = t || '0123456789abcdefghijklmnopqrstuvwxyz',
                  o = t.length;
                for (r = r.split(''); o; )
                  (e = Math.floor(Math.random() * o)),
                    (o -= 1),
                    (n = r[o]),
                    (r[o] = r[e]),
                    (r[e] = n);
                return r.join('');
              }
              function qt () {
                return !!(
                  n.JSON &&
                  n.JSON.parse &&
                  'function' == typeof JSON.parse &&
                  n.JSON.stringify &&
                  'function' == typeof JSON.stringify
                );
              }
              function $t () {
                return new Date().getTime();
              }
              function Qt (t, e) {
                if ('object' != typeof t || 'string' != typeof e) return !1;
                if ('string' == typeof t.className) {
                  var n = new RegExp('(^|\\s)' + e + '(\\s|$)');
                  return n.test(t.className);
                }
              }
              function zt (t, e) {
                if (t.style[e]) return t.style[e];
                if (t.currentStyle) return t.currentStyle[e];
                if (r.defaultView && r.defaultView.getComputedStyle) {
                  (e = e.replace(/([A-Z])/g, '-$1')), (e = e.toLowerCase());
                  var n = r.defaultView.getComputedStyle(t, '');
                  return n && n.getPropertyValue(e);
                }
                return null;
              }
              function Kt (t) {
                w(t) && (t.style.cssText = (t.style.cssText || '') + ';display:block!important;');
              }
              function te (t) {
                w(t) && (t.style.cssText = (t.style.cssText || '') + ';display:none!important;');
              }
              function ee (t, e) {
                if (!w(t) && w(e)) return null;
                var n = new RegExp('[?&]' + e + '=([^&#]*)', 'i'),
                  r = n.exec(t);
                return r ? r[1] : null;
              }
              function ne (r, o, i, a) {
                var u = function () {},
                  c = function () {
                    var t = i.fallback || u;
                    t();
                  },
                  f = function () {
                    var t = i.onload || u;
                    t(l.response || l.responseText);
                  },
                  s = function () {
                    var t = i.onerror || u;
                    t();
                  };
                if (!n.XMLHttpRequest) return c(), null;
                var l = new XMLHttpRequest(),
                  d = !1;
                if (((r = (r || e.Constants.POST_METHOD).toUpperCase()), 'withCredentials' in l))
                  l.open(r, o, !0),
                    (l.withCredentials = !w(i.withCredentials) || i.withCredentials);
                else {
                  if (!n.XDomainRequest) return c(), null;
                  l = new XDomainRequest();
                  try {
                    l.open(r, o);
                  } catch (p) {
                    return c(), null;
                  }
                }
                return (
                  (l.onload = l.onreadystatechange = function () {
                    d || (4 == l.readyState && (200 == l.status ? t.execSafe(f) : s(), (d = !0)));
                  }),
                  (l.onerror = s),
                  (l.onabort = s),
                  l.send(a),
                  !0
                );
              }
              function re (t) {
                var e;
                try {
                  t && t.data && 'string' == typeof t.data && qt() && (e = JSON.parse(t.data));
                } catch (n) {}
                return e;
              }
              function oe (t) {
                var e = dt('@head:0');
                if (e) return e.getAttribute(t) || '';
              }
              function ie (t, e, n) {
                for (n = n || '0', t += ''; t.length < e; ) t += n;
                return t;
              }
              function ae () {
                try {
                  r.cookie;
                  return !0;
                } catch (t) {
                  return !1;
                }
              }
              function ue (t) {
                if (!ae()) return null;
                var e = r.cookie.indexOf(t + '='),
                  n = e + t.length + 1;
                if (!e && t !== r.cookie.substring(0, t.length)) return null;
                if (e === -1) return null;
                var o = r.cookie.indexOf(';', n);
                return o === -1 && (o = r.cookie.length), unescape(r.cookie.substring(n, o));
              }
              function ce (t, e, n, o, i, a, u) {
                if (ae()) {
                  var c = new Date();
                  c.setTime(c.getTime()),
                    n && (n = 1000 * n * 60 * 60 * 24),
                    u && (n = 1000 * u * 60);
                  var f = new Date(c.getTime() + n);
                  r.cookie =
                    t +
                    '=' +
                    escape(e) +
                    (n ? ';expires=' + f.toGMTString() : '') +
                    (o ? ';path=' + o : '') +
                    (i ? ';domain=' + i : '') +
                    (a ? ';secure' : '');
                }
              }
              function fe () {
                return !!C(n.navigator.sendBeacon);
              }
              function se () {
                var t = new XMLHttpRequest();
                return 'withCredentials' in t || 'undefined' != typeof XDomainRequest;
              }
              function le (t) {
                var e = $e.toLowerCase();
                return v(e, t);
              }
              function de (t) {
                function e (t) {
                  return t.indexOf('%') !== -1;
                }
                function n (t) {
                  var e = /\d+/g;
                  return t.match(e);
                }
                function r (t) {
                  var e = n(t);
                  return null === e || 0 === e.length ? '' : e[0];
                }
                var o = t.frameElement,
                  i = String(o.height || '0'),
                  a = String(o.width || '0');
                if (e(i) || e(a)) {
                  var u = (o.getBoundingClientRect && o.getBoundingClientRect()) || {};
                  (i = Math.ceil(u.height || o.clientHeight) || 0),
                    (a = Math.ceil(u.width || o.clientWidth) || 0);
                } else (i = r(i)), (a = r(a));
                return a + 'x' + i;
              }
              function pe () {
                return (
                  (n && n.navigator && n.navigator.cookieEnabled) ||
                  (navigator && navigator.cookieEnabled)
                );
              }
              function he () {
                var t;
                try {
                  t = n.localStorage;
                } catch (e) {}
                if (w(t)) {
                  var r = t.getItem('3pck');
                  if (w(r)) return r;
                }
                return pe() === !1 ? 0 : '';
              }
              function ve (t, e) {
                var n = parseInt(t);
                return !isFinite(n) || isNaN(n) ? e : n;
              }
              function me () {
                var t = n.pageXOffset || n.scrollX,
                  e = n.pageYOffset || n.scrollY;
                return { X: t, Y: e };
              }
              function ge (t) {
                var e = dt('#' + t),
                  n = {},
                  r = 0,
                  o = me().X,
                  i = me().Y,
                  a = {};
                return (
                  w(e) && C(e.getBoundingClientRect) && (a = e.getBoundingClientRect()),
                  (n.top_r = ve(a.top, r)),
                  (n.bottom_r = ve(a.bottom, r)),
                  (n.left_r = ve(a.left, r)),
                  (n.right_r = ve(a.right, r)),
                  (n.top = ve(a.top + i, r)),
                  (n.bottom = ve(a.bottom + i, r)),
                  (n.left = ve(a.left + o, r)),
                  (n.right = ve(a.right + o, r)),
                  (n.offsetX = ve(o, r)),
                  (n.offsetY = ve(i, r)),
                  n
                );
              }
              function ye (t, e) {
                try {
                  return (
                    yt()
                      ? (t.document.write(e), t.document.close())
                      : ((t.hbContent =
                          '<!DOCTYPE html><html><head></head><body>' + e + '</body></html>'),
                        t.location.replace('javascript:window["hbContent"];')),
                    !0
                  );
                } catch (n) {
                  return !1;
                }
              }
              function be (t) {
                return (
                  null === t ||
                  'boolean' == typeof t ||
                  'number' == typeof t ||
                  'string' == typeof t ||
                  'symbol' == typeof t ||
                  'undefined' == typeof t
                );
              }
              function we (t, e) {
                return w(e) || (e = 0), new Date(t.getTime() + 60000 * e);
              }
              function Ee (t, e, n) {
                (Ee.count = Ee.count || 0),
                  (Ee.threshold = Ee.threshold || n),
                  setTimeout(function () {
                    t.call(this),
                      w(Ee.threshold)
                        ? (Ee.count++, Ee.count < Ee.threshold && Ee(t, e, n))
                        : Ee(t, e, n);
                  }, e);
              }
              function xe (e, n) {
                var r = e;
                return 'function' == typeof e ? W(t.execSafe, [n || null, e]) : r;
              }
              function Oe () {
                return ie(V(G()), 10) + '' + R(1000000, 9999999) + new Date().getTime().toString();
              }
              function Se (t, e) {
                t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e);
              }
              function Te (t) {
                var e = t.parentNode;
                e.removeChild(t);
              }
              function Ce (t, e) {
                return (
                  Rt(e, function (e, n) {
                    be(e) || M(e) || !t.hasOwnProperty(n) ? (t[n] = e) : (t[n] = Ce(t[n], e));
                  }),
                  t
                );
              }
              function Me (t) {
                return (
                  It(t, function (t) {
                    if (null !== t && 'object' == typeof t) return !0;
                  }) || !1
                );
              }
              function ke (t) {
                if (!w(t)) return t;
                var e = M(t) ? [] : {};
                return Me(t)
                  ? (Rt(t, function (t, n) {
                      if (M(t)) {
                        var r = [];
                        (r = Me(t) ? ke(t) : t.slice()), (e[n] = r);
                      }
                      null !== t && 'object' == typeof t ? (e[n] = ke(t)) : (e[n] = t);
                    }),
                    e)
                  : (Rt(t, function (t, n) {
                      e[n] = t;
                    }),
                    e);
              }
              function De (t) {
                return w(t) && (t < 1 || t * Qe > 1);
              }
              function _e () {
                var t = 'https:' === n.location.protocol,
                  e = t ? 'https:' : 'http:';
                return e + '//' + n.location.hostname;
              }
              function Ne (t) {
                if (qt()) return JSON.stringify(t);
                if (!w(t) || 'object' != typeof t) return null === t ? t + '' : t;
                var e = '';
                return (
                  Rt(t, function (n, r) {
                    void 0 !== n &&
                      ('object' == typeof n && (n = Ne(n)),
                      (e += M(t) ? n : r + ':' + n),
                      (e += ','));
                  }),
                  (e = e.slice(0, e.length - 1)),
                  M(t) ? '[' + e + ']' : '{' + e + '}'
                );
              }
              function je (t) {
                if ('http' !== t.substr(0, 4)) {
                  var e = 'https:' === r.location.protocol,
                    n = (e ? 'https:' : 'http:') + t;
                  return n + t;
                }
                return t;
              }
              function Pe (t, e) {
                return t.length > e ? t.substr(0, e) : t;
              }
              function Be (t) {
                for (var e = t.parent, r = t; e !== n.top; ) (r = r.parent), (e = e.parent);
                return r;
              }
              function Ae (t) {
                new Image().src = t;
              }
              function Re (t, e, o) {
                var i,
                  a = Z(o);
                e &&
                  w(a) &&
                  (n.postMessage && C(a.postMessage)
                    ? a.postMessage(t, '*')
                    : e &&
                      ('object' == typeof t && ((t = Ne(t)), (t = escape(t))),
                      (i = e + '#' + r.location.href),
                      (o.src = i),
                      (a.location = i.replace(/#.*$/, '') + '#_CPM$' + t)));
              }
              function Fe () {
                return !!n.EventSource;
              }
              function Ie () {
                const $___old_8ff096f95de70643 = {}.constructor.getOwnPropertyDescriptor(
                  window,
                  'localStorage'
                );
                try {
                  if ($___old_8ff096f95de70643)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___stub_a011c28886b08277.localStorage
                    ));
                  return function () {
                    var t = 'mntest';
                    try {
                      if ('localStorage' in n && null !== n.localStorage)
                        return n.localStorage.setItem(t, t), n.localStorage.removeItem(t), qt();
                    } catch (e) {}
                    return !1;
                  }.apply(this, arguments);
                } finally {
                  if ($___old_8ff096f95de70643)
                    ({}.constructor.defineProperty(
                      window,
                      'localStorage',
                      $___old_8ff096f95de70643
                    ));
                }
              }
              function We () {
                return mt() && !Ie();
              }
              function Le (t, e) {
                var n = 0;
                return (
                  Ut(t, function (t) {
                    e && t[e] && (n += t[e]);
                  }),
                  n
                );
              }
              function Ue (t, e) {
                if (e) {
                  var n = Le(t, e),
                    r = R(0, 100),
                    o = 0,
                    i = null;
                  return n < 1 || n > 100
                    ? i
                    : (i = It(t, function (t) {
                        if (t[e]) return (o += t[e]), r < o ? t : void 0;
                      }));
                }
              }
              function He () {
                return n.navigator && n.navigator.vendor;
              }
              function Xe () {
                var t =
                  (navigator.userAgent.indexOf('CriOS') === -1 &&
                    navigator.userAgent.indexOf('FxiOS') === -1) ||
                  !1;
                if (!t) return !1;
                var e = navigator.userAgent.toLowerCase(),
                  n = (navigator.vendor && navigator.vendor.indexOf('Apple') > -1) || !1,
                  r = (e.indexOf('safari') !== -1 && e.indexOf('chrome') === -1) || !1;
                return n || r;
              }
              function Ze (t) {
                return w(t) && 'undefined' != typeof t ? t.getAttribute('id') || t.id : '';
              }
              function Ve (t, e, n) {
                return t.replace(new RegExp(e, 'g'), n);
              }
              function Ye (t) {
                for (var e, r = n; r; ) {
                  try {
                    if (r.frames[t]) {
                      e = r;
                      break;
                    }
                  } catch (o) {}
                  if (r === n.top) break;
                  r = r.parent;
                }
                return e;
              }
              function Ge (t) {
                var e = dt('@iframe'),
                  n = It(e, function (e) {
                    if (e.contentWindow === t) return e.id;
                  });
                return dt('#' + n);
              }
              function Je (t) {
                return h(t) ? Ge(t) : t.frameElement;
              }
              var qe = {},
                $e = navigator.userAgent,
                Qe = Math.random(),
                ze = {
                  addEvent: function (t, e, n) {
                    t.addEventListener
                      ? t.addEventListener(e, n, !1)
                      : t.attachEvent && t.attachEvent('on' + e, n),
                      (t = null);
                  },
                  removeEvent: function (t, e, n) {
                    t.removeEventListener
                      ? t.removeEventListener(e, n)
                      : t.detachEvent && t.detachEvent('on' + e, n),
                      (t = null);
                  },
                };
              (P.prototype.getParam = function (t) {
                return this.map[t] || '';
              }),
                (P.prototype.getDecodedParam = function (t) {
                  var e = this.map[t];
                  return (e && _(e)) || '';
                });
              var Ke = (function () {
                function e () {
                  function e () {
                    var t;
                    for (o = !0; i.length > 0; ) (t = i.shift()), t.call(null);
                    i = [];
                  }
                  function n () {
                    t.execSafe(e);
                  }
                  var i = [];
                  (this.onDOMLoad = function (t) {
                    return i.push(t), 1 !== i.length || o ? void (o && n()) : void st(n);
                  }),
                    (this.hasDOMLoaded = function () {
                      return o;
                    }),
                    (this.isDOMInteractive = function () {
                      return o || /interactive/.test(r.readyState);
                    });
                }
                var n = null,
                  o = !1;
                return {
                  getInstance: function () {
                    return null === n && (n = new e()), n;
                  },
                };
              })();
              return (
                (lt.prototype.set = function (t, e) {
                  return (this.frame[t] = e), this;
                }),
                (lt.prototype.setStyle = function (t) {
                  var e;
                  for (e in t) t.hasOwnProperty(e) && (this.frame.style[e] = t[e]);
                  return this;
                }),
                (lt.prototype.overrideStyle = function (t) {
                  return (this.frame.style.cssText = t), this;
                }),
                (lt.prototype.done = function () {
                  return this.frame;
                }),
                {
                  ll: ue,
                  la: ce,
                  wc: ie,
                  y: D,
                  Y: _,
                  VG: k,
                  du: le,
                  lm: Jt,
                  Zx: ee,
                  UW: H,
                  sJ: U,
                  cm: S,
                  C: T,
                  Td: O,
                  inIframe: B(),
                  wG: B,
                  tG: R,
                  QX: F,
                  s: I,
                  Fm: j,
                  w: P,
                  n: N,
                  eventLib: ze,
                  gb: C,
                  Qe: M,
                  ua: n.navigator.userAgent.toLowerCase(),
                  isDocumentWritable: yt(),
                  J: K,
                  wZ: Q,
                  XZ: ot,
                  e: m,
                  j: X,
                  GZ: Z,
                  H: W,
                  U: lt,
                  G: ht,
                  D: vt,
                  Zu: V,
                  wb: Y,
                  R: v,
                  TE: dt,
                  Q: Se,
                  uV: Te,
                  Jn: $,
                  hJ: Ot,
                  by: ct,
                  DOMLoadObserver: Ke,
                  Gb: mt,
                  MW: gt,
                  F: J,
                  dw: bt,
                  BX: wt,
                  lW: xt,
                  WZ: l,
                  yV: d,
                  l: i,
                  mc: y,
                  x: Tt,
                  Z: Nt,
                  UG: _t,
                  AX: G,
                  z: rt,
                  b: nt,
                  MH: Pt,
                  Zp: tt,
                  clock: new o(),
                  k: Bt,
                  kW: At,
                  kV: Et,
                  X: a,
                  Hd: s,
                  RV: c,
                  md: f,
                  ZT: w,
                  Vm: x,
                  Qb: A,
                  i: b,
                  dj: E,
                  h: Lt,
                  map: Ut,
                  reduce: Ht,
                  filter: Ft,
                  u: jt,
                  W: It,
                  some: Wt,
                  a: Rt,
                  Fl: et,
                  az: Zt,
                  gG: Vt,
                  S: Yt,
                  lU: Gt,
                  O: qt,
                  Wb: $t,
                  gZ: St,
                  oN: ut,
                  q: z,
                  Wd: Dt,
                  zN: Qt,
                  bR: u,
                  lx: zt,
                  nb: Kt,
                  Qn: te,
                  V: ne,
                  uW: ft,
                  hR: re,
                  uY: fe,
                  Ad: se,
                  Zl: de,
                  cW: he,
                  E: ge,
                  UZ: L,
                  gc: ve,
                  A: pt,
                  m: at,
                  WY: ye,
                  t: q,
                  Um: be,
                  c: we,
                  kx: Ee,
                  Wa: xe,
                  o: p,
                  bh: h,
                  AZ: Oe,
                  Rn: Ct,
                  I: Mt,
                  QZ: kt,
                  QY: Ce,
                  N: ke,
                  xV: De,
                  ul: _e,
                  em: Ne,
                  v: je,
                  ck: Pe,
                  VU: me,
                  dv: Be,
                  g: Ae,
                  postMessage: Re,
                  Gd: Fe,
                  Jb: Ie,
                  M: We,
                  P: Ue,
                  p: g,
                  yG: He,
                  Vc: Xe,
                  B: oe,
                  kl: Ze,
                  Ab: Ve,
                  T: Ye,
                  wd: Je,
                }
              );
            }.apply(this, arguments);
          } finally {
            if ($___old_547133ac72dd5cf8)
              ({}.constructor.defineProperty(
                Navigator.prototype,
                'userAgent',
                $___old_547133ac72dd5cf8
              ));
          }
        });
        _cD('q', ['_', 'mnrp', 'res'], function (n, r, e) {
          'use strict';
          function o (r) {
            var e = {};
            return (
              (e.push = function () {
                c(arguments);
              }),
              n.Qe(r) && c(r),
              e
            );
          }
          function c (n) {
            var e, o;
            for (e = 0, o = n.length; e < o; e++)
              try {
                n[e].call(null);
              } catch (c) {
                window.console && window.console.error(c),
                  (c.message = 'Exception in command queue: ' + c.message),
                  r.pushError(c);
              }
          }
          return o;
        });
        _cD('boxm', ['_'], function (r) {
          'use strict';
          function n () {
            var n = 0,
              t = !1;
            this.rand_normal = function (a, o) {
              if (((a = r.I(a)), (o = r.I(o)), 0 === o)) return a;
              var e,
                i,
                u,
                f,
                c,
                h = 0;
              if (t === !1) {
                for (; 0 === h || h > 1; )
                  (i = 2 * Math.random() - 1), (u = 2 * Math.random() - 1), (h = i * i + u * u);
                (f = Math.sqrt((-2 * Math.log(h)) / h)),
                  (c = i * f),
                  (n = u * f),
                  (t = !0),
                  (e = c * o + a);
              } else (t = !1), (e = n * o + a);
              return e;
            };
          }
          return new n();
        });
        _cD('nic', ['mnrp', window, '_', 'res', 'performanceobserver'], function (e, t, r, n, a) {
          'use strict';
          function o (e) {
            var t = r.k({}, m);
            return (e = r.k(t, e));
          }
          function c (e, t, n) {
            r.Qe(e) || (e = [e]),
              (t = o(t)),
              (n = n || function () {}),
              r.a(e, function (e) {
                var r = a.H(e, t, n);
                switch (t.type) {
                  case 'img':
                    s(e, r);
                    break;
                  case 'script':
                    i(e, t, r);
                    break;
                  case 'xhr':
                    u(e, t, r);
                    break;
                  case 'sb':
                    f(e, t);
                    break;
                  case 'ifScr':
                    d(e, t, r);
                }
              });
          }
          function i (t, n, a) {
            n.forceProtocol === !0 && (t = r.v(t)),
              r.ZT(n.attribute) &&
                r.a(n.attribute, function (e, t) {
                  o.setAttribute(t, e);
                });
            var o = document.createElement('script'),
              c = document.getElementsByTagName('script')[0],
              i = !1;
            (o.type = 'text/javascript'),
              (o.async = !0),
              a &&
                'function' == typeof a &&
                ((o.onload = o.onreadystatechange = function () {
                  i ||
                    (this.readyState &&
                      'loaded' !== this.readyState &&
                      'complete' !== this.readyState) ||
                    ((i = !0), e.execSafe(a));
                }),
                (o.onerror = function () {
                  a.call(null, 'error');
                })),
              (o.src = t),
              c.parentNode.insertBefore(o, c);
          }
          function s (e, t) {
            var n = new Image();
            (e = r.ck(e, 8000)),
              (n.onload = t),
              (n.src = e),
              (n.onerror = function () {
                t.call(null, 'error');
              });
          }
          function l (e, t) {
            var n = new XMLHttpRequest(),
              a = 'POST' === t.method ? e.url : e;
            return 'withCredentials' in n
              ? (n.open(t.method, a, !0),
                (n.withCredentials = !r.ZT(t.withCredentials) || t.withCredentials),
                n)
              : ((n = new XDomainRequest()), n.open(t.method, e), n);
          }
          function u (e, t, r) {
            var n,
              a = !1,
              o = e.payload;
            try {
              n = l(e, t);
            } catch (c) {
              r.call(null, h, 'error');
            }
            (n.onload = n.onreadystatechange = function () {
              if (!a && 4 === this.readyState)
                return (
                  (a = !0),
                  200 === this.status
                    ? r.call(null, null, this.response || this.responseText)
                    : r.call(null, this.state, 'error')
                );
            }),
              n.send(o);
          }
          function d (e, t, n) {
            var a = '';
            (e = r.v(e)), r.l('prvReq', t.name, n);
            var o =
                '<!DOCTYPE html><html><head><script type="text/javascript">function makeCall(){var scriptElement = document.createElement(\'script\'), tag = document.getElementsByTagName("script")[0], status = false; scriptElement.type = \'text/javascript\'; scriptElement.async = true; scriptElement.onload = scriptElement.onreadystatechange = function () { if (!status && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) { status = true; window.parent._cR([\'_\'], function(util){util.WZ(\'prvReq\', "' +
                t.name +
                '", false, window);});}};scriptElement.src = "' +
                e +
                '"; tag.parentNode.insertBefore(scriptElement, tag);}if(("performance" in window) && ("PerformanceObserver" in window)) {var observer = new PerformanceObserver(function (entries) {try {window.parent.hbCMBidxc.processPrefetchPerformanceEntries(entries.getEntries());} catch (e) {}});observer.observe({entryTypes: [\'resource\']});} </script></head><body onload="makeCall()"></body></html>',
              c = r.F(a, o);
            return r.j(c)[1];
          }
          function f (e, n) {
            if (!r.uY()) return !1;
            var o = t.navigator.sendBeacon(e.url, e.payload),
              c = o === !1 ? 'error' : 'success';
            a.addRecord(n, c);
          }
          function p (e, r, n) {
            var c, i;
            (n = n || function () {}), (r = o(r)), (i = a.H(e, r, n));
            try {
              c = new t.EventSource(e, { withCredentials: !0 });
            } catch (s) {
              i.call(null, 'error');
            }
            return (
              'undefined' != typeof c &&
                ((c.onopen = i),
                (c.onerror = function () {
                  i.call(null, 'error');
                })),
              c
            );
          }
          var m = { tags: ['misc'], method: 'GET', type: 'img', forceProtocol: !1 },
            h = 500;
          return { submit: c, stream: p };
        });
        _cD('osConfig', function () {
          'use strict';
          var e = [
              { id: 1, name: 'iOS', regex: '(Puffin)\\/([\\d\\.]+)(IP|IT)' },
              { id: 2, name: 'Android', regex: '(Puffin)\\/([\\d\\.]+)(AP|AT)' },
              { id: 3, name: 'Windows', regex: '(Puffin)\\/([\\d\\.]+)(WP|WT)' },
              {
                id: 4,
                name: 'FireOS',
                regex:
                  '(kfapwa|kfapwi|kfarwi|kfaswi|kfjwa|kfjwi|kfot|kfsawa|kfsawi|kfsowi|kfthwa|kfthwi|kftt|kftbwi|kfmewi|kffowi)',
              },
              {
                id: 5,
                name: 'ChromeOS',
                regex: '(CrOS) [a-z0-9_]+ [\\s\\/]?([\\d\\w\\.\\-]+)',
                versions: ['(CrOS) [a-z0-9_]+ [\\s\\/]?([\\d\\w\\.\\-]+)'],
              },
              { id: 6, name: 'ATV OS X', regex: '(AppleTV)' },
              {
                id: 7,
                name: 'BlackBerryOS',
                regex: '(?:\\s|^|\\()(BlackBerry|BB10|RIM[\\s]*Tablet[\\s]*os|Playbook)',
                versions: [
                  '(RIM[\\s]*Tablet[\\s]*OS)[-\\s\\/]*([\\d\\w\\.\\-]+)',
                  '(Version)[\\s\\/]([\\d\\w\\.\\-]+)',
                  '(BB10);.+Version[-\\s\\/]*([\\d\\w\\.\\-]+)',
                  '(Black[Bb]erry)[0-9a-z]+[-\\s\\/]*([\\d\\w\\.\\-]+)',
                  '(Black[Bb]erry).+Version[-\\s\\/]*([\\d\\w\\.\\-]+)',
                ],
              },
              {
                id: 8,
                name: 'iOS',
                regex: '(iPhone|iPad|iPod|iPh OS|CPU OS)',
                versions: [
                  '(os)[\\s\\/]([\\d_\\.\\-]+)',
                  '(iPhone|iPad|iPod).*Mac OS X[\\s\\/]([\\d\\w\\.\\-]+)',
                ],
              },
              {
                id: 9,
                name: 'SymbianOS',
                regex:
                  '(series [\\s\\/]*([\\d\\w\\.\\-]+)|SymbOS|SymbianOS|s30plus|Symbian OS|Symbian\\/3)',
                versions: [
                  '(symbianOS)[\\s\\/]([\\d\\w\\.\\-]+)',
                  '(Symbian)[\\s\\/]([\\d\\w\\.\\-]+)',
                  '(Series)[\\s\\/]*([\\d\\w\\.\\-]+)',
                ],
              },
              {
                id: 10,
                name: 'WindowsPhone',
                regex: '(Windows Phone|^UCWEB.*; (wds)|XBLWP7)',
                versions: [
                  '(Windows NT)[\\s\\/]([\\d\\w\\.\\-]+)',
                  '(Windows phone)[\\s\\/]([\\d\\w\\.\\-]+)',
                  '(Windows Phone) (?:OS[ \\/])?([\\d\\w\\.\\-]+)',
                  '^UCWEB.*; (wds) ([\\d\\w\\.\\-]+)',
                ],
              },
              {
                id: 11,
                name: 'Windows',
                regex: '(windows[\\s+]*nt[\\s+]*\\d+\\.*\\d*)',
                versions: ['(windows[\\s+]*nt)[\\s+]*(\\d+\\.*\\d*)'],
              },
              {
                id: 12,
                name: 'Windows',
                regex: '(Windows)[+\\s]*([\\d\\w\\.\\-]+)',
                versions: ['(Windows)[+\\s]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 13,
                name: 'Windows',
                regex: '(Win ?(95|98|3.1|NT|ME|2000|32|16)|WinNT)',
                versions: [
                  '(WinNT)[\\s\\/]*([\\d\\w\\.\\-]+)',
                  '(Win) ?(95|98|3.1|NT|ME|2000|32|16)',
                ],
              },
              {
                id: 14,
                name: 'Tizen',
                regex: '(Tizen)',
                versions: ['(Tizen)[\\s\\/+]([\\d\\w\\.\\-]+)'],
              },
              {
                id: 15,
                name: 'Mac_OS_X',
                regex: '(os x|mac os|Mac_PowerPC)',
                versions: [
                  '(os x)[\\s\\/]([\\d\\w\\.\\-]+)',
                  '(os x)[\\s\\/]([\\d_\\.\\-]+)',
                  '(CPU OS)[\\s\\/]([\\d\\w\\.\\-]+)',
                ],
              },
              {
                id: 16,
                name: 'Mac_OS_X',
                regex: '(Dar)(win)\\/(9).(\\d+).*\\((?:i386|x86_64|Power Macintosh)\\)',
              },
              {
                id: 17,
                name: 'Mac_OS_X',
                regex: '(Dar)(win)\\/(10).(\\d+).*\\((?:i386|x86_64|Power Macintosh)\\)',
              },
              {
                id: 18,
                name: 'Mac_OS_X',
                regex: '(Dar)(win)\\/(11).(\\d+).*\\((?:i386|x86_64|Power Macintosh)\\)',
              },
              {
                id: 19,
                name: 'Mac_OS_X',
                regex: '(Dar)(win)\\/(12).(\\d+).*\\((?:i386|x86_64|Power Macintosh)\\)',
              },
              {
                id: 20,
                name: 'Mac_OS_X',
                regex: '(Dar)(win)\\/(13).(\\d+).*\\((?:i386|x86_64|Power Macintosh)\\)',
              },
              {
                id: 21,
                name: 'Android',
                regex: '(Android|adr|Silk-Accelerated)',
                versions: ['(Android)[\\s\\/]([\\.\\d\\w\\-]+)'],
              },
              { id: 22, name: 'Solaris', regex: '(SunOS)' },
              {
                id: 23,
                name: 'Debian',
                regex: '(Debian)',
                versions: ['(Debian)[\\d]*[-\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 24,
                name: 'Fedora',
                regex: '(Fedora)',
                versions: ['(Fedora)[\\s\\/;]([\\d\\.\\-]*)'],
              },
              {
                id: 25,
                name: 'Linux',
                regex: '(Linux)',
                versions: [
                  '()([\\d\\w\\.\\-]+)[\\s\\/]*Linux',
                  '(Linux)[\\s\\/;]([\\d\\w\\.\\-]*)',
                ],
              },
              {
                id: 26,
                name: 'Ubuntu',
                regex: '(Ubuntu)',
                versions: ['(Ubuntu)[\\s\\/;]([\\d\\.\\-]*)'],
              },
              {
                id: 27,
                name: 'AmigaOS',
                regex: '(AmigaOS)',
                versions: ['(AmigaOS)[\\s\\/;]([\\d\\.\\-]*)'],
              },
              {
                id: 28,
                name: 'SunOS',
                regex: '(SunOS)',
                versions: ['(SunOS)[\\s\\/;]([\\d\\w\\.\\-]*)'],
              },
              {
                id: 29,
                name: 'OpenBSD',
                regex: '(OpenBSD)',
                versions: ['(OpenBSD)[\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 30,
                name: 'NetBSD',
                regex: '(NetBSD)',
                versions: ['(NetBSD)[\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 31,
                name: 'FreeBSD',
                regex: '(FreeBSD)',
                versions: ['(FreeBSD)[\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              { id: 32, name: 'J2ME', regex: '(J2ME)' },
              { id: 33, name: 'MAUI', regex: '(MAUI)' },
              {
                id: 34,
                name: 'Bada',
                regex: '(Bada)',
                versions: ['(Bada)[\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 35,
                name: 'MIDP',
                regex: '(MIDP)',
                versions: ['(MIDP)[-\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              { id: 36, name: 'Windows', regex: '(windows)' },
              {
                id: 37,
                name: 'Playstation',
                regex: '(Playstation portable)',
                versions: ['(Playstation portable)[-\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 38,
                name: 'Playstation',
                regex: '(playstation)',
                versions: ['(playstation)[-\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 39,
                name: 'PalmOS',
                regex: '(PalmOS)',
                versions: ['(Palm os)[-\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 40,
                name: 'BREW',
                regex: '(BREW|BREW MP|BMP)',
                versions: ['(Brew ?MP|BMP)[-\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 41,
                name: 'webOS',
                regex: '(hpw|web)OS',
                versions: ['(hpw|web)OS[-\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 42,
                name: 'beOS',
                regex: '(beOS)',
                versions: ['(beOS)[-\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 43,
                name: 'webTV',
                regex: '(webTV)',
                versions: ['(webTV)[-\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              {
                id: 44,
                name: 'GoogleTV',
                regex: '(GoogleTV)',
                versions: ['(GoogleTV)[-\\s\\/]*([\\d\\w\\.\\-]+)'],
              },
              { id: 45, name: 'FireFoxOS', regex: '\\((?:Mobile|Tablet);.+Firefox' },
              { id: 46, name: 'unknown', regex: '(.*)' },
            ],
            i = {
              11: 'XP',
              16: '3.1',
              '10.0': '10',
              '5.0': '2000',
              '6.0': 'vista',
              5.1: 'XP',
              6.1: '7',
              5.2: '2003',
              6.2: '8',
              6.3: '8.1',
              95: '95',
              32: '95',
              98: '98',
            };
          return { osList: e, windowVersionsMap: i };
        });
        _cD('osdetector', ['osConfig', '_'], function (r, n) {
          'use strict';
          function e (e) {
            if (s === !0) return t;
            s = !0;
            var i = r.osList,
              o = r.windowVersionsMap;
            for (var a in i)
              if (i.hasOwnProperty(a)) {
                var u = i[a],
                  f = u.regex,
                  v = u.name,
                  c = new RegExp(f, 'i');
                if (c.test(e)) {
                  if (((t.osId = u.id), 'unknown' === v)) return (t.osVersion = void 0), t;
                  var w = u.versions;
                  if (!n.ZT(w)) return t;
                  for (var d in w)
                    if (w.hasOwnProperty(d)) {
                      var g = w[d],
                        p = new RegExp(g, 'i'),
                        V = p.exec(e);
                      if (p.test(e)) {
                        var x = V[2];
                        if (!n.ZT(x)) continue;
                        return 'Windows' === u.name && o[x] && (x = o[x]), (t.osVersion = x), t;
                      }
                    }
                }
              }
          }
          function i () {
            var r = e(n.ua);
            return r.osId;
          }
          function o () {
            var r = e(n.ua);
            return r.osVersion;
          }
          var s = !1,
            t = {};
          return { ZJ: i, getOsVersion: o };
        });
        _cD('performanceobserver', [window, 'lc', 'res', 'rqc', '_', 'inmemdatasource'], function (
          r,
          e,
          n,
          t,
          a,
          o
        ) {
          'use strict';
          function i () {
            if (o && a.gb(o.getStore)) return o.getStore('nalog');
          }
          function f (r) {
            var e = i();
            a.ZT(e) && e.push(r);
          }
          function c (r, e) {
            var n = a.Zx(e, 'prvReqId');
            a.ZT(n) && (r.reqid = n);
          }
          function u (r, e) {
            (r.tags = e.tags), (r.tp = e.type);
          }
          function s (r) {
            (r.rst = 0), (r.sz = 0);
          }
          function p (r, e) {
            var n = {};
            (n.iwl = a.kV()), (n.fld = 'error' === e), s(n), u(n, r), f(n);
          }
          function l (e) {
            var n = {};
            if (!a.ZT(r.performance) || !a.gb(r.performance.getEntriesByName)) return n;
            var t = r.performance.getEntriesByName(e);
            return a.ZT(t)
              ? ((t = t[0]),
                (n.iwl = a.kV()),
                t && t.name
                  ? ((n.rst = Math.floor(t.duration)), (n.sz = t.transferSize), n)
                  : (s(n), n))
              : n;
          }
          function v (r, e) {
            var n = 'POST' === e ? r.url : r;
            return (n = a.v(n)), (n = n.replace(/\"/g, '%22'));
          }
          function y () {
            var e,
              n = Array.prototype.slice.call(arguments),
              t = n.shift(),
              o = n.shift(),
              i = n.shift();
            if (
              ('error' === n[n.length - 1] && (e = n.pop()),
              !a.ZT(r.performance) || !a.gb(r.performance.getEntriesByName))
            )
              return i.apply(null, n);
            var s = v(t, o.method),
              p = l(s);
            return (p.fld = 'error' === e), u(p, o), c(p, s), f(p), i.apply(null, n);
          }
          function m (r, e, n) {
            var t = Array.prototype.slice.call(arguments);
            return a.H(y, t);
          }
          function d (r, e) {
            var n = i();
            a.ZT(n) && (n[e] = r);
          }
          function g (r) {
            var e = i();
            if (a.ZT(e))
              return a.W(e, function (e, n) {
                if (e.reqid === r) return { entry: e, index: n };
              });
          }
          function T (r) {
            a.a(r, function (r) {
              var e = a.Zx(r.name, 'prvReqId');
              if (a.ZT(e)) {
                var n = g(e);
                if (a.ZT(n) && a.ZT(n.entry)) {
                  var t = l(r.name);
                  (n.entry = a.k(n.entry, t)), d(n.entry, n.index);
                }
              }
            });
          }
          function Z () {
            const $___old_000a652fa77e3b28 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'PerformanceObserver'
              ),
              $___old_dbe2d5ae117f12d4 = {}.constructor.getOwnPropertyDescriptor(
                window,
                'PerformanceObserver'
              );
            try {
              if ($___old_000a652fa77e3b28)
                ({}.constructor.defineProperty(
                  window,
                  'PerformanceObserver',
                  $___stub_c0f1d0ee9b6f2da6.PerformanceObserver
                ));
              if ($___old_dbe2d5ae117f12d4)
                ({}.constructor.defineProperty(
                  window,
                  'PerformanceObserver',
                  $___stub_c0f1d0ee9b6f2da6.PerformanceObserver
                ));
              return function () {
                if (r.PerformanceObserver)
                  try {
                    var e = new PerformanceObserver(function (r) {
                      T(r.getEntries());
                    });
                    e.observe({ entryTypes: ['resource'] });
                  } catch (n) {}
              }.apply(this, arguments);
            } finally {
              if ($___old_000a652fa77e3b28)
                ({}.constructor.defineProperty(
                  window,
                  'PerformanceObserver',
                  $___old_000a652fa77e3b28
                ));
              if ($___old_dbe2d5ae117f12d4)
                ({}.constructor.defineProperty(
                  window,
                  'PerformanceObserver',
                  $___old_dbe2d5ae117f12d4
                ));
            }
          }
          return Z(), { H: m, addRecord: p };
        });
        _cD('bc', function () {
          'use strict';
          return {
            DealType: {},
            DFP: {},
            DYNAMIC_BIDDER: {},
            Properties: {},
            ReuseReasons: {},
            SERVER_SIDE_PIXEL_LOGS: {},
            SPAM: {},
            Status: {},
            Type: {},
          };
        });
        _cD('cc', function () {
          'use strict';
          return {
            PROVIDER_IDS: {},
            AUTO_REFRESH: {},
            FEATURE: {},
            HBINFO: {},
            ID: {},
            FAILOVER: {},
            LOGS: {},
            SERVICE: {},
            NATIVE: {},
            NG_PREFIRE: {},
          };
        });
        _cD('lc', function () {
          'use strict';
          return {
            START: {},
            END: {},
            PROVIDER: {},
            REQUEST: {},
            RESPONSE: {},
            AUCTION: {},
            BID: {},
            DFP: {},
            MISC: {},
            DIMENSIONS: {},
            VIEW: {},
            TEST_DATA: {},
            PROPS: {},
            FEEDBACK: {},
            MNET_ADX: {},
            SPAM: {},
          };
        });
        _cD('plc', function () {
          'use strict';
          return {};
        });
        _cD('prc', function () {
          'use strict';
          return {};
        });
        _cD('psrc', function () {
          'use strict';
          return {};
        });
        _cD('tc', function () {
          'use strict';
          return { DFP_KEYS: {}, PROPERTIES: {} };
        });
        _cD('ac', function () {
          'use strict';
          return { Properties: {}, Status: {} };
        });
        _cD('ckc', function () {
          'use strict';
          return { GET: {} };
        });
        _cD('mc', function () {
          'use strict';
          return {
            Config: {},
            LocalStorageProperties: {},
            Resell: {},
            ExternalProvider: {},
            BidPredictor: {},
            Algorithms: {},
            Parameters: {},
          };
        });
        _cD('pec', function () {
          'use strict';
          return {};
        });
        _cD('pmc', function () {
          'use strict';
          return {};
        });
        _cD('rqc', function () {
          'use strict';
          return { Params: {}, Type: {}, GeoParams: {} };
        });
        _cD('res', function () {
          'use strict';
          return {
            Event: {},
            Clock: {},
            EventType: {},
            Macro: {},
            Url: {},
            Bidder: {},
            CSync: {},
            LOGS: {},
            FEEDBACK: {},
            TemplateParams: {},
          };
        });
        _cD('tlpxc', function () {
          'use strict';
          return { Properties: {} };
        });
        _cD('yc', function () {
          'use strict';
          return {};
        });
        _cD('rsc', function () {
          'use strict';
          return { Params: {}, Meta: {}, ProviderInfo: {}, Response: {}, Spam: {} };
        });
        _cD('ruleengineconstants', function () {
          'use strict';
          return {};
        });
        _cD('tcfcons', function () {
          'use strict';
          return {};
        });
        _cD('macm', ['_', 'res'], function (n, t) {
          'use strict';
          function i () {
            if (!n.ZT(_))
              try {
                _ = window._cR(['em'])[0];
              } catch (t) {
                _ = null;
              }
            return _;
          }
          function u () {
            if (!n.ZT(r))
              try {
                r = window._cR(['dem'])[0];
              } catch (t) {
                r = null;
              }
            return r;
          }
          function E () {
            if (!n.ZT(I))
              try {
                I = window._cR(['ccmg'])[0];
              } catch (t) {
                I = null;
              }
            return I;
          }
          function p () {
            if (!n.ZT(S))
              try {
                S = window._cR(['tcfm'])[0];
              } catch (t) {
                S = null;
              }
            return S;
          }
          function e () {
            function t (t) {
              var i = new RegExp(c, 'g'),
                u = i.exec(t),
                E = t;
              return n.ZT(u) && n.Qe(u) && u[1] && (E = u[1]), E;
            }
            var i = {};
            (this.input = function (n, u) {
              return (i[t(n)] = u), this;
            }),
              (this.getMacroMap = function () {
                return i;
              });
          }
          function T (t) {
            function i (i, u) {
              var E = new RegExp(c, 'g');
              return i.replace(E, function (i, E) {
                var p, e;
                return (p = t[E]), p ? ((e = p.call(this)), u && (e = n.y(e)), e) : '';
              });
            }
            var u = this;
            this.resolveMacros = function (t, E) {
              if (n.Td(t))
                return (t = n.Qe(t)
                  ? n.map(t, function (n) {
                      return u.resolveMacros(n, E);
                    })
                  : i(t, E));
            };
          }
          var _,
            r,
            S,
            I,
            c = '%%([A-Za-z_]+)%%',
            R = i(),
            C = new e();
          n.ZT(R) &&
            C.input('%%PARTNER_ID%%', R.lk)
              .input('%%INTEGRATION_TYPE%%', R.lB)
              .input('%%PUBLISHER%%', R.sJ)
              .input('%%PUBLISHER_HOST%%', R.dz)
              .input('%%REFERRER%%', R.VJ)
              .input('%%DOMAIN%%', R.gY)
              .input('%%CID%%', R.kl)
              .input('%%HOSTNAME%%', R.UW)
              .input('%%VIEW_ID%%', R.dl)
              .input('%%VISIT_ID%%', R.JR)
              .input('%%VISITOR_ID%%', R.kc)
              .input('%%DEVICE_TYPE%%', R.Zw)
              .input('%%AKAMAI_DEVICE_TYPE%%', R.pF)
              .input('%%SESSION_DEPTH%%', R.oR)
              .input('%%COUNTRY_CODE%%', R.e)
              .input('%%STATE_CODE%%', R.Rb)
              .input('%%CITY_CODE%%', R.U)
              .input('%%AB_TESTS%%', R.H)
              .input('%%PROTOCOL%%', R.wb)
              .input('%%GPT_TAG_DELAY%%', R.FG)
              .input('%%INIT_DELAY%%', R.Gb)
              .input('%%HTTPS_FLAG%%', R.nF)
              .input('%%AD_BLOCK_DETECTED%%', R.ZN)
              .input('%%IS_AMP_REQUEST%%', R.w)
              .input('%%VERSION%%', R.getVersion)
              .input('%%SEND_BEACON%%', n.uY)
              .input('%%CORS_REQUEST%%', n.Ad)
              .input('%%DISABLE_BIDDERS%%', R.M)
              .input('%%IS_COOKIE_ENABLED%%', R.x)
              .input('%%VIEWPORT_WIDTH%%', n.gG)
              .input('%%VIEWPORT_HEIGHT%%', n.S)
              .input('%%PAGE_HEIGHT%%', n.o)
              .input('%%E_PUBLISHER_URL%%', R.TS)
              .input('%%IS_ENCRYPTED%%', R.uW)
              .input('%%CONSENT_EXISTS%%', R.Y)
              .input('%%SOURCE_CODE_VERSION%%', R.pN)
              .input('%%SERVER_NAME%%', R.Zt)
              .input('%%APP_FLAG%%', R.h)
              .input('%%RENDERING_TYPE%%', R.Gc)
              .input('%%IS_SAFARI%%', R.Vc)
              .input('%%VENDOR%%', n.yG);
          var a = u();
          C.input('%%GPT_FUNCTION_DELAY%%', (n.ZT(a) && a.getGoogleFunctionDelay) || 0),
            C.input('%%COMPRESED_LOGGING%%', (n.ZT(a) && a.isCompressedTargetingEnabled) || 0);
          var o = E(),
            N = p();
          n.ZT(o) &&
            C.input('%%USPRIVACY_STATUS%%', o.getCcpaApplicableFlag)
              .input('%%USPRIVACY_ENFORCED%%', o.getCcpaEnforcementFlag)
              .input('%%USPRIVACY_LDP%%', o.getLimitDataProcessingFlag)
              .input('%%USPRIVACY_FINAL_CONSENT%%', o.getFinalConsentStringIndex)
              .input('%%USPRIVACY_STRING%%', o.getCcpaConsent),
            n.ZT(N) &&
              C.input('%%GDPR_FLAG%%', N.getGdprFlag)
                .input('%%CONSENT_STRING%%', N.getTcString)
                .input('%%TCF_CMP%%', N.getCmpId)
                .input('%%TCF_STATUS%%', N.getCmpStatus)
                .input('%%TCF_PURPOSE_STRING%%', N.getPurposeString)
                .input('%%STANCE_UNKNOWN_CONSENT%%', R.nb);
          var A = C.getMacroMap(),
            D = new T(A);
          return { resolveMacros: D.resolveMacros };
        });
        _cD('enut', ['config', 'cc', '_'], function (e, n, r) {
          'use strict';
          function t (n) {
            return r.ZT(n) && r.ZT(e.features[n]) && 1 === e.features[n];
          }
          function u (n) {
            return e.hbInfo && r.ZT(e.hbInfo[n]) ? e.hbInfo[n] : null;
          }
          function f (n) {
            if (!r.ZT(n) || !r.ZT(e.features[n]) || 0 === e.features[n]) return !1;
            var t = 100 / e.features[n];
            return !r.xV(t);
          }
          return { isFeatureEnabled: t, isFeatureEnabledForImpression: f, getFeatureValue: u };
        });
        _cD('len', ['_', 'config', 'cc', 'res', 'enut'], function (e, n, o, r, t) {
          'use strict';
          function g (n) {
            return (n = parseInt(n, 10)), !(isNaN(n) || n <= 0) && 1 === e.tG(1, n);
          }
          function l (e) {
            return (n.logUrls && n.logUrls[e]) || '';
          }
          function u (e) {
            return (n.logDcs && n.logDcs[e]) || '';
          }
          function i (o) {
            return e.UG() ? 1 : (n.log && n.log[o]) || 0;
          }
          function s (o) {
            return e.UG() ? 1 : (n.log && n.log.pmplog && n.log.pmplog[o]) || 0;
          }
          function c (o) {
            if (((c.result = c.result || {}), !e.ZT(c.result[o]))) {
              c.result[o] = 'GET';
              var r = (n && n.log && n.log.post) || {};
              e.ZT(r[o]) && g(r[o]) && (c.result[o] = 'POST');
            }
            return c.result[o];
          }
          function a (e, o) {
            if ('POST' === e) return n.logUrls.pog;
            var r = u(o);
            return 'ncal' === r ? n.logUrls.ogncal : n.logUrls.og;
          }
          function f () {
            return n.logUrls.pn;
          }
          function d (e, n) {
            return a(e, n) + f();
          }
          function p () {
            return n.logUrls.crl;
          }
          function m () {
            return (n.hbInfo && n.hbInfo.adcPvids) || [];
          }
          function L () {
            return t.isFeatureEnabled('prlogEr');
          }
          function U () {
            return t.isFeatureEnabled('isw');
          }
          function b () {
            return e.ZT(n.misc) && 1 === n.misc.lac;
          }
          function T () {
            return n.timeout && n.timeout.li;
          }
          function E () {
            return t.isFeatureEnabled('disApGblLog');
          }
          function P () {
            return e.ZT(n.misc) && 1 === n.misc.adlogSt;
          }
          function v () {
            return (n && n.logHetro && n.logHetro.timeout) || 2000;
          }
          function A (o) {
            var r = (n && n.logHetro && n.logHetro.log) || [];
            return e.e(r, o);
          }
          return {
            getlper: i,
            getPmpLper: s,
            getLogUrls: l,
            getRequestType: c,
            getLgPath: d,
            getCsloggerUrl: p,
            getProvidersEnabledForAdCodeLog: m,
            logPRonEndOfResponse: L,
            isImmediateSlotLog: U,
            needsAdCodeLogging: b,
            getLogIntervalAfterOnload: T,
            isApLogDisabledForGlobalTargeting: E,
            logAPonSetTargeting: P,
            isHeterogeneousLoggingEnabled: A,
            getLogIntervalForHeterogeneousLogging: v,
          };
        });
        _cD(
          'em',
          ['mnrp', '_', 'config', 'cc', 'bid', 'res', 'gsp', 'enut', 'osdetector'],
          function (n, t, r, e, u, i, o, c, f) {
            'use strict';
            function a (n) {
              var r = {},
                e = mt('cma');
              t.ZT(e) &&
                ((r[e.PUBLISHER_URL] = 'PUBLISHER'),
                (r[e.REFERRER_URL] = 'REFERRER'),
                (r[e.GDPR_EEA_USER] = 'GDPREEAUSER'),
                (r[e.CLIENT_DEVICE_TYPE_ID] = 'DEVICE_TYPE'),
                (r[e.DISABLE_COOKIE_FOR_PRIVACY] = 'DISABLE_COOKIE_FOR_PRIVACY')),
                t.a(n, function (n, e) {
                  var u = r[e];
                  t.ZT(u) && (Je[u] = n);
                });
            }
            function d () {
              return mt('drs');
            }
            function l () {
              var n = t.tG(100000000, 999999999),
                e = r.viewid || Math.round(new Date().getTime() / 1000),
                u = e.concat(n);
              return u;
            }
            function s () {
              return (
                t.wc(t.Zu(t.AX()), 10) +
                '' +
                t.tG(1000000, 9999999) +
                new Date().getTime().toString()
              );
            }
            function E () {
              return r._mNVsid;
            }
            function b () {
              var n,
                e = d();
              if (t.ZT(e) && e.isActionApplicable('STOP_LOGGING_VISITOR_ID')) return '';
              if (!Je.VISITOR_ID)
                if (((n = r._mNVsid), t.Td(n) && n.indexOf('VID') === -1 && n.length > 10)) {
                  var u = n.indexOf('V') === -1 ? 3 : 6;
                  Je.VISITOR_ID = n.substr(0, n.length - u);
                } else Je.VISITOR_ID = '';
              return Je.VISITOR_ID;
            }
            function I () {
              var n = r._mNVisitIdData,
                e = d();
              return t.ZT(e) && e.isActionApplicable('TRIM_LAST_OCTET') && (n = t.wb(n)), n;
            }
            function R () {
              return r._optout || '';
            }
            function p () {
              return r._dma || '';
            }
            function T () {
              return r._ip2c || '';
            }
            function m () {
              return r.adt || '';
            }
            function g () {
              return r._ip2sc || '';
            }
            function _ () {
              return r._ip2ct || '';
            }
            function S () {
              var n, r;
              return (
                Je.VISIT_ID ||
                  ((r = I()),
                  t.Td(r) || (r = t.AX()),
                  (n = new Date().getTime()),
                  (Je.VISIT_ID = (
                    '000000' +
                    n +
                    ('00' + t.Zu(r)).slice(-11) +
                    t.tG(1000, 9999)
                  ).slice(-32))),
                Je.VISIT_ID
              );
            }
            function v () {
              return Je.VIEW_ID || (Je.VIEW_ID = l()), Je.VIEW_ID;
            }
            function h () {
              return $e++, $e.toString();
            }
            function B () {
              return r._ip2z;
            }
            function Z () {
              return c.isFeatureEnabled('streamOrigin');
            }
            function F () {
              return c.getFeatureValue('suc') || 0;
            }
            function D () {
              var n = B();
              return 'w' === n
                ? Z()
                  ? r.defaultBidderSetting.bidStreamUrlWestOrigin
                  : r.defaultBidderSetting.bidStreamUrlWest
                : Z()
                ? r.defaultBidderSetting.bidStreamUrlEastOrigin
                : r.defaultBidderSetting.bidStreamUrlEast;
            }
            function U () {
              var n = B();
              if (Z() && !M()) {
                var t = r.defaultBidderSetting.bidNonStreamUrlWestOrigin,
                  e = r.defaultBidderSetting.bidNonStreamUrlEastOrigin,
                  u = 'w' === n;
                return u ? t : e;
              }
              return r.defaultBidderSetting.bidApiUrl2M;
            }
            function A () {
              return r.defaultBidderSetting.ruleEngineUrl || '';
            }
            function C () {
              return rn()
                ? r.defaultBidderSetting.sspServerStreamUrl
                : r.defaultBidderSetting.sspServerScriptUrl;
            }
            function V () {
              return rn() ? Ke : ze;
            }
            function w () {
              return Ye('mnethbadapterentity') && 1 === (t.ZT(r.hbaInfo) && r.hbaInfo.bidReq);
            }
            function N () {
              return (
                (r.defaultBidderSetting &&
                  r.defaultBidderSetting.nativebidder &&
                  r.defaultBidderSetting.nativebidder.tplUrl) ||
                ''
              );
            }
            function O (n, t) {
              (je[n] = je[n] || ''), je[n].indexOf(t) === -1 && (je[n] += t + '|');
            }
            function P (n) {
              return je[n] || '';
            }
            function x () {
              return c.isFeatureEnabled('disRef');
            }
            function L (n) {
              var r = c.getFeatureValue('cop'),
                e = (r && (r.all || r[n])) || 0;
              return !(0 === e || t.tG(1, 100) > e);
            }
            function y () {
              return c.isFeatureEnabled('errTrack');
            }
            function H () {
              return c.isFeatureEnabled('oxrtlog');
            }
            function G () {
              return c.isFeatureEnabled('enInIframe') || wt() || mr();
            }
            function M () {
              return Ye('aaxentity') && Ye('aaxentity').VG();
            }
            function W () {
              return M() ? '1' : '0';
            }
            function Y () {
              return !k() && (!!c.isFeatureEnabled('sandbox') || 3 === Et());
            }
            function k () {
              return c.isFeatureEnabled('disSbox');
            }
            function J () {
              return c.isFeatureEnabled('sovBcn');
            }
            function Q () {
              return t.ZT(r.hbInfo.hdhome) && '1' === r.hbInfo.hdhome;
            }
            function X () {
              return c.isFeatureEnabled('prfDisHome');
            }
            function q () {
              return c.isFeatureEnabled('scc');
            }
            function z () {
              return c.isFeatureEnabled('frlen');
            }
            function K () {
              return r._coc;
            }
            function j () {
              return 'EU' === K();
            }
            function $ () {
              return 'AS' === K() || 'OC' === K();
            }
            function nn () {
              return c.isFeatureEnabled('meu');
            }
            function tn () {
              return c.isFeatureEnabled('mapac');
            }
            function rn () {
              return c.isFeatureEnabled('stream') && t.Gd();
            }
            function en () {
              return (!j() || !nn()) && (!$() || !tn()) && c.isFeatureEnabled('sspServer');
            }
            function un () {
              return c.isFeatureEnabled('inf');
            }
            function on () {
              return c.isFeatureEnabled('dara');
            }
            function cn () {
              return c.isFeatureEnabled('cbol');
            }
            function fn () {
              return c.isFeatureEnabled('fgdprcon');
            }
            function an () {
              return c.isFeatureEnabled('sark');
            }
            function dn () {
              return c.isFeatureEnabled('tpNbT');
            }
            function ln () {
              var n = Ye('autorefreshentity');
              if (!t.gb(n.autoRefreshSetting)) return !1;
              var r = n.autoRefreshSetting();
              return t.ZT(r) && t.ZT(r.debug) && 1 === r.debug;
            }
            function sn (n) {
              var t = c.getFeatureValue('fbn');
              return t && t[n];
            }
            function En (n) {
              var e,
                u,
                i = 3,
                o = { s: 1000, m: 60000 },
                c = i * o.m;
              return (
                (i = r.timeout.bidTTL[n] || i),
                'string' == typeof i
                  ? ((e = i.toLowerCase().match(/(\d+)([sm]?)/)),
                    null !== e &&
                      ((u = e[2]),
                      (c = t.ZT(u) ? parseInt(e[1], 10) * o[u] : parseInt(e[1], 10) * o.m)))
                  : (c = i * o.m),
                c
              );
            }
            function bn () {
              return t.ZT(r.misc.dcto) && 1 === r.misc.dcto;
            }
            function In () {
              return Je.CID || (Je.CID = r.info.cid), Je.CID;
            }
            function Rn () {
              return (
                Je.YBNCA_PARTNER_ID || (Je.YBNCA_PARTNER_ID = r.info.ypartner), Je.YBNCA_PARTNER_ID
              );
            }
            function pn () {
              return Je.PARTNER_ID || (Je.PARTNER_ID = r.info.partner), Je.PARTNER_ID;
            }
            function Tn () {
              if (!t.ZT(Je.INIT_DELAY)) {
                Je.INIT_DELAY = 0;
                var n = Rt();
                if (t.ZT(n) && t.gb(n.shouldDelayInit) && !n.shouldDelayInit())
                  return Je.INIT_DELAY;
                Je.INIT_DELAY = (r.timeout && r.timeout.inid) || 0;
              }
              return Je.INIT_DELAY;
            }
            function mn (n) {
              return (r.hbInfo && r.hbInfo.ybnru && r.hbInfo.ybnru[n]) || {};
            }
            function gn (n) {
              return !t.i(mn(n));
            }
            function _n () {
              return r.defaultBidderSetting && r.defaultBidderSetting.bidApiUrlAk;
            }
            function Sn () {
              return r.defaultBidderSetting && r.defaultBidderSetting.csUrl;
            }
            function vn (n) {
              var e = (r.hbInfo && r.hbInfo.ybnaka) || {},
                u = e[n] || e.all;
              return t.Td(_n()) && '1' === u;
            }
            function hn (n) {
              var t = (r.hbInfo && r.hbInfo.ybnwss) || {};
              return t[n] || t.all;
            }
            function Bn (n) {
              var t = (r.hbInfo && r.hbInfo.ybndbd) || {};
              return t[n] || t.all || {};
            }
            function Zn () {
              if (t.ZT(Zn.result)) return Zn.result;
              var n = r.hbInfo && r.hbInfo.bcat,
                e = [];
              t.Qe(n) &&
                t.a(n, function (n) {
                  var r = n.urlr,
                    u = n.cat;
                  t.Qe(u) || (u = [u]), new RegExp(r).test(Qn()) && (e = e.concat(u));
                });
              var u = Rt();
              return t.ZT(u) && t.gb(u.setBcatParams) && u.setBcatParams(e), (Zn.result = e), e;
            }
            function Fn () {
              return r.info.apsid;
            }
            function Dn () {
              return Je.HOSTNAME || (Je.HOSTNAME = t.UW(Qn())), Je.HOSTNAME;
            }
            function Un () {
              return r.info.sver;
            }
            function An () {
              return r.info.servname;
            }
            function Cn () {
              return '0';
            }
            function Vn () {
              return r.timeout && r.timeout.csdelay;
            }
            function wn () {
              return (r.timeout && r.timeout.pfexp) || 3;
            }
            function Nn () {
              return (r.features && r.features.reqLimit) || 65;
            }
            function On () {
              return r.features && r.features.rrcmt;
            }
            function Pn (r, e) {
              t.ZT(fu[e]) || (n.pushError({ message: r }), (fu[e] = !0));
            }
            function xn () {
              var n = mt('plM').getEnabledProviderList(),
                e = 0,
                u = 100,
                i = parseInt(r.timeout && r.timeout.gptrd);
              return Jt() || isNaN(i)
                ? (t.ZT(r.timeout) || (Pn('Error EMS config: No gpt delay set', 'gptrd'), (i = u)),
                  !isNaN(i) && i > e && (e = i),
                  t.a(n, function (n) {
                    var t = Mn(n, 'gptrd');
                    !isNaN(t) && t > e && (e = t);
                  }),
                  0 !== e ? e : void 0)
                : void Pn('Error EMS config: No gpt control set', 'grc');
            }
            function Ln () {
              return xn() || 1000;
            }
            function yn () {
              return r.timeout && r.timeout.prfd;
            }
            function Hn () {
              return r.timeout && r.timeout.rprfd;
            }
            function Gn () {
              return (r.timeout && r.timeout.pdct) || 5000;
            }
            function Mn (n, t) {
              if (r.timeout && 'object' == typeof r.timeout[n]) {
                var e = r.timeout[n],
                  u = parseInt(e && e[t]);
                return isNaN(u) ? void 0 : u;
              }
            }
            function Wn (n) {
              return 'cache' === n
                ? r.timeout && r.timeout.cbrt
                : 'headerBid' === n
                ? r.timeout && r.timeout.hbrt
                : void 0;
            }
            function Yn () {
              return (
                t.ZT(iu) &&
                  t.ZT(ou) &&
                  !t.Vm(Je.REFERRER) &&
                  ((Je.REFERRER = ou.getCleanReferrerUrl(iu.getReferrerUrlConventionalWay())),
                  t.VG(Je.REFERRER) === !0 && (Je.REFERRER = t.Y(Je.REFERRER)),
                  Qn() === Je.REFERRER && (Je.REFERRER = '')),
                Je.REFERRER || ''
              );
            }
            function kn () {
              Qe++;
            }
            function Jn () {
              return Qe;
            }
            function Qn () {
              if (t.ZT(ou) && !Je.PUBLISHER) {
                var n,
                  r = Rt();
                t.ZT(r) && t.gb(r.sJ) && (n = ou.getCleanPublisherUrl(r.sJ())),
                  t.Td(n) || (n = tt()),
                  (Je.PUBLISHER = n);
              }
              return Je.PUBLISHER || '';
            }
            function Xn () {
              delete Je.PUBLISHER, delete Je.CONVENTIONAL;
            }
            function qn () {
              var n = '';
              return (
                wt() &&
                  (n = window.context && window.context.location && window.context.location.href),
                t.Td(n) || (n = Qn()),
                n
              );
            }
            function zn () {
              return qn().indexOf('force_gdpr=1') !== -1;
            }
            function Kn () {
              return qn().indexOf('force_hbtest=all') !== -1;
            }
            function jn (n) {
              return t.Zx(qn(), 'force_hbtest') === n || ft(n) || Kn();
            }
            function $n () {
              var n = t.Zx(Qn(), 'force_hbtest');
              return '99' === n ? '' : n;
            }
            function nt () {
              return t.Zx(Qn(), 'force_bidprice');
            }
            function tt () {
              if (t.ZT(ou) && t.ZT(iu) && !Je.CONVENTIONAL) {
                var n = '';
                (n = window.hbCMBidxc_requrl
                  ? window.hbCMBidxc_requrl
                  : window.hbCMBidxc.pageUrl
                  ? decodeURIComponent(window.hbCMBidxc.pageUrl)
                  : iu.FV()),
                  (Je.CONVENTIONAL = ou.getCleanPublisherUrl(n));
              }
              return Je.CONVENTIONAL || '';
            }
            function rt () {
              return Qn().indexOf('force_template') !== -1;
            }
            function et () {
              return rt() ? t.Zx(Qn(), 'force_template') : '';
            }
            function ut () {
              return Qn().indexOf('force_abtest') !== -1;
            }
            function it () {
              if (ut()) return t.Zx(Qn(), 'force_abtest');
            }
            function ot () {
              return Qn().indexOf('force_hbprv') !== -1;
            }
            function ct () {
              if (ot()) return t.Zx(Qn(), 'force_hbprv');
            }
            function ft (n) {
              return n === ct();
            }
            function at () {
              return t.ZT(r.hbInfo.fd);
            }
            function dt () {
              return (
                Je.PUBLISHER_FD ||
                  ((Je.PUBLISHER_FD = Qn()),
                  at() && (Je.PUBLISHER_FD = Ut() + '://' + r.hbInfo.fd)),
                Je.PUBLISHER_FD
              );
            }
            function lt () {
              return _r() + '/creativecop.js?itype=HB';
            }
            function st () {
              var n = dt().split('/');
              return n[0] + '//' + n[2];
            }
            function Et () {
              if (!Je.DEVICE_TYPE) {
                var n = mt('ud');
                t.ZT(n) && (Je.DEVICE_TYPE = n.getClientDeviceId());
              }
              return Je.DEVICE_TYPE;
            }
            function bt () {
              var n = Qn().split('/');
              return n[0] + '//' + n[2];
            }
            function It () {
              var n = Yn().split('/');
              return n[0] + '//' + n[2];
            }
            function Rt () {
              return mt('_c');
            }
            function pt () {
              return r.miscConfig || {};
            }
            function Tt (n) {
              return mt('providercustom' + n);
            }
            function mt (n) {
              if (void 0 !== nu[n]) return nu[n];
              try {
                nu[n] = window._cR([n])[0];
              } catch (t) {
                if (t.message && t.message.indexOf('Cyclic dependency') !== -1) throw t;
                nu[n] = null;
              }
              return nu[n];
            }
            function gt (n) {
              var r = Rt();
              return t.ZT(r) && t.gb(r.getUrlForPrefetch) && t.ZT(n)
                ? r.getUrlForPrefetch(n)
                : bt();
            }
            function _t (n) {
              var r = Rt();
              return t.ZT(r) && t.gb(r.getUrlForHeaderBidding) && t.ZT(n)
                ? r.getUrlForHeaderBidding(n)
                : bt();
            }
            function St () {
              return (r.info && r.info.rEng) || [];
            }
            function vt () {
              var n;
              return (
                Je.SESSION_DEPTH ||
                  ((n = t.ll(Xe)),
                  (Je.SESSION_DEPTH = (t.Td(n) && parseInt(n.split('|')[0])) || -1),
                  (Je.SESSION_DEPTH = Math.min(Je.SESSION_DEPTH, 100))),
                Je.SESSION_DEPTH
              );
            }
            function ht () {
              var n, r, e, u;
              (r = t.ll(Xe)),
                (e = t.Td(r) && parseInt(r.split('|')[1])),
                t.ZT(e) && t.Zp(e, qe) ? (n = r.split('|')[0]) : ((n = '0'), (e = t.Wb())),
                (u = parseInt(n) + 1),
                (u = u + '|' + e),
                t.la(Xe, u, null, '/');
            }
            function Bt () {
              var n = t.UW(Qn());
              return n.replace(/^www\./, '');
            }
            function Zt (n) {
              return t.Td(n) && (Je.AB_TESTS = n.toString()), Je.AB_TESTS || 'CONTROL';
            }
            function Ft () {
              return 'https' === Ut();
            }
            function Dt () {
              return Ft() ? 1 : 0;
            }
            function Ut () {
              var n = 'https:' == document.location.protocol;
              return c.isFeatureEnabled('isHttps') && (n = !0), n ? 'https' : 'http';
            }
            function At () {
              var n = 'https:' == document.location.protocol;
              return n ? 'https=1' : '';
            }
            function Ct (n) {
              return t.ZT(n) && (Je.AD_BLOCK_DETECTED = n), Je.AD_BLOCK_DETECTED || 0;
            }
            function Vt () {
              return t.ZT(R()) || Ur() ? 0 : t.cW();
            }
            function wt () {
              return 1 === r.hbInfo.isAmp;
            }
            function Nt () {
              return wt() ? 1 : 0;
            }
            function Ot () {
              return t.Td(r.hbInfo.version) ? r.hbInfo.version : '1';
            }
            function Pt () {
              var n = {},
                r = window.hbCMBidxc.section || '';
              return (
                (n.ignoreList = ['<section name>']),
                t.ZT(n) && t.ZT(n.ignoreList) && t.e(n.ignoreList, r) && (r = ''),
                r
              );
            }
            function xt () {
              return window.hbCMBidxc.channel || '';
            }
            function Lt () {
              return (
                Je.hasOwnProperty('E_PUBLISHER_URL') ||
                  ((Je.E_PUBLISHER_URL = r._epurl || ''),
                  t.VG(Je.E_PUBLISHER_URL) === !0 &&
                    (Je.E_PUBLISHER_URL = t.Y(Je.E_PUBLISHER_URL))),
                Je.E_PUBLISHER_URL
              );
            }
            function yt () {
              return r.info.iType;
            }
            function Ht () {
              var n = Rt();
              return t.ZT(n) && t.gb(n.Gc) ? n.Gc() : '';
            }
            function Gt (n, r, e) {
              return (
                (Je.SUB_BIDDER_ID = Je.SUB_BIDDER_ID || {}),
                (Je.SUB_BIDDER_ID[n] = Je.SUB_BIDDER_ID[n] || {}),
                t.ZT(e) && (Je.SUB_BIDDER_ID[n][r] = e),
                Je.SUB_BIDDER_ID[n][r] || ''
              );
            }
            function Mt (n, r) {
              if (((Je.YBNCA_VARIANT = Je.YBNCA_VARIANT || {}), t.ZT(r))) {
                var e;
                '9' === r ? (e = 0) : '4' === r && (e = 1), (Je.YBNCA_VARIANT[n] = e);
              }
              return Je.YBNCA_VARIANT[n] || -1;
            }
            function Wt () {
              var n = Rt();
              return t.ZT(n) && t.gb(n.isCompletelyDisabled) && n.isCompletelyDisabled() === !0;
            }
            function Yt () {
              return (
                !!Wt() ||
                (t.ZT(window.hbCMBidxc.misc) &&
                  t.ZT(window.hbCMBidxc.misc.disableTag) &&
                  window.hbCMBidxc.misc.disableTag === !0)
              );
            }
            function kt () {
              return (
                t.ZT(window.hbCMBidxc.misc) &&
                t.ZT(window.hbCMBidxc.misc.isGptDisabled) &&
                1 === window.hbCMBidxc.misc.isGptDisabled
              );
            }
            function Jt () {
              return t.ZT(r.misc) && 1 === r.misc.grc;
            }
            function Qt () {
              var n = r.misc && r.misc.rvc;
              return t.ZT(n) || (n = 1), parseInt(n);
            }
            function Xt () {
              return (r.info && r.info.cid) || '';
            }
            function qt () {
              return (r.info && r.info.adxCid) || '';
            }
            function zt (r, e) {
              try {
                return (
                  t.W(r, function (n) {
                    if (new RegExp(n).test(e)) return !0;
                  }) || !1
                );
              } catch (u) {
                n.pushError(
                  'Error while parsing url regex, to disable url for header bidding: ' + u.message
                );
              }
              return !1;
            }
            function Kt () {
              return zt(r.hbInfo.hbUrlBlockRegex, Qn());
            }
            function jt () {
              return zt(r.hbInfo.disHbOnUrls, tt());
            }
            function $t (n) {
              var e = r.info.targetHV;
              return t.ZT(e) && n && parseInt(n.get('dfpBd'), 10) >= e;
            }
            function nr () {
              var n = Rt();
              return n && t.gb(n.lb)
                ? n.lb()
                : 0 === window.location.pathname.replace(/^\//, '').length;
            }
            function tr (n, t) {
              tu[n] = t;
            }
            function rr () {
              var n = r.info && r.info.dBidders,
                t = parseFloat(n);
              return isNaN(t) ? 0 : t;
            }
            function er () {
              if (!t.ZT(er.condition)) {
                er.condition = !1;
                var n = rr(),
                  r = 10,
                  e = t.tG(1, 100 * r);
                e <= Math.floor(n * r) && (er.condition = !0);
              }
              return er.condition;
            }
            function ur () {
              return (r.info && r.info.fullwidth) || [];
            }
            function ir () {
              return (r.info && r.info.scav) || !1;
            }
            function or (n) {
              return r.cok[n];
            }
            function cr (n) {
              var r = c.getFeatureValue('pmp') || {},
                e = r.all;
              return t.ZT(r[n]) && (e = r[n]), '1' === e;
            }
            function fr () {
              return c.isFeatureEnabled('enGD');
            }
            function ar () {
              return c.isFeatureEnabled('enCDel');
            }
            function dr () {
              return [r.dHost, r.abHost];
            }
            function lr () {
              return r.defaultBidderSetting && r.defaultBidderSetting.cookieUrl;
            }
            function sr () {
              return r.defaultBidderSetting && r.defaultBidderSetting.asu;
            }
            function Er () {
              return (r.features && r.features.auct) || 1;
            }
            function br () {
              return Ir() || Rr();
            }
            function Ir () {
              var n = Er();
              return 2 === n;
            }
            function Rr () {
              var n = Er();
              return 3 === n;
            }
            function pr () {
              return c.isFeatureEnabled('enmowxnv') && 'w' !== B();
            }
            function Tr () {
              return c.isFeatureEnabled('lser');
            }
            function mr () {
              return c.isFeatureEnabled('ch');
            }
            function gr () {
              return c.isFeatureEnabled('hbBt');
            }
            function _r () {
              return r && r.hbInfo && r.hbInfo.srvd;
            }
            function Sr () {
              return r.defaultBidderSetting.criteobidder.criteoRtusUrl;
            }
            function vr (n) {
              return r.defaultBidderSetting[n].convRtusUrl;
            }
            function hr () {
              return r.adpupConfig || {};
            }
            function Br () {
              return r.abmConfig || {};
            }
            function Zr () {
              return (r && r.features && r.features.dcMap) || {};
            }
            function Fr () {
              var n = g(),
                r = Zr();
              return t.ZT(Fr.coastComputed)
                ? Fr.coast || ''
                : t.ZT(n)
                ? ((Fr.coastComputed = !0),
                  (Fr.coast =
                    t.W(r, function (r, e) {
                      if (((r = r.split(',')), t.e(r, n))) return e;
                    }) || ''),
                  Fr.coast)
                : '';
            }
            function Dr () {
              return r.features.enGdpr || 0;
            }
            function Ur () {
              var n = !1;
              return !!zn() || (Dr() && (n = ru || Ar()), n);
            }
            function Ar () {
              return t.ZT(Je.GDPREEAUSER)
                ? Je.GDPREEAUSER
                : (Dr() ? (Je.GDPREEAUSER = r && '1' === r._gdpr) : (Je.GDPREEAUSER = !1),
                  Je.GDPREEAUSER);
            }
            function Cr () {
              return Ur() ? '1' : '0';
            }
            function Vr () {
              return eu || M() ? (wr() ? '1' : '0') : '2';
            }
            function wr () {
              return uu;
            }
            function Nr () {
              return ke;
            }
            function Or (n) {
              return yr() || (ru = n), !0;
            }
            function Pr (n) {
              return (
                (ke = n),
                (eu = !0),
                o.parseString(n),
                o.isMediaNetVendorAllowed() ? ((uu = !0), !0) : ((uu = !1), !0)
              );
            }
            function xr (n) {
              return t.ZT(ke) || ((eu = !0), (uu = n)), !0;
            }
            function Lr () {
              return r.info && r.info.killgdpr;
            }
            function yr () {
              return r.info && r.info.dispubgdpr;
            }
            function Hr () {
              return r.info && r.info.ptid;
            }
            function Gr () {
              return r.directAdsProd;
            }
            function Mr () {
              var n = Gn(),
                r = R(),
                e = Ar() && !wr();
              return 0 !== n && !t.ZT(r) && !e && c.isFeatureEnabled('cstest');
            }
            function Wr (n) {
              var e = r.hbInfo && r.hbInfo.pmpRev;
              if (e && (t.ZT(e[n]) || t.ZT(e.all))) return e[n] || e.all;
            }
            function Yr () {
              return c.getFeatureValue('setCkPubDn') || {};
            }
            function kr (n) {
              r._mNVsid = n;
            }
            function Jr () {
              return (r.timeout && r.timeout.inMemBt) || -1;
            }
            function Qr () {
              var n = pt();
              return t.ZT(n.mnetias) && t.ZT(n.mnetias.freq) && n.mnetias.freq;
            }
            function Xr () {
              if (!t.ZT(window.hbCMBidxc.misc) || !t.Td(window.hbCMBidxc.misc.disableBidders))
                return !1;
              var n = window.hbCMBidxc.misc.disableBidders + '';
              return 'all' === n.toLowerCase();
            }
            function qr () {
              return c.isFeatureEnabled('yeib');
            }
            function zr () {
              return c.isFeatureEnabledForImpression('wops');
            }
            function Kr () {
              return c.isFeatureEnabled('enCkOl');
            }
            function jr () {
              return c.getFeatureValue('dbniv');
            }
            function $r () {
              return c.getFeatureValue('ovPsh');
            }
            function ne () {
              return c.getFeatureValue('gdprPrv') || [];
            }
            function te () {
              return (r && r._ccpa) || '';
            }
            function re () {
              return c.getFeatureValue('tcfconfig') || {};
            }
            function ee (n) {
              var t = re();
              return t[n];
            }
            function ue () {
              return ee('pam') || {};
            }
            function ie () {
              return c.getFeatureValue('uspconfig') || {};
            }
            function oe (n) {
              var t = ie();
              return t[n];
            }
            function ce () {
              var n = oe('psp');
              return !t.ZT(n) || n;
            }
            function fe () {
              return oe('dfcnst') || '';
            }
            function ae () {
              return oe('enf') || 0;
            }
            function de () {
              return oe('blprv') || [];
            }
            function le () {
              return oe('csm') || [];
            }
            function se () {
              return oe('sam') || {};
            }
            function Ee () {
              return c.isFeatureEnabled('ssa');
            }
            function be () {
              return c.isFeatureEnabled(['defSlot']) || St().length > 0;
            }
            function Ie () {
              r._epurl = '';
            }
            function Re () {
              return f.ZJ();
            }
            function pe () {
              return r.info.mnetax && 1 === r.info.mnetax;
            }
            function Te () {
              return c.isFeatureEnabled('att');
            }
            function me () {
              var n = bt() || It(),
                e = r.misc && r.misc.did;
              if (!t.ZT(e)) return !1;
              var u = new RegExp(e).test(n);
              return mr() && u;
            }
            function ge () {
              return c.isFeatureEnabled('bbt');
            }
            function _e () {
              return c.isFeatureEnabled('sfsm');
            }
            function Se () {
              return r.hbInfo.confRules;
            }
            function ve () {
              var n = r.timeout.cteh;
              return t.ZT(n) || (n = 1), 3600 * n * 1000;
            }
            function he () {
              var n = r.timeout.cted;
              return t.ZT(n) || (n = 30), 3600 * n * 24 * 1000;
            }
            function Be () {
              var n = Rt();
              return t.ZT(n) && t.gb(n.Jb) ? n.Jb() : '';
            }
            function Ze (n) {
              if (Je.DISABLE_COOKIE_FOR_PRIVACY)
                return (
                  t.W(Je.DISABLE_COOKIE_FOR_PRIVACY, function (t) {
                    if (n === t) return !0;
                  }) || !1
                );
              var r = c.getFeatureValue('dspc');
              return !!t.ZT(r) && ((n = n.toUpperCase()), t.ZT(r[n]) && 1 === r[n]);
            }
            function Fe () {
              return Ze('gdpr');
            }
            function De () {
              return Ze('usp');
            }
            function Ue () {
              return r.defaultBidderSetting.bidStreamUrlEUOrigin;
            }
            function Ae () {
              return r.defaultBidderSetting.bidStreamUrlAPAC;
            }
            function Ce () {
              return t.Vc() ? '1' : '0';
            }
            function Ve () {
              return c.getFeatureValue('dbsaf');
            }
            function we () {
              return c.isFeatureEnabled('csyncdel');
            }
            function Ne () {
              return c.getFeatureValue('nps') || {};
            }
            function Oe () {
              return r.timeout.daat || 1000;
            }
            function Pe () {
              return c.getFeatureValue('trglog');
            }
            function xe () {
              var n = mt('_c');
              return !(!t.ZT(n) || !t.gb(n.isBackFillImpression)) && n.isBackFillImpression();
            }
            function Le () {
              return c.isFeatureEnabled('dfus');
            }
            function ye () {
              return c.isFeatureEnabled('cRtbCall');
            }
            function He () {
              return c.isFeatureEnabled('oapi');
            }
            function Ge () {
              return c.isFeatureEnabled('rgam');
            }
            function Me () {
              return r.fwConf || {};
            }
            function We () {
              (cu.logentity = mt('len')),
                (cu.aaxentity = mt('aen')),
                (cu.mnethbadapterentity = mt('mhaen')),
                (cu.dfpentity = mt('dem')),
                (cu.autorefreshentity = mt('autorefreshentity')),
                t.a(cu, function (n) {
                  t.ZT(n) && t.k(au, n);
                });
            }
            function Ye (n) {
              return cu[n] || null;
            }
            var ke,
              Je = {},
              Qe = 0,
              Xe = 'hbcm_sd',
              qe = 15,
              ze = 91,
              Ke = 93,
              je = {},
              $e = 0,
              nu = {},
              tu = {},
              ru = !1,
              eu = !1,
              uu = !1,
              iu = mt('ul'),
              ou = mt('uc'),
              cu = {},
              fu = {};
            t.l('all:reset', 'command', Xn),
              t.l('nextCall', 'command', Xn),
              t.l('resetCall', 'command', Xn);
            var au = {
              a: Ve,
              Vc: Ce,
              lk: pn,
              QW: Rn,
              wb: Ut,
              sJ: Qn,
              JX: Ie,
              FV: tt,
              Qk: dt,
              VJ: Yn,
              Wb: wn,
              bp: yn,
              mc: N,
              lW: Hn,
              JH: Mn,
              Xd: Wn,
              FG: xn,
              F: Ln,
              v: Vn,
              lV: R,
              dz: Bt,
              gY: bt,
              AR: st,
              B: lt,
              VZ: _t,
              cV: gt,
              kc: b,
              UW: Dn,
              t: te,
              Zh: ce,
              mb: fe,
              bG: ae,
              Mn: de,
              wF: le,
              XY: se,
              Ac: ue,
              cW: pt,
              W: h,
              n: s,
              GZ: Qt,
              zV: w,
              S: Fn,
              Ql: I,
              Zw: Et,
              E: p,
              e: T,
              pF: m,
              Rb: g,
              U: _,
              x: Vt,
              Aa: ht,
              oR: vt,
              wZ: St,
              kF: cn,
              UZ: cr,
              H: Zt,
              kl: In,
              uW: W,
              Fc: Yt,
              Ga: kt,
              pR: x,
              ZF: Jt,
              vh: Q,
              Z: X,
              A: bn,
              lZ: Tr,
              RX: H,
              nc: Ft,
              wU: Dt,
              xm: y,
              Rm: Y,
              hW: en,
              Fl: rn,
              AT: bt,
              lB: yt,
              WS: Gt,
              BN: Mt,
              X: D,
              s: U,
              VV: A,
              Vl: C,
              bl: P,
              jF: O,
              dl: v,
              require: mt,
              ZN: Ct,
              d: dr,
              AZ: Xt,
              J: qt,
              Zb: jn,
              cl: ot,
              WZ: ut,
              lN: rt,
              UG: et,
              Zk: it,
              Zl: ct,
              I: Rt,
              Yu: ar,
              bN: Tt,
              gX: Kt,
              cs: jt,
              G: V,
              XZ: wt,
              JR: S,
              px: z,
              Eb: un,
              VU: on,
              Zv: q,
              VE: at,
              Wh: $t,
              dv: kn,
              Wd: Jn,
              Ab: xt,
              gb: Pt,
              bh: G,
              lb: nr,
              pZ: mn,
              kJ: Bn,
              lJ: gn,
              r: ne,
              Rl: vn,
              p: _n,
              wm: Sn,
              Wa: hn,
              aC: tr,
              Zz: fn,
              M: er,
              uU: ir,
              m: Zn,
              Zp: or,
              Zo: Xn,
              by: lr,
              FW: _r,
              sx: br,
              g: pr,
              VG: M,
              wc: ur,
              V: sr,
              vN: J,
              Qc: mr,
              D: Fr,
              Ad: Gr,
              Yh: Ur,
              gc: Ar,
              WY: Cr,
              setGDPRApplicable: Or,
              setGDPRConsent: Pr,
              MH: xr,
              Y: Vr,
              Qn: wr,
              N: Nr,
              wR: Lr,
              VF: Sr,
              c: hr,
              l: Br,
              lQ: gr,
              Gb: Tn,
              QT: a,
              Zs: Mr,
              O: sn,
              NX: Gn,
              uV: fr,
              AX: Wr,
              kV: E,
              pN: Un,
              Zt: An,
              nl: Yr,
              cv: kr,
              db: Nn,
              QX: Jr,
              ld: On,
              kY: Qr,
              JV: Hr,
              nF: At,
              w: Nt,
              Rz: dn,
              Q: Xr,
              AH: qr,
              VS: an,
              WR: ln,
              cw: zr,
              Vk: Rr,
              Zu: B,
              TS: Lt,
              getVersion: Ot,
              h: Cn,
              Gc: Ht,
              k: Kr,
              El: $n,
              Zj: nt,
              T: jr,
              lR: $r,
              kb: Ee,
              P: be,
              ZJ: Re,
              JW: L,
              i: vr,
              YF: pe,
              bi: Te,
              lx: ge,
              bF: me,
              u: Se,
              j: ve,
              R: he,
              Jb: Be,
              b: Fe,
              aN: De,
              z: _e,
              du: j,
              mY: nn,
              C: Ue,
              iF: tn,
              y: Ae,
              ul: $,
              QZ: K,
              cm: Pe,
              zd: Ne,
              yV: Oe,
              Fm: we,
              wE: En,
              hR: xe,
              cp: Le,
              Vm: ye,
              RW: He,
              yN: Ge,
              nb: F,
              o: Me,
            };
            return We(), au;
          }
        );
        _cD('config', [window, document, window.hbCMBidxc.configSettings, '_', 'cc'], function (
          e,
          i,
          t,
          d,
          r
        ) {
          'use strict';
          function n () {
            (u.features = u.features || {}),
              (u.info = u.info || {}),
              (u.misc = u.misc || {}),
              void 0 === u.misc.lac && (u.misc.lac = 0),
              (u.hbInfo = u.hbInfo || {}),
              (u.cbInfo = u.cbInfo || {}),
              (u.timeout = u.timeout || {}),
              (u.cbInfo.disCk = u.cbInfo.disCk || '');
            var e = {};
            (e.OPENX = 5),
              (e.APPNEXUS = 4),
              (e.CASALE = 2),
              (u.timeout.bidTTL = d.k(e, u.timeout.bidTTL || {})),
              '1' === u.hbInfo.hdhome && ((u.misc.grc = 0), (u.misc.prfd = 0)),
              (u.headerBidder = {}),
              (u.headerBidder.disable = 1 === u.hbInfo.disable),
              (u.headerBidder.frlen = 1 === u.hbInfo.frlen),
              (u.headerBidder.status = {}),
              (u.headerBidder.status.NOOP = 0),
              (u.headerBidder.status.INIT = 1),
              (u.headerBidder.status.BIDDING = 2),
              (u.headerBidder.status.DONE = 3);
          }
          function a (e) {
            d.a(u.providerMap, function (i, t) {
              i.hasOwnProperty(e) && delete i[e];
            });
          }
          function o () {
            var e = ['KP', 'KR', 'PH', 'TW', 'VN', 'IN', 'AU', 'SG', 'JP', 'MY', 'PK', 'NZ'];
            d.a(e, function (e) {
              if (e === u._ip2c) return void a('11');
            });
          }
          function f (e, i) {
            d.a(e, function (e) {
              if (e === u._ip2sc) return void a(i);
            });
          }
          function c () {
            var e = u.provider;
            d.a(e, function (i, t) {
              var d = (e[t] && e[t].states) || [];
              0 !== d.length && f(d, t);
            });
          }
          var s,
            u = t || {};
          try {
            s = e._cR(['cm'])[0];
          } catch (b) {
            s = null;
          }
          return (
            d.ZT(s) && (u = s.getConfigSettings() || {}),
            (u.defaultBidderSetting = u.defaultBidderSetting || {}),
            (u.defaultBidderSetting.rtbsbidder = u.defaultBidderSetting.rtbsbidder || {}),
            (u.defaultBidderSetting.rtbsprivatebidder =
              u.defaultBidderSetting.rtbsprivatebidder || {}),
            (u.applyConfigOverride = function h (e, i) {
              return (
                d.a(i, function (i, t) {
                  d.Um(i) || d.Qe(i) || !e.hasOwnProperty(t) ? (e[t] = i) : (e[t] = h(e[t], i));
                }),
                e
              );
            }),
            (u.disableSpecificBidderFromConfig = a),
            n(),
            o(),
            c(),
            u
          );
        });
        _cD('map', ['_'], function (t) {
          'use strict';
          function n () {
            var n = {};
            (this.config = function (t) {
              return (n = t), this;
            }),
              (this.set = function (t, r) {
                return (n[t] = r), this;
              }),
              (this.get = function (t) {
                return n[t];
              }),
              (this.getByPath = function (r) {
                return t.u(n, r);
              }),
              (this.serialize = function () {
                return t.k({}, n);
              }),
              (this.hasOwnProperty = function (t) {
                return n.hasOwnProperty(t);
              });
          }
          return n;
        });
        _cD('bid', ['_', 'bc'], function (t, i) {
          'use strict';
          function r () {
            function i () {
              return !(!e.fv || 1 !== e.fv);
            }
            var e = {};
            (this.get = function (t) {
              return e[t];
            }),
              (this.set = function (t, i) {
                return (e[t] = i), this;
              }),
              (this.getAny = function (t) {
                return r.Properties.hasOwnProperty(t) ? e[r.Properties[t]] : '';
              }),
              (this.status = function (t) {
                return void 0 !== t ? ((e.s = t), (e.snm = r.StatusNames[t]), this) : e.s;
              }),
              (this.id = function (t) {
                return void 0 !== t ? ((e.brId = t), this) : e.brId.toString();
              }),
              (this.name = function (t) {
                return void 0 !== t ? ((e.brNm = t), this) : e.brNm;
              }),
              (this.provider = function (t) {
                return void 0 !== t ? ((e.prNm = t), this) : e.prNm;
              }),
              (this.serialize = function () {
                var i = t.k({}, e);
                return i;
              }),
              (this.deserialize = function (i) {
                return (e = t.k({}, i)), this;
              }),
              (this.clone = function () {
                var t = new r();
                return t.deserialize(this.serialize());
              }),
              (this.type = function (t) {
                return void 0 !== t ? ((e.bdt = t), this) : e.bdt;
              }),
              (this.isPrivateDeal = function () {
                return 'P' === e.dt && t.ZT(e.di);
              }),
              (this.reuseReason = function (t) {
                return void 0 !== t ? ((e.brr = t), void 0 === e.brs && (e.brs = t), this) : e.brr;
              }),
              (this.isValidBid = function () {
                return !!i() || !!(1 === e.s && e.cpm && e.cpm > 0 && e.brNm);
              }),
              (this.isExpired = function (i) {
                return t.ZT(i) && t.ZT(e.ts) ? t.Wb() - e.ts > i : !t.ZT(e.ttl) || t.Wb() > e.ttl;
              });
          }
          return (
            (r.Properties = i.Properties),
            (r.Status = i.Status),
            (r.DYNAMIC_BIDDER = i.DYNAMIC_BIDDER),
            (r.ReuseReasons = i.ReuseReasons),
            (r.StatusNames = [
              'pending',
              'success',
              'nobid',
              'timeout',
              'bid_not_in_cache',
              'response_after_auction',
              'nobid_after_auction',
              'error',
            ]),
            (r.DFP = i.DFP),
            (r.DealType = i.DealType),
            (r.Type = i.Type),
            (r.SERVER_SIDE_PIXEL_LOGS = i.SERVER_SIDE_PIXEL_LOGS),
            (r.SPAM = i.SPAM),
            (r.CLIENT_DMS_STATUS = i.CLIENT_DMS_STATUS),
            r
          );
        });
        _cD('t', ['tc', '_'], function (t, n) {
          'use strict';
          function e () {
            var t = {};
            (this.set = function (n, e) {
              return (t[n] = e), this;
            }),
              (this.get = function (n) {
                return t[n];
              }),
              (this.serialize = function () {
                return t;
              });
          }
          return (
            (e.PROPERTIES = t.PROPERTIES),
            (e.DFP_KEYS = t.DFP_KEYS),
            (e.NoBidFlagValues = t.NoBidFlagValues),
            (e.getBidderParams = function () {
              return [
                'mnetbidID',
                'mnetbidPrice',
                'mnet_placement',
                'mnetCID',
                'mnetAct',
                'mnetNative',
                'mnetScpvid',
                'mnetSize',
                'mnetTd',
              ];
            }),
            (e.getMiscParams = function () {
              return ['mnet_hv', 'mnet_dn'];
            }),
            (e.isBidderTarget = function (t) {
              var e = this.getBidderParams();
              return n.W(e, function (n) {
                if (t === n) return !0;
              });
            }),
            e
          );
        });
        _cD('bp', ['_', 'config', 'res', 'bid', 'em', 'pmc', 'psrr'], function (
          r,
          s,
          t,
          e,
          n,
          p,
          c
        ) {
          'use strict';
          function d (r) {
            return !isFinite(r) || isNaN(r) ? 0 : r;
          }
          function i (s, t) {
            var e = n.AX(t);
            r.ZT(e) && (s.csh = e);
          }
          function h (s, t) {
            return r.ZT(t) && (s -= (s * t) / 100), s;
          }
          function o (s, t, e) {
            r.ZT(t[s]) && (e[s] = t[s]);
          }
          function u (r, s) {
            for (var t in r) r.hasOwnProperty(t) && s.hasOwnProperty(t) && o(t, r, s);
          }
          function v (r, s) {
            var t = (s && s.get('brId')) || r.get('pid'),
              e = (s && s.get('seat')) || '';
            return c.getProviderShareBySeatId(t, e);
          }
          function f (s) {
            return (r.ZT(s) && s.get('dsh')) || 0;
          }
          function a (s) {
            return (r.ZT(s) && s.get('csh')) || 100;
          }
          function b (r, s, t, e) {
            (t.pvsh = e.psh || v(s, r)),
              (t.dpsh = e.dsh || f(s)),
              (t.rvsh = 100 - (e.csh || a(s, e))),
              1 === n.GZ() ? (t.rvshPreDFP = t.rvsh || 0) : (t.rvshPreDFP = 0);
          }
          function P (r, s) {
            (s.ogbdp = d(r.ogbdp)),
              (s.bdp = h(h(s.ogbdp, s.pvsh), s.dpsh)),
              (s.clsprc = h(s.bdp, s.rvshPreDFP)),
              (s.cpm = s.clsprc),
              (s.dfpbd = s.clsprc),
              (s.cbdp = h(s.bdp, s.rvsh));
          }
          function g (s, t) {
            s.set('cpm', r.x(t.cpm))
              .set('bdp', r.x(t.bdp))
              .set('dfpBd', r.x(t.dfpbd))
              .set('cbdp', r.x(t.cbdp))
              .set('clsPr', r.x(t.clsprc))
              .set('ogCPM', r.x(t.ogbdp))
              .set('adj0', t.pvsh)
              .set('adj1', t.dpsh)
              .set('adj2', t.rvsh);
          }
          function Z (r, s) {
            var t = {};
            s = s || {};
            var e = s.adUnitParam;
            return (
              'P' === s.dealType && i(s, e.get('pid')), b(r, e, t, s), P(s, t), u(s, t), g(r, t), r
            );
          }
          function l (r, s, t) {
            (s.pvsh = 1 - v(r, t) / 100),
              (s.dpsh = 1 - f(r) / 100),
              1 === n.GZ() ? (s.rvsh = a(r) / 100) : (s.rvsh = 1);
          }
          function m (s, t, e) {
            var n,
              p = {};
            return l(s, p, e), (n = d(t) / (p.pvsh * p.dpsh * p.rvsh)), r.gZ(n, 2);
          }
          return { setPriceProperties: Z, getFloorPriceForBid: m };
        });
        _cD('bfm', ['_', 'em', 'bid', 'map', 'bp', 'sm', 'prM', 'pmc', 'res', 'cc'], function (
          e,
          t,
          r,
          n,
          i,
          o,
          a,
          c,
          u,
          f
        ) {
          'use strict';
          function d () {
            n.call(this);
          }
          function s () {
            function t (e, t) {
              return t.get('val') - e.get('val');
            }
            var r = [];
            (this.add = function (t) {
              return e.ZT(t) && r.push(t), this;
            }),
              (this.getFinalFloor = function () {
                return r.sort(t), r[0];
              });
          }
          function g (e, t) {
            return new d().set('val', e).set('src', t);
          }
          function l () {
            return g(0, '0');
          }
          function m (t) {
            var r = t.get('fp');
            if (e.ZT(r) && !(r <= 0)) return g(i.getFloorPriceForBid(t, r), '1');
          }
          function F (t, r) {
            var n = t.get('crid'),
              c = t.get('pid');
            if (a.isFloorPriceFromCacheEnabled(c) && 'cache' !== r) {
              var u = o.getMaxBidPresentForPlacement(n),
                f = 0;
              if ((e.ZT(u) && (f = u.get('cpm')), !(f <= 0)))
                return g(i.getFloorPriceForBid(t, f, u), '2');
            }
          }
          function p (e) {
            var t = e.get('pid');
            if (a.isPersistentFloorPriceEnabled(t)) {
              var r = Z();
              if (0 !== r) return g(i.getFloorPriceForBid(e, r), '3');
            }
          }
          function v (r) {
            var n,
              i = r.get('pid'),
              o = t.require('crs');
            if ((e.ZT(o) && e.gb(o.getRulePicked) && (n = o.getRulePicked()), e.ZT(n))) {
              var a = n.actions && n.actions.fp && n.actions.fp[i];
              if (e.ZT(a)) return g(a, '4');
            }
          }
          function b (e, t) {
            var r = new s();
            return r.add(l()).add(m(e)).add(F(e, t)).add(v(e)).add(p(e)), r.getFinalFloor();
          }
          function T (t, r) {
            return e.ZT(t) && e.ZT(r) && t > 0 && new Date().getTime() - r <= w;
          }
          function P (e, t) {
            o.setInfo('maxbid', e), o.setInfo('maxbidts', t);
          }
          function Z () {
            if (T(x, B)) return x;
            (x = 0), (B = new Date().getTime());
            var e = o.getInfo('maxbid') || 0,
              t = o.getInfo('maxbidts');
            return (e = parseFloat(e)), T(e, t) && ((x = e), (B = t)), x;
          }
          function h (e) {
            x = Z();
            var t = parseFloat(e.get('cpm'));
            t > x && ((x = t), (B = new Date().getTime()), P(x, B));
          }
          var x,
            B,
            w = 60 * t.Wb() * 60 * 1000;
          return e.MH(d, n), { getBidFloorAndSource: b, setMaximumBid: h };
        });
        _cD('lm', ['_', 'em', 'logfailover', 'cc', 'res', 'bid', 'lutl'], function (
          e,
          r,
          o,
          n,
          i,
          t,
          d
        ) {
          'use strict';
          function g (e, r, o) {
            if ('14' !== e.id() && !r.isAWFired()) {
              var n = r.getWinningBid(!0),
                i = o ? n[0] : n[1],
                t = { auctionTime: r.getAuctionTime(), secondBid: i, winningBid: e };
              e.set('udc', 1), re.dispatchWinner('afterRender', t, { method: 'POST', type: 'sb' });
            }
          }
          function a () {
            e.WZ('log:trigger', 'command', !0),
              setTimeout(a, r.getLogIntervalAfterOnload() || 2000);
          }
          function l () {
            e.WZ('log::heterogeneous::trigger', 'command', !0),
              setTimeout(l, r.getLogIntervalForHeterogeneousLogging());
          }
          function u () {
            r.VG() && _.addNew({}, !0),
              oe.addNew(),
              ge.fireError(),
              e.WZ('log:trigger', 'command', !0, { type: 'sb', method: 'POST' }),
              e.WZ('log::heterogeneous::trigger', 'command', !0, { type: 'sb', method: 'POST' }),
              ne.fireViewData();
          }
          function s () {
            r.XZ() ||
              r.VG() ||
              e.eventLib.addEvent(window, 'load', function () {
                ee.addNew();
              }),
              e.kV()
                ? (a(), l())
                : (e.eventLib.addEvent(window, 'load', a), e.eventLib.addEvent(window, 'load', l)),
              e.eventLib.addEvent(window, 'unload', u);
          }
          function w (e) {
            e.isPrivateDeal() && r.getPmpLper('pr') > 0 ? z.addNew(e) : j.addNew(e);
          }
          function c (o, n) {
            e.a(n, function (e) {
              e.isPrivateDeal() && r.getPmpLper('ap') > 0
                ? M.addProviderSlotImpressions(o, e)
                : K.addProviderSlotImpressions(o, e);
            });
          }
          var q = r.require('aaxdbglog') || o,
            p = r.require('axfdlog') || o,
            m = r.require('abdlog') || o,
            f = r.require('adclog') || o,
            v = r.require('agptslog') || o,
            L = r.require('avlog') || o,
            b = r.require('aplog') || o,
            P = r.require('pmpaplog') || o,
            h = r.require('awlog') || o,
            x = r.require('nalog') || o,
            W = r.require('csloglog') || o,
            D = r.require('crllog') || o,
            R = r.require('cxtlog') || o,
            S = r.require('swlog') || o,
            A = r.require('ellog') || o,
            T = r.require('explog') || o,
            B = r.require('fllog') || o,
            E = r.require('gptrlog') || o,
            y = r.require('gptslog') || o,
            I = r.require('idllog') || o,
            N = r.require('lblog') || o,
            O = r.require('adxlog') || o,
            V = r.require('arlog') || o,
            Z = r.require('relog') || o,
            k = r.require('prlog') || o,
            F = r.require('pmpprlog') || o,
            G = r.require('prflog') || o,
            C = r.require('dynamicbidderlog') || o,
            _ = new m(),
            H = new B(),
            U = new k(),
            X = new k(),
            j = new k(),
            z = new F(),
            J = new G(U, X),
            K = new b(),
            M = new P(),
            Q = new T(),
            Y = new v(),
            $ = new E(),
            ee = new y(),
            re = new h(),
            oe = new x(),
            ne = new L(),
            ie = new V(),
            te = new Z(),
            de = new N(),
            ge = new A(),
            ae = new f(),
            le = new p(),
            ue = (new q(), new C()),
            se = new O(),
            we = new W(),
            ce = new D(),
            qe = new I(),
            pe = new S(),
            me = new R();
          return (
            s(),
            {
              adBlockDetectLog: _,
              failoverLog: H,
              fetchRequests: J,
              cacheRequests: U,
              hbRequests: X,
              addProviderRequest: w,
              addProviderSlotImpressions: c,
              auctionParticipants: K,
              auctionWinner: re,
              adView: ne,
              mnetRefresh: ie,
              ruleEngine: te,
              expiredBids: Q,
              CasaleDebug: we,
              criteoRtusLog: ce,
              gptSlots: ee,
              advGptSlots: Y,
              gptRequest: $,
              dfpAdDataLog: pe,
              initDebugLog: qe,
              lostBids: de,
              errorLogs: ge,
              adCodeLog: ae,
              aaxFeedbackLog: le,
              mnetAdxLog: se,
              ybncaAdxLog: ue,
              contextualLog: me,
              fireAWOnUnload: g,
            }
          );
        });
        _cD('logcollection', ['_', 'em', 'res', 'logdispatchservice'], function (t, i, e, n) {
          'use strict';
          function s () {
            function i () {
              e.reset();
            }
            var e = this;
            (e.LOG_TYPE = e.LOG_TYPE || ''),
              (e.dispatcher = e.dispatcher || n.getDispatcher(e.LOG_TYPE)),
              (this.model = function () {}),
              (this.fire = function (t, i) {
                e.dispatcher.fire(t, i);
              }),
              (this.addNew = function (t, i, e) {}),
              (this.addArray = function (i) {
                return t.a(i, this.addNew);
              }),
              (this.append = function (t) {
                e.dispatcher.append(t, this.LOG_TYPE);
              }),
              (this.reset = function () {
                e.dispatcher.fire();
              }),
              t.l('all:reset', 'command', i);
          }
          return s;
        });
        _cD('logdispatchservice', ['_', 'em', 'logselfdispatcher'], function (e, r, n) {
          'use strict';
          function t (e) {
            return r.isHeterogeneousLoggingEnabled(e) ? o() : i(e);
          }
          function i (r) {
            return e.ZT(c[r]) || (c[r] = new n(r)), c[r];
          }
          function o () {
            var n;
            return e.ZT(u) || ((n = r.require('logheterogeneousdispatcher')), (u = new n())), u;
          }
          var u,
            c = {};
          return { getDispatcher: t };
        });
        _cD('logselfdispatcher', ['cc', '_', 'em', 'nic', 'lc', 'res', 'logdispatcher'], function (
          t,
          n,
          e,
          i,
          o,
          r,
          u
        ) {
          'use strict';
          function a (t) {
            function o (t) {
              var n = f(t);
              return n.length > d;
            }
            function r (t) {
              var n = y.slice(),
                e = t.clone();
              return n.push(e), l(n), o(n);
            }
            function a (t) {
              var e = '';
              return (
                n.a(t, function (t) {
                  e += n.b(t.getAll(), b);
                }),
                e
              );
            }
            function c (t) {
              n.a(t.getAll(), function (t, n) {
                P[n] = !0;
              });
            }
            function l (t) {
              n.a(t, function (t) {
                var e = t.getAll();
                n.a(P, function (i, o) {
                  n.ZT(e[o]) || '' === e[o] || t.set(o, '');
                });
              });
            }
            function f (t) {
              var n = a(t);
              return 0 === n.length ? '' : v.addDefaultParams(n, m);
            }
            function g (o, r) {
              var u = { method: 'GET', tags: [v.logType, 'log'], type: 'img' };
              u = n.k(u, r);
              var a = e.getLgPath('GET', t),
                c = a + '?' + o;
              i.submit(c, u);
            }
            function s (t, o) {
              var r = { method: 'POST', tags: [v.logType, 'log'], type: 'xhr' };
              r = n.k(r, o);
              var u = e.getLgPath('POST');
              i.submit({ url: u, payload: t }, r);
            }
            function h (t) {
              return t
                ? ('sb' !== t.type || n.uY() || ((t.type = 'img'), (t.method = 'GET')), t)
                : t;
            }
            function p () {
              (y = []), (P = {});
            }
            u.call(this);
            var d = n.Fl() ? 1600 : 7000,
              v = this,
              T = e.getRequestType(t) || '',
              m = e.getLogUrls(t) || '',
              y = [],
              P = {},
              b = { encode: !0 };
            (v.logType = t),
              (this.append = function (t) {
                r(t) && v.fire(), c(t), y.push(t), l(y);
              }),
              (this.fire = function (t, e) {
                var i = f(y);
                if (n.ZT(i)) {
                  var o = h(e),
                    r = T;
                  o && o.method && (r = o.method), 'POST' === r ? s(i, o) : g(i, o), p();
                }
              });
          }
          return n.MH(a, u), a;
        });
        _cD('logdispatcher', ['_', 'em', 'macm', 'lc', 'res'], function (E, _, S, I, T) {
          'use strict';
          function R () {
            (this.append = function (E, _) {}), (this.fire = function (E, _) {});
          }
          var N = {},
            s = 'start',
            r = 'end';
          return (
            (N[s] = {}),
            (N[r] = {}),
            (N[s].pid = '%%PARTNER_ID%%'),
            (N[s].itype = '%%INTEGRATION_TYPE%%'),
            (N[s].dn = '%%PUBLISHER_HOST%%'),
            (N[s].cid = '%%CID%%'),
            (N[s].svr = '%%SOURCE_CODE_VERSION%%'),
            (N[s].servname = '%%SERVER_NAME%%'),
            (N[s].gdpr = '%%GDPR_FLAG%%'),
            (N[s].csex = '%%CONSENT_EXISTS%%'),
            (N[s].suc = '%%STANCE_UNKNOWN_CONSENT%%'),
            (N[s].csstr = '%%CONSENT_STRING%%'),
            (N[s].tcf_cmp = '%%TCF_CMP%%'),
            (N[s].tcf_status = '%%TCF_STATUS%%'),
            (N[s].tcf_prp = '%%TCF_PURPOSE_STRING%%'),
            (N[s].usp_status = '%%USPRIVACY_STATUS%%'),
            (N[s].usp_enf = '%%USPRIVACY_ENFORCED%%'),
            (N[s].usp_string = '%%USPRIVACY_STRING%%'),
            (N[s].ufca = '%%USPRIVACY_FINAL_CONSENT%%'),
            (N[s].usp_ldf = '%%USPRIVACY_LDP%%'),
            (N[s].ugd = '%%DEVICE_TYPE%%'),
            (N[s].adt = '%%AKAMAI_DEVICE_TYPE%%'),
            (N[s].vid = '%%VISIT_ID%%'),
            (N[s].vsid = '%%VISITOR_ID%%'),
            (N[s].sd = '%%SESSION_DEPTH%%'),
            (N[s].gtd = '%%GPT_TAG_DELAY%%'),
            (N[s].inid = '%%INIT_DELAY%%'),
            (N[s].gfd = '%%GPT_FUNCTION_DELAY%%'),
            (N[s].cc = '%%COUNTRY_CODE%%'),
            (N[s].sc = '%%STATE_CODE%%'),
            (N[s].ct = '%%CITY_CODE%%'),
            (N[s].abte = '%%AB_TESTS%%'),
            (N[s].adbd = '%%AD_BLOCK_DETECTED%%'),
            (N[s].amp = '%%IS_AMP_REQUEST%%'),
            (N[s].version = '%%VERSION%%'),
            (N[s].sB = '%%SEND_BEACON%%'),
            (N[s].cors = '%%CORS_REQUEST%%'),
            (N[s].disB = '%%DISABLE_BIDDERS%%'),
            (N[s].ice = '%%IS_COOKIE_ENABLED%%'),
            (N[s].vw = '%%VIEWPORT_WIDTH%%'),
            (N[s].vh = '%%VIEWPORT_HEIGHT%%'),
            (N[s].pht = '%%PAGE_HEIGHT%%'),
            (N[s].cl = '%%COMPRESED_LOGGING%%'),
            (N[s].__rk = '%%IS_ENCRYPTED%%'),
            (N[s].app = '%%APP_FLAG%%'),
            (N[s].rtype = '%%RENDERING_TYPE%%'),
            (N[s].vendor = '%%VENDOR%%'),
            (N[s].isSafari = '%%IS_SAFARI%%'),
            (N[r].requrl = '%%PUBLISHER%%'),
            (N[r].kwrf = '%%REFERRER%%'),
            (N[r].epurl = '%%E_PUBLISHER_URL%%'),
            (R.prototype.addDefaultParams = function (_, I) {
              var T = S.resolveMacros(E.J(N[s]), !0),
                R = S.resolveMacros(E.J(N[r]), !0);
              return I + T + _ + R;
            }),
            R
          );
        });
        _cD(
          'logheterogeneousdispatcher',
          ['_', 'em', 'nic', 'lc', 'res', 'logdispatcher'],
          function (t, e, r, n, o, i) {
            'use strict';
            function a () {
              function n () {
                t.a(l, function (t, r) {
                  var n = e.getLogUrls(r) || '';
                  return 0 === t.length ? '' : void (s = s + c + o.addDefaultParams(t, n));
                });
              }
              var o = this;
              i.call(this),
                (this.append = function (e, r) {
                  var n = { encode: !0 };
                  (l[r] = l[r] || ''), (l[r] += t.b(e.getAll(), n));
                }),
                (this.fire = function (o, i) {
                  if ((n(), 0 !== s.length)) {
                    var a = e.getLgPath(g),
                      c = { method: g, tags: ['ht', 'log'], type: 'xhr', cors: !0 };
                    (c = t.k(c, i)),
                      'POST' === c.method
                        ? r.submit({ url: a, payload: s }, c)
                        : r.submit(a + s, c),
                      (s = ''),
                      (l = {});
                  }
                }),
                t.l('log::heterogeneous::trigger', 'command', o.fire);
            }
            var s = '',
              c = ';',
              g = 'POST',
              l = {};
            return t.MH(a, i), a;
          }
        );
        _cD('logfailover', ['_', 'logcollection'], function (t, i) {
          'use strict';
          function n () {
            i.call(this),
              (this.addNew = function () {}),
              (this.getNewItem = function () {}),
              (this.addSlotLogData = function () {}),
              (this.addViewData = function () {}),
              (this.fireViewData = function () {}),
              (this.addProviderSlotImpressions = function () {}),
              (this.addPublisherSlotImpression = function () {}),
              (this.dispatchDirectWinner = function () {}),
              (this.dispatchWinner = function () {}),
              (this.dispatchOtherWinners = function () {}),
              (this.encodeAndFire = function () {}),
              (this.addDFPSlotData = function () {}),
              (this.addNewNoWinningBidError = function () {}),
              (this.addNewInvalidRequestError = function () {}),
              (this.addAaxAdBlockWallDetectedError = function () {}),
              (this.addNewSafeFrameCustomRenderAdError = function () {}),
              (this.addNewSafeFrameRenderError = function () {}),
              (this.fireGPTDebugLog = function () {}),
              (this.addNewGPTFetchedSlotWarning = function () {}),
              (this.addNewGPTApiWarning = function () {}),
              (this.addNewBackfillTagError = function () {}),
              (this.gatherSlotData = function () {}),
              (this.dispatchRefresh = function () {}),
              (this.record = function () {}),
              (this.addNewMultiplePlacementError = function () {}),
              (this.addNewMultipleSlotError = function () {}),
              (this.addNewRefreshWarning = function () {}),
              (this.addNewRtbsRequestResponseCountMismatchError = function () {}),
              (this.fireError = function () {});
          }
          return t.MH(n, i), n;
        });
        _cD('logmodel', ['_'], function (t) {
          'use strict';
          function n () {
            var n = '<>',
              i = '##',
              e = {};
            (this.set = function (r, o) {
              return t.Qe(o) && ((r += n), (o = o.join(i))), (e[r] = o), this;
            }),
              (this.getAll = function () {
                return e;
              }),
              (this.clone = function () {
                var n = new this.constructor();
                return (
                  t.a(this.getAll(), function (t, i) {
                    n.set(i, t);
                  }),
                  n
                );
              });
          }
          return n;
        });
        _cD('lutl', ['_', 'em', 'bid', 'lc', 'drs', 'res', 'cc', 'inmemdatasource'], function (
          t,
          e,
          s,
          r,
          n,
          d,
          i,
          o
        ) {
          'use strict';
          function p (e) {
            return t.xV(e);
          }
          function a (t) {
            var s = e.getlper(t);
            return !(0 !== s && !p(s));
          }
          function c (t) {
            var s = e.getPmpLper(t);
            return 0 === s || p(s);
          }
          function g (t) {
            return (t.td || '') + '|' + e.bl(t.crid);
          }
          function u (e) {
            return t.ZT(e) ? t.x(e) : '';
          }
          function m (e) {
            return t.ZT(e)
              ? t
                  .Y(e)
                  .replace(/"/g, '')
                  .replace(/^https?:\/\//, '')
                  .replace(/^ww[w]?\d*\./, '')
                  .toLowerCase()
              : '';
          }
          function f (e) {
            return t.ZT(e) ? new Date().getTime() - e : -1;
          }
          function b (t, e) {
            t
              .set('pvid', e.brId || '')
              .set('prvAccId', e.paId || '')
              .set('prvApiId', e.pApId || '')
              .set('exid', e.eid || '')
              .set('pcId', e.pcId || '')
              .set('pseat', e.pseat),
              n.isActionApplicable('STOP_SENDING_PII') && t.set('pcId', '0000EEA');
          }
          function l (t, e) {
            t.set('adj1', e.adj1 || 0)
              .set('adj0', e.adj0 || 0)
              .set('adj2', e.adj2 || 0)
              .set('adj3', e.adj3 || 0);
          }
          function v (t, s) {
            t.set('mowxReqId', s.mowxReqId || '')
              .set('crid', s.crid || '')
              .set('g', s.g)
              .set('size', s.sz || '')
              .set('sec', e.gb())
              .set('chnl', e.Ab())
              .set('prspt', s.bdFor || '')
              .set('rfc', s.rfc || '0')
              .set('tref', s.tref || 'UNKNOWN')
              .set('fpuReq', s.fpuReq || '0');
          }
          function I (e, s) {
            var r = t.ZT(s.nbr) ? s.nbr : '';
            e.set('bdp', s.bdp || s.cpm || '0')
              .set('cbdp', s.cbdp || '0')
              .set('dcbdp', s.dCbdp || '0')
              .set('ckfl', s.ckfl || '')
              .set('cs', s.cs || '')
              .set('mnet_ckfl', s.vcfl || '')
              .set('cat', s.cat || '')
              .set('attr', s.attr || '')
              .set('pvAgNm', s.pvAgNm || '')
              .set('pvAgId', s.pvAgId || '')
              .set('advId', s.adId || '')
              .set('advNm', s.adNm || '')
              .set('advUrl', m(s.adUrl || ''))
              .set('dfpBd', s.dfpBd || '0')
              .set('nms', s.nms || '1')
              .set('di', s.di || '')
              .set('dt', s.dt || '')
              .set('epc', s.epc || '')
              .set('ogbdp', s.ogCPM || '0')
              .set('s', t.ZT(s.s) ? s.s : '')
              .set('snm', s.snm || '')
              .set('dbf', s.dbf || '1')
              .set('bdata', s.bd || '')
              .set('cmpid', s.cmpid || '')
              .set('bId', s.bId || '')
              .set('pcrid', s.pcrid || '')
              .set('ruct', s.ruct || '0')
              .set('brs', s.brs || '')
              .set('brr', s.brr || '')
              .set('iurl', s.iurl || '')
              .set('htps', s.htps || 0)
              .set('ptype', s.pt)
              .set('pbidflr', s.bidflr || 0)
              .set('exp', s.exp || '')
              .set('bfs', s.bfs || '0')
              .set('seat', s.seat || '')
              .set('nbr', r)
              .set('ba', f(s.brt))
              .set('ybnca_gbid', s.gbid || '')
              .set('ybnca_erpm', s.erpm || '')
              .set('ybnca_vbid', s.vbid || '')
              .set('yogbdp', s.yogbdp)
              .set('yErpmFlag', s.yErpmFlag)
              .set('smsrc', s.smsrc ? '2' : '1')
              .set('strg', s.strat || '')
              .set('ybnca_bbid', s.bbid || '')
              .set('prvReqId', s.pvRqId || '')
              .set('dStat', s.dmsStat)
              .set('ogbid', s.ogbid || '0');
          }
          function T (e, s) {
            var r = t.E(s);
            e.set('top', r.top).set('btm', r.bottom).set('lft', r.left).set('rght', r.right);
          }
          function w (t, e) {
            t.set('acid', e.lgid || '')
              .set('act', e.bdFrom || '')
              .set('dtfdl', e.dstfrdmld)
              .set('dspltime', e.dst)
              .set('ttfd', e.ttfd);
          }
          function P (e, s) {
            e.set('rtime', s.rt || '')
              .set('dtc', s.dtc || '')
              .set('rtbsv2', '')
              .set('mp_seg', s.mpSeg || [])
              .set('apid', s.apid || '')
              .set('wsip', s.wsip || '')
              .set('ltime', s.lt || '')
              .set('abs', t.ZT(s.abs) ? s.abs : '');
          }
          function y (t, e) {
            t.set('ssregion', e.ssregion).set('ssreqid', e.ssreqid).set('sssvnm', e.sssvnm);
          }
          function D (e, s) {
            e.set('ttm', s.ttm || 0)
              .set('vtm', s.vtm || 0)
              .set('sttm', s.sttm || 0)
              .set('svtm', s.svtm || 0)
              .set('mnrfc', s.mnrfc || 0)
              .set('mnrf', s.mnrf || 'UNKNOWN')
              .set('invw', t.ZT(s.invw) ? s.invw : -1);
          }
          function A (t, e) {
            t.set('dfpadvId', e.dfpadvid || '')
              .set('dfpcmpId', e.dfpcmpid || '')
              .set('isEmp', e.isEmp || '')
              .set('dsid', e.dsid || '')
              .set('dfpDiv', e.dfpDId || '')
              .set('srcAgCrid', e.srcAgnCrid || '')
              .set('srcAgLid', e.srcAgnLid || '');
          }
          function Z (t, e) {
            t.set('cnt', e.cnt)
              .set('dnst', e.dnst)
              .set('dwnt', e.dwnt)
              .set('sslt', e.sslt)
              .set('dur', e.dur)
              .set('wt', e.wt);
          }
          function _ (t, s) {
            t.set('patkey', s.patkey || '')
              .set('patint', s.patint)
              .set('pc', e.Jb() || '');
          }
          function C (t, e) {
            t.set('spSource', e.sp_source || '0')
              .set('spIvt', e.sp_ivt || '0')
              .set('spId', e.sp_id || '')
              .set('spFst', e.sp_fst || '0')
              .set('spIsReq', e.sp_is_req || '0')
              .set('spTo', e.sp_to || '0');
          }
          function N (e, s) {
            var r = s.mlogs;
            t.ZT(r) &&
              !t.i(r) &&
              t.a(r, function (t, s) {
                e.set('mx_' + s, t);
              });
          }
          function F (t, e) {
            t.set('pgcatiab', e.iabcat || ''),
              t.set('pgcatiab2', e.iabcat2 || ''),
              t.set('pgcatsprig', e.sprigcat || '');
          }
          function R (e) {
            var s = o.get('rules');
            t.ZT(s) &&
              !t.i(s) &&
              e.set('rulePrt', s.priority || '').set('ruleVer', s.version || '');
          }
          function q () {
            if (!e.Yu()) return {};
            var s = o.get('rules');
            return !t.ZT(s) && t.i(s) ? {} : (s.actions && s.actions.delays) || {};
          }
          function S (t) {
            var e = q();
            j(t, e), h(t, e), x(t, e);
          }
          function j (s, r) {
            var n = t.gb(e.getGuaranteedFunctionDelay) && e.getGuaranteedFunctionDelay(),
              d = r.gfd,
              i = t.ZT(d) ? d : n;
            (i = t.ZT(i) ? i : ''), s.set('gFunDl', i);
          }
          function h (s, r) {
            var n = t.gb(e.getNonGuaranteedFunctionDelay) && e.getNonGuaranteedFunctionDelay(),
              d = r.ngfd,
              i = t.ZT(d) ? d : n;
            (i = t.ZT(i) ? i : ''), s.set('ngFunDl', i);
          }
          function x (s, r) {
            var n = t.gb(e.getGoogleRefreshDelay) && e.getGoogleRefreshDelay(),
              d = r.grd,
              i = t.ZT(d) ? d : n;
            (i = t.ZT(i) ? i : ''), s.set('rDl', i);
          }
          function L (s) {
            var r = e.cm(),
              n = '';
            t.ZT(window.googletag) &&
              t.gb(window.googletag.pubads) &&
              t.a(r, function (t) {
                n += t + '=' + window.googletag.pubads().getTargeting(t).join('*') + '|';
              }),
              t.ZT(n) && s.set('glbTrg', n);
          }
          return {
            isLogDisabled: a,
            isPmpLogDisabled: c,
            getTestDataForBid: g,
            getSanitizedFloatValue: u,
            setCommonProviderProperties: b,
            setAdjustmentProperties: l,
            setCommonRequestProperties: v,
            setCommonBidProperties: I,
            setDimensions: T,
            setCommonAuctionProperties: w,
            setCommonResponseProperties: P,
            setMnetSspServerProperties: y,
            setCommonAutoRefreshProperties: D,
            setCommonMISCProperties: _,
            setCommonSpamProperties: C,
            setDFPProperties: A,
            sanitizeAdvUrl: m,
            setNetworkTimeProperties: Z,
            setMowxLogs: N,
            setPageCategoryLogs: F,
            setRuleLogs: R,
            setDelays: S,
            setTargetingProperties: L,
          };
        });
        _cD('inmemdatasource', ['_', 'res'], function (t, n) {
          'use strict';
          function r () {
            var n = {};
            (this.set = function (r, e) {
              return t.ZT(r) && t.Um(r) && (n[r] = e), this;
            }),
              (this.get = function (t) {
                return n[t] || '';
              });
          }
          function e (t, n) {
            return c(f).set(t, n);
          }
          function u (t) {
            return c(f).get(t);
          }
          function i (t, n) {
            m[t] = n;
          }
          function o (t) {
            return m[t] || (m[t] = []), m[t];
          }
          function c (n) {
            return t.ZT(n) && t.Um(n)
              ? ((n = n.toString()), t.ZT(s[n]) || (s[n] = new r()), s[n])
              : null;
          }
          var s = {},
            f = 'primary_in_mem_resource',
            m = {};
          return { set: e, get: u, setStore: i, getStore: o, for: c };
        });
        _cD(
          'prlog',
          ['_', 'logmodel', 'cc', 'logcollection', 'lc', 'em', 'bid', 'res', 'lutl'],
          function (e, t, o, s, r, i, n, d, g) {
            'use strict';
            function l () {
              t.call(this);
            }
            function p () {
              function t (e, t) {
                '1' === t.dpl &&
                  e.set('ogbdp', '0').set('bdp', '0').set('cbdp', '0').set('dfpBd', '0');
              }
              function o () {
                c -= 1;
              }
              function r () {
                return 0 === c;
              }
              (this.LOG_TYPE = 'pr'), s.call(this);
              var n = this,
                d = g.isLogDisabled(n.LOG_TYPE),
                p = i.getlper(n.LOG_TYPE),
                c = 0;
              (this.model = l),
                (this.buildLog = function (o, s, r) {
                  s = s.serialize();
                  var n = s.adc || '';
                  return (
                    (n = e.Td(n) ? n.substring(0, 99) : ''),
                    (n = n.replace(/(\n|\r|\t)/gm, '')),
                    g.setCommonRequestProperties(o, s),
                    g.setCommonProviderProperties(o, s),
                    g.setCommonBidProperties(o, s),
                    g.setCommonAuctionProperties(o, s),
                    g.setCommonResponseProperties(o, s),
                    g.setMnetSspServerProperties(o, s),
                    g.setNetworkTimeProperties(o, s),
                    g.setCommonMISCProperties(o, s),
                    g.setCommonSpamProperties(o, s),
                    g.setMowxLogs(o, s),
                    g.setPageCategoryLogs(o, s),
                    g.setTargetingProperties(o),
                    t(o, s),
                    o
                      .set('osnbr', s.osnbc || '')
                      .set('binfobid', s.binb || '')
                      .set('toconsider', s.tc || '1')
                      .set('act', s.bdFor || '')
                      .set('pvNbr', s.pvNbr)
                      .set('pvNbrDtls', s.pvNbrDtls)
                      .set('td', g.getTestDataForBid(s))
                      .set('lper', r)
                      .set('mnrf', s.mnrf || 'UNKNOWN'),
                    i.needsAdCodeLogging() && o.set('rawtag', n),
                    (i.VG() || i.lZ()) && g.setDFPProperties(o, s),
                    o
                  );
                }),
                (this.addNew = function (e, t, s) {
                  if (!d && '14' !== e.id()) {
                    var i = new n.model(),
                      g = n.buildLog(i, e, p);
                    n.append(g), o(), r() && n.fire();
                  }
                }),
                (this.record = function (e) {
                  c += e;
                }),
                i.logPRonEndOfResponse() && !i.zV()
                  ? e.l('prlog:trigger', 'command', n.fire)
                  : i.isHeterogeneousLoggingEnabled(this.LOG_TYPE) ||
                    e.l('log:trigger', 'command', n.fire);
            }
            return e.MH(p, s), p;
          }
        );
        _cD(
          'nalog',
          [
            '_',
            'logmodel',
            'cc',
            'logcollection',
            'lc',
            'em',
            'lutl',
            'bid',
            'inmemdatasource',
            'res',
          ],
          function (t, n, e, r, o, i, a, u, c, f) {
            'use strict';
            function l () {
              n.call(this);
            }
            function s () {
              (this.LOG_TYPE = 'na'), r.call(this);
              var t = this,
                n = !a.isLogDisabled(t.LOG_TYPE),
                e = { type: 'sb', tags: [t.LOG_TYPE, 'log'], method: 'POST' };
              (this.model = l),
                (this.addNew = function () {
                  if (n) {
                    var r = new t.model();
                    g(r), h(r), t.append(r), t.fire(null, e);
                  }
                });
            }
            function d () {
              return ['log', 'bid', 'misc'];
            }
            function g (t) {
              var n = b();
              t.set('plt', n).set('plb', S(n));
            }
            function h (n) {
              var e = w();
              return e
                ? (m(n),
                  n.set('rtags', v()),
                  n.set('tnc', t.ZT(e) && 0 !== e.length ? e.length : -1),
                  void c.setStore('nalog', []))
                : m(n);
            }
            function m (n) {
              t.a(d(), function (t) {
                n.set(t, p(t));
              });
            }
            function v () {
              var n = w(),
                e = d(),
                r = [];
              return (
                t.a(n, function (n) {
                  var o = n.tags;
                  t.a(o, function (n) {
                    t.e(e, n) || t.e(r, n) || r.push(n);
                  });
                }),
                r
              );
            }
            function p (n) {
              var e = w(),
                r = 0;
              return (
                t.a(e, function (e) {
                  t.e(e.tags, n) && r++;
                }),
                r > 0 ? r : -1
              );
            }
            function w () {
              return c.getStore('nalog');
            }
            function b () {
              if (!window || !window.performance || !t.kV()) return 0;
              var n = window.performance.timing.connectStart,
                e = window.performance.timing.loadEventStart;
              if (0 === n || 0 === e) return 0;
              var r = e - n;
              return r > 0 ? r : 0;
            }
            function S (n) {
              var e = [
                { start: 10000, hop: 5000 },
                { start: 1000, hop: 1000 },
              ];
              if (n <= 0) return -1;
              if (n >= 100000) return 999999;
              var r = t.W(e, function (t) {
                  if (n >= t.start) return t;
                }),
                o = r.hop;
              return Math.floor(n / o) * o;
            }
            return t.MH(l, n), t.MH(s, r), s;
          }
        );
        _cD(
          'prflog',
          ['_', 'logmodel', 'cc', 'logcollection', 'lc', 'em', 'bid', 'res', 'lutl'],
          function (e, t, i, l, r, o, s, c, d) {
            'use strict';
            function n () {
              t.call(this);
            }
            function a (t, i) {
              function r (e) {
                'cache' === e.get('bdFor')
                  ? t.record(1)
                  : 'headerBid' === e.get('bdFor') && i.record(1);
              }
              function s () {
                (f = !0), a.fire();
              }
              function c () {
                e.l('apiCallsSent', 'global', s), e.l('after:prefetch', 'global', s);
              }
              (this.LOG_TYPE = 'prf'), l.call(this);
              var a = this,
                f = !0,
                u = o.getlper(a.LOG_TYPE),
                b = !0;
              (this.model = n),
                (this.addNew = function (e, t, i) {
                  if ((r(e), !b)) {
                    f === !0 && ((f = !1), c());
                    var l = new a.model();
                    (e = e.serialize()),
                      l
                        .set('pvid', e.brId || '')
                        .set('mowxReqId', e.mowxReqId || '')
                        .set('crid', e.crid || '')
                        .set('lper', u)
                        .set('act', e.bdFor || '')
                        .set('size', e.sz || '')
                        .set('td', d.getTestDataForBid(e))
                        .set('nms', e.nms || '1')
                        .set('dbf', e.dbf || '1'),
                      a.append(l);
                  }
                });
            }
            return e.MH(n, t), e.MH(a, l), a;
          }
        );
        _cD(
          'awlog',
          ['_', 'logmodel', 'cc', 'logcollection', 'lc', 'em', 'lutl', 'bid', 'res', 'plM'],
          function (e, t, s, i, d, r, o, n, a, p) {
            'use strict';
            function c () {
              t.call(this);
            }
            function m () {
              function t (e, t) {
                return (
                  ('99' !== t.brId && '101' !== t.brId) ||
                    e.set('ogbdp', '0').set('bdp', '0').set('cbdp', '0').set('dfpBd', '0'),
                  e
                );
              }
              function s (e, t, s, i) {
                var d = t.crid,
                  a = t.acid,
                  c = t.sbdrid || r.WS(d, a) || '',
                  m = t.isnat ? p.getTemplateKeyForNativeSlot(d) : '';
                return (
                  o.setCommonProviderProperties(e, t),
                  o.setCommonRequestProperties(e, t),
                  o.setCommonResponseProperties(e, t),
                  o.setMnetSspServerProperties(e, t),
                  o.setCommonBidProperties(e, t),
                  o.setCommonAuctionProperties(e, t),
                  o.setCommonAutoRefreshProperties(e, t),
                  o.setAdjustmentProperties(e, t),
                  o.setCommonMISCProperties(e, t),
                  o.setCommonSpamProperties(e, t),
                  o.setDimensions(e, t.dfpDId || ''),
                  o.setMowxLogs(e, t),
                  o.setPageCategoryLogs(e, t),
                  o.setRuleLogs(e),
                  o.setDelays(e),
                  o.setTargetingProperties(e),
                  e
                    .set('actltime', i || 0)
                    .set('auMxTm', t.auMxTm)
                    .set('brf', t.brf || 0)
                    .set('dcs', t.dmsCliStat || '')
                    .set('dfpDiv', t.dfpDId || '')
                    .set('dfpPos', t.dfpPs || '')
                    .set('dfpAdPath', t.dfpAdPath || '')
                    .set('lper', n)
                    .set('td', o.getTestDataForBid(t))
                    .set('oyaf', t.oyaf || 0)
                    .set('sbdrid', c)
                    .set('ra_sz', t.ra_sz || t.sz || '')
                    .set('tk', m || '')
                    .set(l + 'pvid', s.brId || '')
                    .set(l + 'ogbdp', s.ogCPM || '0')
                    .set(l + 'adj1', s.adj1 || 0)
                    .set(l + 'adj0', s.adj0 || 0)
                    .set(l + 'adj2', s.adj2 || 0)
                    .set(l + 'prspt', s.bdFor || '')
                    .set(l + 'act', s.bdFrom || '')
                    .set(l + 'bdata', s.bd || '')
                    .set(l + 'bdp', s.bdp || s.cpm || '0')
                    .set(l + 'cbdp', s.cbdp || '0')
                    .set(l + 'bId', s.bId || '')
                    .set(l + 'cat', s.cat || '')
                    .set(l + 'cmpid', s.cmpid || '')
                    .set(l + 'advId', s.adId || '')
                    .set(l + 'advNm', s.adNm || '')
                    .set(l + 'advUrl', o.sanitizeAdvUrl(s.adUrl || '')),
                  e
                );
              }
              (this.LOG_TYPE = 'aw'), i.call(this);
              var d = this,
                n = r.getlper(d.LOG_TYPE);
              (this.model = c),
                (this.dispatchDirectWinner = function (e) {
                  e = e.serialize();
                  var i = new d.model();
                  (i = s(i, e, {}, '')), (i = t(i, e)), d.append(i), d.fire();
                }),
                (this.dispatchWinner = function (i, n, a) {
                  var p,
                    c = new d.model(),
                    m = n.auctionTime,
                    l = n.secondBid ? n.secondBid.serialize() : {},
                    b = n.winningBid ? n.winningBid.serialize() : {};
                  (p = b.acid),
                    (c = s(c, b, l, m)),
                    (c = t(c, b)),
                    c
                      .set('brf', b.brf || 0)
                      .set('udc', b.udc || '')
                      .set('dfpDiv', b.dfpDId || '')
                      .set('rti', e.clock.time('rti' + p))
                      .set('rme', b.rme || 'ADPTR')
                      .set('bbdrid', b.bbdrid || ''),
                    (r.VG() || r.lZ()) && o.setDFPProperties(c, b),
                    d.append(c),
                    e.ZT(a) ? d.fire(i, a) : d.fire();
                }),
                (this.dispatchOtherWinners = function (e) {
                  d.dispatchWinner(null, { winningBid: e });
                });
            }
            var l = 'sc_';
            return e.MH(c, t), e.MH(m, i), m;
          }
        );
        _cD(
          'aplog',
          ['_', 'logmodel', 'cc', 'logcollection', 'lc', 'em', 'lutl', 'bid', 'res'],
          function (e, s, t, o, i, r, d, n, p) {
            'use strict';
            function l () {
              s.call(this);
            }
            function a () {
              function s (e, s) {
                '1' !== s.iwb &&
                  '1' === s.dpl &&
                  e.set('ogbdp', '0').set('bdp', '0').set('cbdp', '0').set('dfpBd', '0');
              }
              (this.LOG_TYPE = 'ap'), o.call(this);
              var t = this,
                i = r.getlper('ap'),
                n = d.isLogDisabled('ap'),
                p = r.getlper('psi'),
                a = d.isLogDisabled('psi');
              (this.model = l),
                (this.buildLog = function (t, o, i, n) {
                  o = o.serialize();
                  var p = o.adc || '',
                    l = o.crid,
                    a = o.acid,
                    g = o.sbdrid || r.WS(l, a) || '';
                  return (
                    (p = e.Td(p) ? p.substring(0, 99) : ''),
                    (p = p.replace(/(\n|\r|\t)/gm, '')),
                    d.setCommonProviderProperties(t, o),
                    d.setAdjustmentProperties(t, o),
                    d.setCommonRequestProperties(t, o),
                    d.setCommonBidProperties(t, o),
                    d.setCommonAuctionProperties(t, o),
                    d.setCommonResponseProperties(t, o),
                    d.setMnetSspServerProperties(t, o),
                    d.setDimensions(t, o.dfpDId || ''),
                    d.setCommonAutoRefreshProperties(t, o),
                    d.setCommonMISCProperties(t, o),
                    d.setCommonSpamProperties(t, o),
                    d.setMowxLogs(t, o),
                    d.setPageCategoryLogs(t, o),
                    d.setRuleLogs(t),
                    d.setDelays(t),
                    d.setTargetingProperties(t),
                    s(t, o),
                    t
                      .set('refVisId', o.rVid || '')
                      .set('osnbr', o.osnbc || '')
                      .set('brf', o.brf || 0)
                      .set('iwb', o.iwb || '0')
                      .set('toconsider', o.tc || '1')
                      .set('dcs', o.dmsCliStat || '')
                      .set('auMxTm', o.auMxTm)
                      .set('actltime', i || 0)
                      .set('acsn', o.acn || '1')
                      .set('dfpDiv', o.dfpDId || '')
                      .set('dfpAdPath', o.dfpAdPath || '')
                      .set('dfpPos', o.dfpPs || '')
                      .set('sbdrid', g)
                      .set('bbdrid', o.bbdrid || '')
                      .set('td', d.getTestDataForBid(o))
                      .set('pvNbr', o.pvNbr)
                      .set('pvNbrDtls', o.pvNbrDtls)
                      .set('lper', n),
                    r.needsAdCodeLogging() && t.set('rawtag', p),
                    (r.VG() || r.lZ()) && d.setDFPProperties(t, o),
                    t
                  );
                }),
                (this.addProviderSlotImpressions = function (s, o) {
                  if (!n && e.ZT(o) && '14' !== o.id()) {
                    var r = new t.model(),
                      d = t.buildLog(r, o, s, i);
                    t.append(d);
                  }
                }),
                (this.addPublisherSlotImpression = function (s, o) {
                  if (!a && e.ZT(o)) {
                    var i = new t.model(),
                      r = t.buildLog(i, o, s, p);
                    t.append(r);
                  }
                }),
                r.logAPonSetTargeting() && !r.zV()
                  ? e.l('aplog:trigger', 'command', t.fire)
                  : r.isHeterogeneousLoggingEnabled(this.LOG_TYPE) ||
                    e.l('log:trigger', 'command', t.fire);
            }
            return e.MH(l, s), e.MH(a, o), a;
          }
        );
        _cD(
          'crllog',
          ['_', 'logmodel', 'cc', 'nic', 'logcollection', 'em', 'lutl', 'lc', 'res'],
          function (e, i, t, s, l, c, n, o, d) {
            'use strict';
            function r () {
              i.call(this);
            }
            function g () {
              (this.LOG_TYPE = 'crl'), l.call(this), (this.model = r);
              var i = this,
                t = n.isLogDisabled(i.LOG_TYPE);
              (this.encodeAndFire = function (t) {
                var l = e.b(t.getAll(), { encode: !0 });
                s.submit(c.getCsloggerUrl() + l, { type: 'img', tags: [i.LOG_TYPE] });
              }),
                (this.addNew = function (e) {
                  if (!t) {
                    var s = new i.model();
                    s
                      .set('vsid', e.vsid)
                      .set('pvgid', e.name)
                      .set('ovsid', e.value)
                      .set('cs', e.source),
                      i.encodeAndFire(s);
                  }
                });
            }
            return e.MH(r, i), e.MH(g, l), g;
          }
        );
        _cD('fllog', ['_', 'logmodel', 'cc', 'logcollection', 'lc', 'res'], function (
          l,
          t,
          c,
          e,
          i,
          o
        ) {
          'use strict';
          function n () {
            t.call(this);
          }
          function r () {
            (this.LOG_TYPE = 'fl'), e.call(this);
            var t = this;
            this.model = n;
            var c = new t.model();
            (this.addNew = function (l) {
              c.set('r', l.r || ''), c.set('a', l.a || ''), t.append(c);
            }),
              l.l('log:trigger', 'command', t.fire);
          }
          return l.MH(n, t), l.MH(r, e), r;
        });
        _cD(
          'ellog',
          ['_', 'logmodel', 'cc', 'logcollection', 'em', 'lutl', 'lc', 't', 'bid', 'res'],
          function (e, r, t, d, a, i, n, s, o, c) {
            'use strict';
            function l () {
              r.call(this);
            }
            function N () {
              function r (r, t, d) {
                var i = a.require('su'),
                  n = {};
                return (
                  e.ZT(i) && e.gb(i.getTargetingMap) && (n = i.getTargetingMap(t)),
                  e.k(d, {
                    crid: d.crid,
                    pvid: n.mnetbidID,
                    dfpbd: n.mnetbidPrice,
                    message: 'slot:' + r + ' kv:' + JSON.stringify(n),
                  })
                );
              }
              function t (e, r) {
                var t = e.getResponseInformation() || {};
                (r.li = t.lineItemId), i.addNew(r);
              }
              (this.LOG_TYPE = 'el'), d.call(this);
              var i = this;
              this.model = l;
              var n = !1,
                s = !1,
                o = !1;
              (this.addNewMultiplePlacementError = function (e, r, t) {
                var d = {
                  name: 'MULTIPLE_PLACEMENTS_ONE_SLOT',
                  logLevel: 2,
                  slotId: e,
                  crid: t,
                  message: r.sort(),
                };
                i.addNew(d);
              }),
                (this.addNewMultipleSlotError = function (r, t) {
                  var d = {
                    name: 'MULTIPLE_SLOTS_ONE_PLACEMENT',
                    logLevel: 2,
                    crid: r,
                    message: e
                      .map(t, function (e) {
                        return e.getSlotElementId();
                      })
                      .sort(),
                  };
                  i.addNew(d);
                }),
                (this.addNewNoWinningBidError = function (d) {
                  var n = { name: 'NO_WINNING_BID_ERROR' },
                    s = d.crid(),
                    o = a.require('plM').getById(s);
                  try {
                    n.crid = s;
                  } catch (c) {
                    n.crid = '';
                  }
                  n.rctr = d.placementRefreshCount() || 0;
                  var l = d.getDfpSlots();
                  return 0 === l.length
                    ? ((n.message = 'slot ' + o.code() + 'auctionId ' + d.id()), i.addNew(n))
                    : ((n = r(o.code(), l[0], n)), void setTimeout(e.H(t, [l[0], n], this), 0));
                }),
                (this.addNewInvalidRequestError = function (e) {
                  var r = new Error(),
                    t = { name: 'INVALID_RENDER_REQUEST', message: e || r.stack };
                  i.addNew(t);
                }),
                (this.addAaxAdBlockWallDetectedError = function (e) {
                  var r = new Error(),
                    t = { name: 'AAX_BLOCKED_ON_AD_BLOCK_WALL', message: e || r.stack };
                  i.addNew(t);
                }),
                (this.addNewSafeFrameCustomRenderAdError = function (e) {
                  var r = {
                    name: 'CUSTOM_RENDERAD_IN_SAFEFRAME_ERROR',
                    crid: e.get('crid'),
                    pvid: e.id(),
                  };
                  i.addNew(r);
                }),
                (this.addNewSafeFrameRenderError = function (e, r) {
                  var t = {
                    name: 'SAFEFRAME_RENDER_ERROR',
                    crid: e.get('crid'),
                    pvid: e.id(),
                    message: (r.name || '') + '|' + (r.message || ''),
                  };
                  i.addNew(t);
                }),
                (this.fireGPTDebugLog = function (e, r) {
                  if (r.length > 0) {
                    if (n === !0) return;
                    i.addNew({ name: 'MN_ADX_GET_HTML_ERROR', message: r.join(',') + '|v:' + e }),
                      (n = !0);
                  }
                }),
                (this.addNewGPTFetchedSlotWarning = function () {
                  if (!o) {
                    var e = { name: 'GPT_FETCHED_WARNING', logLevel: 2 };
                    i.addNew(e), (o = !0);
                  }
                }),
                (this.addNewRtbsRequestResponseCountMismatchError = function (e, r, t) {
                  var d = {
                    name: 'RTBS_REQUEST_RESPONSE_COUNT_MISMATCH',
                    logLevel: 2,
                    message: e + '|' + r + '|' + t,
                  };
                  i.addNew(d), i.fireError();
                }),
                (this.addNewRefreshWarning = function (e) {
                  if (a.WR()) {
                    var r = { name: 'REFRESH_WARNING', message: e, logLevel: 2 };
                    i.addNew(r);
                  }
                }),
                (this.addAdxServerWarning = function (e) {
                  var r = {
                    name: 'ADX_SERVER_WARNING',
                    crid: e.get('crid'),
                    pvid: e.get('brId'),
                    logLevel: 2,
                  };
                  i.addNew(r);
                }),
                (this.addNewGPTApiWarning = function (e) {
                  var r = { name: 'GPT_API_ERROR', message: e };
                  i.addNew(r);
                }),
                (this.addNewBackfillTagError = function (e) {
                  var r = { name: 'BACKFILL_TAG_ERROR', message: e };
                  i.addNew(r);
                }),
                (this.addCriteoNoContextError = function (e) {
                  var r = { name: 'CRITEO_NO_CALLBACK_ERROR', message: e };
                  i.addNew(r);
                }),
                (this.addAdsDisabledActionError = function () {
                  if (s !== !0) {
                    var e = { name: 'ADS_DISABLED' };
                    i.addNew(e), i.fire(), (s = !0);
                  }
                }),
                (this.addNew = function (e) {
                  var r = new i.model();
                  r
                    .set('name', e.name || 'UNKNOWN')
                    .set('stack', e.message || 'NONE')
                    .set('crid', e.crid || '')
                    .set('dfpDiv', e.slotId || '')
                    .set('pvid', e.pvid || '')
                    .set('dfpBd', e.dfpbd || '')
                    .set('lid', e.li || '')
                    .set('tref', e.rctr > 0)
                    .set('rfc', e.rctr)
                    .set('cpr', 1000 * Math.random())
                    .set('lvl', e.logLevel || 3),
                    i.append(r);
                }),
                (this.fireError = function () {
                  var e = { type: 'sb', tags: [i.LOG_TYPE, 'log'], method: 'POST' };
                  i.fire(null, e);
                });
            }
            return e.MH(l, r), e.MH(N, d), N;
          }
        );
        _cD('lh', ['_', 'bid', 'auc', 'em', 'bm', 'plM', 'lm', 'cc'], function (
          t,
          i,
          e,
          r,
          a,
          n,
          l,
          p
        ) {
          'use strict';
          function o (i, e) {
            if (!i.isGlobal() || !r.isApLogDisabledForGlobalTargeting()) {
              var a,
                n = [],
                p = i.getAuctionTime(),
                o = r.require('nullbidder-adapter');
              t.ZT(o) && t.gb(o.getNullBidByAdUnit) && ((a = o.getNullBidByAdUnit(i)), n.push(a));
              var d = i.getAllInternalParticipants();
              t.Qe(d) && d.length > 0 && Array.prototype.push.apply(n, d);
              var g = i.getAllExternalParticipants();
              t.Qe(g) && g.length > 0 && Array.prototype.push.apply(n, g);
              var y = i.getLateAuctionParticipants();
              y.length > 0 && Array.prototype.push.apply(n, y);
              var A = [];
              t.gb(i.getAllPmpParticipants) && (A = i.getAllPmpParticipants()),
                A.length > 0 && Array.prototype.push.apply(n, A),
                c(i, n),
                u(n, e),
                l.auctionParticipants.addPublisherSlotImpression(p, a),
                l.addProviderSlotImpressions(p, s(n));
            }
          }
          function s (i) {
            return t.filter(i, function (t) {
              return '0' !== t.id();
            });
          }
          function u (i, e) {
            if (t.ZT(e)) {
              var a = r.require('tm');
              t.ZT(a) && a.setSlotLevelProperties(i, e);
            }
          }
          function c (i, e) {
            t.a(e, function (t) {
              t.set('dst', i.displayTimeForSlot()),
                t.set('ttfd', i.get('ttfd')),
                t.set('auMxTm', i.auctionMaxTime());
            });
          }
          return { logAuctionParticipants: o };
        });
        _cD('r', ['_', 'pmc', 'em', 'bfm', 'res', 'prM'], function (e, t, r, s, i, E) {
          'use strict';
          function n () {
            var t,
              i = {},
              _ = '',
              I = this,
              P = !1;
            (this.get = function (e) {
              return i[e];
            }),
              (this.getBidResponseReceivedFlag = function () {
                return P;
              }),
              (this.set = function (e, t) {
                return (i[e] = t), this;
              }),
              (this.type = function (t) {
                return e.ZT(t) ? ((_ = t), this) : _;
              }),
              (this.setRequestProperties = function (e, t) {
                var i = s.getBidFloorAndSource(e, I.type());
                return (
                  this.set(n.Properties.CREATIVE_ID, e.get('crid'))
                    .set(n.Properties.BIDDER_ID, e.get('pid'))
                    .set(n.Properties.SIZE, t.sizes.join(o))
                    .set(n.Properties.ALL_SIZES, t.sizes)
                    .set(n.Properties.EXT_PUBLISHER_CODE, e.get('ecc') || r.kl())
                    .set(n.Properties.EXT_PLACEMENT_CODE, t.epc.join(o))
                    .set(n.Properties.FLOOR_PRICE, i.get('val'))
                    .set(n.Properties.BID_FLOOR_SOURCE, i.get('src'))
                    .set(n.Properties.AD_TYPE, E.isNativeProvider(e.id()) ? 3 : 1),
                  this
                );
              }),
              (this.handle = function (e) {
                (P = !0), t(e);
              }),
              (this.setHandler = function (e) {
                return (t = e), this;
              });
          }
          var o = '~';
          return (
            (n.Properties = {
              CREATIVE_ID: 'CRID',
              BIDDER_ID: 'BID',
              SIZE: 'SIZE',
              ALL_SIZES: 'ALL_SIZES',
              EXT_PUBLISHER_CODE: 'PBC',
              EXT_PLACEMENT_CODE: 'PC',
              FLOOR_PRICE: 'FP',
              BID_FLOOR_SOURCE: 'BFS',
              MEMBER_ID: 'MID',
              AD_TYPE: 'TYPE',
            }),
            n
          );
        });
        _cD('ct', ['_'], function (t) {
          'use strict';
          function n (n, e, i, r) {
            (this.getAuction = function () {
              return r;
            }),
              (this.getProviderConfigForSlot = function () {
                return n;
              }),
              (this.getRequestCollection = function () {
                return e;
              }),
              (this.getProviderService = function () {
                return i;
              }),
              (this.getRequestResponseCollectionId = function () {
                return t.ZT(e) && t.gb(e.id) ? e.id() : '';
              });
          }
          return n;
        });
        _cD(
          'bb',
          [
            'mnrp',
            '_',
            'bid',
            'r',
            't',
            'plM',
            'prM',
            'em',
            'bp',
            'plc',
            'prc',
            'pmc',
            'rsc',
            'res',
            'cc',
          ],
          function (t, e, s, r, i, n, d, g, a, p, c, o, u, b, f) {
            'use strict';
            function m (t, s) {
              var r = s.get('seat') || '';
              return e.ZT(r) && '' !== r ? t + '-' + r : '';
            }
            function v (t) {
              var s = [];
              return (
                e.a(t, function (t, e) {
                  s.push(e + '=' + t);
                }),
                s.join('|')
              );
            }
            function l (t, s) {
              var r = t.get('no_bid'),
                i = t.get('nbc'),
                n = t.get('og_bid');
              return r !== !0 && n <= (s.get('fp') || 0) ? 9 : e.ZT(i) ? i : 99;
            }
            function P (t) {
              var s = t.get('br');
              return e.ZT(s) && s === !0;
            }
            function _ (t, e, s, r) {
              return !(1 === e || ('P' === r && !g.UZ(s))) && 'cache' === t;
            }
            function I (t) {
              return e.ZT(t.get('adcode'));
            }
            function T (t, s) {
              var r = t.get('og_bid');
              return e.ZT(r) && r > (s.get('fp') || 0);
            }
            function h (t) {
              var s = t.get('no_bid');
              return e.ZT(s) && s === !0;
            }
            function y (t) {
              var e = t.get('provider_id');
              return n.isYbncaProviderId(e);
            }
            function B (t, e) {
              return !(h(t) || !T(t, e)) && (!(!g.Qc() || !y(t)) || I(t));
            }
            function Z (t) {
              var s = t.get('dealid') || '';
              return t.get('at') || (e.ZT(s) ? 'P' : 'O');
            }
            function R (t) {
              var s = t.get('integrations');
              return e.ZT(s) && e.Qe(s) ? s : [];
            }
            function S () {
              function p (t) {
                var e = t.get('dms') || {};
                return e.status || null;
              }
              function c (t) {
                var e = p(t);
                return 1 === e;
              }
              function o (t) {
                var e = p(t);
                return 3 === e;
              }
              function u (t, s) {
                if (!d.isYbncaAutoProvider(s)) return !1;
                var r = e.QZ(t.get('og_bid')),
                  i = e.QZ(t.get('erpm'));
                return c(t) ? i > r : g.AH();
              }
              function b () {
                return 1 === h.type();
              }
              function f (t) {
                return (h = new s().type(t)), y;
              }
              function I (t) {
                var s = c(t) || o(t);
                if (s === !0) {
                  var r = t.get('dms') || {};
                  h.set('dCbdp', e.x(r.cbdp))
                    .set('dms', s)
                    .set('tDmsStrat', r.strategy || '')
                    .set('dmsAp', r.ap || [])
                    .set('dmsRa', r.ra || []);
                }
              }
              function T () {
                if (!e.ZT(h.get('ttl'))) {
                  var t = h.get(s.Properties.PROVIDER_ID),
                    r = g.wE(t),
                    i = h.get('ts');
                  h.set('ttl', i + r);
                }
              }
              var h,
                y = this;
              (this.setPlacementSpecificBidProperties = function (t) {
                var e = n.getById(t);
                return (
                  h
                    .set('crid', t)
                    .set('g', e.get('g') ? '1' : '0')
                    .set('pt', e.get('pdt') || ''),
                  y
                );
              }),
                (this.setProviderSpecificBidProperties = function (t) {
                  var e = t.get('bg');
                  return (
                    h
                      .set('brId', t.get('pid'))
                      .set('brNm', t.get('bidder'))
                      .set('sspen', t.get('ssp') || !1)
                      .set('prMac', t.get('pm'))
                      .set('dpl', t.get('dpl') || '0')
                      .set('bgid', e)
                      .set('eid', t.get('eid')),
                    y
                  );
                }),
                (this.setPlacementProviderSpecificBidProperties = function (t) {
                  var e = t.get('szs') || [];
                  return (
                    h
                      .set('bren', P(t))
                      .set('smsrc', t.get('smsrc'))
                      .set('nms', e.length || 1),
                    y
                  );
                }),
                (this.setCommonResponseProperties = function (t, s, i, n, d) {
                  var a = t.get('category') || '',
                    p = t.get('attr') || '',
                    c = '0',
                    o = t.get('full_page_url'),
                    u = Z(t),
                    b = t.get('uid') || '',
                    f = t.get('dms') || {},
                    P = f.status,
                    I = t.get('sp') || {},
                    T = t.get('pageCat') || {};
                  return (
                    e.ZT(a) && e.Qe(a) && (a = a.join('|')),
                    e.ZT(p) && e.Qe(p) && (p = p.join('|')),
                    e.ZT(b) && (c = '1'),
                    e.ZT(P) || (P = ''),
                    h
                      .set('abs', t.get('ab') || '')
                      .set('adc', t.get('adcode') || '')
                      .set('adId', t.get('brandId') || '')
                      .set('adNm', t.get('advBrandName') || '')
                      .set('pvAgNm', t.get('agency_nm') || '')
                      .set('pvAgId', t.get('agency_id') || '')
                      .set('adUrl', t.get('landingPageUrl') || i.get('adn') || '')
                      .set('apid', t.get('apid') || g.G())
                      .set('bbid', t.get('bbid'))
                      .set('binb', t.get('providerBidderId') || '')
                      .set('bfs', t.get(r.Properties.BID_FLOOR_SOURCE) || '0')
                      .set('brt', new Date().getTime())
                      .set('bdFor', n)
                      .set('bId', t.get('buyerMemberId') || '')
                      .set('chfl', _(n, o, i.get('pid'), u))
                      .set('cmpid', t.get('buyer_id') || '')
                      .set('cat', a || '')
                      .set('cnt', t.get('connectionTime'))
                      .set('ckfl', c)
                      .set('cs', t.get('cs') || '')
                      .set('attr', p || '')
                      .set('iurl', t.get('iurl') || '')
                      .set('dtc', t.get('region') || '')
                      .set('di', t.get('dealid') || '')
                      .set('dt', u)
                      .set('dnst', t.get('dnsTime'))
                      .set('dbf', t.get('dbf') ? '1' : '0')
                      .set('dwnt', t.get('downloadTime'))
                      .set('exp', v(t.get('experiment') || {}))
                      .set('erpm', t.get('erpm'))
                      .set('epc', t.get('ext_placement_code'))
                      .set('uid', b)
                      .set('fb', t.get('fb'))
                      .set('bidflr', e.x(t.get('floor') || 0))
                      .set('fpuReq', o)
                      .set('gbid', t.get('gbid') || 0)
                      .set('htps', t.get('htps') ? '1' : '0')
                      .set('impId', t.get('impId'))
                      .set('patint', R(t))
                      .set('patkey', t.get('integrationKey') || '')
                      .set('lt', d)
                      .set('lpx', t.get('logging_pixels') || [])
                      .set('mlogs', t.get('mowxLogs') || {})
                      .set('mowxReqId', t.get('prvReqId') || '')
                      .set('mpSeg', t.get('mp_seg') || [])
                      .set('nAp', t.get('apnotify') || [])
                      .set('nbr', l(t, s))
                      .set('paId', t.get('prvAccId') || '')
                      .set('pApId', t.get('publisher_id') || s.get('ecc') || '')
                      .set('pcId', t.get('uid') || '')
                      .set('pcrid', t.get('crid') || '')
                      .set('pvRqId', t.get('bidReqId') || '')
                      .set('rt', t.get('responseTime') || '')
                      .set('seat', t.get('seat') || '')
                      .set('sslt', t.get('sslTime'))
                      .set('sbdrid', t.get('sub_bidder_id') || '')
                      .set('ts', e.Wb())
                      .set('tc', t.get('rstb') ? '1' : '0')
                      .set('dur', t.get('total'))
                      .set('vbid', t.get('vbid'))
                      .set('vcfl', t.get('vcfl') ? '1' : '0')
                      .set('wt', t.get('waitTime'))
                      .set('wsip', t.get('serverId') || '')
                      .set('ssregion', t.get('sspRegion') || '')
                      .set('ssreqid', t.get('sspRequestId') || '')
                      .set('sssvnm', t.get('sspSvrName') || '')
                      .set('dmsStat', P)
                      .set('sp_source', I.source || '0')
                      .set('sp_ivt', I.ivt || '0')
                      .set('sp_id', I.id || '')
                      .set('sp_to', I.to || '0')
                      .set('sp_fst', I.fst || '0')
                      .set('sp_is_req', I.isReq || '0')
                      .set('iabcat', T.iab)
                      .set('iabcat2', T.iab2)
                      .set('sprigcat', T.google)
                      .set('pvNbr', t.get('pv_nbr'))
                      .set('pvNbrDtls', t.get('pv_nbr_dtls'))
                      .set('pseat', m(i.id(), t)),
                    y
                  );
                }),
                (this.setBidStatus = function (t, e) {
                  return B(t, e) ? y.status(1) : y.status(2);
                }),
                (this.setThirdPartyTargets = function (s, r) {
                  if (!e.ZT(h.get('brId')) || !e.ZT(h.get('crid')) || !e.ZT(h.status()))
                    return (
                      t.pushError({
                        message: 'Getter used before setter',
                        name: 'BID_BUILDER_ERROR',
                      }),
                      h.set('tpt', {}),
                      y
                    );
                  var n = new i();
                  return (
                    1 === h.status()
                      ? (n
                          .set(s.bid, h.get('dfpBd'))
                          .set(s.epc, r.get('ext_placement_code'))
                          .set(s.size, r.get('size'))
                          .set(s.ltime, h.get('lt'))
                          .set(s.dealType, h.get('dt') || '')
                          .set('mnet_placement', h.get('crid'))
                          .set('mnetCID', g.kl())
                          .set('mnetSize', r.get('size')),
                        g.Zb(h.get('brId')) && n.set(s.test, 1),
                        d.isNativeProvider(h.get('brId')) && n.set('mnetNative', 1),
                        e.ZT(h.get('di')) && n.set(s.dealId, h.get('di') || ''))
                      : g.Rz() &&
                        e.ZT(s.nbf) &&
                        (3 !== h.status() && r.get('rstb')
                          ? n.set(s.nbf, '1')
                          : n.set(s.nbf, '0')),
                    h.set('tpt', n.serialize()),
                    y
                  );
                }),
                (this.setBidderSpecificProperties = function (t, e) {
                  if (b()) {
                    var s = d.getTargetingKeysById(t);
                    y.setThirdPartyTargets(s, e);
                  }
                  return y;
                }),
                (this.setBidPriceProperties = function (t, s, r, i) {
                  var n = h.get('dt');
                  r = r || s.get('pid').toString();
                  var d = { providerId: r, dealType: n, adUnitParam: s, ogbdp: t || '0' };
                  return (i = i || {}), e.k(d, i), (h = a.setPriceProperties(h, d)), y;
                }),
                (this.setEntityProperties = function (t, e) {
                  var s,
                    r = t.get('crid');
                  return (
                    (e = e || t.get('pid').toString()),
                    (s = d.getById(e)),
                    y.setPlacementSpecificBidProperties(r),
                    y.setProviderSpecificBidProperties(s),
                    y.setPlacementProviderSpecificBidProperties(t),
                    y
                  );
                }),
                (this.setBidProperties = function (t, s, r, i) {
                  var n = (s.get('provider_id') || t.get('pid')).toString(),
                    g = d.getById(n),
                    a = 0,
                    p = s.get('og_bid');
                  return (
                    y.setEntityProperties(t, n),
                    y.setCommonResponseProperties(s, t, g, r, i),
                    y.setBidStatus(s, t),
                    u(s, n) && ((a = 1), (p = e.QZ(s.get('erpm')))),
                    I(s),
                    y.setBidPriceProperties(p, t, n),
                    y.set('yErpmFlag', a),
                    y.set('ogbid', s.get('og_bid')),
                    y.setBidderSpecificProperties(n, s),
                    y
                  );
                }),
                (this.set = function (t, e) {
                  return h.set(t, e), y;
                }),
                (this.status = function (t) {
                  return h.status(t), y;
                }),
                (this.createInternalBid = function () {
                  return f(0);
                }),
                (this.createThirdPartyBid = function () {
                  return f(1);
                }),
                (this.create = function () {
                  return (h = new s()), y;
                }),
                (this.setBidType = function (t) {
                  var e = t.get('pid').toString(),
                    s = d.isThirdPartyProvider(e) ? 1 : 0;
                  return h.type(s), y;
                }),
                (this.build = function () {
                  return T(), h;
                });
            }
            return S;
          }
        );
        _cD(
          'mrm',
          [
            window,
            '_',
            'bid',
            'config',
            'cc',
            'em',
            'bm',
            'mrsm',
            'r',
            'pmc',
            'rqc',
            'rsc',
            'res',
            'lm',
            'inmemdatasource',
            'nic',
            'impressionrequest',
            'drs',
            'plc',
          ],
          function (e, n, t, i, r, o, u, s, a, c, p, f, d, l, g, m, v, h, T) {
            'use strict';
            function Z (e, n) {
              if (0 !== n && 0 !== e) return parseInt(e - n);
            }
            function R (e) {
              var n = {};
              return (
                (n.dnsTime = Z(e.domainLookupEnd, e.domainLookupStart)),
                (n.connectionTime = Z(e.connectEnd, e.connectStart)),
                (n.waitTime = Z(e.responseStart, e.startTime)),
                (n.downloadTime = Z(e.responseEnd, e.responseStart)),
                (n.total = parseInt(e.duration)),
                (n.sslTime = Z(e.connectEnd, e.secureConnectionStart)),
                n
              );
            }
            function S (e) {
              n.a(e, function (e) {
                var t = n.Zx(e.name, 'prvReqId');
                if (n.ZT(t)) {
                  var i = W[t];
                  n.ZT(i) && i.setNetworkTime(R(e));
                }
              });
            }
            function b () {
              return o.du() && o.mY()
                ? o.C()
                : o.ul() && o.iF()
                ? o.y()
                : o.hW() && !o.z()
                ? o.Vl()
                : o.X();
            }
            function P () {
              return o.hW() && !o.z() ? o.Vl() : o.s();
            }
            function I (e) {
              return 'akamai' === e ? o.p() : P();
            }
            function w (e, t) {
              var i = o.require('mck');
              if (n.ZT(i)) {
                var r = {};
                o.Zs() && 'cache' === t && (r = i.getCookiesReceivedFromPostMessage()),
                  i.areCookiesAllowedInLocalStorage() && (r = i.getCookiesFromLocalStorage()),
                  n.a(r, function (t, i) {
                    n.ZT(t) &&
                      '0' !== t &&
                      ('visitor-id' === i ? e.input(i, n.y(t)) : e.input(i, n.y(t + '~~101')));
                  });
              }
            }
            function y (t) {
              function i () {
                return n.ZT(q) && 'akamai' !== d;
              }
              function r () {
                g++, g === l.length && n.WZ('endOfStreamResponse', t);
              }
              function u () {
                var e = [];
                n.a(l, function (t) {
                  var i = t.getProviders();
                  n.a(i, function (t) {
                    n.ZT(t) && !n.e(e, t) && e.push(t);
                  });
                }),
                  n.a(e, function (e) {
                    n.WZ('endOfResponse', p + '_' + e);
                  });
              }
              function c (t) {
                function i (e) {
                  n.ZT(e) && !n.e(re, e) && re.push(e);
                }
                function u (e) {
                  var t = {};
                  return (t =
                    n.O() && n.ZT(e.data)
                      ? JSON.parse(e.data)
                      : new Function('return ' + e.data)());
                }
                function c (e) {
                  n.ZT(e) && (_[e] !== !0 && M++, (_[e] = !0));
                }
                function f () {
                  var e = [];
                  return (
                    n.a(te, function (t, i) {
                      n.ZT(i) && e.push(i);
                    }),
                    e.join(',')
                  );
                }
                function l (e, t) {
                  return n.ZT(e) && n.ZT(t) && n.ZT(X[e]) && X[e][t];
                }
                function g (e, t, i) {
                  if (n.ZT(te[t]) && n.ZT(te[t][i])) {
                    var r = e.getProviderResponseForAllSizes();
                    n.ZT(r) &&
                      n.Qe(r) &&
                      n.a(r, function (e) {
                        e.parse(oe),
                          e.set(
                            a.Properties.BID_FLOOR_SOURCE,
                            te[t][i].get(a.Properties.BID_FLOOR_SOURCE)
                          );
                      });
                    var o = l(t, i);
                    n.gb(o) && o(e);
                  }
                }
                function T (e) {
                  var i;
                  i =
                    o.hW() && !o.z()
                      ? s.createSspScriptResponseParser(t).parseResponse(p, e)
                      : s.createMowxScriptResponseParser(t).parseResponse(p, e);
                  var r = i.getAllProviderResponses();
                  return (
                    c(i.mowxReqID()),
                    n.i(r)
                      ? void n.WZ('endOfStreamResponse', t)
                      : (n.a(r, function (e, t) {
                          n.a(e, function (e, n) {
                            g(e, t, n);
                          });
                        }),
                        void n.WZ('endOfStreamResponse', t))
                  );
                }
                function Z (e, t) {
                  var i = '{{BID}}|{{SIZE}}|{{PBC}}|{{PC}}|{{FP}}';
                  return (
                    o.Vm() && (i = '{{BID}}|{{SIZE}}|{{PBC}}|{{PC}}|{{FP}}|{{MID}}|{{TYPE}}'),
                    n.a(a.Properties, function (e) {
                      i = i.replace(new RegExp('{{' + e + '}}'), t.get(e) || '');
                    }),
                    e + '*' + i
                  );
                }
                function R () {
                  var e = [];
                  return (
                    n.a(te, function (t, i) {
                      n.a(t, function (n, t) {
                        e.push(Z(i, n));
                      });
                    }),
                    e.join('@')
                  );
                }
                function S () {
                  var e = {};
                  n.a(te, function (t, i) {
                    (e[i] = e[i] || new v(i)),
                      n.a(t, function (n, t) {
                        e[i].addProviderWithBidFloor(t, n.get(a.Properties.FLOOR_PRICE)),
                          e[i].addSizes(n.get(a.Properties.ALL_SIZES));
                      });
                  });
                  var t = [];
                  return (
                    n.a(e, function (e) {
                      t.push(e.getImpressionString());
                    }),
                    t.join('!')
                  );
                }
                function P () {
                  var e;
                  return (e = o.hW() && 'akamai' !== d && !o.z() ? S() : R()), n.y(e);
                }
                function y () {
                  n.a(te, function (e, i) {
                    n.a(e, function (e, r) {
                      n.clock.tick('rtbsDataLoadTime' + t + i + r);
                    });
                  });
                }
                function C () {
                  return 'rtbs' + t;
                }
                function E () {
                  return (e.hbCMBidxc[C()] = n.Wa(T, e.hbCMBidxc)), 'window.hbCMBidxc.' + C();
                }
                function F () {
                  return (
                    (e.hbCMBidxc[C()] = n.Wa(T, e.hbCMBidxc)), 'window.parent.hbCMBidxc.' + C()
                  );
                }
                function O (e) {
                  n.a(ee, function (n, t) {
                    e.input(t, n);
                  });
                }
                function x (e) {
                  n.i(ne) ||
                    n.a(e.freeze(), function (t, i) {
                      var r = n.W(ne, function (e) {
                        return !!e(i) || void 0;
                      });
                      r || e.deleteProperty(i);
                    });
                }
                function q () {
                  if (!n.i(ie)) return JSON.stringify(ie);
                }
                function B (e) {
                  if (!n.ZT(e) || !n.gb(e.getDfpSlots)) return {};
                  var t = e.getDfpSlots()[0];
                  if (!n.ZT(t)) return {};
                  var i = t.getSlotElementId();
                  return n.E(i);
                }
                function D () {
                  var e = {};
                  return (
                    n.a(ue, function (t, i) {
                      var r = {},
                        u = o.VS(),
                        s = t.getInViewFlag(),
                        a = t.getMnetRefreshFlag(),
                        c = t.placementRefreshCount(),
                        p = B(t);
                      return (
                        n.i(p) ||
                          ((r.xps = (p.left + p.right) / 2), (r.yps = (p.top + p.bottom) / 2)),
                        '1' === a && u && ((r.mniv = s), (r.mnrf = a)),
                        t.isRefreshAuction() && !t.isGlobal() && (r.rfcnt = c),
                        n.ZT(t.slotElementId()) && (r.supply_tag_id = t.slotElementId()),
                        n.i(r) ? '' : void (e[i] = r)
                      );
                    }),
                    JSON.stringify(e)
                  );
                }
                function V () {
                  var e = {};
                  return (e.vw = n.gG()), (e.vh = n.S()), (e.ph = n.o()), JSON.stringify(e);
                }
                function z () {
                  return o.mY() && o.du()
                    ? 'eu'
                    : o.iF() && o.ul()
                    ? 'apac'
                    : 'w' === o.Zu()
                    ? 'nc'
                    : 'nv';
                }
                function N () {
                  var e = n.B('data-info');
                  return { market: J(e, 'm'), pageType: J(e, 'PageName') };
                }
                function J (e, t) {
                  var i = new RegExp('[^a-zA-Z0-9-]' + t + ':(.*?)([;},])'),
                    r = i.exec(e);
                  return n.Qe(r) && r[1] ? r[1] : null;
                }
                function Q (e) {
                  if (o.VG()) return e.input('encryptionVersion', '1.0');
                }
                function j () {
                  var e = o.I();
                  return n.ZT(e) && n.gb(e.getSSPKeyForAppnexus) ? e.getSSPKeyForAppnexus() : '';
                }
                function G (e) {
                  var i, r;
                  if (
                    (o.Fl() &&
                      'akamai' !== d &&
                      (r = m.stream(b() + e, { tags: ['bid', 'sbr'], type: 'es' })),
                    'undefined' != typeof r)
                  ) {
                    var a;
                    return (
                      (a = o.hW()
                        ? s.createMowxStreamResponseParser(t)
                        : s.createMowxStreamResponseParser(t)),
                      r.addEventListener(
                        'close',
                        function (e) {
                          n.ZT(e) &&
                            'CLOSE' === e.data &&
                            (r.close(), n.WZ('endOfStreamResponse', t));
                        },
                        !1
                      ),
                      r.addEventListener(
                        'error',
                        function () {
                          c(a.mowxReqID()), n.WZ('endOfStreamResponse', t);
                        },
                        !1
                      ),
                      r.addEventListener(
                        'metaSSP',
                        function (e) {
                          if (n.ZT(e)) {
                            var t = u(e);
                            a.parseSspServerInfo(t);
                          }
                        },
                        !1
                      ),
                      r.addEventListener(
                        'meta',
                        function (e) {
                          if (n.ZT(e)) {
                            var t = u(e);
                            a.parseResponseMeta(t), c(a.mowxReqID());
                          }
                        },
                        !1
                      ),
                      r.addEventListener(
                        'pinfo',
                        function (e) {
                          if (n.ZT(e)) {
                            var t = u(e);
                            a.parseProviderInfo(t);
                          }
                        },
                        !1
                      ),
                      void r.addEventListener(
                        'resp',
                        function (e) {
                          if (n.ZT(e)) {
                            var t = u(e),
                              i = a.parseStreamResponse(t, p),
                              r = i.get('creative_id'),
                              o = i.get('provider_id');
                            g(i, r, o);
                          }
                        },
                        !1
                      )
                    );
                  }
                  var f = I(d);
                  (i = f + e),
                    'cache' === d
                      ? m.submit(i + '&callback=' + F(), {
                          name: 'rtbs' + d,
                          tags: ['bid', 'sbr'],
                          type: 'ifScr',
                        })
                      : m.submit(i + '&callback=' + E(), { tags: ['bid', 'sbr'], type: 'script' });
                }
                var U,
                  Y,
                  H = 0,
                  K = !1,
                  X = {},
                  $ = !1,
                  ee = {},
                  ne = {},
                  te = {},
                  ie = {},
                  re = [],
                  oe = {},
                  ue = {},
                  se = this;
                (this.getProviders = function () {
                  return re;
                }),
                  (this.id = function () {
                    return t;
                  }),
                  (this.getRequestCount = function () {
                    return H;
                  }),
                  (this.setNetworkTime = function (e) {
                    oe = e;
                  }),
                  (this.add = function (e, t) {
                    H++, se.attachListeners(t);
                    var r = e.get(a.Properties.BIDDER_ID),
                      o = e.get(a.Properties.CREATIVE_ID);
                    n.ZT(r) &&
                      n.ZT(o) &&
                      ((te[o] = te[o] || {}),
                      (te[o][r] = e),
                      i(r),
                      se.addFilter(r, se.defaultFilter),
                      se.addProviderResponseParser(o, r, e.handle));
                  }),
                  (this.get = function (e, t) {
                    if (n.ZT(te[e]) && n.ZT(te[e][t])) return te[e][t];
                  }),
                  (this.type = function (e) {
                    return n.ZT(e) ? ((U = e), this) : U;
                  }),
                  (this.attachListeners = function (e) {
                    K === !1 &&
                      ((K = !0),
                      n.gb(e) || (e = n.H(se.fire, [], this)),
                      'headerBid' === d || 'akamai' === d
                        ? n.l('apiCallsSent', 'global', e)
                        : 'cache' === d && n.l('prefetch', 'global', e));
                  }),
                  (this.isListenerAttached = function () {
                    return K;
                  }),
                  (this.getProviderRequestType = function () {
                    return d;
                  }),
                  (this.addProviderResponseParser = function (e, n, t) {
                    (X[e] = X[e] || {}), (X[e][n] = t);
                  }),
                  (this.setAdditionalParam = function (e, t) {
                    n.ZT(e) && n.ZT(t) && (ee[e] = t);
                  }),
                  (this.endOfResponse = function () {
                    n.a(te, function (e, i) {
                      n.a(e, function (e, n) {
                        if (e.getBidResponseReceivedFlag() === !1) {
                          var r = s.getResponseParserFromIdentifier(t),
                            o = r.getClientInvalidResponse(i, n, p);
                          e.handle(o);
                        }
                      });
                    }),
                      r();
                  }),
                  (this.defaultFilter = function () {
                    return !0;
                  }),
                  (this.addFilter = function (e, n) {
                    ne[e] = n;
                  }),
                  (this.rtusUid = function (e, t) {
                    n.ZT(t) && (ie[e] = t);
                  }),
                  (this.mowxReqID = function () {
                    return n.ZT(Y) || ((Y = n.AZ()), (W[Y] = se)), Y;
                  }),
                  (this.addAuction = function (e) {
                    var t = e.crid();
                    n.ZT(ue[t]) || (ue[t] = e);
                  }),
                  (this.fire = function () {
                    if (!$) {
                      ($ = !0),
                        A++,
                        (_[se.mowxReqID()] = !1),
                        n.clock.tick('rtbsResponseTime' + se.mowxReqID());
                      var t = o.Xd(d),
                        i = o.AR(),
                        r = o.sJ(),
                        u = o.xm(),
                        s = o.S(),
                        a = o.Ab(),
                        c = o.gb(),
                        p = P(),
                        l = o.m(),
                        g = o.D(),
                        m = f(),
                        v = '2',
                        T = '0',
                        Z = '',
                        R = '0',
                        S = '0',
                        b = '',
                        I = o.El(),
                        C = o.Zj(),
                        E = j(),
                        F = o.require('tcfm');
                      n.ZT(F) &&
                        ((T = F.getGdprFlag()),
                        (Z = F.getTcString()),
                        (v = F.getConsentFlagForMowx()),
                        '2' === v && (v = o.nb()));
                      var B = o.require('ccmg');
                      n.ZT(B) &&
                        ((R = B.getCcpaEnforcementFlag()),
                        (S = B.getCcpaApplicableFlag()),
                        (b = B.getFinalConsentString()));
                      var W = new n.A()
                        .input('gdpr', T)
                        .input('gdprstring', Z)
                        .input('gdprconsent', v)
                        .input('usp_enf', R)
                        .input('usp_status', S)
                        .input('us_privacy', b)
                        .input('cid', o.kl())
                        .input('region', z())
                        .input('ptrid', o.lk())
                        .input('requestString', p)
                        .input('crid', n.y(m))
                        .input('sd', o.oR())
                        .input('requrl', n.y(r))
                        .input('bl', 1)
                        .input('rt', 5)
                        .input('dn', e.location.origin)
                        .input('https', o.nc() ? 1 : 0)
                        .input('act', d)
                        .input('prvReqId', se.mowxReqID())
                        .input('erTr', u ? 1 : 0)
                        .input('hlt', 1)
                        .input('ugd', o.Zw())
                        .input('adt', o.pF())
                        .input('kwrf', n.y(o.VJ()))
                        .input('tr', Math.random())
                        .input('ndec', 1)
                        .input('rtusuid', n.y(q()))
                        .input('scrsize', n.y(n.lU()))
                        .input('taginfo', n.y(D()))
                        .input('pageinfo', n.y(V()))
                        .input('itype', o.lB());
                      if (
                        (W.input('dma', o.E())
                          .input('cc', o.e())
                          .input('rc', o.Rb())
                          .input('ct', o.U()),
                        n.ZT(s) && W.input('sid', s),
                        o.Zv() && W.input('scc', 1),
                        o.g() && W.input('nv', 1),
                        n.Td(t) && W.input('tmt', t),
                        o.VE() && W.input('furl', i),
                        n.ZT(c) && W.input('section', n.y(c)),
                        n.ZT(a) && W.input('channel', n.y(a)),
                        n.Qe(l) && l.length > 0 && W.input('bcat', n.y(l.join(','))),
                        2 !== U || o.Vm() || W.input('at', 3),
                        o.Qc() && !o.lQ() && W.input('bt', 1),
                        o.Qc() || W.input('prid', o.QW()),
                        o.cw() && !h.isActionApplicable('STOP_WHITEOPS') && W.input('wo', 1),
                        n.ZT(g) && W.input('rhc', g),
                        n.ZT(L) && n.gb(L.parameterIngestion) && L.parameterIngestion(W),
                        n.ZT(I) && W.input('frpvid', I),
                        n.ZT(I) && n.ZT(C) && W.input('frbid', C),
                        !o.Fl() && o.kb() && 'headerBid' === d && W.input('ssa', 1),
                        o.YF() && o.hW() && W.input('ima', 1),
                        o.bF())
                      ) {
                        var M = N();
                        W.input('mktp', M.market || ''), W.input('pg_type', M.pageType || '');
                      }
                      n.ZT(E) && '' !== E && W.input('apxSsp', E), w(W, d), O(W), x(W), Q(W);
                      var J = '?' + n.J(W.freeze());
                      J.length > k && (J += '&switch=1'), y(), G(J);
                    }
                  });
              }
              var p,
                f,
                d = '',
                l = [],
                g = 0;
              (this.id = function () {
                return t;
              }),
                (this.setImpressionId = function (e) {
                  return n.ZT(e) && (p = e), this;
                }),
                (this.setProviderRequestType = function (e) {
                  return n.ZT(e) && (d = e), this;
                }),
                (this.getCurrentRequestCollection = function () {
                  if (!n.ZT(f) || (f.getRequestCount() === q && i())) {
                    var e = t + 'S' + l.length;
                    (f = new c(e)), n.l('endOfStreamResponse', e, f.endOfResponse), l.push(f);
                  }
                  return f;
                }),
                (this.endOfResponse = function () {
                  u(), n.WZ('prlog:trigger', 'command', !0);
                });
            }
            function C (e) {
              return B[e] ? B[e] : (o.VG() ? (B[e] = n.lm(e)) : (B[e] = e), B[e]);
            }
            function E (e, t, i) {
              var r = i || e + t;
              return (
                (r = C(r)),
                n.ZT(D[r]) ||
                  ((D[r] = new y(r).setImpressionId(t).setProviderRequestType(e)),
                  n.l('endOfStreamResponse', r, D[r].endOfResponse)),
                D[r].getCurrentRequestCollection()
              );
            }
            function F () {
              var e = o.ld();
              if (n.ZT(e) && (100 * M) / A < e) {
                var t = 0;
                n.a(_, function (e, i) {
                  e || (t = Math.max(t, n.clock.getTime('rtbsResponseTime' + i)));
                }),
                  l.errorLogs.addNewRtbsRequestResponseCountMismatchError(A, M, t);
              }
            }
            function O () {
              if (e.PerformanceObserver)
                try {
                  var t = new PerformanceObserver(function (e) {
                    S(e.getEntries());
                  });
                  t.observe({ entryTypes: ['resource'] }),
                    (e.hbCMBidxc.processPrefetchPerformanceEntries = n.Wa(S, e.hbCMBidxc));
                } catch (i) {}
            }
            function x () {
              O(), n.eventLib.addEvent(e, 'unload', F);
            }
            var k = 2500,
              q = o.db(),
              L = o.I(),
              B = {},
              D = {},
              W = {},
              _ = {},
              A = 0,
              M = 0;
            return x(), { getRequestCollection: E };
          }
        );
        _cD('impressionrequest', ['_'], function (n) {
          'use strict';
          function i (i) {
            function s () {
              var i = [];
              return (
                n.a(e, function (n, t) {
                  i.push(t);
                }),
                i
              );
            }
            function c () {
              var i = [];
              return (
                n.a(a, function (t, u) {
                  n.ZT(t) && t > 0 ? i.push(u + o + t) : i.push(u);
                }),
                i
              );
            }
            var e = {},
              a = {};
            (this.addSizes = function (i) {
              n.a(i, function (n) {
                e[n] = !0;
              });
            }),
              (this.addProviderWithBidFloor = function (n, i) {
                a[n] = i;
              }),
              (this.getImpressionString = function () {
                var n = [];
                return n.push(i), n.push(s().join(r)), n.push(c().join(u)), n.join(t);
              });
          }
          var t = '*',
            u = '-',
            r = '~',
            o = '~';
          return i;
        });
        _cD(
          'mrsm',
          [
            '_',
            'mowxStreamResponseParser',
            'mowxScriptResponseParser',
            'sspStreamResponseParser',
            'sspScriptResponseParser',
          ],
          function (e, r, n, s, t) {
            'use strict';
            function o (r) {
              if (e.ZT(w[r])) throw new Error('A Collection Identifier already exists');
              return (w[r] = new s()), w[r];
            }
            function i (n) {
              if (e.ZT(w[n])) throw new Error('A Collection Identifier already exists');
              return (w[n] = new r()), w[n];
            }
            function a (r) {
              if (e.ZT(w[r])) throw new Error('A Collection Identifier already exists');
              return (w[r] = new n()), w[r];
            }
            function c (r) {
              if (e.ZT(w[r])) throw new Error('A Collection Identifier already exists');
              return (w[r] = new t()), w[r];
            }
            function p (r) {
              if (!e.ZT(w[r])) throw new Error("Response Collection doesn't exist");
              return w[r];
            }
            var w = {};
            return {
              getResponseParserFromIdentifier: p,
              createMowxStreamResponseParser: i,
              createSspStreamResponseParser: o,
              createMowxScriptResponseParser: a,
              createSspScriptResponseParser: c,
            };
          }
        );
        _cD(
          'mowxScriptResponseParser',
          ['responseInfo', '_', 'rsc', 'responseParserUtil'],
          function (e, n, t, s) {
            'use strict';
            function r () {
              var t = new e();
              (this.parseResponse = function (e, r) {
                if (n.i(r)) return this;
                (t.metaInfoInstance = s.parseResponseMeta(r.meta || {})),
                  (t.providerInfoCollectionInstance = s.parseProviderInfo(r.pinfo || {}));
                var o = r.tl;
                return !n.ZT(o) || n.i(o)
                  ? this
                  : (n.a(o, function (r, o) {
                      var i = r.bl || {};
                      n.a(i, function (n, r) {
                        var i = s.parseProviderResponse(n, e, t);
                        t.setProviderResponse(o, r, i);
                      });
                    }),
                    this);
              }),
                (this.getClientInvalidResponse = function (e, n, r) {
                  return s.getClientInvalidResponse(e, n, r, t);
                }),
                (this.getAllProviderResponses = function () {
                  return t.getAllProviderResponses();
                }),
                (this.mowxReqID = function () {
                  return s.getMowxRequestId(t);
                });
            }
            return r;
          }
        ),
          _cD('mowxStreamResponseParser', ['_', 'responseParserUtil', 'responseInfo'], function (
            e,
            n,
            t
          ) {
            'use strict';
            function s () {
              var e = new t();
              (this.parseSspServerInfo = function (t) {
                e.sspMetaInfoInstance = n.parseSspServerInfo(t);
              }),
                (this.parseResponseMeta = function (t) {
                  e.metaInfoInstance = n.parseResponseMeta(t);
                }),
                (this.parseProviderInfo = function (t) {
                  e.providerInfoCollectionInstance = n.parseProviderInfo(t);
                }),
                (this.parseStreamResponse = function (t, s) {
                  return n.parseProviderResponse(t, s, e);
                }),
                (this.getClientInvalidResponse = function (t, s, r) {
                  return n.getClientInvalidResponse(t, s, r, e);
                }),
                (this.mowxReqID = function () {
                  return n.getMowxRequestId(e);
                });
            }
            return s;
          }),
          _cD('providerInfoCollection', function () {
            'use strict';
            function e () {
              var e = {};
              (this.add = function (n, t) {
                e[n] = t;
              }),
                (this.getById = function (n) {
                  return e[n];
                });
            }
            return e;
          }),
          _cD('providerInfo', ['_', 'response'], function (e, n) {
            'use strict';
            function t () {
              n.call(this);
            }
            return e.MH(t, n), t;
          }),
          _cD(
            'providerResponse',
            ['_', 'response', 'pmc', 'rsc', 'res', 'pec', 'providerSizeResponse'],
            function (e, n, t, s, r, o, i) {
              'use strict';
              function a () {
                function t (n) {
                  e.ZT(u) && n.parse(u.getAll());
                }
                function s (n) {
                  e.ZT(p) && e.ZT(p.getAll()) && n.parse(p.getAll());
                }
                function r (n) {
                  e.ZT(d) && e.ZT(d.getAll()) && n.parse(d.getAll());
                }
                function o (n) {
                  e.ZT(f) && n.parse(f);
                }
                function a (e) {
                  return t(e), s(e), r(e), o(e), e;
                }
                function c (e, n) {
                  var t = e.getProviderConfigForSlot();
                  return (
                    (n = n || t.get('szs')[0].get('sz')),
                    new i()
                      .set('provider_id', t.get('pid'))
                      .set('adcode', null)
                      .set('creative_id', t.get('crid'))
                      .set('no_bid', !0)
                      .set('nbc', 8)
                      .set('og_bid', 0)
                      .set('size', n)
                  );
                }
                n.call(this);
                var p,
                  u,
                  f,
                  d,
                  I = [];
                (this.addProviderResponseForSize = function (e) {
                  I.push(e);
                }),
                  (this.addMnetSspServerInstance = function (e) {
                    u = e;
                  }),
                  (this.addMnetMetaInstance = function (e) {
                    p = e;
                  }),
                  (this.addProviderInfoInstance = function (e) {
                    d = e;
                  }),
                  (this.addAdSlotProviderMeta = function (e) {
                    f = e;
                  }),
                  (this.getDefaultResponse = function (e) {
                    return I[0] || a(c(e));
                  }),
                  (this.getProviderResponseForSize = function (n, t) {
                    var s = e.W(I, function (n) {
                      if (e.ZT(n) && n.get('size') === t) return n;
                    });
                    return s || a(c(n, t));
                  }),
                  (this.getProviderResponseForAllSizes = function () {
                    return I;
                  });
              }
              return e.MH(a, n), a;
            }
          ),
          _cD('providerSizeResponse', ['_', 'response'], function (e, n) {
            'use strict';
            function t () {
              n.call(this);
            }
            return e.MH(t, n), t;
          }),
          _cD(
            'responseInfo',
            ['providerInfoCollection', 'sspServerInfo', 'responseMeta'],
            function (e, n, t) {
              'use strict';
              function s () {
                var s = this,
                  r = {};
                (s.metaInfoInstance = new t()),
                  (s.sspMetaInfoInstance = new n()),
                  (s.providerInfoCollectionInstance = new e()),
                  (this.setProviderResponse = function (e, n, t) {
                    (r[e] = r[e] || {}), (r[e][n] = t);
                  }),
                  (this.getAllProviderResponses = function () {
                    return r;
                  });
              }
              return s;
            }
          ),
          _cD('responseMeta', ['_', 'response'], function (e, n) {
            'use strict';
            function t () {
              n.call(this);
            }
            return e.MH(t, n), t;
          }),
          _cD(
            'responseParserUtil',
            [
              '_',
              'sspServerInfo',
              'responseMeta',
              'providerInfoCollection',
              'providerInfo',
              'providerResponse',
              'rsc',
              'providerSizeResponse',
              'plM',
              'pmc',
              'pec',
              'res',
            ],
            function (e, n, t, s, r, o, i, a, c, p, u, f) {
              'use strict';
              function d (e) {
                return new n().parse(e);
              }
              function I (n) {
                var s = new t().parse(n),
                  r = s.get('prvReqId');
                return (
                  e.ZT(r) && e.clock.tock('rtbsResponseTime' + r),
                  e.WZ('whiteops', 'command', !0, s),
                  s
                );
              }
              function v (n) {
                var t = new s();
                return (
                  e.a(n, function (e, n) {
                    t.add(n, new r().parse(e));
                  }),
                  t
                );
              }
              function l (n, t, s) {
                if (e.i(n)) return new o();
                var r = n.metainfo,
                  i = r.crid,
                  a = r.provider_id;
                return (r.td = 'r=str'), R(n, i, a, t, s);
              }
              function R (n, t, s, r, i) {
                if (!e.ZT(n) || e.i(n)) return [];
                var c = new o(),
                  p = i.providerInfoCollectionInstance.getById(s),
                  u = n.metainfo,
                  f = n.size_info;
                return (
                  c.set('creative_id', t).set('provider_id', s).set('impId', r).set('td', u.td),
                  c.addMnetSspServerInstance(i.sspMetaInfoInstance),
                  c.addMnetMetaInstance(i.metaInfoInstance),
                  c.addProviderInfoInstance(p),
                  c.addAdSlotProviderMeta(u),
                  e.a(f, function (e) {
                    var n = new a();
                    h(i.sspMetaInfoInstance, n),
                      g(i.metaInfoInstance, n),
                      P(p, n),
                      S(n, u),
                      _(n, e),
                      n.set('creative_id', t).set('impId', r).set('provider_id', s.toString()),
                      c.addProviderResponseForSize(n);
                  }),
                  c
                );
              }
              function h (n, t) {
                e.ZT(n) && t.parse(n.getAll());
              }
              function g (n, t) {
                e.ZT(n) && e.ZT(n.getAll()) && t.parse(n.getAll());
              }
              function P (n, t) {
                e.ZT(n) && e.ZT(n.getAll()) && t.parse(n.getAll());
              }
              function S (e, n) {
                e.parse(n);
              }
              function _ (e, n) {
                e.parse(n);
              }
              function M (n, t, s, r) {
                var i,
                  p = new o(),
                  u = c.getProviderConfigById(n, t),
                  f = u.get('szs');
                if (
                  ((i = new a()
                    .set('provider_id', t)
                    .set('adcode', null)
                    .set('creative_id', n)
                    .set('impId', s)
                    .set('no_bid', !0)
                    .set('nbc', 8)
                    .set('og_bid', 0)
                    .set('prvReqId', m(r))
                    .set('size', c.getDefaultSizeForId(n))),
                  e.ZT(f) && e.Qe(f) && f.length > 0)
                ) {
                  var d = f[0].get('sz');
                  i.set('size', d);
                }
                return (
                  h(r.sspMetaInfoInstance, i),
                  g(r.metaInfoInstance, i),
                  P(r.providerInfoCollectionInstance.getById(t), i),
                  p.addProviderResponseForSize(i),
                  p
                );
              }
              function m (e) {
                return e.metaInfoInstance.get('prvReqId');
              }
              return {
                parseSspServerInfo: d,
                parseResponseMeta: I,
                parseProviderInfo: v,
                parseProviderResponse: l,
                getClientInvalidResponse: M,
                getMowxRequestId: m,
              };
            }
          ),
          _cD('response', ['_'], function (e) {
            'use strict';
            function n () {
              var n = {};
              (this.get = function (e) {
                return n[e];
              }),
                (this.getAll = function () {
                  return n;
                }),
                (this.set = function (e, t) {
                  return (n[e] = t), this;
                }),
                (this.parse = function (t) {
                  var s = e.N(t);
                  return (n = e.QY(n, s)), this;
                });
            }
            return n;
          }),
          _cD(
            'sspScriptResponseParser',
            ['responseInfo', '_', 'rsc', 'responseParserUtil'],
            function (e, n, t, s) {
              'use strict';
              function r () {
                var t = new e();
                (this.parseResponse = function (e, r) {
                  if (n.i(r)) return this;
                  (t.metaInfoInstance = s.parseResponseMeta(r.meta || {})),
                    (t.providerInfoCollectionInstance = s.parseProviderInfo(r.pinfo || {})),
                    (t.sspMetaInfoInstance = s.parseSspServerInfo(r.metaSSP));
                  var o = r.tl || {};
                  return !n.ZT(o) || n.i(o)
                    ? this
                    : (n.a(o, function (r, o) {
                        var i = r.bl || {};
                        n.a(i, function (n, r) {
                          var i = s.parseProviderResponse(n, e, t);
                          t.setProviderResponse(o, r, i);
                        });
                      }),
                      this);
                }),
                  (this.getClientInvalidResponse = function (e, n, r) {
                    return s.getClientInvalidResponse(e, n, r, t);
                  }),
                  (this.getAllProviderResponses = function () {
                    return t.getAllProviderResponses();
                  }),
                  (this.mowxReqID = function () {
                    return t.sspMetaInfoInstance.get('sspPrvReqId');
                  });
              }
              return r;
            }
          ),
          _cD('sspServerInfo', ['_', 'response'], function (e, n) {
            'use strict';
            function t () {
              n.call(this);
            }
            return e.MH(t, n), t;
          }),
          _cD(
            'sspStreamResponseParser',
            ['_', 'responseParserUtil', 'responseInfo', 'rsc'],
            function (e, n, t, s) {
              'use strict';
              function r () {
                function s () {
                  return (
                    e.ZT(o) || ((o = new t()), (o.sspMetaInfoInstance = n.parseSspServerInfo(i))),
                    o
                  );
                }
                function r (s) {
                  return (
                    e.ZT(a[s]) ||
                      ((a[s] = new t()), (a[s].sspMetaInfoInstance = n.parseSspServerInfo(i))),
                    a[s]
                  );
                }
                var o,
                  i,
                  a = {};
                (this.parseSspServerInfo = function (e) {
                  i = e;
                }),
                  (this.parseResponseMeta = function (e) {
                    var t = e.batchId,
                      s = e.data,
                      o = r(t);
                    o.metaInfoInstance = n.parseResponseMeta(s);
                  }),
                  (this.parseProviderInfo = function (e) {
                    var t = e.batchId,
                      s = e.data,
                      o = r(t);
                    o.providerInfoCollectionInstance = n.parseProviderInfo(s);
                  }),
                  (this.parseStreamResponse = function (e, t) {
                    var s = e.batchId,
                      o = e.data,
                      i = r(s);
                    return n.parseProviderResponse(o, t, i);
                  }),
                  (this.getClientInvalidResponse = function (e, n, t) {
                    return s().getClientInvalidResponse(e, n, t);
                  }),
                  (this.mowxReqID = function () {
                    return i.sspPrvReqId;
                  });
              }
              return r;
            }
          );
        _cD('ipsf', ['prM', 'psf', 'res', '_'], function (e, r, n, s) {
          'use strict';
          function t (e, n, t) {
            if (!s.ZT(i[e]) || !s.ZT(i[e][n])) {
              i[e] = i[e] || {};
              var c = r.getProviderServiceInstance(n, t);
              (i[e][n] = c), s.l('endOfResponse', e + '_' + n, c.handleEndOfProviderResponse);
            }
            return i[e][n];
          }
          var i = {};
          return { getImpPrvServiceInstance: t };
        });
        _cD('psf', ['am', 'prM', 'prc', 'em', 'res', '_'], function (e, r, i, a, t, s) {
          'use strict';
          function c (e) {
            if (s.ZT(u[e])) return u[e];
            var i = r.getById(e);
            return i.set('bidderName', r.getTargetingBidderName(e)), (u[e] = i), u[e];
          }
          function n (e) {
            var r;
            return s.gb(e) && (r = new e()), r;
          }
          function v (i, t) {
            var v,
              u = r.getById(i),
              d = u.get('ps');
            if ('cache' === t) v = n(a.require('prefetchproviderservice'));
            else
              switch (d) {
                case 'MnetProvider':
                  v = n(a.require('mhps'));
                  break;
                case 'PrivateProvider':
                  v = n(a.require('ppser'));
                  break;
                case 'NativeProvider':
                  v = n(a.require('nhps'));
                  break;
                case 'NativePrivateProvider':
                  v = n(a.require('npser'));
                  break;
                case 'YbncaProvider':
                  v = n(a.require('yhps'));
                  break;
                case 'YbncaAdxFailoverProvider':
                  v = n(a.require('yafs'));
                  break;
                case 'YbncaRelatedArticlesProvider':
                  v = n(a.require('yras'));
                  break;
                default:
                  v = n(a.require('hprvser'));
              }
            return s.ZT(v) && ((v = v.config(c(i))), e.registerAdapter(i, v)), v;
          }
          var u = {};
          return { getProviderServiceInstance: v };
        });
        _cD(
          'am',
          [
            '_',
            'config',
            'mnrp',
            'bid',
            'auc',
            'pmc',
            'em',
            'plM',
            'prM',
            'res',
            'adapterfactory',
          ],
          function (e, t, a, r, n, c, i, d, o, u, f) {
            'use strict';
            function g (e) {
              var t;
              if (F[e]) return F[e];
              try {
                (t = f.getAdapterInstance(e)), (F[e] = t);
              } catch (a) {
                return null;
              }
              return t;
            }
            function p (t) {
              var a = t.id(),
                r = g(a);
              return e.ZT(r) ? r : g(t.name());
            }
            function s (t, a) {
              e.Td(t) && 'object' == typeof a && (F[t] = a);
            }
            function l (t) {
              var r,
                n = t.get('crid'),
                c = t.getPlacement(),
                i = t.getAuctionParticpiants();
              e.a(i, function (i, d) {
                var u = o.getAdapterForId(d),
                  f = g(u);
                f &&
                  e.gb(f.getStatusForPlacement) &&
                  ((r = a.execSafe(f.getStatusForPlacement, c, i, t)),
                  (P[n] = P[n] || (r && r[n])));
              });
            }
            function b (t, r) {
              var n = d.getById(t),
                c = n.providers();
              e.a(c, function (t) {
                var n = t.get('pid'),
                  c = o.getAdapterForId(n),
                  i = g(c);
                t.get('prf') === !0 &&
                  e.ZT(i) &&
                  e.gb(i.addPrefetchRequestForSlot) &&
                  a.execSafe(i.addPrefetchRequestForSlot, t, r);
              });
            }
            function v (t) {
              var a = t.id(),
                r = t.isForceCacheMode();
              r || i.vh() || e.WZ('bid::head', a),
                e.WZ('bid::default::head', a),
                e.WZ('bid::default::akamai', a),
                e.WZ('bid::cache', a);
            }
            function h (t) {
              (P = {}),
                e.a(t, function (e) {
                  l(e);
                }),
                e.a(t, function (e) {
                  v(e), e.bidRequested(!0);
                }),
                e.yV('apiCallsSent', 'global');
            }
            function m (t, a) {
              e.a(t, function (e) {
                b(e, a);
              });
            }
            var F = {},
              P = {};
            return { getBids: h, getPrefetchBids: m, getBidderAdapter: p, registerAdapter: s };
          }
        );
        _cD('adapterfactory', ['_', 'em'], function (r, e) {
          'use strict';
          function t (t) {
            if (r.ZT(n[t])) return n[t];
            var a = e.require(t + '-adapter');
            if (r.gb(a)) n[t] = new a();
            else {
              if (!r.ZT(a) || !r.dj(a)) return null;
              n[t] = a;
            }
            return n[t];
          }
          var n = {};
          return { getAdapterInstance: t };
        });
        _cD(
          'sm',
          ['mnrp', '_', 'config', 'bid', 'cc', 'plc', 'em', 'res', 'inmemorybidstorage', 'prM'],
          function (t, e, n, r, i, o, c, a, u, f) {
            const $___old_2e1aa317f3b76109 = {}.constructor.getOwnPropertyDescriptor(
              window,
              'localStorage'
            );
            try {
              if ($___old_2e1aa317f3b76109)
                ({}.constructor.defineProperty(
                  window,
                  'localStorage',
                  $___stub_a011c28886b08277.localStorage
                ));
              return function () {
                'use strict';
                function d () {
                  return e.Jb();
                }
                function l (t) {
                  K = t;
                }
                function s (t) {
                  return t === U;
                }
                function v (t) {
                  if (G && void 0 !== R)
                    try {
                      return R.getItem(t) || '';
                    } catch (e) {}
                  return '';
                }
                function m (t, e) {
                  if (G && void 0 !== R)
                    try {
                      return R.setItem(t, e);
                    } catch (n) {}
                }
                function g () {
                  var t = v(Q);
                  try {
                    return JSON.parse(t);
                  } catch (e) {
                    p({});
                  }
                  return {};
                }
                function p (t) {
                  var e = JSON.stringify(t);
                  m(Q, e);
                }
                function b () {
                  var t = c.Zw();
                  return 2 === t || 3 === t ? n.cbInfo.bidCapM || 3 : n.cbInfo.bidCap || 5;
                }
                function h (t, n) {
                  return (
                    e.W(t, function (t) {
                      if (t.join('x') === n) return !0;
                    }) || !1
                  );
                }
                function B (t) {
                  (k = k || c.require('lm')), k.expiredBids.addNew(t);
                }
                function I (t) {
                  return t && 1 === t.get('s') && t.get('cpm') && t.get('cpm') > 0;
                }
                function w (t) {
                  return !e.W(t, function (t, e) {
                    if ('ts' !== e) return !0;
                  });
                }
                function T (t, e, n) {
                  return t && t[e] && t[e][n] && t[e][n].length > 0;
                }
                function F (t, n) {
                  return (
                    e.W(t[n], function (e, r) {
                      if (T(t, n, r)) return !0;
                    }) || !1
                  );
                }
                function Z (t, n, r) {
                  var i = t[n][r];
                  (t[n][r] = e.filter(i, function (t) {
                    if (!w(t)) return !0;
                  })),
                    T(t, n, r) || delete t[n][r];
                }
                function x (t, n) {
                  var r = t[n];
                  e.a(r, function (e, r) {
                    Z(t, n, r);
                  }),
                    F(t, n) || delete t[n];
                }
                function P (t) {
                  var n = {},
                    i = b();
                  e.a(t, function (t, i) {
                    e.a(t, function (e, o) {
                      if ('ts' !== o) {
                        var c = new r().deserialize(e);
                        if (c.isExpired()) return I(c) && B(c), void delete t[o];
                        (n[o] = n[o] || []), n[o].push({ index: i, bid: e });
                      }
                    });
                  }),
                    e.a(n, function (n, r) {
                      var o = n.sort(function (t, e) {
                          var n = parseFloat(t.bid.cpm),
                            r = parseFloat(e.bid.cpm);
                          return n === r ? e.bid.ts - t.bid.ts : r - n;
                        }),
                        c = o.splice(i, o.length - i);
                      e.a(c, function (e) {
                        delete t[e.index][r];
                      });
                    });
                }
                function S () {
                  var t = g();
                  e.a(t, function (n, r) {
                    s(r) ||
                      (e.a(n, function (t, e) {
                        P(n[e]);
                      }),
                      x(t, r));
                  }),
                    p(t);
                }
                function y (t, n) {
                  var r = {};
                  return (
                    e.a(n, function (n) {
                      var i = u.retrieveBestBid(t, n);
                      e.ZT(i) && (r[n.id()] = i);
                    }),
                    r
                  );
                }
                function M (t) {
                  return 1 === t.get('brf');
                }
                function _ (t, n, i) {
                  var o = y(n, i);
                  if (!G) return o;
                  S();
                  var c = g();
                  if (!T(c, t, n)) return o;
                  var a = {},
                    f = {};
                  e.a(c[t][n], function (t, n) {
                    e.a(i, function (i) {
                      var o,
                        c = i.id(),
                        u = i.get('szs');
                      e.ZT(c) && e.ZT(t[c]) && (o = new r().deserialize(t[c])),
                        I(o) &&
                          h(u, o.get('sz')) &&
                          (!e.ZT(a[c]) || o.get('cpm') > a[c].get('cpm')) &&
                          ((a[c] = o), (f[c] = n));
                    });
                  });
                  var d = [];
                  return (
                    e.a(o, function (t, n) {
                      return !e.ZT(a[n]) || a[n].get('cpm') < t.get('cpm')
                        ? void (a[n] = t)
                        : void d.push(t);
                    }),
                    u.storeBids(d),
                    e.a(i, function (r) {
                      var i = r.id();
                      if (e.ZT(a[i]) && !M(a[i])) {
                        var o = f[i];
                        delete c[t][n][o][i];
                      }
                    }),
                    (c[t][n] = e.filter(c[t][n], function (t) {
                      if (!w(t)) return !0;
                    })),
                    p(c),
                    a
                  );
                }
                function z (t, n) {
                  var r = g(),
                    i = c.cV();
                  T(r, i, t) &&
                    (e.a(r[i][t], function (o, c) {
                      e.a(o, function (e, o) {
                        n === o && 6 === e.brr && delete r[i][t][c][o];
                      });
                    }),
                    Z(r, i, t),
                    p(r));
                }
                function C (t) {
                  var n = t.get('chfl'),
                    r = t.get('dbf'),
                    i = t.get('cpm'),
                    o = t.get('brId');
                  return e.ZT(o) && e.ZT(i) && parseFloat(i) > 0 && n && '1' === r;
                }
                function J (t, n) {
                  l(t);
                  var r = {},
                    i = g() || {};
                  (i[U] = L),
                    e.a(n, function (t) {
                      if (C(t)) {
                        var e = t.get('brId');
                        (r[e] = r[e] || []), r[e].push(t);
                      }
                    }),
                    e.a(r, function (n, r) {
                      (i[t] = i[t] || {}), (i[t][r] = i[t][r] || []);
                      var o = {};
                      e.a(n, function (t) {
                        var n = t.serialize(),
                          r = n.crid;
                        e.Td(r) && (o[r] = n);
                      }),
                        (o.ts = e.Wb()),
                        i[t][r].push(o);
                    }),
                    p(i);
                }
                function N (t, e) {
                  u.storeBids(e);
                }
                function W (t, n) {
                  var r = [],
                    i = [];
                  e.a(n, function (t) {
                    1 === t.reuseReason() ? r.push(t) : i.push(t);
                  }),
                    r.length > 0 && N(t, r),
                    i.length > 0 && J(t, i);
                }
                function A () {
                  var t,
                    n = g();
                  e.i(n) ||
                    ((t = c.cV()),
                    e.a(n[t], function (t) {
                      e.Qe(t) &&
                        t.length > 0 &&
                        e.a(t, function (t) {
                          e.a(t, function (t, n) {
                            if ('object' == typeof t) {
                              var i = new r().deserialize(t),
                                o = i.get('brId');
                              X[n] = X[n] || i;
                              var c,
                                a = parseFloat(i.get('cpm')),
                                u = parseFloat(X[n].get('cpm'));
                              e.ZT(o) &&
                                !f.isThirdPartyProvider(o) &&
                                ((Y[n] = Y[n] || i), (c = parseFloat(Y[n].get('cpm')))),
                                a <= 0.01 && (a = 0),
                                u < a && (X[n] = i),
                                e.ZT(o) && !f.isThirdPartyProvider(o) && c < a && (Y[n] = i);
                            }
                          });
                        });
                    }));
                }
                function D () {
                  var t = u.computeMaxBidsForAllPlacements();
                  (X = t.maxBid), (Y = t.maxInternalBid), S(), A();
                }
                function O (t) {
                  return e.ZT(X[t]) ? X[t] : null;
                }
                function V (t) {
                  return e.ZT(Y[t]) ? Y[t] : null;
                }
                function j (t) {
                  if (M(t)) return void u.removeBid(t);
                  var n,
                    r = g(),
                    i = t.get('brId'),
                    o = t.get('crid'),
                    a = t.get('ts');
                  e.i(r) ||
                    ((n = c.cV()),
                    e.a(r[n][i], function (t, c) {
                      e.a(t, function (t, e) {
                        o === e && a === t.ts && delete r[n][i][c][e];
                      });
                    }),
                    Z(r, n, i),
                    p(r));
                }
                function q () {
                  d() &&
                    (window.localStorage.removeItem('HBCM_BIDS'),
                    window.localStorage.removeItem('FB_TOKEN'),
                    window.localStorage.removeItem('oxcsync'),
                    window.localStorage.removeItem('3pck'),
                    window.localStorage.removeItem('__hbcmlinfo'));
                }
                function E (t) {
                  if (G && void 0 !== R)
                    try {
                      R.removeItem(t);
                    } catch (e) {}
                }
                function H () {
                  var t = c.require('tcfm');
                  e.ZT(t) && t.isGdprApplicable() && q();
                }
                var K,
                  R,
                  k,
                  G,
                  Q = 'HBCM_BIDS',
                  U = 'v',
                  L = '1',
                  X = {},
                  Y = {};
                return (
                  (G = d()),
                  G && (R = window.localStorage),
                  e.l('bootstrap', 'global', H),
                  e.l('bootstrap', 'global', D),
                  e.l('all:reset', 'command', D),
                  {
                    setPageUrl: l,
                    getBids: _,
                    getInfo: v,
                    setInfo: m,
                    storeBidsForReuse: N,
                    removeBidsFromCache: z,
                    cacheBidsInStorage: W,
                    setInStorage: J,
                    Jb: d,
                    getMaxBidPresentForPlacement: O,
                    removeBidFromCache: j,
                    computeMaxBidPresentForAllPlacements: D,
                    deleteKey: E,
                    getMaxInternalPresentBidForPlacement: V,
                  }
                );
              }.apply(this, arguments);
            } finally {
              if ($___old_2e1aa317f3b76109)
                ({}.constructor.defineProperty(window, 'localStorage', $___old_2e1aa317f3b76109));
            }
          }
        );
        _cD('inmemorybidstorage', ['_', 'bid', 'em', 'plc', 'res', 'macm'], function (
          t,
          e,
          n,
          r,
          i,
          c
        ) {
          'use strict';
          function s (t) {
            return t && 1 === t.get('s') && t.get('cpm') && t.get('cpm') > 0;
          }
          function u (t) {
            var e = t.get('crid'),
              n = t.get('brId');
            (l[e] = l[n] || {}), (l[e][n] = l[e][n] || []), l[e][n].push(t);
          }
          function o (n) {
            (n = t.filter(n, function (t) {
              return t.get('bren') === !0 && 2 !== t.get('s');
            })),
              t.a(n, function (n) {
                t.ZT(n.get('ts')) || n.set('ts', t.Wb()),
                  n.set('chfl', !0),
                  n.set('brf', 1),
                  n.set('s', 1),
                  n.set('snm', e.StatusNames[1]),
                  n.set('rVid', c.resolveMacros('%%VISIT_ID%%')),
                  u(n);
              });
          }
          function a (e, n) {
            return (
              t.W(e, function (t) {
                if (t.join('x') === n) return !0;
              }) || !1
            );
          }
          function f (e) {
            return t.ZT(e) && t.Qe(e)
              ? t.filter(e, function (t) {
                  return !t.isExpired(n.QX()) && s(t);
                })
              : [];
          }
          function g (e, n) {
            return t.ZT(l[e]) && t.ZT(l[e][n]) && l[e][n].length > 0;
          }
          function m (e, n) {
            var r,
              i = n.id(),
              c = n.get('szs'),
              u = -1;
            if (g(i, e))
              return (
                (l[i][e] = f(l[i][e])),
                t.a(l[i][e], function (e, n) {
                  s(e) &&
                    a(c, e.get('sz')) &&
                    (!t.ZT(r) || e.get('cpm') > r.get('cpm')) &&
                    ((r = e), (u = n));
                }),
                u >= 0 && l[i][e].splice(u, 1),
                r
              );
          }
          function p () {
            var e = {},
              n = {};
            return (
              t.a(l, function (r, i) {
                t.a(r, function (r, c) {
                  (r = f(r)),
                    (l[i][c] = r),
                    t.a(r, function (t) {
                      e[i] = e[i] || t;
                      var r,
                        c = parseFloat(t.get('cpm')),
                        s = parseFloat(e[i].get('cpm'));
                      0 === t.type() && ((n[i] = n[i] || t), (r = parseFloat(n[i].get('cpm')))),
                        c <= 0.01 && (c = 0),
                        s < c && (e[i] = t),
                        0 === t.type() && r < c && (n[i] = t);
                    });
                });
              }),
              { maxBid: e, maxInternalBid: n }
            );
          }
          function d (e) {
            var n = e.get('crid'),
              r = e.get('brId');
            g(n, r) &&
              (l[n][r] = t.filter(l[n][r], function (t) {
                return e.get('ts') !== t.get('ts');
              }));
          }
          var l = {};
          return {
            storeBids: o,
            retrieveBestBid: m,
            computeMaxBidsForAllPlacements: p,
            removeBid: d,
          };
        });
        _cD(
          'mck',
          ['_', 'config', 'mnrp', 'em', 'prM', 'sm', 'ckc', 'res', 'mcsh', 'drs'],
          function (n, e, t, i, o, r, u, c, a, s) {
            'use strict';
            function f () {
              return n.ZT(J) || (J = i.require('ccmg')), J;
            }
            function p () {
              return n.ZT(R) || (R = i.require('tcfm')), R;
            }
            function d () {
              var e = f();
              return n.ZT(e) ? e.getCcpaConsentFlagForCookieSync() : 1;
            }
            function l () {
              var n = p(),
                e = n.getConsentFlagForCookieSync();
              return '2' === e && (e = i.nb()), e;
            }
            function g (e) {
              var t = p();
              n.ZT(t) &&
                t.isGdprApplicable() &&
                (e.input('gdpr', 1),
                e.input('gdprstring', t.getTcString()),
                e.input('gdprconsent', l()));
            }
            function v (e) {
              var t = f();
              if (n.ZT(t)) {
                var i = J.isCcpaEligibleImpression() === !0 ? 1 : 0;
                e.input('usp_status', i), e.input('usp_consent', d());
              }
            }
            function m (e) {
              var t = new n.A()
                .input('vsSync', 1)
                .input('cs', 1)
                .input('hb', 1)
                .input('cv', 37)
                .input('ndec', 1)
                .input('cid', i.kl())
                .input('prvid', n.y(e.join(',')))
                .input('refUrl', n.y(i.VJ()))
                .input('itype', i.lB())
                .input('rtime', n.clock.diff());
              return (
                'https' === U && t.input('https', 1),
                i.vN() && t.input('sovBcn', 1),
                g(t),
                v(t),
                C(t),
                (i.Zs() || a.isFeatureEnabled()) && t.input('html', 1),
                t.freeze()
              );
            }
            function C (n) {
              var e = [];
              i.b() && e.push('gdpr'),
                i.aN() && e.push('usp'),
                e.length > 0 && n.input('dcfp', e.join($));
            }
            function k () {
              var e = D();
              n.ZT(e) && e.postMessage('nextCall', '*');
            }
            function b (e) {
              if (!s.isActionApplicable('STOP_SENDING_PII')) {
                var t = i.bN(e);
                return n.ZT(t) && n.gb(t.getCustomCookieData) ? t.getCustomCookieData() : '';
              }
            }
            function T (e) {
              if (e.length > 0) {
                var t = m(e),
                  i = en.iframeSrc + n.J(t);
                F(en.iframeId, i, null);
              }
            }
            function h () {
              var e = o.getProviderList();
              return n.filter(e, function (e) {
                if (77 === parseInt(e)) return n.gb(window.btoa);
                var t = n.W(on, function (n) {
                  if (n === e) return !0;
                });
                return !t;
              });
            }
            function S (e) {
              var t = [];
              0 !== e.length &&
                (n.a(e, function (e) {
                  var o = i.bN(e);
                  n.ZT(o) &&
                  n.gb(o.doCustomCookieSync) &&
                  !s.isActionApplicable('DISABLE_COOKIESYNC')
                    ? o.doCustomCookieSync()
                    : t.push(e);
                }),
                T(t));
            }
            function Z () {
              Y = !0;
              var n = h();
              I(n), S(n), y();
            }
            function y () {
              var n = a.getExpiryLeftFromCookie(),
                e = a.checkForCookieDeletion(q());
              (n <= 0 || e) && a.deleteCookie(), a.deleteOldCookie();
            }
            function I (n) {
              if (i.Zs()) {
                W(n);
                var e = i.NX();
                j = setTimeout(P, e);
              }
            }
            function F (e, t, i, o) {
              var r = {};
              n.Td(t) && (r.src = t), n.F(e, i, document.body, r, o);
            }
            function E (e) {
              n.ZT(e) && r.setInfo(tn.lsKey, e);
            }
            function w (n) {
              var e = D();
              x(n) &&
                e === n.source &&
                ('3PCookieSupported' === n.data
                  ? ((V = 1), a.deleteCookie())
                  : '3PCookieNotSupported' === n.data && (V = 0),
                E(V));
            }
            function D () {
              var e,
                t = n.TE('#' + en.iframeId);
              return n.ZT(t) && (e = n.GZ(t)), e;
            }
            function N (n) {
              var e = n.data;
              x(n) &&
                'cksync' === e.type &&
                (O(e.name, e.ovsid),
                a.isFeatureEnabled() && !q() && a.setCookieInStorage(e.name, e.ovsid));
            }
            function P () {
              Q || ((Q = !0), n.ZT(j) && clearTimeout(j), n.WZ('cookieReceived', 'command'));
            }
            function A () {
              return H.length === nn.getSize();
            }
            function _ () {
              return !Q;
            }
            function L () {
              return Y;
            }
            function x (e) {
              return n.ZT(e) && e.origin === rn;
            }
            function O (e, t) {
              n.ZT(e) && n.ZT(t) && nn.push(e, t), A() && P();
            }
            function M () {
              return nn.getMap();
            }
            function K () {
              var n = 0,
                e = {};
              (this.push = function (t, i) {
                n++, (e[t] = i);
              }),
                (this.getSize = function () {
                  return n;
                }),
                (this.getMap = function () {
                  return e;
                });
            }
            function W (e) {
              var t = i.require('provider-cookie-name-map');
              n.ZT(t) &&
                n.a(e, function (e) {
                  var i = n.W(t, function (n, t) {
                    if (n.indexOf(e) !== -1) return t;
                  });
                  n.ZT(i) && H.indexOf(i) === -1 && H.push(i);
                });
            }
            function q () {
              return n.ZT(V) ? 1 === V : '1' === r.getInfo(tn.lsKey) || !1;
            }
            function z () {
              return a.isFeatureEnabled();
            }
            function B () {
              return a.getCookiesFromPublisherDomain();
            }
            function G () {
              L() && Z();
            }
            var j,
              J,
              R,
              V,
              U = i.wb(),
              X = i.by(),
              Y = !1,
              H = [],
              Q = !1,
              $ = ',',
              nn = new K(),
              en = { iframeId: 'cok_hbcm', iframeSrc: X },
              tn = { lsKey: '3pck' },
              on = ['4', '9', '14', '20', '26', '34', '40', '87', '92', '99', '101', '10000'],
              rn = i.FW();
            return (
              n.l('nextCall', 'command', k),
              n.ZT(i.lV()) ||
                t.execSafe(function () {
                  n.eventLib.addEvent(window, 'message', w),
                    n.eventLib.addEvent(window, 'message', N);
                }),
              n.l('dataPrivacyConsentSet', 'global', G),
              {
                initiateCookieSync: Z,
                getCookieData: b,
                isCookieSyncInitiated: L,
                getCookiesReceivedFromPostMessage: M,
                shouldDelayPrefetch: _,
                areCookiesAllowedInLocalStorage: z,
                getCookiesFromLocalStorage: B,
              }
            );
          }
        );
        _cD(
          'bm',
          ['_', 'config', 'bid', 'em', 'plM', 'auc', 'pmc', 'res', 'pbs', 'drs'],
          function (e, t, r, i, n, o, s, c, a, u) {
            'use strict';
            function l (e) {
              return I[e];
            }
            function f (e) {
              delete I[e];
            }
            function m (e) {
              return D[e];
            }
            function d () {
              var t = [];
              return (
                e.a(D, function (e) {
                  t.push(e);
                }),
                t
              );
            }
            function g (t) {
              var r = F[t];
              if (e.ZT(r)) return D[r];
            }
            function v (t) {
              if (u.isActionApplicable('DISABLE_ADS')) {
                var r = i.require('lm');
                return void (e.ZT(r) && r.errorLogs.addAdsDisabledActionError());
              }
              var n = t.crid(),
                o = t.getPlacement();
              if (e.ZT(n) && e.ZT(o)) {
                var s = o.providers();
                e.a(s, function (r) {
                  var n = r.get('pid'),
                    o = i.require('prM').getAdapterForId(n);
                  !a.blockProvidersWithCachingDisabled(t, r) &&
                    e.ZT(o) &&
                    (a.isProviderDisabled(n) || t.registerParticipant(r));
                });
              }
            }
            function p () {
              if (!e.i(F)) {
                var t = e.W(F, function (t, r) {
                  var i = D[t];
                  if (e.ZT(i) && !i.isClosed()) return !1;
                });
                t !== !1 && e.WZ('auctionEnd', 'global');
              }
            }
            function T () {
              return (
                !!e.i(F) ||
                e.W(F, function (t, r) {
                  var i = D[t];
                  if (n.isGuaranteedPlacement(r) && e.ZT(i) && i.targeted()) return !0;
                }) ||
                !1
              );
            }
            function A (e, t) {
              var r = i.require('rc');
              if (r) {
                var n = r.getSlotData(e);
                n &&
                  t
                    .set(
                      'ttm',
                      (n.impressionTimer && n.impressionTimer.getTimeSinceRegistered()) || 0
                    )
                    .set('vtm', (n.impressionTimer && n.impressionTimer.getTimeVisible()) || 0)
                    .set('sttm', (n.slotTimer && n.slotTimer.getTimeSinceRegistered()) || 0)
                    .set('svtm', (n.slotTimer && n.slotTimer.getTimeVisible()) || 0)
                    .set('mnrf', n.mnetRefreshed ? '1' : '0')
                    .set('invw', n.inView ? '1' : '0')
                    .set('mnrfc', n.callCount);
              }
            }
            function b () {
              if ('20' === i.JV()) {
                var t = i.require('dfpauction');
                if (e.gb(t)) return new t();
              }
              return new o();
            }
            function S (t, r, i) {
              r = r || !1;
              var o = n.getById(t);
              if (e.ZT(o) && (!e.Qe(i) || 0 !== i.length)) {
                var s = n.getPlacementCloneWithSizes(o.id(), i),
                  c = b().forPlacement(s);
                c.set('fcm', r);
                var a = c.id();
                if (e.ZT(a))
                  return (D[a] = c), (F[t] = a), (I[t] = c), v(c), e.l('auctionEnd', a, p), c;
              }
            }
            function h (t, r) {
              if (e.ZT(t) && t.setDfpSlots(r)) {
                if (t.isGlobal()) return !0;
                var i = t.getDfpSlots()[0],
                  o = i && i.getSlotElementId();
                return (
                  t.slotElementId(o), A(o, t), n.setPlacementForSlot(o, t.crid()), f(t.crid()), !0
                );
              }
              return !1;
            }
            function P (e, t) {
              var r = 0,
                i = 0;
              if (t.get('cpm'))
                try {
                  r = parseFloat(t.get('cpm'));
                } catch (n) {}
              if (e.get('cpm'))
                try {
                  i = parseFloat(e.get('cpm'));
                } catch (n) {}
              return i - r;
            }
            function Z (t) {
              e.Qe(t) || (t = [t]);
              var r = t.length + '';
              t.sort(P);
              for (var i = t.length - 1; i >= 0; i--)
                t[i].set('dbf', i === t.length - 1 ? '1' : '0'), t[i].set('nms', r);
            }
            var D = {},
              F = {},
              I = {};
            return {
              registerAuction: S,
              setSlotPropertiesForAuction: h,
              isAnyGuaranteedSlotTargetedAmongCurrentAuctions: T,
              getCurrentAuctionForSlot: g,
              getAuctionById: m,
              setDominantBid: Z,
              getAllAuctions: d,
              setAutoRefreshProperties: A,
              getUnusedAuctionForPlacement: l,
              markAuctionUsedIfAvailable: f,
            };
          }
        );
        _cD('gsp', ['_', 'res'], function (n, e) {
          'use strict';
          function t (e) {
            (I = {}), (m = a(e)), n.ZT(m) && (d(), I.versionBit === V && (c(), f()));
          }
          function r () {
            var e = !0;
            return (
              n.a(D.purposes, function (t) {
                n.e(I.purposes, t) || (e = !1);
              }),
              n.e(I.allowedVendors, D.mnetVendorId) && e
            );
          }
          function a (e) {
            var t = o(e);
            return n.ZT(t) ? s(t) : null;
          }
          function o (n) {
            try {
              return atob(n.replace(/-/g, '+').replace(/_/g, '/'));
            } catch (e) {
              return null;
            }
          }
          function s (e) {
            var t = '';
            return (
              n.a(e, function (r, a) {
                var o = e.charCodeAt(a).toString(2),
                  s = (8 - o.length) % 8;
                o.length < 0 || ((t += n.wc('', s)), (t += o));
              }),
              t
            );
          }
          function i (n) {
            return h[n];
          }
          function u (n, e) {
            var t = m.slice(0, n);
            return (m = m.slice(n, m.length)), e ? t : parseInt(t, 2);
          }
          function d () {
            n.a(h.metaData, function (n, e) {
              I[e] = u(n);
            });
          }
          function c () {
            var e = [],
              t = u(i('purposes'), !0);
            n.a(t, function (n, t) {
              '1' === n && e.push(parseInt(t) + 1);
            }),
              (I.purposes = e);
          }
          function f () {
            var n = u(i('maxVendorId')),
              e = u(i('encodingType'));
            return 1 === e ? void l(n) : void v(n);
          }
          function l (e) {
            for (
              var t = u(i('defaultConsent')), r = u(i('numEntries')), a = [], o = {}, s = 1;
              s <= e;
              s++
            )
              o[s] = t;
            for (var d = 1; d <= r; d++) {
              var c = u(i('singleOrRange'));
              1 === c ? g(o) : p(o);
            }
            n.a(o, function (n, e) {
              0 !== n && a.push(e);
            }),
              (I.allowedVendors = a);
          }
          function p (n) {
            var e = u(i('singleVendorId'));
            n[e] ^= 1;
          }
          function g (n) {
            var e = u(i('startVendorId')),
              t = u(i('endVendorId'));
            for (e; e <= t; e++) n[e] ^= 1;
          }
          function v (e) {
            var t = u(e, !0),
              r = [];
            n.a(t, function (n, e) {
              '1' === n && r.push((parseInt(e) + 1).toString());
            }),
              (I.allowedVendors = r);
          }
          var m,
            V = 1,
            I = {},
            D = {},
            h = {};
          return (
            (h.metaData = {}),
            (h.metaData.versionBit = 6),
            (h.metaData.createdBit = 36),
            (h.metaData.lastUpdated = 36),
            (h.metaData.consentManagerId = 12),
            (h.metaData.cpmVersion = 12),
            (h.metaData.consentScreen = 6),
            (h.metaData.consentLanguage = 12),
            (h.metaData.vendorListVersion = 12),
            (h.purposes = 24),
            (h.maxVendorId = 16),
            (h.encodingType = 1),
            (h.defaultConsent = 1),
            (h.numEntries = 12),
            (h.singleOrRange = 1),
            (h.singleVendorId = 16),
            (h.startVendorId = 16),
            (h.endVendorId = 16),
            (D.mnetVendorId = '142'),
            (D.purposes = [1, 2]),
            { parseString: t, isMediaNetVendorAllowed: r }
          );
        });
        _cD('mcsh', ['_', 'config', 'mnrp', 'em', 'res', 'cc', 'sm'], function (
          e,
          n,
          t,
          r,
          o,
          i,
          a
        ) {
          'use strict';
          function s () {
            e.ZT(C) || (C = e.h(Z.pubCkName || []));
          }
          function u () {
            a.deleteKey('ls');
          }
          function c () {
            a.deleteKey('mnet_cookie');
          }
          function f (n) {
            var t = r.lV(),
              o = r.gc() && !r.Qn();
            return e.ZT(t) || o || n;
          }
          function l (t, r) {
            if (e.ZT(r) && '0' !== r) {
              var o = a.getInfo('ls') || '',
                i = m(),
                s = {};
              !g(t) &&
                p(t) &&
                (e.ZT(o)
                  ? (s = JSON.parse(o))
                  : ((s.ckex = new Date().getTime() + I * i), (s['visitor-id'] = n._mNVsid)),
                (s[t] = r),
                a.setInfo('ls', JSON.stringify(s)));
            }
          }
          function g (n) {
            var t = a.getInfo('ls');
            if (e.ZT(t)) {
              var r = JSON.parse(t);
              return r.hasOwnProperty(n);
            }
            return !1;
          }
          function v () {
            var n = r.lV(),
              t = r.gc() && !r.Qn();
            return !(e.ZT(n) || t || !a.Jb()) && (!e.i(Z) || !1);
          }
          function p (e) {
            return s(), C.hasOwnProperty(e);
          }
          function k () {
            var n = new Date().getTime(),
              t = a.getInfo('ls');
            if (e.ZT(t)) {
              var r = JSON.parse(t),
                o = parseInt(r.ckex);
              return Math.round((o - n) / I);
            }
            return 0;
          }
          function m () {
            var e = Z.pubCkExp || 14;
            return 60 * e * 24;
          }
          function d () {
            var n = a.getInfo('ls'),
              t = {};
            return e.ZT(n) ? ((t = JSON.parse(n)), delete t.ckex, t) : {};
          }
          function T () {
            var n = a.getInfo('ls');
            if (e.ZT(n)) {
              var t = JSON.parse(n);
              r.cv(t['visitor-id']);
            }
          }
          function O () {
            (Z = r.nl()), T();
          }
          var Z,
            C,
            I = 60000;
          return (
            e.l('bootstrap', 'global', O),
            {
              isFeatureEnabled: v,
              setCookieInStorage: l,
              getCookiesFromPublisherDomain: d,
              deleteCookie: u,
              deleteOldCookie: c,
              checkForCookieDeletion: f,
              getExpiryLeftFromCookie: k,
            }
          );
        });
        _cD('pbs', ['_', 'em', 'cc', 'plM', 'pmc'], function (i, r, e, t, n) {
          'use strict';
          function o (e) {
            var t = r.T();
            i.ZT(t) && '0' === e.getInViewFlag() && e.removeParticipants(t);
          }
          function c (i, r) {
            return i.isForceCacheMode() && s(r);
          }
          function s (i) {
            var r = i.get('pid');
            return (
              '99' !== r &&
              !t.isYbncaProviderId(r) &&
              !t.isHBAutoBidder(r) &&
              !(i.get('br') === !0 || i.get('prf') === !0)
            );
          }
          function d (e) {
            var t = r.I();
            return !(!i.ZT(t) || !i.gb(t.isProviderDisabled)) && t.isProviderDisabled(e);
          }
          return {
            blockProvidersIfAdslotNotInView: o,
            blockProvidersWithCachingDisabled: c,
            isProviderDisabled: d,
          };
        });
        _cD('drs', ['_', 'res'], function (n, r) {
          'use strict';
          function t () {
            if (!n.ZT(V))
              try {
                V = window._cR(['em'])[0];
              } catch (r) {
                V = null;
              }
            return V;
          }
          function u () {
            if (!n.ZT(h))
              try {
                h = window._cR(['ccmg'])[0];
              } catch (r) {
                h = null;
              }
            return h;
          }
          function c () {
            if (!n.ZT(m))
              try {
                m = window._cR(['tcfm'])[0];
              } catch (r) {
                m = null;
              }
            return m;
          }
          function e () {
            var r = c();
            return n.ZT(r) && r.isTcfV2Implemented();
          }
          function i (r) {
            var t = c();
            return !!n.ZT(t) && t.isActionApplicable(r) === !0;
          }
          function I () {
            var n = t();
            return n.Yh() === !0;
          }
          function S () {
            var n = t();
            return I() && '1' !== n.Y();
          }
          function T (r) {
            var t = u();
            return !!n.ZT(t) && t.isActionApplicable(r) === !0;
          }
          function _ () {
            return i('STOP_SENDING_PII');
          }
          function f () {
            return i('DISABLE_ADS');
          }
          function o () {
            return i('DISABLE_ADVIEWLOGS');
          }
          function O () {
            return T('STOP_SPAM');
          }
          function A () {
            return i('STOP_SPAM');
          }
          function E () {
            return T('STOP_WHITEOPS');
          }
          function P () {
            return i('STOP_WHITEOPS');
          }
          function a () {
            return T('TRIM_LAST_OCTET');
          }
          function L () {
            return i('TRIM_LAST_OCTET');
          }
          function s () {
            return T('STOP_LOGGING_VISITOR_ID');
          }
          function D () {
            return i('STOP_LOGGING_VISITOR_ID');
          }
          function G () {
            return T('APPLY_GOOGLE_RESTRICTION');
          }
          function l () {
            return T('DISABLE_COOKIESYNC');
          }
          function R () {
            return i('DISABLE_COOKIESYNC');
          }
          function N () {
            return !(!s() && !D()) || (!e() && S());
          }
          function C () {
            return G();
          }
          function p () {
            return !(!a() && !L()) || (!e() && S());
          }
          function w () {
            return !(!O() && !A()) || (!e() && S());
          }
          function B () {
            return E() || P();
          }
          function Y () {
            return !(!l() && !R()) || (!e() && S());
          }
          function Z () {
            return f();
          }
          function d () {
            return o();
          }
          function v () {
            return !!_() || (!e() && S());
          }
          function M (r) {
            if (!n.ZT(r)) return !1;
            switch (r) {
              case 'STOP_SPAM':
                return w();
              case 'STOP_WHITEOPS':
                return B();
              case 'TRIM_LAST_OCTET':
                return p();
              case 'STOP_LOGGING_VISITOR_ID':
                return N();
              case 'APPLY_GOOGLE_RESTRICTION':
                return C();
              case 'DISABLE_COOKIESYNC':
                return Y();
              case 'DISABLE_ADS':
                return Z();
              case 'DISABLE_ADVIEWLOGS':
                return d();
              case 'STOP_SENDING_PII':
                return v();
              default:
                return !1;
            }
          }
          var V, h, m;
          return { isActionApplicable: M };
        });
        _cD('drsac', ['config', '_', 'em'], function (i, e, n) {
          'use strict';
          function r () {
            var r = n.Mn();
            e.Qe(r) &&
              0 !== r.length &&
              e.a(r, function (e) {
                i.disableSpecificBidderFromConfig(e);
              });
          }
          function c () {
            var r = n.r();
            e.Qe(r) &&
              0 !== r.length &&
              e.a(r, function (e) {
                i.disableSpecificBidderFromConfig(e);
              });
          }
          function d () {
            n.JX();
          }
          return {
            disableCcpaBlacklistedProviders: r,
            disableGdprBlacklistedProviders: c,
            cleanEsiReferrerUrl: d,
          };
        });
        _cD('providerservice', ['_', 'bid', 'em', 'lm', 'sm', 'prc', 'res'], function (
          t,
          e,
          i,
          n,
          r,
          o,
          c
        ) {
          'use strict';
          function s () {
            function e () {
              return i.cV(o.bidder);
            }
            var o,
              c = [],
              s = [],
              h = this;
            (this.config = function (t) {
              return 'object' == typeof t ? ((o = t), this) : o.get(t);
            }),
              (this.isFromCache = function (t) {
                return 'cache' === t.get('bdFrom');
              }),
              (this.addToBidCollection = function (t, e) {
                c.push(t), h.isFromCache(t) || n.addProviderRequest(t), e === !0 && s.push(t);
              }),
              (this.settings = function () {
                return o;
              }),
              (this.pushToCache = function () {
                0 !== s.length && r.cacheBidsInStorage(e(), s);
              }),
              (this.handleEndOfProviderResponse = function () {
                t.WZ('prlog:trigger', 'command', !0), h.pushToCache();
              });
          }
          return s;
        });
        _cD(
          'hprvser',
          [
            '_',
            'bid',
            'bb',
            'em',
            'bm',
            'sm',
            'prc',
            'nic',
            'plM',
            'pmc',
            'pec',
            'res',
            'tlpxc',
            'providerservice',
            'prM',
            'cc',
          ],
          function (t, e, i, s, c, r, n, u, o, a, d, f, h, p, g, l) {
            'use strict';
            function m () {
              function e (t) {
                return (
                  t
                    .set('lt', a.stats('prefetchTime') || '0')
                    .set('chfl', !1)
                    .set('bdFrom', 'cache'),
                  t
                );
              }
              function c (e, i) {
                return (
                  !!(o[e] && t.ZT(u) && t.ZT(u[e])) &&
                  (!t.ZT(i) ||
                    t.W(i, function (t) {
                      if (u[e].get('sz') === t.join('x')) return !0;
                    }) ||
                    !1)
                );
              }
              p.call(this);
              var n = {},
                u = {},
                o = {},
                a = this;
              (this.getValidBidsStatusPerPlacement = function (e) {
                var i,
                  c = [],
                  d = {};
                t.a(e, function (e) {
                  var i = e.crid(),
                    s = e.getPlacement();
                  t.ZT(i) && t.ZT(s) && (c.push(s), (d[i] = !1));
                });
                var f = s.VZ(a.settings().get('bidder'));
                return (
                  t.clock.tick('prefetchTime'),
                  (i = r.getBids(f, a.settings().get('pid'), c)),
                  t.clock.tock('prefetchTime'),
                  (n.prefetchTime = t.clock.time('prefetchTime')),
                  i &&
                    (t.k(u, i),
                    t.a(i, function (t) {
                      d[t.get('crid')] = a.isValidBidStatus(t);
                    })),
                  t.k(o, d),
                  d
                );
              }),
                (this.stats = function (t) {
                  return n[t];
                }),
                (this.getNoBidFromCache = function (e) {
                  var s = e.get('szs');
                  return new i()
                    .create()
                    .setBidType(e)
                    .setEntityProperties(e)
                    .setBidPriceProperties(0, e)
                    .status(4)
                    .set('sz', s[0].get('sz'))
                    .set('nbr', 15)
                    .set('ckfl', '0')
                    .set('cs', '')
                    .set('tc', '0')
                    .set('ts', t.Wb())
                    .set('bdFor', 'cache')
                    .build();
                }),
                (this.useBidsForProvider = function (i, s, r) {
                  if (t.Qe(s) && s.length > 0) {
                    var n = r.getAuction();
                    t.a(s, function (t, s, o) {
                      var d = t.get('crid');
                      if (c(d, n.getSizes())) i(e(u[d]), r, s === o - 1);
                      else {
                        var f = a.getNoBidFromCache(t);
                        i(e(f), r, s === o - 1);
                      }
                    });
                  }
                }),
                (this.isValidBidStatus = function (e) {
                  return 1 === e.status() && t.Td(e.get('cpm')) && '0' !== e.get('cpm');
                });
            }
            return t.MH(m, p), m;
          }
        );
        _cD('prefetchproviderservice', ['_', 'providerservice'], function (e, r) {
          'use strict';
          function c () {
            r.call(this);
          }
          return e.MH(c, r), c;
        });
        _cD(
          'mhps',
          [window, 'cc', '_', 'em', 'bm', 'hprvser', 'bid', 'bp', 'prc', 'plM', 'res', 'pmc'],
          function (r, e, c, t, i, n, d, o, a, s, u, p) {
            'use strict';
            function h () {
              n.call(this),
                (this.replaceMacrosInAdCode = function (r) {
                  var e = r.get('brId'),
                    i = r.get('crid'),
                    n = r.get('lgid'),
                    d = r.get('adc') || '',
                    o = {};
                  return (
                    (o['${chnm2}'] = t.AZ()),
                    (o['${chnm3}'] = i),
                    (o['${bdr_id}'] = e),
                    (o['${acid}'] = n),
                    (o['${requrl}'] = c.y(t.sJ())),
                    c.a(o, function (r, e) {
                      d = d.replace(e, r);
                    }),
                    d
                  );
                }),
                (this.overrideBidPropertyFromAdcode = function (r, e, t) {
                  var i = r.get('adc');
                  if (!c.ZT(i)) return r;
                  var n = e.exec(i);
                  return c.ZT(n) && c.ZT(n[1]) && r.set(t, n[1]), r;
                });
            }
            return c.MH(h, n), h;
          }
        );
        _cD(
          'yhps',
          [
            '_',
            'em',
            'plM',
            'hprvser',
            'lm',
            'bid',
            'yu',
            'bp',
            'prc',
            'pmc',
            'pec',
            'ybncad',
            'yst',
            'rqc',
            'res',
            'cc',
          ],
          function (t, r, e, i, n, d, o, s, a, c, u, g, m, f, l, p) {
            'use strict';
            function v () {
              function n (t) {
                var e = r.sJ(),
                  i = m.inMemoryRepo.getInMemoryModel(e, t);
                return i.getBid();
              }
              function d (r) {
                var e = '';
                return t.ZT(r) && (e = r), e;
              }
              function s (r) {
                var i = e.getNativeConfigForSlot(r);
                if (t.i(i)) return '';
                var n = i.tk;
                return i.isdisp !== !0 ? n : '';
              }
              function a (t, r, e, i) {
                var n = m.inMemoryRepo.getInMemoryModel(r, t);
                n.setBid(e, i);
              }
              function c (r) {
                var e = t.ZT(r.get('ruct')) ? r.get('ruct') : 0;
                r.set('ruct', ++e);
              }
              function u (r) {
                return (
                  r.set('bdFrom', 'inMem').set('ts', t.Wb()).set('bls', !1).set('lt', '0'), c(r), r
                );
              }
              i.call(this);
              var f = this,
                l = r.I() || {},
                p = [
                  'cid',
                  'ptrid',
                  'prvReqId',
                  'prid',
                  'requestString',
                  'requrl',
                  'dn',
                  'erTr',
                  'hlt',
                  'act',
                  'rt',
                  'https',
                  'ismac',
                  'source',
                  'ugd',
                  'gdpr',
                  'gdprstring',
                  'gdprconsent',
                  'usp_status',
                  'usp_enf',
                  'us_privacy',
                  'itype',
                ];
              (this.getAdcode = function (r, e, i, n, a, c, u) {
                c = c || n.get('szs')[0].get('sz');
                var g = (t.ZT(u) && u.bidData) || '',
                  m = d(g),
                  l = {
                    size: c,
                    mnet_crid: e,
                    hb_crid: a.crid(),
                    bidderId: f.config('pid'),
                    subBidderId: i,
                    auctionId: a.logId(),
                    bidData: m,
                    matchString: (t.ZT(u) && u.matchString) || '',
                    strategy: u.strategy,
                  },
                  p = s(a.crid());
                return t.ZT(p) && (l.tpid = p), o.getAdCode(l, r);
              }),
                (this.storeBidInMemory = function (e) {
                  if ('1' === e.get('dbf')) {
                    var i = e.get('crid');
                    if ((a(i, r.sJ(), e.clone(), !0), t.gb(l.getParallelInMemUrls))) {
                      var n = l.getParallelInMemUrls(i) || [];
                      t.a(n, function (t) {
                        a(i, t, e.clone(), !1);
                      });
                    }
                  }
                }),
                (this.addAkamaiBid = function (t) {
                  m.addAkamaiBidToMemory(t);
                }),
                (this.isRequiredParam = function (r) {
                  return t.W(p, function (t) {
                    return r === t || void 0;
                  });
                }),
                (this.useBidsForProvider = function (r, e, i) {
                  if (t.Qe(e) && e.length > 0) {
                    var d = f.settings().get('pid'),
                      o = i.getAuction();
                    o.isBidReceived(d) ||
                      t.a(e, function (e, d, s) {
                        var a = e.get('crid'),
                          c = m.getAkamaiBidFromMemory(a),
                          f = n(a);
                        if (t.ZT(c) && !o.isRefreshAuction())
                          return c.set('bdFrom', 'akamai'), void r(c, i, d === s - 1);
                        if (t.ZT(f)) return void r(u(f), i, d === s - 1);
                        var l = g.getDefaultBid(e, o);
                        t.ZT(l) && r(l, i, d === s - 1);
                      });
                  }
                }),
                (this.isStoreable = function (t) {
                  return 'headerBid' === t.get('bdFrom');
                }),
                (this.isFromCache = function (t) {
                  return (
                    'akamai' === t.get('bdFrom') ||
                    'hc' === t.get('bdFrom') ||
                    'inMem' === t.get('bdFrom')
                  );
                });
            }
            return t.MH(v, i), v;
          }
        );
        _cD('yu', [window, '_', 'em', 'lm', 'bid', 'auc', 'res', 'prM'], function (
          e,
          t,
          n,
          i,
          r,
          a,
          d,
          u
        ) {
          'use strict';
          function s (e, i, r, a) {
            var d = this;
            (this.getLastFlag = function () {
              return e || '0';
            }),
              (this.getRefreshCounter = function () {
                return i || '0';
              }),
              (this.getLoggedAuctionId = function () {
                return r;
              }),
              (this.getAdditionalClientLog = function () {
                var e = '=',
                  i = '||',
                  r = '';
                return (
                  a === !0 && ((e = t.y(e)), (i = t.y(i))),
                  t.ZT(n.Jb()) && (r = i + 'pt' + e + n.Jb()),
                  'ogbid' +
                    e +
                    '%%ORIGINAL_CPM%%' +
                    i +
                    'cbdp' +
                    e +
                    '%%CBDP%%' +
                    i +
                    'bflag' +
                    e +
                    '%%ERPM_FLAG%%' +
                    i +
                    'sobp' +
                    e +
                    '%%SC_ORIGINAL_CPM%%' +
                    i +
                    'ddiv' +
                    e +
                    '%%DFP_DIV%%' +
                    i +
                    'dmm' +
                    e +
                    '%%DMS_STRATEGY%%' +
                    r
                );
              }),
              (this.getRequestUrl = function () {
                return t.y(n.sJ());
              }),
              (this.VJ = function () {
                return t.y(n.VJ());
              }),
              (this.getBidValue = function () {
                return '%%ERPM_OR_OGBDP%%';
              }),
              (this.getChannelAsDmsOrPt = function (e) {
                var i = n.I();
                return !e && t.ZT(i) && t.gb(i.Jb) ? i.Jb() || '' : '%%DMS_STRATEGY%%';
              }),
              (this.getDMS = function () {
                return d.getChannelAsDmsOrPt(!0);
              });
          }
          function c (e, i) {
            var r = '\\${([A-Za-z_]+)}',
              a = {};
            (a.last_flag = i.getLastFlag),
              (a.refresh_counter = i.getRefreshCounter),
              (a.acid = i.getLoggedAuctionId),
              (a.ClientYLog = i.getAdditionalClientLog),
              (a.req_url = i.getRequestUrl),
              (a.ref_url = i.VJ),
              (a.bid = i.getBidValue),
              (a.chnm = i.getChannelAsDmsOrPt),
              (a.dmm = i.getDMS),
              (a.gdpr = n.WY),
              (a.https = n.wU),
              (a.vi = n.dl),
              (a.hvsid = n.JR),
              (a.abte = n.H),
              (this.resolve = function () {
                if (!t.ZT(e)) return '';
                var n = new RegExp(r, 'g');
                return e.replace(n, function (e, n) {
                  var i, r;
                  return (i = a[n]), t.gb(i) ? (r = i()) : '';
                });
              });
          }
          function o (e, t) {
            return new c(e, t).resolve();
          }
          function g (e) {
            var i = '0',
              r = e.get('crid'),
              a = n.Wa(r) || '0',
              d = n.I();
            return (
              '1' === a &&
                t.ZT(d) &&
                t.gb(d.isLastSlide) &&
                d.isLastSlide() === !0 &&
                'inMem' === e.get('bdFrom') &&
                (i = '1'),
              i
            );
          }
          function m (e, t, n) {
            var i = t.get('rfc'),
              r = t.get('lgid'),
              a = g(t),
              d = new s(a, i, r, n);
            return o(e, d);
          }
          function l (e, n, i, r) {
            var a = new RegExp('{{VARIABLES}}', 'g'),
              d = new RegExp('{{MNET_CID}}', 'g'),
              u = new RegExp('{{MNET_TPID}}', 'g'),
              s = '';
            t.a(n, function (e, n) {
              if ('object' == typeof e) {
                s += n + '= {';
                var i = '';
                t.a(e, function (e, t) {
                  (s += i + t + ":'" + e + "'"), (i = ',');
                }),
                  (s += '};');
              } else s += n + "='" + e + "';";
            }),
              (e = e.replace(a, s));
            var c = t.ZT(r) ? "'&tpid=" + r + "'" : "''";
            return (e = e.replace(u, c)), e.replace(d, i);
          }
          function f (e) {
            var i = n.I();
            return t.ZT(i) && t.gb(i.Jb) ? i.Jb() : e || '';
          }
          function _ (r) {
            var a = n.I();
            if (!t.ZT(r) || t.i(r) || !t.ZT(r.size)) {
              r = r || {};
              var d = { name: 'YBNCA_UTIL', message: e.JSON.stringify(r) };
              i.errorLogs.addNew(d);
            }
            var u = {
              medianet_versionId: r.version || '111299',
              medianet_width: (r.size || 'x').split('x')[0],
              medianet_height: (r.size || 'x').split('x')[1],
              medianet_crid: r.mnet_crid || '',
              medianet_refurl: r.refUrl || t.y(n.VJ()) || '',
              medianet_requrl: r.reqUrl || t.y(n.sJ()) || '',
              medianet_bcktid: n.H(),
              medianet_chnm: f(r.strategy),
              medianet_chnm2: r.hb_cid || n.kl() || '',
              medianet_chnm3: r.hb_crid || '',
              medianet_adt1: r.hb_cid || n.kl() || '',
              medianet_adt2: r.hb_crid || '',
              medianet_bdrId: r.bidderId || '',
              medianet_sbdrId: r.subBidderId || '',
              medianet_auctionid: r.auctionId || '',
              medianet_bdata: (t.ZT(r.bidData) && v(r.bidData)) || '',
              medianet_misc: { matchString: r.matchString || '' },
            };
            return (
              t.ZT(a) &&
                t.gb(a.setMedianetDms) &&
                a.setMedianetDms() &&
                (u.medianet_dms = r.strategy || ''),
              u
            );
          }
          function p (e, t) {
            var n = _(e);
            return l(A, n, t, e.tpid);
          }
          function h (e, n) {
            var i = t.s(),
              r = t.tG(0, 29);
            return [n, e, i, r].join('-');
          }
          function b (e, i, r) {
            var a = new t.A()
              .input('cid', i)
              .input('crid', e)
              .input('size', r)
              .input('requrl', n.sJ());
            return 'https://iurl-a.akamaihd.net/ybntag?' + t.J(a.freeze(), null, { encode: !0 });
          }
          function v (e) {
            if (!t.Td(e) || !t.gb(e.split)) return e;
            var n = '||',
              i = '',
              r = e.split(n),
              a = t.y(n);
            return (
              t.a(r, function (e) {
                var n = e.indexOf('${'),
                  r = '';
                (r = n !== -1 ? t.y(e.substring(0, n)) + e.substring(n, e.length) : t.y(e)),
                  (i = t.Td(i) ? i + a + r : i + r);
              }),
              i
            );
          }
          function T (e) {
            var t = new RegExp('bid=(((\\+|-)?([0-9]+)(\\.[0-9]+)?)|((\\+|-)?\\.?[0-9]+))', 'g');
            return (e = e.replace(t, 'bid=${bid}'));
          }
          function D (e) {
            var n = t.Y(e),
              i = T(n);
            return v(i);
          }
          function I (e) {
            var n,
              i = new RegExp('medianet_bdata = *[\'"]([^"]*)[\'"];', 'g'),
              r = i.exec(e);
            return (
              t.ZT(r) &&
                t.Qe(r) &&
                r.length > 1 &&
                ((n = D(r[1])), (e = e.replace(i, 'medianet_bdata="' + n + '";'))),
              e
            );
          }
          var A =
            "<!DOCTYPE html><HTML><HEAD></HEAD><BODY><script id=\"mNCC\" language=\"javascript\">medianet_stime = new Date().getTime();{{VARIABLES}}(function() {var isSSL = 'https:' == document.location.protocol;var mnSrc = (isSSL ? 'https:' : 'http:') + '//contextual.media.net/nmedianet.js?cid={{MNET_CID}}' + {{MNET_TPID}} + (isSSL ? '&https=1' : '');document.write('<scr' + 'ipt type=\"text/javascript\" id=\"mNSC\" src=\"' + mnSrc + '\"></scr' + 'ipt>');})();</script></BODY></HTML>";
          return {
            getAdCode: p,
            getProviderCrid: h,
            resolveYbncaMacros: m,
            getCreativeUrl: b,
            updateBidDataWithBidMacro: T,
            updateAdCodeWithBidMacro: I,
          };
        });
        _cD(
          'ybncad',
          [
            '_',
            'config',
            'cc',
            'bid',
            'em',
            'pmc',
            'plM',
            'prM',
            'pec',
            'yu',
            'bp',
            'prc',
            'res',
            'plc',
          ],
          function (e, t, d, s, r, i, g, c, a, n, p, b, u, o) {
            'use strict';
            function l (e, t, d, s) {
              var r = e.get('szs'),
                i = r[0].get('epc'),
                g = e.get('pid').toString(),
                c = r[0].get('sz'),
                a = {
                  size: c,
                  mnet_crid: i,
                  hb_crid: t.id(),
                  auctionId: d.logId(),
                  bidderId: g,
                  subBidderId: m,
                  bidData: s,
                },
                p = e.get('ecc');
              return n.getAdCode(a, p);
            }
            function I (e) {
              return e > 0;
            }
            function f (t, d) {
              var i = d.crid(),
                a = r.kJ(i),
                b = r.e(),
                u = a[b] || a.def || 0,
                o = g.getGuaranteedFlag(i),
                f = g.getById(i),
                v = d.id(),
                z = t.get('pid').toString(),
                B = c.getById(z),
                _ = e.AZ();
              if (I(u)) {
                var h = new s().status(1),
                  y = { adUnitParam: t, ogbdp: u },
                  C = t.get('szs'),
                  D = C[0].get('epc'),
                  P = C[0].get('sz'),
                  A = t.get('ecc');
                h = p.setPriceProperties(h, y);
                var F = d.placementRefreshCount(),
                  R = 'bid=' + u + '||isRef=' + F,
                  S = l(t, f, d, R);
                return (
                  h
                    .set('nbr', 0)
                    .set('adc', S)
                    .set('bd', R)
                    .set('g', o)
                    .set('brId', z)
                    .set('brNm', B.get('bidder'))
                    .set('bgid', B.get('bg'))
                    .set('sz', P)
                    .set('crid', i)
                    .set('dfpSz', P)
                    .set('m_crid', D)
                    .set('pcrid', n.getProviderCrid(D, A))
                    .set('iurl', n.getCreativeUrl(D, A, P))
                    .set('lpx', [])
                    .set('lt', 0)
                    .set('eid', B.get('eid'))
                    .set('bdFor', 'headerBid')
                    .set('bdFrom', 'hc')
                    .set('acid', v)
                    .set('lgid', d.logId())
                    .set('paId', D)
                    .set('pt', f.get('pdt'))
                    .set('pApId', A)
                    .set('pvRqId', _)
                    .set('epc', D)
                    .set('ts', e.Wb())
                    .set('adId', '')
                    .set('adUrl', B.get('adn'))
                    .set('adNm', '')
                    .set('sbdrid', m)
                    .set('lt', '0')
                    .set('brt', new Date().getTime()),
                  h
                );
              }
              return null;
            }
            var m = '99';
            return { getDefaultBid: f };
          }
        );
        _cD('yst', ['_', 'bid', 'em', 'plM', 'bp', 'cc'], function (t, i, e, n, r, c) {
          'use strict';
          function s () {
            function i (i) {
              t.ZT(i) && (5 === i.status() ? i.status(1) : 6 === i.status() && i.status(2));
            }
            function c (t, i) {
              var c = t.get('ogCPM'),
                s = t.get('brId'),
                a = t.get('crid'),
                o = e.pZ(a),
                u = n.getProviderConfigById(a, s),
                d = o.mul || '1',
                f = Math.min(o.thresh || '0.01', c),
                g = Math.max(c * Math.pow(d, i), f),
                m = { adUnitParam: u, ogbdp: g };
              return (t = r.setPriceProperties(t, m));
            }
            function s (i) {
              return 1 === i.status() && t.ZT(i.get('cpm')) && t.gc(i.get('cpm'), 0) > 0;
            }
            var a = {};
            (this.setBid = function (e, n) {
              if (t.ZT(e)) return i(e), (a.cacheHit = 0), (a.bid = e), (a.isVisited = n), this;
            }),
              (this.getBid = function () {
                if (!t.i(a) && t.ZT(a.bid)) {
                  var i = a.bid.clone();
                  return (
                    s(i) && a.isVisited === !0 && (a.cacheHit++, c(i, a.cacheHit)),
                    (a.isVisited = !0),
                    i
                  );
                }
              });
          }
          function a () {
            var t = {};
            this.getInMemoryModel = function (i, e) {
              return (t[i] = t[i] || {}), (t[i][e] = t[i][e] || new s()), t[i][e];
            };
          }
          function o (t) {
            var i = t.get('crid'),
              n = e.sJ();
            (d[n] = d[n] || {}), (d[n][i] = t);
          }
          function u (i) {
            var n = e.sJ();
            d[n] = d[n] || {};
            var r = d[n][i];
            return t.ZT(r) ? r.clone() : null;
          }
          var d = {},
            f = new a();
          return { addAkamaiBidToMemory: o, getAkamaiBidFromMemory: u, inMemoryRepo: f };
        });
        _cD('rp', ['_'], function (n) {
          'use strict';
          function t () {
            var t = {},
              i = 0;
            (this.add = function (n) {
              (t[n.id()] = n), (i += 1);
            }),
              (this.deleteProperty = function (n) {
                delete t[n.id()], (i -= 1);
              }),
              (this.getById = function (n) {
                return t[n] || null;
              }),
              (this.where = function (i) {
                var u = [];
                return (
                  n.a(t, function (t) {
                    var e = n.W(i, function (n, i) {
                      if (t.get(i) !== n) return !0;
                    });
                    e !== !0 && u.push(t);
                  }),
                  u
                );
              }),
              (this.a = function (i) {
                n.a(t, function (n, t) {
                  i(n, t);
                });
              }),
              (this.len = function () {
                return i;
              });
          }
          return t;
        });
        _cD(
          'plr',
          ['_', 'config', 'plc', 'prc', 'pmc', 'pec', 'rp', 'map', 'prr', 'em', 'cc', 'res'],
          function (t, e, i, r, n, s, c, a, u, o, f, d) {
            'use strict';
            function h () {
              var e = {},
                i = this;
              (this.config = function (t) {
                return (e = t), this;
              }),
                (this.set = function (t, i) {
                  return (e[t] = i), this;
                }),
                (this.get = function (t) {
                  return e[t];
                }),
                (this.providers = function (e) {
                  if (t.ZT(e)) return i.set('prv', e), this;
                  var r = i.get('prv');
                  return r.where({});
                }),
                (this.id = function () {
                  return i.get('crid');
                }),
                (this.code = function () {
                  return i.get('code');
                }),
                (this.isSizeBasedTargeted = function () {
                  return i.get('g') === !1 && i.get('sbt') === !0;
                }),
                (this.isGloballyTargeted = function () {
                  return '1' === i.get('gtar');
                }),
                (this.isAutoRefresh = function () {
                  return '1' === this.get('aRef');
                }),
                (this.isAdvCss = function () {
                  return '1' === this.get('cssT');
                }),
                (this.renderingType = function () {
                  return this.get('renT');
                }),
                (this.frameRenderingType = function () {
                  return this.get('frenT');
                }),
                (this.serialize = function () {
                  return t.k({}, e);
                });
            }
            function g () {
              a.call(this);
              var t = this;
              this.id = function () {
                return t.get('pid');
              };
            }
            function l () {
              c.call(this),
                (this.clone = function (e) {
                  var i = this.getById(e),
                    r = new g().config(i.serialize()),
                    n = i.get('szs'),
                    s = [];
                  return (
                    t.a(n, function (t) {
                      s.push(new T().config(t.serialize()));
                    }),
                    r.set('szs', s),
                    r
                  );
                });
            }
            function v () {
              g.call(this);
            }
            function p () {
              g.call(this);
            }
            function T () {
              a.call(this);
            }
            function w (e) {
              return t.map(e, function (t) {
                return new T().config(t);
              });
            }
            function b (e) {
              var i = u.getById(e);
              return t.ZT(i) && i.get('tb') === !0;
            }
            function Z (e) {
              return !!o.Qc() || t.ZT(C(e));
            }
            function m (e, i) {
              var r = i.id(),
                n = new l();
              return (
                t.a(e, function (e) {
                  var i,
                    s = e.pid,
                    c = o.require('smc'),
                    a = o.require('adxhealthcheck');
                  if (
                    ('3' === s
                      ? ((i = new v()), t.ZT(a) && (a.updateConfig(e), a.sanatizeAdx(e)))
                      : '26' === s
                      ? ((i = new p()),
                        t.ZT(a) && (a.updateConfig(e), a.sanatizeYbncaAdxFailover(e)))
                      : (i = new g()),
                    i.config(e),
                    i.set('crid', r),
                    ('99' === s || '101' === s || b(s)) && i.set('tm', !0),
                    o.Yh() && !o.Qn() && i.set('prf', !1),
                    !o.M() &&
                      (i.get('tm') !== !0 || o.Zb(s)) &&
                      (!o.require('prM').isNativeProvider(s) || Z(r)))
                  ) {
                    '10000' === s &&
                      ((s = o.require('prM').getYbncaWinner(i.get('auto'))),
                      i.set('pid', s),
                      o.BN(r, s));
                    var u = i.get('szs');
                    if (
                      (t.ZT(u) && t.Qe(u) && u.length > 0 && i.set('szs', w(u)),
                      i.set('smsrc', !1),
                      t.ZT(c))
                    ) {
                      var f = o.require('prM').isFirstPartyProvider(s),
                        d = c.getStaticPublisherShareForProvider(s, f);
                      t.ZT(d) && (i.set('csh', d), i.set('smsrc', !0));
                    }
                    n.add(i);
                  }
                }),
                n
              );
            }
            function M () {
              c.call(this),
                (this.clone = function (t) {
                  var e = this.getById(t);
                  if (e) {
                    var i = new h().config(e.serialize()),
                      r = e.get('prv'),
                      n = new l();
                    return (
                      r.a(function (t, e) {
                        n.add(r.clone(e));
                      }),
                      i.providers(n),
                      i
                    );
                  }
                });
            }
            function B () {
              var e = [];
              if (!t.ZT(window.hbCMBidxc.misc) || !t.Td(window.hbCMBidxc.misc.disableBidders))
                return e;
              var i = window.hbCMBidxc.misc.disableBidders + '',
                r = i.split(','),
                n = u.where({});
              return (
                t.a(n, function (i) {
                  var n = i.get('alias');
                  if (t.ZT(n)) {
                    var s = t.W(r, function (e) {
                      if (t.Qb(e).toLowerCase() === n.toString().toLowerCase()) return !0;
                    });
                    t.ZT(s) && e.push(i.id());
                  }
                }),
                e
              );
            }
            function z () {
              var e = o.I(),
                i = [];
              return (
                t.ZT(e) && t.gb(e.getDisabledProviderIds) && (i = e.getDisabledProviderIds()),
                (i = i.concat(B()))
              );
            }
            function y (e, i) {
              return 0 === i.length
                ? e
                : (t.a(i, function (i) {
                    var r = e.getById(i);
                    t.ZT(r) && e.deleteProperty(r);
                  }),
                  e);
            }
            function C (t) {
              var i = e['native'] || {};
              return i[t];
            }
            function I () {
              var i = e.placements || {},
                r = e.providerMap || {};
              t.a(i, function (e) {
                var i = new h().config(e),
                  n = i.id();
                if (!((1 === i.get('hp') && o.lb() === !1) || o.Q())) {
                  var s = m(r[n], i);
                  if (o.cl()) {
                    var c = o.Zl(),
                      a = s.getById(c);
                    if (t.ZT(c) && t.ZT(a)) {
                      var u = new l();
                      u.add(a), i.set('prv', u);
                    } else if (!t.ZT(a)) return;
                  } else i.set('prv', y(s, z()));
                  var f = C(n);
                  t.ZT(f) && i.set('nat', f), P.add(i);
                }
              });
            }
            t.MH(g, a), t.MH(l, c), t.MH(v, g), t.MH(p, g), t.MH(T, a), t.MH(M, c);
            var P = new M();
            return t.l('bootstrap', 'global', I), P;
          }
        );
        _cD('plM', ['_', 'config', 'plr', 'plc', 'pmc', 'pec', 'res', 'cc'], function (
          e,
          t,
          n,
          r,
          u,
          i,
          o,
          a
        ) {
          'use strict';
          function c (e, t) {
            $[e] = t;
          }
          function f (e) {
            return $[e];
          }
          function g () {
            if (!e.ZT(J))
              try {
                J = window._cR(['em'])[0];
              } catch (t) {
                J = null;
              }
            return J;
          }
          function l (e) {
            return n.getById(e);
          }
          function d (t) {
            var r = n.getById(t);
            return e.ZT(r) ? r.get('pdt') : '';
          }
          function s (e) {
            n.deleteProperty(e);
          }
          function v (e) {
            return '4' === e || '9' === e || '22' === e || '10000' === e;
          }
          function p (e) {
            return '26' === e;
          }
          function I (e, t) {
            return l(e).get('prv').getById(t);
          }
          function y () {
            var t = [];
            g();
            var n = G();
            return (
              e.a(n, function (n, r) {
                var u = n.providers();
                e.a(u, function (n) {
                  var r = n.get('pid'),
                    u = n.get('tm');
                  (u !== !0 || J.Zb(r)) && e.ZT(r) && !e.e(t, r) && t.push(r);
                });
              }),
              t
            );
          }
          function P (t, n) {
            return e.filter(t, function (t) {
              var r = t.get('sz');
              return e.W(n, function (e) {
                if (r === e) return !0;
              });
            });
          }
          function m (t, n) {
            var r = t.get('szs');
            (r = e.filter(r, function (t) {
              return e.W(n, function (e) {
                if (
                  ((e = e.split('x')), parseInt(e[0], 10) === t[0] && parseInt(e[1], 10) === t[1])
                )
                  return !0;
              });
            })),
              t.set('szs', r);
            var u = t.get('prv');
            u.a(function (e) {
              var t = e.get('szs');
              if (t) {
                var r = P(t, n);
                0 === r.length && u.deleteProperty(e), e.set('szs', r);
              }
            });
          }
          function B (e) {
            return n.getById(e).get('code');
          }
          function h () {
            var t = {};
            return (
              (t.g = !0),
              e.map(
                e.filter(n.where(t), function (e) {
                  return q(e.id()) === !1;
                }),
                function (e) {
                  return e.id();
                }
              )
            );
          }
          function T () {
            return n.len() > 0;
          }
          function Z (t) {
            var r = n.getById(t);
            return e.ZT(r) ? r.get('szs') : [];
          }
          function F (e, t) {
            return t[0] === e[0] ? t[1] - e[1] : t[0] - e[0];
          }
          function b (t) {
            var n = t.get('szs');
            return e.Qe(n) && 0 !== n.length && e.Qe(n[0]) ? n.sort(F)[0] : '';
          }
          function z (t) {
            var n = Z(t);
            return e.Qe(n) && 0 !== n.length && e.Qe(n[0]) ? n[0].join('x') : '';
          }
          function S (e) {
            var t = n.getById(e);
            return !!t && t.get('g');
          }
          function C (t) {
            var r = n.getById(t);
            return e.ZT(r) ? r.get('nat') || {} : {};
          }
          function A (t) {
            var r = g(),
              u = '';
            if ((e.ZT(r) && r.lN() && (u = r.UG()), e.ZT(u))) return u;
            var i = n.getById(t);
            if (!e.ZT(i)) return '';
            var o = i.get('nat');
            return e.ZT(o) ? o.tk : '';
          }
          function R (e) {
            return e.get('g') !== !1;
          }
          function w (e) {
            return S(e) ? 1 : 0;
          }
          function x (t, n) {
            var r = I(t, n);
            return e.ZT(r) && r.get('prf') === !1;
          }
          function G () {
            return n.where({});
          }
          function Q (e, t) {
            var n = I(e, t);
            return (n && n.get('fp')) || 0;
          }
          function D (t) {
            var n = l(t);
            return e.ZT(n) ? n.providers() : [];
          }
          function W (e) {
            var t = I(e, '3');
            return t || null;
          }
          function E (e) {
            var t = I(e, '26');
            return t || null;
          }
          function M (t) {
            e.Qe(t) && t.length > 0 && (O = t);
          }
          function N () {
            return e.map(O, function (e) {
              return l(e);
            });
          }
          function _ (e) {
            X[e.id()] = !0;
          }
          function k (e) {
            var t = l(e);
            return 1 !== t.get('hp') || g().lb();
          }
          function q (t) {
            return e.ZT(t) && (X[t] === !0 || k(t) === !1);
          }
          function Y () {
            X = {};
          }
          function j () {
            return 0 === y().length;
          }
          function H (t, r) {
            var u = n.clone(t);
            return e.ZT(r) && m(u, r), u;
          }
          function K (t) {
            var n = C(t);
            if (!e.ZT(n) || e.i(n)) return !1;
            var r = n.fs;
            return !r;
          }
          function L (t, n) {
            var r = l(t);
            if (!e.ZT(r)) return !1;
            var u = r.get(n);
            return e.ZT(u) && u === !0;
          }
          function U (e) {
            return L(e, 'iabsf');
          }
          function V (e) {
            return L(e, 'fw');
          }
          var J,
            O = [],
            X = {},
            $ = {};
          return (
            e.l('after:apiCallsSent', 'global', Y),
            {
              hasValidConfig: T,
              isGuaranteedPlacement: S,
              checkGuaranteed: R,
              getGuaranteedFlag: w,
              getGuaranteedPlacementIds: h,
              getCodeForId: B,
              getSizesById: Z,
              getAllPlacements: G,
              getMnetAdxConfigById: W,
              getYbncaAdxFailoverConfigById: E,
              getMaxSizeByPlacement: b,
              disableRequest: _,
              isRequestDisabled: q,
              getById: l,
              getNativeConfigForSlot: C,
              getTemplateKeyForNativeSlot: A,
              getDefaultSizeForId: z,
              getProvidersById: D,
              getProviderConfigById: I,
              enablePlacementsForAdapterRefresh: M,
              getPlacementsForAdapterRefresh: N,
              getEnabledProviderList: y,
              getProviderFpById: Q,
              isProviderPrefetchDisabled: x,
              deletePlacement: s,
              isYbncaProviderId: v,
              isHBAutoBidder: p,
              arePlacementsEmpty: j,
              getProductType: d,
              getPlacementForSlot: f,
              setPlacementForSlot: c,
              getPlacementCloneWithSizes: H,
              isResponsive: K,
              shouldRenderInIABSafeFrame: U,
              isFullWidthEnabled: V,
            }
          );
        });
        _cD('prr', ['_', 'config', 'prc', 'rp', 'cc', 'res'], function (t, n, i, r, c, o) {
          'use strict';
          function e () {
            var n = {};
            (this.config = function (i) {
              return 'object' != typeof i || t.i(i) ? n : ((n = i), this);
            }),
              (this.set = function (t, i) {
                return (n[t] = i), this;
              }),
              (this.get = function (t) {
                return n[t];
              }),
              (this.id = function () {
                return this.get('pid');
              });
          }
          function u () {
            r.call(this);
          }
          function f () {
            var i = n.provider || {};
            t.a(i, function (t) {
              s.add(new e().config(t));
            });
          }
          t.MH(u, r);
          var s = new u();
          return t.l('bootstrap', 'global', f), s;
        });
        _cD('psrr', ['_', 'config', 'cc', 'res', 'psrc'], function (r, t, e, i, s) {
          'use strict';
          function n () {
            var t = {},
              e = this;
            (this.add = function (e) {
              if ('object' != typeof e || r.i(e)) return t;
              var i = e.pvid;
              return (
                (t[i] = t[i] || {}),
                (t[i].sim = t[i].sim || {}),
                r.ZT(e.seat) ? (t[i].sim[e.seat] = e.rvsh) : (t[i].rvsh = e.rvsh),
                this
              );
            }),
              (this.getProviderShare = function (r) {
                return (t[r] && t[r].rvsh) || 0;
              }),
              (this.getProviderShareBySeatId = function (i, s) {
                return r.ZT(s)
                  ? (t[i] && t[i].sim[s]) || e.getProviderShare(i)
                  : e.getProviderShare(i);
              });
          }
          function o () {
            var e = t.pvsh || [];
            r.a(e, function (r) {
              a.add(r);
            });
          }
          var a = new n();
          return r.l('bootstrap', 'global', o), a;
        });
        _cD('bgrr', ['_', 'config', 'map', 'prc', 'rp', 'cc', 'res'], function (
          t,
          n,
          i,
          r,
          c,
          o,
          s
        ) {
          'use strict';
          function a () {
            i.call(this),
              (this.id = function () {
                return this.get('bgid');
              }),
              (this.alias = function () {
                return this.get('bgals');
              });
          }
          function u () {
            c.call(this);
          }
          function e () {
            var i = n.bidderGroups || {};
            t.a(i, function (t) {
              f.add(new a().config(t));
            });
          }
          t.MH(a, i), t.MH(u, c);
          var f = new u();
          return t.l('bootstrap', 'global', e), f;
        });
        _cD('prM', ['_', 'config', 'prc', 'prr', 'bgrr', 'bid', 'em', 't', 'cc', 'res'], function (
          r,
          e,
          t,
          n,
          i,
          u,
          d,
          o,
          a,
          g
        ) {
          'use strict';
          function c (r) {
            return n.getById(r);
          }
          function f (e) {
            var t = n.getById(e);
            return r.ZT(t) ? t.get('pnm') || '' : null;
          }
          function s (r) {
            return i.getById(r);
          }
          function v (e) {
            var t = c(e);
            return r.ZT(t) ? t.get('bidder') : null;
          }
          function l () {
            return e.targetingKeys || {};
          }
          function p (e) {
            var t = l();
            return r.ZT(e) && r.ZT(t[e]) ? t[e] : {};
          }
          function b (e) {
            return r.ZT(e) && r.tG(1, 100) <= e ? '4' : '9';
          }
          function B (r) {
            var e = p(r);
            return e.name || '';
          }
          function P (e) {
            var t = l();
            return r.W(t, function (r, t) {
              if (r.name === e) return t;
            });
          }
          function T (r) {
            var e = c(r);
            return e.get('adn') || '';
          }
          function y () {
            return (
              (e.defaultBidderSetting.hasOwnProperty('openxbidder') &&
                e.defaultBidderSetting.openxbidder.jstag_url) ||
              ''
            );
          }
          function m () {
            return (
              (e.defaultBidderSetting.hasOwnProperty('openxbidder') &&
                e.defaultBidderSetting.openxbidder.oxLogUrl) ||
              ''
            );
          }
          function I () {
            return (
              (e.defaultBidderSetting.hasOwnProperty('openxbidder') &&
                e.defaultBidderSetting.openxbidder.oxCkUrl) ||
              ''
            );
          }
          function x (r) {
            var e = p(r);
            return e.global || '';
          }
          function S (r) {
            r = r.toString();
            var e = c(r);
            return e.get('mnet') === !0 ? '100' : r.toString();
          }
          function Z (e) {
            var t = c(e);
            return r.ZT(t) && t.get('mnet') === !1;
          }
          function h (e) {
            var t = c(e);
            return r.ZT(t) && t.get('mnet') === !0;
          }
          function F (r, e) {
            return 'cache' === r ? d.JH(e, 'cbrt') : 'headerBid' === r ? d.JH(e, 'hbrt') : void 0;
          }
          function A () {
            var e = [];
            return (
              r.a(n.where({}), function (r) {
                e.push(r.get('pid'));
              }),
              e
            );
          }
          function C (e, t) {
            var n = c(e);
            if (!r.ZT(n)) return !1;
            var i = n.get(t);
            return r.ZT(i) && i === !0;
          }
          function N (r) {
            return C(r, 'ybnadc');
          }
          function O (r) {
            return C(r, 'pmp');
          }
          function U (r) {
            return Z(r) || O(r);
          }
          function w (r) {
            return C(r, 'dclb');
          }
          function D (r) {
            return !Z(r) && C(r, 'efpc');
          }
          function E (r) {
            return C(r, 'epfp');
          }
          function K () {
            var e = l();
            if (!r.ZT(e) || r.i(e)) return {};
            var t = {};
            return (
              r.a(e, function (e, n) {
                r.ZT(e.nbf) && (t[n] = e.nbf);
              }),
              t
            );
          }
          function L (e) {
            var t = c(e);
            return (
              r.ZT(t) &&
              ('NativeProvider' === t.get('ps') || 'NativePrivateProvider' === t.get('ps'))
            );
          }
          function G (r) {
            return C(r, 'ssp');
          }
          function J (r) {
            return '4' === r;
          }
          return {
            getAdapterForId: v,
            getById: c,
            getBidderGroupById: s,
            getTargetingKeysById: p,
            getTargetingBidderName: B,
            getTargetingBidderId: P,
            getOpenxJsTagUrl: y,
            isThirdPartyProvider: Z,
            isFirstPartyProvider: h,
            getGlobalTargetingKeysById: x,
            getOpenxLogUrl: m,
            getAdapterProviderForId: S,
            getDefaultAdvById: T,
            getYbncaWinner: b,
            getNameForId: f,
            getOpenxCookieSyncUrl: I,
            getServerBidRequestTimeoutPrv: F,
            getProviderList: A,
            isYbncaAutoProvider: J,
            isPmpEnabledForProvider: U,
            isCachingDfpLostBidsDisabled: w,
            generateYbncaAdCodeInClient: N,
            isFloorPriceFromCacheEnabled: D,
            isPersistentFloorPriceEnabled: E,
            isNativeProvider: L,
            getNoBidTargetKeysForAll: K,
            isServerSidePixelEnabled: G,
          };
        });
        _cD('gdm', ['_', 'config', 'em', 'cc', 'mck'], function (n, i, t, c, o) {
          'use strict';
          function e () {
            var t = i.hbInfo.gdprPrv || [];
            n.a(t, function (n) {
              i.disableSpecificBidderFromConfig(n);
            });
          }
          function u () {
            t.JX();
          }
          function r () {
            g ||
              setTimeout(function () {
                o.isCookieSyncInitiated() && o.initiateCookieSync(), (g = !1);
              }, 100),
              (g = !0);
          }
          function f (n, i, t) {
            var c = n.call(i, t);
            return r(), c;
          }
          function a (i, t) {
            return n.Wa(n.H(f, [i, t]));
          }
          function d () {
            return t.Yh() && t.wR();
          }
          function s () {
            t.Zz() && window.hbCMBidxc.consentExists(!0);
          }
          function l () {
            s(), t.Yh() && (e(), u());
          }
          var g = !1;
          return { init: l, getCallback: a, shouldKillBidExchange: d };
        });
        _cD('cs', ['_', 'bm', 'brs', 'config', 'em', 'cc', 'gdm', 'drs', 'lm', 'res'], function (
          i,
          e,
          r,
          t,
          n,
          o,
          c,
          a,
          s,
          u
        ) {
          'use strict';
          function d (t, n) {
            if (a.isActionApplicable('DISABLE_ADS'))
              return void s.errorLogs.addAdsDisabledActionError();
            var o = [];
            i.a(t, function (r) {
              var t = e.registerAuction(r, n);
              i.ZT(t) && o.push(t);
            }),
              r.callForBids(o);
          }
          function l () {
            var e = n.require('mck');
            i.ZT(e) && i.l('idleTime', 'global', i.H(e.initiateCookieSync, []));
          }
          function f () {
            if (t && t.directAdsProd) {
              var e = n.require('directadsmanager');
              i.ZT(e) && e.init();
              var r = n.require('directadsresetcore');
              i.ZT(r) && n.VU() ? r.start() : (window.hbCMBidxc.reset = function () {});
            }
          }
          function A () {
            var e = n.require('nextcore');
            i.ZT(e) ? e.start() : (window.hbCMBidxc.next = function () {});
          }
          function g () {
            var e = n.require('hsc');
            i.ZT(e) && i.l('historyState', 'command', n.Zo);
          }
          function v () {
            if (n.cw()) {
              var e = n.require('woh');
              i.ZT(e) && i.gb(e.init) && e.init();
            }
          }
          function b () {
            var e = n.require('ruleenginecore');
            i.ZT(e) && e.init();
          }
          return {
            registerAuctionsAndGetBidsForSlots: d,
            initiateCookieSync: l,
            initiateDirectAds: f,
            enableHistoryState: g,
            initiateNextCore: A,
            handleWhiteOps: v,
            initRuleEngine: b,
          };
        });
        _cD('failoverservice', [window, '_', 'res', 'em', 'config', 'cc', 'gdm', 'lm'], function (
          n,
          e,
          i,
          t,
          r,
          o,
          s,
          u
        ) {
          'use strict';
          function a () {
            function n (n) {
              return (
                e.W(i, function (e) {
                  if (e.reason === n) return !0;
                }) || !1
              );
            }
            var i = [],
              t = [];
            (this.set = function (e, t) {
              if (n(t)) return this;
              var r = {};
              return (r.condition = e), (r.reason = t), i.push(r), this;
            }),
              (this.evaluateFailure = function () {
                e.a(i, function (n) {
                  var e = n.condition,
                    i = e.call(this);
                  i && t.push(n.reason);
                });
              }),
              (this.getFailoverReasons = function () {
                return t;
              });
          }
          function c () {
            var n = b.getFailoverReasons();
            e.a(n, function (n) {
              u.failoverLog.addNew({ r: n, a: '203' });
            });
          }
          function l () {
            return f(), b.evaluateFailure(), b.getFailoverReasons().length > 0;
          }
          function f () {
            b.set(v, '203')
              .set(h, '204')
              .set(g, '206')
              .set(F, '207')
              .set(m, '208')
              .set(s.shouldKillBidExchange, '209');
          }
          function d (n) {
            e.a(n, function (n) {
              b.set(n.condition, n.reason);
            });
          }
          function v () {
            var n = r.headerBidder;
            return n.isDisabled === !0;
          }
          function h () {
            return t.gX() || t.sJ().indexOf('force_hbnobid=1') !== -1;
          }
          function g () {
            return t.px() && e.Fl() && parseInt(e.ua.split('msie')[1], 10) <= 9;
          }
          function F () {
            var n = t.require('_c');
            return !(!e.ZT(n) || !e.gb(n.isCompletelyDisabled)) && n.isCompletelyDisabled();
          }
          function m () {
            return e.inIframe && !t.bh();
          }
          var b = new a();
          return { fireFailoverLogs: c, shouldFailover: l, setCustomFailoverCondition: d };
        });
        _cD('dmh', ['_', 'em', 'cc', 'res', 'bid', 'bp', 'plM', 'nic'], function (
          t,
          e,
          d,
          i,
          r,
          s,
          n,
          a
        ) {
          'use strict';
          function c (t) {
            return t.get('dms') === !0;
          }
          function p (d) {
            var i = t.QZ(d.get('ogbid')),
              r = t.QZ(d.get('erpm'));
            return e.AH() && r >= 0 ? r : i;
          }
          function g (t) {
            var e = p(t),
              d = t.get('brId'),
              i = t.get('crid'),
              r = n.getProviderConfigById(i, d),
              a = t.get('dt'),
              c = { providerId: d, ogbdp: e || '0', dealType: a, adUnitParam: r };
            return o(t), s.setPriceProperties(t, c);
          }
          function o (t) {
            t.set('dms', !1).set('dmsCliStat', '2');
            var e = t.get('dmsAp');
            u(e);
          }
          function u (e) {
            t.ZT(e) && a.submit(e, { tags: ['log', 'misc'], type: 'img' });
          }
          function m (e, d) {
            if (!e.isValidBid() || !d.isValidBid()) return !1;
            var i = t.QZ(e.get('dCbdp') || 0),
              r = t.QZ(d.get('cbdp') || 0);
            return i < r;
          }
          function f (e, d) {
            var i = e.get('nAp') || [];
            t.Qe(d) && ((i = t.UZ(i, d)), e.set('nAp', i));
          }
          function l (e, d) {
            var i = e.get('lpx') || [];
            t.Qe(d) && ((i = t.UZ(i, d)), e.set('lpx', i));
          }
          function b (e) {
            var d = t.x(e.get('dCbdp')),
              i = e.get('dmsAp'),
              r = e.get('dmsRa'),
              s = e.get('dfpBd'),
              n = e.get('tDmsStrat');
            e
              .set('dfpBd', d)
              .set('cbdp', d)
              .set('strat', n)
              .set('dmsCliStat', '3')
              .set('adfpBd', s)
              .set('apDms', !0),
              f(e, i),
              l(e, r);
          }
          function v (t) {
            var e = t.get('dmsAp');
            '4' !== t.get('brId') && f(t, e), t.set('dmsCliStat', '2');
          }
          function D (e) {
            t.a(e, function (t) {
              '4' === t.get('brId') && g(t);
            });
          }
          return {
            shouldApplyDms: c,
            isDmsPriceLessThanSecondPrice: m,
            applyingDmsProperties: b,
            handleLossDueToLowDmsPrice: v,
            replaceBidForYbnca: D,
          };
        });
        _cD(
          'ic',
          ['cs', '_', 'em', 'plM', 'brs', 'prs', 'mcm', 'res', 'failoverservice'],
          function (e, i, n, r, t, o, s, u, c) {
            'use strict';
            function a () {
              if (d()) return void c.fireFailoverLogs();
              var i = r.getGuaranteedPlacementIds();
              e.registerAuctionsAndGetBidsForSlots(i),
                t.callForPrefetchBids(i),
                e.initiateCookieSync(),
                e.initRuleEngine(),
                o.addPrefetchEvents(),
                s.exposeAllApisForCM();
            }
            function l (e, i) {
              var n = {};
              return (n.condition = e), (n.reason = i), n;
            }
            function d () {
              var e = [];
              return (
                e.push(l(f, '210')),
                e.push(l(v, '211')),
                c.setCustomFailoverCondition(e),
                c.shouldFailover()
              );
            }
            function f () {
              return !r.hasValidConfig();
            }
            function v () {
              return !i.ZT(s);
            }
            return { init: a };
          }
        );
        _cD(
          'auc',
          [
            '_',
            'ac',
            'config',
            'bid',
            'bb',
            'em',
            'plM',
            'lm',
            'plc',
            'pmc',
            'pec',
            't',
            'res',
            'cc',
            'nic',
            'bp',
            'dmh',
            'macm',
          ],
          function (t, e, i, n, r, s, c, u, o, d, a, g, f, l, p, h, m, P) {
            'use strict';
            function v () {
              function e () {
                (et.status = 1), t.clock.tick(et.crid + et.acid + 'auctionTime');
              }
              function i () {
                return t.clock.getTime(et.crid + et.acid + 'auctionTime');
              }
              function o () {
                var e = s.require('ax');
                if (!t.ZT(e) || !t.gb(e.getYAFOverrideConfig)) return !1;
                var i = e.getYAFOverrideConfig(it.crid()),
                  n = it.getWinningBid();
                return t.ZT(i) && t.ZT(n) && '26' === n.get('brId');
              }
              function d () {
                var e = 1;
                o() && (e = 2);
                var i = ct.slice(e, 2);
                return t.filter(i, function (t) {
                  return 1 === t.get('s');
                });
              }
              function a () {
                var e = d(),
                  i = et.crid;
                if (nt[i] !== !0 && 0 !== e.length) {
                  t.a(e, function (t) {
                    t.reuseReason(2);
                  }),
                    (nt[i] = !0);
                  var n = s.require('sm');
                  t.ZT(n) && t.gb(n.storeBidsForReuse) && n.storeBidsForReuse(s.cV(), e);
                }
              }
              function g () {
                it.getWinningBid(), a();
                var e = et.crid,
                  i = it.id();
                t.clock.time(e + i + 'auctionTime') || t.clock.tock(e + i + 'auctionTime');
              }
              function f () {
                var t = et.expBidCnt || 0;
                t++, (et.expBidCnt = t);
              }
              function l () {
                var t = et.expBidCnt || 0;
                t--, (et.expBidCnt = t);
              }
              function v () {
                var t = et.bidRecCnt || 0;
                t++, (et.bidRecCnt = t);
              }
              function T (e) {
                var i = e.get('brId');
                t.ZT(i) && (st[i] = !0);
              }
              function B (t) {
                t.set('ttm', et.ttm)
                  .set('vtm', et.vtm)
                  .set('sttm', et.sttm)
                  .set('svtm', et.svtm)
                  .set('invw', et.invw);
              }
              function b () {
                t.a(ct, function (t) {
                  B(t);
                }),
                  t.a(ut, function (t) {
                    B(t);
                  }),
                  t.gb(it.getAllPmpParticipants) &&
                    t.a(it.getAllPmpParticipants(), function (t) {
                      B(t);
                    });
              }
              function R (e) {
                var i = e.get('tpt'),
                  n = e.get('tptg');
                ut.push(e),
                  !w(e) || (t.i(i) && t.i(n)) || (e.set('iwb', '1'), (et.hasAnyWinBid = !0));
              }
              function A () {
                var t = s.getAuctionTimeForMnetBidderRequest(),
                  e = i();
                return e !== -1 && e > t;
              }
              function C () {
                return et.expBidCnt === et.bidRecCnt;
              }
              function F () {
                return C() || (s.zV() && A());
              }
              function w (t) {
                return t && t.isValidBid();
              }
              function Z () {
                ct = t.filter(ct, function (e) {
                  return !!t.ZT(e) && (!e.isExpired() || (w(e) && u.expiredBids.addNew(e), !1));
                });
              }
              function x (t, e) {
                if (1 !== e.status() && 1 !== t.status()) return 0;
                if (1 === e.status() && 1 !== t.status()) return 1;
                if (1 !== e.status() && 1 === t.status()) return -1;
                var i = 0,
                  n = 0;
                if (e.get('cpm'))
                  try {
                    i = parseFloat(e.get('cpm'));
                  } catch (r) {}
                if (t.get('cpm'))
                  try {
                    n = parseFloat(t.get('cpm'));
                  } catch (r) {}
                return i - n;
              }
              function W (t) {
                var e = [];
                return (
                  w(ct[0])
                    ? w(ct[1])
                      ? e.push(ct[0], ct[1])
                      : e.push(ct[0], null)
                    : e.push(null, null),
                  t ? e : e[0]
                );
              }
              function D (e) {
                t.ZT(e) &&
                  s.kb() &&
                  (I(m),
                  m.shouldApplyDms(e) &&
                    (it.lostDueToLowDmsPrice()
                      ? m.handleLossDueToLowDmsPrice(e)
                      : m.applyingDmsProperties(e)));
              }
              function I () {
                t.a(ct, function (t) {
                  m.shouldApplyDms(t) && t.set('dmsCliStat', '1');
                });
              }
              function y () {
                if (s.kb()) {
                  var t = S(ct);
                  t.sort(x);
                  var e = t[0],
                    i = t[1];
                  e &&
                    i &&
                    e.get('dms') &&
                    m.isDmsPriceLessThanSecondPrice(e, i) &&
                    (m.replaceBidForYbnca(ct), it.lostDueToLowDmsPrice(!0));
                }
              }
              function S (e) {
                var i = [];
                return (
                  t.a(e, function (t, e) {
                    i[e] = t.clone();
                  }),
                  i
                );
              }
              function E (t) {
                D(t);
              }
              function M () {
                et.isWinnerDec ||
                  ((et.isWinnerDec = !0),
                  ct.sort(x),
                  t.gb(it.decidePmpWinner) && it.decidePmpWinner());
              }
              function L () {
                if (!t.gb(it.targeted) || it.targeted() !== !0) {
                  var e = [],
                    i = it.getWinningBid();
                  t.ZT(i) && e.push(i.clone()),
                    t.a(ut, function (t) {
                      w(t) && e.push(t.clone());
                    });
                  var n = s.require('sm');
                  0 !== e.length &&
                    t.ZT(n) &&
                    (t.a(e, function (e) {
                      var i = it.crid(),
                        r = e.get('brId');
                      e.reuseReason(6),
                        t.l('afterTargeting', it.id(), t.H(n.removeBidsFromCache, [r, i]));
                    }),
                    n.storeBidsForReuse(s.cV(), e));
                }
              }
              function z () {
                s.kF() && !t.kV() && t.eventLib.addEvent(window, 'load', L);
              }
              function N (e) {
                return t.W(ut, function (t) {
                  if (t.get('brNm') === e) return t;
                });
              }
              function _ (e) {
                return t.W(ut, function (t) {
                  if (t.id() === e) return t;
                });
              }
              function G (e) {
                if (t.ZT(e) && e.get('nApStat') !== !0) {
                  var i = e.get('nAp');
                  t.ZT(i) &&
                    (p.submit(i, { type: 'img', tags: ['win', 'misc'] }), e.set('nApStat', !0));
                }
              }
              function O () {
                var e = it.getWinningBid();
                G(e),
                  t.a(ut, function (t) {
                    G(t);
                  });
              }
              function k (t, e) {
                var i = t.get('brId'),
                  n = e || t.get('ogCPM');
                return '139' === i ? t.get('cbdp') : n;
              }
              function j (t, e, i) {
                var n = e.get('prMac'),
                  r = encodeURI(n),
                  s = encodeURIComponent(n),
                  c = k(e, i);
                return (
                  (t = t.split(n).join(c)),
                  t.indexOf(r) > -1 && (t = t.split(r).join(c)),
                  t.indexOf(s) > -1 && (t = t.split(s).join(c)),
                  t
                );
              }
              function q (e, i, n, r) {
                var c = i.get('cpm'),
                  u = r || i.get('ogCPM'),
                  o = [];
                return (
                  t.a(e, function (e) {
                    s.yN() &&
                      ((e = t.Ab(e, '\\${GDPR}', n.gdpr)),
                      (e = t.Ab(e, '\\${GDPR_CONSENT_[0-9]+}', n.gdprstring))),
                      (e = j(e, i, r)),
                      o.push(e.split('%%BID_PRICE%%').join(u).split('%%ADJUST_PRICE%%').join(c));
                  }),
                  o
                );
              }
              function V (t, e, i) {
                var r = { adUnitParam: e, ogbdp: t };
                r.csh = i.get('adj2');
                var s = new n().status(1);
                return (s = h.setPriceProperties(s, r));
              }
              function H () {
                var t = s.require('tcfm'),
                  e = {};
                return (
                  t
                    ? ((e.gdpr = t.isGdprApplicable() ? '1' : '0'),
                      (e.gdprstring = t.getTcString() || ''))
                    : ((e.gdpr = 0), (e.gdprstring = '')),
                  e
                );
              }
              function U (e) {
                if (t.ZT(e) && 1 !== e.type()) {
                  var i = !1,
                    n = e.get('adc'),
                    r = e.get('crid'),
                    u = e.get('lpx'),
                    o = e.get('brId'),
                    d = H(),
                    a = c.getProviderFpById(r, o),
                    g = c.getProviderConfigById(r, o);
                  if (i === !1 || void 0 === i)
                    return (
                      s.yN() &&
                        ((n = t.Ab(n, '\\${GDPR}', d.gdpr)),
                        (n = t.Ab(n, '\\${GDPR_CONSENT_[0-9]+}', d.gdprstring))),
                      e.set('adc', j(n, e)),
                      void e.set('lpx', q(u, e, d))
                    );
                  var f = it.getSecondPrice();
                  (f === -1 || f < a) && (f = a);
                  var l = V(f, g, e);
                  e.set('cbdp', l.get('cbdp')),
                    e.set('dfpBd', l.get('dfpBd')),
                    e.set(
                      'adc',
                      j(n, e, f)
                        .split('\\${GDPR}')
                        .join(d.gdpr)
                        .split('\\${GDPR_CONSENT_[0-9]+}')
                        .join(d.gdprstring)
                    ),
                    e.set('lpx', q(u, e, d, f));
                }
              }
              function $ (e) {
                if (t.ZT(e)) {
                  var i = e[0],
                    n = e[1];
                  if (t.ZT(i) && i.get('maRepl') !== !0) {
                    i.set('maRepl', !0),
                      U(i),
                      t.a(ut, function (t) {
                        var e = t.get('lpx'),
                          i = H();
                        t.set('lpx', q(e, t, i));
                      });
                    var r = new RegExp('%%ERPM_FLAG%%', 'g'),
                      s = new RegExp('%%ORIGINAL_CPM%%', 'g'),
                      c = new RegExp('%%CBDP%%', 'g'),
                      u = new RegExp('%%ERPM_OR_OGBDP%%', 'g'),
                      o = new RegExp('%%DMS_STRATEGY%%', 'g'),
                      d = new RegExp('%%SC_ORIGINAL_CPM%%', 'g'),
                      a = i.get('ogCPM') || 0,
                      g = i.get('cbdp'),
                      f = i.get('yErpmFlag') || 0,
                      l = 1 === f ? i.get('erpm') : a || 0,
                      p = '',
                      h = (t.ZT(n) && n.get('ogCPM')) || 0;
                    i.get('apDms') === !0 && (p = i.get('strat') || '');
                    var m = i.get('adc');
                    i.set(
                      'adc',
                      m
                        .replace(r, f)
                        .replace(s, a)
                        .replace(c, g)
                        .replace(u, l)
                        .replace(o, p)
                        .replace(d, h)
                    );
                    var P = i.get('bd');
                    t.ZT(P) &&
                      i.set(
                        'bd',
                        P.replace(r, f)
                          .replace(s, a)
                          .replace(c, g)
                          .replace(u, l)
                          .replace(o, p)
                          .replace(d, h)
                      );
                  }
                }
              }
              function Y () {
                t.l('awHook', it.id(), t.H(O, [], it)),
                  $(it.getWinningBid(!0)),
                  t.l('beforeRender', it.id(), t.H(J, [], it)),
                  t.l('afterRender', it.id(), t.H(X, [], it));
              }
              function Q (t) {
                var e = it.getLoggingPixels(t);
                p.submit(e, { type: 'img', tags: ['win', 'misc'] }), G(t);
              }
              function J (e, i) {
                var n = i.winners;
                t.ZT(n) && $(n);
              }
              function K (e) {
                var i = e.get('adc'),
                  n = e.get('bd'),
                  r = new RegExp('%%DFP_DIV%%', 'g'),
                  s = it.slotElementId() || 'NA';
                e.set('adc', i.replace(r, s)), t.ZT(n) && e.set('bd', n.replace(r, s));
              }
              function X (e, i) {
                var n = i.winningBid;
                if (t.ZT(n)) {
                  var r = n.get('rs');
                  (r !== !0 && void 0 !== r) || n.get('bls') === !0 || (Q(n), n.set('bls', !0));
                }
              }
              function tt () {
                return (
                  t.W(ut, function (t) {
                    if (1 === t.status() && !t.isExpired()) return !0;
                  }) || !1
                );
              }
              var et = {},
                it = this,
                nt = {},
                rt = 0.01,
                st = {},
                ct = [],
                ut = [],
                ot = {},
                dt = 0;
              (this.isValidBid = function (t) {
                return w(t);
              }),
                (this.bidPriceComparatorDesc = x),
                (this.forPlacement = function (i) {
                  return (
                    t.ZT(i) &&
                      i.id() &&
                      ((et.plc = i),
                      (et.crid = i.id()),
                      (et.gbl = i.isGloballyTargeted()),
                      (et.szs = i.get('szs')),
                      (et.acid = s.W()),
                      (et.lgid = s.n()),
                      e(),
                      z()),
                    this
                  );
                }),
                (this.isBidReceived = function (t) {
                  return st[t];
                }),
                (this.get = function (t) {
                  return et[t];
                }),
                (this.set = function (t, e) {
                  return (et[t] = e), this;
                }),
                (this.crid = function () {
                  return et.crid;
                }),
                (this.id = function () {
                  return et.acid;
                }),
                (this.status = function (t) {
                  return void 0 !== t ? ((et.status = t), this) : et.status;
                }),
                (this.getAuctionTime = function () {
                  return t.clock.time(et.crid + et.acid + 'auctionTime') || 0;
                }),
                (this.getAuctionTimeFromStart = i),
                (this.isAnyBidInForAdUnit = function () {
                  return (
                    t.W(ct, function (t) {
                      return w(t);
                    }) || !1
                  );
                }),
                (this.getAnyBid = function () {
                  if (ct.length > 0) return ct[0];
                  var t = this.getPlacement(),
                    e = c.getMaxSizeByPlacement(t),
                    i = t.get('g') === !0;
                  return new n()
                    .set('g', i)
                    .set('brId', '0')
                    .set('crid', et.crid || '')
                    .set('sz', e.join('x'))
                    .set('bdFor', 'headerBid')
                    .set('bdFrom', 'headerBid')
                    .set('prNm', 'NO_BID')
                    .set('acid', et.acid);
                }),
                (this.getPlacement = function () {
                  return et.plc;
                }),
                (this.getSizes = function () {
                  return et.szs;
                }),
                (this.isGlobal = function () {
                  return et.gbl || !1;
                }),
                (this.impressionId = function (e) {
                  return t.ZT(e) ? ((et.impId = e), this) : et.impId;
                }),
                (this.getBidForThirdPartyProvider = function (t) {
                  return isNaN(t) ? N(t) : _(t);
                }),
                (this.setFinalWinningBid = function (e, i, n) {
                  return (
                    i === !0 && t.gb(it.getPmpBidForProvider)
                      ? (et.fwb = it.getPmpBidForProvider(n))
                      : e === !0
                      ? (et.fwb = it.getBidForThirdPartyProvider(n))
                      : (et.fwb = it.getWinningBid(!1, !0)),
                    et.fwb
                  );
                }),
                (this.getFinalWinningBid = function () {
                  if (!t.ZT(et.fwb))
                    throw new Error('getFinalWinningBid called before setFinalWinningBid');
                  return et.fwb;
                }),
                (this.getHighestUnrenderedBidBySize = function (e) {
                  return 0 === ct.length
                    ? null
                    : t.W(ct, function (i) {
                        if (w(i) && i.get('bls') !== !0 && i.get('sz') === e) {
                          var n = s.require('am'),
                            r = s.require('ipsf'),
                            c =
                              (n && n.getBidderAdapter(i)) ||
                              (r && r.getImpPrvServiceInstance(i.get('impId'), i.id()));
                          return c && t.gb(c.setSecondPrice) && c.setSecondPrice({ winner: i }), i;
                        }
                      }) || null;
                }),
                (this.getWinningBid = function (e, i) {
                  if ((i !== !0 && Z(), 0 === ct.length))
                    return (et.isWinnerDec = !0), e ? [null, null] : null;
                  if (et.isWinnerDec) return W(e);
                  if ((y(), M(), ct.length > 0)) {
                    var n = ct[0];
                    w(n) && (n.set('iwb', '1'), (et.hasAnyWinBid = !0));
                  }
                  var r = W(e),
                    s = t.Qe(r) ? r[0] : r;
                  return E(s), r;
                }),
                (this.getWinningBidsBySize = function (e) {
                  return (
                    Z(),
                    0 === ct.length
                      ? []
                      : t.filter(ct, function (t) {
                          return t.isValidBid() && t.get('sz') === e;
                        }) || []
                  );
                }),
                (this.getHighestThirdPartyBid = function (e) {
                  var i = null;
                  return (
                    (e = t.ZT(e) ? e : ut),
                    t.a(e, function (e) {
                      w(e) &&
                        (!t.ZT(i) || parseFloat(i.get('cpm')) < parseFloat(e.get('cpm'))) &&
                        (i = e);
                    }),
                    i
                  );
                }),
                (this.getHighestThirdPartyBidBySize = function (e) {
                  var i =
                    t.filter(ut, function (t) {
                      return t.get('sz') === e;
                    }) || [];
                  return this.getHighestThirdPartyBid(i);
                }),
                (this.addBidResponse = function (e) {
                  it.isClosed() ||
                    et.crid !== e.get('crid') ||
                    '0' === e.get('dbf') ||
                    (v(),
                    T(e),
                    s.sx() || (!e.get('tpt') && !e.get('tptg'))
                      ? t.gb(it.addToPmpList) &&
                        it.addToPmpList(e) === !0 &&
                        t.gb(it.addPmpResponse)
                        ? it.addPmpResponse(e)
                        : ct.push(e)
                      : R(e),
                    F() && it.close());
                }),
                (this.getSecondPrice = function () {
                  var e = it.getWinningBid(!0);
                  return null === e[1] || 0 === e[1].get('ogCPM')
                    ? -1
                    : e[0].get('ogCPM') === e[1].get('ogCPM')
                    ? e[0].get('ogCPM')
                    : t.x(e[1].get('ogCPM') + rt);
                }),
                (this.getAllInternalParticipants = function () {
                  return b(), ct;
                }),
                (this.getAllExternalParticipants = function () {
                  return ut;
                }),
                (this.getAuctionParticpiants = function () {
                  return ot;
                }),
                (this.setAuctionLevelProperties = function (t) {
                  return (
                    B(t),
                    t
                      .set('lgid', it.logId())
                      .set('acid', it.id())
                      .set('impId', it.impressionId())
                      .set('tref', it.isRefreshAuction() === !0 ? '1' : '0')
                      .set('dst', it.displayTimeForSlot())
                      .set('mnrf', it.getMnetRefreshFlag())
                      .set('mnrfc', it.getMnetRefreshCount())
                      .set('rfc', it.placementRefreshCount() || 0),
                    t
                  );
                }),
                (this.getLateAuctionParticipants = function () {
                  if (t.i(ot)) return [];
                  var e = [],
                    i = et.crid;
                  return (
                    t.a(ot, function (n, s) {
                      if (t.ZT(s) && st[s] !== !0 && t.ZT(n)) {
                        var u = new r()
                          .create()
                          .setBidType(n)
                          .status(3)
                          .setEntityProperties(n)
                          .setBidPriceProperties(0, n)
                          .setBidderSpecificProperties(s)
                          .set(
                            'sz',
                            (n.get('szs') && n.get('szs')[0] && n.get('szs')[0].get('sz')) ||
                              c.getDefaultSizeForId(i)
                          )
                          .set('tc', '1')
                          .build();
                        (u = it.setAuctionLevelProperties(u)), e.push(u);
                      }
                    }),
                    e
                  );
                }),
                (this.getThirdPartyLateBids = function () {
                  return t.filter(it.getLateAuctionParticipants(), function (t) {
                    return 1 === t.type();
                  });
                }),
                (this.displayTimeForSlot = function (e) {
                  return t.ZT(e) ? ((et.dispTime = e), this) : et.dispTime;
                }),
                (this.isClosed = function () {
                  return 2 === et.status;
                }),
                (this.isCloseScheduled = function () {
                  return 3 === et.status;
                }),
                (this.getLoggingPixels = function (e) {
                  var i = e.get('lpx'),
                    n = e.get('sspen'),
                    r = e.id(),
                    c = [];
                  if (n === !0) {
                    if (t.Qe(i) && i.length > 0) {
                      var u = s.getLgPath() + '?' + s.getLogUrls('ssp');
                      (u += t.wZ('pid', r)),
                        t.a(i, function (e) {
                          (e = P.resolveMacros(e, !0)), (u += t.wZ('nurl', e, { encode: !0 }));
                        }),
                        c.push(u);
                    }
                  } else
                    t.a(i, function (t) {
                      (t = P.resolveMacros(t, !0)), c.push(t);
                    });
                  return c;
                }),
                (this.handlePreRenderMacroReplacement = function () {
                  var e = it.getWinningBid(!0);
                  t.a(e, function (e) {
                    t.ZT(e) && K(e);
                  });
                }),
                (this.close = function () {
                  it.isClosed() ||
                    it.isCloseScheduled() ||
                    (it.status(3),
                    t.WZ('before:auctionEnd', et.acid),
                    g(),
                    it.status(2),
                    t.l('afterRender', et.acid, u.auctionWinner.dispatchWinner),
                    t.l('afterRender', et.acid, u.adCodeLog.addNew),
                    t.WZ('auctionEnd', et.acid, { auction: it, winner: it.getWinningBid() }),
                    Y(),
                    t.WZ('after:auctionEnd', et.acid));
                }),
                (this.hasValidBid = function (e) {
                  return t.ZT(e) ? ((et.vBid = e), this) : et.vBid;
                }),
                (this.logId = function () {
                  return et.lgid;
                }),
                (this.isForceCacheMode = function () {
                  return et.fcm === !0;
                }),
                (this.registerParticipant = function (e) {
                  t.ZT(e) && ((ot[e.get('pid')] = e), f());
                }),
                (this.mnetAdxPostBidDone = function (e) {
                  return t.ZT(e) ? ((et.mnadxDone = e), this) : et.mnadxDone;
                }),
                (this.bidRequested = function (e) {
                  return t.ZT(e) ? ((et.bidReq = e), this) : et.bidReq;
                }),
                (this.isRefreshAuction = function (e) {
                  return t.ZT(e) ? ((et.refAuc = e), this) : et.refAuc;
                }),
                (this.placementRefreshCount = function (e) {
                  return t.ZT(e) ? ((et.refCnt = e), this) : et.refCnt || 0;
                }),
                (this.getMnetRefreshFlag = function () {
                  return et.mnrf || '0';
                }),
                (this.getInViewFlag = function () {
                  return et.invw || null;
                }),
                (this.getMnetRefreshCount = function () {
                  return et.mnrfc || 0;
                }),
                (this.isRendered = function () {
                  return dt > 0;
                }),
                (this.incRenderCount = function () {
                  dt++;
                }),
                (this.isAWFired = function () {
                  return et.awFired || !1;
                }),
                (this.setAWFired = function () {
                  et.awFired = !0;
                }),
                (this.hasAllBidsExpired = function () {
                  return !(t.ZT(it.getWinningBid()) || tt());
                }),
                (this.isNotReusable = function () {
                  return it.hasAllBidsExpired() || it.isRendered();
                }),
                (this.getBidObjectFor = function (e) {
                  var i,
                    n = null;
                  return (
                    (i =
                      t.W(ct, function (t) {
                        if (t.id() === e) return (n = t), !0;
                      }) || !1),
                    (i =
                      i ||
                      t.W(ut, function (t) {
                        if (t.id() === e) return (n = t), !0;
                      }) ||
                      !1),
                    t.gb(it.getAllPmpParticipants) &&
                      (i =
                        i ||
                        t.W(it.getAllPmpParticipants(), function (t) {
                          if (t.id() === e) return (n = t), !0;
                        }) ||
                        !1),
                    i ? n : null
                  );
                }),
                (this.getAverageBidPrice = function () {
                  var e = 0,
                    i = 0;
                  return (
                    t.a(ct, function (t) {
                      w(t) && ((e += parseFloat(t.get('dfpBd')) || 0), (i += 1));
                    }),
                    t.a(ut, function (t) {
                      w(t) && ((e += parseFloat(t.get('dfpBd')) || 0), (i += 1));
                    }),
                    t.gb(it.getAllPmpParticipants) &&
                      t.a(it.getAllPmpParticipants(), function (t) {
                        w(t) && ((e += parseFloat(t.get('dfpBd')) || 0), (i += 1));
                      }),
                    0 === i ? 0 : e / i
                  );
                }),
                (this.removeParticipants = function (e) {
                  ot = t.filter(ot, function (t, i) {
                    return e.indexOf(i) === -1 || (l(), !1);
                  });
                }),
                (this.lostDueToLowDmsPrice = function (e) {
                  return t.ZT(e) && (et.ldp = e), et.ldp || !1;
                }),
                (this.auctionMaxTime = function (e) {
                  return t.ZT(e) && (et.maxTime = e), et.maxTime;
                }),
                (this.slotElementId = function (e) {
                  return t.ZT(e) && (et.ddiv = e), et.ddiv;
                });
            }
            return (v.Properties = e.Properties), (v.STATUS = e.STATUS), v;
          }
        );
        _cD('brs', ['em', 'am', '_', 'plM', 'plc', 'prs', 'drs', 'lm', 'res'], function (
          r,
          i,
          e,
          t,
          d,
          o,
          s,
          c,
          n
        ) {
          'use strict';
          function l (e) {
            return s.isActionApplicable('DISABLE_ADS')
              ? void c.errorLogs.addAdsDisabledActionError()
              : (r.dv(), void i.getPrefetchBids(e, r.Wd()));
          }
          function a (t) {
            return s.isActionApplicable('DISABLE_ADS')
              ? void c.errorLogs.addAdsDisabledActionError()
              : (r.dv(),
                e.a(t, function (i, e) {
                  i.impressionId(r.Wd());
                }),
                void i.getBids(t));
          }
          function g (r) {
            if (0 !== r.length) {
              a(r);
              var i = [];
              e.a(r, function (r) {
                var e = t.getById(r.crid());
                e.get('g') && i.push(r.crid());
              }),
                i.length > 0 && (l(i), o.triggerPrefetch(!1, !0));
            }
          }
          return { callForPrefetchBids: l, callForBids: a, getBidsForSlots: g };
        });
        _cD('prs', ['_', 'em', 'res', 'cc', 'config', 'sm'], function (e, n, i, t, o, c) {
          'use strict';
          function r (e) {
            return (e && (n.lW() || 0)) || n.bp() || 0;
          }
          function f (n, i) {
            var t,
              u = !!(o && o.cbInfo && o.cbInfo.cacheDisabled);
            if (c.Jb() && !u) {
              if (((t = r(i)), !n && t > 0))
                return void setTimeout(function () {
                  f(!0);
                }, t);
              e.yV('prefetch', 'global'), e.WZ('afterAuction', 'global');
            }
          }
          function u () {
            e.WZ('idleTime', 'global');
          }
          function a (i) {
            var t = n.I();
            e.ZT(t) && e.gb(t.setExposedVariables) && t.setExposedVariables(i);
          }
          function s () {
            if (!n.Fm()) return void a(!1);
            var i = n.I();
            if (e.ZT(i) && e.gb(i.getCustomCookieSyncDelay)) {
              var t = i.getCustomCookieSyncDelay();
              return a(e.ZT(t)), t;
            }
          }
          function l (n) {
            e.ZT(n) && n > 0 ? setTimeout(u, n) : u();
          }
          function d () {
            var i = s() || n.v();
            m(n.k(), e.H(l, [i]));
          }
          function v () {
            if (!n.vh() || !n.Z()) {
              if (n.Zs()) {
                var i = n.require('mck');
                if (i.shouldDelayPrefetch()) return void e.l('cookieReceived', 'command', f);
              }
              f();
            }
          }
          function b () {
            d(), m(n.A(), v);
          }
          function m (n, i) {
            n
              ? e.eventLib.addEvent(window, 'load', function () {
                  i();
                })
              : i();
          }
          return { addPrefetchEvents: b, triggerPrefetch: f };
        });
        _cD('adr', ['_'], function (_) {
          'use strict';
          function i () {
            var i = {};
            (this.set = function (_, I) {
              return (i[_] = I), this;
            }),
              (this.get = function (_) {
                return i[_];
              }),
              (this.serialize = function () {
                return _.k({}, i);
              });
          }
          return (
            (i.Properties = {
              BID: 'bid',
              PLACEMENT_ID: 'pcid',
              SIZE: 'size',
              DEAL_TYPE: 'deal_type',
              DEAL_ID: 'deal_id',
              ADCODE: 'adcode',
              BID_TYPE: 'bid_type',
              NOBID_FLAG: 'nobid',
              NOBID_REASON: 'nobidreason',
              PROVIDER_ID: 'bidder_id',
              ENCRYPTED_BID: 'encrypted_bid',
              PROVIDER_ACCOUNT_ID: 'paId',
              SUB_BIDDER_ID: 'sbdrid',
              PROVIDER_API_ID: 'pApId',
              MATCH_STRING: 'matchstring',
              BID_DATA: 'biddata',
              YBNCA_VARIANT: 'yv',
              IS_NATIVE: 'isnat',
              IS_FB_NATIVE: 'fbn',
              REPORT_WIN_OR_LOSS_CALLBACK: 'reportWinOrLossCallback',
              BID_FOR_GOOGLE: 'google_bid',
            }),
            i
          );
        });
        _cD(
          'mcm',
          [
            'mnrp',
            '_',
            'em',
            'bm',
            'adr',
            'bid',
            'lm',
            'plM',
            'plc',
            'cc',
            'res',
            'map',
            'lh',
            'lc',
          ],
          function (e, t, r, i, n, o, s, d, c, g, u, a, p, I) {
            'use strict';
            function P (e, t) {
              var i = new n()
                .set(n.Properties.BID, '0.00')
                .set(n.Properties.NOBID_FLAG, !0)
                .set(n.Properties.NOBID_REASON, t)
                .set(n.Properties.PLACEMENT_ID, e)
                .set(n.Properties.DEAL_TYPE, '')
                .set(n.Properties.DEAL_ID, '')
                .set(n.Properties.PROVIDER_ID, '')
                .set(n.Properties.YBNCA_VARIANT, r.BN(e));
              return i.serialize();
            }
            function l (e, i, o) {
              var s = e.crid();
              if (!t.ZT(i)) return P(s, o || 12);
              var d = i.get('sbdrid') || r.WS(s, e.id()) || '',
                c = new n()
                  .set(n.Properties.PROVIDER_ID, i.get('brId'))
                  .set(n.Properties.NOBID_FLAG, !1)
                  .set(n.Properties.SIZE, i.get('sz'))
                  .set(n.Properties.BID, i.get('cpm'))
                  .set(n.Properties.PROVIDER_ACCOUNT_ID, i.get('paId'))
                  .set(n.Properties.SUB_BIDDER_ID, d)
                  .set(n.Properties.PROVIDER_API_ID, i.get('pApId'))
                  .set(n.Properties.PLACEMENT_ID, s)
                  .set(n.Properties.BID_DATA, i.get('bd'))
                  .set(n.Properties.MATCH_STRING, i.get('matchstr'))
                  .set(n.Properties.DEAL_ID, i.get('di') || '')
                  .set(n.Properties.DEAL_TYPE, i.get('dt') || 'O')
                  .set(n.Properties.YBNCA_VARIANT, r.BN(s))
                  .set(n.Properties.IS_NATIVE, i.get('isnat'))
                  .set(n.Properties.IS_FB_NATIVE, i.get('fbn'))
                  .set(n.Properties.BID_FOR_GOOGLE, parseFloat(i.get('ogCPM')));
              return (
                i.get('isnat')
                  ? c.set(n.Properties.ADCODE, i.get('padc'))
                  : c.set(n.Properties.ADCODE, i.get('adc')),
                c.serialize()
              );
            }
            function A (e, t) {
              var r = e.get('sz');
              return e.get('isnat') || r === t;
            }
            function f (e) {
              if (!t.ZT(e)) return [];
              var r,
                i = e.getWinningBid(),
                n = e.logId(),
                o = O.get(n);
              return (
                t.ZT(i) &&
                  !A(i, o) &&
                  ((i = e.getHighestUnrenderedBidBySize(o)), t.ZT(i) || (r = 13)),
                [i, r]
              );
            }
            function w (e) {
              var t = f(e),
                r = t[0];
              return l(e, r, t[1]);
            }
            function B (e, r) {
              return e.isClosed()
                ? (p.logAuctionParticipants(e), void r(w(e)))
                : void t.l('after:auctionEnd', e.id(), t.H(B, [e, r]));
            }
            function C (e) {
              return O.hasOwnProperty(e);
            }
            function D (e, r, n) {
              var o = i.registerAuction(e, n, [r]);
              if (t.ZT(o)) return window.hbCMBidxc.getBidsForSlots([o]), o;
            }
            function T (e) {
              var r = i.getAllAuctions();
              return t.W(r, function (t) {
                if (t.logId() === e) return t;
              });
            }
            function b (e) {
              var t = new o();
              return t.set('brId', e[n.Properties.PROVIDER_ID] || ''), t;
            }
            function _ (i, n) {
              var o = r.n();
              return e.setTimeout(t.H(n, [P(i, 11)]), 0), o;
            }
            function v (e, r) {
              if ('string' != typeof e || !t.ZT(e)) return !1;
              var i = d.getById(r),
                n = i && i.get('szs');
              return (
                t.W(n, function (t) {
                  if (t.join('x') === e) return !0;
                }) || !1
              );
            }
            function M (e, r, n, o) {
              if ('string' != typeof e || !t.ZT(e) || !v(r, e) || !t.gb(n))
                return void s.errorLogs.addNew({
                  name: 'RegisterSlot: Invalid Input',
                  message: 'Valid Size - ' + r + ', Callback Type - ' + typeof n,
                  crid: e,
                });
              var d,
                c = i.getCurrentAuctionForSlot(e);
              return (
                (t.ZT(c) && !C(c.logId())) || (c = D(e, r, o)),
                t.ZT(c) ? ((d = c.logId()), O.set(d, r), B(c, n), d) : _(e, n)
              );
            }
            function E (e, r, i) {
              var n = {};
              (r = t.ZT(r) ? r : ''), (i = !t.ZT(i) || i);
              for (var o = '', d = 0; d < e.length; d++) o += e[d] + ' ' + typeof e[d] + ', ';
              (n.name = r), (n.message = o), i || (n.logLevel = 2), s.errorLogs.addNew(n);
            }
            function R (e) {
              var r = T(e);
              return t.ZT(r)
                ? r.isClosed()
                  ? void E(arguments, 'closeCMAuction: Auction is already closed', !1)
                  : void r.close()
                : void E(arguments, 'closeCMAuction: Auction not found');
            }
            function m (e, r) {
              var i,
                n = new a().config(r || {}),
                o = T(e),
                d = f(o)[0];
              n.get('bid')
                ? ((i = b(n.get('bid'))),
                  s.auctionWinner.dispatchWinner('afterRender', { winningBid: i, secondBid: d }))
                : t.ZT(d)
                ? t.WZ('afterRender', o.id(), {
                    auctionTime: o.getAuctionTime(),
                    secondBid: o.getWinningBid(!0)[1],
                    winningBid: d,
                  })
                : s.errorLogs.addNew({
                    name: 'ReportCMRendering: Unable to fire AW log',
                    message: 'auctionLogId - ' + e + ', Input Size - ' + O.get(e),
                  });
            }
            function x (e, t, r) {
              return new o().set('ogCPM', t).set('brId', '7').set('crid', e).set('sz', r);
            }
            function h (e, r, i, n) {
              if (!t.Td(r) || !t.Td(e) || !t.Td(i))
                return void s.errorLogs.addNew({
                  name: 'getAdxPrediction: Unable to predict adx bid',
                  message:
                    'crid - ' + e + 'auctionLogId - ' + n + ', bidPrice = ' + r + ', size = ' + i,
                });
              var o = T(n) || null,
                d = f(o)[0] || x(e, r, i);
              return L.getAdxPrediction(d, o, r);
            }
            function N () {
              (window.hbCMBidxc.registerSlot =
                window.hbCMBidxc.registerSlot || t.Wa(M, window.hbCMBidxc)),
                (window.hbCMBidxc.reportCMRendering =
                  window.hbCMBidxc.reportCMRendering || t.Wa(m, window.hbCMBidxc)),
                (window.hbCMBidxc.closeCMAuction =
                  window.hbCMBidxc.closeCMAuction || t.Wa(R, window.hbCMBidxc)),
                t.ZT(L) &&
                  (window.hbCMBidxc.getAdxPrediction =
                    window.hbCMBidxc.getAdxPrediction || t.Wa(h, window.hbCMBidxc));
            }
            var O = new a(),
              L = r.require('mhxc');
            return { exposeAllApisForCM: N };
          }
        );
        _cD('cma', function () {
          return {
            PUBLISHER_URL: 'pu',
            REFERRER_URL: 'ru',
            GDPR_EEA_USER: 'gd',
            CLIENT_DEVICE_TYPE_ID: 'ugd',
            DISABLE_COOKIE_FOR_PRIVACY: 'dcfp',
          };
        });
        _cD('ccpapmh', ['_'], function (a) {
          'use strict';
          function n (a) {
            return (
              !!a &&
              void (window.__uspapi = function (n, t, i, s) {
                i({ msg: 'CMP not found' }, !1);
                var c = Math.random() + '',
                  o = { __uspapiCall: { command: n, parameter: s, version: t, callId: c } };
                (e[c] = i), a.postMessage(o, '*');
              })
            );
          }
          function t (n) {
            var t,
              i = {};
            try {
              (i = a.cm(n.data) ? JSON.parse(n.data) : n.data), (t = i.__uspapiReturn);
            } catch (s) {}
            t &&
              'function' == typeof e[t.callId] &&
              (e[t.callId](t.returnValue, t.success), (e[t.callId] = null));
          }
          function i () {
            if (a.inIframe && !a.gb(window.__uspapi) && a.gb(window.postMessage)) {
              var i = a.T(s);
              n(i) && window.addEventListener('message', t, !1);
            }
          }
          var e = {},
            s = '__uspapiLocator';
          return { init: i };
        });
        _cD(
          'ccmg',
          [window, 'config', '_', 'res', 'cccom', 'cccst', 'ccas', 'drsac', 'ccpapmh'],
          function (n, t, i, e, c, r, a, o, s) {
            'use strict';
            function u () {
              return I('DISABLE_COOKIESYNC')
                ? 0
                : I('ENABLE_COOKIESYNC_FOR_COCONTROLLERS')
                ? 2
                : I('ENABLE_COOKIESYNC_FOR_SIGNATORIES')
                ? 3
                : 1;
            }
            function C () {
              if (!i.ZT(L))
                try {
                  L = n._cR(['em'])[0];
                } catch (t) {
                  L = null;
                }
              return L;
            }
            function g (n) {
              r.setCcpaConsent(n), S();
            }
            function l (n) {
              r.limitDataProcessing(n), S();
            }
            function p () {
              N === !1 &&
                setTimeout(function () {
                  i.WZ('dataPrivacyConsentSet', 'global', !0), (N = !1);
                }, 100),
                (N = !0);
            }
            function f () {
              var n = C();
              if (!i.ZT(n)) return !0;
              var t = n.Zh();
              return t === !0;
            }
            function S () {
              var n = r.getCcpaConsent(),
                t = C(),
                e = u();
              f() || (i.ZT(t) && (n = t.mb())),
                i.ZT(n) &&
                  (r.setFinalConsentString(n),
                  a.resetCcpaActions(),
                  a.setCcpaActions(n),
                  E(e) && p());
            }
            function E (n) {
              return n !== u();
            }
            function m () {
              return r.getCcpaConsent();
            }
            function F () {
              return r.getFinalConsentString();
            }
            function _ () {
              return a.getCcpaConsentStateIndex(r.getFinalConsentString());
            }
            function A () {
              var n = r.getLimitDataProcessingFlag();
              return i.ZT(n) ? n : '';
            }
            function O () {
              return c.isCcpaEligibleImpression();
            }
            function T () {
              return O() ? 1 : 0;
            }
            function b () {
              return Z() ? 1 : 0;
            }
            function Z () {
              var n = C();
              if (!i.ZT(n)) return !1;
              var t = n.bG();
              return 1 === t;
            }
            function v () {
              if (Z() && O()) {
                var n,
                  t = C();
                i.ZT(t) && (n = t.mb()),
                  o.disableCcpaBlacklistedProviders(),
                  o.cleanEsiReferrerUrl(),
                  r.setFinalConsentString(n),
                  a.setDefaultActions(n);
              }
            }
            function I (n) {
              return a.isActionApplicable(n);
            }
            function d () {
              i.gb(n.__uspapi) &&
                n.__uspapi('getUSPData', 1, function (n, t) {
                  t && i.ZT(n) && i.ZT(n.uspString) && g(n.uspString.toUpperCase());
                });
            }
            function D () {
              s.init(), v(), d();
            }
            var L,
              N = !1;
            return (
              D(),
              {
                init: D,
                setCcpaConsent: g,
                limitDataProcessing: l,
                isCcpaEnforced: Z,
                getCcpaConsent: m,
                getFinalConsentString: F,
                getFinalConsentStringIndex: _,
                getLimitDataProcessingFlag: A,
                isCcpaEligibleImpression: O,
                getCcpaApplicableFlag: T,
                getCcpaEnforcementFlag: b,
                isActionApplicable: I,
                getCcpaConsentFlagForCookieSync: u,
              }
            );
          }
        );
        _cD('cccom', [window, '_', 'em'], function (t, e, i) {
          'use strict';
          function n () {
            if (e.ZT(n.state)) return n.state;
            var t = i.t();
            return (n.state = '1' === t), n.state;
          }
          return { isCcpaEligibleImpression: n };
        });
        _cD('cccst', ['_', 'em', 'res'], function (n, t, e) {
          'use strict';
          function r (n) {
            c(n) && ((l = n), (h = !0));
          }
          function c (t) {
            if (n.cm(t) && 4 !== t.length) return !1;
            var e = t.slice(0, 1);
            if ('1' !== e) return !1;
            for (var r = 1; r < t.length; r++)
              switch (t.charAt(r)) {
                case 'Y':
                case 'N':
                case '-':
                  continue;
                default:
                  return !1;
              }
            return !0;
          }
          function i (t) {
            n.C(t) && ((g = t), (l = t ? '1YY-' : '1YN-'), (h = t));
          }
          function s () {
            return l;
          }
          function u () {
            return h;
          }
          function a () {
            return g;
          }
          function o (n) {
            C = n || '';
          }
          function f () {
            return C;
          }
          var g,
            l = '',
            C = '',
            h = !1;
          return {
            setCcpaConsent: r,
            setFinalConsentString: o,
            getFinalConsentString: f,
            limitDataProcessing: i,
            getCcpaConsent: s,
            getLimitDataProcessingFlag: a,
            hasValidSupplyPassedConsent: u,
          };
        });
        _cD('ccas', ['_', 'em', 'cc', 'res'], function (n, t, r, i) {
          'use strict';
          function e () {
            var t = [];
            (this.add = function (r) {
              if (n.ZT(r)) return n.Qe(r) ? void n.UZ(t, r) : void t.push(r);
            }),
              (this.reset = function () {
                t = [];
              }),
              (this.isActionApplicable = function (r) {
                return !!n.ZT(r) && n.e(t, r);
              });
          }
          function c (r) {
            if (!n.ZT(r)) return null;
            var i = t.wF();
            return 0 === i.length
              ? null
              : n.W(i, function (n) {
                  var t = n.cstr;
                  if (t === r) return n;
                }) || null;
          }
          function u (t) {
            var r = c(t);
            return n.ZT(r) ? r.st || '' : '';
          }
          function a (t) {
            var r = c(t);
            if (!n.ZT(r)) return '';
            var i = r.idx;
            return n.ZT(i) ? i : '';
          }
          function o (n) {
            var r = t.XY();
            return r[n] || [];
          }
          function s (t) {
            var r = u(t);
            if (n.ZT(r)) {
              var i = o(r);
              n.ZT(i) && Z.add(i);
            }
          }
          function f (t) {
            var r = 'S99';
            if (n.ZT(t)) {
              var i = u(t);
              n.ZT(i) && (r = i);
            }
            var e = o(r);
            Z.add(e);
          }
          function v () {
            Z.reset();
          }
          function l (n) {
            return Z.isActionApplicable(n);
          }
          var Z = new e();
          return {
            isActionApplicable: l,
            getCcpaConsentStateIndex: a,
            setCcpaActions: s,
            setDefaultActions: f,
            resetCcpaActions: v,
          };
        });
        _cD('tcfpmh', ['_'], function (a) {
          'use strict';
          function t (a) {
            return (
              !!a &&
              ((window.__tcfapi = function (t, n, c, e) {
                var r = Math.random() + '',
                  o = { __tcfapiCall: { command: t, parameter: e, version: n, callId: r } };
                (i[r] = c), a.postMessage(o, '*');
              }),
              !0)
            );
          }
          function n (t) {
            var n,
              c = {};
            try {
              (c = a.cm(t.data) ? JSON.parse(t.data) : t.data), (n = c.__tcfapiReturn);
            } catch (e) {}
            n &&
              'function' == typeof i[n.callId] &&
              (i[n.callId](n.returnValue, n.success), (i[n.callId] = null));
          }
          function c () {
            if (a.inIframe && !a.gb(window.__tcfapi) && a.gb(window.postMessage)) {
              var c = a.T(e);
              t(c) && window.addEventListener('message', n, !1);
            }
          }
          var e = '__tcfapiLocator',
            i = {};
          return { init: c };
        });
        _cD('tcfm', [window, 'config', '_', 'res', 'tcfds', 'tcfas', 'drsac', 'tcfpmh'], function (
          t,
          n,
          e,
          r,
          i,
          c,
          o,
          u
        ) {
          'use strict';
          function a () {
            return G;
          }
          function s () {
            if (!e.ZT(I))
              try {
                I = t._cR(['em'])[0];
              } catch (n) {
                I = null;
              }
            return I;
          }
          function f () {
            Z === !1 &&
              setTimeout(function () {
                e.WZ('dataPrivacyConsentSet', 'global', !0), (Z = !1);
              }, 100),
              (Z = !0);
          }
          function p () {
            e.gb(t.__tcfapi) &&
              ((G = !0),
              t.__tcfapi('addEventListener', 2, function (t, n) {
                n &&
                  e.ZT(t) &&
                  (i.storeTcData(t),
                  c.resetTcfActions(),
                  i.isGdprApplicable() &&
                    (o.disableGdprBlacklistedProviders(),
                    o.cleanEsiReferrerUrl(),
                    c.setTcfActions()),
                  i.hasConsentChanged() && f());
              }));
          }
          function l (t) {
            return !!a() && c.isActionApplicable(t);
          }
          function g () {
            var t = s();
            return i.isGdprApplicable() || (e.ZT(t) && t.Yh());
          }
          function d () {
            return g() ? '1' : '0';
          }
          function T () {
            return i.getCmpId();
          }
          function C () {
            return i.getCmpStatus();
          }
          function S () {
            var t = i.getTcString();
            if (e.ZT(t)) return t;
            var n = s();
            return e.ZT(n) ? n.N() : '';
          }
          function m () {
            var t = s();
            return e.ZT(t) ? t.Y() : '2';
          }
          function A () {
            return a() ? (l('DISABLE_COOKIESYNC') ? '0' : '1') : m();
          }
          function _ () {
            return a() ? (l('STOP_SENDING_PII') ? '0' : '1') : m();
          }
          function b () {
            return c.getPurposeString();
          }
          function v () {
            u.init(), p();
          }
          var I,
            Z = !1,
            G = !1;
          return (
            v(),
            {
              isActionApplicable: l,
              isGdprApplicable: g,
              getCmpId: T,
              getCmpStatus: C,
              getTcString: S,
              getPurposeString: b,
              getConsentFlagForMowx: _,
              getConsentFlagForCookieSync: A,
              isTcfV2Implemented: a,
              getGdprFlag: d,
            }
          );
        });
        _cD('tcfds', ['_', 'res', 'tcfcons'], function (t, r, n) {
          'use strict';
          function e () {
            return m.gdprApplies === !0;
          }
          function i () {
            return m.cmpId || '';
          }
          function u () {
            return m.tcString || '';
          }
          function s () {
            return m.cmpStatus || '';
          }
          function o () {
            var t = '142',
              r = m.vendor || {},
              n = r.consents || {};
            return n[t] === !0;
          }
          function c () {
            var t = '142',
              r = m.vendor || {},
              n = r.legitimateInterests || {};
            return n[t] === !0;
          }
          function a (t) {
            if (!o()) return !1;
            var r = m.purpose || {},
              n = r.consents || {};
            return n[t] === !0;
          }
          function f (t) {
            if (!c()) return !1;
            var r = m.purpose || {},
              n = r.legitimateInterests || {};
            return n[t] === !0;
          }
          function p (t) {
            var r = '142',
              n = m.publisher || {},
              e = n.restrictions || {},
              i = e[t] || {};
            return i[r];
          }
          function l (t) {
            var r = p(t);
            return 0 !== r && (1 === r ? a(t) : 2 === r ? f(t) : f(t) || a(t));
          }
          function v () {
            if (!t.ZT(g)) return !1;
            var r = u();
            return g !== r;
          }
          function d (r) {
            (g = u()), t.ZT(r) && (m = r);
          }
          var g,
            m = {};
          return {
            storeTcData: d,
            isGdprApplicable: e,
            getCmpId: i,
            getTcString: u,
            getCmpStatus: s,
            isConsentAvailableForPurpose: a,
            isLegitimateInterestEstablishedForPurpose: f,
            hasConsentChanged: v,
            isFlexiblePurposeAllowed: l,
          };
        });
        _cD('tcfas', ['_', 'em', 'cc', 'res', 'tcfds'], function (t, n, i, e, r) {
          'use strict';
          function u () {
            var n = [];
            (this.add = function (i) {
              if (t.ZT(i))
                return t.Qe(i)
                  ? void t.a(i, function (i) {
                      t.e(n, i) || n.push(i);
                    })
                  : void n.push(i);
            }),
              (this.reset = function () {
                n = [];
              }),
              (this.isActionApplicable = function (i) {
                return !!t.ZT(i) && t.e(n, i);
              });
          }
          function o (t) {
            return 'C' === t.tp;
          }
          function c (t) {
            return 'L' === t.tp;
          }
          function s (t) {
            return 'F' === t.tp;
          }
          function f () {
            var i = n.Ac();
            t.i(i) ||
              t.a(i, function (n, i) {
                if (!t.i(n)) {
                  if (o(n) && r.isConsentAvailableForPurpose(i)) return void d.push(i);
                  if (c(n) && r.isLegitimateInterestEstablishedForPurpose(i))
                    return void d.push(i);
                  if (s(n) && r.isFlexiblePurposeAllowed(i)) return void d.push(i);
                  h.push(i), v.add(n.act || []);
                }
              });
          }
          function a () {
            (d = []), (h = []), v.reset();
          }
          function p (t) {
            return v.isActionApplicable(t);
          }
          function l () {
            var n = [];
            t.a(d, function (t) {
              n[t - 1] = '1';
            }),
              t.a(h, function (t) {
                n[t - 1] = '0';
              });
            for (var i = 0; i < n.length; i++) t.ZT(n[i]) || (n[i] = '-');
            return n.join('');
          }
          var d = [],
            h = [],
            v = new u();
          return {
            setTcfActions: f,
            isActionApplicable: p,
            getPurposeString: l,
            resetTcfActions: a,
          };
        });
        _cD(
          'ybncabidder-adapter',
          [
            'rtbsbidder-adapter',
            '_',
            'res',
            'ct',
            'em',
            'pmc',
            'mrm',
            'rqc',
            'bid',
            'bb',
            'rsc',
            'yu',
            'cc',
            'plM',
            'prM',
          ],
          function (e, t, i, r, d, a, n, o, s, c, u, g, l, v, b) {
            'use strict';
            function m () {
              function i (e, t) {
                return d.Rl(e) && b.isYbncaAutoProvider(t);
              }
              function a (e, t) {
                return d.lJ(e) && b.isYbncaAutoProvider(t);
              }
              function o (e, t) {
                if (null !== e) {
                  var i = t.getAuction(),
                    r = t.getProviderService();
                  P.setAuctionProperties(e, i), r.addAkamaiBid(e);
                }
              }
              function s (e, i) {
                if (e.get('hb') === !0) {
                  var d = 'akamai',
                    a = e.get('pid'),
                    s = i.impressionId(),
                    c = P.getProviderServiceInstance(s, a, 'headerBid'),
                    u = n.getRequestCollection(d, s),
                    g = new r(e, u, c, i),
                    l = P.getRequestObj(g, d, o);
                  u.setAdditionalParam('ismac', t.MW() ? '1' : '0'),
                    u.setAdditionalParam('source', 'akamai'),
                    u.add(l),
                    u.addFilter(a, c.isRequiredParam);
                }
              }
              function u (e, t, i) {
                var r = e.getProviderConfigForSlot(),
                  d = e.getProviderService(),
                  a = e.getAuction(),
                  n = t.get('publisher_id') || r.get('ecc') || '',
                  o = t.get('ext_placement_code') || '',
                  s = t.get('sub_bidder_id'),
                  c = {};
                return (
                  (c.matchString = t.get('matchString') || ''),
                  (c.bidData = t.get('bidData') || ''),
                  d.getAdcode(n, o, s, r, a, i, c)
                );
              }
              function l (e, t) {
                e.set('isnat', p(t));
              }
              function m (e, i) {
                t.ZT(e.get('bdFrom')) || e.set('bdFrom', 'headerBid'),
                  i.isClosed() && (1 === e.status() ? e.status(5) : e.status(6));
              }
              function f (e) {
                var i = 'medianet_chnm2',
                  r = 'medianet_chnm = "${chnm}"; ',
                  a = d.I();
                return (
                  t.ZT(a) &&
                    t.gb(a.setMedianetDms) &&
                    a.setMedianetDms() &&
                    (r += 'medianet_dms = "${dmm}"; '),
                  e.replace(i, r + i)
                );
              }
              function h (e) {
                var t = g.updateBidDataWithBidMacro(e.get('bd')),
                  i = g.updateAdCodeWithBidMacro(e.get('adc'));
                (i = f(i, e)),
                  e.set('bd', g.resolveYbncaMacros(t, e, !1)),
                  e.set('adc', g.resolveYbncaMacros(i, e, !0));
              }
              function p (e) {
                var i = v.getNativeConfigForSlot(e);
                return !t.i(i) && i.isdisp !== !0;
              }
              var P = this;
              e.call(P),
                (this.getStatusForPlacement = function (e, d, n) {
                  var o = d.get('pid'),
                    c = n.impressionId(),
                    u = P.getProviderServiceInstance(c, o, 'headerBid'),
                    g = new r(d, null, u, n);
                  (!a(n.crid(), o) && P.isCacheParticipant(g)) ||
                    (t.l('bid::default::head', n.id(), t.H(P.addHbRequestForSlot, [d, n])),
                    i(n.crid(), o) &&
                      !n.isRefreshAuction() &&
                      t.l('bid::default::akamai', n.id(), t.H(s, [d, n]))),
                    P.addCustomEventListener(g);
                }),
                (this.addCustomEventListener = function (e) {
                  var i = e.getProviderConfigForSlot(),
                    r = e.getProviderService(),
                    d = e.getAuction(),
                    a = i.get('pid');
                  b.isYbncaAutoProvider(a) &&
                    t.l(
                      'before:auctionEnd',
                      d.id(),
                      t.H(r.useBidsForProvider, [P.handleBidsForAuction, [i], e])
                    );
                }),
                (this.createBidForProviderResponse = function (e, t, i) {
                  var r = t.getRequestCollection(),
                    d = r.getProviderRequestType(),
                    a = e.get('bidData') || '',
                    n = e.get('size'),
                    o = new c()
                      .createInternalBid()
                      .setBidProperties(t.getProviderConfigForSlot(), e, d, i)
                      .set('bd', a)
                      .build();
                  if (1 === o.status()) {
                    var s = e.get('prvAccId'),
                      u = t.getProviderConfigForSlot().get('ecc');
                    o.set('pcrid', g.getProviderCrid(s, u))
                      .set('iurl', g.getCreativeUrl(s, u, n))
                      .set('bren', !1)
                      .set('chfl', !1)
                      .set('matchstr', e.get('matchString') || '');
                  }
                  return o;
                }),
                (this.addAdditionalParamInRequestCollection = function (e, t, i) {
                  e.setAdditionalParam('isRefresh', i.isRefreshAuction() ? '1' : '0');
                }),
                (this.updateBidProperties = function (e, t, i) {
                  var r = t.getProviderConfigForSlot(),
                    d = r.get('pid'),
                    a = r.get('crid'),
                    n = i.get('size'),
                    o = i.get('og_bid') || 0;
                  e.set('yogbdp', o),
                    b.generateYbncaAdCodeInClient(d) && p(a) === !1 && e.set('adc', u(t, i, n));
                }),
                (this.handleBidsForAuction = function (e, i) {
                  if (null !== e) {
                    var r = i.getAuction(),
                      n = i.getProviderService(),
                      o = e.get('brId'),
                      s = e.get('crid');
                    1 === e.status() && d.WS(s, r.id(), e.get('sbdrid')),
                      l(e, s),
                      P.setAuctionProperties(e, r),
                      m(e, r),
                      a(s, o) && t.gb(n.isStoreable) && n.isStoreable(e) && n.storeBidInMemory(e),
                      h(e),
                      (1 !== e.status() && 2 !== e.status()) || r.addBidResponse(e),
                      n.addToBidCollection(e, !1);
                  }
                });
            }
            return t.MH(m, e), m;
          }
        );
        _cD('rtbsbidder-adapter', ['adapter', '_'], function (t, r) {
          'use strict';
          function a () {
            var r = this;
            t.call(r);
          }
          return r.MH(a, t), a;
        });
        _cD(
          'criteonativebidder-adapter',
          [
            'criteobidder-adapter',
            'nativebidder-adapter',
            'em',
            'plM',
            'mrm',
            'r',
            'pmc',
            'rqc',
            'res',
            '_',
            'ntm',
            'pec',
          ],
          function (e, t, i, o, r, n, s, a, c, l, d, u) {
            'use strict';
            function g () {
              var s = this,
                a = '~',
                c = '_',
                u = '1x1';
              t.call(s),
                e.call(s),
                (this.addCustomEventListener = function (e) {
                  var t = e.getAuction().getPlacement(),
                    i = e.getProviderConfigForSlot().get('szs')[0].get('sz');
                  d.fetchTemplate(t, i);
                }),
                (this.setCustomRequestProperties = function (e, t, r) {
                  var d,
                    g = t.getProviderConfigForSlot().get('crid'),
                    v = s.getSizesAndExternalPlacementCodes(t.getProviderConfigForSlot());
                  try {
                    var f = i.I();
                    l.ZT(f) &&
                      l.gb(f.getSlotData) &&
                      (d = f.getSlotData(t.getProviderConfigForSlot()));
                  } catch (p) {}
                  l.Qe(d) && d.length > 0 && (d = d.join(a));
                  var C = o.getTemplateKeyForNativeSlot(g),
                    m = 1,
                    h = [u, C, m].join(c);
                  e.set(n.Properties.SIZE, h).set(
                    n.Properties.EXT_PLACEMENT_CODE,
                    d || v.epc.join(a)
                  );
                }),
                (this.getDefaultRequestCollection = function (e, t) {
                  if (i.Vm()) return r.getRequestCollection(e, t);
                  var o = 'native' + e + t;
                  return r.getRequestCollection(e, t, o);
                }),
                (this.getCustomRequestCollectionIdentifier = function (e, t) {
                  return i.Vm() ? e + t + 'criteo' : e + t + 'criteonative';
                }),
                (this.addRequestToRequestCollection = function (e, t, i) {
                  t.type(2), t.add(e);
                }),
                (this.addRequestToCollectionWithListener = function (e, t, i) {
                  l.gb(i) && (t.type(2), t.add(e, i));
                }),
                (this.processList = function (e, t, i, o, r) {
                  s.processBidForNativeProvider(e, t, i, o, r);
                });
            }
            return l.MH(g, t), l.MH(g, e), g;
          }
        );
        _cD(
          'nativebidder-adapter',
          [
            window,
            '_',
            'bid',
            'em',
            'ct',
            'adapter',
            'pmc',
            'pec',
            'ntm',
            'rqc',
            'r',
            'plM',
            'res',
            'cc',
            'rsc',
            'bfm',
            'bb',
            'nac',
            'nrc',
          ],
          function (e, t, r, i, o, s, n, a, c, d, g, l, u, p, v, f, P, m, C) {
            'use strict';
            function h () {
              function e (e) {
                var r = e.get('br'),
                  i = e.get('prf');
                return (t.ZT(r) && r === !0) || (t.ZT(i) && i === !0);
              }
              function r () {
                var e;
                try {
                  var r = i.I();
                  t.ZT(r) && t.gb(r.getSlotId) && (e = r.getSlotId());
                } catch (o) {
                  e = null;
                }
                return e;
              }
              function o (e, t) {
                return e.getDefaultResponse(t);
              }
              var n = this,
                a = 'native',
                d = '~',
                u = '1x1',
                p = '_';
              s.call(n),
                (this.addCustomEventListener = function (e) {
                  var t = e.getAuction().getPlacement(),
                    r = e.getProviderConfigForSlot().get('szs')[0].get('sz');
                  c.fetchTemplate(t, r);
                }),
                (this.isCacheParticipant = function (t) {
                  var r = t.getProviderService().getValidBidsStatusPerPlacement([t.getAuction()]),
                    i = t.getAuction().isForceCacheMode();
                  return (i || r[t.getAuction().crid()]) && e(t.getProviderConfigForSlot());
                }),
                (this.getRequestCollectionIdentifier = function (e, t, r) {
                  if (!i.Vm()) return a + r + t;
                }),
                (this.addRequestToRequestCollection = function (e, t, r) {
                  t.type(2), t.add(e);
                }),
                (this.setCustomRequestProperties = function (e, r, o) {
                  var s,
                    a = r.getProviderConfigForSlot().get('crid'),
                    c = n.getSizesAndExternalPlacementCodes(r.getProviderConfigForSlot());
                  try {
                    var v = i.I();
                    t.ZT(v) &&
                      t.gb(v.getSlotData) &&
                      (s = v.getSlotData(r.getProviderConfigForSlot()));
                  } catch (f) {}
                  t.Qe(s) && s.length > 0 && (s = s.join(d));
                  var P = l.getTemplateKeyForNativeSlot(a),
                    m = 1,
                    C = [u, P, m].join(p);
                  e.set(g.Properties.SIZE, C).set(
                    g.Properties.EXT_PLACEMENT_CODE,
                    s || c.epc.join(d)
                  );
                }),
                (this.getExternalPlacementCode = function (e, i) {
                  return t.ZT(e.get('epc')) ? e.get('epc') : r() || i.get('crid');
                }),
                (this.parseEachProviderResponse = function (e, r, o) {
                  var s = e.getProviderConfigForSlot(),
                    a = s.get('crid'),
                    d = s.get('pid'),
                    g = e.getRequestCollection();
                  t.clock.tock('rtbsDataLoadTime' + g.id() + a + d);
                  var u = t.clock.time('rtbsDataLoadTime' + g.id() + a + d),
                    p = o.get('td') || '',
                    v = l.getNativeConfigForSlot(a),
                    f = v.tk;
                  c.checkIfTemplateExists(f) || i.Qc()
                    ? n.processList(o, e, u, p, r)
                    : t.l('templateLoaded', f, t.H(n.processList, [o, e, u, p, r]));
                }),
                (this.processBidForNativeProvider = function (e, r, i, s, a) {
                  var c = r.getProviderConfigForSlot();
                  e = o(e, r);
                  var d,
                    g = r.getRequestCollection(),
                    l = e.get('bidData') || '',
                    u = e.get('ab'),
                    p = c.get('szs')[0].get('sz');
                  d = new P()
                    .create()
                    .setBidType(c)
                    .setBidProperties(c, e, g.getProviderRequestType(), i)
                    .set('dfpSz', p)
                    .set('bd', l)
                    .set('isnat', !0)
                    .set('sz', p)
                    .set('td', n.getTestData(s, u))
                    .build();
                  var v = e.get('adcode'),
                    C = m.parseAdcode(v);
                  if (1 === d.status()) {
                    var h = C.imptrackers,
                      S = e.get('logging_pixels') || [];
                    t.Qe(h) && h.length > 0 && t.UZ(S, h), d.set('lpx', S).set('padc', C);
                  }
                  f.setMaximumBid(d), a(d, r);
                }),
                (this.processList = function (e, t, r, i, o) {
                  n.processBidForNativeProvider(e, t, r, i, o);
                });
            }
            return t.MH(h, s), h;
          }
        );
        _cD(
          'criteobidder-adapter',
          ['rtbsbidder-adapter', 'res', 'mrm', 'ct', 'em', 'cc', '_', 'pmc', 'lm', 'nic', 'drs'],
          function (e, t, i, n, r, u, o, s, c, d, a) {
            'use strict';
            function f () {
              function t () {
                var e = a.isActionApplicable('DISABLE_COOKIESYNC');
                return e || o.ZT(r.lV());
              }
              function u () {
                var e = f();
                if (!o.ZT(e)) return '';
                var i = e.getInfo('rtusid_medianet') || '',
                  n = e.getInfo('rtusidts');
                return t() || s(n) ? i : '';
              }
              function s (e) {
                return !!o.ZT(e) && new Date().getTime() - e < F;
              }
              function f () {
                return void 0 === D && (D = r.require('sm')), D;
              }
              function l (e, t) {
                var i = e.getProviders();
                o.a(i, function (i) {
                  e.rtusUid(i, t);
                }),
                  e.fire();
              }
              function v (e, t, i) {
                i && o.ZT(i.userid) ? l(e, i.userid) : e.fire();
              }
              function g () {
                if (B !== !0) {
                  B = !0;
                  var e = r.VF();
                  (e = e + '?r=2&c=' + H + '&j=' + m()),
                    d.submit(e, { tags: ['rtus', 'misc'], type: 'script' });
                }
              }
              function m () {
                return (window.hbCMBidxc.mnetRtusId = o.H(h, [])), 'window.hbCMBidxc.mnetRtusId';
              }
              function h (e) {
                if (((B = !1), 'OK' !== e.status)) return void T();
                e.userid += '~~15';
                var t = e.userid;
                R(t), C(t), o.WZ('fireCriteoRequests', 'global', !1, e);
              }
              function R (e) {
                if (o.ZT(e)) {
                  var t = f();
                  o.ZT(t) &&
                    (t.setInfo('rtusid_medianet', e), t.setInfo('rtusidts', new Date().getTime()));
                }
              }
              function T () {
                var e = f();
                o.ZT(e) && (e.deleteKey('rtusid_medianet'), e.deleteKey('rtusidts'));
              }
              function C (e) {
                var t = r.kV();
                if (o.ZT(e) && o.ZT(t)) {
                  var i = {
                    vsid: t,
                    name: 'data-c',
                    value: e.split('~~')[0],
                    source: e.split('~~')[1],
                  };
                  c.criteoRtusLog.addNew(i);
                }
              }
              function q (e) {
                e && g();
              }
              function Z (e, t, i, r, u) {
                var o;
                return (o = 'headerBid' === e ? new n(t, i, r, u) : new n(t, i, r));
              }
              function p (e, t) {
                var n = _.getCustomRequestCollectionIdentifier(e, t);
                return i.getRequestCollection(e, t, n);
              }
              function b (e, t, i) {
                var n = _.getDefaultRequestCollection(e, i),
                  r = t.get('pid'),
                  s = u();
                return o.ZT(s) && n.rtusUid(r, s), n;
              }
              function I (e, i, n, s, c) {
                var d,
                  a = o.ZT(r.Zp('crt')),
                  f = !(t() || o.ZT(u())),
                  l = i.get('pid'),
                  v = _.getProviderServiceInstance(n, l, e),
                  g = !a && f;
                q(f), (d = g ? p(e, n) : b(e, i, n));
                var m = Z(e, i, d, v, c),
                  h = _.getRequestObj(m, e, s);
                g
                  ? _.addRequestToCollectionWithListener(h, d, o.H(w, [d]))
                  : _.addRequestToRequestCollection(h, d);
              }
              function w (e) {
                var t = u();
                o.ZT(t) ? l(e, t) : o.l('fireCriteoRequests', 'global', o.H(v, [e]));
              }
              var B,
                D,
                _ = this,
                F = r.j(),
                H = 321;
              e.call(this),
                (this.getDefaultRequestCollection = function (e, t) {
                  return i.getRequestCollection(e, t);
                }),
                (this.getCustomRequestCollectionIdentifier = function (e, t) {
                  return e + t + 'criteo';
                }),
                (this.addPrefetchRequestForSlot = function (e, t) {
                  var i = 'cache';
                  I(i, e, t, _.handleBidsForPrefetch, null);
                }),
                (this.addHbRequestForSlot = function (e, t) {
                  if (e.get('hb') === !0) {
                    var i = 'headerBid',
                      n = t.impressionId();
                    I(i, e, n, _.handleBidsForAuction, t);
                  }
                });
            }
            return o.MH(f, e), f;
          }
        );
        _cD(
          'testbidder-adapter',
          ['defaultbidder-adapter', 'ct', 'res', 'pmc', '_', 'bid', 'plM', 'prc', 'bb'],
          function (t, e, i, n, r, o, a, d, s) {
            'use strict';
            function l () {
              function e (t) {
                var e = t.split('x');
                return (
                  '<!DOCTYPE html><html><head></head><body><style type="text/css">body { text-size-adjust:none; -webkit-text-size-adjust: none; }*{margin:0;padding:0}a{text-decoration:none;outline:none}a:hover{cursor:pointer; text-indent: 0}img{border:none}ul li{list-style:none}.clearfix:after{visibility: hidden;display:block;font-size: 0;content: " ";clear: both;height:0}* html .clearfix{zoom:1} *:first-child+html .clearfix{zoom:1} h1, h2, h3, h4, h5, h6 {font-weight: normal}body{background:#f4f4f4}h3{ font-family: arial; color: #000; font-size: 35px; text-align: center; height: ' +
                  e[1] +
                  'px; line-height: ' +
                  e[1] +
                  'px;}</style><h3>Media.net Creative</h3></body></html>'
                );
              }
              var i = this;
              t.call(i),
                (this.getDefaultBidForPlacement = function (t, n) {
                  var o = t.getProviderConfigForSlot(),
                    d = t.getAuction(),
                    l = d.getPlacement(),
                    c = a.getMaxSizeByPlacement(l).join('x'),
                    h = '15.00';
                  h = r.x(h);
                  var f = new s()
                    .createInternalBid()
                    .status(1)
                    .setEntityProperties(o)
                    .set('adc', e(c))
                    .set('sz', c)
                    .set('cpm', h)
                    .set('dfpBd', h)
                    .set('ogCPM', h)
                    .set('cbdp', '0')
                    .set('dfpSz', c)
                    .set('adj1', 0)
                    .set('adj2', 0)
                    .set('epc', o.get('crid'))
                    .set('pvRqId', n)
                    .build();
                  return i.setDefaultBidProperties(f, t), f;
                });
            }
            return r.MH(l, t), l;
          }
        );
        _cD('defaultbidder-adapter', ['adapter', '_', 'pmc', 'ct', 'res', 'bid', 'lm'], function (
          t,
          e,
          i,
          d,
          n,
          a,
          s
        ) {
          'use strict';
          function r () {
            var i = this,
              n = [];
            t.call(i),
              (this.getStatusForPlacement = function (t, e, n) {
                var a = e.get('pid'),
                  s = n.impressionId(),
                  r = i.getProviderServiceInstance(s, a, 'headerBid');
                i.addBidHeadEventListener(new d(e, null, r, n));
              }),
              (this.handleBidsForAuction = function (t, d, n) {
                if (null !== t) {
                  var a = d.getAuction(),
                    s = d.getProviderService(),
                    r = a.impressionId(),
                    o = t.get('brId');
                  i.setAuctionProperties(t, a),
                    i.updateBidStatus(t, a),
                    (1 !== t.status() && 2 !== t.status() && 7 !== t.status()) ||
                      a.addBidResponse(t),
                    s.addToBidCollection(t, 5 === t.status()),
                    n && e.WZ('endOfResponse', r + '_' + o);
                }
              }),
              (this.isHeaderBiddingEnabled = function (t) {
                return t.get('hb') === !0;
              }),
              (this.addHbRequestForSlot = function (t, a) {
                if (i.isHeaderBiddingEnabled(t)) {
                  var s = a.impressionId(),
                    r = t.get('pid'),
                    o = i.getProviderServiceInstance(s, r, 'headerBid'),
                    u = new d(t, null, o, a);
                  0 === n.length && e.l('apiCallsSent', 'global', i.getBuildBidDataCallback()),
                    n.push(u);
                }
              }),
              (this.getBuildBidDataCallback = function () {
                return e.H(i.buildBidData, [i.handleBidsForAuction]);
              }),
              (this.buildBidData = function (t) {
                for (var d = e.AZ(), a = 0, s = n.length; a < s; a++) {
                  var r = n[a];
                  t(i.getDefaultBidForPlacement(r, d), r, a === n.length - 1);
                }
                n = [];
              }),
              (this.getDefaultBidForPlacement = function (t, e) {}),
              (this.bidRequestParams = function (t) {
                return e.ZT(t) && e.Qe(t) && (n = t), n;
              }),
              (this.isFromCache = function (t) {
                return !1;
              }),
              (this.setDefaultBidProperties = function (t, i) {
                t.set('dt', 'O')
                  .set('di', '')
                  .set('ts', e.Wb())
                  .set('adId', '')
                  .set('adNm', '')
                  .set('lt', 0)
                  .set('bdFor', 'headerBid')
                  .set('bdFrom', 'headerBid')
                  .set('acid', i.getAuction().id())
                  .set('brt', e.Wb())
                  .set('lpx', [])
                  .set('lgid', i.getAuction().logId());
              }),
              (this.errorLogBidParamNotFound = function (t, e) {
                s.errorLogs.addNew({
                  message: 'placementId - ' + e.crid() + ', auctionId - ' + e.logId(),
                  name: t || 'BIDDER_PARAMS_NOT_fOUND',
                });
              });
          }
          return e.MH(r, t), r;
        });
        _cD(
          'adapter',
          [
            '_',
            'cc',
            'pmc',
            'ipsf',
            'res',
            'ct',
            'mrm',
            'pec',
            'bid',
            'bfm',
            'bb',
            'rsc',
            'em',
            'r',
            'prc',
            'macm',
          ],
          function (e, t, i, r, o, s, n, d, a, c, u, g, l, v, h, p) {
            'use strict';
            function f () {
              function t (e, t, i) {
                var r = encodeURI(t),
                  o = encodeURIComponent(t);
                return (
                  (e = e.split(t).join(i)),
                  e.indexOf(r) > -1 && (e = e.split(r).join(i)),
                  e.indexOf(o) > -1 && (e = e.split(o).join(i)),
                  e
                );
              }
              var i = this,
                o = '|';
              (this.getProviderServiceInstance = function (e, t, i) {
                return r.getImpPrvServiceInstance(e, t, i);
              }),
                (this.getSizesAndExternalPlacementCodes = function (t) {
                  var r = { sizes: [], epc: [] },
                    o = t.get('szs');
                  return e.Qe(o) && o.length > 0
                    ? (e.a(o, function (o) {
                        var s = o.get('sz');
                        e.ZT(s) &&
                          (r.sizes.push(o.get('sz')),
                          r.epc.push(i.getExternalPlacementCode(o, t)));
                      }),
                      r)
                    : r;
                }),
                (this.getExternalPlacementCode = function (e, t) {
                  return e.get('epc') || t.get('crid');
                }),
                (this.parseEachProviderResponse = function (t, r, o) {
                  var s = t.getProviderConfigForSlot(),
                    n = s.get('crid'),
                    d = s.get('pid'),
                    a = t.getRequestCollection();
                  e.clock.tock('rtbsDataLoadTime' + a.id() + n + d);
                  var c = e.clock.time('rtbsDataLoadTime' + a.id() + n + d),
                    u = o.get('td') || '';
                  i.processList(o, t, c, u, r);
                }),
                (this.getRequestObj = function (t, r, o) {
                  var s = t.getProviderConfigForSlot(),
                    n = i.getSizesAndExternalPlacementCodes(s),
                    d = new v()
                      .type(r)
                      .setRequestProperties(s, n)
                      .setHandler(e.H(i.parseEachProviderResponse, [t, o]));
                  return i.setCustomRequestProperties(d, t, r), d;
                }),
                (this.setCustomRequestProperties = function (e, t, i) {}),
                (this.setAuctionProperties = function (e, t) {
                  t.setAuctionLevelProperties(e);
                }),
                (this.isFromCache = function (e) {
                  return 'cache' === e.get('bdFrom');
                }),
                (this.updateBidStatus = function (e, t) {
                  var r = i.isFromCache(e);
                  r || e.set('bdFrom', 'headerBid'),
                    t.isClosed() &&
                      (1 === e.status() ? (e.status(5), e.reuseReason(1)) : e.status(6));
                }),
                (this.makeCustomChangesToBidObject = function (t, i) {
                  var r = t.get('brId');
                  if (
                    '139' === r &&
                    (e.gb(i.replaceMacrosInAdCode) && t.set('adc', i.replaceMacrosInAdCode(t)),
                    e.gb(i.overrideBidPropertyFromAdcode))
                  ) {
                    var o = /medianet_crid\s*=\s*"([^"]+)/,
                      s = /cid=([^"]+)/;
                    (t = i.overrideBidPropertyFromAdcode(t, o, 'paId')),
                      (t = i.overrideBidPropertyFromAdcode(t, s, 'pApId'));
                  }
                  return t;
                }),
                (this.handleBidsForAuction = function (e, t) {
                  if (null !== e) {
                    var r = t.getAuction(),
                      o = r && r.id(),
                      s = t.getProviderService(),
                      n = e.get('crid');
                    1 === e.status() && l.WS(n, o, e.get('sbdrid')),
                      i.setAuctionProperties(e, r),
                      i.updateBidStatus(e, r),
                      (e = i.makeCustomChangesToBidObject(e, s)),
                      (1 !== e.status() && 2 !== e.status() && 7 !== e.status()) ||
                        r.addBidResponse(e),
                      s.addToBidCollection(e, 5 === e.status());
                  }
                }),
                (this.handleBidsForPrefetch = function (e, t) {
                  if (null !== e) {
                    var i = t.getProviderService();
                    e.set('rVid', p.resolveMacros('%%VISIT_ID%%')), i.addToBidCollection(e, !0);
                  }
                }),
                (this.processList = function (r, o, s, n, d) {
                  var a = o.getProviderConfigForSlot(),
                    u = a.get('szs');
                  e.a(u, function (a) {
                    var u,
                      g = a.get('sz'),
                      l = r.getProviderResponseForSize(o, g),
                      v = l.get('bidData') || '',
                      h = l.get('ab');
                    u = i
                      .createBidForProviderResponse(l, o, s)
                      .set('td', i.getTestData(n, h))
                      .set('dfpSz', g)
                      .set('bd', v)
                      .set('sz', g);
                    var p = l.get('adcode');
                    1 === u.status() &&
                      e.ZT(p) &&
                      (u.set('adc', t(p, o.getProviderService().config('pm'), u.get('ogCPM'))),
                      i.updateBidProperties(u, o, l)),
                      c.setMaximumBid(u),
                      d(u, o);
                  });
                }),
                (this.createBidForProviderResponse = function (e, t, i) {
                  return new u()
                    .createInternalBid()
                    .setBidProperties(
                      t.getProviderConfigForSlot(),
                      e,
                      t.getRequestCollection().getProviderRequestType(),
                      i
                    )
                    .build();
                }),
                (this.updateBidProperties = function (e, t, i) {}),
                (this.addHbRequestForSlot = function (e, t) {
                  if (e.get('hb') === !0) {
                    var r = 'headerBid',
                      o = t.impressionId(),
                      d = n.getRequestCollection(r, o, i.getRequestCollectionIdentifier(e, o, r)),
                      a = i.getProviderServiceInstance(o, e.get('pid'), r),
                      c = new s(e, d, a, t),
                      u = i.getRequestObj(c, r, i.handleBidsForAuction);
                    d.addAuction(t),
                      i.addAdditionalParamInRequestCollection(d, e, t),
                      i.addRequestToRequestCollection(u, d, r);
                  }
                }),
                (this.addAdditionalParamInRequestCollection = function (e, t, i) {}),
                (this.isCacheParticipant = function (e) {
                  var t = e.getProviderService().getValidBidsStatusPerPlacement([e.getAuction()]),
                    i = e.getAuction().isForceCacheMode();
                  return i || t[e.getAuction().crid()];
                }),
                (this.addBidHeadEventListener = function (t) {
                  e.l(
                    'bid::head',
                    t.getAuction().id(),
                    e.H(i.addHbRequestForSlot, [t.getProviderConfigForSlot(), t.getAuction()])
                  );
                }),
                (this.addBidCacheEventListener = function (t) {
                  e.l(
                    'bid::cache',
                    t.getAuction().id(),
                    e.H(t.getProviderService().useBidsForProvider, [
                      i.handleBidsForAuction,
                      [t.getProviderConfigForSlot()],
                      t,
                    ])
                  );
                }),
                (this.getStatusForPlacement = function (e, t, r) {
                  var o = t.get('pid'),
                    n = r.impressionId(),
                    d = i.getProviderServiceInstance(n, o, 'headerBid'),
                    a = new s(t, null, d, r);
                  i.isCacheParticipant(a)
                    ? i.addBidCacheEventListener(a)
                    : i.addBidHeadEventListener(a),
                    i.addCustomEventListener(a);
                }),
                (this.addCustomEventListener = function (e) {}),
                (this.addPrefetchRequestForSlot = function (e, t) {
                  var r = 'cache',
                    o = n.getRequestCollection(r, t, i.getRequestCollectionIdentifier(e, t, r)),
                    d = i.getProviderServiceInstance(t, e.get('pid'), r),
                    a = new s(e, o, d),
                    c = i.getRequestObj(a, r, i.handleBidsForPrefetch);
                  i.addRequestToRequestCollection(c, o, r);
                }),
                (this.getRequestCollectionIdentifier = function (e, t, i) {}),
                (this.addRequestToRequestCollection = function (e, t, i) {
                  t.add(e);
                }),
                (this.addRequestToCollectionWithListener = function (t, i, r) {
                  e.gb(r) && i.add(t, r);
                }),
                (this.getTestData = function (t, r) {
                  var s = '';
                  return (
                    e.ZT(t) && (s += t),
                    e.ZT(r) && (s = s + o + 'ab=' + r),
                    s + i.getCustomTestData()
                  );
                }),
                (this.getTestDataDelimiter = function () {
                  return o;
                }),
                (this.getCustomTestData = function () {
                  return '';
                });
            }
            return f;
          }
        );
        _cD(
          'clientsideadapter',
          [
            'ct',
            'prc',
            'pmc',
            'pec',
            'res',
            '_',
            'bid',
            't',
            'em',
            'bp',
            'prM',
            'bb',
            'adapter',
            'macm',
          ],
          function (e, t, r, i, s, n, d, a, o, c, u, g, l, f) {
            'use strict';
            function h () {
              function t (e, t, r, i, s) {
                var d = r.getProviderConfigForSlot(),
                  a = d.get('szs'),
                  o = r.getProviderService();
                s = s || a[0].get('sz');
                var c = h(s, a);
                return new g()
                  .create()
                  .setBidType(d)
                  .status(i)
                  .setEntityProperties(d)
                  .set('brt', new Date().getTime())
                  .set('bdFor', e)
                  .set('dfpSz', s)
                  .set('ebt', o.config('bidder'))
                  .set('epc', c)
                  .set('paId', c)
                  .set('pvRqId', t)
                  .set('sz', s)
                  .set('ts', n.Wb())
                  .build();
              }
              function r (e) {
                n.l(
                  'apiCallsSent',
                  'global',
                  n.H(p.getBidsFromAPI, [e, 'headerBid', p.handleBidsForAuction])
                );
              }
              function i (e, t, i) {
                var s = e + t;
                (v[s] = v[s] || []),
                  P[s] ||
                    ('headerBid' === e ? r(s) : 'cache' === e && p.addPrefetchEvent(s, t),
                    (P[s] = !0)),
                  v[s].push(i);
              }
              function s (t, r, s, n) {
                var d = p.getProviderServiceInstance(s, r.get('pid'), t),
                  a = new e(r, null, d, n);
                i(t, s, a);
              }
              function d (e) {
                var t = e.get('szs');
                return n.Qe(t) && t.length > 0 && n.ZT(t[0].get('sz')) && n.ZT(t[0].get('epc'));
              }
              function h (e, t) {
                return (
                  n.W(t, function (t) {
                    var r = t.get('sz');
                    if (r === e) return t.get('epc');
                  }) || t[0].epc
                );
              }
              var p = this,
                v = {},
                P = {};
              l.call(p),
                (this.handleBidsForPrefetch = function (e, t, r, i) {
                  if (null !== t) {
                    var s = r.getProviderService(),
                      d = t.get('brId');
                    t
                      .set('bdFor', 'cache')
                      .set('impId', e)
                      .set('rVid', f.resolveMacros('%%VISIT_ID%%')),
                      s.addToBidCollection(t, !0),
                      i && n.WZ('endOfResponse', e + '_' + d);
                  }
                }),
                (this.addBidToProviderService = function (e, t) {
                  var r = e.getProviderService();
                  r.addToBidCollection(t, 5 === t.status());
                }),
                (this.handleBidsForAuction = function (e, t, r) {
                  if (null !== e) {
                    var i = t.getAuction(),
                      s = e.get('brId'),
                      d = i.impressionId();
                    p.setAuctionProperties(e, i),
                      p.updateBidStatus(e, i),
                      (1 !== e.status() && 2 !== e.status() && 7 !== e.status()) ||
                        i.addBidResponse(e),
                      p.addBidToProviderService(t, e),
                      r && n.WZ('endOfResponse', d + '_' + s);
                  }
                }),
                (this.setCustomTargets = function (e, t, r) {}),
                (this.getThirdPartyTargets = function (e, t) {
                  var r = new a(),
                    i = e.getProviderConfigForSlot(),
                    s = i.get('pid'),
                    d = u.getTargetingKeysById(s);
                  if (1 === t.status()) {
                    var c = i.get('szs'),
                      g = i.get('crid'),
                      l = t.get('dfpBd'),
                      f = t.get('sz') || c[0].get('sz'),
                      v = h(f, c);
                    r
                      .set(d.bid, l)
                      .set(d.dealType, t.get('dt') || 'O')
                      .set(d.epc, v)
                      .set(d.ltime, t.get('lt'))
                      .set(d.size, f)
                      .set('mnetCID', o.kl())
                      .set('mnetSize', f)
                      .set('mnet_placement', g),
                      o.Zb(s) && r.set(d.test, 1),
                      n.ZT(t.get('di')) && r.set(d.dealId, t.get('di')),
                      p.setCustomTargets(r, d, t);
                  } else o.Rz() && n.ZT(d.nbf) && r.set(d.nbf, '1');
                  return r.serialize();
                }),
                (this.getNoOrErrorBidData = function (e, r, i, s, n) {
                  var d = t(e, r, i, s, n);
                  return d.set('adc', ''), d;
                }),
                (this.addErrorResponses = function (e, t, r) {
                  var i = e.length,
                    s = n.AZ();
                  n.a(e, function (e, n) {
                    var d = p.getNoOrErrorBidData(t, s, e, 7);
                    r(d, e, i - n === 1);
                  });
                }),
                (this.setBidPriceProperties = function (e, t, r) {
                  var i = r.get('dt'),
                    s = t.get('pid').toString(),
                    n = { adUnitParam: t, dealType: i, ogbdp: e || '0', providerId: s };
                  return (r = c.setPriceProperties(r, n));
                }),
                (this.getCachingFlag = function (e, t, r) {
                  return !('P' === r && !o.UZ(t)) && 'cache' === e;
                }),
                (this.getSuccessBid = function (e, r, i, s) {
                  var n = t(e, r, i, 1, s),
                    d = i.getProviderService();
                  return n.set('adUrl', d.config('adn')), n;
                }),
                (this.getBidValidityAndCpm = function (e, t) {
                  var r = { valid: !1, cpm: 0 };
                  if (!n.ZT(e)) return r;
                  var i = t ? parseFloat(e || 0) / 100 : parseFloat(e || 0);
                  return i <= 0 ? r : ((r.valid = !0), (r.cpm = n.x(i)), r);
                }),
                (this.getBidsFromAPI = function (e, t, r) {}),
                (this.addPrefetchEvent = function (e, t) {
                  n.l(
                    'prefetch',
                    'global',
                    n.H(p.getBidsFromAPI, [e, 'cache', n.H(p.handleBidsForPrefetch, [t])])
                  );
                }),
                (this.getBidRequestParams = function (e) {
                  return v[e];
                }),
                (this.isHeaderBiddingEnabled = function (e) {
                  var t = e.get('hb');
                  return t === !0 && d(e);
                }),
                (this.addHbRequestForSlot = function (e, t) {
                  p.isHeaderBiddingEnabled(e) && s('headerBid', e, t.impressionId(), t);
                }),
                (this.isPrefetchEnabled = function (e) {
                  var t = e.get('prf');
                  return t === !0 && d(e);
                }),
                (this.addPrefetchRequestForSlot = function (e, t) {
                  p.isPrefetchEnabled(e) && s('cache', e, t, null);
                }),
                (this.getBidTTL = function (e, t) {
                  var r = e.get('ts') || n.Wb();
                  return r + 1000 * t;
                });
            }
            return n.MH(h, l), h;
          }
        );
        _cD(
          'nullbidder-adapter',
          [window, '_', 'bid', 'auc', 'em', 'bm', 'plM', 'plc', 'res', 'cc', 'bb'],
          function (e, t, i, r, d, s, n, b, c, a, l) {
            'use strict';
            function u (e) {
              var i = e.getPlacement(),
                r = e.get('hasAnyWinBid') ? '1' : '0',
                d = new l()
                  .create()
                  .setPlacementSpecificBidProperties(i.id())
                  .status(1)
                  .set('sz', i.get('szs')[0].join('x'))
                  .set('brId', o.prvid)
                  .set('brNm', o.bidder)
                  .set('tc', '0')
                  .set('iwb', r)
                  .set('bdFor', 'headerBid')
                  .set('bdFrom', 'headerBid')
                  .set('ts', t.Wb())
                  .set('brt', new Date().getTime())
                  .build();
              return (d = e.setAuctionLevelProperties(d));
            }
            var o = { prvid: '0', bidder: 'nullbidder' };
            return { getNullBidByAdUnit: u };
          }
        );
        _cD('nrc', function () {
          'use strict';
          return {
            LINK: {},
            TITLE: {},
            IMAGE: {},
            IMPRESSION_TRACKERS: {},
            JS_TRACKER: {},
            VIDEO: {},
            DESCRIPTION: {},
            SPONSORED: {},
            COMMON: {},
          };
        });
        _cD('nr', ['cc', '_', 'bid', 'em', 'plM'], function (e, t, n, i, s) {
          'use strict';
          function c (e) {
            var n = t.TE('@iframe'),
              i = t.W(n, function (t) {
                if (t.contentWindow === e) return t.id;
              });
            return t.TE('#' + i);
          }
          function r (e) {
            var n;
            (n = t.bh(e) ? c(e) : e.frameElement),
              t.ZT(n) &&
                ((n.width = '100%'),
                (n.height = '100%'),
                (n.style.cssText = n.style.cssText || ''),
                (n.style.cssText = n.style.cssText + 'width: 100%; height: 100%;'));
          }
          function h (e, t) {
            s.isResponsive(t.get('crid')) && (i.hR() && r(e.parent), r(e));
          }
          return { handleNativeRendering: h };
        });
        _cD('ntm', [window, '_', 'em', 'plM', 'nac', 'plc', 'nrc', 'res', 'cc', 'nic'], function (
          n,
          t,
          e,
          o,
          a,
          r,
          i,
          s,
          c,
          u
        ) {
          'use strict';
          function d (n, e) {
            function o () {
              return (g.adComponents.cta && g.adComponents.cta.value) || '';
            }
            function a () {
              return (g.adComponents.desc && g.adComponents.desc.value) || '';
            }
            function r () {
              return (g.adComponents.desc2 && g.adComponents.desc2.value) || '';
            }
            function i () {
              return (g.adComponents.spons && g.adComponents.spons.value) || '';
            }
            function s () {
              return g.adComponents.privacy || '';
            }
            function c () {
              return (g.adComponents.img && g.adComponents.img.url) || '';
            }
            function u () {
              return (g.adComponents.icon && g.adComponents.icon.url) || T;
            }
            function d () {
              return (g.adComponents.img && g.adComponents.img.w) || 0;
            }
            function p () {
              return (g.adComponents.img && g.adComponents.img.h) || 0;
            }
            function m () {
              return (g.adComponents.title && g.adComponents.title.text) || '';
            }
            function l () {
              return (g.adComponents.link && g.adComponents.link.url) || '';
            }
            function f () {
              return (g.adComponents.price && g.adComponents.price.value) || '';
            }
            function C () {
              return (g.adComponents.displayurl && g.adComponents.displayurl.value) || '';
            }
            (this.templateString = n), (this.adComponents = e);
            var g = this,
              v = {
                ad_desc: a,
                ad_secdesc: r,
                ad_cta: o,
                ad_image: c,
                ad_icon: u,
                ad_choices: s,
                ad_title: m,
                ad_href: l,
                ad_price: f,
                ad_display_url: C,
                image_width: d,
                image_height: p,
                adv_name: i,
              };
            (this.getImage = c),
              (this.parseTemplate = function () {
                var n = /{{([A-Za-z_]+)(_([0-9]+))?}}/g;
                return this.templateString.replace(n, function (n, e, o) {
                  var a = v[e];
                  return t.gb(a) ? a() : '';
                });
              });
          }
          function p (n) {
            return o.getTemplateKeyForNativeSlot(n);
          }
          function m (t) {
            return n[t] || '';
          }
          function l (n, t) {
            var e = {},
              o = new d(n, t);
            return (
              (e.adcode = o.parseTemplate()), (e.image = t.img), (e.jstracker = t.jstracker), e
            );
          }
          function f (n, e) {
            var o = a.parseAdcode(e);
            if (t.i(o)) return '';
            var r = m(p(n));
            return l(r, o);
          }
          function C (n) {
            return k[n] === !0;
          }
          function g (e) {
            return t.ZT(n[e]) || Z[e] === !0;
          }
          function v (n) {
            (Z[n] = !0), t.WZ('templateLoaded', n);
          }
          function _ (n, o) {
            if (t.ZT(n) && t.ZT(o) && t.ZT(h)) {
              var a = n.get('nat');
              if (t.ZT(a)) {
                var r = a.tk,
                  i = a.tv || 1;
                if ((e.lN() && t.ZT(e.UG()) && (r = e.UG()), t.ZT(r) && !g(r) && !C(r))) {
                  var s = {};
                  (s.tpkey = r),
                    (s.size = o),
                    (s.v = i),
                    t.ZT(a.nat) && (s.nat = a.nat),
                    'https' === e.wb() && (s.https = 1);
                  var c = '?' + t.J(s),
                    d = h + c;
                  k[r] = !0;
                  var p = t.H(v, [r]);
                  u.submit(d, { tags: ['tmp', 'scr', 'misc'], type: 'script' }, p);
                }
              }
            }
          }
          var h = e.mc(),
            T = e.FW() + '/404_1x1.png',
            Z = {},
            k = {};
          return { fetchTemplate: _, checkIfTemplateExists: g, getAdcodeAndResourcesForSlot: f };
        });
        _cD('nac', [window, '_', 'nrc'], function (n, t, i) {
          'use strict';
          function c (n, i) {
            return !t.ZT(n) || !t.ZT(i) || n === i;
          }
          function a (n, t, i, a, r) {
            t.hasOwnProperty(i) && c(t.id, r) && (n[a] = t[i]);
          }
          function r (n, t) {
            a(n, t, 'link', 'link');
          }
          function o (n, t) {
            a(n, t, 'imptrackers', 'imptrackers');
          }
          function e (n, t) {
            a(n, t, 'jstracker', 'jstracker');
          }
          function u (n, t) {
            a(n, t, 'privacy', 'privacy');
          }
          function f (n, t) {
            a(n, t, 'title', 'title', 601);
          }
          function s (n, t) {
            a(n, t, 'img', 'img', 401);
          }
          function d (n, t) {
            a(n, t, 'img', 'icon', 402);
          }
          function p (n, t) {
            a(n, t, 'video', 'video');
          }
          function v (n, t) {
            a(n, t, 'data', 'desc', 502);
          }
          function l (n, t) {
            a(n, t, 'data', 'desc2', 510);
          }
          function k (n, t) {
            a(n, t, 'data', 'cta', 512);
          }
          function m (n, t) {
            a(n, t, 'data', 'spons', 501);
          }
          function g (n, t) {
            a(n, t, 'data', 'price', 506);
          }
          function y (n, t) {
            a(n, t, 'data', 'displayurl', 511);
          }
          function T (n, i) {
            var c = i.assets;
            t.Qe(c) &&
              0 !== c.length &&
              t.a(c, function (t) {
                f(n, t),
                  s(n, t),
                  d(n, t),
                  r(n, t),
                  p(n, t),
                  v(n, t),
                  l(n, t),
                  k(n, t),
                  m(n, t),
                  g(n, t),
                  y(n, t);
              });
          }
          function Z (n) {
            if (!t.ZT(n) || !t.O()) return {};
            var i = JSON.parse(n),
              c = {};
            return (
              t.ZT(i['native']) && !t.i('native') && (i = i['native']),
              r(c, i),
              o(c, i),
              u(c, i),
              T(c, i),
              e(c, i),
              c
            );
          }
          return { parseAdcode: Z };
        });
        _cD('nhps', [window, '_', 'config', 'mnrp', 'em', 'bid', 'mhps', 'ntm', 'nrc'], function (
          e,
          r,
          n,
          c,
          d,
          t,
          a,
          i,
          o
        ) {
          'use strict';
          function u () {
            function e (e, n) {
              var c = e > n ? e / n : n / e;
              return r.gZ(c, 1);
            }
            function n (e, r) {
              var n = e.adcode;
              1 === r && (e.adcode = n.replace('<body', '<body class="case2"'));
            }
            function t (c) {
              var d = c.image;
              if (r.ZT(d)) {
                var t = d.w,
                  a = d.h;
                if (r.ZT(t) && r.ZT(a)) {
                  var i = e(t, a);
                  n(c, i);
                }
              }
            }
            function o (e) {
              var n = e.jstracker;
              r.ZT(n) && (e.adcode += n);
            }
            a.call(this);
            var u = this;
            (this.updateAdCode = function (e) {
              var r = e.get('adc'),
                n = e.get('crid'),
                c = i.getAdcodeAndResourcesForSlot(n, r);
              o(c), t(c), e.set('adc', c.adcode);
            }),
              (this.renderAd = function (e, r) {
                u.updateAdCode(r);
                var n = d.require('hb-renderer');
                return c.execSafe(
                  function (e, r) {
                    return n.renderGeneric(e, r);
                  },
                  e,
                  r
                );
              });
          }
          return r.MH(u, a), u;
        });
        _cD('npser', ['_', 'nhps', 'ppser'], function (n, s, t) {
          'use strict';
          function c () {
            s.call(this), t.call(this);
          }
          return n.MH(c, s), n.MH(c, t), c;
        });
        _cD(
          'init',
          ['mnrp', '_', 'em', 'bm', 'am', 'q', 'res', 'gdm', 'brs', 'prs', 'cs', 'ic'],
          function (i, e, n, d, c, t, r, o, s, w, a, b) {
            'use strict';
            function h () {
              (window.hbCMBidxc.exec = new t(window.hbCMBidxc.exec)),
                n.VG() || (window.hbCMBidxc.cmd = new t(window.hbCMBidxc.cmd));
            }
            function l () {
              var i = n.Gb();
              return e.ZT(i) && i > 0;
            }
            function x (i) {
              n.Qc() && n.QT(i), e.clock.start();
            }
            function C (i) {
              if (!C.executedOnce) {
                (C.executedOnce = !0), x(i), h(), o.init();
                var d = n.require('abt');
                e.ZT(d) && e.gb(d.init) && d.init(),
                  n.I(),
                  n.require('apugv'),
                  e.WZ('bootstrap', 'global'),
                  (window.hbCMBidxc.bidexchangeLoaded = !0),
                  n.Aa(),
                  e.clock.tick('init');
                var c = n.require('dsc');
                if ((c && c.updateAndIntersectSizes(), l())) {
                  var t = n.Gb();
                  setTimeout(b.init, t);
                } else b.init();
                a.enableHistoryState();
              }
            }
            function u (i) {
              if (e.ZT(i) && e.Qe(i) && 0 !== i.length) {
                e.WZ('all:reset', 'command', !0);
                var n = [];
                e.a(i, function (i) {
                  n.push(i.crid());
                }),
                  s.callForBids(i),
                  s.callForPrefetchBids(n),
                  w.triggerPrefetch(!1, !0);
              }
            }
            function B () {
              e.ZT(m) &&
                ((window.hbCMBidxc.deliverImpression = e.Wa(
                  m.deliverImpression,
                  window.hbCMBidxc
                )),
                (window.hbCMBidxc.renderExternal = e.Wa(
                  m.showExternalAdsRequestHandler,
                  window.hbCMBidxc
                )),
                (window.hbCMBidxc.renderAd = e.Wa(m.showAdsRequestHandler, window.hbCMBidxc)));
            }
            function M () {
              var i = n.require('ccmg');
              e.ZT(i)
                ? (window.hbCMBidxc.limitDataProcessing = e.Wa(
                    i.limitDataProcessing,
                    window.hbCMBidxc
                  ))
                : (window.hbCMBidxc.limitDataProcessing = function () {});
            }
            var m = n.require('rendermanager'),
              f = n.require('hb-renderer');
            return (
              B(),
              M(),
              (window.hbCMBidxc.setGDPRApplicable = o.getCallback(
                n.setGDPRApplicable,
                window.hbCMBidxc
              )),
              (window.hbCMBidxc.setGDPRConsent = o.getCallback(
                n.setGDPRConsent,
                window.hbCMBidxc
              )),
              (window.hbCMBidxc.consentExists = o.getCallback(n.MH, window.hbCMBidxc)),
              (window.hbCMBidxc.renderSuccess =
                e.ZT(f) && e.Wa(f.renderSuccess, window.hbCMBidxc)),
              (window.hbCMBidxc.refresh = e.Wa(u, window.hbCMBidxc)),
              (window.hbCMBidxc.getBidsForSlots = e.Wa(s.getBidsForSlots, window.hbCMBidxc)),
              { init: C }
            );
          }
        ),
          window._cR(['mnrp', '_', 'config', 'init', 'cc', 'em'], function (i, e, n, d, c, t) {
            'use strict';
            i.setType(t.lB()),
              i.setCodeVersion(t.pN()),
              i.setServerName(t.Zt()),
              t.Qc()
                ? (window.hbCMBidxc.initialiseAdapter =
                    window.hbCMBidxc.initialiseAdapter || d.init)
                : 1 === n.features.seo
                ? setTimeout(e.H(d.init, [], d), 0)
                : d.init();
          });
      } catch (err) {
        window.hbCMBidxc.error = err;
        window.hbCMBidxc.catchConstants = {
          name: 'hbCMBidexchange',
          type: 'HB-CM',
          svr: '2020112510_76',
          servname: 'hbcm_na',
          message: 'hbCMBidexchange encountered an error',
          path: '/nerrping.php',
          customerId: '8HBEYK367',
          hostName: 'https://hblg.media.net',
          get: { userAgent: 'userAgent', requrl: 'requrl', cid: 'cid', img: 'img', d: 'd' },
        };
        !(function (e, r) {
          'use strict';
          (r = r || {}), (r.get = r.get || {}), (e = e || {});
          var a = {},
            o = '',
            t = encodeURIComponent(window.navigator.userAgent);
          o = e.stack ? e.stack : e.s ? e.s : e.stacktrace ? e.stacktrace : 'No StackTrace';
          var n = '';
          for (var s in e)
            e.hasOwnProperty && e.hasOwnProperty(s) && (n += s + " : '" + e[s] + "',");
          (a.logLevel = 3),
            (a.errorVal = {}),
            (a.errorVal.name = r.name),
            (a.errorVal.type = r.type),
            (a.errorVal.svr = r.svr),
            (a.errorVal.servname = r.servname),
            (a.errorVal.message = r.message),
            (a.errorVal.stack = o),
            (a.errorVal.objTrace = n);
          var c = '';
          (c =
            'object' == typeof JSON && 'undefined' != typeof JSON.stringify
              ? JSON.stringify(a)
              : a.errorVal.name + '@#@' + a.errorVal.type + '@#@' + o + '@#@' + n),
            (c = encodeURIComponent('[' + c + ']'));
          var g =
              r.hostName +
              r.path +
              '?' +
              r.get.userAgent +
              '=' +
              t +
              '&' +
              r.get.requrl +
              '=' +
              encodeURIComponent(window.location.href) +
              '&' +
              r.get.cid +
              '=' +
              r.customerId +
              '&' +
              r.get.img +
              '=logo.gif&' +
              r.get.d +
              '=' +
              c,
            i = new Image();
          i.src = g;
        })(window.hbCMBidxc.error, window.hbCMBidxc.catchConstants);
      }
    } catch (e) {}
    if (typeof _mNDetails == 'undefined') {
      _mNDetails = {};
      _mNDetails['idf'] = [];
      _mNDetails['locHash'] = {};
      _mNDetails['adTgC'] = [];
      _mNDetails['upk'] =
        Math.round(new Date().getTime() / 1000) + '.' + Math.floor(Math.random() * 30000 + 1);
      _mNDetails.beaconsQueue = [];
    }
    _mNDetails.depCtr = 11;
    _mNDetails.modArr = [
      'AD_PREFERENCE',
      'CUSTOM_EVENTS',
      'NEW_VIMP',
      'SLOT-LOADER',
      'DFPV2',
      'RTBS_HB',
      'ABP',
      'OVERLAY_ADS',
      'CONT_EXTRACTION',
      'SCROLL_TO_TEXT',
    ];
    _mNDetails.privArr = ['mnet-gdpr', 'mnet-usp'];
    var $___var_cf77600a4e39fbbe = {
      _prid: '8PRVV7640',
      _cid: '8CUR875GP',
      _cpcd: 'kZCzAPOzWPEmz42QWY9eqg==',
      _crid: '',
      _size: '',
      _pid: '',
      _tpid: '',
      _rcf: '',
      _msEnN: '',
      _movOnN: '',
      _lper: { '428811656': 50, '630718267': 50, '703358654': 50 },
      _sizemovl: { df: '320x50', ipad: '728x90' },
      _rUrl: '',
      _rfUrl: '',
      _hint: '',
      _ctxid: '',
      _ctxcat: '',
      _verId: '9121199',
      _fd: '',
      _kurl: '',
      _oref: '',
      _optout: '',
      _apkurl: '',
      _hbSet: [],
      _adPrvLogCnf: [],
      _skrf: [],
      _sksc: [],
      _limgBeac: true,
      _slunion: '',
      _popUrl: 'https://lg3.media.net/log?logid=kfk&evtid=popup',
      _upst: false,
      _oHst: '',
      _L2Hun: '630718267,703358654,428811656',
      _L2HunHe: '630718267',
      _L2CusHe: { '630718267': '0' },
      _vT: 500,
      _uBRxs: ['KINDLE'],
      _https: '1',
      _eNS: '3',
      _dcSplit: { G: '100' },
      _cfo: [],
      _cntDetConf: { parents: 2 },
      _lw: 1,
      _tagV2e: '803288796/fcmain.js',
      _rtbsC: { YBNCABID: ['1', '4', '9', '7', '6', '92', '132', '223'] },
      _dpid: '8PONM1LB0',
      _msnAbv: '1',
      _sfd: [],
      _aatf: [],
      _enPop: '',
      _tagFlip: '',
      _domAbpDetect: true,
      _cPNot: [],
      _ovCon: {
        '703358654': {
          position: 'left',
          dockerType: 'custom',
          defaultCss: 'bottom:15px;left:20px;right:20px;',
          placeholderCss:
            'box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 40px 0px;border-radius: 3px; overflow: hidden;',
          closeButtonSupported: true,
          closeCss:
            "position: absolute; width: 20px; height: 20px; right: 0; top: -10px; color: #fff; border-radius: 50%; line-height: 16px; cursor: pointer; z-index: 999; background: #000 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAQZJREFUOBGtlc0NwjAMhSsEkzARB/Zpr+zBnXWQYIoOUPxFseWkDkUllp7i+OfFSdx0GGI5ifkquAuegjkDHRs+Yn6Si0S9BMsGiCG2KQfx3ARbRLWfHHJXsodMyckthNLVuXe07XO4xZmN47iA1iINPxzporixIpkEJCL95hMeuFIbFIQsECVGNmIdaKnUZ95ouifwuiOw2GyjT1PT1g6bK1HrCCryOewfVvlHKNMq8rpWx+h1H1Ppacsc5IowIohsVW66lK5tc5QVHoK34CwwmaZpkIpsrkpkyz444ErS9dNT0q6PA6Tdny+tlO0Xj4XMV12QY+yF0eTWyKvB7dMG9NbPv4AP48JwKkETwWIAAAAASUVORK5CYII=') center no-repeat;",
        },
      },
      _slab: [],
      _dyApi: 'https://contextual.media.net/dtp.js?',
      _ifrT: 'TOPICS FOR YOU',
      _aScCW: [],
      _dUrl: 'https://contextual.media.net',
      _lHst: 'https://lg3.media.net',
      _flping: 'https://lg3.media.net/flping.php?pid=8PONM1LB0&prid=8PRVV7640',
      _kbbh: 'https://contextual.media.net',
      _bhkh: 'https://contextual.media.net',
      _hthChkURL: 'https://lg3.media.net/bping.php?',
      _vlog: 'https://lg3.media.net/bqi.php',
      _abh: 'https://s.mnet-ad.net',
      _yso: false,
      _y: false,
      _nb: true,
      _dVImp: '',
      _dL1Imp: '',
      _staticFo: false,
      _jtags: '',
      _l2fper: [],
      _natpt: 41,
      _intActDockTg: '703358654',
      _anc: { '703358654': { force: '1' }, '428811656': { force: '1' } },
      _im: [],
      _ccTVal: 2000,
      _mNVisitIdData: '75.80.55.156',
      _mNVsid: 'DefVid',
      _ip2c: 'US',
      _ip2sc: 'CA',
      viewid: '1606443969',
      _dma: '825',
      _ip2allsc: 'CA',
      _mxnf: '0',
      _asn: '20001',
      _l1HcSd: 'l1!A31|7866',
      _uAk:
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
      _aRcl: '1606443969111617680',
      _acid: '',
      _chid: '',
      _chnm: '',
      _prules: {
        csync: ['GDPR'],
        ext: ['GDPR', 'USP-2'],
        spam: ['GDPR'],
        adprefc: [],
        ranative: ['GDPR'],
        vsid: ['GDPR', 'USP-2'],
        hvsid: ['GDPR', 'USP-2'],
        flip: ['GDPR'],
      },
      _dcfp: { GDPR: 1, USP: 1 },
      _gdpr: '0',
      _uspst: '2',
      _usp: '1',
      _usps: 'r',
      _slot: 1,
      _trgl: 1,
    };
    _mN = $___var_cf77600a4e39fbbe;
    _mN._mNRP = _mNDetails._mNRP || {};
    _mN._mNVI = _mNDetails._mNVI || {};
    _mN._custom = {};
    var $___var_db71e6a5a9d0a8fc = {
      _sRcl: '1606440527161098771',
      _wsip: '2886780939',
      _hbReqId: 'T1606440528C8S5U383',
    };
    _mNSrv = $___var_db71e6a5a9d0a8fc;
    _mN._foSettings = {
      REASON: {
        CUSTOMER_SUSPENDED: '0',
        WINDOW_PROTOCOL_CONFLICT: 34,
        INCORRECT_IMPLEMENTATION_OF_ADTAG: 48,
        FORCED_HIDE_BLOCK: 32,
        UA_BLOCKED: 50,
        MNET_OPTOUT: 51,
        CLOSE_AD_PREFERENCE: 56,
        RTBS_FAILOVER_BIDDER_ID: 58,
        HIDE_MOBILE_OVERLAY: 24,
        MOBILE_OVERLAY_ALREADY_PRESENT: 42,
        NON_TIER_1_COUNTRY: 9,
        INTERSCROLLER_NON_MOBILE_UGD: 62,
        TCF_NO_LEGITIMATE_INTEREST: 63,
        DUPLICATE_SLOT: 64,
      },
      ACTION: { ABORT_L2_LOAD: 16, STATUS_QUO: '0', HIDE_BLOCK: 4, ABORT_RENDERING: 20 },
    };
    _mN._mNRPConfig = { lurl: 'https://lg3.media.net/nerrping.php' };
    _mN._checkSync = {
      syncUrl: 'https://contextual.media.net/checksync.php',
      visSync: '1',
      cs: '2',
      cv: '31',
    };
    _mN._rtbs = {
      _sCck: false,
      _sizeMaps: {},
      _BCCMaps: {},
      _gblBCC: '',
      _timeout: '800',
      _minBid: '',
      _minBidEt: { '428811656': '1.35' },
      _disPrct: { '8CUR875GP': 0 },
      _adTags: { '428811656': '579433412' },
      _infTags: '',
      _fObId: '7',
      _ybncaAbId: '4',
      _ybncaMbId: '9',
      _tObId: '6',
      _ybncabId: '|1|4|9|7|6|92|132|223|',
      _dfpBsBid: '153',
      _bsSBid: '98',
      _bsVar: 98,
      _fbbId: '40',
      _oxbGrp: '|11|',
      _logurl: 'https://lg3.media.net/rtblog.php',
      _fdfpwp: '',
      _dfp: true,
      _dfpAdTags: '',
      _dfpAdTagsEt: { '428811656': 0 },
      _dpid: '8PONM1LB0',
      _dfpTagContent:
        '<!DOCTYPE html><html><head><script type="text/javascript">var iframeId="{{GOOGLE_IFRAME_ID}}",dyncId="{{MNET_DYNAMIC_ID}}",requrl="{{MNET_REQURL}}",tfcd="{{CHILD_DIRECTED_TREATMENT}}",isLogEventSwitched=!1;function loadGpt(){var e=document.createElement("script");e.async=!0,e.type="text/javascript";var t="https:"===document.location.protocol;e.src=(t?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(e,i)}function createDivElement(e){var t=document.createElement("div");t.id=e,document.body.appendChild(t)}function dfpCallback(e){var t=e&&!0===e.isEmpty;if(!t||isLogEventSwitched){if(t&&window.parent._mNDetails.checkAndHideAdxFrame(window.medianet_tagid),e.size&&e.size[0]&&e.size[1]){var i=window.parent.document.getElementById(iframeId);i&&(i.width=e.size[0],i.height=e.size[1])}isLogEventSwitched||callLog()}else window._mNDetails.show(window.medianet_tagid,window)}function callLog(){try{if(!window.mnet_triggered){for(var e,t,i=document.getElementById(window.google_placeholder).getElementsByTagName("iframe"),n=i.length;n--;)if("hidden"!==i[n].style.visibility&&"none"!==i[n].style.display){if(i[n].src&&-1!==i[n].src.toLowerCase().indexOf("googlesyndication.com"))return window.parent._mNDetails.logAdX(window.medianet_tagid,window);if((t=(e=parent.window._mN.util.getIframeDoc(i[n]))[0]&&(e[0].body||e[0].getElementsByTagName("body")[0]))&&0<t.children.length)return window.parent._mNDetails.logAdX(window.medianet_tagid,window)}return window.parent._mNDetails.logAdX(window.medianet_tagid,window,!0)}}catch(e){}}function isArray(e){return"[object Array]"===Object.prototype.toString.call(e)}function getSizeArray(e,t,i){if(!isArray(e))return[t,i];var n=parseInt(e[0],10)||0,d=parseInt(e[1],10)||0;return 0!=n&&0!=d||(n=t,d=i),[n,d]}function isSingleSize(e){return!isArray(e[0])}function getSizeArrayInInt(e,t,i){if(!isArray(e))return[t,i];if(isSingleSize(e))return getSizeArray(e,t,i);for(var n=e.length,d=[],o=0;o<n;o++)d.push(getSizeArray(e[o],t,i));return d}requrl=decodeURIComponent(requrl),window._mNDetails=window._mNDetails||{},window._mNDetails[dyncId]={},window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.setDFPSlot=function(e){if(!document.getElementById(e.divId)&&e.slotId){var t=window.parent.document.getElementById(iframeId);t&&(t.width=e.width,t.height=e.height);var i=getSizeArrayInInt(e.sizeList,e.width,e.height);window.medianet_tagid=e.tagid,window.medianet_dfpV2=e.v2,window.google_placeholder=e.divId,createDivElement(e.divId),window.googletag.cmd.push(function(){e.switchLogEvent&&(isLogEventSwitched=!0,window.googletag.pubads().addEventListener("slotOnload",callLog)),e.nonPersonalized&&window.googletag.pubads().setRequestNonPersonalizedAds(1),e.restrictDataProcessing&&window.googletag.pubads().setPrivacySettings({restrictDataProcessing:!0}),window.googletag.pubads().addEventListener("slotRenderEnded",dfpCallback),window.googletag.pubads().set("page_url",requrl),"1"===tfcd&&window.googletag.pubads().setTagForChildDirectedTreatment(1),window._mNDetails[dyncId].gtag=window.googletag.defineSlot(e.slotId,i,e.divId).addService(window.googletag.pubads())})}},window.setDFPDisplay=function(t){window.setDFPSlot(t),window.googletag.cmd.push(function(){if("object"==typeof t.target)for(var e in t.target)window._mNDetails[dyncId].gtag.setTargeting(e,t.target[e]);"function"==typeof t.applyRules&&t.applyRules([window._mNDetails[dyncId].gtag]),window.googletag.enableServices(),window.googletag.display(t.divId)})},window._mNDetails.show=function(e,t,i){i=i||!1,window.mnet_triggered=!0,window.medianet_dfpV2?parent._mNDetails.showV2(medianet_tagid,t,i):parent._mNDetails.show(medianet_tagid,t,i)},window._mNDetails.directAdShow=function(e){window.medianet_dfpV2?parent._mNDetails.directAdShowV2(e):parent._mNDetails.directAdShow(e)}</script></head><body onload="loadGpt()"></body></html>',
      _dfpael: '',
      _adxBuckets: [],
      _riFr: [],
      _riScr: '',
      _openxSizeFlag: false,
      _lzldTag: '',
      _dfpSbx: true,
      _rAtoY: [],
      _rAtoYB: [],
      _rYtoA: [],
      _natRAc: [],
      _hbCid: '8HBEYK367',
      _hbGv: 'hbCMBidxc',
      _hbAU: false,
    };
    window._mNCreativeList = { btfVI: '630718267', btfVIMob: '428811656' };
    !(function (n, t, e) {
      'use strict';
      function o (n) {
        return '[object Array]' === Object.prototype.toString.call(n);
      }
      function i (n) {
        return void 0 !== n && '' !== n && null !== n;
      }
      function r (n) {
        return 'function' == typeof n;
      }
      function u (n, t, e) {
        return (
          r(t) && ((e = t), (t = [])),
          !!(i(n) && o(t) && r(e)) && void (l[n] = l[n] || { deps: t, callback: e })
        );
      }
      function c (n, t) {
        var e,
          o = [];
        for (var i in n)
          if (n.hasOwnProperty(i)) {
            if (((e = n[i]), 'object' == typeof e || 'undefined' == typeof e)) {
              o.push(e);
              continue;
            }
            void 0 !== p[e] ? o.push(p[e]) : ((p[e] = c(l[e].deps, l[e].callback)), o.push(p[e]));
          }
        return r(t) ? t.apply(this, o) : o;
      }
      var f,
        p = {},
        l = {};
      (f = 'undefined' != typeof global && 'object' == typeof module ? global : window),
        e ? ((f[n] = c), (f[t] = u)) : ((f[n] = f[n] || c), (f[t] = f[t] || u));
    })('_cmL1Require', '_cmL1Define', !1);
    !(function (m) {
      var n = m._mN._mNRP || {};
      'function' != typeof n.pushError &&
        ((n = new mnjs.ERP()),
        n.setConfig(m._mN._mNRPConfig),
        (m._mN._mNRP = n),
        (m._mNDetails._mNRP = n));
    })(window);
    !(function (t, n) {
      'use strict';
      t._util = {
        grct: function (t) {
          return '';
        },
        isValid: function (t) {
          return '' !== t && t !== n && null !== t;
        },
        getItemsFromMacros: function (n) {
          for (
            var r,
              _ = [
                'medianet_',
                'rtnet_',
                'fl_',
                'si_',
                'sz_',
                'vi_',
                'yc_',
                'insrc_',
                'lm_',
                'srchsense_',
                'amp_',
                'loc_',
                'psf_',
                'fgm_',
                'pfm_',
                'acu_',
                'crv_',
                'mvo_',
                'mn_',
              ],
              i = 0,
              c = _.length;
            i < c;
            i++
          )
            if (((r = _[i] + n), t._util.isValid(window[r]))) return window[r];
          return '';
        },
        isValidPID: function (t) {
          try {
            return /^\dPO[0-9A-Z]{6}$/.test(t);
          } catch (n) {}
          return !1;
        },
      };
    })(_mN);
    !(function (n, t, e) {
      'use strict';
      function i () {
        function t (n, t) {
          if (c.isSet(n)) {
            t = t || {};
            var r = (t.method || 'get').toLowerCase(),
              u = e(n),
              a = u.baseUrl || '',
              s = u.queryString || '';
            'sb' === r ? o(a, s) : i(a, s);
          }
        }
        function e (n) {
          var t = n.split('?'),
            e = t[0],
            i = '';
          return (
            t.length > 1 && (i = t.splice(1, t.length - 1).join()),
            { baseUrl: e || '', queryString: c.isSet(i) ? i : '' }
          );
        }
        function i (n, t) {
          var e = n;
          c.isSet(t) && (e = e + '?' + t), a([e]);
        }
        function o (n, t) {
          u(n, t) || i(n, t);
        }
        function r () {
          return !!c.isFunction(window.navigator.sendBeacon);
        }
        function u (n, t) {
          return !!r() && window.navigator.sendBeacon(n, t);
        }
        function a (n) {
          if (c.isArray(n)) {
            var t, e;
            for (t = 0, e = n.length; t < e; t++) new Image().src = n[t];
          }
        }
        var c = n.util;
        return { logBeacons: t, logImageBeacons: a, isSendBeaconSupport: r };
      }
      n._util._logUtil = i;
    })(_mN, document);
    !(function (e, t, n) {
      'use strict';
      (e._util = e._util || {}),
        (e._util.mngc = function (e) {
          try {
            if (!t.cookie) return '';
            for (
              var n = t.cookie.indexOf(e + '=');
              n > 0 && ';' != t.cookie.substring(n - 1, n) && ' ' != t.cookie.substring(n - 1, n);

            )
              n = t.cookie.indexOf(e + '=', n + 1);
            var i = n + e.length + 1;
            if (!n && e !== t.cookie.substring(0, e.length)) return null;
            if (n === -1) return null;
            var o = t.cookie.indexOf(';', i);
            return o === -1 && (o = t.cookie.length), unescape(t.cookie.substring(i, o));
          } catch (c) {
            return null;
          }
        }),
        (e._util.mnsc = function (e, n, i, o, c, r, u, s) {
          try {
            s = s || 'lax';
            var l = new Date();
            l.setTime(l.getTime()),
              'none' === s.toLowerCase() && (r = !0),
              i && (i = 1000 * i * 60 * 60 * 24),
              u && (i = 1000 * u * 60);
            var a = new Date(l.getTime() + i);
            t.cookie =
              e +
              '=' +
              escape(n) +
              (i ? ';expires=' + a.toGMTString() : '') +
              (o ? ';path=' + o : '') +
              (c ? ';domain=' + c : '') +
              (';samesite=' + s) +
              (r ? ';secure' : '');
          } catch (m) {}
        }),
        (e._util.ktb = function () {
          try {
            e._util.mnsc('_mNTC', 1, 0, '/'), (t.getElementById('cmt-1').style.display = 'none');
          } catch (n) {}
        }),
        (e._util.mnssc = function (t, n, i) {
          return /chrome/.test(navigator.userAgent.toLowerCase())
            ? void e._util.mnsc(t, n, null, '/', '', '', i)
            : void e._util.mnsc(t, n, null, '/');
        });
    })(_mN, document);
    window._cmL1Define('l1-constants', function () {
      var _ = {
        L2_LOAD_TYPE: { SETTINGS: 'e' },
        IFRAME_TYPE: { DY_FRAME: 'dy', INSL_FRAME: 'insl', GPT_FRAME: 'gpt', MAIN_FRAME: 'main' },
        TAG_TYPE: { INTERSTITIAL: 'i', ASYNC: 'a' },
        LOG_RENDERED_AD_EVENT: 'lraevt',
        EVENTS: {
          TCF: {
            CM_TCF_DATA_IS_READY: 'tcfEvt::tcReady',
            TCF_API_HAS_LOADED_TCDATA: 'tcfApi::tcLoaded',
            GLOBAL_TCF_EVENT_UID: 'gblTcf',
          },
        },
      };
      return _;
    });
    function $___var_5ea19b244b37113b (t) {
      'use strict';
      var m = t._util,
        _ = m.getItemsFromMacros('height'),
        e = m.getItemsFromMacros('width'),
        r = m.getItemsFromMacros('misc'),
        s = m.getItemsFromMacros('pid'),
        a = {
          _cid: m.getItemsFromMacros('cid') || '',
          _crid: m.getItemsFromMacros('crid') || '',
          _size: _ && e ? e + 'x' + _ : '',
          _fd: m.getItemsFromMacros('fd') || '',
          _acid: m.getItemsFromMacros('auctionid') || '',
          _ctxid: m.getItemsFromMacros('ctxtid') || '',
          _ctxcat: m.getItemsFromMacros('ctxtcat') || '',
          _c: m.getItemsFromMacros('c') || '',
          _chnm2: m.getItemsFromMacros('chnm2') || '',
          _chnm3: m.getItemsFromMacros('chnm3') || '',
          _bdrId: m.getItemsFromMacros('bdrId') || '',
          _sbdrId: m.getItemsFromMacros('sbdrId') || '',
          _csip: m.getItemsFromMacros('csip') || '',
          _bdata: m.getItemsFromMacros('bdata') || '',
          _matchstr: r ? r.matchString || '' : '',
          _tpid: m.getItemsFromMacros('tpid') || '',
          _pid: m.isValidPID(s) ? s : '',
          _chid: m.getItemsFromMacros('chid') || '',
          _ts: m.getItemsFromMacros('ts') || '',
          _ba: m.getItemsFromMacros('ba') || '',
          _bae: m.getItemsFromMacros('bae') || '',
          _bcpf: m.getItemsFromMacros('bcpf') || '',
          _inapp: m.getItemsFromMacros('app') || '',
        };
      for (var c in a) a.hasOwnProperty(c) && !m.isValid(t[c]) && m.isValid(a[c]) && (t[c] = a[c]);
    }
    setup = $___var_5ea19b244b37113b;
    ({}.constructor.defineProperty(setup, 'name', {
      configurable: true,
      enumerable: false,
      value: 'setup',
      writable: false,
    }));
    (_mN = 'object' == typeof _mN ? _mN : {}),
      (_mNDetails = 'object' == typeof _mNDetails ? _mNDetails : {}),
      setup(_mN);
    var $___var_5c6d806982acc325 = _mN._crid || 'dtag';
    _mN_Idf = $___var_5c6d806982acc325;
    _mN._slot && 1 === _mN._slot && (_mN_Idf = 'dtag');
    var $___var_a76b8d4fd0cb2189 = 'ctrMain_' + _mN_Idf;
    _mN_ctrM = $___var_a76b8d4fd0cb2189;
    if (document.getElementById('_mN_dy_' + _mN_Idf) || void 0 !== _mNDetails[_mN_Idf]) {
      var _mN_ctr = _mNDetails[_mN_ctrM] ? parseInt(_mNDetails[_mN_ctrM], 10) + 1 : 1;
      (_mN_Idf += '_' + _mN_ctr), (_mNDetails[_mN_ctrM] = _mN_ctr);
    }
    (_mNDetails[_mN_Idf] = _mNDetails[_mN_Idf] || {}),
      (_mNDetails[_mN_Idf].depCtr = _mNDetails.depCtr || 0),
      (_mNDetails[_mN_Idf].modArr = _mNDetails.modArr || []),
      (_mNDetails.depCtr = 0);
    !(function (e, t, n, i, a) {
      function g (e, t, n) {
        var a = 'evt_' + (t || 'gbl');
        (i[a] = i[a] || {}), (i[a][e] = i[a][e] || []), i[a][e].push(n);
      }
      function v (e, t) {
        var n = 'evt_' + (t || 'gbl');
        i[n] && i[n][e] && (i[n][e] = []);
      }
      function r (e, t, g, v) {
        (v = v || ('object' == typeof g ? g : {})), (g = 'boolean' == typeof g && g);
        var r = 'evt_' + (e || 'gbl'),
          u = v.cacheKey || e,
          o = i.EntityCache.get(u);
        if (i[r] !== a) {
          var l,
            c,
            f = i[r][t] || [],
            b = { _mN: n, adScope: o.adScope, entities: o.entities, type: t, uid: e };
          for (
            i.evt_gbl && i.evt_gbl.gblEvt && d.execSafe(i.evt_gbl.gblEvt[0], b, v),
              c = 0,
              l = f.length;
            c < l;
            c++
          )
            n.util.isFunction(f[c]) && d.execSafe(f[c], b, v);
          !g && f.length > 0 && (i[r][t] = []);
        }
      }
      function u (e, t, a, g) {
        if (n.util.isFunction(e)) {
          var v = g.cacheKey || a,
            r = i.EntityCache.get(v),
            u = { _mN: n, adScope: r.adScope, entities: r.entities, type: t, uid: a };
          d.execSafe(e, u, g);
        }
      }
      function o (e, t, n, g) {
        (g = g || ('object' == typeof n ? n : {})), (n = 'boolean' == typeof n && n);
        var v = 'evt_' + (e || 'gbl');
        if (i[v] !== a) {
          i.evt_gbl && i.evt_gbl.gblEvt && u(i.evt_gbl.gblEvt[0], t, e, g);
          for (var r = i[v][t] || [], o = 0; o < r.length; o++) u(r[o], t, e, g);
          !n && r.length > 0 && (i[v][t] = []);
        }
      }
      function l (e, t, n, a) {
        var g = 'live_' + (e || 'gbl');
        (i[g] = i[g] || {}), (i[g][t] = i[g][t] || {});
        var v = i[g][t] && 1 === i[g][t].queued;
        (i[g][t] = { trigger: 1, custParams: a }), v && r(e, t, n, a);
      }
      function c (e, t, n) {
        var a = 'live_' + (t || 'gbl');
        (i[a] = i[a] || {}),
          (i[a][e] = i[a][e] || {}),
          i[a][e] && 1 === i[a][e].trigger
            ? u(n, e, t, i[a][e].custParams || {})
            : ((i[a][e] = { queued: 1 }), g(e, t, n));
      }
      function f (e, t, n, i, a) {
        l(e, t, n, i),
          c('L3SF', a, function (e, n) {
            var g = { type: t, params: i };
            try {
              var v = { key: 'trigger-l3-event', value: g, token: a };
              n.originalEvent.source.postMessage(JSON.stringify(v), '*');
            } catch (r) {}
          });
      }
      var d = n._mNRP;
      n.evutil = n.evutil || {
        triggerAdTagEvent: r,
        triggerAdTagEventV2: o,
        triggerAdTagEventWhenQueued: l,
        addToEventQueue: g,
        removeFromEventQueue: v,
        addToDelayedEventQueue: c,
        triggerMultiLayerAdTagEventWhenQueued: f,
      };
    })(window, document, _mN, _mNDetails);
    !(function (e, t, n, r, o, a) {
      'use strict';
      function i () {
        return de;
      }
      function s (e, t) {
        return o.stu.checkItemExists(e, t);
      }
      function d (e, t) {
        return o.stu.checkItemExistsInArray(e, t);
      }
      function u (e) {
        return o.stu.isStringSet(e);
      }
      function c (e) {
        return o.stu.isFunction(e);
      }
      function l (e) {
        return o.stu.isArray(e);
      }
      function p (e) {
        return o.bru.encodeParam(e);
      }
      function m (e) {
        return o.bru.decodeParam(e);
      }
      function f () {
        return o.bru.isInIFrameCall();
      }
      function g (e) {
        try {
          if (e && e.top && e.top.document) return !0;
        } catch (t) {}
        return !1;
      }
      function b () {
        if (!w()) return e;
        var t = e.top,
          n = e;
        try {
          for (var r = 0; n != t && n != n.parent && r < 20; ) {
            n.parent.innerWidth;
            (n = n.parent), r++;
          }
        } catch (o) {}
        return n;
      }
      function h (e) {
        var t = x(1, 100),
          n = 1;
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var o = parseInt(e[r]);
            if (t < n + o) return r;
            n += o;
          }
      }
      function v () {
        if (!w()) return e;
        var t = e.top,
          n = e;
        try {
          for (var r = 0; n.parent != t && n != n.parent && r < 20; ) {
            n.parent.innerWidth;
            (n = n.parent), r++;
          }
        } catch (o) {}
        return n;
      }
      function w () {
        if (!y()) return !1;
        try {
          e.parent.document;
          return !0;
        } catch (t) {
          return !1;
        }
      }
      function y () {
        return (
          !u(n._rpas) || ('1' != n._rpas && !le.checkItemExists(n._rpas, n._crid)) || !k() || !f()
        );
      }
      function k () {
        return me.indexOf('safari/') > -1 && me.indexOf('chrome') === -1;
      }
      function I (e, t) {
        (r[e] = r[e] || {}), (r[e].L3frameId = t);
      }
      function _ (e, t) {
        r[e].L2frameId = t;
      }
      function x (e, t) {
        return o.stu.getRandom(e, t);
      }
      function T (e) {
        return x(1, 100) <= parseInt(e, 10);
      }
      function O (e, t, n) {
        return o.stu.getProxy(e, t, n);
      }
      function P (e) {
        return o.bru.getHostname(e);
      }
      function D (e) {
        l(e) || (e = [e]),
          n._ampadtag || (n._limgBeac && 1 == n._limgBeac) ? pe.logImageBeacons(e) : S(e);
      }
      function E (e, t, n, r) {
        var a;
        if (((n = n || le.queryDOM('@body:0')), !n))
          return le.callWhenAvailable('@body:0', 100, O(E, [e, t, null, r]), !1), null;
        var i = new o.ifu.CreateFrame()
          .set('marginWidth', 0)
          .set('marginHeight', 0)
          .set('scrolling', 'no')
          .set('frameBorder', 0)
          .set('height', 0)
          .set('width', 0)
          .set('id', e)
          .overrideStyle('display:none !important;');
        if ('object' == typeof r) for (var s in r) r.hasOwnProperty(s) && i.set(s, r[s]);
        return (
          (a = i.done()),
          n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a),
          t && o.ifu.writeContentInIframe(a, t),
          a
        );
      }
      function S (e) {
        r.beaconsQueue === a && (r.beaconsQueue = []);
        var t = '_mN_beacons',
          n = Q(t),
          o =
            '<!DOCTYPE html><html><head><script type="text/javascript">function logBeacons(){if(window.parent && window.parent._mNDetails && window.parent._mNDetails.beaconsQueue){if(Object.prototype.toString.call(window.parent._mNDetails.beaconsQueue) === "[object Array]" && window.parent._mNDetails.beaconsQueue.length > 0){var i, j;for (i = 0, j = window.parent._mNDetails.beaconsQueue.length; i < j; i++) {(new Image()).src = window.parent._mNDetails.beaconsQueue.shift();}}}};</script></head><body onload="logBeacons()"></body></html>',
          i = 0 === r.beaconsQueue.length && null === n;
        if (l(e)) {
          var s, d;
          for (s = 0, d = e.length; s < d; s++) r.beaconsQueue.push(e[s]);
        } else u(e) && r.beaconsQueue.push(e);
        if (i) E(t, o);
        else if (null !== n) {
          var c = n.contentWindow || n.contentDocument;
          try {
            c.logBeacons();
          } catch (p) {}
        }
      }
      function A (e, t, n) {
        return u(t) && u(e) ? ((t = n ? p(t) : t), '&' + e + '=' + t) : '';
      }
      function L (e, t, n, r) {
        function o (e) {
          return 'object' != typeof e || e.isUrlEntity !== !1;
        }
        var a,
          i,
          s = '',
          c = !!t,
          l = c ? t : e;
        for (a in l)
          l.hasOwnProperty(a) &&
            (c && (a = t[a]),
            d(r, a) ||
              (u(e[a]) &&
                o(e[a]) &&
                ((i = 'object' == typeof e[a] ? e[a].value : e[a]), (s += A(a, i, n)))));
        return s;
      }
      function C (t, n) {
        function r () {
          (i = !0), c(n) && n();
        }
        function o (n) {
          if (((n = n || e.event), ('focus' == n || a()) && !i)) {
            for (var d = 0; d < s.length; d++) le.eventLib.removeEvent(t, s[d], o);
            r();
          }
        }
        function a () {
          return t.document && c(t.document.hasFocus) && t.document.hasFocus();
        }
        var i = !1,
          s = ['focus', 'mouseover', 'pageshow', 'mousedown'];
        if (t) {
          if (a()) return void r();
          for (var d = 0; d < s.length; d++) le.eventLib.addEvent(t, s[d], o);
        }
      }
      function z () {
        try {
          e.top.location.href;
          return e.top;
        } catch (t) {}
        return e;
      }
      function N (e, t, n) {
        var o = new Date().getTime();
        (r.console = r.console || {}),
          (r.console[t] = r.console[t] || {}),
          (r.console[t].logMessages = r.console[t].logMessages || []);
        var i = r.console[t].logMessages;
        t !== a && e !== a && i.push({ message: e, time: o, level: n });
      }
      function U (e, t, n) {
        le.triggerAdTagEvent(e, 'link_' + t, !1, n);
      }
      function j (e, t, n) {
        le.triggerAdTagEvent(e, 'loadTime_' + t, !1, n);
      }
      function B (e) {
        return o.stu.isSet(e);
      }
      function F (e) {
        for (var t in e) if (e.hasOwnProperty(t)) return !1;
        return !0;
      }
      function M (e) {
        --r[e].depCtr || le.triggerAdTagEvent(e, 'dependencyResolved');
      }
      function R (t) {
        var n;
        try {
          n = e._cmL1Require([t])[0];
        } catch (r) {
          n = null;
        }
        return n;
      }
      function W (e) {
        var t = P(e),
          n = t.split('.');
        return n.length > 2 && 'www' === n[0] && (n.shift(), (t = n.join('.'))), t;
      }
      function V (e, t) {
        return W(e) === W(t);
      }
      function Q (e, t) {
        return o.dmu.queryDOM(e, t);
      }
      function q () {
        return o.bru.isJSONSupported();
      }
      function H (e, n) {
        if (u(e)) {
          var r = t.createElement('script'),
            o = t.getElementsByTagName('script')[0],
            a = !1;
          (r.type = 'text/javascript'),
            (r.async = !0),
            n &&
              'function' == typeof n &&
              (r.onload = r.onreadystatechange = function () {
                a ||
                  (this.readyState &&
                    'loaded' !== this.readyState &&
                    'complete' !== this.readyState) ||
                  ((a = !0), ue.execSafe(n));
              }),
            (r.src = e),
            o.parentNode.insertBefore(r, o);
        }
      }
      function G () {
        const $___old_8a8b00f30355be0d = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_8a8b00f30355be0d)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_9d7b4eb662ee43f5.userAgent
            ));
          return function () {
            var t = function (e, t, n) {
              (this.id = e), (this.name = t), (this.regexp = n);
            };
            (t.prototype.getName = function () {
              return this.name;
            }),
              (t.prototype.getId = function () {
                return this.id;
              }),
              (t.prototype.getRegexp = function () {
                return this.regexp;
              });
            var n =
                'spreadtrum[ ;]|oppo( |)[a-z][\\d]|neozenrevo|trend\\smicro\\swtp|dorado\\swap-browser|huawei(\\shg520v|(/|_|)[a-z][\\d][\\d][\\d][\\d])|(alcatel[-_](ot-|ot|one_touch_|)[\\d][\\d][\\d])|deweb60|gionee|(gt-[a-z][\\d][\\d][\\d][\\d])|(huawei-u[\\d][\\d][\\d][\\d])|(htc_touch|htc_smart|htc[_-][a-z]+[\\d][\\d][\\d][\\d])|(karbonn\\swap-browser\\sk[\\d][\\d]|karbonn(/|[ _|]k[\\d][\\d]))|(kddi-[a-z][a-z][\\d][a-z0-9])|kkt50|lava.discover|lava.kkt|lava.spar|(lemon[ _]((s|t|gc)[\\d][\\d][\\d]|duo))|(samsung-([a-z]|sgh-[a-z])([\\d]|v)[\\d][\\d])|(lg[-/]([a-z]+|)[\\d][\\d][\\d](([a-z]|)/v|[ -]))|(micromax([ |]|)[a-z]+[\\d][\\d])|(mot-ex[\\d]|mot-v[\\d]|mot-razrv3|mot-l9/)|(nexian( |)nx(-|)[a-z][\\d])|pantechp|s8500|(sagetel[\\d]+([a-z]|)_)|softbank/|sonyd2105|(spice\\s(m([ -]|)([\\d]|i-)[\\d]|qt(-|))[\\d][\\d])|tianyu-ktouch|zen\\sp8|(zte[ -/][a-z](|[- ][a-z])[\\d][\\d][\\d])|videocon-A45',
              r = new t(0, 'UNKNOWN_DEVICE', new RegExp('')),
              o = new t(
                1,
                'SMART_TV',
                new RegExp(
                  'smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv?|espial/[\\d]+|hbbtv/|tv\\store|sonydtv|pov_tv-hdmi|nettv/|kylo/|viera;|vap430',
                  'i'
                )
              ),
              a = new t(
                2,
                'TABLET',
                new RegExp(
                  'hudl ht7s3 build|kindle( |/)|ipad|tablet|playbook|smart\\stab|gt-n8000|gt-n8013|gt-p[\\d][\\d][\\d][\\d]|me371mg|nexus\\s(7|8|9|[\\d][\\d])\\sbuild/|sm-t[\\d][\\d][\\d]|\\ssgp[\\d][\\d][\\d] build/|touchpad build|venue7\\s[\\d][\\d][\\d][\\d]\\s|gt-n5100 build|lenovoa3300[-]hv|kfjwi\\sbuild/|shw-m\\d\\d\\d[a-z]\\sbuild/|smarttab10-|sony\\stablet\\s(s|p)\\s|huawei\\smediapad\\sbuild|thinkpad\\stablet\\s|vodafone\\ssmarttab|(kfapwa|kfapwi|kfarwi|kfaswi|kfjwa|kfjwi|kfot|kfsawa|kfsawi|kfsowi|kfthwa|kfthwi|kftt|kftbwi|kfmewi|kfauwi|kffowi|kfdowi|kfgiwi)\\sbuild|ideatab\\s|mediapad\\s[\\d]+\\slite\\sbuild|mid\\d\\d\\d\\d\\sbuild/|(at|wt)\\d+[a-z]{0,2}\\sbuild|(bntv|bnrv|bnwz)\\d{3,}[a-z]?\\sbuild',
                  'i'
                )
              ),
              i = new t(
                3,
                'MOBILE',
                new RegExp(
                  'fennec/|mobile|phone|iphone|ipod|blackberry|playbook|bb10|android|palm|windows\\s+ce|s60;\\ssymbos|series\\s60|series40|samsung-gt-|sonyericsson|nokia|samsung\\sgt|nokia|maui\\sruntime|j2me/midp|brew|docomo/[\\d]+.[\\d]+|mi\\s3w\\smiui|maui\\swap\\sbrowser|(\\d|)\\d\\d\\d[*]\\d\\d\\d(\\d|)(|;)[)]|' +
                    n,
                  'i'
                )
              ),
              s = new t(
                4,
                'DESKTOP',
                new RegExp(
                  'windows|win([\\d][\\d]|nt)(\\s|;|[)])|windows\\snt\\s\\d[.]\\d|cros;|cros\\s|linux|os\\s+[x9]|solaris|bsd|x11|mac_powerpc|macintosh',
                  'i'
                )
              ),
              d = new t(
                5,
                'GAME_CONSOLE',
                new RegExp('playstation\\s[\\d]|playstation\\sportable|nintendo', 'i')
              ),
              u = new t(
                6,
                'BOT',
                new RegExp(
                  '200pleasebot|alexabot|adsbot-google|appengine-google;|ask\\sjeeves/teoma|baiduspider|bingbot|caliperbot/|ccbot/[\\d]|commons-httpclient|crawler|linkedinbot/|twitterbot/|google[.]com/[+]/web/snippet|feedfetcher-google|googlebot|ia_archiver|kishimobot|luasocket|magpierss|moodlebot|msnbot|nuhk|openbot|pingdom[.]com_bot_version|simplepie|site\\sscanner\\sbot|slurp|smtbot/[\\d]|spbot/[\\d]|spinn3r|startmebot/|statdom[.]ru/bot|uptimerobot|web\\sspider|spider/|webspider|wget/|yammybot|yodaobot|yandexmetrika/|yandexbot|yacybot|google-http-java-client/|musobot/|yabrowser/|contxbot/|mediapartners-google|yahoo-ad-monitoring|catchpoint|mj12bot|cloudflare-alwaysonline|ahrefsbot|open web analytics bot master|dnyzbot|archive.org_bot|google-adwords-instant|google-adwords-displayads|ot-toulouse.com|rssingbot|linkdexbot|semrushbot|everyonesocialbot|bomborabot|cliqzbot|snacktory|aiohttp|linkdexbot|alphabot|dotbot|exabot|amazon cloudfront|yahoo-link-preview-|yahoo link preview|adbot|discordbot|Pinterestbot|HeadlessChrome|BrandVerity|DuckDuckBot|moatbot|YandexMobileBot|PhantomJS|facebookexternalhit|google-read-aloud',
                  'i'
                )
              ),
              c = function (t) {
                const $___old_5c85afb0290a9714 = {}.constructor.getOwnPropertyDescriptor(
                  Navigator.prototype,
                  'platform'
                );
                try {
                  if ($___old_5c85afb0290a9714)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'platform',
                      $___stub_9d7b4eb662ee43f5.platform
                    ));
                  return function () {
                    (this.deviceType = r),
                      t &&
                        ((this.userAgent = t.toLowerCase()),
                        (this.deviceType = this.detectDeviceType()),
                        this.deviceType.getId() === a.getId() &&
                          this.userAgent.indexOf('tablet pc') > -1 &&
                          (this.deviceType = s),
                        this.deviceType.getId() !== u.getId() &&
                          this.userAgent.indexOf('android') > -1 &&
                          this.userAgent.indexOf('mobile') > -1 &&
                          this.deviceType.getId() !== a.getId() &&
                          (this.deviceType = i),
                        this.deviceType.getId() === s.getId() &&
                          'MacIntel' === e.navigator.platform &&
                          e.navigator.maxTouchPoints > 2 &&
                          (this.deviceType = a));
                  }.apply(this, arguments);
                } finally {
                  if ($___old_5c85afb0290a9714)
                    ({}.constructor.defineProperty(
                      Navigator.prototype,
                      'platform',
                      $___old_5c85afb0290a9714
                    ));
                }
              };
            (c.deviceListPriority = [u, o, a, i, s, d, r]),
              (c.prototype.detectDeviceType = function () {
                for (var e = c.deviceListPriority, t = 0; t < e.length; t++)
                  if (e[t].getRegexp().test(this.userAgent)) return e[t];
                return this.UNKNOWN_DEVICE;
              }),
              (c.prototype.getDeviceType = function () {
                return this.deviceType;
              });
            var l = new c(navigator.userAgent);
            return l.getDeviceType().getId();
          }.apply(this, arguments);
        } finally {
          if ($___old_8a8b00f30355be0d)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_8a8b00f30355be0d
            ));
        }
      }
      function J () {
        return se || (se = ue.execSafe(G)), se;
      }
      function K (e, n) {
        if (e.style[n]) return e.style[n];
        if (e.currentStyle) return e.currentStyle[n];
        if (t.defaultView && t.defaultView.getComputedStyle) {
          (n = n.replace(/([A-Z])/g, '-$1')), (n = n.toLowerCase());
          var r = t.defaultView.getComputedStyle(e, '');
          return r && r.getPropertyValue(n);
        }
        return null;
      }
      function Z (e) {
        var t = e.parentNode;
        t.removeChild(e);
      }
      function Y (e, t) {
        return (t = t || '_'), e.replace('x', t);
      }
      function $ (e, t, n) {
        n = n || !1;
        var r = 10;
        for (t !== -1 && (n || (t = t && t > 999 ? t : 4000), (e = e.substring(0, t))); r-- > 0; )
          try {
            decodeURIComponent(e);
            break;
          } catch (o) {
            e = e.substring(0, e.length - 1);
          }
        return e;
      }
      function X (e, t) {
        var n = {};
        for (var r in e) n[r] = e[r];
        for (var r in t) n[r] = t[r];
        return n;
      }
      function ee () {
        var t = e.location.hash;
        return u(t) && t.length > 1 ? t.substring(1) : '';
      }
      function te () {
        var e,
          t,
          r = {};
        return (
          (e = ee()),
          u(e) &&
            ((t = m(e)),
            (r = n.util.getParamValueFromUrlAsArray((0 === t.indexOf('?') ? '' : '?') + t))),
          r
        );
      }
      function ne (e) {
        return B(e) && !isNaN(e);
      }
      function re () {
        var t = e.location.href;
        return (u(t) && t) || '';
      }
      function oe () {
        var t = e.location.pathname;
        return (u(t) && t) || '';
      }
      function ae () {
        return c(t.body.attachShadow);
      }
      function ie (t) {
        const $___old_93b68691c0818a73 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'platform'
        );
        try {
          if ($___old_93b68691c0818a73)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'platform',
              $___stub_9d7b4eb662ee43f5.platform
            ));
          return function () {
            return /(ipad)/i.test(t)
              ? !(!/os [3-9]_.*safari/i.test(t) && !/os 1[0-9]_[0-9].*safari/i.test(t))
              : 'MacIntel' === e.navigator.platform && e.navigator.maxTouchPoints > 2;
          }.apply(this, arguments);
        } finally {
          if ($___old_93b68691c0818a73)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'platform',
              $___old_93b68691c0818a73
            ));
        }
      }
      var se,
        de = _mN_Idf,
        ue = n._mNRP;
      if ((c(r.DOMLoadObserver) || (r.DOMLoadObserver = o.evu.DOMLoadObserver), !n.util)) {
        n.util = {
          merge: X,
          encodeParam: p,
          decodeParam: m,
          getHostname: P,
          isStringSet: u,
          inIframe: o.bru.inIframe,
          getTopmostAccessibleWindow: b,
          getSecondTopWindow: v,
          isInIFrameCall: f,
          getRandom: x,
          isPercentApp: T,
          getParamValueFromUrlAsArray: o.uru.getParamValueFromUrlAsArray,
          GetParamValueFromUrl: o.uru.GetParamValueFromUrl,
          checkUrlDecodingEncoding: o.uru.checkUrlDecodingEncoding,
          eventLib: o.evu.eventLib,
          isFunction: c,
          isArray: l,
          ua: o.bru.ua,
          buildUrlParameters: L,
          getQueryParamString: A,
          logBeacons: D,
          isOptionSet: o.stu.isOptionSet,
          getIframeDoc: o.ifu.getIframeDoc,
          getElementStyle: K,
          removeElement: Z,
          getAdTagUID: i,
          resolveModuleLoad: M,
          triggerFunctionOnFocus: C,
          getTopWindowObject: z,
          getProxy: O,
          CreateFrame: o.ifu.CreateFrame,
          callWhenAvailable: o.dmu.callWhenAvailable,
          getChildElemByClass: o.dmu.getChildElemByClass,
          ip2long: o.stu.ip2long,
          isJSONSupported: q,
          setLastOctetInIPToZero: o.stu.setLastOctetInIPToZero,
          checkItemExists: s,
          checkItemExistsInArray: d,
          queryDOM: Q,
          writeContentInIframe: o.ifu.writeContentInIframe,
          consoleLog: N,
          safeReturn: o.stu.safeReturn,
          obfuscateSizeFormat: Y,
          passLoadTimeToConsole: j,
          passUrlToConsole: U,
          DOMLoadObserver: r.DOMLoadObserver,
          isMobile: o.bru.isMobile,
          createNonBlockingFrame: E,
          shouldTryParentAccess: y,
          isParentAccessible: w,
          loadScript: H,
          decimalLimit: o.stu.decimalLimit,
          isSet: B,
          isSafari: k,
          setL3FrameId: I,
          setL2FrameId: _,
          each: o.stu.each,
          any: o.stu.any,
          isObjectEmpty: F,
          getUgd: J,
          matchDomains: V,
          getRequireModule: R,
          isTopWindowAccessible: g,
          truncateUrl: $,
          extend: o.stu.extend,
          appendQueryParamToUrl: o.uru.appendQueryParamToUrl,
          appendHashParamToUrl: o.uru.appendHashParamToUrl,
          getValueBasedOnPercentageSplit: h,
          getParamsFromWindowUrlHash: te,
          isNumeric: ne,
          getWindowUrl: re,
          getWindowPath: oe,
          isShadowDomSupported: ae,
          isIpadDevice: ie,
        };
        for (var ce in n.evutil) n.evutil.hasOwnProperty(ce) && (n.util[ce] = n.evutil[ce]);
      }
      var le = n.util,
        pe = n._util._logUtil(),
        me = le.ua;
      e._cmL1Define &&
        e._cmL1Define('util', function () {
          return n.util;
        });
    })(window, document, _mN, _mNDetails, mnjs);
    _cmL1Define('l1logger', [window, document, _mNDetails, 'l1-constants'], function (t, n, i, e) {
      function r () {
        if (t._mN._nvLper) {
          var n = parseInt(t._mN._nvLper);
          if (n > 0 && n <= 100) return n;
        }
      }
      function o () {
        var n = r(),
          i = L.getRandom(1, 100);
        return !!L.isSet(n) && i <= n && L.isStringSet(t._mN._navvyHthChkURL);
      }
      function g (t) {
        r() && a('nvLogging', t ? '1' : '0');
      }
      function a (t, n) {
        L.isStringSet(t) && L.isSet(n) && (N[t] = n);
      }
      function c () {
        var t = i.privacy.getParamsToLog();
        L.each(t, function (t, n) {
          a(n, t);
        });
      }
      function u (n, r) {
        var o = {};
        return (
          (o.prid = n.getEntity('prid')),
          (o.cid = n.getEntity('cid')),
          (o.crid = n.getEntity('crid')),
          (o.vi = n.getEntity('vi')),
          (o.ugd = n.getEntity('ugd')),
          (o.lf = 6),
          (o.kwrf = n.getEntity('kwrf')),
          (o.cc = t._mN._ip2c),
          (o.sc = t._mN._ip2allsc),
          (o.vsid = n.getVisitorId()),
          n.tagType === e.TAG_TYPE.INTERSTITIAL && ((o.insl = 1), (o.rk = n.getEntity('rterm'))),
          (o.lper = d(n)),
          (o.wsip = n.getEntity('wsip')),
          (o.r = new Date().getTime()),
          (o.requrl = n.getEntity('requrl')),
          n.getParamFromLocHash('l2type') && a('l2type', n.getParamFromLocHash('l2type')),
          a('sbSup', h.isSendBeaconSupport() ? '1' : '0'),
          a('is_amp', n.getEntity('is_amp')),
          a('asn', t._mN._asn),
          c(),
          g(r),
          (o = L.merge(i.privacy.getMainFlag(), o)),
          L.buildUrlParameters(o)
        );
      }
      function m () {
        var t = '',
          n = 'vgd_';
        for (var i in N)
          N.hasOwnProperty(i) && (t += ['&', n + i, '=', encodeURIComponent(N[i])].join(''));
        return t;
      }
      function l (n) {
        return (
          L.checkItemExists(t._mN._L1PgEx, n.getEntity('crid')) ||
          L.checkItemExists(t._mN._L1PgEx, n.getEntity('cid'))
        );
      }
      function s (t) {
        return t.getEntity('requrl', !0).indexOf('mnet_test') !== -1;
      }
      function d (n) {
        var i = L.safeReturn(t._mN._lper, n.getEntity('crid'));
        return (s(n) || 0 == i) && (i = 100), i;
      }
      function _ (t) {
        function n (t) {
          if (L.isStringSet(t)) {
            var n = L.getRandom(1, 100);
            return n < t;
          }
          return !0;
        }
        function i (t, n) {
          return !(
            !L.isStringSet(_mN._dL1Imp) ||
            (!L.checkItemExists(_mN._dL1Imp, t) && !L.checkItemExists(_mN._dL1Imp, n))
          );
        }
        function e () {
          if (s(t)) return !0;
          var e = d(t);
          if (n(e)) {
            var r = /iphone|ipad|android|symbian|blackberry/.test(L.ua),
              o = t.getEntity('cid'),
              g = t.getEntity('crid');
            if (('852723304' !== g || r) && i(o, g) === !1) return !0;
            if ('8CU5N973T 8CUCN7VBB 8CU125H2I'.indexOf(o) !== -1) return !0;
          }
          return !1;
        }
        return e();
      }
      function f (n, e) {
        var r = o(),
          g = u(e, r) + m(),
          a = t._mN._hthChkURL + g;
        return (
          _mN._trunLogUrl && (a = L.truncateUrl(a, _mN._trunLogUrl)),
          l(e)
            ? void (i.logPing = function () {
                e.logLoggingBeacons([a]);
              })
            : r
            ? ((a = t._mN._navvyHthChkURL + g + '&hvsid=' + e.getVisitId()),
              _mN._trunLogUrl && (a = L.truncateUrl(a, _mN._trunLogUrl)),
              void h.logBeacons(a, { method: 'sb' }))
            : void n.push(a)
        );
      }
      function v (t) {
        N = {};
        var n = t.adScope;
        if (_(n)) {
          var i = [];
          f(i, n), n.logLoggingBeacons(i);
        }
      }
      function y (t, n, i) {
        p(t, n, i);
      }
      function p (n, e, r) {
        var o,
          g = {};
        (o = t._mN._flping),
          (g.action = e),
          (g.reason = n),
          r
            ? ((g.cid = r.getEntity('cid')),
              (g.crid = r.getEntity('crid')),
              (g.cc = r.getEntity('cc')),
              (g.ugd = r.getEntity('ugd')),
              (g.requrl = r.getEntity('requrl')),
              (g.domain = L.getHostname(g.requrl)),
              (g.refurl = r.getEntity('kwrf')),
              (g.refdomain = L.getHostname(g.refurl)),
              (g.vi = r.getEntity('vi')),
              (g.vsid = r.getVisitorId()))
            : (g.domain = t.location.href),
          (g = L.merge(i.privacy.getMainFlag(), g)),
          (o += L.buildUrlParameters(g, null, !0)),
          r ? r.logLoggingBeacons([o]) : L.logBeacons([o]);
      }
      function E (t, n) {
        var i = { r: new Date().getTime() };
        for (var e in i) n[e] = i[e];
        var r = _mN._lHst + t + '?' + L.buildUrlParameters(n);
        h.logImageBeacons([r]);
      }
      var N,
        L = _mN.util,
        h = _mN._util._logUtil();
      return { logPing: v, logFailover: y, logFailoverWithoutEntity: p, fireLogPixel: E };
    });
    _cmL1Define('urlcleaner', [_mN.util], function (e) {
      function t (t, r, n) {
        var i = new RegExp(
          /\$\{SOURCEURLENC\}|\{pageurl\}|\{SOURCE_URL_ENC\}|\$\{BUYER_LINE_ITEM_ID\}|\$\{CLICKURLENC\}|\$\{PRICE_CENTS\}|\$\{PRICING_TYPE\}|\$\{SECTION_CODE\}|\$\{SITE_CODE\}|\$\{PUBLISHERID\}|\$\{SITEID\}|\$\{SECTIONID\}|\$\{VURLID\}|\[admeld_url\]/g
        );
        if (!e.isSet(t)) return n || '';
        if (((t = t.replace(i, '')), r))
          try {
            t = t.toLowerCase().indexOf('http') === -1 ? '' : e.checkUrlDecodingEncoding(t);
          } catch (a) {}
        return e.isStringSet(t) || (t = n || ''), t;
      }
      function r (t, r) {
        var n = _mN._ignoreParams || [];
        n.push('utm_source'), (r = r || []);
        for (
          var i = [
              'action_object_map=',
              'action_type_map=',
              'bcmt',
              'action_ref_map=',
              'action_action_map=',
              'fb_',
              'utm_',
              'code=',
            ],
            a = 0;
          a < n.length;

        ) {
          var c = n[a] + '=';
          if (t.substring(0, c.length) === c) return !0;
          a++;
        }
        for (a = 0; a < i.length; ) {
          if (t.substring(0, i[a].length) === i[a]) return !1;
          a++;
        }
        for (a = 0; a < _.length; ) {
          if (t.substring(0, _[a].length) === _[a])
            return e.checkItemExistsInArray(u, t) || u.push(t), !1;
          a++;
        }
        for (a = 0; a < r.length; ) {
          var o = r[a] + '=';
          if (t.substring(0, o.length) === o) {
            var g = t.split('=');
            return (s[g[0]] = g[1]), !1;
          }
          a++;
        }
        return !0;
      }
      function n () {
        return u.join('&');
      }
      function i (t) {
        return e.safeReturn(s, t);
      }
      function a (t, n) {
        if (((n = n || []), !e.isSet(t))) return '';
        var i = /fb_|utm_|bcmt|action_object_map|action_type_map|action_ref_map|action_action_map|code/,
          a = new RegExp(_.join('|')),
          c = new RegExp(n.join('|')),
          o = t.split('&'),
          u = -1,
          s = o.length,
          g = [];
        if (
          i.test(t) ||
          (!e.isObjectEmpty(_) && a.test(t)) ||
          (!e.isObjectEmpty(n) && c.test(t))
        ) {
          for (; ++u < s; ) '' !== o[u] && r(o[u], n) && g.push(o[u]);
          return g.join('&');
        }
        return t;
      }
      function c (e) {
        return e.replace(/\r|\n|\r\n/g, '');
      }
      function o (r, n) {
        if (!e.isSet(r)) return '';
        var i = /;[^\?]*/;
        (r = t(r)),
          (r = e.decodeParam(e.checkUrlDecodingEncoding(r))),
          r.toLowerCase().indexOf('.yahoo.') !== -1 && (r = r.replace(i, '').replace(/#_=_/, '')),
          (r = c(r));
        var o = r.indexOf('#'),
          u = '',
          _ = ['ckcvi'],
          s = '';
        o > 0 && ((u = r.substring(o + 1)), (s = a(u, _)));
        var g = r.indexOf('?'),
          f = o > 0 ? o : r.length,
          l = '',
          p = '';
        g > 0 && ((l = r.substring(g + 1, f)), (p = a(l)));
        var m = g > 0 ? g : o > 0 ? o : r.length,
          E = r.substring(0, m);
        if (n) return E;
        if (
          ((r = E),
          e.isSet(p) && (r += '?' + p),
          e.isSet(s) && (r += '#' + s),
          r.indexOf('mnet_rand=r') !== -1)
        ) {
          var d = new Date().getTime();
          r = r.replace('mnet_rand=r', 'mnet_rand=' + d);
        }
        return r;
      }
      var u = [],
        _ = _mN._clkId || [],
        s = {};
      return {
        getCleanPublisherUrl: o,
        getMacroFilteredString: t,
        getStrippedClkIdFromPubUrl: n,
        getStrippedParamsFromPubUrl: i,
      };
    });
    !(function (e, t, r, n, i) {
      'use strict';
      function a () {
        return g(P);
      }
      function c (e) {
        return S.isStringSet(e);
      }
      function o (e) {
        return S.isFunction(e);
      }
      function s (e) {
        return S.encodeParam(e);
      }
      function u (e) {
        return S.decodeParam(e);
      }
      function d (e) {
        if (!c(e)) return e;
        var t = e.split('?'),
          r = u(h(t, 0)),
          n = h(t, 1);
        return c(n) ? r + '?' + n : r;
      }
      function l (e, t) {
        return S.getRandom(e, t);
      }
      function f (e) {
        return S.getHostname(e);
      }
      function m () {
        return '' + l(0, 254) + '.' + l(0, 254) + '.' + l(0, 254) + '.' + l(0, 254);
      }
      function g (e) {
        return S.isOptionSet(e);
      }
      function _ (e, t) {
        return n.locHash[t] || n.locHash[e] || '';
      }
      function p (e, t, r) {
        (n.locHash = n.locHash || {}), c(t) && (n.locHash[t] = r), c(e) && (n.locHash[e] = r);
      }
      function h (e, t) {
        return S.safeReturn(e, t);
      }
      function v (e) {
        return !!c(e) && A.test(e);
      }
      function I (e) {
        var t = 'https:' == e.substring(0, 6);
        return t ? 'https' : 'http';
      }
      function b (e) {
        var t = e.getEntity('ms');
        c(t) && (e.updateEntity('msa', t), e.updateEntity('ms', ''));
      }
      function y () {
        function b () {
          n.adTagList === i && (n.adTagList = []),
            c(Wt.crid) && (n.adTagList.push(Wt.crid), n.adTagList.length > 1 && dt('npgv', '1'));
        }
        function y (e, t) {
          n.pMap === i && (n.pMap = {}),
            c(e) && c(t) && ((n.pMap[e] = n.pMap[e] || []), n.pMap[e].push(t));
        }
        function E () {
          var e = [],
            t = (x.getItemsFromMacros('hint') || '').toLowerCase(),
            r = x.getItemsFromMacros('ctxtkeywords');
          return (
            c(t) &&
              t.indexOf('[[context_keyword]]') === -1 &&
              t.indexOf('${hint}') === -1 &&
              'none' !== t &&
              e.push(u(t)),
            r !== i && r.length > 0 && e.push(r),
            s(e.join(','))
          );
        }
        function A (e) {
          return r._custom.getCustomPublisherHint
            ? r._custom.getCustomPublisherHint(e)
            : U.getMacroFilteredString(E(), !1, r._hint);
        }
        function P () {
          return o(r._custom.getPublisherUrlFromMacro)
            ? r._custom.getPublisherUrlFromMacro()
            : x.getItemsFromMacros('requrl') || r._rUrl;
        }
        function D () {
          return (
            S.checkItemExists(r._metaOgUrl, r._cid) || S.checkItemExists(r._metaOgUrl, Wt.crid)
          );
        }
        function N () {
          return (
            S.checkItemExists(r._metaOgTitle, r._cid) || S.checkItemExists(r._metaOgTitle, Wt.crid)
          );
        }
        function q () {
          var e = x.getItemsFromMacros('auctionid'),
            t = x.getItemsFromMacros('chnm2'),
            r = x.getItemsFromMacros('bdrId');
          return c(e) && c(t) && c(r);
        }
        function H (e) {
          var t,
            r = '',
            n = 'u%3D',
            i = '%26',
            a = e.indexOf(n);
          try {
            a !== -1 &&
              ((a += n.length),
              (t = e.indexOf(i, a)),
              t !== -1 &&
                ((e = u(u(e.substring(a, t)).replace(/\+/, ' ')).replace(/\+/, ' ')), (r = e)));
          } catch (c) {}
          return r;
        }
        function V (e) {
          if (e.indexOf('http://ad.yieldmanager.com/iframe3') !== -1) return H(e);
        }
        function j () {
          var t = '';
          if ('1' === r._epa)
            try {
              var n = e.location.ancestorOrigins;
              n && n.length > 0 && c(n[n.length - 1]) && (t = n[n.length - 1]);
            } catch (i) {}
          return t;
        }
        function B () {
          var n,
            i,
            a,
            o,
            s,
            u = e.location.href,
            d = r._dUrl;
          if (!S.inIframe) return e.location.href;
          try {
            if (((i = e.top.location.href), c(i))) return i;
          } catch (l) {}
          if (((a = c(t.referrer) ? t.referrer : ''), (o = v(a)), c(a) && !o)) return a;
          if (o)
            try {
              if (((n = c(e.parent.document.referrer) ? e.parent.document.referrer : ''), !v(n)))
                return n;
            } catch (l) {}
          return (s = V(u)), c(s) ? s : d;
        }
        function X (e, t) {
          var r = S.getHostname(e),
            n = '',
            i = e;
          return t.indexOf(r) !== -1
            ? t
            : (S.shouldTryParentAccess() && ((n = z(r)), c(n) && (i = n)), i);
        }
        function W () {
          if (c(zt.conventionalPublisherUrl)) return zt.conventionalPublisherUrl;
          var e,
            t = j(),
            r = B();
          return c(t) ? (e = X(t, r)) : r;
        }
        function z (t) {
          var r,
            n = Q(e);
          r = n == e.top ? n.location.href : n.document.referrer;
          var i = S.getHostname(r);
          return S.checkItemExists(t, i) ? r : '';
        }
        function Q (t) {
          try {
            if (!t.location.href) return -1;
            if (t == e.top || !t.parent) return t;
            var r = Q(t.parent);
            return r !== -1 && (t = r), t;
          } catch (n) {
            return -1;
          }
        }
        function Y (r) {
          var n = t;
          try {
            if (S.isInIFrameCall()) {
              e.top.location.href;
              n = e.top.document;
            }
          } catch (i) {}
          var a,
            o = S.queryDOM('@LINK', n),
            s = S.queryDOM('@META', n),
            u = o.length,
            d = s.length,
            l = '',
            f = 4,
            m = { ourl: '', osrc: 'nosource' };
          for (a = 0; a < u; a++)
            if ('canonical' == o[a].getAttribute('rel')) {
              (l = o[a].getAttribute('href')), (f = 1);
              break;
            }
          for (a = 0; a < d; a++)
            f > 2 && 'og:url' == s[a].getAttribute('property')
              ? ((l = s[a].getAttribute('content')), (f = 2))
              : f > 3 &&
                'twitter:url' == s[a].getAttribute('name') &&
                ((f = 3), (l = s[a].getAttribute('content')));
          if (c(l)) {
            var g = t.createElement('a');
            (g.href = l),
              (m.ourl = U.getCleanPublisherUrl(g.href, r)),
              (m.osrc = ['', 'metatag', 'facebook', 'twitter', 'nosource'][f]);
          }
          return m;
        }
        function G () {
          return !(
            !r._noqp ||
            (!S.checkItemExists(r._noqp, Oe('cid')) && !S.checkItemExists(r._noqp, Oe('crid')))
          );
        }
        function K () {
          var e = G();
          if (c(zt.extractedPublisherUrl)) return zt.extractedPublisherUrl;
          var n;
          if (!S.shouldTryParentAccess())
            return (
              (n = t.referrer),
              (n = U.getCleanPublisherUrl(d(n), e)),
              (zt.extractedPublisherUrl = n),
              n
            );
          if (
            (o(r._custom.getPublisherUrlUnConventionalWay) &&
              (n = U.getCleanPublisherUrl(
                r._custom.getPublisherUrlUnConventionalWay(Oe('crid')),
                e
              )),
            !c(n) && D() && (n = h(Y(e), 'ourl')),
            c(n) || ((n = U.getCleanPublisherUrl(W(), e)), (zt.conventionalPublisherUrl = n)),
            c(r._epmi) && n == r._dUrl && S.shouldTryParentAccess())
          ) {
            var i = z(r._epmi);
            c(i) && (n = U.getCleanPublisherUrl(i, e));
          }
          return (
            n == r._dUrl && c(r._defPurl) && (n = r._defPurl),
            (n = d(n)),
            (zt.extractedPublisherUrl = n),
            n
          );
        }
        function J () {
          if (c(zt.finalPublisherUrl)) return zt.finalPublisherUrl;
          var e = U.getCleanPublisherUrl(P(), G());
          return c(e) || (e = Oe('erequrl')), (zt.finalPublisherUrl = e), e;
        }
        function Z (e) {
          return e.substr(0, 1000);
        }
        function $ (e) {
          if (!c(e)) return '';
          if (
            ((e = U.getMacroFilteredString(e)),
            Ae('cref', { value: Z(u(e)), isUrlEntity: !1 }),
            S.checkItemExists(r._dStrRef, r._cid) || S.checkItemExists(r._dStrRef, r._crid))
          )
            return u(e);
          var t,
            n,
            i = {
              '.google.': 'q',
              'search.yahoo.com': 'p',
              'bing.com': 'q',
              'ask.com': 'q',
              '.aol.': 'query',
            },
            a = f(e).toLowerCase(),
            o = '',
            s = '',
            d = '';
          (e = u(e.replace('#', '&'))),
            (n = new S.GetParamValueFromUrl(e)),
            c(e) && (o = I(e) + '://' + a);
          for (t in i)
            if (((d = i[t]), a.indexOf(t) !== -1 && ((s = n.getParam(d)), c(s))))
              return (Gt = s), (o += '/?' + d + '=' + s);
          return o;
        }
        function ee () {
          return o(r._custom.getReferrerUrlFromMacro)
            ? r._custom.getReferrerUrlFromMacro()
            : x.getItemsFromMacros('refurl') || r._rfUrl;
        }
        function te () {
          var n,
            i,
            a = c(t.referrer) ? t.referrer : '',
            o = S.inIframe,
            s = !!a && v(t.referrer);
          if (!o) return s ? '' : a;
          if (o && !s)
            try {
              return (
                1 === r._efmi
                  ? ((n = Q(e)), (i = n.document.referrer))
                  : (i = e.parent.document.referrer),
                c(i) && !v(i) ? i : ''
              );
            } catch (u) {}
          return '';
        }
        function re () {
          if (c(zt.extractedReferrerUrl)) return zt.extractedReferrerUrl;
          var e;
          return S.shouldTryParentAccess()
            ? (o(r._custom.getReferrerUrlUnConventionalWay) &&
                (e = $(r._custom.getReferrerUrlUnConventionalWay(Oe('crid')))),
              c(e) || (e = $(te())),
              (zt.extractedReferrerUrl = e),
              e)
            : ((e = t.referrer), (zt.extractedReferrerUrl = e), e);
        }
        function ne () {
          if (c(zt.finalReferrerUrl)) return zt.finalReferrerUrl;
          var e;
          return (
            q()
              ? (e = S.truncateUrl(x.getItemsFromMacros('refurl'), r._trunHbRef || -1, !0))
              : ((e = $(ee())), c(e) || (e = Oe('erefurl'))),
            (zt.finalReferrerUrl = e),
            e
          );
        }
        function ie () {
          var t = '';
          try {
            var r = e.document,
              n = S.isInIFrameCall();
            if (n && e.frameElement && S.shouldTryParentAccess()) {
              e.top.location.href;
              r = e.top.window.document;
            }
            var a = Object.getOwnPropertyDescriptor(r, 'referrer').get;
            a != i &&
              (delete r.referrer,
              (t = r.referrer),
              Object.defineProperty(r, 'referrer', { get: a }));
          } catch (c) {}
          return t;
        }
        function ae () {
          return '';
        }
        function ce () {
          return o(r._custom.getCustomCategory) ? r._custom.getCustomCategory(Bt) : ae();
        }
        function oe (e) {
          return (
            'object' == typeof r._customSize &&
              c(r._crid) &&
              c(r._customSize[r._crid]) &&
              (e = r._customSize[r._crid]),
            '812074803' === r._crid && '600x300' === e.toLowerCase() && (e = '600x320'),
            '517673171' === r._crid && '630x250' === e.toLowerCase() && (e = '310x317'),
            e
          );
        }
        function se () {
          if (Qt.isMobile !== i) return Qt.isMobile;
          var t = '';
          try {
            if (e.mads !== i) return (Qt.isMobile = t), t;
            c(F) && !S.inIframe && (t = ue());
          } catch (r) {}
          return (Qt.isMobile = t), t;
        }
        function ue () {
          var t = '';
          try {
            /(iphone)/.test(F)
              ? (/os 5_[1-9]/.test(F) || /os [6-9]_[0-9]/.test(F) || /os 1[0-4]_[0-9]/.test(F)) &&
                (t = '1')
              : S.isIpadDevice(F)
              ? (t = '3')
              : /android/.test(F) &&
                (/HTC6435LVW|HTC6500LVW|HTC6600LVW/i.test(F)
                  ? (t = '')
                  : (/android 4.[1-9]/.test(F) ||
                      /android [5-9].[0-9]/.test(F) ||
                      /android 9/.test(F) ||
                      /android [1][0-9]/i.test(F)) &&
                    (t = e.innerWidth >= 728 ? '5' : '2'));
          } catch (r) {}
          return t;
        }
        function de () {
          if (Qt.isMobileInsl !== i) return Qt.isMobileInsl;
          var t = '';
          try {
            if (e._mNIntMAds !== i) return (Qt.isMobileInsl = t), t;
            c(F) &&
              !S.inIframe &&
              (/(iphone)/.test(F)
                ? (/os 5_[1-9]/.test(F) ||
                    /os [6-9]_[0-9]/.test(F) ||
                    /os 1[0-9]_[0-9]/.test(F)) &&
                  (t = '1')
                : S.isIpadDevice(F)
                ? (t = '3')
                : /android (.*) mobile/.test(F)
                ? (/android 4.[1-9]/.test(F) ||
                    /android [5-9].[0-9]/.test(F) ||
                    /android 9/.test(F) ||
                    /android [1][0-9]/i.test(F)) &&
                  (t = '2')
                : /android/.test(F) &&
                  ((/android 4.[1-9]/.test(F) ||
                    /android [5-9].[0-9]/.test(F) ||
                    /android 9/.test(F) ||
                    /android [1][0-9]/i.test(F)) &&
                    (t = '4'),
                  (/android (5.1.1|4.4.3|4.0.4); (kffowi|kfgiwi|kfthwi|kfjwi).*(silk)/.test(F) ||
                    /android (6.0.1|4.4.2); (sm-t350|sm-t550|sm-t560nu|sm-t230nu)/.test(F)) &&
                    (t = '3')));
          } catch (r) {}
          return (Qt.isMobileInsl = t), t;
        }
        function le () {
          dt('startTime', new Date().getTime());
        }
        function fe () {
          (r._size = oe(r._size)),
            (r._ip2c = 2 === r._ip2c.length ? r._ip2c : 'US'),
            (r._chnm = U.getMacroFilteredString(x.getItemsFromMacros('chnm'), !1, r._chnm)),
            (r._vImp = 1),
            c(r._dVImp) &&
            ('ALL' === r._dVImp ||
              S.checkItemExists(r._dVImp, r._cid) ||
              S.checkItemExists(r._dVImp, r._crid))
              ? (r._vImp = 0)
              : S.isInIFrameCall() && S.getTopmostAccessibleWindow() != e.top && (r._vImp = 2),
            (r._kurl = me());
          var t = S.isFunction(r._custom.getUpdatedCrid) ? r._custom.getUpdatedCrid() : i;
          S.isStringSet(t) && (r._crid = t);
        }
        function me () {
          var e = c(r._apkurl) ? r._apkurl.split(',') : [],
            t = x.getItemsFromMacros('kurl'),
            n = S.any(e, function (e) {
              if (0 === t.indexOf(e)) return !0;
            });
          return (
            n && (t = 'http://' + t),
            (t = S.checkUrlDecodingEncoding(U.getMacroFilteredString(t, !0, r._kurl))),
            n && (t = t.substring(13)),
            t
          );
        }
        function ge (e) {
          var t = f(e);
          return t ? e.replace(t, r._fd) : 'http://' + r._fd;
        }
        function _e (e, t) {
          S.isSet(t) &&
            S.isSet(t.newPlaceholder) &&
            (e.adScope.addEntity('placeholder', { value: t.newPlaceholder, isUrlEntity: !1 }),
            y(e.adScope.getEntity('crid'), t.newPlaceholder));
        }
        function pe (e) {
          S.isArray(e) || (e = [e]);
          var t,
            r,
            i = [],
            a = '';
          for (
            S.each(n.privacy.getMainFlag(), function (e, t) {
              a += '&' + t + '=' + e;
            }),
              t = 0,
              r = e.length;
            t < r;
            t++
          )
            i.push(e[t] + '&hvsid=' + Ee() + a + '&vgd_end=1');
          S.logBeacons(i);
        }
        function he () {
          return x.getItemsFromMacros('bkw') || '';
        }
        function ve (e) {
          var t = x.getItemsFromMacros('misc');
          return t && t[e];
        }
        function Ie () {
          var e = x.getItemsFromMacros('kclkp'),
            t = '';
          if ('object' == typeof e) {
            for (var r in e) e.hasOwnProperty(r) && (t += '&' + r + '=' + s(e[r]));
            t = s(t);
          }
          return t;
        }
        function be (e, t) {
          if (S.isStringSet(e)) {
            var r = C.execSafe(decodeURIComponent, e);
            if ('string' != typeof r) return '';
            var n = r.split('||');
            return (
              S.any(n, function (e) {
                var r = e.split('='),
                  n = S.safeReturn(r, 0),
                  i = S.safeReturn(r, 1);
                if (n == t) return i;
              }) || ''
            );
          }
          return '';
        }
        function ye () {
          var e = [r._crid, f(Wt.requrl), 'default'];
          (this.getParam = function (t, n) {
            var a, c, o;
            for ((n !== i && 0 !== n.length) || (n = e), a = 0, c = n.length; a < c; a++) {
              o = n[a];
              try {
                if (r._customerXpath[o] !== i && r._customerXpath[o][t] !== i)
                  return r._customerXpath[o][t];
              } catch (s) {}
            }
            return '';
          }),
            (this.getTextAtXpath = function (e, t, n) {
              return r._util.getTextAtXpath
                ? c(t) && o(r._util.getBreadcrumText)
                  ? r._util.getBreadcrumText(r._util.getTextAtXpath(e), t, n)
                  : r._util.getTextAtXpath(e)
                : '';
            }),
            (this.cleanXpathText = function (e, t) {
              return (
                S.isArray(t) &&
                  S.each(t, function (t) {
                    if (c(t.search)) {
                      var r = t.replace || '';
                      e = e.replace(new RegExp(t.search), r);
                    }
                  }),
                e
              );
            });
        }
        function Ee () {
          if (!k[Wt.crid]) {
            var e = c(r._mNVisitIdData) ? r._mNVisitIdData : m(),
              t = new Date().getTime();
            n.privacy.isActionPermitted('vsid') || (e = S.setLastOctetInIPToZero(e)),
              (k[Wt.crid] = (
                '000000' +
                t +
                ('00' + S.ip2long(e)).slice(-11) +
                l(1000, 9999)
              ).slice(-32));
          }
          return k[Wt.crid];
        }
        function Te () {
          var e = l(100000000, 999999999),
            t = r.viewid || Math.round(new Date().getTime() / 1000) + '';
          return t.concat(e);
        }
        function Ae (e, t, r, n) {
          (n && !n.test(t)) ||
            (r &&
              ('object' == typeof t
                ? (t.value = S.checkUrlDecodingEncoding(t.value))
                : (t = S.checkUrlDecodingEncoding(t))),
            (Wt[e] = t));
        }
        function Pe (e, t) {
          Ae(e, { value: t, isUrlEntity: !1 });
        }
        function Oe (e, t) {
          var r = 'object' == typeof Wt[e] ? Wt[e].value : Wt[e];
          return t === !0 ? u(r) : r;
        }
        function ke (e, t) {
          var r = Yt[e];
          return t === !0 ? u(r) : r;
        }
        function xe () {
          return S.isOptionSet(r._slot)
            ? R.TAG_TYPE.ASYNC
            : S.isOptionSet(r._insl)
            ? R.TAG_TYPE.INTERSTITIAL
            : void 0;
        }
        function Se () {
          var e = n.privacy.getMainFlag();
          S.each(e, function (e, t) {
            Ae(t, e);
          });
        }
        function Ce () {
          Ae('prid', { value: r._prid, isUrlEntity: !1 }),
            Ae('cid', r._cid),
            Ae('cpcd', s(r._cpcd)),
            Ae('crid', r._crid),
            Ae('placeholder', { value: r._placeholder, isUrlEntity: !1 });
          var e = Me(r._size);
          r._szEnc && c(e)
            ? (Ae('size', { value: r._size, isUrlEntity: !1 }), Ae('ecsz', e))
            : Ae('size', r._size),
            Ae('cc', r._ip2c),
            Ae('sc', we()),
            Ae('chid', r._chid),
            Ae('chnm', r._chnm),
            Ae('ctxid', r._ctxid),
            Ae('ctxcat', r._ctxcat),
            Ae('pid', r._pid),
            Ae('tpid', r._tpid),
            Ae('https', S.isOptionSet(r._https) ? 1 : ''),
            Ae('rcf', r._rcf),
            Ae('q', A(Oe('placeholder'))),
            Ae('vif', r._vImp),
            Pe('vimpIAB', r._vimpIAB),
            Pe('erequrl', K()),
            Ae('requrl', J(), !0),
            Ae('rhstnm', r._rhstnm),
            Ae('mct', s(ce())),
            Pe('erefurl', re()),
            Pe('frefurl', ne()),
            Ae('kwrf', Oe('frefurl') !== Oe('requrl') ? Oe('frefurl') : '', !0),
            Ae('bkw', he()),
            Ae('yso', S.isOptionSet(r._yso) ? 1 : ''),
            Ae('nse', Fe()),
            Ae('vi', Te()),
            Ae('lw', S.isOptionSet(r._lw) ? 1 : ''),
            Ae('ugd', S.getUgd()),
            Ae('chnm2', r._chnm2),
            Ae('chnm3', r._chnm3),
            Ae('adt1', x.getItemsFromMacros('adt1')),
            Ae('adt2', x.getItemsFromMacros('adt2')),
            Ae('bcat', be(r._bdata, 'bcat')),
            Ae('web_view', { value: T(), isUrlEntity: !1 }),
            Ae('wsip', { value: _mNSrv._wsip, isUrlEntity: !1 }),
            Ae('bae', r._bae),
            Ae('ba', r._ba),
            Ae('bcpf', r._bcpf),
            Ae('is_amp', { value: r._ampadtag || '0', isUrlEntity: !1 }),
            a() !== !0 ||
              (!S.checkItemExists(r._jtags, r._crid) && 1 != r._jtags) ||
              Ae('jtag', 1),
            Ae('isInsl', { value: r._insl, isUrlEntity: !1 }),
            Ae('isExitInsl', { value: r._exitinsl, isUrlEntity: !1 }),
            Ae('rterm', { value: Gt, isUrlEntity: !1 }),
            Pe('ppvi', x.getItemsFromMacros('ppvi')),
            Pe('trgl', r._trgl),
            S.isSet(r._natMcro) && (Pe('ctype', Le()), Pe('bdata', r._bdata)),
            Pe('_dsdups', r._dsdups),
            y(Oe('crid'), Oe('placeholder')),
            Ue();
        }
        function Ue () {
          var e,
            t = r._diDbLper || '';
          S.isSet(t) &&
            ((e = t[Bt.getEntity('crid')] || t[Bt.getEntity('cid')] || t['default'] || ''),
            S.isNumeric(e) && e > 0 && e <= 100 && Bt.addEntityDNP('diDbLper', e));
        }
        function Le () {
          return r._ctype || x.getItemsFromMacros('ctype');
        }
        function Re () {
          var e = r._matchstr;
          return S.isStringSet(e)
            ? e.indexOf('=') !== -1 && e.indexOf('|') !== -1
              ? S.encodeParam(e)
              : e
            : '';
        }
        function Me (e) {
          var t = e.split('x');
          if (c(h(t, 0)) && c(h(t, 1))) {
            var r = parseInt(t[0], 10) + 1,
              n = parseInt(t[1], 10) + 1;
            if (!isNaN(r) && !isNaN(n)) return r + '-' + n;
          }
          return '';
        }
        function Fe () {
          var e = { c8: '', c10: '1', c12: '3', G: '5' },
            t = c(r._eNS) ? r._eNS : '';
          if (r._dcSplit) {
            var n = r._dcSplit,
              i = S.getValueBasedOnPercentageSplit(n);
            if ('undefined' != typeof i && e.hasOwnProperty(i)) return e[i];
          }
          return t;
        }
        function we () {
          var e = r._slunion.split(',');
          if (c(r._ip2sc)) return r._ip2sc;
          if ('US' === r._ip2c && S.checkItemExistsInArray(e, r._ip2allsc)) return r._ip2allsc;
          var t = r._aScCW || {},
            n = t[r._ip2c.toUpperCase()];
          return n !== i && S.checkItemExistsInArray(n, r._ip2allsc) ? r._ip2allsc : '';
        }
        function De () {
          var e = r._mNVsid;
          if (
            c(e) &&
            e.indexOf('VID') === -1 &&
            e.length > 10 &&
            n.privacy.isActionPermitted('hvsid')
          ) {
            var t = e.indexOf('V') === -1 ? 3 : 6;
            e = e.substr(0, e.length - t);
          } else e = i;
          return e;
        }
        function Ne () {
          var e = De(),
            t = r._mNVsid;
          if (c(t) && c(e)) return t.substring(e.length);
        }
        function qe () {
          var e,
            t = r._mNVsid;
          return (
            c(t) &&
              t.indexOf('V') > -1 &&
              t.indexOf('VID') === -1 &&
              t.length > 10 &&
              n.privacy.isActionPermitted('hvsid') &&
              (e = t.substr(t.length - 2, 2)),
            e
          );
        }
        function He () {
          var e,
            t,
            n = '';
          return (
            c(r._oref) &&
              ((e = f(Wt.requrl)),
              (t = new RegExp(e + ':([^|]+)').exec(u(r._oref))),
              (n = null !== t ? t[1] : null)),
            c(n) || (n = Oe('frefurl')),
            n
          );
        }
        function Ve () {
          var e = x.getItemsFromMacros('misc');
          if (e && 'object' == typeof e) {
            var t = ['matchString'],
              r = S.encodeParam(S.buildUrlParameters(e, i, i, t));
            c(r) && Ae('misctemp', r);
          }
        }
        function je () {
          var e = Oe('requrl', !0),
            t = x.getItemsFromMacros('misc');
          if (!t) return e;
          if (S.isStringSet(t.query)) {
            var r = t.query;
            t.query = r.replace(/[^A-Za-z0-9\s\-]+/g, '');
          }
          var n = encodeURI(S.buildUrlParameters(t));
          if (e.indexOf('?') !== -1) {
            var i = e.indexOf('?');
            return e.substring(0, i + 1) + n + '&' + e.substring(i + 1);
          }
          if (e.indexOf('#') !== -1) {
            var a = e.indexOf('#');
            return e.substring(0, a) + '?' + n + e.substring(a);
          }
          return (e += '?'), e + n;
        }
        function Be () {
          if (
            (Ae('CAMP_ID', U.getMacroFilteredString(x.getItemsFromMacros('campid'), !1, '')),
            Ae(
              'PRICE_CENTS',
              U.getMacroFilteredString(x.getItemsFromMacros('pricecents'), !1, '')
            ),
            Ae('c', s(r._c)),
            g(r._rtd))
          ) {
            var e = Oe('erequrl'),
              t = Oe('erefurl');
            Ae('rtd', 1), Ae('n_req_url', e, !0), e !== t && Ae('n_ref_url', t, !0);
          }
        }
        function Xe () {
          return Le() || x.getItemsFromMacros('drtbs') || 0;
        }
        function We () {
          var e = S.getRequireModule('common-rendering-helper');
          e.loadL2AsIframeWithSrc(Wt.crid) && Pe('tv2SrcFull', !0),
            Pe('tv2e', r._tagV2e),
            dt('l2type', 'setting'),
            Ae('bid', x.getItemsFromMacros('buid')),
            Ae('katid', pt('katid')),
            Ae('katbid', pt('katbid')),
            Xt.addL3CallParamsToEntity();
        }
        function ze () {
          var t = '',
            u = '';
          if (
            (g(r._insl) || (e.mads !== i && Ae('mdEx', '1'), (t = se())),
            g(r._insl) && (u = de()),
            S.isSet(ue()) && Ae('mps', 1),
            Ae('ms', t),
            Ae('mis', u),
            S.safeReturn(r._inslntdy, Wt.crid) && Ae('inslntdy', '1'),
            c(r._bdrId) && Ae('bdrId', r._bdrId),
            o(r._util.getTextAtXpath) &&
              (Ae('tl', s(Ke(new ye().getXpathParams(ye.type.TITLEXPATH)))),
              Ae(
                'bct',
                s(
                  Ke(
                    new ye().getXpathParams(
                      ye.type.BRD_CRM_XPATH,
                      new ye().getXpath(ye.type.SAPERATOR),
                      i,
                      new ye().getXpath(ye.type.CLEAN_XPATH)
                    )
                  )
                )
              ),
              Ae('ctsp', s(new ye().getXpathParams(ye.type.CITYSTPC_XPATH))),
              Ae('gen', s(new ye().getXpathParams(ye.type.GENERIC_XPATH)))),
            Ae('oref', { value: He(), isUrlEntity: !1 }, !0),
            r._rtbs && g(r._rtbs._sCck) && Ae('pubCallDef', { value: !0, isUrlEntity: !1 }),
            Ae('isAsync', { value: a(), isUrlEntity: !1 }),
            n.superTag &&
              n.superTag[Wt.crid] &&
              n.superTag[Wt.crid].concrid &&
              Ae('concrid', { value: n.superTag[Wt.crid].concrid }),
            (n[Oe('vi')] = n[Oe('vi')] || {}),
            r && r._canTags && ('1' == r._canTags || S.checkItemExists(r._canTags, r._crid)))
          ) {
            var d = Y(G());
            c(h(d, 'ourl')) && Ae('ourl', { value: d.ourl, isUrlEntity: !0 }, !0),
              Ae('osrc', { value: d.osrc, isUrlEntity: !0 });
          }
          r._disYBNCA && r._disYBNCA.indexOf(Wt.crid) !== -1 && Ae('ignybn', 1),
            r._mxnf && 1 == r._mxnf && Ae('mxnf', 1),
            Xe() > 0 && (Ae('disrtbs', { value: !0, isUrlEntity: !1 }), dt('drtbs', Xe())),
            (1 == r._fl1p ||
              S.checkItemExists(r._fl1p, Wt.cid) ||
              S.checkItemExists(r._fl1p, Wt.crid)) &&
              Pe('fl1logpxl', !0),
            We(),
            c(r._oHst) && dt('l1ac', r._oHst);
          var l = 1;
          if ((r._aRcl === _mNSrv._sRcl && (l = 0), lt('l1rakh', r._aRcl), dt('l1ch', l), Ge())) {
            var f = it();
            Ae('kttle', { value: s(f), isUrlEntity: !0 });
          }
          Qe() && S.isShadowDomSupported() && Ye() && Ae('sds', 1);
        }
        function Qe () {
          return 1 == Oe('jtag') || !1;
        }
        function Ye () {
          return !(S.isSet(r._divjtags) && 1 == r._divjtags);
        }
        function Ge () {
          var e = S.getHostname(Oe('requrl', !0)),
            t = c(r._kaMtTl) ? r._kaMtTl.split(',') : [],
            n = S.any(t, function (t) {
              if (c(e) && e.indexOf(t) !== -1) return !0;
            });
          return (
            S.checkItemExists(r._kaMtTl, Wt.crid) ||
            S.checkItemExists(r._kaMtTl, Wt.cid) ||
            n === !0
          );
        }
        function Ke (e) {
          return (e = e.replace(/[,&>\/]/g, ' ').replace(/\s+/g, ' '));
        }
        function Je (e) {
          return S.checkItemExists(r._L2HunHe, e.crid)
            ? '100%'
            : r._L2CusHe && r._L2CusHe[e.crid]
            ? r._L2CusHe[e.crid]
            : r._L2CusHe && r._L2CusHe[e.cid]
            ? r._L2CusHe[e.cid]
            : '';
        }
        function Ze (e, t, i, a, c) {
          var o = Oe('vi'),
            s = De(),
            u = Ee(),
            d = Oe('cid'),
            l = Oe('crid');
          (i = i || ie()), (a = a || Oe('frefurl'));
          var f = '';
          S.each(n.privacy.getMainFlag(), function (e, t) {
            f += '&' + t + '=' + e;
          });
          var m =
            r._rdUrl +
            f +
            '&cid=' +
            d +
            '&crid=' +
            l +
            '&requrl=' +
            e +
            '&cpurl=' +
            encodeURIComponent(t) +
            '&ref=' +
            encodeURIComponent(a) +
            '&nref=' +
            encodeURIComponent(i) +
            '&reason=' +
            c +
            '&vi=' +
            o +
            '&hvsid=' +
            u +
            '&vsid=' +
            s +
            '&rand=' +
            new Date().getTime();
          M.logImageBeacons([m]);
        }
        function $e () {
          if (r._rdpR && r._rdpR > 0) {
            var e = Oe('requrl'),
              t = Oe('erequrl'),
              n = ie(),
              i = Oe('frefurl'),
              a = 0;
            S.matchDomains(decodeURIComponent(e), t) || (dt('purld', 1), (a += 1)),
              c(n) && c(i) && !S.matchDomains(i, n) && (a += 10),
              a > 0 && 1 === l(1, r._rdpR) && Ze(e, t, n, i, a);
          }
        }
        function et (e) {
          var t = f(e);
          if (c(t)) {
            var r = t.split('.');
            if (r.length > 2) {
              var n = r[r.length - 1],
                i = r[r.length - 2];
              return (
                c(i) &&
                  i.length <= 3 &&
                  c(r[r.length - 3]) &&
                  ((n = i + '.' + n), (i = r[r.length - 3])),
                i + '.' + n
              );
            }
          }
          return '';
        }
        function tt () {
          var e = S.getRequireModule('l3transmitter');
          Xt =
            (e && e.getL3TransmitterObject && e.getL3TransmitterObject(Oe('vi'), Ae, dt)) || null;
        }
        function rt () {
          var e = Le();
          S.isSet(e) &&
            (1 == e ? Xt.addL3CallParam('ntv', '1') : 0 == e && Xt.addL3CallParam('ntv', '0')),
            Xt.addL3CallParam('matchstring', S.decodeParam(Re())),
            Xt.addL3DecisionParam('kwchost', x.getItemsFromMacros('adomain')),
            Xt.addL3DecisionParam('kwdArr', x.getItemsFromMacros('kd')),
            Xt.addL3DecisionParam('csip', r._csip),
            Xt.addL3CallParam('inapp', r._inapp),
            Xt.addL3DecisionParam('clkIdQs', U.getStrippedClkIdFromPubUrl()),
            Xt.addL3DecisionParam('fgbr', ve('fgbr')),
            1 == Bt.getEntity('jtag') && Xt.addL3LogParam('jtag', 1);
          var t = U.getStrippedParamsFromPubUrl('ckcvi');
          S.isStringSet(t) && Xt.addL3DecisionParam('ckcvi', t),
            Xt.addL3DecisionParam('kClkUP', Ie());
        }
        function nt () {
          var e = r._custom;
          if (
            (c(Oe('cref')) && dt('cref', s(Oe('cref'))),
            c(Oe('web_view')) && dt('web_view', Oe('web_view')),
            'TB55J5R' === r._tpid && $t('kwrf', Oe('erequrl'), !0),
            !c(r._fd) && c(h(r._sfd, r._crid)) && (r._fd = h(r._sfd, r._crid)),
            !c(r._fd) && r._upst && c(u(Wt.requrl)) && (r._fd = et(u(Wt.requrl))),
            c(r._fd) && $t('requrl', ge(u(Wt.requrl)), !0),
            S.checkItemExists(r._spu, r._crid) || S.checkItemExists(r._spu, r._cid))
          ) {
            var n = Oe('requrl', !1);
            dt('requrl', n),
              (n = t.location.protocol + '//' + f(n) + '/'),
              $t('requrl', n, !0),
              Ae('requrlStripped', { value: !0, isUrlEntity: !1 });
          }
          if (g(r._lo) && c(Gt)) {
            var i = Wt.kwrf;
            $t('kwrf', r._dRef || ''), dt('ak', Gt), dt('ar', i);
          }
          if (
            (c(r._miscAppend) &&
              ('1' == r._miscAppend || S.checkItemExists(r._miscAppend, r._crid)) &&
              $t('requrl', je(), !0),
            c(r._miscTempAppend) && '1' == r._miscTempAppend && Ve(),
            o(e.getCustomizedPublisherUrl) && $t('requrl', e.getCustomizedPublisherUrl(Bt), !0),
            S.checkItemExists(r._appMtTl, r._crid) || S.checkItemExists(r._appMtTl, r._cid))
          ) {
            var a = it();
            c(a) && $t('requrl', S.appendHashParamToUrl(Oe('requrl', !0), 't', a), !0);
          }
          o(e.getCustomizedReferrerUrl) && $t('kwrf', e.getCustomizedReferrerUrl(Bt), !0),
            o(e.setExtraParams) && e.setExtraParams(Bt),
            o(e.alterDOM) && e.alterDOM(),
            o(e.injectCustomScripts) && e.injectCustomScripts(Bt),
            o(e.changeIframeDimensions) && e.changeIframeDimensions(Bt),
            !r._skrf || (1 != r._skrf[r._cid] && 1 != r._skrf[r._crid]) || $t('kwrf', '', !0),
            !r._sksc || (1 != r._sksc[r._cid] && 1 != r._sksc[r._crid]) || $t('sc', ''),
            $e();
          var d = Je(Wt);
          S.isStringSet(d) && Pe('customL2Height', d),
            dt('buid', x.getItemsFromMacros('buid')),
            _t();
        }
        function it () {
          var e,
            r = S.queryDOM('@META'),
            n = r.length,
            i = 5,
            a = '';
          for (e = 0; e < n; e++)
            'og:title' == r[e].getAttribute('property')
              ? ((a = r[e].getAttribute('content')), (i = 1))
              : i > 2 && 'twitter:title' == r[e].getAttribute('name')
              ? ((a = r[e].getAttribute('content')), (i = 2))
              : i > 3 && 'title' == r[e].getAttribute('name')
              ? ((a = r[e].getAttribute('content')), (i = 3))
              : i > 4 && c(t.title) && ((a = t.title), (i = 4));
          return a;
        }
        function at () {
          return a() && !g(Kt) ? r._crid : O;
        }
        function ct () {
          (n.oref = s(Oe('frefurl'))),
            n.EntityCache.store(at(), Wt, Bt),
            n.EntityCache.store(Bt.getEntity('vi'), Wt, Bt);
        }
        function ot (e) {
          var t = Wt;
          return S.isSet(e) && (t = S.merge(t, e)), S.buildUrlParameters(t);
        }
        function st (e) {
          var t = Yt;
          return S.isSet(e) && (t = S.merge(t, e)), S.buildUrlParameters(t);
        }
        function ut () {
          return Yt;
        }
        function dt (e, t) {
          c(e) && S.isSet(t) && (Yt[e] = t);
        }
        function lt (e, t) {
          var r = 'vgd_';
          c(e) && S.isSet(t) && (Yt[r + e] = t);
        }
        function ft (e) {
          if (c(e)) return Yt[e];
        }
        function mt () {
          var e = {};
          return (
            S.each(Yt, function (t, r) {
              0 === r.indexOf('vgd_') && (e[r] = t);
            }),
            e
          );
        }
        function gt () {
          if (gt.data) return gt.data;
          try {
            gt.data = JSON.parse(ve('kat'));
          } catch (e) {
            return {};
          }
          return gt.data;
        }
        function _t () {
          var e = gt();
          e &&
            'object' == typeof e &&
            !S.isObjectEmpty(e) &&
            (Ae('katpre', 1),
            S.each(e, function (e, t) {
              dt(t, S.encodeParam(e));
            }));
        }
        function pt (e) {
          var t = gt();
          if (t && 'object' == typeof t && !S.isObjectEmpty(t)) return t[e] || '';
        }
        function ht () {
          var e = n.privacy.getParamsToLog();
          S.each(e, function (e, t) {
            lt(t, e);
          });
        }
        function vt () {
          var t = Tt(),
            i = x.getItemsFromMacros('lineItemId'),
            a = Re(),
            o = x.getItemsFromMacros('vstrid');
          if (
            (dt('sttm', new Date().getTime()),
            dt('upk', n.upk),
            dt('hvsid', Ee()),
            dt('acid', r._acid),
            dt('verid', At()),
            dt('pvi', Et()),
            dt('dms', x.getItemsFromMacros('dms')),
            c(r._bdata) && lt('bdata', r._bdata),
            c(a) && (dt('matchstring', a), lt('matchstr', a)),
            c(r._ip2allsc) && lt('sc', r._ip2allsc),
            c(r._sbdrId) && dt('sbdrId', r._sbdrId),
            c(r._c) && dt('rtbdn', s(r._c)),
            c(t) && dt('convtrack', t),
            c(i) && dt('lineitemid', s(i)),
            c(o) ? dt('vstrid', s(o)) : dt('vstrid', De()),
            lt('vsidv', qe()),
            dt('vsidtv', Ne()),
            c(r._slab))
          ) {
            var u = S.getRequireModule('mnet-session-ab-test');
            if (u) {
              var d = u.addSupportForSessionABTestIfEnabled(Bt);
              d && (bt(!0), (Jt = !0));
            }
          }
          if (
            (c(r._mnsd) && !Jt && bt(),
            c(r._kurl) && dt('kurl', r._kurl),
            S.isInIFrameCall() && dt('infr', '1'),
            S.isTopWindowAccessible(e) || dt('twna', '1'),
            N())
          ) {
            var l = it(),
              f = '';
            c(l) && ((f = ft('kbbq')), dt('kbbq', f + encodeURIComponent('&ogtitle=' + l)));
          }
          It(), c(r._dma) && dt('dma', r._dma);
          var m = x.getItemsFromMacros('stime');
          S.isSet(m) && dt('stime', m),
            lt('hbbktid', x.getItemsFromMacros('bcktid')),
            lt('hbReqId', _mNSrv._hbReqId),
            lt('ppvi', Oe('ppvi')),
            lt('ecrid', x.getItemsFromMacros('ecrid')),
            dt('l1hcsd', r._l1HcSd),
            ht();
        }
        function It () {
          var e = r._ipwpx;
          if ((e && e[Oe('crid')] && (e = e[Oe('crid')]), e && c(e.kw) && c(e.ad))) {
            var t = ve('iponweb_bid_id');
            c(t) && dt('iowid', t);
          }
        }
        function bt (t) {
          var i = f(Oe('requrl'));
          if (
            'undefined' != typeof x &&
            o(x.mngc) &&
            i.indexOf('.yahoo.com') === -1 &&
            i.indexOf('.yahoo.net') === -1 &&
            i.indexOf('.flickr.com') === -1
          ) {
            if (c(r._optout)) return void yt(0, 0);
            var a,
              s,
              u,
              d,
              l,
              m,
              g,
              _,
              p = 0;
            (u = 'session_depth'),
              (d = x.mngc(u)),
              (g = Oe('crid')),
              (_ = f(e.location.href)),
              t === !0 && (d = ''),
              c(d) || (d = _ + '=0'),
              (a = d.split('|'));
            for (var h = 0, v = a.length; h < v; h++)
              isNaN(a[h].split('=')[0]) &&
                ((s = parseInt(a[h].split('=')[1])),
                c(n._mnddepth) || (s++, (a[h] = _ + '=' + s), (n._mnddepth = '1')),
                (m = s)),
                a[h].split('=')[0] == g &&
                  ((s = parseInt(a[h].split('=')[1]) + 1), (l = s), (a[h] = g + '=' + s), (p = 1));
            0 == p && ((l = 1), a.push(g + '=1')), (d = a.join('|')), yt(l, m), x.mnssc(u, d, 30);
          }
        }
        function yt (e, t) {
          var r = '',
            n = '';
          return (
            c(ft('tdAdd[]')) && (r = ft('tdAdd[]')),
            c(ft('kbbq')) && (n = ft('kbbq')),
            0 == e
              ? (dt('tdAdd[]', r + encodeURIComponent('|@|sde=1')),
                void dt('kbbq', n + encodeURIComponent('&sde=1')))
              : (dt(
                  'tdAdd[]',
                  r + encodeURIComponent('|@|sde=1|@|adepth=' + e + '|@|ddepth=' + t)
                ),
                void dt('kbbq', n + encodeURIComponent('&sde=1&adepth=' + e + '&ddepth=' + t)))
          );
        }
        function Et () {
          var e = x.getItemsFromMacros('pvi');
          if (c(e)) return e;
        }
        function Tt () {
          var e = x.getItemsFromMacros('convTrack'),
            t = '';
          if ('object' == typeof e) {
            for (var r in e) e.hasOwnProperty(r) && (t += '&' + r + '=' + s(e[r]));
            t = s(t);
          }
          return t;
        }
        function At () {
          var e = x.getItemsFromMacros('versionId');
          return c(e) && parseInt(e, 10) === +e ? e : r._verId;
        }
        function Pt (e) {
          p(Wt.crid, Wt.vi, e);
        }
        function Ot () {
          return _(Wt.crid, Wt.vi);
        }
        function kt (e) {
          '451424056|272424777|737715183|399705155|386733361'.indexOf(Wt.cid) !== -1 &&
            (e.style = 'margin-bottom:-3px;'),
            '274752815' === Wt.crid && (e.style = 'margin-left:-10px;');
        }
        function xt (e, t, n, i, a) {
          var o = {},
            s = {},
            u = i,
            d = st(a);
          return (
            c(d) && (u += '#' + d),
            (o.marginwidth = '0'),
            (o.marginheight = '0'),
            (o.id = e),
            (o.scrolling = 'no'),
            (o.frameborder = '0'),
            (o.height = n),
            (o.width = t),
            c(r._ifrT) && (o.title = r._ifrT),
            (s.src = u),
            (o.allowtransparency = 'true'),
            S.inIframe === !1 && g(r._vImp) && !w && (s.onload = ''),
            kt(o),
            { d: o, e: s }
          );
        }
        function St () {
          var e = Dt(),
            r = 0 === e.indexOf('https'),
            n = 'https:' == t.location.protocol;
          return !(!n || r);
        }
        function Ct () {
          if (o(r._custom.getCustomFO) && r._custom.getCustomFO(Bt)) return !0;
          if (g(r._staticFo))
            return (
              L.logFailover(
                r._foSettings.REASON.CUSTOMER_SUSPENDED,
                r._foSettings.ACTION.ABORT_L2_LOAD,
                Bt
              ),
              !0
            );
          if (g(Oe('flovr')))
            return (
              c(Bt.getEntity('l1flres')) &&
                L.logFailover(Bt.getEntity('l1flres'), r._foSettings.ACTION.ABORT_L2_LOAD, Bt),
              !0
            );
          if (St())
            return (
              L.logFailover(
                r._foSettings.REASON.WINDOW_PROTOCOL_CONFLICT,
                r._foSettings.ACTION.ABORT_L2_LOAD,
                Bt
              ),
              !0
            );
          if (Lt())
            return (
              L.logFailover(
                r._foSettings.REASON.UA_BLOCKED,
                r._foSettings.ACTION.ABORT_L2_LOAD,
                Bt
              ),
              !0
            );
          if (Ut())
            return (
              L.logFailover(
                r._foSettings.REASON.MNET_OPTOUT,
                r._foSettings.ACTION.ABORT_L2_LOAD,
                Bt
              ),
              !0
            );
          if (Zt.blockIfAdPreferenceSet(Bt))
            return (
              L.logFailover(
                r._foSettings.REASON.CLOSE_AD_PREFERENCE,
                r._foSettings.ACTION.ABORT_L2_LOAD,
                Bt
              ),
              !0
            );
          if (Rt())
            return (
              L.logFailover(
                r._foSettings.REASON.INTERSCROLLER_NON_MOBILE_UGD,
                r._foSettings.ACTION.ABORT_L2_LOAD,
                Bt
              ),
              !0
            );
          if (Mt())
            return (
              L.logFailover(
                r._foSettings.REASON.NON_TIER_1_COUNTRY,
                r._foSettings.ACTION.ABORT_L2_LOAD,
                Bt
              ),
              !0
            );
          var e = n.privacy.getFailoverObject();
          return (
            !(S.isObjectEmpty(e) || !S.isStringSet(e.reason)) &&
            (L.logFailover(e.reason, r._foSettings.ACTION.ABORT_L2_LOAD, Bt), !0)
          );
        }
        function Ut () {
          try {
            return c(r._optout) && c(r._opt_fo);
          } catch (e) {}
          return !1;
        }
        function Lt () {
          var e = !1;
          try {
            r._uBRxs &&
              S.isArray(r._uBRxs) &&
              (e = S.any(r._uBRxs, function (e) {
                if ('string' == typeof e && Ft(e)) return !0;
              }));
          } catch (t) {}
          return !!e;
        }
        function Rt () {
          return S.isSet(Bt.getEntity('flIntrsclr'));
        }
        function Mt () {
          return !!S.isSet(r._cfo) && S.checkItemExistsInArray(r._cfo, Bt.getEntity('cc'));
        }
        function Ft (e) {
          var t = new RegExp(e, 'i'),
            n = !1;
          return (
            S.ua && 'string' == typeof S.ua && (n = t.test(S.ua)),
            !n && r._uAk && 'string' == typeof r._uAk && (n = t.test(r._uAk)),
            n
          );
        }
        function wt () {
          return !!o(r._custom.shouldAwaitDOMLoad) && r._custom.shouldAwaitDOMLoad(Bt);
        }
        function Dt () {
          return Bt.getEntity('customL2Host') || r._dUrl;
        }
        function Nt () {
          var e = at(),
            t = Dt() + '/',
            i = { host: t, placeholder: r._placeholder, cacheKey: e };
          return wt()
            ? void n.DOMLoadObserver.onDOMLoad(function () {
                S.triggerAdTagEvent(e, 'loadTag', !1, i);
              })
            : void S.triggerAdTagEvent(e, 'loadTag', !1, i);
        }
        function qt () {
          var t = at();
          c(r._prvDetails) &&
            S.eventLib.addEvent(e, 'load', function () {
              S.triggerAdTagEvent(t, 'submitSyncRequest', !0, 'prv');
            });
        }
        function Ht () {
          for (var e = n[O].modArr, t = 0, r = e.length, i = at(); t < r; )
            S.triggerAdTagEvent(O, 'load::' + e[t++], a(), { cacheKey: i });
          S.triggerAdTagEvent(O, 'load::Renderer', a(), { cacheKey: i }),
            S.triggerAdTagEvent(O, 'modulesLoaded', a(), { cacheKey: i });
        }
        function Vt () {
          var e = S.getRequireModule('privacy-event-channel');
          e && S.isFunction(e) && new e(Bt).init();
        }
        function jt (e) {
          if (!Oe('rtbs')) return null;
          var t = Oe('crid'),
            r = '_mN_dy_' + t,
            a = h(n, r);
          return a ? h(a, e) : i;
        }
        var Bt,
          Xt,
          Wt = {},
          zt = {},
          Qt = {},
          Yt = {},
          Gt = '',
          Kt = !1,
          Jt = !1,
          Zt = _cmL1Require(['mnet-ad-preference'])[0];
        (ye.type = {
          TITLEXPATH: { defaultVal: '', keyName: 'titlexpath' },
          BRD_CRM_XPATH: { defaultVal: '', keyName: 'brd_crm_xpath' },
          CITYSTPC_XPATH: { defaultVal: '', keyName: 'citystpc_xpath' },
          SAPERATOR: { defaultVal: '', keyName: 'saperator' },
          GENERIC_XPATH: { defaultVal: '', keyName: 'generic_xpath' },
          CLEAN_XPATH: { defaultVal: [], keyName: 'clean_xpath' },
        }),
          (ye.prototype.getXpath = function (e) {
            return this.getParam(e.keyName);
          }),
          (ye.prototype.getXpathParams = function (e, t, r, n) {
            return this.cleanXpathText(this.getTextAtXpath(this.getXpath(e), t, r), n);
          });
        var $t = Ae;
        (Bt = {
          uid: at(),
          addEntity: Ae,
          addEntityDNP: Pe,
          updateEntity: $t,
          addParamtoLocHash: dt,
          getParamFromLocHash: ft,
          addVogonParamtoLocHash: lt,
          getVogonParamsFromLocHash: mt,
          getIframeAttrs: xt,
          logLoggingBeacons: pe,
          cacheHashLoginMNDetails: Pt,
          getFinalSourceParams: ot,
          getFinalHashLogParams: st,
          getFinalHashLogParamsAsObject: ut,
          getPublisherUrlConventionalWay: W,
          getEntity: Oe,
          updateAdTagsList: b,
          getHost: Dt,
          getVisitId: Ee,
          getVisitorId: De,
          getHashEntity: ke,
          getRTBSDetails: jt,
          getReferrerUrlConventionalWay: te,
          getCachedLocHashInMNDetails: Ot,
          createPixelCallForPublisherUrlDiscrepancy: Ze,
          tagType: xe(),
        }),
          (this.bootstrap = function () {
            le(),
              fe(),
              Se(),
              Ce(),
              tt(),
              rt(),
              Be(),
              ze(),
              nt(),
              vt(),
              S.addToEventQueue('beforeLoad', at(), L.logPing),
              S.addToEventQueue('beforeLoad', at(), Xt.addL3ParamsToLocHash),
              S.addToEventQueue('updatePlaceholder', S.getAdTagUID(), _e),
              ct(),
              Ht(),
              Ct() || (Vt(), Nt(), qt());
          }),
          (this.initialize = function () {
            fe(), Se(), Ce(), Be(), ze(), nt(), (Kt = !0), ct();
          });
      }
      function E () {
        return a()
          ? void S.addToEventQueue('slotDefined', 'gbl', function () {
              new y().bootstrap();
            })
          : void new y().bootstrap();
      }
      function T () {
        const $___old_fd7d6f2ad5ccf0b4 = {}.constructor.getOwnPropertyDescriptor(
          Navigator.prototype,
          'userAgent'
        );
        try {
          if ($___old_fd7d6f2ad5ccf0b4)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___stub_9d7b4eb662ee43f5.userAgent
            ));
          return function () {
            var e = navigator.userAgent;
            if (
              S.checkItemExists(e, 'wv)') ||
              (S.checkItemExists(e, 'Android 4.') && S.checkItemExists(e, 'Version/'))
            )
              return 'ANDROID_WEBVIEW';
            var t = /iPhone|iPad/i.test(e);
            return t && S.checkItemExists(e, 'Mobile/') && !S.checkItemExists(e, 'Safari/')
              ? 'IOS_WEBVIEW'
              : null;
          }.apply(this, arguments);
        } finally {
          if ($___old_fd7d6f2ad5ccf0b4)
            ({}.constructor.defineProperty(
              Navigator.prototype,
              'userAgent',
              $___old_fd7d6f2ad5ccf0b4
            ));
        }
      }
      var A = new RegExp(
          /\/advertpro|fastclick\.net|openx\.com|rubiconproject\.com|yieldmanager|doubleclick|\/adi\/|\/ad\/|ad_terra|banner\.php|\/web_banners\/|admeld\.com|atdmt\.com|247realmedia\.com|\/ads\.|\/ad\.|\/ad\?|\/ads\/|adsframe|medianet\.php|zedo\.com|\/adsframe\/|a1\.interclick\.com|otcads\.com|delivery\.huddler\.com|adserver\.duetads\.com|anchorfree\.com|rss2search\.com|ib\.adnxs\.com|delivery\/|\.microsoftadvertisingexchange\.|\.googleusercontent\.com|sharethrough\.com/i
        ),
        P = r._slot,
        O = _mN_Idf,
        k = {},
        x = r._util,
        S = r.util,
        C = r._mNRP || {},
        U = _cmL1Require(['urlcleaner'])[0],
        L = _cmL1Require(['l1logger'])[0],
        R = _cmL1Require(['l1-constants'])[0],
        M = r._util._logUtil(),
        F = S.ua,
        w = /(opera)(?:.*version)?[ \/]([\w.]+)/.test(F);
      n.DOMLoadObserver.getInstance().onDOMLoad(function () {}),
        (n.addToEventQueue = S.addToEventQueue),
        (n.triggerAdTagEvent = S.triggerAdTagEvent),
        (n.getLocHash = _),
        (n.updateLocHash = p),
        (n.addToDelayedEventQueue = S.addToDelayedEventQueue),
        (n.triggerAdTagEventWhenQueued = S.triggerAdTagEventWhenQueued),
        (n.triggerMultiLayerAdTagEventWhenQueued = S.triggerMultiLayerAdTagEventWhenQueued),
        (n.removeFromEventQueue = S.removeFromEventQueue),
        (n.disableOldDockedUnit = b),
        (n.EntityCache =
          n.EntityCache ||
          (function () {
            var e = {};
            return {
              store: function (t, r, n) {
                e['entCac_' + t] = { entities: r, adScope: n };
              },
              get: function (t) {
                return 'entCac_' + t in e ? e['entCac_' + t] : {};
              },
            };
          })()),
        (a() && n.isL1Executed) ||
          (a() && (n.isL1Executed = !0),
          S.addToEventQueue('dependencyResolved', O, E),
          0 === n[O].depCtr && S.triggerAdTagEvent(O, 'dependencyResolved'));
    })(window, document, _mN, _mNDetails);
    window._cmL1Define('l3transmitter', [_mN], function (t) {
      'use strict';
      function i (i, n) {
        function e () {
          (s = i), (a = n);
        }
        var a,
          s,
          o = {},
          c = {},
          S = {},
          d = t.util;
        (this.addL3DecisionParam = function (t, i) {
          d.isStringSet(t) && d.isSet(i) && (c[t] = i);
        }),
          (this.addL3LogParam = function (t, i, n) {
            (n = void 0 === n || n),
              (n = !d.isSet(n) || !!n),
              d.isStringSet(t) && d.isSet(i) && (n ? (S[r + t] = i) : (S[t] = i));
          }),
          (this.addL3CallParam = function (t, i) {
            d.isStringSet(t) && d.isSet(i) && (o[t] = i);
          }),
          (this.addL3ParamsToLocHash = function () {
            a('l3c', d.isJSONSupported() ? d.encodeParam(JSON.stringify(o)) : ''),
              a('l3d', d.isJSONSupported() ? d.encodeParam(JSON.stringify(c)) : ''),
              a('l3l', d.isJSONSupported() ? d.encodeParam(JSON.stringify(S)) : '');
          }),
          (this.addL3CallParamsToEntity = function () {
            d.each(o, function (t, i) {
              s(i, d.encodeParam(t));
            });
          }),
          e();
      }
      function n (t, n, r) {
        return (
          (n = n || function () {}),
          (r = r || function () {}),
          a.isStringSet(t) && !a.isSet(e[t]) && (e[t] = new i(n, r)),
          e[t]
        );
      }
      var e = {},
        a = t.util,
        r = 'vgd_';
      return { getL3TransmitterObject: n };
    });
    window._cmL1Define('mnet-gdpr', [_mN], function (e) {
      function t (t) {
        function i () {
          r(), a();
        }
        function r () {
          try {
            var e,
              t = decodeURIComponent(window.top.location.href) || '';
            e = t.match(/force_mngdpr=1/);
          } catch (i) {}
          n.isSet(e) && (s = 1);
        }
        function o () {
          return (n.isSet(c) && c.getCMPData()) || null;
        }
        function a () {
          var e = n.getRequireModule('custom-cmp');
          n.isSet(e) &&
            n.isFunction(e.CMPClass) &&
            ((c = new e.CMPClass()),
            e.callOnCMPLoaded(function () {
              c.init(), (P = o() || null), (h = n.isSet(P) ? 1 : 0);
            }));
        }
        var c,
          s = e._gdpr || 0,
          u = 'GDPR',
          l = 'gdpr',
          g = 'gdpr',
          p = 'nonPersonalized',
          f = 'gd',
          d = this,
          P = null,
          h = 0,
          S = n.getRequireModule('mnet-tcf-manager'),
          m = { CONSENT_STRING_PRESENT: 'gdprcs', TCF_CMP_PRESENT: 'tcf_cmp' };
        (this.getDisableCookieFlag = function () {
          if (t.dcfp && n.isSet(t.dcfp[u]) && 1 == t.dcfp[u]) return l;
        }),
          (this.getName = function () {
            return u;
          }),
          (this.isApplicable = function () {
            return s > 0 || (S && S.isGdprApplicable());
          }),
          (this.getLookupKey = function () {
            if (d.isApplicable()) return u;
          }),
          (this.getMainFlag = function () {
            var e = {};
            return (e[g] = d.isApplicable() ? '1' : '0'), e;
          }),
          (this.getLDPFlagForHB = function () {}),
          (this.getMacrosForHB = function () {
            var e = {};
            return (e[f] = d.isApplicable()), e;
          }),
          (this.callHBApis = function () {
            var e = {},
              t = n.getRequireModule('adapter-constants');
            return (
              n.isSet(P) &&
                n.isSet(t) &&
                ((e[t.AEV.API8_SET_GDPR_APPLICABLE] = [P.gdprApplies]),
                (e[t.AEV.API9_SET_GDPR_CONSENT] = [P.consentData])),
              e
            );
          }),
          (this.getFlagForChecksync = function () {
            var e = {};
            if (d.isApplicable())
              return (e[g] = 1), S && (e = n.merge(e, S.getParamsForCheckSync())), e;
          }),
          (this.getFlagForDFP = function () {
            var e = {};
            return (e[p] = d.isApplicable()), e;
          }),
          (this.getParamsToLog = function () {
            var e = {};
            return n.isSet(c) && (e[m.CONSENT_STRING_PRESENT] = h), e;
          }),
          (this.getPageViewBroadcastParams = function () {
            return S ? S.getParamsForPageViewLogging() : {};
          }),
          (this.getFailoverObject = function () {
            return d.isApplicable() && S && S.shouldBlockBasicAdsSelection()
              ? { reason: e._foSettings.REASON.TCF_NO_LEGITIMATE_INTEREST }
              : {};
          }),
          (this.shouldBlockAdPerformanceMeasurement = function () {
            return !!d.isApplicable() && S && S.shouldBlockAdPerformanceMeasurement();
          }),
          (this.getDecisionParamsForRenderer = function () {
            var e = {};
            return S && S.isTcfCmpPresent() && (e[m.TCF_CMP_PRESENT] = 1), e;
          }),
          i();
      }
      var n = e.util;
      return t;
    });
    window._cmL1Define('usp-const', function () {
      return {
        DEFAULT_STANCE: 2,
        NO_CONSENT: 'noconsent',
        LDP_CONSENT_STRING: 'ldp',
        APPLICABLE_SOURCE: { COOKIE: 'c', REGION: 'r', CONSENT_STRING: 'con', MOCKING: 'mock' },
        CONSENT_STRING_SOURCE: {
          MACRO_CONSENT: 'm',
          MACRO_LIMIT_DATA_PROCESSING: 'ldp',
          COOKIE: 'c',
          CMP: 'cmp',
        },
        LOG_PARAMS: {
          APPLICABLE: 'uspa',
          APPLICABLE_SOURCE: 'usps',
          CONSENT_STRING: 'uspcs',
          CONSENT_STRING_SOURCE: 'uspcss',
        },
      };
    });
    window._cmL1Define('mnet-usp', [_mN, 'usp-const'], function (t, i) {
      'use strict';
      function n (n) {
        function s () {
          var t = r.getItemsFromMacros('ups');
          (m = e.isStringSet(t.uspConsent) ? t.uspConsent : ''),
            (F = S()),
            e.isSet(t.limitDataProcessing) &&
              'boolean' == typeof t.limitDataProcessing &&
              (U = t.limitDataProcessing),
            o();
        }
        function S () {
          try {
            return r.mngc('usprivacy');
          } catch (t) {}
        }
        function u (t, i) {
          i && e.isSet(t) && e.isStringSet(t.uspString) && (d = t.uspString);
        }
        function o () {
          var t = window.__uspapi;
          e.isFunction(t) && t('getUSPData', 1, u);
        }
        function c () {
          try {
            var t,
              n = decodeURI(window.top.location.href) || '';
            t = n.match(/force_mnusp=([0-9]+)/);
          } catch (r) {}
          e.isSet(t) && e.isSet(t[1]) && ((E = 1), (T = t[1]), p(i.APPLICABLE_SOURCE.MOCKING));
        }
        function a (t, i) {
          return !!e.isStringSet(t) && t.toUpperCase() === i;
        }
        function _ (t, i) {
          e.isStringSet(t) && e.isStringSet(i) && ((B = t), (b = i));
        }
        function p (t) {
          e.isStringSet(t) && (R = t);
        }
        function N () {
          e.isStringSet(m)
            ? _(m, i.CONSENT_STRING_SOURCE.MACRO_CONSENT)
            : e.isStringSet(d)
            ? _(d, i.CONSENT_STRING_SOURCE.CMP)
            : e.isStringSet(F) && _(F, i.CONSENT_STRING_SOURCE.COOKIE);
        }
        function f (t) {
          return { explicitNotice: t[1], optOut: t[2], lspa: t[3] };
        }
        function C (t) {
          if (e.isStringSet(t)) {
            var i = f(t);
            return a(i.explicitNotice, 'Y') && a(i.optOut, 'N');
          }
          return !1;
        }
        function g () {
          (w[i.LOG_PARAMS.APPLICABLE] = P.isApplicable() ? 1 : 0),
            (w[i.LOG_PARAMS.APPLICABLE_SOURCE] = R || ''),
            (w[i.LOG_PARAMS.CONSENT_STRING] = B),
            (w[i.LOG_PARAMS.CONSENT_STRING_SOURCE] = b);
        }
        function O () {
          return P.isApplicable() ? T : l() ? 0 : void 0;
        }
        function l () {
          return e.isStringSet(E) && E > 0;
        }
        function A () {
          var t;
          return (
            l()
              ? ((t = !0),
                e.isStringSet(B) && C(B)
                  ? (t = !1)
                  : U === !1 &&
                    ((t = !1),
                    _(i.LDP_CONSENT_STRING, i.CONSENT_STRING_SOURCE.MACRO_LIMIT_DATA_PROCESSING)))
              : ((t = !1),
                ((e.isStringSet(B) && !C(B)) || U === !0) &&
                  ((t = !0), p(i.APPLICABLE_SOURCE.CONSENT_STRING)),
                t ||
                  U !== !1 ||
                  _(i.LDP_CONSENT_STRING, i.CONSENT_STRING_SOURCE.MACRO_LIMIT_DATA_PROCESSING)),
            t
          );
        }
        var E = t._usp || 0,
          R = t._usps || '',
          T = e.isSet(t._uspst) ? t._uspst : i.DEFAULT_STANCE,
          P = this,
          I = 'USP',
          L = 'usp',
          h = 'uspenf',
          G = 'usp_consent',
          v = 'usp_status',
          D = 'restrictDataProcessing',
          M = null,
          U = null,
          m = '',
          F = '',
          d = '',
          B = '',
          b = '',
          w = {};
        (this.getDisableCookieFlag = function () {
          if (n.dcfp && e.isSet(n.dcfp[I]) && 1 == n.dcfp[I]) return L;
        }),
          (this.getName = function () {
            return I;
          }),
          (this.isApplicable = function () {
            return null == M && (c(), N(), (M = A()), g()), M;
          }),
          (this.getLookupKey = function () {
            var t = O();
            if (e.isSet(t)) return I + '-' + t;
          }),
          (this.getMainFlag = function () {
            var t = {},
              i = O();
            return e.isSet(i) && (t[h] = i), t;
          }),
          (this.getLDPFlagForHB = function () {
            if (e.isSet(U)) return U;
          }),
          (this.getMacrosForHB = function () {
            return {};
          }),
          (this.callHBApis = function () {
            return {};
          }),
          (this.getFlagForChecksync = function () {
            var t = {};
            t[v] = l() ? 1 : 0;
            var i = O();
            return e.isSet(i) && (t[G] = i > 0 ? 0 : 1), t;
          }),
          (this.getFlagForDFP = function () {
            var t = {};
            return (t[D] = P.isApplicable()), t;
          }),
          (this.getParamsToLog = function () {
            return w;
          }),
          s();
      }
      var e = t.util,
        r = t._util;
      return n;
    });
    window._cmL1Define('mnet-privacy', [_mN], function (t) {
      function n () {
        function n () {
          var t = _mNDetails.privArr || [];
          r.each(t, function (t) {
            var n = r.getRequireModule(t);
            if (r.isFunction(n)) {
              var e = new n(F);
              l.push(e);
            }
          });
        }
        function e (t, n) {
          var e = [];
          return (
            r.each(t, function (t) {
              r.isSet(t) && r.isFunction(t[n]) && e.push(t[n]());
            }),
            e
          );
        }
        function i (t, n) {
          var e = n;
          return (
            r.each(t, function (t) {
              r.isSet(t) && (e = void 0 === e ? t : e && t);
            }),
            e
          );
        }
        function a (t) {
          var n = void 0;
          return (
            r.each(t, function (t) {
              r.isSet(t) && (n = void 0 === n ? t : n || t);
            }),
            n
          );
        }
        function o (t) {
          var n = {};
          return (
            r.each(t, function (t) {
              r.isSet(t) && (n = r.merge(n, t));
            }),
            n
          );
        }
        function c (t) {
          var n = [],
            i = e(l, 'getDisableCookieFlag');
          return (
            r.each(i, function (t) {
              r.isStringSet(t) && n.push(t);
            }),
            t ? n : n.join(',')
          );
        }
        function u () {
          var t = [];
          return (
            r.each(l, function (n) {
              n.isApplicable() && t.push(n);
            }),
            t
          );
        }
        var s = t._prules || {},
          f = t._dcfp || [],
          g = 'dcfp',
          l = [],
          h = null,
          v = this,
          F = { dcfp: f };
        (this.isApplicable = function (t) {
          var n = u();
          return r.isStringSet(t)
            ? !!r.any(n, function (n) {
                if (n.getName() === t) return !0;
              })
            : n.length > 0;
        }),
          (this.isActionPermitted = function (t) {
            if (v.isApplicable()) {
              var n = !0,
                i = s[t] || [],
                a = e(u(), 'getLookupKey');
              return (
                r.each(a, function (t) {
                  r.isStringSet(t) && (n = n && !r.checkItemExistsInArray(i, t));
                }),
                n
              );
            }
            return !0;
          }),
          (this.getMainFlag = function () {
            if (null == h) {
              var t = e(l, 'getMainFlag');
              h = o(t);
            }
            return h;
          }),
          (this.getLDPFlagForHB = function () {
            var t = e(l, 'getLDPFlagForHB');
            return i(t, void 0);
          }),
          (this.getMacrosForHB = function () {
            var t = e(l, 'getMacrosForHB'),
              n = o(t);
            return (n[g] = c(!0)), n;
          }),
          (this.callHBApis = function () {
            var t = e(l, 'callHBApis');
            return o(t);
          }),
          (this.getFlagForChecksync = function () {
            var t = e(l, 'getFlagForChecksync'),
              n = o(t);
            return (n[g] = c()), n;
          }),
          (this.getFlagForDFP = function () {
            var t = e(l, 'getFlagForDFP');
            return o(t);
          }),
          (this.getParamsToLog = function () {
            var t = e(l, 'getParamsToLog');
            return o(t);
          }),
          (this.getFailoverObject = function () {
            var t = e(l, 'getFailoverObject');
            return o(t);
          }),
          (this.getPageViewBroadcastParams = function () {
            var t = e(l, 'getPageViewBroadcastParams');
            return o(t);
          }),
          (this.shouldBlockAdPerformanceMeasurement = function () {
            var t = e(l, 'shouldBlockAdPerformanceMeasurement');
            return a(t) === !0;
          }),
          (this.getDecisionParamsForRenderer = function () {
            var t = e(l, 'getDecisionParamsForRenderer');
            return o(t);
          }),
          n();
      }
      var r = t.util;
      return n;
    });
    window._cmL1Define('mnet-tcf-api', [_mN.util], function (n) {
      'use strict';
      function t () {
        i();
      }
      function i () {
        n.isFunction(window.__tcfapi)
          ? ((r = window.__tcfapi), (o = f.DATA_SOURCE.SAME_WINDOW))
          : n.isInIFrameCall() &&
            (e(),
            a() &&
              ((r = window[f.TCF_API_PROXY_FOR_IFRAME_CASE]), (o = f.DATA_SOURCE.PARENT_WINDOW)));
      }
      function e () {
        function n () {
          for (var n, t = window; t; ) {
            try {
              if (t.frames.__tcfapiLocator) {
                n = t;
                break;
              }
            } catch (i) {}
            if (t === window.top) break;
            t = t.parent;
          }
          return n;
        }
        function t (n) {
          function t (n) {
            var t = {};
            try {
              t = 'string' == typeof n.data ? JSON.parse(n.data) : n.data;
            } catch (e) {}
            var a = t.__tcfapiReturn;
            a && 'function' == typeof i[a.callId] && i[a.callId](a.returnValue, a.success);
          }
          var i = {};
          (window[f.TCF_API_PROXY_FOR_IFRAME_CASE] = function (t, e, a, _) {
            var c = Math.random() + '',
              o = { __tcfapiCall: { command: t, parameter: _, version: e, callId: c } };
            (i[c] = a), n.postMessage(o, '*');
          }),
            window.addEventListener('message', t, !1);
        }
        function i () {
          var i = n();
          i && t(i);
        }
        i();
      }
      function a () {
        return n.isFunction(window[f.TCF_API_PROXY_FOR_IFRAME_CASE]);
      }
      function _ () {
        return n.isFunction(window.__tcfapi) || a();
      }
      function c (t) {
        function i (n) {
          var i = function (n, i) {
            if (i)
              switch (n.eventStatus) {
                case 'tcloaded':
                  if (n.purpose || n.publisher || n.vendor) {
                    var e = new Date().getTime() - u;
                    _mN._mNRP.execSafe(t, n, e, o);
                  }
              }
          };
          (u = new Date().getTime()), _mN._mNRP.execSafe(n, 'addEventListener', 2, i);
        }
        r && n.isFunction(r) && i(r);
      }
      var o,
        r,
        f = {
          DATA_SOURCE: { SAME_WINDOW: 2, PARENT_WINDOW: 3 },
          TCF_API_PROXY_FOR_IFRAME_CASE: '__tcfapi_mnIfr',
        },
        u = null;
      return t(), { isTcfCmpPresent: _, loadApi: c };
    });
    window._cmL1Define('mnet-tcf-manager', ['mnet-tcf-data-store'], function (E) {
      'use strict';
      function _ () {
        function _ (E, _) {
          e[E] = _;
        }
        function S () {
          _(T.STORE_AND_ACCESS_INFO, t.IS_CONSENT_REQUIRED),
            _(T.SELECT_BASIC_ADS, t.IS_FLEXIBLE_PURPOSE),
            _(T.CREATE_PERSONALISED_PROFILE, t.IS_CONSENT_REQUIRED),
            _(T.SELECT_PERSONALISED_PROFILE, t.IS_CONSENT_REQUIRED),
            _(T.CREATE_PERSONALISED_CONTENT_PROFILE, t.IS_FLEXIBLE_PURPOSE),
            _(T.SELECT_PERSONALISED_CONTENT, t.IS_FLEXIBLE_PURPOSE),
            _(T.MEASURE_AD_PERFORMANCE, t.IS_FLEXIBLE_PURPOSE),
            _(T.MEASURE_CONTENT_PERFORMANCE, t.IS_FLEXIBLE_PURPOSE),
            _(T.APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS, t.IS_FLEXIBLE_PURPOSE),
            _(T.DEVELOP_AND_IMPROVE_PRODUCTS, t.IS_LEGITIMATE_INTEREST_REQUIRED);
        }
        var e = {},
          t = {
            IS_CONSENT_REQUIRED: 'P',
            IS_LEGITIMATE_INTEREST_REQUIRED: 'L',
            IS_FLEXIBLE_PURPOSE: 'F',
          };
        (this.isPurposePermitted = function (_) {
          switch (e[_]) {
            case t.IS_CONSENT_REQUIRED:
              return E.isConsentAvailableForPurpose(_);
            case t.IS_LEGITIMATE_INTEREST_REQUIRED:
              return E.isLegitimateInterestEstablishedForPurpose(_);
            case t.IS_FLEXIBLE_PURPOSE:
              return E.isFlexiblePurposeAllowed(_);
          }
        }),
          S();
      }
      function S () {
        A = new _();
      }
      function e () {
        var E = [];
        return (
          P.each(T, function (_) {
            E[_ - 1] = A.isPurposePermitted(_) ? parseInt(_).toString(16) : '-';
          }),
          E.join('')
        );
      }
      function t () {
        var _ = {
          tcf_cstr: e(),
          tcf_ga: E.isGdprApplicable() ? 1 : 0,
          tcf_lt: E.getLoadTime(),
          tcf_cmpid: E.getCmpId(),
          tcf_cmpv: E.getCmpVersion(),
          tcf_cmp: E.getApiSource(),
          tcf_bas: I() ? 0 : 1,
          tcf_apm: r() ? 0 : 1,
          tcf_td: E.getTestDataForDebug(T.SELECT_BASIC_ADS),
          tcf_ba_r: E.getRestrictionFlag(T.SELECT_BASIC_ADS) || '',
        };
        return _;
      }
      function R () {
        var _ = {};
        return (
          E.hasTcDataLoaded() &&
            ((_.gdprconsent = A.isPurposePermitted(T.STORE_AND_ACCESS_INFO) ? 1 : 0),
            (_.gdprstring = E.getTcString())),
          _
        );
      }
      function I () {
        return (
          !!E.hasTcDataLoaded() &&
          E.isGdprApplicable() &&
          A.isPurposePermitted(T.SELECT_BASIC_ADS) === !1
        );
      }
      function r () {
        return (
          !!E.hasTcDataLoaded() &&
          E.isGdprApplicable() &&
          A.isPurposePermitted(T.MEASURE_AD_PERFORMANCE) === !1
        );
      }
      var A,
        P = _mN.util,
        T = {
          STORE_AND_ACCESS_INFO: 1,
          SELECT_BASIC_ADS: 2,
          CREATE_PERSONALISED_PROFILE: 3,
          SELECT_PERSONALISED_PROFILE: 4,
          CREATE_PERSONALISED_CONTENT_PROFILE: 5,
          SELECT_PERSONALISED_CONTENT: 6,
          MEASURE_AD_PERFORMANCE: 7,
          MEASURE_CONTENT_PERFORMANCE: 8,
          APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS: 9,
          DEVELOP_AND_IMPROVE_PRODUCTS: 10,
        };
      return (
        S(),
        {
          isGdprApplicable: E.isGdprApplicable,
          isTcfCmpPresent: E.isTcfCmpPresent,
          getParamsForPageViewLogging: t,
          getParamsForCheckSync: R,
          shouldBlockBasicAdsSelection: I,
          shouldBlockAdPerformanceMeasurement: r,
        }
      );
    });
    window._cmL1Define('mnet-tcf-data-store', ['mnet-tcf-api', 'l1-constants'], function (t, e) {
      'use strict';
      function n () {
        t.isTcfCmpPresent() && t.loadApi(i);
      }
      function r () {
        _mNDetails.triggerAdTagEventWhenQueued(
          g.GLOBAL_TCF_EVENT_UID,
          g.TCF_API_HAS_LOADED_TCDATA,
          !0
        );
      }
      function i (t, e, n) {
        f.isObjectEmpty(t) || ((C = t), (A = e), (R = n), r());
      }
      function E () {
        return A || '';
      }
      function T () {
        return R || '';
      }
      function u () {
        return C[m.GDPR_FLAG] === !0;
      }
      function s () {
        return C[m.CMP_ID] || '';
      }
      function o () {
        return C[m.TC_STRING] || '';
      }
      function c () {
        return C[m.CMP_VERSION] || '';
      }
      function I () {
        var t = C[m.VENDOR_CONFIG] || {},
          e = t[m.CONSENTS] || {};
        return e[P.MEDIANET_VENDOR_ID] === !0;
      }
      function S () {
        var t = C[m.VENDOR_CONFIG] || {},
          e = t[m.LEGITIMATE_INTERESTS] || {};
        return e[P.MEDIANET_VENDOR_ID] === !0;
      }
      function _ (t) {
        if (!I()) return !1;
        var e = C[m.PURPOSE] || {},
          n = e[m.CONSENTS] || {};
        return n[t] === !0;
      }
      function N (t) {
        if (!S()) return !1;
        var e = C[m.PURPOSE] || {},
          n = e[m.LEGITIMATE_INTERESTS] || {};
        return n[t] === !0;
      }
      function a (t) {
        var e = C[m.PUBLISHER] || {},
          n = e[m.RESTRICTIONS] || {},
          r = n[t] || {};
        return r[P.MEDIANET_VENDOR_ID];
      }
      function p (t) {
        var e = a(t);
        return 0 !== e && (1 === e ? _(t) : 2 === e ? N(t) : N(t) || _(t));
      }
      function D () {
        return !f.isObjectEmpty(C);
      }
      function O (t) {
        var e = '-',
          n = '-';
        if (C && C.hasOwnProperty('purpose')) {
          var r = C[m.PURPOSE] || {},
            i = r[m.LEGITIMATE_INTERESTS] || {};
          (e = f.isObjectEmpty(r) ? '1' : '0'),
            (n = f.isObjectEmpty(i) === !1 && i.hasOwnProperty(t) ? '0' : '1');
        }
        return [e, n].join('');
      }
      var A,
        R,
        f = _mN.util,
        C = {},
        P = {
          MEDIANET_VENDOR_ID: 142,
          TC_DATA: {
            VENDOR_CONFIG: 'vendor',
            CONSENTS: 'consents',
            LEGITIMATE_INTERESTS: 'legitimateInterests',
            PURPOSE: 'purpose',
            RESTRICTIONS: 'restrictions',
            CMP_ID: 'cmpId',
            PUBLISHER: 'publisher',
            TC_STRING: 'tcString',
            CMP_STATUS: 'cmpStatus',
            GDPR_FLAG: 'gdprApplies',
            CMP_VERSION: 'cmpVersion',
          },
        },
        m = P.TC_DATA,
        g = e.EVENTS.TCF;
      return (
        n(),
        {
          isGdprApplicable: u,
          getCmpId: s,
          getTcString: o,
          getCmpVersion: c,
          isConsentAvailableForPurpose: _,
          isLegitimateInterestEstablishedForPurpose: N,
          isFlexiblePurposeAllowed: p,
          getLoadTime: E,
          getApiSource: T,
          isTcfCmpPresent: t.isTcfCmpPresent,
          hasTcDataLoaded: D,
          getTestDataForDebug: O,
          getRestrictionFlag: a,
        }
      );
    });
    window._cmL1Define(
      'privacy-event-channel',
      [_mNDetails, 'l1-constants', 'l1logger', 'l3transmitter'],
      function (e, n, t, i) {
        'use strict';
        function r (r) {
          function a () {
            c(), o(), u();
          }
          function c () {
            var n = i.getL3TransmitterObject(g);
            v.each(e.privacy.getDecisionParamsForRenderer(), function (e, t) {
              n.addL3DecisionParam(t, e);
            });
          }
          function o () {
            s(function () {
              var n = {
                logParams: e.privacy.getPageViewBroadcastParams(),
                blockHoverImpression: e.privacy.shouldBlockAdPerformanceMeasurement(),
              };
              e.triggerMultiLayerAdTagEventWhenQueued(g, l.CM_TCF_DATA_IS_READY, !0, n, g);
            });
          }
          function u () {
            function n () {
              function n (n) {
                return e.triggerAdTagEvent(g, 'hideAdFramesWhenAvailable', !0, n);
              }
              n({ viewId: g, placeholder: r.getEntity('placeholder'), type: 'fc' });
            }
            s(function () {
              var i = e.privacy.getFailoverObject();
              !v.isObjectEmpty(i) &&
                v.isStringSet(i.reason) &&
                (n(), t.logFailover(i.reason, _mN._foSettings.ACTION.HIDE_BLOCK, r));
            });
          }
          function s (n) {
            v.isFunction(n) &&
              e.addToDelayedEventQueue(
                l.TCF_API_HAS_LOADED_TCDATA,
                l.GLOBAL_TCF_EVENT_UID,
                function (e) {
                  _mN._mNRP.execSafe(n, e);
                }
              );
          }
          var l = n.EVENTS.TCF,
            g = r.getEntity('vi'),
            v = _mN.util;
          return { init: a };
        }
        return r;
      }
    );
    !(function (n) {
      var t = n.util,
        e = {
          isApplicable: function () {
            return !1;
          },
          isActionPermitted: function () {
            return !0;
          },
          getMainFlag: function () {
            return {};
          },
          getLDPFlagForHB: function () {},
          getMacrosForHB: function () {
            return {};
          },
          callHBApis: function () {
            return {};
          },
          getFlagForChecksync: function () {
            return {};
          },
          getFlagForDFP: function () {
            return {};
          },
          getParamsToLog: function () {
            return {};
          },
          getFailoverObject: function () {
            return {};
          },
          getPageViewBroadcastParams: function () {
            return {};
          },
          shouldBlockAdPerformanceMeasurement: function () {
            return !1;
          },
          getDecisionParamsForRenderer: function () {
            return {};
          },
        },
        r = t.getRequireModule('mnet-privacy');
      t.isFunction(r) && (e = new r()),
        (window._mNDetails.privacy = window._mNDetails.privacy || e);
    })(_mN);
    !(function () {
      'use strict';
      var e = _mN.util,
        t = _mN._util;
      _mN._custom = {
        trim: function (e) {
          return String.prototype.trim
            ? e.trim()
            : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        },
        getUrlWithoutParam: function (t, r) {
          if (!e.isStringSet(t)) return '';
          var a = new RegExp('(\\?|\\&)' + r + '=[^&]*&?', 'gi');
          return (t = t.replace(a, '$1').replace(/(\?|&)$/, ''));
        },
        getCustomizedPublisherUrl: function (r) {
          var a = r.getEntity('requrl', !0);
          if (a.indexOf('.media.net') > 0) {
            var n = document.referrer;
            if (e.isStringSet(n)) a = n;
            else if (window.location.href.indexOf('.adnxs.com/') > 0) {
              var i = new e.GetParamValueFromUrl(window.location.href),
                o = i.getDecodedParam('referrer');
              e.isStringSet(o) && o.indexOf('.msn.com/') !== -1 && (a = o);
            }
          }
          a.indexOf('ocid') !== -1 && (a = this.getUrlWithoutParam(a, 'ocid'));
          var s,
            l = t.getItemsFromMacros('misc'),
            d = {
              100229: 'Active-Traders',
              1694119: 'Active-Traders-CA',
              2389681: 'Age0',
              2668153: 'Age1',
              2668154: 'Age2',
              2668155: 'Age3',
              2668156: 'Age4',
              2668157: 'Age5',
              3145443: 'Ages-35-54-Female',
              85084: 'Airfare-Seekers',
              100210: 'Airfare-Seekers1',
              100251: 'Airfare-Seekers2',
              3145444: 'Allergy',
              2668271: 'Apparel-and-Shoes',
              85085: 'Apparel-and-Shoes1',
              85086: 'Appliance',
              100255: 'Appliance1',
              85087: 'Auto-Buyers',
              100260: 'Auto-Buyers1',
              2668338: 'Auto-Buying-Financing',
              2668207: 'Auto-Insurance',
              85088: 'Auto-Insurance1',
              100204: 'Auto-Insurance2',
              2911997: 'Auto-Parts-CA',
              3077678: 'Auto-Parts-UK',
              2668161: 'Auto-Review',
              85089: 'Auto-Review1',
              100206: 'Auto-Review2',
              2668218: 'Auto-Review-AT',
              2668182: 'Auto-Review-BE',
              2668214: 'Auto-Review-BR',
              2668220: 'Auto-Review-BR1',
              2668243: 'Auto-Review-CA',
              2668219: 'Auto-Review-CH',
              2668224: 'Auto-Review-DE',
              2668235: 'Auto-Review-ES',
              2668198: 'Auto-Review-FR',
              2668166: 'Auto-Review-FR1',
              2668237: 'Auto-Review-IT',
              2668175: 'Auto-Review-JP',
              2668252: 'Auto-Review-MX',
              2668253: 'Auto-Review-MX1',
              2668180: 'Auto-Review-OL',
              2668227: 'Auto-Review-UK',
              2668353: 'Back-to-School-Products',
              1708202: 'Back-to-School-Supply',
              85090: 'Beauty-and-Fragrance',
              2668222: 'Beauty-and-Health-BR',
              85091: 'Boomers',
              100208: 'Boomers1',
              2668197: 'Business-Decision-DE',
              2668216: 'Business-Owners-SE',
              2668162: 'Business-Travel',
              85092: 'Business-Travel1',
              100202: 'Business-Travel2',
              3079922: 'California-Travelers',
              85161: 'Camera',
              2668337: 'Car-Buying-ES',
              2668296: 'Caribbean-Travel',
              85093: 'Caribbean-Travel1',
              100221: 'Caribbean-Travel2',
              1708201: 'Casual-Gamers',
              85094: 'Cat-Owners',
              85095: 'Celebrity-Gossip-Fanatics',
              2668321: 'Classe-C-BR',
              85096: 'Cold-and-Flu',
              100250: 'Cold-and-Flu1',
              2668315: 'College-Financial-Planners',
              85097: 'College-Financial-Planners1',
              100249: 'College-Financial-Planners2',
              2668336: 'Compact-Passenger-Car',
              2912000: 'Compact-Passenger-Car-CA',
              85098: 'Computer',
              100245: 'Computer1',
              2668272: 'Computer-Shoppers',
              2668193: 'Consumer-Electronics',
              2668308: 'Consumer-Electronics-CA',
              2668177: 'Consumer-Electronics-JP',
              85099: 'Consumer-Electronics1',
              100236: 'Consumer-Electronics2',
              100252: 'Consumer-Electronics3',
              2668199: 'Cooking-and-Kitchen',
              3079923: 'Country-Music-Fans',
              2668355: 'Credit-Card',
              2668170: 'Credit-Card-UK',
              85100: 'Credit-Card1',
              100200: 'Credit-Card2',
              847772: 'Credit-Card-CA',
              932136: 'Credit-Card-UK',
              85101: 'Credit-Reporting',
              100247: 'Credit-Reporting1',
              138783: 'Credit-Reporting2',
              85102: 'Crossover',
              3077679: 'Crossover-UK',
              85103: 'Cruise-Seekers',
              100239: 'Cruise-Seekers1',
              100253: 'Cruise-Seekers2',
              85104: 'Diabetes',
              100205: 'Diabetes1',
              85105: 'Diet',
              100256: 'Diet1',
              3077681: 'Diet-UK',
              85106: 'Dog-Owners',
              100242: 'Dog-Owners1',
              2668283: 'Domestic-Travel-JP',
              2668168: 'DVD-FR',
              85107: 'DVD-Enthusiasts',
              85108: 'DVD-Player',
              85109: 'Eco-Friendly-Users',
              2668266: 'Entertainment-FR',
              2668293: 'Entertainment-and-Celebrity-MX',
              85110: 'Europe-Travelers',
              100219: 'Europe-Travelers1',
              85111: 'Expert-Traders',
              100228: 'Expert-Traders1',
              2668172: 'Family-Car-UK',
              85112: 'Family-Travelers',
              100223: 'Family-Travelers1',
              2668194: 'Fashion-and-Beauty',
              2668255: 'Fashion-and-Beauty-MX',
              2668343: 'Fashion-and-Beauty-OL',
              85113: 'Fashion-and-Beauty1',
              100201: 'Fashion-and-Beauty2',
              3077684: 'Fashion-and-Beauty-UK',
              85114: 'Fast-Meal',
              2668184: 'Finance-BE',
              2668221: 'Finance-BR',
              2668246: 'Finance-IT',
              2668250: 'Finance-JP',
              2668347: 'Finance-OL',
              2668228: 'Finance-UK',
              1694099: 'Finance-CA',
              932191: 'Finance-UK',
              2668204: 'Fitness-and-Lifestyle',
              2668292: 'Fitness-and-Lifestyle-IT',
              85115: 'Florida-Travelers',
              2668159: 'Food-and-Drink-UK',
              3077687: 'Food-and-Drink-UK1',
              2668358: 'Food-and-Wine-CA',
              2668329: 'Football-BR',
              2668226: 'Football-OL',
              3077689: 'Football-UK',
              2668244: 'Fun-Leisure-IT',
              2668200: 'Gambling-SE',
              2668334: 'Gamers',
              85116: 'Gamers1',
              932162: 'Gamers-UK',
              2668152: 'Gender-Male',
              2389677: 'Gender-Unknown',
              2668142: 'Gerner-Female',
              2668195: 'Glasses-and-Specs-UK',
              3077690: 'Glasses-UK',
              1708200: 'Hardcore-Gamers',
              100222: 'Hawaii-Travelers',
              2668333: 'Headache-Migraine',
              426376: 'Health-and-Fitness-CA',
              426387: 'Health-and-Fitness-French-CA',
              85119: 'Health-Insurance',
              2668326: 'Healthy-Eating',
              3145445: 'Healthy-Eating1',
              85120: 'Healthy-Heart',
              100248: 'Healthy-Heart1',
              2668277: 'Healthy-Living-CA',
              3077691: 'Healthy-Living-UK',
              932175: 'High-Street-Shoppers-UK',
              85121: 'Hip-Hop-Fans',
              3145447: 'Holiday',
              2668324: 'Holiday-shoppers',
              2668181: 'Hombres-Lifestyle-ES',
              3154983: 'Home-and-Garden-CA',
              100244: 'Home-Buyer',
              2668176: 'Home-Buyer-JP',
              2668229: 'Home-Buyer-UK',
              85122: 'Home-Buyer1',
              1694102: 'Home-Buyer-CA',
              932174: 'Home-Buyer-UK1',
              2668340: 'Home-Buying-Selling',
              85124: 'Home-Decor',
              2668173: 'Home-Decor-UK',
              3077673: 'Home-Essentials-UK',
              85125: 'Home-Furnishing',
              100230: 'Home-Furnishing1',
              85126: 'Home-Improvement',
              100235: 'Home-Improvement1',
              2668201: 'Home-Maintenance',
              2668280: 'Home-Maintenance-CA',
              85127: 'Home-Refinancing',
              100213: 'Home-Refinancing1',
              3077696: 'Home-Renovation-UK',
              85128: 'Horror-Film',
              1672071: 'Hotel-CA',
              85129: 'Hotels',
              100257: 'Hotels1',
              3077693: 'Hotel-UK',
              2668309: 'Housewives-ES',
              2668318: 'Housewives-MX',
              2668209: 'Hybrid-Car',
              85131: 'Hybrid-Car1',
              100241: 'Hybrid-Car2',
              2912003: 'Hybrid-Car-CA',
              3077697: 'Hybrid-Car-UK',
              2668314: 'Insurance-IT',
              1694104: 'Insurance-CA',
              85132: 'Internationals-in-USA',
              2668284: 'International-Travel-JP',
              85133: 'Internet-Power-Users',
              2668211: 'Invest-and-Retirement',
              2668350: 'Investment',
              2668212: 'Investors',
              85134: 'IT-Pros',
              2668306: 'IT-Pros-CA',
              100246: 'IT-Pros1',
              3077698: 'IT-Pros-UK',
              85135: 'Jewelry-and-Watches',
              85136: 'Job-Hunters',
              85137: 'Las-Vegas-Travelers',
              100238: 'Las-Vegas-Travelers1',
              2668179: 'Latino-Culture',
              100214: 'Latino-Culture1',
              2668248: 'Loans-and-Finance-IT',
              85139: 'Long-Term-Investors-and-Retirement-Planners',
              1694118: 'Long-Term-Investors-and-Retirement-Planners-CA',
              3079925: 'Los-Angeles-Travelers',
              2668158: 'Luxury-Car',
              2668174: 'Luxury-Car-UK',
              85140: 'Luxury-Car1',
              100211: 'Luxury-Car2',
              2911991: 'Luxury-Car-CA',
              3077699: 'Luxury-Car-UK1',
              3077700: 'Luxury-Gifts-UK',
              3077701: 'Mens-Lifestyle-UK',
              85141: 'Mens-Luxury-Brand',
              85142: 'Mexico-Travelers',
              85143: 'Microsoft-Office-Power-Users',
              100237: 'Microsoft-Office-Power-Users1',
              2668208: 'Microsoft-Office-Tips',
              2668323: 'Mid-Large-Business',
              2912007: 'MiniVan-CA',
              85144: 'MiniVans',
              100212: 'MiniVans1',
              932146: 'Mobile-UK',
              85145: 'Mobile-Users',
              100207: 'Mobile-Users1',
              2668213: 'Moms',
              3077718: 'Mothers-Day-UK',
              2668303: 'Movers',
              85146: 'Movers1',
              2668171: 'Movies',
              2668286: 'Movies-MX',
              2668349: 'Movies-OL',
              2668242: 'Movies-UK',
              100234: 'Movies1',
              85147: 'Movie-Watchers',
              847761: 'Music-CA',
              3077702: 'Music-UK',
              1708197: 'Netbook',
              3145449: 'Newlyweds',
              2668346: 'News-OL',
              2668257: 'News-Readers-MX',
              3077713: 'News-UK',
              85150: 'New-Traders',
              85152: 'Office-Supply',
              100231: 'Office-Supply1',
              2668301: 'Online-Circular',
              932156: 'Online-Gambling-UK',
              85154: 'Online-Grocery',
              100232: 'Online-Grocery1',
              138784: 'Online-Grocery2',
              85155: 'Online-Power',
              100218: 'Online-Power1',
              2668275: 'Online-Shopping-BR',
              932140: 'Online-Shopping-UK',
              2668356: 'Parents',
              2668281: 'Parents-CA',
              2668289: 'Parents-ES',
              100258: 'Parents1',
              3077714: 'Parents-UK',
              2668169: 'Passenger-Car',
              85157: 'Passenger-Car1',
              2912011: 'Passenger-Car-CA',
              3077715: 'Passenger-Car-UK',
              2668234: 'Personal Savings-ES',
              85158: 'Personal-Banking',
              100220: 'Personal-Banking1',
              2668298: 'Personal-Banking2',
              1694111: 'Personal-Banking-CA',
              3077675: 'Personal-Banking-UK',
              3077716: 'Personal-Investment-UK',
              85159: 'Personal-Investors',
              100254: 'Personal-Investors1',
              85160: 'Pet-Owners',
              100216: 'Pet-Owners1',
              3145451: 'Pharmacy',
              2668163: 'Pickup-Truck',
              100240: 'Pickup-Truck1',
              3077717: 'Pickup-Truck-UK',
              85163: 'Political-News',
              100243: 'Political-News1',
              3079926: 'Pop-Music',
              2668290: 'Pregnancy-IT',
              3077683: 'Pregnancy-UK',
              85164: 'Printer',
              3154984: 'Rewards-CA',
              85165: 'Rock-Music',
              100227: 'Rock-Music1',
              85166: 'Romance-Travelers',
              2668330: 'Runners-ES',
              2668183: 'Salute-IT',
              85167: 'Sleep',
              2668210: 'Small-Business',
              2668305: 'Small-Business-CA',
              2668191: 'Small-Business-DE',
              85168: 'Small-Business1',
              100215: 'Small-Business2',
              932132: 'Small-Car-UK',
              2668299: 'Smartphones',
              2668196: 'Smartphones-DE',
              85169: 'Smartphones1',
              100226: 'Smartphones2',
              3077719: 'Snacks-UK',
              2668352: 'Soccer',
              3077720: 'Socialisers-UK',
              85170: 'South-America-Travelers',
              2668203: 'Sports',
              2668287: 'Sports-BR',
              2668232: 'Sports-ES',
              2668268: 'Sports-FR',
              2668259: 'Sports-MX',
              2668190: 'Sports-SE',
              2668215: 'Sports1',
              3154985: 'Sports-CA',
              85171: 'Sports-Car',
              100203: 'Sports-Car1',
              2912017: 'Sports-Car-CA',
              3077722: 'Sports-Car-UK',
              3077723: 'Sports-UK',
              847762: 'Students-CA',
              2668206: 'Students-CA1',
              2668160: 'SUV',
              85173: 'SUV1',
              2911992: 'SUV-and-Crossover-CA',
              3077724: 'SUV-UK',
              1708165: 'Tablet',
              2668295: 'Tablet1',
              3154986: 'Tablet-CA',
              2668225: 'Tech-and Gadget-OL',
              2668265: 'Tech-and-Gadget-FR',
              2668240: 'Tech-and-Gadget-UK',
              932182: 'Tech-and-Gadget-UK',
              2668202: 'Technology',
              2668312: 'Technology-MX',
              1708203: 'Technology1',
              85174: 'Teen-Influencers',
              100233: 'Teen-Influencers1',
              85175: 'Texas-Travelers',
              85176: 'Tools-and-Hardware',
              100224: 'Tools-and-Hardware1',
              3077677: 'Trading-UK',
              2668327: 'Travel',
              2668223: 'Travel-BR',
              2668263: 'Travel-CA',
              2668236: 'Travel-ES',
              2668238: 'Travel-IT',
              2668178: 'Travel-JP',
              2668332: 'Travel-MX 1',
              2668239: 'Travel-UK',
              2668262: 'Travel-MX ',
              1672077: 'Travel-CA',
              932152: 'Travel-UK',
              85177: 'TV-Enthusiasts',
              2668274: 'TV-Shows',
              2668230: 'Vacation-DE',
              1672073: 'Vacation-CA',
              2668165: 'Vans',
              2668269: 'Voyages-FR',
              1708204: 'Win-7',
              1708194: 'Windows-8',
              2668192: 'Windows-Research',
              2911993: 'Winter-Driving-CA',
              2668233: 'Womens-Fashion-ES',
              3077674: 'Womens-Lifestyle-UK',
              85178: 'Womens-Luxury-Brands',
              100198: 'Womens-Luxury-Brands1',
              100259: 'Womens-Wellness',
              3079927: 'World-Cup',
            },
            u = '',
            c = '';
          if (l && 'object' == typeof l) {
            if (
              ((u = e.buildUrlParameters(l).replace(/&/g, '|@|')),
              e.isStringSet(u) && r.addParamtoLocHash('tdAdd[]', e.encodeParam(u)),
              e.isStringSet(l.uid) && r.addParamtoLocHash('cpvid', l.uid),
              e.isStringSet(l.seg_id))
            ) {
              s = l.seg_id.split(',');
              for (var m = 0, g = s.length; m < g; m++)
                (s[m] = this.trim(s[m])), (s[m] = d[s[m]] || s[m]);
              (s = s.join(',')), (c += '&seg_id=' + e.encodeParam(s));
            }
            window._mNIntraAdUnitShown && window._mNBFAdUnitShown && (c += '&intrabottom=1'),
              e.isStringSet(c) && (a.indexOf('?') === -1 && (a += '?'), (a += c));
          }
          return a;
        },
        setExtraParams: function (r) {
          if (
            ('US' === r.getEntity('cc') && e.isStringSet(_mN._dma) && r.addEntity('dma', _mN._dma),
            e.isStringSet(r.getEntity('chnm2')) ||
              r.addEntity('chnm2', t.getItemsFromMacros('chnm2') || ''),
            e.isFunction(_mN._custom.setContentProviderInfo))
          )
            try {
              _mN._custom.setContentProviderInfo(r);
            } catch (a) {}
          if (e.isFunction(_mN._custom.setIdentifiersForLoggingAdditionalData))
            try {
              _mN._custom.setIdentifiersForLoggingAdditionalData(
                r.getEntity('vi'),
                r.getEntity('crid')
              );
            } catch (a) {}
          if (e.isFunction(_mN._custom.getPlacementRelatedParamsToLog))
            try {
              var n = _mN._custom.getPlacementRelatedParamsToLog(r.getEntity('crid'));
              e.isObjectEmpty(n) ||
                e.each(n, function (t, a) {
                  e.isStringSet(a) && e.isSet(t) && r.addVogonParamtoLocHash(a, t);
                });
            } catch (a) {}
          var i = t.getItemsFromMacros('miscxwidget'),
            o = '';
          if (
            (e.isStringSet(r.getParamFromLocHash('tdAdd[]')) &&
              (o = e.decodeParam(r.getParamFromLocHash('tdAdd[]'))),
            i && 'object' == typeof i && i.xwidget && i.xwidget_placement)
          ) {
            var s = i.xwidget.toUpperCase(),
              l = i.xwidget_placement.toUpperCase();
            if (!(('TB' !== s && 'OB' !== s) || ('ABOVE' !== l && 'BELOW' !== l))) {
              (o += 'xwidget=' + s + '|@|xwidget_placement=' + l),
                r.addParamtoLocHash('tdAdd[]', e.encodeParam(o));
              var d = 0;
              'TB' === s ? (d = 'ABOVE' === l ? 1 : 2) : 'OB' === s && (d = 'ABOVE' === l ? 3 : 4),
                r.addParamtoLocHash('xwidget', e.encodeParam(d));
            }
          }
          var u = this.checkAdTagPresence();
          if (e.isStringSet(u)) {
            var c = 'below';
            1 === this.getPageType() &&
              (c = this.getArticlesNodeForBTF(document.getElementById(r.getEntity('crid')))),
              (o += '|@|AdtagPresent=' + u + '-' + c),
              r.addParamtoLocHash('tdAdd[]', e.encodeParam(o));
          }
          return;
        },
        getAutosSideShowHint: function (e) {
          var t = window.top || window,
            r = t.document.getElementById('main');
          if (!r) return '';
          var a = this.getChildElemByClass(r, 'gallerydata', 'div');
          if (a.length < 1) return this.extractAsideHint(t);
          for (
            var n,
              i = a[0].childNodes,
              o = i.length,
              s = 0,
              l = this.getImagePosition(t) || 0,
              d = 0;
            s < o;
            s++
          ) {
            var u = i[s];
            if (
              u &&
              1 === u.nodeType &&
              'div' === u.nodeName.toLowerCase() &&
              this.hasClass(u, 'show')
            )
              return this.extractGalleryHint(u, t);
            u &&
              1 === u.nodeType &&
              'div' === u.nodeName.toLowerCase() &&
              (d == l && (n = u), d++);
          }
          return n ? this.extractGalleryHint(n, t) : '';
        },
        extractGalleryHint: function (e, t) {
          var r = this.getChildElemByClass(e, 'body-text', 'div');
          if (!(r.length < 1)) {
            var a = r[0].getElementsByTagName('h2');
            if (!(a.length < 1)) return this.getTextContent(a[0]);
          }
        },
        extractAsideHint: function (e) {
          var t = e.document.getElementById('aside');
          if (!t) return '';
          var r,
            a = this.getChildElemByClass(t, 'body-text', 'div'),
            n = a.length;
          if (a.length < 1) return '';
          var i,
            o = this.getImagePosition(e) || 0,
            s = 0;
          for (r = 0; r < n; r++) {
            var l = a[r];
            if (
              l &&
              1 === l.nodeType &&
              'div' === l.nodeName.toLowerCase() &&
              this.hasClass(l, 'show')
            )
              return this.extractAsideH2Hint(l);
            l &&
              1 === l.nodeType &&
              'div' === l.nodeName.toLowerCase() &&
              (s == o && (i = l), s++);
          }
          return i ? this.extractAsideH2Hint(i) : '';
        },
        extractAsideH2Hint: function (e) {
          var t = e.getElementsByTagName('h2');
          return t.length < 1 ? '' : this.getTextContent(t[0]);
        },
        getImagePosition: function (e) {
          if (e.location.hash.indexOf('image=') !== -1) {
            var t = e.location.hash.split('image=');
            if (2 === t.length) {
              var r = parseInt(t[1], 10);
              if (!isNaN(r) && isFinite(r) && r > 0) return r - 1;
            }
          }
          return 0;
        },
        getTextContent: function (e) {
          var t = e.textContent || e.innerText || '';
          return t.replace(/^\s+|\s+$/g, '');
        },
        hasClass: function (e, t) {
          var r = e.className || '';
          return r.indexOf(t) !== -1;
        },
        getChildElemByClass: function (e, t, r) {
          if ('function' == typeof document.getElementsByClassName)
            return e.getElementsByClassName(t);
          r = r || '*';
          var a,
            n,
            i = new RegExp('(^|\\s)' + t + '(\\s|$)'),
            o = e || document,
            s = '*' === r && o.all ? o.all : o.getElementsByTagName(r),
            l = [],
            d = s.length;
          for (n = 0; n < d; n++) (a = s[n]), i.test(a.className) && l.push(a);
          return l;
        },
        checkAdTagPresence: function () {
          try {
            var e =
              window.document.getElementById('taboola-below-article-thumbnails') ||
              window.document.getElementById('taboola-below-article-thumbnails-card-layout-short');
            if (e) return 'taboola';
            if ((e = window.document.getElementById('main'))) {
              var t = this.getChildElemByClass(e, 'OUTBRAIN', 'div');
              if (t.length > 0) return 'outbrain';
            }
            return '';
          } catch (r) {}
          return '';
        },
        getPageType: function () {
          var e = window.location.href.split('?'),
            t = e[0].replace(/\/{1,}$/g, ''),
            r = t.split('/'),
            a = r[r.length - 1],
            n = a.toLowerCase().split('-');
          return 'ar' === n[0] ? 1 : 'ss' === n[0] && 2;
        },
        getArticlesNodeForBTF: function (e) {
          if (e)
            for (var t = e.previousSibling; t; ) {
              if (t && 1 === t.nodeType) {
                if (
                  'div' === t.nodeName.toLowerCase() &&
                  (this.hasClass(t, 'OUTBRAIN') ||
                    'taboola-below-article-thumbnails' == t.id ||
                    'taboola-below-article-thumbnails-card-layout-short' == t.id)
                )
                  return 'above';
                if ('article' === t.nodeName.toLowerCase()) return 'below';
              }
              t = t.previousSibling;
            }
          return 'below';
        },
        getDelayLoadFlag: function (t) {
          var r = t.getEntity('crid');
          return (
            e.isSet(t.getEntity('placeholder')) &&
            _mN._rtbs &&
            _mN._rtbs._lzldTag &&
            e.isSet(_mN._rtbs._lzldTag[r]) &&
            e.isSet(_mN._rtbs._lzldTag[r].params)
          );
        },
        isDelayedLoadEnabled: function (t, r) {
          var a = this,
            n = t.getEntity('crid'),
            i = t.getEntity('placeholder');
          if (a.getDelayLoadFlag(t)) {
            var o = _mN._rtbs._lzldTag[n],
              s = e.getRequireModule('lazyload-strategy-delay-render');
            return (
              e.isFunction(s)
                ? (e.addToEventQueue('TagInCustomViewport', n, function () {
                    e.triggerAdTagEvent(n, 'rtbsDelayCompleted');
                  }),
                  new s(o.params.offset, n, !0).init(e.queryDOM('#' + i)))
                : r(),
              e.addToEventQueue('rtbsDelayCompleted', n, r),
              (_mN._rtbs._lzLoaded = !0),
              !0
            );
          }
          return !1;
        },
        triggerDelayLoad: function (t) {
          var r = t.getEntity('crid'),
            a = t.getEntity('placeholder');
          if (this.getDelayLoadFlag(t)) {
            var n = _mN._rtbs._lzldTag[r],
              i = e.getRequireModule('lazyload-strategy-delay-render');
            e.isFunction(i)
              ? (e.addToEventQueue('TagInCustomViewport', r, function () {
                  e.triggerAdTagEventWhenQueued(r, 'tagOKToLoad');
                }),
                new i(n.params.offset, r, !0).init(e.queryDOM('#' + a)))
              : e.triggerAdTagEventWhenQueued(r, 'tagOKToLoad');
          } else e.triggerAdTagEventWhenQueued(r, 'tagOKToLoad');
        },
        postRendering: function (t) {
          function r () {
            _mN._custom.onHoverCustomCallback(), e.eventLib.removeEvent(a, 'mouseover', r);
          }
          var a = (t.document && t.document.body) || t;
          a &&
            'function' == typeof _mN._custom.onHoverCustomCallback &&
            e.eventLib.addEvent(a, 'mouseover', r);
        },
        getUpdatedCrid: function () {
          var e;
          if ('1' === _mN._ampadtag) {
            var r = {
                abvContentArticle: 'abvContAr',
                abvContentSlideShow: 'abvContSS',
                btfPlacement220: 'btfMob',
                btfSlideShow: 'btfSSMob',
              },
              a = t.getItemsFromMacros('misc');
            window._mNCreativeList && a && (e = window._mNCreativeList[r[a]]);
          }
          return e;
        },
      };
    })();
    window._cmL1Define('product-type-helper', [_mN], function (t) {
      function n (t) {
        if (t.getEntity('nmovl')) return 1;
        var n = t.getEntity('ms') || t.getEntity('msa');
        return s.isStringSet(n) ? 2 : 0;
      }
      function e (n) {
        return s.checkItemExists(t._msEnN, n);
      }
      function i (n) {
        return s.checkItemExists(t._movOnN, n);
      }
      function r (n) {
        return s.checkItemExists(t._intscrlTag, n);
      }
      function I (n) {
        var i = [],
          I = n.getEntity('crid');
        return (
          s.isOptionSet(t._insl) && i.push(u.INTERSTITIAL),
          s.isOptionSet(t._exitinsl) && i.push(u.EXIT_INTERSTITIAL),
          r(I) && i.push(u.INTERSCROLLER),
          e(I) && i.push(u.NEW_MOBILE_OVERLAY),
          i
        );
      }
      function E (t) {
        for (var n = I(t), e = 0; e < n.length; e++)
          if (s.checkItemExistsInArray(c, n[e]))
            return t.addEntity('nat_disable_product_type', { value: !0, isUrlEntity: !1 }), !0;
        return !1;
      }
      var s = t.util,
        u = { NEW_MOBILE_OVERLAY: 1, INTERSTITIAL: 2, EXIT_INTERSTITIAL: 3, INTERSCROLLER: 4 },
        c = [u.INTERSTITIAL, u.EXIT_INTERSTITIAL];
      return {
        getMobileClickFlag: n,
        isNewDockedUnitSupported: e,
        isNewDockedUnitOnly: i,
        shouldFailoverNativeBasedOnProductType: E,
        isInterscrollerAdtag: r,
      };
    });
    !(function (t, e, n, i) {
      'use strict';
      function c () {
        var t = 'mnet_ad_pref_close',
          e = d.isFunction(s.mngc) ? s.mngc(t) : '';
        return d.isStringSet(e) ? e.split('|') : [];
      }
      function r (t) {
        var e = 'mnet_ad_pref_close';
        d.isFunction(s.mnssc) &&
          (t.length > 0 ? s.mnssc(e, t.join('|'), 43200) : s.mnssc(e, '', -1));
      }
      function o (t) {
        function e (e, n) {
          var o = t.getEntity('crid'),
            u = c();
          d.checkItemExistsInArray(u, o) || u.push(o),
            i.privacy.isActionPermitted('adprefc') && r(u);
        }
        function n (e, n) {
          var o = t.getEntity('crid'),
            u = c(),
            s = [];
          d.each(u, function (t) {
            t !== o && s.push(t);
          }),
            i.privacy.isActionPermitted('adprefc') && r(s);
        }
        this.init = function () {
          i.addToEventQueue('adPrefClose', t.getEntity('vi'), e),
            i.addToEventQueue('adPrefShow', t.getEntity('vi'), n);
        };
      }
      function u (t) {
        new o(t.adScope).init();
      }
      var d = n.util,
        s = n._util,
        a = d.getAdTagUID();
      t._cmL1Define('mnet-ad-preference', function () {
        function t (t) {
          return (
            d.isStringSet(t.getEntity('crid')) &&
            d.checkItemExistsInArray(c(), t.getEntity('crid'))
          );
        }
        return { blockIfAdPreferenceSet: t };
      }),
        d.addToEventQueue('load::AD_PREFERENCE', a, u),
        d.resolveModuleLoad(a);
    })(window, document, _mN, _mNDetails);
    !(function (e, t, i, n, a) {
      'use strict';
      function r (e, i) {
        try {
          var n = o(i);
          s.isStringSet(n) && (t.getElementById(n).style.display = 'none'),
            i && i.viewId && s.triggerAdTagEvent(i.viewId, 'hideAttributionDiv');
        } catch (a) {}
      }
      function d (e) {
        var t = '';
        try {
          t = e && e.type && 'fc' === e.type ? e.placeholder : o(e);
        } catch (i) {}
        return t;
      }
      function v (e, t) {
        try {
          var i = d(t);
          if (s.isStringSet(i)) {
            var n = 100;
            s.callWhenAvailable(
              i,
              n,
              function (e) {
                e.style.display = 'none';
              },
              !0
            );
          }
          t && t.viewId && s.triggerAdTagEvent(t.viewId, 'hideAttributionDiv');
        } catch (a) {}
      }
      function g (e) {
        try {
          if (e.origin == i._dUrl) {
            var t = JSON.parse(e.data);
            if (!t || !t.mnEvnId || !t.type) return;
            t.params || (t.params = {}),
              (t.params.originalEvent = e),
              1 == t.params.delay
                ? s.triggerAdTagEventWhenQueued(t.mnEvnId, t.type, t.preventDelete, t.params)
                : s.triggerAdTagEvent(t.mnEvnId, t.type, t.preventDelete, t.params);
          }
        } catch (n) {}
      }
      function o (e) {
        var t = '';
        try {
          if (e && e.viewId) {
            var i = e.type;
            t = n[e.viewId][i + 'frameId'];
          } else t = e.id;
        } catch (a) {}
        return t;
      }
      function l (i, n) {
        var a = o(n);
        try {
          n &&
            a &&
            (s.isStringSet(n.width) && (t.getElementById(a).width = n.width),
            s.isStringSet(n.height) && (t.getElementById(a).height = n.height),
            e.frameElement &&
              (s.isStringSet(n.width) && (e.frameElement.width = n.width),
              s.isStringSet(n.height) && (e.frameElement.height = n.height)));
        } catch (r) {}
      }
      function u () {
        function e (e, t) {
          n.POCGen && n.POCGen(null, t.list);
        }
        function t (e, t) {
          n.logPerformance && n.logPerformance(t.vi, t.cid, t.hvsid);
        }
        var i = 'measurePerf_l1',
          a = 'logPerf_l1';
        n.addToEventQueue(i, m.getEntity('vi'), e), n.addToEventQueue(a, m.getEntity('vi'), t);
      }
      function c () {
        s.eventLib.addEvent(e, 'message', g),
          s.addToEventQueue('hideAdFrames', m.getEntity('vi'), r),
          s.addToEventQueue('hideAdFramesWhenAvailable', m.getEntity('vi'), v),
          s.addToEventQueue('alterAdFrameDimension', m.getEntity('vi'), l),
          u();
      }
      function h (e) {
        (m = e.adScope), c();
      }
      var m,
        s = i.util,
        E = s.getAdTagUID();
      s.addToEventQueue('load::CUSTOM_EVENTS', E, h), s.resolveModuleLoad(E);
    })(window, document, _mN, _mNDetails);
    window._cmL1Define('intersectionapi', [window._mN, window._mN._mNRP], function (n, e) {
      function t (n, t, o, r) {
        function c () {
          return e.execSafe(a);
        }
        function s (e) {
          v && (e.unobserve(n), c(), (S = !1));
        }
        function u (n, t) {
          n.forEach(function (n) {
            n.intersectionRatio >= m
              ? (clearTimeout(f),
                (f = setTimeout(function () {
                  e.execSafe(s, t);
                }, d)),
                (v = !0))
              : (v = !1);
          });
        }
        var a,
          f,
          w = i.isSet(t) ? t : window,
          m = i.isSet(o) ? o : 0.5,
          v = !1,
          S = !1,
          b = { rootMargin: '0px', threshold: m },
          d = parseInt(r || 1000, 10);
        (this.setCustomLoggingParamsCallback = function (n) {
          a = n || function () {};
        }),
          (this.startObserving = function () {
            if (i.isSet(n)) {
              var t = new w.IntersectionObserver(function (n, t) {
                e.execSafe(u, n, t);
              }, b);
              t.observe(n);
            }
          });
      }
      var i = n.util;
      return t;
    });
    window._cmL1Define(
      'intersection-helper',
      [window._mN, window._mNDetails, 'intersectionapi', 'fallback-vimp'],
      function (t, i, e, n) {
        function r () {
          try {
            return g.inIframe && g.getTopmostAccessibleWindow() !== window.top;
          } catch (t) {
            return !0;
          }
        }
        function o () {
          try {
            return '1' === t._ampadtag;
          } catch (i) {
            return !1;
          }
        }
        function a () {
          return i.privacy.shouldBlockAdPerformanceMeasurement();
        }
        function c (c, u, s) {
          function f (i, e) {
            if (
              !a() &&
              (!g.isStringSet(L) && g.isStringSet(t._vlog) && ((L = t._vlog + '?'), (k = 'lf=3&')),
              g.isStringSet(L))
            ) {
              var n = i();
              (1 == n.vgd_ifimp || r() || o()) && e && ((k = 'lf=5&'), (n.vgd_viab = void 0));
              var c = L + k + g.buildUrlParameters(n);
              t._trunLogUrl && (c = g.truncateUrl(c, t._trunLogUrl)), g.logBeacons([c]);
            }
          }
          function m (t) {
            var i = (t && t.clientWidth) || 0,
              e = (t && t.clientHeight) || 0;
            return i * e >= S ? p : I;
          }
          function d (t, i) {
            var e = {};
            if (!g.isSet(i)) return e;
            if (1 == t)
              switch (m(i)) {
                case p:
                  (e.viewThreshold = T), (e.waitTime = y);
                  break;
                case I:
                default:
                  (e.viewThreshold = V), (e.waitTime = P);
              }
            else (e.viewThreshold = A), (e.waitTime = C);
            return e;
          }
          function v (t, i, n, r) {
            var o = new e(i, t, r.viewThreshold, r.waitTime);
            o.setCustomLoggingParamsCallback(function () {
              h(i, n);
            }),
              o.startObserving();
          }
          function w (t, i, e) {
            var n = t.observerScope || window;
            v(n, e, t, i);
          }
          function h (i, e, n) {
            var r = i && i.getAttribute && i.getAttribute('id');
            g.isStringSet(r) &&
              g.isFunction(g.triggerAdTagEventWhenQueued) &&
              (g.triggerAdTagEventWhenQueued(r, 'adtagVisible'),
              g.triggerAdTagEventWhenQueued(s, 'adtagVisible')),
              t._custom &&
                'function' == typeof t._custom.onViewCustomCallback &&
                t._custom.onViewCustomCallback(),
              g.isFunction(e.customCallback) && l.execSafe(e.customCallback),
              g.isFunction(e.customLoggingParams) && f(e.customLoggingParams, n);
          }
          function _ (t, i, e) {
            if ('ifr' == t.type || r()) f(t.customLoggingParams, !0);
            else {
              var o = new n(i.viewThreshold, i.waitTime);
              try {
                o.init({
                  c: e,
                  frame: e,
                  cb: function () {
                    h(e, t, !0);
                  },
                });
              } catch (a) {}
            }
          }
          function b () {
            return 'function' == typeof window.IntersectionObserver;
          }
          var p = 1,
            T = 0.3,
            S = 242000,
            y = parseInt(t._vT || 1000, 10),
            I = 0,
            V = 0.5,
            P = parseInt(t._vT || 1000, 10),
            A = 0.5,
            C = parseInt(t._vT || 500, 10),
            L = '',
            k = '';
          this.init = function (t) {
            try {
              var e = function () {};
              b()
                ? (t.addVogonParamtoLocHash('isiolc', '1'), (e = w))
                : (t.addVogonParamtoLocHash('isiolc', '0'), (e = _)),
                i.addToEventQueue('VIMP::initObserver', s, function (t, i) {
                  g.callWhenAvailable('#' + i.targetElement, 200, function (n) {
                    var r = d(t.adScope.getEntity('vimpIAB'), n);
                    e(i, r, n);
                  });
                });
            } catch (n) {}
          };
        }
        function u () {
          if (void 0 === i._mNVI) {
            var t = {};
            (t.trigger = function () {}),
              (t.triggerID = function () {}),
              (t.triggerCB = function () {}),
              (window._mNDetails._mNVI = t),
              (window._mN._mNVI = t);
          }
        }
        function s (t, i, e, n) {
          0 != n.getEntity('vif') && new c(t, i, e).init(n);
        }
        var g = t.util,
          l = t._mNRP;
        return { init: s, exposeDummyOldVimp: u };
      }
    );
    window._cmL1Define('fallback-vimp', [window, document, _mN, _mN.util], function (e, t, n, i) {
      function r (n, r) {
        function o () {
          if (m.rp.X + m.d.X >= 0 && m.rp.Y + m.d.Y >= 0 && m.rp.X <= X.X && m.rp.Y <= X.Y) {
            var e = {
                X: m.rp.X + m.d.X > X.X ? X.X : m.rp.X + m.d.X,
                Y: m.rp.Y + m.d.Y > X.Y ? X.Y : m.rp.Y + m.d.Y,
              },
              t = {
                x: m.rp.X >= 0 ? (X.X - m.rp.X) / m.d.X : e.X / m.d.X,
                y: m.rp.Y >= 0 ? (X.Y - m.rp.Y) / m.d.Y : e.Y / m.d.Y,
              };
            if (
              t.x !== !1 &&
              t.y !== !1 &&
              ((t.x = t.x >= 1 ? 1 : t.x), (t.y = t.y >= 1 ? 1 : t.y), t.x * t.y >= n)
            )
              return !0;
          }
          return !1;
        }
        function c () {
          if (
            (i.eventLib.removeEvent(a.win, 'scroll', u.scroll),
            i.eventLib.removeEvent(a.win, 'resize', u.resize),
            i.isFunction(m.cb))
          )
            return m.cb.call();
        }
        function d () {
          o()
            ? void 0 === l && (l = setTimeout(c, r))
            : void 0 !== l && (clearTimeout(l), (l = void 0));
        }
        function f () {
          if (i.inIframe) {
            var e = i.getTopmostAccessibleWindow();
            return void (a = {
              win: e,
              doc: e.document,
              dE: e.document.documentElement || !1,
              dB: e.document.body || !1,
            });
          }
          a = p;
        }
        function s (e, t) {
          (m.p = v.pos(e)), (m.d = v.dim(e)), (X = v.vpSize()), (m.rp = v.rpos(m.p, t));
        }
        function Y () {
          (u.scroll = v.throttle(100, w)),
            (u.resize = v.throttle(100, h)),
            i.eventLib.addEvent(a.win, 'scroll', u.scroll),
            i.eventLib.addEvent(a.win, 'resize', u.resize);
        }
        (n = n || 0.5), (r = r || 1000);
        var l,
          X = {},
          u = {},
          a = {},
          p = { win: e, doc: t, dB: t.body || !1, dE: t.documentElement || !1 },
          m = {},
          v = {
            pos: function (t) {
              var n = t,
                i = { X: 0, Y: 0 },
                r = e;
              try {
                do
                  if (n.offsetParent) {
                    do (i.X += n.offsetLeft), (i.Y += n.offsetTop);
                    while ((n = n.offsetParent));
                  }
                while ((n = r.frameElement) && (r = r.parent));
              } catch (o) {}
              return i;
            },
            scroll: function () {
              var e = (a.win.pageYOffset && { X: a.win.pageXOffset, Y: a.win.pageYOffset }) || {},
                t = (a.dE && { X: a.dE.scrollLeft, Y: a.dE.scrollTop }) || {},
                n = (a.dB && { X: a.dB.scrollLeft, Y: a.dB.scrollTop }) || {};
              return {
                X: Math.max(e.X || 0, t.X || 0, n.X || 0),
                Y: Math.max(e.Y || 0, t.Y || 0, n.Y || 0),
              };
            },
            rpos: function (e, t) {
              var n = this.scroll(),
                i = { X: 0, Y: 0 };
              return (
                (i.X = e.X - n.X), (i.Y = e.Y - n.Y), t && t.offset ? v.offsetRpos(i, t.offset) : i
              );
            },
            offsetRpos: function (e, t) {
              return (
                t.X &&
                  (e.X >= 0
                    ? ((e.X -= t.X), e.X <= 0 && (e.X = X.X / 2))
                    : ((e.X += t.X), e.X > X.X && (e.X = X.X / 2))),
                t.Y &&
                  (e.Y >= 0
                    ? ((e.Y -= t.Y), e.Y <= 0 && (e.Y = X.Y / 2))
                    : ((e.Y += t.Y), e.Y > X.Y && (e.Y = X.Y / 2))),
                e
              );
            },
            vpSize: function () {
              return {
                X: a.win.innerWidth || (a.dE && a.dE.clientWidth) || (a.dB && a.dB.clientWidth),
                Y: a.win.innerHeight || (a.dE && a.dE.clientHeight) || (a.dB && a.dB.clientHeight),
              };
            },
            dim: function (e) {
              return { X: e.clientWidth, Y: e.clientHeight };
            },
            throttle: function (e, t) {
              var n = new Date().getTime();
              return function () {
                var i = new Date().getTime();
                i - n >= e && ((n = i), t.apply(null, arguments));
              };
            },
          },
          w = function () {
            o() && (m.p = v.pos(m.frame)), (m.rp = v.rpos(m.p, m.miscParams)), d();
          },
          h = function () {
            s(m.frame, m.miscParams), d();
          };
        this.init = function (e) {
          (m = e), f(), s(m.frame, m.miscParams), Y(), d();
        };
      }
      return r;
    });
    !(function (t, i, e, n) {
      'use strict';
      function r (t) {
        function i (t, i, e, r) {
          var d = {},
            a = c.extend(t.getFinalHashLogParamsAsObject(), i);
          return (
            c.each(e, function (t) {
              d[t] = a[t];
            }),
            (d = c.merge(n.privacy.getMainFlag(), d)),
            (d.hvsid = r),
            d
          );
        }
        function r (t) {
          var i = {
            prid: t.getEntity('prid') || '',
            cid: t.getEntity('cid'),
            crid: t.getEntity('crid'),
            requrl: t.getEntity('requrl').replace(/#.*/g, '') || '',
            chid: t.getEntity('chid'),
            vi: t.getEntity('vi'),
            ugd: t.getEntity('ugd'),
            cc: t.getEntity('cc'),
            sc: e._ip2allsc || '',
            bdrid: t.getRTBSDetails('winProv') || t.getEntity('bdrId') || '',
            subBdr: t.getHashEntity('sbdrId') || '',
          };
          return (
            (i = c.merge(n.privacy.getMainFlag(), i)),
            c.each(t.getFinalHashLogParamsAsObject(), function (t, e) {
              i[e] = c.isStringSet(i[e]) ? i[e] : t;
            }),
            (i.sbdrId = ''),
            i
          );
        }
        function d (t) {
          var i = r(t);
          return (i.vgd_ifimp = 1), i;
        }
        function a (e, a) {
          var o = a.type;
          if (!t.getEntity('nmovl') || 'dfp' == o || 'rtbs' == o || 'ifr' == o || 'insl' == o) {
            var v;
            (v =
              'dfp' == o
                ? function () {
                    return i(t, a.data, g, t.getVisitId());
                  }
                : 'rtbs' == o
                ? function () {
                    return i(t, a.data, u, t.getVisitId());
                  }
                : 'function' == typeof a.shouldOverrideLogFunction
                ? a.shouldOverrideLogFunction
                : 'ifr' == o
                ? function () {
                    return d(t);
                  }
                : function () {
                    return r(t);
                  }),
              n.triggerAdTagEvent(t.getEntity('vi'), 'VIMP::initObserver', !0, {
                targetElement: a.targetElement,
                observerScope: a.observerScope,
                customLoggingParams: function () {
                  return c.merge(s(a), v());
                },
                type: o,
                customCallback: a.customCallback,
              });
          }
        }
        function s (i) {
          var e = [];
          if (
            (t.getEntity('adt1') && (e.vgd_hb_audit_1 = t.getEntity('adt1')),
            t.getEntity('adt2') && (e.vgd_hb_audit_2 = t.getEntity('adt2')),
            t.getParamFromLocHash('l2type') && (e.vgd_l2type = t.getParamFromLocHash('l2type')),
            'setting' === t.getParamFromLocHash('l2type') && i.setting)
          ) {
            var n = i.setting;
            n.pid && (e.pid = n.pid);
          }
          var r = t.getEntity('vimpIAB');
          c.isSet(r) && 1 == r && (e.vgd_viab = 1);
          var d = t.L2;
          if (d) {
            var a = d.getParam('katObj') || {};
            for (var g in a) e[g] = a[g];
            e.cme = d.getParam('cme');
          }
          return e;
        }
        function v () {
          n.addToEventQueue('VIMP::Detect_L1', t.getEntity('vi'), a),
            n.addToEventQueue('VIMP::Detect', t.getEntity('vi'), a);
        }
        this.initVimp = function () {
          o.init(t.getEntity('cid'), t.getEntity('crid'), t.getEntity('vi'), t), v();
        };
      }
      function d (t) {
        new r(t.adScope).initVimp();
      }
      var c = e.util,
        a = c.getAdTagUID(),
        g = [
          'prid',
          'cid',
          'crid',
          'pid',
          'size',
          'vi',
          'l1ch',
          'l2ch',
          'l2wsip',
          'l2ac',
          'ugd',
          'chnm',
          'chnm2',
          'chnm3',
          'requrl',
          'kwrf',
          'bdrid',
          'subBdr',
          'vsid',
          'cc',
          'sc',
          'vgd_isiolc',
        ],
        u = [
          'prid',
          'cid',
          'crid',
          'pid',
          'size',
          'vi',
          'l1ch',
          'l2ch',
          'l2wsip',
          'l2ac',
          'ugd',
          'chnm',
          'chnm2',
          'chnm3',
          'requrl',
          'kwrf',
          'bdrid',
          'subBdr',
          'vsid',
          'cc',
          'sc',
          'vgd_isiolc',
        ],
        o = t._cmL1Require(['intersection-helper'])[0];
      c.addToEventQueue('dependencyResolved', a, o.exposeDummyOldVimp),
        c.addToEventQueue('load::NEW_VIMP', a, d),
        c.resolveModuleLoad(a);
    })(window, document, _mN, _mNDetails);
    !(function (e, n, l, i, t) {
      'use strict';
      function o (e, n) {
        _.isSet(n) &&
          _.isSet(n.newPlaceholder) &&
          (e.adScope.addEntity('prev_placeholder', { value: l._placeholder, isUrlEntity: !1 }),
          (l._placeholder = n.newPlaceholder));
      }
      function d (e, n, i) {
        _.isStringSet(e) &&
          ((l._crid = i || l._crid),
          (l._size = n || l._size),
          (l._placeholder = e),
          _.triggerAdTagEvent('gbl', 'slotDefined', _.isOptionSet(l._slot)));
      }
      function a (e, n, l) {
        var i = _.getRequireModule('lazyload');
        if (_.isFunction(i)) {
          var t = new i(e, l);
          if (t.shouldLazyLoadTag('loadtag'))
            return void t.load(function () {
              d(e, n, l);
            });
        }
        d(e, n, l);
      }
      function u (n, i, t) {
        (l._crid = n || l._crid),
          (l._size = i || l._size),
          (l._placeholder = '@body:0'),
          (l._callback = t),
          (e._mN._rtbs._reqTag = !0),
          _.triggerAdTagEvent('gbl', 'slotDefined', _.isOptionSet(l._slot));
      }
      function c (e) {
        var n, l;
        for (n = 0, l = e.length; n < l; n++) _.isFunction(e[n]) && e[n].call(null);
      }
      function r () {
        e._mNHandle !== t
          ? (c(e._mNHandle.queue), (e._mNHandle.queue = g))
          : ((e._mNHandle = {}), (e._mNHandle.queue = g));
      }
      function s (e) {
        _.isFunction(i.defineSlot) ||
          ((i.defineSlot = a), (i.loadTag = a), (i.requestTagInfo = u), r());
      }
      var _ = l.util,
        f = _.getAdTagUID(),
        g = {};
      (g.push = function (e) {
        _.isFunction(e) && e.call(null);
      }),
        _.addToEventQueue('dependencyResolved', f, s),
        _.addToEventQueue('updatePlaceholder', f, o),
        _.resolveModuleLoad(f);
    })(window, document, _mN, _mNDetails);
    window._cmL1Define('provider-details', function () {
      return {
        PD_LOGGING_FUNCTION: 'logFunc',
        PD_WINNING_PROVIDER: 'winProv',
        PD_SUB_BIDDER_ID: 'subBdr',
        PD_WIN_REASON: 'winReason',
        PD_BID: 'bid',
        PD_GOOGLEBID: 'gbid',
        PD_BID_DATA: 'bidData',
        PD_MATCH_STRING: 'matchString',
        PD_YBNCA_VARIANT: 'variant',
        PD_ADCODE: 'adCode',
        PD_NATIVEADCODE: 'natAdCode',
        PD_IS_WINNER_LOGGED: 'isWinLogged',
        PD_RTBS_AUCTION_COMPLETE_TIME: 'rtbsTime',
        PD_IS_NATIVE: 'is_native',
        PD_IS_NATIVE_WINNER: 'isNatWin',
        PD_AUCTION_ID: 'aid',
        PD_DFP_TARGETING_PARAMS: 'dfpTgt',
      };
    });
    window._cmL1Define('rtbs-common-helper', ['l1-constants', window._mNDetails], function (t, e) {
      function i (i) {
        function a () {
          r.addToDelayedEventQueue('iframePlaced', i.getEntity('vi'), function (t, e) {
            u = e.iframeInstance;
          });
        }
        function s (t, e) {
          try {
            if (r.isStringSet(e)) {
              var i = t.document;
              return (
                t['inner' + e] ||
                (i.documentElement && i.documentElement['client' + e]) ||
                (i.body && i.body['client' + e])
              );
            }
          } catch (n) {}
          return '';
        }
        function c (t) {
          return s(t, 'Width');
        }
        function o (t) {
          return s(t, 'Height');
        }
        function g () {
          var t = '',
            e = '';
          return (
            window &&
              window.screen &&
              ((t = window.screen.height || t), (e = window.screen.width || e)),
            { height: t, width: e }
          );
        }
        function d (e, i) {
          var n, a;
          switch (i) {
            case t.IFRAME_TYPE.DY_FRAME:
              a = e + '_n';
              break;
            case t.IFRAME_TYPE.INSL_FRAME:
              a = e.replace('dy', 'main') + '_0_n';
              break;
            case t.IFRAME_TYPE.GPT_FRAME:
              a = e.replace('_mN_dy', '_mN_gpt');
              break;
            case t.IFRAME_TYPE.MAIN_FRAME:
              a = e.replace('dy', 'main') + '_n';
          }
          if ((n = document.getElementById(a))) {
            var s = r.getIframeDoc(n)[1];
            return c(s) + 'x' + o(s);
          }
          return '';
        }
        function _ (e) {
          return r.isOptionSet(i.getEntity('isInsl'))
            ? d(e, t.IFRAME_TYPE.INSL_FRAME)
            : d(e, t.IFRAME_TYPE.DY_FRAME) || d(e, t.IFRAME_TYPE.MAIN_FRAME);
        }
        function m (e) {
          return d(e, t.IFRAME_TYPE.GPT_FRAME);
        }
        function l (t, e) {
          function i (t) {
            if (r.isStringSet(t)) {
              var i = t.split('!');
              if (2 == i.length) {
                var n = 'vgd_' + i[0] + 'hcsd';
                e[n] = i[1];
              }
            }
          }
          i(t.l1hcsd), i(t.l2hcsd);
        }
        var u = null;
        (this.getDefaultLogUrlParamsForPageView = function (t, a) {
          var s = {};
          (s = i.getVogonParamsFromLocHash()),
            (s = r.merge(e.privacy.getMainFlag(), s)),
            (s.dlper = i.getEntity('diDbLper') || ''),
            (s.l3ch = 4),
            (s.cc = i.getEntity('cc') || ''),
            (s.vgd_sc = _mN._ip2allsc || ''),
            (s.vgd_implt = 0),
            (s.movlimp = n.getMobileClickFlag(i));
          var d = e[t].dfpTgt;
          d && window.JSON && JSON.stringify && (s.vgd_dfp_tgt = JSON.stringify(d)),
            r.isStringSet(_mN._asn) && (s.vgd_asn = _mN._asn);
          var v = parseInt(i.getParamFromLocHash('stime'));
          isNaN(v) || (s.vgd_ltime = new Date().getTime() - v);
          var h = g();
          if (
            ((s.vgd_vstrid = i.getParamFromLocHash('vstrid')),
            (s.vgd_scr_h = h.height),
            (s.vgd_scr_w = h.width),
            (s.vgd_dma = i.getParamFromLocHash('dma')),
            (s.vgd_optout = r.isSet(_mN._optout) ? '1' : '0'),
            (s.vgd_l2type = i.getParamFromLocHash('l2type')),
            (s.vgd_bdata = i.getParamFromLocHash('bidData')),
            (s.vgd_matchstr = i.getParamFromLocHash('matchstring')),
            (s.vgd_is_amp = i.getEntity('is_amp')),
            r.isSet(u))
          ) {
            var E = r.getIframeDoc(u)[1];
            s.vgd_rensize = r.obfuscateSizeFormat(c(E) + 'x' + o(E));
          } else s.vgd_rensize = r.obfuscateSizeFormat(a ? m(t) : _(t));
          if (
            ((s.vgd_web_view = i.getEntity('web_view')),
            e.getLocHashAsArray && 'function' == typeof e.getLocHashAsArray)
          ) {
            var p = e.getLocHashAsArray(i.getEntity('crid'), i.getEntity('vi')) || {};
            r.isStringSet(p.l2wsip) && ((s.vgd_l2wsip = p.l2wsip), (s.wsip = p.l2wsip)), l(p, s);
          }
          return (
            (s.vgd_l2wsip = i.getParamFromLocHash('l2wsip')),
            (s.wsip = i.getParamFromLocHash('l2wsip')),
            r.buildUrlParameters(s)
          );
        }),
          a();
      }
      var r = _mN.util,
        n = r.getRequireModule('product-type-helper');
      return i;
    });
    window._cmL1Define('rtbs-constants', function () {
      var _ = {
        RTBS_DISABLE_REASONS: {
          NO_VALID_CRID: 1,
          NO_VALID_SIZE: 2,
          INTERSTITIAL: 3,
          DUPLICATE_ADTAG: 4,
          NO_RENDER_HALT_IMP: 5,
          ADTAG_DISABLED: 6,
          COUNTRY_BLOCKED: 7,
          VISITORID_COOKIE: 8,
          BIDDER_COOKIE: 9,
          NOOP: 10,
          EMAIL_ADDRESS_IN_PUBLISHER_URL: 11,
          SKIP_COOKIE_CHECK_VID: 12,
          SKIP_COOKIE_CHECK_BIDDER: 13,
          PERCENT_DISABLE: 14,
          HB_ADAPTER_FAILED: 15,
          L2_SRCFUL: 16,
          HB_CURL_EXCEPTION: 17,
          JS_TAG_ENABLED: 18,
          DISABLED_FROM_MACRO: 19,
        },
        RTBS_WIN_REASONS: {
          AUCTION_HOUSE_RESPONSE: 0,
          AUCTION_HOUSE_TIMEOUT: 1,
          NO_BID: 2,
          INVALID_RESPONSE: 3,
          INFEED_VIDEO: 4,
          ONLY_ADX: 5,
          AD_BLOCK_PLUS_DETECTED: 7,
          NATIVE_RA_WIN_BY_BID: 8,
          NATIVE_RA_WIN_BY_PERCENT: 9,
          GDPR_DISABLE: 10,
          IGNORE_YBNCA: 11,
          BIDCALLAPI_FAILED: 12,
          DFP_BASELINE_BUCKET: 13,
          RTBS_USER_COOKIE_FAILOVER: 14,
          RTBS_INCLUDE_CALL_TIMEOUT: 15,
          RTBS_ORIGIN_SERVER_REQUEST: 16,
          HB_DEFAULT: 100,
          INVALID_CONFIG: 101,
          EMPTY_BID: 102,
          MULTI_SIZE_CM: 103,
          NO_BID_FROM_CACHE: 104,
          MULTISIZE_LOSING_BID: 105,
          DEFAULT_NOBID_REASON: 106,
          CLIENT_INVALID_RESPONSE: 107,
          FLOOR_PRICE_REJECT: 108,
          BACKFILL_LINEITEM_PICKED: 109,
        },
        ADAPTER_NOBID_REASON_MAP: {
          8: 'CLIENT_INVALID_RESPONSE',
          9: 'FLOOR_PRICE_REJECT',
          11: 'INVALID_CONFIG',
          12: 'EMPTY_BID',
          13: 'MULTI_SIZE_CM',
          15: 'NO_BID_FROM_CACHE',
          98: 'MULTISIZE_LOSING_BID',
          99: 'DEFAULT_NOBID_REASON',
        },
        L3_MAX_WAIT_TIME_POST_TIMEOUT: 2000,
        CHECKTIME_POST_TIMEOUT: 100,
        FACEBOOK_BIDPRICE_FOR_LOGGING: '0.10',
      };
      return _;
    });
    window._cmL1Define('dfp-data-manager', [_mN, _mNDetails], function (t, i) {
      function e (e) {
        var s,
          f,
          d = e.getEntity('crid'),
          u = '_mN_dy_' + d;
        (this.getDyncId = function () {
          return u;
        }),
          (this.isInfeed = function () {
            return e.getEntity('infDfp');
          }),
          (this.getSwitchedSizeForDfpMobile = function (t, i) {
            var e = [];
            if (n.isStringSet(t.mobSizeSwitch))
              if ('1' === t.mobSizeSwitch || 'true' === t.mobSizeSwitch)
                e = i < 250 ? [320, 50] : [300, 250];
              else if (t.mobSizeSwitch.indexOf('x') !== -1) {
                var r = t.mobSizeSwitch.split('x');
                2 === r.length && n.isNumeric(r[0]) && n.isNumeric(r[1]) && (e = r);
              }
            return e;
          }),
          (this.getSizeForDfp = function (i) {
            var r = e.getEntity('size'),
              s = r.split('x'),
              f = n.safeReturn(s, 0),
              d = n.safeReturn(s, 1);
            if (
              (n.isSet(i.width) && n.isSet(i.height) && ((f = i.width), (d = i.height)),
              3 == n.getUgd() && !e.getEntity('nmovl'))
            ) {
              var u = this.getSwitchedSizeForDfpMobile(i, d);
              2 === u.length && ((f = u[0]), (d = u[1]));
            }
            if (e.getEntity('nmovl')) {
              var o = n.getUgd();
              (r = t._sizemovl.df),
                2 == o && (r = t._sizemovl.ipad),
                (s = r.split('x')),
                (f = n.safeReturn(s, 0)),
                (d = n.safeReturn(s, 1));
            }
            return [f, d];
          }),
          (this.getDfpParams = function () {
            if (void 0 === f) {
              var r = t._rtbs._dfpL1 && t._rtbs._dfpL1[e.getEntity('crid')];
              if (n.isObjectEmpty(r)) return null;
              var s = this.getSizeForDfp(r),
                d = n.safeReturn(s, 0),
                u = n.safeReturn(s, 1);
              (f = {
                slotId: r.slot,
                width: parseInt(d, 10) || 0,
                height: parseInt(u, 10) || 0,
                sizeList: r.sizeList || '',
                divId: r.elemId,
                tagid: e.getEntity('vi'),
                switchLogEvent: this.isInfeed(),
                v2: !0,
              }),
                (f = n.merge(f, i.privacy.getFlagForDFP()));
            }
            return f;
          }),
          (this.isDfpEnabled = function () {
            var i = e.getEntity('crid');
            if (!n.isStringSet(i)) return !1;
            var r = (t._rtbs && t._rtbs._dfpAdTags) || '',
              s = (t._rtbs && t._rtbs._dfpAdTagsEt) || {},
              f = r.indexOf(i) != -1 || 1 === s[i],
              d = t._rtbs && n.isOptionSet(t._rtbs._dfp),
              u = n.isSet(this.getDfpParams());
            return (
              !!(n.isStringSet(i) && d && f && u) &&
              (e.addEntity('hlt', 1), e.addEntity('dfp', 1), !0)
            );
          }),
          (this.getPublisherUrl = function () {
            return e.getEntity('requrlStripped') === !0
              ? e.getHashEntity('requrl')
              : e.getEntity('requrl');
          }),
          (this.isYbnWinner = function () {
            return this.isWinProvFromGroup(t._rtbs._ybncabId, i[u][r.PD_WINNING_PROVIDER]);
          }),
          (this.isWinProvFromGroup = function (t, i) {
            return t.indexOf('|' + i + '|') !== -1;
          }),
          (this.setMnetRefYbn = function (t) {
            s = t;
          }),
          (this.getMnetRefYbn = function () {
            return s;
          });
      }
      var n = t.util,
        r = window._cmL1Require(['provider-details'])[0];
      return e;
    });
    window._cmL1Define('dfp-ybn-display-manager', [_mN, _mNDetails], function (e, i) {
      function n (n, r, o, a) {
        var s,
          l = this,
          c = n.getEntity('vi'),
          u = r.getDyncId(),
          g = d.getRequireModule('hb-adapter-manager');
        (l.exposeDisplay = function () {
          void 0 === i.directAdShowV2 &&
            (i.directAdShowV2 = function (e) {
              a.addDFPEntity('liid', e.liid || ''),
                a.addDFPEntity('adid', e.adid || ''),
                a.addDFPEntity('dbdv', e.bid || ''),
                (i.directAdLoaded = !0);
            }),
            void 0 === i.showV2 &&
              (i.showV2 = function (e, n, d) {
                (d = d || !1), i[e].display(d), (i[e].dfpCallback = 1);
              }),
            (i[c].display = function (e) {
              e && l.overrideProviderDetailsForBackfill(),
                r.isYbnWinner() && d.triggerAdTagEvent(c, 'ybnWon'),
                d.triggerAdTagEventWhenQueued(c, 'displayAdAfterDfp'),
                s || (d.isSet(g) && g.reportAdxStatusIfApplicable(n.getEntity('crid'), !0)),
                l.shouldDisableYBNCARendering() && l.hideYBNCATag(),
                o.hideAdx();
            }),
            (s = i.abpDet),
            s
              ? l.ignoreDfpBecauseABP()
              : d.addToEventQueue('adBlockPlusDetected', 'gbl', l.ignoreDfpBecauseABP);
        }),
          (this.hideYBNCATag = function () {
            var e = document.getElementById(u.replace('dy', 'main') + '_n'),
              i = document.getElementById(u.replace('_mN_dy', '_mN_gpt'));
            e && (e.style = 'display:none !important'), i && (i.style = 'display:none !important');
          }),
          (this.overrideProviderDetailsForBackfill = function () {
            (i[u][t.PD_WIN_REASON] = RTBS_CONSTANTS.RTBS_WIN_REASONS.BACKFILL_LINEITEM_PICKED),
              r.isYbnWinner() && (i[u][t.PD_WINNING_PROVIDER] = e._rtbs._fObId);
          }),
          (this.modifyProviderDetailsForABP = function () {
            (i[u].winProv = e._rtbs._fObId), (i[u].winReason = 7), (i[u].isWinLogged = 1);
          }),
          (this.ignoreDfpBecauseABP = function () {
            (s = !0), l.modifyProviderDetailsForABP(), i.showV2(c);
          }),
          (this.shouldDisableYBNCARendering = function () {
            return 1 === n.getEntity('ignybn') && r.isYbnWinner();
          });
      }
      var d = e.util,
        t = window._cmL1Require(['provider-details'])[0];
      return n;
    });
    window._cmL1Define('dfp-logging-manager', [_mN, _mNDetails], function (t, d) {
      function i (i, r, a, o) {
        var c,
          E = {},
          y = r.getDyncId(),
          l = this,
          s = window._cmL1Require(['rtbs-common-helper'])[0],
          P = new s(i),
          D = n.getRequireModule('hb-adapter-manager');
        (l.addDFPEntity = function (t, d, i) {
          n.isStringSet(d) && ((i && !i.test(d)) || (E[t] = d));
        }),
          (l.getDFPEntity = function (t) {
            return E[t];
          }),
          (l.exposeLogging = function () {
            var e = n.isOptionSet(t._rtbs._dfpael) || r.isInfeed();
            e || a.googleTagCheck(),
              n.isFunction(d.logAdX) ||
                (d.logAdX = function (t, i, n) {
                  d[t].logAdX(n);
                }),
              (d[i.getEntity('vi')].logAdX = function (t) {
                e && l.logGoogleWin(t);
              }),
              d.addToEventQueue('logAdxWin', i.getEntity('vi'), function (t, d) {
                l.logGoogleWin(d && d.noContent);
              });
          }),
          (l.getAdxBidPriceForLogging = function () {
            return d[y].mnet_segment || d[y][e.PD_GOOGLEBID] || d[y][e.PD_BID];
          }),
          (l.logGoogleWin = function (t) {
            if (
              (n.triggerAdTagEvent(i.getEntity('vi'), 'rtbsWinDecided', !1, {
                type: 'dfp',
                crid: i.getEntity('crid'),
                vi: i.getEntity('vi'),
                timeout: c,
              }),
              !d[y].isWinLogged)
            ) {
              if (n.isOptionSet(t)) {
                if (r.isInfeed()) return;
                c = !0;
              }
              n.isSet(D) && D.reportAdxStatusIfApplicable(i.getEntity('crid'), !1),
                (d[y].isWinLogged = 1),
                (d[y].dfpProceed = -1),
                i.logLoggingBeacons([l.getDFPLogUrl()]),
                a.handleViewableImpressionAdX(E),
                (d[y].winProv = E.bdrid),
                (d[y].subBdr = E.subBdr),
                'function' == typeof d[y].logTimelineFunc && d[y].logTimelineFunc.call(),
                g('Logging pageview with dfp as winner', i.getEntity('crid')),
                d.triggerAdTagEvent(i.getEntity('crid'), 'onRtbsAdLoadComplete');
            }
          }),
          (l.getDFPLogUrl = function () {
            var d = [
              'prid',
              'cid',
              'crid',
              'pid',
              'size',
              'lineitemid',
              'vi',
              'ugd',
              'chid',
              'chnm',
              'chnm2',
              'chnm3',
              'kwrf',
              'bdrid',
              'subBdr',
              'bdrct',
              'vsid',
              'adx',
              'timeout',
              'liid',
              'adid',
              'dbdv',
              'oref',
              'kbbq',
              'tdAdd[]',
              'vgd_crefurl',
              'concrid',
              'iscont',
              'vgd_dfpnc',
              'vgd_refadx',
              'vgd_demp',
              'vgd_refcnf',
              'rtbsd',
              'bto',
              'vgd_aid',
              'vgd_rt',
              'vgd_l1ch',
              'vgd_l2ch',
              'pti',
              'vgd_l2ac',
              'https',
              'requrl',
              'vgd_mseg',
              'vgd_hb_audit_1',
              'vgd_hb_audit_2',
            ];
            l.loadDFPEntities();
            var i =
              t._rtbs._logurl +
              '?' +
              P.getDefaultLogUrlParamsForPageView(y, !0) +
              n.buildUrlParameters(E, d);
            return t._trunLogUrl && (i = n.truncateUrl(i, t._trunLogUrl)), i;
          }),
          (l.loadDFPEntities = function () {
            l.addDFPEntity('cid', i.getEntity('cid')),
              l.addDFPEntity('prid', i.getEntity('prid')),
              l.addDFPEntity('crid', i.getEntity('crid')),
              l.addDFPEntity('size', i.getEntity('size')),
              l.addDFPEntity('pid', t._rtbs._dpid),
              l.addDFPEntity('lineitemid', i.getParamFromLocHash('lineitemid')),
              l.addDFPEntity('requrl', r.getPublisherUrl()),
              l.addDFPEntity('kwrf', i.getEntity('kwrf')),
              l.addDFPEntity('vsid', i.getVisitorId()),
              l.addDFPEntity('cc', i.getEntity('cc')),
              l.addDFPEntity('sc', t._ip2allsc || ''),
              l.addDFPEntity('bdrid', o.getDfpBidderId()),
              l.addDFPEntity('subBdr', o.getMnetVariant()),
              l.addDFPEntity('bdrct', l.getAdxBidPriceForLogging()),
              l.addDFPEntity('vgd_mseg', d[y].mnet_segment),
              l.addDFPEntity('adx', 1),
              l.addDFPEntity('vi', i.getEntity('vi')),
              l.addDFPEntity('ugd', i.getEntity('ugd')),
              l.addDFPEntity('chid', i.getEntity('chid')),
              l.addDFPEntity('chnm', i.getEntity('chnm')),
              l.addDFPEntity('chnm2', i.getEntity('chnm2')),
              l.addDFPEntity('chnm3', i.getEntity('chnm3')),
              l.addDFPEntity('oref', i.getEntity('oref')),
              l.addDFPEntity('kbbq', i.getParamFromLocHash('kbbq')),
              l.addDFPEntity('tdAdd[]', i.getParamFromLocHash('tdAdd[]')),
              l.addDFPEntity('https', i.getEntity('https')),
              i.getEntity('adt1') && l.addDFPEntity('vgd_hb_audit_1', i.getEntity('adt1')),
              i.getEntity('adt2') && l.addDFPEntity('vgd_hb_audit_2', i.getEntity('adt2')),
              l.addDFPEntity('vgd_crefurl', encodeURIComponent(i.getEntity('cref')));
            var e = i.getEntity('concrid');
            n.isStringSet(e) && (l.addDFPEntity('concrid', e), l.addDFPEntity('iscont', '0')),
              c ? l.addDFPEntity('vgd_dfpnc', 1) : l.addDFPEntity('vgd_dfpnc', 0),
              l.addDFPEntity('vgd_demp', a.isDfpEmpty()),
              l.addDFPEntity('vgd_sc', E.sc),
              l.addDFPEntity('vgd_aid', d[y].aid),
              l.addDFPEntity('rtbsd', i.getParamFromLocHash('rtbsd')),
              l.addDFPEntity('bto', d[y].winReason),
              l.addDFPEntity('vgd_rt', d[y].rtbsTime),
              i.getEntity('is_nat') && l.addDFPEntity('pti', t._natpt),
              n.isStringSet(i.getEntity('l1ch')) &&
                l.addDFPEntity('vgd_l1ch', i.getEntity('l1ch')),
              n.isStringSet(i.getEntity('l2ch')) &&
                l.addDFPEntity('vgd_l2ch', i.getEntity('l2ch')),
              1 == i.getEntity('l2ac') && l.addDFPEntity('vgd_l2ac', '1');
          });
      }
      var n = t.util,
        e = window._cmL1Require(['provider-details'])[0],
        g = n.consoleLog || function () {};
      return i;
    });
    window._cmL1Define('dfp-target-manager', [_mN, _mNDetails], function (t, e) {
      function i (i, d) {
        function o (t, e, i, r) {
          var s = n.safeReturn(t, e);
          return (i = n.safeReturn(t, r) || i), 'undefined' != typeof s ? s : i;
        }
        var u,
          f,
          g,
          c = d.getDyncId();
        (this.getCustomDfpTargeting = function () {
          if (void 0 === u) {
            var e = {},
              r = t._dfpTgt;
            'object' == typeof r &&
              n.each(r, function (t, r) {
                r === i.getEntity('crid') && 'object' == typeof t
                  ? n.each(t, function (t, i) {
                      n.isStringSet(t) && n.isStringSet(i) && (e[i] = t);
                    })
                  : n.isStringSet(t) && n.isStringSet(r) && 'object' != typeof t && (e[r] = t);
              }),
              (u = e);
          }
          return u;
        }),
          (this.isYBNCAManualBidder = function () {
            return e[c] && e[c].winProv && e[c].winProv === parseInt(t._rtbs._ybncaMbId);
          }),
          (this.isYBNCAutoBidder = function () {
            return e[c] && e[c].winProv && e[c].winProv === parseInt(t._rtbs._ybncaAbId);
          }),
          (this.isFailoverOrTimeoutBidder = function () {
            var i = e[c].winProv || '';
            return (
              parseInt(i) === parseInt(t._rtbs._tObId) || parseInt(i) === parseInt(t._rtbs._fObId)
            );
          }),
          (this.getBidMultiplier = function () {
            var t = this.getBidMultiplierForDomainAndCountry(
              n.getHostname(i.getEntity('requrl')),
              i.getEntity('cc')
            );
            return this.isSegmentDisabled(t) ? '1' : t;
          }),
          (this.isSegmentDisabled = function (t) {
            return 'undefined' != typeof f
              ? f
              : (d.isInfeed() || i.getEntity('forceDfpWin')
                  ? (f = !0)
                  : ((t =
                      t ||
                      this.getBidMultiplierForDomainAndCountry(
                        n.getHostname(i.getEntity('requrl')),
                        i.getEntity('cc')
                      )),
                    (f = '-nobid-' === t)),
                f);
          }),
          (this.setForceDfpWinParam = function () {
            if (t._rtbs._fdfpwp && n.isPercentApp(t._rtbs._fdfpwp))
              i.addEntity('forceDfpWin', { value: !0, isUrlEntity: !1 });
            else {
              var e = this.getMnetBucket();
              e &&
                e.features &&
                e.features.nobid &&
                i.addEntity('forceDfpWin', { value: !0, isUrlEntity: !1 });
            }
          }),
          (this.getBidMultiplierForDomainAndCountry = function (e, i) {
            (i = i || ''), (i = i.toLowerCase());
            var n;
            t &&
              t._rtbs &&
              t._rtbs._dfpBidM &&
              (this.isYBNCAManualBidder() || this.isFailoverOrTimeoutBidder()
                ? (n = o(t._rtbs._dfpBidM, 'nonautoybn', {}))
                : this.isYBNCAutoBidder() && (n = o(t._rtbs._dfpBidM, 'auto', {})));
            var r = o(n, e, {}, 'default');
            return o(r, i, '1', 'default');
          }),
          (this.getMnetBucket = function () {
            var e = i.getEntity('cid'),
              r = i.getEntity('crid');
            if (void 0 === g && ((g = null), 'object' == typeof t._rtbs._adxBuckets)) {
              var s =
                t._rtbs._adxBuckets[r] || t._rtbs._adxBuckets[e] || t._rtbs._adxBuckets['default'];
              if (s && s.length > 0)
                for (var a = s.length, d = n.getRandom(1, 1000), o = 0, u = 0; u < a; u++)
                  if (((o = parseInt(o, 10) + parseInt(s[u].prct, 10)), d <= o)) {
                    g = s[u];
                    break;
                  }
            }
            return g;
          }),
          (this.getBidSegment = function () {
            var t = e[c][r.PD_GOOGLEBID] || e[c][r.PD_BID];
            return (
              n.isSet(s) &&
                (t = s.getAdxBidPrediction(i.getEntity('crid'), t, i.getEntity('size'))),
              this.isYBNCAManualBidder() ||
              this.isYBNCAutoBidder() ||
              this.isFailoverOrTimeoutBidder()
                ? n.decimalLimit(t * this.getBidMultiplier())
                : n.decimalLimit(t)
            );
          }),
          (this.getVariantFromRtbs = function () {
            return e[c].variant || '0';
          }),
          (this.getMnetVariant = function () {
            var i = this.getVariantFromRtbs(),
              r = e[c].subBdr || '';
            if (((i = parseInt(i, 10)), i === t._rtbs._bsVar)) return t._rtbs._bsSBid;
            if (this.isFailoverOrTimeoutBidder()) return '50';
            if (0 === i) return '0';
            if (1 === i) {
              if (!n.isStringSet(r)) return '1';
              if ((r >= 2 && r <= 50) || (r >= 300 && r <= 600)) return r.toString(10);
            }
            return '99';
          }),
          (this.getDfpTarget = function () {
            var r = this.getBidSegment(),
              s = {};
            n.isFunction(t._custom.getCustomizedDfpTargets) &&
              ((s = t._custom.getCustomizedDfpTargets(i)), 'object' != typeof s && (s = {})),
              (s.crid = i.getEntity('crid')),
              this.isSegmentDisabled() || (s.mnet_segment = r),
              d.isInfeed() && (s.mnet_infeed_v = 1),
              (s.mnet_variant = this.getMnetVariant()),
              (s.pub_domain = n.getHostname(d.getPublisherUrl())),
              (s.mnet_cc = i.getEntity('cc') || '');
            var o = this.getMnetBucket(),
              u = o && o.bid;
            n.isStringSet(u) && ((s.mnet_bucketid = u), (e[c].mnAxbx = o.appendtt)),
              i.getEntity('forceDfpWin') && (s.mnet_dfp_ol = 1),
              n.isStringSet(d.getMnetRefYbn()) && (s.mnet_ref_ybn = d.getMnetRefYbn()),
              i.getEntity('is_nat') &&
                (1 != i.getEntity('allowAdxDisplay') && (s.mnet_nat_disp = '0'),
                (s.mnet_nat_tpid = this.getFinalisedTemplate()));
            var f = this.getCustomDfpTargeting();
            return (
              'object' == typeof f &&
                n.each(f, function (t, e) {
                  s[e] = t;
                }),
              (e[c].dfpTgt = s),
              a(['DFP targeting:', s], i.getEntity('crid')),
              s
            );
          }),
          (this.getFinalisedTemplate = function () {
            return '';
          }),
          (this.getDfpBidderId = function () {
            var n = 3,
              r = this.getVariantFromRtbs();
            return (
              1 === parseInt(r, 10) && (n = 8),
              e.directAdLoaded === !0 && (n = 10),
              i.getEntity('forceDfpWin') && (n = t._rtbs._dfpBsBid),
              n
            );
          });
      }
      var n = t.util,
        r = window._cmL1Require(['provider-details'])[0],
        s = n.getRequireModule('hb-adapter-manager'),
        a = n.consoleLog || function () {};
      return i;
    });
    window._cmL1Define('gpt-manager', [_mN, _mNDetails], function (e, t) {
      function n (n, r, a) {
        var o,
          d,
          g,
          l,
          p = i.getRequireModule('hb-adapter-manager'),
          s = !1,
          f = r.getDyncId(),
          c = this,
          m = 0,
          u = !1;
        (c.setGPTIframeHandles = function () {
          var e = i.getIframeDoc(c.getGptIframe());
          (g = e[1]), (l = e[0]);
        }),
          (c.getGptIframeId = function () {
            var e = r.getDyncId();
            return void 0 === o ? (o = e.replace('_mN_dy', '_mN_gpt')) : o;
          }),
          (c.getGptIframe = function () {
            return void 0 == d && (d = i.queryDOM(c.getGptIframeId())), d;
          }),
          (c.getGptIframeWindow = function () {
            return void 0 == g && c.setGPTIframeHandles(), g;
          }),
          (c.getGptIframeDoc = function () {
            return void 0 == l && c.setGPTIframeHandles(), l;
          }),
          (c.getDfpContent = function () {
            return e._rtbs._dfpTagContent
              .replace(new RegExp('{{GOOGLE_IFRAME_ID}}'), c.getGptIframeId())
              .replace(new RegExp('{{MNET_UNIQUE_ID}}'), f)
              .replace(new RegExp('{{MNET_REQURL}}'), r.getPublisherUrl())
              .replace(
                new RegExp('{{CHILD_DIRECTED_TREATMENT}}'),
                i.isOptionSet(e._tfcd) ? '1' : '0'
              );
          }),
          (c.loadDFPIframe = function () {
            if (!u) {
              var e = i.getRequireModule('common-rendering-helper');
              e.writeDfpPlaceholderIfNotPresent(n);
              var t = c.getDfpContent(),
                r = {};
              if (c.isDFPSandboxRequired()) {
                var a =
                  'allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock allow-popups-to-escape-sandbox';
                i.isSafari() &&
                  (a =
                    'allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock'),
                  (r.sandbox = a);
              }
              var o = { disable: !0 };
              e.writeAdCodeInIframeGeneric(
                n.getEntity('vi'),
                c.getGptIframeId(),
                t,
                { w: 0, h: 0 },
                n.getEntity('placeholder') || n.getEntity('dfpPlaceholder'),
                o,
                r
              ),
                (u = !0);
            }
          }),
          (c.isDFPSandboxRequired = function () {
            return e && e._rtbs && e._rtbs._dfpSbx;
          }),
          (c.setDFPSlot = function () {
            if (!t.abpDet) {
              var e = r.getDfpParams();
              i.isSet(p) &&
                i.isFunction(p.fetchRulesFromRuleEngine) &&
                p.fetchRulesFromRuleEngine(e.slotId),
                c.loadDFPIframe();
              try {
                c.getGptIframeWindow().setDFPSlot(e);
              } catch (n) {}
            }
          }),
          (c.setDfpDisplay = function () {
            var e = r.getDfpParams();
            (e.target = a.getDfpTarget()),
              i.isSet(p) && (e.applyRules = p.applyRulesFromRuleEngine),
              (t[r.getDyncId()].mnet_segment = e.target.mnet_segment || ''),
              c.loadDFPIframe();
            try {
              c.getGptIframeWindow().setDFPDisplay(e);
            } catch (o) {
              return t.showV2(n.getEntity('vi'), window);
            }
          }),
          (c.getDfpDivId = function () {
            var e = r.getDfpParams();
            return e.divId;
          }),
          (c.isDfpEmpty = function () {
            return s;
          }),
          (c.exposeHideFunctions = function () {
            var e = n.getEntity('vi');
            i.isFunction(t.checkAndHideAdxFrame) ||
              (t.checkAndHideAdxFrame = function (e) {
                t[e].checkAndHideAdxFrame();
              }),
              (t[e].checkAndHideAdxFrame = function () {
                if (((s = 1), r.isInfeed())) {
                  var e = c.getGptIframe();
                  if (e) {
                    e.style.cssText = 'display:none !important;';
                    try {
                      0 === e.parentNode.id.indexOf('_mN_infd') &&
                        (e.parentNode.style.cssText = 'display:none !important;');
                    } catch (t) {}
                  }
                }
              });
          }),
          (c.deleteGptFrame = function () {
            var e = c.getGptIframe();
            return !(!e || !e.parentNode) && (e.parentNode.removeChild(e), !0);
          }),
          (c.hideAdx = function () {
            var e = c.getGptIframe();
            e && (e.style.cssText = 'display:none !important;');
          }),
          (c.handleViewableImpressionAdX = function (e) {
            if (i.isOptionSet(n.getEntity('vif'))) {
              var r = c.getGptIframeId();
              r &&
                t.triggerAdTagEvent(n.getEntity('vi'), 'VIMP::Detect', !0, {
                  targetElement: r,
                  data: e,
                  type: 'dfp',
                });
            }
          }),
          (c.googleTagCheck = function () {
            var e = c.getDfpDivId(),
              r = 100,
              a = n.getEntity('vi'),
              o = 60000,
              d = c.getGptIframeDoc();
            if (!i.isOptionSet(t[f].isWinLogged) && !i.isOptionSet(t[a].dfpCallback)) {
              for (
                var g, l, p = d.getElementById(e).getElementsByTagName('iframe'), s = p.length;
                s--;

              )
                'hidden' !== p[s].style.visibility &&
                  'none' !== p[s].style.display &&
                  (p[s].src &&
                    p[s].src.toLowerCase().indexOf('googlesyndication.com') !== -1 &&
                    i.triggerAdTagEvent(a, 'logAdxWin'),
                  (g = i.getIframeDoc(p[s])),
                  (l = g[0] && (g[0].body || g[0].getElementsByTagName('body')[0])),
                  l && l.children.length > 0 && i.triggerAdTagEvent(a, 'logAdxWin'));
              m < o
                ? setTimeout(function () {
                    (m += r), c.googleTagCheck();
                  }, r)
                : i.triggerAdTagEvent(a, 'logAdxWin', { noContent: !0 });
            }
          });
      }
      var i = e.util;
      return n;
    });
    !(function (e, n, t, a) {
      'use strict';
      function i (e, n, t, a, i, d, s) {
        function u () {
          t.setDfpDisplay(), i.exposeLogging(), t.exposeHideFunctions();
        }
        this.init = function () {
          n.isDfpEnabled() &&
            ((_mNDetails[n.getDyncId()] = _mNDetails[n.getDyncId()] || {}),
            s.setForceDfpWinParam(),
            d.setRefreshListeners(),
            a.exposeDisplay(),
            o.addToEventQueue('afterLoad', e.uid, t.setDFPSlot),
            o.addToDelayedEventQueue('bidDone', e.getEntity('vi'), u));
        };
      }
      function d (n) {
        o.addToEventQueue('initDFPV2', n.adScope.uid, function (n) {
          var t = [
            'dfp-data-manager',
            'gpt-manager',
            'dfp-ybn-display-manager',
            'dfp-logging-manager',
            'dfp-target-manager',
          ];
          e._cmL1Require(t, function (e, t, a, d, s) {
            var u =
                o.getRequireModule('dfp-refresh-manager') ||
                function () {
                  this.setRefreshListeners = function () {};
                },
              c = new e(n.adScope),
              p = new s(n.adScope, c),
              r = new t(n.adScope, c, p),
              f = new d(n.adScope, c, r, p),
              g = new a(n.adScope, c, r, f),
              D = new u(n.adScope, c, r, f);
            new i(n.adScope, c, r, g, f, D, p).init();
          });
        });
      }
      var o = t.util,
        s = o.getAdTagUID();
      o.addToEventQueue('load::DFPV2', s, d), o.resolveModuleLoad(s);
    })(window, document, _mN);
    !(function (t, r, i, n, e) {
      'use strict';
      t._cmL1Define('rtbs-helper', ['rtbs-constants', 'l1-constants'], function (t, r) {
        function s () {
          function t (t) {
            return (
              !!a.isOptionSet(t.getEntity('isExitInsl')) &&
              (t.addParamtoLocHash(_, o.INTERSTITIAL), !0)
            );
          }
          function r (t, r) {
            return a.isStringSet(t.crid)
              ? !!a.isStringSet(r.getEntity('size')) ||
                  (r.addParamtoLocHash(_, o.NO_VALID_SIZE), !1)
              : (r.addParamtoLocHash(_, o.NO_VALID_CRID), !1);
          }
          function s (t, r) {
            return (
              !!r.getEntity('tv2SrcFull') &&
              (r.addParamtoLocHash(_, o.L2_SRCFUL),
              d('Disabling rtbs because L2 will be loaded as a sourceful iframe', t.crid),
              !0)
            );
          }
          function c (t) {
            return 'object' == typeof i._rtbs._disPrct
              ? i._rtbs._disPrct[t.getEntity('crid')] || i._rtbs._disPrct[t.getEntity('cid')]
              : null;
          }
          function u (t, r) {
            return (
              (n.rtbsRenList = n.rtbsRenList || {}),
              a.isOptionSet(n.rtbsRenList[t.crid])
                ? (r.addParamtoLocHash(_, o.DUPLICATE_ADTAG), !0)
                : ((n.rtbsRenList[t.crid] = 1), !1)
            );
          }
          function b (t, r) {
            var n = t.crid;
            return i._rtbs && i._rtbs._adTags && a.isStringSet(i._rtbs._adTags[n])
              ? (d(n + ' in rtbs enabled tags', n), !0)
              : (r.addParamtoLocHash(_, o.ADTAG_DISABLED), !1);
          }
          function E (t, r) {
            var n = i._ip2c,
              e = i._rtbs._gblBCC;
            return (
              i._rtbs._BCCMaps &&
                (i._rtbs._BCCMaps.all && (e += ',' + i._rtbs._BCCMaps.all),
                i._rtbs._BCCMaps[t.crid] && (e += ',' + i._rtbs._BCCMaps[t.crid])),
              e.indexOf(n) !== -1 &&
                (d('Country ' + n + ' blocked for rtbs', t.crid),
                r.addParamtoLocHash(_, o.COUNTRY_BLOCKED),
                !0)
            );
          }
          function l (t) {
            var r = t.getEntity('requrl', !0).match(/https?:\/\/.*?\/(.*)/);
            return (
              (r = a.isArray(r) && a.isStringSet(r[1]) ? r[1] : ''),
              (r = r.replace(/(%7C|\|)(%40|@)(%7C|\|)/g, '')),
              r.indexOf('@') !== -1 ||
                r.indexOf('%40') !== -1 ||
                r.indexOf('%2540') !== -1 ||
                r.indexOf('phone') !== -1 ||
                r.indexOf('zip') !== -1 ||
                r.indexOf('email') !== -1 ||
                r.indexOf('mobile=') !== -1
            );
          }
          (this.isRTBSallowed = function (i, d) {
            if (d.getEntity('jtag')) return d.addParamtoLocHash(_, o.JS_TAG_ENABLED), !1;
            if (d.getEntity('disrtbs')) return d.addParamtoLocHash(_, o.DISABLED_FROM_MACRO), !1;
            if (l(d)) return d.addParamtoLocHash(_, o.EMAIL_ADDRESS_IN_PUBLISHER_URL), !1;
            if (r(i, d) && !t(d) && !u(i, d) && b(i, d) && !E(i, d) && !s(i, d)) {
              var f = c(d);
              return d.getEntity('percentDisabled') === !0 ||
                (d.getEntity('percentDisabled') === e &&
                  f &&
                  a.getRandom(1, 100) <= parseInt(f, 10))
                ? (d.addParamtoLocHash(_, o.PERCENT_DISABLE), !1)
                : (n.disableOldDockedUnit(d),
                  d.getParamFromLocHash(_) !== o.SKIP_COOKIE_CHECK_BIDDER &&
                    d.getParamFromLocHash(_) !== o.SKIP_COOKIE_CHECK_VID &&
                    d.addParamtoLocHash(_, o.NOOP),
                  !0);
            }
            return !1;
          }),
            (this.isWinProvFromGroup = function (t, r) {
              return t.indexOf('|' + r + '|') !== -1;
            }),
            (this.getSizeForOtherBidders = function (t, r) {
              if (1 == r.getEntity('nmovl')) {
                var n = a.getUgd();
                return 2 == n ? i._sizemovl.ipad : i._sizemovl.df;
              }
              return i._rtbs._sizeMaps && i._rtbs._sizeMaps[t.crid]
                ? (d(
                    'using size ' +
                      i._rtbs._sizeMaps[t.crid] +
                      ' instead of ' +
                      r.getEntity('size') +
                      ' for RTBS',
                    t.crid
                  ),
                  i._rtbs._sizeMaps[t.crid])
                : r.getEntity('size');
            }),
            (this.getPublisherUrl = function (t) {
              return t.getEntity('requrlStripped') === !0
                ? t.getHashEntity('requrl')
                : t.getEntity('requrl');
            }),
            (this.getRTBSMinBid = function (t) {
              return i._rtbs._minBidEt &&
                i._rtbs._minBidEt[t.crid] &&
                a.isStringSet(i._rtbs._minBidEt[t.crid])
                ? i._rtbs._minBidEt[t.crid]
                : i._rtbs._minBid;
            });
        }
        var a = i.util,
          d = a.consoleLog || function () {},
          o = t.RTBS_DISABLE_REASONS,
          _ = 'rtbsd';
        return s;
      });
    })(window, document, _mN, _mNDetails);
    !(function (t, i, e) {
      'use strict';
      t._cmL1Define('hb-adapter-manager', ['adapter-constants'], function (i) {
        function n () {
          function i (t) {
            var i = {};
            return (
              (i[c.PUBLISHER_URL] = t.getEntity('requrl', !0)),
              (i[c.REFERRER_URL] = t.getEntity('kwrf', !0)),
              (i[c.CLIENT_DEVICE_TYPE_ID] = t.getEntity('ugd')),
              (i = r.merge(i, _mNDetails.privacy.getMacrosForHB()))
            );
          }
          function n (i) {
            return t[_.ADVBID_OBJECT] && r.isFunction(t[_.ADVBID_OBJECT][i]);
          }
          function u (t) {
            return (
              r.isSet(t) && r.isSet(t[A.BID]) && r.isFunction(t[A.REPORT_WIN_OR_LOSS_CALLBACK])
            );
          }
          var s = {},
            a = e._rtbs._adTags,
            o = e._rtbs._hbCid,
            E = {},
            B = this;
          (this.getHBCustomerId = function () {
            return o;
          }),
            (this.getHBCreativeId = function (t) {
              return a[t];
            }),
            (this.getAdxBidPrediction = function (i, e, n) {
              var c;
              return (
                t[_.ADVBID_OBJECT] &&
                  r.isFunction(t[_.ADVBID_OBJECT][_.API5_GET_ADX_PREDICTION]) &&
                  (c = t[_.ADVBID_OBJECT][_.API5_GET_ADX_PREDICTION](
                    B.getHBCreativeId(i),
                    e,
                    n,
                    s[i]
                  )),
                u(c)
                  ? (I(
                      [
                        'Got Hb-Adx Bid Prediction successfully with hb creative id: ' +
                          B.getHBCreativeId(i) +
                          ' and base bid Price: ' +
                          e,
                        c,
                      ],
                      i
                    ),
                    (E[i] = c[A.REPORT_WIN_OR_LOSS_CALLBACK]),
                    c[A.BID])
                  : e
              );
            }),
            (this.fetchRulesFromRuleEngine = function (i) {
              try {
                t[_.ADVBID_OBJECT][_.API6_RULE_ENGINE].fetchRules(i);
              } catch (e) {}
            }),
            (this.applyRulesFromRuleEngine = function (i) {
              try {
                t[_.ADVBID_OBJECT][_.API6_RULE_ENGINE].applyRules(i);
              } catch (e) {}
            }),
            (this.reportAdxStatusIfApplicable = function (t, i) {
              if (r.isFunction(E[t]))
                try {
                  E[t](i);
                } catch (e) {}
            }),
            (this.getHBAuctionIdForLogging = function (t) {
              return s[t];
            }),
            (this.logWinner = function (i) {
              return t[_.ADVBID_OBJECT][_.API3_LOGWINNER](s[i]);
            }),
            (this.getBidFromAdapter = function (i, e, n) {
              var c = B.getHBCreativeId(i);
              if (!r.isSet(c)) return !1;
              I('Calling api 1 with hb creative id: ' + c + ' and display size: ' + e, i);
              var A = t[_.ADVBID_OBJECT][_.API2_BIDCALL](c, e, n);
              return (
                !!r.isStringSet(A) &&
                (I('Called api 1 successfully. Auction id received: ' + A, i), (s[i] = A), !0)
              );
            }),
            (this.closeAuction = function (i) {
              r.isFunction(t[_.ADVBID_OBJECT][_.API4_CLOSEAUCTION]) &&
                t[_.ADVBID_OBJECT][_.API4_CLOSEAUCTION](s[i]);
            }),
            (this.hasAdapterLoadedAsExpected = function () {
              return n(_.API2_BIDCALL) && n(_.API3_LOGWINNER);
            }),
            (this.initialiseHBAdapter = function (e) {
              if (n(_.API1_INITIALISE)) {
                t[_.ADVBID_OBJECT][_.API1_INITIALISE](i(e));
                var I = _mNDetails.privacy.getLDPFlagForHB(),
                  c = _mNDetails.privacy.callHBApis();
                r.isSet(I) &&
                  n(_.API7_LIMIT_DATA_PROCESSING) &&
                  t[_.ADVBID_OBJECT][_.API7_LIMIT_DATA_PROCESSING](I),
                  r.each(c, function (i, e) {
                    n(e) && t[_.ADVBID_OBJECT][e].apply(null, i);
                  });
              }
            });
        }
        var r = e.util,
          I = r.consoleLog || function () {},
          c = i.ACP,
          A = i.AAP,
          _ = i.AEV;
        return new n();
      });
    })(window, document, _mN);
    window._cmL1Define('adapter-constants', [window._mN], function (_) {
      return {
        ARP: {
          BID: 'bid',
          GOOGLE_BID: 'google_bid',
          PLACEMENT_ID: 'pcid',
          SIZE: 'size',
          DEAL_TYPE: 'deal_type',
          DEAL_ID: 'deal_id',
          ADCODE: 'adcode',
          ADCODE_RENDERING_CM: 'adCodeR',
          BID_TYPE: 'bid_type',
          NOBID_FLAG: 'nobid',
          NOBID_REASON: 'nobidreason',
          PROVIDER_ID: 'bidder_id',
          ENCRYPTED_BID: 'encrypted_bid',
          PROVIDER_ACCOUNT_ID: 'paId',
          SUB_BIDDER_ID: 'sbdrid',
          PROVIDER_API_ID: 'pApId',
          MATCH_STRING: 'matchstring',
          BID_DATA: 'biddata',
          YBNCA_VARIANT: 'yv',
          IS_NATIVE: 'isnat',
          IS_FB_NATIVE: 'fbn',
          DUMMY_RESPONSE: 'm',
          MACRO_RESPONSE: 'mr',
        },
        AAP: { BID: 'bid', REPORT_WIN_OR_LOSS_CALLBACK: 'reportWinOrLossCallback' },
        AEV: {
          ADVBID_OBJECT: _._rtbs._hbGv,
          API1_INITIALISE: 'initialiseAdapter',
          API2_BIDCALL: 'registerSlot',
          API3_LOGWINNER: 'reportCMRendering',
          API4_CLOSEAUCTION: 'closeCMAuction',
          API5_GET_ADX_PREDICTION: 'getAdxPrediction',
          API6_RULE_ENGINE: 'ruleEngine',
          API7_LIMIT_DATA_PROCESSING: 'limitDataProcessing',
          API8_SET_GDPR_APPLICABLE: 'setGDPRApplicable',
          API9_SET_GDPR_CONSENT: 'setGDPRConsent',
        },
        ACP: {
          PUBLISHER_URL: 'pu',
          REFERRER_URL: 'ru',
          GDPR_EEA_USER: 'gd',
          DISABLE_PRIVACY_COOKIE: 'dcfp',
          CLIENT_DEVICE_TYPE_ID: 'ugd',
        },
      };
    });
    window._cmL1Define('bidder-ids', function () {
      return {
        UNDECIDED: 0,
        DEFAULT: 1,
        YBNCA_AUTO: 4,
        YBNCA_MANUAL: 9,
        FACEBOOK: 40,
        PUBLISHER_PASSBACK: 198,
        FACEBOOKS2S: 67,
        YBNCA_RELATED_ARTICLES: 92,
        HB_ADAPTER_CM: 98,
        HB_ADAPTER_CM_NEW: 185,
      };
    });
    !(function (t) {
      var e = t._mN,
        i = e.util,
        n = 0;
      t._cmL1Define('rtbs-native', ['rtbs-constants', 'bidder-ids'], function (t, r) {
        function a (t) {
          var i = t.getEntity('crid'),
            n = t.getEntity('cid');
          return (e._anc && (e._anc[i] || e._anc[n])) || {};
        }
        function _ (t) {
          var e = a(t);
          return !(!s && 1 != e.force) && (t.addEntityDNP('allowAdxDisplay', 1), !0);
        }
        function c () {
          var c;
          (this.loadEntitiesForNative = function (t) {
            var n = t.getEntity('crid');
            d.shouldFailoverNativeBasedOnProductType(t) ||
              (!i.checkItemExists(e._natTags, n) && !_(t)) ||
              ((c = e._rtbs._natRAc && (e._rtbs._natRAc[n] || e._rtbs._natRAc.def)),
              t.addEntity('is_nat', { value: !0, isUrlEntity: !1 }),
              i.triggerAdTagEvent(t.uid, 'nativeEnabled'));
          }),
            (this.getInternalNativeWinner = function (e, n) {
              if (
                e.getEntity('is_nat') &&
                !i.isObjectEmpty(c) &&
                _mNDetails.privacy.isActionPermitted('ranative')
              )
                if (i.isSet(c.bid)) {
                  if (n < c.bid) return [t.RTBS_WIN_REASONS.NATIVE_RA_WIN_BY_BID, c.bid];
                } else if (i.isSet(c.per) && i.getRandom(1, 100) <= c.per)
                  return [t.RTBS_WIN_REASONS.NATIVE_RA_WIN_BY_PERCENT, n];
            }),
            (this.shouldRenderYBNCANative = function (t, e) {
              if (t.getEntity('nat_disable_product_type')) return !1;
              var _ = a(t),
                c = e == r.YBNCA_RELATED_ARTICLES ? 'ra' : 'ybn',
                d = (_.templateSwitch && _.templateSwitch[c]) || n;
              return i.isPercentApp(d);
            });
        }
        var d = i.getRequireModule('product-type-helper'),
          s = e._mentf && 1 == e._mentf;
        return c;
      });
    })(window);
    !(function (t, e, i, n, r) {
      'use strict';
      function d () {
        function e (t, e) {
          s.isStringSet(e) && (lt[t] = e);
        }
        function d (t, i) {
          var n = '';
          lt['tdAdd[]'] && (n = lt['tdAdd[]'] + v),
            i && (t = s.encodeParam(t)),
            e('tdAdd[]', n + t);
        }
        function _ (t, e) {
          var i,
            r = lt.dyncId;
          if (((n[r] = n[r] || {}), 'string' == typeof t)) return void (n[r][t] = e);
          for (i in t) n[r][i] = t[i];
        }
        function D (t) {
          var e = lt.dyncId;
          return s.isStringSet(t) ? n[e][t] : n[e];
        }
        function N () {
          return i._c && s.decodeParam(i._c).indexOf('ea=1') !== -1
            ? '<script type="text/javascript">window.onload = function() {if(window.console && typeof console.log === "function") {console.log("EADone");}}</script>'
            : '';
        }
        function B (t) {
          var e = [c.PUBLISHER_PASSBACK],
            i = t[g.PROVIDER_ID];
          return s.checkItemExistsInArray(e, i);
        }
        function P (t) {
          var e = t[g.SIZE].split('x'),
            i = e[0],
            n = e[1];
          return t[g.IS_FB_NATIVE] && (i = '100%'), { w: i, h: n };
        }
        function C (t) {
          var e = t[g.ADCODE_RENDERING_CM],
            i = P(t),
            n = i.w,
            r = i.h;
          s.triggerAdTagEventWhenQueued(lt.vi, 'RenderRTBSWinner', !1, {
            adCode: e,
            width: n,
            height: r,
            data: lt,
          }),
            D(I.PD_LOGGING_FUNCTION).call();
        }
        function h (t) {
          return t[g.PROVIDER_ID] == c.FACEBOOK || t[g.PROVIDER_ID] == c.FACEBOOKS2S
            ? E.FACEBOOK_BIDPRICE_FOR_LOGGING
            : t[g.BID];
        }
        function p () {
          return s.isSet(y) && y.isValidAssets(At);
        }
        function G () {
          return p()
            ? At.getEntity('bdrId')
            : i._rtbs._hbAU
            ? c.HB_ADAPTER_CM_NEW
            : c.HB_ADAPTER_CM;
        }
        function V (t, n) {
          var r = [
              'prid',
              'cid',
              'crid',
              'pid',
              u.RTB_SIZE,
              'vi',
              'ugd',
              'chid',
              'chnm',
              'chnm2',
              'chnm3',
              'requrl',
              'kwrf',
              'bdrid',
              'lineitemid',
              'subBdr',
              'bdrct',
              'papiId',
              'paccId',
              'vgd_rt',
              'vsid',
              'tdAdd[]',
              'oref',
              'kbbq',
              'bto',
              'concrid',
              'iscont',
              'vgd_l2ac',
              'vgd_l2ch',
              'vgd_l1ch',
              'https',
              'vgd_mseg',
              'vgd_hb_audit_1',
              'vgd_hb_audit_2',
              'vgd_crefurl',
              'vgd_katbid',
              'vgd_katid',
            ],
            _ = {},
            a = '';
          s.isSet(n) && p() && (a = s.buildUrlParameters(n)),
            t
              ? (e('bdrid', G()),
                (_[R.HEADER_BIDDER_PROVIDER_ID] = t[g.PROVIDER_ID]),
                e('subBdr', t[g.SUB_BIDDER_ID]),
                e('bdrct', h(t)),
                e('paccId', L.getHBCustomerId()),
                e('papiId', L.getHBCreativeId(lt[u.RTB_CRID])))
              : (e('bdrid', c.DEFAULT), e('bdrct', lt[u.RTB_RESERVE_PRICE])),
            (_[R.AUCTION_ID] = L.getHBAuctionIdForLogging(lt[u.RTB_CRID])),
            (_[R.RTBS_DISABLE_REASON] = At.getParamFromLocHash(O));
          var o = D('mnet_segment');
          o && e('vgd_mseg', o),
            At.getEntity('adt1') && e('vgd_hb_audit_1', At.getEntity('adt1')),
            At.getEntity('adt2') && e('vgd_hb_audit_2', At.getEntity('adt2')),
            e('bto', D(I.PD_WIN_REASON)),
            e('vgd_rt', D(I.PD_RTBS_AUCTION_COMPLETE_TIME)),
            e('oref', At.getEntity('oref')),
            e('lineitemid', At.getParamFromLocHash('lineitemid')),
            e('kbbq', At.getParamFromLocHash('kbbq')),
            d(At.getParamFromLocHash('tdAdd[]')),
            e('vgd_crefurl', s.encodeParam(At.getEntity('cref'))),
            e('vgd_l1ch', At.getParamFromLocHash('l1ch')),
            e('vgd_l2ch', At.getParamFromLocHash('l2ch')),
            e('vgd_l2ac', At.getParamFromLocHash('l2ac'));
          var E = At.getEntity('concrid');
          s.isStringSet(E) && (e('concrid', E), e('iscont', '0')),
            D(I.PD_IS_NATIVE_WINNER) && (_[R.PAGE_TYPE_ID] = i._natpt);
          D(I.PD_DFP_TARGETING_PARAMS);
          return (
            lt[u.RTB_LOG_URL] +
            '?' +
            Tt.getDefaultLogUrlParamsForPageView(lt.dyncId) +
            s.buildUrlParameters(lt, r) +
            s.buildUrlParameters(_) +
            a
          );
        }
        function U (t) {
          return f.isWinProvFromGroup(i._rtbs._ybncabId, t[g.PROVIDER_ID]);
        }
        function H (t) {
          var e = parseInt(t[g.PROVIDER_ID]);
          return U(t) && e != c.YBNCA_AUTO && e != c.YBNCA_MANUAL;
        }
        function F (t) {
          return t[g.MACRO_RESPONSE] === !0;
        }
        function M (t, e) {
          D(I.PD_IS_WINNER_LOGGED) ||
            n.abpDet ||
            (H(t) || F(t) || L.logWinner(lt[u.RTB_CRID]),
            U(t)
              ? s.triggerAdTagEvent(At.getEntity('vi'), 'rtbsWinDecided', !1, {
                  type: 'int-ybnca',
                  crid: At.getEntity('crid'),
                  vi: At.getEntity('vi'),
                })
              : (B(t)
                  ? (a.logFailover(
                      i._foSettings.REASON.RTBS_FAILOVER_BIDDER_ID,
                      i._foSettings.ACTION.STATUS_QUO,
                      At
                    ),
                    A('logging failover for bidderId: ' + t[g.PROVIDER_ID], st.crid))
                  : (n.triggerAdTagEvent(At.getEntity('crid'), 'onRtbsAdLoadComplete'),
                    At.logLoggingBeacons([V(t, e)]),
                    A('logging page view', st.crid)),
                s.triggerAdTagEvent(At.getEntity('vi'), 'rtbsWinDecided', !1, {
                  type: 'ext-nonDfp',
                  crid: At.getEntity('crid'),
                  vi: At.getEntity('vi'),
                })));
        }
        function w (t) {
          var e = s.isSet(t) && s.isArray(t.imptrackers) ? t.imptrackers : [];
          s.logBeacons(e);
        }
        function W (t) {
          if (F(t)) {
            var e = t[g.ADCODE];
            s.each(e, w);
          }
        }
        function k (t) {
          var e = At.getCachedLocHashInMNDetails();
          At.addParamtoLocHash('bidData', s.encodeParam(t[g.BID_DATA])),
            At.addParamtoLocHash('matchString', s.encodeParam(t[g.MATCH_STRING])),
            e.indexOf('matchstring=') == -1 &&
              ((e += '&matchstring=' + s.encodeParam(t[g.MATCH_STRING])),
              At.cacheHashLoginMNDetails(e));
        }
        function q (t) {
          return t[g.IS_NATIVE] && !U(t);
        }
        function Q (t, e) {
          var i = {};
          (i[I.PD_WINNING_PROVIDER] = t[g.PROVIDER_ID]),
            (i[I.PD_SUB_BIDDER_ID] = t[g.SUB_BIDDER_ID]),
            (i[I.PD_WIN_REASON] = t[g.NOBID_REASON]),
            (i[I.PD_BID] = t[g.BID]),
            (i[I.PD_GOOGLEBID] = t[g.GOOGLE_BID]),
            e
              ? (i[I.PD_NATIVEADCODE] = t[g.ADCODE])
              : j(t)
              ? (i[I.PD_NATIVEADCODE] = [t[g.ADCODE]])
              : U(t) || (i[I.PD_ADCODE] = t[g.ADCODE_RENDERING_CM]),
            (i[I.PD_YBNCA_VARIANT] = t[g.YBNCA_VARIANT]),
            (i[I.PD_BID_DATA] = s.encodeParam(t[g.BID_DATA])),
            (i[I.PD_MATCH_STRING] = s.encodeParam(t[g.MATCH_STRING])),
            (i[I.PD_RTBS_AUCTION_COMPLETE_TIME] = new Date().getTime() - Nt),
            (i[I.PD_AUCTION_ID] = L.getHBAuctionIdForLogging(lt[u.RTB_CRID])),
            (At.getEntity('is_nat') || e) && (i[I.PD_IS_NATIVE] = !0),
            (i[I.PD_IS_NATIVE_WINNER] = t[g.IS_NATIVE]),
            (i[I.PD_LOGGING_FUNCTION] = function (i, n) {
              D(I.PD_IS_WINNER_LOGGED) ||
                (q(t) && !i) ||
                (M(t, n), e && W(t), _(I.PD_IS_WINNER_LOGGED, 1));
            }),
            _(i);
        }
        function Y (t) {
          var e = i._lHst + '/log?logid=kfk&evtid=fbblank',
            n = {};
          return (
            (n.cid = At.getEntity('cid')),
            (n.crid = At.getEntity('crid')),
            (n.pid = At.getEntity('pid')),
            (n.vi = At.getEntity('vi')),
            (n.vsid = At.getVisitorId()),
            (n.hvsid = At.getVisitId()),
            (n.ugd = At.getEntity('ugd')),
            (n.requrl = s.decodeParam(At.getEntity('requrl'))),
            (n.kwrf = s.decodeParam(At.getEntity('kwrf'))),
            (n.size = At.getEntity('size')),
            (n.tdAdd = s.decodeParam(At.getParamFromLocHash('tdAdd[]'))),
            (n['native'] = t[g.IS_FB_NATIVE] ? 1 : 0),
            (n.fbEnabled = !0),
            (n.bidData = t[g.BID_DATA]),
            e + s.buildUrlParameters(n, r, !0)
          );
        }
        function x (e) {
          e[g.PROVIDER_ID] == i._rtbs._fbbId &&
            (t._mNfbecb = function (t, i, n) {
              var r = Y(e);
              try {
                if (t.frameElement && null != t.frameElement.getAttribute('id')) {
                  var d = new RegExp(/_mN_dy_(.*)?_/).exec(t.frameElement.getAttribute('id')),
                    _ = t.parent;
                  if (d && _) {
                    var a = _.document.getElementById(d[1]);
                    a && (a.style.display = 'none');
                  }
                }
              } catch (o) {}
              var E = '&fb_error_code=' + encodeURIComponent(i + ' - ' + n);
              new Image().src = r + E;
            });
        }
        function K (t) {
          Q(t),
            k(t),
            x(t),
            s.addToDelayedEventQueue(o.LOG_RENDERED_AD_EVENT, lt.vi, function () {
              D(I.PD_LOGGING_FUNCTION).call();
            }),
            s.triggerAdTagEventWhenQueued(lt.vi, 'bidDone', !1, {
              bidObject: t,
              providerDetails: D(),
            }),
            s.addToDelayedEventQueue('showRTBSWinner', lt.vi, s.getProxy(C, [t]));
        }
        function Z (t) {
          var e = t[g.ADCODE] || '',
            i =
              '<!DOCTYPE html><html><head></head><body style="text-align:center;">' +
              e +
              N() +
              '</body></html>';
          t[g.ADCODE_RENDERING_CM] = i;
        }
        function z (t) {
          n.abpDet &&
            ((t[g.PROVIDER_ID] = i._rtbs._fObId), (t[g.NOBID_REASON] = l.AD_BLOCK_PLUS_DETECTED));
        }
        function X (t) {
          if (U(t)) {
            var e = Ot.getInternalNativeWinner(At, t[g.BID]);
            s.isArray(e) &&
              ((t[g.NOBID_REASON] = e[0]),
              (t[g.BID] = e[1]),
              (t[g.PROVIDER_ID] = c.YBNCA_RELATED_ARTICLES)),
              (t[g.IS_NATIVE] = Ot.shouldRenderYBNCANative(At, t[g.PROVIDER_ID]));
          }
        }
        function j (t) {
          return t[g.IS_NATIVE];
        }
        function J (t) {
          return (
            s.isSet(t[g.BID]) &&
            s.isSet(t[g.GOOGLE_BID]) &&
            s.isSet(t[g.PROVIDER_ID]) &&
            (t[g.SIZE] == lt[u.RTB_SIZE] || j(t))
          );
        }
        function $ (t, e, i) {
          A('YBNCA assumed winner for reason: ' + e + ' and bidder id: ' + i, st.crid),
            (t[g.PROVIDER_ID] = i),
            (t[g.SIZE] = lt[u.RTB_SIZE]);
          var n = lt.rp;
          return (
            (e != l.EMPTY_BID && e != l.NO_BID) || (n = '0.00'),
            (t[g.BID] = n),
            (t[g.GOOGLE_BID] = n),
            (t[g.NOBID_REASON] = e),
            t
          );
        }
        function tt (t) {
          if (s.isSet(t) && s.isSet(t[g.NOBID_REASON]) && t[g.DUMMY_RESPONSE] !== !0) {
            var e = S[t[g.NOBID_REASON]] || 'HB_DEFAULT';
            t[g.NOBID_REASON] = l[e];
          }
          return t[g.NOBID_REASON];
        }
        function et (t) {
          if (t[g.NOBID_FLAG] === !0) {
            var e = tt(t);
            t = $(t, e, i._rtbs._fObId);
          } else
            J(t)
              ? (t[g.NOBID_REASON] = l.AUCTION_HOUSE_RESPONSE)
              : (t = $(t, l.INVALID_RESPONSE, i._rtbs._tObId));
          return z(t), X(t), Z(t), t;
        }
        function it (t) {
          it.alreadyCalled ||
            ((it.alreadyCalled = !0),
            A(['Bid response received/mocked', t], lt[u.RTB_CRID]),
            (t = et(t)),
            s.addToDelayedEventQueue('tagOKToLoad', lt[u.RTB_CRID], s.getProxy(K, [t])));
        }
        function nt () {
          s.addToEventQueue('l2Loaded', lt.crid, function () {
            St = !0;
          }),
            s.addToEventQueue('adContentLoaded', lt.crid, function () {
              Bt = !0;
            }),
            s.addToEventQueue('adContentLoaded', lt.vi, function () {
              Bt = !0;
            });
        }
        function rt () {
          return D(I.PD_WINNING_PROVIDER).toString() !== c.UNDECIDED.toString();
        }
        function dt () {
          s.addToDelayedEventQueue(
            'tagOKToLoad',
            lt[u.RTB_CRID],
            s.getProxy(L.closeAuction, [lt[u.RTB_CRID]])
          );
        }
        function _t () {
          var t = function () {
            return !rt() && (!Bt || (dt(), !1));
          };
          setTimeout(function () {
            T.setInterval(t, E.CHECKTIME_POST_TIMEOUT),
              setTimeout(function () {
                Bt = !0;
              }, E.L3_MAX_WAIT_TIME_POST_TIMEOUT);
          }, i._rtbs._timeout);
        }
        function at (t, e, i) {
          var n = {};
          return (
            (n[g.NOBID_REASON] = t),
            (n[g.NOBID_FLAG] = !0),
            (n[g.DUMMY_RESPONSE] = !0),
            s.isSet(e) && (n[g.SUB_BIDDER_ID] = e),
            s.isSet(i) && (n[g.YBNCA_VARIANT] = i),
            n
          );
        }
        function ot () {
          var t = lt.crid;
          if (s.checkItemExists(i._rtbs._infTags, t))
            return (
              At.addEntity('infDfp', { value: !0, isUrlEntity: !1 }), void it(at(l.INFEED_VIDEO))
            );
          if (At.getEntity('forceDfpWin'))
            return void it(at(l.DFP_BASELINE_BUCKET, i._rtbs._bsSBid, i._rtbs._bsVar));
          var e = lt[u.RTB_SIZE],
            n = L.getHBCreativeId(t);
          return s.isSet(n)
            ? L.getBidFromAdapter(t, e, it)
              ? void _t()
              : void it(at(l.BIDCALLAPI_FAILED))
            : void it(at(l.ONLY_ADX));
        }
        function Et () {
          var t = At.getEntity('crid');
          'function' == typeof i._custom.triggerDelayLoad
            ? i._custom.triggerDelayLoad(At)
            : i.lzyld && i.lzyld[t] > 0
            ? s.addToEventQueue('TagInCustomViewport', t, function () {
                s.triggerAdTagEventWhenQueued(t, 'tagOKToLoad'), (i.lzyld[t] = 0);
              })
            : s.triggerAdTagEventWhenQueued(lt[u.RTB_CRID], 'tagOKToLoad');
        }
        function ct () {
          Nt = new Date().getTime();
          var t = {};
          (t[I.PD_WINNING_PROVIDER] = c.UNDECIDED),
            (t[I.PD_LOGGING_FUNCTION] = function () {
              M(null), _(I.PD_IS_WINNER_LOGGED, 1);
            }),
            _(t);
        }
        function It () {
          e('vgd_katbid', At.getEntity('katbid')),
            e('vgd_katid', At.getEntity('katid')),
            e('pid', At.getEntity('pid'));
        }
        function Dt () {
          var t = At.getEntity('crid');
          e('dyncId', '_mN_dy_' + t),
            e('prid', At.getEntity('prid')),
            e('cid', At.getEntity('cid')),
            e('crid', t),
            e(u.RTB_SIZE, f.getSizeForOtherBidders(st, At)),
            e('requrl', f.getPublisherUrl(At)),
            e('kwrf', At.getEntity('kwrf')),
            e('rp', f.getRTBSMinBid(st)),
            e(u.RTB_LOG_URL, i._rtbs._logurl),
            e('vsid', At.getVisitorId()),
            e('vi', At.getEntity('vi')),
            e('ugd', At.getEntity('ugd')),
            e('chid', At.getEntity('chid')),
            e('chnm', At.getEntity('chnm')),
            e('chnm2', At.getEntity('chnm2')),
            e('chnm3', At.getEntity('chnm3')),
            e('cc', At.getEntity('cc')),
            e('sc', i._ip2allsc || ''),
            e('https', At.getEntity('https')),
            e('pid', i._rtbs._dpid),
            p() && It(),
            Ot.loadEntitiesForNative(At);
        }
        function gt () {
          return s.isOptionSet(i._rtbs._hbCe)
            ? (At.addParamtoLocHash(O, E.RTBS_DISABLE_REASONS.HB_CURL_EXCEPTION), !0)
            : !f.isRTBSallowed(st, At);
        }
        function ut (t) {
          (st = t.entities), (At = t.adScope), (i = t._mN), (Tt = new m(At));
        }
        function Rt (t) {
          if (y.isValidAssets(t.adScope)) {
            ut(t), Dt(), ct();
            var e = y.getMockedBidResponse(At);
            Q(e, !0);
          }
        }
        var st,
          At,
          Tt,
          Nt,
          Ot = new b(),
          lt = {},
          St = !1,
          Bt = !1;
        this.loadRTBSHB = function (t) {
          return s.isSet(i._natMcro) && 1 == t.adScope.getEntity('ctype') && s.isSet(y)
            ? void Rt(t)
            : (ut(t),
              gt()
                ? void A('RTBS disabled with reason: ' + At.getParamFromLocHash(O), st.crid)
                : (L.initialiseHBAdapter(At),
                  L.hasAdapterLoadedAsExpected()
                    ? (A('RTBS enabled', st.crid),
                      At.addEntity('rtbs', 1),
                      s.triggerAdTagEvent(st.crid, 'initDFPV2', !1),
                      Dt(),
                      ct(),
                      Et(),
                      ot(),
                      void nt())
                    : (At.addParamtoLocHash(O, E.RTBS_DISABLE_REASONS.HB_ADAPTER_FAILED),
                      void A(
                        'RTBS disabled with reason: ' + At.getParamFromLocHash(O),
                        st.crid
                      ))));
        };
      }
      function _ (t) {
        s.addToEventQueue('beforeLoad', t.adScope.uid, function (t) {
          new d().loadRTBSHB(t);
        });
      }
      var a = t._cmL1Require(['l1logger'])[0],
        o = t._cmL1Require(['l1-constants'])[0],
        E = t._cmL1Require(['rtbs-constants'])[0],
        c = t._cmL1Require(['bidder-ids'])[0],
        I = t._cmL1Require(['provider-details'])[0],
        D = t._cmL1Require(['adapter-constants'])[0],
        g = D.ARP,
        u = {
          RTB_CRID: 'crid',
          RTB_LOG_URL: 'rtbslogurl',
          RTB_SIZE: 'size',
          RTB_RESERVE_PRICE: 'rp',
        },
        R = {
          HEADER_BIDDER_PROVIDER_ID: 'hbpvid',
          AUCTION_ID: 'vgd_aid',
          PAGE_TYPE_ID: 'pti',
          RTBS_DISABLE_REASON: 'rtbsd',
        },
        s = i.util,
        A = s.consoleLog || function () {},
        T = i._mNRP,
        N = s.getAdTagUID(),
        O = 'rtbsd',
        l = E.RTBS_WIN_REASONS,
        S = E.ADAPTER_NOBID_REASON_MAP,
        B = '|@|',
        v = s.encodeParam(B),
        P = t._cmL1Require(['rtbs-helper'])[0],
        f = new P(),
        m = t._cmL1Require(['rtbs-common-helper'])[0],
        b = t._cmL1Require(['rtbs-native'])[0],
        L = s.getRequireModule('hb-adapter-manager'),
        y = s.getRequireModule('rtbs-macro-supported-native');
      s.addToEventQueue('load::RTBS_HB', N, _),
        s.addToEventQueue('adBlockPlusDetected', 'gbl', function () {
          n.abpDet = !0;
        }),
        s.resolveModuleLoad(N);
    })(window, document, _mN, _mNDetails);
    !(function (e, t, n, i, c) {
      'use strict';
      function o () {
        var e = n._dUrl,
          t = n._abh;
        f.detect(e, t, '/px.gif', function (e) {
          e === !0 ? (i._mNABP.adBlockStatus = 1) : e === !1 && (i._mNABP.adBlockStatus = 2);
        });
      }
      function r () {
        var n = t.createElement('div'),
          c = [
            'adclass',
            'googleAdSense',
            'MediumRectangleAdPanel',
            'adv_left',
            'browse-banner_ad',
          ];
        (n.className = c.join(' ')),
          (n.id = 'abp_px'),
          (n.style.cssText =
            'opacity: 0; visibility: hidden; width: 0; height: 0; position: absolute; top: -9999px; left: -9999px;'),
          t.body.appendChild(n),
          e.setTimeout(function () {
            var e = 'none' === g.getElementStyle(n, 'display');
            g.removeElement(n),
              (i._mNABP.domAbpDetect = e ? 1 : 2),
              e
                ? (g.triggerAdTagEventWhenQueued('gbl', 'divAbpDetected'), o())
                : ((i._mNABP.adBlockStatus = 2),
                  g.triggerAdTagEventWhenQueued('gbl', 'divAbpNotDetected'));
          }, 0);
      }
      function a () {
        if ('undefined' != typeof m && 1 === m) return m;
        var e = i || !1,
          t = !1,
          n = (e && e._mNABP) || !1;
        return (
          n &&
            (t =
              0 === n.checksRemain
                ? !n.error1 && n.error2
                  ? 1
                  : 2
                : n.adBlockStatus
                ? n.adBlockStatus
                : 2),
          (m = t),
          t
        );
      }
      function d (e) {
        var t = a();
        return 1 === t && (l(e), !0);
      }
      function l (e) {
        var t = {
            logid: 'kfk',
            evtid: 'adpl',
            tp: 'fcblock',
            fp: '',
            cid: e.getEntity('cid'),
            crid: e.getEntity('crid'),
            pid: e.getEntity('pid'),
            requrl: g.encodeParam(e.getEntity('requrl').replace(/#.*/g, '') || ''),
            chid: e.getEntity('chid'),
            vi: e.getEntity('vi'),
            ugd: e.getEntity('ugd'),
            cme: e.getEntity('cme'),
            cc: e.getEntity('cc'),
          },
          i =
            n._lHst +
            '/log?' +
            g.buildUrlParameters(t) +
            e.getFinalHashLogParams().replace(/#/g, '');
        g.logBeacons(i);
      }
      function u () {
        if (!i._mNABP.abpLoggingCalled) {
          (i._mNABP.abpLoggingCalled = !0),
            (i._mNABP.adBlockStatus = 0),
            (i._mNABP.error1 = !1),
            (i._mNABP.error2 = !1),
            (i._mNABP.checksRemain = 2),
            (i._mNABP.domAbpDetect = i._mNABP.domAbpDetect || 0);
          try {
            n._domAbpDetect ? r() : o();
          } catch (e) {
            o();
          }
        }
      }
      var m,
        g = n.util,
        s = (g.consoleLog || function () {}, g.getAdTagUID());
      (i._mNABP = i._mNABP || {}), (i._mNABP.adBlockStatus = '');
      var f = new (function () {
        this.detect = function (e, t, n, c) {
          function o (e, t) {
            0 === d || t > 1000
              ? e(0 === d && a)
              : setTimeout(function () {
                  o(e, 2 * t);
                }, 2 * t);
          }
          function r () {
            return --d
              ? void (i._mNABP.checksRemain = d)
              : ((i._mNABP.checksRemain = d),
                (a = !l && u),
                void (a && g.triggerAdTagEvent('gbl', 'adBlockPlusDetected')));
          }
          var a = !1,
            d = 2,
            l = !1,
            u = !1;
          if ('function' == typeof c) {
            n += '?ch=*&rn=*';
            var m = e + n,
              s = t + n,
              f = '1',
              p = new Image();
            (p.onload = r),
              (p.onerror = function () {
                (l = !0), (i._mNABP.error1 = l), r();
              }),
              (p.src = m.replace(/\*/, 1).replace(/\*/, f));
            var A = new Image();
            (A.onload = r),
              (A.onerror = function () {
                (u = !0), (i._mNABP.error2 = u), r();
              }),
              (A.src = s.replace(/\*/, 2).replace(/\*/, f)),
              o(c, 50);
          }
        };
      })();
      e._cmL1Define('mnet-adblock-plus', function () {
        function e (e) {
          this.isAdBlockPlusDetected = function () {
            return d(e);
          };
        }
        return e;
      }),
        u(),
        g.resolveModuleLoad(s);
    })(window, document, _mN, _mNDetails);
    window._cmL1Define('common-constants', function () {
      return {
        CLOSE_DEFAULT_CSS: { MAIN: '', BACKGROUND: '' },
        OVERLAY_DIV_CSS: { MAIN: '', MAIN_MOBILE: '', MAIN_IPAD: '', DEFAULT_MISC_CSS: '' },
        ADTAG_POSITION: { LEFT: 'left', RIGHT: 'right', CENTER: 'center' },
        DOCKER_TYPES: { INTERACTIVE: 'interactive', DOCKED: 'docked', CUSTOM: 'custom' },
        SCREEN_ORIENTATION: { ALL: 'all', PORTRAIT: 'portrait', LANDSCAPE: 'landscape' },
        FADE_IN_CSS: '',
        FADE_OUT_CSS: '',
        TRANSITION_CSS: '',
        IS_MOBILE_ONLY: !1,
        DEFAULT_HEADER_SIZE: 0,
        NO_INTERACTION_TIME_MS: 4000,
        NO_SCROLL_TIME_MS: 500,
        NO_MOUSE_OVER_TIME_MS: 100,
        NO_KEY_DOWN_TIME_MS: 100,
        DIV_IDENTIFIER: '_mNOverlay',
        APPLICABLE_DEVICES: ['*'],
        DEVICE_NAMES: { 2: 'IPAD', 3: 'MOBILE' },
      };
    });
    window._cmL1Define('config-manager', [_mN, _mN.util], function (t, e) {
      'use strict';
      function i (t, i) {
        function n () {
          if (!E.isCustomised()) return i.NO_INTERACTION_TIME_MS;
        }
        function r () {
          return e.isStringSet(S.dockerType) && e.checkItemExistsInArray(a, S.dockerType)
            ? S.dockerType
            : i.DOCKER_TYPES.INTERACTIVE;
        }
        function o () {
          if (C.isNewDockedUnitSupported(t)) {
            var i = s.movl || {},
              n = s[t] || {};
            S = e.merge(i, n);
          } else S = s[t] || s.def || {};
        }
        var u = [i.ADTAG_POSITION.LEFT, i.ADTAG_POSITION.CENTER, i.ADTAG_POSITION.RIGHT],
          c = [
            i.SCREEN_ORIENTATION.ALL,
            i.SCREEN_ORIENTATION.PORTRAIT,
            i.SCREEN_ORIENTATION.LANDSCAPE,
          ],
          a = [i.DOCKER_TYPES.INTERACTIVE, i.DOCKER_TYPES.DOCKED, i.DOCKER_TYPES.CUSTOM],
          S = {},
          E = this,
          C = e.getRequireModule('product-type-helper');
        (this.getOverlayPosition = function () {
          return e.isStringSet(S.position) && e.checkItemExistsInArray(u, S.position)
            ? S.position
            : i.ADTAG_POSITION.RIGHT;
        }),
          (this.getOverrideDefaultMiscCss = function () {
            return e.isStringSet(S.defaultCss) ? S.defaultCss : '';
          }),
          (this.getCustomCss = function () {
            return e.isStringSet(S.customCss) ? S.customCss : '';
          }),
          (this.getCloseButtonCustomCss = function () {
            return e.isStringSet(S.closeCss)
              ? S.closeCss
              : i.CLOSE_DEFAULT_CSS && i.CLOSE_DEFAULT_CSS.BACKGROUND;
          }),
          (this.getDestroyTransitionCss = function () {
            return e.isStringSet(S.destroyCss) ? S.destroyCss : i.TRANSITION_CSS;
          }),
          (this.getTagAppearCss = function () {
            return e.isStringSet(S.appearCss) ? S.appearCss : i.FADE_IN_CSS;
          }),
          (this.getTagDisappearCss = function () {
            return e.isStringSet(S.disappearCss) ? S.disappearCss : i.FADE_OUT_CSS;
          }),
          (this.shouldDisableInteractionEvents = function () {
            return !!e.isSet(S.disableEvents) && S.disableEvents;
          }),
          (this.getTimeForInteractionIdle = function () {
            var t = parseInt(S.idleTime, 10);
            return t > 0 ? t : n();
          }),
          (this.isFullWidth = function () {
            return !!e.isSet(S.fullWidth) && S.fullWidth;
          }),
          (this.getDismissCookieTimeMinutes = function () {
            var t = parseFloat(e.isSet(S.ovlDays) ? S.ovlDays : 1);
            return Math.floor(1440 * t);
          }),
          (this.getDefaultHeaderSize = function () {
            return e.isSet(S.headerSize) ? S.headerSize : i.DEFAULT_HEADER_SIZE;
          }),
          (this.isSupportedOrientation = function (t) {
            var s =
              e.isStringSet(S.orientation) && e.checkItemExistsInArray(c, S.orientation)
                ? S.orientation
                : i.SCREEN_ORIENTATION.PORTRAIT;
            return t == i.SCREEN_ORIENTATION.ALL || s == t;
          }),
          (this.isCloseButtonSupported = function () {
            return !(
              this.isInteractive() ||
              (e.isSet(S.closeButtonSupported) && !S.closeButtonSupported)
            );
          }),
          (this.isInteractive = function () {
            return r() == i.DOCKER_TYPES.INTERACTIVE;
          }),
          (this.isDocked = function () {
            return r() == i.DOCKER_TYPES.DOCKED;
          }),
          (this.isCustomised = function () {
            return r() == i.DOCKER_TYPES.CUSTOM;
          }),
          (this.getPlaceholderCss = function () {
            return S.placeholderCss || '';
          }),
          (this.getScrollHeight = function () {
            return S.scHeight || 0;
          }),
          (this.getCrid = function () {
            return t;
          }),
          (this.getApplicableDevices = function () {
            return e.isArray(S.applicableDevices)
              ? S.applicableDevices
              : i.APPLICABLE_DEVICES || [];
          }),
          (this.getExternalBackground = function () {
            return S.externalBackground || '';
          }),
          (this.isApplicableDevice = function () {
            var t = e.getUgd(),
              i = this.getApplicableDevices();
            return e.checkItemExistsInArray(i, t) || e.checkItemExistsInArray(i, '*');
          }),
          (this.shouldIgnoreSessionDisable = function () {
            return S.ignoreSessionDisable;
          }),
          o();
      }
      var s = t._ovCon || {};
      return i;
    });
    window._cmL1Define('ui-manager', [_mN, _mN.util], function (t, e) {
      'use strict';
      function n (t, n, i, s) {
        function o (t) {
          t.style.display = 'none';
        }
        function u (t) {
          var n = _mNDetails.abpDet;
          n && o(t),
            e.addToEventQueue('adBlockPlusDetected', 'gbl', function () {
              o(t);
            });
        }
        function c (t) {
          n.isFullWidth()
            ? ((t.style.width = '100%'), l())
            : (n.isInteractive() || n.isDocked()) && l();
        }
        function l () {
          t.addEntity('_L2Hun', { value: 1, isUrlEntity: !1 });
        }
        function d () {
          var t = document.createElement('span');
          return (
            (t.id = 'close'),
            (t.style.cssText =
              (i.CLOSE_DEFAULT_CSS && i.CLOSE_DEFAULT_CSS.MAIN) + n.getCloseButtonCustomCss()),
            (t.onclick = function () {
              E.closeButtonClicked(t);
            }),
            t
          );
        }
        function r () {
          var t = i.DEVICE_NAMES[e.getUgd()] || '',
            s = i.OVERLAY_DIV_CSS['MAIN_' + t] || i.OVERLAY_DIV_CSS.MAIN;
          return (
            (s || '') +
            (i.OVERLAY_DIV_CSS[n.getOverlayPosition()] || '') +
            (n.getOverrideDefaultMiscCss() || i.OVERLAY_DIV_CSS.DEFAULT_MISC_CSS) +
            n.getCustomCss()
          );
        }
        function a (t) {
          var e = document.createElement('div');
          return (
            (e.id = 'mn_ovl_' + t),
            (e.style.visibility = 'hidden'),
            (e.style.opacity = 0),
            (e.style.cssText = r()),
            n.isCloseButtonSupported() && e.appendChild(d()),
            e
          );
        }
        function _ (t, i) {
          var s = document.createElement('div');
          return (
            (s.id = 'tag_' + i),
            (s.style.cssText = n.getPlaceholderCss()),
            t.appendChild(s),
            e.queryDOM('@body')[0].appendChild(t),
            s.id
          );
        }
        var C, E;
        (this.init = function () {
          var e = a(t.getEntity('vi'));
          (C = _(e, t.getEntity('vi'))),
            c(e),
            u(e),
            (E = new s(n, e, i, t)),
            n.shouldDisableInteractionEvents() || E.addEvents();
        }),
          (this.getNewPlaceholder = function () {
            return C;
          });
      }
      return n;
    });
    window._cmL1Define('interactive-docker-constants', function () {
      var A = 'bottom 0.5s',
        I = {};
      (I.MAIN =
        'width: 10px;height: 10px; position: absolute;top:5px;right:5px;z-index: 1;display: block;cursor: pointer;right:5px;'),
        (I.BACKGROUND =
          "background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTk3N0I5M0NFOTk5MTFFOEE3ODhFQjNDOUY0RUU3MkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTk3N0I5M0JFOTk5MTFFOEE3ODhFQjNDOUY0RUU3MkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIzNUQ2MEUwQjJBRTExRTg4NzdFRjMyQTdFQkM1MDgxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIzNUQ2MEUxQjJBRTExRTg4NzdFRjMyQTdFQkM1MDgxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+twqrJQAAAMJJREFUeNpinDVr1nIGBoZVqamp6xmwgNmzZwcCqTAmILEAiBuBAq5YFIHEGkFqmIAm7QQySoC4F1kxlN0LkgOpYfz//z9MwglItQNxNFTtUiCuBCraB+LAFUIVqwKpLVCuD1DRbZgcC5qzeID4BxIbDpiQTPMHUnOA2BuK50DFEAqhAnVAnA207gkIg9ggMZhiZmlp6WAg3QDEWUAFJ2AmGBsbPzl37txlkM+B9GuQiQFAXAFUdBw9HKFiFSA1AAEGAEqGS+OK41s4AAAAAElFTkSuQmCC') no-repeat center;");
      var i = {};
      return (
        (i.MAIN_MOBILE =
          'visibility: hidden; scroll-behavior: smooth; line-height: 0; position: fixed; bottom: 0; left: 0; transition: ' +
          A +
          ';'),
        (i.MAIN_IPAD = i.MAIN_MOBILE),
        (i.DEFAULT_MISC_CSS = 'box-shadow: 0px 0px 40px 0px #0000003d; '),
        {
          CLOSE_DEFAULT_CSS: I,
          OVERLAY_DIV_CSS: i,
          TRANSITION_CSS: A,
          APPLICABLE_DEVICES: [3],
          DEFAULT_HEADER_SIZE: 30,
          NO_INTERACTION_TIME_MS: 4000,
          DIV_IDENTIFIER: '_mNIntDock',
        }
      );
    });
    window._cmL1Define('interactive-docker-interaction-detector', [window, _mN.util], function (
      t,
      n
    ) {
      'use strict';
      function e () {
        function t () {
          return { closeButtonClicked: function () {}, addEvents: function () {} };
        }
        return { getInteractionFunctions: t };
      }
      function i (t, i, c, o) {
        function u (u) {
          var d = n.getRequireModule(u);
          n.isSet(d) || (d = e());
          var s = d.getInteractionFunctions(t, i, c, o);
          (r.closeButtonClicked = s.closeButtonClicked), (r.addEvents = s.addEvents);
        }
        function d () {
          t.isInteractive()
            ? u('docktype-interactive')
            : t.isDocked()
            ? u('docktype-fix-dock')
            : t.isCustomised() && u('docktype-custom');
        }
        var r = this;
        d();
      }
      return i;
    });
    window._cmL1Define('docktype-custom', [window, _mN.util, _mN._util, _mNDetails], function (
      t,
      e,
      n,
      i
    ) {
      'use strict';
      function o (o, c, s, r) {
        function u () {
          (c.style.transition = 'opacity 0.2s linear 0s'),
            (c.style.visibility = 'visible'),
            (c.style.opacity = 1);
        }
        function l () {
          (c.style.transition = 'visibility 0s linear 0.4s, opacity 0.2s linear 0s'),
            (c.style.visibility = 'hidden'),
            (c.style.opacity = 0);
        }
        function d () {
          var n = Math.abs(R - (t.pageYOffset || document.documentElement.scrollTop));
          n > D &&
            (e.eventLib.removeEvent(t, 'scroll', d),
            (R = t.pageYOffset || document.documentElement.scrollTop),
            a(),
            h());
        }
        function a () {
          e.isSet(L) ||
            (L = setTimeout(function () {
              m(),
                l(),
                (R = t.pageYOffset || document.documentElement.scrollTop),
                e.eventLib.addEvent(t, 'scroll', d);
            }, N));
        }
        function m () {
          t.clearTimeout(L), (L = void 0);
        }
        function f () {
          var n = i.pMap || {};
          return (
            (n = e.merge(n, H)),
            e.any(n, function (n, i) {
              if (i !== r.getEntity('crid'))
                return e.any(n, function (n) {
                  var i = e.queryDOM(n);
                  if (i) {
                    var o = i.getBoundingClientRect(),
                      c = t.innerWidth || document.documentElement.clientWidth,
                      s = t.innerHeight || document.documentElement.clientHeight;
                    if (
                      o.bottom >= 0 &&
                      o.right >= 0 &&
                      (o.left <= c || o.right <= c) &&
                      (o.top <= s || o.bottom <= s)
                    )
                      return !0;
                  }
                });
            })
          );
        }
        function v () {
          return f();
        }
        function E () {
          return v() ? (m(), l(), void (A = !0)) : void (A && (a(), h(), (A = !1)));
        }
        function y () {
          b(),
            n &&
              n.mnsc &&
              n.mnsc(s.DIV_IDENTIFIER, '1', 1, '/', '', '', o.getDismissCookieTimeMinutes()),
            (c.style.transition = o.getDestroyTransitionCss()),
            (c.style.transform = 'translate(0, 100vh)'),
            setTimeout(function () {
              (c.style.display = 'none'), (c.innerHTML = '');
            }, 400);
        }
        function g (t) {
          t.style.display = 'none';
        }
        function p (t) {
          i.triggerAdTagEvent(r.getEntity('vi'), 'closeButtonClicked', !0, {}),
            g(t),
            e.isFunction(k) ||
              (k = function () {
                t.style.display = 'block';
              });
        }
        function T () {
          return t.innerWidth <= t.innerHeight
            ? s.SCREEN_ORIENTATION.PORTRAIT
            : s.SCREEN_ORIENTATION.LANDSCAPE;
        }
        function h () {
          S && o.isSupportedOrientation(T()) && u();
        }
        function _ () {
          S && o.isSupportedOrientation(T()) && !v() ? (m(), a(), h()) : l();
        }
        function b () {
          e.eventLib.removeEvent(t, 'scroll', E), e.eventLib.removeEvent(t, 'resize', _);
        }
        function C () {
          e.eventLib.addEvent(t, 'scroll', E), e.eventLib.addEvent(t, 'resize', _);
        }
        function I () {
          S || ((S = !0), _());
        }
        function O () {
          _(),
            i.addToEventQueue('confirmCloseAdtag', r.getEntity('vi'), y),
            i.addToEventQueue('showCloseButton', r.getEntity('vi'), function () {
              e.isFunction(k) && k();
            }),
            i.addToEventQueue('onAdLoadComplete', o.getCrid(), I),
            i.addToEventQueue('onRtbsAdLoadComplete', o.getCrid(), I);
        }
        var L,
          N = o.getTimeForInteractionIdle() || 10000,
          A = !0,
          R = t.pageYOffset || document.documentElement.scrollTop,
          D = o.getScrollHeight() || Math.round(t.screen.availHeight / 2),
          S = !1,
          k = null,
          H = { add_to_home_screen_div: ['ios_add_to_home_coachmark'] };
        return O(), { closeButtonClicked: p, addEvents: C };
      }
      return { getInteractionFunctions: o };
    });
    !(function (e, t, n, i) {
      'use strict';
      function o (e, t) {
        e.addEntity('flovr', 1), f.isStringSet(t) && e.addEntity('l1flres', t);
      }
      function c (e) {
        var t = i._ovlTg || '';
        return f.checkItemExists(t, e);
      }
      function r (e) {
        var t = i._intActDockTg || '';
        return f.checkItemExists(t, e) || v.isNewDockedUnitSupported(e);
      }
      function a () {
        n.ovlShown = !0;
      }
      function d () {
        return n.ovlShown;
      }
      function l (e, t) {
        return !t && E && f.isFunction(E.mngc) && E.mngc(e);
      }
      function s (e) {
        return v.isNewDockedUnitSupported(e) && !v.isNewDockedUnitOnly(e);
      }
      function u (t) {
        var u = t.adScope,
          E = u.getEntity('crid'),
          D = [];
        if (c(E))
          D = [
            'ui-manager',
            'config-manager',
            'common-constants',
            'overlay-constants',
            'overlay-interaction-detector',
          ];
        else {
          if (!r(E)) return;
          D = [
            'ui-manager',
            'config-manager',
            'common-constants',
            'interactive-docker-constants',
            'interactive-docker-interaction-detector',
          ];
        }
        e._cmL1Require(D, function (e, t, c, r, D) {
          if (
            ((r = f.merge(c, r)),
            (g = new t(E, r)),
            d() ||
              l(r.DIV_IDENTIFIER, g.shouldIgnoreSessionDisable()) ||
              !g.isApplicableDevice() ||
              f.inIframe)
          )
            if (s(E)) n.disableOldDockedUnit(u);
            else {
              var p = null;
              v.isNewDockedUnitOnly(E) &&
                (g.isApplicableDevice()
                  ? d() && (p = i._foSettings.REASON.MOBILE_OVERLAY_ALREADY_PRESENT)
                  : (p = i._foSettings.REASON.HIDE_MOBILE_OVERLAY)),
                o(u, p);
            }
          else {
            var S = new e(u, g, r, D);
            S.init(),
              v.isNewDockedUnitSupported(E) &&
                (u.addVogonParamtoLocHash('nmovl', 1),
                u.addEntity('nmovl', '1'),
                u.addEntityDNP('heightZero', 1)),
              f.triggerAdTagEvent(m, 'updatePlaceholder', !0, {
                cacheKey: u.uid,
                newPlaceholder: S.getNewPlaceholder(),
              }),
              a();
          }
        });
      }
      var g,
        E = i._util,
        f = i.util,
        m = f.getAdTagUID(),
        v = f.getRequireModule('product-type-helper');
      f.addToEventQueue('load::OVERLAY_ADS', m, u), f.resolveModuleLoad(m);
    })(window, document, _mNDetails, _mN);
    !(function (t, e, r) {
      'use strict';
      function n (t) {
        var e, r, n;
        return (e = t.tagName), (r = t.id || ''), (n = e + (s.isStringSet(r) ? '-' + r : ''));
      }
      function a () {
        return s.isInIFrameCall() && !s.isParentAccessible();
      }
      function c () {
        var t = null;
        try {
          if (e.currentScript) t = e.currentScript;
          else {
            var r = e.getElementsByTagName('script');
            t = r[r.length - 1];
          }
        } catch (n) {}
        return t && t.parentNode ? t.parentNode : null;
      }
      function i (t) {
        var r,
          n = [];
        return (
          (r = e.getElementById(t)), r && (n.push(r), r.parentNode && n.push(r.parentNode)), n
        );
      }
      function u (t, e) {
        var r = [];
        try {
          for (var n = 0; n < e; n++) (t = t && t.parentNode), t && r.push(t);
        } catch (a) {}
        return r;
      }
      function o (e) {
        var r,
          o,
          l,
          d = [],
          g = '';
        try {
          r = t.frameElement;
        } catch (p) {
          return 'ERRFE';
        }
        if (r) (g = 'SL'), (d = d.concat(u(r, f)));
        else {
          if (a()) return 'SF|' + s.getHostname(t.location.href);
          e ? ((g = 'AS'), (d = i(e))) : ((g = 'S'), (o = c()), o && d.push(o));
        }
        l = g;
        for (var m = 0; m < d.length; m++) l += '|' + n(d[m]);
        return l;
      }
      function l (t) {
        var e = t.adScope,
          r = s.getRequireModule('l3transmitter'),
          n =
            (r && r.getL3TransmitterObject && r.getL3TransmitterObject(e.getEntity('vi'))) || null;
        if (n) {
          var a;
          try {
            a = o(e.getEntity('placeholder'));
          } catch (c) {
            a = 'ERR';
          }
          n.addL3DecisionParam('cntrdt', a);
        }
      }
      var s = r.util,
        d = s.getAdTagUID(),
        f = s.safeReturn(r._cntDetConf, 'parents') || 2;
      s.addToEventQueue('load::CONT_EXTRACTION', d, l), s.resolveModuleLoad(d);
    })(window, document, _mN);
    !(function (e, t, r) {
      'use strict';
      function n () {
        return o.isInIFrameCall() && !o.isParentAccessible();
      }
      function a () {
        const $___old_16357bf777e6c2f4 = {}.constructor.getOwnPropertyDescriptor(
          window,
          'performance'
        );
        try {
          if ($___old_16357bf777e6c2f4)
            ({}.constructor.defineProperty(
              window,
              'performance',
              $___stub_c0f1d0ee9b6f2da6.performance
            ));
          return function () {
            try {
              var e = o.getTopmostAccessibleWindow() || !1,
                t = e && e.performance && e.performance.getEntries(),
                r = t && t.length ? t[0].name : void 0;
            } catch (n) {
              return '';
            }
            return (o.isStringSet(r) && 'document' !== r) || (r = e ? e.location.hash : ''), r;
          }.apply(this, arguments);
        } finally {
          if ($___old_16357bf777e6c2f4)
            ({}.constructor.defineProperty(window, 'performance', $___old_16357bf777e6c2f4));
        }
      }
      function i (e) {
        var t = '',
          r = e.getEntity('requrl', !0);
        t = n() ? r : a();
        var i = o.isStringSet(t) && t.indexOf(':~:text=');
        return i && i !== -1
          ? ((t = t.substr(i)),
            e.updateEntity('requrl', o.encodeParam(r.replace(t, ''))),
            t.replace(':~:text=', ''))
          : '';
      }
      function c (e) {
        var t = e.adScope,
          r = o.getRequireModule('l3transmitter'),
          n =
            (r && r.getL3TransmitterObject && r.getL3TransmitterObject(t.getEntity('vi'))) || null;
        if (n) {
          var a;
          try {
            a = i(t);
          } catch (c) {
            a = 'ERR';
          }
          n.addL3LogParam('stq', o.decodeParam(a));
        }
      }
      var o = r.util,
        u = o.getAdTagUID();
      o.addToEventQueue('load::SCROLL_TO_TEXT', u, c), o.resolveModuleLoad(u);
    })(window, document, _mN);
    window._cmL1Define(
      'common-rendering-helper',
      [window, document, _mN, _mN.util, _mNDetails],
      function (t, e, i, r, n) {
        function a (t, e) {
          return r.queryDOM(t.placeholder || e.getEntity('placeholder'));
        }
        function o (t, e) {
          var n = t.getEntity('crid');
          return (
            !('1' !== i._L2Hun && !r.checkItemExists(i._L2Hun, n)) ||
            ((!e || !e.isSecondary) && 1 != t.getEntity('isSecondary') && t.getEntity('_L2Hun'))
          );
        }
        function d (t, e, i) {
          return !t.getEntity('heightZero') || (e && e.isSecondary) || t.getEntity('isSecondary')
            ? t.getEntity('customL2Height')
              ? t.getEntity('customL2Height')
              : i
            : '0';
        }
        function c (t, e) {
          var n =
            r.safeReturn(i._aatf, e.getEntity('crid')) ||
            r.safeReturn(i._aatf, e.getEntity('cid'));
          if (r.isStringSet(n))
            for (var a in n) {
              var o = n[a];
              r.isStringSet(o) && t.set(a, o);
            }
          (1 !== e.getEntity('hlt') && 1 !== e.getEntity('ignybn')) ||
            (t.set('width', 0), t.set('height', 0), t.overrideStyle('display:none !important;'));
        }
        function g (t, e, i) {
          var n,
            g = i.size,
            l = i.id,
            s = i.src,
            u = i.title,
            f = a(e, t),
            m = new r.CreateFrame()
              .set('marginWidth', 0)
              .set('marginHeight', 0)
              .set('scrolling', 'no')
              .set('frameBorder', 0)
              .set('height', d(t, e, g[1]))
              .set('width', o(t, e) ? '100%' : g[0])
              .set('id', l)
              .set('allowtransparency', 'true');
          r.isStringSet(u) && m.set('title', u),
            e.isSecondary || c(m, t),
            r.isStringSet(s) && (m.set('src', s), i.onload && m.set('onload', i.onload)),
            (n = m.done()),
            f.appendChild(n);
        }
        function l (t) {
          return 1 == t.getEntity('jtag');
        }
        function s (t, e) {
          r.isOptionSet(e.getEntity('vif')) &&
            (N.isInterscrollerAdtag(e.getEntity('crid')) ||
              (t &&
                n.triggerAdTagEvent(e.getEntity('vi'), 'VIMP::Detect', !0, { targetElement: t })));
        }
        function u (t) {
          var e = r.getRandom(0, 9999);
          return (
            (e =
              e < 10
                ? '000' + e.toString()
                : e < 100
                ? '00' + e.toString()
                : e < 1000
                ? '0' + e.toString()
                : e.toString()),
            t.substr(0, t.length - 4) + e
          );
        }
        function f (t, e, i) {
          var n;
          if (1 == t.getEntity('nmovl') && !N.isNewDockedUnitOnly(t.getEntity('crid'))) {
            var a = t.getEntity('prev_placeholder'),
              o = { vi: u(e.vi), mns: 1, staticIframe: 1, nmovl: '', ms: '', nb: '', hlt: '' },
              d = { nocont: 1 },
              c = { isSecondary: !0 };
            r.isStringSet(a) && (c.placeholder = a),
              (n = { loadDetails: r.merge(i, c), customSrcParams: o, customHashLogParams: d });
          }
          return n;
        }
        function m (t, e, i, n) {
          var a = f(e, i, n);
          r.isSet(a) &&
            A.execSafe(t, e, i, a.loadDetails, a.customSrcParams, a.customHashLogParams);
        }
        function h (t, i) {
          i = i || '';
          var r = i + t.getEntity('vi');
          return e.write("<div id='" + r + "'></div>"), r;
        }
        function y (t) {
          var e = t.getEntity('placeholder');
          if (!r.isSet(e)) {
            var i = h(t);
            r.triggerAdTagEvent(t.uid, 'updatePlaceholder', !0, {
              cacheKey: t.uid,
              newPlaceholder: i,
            });
          }
        }
        function v (t) {
          var e = t.getEntity('placeholder');
          if (!r.isSet(e)) {
            var i = h(t, 'dfp_');
            t.addEntityDNP('dfpPlaceholder', i);
          }
        }
        function S (t) {
          return r.checkItemExists(i._L2ISrc, t) || '1' === i._L2ISrc;
        }
        function E (t, e, r) {
          g(t, r, {
            size: [e.d.width, e.d.height],
            id: e.d.id,
            src: e.e.src,
            onload: e.e.onload,
            title: i._ifrT,
          });
        }
        function p (t, i, a, o, d, c, g, l, s) {
          var u = !0,
            f = !1,
            m = r.getRequireModule('module-factory'),
            h = m.getModules(t, 'l1LogPixel');
          r.isSet(h) && h.fireL1LoggingPixel('inWriteAdCode'),
            r.isStringSet(a) &&
              r.isSet(o) &&
              r.isStringSet(i) &&
              r.callWhenAvailable(d, 200, function (d) {
                if (r.isSet(d) && d !== !1) {
                  r.isSet(h) && h.fireL1LoggingPixel('afterPlaceholder');
                  var m = e.createElement('iframe');
                  (m.id = i),
                    (m.marginWidth = '0'),
                    (m.marginHeight = '0'),
                    (m.scrolling = 'NO'),
                    (m.frameborder = 0),
                    (m.width = o.w),
                    (m.height = o.h),
                    (m.frameBorder = 'NO'),
                    (g = g || {});
                  for (var y in g) m[y] = g[y];
                  if (
                    (d.appendChild(m),
                    r.triggerAdTagEventWhenQueued(t, 'iframePlaced', {
                      iframeInstance: m,
                      adScope: s,
                    }),
                    (u = r.writeContentInIframe(m, a)),
                    u === !1 && (f = L(i)),
                    (c = c || {}),
                    !c.disable)
                  ) {
                    var v = r.merge({ targetElement: i }, c);
                    (v = r.merge(v, l || {})),
                      f !== !0 && n.triggerAdTagEvent(t, 'VIMP::Detect', !0, v);
                  }
                  s && f === !0 && _(t, s, i, v);
                }
              });
        }
        function I (t, e, i, n, a, o, d, c, g) {
          var l = {
            vi: t,
            id: e,
            adCode: i,
            placeholderId: a,
            paramsForViewability: o,
            miscParams: d,
            settingParams: c,
            adScope: g,
          };
          r.triggerAdTagEvent(t, 'loadJtag', !1, l);
        }
        function P (t) {
          var e = '_mN_main_' + t;
          return r.queryDOM(e) && (e += '_' + n.adTagList.length), e;
        }
        function w (t, e, i) {
          var n = P(t.getEntity('crid')),
            a = t.getEntity('size').split('x');
          r.setL3FrameId(t.getEntity('vi'), n);
          var o = t.getIframeAttrs(n, a[0], a[1], i);
          (o.e.onload = function () {
            s(n, t);
          }),
            E(t, o, e);
        }
        function L (t) {
          try {
            var i = e.getElementById(t),
              n = r.getIframeDoc(i);
            return null !== n[2] || n[0].body.childNodes.length < 1;
          } catch (a) {
            return !0;
          }
        }
        function _ (t, i, n, a) {
          try {
            var o = e.getElementById(n);
            a.disable ||
              r.eventLib.addEvent(o, 'load', function (t) {
                s(n, i);
              }),
              (o.src = i.getEntity('fcmainUrl') + '&htmlsrc=1');
          } catch (d) {}
        }
        var N = r.getRequireModule('product-type-helper'),
          A = i._mNRP;
        return {
          shouldSetL2WidthHundredPercent: o,
          getL2Height: d,
          loadL2AsIframeWithSrc: S,
          renderSourcefull: w,
          loadSecondaryTargetIfNecessary: m,
          writePlaceholder: h,
          writePlaceholderIfNotPresent: y,
          writeDfpPlaceholderIfNotPresent: v,
          writeAdCodeInIframeGeneric: p,
          writeAdCodeForJtagImplementation: I,
          isJtagImplementation: l,
        };
      }
    );
    window._cmL1Define('adscope-clone', [window, document], function (t, n) {
      function e (t) {
        function n () {
          a.each(t, function (t, n) {
            a.isSet(d[n]) || a.isFunction(d[n]) || (d[n] = t);
          });
        }
        function e (t, n) {
          return void 0 !== t[n];
        }
        function i (t, n, e, i) {
          (i && !i.test(n)) ||
            (e &&
              ('object' == typeof n
                ? (n.value = a.checkUrlDecodingEncoding(n.value))
                : (n = a.checkUrlDecodingEncoding(n))),
            (u[t] = n));
        }
        function o (t, n) {
          var e = 'object' == typeof u[t] && a.isSet(u[t].value) ? u[t].value : u[t];
          return n === !0 ? a.decodeParam(e) : e;
        }
        function r (t, n) {
          a.isStringSet(t) && a.isSet(n) && (s[t] = n);
        }
        function c (t) {
          if (a.isStringSet(t)) return s[t];
        }
        var u = {},
          s = {},
          d = this;
        (d.addEntity = function (t, n, e, a) {
          i(t, n, e, a);
        }),
          (d.updateEntity = d.addEntity),
          (d.addEntityDNP = function (t, n) {
            i(t, { value: n, isUrlEntity: !1 });
          }),
          (d.getEntity = function (n, i) {
            var r = o(n, i);
            return a.isSet(r) || e(u, n) ? r : t.getEntity(n, i);
          }),
          (d.getFinalSourceParams = function () {
            return t.getFinalSourceParams(u);
          }),
          (d.getFinalHashLogParams = function () {
            return t.getFinalHashLogParams(s);
          }),
          (d.getFinalHashLogParamsAsObject = function () {
            return a.merge(t.getFinalHashLogParamsAsObject(), s);
          }),
          (d.addParamtoLocHash = function (n, e, a) {
            r(n, e), a && t.addParamtoLocHash(n, e);
          }),
          (d.getParamFromLocHash = function (n) {
            var i = c(n);
            return a.isSet(i) || e(s, n) ? i : t.getParamFromLocHash(n);
          }),
          n();
      }
      var a = _mN.util;
      return e;
    });
    window._cmL1Define('module-factory', [window, 'l3renderer', 'rtbs-renderer'], function (
      e,
      t,
      i
    ) {
      function n (e) {
        var n = new t(e),
          l = e.getEntity('vi');
        return (
          e.getEntity('rtbs')
            ? e.getEntity('is_nat')
              ? (n = new i(e, n, function () {
                  a.triggerAdTagEventWhenQueued(l, o);
                }))
              : (a.triggerAdTagEventWhenQueued(l, o), (n = new i(e, n)))
            : a.triggerAdTagEventWhenQueued(l, o),
          n
        );
      }
      function l (t) {
        try {
          var i = e._cmL1Require(['mnet-adblock-plus'])[0];
          return new i(t);
        } catch (n) {}
      }
      function s (t) {
        if (t.getEntity('fl1logpxl'))
          try {
            var i = e._cmL1Require(['fire-l1-logging-pixel'])[0];
            return new i(t);
          } catch (n) {}
      }
      function u (e, t) {
        (_mNDetails[e] = _mNDetails[e] || {}),
          (_mNDetails[e].modules = _mNDetails[e].modules || {}),
          (_mNDetails[e].modules.renderer = n(t)),
          (_mNDetails[e].modules.abp = l(t)),
          (_mNDetails[e].modules.l1LogPixel = s(t));
      }
      function r (e, t, i) {
        (_mNDetails[e] = _mNDetails[e] || {}),
          (_mNDetails[e].modules = _mNDetails[e].modules || {}),
          a.isStringSet(t) && (a.isSet(i) || a.isFunction(i)) && (_mNDetails[e].modules[t] = i);
      }
      function m (e, t) {
        (_mNDetails[e] = _mNDetails[e] || {}),
          (_mNDetails[e].modules = _mNDetails[e].modules || {});
        var i = _mNDetails[e].modules[t];
        return a.isSet(i) || a.isFunction(i) ? i : null;
      }
      var a = e._mN.util,
        o = 'callsettings';
      return { setDefaultModules: u, setModulesFromFcmain: r, getModules: m };
    });
    window._cmL1Define(
      'rtbs-renderer',
      [window, 'common-rendering-helper', 'l2entity', 'l1-constants'],
      function (e, n, t, r) {
        function i (e, i, a) {
          function u () {
            D(), T();
          }
          function _ (e) {
            return E.isSet(e) && E.checkItemExistsInArray(d, e);
          }
          function R (t, r, i, E) {
            n.writeAdCodeInIframeGeneric(
              v,
              o.AD_TAG_IFRAME_PREFIX + v,
              t,
              { w: r, h: i },
              e.getEntity('placeholder'),
              { type: 'rtbs', data: E }
            );
          }
          function c (e) {
            return E.safeReturn(e, 'isNatWin') || !1;
          }
          function N (e) {
            var n = E.safeReturn(e, 'isnat') || !1;
            return c(e) || n;
          }
          function f (n, t) {
            var r = t.providerDetails;
            N(r) && e.addEntity('ntv', 1),
              _(E.safeReturn(r, 'winProv')) || c(r)
                ? (E.isFunction(a) && a(), (A = o.RENDER_L3_EVENT))
                : (A = o.RENDER_RTBS_EVENT),
              e.getEntity('dfp')
                ? E.addToDelayedEventQueue('displayAdAfterDfp', v, function (e, n) {
                    s(n.forceYbn);
                  })
                : s();
          }
          function s (n) {
            n && (A = o.RENDER_L3_EVENT),
              A === o.RENDER_RTBS_EVENT && e.addEntityDNP('externalProvShown', 1),
              E.triggerAdTagEventWhenQueued(v, A),
              A !== o.RENDER_L3_EVENT ||
                n ||
                E.triggerAdTagEventWhenQueued(v, r.LOG_RENDERED_AD_EVENT);
          }
          function D () {
            E.addToDelayedEventQueue('RenderRTBSWinner', v, function (e, n) {
              R(n.adCode, n.width, n.height, n.data);
            });
          }
          function T () {
            E.addToDelayedEventQueue('bidDone', v, function (e, n) {
              f(e, n);
            });
          }
          var A,
            v = e.getEntity('vi');
          (this.bootstrapRenderer = function (n) {
            t.getL2Entity(e, n, !0).cacheLocHashForL3(n), i.bootstrapRenderer(n);
          }),
            (this.initAd = function (e) {
              E.triggerAdTagEvent(v, 'adContentLoaded'),
                E.addToDelayedEventQueue(o.RENDER_L3_EVENT, v, function () {
                  i.initAd(e);
                });
            }),
            u();
        }
        var E = e._mN.util,
          d = _mN._rtbsC && E.isArray(_mN._rtbsC.YBNCABID) ? _mN._rtbsC.YBNCABID : [''],
          o = {
            AD_TAG_IFRAME_PREFIX: '_mN_rtbs_',
            RENDER_L3_EVENT: 'renderL3',
            RENDER_RTBS_EVENT: 'showRTBSWinner',
          };
        return i;
      }
    );
    window._cmL1Define('l2entity', [window, document, _mN], function (e, n, t) {
      function A (e, n, t) {
        function A () {
          (R = a.safeReturn(n, i.CALL_PARAMS.L2_PARAMS) || {}),
            (c = a.safeReturn(n, i.CALL_PARAMS.ESI_PARAMS) || {}),
            (R = a.merge(R, c));
          var e = a.safeReturn(n, i.CALL_PARAMS.L3_OBJECT) || {};
          (_ = a.safeReturn(e, i.CALL_PARAMS.L3_PARAMS) || {}), (R = a.merge(R, _));
        }
        function L (e) {
          var n = a.safeReturn(a.safeReturn(e, i.CALL_PARAMS.L2_PARAMS), 'viComp'),
            t = 3;
          return (
            a.isStringSet(S) && ((t = 2), a.isStringSet(n) && ((t = 1), S === n && (t = 0))), t
          );
        }
        function o (n) {
          a.each(n, function (n, A) {
            a.isStringSet(A) &&
              a.isSet(n) &&
              ('object' == typeof n ? o(n) : e.addParamtoLocHash(A, encodeURIComponent(n), t));
          });
        }
        function r () {
          e.addParamtoLocHash('l2ch', encodeURIComponent(L(n)), t);
        }
        var S = e.getEntity('vi'),
          R = {},
          c = {},
          _ = {};
        (this.getParam = function (e) {
          return R[e];
        }),
          (this.cacheLocHashForL3 = function (n) {
            r(),
              o(a.safeReturn(n, i.CALL_PARAMS.LHP_PARAMS)),
              t || o(a.safeReturn(n, i.CALL_PARAMS.ESI_PARAMS)),
              e.cacheHashLoginMNDetails(e.getFinalHashLogParams());
          }),
          A();
      }
      function L (e, n, t) {
        return a.isSet(e.L2) || (e.L2 = new A(e, n, t)), e.L2;
      }
      var a = t.util,
        i = {
          CALL_PARAMS: {
            L2_PARAMS: '_mNL2',
            LHP_PARAMS: 'lhp',
            ESI_PARAMS: '_mNe',
            L3_OBJECT: 'ac',
            L3_PARAMS: '_l3v',
          },
        };
      return { getL2Entity: L };
    });
    window._cmL1Define(
      'l3renderer',
      [window, document, _mN, 'common-rendering-helper', 'l2entity'],
      function (e, t, n, i, r) {
        function a (e) {
          function t () {
            return u.MAIN_IFRAME_PREFIX + _;
          }
          function a (t) {
            if (A.isStringSet(t)) {
              var n = t.split('x');
              if (n.length >= 2 && A.isStringSet(n[0]) && A.isStringSet(n[1])) {
                var r = n[0],
                  a = n[1];
                return (
                  (i.shouldSetL2WidthHundredPercent(e) ||
                    (e.L2 && 1 == e.L2.getParam('setL3100'))) &&
                    (r = '100%'),
                  (a = i.getL2Height(e, null, a)),
                  e.L2 && A.isSet(e.L2.getParam('custHt')) && (a = e.L2.getParam('custHt')),
                  { w: r, h: a }
                );
              }
            }
          }
          function o (e) {
            var t = {},
              n = {},
              i = A.safeReturn(e, u.CALL_PARAMS.ENTITY_PARAMS);
            return (t.pid = A.safeReturn(i, 'pid')), (n.setting = t), n;
          }
          function R (t) {
            var n = A.getRequireModule('module-factory');
            A.isArray(t) &&
              A.each(t, function (t) {
                var i = A.getRequireModule(t);
                A.isFunction(i) && n.setModulesFromFcmain(_, t, new i(e));
              });
          }
          var _ = e.getEntity('vi');
          (this.bootstrapRenderer = function (t) {
            r.getL2Entity(e, t, !1).cacheLocHashForL3(t),
              R(t[u.CALL_PARAMS.MOD_ARR]),
              A.triggerAdTagEvent(_, 'beforeFcmainRender');
          }),
            (this.initAd = function (r) {
              if (!e.getEntity('disableL3')) {
                var R = e.getEntity('placeholder'),
                  c = A.safeReturn(r, u.CALL_PARAMS.AD_CODE)
                    ? A.safeReturn(r[u.CALL_PARAMS.AD_CODE], 'content')
                    : '',
                  d = a(A.safeReturn(A.safeReturn(r, u.CALL_PARAMS.L2_PARAMS), 'size')),
                  s = o(r),
                  L = {};
                A.isStringSet(n._ifrT) && (L.title = n._ifrT);
                var g = [_, t(), c, d, R, s, L, {}, e];
                i.isJtagImplementation(e)
                  ? i.writeAdCodeForJtagImplementation.apply(null, g)
                  : i.writeAdCodeInIframeGeneric.apply(null, g),
                  A.triggerAdTagEvent(_, 'afterFcmainRender');
              }
            });
        }
        var A = n.util,
          u = {
            MAIN_IFRAME_PREFIX: '_mN_main_',
            CALL_PARAMS: {
              L2_PARAMS: '_mNL2',
              AD_CODE: 'ac',
              MOD_ARR: '_md',
              ENTITY_PARAMS: '_mNe',
            },
          };
        return a;
      }
    );
    window._cmL1Define('settings', [document, 'module-factory', 'adscope-clone'], function (
      t,
      e,
      n
    ) {
      function i (t) {
        var e = h.queryDOM('@script:0');
        if (h.isSet(e)) e.parentNode.insertBefore(t, e);
        else
          try {
            h.queryDOM('@body:0').appendChild(t);
          } catch (n) {}
      }
      function r (e, n) {
        var r = t.createElement('script');
        (r.id = '_mN_dys_' + n), (r.src = e), (r.async = 'async'), i(r);
      }
      function d (t) {
        _mNDetails.triggerAdTagEvent(t, 'hideAdFrames', !0, { viewId: t });
      }
      function o (t) {
        return t.getEntity('customL2SettingsPath') || t.getEntity('tv2e');
      }
      function a (t, e, n) {
        var i = _mN._v6dn || '',
          r = _mN._atv6s || '';
        return h.isStringSet(i) && (h.checkItemExists(r, e) || h.checkItemExists(r, n))
          ? 'https://' + i + '/'
          : t;
      }
      function s (t, e, n) {
        var i = t.getFinalSourceParams(),
          r = o(t),
          d = t.getEntity('crid'),
          s = t.getEntity('cid'),
          c = '';
        return (
          n && (r = r.replace(/\.js/, '.html')),
          h.isStringSet(e.host) &&
            h.isStringSet(r) &&
            h.isStringSet(i) &&
            (c = a(e.host, d, s) + r + '?' + i + '&cb=window._mNDetails.' + S),
          t.addEntityDNP('fcmainUrl', c),
          c
        );
      }
      function c (t, n) {
        var i = e.getModules(t, 'renderer');
        h.isSet(i) &&
          (h.isFunction(i.bootstrapRenderer) && i.bootstrapRenderer(n),
          h.isFunction(i.initAd) && i.initAd(n));
      }
      function l (t) {
        var n = t.vi || '',
          i = t.s,
          r = h.safeReturn(t.s._mNL2, 'hideAdUnitABP'),
          o = e.getModules(n, 'abp'),
          a = h.safeReturn(p, n) || {};
        if (
          _mN._custom &&
          h.isFunction(_mN._custom.shouldCustomFailoverFcmainRendering) &&
          _mN._custom.shouldCustomFailoverFcmainRendering(a)
        ) {
          var s = h.getRequireModule('l1logger');
          return void s.logFailover(
            a.getEntity('flres'),
            _mN._foSettings.ACTION.ABORT_RENDERING,
            a
          );
        }
        r && h.isSet(o) && o.isAdBlockPlusDetected()
          ? d(n)
          : h.isStringSet(n) && h.isSet(i) && c(n, i);
      }
      function u () {
        h.isFunction(window._mNDetails[S]) || (window._mNDetails[S] = l);
      }
      function g (t) {
        return !(!t.getEntity('tv2SrcFull') || t.getEntity('nmovl') || t.getEntity('insl'));
      }
      function m (t, e, n) {
        var i = function () {
          (i = function () {}), y(t, e, n);
        };
        if (N && !t.getEntity('nmovl') && !t.getEntity('insl')) {
          var r = new N(t.getEntity('placeholder'), t.getEntity('crid'));
          if (r.shouldLazyLoadTag('fcmain')) return void r.load(i);
        }
        i();
      }
      function y (t, e, n) {
        h.addToDelayedEventQueue('callsettings', n, function () {
          if (1 !== t.getEntity('externalProvShown'))
            if (g(t)) {
              t.addEntity('htmlsrc', '1');
              var i = s(t, e, !0);
              _.renderSourcefull(t, e, i);
            } else {
              t.addEntity('nb', 1);
              var d = s(t, e);
              r(d, n);
            }
        });
      }
      function f (t, n) {
        var i = t.getEntity('vi');
        t.updateEntity('staticIframe', ''),
          (p[i] = t),
          _.writePlaceholderIfNotPresent(t),
          m(t, n, i),
          g(t)
            ? h.triggerAdTagEventWhenQueued(i, 'callsettings')
            : (e.setDefaultModules(i, t), u());
      }
      function E (t, e, n) {
        f(t, n);
      }
      function v (t, e, i, r) {
        var d = r.vi,
          o = new n(t);
        if ((o.updateEntity('vi', d), h.isStringSet(i.placeholder)))
          o.addEntityDNP('placeholder', i.placeholder);
        else {
          if (o.getEntity('isAsync')) return;
          var a = _.writePlaceholder(o);
          o.addEntityDNP('placeholder', a);
        }
        o.addEntity('rtbs', !1),
          o.addEntity('mns', 1),
          o.addEntity('staticIframe', ''),
          o.addEntity('nmovl', ''),
          o.addEntity('ms', ''),
          o.addEntity('hlt', ''),
          o.addEntity('isSecondary', 1),
          o.addParamtoLocHash('nocont', 1),
          f(o, i);
      }
      var h = _mN.util,
        S = 'initAd',
        _ = h.getRequireModule('common-rendering-helper'),
        N = h.getRequireModule('lazyload'),
        p = {};
      return { renderSettings: E, renderSettingsSecondary: v };
    });
    !(function (e, t, n, a, o) {
      'use strict';
      function d () {
        function e (e, t) {
          return 'SETTINGS';
        }
        function t (e) {
          var t;
          switch (e) {
            case 'SETTINGS':
              t = s.renderSettings;
              break;
            default:
              t = function () {};
          }
          return t;
        }
        function n () {
          var n = o.get('entities'),
            a = o.get('adScope'),
            d = o.get('loadDetails');
          if (i.queryDOM(d.placeholder) && !d.loaded) {
            a.updateAdTagsList(), i.triggerAdTagEvent(a.uid, 'beforeLoad');
            var r = u.execSafe(t(e(n, a)), a, n, d);
            i.passUrlToConsole(a.uid, 'Layer Two Url', r),
              i.triggerAdTagEvent(a.uid, 'afterLoad'),
              (d.loaded = !0),
              l.loadSecondaryTargetIfNecessary(s.renderSettingsSecondary, a, n, d);
          }
        }
        function a () {
          i.callWhenAvailable(o.get('loadDetails').placeholder, 100, n);
        }
        var o = (function () {
          var e = {};
          return {
            set: function (t) {
              e = t;
            },
            get: function (t) {
              return e[t];
            },
          };
        })();
        this.loadTag = function (e, t) {
          o.set({ entities: e.entities, adScope: e.adScope, loadDetails: t }),
            i.DOMLoadObserver.getInstance().onDOMLoad(n),
            a();
        };
      }
      function r (e) {
        i.addToEventQueue('loadTag', e.adScope.uid, function (e, t) {
          new d().loadTag(e, t);
        });
      }
      var i = n.util,
        u = n._mNRP,
        c = i.getAdTagUID(),
        l = i.getRequireModule('common-rendering-helper'),
        s = i.getRequireModule('settings') || {
          renderSettings: function () {},
          renderSettingsSecondary: function () {},
        };
      i.addToEventQueue('load::Renderer', c, r), i.resolveModuleLoad(c);
    })(window, document, _mN, _mNDetails);
    window._cmL1Define('msn-placement-sd', [_mN, _mNDetails], function (n, e) {
      function t (n) {
        function t () {
          var n = '';
          try {
            n = window.location.href.toLowerCase().split('?')[0];
          } catch (e) {}
          return n;
        }
        function r () {
          var n = t(),
            e = {};
          return (
            i.isStringSet(n) &&
              (e = i.any(m, function (e, t) {
                try {
                  if (new RegExp(t, 'i').test(n)) return e;
                } catch (i) {}
              })),
            e
          );
        }
        function o (n) {
          var e = document.createElement('div');
          return (e.id = n), e;
        }
        function c (n, t, i) {
          var r = o(i);
          n.appendChild(r), (window._mNNewSDUnitShown = !0), e.loadTag(i, u, i);
        }
        function a (n, e) {
          var t = document.querySelector(n.selector);
          i.isSet(t) && c(t, n.place, e);
        }
        var w = { ABOVE: 1, BELOW: 2, FIRST_CHILD: 3, LAST_CHILD: 4 },
          u = '622x220',
          m = {
            'sport(|s)/.*?/game-cent(er|re)/': {
              selector: '#main',
              pageType: 'GameCenter',
              place: w.LAST_CHILD,
            },
          },
          S = {};
        (this.getSDPageType = function () {
          return S.pageType || '';
        }),
          (this.init = function () {
            if (1 != window._mNNewSDUnitShown)
              return (S = r()), i.isObjectEmpty(S) ? void 0 : a(S, n);
          });
      }
      window._mNNewSDUnitShown = window._mNNewSDUnitShown || !1;
      var i = n.util;
      return t;
    });
    !(function (e, t, n, i, r) {
      'use strict';
      function o (e, t, n) {
        var r = Me.getRequireModule('custom-cmp');
        return Me.isSet(r) && Me.isFunction(r.callOnCMPLoaded)
          ? void r.callOnCMPLoaded(function () {
              i.loadTag(e, t, n);
            })
          : void i.loadTag(e, t, n);
      }
      function a (e) {
        if (n && n._tagFlip) {
          var t = Me.getRandom(1, 100);
          if (t <= n._tagFlip[e] && Me.isStringSet(et[e + 'Switched']))
            return (et[e] = et[e + 'Switched']), et[e];
        }
        return '';
      }
      function l (e) {
        return String.prototype.trim
          ? e.trim()
          : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
      function s (e, t) {
        var n = e.className || '';
        return n.indexOf(t) !== -1;
      }
      function d (e, n) {
        if (e.style[n]) return e.style[n];
        if (e.currentStyle) return e.currentStyle[n];
        if (t.defaultView && t.defaultView.getComputedStyle) {
          (n = n.replace(/([A-Z])/g, '-$1')), (n = n.toLowerCase());
          var i = t.defaultView.getComputedStyle(e, '');
          return i && i.getPropertyValue(n);
        }
        return null;
      }
      function c (e) {
        for (var t = e.childNodes, n = t.length, i = 0, r = 0, o = null; i < n; i++) {
          var a = t[i];
          a && 1 === a.nodeType && '' !== b(a) && ((o = a), r++);
        }
        return 1 === r && o ? o : null;
      }
      function f () {
        var e = Me.queryDOM(Le),
          t = e && e.hasChildNodes();
        if (!t) return !1;
        for (var n = e.getElementsByTagName('article'), i = 0, r = n.length; i < r; i++) {
          var o = n[i];
          if (s(o, 'articlecontent') && o.hasChildNodes())
            for (var a = o.getElementsByTagName('section'), l = 0, d = a.length; l < d; l++) {
              var f = a[l];
              if (s(f, 'articlebody')) {
                var u = c(f);
                return u ? u : f;
              }
            }
        }
        return !1;
      }
      function u (e, n) {
        var i = t.createElement('div');
        (i.style.marginBottom = '1.4rem'),
          (i.style.marginRight = '2.4rem'),
          (i.style.cssFloat = 'left'),
          (i.style.clear = 'left'),
          (i.id = n),
          e.parentNode.insertBefore(i, e.nextSibling);
      }
      function m (e, n, i) {
        var r = t.createElement('span');
        if (
          ((r.style.cssFloat = 'left'),
          (r.style.marginRight = '2.4rem'),
          (r.style.marginTop = '0.5rem'),
          (r.style.clear = 'left'),
          i)
        )
          for (var o in i) r.style[o] = i[o];
        r.id = n;
        var a = e.firstChild;
        e.insertBefore(r, a);
      }
      function g (e) {
        var t = parseInt(d(Ie, 'width'), 10);
        return t > 0 && t / 2 < e;
      }
      function v (t) {
        if (((e._mNAdUnitShown = !0), !g('270'))) {
          var n = at;
          u(t, n), o(n, '270x240', n);
        }
      }
      function h (t) {
        if (((e._mNAdUnitShown = !0), !g('300'))) {
          var n = st,
            i = '300x250';
          We && ((n = at), (i = '270x240')), m(t, n), o(n, i, n);
        }
      }
      function p (t) {
        e._mNIntraAdUnitShown = !0;
        var n = dt,
          i = '300x350';
        m(t, n), o(n, i, n);
      }
      function y (t) {
        if (((e._mNAdUnitShown = !0), !g('250') && t)) {
          var n = lt;
          m(t, n), o(n, '250x340', n);
        }
      }
      function S (e) {
        for (var t = e.getElementsByTagName('p'), n = 0, i = t.length; n < i; n++) {
          var r = t[n];
          if (!E(r) && !w(r)) return r;
        }
        return null;
      }
      function w (e) {
        if (0 === e.childNodes.length) return !0;
        var t = e.childNodes,
          n = 0,
          i = t.length,
          r = 0;
        if (0 === i) return !0;
        for (; n < i; n++) {
          var o = t[n];
          'br' === o.nodeName.toLowerCase() ||
            (3 === o.nodeType && 0 === l(o.nodeValue).length) ||
            8 === o.nodeType ||
            r++;
        }
        return 0 === r;
      }
      function b (e) {
        if (e) {
          var t = e.textContent || e.innerText || '';
          return t.replace(/^\s+|\s+$/g, '');
        }
        return '';
      }
      function x (e, t) {
        for (var n = t.totalContent, i = 0, r = e.previousSibling; r; ) {
          if (r && 1 === r.nodeType) {
            var o = b(r).length;
            if (
              ((i += o),
              0 === o && (i += t.newLine),
              'span' === r.nodeName.toLowerCase() && s(r, 'inlineimage'))
            )
              return !!s(r, 'fullwidth');
            if (Fe && s(r, 'videoplayer')) return !0;
            if (_(r, !0)) return !1;
            if (i > n) return !0;
          }
          r = r.previousSibling;
        }
        return !0;
      }
      function N (e, t, n) {
        var i = t.totalContent,
          r = 0,
          o = e;
        if (!n && _(e)) return !1;
        for (n && (o = e.nextSibling); o; ) {
          if (o && 1 === o.nodeType) {
            var a = b(o).length;
            if (
              ((r += a),
              0 !== a && (r += t.newLine),
              'span' === o.nodeName.toLowerCase() && s(o, 'inlineimage'))
            )
              return !1;
            if (Fe && s(o, 'videoplayer')) return !1;
            if (_(o)) return !1;
            if (r > i) return !0;
          }
          o = o.nextSibling;
        }
        return !1;
      }
      function A (e, t) {
        return (
          x(e[t], { totalContent: 600, newLine: 48 }) === !1 ||
          N(e[t], { totalContent: 500, newLine: 48 }) === !1
        );
      }
      function _ (e, t) {
        for (var n = e.getElementsByTagName('*'), i = 0, r = n.length, o = !!t; i < r; i++) {
          var a = n[i];
          if (1 === a.nodeType) {
            if (
              'span' === a.nodeName.toLowerCase() &&
              s(a, 'inlineimage') &&
              (!o || !s(a, 'fullwidth'))
            )
              return !0;
            if (Fe && s(a, 'videoplayer') && !o) return !0;
          }
        }
        return !1;
      }
      function B () {
        var t = e.location.href,
          n = Ae();
        new Image().src =
          n + '/log?logid=kfk&evtid=msn&url=' + Me.encodeParam(t) + '&r=' + new Date().getTime();
      }
      function C (e) {
        var t = e.nodeName.toLowerCase();
        if ('span' === t && s(e, 'storyimage') && s(e, 'globalleft')) return e;
        for (var n = e.getElementsByTagName('span'), i = 0, r = n.length; i < r; i++) {
          var o = n[i];
          if ('span' === o.nodeName.toLowerCase() && s(o, 'storyimage') && s(o, 'globalleft'))
            return o;
        }
        return null;
      }
      function E (e) {
        var t = e.nodeName.toLowerCase(),
          n = null;
        if ('span' === t && s(e, 'storyimage') && s(e, 'fullwidth')) n = e;
        else
          for (var i = e.getElementsByTagName('span'), r = 0, o = i.length; r < o; r++) {
            var a = i[r];
            if ('span' === a.nodeName.toLowerCase() && s(a, 'storyimage') && s(a, 'fullwidth')) {
              n = a;
              break;
            }
          }
        return n;
      }
      function O () {
        var i = Me.encodeParam(e.location.href),
          r = Me.encodeParam(t.referrer),
          o = Ae(),
          a = Ct ? ct : dt;
        new Image().src =
          o +
          '/log?logid=kfk&evtid=intfl&crid=' +
          a +
          '&cid=' +
          n._cid +
          '&flr=' +
          (De || 0) +
          '&requrl=' +
          i +
          '&refurl=' +
          r;
      }
      function k (e) {
        De = e;
      }
      function T () {
        try {
          if (e._mNIntraAdUnitShown === !0) return;
          var t = Me.queryDOM('#medianetintraarticlenativead');
          t ? p(t) : (k(Ye.DIV_NOT_PRESENT), O());
        } catch (n) {}
      }
      function P () {
        try {
          if (e._mNHBHAdUnitShown === !0 || !Ct) return;
          var t = pe();
          t && G(t);
        } catch (n) {}
      }
      function D () {
        if (e._mNAdUnitShown !== !0) {
          Ie = f();
          var t = Ie && Ie.hasChildNodes();
          if (!t) return void B();
          for (var n = Ie.childNodes, i = 0, r = n.length, o = 0, a = '', l = 0; i < r; i++) {
            var s = n[i];
            if (s && 1 === s.nodeType) {
              w(s) || o++;
              var c = C(s),
                u = 1030;
              if (c) {
                var m = parseInt(d(c, 'height'), 10);
                if (((u = 515), !isNaN(m) && isFinite(m))) {
                  m < 230 && (m = 230);
                  var g = Math.ceil(m / 23);
                  u += Math.ceil(51.5 * g);
                } else u += 515;
              }
              if (1 === o && c && N(s, { totalContent: u, newLine: 54 }, !0) === !0) {
                v(c);
                break;
              }
              if (1 === o && E(s)) {
                var p = S(Ie);
                if (p && N(p, { totalContent: 750, newLine: 58 }) === !0) {
                  (a = 'largeImage'), y(p);
                  break;
                }
              }
              if ('p' === s.nodeName.toLowerCase()) {
                if ((w(s) || l++, 3 === l && '' === a && A(n, i) === !1)) {
                  h(s);
                  break;
                }
                if (l > 3) break;
              }
              if (o > 7) break;
            }
          }
          e._mNAdUnitShown === !1 && B();
        }
      }
      function M (t, n) {
        if (e._mNBFAdUnitShown !== !0) {
          var i = Me.queryDOM(Le),
            r = i && i.hasChildNodes();
          if (!r) return !1;
          for (var o = i.getElementsByTagName('article'), a = null, l = 0; l < o.length; l++)
            if (q(o[l])) {
              a = o[l];
              break;
            }
          if (null !== a) {
            var s = W(a);
            return U() && 2 === t && I() && (s = I()), z(s, t, n), !0;
          }
        }
      }
      function U () {
        return Re && !Ct;
      }
      function I () {
        var e = Me.queryDOM('#oneriverajax');
        return e;
      }
      function L (e) {
        if ('object' == typeof e && 1 === e.nodeType) {
          if (e.nextElementSibling) return e.nextElementSibling;
          if (e.nextSibling) {
            for (var t = e.nextSibling; t && 1 !== t.nodeType; ) t = t.nextSibling;
            return t;
          }
        }
      }
      function F (e) {
        for (
          var t,
            n = L(e),
            i =
              'taboola-below-article-thumbnails taboola-below-article-thumbnails-card-layout-short taboola-mobile-article-thumbnails',
            r =
              'taboola-below-article-promotions taboola-below-article-thumbnails-promotions-card-layout';
          n;

        ) {
          if (
            n &&
            'div' === n.nodeName.toLowerCase() &&
            (s(n, 'OUTBRAIN') || Me.checkItemExists(i, n.getAttribute('id')))
          ) {
            if (
              (Me.checkItemExists(i, n.getAttribute('id')) &&
                !ze &&
                ((t = L(n)), t && Me.checkItemExists(r, t.getAttribute('id')) && (n = t)),
              s(n, 'OUTBRAIN') && !ze && ((t = L(n)), s(t, 'OUTBRAIN')))
            ) {
              n = t;
              continue;
            }
            return Me.checkItemExists(i, n.getAttribute('id')) && ($e = !0), (He = !0), n;
          }
          n = L(n);
        }
        return !1;
      }
      function W (e) {
        var t,
          n = e.nextSibling,
          i = ce();
        if (i && i.xWidgetPlacementDiv && 'BELOW' == i.xWidgetPlacement)
          return i.xWidgetPlacementDiv.previousSibling;
        if (i && i.xWidgetPlacementDiv && 'ABOVE' == i.xWidgetPlacement)
          return i.xWidgetPlacementDiv;
        if ((t = F(e))) return t;
        for (; n; ) {
          if (
            n &&
            1 === n.nodeType &&
            'div' === n.nodeName.toLowerCase() &&
            s(n, 'pagination_control')
          )
            return n;
          n = n.nextSibling;
        }
        return e;
      }
      function q (e) {
        if (s(e, 'articlecontent') && e.hasChildNodes())
          for (var t = e.getElementsByTagName('section'), n = 0, i = t.length; n < i; n++) {
            var r = t[n];
            if (s(r, 'articlebody')) return !0;
          }
        return !1;
      }
      function H () {
        return ze && He;
      }
      function z (n, i, r) {
        e._mNBFAdUnitShown = !0;
        var a = ut,
          l = '622x110';
        2 === i &&
          ((a = mt), (l = '622x220'), Ct && ((l = _t), (a = yt)), r && Qe.setBackfillForLog(a));
        var s = t.createElement('div');
        (s.id = a),
          Ct && (s.style.textAlign = 'center'),
          U() && 2 === i && R(s, n),
          H() || (U() && 2 === i && I())
            ? n.parentNode.insertBefore(s, n)
            : n.parentNode.insertBefore(s, n.nextSibling),
          fe(s),
          o(a, l, a);
      }
      function V (t) {
        if (e._mNBFSlideShowAdUnitShown !== !0) {
          var n = Me.queryDOM(Le),
            i = n && n.hasChildNodes();
          if (!i) return !1;
          var r = oe(n);
          U() && I() && (r = I()), r && ae(r, t);
        }
      }
      function R (t, n) {
        se(t, n),
          Me.eventLib.addEvent(e, 'resize', function () {
            se(t, n);
          });
      }
      function $ () {
        var t = e.location.href.toLowerCase().split('?')[0];
        for (var n in Et)
          if (Et.hasOwnProperty(n)) {
            var i = Et[n];
            if ('object' == typeof i.regex && i.regex.test(t)) return i;
          }
        return {};
      }
      function j () {
        if (e._mNSDAdUnitShown !== !0) {
          X();
          var t,
            n,
            i,
            r = $(),
            o = r.crid,
            a = r.appendDiv || r.identifier,
            l = r.pos || 0;
          if (
            ((Le = r.mainP || Le),
            (t = Me.queryDOM(Le)),
            (n = t && t.hasChildNodes()),
            !(n && Me.isStringSet(a) && Me.isStringSet(o)))
          )
            return K() && Q(), !1;
          (i = r.appendDiv ? Me.queryDOM(Le) : re(t, a, l)), i && ie(i, r);
        }
      }
      function Z (n) {
        var i = '300x250',
          r = a('homeBelowNews') || Bt;
        e._mNHomeAdUnitShown = !0;
        var l = t.createElement('div');
        (l.style.display = 'block'), (l.id = r), Ct && (l.style.textAlign = 'center');
        var s = L(n);
        s && (s.parentNode.insertBefore(l, s), o(r, i, r));
      }
      function G (t) {
        var n = '414x74',
          i = ft;
        (e._mNHBHAdUnitShown = !0), m(t, i, { width: '100%', marginTop: '0' }), o(i, n, i);
      }
      function J () {
        if (e._mNHomeAdUnitShown !== !0 && Ct) {
          var t,
            n,
            i = Me.queryDOM(Le),
            r = Me.getChildElemByClass(i, 'news');
          if (r && r.length)
            for (var o = 0; o < r.length; o++)
              if (
                r[o].className.indexOf('stripeouter') !== -1 &&
                'stripe.news_stripe' === r[o].getAttribute('data-aop')
              ) {
                t = r[o];
                break;
              }
          t &&
            ((n = L(t)),
            n.className.indexOf('morefrom') !== -1 &&
              'stripe.news.navigation_stripenavigation' === n.getAttribute('data-aop') &&
              Z(n));
        }
      }
      function K () {
        var t = e.location.href.toLowerCase().split('?')[0];
        return !(!Ot || 'object' != typeof Ot.regex || !Ot.regex.test(t));
      }
      function Q () {
        var n = 'emptySdDiv';
        (e._mNSDAdUnitShown = !0), (e._mNSDAdUnitShownCrid = n);
        var i = t.createElement('div');
        (i.style.display = 'none'), (i.id = n);
        var r,
          o = Me.queryDOM(Le),
          a = o && o.hasChildNodes();
        a &&
          ((r = Me.getChildElemByClass(o, 'dynaloadable')),
          r && r.length > 0 && ((r = r[0]), r.appendChild(i)));
      }
      function X () {
        for (
          var e,
            t = ['#vip-nav-links', '#sub-nav-links', '#finance-tab-links', '#years-slider-module'],
            n = 0;
          n < t.length;
          n++
        )
          (e = Me.queryDOM(t[n])),
            e &&
              e.hasChildNodes() &&
              ((e = e.getElementsByTagName('a')), e && e.length > 0 && Y(e, 'click', ee));
      }
      function Y (e, t, n) {
        if (e && e.length > 0 && t && 'function' == typeof n)
          for (var i = 0; i < e.length; ++i) Me.eventLib.addEvent(e[i], 'click', n);
      }
      function ee () {
        var t = e._mNSDAdUnitShownCrid;
        Me.isStringSet(t) && ne('#' + t, 100, j);
      }
      function te () {
        var e, t;
        return Te !== r
          ? Te
          : ((e = navigator.userAgent),
            (Me.checkItemExists(e, 'Trident') || Me.checkItemExists(e, 'MSIE')) &&
            ((t = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e)),
            Me.isArray(t) && parseFloat(t[1]) >= 11)
              ? (Te = !0)
              : /Edge\/\d./i.test(e)
              ? (Te = !0)
              : ((Te = !1), !1));
      }
      function ne (t, n, i) {
        try {
          var r = Me.queryDOM(t);
          if (!r) return (e._mNSDAdUnitShown = !1), void i.call(null);
          setTimeout(Me.getProxy(ne, [t, n, i]), n);
        } catch (o) {}
      }
      function ie (i, r) {
        var a = r.size,
          l = r.crid,
          s = r.below;
        (e._mNSDAdUnitShown = !0), (e._mNSDAdUnitShownCrid = l);
        var d = '2rem',
          c = '2rem';
        t.documentMode && t.documentMode < 9 && ((d = '20px'), (c = '20px')),
          te() && ((n._L2ISrc = n._L2ISrc || ''), (n._L2ISrc += ',' + l));
        var f = t.createElement('div');
        (f.style.display = 'block'),
          (f.style.marginBottom = d),
          (f.style.marginTop = c),
          (f.id = l),
          r.appendDiv
            ? i.appendChild(f)
            : (s === !0 && (i = i.nextSibling), i.parentNode.insertBefore(f, i)),
          o(l, a, l);
      }
      function re (e, t, n) {
        var i;
        t = t.split('|');
        for (var r = 0; r < t.length; r++) {
          if ('#' === t[r].charAt(0) && (i = Me.queryDOM(t[r]))) return i;
          if (((i = Me.getChildElemByClass(e, t[r])), i && i.length > 0 && i[n])) return i[n];
        }
        return !1;
      }
      function oe (e) {
        var t,
          n = e.childNodes,
          i = n.length,
          r = 0,
          o = ce();
        if (o && o.xWidgetPlacementDiv && 'BELOW' == o.xWidgetPlacement)
          return o.xWidgetPlacementDiv.previousSibling;
        if (o && o.xWidgetPlacementDiv && 'ABOVE' == o.xWidgetPlacement)
          return o.xWidgetPlacementDiv;
        for (; r < i; r++) {
          var a = n[r];
          if (a && 1 === a.nodeType && s(a, 'gallery-container')) {
            if ((t = F(a))) return t;
            var l = L(a);
            return Ct && l && s(l, 'gallerytoolbar') ? l : a;
          }
        }
        return !1;
      }
      function ae (n, i) {
        e._mNBFSlideShowAdUnitShown = !0;
        var r = '622x220',
          a = '2rem',
          l = '-2rem',
          s = de(n),
          d = gt;
        Ct && ((r = _t), (d = pt)),
          i && Qe.setBackfillForLog(d),
          s && (l = '2rem'),
          H() && (a = $e ? '' : '-2rem'),
          t.documentMode &&
            t.documentMode < 9 &&
            ((a = '20px'), (l = '-20px'), s && (l = '20px'), H() && (a = '-20px'));
        var c = t.createElement('div');
        (c.style.display = 'block'),
          He || Ct || (c.style.marginTop = l),
          Ct || (c.style.marginBottom = a),
          Ct && (c.style.textAlign = 'center'),
          (c.id = d),
          U() && R(c, n),
          H() || (U() && I())
            ? n.parentNode.insertBefore(c, n)
            : n.parentNode.insertBefore(c, n.nextSibling),
          fe(c),
          o(d, r, d);
      }
      function le () {
        var t = e.navigator.userAgent,
          n = t.indexOf('MSIE ');
        if (n > 0) return parseInt(t.substring(n + 5, t.indexOf('.', n)), 10);
        var i = t.indexOf('Trident/');
        if (i > 0) {
          var r = t.indexOf('rv:');
          return parseInt(t.substring(r + 3, t.indexOf('.', r)), 10);
        }
        var o = t.indexOf('Edge/');
        return o > 0 && parseInt(t.substring(o + 5, t.indexOf('.', o)), 10);
      }
      function se (n, i) {
        var r,
          o = Math.max(t.documentElement.clientWidth, e.innerWidth || 0),
          a = !!le();
        i.offsetWidth &&
          ((r = a
            ? (o <= 1335 && o >= 1265) ||
              (o <= 1185 && o >= 1152) ||
              (o <= 1014 && o >= 943) ||
              (o <= 888 && o >= 837) ||
              8 === le()
              ? i.offsetWidth
              : i.offsetWidth + 50
            : (o >= 1264 && o <= 1338) || (o >= 940 && o <= 1014)
            ? i.offsetWidth
            : i.offsetWidth + 50),
          (n.style.width = r + 'px'),
          (n.style.margin = '0 auto'));
      }
      function de (e) {
        var t = ge(e, 'inlineapppromo');
        if (t) return !0;
        var n = ge(e, 'show');
        if (!n) return !1;
        var i = ge(n, 'body-text');
        return !!i && 0 === i.clientWidth;
      }
      function ce () {
        for (
          var e, t = Me.queryDOM(Le), n = t.getElementsByTagName('div'), i = n.length, r = 0;
          r < i;
          r++
        )
          if ('true' == n[r].getAttribute('data-is-footer')) {
            e = n[r];
            break;
          }
        if (e) {
          var o = e.getAttribute('data-placement'),
            a = e.getAttribute('data-partner');
          if (Me.isStringSet(o)) {
            if (!Me.isStringSet(a)) {
              if (((a = e.getAttribute('data-aop')), !Me.isStringSet(a))) return;
              if (a.indexOf('taboola') !== -1) a = 'TB';
              else {
                if (a.indexOf('outbrain') === -1) return;
                a = 'OB';
              }
            }
            return { xWidget: a, xWidgetPlacement: o, xWidgetPlacementDiv: e };
          }
        }
      }
      function fe (n) {
        var i = ce();
        if (i)
          if (
            ((e.medianet_miscxwidget = {
              xwidget: i.xWidget,
              xwidget_placement: i.xWidgetPlacement,
            }),
            'ABOVE' === i.xWidgetPlacement)
          ) {
            var r = '2rem',
              o = '2rem';
            t.documentMode && t.documentMode < 9 && (r = '20px'),
              (n.style.marginTop = r),
              (n.style.marginBottom = o);
          } else {
            var o = '2rem';
            t.documentMode && t.documentMode < 9 && (o = '20px'), (n.style.marginBottom = o);
          }
      }
      function ue () {
        if (e._mNBFVideoAdUnitShown !== !0) {
          var t = Me.queryDOM(Le),
            n = t && t.hasChildNodes();
          if (!n) return !1;
          var i = ge(t, 'video-sections');
          if (i) {
            var r = ge(i, 'primary-sections');
            if (r)
              if (Ct) {
                var o = ge(r, 'pagingsection');
                o && me(r, o, _t, ht);
              } else {
                var a = ge(i, 'secondary-sections');
                a && me(i, a, At, vt);
              }
          }
        }
      }
      function me (n, i, r, a) {
        e._mNBFVideoAdUnitShown = !0;
        var l = t.createElement('div');
        (l.id = a), Ct || (l.className = 'primary-sections'), n.insertBefore(l, i), o(a, r, a);
      }
      function ge (e, t) {
        for (var n = e.childNodes, i = n.length, r = 0; r < i; r++) {
          var o = n[r];
          if (o && 1 === o.nodeType && s(o, t)) return o;
        }
        return !1;
      }
      function ve (e, t) {
        if (!Me.isStringSet(e)) return null;
        var n = new RegExp('[^a-zA-Z0-9-]' + t + ':(.*?)([;},])');
        'ck' == t && (n = new RegExp('[^a-zA-Z0-9-]' + t + ':(.*?)([;},]|%2C)'));
        var i = n.exec(e);
        return Me.isArray(i) && i[1] ? i[1] : null;
      }
      function he () {
        var e,
          t = Me.queryDOM('@head:0');
        if (t) {
          var n = t.getAttribute('data-info') || '',
            i = { market: 'm', vertical: 'vk', department: 'ck', pageType: 'PageName' };
          for (var r in i) Ve[r] = ve(n, i[r]) || '';
          if (((e = Me.queryDOM('@noscript:0')), e && Me.isStringSet(e.innerHTML))) {
            var o = /[?&;]provid=(.*?)[&;]/.exec(e.innerHTML);
            Me.isArray(o) && o[1] && (Ve.providerId = o[1]);
          }
        }
      }
      function pe () {
        var e = Me.queryDOM(Le),
          t = Me.getChildElemByClass(e, 'headlines')[0];
        if (!t || 'ul' === t.nodeName.toLowerCase()) {
          var n = t.getElementsByTagName('li'),
            i = null;
          if (n && n.length > 0) {
            var r = n.length - 1;
            (i = n[r].cloneNode(!1)), (i.innerHTML = ''), t.insertBefore(i, n[r].nextSibling);
          }
          return i;
        }
      }
      function ye () {
        var t = Me.encodeParam(e.location.href),
          i = Ae();
        new Image().src = i + '/log?logid=kfk&evtid=msnbtffl&cid=' + n._cid + '&requrl=' + t;
      }
      function Se (t) {
        var n = M(2, t);
        n === !0 || e._mNBFAdUnitShown || ye();
      }
      function we () {
        var t = Ue.getItemsFromMacros('misc');
        if (t && 'object' == typeof t) {
          if (
            (be(t),
            t.atfPlacement === !0 && D(),
            t.IntraArticle === !0 && Me.isStringSet(dt) && Ct === !1 && T(),
            t.homeBetweenHeadlines === !0 && Me.isStringSet(ft) && P(),
            t.homeBelowNews === !0 ||
              (t.btfPlacement220 === !0 && Me.isStringSet(et.homeBelowNews)))
          )
            J();
          else if (t.btfPlacement110 === !0) M(1);
          else if (t.btfPlacement220 === !0)
            ke(Ke.btf) ||
              ((je = !0),
              Be()
                ? Ee().init(function () {
                    Se(!0);
                  })
                : Se());
          else if (t.btfPlacement === !0) {
            var n = 2,
              i = e.location.href.toLowerCase();
            (i.indexOf('/en-us/autos/') === -1 && i.indexOf('/en-us/lifestyle/') === -1) ||
              (n = 1),
              M(n);
          }
          t.btfSlideShow === !0 &&
            (ke(Ke.btfSS) ||
              ((je = !0),
              Be()
                ? Ee().init(function () {
                    V(!0);
                  })
                : V())),
            t.btfVideo === !0 && ue(),
            t.btfSd === !0 && j(),
            Ct && 1 == t.abvContentArticle ? Ne(St) : Ct && 1 == t.abvContentSlideShow && Ne(wt),
            Ct && 1 == t.dockArticle ? _e(bt) : Ct && 1 == t.dockSlideShow && _e(xt),
            !Ct &&
              Me.isStringSet(Nt) &&
              1 == t.btfSDNew &&
              Me.isFunction(Xe) &&
              ((Pe = new Xe(Nt)), Pe.init()),
            xe();
        }
      }
      function be (t) {
        if (e.location.href.toLowerCase().indexOf('mnthbh=1') !== -1)
          return void (t.homeBetweenHeadlines = !0);
        if (t.homeBelowNews === !0 && n && n._msnHbhPc && Ct) {
          var i = Me.getRandom(1, 100);
          i <= n._msnHbhPc && (t.homeBetweenHeadlines = !0);
        }
      }
      function xe () {
        if (je && !Ze) {
          var t = Ue.getItemsFromMacros('misc') || {},
            i = Ae(),
            r = '';
          Me.each(t, function (e, t) {
            r += '&' + t + '=' + e;
          }),
            (new Image().src =
              i +
              '/log?logid=kfk&evtid=mcrolog&cid=' +
              n._cid +
              '&purl=' +
              Me.encodeParam(e.location.href) +
              r +
              '&bkf=' +
              Ge +
              '&addp=' +
              Me.encodeParam(Je)),
            (Ze = !0);
        }
      }
      function Ne (n) {
        function i () {
          return Me.isSet(t.querySelector('div#precontent > div#sponsorship'));
        }
        function r () {
          var e = t.querySelector('div#precontent');
          return Me.isSet(e) ? e : null;
        }
        function a () {
          return 1 == e._mNAbvContAdUnitShown || i() || !Me.isStringSet(n);
        }
        function l (e) {
          var i = t.createElement('div');
          i.id = n;
          var r = e.firstChild;
          Me.isSet(r) ? e.insertBefore(i, r) : e.appendChild(i);
        }
        function s (t) {
          Me.isSet(t) && ((e._mNAbvContAdUnitShown = !0), l(t), o(n, c, n));
        }
        function d () {
          if (!a()) {
            var e = r();
            try {
              Me.isSet(e) && s(e);
            } catch (t) {}
          }
        }
        var c = '320x65';
        d();
      }
      function Ae () {
        return n._lHst || t.location.protocol + '//lg3.media.net';
      }
      function _e (n) {
        function i () {
          return 1 == e._mNDockerAdUnitShown || !Me.isStringSet(n);
        }
        function r () {
          var e = t.createElement('div');
          e.id = n;
          var i = Me.queryDOM('@body');
          i && i[0] && i[0].appendChild(e);
        }
        function a () {
          r(), (e._mNDockerAdUnitShown = !0), o(n, s, n);
        }
        function l () {
          i() || a();
        }
        var s = '320x65';
        l();
      }
      function Be () {
        var e,
          n,
          i = t.querySelectorAll('[data-nativead-postarticle-count]'),
          r = t.getElementsByClassName('sameoab_ad_container');
        return (
          (e = i && i.length > 0),
          (n = r && r.length > 0),
          (Je += 'pacf=' + e),
          (Je += '|oabcf=' + n),
          (Ge = e && n)
        );
      }
      function Ce (t, n, i) {
        function r (e, n) {
          if (!a(t))
            return e <= 0
              ? void setTimeout(function () {
                  a(t);
                }, 5000)
              : void setTimeout(function () {
                  r(--e, n);
                }, n);
        }
        function o () {
          null !== c && (c.disconnect && c.disconnect(), (c = null));
        }
        function a (e) {
          if (s(e, n)) return i(), o(), !0;
        }
        function l () {
          (c = new e.MutationObserver(function (e) {
            Me.any(e, function (e) {
              return a(e.target);
            });
          })),
            c.observe(t, { attributes: !0, attributeFilter: ['class'] });
        }
        function d () {
          return 'function' == typeof e.MutationObserver;
        }
        var c = null;
        this.init = function () {
          Me.isSet(t) && !a(t) && (d() ? l() : r(50, 200));
        };
      }
      function Ee () {
        function e (e) {
          try {
            new Ce(Me.queryDOM('.sameoab_ad_container:0'), 'fallback', e).init();
          } catch (t) {}
        }
        return { init: e };
      }
      function Oe () {
        function e (e) {
          var t = {};
          return Me.checkItemExistsInArray(i, e) && (t.oathbf = 1), t;
        }
        function t () {
          (n._custom = n._custom || {}), (n._custom.getPlacementRelatedParamsToLog = e);
        }
        var i = [];
        (this.setBackfillForLog = function (e) {
          Me.isStringSet(e) && i.push(e);
        }),
          t();
      }
      function ke (e) {
        function n (e) {
          try {
            var n = t.querySelector(e);
            Me.isSet(n) && (n.style.display = 'none');
          } catch (i) {}
        }
        try {
          var i = parseInt(Me.isSet(e.per) ? e.per : 0),
            r = Me.getRandom(1, 100);
          if (r <= i) return !0;
          Me.isStringSet(e.elem) && n(e.elem);
        } catch (o) {}
        return !1;
      }
      (e._mNAdUnitShown = e._mNAdUnitShown || !1),
        (e._mNBFAdUnitShown = e._mNBFAdUnitShown || !1),
        (e._mNBFSlideShowAdUnitShown = e._mNBFSlideShowAdUnitShown || !1),
        (e._mNBFVideoAdUnitShown = e._mNBFVideoAdUnitShown || !1),
        (e._mNIntraAdUnitShown = e._mNIntraAdUnitShown || !1),
        (e._mNHBHAdUnitShown = e._mNHBHAdUnitShown || !1),
        (e._mNAbvContAdUnitShown = e._mNAbvContAdUnitShown || !1),
        (e._mNDockerAdUnitShown = e._mNDockerAdUnitShown || !1);
      for (
        var Te,
          Pe,
          De,
          Me = n.util,
          Ue = n._util,
          Ie = null,
          Le = '#main',
          Fe = !0,
          We = !1,
          qe = e.location.href.toLowerCase(),
          He = !1,
          ze = !1,
          Ve = {},
          Re = !1,
          $e = !1,
          je = !1,
          Ze = !1,
          Ge = null,
          Je = '',
          Ke = n._MSNcptf || {},
          Qe = new Oe(),
          Xe = Me.getRequireModule('msn-placement-sd'),
          Ye = { DIV_NOT_PRESENT: 4 },
          et = e._mNCreativeList || {},
          tt = qe.split('?')[0],
          nt = ['btfSS'],
          it = 0;
        it < nt.length;
        it++
      ) {
        var rt = nt[it];
        if (et.hasOwnProperty(rt)) {
          var ot = 'alt_' + rt;
          et.hasOwnProperty(ot) &&
            (et[rt] = (function (e, t) {
              for (var n in e) if (e.hasOwnProperty(n) && tt.match(n)) return e[n];
              return t;
            })(et[ot], et[rt]));
        }
      }
      var at = et.smallImage || '247765123',
        lt = et.largeImage || '570804634',
        st = et.inParagraph || '162684754',
        dt = et.intraTag,
        ct = et.mobileIntraTag,
        ft = et.homeBetweenHeadlines,
        ut = et.btf1 || '746632598',
        mt = et.btf2 || '287049782',
        gt = et.btfSS || '117266446',
        vt = et.btfVI || '630718267',
        ht = et.btfVIMob || '',
        pt = et.btfSSMob || '671196292',
        yt = et.btfMob || '277279335',
        St = et.abvContAr || '',
        wt = et.abvContSS || '',
        bt = et.dockAr || '',
        xt = et.dockSS || '',
        Nt = et.nsdbtf || '',
        At = '622x220',
        _t = '226x264',
        Bt = et.homeBelowNews || '738876619',
        Ct = e._mNMSNMobile || !1,
        Et = {
          'auto-seg': {
            identifier: 'car-list',
            below: !0,
            crid: et.sdauto || '755526452',
            size: '1272x250',
            regex: /(autos|cars)(\/[^\/]+){1}(|\/compact|\/mid-size|\/large)\/?$/,
          },
          'myp-rpmm': {
            identifier: 'newlist',
            below: !0,
            crid: et.sdauto || '755526452',
            size: '1272x250',
            regex: /(autos|cars)(\/[^\/]+){1,2}\/[^\/]+($|\/(car-reviews|photos(|-360)(|-exterior|-interior)|)\/)/,
          },
          'myp-c': {
            identifier: '#compare-cars-module',
            below: !0,
            crid: et.sdauto || '755526452',
            size: '1272x250',
            regex: /(autos|cars)(\/[^\/]+){3}\/compare\//,
          },
          'myp-ops': {
            identifier: 'expert-review-section',
            below: !0,
            crid: et.sdauto || '755526452',
            size: '1272x250',
            regex: /(autos|cars)(\/[^\/]+){3,4}\/(pricing\/|options\/|specs\/|performance\/|(technology|exterior|interior)-features\/|[^\/]+\/?$)/,
          },
          'sports-t': {
            identifier: 'sportsfooter',
            below: !1,
            crid: et.sdsTeam || '911914841',
            size: '1272x250',
            regex: /sport(|s)\/.*\/team\//,
          },
          'sports-p': {
            identifier: 'sportsfooter',
            below: !1,
            crid: et.sdsPlayer || '840160324',
            size: '1272x250',
            regex: /sport(|s)\/.*\/player\//,
          },
          'money-s': {
            identifier: 'bingNewsContainer',
            below: !0,
            crid: et.sdmoney || '342813540',
            size: '948x250',
            regex: /money\/(stock|fund|etf|markets\/commodity)details\/[^\/]+\/?$/,
          },
          'money-index': {
            identifier: 'moverscontainer|newscontainer|dynaloadable',
            below: !0,
            crid: et.sdmoney || '342813540',
            size: '948x250',
            regex: /money\/indexdetails\/[^\/]+\/?$/,
          },
          'money-c': {
            identifier: 'insidertradeheader',
            below: !1,
            crid: et.sdmoney || '342813540',
            size: '948x250',
            regex: /money\/stockdetails\/company\/[^\/]+\/?$/,
          },
          'game-center': {
            identifier: '#fb-conversation-details',
            below: !1,
            crid: et.sdsGC || '663529372',
            size: '948x250',
            regex: /sport(|s)\/.*\/game-cent(er|re)\//,
          },
          'olympics-s': {
            mainP: '#aside',
            appendDiv: !0,
            crid: et.sdoS || '',
            size: '300x300',
            regex: /sport(|s)\/olympics-schedule/,
          },
          'olympics-m': {
            mainP: '#aside',
            identifier: 'topxitem',
            below: !0,
            crid: et.sdoM || '',
            size: '300x300',
            regex: /sport(|s)\/olympics-medaltally/,
          },
        },
        Ot = {
          regex: /money\/stockdetails\/(related|history|ownership|options|analysis|financials)\/[^\/]+\/?$/,
        };
      qe.indexOf('money/economy-grows-by-most-in-a-decade-on-us-consumer-spending-gain') !== -1 &&
        (Fe = !1),
        qe.indexOf('health/wellness/3-harmful-habits-that-are-worse-than-smoking') !== -1 &&
          (We = !0),
        (qe.indexOf('force_msn_paid_search_above') !== -1 || Me.isOptionSet(n._msnAbv)) &&
          (ze = !0),
        (n._custom = n._custom || {}),
        (n._custom.setContentProviderInfo = function (e) {
          var t = Ve.pageType || '';
          Pe && Me.isFunction(Pe.getSDPageType) && (t = Pe.getSDPageType() || t),
            e.updateEntity('chnm', Ve.department),
            e.updateEntity('chnm2', Ve.providerId),
            e.updateEntity('chnm3', t);
          var n = e.getParamFromLocHash('tdAdd[]') || '';
          e.addParamtoLocHash(
            'tdAdd[]',
            n + encodeURIComponent('|@|market=' + Ve.market + '|@|vertical=' + Ve.vertical)
          );
        }),
        he(),
        Me.callWhenAvailable(Le, 100, we, !1);
    })(window, document, _mN, _mNDetails);
  })();
}
